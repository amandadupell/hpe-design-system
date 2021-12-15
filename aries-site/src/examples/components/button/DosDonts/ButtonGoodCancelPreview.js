import React from 'react';
import { Box, Button, Heading, Header, Text } from 'grommet';

export const ButtonGoodCancelPreview = () => (
  <Box width="large" gap="medium" pad="small">
    <Header
      direction="column"
      align="start"
      gap="xxsmall"
      pad={{ horizontal: 'xxsmall' }}
    >
      <Heading level={2} margin="none">
        Delete
      </Heading>
      <Text size="xlarge">
        Deleting this item? Consider previewing results to see the effects of
        deleting the iteam.
      </Text>
    </Header>
    <Box direction="row" justify="end" gap="small">
      <Button label="Cancel" onClick={() => {}} />
      <Button secondary label="Preview Results" onClick={() => {}} />
      <Button primary label="Save" onClick={() => {}} />
    </Box>
  </Box>
);
