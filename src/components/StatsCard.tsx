import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "../lib/utils";

interface StatsCardProps {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

export default function StatsCard({ label, value, change, positive }: StatsCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
      <div className={cn("mt-2 flex items-center gap-1 text-sm font-medium", positive ? "text-emerald-600" : "text-red-500")}>
        {positive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
        {change} from last month
      </div>
    </div>
  );
}
