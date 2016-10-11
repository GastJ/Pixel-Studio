class Eraser extends Tool{

	constructor( canvas ){
		super('eraser', 'fa-eraser');
		this.canvas = canvas;
		this.bg_color = new Color('white', [255,255,255]);
	}

	on_mousedown(mouse_event){
		let position = this.canvas.screen_to_canvas(mouse_event);
		this.canvas.draw(position.x, position.y, this.bg_color);
	}
}