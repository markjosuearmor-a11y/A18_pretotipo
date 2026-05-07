$filePath = "index.html"
$content = Get-Content $filePath -Raw -Encoding UTF8

if (-not $content.Contains("bootstrap-icons")) {
    $content = $content.Replace(
        '<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;700;800&display=swap" rel="stylesheet">',
        '<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;700;800&display=swap" rel="stylesheet">`n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">'
    )
}

$content = $content.Replace('👉', '<i class="bi bi-hand-index-thumb"></i>')
$content = $content.Replace('✔️', '<i class="bi bi-check-circle-fill"></i>')
$content = $content.Replace('⏰', '<i class="bi bi-alarm"></i>')
$content = $content.Replace('❌', '<i class="bi bi-x-circle"></i>')
$content = $content.Replace('🏠', '<i class="bi bi-house-door-fill"></i>')
$content = $content.Replace('📅', '<i class="bi bi-calendar-event"></i>')
$content = $content.Replace('💬', '<i class="bi bi-chat-dots-fill"></i>')
$content = $content.Replace('⚙️', '<i class="bi bi-gear-fill"></i>')
$content = $content.Replace('🚨', '<i class="bi bi-exclamation-triangle-fill"></i>')
$content = $content.Replace('⬅️', '<i class="bi bi-arrow-left"></i>')
$content = $content.Replace('🎵', '<i class="bi bi-music-note-beamed"></i>')
$content = $content.Replace('📞', '<i class="bi bi-telephone-fill"></i>')
$content = $content.Replace('👤', '<i class="bi bi-person-fill"></i>')
$content = $content.Replace('🚪', '<i class="bi bi-box-arrow-right"></i>')
$content = $content.Replace('⚕️', '<i class="bi bi-heart-pulse-fill"></i>')
$content = $content.Replace('🔽', '<i class="bi bi-caret-down-fill"></i>')
$content = $content.Replace('🔼', '<i class="bi bi-caret-up-fill"></i>')
$content = $content.Replace('◀', '<i class="bi bi-chevron-left"></i>')
$content = $content.Replace('▶', '<i class="bi bi-chevron-right"></i>')
$content = $content.Replace('✖', '<i class="bi bi-x-lg"></i>')
$content = $content.Replace('📹', '<i class="bi bi-camera-video-fill"></i>')
$content = $content.Replace('📎', '<i class="bi bi-paperclip"></i>')
$content = $content.Replace('📷', '<i class="bi bi-camera-fill"></i>')
$content = $content.Replace('⬇️', '<i class="bi bi-chevron-down"></i>')
$content = $content.Replace('💊', '<i class="bi bi-capsule"></i>')
$content = $content.Replace('👥', '<i class="bi bi-people-fill"></i>')
$content = $content.Replace('📋', '<i class="bi bi-clipboard2-data"></i>')
$content = $content.Replace('⏳', '<i class="bi bi-hourglass-split"></i>')

$content = $content.Replace('alert("⏰ Te recordaremos nuevamente en unos minutos.");', 'alert("Te recordaremos nuevamente en unos minutos.");')
$content = $content.Replace('confirm("🚨 ¿Deseas llamar al " + sosNumber + " ahora mismo?")', 'confirm("S.O.S: ¿Deseas llamar al " + sosNumber + " ahora mismo?")')

$content = $content.Replace("content: 'ℹ️';", "content: '\F431';`n            font-family: 'bootstrap-icons';")

$content = $content.Replace("statusMetformina.innerText = dayNum", "statusMetformina.innerHTML = dayNum")
$content = $content.Replace("statusMetformina.innerText = '⏳'", "statusMetformina.innerHTML = '⏳'")

Set-Content -Path $filePath -Value $content -Encoding UTF8
Write-Output "Replacement complete."
