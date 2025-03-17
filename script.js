

document.addEventListener('DOMContentLoaded', function() {
    
    const poppyImage = document.getElementById('poppy-img');
    
    // keep track of which state flowers are in
    // 0 = normal, 1 = cracked, 2 = broken, 3 = missing
    let poppyState = 0;
    
    
    poppyImage.addEventListener('click', function() {
        
        if (poppyState === 0) {
            poppyImage.src = 'assets/1-cracked.gif';
            poppyState = 1;
        } 
        else if (poppyState === 1) {
            poppyImage.src = 'assets/1-broken.gif';
            poppyState = 2;
        }
        else if (poppyState === 2) {
            poppyImage.src = 'assets/1-missing.png';
            poppyState = 3;
        }
        
    });
});