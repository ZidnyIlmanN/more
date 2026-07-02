'use client';

import { useState } from 'react';
import Link from 'next/link';

type MenuCategory = 'all' | 'coffee' | 'non-coffee' | 'food' | 'seasonal';
type StoreId = 'pusat' | 'curug-goong';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Exclude<MenuCategory, 'all'>;
  image: string;
  availableStoreIds: StoreId[];
  bestseller?: boolean;
}

const CATEGORIES: { id: MenuCategory; label: string }[] = [
  { id: 'all', label: 'All Menu' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'non-coffee', label: 'Non-Coffee' },
  { id: 'food', label: 'Food' },
  { id: 'seasonal', label: 'Seasonal' },
];

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'more-latte',
    name: 'MORE Latte',
    description: 'Smooth espresso with steamed milk — our signature comfort in a cup.',
    price: 'Rp 28.000',
    category: 'coffee',
    image: 'https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e51363df33a09d333_Snapinst.app_468968836_2569178849938992_1036707603703999078_n_1080.jpg',
    availableStoreIds: ['pusat', 'curug-goong'],
    bestseller: true,
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Bold espresso diluted with hot water for a clean, rich finish.',
    price: 'Rp 22.000',
    category: 'coffee',
    image: 'https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617ec248800e8fbb881f_Snapinst.app_468952541_959617539386940_282769548818336615_n_1080.jpg',
    availableStoreIds: ['pusat', 'curug-goong'],
    bestseller: true,
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Perfect balance of espresso, steamed milk, and silky foam.',
    price: 'Rp 26.000',
    category: 'coffee',
    image: 'https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e8501f078500052bf_Snapinst.app_474032700_893521869333811_2363957203245634607_n_1080.jpg',
    availableStoreIds: ['pusat'],
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    description: 'Ceremonial-grade matcha whisked with creamy milk.',
    price: 'Rp 30.000',
    category: 'non-coffee',
    image: 'https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e2160ac4a681643dc_Snapinst.app_474020365_620515647106104_6455746163419717865_n_1080.jpg',
    availableStoreIds: ['pusat', 'curug-goong'],
    bestseller: true,
  },
  {
    id: 'chocolate',
    name: 'Hot Chocolate',
    description: 'Rich Belgian chocolate, warm and indulgent on any day.',
    price: 'Rp 25.000',
    category: 'non-coffee',
    image: 'https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e4e468aefc31c8be7_Snapinst.app_465822484_533668059528495_5675566419599041408_n_1080.jpg',
    availableStoreIds: ['pusat'],
  },
  {
    id: 'lemon-tea',
    name: 'Lemon Tea',
    description: 'Refreshing black tea with a bright citrus twist.',
    price: 'Rp 18.000',
    category: 'non-coffee',
    image: 'https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617ec248800e8fbb881c_Snapinst.app_464846681_562362786346575_6968800803499721692_n_1080.jpg',
    availableStoreIds: ['pusat', 'curug-goong'],
  },
  {
    id: 'croissant',
    name: 'Butter Croissant',
    description: 'Flaky, golden layers baked fresh every morning.',
    price: 'Rp 20.000',
    category: 'food',
    image: 'https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e4e468aefc31c8bf1_Snapinst.app_471967909_942382867500085_5564985757828210073_n_1080.jpg',
    availableStoreIds: ['pusat'],
  },
  {
    id: 'sandwich',
    name: 'Club Sandwich',
    description: 'Stacked layers of chicken, egg, and fresh greens.',
    price: 'Rp 35.000',
    category: 'food',
    image: 'https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e7239b7b663816b4d_Snapinst.app_464369423_496161463418386_1456211157789882566_n_1080.jpg',
    availableStoreIds: ['pusat'],
    bestseller: true,
  },
  {
    id: 'fries',
    name: 'Loaded Fries',
    description: 'Crispy fries topped with cheese sauce and herbs.',
    price: 'Rp 28.000',
    category: 'food',
    image: 'https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617eb799ace9478f005b_Snapinst.app_463847500_445611731428305_8989091244024385285_n_1080.jpg',
    availableStoreIds: ['pusat', 'curug-goong'],
  },
  {
    id: 'seasonal-pumpkin',
    name: 'Pumpkin Spice Latte',
    description: 'Limited seasonal blend — warm spices meet smooth espresso.',
    price: 'Rp 32.000',
    category: 'seasonal',
    image: 'https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e7440374ece8d54c3_Snapinst.app_461962559_1266045421079701_9221845444617685883_n_1080.jpg',
    availableStoreIds: ['pusat'],
  },
  {
    id: 'seasonal-berry',
    name: 'Berry Refresher',
    description: 'Monthly special — mixed berries with sparkling soda.',
    price: 'Rp 27.000',
    category: 'seasonal',
    image: 'https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361b9f627ada1c068ec75_Snapinst.app_449683211_437094179157824_4320889164489503951_n_1080.jpg',
    availableStoreIds: ['curug-goong'],
  },
  {
    id: 'seasonal-pasta',
    name: 'Truffle Pasta',
    description: "Chef's pick this month — creamy truffle with parmesan.",
    price: 'Rp 45.000',
    category: 'seasonal',
    image: 'https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361c751aca51a0cd47607_Snapinst.app_458618393_561565696328949_7813230863723807269_n_1080.jpg',
    availableStoreIds: ['pusat'],
  },
];

const STORES = [
  {
    id: 'pusat',
    name: 'MORE Coffee & Space',
    shortName: 'Subang Pusat',
    image:
      'https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3618ec9c7cda48fdb040f_9736b93aadaf28912ac20839dc9a1fb5_Snapinst.app_364950577_302198265666943_7166196452798755348_n_1080.jpg',
  },
  {
    id: 'curug-goong',
    name: 'MORE Coffee X Curug Goong',
    shortName: 'Curug Goong',
    image:
      'https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67ae976bbcbdf85020de8c2d_e186ed88c49145c02b4965fd69ba4bd4_Snapinst.app_449374848_941014941039473_6272711426238127196_n_1080%2011.jpg',
  },
] as const;

const INITIAL_MENU_COUNT = 6;

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [activeStore, setActiveStore] = useState<StoreId>('pusat');
  const [showAllMenu, setShowAllMenu] = useState(false);
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);

  const storeItems = MENU_ITEMS.filter((item) => item.availableStoreIds.includes(activeStore));
  const storeBestsellers = storeItems.filter((item) => item.bestseller);

  const filteredItems =
    activeCategory === 'all'
      ? storeItems
      : storeItems.filter((item) => item.category === activeCategory);

  const visibleItems = showAllMenu ? filteredItems : filteredItems.slice(0, INITIAL_MENU_COUNT);
  const hasMoreItems = filteredItems.length > INITIAL_MENU_COUNT && !showAllMenu;

  const selectedStore = STORES.find((store) => store.id === activeStore) ?? STORES[0];

  const handleCategoryChange = (category: MenuCategory) => {
    setActiveCategory(category);
    setShowAllMenu(false);
  };

  const handleStoreChange = (storeId: StoreId) => {
    setActiveStore(storeId);
    setShowAllMenu(false);
    setIsStoreDropdownOpen(false);
  };

  return (
    <main className="menu-page w-full flex flex-col min-h-screen">
      {/* Hero */}
      <section className="hero-menu">
        <div className="hero-menu-navbar-space" aria-hidden />

        <div className="menu-marquee-strip overflow-hidden py-2.5 bg-[#FF5A2E]">
          <div className="flex whitespace-nowrap menu-marquee-track">
            {Array(8)
              .fill('Start your day with a special delight')
              .map((text, i) => (
                <span
                  key={i}
                  className="menu-marquee-item text-white font-bold uppercase tracking-wider text-sm md:text-base px-8"
                  style={{ fontFamily: 'Onest, Arial, sans-serif' }}
                >
                  {text}
                </span>
              ))}
          </div>
        </div>

        <div className="hero-menu-photo">
          <img
            src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e51363df33a09d333_Snapinst.app_468968836_2569178849938992_1036707603703999078_n_1080.jpg"
            alt="MORE Menu"
          />
          <div className="hero-menu-photo-fade" />

          <div className="hero-menu-content w-full max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="hero-menu-content-inner">
              <div>
                <p className="text-[#FF5A2E] font-semibold text-sm md:text-base uppercase tracking-widest mb-2">
                  Coffee &amp; Space
                </p>
                <h1
                  className="text-6xl md:text-8xl lg:text-[9rem] font-black text-white uppercase tracking-tighter leading-[0.85]"
                  style={{ fontFamily: 'Onest, Arial, sans-serif' }}
                >
                  MORE
                  <br />
                  MENU
                </h1>
              </div>
              <p className="text-white/80 text-base md:text-lg max-w-sm font-medium leading-relaxed">
                Find your taste in cozy atmosphere. Comfort and light conversations while savoring coffee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="relative w-full py-16 md:py-24 bg-[#FF5A2E] overflow-hidden">
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 bottom-0 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />

        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <p className="text-white/70 text-sm uppercase tracking-widest font-semibold mb-2">
                Customer Favorites
              </p>
              <h2
                className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none"
                style={{ fontFamily: 'Onest, Arial, sans-serif' }}
              >
                BEST
                <br />
                SELLER
              </h2>
            </div>
            <p className="text-white/80 max-w-xs text-sm md:text-base">
              Start your day with a special delight — our most loved picks.
            </p>
          </div>

          <div className="menu-bestseller-grid">
            {storeBestsellers.map((item) => (
              <div
                key={item.id}
                className="menu-card group bg-white rounded-[24px] md:rounded-[28px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block bg-[#FF5A2E]/10 text-[#FF5A2E] text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-2">
                    Best Seller
                  </span>
                  <h3 className="font-bold text-[#111] text-lg mb-1">{item.name}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">{item.description}</p>
                  <p className="font-black text-[#FF5A2E] text-lg">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Menu Grid */}
      <section id="menu-explore-section" className="relative w-full py-16 md:py-28 bg-white">
        <div className="absolute top-0 left-0 w-48 h-48 bg-[#FF5A2E] opacity-[0.04] rounded-br-full pointer-events-none" />

        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="menu-explore-hero">
            <div className="menu-explore-hero-text">
              <h2
                className="text-5xl md:text-7xl font-black text-[#111] uppercase tracking-tighter leading-none mb-4"
                style={{ fontFamily: 'Onest, Arial, sans-serif' }}
              >
                EXPLORE
                <br />
                <span className="text-[#FF5A2E]">MENU</span>
              </h2>
              <p className="text-gray-500 max-w-md text-base">
                Pick your store and find your taste in a cozy atmosphere.
              </p>
            </div>

            <div className="menu-store-picker">
              <div className="menu-store-picker-bg">
                <img src={selectedStore.image} alt={selectedStore.name} />
                <div className="menu-store-picker-gradient" />
              </div>
              <div className="menu-store-picker-content">
                <div className="menu-store-picker-info">
                  <h3 className="menu-store-picker-name">{selectedStore.name}</h3>
                </div>
                <div className="menu-store-dropdown-wrap">
                  <span className="menu-store-dropdown-label">Selected Location</span>
                  <button
                    type="button"
                    className="menu-store-select"
                    aria-expanded={isStoreDropdownOpen}
                    aria-controls="menu-store-options"
                    onClick={() => setIsStoreDropdownOpen((isOpen) => !isOpen)}
                  >
                    <span>{selectedStore.shortName}</span>
                  </button>
                  {isStoreDropdownOpen && (
                    <div id="menu-store-options" className="menu-store-options" role="listbox">
                      {STORES.map((store) => (
                        <button
                          key={store.id}
                          type="button"
                          role="option"
                          aria-selected={activeStore === store.id}
                          className={`menu-store-option ${activeStore === store.id ? 'is-active' : ''}`}
                          onClick={() => handleStoreChange(store.id)}
                        >
                          <span className="menu-store-option-name">{store.name}</span>
                          <span className="menu-store-option-meta">{store.shortName}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="menu-filter-row mb-10 md:mb-14">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border-2 whitespace-nowrap
                  ${
                    activeCategory === cat.id
                      ? 'bg-[#FF5A2E] text-white border-[#FF5A2E] shadow-sm'
                      : 'bg-[#F7F7F7] text-[#111] border-transparent hover:border-[#FF5A2E] hover:text-[#FF5A2E]'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="menu-items-grid">
            {visibleItems.map((item) => (
              <article
                key={item.id}
                className="menu-card group flex flex-col bg-[#F7F7F7] rounded-[28px] md:rounded-[32px] overflow-hidden border border-[#E8E8E8] hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#FF5A2E] text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full">
                    {item.category === 'non-coffee' ? 'Non-Coffee' : item.category}
                  </span>
                  {item.bestseller && (
                    <span className="absolute top-4 right-4 bg-[#111] text-white text-xs font-bold uppercase px-3 py-1.5 rounded-full">
                      ★ Top Pick
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-black text-[#111] text-xl uppercase tracking-tight mb-2">{item.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#E8E8E8]">
                    <span className="font-black text-[#FF5A2E] text-xl">{item.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {hasMoreItems && (
            <div className="menu-see-more-wrap">
              <button
                type="button"
                onClick={() => setShowAllMenu(true)}
                className="menu-see-more-btn"
              >
                See More Menu
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          )}

          {filteredItems.length === 0 && (
            <p className="text-center text-gray-400 py-16 text-lg">No items in this category yet.</p>
          )}
        </div>
      </section>

      {/* Seasonal Highlight */}
      <section className="relative w-full py-16 md:py-24 bg-[#F7F7F7]">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="menu-seasonal-row">
            <div className="relative">
              <p
                className="absolute -top-4 -left-2 md:-left-6 text-[5rem] md:text-[8rem] font-black uppercase text-[#FF5A2E]/10 leading-none pointer-events-none select-none"
                style={{ fontFamily: 'Onest, Arial, sans-serif' }}
                aria-hidden
              >
                MORE
              </p>
              <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden aspect-[4/5] max-h-[560px] shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a3617e7440374ece8d54c3_Snapinst.app_461962559_1266045421079701_9221845444617685883_n_1080.jpg"
                  alt="Seasonal menu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <span className="inline-block bg-[#FF5A2E] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                Monthly Special
              </span>
              <h2
                className="text-4xl md:text-6xl font-black text-[#111] uppercase tracking-tight leading-none mb-6"
                style={{ fontFamily: 'Onest, Arial, sans-serif' }}
              >
                SEASONAL
                <br />
                PICKS
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                Fresh flavors rotate every month. Come back often — there&apos;s always something new to try at MORE.
              </p>
              <button
                type="button"
                onClick={() => {
                  handleCategoryChange('seasonal');
                  document.getElementById('menu-explore-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="menu-seasonal-button inline-flex items-center gap-2 bg-[#111] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#FF5A2E] transition-colors"
              >
                View Seasonal Menu
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-20 md:py-28 bg-[#FF5A2E] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <p
            className="text-[12vw] font-black text-white uppercase whitespace-nowrap leading-none mt-8"
            style={{ fontFamily: 'Onest, Arial, sans-serif' }}
            aria-hidden
          >
            MORE MENU MORE MENU
          </p>
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 text-center">
          <p className="text-white/70 uppercase tracking-widest text-sm font-semibold mb-4">
            Ready to visit?
          </p>
          <h2
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 leading-tight"
            style={{ fontFamily: 'Onest, Arial, sans-serif' }}
          >
            Find your taste
            <br />
            in cozy atmosphere!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/store"
              className="inline-flex items-center justify-center bg-[#111] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#111] transition-colors"
            >
              Our Store
            </Link>
            <Link
              href="/about-us"
              className="menu-cta-secondary inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-[#111] transition-colors"
            >
              Explore More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
