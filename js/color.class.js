class Color{
	/**
	 * Représente une couleur dans la palette
	 * @param  {string} name    Nom de la couleur
	 * @param  {array} couleur  Disposition dans un tableau R G B
	 */
	constructor(name, colors){
		this.name = name;
		this.color_rgb = colors;
	}

	to_string(){
		return "rgb("+this.color_rgb.join(',')+")";
	}
}