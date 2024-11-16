import { Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platforms"}
          <BsChevronDown></BsChevronDown>
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem
            value={`${platform.id}`}
            onClick={() => platform}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
