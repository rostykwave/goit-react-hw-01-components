import styled from '@emotion/styled';

export const OnlineStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${props => {
    if (props.status) {
      return '#008000';
    }

    return '#ff0000';
  }};
`;

export const Avatar = styled.img`
  display: block;
  max-width: 100%;
  height: auto;

  margin-left: 7px;
`;

export const Name = styled.p`
  margin-left: 7px;
  font-weight: 700;
`;
