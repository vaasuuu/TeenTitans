// Function to send Email after form submission(using SMTP)
function sendEmail(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var sub = document.getElementById('subject').value;
    var message = document.getElementById('textbox').value;
    let body = "Name: " + name + "<br> Email: " + email + "<br>Subject: " + sub + "<br> Message: " + message; 

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "luxit@elasticemail.com", 
        Password : "7BEC708C56D41763CD99FE1E9869F6D77A8D",
        To : 'lakshit1729@gmail.com', //Id to which the mail will be sent
        From : 'lakshit5490@gmail.com',  //Id from which the mail will be sent
        Subject : "New contact from enquiry",
        Body : body //Body includes the name,email,subject,message and the body
    }).then(    
      message => alert("Message Sent Successfully")
    );
}

secelm=document.getElementById('btn'); //Here element is the submit button

//function for animation of the submit button when mouse is over it
function anima()  {
    var i = 0;
    const elm = document.getElementById('btn');
    let id = null;
    clearInterval(id);
    id = setInterval(reduce,5);
    
    //Reducing the border of the button
    function reduce(){
        if (i==22){
            clearInterval(id);
        } else{
            i++;
            elm.style.borderRadius= (i+"px");
        }
    }
}

//function for animation of the submit button during mouseout event
function anima2()  {
    var i = 22;
    const elm = document.getElementById('btn');
    let id = null;
    clearInterval(id);
    id = setInterval(reduce,5);
    
    //Increasing the border of the submit button
    function reduce(){
        if (i==7){
            clearInterval(id);
        } else{
            i--;
            elm.style.borderRadius= (i+"px");
        }
    }
}

secelm.addEventListener('mouseover',anima); //Adding the events to the function anima
secelm.addEventListener('mouseout', anima2); //Adding the events to the function anima2


// Function for searching movies/series
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
            window.location = "index.html";
        }
        else if (arr[m].indexOf(que) > -1){
            let arr2 = document.getElementsByClassName('card')
            for (var n=0;n<arr2.length;n++){
                arr2[n].style.display = 'none'; // removing all the movies
            }

            document.getElementById('moviesmore').style.display='none'; //removing the more in movies
            document.getElementById('seriesmore').style.display='none'; //removing the more in series
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
