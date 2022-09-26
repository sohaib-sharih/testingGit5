var box = document.querySelector(".classA")
console.log(box);
function media(){
    console.log("Hello!")
}
function mediab(){
         
        var pTag = document.querySelector("p")
        console.log(pTag)
}
mediab();

// var a = prompt("enter your number?")


var a = document.querySelector(".entNum").innerHTML
function mediac(){
    if(a < 5){
        console.log("You are right")
    } else if(a > 5){
        console.log("Your number is above 5")
    }
}
// mediac(a)

// replacing text

function mediaD(){
    var changeD = document.querySelector(".changeText");
    changeD.innerHTML = "Today was Friday!"
}

// replacing text 2

function mediaE(){
    var changeE = document.querySelector(".changeText2");
    changeE.innerHTML = "New Text";
}
// Replacing text 3 for multiples tags or classes

function mediaF(){
    // var changeF = document.getElementsByTagName("p")
    var changeF = document.querySelector("p")
    changeF[5].innerHTML = "Mazda"
}

// Checking number of P tags

function tagsNum(){
    var tagsA = document.querySelector("p") // will display all ELEMENTS + CONTENT + first found Tag only.
    console.log("Query selector => " + tagsA);
    var tagsA = document.getElementsByTagName("p")
    console.log("getelementbyTageName + index => "+ tagsA[3]); // can use indexes in get elementbyTAG, class or ID
    var tagsB = document.getElementsByTagName("h3") //will display all elements h3 tag in array
    console.log("getElementsbyTagName(\"h3\")" + tagsB)
    var tagsC = document.getElementsByTagName("input")
    console.log("input => " + tagsC)
    var tagsD = document.querySelector("h3") //will display all elements h3 tag in array + CONTENT
    console.log("Query selector of h3 => " + tagsD)
    var tagsD = document.querySelector("h3").innerHTML //will display all elements CONTENT only
    console.log("Query selector of h3 + .innerHTML =>" + tagsD)
    var tagsD = document.querySelector("h3").innerText //will display all elements CONTENT only
    console.log("Query selector of h3 + .innerText =>" + tagsD)
    var tagsE = document.getElementsByClassName("changeText2") //will display all elements of defined className in array
    console.log(tagsE)
    var tagsE = document.getElementsByTagName("p") //will display all elements of defined className in array
    console.log(tagsE[2])
    
    var tagsF = document.getElementsByTagName("p") //will give an ERROR UNDEFINED
    
    console.log("GetElementbyTagName gives an output of UNDEFINED when using .innerText => " + tagsF.innerText)
    console.log("GetElementbyTagName gives an output of UNDEFINED when using .innerHTML => "+ tagsF.innerHTML)
    console.log("without using .innerHTML + .innerText => "+ tagsF)

}

// Change image
function change(){
    var changeImg = document.getElementById("replaceImg");
    changeImg.src = "./images/oop1.PNG"
}

// Change image 2

function change2(){
    // var changeImgB = document.querySelector("imgB")
    var changeImgB = document.getElementById("imgB")
    changeImgB.src = "./images/one.PNG"
}