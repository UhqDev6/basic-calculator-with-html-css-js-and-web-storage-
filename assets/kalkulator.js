// //array menggunakan notasi literal
// const fruits = ['apple', 'banana'];
// console.log('jumlah buah ' + fruits.length);

// //array menggunakan array() constructor
// const fruits1 = new Array('apple','banana','anggur');
// console.log('jumlah buah ' + fruits1.length);

// const fruits3 = 'Anggur, Durian, Semangka'.split(',');
// console.log(fruits3.length);

// //membuat sebuah string dari array
// const fruits4 = ['apple', 'semangka'];
// const fruitsString = fruits4.join(' ');
// console.log(fruitsString);

// //Periksa apakah array berisi item tertentu
// const fruits5 = ['apple', 'banana'];
//  console.log(fruits5.includes('banana')); //nilai true
// console.log(fruits5.includes('cherry')); // nilai false

// //Jika indexOf() tidak mengembalikan -1, array berisi item yang diberikan.
//  console.log(fruits5.indexOf('pisang') !== -1); //nilai true
//  console.log(fruits5.indexOf('banana') !== -1); //nilai false

//  //menambahkan sebuah item kedapalam array menggunakan method push()
//  const fruits6 = ['banana','alvokat', 'belimbing'];
//  const newItem = fruits6.push('mangga');
//  console.log(fruits6);
//  console.log(newItem);

//  //menghapus item terakhir dalam sebuah array menggunakan method pop()
//  const fruits7 = ['banana','apple','durian'];
//  const removeItem = fruits7.pop();
//  console.log(fruits7);
//  console.log(removeItem);

//  //mengakses array dengan metode for of
//  const myArray = ['banana','apple'];
//  for(const arraItem of myArray){
//     console.log('ini dengan metode for of : ' + arraItem);
//  }


//  //mencoba fungsi alert()
// //  const firstName = prompt("Nama depan : ");
// //  const lastName = prompt("Nama belakang : ");
// //  const language = prompt("bahasa : ");

// //  const user = {
// //     name: {
// //         first: firstName,
// //         last: lastName,
// //     },
// //     lang: language
// //  };

// // if(user.language === "english") {
// //     alert('nama saya = ' + user.name.first + '' + user.name.last + 'dan saya bisa berbahasa : ' + user.lang);  
// // }

// const getItem = document.querySelector('#imgItem');
// getItem.setAttribute('src', 'assets/fiah.png');

// const newElement = document.createElement('p');
// newElement.innerHTML = 'Hello world <span id="count">0</span>';
// document.body.appendChild(newElement);


// const coutElement = document.addEventListener('click', function(event){
//     document.querySelector('#count').innerHTML++;
// })


//membuat object dari kalkulator
const Calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false,
};

//fungsi update data pada display
function updateDisplay() {
    document.querySelector('#displayNumber').innerHTML = Calculator.displayNumber;
}

//membersihkan data pada kalkulator
function clearCalculator() {
    Calculator.displayNumber = '0';
    Calculator.operator = null;
    Calculator.firstNumber = null;
    Calculator.waitingForSecondNumber = false;
}

//memasukkan data kedalam display
function inputDataToDisplay(digit) {
    if(Calculator.displayNumber === '0'){
        Calculator.displayNumber = digit;
    }else{
        Calculator.displayNumber += digit;
    }

}
const buttons = document.querySelectorAll('.button');

for(const tempButton of buttons) {
    tempButton.addEventListener('click', function(event){
        //untuk mendapatkan object element pada saat di click
        const target = event.target;

        if(target.classList.contains('clear')){
            clearCalculator();
            updateDisplay();
            return;
        }
        if(target.classList.contains('negative')){
            inverseNumber();
            updateDisplay();
            return;
        }
        if(target.classList.contains('operator')){
            handleOperator(target.innerText);
            return;
        }
        if(target.classList.contains('equals')){
            performCalculator();
            updateDisplay();
            return;
        }
        inputDataToDisplay(target.innerText);
        updateDisplay();
    });
}

//membuat fungsi inverse number 
function inverseNumber() {
    if(Calculator.displayNumber === '0'){
        return;
    }
    Calculator.displayNumber = Calculator.displayNumber * -1;
}

//membuat fungsi untuk menghandle operator
function handleOperator(operator) {
    if(!Calculator.waitingForSecondNumber){
        Calculator.operator = operator;
        Calculator.waitingForSecondNumber = true;
        Calculator.firstNumber = Calculator.displayNumber;

        //mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angkat pertama lagi
        Calculator.displayNumber = '0';
    } else {
        alert('operator sudah ditetapkan');
    }
}


//membuat fungsi performCalculation, fungsi yang digunakan untuk melakukan kalkulasi
//terhadap nilai pada object kalkulator
function performCalculator() {
    if(Calculator.firstNumber == null || Calculator.operator == null) {
        alert('anda belum menetapkan operator');
        return;
    }

    let result = 0;
    if(Calculator.operator === '+'){
        result = parseInt(Calculator.firstNumber) + parseInt(Calculator.displayNumber);
    } else {
        result = parseInt(Calculator.firstNumber) - parseInt(Calculator.displayNumber);
    }

    const history = {
        firstNumber: Calculator.firstNumber,
        secondNumber: Calculator.displayNumber,
        operator: Calculator.operator,
        result: result
    }

    putHistory(history);
    Calculator.displayNumber = result;
    renderHistory();
}


//mengecek apakah web storage (session storage atau localstorage) support dengan browser
// if(typeof(Storage) !== 'undefined') {
//     alert('browser mendukung s');
// } else {
//     alert('browser tidak mendukung sessionStorage');
// }

//penerapan session storage
// const cacheKey = 'NUMBER';
// if(typeof(Storage) !== 'undefined'){
//     //mengecekan apakah data sessionstorage dengan key number tersedia atau belum
//     if(sessionStorage.getItem(cacheKey) === 'undefined') {
//         //jika belum maka atur dengan nilai awal yakni 0
//         sessionStorage.setItem(cacheKey, 0);
//     }

//     const buttonKlick = document.querySelector('#buttonKlick');
//     const count = document.querySelector('#count');
//     buttonKlick.addEventListener('click', function (event) {
//         let number = sessionStorage.getItem(cacheKey);
//         number++;
//         sessionStorage.setItem(cacheKey, number);
//         count.innerHTML = sessionStorage.getItem(cacheKey);
//     });
// } else {
//     alert('browser tidak mendukung web storage');
// }






