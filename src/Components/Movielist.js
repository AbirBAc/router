import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";


function add (){
  return (
    

    <Container fluid>
        <footer>
 <form>
  <label>
  <h1 class="display-2">Add your movie name: </h1>
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Ajouter" />
</form>
</footer>
    </Container>
   
  )
}

export default add