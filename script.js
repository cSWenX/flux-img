// 博客文章数据
const blogPosts = [
    {
        id: 1,
        title: "现代Web开发趋势",
        excerpt: "探讨2024年Web开发的最新趋势，包括AI集成、性能优化和用户体验设计的新方向。",
        date: "2024-01-15",
        category: "技术",
        icon: "fas fa-code"
    },
    {
        id: 2,
        title: "CSS Grid布局完全指南",
        excerpt: "深入理解CSS Grid布局系统，从基础概念到高级技巧，打造响应式网页设计。",
        date: "2024-01-10",
        category: "前端",
        icon: "fas fa-palette"
    },
    {
        id: 3,
        title: "JavaScript异步编程最佳实践",
        excerpt: "掌握async/await、Promise和回调函数的使用技巧，提升代码的可读性和维护性。",
        date: "2024-01-05",
        category: "编程",
        icon: "fas fa-js"
    },
    {
        id: 4,
        title: "用户体验设计原则",
        excerpt: "探讨优秀用户体验设计的核心原则，如何创造直观、易用的数字产品。",
        date: "2024-01-01",
        category: "设计",
        icon: "fas fa-user-check"
    },
    {
        id: 5,
        title: "React Hooks深度解析",
        excerpt: "深入理解React Hooks的工作原理，掌握自定义Hook的开发技巧。",
        date: "2023-12-28",
        category: "React",
        icon: "fab fa-react"
    },
    {
        id: 6,
        title: "网站性能优化策略",
        excerpt: "从加载速度到用户体验，全面了解网站性能优化的关键策略和工具。",
        date: "2023-12-25",
        category: "性能",
        icon: "fas fa-tachometer-alt"
    }
];

// DOM元素
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const blogGrid = document.getElementById('blogGrid');
const contactForm = document.getElementById('contactForm');

// 移动端导航菜单切换
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 点击导航链接时关闭移动端菜单
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 平滑滚动到锚点
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

// 渲染博客文章
function renderBlogPosts() {
    blogGrid.innerHTML = '';
    
    blogPosts.forEach((post, index) => {
        const postElement = document.createElement('article');
        postElement.className = 'blog-card';
        postElement.style.animationDelay = `${index * 0.1}s`;
        
        const formattedDate = new Date(post.date).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        postElement.innerHTML = `
            <div class="blog-image">
                <i class="${post.icon}"></i>
            </div>
            <div class="blog-content">
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-meta">
                    <div class="blog-date">
                        <i class="fas fa-calendar"></i>
                        <span>${formattedDate}</span>
                    </div>
                    <span class="blog-category">${post.category}</span>
                </div>
            </div>
        `;
        
        // 添加点击事件
        postElement.addEventListener('click', () => {
            showBlogPost(post);
        });
        
        blogGrid.appendChild(postElement);
    });
}

// 显示博客文章详情
function showBlogPost(post) {
    const modal = document.createElement('div');
    modal.className = 'blog-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${post.title}</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="post-meta">
                        <span class="post-date">
                            <i class="fas fa-calendar"></i>
                            ${new Date(post.date).toLocaleDateString('zh-CN')}
                        </span>
                        <span class="post-category">${post.category}</span>
                    </div>
                    <div class="post-content">
                        <p>${post.excerpt}</p>
                        <p>这里是文章的详细内容。在实际应用中，您可以在这里添加完整的文章内容，包括图片、代码示例等。</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 关闭模态框
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(modal);
        }
    });
}

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 活跃导航链接高亮
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
});

// 联系表单处理
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // 简单的表单验证
    if (!name || !email || !message) {
        showNotification('请填写所有必填字段', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('请输入有效的邮箱地址', 'error');
        return;
    }
    
    // 模拟表单提交
    showNotification('消息发送中...', 'info');
    
    setTimeout(() => {
        showNotification('消息发送成功！我们会尽快回复您。', 'success');
        contactForm.reset();
    }, 2000);
});

// 邮箱验证
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 显示通知
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // 根据类型设置背景色
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6'
    };
    
    notification.style.background = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 添加模态框样式
const modalStyles = `
    .blog-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
    }
    
    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
    
    .modal-content {
        background: white;
        border-radius: 12px;
        max-width: 600px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }
    
    .modal-header {
        padding: 1.5rem;
        border-bottom: 1px solid #e5e7eb;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .modal-header h2 {
        margin: 0;
        color: #1f2937;
    }
    
    .modal-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #6b7280;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease;
    }
    
    .modal-close:hover {
        background: #f3f4f6;
        color: #374151;
    }
    
    .modal-body {
        padding: 1.5rem;
    }
    
    .post-meta {
        display: flex;
        gap: 1rem;
        margin-bottom: 1.5rem;
        font-size: 0.875rem;
        color: #6b7280;
    }
    
    .post-date {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .post-category {
        background: #2563eb;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.75rem;
    }
    
    .post-content p {
        margin-bottom: 1rem;
        line-height: 1.7;
        color: #4b5563;
    }
    
    @media (max-width: 768px) {
        .modal-content {
            margin: 20px;
            max-height: calc(100vh - 40px);
        }
    }
`;

// 添加样式到页面
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
    
    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    // ESC键关闭模态框
    if (e.key === 'Escape') {
        const modal = document.querySelector('.blog-modal');
        if (modal) {
            document.body.removeChild(modal);
        }
    }
});

// 添加滚动到顶部功能
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #2563eb;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
    z-index: 1000;
`;

document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'translateY(-3px)';
    scrollToTopBtn.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'translateY(0)';
    scrollToTopBtn.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
}); 