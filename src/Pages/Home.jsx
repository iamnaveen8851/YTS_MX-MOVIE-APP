import {
  Center,
  Box,
  Input,
  Button,
  Text,
  SimpleGrid,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Link,
} from "@chakra-ui/react";


import axios from "axios";
import { useReducer, useEffect } from "react";

// To Maintain Search Query
const reducer1 = (state, action) => {
  switch (action.type) {
    case "query": {
      return {
        ...state,
        query: action.payload,
      };
    }

    case "getData": {
      return {
        ...state,
        searchdata: action.payload,
      };
    }
    default: {
      throw new Error("Result Not Found");
    }
  }
};

// To maintain all data State
const reducer2 = (state, action) => {
  switch (action.type) {
    case "all-data": {
      return {
        ...state,
        data: action.payload,
      };
    }

    case "totalPages": {
      return {
        ...state,
        totalPages: action.payload,
      };
    }

    case "page": {
      return {
        ...state,
        page: action.payload,
      };
    }

    default: {
      throw new Error("Result Not Found");
    }
  }
};

function Home({ query2, searchdata2, searchdata2Length }) {
  // to add a search query as parameter
  const [getDatas, dispatch1] = useReducer(reducer1, {
    query: "",
    searchdata: [],
  });

  //   On Mount Phase it will display the all the data
  const [allData, dispatch] = useReducer(reducer2, {
    data: [],
    totalPages: 0,
    page: 1,
  });

  const { data, totalPages, page } = allData;
  useEffect(() => {
    const displayData = async () => {
      try {
        let res = await axios.get(
          `https://omdbapi.com/?apikey=d67c9775&s=avenger&page=${page}`
        );

        dispatch({
          type: "all-data",
          payload: res.data.Search,
        });

        dispatch({
          type: "totalPages",
          payload: Math.ceil(res.data.totalResults / 28),
        });

        dispatch({
          type: "page",
          payload: page,
        });
      } catch (error) {
        console.log(error);
      }
    };
    //   Here i am calling the displayData function on mount phase
    displayData(page);
  }, [page]);

  // To search and get the data from input

  const { searchdata, query } = getDatas;

  const getData = async () => {
    try {
      let res = await axios.get(
        `https://omdbapi.com/?apikey=d67c9775&s=${query}`
      );
      dispatch1({
        type: "getData",
        payload: res.data.Search,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Center
        // border={"1px solid white"}
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "block",
          xl: "block",
          "2xl": "block",
        }}
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
              value={query}
              onChange={(e) =>
                dispatch1({
                  type: "query",
                  payload: e.target.value,
                })
              }
            />
            <Button
              onClick={getData}
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
        <br />
        <Box
          m="auto"
          // border={"2px solid red"}
          w="55%"
          p={5}
        >
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
          ></Box>
        </Box>
      </Center>

      {/* To display Data based on condition */}
      {query !== "" && searchdata.length > 0 ? (
        <Center p={10} h="1800px" bg="black" display={"grid"} gap={"5%"}>
          {/* Pagination  */}

          <Box
            mt="5%"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
            m="auto"
            // border={"1px solid white"}
            p={2}
          >
            <Button
              color="white"
              _hover={{ backgroundColor: "green" }}
              onClick={() => dispatch({ type: "page", payload: page - 1 })}
              colorScheme="green"
            >
              Prev
            </Button>
            {new Array(totalPages).fill(0).map((_, index) => (
              <Button
                colorScheme="transparent"
                border={"1px solid white"}
                color={"white"}
                _hover={{ backgroundColor: "green" }}
                onClick={() => dispatch({ type: "page", payload: index + 1 })}
                key={index}
              >
                {index + 1}
              </Button>
            ))}
            <Button
              color="white"
              _hover={{ backgroundColor: "green" }}
              onClick={() => dispatch({ type: "page", payload: page + 1 })}
              colorScheme="green"
            >
              Next
            </Button>
          </Box>

          {/* display movie data on mount phase  and also on search based */}

          <SimpleGrid
            columns={{
              base: "1", // 0px
              sm: "2", // ~480px. em is a relative unit and is dependant on the font size.
              md: "2", // ~768px
              lg: "3", // ~992px
              xl: "4", // ~1280px
              "2xl": "4", // ~1536px
            }}
            w={{
              base: "90%", // 0px
              sm: "100%", // ~480px. em is a relative unit and is dependant on the font size.
              md: "100%", // ~768px
              lg: "100%", // ~992px
              xl: "100%", // ~1280px
              "2xl": "100%", // ~1536px
            }}
            m={{
              base: "auto", // 0px
              sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
              md: "auto", // ~768px
              lg: "auto", // ~992px
              xl: "auto", // ~1280px
              "2xl": "auto", // ~1536px
            }}
            // ml={{
            //   base: "1%", // 0px
            // }}
            justifyContent={"space-around"}
            alignItems={"center"}
            // spacing="1px"
            gap="1px"
          >
            {searchdata.map((movie, index) => (
              <Box
                h={{
                  base: "450px",
                }}
                w={{
                  base: "75%",
                  sm: "75%",
                  md: "65%",
                  lg: "75%",
                  xl: "80%",
                  "2xl": "60%",
                }}
                key={index}
                // ml="auto"
                m={"auto"}
              >
                <Card m="auto" borderRadius="20px">
                  <CardBody>
                    <Image
                      w="350px"
                      h="240px"
                      src={movie.Poster}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="sm">{movie.Title}</Heading>
                      <Heading size="sm">{movie.Year}</Heading>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
            ))}
          </SimpleGrid>

          {/* Pagination  */}

          <Box
            bg="black"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
          >
            <Button
              color="white"
              _hover={{ backgroundColor: "green" }}
              onClick={() => dispatch({ type: "page", payload: page - 1 })}
              colorScheme="green"
            >
              Prev
            </Button>
            {new Array(totalPages).fill(0).map((_, index) => (
              <Button
                colorScheme="transparent"
                border={"1px solid white"}
                color={"white"}
                _hover={{ backgroundColor: "green" }}
                onClick={() => dispatch({ type: "page", payload: index + 1 })}
                key={index}
              >
                {index + 1}
              </Button>
            ))}
            <Button
              color="white"
              _hover={{ backgroundColor: "green" }}
              onClick={() => dispatch({ type: "page", payload: page + 1 })}
              colorScheme="green"
            >
              Next
            </Button>
          </Box>
        </Center>
      ) : query2 !== "" && searchdata2Length > 0 ? (
        <Center p={10} h="1800px" bg="black" display={"grid"} gap={"5%"}>
          {/* Pagination  */}

          <Box
            mt="5%"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
            m="auto"
            // border={"1px solid white"}
            p={2}
          >
            <Button
              color="white"
              _hover={{ backgroundColor: "green" }}
              onClick={() => dispatch({ type: "page", payload: page - 1 })}
              colorScheme="green"
            >
              Prev
            </Button>
            {new Array(totalPages).fill(0).map((_, index) => (
              <Button
                colorScheme="transparent"
                border={"1px solid white"}
                color={"white"}
                _hover={{ backgroundColor: "green" }}
                onClick={() => dispatch({ type: "page", payload: index + 1 })}
                key={index}
              >
                {index + 1}
              </Button>
            ))}
            <Button
              color="white"
              _hover={{ backgroundColor: "green" }}
              onClick={() => dispatch({ type: "page", payload: page + 1 })}
              colorScheme="green"
            >
              Next
            </Button>
          </Box>

          {/* display movie data on mount phase  and also on search based */}

          <SimpleGrid
            columns={{
              base: "1", // 0px
              sm: "2", // ~480px. em is a relative unit and is dependant on the font size.
              md: "2", // ~768px
              lg: "3", // ~992px
              xl: "4", // ~1280px
              "2xl": "4", // ~1536px
            }}
            w={{
              base: "90%", // 0px
              sm: "100%", // ~480px. em is a relative unit and is dependant on the font size.
              md: "100%", // ~768px
              lg: "100%", // ~992px
              xl: "100%", // ~1280px
              "2xl": "100%", // ~1536px
            }}
            m={{
              base: "auto", // 0px
              sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
              md: "auto", // ~768px
              lg: "auto", // ~992px
              xl: "auto", // ~1280px
              "2xl": "auto", // ~1536px
            }}
            // ml={{
            //   base: "1%", // 0px
            // }}
            justifyContent={"space-around"}
            alignItems={"center"}
            // spacing="1px"
            gap="1px"
          >
            {searchdata2.map((movie, index) => (
              <Box
                h={{
                  base: "450px",
                }}
                w={{
                  base: "75%",
                  sm: "75%",
                  md: "65%",
                  lg: "75%",
                  xl: "80%",
                  "2xl": "60%",
                }}
                key={index}
                // ml="auto"
                m={"auto"}
              >
                <Card m="auto" borderRadius="20px">
                  <CardBody>
                    <Image
                      w="350px"
                      h="240px"
                      src={movie.Poster}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="sm">{movie.Title}</Heading>
                      <Heading size="sm">{movie.Year}</Heading>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
            ))}
          </SimpleGrid>

          {/* Pagination  */}

          <Box
            bg="black"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
          >
            <Button
              color="white"
              _hover={{ backgroundColor: "green" }}
              onClick={() => dispatch({ type: "page", payload: page - 1 })}
              colorScheme="green"
            >
              Prev
            </Button>
            {new Array(totalPages).fill(0).map((_, index) => (
              <Button
                colorScheme="transparent"
                border={"1px solid white"}
                color={"white"}
                _hover={{ backgroundColor: "green" }}
                onClick={() => dispatch({ type: "page", payload: index + 1 })}
                key={index}
              >
                {index + 1}
              </Button>
            ))}
            <Button
              color="white"
              _hover={{ backgroundColor: "green" }}
              onClick={() => dispatch({ type: "page", payload: page + 1 })}
              colorScheme="green"
            >
              Next
            </Button>
          </Box>
        </Center>
      ) : (
        <Center p={10} h="1800px" bg="black" display={"grid"} gap={"5%"}>
          {/* Pagination  */}

          <Box
            mt="5%"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
          >
            <Button
              color="white"
              _hover={{ backgroundColor: "green" }}
              onClick={() => dispatch({ type: "page", payload: page - 1 })}
              colorScheme="green"
            >
              Prev
            </Button>
            {new Array(totalPages).fill(0).map((_, index) => (
              <Button
                colorScheme="transparent"
                border={"1px solid white"}
                color={"white"}
                _hover={{ backgroundColor: "green" }}
                onClick={() => dispatch({ type: "page", payload: index + 1 })}
                key={index}
              >
                {index + 1}
              </Button>
            ))}
            <Button
              color="white"
              _hover={{ backgroundColor: "green" }}
              onClick={() => dispatch({ type: "page", payload: page + 1 })}
              colorScheme="green"
            >
              Next
            </Button>
          </Box>

          {/* display movie data on mount phase  and also on search based */}

          <SimpleGrid
            columns={{
              base: "1", // 0px
              sm: "2", // ~480px. em is a relative unit and is dependant on the font size.
              md: "2", // ~768px
              lg: "3", // ~992px
              xl: "4", // ~1280px
              "2xl": "4", // ~1536px
            }}
            w={{
              base: "90%", // 0px
              sm: "100%", // ~480px. em is a relative unit and is dependant on the font size.
              md: "100%", // ~768px
              lg: "100%", // ~992px
              xl: "100%", // ~1280px
              "2xl": "100%", // ~1536px
            }}
            m={{
              base: "auto", // 0px
              sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
              md: "auto", // ~768px
              lg: "auto", // ~992px
              xl: "auto", // ~1280px
              "2xl": "auto", // ~1536px
            }}
            // ml={{
            //   base: "1%", // 0px
            // }}
            justifyContent={"space-around"}
            alignItems={"center"}
            // spacing="1px"
            gap="1px"
          >
            {data.map((movie, index) => (
              <Box
                h={{
                  base: "450px",
                }}
                w={{
                  base: "75%",
                  sm: "75%",
                  md: "65%",
                  lg: "75%",
                  xl: "80%",
                  "2xl": "60%",
                }}
                key={index}
                // ml="auto"
                m={"auto"}
              >
                <Card m="auto" borderRadius="20px">
                  <CardBody>
                    <Image
                      w="350px"
                      h="240px"
                      src={movie.Poster}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Link
                        href={`/movie/${encodeURIComponent(movie.Title)}`}
                        size="sm"
                      >
                        {movie.Title}
                      </Link>
                      <Heading size="sm">{movie.Year}</Heading>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
            ))}
          </SimpleGrid>

          {/* Pagination  */}

          <Box
            bg="black"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
          >
            <Button
              color="white"
              _hover={{ backgroundColor: "green" }}
              onClick={() => dispatch({ type: "page", payload: page - 1 })}
              colorScheme="green"
            >
              Prev
            </Button>
            {new Array(totalPages).fill(0).map((_, index) => (
              <Button
                colorScheme="transparent"
                border={"1px solid white"}
                color={"white"}
                _hover={{ backgroundColor: "green" }}
                onClick={() => dispatch({ type: "page", payload: index + 1 })}
                key={index}
              >
                {index + 1}
              </Button>
            ))}
            <Button
              color="white"
              _hover={{ backgroundColor: "green" }}
              onClick={() => dispatch({ type: "page", payload: page + 1 })}
              colorScheme="green"
            >
              Next
            </Button>
          </Box>
        </Center>
      )}
    </>
  );
}

export default Home;
