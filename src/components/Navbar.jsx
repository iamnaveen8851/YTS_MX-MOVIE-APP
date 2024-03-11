import {
  Flex,
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  IconButton,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  DrawerHeader,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const LinkStyle = {
    color: "grey",
    fontWeight: "600",
  };
  return (
    <>
      <Flex
        bg="RGBA(0, 0, 0, 0.92)"
        color="white"
        justifyContent={"space-between"}
        alignItems={"center"}
        p={{
          base: "0%",
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
        <Box>
          <Image
            w={{
              base: "90%",
              sm: "90%",
              md: "98%",
              lg: "100%",
            }}
            ml="15%"
            src="https://yts.mx/assets/images/website/logo-YTS.svg"
          />
        </Box>

        {/* for small and medium screen */}
        <Box
          // border="5px solid gold"
          display={{
            base: " flex",
            sm: "flex",
            md: "flex",
            lg: "none",
            xl: "none",
            "2xl": "none",
          }}
          w={{
            base: "28%", // 0px
            sm: "20%", // ~480px. em is a relative unit and is dependant on the font size.
            md: "18%", // ~768px
            lg: "16%", // ~992px
            xl: "0", // ~1280px
            "2xl": "0", // ~1536px
          }}
          p={{
            base: "3%",
            sm: "3%",
            md: "3%",
          }}
          justifyContent={"space-between"}
        >
          <Link
            fontSize={{
              base: "22px",
              sm: "22px",
              md: "22px",
              lg: "22px",
              xl: "22px",
              "2xl": "22px",
            }}
          >
            {<SearchIcon />}
          </Link>
          <IconButton
            onClick={onOpen}
            border="1px solid white"
            p={2.5}
            bg="none"
            _hover={{
              backgroundColor: "transparent",
              border: "1px dashed white",
            }}
            color={"white"}
            fontSize={"22px"}
            aria-label="Search database"
            icon={<HamburgerIcon />}
          />
          {/* Drawer  for options */}
          <Drawer
            size="xs"
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
           
            // finalFocusRef={btnRef}
          >
            <DrawerOverlay  />
            <DrawerContent bg="RGBA(0, 0, 0, 0.92)" >
              <DrawerCloseButton color={"white"} />
             
              <DrawerBody
                bg="RGBA(0, 0, 0, 0.92)"
                
                display={"flex"}
                flexDirection={"column"}
                gap={"10%"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={400}
              >
                <Link
                  style={{
                    ...LinkStyle,
                    transition: "transform 0.2s",
                    cursor: "pointer",
                    color: "white",
                  }}
                  _hover={{ transform: "scale(1.1)", color: "white" }}
                >
                  Home
                </Link>
                <Link
                  style={{
                    ...LinkStyle,
                    transition: "transform 0.2s",
                    cursor: "pointer",
                    color: "lightgreen",
                  }}
                  _hover={{ transform: "scale(1.1)", color: "white" }}
                >
                  4K
                </Link>
                <Link
                  style={{
                    ...LinkStyle,
                    transition: "transform 0.2s",
                    cursor: "pointer",
                    color: "white",
                  }}
                  _hover={{ transform: "scale(1.1)", color: "white" }}
                >
                  Trending
                </Link>
                <Link
                  style={{
                    ...LinkStyle,
                    transition: "transform 0.2s",
                    cursor: "pointer",
                    color: "white",
                  }}
                  _hover={{ transform: "scale(1.1)", color: "white" }}
                >
                  Browse Movies
                </Link>
                <Link
                  style={{
                    ...LinkStyle,
                    transition: "transform 0.2s",
                    cursor: "pointer",
                    color: "white",
                  }}
                  _hover={{ transform: "scale(1.1)", color: "white" }}
                >
                  Login
                </Link>
                <Link
                  style={{
                    ...LinkStyle,
                    transition: "transform 0.2s",
                    cursor: "pointer",
                    color: "white",
                  }}
                  _hover={{ transform: "scale(1.1)", color: "white" }}
                >
                  Register
                </Link>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>

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

          <Link
            style={LinkStyle}
            _hover={{
              transform: "scale(1.1)",
              textDecoration: "underline",
              textDecorationColor: "lightgreen",
              textDecorationThickness: "11%",
            }}
          >
            Home
          </Link>
          <Link
            style={{ fontWeight: "600", color: "lightgreen" }}
            _hover={{
              transform: "scale(1.1)",
              textDecoration: "underline",
              textDecorationColor: "white",
              textDecorationThickness: "11%",
            }}
          >
            4K
          </Link>
          <Link
            style={LinkStyle}
            _hover={{
              transform: "scale(1.1)",
              textDecoration: "underline",
              textDecorationColor: "lightgreen",
              textDecorationThickness: "11%",
            }}
          >
            Trending
          </Link>
          <Link
            style={LinkStyle}
            _hover={{
              transform: "scale(1.1)",
              textDecoration: "underline",
              textDecorationColor: "lightgreen",
              textDecorationThickness: "11%",
            }}
          >
            BrowseMovies
          </Link>
          <Link
            style={LinkStyle}
            _hover={{
              transform: "scale(1.1)",
              textDecoration: "underline",
              textDecorationColor: "lightgreen",
              textDecorationThickness: "11%",
            }}
          >
            Login
          </Link>
          <Link
            style={LinkStyle}
            _hover={{
              transform: "scale(1.1)",
              textDecoration: "underline",
              textDecorationColor: "lightgreen",
              textDecorationThickness: "11%",
            }}
          >
            Register
          </Link>
        </Box>
      </Flex>
    </>
  );
}

export default Navbar;
