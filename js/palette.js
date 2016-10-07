pixel_studio.palette = {

	colors: [],
	color_selected: null,

	select_color: function(color){
		this.color_selected = color;
		$('#colors li').removeClass('selected').eq(color.id).addClass('selected');
	},

	init_colors: function(colors){

		this.colors = colors;

		let $colors = $('#colors'),
			$one = $("#colors li").detach();

		for(var i=0; i<colors.length; i++){
			let $c = $one.clone();
				  color = this.colors[i];
				  color.id = i;
			$c.css("background-color",colors[i].to_string());
			$c.attr('title', colors[i].name)
			$("#colors").append($c);
		}
		// couleur par défaut
		this.select_color(this.colors[0]);
		console.log("palette is ready");
	}
};