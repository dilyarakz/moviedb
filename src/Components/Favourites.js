import React from 'react';
import {  useSelector } from "react-redux";
import {
  Container,
  Flex,
  Wrap,
  WrapItem,
  Center,
} from '@chakra-ui/react'
import MovieItemCard from './MovieItemCard';


const propTypes = {};

const defaultProps = {};


const Favourites = () => {
  
  const favourites = useSelector(state => state.fmovies)
  const allGenres = useSelector(state => state.genres)

  function getGenreNames(allGenres, res) {
    const gNames = []
    if (allGenres.hasOwnProperty('genres')) {
   
      allGenres.genres.genres.map(genre => {
        if (res.hasOwnProperty("genre_ids")) {
          res.genre_ids.map(id => {
            if (Number(id) === Number(genre.id)) {
              if (gNames.indexOf(genre.name) === -1) {
                gNames.push(genre)
              }
            }
          })
        }
      })
    }
    return gNames;
  }

  return (
    <Container maxW='container.x1' h='100vh'>
      <Flex justifyContent='center' alignItems='center'>
        <Wrap p={10} spacing={8}>
          {
            favourites.fmovies.map((res, index) => {
              if (typeof res !== 'undefined') {
                return (
                  <WrapItem key={res.id}>
                    <Center key={res.id}>
                      <MovieItemCard key={res.id} movie={res} height={'30rem'} width={'20rem'} genre={getGenreNames(allGenres, res)}/>
                    </Center>
                  </WrapItem>
                )
              }
            })
          }
        </Wrap>
      </Flex>
    </Container>

  );
}

Favourites.propTypes = propTypes;
Favourites.defaultProps = defaultProps;

export default Favourites;