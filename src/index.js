if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW registered!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    });
}

$(document).ready(() => {
    function BtnControl(btn) {
        let side = '.' + btn.toString().slice(5);
        console.log(side); //debug
        $('.shape').shape('set next side', side).shape('flip right').bind('oanimationend animationend webkitAnimationEnd', function() {
            $('.ui.sidebar').sidebar('toggle');
        });
    }
    $('.button.icon').click(() => {
        $('.ui.sidebar').sidebar('setting', 'transition', 'scale down').sidebar('toggle');
    });
    // Initialize the shape 
    $('.shape').shape();

    $('.btn-one').click(() => {
        BtnControl('.btn-one');
    });

    $('.btn-two').click(() => {
        BtnControl('.btn-two');
    });

    $('.btn-three').click(() => {
        BtnControl('.btn-three');
    });
});
