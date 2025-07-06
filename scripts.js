(function() {
    'use strict';

    const GameSetup = (() => {
        function GameBoard (){
            this.board = ["","","","","","","","",""],
            this.player1Win = false,
            this.player2Win = false,
            this.player1Score = 0,
            this.player2Score = 0,
            this.drawCount = 0,
            this.gameOver = false,
            this.moveCounter = 1
        }

        function Player (player_name) {
            this.player_name = player_name
        }

        return {GameBoard, Player}
    })()
    
    const UI = (() => {
        const elements = {
            startModal: document.querySelector("dialog"),
            form: document.querySelector("form"),
            startButton: document.querySelector(".start-button"),
            squares: document.querySelectorAll(".squares"),
            slot1: document.querySelector("#slot-1"),
            slot2: document.querySelector("#slot-2"),
            slot3: document.querySelector("#slot-3"),
            slot4: document.querySelector("#slot-4"),
            slot5: document.querySelector("#slot-5"),
            slot6: document.querySelector("#slot-6"),
            slot7: document.querySelector("#slot-7"),
            slot8: document.querySelector("#slot-8"),
            slot9: document.querySelector("#slot-9"),
            player1: document.querySelector(".player-1-score"),
            player2: document.querySelector(".player-2-score"),
            draw: document.querySelector(".draw-count"),
            player1Header: document.querySelector(".player-1 > .header"),
            player2Header: document.querySelector(".player-2 > .header"),
            drawHeader: document.querySelector(".draw > .header")
        }
        
        const getElement = () => elements

        const openStartModal = () => {
            elements.startModal.showModal()
        }

        const closeStartModal = () => {
            elements.startModal.close()
        }

        const getFormData = () => {
            return {
                player1Name: document.querySelector('input[id="player-1-name"]'),
                player2Name: document.querySelector('input[id="player-2-name"]')
            }
        }

        const clearForm = () => {
            elements.form.clear()
        }

        const updatePlayer1Name = (player1) => {
            elements.player1Header.textContent = `${player1} (X)`
        }

        const updatePlayer2Name = (player2) => {
            elements.player2Header.textContent = `${player2} (O)`
        }

        const updateScoreboard = (scores) => {
            elements.player1.textContent = scores.player1Score
            elements.player2.textContent = scores.player2Score
            elements.draw.textContent = scores.drawCount
        }

        const clearBoard = () => {
            elements.squares.forEach((square) => {
                square.style.backgroundImage = ""
            })
        }
        
        return {getElement, openStartModal, closeStartModal, getFormData, clearForm,
            updatePlayer1Name, updatePlayer2Name, updateScoreboard, clearBoard}
    })()
    
    const Round = (() => {
        let gameboard = new GameSetup.GameBoard()
        let elements = UI.getElement()

        const totalStats = {
            player1Score: 0,
            player2Score: 0,
            drawCount: 0
        }

        const getStats = () => totalStats

        const resetArray = () => {
            gameboard = new GameSetup.GameBoard()
            gameboard.player1Score = totalStats.player1Score
            gameboard.player2Score = totalStats.player2Score
            gameboard.drawCount = totalStats.drawCount

            console.log(gameboard)

            UI.clearBoard()
            UI.updateScoreboard(totalStats)
        }
        
        const slot1Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && gameboard.board[0] !== "X" && gameboard.board[0] !== "O" && !gameboard.gameOver){
                gameboard.board[0] = "X"
                gameboard.moveCounter++
                
                elements.slot1.style.backgroundImage = "url(./assets/img/x.svg)"
            } else if ((gameboard.moveCounter % 2 == 0)  && gameboard.board[0] !== "O" && gameboard.board[0] !== "X" && !gameboard.gameOver){
                gameboard.board[0] = "O"
                gameboard.moveCounter++
                
                elements.slot1.style.backgroundImage = "url(./assets/img/circle.svg)"
            }

            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()   
        }
        
        const slot2Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && gameboard.board[1] !== "X" && gameboard.board[1] !== "O" && !gameboard.gameOver){
                gameboard.board[1] = "X"
                gameboard.moveCounter++
                
                elements.slot2.style.backgroundImage = "url(./assets/img/x.svg)"
            } else if ((gameboard.moveCounter % 2 == 0)  && gameboard.board[1] !== "O" && gameboard.board[1] !== "X" && !gameboard.gameOver){
                gameboard.board[1] = "O"
                gameboard.moveCounter++
                
                elements.slot2.style.backgroundImage = "url(./assets/img/circle.svg)"
            }
            
            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()
        }
        
        const slot3Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && gameboard.board[2] !== "X" && gameboard.board[2] !== "O" && !gameboard.gameOver){
                gameboard.board[2] = "X"
                gameboard.moveCounter++
                
                elements.slot3.style.backgroundImage = "url(./assets/img/x.svg)"
            } else if ((gameboard.moveCounter % 2 == 0)  && gameboard.board[2] !== "O" && gameboard.board[2] !== "X" && !gameboard.gameOver){
                gameboard.board[2] = "O"
                gameboard.moveCounter++
                
                elements.slot3.style.backgroundImage = "url(./assets/img/circle.svg)"
            }
            
            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()
        }

        const slot4Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && gameboard.board[3] !== "X" && gameboard.board[3] !== "O" && !gameboard.gameOver){
                gameboard.board[3] = "X"
                gameboard.moveCounter++
                
                elements.slot4.style.backgroundImage = "url(./assets/img/x.svg)"
            } else if ((gameboard.moveCounter % 2 == 0)  && gameboard.board[3] !== "O" && gameboard.board[3] !== "X" && !gameboard.gameOver){
                gameboard.board[3] = "O"
                gameboard.moveCounter++
                
                elements.slot4.style.backgroundImage = "url(./assets/img/circle.svg)"
            }

            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()
        }
            
        const slot5Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && gameboard.board[4] !== "X" && gameboard.board[4] !== "O" && !gameboard.gameOver){
                gameboard.board[4] = "X"
                gameboard.moveCounter++
                
                elements.slot5.style.backgroundImage = "url(./assets/img/x.svg)"
            } else if ((gameboard.moveCounter % 2 == 0)  && gameboard.board[4] !== "O" && gameboard.board[4] !== "X" && !gameboard.gameOver){
                gameboard.board[4] = "O"
                gameboard.moveCounter++
                
                elements.slot5.style.backgroundImage = "url(./assets/img/circle.svg)"
            }
            
            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()
        }

        const slot6Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && gameboard.board[5] !== "X" && gameboard.board[5] !== "O" && !gameboard.gameOver){
                gameboard.board[5] = "X"
                gameboard.moveCounter++
                
                elements.slot6.style.backgroundImage = "url(./assets/img/x.svg)"
            } else if ((gameboard.moveCounter % 2 == 0)  && gameboard.board[5] !== "O" && gameboard.board[5] !== "X" && !gameboard.gameOver){
                gameboard.board[5] = "O"
                gameboard.moveCounter++
                
                elements.slot6.style.backgroundImage = "url(./assets/img/circle.svg)"
            }
            
            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()
        }
        
        const slot7Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && gameboard.board[6] !== "X" && gameboard.board[6] !== "O" && !gameboard.gameOver){
                gameboard.board[6] = "X"
                gameboard.moveCounter++
                
                elements.slot7.style.backgroundImage = "url(./assets/img/x.svg)"
            } else if ((gameboard.moveCounter % 2 == 0)  && gameboard.board[6] !== "O" && gameboard.board[6] !== "X" && !gameboard.gameOver){
                gameboard.board[6] = "O"
                gameboard.moveCounter++
                
                elements.slot7.style.backgroundImage = "url(./assets/img/circle.svg)"
            }
            
            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()
        }
      
        const slot8Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && gameboard.board[7] !== "X" && gameboard.board[7] !== "O" && !gameboard.gameOver){
                gameboard.board[7] = "X"
                gameboard.moveCounter++
                
                elements.slot8.style.backgroundImage = "url(./assets/img/x.svg)"
            } else if ((gameboard.moveCounter % 2 == 0)  && gameboard.board[7] !== "O" && gameboard.board[7] !== "X" && !gameboard.gameOver){
                gameboard.board[7] = "O"
                gameboard.moveCounter++
                
                elements.slot8.style.backgroundImage = "url(./assets/img/circle.svg)"
            }
            
            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()   
        }

        const slot9Logic = () => {
            if ((gameboard.moveCounter % 2 == 1)  && gameboard.board[8] !== "X" && gameboard.board[8] !== "O" && !gameboard.gameOver){
                gameboard.board[8] = "X"
                gameboard.moveCounter++
                
                elements.slot9.style.backgroundImage = "url(./assets/img/x.svg)"
            } else if ((gameboard.moveCounter % 2 == 0)  && gameboard.board[8] !== "O" && gameboard.board[8] !== "X" && !gameboard.gameOver){
                gameboard.board[8] = "O"
                gameboard.moveCounter++
                
                elements.slot9.style.backgroundImage = "url(./assets/img/circle.svg)"
            }
            
            checkWin()
            checkPlayer1Win()
            checkPlayer2Win()
        }
        
        const checkWin = () => {
            if (gameboard.board[0] == "X" && gameboard.board[1] == "X" && gameboard.board[2] == "X") {
                gameboard.player1Win = true
                gameboard.gameOver = true
            } else if (gameboard.board[0] == "O" && gameboard.board[1] == "O" && gameboard.board[2] == "O"){
                gameboard.player2Win = true
                gameboard.gameOver = true
            }
            
            if (gameboard.board[3] == "X" && gameboard.board[4] == "X" && gameboard.board[5] == "X"){
                gameboard.player1Win = true
                gameboard.gameOver = true
            } else if (gameboard.board[3] == "O" && gameboard.board[4] == "O" && gameboard.board[5] == "O"){
                gameboard.player2Win = true
                gameboard.gameOver = true
            }
            
            if (gameboard.board[6] == "X" && gameboard.board[7] == "X" && gameboard.board[8] == "X"){
                gameboard.player1Win = true
                gameboard.gameOver = true
            } else if (gameboard.board[6] == "O" && gameboard.board[7] == "O" && gameboard.board[8] == "O"){
                gameboard.player2Win = true
                gameboard.gameOver = true
            }
            
            if (gameboard.board[0] == "X" && gameboard.board[3] == "X" && gameboard.board[6] == "X"){
                gameboard.player1Win = true
                gameboard.gameOver = true
            } else if (gameboard.board[0] == "O" && gameboard.board[3] == "O" && gameboard.board[6] == "O"){
                gameboard.player2Win = true
                gameboard.gameOver = true
            }
            
            if (gameboard.board[1] == "X" && gameboard.board[4] == "X" && gameboard.board[7] == "X"){
                gameboard.player1Win = true
                gameboard.gameOver = true
            } else if (gameboard.board[1] == "O" && gameboard.board[4] == "O" && gameboard.board[7] == "O"){
                gameboard.player2Win = true
                gameboard.gameOver = true
            }
            
            if (gameboard.board[2] == "X" && gameboard.board[5] == "X" && gameboard.board[8] == "X"){
                gameboard.player1Win = true
                gameboard.gameOver = true 
            } else if (gameboard.board[2] == "O" && gameboard.board[5] == "O" && gameboard.board[8] == "O"){
                gameboard.player2Win = true
                gameboard.gameOver = true
            }
            
            if (gameboard.board[0] == "X" && gameboard.board[4] == "X" && gameboard.board[8] == "X"){
                gameboard.player1Win = true
                gameboard.gameOver = true 
            } else if (gameboard.board[0] == "O" && gameboard.board[4] == "O" && gameboard.board[8] == "O"){
                gameboard.player2Win = true
                gameboard.gameOver = true
            }
            
            if (gameboard.board[2] == "X" && gameboard.board[4] == "X" && gameboard.board[6] == "X"){
                gameboard.player1Win = true
                gameboard.gameOver = true 
            } else if (gameboard.board[2] == "O" && gameboard.board[4] == "O" && gameboard.board[6] == "O"){
                gameboard.player2Win = true
                gameboard.gameOver = true
            }
            checkDraw()
        }
        
        const checkPlayer1Win = () => {
            if (gameboard.gameOver && gameboard.player1Win){
                console.log("Player 1 Wins")
                totalStats.player1Score++
                UI.updateScoreboard(totalStats)
                resetArray()
                return true
            } else {
                return false
            }
        }
        
        const checkPlayer2Win = () => {
            if (gameboard.gameOver && gameboard.player2Win){
                totalStats.player2Score++
                UI.updateScoreboard(totalStats)
                resetArray()
                return true
            } else {
                return false
            }
        }
        
        const checkDraw = () => {
            if (!gameboard.gameOver || (!gameboard.player1Win && !gameboard.player2Win)){
                let count = 0
                for (let i = 0; i < gameboard.board.length; i++){
                    if (gameboard.board[i] !== ""){
                        count++ 
                    }
                }

                if (count >= 9){
                    alert("It's a Draw")
                    totalStats.drawCount++
                    UI.updateScoreboard(totalStats)
                    resetArray()
                    return true
                } else {
                    return false
                }
            }
        }
        
        return {slot1Logic, slot2Logic, slot3Logic, slot4Logic,
            slot5Logic, slot6Logic, slot7Logic, slot8Logic, slot9Logic,
            getStats
        }
    })()
    
    const EventController = (() => {
        const elements = UI.getElement()
        const init = () => {
            elements.startButton.addEventListener("submit", formSubmit)
            elements.slot1.addEventListener("click",Round.slot1Logic)
            elements.slot2.addEventListener("click",Round.slot2Logic)
            elements.slot3.addEventListener("click",Round.slot3Logic)
            elements.slot4.addEventListener("click",Round.slot4Logic)
            elements.slot5.addEventListener("click",Round.slot5Logic)
            elements.slot6.addEventListener("click",Round.slot6Logic)
            elements.slot7.addEventListener("click",Round.slot7Logic)
            elements.slot8.addEventListener("click",Round.slot8Logic)
            elements.slot9.addEventListener("click",Round.slot9Logic)

            UI.updateScoreboard(Round.getStats())
        }

        const formSubmit = (event) => {
            event.preventDefault()
            const formData = UI.getFormData()
            const player1 = new Player(formData.player1Name)
            const player2 = new Player(formData.player2Name)
            UI.updatePlayer1Name(player1)
            UI.updatePlayer2Name(player2)
            handleModalClose()
        }

        const handleModalClose = () => {
            UI.closeStartModal()
            UI.clearForm()
        }
        
        return {init}
    })()
    
    document.addEventListener("DOMContentLoaded", () => {
        UI.openStartModal()
        EventController.init()
    })
    
})()