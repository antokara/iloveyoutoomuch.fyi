/**
 * a single route
 */
interface IRoute {
  readonly PATH: string;
}

/**
 * a collection of routes
 */
interface IRoutes {
  readonly [KEY: string]: IRoute;
}

/**
 * the application's routes
 */
export const ROUTES: IRoutes = {
  HOME: {
    PATH: '/'
  },
  GALLERY: {
    PATH: '/gallery'
  },
  CONTACT: {
    PATH: '/contact'
  },
  SAVE_THE_DATE: {
    PATH: '/save-the-date/:guest?'
  }
};
