import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-surface-container-low hidden md:flex flex-col p-6 fixed h-[calc(100vh-5rem)]">
      <div className="mb-10">
        <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-4">Management</p>
        <nav className="space-y-2">
          <Link to="/admin" className={`flex items-center gap-3 px-4 py-3 rounded-full font-semibold transition-all ${location.pathname === '/admin' ? 'bg-primary-container text-on-primary-container' : 'text-secondary hover:bg-surface-container'}`}>
            <span className="material-symbols-outlined" style={{fontVariationSettings: location.pathname === '/admin' ? "'FILL' 1" : "'FILL' 0"}}>directions_car</span>
            <span>Fleet</span>
          </Link>
          <Link to="/admin/bookings" className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all ${location.pathname === '/admin/bookings' ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-secondary hover:bg-surface-container'}`}>
            <span className="material-symbols-outlined" style={{fontVariationSettings: location.pathname === '/admin/bookings' ? "'FILL' 1" : "'FILL' 0"}}>event_available</span>
            <span>Bookings</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
}
