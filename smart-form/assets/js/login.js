class Login {
    constructor() {
        this.usernameInput = document.getElementById("username");
        this.passwordInput = document.getElementById("password");
        this.loginButton = document.querySelector(".login-button");
        this.errorMessage = document.querySelector("p");
        this.init();
    }

    init() {
        this.loginButton.addEventListener("click", () => this.handleLogin());
    }

    async handleLogin() {
        const username = this.usernameInput.value.trim();
        const password = this.passwordInput.value.trim();

        if (!username || !password) {
            this.showError("Username and password required.");
            return;
        }

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
                credentials: "include"
            });

            const result = await response.json();

            if (response.ok && result.message === "success") {
                window.location.href = "/dashboard";
            } else {
                this.showError("Username or password is incorrect.");
            }
        } catch (error) {
            this.showError("API error");
        }
    }

    showError(message) {
        this.errorMessage.textContent = message;
        this.errorMessage.style.visibility = "visible";
    }
}

document.addEventListener("DOMContentLoaded", () => new Login());
