import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SideBar from './components/sidebar/SideBar'
import SearchBar from './components/searchBar/SearchBar'
import { Blog, LogOut, Blogdetail, EditBlog, PatientDashboard, Doctors, AdminRoles } from './pages/pages'
import Settings from './pages/Settings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App p-3 flex gap-3">
      <SideBar />
      <div className="w-[80%]">
        <SearchBar />
        <div className="">
          {/* <LogOut/> */}
          {/* <Blog/> */}
          {/* <Blogdetail/> */}
          {/* <EditBlog/> */}
          {/* <PatientDashboard/> */}
          {/* <Doctors/> */}
          <AdminRoles/>
  
         

        

        </div>
      </div>
    </div>
  )
}

export default App
