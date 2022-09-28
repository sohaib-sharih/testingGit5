//getElementBy ID, Class and TagName

// 1. without ID p tag using Getelementby Tag Name

var one = document.getElementsByTagName("p");
console.log(one)

// 2. accessing p tag using Index.
console.log(one[0]) // will give the inside content + tag(element)

var two = document.getElementsByClassName("cp")

console.log(two[0]) // even in this case, you will have to mention the index number to log the content of the element.

//  3. Accessing ptag using querySelector

var three = document.querySelector("p");

console.log("query selector => " + three.innerHTML)

// 4. using loop to access all P tags with querySelector

var four = document.querySelector("p");
console.log(four.innerHTML[2]) //will give the letter of the index inside the text of the first p tag.
var four = document.querySelector("p");
console.log(four.innerHTML.length) // will give the total number of letters in the 1st tag.
console.log(four.innerHTML)
// console.log(four[1])
// convert the object of P tag into an array
var box = Object.keys(document.getElementsByTagName("p"))
console.log(box);
console.log(box.length)

for(var i = 0; i < box.length; i++){
    var five = document.getElementsByTagName("p");
    console.log(five[i]);
}

// for(let key1 of box){
//     console.log(key1);
// }

// accessing the value of an object when using Query Selector

var six = document.querySelector("p")
console.log("query selector=> "+ six)
console.log(six.textContent)


// accessing the value of an Array when using getElementby Tag/class/id
var seven = document.getElementsByTagName("p");
console.log(seven);
console.log(seven.length)
console.log(seven[2])


for (pin of seven){
    console.log(seven.innerHTML)
}

// accessing value of an Array using getElementby ClassName
var eight = document.getElementsByClassName("cp")
console.log(eight)
console.log(eight[0])

// Changing image
function changeA(){
    // var imgA = document.querySelector("img"); // output will be an array
    var imgA = document.getElementsByTagName("img"); // output will be an array
    imgA[0].src = "./images/oop1.PNG"
    console.log(imgA)

}

// change color
function changeColor(){
    // var colorA = document.querySelector(".color")
    var colorA = document.getElementsByClassName("color")
    colorA[0].style = "color: yellow"
    console.log(colorA)
    colorA[1].style = "color: green"
    console.log(colorA)
}
// change color for all p tags
function changeColorB(){
    var convB = Object.keys(document.getElementsByTagName("p"))
    for(var c = 0; c < convB.length;c++){
        
        var colorB = document.getElementsByTagName("p")
        
        console.log(colorB[c].style = "color: pink")
    }
          
    }
   

//TESTING tag selector in loops
var test = document.getElementsByTagName("p")
console.log(test)
function testFunc(){

    for(let x of test){
        test.style = "color: pink" //does not change color
        console.log(x);
    }
}
// this is it.
// this is it 2
// hi
// new stash
