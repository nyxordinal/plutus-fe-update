import FooterAdmin from '@component/Footers/FooterAdmin'
import HeaderStats from '@component/Headers/HeaderStats'
import AdminNavbar from '@component/Navbars/AdminNavbar'
import Sidebar from '@component/Sidebar/Sidebar'


type PropType = {
  children: JSX.Element
}

const AdminDashboard = ({ children }: PropType) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

export default AdminDashboard