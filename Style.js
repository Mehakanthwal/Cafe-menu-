document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuSection = document.getElementById('menu-section');
    const menuCategoryDivs = document.querySelectorAll('.menu-category');
    const placeholderText = document.querySelector('#menu-section .placeholder-text');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;

            // Hide the placeholder text and all menu categories
            if (placeholderText) {
                placeholderText.style.display = 'none';
            }
            menuCategoryDivs.forEach(div => {
                div.style.display = 'none';
            });

            // Show the menu for the clicked category
            const selectedMenu = document.getElementById(`${category}-menu`);
            if (selectedMenu) {
                selectedMenu.style.display = 'block';
            }
        });
    });
});
