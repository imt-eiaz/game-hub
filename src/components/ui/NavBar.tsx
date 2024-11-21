import { HStack, Image } from "@chakra-ui/react";
import logo from "/src/assets/logo.webp";
import { ColorModeButton } from "./color-mode";
import SearchInput from "../SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeButton></ColorModeButton>
    </HStack>
  );
};

export default NavBar;
