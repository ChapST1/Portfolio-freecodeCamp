let list = document.querySelectorAll(".nav__li");
let line = document.querySelector(".nav-ball");

const values = [25, 50, 75, 100]
list.forEach(list =>{
    list.addEventListener('click',()=>{
        if (list.value == 1 ) {
            line.style.left = (values[0] - 25) + "%";

        }
        if (list.value == 2 ) {
            line.style.left = (values[1] - 25) + "%";
        }
        if (list.value == 3 ) {
            line.style.left = (values[2] - 25) + "%";
            
        
        }
        if (list.value == 4 ) {
            line.style.left = (values[3] - 25) + "%";
            
        }

    })

   

})
