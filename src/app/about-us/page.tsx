'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function AboutUs() {
  return (
    <>
      <section className="hero-aboutus">
        <div className="w-layout-blockcontainer hero-content-aboutus w-container">
          <div className="bg">
            <section className="rt-component-section-4" style={{ backgroundColor: 'transparent', paddingBottom: 0 }}>
              <div className="w-layout-blockcontainer rt-component-container-4" style={{ maxWidth: 'none', padding: 0 }}>
                <section data-w-id="d790e71d-bd29-04d8-4323-e3f5c7513885" className="rt-home-two-text-marquee-section rt-second">
                  <div className="rt-marque-wrap-big-oppsite">
                    {Array(10).fill("More than Just a Coffee").map((text, i) => (
                      <div key={i} className="rt-marque-text-two" style={{ paddingLeft: '60px' }}>
                        <div className="rt-marque-title rt-bottom-title-block">{text}</div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </section>
          </div>
          <div className="hero-text-wrapper-aboutus">
            <h1 className="hero-about-us">GET<br />THE MORE<br />EXPERIENCE</h1>
          </div>
          <div className="hero-text-aboutus">
            <div className="text-aboutus">Welcome to More, the perfect spot<br />to unwind, connect, and enjoy great<br />food &amp; drinks in a cozy atmosphere.</div>
          </div>
          <div className="hero-pict-aboutus">
            <div className="pict-aboutus">
              <img src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618ec9c7cda48fdb040f_9736b93aadaf28912ac20839dc9a1fb5_Snapinst.app_364950577_302198265666943_7166196452798755348_n_1080.jpg" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728.0000610351562px, 940.0000610351562px" srcSet="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618ec9c7cda48fdb040f_9736b93aadaf28912ac20839dc9a1fb5_Snapinst.app_364950577_302198265666943_7166196452798755348_n_1080-p-500.jpg 500w, https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618ec9c7cda48fdb040f_9736b93aadaf28912ac20839dc9a1fb5_Snapinst.app_364950577_302198265666943_7166196452798755348_n_1080-p-800.jpg 800w, https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618ec9c7cda48fdb040f_9736b93aadaf28912ac20839dc9a1fb5_Snapinst.app_364950577_302198265666943_7166196452798755348_n_1080.jpg 944w" alt="" className="image-28" />
            </div>
          </div>
          <div className="hero-rating-aboutus">
            <div className="rating-aboutus">
              <img src="data:image/png;base64,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" alt="Google Maps Old" className="img-8" />
              <div className="text-block-5">4,7</div>
              <div className="div-block-53">
                <img src="data:image/png;base64,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" alt="Star Filled" className="img-9" />
                <img src="data:image/png;base64,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" alt="Star Filled" className="img-10" />
                <img src="data:image/png;base64,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" alt="Star Filled" className="img-11" />
                <img src="data:image/png;base64,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" alt="Star Filled" className="img-12" />
                <img src="data:image/png;base64,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" alt="Star Filled" className="img-13" />
              </div>
              <div className="text-block-6">(750+)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-aboutus">
        <div className="w-layout-blockcontainer profile-content-aboutus w-container">
          <div className="profil-content-grid">
            <div className="content-grid">
              <div id="w-node-_54b631db-8dab-60fe-88d3-e1b849f1df69-574cd1d0" className="profile-heading">
                <h1 className="heading-text1">ABOUT</h1>
                <h1 className="heading-text2">MORE</h1>
              </div>
              <div className="profile-decoration">
                <div className="text-decoration">how about?</div>
              </div>
            </div>
            <div className="content-grid">
              <div className="div-block-54">
                <p className="paragraph-3">MORE is a place for people to relax<br />while enjoying a cup of coffee.<br />‍<br />Comfort and light conversations while<br />savoring coffee to spend a pleasant<br />afternoon.</p>
              </div>
              <div className="div-block-55">
                <img src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361b38501f0785000843e_Snapinst.app_364345199_1322947178311768_7886279012701890473_n_1080.jpg" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728.0000610351562px, 940.0000610351562px" srcSet="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361b38501f0785000843e_Snapinst.app_364345199_1322947178311768_7886279012701890473_n_1080-p-500.jpg 500w, https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361b38501f0785000843e_Snapinst.app_364345199_1322947178311768_7886279012701890473_n_1080-p-800.jpg 800w, https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361b38501f0785000843e_Snapinst.app_364345199_1322947178311768_7886279012701890473_n_1080.jpg 1080w" alt="" className="image-29" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-aboutus gallery-custom-spacing w-full pb-32 md:pb-24">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-row justify-between items-end mb-10 md:mb-16 gap-4">
            <div className="text-white text-[14px] md:text-2xl font-medium mb-1 md:mb-4" style={{ fontFamily: 'Onest, Arial, sans-serif' }}>
              Gallery of More
            </div>
            <h1 className="heading-28 text-white uppercase text-right" style={{ fontFamily: 'Onest, Arial, sans-serif', margin: 0 }}>
              ON THE SPOT
            </h1>
          </div>

          {/* Slider */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              spaceBetween={24}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                768: { slidesPerView: 3.2 },
                1024: { slidesPerView: 4.2 },
              }}
              loop={true}
              className="!overflow-visible"
            >
              {[
                "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a403e4d87414e2cce945c7_Snapinst.app_241668237_138910701774689_4665688277024405154_n_1080.jpg",
                "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e4e468aefc31c8be7_Snapinst.app_465822484_533668059528495_5675566419599041408_n_1080.jpg",
                "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361afea7cf5b1f6f93329_Snapinst.app_279165118_349328237174877_229976237247672591_n_1080.jpg",
                "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361b38501f0785000843e_Snapinst.app_364345199_1322947178311768_7886279012701890473_n_1080.jpg",
                "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617eb799ace9478f005b_Snapinst.app_463847500_445611731428305_8989091244024385285_n_1080.jpg",
                "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e7440374ece8d54c3_Snapinst.app_461962559_1266045421079701_9221845444617685883_n_1080.jpg",
                "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618f0d7abff1de96f1c5_Snapinst.app_449374848_941014941039473_6272711426238127196_n_1080.jpg",
                "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618ebd61247fe6a2d289_Snapinst.app_449289701_494310276443973_919945982624711639_n_1080.jpg"
              ].map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full aspect-square rounded-[32px] overflow-hidden bg-gray-200">
                    <img src={src} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="flex justify-end gap-6 pr-4 md:pr-0" style={{ marginTop: '48px', marginBottom: '120px' }}>
              <button className="swiper-button-prev-custom w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg group focus:outline-none z-10">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF642E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button className="swiper-button-next-custom w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg group focus:outline-none z-10">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF642E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="rt-home-one-testimonial rt-component-section-4" style={{ marginTop: '180px', paddingTop: '40px' }}>
        <div className="rt-home-one-testimonial-wrapper">
          <div className="rt-home-one-testimonial-heading">
            <h2 className="rt-change-padding-2">Talk with</h2>
            <h2 className="rt-change-padding-2">owner</h2>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={3}
            slidesPerView={1}
            loop={true}
            className="rt-background-tranperent"
          >
            {[1, 2, 3, 4].map((i) => (
              <SwiperSlide key={i} className="slide-5">
                <div className="rt-home-one-testimonial-main">
                  <div className="rt-home-one-testimonial-arrow-wrapper">
                    <div className="rt-home-one-testimonial-details">
                      <div className="rt-heading-six-7 rt-home-one-testimonial-max-width">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies lorem ac suscipit mollis. Maecenaselementum metus dui, sed ullamcorper enim dignissim sed. Morbi a orci nec metus convallis pharetra. In hac habitasse platea dictumst. Sed suscipit quam vel lobortis volutpat. Quisque tincidunt molestie malesuada.</div>
                    </div>
                  </div>
                  <div className="div-block-65">
                    <div className="div-block-66">
                      <img width="301" height="301" alt="Customer Three" src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67cc300f4912026bb5219c2d_Customer%20Image.webp" loading="lazy" className="rt-auto-fit-two-2 rt-mobile-image-full-width" />
                      <div className="div-block-68">
                        <h1 className="heading-30">David Muhammad</h1>
                        <div className="text-block-10">Owner More Coffee</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="rt-component-section-5">
        <div className="div-block-69">
          <h1 className="heading-31">OUR MILESTONE</h1>
        </div>
        <div className="w-layout-blockcontainer rt-component-container-4 w-container">
          <div className="w-layout-vflex rt-service-three-animated-block">
            <div className="w-layout-hflex rt-service-three-animated-image-box">
              <div className="w-layout-hflex rt-service-three-animated-image-block">
                <img width="563" height="192" alt="" src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361afea7cf5b1f6f93329_Snapinst.app_279165118_349328237174877_229976237247672591_n_1080.jpg" loading="lazy" className="rt-service-three-animated-image" />
                <div className="rt-service-three-animated-image-overlay"></div>
              </div>
              <div className="w-layout-hflex rt-service-three-animated-text">
                <div className="rt-heading-six-24 rt-service-three-animated-number">2021</div>
                <div className="w-layout-vflex rt-service-three-animated-content-box">
                  <div className="rt-category-cards-text-2">The Birth of MORÈ Coffee &amp; Space</div>
                  <div className="rt-service-three-animated-content-wrap">
                    <p className="rt-service-three-animated-content">A historic year! <em>MORÈ Coffee &amp; Space</em> was officially established in Subang, bringing a new experience of enjoying coffee and gathering in a warm and cozy atmosphere.</p>
                  </div>
                </div>
              </div>
              <div className="rt-service-three-animated-box-bg"></div>
            </div>

            <div className="w-layout-hflex rt-service-three-animated-image-box">
              <div className="w-layout-hflex rt-service-three-animated-image-block">
                <img width="563" height="192" alt="" src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e7440374ece8d54c3_Snapinst.app_461962559_1266045421079701_9221845444617685883_n_1080.jpg" loading="lazy" className="rt-service-three-animated-image" />
                <div className="rt-service-three-animated-image-overlay"></div>
              </div>
              <div className="w-layout-hflex rt-service-three-animated-text">
                <div className="rt-heading-six-24 rt-service-three-animated-number">2022</div>
                <div className="w-layout-vflex rt-service-three-animated-content-box">
                  <div className="rt-category-cards-text-2">MORÈ Coffee x Curug Goong</div>
                  <div className="rt-service-three-animated-content-wrap">
                    <p className="rt-service-three-animated-content">Continuing its expansion, <em>MORÈ Coffee</em> arrived at Curug Goong, offering the unique sensation of enjoying coffee in the midst of nature with breathtaking scenery.</p>
                  </div>
                </div>
              </div>
              <div className="rt-service-three-animated-box-bg"></div>
            </div>

            <div className="w-layout-hflex rt-service-three-animated-image-box">
              <div className="w-layout-hflex rt-service-three-animated-image-block">
                <img width="563" height="192" alt="" src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618f0d7abff1de96f1c5_Snapinst.app_449374848_941014941039473_6272711426238127196_n_1080.jpg" loading="lazy" className="rt-service-three-animated-image" />
                <div className="rt-service-three-animated-image-overlay"></div>
              </div>
              <div className="w-layout-hflex rt-service-three-animated-text">
                <div className="rt-heading-six-24 rt-service-three-animated-number">2025</div>
                <div className="w-layout-vflex rt-service-three-animated-content-box">
                  <div className="rt-category-cards-text-2">Digital Presence with Landing Page</div>
                  <div className="rt-service-three-animated-content-wrap">
                    <p className="rt-service-three-animated-content">To reach more customers, we launched <em>MORÈ</em>’s official landing page, providing easy access to information about our menu, locations, and special events.</p>
                  </div>
                </div>
              </div>
              <div className="rt-service-three-animated-box-bg"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="rt-component-section-6">
        <div className="w-layout-blockcontainer rt-component-container-5 w-container">
          <section className="rt-service-two-cta rt-background-dark-2">
            <div className="rt-team-one-cta-main">
              <div style={{ transform: 'none' }} className="rt-text-white-3 rt-text-uppercase rt-text-small-2">Let’s Savor Moments Together</div>
              <div className="rt-overflow-hidden-4">
                <h2 style={{ transform: 'none' }} className="rt-text-white-3 rt-margin-bottom-twenty-2">Find your taste in cozy atmosphere!</h2>
              </div>
              <a href="#" className="rt-button rt-margin-top-twenty-2 w-inline-block">
                <div className="rt-button-main-three rt-overflow-hidden-4">
                  <div style={{ transform: 'none' }} className="rt-button-text-hover-in">Explore More</div>
                  <div style={{ transform: 'none' }} className="rt-button-hover-out">Explore More</div>
                </div>
                <img width="20" height="20" alt="Big White Arrow" src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67cc6e919a604cd43f915335_%F0%9F%A6%86%20icon%20_arrow%20right_.svg" style={{ transform: 'none' }} className="rt-button-arrow" />
              </a>
            </div>
            <div className="rt-service-two-cta-background"></div>
          </section>
        </div>
      </section>
    </>
  );
}
