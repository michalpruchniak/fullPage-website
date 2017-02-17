$('#fullpage').fullpage({
    anchors: ['start', 'about', 'portfolio', 'contact'],
    menu: 'menu',
    navigation: true,
    sectionsColor: [undefined, '#4BBFC3', '#7BAABE', '#E91E63'],
    afterLoad: function(undefined, index){
      $('#menu li').removeClass("active");
      $('#menu li').eq(index-1).addClass("active");
    }
});
