import React, { useEffect, useState, useRef } from 'react';
import { Button, Input, Container, Flex, Spacer, Box, HStack, Wrap, WrapItem, Center, VStack } from '@chakra-ui/react'
import { getMovies, searchMovies } from '../Actions/MoviesServer';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import MovieItemCard from './MovieItemCard';
import store from '../store'
import ReactPaginate from 'react-paginate';
import { SearchIcon } from "@chakra-ui/icons"


const propTypes = {};

const defaultProps = {};

const PER_PAGE = 4;

const Home = (props) => {

  const [movieData, setMovies] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  const [searchQuery, setSearchQuery] = useState('');



  useEffect(() => {
    props.getMovies().then(m => setMovies(m))
  }, [])

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  function handleInput() {
    if (searchQuery.length > 1) {
      props.searchMovies(searchQuery)
        .then(m => setMovies(m))
    }

    setSearchQuery('');
  }

  const pageCount = Math.ceil(movieData.length / PER_PAGE);

  return (
    <>
      <Box bg="#747474" p='10'>
        <Flex p='10' align='center' justifyContent='center' alignItems='center'>
          <Input
            id="searchInput"
            width='70%'
            bg='white'
            placeholder='Search for movie here'
            onChange={e => setSearchQuery(e.target.value)}
            value={searchQuery}
          /><Button
            bg='#FFE400'
            onClick={() => handleInput()}
          ><SearchIcon /></Button>
        </Flex>
      </Box>
      <Wrap p={20} spacing="5rem" alignItems="center">
        {
          movieData.slice(offset, offset + PER_PAGE)
            .map((res, index) => {
              if (typeof res !== 'undefined') {
                return (
                  <WrapItem key={res.id}>
                    <Center key={res.id}>
                      <MovieItemCard key={res.id} movie={res} />
                    </Center>
                  </WrapItem>
                )
              }
            })
        }
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </Wrap>
    </>
  );
}

Home.propTypes = {
  // movie: PropTypes.object.isRequired,
  getMovies: PropTypes.func.isRequired,
  searchMovies: PropTypes.func.isRequired,
}
Home.defaultProps = defaultProps;
// #endregion


export default connect(
  null,
  { getMovies, searchMovies }
)(Home);