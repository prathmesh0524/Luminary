// Create a custom cursor element
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
cursor.innerHTML = '<img src="robot-cursor.svg" alt="Robot Cursor">';
document.body.appendChild(cursor);

// Track mouse movement
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Hover effect for buttons and links
document.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(1.2)";
    });
    element.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
    });
});
