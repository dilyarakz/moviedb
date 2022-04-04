import React from "react";
import {
  Box,
  Heading,
  Flex,
  Button,


} from "@chakra-ui/react";

import { Link } from "react-router-dom";

// Note: This code could be better,
// so I'd recommend you to understand how I solved and you could write yours better :)
// Good luck! 🍀

// Update: Check these awesome headers from Choc UI 👇
// https://choc-ui.tech/docs/elements/headers
const Header = (props) => {



  return (
    <Flex
      className="header"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={10}
      bg="#272727"
      color="#14A76C"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link id="header-icon" to="/">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            MovieDB
          </Heading>
        </Link>

      </Flex>

      <Box >
        <Link className="header-fav-box-link" to="/movie/favourites">
 <Button colorScheme='green' variant='ghost' size='lg'>
    Favourites
  </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
