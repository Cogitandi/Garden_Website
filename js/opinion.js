wypisz();
function wypisz() {
    var html ='';
    var lista = JSON.parse(localStorage.getItem('lista'));

    if (lista!=null)
    {
        html += '<h2 class="h1-responsive font-weight-bold text-center my-4">Twoje opinie</h2>';
        html += '<div class="d-flex justify-content-around flex-wrap">';
        for(i=0;i<lista.length;i++) //pobierz informacje o zadaniach z listy
        {


            html += '<div class="mt-2 card border-dark mb-3 d-flex flex-wrap" style="max-width: 18rem;">';

            if( lista[i].opinia === "niePolecam") {
                html += '<div class="card-header" negative>Nie polecam</div>'; 
            } else {
                html += '<div class="card-header" positive>Polecam</div>'; 
            }

            html += '<div class="card-body text-dark">';
            html += '<h5 class="card-title">'+lista[i].name+' '+lista[i].lastname+'</h5>';
            html += '<p class="card-text" style="width: 15rem;" >'+lista[i].text+'</p>';
            html += '<button class="btn btn-primary m-2" type="submit" onClick="usun('+i+')">usuń</button>';
            html += '<button class="btn btn-primary" type="submit" onClick="edytuj('+i+');">edytuj</button>';
            html += '</div></div>';
        }
        html += '</div>';
        document.getElementById('opinia').innerHTML = html;
    } 
}
function usun(i) {
    var lista = JSON.parse(localStorage.getItem('lista'));
    lista.splice(i,1);
    localStorage.setItem('lista', JSON.stringify(lista));
    wypisz();

}
function zapisz() {  
    var lista = JSON.parse(localStorage.getItem('lista'));
    if( sessionStorage.getItem("edit") === "1") {
        var i = sessionStorage.getItem("indeks");
        lista[i].name = document.getElementById('name').value;
        lista[i].lastname = document.getElementById('lastname').value;
        lista[i].text = document.getElementById('message').value;
        if( document.getElementById('polecam').checked === true ) {
            lista[i].opinia = "polecam";
        }
        if( document.getElementById('niePolecam').checked === true ) {
            lista[i].opinia = "niePolecam";
        }
        localStorage.setItem('lista', JSON.stringify(lista)); //zapisz nową listę
       
        sessionStorage.removeItem("edit");
        sessionStorage.removeItem("indeks");
    } else {
        var item = {};
        item.name = document.getElementById('name').value;
        item.lastname = document.getElementById('lastname').value;
        item.text = document.getElementById('message').value;
        if( document.getElementById('polecam').checked === true ) {
            item.opinia = "polecam";
        }
        if( document.getElementById('niePolecam').checked === true ) {
            item.opinia = "niePolecam";
        }
        //odczyt listy obiektów z localStorage (jeśli już istnieje):
        
        if (lista===null) lista=[]; //pracujemy z tablicą obiektów
        lista.push(item); //dodaj nowy obiekt do listy
        localStorage.setItem('lista', JSON.stringify(lista)); //zapisz nową listę
    }
}
function edytuj(i) {
    var lista = JSON.parse(localStorage.getItem('lista'));
    document.getElementById('name').setAttribute('value', lista[i].name);
    document.getElementById('lastname').setAttribute('value', lista[i].lastname);
    document.getElementById('message').value=lista[i].text;
    if( lista[i].opinia === "polecam") {
        document.getElementById('polecam').checked = true;
    }
    if( lista[i].opinia === "niePolecam") {
        document.getElementById('niePolecam').checked = true;
    }

    sessionStorage.setItem("edit",1)
    sessionStorage.setItem("indeks",i)
}