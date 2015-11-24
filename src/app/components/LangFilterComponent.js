import {
	get,
	Binding,
	Component
} from "Ember";
import layout from "hbs!templates/components/LangFilterComponent";


export default Component.extend({
	layout,
	tagName: "li",

	init: function() {
		this._super.apply( this, arguments );

		var prop = get( this, "prop" );
		var binding = Binding
			.from( "obj." + prop )
			.to( "checked" );
		binding.connect( this );
	}
});
