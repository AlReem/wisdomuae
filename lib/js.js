$("#add-family-member").click(function () {
    // $("tr#family-member-01").clone(true).attr("id", "added").insertBefore("#new-family-member");
    $("tr#new-family-member").clone(true).attr("id", "added").css("display","table-row").insertBefore("#new-family-member");
    // console.log("hello");
    return false;
});

$(".delete-family-member").click(function () {
    $(this).parent().parent().remove();
    return false;
});