// document.getElementById('thm-btn').addEventListener('click', function(){
//     const bodyBg = document.getElementById('body-color-btn');
// })


document.getElementById('thm-btn').addEventListener('click', function() {
    const bodyBg = document.getElementById('body-color-btn');
    
    // Generate a random RGB color

    const rndColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

    bodyBg.style.backgroundColor = rndColor;
});
