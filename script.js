document.addEventListener('DOMContentLoaded', function() {
    const workItems = document.querySelectorAll('.work-list .work-item');
    
    workItems.forEach(item => {
        const header = item.querySelector('.work-item-header');
        header.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});