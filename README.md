# 个人博客网站

一个简洁、现代化的个人博客网站，使用HTML、CSS和JavaScript开发。

## 功能特点

### 🎨 现代化设计
- 响应式布局，适配各种设备
- 渐变背景和毛玻璃效果
- 流畅的动画和过渡效果
- 现代化的配色方案

### 📱 响应式设计
- 移动端友好的导航菜单
- 自适应网格布局
- 触摸友好的交互元素

### 📝 博客功能
- 文章列表展示
- 文章分类和日期显示
- 动态文章加载
- 文章详情模态框

### 👤 个人介绍
- 关于我页面
- 技能标签展示
- 个人头像区域

### 📧 联系功能
- 联系表单
- 社交媒体链接
- 表单验证

## 文件结构

```
flux-img/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
└── README.md           # 说明文档
```

## 使用方法

1. **直接打开**
   - 双击 `index.html` 文件在浏览器中打开
   - 或使用本地服务器（推荐）

2. **使用本地服务器**
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 使用Node.js
   npx serve .
   
   # 使用Live Server (VS Code扩展)
   ```

3. **访问网站**
   - 打开浏览器访问 `http://localhost:8000`

## 自定义配置

### 修改个人信息
在 `index.html` 中修改以下内容：
- 博客标题
- 个人介绍
- 联系信息
- 社交媒体链接

### 添加博客文章
在 `script.js` 中的 `blogPosts` 数组中添加新文章：

```javascript
{
    id: 7,
    title: "文章标题",
    excerpt: "文章摘要",
    date: "2024-01-20",
    category: "分类",
    icon: "fas fa-icon-name"
}
```

### 修改样式
在 `styles.css` 中自定义：
- 颜色主题
- 字体样式
- 布局尺寸
- 动画效果

## 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript ES6+** - 交互功能
- **Font Awesome** - 图标库
- **Google Fonts** - 字体

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 性能优化

- 使用CDN加载外部资源
- 优化的CSS和JavaScript
- 响应式图片
- 平滑滚动和动画

## 未来计划

- [ ] 添加文章搜索功能
- [ ] 实现文章评论系统
- [ ] 添加深色模式
- [ ] 集成CMS系统
- [ ] 添加SEO优化

## 许可证

MIT License - 可自由使用和修改

## 贡献

欢迎提交Issue和Pull Request来改进这个项目！

---

**享受您的博客之旅！** 🚀 