'use client';

import { useState } from 'react';

const STORES = [
  {
    id: 'pusat',
    name: 'MORE Coffee & Space',
    address: 'Jl. Otto Iskandardinata No.115, RT.41/RW.11, Karanganyar, Kec. Subang, Kabupaten Subang, Jawa Barat 41211',
    hours: [
      { day: 'Senin - Jumat', time: '08.00 – 23.00' },
      { day: 'Sabtu - Minggu', time: '07.00 – 23.00' }
    ],
    mapLink: 'https://www.google.com/search?kgmid=%2Fg%2F11rstf9pcx&hl=id-ID&q=MOR%C3%88%20Coffee%20%26%20Space',
    mapEmbed: 'https://maps.google.com/maps?q=MORE+Coffee+%26+Space+Subang&t=&z=15&ie=UTF8&iwloc=&output=embed',
    image: '/Store/More-Coffee&Space/Snapinst.app_364950577_302198265666943_7166196452798755348_n_1080.jpg',
    thumbnail: '/Store/More-Coffee&Space/Snapinst.app_364950577_302198265666943_7166196452798755348_n_1080.jpg',
  },
  {
    id: 'curug-goong',
    name: 'MORE Coffee X Curug Goong',
    address: 'Curug Goong, Dayeuhkolot, Kec. Sagalaherang, Kabupaten Subang, Jawa Barat 41282',
    hours: [
      { day: 'Senin - Jumat', time: '09.00 – 18.00' },
      { day: 'Sabtu - Minggu', time: '07.00 – 20.00' }
    ],
    mapLink: 'https://share.google/E0ZBtiYS6WV9ECGAJ',
    mapEmbed: 'https://maps.google.com/maps?q=Curug+Goong+Sagalaherang+Subang&t=&z=15&ie=UTF8&iwloc=&output=embed',
    image: '/Store/More-CoffeeXCurugGoong/Snapinst.app_449289701_494310276443973_919945982624711639_n_1080.jpg',
    thumbnail: '/Store/More-CoffeeXCurugGoong/Snapinst.app_449289701_494310276443973_919945982624711639_n_1080.jpg',
  },
  {
    id: 'purwakarta',
    name: 'MORÉ Coffee Purwakarta',
    address: 'Purwakarta, Jawa Barat',
    hours: [
      { day: 'Senin - Minggu', time: '08.00 – 22.00' }
    ],
    mapLink: 'https://maps.google.com/?q=Purwakarta',
    mapEmbed: 'https://maps.google.com/maps?q=Purwakarta&t=&z=15&ie=UTF8&iwloc=&output=embed',
    image: '/Store/More-CoffeePWK/More-PWK',
    thumbnail: '/Store/More-CoffeePWK/More-PWK',
  }
];

export default function StorePage() {
  const [activeStore, setActiveStore] = useState(STORES[0]);

  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-store relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#111]">
        {/* Background image placeholder */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://placehold.co/1920x1080/111111/444444?text=MORE+Store+Hero" 
            alt="Store Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 text-center mt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-4 leading-none" style={{ fontFamily: 'Onest, Arial, sans-serif' }}>
            OUR STORES
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Find your taste in a cozy atmosphere at our locations.
          </p>
        </div>
      </section>

      {/* Interactive Store Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 bg-white">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-[#FF5A2E] opacity-5 rounded-bl-full pointer-events-none"></div>
        
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left Column: Store List */}
            <div className="w-full lg:w-[35%] flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-black text-[#111] uppercase tracking-tight mb-2 md:mb-4" style={{ fontFamily: 'Onest, Arial, sans-serif' }}>
                SELECT LOCATION
              </h2>
              
              <div className="flex flex-col gap-4">
                {STORES.map((store) => (
                  <button 
                    key={store.id}
                    onClick={() => setActiveStore(store)}
                    className={`flex items-center gap-4 p-4 rounded-[20px] transition-all duration-300 text-left border-2 group
                      ${activeStore.id === store.id 
                        ? 'border-[#FF5A2E] bg-[#FF5A2E]/5 shadow-sm lg:scale-[1.02]' 
                        : 'border-transparent bg-[#F7F7F7] hover:bg-[#E8E8E8] lg:hover:scale-[1.01]'}`}
                  >
                    <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden relative bg-gray-200">
                      <img src={store.thumbnail} alt={store.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-bold text-lg md:text-xl mb-1 truncate ${activeStore.id === store.id ? 'text-[#FF5A2E]' : 'text-[#111] group-hover:text-[#FF5A2E] transition-colors'}`}>
                        {store.name}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                        {store.address}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right Column: Store Details */}
            <div className="w-full lg:w-[65%]">
              <div className="bg-[#F7F7F7] rounded-[30px] md:rounded-[40px] p-6 md:p-10 transition-all duration-500 relative overflow-hidden h-full border border-gray-100">
                {/* Decorative circle */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF5A2E] rounded-full opacity-10 blur-3xl pointer-events-none"></div>

                {/* Big Image */}
                <div className="w-full h-[250px] md:h-[400px] rounded-[24px] md:rounded-[30px] overflow-hidden mb-8 shadow-sm bg-gray-200">
                  <img src={activeStore.image} alt={activeStore.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex flex-col xl:flex-row gap-8 justify-between">
                  <div className="flex-1 w-full">
                    <h2 className="text-3xl md:text-4xl font-black text-[#111] mb-6 uppercase tracking-tight leading-tight" style={{ fontFamily: 'Onest, Arial, sans-serif' }}>
                      {activeStore.name}
                    </h2>
                    
                    <div className="flex flex-col gap-6">
                      {/* Address */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#FF5A2E]/10 flex items-center justify-center shrink-0 mt-1">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF5A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#111] mb-1 text-lg">Address</h4>
                          <p className="text-gray-600 leading-relaxed text-base max-w-md">
                            {activeStore.address}
                          </p>
                        </div>
                      </div>
                      
                      {/* Hours */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#FF5A2E]/10 flex items-center justify-center shrink-0 mt-1">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF5A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                        <div className="w-full">
                          <h4 className="font-bold text-[#111] mb-2 text-lg">Operational Hours</h4>
                          <div className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100 max-w-md">
                            {activeStore.hours.map((h, i) => (
                              <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0 last:pb-0">
                                <span className="text-gray-600 font-medium">{h.day}</span>
                                <span className="font-bold text-[#111]">{h.time}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Map and CTA */}
                  <div className="flex-1 flex flex-col gap-6 w-full mt-6 xl:mt-0">
                    <div className="w-full h-[250px] md:h-[300px] xl:h-full min-h-[250px] rounded-[24px] overflow-hidden shadow-sm border border-gray-200 bg-gray-100">
                      <iframe 
                        src={activeStore.mapEmbed} 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map to ${activeStore.name}`}
                      ></iframe>
                    </div>
                    
                    <a 
                      href={activeStore.mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center !bg-[#FF5A2E] !text-white px-8 py-4 rounded-full font-bold text-lg hover:!bg-[#D9330B] transition-colors shadow-sm hover:shadow border border-[#FF5A2E] w-full text-center group whitespace-nowrap"
                    >
                      Get Direction
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
