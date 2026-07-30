import {
  Box,
  Flex,
  Text,
  Link,
  VStack,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="gray.300" mt="auto">
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} py={"1rem"}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={8}>
          {/* Brand Column */}
          <VStack align="flex-start" gap={3}>
            <Text color="white" fontWeight="800" fontSize="lg">
              GMC Technology
            </Text>
            <Text fontSize="xs" color="blue.300" fontStyle="italic">
              Glass · Metal · Ceramic Technology
            </Text>
            
          </VStack>

          {/* Quick Links */}
          <VStack align="flex-start" gap={2}>
            <Text color="white" fontWeight="700" fontSize="sm" mb={1}>
              Quick Links
            </Text>
            {/* {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                fontSize="sm"
                _hover={{ color: 'blue.300' }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ))} */}
          </VStack>

          {/* Products */}
          <VStack align="flex-start" gap={2}>
            <Text color="white" fontWeight="700" fontSize="sm">
              Our Products
            </Text>
            {/* {productLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                fontSize="sm"
                _hover={{ color: 'blue.300' }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ))} */}
          </VStack>
        </SimpleGrid>

        <Flex
          direction={{ base: 'column', sm: 'row' }}
          justify="space-between"
          align="center"
          gap={2}
        >
          <Text fontSize="xs">
            &copy; {new Date().getFullYear()} GMC Technology. All rights reserved.
          </Text>
          <HStack gap={4} fontSize="xs">
            <Link href="#" color="blue.300">Privacy Policy</Link>
            <Link href="#" color="blue.300">Terms of Use</Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
