const houses = [
    {
        houseName:'Gryffindor'
    },
    {
        houseName:'Hufflepuff'
    },
    {
        houseName:'Ravenclaw'
    },
    {   houseName:'Slytherin'
    }];
  

const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML += stringToPrint;
};


// first function pulls the input from the form.

// second function will print to Dom with the math.random house name and the form input

// const getHouse = (housesArr) => {
//     let domstring += ''
//     const currentHouse = housesArr[i];
//     for (i=0; i < Math.floor(math.random() * 4); i++) {
//         domString += `${currentHouse.houseName}.`
//     };
// };




// const jumbotronClick = (event) => {
//     const jumbotron = event.target.id;
//     let domString = '';
    
const formMaker = () => {
    const formString = 
    `
    <div class="container" id="enterName">
              <div>
                  <h1>Enter First Year's Name</h1>
                  <div class="form-group d-flex justify-content-center">
                      <label for="studentName" class="d-flex justify-content-center">Student:</label>
                      <div class="d-flex justify-content-center">
                          <input type="text" class="form-control" name="inputName" id="inputName" placeholder="Neville Longbottom">
                      </div>
                  </div>
                  <div class="d-flex justify-content-end">
                      <div class="inline">
                          <button type="submit" class="btn btn-primary" id="sort">Sort!</button>
                      </div>
                  </div>
              </div>
    </div>
    `
    printToDom(formString, 'enterName');

}

document.getElementById('getSorting').addEventListener('click', () => {
    formMaker();
});



const houseGenerator = (event) => {
   console.log(event);
   event.preventDefault();
   const firstName = document.getElementById('inputName').value;
   console.log(firstName);
    let domString = '';
   const randomNumber = Math.floor(Math.random() * 4);
   console.log(randomNumber);
   console.log(houses[randomNumber]);
   let randomHouse = houses[randomNumber];
   
    
        domString += `

        <div id="cardName" class="border">
                <div class="card-body" id="card-input">
                  <h5 class="card-title">${firstName}</h5>
                  <p class="card-text">${randomHouse.houseName}</p>
                  <button id="expel" class="btn btn-primary expel">Expel</button>
                </div>
        `
    
      printToDom(domString, "cardName");

      expelListeners();
     
};




document.getElementById('enterName').addEventListener('click', function(event) {
    if (event.target.id === 'sort' ) {
        console.log(event.target.id);
        houseGenerator(event);
    }
}
);

// const expelButtons = document.getElementsByIdName('expel');
// console.log(expelButtons);

const expelListeners = () => {
    let expelButtons = document.getElementsByClassName('expel');
    console.log(expelButtons)
    for (let i = 0; i < expelButtons.length; i++) {
        const currentButton = expelButtons[i]
        currentButton.addEventListener('click', (event) => {
            console.log(event);
            console.log(event.target.parentElement);
            event.target.parentElement.remove();
        })
    }
 };

//  expelListeners();






