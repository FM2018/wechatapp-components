Component({
	properties: {  
    bannerHidden: {  
      type: Boolean,  
      value: false  
    }, //这里定义了bannerHidden属性，属性值可以在组件使用时指定.写法为banner-hidden  
    bannerList: {  
      type: Array,  
      value: [],  
    },
    bannerAttrList: {
      type: Object,
      value: {},
    },
    vertical: {
      type: Boolean,
      value: true,
    }
  },  
  data: {  
    // 这里是一些组件内部数据  
    text: "text",  
  },  
  methods: {  
    // 这里放置自定义方法  
    // modal_click_Hidden: function () {  
    //   this.setData({  
    //     modalHidden: true,  
    //   })  
    // }
  }  
})