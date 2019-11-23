
$(document).ready(function() {


/*================  search button  ============*/
    const overlay1 = document.querySelector('.overlay-1');
    const overlay2 = document.querySelector('.overlay-2');
    const search = document.querySelector('.search');
    const input = document.querySelector('.input');
    overlay1.addEventListener('click', () => {
        search.classList.toggle('active');
        if (search.classList.contains('active')) {
            setTimeout(() => {
                input.focus();
            }, 200)
        }
    })
    search.addEventListener('click', () => {
        if (search.classList.contains('active')) {
            setTimeout(() => {
                input.focus();
            }, 200)
        }
    })
    overlay2.addEventListener('click', (e) => {
        input.value = '';
        input.focus();
        search.classList.remove('searching')
    })
    document.body.addEventListener('click', (e) => {
        if (!search.contains(e.target) && input.value.length === 0) {
            search.classList.remove('active');
            search.classList.remove('searching');
            input.value = '';
        }
    })
    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            input.blur();
        }
    })
    input.addEventListener('input', () => {
        if (input.value.length > 0) {
            search.classList.add('searching')
        } else {
            search.classList.remove('searching')
        }
    })
    input.value = '';
    input.blur();


// =================  menu burger  ============ //
     $(".menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
        $(this).toggleClass("active");
      });


// ====== modal display function ========//
    function show(state)
    {
        document.getElementById('window').style.display = state;
        document.getElementById('gray').style.display = state;
    }


// =========== owl caroucel ==========//
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            responsive:{
                0:{
                    items:1,


                },
                768:{
                    items:1,
                    dots: true,
                },
                1000:{
                    items:3,
                }
            }
        });


//================== form-design ================================//
    var formInputs = $('input[type="first-name"],input[type="last-name"],input[type="middle-name"],input[type="memorial"],input[type="email"],input[type="password"]');
    formInputs.focus(function() {
        $(this).parent().children('p.form__formLabel').addClass('formTop');
        $('div#formWrapper').addClass('darken-bg');
        $('div.logo').addClass('logo-active');
    });

    formInputs.focusout(function() {
        if ($.trim($(this).val()).length == 0){
            $(this).parent().children('p.form__formLabel').removeClass('formTop');}
            $('div#formWrapper').removeClass('darken-bg');
            $('div.logo').removeClass('logo-active');
    });

    $('p.form__formLabel').click(function(){
        $(this).parent().children('.form__form-style').focus();
    });


// ======= window form Sign in to your account ==========

    function openbox(step1) {
        display=document.getElementById('step1').stile.display;
        if(display==none) {
            document.getElementById('step1').stile.display="block";
        }
    }
})


//============= image upload window =======================//

//====================== Variables ===========================//
var globalArticleMainImageFileNameToUpload = null;
//====================== Image Preview ===========================//
function uploadMainArticleImg(file){

    //------- we pass the file to the global variable
    globalArticleMainImageFileNameToUpload = file;

    //------- if there is a file, transfer it to FileReader
    if (file != undefined){
        if (!file.type.match('image.*')) {
            showError('File type should be an image', 'popup');
            return;
        }

        var reader = new FileReader();
        reader.onload = (function(file){

            return function(e){

                //------- after FileReader has recognized the file, display it in the .imgarticle element
                if ($('.step1__logo-holder.imgarticle img').length){

                    $('.step1__logo-holder.imgarticle img').fadeOut('fast', function(){
                        $('.step1__logo-holder.imgarticle').append('<img src="' + e.target.result + '">');
                        $(this).remove();
                    });
                } else {
                    $('.step1__logo-holder.imgarticle').append('<img src="' + e.target.result + '">');
                }
            };
        })(file);
        reader.readAsDataURL(file);
    }
}


$(document).ready(function(){

    //------- click on the image selection button (initiate click on hidden input)
    $('body').on('click', '#main-article-img', function(){
        $('#imgarticle').click();
    });

    //------- image selection using input with file type
    $('body').on('change', '#imgarticle', function(f){

        var files = f.target.files;
        var file = files[0];

        uploadMainArticleImg(file);

    });

});
