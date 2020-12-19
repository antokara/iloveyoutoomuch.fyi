/**
 * Themed Layout Component
 */
import { Loaded } from 'Components/layouts/themed/Loaded';
import { Loading } from 'Components/shared/Loading';
import * as React from 'react';

const Themed: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> =>
  data.loading ? <Loading /> : <Loaded data={data.getTheme} />;

export { Themed };
