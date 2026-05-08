export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-2">Fleet Inventory</h1>
          <p className="text-on-surface-variant font-medium">Curating 24 high-performance machines for excellence.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-on-primary-container text-on-primary rounded-full font-bold shadow-lg active:scale-95 transition-transform">
          <span className="material-symbols-outlined">add</span>
          Add New Vehicle
        </button>
      </div>
      
      {/* Dashboard Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Fleet Grid Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Vehicle Item 1 */}
          <div className="group relative bg-surface-container-lowest rounded-full p-2 flex items-center gap-6 hover:bg-surface-container-high transition-all duration-300">
            <div className="w-32 h-20 rounded-full overflow-hidden bg-surface-dim shrink-0">
              <img className="w-full h-full object-cover" data-alt="Side profile of a sleek charcoal grey electric sports sedan parked against a minimalist concrete wall with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEYgH4dW6gB2gLzFQV4kr-ULGOjyE8nR_KRiNMUaTnF_0XjaOaIxJeMbvyperBVk7AnxLHEI7L-wgyKpdSleQsomlV91gPa59TDqE6NyJlYB_QHWbJSM21RzAVAc65izbC5y8rVEsxmX2Irivbk2rsgZZbLYmcrJPWoP-fIqXy8ZYtw2igq6gJp4RSH20SkQzbG8-FMp3IpvwMBMyrIa1WQSY9Ce1PJwsMQlgnlwOyHcDoLN8w3GI1MNzZyZwz1YgDVIpuzwexybE"/>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-primary">Zephyr S-Class</h3>
              <div className="flex gap-4 text-xs text-on-surface-variant font-semibold">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">settings</span> Automatic</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">local_gas_station</span> Electric</span>
              </div>
            </div>
            <div className="text-right px-4">
              <p className="text-sm font-black text-on-tertiary-container">$240/day</p>
              <div className="flex gap-2 mt-1">
                <button className="p-2 hover:bg-primary-fixed rounded-full text-primary transition-colors material-symbols-outlined text-sm">edit</button>
                <button className="p-2 hover:bg-error-container rounded-full text-error transition-colors material-symbols-outlined text-sm">delete</button>
              </div>
            </div>
          </div>
          
          {/* Vehicle Item 2 */}
          <div className="group relative bg-surface-container-lowest rounded-full p-2 flex items-center gap-6 hover:bg-surface-container-high transition-all duration-300">
            <div className="w-32 h-20 rounded-full overflow-hidden bg-surface-dim shrink-0">
              <img className="w-full h-full object-cover" data-alt="Front three-quarter view of a luxury SUV in pearl white finish in a brightly lit studio setting with deep shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm1Fz6zJFCD9QdQmFOUrX6TFpjbbS1BPVSLPVRSYdaHLuhikYa7MuMpJrEkUmqNLw9lbXuI2wt2E07BcscK1IRM7g5gr-oBnYfUSuMTPIquJsWMFMy74p2K5AdgdvU9nRHCFMOAcYZSH5r7KIhpPeEdrINM-Fa2BesptiqLuVxSvli1HbCq3xmGL4JTDH-A_W8Jw1ObUuQO570Ylj1nhlRaJXkgPKAofOzmhgJ_r0Ijd6KbYJxujlRoWQZWRHrp_C0Up-QgGQgxGg"/>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-primary">Titan GT Explorer</h3>
              <div className="flex gap-4 text-xs text-on-surface-variant font-semibold">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">person</span> 7 Seats</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">ac_unit</span> Climate Control</span>
              </div>
            </div>
            <div className="text-right px-4">
              <p className="text-sm font-black text-on-tertiary-container">$185/day</p>
              <div className="flex gap-2 mt-1">
                <button className="p-2 hover:bg-primary-fixed rounded-full text-primary transition-colors material-symbols-outlined text-sm">edit</button>
                <button className="p-2 hover:bg-error-container rounded-full text-error transition-colors material-symbols-outlined text-sm">delete</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* WhatsApp Inquiries Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-surface-container-low rounded-3xl p-8 sticky top-28 border-t-4 border-on-tertiary-container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-black text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-on-tertiary-container" style={{fontVariationSettings: "'FILL' 1"}}>chat_bubble</span>
                Inquiries
              </h2>
              <span className="bg-on-tertiary-container text-white text-[10px] px-2 py-1 rounded-full font-bold">4 NEW</span>
            </div>
            <div className="space-y-4">
              {/* Inquiry 1 */}
              <div className="bg-surface-container-lowest p-5 rounded-3xl hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-primary text-sm">Marcus Chen</span>
                  <span className="text-[10px] text-on-surface-variant font-bold">12:45 PM</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed mb-3">Interested in Apex V8 for the upcoming weekend. Is insurance included?</p>
                <div className="flex justify-end">
                  <button className="text-[10px] uppercase tracking-wider font-extrabold text-on-tertiary-container flex items-center gap-1">
                    Reply on WhatsApp <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </button>
                </div>
              </div>
              {/* Inquiry 2 */}
              <div className="bg-surface-container-lowest p-5 rounded-3xl hover:shadow-md transition-shadow cursor-pointer border-l-4 border-on-tertiary-container">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-primary text-sm">Elena Rodriguez</span>
                  <span className="text-[10px] text-on-surface-variant font-bold">10:20 AM</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed mb-3">Booking request for Titan GT Explorer. Group of 6, heading to the valley.</p>
                <div className="flex justify-end">
                  <button className="text-[10px] uppercase tracking-wider font-extrabold text-on-tertiary-container flex items-center gap-1">
                    Reply on WhatsApp <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
