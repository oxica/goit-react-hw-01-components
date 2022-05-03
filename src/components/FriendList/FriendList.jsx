import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
