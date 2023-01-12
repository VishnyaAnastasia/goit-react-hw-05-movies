import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Nav } from './Nav/Nav';
import Loader from './Loader/Loader';

const Tranding = lazy(() => import('../pages/Tranding'));
const Search = lazy(() => import('../pages/Search'));
const Details = lazy(() => import('../pages/Details'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Nav />
        <Routes>
          <Route path="/">
            <Route index element={<Tranding />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search/:id" element={<Details />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
