$(document).ready(function(){

    //  resume.showing
    $('.common_resume').on('click', function (e) {
        e.preventDefault();
        var target = $(this).data('target');
        $("#" + target).toggle();
        $(".resume_default").not("#" + target).hide();
      
    });

    //projects button 
    $('.tab').on('click', function () {
        // Remove 'active' class from all tabs
        $('.tab').removeClass('resume_active');
    
        // Add 'active' class to the clicked tab
        $(this).addClass('resume_active');
    });



});