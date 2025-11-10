// Toàn bộ nội dung tệp search_results.js

document.addEventListener('DOMContentLoaded', () => {
    // Lấy dữ liệu từ sessionStorage
    const resultsJSON = sessionStorage.getItem('searchResults');
    const query = sessionStorage.getItem('searchQuery');
    const location = sessionStorage.getItem('searchLocation');

    const resultsContainer = document.getElementById('full-results-container');
    const titleElement = document.getElementById('search-results-title');

    // Cập nhật tiêu đề trang
    if (titleElement) {
        if (query) {
            titleElement.textContent = `Kết quả cho "${query}" ${location ? 'ở "' + location + '"' : ''}`;
        } else {
            titleElement.textContent = "Toàn bộ kết quả";
        }
    }

    if (resultsJSON && resultsContainer) {
        const results = JSON.parse(resultsJSON);

        if (results.length > 0) {
            // Lặp qua TOÀN BỘ danh sách kết quả và hiển thị
            results.forEach(resto => {
                
                // --- LOGIC MỚI: XỬ LÝ LINK WEBSITE & GOOGLE MAPS ---
                const websiteUrl = resto.website;
                const placeId = resto.place_id;
                let targetHref = '';

                // Ưu tiên 1: Kiểm tra link website/fanpage
                if (websiteUrl && websiteUrl !== 'N/A' && (websiteUrl.startsWith('http://') || websiteUrl.startsWith('https://'))) {
                    targetHref = websiteUrl;
                } 
                // Ưu tiên 2 (Dự phòng): Dùng link Google Maps bằng place_id
                else {
                    targetHref = `https://www.google.com/maps/place/?q=place_id:${placeId}`;
                }
                
                // Luôn mở trong tab mới
                const targetBlank = 'target="_blank" rel="noopener noreferrer"';
                // --- KẾT THÚC LOGIC MỚI ---

                // Xử lý ảnh
                const photo_url = resto.photo_url && resto.photo_url !== 'N/A' 
                                  ? resto.photo_url 
                                  : "assets/modal-resto-placeholder.jpg";
                
                // Chuyển đổi điểm số
                const overallScore = (parseFloat(resto.Overall_Recommendation_Score) * 100).toFixed(1);

                // Tạo thẻ card
                const card = document.createElement('div');
                card.className = "bg-dark-card rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-1";

                card.innerHTML = `
                    <a href="${targetHref}" ${targetBlank}>
                        <img src="${photo_url}" 
                             alt="${resto.name}" 
                             class="w-full h-48 object-cover"
                             onerror="this.src='assets/modal-resto-placeholder.jpg'">
                        <div class="p-4">
                            <h3 class="text-lg font-bold text-dark-text-primary truncate" title="${resto.name}">${resto.name}</h3>
                            <p class="text-dark-text-secondary text-sm mt-1">${overallScore} FoodiePro</p>
                        </div>
                    </a>
                `;
                resultsContainer.appendChild(card);
            });
        } else {
            resultsContainer.innerHTML = '<p class="text-dark-text-secondary text-center col-span-full">Không tìm thấy kết quả nào.</p>';
        }
    } else {
        // Xử lý trường hợp người dùng truy cập trực tiếp vào trang mà không tìm kiếm
        if (titleElement) titleElement.textContent = "Vui lòng thực hiện tìm kiếm";
        if (resultsContainer) resultsContainer.innerHTML = '<p class="text-dark-text-secondary text-center col-span-full">Hãy quay về trang chủ để tìm kiếm.</p>';
    }
});