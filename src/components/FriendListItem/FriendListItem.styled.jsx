import styled from '@emotion/styled';

export const FriendItemStyle = styled.li`
  display: flex;
  align-items: center;

  padding: ${({ theme }) => theme.space[4]}px ${p => p.theme.space[5]}px;

  :hover,
  :focus {
    box-shadow: ${({ theme }) => theme.shadows.bold};
  }
`;

export const OnlineStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${({ isOnline, theme }) =>
    isOnline ? theme.colors.approve : theme.colors.deny};
`;

export const Avatar = styled.img`
  display: block;
  max-width: 100%;
  height: auto;

  margin-left: ${({ theme }) => theme.space[3]}px;
`;

export const Name = styled.p`
  margin-left: 7px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
