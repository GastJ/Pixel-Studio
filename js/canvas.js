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

	$canvas: null,
	context: null,

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

		// Gestion des évènements
		
		this.$c.on("mousedown mouseup mousemove", this.on_mouse_event);
	},
	
	/**
	 * Converti les coordonnées écran de la souris en coordonnées canvas
	 * @param  {MouseEvent} mouse_event Objet de l'évènement click
	 * @return {Object}                 Un objet x,y en coordonnées canvas
	 */
	screen_to_canvas(mouse_event){

		let offset = this.$c.offset();
		return {
			x: Math.floor((mouse_event.clientX - offset.left) / this.pixel_dimension)+1,
			y: Math.floor((mouse_event.clientY - offset.top) / this.pixel_dimension)+1
		};
	},

	on_click: function(mouse_event){

		let ps = pixel_studio,
		position = ps.canvas.screen_to_canvas(mouse_event),
		tool = ps.palette_tool.get_selected(),
		color = ps.palette_color.get_selected();
		// @todo
		let canvas = (tool.name == 'pencil') ?  color : ps.palette_color.bg_color;

		ps.canvas.draw(position.x, position.y, canvas);
	},

	on_mouse_event: function(mouse_event){
		console.log(mouse_event);
		let tool = pixel_studio.palette_tool.get_selected()
			type = 'on_'+mouse_event.type;
		if(tool[type]) tool[type](mouse_event);
	},
};