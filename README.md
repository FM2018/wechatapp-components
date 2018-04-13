# wechatapp-components 个人组件库

********
个人封装的一些小程序的小组件

********
# 使用方法 
1、mask(进入页面时的加载缓冲动画遮罩层)
在根目录下面创建components文件夹，将组件文件夹放入
在需要引入组件的.wxml文件中加上 
  <mask></mask>
  可以根据个人需求添加功能

2、banner(轮播图组件)
在引入组件的页面js文件中定义属性bannerHidden和bannerList
- '<banner banners-hidden="{{bannerHidden}}" banner-list="{{bannerList}}" banner-attr-list="{{bannerAttrList}}"></banner>'
- bannerHidden: 组件是否显示(Boolean)
- bannerList: 组件的轮播图数据(Array)
- bannerAttrList: 组件的属性(Object)
- bannerAttrList:{
    - indicatorDots: true,                  //是否显示面板指示点
    - indicatorColor: "rgba(0, 0, 0, .3)",  //指示点颜色 
    - indicatorActiveColor: "blue",         //当前选中的指示点颜色
    - autoplay: true,                       //是否自动切换
    - current: 0,                           //当前所在滑块的 index
    - interval: 4000,                       //自动切换时间间隔
    - duration: 500,                        //滑动动画时长
    - circular: true,                       //是否采用衔接滑动
    - previousMargin: "0px",                //前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
    - nextMargin: "0px",                    //后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
    - displayMultipleItems: 1,              //同时显示的滑块数量
    - skipHiddenItemLayout: false,          //是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息
  }
- 当属性不填写的时候，都使用默认值

3、tocartbtn(悬浮固定添加跳转购物车页面按钮)
<tocartbtn btn-hidden="{{btnHidden}}" bindtap=""><tocartbtn>
btnHidden: 是否显示
可以直接在组件上绑定事件
  
4、popUp(弹出层)

  
