import React, { useEffect, useState, useRef } from 'react';
import { Button, Container, Flex, Spacer, Box, HStack, Wrap, WrapItem, Center } from '@chakra-ui/react'
import { getMovies } from '../Actions/MoviesServer';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import MovieItemCard from './MovieItemCard';
import store from '../store'
import ReactPaginate from 'react-paginate';


const propTypes = {};

const defaultProps = {};

const PER_PAGE = 10;

const Home = (props) => {

  const [movieData, setMovies] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);



  useEffect(() => {
    props.getMovies().then(m => setMovies(m))
  }, [])

  function handlePageClick({ selected: selectedPage }) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;


  const currentPageData = movieData.slice(offset, offset + PER_PAGE)
    .map((res, index) => {
      if (typeof res !== 'undefined') {
        return (
          <WrapItem >
            <Center >
              <MovieItemCard key={res.id} movie={res} />
            </Center>
          </WrapItem>
        )
      }
    })

  const pageCount = Math.ceil(movieData.length / PER_PAGE);

  return (

    <Wrap p={20} spacing="5rem" alignItems="center">

      {currentPageData}
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
  );
}

Home.propTypes = {
  // movie: PropTypes.object.isRequired,
  getMovies: PropTypes.func.isRequired
}
Home.defaultProps = defaultProps;
// #endregion


export default connect(
  null,
  { getMovies }
)(Home);