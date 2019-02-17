   $(document).ready(function(){
   
    $("ul").on("click" , "input[type=checkbox]" , function(){
        $(this).closest("li").toggleClass("completed-todo")
    })
    $("#add-new-todo-button").click(function(){
        var todoBlock = $(this).closest("#new-todo-block")
        var description = todoBlock.find("#new-todo-description")
        var pomodoroEstimate = todoBlock.find("#new-pomodoro-estimate")
        
        $("ul").append("<li> <input type='checkbox' /> " + description.val() + 
        " <span class='pomodoro-estimate'>" + pomodoroEstimate.val() + " pomodoros</span> </li>")
        description.val("")
        pomodoroEstimate.val("")
    })
    
    var test=1;
    $("#edit-todo-button").click(function(){
        if(test === 1){
        $("#edit-todo-button").addClass("colorbutton")
        test=0
        }else{
            $("#edit-todo-button").removeClass("colorbutton")
            test = 1
        }
    })
})
    