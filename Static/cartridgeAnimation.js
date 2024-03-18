function animateCartridge(cartridgeId, cartridgeHolderId) {
    const cartridge = document.getElementById(cartridgeId);
    const cartridgeHolder = document.getElementById(cartridgeHolderId);

    // Set a moderate z-index value (e.g., 10) for the cartridge
    cartridge.style.zIndex = "0";

    cartridge.addEventListener("click", function() {
        const holderRect = cartridgeHolder.getBoundingClientRect();
        const cartridgeRect = cartridge.getBoundingClientRect();

        // Calculate the target position above the screen
         const targetX = ((holderRect.width - cartridgeRect.width) / 2) / holderRect.width * 1250;
        const targetY = ((holderRect.height - cartridgeRect.height) / 2) / holderRect.height * 90;

        // Animate the cartridge above the screen first
        cartridge.style.transition = "transform 0.3s ease-in-out";
        cartridge.style.transform = `translate(${targetX}px, ${targetY}px)`; // Initial animation

        // After a short delay, animate to the cartridge holder
        setTimeout(() => {
            cartridge.style.zIndex = "-2";
            const targetY = holderRect.top + (holderRect.height / 2) - (cartridgeRect.height / 2);
            cartridge.style.transition = "transform 0.3s ease-in-out";
            cartridge.style.transform = `translate(${targetX}px, ${targetY}px)`; // Final animation position
        }, 300); // Delay before moving to the holder (adjust as needed)
    });
}