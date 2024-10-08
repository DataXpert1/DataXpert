import Navbar from "../components/navbar";
import HomeMain from "./home/homeMain";
import "dotenv/config";

export default function Home() {
  return (
    <div className="h-screen w-[100%]">
      <Navbar />
      <HomeMain />
    </div>
  );
}
