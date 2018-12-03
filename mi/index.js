$(document).ready(function() {
	function showCartMenu() {
		$(".topbar-cart a").css({
			"color":"#ff6700",
			"background-color":"#fff",
		})//鼠标移入给a标签加css样式
		$(".cart-menu").slideDown(100);//鼠标移入触发拉伸事件，速度为100毫秒
	}

	function hideCartMenu() {
		$(".topbar-cart a").css({
			"color":"#b0b0b0",
			"background-color":"#424242",
		})//鼠标移出给a标签加css样式
		$(".cart-menu").slideUp(100);//鼠标移出触发拉伸事件，速度为100毫秒
	}
	var cartMenuArray = [];//声明鼠标事件数组
	$(".topbar-cart").mouseenter(function() {
		cartMenuArray.forEach(function(one) {
			clearTimeout(one);
		});//清空鼠标时间数组中的所有定时器
		cartMenuArray = [];//清空数组
		var timer = setTimeout(showCartMenu, 100);//声明并给showCartMetu设置定时器
		cartMenuArray.push(timer);//数组中存储定时器
	});
	$(".topbar-cart").mouseleave(function() {
		cartMenuArray.forEach(function(one) {
			clearTimeout(one);
		});//清空鼠标时间数组中的所有定时器
		cartMenuArray = [];
		var timer = setTimeout(hideCartMenu, 100);//声明并给hideCartMetu设置定时器
		cartMenuArray.push(timer);//数组中存储定时器
	});
});
