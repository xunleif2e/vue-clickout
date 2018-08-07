# @xunlei/vue-clickout

> Vue clickout,轻松解决“点击空白处消失”这种问题

## 在线Demo

[https://xunleif2e.github.io/vue-clickout/demo/dist/index.html](https://xunleif2e.github.io/vue-clickout/demo/dist/index.html)

## Installation

```
npm i @xunlei/vue-clickout -S
```

## 注册指令

`clickout`事件是通过指令的方式实现的，因此使用前需注册指令，可以全局注册也可以局部注册。

### 全局注册
```javascript
import Vue from 'vue'
import VueClickout from '@xunlei/vue-clickout'

Vue.use(VueClickout)
```
### 局部注册
```html
<template>
  <div class="face" v-clickout @clickout="open=false">
    <a href="javascript:;" @click="open=!open">表情</a>
    <div class="emoji">
       <li title="开心"><span class="ico-emoji emoji-kaixin"></span></li>
       <li title="可爱"><span class="ico-emoji emoji-keai"></span></li>
    </div>
  </div>
</template>
<script>
import { clickout } from '@xunlei/vue-clickout'

export default {
  data () {
    return {
       open: false
    }
  },
  // 注册指令
  directives: {
    clickout
  }
}
</script>
```
### 用法

```html
<template>
  <div class="item-comment">
    <div class="comment-user">
      <span class="user-name">疯狂的迷弟: </span>
      <p class="text-comment">王祖贤越看越美</p>
      <a href="javascript:;" class="reply-btn" @click="showReply=!showReply" ref="replyBtnRef">回复</a>
    </div>
    <div class="reply"  v-clickout="['replyBtnRef']" @clickout="showReply=false">
      <div class="reply-area" v-show="showReply">
        <input type="text" class="ipt-reply">
        <div class="reply-option">
          <button>发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showReply: false
    }
  }
}
</script>
```
### 参数

参数 | 说明 | 类型 | 
| :-- | :-- | :-- |
| exceptRefs | 要排除的Ref,默认为指令所在的DOM | Array

## 开发命令

``` bash
# install deps
npm install

# serve demo at localhost:8080
npm run dev

# build library and demo
npm run build

# build library
npm run build:library

# build demo
npm run build:demo

# pre publish
npm run prepublish
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 [greenfavo](https://github.com/greenfavo)
