Component({
	options: {
		// multipleSlots: true //启用多slot支持
	},
	properties: {
		mask: {
			type: Boolean,
			value: true
		}
	},
	data: {
		//内部数据
		mask: true
	},
	methods: {

	},
	ready: function() {
		let that = this;
		wx.showToast({
	      icon: "loading",
	      duration: 1000
	    })
	    setInterval(()=>{
          that.setData({
            mask: false
          })
        },1000)
	}

})