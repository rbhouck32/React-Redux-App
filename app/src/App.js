import React from 'react';
import AvatarBuilder from "./components/AvatarBuilder"
import NavBar from "./components/NavBar"
import { Container } from "@material-ui/core"
 
function App() {
  return (
    <>
      <NavBar/>
      <Container maxWidth= "lg">
        <AvatarBuilder/>
      </Container>
    </>
    
    
  );
}

export default App;
