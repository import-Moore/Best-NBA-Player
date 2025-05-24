function modifyPage() {
    	//设置背景 + 按背景协调页面布局
	function setBackground(url) {
		document.body.style.backgroundImage = "url("+url+")"; // 设置背景图片
		document.body.style.backgroundSize = "cover"; // 背景图片覆盖整个容器
		document.body.style.backgroundRepeat = "no-repeat"; // 防止背景图片重复
		document.body.style.backgroundAttachment = "fixed"; // 背景图片固定，不随内容滚动
		document.body.style.backgroundPosition = "center"; // 背景图片居中
	}
	var picname = player + "HD.jpg";
	var picurl = "images/" + picname;
	if (player[0] == "O")
	{
		picurl = "images/Shaquille.jpg";
	}
    setBackground(picurl);
    
    svg.attr("class", player + "Svg");
	description_parah.attr("class", 'descrp')
	
	// if (player == "Curry") {
	// 	leftpadding = 120;
	// }
}
