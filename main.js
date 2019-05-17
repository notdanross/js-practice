window.onload = fetch('https://randomuser.me/api/?results=10').then(function(response){
    return response.json();
    }
).then(
    function(data){
        console.log(data);
        for (let x = 0; x < data.results.length; x++){
           var newCard = document.createElement("div");
           var newContent = document.createTextNode(data["results"][x]["name"]["first"] + " " + data["results"][x]["name"]["last"]);
           newCard.appendChild(newContent);
           var element = document.getElementById("wanted");
           element.appendChild(newCard);
            // "<div id='" + "crim" + x + ">" + "test" + "</div>";
        }
    }
)