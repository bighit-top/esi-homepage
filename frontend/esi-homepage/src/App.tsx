import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import './App.css';
import { Navbar } from './layouts/NavabarAndFooter/Navbar';
import { Footer } from './layouts/NavabarAndFooter/Footer';
import { MainPage } from './layouts/MainAndLoginPage/MainPage';
import { ServicePage } from './layouts/ServicePage/ServicePage';
import { CompanyPage } from './layouts/CompanyPage/CompanyPage';
import { ContactPage } from './layouts/ContactPage/ContactPage';
import { LoginPage } from './layouts/MainAndLoginPage/LoginPage';
import { InspectionHistoryPage } from './layouts/InspectionHistoryPage/InspectionHistoryPage';
import { InspectionHistoryCreatePage } from './layouts/InspectionHistoryPage/InspectionHistoryCreatePage';
import { InspectionHistoryUpdatePage } from './layouts/InspectionHistoryPage/InspectionHistoryUpdatePage';
import { InspectionHistoryDetailPage } from './layouts/InspectionHistoryPage/InspectionHistoryDetailPage';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
        <Route index element={<MainPage />} />
        <Route path='/company' element={<CompanyPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/history' element={<InspectionHistoryPage />} />
        <Route path='/history/:historyId' element={<InspectionHistoryDetailPage />} />
        <Route path='/history/create' element={<InspectionHistoryCreatePage />} />
        <Route path='/history/update' element={<InspectionHistoryUpdatePage />} />
        {/* <Route path='/inquiry' element={<InspectionInquiryPage />} />
        <Route path='/inquiry/create' element={<InspectionInquiryCreatePage />} />
        <Route path='/inquiry/update' element={<InspectionInquiryUpdatePage />} />
        <Route path='/inquiry/:inquiryId' element={<InspectionInquiryDetailPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;