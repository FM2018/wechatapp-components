Component({
	options: {
		multipleSlots: true
	},
	properties: {
		btnHidden: {  
	        type: Boolean,  
	        value: false  
	    }, //这里定义了bannerHidden属性，属性值可以在组件使用时指定.写法为banner-hidden  
	},  
	data: {  
		// 这里是一些组件内部数据   
	},  
	methods: {  
	// 这里放置自定义方法  
		toCartPage: function() {
			wx.navigateTo({
				url: "../cart/cart"
			})
		}
	}  
})