$(document).ready(function(){


    $(document).on('click', '.content_show_hide, .content_title', function(){
        var self = $(this);
        var to_expand = self.attr('data-expand');
        //$('.content_div_content').removeClass('show');
        $('#'+to_expand).toggleClass('show');
        self.closest('.content_div').find('.expand-icon').html($('#'+to_expand).hasClass('show') ? 'remove_circle_outline' : 'add_circle_outline');
    });

    $(document).on('click', '#add_member, #add_task', function(){

        $('.prompt_overlay').show();
        $('body').addClass('overlay_applied');
    });

    $(document).on('click', '.cancel_delete, .cancel_modal', function() {
        $('.prompt_overlay').hide();
        $('body').removeClass('overlay_applied');
    });
});