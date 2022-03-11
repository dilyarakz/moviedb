import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Components/Home';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <Home />
      </ChakraProvider>
    </div>
  );
}

export default App;
