//Skips youtube ads

setInterval(function() { 
            var $container = document.getElementsByClassName("ytp-ad-overlay-close-container")[0]; 
            var $skipButton = document.getElementsByClassName("ytp-ad-skip-button")[0]; 
            if ($container != undefined) $container.click(); 
            if ($skipButton != undefined) $skipButton.click() 
            }, 2000);
