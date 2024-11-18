import { HStack, Image } from "@chakra-ui/react";
import logo from "/src/assets/logo.webp";
import { ColorModeButton } from "./color-mode";
import SearchInput from "../SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeButton></ColorModeButton>
    </HStack>
  );
};

export default NavBar;
