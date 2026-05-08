import { transactions } from "./InvestigationGraph";

export function TransactionTable() {
  return (
    <section className="mt-6 rounded-3xl border border-border-soft bg-surface p-6">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-text-main">Transaction path</h2>
        <p className="mt-1 text-sm text-text-muted">
          Mock transaction records used to explain the visible graph path.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="border-b border-border-soft text-text-muted">
            <tr>
              <th className="pb-3 font-medium">ID</th>
              <th className="pb-3 font-medium">From</th>
              <th className="pb-3 font-medium">To</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border-soft">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-4 text-text-main">{transaction.id}</td>
                <td className="py-4 text-text-muted">{transaction.from}</td>
                <td className="py-4 text-text-muted">{transaction.to}</td>
                <td className="py-4 text-text-main">
                  {transaction.amount} {transaction.asset}
                </td>
                <td className="py-4">
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs capitalize text-text-main">
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
