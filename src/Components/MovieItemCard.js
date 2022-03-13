import React from 'react';
import { Box, Image, Badge } from '@chakra-ui/react'
import PropTypes from 'prop-types';
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

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

  if (!(typeof props.movie === "undefined")) {
    // console.log(props.movie.id)

    const property = {
      imageUrl: `https://image.tmdb.org/t/p/w300${props.movie.poster_path}`,
      imageAlt: 'Rear view of modern home with pool',
      title: `${props.movie.title}`,
      reviewCount: `${props.movie.vote_average}`,
      rating: 4,
    }

    return (
      <Link id="movieCard" to={`/movie/${props.movie.id}`}>
        <Box m={2} borderWidth='1px' borderRadius='lg' w={props.width}>
          <Image style={{ objectFit: 'cover' }} h='80%' w="100%" src={property.imageUrl} alt={property.imageAlt} />
          <Box p='1' >
            <Box
              mt='1'
              fontWeight='semibold'
              as='h5'
              lineHeight='tight'
              isTruncated
            >
              {property.title}
            </Box>
          </Box>
        </Box>
      </Link>
    )
  } else {
    return <div></div>
  }
}

MovieItemCard.propTypes = propTypes;
MovieItemCard.defaultProps = defaultProps;
// #endregion

export default MovieItemCard;