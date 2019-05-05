var HttpClient = function(){
    this.get = function(aUrl, aCallBack){
        var anHttpRequest = newJSONHttpRequest();
        anHttpRequest.onreadystatechange = function (){
            if(anHttpRequest.readyState == 4 anHttpRequest.status == 200)
                aCallBack(anHttpRequest.respondeText);
        }

        anHttpRequest.open('GET', aUrl, true);
        anHttpRequest.send(null);
    }

    var aurl = "https://jsonplaceholder.typicode.com/todos";
    var client = new HttpClient();
    client.get(aurl, function(response){
        var response = JSON.parse(response);
        //alert(response1);

        document.getElementById("userid").innerHTML = response1.userid;
        document.getElementById("completed").innerHTML = response1.completed;
    });
}