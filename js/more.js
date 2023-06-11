//qq wx
let qq = document.getElementById('qqVx')
let oQQ = document.getElementById('oQQ')
let oWX = document.getElementById('oWX')

//个人介绍
let information = document.getElementById('more-information')
let oName = document.getElementById('name')


//点击切换qq二维码页面
function changeQQwx(){
    qq.style.left = '0px'
    information.style.left = '900px'
}

oQQ.addEventListener('click',changeQQwx)

oWX.addEventListener('click',changeQQwx)


//点击切换回个人简介
oName.addEventListener('click', ()=>{
    qq.style.left = '-900px'
    information.style.left = '0px'
})