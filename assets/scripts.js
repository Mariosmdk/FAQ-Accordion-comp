$(document).ready(function(){
    $('#accordion > .text').slideUp();

        $("#accordion").each(function(){
            $(".header").on('click',function(){
                if($(this).next().is(":hidden")){
                    $(this).next().slideDown().addClass("open")
                    $(this).children().addClass("active")     
                }else{
                    $(this).next().slideUp().removeClass("open")
                    $(this).children().removeClass("active")
                }
            })
        
        })

    
})