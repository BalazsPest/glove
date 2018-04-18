
//document.getElementsByClassName("galery").onclick = function() {openModal()};

document.getElementById("galery").addEventListener("click", function(){openModal()});
        //function() {openModal()};




function openModal() {
    document.getElementById('myModal').style.display = "block";
}
// Close the Modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

//document.onload(zoomIntoImage());
