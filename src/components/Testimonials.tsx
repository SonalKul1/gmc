import { Box, Heading, Flex, Button, HStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { testimonials } from "../constants/constants";


// ─── Star Rating ──────────────────────────────────────────────────────────────

function StarRating() {
  return (
    <HStack gap={1} justify="center" mb={4}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Box key={i} color="yellow.400" fontSize="lg" lineHeight={1}>
          &#9733;
        </Box>
      ))}
    </HStack>
  );
}


const TestimonialsSlider : React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const { name, role, quote } = testimonials[active];

  return (
    <Box py={12}>
      <Heading size="lg" textAlign="center" mb={8} color="blue.800">
        What Our Clients Say
      </Heading>

      <Box position="relative" maxW="700px" mx="auto">
        <Box
          bg="white"
          border="1px solid"
          borderColor="blue.100"
          px={{ base: 6, md: 10 }}
          py={8}
          boxShadow="md"
          textAlign="center"
          minH="220px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <StarRating />

          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            fontStyle="italic"
            color="gray.600"
            mb={6}
            lineHeight="tall"
          >
            &#8220;{quote}&#8221;
          </Text>

          <Box
            w="44px"
            h="44px"
            borderRadius="full"
            bg="blue.600"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            fontSize="sm"
            mx="auto"
            mb={3}
          >
            {name.split(' ').slice(0, 2).map((n) => n[0]).join('')}
          </Box>

          <Text fontWeight="700" fontSize="sm">{name}</Text>
          <Text fontSize="xs" color="gray.500">{role}</Text>
        </Box>

        <Flex justify="center" mt={6} gap={3} align="center">
          <Button onClick={prev} size="sm" variant="outline" colorPalette="blue" borderRadius="full">
            &#8592; Prev
          </Button>

          <HStack gap={2}>
            {testimonials.map((_, i) => (
              <Box
                key={i}
                w="8px"
                h="8px"
                borderRadius="full"
                bg={i === active ? 'blue.600' : 'gray.300'}
                cursor="pointer"
                onClick={() => setActive(i)}
                transition="background 0.3s"
              />
            ))}
          </HStack>

          <Button onClick={next} size="sm" variant="outline" colorPalette="blue" borderRadius="full">
            Next &#8594;
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default TestimonialsSlider;