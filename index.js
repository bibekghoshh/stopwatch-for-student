let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function toggleStartStop() {
  if (running) {
    clearInterval(timer);
  } else {
    timer = setInterval(updateDisplay, 1000);
  }
  running = !running;
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  const displayTimer = document.querySelector(".time");
  displayTimer.innerHTML = `${alignment(hours)}:${alignment(
    minutes
  )}:${alignment(seconds)}`;
}

function alignment(value) {
    return value < 10 ? "0" + value : value;
  }

function reset() {
    clearInterval(timer);
    running = false;
    seconds = -1;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

document.addEventListener("keydown", function (event) {
  if (event.key ===' ') {
    toggleStartStop();
    console.log("space pressed");
  }
  if (event.key ==='r') {
    reset();
    // console.log('r');
  }
  if(event.key==='f'){
    toggleFullScreen();
  }
  if(event.key==='h'){
    hideController();
    console.log("h");
  }
});

function toggleFullScreen(){
    const doc=window.document;
    const docElement=doc.documentElement;

    const requestFullScreen = docElement.requestFullscreen || docElement.mozRequestFullScreen || docElement.webkitRequestFullScreen || docElement.msRequestFullscreen;
    const exitFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;   

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docElement);
      } else {
        exitFullScreen.call(doc);
      }
}

let showController=false;
function hideController(){
    const hide=document.querySelector(".controllers");
    if(showController){
        hide.classList.remove('hide');
    }else{
        hide.classList.add('hide')
    }

    showController=!showController;
}


