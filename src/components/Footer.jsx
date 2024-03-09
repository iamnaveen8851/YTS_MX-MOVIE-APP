import { Flex, Text, Box, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Center
        bg="black"
        w={{
          base: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "100%",
        }}
        p={8}
        display={"grid"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={"20px"}
      >
        <Center
        //   border={"5px solid green"}
          w={{
            base: "100%%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
            "2xl": "100%",
          }}
          m="auto"
          display={"flex"}
          gap={{
            base : "4px",
            sm : "5px",
            md : "9px",
            lg: "12px",
            xl : "14px",
            "2xl" : "14px"

          }}
          fontSize={{
            base: "6.8px",
            sm: "10px",
            md: "14.5px",
            lg: "16px",
            xl: "17px",
            "2xl": "18px",
          }}
        >
          <Text color={"white"}>YTS © 2011 - 2024 </Text>
          <Link style={{ color: "gray" }}> Blog</Link>
          <Text color={"white"}>-</Text>
          <Link style={{ color: "gray" }}> DMCA</Link>
          <Text color={"white"}>-</Text>
          <Link style={{ color: "gray" }}> API</Link>
          <Text color={"white"}>-</Text>
          <Link style={{ color: "gray" }}> RSS</Link>
          <Text color={"white"}>-</Text>
          <Link style={{ color: "gray" }}> Contact</Link>
          <Text color={"white"}>-</Text>
          <Link style={{ color: "gray" }}> Browse Movies </Link>
          <Text color={"white"}>-</Text>
          <Link style={{ color: "gray" }}> Requests</Link>
          <Text color={"white"}>-</Text>
          <Link style={{ color: "gray" }}> Login</Link>
          <Text color={"white"}>-</Text>
          <Link style={{ color: "gray" }}> Language</Link>
        </Center>

        <Box>
          <Text
            fontSize={{
              base: "10px",
              sm: "12px",
              md: "14px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
            textAlign={"center"}
            color="white"
          >
            By using this site you agree to and accept our{" "}
            <Link style={{ color: "gray" }}>User Agreement</Link>, which can be
            read <Link style={{ color: "gray" }}>here.</Link>
          </Text>
        </Box>
      </Center>
    </>
  );
}

export default Footer;
