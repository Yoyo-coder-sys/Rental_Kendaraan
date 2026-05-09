import { Routes, Route } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import MainLayout from "./components/layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import Vehicles from "./pages/Vehicles";
import VehicleDetail from "./pages/VehicleDetail";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="fleet" element={<Vehicles />} />
        <Route path="fleet/:id" element={<VehicleDetail />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="bookings" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
