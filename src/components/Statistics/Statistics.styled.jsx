import styled from '@emotion/styled';

export const Section = styled.div`
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: ${({ theme }) => theme.shadows.light};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const StatList = styled.ul`
  list-style: none;
  padding: ${({ theme }) => theme.space[0]}px;
  margin: 0;
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  width: 100%;
  padding: ${({ theme }) => theme.space[2]}px;
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.whiteText};

  background-color: ${p => p.bgcolor};
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

export const Percentage = styled.span`
  margin-top: ${({ theme }) => theme.space[2]}px;
  font-size: ${({ theme }) => theme.fontSizes.l};
`;
