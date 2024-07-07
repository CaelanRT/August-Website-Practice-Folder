// open resume info
const toggleBtn = document.querySelectorAll('.toggle-btn');

toggleBtn.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const job = e.currentTarget.parentElement;
        job.classList.toggle('show-text');
    });
});

// close links
document.getElementById('toggle-button').addEventListener('click', function() {
    var navbarLinks = document.getElementById('navbar-links');
    navbarLinks.classList.toggle('active');
});
