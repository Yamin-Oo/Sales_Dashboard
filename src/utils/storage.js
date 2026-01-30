const KEY = "transactions";

export const getTransactions = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveTransaction = (transaction) => {
  const old = getTransactions();
  localStorage.setItem(KEY, JSON.stringify([...old, transaction]));
};
