function goAway(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        alert("You are viewing this page on a mobile device. For the best user experience, please use a laptop or pc. You can find some here: https://www.bestbuy.com/site/computers-pcs/laptop-computers/abcat0502000.c?id=abcat0502000")
    }
}

window.onload = goAway