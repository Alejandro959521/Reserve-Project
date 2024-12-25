import Sidebar from "../../Components/Sidebar"
import TableReserves from "../../Components/TableReserves"
import Footer from "../../Components/Footer"



function Reserves() {

    return (
      <>
       <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar />
            <TableReserves />
        </div>
        <Footer />
      </>
    )
  }
  
  export default  Reserves