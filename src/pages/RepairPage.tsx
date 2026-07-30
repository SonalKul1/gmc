import { Box, Heading, Text } from '@chakra-ui/react';

export default function RepairPage() {
  return (
    <Box width="calc(100% - 1rem)" mx="auto" py={{ base: 6, md: 10 }}>
      <Box
        bg="gray.50"
        borderRadius="2xl"
        p={{ base: 6, md: 8 }}
        boxShadow="sm"
      >
        <Heading size="lg" color="blue.800" mb={4}>
          Repair Services Page
        </Heading>
        <Text color="gray.600" lineHeight="1.8">
          Placeholder content for repair services. Replace this with information about repair options, processes, and service capabilities.
        </Text>
      </Box>
    </Box>
  );
}
