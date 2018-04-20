
/*$('#galery .line-block img.galery').click(function(e){
    //console.log(this.dataset["imagenum"]);
    openModal();
    currentSlide(this.dataset["imagenum"]);
});*/


function openModal() {
    document.getElementById('myModal').style.display = "block";
    $(".prev").click(function (e) {
        plusSlides(-1);
    })
    $(".next").click(function (e) {
        plusSlides(+1);
    })

    $(".ion-ios-arrow-left").hide();
    $(".ion-ios-arrow-right").hide();
    //$(".slick-list").empty();
    //$(".span .prev .slick-arrow").unbind();

    $(".close").click(function (e) {
        closeModal();
    })


}
// Close the Modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
    $('.prev').unbind();
    $('.next').unbind();
    $(".ion-ios-arrow-right").show();
    $(".ion-ios-arrow-left").show();
}

var slideIndex = 1;
//var slideIndex = $()
console.log($(".numbertext"));
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    //console.log(slideIndex);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log("meghívódsz?");
    var i;
    var slides = document.getElementsByClassName("mySlides");
    //console.log(slides);

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";

}

//document.onload(zoomIntoImage());
