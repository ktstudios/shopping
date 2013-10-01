mobl.provides('mobl');
mobl.provides('mobl');
(function(__ns) {
__ns.Bool = {
            };
__ns.Num = {
           };
__ns.String = {
              };
}(mobl));(function(__ns) {
__ns.RegExp = {
                fromString: function(regexp) {
                              return new RegExp(regexp);
                            }
              };
}(mobl));mobl.mergeStyles = function(styles) {
   var __this = this;
  var styleString = styles.join(" ");
  
  return styleString;
};

(function(__ns) {
__ns.LocalStorage = {
                      setItem: function(key, value) {
                                 window.localStorage.setItem(key, JSON.stringify(value));
                               },
                      removeItem: function(key) {
                                    window.localStorage.removeItem(key);
                                  },
                      getItem: function(key, defaultValue) {
                                 var val = JSON.parse(window.localStorage.getItem(key) || "null") || defaultValue;
                                 if(val && typeof val === 'object' && !val.addEventListener)
                                 {
                                   return new mobl.ObservableObject(val);
                                 }
                                 else
                                 {
                                   return val;
                                 }
                               },
                      getNum: function(key, defaultValue) {
                                return this.get(key, defaultValue);
                              },
                      getString: function(key, defaultValue) {
                                   return this.get(key, defaultValue);
                                 },
                      getBool: function(key, defaultValue) {
                                 return this.get(key, defaultValue);
                               }
                    };
}(mobl));(function(__ns) {
__ns.isIphone = function() {
                  return !!navigator.userAgent.match(/iPhone/i) || !!navigator.userAgent.match(/iPod/i);
                };
__ns.isIpad = function() {
                return !!navigator.userAgent.match(/iPad/i);
              };
__ns.isAndroid = function() {
                   return !!navigator.userAgent.match(/Android/i);
                 };
__ns.isLandscape = function() {
                     return window.innerHeight < window.innerWidth;
                   };
__ns.isPortrait = function() {
                    return window.innerHeight >= window.innerWidth;
                  };
__ns.isTouchDevice = function() {
                       return 'ontouchstart' in document.documentElement;
                     };
__ns.isOnline = function(callback) {
                  var i = new Image();
                  i.onload = function() {
                               callback(true);
                             };
                  i.onerror = function() {
                                callback(false);
                              };
                  i.src = 'http://gfx2.hotmail.com/mail/uxp/w4/m4/pr014/h/s7.png?d=' + escape(Date());
                };
}(mobl));(function(__ns) {
__ns.dyn = function(o) {
             return o;
           };
}(mobl));
mobl.label = function(s, style, onclick, elements, callback) {
var root116 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node52 = $("<span>");

var ref76 = s;
node52.text(""+ref76.get());
var ignore11 = false;
subs__.addSub(ref76.addEventListener('change', function(_, ref, val) {
  if(ignore11) return;
  node52.text(""+val);
}));
subs__.addSub(ref76.rebind());


var ref77 = style;
if(ref77.get() !== null) {
  node52.attr('class', ref77.get());
  subs__.addSub(ref77.addEventListener('change', function(_, ref, val) {
    node52.attr('class', val);
  }));
  
}
subs__.addSub(ref77.rebind());

var val31 = onclick.get();
if(val31 !== null) {
  subs__.addSub(mobl.domBind(node52, 'tap', val31));
}

root116.append(node52);
callback(root116); return subs__;

return subs__;
};

mobl.block = function(cssClass, id, onclick, onswipe, elements, callback) {
var root117 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node53 = $("<div>");

var ref78 = id;
if(ref78.get() !== null) {
  node53.attr('id', ref78.get());
  subs__.addSub(ref78.addEventListener('change', function(_, ref, val) {
    node53.attr('id', val);
  }));
  
}
subs__.addSub(ref78.rebind());

var ref79 = cssClass;
if(ref79.get() !== null) {
  node53.attr('class', ref79.get());
  subs__.addSub(ref79.addEventListener('change', function(_, ref, val) {
    node53.attr('class', val);
  }));
  
}
subs__.addSub(ref79.rebind());

var val32 = onclick.get();
if(val32 !== null) {
  subs__.addSub(mobl.domBind(node53, 'tap', val32));
}

var val33 = onswipe.get();
if(val33 !== null) {
  subs__.addSub(mobl.domBind(node53, 'swipe', val33));
}

var nodes77 = $("<span>");
node53.append(nodes77);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl24();
}));

function renderControl24() {
  subs__.addSub((elements)(function(elements, callback) {
    var root118 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root118); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes77;
    nodes77 = node.contents();
    oldNodes.replaceWith(nodes77);
  }));
}
renderControl24();
root117.append(node53);
callback(root117); return subs__;


return subs__;
};

mobl.span = function(cssClass, id, onclick, onswipe, elements, callback) {
var root119 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node54 = $("<span>");

var ref80 = id;
if(ref80.get() !== null) {
  node54.attr('id', ref80.get());
  subs__.addSub(ref80.addEventListener('change', function(_, ref, val) {
    node54.attr('id', val);
  }));
  
}
subs__.addSub(ref80.rebind());

var ref81 = cssClass;
if(ref81.get() !== null) {
  node54.attr('class', ref81.get());
  subs__.addSub(ref81.addEventListener('change', function(_, ref, val) {
    node54.attr('class', val);
  }));
  
}
subs__.addSub(ref81.rebind());

var val34 = onclick.get();
if(val34 !== null) {
  subs__.addSub(mobl.domBind(node54, 'tap', val34));
}

var val35 = onswipe.get();
if(val35 !== null) {
  subs__.addSub(mobl.domBind(node54, 'swipe', val35));
}

var nodes78 = $("<span>");
node54.append(nodes78);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl25();
}));

function renderControl25() {
  subs__.addSub((elements)(function(elements, callback) {
    var root120 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root120); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes78;
    nodes78 = node.contents();
    oldNodes.replaceWith(nodes78);
  }));
}
renderControl25();
root119.append(node54);
callback(root119); return subs__;


return subs__;
};

mobl.link = function(url, target, elements, callback) {
var root121 = $("<span>");
var subs__ = new mobl.CompSubscription();

var l = $("<a>");

var ref82 = url;
if(ref82.get() !== null) {
  l.attr('href', ref82.get());
  subs__.addSub(ref82.addEventListener('change', function(_, ref, val) {
    l.attr('href', val);
  }));
  
}
subs__.addSub(ref82.rebind());

var ref83 = target;
if(ref83.get() !== null) {
  l.attr('target', ref83.get());
  subs__.addSub(ref83.addEventListener('change', function(_, ref, val) {
    l.attr('target', val);
  }));
  
}
subs__.addSub(ref83.rebind());

var nodes79 = $("<span>");
l.append(nodes79);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl26();
}));

function renderControl26() {
  subs__.addSub((elements)(function(elements, callback) {
    var root122 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root122); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes79;
    nodes79 = node.contents();
    oldNodes.replaceWith(nodes79);
  }));
}
renderControl26();
root121.append(l);
var result__ = l.contents().length == 0;
if(result__) {
  var result__ = l.text(url.get());
  callback(root121); return subs__;
} else {
  {
    callback(root121); return subs__;
  }
}


return subs__;
};

mobl.nl = function(elements, callback) {
var root123 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node55 = $("<br>");

root123.append(node55);
callback(root123); return subs__;

return subs__;
};

mobl.screenContext = function(id, elements, callback) {
var root124 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node56 = $("<div>");
node56.attr('class', "screenContext");

var ref84 = id;
if(ref84.get() !== null) {
  node56.attr('id', ref84.get());
  subs__.addSub(ref84.addEventListener('change', function(_, ref, val) {
    node56.attr('id', val);
  }));
  
}
subs__.addSub(ref84.rebind());
node56.attr('style', "position: relative;");


var node57 = $("<div>");
node57.attr('class', "initialElements");

var nodes80 = $("<span>");
node57.append(nodes80);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl27();
}));

function renderControl27() {
  subs__.addSub((elements)(function(elements, callback) {
    var root125 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root125); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes80;
    nodes80 = node.contents();
    oldNodes.replaceWith(nodes80);
  }));
}
renderControl27();
node56.append(node57);
root124.append(node56);
callback(root124); return subs__;



return subs__;
};
(function(__ns) {
var bundle = {
             };
__ns.fetchLanguageBundle = function(path, callback) {
                             $.getJSON(path, function(json) {
                                               bundle = json;
                                               callback();
                                             });
                           };
__ns._ = function(key, placeholders) {
           var s = bundle[key] || key;
           var parts = s.split('%%');
           s = parts[0];
           for(var i = 0; i < placeholders.length; i++)
           {
             s += placeholders[i];
             if(parts[i + 1])
             {
               s += parts[i + 1];
             }
           }
           return s;
         };
}(mobl));(function(__ns) {
__ns.httpRequest = function(url, method, encoding, data, mapper, callback) {
                     $.ajax({
                              url: url,
                              dataType: encoding,
                              type: method,
                              data: data,
                              error: function(_, message, error) {
                                       console.error(message);
                                       console.error(error);
                                       callback(null);
                                     },
                              success: function(data) {
                                         var result = mapper(data, callback);
                                         if(result !== undefined)
                                         {
                                           callback(result);
                                         }
                                       }
                            });
                   };
}(mobl));(function(__ns) {
var argspec = persistence.argspec;
__ns.$ = jQuery;
__ns.sleep = function(time, callback) {
               setTimeout(callback, time);
             };
__ns.Dynamic = function(props) {
                 for(var p in props)
                 {
                   if(props.hasOwnProperty(p))
                   {
                     this[p] = props[p];
                   }
                 }
               };
__ns.repeat = function(time, callback) {
                setInterval(callback, time);
              };
mobl.alert = function(s) {
               alert(s);
             };
mobl.log = function(s, _, callback) {
             console.log(s);
             if(callback)
             callback();
           };
__ns.parseNum = function(s) {
                  return parseFloat(s, 10);
                };
__ns.escape = function(s) {
                return escape(s);
              };
__ns.add = function(e) {
             var allEnt = persistence.define(e._type).all();
             allEnt.add(e);
           };
mobl.now = function() {
             return new Date();
           };
mobl.remove = function(e) {
                persistence.remove(e);
                var allEnt = persistence.define(e._type).all();
                allEnt.triggerEvent('remove', allEnt, e);
                allEnt.triggerEvent('change', allEnt, e);
              };
mobl.flushDatabase = function(callback) {
                       persistence.flush(callback);
                     };
mobl.resetDatabase = function(callback) {
                       persistence.reset(function() {
                                           persistence.schemaSync(callback);
                                         });
                     };
mobl.reload = function() {
                persistence.flush(function() {
                                    window.location.reload();
                                  });
              };
mobl.openUrl = function(url) {
                 location = url;
               };
mobl.random = function(max) {
                return Math.round(Math.random() * max);
              };
persistence.QueryCollection.prototype.updates = function() {
                                                  this.triggerEvent('change', this);
                                                };
mobl.DateTime = {
                  parse: function(s) {
                           return new Date(Date.parse(s));
                         },
                  fromTimestamp: function(timestamp) {
                                   return new Date(timestamp);
                                 },
                  create: function(year, month, day, hour, minute, second, ms) {
                            return new Date(year,month,day,hour,minute,second,ms);
                          }
                };
Date.prototype.toDateString = function() {
                                return "" + ( this.getMonth() + 1 ) + "/" + this.getDate() + "/" + this.getFullYear();
                              };
mobl.Math = Math;
mobl.Math.pi = function() {
                 return Math.PI;
               };
mobl.Math.isNaN = function(n) {
                    return isNaN(n);
                  };
mobl.JSON = JSON;
mobl.formatDate = function(date) {
                    var diff = (( (new Date()).getTime() - date.getTime() ) / 1000);
                    var day_diff = Math.floor(diff / 86400);
                    if(isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
                    return;
                    return day_diff === 0 && ( diff < 60 && "just now" || diff < 120 && "1 minute ago" || diff < 3600 && Math.floor(diff / 60) + " minutes ago" || diff < 7200 && "1 hour ago" || diff < 86400 && Math.floor(diff / 3600) + " hours ago" ) || day_diff === 1 && "Yesterday" || day_diff < 7 && day_diff + " days ago" || day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
                  };
mobl.range = function(from, to) {
               var ar = [];
               if(from <= to)
               {
                 for(var i = from; i < to; i++)
                 {
                   ar.push(i);
                 }
               }
               else
               {
                 for(var i = from; i > to; i--)
                 {
                   ar.push(i);
                 }
               }
               return ar;
             };
mobl.html = function(html, elements, callback) {
              var root192 = $("<span>");
              var node180 = $("<span >");
              var ref108 = html;
              node180.html(html.get().toString());
              var ignore51 = false;
              ref108.addEventListener('change', function(_, ref, val) {
                                                  if(ignore51)
                                                  return;
                                                  if(ref === ref108)
                                                  {
                                                    node180.html(val.toString());
                                                  }
                                                });
              ref108.rebind();
              root192.append(node180);
              callback(root192);
              return;
            };
mobl.defineType = function(qid, SuperType, fields) {
                    function Type ( obj ) {
                      this._data = {
                                   };
                      if(this.initialize)
                      {
                        this.initialize();
                      }
                      for(var p in obj)
                      {
                        if(obj.hasOwnProperty(p))
                        {
                          this[p] = obj[p];
                        }
                      }
                    }
                    Type.prototype = SuperType ? new SuperType ( ) : new persistence.Observable ( );
                    for(var prop in fields)
                    {
                      if(fields.hasOwnProperty(prop))
                      {
                        (function() {
                           var p = prop;
                           if(fields[p] === null)
                           {
                             Type.prototype.__defineGetter__(p, function() {
                                                                  return this._data[p];
                                                                });
                             Type.prototype.__defineSetter__(p, function(val) {
                                                                  this._data[p] = val;
                                                                  this.triggerEvent('change', this, p, val);
                                                                });
                           }
                           else
                           if(fields[p][0] === '[')
                           {
                           }
                         }());
                      }
                    }
                    Type.fromJSON = function(json) {
                                      return new Type(json);
                                    };
                    return Type;
                  };
persistence.entityDecoratorHooks.push(function(Entity) {
                                        Entity.searchPrefix = function(query) {
                                                                return Entity.search(query, true);
                                                              };
                                      });
Array.prototype.list = function(tx, callback) {
                         var args = argspec.getArgs(arguments, [{
                                                                  name: 'tx',
                                                                  optional: true,
                                                                  check: function(obj) {
                                                                           return tx.executeSql;
                                                                         }
                                                                },{
                                                                    name: 'callback',
                                                                    optional: false,
                                                                    check: argspec.isCallback()
                                                                  }]);
                         tx = args.tx;
                         callback = args.callback;
                         var valueCopy = [];
                         for(var i = 0; i < this.length; i++)
                         {
                           valueCopy[i] = this[i];
                         }
                         callback(valueCopy);
                       };
Array.prototype.insert = function(idx, item) {
                           this.splice(idx, 0, item);
                         };
Array.prototype.get = function(idx) {
                        return this[idx];
                      };
Array.prototype.one = function(callback) {
                        if(this.length === 0)
                        {
                          callback(null);
                        }
                        else
                        {
                          callback(this[0]);
                        }
                      };
Array.prototype.contains = function(el) {
                             for(var i = 0; i < this.length; i++)
                             {
                               if(this[i] === el)
                               {
                                 return true;
                               }
                             }
                             return false;
                           };
Array.prototype.containsEnity = function(el) {
                                  return this.containsElementWithValue("id", el.id);
                                };
Array.prototype.containsElementWithValue = function(prop, val) {
                                             for(var i = 0; i < this.length; i++)
                                             {
                                               if(this[i][prop] === val)
                                               {
                                                 return true;
                                               }
                                             }
                                             return false;
                                           };
Array.prototype.remove = function(el) {
                           for(var i = 0; i < this.length; i++)
                           {
                             if(this[i] === el)
                             {
                               this.splice(i, 1);
                               return;
                             }
                           }
                         };
Array.prototype.addEventListener = function() {
                                   };
mobl.dummyMapper = function(data, callback) {
                     callback(data);
                   };
mobl.Map = function() {
             this.data = {
                         };
           };
mobl.Map.prototype.set = function(k, v) {
                           this.data[k] = v;
                         };
mobl.Map.prototype.get = function(k) {
                           return this.data[k];
                         };
mobl.Map.prototype.keys = function() {
                            var keys = [];
                            for(var p in this.data)
                            {
                              if(this.data.hasOwnProperty(p))
                              {
                                keys.push(p);
                              }
                            }
                            return keys;
                          };
mobl.screenStack = [ ];
mobl.innerHeight = false;
setTimeout(function() {
             if(mobl.isAndroid)
             {
               mobl.innerHeight = window.innerHeight;
             }
           }, 200);
function updateScrollers ( ) {
  var scrollwrappers = $("div#scrollwrapper");
  if(scrollwrappers.length > 0)
  {
    var height = mobl.innerHeight?mobl.innerHeight:window.innerHeight;
    height -= $("#footer:visible").height();
    height -= $("#tabbar:visible").height();
    scrollwrappers.height(height);
  }
  var scrollers = $("div#scrollwrapper div#content");
  for(var i = 0; i < scrollers.length; i++)
  {
    var scroller = scrollers.eq(i).data("scroller");
    if(scroller)
    {
      scroller.refresh();
    }
    else
    {
    }
  }
}
mobl.delayedUpdateScrollers = function() {
                                setTimeout(updateScrollers, 200);
                              };
if(!mobl.isAndroid)
{
  $(window).resize(updateScrollers);
}
$(function() {
    setInterval(function() {
                  persistence.flush();
                  if(persistence.saveToLocalStorage)
                  {
                    persistence.saveToLocalStorage();
                  }
                }, 2500);
  });
mobl.postCallHooks = [ ];
mobl.contextStack = [ ];
if(mobl.contextStack.length === 0)
{
  mobl.contextStack.push([{
                            screens: [],
                            dom: null,
                            id: '_top'
                          }]);
}
mobl.findDeepestVisibleContext = function(target) {
                                   var idx = mobl.contextStack.length - 1;
                                   while ( idx >= 0 )
                                   {
                                     var top = mobl.contextStack[idx];
                                     for(var i = 0; i < top.length; i++)
                                     {
                                       if(!top[i].dom)
                                       {
                                         top[i].dom = $("body");
                                       }
                                       if(top[i].dom.is(':visible') && ( !target || target === top[i].id ))
                                       {
                                         return top[i];
                                       }
                                     }
                                     idx--;
                                   }
                                 };
var TRANSITION_SPEED = 250;
__ns.animations = {
                  };
__ns.animations.slide = function(prevNode, nextNode, forward, callback) {
                          nextNode.css("-webkit-transform", "translate3d(" + ( forward ? "100%" : "-100%" ) + ",0px,0px)");
                          nextNode.css("-webkit-transition-duration", TRANSITION_SPEED + "ms");
                          nextNode.show();
                          setTimeout(function() {
                                       nextNode.css({
                                                      "-webkit-transition-duration": TRANSITION_SPEED + "ms",
                                                      "-webkit-transition-timing-function": "ease-in-out"
                                                    });
                                       prevNode.css({
                                                      "-webkit-transition-duration": TRANSITION_SPEED + "ms",
                                                      "-webkit-transition-timing-function": "ease-in-out"
                                                    });
                                       nextNode.css("-webkit-transform", "translate3d(0px,0px,0px)");
                                       prevNode.css("-webkit-transform", "translate3d(" + ( forward ? "-100%" : "100%" ) + ",0px,0px)");
                                       prevNode.bind("webkitTransitionEnd", function() {
                                                                              prevNode.unbind("webkitTransitionEnd");
                                                                              prevNode.hide();
                                                                              nextNode.css({
                                                                                             "-webkit-transition-duration": null,
                                                                                             "-webkit-transition-timing-function": null
                                                                                           });
                                                                              prevNode.css({
                                                                                             "-webkit-transition-duration": null,
                                                                                             "-webkit-transition-timing-function": null
                                                                                           });
                                                                              callback();
                                                                            });
                                     }, 5);
                        };
__ns.animations.fade = function(prevNode, nextNode, forward, callback) {
                         nextNode.fadeIn(300);
                         prevNode.fadeOut(300, callback);
                       };
__ns.animations.none = function(prevNode, nextNode, forward, callback) {
                         nextNode.show();
                         prevNode.hide();
                         callback();
                       };
__ns.getCurrentScreen = function() {
                          var screenContext = mobl.findDeepestVisibleContext();
                          for(var i = 0; i < screenContext.screens.length; i++)
                          {
                            if(screenContext.screens[i].dom.is(':visible'))
                            {
                              return screenContext.screens[i];
                            }
                          }
                          return null;
                        };
var oldHash = null;
setInterval(function() {
              if(location.hash !== oldHash)
              {
                oldHash = location.hash;
                var screenContext = mobl.findDeepestVisibleContext();
                if(screenContext && screenContext.initialElements)
                {
                  var screens = screenContext.screens;
                  if(screens.length > 1 || ( screenContext.initialElements.length > 0 && screens.length > 0 ))
                  {
                    screens[screens.length - 1].callbackFn(null);
                  }
                }
              }
            }, 250);
__ns.screenTransitionLock = null;
__ns.acquireScreenTransitionLock = function(resource) {
                                     if(__ns.screenTransitionLock === resource)
                                     {
                                       return false;
                                     }
                                     __ns.screenTransitionLock = resource;
                                     return true;
                                   };
$("html").bind("screenTransitionEnded", function() {
                                          __ns.screenTransitionLock = null;
                                        });
__ns.call = function(screenName, args, callback) {
              if(!__ns.acquireScreenTransitionLock(screenName))
              {
                return false;
              }
              var replace = args[args.length - 3].get();
              var animate = args[args.length - 2].get();
              var target = args[args.length - 1].get();
              args.splice(args.length - 3, 3);
              var screenFrame = {
                                  name: screenName,
                                  args: args,
                                  callback: callback,
                                  div: screenName.replace(/\./g, '__'),
                                  dom: $("<div>")
                                };
              if(!screenName.match(/\.root$/))
              {
                location.hash = "" + Math.round(Math.random() * 99999);
              }
              oldHash = location.hash;
              var screenContext = mobl.findDeepestVisibleContext(target);
              if(!screenContext)
              {
                alert("Error: no matching visible screen context found");
              }
              screenContext.screens.push(screenFrame);
              var callbackFn = function() {
                                 if(!__ns.acquireScreenTransitionLock(screenName))
                                 {
                                   return false;
                                 }
                                 screenFrame.subs.unsubscribe();
                                 screenContext.screens.pop();
                                 if(screenFrame.dom.find("div.screenContext").length > 0)
                                 {
                                   mobl.contextStack.pop();
                                 }
                                 mobl.delayedUpdateScrollers();
                                 var domNode;
                                 if(screenContext.screens.length > 0)
                                 {
                                   var previousScreen = screenContext.screens[screenContext.screens.length - 1];
                                   domNode = previousScreen.dom;
                                   scrollTo(0, previousScreen.pageYOffset);
                                 }
                                 else
                                 {
                                   domNode = screenContext.initialElements;
                                   scrollTo(0, 0);
                                 }
                                 __ns.animations[animate](screenFrame.dom, domNode, false, function() {
                                                                                             screenFrame.dom.remove();
                                                                                             domNode.trigger("screenTransitionEnded");
                                                                                           });
                                 if(callback)
                                 {
                                   callback.apply(null, arguments);
                                 }
                               };
              screenFrame.callbackFn = callbackFn;
              var parts = screenName.split('.');
              var current = window;
              for(var i = 0; i < parts.length; i++)
              {
                current = current[parts[i]];
              }
              var screenTemplate = current;
              screenFrame.subs = screenTemplate.apply(null, args.concat([function(node) {
                                                                           node.attr('id', screenFrame.div);
                                                                           node.css('position', 'absolute').css('top', '0').css('left', '0px').css('width', '100%');
                                                                           screenFrame.dom = node;
                                                                           if(screenContext.screens.length > 1)
                                                                           {
                                                                             var previousScreen = screenContext.screens[screenContext.screens.length - 2];
                                                                             previousScreen.pageYOffset = window.pageYOffset;
                                                                             node.hide();
                                                                             node.prependTo(screenContext.dom);
                                                                             __ns.animations[animate](previousScreen.dom, node, true, function() {
                                                                                                                                        node.trigger("screenTransitionEnded");
                                                                                                                                      });
                                                                             scrollTo(0, 0);
                                                                           }
                                                                           else
                                                                           {
                                                                             if(screenContext.dom.selector === 'body')
                                                                             {
                                                                               screenContext.initialElements = screenContext.dom.find("div.initialElements");
                                                                               node.prependTo(screenContext.dom);
                                                                               node.show();
                                                                               screenContext.initialElements.hide();
                                                                               node.trigger("screenTransitionEnded");
                                                                             }
                                                                             else
                                                                             {
                                                                               screenContext.initialElements = screenContext.dom.find("div.initialElements");
                                                                               node.hide();
                                                                               node.prependTo(screenContext.dom);
                                                                               __ns.animations[animate](screenContext.initialElements, node, true, function() {
                                                                                                                                                     node.trigger("screenTransitionEnded");
                                                                                                                                                   });
                                                                               scrollTo(0, 0);
                                                                             }
                                                                           }
                                                                           var localScreenContexts = node.find("div.screenContext");
                                                                           if(localScreenContexts.length > 0)
                                                                           {
                                                                             var ar = [];
                                                                             for(var i = 0; i < localScreenContexts.length; i++)
                                                                             {
                                                                               ar.push({
                                                                                         screens: [],
                                                                                         dom: localScreenContexts.eq(i),
                                                                                         id: localScreenContexts.eq(i).attr('id')
                                                                                       });
                                                                             }
                                                                             mobl.contextStack.push(ar);
                                                                           }
                                                                           mobl.postCallHooks.forEach(function(fn) {
                                                                                                        fn(node);
                                                                                                      });
                                                                           if(replace)
                                                                           {
                                                                             var screenToRemove = screenContext.screens[screenContext.screens.length - 2];
                                                                             screenToRemove.dom.remove();
                                                                             screenContext.screens.splice(screenContext.screens.length - 2, 1);
                                                                           }
                                                                         },callbackFn]));
            };
mobl.ref = function(r, prop) {
             if(prop)
             {
               for(var i = 0; i < r.childRefs.length; i++)
               {
                 if(r.childRefs[i].prop === prop)
                 {
                   return r.childRefs[i];
                 }
               }
             }
             return new mobl.Reference(r,prop);
           };
function fromScope ( that , prop ) {
  if(prop)
  {
    return $(that).scope().get(prop);
  }
  else
  {
    return $(that).scope();
  }
}
mobl.stringTomobl__Num = function(s) {
                           return parseFloat(s, 10);
                         };
mobl.stringTomobl__String = function(s) {
                              return s;
                            };
mobl.conditionalDef = function(oldDef, condFn, newDef) {
                        return function() {
                                 if(condFn())
                                 {
                                   return newDef.apply(null, arguments);
                                 }
                                 else
                                 {
                                   return oldDef.apply(null, arguments);
                                 }
                               };
                      };
mobl.stringTomobl__DateTime = function(s) {
                                return new Date(s);
                              };
mobl.encodeUrlObj = function(obj) {
                      var parts = [];
                      for(var k in obj)
                      {
                        if(obj.hasOwnProperty(k))
                        {
                          parts.push(encodeURI(k) + "=" + encodeURI(obj[k]));
                        }
                      }
                      return "?" + parts.join("&");
                    };
function op ( operator , e1 , e2 , callback ) {
  switch(operator) {
    case '+':
      callback(e1 + e2);
      break;
    case '-':
      callback(e1 - e2);
      break;
    case '*':
      callback(e1 * e2);
      break;
    case '/':
      callback(e1 / e2);
      break;
    case '%':
      callback(e1 % e2);
      break;
    }
}
mobl.proxyUrl = function(url, user, password) {
                  if(user && password)
                  {
                    return '/proxy.php?user=' + user + '&pwd=' + password + '&proxy_url=' + encodeURIComponent(url);
                  }
                  else
                  {
                    return '/proxy.php?proxy_url=' + encodeURIComponent(url);
                  }
                };
mobl.remoteCollection = function(uri, datatype, processor) {
                          return {
                                   addEventListener: function() {
                                                     },
                                   list: function(_, callback) {
                                           $.ajax({
                                                    url: mobl.proxyUrl(uri),
                                                    datatype: datatype,
                                                    error: function(_, message, error) {
                                                             console.log(message);
                                                             console.log(error);
                                                             callback([]);
                                                           },
                                                    success: function(data) {
                                                               callback(processor(data));
                                                             }
                                                  });
                                         }
                                 };
                        };
mobl.ObservableObject = function(props) {
                          this._data = props;
                          this.subscribers = {
                                             };
                          var that = this;
                          for(var property in props)
                          {
                            if(props.hasOwnProperty(property))
                            {
                              (function() {
                                 var p = property;
                                 that.__defineGetter__(p, function() {
                                                            return this._data[p];
                                                          });
                                 that.__defineSetter__(p, function(val) {
                                                            this._data[p] = val;
                                                            this.triggerEvent('change', this, p, val);
                                                          });
                               }());
                            }
                          }
                        };
mobl.ObservableObject.prototype = new persistence.Observable ( );
mobl.ObservableObject.prototype.toJSON = function() {
                                           var obj = {
                                                     };
                                           for(var p in this._data)
                                           {
                                             if(this._data.hasOwnProperty(p))
                                             {
                                               obj[p] = this._data[p];
                                             }
                                           }
                                           return obj;
                                         };
function log ( s ) {
  console.log(s);
}
mobl.implementInterface = function(sourceModule, targetModule, items) {
                            for(var i = 0; i < items.length; i++)
                            {
                              targetModule[items[i]] = sourceModule[items[i]];
                            }
                          };
(function() {
   function Tuple ( ) {
     for(var i = 0; i < arguments.length; i++)
     {
       this['_' + ( i + 1 )] = arguments[i];
     }
     this.subscribers = {
                        };
     this.length = arguments.length;
   }
   Tuple.prototype = new persistence.Observable ( );
   Tuple.prototype.toJSON = function() {
                              var obj = {
                                        };
                              for(var i = 0; i < this.length; i++)
                              {
                                obj['_' + ( i + 1 )] = this['_' + ( i + 1 )];
                              }
                              return obj;
                            };
   var batchedEvents = [];
   function processEvents ( ) {
     var toTrigger = [];
     for(var i = 0; i < batchedEvents.length; i++)
     {
       var ev = batchedEvents[i];
       var found = false;
       for(var j = 0; j < toTrigger.length; j++)
       {
         var ev2 = toTrigger[j];
         if(ev.obj === ev2.obj && ev.eventType === ev2.eventType)
         {
           found = true;
           break;
         }
       }
       if(!found)
       {
         toTrigger.push(ev);
       }
     }
     batchedEvents = [ ];
     for(i = 0; i < toTrigger.length; i++)
     {
       var ev = toTrigger[i];
       ev.fn.apply(null, ev.args);
     }
   }
   function CompSubscription ( name ) {
     this.subscriptions = [ ];
     this.name = name;
   }
   CompSubscription.prototype.addSub = function(sub) {
                                         if(sub)
                                         {
                                           if(sub.node && ( sub.eventType.indexOf('change') !== -1 || sub.eventType.indexOf('key') !== -1 ))
                                           {
                                             var fn = sub.fn;
                                             sub.unsubscribe();
                                             sub = mobl.domBind(sub.node, sub.eventType, function() {
                                                                                           batchedEvents.push({
                                                                                                                obj: sub.node,
                                                                                                                eventType: sub.eventType,
                                                                                                                fn: fn,
                                                                                                                args: Array.prototype.slice.call(arguments)
                                                                                                              });
                                                                                           if(batchedEvents.length === 1)
                                                                                           {
                                                                                             setTimeout(processEvents, 300);
                                                                                           }
                                                                                         });
                                           }
                                           else
                                           if(sub.obj && sub.obj._filter && ( sub.eventType.indexOf('change') !== -1 || sub.eventType.indexOf('key') !== -1 ))
                                           {
                                             var fn = sub.fn;
                                             sub.unsubscribe();
                                             sub = sub.obj.addEventListener(sub.eventType, function() {
                                                                                             batchedEvents.push({
                                                                                                                  obj: sub.obj,
                                                                                                                  eventType: sub.eventType,
                                                                                                                  fn: fn,
                                                                                                                  args: Array.prototype.slice.call(arguments)
                                                                                                                });
                                                                                             if(batchedEvents.length === 1)
                                                                                             {
                                                                                               setTimeout(processEvents, 300);
                                                                                             }
                                                                                           });
                                           }
                                           this.subscriptions.push(sub);
                                         }
                                       };
   CompSubscription.prototype.unsubscribe = function() {
                                              this.subscriptions.forEach(function(sub) {
                                                                           sub.unsubscribe();
                                                                         });
                                              this.subscriptions = [ ];
                                            };
   function DomSubscription ( node , eventType , fn ) {
     this.node = node;
     this.eventType = eventType;
     this.fn = fn;
   }
   DomSubscription.prototype.unsubscribe = function() {
                                             this.node.unbind(this.eventType, this.fn);
                                           };
   DomSubscription.prototype.equals = function(o) {
                                        return this.node === o.node && this.eventType === o.eventType && this.fn === o.fn;
                                      };
   mobl.domBind = function(node, eventType, fn) {
                    node.bind(eventType, fn);
                    return new DomSubscription(node,eventType,fn);
                  };
   function Reference ( ref , prop ) {
     this.ref = ref;
     this.prop = prop;
     this.childRefs = [ ];
     if(prop)
     {
       ref.childRefs.push(this);
     }
     this.subscribers = {
                        };
   }
   Reference.prototype = new persistence.Observable ( );
   Reference.prototype.oldAddListener = Reference.prototype.addEventListener;
   Reference.prototype.addEventListener = function(eventType, callback) {
                                            if(eventType === 'change' && this.prop !== undefined && this.ref.get() && this.ref.get().addEventListener)
                                            {
                                              var that = this;
                                              var subs = new CompSubscription();
                                              subs.addSub(this.ref.get().addEventListener('change', function(_, _, prop, value) {
                                                                                                      if(prop === that.prop)
                                                                                                      {
                                                                                                        callback(eventType, that, value);
                                                                                                      }
                                                                                                    }));
                                              subs.addSub(this.oldAddListener(eventType, callback));
                                              return subs;
                                            }
                                            else
                                            {
                                              return this.oldAddListener(eventType, callback);
                                            }
                                          };
   Reference.prototype.addSetListener = function(callback) {
                                          var that = this;
                                          if(this.ref.addEventListener)
                                          {
                                            return this.ref.addEventListener('change', function(_, _, prop, value) {
                                                                                         if(prop === that.prop)
                                                                                         {
                                                                                           callback(eventType, that, value);
                                                                                         }
                                                                                       });
                                          }
                                        };
   Reference.prototype.get = function() {
                               if(this.prop === undefined)
                               {
                                 return this.ref;
                               }
                               if(this.ref.get)
                               {
                                 return this.ref.get()[this.prop];
                               }
                             };
   Reference.prototype.set = function(value) {
                               if(this.prop === undefined)
                               {
                                 this.ref = value;
                                 this.triggerEvent('change', this, value);
                               }
                               else
                               {
                                 this.ref.get()[this.prop] = value;
                                 this.triggerEvent('change', this, value);
                               }
                               var childRefs = this.childRefs.slice(0);
                               for(var i = 0; i < childRefs.length; i++)
                               {
                                 var childRef = childRefs[i];
                                 childRef.rebind();
                                 childRef.triggerEvent('change', childRef, childRef.get());
                               }
                             };
   Reference.prototype.rebind = function() {
                                  var that = this;
                                  var subs = new mobl.CompSubscription();
                                  if(this.prop !== undefined)
                                  {
                                    if(this.ref.get().addEventListener)
                                    {
                                      subs.addSub(this.ref.get().addEventListener('change', function(_, _, prop, value) {
                                                                                              if(prop === that.prop)
                                                                                              {
                                                                                                that.triggerEvent('change', that, value);
                                                                                              }
                                                                                            }));
                                    }
                                  }
                                  var childRefs = this.childRefs.slice(0);
                                  for(var i = 0; i < childRefs.length; i++)
                                  {
                                    subs.addSub(childRefs[i].rebind());
                                  }
                                  return subs;
                                };
   mobl.Tuple = Tuple;
   mobl.Reference = Reference;
   mobl.CompSubscription = CompSubscription;
 }());
}(mobl));mobl.Window = mobl.defineType('mobl.Window', null, {innerWidth: null,innerHeight: null});

mobl.window = mobl.ref(new mobl.Window({}));
(function(__ns) {
__ns.window.get().innerWidth = window.innerWidth;
__ns.window.get().innerHeight = window.innerHeight;
window.onresize = function() {
                    mobl.window.get().innerWidth = window.innerWidth;
                    mobl.window.get().innerHeight = window.innerHeight;
                  };
}(mobl));mobl.emailValidator = function(s) {
   var __this = this;
  return /^[A-Z0-9_%+.\-]+@[A-Z0-9.\-]+\.[A-Z]{2,4}$/i.test(s) ? "" : "Invalid e-mail address";
};

mobl.allInputValid = mobl.ref(true);
(function(__ns) {
__ns.setValidationError = function(id, ok) {
                            var screen = mobl.getCurrentScreen();
                            screen.validations = screen.validations || {
                                                                       };
                            screen.validations[id] = ok;
                            var isValid = true;
                            for(var p in screen.validations)
                            {
                              if(screen.validations.hasOwnProperty(p))
                              {
                                if(!screen.validations[p])
                                {
                                  isValid = false;
                                }
                              }
                            }
                            __ns.allInputValid.set(isValid);
                          };
}(mobl));