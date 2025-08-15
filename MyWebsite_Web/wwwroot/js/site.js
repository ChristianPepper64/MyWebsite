// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Create lightbox overlay dynamically
const overlay = document.createElement('div');
overlay.id = 'lightboxOverlay';
overlay.innerHTML = '<img src="" alt="Expanded Image">';
document.body.appendChild(overlay);

function expandImage(img) {
    const overlayImg = overlay.querySelector('img');
    overlayImg.src = img.src; // Copy clicked image source
    overlay.style.display = 'flex'; // Show overlay
}

// Hide overlay on click
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});

//Sidebar Content
const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const toggleIcon = document.getElementById('toggleIcon');

toggleBtn?.addEventListener('click', () => {
    const isOpen = sidebar.classList.contains('sidebar-visible');

    sidebar.classList.toggle('sidebar-hidden', isOpen);
    sidebar.classList.toggle('sidebar-visible', !isOpen);

    mainContent.classList.toggle('with-sidebar', !isOpen);
    mainContent.classList.toggle('full-width', isOpen);

    toggleIcon.className = isOpen ? 'bi bi-list fs-4' : 'bi bi-x-lg fs-4';
});

//Toggle expended Content for LL
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('[href="#additionalProjectsLL"]');
    const collapseElement = document.getElementById('additionalProjectsLL');

    collapseElement.addEventListener('show.bs.collapse', () => {
        toggleBtn.textContent = 'Show Less';
    });

    collapseElement.addEventListener('hide.bs.collapse', () => {
        toggleBtn.textContent = 'Show More Details';
    });
});

//Toggle expended Content for FA
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('[href="#additionalProjectsFA"]');
    const collapseElement = document.getElementById('additionalProjectsFA');

    collapseElement.addEventListener('show.bs.collapse', () => {
        toggleBtn.textContent = 'Show Less';
    });

    collapseElement.addEventListener('hide.bs.collapse', () => {
        toggleBtn.textContent = 'Show More Details';
    });
});

