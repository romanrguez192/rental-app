import { Container, Heading, Stack, Text, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import ButtonLink from "@components/ButtonLink";

const Home: NextPage = () => {
  return (
    <>
      <Container maxW="5xl">
        <Stack textAlign="center" align="center" spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
          <Heading fontWeight="extrabold" fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}>
            Movie renting{" "}
            <Text as="span" color="blue.400">
              made easy
            </Text>
          </Heading>
          <Text color="gray.500" maxW="3xl">
            Never miss a movie. Keep track of recent movies and receive smart reminders in appropriate times. Find your
            favorite movies at the best price.
          </Text>
          <Stack spacing={6} direction="row">
            <ButtonLink href="/test" rounded="full" px={6} colorScheme="blue" bg="blue.400" _hover={{ bg: "blue.500" }}>
              Get started
            </ButtonLink>
            <ButtonLink href="#" rounded="full" px={6}>
              Learn more
            </ButtonLink>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
