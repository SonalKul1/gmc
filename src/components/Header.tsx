import  { useState } from "react";
import { Box, Flex, Text, Link, HStack, Grid, Menu, MenuButton, MenuList, MenuItem, Button, useToast } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { IconDownload, IconPhone, IconUsers } from "@tabler/icons-react";
import gmcLogo from "../assets/logo.svg";
import QRScannerModal from "../components/QRScannerModal";

export default function Header() {
  const [isQrOpen, setQrOpen] = useState(false);
  const toast = useToast();

  async function downloadFile(url: string, filename: string) {
    try {
      const resp = await fetch(url, { cache: 'no-cache' });
      const blob = await resp.blob();
      const link = document.createElement('a');
      const href = URL.createObjectURL(blob);
      link.href = href;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(href);
    } catch (err) {
      toast({
        title: 'Download error',
        description: 'An unexpected error occurred while downloading the file.',
        status: 'error',
        duration: 6000,
        isClosable: true,
      });
      window.location.href = url;
    }
  }

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={100}
      bg="white"
      
    >
      <Grid
        mx="auto"
        px={{ base: "2rem", md: "3rem" }}
        py={"0.5rem"}
        templateColumns={{ base: "1fr", md: "2fr auto" }}
        templateRows={{ base: "auto auto", md: "auto" }}
        alignItems={{ base: "start", md: "center" }}
        gap={{ base: "0.75rem", md: 0 }}
        w="100%"
      >
        {/* Left — Logo + Company Info */}
        <Link
          as={RouterLink}
          to="/"
          display="flex"
          alignItems="center"
          gap="1.5rem"
          w={{ base: "100%", md: "auto" }}
          gridColumn={{ base: "1", md: "1" }}
          gridRow={{ base: "1", md: "1" }}
          _hover={{ textDecoration: 'none' }}
        >
          <Box
            w="4rem"
            h="4rem"
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
        </Link>
        {/* Right — Nav Actions */}
        <HStack gap={{ base: "0.75rem", md: "1rem" }} wrap={{ base: "wrap", md: "nowrap" }} w={{ base: "100%", md: "auto" }} justify={{ base: "flex-end", md: "flex-end" }} gridColumn={{ base: "1", md: "2" }} gridRow={{ base: "2", md: "1" }} justifySelf={{ base: "stretch", md: "end" }} mt={{ base: 2, md: 0 }}>
          <Link
            as={RouterLink}
            to="/"
            display="inline-flex"
            alignItems="center"
            gap=".25rem"
            color="blue.800"
            fontWeight="600"
            fontSize="sm"
            textDecoration="none"
            border="1px solid transparent"
            _hover={{ textDecoration: 'underline', color: 'blue.900' }}
            _active={{ textDecoration: 'none', outline: 'none', boxShadow: 'none' }}
            _focus={{ outline: 'none', boxShadow: 'none' }}
            _focusVisible={{ outline: 'none', boxShadow: 'none' }}
          >
            Home
          </Link>

          <Box>
            <Menu>
              <MenuButton as={Button} variant="plain" size="sm" border="1px solid transparent" _hover={{ textDecoration: 'underline', border: 'none', outline: 'none', boxShadow: 'none' }} _active={{ border: 'none', outline: 'none', boxShadow: 'none' }} _focus={{ border: 'none', outline: 'none', boxShadow: 'none' }} _focusVisible={{ border: 'none', outline: 'none', boxShadow: 'none' }}>
                <Flex gap={"0.25rem"}>
                  <IconDownload size={16}/>
                  Catalogue
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem gap={".5rem"} fontSize="sm" _hover={{ textDecoration: 'underline' }} onClick={() => downloadFile('/GMC-Product-Catalogue.pdf', 'GMC-Product-Catalogue.pdf')}>
                  <IconDownload size={16} />
                  Product Catalogue
                </MenuItem>
                <MenuItem gap={".5rem"} fontSize="sm" _hover={{ textDecoration: 'underline' }} onClick={() => downloadFile('/GMC-Repair_Catalogue.png', 'GMC-Repair_Catalogue.png')}>
                  <IconDownload size={16} />
                  Repair Services Catalogue
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          
          <Link
            as={RouterLink}
            to="/team"
            display="inline-flex"
            alignItems="center"
            gap=".25rem"
            color="blue.800"
            fontWeight="600"
            fontSize="sm"
            textDecoration="none"
            border="1px solid transparent"
            _hover={{ textDecoration: 'underline', color: 'blue.900' }}
            _active={{ textDecoration: 'none', outline: 'none', boxShadow: 'none' }}
            _focus={{ outline: 'none', boxShadow: 'none' }}
            _focusVisible={{ outline: 'none', boxShadow: 'none' }}
          >
            <IconUsers size={16} />
            About Us
          </Link>
          <Link
            display="inline-flex"
            alignItems="center"
            gap=".25rem"
            color="blue.800"
            fontWeight="600"
            fontSize="sm"
            textDecoration="none"
            border="1px solid transparent"
            _hover={{ textDecoration: 'underline', color: 'blue.900' }}
            _active={{ textDecoration: 'none', outline: 'none', boxShadow: 'none' }}
            _focus={{ outline: 'none', boxShadow: 'none' }}
            _focusVisible={{ outline: 'none', boxShadow: 'none' }}
            href="#"
            onClick={(e) => { e.preventDefault(); setQrOpen(true); }}
          >
            <IconPhone size={16} />
            Contact Us
          </Link>
          <QRScannerModal isOpen={isQrOpen} onClose={() => setQrOpen(false)} />
         </HStack>
      </Grid>
    </Box>
  );
}
