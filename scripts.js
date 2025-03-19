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

// Function to Purchase a Lottery Ticket
function downloadTicket() {
    let ticketNumberElement = document.getElementById("lottery-number");

    if (!ticketNumberElement) {
        alert("Error: Ticket number not found!");
        return;
    }

    let ticketNumber = ticketNumberElement.innerText;

    if (ticketNumber === "Generating...") {
        alert("Please wait, generating your ticket number...");
        return;
    }

    // Load jsPDF library correctly
    if (window.jspdf) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Set document style
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor(0, 0, 255); // Blue title
        doc.text("Premium Lottery Ticket", 20, 30);

        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0); // Black text
        doc.text(`Ticket Number: ${ticketNumber}`, 20, 50);
        doc.text("Price: 10 Rs", 20, 60);
        doc.text("Thank you for participating! Best of luck!", 20, 80);

        // Save PDF with a unique name
        doc.save(`Lottery_Ticket_${ticketNumber}.pdf`);
        alert("Your ticket PDF has been downloaded!");
    } else {
        alert("Error: jsPDF library not found!");
    }
}
// Function to Download the eBook
function downloadEbook() {
    let ebookUrl = "White Pink Modern Future AI Data Science Training Course Promotion Instagram Post (3).pdf"; // Ensure the correct file path
    let link = document.createElement("a");
    link.href = ebookUrl;
    link.download = "White Pink Modern Future AI Data Science Training Course Promotion Instagram Post (3).pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("📖 Ebook has been downloaded!");
}

// Countdown Timer
let countdownDays = 10;
function updateCountdown() {
    let countdownElement = document.getElementById("countdown");
    if (countdownElement) {
        countdownElement.innerHTML = `<span style="color: orange; font-weight: bold;">${countdownDays} days left</span>`;
    }

    if (countdownDays > 0) {
        countdownDays--;
        setTimeout(updateCountdown, 86400000); // Update every 24 hours
    }
}


