mobl.provides('shopping');
mobl.provides('mobl.ui');
mobl.provides('mobl');
mobl.provides('mobl.ui.generic');
mobl.provides('shopping');
persistence.debug = false;
shopping.editItem = function(it, callback, screenCallback) {
var root223 = $("<div>");
var subs__ = new mobl.CompSubscription();
var nodes145 = $("<span>");
root223.append(nodes145);
subs__.addSub((mobl.ui.generic.header)(mobl.ref("Edit item"), mobl.ref(false), mobl.ref(null), function(_, callback) {
  var root224 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(screenCallback) screenCallback();
                   return;
                   if(callback && callback.apply) callback(); return;
                 };
  var tmp102 = mobl.ref(result__);
  
  var nodes146 = $("<span>");
  root224.append(nodes146);
  subs__.addSub((mobl.ui.generic.button)(mobl.ref("Done"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp102, function(_, callback) {
    var root225 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root225); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes146;
    nodes146 = node.contents();
    oldNodes.replaceWith(nodes146);
  }));
  callback(root224); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes145;
  nodes145 = node.contents();
  oldNodes.replaceWith(nodes145);
}));
var nodes147 = $("<span>");
root223.append(nodes147);
subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
  var root226 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes148 = $("<span>");
  root226.append(nodes148);
  subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root227 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes149 = $("<span>");
    root227.append(nodes149);
    subs__.addSub((mobl.ui.generic.textField)(mobl.ref(it, 'name'), mobl.ref("Name"), mobl.ref(null), mobl.ref("text"), mobl.ref(null), mobl.ref(mobl.ui.generic.textFieldStyle), mobl.ref(mobl.ui.generic.textFieldInvalidStyle), mobl.ref(false), mobl.ref(true), mobl.ref(true), mobl.ref(true), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root228 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root228); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes149;
      nodes149 = node.contents();
      oldNodes.replaceWith(nodes149);
    }));
    callback(root227); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes148;
    nodes148 = node.contents();
    oldNodes.replaceWith(nodes148);
  }));
  var nodes150 = $("<span>");
  root226.append(nodes150);
  subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root229 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes151 = $("<span>");
    root229.append(nodes151);
    subs__.addSub((mobl.ui.generic.checkBox)(mobl.ref(it, 'favorite'), mobl.ref("favorite"), mobl.ref(null), function(_, callback) {
      var root230 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root230); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes151;
      nodes151 = node.contents();
      oldNodes.replaceWith(nodes151);
    }));
    callback(root229); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes150;
    nodes150 = node.contents();
    oldNodes.replaceWith(nodes150);
  }));
  var nodes152 = $("<span>");
  root226.append(nodes152);
  subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root231 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes153 = $("<span>");
    root231.append(nodes153);
    subs__.addSub((mobl.ui.generic.numField)(mobl.ref(it, 'order'), mobl.ref(null), mobl.ref("Shop order (0 = early, 999=late)"), mobl.ref(null), mobl.ref(mobl.ui.generic.textFieldStyle), mobl.ref(mobl.ui.generic.textFieldInvalidStyle), mobl.ref(false), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root232 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root232); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes153;
      nodes153 = node.contents();
      oldNodes.replaceWith(nodes153);
    }));
    callback(root231); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes152;
    nodes152 = node.contents();
    oldNodes.replaceWith(nodes152);
  }));
  callback(root226); return subs__;
  
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes147;
  nodes147 = node.contents();
  oldNodes.replaceWith(nodes147);
}));
callback(root223); return subs__;


return subs__;
};
shopping.clean = function(callback) {
  var __this = this;
  var result__ = true;
  var b = result__;
  var result__ = shopping.Item.all().filter("checked", "=", true);
  shopping.Item.all().filter("checked", "=", true).list(function(coll40) {
    coll40 = coll40.reverse();
    function processOne4() {
      var it;
      it = coll40.pop();
      var result__ = it.favorite;
      if(result__) {
        var result__ = false;
        it.checked = result__;
        var result__ = false;
        it.onlist = result__;
        
        if(coll40.length > 0) processOne4(); else rest4();
        
      } else {
        {
          var result__ = mobl.remove(it);
          
          if(coll40.length > 0) processOne4(); else rest4();
          
        }
      }
    }
    function rest4() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll40.length > 0) processOne4(); else rest4();
  });
  
};


shopping.showItems = function(elements, callback) {
var root233 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes154 = $("<span>");
root233.append(nodes154);
subs__.addSub((mobl.ui.generic.header)(mobl.ref("Show Items"), mobl.ref(false), mobl.ref(null), function(_, callback) {
  var root234 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   shopping.clean(function(result__) {
                     var tmp114 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp103 = mobl.ref(result__);
  
  var nodes155 = $("<span>");
  root234.append(nodes155);
  subs__.addSub((mobl.ui.generic.button)(mobl.ref("Clean"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp103, function(_, callback) {
    var root235 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root235); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes155;
    nodes155 = node.contents();
    oldNodes.replaceWith(nodes155);
  }));
  callback(root234); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes154;
  nodes154 = node.contents();
  oldNodes.replaceWith(nodes154);
}));
var nodes156 = $("<span>");
root233.append(nodes156);
subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
  var root236 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = shopping.Item.all().filter("onlist", "=", true).order("order", true);
  var tmp105 = mobl.ref(result__);
  subs__.addSub(mobl.ref(shopping.Item.all().filter("onlist", "=", true).order("order", true)).addEventListener('change', function() {
    tmp105.set(shopping.Item.all().filter("onlist", "=", true).order("order", true));
  }));
  subs__.addSub(mobl.ref(shopping.Item.all().filter("onlist", "=", true)).addEventListener('change', function() {
    tmp105.set(shopping.Item.all().filter("onlist", "=", true).order("order", true));
  }));
  subs__.addSub(mobl.ref(shopping.Item.all()).addEventListener('change', function() {
    tmp105.set(shopping.Item.all().filter("onlist", "=", true).order("order", true));
  }));
  subs__.addSub(mobl.ref(shopping.Item).addEventListener('change', function() {
    tmp105.set(shopping.Item.all().filter("onlist", "=", true).order("order", true));
  }));
  
  
  var node104 = mobl.loadingSpan();
  root236.append(node104);
  var list18;
  var listSubs18 = new mobl.CompSubscription();
  subs__.addSub(listSubs18);
  var renderList18 = function() {
    var subs__ = listSubs18;
    list18 = tmp105.get();
    list18.list(function(results18) {
      node104.empty();
      for(var i18 = 0; i18 < results18.length; i18++) {
        (function() {
          var iternode18 = $("<span>");
          node104.append(iternode18);
          var it;
          it = mobl.ref(mobl.ref(results18), i18);
          var nodes157 = $("<span>");
          iternode18.append(nodes157);
          subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
            var root237 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes158 = $("<span>");
            root237.append(nodes158);
            subs__.addSub((mobl.ui.generic.checkBox)(mobl.ref(it, 'checked'), mobl.ref(it, 'name'), mobl.ref(null), function(_, callback) {
              var root238 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root238); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes158;
              nodes158 = node.contents();
              oldNodes.replaceWith(nodes158);
            }));
            var nodes159 = $("<span>");
            root237.append(nodes159);
            subs__.addSub((mobl.ui.generic.contextMenu)(function(_, callback) {
              var root239 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = function(event, callback) {
                               mobl.call('shopping.editItem', [it, mobl.ref(false), mobl.ref("slide"), mobl.ref(null)], function(result__) {
                               var tmp115 = result__;
                               if(callback && callback.apply) callback(); return;
                               });
                             };
              var tmp104 = mobl.ref(result__);
              
              var nodes160 = $("<span>");
              root239.append(nodes160);
              subs__.addSub((mobl.ui.generic.button)(mobl.ref("Edit"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp104, function(_, callback) {
                var root240 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root240); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes160;
                nodes160 = node.contents();
                oldNodes.replaceWith(nodes160);
              }));
              callback(root239); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes159;
              nodes159 = node.contents();
              oldNodes.replaceWith(nodes159);
            }));
            callback(root237); return subs__;
            
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes157;
            nodes157 = node.contents();
            oldNodes.replaceWith(nodes157);
          }));
          
          var oldNodes = iternode18;
          iternode18 = iternode18.contents();
          oldNodes.replaceWith(iternode18);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list18.addEventListener('change', function() { listSubs18.unsubscribe(); renderList18(true); }));
      subs__.addSub(tmp105.addEventListener('change', function() { listSubs18.unsubscribe(); renderList18(true); }));
    });
  };
  renderList18();
  
  callback(root236); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes156;
  nodes156 = node.contents();
  oldNodes.replaceWith(nodes156);
}));
var nodes161 = $("<span>");
root233.append(nodes161);
subs__.addSub((shopping.quickAdd)(function(_, callback) {
  var root241 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root241); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes161;
  nodes161 = node.contents();
  oldNodes.replaceWith(nodes161);
}));
var result__ = function(event, callback) {
                 mobl.resetDatabase(function(result__) {
                   var tmp116 = result__;
                   if(callback && callback.apply) callback(); return;
                 });
               };
var tmp106 = mobl.ref(result__);

var nodes162 = $("<span>");
root233.append(nodes162);
subs__.addSub((mobl.ui.generic.button)(mobl.ref("Reset"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp106, function(_, callback) {
  var root242 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root242); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes162;
  nodes162 = node.contents();
  oldNodes.replaceWith(nodes162);
}));
callback(root233); return subs__;




return subs__;
};

shopping.showFavorites = function(elements, callback) {
var root243 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes163 = $("<span>");
root243.append(nodes163);
subs__.addSub((mobl.ui.generic.header)(mobl.ref("Favorites"), mobl.ref(false), mobl.ref(null), function(_, callback) {
  var root244 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root244); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes163;
  nodes163 = node.contents();
  oldNodes.replaceWith(nodes163);
}));
var nodes164 = $("<span>");
root243.append(nodes164);
subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
  var root245 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = shopping.Item.all().filter("favorite", "=", true).order("order", true);
  var tmp111 = mobl.ref(result__);
  subs__.addSub(mobl.ref(shopping.Item.all().filter("favorite", "=", true).order("order", true)).addEventListener('change', function() {
    tmp111.set(shopping.Item.all().filter("favorite", "=", true).order("order", true));
  }));
  subs__.addSub(mobl.ref(shopping.Item.all().filter("favorite", "=", true)).addEventListener('change', function() {
    tmp111.set(shopping.Item.all().filter("favorite", "=", true).order("order", true));
  }));
  subs__.addSub(mobl.ref(shopping.Item.all()).addEventListener('change', function() {
    tmp111.set(shopping.Item.all().filter("favorite", "=", true).order("order", true));
  }));
  subs__.addSub(mobl.ref(shopping.Item).addEventListener('change', function() {
    tmp111.set(shopping.Item.all().filter("favorite", "=", true).order("order", true));
  }));
  
  
  var node105 = mobl.loadingSpan();
  root245.append(node105);
  var list19;
  var listSubs19 = new mobl.CompSubscription();
  subs__.addSub(listSubs19);
  var renderList19 = function() {
    var subs__ = listSubs19;
    list19 = tmp111.get();
    list19.list(function(results19) {
      node105.empty();
      for(var i19 = 0; i19 < results19.length; i19++) {
        (function() {
          var iternode19 = $("<span>");
          node105.append(iternode19);
          var it;
          it = mobl.ref(mobl.ref(results19), i19);
          var result__ = function(event, callback) {
                           mobl.call('shopping.editItem', [it, mobl.ref(false), mobl.ref("slide"), mobl.ref(null)], function(result__) {
                           var tmp117 = result__;
                           if(callback && callback.apply) callback(); return;
                           });
                         };
          var tmp109 = mobl.ref(result__);
          
          var nodes165 = $("<span>");
          iternode19.append(nodes165);
          subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp109, mobl.ref(null), mobl.ref(false), function(_, callback) {
            var root246 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes166 = $("<span>");
            root246.append(nodes166);
            subs__.addSub((mobl.label)(mobl.ref(it, 'name'), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root247 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root247); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes166;
              nodes166 = node.contents();
              oldNodes.replaceWith(nodes166);
            }));
            var result__ = !it.get().onlist;
            var tmp108 = mobl.ref(result__);
            subs__.addSub(mobl.ref(it, 'onlist').addEventListener('change', function() {
              tmp108.set(!it.get().onlist);
            }));
            
            
            var node106 = $("<span>");
            root246.append(node106);
            var condSubs24 = new mobl.CompSubscription();
            subs__.addSub(condSubs24);
            var oldValue24;
            var renderCond24 = function() {
              var value48 = tmp108.get();
              if(oldValue24 === value48) return;
              oldValue24 = value48;
              var subs__ = condSubs24;
              subs__.unsubscribe();
              node106.empty();
              if(value48) {
                var result__ = function(event, callback) {
                                 var result__ = true;
                                 it.get().onlist = result__;
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp107 = mobl.ref(result__);
                
                var nodes167 = $("<span>");
                node106.append(nodes167);
                subs__.addSub((mobl.ui.generic.sideButton)(mobl.ref("Add"), mobl.ref(mobl.ui.generic.sideButtonStyle), mobl.ref(mobl.ui.generic.sideButtonPushedStyle), tmp107, function(_, callback) {
                  var root248 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root248); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes167;
                  nodes167 = node.contents();
                  oldNodes.replaceWith(nodes167);
                }));
                
                
              } else {
                
              }
            };
            renderCond24();
            subs__.addSub(tmp108.addEventListener('change', function() {
              renderCond24();
            }));
            
            callback(root246); return subs__;
            
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes165;
            nodes165 = node.contents();
            oldNodes.replaceWith(nodes165);
          }));
          
          var oldNodes = iternode19;
          iternode19 = iternode19.contents();
          oldNodes.replaceWith(iternode19);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list19.addEventListener('change', function() { listSubs19.unsubscribe(); renderList19(true); }));
      subs__.addSub(tmp111.addEventListener('change', function() { listSubs19.unsubscribe(); renderList19(true); }));
    });
  };
  renderList19();
  
  callback(root245); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes164;
  nodes164 = node.contents();
  oldNodes.replaceWith(nodes164);
}));
callback(root243); return subs__;


return subs__;
};

shopping.quickAdd = function(elements, callback) {
var root249 = $("<span>");
var subs__ = new mobl.CompSubscription();

var newItem = mobl.ref(new shopping.Item({'order': 999, 'onlist': true}));
var nodes168 = $("<span>");
root249.append(nodes168);
subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
  var root250 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes169 = $("<span>");
  root250.append(nodes169);
  subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root251 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes170 = $("<span>");
    root251.append(nodes170);
    subs__.addSub((mobl.ui.generic.textField)(mobl.ref(newItem, 'name'), mobl.ref("New item"), mobl.ref(null), mobl.ref("text"), mobl.ref(null), mobl.ref(mobl.ui.generic.textFieldStyle), mobl.ref(mobl.ui.generic.textFieldInvalidStyle), mobl.ref(false), mobl.ref(true), mobl.ref(true), mobl.ref(true), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root252 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root252); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes170;
      nodes170 = node.contents();
      oldNodes.replaceWith(nodes170);
    }));
    callback(root251); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes169;
    nodes169 = node.contents();
    oldNodes.replaceWith(nodes169);
  }));
  callback(root250); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes168;
  nodes168 = node.contents();
  oldNodes.replaceWith(nodes168);
}));
var result__ = function(event, callback) {
                 var result__ = mobl.add(newItem.get());
                 var result__ = new shopping.Item({'order': 999, 'onlist': true});
                 newItem.set(result__);
                 if(callback && callback.apply) callback(); return;
               };
var tmp112 = mobl.ref(result__);

var nodes171 = $("<span>");
root249.append(nodes171);
subs__.addSub((mobl.ui.generic.button)(mobl.ref("Add"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp112, function(_, callback) {
  var root253 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root253); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes171;
  nodes171 = node.contents();
  oldNodes.replaceWith(nodes171);
}));
callback(root249); return subs__;


return subs__;
};

shopping.root = function(callback, screenCallback) {
var root254 = $("<div>");
var subs__ = new mobl.CompSubscription();
var result__ = [new mobl.Tuple("Items", "lib/toolbar/icon_users.png", shopping.showItems), new mobl.Tuple("Favorite", "lib/toolbar/icon_users.png", shopping.showFavorites)];
var tmp113 = mobl.ref(result__);
subs__.addSub(mobl.ref(shopping.showItems).addEventListener('change', function() {
  tmp113.set([new mobl.Tuple("Items", "lib/toolbar/icon_users.png", shopping.showItems), new mobl.Tuple("Favorite", "lib/toolbar/icon_users.png", shopping.showFavorites)]);
}));
subs__.addSub(mobl.ref(shopping.showFavorites).addEventListener('change', function() {
  tmp113.set([new mobl.Tuple("Items", "lib/toolbar/icon_users.png", shopping.showItems), new mobl.Tuple("Favorite", "lib/toolbar/icon_users.png", shopping.showFavorites)]);
}));

var nodes172 = $("<span>");
root254.append(nodes172);
subs__.addSub((mobl.ui.generic.tabSet)(tmp113, mobl.ref(null), mobl.ref("tabSetContext"), function(_, callback) {
  var root255 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root255); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes172;
  nodes172 = node.contents();
  oldNodes.replaceWith(nodes172);
}));
callback(root254); return subs__;

return subs__;
};

shopping.Item = persistence.define('shopping__Item', {
'name': 'VARCHAR(255)',
'checked': 'BOOL',
'favorite': 'BOOL',
'onlist': 'BOOL',
'order': 'INT'
});
 

