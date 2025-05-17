'use strict';

document.addEventListener("DOMContentLoaded", function(){
        console.log("DOM Content Loaded");

        const generateListButton = document.querySelector("#generateList");
        const myList = document.querySelector("#myList");

        generateListButton.addEventListener("click", function() {
            const inputItems = document.querySelectorAll("input");
            const listElement = document.createElement("ul");

            inputItems.forEach(function (inputItem) {
                const listItem = document.createElement("li");
                 listItem.innerText = "Your wish is: " + inputItem.value;
                 listElement.appendChild(listItem);
            });

            myList.appendChild(listElement);
            const messageHolder = document.createElement("h2");
            const message = "NOPE!";
            messageHolder.innerText = message;

            setTimeout(() => {
                myList.appendChild(messageHolder); 
                }, 1000);
        });
    });