
var timer = document.querySelector('.timer');
getTimer()
setInterval(getTimer, 1000);

function getTimer() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var dates = time.getDate();
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var day = time.getDay();
    var h = time.getHours();
    h = h < 10 ? '0' + h : h;
    var m = time.getMinutes();
    m = m < 10 ? '0' + m : m;
    var s = time.getSeconds();
    s = s < 10 ? '0' + s : s;
    timer.innerHTML = year + '年' + month + '月' + dates + '日' + arr[day] + h + ':' + m + ':' + s;
}
