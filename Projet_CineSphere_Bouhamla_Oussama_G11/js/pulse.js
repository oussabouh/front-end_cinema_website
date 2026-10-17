document.addEventListener('DOMContentLoaded', function() {
    
    const titres = document.querySelectorAll('.effet-pulse');
    let visible = true;

    
    titres.forEach(titre => {
        titre.style.transition = "opacity 1s ease-in-out";
    });

    setInterval(() => {
        titres.forEach(titre => {
            if (visible) {
                titre.style.opacity = 0.3; 
            } else {
                titre.style.opacity = 1;   
            }
        });
        visible = !visible; 
    }, 1000); 
});

