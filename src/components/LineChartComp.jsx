import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function LineChartComp({ data }) {

  const grouped = {};

  data.forEach(t => {
    grouped[t.date] = (grouped[t.date] || 0) + t.totalPrice;
  });

  const chartData = Object.keys(grouped).map(date => ({
    date,
    total: grouped[date]
  }));

  return (
    <>
      <h3>Sales Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="total" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
