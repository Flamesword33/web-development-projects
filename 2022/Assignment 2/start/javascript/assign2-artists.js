/* Template code for reference within output_artist
<div class="col-md-2 artist">
<div class="thumbnail">
    <img src="../images/artists/1.jpg">
    <p>Picasso</p>
    <div class="btn-group-xs"><button type="button" class="btn btn-info"><p><a href="#">
        <span class="glyphicon glyphicon-fire icon-white"></span>
        Sales <span class="how_many_sales">66</span>
    </a></p></button></div>
</div>//end thumbnail
</div>//end col-md-2 artist
*/
function output_artist(picture, artist_name, num_of_sales){
    document.write('<div class="col-md-2 artist">');
    document.write('<div class="thumbnail">');
    document.write('<img src="../images/artists/'+ picture +'.jpg">');
    document.write('<p>'+ artist_name +'</p>');
    document.write('<div class="btn-group-xs"><button type="button" class="btn btn-info"><p><a href="#">');
    document.write('<span class="glyphicon glyphicon-fire icon-white"></span>');
    document.write('Sales <span class="how_many_sales">' + num_of_sales + '</span>');
    document.write('</a></p></button></div>');
    document.write('</div><!--end thumbnail-->');
    document.write('</div><!--end col-md-2 artist-->');
}//output_artist

function write_artists(){
    var file_names = ["1","2","17","19", "21", "29", "95", "97", "98", "99", "101", "106"];
    var title = ["Picasso","Raphael","Van Gogh", "Botticelli", "Klimt", "Matisse", 
    "Michelangelo", "Vermeer", "da Vinci", "Cezanne", "Monet", "Caravaggio"];
    var num_of_sales = [66, 56, 40, 37, 36, 34, 32, 31, 26, 25, 25, 18];

    for(var i=0; i<title.length; i++){
        output_artist(file_names[i], title[i], num_of_sales[i]);
    }//for title.length
}//write_artists