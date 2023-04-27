import css from "./Description.module.css"

const Description = ({username, tag, location, avatar}) => {
  return (
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
);
}
export default Description;
