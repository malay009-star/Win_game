var btn = document.getElementById('btn');
var box1 = document.getElementById('box1')
var box2 = document.getElementById('box2')
var one = document.getElementById('one')
var box2 = document.getElementById('two')

var heading = document.getElementById('heading');
var first, second;

btn.addEventListener('click', function() {
    first = Math.floor(Math.random() * 100);
    one.innerHTML = first;
    second = Math.floor(Math.random() * 100);
    two.innerHTML = second;

    if (first > second) {
        heading.innerHTML = "player" + " " + 1 + " " + "is Won!"
    } else {
        heading.innerHTML = "player" + " " + 2 + " " + "is Won!"
    }
})