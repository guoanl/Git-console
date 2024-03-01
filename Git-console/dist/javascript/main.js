$(function(){
        var codesec = $('.codesection')
        codesec.css('visibility','visible')
    $('.tab-options').on('click',function(){
        $(this).addClass('tab-option-actived').siblings().removeClass('tab-option-actived');
       if($(this).prop('id')==='about-tab'){
        $('#skill-content').hide();
        $('#about-content').show();
       }else if($(this).prop('id')==='skill-tab'){
        $('#about-content').hide();
        $('#skill-content').show();
       }
    })
    $('img').attr('draggable','false')
})