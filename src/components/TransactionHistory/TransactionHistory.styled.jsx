import styled from '@emotion/styled';

export const Table = styled.table`
  width: 60%;
  margin-right: auto;
  margin-left: auto;

  :hover,
  :focus {
    box-shadow: ${({ theme }) => theme.shadows.bold};
  }
`;

export const TableHead = styled.thead`
  height: 40px;
  background-color: ${({ theme }) => theme.colors.thead};
`;

export const TableRow = styled.tr`
  height: 40px;
  :nth-of-type(2n) {
    background-color: ${({ theme }) => theme.colors.tbody};
  }
`;
export const TableData = styled.td`
  text-align: center;
`;
