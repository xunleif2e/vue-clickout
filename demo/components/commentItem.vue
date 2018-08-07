<style>
a{
  text-decoration: none;
}
.item-comment {
  width: 400px;
  margin-top: 10px;
}
.text-comment {
  display: inline;
  font-size: 14px;
}
button {
  background: white;
  border: 1px solid #ccc;
  width: 50px;
  height: 20px;
}
.reply{
  position: relative;
  margin-top: 10px;
}
.reply-btn {
 color: blue;
 margin-bottom: 5px;
}
.ipt-reply{
  width: 300px;
}
.reply-option{
  display: inline;
}
</style>

<template>
  <div class="item-comment">
    <div class="comment-user">
      <span class="user-name">疯狂的迷弟: </span>
      <p class="text-comment">王祖贤越看越美</p>
      <a href="javascript:;" class="reply-btn" @click="showReply=!showReply" ref="replyBtnRef">回复</a>
    </div>
    <!-- 回复 -->
    <div class="reply"  v-clickout="['replyBtnRef']" @clickout="showReply=false">
      <div class="reply-area" v-show="showReply">
        <input type="text" class="ipt-reply">
        <div class="reply-option">
          <button>发送</button>
        </div>
      </div>
    </div>
    <!-- 回复 END -->
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
