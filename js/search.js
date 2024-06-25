let input = document.getElementById("inputSearch");
let button = document.getElementById("btn");

function search() {
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("list");
    let li = ul.getElementsByTagName("tr");
 
    // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("span")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            button.style.display = "none" ;
        } else {
            li[i].style.display = "none";
            button.style.display = "none" 
        }
    }
}

document.addEventListener('keyup', search);

input.addEventListener('input', function () {
    if (!this.value.length) {
        more()
    } 
});

function more() {
    var list = $(".table-prices .box");
    var numToShow = 10; //сколько показывать элементов
    var button = $("button");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
      button.show();
    }
    list.slice(0, numToShow).show();
    button.click(function() {
      var showing = list.filter(':visible').length;
      list.slice(showing - 1, showing + numToShow).fadeIn();
      var nowShowing = list.filter(':visible').length;
      if (nowShowing >= numInList) {
        button.hide();
      }
    })
}

$(document).ready(function() {
    more()
}); 







