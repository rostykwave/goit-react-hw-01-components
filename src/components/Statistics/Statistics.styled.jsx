import styled from '@emotion/styled';

export const Section = styled.div`
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: ${p => p.theme.shadows.light};
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.primaryText};
`;

export const StatList = styled.ul`
  list-style: none;
  padding: ${p => p.theme.space[0]}px;
  margin: 0;
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  width: 100%;
  padding: ${p => p.theme.space[2]}px;
  display: flex;
  flex-direction: column;

  color: ${p => p.theme.colors.whiteText};

  background-color: ${p => p.bgcolor};
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Percentage = styled.span`
  margin-top: 5px;
  font-size: ${p => p.theme.fontSizes.l};
`;
