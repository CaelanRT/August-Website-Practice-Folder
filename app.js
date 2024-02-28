const toggleBtn = document.querySelectorAll('.toggle-btn');

toggleBtn.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const job = e.currentTarget.parentElement;
        job.classList.toggle('show-text');
    });
});

