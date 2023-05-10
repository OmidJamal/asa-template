// script for search bar animation
const searchBtn = document.querySelector('.sub-search-btn');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchInput.style.width = "400px";
    searchInput.style.padding = "10px 10px";
    // searchInput.style.border = "1px solid #eb7328";
})
//--------------------------------------------------------------

// Script for teab in services Section--
const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector('.tab2');
const tab3 = document.querySelector('.tab3');
const detail1 = document.querySelector('.detail1');
const detail2 = document.querySelector('.detail2');
console.log(detail2);
const detail3 = document.querySelector('.detail3');

tab1.addEventListener('click' , ()=>{
    tab1.classList.add('active-box');
    tab2.classList.remove('active-box');
    tab3.classList.remove('active-box');
    detail1.style.opacity = "1";
    detail2.style.opacity = "0";
    detail3.style.opacity = "0";
   
});
tab2.addEventListener('click' , ()=>{
    tab2.classList.add('active-box');
    tab1.classList.remove('active-box');
    tab3.classList.remove('active-box');
    detail2.style.opacity = "1";
    detail1.style.opacity = "0";
    detail3.style.opacity = "0";
})
tab3.addEventListener('click' , ()=>{
    tab3.classList.add('active-box');
    tab2.classList.remove('active-box');
    tab1.classList.remove('active-box');
    detail3.style.opacity = "1";
    detail1.style.opacity = "0";
    detail2.style.opacity = "0";
});
// const tabItmes = document.querySelectorAll(".tab-item");
// console.log(tabItmes);

// tabItmes.forEach((tabs) =>{
//     tabs.addEventListener('click' , ()=>{
//         console.log("شاشیدم تو برنامه نویسی");
        
//     })
// });