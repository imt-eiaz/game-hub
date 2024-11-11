import { HStack, Image } from '@chakra-ui/react'
import logo from '/src/assets/logo.webp';
import { ColorModeButton } from './color-mode';


const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px'/>
        <ColorModeButton></ColorModeButton>
    </HStack>
)
}

export default NavBar