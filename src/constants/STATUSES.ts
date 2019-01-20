/**
 * a collection of statuses
 */
interface IStatuses {
  readonly [KEY: string]: string;
}

/**
 * the application's statuses
 */
export const STATUSES: IStatuses = {
  DEFAULT: 'DEFAULT',
  PENDING: 'PENDING',
  FAILED: 'FAILED',
  SUCCEEDED: 'SUCCEEDED'
};
