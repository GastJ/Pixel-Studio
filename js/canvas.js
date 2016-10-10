pixel_studio.canvas = {

	screen: {
		width: 0,
		height: 0
	},

	nb_pixel:{
		width: 0,
		height: 0
	},

	pixel_dimension: 0,

	draw: function(x,y,Color){

		let px = (x-1) * this.pixel_dimension,
			py = (y-1) * this.pixel_dimension;

		this.context.fillStyle = Color.to_string();
		this.context.fillRect(px, py, this.pixel_dimension, this.pixel_dimension);
	},
	/**
	 * Préparation de la zone de dessin
	 * @param  {string} div_id 		   Nom de la div dans laquelle sera placé le canvas
	 * @param  {number} width          Largeur exacte du canvas en pixel écran
	 * @param  {number} height         Hauteur maximume du canvas en pixel écran
	 * @param  {number} nb_pixel_width Nombre de pixel en largeur
	 */
	init: function(div_id, width, height, nb_pixel_width){

		// Calcul du pixel_dimension
		
		this.pixel_dimension = parseInt(width / nb_pixel_width);
		this.nb_pixel.height = parseInt(height / this.pixel_dimension);

		this.screen.width = this.pixel_dimension * nb_pixel_width;
		this.screen.height = this.pixel_dimension * this.nb_pixel.height;
		this.nb_pixel_width = nb_pixel_width;

		// Création du canvas

		let $canvas = $("<canvas></canvas>");
		$canvas.attr({
			'width': this.screen.width,
			'height': this.screen.height,
		});
		this.$c = $canvas;
		this.$c.appendTo('#'+div_id);
		this.context = $canvas[0].getContext('2d');
	}
};