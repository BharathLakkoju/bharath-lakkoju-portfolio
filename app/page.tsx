import { getPortfolioData } from "@/lib/data";
import PortfolioClient from "@/components/PortfolioClient";

export const dynamic = "force-dynamic";

export default function Home() {
  const data = getPortfolioData();
  return <PortfolioClient data={data} />;
}
