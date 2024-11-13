


$(document).ready(function() {
$(".showMore a").on("click", function(event) {
    event.preventDefault();
    console.log("Show more");

    var $this = $(this); 
    var $content = $this.closest("section").find(".showLess");
    var linkText = $this.text().toUpperCase();    

    if(linkText === "SHOW MORE"){
        linkText = "Show less";
        $content.removeClass("showLess").addClass("showMore").slideDown(400);
    } else {
        linkText = "Show more";
        $content.removeClass("showMore").addClass("showLess").slideUp(400);
    }

    $this.text(linkText);
});

});

console.log($);