import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body">
      <Navbar />
      <div className="flex-grow flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
