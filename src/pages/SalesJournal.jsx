import SalesForm from "../components/SalesForm";
import TransactionTable from "../components/TransactionTable";

export default function SalesJournal() {
  return (
    <div className="container">
      <SalesForm />

      <div className="card">
        <TransactionTable />
      </div>
    </div>
  );
}
