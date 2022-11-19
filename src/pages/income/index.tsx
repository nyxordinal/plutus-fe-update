import CardTableCustom from '@component/Cards/CardTableCustom';
import Admin from '@layout/Admin';

const Income = () => {
  return (
    <Admin name="Income" customUrl="/income">
      <>
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <CardTableCustom
              name={'Income'}
              createPageUrl={'/income/create'}
              updatePageUrl={'/income/update'}
            />
          </div>
        </div>
      </>
    </Admin>
  );
}

export default Income