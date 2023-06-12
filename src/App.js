import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import ServicePage from './LandingPage/Pages/ServicePage';
import OurServices from './LandingPage/Pages/OurServices';
import ContactUs from './LandingPage/Pages/ContactUs';
import SuperAdminPannel from "./Dashboard/Index"
import InAttendenceTable from './Dashboard/Components/Attendence/InAttendenceTable';
import OutAttendenceTable from './Dashboard/Components/Attendence/OutAttendenceTable';
import AttendenceModify from './Dashboard/Components/Attendence/AttendenceModify';
import AttendenceReport from './Dashboard/Components/Attendence/AttendenceReport';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/serviceName' element={<ServicePage />} />
        <Route path='/Our-All-Services' element={<OurServices />} />
        <Route path='/Contact-Us' element={<ContactUs />} />



        {/* Dashboard Routes */}

        <Route path='/admin' element={<SuperAdminPannel />} />
        <Route path='/attendence/in-time' element={<InAttendenceTable />} />
        <Route path='/attendence/out-time' element={<OutAttendenceTable />} />
        <Route path='/attendence/report' element={<AttendenceReport />} />
        <Route path='/attendence/modify' element={<AttendenceModify />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
