function toggleMenu(){
    let menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
    let change = document.getElementById('change');
    change.classList.toggle('p-3');
    
}
function toggleMenu1(){
    let menu1 = document.getElementById('menu1');
    menu1.classList.toggle('hidden');
    
}


function showPage(id){
    const pages=document.querySelectorAll('.page');
    pages.forEach(page =>{
        page.classList.add('hidden');
        
    });

    const selectedPage= document.getElementById(id);
    selectedPage.classList.remove('hidden');
}