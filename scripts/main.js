const image = document.querySelector("img");


image.addEventListener("click", () =>{
    const src = image.getAttribute("src");
    if(src == "/images/Furude_Rika_cat.png"){
        image.setAttribute("src", "/images/meep.png")
    } else{
        image.setAttribute("src", "/images/Furude_Rika_cat.png");
    }
});
