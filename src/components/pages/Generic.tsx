/**
 * Generic page Component
 */
import { BgOverlay } from 'Components/layouts/themed/BgOverlay';
import { PageWrapper } from 'Components/layouts/themed/PageWrapper';
import { MarkdownWrapper } from 'Components/shared/MarkdownWrapper';
import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

const Generic: React.FunctionComponent = ({
  body
}): React.ReactElement<React.ReactNode> => (
  <BgOverlay>
    <PageWrapper>
      <MarkdownWrapper>
        <ReactMarkdown source={body} escapeHtml={false} />
      </MarkdownWrapper>
    </PageWrapper>
  </BgOverlay>
);

export { Generic };
