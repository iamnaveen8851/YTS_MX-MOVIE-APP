import { Center, Box, Input, Button, Text } from "@chakra-ui/react";

function Home() {
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
        <Box m="auto" 
        // border={"2px solid red"}
         w="55%" p={5}>
          <Text
            ml={{
              base: "9%",
              sm: "6%",
              md: "5%",
              lg: "4%",
              xl: "2.5%",
              "2xl": "2.5%",
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
            />
            <Button
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
    </>
  );
}

export default Home;
