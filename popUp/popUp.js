Component({
	options: {
		// multipleSlots: true //启用多slot支持
	},
	properties: {
		showPop: {
			type: Boolean,
			value: true
		},
		title: {
			type: String,
			value: ""
		}
	},
	data: {
		//内部数据
		showPop: true
	},
	methods: {
		closePopUp: function() {
			let showPop = this.data.showPop;
		    this.setData({
		      showPop: !showPop
		    })
		}
	}
})