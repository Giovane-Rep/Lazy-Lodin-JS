const images = document.querySelectorAll(".image-container img");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const image = entry.target;

        image.src = image.src.replace("?W=10", "?W=607");

        observer.unobserve(image);
    });
}, {});

images.forEach((image) => {
    observer.observe(image);
});