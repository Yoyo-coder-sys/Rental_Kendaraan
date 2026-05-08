import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <main className="pt-0">
        <section className="relative h-[870px] flex items-center overflow-hidden bg-surface mt-[-80px]">
            <div className="absolute inset-0 z-0">
                <img alt="" className="w-full h-full object-cover" data-alt="sleek modern black sports car parked on a coastal road at twilight with deep blue sky and city lights in distance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI6UXLq_aRix9cFWqcJeOtvgDJ-edb1rGApTnEWiXaXxye3zlG0KGrjorOyK50mYPxc-F_7xKVRD5NQkursybzHk98y25t9sO90Gby4SE__1JX2K_f5RzE5Z2KTbZMIEkjWbXsHk_Tuu7zOYRv_GXhX9tnOfWKc29xyYzb7pHlb6I2cUdqzjnrCPmlwc9DNWBIsRwj5xK9GPY9xvmgIVq7BqME_yUXpa9dutfit_h0UlgA9qsEojW5Prk0hkArYbw3SG3JJwclSTs"/>
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-20">
                <div className="max-w-2xl">
                    <h1 className="font-headline text-display-lg text-[4rem] leading-[1.1] font-extrabold tracking-tighter text-primary mb-6">
                        The Art of <br/><span className="text-on-primary-container">Velocity.</span>
                    </h1>
                    <p className="text-xl text-secondary mb-10 max-w-lg leading-relaxed">
                        Curated fleet excellence. Experience the world's most sophisticated vehicles through our bespoke rental gallery.
                    </p>
                    <div className="flex gap-4">
                        <Link to="/fleet" className="editorial-gradient text-on-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-primary/20 transition-all active:scale-95 text-center flex items-center justify-center">
                            Rent Now
                        </Link>
                        <Link to="/fleet" className="bg-surface-container-high text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-highest transition-colors flex items-center justify-center">
                            View Gallery
                        </Link>
                    </div>
                </div>
            </div>
            {/* Floating Search Tray */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-8 z-20">
                <div className="bg-surface-container-highest/60 backdrop-blur-3xl rounded-full p-2 flex flex-col md:flex-row items-center gap-2 shadow-2xl">
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
                        <div className="bg-surface-container-lowest rounded-full px-6 py-3 flex flex-col">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Location</span>
                            <input className="bg-transparent border-none p-0 focus:ring-0 font-semibold text-primary" placeholder="Where to?" type="text"/>
                        </div>
                        <div className="bg-surface-container-lowest rounded-full px-6 py-3 flex flex-col">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Pickup Date</span>
                            <input className="bg-transparent border-none p-0 focus:ring-0 font-semibold text-primary" placeholder="Select date" type="text"/>
                        </div>
                        <div className="bg-surface-container-lowest rounded-full px-6 py-3 flex flex-col">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Vehicle Type</span>
                            <select className="bg-transparent border-none p-0 focus:ring-0 font-semibold text-primary appearance-none w-full">
                                <option>All Categories</option>
                                <option>Sport Luxury</option>
                                <option>Executive SUV</option>
                                <option>Electric Fleet</option>
                            </select>
                        </div>
                    </div>
                    <Link to="/fleet" className="bg-on-tertiary-container text-white w-full md:w-auto px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">explore</span>
                        Search
                    </Link>
                </div>
            </div>
        </section>

        {/* Featured Vehicles Section */}
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="font-headline text-4xl font-extrabold tracking-tight text-primary">Featured Selection</h2>
                        <p className="text-secondary mt-2">Curated for performance and presence.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Minimal Vehicle Card 1 */}
                    <Link to="/fleet/1" className="group cursor-pointer">
                        <div className="aspect-video rounded-3xl overflow-hidden mb-4 bg-surface-dim">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="front view of a black executive sedan in a heavy rain with bright headlights on" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHPxGd_IpKweg9m5azXbQ5I0dO5vA0kQsc5ayRX1UE7X5Hy1VdeVEhNY2_26psIrYEkXug3hlTdU9xj8igL-oFCNB4STceM6w6fTnMJjtbIgKyyY3VdqlW34MeOnDxmoUbRyoS_ML6hCKTrvWTflAaB65JK-TWl74PpuDcE86EYhJiA8UNCb97wJPTizbdBbKPMO7QFM4yLNLw3lqWvvtc4CYw9u97cZQkSzanTjs42dmiBodDed_qJa4c2oTX6tiGFMwR8eGF-Ns"/>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-bold text-primary text-lg">Apex Executive</h4>
                                <p className="text-secondary text-sm">Diesel • 5 Seats</p>
                            </div>
                            <span className="font-black text-primary">$175/d</span>
                        </div>
                    </Link>
                    {/* Minimal Vehicle Card 2 */}
                    <Link to="/fleet/2" className="group cursor-pointer">
                        <div className="aspect-video rounded-3xl overflow-hidden mb-4 bg-surface-dim">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="side view of a white electric luxury suv driving on a winding coastal road at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyEr_nEbGvSM1YBbhhps9PTHq46Jz0xS-vkmCzMaP1pe8OZr9yTsAYlWKDS5wZSE-HPsWeqVt3_jVOOLQPMHi72s06StccL0g7HXUNOJjiCFZr2I6rgS8IaWDpEsnqjeETBs6TDh2WxzEs6bGtDtYi4m-8vE2MjFOGqQGZTs-CzWzQVtybyAZK2MtoniwfulWIX7ZURBwMBi-Hu31iSwMXzRDN2LcUEc7dkP-nTNm7X9YwO9IIWi4IRa_4zZNhd7iSl1iBAJTYmAY"/>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-bold text-primary text-lg">Luminary GT</h4>
                                <p className="text-secondary text-sm">Electric • 5 Seats</p>
                            </div>
                            <span className="font-black text-primary">$210/d</span>
                        </div>
                    </Link>
                    {/* Minimal Vehicle Card 3 */}
                    <Link to="/fleet/3" className="group cursor-pointer">
                        <div className="aspect-video rounded-3xl overflow-hidden mb-4 bg-surface-dim">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="luxury blue convertible sports car on a modern bridge during the blue hour with city lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkylZCN5R3h1Rgb4QnAcsJO7RwkX8ca3htp3NYOHTn_VrKHfzx7AqltIWsK2LfwJa0gQNC734ysb0sevJub2e72Y2IbjAOosKruQSNir1xSU6ojgpvM1NxU4OV5nzo8DkzGhr0VbKwhfTMoJRuo5_dDa-08qv9bn2L0-_8_agmeXaonu1eRfxhD4PG2y4In_JIu7LaCwOhYFnsOeZRPPLvscBIIB4agHXslVHVfdgC2LiPeRzHSf73d5HYjkoWI_RuAr9mk4YR63c"/>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-bold text-primary text-lg">Zenith Roadster</h4>
                                <p className="text-secondary text-sm">Petrol • 2 Seats</p>
                            </div>
                            <span className="font-black text-primary">$290/d</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    </main>
  );
}
