import styled from '@emotion/styled';

export const FriendListStyle = styled.ul`
  list-style: none;
  padding: ${p => p.theme.space[3]}px;
  width: 40%;
  margin-right: auto;
  margin-left: auto;
`;

export const FriendItemStyle = styled.li`
  display: flex;
  align-items: center;

  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.bold};
  }
`;
