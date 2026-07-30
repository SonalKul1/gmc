import { Box, Grid, Text } from '@chakra-ui/react';
import IndianFlagSvg from '../components/IndianFlagSvg';

export default function TeamPage() {
    return (
        <Box width="calc(100% - 1rem)" mx="auto" px={{ base: "1rem", md: "2rem"}}  py={{ base: 8, md: 14 }} bg="gray.100">
            <Grid templateColumns={{ base: '1fr', md: '2fr 0.25fr 2fr' }} gap={{ base: ".1rem", md: ".01rem" }} alignItems="start" w="100%">
                <Box>
                    <Box borderRadius="3xl" p={{ base: 6, md: 8 }} boxShadow="sm" minH="420px">
                        <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight="700" color="blue.800" mb={2}>
                            Brand Philosophy
                        </Text>
                        <Box w="100%" h="1" bg="orange.300" borderRadius="full" mb={4} />
                        <Text textAlign="justify" color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.9">
                            GMC Technology stands for India’s new era of scientific self‑reliance — where advanced engineering,
                            precision fabrication, and research‑grade innovation are built entirely in‑house. We believe that world‑class
                            scientific instruments should not be imported luxuries but proudly engineered in India, crafted with mastery
                            in glass, metal, and ceramic. Our philosophy is simple: design fearlessly, manufacture meticulously, and deliver
                            instruments that redefine what “Made in India” can mean for global science.
                        </Text>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="start" pt={{ base: 4, md: 8 }}>
                    <IndianFlagSvg />
                </Box>

                <Box>
                    <Box bg="white" borderRadius="3xl" p={{ base: 6, md: 8 }} boxShadow="lg" minH="420px">
                        <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight="700" color="blue.800" mb={2}>
                            India’s Advanced Manufacturing Frontier
                        </Text>
                        <Box w="100%" h="1" bg="green.400" borderRadius="full" mb={4} />
                        <Text textAlign="justify" color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.9">
                            GMC Technology is elevating the Made‑in‑India movement by building world‑class high‑pressure reactors,
                            multi‑layer photochemical systems, bioprocess equipment, and precision scientific glassware entirely
                            in‑house. With deep expertise in advanced materials, ultra‑specialised fabrication, and research‑grade
                            engineering, the company is proving that India can design, manufacture, and innovate at global standards
                            — delivering instruments that rival international benchmarks while strengthening India’s self‑reliance in
                            high‑end scientific infrastructure.
                        </Text>
                    </Box>
                </Box>
            </Grid>
        </Box>
    );
}
