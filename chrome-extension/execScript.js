
// 「windowオブジェクト・flashのメソッド」にアクセスする場合これが必要
function execScript(fn) {
	const script_text = typeof fn === "function" ? `(${fn.toString()})()` : fn;
	
	const script = document.createElement("script");
	script.appendChild(document.createTextNode(script_text));

	const parent = document.head || document.body || document.documentElement;
	parent.appendChild(script);
	parent.removeChild(script);
}
