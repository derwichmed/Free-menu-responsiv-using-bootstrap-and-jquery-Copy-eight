$(function (){
    $('.menu_item').mouseover(function (){
        $(this).find('> .sub_menu').css('display','block');
        $(this).find('> img').css('display','block');
    });
    $('.menu_item').mouseout(function (){
        $(this).find('> .sub_menu').css('display','none');
        $(this).find('> img').css('display','none');
    });
    
    $('.sub_menu_item').mouseover(function (){
        $(this).find('> .sub_menu_content').css('display','block') 
    });
    $('.sub_menu_item').mouseout(function (){
        $(this).find('> .sub_menu_content').css('display','none'); 
    });
    
    isMenuHidden = true;
    $('.menu_icon > img').click(function (){
        if(isMenuHidden){
            $('.menu').css('display','block');
            isMenuHidden = false;
        }
        else{
            $('.menu').css('display','none');
            isMenuHidden = true;
        }
        
    });
});