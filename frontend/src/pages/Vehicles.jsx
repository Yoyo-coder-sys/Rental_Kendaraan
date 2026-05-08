import React from 'react';
import { Link } from 'react-router-dom';

export default function Vehicles() {
  return (
    <main className="pt-28 pb-20 max-w-7xl mx-auto px-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-3 space-y-10">
          <div>
            <h1 className="text-4xl font-headline font-extrabold tracking-tighter mb-2">Vanguard Drive</h1>
            <p className="text-on-surface-variant text-sm font-medium opacity-60">Curation of Exceptional Engineering.</p>
          </div>
          
          <div className="space-y-8">
            {/* Type Filter */}
            <section>
              <h3 className="text-label font-bold text-xs uppercase tracking-widest text-outline mb-4">Vehicle Type</h3>
              <div className="flex flex-wrap gap-2">
                <button className="px-5 py-2 rounded-full bg-primary text-on-primary text-sm font-semibold transition-all">Mobil</button>
                <button className="px-5 py-2 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold hover:bg-surface-container-highest transition-all">Motor</button>
                <button className="px-5 py-2 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold hover:bg-surface-container-highest transition-all">Electric</button>
              </div>
            </section>
            
            {/* Price Range */}
            <section>
              <h3 className="text-label font-bold text-xs uppercase tracking-widest text-outline mb-4">Price Range (Daily)</h3>
              <div className="space-y-4">
                <input className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-on-primary-container" type="range" />
                <div className="flex justify-between text-sm font-bold font-headline">
                  <span>$50</span>
                  <span>$1,500+</span>
                </div>
              </div>
            </section>
            
            {/* Quick Search */}
            <section className="lg:hidden">
              <h3 className="text-label font-bold text-xs uppercase tracking-widest text-outline mb-4">Search</h3>
              <div className="relative">
                <input className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-4 pr-12 focus:ring-2 focus:ring-on-primary-container transition-all" placeholder="Model or brand..." type="text" />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              </div>
            </section>
          </div>
        </aside>

        {/* Vehicle Listing Grid */}
        <div className="lg:col-span-9">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-2xl font-headline font-extrabold tracking-tight">Available Fleet <span className="text-on-primary-container ml-2 text-lg font-medium">(24)</span></h2>
            <div className="flex items-center gap-2 text-sm font-bold text-outline">
              <span>Sort by:</span>
              <select className="bg-transparent border-none focus:ring-0 text-on-background font-bold p-0 cursor-pointer">
                <option>Premium First</option>
                <option>Price Low-High</option>
                <option>Performance</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            
            {/* Vehicle Card 1 */}
            <div className="group">
              <div className="relative aspect-[16/9] bg-surface-dim rounded-xl overflow-hidden editorial-shadow mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="luxury charcoal grey sports car" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ2vcFl0Jy-iV7Mm-tHx_QM8BzwJDaAC1E7S92gPB_rXpd1mPuGN33_oG3E3vERLnuepYjyR4HVEdwALIrS6giw-eftbeQ8R3g-Uf3vk8jtgb0i-9Jc_RiX3TMXfqAg0QNjVdrN_3LQ0iQ-7rLJ5bQiD9xWtXJryseeaAMkIsE3LKJezM-pbXHbm4fGz0vlZDEex4-rXRu0jNkpy-Eo2oFtP3XWWjCqbC50csdpzoVQTg7tLCtP7Nrbni1NXI6qWHl6f8VWoYVC3s" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary">Limited Edition</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-headline font-extrabold tracking-tight group-hover:text-on-primary-container transition-colors">Vanguard S-Alpha</h3>
                  <p className="text-label-md text-on-surface-variant opacity-60 font-medium">6.0L V12 • Automatic • All-Wheel Drive</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-headline font-extrabold tracking-tighter">$850</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline">Per Day</p>
                </div>
              </div>
              <Link to="/fleet/vanguard-s-alpha" className="block text-center mt-6 w-full cta-gradient text-white py-4 rounded-xl font-headline font-extrabold tracking-tight active:scale-[0.98] transition-all">View Details</Link>
            </div>

            {/* Vehicle Card 2 */}
            <div className="group">
              <div className="relative aspect-[16/9] bg-surface-dim rounded-xl overflow-hidden editorial-shadow mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="sleek modern black sedan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDda07jNr0vs6becfnteKONLya-1x51qoZZ959jyADvXKCpAoOvSZElnxCRmqLlEnjGPZuSRpRd8rp1pcNW4cHKobAg3aHyipMdkGRvAKqbEfU9slv9EF3osE_NWpR3Mw0fXhgsD4uXiObqLXQaUqGE9vgeGhbPC_E21S8O-K89iYZEuVmUA4HILpnSmzovPrc8AT6OYrz7vrqphTbr7W-O5OXC7Dn_EsObC049AeikhS1Tq3bnKKUh3h4K2duHQWPCKm3sOxlHN9k" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-headline font-extrabold tracking-tight group-hover:text-on-primary-container transition-colors">Executive M-Series</h3>
                  <p className="text-label-md text-on-surface-variant opacity-60 font-medium">Hybrid • Smart Assist • Pure Comfort</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-headline font-extrabold tracking-tighter">$420</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline">Per Day</p>
                </div>
              </div>
              <Link to="/fleet/executive-m-series" className="block text-center mt-6 w-full bg-surface-container-high text-on-primary-fixed-variant py-4 rounded-xl font-headline font-extrabold tracking-tight hover:bg-surface-container-highest active:scale-[0.98] transition-all">View Details</Link>
            </div>

            {/* Vehicle Card 3 */}
            <div className="group">
              <div className="relative aspect-[16/9] bg-surface-dim rounded-xl overflow-hidden editorial-shadow mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="high performance orange sport motorcycle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvmKhXS7Ojg0bDSqXymRnL-KjS4iAoLel-trtSsw4e2Nps77W3J_bMKPjPtbNH3NBQvc_tbj8aLzkcM3Ea1EWquFH_xD8Wa3di5YCPCXK72bUMOGtolu5iH85Y97Ot3e1swUppe7o15pS-RU7LrwRe-P6hjYXjwGPv9sTcpgOAp_bz1qBiHTSwAThFRrHMGnGYQOj5vjNQ8GDLQFOWnmr9kVksWzeLpLf64XuE48XIU3UrBUYG94V_vzQqrXij6s4nYwLe8mk60_0" />
                <div className="absolute top-4 left-4">
                  <span className="bg-on-tertiary-container text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Motor</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-headline font-extrabold tracking-tight group-hover:text-on-primary-container transition-colors">Ignition X-1000</h3>
                  <p className="text-label-md text-on-surface-variant opacity-60 font-medium">998cc • Manual 6-Speed • Sport</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-headline font-extrabold tracking-tighter">$180</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline">Per Day</p>
                </div>
              </div>
              <Link to="/fleet/ignition-x-1000" className="block text-center mt-6 w-full bg-surface-container-high text-on-primary-fixed-variant py-4 rounded-xl font-headline font-extrabold tracking-tight hover:bg-surface-container-highest active:scale-[0.98] transition-all">View Details</Link>
            </div>

            {/* Vehicle Card 4 */}
            <div className="group">
              <div className="relative aspect-[16/9] bg-surface-dim rounded-xl overflow-hidden editorial-shadow mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="large white premium SUV" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhj3OZyX0lMM6ngRnjS-5JpBNgUzaFjy5zWrq1v-IxaYcw-juO3GhpdB7WU87PIbJjfkX679ANvOi-WNSgQBGNI-URfwEzDkE9_RI3f7UklH3bQyw3CSCNxCRmXPO8KSxB0fUc83nMeAfCWHM1u0CflPQ9eaDN7Qd29ciH7Idk6pBjgYAXS4LQpzW5pN-ezNg2ZPsB1v2MnMNHiQodYsbin07XjX14_fHriKtLR_Hj7j2V6jZ1Kvu7EYgOjDZcx3DCpIRMZlVXlf8" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-headline font-extrabold tracking-tight group-hover:text-on-primary-container transition-colors">Horizon Explorer</h3>
                  <p className="text-label-md text-on-surface-variant opacity-60 font-medium">V8 Turbo • 7-Seater • Panoramic Roof</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-headline font-extrabold tracking-tighter">$550</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline">Per Day</p>
                </div>
              </div>
              <Link to="/fleet/horizon-explorer" className="block text-center mt-6 w-full bg-surface-container-high text-on-primary-fixed-variant py-4 rounded-xl font-headline font-extrabold tracking-tight hover:bg-surface-container-highest active:scale-[0.98] transition-all">View Details</Link>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
