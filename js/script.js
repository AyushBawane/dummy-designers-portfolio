// console.log('ho kyu nahi raha hai re bhai????')

    // history division

let history = document.querySelector('.History');
history.addEventListener('click' , ()=>{
  // console.log("clicked history"); 
  let history = document.querySelector('.History').classList.add('active');
  let hislist = document.querySelector('.his-li').classList.add('active');
  let edu= document.querySelector('.Education').classList.remove('active');
  let edulist = document.querySelector('.edu-li').classList.remove('active');
  let pSkills = document.querySelector('.P-Skills').classList.remove('active');
  let pslist = document.querySelector('.ps-li').classList.remove('active');
  let dSkills = document.querySelector('.D-Skills').classList.remove('active');
  let dslist = document.querySelector('.ds-li').classList.remove('active');
  let SEO = document.querySelector('.SEO').classList.remove('active');
  let seolist = document.querySelector('.seo-li').classList.remove('active');
  let education = document.querySelector('#education').classList.add('d-none');
  let whistory = document.querySelector('#w-history').classList.remove('d-none');
  let pskills = document.querySelector('#p-skills').classList.add('d-none');
  let dskills = document.querySelector('#d-skills').classList.add('d-none');
  let seo = document.querySelector('#SEO').classList.add('d-none');
});  

     
    // education division

let education = document.querySelector('.Education');
education.addEventListener('click' , ()=>{
  // console.log("clicked education"); 
  let history = document.querySelector('.History').classList.remove('active');
  let hislist = document.querySelector('.his-li').classList.remove('active');
  let edu= document.querySelector('.Education').classList.add('active');
  let edulist = document.querySelector('.edu-li').classList.add('active');
  let pSkills = document.querySelector('.P-Skills').classList.remove('active');
  let pslist = document.querySelector('.ps-li').classList.remove('active');
  let dSkills = document.querySelector('.D-Skills').classList.remove('active');
  let dslist = document.querySelector('.ds-li').classList.remove('active');
  let SEO = document.querySelector('.SEO').classList.remove('active');
  let seolist = document.querySelector('.seo-li').classList.remove('active');
  let education = document.querySelector('#education').classList.remove('d-none');
  let whistory = document.querySelector('#w-history').classList.add('d-none');  
  let pskills = document.querySelector('#p-skills').classList.add('d-none');
  let dskills = document.querySelector('#d-skills').classList.add('d-none');
  let seo = document.querySelector('#SEO').classList.add('d-none');
}); 

    // programing skills division

let proskills = document.querySelector('.P-Skills');
proskills.addEventListener('click' , ()=>{
  // console.log("clicked programming"); 
  let history = document.querySelector('.History').classList.remove('active');
  let hislist = document.querySelector('.his-li').classList.remove('active');
  let edu= document.querySelector('.Education').classList.remove('active');
  let edulist = document.querySelector('.edu-li').classList.remove('active');
  let pSkills = document.querySelector('.P-Skills').classList.add('active');
  let pslist = document.querySelector('.ps-li').classList.add('active');
  let dSkills = document.querySelector('.D-Skills').classList.remove('active');
  let dslist = document.querySelector('.ds-li').classList.remove('active');
  let SEO = document.querySelector('.SEO').classList.remove('active');
  let seolist = document.querySelector('.seo-li').classList.remove('active');
  let education = document.querySelector('#education').classList.add('d-none');
  let whistory = document.querySelector('#w-history').classList.add('d-none');  
  let pskills = document.querySelector('#p-skills').classList.remove('d-none'); 
  let dskills = document.querySelector('#d-skills').classList.add('d-none');
  let seo = document.querySelector('#SEO').classList.add('d-none');
}); 

        // developement division
        
let devskills = document.querySelector('.D-Skills');
devskills.addEventListener('click' , ()=>{
  // console.log("clicked developement"); 
  let history = document.querySelector('.History').classList.remove('active');
  let hislist = document.querySelector('.his-li').classList.remove('active');
  let edu= document.querySelector('.Education').classList.remove('active');
  let edulist = document.querySelector('.edu-li').classList.remove('active');
  let pSkills = document.querySelector('.P-Skills').classList.remove('active');
  let pslist = document.querySelector('.ps-li').classList.remove('active');
  let dSkills = document.querySelector('.D-Skills').classList.add('active');
  let dslist = document.querySelector('.ds-li').classList.add('active');
  let SEO = document.querySelector('.SEO').classList.remove('active');
  let seolist = document.querySelector('.seo-li').classList.remove('active');
  let education = document.querySelector('#education').classList.add('d-none');
  let whistory = document.querySelector('#w-history').classList.add('d-none');  
  let pskills = document.querySelector('#p-skills').classList.add('d-none');
  let dskills = document.querySelector('#d-skills').classList.remove('d-none');
  let seo = document.querySelector('#SEO').classList.add('d-none');
}); 

          // SEO division

let seoskills = document.querySelector('.SEO');
seoskills.addEventListener('click' , ()=>{
  // console.log("clicked SEO"); 
  let history = document.querySelector('.History').classList.remove('active');
  let hislist = document.querySelector('.his-li').classList.remove('active');
  let edu= document.querySelector('.Education').classList.remove('active');
  let edulist = document.querySelector('.edu-li').classList.remove('active');
  let pSkills = document.querySelector('.P-Skills').classList.remove('active');
  let pslist = document.querySelector('.ps-li').classList.remove('active');
  let dSkills = document.querySelector('.D-Skills').classList.remove('active');
  let dslist = document.querySelector('.ds-li').classList.remove('active');
  let SEO = document.querySelector('.SEO').classList.add('active');
  let seolist = document.querySelector('.seo-li').classList.add('active');
  let education = document.querySelector('#education').classList.add('d-none');
  let whistory = document.querySelector('#w-history').classList.add('d-none');  
  let pskills = document.querySelector('#p-skills').classList.add('d-none');
  let dskills = document.querySelector('#d-skills').classList.add('d-none');
  let seo = document.querySelector('#SEO').classList.remove('d-none');
}); 

 
let box1 = document.querySelector('#box1');
box1.addEventListener('mouseover'  , ()=>{
  // console.log("clicked SEO"); 
  let first = document.querySelector('.first').classList.add('active2'); 
  let second = document.querySelector('.second').classList.remove('active2');
  let third = document.querySelector('.third').classList.remove('active2');
}); 


let box2 = document.querySelector('#box2');
box2.addEventListener('mouseover'  , ()=>{
  // console.log("clicked SEO"); 
  let first = document.querySelector('.first').classList.remove('active2');
  let second = document.querySelector('.second').classList.add('active2');
  let third = document.querySelector('.third').classList.remove('active2');
}); 

let box3 = document.querySelector('#box3');
box3.addEventListener('mouseover'  , ()=>{
  // console.log("clicked SEO"); 
  let first = document.querySelector('.first').classList.remove('active2');
  let second = document.querySelector('.second').classList.remove('active2');
  let third = document.querySelector('.third').classList.add('active2');
}); 