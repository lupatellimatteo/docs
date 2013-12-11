$( document ).ready(function() {
  // Shift nav in mobile when clicking the menu.
  $("[data-toggle='bb-nav-top']").click(function() {
    $("[data-toggle='bb-nav-shift']").toggleClass("shift");
    $("[data-toggle='rst-versions']").toggleClass("shift");
  });
  // Close menu when you click a link.
  $(".bb-menu-vertical .current ul li a").click(function() {
    $("[data-toggle='bb-nav-shift']").removeClass("shift");
    $("[data-toggle='rst-versions']").toggleClass("shift");
  });
  var versions = $("[data-toggle='rst-current-version']");
  console.log(versions,"Versions");
  versions.on('click',function() {
    $("[data-toggle='rst-versions']").toggleClass("shift-up");
  });
  $("table.docutils:not(.field-list").wrap("<div class='bb-table-responsive'></div>");
});
