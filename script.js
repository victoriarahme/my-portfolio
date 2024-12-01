$(document).ready(function() {
    // When "Show More" is clicked
    $(".showMore a").on("click", function(e) {
        e.preventDefault(); // stops link redirecting

        var $this = $(this);
        var $content = $this.closest(".project").find(".showLess");

        var linkText = $this.text().toUpperCase();

//Togglin here//
if (linkText === "SHOW MORE") 
{ linkText = "Show less"; $content.slideDown(); //to open up my project details 
} else { linkText = "Show more"; $content.slideUp(); //closes project info/details
    }
$this.text(linkText); });});

//contact section
//Step 3: validation for email

function validateEmail () {
    var email = document.getElementById('email');
    var emailValue = email.value.trim();

    var errorMessage = document.getElementById('emailError');

        if (emailValue.includes('.') && emailValue.includes('@') < emailValue.indexOf('.')) {
            errorMessage.style.display = 'none';
            email.style.backgroundColor = 'lightgreen';
         } else {
            error.Message.style.display = 'block';
            email.style.backgroundColor = 'Salmon';
         }
        }

        window.addEventListener("scroll", function () {
            var footer = document.querySelector("footer");
            console.log("Scroll position:", window.scrollY);  // Log scroll position
        
            if (window.scrollY > 100) {  // When scrolled more than 100px
                footer.classList.add("scroll");  // Add class to change background color
                console.log("Scroll class added");  // Log when class is added
            } else {
                footer.classList.remove("scroll");  // Remove class when at the top
                console.log("Scroll class removed");  // Log when class is removed
            }
        });
        