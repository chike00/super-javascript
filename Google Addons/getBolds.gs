/* 
The body is a macro structure which contains all the Elements in the document
Because you may need different levels of access, e.g. at a Paragraph level or a Text
level, you have the ability to grab data as those.

Each Element has attributes associated with it which describe it, e.g. it's alignment,
whether it's bold/in italics, etc.

By using an advanced for loop, we can iterate through the object's attributes, and see
the value of the "BOLD" attribute.
*/


/**
 * Function which stores all the lines written exclusively in bold.
 */
function testerGetBolds(){
  /*
  var atts = body.getChild(4).asText().getAttributes();
  for (var att in atts) {
    console.log(att === "BOLD")
  }
  */

  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var rangeBuilder = doc.newRange();
  var child;
  var att;
  var atts;
  var childIndexes = [];

  for(var i = 0; i < body.getNumChildren(); i++){
    child = body.getChild(i).asText(); 
    atts = child.getAttributes()
    for(att in atts){
      if(att === "BOLD"){
        if(atts[att] === true){
          childIndexes.push(body.getChildIndex(body.getChild(i)));
          rangeBuilder.addElement(body.getChild(i));
        }
      }
    }
  }

  console.log(childIndexes.forEach(element => console.log(`Element ${element} has been selected.`)));
  doc.setSelection(rangeBuilder.build());
  //https://docs.google.com/document/d/1y4i1uEOt3MUcV7iUJm7JjCHgVBVbwWpBAzhsF9ox8m4/edit#heading=h.yx1e03ig5w5k
  
  var elems = doc.getSelection().getRangeElements();
  elems.forEach((elem) => console.log(elem.getElement().asText().setLinkUrl(DocumentApp.getActiveDocument().getUrl() + "edit#12345")));
}
