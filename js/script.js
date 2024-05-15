document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll(".animated-list li");
    document.body.classList.add('night-mode');
    document.querySelector('.top-container').classList.add('night-mode');
    
    

    // Function to check if element is in viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to trigger the profile content animation when list items enter the viewport
    function checkScroll() {
        listItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add("active");
            }
        });
    }

    // Event listeners for scroll and resize events
    window.addEventListener("scroll", function() {
        checkScroll();
    });

    window.addEventListener("resize", function() {
        checkScroll();
    });

    // Initial check for elements in viewport
    checkScroll();
});

// Functionality for toggling day and night mode on hover
document.getElementById('top-cloud').addEventListener('mouseenter', function() {
        document.body.classList.add('night-mode');
        document.querySelector('.top-container').classList.add('night-mode');
});

document.getElementById('bottom-cloud').addEventListener('mouseenter', function() {
        document.body.classList.remove('night-mode');
        document.querySelector('.top-container').classList.remove('night-mode');
});