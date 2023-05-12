

const buttonAppoiments = document.querySelector('#btn-customers');

let idCount=0;
//var objectAppoiments = [];

/*I GONNA PUT THIS AFTER EVERY CLICK OF THE BUTTON 
const appointmentJSON = JSON.stringify(objectAppoiments); //convert object from object to JSON String
localStorage.setItem('objectAppoiments',appointmentJSON); //save the JSON String in "Local storage"
*/

const appointmentJSON = localStorage.getItem('objectAppoiments'); 
var objectAppoiments = JSON.parse(appointmentJSON) || [];




buttonAppoiments.addEventListener('click', (eve)=>{
    eve.preventDefault();

    const name = document.querySelector('#name');
    const lastName = document.querySelector('#lastName');
    const celphone = document.querySelector('#celphone');
    const dateInput = document.querySelector('#date');

    const dateSelected = dateInput.value;

    if (name.value && lastName.value && celphone.value && dateSelected){

        idCount++;
        buttonAppoiments.disabled = false;

        let objectIndividual = {
            id : idCount,
            name : name.value,
            lastName : lastName.value,
            celphone : celphone.value,
            AppoimentDate : dateSelected
        }

        //console.log(objectIndividual);

        objectAppoiments.push(objectIndividual);
        console.log(objectAppoiments);

        cleanForm();
        createCards(objectAppoiments);


        const appointmentJSON = JSON.stringify(objectAppoiments); //convert object from object to JSON String
        localStorage.setItem('objectAppoiments',appointmentJSON); //save the JSON String in "Local storage"

        
    }else { 
        //buttonAppoiments.disabled = true;
        alert("Please, complete the data bottom");
    }
/*
    console.log(name.value);
    console.log(lastName.value);
    console.log(celphone.value);
    console.log(dateSelected);
    console.log(idCount);
*/
});

function cleanForm() { 
    const form = document.querySelector('#myForm');
    form.reset();

}

function available (){

    const name = document.querySelector('#name');
    const lastName = document.querySelector('#lastName');
    const celphone = document.querySelector('#celphone');
    const dateInput = document.querySelector('#date');

    const dateSelected = dateInput.value;

    if (name.value || lastName.value || celphone.value || dateSelected){

        buttonAppoiments.disabled =false;

    }

}

function createCards(objectAppoimentsArray) {

    //console.log(objectAppoimentsArray);

    const container = document.querySelector('#newCards');

    let card = "";

    objectAppoimentsArray.forEach(element => {
        /*
        console.log(element.name);
        console.log(element.lastName);
        console.log(element.celphone);
        console.log(element.AppoimentDate);*/
        
        card += `
        <div class="card">
            <div class="card-header">
                <p>Patient : ${element.id}</p>
            </div>
            <div class = "card-body">
                <h5 class="card-title" >Name : </h5>
                <p class="card-text">${element.name}</p>
                <h5 class="card-title">Last Name : </h5>
                <p class="card-text">${element.lastName}</p>
                <h5 class="card-title"> Cel : </h5>
                <p class="card-text">${element.celphone}</p>
                <h5 class="card-title">Appointment : </h5>
                <p class="card-text">${element.AppoimentDate}</p> 
            </div>
            <div class="cardButtons">
            <button id ="complete" class="btn btn-success" >Complete</button>
            <button id="delete" class="btn btn-danger" >Delete</button>
            
            </div>
        </div>
        
        `;
        
    });

    container.innerHTML = card;
    //console.log(card);
    
    
}
/*
let savedAppointments = JSON.parse(localStorage.getItem("objectAppoiments"));
if (savedAppointments){
    objectAppoiments = savedAppointments;
    
}*/



function deleteCita() {
    const buttons = document.querySelectorAll('#delete');
    /*buttons.forEach(button => {
        button.addEventListener('click',event => {
            console.log(`hola cmo estas soy el button ${event.target}`);

        })
        
    }
    ); */

    for (let i =0; i<buttons.length;i++){
        buttons[i].addEventListener('click',()=> {
            console.log('boton pulsado ' + buttons[i].id);
        })

    }

}

createCards(objectAppoiments);
deleteCita();

