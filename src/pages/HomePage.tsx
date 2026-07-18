import { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  Flex,
  Button,
  Separator,
} from '@chakra-ui/react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const partners = [
  { name: 'Partner Company A', description: 'Leading distributor of lab instruments across South Asia.' },
  { name: 'Partner Company B', description: 'Trusted supplier for pharmaceutical research facilities.' },
  { name: 'Partner Company C', description: 'Global partner specialising in photochemical applications.' },
  { name: 'Partner Company D', description: 'Regional distributor for industrial and educational labs.' },
];

const testimonials = [
  {
    name: 'Dr. Ananya Sharma',
    role: 'Principal Scientist, National Research Institute',
    quote: 'GMC Technology has been an invaluable partner for our lab. Their precision glassware consistently meets the highest quality standards, and delivery is always on time.',
  },
  {
    name: 'Prof. Rajiv Menon',
    role: 'Head of Chemistry, IIT Bombay',
    quote: 'The photochemical reactors supplied by GMC are exceptional. Robust build, precise specifications, and excellent after-sales support - highly recommended.',
  },
  {
    name: 'Ms. Priya Nair',
    role: 'Lab Manager, BioTech Innovations Pvt. Ltd.',
    quote: 'We have been sourcing custom glassware from GMC for over three years. Their craftsmanship and attention to detail are second to none.',
  },
  {
    name: 'Mr. Suresh Iyer',
    role: 'Procurement Head, Pharma Research Corp.',
    quote: 'Reliable, professional, and technically sound. GMC Technology understands the unique demands of pharmaceutical laboratories and delivers accordingly.',
  },
  {
    name: 'Dr. Kavita Reddy',
    role: 'Research Director, Green Energy Labs',
    quote: 'Their hydrogen distribution systems are built to exacting tolerances. GMC expertise in glass-metal-ceramic fabrication is unmatched in the industry.',
  },
];

const products = [
  {
    title: 'Laboratory Glassware',
    body: 'Borosilicate and quartz glassware, custom fabrications, and standard laboratory equipment designed for precision and repeatability.',
    tag: 'Core Product',
  },
  {
    title: 'Photochemical Reactors',
    body: 'State-of-the-art photocell reactors for UV/visible light-driven reactions, designed for research and industrial scale applications.',
    tag: 'Specialisation',
  },
  {
    title: 'Hydrogen Distribution Systems',
    body: 'Safe, reliable, and certified hydrogen distribution systems engineered for research facilities and green energy laboratories.',
    tag: 'Advanced Systems',
  },
];

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

// ─── Testimonials Slider ──────────────────────────────────────────────────────

function TestimonialsSlider() {
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

// ─── HomePage ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <Box>
      {/* Hero */}
      <Box bg="blue.800" color="white" py={{ base: 14, md: 20 }} px={{ base: 4, md: 8 }} textAlign="center">
        <Heading size={{ base: 'xl', md: '2xl' }} fontWeight="900" letterSpacing="tight" mb={4}>
          Precision Engineered for Science
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} maxW="640px" mx="auto" opacity={0.88} lineHeight="1.9" fontWeight="500" mb={8}>
          GMC Technology delivers world-class laboratory glassware, photochemical reactors, and hydrogen
          distribution systems - crafted with glass, metal, and ceramic expertise for research institutions,
          universities, and industrial labs across India and beyond.
        </Text>
        <HStack justify="center" gap={4}>
          <Button variant="outline" size="md" fontWeight="600" color="white" borderColor="white">
            View Catalogue
          </Button>
          <Button bg="white" color="blue.800" size="md" fontWeight="700">
            Get in Touch
          </Button>
        </HStack>
      </Box>

      {/* About */}
      <Box bg="gray.50" py={14} px={{ base: 4, md: 8 }}>
        <Box maxW="1200px" mx="auto">
          <Heading size="lg" mb={6} color="blue.800" textAlign="center">
            About GMC Technology
          </Heading>
          <Text maxW="820px" mx="auto" textAlign="center" lineHeight="1.9" color="gray.500" fontSize="md" fontWeight="500" mb={10}>
            Founded on the principles of precision, quality, and innovation, GMC Technology
            (Glass Metal Ceramic Technology) is a specialist manufacturer and supplier of scientific
            glassware and laboratory instruments. With decades of expertise, we serve research
            laboratories, pharmaceutical companies, educational institutions, and industrial facilities
            with custom-fabricated and standard catalogue products that meet rigorous international standards.
          </Text>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6}>
            {products.map((item) => (
              <Box
                key={item.title}
                bg="white"
                borderRadius="xl"
                p={6}
                boxShadow="sm"
                border="1px solid"
                borderColor="blue.100"
                _hover={{ boxShadow: 'md', transform: 'translateY(-2px)' }}
              >
                <Box
                  display="inline-block"
                  bg="blue.50"
                  color="blue.600"
                  fontSize="2xs"
                  fontWeight="800"
                  px={2}
                  py={0.5}
                  borderRadius="md"
                  mb={3}
                  border="1px solid"
                  borderColor="blue.200"
                  textTransform="uppercase"
                  letterSpacing="widest"
                >
                  {item.tag}
                </Box>
                <Heading size="sm" mb={2} color="blue.800">{item.title}</Heading>
                <Text fontSize="sm" color="gray.500" lineHeight="1.8" fontWeight="500">{item.body}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* Partners */}
      <Box py={14} px={{ base: 4, md: 8 }}>
        <Box maxW="1200px" mx="auto">
          <Heading size="lg" mb={3} color="blue.800" textAlign="center">Our Partners</Heading>
          <Text textAlign="center" color="gray.400" fontSize="xs" fontWeight="700" letterSpacing="widest" textTransform="uppercase" mb={10}>
            We collaborate with trusted organisations to deliver quality and expertise worldwide.
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={6}>
            {partners.map((p) => (
              <Box
                key={p.name}
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="xl"
                p={6}
                textAlign="center"
                boxShadow="sm"
                _hover={{ borderColor: 'blue.400', boxShadow: 'md' }}
                transition="all 0.2s"
              >
                <Box
                  w="64px" h="64px"
                  bg="blue.50"
                  border="2px dashed"
                  borderColor="blue.300"
                  borderRadius="xl"
                  mx="auto"
                  mb={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="xs" color="blue.500" fontWeight="600">LOGO</Text>
                </Box>
                <Text fontWeight="700" fontSize="sm" mb={2}>{p.name}</Text>
                <Text fontSize="xs" color="gray.500" lineHeight="tall">{p.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      <Separator />

      {/* Testimonials */}
      <Box bg="gray.50" px={{ base: 4, md: 8 }}>
        <Box maxW="1200px" mx="auto">
          <TestimonialsSlider />
        </Box>
      </Box>
    </Box>
  );
}
