import { revenueData } from "../data/mock";

export default function RevenueChart() {
  const max = Math.max(...revenueData.map((d) => d.value));
  const width = 700;
  const height = 200;
  const padX = 40;
  const padY = 20;
  const chartW = width - padX * 2;
  const chartH = height - padY * 2;

  const points = revenueData.map((d, i) => ({
    x: padX + (i / (revenueData.length - 1)) * chartW,
    y: padY + chartH - (d.value / max) * chartH,
    ...d,
  }));

  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaD = `${pathD} L ${points[points.length - 1].x} ${padY + chartH} L ${points[0].x} ${padY + chartH} Z`;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-base font-semibold text-gray-900">Revenue Overview</h2>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" preserveAspectRatio="none" style={{ height: 200 }}>
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <line key={t} x1={padX} x2={padX + chartW} y1={padY + t * chartH} y2={padY + t * chartH} stroke="#f3f4f6" strokeWidth="1" />
        ))}
        <path d={areaD} fill="url(#areaGradient)" />
        <path d={pathD} fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {points.map((p) => (
          <circle key={p.month} cx={p.x} cy={p.y} r="3.5" fill="#6366f1" />
        ))}
        {points.map((p) => (
          <text key={`l-${p.month}`} x={p.x} y={height - 2} textAnchor="middle" fontSize="10" fill="#9ca3af">{p.month}</text>
        ))}
      </svg>
    </div>
  );
}
