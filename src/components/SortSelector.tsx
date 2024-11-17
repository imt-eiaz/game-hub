import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by : Relevance
          <BsChevronDown></BsChevronDown>
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="rel">Relevance</MenuItem>
        <MenuItem value="date add">Date added</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="rel date">Release date</MenuItem>
        <MenuItem value="pop">Popularity</MenuItem>
        <MenuItem value="av rat">Average rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
