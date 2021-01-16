// old way to use fetch()

// fetch("https://dog.ceo/api/breeds/list/all").then(function(response){
//     return response.json();
// }).then(function(data){
//     console.log(data);
// });

// New way of using fetch()
// we will use asynchronous functions
async function start(){
    // await makes a function wait for a promise.
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    console.log(data.message);
    createBreedList(data.message);
}
start();
// following function will take the dog data object
// And create a dropdown list.
function createBreedList(breedList){
    const breedElem = document.getElementById("breed");

    breedElem.innerHTML = `<select>
                <option>Choose a dog breed</option>
                ${Object.keys(breedList).map(function(breed){
                    return `<option>${breed}</option>`;
                }).join('')}
            </select>`;
}