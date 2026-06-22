import Badge from "../components/Badge";
import { orders } from "../data/mock";
import { Download } from "lucide-react";

export default function Orders() {
  const total = orders
    .filter((o) => o.status === "Paid")
    .reduce((sum, o) => sum + parseFloat(o.amount.replace("$", "")), 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {orders.length} orders · <span className="font-medium text-gray-900">${total.toFixed(2)} collected</span>
        </p>
        <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          <Download className="h-4 w-4" /> Export CSV
        </button>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["Order", "Customer", "Product", "Amount", "Status", "Date"].map((h) => (
                <th key={h} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{o.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{o.customer}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{o.product}</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">{o.amount}</td>
                <td className="px-6 py-4"><Badge label={o.status} /></td>
                <td className="px-6 py-4 text-sm text-gray-500">{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
