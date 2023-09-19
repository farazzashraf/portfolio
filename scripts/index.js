// Get a reference to the button element
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Show the button when the user scrolls down a certain amount
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});




// Scroll to the top of the page when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});


// Initialize with the 'skills' content displayed and active link
document.getElementById('skills').style.display = 'block';
document.getElementById('skills-link').classList.add('active');

// Add a class 'active' to the clicked link and remove it from others
function setActiveLink(linkId) {
    const links = document.querySelectorAll('.nav a');
    links.forEach(link => link.classList.remove('active'));
    document.getElementById(linkId).classList.add('active');
}

// Event listeners for the links
document.getElementById('skills-link').addEventListener('click', function (event) {
    event.preventDefault();
    showContent('skills');
    setActiveLink('skills-link');
});

document.getElementById('experience-link').addEventListener('click', function (event) {
    event.preventDefault();
    showContent('experience');
    setActiveLink('experience-link');
});

document.getElementById('education-link').addEventListener('click', function (event) {
    event.preventDefault();
    showContent('education');
    setActiveLink('education-link');
});

function showContent(contentId) {
    const contentElements = document.querySelectorAll('.content');
    contentElements.forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById(contentId).style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    // Hide all content elements
    const contentElements = document.querySelectorAll('.content');
    contentElements.forEach(element => {
        element.style.display = 'none';
    });

    // Event listeners for the links
    const links = document.querySelectorAll('.link');

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Remove the 'underline' class from all links
            links.forEach(function (link) {
                link.classList.remove('underline');
            });

            // Add the 'underline' class to the clicked link
            this.classList.add('underline');

            // Get the contentId associated with the clicked link
            const contentId = this.getAttribute('data-content-id');

            // Check if the element with contentId exists
            const contentElement = document.getElementById(contentId);
            if (contentElement) {
                // Hide all content elements again
                contentElements.forEach(element => {
                    element.style.display = 'none';
                });

                // Show the corresponding content
                contentElement.style.display = 'block';
            }
        });
    });
});

function closeContent(contentId) {
    document.getElementById(contentId).style.display = 'none';
    document.getElementById(contentId + '-link').classList.remove('active');
}



