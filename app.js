// 1.Clock and Date functionality
function countTime() {
  const displayTime = document.querySelector('h1');
  const displayDate = document.querySelector('h2');
  const clock = new Date();

  displayTime.innerHTML = `${clock.getHours()}:${clock.getMinutes()}:${clock.getSeconds()}`;

  displayDate.innerHTML = `${clock.toDateString()}`;
};
setInterval(countTime, 1000);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 2.Stopwatch functionality all in one iife so no variables in global scope :)
(function () {
  // event listener start-------------------------------------------------------
  const startBtn = document.getElementById('start');
  startBtn.addEventListener('click', startWatch);
  // event listener pause-------------------------------------------------------
  const pauseBtn = document.getElementById('pause');
  pauseBtn.addEventListener('click', pauseWatch);
  // event listener reset-------------------------------------------------------
  const resetBtn = document.getElementById('reset');
  resetBtn.addEventListener('click', resetWatch);
  //----------------------------------------------------------------------------
  const lapBtn = document.getElementById('lap');
  lapBtn.addEventListener('click', lapWatch);

  const milSecADisplay = document.getElementById('milsec-a');
  const milSecBDisplay = document.getElementById('milsec-b');
  const secADisplay = document.getElementById('seca');
  let secBDisplay = document.getElementById('secb');
  const minADisplay = document.getElementById('min-a');
  const minBDisplay = document.getElementById('min-b');
  const ulLaps = document.getElementById('laps');

  let miliSecBInterval = '';
  let li = '';
  let lap = 1;
  let lapId = 1;

  function startWatch() {
    // Button operation
    pauseBtn.style.display = 'inline';
    startBtn.style.display = 'none';
    resetBtn.style.display = 'inline';
    lapBtn.style.display = 'inline';
    miliSecBInterval = setInterval(countMilisecB, 10);
    function countMilisecB() {
      milSecBDisplay.innerHTML++;
      if (milSecBDisplay.innerHTML == 10) {
        milSecBDisplay.innerHTML = 0;
        countMilisecA()
      }
    };

    function countMilisecA() {
      milSecADisplay.innerHTML++;
      if (milSecADisplay.innerHTML == 10) {
        milSecADisplay.innerHTML = 0;
        countSecondsB()
      }
    };

    function countSecondsB() {
      secBDisplay.innerHTML++;
      if (secBDisplay.innerHTML == 10) {
        secBDisplay.innerHTML = 0;
        countSecondsA()
      }
    };

    function countSecondsA() {
      secADisplay.innerHTML++;
      if (secADisplay.innerHTML == 6) {
        secADisplay.innerHTML = 0;
        countMinutesB()
      }
    };

    function countMinutesB() {
      minBDisplay.innerHTML++;
      if (minBDisplay.innerHTML == 10) {
        minBDisplay.innerHTML = 0;
        countMinutesA()
      }
    };


    function countMinutesA() {
      minADisplay.innerHTML++;
      if (minADisplay.innerHTML == 6) {
        minADisplay.innerHTML = 0;
      }
    };

  };
  //pause>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function pauseWatch() {
    clearInterval(miliSecBInterval);
    startBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';
  };
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // reset
  function resetWatch() {
    pauseBtn.style.display = 'none';
    lapBtn.style.display = 'none';
    startBtn.style.display = 'inline';
    resetBtn.style.display = 'none';
    clearInterval(miliSecBInterval);
    milSecADisplay.innerHTML = 0;
    milSecBDisplay.innerHTML = 0;
    //-----------------------------
    secADisplay.innerHTML = 0;
    secBDisplay.innerHTML = 0;
    //-----------------------------
    minADisplay.innerHTML = 0;
    minBDisplay.innerHTML = 0;
    li = '';
    lap = 1;
    document.getElementById('laps').innerHTML = '';


  };
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // lap



  function lapWatch() {

    li += `
  <li>
  LAP ${lap++}# - 
  <span id = "min-${lap}">${minADisplay.innerHTML}${minBDisplay.innerHTML}</span> :
  <span id = "sec-${lap}">${secADisplay.innerHTML}${secBDisplay.innerHTML}</span> :
  <span id = "milsec-${lap}">${milSecADisplay.innerHTML}${milSecBDisplay.innerHTML}</span>
  `;
    ulLaps.innerHTML = li;



  };


})();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 3. Countdown Timer all in iife 
(function () {
  document.getElementById('container-3').addEventListener('click', setAndDelTimer)
  const alertDisplay = document.querySelector('.alert');
  //number btns
  const hA = document.getElementById('timer-h-a');
  const hB = document.getElementById('timer-h-b');
  const mA = document.getElementById('timer-m-a');
  const mB = document.getElementById('timer-m-b');
  const sA = document.getElementById('timer-s-a');
  const sB = document.getElementById('timer-s-b');

  const b1 = document.getElementById('1')
  const b2 = document.getElementById('2');
  const b3 = document.getElementById('3');
  const b4 = document.getElementById('4');
  const b5 = document.getElementById('5');
  const b6 = document.getElementById('6');
  const b7 = document.getElementById('7');
  const b8 = document.getElementById('8');
  const b9 = document.getElementById('9');
  const b0 = document.getElementById('0');
  const clearBtn = document.getElementById('clear');
  const bDel = document.getElementById('del');
  // bDel.addEventListener('click', deleteTimer);

  const startBtn = document.getElementById('start-timer');
  startBtn.addEventListener('click', startTimer);
  const stopBtn = document.getElementById('stop-timer');
  stopBtn.addEventListener('click', stopTimer);
  const resetBtn = document.getElementById('reset-timer');
  resetBtn.addEventListener('click', resetTimer);

  function showAlert(a) {
    if (hA.innerHTML == 0 && hB.innerHTML == 0 && mA.innerHTML == 0 && mB.innerHTML == 0 && sA.innerHTML == 0 && sB.innerHTML == 0) {
      alertDisplay.style.display = 'block';

      clearInterval(a);
    }
  };

  //Set timer functions>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function setAndDelTimer(e) {
    e.preventDefault();
    showAlert();
    if (e.target.className === 'btn num') {

      if (hA.innerHTML == '-') {
        hA.innerHTML = e.target.value;
      }
      else if (hB.innerHTML == '-') {
        hB.innerHTML = e.target.value
      }

      else if (mA.innerHTML == '-') {
        mA.innerHTML = e.target.value
      }

      else if (mB.innerHTML == '-') {
        mB.innerHTML = e.target.value
      }

      else if (sA.innerHTML == '-') {
        sA.innerHTML = e.target.value
      }

      else if (sB.innerHTML == '-') {
        sB.innerHTML = e.target.value
        startBtn.style.display = 'inline';
      }


    }
    if (e.target.className == 'btn num del') {
      if (sB.innerHTML != '-') {
        sB.innerHTML = '-'
        startBtn.style.display = 'none';
      }

      else if (sA.innerHTML != '-') {
        sA.innerHTML = '-'
      }

      else if (mB.innerHTML != '-') {
        mB.innerHTML = '-'
      }

      else if (mA.innerHTML != '-') {
        mA.innerHTML = '-'
      }

      else if (hB.innerHTML != '-') {
        hB.innerHTML = '-'
      }

      else if (hA.innerHTML != '-') {
        hA.innerHTML = '-'
      }

    }
    if (e.target.className == 'btn num clear') {
      clearInterval(sBInterval);
      hA.innerHTML = '-'
      hB.innerHTML = '-'
      mA.innerHTML = '-'
      mB.innerHTML = '-'
      sA.innerHTML = '-'
      sB.innerHTML = '-'
      startBtn.style.display = 'none';
      alertDisplay.style.display = 'none';
    }

  };
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Start timer Func
  function startTimer(e) {
    stopBtn.style.display = 'inline';
    startBtn.style.display = 'none';
    resetBtn.style.display = 'inline';
    clearBtn.disabled = true;
    if (hA.innerHTML == 0 && hB.innerHTML == 0 && mA.innerHTML == 0 && mB.innerHTML == 0 && sA.innerHTML == 0 && sB.innerHTML == 0) {
      startBtn.style.display = 'none';
      sBInterval = 0;
    } else {
      sBInterval = setInterval(countsB, 1000)



      function countsB() {
        sB.innerHTML--;
        showAlert(sBInterval)
        if (sB.innerHTML == -1) {
          sB.innerHTML = 9;
          countsA();
        }
      };

      function countsA() {
        sA.innerHTML--;
        if (sA.innerHTML == -1) {
          sA.innerHTML = 5;
          countmB();
        }
      };

      function countmB() {
        mB.innerHTML--;
        if (mB.innerHTML == -1) {
          mB.innerHTML = 9;
          countmA();
        }
      };

      function countmA() {
        mA.innerHTML--;
        if (mA.innerHTML == -1) {
          mA.innerHTML = 5;
          counthB();
        }
      };

      function counthB() {
        hB.innerHTML--;
        if (hB.innerHTML == -1) {
          hB.innerHTML = 9;
          counthA();
        }
      };

      function counthA() {
        hA.innerHTML--;
        if (hA.innerHTML == -1) {
          hA.innerHTML = 5;

        }
      };

    }
  }

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //Stop Timer Func
  function stopTimer(e) {
    clearInterval(sBInterval);
    stopBtn.style.display = 'none';
    startBtn.style.display = 'inline';
  };
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //Reset Timer Function
  function resetTimer(e) {
    stopBtn.style.display = 'none';
    startBtn.style.display = 'inline';
    resetBtn.style.display = 'none';
    clearBtn.disabled = false;
    clearInterval(sBInterval);
    hA.innerHTML = '-'
    hB.innerHTML = '-'
    mA.innerHTML = '-'
    mB.innerHTML = '-'
    sA.innerHTML = '-'
    sB.innerHTML = '-'
    alertDisplay.style.display = 'none';
  };


})();


































