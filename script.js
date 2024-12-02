
$(document).ready(function() {
    // When "Show More" is clicked
    $(".showMore a").on("click", function(e) {
        e.preventDefault(); // stops link redirecting

        var $this = $(this);
        var $content = $this.closest(".flex-proj1, .flex-proj2, .flex-proj3").find(".showLess");

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

        if (emailValue === "") {
            errorMessage.style.display = 'none'; // Hide the error message
            email.style.backgroundColor = ''; // Reset the background color
            return; 
        }
    
        // If the email is invalid (doesn't contain '@' and '.' or the '@' is before '.')
        if (emailValue.includes('@') && emailValue.includes('.') && emailValue.indexOf('@') < emailValue.indexOf('.')) {
            errorMessage.style.display = 'none'; // Hide error message for valid email
            email.style.backgroundColor = 'lightgreen'; 
        } else {
            errorMessage.style.display = 'inline'; // Show error message for invalid email
            email.style.backgroundColor = 'lightcoral'; 
        } }
    // event for gradient color effect on footer triggered by scroll
        window.addEventListener("scroll", function () {
            var footer = document.querySelector("footer");
            var scrollPosition = window.scrollY;
            
            footer.classList.remove("scroll-1", "scroll-2", "scroll-3", "scroll-4", "scroll-5", "scroll-6", "scroll-7");
            console.log("Scroll position:", window.scrollY);  // Log scroll position
        
            if (scrollPosition > 1400) {
                footer.classList.add("scroll-7"); // Add lightest color when scroll position > 1400px
                console.log("Scroll class scroll-7 added"); 
           
            }else if (scrollPosition > 1200){
                footer.classList.add("scroll-6");
                console.log("Scroll class scroll-6 added");
           
            }else if (scrollPosition > 1000){
                footer.classList.add("scroll-5");
                console.log("Scroll class scroll-5 added");
           
            }else if (scrollPosition > 800){
                footer.classList.add("scroll-4");
                console.log("Scroll class scroll-4 added");
           
            }else if (scrollPosition > 500){
                footer.classList.add("scroll-3");
                console.log("Scroll class scroll-3 added");
           
            }else if (scrollPosition > 400){
                    footer.classList.add("scroll-2");
                    console.log("Scroll class scroll-2 added");
           
                }else if (scrollPosition > 200){
                footer.classList.add("scroll-2");
                console.log("Scroll class scroll-2 added");
           
            }else if (window.scrollY > 100) {  // When scrolled more than 100px
                footer.classList.add("scroll");  // Add class to change background color
                console.log("Scroll class added");  // Log when class is added
           
            } else {
                footer.classList.remove("scroll");  // Remove class when at the top
                console.log("Scroll class removed");  // Log when class is removed
            }
        });
        
       