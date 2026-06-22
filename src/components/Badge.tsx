import { cn } from "../lib/utils";

const variants: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Inactive: "bg-gray-100 text-gray-600",
  Paid: "bg-emerald-100 text-emerald-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Failed: "bg-red-100 text-red-700",
  Refunded: "bg-gray-100 text-gray-600",
  Free: "bg-gray-100 text-gray-600",
  Pro: "bg-indigo-100 text-indigo-700",
  Enterprise: "bg-purple-100 text-purple-700",
};

export default function Badge({ label }: { label: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", variants[label] ?? "bg-gray-100 text-gray-600")}>
      {label}
    </span>
  );
}
