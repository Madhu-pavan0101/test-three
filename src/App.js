import logo from './logo.svg';
import './App.css';
import '@mantine/core/styles.css';
import Object from './Components/Object';
import { MantineProvider } from '@mantine/core';
import Form from './Components/Form';
import CardsDemo from './CardsDemo';
function App() {
  return (
  <div className="App">
  <MantineProvider> 
  <Object/> 
  <Form></Form>
  <CardsDemo></CardsDemo>
  </MantineProvider>
  </div>
  );
}

export default App;
