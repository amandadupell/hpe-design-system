import React from 'react';
import PropTypes from 'prop-types';
import {
  Anchor,
  Box,
  Button,
  Heading,
  NameValuePair,
  NameValueList,
  Tag,
  Page,
  PageContent,
} from 'grommet';
import { FormPrevious } from 'grommet-icons';
import { PageHeader } from 'grommet/components';
import { details, tags } from '.';

const Section = ({ ...rest }) => <Box gap="medium" flex={false} {...rest} />;

const SectionHeader = ({ heading }) => (
  <Box
    border={{ color: 'border-weak', side: 'bottom' }}
    pad={{ bottom: 'small' }}
    flex={false}
  >
    <Heading level={2} margin="none" size="small">
      {heading}
    </Heading>
  </Box>
);

const SectionDetails = ({ data }) => (
  <NameValueList valueProps={{ width: ['auto', 'medium'] }}>
    {Object.entries(data).map(([name, value]) => (
      <NameValuePair key={name} name={value.displayName}>
        {value.value}
      </NameValuePair>
    ))}
  </NameValueList>
);

export const TagResource = () => (
  <Page kind="narrow">
    <PageContent gap="small">
      <PageHeader
        title="Store C-3P0"
        subtitle="Aruba 530 32930F"
        parent={<Anchor icon={<FormPrevious />} label="Devices" />}
        actions={<Button label="Edit" primary />}
      />
      <Box gap="large" flex={false}>
        <Section>
          <SectionHeader heading="Details" />
          <SectionDetails data={details} />
        </Section>
        <Section gap="none">
          <SectionHeader heading="Tags" />
          <Box direction="row" pad={{ vertical: 'small' }} wrap>
            {tags.map((t, index) => {
              const [name] = Object.keys(t);
              const [value] = Object.values(t);
              return (
                <Tag
                  key={index}
                  name={name}
                  value={value}
                  margin={{ right: 'small', vertical: 'xsmall' }}
                  onClick={() =>
                    // eslint-disable-next-line no-alert
                    alert(
                      // eslint-disable-next-line max-len
                      `Clicking on '${name}: ${value}' tag could take a user to a filtered view displaying all devices with '${name}: ${value}' applied.`,
                    )
                  }
                />
              );
            })}
          </Box>
        </Section>
      </Box>
    </PageContent>
  </Page>
);

SectionHeader.propTypes = {
  heading: PropTypes.string,
};

SectionDetails.propTypes = {
  data: PropTypes.shape({
    displayName: PropTypes.string,
    value: PropTypes.string,
  }),
};
