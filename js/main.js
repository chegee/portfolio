$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 57;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 777);
  e.preventDefault();
});

// $("#navbarNav li a").click(function() {
//   $("html, body").animate({
//    scrollTop: $($(this).attr("href")).offset().top + "px"
//   }, {
//    duration: 800
//   });
//   return false;
// });

/*$('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
 
 
        $('body,html').animate({
            scrollTop: top
        }, 600);
  });*/

/*var s = window.screen;  
    var width = q.width = s.width;
    var height = q.height = s.height;
    var letters = Array(256).join(1).split('');
    var draw = function () {
    q.getContext('2d').fillStyle='rgba(0, 18, 146,.09)'; //Тут цвет фона
    q.getContext('2d').fillRect(0,0,width,height);
    q.getContext('2d').fillStyle='#fffdfd'; //Тут цвет букв
    letters.map(function(y_pos, index){
    text = String.fromCharCode(65+Math.random()*33);
    x_pos = index * 9;
    q.getContext('2d').fillText(text, x_pos, y_pos);
    letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
    });
   };
   setInterval(draw, 53);*/
/*$('.flowing-scroll').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 500 // скорость прокрутки
        );
    }
    return false;
});*/

/*$(document).ready(function(){
    $('a[class^="ac"]').click(function(){ //берем все ссылки атрибу href которых начинается с #
      var $element = $('a[name=' + $(this).attr('href').substr(1) + ']');
      if($element.length == 1) { //на странице есть только 1 элемент с указанным якорем
         $('html, body').animate({ scrollTop: $element.offset().top }, 500); // анимируем скролл к элементу
      }     
      return false;
    });
});*/

function externalLinks() {
    links = document.getElementsByTagName("a");
    for (i=0; i<links.length; i++) {
      link = links[i];
      if (link.getAttribute("href") && link.getAttribute("rel") == "external")
      link.target = "_blank";
    }
   }
   window.onload = externalLinks;