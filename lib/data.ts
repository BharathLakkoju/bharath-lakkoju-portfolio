import fs from "fs";
import path from "path";
import { PortfolioData } from "@/types/portfolio";

const dataPath = path.join(process.cwd(), "data", "portfolio.json");

export function getPortfolioData(): PortfolioData {
  const raw = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(raw) as PortfolioData;
}
