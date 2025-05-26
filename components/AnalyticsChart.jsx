"use client";

import BarChart from "./BarChart";
import LineChart from "./LineChart";

export default function AnalyticsCharts({ deptRatings, months, bookmarks }) {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8">
      <section className="flex-1 mb-8 lg:mb-0">
        <h2 className="text-xl font-semibold mb-4">
          Department-wise Average Ratings
        </h2>
        <BarChart
          labels={Object.keys(deptRatings)}
          data={Object.values(deptRatings).map((r) => r.toFixed(2))}
          title="Average Performance Rating by Department"
        />
      </section>

      <section className="flex-1">
        <h2 className="text-xl font-semibold mb-4">Bookmark Trends (Last 6 Months)</h2>
        <LineChart labels={months} data={bookmarks} title="Number of Bookmarks Over Time" />
      </section>
    </div>
  );
}
