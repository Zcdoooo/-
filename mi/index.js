$(document).ready(function() {
	var cart = $(".topbar-cart");
	var cartLink = $(".topbar-cart a");
	var cartMenu = $(".cart-menu");
	var searchBtn = $(".search-btn");
	var search = $("#search");
	var searchHotWords=$(".search-hot-words");
	var keywordList=$(".keyword-list");
	/*
	 * 购物车对象
	 */
	function TopBarCart() {

	}
	/*
	 * 显示购物车菜单方法
	 */
	TopBarCart.prototype.showCartMenu = function() {
		cartMenu.slideDown(100); //鼠标移入触发拉伸事件，速度为100毫秒
		cartLink.css({
			"color": "#ff6700",
			"background-color": "#fff",
		}) //鼠标移入给a标签加css样式
	}
	/*
	 * 隐藏购物车菜单方法
	 */
	TopBarCart.prototype.hideCartMenu = function() {
		cartMenu.slideUp(100); //鼠标移出触发拉伸事件，速度为100毫秒
		cartLink.css({
			"color": "#b0b0b0",
			"background-color": "#424242",
		}) //鼠标移出给a标签加css样式
	}

	TopBarCart.prototype.cartMenuArray = []; //声明鼠标事件数组

	/*
	 * 购物车鼠标事件方法
	 */ 
	TopBarCart.prototype.mouse = function() {
		var cartMenuArray = TopBarCart.prototype.cartMenuArray;
		cart.mouseenter(function() {
			cartMenuArray.forEach(function(one) {
				clearTimeout(one);
			}); //清空鼠标时间数组中的所有定时器
			cartMenuArray.length = 0; //清空数组
			var timer = setTimeout(TopBarCart.prototype.showCartMenu, 100); //声明并给showCartMetu设置定时器
			cartMenuArray.push(timer); //数组中存储定时器
		});
		cart.mouseleave(function() {
			cartMenuArray.forEach(function(one) {
				clearTimeout(one);
			}); //清空鼠标时间数组中的所有定时器
			cartMenuArray.length = 0;
			var timer = setTimeout(TopBarCart.prototype.hideCartMenu, 100); //声明并给hideCartMetu设置定时器
			cartMenuArray.push(timer); //数组中存储定时器
		});
	}
	/*
	 * 工厂方法
	 */
	function factory(key) {
		if(key == "TopBarCart") {
			return new TopBarCart();
		}
		else if(key =="HeaderSearch"){
			return new HeaderSearch();
		}
	}
	var topbarCart = factory("TopBarCart");
	topbarCart.mouse();

	/*
	 * 
	 */
	function HeaderSearch() {

	}
	/*
	 * 搜索按钮变成橙色
	 */
	HeaderSearch.prototype.orangeBtn = function() {
		searchBtn.css({
			"transition-property": "all",
			"transition-duration": "0.2s",
			"transition-timing-function": "ease",
			"background-color": "#ff6700",
			"color": "#fff",
			"border": "none"
		});
	}
	/*
	 * 搜索按钮变成深色
	 */
	HeaderSearch.prototype.darkBtn = function() {
		searchBtn.css({
			"transition-property": "all",
			"transition-duration": "0.2s",
			"transition-timing-function": "ease",
			"background-color": "#fff",
			"color": "#616161",
			"border": "1px #bbb solid"
		});
	}
	/*
	 * 搜索按钮变为浅色边框
	 */
	HeaderSearch.prototype.lightBtn = function() {
		searchBtn.css({
			"transition-property": "all",
			"transition-duration": "0.2s",
			"transition-timing-function": "ease-out",
			"background-color": "#fff",
			"color": "#616161",
			"border": "1px #e0e0e0 solid"
		});
	}
	/*
	 * 搜索文本块变为深色功框
	 */
	HeaderSearch.prototype.darkSearch = function() {
		var border = "solid 1px #bbb";
		search.css({
			"transition-property": "all",
			"transition-duration": "0.2s",
			"transition-timing-function": "ease",
			"border-left": border,
			"border-top": border,
			"border-bottom": border
		})
	}
	/*
	 * 搜索文本块变为浅色功框
	 */
	HeaderSearch.prototype.lightSearch = function() {
		var border = "1px #e0e0e0 solid";
		search.css({
			"transition-property": "all",
			"transition-duration": "0.2s",
			"transition-timing-function": "ease-out",
			"border-left": border,
			"border-top": border,
			"border-bottom": border
		})
	}
	HeaderSearch.prototype.navMenuArray = [];
	/*
	 * 显示标题栏弹出菜单
	 */
	HeaderSearch.prototype.showNavMenu = function(){
		var navMenuArray = HeaderSearch.prototype.navMenuArray;
		navMenuArray.forEach(function(one){
			clearTimeout(one);
		});
		
		navMenuArray.length = 0;//清空数组
		var timer = setTimeout("$('.header-nav-menu').slideDown(300)",300)
		navMenuArray.push(timer);
	}
	/*
	 * 隐藏标题栏弹出菜单
	 */
	HeaderSearch.prototype.hideNavMenu = function(){
		var navMenuArray = HeaderSearch.prototype.navMenuArray;
		navMenuArray.forEach(function(one){
			clearTimeout(one);
		});
		
		navMenuArray.length = 0;//清空数组
		var timer = setTimeout("$('.header-nav-menu').slideUp(300)",300)
		navMenuArray.push(timer);
	}
	/*
	 * 搜索框鼠标方法
	 */
	HeaderSearch.prototype.mouse = function() {
		//搜索按钮鼠标移入事件
		searchBtn.mouseenter(function() {
			if(document.activeElement.id == "search") {
				return;
			}
			HeaderSearch.prototype.orangeBtn();
			HeaderSearch.prototype.darkSearch();
		});
		//搜索按钮鼠标移出事件
		searchBtn.mouseleave(function() {
			if(document.activeElement.id == "search") {
				return;
			}
			HeaderSearch.prototype.lightBtn();
			HeaderSearch.prototype.lightSearch();
		});
		
		var temp = $("#search,.search-hot-words");
		//给搜索文本框和热词添加鼠标移入事件
		temp.mouseenter(function() {
			if(document.activeElement.id == "search") {
				return;
			}
			HeaderSearch.prototype.darkSearch();
			HeaderSearch.prototype.darkBtn();
		});
		//给搜索文本框和热词添加鼠标移出事件
		temp.mouseleave(function() {
		if(document.activeElement.id == "search") {
			return;
		}
		HeaderSearch.prototype.lightSearch();
		HeaderSearch.prototype.lightBtn();
	});
		search.focus(function() {
		var border = "1px #ff6700 solid";
		search.css({
			"border-left" :border,
			"border-top" :border,
			"border-bottom" :border
		});
		searchBtn.css({
			"border":border
		});
		searchHotWords.fadeOut(150);
		keywordList.show();
	});
	$("#search").blur(function() {
		keywordList.hide();
		searchHotWords.fadeIn(150);
		HeaderSearch.prototype.lightSearch();
		HeaderSearch.prototype.lightBtn();
	});
	//鼠标移入标题栏控件，显示弹出菜单
	$(".nav-list li:gt(0):lt(8),.header-nav-menu").mouseenter(function(){
		HeaderSearch.prototype.showNavMenu();
	})
	$(".nav-list li:gt(0):lt(8),.header-nav-menu").mouseleave(function(){
		HeaderSearch.prototype.hideNavMenu();
	})
	}
	var headerSearch=factory("HeaderSearch");
	headerSearch.mouse();
});