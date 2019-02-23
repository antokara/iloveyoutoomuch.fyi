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
  RSVP: {
    PATH: '/rsvp'
  },
  GALLERY: {
    PATH: '/gallery'
  },
  CONTACT: {
    PATH: '/contact'
  },
  STORY: {
    PATH: '/our-story'
  },
  INFORMATION: {
    PATH: '/information'
  },
  REGISTRY: {
    PATH: '/registry'
  },
  SAVE_THE_DATE: {
    PATH: '/save-the-date/:guest?'
  }
};
