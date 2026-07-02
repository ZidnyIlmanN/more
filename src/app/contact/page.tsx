'use client';

export default function ContactPage() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-contact relative w-full min-h-[40vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#111]">
        {/* Background image placeholder */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e4e468aefc31c8be7_Snapinst.app_465822484_533668059528495_5675566419599041408_n_1080.jpg" 
            alt="Contact Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 text-center mt-10 md:mt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-4 leading-none" style={{ fontFamily: 'Onest, Arial, sans-serif' }}>
            CONTACT MORE
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Reach out to us. We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 bg-[#FF5A2E]">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
            
            {/* Contact Info (Left) */}
            <div className="w-full lg:w-5/12 flex flex-col gap-8 text-white">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 leading-tight" style={{ fontFamily: 'Onest, Arial, sans-serif' }}>
                  TALK WITH<br />MORE
                </h2>
                <p className="text-white/90 text-lg max-w-md">
                  Have a question, feedback, or just want to say hi? Drop us a message, or contact us through our channels.
                </p>
              </div>

              <div className="flex flex-col gap-6 mt-4">
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">WhatsApp</h4>
                    <p className="text-white/80">+62 812-3456-7890</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Email</h4>
                    <p className="text-white/80">hello@morecoffee.id</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Instagram</h4>
                    <p className="text-white/80">@morecoffee.id</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Address</h4>
                    <p className="text-white/80 leading-relaxed max-w-sm">
                      Jl. Otto Iskandardinata No.115, Karanganyar, Kec. Subang, Kabupaten Subang, Jawa Barat 41211
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form (Right) */}
            <div className="w-full lg:w-7/12">
              <div className="bg-white rounded-[32px] md:rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#F7F7F7] rounded-full opacity-50 blur-3xl pointer-events-none"></div>

                <h3 className="text-3xl md:text-4xl font-black text-[#111] mb-8 uppercase tracking-tight" style={{ fontFamily: 'Onest, Arial, sans-serif' }}>
                  Send Us a Message
                </h3>
                
                <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-2">
                      <label htmlFor="name" className="font-bold text-sm text-[#111]">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="John Doe" 
                        className="bg-[#F7F7F7] border border-[#E8E8E8] rounded-[16px] px-5 py-4 focus:outline-none focus:border-[#FF5A2E] focus:ring-1 focus:ring-[#FF5A2E] transition-all w-full text-[#111] placeholder:text-gray-400" 
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <label htmlFor="phone" className="font-bold text-sm text-[#111]">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="+62 8xx xxxx xxxx" 
                        className="bg-[#F7F7F7] border border-[#E8E8E8] rounded-[16px] px-5 py-4 focus:outline-none focus:border-[#FF5A2E] focus:ring-1 focus:ring-[#FF5A2E] transition-all w-full text-[#111] placeholder:text-gray-400" 
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-bold text-sm text-[#111]">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="john@example.com" 
                      className="bg-[#F7F7F7] border border-[#E8E8E8] rounded-[16px] px-5 py-4 focus:outline-none focus:border-[#FF5A2E] focus:ring-1 focus:ring-[#FF5A2E] transition-all w-full text-[#111] placeholder:text-gray-400" 
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-bold text-sm text-[#111]">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      placeholder="How can we help you?" 
                      className="bg-[#F7F7F7] border border-[#E8E8E8] rounded-[16px] px-5 py-4 focus:outline-none focus:border-[#FF5A2E] focus:ring-1 focus:ring-[#FF5A2E] transition-all w-full text-[#111] placeholder:text-gray-400" 
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-bold text-sm text-[#111]">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      placeholder="Type your message here..." 
                      className="bg-[#F7F7F7] border border-[#E8E8E8] rounded-[16px] px-5 py-4 focus:outline-none focus:border-[#FF5A2E] focus:ring-1 focus:ring-[#FF5A2E] transition-all w-full resize-none text-[#111] placeholder:text-gray-400"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="mt-4 inline-flex items-center justify-center bg-[#111111] !text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#333] hover:scale-[1.02] transition-all w-full md:w-max group shadow-lg shadow-black/10"
                  >
                    Send Message
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
