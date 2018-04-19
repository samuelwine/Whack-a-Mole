var moleList = document.querySelectorAll(".mole");
var myNumber = 0;
var clickedMoles = 0;
var missedMoles = 0;
document.querySelector(".missedMolesScore").textContent = missedMoles;

moleList.forEach(mole => {
    mole.style.display = "none";
    mole.addEventListener("click", function() {
        clickAMole();
})
})

setInterval(function() {
    myNumber = Math.floor(Math.random()*6);
    moleList[myNumber].style.display = "block";
    setTimeout(function() {
        moleList[myNumber].style.display = "none"
        missedMoles++;
},1950);
    document.querySelector(".missedMolesScore").textContent = missedMoles;
    endGameChecker();
},2000)

const clickAMole = () => {
    moleList[myNumber].style.display = "none";
    clickedMoles++;
    missedMoles--;
    document.querySelector(".clickedMolesScore").textContent = clickedMoles;      
}

const endGameChecker = () => {
    if (missedMoles >= 3) {
        document.querySelector(".missedMoles").style.color = "red";
    }
    if (missedMoles>=5) {
        document.querySelector(".whack").textContent = "GAME";
        document.querySelector(".amole").textContent = "OVER";
        document.querySelector(".gameName").style.color = "red";
        moleList.forEach(mole => {
            mole.style.display = "none";
        })
    document.querySelector(".missedMolesScore").textContent = 5;      
    }
}

