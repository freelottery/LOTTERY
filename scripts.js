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
function purchaseTicket(price) {
    const ticketNumber = generateLotteryNumber();
    setTimeout(() => {
        alert(`✅ Ticket purchased successfully!\nYour ticket number is: ${ticketNumber}`);
        generateTicketPDF(ticketNumber);
    }, 2000); // Delay to match loading effect
}

// Function to Generate & Download a **Professionally Styled** PDF
function generateTicketPDF(ticketNumber) {
    if (!window.jspdf) {
        alert("Error: jsPDF is not loaded.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Background Design
    doc.setFillColor(240, 240, 240);
    doc.rect(0, 0, 210, 297, "F");

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(0, 102, 204); // Blue Color
    doc.text("🎟 Premium Lottery Ticket 🎟", 20, 30);

    // Ticket Number Section
    doc.setFont("courier", "bold");
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0); // Black Color
    doc.text(`🔢 Ticket Number: ${ticketNumber}`, 20, 50);

    // Price Section
    doc.setFontSize(16);
    doc.setTextColor(255, 0, 0); // Red Color
    doc.text("💰 Price: 10 Rs", 20, 70);

    // Thank You Message
    doc.setFontSize(14);
    doc.setTextColor(34, 139, 34); // Green Color
    doc.text("🎉 Thank you for participating! Best of luck! 🎉", 20, 90);

    // Footer
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100); // Gray
    doc.text("🔒 Secure & Verified | Lottery Organization 2025", 20, 110);

    // Save PDF
    doc.save(`Lottery_Ticket_${ticketNumber}.pdf`);
    alert("📥 Your ticket PDF has been downloaded!");
    downloadEbook();
}

// Function to Download the eBook
function downloadEbook() {
    let ebookUrl = "ebook.pdf"; // Ensure the correct file path
    let link = document.createElement("a");
    link.href = ebookUrl;
    link.download = "Winning_Strategies_Ebook.pdf";
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

