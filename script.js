const container = document.querySelector("#container");


function getRandomColor () {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i< 6; i++) 
        {
            color += 
            letters[Math.floor(Math.random()*16)];
        }
        return color;
    }

     for (let i = 0; i< 16 * 16; i++) {
        
    const div = document.createElement("div");
    div.classList.add("box");
    

    div.addEventListener(`mouseenter`, () => {
        div.style.backgroundColor = getRandomColor ();
    });
    
    container.appendChild(div);

}
