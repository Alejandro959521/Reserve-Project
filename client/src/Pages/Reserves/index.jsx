import Sidebar from "../../Components/Sidebar"
import TableReserves from "../../Components/TableReserves"



function Reserves() {

    return (
      <>
       <div className="flex">
            <Sidebar />
            <TableReserves />
        </div>
      </>
    )
  }
  
  export default  Reserves