function toggleExercises(day) {
    const exercises = document.getElementById(day);
    exercises.classList.toggle("hidden");
}

function saveProgress() {
    const date = document.getElementById("log-date").value;
    const weight = document.getElementById("weight").value;
    const log = document.getElementById("progress-log");

    if (date && weight) {
        log.innerHTML += `<p>${date}: ${weight}kg</p>`;
    }
}