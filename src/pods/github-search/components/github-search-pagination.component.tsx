import React from 'react';
import { Box, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props {
  page: number;
  totalPage: number;
  onClick: (valor: number) => void;
}

export const GithubSearchPaginationComponent: React.FC<Props> = props => {
  const { page, totalPage, onClick } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1.5
      }}
    >
      <Button
        onClick={() => {
          onClick(page - 1);
        }}
        disabled={page === 1 ? true : false}
        variant="outlined"
        color="secondary"
        startIcon={<ArrowBackIosNewIcon />}
      >
        Prev
      </Button>
      <p> {` ${page} de ${totalPage} `}</p>
      <Button
        onClick={() => {
          onClick(page + 1);
        }}
        disabled={totalPage === page ? true : false}
        variant="outlined"
        endIcon={<ArrowForwardIosIcon />}
      >
        Next
      </Button>
    </Box>
  );
};
