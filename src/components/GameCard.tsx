import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
//import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/Image-url";
import Emoji from "./Emoji";
//import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            {/* <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            /> */}

            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize="xl">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card.Root>
    </>
  );
};

export default GameCard;
