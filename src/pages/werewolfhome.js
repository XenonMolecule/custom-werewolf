import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';

const ButtonData = [
  { label: 'Jalen' },
  { label: 'Werewolf' },
  { label: 'Werewolf' },
  { label: 'Minion' },
  { label: 'Luca' },
  { label: 'Samantha' },
  { label: 'Donovan' },
  { label: 'Michael' },
  { label: 'Clark' },
  { label: 'Rachel' },
];

const AppWrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  padding: 2rem;
  background-color: #f5f5f5;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 0;
`;

function App() {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const toggleButton = (label) => {
    setSelectedButtons((prevSelectedButtons) => {
      if (prevSelectedButtons.includes(label)) {
        return prevSelectedButtons.filter((item) => item !== label);
      } else {
        return [...prevSelectedButtons, label];
      }
    });
  };

  const playButtonClicked = () => {
    console.log("Selected buttons:", selectedButtons);
  };

  return (
    <AppWrapper>
      <Container maxWidth="sm">
        <Grid container spacing={2} justifyContent="center">
          {ButtonData.map((button, index) => (
            <Grid key={index} item xs={4}>
              <StyledButton
                variant={selectedButtons.includes(button.label) ? "contained" : "outlined"}
                color={selectedButtons.includes(button.label) ? "primary" : "default"}
                onClick={() => toggleButton(button.label)}
              >
                {button.label}
              </StyledButton>
              <Typography align="center" variant="subtitle1">
                {button.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          color="secondary"
          onClick={playButtonClicked}
          sx={{ marginTop: '2rem' }}
        >
          PLAY
        </Button>
      </Container>
    </AppWrapper>
  );
}

export default App;
