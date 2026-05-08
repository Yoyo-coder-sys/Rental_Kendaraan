import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body">
      <Navbar />
      <div className="flex pt-20 min-h-screen flex-grow">
        <Sidebar />
        <main className="flex-1 md:ml-64 p-8">
            <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
