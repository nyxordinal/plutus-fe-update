import FooterAdmin from '@component/Footers/FooterAdmin';
import AdminNavbar from '@component/Navbars/AdminNavbar';
import Sidebar from '@component/Sidebar/Sidebar';
import { useRouter } from 'next/router';

const Update = () => {
  const router = useRouter();
  const handleSubmit = () => {
    const update = async () => {
      alert('not yet implemented, redirect to expense page');
      router.push('/expense');
    };
    update();
  };

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar name={'update expense'} customUrl={'/expense/update'} />
        <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div className="lg:w-6/12 xl:w-3/12 px-4 mb-3">
              <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-white">
                Name
              </h6>
              <input
                type="text"
                value={'Belanja Indomaret'}
                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
              />
            </div>
            <div className="lg:w-6/12 xl:w-3/12 px-4 mb-3">
              <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-white">
                Expense Type
              </h6>
              <select
                name="cars"
                className="px-3 py-3 text-blueGray-600 relative bg-white bg-white rounded text-sm w-full"
              >
                <option value="volvo">ONLINE_PAYMENT_TYPE</option>
                <option value="saab">FOOD</option>
                <option value="mercedes">PARK</option>
                <option value="audi">TRANSPORTATION</option>
              </select>
            </div>
            <div className="lg:w-6/12 xl:w-3/12 px-4 mb-3">
              <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-white">
                Amount
              </h6>
              <input
                type="number"
                value={1000}
                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
              />
            </div>
            <div className="lg:w-6/12 xl:w-3/12 px-4 mb-8">
              <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-white">
                Expense Date
              </h6>
              <input
                type="date"
                value={'2022-09-10'}
                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
              />
            </div>
            <div className="lg:w-6/12 xl:w-3/12 px-4">
              <button
                className="bg-white text-blueGray-800 active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Update Expense
              </button>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap mt-4">
            <div className="w-full mb-12 px-4" />
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

export default Update