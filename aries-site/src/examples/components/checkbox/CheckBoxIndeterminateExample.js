import React, { useState } from 'react';

import { Box, CheckBox, FormField } from 'grommet';

export const CheckBoxIndeterminateExample = () => {
  const [checked, setChecked] = useState([]);
  const checkboxes = ['morning', 'afternoon', 'evenging'];

  const onCheckAll = event => {
    if (event.target.checked) {
      setChecked(checkboxes);
    } else {
      setChecked([]);
    }
  };

  const onCheck = (event, value) => {
    if (event.target.checked) {
      setChecked([...checked, value]);
    } else {
      setChecked(checked.filter(item => item !== value));
    }
  };

  return (
    <Box align="center" gap="medium">
      <FormField htmlFor="Indeterminate-checkbox" label="Label">
        <Box pad="xsmall">
          <CheckBox
            id="Indeterminate-checkbox"
            checked={checked.length === 3}
            indeterminate={checked.length > 0 && checked.length < 3}
            label="All"
            onChange={onCheckAll}
          />
        </Box>
        {checkboxes.map(item => (
          <Box key={item} gap="small" pad="xsmall">
            <CheckBox
              id="Indeterminate-checkbox"
              key={item}
              checked={checked.includes(item)}
              label={item}
              onChange={e => onCheck(e, item)}
            />
          </Box>
        ))}
      </FormField>
    </Box>
  );
};
