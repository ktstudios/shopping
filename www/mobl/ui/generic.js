mobl.provides('mobl.ui.generic');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl.ui.generic');
mobl.provides('mobl');
mobl.provides('mobl.ui');
mobl.ui.generic.loadingStyle = 'mobl__ui__generic__loadingStyle';

mobl.ui.generic.whenLoaded = function(value, style, loadingMessage, elements, callback) {
var root126 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node58 = $("<span>");
root126.append(node58);
var condSubs12 = new mobl.CompSubscription();
subs__.addSub(condSubs12);
var oldValue12;
var renderCond12 = function() {
  var value36 = value.get();
  if(oldValue12 === value36) return;
  oldValue12 = value36;
  var subs__ = condSubs12;
  subs__.unsubscribe();
  node58.empty();
  if(value36) {
    var nodes81 = $("<span>");
    node58.append(nodes81);
    subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
      renderControl28();
    }));
    
    function renderControl28() {
      subs__.addSub((elements)(function(elements, callback) {
        var root127 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root127); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes81;
        nodes81 = node.contents();
        oldNodes.replaceWith(nodes81);
      }));
    }
    renderControl28();
    
    
  } else {
    var nodes82 = $("<span>");
    node58.append(nodes82);
    subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root128 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes83 = $("<span>");
      root128.append(nodes83);
      subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root129 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root129); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes83;
        nodes83 = node.contents();
        oldNodes.replaceWith(nodes83);
      }));
      var nodes84 = $("<span>");
      root128.append(nodes84);
      subs__.addSub((mobl.ui.generic.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
        var root130 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root130); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes84;
        nodes84 = node.contents();
        oldNodes.replaceWith(nodes84);
      }));
      callback(root128); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes82;
      nodes82 = node.contents();
      oldNodes.replaceWith(nodes82);
    }));
    
    
  }
};
renderCond12();
subs__.addSub(value.addEventListener('change', function() {
  renderCond12();
}));

callback(root126); return subs__;

return subs__;
};
mobl.ui.generic.headerStyle = 'mobl__ui__generic__headerStyle';
mobl.ui.generic.headerContainerStyle = 'mobl__ui__generic__headerContainerStyle';
mobl.ui.generic.headerTextStyle = 'mobl__ui__generic__headerTextStyle';

mobl.ui.generic.header = function(text, fixedPosition, onclick, elements, callback) {
var root131 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node59 = $("<div>");

var ref88 = mobl.ref(mobl.ui.generic.headerStyle);
if(ref88.get() !== null) {
  node59.attr('class', ref88.get());
  subs__.addSub(ref88.addEventListener('change', function(_, ref, val) {
    node59.attr('class', val);
  }));
  
}
subs__.addSub(ref88.rebind());

var val36 = onclick.get();
if(val36 !== null) {
  subs__.addSub(mobl.domBind(node59, 'tap', val36));
}

var ref89 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
if(ref89.get() !== null) {
  node59.attr('style', ref89.get());
  subs__.addSub(ref89.addEventListener('change', function(_, ref, val) {
    node59.attr('style', val);
  }));
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    node59.attr('style', fixedPosition.get() ? "position:fixed;" : null);
  }));
  
}
subs__.addSub(ref89.rebind());


var node62 = $("<div>");

var ref87 = mobl.ref(mobl.ui.generic.headerContainerStyle);
if(ref87.get() !== null) {
  node62.attr('class', ref87.get());
  subs__.addSub(ref87.addEventListener('change', function(_, ref, val) {
    node62.attr('class', val);
  }));
  
}
subs__.addSub(ref87.rebind());


var node63 = $("<div>");

var ref85 = text;
node63.text(""+ref85.get());
var ignore12 = false;
subs__.addSub(ref85.addEventListener('change', function(_, ref, val) {
  if(ignore12) return;
  node63.text(""+val);
}));
subs__.addSub(ref85.rebind());


var ref86 = mobl.ref(mobl.ui.generic.headerTextStyle);
if(ref86.get() !== null) {
  node63.attr('class', ref86.get());
  subs__.addSub(ref86.addEventListener('change', function(_, ref, val) {
    node63.attr('class', val);
  }));
  
}
subs__.addSub(ref86.rebind());

node62.append(node63);
node59.append(node62);
var nodes85 = $("<span>");
node59.append(nodes85);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl29();
}));

function renderControl29() {
  subs__.addSub((elements)(function(elements, callback) {
    var root132 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root132); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes85;
    nodes85 = node.contents();
    oldNodes.replaceWith(nodes85);
  }));
}
renderControl29();
root131.append(node59);

var node60 = $("<span>");
root131.append(node60);
var condSubs13 = new mobl.CompSubscription();
subs__.addSub(condSubs13);
var oldValue13;
var renderCond13 = function() {
  var value37 = fixedPosition.get();
  if(oldValue13 === value37) return;
  oldValue13 = value37;
  var subs__ = condSubs13;
  subs__.unsubscribe();
  node60.empty();
  if(value37) {
    
    var node61 = $("<div>");
    node61.attr('id', "hello");
    node61.attr('style', "height: 2.9em;");
    
    node60.append(node61);
    
    
  } else {
    
  }
};
renderCond13();
subs__.addSub(fixedPosition.addEventListener('change', function() {
  renderCond13();
}));

callback(root131); return subs__;





return subs__;
};
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';

mobl.ui.generic.button = function(text, style, pushedStyle, onclick, elements, callback) {
var root133 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);

var sp = $("<span>");

var ref90 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
if(ref90.get() !== null) {
  sp.attr('class', ref90.get());
  subs__.addSub(ref90.addEventListener('change', function(_, ref, val) {
    sp.attr('class', val);
  }));
  subs__.addSub(pushed.addEventListener('change', function() {
    sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
  }));
  subs__.addSub(pushedStyle.addEventListener('change', function() {
    sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
  }));
  subs__.addSub(style.addEventListener('change', function() {
    sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
  }));
  
}
subs__.addSub(ref90.rebind());

var val37 = function(event, callback) {
              var result__ = event.preventDefault();
              var result__ = true;
              pushed.set(result__);
              if(callback && callback.apply) callback(); return;
            };
if(val37 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdown', val37));
}

var val38 = function(event, callback) {
              var result__ = event.y < 0 || event.y > sp.outerHeight() || event.x < 0 || event.x > sp.outerWidth();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val38 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdrag', val38));
}

var val39 = function(event, callback) {
              var result__ = pushed.get();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                function after11(result__) {
                  var tmp77 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onclick.get()(event, after11);if(result__ !== undefined) after11(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val39 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchup', val39));
}

var val40 = function(event, callback) {
              var result__ = pushed.get();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val40 !== null) {
  subs__.addSub(mobl.domBind(sp, 'mouseout', val40));
}

var ref91 = text;
sp.text(""+ref91.get());
var ignore13 = false;
subs__.addSub(ref91.addEventListener('change', function(_, ref, val) {
  if(ignore13) return;
  sp.text(""+val);
}));
subs__.addSub(ref91.rebind());


root133.append(sp);
callback(root133); return subs__;

return subs__;
};
mobl.ui.generic.sideButtonStyle = 'mobl__ui__generic__sideButtonStyle';
mobl.ui.generic.sideButtonPushedStyle = 'mobl__ui__generic__sideButtonPushedStyle';

mobl.ui.generic.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root134 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes86 = $("<span>");
root134.append(nodes86);
subs__.addSub((mobl.ui.generic.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root135 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root135); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes86;
  nodes86 = node.contents();
  oldNodes.replaceWith(nodes86);
}));
callback(root134); return subs__;

return subs__;
};
mobl.ui.generic.backButtonStyle = 'mobl__ui__generic__backButtonStyle';
mobl.ui.generic.backButtonPushedStyle = 'mobl__ui__generic__backButtonPushedStyle';
mobl.ui.generic.backButtonStyle = 'mobl__ui__generic__backButtonStyle';
mobl.ui.generic.backButtonPushedStyle = 'mobl__ui__generic__backButtonPushedStyle';

mobl.ui.generic.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root136 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes87 = $("<span>");
root136.append(nodes87);
subs__.addSub((mobl.ui.generic.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root137 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root137); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes87;
  nodes87 = node.contents();
  oldNodes.replaceWith(nodes87);
}));
callback(root136); return subs__;

return subs__;
};
mobl.ui.generic.groupStyle = 'mobl__ui__generic__groupStyle';

mobl.ui.generic.group = function(elements, callback) {
var root138 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node64 = $("<ul>");

var ref92 = mobl.ref(mobl.ui.generic.groupStyle);
if(ref92.get() !== null) {
  node64.attr('class', ref92.get());
  subs__.addSub(ref92.addEventListener('change', function(_, ref, val) {
    node64.attr('class', val);
  }));
  
}
subs__.addSub(ref92.rebind());

var nodes88 = $("<span>");
node64.append(nodes88);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl30();
}));

function renderControl30() {
  subs__.addSub((elements)(function(elements, callback) {
    var root139 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root139); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes88;
    nodes88 = node.contents();
    oldNodes.replaceWith(nodes88);
  }));
}
renderControl30();
root138.append(node64);
callback(root138); return subs__;


return subs__;
};

mobl.ui.generic.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
var root140 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node65 = $("<img>");

var ref93 = url;
if(ref93.get() !== null) {
  node65.attr('src', ref93.get());
  subs__.addSub(ref93.addEventListener('change', function(_, ref, val) {
    node65.attr('src', val);
  }));
  
}
subs__.addSub(ref93.rebind());

var ref94 = width;
if(ref94.get() !== null) {
  node65.attr('width', ref94.get());
  subs__.addSub(ref94.addEventListener('change', function(_, ref, val) {
    node65.attr('width', val);
  }));
  
}
subs__.addSub(ref94.rebind());

var ref95 = height;
if(ref95.get() !== null) {
  node65.attr('height', ref95.get());
  subs__.addSub(ref95.addEventListener('change', function(_, ref, val) {
    node65.attr('height', val);
  }));
  
}
subs__.addSub(ref95.rebind());

var ref96 = style;
if(ref96.get() !== null) {
  node65.attr('class', ref96.get());
  subs__.addSub(ref96.addEventListener('change', function(_, ref, val) {
    node65.attr('class', val);
  }));
  
}
subs__.addSub(ref96.rebind());

var val41 = onclick.get();
if(val41 !== null) {
  subs__.addSub(mobl.domBind(node65, 'tap', val41));
}

var ref97 = valign;
if(ref97.get() !== null) {
  node65.attr('valign', ref97.get());
  subs__.addSub(ref97.addEventListener('change', function(_, ref, val) {
    node65.attr('valign', val);
  }));
  
}
subs__.addSub(ref97.rebind());

var ref98 = align;
if(ref98.get() !== null) {
  node65.attr('align', ref98.get());
  subs__.addSub(ref98.addEventListener('change', function(_, ref, val) {
    node65.attr('align', val);
  }));
  
}
subs__.addSub(ref98.rebind());

root140.append(node65);
callback(root140); return subs__;

return subs__;
};
mobl.ui.generic.itemStyle = 'mobl__ui__generic__itemStyle';
mobl.ui.generic.itemPushedStyle = 'mobl__ui__generic__itemPushedStyle';
mobl.ui.generic.itemArrowStyle = 'mobl__ui__generic__itemArrowStyle';
mobl.ui.generic.itemDownArrowStyle = 'mobl__ui__generic__itemDownArrowStyle';

mobl.ui.generic.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
var root141 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);

var el = $("<li>");

var ref99 = mobl.ref(mobl.ui.generic.itemStyle);
if(ref99.get() !== null) {
  el.attr('class', ref99.get());
  subs__.addSub(ref99.addEventListener('change', function(_, ref, val) {
    el.attr('class', val);
  }));
  
}
subs__.addSub(ref99.rebind());

var ref100 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
if(ref100.get() !== null) {
  el.attr('class', ref100.get());
  subs__.addSub(ref100.addEventListener('change', function(_, ref, val) {
    el.attr('class', val);
  }));
  subs__.addSub(onclick.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(hideArrow.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(mobl.ref(mobl.ui.generic.itemArrowStyle).addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(pushed.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(pushedStyle.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(style.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  
}
subs__.addSub(ref100.rebind());

var val42 = onswipe.get();
if(val42 !== null) {
  subs__.addSub(mobl.domBind(el, 'swipe', val42));
}

var val43 = onclick.get() ? function(event, callback) {
                                       var result__ = true;
                                       pushed.set(result__);
                                       mobl.sleep(100, function(result__) {
                                         var tmp78 = result__;
                                         function after12(result__) {
                                           var tmp79 = result__;
                                           
                                         }
                                         var result__ = onclick.get()(event, after12);if(result__ !== undefined) after12(result__);
                                         mobl.sleep(200, function(result__) {
                                           var tmp81 = result__;
                                           var result__ = false;
                                           pushed.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                                         
                                       });
                                     } : null;
if(val43 !== null) {
  subs__.addSub(mobl.domBind(el, 'tap', val43));
}

var nodes89 = $("<span>");
el.append(nodes89);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl31();
}));

function renderControl31() {
  subs__.addSub((elements)(function(elements, callback) {
    var root142 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root142); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes89;
    nodes89 = node.contents();
    oldNodes.replaceWith(nodes89);
  }));
}
renderControl31();
root141.append(el);
callback(root141); return subs__;


return subs__;
};

mobl.ui.generic.checkBox = function(b, label, onchange, elements, callback) {
var root143 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node66 = $("<input>");
node66.attr('type', "checkbox");

var ref102 = b;
node66.attr('checked', !!ref102.get());
subs__.addSub(ref102.addEventListener('change', function(_, ref, val) {
  if(ref === ref102) node66.attr('checked', !!val);
}));
subs__.addSub(mobl.domBind(node66, 'change', function() {
  b.set(!!node66.attr('checked'));
}));

var val45 = function(event, callback) {
              if(callback && callback.apply) callback(); return;
            };
if(val45 !== null) {
  subs__.addSub(mobl.domBind(node66, 'tap', val45));
}

var val46 = onchange.get();
if(val46 !== null) {
  subs__.addSub(mobl.domBind(node66, 'change', val46));
}

root143.append(node66);

root143.append(" ");

var node67 = $("<span>");

var ref101 = label;
node67.text(""+ref101.get());
var ignore14 = false;
subs__.addSub(ref101.addEventListener('change', function(_, ref, val) {
  if(ignore14) return;
  node67.text(""+val);
}));
subs__.addSub(ref101.rebind());


var val44 = function(event, callback) {
              var result__ = !b.get();
              b.set(result__);
              var result__ = onchange.get();
              if(result__) {
                function after13(result__) {
                  var tmp82 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onchange.get()(null, after13);if(result__ !== undefined) after13(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val44 !== null) {
  subs__.addSub(mobl.domBind(node67, 'tap', val44));
}

root143.append(node67);
callback(root143); return subs__;


return subs__;
};
mobl.ui.generic.textFieldStyle = 'mobl__ui__generic__textFieldStyle';
mobl.ui.generic.textFieldInvalidStyle = 'mobl__ui__generic__textFieldInvalidStyle';
mobl.ui.generic.textFieldLabelStyle = 'mobl__ui__generic__textFieldLabelStyle';
mobl.ui.generic.validationMessageStyle = 'mobl__ui__generic__validationMessageStyle';
mobl.ui.generic.alwaysOkValidator = function(s) {
   var __this = this;
  return "";
};


mobl.ui.generic.textField = function(s, placeholder, label, inputType, validator, style, invalidStyle, autofocus, autocorrect, autocapitalize, autocomplete, onchange, onkeyup, elements, callback) {
var root144 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node68 = $("<span>");
root144.append(node68);
var condSubs14 = new mobl.CompSubscription();
subs__.addSub(condSubs14);
var oldValue14;
var renderCond14 = function() {
  var value38 = label.get();
  if(oldValue14 === value38) return;
  oldValue14 = value38;
  var subs__ = condSubs14;
  subs__.unsubscribe();
  node68.empty();
  if(value38) {
    var nodes90 = $("<span>");
    node68.append(nodes90);
    subs__.addSub((mobl.label)(label, mobl.ref(mobl.ui.generic.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
      var root145 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root145); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes90;
      nodes90 = node.contents();
      oldNodes.replaceWith(nodes90);
    }));
    
    
  } else {
    
  }
};
renderCond14();
subs__.addSub(label.addEventListener('change', function() {
  renderCond14();
}));


var node69 = $("<span>");
root144.append(node69);
var condSubs15 = new mobl.CompSubscription();
subs__.addSub(condSubs15);
var oldValue15;
var renderCond15 = function() {
  var value39 = validator.get();
  if(oldValue15 === value39) return;
  oldValue15 = value39;
  var subs__ = condSubs15;
  subs__.unsubscribe();
  node69.empty();
  if(value39) {
    
    var temp = mobl.ref(s.get());
    
    var identifier = mobl.ref(mobl.random(999));
    function after17(result__) {
      var tmp83 = result__;
      var validationMessage = mobl.ref(result__);
      mobl.sleep(200, function(result__) {
        var tmp84 = result__;
        var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
        
      });
      
      var node70 = $("<input>");
      
      var ref103 = inputType;
      if(ref103.get() !== null) {
        node70.attr('type', ref103.get());
        subs__.addSub(ref103.addEventListener('change', function(_, ref, val) {
          node70.attr('type', val);
        }));
        
      }
      subs__.addSub(ref103.rebind());
      
      var ref104 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
      if(ref104.get() !== null) {
        node70.attr('class', ref104.get());
        subs__.addSub(ref104.addEventListener('change', function(_, ref, val) {
          node70.attr('class', val);
        }));
        subs__.addSub(validationMessage.addEventListener('change', function() {
          node70.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
        }));
        subs__.addSub(invalidStyle.addEventListener('change', function() {
          node70.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
        }));
        subs__.addSub(style.addEventListener('change', function() {
          node70.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
        }));
        
      }
      subs__.addSub(ref104.rebind());
      
      var ref105 = placeholder;
      if(ref105.get() !== null) {
        node70.attr('placeholder', ref105.get());
        subs__.addSub(ref105.addEventListener('change', function(_, ref, val) {
          node70.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref105.rebind());
      
      var ref106 = temp;
      node70.val(""+ref106.get());
      var ignore15 = false;
      subs__.addSub(ref106.addEventListener('change', function(_, ref, val) {
        if(ignore15) return;
        node70.val(""+val);
      }));
      subs__.addSub(ref106.rebind());
      
      subs__.addSub(mobl.domBind(node70, 'keyup change', function() {
        ignore15 = true;
        temp.set(mobl.stringTomobl__String(node70.val()));
        ignore15 = false;
      }));
      
      
      var val47 = onchange.get();
      if(val47 !== null) {
        subs__.addSub(mobl.domBind(node70, 'change', val47));
      }
      
      var val48 = function(event, callback) {
                    var result__ = onkeyup.get();
                    if(result__) {
                      function after14(result__) {
                        var tmp85 = result__;
                        function after15(result__) {
                          var tmp86 = result__;
                          var result__ = tmp86;
                          validationMessage.set(result__);
                          var result__ = !validationMessage.get();
                          if(result__) {
                            var result__ = temp.get();
                            s.set(result__);
                            var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                            if(callback && callback.apply) callback(); return;
                          } else {
                            {
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            }
                          }
                        }
                        var result__ = validator.get()(temp.get(), after15);if(result__ !== undefined) after15(result__);
                      }
                      var result__ = onkeyup.get()(event, after14);if(result__ !== undefined) after14(result__);
                    } else {
                      {
                        function after16(result__) {
                          var tmp86 = result__;
                          var result__ = tmp86;
                          validationMessage.set(result__);
                          var result__ = !validationMessage.get();
                          if(result__) {
                            var result__ = temp.get();
                            s.set(result__);
                            var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                            if(callback && callback.apply) callback(); return;
                          } else {
                            {
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            }
                          }
                        }
                        var result__ = validator.get()(temp.get(), after16);if(result__ !== undefined) after16(result__);
                      }
                    }
                  };
      if(val48 !== null) {
        subs__.addSub(mobl.domBind(node70, 'keyup', val48));
      }
      
      var ref107 = autofocus;
      if(ref107.get() !== null) {
        node70.attr('autofocus', ref107.get());
        subs__.addSub(ref107.addEventListener('change', function(_, ref, val) {
          node70.attr('autofocus', val);
        }));
        
      }
      subs__.addSub(ref107.rebind());
      
      var ref109 = autocorrect;
      if(ref109.get() !== null) {
        node70.attr('autocorrect', ref109.get());
        subs__.addSub(ref109.addEventListener('change', function(_, ref, val) {
          node70.attr('autocorrect', val);
        }));
        
      }
      subs__.addSub(ref109.rebind());
      
      var ref110 = autocapitalize;
      if(ref110.get() !== null) {
        node70.attr('autocapitalize', ref110.get());
        subs__.addSub(ref110.addEventListener('change', function(_, ref, val) {
          node70.attr('autocapitalize', val);
        }));
        
      }
      subs__.addSub(ref110.rebind());
      
      var ref111 = autocomplete;
      if(ref111.get() !== null) {
        node70.attr('autocomplete', ref111.get());
        subs__.addSub(ref111.addEventListener('change', function(_, ref, val) {
          node70.attr('autocomplete', val);
        }));
        
      }
      subs__.addSub(ref111.rebind());
      
      node69.append(node70);
      var nodes91 = $("<span>");
      node69.append(nodes91);
      subs__.addSub((mobl.label)(validationMessage, mobl.ref(mobl.ui.generic.validationMessageStyle), mobl.ref(null), function(_, callback) {
        var root146 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root146); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes91;
        nodes91 = node.contents();
        oldNodes.replaceWith(nodes91);
      }));
      
      
      
      
    }
    var result__ = validator.get()(s.get(), after17);if(result__ !== undefined) after17(result__);
  } else {
    
    var node71 = $("<input>");
    
    var ref112 = inputType;
    if(ref112.get() !== null) {
      node71.attr('type', ref112.get());
      subs__.addSub(ref112.addEventListener('change', function(_, ref, val) {
        node71.attr('type', val);
      }));
      
    }
    subs__.addSub(ref112.rebind());
    
    var ref113 = style;
    if(ref113.get() !== null) {
      node71.attr('class', ref113.get());
      subs__.addSub(ref113.addEventListener('change', function(_, ref, val) {
        node71.attr('class', val);
      }));
      
    }
    subs__.addSub(ref113.rebind());
    
    var ref114 = placeholder;
    if(ref114.get() !== null) {
      node71.attr('placeholder', ref114.get());
      subs__.addSub(ref114.addEventListener('change', function(_, ref, val) {
        node71.attr('placeholder', val);
      }));
      
    }
    subs__.addSub(ref114.rebind());
    
    var ref115 = s;
    node71.val(""+ref115.get());
    var ignore16 = false;
    subs__.addSub(ref115.addEventListener('change', function(_, ref, val) {
      if(ignore16) return;
      node71.val(""+val);
    }));
    subs__.addSub(ref115.rebind());
    
    subs__.addSub(mobl.domBind(node71, 'keyup change', function() {
      ignore16 = true;
      s.set(mobl.stringTomobl__String(node71.val()));
      ignore16 = false;
    }));
    
    
    var val49 = onchange.get();
    if(val49 !== null) {
      subs__.addSub(mobl.domBind(node71, 'change', val49));
    }
    
    var val50 = onkeyup.get();
    if(val50 !== null) {
      subs__.addSub(mobl.domBind(node71, 'keyup', val50));
    }
    
    var ref116 = autofocus;
    if(ref116.get() !== null) {
      node71.attr('autofocus', ref116.get());
      subs__.addSub(ref116.addEventListener('change', function(_, ref, val) {
        node71.attr('autofocus', val);
      }));
      
    }
    subs__.addSub(ref116.rebind());
    
    var ref117 = autocorrect;
    if(ref117.get() !== null) {
      node71.attr('autocorrect', ref117.get());
      subs__.addSub(ref117.addEventListener('change', function(_, ref, val) {
        node71.attr('autocorrect', val);
      }));
      
    }
    subs__.addSub(ref117.rebind());
    
    var ref118 = autocapitalize;
    if(ref118.get() !== null) {
      node71.attr('autocapitalize', ref118.get());
      subs__.addSub(ref118.addEventListener('change', function(_, ref, val) {
        node71.attr('autocapitalize', val);
      }));
      
    }
    subs__.addSub(ref118.rebind());
    
    var ref119 = autocomplete;
    if(ref119.get() !== null) {
      node71.attr('autocomplete', ref119.get());
      subs__.addSub(ref119.addEventListener('change', function(_, ref, val) {
        node71.attr('autocomplete', val);
      }));
      
    }
    subs__.addSub(ref119.rebind());
    
    node69.append(node71);
    
    
  }
};
renderCond15();
subs__.addSub(validator.addEventListener('change', function() {
  renderCond15();
}));

callback(root144); return subs__;


return subs__;
};

mobl.ui.generic.emailField = function(s, placeholder, label, validator, style, invalidStyle, autofocus, onchange, onkeyup, elements, callback) {
var root147 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes92 = $("<span>");
root147.append(nodes92);
subs__.addSub((mobl.ui.generic.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, autofocus, mobl.ref(false), mobl.ref(false), mobl.ref(false), onchange, onkeyup, function(_, callback) {
  var root148 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root148); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes92;
  nodes92 = node.contents();
  oldNodes.replaceWith(nodes92);
}));
callback(root147); return subs__;

return subs__;
};

mobl.ui.generic.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, autofocus, onchange, onkeyup, elements, callback) {
var root149 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes93 = $("<span>");
root149.append(nodes93);
subs__.addSub((mobl.ui.generic.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, autofocus, mobl.ref(false), mobl.ref(false), mobl.ref(false), onchange, onkeyup, function(_, callback) {
  var root150 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root150); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes93;
  nodes93 = node.contents();
  oldNodes.replaceWith(nodes93);
}));
callback(root149); return subs__;

return subs__;
};

mobl.ui.generic.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
var root151 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node72 = $("<span>");
root151.append(node72);
var condSubs16 = new mobl.CompSubscription();
subs__.addSub(condSubs16);
var oldValue16;
var renderCond16 = function() {
  var value40 = label.get();
  if(oldValue16 === value40) return;
  oldValue16 = value40;
  var subs__ = condSubs16;
  subs__.unsubscribe();
  node72.empty();
  if(value40) {
    var nodes94 = $("<span>");
    node72.append(nodes94);
    subs__.addSub((mobl.label)(label, mobl.ref(mobl.ui.generic.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
      var root152 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root152); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes94;
      nodes94 = node.contents();
      oldNodes.replaceWith(nodes94);
    }));
    
    
  } else {
    
  }
};
renderCond16();
subs__.addSub(label.addEventListener('change', function() {
  renderCond16();
}));


var node73 = $("<input>");
node73.attr('type', "range");

var ref120 = n;
node73.val(""+ref120.get());
var ignore17 = false;
subs__.addSub(ref120.addEventListener('change', function(_, ref, val) {
  if(ignore17) return;
  node73.val(""+val);
}));
subs__.addSub(ref120.rebind());

subs__.addSub(mobl.domBind(node73, 'keyup change', function() {
  ignore17 = true;
  n.set(mobl.stringTomobl__Num(node73.val()));
  ignore17 = false;
}));


var ref121 = min;
if(ref121.get() !== null) {
  node73.attr('min', ref121.get());
  subs__.addSub(ref121.addEventListener('change', function(_, ref, val) {
    node73.attr('min', val);
  }));
  
}
subs__.addSub(ref121.rebind());

var ref122 = max;
if(ref122.get() !== null) {
  node73.attr('max', ref122.get());
  subs__.addSub(ref122.addEventListener('change', function(_, ref, val) {
    node73.attr('max', val);
  }));
  
}
subs__.addSub(ref122.rebind());

var ref123 = step;
if(ref123.get() !== null) {
  node73.attr('step', ref123.get());
  subs__.addSub(ref123.addEventListener('change', function(_, ref, val) {
    node73.attr('step', val);
  }));
  
}
subs__.addSub(ref123.rebind());
node73.attr('style', "width: 99%;");

var val51 = onchange.get();
if(val51 !== null) {
  subs__.addSub(mobl.domBind(node73, 'change', val51));
}

var val52 = onkeyup.get();
if(val52 !== null) {
  subs__.addSub(mobl.domBind(node73, 'keyup', val52));
}

var ref124 = placeholder;
if(ref124.get() !== null) {
  node73.attr('placeholder', ref124.get());
  subs__.addSub(ref124.addEventListener('change', function(_, ref, val) {
    node73.attr('placeholder', val);
  }));
  
}
subs__.addSub(ref124.rebind());

root151.append(node73);
callback(root151); return subs__;


return subs__;
};

mobl.ui.generic.numField = function(n, label, placeholder, validator, style, invalidStyle, autofocus, step, min, max, onchange, onkeyup, elements, callback) {
var root153 = $("<span>");
var subs__ = new mobl.CompSubscription();

var validateNum = function(n) {
   var __this = this;
  if(mobl.Math.isNaN(n)) {
    return mobl._("Not a valid numeric value", []);
  } else if(max.get() != null && n > max.get()) {
    return mobl._("Number is too high, maximum is: %%", [max.get()]);
  } else if(min.get() != null && n < min.get()) {
    return mobl._("Number is too low, minimum is: %%", [min.get()]);
  } else {
    return "";
  }
};


var result__ = validator.get() == null;
if(result__) {
  var result__ = validateNum;
  validator.set(result__);
  function after20(result__) {
    var tmp87 = result__;
    var validationMessage = mobl.ref(result__);
    
    var node74 = $("<span>");
    root153.append(node74);
    var condSubs17 = new mobl.CompSubscription();
    subs__.addSub(condSubs17);
    var oldValue17;
    var renderCond17 = function() {
      var value41 = label.get();
      if(oldValue17 === value41) return;
      oldValue17 = value41;
      var subs__ = condSubs17;
      subs__.unsubscribe();
      node74.empty();
      if(value41) {
        var nodes95 = $("<span>");
        node74.append(nodes95);
        subs__.addSub((mobl.label)(label, mobl.ref(mobl.ui.generic.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
          var root154 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root154); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes95;
          nodes95 = node.contents();
          oldNodes.replaceWith(nodes95);
        }));
        
        
      } else {
        
      }
    };
    renderCond17();
    subs__.addSub(label.addEventListener('change', function() {
      renderCond17();
    }));
    
    
    var node75 = $("<input>");
    node75.attr('type', "number");
    
    var ref125 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
    if(ref125.get() !== null) {
      node75.attr('class', ref125.get());
      subs__.addSub(ref125.addEventListener('change', function(_, ref, val) {
        node75.attr('class', val);
      }));
      subs__.addSub(validationMessage.addEventListener('change', function() {
        node75.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
      }));
      subs__.addSub(invalidStyle.addEventListener('change', function() {
        node75.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
      }));
      subs__.addSub(style.addEventListener('change', function() {
        node75.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
      }));
      
    }
    subs__.addSub(ref125.rebind());
    
    var ref126 = placeholder;
    if(ref126.get() !== null) {
      node75.attr('placeholder', ref126.get());
      subs__.addSub(ref126.addEventListener('change', function(_, ref, val) {
        node75.attr('placeholder', val);
      }));
      
    }
    subs__.addSub(ref126.rebind());
    
    var ref127 = n;
    node75.val(""+ref127.get());
    var ignore18 = false;
    subs__.addSub(ref127.addEventListener('change', function(_, ref, val) {
      if(ignore18) return;
      node75.val(""+val);
    }));
    subs__.addSub(ref127.rebind());
    
    subs__.addSub(mobl.domBind(node75, 'keyup change', function() {
      ignore18 = true;
      n.set(mobl.stringTomobl__Num(node75.val()));
      ignore18 = false;
    }));
    
    
    var val53 = onchange.get();
    if(val53 !== null) {
      subs__.addSub(mobl.domBind(node75, 'change', val53));
    }
    
    var val54 = function(event, callback) {
                  function after18(result__) {
                    var tmp88 = result__;
                    var result__ = tmp88;
                    validationMessage.set(result__);
                    var result__ = onkeyup.get();
                    if(result__) {
                      function after19(result__) {
                        var tmp89 = result__;
                        if(callback && callback.apply) callback(); return;
                      }
                      var result__ = onkeyup.get()(event, after19);if(result__ !== undefined) after19(result__);
                    } else {
                      {
                        if(callback && callback.apply) callback(); return;
                      }
                    }
                  }
                  var result__ = validator.get()(n.get(), after18);if(result__ !== undefined) after18(result__);
                };
    if(val54 !== null) {
      subs__.addSub(mobl.domBind(node75, 'keyup', val54));
    }
    
    var ref128 = autofocus;
    if(ref128.get() !== null) {
      node75.attr('autofocus', ref128.get());
      subs__.addSub(ref128.addEventListener('change', function(_, ref, val) {
        node75.attr('autofocus', val);
      }));
      
    }
    subs__.addSub(ref128.rebind());
    
    var ref129 = step;
    if(ref129.get() !== null) {
      node75.attr('step', ref129.get());
      subs__.addSub(ref129.addEventListener('change', function(_, ref, val) {
        node75.attr('step', val);
      }));
      
    }
    subs__.addSub(ref129.rebind());
    
    var ref130 = min;
    if(ref130.get() !== null) {
      node75.attr('min', ref130.get());
      subs__.addSub(ref130.addEventListener('change', function(_, ref, val) {
        node75.attr('min', val);
      }));
      
    }
    subs__.addSub(ref130.rebind());
    
    var ref131 = max;
    if(ref131.get() !== null) {
      node75.attr('max', ref131.get());
      subs__.addSub(ref131.addEventListener('change', function(_, ref, val) {
        node75.attr('max', val);
      }));
      
    }
    subs__.addSub(ref131.rebind());
    
    root153.append(node75);
    var nodes96 = $("<span>");
    root153.append(nodes96);
    subs__.addSub((mobl.label)(validationMessage, mobl.ref(mobl.ui.generic.validationMessageStyle), mobl.ref(null), function(_, callback) {
      var root155 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root155); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes96;
      nodes96 = node.contents();
      oldNodes.replaceWith(nodes96);
    }));
    callback(root153); return subs__;
    
    
    
  }
  var result__ = validator.get()(n.get(), after20);if(result__ !== undefined) after20(result__);
} else {
  {
    function after20(result__) {
      var tmp87 = result__;
      var validationMessage = mobl.ref(result__);
      
      var node74 = $("<span>");
      root153.append(node74);
      var condSubs17 = new mobl.CompSubscription();
      subs__.addSub(condSubs17);
      var oldValue17;
      var renderCond17 = function() {
        var value41 = label.get();
        if(oldValue17 === value41) return;
        oldValue17 = value41;
        var subs__ = condSubs17;
        subs__.unsubscribe();
        node74.empty();
        if(value41) {
          var nodes95 = $("<span>");
          node74.append(nodes95);
          subs__.addSub((mobl.label)(label, mobl.ref(mobl.ui.generic.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
            var root154 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root154); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes95;
            nodes95 = node.contents();
            oldNodes.replaceWith(nodes95);
          }));
          
          
        } else {
          
        }
      };
      renderCond17();
      subs__.addSub(label.addEventListener('change', function() {
        renderCond17();
      }));
      
      
      var node75 = $("<input>");
      node75.attr('type', "number");
      
      var ref125 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
      if(ref125.get() !== null) {
        node75.attr('class', ref125.get());
        subs__.addSub(ref125.addEventListener('change', function(_, ref, val) {
          node75.attr('class', val);
        }));
        subs__.addSub(validationMessage.addEventListener('change', function() {
          node75.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
        }));
        subs__.addSub(invalidStyle.addEventListener('change', function() {
          node75.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
        }));
        subs__.addSub(style.addEventListener('change', function() {
          node75.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
        }));
        
      }
      subs__.addSub(ref125.rebind());
      
      var ref126 = placeholder;
      if(ref126.get() !== null) {
        node75.attr('placeholder', ref126.get());
        subs__.addSub(ref126.addEventListener('change', function(_, ref, val) {
          node75.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref126.rebind());
      
      var ref127 = n;
      node75.val(""+ref127.get());
      var ignore18 = false;
      subs__.addSub(ref127.addEventListener('change', function(_, ref, val) {
        if(ignore18) return;
        node75.val(""+val);
      }));
      subs__.addSub(ref127.rebind());
      
      subs__.addSub(mobl.domBind(node75, 'keyup change', function() {
        ignore18 = true;
        n.set(mobl.stringTomobl__Num(node75.val()));
        ignore18 = false;
      }));
      
      
      var val53 = onchange.get();
      if(val53 !== null) {
        subs__.addSub(mobl.domBind(node75, 'change', val53));
      }
      
      var val54 = function(event, callback) {
                    function after18(result__) {
                      var tmp88 = result__;
                      var result__ = tmp88;
                      validationMessage.set(result__);
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after19(result__) {
                          var tmp89 = result__;
                          if(callback && callback.apply) callback(); return;
                        }
                        var result__ = onkeyup.get()(event, after19);if(result__ !== undefined) after19(result__);
                      } else {
                        {
                          if(callback && callback.apply) callback(); return;
                        }
                      }
                    }
                    var result__ = validator.get()(n.get(), after18);if(result__ !== undefined) after18(result__);
                  };
      if(val54 !== null) {
        subs__.addSub(mobl.domBind(node75, 'keyup', val54));
      }
      
      var ref128 = autofocus;
      if(ref128.get() !== null) {
        node75.attr('autofocus', ref128.get());
        subs__.addSub(ref128.addEventListener('change', function(_, ref, val) {
          node75.attr('autofocus', val);
        }));
        
      }
      subs__.addSub(ref128.rebind());
      
      var ref129 = step;
      if(ref129.get() !== null) {
        node75.attr('step', ref129.get());
        subs__.addSub(ref129.addEventListener('change', function(_, ref, val) {
          node75.attr('step', val);
        }));
        
      }
      subs__.addSub(ref129.rebind());
      
      var ref130 = min;
      if(ref130.get() !== null) {
        node75.attr('min', ref130.get());
        subs__.addSub(ref130.addEventListener('change', function(_, ref, val) {
          node75.attr('min', val);
        }));
        
      }
      subs__.addSub(ref130.rebind());
      
      var ref131 = max;
      if(ref131.get() !== null) {
        node75.attr('max', ref131.get());
        subs__.addSub(ref131.addEventListener('change', function(_, ref, val) {
          node75.attr('max', val);
        }));
        
      }
      subs__.addSub(ref131.rebind());
      
      root153.append(node75);
      var nodes96 = $("<span>");
      root153.append(nodes96);
      subs__.addSub((mobl.label)(validationMessage, mobl.ref(mobl.ui.generic.validationMessageStyle), mobl.ref(null), function(_, callback) {
        var root155 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root155); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes96;
        nodes96 = node.contents();
        oldNodes.replaceWith(nodes96);
      }));
      callback(root153); return subs__;
      
      
      
    }
    var result__ = validator.get()(n.get(), after20);if(result__ !== undefined) after20(result__);
  }
}
return subs__;
};

mobl.ui.generic.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
var root156 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node76 = $("<span>");
root156.append(node76);
var condSubs18 = new mobl.CompSubscription();
subs__.addSub(condSubs18);
var oldValue18;
var renderCond18 = function() {
  var value42 = label.get();
  if(oldValue18 === value42) return;
  oldValue18 = value42;
  var subs__ = condSubs18;
  subs__.unsubscribe();
  node76.empty();
  if(value42) {
    var nodes97 = $("<span>");
    node76.append(nodes97);
    subs__.addSub((mobl.label)(label, mobl.ref(mobl.ui.generic.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
      var root157 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root157); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes97;
      nodes97 = node.contents();
      oldNodes.replaceWith(nodes97);
    }));
    
    
  } else {
    
  }
};
renderCond18();
subs__.addSub(label.addEventListener('change', function() {
  renderCond18();
}));


var node77 = $("<input>");
node77.attr('type', "password");

var ref132 = style;
if(ref132.get() !== null) {
  node77.attr('class', ref132.get());
  subs__.addSub(ref132.addEventListener('change', function(_, ref, val) {
    node77.attr('class', val);
  }));
  
}
subs__.addSub(ref132.rebind());

var ref133 = placeholder;
if(ref133.get() !== null) {
  node77.attr('placeholder', ref133.get());
  subs__.addSub(ref133.addEventListener('change', function(_, ref, val) {
    node77.attr('placeholder', val);
  }));
  
}
subs__.addSub(ref133.rebind());

var ref134 = s;
node77.val(""+ref134.get());
var ignore19 = false;
subs__.addSub(ref134.addEventListener('change', function(_, ref, val) {
  if(ignore19) return;
  node77.val(""+val);
}));
subs__.addSub(ref134.rebind());

subs__.addSub(mobl.domBind(node77, 'keyup change', function() {
  ignore19 = true;
  s.set(mobl.stringTomobl__String(node77.val()));
  ignore19 = false;
}));


var val55 = onchange.get();
if(val55 !== null) {
  subs__.addSub(mobl.domBind(node77, 'change', val55));
}

var val56 = onkeyup.get();
if(val56 !== null) {
  subs__.addSub(mobl.domBind(node77, 'keyup', val56));
}

var val57 = function(event, callback) {
              var result__ = mobl.ui.generic.scrollUp();
              if(callback && callback.apply) callback(); return;
            };
if(val57 !== null) {
  subs__.addSub(mobl.domBind(node77, 'blur', val57));
}

root156.append(node77);
callback(root156); return subs__;


return subs__;
};
mobl.ui.generic.selectFieldStyle = 'mobl__ui__generic__selectFieldStyle';

mobl.ui.generic.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
var root158 = $("<span>");
var subs__ = new mobl.CompSubscription();

var sel = $("<select>");

var ref139 = style;
if(ref139.get() !== null) {
  sel.attr('class', ref139.get());
  subs__.addSub(ref139.addEventListener('change', function(_, ref, val) {
    sel.attr('class', val);
  }));
  
}
subs__.addSub(ref139.rebind());

var val58 = function(event, callback) {
              var result__ = sel.val();
              value.set(result__);
              var result__ = onchange.get();
              if(result__) {
                function after21(result__) {
                  var tmp92 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onchange.get()(event, after21);if(result__ !== undefined) after21(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val58 !== null) {
  subs__.addSub(mobl.domBind(sel, 'change', val58));
}


var node78 = mobl.loadingSpan();
sel.append(node78);
var list9;
var listSubs9 = new mobl.CompSubscription();
subs__.addSub(listSubs9);
var renderList9 = function() {
  var subs__ = listSubs9;
  list9 = options.get();
  list9.list(function(results9) {
    node78.empty();
    for(var i9 = 0; i9 < results9.length; i9++) {
      (function() {
        var iternode9 = $("<span>");
        node78.append(iternode9);
        var optionValue;var optionDescription;
        optionValue = mobl.ref(mobl.ref(mobl.ref(results9), i9), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results9), i9), "_2");
        
        var node79 = $("<option>");
        
        var ref135 = optionDescription;
        node79.text(""+ref135.get());
        var ignore20 = false;
        subs__.addSub(ref135.addEventListener('change', function(_, ref, val) {
          if(ignore20) return;
          node79.text(""+val);
        }));
        subs__.addSub(ref135.rebind());
        
        
        var ref136 = optionStyle;
        if(ref136.get() !== null) {
          node79.attr('class', ref136.get());
          subs__.addSub(ref136.addEventListener('change', function(_, ref, val) {
            node79.attr('class', val);
          }));
          
        }
        subs__.addSub(ref136.rebind());
        
        var ref137 = optionValue;
        if(ref137.get() !== null) {
          node79.attr('value', ref137.get());
          subs__.addSub(ref137.addEventListener('change', function(_, ref, val) {
            node79.attr('value', val);
          }));
          
        }
        subs__.addSub(ref137.rebind());
        
        var ref138 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
        if(ref138.get() !== null) {
          node79.attr('selected', ref138.get());
          subs__.addSub(ref138.addEventListener('change', function(_, ref, val) {
            node79.attr('selected', val);
          }));
          subs__.addSub(value.addEventListener('change', function() {
            node79.attr('selected', value.get() == optionValue.get() ? "selected" : "");
          }));
          subs__.addSub(optionValue.addEventListener('change', function() {
            node79.attr('selected', value.get() == optionValue.get() ? "selected" : "");
          }));
          
        }
        subs__.addSub(ref138.rebind());
        
        iternode9.append(node79);
        
        var oldNodes = iternode9;
        iternode9 = iternode9.contents();
        oldNodes.replaceWith(iternode9);
        
        
      }());
    }
    mobl.delayedUpdateScrollers();
    subs__.addSub(list9.addEventListener('change', function() { listSubs9.unsubscribe(); renderList9(true); }));
    subs__.addSub(options.addEventListener('change', function() { listSubs9.unsubscribe(); renderList9(true); }));
  });
};
renderList9();

root158.append(sel);
var result__ = sel.append(sel.children().eq(0).children());
callback(root158); return subs__;


return subs__;
};
mobl.ui.generic.tabbarStyle = 'mobl__ui__generic__tabbarStyle';
mobl.ui.generic.inActiveTabButtonStyle = 'mobl__ui__generic__inActiveTabButtonStyle';
mobl.ui.generic.activeTabButtonStyle = 'mobl__ui__generic__activeTabButtonStyle';
mobl.ui.generic.inActiveTabStyle = 'mobl__ui__generic__inActiveTabStyle';
mobl.ui.generic.activeTabStyle = 'mobl__ui__generic__activeTabStyle';

mobl.ui.generic.tabSet = function(tabs, activeTab, screenContextId, elements, callback) {
var root159 = $("<span>");
var subs__ = new mobl.CompSubscription();
var result__ = activeTab.get() == null;
if(result__) {
  var result__ = tabs.get().get(0)._1;
  activeTab.set(result__);
  
  var s = mobl.ref("");
  var nodes98 = $("<span>");
  root159.append(nodes98);
  subs__.addSub((mobl.block)(mobl.ref(mobl.ui.generic.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root160 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node80 = mobl.loadingSpan();
    root160.append(node80);
    var list10;
    var listSubs10 = new mobl.CompSubscription();
    subs__.addSub(listSubs10);
    var renderList10 = function() {
      var subs__ = listSubs10;
      list10 = tabs.get();
      list10.list(function(results10) {
        node80.empty();
        for(var i10 = 0; i10 < results10.length; i10++) {
          (function() {
            var iternode10 = $("<span>");
            node80.append(iternode10);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results10), i10), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results10), i10), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results10), i10), "_3");
            var result__ = activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle;
            var tmp53 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp53.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp53.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeTabButtonStyle).addEventListener('change', function() {
              tmp53.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp53.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            
            var result__ = function(event, callback) {
                             var result__ = tabName.get();
                             activeTab.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp52 = mobl.ref(result__);
            
            var nodes99 = $("<span>");
            iternode10.append(nodes99);
            subs__.addSub((mobl.span)(tmp53, mobl.ref(null), tmp52, mobl.ref(null), function(_, callback) {
              var root161 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes100 = $("<span>");
              root161.append(nodes100);
              subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root162 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root162); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes100;
                nodes100 = node.contents();
                oldNodes.replaceWith(nodes100);
              }));
              callback(root161); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes99;
              nodes99 = node.contents();
              oldNodes.replaceWith(nodes99);
            }));
            
            var oldNodes = iternode10;
            iternode10 = iternode10.contents();
            oldNodes.replaceWith(iternode10);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list10.addEventListener('change', function() { listSubs10.unsubscribe(); renderList10(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs10.unsubscribe(); renderList10(true); }));
      });
    };
    renderList10();
    
    callback(root160); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes98;
    nodes98 = node.contents();
    oldNodes.replaceWith(nodes98);
  }));
  
  var node81 = mobl.loadingSpan();
  root159.append(node81);
  var list11;
  var listSubs11 = new mobl.CompSubscription();
  subs__.addSub(listSubs11);
  var renderList11 = function() {
    var subs__ = listSubs11;
    list11 = tabs.get();
    list11.list(function(results11) {
      node81.empty();
      for(var i11 = 0; i11 < results11.length; i11++) {
        (function() {
          var iternode11 = $("<span>");
          node81.append(iternode11);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results11), i11), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results11), i11), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results11), i11), "_3");
          var result__ = activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle;
          var tmp54 = mobl.ref(result__);
          subs__.addSub(activeTab.addEventListener('change', function() {
            tmp54.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp54.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.activeTabStyle).addEventListener('change', function() {
            tmp54.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabStyle).addEventListener('change', function() {
            tmp54.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          
          var nodes101 = $("<span>");
          iternode11.append(nodes101);
          subs__.addSub((mobl.block)(tmp54, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root163 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes102 = $("<span>");
            root163.append(nodes102);
            subs__.addSub((mobl.screenContext)(screenContextId, function(_, callback) {
              var root164 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes103 = $("<span>");
              root164.append(nodes103);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl32();
              }));
              
              function renderControl32() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root165 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root165); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes103;
                  nodes103 = node.contents();
                  oldNodes.replaceWith(nodes103);
                }));
              }
              renderControl32();
              callback(root164); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes102;
              nodes102 = node.contents();
              oldNodes.replaceWith(nodes102);
            }));
            callback(root163); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes101;
            nodes101 = node.contents();
            oldNodes.replaceWith(nodes101);
          }));
          
          var oldNodes = iternode11;
          iternode11 = iternode11.contents();
          oldNodes.replaceWith(iternode11);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list11.addEventListener('change', function() { listSubs11.unsubscribe(); renderList11(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs11.unsubscribe(); renderList11(true); }));
    });
  };
  renderList11();
  
  callback(root159); return subs__;
  
  
} else {
  {
    
    var s = mobl.ref("");
    var nodes98 = $("<span>");
    root159.append(nodes98);
    subs__.addSub((mobl.block)(mobl.ref(mobl.ui.generic.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root160 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node80 = mobl.loadingSpan();
      root160.append(node80);
      var list10;
      var listSubs10 = new mobl.CompSubscription();
      subs__.addSub(listSubs10);
      var renderList10 = function() {
        var subs__ = listSubs10;
        list10 = tabs.get();
        list10.list(function(results10) {
          node80.empty();
          for(var i10 = 0; i10 < results10.length; i10++) {
            (function() {
              var iternode10 = $("<span>");
              node80.append(iternode10);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results10), i10), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results10), i10), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results10), i10), "_3");
              var result__ = activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle;
              var tmp53 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp53.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp53.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(mobl.ui.generic.activeTabButtonStyle).addEventListener('change', function() {
                tmp53.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp53.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp52 = mobl.ref(result__);
              
              var nodes99 = $("<span>");
              iternode10.append(nodes99);
              subs__.addSub((mobl.span)(tmp53, mobl.ref(null), tmp52, mobl.ref(null), function(_, callback) {
                var root161 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes100 = $("<span>");
                root161.append(nodes100);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root162 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root162); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes100;
                  nodes100 = node.contents();
                  oldNodes.replaceWith(nodes100);
                }));
                callback(root161); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes99;
                nodes99 = node.contents();
                oldNodes.replaceWith(nodes99);
              }));
              
              var oldNodes = iternode10;
              iternode10 = iternode10.contents();
              oldNodes.replaceWith(iternode10);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list10.addEventListener('change', function() { listSubs10.unsubscribe(); renderList10(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs10.unsubscribe(); renderList10(true); }));
        });
      };
      renderList10();
      
      callback(root160); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes98;
      nodes98 = node.contents();
      oldNodes.replaceWith(nodes98);
    }));
    
    var node81 = mobl.loadingSpan();
    root159.append(node81);
    var list11;
    var listSubs11 = new mobl.CompSubscription();
    subs__.addSub(listSubs11);
    var renderList11 = function() {
      var subs__ = listSubs11;
      list11 = tabs.get();
      list11.list(function(results11) {
        node81.empty();
        for(var i11 = 0; i11 < results11.length; i11++) {
          (function() {
            var iternode11 = $("<span>");
            node81.append(iternode11);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results11), i11), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results11), i11), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results11), i11), "_3");
            var result__ = activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle;
            var tmp54 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp54.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp54.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeTabStyle).addEventListener('change', function() {
              tmp54.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabStyle).addEventListener('change', function() {
              tmp54.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
            }));
            
            var nodes101 = $("<span>");
            iternode11.append(nodes101);
            subs__.addSub((mobl.block)(tmp54, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root163 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes102 = $("<span>");
              root163.append(nodes102);
              subs__.addSub((mobl.screenContext)(screenContextId, function(_, callback) {
                var root164 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes103 = $("<span>");
                root164.append(nodes103);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl32();
                }));
                
                function renderControl32() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root165 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root165); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes103;
                    nodes103 = node.contents();
                    oldNodes.replaceWith(nodes103);
                  }));
                }
                renderControl32();
                callback(root164); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes102;
                nodes102 = node.contents();
                oldNodes.replaceWith(nodes102);
              }));
              callback(root163); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes101;
              nodes101 = node.contents();
              oldNodes.replaceWith(nodes101);
            }));
            
            var oldNodes = iternode11;
            iternode11 = iternode11.contents();
            oldNodes.replaceWith(iternode11);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list11.addEventListener('change', function() { listSubs11.unsubscribe(); renderList11(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs11.unsubscribe(); renderList11(true); }));
      });
    };
    renderList11();
    
    callback(root159); return subs__;
    
    
  }
}
return subs__;
};
mobl.ui.generic.searchboxStyle = 'mobl__ui__generic__searchboxStyle';
mobl.ui.generic.searchBoxInputStyle = 'mobl__ui__generic__searchBoxInputStyle';

mobl.ui.generic.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
var root166 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node82 = $("<div>");

var ref143 = mobl.ref(mobl.ui.generic.searchboxStyle);
if(ref143.get() !== null) {
  node82.attr('class', ref143.get());
  subs__.addSub(ref143.addEventListener('change', function(_, ref, val) {
    node82.attr('class', val);
  }));
  
}
subs__.addSub(ref143.rebind());


var node83 = $("<input>");
node83.attr('type', "search");

var ref140 = mobl.ref(mobl.ui.generic.searchBoxInputStyle);
if(ref140.get() !== null) {
  node83.attr('class', ref140.get());
  subs__.addSub(ref140.addEventListener('change', function(_, ref, val) {
    node83.attr('class', val);
  }));
  
}
subs__.addSub(ref140.rebind());

var ref141 = placeholder;
if(ref141.get() !== null) {
  node83.attr('placeholder', ref141.get());
  subs__.addSub(ref141.addEventListener('change', function(_, ref, val) {
    node83.attr('placeholder', val);
  }));
  
}
subs__.addSub(ref141.rebind());

var ref142 = s;
node83.val(""+ref142.get());
var ignore21 = false;
subs__.addSub(ref142.addEventListener('change', function(_, ref, val) {
  if(ignore21) return;
  node83.val(""+val);
}));
subs__.addSub(ref142.rebind());

subs__.addSub(mobl.domBind(node83, 'keyup change', function() {
  ignore21 = true;
  s.set(mobl.stringTomobl__String(node83.val()));
  ignore21 = false;
}));


var val59 = onsearch.get();
if(val59 !== null) {
  subs__.addSub(mobl.domBind(node83, 'change', val59));
}

var val60 = onkeyup.get();
if(val60 !== null) {
  subs__.addSub(mobl.domBind(node83, 'keyup', val60));
}
node83.attr('autocorrect', false);
node83.attr('autocapitalize', false);
node83.attr('autocomplete', false);

node82.append(node83);
root166.append(node82);
callback(root166); return subs__;


return subs__;
};
mobl.ui.generic.contextMenuStyle = 'mobl__ui__generic__contextMenuStyle';
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';

mobl.ui.generic.contextMenu = function(elements, callback) {
var root167 = $("<span>");
var subs__ = new mobl.CompSubscription();

var menu = $("<div>");

var ref144 = mobl.ref(mobl.ui.generic.contextMenuStyle);
if(ref144.get() !== null) {
  menu.attr('class', ref144.get());
  subs__.addSub(ref144.addEventListener('change', function(_, ref, val) {
    menu.attr('class', val);
  }));
  
}
subs__.addSub(ref144.rebind());

var nodes104 = $("<span>");
menu.append(nodes104);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl33();
}));

function renderControl33() {
  subs__.addSub((elements)(function(elements, callback) {
    var root168 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root168); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes104;
    nodes104 = node.contents();
    oldNodes.replaceWith(nodes104);
  }));
}
renderControl33();
root167.append(menu);
var result__ = menu.hide();

var img = $("<img>");
img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
img.attr('style', "float: right;");

var val61 = function(event, callback) {
              var result__ = img.parent();
              var target = result__;
              var result__ = target.css("position", "relative");
              var result__ = img.hide();
              var result__ = menu.css("right", "5px");
              var result__ = menu.css("top", "5px");
              var result__ = menu.show();
              mobl.sleep(500, function(result__) {
                var tmp95 = result__;
                var result__ = mobl.$("body").bind("tap", removeMenu);
                if(callback && callback.apply) callback(); return;
              });
            };
if(val61 !== null) {
  subs__.addSub(mobl.domBind(img, 'tap', val61));
}

root167.append(img);

var removeMenu = function(evt) {
   var __this = this;
  menu.hide();
  img.show();
  mobl.$("body").unbind("tap", removeMenu);
};


callback(root167); return subs__;



return subs__;
};

mobl.ui.generic.masterDetail = function(items, masterItem, detail, elements, callback) {
var root169 = $("<span>");
var subs__ = new mobl.CompSubscription();
var result__ = mobl.window.get().innerWidth > 500;
var tmp76 = mobl.ref(result__);
subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
  tmp76.set(mobl.window.get().innerWidth > 500);
}));


var node84 = $("<span>");
root169.append(node84);
var condSubs19 = new mobl.CompSubscription();
subs__.addSub(condSubs19);
var oldValue19;
var renderCond19 = function() {
  var value43 = tmp76.get();
  if(oldValue19 === value43) return;
  oldValue19 = value43;
  var subs__ = condSubs19;
  subs__.unsubscribe();
  node84.empty();
  if(value43) {
    items.get().one(function(result__) {
      var tmp96 = result__;
      var current = mobl.ref(result__);
      
      var node85 = $("<div>");
      node85.attr('width', "100%");
      
      
      var node86 = $("<div>");
      node86.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes107 = $("<span>");
      node86.append(nodes107);
      subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
        var root172 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node89 = mobl.loadingSpan();
        root172.append(node89);
        var list12;
        var listSubs12 = new mobl.CompSubscription();
        subs__.addSub(listSubs12);
        var renderList12 = function() {
          var subs__ = listSubs12;
          list12 = items.get();
          list12.list(function(results12) {
            node89.empty();
            for(var i12 = 0; i12 < results12.length; i12++) {
              (function() {
                var iternode12 = $("<span>");
                node89.append(iternode12);
                var it;
                it = mobl.ref(mobl.ref(results12), i12);
                var result__ = it.get() == current.get();
                var tmp61 = mobl.ref(result__);
                subs__.addSub(it.addEventListener('change', function() {
                  tmp61.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp61.set(it.get() == current.get());
                }));
                
                
                var node90 = $("<span>");
                iternode12.append(node90);
                var condSubs21 = new mobl.CompSubscription();
                subs__.addSub(condSubs21);
                var oldValue21;
                var renderCond21 = function() {
                  var value45 = tmp61.get();
                  if(oldValue21 === value45) return;
                  oldValue21 = value45;
                  var subs__ = condSubs21;
                  subs__.unsubscribe();
                  node90.empty();
                  if(value45) {
                    var nodes108 = $("<span>");
                    node90.append(nodes108);
                    subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.selectedItemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                      var root173 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes109 = $("<span>");
                      root173.append(nodes109);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl35();
                      }));
                      
                      function renderControl35() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root174 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root174); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes109;
                          nodes109 = node.contents();
                          oldNodes.replaceWith(nodes109);
                        }));
                      }
                      renderControl35();
                      callback(root173); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes108;
                      nodes108 = node.contents();
                      oldNodes.replaceWith(nodes108);
                    }));
                    
                    
                  } else {
                    var result__ = function(event, callback) {
                                     var result__ = it.get();
                                     current.set(result__);
                                     var result__ = mobl.ui.generic.scrollUp();
                                     if(callback && callback.apply) callback(); return;
                                   };
                    var tmp59 = mobl.ref(result__);
                    
                    var nodes110 = $("<span>");
                    node90.append(nodes110);
                    subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp59, mobl.ref(null), mobl.ref(true), function(_, callback) {
                      var root175 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes111 = $("<span>");
                      root175.append(nodes111);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl36();
                      }));
                      
                      function renderControl36() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root176 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root176); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes111;
                          nodes111 = node.contents();
                          oldNodes.replaceWith(nodes111);
                        }));
                      }
                      renderControl36();
                      callback(root175); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes110;
                      nodes110 = node.contents();
                      oldNodes.replaceWith(nodes110);
                    }));
                    
                    
                  }
                };
                renderCond21();
                subs__.addSub(tmp61.addEventListener('change', function() {
                  renderCond21();
                }));
                
                
                var oldNodes = iternode12;
                iternode12 = iternode12.contents();
                oldNodes.replaceWith(iternode12);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list12.addEventListener('change', function() { listSubs12.unsubscribe(); renderList12(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs12.unsubscribe(); renderList12(true); }));
          });
        };
        renderList12();
        
        callback(root172); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes107;
        nodes107 = node.contents();
        oldNodes.replaceWith(nodes107);
      }));
      node85.append(node86);
      
      var node87 = $("<div>");
      node87.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
      
      
      var node88 = $("<span>");
      node87.append(node88);
      var condSubs20 = new mobl.CompSubscription();
      subs__.addSub(condSubs20);
      var oldValue20;
      var renderCond20 = function() {
        var value44 = current.get();
        if(oldValue20 === value44) return;
        oldValue20 = value44;
        var subs__ = condSubs20;
        subs__.unsubscribe();
        node88.empty();
        if(value44) {
          var nodes105 = $("<span>");
          node88.append(nodes105);
          subs__.addSub(detail.addEventListener('change', function() {
            renderControl34();
          }));
          
          function renderControl34() {
            subs__.addSub((detail.get())(current, function(elements, callback) {
              var root170 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root170); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes105;
              nodes105 = node.contents();
              oldNodes.replaceWith(nodes105);
            }));
          }
          renderControl34();
          
          
        } else {
          var result__ = mobl._("Select an item on the left", []);
          var tmp62 = mobl.ref(result__);
          
          var nodes106 = $("<span>");
          node88.append(nodes106);
          subs__.addSub((mobl.label)(tmp62, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root171 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root171); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes106;
            nodes106 = node.contents();
            oldNodes.replaceWith(nodes106);
          }));
          
          
        }
      };
      renderCond20();
      subs__.addSub(current.addEventListener('change', function() {
        renderCond20();
      }));
      
      node85.append(node87);
      node84.append(node85);
      
      
      
      
      
      
    });
  } else {
    var nodes112 = $("<span>");
    node84.append(nodes112);
    subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
      var root177 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node91 = mobl.loadingSpan();
      root177.append(node91);
      var list13;
      var listSubs13 = new mobl.CompSubscription();
      subs__.addSub(listSubs13);
      var renderList13 = function() {
        var subs__ = listSubs13;
        list13 = items.get();
        list13.list(function(results13) {
          node91.empty();
          for(var i13 = 0; i13 < results13.length; i13++) {
            (function() {
              var iternode13 = $("<span>");
              node91.append(iternode13);
              var it;
              it = mobl.ref(mobl.ref(results13), i13);
              var result__ = function(event, callback) {
                               mobl.call('mobl.ui.generic.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide"), mobl.ref(null)], function(result__) {
                               var tmp97 = result__;
                               if(callback && callback.apply) callback(); return;
                               });
                             };
              var tmp55 = mobl.ref(result__);
              
              var nodes113 = $("<span>");
              iternode13.append(nodes113);
              subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp55, mobl.ref(null), mobl.ref(false), function(_, callback) {
                var root178 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes114 = $("<span>");
                root178.append(nodes114);
                subs__.addSub(masterItem.addEventListener('change', function() {
                  renderControl37();
                }));
                
                function renderControl37() {
                  subs__.addSub((masterItem.get())(it, function(elements, callback) {
                    var root179 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root179); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes114;
                    nodes114 = node.contents();
                    oldNodes.replaceWith(nodes114);
                  }));
                }
                renderControl37();
                callback(root178); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes113;
                nodes113 = node.contents();
                oldNodes.replaceWith(nodes113);
              }));
              
              var oldNodes = iternode13;
              iternode13 = iternode13.contents();
              oldNodes.replaceWith(iternode13);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list13.addEventListener('change', function() { listSubs13.unsubscribe(); renderList13(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs13.unsubscribe(); renderList13(true); }));
        });
      };
      renderList13();
      
      callback(root177); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes112;
      nodes112 = node.contents();
      oldNodes.replaceWith(nodes112);
    }));
    
    
  }
};
renderCond19();
subs__.addSub(tmp76.addEventListener('change', function() {
  renderCond19();
}));

callback(root169); return subs__;

return subs__;
};

mobl.ui.generic.detailScreen = function(it, detail, callback, screenCallback) {
var root180 = $("<div>");
var subs__ = new mobl.CompSubscription();
var result__ = mobl._("Detail", []);
var tmp58 = mobl.ref(result__);

var nodes115 = $("<span>");
root180.append(nodes115);
subs__.addSub((mobl.ui.generic.header)(tmp58, mobl.ref(false), mobl.ref(null), function(_, callback) {
  var root181 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(screenCallback) screenCallback();
                   return;
                   if(callback && callback.apply) callback(); return;
                 };
  var tmp57 = mobl.ref(result__);
  
  var result__ = mobl._("Back", []);
  var tmp56 = mobl.ref(result__);
  
  var nodes116 = $("<span>");
  root181.append(nodes116);
  subs__.addSub((mobl.ui.generic.backButton)(tmp56, mobl.ref(mobl.ui.generic.backButtonStyle), mobl.ref(mobl.ui.generic.backButtonPushedStyle), tmp57, function(_, callback) {
    var root182 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root182); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes116;
    nodes116 = node.contents();
    oldNodes.replaceWith(nodes116);
  }));
  callback(root181); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes115;
  nodes115 = node.contents();
  oldNodes.replaceWith(nodes115);
}));
var nodes117 = $("<span>");
root180.append(nodes117);
subs__.addSub(detail.addEventListener('change', function() {
  renderControl38();
}));

function renderControl38() {
  subs__.addSub((detail.get())(it, function(elements, callback) {
    var root183 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root183); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes117;
    nodes117 = node.contents();
    oldNodes.replaceWith(nodes117);
  }));
}
renderControl38();
callback(root180); return subs__;


return subs__;
};
mobl.ui.generic.selectedItemStyle = 'mobl__ui__generic__selectedItemStyle';

mobl.ui.generic.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
var root184 = $("<span>");
var subs__ = new mobl.CompSubscription();

var selected = mobl.ref(null);
var nodes118 = $("<span>");
root184.append(nodes118);
subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
  var root185 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node92 = mobl.loadingSpan();
  root185.append(node92);
  var list14;
  var listSubs14 = new mobl.CompSubscription();
  subs__.addSub(listSubs14);
  var renderList14 = function() {
    var subs__ = listSubs14;
    list14 = coll.get();
    list14.list(function(results14) {
      node92.empty();
      for(var i14 = 0; i14 < results14.length; i14++) {
        (function() {
          var iternode14 = $("<span>");
          node92.append(iternode14);
          var it;
          it = mobl.ref(mobl.ref(results14), i14);
          var result__ = it.get() == selected.get();
          var tmp64 = mobl.ref(result__);
          subs__.addSub(it.addEventListener('change', function() {
            tmp64.set(it.get() == selected.get());
          }));
          subs__.addSub(selected.addEventListener('change', function() {
            tmp64.set(it.get() == selected.get());
          }));
          
          
          var node93 = $("<span>");
          iternode14.append(node93);
          var condSubs22 = new mobl.CompSubscription();
          subs__.addSub(condSubs22);
          var oldValue22;
          var renderCond22 = function() {
            var value46 = tmp64.get();
            if(oldValue22 === value46) return;
            oldValue22 = value46;
            var subs__ = condSubs22;
            subs__.unsubscribe();
            node93.empty();
            if(value46) {
              var nodes119 = $("<span>");
              node93.append(nodes119);
              subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                var root186 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes120 = $("<span>");
                root186.append(nodes120);
                subs__.addSub(zoomCtrl.addEventListener('change', function() {
                  renderControl39();
                }));
                
                function renderControl39() {
                  subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                    var root187 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root187); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes120;
                    nodes120 = node.contents();
                    oldNodes.replaceWith(nodes120);
                  }));
                }
                renderControl39();
                callback(root186); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes119;
                nodes119 = node.contents();
                oldNodes.replaceWith(nodes119);
              }));
              
              
            } else {
              var result__ = function(event, callback) {
                               var result__ = it.get();
                               selected.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp63 = mobl.ref(result__);
              
              var nodes121 = $("<span>");
              node93.append(nodes121);
              subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp63, mobl.ref(null), mobl.ref(true), function(_, callback) {
                var root188 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes122 = $("<span>");
                root188.append(nodes122);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl40();
                }));
                
                function renderControl40() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root189 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root189); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes122;
                    nodes122 = node.contents();
                    oldNodes.replaceWith(nodes122);
                  }));
                }
                renderControl40();
                callback(root188); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes121;
                nodes121 = node.contents();
                oldNodes.replaceWith(nodes121);
              }));
              
              
            }
          };
          renderCond22();
          subs__.addSub(tmp64.addEventListener('change', function() {
            renderCond22();
          }));
          
          
          var oldNodes = iternode14;
          iternode14 = iternode14.contents();
          oldNodes.replaceWith(iternode14);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list14.addEventListener('change', function() { listSubs14.unsubscribe(); renderList14(true); }));
      subs__.addSub(coll.addEventListener('change', function() { listSubs14.unsubscribe(); renderList14(true); }));
    });
  };
  renderList14();
  
  callback(root185); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes118;
  nodes118 = node.contents();
  oldNodes.replaceWith(nodes118);
}));
callback(root184); return subs__;

return subs__;
};
mobl.ui.generic.loadMoreStyle = 'mobl__ui__generic__loadMoreStyle';

mobl.ui.generic.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
var root190 = $("<span>");
var subs__ = new mobl.CompSubscription();

var n = mobl.ref(initialItems.get());
coll.get().count(function(result__) {
  var tmp98 = result__;
  var total = mobl.ref(result__);
  var result__ = coll.get().limit(n.get());
  var tmp65 = mobl.ref(result__);
  subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
    tmp65.set(coll.get().limit(n.get()));
  }));
  subs__.addSub(coll.addEventListener('change', function() {
    tmp65.set(coll.get().limit(n.get()));
  }));
  subs__.addSub(n.addEventListener('change', function() {
    tmp65.set(coll.get().limit(n.get()));
  }));
  
  
  var node94 = mobl.loadingSpan();
  root190.append(node94);
  var list15;
  var listSubs15 = new mobl.CompSubscription();
  subs__.addSub(listSubs15);
  var renderList15 = function() {
    var subs__ = listSubs15;
    list15 = tmp65.get();
    list15.list(function(results15) {
      node94.empty();
      for(var i15 = 0; i15 < results15.length; i15++) {
        (function() {
          var iternode15 = $("<span>");
          node94.append(iternode15);
          var it;
          it = mobl.ref(mobl.ref(results15), i15);
          var nodes123 = $("<span>");
          iternode15.append(nodes123);
          subs__.addSub(listCtrl.addEventListener('change', function() {
            renderControl41();
          }));
          
          function renderControl41() {
            subs__.addSub((listCtrl.get())(it, function(elements, callback) {
              var root191 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root191); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes123;
              nodes123 = node.contents();
              oldNodes.replaceWith(nodes123);
            }));
          }
          renderControl41();
          
          var oldNodes = iternode15;
          iternode15 = iternode15.contents();
          oldNodes.replaceWith(iternode15);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list15.addEventListener('change', function() { listSubs15.unsubscribe(); renderList15(true); }));
      subs__.addSub(tmp65.addEventListener('change', function() { listSubs15.unsubscribe(); renderList15(true); }));
    });
  };
  renderList15();
  
  var result__ = n.get() < total.get();
  var tmp67 = mobl.ref(result__);
  subs__.addSub(n.addEventListener('change', function() {
    tmp67.set(n.get() < total.get());
  }));
  subs__.addSub(total.addEventListener('change', function() {
    tmp67.set(n.get() < total.get());
  }));
  
  
  var node95 = $("<span>");
  root190.append(node95);
  var condSubs23 = new mobl.CompSubscription();
  subs__.addSub(condSubs23);
  var oldValue23;
  var renderCond23 = function() {
    var value47 = tmp67.get();
    if(oldValue23 === value47) return;
    oldValue23 = value47;
    var subs__ = condSubs23;
    subs__.unsubscribe();
    node95.empty();
    if(value47) {
      var result__ = function(event, callback) {
                       var result__ = n.get() + step.get();
                       n.set(result__);
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp66 = mobl.ref(result__);
      
      var nodes124 = $("<span>");
      node95.append(nodes124);
      subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp66, mobl.ref(null), function(_, callback) {
        var root193 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes125 = $("<span>");
        root193.append(nodes125);
        subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root194 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root194); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes125;
          nodes125 = node.contents();
          oldNodes.replaceWith(nodes125);
        }));
        callback(root193); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes124;
        nodes124 = node.contents();
        oldNodes.replaceWith(nodes124);
      }));
      
      
    } else {
      
    }
  };
  renderCond23();
  subs__.addSub(tmp67.addEventListener('change', function() {
    renderCond23();
  }));
  
  callback(root190); return subs__;
  
  
});
return subs__;
};

mobl.ui.generic.markableList = function(items, elements, callback) {
var root195 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes126 = $("<span>");
root195.append(nodes126);
subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
  var root196 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node96 = mobl.loadingSpan();
  root196.append(node96);
  var list16;
  var listSubs16 = new mobl.CompSubscription();
  subs__.addSub(listSubs16);
  var renderList16 = function() {
    var subs__ = listSubs16;
    list16 = items.get();
    list16.list(function(results16) {
      node96.empty();
      for(var i16 = 0; i16 < results16.length; i16++) {
        (function() {
          var iternode16 = $("<span>");
          node96.append(iternode16);
          var checked;var it;
          checked = mobl.ref(mobl.ref(mobl.ref(results16), i16), "_1");it = mobl.ref(mobl.ref(mobl.ref(results16), i16), "_2");
          var nodes127 = $("<span>");
          iternode16.append(nodes127);
          subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
            var root197 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes128 = $("<span>");
            root197.append(nodes128);
            subs__.addSub((mobl.ui.generic.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
              var root198 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root198); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes128;
              nodes128 = node.contents();
              oldNodes.replaceWith(nodes128);
            }));
            callback(root197); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes127;
            nodes127 = node.contents();
            oldNodes.replaceWith(nodes127);
          }));
          
          var oldNodes = iternode16;
          iternode16 = iternode16.contents();
          oldNodes.replaceWith(iternode16);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list16.addEventListener('change', function() { listSubs16.unsubscribe(); renderList16(true); }));
      subs__.addSub(items.addEventListener('change', function() { listSubs16.unsubscribe(); renderList16(true); }));
    });
  };
  renderList16();
  
  callback(root196); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes126;
  nodes126 = node.contents();
  oldNodes.replaceWith(nodes126);
}));
callback(root195); return subs__;

return subs__;
};

mobl.ui.generic.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
var root199 = $("<div>");
var subs__ = new mobl.CompSubscription();

var items = mobl.ref([]);
var result__ = coll.get();
coll.get().list(function(coll39) {
  coll39 = coll39.reverse();
  function processOne3() {
    var it;
    it = coll39.pop();
    var result__ = items.get().push(new mobl.Tuple(false, it));
    
    if(coll39.length > 0) processOne3(); else rest3();
    
  }
  function rest3() {
    var nodes129 = $("<span>");
    root199.append(nodes129);
    subs__.addSub((mobl.ui.generic.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
      var root200 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = function(event, callback) {
                       var result__ = null;
                       if(callback && callback.apply) callback(result__);
                       return;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp68 = mobl.ref(result__);
      
      var result__ = mobl._("Back", []);
      var tmp69 = mobl.ref(result__);
      
      var nodes130 = $("<span>");
      root200.append(nodes130);
      subs__.addSub((mobl.ui.generic.backButton)(tmp69, mobl.ref(mobl.ui.generic.backButtonStyle), mobl.ref(mobl.ui.generic.backButtonPushedStyle), tmp68, function(_, callback) {
        var root201 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root201); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes130;
        nodes130 = node.contents();
        oldNodes.replaceWith(nodes130);
      }));
      var result__ = function(event, callback) {
                       var result__ = [];
                       var selected = result__;
                       var result__ = items.get();
                       items.get().list(function(coll38) {
                         coll38 = coll38.reverse();
                         function processOne2() {
                           var checked;var it;
                           var tmp100 = coll38.pop();
                           checked = tmp100._1;it = tmp100._2;
                           var result__ = checked;
                           if(result__) {
                             var result__ = selected.push(it);
                             
                             if(coll38.length > 0) processOne2(); else rest2();
                             
                           } else {
                             {
                               
                               if(coll38.length > 0) processOne2(); else rest2();
                               
                             }
                           }
                         }
                         function rest2() {
                           var result__ = selected;
                           if(screenCallback) screenCallback(result__);
                           return;
                           if(callback && callback.apply) callback(); return;
                         }
                         if(coll38.length > 0) processOne2(); else rest2();
                       });
                       
                     };
      var tmp71 = mobl.ref(result__);
      
      var nodes131 = $("<span>");
      root200.append(nodes131);
      subs__.addSub((mobl.ui.generic.button)(doneButtonLabel, mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp71, function(_, callback) {
        var root202 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root202); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes131;
        nodes131 = node.contents();
        oldNodes.replaceWith(nodes131);
      }));
      callback(root200); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes129;
      nodes129 = node.contents();
      oldNodes.replaceWith(nodes129);
    }));
    var nodes132 = $("<span>");
    root199.append(nodes132);
    subs__.addSub((mobl.ui.generic.markableList)(items, function(_, callback) {
      var root203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root203); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes132;
      nodes132 = node.contents();
      oldNodes.replaceWith(nodes132);
    }));
    callback(root199); return subs__;
    
    
  }
  if(coll39.length > 0) processOne3(); else rest3();
});

return subs__;
};

mobl.ui.generic.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
var root204 = $("<span>");
var subs__ = new mobl.CompSubscription();

var phrase = mobl.ref("");
var nodes133 = $("<span>");
root204.append(nodes133);
subs__.addSub((mobl.ui.generic.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
  var root205 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root205); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes133;
  nodes133 = node.contents();
  oldNodes.replaceWith(nodes133);
}));
var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
var tmp72 = mobl.ref(result__);
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
  tmp72.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
  tmp72.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(Ent.addEventListener('change', function() {
  tmp72.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(phrase.addEventListener('change', function() {
  tmp72.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(resultLimit.addEventListener('change', function() {
  tmp72.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));

var nodes134 = $("<span>");
root204.append(nodes134);
subs__.addSub((mobl.ui.generic.masterDetail)(tmp72, masterItem, detailItem, function(_, callback) {
  var root206 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root206); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes134;
  nodes134 = node.contents();
  oldNodes.replaceWith(nodes134);
}));
callback(root204); return subs__;


return subs__;
};
mobl.ui.generic.progressStyle = 'mobl__ui__generic__progressStyle';
mobl.ui.generic.startLoading = function(loadingMessage, style) {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + style + "'>" + loadingMessage + "</div>");
  
  mobl.$("body").prepend(loading);
};

mobl.ui.generic.endLoading = function() {
   var __this = this;
  mobl.$("#progress").remove();
};

(function(__ns) {
__ns.floatBox = function(top, right, bottom, left, elements, callback) {
                  var root928 = $("<span>");
                  var node280 = $("<div style=\"position: absolute;\">");
                  var nodes681 = $("<span>");
                  node280.append(nodes681);
                  mobl.ref(elements).addEventListener('change', function() {
                                                                  renderControl102();
                                                                });
                  function renderControl102 ( ) {
                    (elements)(function(elements, callback) {
                                 var root929 = $("<span>");
                                 callback(root929);
                                 return;
                               }, function(node) {
                                    var oldNodes = nodes681;
                                    nodes681 = node.contents();
                                    oldNodes.replaceWith(nodes681);
                                  });
                  }
                  renderControl102();
                  root928.append(node280);
                  var box = node280;
                  if(top.get() !== null)
                  box.css("top", "" + top.get() + "px");
                  if(right.get() !== null)
                  box.css("right", "" + right.get() + "px");
                  if(bottom.get() !== null)
                  box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                  if(left.get() !== null)
                  box.css("left", "" + left.get() + "px");
                  function updateLocation ( ) {
                    if(top.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + top.get() ) + "px");
                    }
                    if(bottom.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                    }
                  }
                  $(window).bind('scroll', updateLocation);
                  $(window).bind('resize', updateLocation);
                  callback(root928);
                  return;
                };
}(mobl.ui.generic));mobl.ui.generic.accordionStyle = 'mobl__ui__generic__accordionStyle';
mobl.ui.generic.activeSectionHeaderStyle = 'mobl__ui__generic__activeSectionHeaderStyle';
mobl.ui.generic.inActiveSectionHeaderStyle = 'mobl__ui__generic__inActiveSectionHeaderStyle';
mobl.ui.generic.activeSectionHeaderStyle = 'mobl__ui__generic__activeSectionHeaderStyle';
mobl.ui.generic.inActiveSectionHeaderStyle = 'mobl__ui__generic__inActiveSectionHeaderStyle';
mobl.ui.generic.inActiveSectionStyle = 'mobl__ui__generic__inActiveSectionStyle';
mobl.ui.generic.activeSectionStyle = 'mobl__ui__generic__activeSectionStyle';

mobl.ui.generic.accordion = function(sections, activeSection, elements, callback) {
var root207 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
var nodes135 = $("<span>");
root207.append(nodes135);
subs__.addSub((mobl.block)(mobl.ref(mobl.ui.generic.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
  var root208 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node97 = mobl.loadingSpan();
  root208.append(node97);
  var list17;
  var listSubs17 = new mobl.CompSubscription();
  subs__.addSub(listSubs17);
  var renderList17 = function() {
    var subs__ = listSubs17;
    list17 = sections.get();
    list17.list(function(results17) {
      node97.empty();
      for(var i17 = 0; i17 < results17.length; i17++) {
        (function() {
          var iternode17 = $("<span>");
          node97.append(iternode17);
          var sectionName;var sectionControl;
          sectionName = mobl.ref(mobl.ref(mobl.ref(results17), i17), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results17), i17), "_2");
          var result__ = activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle;
          var tmp74 = mobl.ref(result__);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp74.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp74.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.activeSectionHeaderStyle).addEventListener('change', function() {
            tmp74.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.inActiveSectionHeaderStyle).addEventListener('change', function() {
            tmp74.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
          }));
          
          var result__ = function(event, callback) {
                           var result__ = sectionName.get();
                           activeSection.set(result__);
                           if(callback && callback.apply) callback(); return;
                         };
          var tmp73 = mobl.ref(result__);
          
          var nodes136 = $("<span>");
          iternode17.append(nodes136);
          subs__.addSub((mobl.span)(tmp74, mobl.ref(null), tmp73, mobl.ref(null), function(_, callback) {
            var root209 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes137 = $("<span>");
            root209.append(nodes137);
            subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root210 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root210); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes137;
              nodes137 = node.contents();
              oldNodes.replaceWith(nodes137);
            }));
            callback(root209); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes136;
            nodes136 = node.contents();
            oldNodes.replaceWith(nodes136);
          }));
          var result__ = activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle;
          var tmp75 = mobl.ref(result__);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp75.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp75.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.activeSectionStyle).addEventListener('change', function() {
            tmp75.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.inActiveSectionStyle).addEventListener('change', function() {
            tmp75.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
          }));
          
          var nodes138 = $("<span>");
          iternode17.append(nodes138);
          subs__.addSub((mobl.block)(tmp75, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root211 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes139 = $("<span>");
            root211.append(nodes139);
            subs__.addSub(sectionControl.addEventListener('change', function() {
              renderControl42();
            }));
            
            function renderControl42() {
              subs__.addSub((sectionControl.get())(function(elements, callback) {
                var root212 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root212); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes139;
                nodes139 = node.contents();
                oldNodes.replaceWith(nodes139);
              }));
            }
            renderControl42();
            callback(root211); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes138;
            nodes138 = node.contents();
            oldNodes.replaceWith(nodes138);
          }));
          
          var oldNodes = iternode17;
          iternode17 = iternode17.contents();
          oldNodes.replaceWith(iternode17);
          
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list17.addEventListener('change', function() { listSubs17.unsubscribe(); renderList17(true); }));
      subs__.addSub(sections.addEventListener('change', function() { listSubs17.unsubscribe(); renderList17(true); }));
    });
  };
  renderList17();
  
  callback(root208); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes135;
  nodes135 = node.contents();
  oldNodes.replaceWith(nodes135);
}));
callback(root207); return subs__;

return subs__;
};
mobl.ui.generic.tableStyle = 'mobl__ui__generic__tableStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';

mobl.ui.generic.table = function(style, elements, callback) {
var root213 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node98 = $("<table>");

var ref145 = style;
if(ref145.get() !== null) {
  node98.attr('class', ref145.get());
  subs__.addSub(ref145.addEventListener('change', function(_, ref, val) {
    node98.attr('class', val);
  }));
  
}
subs__.addSub(ref145.rebind());

var nodes140 = $("<span>");
node98.append(nodes140);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl43();
}));

function renderControl43() {
  subs__.addSub((elements)(function(elements, callback) {
    var root214 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root214); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes140;
    nodes140 = node.contents();
    oldNodes.replaceWith(nodes140);
  }));
}
renderControl43();
root213.append(node98);
callback(root213); return subs__;


return subs__;
};

mobl.ui.generic.row = function(style, elements, callback) {
var root215 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node99 = $("<tr>");

var ref146 = style;
if(ref146.get() !== null) {
  node99.attr('class', ref146.get());
  subs__.addSub(ref146.addEventListener('change', function(_, ref, val) {
    node99.attr('class', val);
  }));
  
}
subs__.addSub(ref146.rebind());

var nodes141 = $("<span>");
node99.append(nodes141);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl44();
}));

function renderControl44() {
  subs__.addSub((elements)(function(elements, callback) {
    var root216 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root216); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes141;
    nodes141 = node.contents();
    oldNodes.replaceWith(nodes141);
  }));
}
renderControl44();
root215.append(node99);
callback(root215); return subs__;


return subs__;
};

mobl.ui.generic.cell = function(width, style, elements, callback) {
var root217 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node100 = $("<td>");

var ref147 = width;
if(ref147.get() !== null) {
  node100.attr('width', ref147.get());
  subs__.addSub(ref147.addEventListener('change', function(_, ref, val) {
    node100.attr('width', val);
  }));
  
}
subs__.addSub(ref147.rebind());

var ref148 = style;
if(ref148.get() !== null) {
  node100.attr('class', ref148.get());
  subs__.addSub(ref148.addEventListener('change', function(_, ref, val) {
    node100.attr('class', val);
  }));
  
}
subs__.addSub(ref148.rebind());

var nodes142 = $("<span>");
node100.append(nodes142);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl45();
}));

function renderControl45() {
  subs__.addSub((elements)(function(elements, callback) {
    var root218 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root218); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes142;
    nodes142 = node.contents();
    oldNodes.replaceWith(nodes142);
  }));
}
renderControl45();
root217.append(node100);
callback(root217); return subs__;


return subs__;
};

mobl.ui.generic.col = function(width, style, elements, callback) {
var root219 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node101 = $("<td>");

var ref149 = width;
if(ref149.get() !== null) {
  node101.attr('width', ref149.get());
  subs__.addSub(ref149.addEventListener('change', function(_, ref, val) {
    node101.attr('width', val);
  }));
  
}
subs__.addSub(ref149.rebind());

var ref150 = style;
if(ref150.get() !== null) {
  node101.attr('class', ref150.get());
  subs__.addSub(ref150.addEventListener('change', function(_, ref, val) {
    node101.attr('class', val);
  }));
  
}
subs__.addSub(ref150.rebind());

var nodes143 = $("<span>");
node101.append(nodes143);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl46();
}));

function renderControl46() {
  subs__.addSub((elements)(function(elements, callback) {
    var root220 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root220); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes143;
    nodes143 = node.contents();
    oldNodes.replaceWith(nodes143);
  }));
}
renderControl46();
root219.append(node101);
callback(root219); return subs__;


return subs__;
};

mobl.ui.generic.headerCol = function(width, style, elements, callback) {
var root221 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node102 = $("<td>");

var ref151 = width;
if(ref151.get() !== null) {
  node102.attr('width', ref151.get());
  subs__.addSub(ref151.addEventListener('change', function(_, ref, val) {
    node102.attr('width', val);
  }));
  
}
subs__.addSub(ref151.rebind());

var ref152 = style;
if(ref152.get() !== null) {
  node102.attr('class', ref152.get());
  subs__.addSub(ref152.addEventListener('change', function(_, ref, val) {
    node102.attr('class', val);
  }));
  
}
subs__.addSub(ref152.rebind());


var node103 = $("<strong>");

var nodes144 = $("<span>");
node103.append(nodes144);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl47();
}));

function renderControl47() {
  subs__.addSub((elements)(function(elements, callback) {
    var root222 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root222); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes144;
    nodes144 = node.contents();
    oldNodes.replaceWith(nodes144);
  }));
}
renderControl47();
node102.append(node103);
root221.append(node102);
callback(root221); return subs__;



return subs__;
};
(function(__ns) {
setTimeout(function() {
             scrollTo(0, -1);
           }, 250);
__ns.scrollUp = function() {
                  scrollTo(0, 0);
                };
__ns.setupScrollers = function() {
                        setTimeout(function() {
                                     var allScrollers = $("div.scroller");
                                     for(var i = 0; i < allScrollers.length; i++)
                                     {
                                       var scroller = allScrollers.eq(i);
                                       if(!scroller.data("scroller"))
                                       {
                                         scroller.data("scroller", new TouchScroll(scroller[0],{
                                                                                                 elastic: true
                                                                                               }));
                                       }
                                     }
                                   }, 250);
                      };
}(mobl.ui.generic));