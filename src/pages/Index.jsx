import { Container, VStack, Heading, Text, Button, Box, Image } from "@chakra-ui/react";
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Eventify
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your ultimate platform for managing and attending events seamlessly.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/event-platform.png" alt="Event Platform" />
        </Box>
        <VStack spacing={4} align="stretch">
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" variant="solid" size="lg">
            View Events
          </Button>
          <Button leftIcon={<FaUsers />} colorScheme="teal" variant="outline" size="lg">
            Manage Attendees
          </Button>
          <Button leftIcon={<FaMapMarkerAlt />} colorScheme="teal" variant="ghost" size="lg">
            Venue Locations
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;