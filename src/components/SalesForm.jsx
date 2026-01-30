import products from "../data/pos_item.json";
import { saveTransaction } from "../utils/storage";
import { useState } from "react";

export default function SalesForm() {
  const [product, setProduct] = useState(products[0]);
  const [qty, setQty] = useState(1);
  const [date, setDate] = useState("");

  const total = product.unitPrice * qty;

  const submit = () => {
    saveTransaction({
      productName: product.itemName,
      category: product.category,
      unitPrice: product.unitPrice,
      quantity: qty,
      totalPrice: total,
      date
    });
    alert("Transaction saved!");
  };

  return (
    <div className="card">
      <h3>Add New Sale</h3>

      <div className="form-row">
        <select onChange={(e) => setProduct(products[e.target.value])}>
          {products.map((p, i) => (
            <option value={i} key={i}>{p.itemName}</option>
          ))}
        </select>

        <input
          type="number"
          min="1"
          value={qty}
          onChange={e => setQty(+e.target.value)}
        />

        <input
          type="date"
          onChange={e => setDate(e.target.value)}
        />
      </div>

      <p><strong>Total Price:</strong> ฿{total}</p>

      <button onClick={submit}>Save Transaction</button>
    </div>
  );
}
