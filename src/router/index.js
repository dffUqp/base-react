import About from '../pages/About';
import Error from '../pages/Error';
import Login from '../pages/Login';
import PostPage from '../pages/PostPage';
import Posts from '../pages/Posts';

export const privateRoutes = [
  { path: '/post', element: Posts },
  { path: '/post/:id', element: PostPage },
  { path: '/about', element: About },
];

export const publicRoutes = [{ path: '/login', element: Login }];
