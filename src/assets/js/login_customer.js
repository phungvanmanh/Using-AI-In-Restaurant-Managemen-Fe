export function verifyEmail() {
    document.getElementById('step1').classList.add('hide');
    document.getElementById('step2').classList.remove('hide');
    document.getElementById('otp1').focus();
}

export function moveToNext(index) {
    var currentInput = document.getElementById('otp' + index);
    if (currentInput.value.length >= currentInput.maxLength && index < 4) {
        document.getElementById('otp' + (index + 1)).focus();
    }
}

export function handleKeyDown(event) {
    const item = event.target;
    if (event.key === 'Backspace') {
        const index = parseInt(item.id.slice(-1));
        if (index > 1 && item.value === '') {
            event.preventDefault();
            document.getElementById('otp' + (index - 1)).focus();
        }
    } else if (event.key >= '0' && event.key <= '9') {
        const index = parseInt(item.id.slice(-1));
        if (item.value.length >= item.maxLength) {
            event.preventDefault();
            moveToNext(index);
        }
    } else {
        event.preventDefault();
    }
}

export function setupEventListeners() {
    document.querySelectorAll('.otp').forEach(item => {
        item.addEventListener('keydown', handleKeyDown);
    });
}
