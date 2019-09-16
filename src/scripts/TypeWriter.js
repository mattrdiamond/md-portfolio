import { txtElement, words, wait, cursor } from "./domElements";

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
    this.isAnimating = false;
    this.timeoutVal;
  }

  type() {
    if (!this.isAnimating) {
      this.stopAnimation();
      this.resetAnimation();
    } else {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];

      if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Show the cursor
        cursor.style.visibility = "visible";
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

      // Initial Type Speed
      let typeSpeed = 300;

      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      // If word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }

      this.timeoutVal = setTimeout(() => this.type(), typeSpeed);
    }
  }

  resetAnimation() {
    this.wordIndex = 0;
    this.txt = "";
    this.isDeleting = false;
  }

  stopAnimation() {
    this.isAnimating = false;
    cursor.style.visibility = "hidden";
    clearTimeout(this.timeoutVal);
  }
}

export const typewriter = new TypeWriter(txtElement, words, wait);
