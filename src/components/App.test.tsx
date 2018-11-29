/**
 * App component test
 */
import { App } from 'Components/App';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

describe('App component', () => {
  let c: ShallowWrapper = null;
  beforeEach(() => {
    c = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(c).toMatchSnapshot();
  });
});
