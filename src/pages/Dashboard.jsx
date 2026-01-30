import { getTransactions } from "../utils/storage";
import LineChartComp from "../components/LineChartComp";
import PieChartComp from "../components/PieChartComp";
import BarChartComp from "../components/BarChartComp";
import SalesSummary from "../components/SalesSummary";
import SalesByProduct from "../components/SalesByProduct";

export default function Dashboard() {
  const data = getTransactions();
  const totalSales = data.reduce((sum, t) => sum + t.totalPrice, 0);

  return (
    <div className="container">
      <div className="card">
        <h2>Dashboard</h2>
        <h3>Total Sales (All Time): ฿{totalSales}</h3>
      </div>

      <SalesSummary data={data} />
      <SalesByProduct data={data} />

      <div className="card chart-box">
        <LineChartComp data={data} />
      </div>

      <div className="card chart-box">
        <PieChartComp data={data} />
      </div>

      <div className="card chart-box">
        <BarChartComp data={data} />
      </div>
    </div>
  );
}
