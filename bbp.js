const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;
    let rounds = 1;


	// Function to
	const playGame = () => {
		const rockBtn = document.getElementById('rock');
		const paperBtn = document.getElementById('paper');
		const scissorBtn = document.getElementById('scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['rock','paper','scissors']
		
		// Function to start playing game
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerHTML = `Moves Left: ${10-moves}`;

                const round_count = document.querySelector('.round_count');
                rounds++;
                round_count.innerHTML = `Round: ${rounds}`;

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				// Function to check who wins
				winner(this.value,computerChoice);
				
				// Calling gameOver function after 10 moves
				if(moves == 10){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}

	// Function to decide winner
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();

		const table = document.getElementById("history");
		const row = table.insertRow(-1);
		const cell1 = row.insertCell(0);
		const cell2 = row.insertCell(1);
		const cell3 = row.insertCell(2);		
		const cell4 = row.insertCell(3);

		cell1.innerHTML = (moves);
		
		if(player == 'rock'){
            var image1 = document.getElementById('user_weapon');
            image1.src = "images/rock.png";
            if(computer == 'paper'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
                var image2 = document.getElementById('comp_weapon');
                image2.src = "images/paper.png";
				cell2.innerHTML = 'Rock';
				cell3.innerHTML = 'Paper';
				cell4.innerHTML = 'Computer Won';

			}else if(computer == 'scissors'){
				result.textContent = 'Player Won'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
                var image2 = document.getElementById('comp_weapon');
                image2.src = "images/scissors.png";
				cell2.innerHTML = 'Rock';
				cell3.innerHTML = 'Scissors';
				cell4.innerHTML = 'Player Won';

			}else {
                result.textContent = 'Tie'
                var image2 = document.getElementById('comp_weapon');
                image2.src = "images/rock.png";                
				cell2.innerHTML = 'Rock';
				cell3.innerHTML = 'Rock';
				cell4.innerHTML = 'Tie';
            }
		}
		else if(player == 'scissors'){
            var image1 = document.getElementById('user_weapon');
            image1.src = "images/scissors.png";
			if(computer == 'rock'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
                var image2 = document.getElementById('comp_weapon');
                image2.src = "images/rock.png";
				cell2.innerHTML = 'Scissors';
				cell3.innerHTML = 'Rock';
				cell4.innerHTML = 'Computer Won';   
			}else if(computer == 'paper'){
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
                var image2 = document.getElementById('comp_weapon');
                image2.src = "images/paper.png";
				cell2.innerHTML = 'Scissors';
				cell3.innerHTML = 'Paper';
				cell4.innerHTML = 'Player Won';

			}else {
                result.textContent = 'Tie'
                var image2 = document.getElementById('comp_weapon');
                image2.src = "images/scissors.png";
				cell2.innerHTML = 'Scissors';
				cell3.innerHTML = 'Scissors';
				cell4.innerHTML = 'Tie';                
            }
		}
		else if(player == 'paper'){
            var image1 = document.getElementById('user_weapon');
            image1.src = "images/paper.png";
			if(computer == 'scissors'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
                var image2 = document.getElementById('comp_weapon');
                image2.src = "images/scissors.png";
				cell2.innerHTML = 'Paper';
				cell3.innerHTML = 'Scissors';
				cell4.innerHTML = 'Computer Won';
   
			}else if(computer == 'rock'){
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
                var image2 = document.getElementById('comp_weapon');
                image2.src = "images/rock.png";
				cell2.innerHTML = 'Paper';
				cell3.innerHTML = 'Rock';
				cell4.innerHTML = 'Computer Won';
   
			}else {
                result.textContent = 'Tie'
                var image2 = document.getElementById('comp_weapon');
                image2.src = "images/paper.png";
				cell2.innerHTML = 'Paper';
				cell3.innerHTML = 'Paper';
				cell4.innerHTML = 'Tie';
                
            }
		}
	}

	// Function to run when game is over
	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const finalResult = document.querySelector('.round_count');
		const reloadBtn = document.querySelector('.reload');
		const result = document.querySelector('.result');
		

		playerOptions.forEach(option => {
			option.style.display = 'none';
			option.disabled = true;
		})

		chooseMove.innerText = 'Game Over!!'
		movesLeft.style.display = 'none';


		if(playerScore > computerScore){
			finalResult.style.fontSize = '2rem';
			finalResult.innerText = 'You Won The Game'
			finalResult.style.color = 'rgb(1, 67, 1)';
			result.style.display = 'none';
		}
		else if(playerScore < computerScore){
			finalResult.style.fontSize = '2rem';
			finalResult.innerText = 'You Lost The Game';
			finalResult.style.color = 'rgb(67, 1, 1)';
			result.style.display = 'none';
		}
		else{
			finalResult.style.fontSize = '2rem';
			finalResult.innerText = "It's a Tie";
			finalResult.style.color = 'black'
			result.style.display = 'none';
		}
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}


	// Calling playGame function inside game
	playGame();
	
}

// Calling the game function
game();




