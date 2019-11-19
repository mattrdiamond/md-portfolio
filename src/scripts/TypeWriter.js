export default class TypeWriter {
  constructor(txtElement, words, wait = 3000, speed = 250) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.speed = speed;
    this.cursor = txtElement.nextElementSibling;
    this.isDeleting = false;
    this.isAnimating = false;
    this.timeoutVal;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];
    this.isAnimating = true;

    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Show the cursor
      this.cursor.style.visibility = "visible";
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = this.speed;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If there is only 1 word, return when word has finished typing
    if (this.words.length === 1 && this.txt === fullTxt) {
      this.isAnimating = false;
      clearTimeout(this.timeoutVal);
      return;
    } else if (!this.isDeleting && this.txt === fullTxt) {
      // Pause before deleting
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = this.speed * 2;
    }

    this.timeoutVal = setTimeout(() => this.type(), typeSpeed);
  }

  resetAnimation() {
    this.wordIndex = 0;
    this.txt = this.words[0];
    this.isDeleting = false;
  }

  stopAnimation() {
    this.isAnimating = false;
    this.cursor.style.visibility = "hidden";
    clearTimeout(this.timeoutVal);
  }
}
