# wechatapp-components 小程序组件库

********
封装的一些小程序组件<br>
1、mask: 第一次进入页面的时候弹出遮罩层，显示正在加载loading动画;<br>
2、banner: 轮播图组件，传入参数(swiper组件参数,不传为默认;轮播组件数据,图片或者文本);<br>
3、tocartbtn: 悬浮添加购物车按钮;<br>
4、popUp: 弹出层,显示提示内容,可点击确定;
********

# 使用方法
### 1、mask<br>
* 在json文件中引入外部根目录下面的components文件夹中的mask组件;<br>
  ```Javascript
  {
    "usingComponents": {
      "mask": "/components/mask/mask"
    }
  }
  ```
* 在WXML文件中加入: \<mask>\</mask>
* 效果<br>
  ![mask](https://github.com/FM2018/wechatapp-components/raw/master/img/mask.png)

### 2、banner(轮播图组件)
* .json文件中引入组件，同上;
* .wxml中引入组件<br>
```Html
<banner banner-hidden="{{bannerHidden}}" banner-list="{{bannerList}}" banner-attr-list="{{bannerAttrList}}" vertical="{{vertical}}"></banner>
```
* .js文件的data中添加banner组件所需的参数: <br>
  一共四组参数: <br>
	* bannerHidden: 组件是否隐藏; 传参Boolean类型:false,如果不需要,可以在组件的js文件中自行删除这一参数;
	* bannerList: 轮播组件所需的数据,传参数组Array类型:[],图片、文本等;
	* 例子: 
```Javascript
    [
      {
        id: 1,
        text: "全场实付满68包邮，详情请联系客服人员",
      },{
        id: 2,
        text: "全场实付满68包邮，详情请联系客服人员",
      },{
        id: 3,
        text: "全场实付满68包邮，详情请联系客服人员",
      }
    ]
    [
      {
        id: 1,
        img: "/images/img/banner.png" 
      },{
        id: 2,
        img: "/images/img/banner.png"
      },{
        id: 3,
        img: "/images/img/banner.png"
      }
    ]
``` 
    
 * bannerAttrList: banner组件中swiper组件的属性，如果不传递任何参数，则全部使用组件默认的参数;
 	- indicatorDots: true,　　　　　　　　　　//是否显示面板指示点
 	- indicatorColor: "rgba(0, 0, 0, .3)",　　//指示点颜色 
 	- indicatorActiveColor: "blue",　　　　　//当前选中的指示点颜色
 	- autoplay: true,　　　　　　　　　　　　　//是否自动切换
 	- current: 0,　　　　　　　　　　　　　　 　//当前所在滑块的 index
 	- interval: 4000,　　　　　　　　　　　　　//自动切换时间间隔
 	- duration: 500,　　　　　　　　　　　　　//滑动动画时长
 	- circular: true,　　　　　　　　　　　　　//是否采用衔接滑动
 	- previousMargin: "0px",　　　　　　　　//前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
 	- nextMargin: "0px",　　　　　　　　　　//后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
 	- displayMultipleItems: 1,　　　　　　　　//同时显示的滑块数量
 	- skipHiddenItemLayout: false,　　　　　　//是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息
 	- height: '70rpx',　　　　　　　　　　　　//轮播图组件的高度
 
 * vertical: 轮播图是横向滚动还是纵向滚动,如果有这个参数则是纵向滚动(上下);

### 3、tocartbtn(悬浮固定添加跳转购物车页面按钮)
<tocartbtn btn-hidden="{{btnHidden}}" bindtap=""><tocartbtn>
btnHidden: 是否显示
可以直接在组件上绑定事件
  
### 4、popUp(弹出层)

  
