// const timer = document.querySelector("#timer");

function start() {
    let startTime = 0;
    const myInterval = setInterval(myTimer, 1000);
  
    function myTimer() {
      document.getElementById("timer").innerHTML = startTime;
      if (startTime == 5)
        myStopFunction(),
          (document.getElementById("timer").innerHTML =
            "Seu tempo acabou!! Aperte Start para recomeçar!!");
      startTime++;
    }
  
    function myStopFunction() {
      clearInterval(myInterval);
    }
  }
  