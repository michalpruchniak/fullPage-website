$('#fullpage').fullpage({
    anchors: ['start', 'o-mnie', 'moje-portfolio', 'kontakt'],
    menu: 'menu',
    navigation: true,
    sectionsColor: [undefined, '#4BBFC3', '#BA68C8', '#80CBC4'],
    afterLoad: function(undefined, index){
      $('#menu li').removeClass("active");
      $('#menu li').eq(index-1).addClass("active");
    }
});
