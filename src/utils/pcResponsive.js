(function (doc, win) {
    var doc = doc.documentElement;
    doc.addEventListener('DOMContentLoaded', Resize, false);
    // 当DOM加载后执行
    win.addEventListener('resize', Resize, false);
    if (doc.clientWidth) {
    Resize();
    } else {
    setTimeout(Resize, 100)
    }
    // 当屏幕发生变化时执行
    function Resize() {
    doc.style.fontSize = doc.clientWidth / 19.2 + 'px';
    }
    })(document, window)