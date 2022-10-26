localStorage.setItem("ruben", "dany");
console.log('test')
localStorage.getItem("ruben")
let objJson = {
    prenom : "dany",
    age : 30,
    taille : 170
}
let objLinea = JSON.stringify(objJason);
localStorage.setItem("obj", objLinea);

let objLinea= localStorage.getItem(objJson);
let objJason = JSON.parse(objLinea);
alert(objJason.age) // renvoie 30