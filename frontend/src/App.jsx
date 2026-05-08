import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import AdminLayout from './components/layout/AdminLayout';
import LandingPage from './pages/LandingPage';
import Vehicles from './pages/Vehicles';
import VehicleDetail from './pages/VehicleDetail';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes with MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="fleet" element={<Vehicles />} />
          <Route path="fleet/:id" element={<VehicleDetail />} />
        </Route>

        {/* Admin Routes with AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="bookings" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
