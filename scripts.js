var screenSizeElem;

function setScreenSizeElem(){
  var screenWidth = window.innerWidth,
      screenHeight = window.innerHeight;

  screenSizeElem = document.getElementById('viewport-size');
  screenSizeElem.innerHTML = "Screen Size: " + screenWidth + " x " + screenHeight;
}

document.addEventListener('DOMContentLoaded', function(){
  setScreenSizeElem();
});

window.addEventListener('resize', function(){
  if (screenSizeElem != null){
    setScreenSizeElem();
  }
});
