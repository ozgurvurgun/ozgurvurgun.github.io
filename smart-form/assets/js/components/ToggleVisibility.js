class ToggleVisibility {
    constructor(triggers = [], targetSelector, keepOpenSelectors = [], openDisplayType = "block", closeSelectors = []) {
        this.triggers = triggers.map(trigger => ({ 
            element: document.querySelector(trigger.selector),
            mode: trigger.mode // toggle or open
        }));
        this.target = document.querySelector(targetSelector);
        this.keepOpenElements = keepOpenSelectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));
        this.closeButtons = closeSelectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));
        this.isOpen = false;
        this.openDisplayType = openDisplayType;

        this.init();
    }

    init() {
        if (!this.target) {
            console.error("Target element not found!");
            return;
        }
        
        this.triggers.forEach(({ element, mode }) => {
            if (element) {
                element.addEventListener("click", (event) => this.handleTriggerClick(event, mode));
            }
        });
        document.addEventListener("click", (event) => this.handleClickOutside(event));
        this.closeButtons.forEach(button => button.addEventListener("click", (event) => {
            event.stopPropagation();
            this.close();
        }));
    }

    handleTriggerClick(event, mode) {
        event.stopPropagation();
        if (mode === "toggle") {
            this.isOpen = !this.isOpen;
        } else if (mode === "open") {
            this.isOpen = true;
        }
        this.updateDisplay();
    }

    close() {
        this.isOpen = false;
        this.updateDisplay();
    }

    updateDisplay() {
        this.target.style.display = this.isOpen ? this.openDisplayType : "none";
    }

    handleClickOutside(event) {
        if (this.isOpen) {
            const clickedInsideTarget = this.target.contains(event.target);
            const clickedInsideTrigger = this.triggers.some(({ element }) => element && element.contains(event.target));
            const clickedInsideKeepOpen = this.keepOpenElements.some(el => el.contains(event.target));

            if (!clickedInsideTarget && !clickedInsideTrigger && !clickedInsideKeepOpen) {
                this.close();
            }
        }
    }
}

// example usage
// new ToggleVisibility([
//     { selector: "#head-user-pointer", mode: "toggle" },
//     { selector: "#openOnlyButton", mode: "open" }
// ], ".account-control-panel", [".keepOpen"], "flex", ["#closeBtn"]);
