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
  Select,
  Flex,
} from "@chakra-ui/react";

import axios from "axios";
import { useReducer, useEffect, useState } from "react";

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
function MovieData() {
  //   On Mount Phase it will display the all the data
  const [allData, dispatch] = useReducer(reducer2, {
    data: [],
    totalPages: 0,
   page : 1
  });
  const { data, totalPages, page } = allData;

  //   To filter by type
  const [type, setType] = useState("");
  const [sortData, setSortData] = useState("asc");
  useEffect(() => {
    const displayData = async () => {
      try {
        let res = await axios.get(
          `https://omdbapi.com/?apikey=d67c9775&s=transformers&page=${page}&type=${type}`
        );

        // Fetch the data and store it in a variable
        const fetchedData = res.data.Search;

        // Sort the data based on the selected sorting order
        const sortedData = [...fetchedData];
        sortedData.sort((a, b) => {
          if (sortData === "asc") {
            return a.Year - b.Year;
          } else if (sortData === "desc") {
            return b.Year - a.Year;
          }
          return 0; // Default case
        });

        dispatch({
          type: "all-data",
          payload: sortedData,
        });

        dispatch({
          type: "totalPages",
          payload: Math.ceil(res.data.totalResults / 28),
          //   payload: Math.ceil(sortedData.length / 28),
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
    displayData();
  }, [page, type, sortData]);

  return (
    <Center
      id="browse"
      p={10}
      mt="5%"
      // border={"2px solid red"}
     
      bg="black"
      display={"grid"}
      gap={"5%"}
    >
      {/* Pagination  */}

      {/* <Box
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
      </Box> */}

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

      {/* Pagination */}

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
  );
}

export default MovieData;
