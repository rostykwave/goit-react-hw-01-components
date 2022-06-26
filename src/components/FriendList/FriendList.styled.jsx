import styled from '@emotion/styled';

export const FriendListStyle = styled.ul`
  list-style: none;
  padding: 0;
  width: 40%;
  margin-right: auto;
  margin-left: auto;
`;

export const FriendItemStyle = styled.li`
  display: flex;
  align-items: center;

  padding: 13px 15px;

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.boxShadow.bold};
  }
`;
