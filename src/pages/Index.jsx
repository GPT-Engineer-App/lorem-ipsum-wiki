import { Container, Heading, Text, VStack, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl">
          Wiki Page
        </Heading>

        <section>
          <Heading as="h2" size="xl">
            Background
          </Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </section>

        <Divider />

        <section>
          <Heading as="h2" size="xl">
            Childhood
          </Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </section>

        <Divider />

        <section>
          <Heading as="h2" size="xl">
            Marriage
          </Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </section>

        <Divider />

        <section>
          <Heading as="h2" size="xl">
            Death
          </Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </section>
      </VStack>
    </Container>
  );
};

export default Index;
