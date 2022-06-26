import styled from '@emotion/styled';

export const Section = styled.div`
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: ${props => props.theme.shadows.light};
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.primaryText};
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;

  color: ${props => props.theme.colors.whiteText};

  background-color: ${props => props.bgcolor};
`;

export const Label = styled.span`
  font-size: 15px;
`;

export const Percentage = styled.span`
  margin-top: 5px;
  font-size: 22px;
`;
