import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

export default function TeamPage() {
  return (
    <Box width="calc(100% - 1rem)" mx="auto" py={{ base: 6, md: 10 }}>
      <Box
        bg="blue.50"
        borderRadius="2xl"
        p={{ base: 6, md: 8 }}
        boxShadow="sm"
      >
        <Heading size="lg" color="blue.800" mb={4}>
          Team Page
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Box>
            <Text fontSize="sm" fontWeight="700" color="blue.600" mb={2}>
              Placeholder Title
            </Text>
            <Text color="gray.600" lineHeight="1.8">
              Placeholder data for the first column. Add team roles, member names, responsibilities, or a brief bio here.
            </Text>
          </Box>

          <Box>
            <Text fontSize="sm" fontWeight="700" color="blue.600" mb={2}>
              Placeholder Title
            </Text>
            <Text color="gray.600" lineHeight="1.8">
              Placeholder data for the second column. Use this section for contact details, team values, or additional notes.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
