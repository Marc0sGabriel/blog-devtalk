import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Page404 } from './PageNotFound';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
