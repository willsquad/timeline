$(document).ready(function() {
    
    /* Clicking the Task circles */
    $(document).on('click', '.graph_task_click_js', function(){
        var self = $(this);
        var task = self.attr('data-task'); 
    });

    /* Closing the RHS Div */
    $(document).on('click', '.close_rhs', function(){
        $('.timeline_rhs__sliding_rhs_div').addClass('animated slideOutRight');
    });

    /* Clicking the project Tabs */
    $(document).on('click', '.rhs_project_tab_js', function(){
        $('.rhs_project_tab_js').removeClass('active');
        $(this).addClass('active');
        var project_id = $(this).attr('data-project');
        var project_sumamry = $(this).attr('data-summary');

        $('.project_task_tbody_js').removeClass('active');
        $('#'+project_id).addClass('active');

        $('#project_name_title').html(project_id);
        $('.project_summary').html(project_sumamry);
    });

    
});