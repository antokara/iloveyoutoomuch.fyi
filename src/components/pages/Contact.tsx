/**
 * Contact page Component
 */
import { PageWrapper } from 'Components/layouts/themed/PageWrapper';
import { MarkdownWrapper } from 'Components/shared/MarkdownWrapper';
import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

const Contact: React.FunctionComponent = ({
  body
}): React.ReactElement<React.ReactNode> => (
  <PageWrapper>
    <MarkdownWrapper>
      <ReactMarkdown source={body} />
    </MarkdownWrapper>
  </PageWrapper>
);

export { Contact };
