const btn = document.getElementById("btn");
const output = document.querySelector(".output");
let quote =[

    "The only way to do great work is to love what you do.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    
    "Believe you can and you're halfway there.",
    
    "The future belongs to those who believe in the beauty of their dreams.",
    
    "It always seems impossible until it's done.",
    
    "The purpose of our lives is to be happy.",
    
    "Change your thoughts and you change your world.",
    
    "It is never too late to be what you might have been.",
    
    "The only way to achieve the impossible is to believe it is possible.",
    
    "Life is 10% what happens to us and 90% how we react to it.",
    
    "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact."

]

btn.addEventListener("click",()=>{
    console.log("clicked");
    let random = Math.floor(Math.random()*quote.length)
    output.textContent=quote[random];
})