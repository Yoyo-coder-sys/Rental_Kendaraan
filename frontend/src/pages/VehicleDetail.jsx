import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function VehicleDetail() {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    pickUp: '',
    returnDate: ''
  });

  const handleWhatsAppBooking = () => {
    // Generate Pre-filled Message
    const text = `Halo, saya ingin booking mobil:
Nama: ${formData.fullName}
Kendaraan: Vanguard Drive XE
Tanggal Pick Up: ${formData.pickUp}
Tanggal Return: ${formData.returnDate}`;
    
    // Replace with the actual Admin WhatsApp number
    const adminWA = '6281234567890';
    const url = `https://wa.me/${adminWA}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="pb-20 max-w-7xl mx-auto px-8 w-full flex-grow">
      <div className="mb-8 mt-8">
        <Link to="/fleet" className="flex items-center text-secondary hover:text-primary transition-colors group">
          <span className="material-symbols-outlined mr-2 transition-transform group-hover:-translate-x-1">arrow_back</span>
          <span className="font-medium">Back to Fleet</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Gallery & Info Column */}
        <div className="lg:col-span-8 space-y-12">
          {/* Hero Gallery Asymmetric Layout */}
          <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px]">
            <div className="col-span-3 row-span-2 overflow-hidden rounded-full">
              <img className="w-full h-full object-cover" data-alt="sleek modern charcoal grey sports sedan parked on a clean concrete surface in a minimalist architectural studio with soft daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwgwnoulvTdkpQLVFqckAB0NuTcC3hWqMKwZoiq1As2YAw2XymxIfNESuYNMYnC7Kuk_erdS3QdjpcL0xTmVXSiVy6kujdF-8aN1rnxLNskXkcC17m_dVG4Z7a-SRGo2_G2iA8kpvZGfBMFw5bhjzeK_zAM4FRic3mnIlg21h_hd-pqiP8J_sTYoOazx5aW5sqPRmFPedQRzDD1h5rxH5J7NNsxjQy3-I2_4BLeCjQHUI8tNBMAq2RLK2wnEKRtXyVQ2bVRSabvgg"/>
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden rounded-full">
              <img className="w-full h-full object-cover" data-alt="close up profile of a premium vehicle's alloy wheel and sleek body lines in high end cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSlLIY0ZJ90iNOgA_gwxYAIpiZfYxlX8AcizdRZmvkP-Hk32he1EL7EqhUQ8TXd0dArIKNiXCZiwNZrYPFCbcRlm_C74K03Wqo_6M3iPul-elKsxk1uybZQAQyFaHXHJ4BzemKBV1-WUdRTnFRySNjw3_x_026ui8aG858pkL5gz9vF1xNy-DjuYb4_rVGjBSLisgajKHQB_46XAKLAv5Y5qX1I93LvCSaxJjhatqAavpDD0lz3m_MD422nEE7XR7am3Ls3hNvII0"/>
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden rounded-full relative group">
              <img className="w-full h-full object-cover" data-alt="luxurious car interior with premium leather seats and high tech dashboard illuminated by soft ambient blue light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7sROxbZ70OHWRIk5Iwm04R5Sc1tsjmVa2oA3VCb6yUltUsUc3ZizojtYGe80ZHYGWxyY_6r9RQ7FG8J6IAXPg-7lCNGGVjfj9v9XfQ8JlRijYaRvqHqeP0egYkbblIdOulBd1hoQ-cKfFJiMNMzcAN0x1wM03Yp5a0yeAw-IVEWx93OD9vgBCwK2LkmhrhT_KFoK4lioLbWl6F_lyClcELEPXB5P0SsUouxlxMW2qqYeApS5LC78DE6EH7xKmwrImtNayljeo1i0"/>
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-white font-bold">+12 Photos</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div>
              <span className="text-on-primary-container font-semibold tracking-widest uppercase text-xs mb-2 block">Premium Performance</span>
              <h1 className="text-5xl font-extrabold tracking-tight text-primary">Vanguard Drive XE</h1>
              <p className="text-secondary mt-2 flex items-center">
                <span className="material-symbols-outlined text-sm mr-1">location_on</span>
                Available at Vanguard Drive Main Hub
              </p>
            </div>
            <div className="text-right">
              <span className="block text-secondary text-sm font-medium">Starting from</span>
              <div className="flex items-baseline justify-end gap-1">
                <span className="text-4xl font-black text-primary">$189</span>
                <span className="text-secondary font-label">/ day</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-surface-container-low p-6 rounded-full flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-on-primary-container mb-2">local_gas_station</span>
              <span className="text-xs text-secondary font-medium uppercase tracking-wider">Fuel</span>
              <span className="text-primary font-bold">Hybrid / 5.2L</span>
            </div>
            <div className="bg-surface-container-low p-6 rounded-full flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-on-primary-container mb-2">airline_seat_recline_extra</span>
              <span className="text-xs text-secondary font-medium uppercase tracking-wider">Seats</span>
              <span className="text-primary font-bold">5 Adults</span>
            </div>
            <div className="bg-surface-container-low p-6 rounded-full flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-on-primary-container mb-2">settings_input_component</span>
              <span className="text-xs text-secondary font-medium uppercase tracking-wider">Transmission</span>
              <span className="text-primary font-bold">Automatic</span>
            </div>
            <div className="bg-surface-container-low p-6 rounded-full flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-on-primary-container mb-2">speed</span>
              <span className="text-xs text-secondary font-medium uppercase tracking-wider">Top Speed</span>
              <span className="text-primary font-bold">240 km/h</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Vehicle Overview</h2>
            <p className="text-on-surface-variant leading-relaxed max-w-2xl">
              The Vanguard Drive XE represents the pinnacle of modern fleet excellence. Designed for those who demand performance without compromising on comfort, this hybrid masterpiece features adaptive cruise control, a panoramic sunroof, and a premium surround sound system. Whether it's a corporate commute or a weekend getaway, the XE delivers authoritative fluidity on every road.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-surface-container-lowest rounded-full p-8 shadow-sm border-0">
            <h3 className="text-xl font-bold text-primary mb-6">Reserve This Vehicle</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-xs font-bold text-secondary uppercase tracking-tighter px-1">Full Name</label>
                <input value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="w-full bg-surface-container-high border-none rounded-xl p-4 focus:ring-2 focus:ring-on-primary-container transition-all placeholder:text-outline" placeholder="John Doe" type="text"/>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-secondary uppercase tracking-tighter px-1">WhatsApp Number</label>
                <div className="relative">
                  <input value={formData.whatsappNumber} onChange={e => setFormData({...formData, whatsappNumber: e.target.value})} className="w-full bg-surface-container-high border-none rounded-xl p-4 focus:ring-2 focus:ring-on-primary-container transition-all placeholder:text-outline" placeholder="+1 234 567 890" type="tel"/>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#25D366]">chat</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-secondary uppercase tracking-tighter px-1">Pick Up</label>
                  <input value={formData.pickUp} onChange={e => setFormData({...formData, pickUp: e.target.value})} className="w-full bg-surface-container-high border-none rounded-xl p-4 focus:ring-2 focus:ring-on-primary-container transition-all text-sm" type="date"/>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-secondary uppercase tracking-tighter px-1">Return</label>
                  <input value={formData.returnDate} onChange={e => setFormData({...formData, returnDate: e.target.value})} className="w-full bg-surface-container-high border-none rounded-xl p-4 focus:ring-2 focus:ring-on-primary-container transition-all text-sm" type="date"/>
                </div>
              </div>
              <div className="bg-surface-container p-4 rounded-xl space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Rental (3 days)</span>
                  <span className="text-primary font-bold">$567.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Insurance</span>
                  <span className="text-primary font-bold">$45.00</span>
                </div>
                <div className="pt-2 border-t border-outline-variant/30 flex justify-between items-center">
                  <span className="font-bold text-primary">Total Est.</span>
                  <span className="text-xl font-black text-primary">$612.00</span>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-primary to-on-primary-container text-white font-bold py-4 rounded-xl active:scale-95 transition-all shadow-md">
                  Confirm Reservation
                </button>
                <button onClick={handleWhatsAppBooking} className="w-full bg-on-tertiary-container text-white font-bold py-4 rounded-xl active:scale-95 transition-all flex items-center justify-center gap-2" type="button">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>chat</span>
                  Booking via WhatsApp
                </button>
              </div>
              <p className="text-[10px] text-center text-secondary uppercase tracking-widest">
                No immediate payment required
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
