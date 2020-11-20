import React, { useState } from 'react';
import { Box, CheckBox } from 'grommet';
import { AppIdentity, UserContext } from '.';

const defaultUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@hpe.com',
  image: '//s.gravatar.com/avatar/99020cae7ff399a4fbea19c0634f77c3?s=80',
};

export const AppIdentityExample = () => {
  const [user, setUser] = useState(defaultUser);
  const [checked, setChecked] = useState(true);
  const [isAruba, setIsAruba] = useState();

  const onToggle = () => {
    if (user) setUser();
    else setUser(defaultUser);

    setChecked(!checked);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Box gap="small" align="start">
        <AppIdentity title="Service Name" brand={!isAruba ? 'hpe' : 'aruba'} />
        <CheckBox
          label="Signed In"
          checked={checked}
          onClick={onToggle}
          toggle
        />
        <CheckBox
          label="Aruba Service"
          checked={isAruba}
          onClick={() => setIsAruba(!isAruba)}
          toggle
        />
      </Box>
    </UserContext.Provider>
  );
};
