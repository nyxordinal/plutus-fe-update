import CardLineChartSummary from '@component/Cards/CardLineSummary';
import CardPageSummary from '@component/Cards/CardPageSummary';
import AdminDashboard from '@layout/AdminDashboard';

const Dashboard = () => {
  return (
    <AdminDashboard>
      <>
        <div className="flex flex-wrap">
          <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
            <CardLineChartSummary id={'expense-chart'} title="Expense" />
          </div>
          <div className="w-full xl:w-6/12 px-4">
            <CardLineChartSummary id={'income-chart'} title="Income" />
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
            <CardPageSummary title="Expense Summary" seeAllUrl="/expense" />
          </div>
          <div className="w-full xl:w-6/12 px-4">
            <CardPageSummary title="Income Summary" seeAllUrl="/income" />
          </div>
        </div>
      </>
    </AdminDashboard>
  );
}

export default Dashboard