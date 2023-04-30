import defaultimg from './default.png'
import css from './FriendList.module.css'

export function FriendListItem({ status, avatar, name }) {
  if (!avatar) {
    avatar = defaultimg;
  }
  return (
    <li className={css.item}>
      <span className={status? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar??defaultimg} alt="User avatar" width="48" />
      <p className={status? css.name : css.noname}>{name}</p>
</li>
  )
}

