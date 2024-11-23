import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { fetchLatestInvoices, fetchCardData } from "@/app/lib/data";
import { Suspense } from "react";
import { RevenueChartSkeleton } from "@/app/ui/skeletons";

export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();
  const {
    totalPaidInvoices,
    totalPendingInvoices, 
    numberOfInvoices,
    numberOfCustomers,
  } = await fetchCardData();

  return (
    <>
      <div className="mb-4 text-2xl font-bold">DashBoard</div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Paid Invoices"
          value={totalPaidInvoices}
          type="collected"
        />
        <Card
          title="Pending Invoices"
          value={totalPendingInvoices}
          type="pending"
        />
        <Card title="Customers" value={numberOfCustomers} type="customers" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart revenue={[]} />
        </Suspense>
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </>
  );
}
