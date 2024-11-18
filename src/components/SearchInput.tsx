import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";

const SearchInput = () => {
  return (
    <InputGroup>
    <InputLeftElement children={}
    <Input borderRadius={20} placeholder="Search games..." variant="subtle" />
    </InputGroup>
  );
};

export default SearchInput;
