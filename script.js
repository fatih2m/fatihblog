// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.getElementById('blogModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

// Blog content data
const blogPosts = {
    1: {
        title: "Yazılım Dünyasındaki Gelişmeler",
        date: "27 Temmuz 2025",
        category: "Yazılım",
        content: `
            <h2>Yazılım Dünyasındaki Gelişmeler</h2>
            <p class="blog-meta">27 Temmuz 2025 | Yazılım</p>
            <p>Modern web teknolojileri her geçen gün daha da gelişiyor. React, Vue.js, Angular gibi framework'ler artık web geliştirmenin vazgeçilmez parçaları haline geldi. Ancak bazen en basit teknolojiler en etkili olanlar olabiliyor.</p>
            
            <h3>Vanilla JavaScript'in Gücü</h3>
            <p>Framework'ler harika araçlar olsa da, bazen sadece HTML, CSS ve JavaScript kullanarak da muhteşem projeler ortaya çıkarabiliriz. Bu yaklaşım hem performans hem de öğrenme açısından çok değerli.</p>
            
            <h3>Gelecekte Bizi Neler Bekliyor?</h3>
            <p>WebAssembly, Progressive Web Apps (PWA) ve yapay zeka entegrasyonları web geliştirmenin geleceğini şekillendiriyor. Bu teknolojileri öğrenmek ve projelerimizde kullanmak biz yazılımcılar için büyük fırsatlar sunuyor.</p>
            
            <h3>Öğrenme Sürecim</h3>
            <p>Kendi projelerimde bu teknolojileri kullanmaya başladım ve sonuçlar gerçekten etkileyici. Özellikle PWA teknolojisi ile mobil uygulama benzeri deneyimler sunabiliyoruz.</p>
            
            <p>Yazılım dünyası sürekli değişiyor ve biz de bu değişime ayak uydurmalıyız. Ancak temel prensipleri unutmadan, her yeni teknolojiyi doğru yerlerde kullanmayı öğrenmeliyiz.</p>
        `
    },
    2: {
        title: "Spor ve Yazılımcı Yaşamı",
        date: "25 Temmuz 2025",
        category: "Spor",
        content: `
            <h2>Spor ve Yazılımcı Yaşamı</h2>
            <p class="blog-meta">25 Temmuz 2025 | Spor</p>
            <p>Uzun saatler bilgisayar başında çalışan yazılımcılar olarak, fiziksel sağlığımızı korumak çok önemli. Spor yapmak sadece vücut sağlığımız için değil, zihinsel performansımız için de kritik.</p>
            
            <h3>Günlük Rutinim</h3>
            <p>Her sabah 30 dakika egzersiz yapmaya çalışıyorum. Bu süre bazen koşu, bazen de evde yapılan basit egzersizler olabiliyor. Bu rutin gün boyu enerjik kalmamı sağlıyor.</p>
            
            <h3>Mental Sağlık</h3>
            <p>Spor yapmak stres seviyemi düşürüyor ve problem çözme yeteneğimi artırıyor. Özellikle kod yazarken takıldığım noktalarda, kısa bir yürüyüş yapmak çözüm bulmama yardımcı oluyor.</p>
            
            <h3>Beslenme</h3>
            <p>Sağlıklı beslenme de yazılımcı yaşamının önemli bir parçası. Düzenli öğünler ve yeterli su tüketimi konsantrasyonumu artırıyor.</p>
            
            <h3>Önerilerim</h3>
            <p>Eğer spor yapmaya yeni başlıyorsanız, küçük adımlarla başlayın. Günde 10-15 dakika bile olsa, düzenli olarak yapın. Zamanla bu süreyi artırabilirsiniz.</p>
            
            <p>Unutmayın, sağlıklı bir vücut sağlıklı bir zihin demektir. Yazılımcı olarak en büyük sermayemiz beynimiz, onu korumak bizim elimizde.</p>
        `
    },
    3: {
        title: "Girişimcilik Yolculuğum",
        date: "23 Temmuz 2025",
        category: "Girişimcilik",
        content: `
            <h2>Girişimcilik Yolculuğum</h2>
            <p class="blog-meta">23 Temmuz 2025 | Girişimcilik</p>
            <p>Kendi işimi kurma hayali beni her gün daha da heyecanlandırıyor. Bu yolculukta öğrendiğim dersler ve karşılaştığım zorluklar beni daha güçlü kılıyor.</p>
            
            <h3>İlk Adımlar</h3>
            <p>Girişimcilik yolculuğuma küçük projelerle başladım. Freelance işler yaparak hem deneyim kazandım hem de network oluşturdum. Bu süreç bana pazarın ihtiyaçlarını anlamamı sağladı.</p>
            
            <h3>Öğrendiğim Dersler</h3>
            <p>En önemli derslerden biri, mükemmeliyetçilik tuzağına düşmemek oldu. Bazen iyi bir ürün, mükemmel bir üründen daha değerli olabiliyor. Hızlı prototipleme ve kullanıcı geri bildirimi çok önemli.</p>
            
            <h3>Zorluklar</h3>
            <p>Finansal kaynak bulmak, doğru ekibi kurmak ve pazarlama stratejileri geliştirmek en büyük zorluklarım oldu. Ancak her zorluk yeni bir öğrenme fırsatı.</p>
            
            <h3>Gelecek Planları</h3>
            <p>Önümüzdeki aylarda kendi yazılım şirketimi kurmayı planlıyorum. Web geliştirme ve mobil uygulama alanlarında hizmet vereceğim. Hedefim, kaliteli ve kullanıcı dostu ürünler geliştirmek.</p>
            
            <h3>Motivasyon</h3>
            <p>Başarılı girişimcilerin hikayelerini okumak ve onlardan ilham almak beni motive ediyor. Her başarısızlık bir öğrenme fırsatı ve her başarı yeni bir hedef.</p>
            
            <p>Girişimcilik yolculuğu zorlu ama heyecan verici. Bu yolda öğrendiklerimi paylaşmaya devam edeceğim.</p>
        `
    }
};

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all elements with slide-up class
document.addEventListener('DOMContentLoaded', () => {
    const slideUpElements = document.querySelectorAll('.slide-up');
    slideUpElements.forEach(el => {
        observer.observe(el);
    });
});

// Blog Modal Functions
function openBlogModal(postId) {
    const post = blogPosts[postId];
    if (post) {
        modalContent.innerHTML = post.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Contact Form Handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Lütfen tüm alanları doldurun.');
        return;
    }
    
    // Show success message
    successMessage.style.display = 'block';
    
    // Hide success message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
    
    // Reset form
    contactForm.reset();
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Parallax effect for stars
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const stars = document.querySelector('.stars');
    if (stars) {
        stars.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
});

// Add hover effects to project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #00ff88 !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
    body.loaded {
        opacity: 1;
    }
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(style); 