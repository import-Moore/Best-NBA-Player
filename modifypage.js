function modifyPage() {
    function preloadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
        });
    }

    function setBackground(url) {
        document.body.style.backgroundImage = `url(${url})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center";
    }

    const getImageUrl = () => {
        const baseName = `${player}HD.webp`; // 默认使用WebP格式
        return player[0] === "O" 
            ? "images/optimized/Shaquille.webp" 
            : `images/optimized/${baseName}`;
    };

    const loadBackground = async () => {
        const picurl = getImageUrl();
        
        try {
            document.body.style.opacity = "0.5";
            
            // 开始预加载
            console.time("BackgroundPreload");
            await preloadImage(picurl);
            console.timeEnd("BackgroundPreload");
            
            // 设置背景并显示页面
            setBackground(picurl);
            document.body.style.opacity = "1";
            
        } catch (error) {
            console.error(error);
            // 降级方案：使用占位图或纯色背景
            document.body.style.background = "#f0f0f0";
            document.body.style.opacity = "1";
        }
    };
	
    loadBackground();

    svg.attr("class", `${player}Svg`);
    description_parah.attr("class", "descrp");
}
