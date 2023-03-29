export function animationOnScreen(objects) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting()) {
                entry.ClassList.add('animate');
                entry.style.display = null;
            }
            else {
                entry.style.display = 'none';
            }
        });
    });
    observer.observe(objects);
}