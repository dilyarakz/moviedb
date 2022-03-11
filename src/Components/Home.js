import React, { useEffect, useState, useRef } from 'react';
import { Button, Container } from '@chakra-ui/react'
import { getMovies } from '../Actions/MoviesServer';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import MovieItemCard from './MovieItemCard';
import store from '../store'


const propTypes = {};

const defaultProps = {};


const Home = (props) => {

  const [movieData, setMovies] = useState([]);


  useEffect(() => {
    setMovies(props.getMovies())
  }, [])





  return (

    <Container>
      <Button >GET MOVIES</Button>
      {
        movieData.movies && movieData.movies.movies.map(item => <p id={item.id}>{item.title}</p>)
      }

      <MovieItemCard />
    </Container>
  );
}

Home.propTypes = {
  // movie: PropTypes.object.isRequired,
  getMovies: PropTypes.func.isRequired
}
Home.defaultProps = defaultProps;
// #endregion

const mapStateToProps = state => ({
  movie: state.movie,
})

export default connect(
  mapStateToProps,
  { getMovies }
)(Home);