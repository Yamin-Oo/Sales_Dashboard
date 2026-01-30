import { useState } from "react";

export default function SalesSummary({ data }) {
  const [period, setPeriod] = useState("daily");

  const groupSales = () => {
    const grouped = {};

    data.forEach(t => {
      const date = new Date(t.date);
      let key = "";

      if (period === "daily") {
        key = t.date;
      }

      if (period === "weekly") {
        const week = Math.ceil(date.getDate() / 7);
        key = `${date.getFullYear()}-${date.getMonth() + 1}-W${week}`;
      }

      if (period === "monthly") {
        key = `${date.getFullYear()}-${date.getMonth() + 1}`;
      }

      grouped[key] = (grouped[key] || 0) + t.totalPrice;
    });

    return Object.entries(grouped).map(([key, total]) => ({
      key,
      total
    }));
  };

  const summary = groupSales();

  return (
    <div className="card">
      <h3>Sales Summary</h3>

      <select onChange={(e) => setPeriod(e.target.value)}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Period</th>
            <th>Total Sales (฿)</th>
          </tr>
        </thead>
        <tbody>
          {summary.map((s, i) => (
            <tr key={i}>
              <td>{s.key}</td>
              <td>{s.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
