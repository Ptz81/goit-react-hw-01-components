
import css from './Stats.module.css'
import Followers from './Followers';
import Views from './Views';
import Likes from './Likes';



const Stats = ({followers, views, likes}) => {
  return (
    <ul className={css.stats}>
      <Followers statFollowers={ followers} />
      <Views statViews={ views} />
      <Likes statLikes={ likes} />
   </ul>
  );
};

export default Stats;
