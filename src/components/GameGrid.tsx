import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();

  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spaceX={3}
        spaceY={3}
      >
        {isLoading &&
          skeleton.map((skeleton) => (
            // <GameCardContainer>
            <GameCardSkeleton key={skeleton} />
            // </GameCardContainer>
          ))}
        {data.map((data) => (
          // <GameCardContainer>
          <GameCard key={data.id} game={data} />
          // </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
