document.addEventListener("DOMContentLoaded", function () {
    let timer = document.getElementById("timer");
    let count = parseInt(timer.textContent, 10);
    let defuser = document.getElementById("defuser");

    let uniqueId = setInterval(function () {
        count -= 1;
        timer.textContent = count;
        if (count === 0) {
            timer.textContent = "BOOM!!";
            clearInterval(uniqueId);
        }
    }, 1000);

    defuser.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let userInput = defuser.value.trim().toLowerCase();
            if (userInput === "defuse" && count > 0) {
                timer.textContent = "You did it";
                clearInterval(uniqueId);
            }
        }
    });
});
