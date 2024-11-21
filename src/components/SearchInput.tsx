import { InputGroup } from "./ui/input-group";
import { LuSearch } from "react-icons/lu";

import { HStack, Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <HStack width="full" borderRadius={50}>
          <InputGroup
            flex="1"
            startElement={<LuSearch />}
            //endElement={<Kbd></Kbd>}
          >
            <Input ref={ref} placeholder="Search games..." />
          </InputGroup>
        </HStack>
      </form>
    </>
  );
};

export default SearchInput;
