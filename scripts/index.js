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

// JavaScript to show the message notification
function showMessageNotification() {
    var notification = document.getElementById('message-notification');
    if (notification) {
        notification.style.display = 'block';
    }
}

// JavaScript to hide the message notification
function hideMessageNotification() {
    var notification = document.getElementById('message-notification');
    if (notification) {
        notification.style.display = 'none';
    }
}

// JavaScript to close the notification when the close button is clicked
document.getElementById('close-notification').addEventListener('click', function () {
    hideMessageNotification();
});

// Function to send a customized message to your Telegram bot
function sendMessageToTelegram(name, email, message) {
    const botToken = '5628251127:AAH2-WupSDIUS_27VbUX6WB5CNfn72Ghl5s';
    const chatId = '952495044';

    // Customize the message format here
    const formattedMessage = `
New message received from your website:
💎 Name: ${name}
📩 Email: ${email}
🚀 Message:
${message}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const params = {
        chat_id: chatId,
        text: formattedMessage,
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.ok) {
                // Show the success notification
                const notification = document.getElementById('message-notification');
                notification.textContent = 'Message sent successfully!';
                notification.style.backgroundColor = '#4CAF50';
                notification.style.display = 'block';

                // Clear the form
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            } else {
                alert('Message failed to send. Please try again later.');
            }
        })
        .catch((error) => {
            console.error('Error sending message:', error);
            alert('An error occurred. Please try again later.');
        });
}

// Handle form submission
document.getElementById('submit-button').addEventListener('click', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    sendMessageToTelegram(name, email, message);
});
