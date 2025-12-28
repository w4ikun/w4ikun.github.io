// 确保页面 DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 实例化 Typed.js，#element 对应页面中要显示打字效果的元素 ID
  var typed = new Typed('#subtitle', {
    strings: [
      'welcome to my blog...',
      '自定义第二行文字...',    
      '更多自定义内容...'
    ],
    typeSpeed: 150, // 打字速度（毫秒）
    backSpeed: 80, // 删除速度（毫秒）
    loop: true,    // 是否循环播放
  });
});