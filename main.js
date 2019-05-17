window.onload = fetch('https://randomuser.me/api/?results=10').then(function(response){
    return response.json();
    }
).then(
    function(data){
        console.log(data);
        for (let x = 0; x < data.results.length; x++){
            document.getElementById("wanted").innerHTML = 
            "<div id='" + "crim" + x + ">" + "<div id='";
        }
    }
)