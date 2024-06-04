  import {
    Container,
    Text,
    VStack,
    Box,
    Heading,
    HStack,
    Badge,
    Image,
    Link,
    Flex,
    IconButton
  } from "@chakra-ui/react";
  import {
    FaPython,
    FaVuejs,
    FaCss3Alt,
    FaToolbox,
    FaTwitter,
    FaSpotify,
    FaInstagram,
    FaGithub,
    FaStackOverflow,
    FaTools
  } from "react-icons/fa";

import { TbBrandDjango } from "react-icons/tb";


  const Index = () => {
    return (
      <Container
        top=""
        maxW="100vw"
        width="100%"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        color="white"
        p={4}
        pos="relative"
      >
        <VStack mt={20} spacing={5} align="center" width="100%" textAlign="center" top="100px">
          <Box display="flex" alignItems="center" top="100px" >
            <Image
              borderRadius="50px"
              boxSize="100px"
              src="https://avatars.githubusercontent.com/u/109848153?v=4"
              alt="Profile Picture"
              mr={4}
            />
            <Box textAlign="left" >
              <Heading as="h1" size="xl" _selection={{ bg: "#1e191c", color: "deb7cd"}}>
                Hey, I am Horhorik. 
              </Heading>

              <Heading as="h2" size="lg" _selection={{ bg: "#1e191c", color: "deb7cd"}}>
                Student, from  <Text as="span" color="#e61f23" p={1} borderRadius="md" _selection={{ bg: "#1e191c", color: "deb7cd"}}>
              KUR
            </Text>{""}<Text as="span" color="#f6b710" p={1} borderRadius="md" _selection={{ bg: "#1e191c", color: "deb7cd"}}>
              DIS
            </Text>{""}
   <Text as="span" color="#268a41"  p={1} borderRadius="md" _selection={{ bg: "#1e191c", color: "deb7cd"}}>
             TAN
            </Text>.
              </Heading>
            </Box>
          </Box>



          <Text textAlign="left" align="center" fontSize="lg" mt={1} maxW="600px" _selection={{ bg: "#1e191c", color: "deb7cd"}}>
            I am passionate about development — {" "}
            <Text as="span" color="#8bd6cd" bg="#1b2024" p={1} borderRadius="md" _selection={{ bg: "#1e191c", color: "deb7cd"}}>
              I love automating things
            </Text>{" "}
           , modern technologies, and good developer experience.  <br /> <br />
           
            <Text as="span" bg="#1e191c" color="#deb7cd" p={1} borderRadius="md" _selection={{ bg: "#1e191c", color: "deb7cd"}}>
               I am a student.</Text> {""}

            I pay attention to details, because I love when
            things look 
            <Text as="span" color="#deb7cd" p={1} borderRadius="md" _selection={{ bg: "#1e191c", color: "deb7cd"}}>
              good
            </Text> {" "}
              and 

             <Text as="span" color="#deb7cd" p={1} borderRadius="md" _selection={{ bg: "#1e191c", color: "deb7cd"}}>
              professional</Text>{""}

              . I never stop learning.
          </Text>
          <Flex justifyContent="flex-start" alignItems="center" >
            <Link href="https://twitter.com/horhorikk" isExternal ml={"5"} >
              <FaTwitter size="30px" color="#1da1f2"  />
            </Link>
            <Link href="https://open.spotify.com/user/31d5ixzzw3tam2pui3v37apxczxa" isExternal ml={"5"}>
              <FaSpotify size="30px"  color="#1dd05d" />
            </Link>
            <Link href="https://github.com/horhorist" isExternal ml={"5"}>
              <FaGithub size="30px" color="teal.300" />
            </Link>
            <Link href="https://instagram.com/horhorikk" isExternal ml={"5"}>
              <FaInstagram size="30px" color="#ff048b" />
            </Link>
          </Flex>
          <Box width="100%" mt={10}>
              
            <HStack spacing={5} justify="center" flexWrap="wrap">
              <Badge colorScheme="red" p={3} borderRadius="md">
                <FaPython size="25px"/> Python
              </Badge>
              <Badge colorScheme="blue" p={3} borderRadius="md">
                <FaCss3Alt size="25px"/> Tailwind CSS
              </Badge>
              <Badge colorScheme="green" p={3} borderRadius="md">
                <TbBrandDjango  size="25px"/> Django
              </Badge>
              <Badge colorScheme="purple" p={3} borderRadius="md">
                <FaVuejs size="25px"/> Vue
              </Badge>
            </HStack>
          </Box>
         
        </VStack>
        <Text mt={10} textAlign="center" fontSize="sm" mb={0}>
          Made with <span role="img" aria-label="heart">🖤 by</span> 
          <Text as="span" color="red.500" p={1} borderRadius="md" _selection={{ bg: "#1e191c", color: "deb7cd"}}>
              horhorîk
            </Text>
        </Text>
      </Container>
    );
  };

  export default Index;