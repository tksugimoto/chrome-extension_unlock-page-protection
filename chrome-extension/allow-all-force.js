window.addEventListener("contextmenu", evt => {
	evt.stopPropagation();
}, true);

window.addEventListener("copy", evt => {
	evt.stopPropagation();
}, true);

window.addEventListener("dragstart", evt => {
	evt.stopPropagation();
}, true);

window.addEventListener("selectstart", evt => {
	evt.stopPropagation();
}, true);

window.addEventListener("mousedown", evt => {
	evt.stopPropagation();
}, true);
