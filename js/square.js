class Square {
	constructor(x, y, length, padding, padding_square, color_none, color_first, color_second, area_width, area_height) {
		this.x = x;
		this.y = y;
		this.length = length;
		this.padding_square = padding_square;
		this.player = 0;//parseInt(Math.random() * 10) % 3;
		this.color_none = color_none;
		this.color_first = color_first;
		this.color_second = color_second;
		this.area_width = area_width;
		this.area_height = area_height;
		
		let min_length = Math.min(area_width, area_height);
		this.posX = (area_width - min_length) / 2 + padding + (length * x) + length / 2;
		this.posY = (area_height - min_length) / 2 + padding + (length * y) + length / 2;
	}
	
	draw() {
		if (this.player == 0) ctx.fillStyle = this.color_none;
		else if (this.player == 1) ctx.fillStyle = this.color_first;
		else if (this.player == 2) ctx.fillStyle = this.color_second;
		
		ctx.fillRect(this.posX - this.length / 2 + this.padding_square, this.posY - this.length / 2 + this.padding_square, this.length - this.padding_square * 2,  this.length - this.padding_square * 2);
	}
	
	get_coordinate() {
		return [this.posX, this.posY];
	}
	
	set_active(player) {
		this.player = player;
	}
	
	is_active() {
		return this.player != 0;
	}
}