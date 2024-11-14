import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>

      <GridItem area="aside">
        <GenreList />
      </GridItem>

      <GridItem area="main">
        <Box paddingLeft="20px"></Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
