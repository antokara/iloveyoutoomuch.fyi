# iloveyoutoomuch.fyi

## Status Badges

[![FOSSA Status][licenses]][licenses-url]
[![Dependencies][deps]][deps-url]
[![Build Status][build-status]][build-status-url]

## Development

### Installation

#### Prerequisites

1. [Node.js ~8.12.0 LTS](https://nodejs.org/en/)

#### Instructions

1. `$npm install`
1. create a `.env` file in the project directory (use the existing `.env.example` file as a reference)
1. `$npm start`
1. Open browser to <http://localhost:9000/>

#### Chrome Tools

1. [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
1. [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

### Standards

1. [Semantic Versioning](https://semver.org/)
1. [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)
1. [Airbnb JavaScript Style Guide](http://airbnb.io/javascript/)
1. [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
    1. [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)
1. [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action)
1. [SiteMaps](https://www.sitemaps.org/protocol.html)

### Primary Tools & Packages

  1. [Webpack](https://webpack.js.org)
  1. [Babel](https://babeljs.io/)
  1. [Typescript](https://www.typescriptlang.org/)
  1. [React](https://reactjs.org/)
  1. [react-hot-loader](https://github.com/gaearon/react-hot-loader)
  1. [Redux](https://redux.js.org/)
  1. [Jest](https://jestjs.io/)
  1. [DotEnv](https://github.com/motdotla/dotenv#readme)
  1. [Semantic Release](https://semantic-release.gitbook.io/semantic-release/)

### Module Aliases

1. Webpack (for development and production)
    1. file `/config/webpack/common.js`
    1. key `resolve.alias`
1. Jest (for testing)
    1. file `package.json`
    1. key `jest.moduleNameMapper`
1. esLint (for development)
    1. file `package.json`
    1. key `eslintConfig.settings.import/resolver.alias`

### Testing

#### Run all tests

`$npm test`

#### Run all tests and provide coverage report

`$npm run test-coverage`

_note: output will be printed in console, as well as in the `reports/coverage` directory_

## Build

`$npm run build`

* *In prod. env. all code (html, css, js) is getting minified / uglified and source maps are getting generated as separate files*
* output directory of the build is `dist`

_note: [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) will generate the report in `reports/webpackBundleAnalyzer.html`_

## Deployment

git push to `master` triggers `travis-ci` build, which if successful, pushes to production. `.travis.yml` contains the travis-ci build and deployment configuration.

## Credits and Copyrights

1. Icons made by [Freepik](http://www.freepik.com) from [Flaticon](http://www.flaticon.com) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)
