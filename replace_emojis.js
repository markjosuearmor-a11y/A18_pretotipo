const fs = require('fs');

const filePath = "index.html";
let content = fs.readFileSync(filePath, "utf-8");

// Add Bootstrap Icons
if (!content.includes("bootstrap-icons")) {
    content = content.replace(
        '<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;700;800&display=swap" rel="stylesheet">',
        '<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;700;800&display=swap" rel="stylesheet">\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">'
    );
}

const replacements = {
    '👉': '<i class="bi bi-hand-index-thumb"></i>',
    '✔️': '<i class="bi bi-check-circle-fill"></i>',
    '⏰': '<i class="bi bi-alarm"></i>',
    '❌': '<i class="bi bi-x-circle"></i>',
    '🏠': '<i class="bi bi-house-door-fill"></i>',
    '📅': '<i class="bi bi-calendar-event"></i>',
    '💬': '<i class="bi bi-chat-dots-fill"></i>',
    '⚙️': '<i class="bi bi-gear-fill"></i>',
    '🚨': '<i class="bi bi-exclamation-triangle-fill"></i>',
    '⬅️': '<i class="bi bi-arrow-left"></i>',
    '🎵': '<i class="bi bi-music-note-beamed"></i>',
    '📞': '<i class="bi bi-telephone-fill"></i>',
    '👤': '<i class="bi bi-person-fill"></i>',
    '🚪': '<i class="bi bi-box-arrow-right"></i>',
    '⚕️': '<i class="bi bi-heart-pulse-fill"></i>',
    '🔽': '<i class="bi bi-caret-down-fill"></i>',
    '🔼': '<i class="bi bi-caret-up-fill"></i>',
    '◀': '<i class="bi bi-chevron-left"></i>',
    '▶': '<i class="bi bi-chevron-right"></i>',
    '✖': '<i class="bi bi-x-lg"></i>',
    '📹': '<i class="bi bi-camera-video-fill"></i>',
    '📎': '<i class="bi bi-paperclip"></i>',
    '📷': '<i class="bi bi-camera-fill"></i>',
    '⬇️': '<i class="bi bi-chevron-down"></i>',
    '💊': '<i class="bi bi-capsule"></i>',
    '👥': '<i class="bi bi-people-fill"></i>',
    '📋': '<i class="bi bi-clipboard2-data"></i>',
    '⏳': '<i class="bi bi-hourglass-split"></i>'
};

// Special handling for JS alerts and confirms
content = content.replace('alert("⏰ Te recordaremos nuevamente en unos minutos.");', 'alert("Te recordaremos nuevamente en unos minutos.");');
content = content.replace('confirm("🚨 ¿Deseas llamar al " + sosNumber + " ahora mismo?")', 'confirm("S.O.S: ¿Deseas llamar al " + sosNumber + " ahora mismo?")');

// Special handling for CSS info icon
content = content.replace("content: 'ℹ️';", "content: '\\\\F431';\n            font-family: 'bootstrap-icons';");

// Replace innerText with innerHTML where icons will be inserted
content = content.replace(/statusMetformina\.innerText = dayNum/g, "statusMetformina.innerHTML = dayNum");
content = content.replace(/statusMetformina\.innerText = '⏳'/g, "statusMetformina.innerHTML = '⏳'");

for (const [emoji, icon] of Object.entries(replacements)) {
    content = content.split(emoji).join(icon);
}

fs.writeFileSync(filePath, content, "utf-8");
console.log("Replacement complete.");
