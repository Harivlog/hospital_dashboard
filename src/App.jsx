import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SideBar from './components/sidebar/SideBar'
import SearchBar from './components/searchBar/SearchBar'
import { Blog, LogOut, Blogdetail, EditBlog, PatientDashboard, Doctors, AdminRoles, AdminRolesMain, ChatPage, LoginPage, HospitalsPackage, Facilities, HospitalPackageEdit, EditFacilities, CalendarPage, AdminPage, Banner, CreateTest, HomeTesting, } from './pages/pages'
import Settings from './pages/Settings'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <div className="App p-3 flex gap-3">
        <SideBar />
        <div className="w-full">
          <SearchBar />
          <div className="">
            <Routes>
              <Route path="/" element={<AdminPage />} />
              <Route path="/appointments" element={<CalendarPage />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/patients-dashboard" element={<PatientDashboard />} />
              <Route path="/chats" element={<ChatPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/hospital-package" element={<HospitalsPackage />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/admin-roles" >
                <Route index element={<AdminRolesMain />} />
                <Route path="admin-roles" element={<AdminRoles />} />

              </Route>
                <Route path="/HomeTesting" >
                <Route index element={<HomeTesting />} />
                {/* <Route path="createTest" element={} /> */}

              </Route>
              <Route path="/createTest" element={<CreateTest/>} />
              <Route path="/banner" element={<Banner/>} />

              <Route path="/blog" element={<Blog />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/logout" element={<LogOut />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
            {/*  */}
             {/*  */}

             
            {/* <Blogdetail/> */}
            {/* <EditBlog/> */}







            {/* <HospitalPackageEdit/> */}
            {/* <EditFacilities/> */}

            {/*  */}

          </div>
        </div>
      </div>
      {/* <LoginPage/> */}
    </div>
  )
}

export default App
