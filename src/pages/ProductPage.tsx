import { Box, Heading, Text } from '@chakra-ui/react';

export default function ProductPage() {
  return (
    <Box width="calc(100% - 1rem)" mx="auto" py={{ base: 6, md: 10 }}>
      <Box
        bg="gray.50"
        borderRadius="2xl"
        p={{ base: 6, md: 8 }}
        boxShadow="sm"
      >
        <Heading size="lg" color="blue.800" mb={4}>
          Product Page
        </Heading>
        <Text color="gray.600" lineHeight="1.8">
          Placeholder content for product details. Replace this with your product overview, offerings, and specifications.
        </Text>
      </Box>
    </Box>
  );
}
