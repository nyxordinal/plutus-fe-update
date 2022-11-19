import FooterAdmin from '@component/Footers/FooterAdmin';
import AdminNavbar from '@component/Navbars/AdminNavbar';
import SearchBar from '@component/SearchBar/SearchBar';
import Sidebar from '@component/Sidebar/Sidebar';

type PropType = {
  children: JSX.Element
  name: string
  customUrl: string
}
export default function Admin({ children, name, customUrl }: PropType) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar name={name} customUrl={customUrl} />
        <SearchBar />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
