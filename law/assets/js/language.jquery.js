$(function () {
    ///// Language Switching (2 languages: English and Chinese). /////

    // Initially disable language switching button.
    /*$('.switch-lang').css({'pointer-events':'none',
        'cursor':'default'}).attr('disabled','disabled');*/
    setCookie("smth", "smth", 7);
    alert(getCookie("smth"));
    //function langButtonListen() {
        $('.switch-lang').click(function (event) {
            alert($(this).attr("value"));
            //event.preventDefault();
            /*$('[lang="zh"]').toggle();
            $('[lang="en"]').toggle();*/
            // Switch cookie stored language.
            //alert($(this).attr("value"));
            $.cookie('lang', $(this).attr("value"), { expires: 7});
            alert($.cookie('lang'));

      //  });
        // Enable lang switching button.
        /*$('.switch-lang').css({'pointer-events':'auto',
            'cursor':'pointer'}).removeAttr('disabled');*/
    });

    // Check if language cookie already exists.
    if ($.cookie('lang')) {
        var lang = $.cookie('lang');
        if (lang === 'en') {
            $('[lang="hu"]').hide();
            $('[lang="de"]').hide();
            //langButtonListen();
        } else if (lang === 'hu'){
            $('[lang="en"]').hide();
            $('[lang="de"]').hide();
            //langButtonListen();
        } else {
            $('[lang="en"]').hide();
            $('[lang="hu"]').hide();
        }
    } else {
        alert("else ág?")
        // no cookie set, so detect language based on location.
        /*if ("geolocation" in navigator) {
            // geolocation is available
            navigator.geolocation.getCurrentPosition(function (position) {
                    // accepted geolocation so figure out which country
                    var lat = position.coords.latitude,
                        lng = position.coords.longitude;
                    $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&sensor=true', null, function (response) {
                        var country = response.results[response.results.length-1].formatted_address;
                        if (country ===  'Taiwan' || country === 'China') {
                            $('[lang="en"]').hide();
                            $.cookie('lang', 'zh', { expires: 7 });
                            langButtonListen();
                        } else {
                            $('[lang="zh"]').hide();
                            $.cookie('lang', 'en', { expires: 7 });
                            langButtonListen();
                        }
                    }).fail(function (err) {
                        console.log('error: '+err);
                        $('[lang="zh"]').hide();
                        $.cookie('lang', 'en', { expires: 7 });
                        langButtonListen();
                    });
                },
                function (error) {
                    if (error.code == error.PERMISSION_DENIED) {
                        // denied geolocation
                        $('[lang="zh"]').hide();
                        $.cookie('lang', 'en', { expires: 7 });
                        langButtonListen();
                    } else {
                        console.log('Unknown error. Defaulting to English!');
                        $('[lang="zh"]').hide();
                        $.cookie('lang', 'en', { expires: 7 });
                        langButtonListen();
                    }
                });
        } else {*/
            // geolocation IS NOT available
            $('[lang="hu"]').hide();
            $('[lang="de"]').hide();
            $.cookie('lang', 'en', { expires: 7 });

            //langButtonListen();
}
});

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}