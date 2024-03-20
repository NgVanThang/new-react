//IMPORT LAYOUTS
import { DefaultLayout } from '~/components/Layout';
import { HeaderOnly } from '~/components/Layout';

//IMPORT PAGES
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';

const publicRoute = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile, layout: HeaderOnly },
];

const privateRoute = [];

export { publicRoute, privateRoute };
