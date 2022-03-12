import React from 'react';
import { Box, Image, Badge } from '@chakra-ui/react'
import PropTypes from 'prop-types';
import { StarIcon } from "@chakra-ui/icons";

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
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={property.imageUrl} alt={property.imageAlt} style={{ width: "400px", objectPosition: "center" }} />

        <Box p='6' style={{ width: "400px" }}>


          <Box
            mt='1'
            fontWeight='semibold'
            as='h5'
            lineHeight='tight'
            isTruncated
          >
            {property.title}
          </Box>

          <Box display='flex' mt='2' alignItems='center' justifyContent='center'>

            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {property.reviewCount} reviews
          </Box>
          </Box>
        </Box>
      </Box>
    )
  } else {
    return <div></div>
  }
}

MovieItemCard.propTypes = propTypes;
MovieItemCard.defaultProps = defaultProps;
// #endregion

export default MovieItemCard;