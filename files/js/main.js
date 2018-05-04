$(document).ready(function() {
    
    
    $(document).on('click', '.graph_task_click_js', function(){
        var self = $(this);
        var task = self.attr('data-task');

        
    });

    $(document).on('click', '.close_rhs', function(){
        $('.timeline_rhs__sliding_rhs_div').addClass('animated slideOutRight');
    });
});