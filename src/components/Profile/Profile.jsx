
import css from './Profile.module.css'
import PropTypes from 'prop-types';


export const Profile = ({username, tag, location, avatar, stats}) => {
  return (
<div class="profile">
  <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className="followers">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
      <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
      <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
  );
};



Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape(
    {
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }
  ).isRequired,
}

