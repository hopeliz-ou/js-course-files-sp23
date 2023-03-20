$(document).ready(function() {
    
    $(".photo-card").hover(function() {
        
        $(this).animate({backgroundSize: "100%"});
        
    }, function() {
        
        $(this).animate({backgroundSize: "75%"});
        
    });
});