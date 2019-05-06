//arquivo com a chamada da API 
var HttpClient = function(){
	
	$.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        method: "GET",
        dataType: 'json',
        success: function(data) {
          console.log(data);
        
          var html_to_append = '';
        
    $.each(data, function(i, item) {
            html_to_append +=
            '<tr>' +
              '<td class="id">'+ item.id +'</td>' +
              '<td class="title">'+ item.title +'</td>' +
              '<td class="completed">'+ item.completed +'</td>' +
              '<td>'+ item.userId +'</td>' +
              '</tr>';
       });

          $("#items-container").html(html_to_append);
        },
        error: function() {
          console.log(data);
        }
    });
}

HttpClient();