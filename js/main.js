
$(document).ready(function() {

	//   меню бургер  //

 $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });
 	//  ------------------ //

    function show(state)
    {
        document.getElementById('window').style.display = state;
        document.getElementById('gray').style.display = state;
    }




})			