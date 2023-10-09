import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import {
  GithubSearchScene,
  GithubDetailScene,
  HomeScene,
  RickSearchScene,
  RickDetailScene
} from '@/scenes';

import { path } from './const';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={path.HOME} element={<HomeScene></HomeScene>}></Route>
        <Route
          path={path.SEARCHGITHUB}
          element={<GithubSearchScene></GithubSearchScene>}
        ></Route>
        <Route
          path={path.DETAILGITHUB}
          element={<GithubDetailScene></GithubDetailScene>}
        ></Route>
        <Route
          path={path.SEARCHRICK}
          element={<RickSearchScene></RickSearchScene>}
        ></Route>
        <Route
          path={path.DETAILRICK}
          element={<RickDetailScene></RickDetailScene>}
        ></Route>
      </Routes>
    </Router>
  );
};
