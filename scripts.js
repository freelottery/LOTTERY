document.addEventListener("DOMContentLoaded", function () {
    generateLotteryNumber();
    updateCountdown();
});

// Function to Generate a Lottery Number with a Loading Effect
function generateLotteryNumber() {
    let lotteryNumberElement = document.getElementById("lottery-number");
    if (!lotteryNumberElement) return;

    lotteryNumberElement.innerHTML = `<span style="color: red;">Generating...</span>`;

    setTimeout(() => {
        let number = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
        lotteryNumberElement.innerHTML = `<span style="color: green; font-weight: bold;">${number}</span>`;
    }, 2000); // 2 seconds loading effect
}

// Function to Generate and Download Lottery Ticket PDF
function generateLotteryPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape' });

    // Background color rectangle
    doc.setFillColor(255, 0, 0); // Red
    doc.rect(0, 0, 297, 210, 'F');

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(255, 255, 0); // Yellow
    doc.text('PREMIUM LOTTERY DRAW', 20, 30);

    doc.setFontSize(20);
    doc.text('GRAND PRIZE EVENT 2025', 20, 45);

    // Prize Details
    doc.setFontSize(16);
    doc.setTextColor(255, 255, 255);
    doc.text('GUARANTEED PRIZES', 20, 65);

    doc.setFontSize(24);
    doc.setTextColor(255, 255, 0);
    doc.text('1st Prize: ₹10,000', 20, 85);
    doc.text('2nd Prize: ₹5,000', 20, 105);
    doc.text('3rd Prize: ₹2,000', 20, 125);
    doc.text('4th-10th Prize: ₹1,000', 20, 145);
    doc.text('11th-100th Prize: ₹100', 20, 165);

    // Ticket Number
    let ticketNumber = document.getElementById("lottery-number").innerText;
    doc.setFontSize(24);
    doc.setTextColor(255, 255, 0);
    doc.text(`Your Ticket Number: ${ticketNumber}`, 20, 185);

    // Draw Date
    doc.setFontSize(18);
    doc.setTextColor(255, 255, 255);
    doc.text('Draw on: 18-02-2025 6:00 PM ONWARDS', 20, 200);

    // Save the PDF
    doc.save(`Lottery_Ticket_${ticketNumber}.pdf`);
}

// Countdown Timer
let countdownDays = 10;

function updateCountdown() {
    let countdownElement = document.getElementById("winner-countdown");
    let buttonElement = document.getElementById("winner-button");

    if (countdownElement) {
        countdownElement.innerText = countdownDays + " Days Remaining";
    }

    if (countdownDays <= 0) {
        if (countdownElement) countdownElement.innerText = "🎉 Winners Announced!";
        if (buttonElement) {
            buttonElement.disabled = false;
            buttonElement.classList.add("enabled");
            buttonElement.innerText = "✅ Check Winners";
            buttonElement.onclick = function() {
                window.location.href = "winners.html"; // Redirect to winners list
            };
        }
    } else {
        setTimeout(() => {
            countdownDays--;
            updateCountdown();
        }, 86400000); // Update every 24 hours
    }
}

updateCountdown();

