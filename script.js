// 语言切换功能
let currentLang = 'en';

document.getElementById('langBtn').addEventListener('click', function() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    switchLanguage(currentLang);
    this.textContent = currentLang === 'en' ? '中文' : 'English';
    
    // 保存用户选择
    localStorage.setItem('preferredLang', currentLang);
});

function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-en][data-zh]');
    elements.forEach(el => {
        const text = el.getAttribute('data-' + lang);
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = text;
        } else if (el.tagName === 'OPTION') {
            el.textContent = text;
        } else {
            el.innerHTML = text;
        }
    });
    
    // 更新表单placeholder
    const inputs = document.querySelectorAll('input[data-placeholder-en], textarea[data-placeholder-en]');
    inputs.forEach(input => {
        const placeholder = input.getAttribute('data-placeholder-' + lang);
        if (placeholder) {
            input.placeholder = placeholder;
        }
    });
}

// 页面加载时检查用户偏好
window.addEventListener('load', function() {
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && savedLang === 'zh') {
        currentLang = 'zh';
        switchLanguage('zh');
        document.getElementById('langBtn').textContent = 'English';
    }
    
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// 表单提交处理
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 这里可以集成你的表单提交逻辑
    // 例如：发送到后端API、Google Sheets、或邮件服务
    
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    this.reset();
});

// 平滑滚动到联系表单
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});
