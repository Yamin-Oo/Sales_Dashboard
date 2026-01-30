import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function BarChartComp({ data }) {
  const grouped = {};

  data.forEach(t => {
    grouped[t.productName] =
      (grouped[t.productName] || 0) + t.totalPrice;
  });

  const chartData = Object.keys(grouped)
    .map(name => ({
      name,
      total: grouped[name]
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 5);

  return (
    <>
      <h3>Top 5 Selling Products</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
