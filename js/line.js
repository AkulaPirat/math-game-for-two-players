class Line {
	constructor(x, y, length, padding, is_vertical, color_none, color_first, color_second, area_width, area_height) {
		this.x = x;
		this.y = y;
		this.is_vertical = is_vertical;
		this.player = 0;//parseInt(Math.random() * 10) % 3;
		this.color_none = color_none;
		this.color_first = color_first;
		this.color_second = color_second;
		this.area_width = area_width;
		this.area_height = area_height;
		
		let min_length = Math.min(area_width, area_height);
		this.posX1 = this.posX2 = (area_width - min_length) / 2 + padding + (length * x);
		this.posY1 = this.posY2 = (area_height - min_length) / 2 + padding + (length * y);
		if (is_vertical) this.posY2 += length;
		else this.posX2 += length;
	}
	
	draw() {
		if (this.player == 0) ctx.strokeStyle = this.color_none;
		else if (this.player == 1) ctx.strokeStyle = this.color_first;
		else if (this.player == 2) ctx.strokeStyle = this.color_second;
		
		
		ctx.beginPath();
		ctx.moveTo(this.posX1, this.posY1);
		ctx.lineTo(this.posX2, this.posY2);
		ctx.stroke();
		ctx.closePath();
	}
	
	get_coordinate() {
		return [(this.posX1 + this.posX2) / 2, (this.posY1 + this.posY2) / 2];
	}
	
	set_active(player) {
		this.player = player;
	}
	
	is_active() {
		return this.player != 0;
	}
}