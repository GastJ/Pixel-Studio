var pixel_studio = {

	init: function(){

		//couleurs de la palette
		
		let colors = [
			new Color('green',[56,187,136]),
			new Color('purple',[135,35,111]),
			new Color('sand',[220,194,140]),
			new Color('lilas',[151,146,197])
		];
		/*console.log(colors);*/
		this.palette.init_colors(colors);

		console.log("Pixel studio is ready");
	}
};
