const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

content = content.replace('--text-muted: #5D6D7E;', '--text-muted: #5D6D7E;\n            --success-light-bg: #E8F5E9;\n            --border-color: #E0E0E0;');

content = content.replace('        }', `        }\n\n        :root.dark-mode {\n            --app-blue: #42A5F5;\n            --app-blue-dark: #64B5F6;\n            --success-green: #66BB6A;\n            --success-green-dark: #81C784;\n            --action-secondary-bg: #263238;\n            --action-secondary-text: #81D4FA;\n            --danger-red: #EF5350;\n            --bg-color: #121212;\n            --card-bg: #1E1E1E;\n            --text-main: #E0E0E0;\n            --text-muted: #90A4AE;\n            --success-light-bg: #1B5E20;\n            --border-color: #333333;\n        }`);

const cardBgClasses = ['bottom-nav', 'calendar-header', 'calendar-grid', 'history-details', 'modal-content'];
for (const cls of cardBgClasses) {
    const regex = new RegExp(`\\.${cls} \\{[^}]*background-color:\\s*white;`, 'g');
    content = content.replace(regex, (match) => match.replace('white', 'var(--card-bg)'));
}

content = content.replace('background-color: #E8F5E9;', 'background-color: var(--success-light-bg);');
content = content.replace('border-top: 1px solid #E0E0E0;', 'border-top: 1px solid var(--border-color);');
content = content.replace('background-color: rgba(255, 255, 255, 0.95);', 'background-color: var(--card-bg);');
content = content.replace('background-color: rgba(227, 242, 253, 0.8);', 'background-color: var(--action-secondary-bg);');
content = content.replace('box-shadow: 0 0 0 2px white,', 'box-shadow: 0 0 0 2px var(--card-bg),');

content = content.replace('<input type="checkbox">', '<input type="checkbox" id="darkModeToggle" onchange="toggleDarkMode()">');

content = content.replace('function toggleNotifInfo(btn) {', `function toggleDarkMode() {\n            document.documentElement.classList.toggle('dark-mode');\n        }\n\n        function toggleNotifInfo(btn) {`);

fs.writeFileSync('index.html', content);
