import {
  TableCell,
  TableContainer,
  TableRow,
  styled,
  tableCellClasses
} from '@mui/material';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: 'none',
  [`&.${tableCellClasses.head}`]: {
    borderBottom: `3px solid ${theme.palette.secondary.dark}`,
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.black,
    fontWeight: 700
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16
  }
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.secondary.dark}`
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  scrollbarColor: ` ${theme.palette.primary.dark} transparent`,
  scrollbarWidth: 'thin',
  '&::-webkit-scrollbar': {
    width: '12px',
    height: '12px'
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.dark,
    borderRadius: '24px',
    border: `4px solid ${theme.palette.background.default}`
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.background.default
  }
}));
