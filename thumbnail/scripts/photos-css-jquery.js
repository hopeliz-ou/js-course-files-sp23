$(document).ready(function() {
    
    $(".photo-card").hover(function() {
        
        $(this).css("background-size", "100%");
        
    }, function() {
        
        $(this).css("background-size", "75%");
        
    });
});