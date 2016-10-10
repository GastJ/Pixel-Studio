pixel_studio.palette_tool = {

	tools: [],
	tool_selected: null,

	select_tool: function(tool){
		this.tool_selected = tool;
		$('#tools li').removeClass('selected').eq(tool.id).addClass('selected');
	},

	init: function(tools){

		this.tools = tools;

		// création de la représentation de la palette outil
		
		let $tools = $('#tools'),
			$two = $("#tools li").detach();

		for(var j=0; j<tools.length; j++){
			let $t = $two.clone();
				tool = this.tools[j];
				tool.id = j;
			$t.addClass(tools[j].icones);
			$t.attr('title', tools[j].name)
			$("#tools").append($t);
		}
		// outil par défaut
		this.select_tool(this.tools[0]);

		// gestion des clicks
		var self = this;

		$('#tools').on('click','li', function(){

			let index = $("#tools li").index(this);
			self.select_tool(self.tools[index]);
		})
	}
}