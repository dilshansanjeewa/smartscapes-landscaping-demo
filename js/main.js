class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg custom-bg sticky-top" id="myCustomNav">
            <div class="container">
                <a href="index.html" class="navbar-brand">
                    <img src="assets/images/logo.png" alt="Smart Scapes" width="200px" height="50px">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto gap-3">

                        <li class="nav-item">
                            <a href="index.html" class="nav-link active">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="services.html" class="nav-link">Service</a>
                        </li>
                        <li class="nav-item">
                            <a href="gallery.html" class="nav-link">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a href="about.html" class="nav-link">About Us</a>
                        </li>

                        <li class="nav-item ms-lg-3">
                            <a href="quote.html" class="btn btn-quot-custom px-4 text-white">Get a Free Quot</a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>`;

        this.highlightActiveLink();

    };

highlightActiveLink() {
        let currentPage = window.location.pathname.split("/").pop();

        if (currentPage === "" || currentPage === undefined) {
            currentPage = "index.html";
        }

        const links = this.querySelectorAll('.nav-link');
        links.forEach(link => {
            const linkTarget = link.getAttribute('href');

            if(linkTarget === currentPage) {
                link.classList.add('active');
                
            } else {
                link.classList.remove('active');
            }

        });
    }
}

class AppFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer class="text-white">
            <div style="background-color: #1A2E1D;" class="pt-4">
                <div class="container py-5">
                    <div class="row g-4">
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <a href="#">
                                <img src="assets/images/logo.png" class="footer-logo" alt="">
                            </a>
                            <p class="mt-2 text-light small">Transforming outdoor spaces in USA into sustainable, beautiful
                                sanctuaries since 2015.</p>

                            <div class="d-flex gap-3 py-4">
                                <div class="social-block hover-lift">
                                    <a href="#" class="cocial-icon"><i class="bi bi-facebook text-white fs-2"></i></a>
                                </div>

                                <div class="social-block hover-lift">
                                    <a href="#"><i class="bi bi-youtube text-white fs-2"></i></a>
                                </div>

                                <div class="social-block hover-lift">
                                    <a href="#"><i class="bi bi-instagram text-white fs-2"></i></a>
                                </div>

                                <div class="social-block hover-lift">
                                    <a href="#"><i class="bi bi-twitter-x text-white fs-2"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-12 px-5">
                            <h5 class="mb-4" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">COMPANY</h5>
                            <ul class="list-unstyled gap-2 d-flex flex-column">
                                <li><a href="index.html" class="text-white-50 text-decoration-none">Home</a></li>
                                <li><a href="services.html" class="text-white-50 text-decoration-none">Services</a></li>
                                <li><a href="about.html" class="text-white-50 text-decoration-none">About Us</a></li>
                                <li><a href="gallery.html" class="text-white-50 text-decoration-none">Gallery</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-12 px-5">
                            <h5 class="mb-4" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">SERVICES</h5>
                            <ul class="list-unstyled gap-2 d-flex flex-column">
                                <li><a href="services.html" class="text-white-50 text-decoration-none">Lawn Maintenance</a></li>
                                <li><a href="services.html" class="text-white-50 text-decoration-none">Garden Designing</a></li>
                                <li><a href="services.html" class="text-white-50 text-decoration-none">Hardscaping</a></li>
                                <li><a href="services.html" class="text-white-50 text-decoration-none">Commercial Care</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-12 px-5">
                            <h5 class="mb-4" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">CONTACT US</h5>
                            <ul class="list-unstyled gap-2 d-flex flex-column">
                                <li><a href="index.html" class="text-white-50 text-decoration-none "><i class="bi bi-geo-alt-fill"></i> 1060, West Addison Street, Wrigley Field, Chicago</a></li>
                                <li><a href="tel:5125550123" class="text-white-50 text-decoration-none"><i class="bi bi-telephone"></i> (512) 555-0123</a></li>
                                <li><a href="mailto:hello@smartscapes.com" class="text-white-50 text-decoration-none"><i class="bi bi-envelope"></i> hello@smartscapes.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center align-items-center justify-content-center d-flex" style="background-color: #111F13; height: 100px;">
                <p class="text-secondary">© 2026 Smart Scapes Landscaping. All Rights Reserved.</p>
            </div>

        </footer>`
    };
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);
// const navLinks = document.querySelectorAll('.nav-link');

// navLinks.forEach(link => {
//     link.addEventListener('click', function () {
//         navLinks.forEach(nav => nav.classList.remove('active'));
//         this.classList.add('active');
//     })
// })

const sliderInput = document.getElementById('sliderInput');
const beforeImage = document.getElementById('beforeImage');
const sliderHandle = document.getElementById('sliderHandle');

sliderInput.addEventListener('input', function (e) {
    // Get the current value (0 - 100)
    const sliderValue = e.target.value;

    // 1. Update the image clip
    // "inset(0 50% 0 0)" means clip 50% from the right.
    // So we calculate (100 - value)% to clip from the right.
    beforeImage.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;

    // 2. Move the visual handle
    sliderHandle.style.left = `${sliderValue}%`;
});

// const galleryImage = document.getElementById('galleryImage');

// galleryImage.addEventListener('click', () => {
//     if(galleryImage.requestFullscreen){
//         galleryImage.requestFullscreen();
//     }
// })