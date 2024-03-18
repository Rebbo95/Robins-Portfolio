// joystickLogic.js

// Define functions related to joystick logic
function startJoystickMove(event) {
    isJoystickMoving = true;
    document.addEventListener("mousemove", moveJoystick);
}

function stopJoystickMove() {
    isJoystickMoving = false;
    document.removeEventListener("mousemove", moveJoystick);
}

function moveJoystick(event) {
    if (isJoystickMoving) {
        const joyStickRect = joystick.getBoundingClientRect();
        const centerX = joyStickRect.left + joyStickRect.width / 2;
        const centerY = joyStickRect.top + joyStickRect.height / 2;

        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;

        const quadrantX = deltaX > 0 ? 1 : -1;
        const quadrantY = deltaY > 0 ? 1 : -1;

        const sensitivity = 10;

        if (Math.abs(deltaX) > Math.abs(deltaY) * 2) {
            if (quadrantX === 1) {
                nextContent(); // Scroll right
            } else {
                previousContent(); // Scroll left
            }
        } else if (Math.abs(deltaY) > Math.abs(deltaX) * 2) {
            if (quadrantY === 1) {
                loadIntro(); // Scroll down
            } else {
                loadRogueLite(); // Scroll up
            }
        }
    }
}