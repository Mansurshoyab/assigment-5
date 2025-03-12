document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("thm-btn").addEventListener("click", function () {
        const bodyBg = document.getElementById("body-color-btn");
        const rndColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        bodyBg.style.backgroundColor = rndColor;
    });

    const totalTaskElement = document.getElementById("total-task");
    const buttons = document.querySelectorAll(".completed");

    function updateTaskCount() {
        totalTaskElement.textContent = document.querySelectorAll(".completed:not([disabled])").length;
    }

    const historyLog = document.getElementById("history-log");
    const clearHistoryBtn = document.getElementById("clear-history");

    function getCurrentTime() {
         return new Date().toLocaleTimeString();
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            this.disabled = true;
            this.classList.add("opacity-30", "cursor-not-allowed");

            const taskName = this.closest(".bg-gray-100").querySelector("h2").textContent;

            alert(`Task Completed: ${taskName}`);

            const logEntry = document.createElement("p");
            logEntry.textContent = `You have completed the task "${taskName}" at ${getCurrentTime()}`;
            historyLog.prepend(logEntry);

            updateTaskCount();

            let pointElement = document.getElementById('point');
             let currentPoints = parseInt(pointElement.textContent); 
            pointElement.textContent = currentPoints + 1; 
        });
    });

    clearHistoryBtn.addEventListener("click", function () {
        historyLog.innerHTML = "";
    });

    updateTaskCount();
});

document.getElementById('blog-page').addEventListener('click', function() {
    window.location.href = 'blog.html';
});

document.getElementById('back-btn').addEventListener('click', function () {
     alert("Going back to index page!");
     window.location.href = '/index.html';
});
