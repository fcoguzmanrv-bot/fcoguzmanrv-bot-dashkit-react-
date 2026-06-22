export const stats = [
  { label: "Total Revenue", value: "$45,231", change: "+20.1%", positive: true },
  { label: "Active Users", value: "2,350", change: "+15.3%", positive: true },
  { label: "New Orders", value: "1,247", change: "+8.2%", positive: true },
  { label: "Churn Rate", value: "3.2%", change: "-0.4%", positive: true },
];

export const revenueData = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 3000 },
  { month: "Mar", value: 5000 },
  { month: "Apr", value: 4800 },
  { month: "May", value: 7000 },
  { month: "Jun", value: 6500 },
  { month: "Jul", value: 8000 },
  { month: "Aug", value: 7500 },
  { month: "Sep", value: 9000 },
  { month: "Oct", value: 8500 },
  { month: "Nov", value: 10000 },
  { month: "Dec", value: 11000 },
];

export const users = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", plan: "Pro", status: "Active", joined: "Jan 12, 2025" },
  { id: "2", name: "Bob Smith", email: "bob@example.com", plan: "Free", status: "Active", joined: "Feb 3, 2025" },
  { id: "3", name: "Carol White", email: "carol@example.com", plan: "Enterprise", status: "Active", joined: "Mar 18, 2025" },
  { id: "4", name: "David Lee", email: "david@example.com", plan: "Pro", status: "Inactive", joined: "Apr 5, 2025" },
  { id: "5", name: "Eva Martinez", email: "eva@example.com", plan: "Free", status: "Active", joined: "May 22, 2025" },
  { id: "6", name: "Frank Brown", email: "frank@example.com", plan: "Pro", status: "Active", joined: "Jun 10, 2025" },
  { id: "7", name: "Grace Kim", email: "grace@example.com", plan: "Enterprise", status: "Active", joined: "Jul 1, 2025" },
  { id: "8", name: "Henry Davis", email: "henry@example.com", plan: "Free", status: "Inactive", joined: "Aug 14, 2025" },
];

export const orders = [
  { id: "#3210", customer: "Alice Johnson", product: "Pro Plan", amount: "$19.00", status: "Paid", date: "Jun 1, 2025" },
  { id: "#3211", customer: "Carol White", product: "Enterprise Plan", amount: "$99.00", status: "Paid", date: "Jun 2, 2025" },
  { id: "#3212", customer: "Frank Brown", product: "Pro Plan", amount: "$19.00", status: "Pending", date: "Jun 3, 2025" },
  { id: "#3213", customer: "Grace Kim", product: "Enterprise Plan", amount: "$99.00", status: "Paid", date: "Jun 4, 2025" },
  { id: "#3214", customer: "Bob Smith", product: "Pro Plan", amount: "$19.00", status: "Failed", date: "Jun 5, 2025" },
  { id: "#3215", customer: "Eva Martinez", product: "Pro Plan", amount: "$19.00", status: "Paid", date: "Jun 6, 2025" },
  { id: "#3216", customer: "David Lee", product: "Pro Plan", amount: "$19.00", status: "Refunded", date: "Jun 7, 2025" },
  { id: "#3217", customer: "Henry Davis", product: "Pro Plan", amount: "$19.00", status: "Pending", date: "Jun 8, 2025" },
];

export const topProducts = [
  { name: "Pro Plan", sales: 842, revenue: "$15,998" },
  { name: "Enterprise Plan", sales: 156, revenue: "$15,444" },
  { name: "Starter Pack", sales: 312, revenue: "$6,240" },
  { name: "Add-on Storage", sales: 89, revenue: "$890" },
];

export const recentActivity = [
  { action: "New user signed up", user: "alice@example.com", time: "2 min ago" },
  { action: "Payment received", user: "carol@example.com", time: "15 min ago" },
  { action: "Subscription canceled", user: "david@example.com", time: "1 hour ago" },
  { action: "Support ticket opened", user: "bob@example.com", time: "3 hours ago" },
  { action: "New user signed up", user: "eva@example.com", time: "5 hours ago" },
];
