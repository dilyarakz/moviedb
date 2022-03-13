import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { getMovie, getRecom, addFav, removeFav } from '../Actions/MoviesServer';
import { connect, useDispatch } from "react-redux";
import store from '../store'
import {
  Button,
  Input,
  Container,
  Flex,
  Box,
  Spacer,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Center,
  Text,
  Image,
  Heading
} from '@chakra-ui/react'
import MovieItemCard from './MovieItemCard';
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const MovieDetails = (props) => {

  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [recomMovies, setRecomMovies] = useState([])
  const dispatch = useDispatch();

  console.log("Props in MovieDetails: " + props)

  useEffect(() => {
    console.log("Movie Details")
    props.getMovie(id).then(m => setMovie(m))
    props.getRecom(id).then(m => setRecomMovies(m))
  }, [id])

  const addFavMovie = (e) => {
    e.preventDefault();
    dispatch(addFav(movie))
  }

  const removeFavMovie = (e) => {
    e.preventDefault();
    console.log("Removing fav")
    dispatch(removeFav(movie.id))
  }




  return (
    <Container maxW='container.x1' align='center'>


      <Flex maxW='85%' p={10} style={{ backgroundColor: "red", margin: 10 }}>
        <VStack style={{ backgroundColor: "blue" }} w='40%' h='full' align="center" bgcolor='red' justifyContent='center'>
          <Image maxW='400px' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        </VStack>

        <VStack w='60%' h='full' p={10} spacing={10} alignItems="flex-start" bgColor='purple' justifyContent='center' >
          <Heading>{movie.title}</Heading>
          <Heading>Overview</Heading>
          <Heading>{movie.release_date}</Heading>
          <Heading>{movie.language}</Heading>
          <Heading>{movie.popularity}</Heading>
          <Text>
            {movie.overview}
          </Text>
          <Button style={{ background: "none" }} onClick={addFavMovie}>
            <Text style={{ marginRight: "0.7rem" }}>Favourite </Text>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fillRule="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </Button>

          <Button style={{ background: "none" }} onClick={removeFavMovie}>
            <Text style={{ marginRight: "0.7rem" }}>Remove FavMovie </Text>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fillRule="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </Button>

        </VStack>
      </Flex>

      <Flex maxW='85%' p={10} style={{ backgroundColor: "red", margin: 10 }}>

        <Flex maxH={400} style={{ overflowX: "scroll", border: "2px solid white", background: "purple" }}>
          {
            recomMovies.map(movie => {
              return (<MovieItemCard key={movie.id} movie={movie} width={100} />)
            })
          }
        </Flex>

      </Flex>
    </Container>
  );
}

MovieDetails.propTypes = {
  getMovie: PropTypes.func.isRequired,
  getRecom: PropTypes.func.isRequired,
  addFav: PropTypes.func.isRequired,
};
MovieDetails.defaultProps = defaultProps;
// #endregion



export default connect(
  null,
  { getMovie, getRecom, addFav }
)(MovieDetails);