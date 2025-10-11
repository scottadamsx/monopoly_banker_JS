class Game {
    constructor(players, board, currentPlayer) {
        this.players = []
        this.board = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
        this.currentPlayer = ""
    }
}

class Player {
    constructor(name) {
        this.name = name
        this.wallet = 2500
        this.properties = []
        this.currentSpace = 1
    }
}

let setupDiv = document.createElement("div")
document.body.appendChild(setupDiv)
setupDiv.textContent = " "

function setupGame() {
    if (setupDiv.textContent == " ") {
        

    // setup title
    let setupTitle = document.createElement("h1")
    setupTitle.textContent = "Setup New Game"
    setupDiv.appendChild(setupTitle)

    // label for number of players
    let numPlayersLabel = document.createElement("label")
    numPlayersLabel.textContent = "Number of Players"
    numPlayersLabel.htmlFor = "numPlayersSelect"
    setupDiv.appendChild(numPlayersLabel)

    // slect for number of players
    let numPlayersSelect = document.createElement("select")
    numPlayersSelect.id = "numPlayersSelect"
    setupDiv.appendChild(numPlayersSelect)
    const options = ["2 players", "3 players", "4 players", "5 players", "6 players"]

    // loops through options and sets it to an option for the select
    options.forEach(optionValue => {
        let option = document.createElement("option")
        option.value = optionValue
        option.label = optionValue
        numPlayersSelect.appendChild(option)
    })

    // create box for player name inputs
    let playerNamesDiv = document.createElement("div")
    setupDiv.appendChild(playerNamesDiv)
    let playerOptions = ["player1","player2"]
    playerOptions.forEach(player => {
        let label = document.createElement("label")
        label.textContent = player + ": "
        label.htmlFor = player
        let playerName = document.createElement("input")
        playerName.id = player
        playerNamesDiv.appendChild(label)
        playerNamesDiv.appendChild(playerName)
        playerNamesDiv.appendChild(document.createElement("br"))
    })

    // create submit button 
    let numPlayersSubmitBtn = document.createElement("button")
    numPlayersSubmitBtn.textContent = "start game"
    numPlayersSubmitBtn.addEventListener("click", () => {
        let inputs = playerNamesDiv.querySelectorAll("input")
        let playerNames = []
        inputs.forEach(input => {
            let playerName = input.value
            playerNames.push(playerName)
        })
        alert(playerNames)
        setupDiv.textContent = ""
        let newGameBtn = document.getElementById("newGameBtn")
        newGameBtn.remove()

        // STARTS GAME AFTER CLEARING SETUP DIV
        startGame(playerNames)
    })
    setupDiv.appendChild(numPlayersSubmitBtn)

    // logic for the change of num player select
    numPlayersSelect.addEventListener("change", () => {
        let numPlayers = numPlayersSelect.value
        if (numPlayers == "2 players") {
            playerNamesDiv.innerHTML = ""
            playerOptions = ["player1","player2"]
            playerOptions.forEach(player => {
                let label = document.createElement("label")
                label.textContent = player + ": "
                label.htmlFor = player
                let playerName = document.createElement("input")
                playerName.id = player
                playerNamesDiv.appendChild(label)
                playerNamesDiv.appendChild(playerName)
                playerNamesDiv.appendChild(document.createElement("br"))
            })
        } else if (numPlayers == "3 players") {
            playerNamesDiv.innerHTML = ""
            playerOptions = ["player1","player2","player3"]
            playerOptions.forEach(player => {
                let label = document.createElement("label")
                label.textContent = player + ": "
                label.htmlFor = player
                let playerName = document.createElement("input")
                playerName.id = player
                playerNamesDiv.appendChild(label)
                playerNamesDiv.appendChild(playerName)
                playerNamesDiv.appendChild(document.createElement("br"))
            })

        } else if (numPlayers == "4 players") {
            playerNamesDiv.innerHTML = ""
            playerOptions = ["player1","player2","player3","player4"]
            playerOptions.forEach(player => {
                let label = document.createElement("label")
                label.textContent = player + ": "
                label.htmlFor = player
                let playerName = document.createElement("input")
                playerName.id = player
                playerNamesDiv.appendChild(label)
                playerNamesDiv.appendChild(playerName)
                playerNamesDiv.appendChild(document.createElement("br"))
            })

        } else if (numPlayers == "5 players") {
            playerNamesDiv.innerHTML = ""
            playerOptions = ["player1","player2","player3","player4","player5"]
            playerOptions.forEach(player => {
                let label = document.createElement("label")
                label.textContent = player + ": "
                label.htmlFor = player
                let playerName = document.createElement("input")
                playerName.id = player
                playerNamesDiv.appendChild(label)
                playerNamesDiv.appendChild(playerName)
                playerNamesDiv.appendChild(document.createElement("br"))
            })

        } else if (numPlayers == "6 players") {
            playerNamesDiv.innerHTML = ""
            playerOptions = ["player1","player2","player3","player4","player5","player6"]
            playerOptions.forEach(player => {
                let label = document.createElement("label")
                label.textContent = player + ": "
                label.htmlFor = player
                let playerName = document.createElement("input")
                playerName.id = player
                playerNamesDiv.appendChild(label)
                playerNamesDiv.appendChild(playerName)
                playerNamesDiv.appendChild(document.createElement("br"))
            })
        }
    })


    }
    
}

function updatePlayerValues(players) {
    let playerValuesSection = document.getElementById("playerValuesSection")
    players.forEach(player => {
         let playerValues = document.createElement("div")
        playerValues.id = player.name + "Values"
        // add a space for name
        let playerName = document.createElement("h3")
        playerName.textContent = player.name
        // add a space for wallet
        let playerWalletLabel = document.createElement("label")
        playerWalletLabel.textContent = "Balance: "
        let playerWallet = document.createElement("input")
        playerWallet.readOnly = true
        playerWallet.value = player.wallet
        // add a sapce fo currentSpace
        let playerCurrentSpaceLabel = document.createElement("label")
        playerCurrentSpaceLabel.textContent = "Current Space: "
        let playerCurrentSpace = document.createElement("input")
        playerCurrentSpace.readOnly = true
        playerCurrentSpace.value = player.currentSpace
        //TODO: add a section for properties

        // add playerValues to the div
        let playerDiv = document.createElement("div")
        playerValuesSection.appendChild(playerDiv)
        
        playerDiv.appendChild(playerName)
        playerDiv.appendChild(playerWalletLabel)
        playerDiv.appendChild(playerWallet)
        playerDiv.appendChild(document.createElement("br"))
        playerDiv.appendChild(playerCurrentSpaceLabel)
        playerDiv.appendChild(playerCurrentSpace)
    }
       
    )
}

function startGame(playerNames) {
    // create players
    let players = [] 
    playerNames.forEach(playerName => {
        let player = new Player(playerName)
        players.push(player)
    })
    // ============================================
    console.log(players)

    updatePlayerValues(players)
}