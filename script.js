console.log ('loaded')
let rootElement = document.querySelector('#root')
//console.log(rootElement)

//rootElement.insertAdjacentHTML('beforeend', '<h2>Hello world</h2>')

let htmlContent = "<h2>Hello world</h2>";
rootElement.insertAdjacentHTML('beforeend', htmlContent)

/* let counter = 0;
while (counter < 10) {
    rootElement.insertAdjacentHTML('beforeend', htmlContent)
    counter++;
} */

let array ["alma", "körte", "szilva", "eper", "birs"]

for (let counter = 1; counter <= 10; counter++) {
    console.log(counter) 
    rootElement.insertAdjacentHTML('beforeend', htmlContent)
}
for (let index = 0; index <= 10; index++) {
    rootElement.insertAdjacentHTML('beforeend', `<h2> ${array[index]} </h2>`);
}