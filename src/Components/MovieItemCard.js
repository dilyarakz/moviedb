import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { getMovie, getRecom, addFav, removeFav } from '../Actions/MoviesServer';
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
  List,
  ListItem,
  Text,
  Image,
  Heading
} from '@chakra-ui/react'
import store from '../store'
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
const MovieItemCard = (props) => {


  const dispatch = useDispatch();

  console.log(props.movie)
  console.log(props.genre)



  // console.log(allGenresID)

  const addFavMovie = (e) => {
    e.preventDefault();
    dispatch(addFav(props.movie))
  }

  const removeFavMovie = (e) => {
    e.preventDefault();
    dispatch(removeFav(props.movie.id))
  }



  const favourites = useSelector(state => state.fmovies)
  let isFav = false;




  return (

    <Box id="movieCard" m={2} borderRadius='lg' h={props.height} w={props.width}>

      <Link to={`/movie/${props.movie.id}`}>
        <Image style={{ objectFit: 'cover' }} w="100%" h='80%' src={`https://image.tmdb.org/t/p/w300${props.movie.poster_path}`} />
      </Link>

      <Flex p='2' className='card-info-container' direction='column'>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h2'
          lineHeight='tight'
          isTruncated
          className="card-title">
          {`${props.movie.title}`}
        </Box>

        <List overflow='hidden'>
          {props.genre
            .map(g => (<ListItem className="card-genre-li" key={g.id}>{g.name}</ListItem>))}
        </List>

        {
          favourites.fmovies.map(m => {
            if (Number(m.id) === Number(props.movie.id)) {
              isFav = true;
            }
          })
        }

        <Box w="100%">
          {isFav ?
            <Button style={{ background: "none" }} onClick={removeFavMovie}>
              <Text style={{ marginRight: "0.7rem" }}></Text>

            </Button> : <Button colorScheme='teal' width='90%' color='#14A76C' onClick={addFavMovie} variant='ghost'>
              <Text style={{ marginRight: '1rem' }} fontSize='1xl'>Add to Watchlist</Text>

            </Button>
          }
        </Box>

      </Flex>
    </Box>

  )
}


MovieItemCard.propTypes = propTypes;
MovieItemCard.defaultProps = defaultProps;
// #endregion

export default MovieItemCard;