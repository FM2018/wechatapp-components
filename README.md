# wechatapp-components
个人封装的一些小程序的小组件
#使用方法：
1、mask(进入页面时的加载缓冲动画遮罩层)
在根目录下面创建components文件夹，将组件文件夹放入
在需要引入组件的.wxml文件中加上 
  <mask></mask>
  可以根据个人需求添加功能
  
2、banner(轮播图组件)
<banner banners-hidden="{{bannerHidden}}" banner-list="{{bannerList}}"></banner>
在引入组件的页面js文件中定义属性bannerHidden和bannerList
bannerHidden: 组件是否显示(Boolean)
bannerList: 组件的轮播图数据(Array)

3、tocartbtn(悬浮固定添加跳转购物车页面按钮)
<tocartbtn btn-hidden="{{btnHidden}}" bindtap=""><tocartbtn>
btnHidden: 是否显示
可以直接在组件上绑定事件

  
