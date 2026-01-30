export default function SalesByProduct({ data }) {
  const grouped = {};

  data.forEach(t => {
    grouped[t.productName] =
      (grouped[t.productName] || 0) + t.totalPrice;
  });

  const result = Object.entries(grouped).map(([name, total]) => ({
    name,
    total
  }));

  return (
    <div className="card">
      <h3>Sales by Product</h3>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Total Sales (฿)</th>
          </tr>
        </thead>
        <tbody>
          {result.map((r, i) => (
            <tr key={i}>
              <td>{r.name}</td>
              <td>{r.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
