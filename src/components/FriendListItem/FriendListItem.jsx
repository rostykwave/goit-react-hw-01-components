import { FriendItemStyle } from 'components/FriendList/FriendList.styled';
import PropTypes from 'prop-types';
import { Avatar, Name, OnlineStatus } from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendItemStyle>
      <OnlineStatus status={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItemStyle>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
