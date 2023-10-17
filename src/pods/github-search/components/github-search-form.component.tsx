import React from 'react';
import { InputAdornment, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useGithubContext } from '@/core/providers/github.context';

import { inputIcon } from './github-search-form.styles';

interface Props {
  onSubmit: (valor: string) => void;
}

export const GithubSearchFormComponent = React.memo((props: Props) => {
  const { onSubmit } = props;
  const { github, setGithub } = useGithubContext();

  //Para que el input si no se encuentra la compañia, el mensaje de la compañía no encontrada no cambie
  const [value, setValue] = React.useState(github.company);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    setGithub({ company: value, page: 1, scrollPosition: 0 });
    console.log(github);
    onSubmit(value);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value);
  };

  return (
    <Paper
      component="form"
      id="search-form"
      sx={{ padding: { xs: 1, sm: 2 }, marginTop: { xs: 0, sm: 1 } }}
      onSubmit={handleSubmit}
    >
      <TextField
        id="search"
        type="search"
        value={value}
        onChange={handleChange}
        sx={{ width: '100%' }}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              component="button"
              type="submit"
              sx={inputIcon}
            >
              <SearchIcon color="primary" />
            </InputAdornment>
          )
        }}
      />
    </Paper>
  );
});
