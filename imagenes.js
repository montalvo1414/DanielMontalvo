function showImage(src) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = src;
  }
  
  function hideImage() {
    document.getElementById("modal").style.display = "none";
  }