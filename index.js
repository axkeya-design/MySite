let episodesURL = [
    "a439e766114ac82675add9f42b147412",
    "a8ac3c5215c97af1f5b4ffccc1a489f3",
    "22cde79779103436ee9adf11db4f9aae",
    "f9b76253419645efe68dec7e0dc38855",
    "552cb327991dc83dc3bd34ea157760f8",
    "ed382822f9874c7e1ab7b1d0d2e6f1e1",
    "da7f3fe1bc5b95a1e399d068ce97dfaa",
    "d13e1059bc01acca0fcf638e42810b2f",
    "33f03537dd0de5277925d721af6acfe6",
    "9e5df95c252bf0c264690f45446bfacf",
    "617bdc39e5cd7dd20a8274014a9b966c",
    "3bbc385f57d2c3d98f19af0a901d2a18",
    "1a4cb963ff0f4f8472fa6fbc147fa2c3",
    "2ea8ee1e540cba7026698f0f0dc44155",
    "0fbeafc89adc025f959a32c3ee65831e",
    "f213dc34bba7a33805da2cc8d8fbda55",
    "9983517318b359aba6bd3d6c90504dbb",
    "696f6365499942055a875fdd12ea674a",
    "c7630b0dd2da0131532aa1aab79eafd1",
    "99fea74349162f93b94a9e26e9d65aa1",
    "77fe06d551e5c3b14b1ddcf7bccac75e",
    "a38086b8716a3e9ff6242035ebc82488",
    "0e261cfc0486d6ce7324918dcb8724b2",
    "4abf31339951358a72390d46b54e430e",
];

function updatePlayer(selection) {
    let void_id = episodesURL[selection];
    let player = document.getElementById("player");
    
    player.innerHTML = '';
    
    let iframe = document.createElement('iframe');
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.src = `https://rutube.ru/play/embed/${void_id}`;
    iframe.style.border = "none";
    iframe.allow = "clipboard-write; autoplay";
    iframe.allowFullscreen = true;
    
    player.appendChild(iframe);

    document.querySelectorAll('.episode-list li').forEach(li => {
        li.classList.remove('active');
    });

    document.getElementById(`item${selection + 1}`).classList.add('active');
}

for (let i = 1; i <= 24; i++) {
    document.getElementById(`item${i}`).addEventListener("click", function() {
        updatePlayer(i - 1);
    });
}

window.onload = () => updatePlayer(0);