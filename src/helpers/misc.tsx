const imgUrl: string = (path: string, params?: string = ''): string =>
  `${process.env.TAKESHAPE_ASSETS_HOST}${path}${params}`;

export { imgUrl };
