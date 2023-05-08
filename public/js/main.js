function configure_gallery_modal() {
    // Get the modal
    let modal = document.getElementById("gallery-modal");

    // Get the image and insert it inside the modal
    for (const img of document.getElementsByClassName("gallery-img")) {

        let modalImg = document.getElementById("modal-img");
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    }

    // Get the <span> element that closes the modal
    let span = document.getElementById("close-modal");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Close when click anywhere else the image
    modal.addEventListener('click', function (event) {
        if (event.target.id != 'modal-img') {
            this.style.display = "none";
        }
    })

}

function download_video() {
    if (window.getComputedStyle(document.getElementById('banner')).display === 'flex' &&
     !(document.getElementById('video-src'))) {

        const source = document.createElement('source')
        source.src = '/video/video1.mp4'
        source.type = "video/mp4"
        source.id = 'video-src'
        document.getElementById('videobcg').appendChild(source)
    }
}

function configureMenu() {
    const links = document.querySelectorAll('#navbarSupportedContent a');
    const menuToggle = document.getElementById('navbarSupportedContent');
    for (const link of links) {
        if (!link.href.endsWith('#')) {
            link.addEventListener('click', () => { (new bootstrap.Collapse(menuToggle)).toggle() })
        }
    }
}

window.onload = () => {
    download_video();
    window.addEventListener('resize', download_video)

    configure_gallery_modal();
    configureMenu();
}