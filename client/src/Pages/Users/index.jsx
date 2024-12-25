import Sidebar from "../../Components/Sidebar"
import TableUsers from "../../Components/TableUsers"
import Footer from "../../Components/Footer"



function Users() {

    return (
      <>
       <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar />
            <TableUsers />            
        </div>
        <Footer />
      </>
    )
  }
  
  export default Users