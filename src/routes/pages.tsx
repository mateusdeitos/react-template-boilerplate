import { ComponentType } from 'react';
import Home from '../pages/Home';
import OtherPage from '../pages/OtherPage';
import PrivatePage from '../pages/PrivatePage';

interface IPages {
  path: string;
  exact: boolean;
  isPrivate: boolean;
  component: ComponentType;
}

const pages: IPages[] = [
  {
    path: '/',
    isPrivate: false,
    exact: true,
    component: Home,
  },
  {
    path: '/home',
    isPrivate: false,
    exact: false,
    component: Home,
  },
  {
    path: '/other-page',
    exact: true,
    component: OtherPage,
    isPrivate: false,
  },
  {
    path: '/private-page',
    exact: false,
    component: PrivatePage,
    isPrivate: true,
  },
];

export default pages;
