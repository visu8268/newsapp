// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

let newsData=JSON.parse(localStorage.getItem("news")) || [];

newsData.map(function(el,i){
   
    let results=document.createElement("div");
results.setAttribute("id", "newsdetail");

let image_box=document.createElement("div");
    image_box.setAttribute("id","imag");
    
    let image=document.createElement("img");
    image.src=el.articles[i].urlToImage;

    image_box.append(image);
    results.append(image_box);
    document.getElementById("detailed_news").append(image_box)

})