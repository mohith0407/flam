import AnalyticsCharts from "@/components/AnalyticsChart";

// Simulate server-side data fetching
async function fetchAnalyticsData() {
  // Here you would fetch real data, e.g. from your database or API
  const departments = [
    "Marketing",
    "Sales",
    "Engineering",
    "HR",
    "Finance",
    "Support",
  ];

  // Simulate average ratings (server-side)
  const deptRatings = {};
  departments.forEach(
    (d) => (deptRatings[d] = Math.round(2 + Math.random() * 3 + Math.random() * 10) / 3)
  );

  // Simulate bookmark trends
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const bookmarks = months.map(() => Math.floor(Math.random() * 20) + 5);

  return { deptRatings, months, bookmarks };
}

export default async function AnalyticsPage() {
  const { deptRatings, months, bookmarks } = await fetchAnalyticsData();

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">📊 Analytics Dashboard</h1>

      {/* Pass data as props to client component */}
      <AnalyticsCharts
        deptRatings={deptRatings}
        months={months}
        bookmarks={bookmarks}
      />
    </main>
  );
}
