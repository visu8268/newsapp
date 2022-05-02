// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

document.querySelector("#in").addEventListener("click",myindia);


function myindia(){
  
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`

    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        append(res);
        console.log(res);
    
    })
    .catch(function (err){
        console.log(err);
    })

}
document.querySelector("#ch").addEventListener("click",mychina);


function mychina(){
  
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch`

    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res);
        append(res);
    
    })
    .catch(function (err){
        console.log(err);
    })
    
}

document.querySelector("#us").addEventListener("click",myusa);


function myusa(){
  
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=us`

    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res);
        append(res);
    
    })
    .catch(function (err){
        console.log(err);
    })
    
}

document.querySelector("#uk").addEventListener("click",myuk);


function myuk(){
  
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk`

    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res);
        append(res);
    
    })
    .catch(function (err){
        console.log(err);
    })
    
}

document.querySelector("#nz").addEventListener("click",mynz);


function mynz(){
  
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz`

    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res);
        append(res);
    
    })
    .catch(function (err){
        console.log(err);
    })
    
}
   
//  let news=document.getElementById("search_input").value;
 
// function searchnews(e){
//     e.preventDefault();

//     const url=`https://masai-mock-api.herokuapp.com/news?q=${news}`


//     fetch(url)
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(res){
//         console.log(res);
    
//     })
//     .catch(function (err){
//         console.log(err);
//     })

// }

let newsdata=JSON.parse(localStorage.getItem("news")) || [];

function append(data){

    document.getElementById("results").innerHTML=null;

for(let i=0; i<data.articles.length; i++){

    let news=document.createElement("div");
    news.setAttribute("class","news");
    
  
    let image_box=document.createElement("div");
    image_box.setAttribute("class","imag");
    
    let image=document.createElement("img");
    image.src=data.articles[i].urlToImage;

    let detail=document.createElement("div");
    detail.setAttribute("class", "detail");


    let title=document.createElement("h3");
      title.innerText=data.articles[i].title;
    let des=document.createElement("p");
    des.innerText=data.articles[i].description;



    image_box.append(image);
    detail.append(title,des)
news.append(image_box,detail);

document.getElementById("results").append(news);
  
news.addEventListener("click", function(){
       
    dataOfnews(data);
    window.location.href="news.html";
})

  function dataOfnews(data){

    newsdata.push(data);
    localStorage.setItem("news",JSON.stringify(newsdata));

  }

}

}