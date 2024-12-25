import Sidebar from "../../Components/Sidebar"
import TableRoom from "../../Components/TableRoom"
import Footer from "../../Components/Footer"



function Rooms() {

    return (
      <>
       <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar />
            <TableRoom />
        </div>
        <Footer />
      </>
    )
  }
  
  export default Rooms