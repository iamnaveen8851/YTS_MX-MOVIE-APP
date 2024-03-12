import {
  Flex,
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  Center,
  Button,
  Text,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  InputRightElement,
  FormControl,
  FormLabel,
  useToast
} from "@chakra-ui/react";

import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import Home from "../Pages/Home";
import { useReducer, useEffect, useState, useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
// To Maintain Search Query
const reducer2 = (state, action) => {
  switch (action.type) {
    case "query": {
      return {
        ...state,
        query2: action.payload,
      };
    }

    case "getData": {
      return {
        ...state,
        searchdata2: action.payload,
      };
    }
    default: {
      throw new Error("Result Not Found");
    }
  }
};

// To Maintain Search Query
const reducer1 = (state, action) => {
  switch (action.type) {
    case "query": {
      return {
        ...state,
        query1: action.payload,
      };
    }

    case "getData": {
      return {
        ...state,
        searchdata1: action.payload,
      };
    }
    default: {
      throw new Error("Result Not Found");
    }
  }
};

function Navbar() {
  const { isLoggedIn, login } = useContext(AuthContext);
  const {
    isOpen: isOpened,
    onOpen: onOpened,
    onClose: onClosed,
  } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const LinkStyle = {
    color: "grey",
    fontWeight: "600",
  };

  // To maintain form state
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formState;

  // To see password show in input
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // to add a search query as parameter
  const [getDatas1, dispatch1] = useReducer(reducer1, {
    query1: "",
    searchdata1: {},
  });
  // to add a search query as parameter
  const [getDatas2, dispatch2] = useReducer(reducer2, {
    query2: "",
    searchdata2: [],
  });

  // To search and get the data from input

  const { searchdata1, query1 } = getDatas1;
  const { searchdata2, query2 } = getDatas2;

  useEffect(() => {
    let debounce;
    if (query1 != "") {
      debounce = setTimeout(() => {
        getData1();
      }, 1000);
    }

    return () => {
      clearTimeout(debounce);
    };
  }, [query1]);
  const getData1 = async () => {
    try {
      let res = await axios.get(
        `https://omdbapi.com/?apikey=d67c9775&t=${query1}`
      );

      dispatch1({
        type: "getData",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getData2 = async () => {
    try {
      let res = await axios.get(
        `https://omdbapi.com/?apikey=d67c9775&s=${query2}`
      );
      // console.log(res);
      dispatch2({
        type: "getData",
        payload: res.data.Search,
      });

      onClosed();
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const toast = useToast()
  async function handleLogin(e) {
    try {
      e.preventDefault();

      let res = await axios.post(`https://reqres.in/api/login`, formState);
      if (res.request.status) {
        console.log(res);
        login();
        navigate("/");
        onModalClose();
        toast({
          title: 'Login Successful.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }

      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
   
      {/* Modal */}

      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login First To Download</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={4}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value,
                  })
                }
              />

              <br />

              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      password: e.target.value,
                    })
                  }
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <br />
              <Button onClick={(e) => handleLogin(e)} colorScheme="blue" mr={3}>
                Submit
              </Button>
            </FormControl>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      {/* modal */}
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
          <Link href="/">
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
          </Link>
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
          <Button
            bg="none"
            color="white"
            onClick={onOpened}
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
            <Drawer isOpen={isOpened} placement="top" onClose={onClosed}>
              <DrawerOverlay />
              <DrawerContent mt="15%" bg="RGBA(0, 0, 0, 0.92)">
                <DrawerCloseButton color="white" fontSize="18px" />

                <DrawerBody>
                  <Center
                    // border={"1px solid white"}

                    w="100%"
                    bg="RGBA(0, 0, 0, 0.92)"
                    color="white"
                    h={{
                      base: "300px",
                      sm: "300px",
                      md: "300px",
                      lg: "300px",
                      xl: "300px",
                      "2xl": "300px",
                    }}
                  >
                    <Box
                      m="auto"
                      mt="5%"
                      // border={"2px solid red"}
                      w="55%"
                      p={5}
                    >
                      <Text
                        fontSize={30}
                        fontWeight={600}
                        ml={{
                          base: "9%",
                          sm: "6%",
                          md: "5%",
                          lg: "4%",
                          xl: "3%",
                          "2xl": "1.2%",
                        }}
                      >
                        Search Term:
                      </Text>
                      <Box
                        p={5}
                        mt="1%"
                        display="flex"
                        flexDirection={{
                          base: "column", // 0px
                          sm: "column", // ~480px. em is a relative unit and is dependant on the font size.
                          md: "row", // ~768px
                          lg: "row", // ~992px
                          xl: "row", // ~1280px
                          "2xl": "row", // ~1536px
                        }}
                        justifyContent="space-between"
                        gap="5%"
                      >
                        <Input
                          _hover={{ border: "1px solid white" }}
                          _focus={{ borderColor: "green" }}
                          type="text"
                          placeholder="Search Movie"
                          value={query2}
                          onChange={(e) =>
                            dispatch2({
                              type: "query",
                              payload: e.target.value,
                            })
                          }
                        />
                        <Button
                          onClick={getData2}
                          mt={{
                            base: "8%",
                            sm: "8%",
                            md: "0",
                            lg: "0",
                            xl: "0",
                            "2xl": "0",
                          }}
                          bg="green"
                          color="white"
                          w={{
                            base: "60%",
                            sm: "60%",
                            md: "40%",
                            lg: "30%",
                            xl: "25%",
                            "2xl": "20%",
                          }}
                          ml={{
                            base: "20%",
                            sm: "20%",
                            md: "2%",
                            lg: "1%",
                            xl: "1%",
                            "2xl": "1%",
                          }}
                          _hover={{
                            color: "black",
                            backgroundColor: "lightgreen",
                            transform: "scale(1.2)",
                          }}
                        >
                          Search
                        </Button>
                      </Box>
                    </Box>
                  </Center>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Button>

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
            <DrawerOverlay />
            <DrawerContent bg="RGBA(0, 0, 0, 0.92)">
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
                  href="/login"
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
          <InputGroup display={"grid"}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Quick search"
              value={query1}
              onChange={(e) =>
                dispatch1({
                  type: "query",
                  payload: e.target.value,
                })
              }
            />

            {query1 != "" ? (
              <Box
                border="1px solid white"
                borderBottomRadius={"10px"}
                p={2}
                display={"flex"}
                gap={"10px"}
              >
                <Box>
                  <Image w="50px" h="50px" src={searchdata1.Poster} />
                </Box>

                <Box>
                  <Text>Title : {searchdata1.Title}</Text>
                  <Text>Year : {searchdata1.Year}</Text>
                </Box>
              </Box>
            ) : (
              <Box
                _hover={{ backgroundColor: "lightgreen" }}
                border="1px solid white"
                borderBottomRadius={"10px"}
                p={2}
                display={"none"}
                gap={"10px"}
              >
                <Box>
                  <Image w="50px" h="50px" src={searchdata1.Poster} />
                </Box>

                <Box>
                  <Text>Title : {searchdata1.Title}</Text>
                  <Text>Year : {searchdata1.Year}</Text>
                </Box>
              </Box>
            )}
          </InputGroup>

          <Link
            href="/home"
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
            href="/4k"
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
            href="/trending"
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
            to="/browse"
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
            onClick={onModalOpen}
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
        </Box>
      </Flex>
      <Home
        query2={query2}
        searchdata2={searchdata2}
        searchdata2Length={searchdata2.length}
      />
    </>
  );
}

export default Navbar;
