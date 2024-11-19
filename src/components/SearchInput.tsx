import { InputGroup } from "./ui/input-group";
import { LuSearch } from "react-icons/lu";

import { HStack, Input, Kbd } from "@chakra-ui/react";
import { NativeSelectField, NativeSelectRoot } from "./ui/native-select";

const SearchInput = () => {
  return (
    <>
      <HStack width="full" borderRadius={20}>
        <InputGroup
          flex="1"
          startElement={<LuSearch />}
          //endElement={<Kbd></Kbd>}
        >
          <Input placeholder="Search games..." />
        </InputGroup>
      </HStack>
      <label> Themes </label>
    </>
  );
};

export default SearchInput;
