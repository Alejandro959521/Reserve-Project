import Sidebar from "../../Components/Sidebar"
import TableUsers from "../../Components/TableUsers"



function Users() {

    return (
      <>
       <div className="flex">
            <Sidebar />
            <TableUsers />
        </div>
      </>
    )
  }
  
  export default Users