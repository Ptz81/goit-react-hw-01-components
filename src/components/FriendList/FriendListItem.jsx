
import css from './FriendList.module.css'

export function FriendListItem({ status, avatar, name }) {
  return (
    <li className={css.item}>
      <span className={css.status? css.online : css.offline}>{status}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
</li>
  )
}

