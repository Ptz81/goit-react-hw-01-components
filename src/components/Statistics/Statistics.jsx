import css from './Statistics.module.css'
import PropTypes from 'prop-types';

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({title, stats}) => {

  return (
    <section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
            <li
            key={id}
            className={css.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={css.label}>{ label }</span>
            <span className={css.percentage}>{ percentage }%</span>
          </li>
        )

        )}
  </ul>
</section>
  )
}


Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  persentage: PropTypes.number.isRequired
}
