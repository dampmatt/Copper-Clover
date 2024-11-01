import "./styles.css";


const eve=(()=>{
    //variables
    const homeBtn= document.querySelector("#home-btn");
    const menuBtn=document.querySelectorAll("#menu-btn");
    const contactBtn=document.querySelector("#links-btn");
    const homeDiv=document.querySelector("#home-body");
    const menuDiv=document.querySelector("#menu-body");
    const contactDiv=document.querySelector("#contact-body");
    const contentDiv=document.querySelectorAll(".content-body");
    var currDiv=homeDiv;
    // bind
    homeBtn.addEventListener("click",goToHome);
    contactBtn.addEventListener("click",goToContact);
    menuBtn.forEach(btn=>btn.addEventListener("click",goToMenu));
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
})()