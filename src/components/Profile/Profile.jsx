import user from './user.json'
import css from './Profile.module.css'
import Description from './Description'
import Stats from './Stats';
// const data = {
//   "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// }

export const Profile = () => {
  return (
    <div className={css.profile}>
      <Description items={ user } />
      <Stats />
    </div>
  );
};

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>


