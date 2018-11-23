/**
 * an empty exporter to avoid importing debug/development packages in production
 * @see config/webpack/common.js
 */
const empty: null = null;

export { empty as ReduxLogger, empty as ReduxDevtoolsExtension };
