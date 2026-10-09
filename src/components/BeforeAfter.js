import { useRef, useState, useCallback } from 'react';
import '../styles/BeforeAfter.css';

/**
 * Drag-to-compare slider. The "after" image sits underneath; the "before"
 * image is clipped from the right as the handle moves. A visually hidden
 * range input drives it, so it works with keyboard and screen readers.
 */
export const BeforeAfter = ({ before, after, beforeAlt, afterAlt, start = 50 }) => {
  const [pos, setPos] = useState(start);
  const frameRef = useRef(null);
  const dragging = useRef(false);

  const moveTo = useCallback((clientX) => {
    const rect = frameRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
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
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Compare before and after: ${beforeAlt} versus ${afterAlt}`}
      />
    </div>
  );
};
