class GameButton {
    constructor(element, inner, i, images) {
        this.element = element; // DOM-элемент кнопки
		this.inner = inner;
		this.i = i;
		this.images = images;
		this.player = 0;
    }
	addEventListener(event, f) {
		this.element.addEventListener(event, () => f(this.inner, this.i));
	}
	getPlayer() {
		return this.player;
	}
	setPlayer(player) {
		this.player = player;
		if (this.player == 1) this.element.style.backgroundImage = `url("${this.images.image_cross}")`;
		else if (this.player == 2) this.element.style.backgroundImage = `url("${this.images.image_circle}")`;
		this.setDisabled(true);
	}
	isDisabled() {
		return this.element.disabled;
	}
	setDisabled(disabled) {
		this.element.disabled = disabled;
	}
}