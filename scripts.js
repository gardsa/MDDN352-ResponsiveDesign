var screenSizeElem;

function setScreenSizeElem(){
  var screenWidth = window.innerWidth,
      screenHeight = window.innerHeight;

  screenSizeElem = document.getElementById('viewport-size');
  screenSizeElem.innerHTML = "Width: " + screenWidth + " | Height: " + screenHeight;
}

document.addEventListener('DOMContentLoaded', function(){
  setScreenSizeElem();
});

window.addEventListener('resize', function(){
    if (screenSizeElem != null){
      setScreenSizeElem();
    }
});
