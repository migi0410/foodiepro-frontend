// --- Bắt đầu tệp script.js ---

const translations = {
    'vi': {
        'page.title': 'FoodiePro',
        'nav.home': 'Trang chủ',
        'nav.recommend': 'Nhà hàng đề xuất',
        'nav.about': 'Về chúng tôi',
        'nav.faq': 'FAQ',
        'nav.contact': 'Liên hệ',
        'nav.signin': 'Đăng Nhập',
        'nav.signup': 'Đăng Ký',
        'hero.line1.part1': 'ĂN',
        'hero.line1.part2': 'CHUẨN GU',
        'hero.line2.part1': 'ĐU',
        'hero.line2.part2': 'CHUẨN Ý',
        'hero.description': 'Nhập món ăn, nhà hàng, hoặc loại ẩm thực bạn muốn tìm trong khu vực của mình.',
        'placeholder.location': 'Nhập địa chỉ của bạn...',
        'placeholder.search': 'Món bạn muốn ăn...',
        'popular.title': 'Ẩm Thực Nổi Bật',
        'popular.item1': 'Việt Nam',
        'popular.item2': 'Hàn Quốc',
        'popular.item3': 'Nhật Bản',
        'howitworks.title': 'Tìm Kiếm Dễ Dàng',
        'howitworks.step1.title': '1. Tìm Kiếm',
        'howitworks.step1.desc': 'Nhập địa điểm và món ăn bạn đang thèm.',
        'howitworks.step2.title': '2. Lựa Chọn',
        'howitworks.step2.desc': 'Xem các gợi ý, đọc đánh giá từ cộng đồng.',
        'howitworks.step3.title': '3. Khám Phá',
        'howitworks.step3.desc': 'Thưởng thức bữa ăn tuyệt vời và đừng quên để lại đánh giá!',
        'modal.title': 'Gợi Ý Dành Cho Bạn',
        'modal.viewMoreBtn': 'Xem Thêm Kết Quả',
        'footer.tagline': 'Cẩm nang của những tín đồ ẩm thực',
        'footer.mainTitle': 'CHÍNH',
        'footer.supportTitle': 'HỖ TRỢ',
        'footer.terms': 'Điều khoản & Điều kiện',
        'footer.privacy': 'Chính sách bảo mật',
        'footer.socialsTitle': 'MẠNG XÃ HỘI',
        'footer.copyright': '© 2025 FoodiePro. Bảo lưu mọi quyền.'
    },
    'en': {
        'page.title': 'FoodiePro - Discover Cuisines',
        'nav.home': 'Home',
        'nav.recommend': 'Recommendations',
        'nav.about': 'About Us',
        'nav.faq': 'FAQ',
        'nav.contact': 'Contact',
        'nav.signin': 'Sign In',
        'nav.signup': 'Sign Up',
        'hero.line1.part1': 'EAT',
        'hero.line1.part2': 'YOUR WAY',
        'hero.line2.part1': 'FIND',
        'hero.line2.part2': 'YOUR TASTE',
        'hero.description': 'Enter the dish, restaurant, or cuisine you want to find in your area.',
        'placeholder.location': 'Enter your location...',
        'placeholder.search': 'What do you want to eat...',
        'popular.title': 'Popular Food',
        'popular.item1': 'Vietnamese',
        'popular.item2': 'Korean',
        'popular.item3': 'Japanese',
        'howitworks.title': 'Easy Searching',
        'howitworks.step1.title': '1. Search',
        'howitworks.step1.desc': 'Enter the location and dish you are craving.',
        'howitworks.step2.title': '2. Choose',
        'howitworks.step2.desc': 'View suggestions, read community reviews.',
        'howitworks.step3.title': '3. Explore',
        'howitworks.step3.desc': 'Enjoy your amazing meal and don\'t forget to leave a review!',
        'modal.title': 'Suggestions For You',
        'modal.viewMoreBtn': 'View More Results',
        'footer.tagline': 'A handbook for food lovers',
        'footer.mainTitle': 'MAIN',
        'footer.supportTitle': 'SUPPORT',
        'footer.terms': 'Terms & Condition',
        'footer.privacy': 'Privacy Policy',
        'footer.socialsTitle': 'SOCIALS',
        'footer.copyright': '© 2025 FoodiePro. All Rights Reserved.'
    }
};

// --- DOM Elements ---
const btnVi = document.getElementById('btn-vi');
const btnEn = document.getElementById('btn-en');
const elementsToTranslate = document.querySelectorAll('[data-key]');
const inputLocation = document.getElementById('input-location');
const inputSearch = document.getElementById('input-search');
const pageTitle = document.querySelector('title');
const htmlTag = document.documentElement;

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuCloseButton = document.getElementById('mobile-menu-close-button');
const overlay = document.getElementById('overlay');

const searchButton = document.getElementById('search-button');
const modal = document.getElementById('recommendation-modal');
const closeModalButton = document.getElementById('modal-close-button');
const modalResultsContainer = document.getElementById('modal-results-container');
const modalLoading = document.getElementById('modal-loading');
const modalMessage = document.getElementById('modal-message');
const modalViewMoreContainer = document.getElementById('modal-view-more-container'); // Nút "Xem Thêm"

// --- Language Function ---
function setLanguage(lang) {
    if (btnVi && btnEn) {
        if (lang === 'vi') {
            btnVi.classList.add('bg-yellow-400', 'text-black');
            btnVi.classList.remove('text-white', 'hover:bg-gray-700');
            btnEn.classList.add('text-white', 'hover:bg-gray-700');
            btnEn.classList.remove('bg-yellow-400', 'text-black');
        } else {
            btnEn.classList.add('bg-yellow-400', 'text-black');
            btnEn.classList.remove('text-white', 'hover:bg-gray-700');
            btnVi.classList.add('text-white', 'hover:bg-gray-700');
            btnVi.classList.remove('bg-yellow-400', 'text-black');
        }
    }

    elementsToTranslate.forEach(element => {
        const key = element.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            if (mobileMenu && mobileMenu.contains(element)) {
                const mobileElement = mobileMenu.querySelector(`[data-key="${key}"]`);
                if (mobileElement) {
                    mobileElement.textContent = translations[lang][key];
                }
            }
            if (!mobileMenu || !mobileMenu.contains(element) || element.placeholder) {
                if (element.placeholder && key.includes('placeholder')) {
                    element.placeholder = translations[lang][key];
                } else if (element.tagName !== 'INPUT' && element.tagName !== 'TEXTAREA') {
                    element.textContent = translations[lang][key];
                }
            }
        }
    });

    if (inputLocation) inputLocation.placeholder = translations[lang]['placeholder.location'];
    if (inputSearch) inputSearch.placeholder = translations[lang]['placeholder.search'];
    if (pageTitle) pageTitle.textContent = translations[lang]['page.title'];

    htmlTag.setAttribute('lang', lang);
    localStorage.setItem('language', lang);
}

// --- Mobile Menu Functions ---
function openMobileMenu() {
    if (mobileMenu && overlay) {
        overlay.classList.remove('hidden');
        overlay.offsetWidth;
        overlay.classList.remove('opacity-0');
        mobileMenu.classList.remove('translate-x-full');
    }
}

function closeMobileMenu() {
    if (mobileMenu && overlay) {
        overlay.classList.add('opacity-0');
        mobileMenu.classList.add('translate-x-full');
        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 300);
    }
}

// --- Modal Functions ---
function openModal() {
    if (modal && overlay) {
        overlay.classList.remove('hidden');
        overlay.offsetWidth; // Trigger reflow
        overlay.classList.remove('opacity-0');

        modal.classList.remove('hidden');
        modal.offsetWidth; // Trigger reflow
        modal.classList.remove('opacity-0');
    }
}

function closeModal() {
    if (modal && overlay) {
        modal.classList.add('opacity-0');
        overlay.classList.add('opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }, 300);
    }
}

// --- Event Listeners ---
if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', openMobileMenu);
}
if (mobileMenuCloseButton) {
    mobileMenuCloseButton.addEventListener('click', closeMobileMenu);
}
if (overlay) {
    overlay.addEventListener('click', () => {
        closeMobileMenu();
        closeModal(); // Đóng cả modal nếu đang mở
    });
}
if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

if (btnVi) {
    btnVi.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('vi');
    });
}
if (btnEn) {
    btnEn.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('en');
    });
}

if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) { // Chỉ đóng khi click trực tiếp vào nền modal
            closeModal();
        }
    });
}

// --- On Page Load ---
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('font-sans');
    const savedLang = localStorage.getItem('language') || 'vi';
    setLanguage(savedLang);

    const logoImg = document.querySelector('header img');
    if (logoImg && logoImg.classList.contains('h-13')) {
        logoImg.classList.remove('h-13');
        logoImg.classList.add('h-[3.5rem]', 'sm:h-[4rem]', 'lg:h-[5rem]');
    }
});

// --- API Search Logic (ĐÃ CẬP NHẬT) ---
searchButton.addEventListener('click', async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định

    const location = inputLocation.value.trim();
    const query = inputSearch.value.trim();
    const currentLang = localStorage.getItem('language') || 'vi';

    if (!query && !location) {
        alert(translations[currentLang]['hero.description']);
        return;
    }

    // Chuẩn bị modal
    modalResultsContainer.innerHTML = ''; // Xóa kết quả cũ
    modalMessage.classList.add('hidden');
    modalViewMoreContainer.classList.add('hidden'); // Ẩn nút "Xem thêm"
    modalLoading.classList.remove('hidden');
    modalLoading.classList.add('flex');
    openModal(); // Mở modal

    try {
        // SỬA ĐỔI: Cập nhật URL sang cổng 8000 của FastAPI
        const response = await fetch('https://foodiepro-v1.onrender.com//recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: query, location: location })
        });
        const data = await response.json(); // 'data' là danh sách đã xếp hạng

        if (!response.ok) {
            // Nếu server trả về lỗi (ví dụ: 500) hoặc lỗi do Pydantic
            // 'data.detail' là lỗi Pydantic, 'data.error' là lỗi chúng ta tự định nghĩa
            const errorMessage = data.detail || data.error || 'Lỗi server';
            throw new Error(errorMessage);
        }

        modalLoading.classList.add('hidden'); // Ẩn loader
        modalLoading.classList.remove('flex');

        if (data.message) { // Nếu backend trả về message (ví dụ: không tìm thấy)
            modalMessage.textContent = data.message;
            modalMessage.classList.remove('hidden');
        } else if (data.length > 0) { // Có kết quả
            // SỬA ĐỔI: Logic lưu trữ và hiển thị
            
            // 1. Lưu TOÀN BỘ kết quả vào sessionStorage cho trang 'search_results.html'
            sessionStorage.setItem('searchResults', JSON.stringify(data));
            sessionStorage.setItem('searchQuery', query);
            sessionStorage.setItem('searchLocation', location);

            // 2. Chỉ lấy 6 kết quả đầu tiên để hiển thị trong modal
            const modalResults = data.slice(0, 6);
            displayResultsInModal(modalResults);

            // 3. Chỉ hiển thị nút "Xem Thêm" nếu có NHIỀU HƠN 6 kết quả
            if (data.length > 6) {
                modalViewMoreContainer.classList.remove('hidden');
            } else {
                modalViewMoreContainer.classList.add('hidden');
            }

        } else { // Không có kết quả nào (mảng rỗng)
            modalMessage.textContent = 'Không tìm thấy nhà hàng nào phù hợp với yêu cầu của bạn.';
            modalMessage.classList.remove('hidden');
        }

    } catch (error) {
        console.error('❌ Lỗi khi gọi API:', error);
        modalLoading.classList.add('hidden'); // Ẩn loader
        modalLoading.classList.remove('flex');
        // Hiển thị thông báo lỗi thân thiện hơn
        modalMessage.textContent = 'Đã xảy ra lỗi khi tìm kiếm. Vui lòng thử lại sau.';
        modalMessage.classList.remove('hidden');
        modalViewMoreContainer.classList.add('hidden'); // Ẩn nút "Xem thêm" khi lỗi
    }
});

/**
 * SỬA ĐỔI: Hàm hiển thị kết quả an toàn (chống XSS)
 * Cập nhật để link đến website HOẶC Google Maps.
 * @param {Array} results - Mảng các đối tượng nhà hàng (tối đa 6).
 */
function displayResultsInModal(results) {
    modalResultsContainer.innerHTML = ''; // Xóa kết quả cũ

    results.forEach((resto) => {
        // Chuyển đổi điểm số
        const overallScore = (parseFloat(resto.Overall_Recommendation_Score) * 100).toFixed(1);
        
        // Xử lý ảnh
        const photo_url = resto.photo_url && resto.photo_url !== 'N/A' 
                          ? resto.photo_url 
                          : "assets/modal-resto-placeholder.jpg";
        
        // --- LOGIC MỚI: XỬ LÝ LINK WEBSITE & GOOGLE MAPS ---
        const websiteUrl = resto.website;
        const placeId = resto.place_id;
        let targetHref = ''; // Link cuối cùng

        // Ưu tiên 1: Kiểm tra link website/fanpage
        if (websiteUrl && websiteUrl !== 'N/A' && (websiteUrl.startsWith('http://') || websiteUrl.startsWith('https://'))) {
            targetHref = websiteUrl;
        } 
        // Ưu tiên 2 (Dự phòng): Dùng link Google Maps bằng place_id
        else {
            targetHref = `https://www.google.com/maps/place/?q=place_id:${placeId}`;
        }
        // --- KẾT THÚC LOGIC MỚI ---

        // 1. Tạo các phần tử
        const link = document.createElement('a');
        const img = document.createElement('img');
        const contentDiv = document.createElement('div');
        const title = document.createElement('h4');
        const scoreDiv = document.createElement('div');
        const scoreLabel = document.createElement('p');
        const scoreValue = document.createElement('p');

        // 2. Gán thuộc tính và nội dung AN TOÀN
        link.href = targetHref; // <-- SỬ DỤNG LINK MỚI
        link.target = "_blank"; // Luôn mở trong tab mới
        link.rel = "noopener noreferrer"; // Bảo mật
        link.className = "bg-dark-bg rounded-lg shadow overflow-hidden flex flex-col transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer";

        img.src = photo_url;
        img.alt = resto.name;
        img.className = "w-full h-32 object-cover";
        img.onerror = function() {
            this.src = 'assets/modal-resto-placeholder.jpg';
        };

        contentDiv.className = "p-3 flex flex-col flex-grow";
        
        title.className = "font-semibold text-dark-text-primary text-sm truncate";
        title.title = resto.name;
        title.textContent = resto.name;

        scoreDiv.className = "mt-2 flex-grow";
        
        scoreLabel.className = "text-xs text-dark-text-secondary";
        scoreLabel.textContent = "Điểm FoodiePro:";
        
        scoreValue.className = "text-lg font-bold text-primary-yellow";
        scoreValue.textContent = `${overallScore}%`;

        // 3. Gắn các phần tử lại với nhau
        scoreDiv.appendChild(scoreLabel);
        scoreDiv.appendChild(scoreValue);
        contentDiv.appendChild(title);
        contentDiv.appendChild(scoreDiv);
        link.appendChild(img);
        link.appendChild(contentDiv);

        // 4. Thêm card vào container
        modalResultsContainer.appendChild(link);
    });

    // Đảm bảo container thông báo bị ẩn
    modalMessage.classList.add('hidden');
}

// --- Kết thúc tệp script.js ---