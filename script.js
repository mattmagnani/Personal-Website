document.addEventListener('DOMContentLoaded', function() {
    // Existing functionality for work items
    const workItems = document.querySelectorAll('.work-list .work-item');
    
    workItems.forEach(item => {
        const header = item.querySelector('.work-item-header');
        header.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // New functionality for command menu
    const commandMenu = document.getElementById('command-menu');

    // Toggle command menu on Cmd+J or Ctrl+J
    document.addEventListener('keydown', function(event) {
        if (event.key === 'j' && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            commandMenu.classList.toggle('hidden');
            if (!commandMenu.classList.contains('hidden')) {
                commandMenu.querySelector('input').focus();
            }
        }
    });

    // Hide command menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!commandMenu.contains(event.target)) {
            commandMenu.classList.add('hidden');
        }
    });

    // Optional: Add functionality for command menu items
    const menuItems = commandMenu.querySelectorAll('.menu-items button');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add actions for each menu item
            console.log('Clicked:', this.textContent);
            // You can add specific actions here, e.g.:
            // if (this.textContent === 'Print') { window.print(); }
            commandMenu.classList.add('hidden');
        });
    });

    // Optional: Add search functionality
    const searchInput = commandMenu.querySelector('input');
    searchInput.addEventListener('input', function() {
        const filter = this.value.toLowerCase();
        menuItems.forEach(item => {
            if (item.textContent.toLowerCase().includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});