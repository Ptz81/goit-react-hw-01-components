
import css from './FriendList.module.css'

export function FriendListItem({ status, avatar, name }) {
  return (
    <li className={css.item}>
      <span className={status? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={status? css.name : css.noname}>{name}</p>
</li>
  )
}

