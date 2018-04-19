

$('#galery .line-block img.galery').click(function(e){
    console.log(this.dataset["imagenum"]);
    openModal();
    currentSlide(this.dataset["imagenum"]);
});

$('.demo').click(function (e) {
    console.log(this);
    currentSlide(this.dataset["imnum"]);

})


function openModal() {
    document.getElementById('myModal').style.display = "block";
    $(".ion-ios-arrow-right").hide();
    /*$(".slick-arrow.next").hide();*/
    $(".ion-ios-arrow-left").hide();
    $(".close").click(function (e) {
        closeModal();
    })
    $(".prev").click(function (e) {
        plusSlides(-1);
    })
    $(".next").click(function (e) {
        plusSlides(+1);
    })

}
// Close the Modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
    $(".ion-ios-arrow-right").show();
    $(".ion-ios-arrow-left").show();
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    //alert(slides);
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        alert(dots[i].className);
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    //dots[slideIndex-1].className += " active";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

//document.onload(zoomIntoImage());
