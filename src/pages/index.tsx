import { Inter } from "next/font/google";
import SnowBall from "@/components/snow-ball";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`h-screen w-screen`}>
      <SnowBall />
      <SnowBall horizontalOffset={50} speed={5} size={7} />
      <SnowBall horizontalOffset={100} speed={4} size={5} delay={100} />
      <SnowBall horizontalOffset={100} speed={2} size={10} delay={100} />
      <SnowBall horizontalOffset={100} speed={7} size={8} delay={100} />
      <SnowBall horizontalOffset={150} speed={3} size={5} delay={300} />
      <SnowBall speed={7} size={10} horizontalOffset={200} />
      <SnowBall horizontalOffset={250} />
      <SnowBall speed={4} size={10} horizontalOffset={300} />
      <SnowBall speed={3} size={5} horizontalOffset={350} delay={100} />
      <SnowBall speed={4} size={8} horizontalOffset={400} delay={300} />
      <SnowBall speed={6} size={7} horizontalOffset={450} delay={500} />
      <SnowBall />
      <SnowBall speed={5} size={7} horizontalOffset={425} />
      <SnowBall speed={6} size={7} horizontalOffset={425} />
      <SnowBall speed={7} size={7} horizontalOffset={425} />
      <SnowBall speed={2} size={5} horizontalOffset={450} delay={100} />
      <SnowBall speed={3} size={5} horizontalOffset={500} delay={300} />
      <SnowBall speed={7} size={10} horizontalOffset={550} />
      <SnowBall horizontalOffset={600} />
      <SnowBall speed={4} size={10} horizontalOffset={700} />
      <SnowBall speed={3} size={5} horizontalOffset={725} delay={100} />
      <SnowBall speed={4} size={8} horizontalOffset={800} delay={300} />
      <SnowBall speed={8} size={7} horizontalOffset={950} delay={500} />
      <SnowBall horizontalOffset={975} />
      <SnowBall speed={10} size={7} horizontalOffset={1000} />
      <SnowBall speed={2} size={5} horizontalOffset={1100} delay={100} />
      <SnowBall speed={3} size={5} horizontalOffset={1200} delay={200} />
      <SnowBall speed={8} size={8} horizontalOffset={1225} delay={100} />
      <SnowBall horizontalOffset={1300} />
      <SnowBall horizontalOffset={1325} speed={7} size={10} />
      <SnowBall horizontalOffset={1400} speed={4} size={5} delay={100} />
      <SnowBall horizontalOffset={1425} speed={4} size={8} delay={300} />
      <SnowBall horizontalOffset={1500} speed={2} size={7} delay={500} />
      <SnowBall horizontalOffset={1550} />
      <SnowBall horizontalOffset={1575} speed={5} size={7} />
      <SnowBall horizontalOffset={1600} speed={2} size={5} delay={100} />
      <SnowBall horizontalOffset={1700} speed={3} size={5} delay={300} />
      <SnowBall horizontalOffset={1800} speed={10} size={10} />
      <SnowBall horizontalOffset={1800} speed={12} size={10} />
      <SnowBall horizontalOffset={1800} speed={15} size={10} />
      <SnowBall horizontalOffset={1800} speed={7} size={10} />
      <SnowBall horizontalOffset={1800} speed={9} size={10} />
      <SnowBall horizontalOffset={1810} />
      <SnowBall horizontalOffset={1900} speed={12} size={10} />
      <SnowBall horizontalOffset={2000} speed={3} size={5} delay={100} />
      <SnowBall horizontalOffset={2050} speed={4} size={8} delay={300} />
      <SnowBall horizontalOffset={2150} speed={2} size={7} delay={500} />
    </main>
  );
}
