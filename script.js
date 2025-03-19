function preloadImages() {
    const imagesToPreload = [
        'assets/1-cracked.gif',
        'assets/1-broken.gif',
        'assets/2-cracked.gif',
        'assets/2-broken.gif',
        'assets/3-cracked.gif',
        'assets/3-broken.gif',
        'assets/4-cracked.gif',
        'assets/4-broken.gif',
        'assets/5-cracked.gif',
        'assets/5-broken.gif',
        'assets/6-cracked.gif',
        'assets/6-broken.gif',
        'assets/7-cracked.gif',
        'assets/7-broken.gif',
        'assets/8-cracked.gif',
        'assets/8-broken.gif',
        'assets/9-cracked.gif',
        'assets/9-broken.gif',
        'assets/10-cracked.gif',
        'assets/10-broken.gif',
        'assets/11-cracked.gif',
        'assets/11-broken.gif',
        'assets/12-cracked.gif',
        'assets/12-broken.gif',
        'assets/13-cracked.gif',
        'assets/13-broken.gif',
    ];
    
    imagesToPreload.forEach(function(src) {
        const img = new Image();
        img.src = src;
        console.log('Preloaded: ' + src);
    });


}

preloadImages();

document.addEventListener('DOMContentLoaded', function() {
    
    const poppyImage = document.getElementById('poppy-img');
    const ginkgoImage = document.getElementById('ginkgo-img');
    const sheaokImage = document.getElementById('sheoak-img');
    const lindenImage = document.getElementById('linden-img');
    const stamenImage = document.getElementById('stamen-img');
    const bellflowerImage = document.getElementById('bellflower-img');
    const cowslipImage = document.getElementById('cowslip-img');
    const speedwellImage = document.getElementById('speedwell-img');
    const lilyImage = document.getElementById('lily-img');
    const grapeImage = document.getElementById('grape-img');
    const gumImage = document.getElementById('gum-img');
    const mapleImage = document.getElementById('maple-img');
    const cordgrassImage = document.getElementById('cordgrass-img');
    
    // 0 = normal, 1 = cracked, 2 = broken, 3 = missing
    let poppyState = 0;
    let ginkgoState = 0;
    let sheaokState = 0;
    let lindenState = 0;
    let stamenState = 0;
    let bellflowerState = 0;
    let cowslipState = 0;
    let speedwellState = 0;
    let lilyState = 0;
    let grapeState = 0;
    let gumState = 0;
    let mapleState = 0;
    let cordgrassState = 0;
    
    
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

    ginkgoImage.addEventListener('click', function() {
        
        if (ginkgoState === 0) {
            ginkgoImage.src = 'assets/2-cracked.gif';
            ginkgoState = 1;
        } 
        else if (ginkgoState === 1) {
            ginkgoImage.src = 'assets/2-broken.gif';
            ginkgoState = 2;
        }
        else if (ginkgoState === 2) {
            ginkgoImage.src = 'assets/2-missing.png';
            ginkgoState = 3;
        }
        
    });
    
    sheaokImage.addEventListener('click', function() {
        
        if (sheaokState === 0) {
            sheaokImage.src = 'assets/3-cracked.gif';
            sheaokState = 1;
        } 
        else if (sheaokState === 1) {
            sheaokImage.src = 'assets/3-broken.gif';
            sheaokState = 2;
        }
        else if (sheaokState === 2) {
            sheaokImage.src = 'assets/3-missing.png';
            sheaokState = 3;
        }
        
    });
    
    lindenImage.addEventListener('click', function() {
        
        if (lindenState === 0) {
            lindenImage.src = 'assets/4-cracked.gif';
            lindenState = 1;
        } 
        else if (lindenState === 1) {
            lindenImage.src = 'assets/4-broken.gif';
            lindenState = 2;
        }
        else if (lindenState === 2) {
            lindenImage.src = 'assets/4-missing.png';
            lindenState = 3;
        }
        
    });
    
    stamenImage.addEventListener('click', function() {
        
        if (stamenState === 0) {
            stamenImage.src = 'assets/5-cracked.gif';
            stamenState = 1;
        } 
        else if (stamenState === 1) {
            stamenImage.src = 'assets/5-broken.gif';
            stamenState = 2;
        }
        else if (stamenState === 2) {
            stamenImage.src = 'assets/5-missing.png';
            stamenState = 3;
        }
        
    });
    
    bellflowerImage.addEventListener('click', function() {
        
        if (bellflowerState === 0) {
            bellflowerImage.src = 'assets/6-cracked.gif';
            bellflowerState = 1;
        } 
        else if (bellflowerState === 1) {
            bellflowerImage.src = 'assets/6-broken.gif';
            bellflowerState = 2;
        }
        else if (bellflowerState === 2) {
            bellflowerImage.src = 'assets/6-missing.png';
            bellflowerState = 3;
        }
        
    });
    
    cowslipImage.addEventListener('click', function() {
        
        if (cowslipState === 0) {
            cowslipImage.src = 'assets/7-cracked.gif';
            cowslipState = 1;
        } 
        else if (cowslipState === 1) {
            cowslipImage.src = 'assets/7-broken.gif';
            cowslipState = 2;
        }
        else if (cowslipState === 2) {
            cowslipImage.src = 'assets/7-missing.png';
            cowslipState = 3;
        }
        
    });
    
    speedwellImage.addEventListener('click', function() {
        
        if (speedwellState === 0) {
            speedwellImage.src = 'assets/8-cracked.gif';
            speedwellState = 1;
        } 
        else if (speedwellState === 1) {
            speedwellImage.src = 'assets/8-broken.gif';
            speedwellState = 2;
        }
        else if (speedwellState === 2) {
            speedwellImage.src = 'assets/8-missing.png';
            speedwellState = 3;
        }
        
    });
    
    lilyImage.addEventListener('click', function() {
        
        if (lilyState === 0) {
            lilyImage.src = 'assets/9-cracked.gif';
            lilyState = 1;
        } 
        else if (lilyState === 1) {
            lilyImage.src = 'assets/9-broken.gif';
            lilyState = 2;
        }
        else if (lilyState === 2) {
            lilyImage.src = 'assets/9-missing.png';
            lilyState = 3;
        }
        
    });
    
    grapeImage.addEventListener('click', function() {
        
        if (grapeState === 0) {
            grapeImage.src = 'assets/10-cracked.gif';
            grapeState = 1;
        } 
        else if (grapeState === 1) {
            grapeImage.src = 'assets/10-broken.gif';
            grapeState = 2;
        }
        else if (grapeState === 2) {
            grapeImage.src = 'assets/10-missing.png';
            grapeState = 3;
        }
        
    });
    
    gumImage.addEventListener('click', function() {
        
        if (gumState === 0) {
            gumImage.src = 'assets/11-cracked.gif';
            gumState = 1;
        } 
        else if (gumState === 1) {
            gumImage.src = 'assets/11-broken.gif';
            gumState = 2;
        }
        else if (gumState === 2) {
            gumImage.src = 'assets/11-missing.png';
            gumState = 3;
        }
        
    });
    
    mapleImage.addEventListener('click', function() {
        
        if (mapleState === 0) {
            mapleImage.src = 'assets/12-cracked.gif';
            mapleState = 1;
        } 
        else if (mapleState === 1) {
            mapleImage.src = 'assets/12-broken.gif';
            mapleState = 2;
        }
        else if (mapleState === 2) {
            mapleImage.src = 'assets/12-missing.png';
            mapleState = 3;
        }
        
    });
    
    cordgrassImage.addEventListener('click', function() {
        
        if (cordgrassState === 0) {
            cordgrassImage.src = 'assets/13-cracked.gif';
            cordgrassState = 1;
        } 
        else if (cordgrassState === 1) {
            cordgrassImage.src = 'assets/13-broken.gif';
            cordgrassState = 2;
        }
        else if (cordgrassState === 2) {
            cordgrassImage.src = 'assets/13-missing.png';
            cordgrassState = 3;
        }
        
    });
});