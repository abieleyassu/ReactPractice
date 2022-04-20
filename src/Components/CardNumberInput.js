import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CardNumberInput() {

  function handleChange(event) {
    console.log(event.target.value);
  }
  
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="CardInput" label="Card Number" variant="outlined" color="secondary" onChange={handleChange}/>
    </Box>
  );
}
