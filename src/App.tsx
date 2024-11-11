import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/ui/NavBar"
import GameGrid from "./components/GameGrid"


function App() {

  return (
    <Grid
    templateAreas={`"nav nav" "aside main"`} >
      <GridItem area='nav'>
        <NavBar>   
        </NavBar>
      </GridItem>
      <GridItem area='aside' bg='gold'>Aside</GridItem>
      <GridItem area='main' bg='dodgerblue'>
        <GameGrid />
      </GridItem>
    </Grid>

  )
}

export default App
