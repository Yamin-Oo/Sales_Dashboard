import { getTransactions } from "../utils/storage";

export default function TransactionTable() {
  const transactions = getTransactions();

  if (transactions.length === 0) {
    return <p>No transactions recorded yet.</p>;
  }

  return (
    <>
      <h3>Transaction List</h3>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={th}>Date</th>
            <th style={th}>Product</th>
            <th style={th}>Category</th>
            <th style={th}>Unit Price</th>
            <th style={th}>Quantity</th>
            <th style={th}>Total</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t, index) => (
            <tr key={index}>
              <td style={td}>{t.date}</td>
              <td style={td}>{t.productName}</td>
              <td style={td}>{t.category}</td>
              <td style={td}>{t.unitPrice}</td>
              <td style={td}>{t.quantity}</td>
              <td style={td}>{t.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const th = {
  border: "1px solid #ccc",
  padding: "8px",
  background: "#f5f5f5"
};

const td = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "center"
};
