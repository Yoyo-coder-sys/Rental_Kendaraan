import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-12 mt-auto bg-slate-50 dark:bg-slate-950">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-8 font-['Inter'] text-sm">
        <div className="col-span-1">
          <div className="font-['Manrope'] font-black text-lg text-[#1B263B] dark:text-white mb-4">Kinetic Gallery</div>
          <p className="text-slate-500 dark:text-slate-400">© 2024 Kinetic Gallery. Editorial Fleet Excellence. Redefining the vehicle rental experience through curated aesthetics.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#1B263B] dark:text-white mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            <Link to="#" className="text-slate-500 dark:text-slate-400 hover:text-[#5b86ff] transition-colors">Fleet Support</Link>
            <Link to="#" className="text-slate-500 dark:text-slate-400 hover:text-[#5b86ff] transition-colors">Terms of Service</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-bold text-[#1B263B] dark:text-white mb-4">Operations</h4>
          <nav className="flex flex-col gap-2">
            <Link to="#" className="text-slate-500 dark:text-slate-400 hover:text-[#5b86ff] transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-slate-500 dark:text-slate-400 hover:text-[#5b86ff] transition-colors">Contact</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-bold text-[#1B263B] dark:text-white mb-4">System Status</h4>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            All nodes operational
          </div>
        </div>
      </div>
    </footer>
  );
}
