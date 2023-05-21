let points = 1
let timer = 10

$(".item").on("click", function() {
    randomPosition()
    $(".item").toggleClass("round")
    scoreCount()
})
function setTimer () {
    let timerid = setInterval(function() { 
    if(timer >= 0) {
        $(".timer").text(timer--)
    }
    else {
        $(".finish-text").text("You lost"),
        $(".finish").css({"display" : "flex"})
    }
}, 1000)
return timerid
}
let timerid = setTimer()


function randomPosition() {
    let x = Math.floor(Math.random() * ($(document).width() - 200))
    let y = Math.floor(Math.random() * ($(document).height() - 200))
    $(".item").css("top", y)
    $(".item").css("left", x)
}
function scoreCount() {
    if(points > 15) {
        clearInterval(timerid)
        $(".finish-text").text("You win")
        $(".finish").css({"display" : "flex"})
    } else {
        $(".points").text(points++)
    }
}

$(".restart").on("click", function() {
    $(".item").css({"top" : 0, "left" : 0})
    points = 1
    timer = 10
    $(".points").text(points)
    $(".timer").text(timer)
    $(".finish").css({"display" : "none"})
    // setTimer()
})