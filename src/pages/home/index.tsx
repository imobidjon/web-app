import { Divider, Typography, Box } from "@mui/material";
import { GameCard } from "../../Components";
import { AppMenu, TopBar } from "../../layout";

export default function Home() {
  return (
    <Box sx={{p: 1}}>
      <AppMenu />

      <TopBar />
      <Divider />
      <Typography sx={{ my: 1 }}  color={"#2E3192"} fontSize={'13px'} fontWeight={"bolder"}>
        Noyabr 27, <span style={{fontWeight: 'lighter'}}>Dushanba</span>
      </Typography>
      <GameCard />
      <GameCard />
      <GameCard />
    </Box>
  );
}
