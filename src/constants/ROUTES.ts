/**
 * a single route
 */
interface IRoute {
  readonly path: string;
}

/**
 * a collection of routes
 */
interface IRoutes {
  readonly [key: string]: IRoute;
}

/**
 * the application's routes
 */
export const ROUTES: IRoutes = {
  contact: {
    path: '/contact' // test tslint space between and test unused imports
  },
  home: {
    path: '/'
  }
};
