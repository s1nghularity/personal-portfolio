import { useRef, useState, useCallback, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/BeforeAfter.css';

gsap.registerPlugin(ScrollTrigger);

const REST = 38; // where the handle settles after the reveal (% of width showing "before")

/**
 * Drag-to-compare slider. The "after" image sits underneath; the "before"
 * image is clipped from the right as the handle moves.
 *
 * On first scroll into view it wipes from all-before to mostly-after, so the
 * change is visible without anyone dragging. Any touch stops the wipe.
 * A visually hidden range input drives it for keyboard and screen readers.
 */
export const BeforeAfter = ({ before, after, beforeAlt, afterAlt }) => {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const [pos, setPos] = useState(reduce ? 50 : 100);
  const frameRef = useRef(null);
  const dragging = useRef(false);
  const tween = useRef(null);

  // the reveal
  useEffect(() => {
    if (reduce) return undefined;
    const el = frameRef.current;
    const proxy = { v: 100 };
    tween.current = gsap.to(proxy, {
      v: REST,
      duration: 2.2,
      ease: 'power3.inOut',
      delay: 0.35,
      paused: true,
      onUpdate: () => setPos(proxy.v),
    });
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 70%',
      once: true,
      onEnter: () => tween.current?.play(),
    });
    return () => {
      st.kill();
      tween.current?.kill();
    };
  }, [reduce]);

  const stopReveal = () => {
    if (tween.current?.isActive()) tween.current.kill();
  };

  const moveTo = useCallback((clientX) => {
    const rect = frameRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    stopReveal();
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };
  const onPointerMove = (e) => {
    if (dragging.current) moveTo(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      className='ba-frame'
      ref={frameRef}
      style={{ '--ba-pos': `${pos}%` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      data-lenis-prevent
    >
      <img className='ba-img' src={after} alt={afterAlt} loading='lazy' draggable='false' />
      <div className='ba-before' aria-hidden='true'>
        <img className='ba-img' src={before} alt='' loading='lazy' draggable='false' />
      </div>

      <span className='ba-label ba-label-before' aria-hidden='true'>Before</span>
      <span className='ba-label ba-label-after' aria-hidden='true'>After</span>

      <div className='ba-handle' aria-hidden='true'>
        <span className='ba-knob'>‹ ›</span>
      </div>

      <input
        className='ba-range'
        type='range'
        min='0'
        max='100'
        value={Math.round(pos)}
        onChange={(e) => {
          stopReveal();
          setPos(Number(e.target.value));
        }}
        aria-label={`Compare before and after: ${beforeAlt} versus ${afterAlt}`}
      />
    </div>
  );
};

/**
 * Several before/after pairs for one project, switched with small tabs.
 * `pairs` is [{ label, caption, before, after }]. A single pair renders no tabs.
 */
export const BeforeAfterSet = ({ pairs, name }) => {
  const [active, setActive] = useState(0);
  const pair = pairs[active];

  return (
    <div className='ba-set'>
      {pairs.length > 1 && (
        <div className='ba-tabs' role='tablist' aria-label={`${name} before and after`}>
          {pairs.map((p, i) => (
            <button
              key={p.label}
              type='button'
              role='tab'
              aria-selected={i === active}
              className={`ba-tab${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}
      <BeforeAfter
        key={pair.label}
        before={pair.before}
        after={pair.after}
        beforeAlt={`The ${name} ${pair.label.toLowerCase()} page before the redesign`}
        afterAlt={`The ${name} ${pair.label.toLowerCase()} page after the redesign`}
      />
      <p className='ba-caption'>
        {pair.caption}
        <span className='ba-hint'>Drag to compare</span>
      </p>
    </div>
  );
};
