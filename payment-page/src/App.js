import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';






function App() {

  return (
    <div className="App">

      <div className='paymentForms'>

        <div>
          <h3>Enter the amount you would like to pay: </h3>
        </div>

        <div className='dollarInput'>
          <FormControl sx={{ width: '37ch' }} variant="outlined">
            <OutlinedInput className='payment'
              id="payment"
              endAdornment={<InputAdornment position="end">USD</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }} color="secondary"></OutlinedInput></FormControl>
        </div>

        <div>
          <h3>Description (Optional):</h3>
        </div>

        <div>
          <TextField
            id="description"
            label="Add your description here"
            multiline
            color='secondary'
            rows={4}
            sx={{ width: '37ch' }}
          />
        </div>

        <div className='continue'>
          <Button variant="contained" className='continue_btn'>Continue with Payment</Button>
        </div>

      </div>

    </div>
  );
}



export default App;
