import styled from '@emotion/styled';

export const Transactions = styled.table`
  width: 60%;
  margin-right: auto;
  margin-left: auto;

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.bold};
  }

  thead {
    height: 40px;
    background-color: ${p => p.theme.colors.thead};
  }

  tbody > tr {
    height: 40px;
  }

  tbody > tr:nth-of-type(2n) {
    background-color: ${p => p.theme.colors.tbody};
  }

  td {
    text-align: center;
  }
`;
