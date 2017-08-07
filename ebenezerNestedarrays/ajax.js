$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
var name = data.results[0].name.first;
    console.log(data);

    $("body").append("<h2>"+ name+"</h2>")

    $.ajax({
        url: 'https://restcountries.eu/rest/v2/alpha/'+ data.results[0].nat,
        dataType: 'json',
        success: function(data) {
            console.log(data.results.nat);
            $("body").append("<h2>"+ name+"</h2>")

     $.ajax({
        url: 'https://restcountries.eu/rest/v2/alpha/'+ data.results[0].nat,
        dataType: 'json',
        success: function(data) {
            console.log(data);
        }});
    }});
}});
