;(function()
{
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);
	SyntaxHighlighter.brushes.VimScript= function()
	{
		var keywords =	'if else endif elseif for do done until while break continue case function return in'
		+ 'map nmap nnoremap onoremap autocmd augroup set setlocal let echo echom';
		//var commands =  'include usepackage begin end ref label includegraphics';

		this.regexList = [
			{ regex: new RegExp('\"\\s.*','gm'),		css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,			css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// strings
			{ regex: new RegExp('\\\\\\w*','gm'),			css: 'keyword' },		// commands
			{ regex: new RegExp('@[a-z\"\/+0]*','gm'),		css: 'color1' },		//寄存器 
			{ regex: new RegExp('&amp\;[a-z]*','gm'),		css: 'variable' },		//变量
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),			css: 'function' },		// keywords
		];
		}

SyntaxHighlighter.brushes.VimScript.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.VimScript.aliases		= ['vimscript', 'vim'];

typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
