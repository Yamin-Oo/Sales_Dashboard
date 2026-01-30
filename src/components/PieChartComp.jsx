import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function PieChartComp({ data }) {
  const grouped = {};

  data.forEach(t => {
    grouped[t.category] = (grouped[t.category] || 0) + t.totalPrice;
  });

  const chartData = Object.keys(grouped).map(cat => ({
    name: cat,
    value: grouped[cat]
  }));

  return (
    <>
      <h3>Sales by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {chartData.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
