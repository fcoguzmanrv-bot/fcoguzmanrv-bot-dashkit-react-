import RevenueChart from "../components/RevenueChart";

const kpis = [
  { label: "Page Views", value: "128,420", change: "+12%" },
  { label: "Unique Visitors", value: "42,810", change: "+8%" },
  { label: "Avg. Session", value: "3m 24s", change: "+5%" },
  { label: "Bounce Rate", value: "38.4%", change: "-2%" },
];

const channels = [
  { name: "Organic Search", visitors: 18400, pct: 43 },
  { name: "Direct", visitors: 9200, pct: 21 },
  { name: "Referral", visitors: 7600, pct: 18 },
  { name: "Social Media", visitors: 5100, pct: 12 },
  { name: "Email", visitors: 2510, pct: 6 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{k.label}</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">{k.value}</p>
            <p className="mt-1 text-sm font-medium text-emerald-600">{k.change} vs last month</p>
          </div>
        ))}
      </div>
      <RevenueChart />
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-base font-semibold text-gray-900">Traffic Channels</h2>
        <div className="space-y-4">
          {channels.map((c) => (
            <div key={c.name}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium text-gray-900">{c.name}</span>
                <span className="text-gray-500">{c.visitors.toLocaleString()} · {c.pct}%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-100">
                <div className="h-2 rounded-full bg-indigo-600 transition-all" style={{ width: `${c.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
