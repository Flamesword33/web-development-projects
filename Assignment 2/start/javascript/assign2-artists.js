function output_artist(picture, artist_name, num_of_sales){
    document.write('<div class="artist">');
    document.write('<img src="../images/artists/'+ picture +'.jpg">');
    document.write('<p>'+ artist_name +'</p>');
    document.write('<p><a href="#"><span class="glyphicon glyphicon-fire"></span>');
    document.write('Sales <span class="how_many_sales">' + num_of_sales + '</span>');
    document.write('</a></p>');
    document.write('</div> <!--artist-->');
    document.write('</div> <!--art_by_artist-->');
    document.write('');
}//output_artist

    var file_names = ["1","2","17","19", "21", "29", "95", "97", "98", "99", "101", "106"];
    var title = ["Picasso","Raphael","Van Gogh", "Botticelli", "Klimt", "Matisse", 
    "Michelangelo", "Vermeer", "da Vinci", "Cezanne", "Monet", "Caravaggio"];
    var num_of_sales = [66, 56, 40, 37, 36, 34, 32, 31, 26, 25, 25, 18];
