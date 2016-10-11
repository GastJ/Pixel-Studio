var pixel_studio = {

	init: function(){

		// Couleurs de la palette
		
		let colors = [
			new Color('green',[56,187,136]),
			new Color('purple',[135,35,111]),
			new Color('sand',[220,194,140]),
			new Color('lilas',[151,146,197]),
			new Color('bleu marine',[3,34,76]),
			new Color('fuschia',[253, 63, 146]),
			new Color('black',[0,0,0]),
			new Color('citron',[247,255,60])
		];
		this.palette_color.init(colors);

		// Outils de dessin
		
		let tools =[
			new Pencil(this.canvas),
			new Eraser(this.canvas)
		];
		this.palette_tool.init(tools);

		// canvas
		
		this.canvas.init('zone_dessin', window.innerWidth, window.innerHeight/1.5, 64);
		console.log("Pixel studio is ready");
	}
};
