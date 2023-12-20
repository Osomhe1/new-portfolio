import { Box, Button, Container, Flex, HStack, IconButton, Spacer, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";
import Logo from "./Logo.jsx";
import { HiArrowDown } from "react-icons/hi";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  
  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Box width="full" as="nav">
      <Container maxW="6xl" height="120px" display="flex" alignItems="center">
        <Logo/>
        <Spacer/>
        {/* <HStack spacing="6">
          {
            isDark ? (
              <IconButton
                rounded="12"
                onClick={ toggleColorMode }
                aria-label="Enable light mode"
                icon={ <FiSun size="20"/> }
              />
            ) : (
              <IconButton
                rounded="12"
                onClick={ toggleColorMode }
                aria-label="Enable dark mode"
                icon={ <FiMoon size="20"/> }
                bg="gray.200"
              />
            )
          }
        </HStack> */}
        <Flex align="center" mt="">
                  <Button
                    onClick={() => handleClick( 'https://drive.google.com/file/d/1Sgz9736A-hHlQ8hq53LqLI_u-p2EB2YP/view?usp=drive_link')}
                     rounded="full" 
                    rightIcon={ <HiArrowDown/> } px="6"
                    backgroundColor={ colorMode === 'light' ? 'gray.800' : 'gray.200' }
                    color={ colorMode === 'light' ? '#fff' : 'gray.900' }
                    _hover={ { background: colorMode === 'light' ? 'gray.700' : 'gray.50' } }
                    _active={ { background: colorMode === 'light' ? 'gray.600' : 'gray.400' } }
                  >
                    Download CV
                  </Button>
                </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
