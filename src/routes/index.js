//IMPORT LAYOUTS
import { HeaderOnly } from '~/layouts';

//IMPORT PAGES
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import NotFoundPage from '~/pages/NotFoundPage';

const publicRoute = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile, layout: HeaderOnly },

  { path: '/*', component: NotFoundPage, layout: null },
];

const privateRoute = [];

export { publicRoute, privateRoute };
