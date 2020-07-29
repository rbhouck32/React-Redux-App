import React from 'react';
import AvatarBuilder from "./components/AvatarBuilder"

import  { Container, Button, Grid }  from "@material-ui/core"

function App() {
  return (
    
      <Container maxWidth= "lg">
      <h1>Build your own Avatar</h1>
      <AvatarBuilder></AvatarBuilder>
      
    </Container>
    
    
  );
}

export default App;
