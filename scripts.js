(function() {
    'use strict';

    const GameSetup = (() => {
        function GameBoard (){
            this.board = ["","","","","","","","",""],
            this.player1Win = false,
            this.player2Win = false,
            this.gameOver = false,
            this.moveCounter = 1
        }
        
        function Players (player_name){
            this.player_name = player_name
        }
        
        return {GameBoard,Players}
    })()
    
    const UI = (() => {
        const elements = {
            slot1: document.querySelector("#slot-1"),
            slot2: document.querySelector("#slot-2"),
            slot3: document.querySelector("#slot-3"),
            slot4: document.querySelector("#slot-4"),
            slot5: document.querySelector("#slot-5"),
            slot6: document.querySelector("#slot-6"),
            slot7: document.querySelector("#slot-7"),
            slot8: document.querySelector("#slot-8"),
            slot9: document.querySelector("#slot-9")
        }
        
        const getElement = () => elements
        
        return {getElement}
    })()
    
    const Round = (() => {
        let gameboard = new GameSetup.GameBoard()
        let gameOver = gameboard.gameOver
        let board = gameboard.board
        let elements = UI.getElement()
        
        const slot1Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && board[0] !== "X" && board[0] !== "O" && !gameOver){
                board[0] = "X"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot1.textContent = "X"
            } else if ((gameboard.moveCounter % 2 == 0)  && board[0] !== "O" && board[0] !== "X" && !gameOver){
                board[0] = "O"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot1.textContent = "O"
            }

            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()   
        }
        
        const slot2Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && board[1] !== "X" && board[1] !== "O" && !gameOver){
                board[1] = "X"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot2.textContent = "X"
            } else if ((gameboard.moveCounter % 2 == 0)  && board[1] !== "O" && board[1] !== "X" && !gameOver){
                board[1] = "O"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot2.textContent = "O"
            }
            
            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()
        }
        
        const slot3Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && board[2] !== "X" && board[2] !== "O" && !gameOver){
                board[2] = "X"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot3.textContent = "X"
            } else if ((gameboard.moveCounter % 2 == 0)  && board[2] !== "O" && board[2] !== "X" && !gameOver){
                board[2] = "O"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot3.textContent = "O"
            }
            
            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()
        }

        const slot4Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && board[3] !== "X" && board[3] !== "O" && !gameOver){
                board[3] = "X"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot4.textContent = "X"
            } else if ((gameboard.moveCounter % 2 == 0)  && board[3] !== "O" && board[3] !== "X" && !gameOver){
                board[3] = "O"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot4.textContent = "O"
            }

            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()
        }
            
        const slot5Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && board[4] !== "X" && board[4] !== "O" && !gameOver){
                board[4] = "X"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot5.textContent = "X"
            } else if ((gameboard.moveCounter % 2 == 0)  && board[4] !== "O" && board[4] !== "X" && !gameOver){
                board[4] = "O"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot5.textContent = "O"
            }
            
            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()
        }

        const slot6Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && board[5] !== "X" && board[5] !== "O" && !gameOver){
                board[5] = "X"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot6.textContent = "X"
            } else if ((gameboard.moveCounter % 2 == 0)  && board[5] !== "O" && board[5] !== "X" && !gameOver){
                board[5] = "O"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot6.textContent = "O"
            }
            
            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()
        }
        
        const slot7Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && board[6] !== "X" && board[6] !== "O" && !gameOver){
                board[6] = "X"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot7.textContent = "X"
            } else if ((gameboard.moveCounter % 2 == 0)  && board[6] !== "O" && board[6] !== "X" && !gameOver){
                board[6] = "O"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot7.textContent = "O"
            }
            
            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()
        }
      
        const slot8Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && board[7] !== "X" && board[7] !== "O" && !gameOver){
                board[7] = "X"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot8.textContent = "X"
            } else if ((gameboard.moveCounter % 2 == 0)  && board[7] !== "O" && board[7] !== "X" && !gameOver){
                board[7] = "O"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot8.textContent = "O"
            }
            
            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()   
        }

        const slot9Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && board[8] !== "X" && board[8] !== "O" && !gameOver){
                board[8] = "X"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot9.textContent = "X"
            } else if ((gameboard.moveCounter % 2 == 0)  && board[8] !== "O" && board[8] !== "X" && !gameOver){
                board[8] = "O"
                gameboard.moveCounter++
                console.log(gameboard.moveCounter)
                elements.slot9.textContent = "O"
            }
            
            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()
        }
        
        const checkWin = () => {
            if (board[0] == "X" && board[1] == "X" && board[2] == "X") {
                gameboard.player1Win = true
                gameOver = true
            } else if (board[0] == "O" && board[1] == "O" && board[2] == "O"){
                gameboard.player2Win = true
                gameOver = true
            }
            
            if (board[3] == "X" && board[4] == "X" && board[5] == "X"){
                gameboard.player1Win = true
                gameOver = true
            } else if (board[3] == "O" && board[4] == "O" && board[5] == "O"){
                gameboard.player2Win = true
                gameOver = true
            }
            
            if (board[6] == "X" && board[7] == "X" && board[8] == "X"){
                gameboard.player1Win = true
                gameOver = true
            } else if (board[6] == "O" && board[7] == "O" && board[8] == "O"){
                gameboard.player2Win = true
                gameOver = true
            }
            
            if (board[0] == "X" && board[3] == "X" && board[6] == "X"){
                gameboard.player1Win = true
                gameOver = true
            } else if (board[0] == "O" && board[3] == "O" && board[6] == "O"){
                gameboard.player2Win = true
                gameOver = true
            }
            
            if (board[1] == "X" && board[4] == "X" && board[7] == "X"){
                gameboard.player1Win = true
                gameOver = true
            } else if (board[1] == "O" && board[4] == "O" && board[7] == "O"){
                gameboard.player2Win = true
                gameOver = true
            }
            
            if (board[2] == "X" && board[5] == "X" && board[8] == "X"){
                gameboard.player1Win = true
                gameOver = true 
            } else if (board[2] == "O" && board[5] == "O" && board[8] == "O"){
                gameboard.player2Win = true
                gameOver = true
            }
            
            if (board[0] == "X" && board[4] == "X" && board[8] == "X"){
                gameboard.player1Win = true
                gameOver = true 
            } else if (board[0] == "O" && board[4] == "O" && board[8] == "O"){
                gameboard.player2Win = true
                gameOver = true
            }
            
            if (board[2] == "X" && board[4] == "X" && board[6] == "X"){
                gameboard.player1Win = true
                gameOver = true 
            } else if (board[2] == "O" && board[4] == "O" && board[6] == "O"){
                gameboard.player2Win = true
                gameOver = true
            }
            checkDraw()
        }
        
        const checkPlayer1Win = () => {
            if (gameOver && gameboard.player1Win){
                alert("Player 1 Win")
                location.reload()
                return true
            } else {
                return false
            }
        }
        
        const checkPlayer2Win = () => {
            if (gameOver && gameboard.player2Win){
                alert("Player 2 Win")
                location.reload()
                return true
            } else {
                return false
            }
        }
        
        const checkDraw = () => {
            if (!gameOver || (!gameboard.player1Win && !gameboard.player2Win)){
                let count = 0
                for (let i = 0; i < board.length; i++){
                    if (board[i] !== ""){
                        count++ 
                    }
                }

                if (count >= 9){
                    alert("It's a Draw")
                    location.reload()
                    return true
                } else {
                    return false
                }
            }
        }
        
        return {slot1Logic, slot2Logic, slot3Logic, slot4Logic,
            slot5Logic, slot6Logic, slot7Logic, slot8Logic, slot9Logic
        }
    })()
    
    const EventController = (() => {
        const elements = UI.getElement()
        const init = () => {
            elements.slot1.addEventListener("click",Round.slot1Logic)
            elements.slot2.addEventListener("click",Round.slot2Logic)
            elements.slot3.addEventListener("click",Round.slot3Logic)
            elements.slot4.addEventListener("click",Round.slot4Logic)
            elements.slot5.addEventListener("click",Round.slot5Logic)
            elements.slot6.addEventListener("click",Round.slot6Logic)
            elements.slot7.addEventListener("click",Round.slot7Logic)
            elements.slot8.addEventListener("click",Round.slot8Logic)
            elements.slot9.addEventListener("click",Round.slot9Logic)
        }
        
        return {init}
    })()
    
    document.addEventListener("DOMContentLoaded", () => {
        EventController.init()
    })
    
})()