// TODO: Re-write

$(function() {
  $('.navigation__toggle').on('click', function() {
    $('body').toggleClass('js-menu-open');
  });

  $('.navigation__sub-menu-toggle').on('click', function(e) {
    e.preventDefault();
    var $parent = $(this).parent();
    var $menu = $parent.parent().find('.navigation__sub-menu');
    $parent.toggleClass('sub-menu-open');
    $menu.toggleClass('js-show')
  });
});