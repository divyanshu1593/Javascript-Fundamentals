/*
If elem – is an arbitrary DOM element node…

Is it true that elem.lastChild.nextSibling is always null?
Is it true that elem.children[0].previousSibling is always null ?
*/

// Yes, becuase elem.lastChild is the last child
// No, because elem.children[0] may not be the first node (for example the first node can be a text node)