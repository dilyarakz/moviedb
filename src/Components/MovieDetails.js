import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { getMovie, getRecom, addFav, removeFav, getGenres } from '../Actions/MoviesServer';
import { connect, useDispatch, useSelector } from "react-redux";
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

const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const MovieDetails = (props) => {

  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [recomMovies, setRecomMovies] = useState([])

  let isFav = false;

  const dispatch = useDispatch();
  const favourites = useSelector(state => state.fmovies)
  const [allGenres, setAllGenres] = useState({})

  useEffect(() => {
    props.getMovie(id).then(m => setMovie(m))
    props.getRecom(id).then(m => setRecomMovies(m))
    props.getGenres().then(g => setAllGenres(g))
  }, [id])

  const addFavMovie = (e) => {
    e.preventDefault();
    dispatch(addFav(movie))
  }

  const removeFavMovie = (e) => {
    e.preventDefault();
    dispatch(removeFav(movie.id))
  }


  function getGenreNames(allGenres, res) {
    const gNames = []
    if (allGenres.hasOwnProperty('genres')) {
      // console.log("has property")
      allGenres.genres.map(genre => {
        if (res.hasOwnProperty("genre_ids")) {
          res.genre_ids.map(id => {
            if (Number(id) === Number(genre.id)) {
              // console.log("Found match" + gNames.indexOf(genre.name))

              if (gNames.indexOf(genre.name) == -1) {
                // console.log(genre)
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
    <Container maxW='container.x1' align='center'>
      <Flex className="details-main-container">

        <Box w='40%' h='full' align="center" bgcolor='red' justifyContent='center'>
          <Image maxW='400px' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        </Box>

        <Box w='50%' className="details-info">
          <Heading as='h1' size='3xl' className="details-title">{movie.title}</Heading>

          <Heading as='h6' size='md' className="details-release-date"> {movie.release_date}</Heading>
          <Heading>{movie.language}</Heading>
          <Heading>{movie.popularity}</Heading>
          {movie.hasOwnProperty("genres") ? movie.genres.map(g => <p key={g.id}>{g.name}</p>) : <></>}

          <Text>
            {movie.overview}
          </Text>

          {
            favourites.fmovies.map(m => {
              if (Number(m.id) === Number(id)) {
                isFav = true;
              }
            })
          }

          {isFav ?
            <Button style={{ background: "none" }} onClick={removeFavMovie}>
              <Text style={{ marginRight: "0.7rem" }}>Favourite </Text>

            </Button> : <Button style={{ background: "none" }} onClick={addFavMovie}>
              <Text style={{ marginRight: "0.7rem" }}>Add</Text>

            </Button>

          }

        </Box>
      </Flex>

      <Flex maxW='85%' p={10} style={{ margin: 10 }}>

        <Flex maxH={400} style={{ overflowX: "scroll", border: "2px solid white" }}>
          {
            recomMovies.map(movie => {
              return (<MovieItemCard key={movie.id} movie={movie} width={300} height={650} genre={getGenreNames(allGenres, movie)} />)
            })
          }
        </Flex>

      </Flex>
    </Container >
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
  { getMovie, getRecom, addFav, getGenres }
)(MovieDetails);