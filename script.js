// You can add interactivity here, such as expanding work items
document.querySelectorAll('.work-list li').forEach(item => {
    item.addEventListener('click', () => {
        // Toggle a class to show/hide additional information
        item.classList.toggle('expanded');
    });
});