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
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { IconBuildingFactory, IconBuildingBank, IconFileText, IconPhone } from '@tabler/icons-react';

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRScannerModal({ isOpen, onClose }: QRScannerModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: "full", md: "lg" }}>
      <ModalOverlay />
      <ModalContent borderRadius="md" maxW={{ base: "95%", md: "lg" }}>
        <ModalHeader>Contact Us</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box px={5} py={4}>
            <Center flexDir="column" gap="2rem">
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="100%">
                <Box bg="gray.50" p={4} borderRadius="2xl" border="1px solid" borderColor="blue.50">
                  <Flex align="center" gap={3} mb={3}>
                    <Box bg="blue.50" borderRadius="xl" w="3rem" h="3rem" display="flex" alignItems="center" justifyContent="center">
                      <IconPhone size={24} color="#2b6cb0" />
                    </Box>
                    <Text fontSize="xs" letterSpacing="widest" textTransform="uppercase" color="blue.600" fontWeight="700">
                      Phone
                    </Text>
                  </Flex>
                  <Text fontSize="md" fontWeight="600" color="gray.700" mb={1}>
                    +91‑9630194429
                  </Text>
                </Box>

                <Box bg="gray.50" p={4} borderRadius="2xl" border="1px solid" borderColor="blue.50">
                  <Flex align="center" gap={3} mb={3}>
                    <Box bg="blue.50" borderRadius="xl" w="3rem" h="3rem" display="flex" alignItems="center" justifyContent="center">
                      <IconBuildingBank size={24} color="#2b6cb0" />
                    </Box>
                    <Text fontSize="xs" letterSpacing="widest" textTransform="uppercase" color="blue.600" fontWeight="700">
                      Registered Office
                    </Text>
                  </Flex>
                  <Text fontSize="sm" color="gray.700" lineHeight="taller">
                    GMC Technology, Rau
                    <br />
                    Indore - 452001
                  </Text>
                </Box>

                <Box bg="gray.50" p={4} borderRadius="2xl" border="1px solid" borderColor="blue.50">
                  <Flex align="center" gap={3} mb={3}>
                    <Box bg="blue.50" borderRadius="xl" w="3rem" h="3rem" display="flex" alignItems="center" justifyContent="center">
                      <IconFileText size={24} color="#2b6cb0" />
                    </Box>
                    <Text fontSize="xs" letterSpacing="widest" textTransform="uppercase" color="blue.600" fontWeight="700">
                      Company Details
                    </Text>
                  </Flex>
                  <Text fontSize="sm" color="gray.700" lineHeight="taller">
                    CIN: 
                    <br />
                    GST: 
                  </Text>
                </Box>
              </SimpleGrid>
            </Center>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
