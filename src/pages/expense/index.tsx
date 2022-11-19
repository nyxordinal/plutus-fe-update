import CardTableCustom from '@component/Cards/CardTableCustom';
import Admin from '@layout/Admin';

const Expense = () => {
  return (
    <Admin name="Expense" customUrl="/expense">
      <>
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <CardTableCustom
              name={'Expense'}
              createPageUrl={'/expense/create'}
              updatePageUrl={'/expense/update'}
            />
          </div>
        </div>
      </>
    </Admin>
  );
}

export default Expense