// main.js - JavaScript chính cho trang web

document.addEventListener('DOMContentLoaded', function() {
    console.log('Louis Vuitton Clone - Trang web đã sẵn sàng');
    
    // Xử lý hiệu ứng cuộn cho Header
    const header = document.querySelector('header');
    let lastScrollPosition = 0;
    
    window.addEventListener('scroll', function() {
        const currentScrollPosition = window.pageYOffset;
        
        if (currentScrollPosition > 200) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
        
        lastScrollPosition = currentScrollPosition;
    });
    
    // Hiệu ứng cho menu mobile (cần thêm HTML cho toggle menu)
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Giả lập chức năng thêm vào giỏ hàng
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    if (addToCartButtons.length > 0) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Lấy thông tin sản phẩm từ data-attributes
                const productId = this.getAttribute('data-product-id');
                const productName = this.getAttribute('data-product-name');
                const productPrice = this.getAttribute('data-product-price');
                
                // Hiển thị thông báo
                alert(`Đã thêm ${productName} vào giỏ hàng!`);
                
                // Cập nhật số lượng giỏ hàng (giả lập)
                updateCartCount();
            });
        });
    }
    
    // Cập nhật số lượng giỏ hàng (giả lập)
    function updateCartCount() {
        const cartCountElement = document.querySelector('.cart-count');
        
        if (cartCountElement) {
            let currentCount = parseInt(cartCountElement.textContent, 10);
            cartCountElement.textContent = currentCount + 1;
        }
    }
    
    // Hiệu ứng hover cho sản phẩm
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
        
        // Chuyển hướng đến trang sản phẩm khi click
        card.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id') || '1';
            window.location.href = `/products/${productId}`;
        });
    });
    
    // Slider cho hero nếu có nhiều hình ảnh (tùy chọn)
    initHeroSlider();
});

// Khởi tạo slider đơn giản nếu có nhiều hình ảnh hero
function initHeroSlider() {
    const heroSlider = document.querySelector('.hero-slider');
    
    if (!heroSlider) return;
    
    const slides = heroSlider.querySelectorAll('.slide');
    const nextBtn = heroSlider.querySelector('.next-slide');
    const prevBtn = heroSlider.querySelector('.prev-slide');
    
    if (slides.length <= 1) return;
    
    let currentSlide = 0;
    
    // Hiển thị slide đầu tiên
    slides[0].classList.add('active');
    
    // Chuyển đến slide tiếp theo
    function goToNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Chuyển đến slide trước đó
    function goToPrevSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Thêm event listeners cho nút next và prev
    if (nextBtn) {
        nextBtn.addEventListener('click', goToNextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', goToPrevSlide);
    }
    
    // Tự động chuyển slide sau mỗi 5 giây
    setInterval(goToNextSlide, 5000);
}