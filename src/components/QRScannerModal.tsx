import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Center,
  Image,
  Button
} from "@chakra-ui/react";
import gmcQr from "../assets/gmc_vcard_qr.svg";

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRScannerModal({ isOpen, onClose }: QRScannerModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: "full", md: "lg" }}>
      <ModalOverlay />
      <ModalContent borderRadius="md" maxW={{ base: "95%", md: "lg" }}>
        <ModalHeader>Contact Us — Scan QR</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box px={5} py={4}>
            <Center gap = "2rem">
              <Box w="100%" display={{ base: "block", md: "flex" }} gap={4}>
                <Box flexBasis={{ base: "100%", md: "240px" }} display={{ base: "none", md: "flex" }} alignItems="center" justifyContent="center">
                  <Image src={gmcQr} alt="GMC vCard QR" maxW="240px" width="100%" />
                </Box>
                <Box display={{ base: "flex", md: "none" }} flexDir="column" alignItems="center" justifyContent="center" w="100%">
                  <Text fontSize="sm" color="gray.600" mb={2} textAlign="center">Call us</Text>
                  <Button as="a" href="tel:+919630164429" colorScheme="blue" size="md">
                    +91 96301 64429
                  </Button>
                </Box>
              </Box>
              <Text fontSize="sm" color="gray.600" mt={4} textAlign="center">
                Scan the QR code with your phone to open our contact details.
              </Text>
            </Center>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
