import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-top: 20px;

  color: grey;

  &:hover, 
  &:focus{
     -webkit-box-shadow: 0px 10px 33px -25px rgba(0, 0, 0, 0.54);
  box-shadow: 0px 10px 33px -25px rgba(0, 0, 0, 0.54);
  }
`;

export const Description = styled.div`
padding: 5px;
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
  font-size: 25px;

  // color: black;
  color: ${props => props.theme.colors.primaryText};
`;

export const Stats = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  background-color: #f3f6f9;
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
