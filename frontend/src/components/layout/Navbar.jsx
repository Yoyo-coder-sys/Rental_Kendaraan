import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-2xl font-black text-[#1B263B] dark:text-white uppercase tracking-tighter font-headline">
          Kinetic Gallery
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`font-headline font-bold tracking-tight pb-1 transition-colors duration-300 ${location.pathname === '/' ? 'text-[#1B263B] dark:text-white border-b-2 border-[#1B263B] dark:border-white' : 'text-slate-500 dark:text-slate-400 hover:text-[#1B263B] dark:hover:text-white'}`}>Home</Link>
          <Link to="/fleet" className={`font-headline font-bold tracking-tight pb-1 transition-colors duration-300 ${location.pathname === '/fleet' ? 'text-[#1B263B] dark:text-white border-b-2 border-[#1B263B] dark:border-white' : 'text-slate-500 dark:text-slate-400 hover:text-[#1B263B] dark:hover:text-white'}`}>Vehicles</Link>
          <Link to="/admin" className={`font-headline font-bold tracking-tight pb-1 transition-colors duration-300 ${isAdmin ? 'text-[#1B263B] dark:text-white border-b-2 border-[#1B263B] dark:border-white' : 'text-slate-500 dark:text-slate-400 hover:text-[#1B263B] dark:hover:text-white'}`}>Admin</Link>
        </div>
        {!isAdmin && (
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/15">
              <span className="material-symbols-outlined text-slate-500 text-xl">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-32 font-medium" placeholder="Search fleet..." type="text" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
