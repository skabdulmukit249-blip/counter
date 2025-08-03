let count = 0;

function updateCount() {
    document.getElementById("count").innerText = `Count: ${count}`;
}

function increment() {
    count++;
    updateCount();
}

function decrement() {
    count--;
    updateCount();
}

function reset() {
    count = 0;
    updateCount();
}