// Preload images to ensure instant transitions
function preloadImages() {
    // Create an array of image paths to preload
    const imagesToPreload = [
        'assets/1-cracked.gif',
        'assets/1-broken.gif',
    ];
    
    // Create Image objects to preload each image
    imagesToPreload.forEach(function(src) {
        const img = new Image();
        img.src = src;
        console.log('Preloaded: ' + src);
    });
}

// Start preloading images immediately
preloadImages();

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