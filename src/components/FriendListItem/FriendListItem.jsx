import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={s.item}>
      <span className={s[isOnline]}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
