import {
  Flex,
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
function Navbar() {
  const LinkStyle = {
    color: "grey",
    fontWeight: "600",
  };
  return (
    <>
      <Flex
        bg="black"
        color="white"
        justifyContent={"space-between"}
        alignItems={"center"}
        p={{
          base: "3%",
          sm: "3%",
          md: "3%",
          lg: "2%",
          xl: "2%",
          "2xl": "2%",
        }}
        w={{
          base: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "100%",
        }}
      >
        <Box >
          <Image w={{
            base : "75%",
            sm : "90%",
            md : "98%",
            lg :  "100%"
        }} src="https://yts.mx/assets/images/website/logo-YTS.svg" />
        </Box>

        {/* for small and medium screen */}
        <Box border="5px solid gold"
        display={{
            base :" flex",
            sm : "flex",
            md : "flex",
            lg : "none",
            xl : "none",
            "2xl" : "none"

        }}

        w={{
            base : "60%",
            sm : "70%",
            md : "70",
           

        }}

        p={{
            base : "3%",
            sm : "3%",
            md : "3%",
            
        }}
        ></Box>


        {/* For large screen  */}
        <Box
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
            "2xl": "flex",
          }}
          p={2}
          w={{
            base: "70%", // 0px
            sm: "70%", // ~480px. em is a relative unit and is dependant on the font size.
            md: "70%", // ~768px
            lg: "60%", // ~992px
            xl: "60%", // ~1280px
            "2xl": "96em", // ~1536px
          }}
          alignItems="center"
          gap="20px"
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input type="tel" placeholder="Quick search" />
          </InputGroup>

          <Link style={LinkStyle}>Home</Link>
          <Link style={{ fontWeight: "600", color: "lightgreen" }}>4K</Link>
          <Link style={LinkStyle}>Trending</Link>
          <Link style={LinkStyle}>BrowseMovies</Link>
          <Link style={LinkStyle}>Login</Link>
          <Link style={LinkStyle}>Register</Link>
        </Box>
      </Flex>
    </>
  );
}

export default Navbar;
