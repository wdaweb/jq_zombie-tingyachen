
// 血量
let healthPoints = 100

function updateHealthPoints(points) {
  healthPoints = points
  let healthBar = document.querySelector("#healthBar")

  healthBar.style.width = points + "%"

  if (healthPoints < 0) {
    alert("Game Over😵")
    location.reload(true)
  }
}

function iShoot(enemy) {
  enemy.classList.add("dead")
  if (!livingEnemy().length) {
    alert("You Win🤠")
    location.reload(true)
  }
}

// 玩家槍聲
function myShootingEffects() {
  let myGunshot = new Audio('./audio/Gunshot.mp3')
	myGunshot.play()
	setTimeout(function() {
		gameFrame.classList.remove("playerShooting")
	}, 150)
}

function enemyShowing(enemy) {
  enemy.classList.add("showing")
  setTimeout(() => {
    enemyShoot(enemy)
  }, 600)
  setTimeout(() => {
    enemy.classList.remove("showing")
  }, 1000)
}

function enemyShoot(enemy) {
  if (!enemy.classList.contains("dead")) {
    // 敵人槍聲
    let enemyGunshot = new Audio('./audio/laser_sound.mp3')
    enemyGunshot.play();
    enemy.classList.add("shooting")
    // 扣血量
    updateHealthPoints(healthPoints - 20)
    setTimeout(() => {
    enemy.classList.remove("shooting")
    }, 200)
  }
}

function livingEnemy() {
  return document.querySelectorAll(".enemy:not(.dead)")
}

function randomShoot() {

  let randomEnemyNo = Math.random() * livingEnemy().length
  randomEnemyNo = Math.floor(randomEnemyNo)
  let enemy = livingEnemy()[randomEnemyNo]

  let randomDelay = Math.random() * 2000 + 1000

  setTimeout(() => {
    enemyShowing(enemy)
    randomShoot()
  }, randomDelay)
}


