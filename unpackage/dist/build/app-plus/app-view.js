var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190703_syb_scopedata*/window.__wcc_version__='v0.5vv_20190703_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'goods_list'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'hotGoods']])
Z([3,'id'])
Z([3,'__e'])
Z([3,'goods_item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navItem']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'hotGoods']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]],[1,'id']]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'url']])
Z([3,'name'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'price'])
Z([a,[[2,'+'],[1,'¥ '],[[6],[[7],[3,'item']],[3,'price']]]])
Z([a,[[6],[[7],[3,'item']],[3,'byed']]])
Z([3,'人已购买'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'newsLists']])
Z([3,'id'])
Z([3,'__e'])
Z([3,'news_item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navItem']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'newsLists']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]],[1,'id']]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'url']])
Z([3,'right'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'info'])
Z([a,[[2,'+'],[1,'时间：'],[[6],[[7],[3,'item']],[3,'time']]]])
Z([a,[[2,'+'],[1,'阅读：'],[[6],[[7],[3,'item']],[3,'readed']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-goods-nav data-v-22343ea8'])
Z([3,'uni-tab__seat data-v-22343ea8'])
Z([3,'uni-tab__cart-box flex data-v-22343ea8'])
Z([3,'flex uni-tab__cart-sub-box data-v-22343ea8'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'options']])
Z(z[4])
Z([3,'__e'])
Z([3,'flex uni-tab__cart-button-left uni-tab__shop-cart data-v-22343ea8'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'onClick']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'options']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'uni-tab__icon data-v-22343ea8'])
Z([3,'image data-v-22343ea8'])
Z([3,'widthFix'])
Z([[6],[[7],[3,'item']],[3,'icon']])
Z([3,'uni-tab__text data-v-22343ea8'])
Z([a,[[6],[[7],[3,'item']],[3,'text']]])
Z([3,'flex uni-tab__dot-box data-v-22343ea8'])
Z([[6],[[7],[3,'item']],[3,'info']])
Z([[4],[[5],[[5],[1,'uni-tab__dot  data-v-22343ea8']],[[2,'?:'],[[2,'>'],[[6],[[7],[3,'item']],[3,'info']],[1,9]],[1,'uni-tab__dots'],[1,'']]]])
Z([a,[[6],[[7],[3,'item']],[3,'info']]])
Z([[4],[[5],[[5],[1,'flex uni-tab__cart-sub-box  data-v-22343ea8']],[[2,'?:'],[[7],[3,'fill']],[1,'uni-tab__right'],[1,'']]]])
Z(z[4])
Z(z[5])
Z([[7],[3,'buttonGroup']])
Z(z[4])
Z(z[8])
Z([3,'flex uni-tab__cart-button-right data-v-22343ea8'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'buttonClick']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'buttonGroup']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'background-color:'],[[6],[[7],[3,'item']],[3,'backgroundColor']]],[1,';']],[[2,'+'],[[2,'+'],[1,'color:'],[[6],[[7],[3,'item']],[3,'color']]],[1,';']]])
Z([3,'uni-tab__cart-button-right-text data-v-22343ea8'])
Z([a,z[16][1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contact'])
Z([3,'../../static/contact.jpg'])
Z([3,'__e'])
Z([3,'phone'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'callPhone']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'联系电话：1234567（点击拨打）'])
Z([3,'address'])
Z([3,'联系地址：广州市白云区'])
Z([3,'map'])
Z([[7],[3,'latitude']])
Z([[7],[3,'longitude']])
Z([[7],[3,'covers']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'goods_list'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^itemDetail']],[[4],[[5],[[4],[[5],[1,'itemDetail']]]]]]]]])
Z([[7],[3,'hotGoods']])
Z([3,'1'])
Z([[7],[3,'flag']])
Z([3,'footer'])
Z([3,'----我是有底线的----'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'goods_detail'])
Z([3,'id'])
Z([3,'item'])
Z([[6],[[7],[3,'goodsDetail']],[3,'imgUrl']])
Z(z[1])
Z([[7],[3,'item']])
Z([3,'box1'])
Z([3,'price'])
Z([a,[[2,'+'],[1,'¥ '],[[6],[[7],[3,'goodsDetail']],[3,'price']]]])
Z([a,[[6],[[7],[3,'goodsDetail']],[3,'oldPrice']]])
Z([3,'title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'goodsDetail']],[3,'title']]],[1,'']]])
Z([3,'line'])
Z([3,'box2'])
Z([3,'goods_num'])
Z([a,[[2,'+'],[1,'货号：'],[[6],[[7],[3,'goodsDetail']],[3,'goodsNum']]]])
Z([3,'stock'])
Z([a,[[2,'+'],[1,'库存：'],[[6],[[7],[3,'goodsDetail']],[3,'stock']]]])
Z(z[12])
Z([3,'box3'])
Z(z[1])
Z(z[2])
Z([[6],[[7],[3,'goodsDetail']],[3,'detailUrl']])
Z(z[1])
Z([3,'images'])
Z(z[5])
Z([3,'goods_nav'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[28])
Z([[7],[3,'buttonGroup']])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'onClick']]]]]]]],[[4],[[5],[[5],[1,'^buttonClick']],[[4],[[5],[[4],[[5],[1,'buttonClick']]]]]]]]])
Z([1,true])
Z([[7],[3,'options']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'home'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'lunbo']])
Z([3,'id'])
Z([[6],[[7],[3,'item']],[3,'url']])
Z([3,'nav'])
Z([3,'key'])
Z(z[2])
Z([[7],[3,'navlist']])
Z(z[7])
Z([3,'__e'])
Z([3,'nav_item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navItemclick']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'navlist']],[1,'']],[[7],[3,'key']]],[1,'url']]]]]]]]]]]]]]])
Z([[4],[[5],[[6],[[7],[3,'item']],[3,'icon']]]])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'hot_goods'])
Z([3,'title'])
Z([3,'推荐商品'])
Z([3,'__l'])
Z(z[11])
Z([[4],[[5],[[4],[[5],[[5],[1,'^itemDetail']],[[4],[[5],[[4],[[5],[1,'itemDetail']]]]]]]]])
Z([[7],[3,'hotGoods']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'个人中心'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^itemDetail']],[[4],[[5],[[4],[[5],[1,'newsDetail']]]]]]]]])
Z([[7],[3,'newsLists']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'详情页面'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pics'])
Z([3,'left'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'navList']])
Z([3,'id'])
Z([3,'__e'])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'active']],[[7],[3,'index']]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navClick']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'navList']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]],[1,'id']]]]]]]]]]]]]]])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'right'])
Z([3,'__i0__'])
Z(z[3])
Z([[7],[3,'itemList']])
Z(z[5])
Z(z[3])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'preView']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'itemList']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]],[1,'imgUrl']]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'imgUrl']])
Z([3,'title'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'kb'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'购物车'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/goods_list.wxml','./components/news_item.wxml','./components/uni-goods-nav/uni-goods-nav.wxml','./pages/contact/contact.wxml','./pages/goods/goods.wxml','./pages/goods/goodsDetail.wxml','./pages/index/index.wxml','./pages/me/me.wxml','./pages/news/news.wxml','./pages/news/newsDetail.wxml','./pages/pics/pics.wxml','./pages/shop/shop.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],cF,fE,gg)
var oJ=_n('image')
_rz(z,oJ,'src',8,cF,fE,gg)
_(cI,oJ)
var lK=_n('view')
_rz(z,lK,'class',9,cF,fE,gg)
var aL=_oz(z,10,cF,fE,gg)
_(lK,aL)
_(cI,lK)
var tM=_n('view')
_rz(z,tM,'class',11,cF,fE,gg)
var eN=_n('view')
var bO=_n('text')
var oP=_oz(z,12,cF,fE,gg)
_(bO,oP)
_(eN,bO)
var xQ=_n('text')
var oR=_oz(z,13,cF,fE,gg)
_(xQ,oR)
_(eN,xQ)
var fS=_n('text')
var cT=_oz(z,14,cF,fE,gg)
_(fS,cT)
_(eN,fS)
_(tM,eN)
_(cI,tM)
_(hG,cI)
return hG
}
xC.wxXCkey=2
_2z(z,3,oD,e,s,gg,xC,'item','__i0__','id')
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oV=_n('view')
var cW=_v()
_(oV,cW)
var oX=function(aZ,lY,t1,gg){
var b3=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],aZ,lY,gg)
var o4=_n('image')
_rz(z,o4,'src',7,aZ,lY,gg)
_(b3,o4)
var x5=_n('view')
_rz(z,x5,'class',8,aZ,lY,gg)
var o6=_n('view')
_rz(z,o6,'class',9,aZ,lY,gg)
var f7=_oz(z,10,aZ,lY,gg)
_(o6,f7)
_(x5,o6)
var c8=_n('view')
_rz(z,c8,'class',11,aZ,lY,gg)
var h9=_n('text')
var o0=_oz(z,12,aZ,lY,gg)
_(h9,o0)
_(c8,h9)
var cAB=_n('text')
var oBB=_oz(z,13,aZ,lY,gg)
_(cAB,oBB)
_(c8,cAB)
_(x5,c8)
_(b3,x5)
_(t1,b3)
return t1
}
cW.wxXCkey=2
_2z(z,2,oX,e,s,gg,cW,'item','__i0__','id')
_(r,oV)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var aDB=_n('view')
_rz(z,aDB,'class',0,e,s,gg)
var tEB=_n('view')
_rz(z,tEB,'class',1,e,s,gg)
_(aDB,tEB)
var eFB=_n('view')
_rz(z,eFB,'class',2,e,s,gg)
var bGB=_n('view')
_rz(z,bGB,'class',3,e,s,gg)
var oHB=_v()
_(bGB,oHB)
var xIB=function(fKB,oJB,cLB,gg){
var oNB=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],fKB,oJB,gg)
var cOB=_n('view')
_rz(z,cOB,'class',11,fKB,oJB,gg)
var oPB=_mz(z,'image',['class',12,'mode',1,'src',2],[],fKB,oJB,gg)
_(cOB,oPB)
_(oNB,cOB)
var lQB=_n('text')
_rz(z,lQB,'class',15,fKB,oJB,gg)
var aRB=_oz(z,16,fKB,oJB,gg)
_(lQB,aRB)
_(oNB,lQB)
var tSB=_n('view')
_rz(z,tSB,'class',17,fKB,oJB,gg)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,18,fKB,oJB,gg)){eTB.wxVkey=1
var bUB=_n('text')
_rz(z,bUB,'class',19,fKB,oJB,gg)
var oVB=_oz(z,20,fKB,oJB,gg)
_(bUB,oVB)
_(eTB,bUB)
}
eTB.wxXCkey=1
_(oNB,tSB)
_(cLB,oNB)
return cLB
}
oHB.wxXCkey=2
_2z(z,6,xIB,e,s,gg,oHB,'item','index','index')
_(eFB,bGB)
var xWB=_n('view')
_rz(z,xWB,'class',21,e,s,gg)
var oXB=_v()
_(xWB,oXB)
var fYB=function(h1B,cZB,o2B,gg){
var o4B=_mz(z,'view',['bindtap',26,'class',1,'data-event-opts',2,'style',3],[],h1B,cZB,gg)
var l5B=_n('text')
_rz(z,l5B,'class',30,h1B,cZB,gg)
var a6B=_oz(z,31,h1B,cZB,gg)
_(l5B,a6B)
_(o4B,l5B)
_(o2B,o4B)
return o2B
}
oXB.wxXCkey=2
_2z(z,24,fYB,e,s,gg,oXB,'item','index','index')
_(eFB,xWB)
_(aDB,eFB)
_(r,aDB)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var e8B=_n('view')
_rz(z,e8B,'class',0,e,s,gg)
var b9B=_n('image')
_rz(z,b9B,'src',1,e,s,gg)
_(e8B,b9B)
var o0B=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var xAC=_oz(z,5,e,s,gg)
_(o0B,xAC)
_(e8B,o0B)
var oBC=_n('view')
_rz(z,oBC,'class',6,e,s,gg)
var fCC=_oz(z,7,e,s,gg)
_(oBC,fCC)
_(e8B,oBC)
var cDC=_mz(z,'map',['class',8,'latitude',1,'longitude',2,'markers',3],[],e,s,gg)
_(e8B,cDC)
_(r,e8B)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oFC=_n('view')
_rz(z,oFC,'class',0,e,s,gg)
var oHC=_mz(z,'good-lists',['bind:__l',1,'bind:itemDetail',1,'data-event-opts',2,'hotGoods',3,'vueId',4],[],e,s,gg)
_(oFC,oHC)
var cGC=_v()
_(oFC,cGC)
if(_oz(z,6,e,s,gg)){cGC.wxVkey=1
var lIC=_n('view')
_rz(z,lIC,'class',7,e,s,gg)
var aJC=_oz(z,8,e,s,gg)
_(lIC,aJC)
_(cGC,lIC)
}
cGC.wxXCkey=1
_(r,oFC)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var eLC=_n('view')
_rz(z,eLC,'class',0,e,s,gg)
var bMC=_n('swiper')
bMC.attr['indicatorDots']=true
var oNC=_v()
_(bMC,oNC)
var xOC=function(fQC,oPC,cRC,gg){
var oTC=_n('swiper-item')
var cUC=_n('image')
_rz(z,cUC,'src',5,fQC,oPC,gg)
_(oTC,cUC)
_(cRC,oTC)
return cRC
}
oNC.wxXCkey=2
_2z(z,3,xOC,e,s,gg,oNC,'item','id','id')
_(eLC,bMC)
var oVC=_n('view')
_rz(z,oVC,'class',6,e,s,gg)
var lWC=_n('view')
_rz(z,lWC,'class',7,e,s,gg)
var aXC=_n('text')
var tYC=_oz(z,8,e,s,gg)
_(aXC,tYC)
_(lWC,aXC)
var eZC=_n('text')
var b1C=_oz(z,9,e,s,gg)
_(eZC,b1C)
_(lWC,eZC)
_(oVC,lWC)
var o2C=_n('view')
_rz(z,o2C,'class',10,e,s,gg)
var x3C=_oz(z,11,e,s,gg)
_(o2C,x3C)
_(oVC,o2C)
var o4C=_n('view')
_rz(z,o4C,'class',12,e,s,gg)
_(oVC,o4C)
_(eLC,oVC)
var f5C=_n('view')
_rz(z,f5C,'class',13,e,s,gg)
var c6C=_n('view')
_rz(z,c6C,'class',14,e,s,gg)
var h7C=_oz(z,15,e,s,gg)
_(c6C,h7C)
_(f5C,c6C)
var o8C=_n('view')
_rz(z,o8C,'class',16,e,s,gg)
var c9C=_oz(z,17,e,s,gg)
_(o8C,c9C)
_(f5C,o8C)
var o0C=_n('view')
_rz(z,o0C,'class',18,e,s,gg)
_(f5C,o0C)
_(eLC,f5C)
var lAD=_n('view')
_rz(z,lAD,'class',19,e,s,gg)
var aBD=_v()
_(lAD,aBD)
var tCD=function(bED,eDD,oFD,gg){
var oHD=_n('view')
_rz(z,oHD,'class',24,bED,eDD,gg)
var fID=_n('image')
_rz(z,fID,'src',25,bED,eDD,gg)
_(oHD,fID)
_(oFD,oHD)
return oFD
}
aBD.wxXCkey=2
_2z(z,22,tCD,e,s,gg,aBD,'item','id','id')
_(eLC,lAD)
var cJD=_n('view')
_rz(z,cJD,'class',26,e,s,gg)
var hKD=_mz(z,'uni-goods-nav',['bind:__l',27,'bind:buttonClick',1,'bind:click',2,'buttonGroup',3,'data-event-opts',4,'fill',5,'options',6,'vueId',7],[],e,s,gg)
_(cJD,hKD)
_(eLC,cJD)
_(r,eLC)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var cMD=_n('view')
_rz(z,cMD,'class',0,e,s,gg)
var oND=_mz(z,'swiper',['autoplay',-1,'circular',-1,'indicatorDots',-1],[],e,s,gg)
var lOD=_v()
_(oND,lOD)
var aPD=function(eRD,tQD,bSD,gg){
var xUD=_n('swiper-item')
var oVD=_n('image')
_rz(z,oVD,'src',5,eRD,tQD,gg)
_(xUD,oVD)
_(bSD,xUD)
return bSD
}
lOD.wxXCkey=2
_2z(z,3,aPD,e,s,gg,lOD,'item','__i0__','id')
_(cMD,oND)
var fWD=_n('view')
_rz(z,fWD,'class',6,e,s,gg)
var cXD=_v()
_(fWD,cXD)
var hYD=function(c1D,oZD,o2D,gg){
var a4D=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],c1D,oZD,gg)
var t5D=_n('view')
_rz(z,t5D,'class',14,c1D,oZD,gg)
_(a4D,t5D)
var e6D=_n('text')
var b7D=_oz(z,15,c1D,oZD,gg)
_(e6D,b7D)
_(a4D,e6D)
_(o2D,a4D)
return o2D
}
cXD.wxXCkey=2
_2z(z,9,hYD,e,s,gg,cXD,'item','key','key')
_(cMD,fWD)
var o8D=_n('view')
_rz(z,o8D,'class',16,e,s,gg)
var x9D=_n('view')
_rz(z,x9D,'class',17,e,s,gg)
var o0D=_oz(z,18,e,s,gg)
_(x9D,o0D)
_(o8D,x9D)
var fAE=_mz(z,'good-lists',['bind:__l',19,'bind:itemDetail',1,'data-event-opts',2,'hotGoods',3,'vueId',4],[],e,s,gg)
_(o8D,fAE)
_(cMD,o8D)
_(r,cMD)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var hCE=_n('view')
var oDE=_oz(z,0,e,s,gg)
_(hCE,oDE)
_(r,hCE)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oFE=_n('view')
var lGE=_mz(z,'news-list',['bind:__l',0,'bind:itemDetail',1,'data-event-opts',1,'newsLists',2,'vueId',3],[],e,s,gg)
_(oFE,lGE)
_(r,oFE)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var tIE=_n('view')
var eJE=_oz(z,0,e,s,gg)
_(tIE,eJE)
_(r,tIE)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oLE=_n('view')
_rz(z,oLE,'class',0,e,s,gg)
var xME=_n('view')
var oNE=_mz(z,'scroll-view',['scrollY',-1,'class',1],[],e,s,gg)
var fOE=_v()
_(oNE,fOE)
var cPE=function(oRE,hQE,cSE,gg){
var lUE=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],oRE,hQE,gg)
var aVE=_oz(z,9,oRE,hQE,gg)
_(lUE,aVE)
_(cSE,lUE)
return cSE
}
fOE.wxXCkey=2
_2z(z,4,cPE,e,s,gg,fOE,'item','index','id')
_(xME,oNE)
_(oLE,xME)
var tWE=_mz(z,'scroll-view',['scrollY',-1,'class',10],[],e,s,gg)
var eXE=_v()
_(tWE,eXE)
var bYE=function(x1E,oZE,o2E,gg){
var c4E=_n('view')
_rz(z,c4E,'class',15,x1E,oZE,gg)
var h5E=_mz(z,'image',['bindtap',16,'data-event-opts',1,'src',2],[],x1E,oZE,gg)
_(c4E,h5E)
var o6E=_n('text')
_rz(z,o6E,'class',19,x1E,oZE,gg)
var c7E=_oz(z,20,x1E,oZE,gg)
_(o6E,c7E)
_(c4E,o6E)
var o8E=_n('view')
_rz(z,o8E,'class',21,x1E,oZE,gg)
_(c4E,o8E)
_(o2E,c4E)
return o2E
}
eXE.wxXCkey=2
_2z(z,13,bYE,e,s,gg,eXE,'item','__i0__','id')
_(oLE,tWE)
_(r,oLE)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var a0E=_n('view')
var tAF=_oz(z,0,e,s,gg)
_(a0E,tAF)
_(r,a0E)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@font-face {font-family: \x22iconfont\x22; src: url(data:application/vnd.ms-fontobject;base64,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); src: url(data:application/vnd.ms-fontobject;base64,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#iefix) format(\x27embedded-opentype\x27), \n  url(data:application/x-font-woff2;charset\x3dutf-8;base64,d09GMgABAAAAAAScAAsAAAAACVQAAARPAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDGgqGCIUDATYCJAMUCwwABCAFhG0HSRv4BxEVpFGQfZFgntwUCcstx+Sbcn6GRJFkzVBKiChnVq0Z2SNpIcgkOwQgB9EQRAf5EOCtzc1+bKOi3jEl7refvkAKZaWXhhUACbi73/pIXP8PjpkuEgeWBzSXyqRqG206wQFF5TfQ6+M/ID54DI/bQjzEbfDq0uMQwKUcdZAu3foMwaDRxwkgM6dNGYdJaNAVJMHIIwVLdb7sxsZYW6zXWLDL+3v5lVgMWNgK/aQBk7tOpMMP8oNWQYiRKiAYzgSwq0ABdQANMrzQMgQVROqgcGWLpkZ1f43ADzr8D+JwFmsB3fgfzwKJoEtyANshquEHsTiR1AIVCnjAPVAuRLGAa1kFLlAY+I2FtEJFmSG7aRSmQIHCyokmq7QqXcCJOp71zZflffBBzP7ww3j+++/7+r33lt96q4w+8nbT/LvvlrePvtNs6tZ0sbOl1KHqmW1Fx50JqoxNJkcQnxG8tfWdxLvb3p5nFZC4P2VCga1JdJDyCm7LiJ1I+zp4yy2w9Z1I9G6299sr3KWnL5X0CVJFvcpgXPzUmV13rviMQ1cWir9kKsmkmyw2eUImUyyRLjI2lk4UV88VXopZ7mj3g07izY5Fb+Pp6akL2y4mslvPx597b0juBx/4lwQZ19hReWMaELo/3zQ2YIkVPH6yW9MBQbaHjBkjPbIw29JDEqPqN77QAJVVNMh6W7y3JhIM6mNipk+qWKpWtnWT1h48KKjS7LkL45jVrF4447Qcqs6+c2fE8MqVq5zeF82aOyYbxRGDC92p5lfdV9WvRn4SbSs7ptXcDyaW/e+9flU9Kjiqo1o/zT6TmlrcyZ01Z/eVwSf+OH1z0qg1lbZfsasOVGOH1DKzvx5Uumnk6cZrvn7rYWVTIfpUqwof6KcMzwzvWLfmDmf0oIoLnHh8dVc6S2yWNyX1eXg8r0t5WNr1ma+Pd59uehR3Yj1GjH85vyCpS9UHtdwBzBxrevaacTzRc6SJN2iYW7AkrivFqce0GbbqN9OzTZ8mL+W8jBYAhC/rXqp5CB1VDoSn1Z9qxI/oPB6ffHXRmPw2/xtPA/DJ9D/6eq5QqFssAMyNtQr8ZFS6ZwVigcLXtbaWRqB7grZCuksRNn0xcPtFruGAEB2F+GIYWdHGJBBZ0QgsopQFhaEKUmPrgI1HE4hgaA8utem+2qMw81GIdoBabCAgFOAqWOTxJCgK8DpSYz8Hm2L8DhEKiAKXmBTe0gNwFnO6MSrBHNIZTEadRi8nP/WNRd8ojvM98h/ZGT9EfpiOv7BDHmKGG4pYRINmauFJTsOmIbBMFWbilyI2CQJd9EV+Ru3itLgxKsEcSGfAZNRpp72cMr//xqJvFFfUlBn/yM50DkT4hA2QL0nXqOZSeruhiBHR1CjN1AJPMGFjRAiwxYMqzMSn7BCyCQE20k0l/vSy9h5z/7t19U+zl5Yo0WJLhO1gcqStLUno0BjVTca7bFxJdrEAAA\x3d\x3d) format(\x27woff2\x27),\n  url(data:font/woff;base64,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\x3d) format(\x27woff\x27),\n  url(data:font/ttf;base64,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) format(\x27truetype\x27), \n  url(../../static/img/iconfont.770564c9.svg#iconfont-do-not-use-local-path-./common/main.wxss\x2623\x267) format(\x27svg\x27); }\n.",[1],"iconfont { font-family: \x22iconfont\x22 !important; font-size: 16px; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.",[1],"iconvideo:before { content: \x22\\E603\x22; }\n.",[1],"iconphoto:before { content: \x22\\E604\x22; }\n.",[1],"iconlianxi-A:before { content: \x22\\E602\x22; }\n.",[1],"iconshop:before { content: \x22\\E601\x22; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/goods_list.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"goods_list { padding: 0 ",[0,15],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"goods_list .",[1],"goods_item { background-color: #FFFFFF; width: ",[0,355],"; border-radius: ",[0,20],"; margin-bottom: ",[0,10],"; }\n.",[1],"goods_list .",[1],"goods_item wx-image { width: 100%; height: 150px; }\n.",[1],"goods_list .",[1],"goods_item .",[1],"name { padding: ",[0,5]," ",[0,20],"; margin-top: ",[0,15],"; font-size: ",[0,28],"; line-height: ",[0,40],"; }\n.",[1],"goods_list .",[1],"goods_item .",[1],"price { padding: ",[0,5]," ",[0,20],"; margin-top: ",[0,10],"; margin-bottom: ",[0,25],"; }\n.",[1],"goods_list .",[1],"goods_item .",[1],"price wx-text:nth-child(1) { color: #d81e06; }\n.",[1],"goods_list .",[1],"goods_item .",[1],"price wx-text:nth-child(2) { margin-left: ",[0,20],"; color: #C8C7CC; font-size: ",[0,30],"; }\n.",[1],"goods_list .",[1],"goods_item .",[1],"price wx-text:nth-child(3) { color: #C8C7CC; font-size: ",[0,30],"; }\n",],undefined,{path:"./components/goods_list.wxss"});    
__wxAppCode__['components/goods_list.wxml']=$gwx('./components/goods_list.wxml');

__wxAppCode__['components/news_item.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"news_item { display: -webkit-box; display: -webkit-flex; display: flex; padding: ",[0,10]," ",[0,20],"; border-bottom: 1px solid #d81e06; }\n.",[1],"news_item wx-image { min-width: ",[0,200],"; max-width: ",[0,200],"; height: ",[0,200],"; }\n.",[1],"news_item .",[1],"right { margin-left: ",[0,15],"; padding: ",[0,10]," ",[0,10],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"news_item .",[1],"right .",[1],"title { font-size: ",[0,30],"; }\n.",[1],"news_item .",[1],"right .",[1],"info { font-size: ",[0,20],"; }\n.",[1],"news_item .",[1],"right .",[1],"info wx-text:nth-child(2) { margin-left: ",[0,30],"; }\n",],undefined,{path:"./components/news_item.wxss"});    
__wxAppCode__['components/news_item.wxml']=$gwx('./components/news_item.wxml');

__wxAppCode__['components/uni-goods-nav/uni-goods-nav.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"flex.",[1],"data-v-22343ea8 { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; }\n.",[1],"uni-goods-nav.",[1],"data-v-22343ea8 { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; }\n.",[1],"uni-tab__cart-box.",[1],"data-v-22343ea8 { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; height: ",[0,100],"; background-color: #fff; z-index: 900; }\n.",[1],"uni-tab__cart-sub-box.",[1],"data-v-22343ea8 { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; }\n.",[1],"uni-tab__right.",[1],"data-v-22343ea8 { margin: 5px 0; margin-right: 10px; border-radius: 100px; overflow: hidden; }\n.",[1],"uni-tab__cart-button-left.",[1],"data-v-22343ea8 { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; position: relative; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"uni-tab__icon.",[1],"data-v-22343ea8 { width: 20px; height: 20px; }\n.",[1],"image.",[1],"data-v-22343ea8 { width: 20px; height: 20px; }\n.",[1],"uni-tab__text.",[1],"data-v-22343ea8 { margin-top: 3px; font-size: ",[0,24],"; color: #666; }\n.",[1],"uni-tab__cart-button-right.",[1],"data-v-22343ea8 { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"uni-tab__cart-button-right-text.",[1],"data-v-22343ea8 { font-size: ",[0,28],"; color: #fff; }\n.",[1],"uni-tab__cart-button-right.",[1],"data-v-22343ea8:active { opacity: 0.7; }\n.",[1],"uni-tab__dot-box.",[1],"data-v-22343ea8 { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; position: absolute; right: 12px; top: 4px; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"uni-tab__dot.",[1],"data-v-22343ea8 { padding: 0 4px; line-height: 15px; color: #ffffff; text-align: center; font-size: 12px; background-color: #ff0000; border-radius: 15px; }\n.",[1],"uni-tab__dots.",[1],"data-v-22343ea8 { padding: 0 4px; border-radius: 15px; }\n.",[1],"uni-tab__color-y.",[1],"data-v-22343ea8 { background-color: #ffa200; }\n.",[1],"uni-tab__color-r.",[1],"data-v-22343ea8 { background-color: #ff0000; }\n",],undefined,{path:"./components/uni-goods-nav/uni-goods-nav.wxss"});    
__wxAppCode__['components/uni-goods-nav/uni-goods-nav.wxml']=$gwx('./components/uni-goods-nav/uni-goods-nav.wxml');

__wxAppCode__['pages/contact/contact.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"contact wx-image { width: 100%; height: 230px; }\n.",[1],"contact .",[1],"phone { font-size: ",[0,40],"; line-height: ",[0,80],"; border-bottom: 1px solid #eee; padding: ",[0,10]," ",[0,15],"; }\n.",[1],"contact .",[1],"address { font-size: ",[0,40],"; line-height: ",[0,80],"; border-bottom: 1px solid #eee; padding: ",[0,10]," ",[0,15],"; }\n.",[1],"contact .",[1],"map { margin-top: 20px; width: 100%; height: 350px; }\n",],undefined,{path:"./pages/contact/contact.wxss"});    
__wxAppCode__['pages/contact/contact.wxml']=$gwx('./pages/contact/contact.wxml');

__wxAppCode__['pages/goods/goods.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"goods_list { background: #F1F1F1; padding-top: ",[0,10],"; }\n.",[1],"footer { width: 100%; height: 50px; line-height: 50px; font-size: 10px; text-align: center; }\n",],undefined,{path:"./pages/goods/goods.wxss"});    
__wxAppCode__['pages/goods/goods.wxml']=$gwx('./pages/goods/goods.wxml');

__wxAppCode__['pages/goods/goodsDetail.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"goods_detail wx-swiper { height: ",[0,750],"; }\n.",[1],"goods_detail wx-swiper wx-swiper-item { height: 100%; width: 100%; }\n.",[1],"goods_detail wx-swiper wx-swiper-item wx-image { width: 100%; height: 100%; }\n.",[1],"goods_detail .",[1],"box1 .",[1],"price { margin: ",[0,20]," ",[0,30],"; font-size: ",[0,45],"; color: #d81e06; }\n.",[1],"goods_detail .",[1],"box1 .",[1],"price wx-text:nth-child(2) { font-size: ",[0,30],"; color: #ccc; text-decoration: line-through; margin-left: ",[0,10],"; }\n.",[1],"goods_detail .",[1],"box1 .",[1],"title { margin: ",[0,0]," ",[0,30],"; font-size: ",[0,35],"; line-height: ",[0,40],"; }\n.",[1],"goods_detail .",[1],"box2 { font-size: ",[0,30],"; }\n.",[1],"goods_detail .",[1],"box2 .",[1],"goods_num { margin: ",[0,30]," ",[0,10]," ",[0,0]," ",[0,30],"; }\n.",[1],"goods_detail .",[1],"box2 .",[1],"stock { margin: ",[0,10]," ",[0,30],"; }\n.",[1],"goods_detail .",[1],"box3 { padding-bottom: 50px; }\n.",[1],"goods_detail .",[1],"box3 .",[1],"detail_title { margin-top: ",[0,10],"; font-size: ",[0,30],"; margin-left: ",[0,20],"; }\n.",[1],"goods_detail .",[1],"box3 .",[1],"images { width: ",[0,750],"; }\n.",[1],"goods_detail .",[1],"box3 .",[1],"images wx-image { width: 100%; height: ",[0,1060],"; }\n.",[1],"goods_detail .",[1],"line { width: 100%; height: 3px; background: #EEEEEE; margin-top: ",[0,30],"; }\n.",[1],"goods_detail .",[1],"goods_nav { position: fixed; bottom: 0; width: 100%; }\n",],undefined,{path:"./pages/goods/goodsDetail.wxss"});    
__wxAppCode__['pages/goods/goodsDetail.wxml']=$gwx('./pages/goods/goodsDetail.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"home wx-swiper { width: ",[0,750],"; height: ",[0,380],"; }\n.",[1],"home wx-swiper wx-image { width: 100%; height: 100%; }\n.",[1],"home .",[1],"nav { display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"home .",[1],"nav .",[1],"nav_item { width: 25%; text-align: center; }\n.",[1],"home .",[1],"nav .",[1],"nav_item wx-view { width: ",[0,120],"; height: ",[0,120],"; background-color: #d81e06; border-radius: ",[0,60],"; margin: 10px auto; line-height: ",[0,120],"; color: #FFFFFF; font-size: ",[0,50],"; }\n.",[1],"home .",[1],"nav .",[1],"nav_item wx-text { font-size: ",[0,30],"; }\n.",[1],"home .",[1],"hot_goods { background-color: #eee; margin-top: 5px; overflow: hidden; }\n.",[1],"home .",[1],"hot_goods .",[1],"title { height: 50px; line-height: 50px; color: #d81e06; text-align: center; letter-spacing: 20px; background: #FFFFFF; margin: 5px 0; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/me/me.wxss']=undefined;    
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/news/news.wxss']=undefined;    
__wxAppCode__['pages/news/news.wxml']=$gwx('./pages/news/news.wxml');

__wxAppCode__['pages/news/newsDetail.wxss']=undefined;    
__wxAppCode__['pages/news/newsDetail.wxml']=$gwx('./pages/news/newsDetail.wxml');

__wxAppCode__['pages/pics/pics.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { height: 100%; }\n.",[1],"pics { height: 100%; display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"pics .",[1],"left { width: ",[0,200],"; height: 100%; border-left: 1px solid #eee; }\n.",[1],"pics .",[1],"left wx-view { height: ",[0,120],"; line-height: ",[0,120],"; color: #333; text-align: center; font-size: ",[0,30],"; border-top: 1px solid #eee; }\n.",[1],"pics .",[1],"left .",[1],"active { background: #d81e06; color: #fff; }\n.",[1],"pics .",[1],"right { width: ",[0,520],"; height: 100%; margin: ",[0,10]," auto; }\n.",[1],"pics .",[1],"right .",[1],"item wx-image { width: ",[0,520],"; height: ",[0,520],"; }\n.",[1],"pics .",[1],"right .",[1],"item .",[1],"title { font-size: ",[0,30],"; line-height: ",[0,50],"; }\n.",[1],"pics .",[1],"right .",[1],"item .",[1],"kb { width: 100%; height: ",[0,50],"; }\n",],undefined,{path:"./pages/pics/pics.wxss"});    
__wxAppCode__['pages/pics/pics.wxml']=$gwx('./pages/pics/pics.wxml');

__wxAppCode__['pages/shop/shop.wxss']=undefined;    
__wxAppCode__['pages/shop/shop.wxml']=$gwx('./pages/shop/shop.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
