
// 「windowオブジェクト・flashのメソッド」にアクセスする場合これが必要
function execScript(fn) {
    var script_text = typeof fn === "function" ? ("(" + fn.toString() + ")()") : fn;
    
    var script = document.createElement('script');
    script.appendChild(document.createTextNode(script_text));

    var parent = (document.head || document.body || document.documentElement);
    parent.appendChild(script);
    parent.removeChild(script);
}