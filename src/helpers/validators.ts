/**
 * @see https://redux-form.com/7.4.2/examples/fieldlevelvalidation/
 */

/**
 * type of a validator function
 */
type IValidator = (value: string) => string | undefined;

/**
 * a required field
 * @param value field value
 */
const required: IValidator = (value: string): string | undefined =>
  value || typeof value === 'number' ? undefined : 'Required';

/**
 * interface for our list of validators
 */
interface IValidators {
  readonly [key: string]: IValidator;
}

/**
 * our list of redux-form validators
 */
export const validators: IValidators = {
  required
};
