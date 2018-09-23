$(document).ready(function(){
    flag = 0;
    $(".menuIcon").click(function(){
        if(flag==0){
            $(".open").hide();
            $(".close").show();
            $(".main").fadeIn(1000);
            flag=1;
        }
        else{
            $(".open").show();
            $(".close").hide();
            $(".main").fadeOut(1000);
            flag=0;
        }
    });

    $("#contacts").click(function(){
        $(".main").fadeOut(1000);
        $(".open").show();
        $(".close").hide();
        window.location.hash = '#contact';
    })
    $("#products").click(function(){
        $(".main").fadeOut(1000);
        $(".open").show();
        $(".close").hide();
        window.location.hash = '#product';
    })
    $("#aboutus").click(function(){
        $(".main").fadeOut(1000);
        $(".open").show();
        $(".close").hide();
        window.location.hash = '#about';
    })

});