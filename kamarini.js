//fetch the content
fetch("https://kea-alt-del.dk/t7/api/brands")
       .then(res=>res.json())
       .then(goThroughEach);
//foreach
function goThroughEach(data){
    // console.log(data);
    data.forEach(showBrand);

}
//that function

function showBrand(oneBrand){
    
//1find the first letter
const firstLetter = oneBrand.brandname.charAt(0).toLowerCase();
console.log(`im ${oneBrand.brandname} and my first letter is ${firstLetter} and my selector would be #letter_${firstLetter}`);
//do the usual stuff 
//grab the template
const template = document.querySelector("template").content;
//clone it 
const myCopy = template.cloneNode(true);
// console.log(template);
//change some content
 myCopy.querySelector("a").textContent = oneBrand.brandname;
 myCopy.querySelector("a").href = `productlist.html?brandname=${oneBrand.brandname}`;
//find the parent
const parent = document.querySelector(`#letter_${firstLetter}`);
if(parent){
    parent.appendChild(myCopy);
}
//append it

}
//find the correct letter




// //    console.log(oneBrand);
// //grab the template
// const template = document.querySelector("template").content;
// //clone it 
// const myCopy = template.cloneNode(true);
// // console.log(template);
// //change some content
//  myCopy.querySelector("a").textContent = oneBrand.brandname;
//  myCopy.querySelector("a").href = `productlist.html?brandname=${oneBrand.brandname}`;
// //find the parent
// const parent = document.querySelector("#letter_b ol");
// //append it
// parent.appendChild(myCopy);
// }