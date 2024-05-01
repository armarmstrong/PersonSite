const iconsContainer = document.getElementById("icons-container");
const iconsImages = document.querySelectorAll("#icons-container > img");


var iconsInfo = [
    {id: "ins", link: "https://www.instagram.com/sexy.robot/"},
    {id: "ytb", link: "https://www.youtube.com/channel/UCe3s34lNmPzQCfeRLA9gHJQ"},
    {id: "med", link: "https://www.medium.com"},
    {id: "x", link: "https://twitter.com/"},
    {id: "bili", link: "https://www.bilibili.com"},
    {id: "git", link: "https://github.com/armarmstrong?tab=repositories"},
    {id: "email", link: "cwu14932@gmail.com"}
]

// Add click event listeners to all img elements
iconsImages.forEach(img => {
    img.addEventListener("click", iconsClick);
});
  
function iconsClick(event) {
    const targetImg = event.target;
    const targetId = targetImg.id;

    // Find the corresponding link in iconsInfo
    const iconInfo = iconsInfo.find(info => info.id === targetId);

    if (targetId === "email") {
        // Display the modal
        document.getElementById("emailModal").style.display = "block";

        // Set the email address
        document.getElementById("emailText").textContent = iconInfo.link;
        document.getElementById("copyButton").textContent = "Copy";
        document.getElementById("emailToButton").textContent = "Mail to";
        document.getElementById("coolButton").textContent = "Cool";

        // Implement "Copy" button functionality
        document.getElementById("copyButton").addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(iconInfo.link);
                copyButton.textContent = "Copied!";
            } catch (error) {
                console.error("Error copying text:", error);
            }
        });

        document.getElementById("coolButton").addEventListener("click", () => {
            document.getElementById("emailModal").style.display = "none";
        });

        // Implement "Email to" button functionality
        document.getElementById("emailToButton").addEventListener("click", () => {
            window.location.href = "mailto:" + iconInfo.link;
        });
    } else if (iconInfo) {
        // Open the link in a new tab
        window.open(iconInfo.link, "_blank");
    } else {
        console.error("No matching link found for ID:", targetId);
    }

}

iconsContainer.addEventListener("mouseover", () => {
    iconsImages.forEach(img => {
        img.addEventListener("mouseover", () => {
            console.log("Mouseover event triggered!");
            img.style.opacity = 1; // Set opacity to 1 on hover
            // img.style.transform = "scale(1.2)";

            // Reset opacity for other images
            iconsImages.forEach(otherImg => {
                if (otherImg !== img) {
                    otherImg.style.opacity = 0.5;
                }
            });
        });
    });
});

iconsContainer.addEventListener("mouseout", () => {
    iconsImages.forEach(img => {
        img.style.opacity = 1;
    });
});



