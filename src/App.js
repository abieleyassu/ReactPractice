import './App.css';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



function App() {

  {/* In the code segment below variables that are used throught this program
 are declared. These specific variables below in this program are used to store
important information about a client from their first and last name to their
street address and their zipcode, and last but not least information about their
credit card which contains the fields of card number, ccv number, and expiration
date.*/}
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [clientStreetAddress, setClientStreetAddress] = useState("");
  const [clientZipCode, setClientZipCode] = useState("");
  const [clientCardNumber, setClientCardNumber] = useState("");
  const [clientCCV, setClientCCV] = useState("");
  let isValid = new Boolean(false);
 


  function getClientFirstName(event) {
    setFirstName(event.target.value);
  }

  function getClientLastName(event) {
    setLastName(event.target.value);
  }

  function getCardNumber(event) {
    setClientCardNumber(event.target.value);
    console.log(clientCardNumber.length+1);
  }

  function getCVV(event) {
    setClientCCV(event.target.value);
  }

  function getFullName(event){
    console.log(firstName + " " + lastName + " " + clientCardNumber);
  }


  function checkCardValidity(event){
    
    if(clientCardNumber.length == 15){
      isValid = new Boolean(true);

      console.log("");
    }

    if(clientCardNumber.length == 16){
      isValid = new Boolean(true);
      console.log(isValid.toString());
    }

    if (clientCardNumber.length != 15 && clientCardNumber.length != 16){
      console.log("Sorry you have an invalid card ");
    }
  }


  function getFullName(event) {
    console.log("The full name is: " + firstName + " " + lastName);
    console.log("The card number is: " + clientCardNumber);
    console.log("The CCV number is: " + clientCCV);
  }

  return (
    <div className="App">

      {/* This is the header div of the website. It presents the user with a welcome
    message that says "Welcome to AE's Credit Card Payment Managment System". The
    message is displayed using an h1 tag to make it stand out. */}
      <div className="Header">
        <h1 className="Text">Welcome to AE's Credit Card Payment Managment System</h1>
      </div>

      {/* This div tag is to collect all of the different components that are used within
    the website allowing the developer to edit their css without having to deal with 
    mulitple different css elements. */}
      <div className="UI">

        <div className="FirstName">

          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '40ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="First Name" label="First Name" variant="outlined" color="secondary" onChange={getClientFirstName} />
          </Box>

          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '40ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="Last Name" label="Last Name" variant="outlined" color="secondary" onChange={getClientLastName} />
          </Box>

        </div>


        <div className="CardNumber">

          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '40ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="CardInput" label="Card Number" variant="outlined" color="secondary" onChange={getCardNumber} />
          </Box>

        </div>

        <div className="CCV">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '40ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="CCVInput" label="CCV" variant="outlined" color="secondary" onChange={getCVV} />
          </Box>
        </div>

        <div className="SubmitButton">
          <Stack spacing={2} direction="row">
            <Button variant="outlined" color="secondary" onClick={checkCardValidity}>Submit</Button>
          </Stack>
        </div>

      </div>

    </div>
  );

}



//   const [clientFirstName, setClientFirstName] = useState("");
//   const [clientLastName, setClientLastName] = useState("");
//   const [clientStreetAddress, setClientStreetAddress] = useState("");
//   const [clientZipCode, setClientZipCode] = useState("");
//   const [clientCardNumber, setClientCardNumber] = useState("");
//   const [clientCCV, setClientCCV] = useState("");




//   function getClientFirstName(event) {

//     setClientFirstName(event.target.value);
//   }




//return (
//     <div className="App">

//       <div className="Header">
//         <h1 className="Text">Welcome to AE's Credit Card Payment Managment System</h1>
//       </div>


//       <div className="UI">



//         <div className="CCV">
//           <CCVInput placeholder="CCV" onChange={e => setClientCCV(e.target.value)} />
//         </div>


//         <div className='SubmitButton'>
//           <button>Submit</button>
//         </div>

//       </div>

//       <div className="Footer">
//         <footer>©Copyright AEYASSU 2022</footer>
//       </div>
//     </div>
//  );

//   function getCardNumber() {
//     console.log(clientCardNumber);
//   }

// }




export default App;
