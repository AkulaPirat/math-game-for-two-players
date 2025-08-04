class RotateButton {
    constructor(element, x, y, image_url, time_rotate) {
        this.element = element; // DOM-элемент кнопки
		this.x = x;
		this.y = y;
		this.image_url = image_url;
		this.time_rotate = time_rotate;
		this.active = false;
    }
	addEventListener(event, f) {
		this.element.addEventListener(event, () => f(this.x, this.y));
	}
	setStartRotate(rotate_angle) {
		this.rotate_angle = rotate_angle;
		this.element.style.transform = `rotate(${this.rotate_angle * 90}deg)`;
		this.element.style.backgroundImage = `url(${this.image_url})`;
		setTimeout(() => {this.element.style.transition = `transform ${this.time_rotate}s ease`;}, 100);
		this.element.disabled = true;
		this.active = true;
		
		return this.getDirection();
	}
	rotate() {
		this.rotate_angle++;
		this.element.style.transform = `rotate(${this.rotate_angle * 90}deg)`;
		
		return this.getDirection();
	}
	getDirection() {
		switch (this.getRotateAngle()) {
			case 0:
				return [0, -1];
				break;
			case 1:
				return [1, 0];
				break;
			case 2:
				return [0, 1];
				break;
			case 3:
				return [-1, 0];
				break;
		}
	}
	getRotateAngle() {
		return this.rotate_angle % 4;
	}
	isActive() {
		return this.active;
	}
	setColor(color) {
		this.element.style.backgroundColor = color;
	}
}