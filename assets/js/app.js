$(document).ready(function() {
  /**
   * Función de la vista splash inicial
   *
   */
  $().ready(function() {
    $("#splash").fadeIn(500).fadeOut(5000);
  });
  /**
   * Función del buscador
   *
   */
   $('.search-panel .dropdown-menu').find('a').click(function(e) {
 		e.preventDefault();
 		var param = $(this).attr("href").replace("#","");
 		var concept = $(this).text();
 		$('.search-panel span#search_concept').text(concept);
 		$('.input-group #search_param').val(param);
 	});
  /**
   * Función para filtrar por tipo de comida
   */
  $('#peruana').click(function(){
    $('#img-peruana').fadeIn(1000).show();

  })
})
