;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

var regexLib = SyntaxHighlighter.regexLib;

var Match = SyntaxHighlighter.Match;
function Brush() {
  var keywords = 'break case catch class continue ' +
    'default delete do else enum export extends false  ' +
    'for function if implements import in instanceof ' +
    'interface let new null package private protected ' +
    'static return super switch ' +
    'this throw true try typeof var while with yield' +
    ' any bool declare get module never number public readonly set string'; // TypeScript-specific, everything above is common with JavaScript

  this.regexList = [
    {
      regex: regexLib.multiLineDoubleQuotedString,
      css: 'string'
    },
    {
      regex: regexLib.multiLineSingleQuotedString,
      css: 'string'
    },
    {
      regex: regexLib.singleLineCComments,
      css: 'comments'
    },
    {
      regex: regexLib.multiLineCComments,
      css: 'comments'
    },
    {
      regex: new RegExp(this.getKeywords(keywords), 'gm'),
      css: 'keyword'
    }
	];

  this.forHtmlScript(regexLib.scriptScriptTags);
};

Brush.prototype	= new SyntaxHighlighter.Highlighter();
Brush.aliases = ['ts', 'typescript'];

	SyntaxHighlighter.brushes.TypeScript = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();