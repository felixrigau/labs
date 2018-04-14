$(document).ready(function(){
    $('.js-participate').click( function () {
        var modal = $('.modal-wrapper');
        modal.addClass('d-flex');
        setTimeout(function () {
            modal.addClass('modal-show');
        })
        
    });
    
    $('.modal-wrapper').click( function (event) {
        if (event.target === this || event.target.parentNode.getAttribute('aria-label') === 'close') {
            var modalWrapper = $(this);
            modalWrapper.removeClass('modal-show');
            setTimeout(function () {
                modalWrapper.removeClass('d-flex');
            },500);
        }
    });
});
