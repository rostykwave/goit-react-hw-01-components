import styled from '@emotion/styled';

export const Transactions = styled.table`
  width: 70%;
  margin-right: auto;
  margin-left: auto;

  -webkit-box-shadow: 0px 10px 33px -25px #000000;
  box-shadow: 0px 10px 33px -25px #000000;

  
thead {
     height: 40px;
  background-color: aquamarine;
  }

tbody > tr {
  height: 40px;
}

tbody > tr:nth-of-type(2n) {
  background-color: #f2f2f2;
}

td {
  text-align: center;
}

`;