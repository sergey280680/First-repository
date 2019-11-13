
$(document).ready(function() {

	
//  ======= меню бургер=======  //

	 $(".menu-toggle").click(function(e) {
	    e.preventDefault();
	    $("#sidebar-wrapper").toggleClass("active");
	    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
	    $(this).toggleClass("active");
	  });
 	//  ------------------ //
	

//=======  функция показа модального окна=======
	
	    function show(state)
	    {
		document.getElementById('window').style.display = state;
		document.getElementById('gray').style.display = state;
	    }
//  owl caroucel
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            responsive:{
                0:{
                    items:1,


                },
                768:{
                    items:3,
                    dots: true,
                },
                1000:{
                    items:5
                }
            }
        });


//  form-design
    var formInputs = $('input[type="first-name"],input[type="last-name"],input[type="middle-name"],input[type="memorial"]');
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

})


//============= окно загрузки картинок =======================//


//====================== Переменные ===========================//
var globalArticleMainImageFileNameToUpload = null;
//====================== Предпросмотр изображения ===========================//
function uploadMainArticleImg(file){

    //------- передаем файл в глобальную переменную
    globalArticleMainImageFileNameToUpload = file;

    //------- если файл есть, передаем его в FileReader
    if (file != undefined){
        if (!file.type.match('image.*')) {
            showError('File type should be an image', 'popup');
            return;
        }

        var reader = new FileReader();
        reader.onload = (function(file){

            return function(e){

                //------- после того, как FileReader распознал файл отображаем его в элементе .imgarticle
                if ($('.form__logo-holder.imgarticle img').length){

                    $('.form__logo-holder.imgarticle img').fadeOut('fast', function(){
                        $('.form__logo-holder.imgarticle').append('<img src="' + e.target.result + '">');
                        $(this).remove();
                    });
                } else {
                    $('.form__logo-holder.imgarticle').append('<img src="' + e.target.result + '">');
                }
            };
        })(file);
        reader.readAsDataURL(file);
    }
}


$(document).ready(function(){

    //------- клик по кнопке выбора изображения (инициируем клик по скрытому инпуту)
    $('body').on('click', '#main-article-img', function(){
        $('#imgarticle').click();
    });

    //------- выбор изображение при помощи инпута с типом "файл"
    $('body').on('change', '#imgarticle', function(f){

        var files = f.target.files;
        var file = files[0];

        uploadMainArticleImg(file);

    });

});
//================ конец окно загрузки картинок=================//



})			
