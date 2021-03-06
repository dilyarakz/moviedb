import React from 'react';


import { Link } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import {addFav, removeFav } from '../Actions/MoviesServer';
import {
  Button,
  Flex,
  Box,
  List,
  ListItem,
  Text,
  Image,

} from '@chakra-ui/react'


const propTypes = {};

const defaultProps = {};

const MovieItemCard = (props) => {


  const dispatch = useDispatch();




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
        <Image style={{ objectFit: 'cover' }} w="100%" h='100%' src={`https://image.tmdb.org/t/p/w300${props.movie.poster_path}`} />
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
        

        <List overflow='hidden'>
          {props.genre
            .map(g => (<ListItem className="card-genre-li" key={g.id}>{g.name}</ListItem>))}
        </List>
      </Box>
        {
          favourites.fmovies.map(m => {
            if (Number(m.id) === Number(props.movie.id)) {
              isFav = true;
            }
          })
        }

        <Box w="100%" id='cardFavButton'>
          {isFav ?
            <Button style={{ background: "none" }} onClick={removeFavMovie}>
             
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fillRule="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg>
            </Button> : <Button colorScheme='teal' width='90%' color='#14A76C' onClick={addFavMovie} variant='ghost'>

              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fillRule="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
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