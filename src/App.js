import React from 'react';
import ReactDOM from 'react-dom'
import { Container } from 'semantic-ui-react';
import Login from './Login';

function clickHandler(props) {
	alert(props.text)
}

const App = () => (
  <Container>
    <Login />
  </Container>
);


export default App;
