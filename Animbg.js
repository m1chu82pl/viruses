class AnimBg {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
  }

  listenCursorMove(event) {
    const {
      clientX,
      clientY
    } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const posX = clientX - centerX;
    const posY = clientY - centerY;

    this.elements.forEach(el => this.moveElement(el, posX, posY))
  }

  moveElement(el, posX, posY) {
    const ratioY = -el.getAttribute('ratioY');
    const ratioX = -el.getAttribute('ratioX');

    el.style.transform = `translate(${posX * ratioX}px, ${posY * ratioY}px)`;
  }
}