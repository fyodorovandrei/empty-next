const scrollTo = (id) => {
    const yOffset = -150;
    const element = document.getElementById(id);
    const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset +
        (window.innerWidth <= 800 ? 100 : 0);

    window.scrollTo({ top: y, behavior: 'smooth' });
};

export default scrollTo;
