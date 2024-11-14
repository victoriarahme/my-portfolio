$(document).ready(function() {
    // When "Show More" is clicked
    $(".showMore a").on("click", function(e) {
        e.preventDefault(); // stops link redirecting

        var $this = $(this);
        var $content = $this.closest(".project").find(".showLess");

        var linkText = $this.text().toUpperCase();
    
//Togglin here//
if (linkText === "SHOW MORE") {
    linkText = "Show less";
    $content.slideDown(); //to open up my project details 
} else {
    linkText = "Show more";
    $content.slideUp(); //closes project info/details
}

        $this.text(linkText);
    });
});

