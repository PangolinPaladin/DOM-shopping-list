'use strict';

document.addEventListener("DOMContentLoaded", function(){
        console.log("DOM Content Loaded");

        const generateListButton = document.querySelector("#generateList");
        const myList = document.querySelector("#myList");

        generateListButton.addEventListener("click", function(){
            const inputItems = document.querySelectorAll("input");
            const listElement = document.createElement("ul");

            inputItems.forEach(function (inputItem) {
                const listItem = document.createElement("li");
                    listItem.innerText = inputItem.value;
                    listElement.appendChild(listItem);  
            });

            myList.appendChild(listElement); 
        })
})

#need to come back to this in the future and review and fully understand. 
s