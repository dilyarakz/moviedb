import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,

} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
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
          <Text style={{ marginRight: "0.7rem" }}>Favourite </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
