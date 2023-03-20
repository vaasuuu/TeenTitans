// Function for searching series
function search(){
    let que = document.getElementById('searchtext').value.toLowerCase(); // variable to take the searched element
    var eleme = document.getElementsByClassName('card');
    let arr=[]; //array to store all the id's of all the cards
    let x = 0;
    let arr2=[];
    for(var k=0;k<eleme.length;k++){
        arr.push(eleme[k].id);
    }

    for(var m=0;m<arr.length;m++){
        if (que==""){
            window.location = "series.html";
        }
        else if (arr[m].indexOf(que) > -1){
            let arr2 = document.getElementsByClassName('card')
            for (var n=0;n<arr2.length;n++){
                arr2[n].style.display = 'none'; // removing all the movies
            }
            document.getElementById(arr[m]).style.display=""; // displaying only the searched one
            x=1
        }
    }
    if ((x==0) && (que!="")){
        window.alert('Movie/Series not found');
    }
}

// function when enter key is pressed
function yourFunctionName(event) {
    if (event.keyCode == 13) {
       search()
       return true;
    } else {
       return true;
    }
 }

let icon=document.getElementById("lmdm")

 function darkmode()
 {
    document.body.classList.toggle("lighttheme");
 }
