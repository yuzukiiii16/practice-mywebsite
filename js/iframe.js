function resizeIframe(obj) {
            obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 20 + 'px';
        }
        
window.addEventListener('resize', function() {
    var iframe = document.getElementById('content-frame');
    if (iframe) {
        resizeIframe(iframe);
    }
});