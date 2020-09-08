$(function(){
    var btn1, btn2, btn3, btn4, reset, panelId, panels;

    btn1 = $("#btn1");
    btn2 = $("#btn2");
    btn3 = $("#btn3");
    btn4 = $("#btn4");
    reset = $("#reset");
    panels = $("[name=panel]");

    $(btn1).on("click", togglePanel);
    $(btn2).on("click", togglePanel);
    $(btn3).on("click", togglePanel);
    $(btn4).on("click", togglePanel);
    $(reset).on("click", clearPanelStyle);

    function togglePanel(){
        panelId = $(this).attr("data-target");
        $.each(panels, function(i, panel){
            $(panel)[0].style.display = "";
            if ($(panel).attr("id") != panelId){
                $(panel)[0].style.display = "none";
            }
        });
    }

    function clearPanelStyle(){
        $.each(panels, function(i, panel){
            $(panel)[0].style.display = "initial";
        });
    }
});
