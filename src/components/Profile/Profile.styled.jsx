import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-top: 20px;

  color: ${p => p.theme.colors.secondaryText};

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.light};
  }
`;

export const Description = styled.div`
  padding: ${p => p.theme.space[2]}px;
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
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.primaryText};
`;

export const Stats = styled.ul`
  list-style: none;
  padding: ${p => p.theme.space[0]}px;
  margin: 0;
  display: flex;
  background-color: ${p => p.theme.colors.secondaryBg};
`;

export const Item = styled.li`
  width: 100%;
  padding: 8px;

  display: flex;
  flex-direction: column;

  border: ${p => p.theme.border};
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
