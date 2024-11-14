import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
//import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/Image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root borderRadius={10} overflow="hidden">
        <Image src={getCroppedImageUrl (game.background_image)} />
        <CardBody>
          <Heading fontSize="xl">{game.name}</Heading>
          {/* <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} /> */}
          <HStack>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card.Root>
    </>
  );
};

export default GameCard;
