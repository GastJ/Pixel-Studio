pixel_studio.palette = {

	colors_list: [],
	color_selected: null,

	select_color: function(color){
		this.color_selected = color;
	},

	init_colors: function(colors){

		this.colors_list = colors;

		let $colors = $('#colors'),
			$one = $("#colors li").detach();

		for(var i=0; i<colors.length; i++){
			let $c = $one.clone();
			$c.css("background-color",colors[i].to_string());
			$c.attr('title', colors[i].name)
			$("#colors").append($c);
		}
		this.select_color(this.colors_list[0]);
		console.log("palette is ready");
	}
};