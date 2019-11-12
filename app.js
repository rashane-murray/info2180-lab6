window.onload = function(){
    this.document.getElementById("button").onclick = function(){
        search()
    }
}

function search(){
    var x = new XMLHttpRequest();
    x.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            alert(this.responseText);
        }
    };
    x.open("GET", "http://localhost:8000/superheroes.php", true);
    x.send();
}