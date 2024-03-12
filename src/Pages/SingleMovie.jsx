import {
  Center,
  Box,
  Image,
  Card,
  CardBody,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

function SingleMovie() {
  const { title } = useParams();

  console.log(title);
  const [data, setData] = useState({});
  useEffect(() => {
    getData();
  }, [title]);

  const getData = async () => {
    try {
      let res = await axios.get(
        `https://omdbapi.com/?apikey=d67c9775&t=${title}`
      );


      setData(res.data);
      //   setData(res)
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);
  return (
  
    <Center  
    // // h="500px"
    // w={{
    //   base : "20%"
    // }}
    
    mt={{
      base : "650%",
      sm : "190%",
      md : "155%",
      lg : "80%",
      xl : "20%",
      "2xl"  : "20%"
    }}
     bg="black">
      <Box
       
        w={{
          base: "75%",
          sm: "75%",
          md: "65%",
          lg: "75%",
          xl: "80%",
          "2xl": "60%",
        }}
        // ml="auto"
        m={"auto"}
      >
        <Card bg="black" p={10} m="auto" borderRadius="20px">
          <CardBody display={"flex"} flexDirection={{
            base : "column",
            sm : "column",
            md : "column",
            lg : "row",
            xl : "row",
            "2xl" : "row"
          }} gap={10}>
            <Image
            //   w="350px"
            //   h="440px"
              src={data.Poster}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading fontSize={30} color="white" size="sm">{data.Title}</Heading>
              <Text fontSize={25} color="white">Year : {data.Year}</Text>
              <Text fontSize={25}color="white">ImdbID : {data.imdbID}</Text>
              <Text fontSize={25} color="white">Type : {data.Type}</Text>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Center>
  );
}

export default SingleMovie;
