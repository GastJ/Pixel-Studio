var pixel_studio = {

	init: function(){

		// Couleurs de la palette
		
		let colors = [
			new Color('green',[56,187,136]),
			new Color('purple',[135,35,111]),
			new Color('sand',[220,194,140]),
			new Color('lilas',[151,146,197]),
			new Color('bleu marine',[3,34,76]),
			new Color('fuschia',[253, 63, 146])
		];
		this.palette_color.init(colors);

		// Outils de dessin
		
		let tools =[
			new Tool('crayon',"fa-pencil"),
			new Tool('gomme',"fa-eraser")
		];
		this.palette_tool.init(tools);
		console.log("Pixel studio is ready");
	}
};
