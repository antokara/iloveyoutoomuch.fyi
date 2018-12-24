/**
 * Save The Date Component
 */
import { Loaded } from 'Components/saveTheDate/Loaded';
import { Loading } from 'Components/shared/Loading';
import * as React from 'react';

const SaveTheDate: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> =>
  data.loading ? <Loading /> : <Loaded data={data.saveTheDate} />;

export { SaveTheDate };
