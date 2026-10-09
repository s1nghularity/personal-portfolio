import '../styles/Changes.css';

/**
 * What changed on a project, one row per change: a label, a sentence on
 * why it mattered, and the before/after side by side underneath.
 * `changes` is [{ label, note, before, after }].
 */
export const Changes = ({ changes, name }) => (
  <div className='chg-list'>
    {changes.map((c) => (
      <div className='chg-row' key={c.label}>
        <div className='chg-text'>
          <h4 className='chg-label'>{c.label}</h4>
          <p className='chg-note'>{c.note}</p>
        </div>
        <div className='chg-pair'>
          <figure className='chg-shot'>
            <img
              src={c.before}
              alt={`${name} ${c.label.toLowerCase()}, before`}
              loading='lazy'
            />
            <span className='chg-tag' aria-hidden='true'>Before</span>
          </figure>
          <figure className='chg-shot chg-shot-after'>
            <img
              src={c.after}
              alt={`${name} ${c.label.toLowerCase()}, after`}
              loading='lazy'
            />
            <span className='chg-tag' aria-hidden='true'>After</span>
          </figure>
        </div>
      </div>
    ))}
  </div>
);
