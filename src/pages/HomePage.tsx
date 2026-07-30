import heroBackground from '../assets/science-chemical-medical-research-labscience-lab-background-wallpaper-118488633.jpg';
import msmeLogo from '../assets/msme.png';

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  } from '@chakra-ui/react';
import { products } from '../constants/constants';
import TestimonialsSlider from '../components/Testimonials';

// ─── HomePage ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <Box width="calc(100% - 1rem)" mx="auto">
      {/* Hero */}
      <Box
        color="white"
        py={{ base: 5, md: 10 }}
        px={{ base: 4, md: 8 }}
        textAlign="center"
        backgroundImage={`linear-gradient(135deg, rgba(2, 44, 87, 0.82), rgba(2, 44, 87, 0.55)), url(${heroBackground})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius={"1rem"}
        position="relative"
        mb={"1rem"}
      >
        <Text
          as="h1"
          fontFamily="'Nunito', system-ui, Avenir, Helvetica, Arial, sans-serif"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="500"
          letterSpacing="-0.03em"
          lineHeight="1.15"
          mb={4}
          maxW={{ base: '100%', md: '70%' }}
          mx="auto"
        >
          Shaping Materials for Science
        </Text>
        <Text
          fontFamily="'Nunito', system-ui, Avenir, Helvetica, Arial, sans-serif"
          fontSize={{ base: 'xs', md: 'sm' }}
          letterSpacing="0.08em"
          textTransform="uppercase"
          color="blue.100"
          mb={6}
        >
          Ultra‑High‑Pressure & Photochemical Engineering for Modern Science          
        </Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} maxW="80%" mx="auto" opacity={0.88} lineHeight="1.75"  mb={8}>
          GMC Technology delivers precision‑built high‑pressure reactors and multi‑layer photochemical systems engineered for extreme 
          conditions, advanced research, and breakthrough innovation.
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 4 }}
          gap={6}
          maxW="70%"
          mx="auto"
          mt={6}
          position="relative"
          zIndex={1}
        >
          {products.map((item) => (
            <Box
              key={item.title}
              bg="white"
              color="gray.700"
              borderRadius="xl"
              p={".5rem"}
              boxShadow="lg"
              border="1px solid"
              borderColor="whiteAlpha.300"
              transition="transform 0.35s ease, box-shadow 0.35s ease"
              opacity={"85%"}
              _hover={{ boxShadow: 'md', transform: 'translateY(-.5rem)' }}
            >
              
              <Text fontSize="xs" fontWeight="700" color="blue.600" textTransform="uppercase" letterSpacing="widest" mb={2}>
                {item.tag}
              </Text>
              <Box
                mb={3}
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                w="4.5rem"
                h="4.5rem"
                bg="rgba(66, 153, 225, 0.12)"
                borderRadius="2xl"
                p={2}
              >
                {item.svg}
              </Box>
              <Heading size="sm" color="blue.800">
                {item.title}
              </Heading>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* About */}
      <Box bg="gray.200" py={{ base: 5, md: 10 }}
        px={{ base: 4, md: 8 }} borderRadius={"1rem"}>
        <Box w="100%" mx="auto">
          <Heading size="lg" color="blue.800" textAlign="center" mb="1rem">
            About GMC Technology
          </Heading>
          <Text maxW="80%" mx="auto" textAlign="center" lineHeight="1.9" color="gray.500" fontSize="md" fontWeight="500">
            GMC Technology delivers high‑performance scientific equipment engineered from advanced glass, metal, and ceramic materials, 
            specializing in ultra‑high‑pressure reactors, multi‑layer photochemical systems, hydrothermal autoclaves, bioreactors, hydrogen 
            distribution manifolds, and custom laboratory glassware. With precision fabrication, leak‑tight sealing, controlled thermal and 
            optical environments, and expert glassware repair capabilities, GMC supports research, pilot‑scale processing, and specialized 
            industrial applications with reliable, technically robust solutions.
          </Text>
          <Box mt={8} display="flex" justifyContent="center">
            <Box
              as="img"
              src={msmeLogo}
              alt="MSME Logo"
              maxW={{ base: '4rem', md: '8rem' }}
              width="100%"
              p={1}              
            />
          </Box>

        </Box>
      </Box>

      {/* Testimonials */}
      <Box bg="gray.50" px={{ base: 4, md: 8 }}>
        <Box maxW="1200px" mx="auto">
          <TestimonialsSlider />
        </Box>
      </Box>
    </Box>
  );
}
