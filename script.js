document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
        item.addEventListener('focus', function() {
            this.style.backgroundColor = '#0a9396';
        });
        item.addEventListener('blur', function() {
            this.style.backgroundColor = '';
        });
    });
});