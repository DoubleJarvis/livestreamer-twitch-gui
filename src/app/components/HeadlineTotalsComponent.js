import {
	computed,
	Component
} from "Ember";
import layout from "hbs!templates/components/HeadlineTotalsComponent";


var { gte } = computed;


export default Component.extend({
	layout,

	tagName: "div",
	classNames: [ "total" ],

	total: null,

	isVisible: gte( "total", 0 )
});
