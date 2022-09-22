//* Materialize jQuery *//

$(document).ready(() => {
    $('.sidenav').sidenav({
       'preventScrolling': false,
       onOpenEnd: () => {
          $(".home__profile-intro").css("opacity", "0");
       },
       onCloseStart: () => {
          $(".home__profile-intro").css("opacity", "1");
       }
    });
    $('.fixed-action-btn').floatingActionButton({
       'direction': 'bottom',
       'hoverEnabled': false,
    });
    $('.carousel').carousel({
       'indicators': true,
       'shift': 70,
       'dist': -50,
       'padding': 60,
    });
    $('.carousel').carousel('set', 3);
    $('.scrollspy').scrollSpy({
       'scrollOffset': 0,
    });
 });
 
 
 //* Custom jQuery *//
 
 // To show sideBar like popUp on startUp
 setTimeout(() => {
    $('#slide-out').addClass('sidenav-fixed');
 }, 1000);
 setTimeout(() => {
    $('#slide-out').removeClass('sidenav-fixed');
 }, 2300);
 