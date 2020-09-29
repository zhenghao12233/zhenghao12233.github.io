(function(){
    var faQq = document.getElementsByClassName('fa-qq')
    var faWexin = document.getElementsByClassName('fa-weixin')
    var divTestQq = document.createElement('div')
    divTestQq.innerHTML = 'QQ'
    divTestQq.style.display = 'none'
    divTestQq.style.width = '500px'
    divTestQq.style.height = '500px'
    faQq.appendChild(divTestQq)
    faQq.onclick = function (e) {
        e.preventDefaul()
        divTestQq.style.display = 'block'
    }
})()