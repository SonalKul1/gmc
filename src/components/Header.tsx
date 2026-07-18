import { Box, Flex, Text, Button, HStack } from "@chakra-ui/react";
import { IconFileDownload, IconPhone } from "@tabler/icons-react";
import gmcLogo from "../assets/logo.svg";

export default function Header() {
  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={100}
      bg="white"
      
    >
      <Flex
        mx="auto"
        px={{ base: "2rem", md: "3rem" }}
        py={"0.5rem"}
        align="center"
        justify="space-between"
        
      >
        {/* Left — Logo + Company Info */}
        <Flex align="center" gap={"1.5rem"}>
          <Box
            w="8rem"
            h="8rem"
            borderRadius="full"
            bg="blue.700"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexShrink={0}
            overflow="hidden"
          >
            <img
              src={gmcLogo}
              alt="GMC Logo"
              style={{ maxHeight: "100%", width: "100%", objectFit: "contain" }}
            />
          </Box>

          {/* Company name + tagline */}
          <Box>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="900"
              lineHeight="1.1"
              letterSpacing="-0.03em"  
              color="blue.800"            
            >
              GMC Technology
            </Text>
            <Text
              fontSize="xs"
              color="gray.500"
              fontWeight="500"
              letterSpacing="wider"
              textTransform="uppercase"
            >
              Glass · Metal · Ceramic Technology
            </Text>
          </Box>
        </Flex>
        {/* Right — Nav Actions */}
        <HStack gap={3}>
          <Button
            variant="plain"
            colorPalette="blue"
            size="sm"
            fontWeight="600"
            textDecoration="none"
            _hover={{ textDecoration: 'underline', fontWeight: '800', border: 'none', outline: 'none', boxShadow: 'none' }}
          >
            <IconFileDownload size={16} />
            Catalogue
          </Button>
          <Button
            variant="plain"
            colorPalette="blue"
            size="sm"
            fontWeight="600"
            textDecoration="none"
            _hover={{ textDecoration: 'underline', fontWeight: '800', border: 'none', outline: 'none', boxShadow: 'none' }}
            
          >
            <IconPhone size={16} />
            Contact Us
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
