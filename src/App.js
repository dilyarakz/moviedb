import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Components/Home';
import Header from './Components/Header';
import { Routes, Route } from "react-router-dom";
import MovieDetails from './Components/MovieDetails';
import Favourites from './Components/Favourites';





function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movie/:id" element={<MovieDetails />} />
          <Route exact path="/movie/favourites" element={<Favourites />} />
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
