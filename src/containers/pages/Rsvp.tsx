/**
 * RSVP Container
 * returns the Loading indicator component while the GraphQL is pending and
 * when loaded, it returns the Generic component
 */
import { Rsvp as RsvpComponent } from 'Components/pages/Rsvp';
import { Loading } from 'Components/shared/Loading';
import * as getRsvp from 'Gql/getRsvp';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { graphql } from 'react-apollo';
import { reduxForm } from 'redux-form';

class RsvpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  /**
   * called from the onSubmit event of the form
   */
  private submitHandler(values: object): void {
    console.log('submitHandler', values);
  }

  render() {
    const { data, handleSubmit } = this.props;
    if (data.loading) {
      return <Loading />;
    }
    return (
      <RsvpComponent
        body={data.rsvp.body}
        onSubmit={handleSubmit(this.submitHandler)}
      />
    );
  }
}

RsvpContainer.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  handleSubmit: PropTypes.func.isRequired
};

const Rsvp: React.ComponentClass = graphql(getRsvp)(
  reduxForm({
    form: 'rsvp',
    enableReinitialize: true
  })(RsvpContainer)
);

export { Rsvp };
