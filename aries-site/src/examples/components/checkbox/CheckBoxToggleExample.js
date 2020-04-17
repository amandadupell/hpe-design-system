import React, { useState } from 'react';
import { Box, CheckBox, FormField } from 'grommet';

export const CheckBoxToggleExample = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Box align="center" pad="large">
      <FormField label="Label" htmlFor="checkbox-label" >
        <CheckBox
          label="Choice"
          checked={checked}
          onChange={event => setChecked(event.target.checked)}
          toggle
        />
      </FormField>
    </Box>
  );
};
