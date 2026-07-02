'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start animation when section top enters viewport (rect.top <= windowHeight)
      // End animation when section top is 15% of viewport height from the top
      const entry = windowHeight;
      const exit = windowHeight * 0.15;

      const progress = Math.max(0, Math.min(1, (entry - rect.top) / (entry - exit)));

      sectionRef.current.style.setProperty('--scroll-progress', progress.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <section className="hero-section">
        <div className="w-layout-blockcontainer hero w-container">
          <div className="hero-content">
            <div className="text-wrapper">
              <div className="text-block">
                <h1 className="slide-text">MORE</h1>
                <p className="paragraph">Coffee &amp; Space</p>
              </div>
            </div>
            <HeroSlider />
          </div>
        </div>
      </section>

      <section className="headline">
        <div className="w-layout-blockcontainer container-5 w-container">
          <h1 className="heading-3">GET THE MORE EXPERIENCE</h1>
        </div>
      </section>

      <section className="about">
        <div className="div-block-5">
          <div className="div-block-7">
            <section className="text-block1-about">
              <h1 className="heading-4">ABOUT<br />MORE<br /></h1>
            </section>
            <div className="w-layout-blockcontainer container-6 w-container">
              <img
                src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361b38501f0785000843e_Snapinst.app_364345199_1322947178311768_7886279012701890473_n_1080.jpg"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728.0000610351562px, 940.0000610351562px"
                srcSet="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361b38501f0785000843e_Snapinst.app_364345199_1322947178311768_7886279012701890473_n_1080-p-500.jpg 500w, https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361b38501f0785000843e_Snapinst.app_364345199_1322947178311768_7886279012701890473_n_1080-p-800.jpg 800w, https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361b38501f0785000843e_Snapinst.app_364345199_1322947178311768_7886279012701890473_n_1080.jpg 1080w"
                alt=""
                className="image-4"
              />
            </div>
            <section className="text-block2-about">
              <h1 className="heading-4">ABOUT<br />MORE</h1>
            </section>
          </div>
        </div>
        <section className="section-2">
          <div className="div-block-6">
            <p className="paragraph-about">
              MORE is a place for people to relax<br />while enjoying a cup of coffee.<br /><br />
              Comfort and light conversations while<br />savoring coffee to spend a pleasant<br />afternoon.
            </p>
            <div className="about-button">
              <Link href="/about-us" className="about-button-link">Read More</Link>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRElEQVR4nO3cvWoCQQBF4TWFa8DnNpAmRapUeYcU4gsJgl1+sDwSslVIFGRmVu+e7wHCcLgMEZbpOkmSJEmSJF0EuAdegE9gDzwCvTkL4yfyb2tjl408Az7+CG3s0oD3f0Ibu3DopxOhjV0wdD/cycauDZgDb2dib4BF9cOkw9jGjoTLNnYkXLaxI+GyjR0Jl23sSLhsY0fCZRs7Ei7b2JFw2caOhMs2diRctrEj4bLb8SOd64v90PJMU75GdmOfcSqht2OfcSpXx2rsc940/GK1Pv+9a8DIRs6AvwaNHAGXbOQIuGQjR8AlGzkCLtnIEXDJRo6ASzZyBFyykSPgko0cAZds5Ai45CaRe59jaxP6+cxnWr5TWiDyHfBl5DahDy65AeDV66JN6OUQ+zA8cfz9KKwPdVcMPqv2xyVJkiRJUjdhR5HyL0XbIoIeAAAAAElFTkSuQmCC" alt="Forward" className="img-6" />
            </div>
          </div>
        </section>
      </section>

      <section ref={sectionRef} className="more-promo">
        <div className="w-layout-blockcontainer background-promo w-container">
          <div className="bg-shape1"></div>
          <div className="bg-shape2"></div>
          <div className="bg-text">
            <h1 className="heading-5">MORE PROMO</h1>
          </div>
          <div className="bg-text1">
            <h1 className="heading-bg">FOR YOU</h1>
          </div>
        </div>
        <div className="container-9" style={{ zIndex: 2 }}>
          <h2 className="centered-heading">MORE PROMO</h2>
          <p className="centered-subheading">Start your day with a special delight!</p>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, centeredSlides: false },
              1024: { 
                slidesPerView: 3, 
                centeredSlides: true
              }
            }}
            loop={true}
            loopAdditionalSlides={2}
            className="team-slider-wrapper"
          >
            {[
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361b9f627ada1c068ec75_Snapinst.app_449683211_437094179157824_4320889164489503951_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a6872bf2737635abfa2127_Snapinst.app_453777876_1164433284888007_7980345566900108288_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361c751aca51a0cd47607_Snapinst.app_458618393_561565696328949_7813230863723807269_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361b9f627ada1c068ec75_Snapinst.app_449683211_437094179157824_4320889164489503951_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a6872bf2737635abfa2127_Snapinst.app_453777876_1164433284888007_7980345566900108288_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361c751aca51a0cd47607_Snapinst.app_458618393_561565696328949_7813230863723807269_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361b9f627ada1c068ec75_Snapinst.app_449683211_437094179157824_4320889164489503951_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a6872bf2737635abfa2127_Snapinst.app_453777876_1164433284888007_7980345566900108288_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361c751aca51a0cd47607_Snapinst.app_458618393_561565696328949_7813230863723807269_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361b9f627ada1c068ec75_Snapinst.app_449683211_437094179157824_4320889164489503951_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a6872bf2737635abfa2127_Snapinst.app_453777876_1164433284888007_7980345566900108288_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361c751aca51a0cd47607_Snapinst.app_458618393_561565696328949_7813230863723807269_n_1080.jpg"
            ].map((src, i) => (
              <SwiperSlide key={i} className="team-slide-wrapper">
                <div className="team-block">
                  <img src={src} loading="lazy" alt="" className="team-member-image-two" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="more-information">
        <div className="container-10">
          <div className="div-block-12">
            <h1 className="heading-12">MORE</h1>
            <h2 className="centered-heading-2">INFORMATION</h2>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            spaceBetween={12}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, centeredSlides: false },
              1024: { 
                slidesPerView: 4, 
                centeredSlides: false
              }
            }}
            loop={true}
            loopAdditionalSlides={2}
            className="team-slider-wrapper-2"
          >
            {[
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618ef7214f1d5b37985a_Snapinst.app_471847703_984896673661509_9180063155740371923_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618edb162baeac5afc14_Snapinst.app_453900601_1027607138769338_1466935677238774556_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618ef627ada1c068b6ed_Snapinst.app_471827747_3884473095152524_4237858665531374394_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618e921d175916b09e38_Snapinst.app_471946694_438728442507890_1105810471555671773_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618ef7214f1d5b37985a_Snapinst.app_471847703_984896673661509_9180063155740371923_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618edb162baeac5afc14_Snapinst.app_453900601_1027607138769338_1466935677238774556_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618ef627ada1c068b6ed_Snapinst.app_471827747_3884473095152524_4237858665531374394_n_1080.jpg",
              "https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618e921d175916b09e38_Snapinst.app_471946694_438728442507890_1105810471555671773_n_1080.jpg"
            ].map((src, i) => (
              <SwiperSlide key={i} className="team-slide-wrapper-2">
                <div className="team-block-2">
                  <img src={src} loading="lazy" alt="" className="team-member-image-two-2" />
                  <div className="team-block-info-2">
                    <div>Februari 3, 2025</div>
                    <h3 className="team-member-name-two-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                    <p className="team-member-text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="news-button">
            <Link href="#" className="news-button-link">Read More</Link>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRElEQVR4nO3cvWoCQQBF4TWFa8DnNpAmRapUeYcU4gsJgl1+sDwSslVIFGRmVu+e7wHCcLgMEZbpOkmSJEmSJF0EuAdegE9gDzwCvTkL4yfyb2tjl408Az7+CG3s0oD3f0Ibu3DopxOhjV0wdD/cycauDZgDb2dib4BF9cOkw9jGjoTLNnYkXLaxI+GyjR0Jl23sSLhsY0fCZRs7Ei7b2JFw2caOhMs2diRctrEj4bLb8SOd64v90PJMU75GdmOfcSqht2OfcSpXx2rsc940/GK1Pv+9a8DIRs6AvwaNHAGXbOQIuGQjR8AlGzkCLtnIEXDJRo6ASzZyBFyykSPgko0cAZds5Ai45CaRe59jaxP6+cxnWr5TWiDyHfBl5DahDy65AeDV66JN6OUQ+zA8cfz9KKwPdVcMPqv2xyVJkiRJUjdhR5HyL0XbIoIeAAAAAElFTkSuQmCC" alt="Forward" className="img-3" />
          </div>
        </div>
      </section>

      <section className="more-store">
        <div className="container-14">
          <div className="gallery-wrapper">
            <div className="gallery-slide w-slider" style={{ width: '100%', position: 'relative' }}>
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: '.more-store-prev',
                  nextEl: '.more-store-next',
                }}
                autoplay={{ delay: 4000 }}
                spaceBetween={3}
                slidesPerView={1}
                loop={true}
              >
                <SwiperSlide className="gallery-slide-wrapper">
                  <div className="gallery-slide-image">
                    <img src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618ec9c7cda48fdb040f_9736b93aadaf28912ac20839dc9a1fb5_Snapinst.app_364950577_302198265666943_7166196452798755348_n_1080.jpg" loading="lazy" alt="" className="gallery-image" />
                    <h3 className="gallery-slide-text" style={{ transform: 'none' }}>MORE Coffee & Space</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="gallery-slide-wrapper">
                  <div className="gallery-slide-image">
                    <img src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67ae976bbcbdf85020de8c2d_e186ed88c49145c02b4965fd69ba4bd4_Snapinst.app_449374848_941014941039473_6272711426238127196_n_1080%2011.jpg" loading="lazy" alt="" className="gallery-image" />
                    <h3 className="gallery-slide-text" style={{ transform: 'none' }}>MORE Coffee X Curug Goong</h3>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-button-prev more-store-prev"></div>
              <div className="swiper-button-next more-store-next"></div>
            </div>
            <div className="gallery-block">
              <h3 className="heading-15">MORE</h3>
              <h1 className="heading-16">STORE</h1>
              <div className="store-button">
                <Link href="#" className="store-button-link">Our Store</Link>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRElEQVR4nO3cvWoCQQBF4TWFa8DnNpAmRapUeYcU4gsJgl1+sDwSslVIFGRmVu+e7wHCcLgMEZbpOkmSJEmSJF0EuAdegE9gDzwCvTkL4yfyb2tjl408Az7+CG3s0oD3f0Ibu3DopxOhjV0wdD/cycauDZgDb2dib4BF9cOkw9jGjoTLNnYkXLaxI+GyjR0Jl23sSLhsY0fCZRs7Ei7b2JFw2caOhMs2diRctrEj4bLb8SOd64v90PJMU75GdmOfcSqht2OfcSpXx2rsc940/GK1Pv+9a8DIRs6AvwaNHAGXbOQIuGQjR8AlGzkCLtnIEXDJRo6ASzZyBFyykSPgko0cAZds5Ai45CaRe59jaxP6+cxnWr5TWiDyHfBl5DahDy65AeDV66JN6OUQ+zA8cfz9KKwPdVcMPqv2xyVJkiRJUjdhR5HyL0XbIoIeAAAAAElFTkSuQmCC" alt="Forward" className="img-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="more-menu">
        <div className="div-block-16">
          <div className="columns-2 w-row">
            <div className="column-2 w-col w-col-6">
              <div className="div-block-23 text-wrapper-menu">
                <h1 className="heading-19">MORE</h1>
                <h1 className="heading-20">MENU</h1>
              </div>
              <div className="div-block-23 bento-wrapper">
                <div className="div-block-24">
                  <img src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e51363df33a09d333_Snapinst.app_468968836_2569178849938992_1036707603703999078_n_1080.jpg" loading="lazy" alt="" className="image-17" />
                </div>
              </div>
            </div>
            <div className="column-3 w-col w-col-6">
              <div className="div-block-29">
                <div className="more-menu-button">
                  <Link href="/menu" className="more-menu-button-link">See Menu</Link>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRElEQVR4nO3cvWoCQQBF4TWFa8DnNpAmRapUeYcU4gsJgl1+sDwSslVIFGRmVu+e7wHCcLgMEZbpOkmSJEmSJF0EuAdegE9gDzwCvTkL4yfyb2tjl408Az7+CG3s0oD3f0Ibu3DopxOhjV0wdD/cycauDZgDb2dib4BF9cOkw9jGjoTLNnYkXLaxI+GyjR0Jl23sSLhsY0fCZRs7Ei7b2JFw2caOhMs2diRctrEj4bLb8SOd64v90PJMU75GdmOfcSqht2OfcSpXx2rsc940/GK1Pv+9a8DIRs6AvwaNHAGXbOQIuGQjR8AlGzkCLtnIEXDJRo6ASzZyBFyykSPgko0cAZds5Ai45CaRe59jaxP6+cxnWr5TWiDyHfBl5DahDy65AeDV66JN6OUQ+zA8cfz9KKwPdVcMPqv2xyVJkiRJUjdhR5HyL0XbIoIeAAAAAElFTkSuQmCC" alt="Forward" className="img" />
                </div>
              </div>
              <div className="div-block-32">
                <img src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617ec248800e8fbb881f_Snapinst.app_468952541_959617539386940_282769548818336615_n_1080.jpg" loading="lazy" alt="" className="image-23" />
              </div>
              <div className="div-block-31">
                <img src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e8501f078500052bf_Snapinst.app_474032700_893521869333811_2363957203245634607_n_1080.jpg" loading="lazy" alt="" className="image-22" />
              </div>
              <div className="div-block-30">
                <img src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e2160ac4a681643dc_Snapinst.app_474020365_620515647106104_6455746163419717865_n_1080.jpg" loading="lazy" alt="" className="image-21" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-5">
        <div className="div-block-33">
          <div className="w-layout-grid grid-3">
            <div className="div-block-35">
              <h1 className="heading-21">FOLLOW</h1>
              <h1 className="heading-22">US!</h1>
            </div>
            <div className="div-block-44">
              <img src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67b2f00007efcd2d5d5164f2_More.png" loading="lazy" alt="" className="image-24" />
            </div>
            <div className="div-block-36">
              <div className="follow-ig-button">
                <div className="ig-preview-card">
                  <div className="ig-preview-header">
                    <img src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67b2f00007efcd2d5d5164f2_More.png" alt="More Logo" className="ig-preview-avatar" />
                    <div className="ig-preview-info">
                      <h4>MORE Coffee & Space</h4>
                      <p>@kopimo.re</p>
                    </div>
                  </div>
                  <div className="ig-preview-stats">
                    <div><strong>10.5K</strong><span>Followers</span></div>
                    <div><strong>124</strong><span>Posts</span></div>
                  </div>
                  <a href="https://www.instagram.com/kopimo.re/" target="_blank" rel="noopener noreferrer" className="ig-preview-btn">View Profile</a>
                </div>
                <img src="data:image/png;base64,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" alt="Instagram" className="img-4" />
                <a href="https://www.instagram.com/kopimo.re/" className="ig-link">@kopimo.re</a>
                <div className="div-block-43">
                  <img src="data:image/png;base64,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" alt="Verified Badge" className="img-5" />
                </div>
              </div>
            </div>
            <div className="div-block-34">
              <div className="w-layout-grid grid-4">
                <div className="div-block-37"><img src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e4e468aefc31c8be7_Snapinst.app_465822484_533668059528495_5675566419599041408_n_1080.jpg" loading="lazy" alt="" /></div>
                <div className="div-block-38"><img src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617ec248800e8fbb881c_Snapinst.app_464846681_562362786346575_6968800803499721692_n_1080.jpg" loading="lazy" alt="" className="image-25" /></div>
                <div className="div-block-39"><img src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e4e468aefc31c8bf1_Snapinst.app_471967909_942382867500085_5564985757828210073_n_1080.jpg" loading="lazy" alt="" /></div>
                <div className="div-block-40"><img src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e7239b7b663816b4d_Snapinst.app_464369423_496161463418386_1456211157789882566_n_1080.jpg" loading="lazy" alt="" className="image-26" /></div>
                <div className="div-block-41"><img src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617eb799ace9478f005b_Snapinst.app_463847500_445611731428305_8989091244024385285_n_1080.jpg" loading="lazy" alt="" /></div>
                <div className="div-block-42"><img src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e7440374ece8d54c3_Snapinst.app_461962559_1266045421079701_9221845444617685883_n_1080.jpg" loading="lazy" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
