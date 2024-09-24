document.addEventListener('DOMContentLoaded', () => {
    // 轮播图实现
    const carousel = document.querySelector('.carousel');
    const carouselItems = [
        { video: '1.mp4', title: '【练手】我的bilibili频道片头', url: 'https://www.bilibili.com/video/BV1RK4y1A7jH/' },
        { image: '1.jpg', title: '论怎样用24倍速写完一张英语试卷', url: 'https://www.bilibili.com/video/BV15b411C7YK/' },
        { image: '2.jpg', title: '一支vlog记录高三毕业那年的暑假(随意向', url: 'https://www.bilibili.com/video/BV1tf4y1L78u/' },
        { image: '3.jpg', title: '【图一乐教程】乐高循迹小车DIY-基于乐高头脑风暴', url: 'https://www.bilibili.com/video/BV1Tv411p7HY/' },
        { image: '4.jpg', title: '"有人还记得鹤观岛的这个小男孩吗"【原神演奏】【风物之诗琴】', url: 'https://www.bilibili.com/video/BV17U4y1m7x9/' },
        { image: '5.jpg', title: '你的流行摇滚比较钢门.mp4', url: 'https://www.bilibili.com/video/BV1Xm411675H/' },
        { image: '6.jpg', title: '【自留档】2023年原神海灯节限时任务全程', url: 'https://www.bilibili.com/video/BV1x84y177fg/' },
        { image: '7.jpg', title: '【音量诉讼】《合成马老C》这也能玩出BUG就离谱!', url: 'https://www.bilibili.com/video/BV15r4y1N7eG/' },
        { image: '8.jpg', title: '【可灵ai】当原神立绘动起来', url: 'https://www.bilibili.com/video/BV1WogreGELq/' }
    ];

    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        const item = carouselItems[index];
        const currentActive = carousel.querySelector('.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }

        if (item.video) {
            const videoElement = document.createElement('video');
            videoElement.controls = true;
            videoElement.autoplay = true;
            videoElement.classList.add('active');
            videoElement.innerHTML = `
                <source src="${item.video}" type="video/mp4">
                您的浏览器不支持视频标签。
            `;
            carousel.innerHTML = '';
            carousel.appendChild(videoElement);
            const titleElement = document.createElement('h3');
            titleElement.textContent = item.title;
            carousel.appendChild(titleElement);
            videoElement.addEventListener('ended', nextSlide);

            // 添加点击事件跳转到指定网址
            videoElement.addEventListener('click', () => {
                window.open(item.url, '_blank');
            });
        } else {
            const imgElement = document.createElement('img');
            imgElement.src = item.image;
            imgElement.alt = item.title;
            imgElement.classList.add('active');
            carousel.innerHTML = '';
            carousel.appendChild(imgElement);
            const titleElement = document.createElement('h3');
            titleElement.textContent = item.title;
            carousel.appendChild(titleElement);
            slideInterval = setTimeout(nextSlide, 4000); // 每4秒切换一次图片

            // 添加点击事件跳转到指定网址
            imgElement.addEventListener('click', () => {
                window.open(item.url, '_blank');
            });
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselItems.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentSlide);
    }

    document.querySelector('.arrow-left').addEventListener('click', prevSlide);
    document.querySelector('.arrow-right').addEventListener('click', nextSlide);

    showSlide(currentSlide);

    // 作品集实现
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const portfolioItems = [
        { image: '1.jpg', title: '论怎样用24倍速写完一张英语试卷', url: 'https://www.bilibili.com/video/BV15b411C7YK/' },
        { image: '2.jpg', title: '一支vlog记录高三毕业那年的暑假(随意向', url: 'https://www.bilibili.com/video/BV1tf4y1L78u/' },
        { image: '3.jpg', title: '【图一乐教程】乐高循迹小车DIY-基于乐高头脑风暴', url: 'https://www.bilibili.com/video/BV1Tv411p7HY/' },
        { image: '4.jpg', title: '"有人还记得鹤观岛的这个小男孩吗"【原神演奏】【风物之诗琴】', url: 'https://www.bilibili.com/video/BV17U4y1m7x9/' },
        { image: '5.jpg', title: '你的流行摇滚比较钢门.mp4', url: 'https://www.bilibili.com/video/BV1Xm411675H/' },
        { image: '6.jpg', title: '【自留档】2023年原神海灯节限时任务全程', url: 'https://www.bilibili.com/video/BV1x84y177fg/' },
        { image: '7.jpg', title: '【音量诉讼】《合成马老C》这也能玩出BUG就离谱!', url: 'https://www.bilibili.com/video/BV15r4y1N7eG/' },
        { image: '8.jpg', title: '【可灵ai】当原神立绘动起来', url: 'https://www.bilibili.com/video/BV1WogreGELq/' }
    ];

    portfolioItems.forEach(item => {
        const portfolioCard = document.createElement('div');
        portfolioCard.classList.add('portfolio-card');
        portfolioCard.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
        `;
        portfolioGrid.appendChild(portfolioCard);

        // 添加点击事件跳转到指定网址
        portfolioCard.querySelector('img').addEventListener('click', () => {
            window.open(item.url, '_blank');
        });
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 添加头像点击事件跳转到指定网址
    document.getElementById('profile-photo').addEventListener('click', () => {
        window.open('https://space.bilibili.com/34874333', '_blank');
    });
});