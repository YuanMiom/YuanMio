let homePage = document.getElementById('home-page') // 获取盒子元素

homePage.addEventListener('wheel', (event) => { // 监听鼠标滚轮事件
  event.preventDefault(); // 阻止默认滚动行为
  homePage.scrollLeft += event.deltaY
})

