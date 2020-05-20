import React, { useState } from 'react';
import { Button } from 'poc-component-factory';
import { RadioButton } from 'poc-component-factory';
import { ThemeProvider } from 'styled-components'


const withCustomTheme = (Component, theme) => props => (
  <ThemeProvider theme={theme}>
    <Component {...props} />
  </ThemeProvider>
);

const myCustomTheme = {
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      light: "pink",
      main: "blue",
      dark: "black",
      contrastText: "purple",
    },
    secondary: {
      light: "#a2b9bc",
      main: "#b2ad7f",
      dark: "#878f99",
      contrastText: "#6b5b95",
    },
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    subtitle1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    button: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      textTransform: "uppercase",
      letterSpacing: "0.02857em",
    },
  },
  shape: {
    borderRadius: "4px",
  },
};

const MyNewThemedButton = withCustomTheme(Button, myCustomTheme);

export const App = () => {
  const [isFemaleSelected, setIsFemaleSelected] = useState(false);
  const [isMaleSelected, setIsMaleSelected] = useState(false);

  const toggleButton = (e) => {
    if (e.target.value === 'female') {
      setIsFemaleSelected(!isFemaleSelected);
    } else {
      setIsMaleSelected(!isMaleSelected);
    }
  };

  const onClick = () => console.log("Button Clicked!");

  return (
    <div>
      <Button onClick={onClick} variant="text" primary>
        Submit
      </Button>
      <Button onClick={onClick} variant="contained" primary>
        Submit
      </Button>
      <MyNewThemedButton
        onClick={onClick}
        variant="contained"
        primary
      >
        Submit
      </MyNewThemedButton>
      <MyNewThemedButton onClick={onClick} variant="text" primary>
        Submit
      </MyNewThemedButton>
      <div>
        <RadioButton
          label="Female"
          name="female"
          value="female"
          checked={isFemaleSelected}
          onChange={(e) => toggleButton(e)}
        />
      </div>
      <div>
        <RadioButton
          label="Male"
          name="female"
          value="male"
          checked={isMaleSelected}
          onChange={(e) => toggleButton(e)}
        />
      </div>
    </div>
  );
};

export default App;
