(function() {

  var unoccupied = ' '
  var board = []
  var BoardSize = 9
  var blankImage = new Image()
  blankImage.src = 'https://dl.dropboxusercontent.com/u/8198791/Solid_white.png'

  function NewGame() {
    for (i = 0; i < BoardSize; i++) {
      board[i] = unoccupied
      document.images[i].src = blankImage.src
    }
  }

  function takeOut() {
    var el = document.getElementById('playerInfo')
    setTimeout(function() {
      el.innerHTML = ''
    }, 1000)
  }

  var resetFired = document.getElementById('Reset')
  resetFired.onclick = function() {
    NewGame()
    takeOut()
  }

  window.onload = function() {
    NewGame()
  }

  var OPress = document.getElementById('O')
  OPress.onclick = function selectPlayer() {

    var playerImage = new Image()
    var computerImage = new Image()
    var humanPlayer = 'O'
    var cpuPlayer = 'X'
    playerImage.src = 'https://dl.dropboxusercontent.com/u/8198791/Capture.PNG'
    computerImage.src = 'https://dl.dropboxusercontent.com/u/8198791/X.PNG'

    function checkWin(pos) {
      if (
        (board[0] == humanPlayer && board[1] == humanPlayer && board[2] == humanPlayer) ||
        (board[3] == humanPlayer && board[4] == humanPlayer && board[5] == humanPlayer) ||
        (board[6] == humanPlayer && board[7] == humanPlayer && board[8] == humanPlayer) ||
        (board[0] == humanPlayer && board[3] == humanPlayer && board[6] == humanPlayer) ||
        (board[1] == humanPlayer && board[4] == humanPlayer && board[7] == humanPlayer) ||
        (board[2] == humanPlayer && board[5] == humanPlayer && board[8] == humanPlayer) ||
        (board[0] == humanPlayer && board[4] == humanPlayer && board[8] == humanPlayer) ||
        (board[2] == humanPlayer && board[4] == humanPlayer && board[6] == humanPlayer)
      ) {
        return 2

      } else if (
        (board[0] == cpuPlayer && board[1] == cpuPlayer && board[2] == cpuPlayer) ||
        (board[3] == cpuPlayer && board[4] == cpuPlayer && board[5] == cpuPlayer) ||
        (board[6] == cpuPlayer && board[7] == cpuPlayer && board[8] == cpuPlayer) ||
        (board[0] == cpuPlayer && board[3] == cpuPlayer && board[6] == cpuPlayer) ||
        (board[1] == cpuPlayer && board[4] == cpuPlayer && board[7] == cpuPlayer) ||
        (board[2] == cpuPlayer && board[5] == cpuPlayer && board[8] == cpuPlayer) ||
        (board[0] == cpuPlayer && board[4] == cpuPlayer && board[8] == cpuPlayer) ||
        (board[2] == cpuPlayer && board[4] == cpuPlayer && board[6] == cpuPlayer)
      ) {
        return 3
      }
        for (i = 0; i < BoardSize; i++) {
          if (board[i] !== humanPlayer && board[i] !== cpuPlayer)
            return 0
        }
        return 1
    }
    
    function makeComputerMove(pos) {
      if (board[4] == unoccupied) {
        board[4] = cpuPlayer
        document.images[4].src = computerImage.src
      } else if (board[1] == unoccupied) {
        board[1] = cpuPlayer
        document.images[1].src = computerImage.src
      } else if (board[5] == unoccupied) {
        board[5] = cpuPlayer
        document.images[5].src = computerImage.src
      } else if (board[7] == unoccupied) {
        board[7] = cpuPlayer
        document.images[7].src = computerImage.src
      } else if (board[2] == unoccupied) {
        board[2] = cpuPlayer
        document.images[2].src = computerImage.src
      } else if (board[0] == unoccupied) {
        board[0] = cpuPlayer
        document.images[0].src = computerImage.src
      } else if (board[6] == unoccupied) {
        board[6] = cpuPlayer
        document.images[6].src = computerImage.src
      } else if (board[8] == unoccupied) {
        board[8] = cpuPlayer
        document.images[8].src = computerImage.src
      }
    }
        
    function gameOver(pos) {
      if (checkWin(pos) === 0) {
        return false
      }
      else if (checkWin(pos) === 1) {
        var msg = document.getElementById('playerInfo')  
        msg.innerHTML = "It's a tie"

      } else if (checkWin(pos) === 3) {
        var msg = document.getElementById('playerInfo')  
        msg.innerHTML = "cpu Wins"

      } else if (checkWin(pos) === 2)  {
        var msg = document.getElementById('playerInfo')  
        msg.innerHTML = "human Wins" 
      }
      NewGame()
      takeOut()
      return true
    }

    function placeMove(pos) {
      checkWin(board)
      if (!gameOver(board) && board[pos] == unoccupied) {
        board[pos] = humanPlayer
        document.images[pos].src = playerImage.src
        if (!gameOver(board)) {
          makeComputerMove(pos)
        }
      }  
    }

    // Create a tremporary scope for i
    // Use placeMove(pos) to make the click
    // // part of the game 
    var list = document.getElementsByTagName("img")
    for (var i = 0; i < list.length; i++)(function(i) {
      list[i].onclick = function() {
        placeMove(i)
      }
    })(i)

  }

  var XPress = document.getElementById('X')
  XPress.onclick = function selectPlayer() {

    var playerImage = new Image()
    var computerImage = new Image()
    var cpuPlayer = 'O'
    var humanPlayer = 'X'
    computerImage.src = 'https://dl.dropboxusercontent.com/u/8198791/Capture.PNG'
    playerImage.src = 'https://dl.dropboxusercontent.com/u/8198791/X.PNG'

    function checkWin(pos) {
      if (
        (board[0] == humanPlayer && board[1] == humanPlayer && board[2] == humanPlayer) ||
        (board[3] == humanPlayer && board[4] == humanPlayer && board[5] == humanPlayer) ||
        (board[6] == humanPlayer && board[7] == humanPlayer && board[8] == humanPlayer) ||
        (board[0] == humanPlayer && board[3] == humanPlayer && board[6] == humanPlayer) ||
        (board[1] == humanPlayer && board[4] == humanPlayer && board[7] == humanPlayer) ||
        (board[2] == humanPlayer && board[5] == humanPlayer && board[8] == humanPlayer) ||
        (board[0] == humanPlayer && board[4] == humanPlayer && board[8] == humanPlayer) ||
        (board[2] == humanPlayer && board[4] == humanPlayer && board[6] == humanPlayer)
      ) {
        return 2

      } else if (
        (board[0] == cpuPlayer && board[1] == cpuPlayer && board[2] == cpuPlayer) ||
        (board[3] == cpuPlayer && board[4] == cpuPlayer && board[5] == cpuPlayer) ||
        (board[6] == cpuPlayer && board[7] == cpuPlayer && board[8] == cpuPlayer) ||
        (board[0] == cpuPlayer && board[3] == cpuPlayer && board[6] == cpuPlayer) ||
        (board[1] == cpuPlayer && board[4] == cpuPlayer && board[7] == cpuPlayer) ||
        (board[2] == cpuPlayer && board[5] == cpuPlayer && board[8] == cpuPlayer) ||
        (board[0] == cpuPlayer && board[4] == cpuPlayer && board[8] == cpuPlayer) ||
        (board[2] == cpuPlayer && board[4] == cpuPlayer && board[6] == cpuPlayer)
      ) {
        return 3
      }
        for (i = 0; i < BoardSize; i++) {
          if (board[i] !== humanPlayer && board[i] !== cpuPlayer)
            return 0
        }
        return 1
    }
    
    function makeComputerMove(pos) {
      if (board[4] == unoccupied) {
        board[4] = cpuPlayer
        document.images[4].src = computerImage.src
      } else if (board[1] == unoccupied) {
        board[1] = cpuPlayer
        document.images[1].src = computerImage.src
      } else if (board[5] == unoccupied) {
        board[5] = cpuPlayer
        document.images[5].src = computerImage.src
      } else if (board[7] == unoccupied) {
        board[7] = cpuPlayer
        document.images[7].src = computerImage.src
      } else if (board[2] == unoccupied) {
        board[2] = cpuPlayer
        document.images[2].src = computerImage.src
      } else if (board[0] == unoccupied) {
        board[0] = cpuPlayer
        document.images[0].src = computerImage.src
      } else if (board[6] == unoccupied) {
        board[6] = cpuPlayer
        document.images[6].src = computerImage.src
      } else if (board[8] == unoccupied) {
        board[8] = cpuPlayer
        document.images[8].src = computerImage.src
      }
    }
       
    function gameOver(pos) {
      if (checkWin(pos) === 0) {
        return false
      }
      else if (checkWin(pos) === 1) {
        var msg = document.getElementById('playerInfo')  
        msg.innerHTML = "It's a tie"

      } else if (checkWin(pos) === 3) {
        var msg = document.getElementById('playerInfo')  
        msg.innerHTML = "cpu Wins"

      } else if (checkWin(pos) === 2)  {
        var msg = document.getElementById('playerInfo')  
        msg.innerHTML = "human Wins" 
      }
      NewGame()
      takeOut()
      return true
    }

    function placeMove(pos) {
      checkWin(board)
      if (!gameOver(board) && board[pos] == unoccupied) {
        board[pos] = humanPlayer
        document.images[pos].src = playerImage.src
        if (!gameOver(board)) {
          makeComputerMove(pos)
        }
      }  
    }
    // Create a tremporary scope for i
    // Use placeMove(pos) to make the click
    // // part of the game 
    var list = document.getElementsByTagName("img")
    for (var i = 0; i < list.length; i++)(function(i) {
      list[i].onclick = function() {
        placeMove(i)
      }
    })(i)

  }

})()
