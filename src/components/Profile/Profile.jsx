import PropTypes from 'prop-types';
import { Card, Description, AvatarImage, Name, Stats, Item, Quantity } from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  // const { avatar, username, tag, location, stats } = props;
  const { followers, views, likes } = stats;

  return (
    <Card>
      <Description>
        <AvatarImage src={avatar} alt={`${username} avatar`} />
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <Stats>
        <Item>
          <span>Followers</span>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <span>Views</span>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <span>Likes</span>
          <Quantity>{likes}</Quantity>
        </Item>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
