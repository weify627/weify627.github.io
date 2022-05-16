window.HELP_IMPROVE_VIDEOJS = false;

var BASE = "img";
var NUM_1_DOF_FRAMES = 10;
var NUM_2_DOF_FRAMES = 36;
var NUM_2_DOF_FRAMES_JOINT = 6;
var NUM_2_DOF_FRAMES2 = 25;
var NUM_2_DOF_FRAMES_JOINT2 = 5;
var NUM_laptop_FRAMES = 10;
var NUM_reallaptop_FRAMES = 8;
var NUM_ROT_FRAMES = 25;

var images_reallaptop = [];
var images_reallaptop2 = [];
var images_laptop11477 = [];
var images_dishwasher12540 = [];
var images_drawer41510 = [];
var images_oven_2 = [];
var images_stapler103792 = [];
var images_stapler103792_rot = [];
var images_eyeglasses101293 = [];
var images_eyeglasses101326 = [];
var images_twodrawers46466 = [];
var images_drawerdoor47570 = [];

function preloadImages() {
    for (var i = 0; i < NUM_reallaptop_FRAMES; i++) {
        var path = BASE + '/real_laptop/'+String(i).padStart(3, '0') + '-000002000.png';
        images_reallaptop[i] = new Image();
        images_reallaptop[i].src = path;
    }
    for (var i = 0; i < NUM_reallaptop_FRAMES; i++) {
        var path = BASE + '/real_laptop2/'+String(i).padStart(3, '0') + '-000002000.png';
        images_reallaptop2[i] = new Image();
        images_reallaptop2[i].src = path;
    }
    for (var i = 0; i < NUM_1_DOF_FRAMES; i++) {
        var path = BASE + '/stapler103792/' + String(i).padStart(3, '0') + '-000000600.png';
        images_stapler103792[i] = new Image();
        images_stapler103792[i].src = path;
    }
    for (var i = 0; i < NUM_ROT_FRAMES; i++) {
        var path = BASE + '/stapler103792/rotating/' + String(i).padStart(3, '0') + '-000000600.png';
        images_stapler103792_rot[i] = new Image();
        images_stapler103792_rot[i].src = path;
    }
    for (var i = 0; i < NUM_1_DOF_FRAMES; i++) {
        var path = BASE + '/dishwasher12540/' + String(i).padStart(3, '0') + '-000000600.png';
        images_dishwasher12540[i] = new Image();
        images_dishwasher12540[i].src = path;
    }
    for (var i = 0; i < NUM_laptop_FRAMES; i++) {
        var path = BASE + '/laptop11477/' + String(i).padStart(3, '0') + '-000000600.png';
        images_laptop11477[i] = new Image();
        images_laptop11477[i].src = path;
    }

    for (var i = 0; i < NUM_1_DOF_FRAMES; i++) {
        var path = BASE + '/drawer41510/' + String(i).padStart(3, '0') + '-000000600.png';
        images_drawer41510[i] = new Image();
        images_drawer41510[i].src = path;
    }
    for (var i = 0; i < NUM_1_DOF_FRAMES; i++) {
        var path = BASE + '/oven2/' + String(i).padStart(2, '0') + '_delay-0.08s.jpg';
        images_oven_2[i] = new Image();
        images_oven_2[i].src = path;
    }
    for (var i = 0; i < NUM_2_DOF_FRAMES; i++) {
        var path = BASE + '/eyeglasses101293/' + String(i).padStart(3, '0') + '-000000600.png';
        images_eyeglasses101293[i] = new Image();
        images_eyeglasses101293[i].src = path;
    }
    for (var i = 0; i < NUM_2_DOF_FRAMES; i++) {
        var path = BASE + '/eyeglasses101326/' + String(i).padStart(3, '0') + '-000000600.png';
        images_eyeglasses101326[i] = new Image();
        images_eyeglasses101326[i].src = path;
    }
    for (var i = 0; i < NUM_2_DOF_FRAMES; i++) {
        var path = BASE + '/twodrawers46466/' + String(i).padStart(3, '0') + '-000000600.png';
        images_twodrawers46466[i] = new Image();
        images_twodrawers46466[i].src = path;
    }
    for (var i = 0; i < NUM_2_DOF_FRAMES2; i++) {
        var path = BASE + '/drawerdoor47570/' + String(i).padStart(3, '0') + '-000001000.png';
        images_drawerdoor47570[i] = new Image();
        images_drawerdoor47570[i].src = path;
    }

}

// POSE - swatguy

function setreallaptop(i) {
    var image = images_reallaptop[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
/*		image.style.width="50%"
		image.style.height="50%"*/
    $('#wrapper_reallaptop').empty().append(image);

/*		wrapper_reallaptop.style.width="60%"
		wrapper_reallaptop.style.height="60%"*/
}
function setreallaptop2(i) {
    var image = images_reallaptop2[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_reallaptop2').empty().append(image);
}
function setlaptop11477(i) {
    var image = images_laptop11477[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_laptop11477').empty().append(image);
}

function setdishwasher12540(i) {
    var image = images_dishwasher12540[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_dishwasher12540').empty().append(image);
}
function setdrawer41510(i) {
    var image = images_drawer41510[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_drawer41510').empty().append(image);
}
function setoven2(i) {
    var image = images_oven_2[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_oven2').empty().append(image);
}
function setstapler103792(i) {
    var image = images_stapler103792[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_stapler103792').empty().append(image);
}
function setstapler103792_rot(i) {
    var image = images_stapler103792_rot[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_stapler103792_rot').empty().append(image);
}
function seteyeglasses101293(i) {
    var image = images_eyeglasses101293[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_eyeglasses101293').empty().append(image);
}
function seteyeglasses101326(i) {
    var image = images_eyeglasses101326[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_eyeglasses101326').empty().append(image);
}
function settwodrawers46466(i) {
    var image = images_twodrawers46466[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_twodrawers46466').empty().append(image);
}
function setdrawerdoor47570(i) {
    var image = images_drawerdoor47570[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_drawerdoor47570').empty().append(image);
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
        slidesToScroll: 1,
        slidesToShow: 2,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
    }

/*    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for (var i = 0; i < carousels.length; i++) {
        // Add listener to  event
        carousels[i].on('before:show', state => {
            console.log(state);
        });
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
        // bulmaCarousel instance is available as element.bulmaCarousel
        element.bulmaCarousel.on('before-show', function(state) {
            console.log(state);
        });
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadImages();


    // POSE - swatguy

    $('#reallaptop').on('input', function(event) {
        setreallaptop(this.value);
    });
    setreallaptop(0);
    $('#reallaptop').prop('max', NUM_reallaptop_FRAMES - 1);

    $('#reallaptop2').on('input', function(event) {
        setreallaptop2(this.value);
    });
    setreallaptop2(0);
    $('#reallaptop2').prop('max', NUM_reallaptop_FRAMES - 1);

    $('#laptop11477').on('input', function(event) {
        setlaptop11477(this.value);
    });
    setlaptop11477(0);
    $('#laptop11477').prop('max', NUM_laptop_FRAMES - 1);

    $('#dishwasher12540').on('input', function(event) {
        setdishwasher12540(this.value);
    });
    setdishwasher12540(0);
    $('#dishwasher12540').prop('max', NUM_1_DOF_FRAMES - 1);

    $('#drawer41510').on('input', function(event) {
        setdrawer41510(this.value);
    });
    setdrawer41510(0);
    $('#drawer41510').prop('max', NUM_1_DOF_FRAMES - 1);

    $('#oven2').on('input', function(event) {
        setoven2(this.value);
    });
    setoven2(0);
    $('#oven2').prop('max', NUM_1_DOF_FRAMES - 1);

    $('#stapler103792').on('input', function(event) {
        setstapler103792(this.value);
    });
    setstapler103792(0);
    $('#stapler103792').prop('max', NUM_1_DOF_FRAMES - 1);

    $('#stapler103792_rot').on('input', function(event) {
        setstapler103792_rot(this.value);
    });
    setstapler103792_rot(0);
    $('#stapler103792_rot').prop('max', NUM_ROT_FRAMES - 1);

    $('#eyeglasses101293-1').on('input', function(event) {
        var idx = (+$('#eyeglasses101293-1').val())*6 + (+$('#eyeglasses101293-2').val());
        seteyeglasses101293(idx);
    });
    $('#eyeglasses101293-1').prop('max', NUM_2_DOF_FRAMES_JOINT - 1);

    $('#eyeglasses101293-2').on('input', function(event) {
        var idx = (+$('#eyeglasses101293-1').val())*6 + (+$('#eyeglasses101293-2').val());
        seteyeglasses101293(idx);
    });
    $('#eyeglasses101293-2').prop('max', NUM_2_DOF_FRAMES_JOINT - 1);
    seteyeglasses101293(0);

    $('#eyeglasses101326-1').on('input', function(event) {
        var idx = (+$('#eyeglasses101326-1').val())*6 + (+$('#eyeglasses101326-2').val());
        seteyeglasses101326(idx);
    });
    $('#eyeglasses101326-1').prop('max', NUM_2_DOF_FRAMES_JOINT - 1);

    $('#eyeglasses101326-2').on('input', function(event) {
        var idx = (+$('#eyeglasses101326-1').val())*6 + (+$('#eyeglasses101326-2').val());
        seteyeglasses101326(idx);
    });
    $('#eyeglasses101326-2').prop('max', NUM_2_DOF_FRAMES_JOINT - 1);
    seteyeglasses101326(0);

    $('#twodrawers46466-1').on('input', function(event) {
        var idx = (+$('#twodrawers46466-1').val())*6 + (+$('#twodrawers46466-2').val());
        settwodrawers46466(idx);
    });
    $('#twodrawers46466-1').prop('max', NUM_2_DOF_FRAMES_JOINT - 1);

    $('#twodrawers46466-2').on('input', function(event) {
        var idx = (+$('#twodrawers46466-1').val())*6 + (+$('#twodrawers46466-2').val());
        settwodrawers46466(idx);
    });
    $('#twodrawers46466-2').prop('max', NUM_2_DOF_FRAMES_JOINT - 1);
    settwodrawers46466(0);

    $('#drawerdoor47570-1').on('input', function(event) {
        var idx = (+$('#drawerdoor47570-1').val())*5 + (+$('#drawerdoor47570-2').val());
        setdrawerdoor47570(idx);
    });
    $('#drawerdoor47570-1').prop('max', NUM_2_DOF_FRAMES_JOINT2 - 1);

    $('#drawerdoor47570-2').on('input', function(event) {
        var idx = (+$('#drawerdoor47570-1').val())*5 + (+$('#drawerdoor47570-2').val());
        setdrawerdoor47570(idx);
    });
    $('#drawerdoor47570-2').prop('max', NUM_2_DOF_FRAMES_JOINT2 - 1);
    setdrawerdoor47570(0);

/*    $('#twodrawers46466').on('input', function(event) {
        settwodrawers46466(this.value);
    });
    settwodrawers46466(0);
    $('#twodrawers46466').prop('max', NUM_2_DOF_FRAMES - 1);

    $('#drawerdoor47570-1').on('input', function(event) {
        var idx = +$('#drawerdoor47570-1').val() + +$('#drawerdoor47570-2').val();
        setdrawerdoor47570(idx);
    });
    setdrawerdoor47570(0,0);
    $('#drawerdoor47570-1').prop('max', NUM_2_DOF_FRAMES - 1);

    $('#drawerdoor47570-2').on('input', function(event) {
        var idx = +$('#drawerdoor47570-1').val() + +$('#drawerdoor47570-2').val();
        setdrawerdoor47570(idx);
    });
    setdrawerdoor47570(0,0);
    $('#drawerdoor47570-2').prop('max', NUM_2_DOF_FRAMES - 1);
*/

    bulmaSlider.attach();

})
