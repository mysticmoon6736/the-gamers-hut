document.addEventListener("DOMContentLoaded", function () {
    console.log("The Gamer's Hut is loaded.");

    // Load the navigation bar dynamically
    fetch("/components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        })
        .catch(error => console.error("Error loading navigation:", error));
});
