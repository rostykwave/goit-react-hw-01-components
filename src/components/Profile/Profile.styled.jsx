import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-top: 20px;

  color: ${({ theme }) => theme.colors.secondaryText};

  :hover,
  :focus {
    box-shadow: ${({ theme }) => theme.shadows.light};
  }
`;

export const Description = styled.div`
  padding: ${({ theme }) => theme.space[2]}px;
`;

export const AvatarImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  width: 60%;
  margin-right: auto;
  margin-left: auto;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Stats = styled.ul`
  list-style: none;
  padding: ${({ theme }) => theme.space[0]}px;
  margin: 0;
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
`;

export const Item = styled.li`
  width: 100%;
  padding: 8px;

  display: flex;
  flex-direction: column;

  border: 1px solid #ebeff4;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
