
$( document ).ready(function() {

    window.addEventListener('scroll', () => {
        if (window.scrollY == 0) {
            $('#myVideo2').addClass('visibility');
            $('#myVideo2').get(0).currentTime = 0;
            console.log("hey")
        }
    
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
            document.getElementById('myVideo2').play();
            $('#myVideo2').removeClass('visibility');
            //document.getElementById('myVideo2').style.visibility = true;
        }
    });

});

