// import user from './user.json'

// {
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



const Followers = ({followers}) =>
  (
    <li>
      <span className="followers">Followers</span>
      <span className="quantity">{followers}</span>
    </li>

  )


export default Followers;
