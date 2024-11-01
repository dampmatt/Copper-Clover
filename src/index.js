import "./styles.css";
import {Menu} from './menu.js'

const eve=(()=>{
    //variables
    const menuItems=document.querySelector("#menu-list");
    const homeBtn= document.querySelector("#home-btn");
    const menuBtn=document.querySelectorAll("#menu-btn");
    const contactBtn=document.querySelector("#links-btn");
    const homeDiv=document.querySelector("#home-body");
    const menuDiv=document.querySelector("#menu-body");
    const contactDiv=document.querySelector("#contact-body");
    const starterDiv=document.querySelector(".starters");
    const mainDiv=document.querySelector(".main-course");
    const dessertDiv=document.querySelector(".desserts");
    const footerDiv=document.querySelector(".footer");
    const menu=new Menu();
    var currDiv=homeDiv;
    // bind
    homeBtn.addEventListener("click",goToHome);
    contactBtn.addEventListener("click",goToContact);
    menuBtn.forEach(btn=>btn.addEventListener("click",goToMenu));

    starterDiv.addEventListener("click",goToStarter);
    mainDiv.addEventListener("click",goToMainCourse);
    dessertDiv.addEventListener("click",goToDessert);
    // contentDiv.forEach(cCurrDiv);

    //render
    

    function goToHome(){
        currDiv.style.display="none";
        currDiv=homeDiv;
        homeDiv.style.display="block";

    }
    function goToMenu(){
        currDiv.style.display="none";
        currDiv=menuDiv;
        menuDiv.style.display="flex";

    }
    function goToContact(){
        currDiv.style.display="none";
        currDiv=contactDiv;
        contactDiv.style.display="flex";
    }

    function createMenuDiv(inp,str){
        const menuItemDiv = document.createElement("div");
        menuItemDiv.className = "content-body";
        menuItemDiv.id="menu-list";

        // Create and append h1 element
        const heading = document.createElement("h1");
        heading.innerText = str; // Make sure `str` is defined
        menuItemDiv.appendChild(heading);

        // Create and append ul element
        const ul = document.createElement("ul");
        ul.className = "menu-list";
        menuItemDiv.appendChild(ul);

        // Loop through `inp` array and add li elements
        inp.forEach(ele => {  // Make sure `inp` is an array with [name, price] pairs
            const li = document.createElement("li");
            li.innerText = `${ele[0]} - ${ele[1]}`;
            ul.appendChild(li);
        });
        document.body.insertBefore(menuItemDiv,footerDiv);
        currDiv=menuItemDiv;    
    }

    function goToStarter(){
        currDiv.style.display="none";
        createMenuDiv(menu.starters,"Starters");
    }
    function goToMainCourse(){
        currDiv.style.display="none";
        createMenuDiv(menu.mainCourse,"Main-course");
    }
    function goToDessert(){
        currDiv.style.display="none";
        createMenuDiv(menu.desserts,"Desserts");
    }
    
})()