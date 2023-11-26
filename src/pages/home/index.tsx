import { GameCard } from "../../Components";
import {TopBar} from "../../layout"


export default function Home() {
  return (
    <div>
      <TopBar />
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  );
}
