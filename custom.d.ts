// make this work!
// @see https://www.apollographql.com/docs/react/recipes/webpack.html#Jest
declare module '*.qql' {
  const content: any;
  export default content;
}

declare module '*.graphql' {
  const content: any;
  export default content;
}
