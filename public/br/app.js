(()=>{var yh=0,Nl=1,Mh=2;var Er=1,Sh=2,Ps=3,Di=0,en=1,vn=2,Ji=0,Ui=1,gi=2,Dl=3,Ul=4,bh=5;var Ki=100,Th=101,wh=102,Ah=103,Eh=104,Ch=200,Rh=201,Ih=202,Ph=203,Fl=204,Ol=205,Lh=206,Nh=207,Dh=208,Uh=209,Fh=210,Oh=211,Bh=212,kh=213,zh=214,ba=0,Ta=1,wa=2,vs=3,Aa=4,Ea=5,Ca=6,Ra=7,Bl=0,Gh=1,Vh=2,Jn=0,kl=1,zl=2,Gl=3,Cr=4,Vl=5,Hl=6,Wl=7;var Xl=300,Qi=301,Ls=302,to=303,eo=304,Ia=1e3,Hn=1001,Pa=1002,ze=1003,Hh=1004;var Rr=1005;var fn=1006,no=1007;var xi=1008;var yn=1009,ql=1010,Yl=1011,Ns=1012,io=1013,Bn=1014,Pn=1015,kn=1016,so=1017,ro=1018,ji=1020,$l=35902,Zl=35899,Jl=1021,Kl=1022,zn=1023,ui=1026,_i=1027,Ds=1028,ao=1029,Fi=1030,oo=1031;var lo=1033,Ir=33776,Pr=33777,Lr=33778,Nr=33779,co=35840,ho=35841,uo=35842,fo=35843,po=36196,mo=37492,go=37496,xo=37488,_o=37489,Dr=37490,vo=37491,yo=37808,Mo=37809,So=37810,bo=37811,To=37812,wo=37813,Ao=37814,Eo=37815,Co=37816,Ro=37817,Io=37818,Po=37819,Lo=37820,No=37821,Do=36492,Uo=36494,Fo=36495,Oo=36283,Bo=36284,Ur=36285,ko=36286;var Qs=2300,La=2301,Ma=2302,wl=2303,Al=2400,El=2401,Cl=2402;var Wh=3200;var zo=0,Xh=1,vi="",ln="srgb",js="srgb-linear",tr="linear",me="srgb";var Sa=7680;var qh=519,Yh=512,$h=513,Zh=514,Ql=515,Jh=516,Kh=517,jl=518,tc=519,Qh=35044;var ec="300 es",Rn=2e3,ys=2001;function Pd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ld(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jh(){let i=er("canvas");return i.style.display="block",i}var qc={},Ms=null;function nc(...i){let t="THREE."+i.shift();Ms?Ms("log",t,...i):console.log(t,...i)}function tu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=tu(i);let t="THREE."+i.shift();if(Ms)Ms("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Xt(...i){i=tu(i);let t="THREE."+i.shift();if(Ms)Ms("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Zs(...i){let t=i.join(" ");t in qc||(qc[t]=!0,Gt(...i))}function eu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var nu={[ba]:ba,[wa]:Ca,[Aa]:Aa,[vs]:Ea,[Ta]:Ta,[Ca]:wa,[Ra]:Ra,[Ea]:vs},Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=1234567,Js=Math.PI/180,Ss=180/Math.PI;function Us(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function ic(i,t){return(i%t+t)%t}function Nd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Dd(i,t,e){return i!==t?(e-i)/(t-i):0}function Ks(i,t,e){return(1-e)*i+e*t}function Ud(i,t,e,n){return Ks(i,t,1-Math.exp(-e*n))}function Fd(i,t=1){return t-Math.abs(ic(i,t*2)-t)}function Od(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Bd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function kd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function zd(i,t){return i+Math.random()*(t-i)}function Gd(i){return i*(.5-Math.random())}function Vd(i){i!==void 0&&(Yc=i);let t=Yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hd(i){return i*Js}function Wd(i){return i*Ss}function Xd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function qd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),g=r((t-n)/2),d=a((t-n)/2),h=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*g,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*g,o*c);break;case"ZXZ":i.set(l*g,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*h,o*c);break;case"YXY":i.set(l*h,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*h,o*u,o*c);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function iu(i,t){if(t.constructor===Float32Array)return i;let e=rc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function su(i,t){if(t.constructor===Float32Array)return i;let e=rc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Ln={DEG2RAD:Js,RAD2DEG:Ss,generateUUID:Us,clamp:ie,euclideanModulo:ic,mapLinear:Nd,inverseLerp:Dd,lerp:Ks,damp:Ud,pingpong:Fd,smoothstep:Od,smootherstep:Bd,randInt:kd,randFloat:zd,randFloatSpread:Gd,seededRandom:Vd,degToRad:Hd,radToDeg:Wd,isPowerOfTwo:Xd,ceilPowerOfTwo:qd,floorPowerOfTwo:sc,setQuaternionFromProperEuler:Yd,normalize:su,denormalize:iu},hc=class hc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hc.prototype.isVector2=!0;var jt=hc,In=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],g=n[s+3],d=r[a+0],h=r[a+1],m=r[a+2],_=r[a+3];if(g!==_||l!==d||c!==h||u!==m){let p=l*d+c*h+u*m+g*_;p<0&&(d=-d,h=-h,m=-m,_=-_,p=-p);let f=1-o;if(p<.9995){let v=Math.acos(p),w=Math.sin(v);f=Math.sin(f*v)/w,o=Math.sin(o*v)/w,l=l*f+d*o,c=c*f+h*o,u=u*f+m*o,g=g*f+_*o}else{l=l*f+d*o,c=c*f+h*o,u=u*f+m*o,g=g*f+_*o;let v=1/Math.sqrt(l*l+c*c+u*u+g*g);l*=v,c*=v,u*=v,g*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],g=r[a],d=r[a+1],h=r[a+2],m=r[a+3];return t[e]=o*m+u*g+l*h-c*d,t[e+1]=l*m+u*d+c*g-o*h,t[e+2]=c*m+u*h+o*d-l*g,t[e+3]=u*m-o*g-l*d-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),g=o(r/2),d=l(n/2),h=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*u*g+c*h*m,this._y=c*h*g-d*u*m,this._z=c*u*m+d*h*g,this._w=c*u*g-d*h*m;break;case"YXZ":this._x=d*u*g+c*h*m,this._y=c*h*g-d*u*m,this._z=c*u*m-d*h*g,this._w=c*u*g+d*h*m;break;case"ZXY":this._x=d*u*g-c*h*m,this._y=c*h*g+d*u*m,this._z=c*u*m+d*h*g,this._w=c*u*g-d*h*m;break;case"ZYX":this._x=d*u*g-c*h*m,this._y=c*h*g+d*u*m,this._z=c*u*m-d*h*g,this._w=c*u*g+d*h*m;break;case"YZX":this._x=d*u*g+c*h*m,this._y=c*h*g+d*u*m,this._z=c*u*m-d*h*g,this._w=c*u*g-d*h*m;break;case"XZY":this._x=d*u*g-c*h*m,this._y=c*h*g-d*u*m,this._z=c*u*m+d*h*g,this._w=c*u*g+d*h*m;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],g=e[10],d=n+o+g;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(n>o&&n>g){let h=2*Math.sqrt(1+n-o-g);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>g){let h=2*Math.sqrt(1+o-n-g);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+g-n-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uc=class uc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($c.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),g=2*(r*n-a*e);return this.x=e+l*c+a*g-o*u,this.y=n+l*u+o*c-r*g,this.z=s+l*g+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rl.copy(this).projectOnVector(t),this.sub(rl)}reflect(t){return this.sub(rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uc.prototype.isVector3=!0;var k=uc,rl=new k,$c=new In,dc=class dc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],g=n[7],d=n[2],h=n[5],m=n[8],_=s[0],p=s[3],f=s[6],v=s[1],w=s[4],T=s[7],A=s[2],b=s[5],x=s[8];return r[0]=a*_+o*v+l*A,r[3]=a*p+o*w+l*b,r[6]=a*f+o*T+l*x,r[1]=c*_+u*v+g*A,r[4]=c*p+u*w+g*b,r[7]=c*f+u*T+g*x,r[2]=d*_+h*v+m*A,r[5]=d*p+h*w+m*b,r[8]=d*f+h*T+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],g=u*a-o*c,d=o*l-u*r,h=c*r-a*l,m=e*g+n*d+s*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=g*_,t[1]=(s*c-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=h*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(al.makeScale(t,e)),this}rotate(t){return Zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(al.makeRotation(-t)),this}translate(t,e){return Zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dc.prototype.isMatrix3=!0;var Zt=dc,al=new Zt,Zc=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jc=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $d(){let i={enabled:!0,workingColorSpace:js,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[js]:{primaries:t,whitePoint:n,transfer:tr,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}var ne=$d();function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ss,Na=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ss===void 0&&(ss=er("canvas")),ss.width=t.width,ss.height=t.height;let s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ss}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zd=0,bs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ol(s[a].image)):r.push(ol(s[a]))}else r=ol(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ol(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Na.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var Jd=0,ll=new k,pn=class i extends Wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=fn,a=xi,o=zn,l=yn,c=i.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Us(),this.name="",this.source=new bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ll).x}get height(){return this.source.getSize(ll).y}get depth(){return this.source.getSize(ll).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ia:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ia:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Xl;pn.DEFAULT_ANISOTROPY=1;var fc=class fc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],g=l[8],d=l[1],h=l[5],m=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(g-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(g+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,T=(h+1)/2,A=(f+1)/2,b=(u+d)/4,x=(g+_)/4,y=(m+p)/4;return w>T&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=x/n):T>A?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=b/s,r=y/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=x/r,s=y/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(g-_)*(g-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(g-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fc.prototype.isVector4=!0;var Re=fc,Da=class extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new pn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new bs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends Da{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},nr=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ua=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ja=class ja{constructor(t,e,n,s,r,a,o,l,c,u,g,d,h,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,g,d,h,m,_,p)}set(t,e,n,s,r,a,o,l,c,u,g,d,h,m,_,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=g,f[14]=d,f[3]=h,f[7]=m,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ja().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let d=a*u,h=a*g,m=o*u,_=o*g;e[0]=l*u,e[4]=-l*g,e[8]=c,e[1]=h+m*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=m+h*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,h=l*g,m=c*u,_=c*g;e[0]=d+_*o,e[4]=m*o-h,e[8]=a*c,e[1]=a*g,e[5]=a*u,e[9]=-o,e[2]=h*o-m,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,h=l*g,m=c*u,_=c*g;e[0]=d-_*o,e[4]=-a*g,e[8]=m+h*o,e[1]=h+m*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,h=a*g,m=o*u,_=o*g;e[0]=l*u,e[4]=m*c-h,e[8]=d*c+_,e[1]=l*g,e[5]=_*c+d,e[9]=h*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,h=a*c,m=o*l,_=o*c;e[0]=l*u,e[4]=_-d*g,e[8]=m*g+h,e[1]=g,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=h*g+m,e[10]=d-_*g}else if(t.order==="XZY"){let d=a*l,h=a*c,m=o*l,_=o*c;e[0]=l*u,e[4]=-g,e[8]=c*u,e[1]=d*g+_,e[5]=a*u,e[9]=h*g-m,e[2]=m*g-h,e[6]=o*u,e[10]=_*g+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,Qd)}lookAt(t,e,n){let s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ti.crossVectors(n,Sn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ti.crossVectors(n,Sn)),Ti.normalize(),Qr.crossVectors(Sn,Ti),s[0]=Ti.x,s[4]=Qr.x,s[8]=Sn.x,s[1]=Ti.y,s[5]=Qr.y,s[9]=Sn.y,s[2]=Ti.z,s[6]=Qr.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],g=n[5],d=n[9],h=n[13],m=n[2],_=n[6],p=n[10],f=n[14],v=n[3],w=n[7],T=n[11],A=n[15],b=s[0],x=s[4],y=s[8],I=s[12],C=s[1],U=s[5],D=s[9],V=s[13],R=s[2],O=s[6],q=s[10],X=s[14],ot=s[3],Z=s[7],Q=s[11],Y=s[15];return r[0]=a*b+o*C+l*R+c*ot,r[4]=a*x+o*U+l*O+c*Z,r[8]=a*y+o*D+l*q+c*Q,r[12]=a*I+o*V+l*X+c*Y,r[1]=u*b+g*C+d*R+h*ot,r[5]=u*x+g*U+d*O+h*Z,r[9]=u*y+g*D+d*q+h*Q,r[13]=u*I+g*V+d*X+h*Y,r[2]=m*b+_*C+p*R+f*ot,r[6]=m*x+_*U+p*O+f*Z,r[10]=m*y+_*D+p*q+f*Q,r[14]=m*I+_*V+p*X+f*Y,r[3]=v*b+w*C+T*R+A*ot,r[7]=v*x+w*U+T*O+A*Z,r[11]=v*y+w*D+T*q+A*Q,r[15]=v*I+w*V+T*X+A*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],g=t[6],d=t[10],h=t[14],m=t[3],_=t[7],p=t[11],f=t[15],v=l*h-c*d,w=o*h-c*g,T=o*d-l*g,A=a*h-c*u,b=a*d-l*u,x=a*g-o*u;return e*(_*v-p*w+f*T)-n*(m*v-p*A+f*b)+s*(m*w-_*A+f*x)-r*(m*T-_*b+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],g=t[9],d=t[10],h=t[11],m=t[12],_=t[13],p=t[14],f=t[15],v=e*o-n*a,w=e*l-s*a,T=e*c-r*a,A=n*l-s*o,b=n*c-r*o,x=s*c-r*l,y=u*_-g*m,I=u*p-d*m,C=u*f-h*m,U=g*p-d*_,D=g*f-h*_,V=d*f-h*p,R=v*V-w*D+T*U+A*C-b*I+x*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/R;return t[0]=(o*V-l*D+c*U)*O,t[1]=(s*D-n*V-r*U)*O,t[2]=(_*x-p*b+f*A)*O,t[3]=(d*b-g*x-h*A)*O,t[4]=(l*C-a*V-c*I)*O,t[5]=(e*V-s*C+r*I)*O,t[6]=(p*T-m*x-f*w)*O,t[7]=(u*x-d*T+h*w)*O,t[8]=(a*D-o*C+c*y)*O,t[9]=(n*C-e*D-r*y)*O,t[10]=(m*b-_*T+f*v)*O,t[11]=(g*T-u*b-h*v)*O,t[12]=(o*I-a*U-l*y)*O,t[13]=(e*U-n*I+s*y)*O,t[14]=(_*w-m*A-p*v)*O,t[15]=(u*A-g*w+d*v)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,g=o+o,d=r*c,h=r*u,m=r*g,_=a*u,p=a*g,f=o*g,v=l*c,w=l*u,T=l*g,A=n.x,b=n.y,x=n.z;return s[0]=(1-(_+f))*A,s[1]=(h+T)*A,s[2]=(m-w)*A,s[3]=0,s[4]=(h-T)*b,s[5]=(1-(d+f))*b,s[6]=(p+v)*b,s[7]=0,s[8]=(m+w)*x,s[9]=(p-v)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=rs.set(s[0],s[1],s[2]).length(),o=rs.set(s[4],s[5],s[6]).length(),l=rs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Dn.copy(this);let c=1/a,u=1/o,g=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=g,Dn.elements[9]*=g,Dn.elements[10]*=g,e.setFromRotationMatrix(Dn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Rn,l=!1){let c=this.elements,u=2*r/(e-t),g=2*r/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s),m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===Rn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ys)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=g,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Rn,l=!1){let c=this.elements,u=2/(e-t),g=2/(n-s),d=-(e+t)/(e-t),h=-(n+s)/(n-s),m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===Rn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===ys)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=g,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ja.prototype.isMatrix4=!0;var oe=ja,rs=new k,Dn=new oe,Kd=new k(0,0,0),Qd=new k(1,1,1),Ti=new k,Qr=new k,Sn=new k,Kc=new oe,Qc=new In,Xn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],g=s[2],d=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-g,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jd=0,jc=new k,as=new In,ri=new oe,jr=new k,Hs=new k,tf=new k,ef=new In,th=new k(1,0,0),eh=new k(0,1,0),nh=new k(0,0,1),ih={type:"added"},nf={type:"removed"},os={type:"childadded",child:null},cl={type:"childremoved",child:null},He=class i extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Xn,n=new In,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Zt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(th,t)}rotateY(t){return this.rotateOnAxis(eh,t)}rotateZ(t){return this.rotateOnAxis(nh,t)}translateOnAxis(t,e){return jc.copy(t).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(th,t)}translateY(t){return this.translateOnAxis(eh,t)}translateZ(t){return this.translateOnAxis(nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Hs,jr,this.up):ri.lookAt(jr,Hs,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),as.setFromRotationMatrix(ri),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ih),os.child=t,this.dispatchEvent(os),os.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nf),cl.child=t,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ih),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,ef,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let g=l[c];r(t.shapes,g)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),g=a(t.shapes),d=a(t.skeletons),h=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),g.length>0&&(n.shapes=g),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};He.DEFAULT_UP=new k(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yi=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},sf={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],d=u.position.distanceTo(g.position),h=.02,m=.005;c.inputState.pinching&&d>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function hl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=ic(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=hl(a,r,t+1/3),this.g=hl(a,r,t),this.b=hl(a,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let n=ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return ne.workingToColorSpace(on.copy(this),t),Math.round(ie(on.r*255,0,255))*65536+Math.round(ie(on.g*255,0,255))*256+Math.round(ie(on.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(on.copy(this),e);let n=on.r,s=on.g,r=on.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let g=a-o;switch(c=u<=.5?g/(a+o):g/(2-a-o),a){case n:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-n)/g+2;break;case r:l=(n-s)/g+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=ln){ne.workingToColorSpace(on.copy(this),t);let e=on.r,n=on.g,s=on.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(ta);let n=Ks(wi.h,ta.h,e),s=Ks(wi.s,ta.s,e),r=Ks(wi.l,ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Vt;Vt.NAMES=ru;var sr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},rr=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Un=new k,ai=new k,ul=new k,oi=new k,ls=new k,cs=new k,sh=new k,dl=new k,fl=new k,pl=new k,ml=new Re,gl=new Re,xl=new Re,Ri=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Un.subVectors(t,e),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Un.subVectors(s,e),ai.subVectors(n,e),ul.subVectors(t,e);let a=Un.dot(Un),o=Un.dot(ai),l=Un.dot(ul),c=ai.dot(ai),u=ai.dot(ul),g=a*c-o*o;if(g===0)return r.set(0,0,0),null;let d=1/g,h=(c*l-o*u)*d,m=(a*u-o*l)*d;return r.set(1-h-m,m,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ml.setScalar(0),gl.setScalar(0),xl.setScalar(0),ml.fromBufferAttribute(t,e),gl.fromBufferAttribute(t,n),xl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ml,r.x),a.addScaledVector(gl,r.y),a.addScaledVector(xl,r.z),a}static isFrontFacing(t,e,n,s){return Un.subVectors(n,e),ai.subVectors(t,e),Un.cross(ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Un.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ls.subVectors(s,n),cs.subVectors(r,n),dl.subVectors(t,n);let l=ls.dot(dl),c=cs.dot(dl);if(l<=0&&c<=0)return e.copy(n);fl.subVectors(t,s);let u=ls.dot(fl),g=cs.dot(fl);if(u>=0&&g<=u)return e.copy(s);let d=l*g-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(ls,a);pl.subVectors(t,r);let h=ls.dot(pl),m=cs.dot(pl);if(m>=0&&h<=m)return e.copy(r);let _=h*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(cs,o);let p=u*m-h*g;if(p<=0&&g-u>=0&&h-m>=0)return sh.subVectors(r,s),o=(g-u)/(g-u+(h-m)),e.copy(s).addScaledVector(sh,o);let f=1/(p+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(ls,a).addScaledVector(cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qn=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(t.matrixWorld),this.union(ea)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),na.subVectors(this.max,Ws),hs.subVectors(t.a,Ws),us.subVectors(t.b,Ws),ds.subVectors(t.c,Ws),Ai.subVectors(us,hs),Ei.subVectors(ds,us),Hi.subVectors(hs,ds);let e=[0,-Ai.z,Ai.y,0,-Ei.z,Ei.y,0,-Hi.z,Hi.y,Ai.z,0,-Ai.x,Ei.z,0,-Ei.x,Hi.z,0,-Hi.x,-Ai.y,Ai.x,0,-Ei.y,Ei.x,0,-Hi.y,Hi.x,0];return!_l(e,hs,us,ds,na)||(e=[1,0,0,0,1,0,0,0,1],!_l(e,hs,us,ds,na))?!1:(ia.crossVectors(Ai,Ei),e=[ia.x,ia.y,ia.z],_l(e,hs,us,ds,na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},li=[new k,new k,new k,new k,new k,new k,new k,new k],Fn=new k,ea=new qn,hs=new k,us=new k,ds=new k,Ai=new k,Ei=new k,Hi=new k,Ws=new k,na=new k,ia=new k,Wi=new k;function _l(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wi.fromArray(i,r);let o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),u=n.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var ke=new k,sa=new jt,rf=0,je=class extends Wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qh,this.updateRanges=[],this.gpuType=Pn,this.version=0,this._normalizationScale=t!==void 0?rc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):iu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):su(t,this.array)}};var ar=class extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var or=class extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}},af=new qn,Xs=new k,vl=new k,di=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):af.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(vl)),this.expandByPoint(Xs.copy(t.center).sub(vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},of=0,Cn=new oe,yl=new He,fs=new k,bn=new qn,qs=new qn,Je=new k,We=class i extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pd(t)?or:ar)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return yl.lookAt(t),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(bn.min,qs.min),bn.expandByPoint(Je),Je.addVectors(bn.max,qs.max),bn.expandByPoint(Je)):(bn.expandByPoint(qs.min),bn.expandByPoint(qs.max))}bn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Je.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(t,c),Je.add(fs)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new je(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new k,l[I]=new k;let u=new k,g=new k,d=new k,h=new jt,m=new jt,_=new jt,p=new k,f=new k;function v(I,C,U){c[I]=c[C]=c[U]=1,u.fromBufferAttribute(n,I),g.fromBufferAttribute(n,C),d.fromBufferAttribute(n,U),h.fromBufferAttribute(r,I),m.fromBufferAttribute(r,C),_.fromBufferAttribute(r,U),g.sub(u),d.sub(u),m.sub(h),_.sub(h);let D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(p.copy(g).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(D),f.copy(d).multiplyScalar(m.x).addScaledVector(g,-_.x).multiplyScalar(D),o[I].add(p),o[C].add(p),o[U].add(p),l[I].add(f),l[C].add(f),l[U].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,C=w.length;I<C;++I){let U=w[I],D=U.start,V=U.count;for(let R=D,O=D+V;R<O;R+=3)v(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let T=new k,A=new k,b=new k,x=new k;function y(I){b.fromBufferAttribute(s,I),x.copy(b);let C=o[I];T.copy(C),T.sub(b.multiplyScalar(b.dot(C))).normalize(),A.crossVectors(x,C);let D=A.dot(l[I])<0?-1:1;a.setXYZW(I,T.x,T.y,T.z,D)}for(let I=0,C=n.count;I<C;++I)c[I]&&y(I);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,g=new k;if(t)for(let d=0,h=t.count;d<h;d+=3){let m=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,r),g.subVectors(s,r),u.cross(g),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,h=e.count;d<h;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),g.subVectors(s,r),u.cross(g),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,g=o.normalized,d=new c.constructor(l.length*u),h=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let f=0;f<u;f++)d[m++]=c[h++]}return new je(d,u,g)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,g=c.length;u<g;u++){let d=c[u],h=t(d,n);l.push(h)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let g=0,d=c.length;g<d;g++){let h=c[g];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],g=r[c];for(let d=0,h=g.length;d<h;d++)u.push(g[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let g=a[c];this.addGroup(g.start,g.count,g.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ml=new k,lf=new k,cf=new Zt,On=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ml.subVectors(n,e).cross(lf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cf.getNormalMatrix(t),s=this.coplanarPoint(Ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},hf=0,fi=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=Ui,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Ol,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new On().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new jt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ci=new k,Sl=new k,ra=new k,aa=new k,lr=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sl.copy(t).add(e).multiplyScalar(.5),ra.copy(e).sub(t).normalize(),aa.copy(this.origin).sub(Sl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ra),o=aa.dot(this.direction),l=-aa.dot(ra),c=aa.lengthSq(),u=Math.abs(1-a*a),g,d,h,m;if(u>0)if(g=a*l-o,d=a*o-l,m=r*u,g>=0)if(d>=-m)if(d<=m){let _=1/u;g*=_,d*=_,h=g*(g+a*d+2*o)+d*(a*g+d+2*l)+c}else d=r,g=Math.max(0,-(a*d+o)),h=-g*g+d*(d+2*l)+c;else d=-r,g=Math.max(0,-(a*d+o)),h=-g*g+d*(d+2*l)+c;else d<=-m?(g=Math.max(0,-(-a*r+o)),d=g>0?-r:Math.min(Math.max(-r,-l),r),h=-g*g+d*(d+2*l)+c):d<=m?(g=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(g=Math.max(0,-(a*r+o)),d=g>0?r:Math.min(Math.max(-r,-l),r),h=-g*g+d*(d+2*l)+c);else d=a>0?-r:r,g=Math.max(0,-(a*d+o)),h=-g*g+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Sl).addScaledVector(ra,d),h}intersectSphere(t,e){if(t.radius<0)return null;ci.subVectors(t.center,this.origin);let n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,g=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(o=(t.min.z-d.z)*g,l=(t.max.z-d.z)*g):(o=(t.max.z-d.z)*g,l=(t.min.z-d.z)*g),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,g=t.x-a.x,d=t.y-a.y,h=t.z-a.z,m=e.x-a.x,_=e.y-a.y,p=e.z-a.z,f=n.x-a.x,v=n.y-a.y,w=n.z-a.z,T=Math.abs(l),A=Math.abs(c),b=Math.abs(u),x,y,I,C,U,D,V,R,O,q,X,ot;if(T>=A&&T>=b?(I=l,D=g,O=m,ot=f,l>=0?(x=c,y=u,C=d,U=h,V=_,R=p,q=v,X=w):(x=u,y=c,C=h,U=d,V=p,R=_,q=w,X=v)):A>=b?(I=c,D=d,O=_,ot=v,c>=0?(x=u,y=l,C=h,U=g,V=p,R=m,q=w,X=f):(x=l,y=u,C=g,U=h,V=m,R=p,q=f,X=w)):(I=u,D=h,O=p,ot=w,u>=0?(x=l,y=c,C=g,U=d,V=m,R=_,q=f,X=v):(x=c,y=l,C=d,U=g,V=_,R=m,q=v,X=f)),I===0)return null;let Z=x/I,Q=y/I,Y=1/I,dt=C-Z*D,Bt=U-Q*D,nt=V-Z*O,Mt=R-Q*O,Ct=q-Z*ot,Lt=X-Q*ot,St=Ct*Mt-Lt*nt,qt=dt*Lt-Bt*Ct,_e=nt*Bt-Mt*dt;if(s){if(St<0||qt<0||_e<0)return null}else if((St<0||qt<0||_e<0)&&(St>0||qt>0||_e>0))return null;let Ut=St+qt+_e;if(Ut===0)return null;let ce=Y*(St*D+qt*O+_e*ot);return(Ut>0?ce<0:ce>0)?null:this.at(ce/Ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yn=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},rh=new oe,Xi=new lr,oa=new di,ah=new k,la=new k,ca=new k,ha=new k,bl=new k,ua=new k,oh=new k,da=new k,Ge=class extends He{constructor(t=new We,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],g=r[l];u!==0&&(bl.fromBufferAttribute(g,t),a?ua.addScaledVector(bl,u):ua.addScaledVector(bl.sub(e),u))}e.add(ua)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(oa.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(oa,ah)===null||Xi.origin.distanceToSquared(ah)>(t.far-t.near)**2))&&(rh.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(rh),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,g=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let p=d[m],f=a[p.materialIndex],v=Math.max(p.start,h.start),w=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let T=v,A=w;T<A;T+=3){let b=o.getX(T),x=o.getX(T+1),y=o.getX(T+2);s=fa(this,f,t,n,c,u,g,b,x,y),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let p=m,f=_;p<f;p+=3){let v=o.getX(p),w=o.getX(p+1),T=o.getX(p+2);s=fa(this,a,t,n,c,u,g,v,w,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let p=d[m],f=a[p.materialIndex],v=Math.max(p.start,h.start),w=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let T=v,A=w;T<A;T+=3){let b=T,x=T+1,y=T+2;s=fa(this,f,t,n,c,u,g,b,x,y),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=m,f=_;p<f;p+=3){let v=p,w=p+1,T=p+2;s=fa(this,a,t,n,c,u,g,v,w,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function uf(i,t,e,n,s,r,a,o){let l;if(t.side===en?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Di,o),l===null)return null;da.copy(o),da.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(da);return c<e.near||c>e.far?null:{distance:c,point:da.clone(),object:i}}function fa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,la),i.getVertexPosition(l,ca),i.getVertexPosition(c,ha);let u=uf(i,t,e,n,la,ca,ha,oh);if(u){let g=new k;Ri.getBarycoord(oh,la,ca,ha,g),s&&(u.uv=Ri.getInterpolatedAttribute(s,o,l,c,g,new jt)),r&&(u.uv1=Ri.getInterpolatedAttribute(r,o,l,c,g,new jt)),a&&(u.normal=Ri.getInterpolatedAttribute(a,o,l,c,g,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new k,materialIndex:0};Ri.getNormal(la,ca,ha,d.normal),u.face=d,u.barycoord=g}return u}var $i=class extends pn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ze,u=ze,g,d){super(null,a,o,l,c,u,s,r,g,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cr=class extends je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ps=new oe,lh=new oe,pa=[],ch=new qn,df=new oe,Ys=new Ge,$s=new di,$n=class extends Ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,df)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),ch.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(ch)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),$s.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),t.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),lh.multiplyMatrices(n,ps),Ys.matrixWorld=lh,Ys.raycast(t,pa);for(let a=0,o=pa.length;a<o;a++){let l=pa[a];l.instanceId=r,l.object=this,e.push(l)}pa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $i(new Float32Array(s*this.count),s,this.count,Ds,Pn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qi=new di,ff=new jt(.5,.5),ma=new k,Ii=class{constructor(t=new On,e=new On,n=new On,s=new On,r=new On,a=new On){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],g=r[5],d=r[6],h=r[7],m=r[8],_=r[9],p=r[10],f=r[11],v=r[12],w=r[13],T=r[14],A=r[15];if(s[0].setComponents(c-a,h-u,f-m,A-v).normalize(),s[1].setComponents(c+a,h+u,f+m,A+v).normalize(),s[2].setComponents(c+o,h+g,f+_,A+w).normalize(),s[3].setComponents(c-o,h-g,f-_,A-w).normalize(),n)s[4].setComponents(l,d,p,T).normalize(),s[5].setComponents(c-l,h-d,f-p,A-T).normalize();else if(s[4].setComponents(c-l,h-d,f-p,A-T).normalize(),e===Rn)s[5].setComponents(c+l,h+d,f+p,A+T).normalize();else if(e===ys)s[5].setComponents(l,d,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){qi.center.set(0,0,0);let e=ff.distanceTo(t.center);return qi.radius=.7071067811865476+e,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ma.x=s.normal.x>0?t.max.x:t.min.x,ma.y=s.normal.y>0?t.max.y:t.min.y,ma.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hh=new oe,Fa=class i{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];hh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ii),n[s].setFromProjectionMatrix(hh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ii),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Oa=class extends fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},uh=new oe,Rl=new lr,ga=new di,xa=new k,ws=class extends He{constructor(t=new We,e=new Oa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,t.ray.intersectsSphere(ga)===!1)return;uh.copy(s).invert(),Rl.copy(t.ray).applyMatrix4(uh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,g=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let m=d,_=h;m<_;m++){let p=c.getX(m);xa.fromBufferAttribute(g,p),dh(xa,p,l,s,t,e,this)}}else{let d=Math.max(0,a.start),h=Math.min(g.count,a.start+a.count);for(let m=d,_=h;m<_;m++)xa.fromBufferAttribute(g,m),dh(xa,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function dh(i,t,e,n,s,r,a){let o=Rl.distanceSqToPoint(i);if(o<e){let l=new k;Rl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var hr=class extends pn{constructor(t=[],e=Qi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ur=class extends pn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pi=class extends pn{constructor(t,e,n=Bn,s,r,a,o=ze,l=ze,c,u=ui,g=1){if(u!==ui&&u!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:g};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},dr=class extends pi{constructor(t,e=Bn,n=Qi,s,r,a=ze,o=ze,l,c=ui){let u={width:t,height:t,depth:1},g=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},fr=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},As=class i extends We{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],g=[],d=0,h=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(g,2));function m(_,p,f,v,w,T,A,b,x,y,I){let C=T/x,U=A/y,D=T/2,V=A/2,R=b/2,O=x+1,q=y+1,X=0,ot=0,Z=new k;for(let Q=0;Q<q;Q++){let Y=Q*U-V;for(let dt=0;dt<O;dt++){let Bt=dt*C-D;Z[_]=Bt*v,Z[p]=Y*w,Z[f]=R,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[p]=0,Z[f]=b>0?1:-1,u.push(Z.x,Z.y,Z.z),g.push(dt/x),g.push(1-Q/y),X+=1}}for(let Q=0;Q<y;Q++)for(let Y=0;Y<x;Y++){let dt=d+Y+O*Q,Bt=d+Y+O*(Q+1),nt=d+(Y+1)+O*(Q+1),Mt=d+(Y+1)+O*Q;l.push(dt,Bt,Mt),l.push(Bt,nt,Mt),ot+=6}o.addGroup(h,ot,I),h+=ot,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},pr=class i extends We{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=e/2,g=Math.PI/2*t,d=e,h=2*g+d,m=n*2+r,_=s+1,p=new k,f=new k;for(let v=0;v<=m;v++){let w=0,T=0,A=0,b=0;if(v<=n){let I=v/n,C=I*Math.PI/2;T=-u-t*Math.cos(C),A=t*Math.sin(C),b=-t*Math.cos(C),w=I*g}else if(v<=n+r){let I=(v-n)/r;T=-u+I*e,A=t,b=0,w=g+I*d}else{let I=(v-n-r)/n,C=I*Math.PI/2;T=u+t*Math.sin(C),A=t*Math.cos(C),b=t*Math.sin(C),w=g+d+I*g}let x=Math.max(0,Math.min(1,w/h)),y=0;v===0?y=.5/s:v===m&&(y=-.5/s);for(let I=0;I<=s;I++){let C=I/s,U=C*Math.PI*2,D=Math.sin(U),V=Math.cos(U);f.x=-A*V,f.y=T,f.z=A*D,o.push(f.x,f.y,f.z),p.set(-A*V,b,A*D),p.normalize(),l.push(p.x,p.y,p.z),c.push(C+y,x)}if(v>0){let I=(v-1)*_;for(let C=0;C<s;C++){let U=I+C,D=I+C+1,V=v*_+C,R=v*_+C+1;a.push(U,D,V),a.push(D,R,V)}}}this.setIndex(a),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},mr=class i extends We{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new k,u=new jt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let g=0,d=3;g<=e;g++,d+=3){let h=n+g/e*s;c.x=t*Math.cos(h),c.y=t*Math.sin(h),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let g=1;g<=e;g++)r.push(g,g+1,0);this.setIndex(r),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},mi=class i extends We{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],g=[],d=[],h=[],m=0,_=[],p=n/2,f=0;v(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(h,2));function v(){let T=new k,A=new k,b=0,x=(e-t)/n;for(let y=0;y<=r;y++){let I=[],C=y/r,U=C*(e-t)+t;for(let D=0;D<=s;D++){let V=D/s,R=V*l+o,O=Math.sin(R),q=Math.cos(R);A.x=U*O,A.y=-C*n+p,A.z=U*q,g.push(A.x,A.y,A.z),T.set(O,x,q).normalize(),d.push(T.x,T.y,T.z),h.push(V,1-C),I.push(m++)}_.push(I)}for(let y=0;y<s;y++)for(let I=0;I<r;I++){let C=_[I][y],U=_[I+1][y],D=_[I+1][y+1],V=_[I][y+1];(t>0||I!==0)&&(u.push(C,U,V),b+=3),(e>0||I!==r-1)&&(u.push(U,D,V),b+=3)}c.addGroup(f,b,0),f+=b}function w(T){let A=m,b=new jt,x=new k,y=0,I=T===!0?t:e,C=T===!0?1:-1;for(let D=1;D<=s;D++)g.push(0,p*C,0),d.push(0,C,0),h.push(.5,.5),m++;let U=m;for(let D=0;D<=s;D++){let R=D/s*l+o,O=Math.cos(R),q=Math.sin(R);x.x=I*q,x.y=p*C,x.z=I*O,g.push(x.x,x.y,x.z),d.push(0,C,0),b.x=O*.5+.5,b.y=q*.5*C+.5,h.push(b.x,b.y),m++}for(let D=0;D<s;D++){let V=A+D,R=U+D;T===!0?u.push(R,R+1,V):u.push(R+1,R,V),y+=3}c.addGroup(f,y,T===!0?1:2),f+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Es=class i extends We{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let w=new k,T=new k,A=new k;for(let b=0;b<e.length;b+=3)h(e[b+0],w),h(e[b+1],T),h(e[b+2],A),l(w,T,A,v)}function l(v,w,T,A){let b=A+1,x=[];for(let y=0;y<=b;y++){x[y]=[];let I=v.clone().lerp(T,y/b),C=w.clone().lerp(T,y/b),U=b-y;for(let D=0;D<=U;D++)D===0&&y===b?x[y][D]=I:x[y][D]=I.clone().lerp(C,D/U)}for(let y=0;y<b;y++)for(let I=0;I<2*(b-y)-1;I++){let C=Math.floor(I/2);I%2===0?(d(x[y][C+1]),d(x[y+1][C]),d(x[y][C])):(d(x[y][C+1]),d(x[y+1][C+1]),d(x[y+1][C]))}}function c(v){let w=new k;for(let T=0;T<r.length;T+=3)w.x=r[T+0],w.y=r[T+1],w.z=r[T+2],w.normalize().multiplyScalar(v),r[T+0]=w.x,r[T+1]=w.y,r[T+2]=w.z}function u(){let v=new k;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];let T=p(v)/2/Math.PI+.5,A=f(v)/Math.PI+.5;a.push(T,1-A)}m(),g()}function g(){for(let v=0;v<a.length;v+=6){let w=a[v+0],T=a[v+2],A=a[v+4],b=Math.max(w,T,A),x=Math.min(w,T,A);b>.9&&x<.1&&(w<.2&&(a[v+0]+=1),T<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function h(v,w){let T=v*3;w.x=t[T+0],w.y=t[T+1],w.z=t[T+2]}function m(){let v=new k,w=new k,T=new k,A=new k,b=new jt,x=new jt,y=new jt;for(let I=0,C=0;I<r.length;I+=9,C+=6){v.set(r[I+0],r[I+1],r[I+2]),w.set(r[I+3],r[I+4],r[I+5]),T.set(r[I+6],r[I+7],r[I+8]),b.set(a[C+0],a[C+1]),x.set(a[C+2],a[C+3]),y.set(a[C+4],a[C+5]),A.copy(v).add(w).add(T).divideScalar(3);let U=p(A);_(b,C+0,v,U),_(x,C+2,w,U),_(y,C+4,T,U)}}function _(v,w,T,A){A<0&&v.x===1&&(a[w]=v.x-1),T.x===0&&T.z===0&&(a[w]=A/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},gr=class i extends Es{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Cs=class i extends Es{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var xr=class i extends Es{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Zi=class i extends We{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,g=t/o,d=e/l,h=[],m=[],_=[],p=[];for(let f=0;f<u;f++){let v=f*d-a;for(let w=0;w<c;w++){let T=w*g-r;m.push(T,-v,0),_.push(0,0,1),p.push(w/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){let w=v+c*f,T=v+c*(f+1),A=v+1+c*(f+1),b=v+1+c*f;h.push(w,T,b),h.push(T,A,b)}this.setIndex(h),this.setAttribute("position",new le(m,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},_r=class i extends We{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],g=t,d=(e-t)/s,h=new k,m=new jt;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){let f=r+p/n*a;h.x=g*Math.cos(f),h.y=g*Math.sin(f),l.push(h.x,h.y,h.z),c.push(0,0,1),m.x=(h.x/e+1)/2,m.y=(h.y/e+1)/2,u.push(m.x,m.y)}g+=d}for(let _=0;_<s;_++){let p=_*(n+1);for(let f=0;f<n;f++){let v=f+p,w=v,T=v+n+1,A=v+n+2,b=v+1;o.push(w,T,b),o.push(T,A,b)}}this.setIndex(o),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Zn=class i extends We{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],g=new k,d=new k,h=[],m=[],_=[],p=[];for(let f=0;f<=n;f++){let v=[],w=f/n,T=a+w*o,A=t*Math.cos(T),b=Math.sqrt(t*t-A*A),x=0;f===0&&a===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let y=0;y<=e;y++){let I=y/e,C=s+I*r;g.x=-b*Math.cos(C),g.y=A,g.z=b*Math.sin(C),m.push(g.x,g.y,g.z),d.copy(g).normalize(),_.push(d.x,d.y,d.z),p.push(I+x,1-w),v.push(c++)}u.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){let w=u[f][v+1],T=u[f][v],A=u[f+1][v],b=u[f+1][v+1];(f!==0||a>0)&&h.push(w,T,b),(f!==n-1||l<Math.PI)&&h.push(T,A,b)}this.setIndex(h),this.setAttribute("position",new le(m,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var vr=class i extends We{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],g=[],d=new k,h=new k,m=new k;for(let _=0;_<=n;_++){let p=a+_/n*o;for(let f=0;f<=s;f++){let v=f/s*r;h.x=(t+e*Math.cos(p))*Math.cos(v),h.y=(t+e*Math.cos(p))*Math.sin(v),h.z=e*Math.sin(p),c.push(h.x,h.y,h.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),m.subVectors(h,d).normalize(),u.push(m.x,m.y,m.z),g.push(f/s),g.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){let f=(s+1)*_+p-1,v=(s+1)*(_-1)+p-1,w=(s+1)*(_-1)+p,T=(s+1)*_+p;l.push(f,v,T),l.push(v,w,T)}this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ts(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(fh(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(fh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=ts(i[e]);for(let s in n)t[s]=n[s]}return t}function fh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function pf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ac(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var au={clone:ts,merge:cn},mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mf,this.fragmentShader=gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=pf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Vt().setHex(s.value);break;case"v2":this.uniforms[n].value=new jt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ba=class extends tn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var yr=class extends fi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Vt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ka=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},za=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ms(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _a(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Pi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ga=class extends Pi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case El:r=t,o=2*e-n;break;case Cl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case El:a=t,l=2*n-e;break;case Cl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,g=this._offsetNext,d=this._weightPrev,h=this._weightNext,m=(n-e)/(s-e),_=m*m,p=_*m,f=-d*p+2*d*_-d*m,v=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*m+1,w=(-1-h)*p+(1.5+h)*_+.5*m,T=h*p-h*_;for(let A=0;A!==o;++A)r[A]=f*a[u+A]+v*a[c+A]+w*a[l+A]+T*a[g+A];return r}},Va=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),g=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*g+a[l+d]*u;return r}},Ha=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Wa=class extends Pi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,g=this.outTangents;if(!u||!g){let m=(n-e)/(s-e),_=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*_+a[l+p]*m;return r}let d=o*2,h=t-1;for(let m=0;m!==o;++m){let _=a[c+m],p=a[l+m],f=h*d+m*2,v=g[f],w=g[f+1],T=t*d+m*2,A=u[T],b=u[T+1],x=_f(n,e,v,A,s);r[m]=ou(x,_,w,b,p)}return r}};function ou(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function xf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function _f(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=ou(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=xf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var wn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ms(e,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ms(t.times,Array),values:ms(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),_a(t.settings)&&(n.settings={inTangents:ms(t.settings.inTangents,Array),outTangents:ms(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Wa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case La:e=this.InterpolantFactoryMethodLinear;break;case Ma:e=this.InterpolantFactoryMethodSmooth;break;case wl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return La;case this.InterpolantFactoryMethodSmooth:return Ma;case this.InterpolantFactoryMethodBezier:return wl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;_a(this.settings)&&(ph(this.settings.inTangents,t),ph(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;_a(this.settings)&&(mh(this.settings.inTangents,t),mh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Xt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Ld(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ma,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let g=o*n,d=g-n,h=g+n;for(let m=0;m!==n;++m){let _=e[g+m];if(_!==e[d+m]||_!==e[h+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let g=o*n,d=a*n;for(let h=0;h!==n;++h)e[d+h]=e[g+h]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,_a(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ph(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function mh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=La;var Li=class extends wn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Qs;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};Xa.prototype.ValueTypeName="color";var qa=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};qa.prototype.ValueTypeName="number";var Ya=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)In.slerpFlat(r,0,a,c-o,a,c,l);return r}},Mr=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}};Mr.prototype.ValueTypeName="quaternion";Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends wn{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Qs;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};$a.prototype.ValueTypeName="vector";var Za=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,g){return c.push(u,g),this},this.removeHandler=function(u){let g=c.indexOf(u);return g!==-1&&c.splice(g,2),this},this.getHandler=function(u){for(let g=0,d=c.length;g<d;g+=2){let h=c[g],m=c[g+1];if(h.global&&(h.lastIndex=0),h.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lu=new Za,Ja=class{constructor(t){this.manager=t!==void 0?t:lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ja.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=class extends He{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Sr=class extends Rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Tl=new oe,gh=new k,xh=new k,Ka=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ii,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;gh.setFromMatrixPosition(t.matrixWorld),e.position.copy(gh),xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Tl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ys||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},va=new k,ya=new In,Vn=new k,br=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(va,ya,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,ya,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(va,ya,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,ya,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ci=new k,_h=new jt,vh=new jt,dn=class extends br{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,_h,vh),e.subVectors(vh,_h)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Tr=class extends br{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Il=class extends Ka{constructor(){super(new Tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wr=class extends Rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Il}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ar=class extends Rs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var gs=-90,xs=1,Is=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(gs,xs,t,e);s.layers=this.layers,this.add(s);let r=new dn(gs,xs,t,e);r.layers=this.layers,this.add(r);let a=new dn(gs,xs,t,e);a.layers=this.layers,this.add(a);let o=new dn(gs,xs,t,e);o.layers=this.layers,this.add(o);let l=new dn(gs,xs,t,e);l.layers=this.layers,this.add(l);let c=new dn(gs,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,g=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(g,d,h),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Qa=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var oc="\\[\\]\\.:\\/",vf=new RegExp("["+oc+"]","g"),lc="[^"+oc+"]",yf="[^"+oc.replace("\\.","")+"]",Mf=/((?:WC+[\/:])*)/.source.replace("WC",lc),Sf=/(WCOD+)?/.source.replace("WCOD",yf),bf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),Tf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),wf=new RegExp("^"+Mf+Sf+bf+Tf+"$"),Af=["material","materials","bones","map"],Pl=class{constructor(t,e,n){let s=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vf,"")}static parseTrackName(t){let e=wf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Af.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Pl;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zx=new Float32Array(1);var pc=class pc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};pc.prototype.isMatrix2=!0;var Ll=pc;function cc(i,t,e,n){let s=Ef(n);switch(e){case Jl:return i*t;case Ds:return i*t/s.components*s.byteLength;case ao:return i*t/s.components*s.byteLength;case Fi:return i*t*2/s.components*s.byteLength;case oo:return i*t*2/s.components*s.byteLength;case Kl:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case lo:return i*t*4/s.components*s.byteLength;case Ir:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lr:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:case fo:return Math.max(i,16)*Math.max(t,8)/4;case co:case uo:return Math.max(i,8)*Math.max(t,8)/2;case po:case mo:case xo:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case go:case Dr:case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case bo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Lo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Do:case Uo:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ur:case ko:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ef(i){switch(i){case yn:case ql:return{byteLength:1,components:1};case Ns:case Yl:case kn:return{byteLength:2,components:1};case so:case ro:return{byteLength:2,components:4};case Bn:case io:case Pn:return{byteLength:4,components:1};case $l:case Zl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Iu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Rf(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,g=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,l,c){let u=l.array,g=l.updateRanges;if(i.bindBuffer(c,o),g.length===0)i.bufferSubData(c,0,u);else{g.sort((h,m)=>h.start-m.start);let d=0;for(let h=1;h<g.length;h++){let m=g[d],_=g[h];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,g[d]=_)}g.length=d+1;for(let h=0,m=g.length;h<m;h++){let _=g[h];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var If=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Mp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ep=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_m=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$m=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Km=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:If,alphahash_pars_fragment:Pf,alphamap_fragment:Lf,alphamap_pars_fragment:Nf,alphatest_fragment:Df,alphatest_pars_fragment:Uf,aomap_fragment:Ff,aomap_pars_fragment:Of,batching_pars_vertex:Bf,batching_vertex:kf,begin_vertex:zf,beginnormal_vertex:Gf,bsdfs:Vf,iridescence_fragment:Hf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:Xf,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:Yf,clipping_planes_vertex:$f,color_fragment:Zf,color_pars_fragment:Jf,color_pars_vertex:Kf,color_vertex:Qf,common:jf,defaultnormal_vertex:tp,displacementmap_pars_vertex:ep,displacementmap_vertex:np,emissivemap_fragment:ip,emissivemap_pars_fragment:sp,colorspace_fragment:rp,colorspace_pars_fragment:ap,envmap_fragment:op,envmap_common_pars_fragment:lp,envmap_pars_fragment:cp,envmap_pars_vertex:hp,envmap_physical_pars_fragment:Mp,envmap_vertex:up,fog_vertex:dp,fog_pars_vertex:fp,fog_fragment:pp,fog_pars_fragment:mp,gradientmap_pars_fragment:gp,lightmap_pars_fragment:xp,lights_lambert_fragment:_p,lights_lambert_pars_fragment:vp,lights_pars_begin:yp,lights_toon_fragment:Sp,lights_toon_pars_fragment:bp,lights_phong_fragment:Tp,lights_phong_pars_fragment:wp,lights_physical_fragment:Ap,lights_physical_pars_fragment:Ep,lights_fragment_begin:Cp,lights_fragment_maps:Rp,lights_fragment_end:Ip,lightprobes_pars_fragment:Pp,logdepthbuf_fragment:Lp,logdepthbuf_pars_fragment:Np,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Up,map_fragment:Fp,map_pars_fragment:Op,map_particle_fragment:Bp,map_particle_pars_fragment:kp,metalnessmap_fragment:zp,metalnessmap_pars_fragment:Gp,morphinstance_vertex:Vp,morphcolor_vertex:Hp,morphnormal_vertex:Wp,morphtarget_pars_vertex:Xp,morphtarget_vertex:qp,normal_fragment_begin:Yp,normal_fragment_maps:$p,normal_pars_fragment:Zp,normal_pars_vertex:Jp,normal_vertex:Kp,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:jp,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:em,iridescence_pars_fragment:nm,opaque_fragment:im,packing:sm,premultiplied_alpha_fragment:rm,project_vertex:am,dithering_fragment:om,dithering_pars_fragment:lm,roughnessmap_fragment:cm,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:um,shadowmap_pars_vertex:dm,shadowmap_vertex:fm,shadowmask_pars_fragment:pm,skinbase_vertex:mm,skinning_pars_vertex:gm,skinning_vertex:xm,skinnormal_vertex:_m,specularmap_fragment:vm,specularmap_pars_fragment:ym,tonemapping_fragment:Mm,tonemapping_pars_fragment:Sm,transmission_fragment:bm,transmission_pars_fragment:Tm,uv_pars_fragment:wm,uv_pars_vertex:Am,uv_vertex:Em,worldpos_vertex:Cm,background_vert:Rm,background_frag:Im,backgroundCube_vert:Pm,backgroundCube_frag:Lm,cube_vert:Nm,cube_frag:Dm,depth_vert:Um,depth_frag:Fm,distance_vert:Om,distance_frag:Bm,equirect_vert:km,equirect_frag:zm,linedashed_vert:Gm,linedashed_frag:Vm,meshbasic_vert:Hm,meshbasic_frag:Wm,meshlambert_vert:Xm,meshlambert_frag:qm,meshmatcap_vert:Ym,meshmatcap_frag:$m,meshnormal_vert:Zm,meshnormal_frag:Jm,meshphong_vert:Km,meshphong_frag:Qm,meshphysical_vert:jm,meshphysical_frag:t0,meshtoon_vert:e0,meshtoon_frag:n0,points_vert:i0,points_frag:s0,shadow_vert:r0,shadow_frag:a0,sprite_vert:o0,sprite_frag:l0},Et={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Qn={basic:{uniforms:cn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:cn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:cn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:cn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:cn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Vt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:cn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:cn([Et.points,Et.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:cn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:cn([Et.common,Et.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:cn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:cn([Et.sprite,Et.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:cn([Et.common,Et.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:cn([Et.lights,Et.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Qn.physical={uniforms:cn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Go={r:0,b:0,g:0},c0=new oe,Pu=new Zt;Pu.set(-1,0,0,0,1,0,0,0,1);function h0(i,t,e,n,s,r){let a=new Vt(0),o=s===!0?0:1,l,c,u=null,g=0,d=null;function h(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let T=v.backgroundBlurriness>0;w=t.get(w,T)}return w}function m(v){let w=!1,T=h(v);T===null?p(a,o):T&&T.isColor&&(p(T,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,w){let T=h(w);T&&T.isCubeTexture?(c===void 0&&(c=new Ge(new As(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:ts(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,b,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(c0.makeRotationFromEuler(w.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pu),c.material.toneMapped=ne.getTransfer(T.colorSpace)!==me,(u!==T||g!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,g=T.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Ge(new Zi(2,2),new tn({name:"BackgroundMaterial",uniforms:ts(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ne.getTransfer(T.colorSpace)!==me,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||g!==T.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,g=T.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,w){v.getRGB(Go,ac(i)),e.buffers.color.setClear(Go.r,Go.g,Go.b,w,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:_,dispose:f}}function u0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(U,D,V,R,O){let q=!1,X=g(U,R,V,D);r!==X&&(r=X,c(r.object)),q=h(U,R,V,O),q&&m(U,R,V,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,T(U,D,V,R),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function g(U,D,V,R){let O=R.wireframe===!0,q=n[D.id];q===void 0&&(q={},n[D.id]=q);let X=U.isInstancedMesh===!0?U.id:0,ot=q[X];ot===void 0&&(ot={},q[X]=ot);let Z=ot[V.id];Z===void 0&&(Z={},ot[V.id]=Z);let Q=Z[O];return Q===void 0&&(Q=d(l()),Z[O]=Q),Q}function d(U){let D=[],V=[],R=[];for(let O=0;O<e;O++)D[O]=0,V[O]=0,R[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:R,object:U,attributes:{},index:null}}function h(U,D,V,R){let O=r.attributes,q=D.attributes,X=0,ot=V.getAttributes();for(let Z in ot)if(ot[Z].location>=0){let Y=O[Z],dt=q[Z];if(dt===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(dt=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(dt=U.instanceColor)),Y===void 0||Y.attribute!==dt||dt&&Y.data!==dt.data)return!0;X++}return r.attributesNum!==X||r.index!==R}function m(U,D,V,R){let O={},q=D.attributes,X=0,ot=V.getAttributes();for(let Z in ot)if(ot[Z].location>=0){let Y=q[Z];Y===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(Y=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(Y=U.instanceColor));let dt={};dt.attribute=Y,Y&&Y.data&&(dt.data=Y.data),O[Z]=dt,X++}r.attributes=O,r.attributesNum=X,r.index=R}function _(){let U=r.newAttributes;for(let D=0,V=U.length;D<V;D++)U[D]=0}function p(U){f(U,0)}function f(U,D){let V=r.newAttributes,R=r.enabledAttributes,O=r.attributeDivisors;V[U]=1,R[U]===0&&(i.enableVertexAttribArray(U),R[U]=1),O[U]!==D&&(i.vertexAttribDivisor(U,D),O[U]=D)}function v(){let U=r.newAttributes,D=r.enabledAttributes;for(let V=0,R=D.length;V<R;V++)D[V]!==U[V]&&(i.disableVertexAttribArray(V),D[V]=0)}function w(U,D,V,R,O,q,X){X===!0?i.vertexAttribIPointer(U,D,V,O,q):i.vertexAttribPointer(U,D,V,R,O,q)}function T(U,D,V,R){_();let O=R.attributes,q=V.getAttributes(),X=D.defaultAttributeValues;for(let ot in q){let Z=q[ot];if(Z.location>=0){let Q=O[ot];if(Q===void 0&&(ot==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),ot==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let Y=Q.normalized,dt=Q.itemSize,Bt=t.get(Q);if(Bt===void 0)continue;let nt=Bt.buffer,Mt=Bt.type,Ct=Bt.bytesPerElement,Lt=Mt===i.INT||Mt===i.UNSIGNED_INT||Q.gpuType===io;if(Q.isInterleavedBufferAttribute){let St=Q.data,qt=St.isInterleavedBuffer===!0?St.stride:St.itemSize,_e=Q.offset;if(St.isInstancedInterleavedBuffer||St.isInstancedBufferAttribute){for(let Ut=0;Ut<Z.locationSize;Ut++)f(Z.location+Ut,St.meshPerAttribute);U.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Ut=0;Ut<Z.locationSize;Ut++)p(Z.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Ut=0;Ut<Z.locationSize;Ut++)w(Z.location+Ut,dt/Z.locationSize,Mt,Y,qt*Ct,(_e+dt/Z.locationSize*Ut)*Ct,Lt)}else{if(Q.isInstancedBufferAttribute){for(let St=0;St<Z.locationSize;St++)f(Z.location+St,Q.meshPerAttribute);U.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let St=0;St<Z.locationSize;St++)p(Z.location+St);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let St=0;St<Z.locationSize;St++)w(Z.location+St,dt/Z.locationSize,Mt,Y,dt*Ct,dt/Z.locationSize*St*Ct,Lt)}}else if(X!==void 0){let Y=X[ot];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(Z.location,Y);break;case 3:i.vertexAttrib3fv(Z.location,Y);break;case 4:i.vertexAttrib4fv(Z.location,Y);break;default:i.vertexAttrib1fv(Z.location,Y)}}}}v()}function A(){I();for(let U in n){let D=n[U];for(let V in D){let R=D[V];for(let O in R){let q=R[O];for(let X in q)u(q[X].object),delete q[X];delete R[O]}}delete n[U]}}function b(U){if(n[U.id]===void 0)return;let D=n[U.id];for(let V in D){let R=D[V];for(let O in R){let q=R[O];for(let X in q)u(q[X].object),delete q[X];delete R[O]}}delete n[U.id]}function x(U){for(let D in n){let V=n[D];for(let R in V){let O=V[R];if(O[U.id]===void 0)continue;let q=O[U.id];for(let X in q)u(q[X].object),delete q[X];delete O[U.id]}}}function y(U){for(let D in n){let V=n[D],R=U.isInstancedMesh===!0?U.id:0,O=V[R];if(O!==void 0){for(let q in O){let X=O[q];for(let ot in X)u(X[ot].object),delete X[ot];delete O[q]}delete V[R],Object.keys(V).length===0&&delete n[D]}}}function I(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function d0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function f0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==zn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let y=x===kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==yn&&x!==Pn&&!y&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Gt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&g===!1;e.reversedDepthBuffer===!0&&g===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&g===!0&&Gt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:g,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:T,maxSamples:A,samples:b}}function p0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new On,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,d){let h=g.length!==0||d||n!==0||s;return s=d,n=g.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,d){e=u(g,d,0)},this.setState=function(g,d,h){let m=g.clippingPlanes,_=g.clipIntersection,p=g.clipShadows,f=i.get(g);if(!s||m===null||m.length===0||r&&!p)r?u(null):c();else{let v=r?0:n,w=v*4,T=f.clippingState||null;l.value=T,T=u(m,d,w,h);for(let A=0;A!==w;++A)T[A]=e[A];f.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(g,d,h,m){let _=g!==null?g.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let f=h+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let w=0,T=h;w!==_;++w,T+=4)a.copy(g[w]).applyMatrix4(v,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Br=class extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new hr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new As(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Ji});r.uniforms.tEquirect.value=e;let a=new Ge(s,r),o=e.minFilter;return e.minFilter===xi&&(e.minFilter=fn),new Is(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},cu=256,m0=3,g0=20,Lu=256,Nu=16,x0=3,_0=new k,v0=new Vt,Ho=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Is(1,10,null),this._boxMesh=new Ge(new As(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=_0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let g=l.autoClear,d=l.autoClearColor,h=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(v0));let p=new Is(n,s,u);return p.position.copy(o),p.update(l,t),l.autoClear=g,l.autoClearColor=d,l.autoClearDepth=h,l.autoClearStencil=m,t.background=_,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(cu,sc(t))}_fromTexture(t,e){t.mapping===Qi||t.mapping===Ls?this._setSize(t.image.length===0?cu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=hu(t,!1,!1),n=Math.log2(t)-m0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Qi||t.mapping===Ls?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=uu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=y0(),this._integrationMaterial=M0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Nu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-x0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Lu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=S0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function hu(i,t,e){return new Br(i,{minFilter:xi,generateMipmaps:t,type:kn,colorSpace:js,depthBuffer:e})}function kr(i,t,e){return new tn({name:i,uniforms:t,vertexShader:te.cube_vert,fragmentShader:e,side:en,blending:Ji,depthTest:!1,depthWrite:!1})}function y0(){return kr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Lu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function M0(){return kr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Nu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function S0(){return kr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${g0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function uu(){return kr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function du(){return kr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function b0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,h=!1){return d==null?null:h?a(d):r(d)}function r(d){if(d&&d.isTexture){let h=d.mapping;if(h===to||h===eo)if(t.has(d)){let m=t.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let _=new Br(m.height);return _.fromEquirectangularTexture(i,d),t.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let h=d.mapping,m=h===to||h===eo,_=h===Qi||h===Ls;if(m||_){let p=e.get(d),f=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Ho(i)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let v=d.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Ho(i)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,h){return h===to?d.mapping=Qi:h===eo&&(d.mapping=Ls),d}function l(d){let h=0,m=6;for(let _=0;_<m;_++)d[_]!==void 0&&h++;return h===m}function c(d){let h=d.target;h.removeEventListener("dispose",c);let m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(d){let h=d.target;h.removeEventListener("dispose",u);let m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function T0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Zs("WebGLRenderer: "+n+" extension not supported."),s}}}function w0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let _=r.get(m);_&&(t.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function u(m){let _=m.attributes;for(let p in _)t.update(_[p],i.ARRAY_BUFFER)}function g(m){let _=m.index,p=m.attributes.position,f=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,w=p.count>=65535?or:ar,T=new w(Math.ceil(v/3)*6,1),A=T.array;if(_!==null){let x=_.array;f=_.version;for(let y=0,I=0;y<v;y+=3){let C=x[y+0],U=x[y+1],D=x[y+2];A[I++]=C,A[I++]=U,A[I++]=U,A[I++]=D,A[I++]=D,A[I++]=C}}else{f=p.version;for(let x=0,y=0;x<v;x+=3){let I=x+0,C=x+1,U=x+2;A[y++]=I,A[y++]=C,A[y++]=C,A[y++]=U,A[y++]=U,A[y++]=I}}T.version=f;let b=r.get(m);b&&t.remove(b),r.set(m,T)}function d(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&g(m)}else g(m);return r.get(m)}function h(){for(let m in s){let _=s[m].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:d,dispose:h}}function A0(i,t,e){let n;function s(g){n=g}let r,a;function o(g){r=g.type,a=g.bytesPerElement}function l(g,d){i.drawElements(n,d,r,g*a),e.update(d,n,1)}function c(g,d,h){h!==0&&(i.drawElementsInstanced(n,d,r,g*a,h),e.update(d,n,h))}function u(g,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,g,0,h);let _=0;for(let p=0;p<h;p++)_+=d[p];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function E0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Xt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function C0(i,t,e){let n=new WeakMap,s=new Re;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==g){let I=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let h=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],w=0;h===!0&&(w=1),m===!0&&(w=2),_===!0&&(w=3);let T=o.attributes.position.count*w,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let b=new Float32Array(T*A*4*g),x=new nr(b,T,A,g);x.type=Pn,x.needsUpdate=!0;let y=w*4;for(let C=0;C<g;C++){let U=p[C],D=f[C],V=v[C],R=T*A*4*C;for(let O=0;O<U.count;O++){let q=O*y;h===!0&&(s.fromBufferAttribute(U,O),b[R+q+0]=s.x,b[R+q+1]=s.y,b[R+q+2]=s.z,b[R+q+3]=0),m===!0&&(s.fromBufferAttribute(D,O),b[R+q+4]=s.x,b[R+q+5]=s.y,b[R+q+6]=s.z,b[R+q+7]=0),_===!0&&(s.fromBufferAttribute(V,O),b[R+q+8]=s.x,b[R+q+9]=s.y,b[R+q+10]=s.z,b[R+q+11]=V.itemSize===4?s.w:1)}}d={count:g,texture:x,size:new jt(T,A)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];let m=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function R0(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,g=c.geometry,d=t.get(c,g);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var I0={[kl]:"LINEAR_TONE_MAPPING",[zl]:"REINHARD_TONE_MAPPING",[Gl]:"CINEON_TONE_MAPPING",[Cr]:"ACES_FILMIC_TONE_MAPPING",[Hl]:"AGX_TONE_MAPPING",[Wl]:"NEUTRAL_TONE_MAPPING",[Vl]:"CUSTOM_TONE_MAPPING"};function P0(i,t,e,n,s,r){let a=new Tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new We;u.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new le([0,2,0,0,2,0],2));let g=new Ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ge(u,g),h=new Tr(-1,1,1,-1,0,1),m=null,_=null,p=!1,f,v=null,w=[],T=!1;this.setSize=function(A,b){a.setSize(A,b),o!==null&&o.setSize(A,b),l!==null&&l.setSize(A,b);for(let x=0;x<w.length;x++){let y=w[x];y.setSize&&y.setSize(A,b)}},this.setEffects=function(A){w=A,T=w.length>0&&w[0].isRenderPass===!0;let b=a.width,x=a.height;w.length>0&&o===null&&(o=new Tn(b,x,{type:kn,depthBuffer:!1,stencilBuffer:!1}),l=new Tn(b,x,{type:kn,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&w.some(I=>I.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new pi(b,x),r===!0&&(c.format=_i,c.type=ji)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let I=0;I<w.length;I++){let C=w[I];C.setSize&&C.setSize(b,x),y&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,b){if(p||A.toneMapping===Jn&&w.length===0)return!1;if(v=b,b!==null){let x=b.width,y=b.height;(a.width!==x||a.height!==y)&&this.setSize(x,y)}return T===!1&&A.setRenderTarget(a),f=A.toneMapping,A.toneMapping=Jn,!0},this.hasRenderPass=function(){return T},this.end=function(A,b){A.toneMapping=f,p=!0;let x=a,y=o;for(let I=0;I<w.length;I++){let C=w[I];C.enabled!==!1&&(C.render(A,y,x,b),C.needsSwap!==!1&&(x=y,y=y===o?l:o))}if(m!==A.outputColorSpace||_!==A.toneMapping){m=A.outputColorSpace,_=A.toneMapping,g.defines={},ne.getTransfer(m)===me&&(g.defines.SRGB_TRANSFER="");let I=I0[_];I&&(g.defines[I]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(v),A.render(d,h),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),g.dispose()}}var Du=new pn,Uu=new pi(1,1),Fu=new dr(1),Ou=new nr,Bu=new Ua,ku=new hr,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),xu=new Float32Array(4);function Os(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=fu[s];if(r===void 0&&(r=new Float32Array(s),fu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xo(i,t){let e=pu[t];e===void 0&&(e=new Int32Array(t),pu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function L0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function N0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function F0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;xu.set(n),i.uniformMatrix2fv(this.addr,!1,xu),qe(e,n)}}function O0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;gu.set(n),i.uniformMatrix3fv(this.addr,!1,gu),qe(e,n)}}function B0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;mu.set(n),i.uniformMatrix4fv(this.addr,!1,mu),qe(e,n)}}function k0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function H0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function X0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function qo(i){return i.version===0&&(i.compareFunction=tc,i.needsUpdate=!0),i}function Y0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=qo(Uu):r=Du,e.setTexture2D(t||r,s)}function $0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Bu,s)}function Z0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=qo(Fu):r=ku,e.setTextureCube(t||r,s)}function J0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ou,s)}function K0(i){switch(i){case 5126:return L0;case 35664:return N0;case 35665:return D0;case 35666:return U0;case 35674:return F0;case 35675:return O0;case 35676:return B0;case 5124:case 35670:return k0;case 35667:case 35671:return z0;case 35668:case 35672:return G0;case 35669:case 35673:return V0;case 5125:return H0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return J0}}function Q0(i,t){i.uniform1fv(this.addr,t)}function j0(i,t){let e=Os(t,this.size,2);i.uniform2fv(this.addr,e)}function tg(i,t){let e=Os(t,this.size,3);i.uniform3fv(this.addr,e)}function eg(i,t){let e=Os(t,this.size,4);i.uniform4fv(this.addr,e)}function ng(i,t){let e=Os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ig(i,t){let e=Os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sg(i,t){let e=Os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rg(i,t){i.uniform1iv(this.addr,t)}function ag(i,t){i.uniform2iv(this.addr,t)}function og(i,t){i.uniform3iv(this.addr,t)}function lg(i,t){i.uniform4iv(this.addr,t)}function cg(i,t){i.uniform1uiv(this.addr,t)}function hg(i,t){i.uniform2uiv(this.addr,t)}function ug(i,t){i.uniform3uiv(this.addr,t)}function dg(i,t){i.uniform4uiv(this.addr,t)}function fg(i,t,e){let n=this.cache,s=t.length,r=Xo(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=qo(Uu):a=Du;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function pg(i,t,e){let n=this.cache,s=t.length,r=Xo(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Bu,r[a])}function mg(i,t,e){let n=this.cache,s=t.length,r=Xo(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=qo(Fu):a=ku;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function gg(i,t,e){let n=this.cache,s=t.length,r=Xo(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ou,r[a])}function xg(i){switch(i){case 5126:return Q0;case 35664:return j0;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}var xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=K0(e.type)}},_c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xg(e.type)}},vc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},mc=/(\w+)(\])?(\[|\.)?/g;function _u(i,t){i.seq.push(t),i.map[t.id]=t}function _g(i,t,e){let n=i.name,s=n.length;for(mc.lastIndex=0;;){let r=mc.exec(n),a=mc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_u(e,c===void 0?new xc(o,i,t):new _c(o,i,t));break}else{let g=e.map[o];g===void 0&&(g=new vc(o),_u(e,g)),e=g}}}var Fs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);_g(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function vu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var vg=37297,yg=0;function Mg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var yu=new Zt;function Sg(i){ne._getMatrix(yu,ne.workingColorSpace,i);let t=`mat3( ${yu.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case tr:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Mg(i.getShaderSource(t),o)}else return r}function bg(i,t){let e=Sg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Tg={[kl]:"Linear",[zl]:"Reinhard",[Gl]:"Cineon",[Cr]:"ACESFilmic",[Hl]:"AgX",[Wl]:"Neutral",[Vl]:"Custom"};function wg(i,t){let e=Tg[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Vo=new k;function Ag(){ne.getLuminanceCoefficients(Vo);let i=Vo.x.toFixed(4),t=Vo.y.toFixed(4),e=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function Cg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Or(i){return i!==""}function Su(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function bu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(i){return i.replace(Ig,Pg)}function Pg(i,t){let e=te[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return yc(e)}var Lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(i){return i.replace(Lg,Ng)}function Ng(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Dg={[Er]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};function Ug(i){return Dg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fg={[Ls]:"ENVMAP_MODE_REFRACTION"};function Og(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bg={[Bl]:"ENVMAP_BLENDING_MULTIPLY",[Gh]:"ENVMAP_BLENDING_MIX",[Vh]:"ENVMAP_BLENDING_ADD"};function kg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Bg[i.combine]||"ENVMAP_BLENDING_NONE"}function zg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ug(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Og(e),g=kg(e),d=Eg(e),h=Cg(r),m=s.createProgram(),_,p,f=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(Or).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(Or).join(`
`),p.length>0&&(p+=`
`)):(_=[wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),p=[wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+g:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?te.tonemapping_pars_fragment:"",e.toneMapping!==Jn?wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,bg("linearToOutputTexel",e.outputColorSpace),Ag(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),a=yc(a),a=Su(a,e),a=bu(a,e),o=yc(o),o=Su(o,e),o=bu(o,e),a=Tu(a),o=Tu(o),e.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=f+_+a,w=f+p+o,T=vu(s,s.VERTEX_SHADER,v),A=vu(s,s.FRAGMENT_SHADER,w);s.attachShader(m,T),s.attachShader(m,A),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function b(C){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(m)||"",D=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(A)||"",R=U.trim(),O=D.trim(),q=V.trim(),X=!0,ot=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,A);else{let Z=Mu(s,T,"vertex"),Q=Mu(s,A,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+Z+`
`+Q)}else R!==""?Gt("WebGLProgram: Program Info Log:",R):(O===""||q==="")&&(ot=!1);ot&&(C.diagnostics={runnable:X,programLog:R,vertexShader:{log:O,prefix:_},fragmentShader:{log:q,prefix:p}})}s.deleteShader(T),s.deleteShader(A),x=new Fs(s,m),y=Rg(s,m)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,vg)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}var Gg=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sc(t),e.set(t,n)),n}},Sc=class{constructor(t){this.id=Gg++,this.code=t,this.usedTimes=0}};function Vg(i){return i===Fi||i===Dr||i===Ur}function Hg(i,t,e,n,s,r){let a=new ir,o=new Mc,l=new Set,c=[],u=new Map,g=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,I,C,U,D){let V=C.fog,R=U.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=t.get(x.envMap||O,q),ot=d[x.type],Z=n.precision;x.precision!==null&&(Z=n.getMaxPrecision(x.precision),Z!==x.precision&&Gt("WebGLProgram.getParameters:",x.precision,"not supported, using",Z,"instead."));let Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Y=Q!==void 0?Q.length:0,dt=0;R.morphAttributes.position!==void 0&&(dt=1),R.morphAttributes.normal!==void 0&&(dt=2),R.morphAttributes.color!==void 0&&(dt=3);let Bt,nt,Mt,Ct;if(ot){let Tt=Qn[ot];Bt=Tt.vertexShader,nt=Tt.fragmentShader}else{Bt=x.vertexShader,nt=x.fragmentShader;let Tt=o.getVertexShaderStage(x),P=o.getFragmentShaderStage(x);o.update(x,Tt,P),Mt=Tt.id,Ct=P.id}let Lt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),qt=U.isInstancedMesh===!0,_e=U.isBatchedMesh===!0,Ut=!!x.map,ce=!!x.matcap,Yt=!!X,$t=Yt&&X.isPMREMTexture===!0,Ue=!!x.aoMap,ve=!!x.lightMap,re=!!x.bumpMap&&x.wireframe===!1,Se=!!x.normalMap,we=!!x.displacementMap,Kt=!!x.emissiveMap,Ae=!!x.metalnessMap,be=!!x.roughnessMap,Fe=x.anisotropy>0,F=x.clearcoat>0,Te=x.diffuseRoughness>0,he=x.dispersion>0,ye=x.retroreflectivity>0,pt=x.iridescence>0,Ie=x.sheen>0,kt=x.transmission>0,zt=Fe&&!!x.anisotropyMap,E=F&&!!x.clearcoatMap,M=F&&!!x.clearcoatNormalMap,G=F&&!!x.clearcoatRoughnessMap,J=Te&&!!x.diffuseRoughnessMap,it=pt&&!!x.iridescenceMap,mt=pt&&!!x.iridescenceThicknessMap,yt=Ie&&!!x.sheenColorMap,$=Ie&&!!x.sheenRoughnessMap,j=!!x.specularMap,_t=!!x.specularColorMap,L=!!x.specularIntensityMap,tt=kt&&!!x.transmissionMap,K=kt&&!!x.thicknessMap,vt=!!x.gradientMap,at=!!x.alphaMap,lt=x.alphaTest>0,Rt=!!x.alphaHash,Qt=!!x.extensions,ut=Jn;x.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(ut=i.toneMapping);let Ft=$t?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,Ht={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:Bt,fragmentShader:nt,defines:x.defines,customVertexShaderID:Mt,customFragmentShaderID:Ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Z,batching:_e,batchingColor:_e&&U._colorsTexture!==null,instancing:qt,instancingColor:qt&&U.instanceColor!==null,instancingMorph:qt&&U.morphTexture!==null,outputColorSpace:Lt===null?i.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ut,matcap:ce,envMap:Yt,envMapMode:Yt&&X.mapping,envMapPMREM:$t,envMapMaxLod:$t?Ft.length-1:null,envMapSize:$t?Ft[0].width:null,aoMap:Ue,lightMap:ve,bumpMap:re,normalMap:Se,displacementMap:we,emissiveMap:Kt,normalMapObjectSpace:Se&&x.normalMapType===Xh,normalMapTangentSpace:Se&&x.normalMapType===zo,packedNormalMap:Se&&x.normalMapType===zo&&Vg(x.normalMap.format),metalnessMap:Ae,roughnessMap:be,anisotropy:Fe,anisotropyMap:zt,clearcoat:F,clearcoatMap:E,clearcoatNormalMap:M,clearcoatRoughnessMap:G,diffuseRoughness:Te,diffuseRoughnessMap:J,dispersion:he,retroreflection:ye,iridescence:pt,iridescenceMap:it,iridescenceThicknessMap:mt,sheen:Ie,sheenColorMap:yt,sheenRoughnessMap:$,specularMap:j,specularColorMap:_t,specularIntensityMap:L,transmission:kt,transmissionMap:tt,thicknessMap:K,gradientMap:vt,opaque:x.transparent===!1&&x.blending===Ui&&x.alphaToCoverage===!1,alphaMap:at,alphaTest:lt,alphaHash:Rt,combine:x.combine,mapUv:Ut&&h(x.map.channel),aoMapUv:Ue&&h(x.aoMap.channel),lightMapUv:ve&&h(x.lightMap.channel),bumpMapUv:re&&h(x.bumpMap.channel),normalMapUv:Se&&h(x.normalMap.channel),displacementMapUv:we&&h(x.displacementMap.channel),emissiveMapUv:Kt&&h(x.emissiveMap.channel),metalnessMapUv:Ae&&h(x.metalnessMap.channel),roughnessMapUv:be&&h(x.roughnessMap.channel),anisotropyMapUv:zt&&h(x.anisotropyMap.channel),clearcoatMapUv:E&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:J&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:it&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:$&&h(x.sheenRoughnessMap.channel),specularMapUv:j&&h(x.specularMap.channel),specularColorMapUv:_t&&h(x.specularColorMap.channel),specularIntensityMapUv:L&&h(x.specularIntensityMap.channel),transmissionMapUv:tt&&h(x.transmissionMap.channel),thicknessMapUv:K&&h(x.thicknessMap.channel),alphaMapUv:at&&h(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Se||Fe),vertexNormals:!!R.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!R.attributes.uv&&(Ut||at),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||R.attributes.normal===void 0&&Se===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:St,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:dt,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:D.filter(Tt=>Tt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,decodeVideoTexture:Ut&&x.map.isVideoTexture===!0&&ne.getTransfer(x.map.colorSpace)===me,decodeVideoTextureEmissive:Kt&&x.emissiveMap.isVideoTexture===!0&&ne.getTransfer(x.emissiveMap.colorSpace)===me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===vn,flipSided:x.side===en,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Qt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&x.extensions.multiDraw===!0||_e)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function _(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)y.push(I),y.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(y,x),f(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function p(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapPMREM),x.push(y.envMapMaxLod),x.push(y.envMapSize),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.diffuseRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.numLightProbeGrids),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function f(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let y=d[x.type],I;if(y){let C=Qn[y];I=au.clone(C.uniforms)}else I=x.uniforms;return I}function w(x,y){let I=u.get(y);return I!==void 0?++I.usedTimes:(I=new zg(i,y,x,s),c.push(I),u.set(y,I)),I}function T(x){if(--x.usedTimes===0){let y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function b(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:w,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:b}}function Wg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Au(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Eu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,m,_,p,f){let v=i[t];return v===void 0?(v={id:d.id,object:d,geometry:h,material:m,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:f},i[t]=v):(v.id=d.id,v.object=d,v.geometry=h,v.material=m,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=p,v.group=f),t++,v}function l(d,h,m,_,p,f,v){v.reversedDepth===!0&&(p=-p);let w=o(d,h,m,_,p,f);m.transmission>0?n.push(w):m.transparent===!0?s.push(w):e.push(w)}function c(d,h,m,_,p,f){let v=o(d,h,m,_,p,f);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):e.unshift(v)}function u(d,h){e.length>1&&e.sort(d||Xg),n.length>1&&n.sort(h||Au),s.length>1&&s.sort(h||Au)}function g(){for(let d=t,h=i.length;d<h;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:g,sort:u}}function qg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Eu,i.set(n,[a])):s>=r.length?(a=new Eu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Yg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Vt};break;case"SpotLight":e={position:new k,direction:new k,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function $g(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Zg=0;function Jg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Kg(i){let t=new Yg,e=$g(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new oe,a=new oe;function o(c){let u=0,g=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let h=0,m=0,_=0,p=0,f=0,v=0,w=0,T=0,A=0,b=0,x=0,y=0,I=0,C=0;c.sort(Jg);for(let D=0,V=c.length;D<V;D++){let R=c[D],O=R.color,q=R.intensity,X=R.distance,ot=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Fi?ot=R.shadow.map.texture:ot=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=O.r*q,g+=O.g*q,d+=O.b*q;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(R.sh.coefficients[Z],q);C++}else if(R.isSunLight){let Z=t.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Q=R.shadow,Y=e.get(R);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=Y,n.sunShadowMap[m]=ot;let dt=Q.getViewportCount();for(let Bt=0;Bt<dt;Bt++)n.sunShadowMatrix[_+Bt]=Q.getMatrix(Bt),n.sunShadowCascade[_+Bt]=Q._cascadeData[Bt];_+=dt,m++}n.sun[h]=Z,h++}else if(R.isDirectionalLight){let Z=t.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Q=R.shadow,Y=e.get(R);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=ot,n.directionalShadowMatrix[p]=R.shadow.matrix,A++}n.directional[p]=Z,p++}else if(R.isSpotLight){let Z=t.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(O).multiplyScalar(q),Z.distance=X,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,n.spot[v]=Z;let Q=R.shadow;if(R.map&&(n.spotLightMap[y]=R.map,y++,Q.updateMatrices(R),R.castShadow&&I++),n.spotLightMatrix[v]=Q.matrix,R.castShadow){let Y=e.get(R);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=ot,x++}v++}else if(R.isRectAreaLight){let Z=t.get(R);Z.color.copy(O).multiplyScalar(q),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),n.rectArea[w]=Z,w++}else if(R.isPointLight){let Z=t.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){let Q=R.shadow,Y=e.get(R);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,n.pointShadow[f]=Y,n.pointShadowMap[f]=ot,n.pointShadowMatrix[f]=R.shadow.matrix,b++}n.point[f]=Z,f++}else if(R.isHemisphereLight){let Z=t.get(R);Z.skyColor.copy(R.color).multiplyScalar(q),Z.groundColor.copy(R.groundColor).multiplyScalar(q),n.hemi[T]=Z,T++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=g,n.ambient[2]=d;let U=n.hash;(U.sunLength!==h||U.directionalLength!==p||U.pointLength!==f||U.spotLength!==v||U.rectAreaLength!==w||U.hemiLength!==T||U.numSunShadows!==m||U.numDirectionalShadows!==A||U.numPointShadows!==b||U.numSpotShadows!==x||U.numSpotMaps!==y||U.numLightProbes!==C)&&(n.sun.length=h,n.directional.length=p,n.spot.length=v,n.rectArea.length=w,n.point.length=f,n.hemi.length=T,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+y-I,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,U.sunLength=h,U.directionalLength=p,U.pointLength=f,U.spotLength=v,U.rectAreaLength=w,U.hemiLength=T,U.numSunShadows=m,U.numDirectionalShadows=A,U.numPointShadows=b,U.numSpotShadows=x,U.numSpotMaps=y,U.numLightProbes=C,n.version=Zg++)}function l(c,u){let g=0,d=0,h=0,m=0,_=0,p=0,f=u.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let T=c[v];if(T.isSunLight){let A=n.sun[g];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(f),g++}else if(T.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),d++}else if(T.isSpotLight){let A=n.spot[m];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),m++}else if(T.isRectAreaLight){let A=n.rectArea[_];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(f),a.identity(),r.copy(T.matrixWorld),r.premultiply(f),a.extractRotation(r),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){let A=n.point[h];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(f),h++}else if(T.isHemisphereLight){let A=n.hemi[p];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:n}}function Cu(i){let t=new Kg(i),e=[],n=[],s=[];function r(g){u.camera=g,e.length=0,n.length=0,s.length=0}function a(g){g.isLightProbeGrid?s.push(g):e.push(g)}function o(g){n.push(g)}function l(){t.setup(e),s.sort((g,d)=>g.priority-d.priority||g.id-d.id)}function c(g){t.setupView(e,g)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Qg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Cu(i),t.set(s,[o])):r>=a.length?(o=new Cu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ex=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],nx=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Ru=new oe,Fr=new k,gc=new k;function ix(i,t,e){let n=new Ii,s=new jt,r=new jt,a=new Re,o=new ka,l=new za,c={},u=e.maxTextureSize,g={[Di]:en,[en]:Di,[vn]:vn},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:jg,fragmentShader:tx}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let m=new We;m.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ge(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Er;let f=this.type;this.render=function(b,x,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Sh&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Er);let I=i.getRenderTarget(),C=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Ji),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let V=f!==this.type;V&&x.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(O=>O.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,O=b.length;R<O;R++){let q=b[R],X=q.shadow;if(X===void 0){Gt("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ot=X.getFrameExtents();s.multiply(ot),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,X.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Z,X.map===null||V===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ps){if(q.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Tn(s.x,s.y,{format:Fi,type:kn,minFilter:fn,magFilter:fn,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new pi(s.x,s.y,Pn),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=ui,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ze,X.map.depthTexture.magFilter=ze}else q.isPointLight?(X.map=new Br(s.x),X.map.depthTexture=new dr(s.x,Bn)):(X.map=new Tn(s.x,s.y),X.map.depthTexture=new pi(s.x,s.y,Bn)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=ui,this.type===Er?(X.map.depthTexture.compareFunction=Z?jl:Ql,X.map.depthTexture.minFilter=fn,X.map.depthTexture.magFilter=fn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ze,X.map.depthTexture.magFilter=ze);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let Q=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,y);let Y=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:y.layers;for(let dt=0;dt<Q;dt++){let Bt=X.getCamera(dt);if(q.isPointLight){let nt=X.camera,Mt=X.matrix,Ct=q.distance||nt.far;Ct!==nt.far&&(nt.far=Ct,nt.updateProjectionMatrix()),Fr.setFromMatrixPosition(q.matrixWorld),nt.position.copy(Fr),gc.copy(nt.position),gc.add(ex[dt]),nt.up.copy(nx[dt]),nt.lookAt(gc),nt.updateMatrixWorld(),Mt.makeTranslation(-Fr.x,-Fr.y,-Fr.z),Ru.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Ru,nt.coordinateSystem,nt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,dt),i.clear();else{dt===0&&(i.setRenderTarget(X.map),i.clear());let nt=X.getViewport(dt);a.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),D.viewport(a)}n=X.getFrustum(dt),T(x,y,Bt,q,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Ps&&v(X,y),X.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(I,C,U)};function v(b,x){let y=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null?b.mapPass=new Tn(s.x,s.y,{format:Fi,type:kn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(x,null,y,d,_,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(x,null,y,h,_,null)}function w(b,x,y,I){let C=null,U=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)C=U;else if(C=y.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=C.uuid,V=x.uuid,R=c[D];R===void 0&&(R={},c[D]=R);let O=R[V];O===void 0&&(O=C.clone(),R[V]=O,x.addEventListener("dispose",A)),C=O}if(C.visible=x.visible,C.wireframe=x.wireframe,I===Ps?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:g[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=i.properties.get(C);D.light=y}return C}function T(b,x,y,I,C,U){if(b.visible===!1)return;if(b.layers.test(C)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&U===Ps)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let R=t.update(b),O=b.material;if(Array.isArray(O)){let q=R.groups;for(let X=0,ot=q.length;X<ot;X++){let Z=q[X],Q=O[Z.materialIndex];if(Q&&Q.visible){let Y=w(b,Q,I,U);b.onBeforeShadow(i,b,x,y,R,Y,Z),i.renderBufferDirect(y,null,R,Y,b,Z),b.onAfterShadow(i,b,x,y,R,Y,Z)}}}else if(O.visible){let q=w(b,O,I,U);b.onBeforeShadow(i,b,x,y,R,q,null),i.renderBufferDirect(y,null,R,q,b,null),b.onAfterShadow(i,b,x,y,R,q,null)}}let V=b.children;for(let R=0,O=V.length;R<O;R++)T(V[R],x,y,I,C,U)}function A(b){b.target.removeEventListener("dispose",A);for(let y in c){let I=c[y],C=b.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function sx(i,t){function e(){let L=!1,tt=new Re,K=null,vt=new Re(0,0,0,0);return{setMask:function(at){K!==at&&!L&&(i.colorMask(at,at,at,at),K=at)},setLocked:function(at){L=at},setClear:function(at,lt,Rt,Qt,ut){ut===!0&&(at*=Qt,lt*=Qt,Rt*=Qt),tt.set(at,lt,Rt,Qt),vt.equals(tt)===!1&&(i.clearColor(at,lt,Rt,Qt),vt.copy(tt))},reset:function(){L=!1,K=null,vt.set(-1,0,0,0)}}}function n(){let L=!1,tt=!1,K=null,vt=null,at=null;return{setReversed:function(lt){if(tt!==lt){let Rt=t.get("EXT_clip_control");lt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),tt=lt;let Qt=at;at=null,this.setClear(Qt)}},getReversed:function(){return tt},setTest:function(lt){lt?St(i.DEPTH_TEST):qt(i.DEPTH_TEST)},setMask:function(lt){K!==lt&&!L&&(i.depthMask(lt),K=lt)},setFunc:function(lt){if(tt&&(lt=nu[lt]),vt!==lt){switch(lt){case ba:i.depthFunc(i.NEVER);break;case Ta:i.depthFunc(i.ALWAYS);break;case wa:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case Ca:i.depthFunc(i.GREATER);break;case Ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=lt}},setLocked:function(lt){L=lt},setClear:function(lt){at!==lt&&(at=lt,tt&&(lt=1-lt),i.clearDepth(lt))},reset:function(){L=!1,K=null,vt=null,at=null,tt=!1}}}function s(){let L=!1,tt=null,K=null,vt=null,at=null,lt=null,Rt=null,Qt=null,ut=null;return{setTest:function(Ft){L||(Ft?St(i.STENCIL_TEST):qt(i.STENCIL_TEST))},setMask:function(Ft){tt!==Ft&&!L&&(i.stencilMask(Ft),tt=Ft)},setFunc:function(Ft,Ht,Tt){(K!==Ft||vt!==Ht||at!==Tt)&&(i.stencilFunc(Ft,Ht,Tt),K=Ft,vt=Ht,at=Tt)},setOp:function(Ft,Ht,Tt){(lt!==Ft||Rt!==Ht||Qt!==Tt)&&(i.stencilOp(Ft,Ht,Tt),lt=Ft,Rt=Ht,Qt=Tt)},setLocked:function(Ft){L=Ft},setClear:function(Ft){ut!==Ft&&(i.clearStencil(Ft),ut=Ft)},reset:function(){L=!1,tt=null,K=null,vt=null,at=null,lt=null,Rt=null,Qt=null,ut=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,u={},g={},d={},h=new WeakMap,m=[],_=null,p=!1,f=null,v=null,w=null,T=null,A=null,b=null,x=null,y=new Vt(0,0,0),I=0,C=!1,U=null,D=null,V=null,R=null,O=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ot=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=ot>=1):Z.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=ot>=2);let Q=null,Y={},dt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),nt=new Re().fromArray(dt),Mt=new Re().fromArray(Bt);function Ct(L,tt,K,vt){let at=new Uint8Array(4),lt=i.createTexture();i.bindTexture(L,lt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<K;Rt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(tt+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return lt}let Lt={};Lt[i.TEXTURE_2D]=Ct(i.TEXTURE_2D,i.TEXTURE_2D,1),Lt[i.TEXTURE_CUBE_MAP]=Ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[i.TEXTURE_2D_ARRAY]=Ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Lt[i.TEXTURE_3D]=Ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),St(i.DEPTH_TEST),a.setFunc(vs),re(!1),Se(Nl),St(i.CULL_FACE),Ue(Ji);function St(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function qt(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function _e(L,tt){return d[L]!==tt?(i.bindFramebuffer(L,tt),d[L]=tt,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=tt),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function Ut(L,tt){let K=m,vt=!1;if(L){K=h.get(tt),K===void 0&&(K=[],h.set(tt,K));let at=L.textures;if(K.length!==at.length||K[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Rt=at.length;lt<Rt;lt++)K[lt]=i.COLOR_ATTACHMENT0+lt;K.length=at.length,vt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,vt=!0);vt&&i.drawBuffers(K)}function ce(L){return _!==L?(i.useProgram(L),_=L,!0):!1}let Yt={[Ki]:i.FUNC_ADD,[Th]:i.FUNC_SUBTRACT,[wh]:i.FUNC_REVERSE_SUBTRACT};Yt[Ah]=i.MIN,Yt[Eh]=i.MAX;let $t={[Ch]:i.ZERO,[Rh]:i.ONE,[Ih]:i.SRC_COLOR,[Fl]:i.SRC_ALPHA,[Fh]:i.SRC_ALPHA_SATURATE,[Dh]:i.DST_COLOR,[Lh]:i.DST_ALPHA,[Ph]:i.ONE_MINUS_SRC_COLOR,[Ol]:i.ONE_MINUS_SRC_ALPHA,[Uh]:i.ONE_MINUS_DST_COLOR,[Nh]:i.ONE_MINUS_DST_ALPHA,[Oh]:i.CONSTANT_COLOR,[Bh]:i.ONE_MINUS_CONSTANT_COLOR,[kh]:i.CONSTANT_ALPHA,[zh]:i.ONE_MINUS_CONSTANT_ALPHA};function Ue(L,tt,K,vt,at,lt,Rt,Qt,ut,Ft){if(L===Ji){p===!0&&(qt(i.BLEND),p=!1);return}if(p===!1&&(St(i.BLEND),p=!0),L!==bh){if(L!==f||Ft!==C){if((v!==Ki||A!==Ki)&&(i.blendEquation(i.FUNC_ADD),v=Ki,A=Ki),Ft)switch(L){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gi:i.blendFunc(i.ONE,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xt("WebGLState: Invalid blending: ",L);break}else switch(L){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dl:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ul:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",L);break}w=null,T=null,b=null,x=null,y.set(0,0,0),I=0,f=L,C=Ft}return}at=at||tt,lt=lt||K,Rt=Rt||vt,(tt!==v||at!==A)&&(i.blendEquationSeparate(Yt[tt],Yt[at]),v=tt,A=at),(K!==w||vt!==T||lt!==b||Rt!==x)&&(i.blendFuncSeparate($t[K],$t[vt],$t[lt],$t[Rt]),w=K,T=vt,b=lt,x=Rt),(Qt.equals(y)===!1||ut!==I)&&(i.blendColor(Qt.r,Qt.g,Qt.b,ut),y.copy(Qt),I=ut),f=L,C=!1}function ve(L,tt){L.side===vn?qt(i.CULL_FACE):St(i.CULL_FACE);let K=L.side===en;tt&&(K=!K),re(K),L.blending===Ui&&L.transparent===!1?Ue(Ji):Ue(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let vt=L.stencilWrite;o.setTest(vt),vt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Kt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):qt(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(L){U!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),U=L)}function Se(L){L!==yh?(St(i.CULL_FACE),L!==D&&(L===Nl?i.cullFace(i.BACK):L===Mh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qt(i.CULL_FACE),D=L}function we(L){L!==V&&(X&&i.lineWidth(L),V=L)}function Kt(L,tt,K){L?(St(i.POLYGON_OFFSET_FILL),(R!==tt||O!==K)&&(R=tt,O=K,a.getReversed()&&(tt=-tt,K=-K),i.polygonOffset(tt,K))):qt(i.POLYGON_OFFSET_FILL)}function Ae(L){L?St(i.SCISSOR_TEST):qt(i.SCISSOR_TEST)}function be(L){L===void 0&&(L=i.TEXTURE0+q-1),Q!==L&&(i.activeTexture(L),Q=L)}function Fe(L,tt,K){K===void 0&&(Q===null?K=i.TEXTURE0+q-1:K=Q);let vt=Y[K];vt===void 0&&(vt={type:void 0,texture:void 0},Y[K]=vt),(vt.type!==L||vt.texture!==tt)&&(Q!==K&&(i.activeTexture(K),Q=K),i.bindTexture(L,tt||Lt[L]),vt.type=L,vt.texture=tt)}function F(){let L=Y[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Te(){try{i.compressedTexImage2D(...arguments)}catch(L){Xt("WebGLState:",L)}}function he(){try{i.compressedTexImage3D(...arguments)}catch(L){Xt("WebGLState:",L)}}function ye(){try{i.texSubImage2D(...arguments)}catch(L){Xt("WebGLState:",L)}}function pt(){try{i.texSubImage3D(...arguments)}catch(L){Xt("WebGLState:",L)}}function Ie(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Xt("WebGLState:",L)}}function kt(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Xt("WebGLState:",L)}}function zt(){try{i.texStorage2D(...arguments)}catch(L){Xt("WebGLState:",L)}}function E(){try{i.texStorage3D(...arguments)}catch(L){Xt("WebGLState:",L)}}function M(){try{i.texImage2D(...arguments)}catch(L){Xt("WebGLState:",L)}}function G(){try{i.texImage3D(...arguments)}catch(L){Xt("WebGLState:",L)}}function J(L){return g[L]!==void 0?g[L]:i.getParameter(L)}function it(L,tt){g[L]!==tt&&(i.pixelStorei(L,tt),g[L]=tt)}function mt(L){nt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),nt.copy(L))}function yt(L){Mt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Mt.copy(L))}function $(L,tt){let K=c.get(tt);K===void 0&&(K=new WeakMap,c.set(tt,K));let vt=K.get(L);vt===void 0&&(vt=i.getUniformBlockIndex(tt,L.name),i.uniformBlockBinding(tt,vt,vt),K.set(L,vt))}function j(L,tt,K){let at=c.get(tt).get(L);l[at]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,at,K),l[at]=K)}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},g={},Q=null,Y={},d={},l={},h=new WeakMap,m=[],_=null,p=!1,f=null,v=null,w=null,T=null,A=null,b=null,x=null,y=new Vt(0,0,0),I=0,C=!1,U=null,D=null,V=null,R=null,O=null,nt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:St,disable:qt,bindFramebuffer:_e,drawBuffers:Ut,useProgram:ce,setBlending:Ue,setMaterial:ve,setFlipSided:re,setCullFace:Se,setLineWidth:we,setPolygonOffset:Kt,setScissorTest:Ae,activeTexture:be,bindTexture:Fe,unbindTexture:F,compressedTexImage2D:Te,compressedTexImage3D:he,texImage2D:M,texImage3D:G,pixelStorei:it,getParameter:J,updateUBOMapping:$,uniformBlockBinding:j,texStorage2D:zt,texStorage3D:E,texSubImage2D:ye,texSubImage3D:pt,compressedTexSubImage2D:Ie,compressedTexSubImage3D:kt,scissor:mt,viewport:yt,reset:_t}}function rx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,u=new WeakMap,g=new Set,d,h=new WeakMap,m=new Set,_=new FinalizationRegistry(E=>m.delete(E)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(E,M){return p?new OffscreenCanvas(E,M):er("canvas")}function v(E,M,G){let J=1,it=zt(E);if((it.width>G||it.height>G)&&(J=G/Math.max(it.width,it.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let mt=Math.floor(J*it.width),yt=Math.floor(J*it.height);d===void 0&&(d=f(mt,yt));let $=M?f(mt,yt):d;return $.width=mt,$.height=yt,$.getContext("2d").drawImage(E,0,0,mt,yt),Gt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+mt+"x"+yt+")."),$}else return"data"in E&&Gt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),E;return E}function w(E){return E.generateMipmaps}function T(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,M,G,J,it,mt=!1){if(E!==null){if(i[E]!==void 0)return i[E];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let yt;J&&(yt=t.get("EXT_texture_norm16"),yt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=M;if(M===i.RED&&(G===i.FLOAT&&($=i.R32F),G===i.HALF_FLOAT&&($=i.R16F),G===i.UNSIGNED_BYTE&&($=i.R8),G===i.UNSIGNED_SHORT&&yt&&($=yt.R16_EXT),G===i.SHORT&&yt&&($=yt.R16_SNORM_EXT)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.R8UI),G===i.UNSIGNED_SHORT&&($=i.R16UI),G===i.UNSIGNED_INT&&($=i.R32UI),G===i.BYTE&&($=i.R8I),G===i.SHORT&&($=i.R16I),G===i.INT&&($=i.R32I)),M===i.RG&&(G===i.FLOAT&&($=i.RG32F),G===i.HALF_FLOAT&&($=i.RG16F),G===i.UNSIGNED_BYTE&&($=i.RG8),G===i.UNSIGNED_SHORT&&yt&&($=yt.RG16_EXT),G===i.SHORT&&yt&&($=yt.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RG8UI),G===i.UNSIGNED_SHORT&&($=i.RG16UI),G===i.UNSIGNED_INT&&($=i.RG32UI),G===i.BYTE&&($=i.RG8I),G===i.SHORT&&($=i.RG16I),G===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGB8UI),G===i.UNSIGNED_SHORT&&($=i.RGB16UI),G===i.UNSIGNED_INT&&($=i.RGB32UI),G===i.BYTE&&($=i.RGB8I),G===i.SHORT&&($=i.RGB16I),G===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGBA8UI),G===i.UNSIGNED_SHORT&&($=i.RGBA16UI),G===i.UNSIGNED_INT&&($=i.RGBA32UI),G===i.BYTE&&($=i.RGBA8I),G===i.SHORT&&($=i.RGBA16I),G===i.INT&&($=i.RGBA32I)),M===i.RGB&&(G===i.UNSIGNED_SHORT&&yt&&($=yt.RGB16_EXT),G===i.SHORT&&yt&&($=yt.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),M===i.RGBA){let j=mt?tr:ne.getTransfer(it);G===i.FLOAT&&($=i.RGBA32F),G===i.HALF_FLOAT&&($=i.RGBA16F),G===i.UNSIGNED_BYTE&&($=j===me?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&yt&&($=yt.RGBA16_EXT),G===i.SHORT&&yt&&($=yt.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(E,M){let G;return E?M===null||M===Bn||M===ji?G=i.DEPTH24_STENCIL8:M===Pn?G=i.DEPTH32F_STENCIL8:M===Ns&&(G=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Bn||M===ji?G=i.DEPTH_COMPONENT24:M===Pn?G=i.DEPTH_COMPONENT32F:M===Ns&&(G=i.DEPTH_COMPONENT16),G}function y(E,M){return w(E)===!0||E.isFramebufferTexture&&E.minFilter!==ze&&E.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function I(E){let M=new WeakRef(E);n.get(E).__ref=M,m.add(M),_.register(E,M,M)}function C(E){let M=n.get(E).__ref;M!==void 0&&(m.delete(M),_.unregister(M))}function U(E){V(E.target)}function D(E){R(E.target)}function V(E){E.removeEventListener("dispose",U),C(E),q(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&g.delete(E)}function R(E){E.removeEventListener("dispose",D),C(E),ot(E)}function O(){for(let E of m){let M=E.deref();M!==void 0&&(M.isRenderTarget===!0?R(M):V(M))}m.clear(),g.clear()}function q(E){let M=n.get(E);if(M.__webglInit===void 0)return;let G=E.source,J=h.get(G);if(J){let it=J[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&X(E),Object.keys(J).length===0&&h.delete(G)}n.remove(E)}function X(E){let M=n.get(E);i.deleteTexture(M.__webglTexture);let G=E.source,J=h.get(G);delete J[M.__cacheKey],a.memory.textures--}function ot(E){let M=n.get(E);M.__depthDisposeCallback&&M.__depthDisposeCallback();let G=E.depthTexture;if(G&&G.renderTarget===E&&V(G),E.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(M.__webglFramebuffer[it]))for(let mt=0;mt<M.__webglFramebuffer[it].length;mt++)i.deleteFramebuffer(M.__webglFramebuffer[it][mt]);else i.deleteFramebuffer(M.__webglFramebuffer[it]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[it])}else{if(Array.isArray(M.__webglFramebuffer))for(let it=0;it<M.__webglFramebuffer.length;it++)i.deleteFramebuffer(M.__webglFramebuffer[it]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let it=0;it<M.__webglColorRenderbuffer.length;it++)M.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[it]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let J=E.textures;for(let it=0,mt=J.length;it<mt;it++){let yt=n.get(J[it]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(J[it])}n.remove(E)}let Z=0;function Q(){Z=0}function Y(){return Z}function dt(E){Z=E}function Bt(){let E=Z;return E>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,E}function nt(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.mipmapsAutoUpdate),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function Mt(E,M){let G=n.get(E);if(E.isVideoTexture&&Ie(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&G.__version!==E.version){let J=E.image;if(J===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(G,E,M);return}}else E.isExternalTexture&&(G.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function Ct(E,M){let G=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){ve(G,E,M);return}else E.isExternalTexture&&(G.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function Lt(E,M){let G=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){ve(G,E,M);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function St(E,M){let G=n.get(E);if(E.version>0&&G.__version!==E.version){re(G,E,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}let qt={[Ia]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},_e={[ze]:i.NEAREST,[Hh]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[no]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},Ut={[Yh]:i.NEVER,[tc]:i.ALWAYS,[$h]:i.LESS,[Ql]:i.LEQUAL,[Zh]:i.EQUAL,[jl]:i.GEQUAL,[Jh]:i.GREATER,[Kh]:i.NOTEQUAL};function ce(E,M){if(M.type===Pn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===fn||M.magFilter===no||M.magFilter===Rr||M.magFilter===xi||M.minFilter===fn||M.minFilter===no||M.minFilter===Rr||M.minFilter===xi)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,qt[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,qt[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,qt[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,_e[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,_e[M.minFilter]),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ut[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ze||M.minFilter!==Rr&&M.minFilter!==xi||M.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Yt(E,M){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",U),I(M));let J=M.source,it=h.get(J);it===void 0&&(it={},h.set(J,it));let mt=nt(M);if(mt!==E.__cacheKey){it[mt]===void 0&&(it[mt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),it[mt].usedTimes++;let yt=it[E.__cacheKey];yt!==void 0&&(it[E.__cacheKey].usedTimes--,yt.usedTimes===0&&X(M)),E.__cacheKey=mt,E.__webglTexture=it[mt].texture}return G}function $t(E,M,G){return Math.floor(Math.floor(E/G)/M)}function Ue(E,M,G,J){let mt=E.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,G,J,M.data);else{mt.sort((L,tt)=>L.start-tt.start);let yt=0;for(let L=1;L<mt.length;L++){let tt=mt[yt],K=mt[L],vt=tt.start+tt.count,at=$t(K.start,M.width,4),lt=$t(tt.start,M.width,4);K.start<=vt+1&&at===lt&&$t(K.start+K.count-1,M.width,4)===at?tt.count=Math.max(tt.count,K.start+K.count-tt.start):(++yt,mt[yt]=K)}mt.length=yt+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),_t=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let L=0,tt=mt.length;L<tt;L++){let K=mt[L],vt=Math.floor(K.start/4),at=Math.ceil(K.count/4),lt=vt%M.width,Rt=Math.floor(vt/M.width),Qt=at,ut=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Rt),e.texSubImage2D(i.TEXTURE_2D,0,lt,Rt,Qt,ut,G,J,M.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function ve(E,M,G){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);let it=Yt(E,M),mt=M.source;e.bindTexture(J,E.__webglTexture,i.TEXTURE0+G);let yt=n.get(mt);if(mt.version!==yt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ut=ne.getPrimaries(ne.workingColorSpace),Ft=M.colorSpace===vi?null:ne.getPrimaries(M.colorSpace),Ht=M.colorSpace===vi||ut===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let j=v(M.image,!1,s.maxTextureSize);j=kt(M,j);let _t=r.convert(M.format,M.colorSpace),L=r.convert(M.type),tt=b(M.internalFormat,_t,L,M.normalized,M.colorSpace,M.isVideoTexture);ce(J,M);let K,vt=M.mipmaps,at=M.isVideoTexture!==!0,lt=yt.__version===void 0||it===!0,Rt=mt.dataReady,Qt=y(M,j);if(M.isDepthTexture)tt=x(M.format===_i,M.type),lt&&(at?e.texStorage2D(i.TEXTURE_2D,1,tt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,tt,j.width,j.height,0,_t,L,null));else if(M.isDataTexture)if(vt.length>0){at&&lt&&e.texStorage2D(i.TEXTURE_2D,Qt,tt,vt[0].width,vt[0].height);for(let ut=0,Ft=vt.length;ut<Ft;ut++)K=vt[ut],at?Rt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,K.width,K.height,_t,L,K.data):e.texImage2D(i.TEXTURE_2D,ut,tt,K.width,K.height,0,_t,L,K.data);M.generateMipmaps=!1}else at?(lt&&e.texStorage2D(i.TEXTURE_2D,Qt,tt,j.width,j.height),Rt&&Ue(M,j,_t,L)):e.texImage2D(i.TEXTURE_2D,0,tt,j.width,j.height,0,_t,L,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){at&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,tt,vt[0].width,vt[0].height,j.depth);for(let ut=0,Ft=vt.length;ut<Ft;ut++)if(K=vt[ut],M.format!==zn)if(_t!==null)if(at){if(Rt)if(M.layerUpdates.size>0){let Ht=cc(K.width,K.height,M.format,M.type);for(let Tt of M.layerUpdates){let P=K.data.subarray(Tt*Ht/K.data.BYTES_PER_ELEMENT,(Tt+1)*Ht/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,Tt,K.width,K.height,1,_t,P)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,K.width,K.height,j.depth,_t,K.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,tt,K.width,K.height,j.depth,0,K.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,K.width,K.height,j.depth,_t,L,K.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,tt,K.width,K.height,j.depth,0,_t,L,K.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{at&&lt&&e.texStorage2D(i.TEXTURE_2D,Qt,tt,vt[0].width,vt[0].height);for(let ut=0,Ft=vt.length;ut<Ft;ut++)K=vt[ut],M.format!==zn?_t!==null?at?Rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,K.width,K.height,_t,K.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,tt,K.width,K.height,0,K.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Rt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,K.width,K.height,_t,L,K.data):e.texImage2D(i.TEXTURE_2D,ut,tt,K.width,K.height,0,_t,L,K.data)}else if(M.isDataArrayTexture)if(at){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,tt,j.width,j.height,j.depth),Rt)if(M.layerUpdates.size>0){let ut=cc(j.width,j.height,M.format,M.type);for(let Ft of M.layerUpdates){let Ht=j.data.subarray(Ft*ut/j.data.BYTES_PER_ELEMENT,(Ft+1)*ut/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ft,j.width,j.height,1,_t,L,Ht)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,_t,L,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,tt,j.width,j.height,j.depth,0,_t,L,j.data);else if(M.isData3DTexture)at?(lt&&e.texStorage3D(i.TEXTURE_3D,Qt,tt,j.width,j.height,j.depth),Rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,_t,L,j.data)):e.texImage3D(i.TEXTURE_3D,0,tt,j.width,j.height,j.depth,0,_t,L,j.data);else if(M.isFramebufferTexture){if(lt)if(at)e.texStorage2D(i.TEXTURE_2D,Qt,tt,j.width,j.height);else{let ut=j.width,Ft=j.height;for(let Ht=0;Ht<Qt;Ht++)e.texImage2D(i.TEXTURE_2D,Ht,tt,ut,Ft,0,_t,L,null),ut>>=1,Ft>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let ut=i.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),j.parentNode!==ut){ut.appendChild(j),g.add(M),ut.onpaint=Ft=>{let Ht=Ft.changedElements;for(let Tt of g)Ht.includes(Tt.image)&&(Tt.needsUpdate=!0)},ut.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let Ht=i.RGBA,Tt=i.RGBA,P=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ht,Tt,P,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(vt.length>0){if(at&&lt){let ut=zt(vt[0]);e.texStorage2D(i.TEXTURE_2D,Qt,tt,ut.width,ut.height)}for(let ut=0,Ft=vt.length;ut<Ft;ut++)K=vt[ut],at?Rt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,_t,L,K):e.texImage2D(i.TEXTURE_2D,ut,tt,_t,L,K);M.generateMipmaps=!1}else if(at){if(lt){let ut=zt(j);e.texStorage2D(i.TEXTURE_2D,Qt,tt,ut.width,ut.height)}Rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,L,j)}else e.texImage2D(i.TEXTURE_2D,0,tt,_t,L,j);w(M)&&M.mipmapsAutoUpdate===!0&&T(J),yt.__version=mt.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function re(E,M,G){if(M.image.length!==6)return;let J=Yt(E,M),it=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+G);let mt=n.get(it);if(it.version!==mt.__version||J===!0){e.activeTexture(i.TEXTURE0+G);let yt=ne.getPrimaries(ne.workingColorSpace),$=M.colorSpace===vi?null:ne.getPrimaries(M.colorSpace),j=M.colorSpace===vi||yt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let _t=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,tt=[];for(let Tt=0;Tt<6;Tt++)!_t&&!L?tt[Tt]=v(M.image[Tt],!0,s.maxCubemapSize):tt[Tt]=L?M.image[Tt].image:M.image[Tt],tt[Tt]=kt(M,tt[Tt]);let K=tt[0],vt=r.convert(M.format,M.colorSpace),at=r.convert(M.type),lt=b(M.internalFormat,vt,at,M.normalized,M.colorSpace),Rt=M.isVideoTexture!==!0,Qt=mt.__version===void 0||J===!0,ut=it.dataReady,Ft=y(M,K);ce(i.TEXTURE_CUBE_MAP,M);let Ht;if(M.isDepthTexture){if(lt=x(M.format===_i,M.type),Qt)if(Rt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,lt,K.width,K.height);else for(let Tt=0;Tt<6;Tt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,lt,K.width,K.height,0,vt,at,null)}else if(_t){Rt&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,lt,K.width,K.height);for(let Tt=0;Tt<6;Tt++){Ht=tt[Tt].mipmaps;for(let P=0;P<Ht.length;P++){let et=Ht[P];M.format!==zn?vt!==null?Rt?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,P,0,0,et.width,et.height,vt,et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,P,lt,et.width,et.height,0,et.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,P,0,0,et.width,et.height,vt,at,et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,P,lt,et.width,et.height,0,vt,at,et.data)}}}else{if(Ht=M.mipmaps,Rt&&Qt){Ht.length>0&&Ft++;let Tt=zt(tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,lt,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(L){Rt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,tt[Tt].width,tt[Tt].height,vt,at,tt[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,lt,tt[Tt].width,tt[Tt].height,0,vt,at,tt[Tt].data);for(let P=0;P<Ht.length;P++){let H=Ht[P].image[Tt].image;Rt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,P+1,0,0,H.width,H.height,vt,at,H.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,P+1,lt,H.width,H.height,0,vt,at,H.data)}}else{Rt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,vt,at,tt[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,lt,vt,at,tt[Tt]);for(let P=0;P<Ht.length;P++){let et=Ht[P];Rt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,P+1,0,0,vt,at,et.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,P+1,lt,vt,at,et.image[Tt])}}}w(M)&&M.mipmapsAutoUpdate===!0&&T(i.TEXTURE_CUBE_MAP),mt.__version=it.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Se(E,M,G,J,it,mt){let yt=r.convert(G.format,G.colorSpace),$=r.convert(G.type),j=b(G.internalFormat,yt,$,G.normalized,G.colorSpace),_t=n.get(M),L=n.get(G);if(L.__renderTarget=M,!_t.__hasExternalTextures){let tt=Math.max(1,M.width>>mt),K=Math.max(1,M.height>>mt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,mt,j,tt,K,M.depth,0,yt,$,null):e.texImage2D(it,mt,j,tt,K,0,yt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),pt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,it,L.__webglTexture,0,ye(M)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,it,L.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function we(E,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer){let J=M.depthTexture,it=J&&J.isDepthTexture?J.type:null,mt=x(M.stencilBuffer,it),yt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(M),mt,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(M),mt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,mt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,E)}else{let J=M.textures;for(let it=0;it<J.length;it++){let mt=J[it],yt=r.convert(mt.format,mt.colorSpace),$=r.convert(mt.type),j=b(mt.internalFormat,yt,$,mt.normalized,mt.colorSpace);pt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(M),j,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(M),j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Kt(E,M,G){let J=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(M.depthTexture);it.__renderTarget=M;let mt=J?M.depthTexture.image[0]:M.depthTexture.image;(!it.__webglTexture||mt.width!==M.width||mt.height!==M.height)&&(mt.width=M.width,mt.height=M.height,M.depthTexture.needsUpdate=!0),J?St(M.depthTexture,0):Mt(M.depthTexture,0);let yt=it.__webglTexture,$=ye(M),j=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,_t=M.depthTexture.format===_i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===ui)pt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,j,yt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,_t,j,yt,0);else if(M.depthTexture.format===_i)pt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,j,yt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,_t,j,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ae(E){let M=n.get(E),G=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){let J=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){let it=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",it)};J.addEventListener("dispose",it),M.__depthDisposeCallback=it}M.__boundDepthTexture=J}if(E.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let J=0;J<6;J++)Kt(M.__webglFramebuffer[J],E,J);else E.texture.mipmaps.length>0?Kt(M.__webglFramebuffer[0],E,0):Kt(M.__webglFramebuffer,E,0);else if(G){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=i.createRenderbuffer(),we(M.__webglDepthbuffer[J],E,!1);else{let it=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=M.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,mt)}}else if(E.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),we(M.__webglDepthbuffer,E,!1);else{let it=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function be(E,M,G){let J=n.get(E);M!==void 0&&Se(J.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ae(E)}function Fe(E){let M=E.texture,G=n.get(E),J=n.get(M);E.addEventListener("dispose",D),I(E);let it=E.textures,mt=E.isWebGLCubeRenderTarget===!0,yt=it.length>1;if(yt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,a.memory.textures++),mt){G.__webglFramebuffer=[];for(let $=0;$<6;$++)if(M.mipmaps.length>0){G.__webglFramebuffer[$]=[];for(let j=0;j<M.mipmaps.length;j++)G.__webglFramebuffer[$][j]=i.createFramebuffer()}else G.__webglFramebuffer[$]=i.createFramebuffer()}else{if(M.mipmaps.length>0){G.__webglFramebuffer=[];for(let $=0;$<M.mipmaps.length;$++)G.__webglFramebuffer[$]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(yt)for(let $=0,j=it.length;$<j;$++){let _t=n.get(it[$]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&pt(E)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let $=0;$<it.length;$++){let j=it[$];G.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[$]);let _t=r.convert(j.format,j.colorSpace),L=r.convert(j.type),tt=b(j.internalFormat,_t,L,j.normalized,j.colorSpace,E.isXRRenderTarget===!0),K=ye(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,tt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,G.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),we(G.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ce(i.TEXTURE_CUBE_MAP,M);for(let $=0;$<6;$++)if(M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)Se(G.__webglFramebuffer[$][j],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else Se(G.__webglFramebuffer[$],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);w(M)?T(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(yt){for(let $=0,j=it.length;$<j;$++){let _t=it[$],L=n.get(_t),tt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(tt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,L.__webglTexture),ce(tt,_t),Se(G.__webglFramebuffer,E,_t,i.COLOR_ATTACHMENT0+$,tt,0),w(_t)&&T(tt)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,J.__webglTexture),ce($,M),M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)Se(G.__webglFramebuffer[j],E,M,i.COLOR_ATTACHMENT0,$,j);else Se(G.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,$,0);w(M)?T($):M.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}E.depthBuffer&&Ae(E)}function F(E){let M=E.textures;for(let G=0,J=M.length;G<J;G++){let it=M[G];if(w(it)&&it.mipmapsAutoUpdate===!0){let mt=A(E),yt=n.get(it).__webglTexture;e.bindTexture(mt,yt),T(mt),e.unbindTexture()}}}let Te=[];function he(E){if(E.samples>0){if(pt(E)===!1){let M=E.textures,G=E.width,J=E.height,it=i.COLOR_BUFFER_BIT,mt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(E),$=M.length>1;if($)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[_t]);let L=n.get(M[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,it,i.NEAREST),l===!0&&(Te.length=0,Te.push(i.COLOR_ATTACHMENT0+_t),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Te.push(mt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,yt.__webglColorRenderbuffer[_t]);let L=n.get(M[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,L,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let M=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ye(E){return Math.min(s.maxSamples,E.samples)}function pt(E){let M=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(E){let M=a.render.frame;u.get(E)!==M&&(u.set(E,M),E.update())}function kt(E,M){let G=E.colorSpace,J=E.format,it=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||G!==js&&G!==vi&&(ne.getTransfer(G)===me?(J!==zn||it!==yn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",G)),M}function zt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Bt,this.resetTextureUnits=Q,this.getTextureUnits=Y,this.setTextureUnits=dt,this.setTexture2D=Mt,this.setTexture2DArray=Ct,this.setTexture3D=Lt,this.setTextureCube=St,this.rebindTextures=be,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=pt,this.dispose=O}function ax(i,t){function e(n,s=vi){let r,a=ne.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===so)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ro)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$l)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ql)return i.BYTE;if(n===Yl)return i.SHORT;if(n===Ns)return i.UNSIGNED_SHORT;if(n===io)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===kn)return i.HALF_FLOAT;if(n===Jl)return i.ALPHA;if(n===Kl)return i.RGB;if(n===zn)return i.RGBA;if(n===ui)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===Ds)return i.RED;if(n===ao)return i.RED_INTEGER;if(n===Fi)return i.RG;if(n===oo)return i.RG_INTEGER;if(n===lo)return i.RGBA_INTEGER;if(n===Ir||n===Pr||n===Lr||n===Nr)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===co||n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===mo||n===go||n===xo||n===_o||n===Dr||n===vo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===po||n===mo)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===go)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xo)return r.COMPRESSED_R11_EAC;if(n===_o)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Dr)return r.COMPRESSED_RG11_EAC;if(n===vo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yo||n===Mo||n===So||n===bo||n===To||n===wo||n===Ao||n===Eo||n===Co||n===Ro||n===Io||n===Po||n===Lo||n===No)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===So)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===To)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ao)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Co)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ro)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Io)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Po)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===No)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Do||n===Uo||n===Fo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Do)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oo||n===Bo||n===Ur||n===ko)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new fr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new tn({vertexShader:ox,fragmentShader:lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ge(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tc=class extends Wn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,g=null,d=null,h=null,m=null,_=typeof XRWebGLBinding<"u",p=new bc,f={},v=e.getContextAttributes(),w=null,T=null,A=[],b=[],x=new jt,y=null,I=null,C=new dn;C.viewport=new Re;let U=new dn;U.viewport=new Re;let D=[C,U],V=new Qa,R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let Mt=A[nt];return Mt===void 0&&(Mt=new Ts,A[nt]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(nt){let Mt=A[nt];return Mt===void 0&&(Mt=new Ts,A[nt]=Mt),Mt.getGripSpace()},this.getHand=function(nt){let Mt=A[nt];return Mt===void 0&&(Mt=new Ts,A[nt]=Mt),Mt.getHandSpace()};function q(nt){let Mt=b.indexOf(nt.inputSource);if(Mt===-1)return;let Ct=A[Mt];Ct!==void 0&&(Ct.update(nt.inputSource,nt.frame,c||a),Ct.dispatchEvent({type:nt.type,data:nt.inputSource}))}function X(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ot);for(let nt=0;nt<A.length;nt++){let Mt=b[nt];Mt!==null&&(b[nt]=null,A[nt].disconnect(Mt))}R=null,O=null,p.reset();for(let nt in f)delete f[nt];if(t.setRenderTarget(w),h=null,d=null,g=null,s=null,T=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(x.width,x.height,!1),I!==null){let nt=I.camera;nt.fov=I.fov,nt.zoom=I.zoom,nt.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return g===null&&_&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ot),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Lt=null,St=null;v.depth&&(St=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=v.stencil?_i:ui,Lt=v.stencil?ji:Bn);let qt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};g=this.getBinding(),d=g.createProjectionLayer(qt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Tn(d.textureWidth,d.textureHeight,{format:zn,type:yn,depthTexture:new pi(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ct={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new Tn(h.framebufferWidth,h.framebufferHeight,{format:zn,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Bt.setContext(s),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ot(nt){for(let Mt=0;Mt<nt.removed.length;Mt++){let Ct=nt.removed[Mt],Lt=b.indexOf(Ct);Lt>=0&&(b[Lt]=null,A[Lt].disconnect(Ct))}for(let Mt=0;Mt<nt.added.length;Mt++){let Ct=nt.added[Mt],Lt=b.indexOf(Ct);if(Lt===-1){for(let qt=0;qt<A.length;qt++)if(qt>=b.length){b.push(Ct),Lt=qt;break}else if(b[qt]===null){b[qt]=Ct,Lt=qt;break}if(Lt===-1)break}let St=A[Lt];St&&St.connect(Ct)}}function Z(nt,Mt){Mt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(Mt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let Mt=nt.near,Ct=nt.far;p.texture!==null&&(p.depthNear>0&&(Mt=p.depthNear),p.depthFar>0&&(Ct=p.depthFar)),V.near=U.near=C.near=Mt,V.far=U.far=C.far=Ct,(R!==V.near||O!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),R=V.near,O=V.far),V.layers.mask=nt.layers.mask|6,C.layers.mask=V.layers.mask&-5,U.layers.mask=V.layers.mask&-3;let Lt=nt.parent,St=V.cameras;Z(V,Lt);for(let qt=0;qt<St.length;qt++)Z(St[qt],Lt);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&nt.isPerspectiveCamera&&(I={camera:nt,fov:nt.fov,zoom:nt.zoom}),Q(nt,V,Lt)};function Q(nt,Mt,Ct){Ct===null?nt.matrix.copy(Mt.matrixWorld):(nt.matrix.copy(Ct.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(Mt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(Mt.projectionMatrix),nt.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ss*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(nt){l=nt,d!==null&&(d.fixedFoveation=nt),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=nt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(nt){return f[nt]};let Y=null;function dt(nt,Mt){if(u=Mt.getViewerPose(c||a),m=Mt,u!==null){let Ct=u.views;h!==null&&(t.setRenderTargetFramebuffer(T,h.framebuffer),t.setRenderTarget(T));let Lt=!1;Ct.length!==V.cameras.length&&(V.cameras.length=0,Lt=!0);for(let Ut=0;Ut<Ct.length;Ut++){let ce=Ct[Ut],Yt=null;if(h!==null)Yt=h.getViewport(ce);else{let Ue=g.getViewSubImage(d,ce);Yt=Ue.viewport,Ut===0&&(t.setRenderTargetTextures(T,Ue.colorTexture,Ue.depthStencilTexture),t.setRenderTarget(T))}let $t=D[Ut];$t===void 0&&($t=new dn,$t.layers.enable(Ut),$t.viewport=new Re,D[Ut]=$t),$t.matrix.fromArray(ce.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(ce.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Ut===0&&(V.matrix.copy($t.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Lt===!0&&V.cameras.push($t)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){g=n.getBinding();let Ut=g.getDepthInformation(Ct[0]);Ut&&Ut.isValid&&Ut.texture&&p.init(Ut,s.renderState)}if(St&&St.includes("camera-access")&&_){t.state.unbindTexture(),g=n.getBinding();for(let Ut=0;Ut<Ct.length;Ut++){let ce=Ct[Ut].camera;if(ce){let Yt=f[ce];Yt||(Yt=new fr,f[ce]=Yt);let $t=g.getCameraImage(ce);Yt.sourceTexture=$t}}}}for(let Ct=0;Ct<A.length;Ct++){let Lt=b[Ct],St=A[Ct];Lt!==null&&St!==void 0&&St.update(Lt,Mt,c||a)}Y&&Y(nt,Mt),Mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Mt}),m=null}let Bt=new Iu;Bt.setAnimationLoop(dt),this.setAnimationLoop=function(nt){Y=nt},this.dispose=function(){}}},cx=new oe,zu=new Zt;zu.set(-1,0,0,0,1,0,0,0,1);function hx(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,ac(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,v,w,T){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),g(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&h(p,f,T)):f.isMeshMatcapMaterial?(r(p,f),m(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,v,w):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===en&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===en&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v=t.get(f),w=v.envMap,T=v.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(cx.makeRotationFromEuler(T)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(zu),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,v,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=w*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function g(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function h(p,f,v){p.ior.value=f.ior,f.diffuseRoughness>0&&(p.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=f.diffuseRoughnessMap,e(f.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===en&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){let v=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ux(i,t,e,n){let s={},r={};function a(v,w){let T=w.program;n.uniformBlockBinding(v,T,s[v.id])}function o(v,w){let T=s[v.id];T===void 0&&(m(v),T=l(v),s[v.id]=T,v.addEventListener("dispose",p));let A=w.program;n.updateUBOMapping(v,A);let b=t.render.frame;r[v.id]!==b&&(c(v),r[v.id]=b)}function l(v){let w=i.createBuffer(),T=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(v){let w=s[v.id],T=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let b=0,x=T.length;b<x;b++){let y=T[b];if(Array.isArray(y))for(let I=0,C=y.length;I<C;I++)u(y[I],b,I,A);else u(y,b,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,w,T,A){if(d(v,w,T,A)===!0){let b=v.__offset,x=v.value;if(Array.isArray(x)){let y=0;for(let I=0;I<x.length;I++){let C=x[I],U=_(C,!0);g(C,v.__data,y),y+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else g(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function g(v,w,T){typeof v=="number"||typeof v=="boolean"?w[T]=v:v.isMatrix3?(w[T]=v.elements[0],w[T+1]=v.elements[1],w[T+2]=v.elements[2],w[T+3]=0,w[T+4]=v.elements[3],w[T+5]=v.elements[4],w[T+6]=v.elements[5],w[T+7]=0,w[T+8]=v.elements[6],w[T+9]=v.elements[7],w[T+10]=v.elements[8],w[T+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-T),T):v.toArray(w,T)}function d(v,w,T,A){let b=v.value,x=w+"_"+T;if(Array.isArray(b)){A[x]===void 0&&(A[x]=[]);let y=A[x],I=!1;for(let C=0;C<b.length;C++)h(b[C],y,C)===!0&&(I=!0);return I}return h(b,A,x)}function h(v,w,T){if(w[T]===void 0)return typeof v=="number"||typeof v=="boolean"?w[T]=v:ArrayBuffer.isView(v)?w[T]=v.slice():w[T]=v.clone(),!0;{let A=w[T];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return w[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function m(v){let w=v.uniforms,T=0,A=16;for(let x=0,y=w.length;x<y;x++){let I=Array.isArray(w[x])?w[x]:[w[x]];for(let C=0,U=I.length;C<U;C++){let D=I[C],V=Array.isArray(D.value)?D.value:[D.value],R=Array.isArray(w[x])||Array.isArray(D.value),O=T;for(let X=0,ot=V.length;X<ot;X++){let Z=V[X],Q=_(Z,R),Y=T%A,dt=Y%Q.boundary,Bt=Y+dt;T+=dt,Bt!==0&&A-Bt<Q.storage&&(T+=A-Bt),X===0&&(O=T),T+=Q.storage}let q=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new q((T-O)/Float32Array.BYTES_PER_ELEMENT),D.__offset=O}}let b=T%A;return b>0&&(T+=A-b),v.__size=T,v.__cache={},this}function _(v,w){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=16,T.storage=48):v.isMatrix4?(T.boundary=16,T.storage=64):v.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function p(v){let w=v.target;w.removeEventListener("dispose",p),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function f(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:f}}var dx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kn=null;function fx(){return Kn===null&&(Kn=new $i(dx,16,16,Fi,kn),Kn.name="DFG_LUT",Kn.minFilter=fn,Kn.magFilter=fn,Kn.wrapS=Hn,Kn.wrapT=Hn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}var Wo=class{constructor(t={}){let{canvas:e=jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:d=!1,outputBufferType:h=yn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=h,p=new Set([lo,oo,ao]),f=new Set([yn,Bn,Ns,ji,so,ro]),v=new Uint32Array(4),w=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},A=null,b=null,x=[],y=[],I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,U=!1,D=null,V=null,R=null,O=null;this._outputColorSpace=ln;let q=0,X=0,ot=null,Z=-1,Q=null,Y=new Re,dt=new Re,Bt=null,nt=new Vt(0),Mt=0,Ct=e.width,Lt=e.height,St=1,qt=null,_e=null,Ut=new Re(0,0,Ct,Lt),ce=new Re(0,0,Ct,Lt),Yt=!1,$t=new Ii,Ue=new Fa,ve=!1,re=!1,Se=new oe,we=new k,Kt=new Re,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},be=!1;function Fe(){return ot===null?St:1}let F=n;function Te(S,N){return e.getContext(S,N)}let he,ye,pt,Ie,kt,zt,E,M,G,J,it,mt,yt,$,j,_t,L,tt,K,vt,at,lt,Rt;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),F===null){let N="webgl2";if(F=Te(N,S),F===null)throw Te(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(S){throw e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Xt("WebGLRenderer: "+S.message),S}function Qt(){he=new T0(F),he.init(),at=new ax(F,he),ye=new f0(F,he,t,at),pt=new sx(F,he),ye.reversedDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),V=F.createFramebuffer(),R=F.createFramebuffer(),O=F.createFramebuffer(),Ie=new E0(F),kt=new Wg,zt=new rx(F,he,pt,kt,ye,at,Ie),E=new b0(C),M=new Rf(F),lt=new u0(F,M),G=new w0(F,M,Ie,lt),J=new R0(F,G,M,lt,Ie),tt=new C0(F,ye,zt),j=new p0(kt),it=new Hg(C,E,he,ye,lt,j),mt=new hx(C,kt),yt=new qg,$=new Qg(he),L=new h0(C,E,pt,J,m,l),_t=new ix(C,J,ye),Rt=new ux(F,Ie,ye,pt),K=new d0(F,he,Ie),vt=new A0(F,he,Ie),Ie.programs=it.programs,C.capabilities=ye,C.extensions=he,C.properties=kt,C.renderLists=yt,C.shadowMap=_t,C.state=pt,C.info=Ie}_!==yn&&(I=new P0(_,e.width,e.height,o,s,r));let ut=new Tc(C,F);this.xr=ut,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=he.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=he.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(S){S!==void 0&&(St=S,this.setSize(Ct,Lt,!1))},this.getSize=function(S){return S.set(Ct,Lt)},this.setSize=function(S,N,W=!0){if(ut.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ct=S,Lt=N,e.width=Math.floor(S*St),e.height=Math.floor(N*St),W===!0&&(e.style.width=S+"px",e.style.height=N+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Ct*St,Lt*St).floor()},this.setDrawingBufferSize=function(S,N,W){Ct=S,Lt=N,St=W,e.width=Math.floor(S*W),e.height=Math.floor(N*W),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(_===yn){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(Y)},this.getViewport=function(S){return S.copy(Ut)},this.setViewport=function(S,N,W,B){S.isVector4?Ut.set(S.x,S.y,S.z,S.w):Ut.set(S,N,W,B),pt.viewport(Y.copy(Ut).multiplyScalar(Fe()).round())},this.getScissor=function(S){return S.copy(ce)},this.setScissor=function(S,N,W,B){S.isVector4?ce.set(S.x,S.y,S.z,S.w):ce.set(S,N,W,B),pt.scissor(dt.copy(ce).multiplyScalar(Fe()).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(S){pt.setScissorTest(Yt=S)},this.setOpaqueSort=function(S){qt=S},this.setTransparentSort=function(S){_e=S},this.getClearColor=function(S){return S.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,W=!0){let B=0;if(S){let z=!1;if(ot!==null){let ht=ot.texture.format;z=p.has(ht)}if(z){let ht=ot.texture.type,wt=f.has(ht),ft=L.getClearColor(),At=L.getClearAlpha(),Dt=ft.r,Wt=ft.g,ee=ft.b;wt?(v[0]=Dt,v[1]=Wt,v[2]=ee,v[3]=At,F.clearBufferuiv(F.COLOR,0,v)):(w[0]=Dt,w[1]=Wt,w[2]=ee,w[3]=At,F.clearBufferiv(F.COLOR,0,w))}else B|=F.COLOR_BUFFER_BIT}N&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),D=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),L.dispose(),yt.dispose(),$.dispose(),zt.dispose(),kt.dispose(),E.dispose(),J.dispose(),G.dispose(),lt.dispose(),Rt.dispose(),it.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Ot),ut.removeEventListener("sessionend",Nt),It.stop()};function Ft(S){S.preventDefault(),nc("WebGLRenderer: Context Lost."),U=!0}function Ht(){nc("WebGLRenderer: Context Restored."),U=!1;let S=Ie.autoReset,N=_t.enabled,W=_t.autoUpdate,B=_t.needsUpdate,z=_t.type;Qt(),Ie.autoReset=S,_t.enabled=N,_t.autoUpdate=W,_t.needsUpdate=B,_t.type=z}function Tt(S){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function P(S){let N=S.target;N.removeEventListener("dispose",P),et(N)}function et(S){H(S),kt.remove(S)}function H(S){let N=kt.get(S).programs;N!==void 0&&(N.forEach(function(W){it.releaseProgram(W)}),S.isShaderMaterial&&it.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,W,B,z,ht){N===null&&(N=Ae);let wt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ft=Be(S,N,W,B,z);pt.setMaterial(B,wt);let At=W.index,Dt=1;if(B.wireframe===!0){if(At=G.getWireframeAttribute(W),At===void 0)return;Dt=2}let Wt=W.drawRange,ee=W.attributes.position,xt=Wt.start*Dt,Jt=(Wt.start+Wt.count)*Dt;ht!==null&&(xt=Math.max(xt,ht.start*Dt),Jt=Math.min(Jt,(ht.start+ht.count)*Dt)),At!==null?(xt=Math.max(xt,0),Jt=Math.min(Jt,At.count)):ee!=null&&(xt=Math.max(xt,0),Jt=Math.min(Jt,ee.count));let Ce=Jt-xt;if(Ce<0||Ce===1/0)return;lt.setup(z,B,ft,W,At);let xe,Me=K;if(At!==null&&(xe=M.get(At),Me=vt,Me.setIndex(xe)),z.isMesh)B.wireframe===!0?(pt.setLineWidth(B.wireframeLinewidth*Fe()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(z.isLine){let sn=B.linewidth;sn===void 0&&(sn=1),pt.setLineWidth(sn*Fe()),z.isLineSegments?Me.setMode(F.LINES):z.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else z.isPoints?Me.setMode(F.POINTS):z.isSprite&&Me.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Me.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let sn=z._multiDrawStarts,Pt=z._multiDrawCounts,un=z._multiDrawCount,de=At?M.get(At).bytesPerElement:1,Gi=kt.get(B).currentProgram.getUniforms();for(let rn=0;rn<un;rn++)Gi.setValue(F,"_gl_DrawID",rn),Me.render(sn[rn]/de,Pt[rn])}else if(z.isInstancedMesh)Me.renderInstances(xt,Ce,z.count);else if(W.isInstancedBufferGeometry){let sn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pt=Math.min(W.instanceCount,sn);Me.renderInstances(xt,Ce,Pt)}else Me.render(xt,Ce)};function st(S,N,W,B){D!==null&&S.isNodeMaterial&&D.setObject(B,S),ve===!0&&j.setState(S,W,!1),S.transparent===!0&&S.side===vn&&S.forceSinglePass===!1?(S.side=en,S.needsUpdate=!0,xn(S,N,B),S.side=Di,S.needsUpdate=!0,xn(S,N,B),S.side=vn):xn(S,N,B)}this.compile=function(S,N,W=null){W===null&&(W=S),D!==null&&D.renderStart(S,N,W),b=$.get(W),b.init(N),y.push(b),W.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),S!==W&&S.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),re=this.localClippingEnabled,ve=j.init(this.clippingPlanes,re),ve===!0&&j.setGlobalState(this.clippingPlanes,N),D!==null&&_t.render(b.state.shadowsArray,W,N);let B=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ht=z.material;if(ht)if(Array.isArray(ht))for(let wt=0;wt<ht.length;wt++){let ft=ht[wt];st(ft,W,N,z),B.add(ft)}else st(ht,W,N,z),B.add(ht)}),b=y.pop(),D!==null&&D.renderEnd(),B},this.compileAsync=function(S,N,W=null){let B=this.compile(S,N,W);return new Promise(z=>{function ht(){if(B.forEach(function(wt){let At=kt.get(wt).currentProgram;(At===void 0||At.isReady())&&B.delete(wt)}),B.size===0){z(S);return}setTimeout(ht,10)}he.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let bt=null;function gt(S){bt&&bt(S)}function Ot(){It.stop()}function Nt(){It.start()}let It=new Iu;It.setAnimationLoop(gt),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(S){bt=S,ut.setAnimationLoop(S),S===null?It.stop():It.start()},ut.addEventListener("sessionstart",Ot),ut.addEventListener("sessionend",Nt),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;D!==null&&D.renderStart(S,N);let W=ut.enabled===!0&&ut.isPresenting===!0,B=I!==null&&(ot===null||W)&&I.begin(C,ot);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(N),N=ut.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,N,ot),b=$.get(S,y.length),b.init(N),b.state.textureUnits=zt.getTextureUnits(),y.push(b),Se.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?Ue.setFromArrayCamera(N):$t.setFromProjectionMatrix(Se,Rn,N.reversedDepth),re=this.localClippingEnabled,ve=j.init(this.clippingPlanes,re),A=yt.get(S,x.length),A.init(),x.push(A),this.info.render.frame++,ut.enabled===!0&&ut.isPresenting===!0){let wt=C.xr.getDepthSensingMesh();wt!==null&&pe(wt,N,-1/0,C.sortObjects)}pe(S,N,0,C.sortObjects),A.finish(),D!==null&&D.updateLights(b.state.lightsArray),C.sortObjects===!0&&A.sort(qt,_e),be=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,be&&L.addToRenderList(A,S),this.info.autoReset===!0&&this.info.reset(),ve===!0&&j.beginShadows();let z=b.state.shadowsArray;if(_t.render(z,S,N),ve===!0&&j.endShadows(),(B&&I.hasRenderPass())===!1){let wt=A.opaque,ft=A.transmissive;if(b.setupLights(),N.isArrayCamera){let At=N.cameras;if(ft.length>0)for(let Dt=0,Wt=At.length;Dt<Wt;Dt++){let ee=At[Dt];rt(wt,ft,S,ee)}be&&L.render(S);for(let Dt=0,Wt=At.length;Dt<Wt;Dt++){let ee=At[Dt];ct(A,S,ee,ee.viewport)}}else ft.length>0&&rt(wt,ft,S,N),be&&L.render(S),ct(A,S,N)}ot!==null&&X===0&&(zt.updateMultisampleRenderTarget(ot),zt.updateRenderTargetMipmap(ot)),B&&I.end(C),S.isScene===!0&&S.onAfterRender(C,S,N),lt.resetDefaultState(),Z=-1,Q=null,y.pop(),y.length>0?(b=y[y.length-1],zt.setTextureUnits(b.state.textureUnits),ve===!0&&j.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,D!==null&&D.renderEnd()};function pe(S,N,W,B){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){let wt=N.isArrayCamera?Ue:$t;if(!S.frustumCulled||S.intersectsFrustum(wt)){B&&Kt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Se);let ft=J.update(S),At=S.material;At.visible&&A.push(S,ft,At,W,Kt.z,null,N)}}else if(S.isMesh||S.isLine||S.isPoints){let wt=N.isArrayCamera?Ue:$t;if(!S.frustumCulled||S.intersectsFrustum(wt)){let ft=J.update(S),At=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Kt.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Kt.copy(ft.boundingSphere.center)),Kt.applyMatrix4(S.matrixWorld).applyMatrix4(Se)),Array.isArray(At)){let Dt=ft.groups;for(let Wt=0,ee=Dt.length;Wt<ee;Wt++){let xt=Dt[Wt],Jt=At[xt.materialIndex];Jt&&Jt.visible&&A.push(S,ft,Jt,W,Kt.z,xt,N)}}else At.visible&&A.push(S,ft,At,W,Kt.z,null,N)}}}let ht=S.children;for(let wt=0,ft=ht.length;wt<ft;wt++)pe(ht[wt],N,W,B)}function ct(S,N,W,B){let{opaque:z,transmissive:ht,transparent:wt}=S;b.setupLightsView(W),ve===!0&&j.setGlobalState(C.clippingPlanes,W),B&&pt.viewport(Y.copy(B)),z.length>0&&ge(z,N,W),ht.length>0&&ge(ht,N,W),wt.length>0&&ge(wt,N,W),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function rt(S,N,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[B.id]===void 0){let xt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[B.id]=new Tn(1,1,{generateMipmaps:!0,type:xt?kn:yn,minFilter:xi,samples:Math.max(4,ye.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let ht=b.state.transmissionRenderTarget[B.id],wt=B.viewport||Y;ht.setSize(wt.z*C.transmissionResolutionScale,wt.w*C.transmissionResolutionScale);let ft=C.getRenderTarget(),At=C.getActiveCubeFace(),Dt=C.getActiveMipmapLevel();C.setRenderTarget(ht),C.getClearColor(nt),Mt=C.getClearAlpha(),Mt<1&&C.setClearColor(16777215,.5),C.clear(),be&&L.render(W);let Wt=C.toneMapping;C.toneMapping=Jn;let ee=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),b.setupLightsView(B),ve===!0&&j.setGlobalState(C.clippingPlanes,B),ge(S,W,B),zt.updateMultisampleRenderTarget(ht),zt.updateRenderTargetMipmap(ht),he.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Jt=0,Ce=N.length;Jt<Ce;Jt++){let xe=N[Jt],{object:Me,geometry:sn,material:Pt,group:un}=xe;if(Pt.side===vn&&Me.layers.test(B.layers)){let de=Pt.side;Pt.side=en,Pt.needsUpdate=!0,Le(Me,W,B,sn,Pt,un),Pt.side=de,Pt.needsUpdate=!0,xt=!0}}xt===!0&&(zt.updateMultisampleRenderTarget(ht),zt.updateRenderTargetMipmap(ht))}C.setRenderTarget(ft,At,Dt),C.setClearColor(nt,Mt),ee!==void 0&&(B.viewport=ee),C.toneMapping=Wt}function ge(S,N,W){let B=N.isScene===!0?N.overrideMaterial:null;for(let z=0,ht=S.length;z<ht;z++){let wt=S[z],{object:ft,geometry:At,group:Dt}=wt,Wt=wt.material;Wt.allowOverride===!0&&B!==null&&(Wt=B),ft.layers.test(W.layers)&&Le(ft,N,W,At,Wt,Dt)}}function Le(S,N,W,B,z,ht){D!==null&&z.isNodeMaterial&&D.setObject(S,z),S.onBeforeRender(C,N,W,B,z,ht),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(C,N,W,B,S,ht),z.transparent===!0&&z.side===vn&&z.forceSinglePass===!1?(z.side=en,z.needsUpdate=!0,C.renderBufferDirect(W,N,B,z,S,ht),z.side=Di,z.needsUpdate=!0,C.renderBufferDirect(W,N,B,z,S,ht),z.side=vn):C.renderBufferDirect(W,N,B,z,S,ht),S.onAfterRender(C,N,W,B,z,ht)}function $e(S){let N=0;for(let W of S)W.texture!==null&&N++;return N}function xn(S,N,W){N.isScene!==!0&&(N=Ae);let B=kt.get(S),z=b.state.lights,ht=b.state.shadowsArray,wt=z.state.version,ft=it.getParameters(S,z.state,ht,N,W,b.state.lightProbeGridArray),At=it.getProgramCacheKey(ft),Dt=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;let Wt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=E.get(S.envMap||B.environment,Wt),B.envMapRotation=B.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Dt===void 0&&(S.addEventListener("dispose",P),Dt=new Map,B.programs=Dt,B.programVariants=new Map);let ee=Dt.get(At);if(ee!==void 0){if(B.currentProgram===ee&&B.lightsStateVersion===wt)return Oe(S,ft),ee}else ft.uniforms=it.getUniforms(S),D!==null&&S.isNodeMaterial&&D.build(S,W,ft),S.onBeforeCompile(ft,C),ee=it.acquireProgram(ft,At),Dt.set(At,ee),B.uniforms=ft.uniforms;let xt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(xt.clippingPlanes=j.uniform),Oe(S,ft),B.needsLights=_n(S),B.lightsStateVersion=wt,B.needsLights&&(xt.ambientLightColor.value=z.state.ambient,xt.lightProbe.value=z.state.probe,xt.sunLights.value=z.state.sun,xt.sunLightShadows.value=z.state.sunShadow,xt.directionalLights.value=z.state.directional,xt.directionalLightShadows.value=z.state.directionalShadow,xt.spotLights.value=z.state.spot,xt.spotLightShadows.value=z.state.spotShadow,xt.rectAreaLights.value=z.state.rectArea,xt.ltc_1.value=z.state.rectAreaLTC1,xt.ltc_2.value=z.state.rectAreaLTC2,xt.pointLights.value=z.state.point,xt.pointLightShadows.value=z.state.pointShadow,xt.hemisphereLights.value=z.state.hemi,xt.sunShadowMatrix.value=z.state.sunShadowMatrix,xt.sunShadowCascade.value=z.state.sunShadowCascade,xt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,xt.spotLightMatrix.value=z.state.spotLightMatrix,xt.spotLightMap.value=z.state.spotLightMap,xt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.numLightProbeGrids=$e(b.state.lightProbeGridArray),B.currentProgram=ee,B.uniformsList=null,ee}function En(S,N,W,B,z){let ht=kt.get(S),wt=ht.currentProgram.id+","+B+","+z,ft=ht.programVariants.get(wt);return ft===void 0?(ft=xn(S,N,W),ht.programVariants.set(wt,ft)):(ht.currentProgram=ft,ht.uniformsList=null,ht.outputColorSpace=B,ht.toneMapping=z),ft}function De(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=Fs.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Oe(S,N){let W=kt.get(S);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Be(S,N,W,B,z){N.isScene!==!0&&(N=Ae),zt.resetTextureUnits();let ht=N.fog,wt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,ft=ot===null?C.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ne.workingColorSpace,At=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Dt=E.get(B.envMap||wt,At),Wt=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ee=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),xt=!!W.morphAttributes.position,Jt=!!W.morphAttributes.normal,Ce=!!W.morphAttributes.color,xe=Jn;B.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(xe=C.toneMapping);let Me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,sn=Me!==void 0?Me.length:0,Pt=kt.get(B),un=b.state.lights;if(ve===!0&&(re===!0||S!==Q)){let Pe=S===Q&&B.id===Z;j.setState(B,S,Pe)}let de=!1,Gi=!1;B.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==un.state.version||z.isBatchedMesh&&Pt.batching===!1||!z.isBatchedMesh&&Pt.batching===!0||z.isBatchedMesh&&Pt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Pt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Pt.instancing===!1||!z.isInstancedMesh&&Pt.instancing===!0||z.isSkinnedMesh&&Pt.skinning===!1||!z.isSkinnedMesh&&Pt.skinning===!0||z.isInstancedMesh&&Pt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pt.instancingMorph===!1&&z.morphTexture!==null||Pt.envMap!==Dt||B.fog===!0&&Pt.fog!==ht||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==j.numPlanes||Pt.numIntersection!==j.numIntersection)||Pt.vertexAlphas!==Wt||Pt.vertexTangents!==ee||Pt.morphTargets!==xt||Pt.morphNormals!==Jt||Pt.morphColors!==Ce||Pt.morphTargetsCount!==sn||Pt.numLightProbeGrids!==$e(b.state.lightProbeGridArray)?de=!0:(Pt.outputColorSpace!==ft||Pt.toneMapping!==xe)&&(Gi=!0):(de=!0,Pt.__version=B.version);let rn=Pt.currentProgram;(de===!0||Gi===!0)&&(rn=Gi===!0?En(B,N,z,ft,xe):xn(B,N,z),D&&B.isNodeMaterial&&D.onUpdateProgram(B,rn,Pt));let Kr=!1,bi=!1,Vi=!1,ae=rn.getUniforms(),Qe=Pt.uniforms;if(pt.useProgram(rn.program)&&(Kr=!0,bi=!0,Vi=!0),B.id!==Z&&(Z=B.id,bi=!0),Kr||Q!==S){pt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ae.setValue(F,"projectionMatrix",S.projectionMatrix),ae.setValue(F,"viewMatrix",S.matrixWorldInverse);let Ze=ae.map.cameraPosition;Ze!==void 0&&Ze.setValue(F,we.setFromMatrixPosition(S.matrixWorld)),ye.logarithmicDepthBuffer&&ae.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ae.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,bi=!0,Vi=!0)}if(Pt.needsLights&&(un.state.sunShadowMap.length>0&&ae.setValue(F,"sunShadowMap",un.state.sunShadowMap,zt),un.state.directionalShadowMap.length>0&&ae.setValue(F,"directionalShadowMap",un.state.directionalShadowMap,zt),un.state.spotShadowMap.length>0&&ae.setValue(F,"spotShadowMap",un.state.spotShadowMap,zt),un.state.pointShadowMap.length>0&&ae.setValue(F,"pointShadowMap",un.state.pointShadowMap,zt)),z.isSkinnedMesh){ae.setOptional(F,z,"bindMatrix"),ae.setOptional(F,z,"bindMatrixInverse");let Pe=z.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),ae.setValue(F,"boneTexture",Pe.boneTexture,zt))}z.isBatchedMesh&&(ae.setOptional(F,z,"batchingTexture"),ae.setValue(F,"batchingTexture",z._matricesTexture,zt),ae.setOptional(F,z,"batchingIdTexture"),ae.setValue(F,"batchingIdTexture",z._indirectTexture,zt),ae.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&ae.setValue(F,"batchingColorTexture",z._colorsTexture,zt));let Nn=W.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&tt.update(z,W,rn),(bi||Pt.receiveShadow!==z.receiveShadow)&&(Pt.receiveShadow=z.receiveShadow,ae.setValue(F,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(Qe.envMapIntensity.value=N.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=fx()),bi){if(ae.setValue(F,"toneMappingExposure",C.toneMappingExposure),Pt.needsLights&&Ke(Qe,Vi),ht&&B.fog===!0&&mt.refreshFogUniforms(Qe,ht),mt.refreshMaterialUniforms(Qe,B,St,Lt,b.state.transmissionRenderTarget[S.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){let Pe=T,Ze=0;for(let si of b.state.lightProbeGridArray)si.texture!==null&&(Pe.textures[Ze]=si.texture,Pe.min[Ze]=si.boundingBox.min,Pe.max[Ze]=si.boundingBox.max,Pe.resolution[Ze]=si.resolution,Ze++);for(let si in Pe)Pe[si].length=Ze;Qe.probesSH.value=Pe.textures,Qe.probesMin.value=Pe.min,Qe.probesMax.value=Pe.max,Qe.probesResolution.value=Pe.resolution}Fs.upload(F,De(Pt),Qe,zt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Fs.upload(F,De(Pt),Qe,zt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ae.setValue(F,"center",z.center),ae.setValue(F,"modelViewMatrix",z.modelViewMatrix),ae.setValue(F,"normalMatrix",z.normalMatrix),ae.setValue(F,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let Pe=B.uniformsGroups;for(let Ze=0,si=Pe.length;Ze<si;Ze++){let Xc=Pe[Ze];Rt.update(Xc,rn),Rt.bind(Xc,rn)}}return rn}function Ke(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function _n(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(S,N,W){let B=kt.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),kt.get(S.texture).__webglTexture=N,kt.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let W=kt.get(S);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,W=0){ot=S,q=N,X=W;let B=null,z=!1,ht=!1;if(S){let ft=kt.get(S);if(ft.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(F.FRAMEBUFFER,ft.__webglFramebuffer),Y.copy(S.viewport),dt.copy(S.scissor),Bt=S.scissorTest,pt.viewport(Y),pt.scissor(dt),pt.setScissorTest(Bt),Z=-1;return}else if(ft.__webglFramebuffer===void 0)zt.setupRenderTarget(S);else if(ft.__hasExternalTextures)zt.rebindTextures(S,kt.get(S.texture).__webglTexture,kt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Wt=S.depthTexture;if(ft.__boundDepthTexture!==Wt){if(Wt!==null&&kt.has(Wt)&&(S.width!==Wt.image.width||S.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(S)}}let At=S.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ht=!0);let Dt=kt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Dt[N])?B=Dt[N][W]:B=Dt[N],z=!0):S.samples>0&&zt.useMultisampledRTT(S)===!1?B=kt.get(S).__webglMultisampledFramebuffer:Array.isArray(Dt)?B=Dt[W]:B=Dt,Y.copy(S.viewport),dt.copy(S.scissor),Bt=S.scissorTest}else Y.copy(Ut).multiplyScalar(St).floor(),dt.copy(ce).multiplyScalar(St).floor(),Bt=Yt;if(W!==0&&(B=V),pt.bindFramebuffer(F.FRAMEBUFFER,B)&&pt.drawBuffers(S,B),pt.viewport(Y),pt.scissor(dt),pt.setScissorTest(Bt),z){let ft=kt.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft.__webglTexture,W)}else if(ht){let ft=N;for(let At=0;At<S.textures.length;At++){let Dt=kt.get(S.textures[At]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+At,Dt.__webglTexture,W,ft)}}else if(S!==null&&W!==0){let ft=kt.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ft.__webglTexture,W)}Z=-1};function ii(S){let N=kt.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=ye.textureFormatReadable(S.format),N.__typeReadable=ye.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,W,B,z,ht,wt,ft=0){if(!(S&&S.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=kt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt],Array.isArray(At)&&(At=At[0])),At){pt.bindFramebuffer(F.FRAMEBUFFER,At);try{let Dt=S.textures[ft],Wt=Dt.format,ee=Dt.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);let xt=ii(Dt);if(xt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-B&&W>=0&&W<=S.height-z&&F.readPixels(N,W,B,z,at.convert(Wt),at.convert(ee),ht)}finally{let Dt=ot!==null?kt.get(ot).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(S,N,W,B,z,ht,wt,ft=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=kt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt],Array.isArray(At)&&(At=At[0])),At)if(N>=0&&N<=S.width-B&&W>=0&&W<=S.height-z){pt.bindFramebuffer(F.FRAMEBUFFER,At);let Dt=S.textures[ft],Wt=Dt.format,ee=Dt.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);let xt=ii(Dt);if(xt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Jt),F.bufferData(F.PIXEL_PACK_BUFFER,ht.byteLength,F.STREAM_READ),F.readPixels(N,W,B,z,at.convert(Wt),at.convert(ee),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ce=ot!==null?kt.get(ot).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,Ce);let xe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await eu(F,xe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Jt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ht),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Jt),F.deleteSync(xe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,W=0){let B=Math.pow(2,-W),z=Math.floor(S.image.width*B),ht=Math.floor(S.image.height*B),wt=N!==null?N.x:0,ft=N!==null?N.y:0;zt.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,wt,ft,z,ht),pt.unbindTexture()},this.copyTextureToTexture=function(S,N,W=null,B=null,z=0,ht=0){let wt,ft,At,Dt,Wt,ee,xt,Jt,Ce,xe=S.isCompressedTexture?S.mipmaps[ht]:S.image;if(W!==null)wt=W.max.x-W.min.x,ft=W.max.y-W.min.y,At=W.isBox3?W.max.z-W.min.z:1,Dt=W.min.x,Wt=W.min.y,ee=W.isBox3?W.min.z:0;else{let ae=Math.pow(2,-z);wt=Math.floor(xe.width*ae),ft=Math.floor(xe.height*ae),S.isDataArrayTexture?At=xe.depth:S.isData3DTexture?At=Math.floor(xe.depth*ae):At=1,Dt=0,Wt=0,ee=0}B!==null?(xt=B.x,Jt=B.y,Ce=B.z):(xt=0,Jt=0,Ce=0);let Me=at.convert(N.format),sn=at.convert(N.type),Pt;N.isData3DTexture?(zt.setTexture3D(N,0),Pt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(zt.setTexture2DArray(N,0),Pt=F.TEXTURE_2D_ARRAY):(zt.setTexture2D(N,0),Pt=F.TEXTURE_2D),pt.activeTexture(F.TEXTURE0),pt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),pt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),pt.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let un=pt.getParameter(F.UNPACK_ROW_LENGTH),de=pt.getParameter(F.UNPACK_IMAGE_HEIGHT),Gi=pt.getParameter(F.UNPACK_SKIP_PIXELS),rn=pt.getParameter(F.UNPACK_SKIP_ROWS),Kr=pt.getParameter(F.UNPACK_SKIP_IMAGES);pt.pixelStorei(F.UNPACK_ROW_LENGTH,xe.width),pt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe.height),pt.pixelStorei(F.UNPACK_SKIP_PIXELS,Dt),pt.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),pt.pixelStorei(F.UNPACK_SKIP_IMAGES,ee);let bi=S.isDataArrayTexture||S.isData3DTexture,Vi=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let ae=kt.get(S),Qe=kt.get(N),Nn=kt.get(ae.__renderTarget),Pe=kt.get(Qe.__renderTarget);pt.bindFramebuffer(F.READ_FRAMEBUFFER,Nn.__webglFramebuffer),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ze=0;Ze<At;Ze++)bi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(S).__webglTexture,z,ee+Ze),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(N).__webglTexture,ht,Ce+Ze)),F.blitFramebuffer(Dt,Wt,Dt+wt,Wt+ft,xt,Jt,xt+wt,Jt+ft,F.DEPTH_BUFFER_BIT,F.NEAREST);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||kt.has(S)){let ae=kt.get(S),Qe=kt.get(N);pt.bindFramebuffer(F.READ_FRAMEBUFFER,R),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let Nn=0;Nn<At;Nn++)bi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ae.__webglTexture,z,ee+Nn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ae.__webglTexture,z),Vi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qe.__webglTexture,ht,Ce+Nn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qe.__webglTexture,ht),z!==0?F.blitFramebuffer(Dt,Wt,Dt+wt,Wt+ft,xt,Jt,xt+wt,Jt+ft,F.COLOR_BUFFER_BIT,F.NEAREST):Vi?F.copyTexSubImage3D(Pt,ht,xt,Jt,Ce+Nn,Dt,Wt,wt,ft):F.copyTexSubImage2D(Pt,ht,xt,Jt,Dt,Wt,wt,ft);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Vi?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Pt,ht,xt,Jt,Ce,wt,ft,At,Me,sn,xe.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Pt,ht,xt,Jt,Ce,wt,ft,At,Me,xe.data):F.texSubImage3D(Pt,ht,xt,Jt,Ce,wt,ft,At,Me,sn,xe):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ht,xt,Jt,wt,ft,Me,sn,xe.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ht,xt,Jt,xe.width,xe.height,Me,xe.data):F.texSubImage2D(F.TEXTURE_2D,ht,xt,Jt,wt,ft,Me,sn,xe);pt.pixelStorei(F.UNPACK_ROW_LENGTH,un),pt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,de),pt.pixelStorei(F.UNPACK_SKIP_PIXELS,Gi),pt.pixelStorei(F.UNPACK_SKIP_ROWS,rn),pt.pixelStorei(F.UNPACK_SKIP_IMAGES,Kr),ht===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&F.generateMipmap(Pt),pt.unbindTexture()},this.initRenderTarget=function(S){kt.get(S).__webglFramebuffer===void 0&&zt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?zt.setTextureCube(S,0):S.isData3DTexture?zt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?zt.setTexture2DArray(S,0):zt.setTexture2D(S,0),pt.unbindTexture()},this.resetState=function(){q=0,X=0,ot=null,pt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var Ne={alive:1,shield:2,speed:4,giant:8,rage:16,dash:32,dance:64,air:128,crown:256,cmd:512,low:1024,bot:2048},Gu=[16767416,15843471,14262374,11037509,8014380,16769999],Mn=Math.PI*2;function Vu(i,t={}){let e={antialias:!!t.aa,alpha:!1,depth:!0,stencil:!1,powerPreference:"default",preserveDrawingBuffer:!!t.preserve,failIfMajorPerformanceCaveat:!1},n=new Wo({canvas:i,...e});if(!n.getContext())throw new Error("no webgl");n.outputColorSpace=ln,n.toneMapping=Cr,n.toneMappingExposure=1.05,n.shadowMap.enabled=!1,n.info.autoReset=!0;let s=new rr;s.background=new Vt(1707827),s.fog=new sr(3809116,45,120);let r=new dn(46,9/16,.5,400),a=[],o=P=>(a.push(P),P);s.add(new Sr(13219583,4860474,1.35)),s.add(new Ar(6969994,.35));let l=new wr(16769732,2.1);l.position.set(-12,22,10),s.add(l);let c=o(new $i(new Uint8Array([90,170,255]),3,1,Ds));c.minFilter=c.magFilter=ze,c.needsUpdate=!0;let u=(P,et={})=>o(new yr({color:P,gradientMap:c,...et}));function g(P,et,{mip:H=!0}={}){let st=document.createElement("canvas");st.width=st.height=P,et(st.getContext("2d"),P);let bt=o(new ur(st));return bt.colorSpace=ln,bt.generateMipmaps=H,H||(bt.minFilter=1006),bt.anisotropy=4,bt}let d=g(t.floorSize||512,(P,et)=>{let H=et/2,st=P.createRadialGradient(H,H,0,H,H,H);st.addColorStop(0,"#5b4b8a"),st.addColorStop(.7,"#3d3170"),st.addColorStop(1,"#2a2050"),P.fillStyle=st,P.fillRect(0,0,et,et);let bt=9;for(let Ot=1;Ot<=bt;Ot++){let Nt=H*(Ot-1)/bt,It=H*Ot/bt,pe=Math.max(6,Math.round(Ot*7));for(let ct=0;ct<pe;ct++){let rt=ct/pe*Mn+Ot*.3,ge=(ct+1)/pe*Mn+Ot*.3;P.beginPath(),P.arc(H,H,It-1.5,rt+.012,ge-.012),P.arc(H,H,Nt+1.5,ge-.012,rt+.012,!0),P.closePath();let Le=34+(ct*37+Ot*11)%9*2.2+Ot%2*5;P.fillStyle=`hsl(${255+ct*13%20-10}, ${30+Ot%3*6}%, ${Le}%)`,P.fill()}}P.strokeStyle="rgba(255,214,120,0.85)",P.lineWidth=et/170;for(let Ot of[.16,.2,.62,.64])P.beginPath(),P.arc(H,H,H*Ot,0,Mn),P.stroke();P.lineWidth=et/120,P.strokeStyle="rgba(255,190,90,0.9)",P.beginPath();for(let Ot=0;Ot<=10;Ot++){let Nt=Ot/10*Mn-Math.PI/2,It=Ot%2?H*.07:H*.155;P.lineTo(H+Math.cos(Nt)*It,H+Math.sin(Nt)*It)}P.closePath(),P.stroke(),P.fillStyle="rgba(255,200,110,0.18)",P.fill(),P.font=`${Math.round(et/26)}px serif`,P.fillStyle="rgba(255,214,140,0.75)",P.textAlign="center",P.textBaseline="middle";let gt="\u16A0\u16A2\u16A6\u16A8\u16B1\u16B2\u16B7\u16B9\u16BA\u16BE\u16C1\u16C3\u16C7\u16C8\u16C9\u16CA\u16CF\u16D2\u16D6\u16D7\u16DA\u16DC\u16DE\u16DF";for(let Ot=0;Ot<24;Ot++){let Nt=Ot/24*Mn;P.save(),P.translate(H+Math.cos(Nt)*H*.63,H+Math.sin(Nt)*H*.63),P.rotate(Nt+Math.PI/2),P.fillText(gt[Ot],0,0),P.restore()}P.lineWidth=et/40,P.strokeStyle="#d9a441",P.beginPath(),P.arc(H,H,H-et/80,0,Mn),P.stroke(),P.lineWidth=et/200,P.strokeStyle="#fff1b8",P.beginPath(),P.arc(H,H,H-et/45,0,Mn),P.stroke()}),h=g(64,(P,et)=>{let H=P.createRadialGradient(et/2,et/2,0,et/2,et/2,et/2);H.addColorStop(0,"rgba(0,0,0,0.55)"),H.addColorStop(.6,"rgba(0,0,0,0.25)"),H.addColorStop(1,"rgba(0,0,0,0)"),P.fillStyle=H,P.fillRect(0,0,et,et)},{mip:!1}),m=new Ge(o(new Zn(180,24,12)),o(new tn({side:en,depthWrite:!1,fog:!1,uniforms:{time:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform float time;
      void main(){ float h = vP.y;
        vec3 top = vec3(0.06,0.03,0.18), mid = vec3(0.32,0.12,0.48), hor = vec3(1.0,0.48,0.38), low = vec3(0.12,0.05,0.2);
        vec3 c = h > 0.0 ? mix(mix(hor, mid, smoothstep(0.0, 0.22, h)), top, smoothstep(0.2, 0.85, h)) : mix(hor*0.7, low, smoothstep(0.0, -0.25, h));
        float a = atan(vP.z, vP.x);
        float aur = sin(a*3.0 + time*0.15) * sin(a*5.0 - time*0.1) * 0.5 + 0.5;
        c += vec3(0.25,0.6,0.55) * aur * smoothstep(0.15, 0.35, h) * smoothstep(0.7, 0.4, h) * 0.22;
        gl_FragColor = vec4(c, 1.0); }`})));s.add(m);let _=o(new We);{let et=new Float32Array(960),H=new Float32Array(320);for(let st=0;st<320;st++){let bt=Math.random()*Mn,gt=.25+Math.random()*.75,Ot=Math.sqrt(1-gt*gt)*170;et.set([Math.cos(bt)*Ot,gt*170,Math.sin(bt)*Ot],st*3),H[st]=Math.random()}_.setAttribute("position",new je(et,3)),_.setAttribute("seed",new je(H,1))}let p=new ws(_,o(new tn({transparent:!0,depthWrite:!1,blending:gi,fog:!1,uniforms:{time:{value:0},px:{value:1}},vertexShader:"attribute float seed; uniform float time; uniform float px; varying float vA; void main(){ vA = 0.45 + 0.55*sin(time*(1.0+seed*2.0) + seed*40.0); gl_PointSize = (1.5 + seed*2.5) * px; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying float vA; void main(){ float d = length(gl_PointCoord-0.5); gl_FragColor = vec4(vec3(1.0,0.95,0.9)*vA*smoothstep(0.5,0.0,d), 1.0); }"})));s.add(p);let f=t.platform||20,v=o(new mi(f,f*.82,2.2,64,1,!1));v.translate(0,-1.1,0);let w=new Ge(v,[u(3878236),o(new Yn({map:d})),u(2366010)]);s.add(w);let T=new Ge(o(new vr(f,.22,6,72)),u(15250762,{emissive:6963728}));T.rotation.x=Math.PI/2,T.position.y=.02,s.add(T);let A=o(new gr(1,0)),b=new $n(A,u(4206686),14);b.frustumCulled=!1,s.add(b);let x=[];for(let P=0;P<14;P++)x.push({a:P/14*Mn+Math.random()*.3,d:f+6+Math.random()*14,y:-6+Math.random()*7,s:.7+Math.random()*2.2,ph:Math.random()*Mn});let y=12,I=new $n(o(new xr(1,0)),o(new Yn({color:16777215})),y);I.frustumCulled=!1,s.add(I);let C=[6222079,16739029,16765802],U=[];for(let P=0;P<y;P++){let et=new Vt(C[P%3]);I.setColorAt(P,et),U.push({a:P/y*Mn+.13,col:et})}let D=new $n(o(new mi(.8,1.1,1.2,6)),u(2892102),y);D.frustumCulled=!1,s.add(D);{let P=new oe;for(let et=0;et<y;et++){let H=U[et].a;P.makeTranslation(Math.cos(H)*(f+1.6),0,Math.sin(H)*(f+1.6)),D.setMatrixAt(et,P)}D.instanceMatrix.needsUpdate=!0}let V=o(new mi(1,1,1,72,1,!0));V.translate(0,.5,0);let R={time:{value:0},r:{value:18},rt:{value:18},showT:{value:0}},O=new Ge(V,o(new tn({transparent:!0,depthWrite:!1,blending:gi,side:vn,uniforms:R,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform float time;
      void main(){ float s = sin(vUv.x*150.0 + vUv.y*9.0 - time*2.5)*0.5+0.5; float s2 = sin(vUv.x*61.0 - vUv.y*5.0 + time*1.7)*0.5+0.5;
        float a = pow(1.0 - vUv.y, 1.6) * (0.35 + 0.45*s*s2) + exp(-vUv.y*18.0)*0.8;
        vec3 c = mix(vec3(0.55,0.15,0.95), vec3(1.0,0.45,0.95), s*s2);
        gl_FragColor = vec4(c * a, 1.0); }`})));O.renderOrder=3,s.add(O);let q=new Ge(o(new mr(f+.4,72)),o(new tn({transparent:!0,depthWrite:!1,uniforms:R,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`varying vec3 vW; uniform float r, rt, time, showT;
      void main(){ float d = length(vW.xz);
        float outside = smoothstep(r - 0.1, r + 0.5, d);
        float edge = exp(-abs(d - r) * 2.5);
        float ang = atan(vW.z, vW.x);
        float dash = step(0.45, fract(ang * 16.0 / 6.2832 + time * 0.25));
        float tgt = (1.0 - smoothstep(0.03, 0.12, abs(d - rt))) * dash * showT;
        vec3 c = mix(vec3(0.35,0.06,0.5), vec3(1.0,0.55,1.0), edge);
        c = mix(c, vec3(1.0), tgt);
        float a = clamp(outside * 0.6 + edge * 0.55 + tgt * 0.9, 0.0, 0.92);
        gl_FragColor = vec4(c, a); }`})));q.rotation.x=-Math.PI/2,q.position.y=.03,q.renderOrder=1,s.add(q);let X=new He;s.add(X);let Z=[[0,1.5,0,16765773],[-2.1,1,.5,14148336],[2.1,.6,.5,14256458]].map(([P,et,H,st])=>{let bt=o(new mi(.95,1.1,et,8));bt.translate(0,et/2,0);let gt=new Ge(bt,u(st,{emissive:new Vt(st).multiplyScalar(.18)}));return gt.position.set(P,0,H),X.add(gt),gt});X.visible=!1;let Q=t.maxChars||64,Y=(P,et,H=1)=>{let st=new $n(o(P),et,Q*H);st.frustumCulled=!1,st.count=0;let bt=new Vt(1,1,1);for(let gt=0;gt<Q*H;gt++)st.setColorAt(gt,bt);return s.add(st),st},dt={body:Y(new pr(.27,.24,3,10),u(16777215)),head:Y(new Zn(.36,14,10),u(16777215)),hair:Y(new Zn(.385,14,8,0,Mn,0,Math.PI*.52),u(16777215)),eyes:Y(new Zn(.058,8,6),o(new Yn({color:1774640})),2),hands:Y(new Zn(.13,10,8),u(16777215),2),feet:Y(new Zn(.12,8,6),u(2761272),2),shadow:Y(new Zi(1,1).rotateX(-Math.PI/2),o(new Yn({map:h,transparent:!0,depthWrite:!1,color:16777215})))};dt.shadow.renderOrder=2;let Bt=Y(new Cs(1,2),o(new tn({transparent:!0,depthWrite:!1,blending:gi,uniforms:{time:{value:0}},vertexShader:`varying float vF; varying vec3 vC;
      void main(){ vec4 mv = modelViewMatrix * instanceMatrix * vec4(position,1.0); vec3 n = normalize(normalMatrix * mat3(instanceMatrix) * normal);
        vF = 1.0 - abs(dot(n, normalize(-mv.xyz)));
        #ifdef USE_INSTANCING_COLOR
          vC = instanceColor;
        #else
          vC = vec3(0.4,0.9,1.0);
        #endif
        gl_Position = projectionMatrix * mv; }`,fragmentShader:"varying float vF; varying vec3 vC; uniform float time; void main(){ float a = pow(vF, 2.2) * 0.9 + 0.06; gl_FragColor = vec4(vC * a, 1.0); }"}))),nt=o(new mi(.22,.17,.2,5,1,!0)),Mt=new Ge(nt,u(16765773,{emissive:8016384,side:vn}));Mt.visible=!1,s.add(Mt);let Ct=64,Lt=new $n(o(new _r(.86,1,40).rotateX(-Math.PI/2)),o(new Yn({color:16777215,transparent:!0,depthWrite:!1,blending:gi,side:vn})),Ct);Lt.frustumCulled=!1,Lt.renderOrder=4;{let P=new Vt(0,0,0);for(let et=0;et<Ct;et++)Lt.setColorAt(et,P)}s.add(Lt);let St=[],qt=12,_e=new $n(o(new Cs(.55,0)),u(16747069,{emissive:16734736}),qt);_e.frustumCulled=!1,_e.count=0,s.add(_e);let Ut=[];function ce(P,et){let H=o(new We),st=new Float32Array(P*3),bt=new Float32Array(P*4),gt=new Float32Array(P);H.setAttribute("position",new je(st,3)),H.setAttribute("col",new je(bt,4)),H.setAttribute("size",new je(gt,1));let Ot=o(new tn({transparent:!0,depthWrite:!1,blending:et?gi:Ui,uniforms:{px:{value:400}},vertexShader:"attribute vec4 col; attribute float size; uniform float px; varying vec4 vC; void main(){ vC = col; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = min(size * px / max(0.5, -mv.z), 160.0); gl_Position = projectionMatrix * mv; }",fragmentShader:et?"varying vec4 vC; void main(){ float d = length(gl_PointCoord-0.5)*2.0; float a = pow(max(0.0, 1.0 - d), 2.0); gl_FragColor = vec4(vC.rgb * a * vC.a, 1.0); }":"varying vec4 vC; void main(){ vec2 p = gl_PointCoord-0.5; if (vC.a < 0.0) { if (abs(p.x) > 0.5 || abs(p.y) > 0.28) discard; gl_FragColor = vec4(vC.rgb, 1.0); } else { float d = length(p)*2.0; if (d > 1.0) discard; gl_FragColor = vec4(vC.rgb, vC.a * (1.0 - d*d)); } }"})),Nt=new ws(H,Ot);return Nt.frustumCulled=!1,s.add(Nt),{geo:H,pos:st,col:bt,size:gt,mat:Ot,pts:Nt,list:[],cap:P}}let Yt=ce(t.particles||900,!0),$t=ce(Math.round((t.particles||900)*.5),!1);Yt.pts.renderOrder=6,$t.pts.renderOrder=5;let Ue=1,ve=new Vt;function re(P,et,H,st,bt,gt){et=Math.max(1,Math.round(et*Ue));for(let Ot=0;Ot<et&&P.list.length<P.cap-64;Ot++){let Nt=Math.random()*Mn,It=(gt.up??.5)+Math.random()*(gt.spreadUp??.5),pe=(gt.speed||4)*(.4+Math.random()*.8),ct=gt.colors?gt.colors[Math.random()*gt.colors.length|0]:gt.color;ve.set(ct),P.list.push({x:H+(Math.random()-.5)*(gt.jitter||0),y:st,z:bt+(Math.random()-.5)*(gt.jitter||0),vx:Math.cos(Nt)*pe*(1-It*.6),vy:pe*It*(gt.vyMul??1),vz:Math.sin(Nt)*pe*(1-It*.6),g:gt.g??9,drag:gt.drag??1.5,life:(gt.life||.6)*(.7+Math.random()*.6),t:0,s0:gt.size||.3,s1:gt.size1??(gt.size||.3)*.3,r:ve.r,gg:ve.g,b:ve.b,a:gt.alpha??1,conf:!!gt.confetti,spin:Math.random()*Mn})}}function Se(P,et,H){let st=P.list,bt=0;for(let Nt=0;Nt<st.length;Nt++){let It=st[Nt];if(It.t+=et,It.t>=It.life)continue;It.vy-=It.g*et;let pe=Math.exp(-It.drag*et);It.vx*=pe,It.vy*=pe,It.vz*=pe,It.conf&&(It.spin+=et*6,It.vx+=Math.sin(It.spin)*et*2),It.x+=It.vx*et,It.y+=It.vy*et,It.z+=It.vz*et,It.y<.05&&It.g>0&&(It.y=.05,It.vy*=-.3,It.vx*=.7,It.vz*=.7),st[bt++]=It}st.length=bt;let gt=0,Ot=(Nt,It,pe,ct,rt,ge,Le,$e)=>{P.pos[gt*3]=Nt,P.pos[gt*3+1]=It,P.pos[gt*3+2]=pe,P.col[gt*4]=ct,P.col[gt*4+1]=rt,P.col[gt*4+2]=ge,P.col[gt*4+3]=Le,P.size[gt]=$e,gt++};if(H)for(let Nt of H)Ot(Nt[0],Nt[1],Nt[2],Nt[3],Nt[4],Nt[5],Nt[6],Nt[7]);for(let Nt of st){let It=Nt.t/Nt.life,pe=Nt.conf?1:1-It*It;Ot(Nt.x,Nt.y,Nt.z,Nt.r,Nt.gg,Nt.b,Nt.conf?-1:Nt.a*pe,Nt.s0+(Nt.s1-Nt.s0)*It)}P.geo.setDrawRange(0,gt),P.geo.attributes.position.needsUpdate=!0,P.geo.attributes.col.needsUpdate=!0,P.geo.attributes.size.needsUpdate=!0;for(let Nt of["position","col","size"]){let It=P.geo.attributes[Nt];It.clearUpdateRanges?.(),It.addUpdateRange?.(0,gt*It.itemSize)}}let we=new Map,Kt=new oe,Ae=new oe,be=new In,Fe=new Xn,F=new k,Te=new k,he=new oe,ye=new Vt(1,1,1),pt=new Vt,Ie=new Vt;function kt(P,et){let H=we.get(P.id);return H||(H={x:P.x,y:P.y,z:P.z,face:P.face,walk:Math.random()*10,punch:-9,hit:-9,flash:0,gs:1,seen:et,spawn:et,blink:et+2+Math.random()*3,spinT:-9,skin:Gu[P.id%Gu.length],hp:P.hp,cmdT:-9,tgtT:-9},we.set(P.id,H)),H}let zt=[],E=0,M=new k;function G(P,et,H){if(P.length<=H)return zt=P,P;if(et<E&&zt.length){let bt=new Set(zt.map(Ot=>Ot.id)),gt=P.filter(Ot=>bt.has(Ot.id));if(gt.length>=Math.min(H,P.length)*.8)return gt.concat(P.filter(Ot=>!bt.has(Ot.id)&&Ot.flags&(Ne.cmd|Ne.crown|Ne.giant)).slice(0,4)).slice(0,H)}E=et+.6;let st=P.map(bt=>({f:bt,s:(bt.flags&Ne.cmd?6:0)+(bt.flags&Ne.crown?5:0)+(bt.flags&Ne.giant?4:0)+(bt.flags&Ne.bot?0:2)-Math.hypot(bt.x-M.x,bt.z-M.z)*.25}));return st.sort((bt,gt)=>gt.s-bt.s),zt=st.slice(0,H).map(bt=>bt.f),zt}let J={tx:0,ty:0,tz:0,dist:34,yaw:.6,pitch:.95,kill:null,shake:0,orbit:0},it=9/16,mt=390,yt=844,$={x:0,z:0,w:0},j={x:0,z:0,at:0};function _t(P,et,H){let st=0,bt=0,gt=.8,Ot=30,Nt=.8,It=P.phase,pe=P.fighters;if(J.orbit+=et*(It==="lobby"?.09:It==="ceremony"?.16:.03),$.w*=Math.exp(-et*.8),It==="battle"&&pe.length){if(H>j.at){j.at=H+.5;let Ke=(S,N)=>{let W=0,B=0,z=0;for(let ht of pe){if(ht.flags&Ne.air)continue;let wt=Math.hypot(ht.x-S,ht.z-N);if(wt<7){let ft=(1+(ht.flags&Ne.cmd?1.5:0)+(ht.flags&(Ne.giant|Ne.crown)?1:0))*(1-wt/9);W+=ft,B+=ht.x*ft,z+=ht.z*ft}}return{w:W,x:W?B/W:S,z:W?z/W:N}},_n=Ke(j.x,j.z),ii=_n;for(let S of pe){if(Math.random()>24/pe.length)continue;let N=Ke(S.x,S.z);N.w>_n.w&&(_n=N)}_n!==ii&&_n.w<ii.w*1.35&&(_n=ii),j.x=_n.x,j.z=_n.z}let De=Math.min(.4,$.w*.06);st=j.x*(1-De)+$.x*De,bt=j.z*(1-De)+$.z*De;let Oe=[];for(let Ke of pe)Ke.flags&Ne.air||Oe.push(Math.hypot(Ke.x-st,Ke.z-bt));Oe.sort((Ke,_n)=>Ke-_n);let Be=Math.max(Oe.length?Oe[Math.min(Oe.length-1,Math.max(2,Math.floor(Oe.length*.5)))]:3,2.5);Ot=Ln.clamp(8+Be*(it<.7?1.6:1.1),11,27),Nt=.78}else if(It==="ceremony")st=0,bt=.2,gt=1.9,Ot=9.5,Nt=.34;else{let De=pe.map(Be=>Math.hypot(Be.x,Be.z)).sort((Be,Ke)=>Be-Ke),Oe=De.length?De[Math.floor(De.length*.75)]:4;Ot=Ln.clamp(9+Oe*(it<.7?1.7:1.2),13,28),Nt=.72}if(J.kill&&H<J.kill.until){let De=J.kill,Oe=pe.find(Be=>Be.id===De.id)||De.last;if(Oe){De.last=Oe;let Be=Math.min(1,(H-De.t0)/.25,(De.until-H)/.35);st=Ln.lerp(st,Oe.x,Be),bt=Ln.lerp(bt,Oe.z,Be),gt=Ln.lerp(gt,.9,Be),Ot=Ln.lerp(Ot,8,Be),Nt=Ln.lerp(Nt,.5,Be)}}let ct=1-Math.exp(-et*2.4),rt=1-Math.exp(-et*1.6);J.tx+=(st-J.tx)*ct,J.ty+=(gt-J.ty)*ct,J.tz+=(bt-J.tz)*ct,J.dist+=(Ot-J.dist)*rt,J.pitch+=(Nt-J.pitch)*rt,M.set(J.tx,0,J.tz);let ge=J.yaw+J.orbit,Le=J.tx+Math.cos(ge)*Math.cos(J.pitch)*J.dist,$e=J.ty+Math.sin(J.pitch)*J.dist,xn=J.tz+Math.sin(ge)*Math.cos(J.pitch)*J.dist;J.shake=Math.max(0,J.shake-et*1.8);let En=J.shake*J.shake*.9;r.position.set(Le+(Math.sin(H*47)+Math.sin(H*29))*En,$e+Math.sin(H*53)*En,xn+Math.cos(H*41)*En),r.lookAt(J.tx,J.ty,J.tz)}let L={maxChars:Q,halos:!0,stars:!0,particles:1},tt=[],K=0;function vt(P,et,H){K=H,R.time.value=H,m.material.uniforms.time.value=H,p.material.uniforms.time.value=H,Bt.material.uniforms.time.value=H,p.visible=L.stars;let st=P.phase==="battle"?P.r:f+2;R.r.value=st,R.rt.value=P.rt,R.showT.value=P.phase==="battle"&&P.rt<P.r-.3?1:0,O.visible=P.phase==="battle"&&st<f+.5,O.scale.set(st,7+Math.sin(H*2)*.3,st);for(let ct=0;ct<14;ct++){let rt=x[ct];Kt.compose(F.set(Math.cos(rt.a+H*.01)*rt.d,rt.y+Math.sin(H*.5+rt.ph)*.4,Math.sin(rt.a+H*.01)*rt.d),be.setFromEuler(Fe.set(rt.ph+H*.05,rt.ph,0)),Te.set(rt.s,rt.s*.8,rt.s)),b.setMatrixAt(ct,Kt)}b.instanceMatrix.needsUpdate=!0,tt.length=0;for(let ct=0;ct<y;ct++){let rt=U[ct],ge=2.2+Math.sin(H*1.3+ct)*.25,Le=Math.cos(rt.a)*(f+1.6),$e=Math.sin(rt.a)*(f+1.6);Kt.compose(F.set(Le,ge,$e),be.setFromEuler(Fe.set(0,H*.6+ct,0)),Te.set(.55,1.5,.55)),I.setMatrixAt(ct,Kt),L.halos&&tt.push([Le,ge,$e,rt.col.r,rt.col.g,rt.col.b,.55+.2*Math.sin(H*2+ct),4.2])}if(I.instanceMatrix.needsUpdate=!0,tt.push([-60,70,-120,1,.9,.8,.8,60]),X.visible=P.phase==="ceremony",X.visible){let ct=Ln.clamp((H-(P.phaseStart||H))/.8,.01,1);Z.forEach(rt=>rt.scale.y=1-Math.pow(1-ct,3))}let bt=G(P.fighters,H,L.maxChars);_t(P,et,H);let gt=0,Ot=0,Nt=null;for(let ct of bt){if(gt>=Q)break;let rt=kt(ct,H),ge=rt.x,Le=rt.z;rt.x=ct.x,rt.y=ct.y,rt.z=ct.z,rt.seen=H;let $e=ct.face-rt.face;$e=Math.atan2(Math.sin($e),Math.cos($e)),rt.face+=$e*Math.min(1,et*12);let xn=Math.hypot(rt.x-ge,rt.z-Le)/Math.max(et,.001),En=Math.min(1,xn/3);rt.walk+=et*(6+xn*2.2);let De=ct.flags&Ne.giant;rt.gs+=((De?2:1)-rt.gs)*Math.min(1,et*5),rt.flash=Math.max(0,1-(H-rt.hit)/.14);let Oe=ct.flags&Ne.air,Be=ct.flags&Ne.dance,Ke=ct.flags&Ne.dash,_n=Math.abs(Math.sin(rt.walk))*.09*En,ii=Math.max(0,1-(H-rt.hit)/.2),S=1+ii*-.18+(Oe?.22:0)+(Ke?-.1:0),N=1+ii*.12+(Ke?.1:0),W=Math.min(1,(H-rt.spawn)/.25);S*=W,N*=W;let B=Math.PI/2-rt.face;Be?B+=H*9:H-rt.spinT<.45&&(B+=(H-rt.spinT)*30);let z=Be?Math.abs(Math.sin(H*9))*.35:0,ht=rt.gs;he.compose(F.set(rt.x,rt.y+_n+z,rt.z),be.setFromEuler(Fe.set(Ke?.25:En*.12,B,0)),Te.set(ht*N,ht*S,ht*N));let wt=H-rt.punch<.22?Math.sin((H-rt.punch)/.22*Math.PI):0,ft=ct.info||{};pt.set(ft.color??16777215),rt.flash>0&&pt.lerp(ye,rt.flash),Ie.set(rt.skin),rt.flash>0&&Ie.lerp(ye,rt.flash),Ae.compose(F.set(0,.47,wt*.08),be.setFromEuler(Fe.set(wt*.2,0,0)),Te.set(1,1,1)),Kt.multiplyMatrices(he,Ae),dt.body.setMatrixAt(gt,Kt),dt.body.setColorAt(gt,pt);let At=Math.sin(rt.walk*.5)*.06*En;Ae.compose(F.set(0,.98,wt*.12),be.setFromEuler(Fe.set(wt*.25-.05,0,At)),Te.set(1,1,1)),Kt.multiplyMatrices(he,Ae),dt.head.setMatrixAt(gt,Kt),dt.head.setColorAt(gt,Ie),Ae.compose(F.set(0,1.02,wt*.12-.02),be.setFromEuler(Fe.set(wt*.25-.3,0,At)),Te.set(1,1,1)),Kt.multiplyMatrices(he,Ae),dt.hair.setMatrixAt(gt,Kt),dt.hair.setColorAt(gt,pt),H>rt.blink+.12&&(rt.blink=H+2+Math.random()*3);let Dt=H>rt.blink?.15:1;for(let xt=0;xt<2;xt++)Ae.compose(F.set(xt?.125:-.125,.97,.315+wt*.12),be.identity(),Te.set(1,1.35*Dt,.6)),Kt.multiplyMatrices(he,Ae),dt.eyes.setMatrixAt(gt*2+xt,Kt);let Wt=Math.sin(rt.walk)*.18*En;for(let xt=0;xt<2;xt++){let Jt=xt?1:-1,Ce=xt?wt:0,xe=Be?1.05+Math.sin(H*9+xt*3)*.12:.48+Ce*.12;Ae.compose(F.set(Jt*(.36-Ce*.16),xe,(xt?-Wt:Wt)+Ce*.5),be.identity(),Te.set(1,1,1)),Kt.multiplyMatrices(he,Ae),dt.hands.setMatrixAt(gt*2+xt,Kt),dt.hands.setColorAt(gt*2+xt,pt)}for(let xt=0;xt<2;xt++){let Jt=Math.sin(rt.walk+xt*Math.PI)*.16*En;Ae.compose(F.set(xt?.13:-.13,.06+Math.max(0,Jt)*.3,Jt),be.identity(),Te.set(1,.65,1.35)),Kt.multiplyMatrices(he,Ae),dt.feet.setMatrixAt(gt*2+xt,Kt)}let ee=(.9+(De?.9:0))*(Oe?Math.max(.3,1-rt.y/14):1)*W;if(Kt.compose(F.set(rt.x,.04,rt.z),be.identity(),Te.set(ee,1,ee)),dt.shadow.setMatrixAt(gt,Kt),ct.flags&(Ne.shield|Ne.rage)){let xt=ct.flags&Ne.shield,Jt=(xt?.85:.75)*ht*(1+Math.sin(H*8)*.03);Kt.compose(F.set(rt.x,rt.y+.6*ht,rt.z),be.identity(),Te.set(Jt,Jt*1.05,Jt)),Bt.setMatrixAt(Ot,Kt),Bt.setColorAt(Ot,xt?ve.setRGB(.35,.85,1):ve.setRGB(1,.25,.2)),Ot++}ct.flags&Ne.crown&&(Nt={f:ct,s:rt,gsc:ht,yaw:B}),ct.flags&Ne.speed&&En>.3&&Math.random()<.5&&re(Yt,1,rt.x,rt.y+.2,rt.z,{color:16769126,speed:.4,life:.4,size:.35,g:-.5}),Ke&&re(Yt,2,rt.x,rt.y+.5,rt.z,{color:ft.color??16777215,speed:.3,life:.35,size:.6,g:0}),Oe&&re(Yt,1,rt.x,rt.y+.8,rt.z,{color:12577279,speed:.2,life:.5,size:.4,g:-2,up:1}),ct.flags&Ne.cmd&&L.halos&&tt.push([rt.x,.15,rt.z,pt.r*.6,pt.g*.6,pt.b*.6,.6,2.2*ht]),De&&L.halos&&tt.push([rt.x,rt.y+1.2,rt.z,1,.75,.3,.35,7]),gt++}for(let ct of["body","head","hair","shadow"])dt[ct].count=gt,dt[ct].instanceMatrix.needsUpdate=!0,dt[ct].instanceColor&&(dt[ct].instanceColor.needsUpdate=!0);for(let ct of["eyes","hands","feet"])dt[ct].count=gt*2,dt[ct].instanceMatrix.needsUpdate=!0,dt[ct].instanceColor&&(dt[ct].instanceColor.needsUpdate=!0);if(Bt.count=Ot,Bt.instanceMatrix.needsUpdate=!0,Bt.instanceColor&&(Bt.instanceColor.needsUpdate=!0),Mt.visible=!!Nt,Nt){let{s:ct,gsc:rt,yaw:ge}=Nt;Mt.position.set(ct.x,ct.y+1.5*rt+Math.sin(H*3)*.05,ct.z),Mt.rotation.set(-.15,ge+H,0),Mt.scale.setScalar(rt),L.halos&&tt.push([ct.x,ct.y+1.5*rt,ct.z,1,.8,.3,.7,2.4])}if(we.size>Q*3)for(let[ct,rt]of we)H-rt.seen>5&&we.delete(ct);let It=0;for(let ct=St.length-1;ct>=0;ct--){let rt=St[ct];H-rt.t0>rt.dur&&St.splice(ct,1)}for(let ct of St){if(It>=Ct)break;let rt=(H-ct.t0)/ct.dur,ge,Le;ct.kind==="warn"?(ge=ct.r0*(.9+.1*Math.sin(H*18)),Le=.5+.5*Math.sin(H*14)):ct.kind==="mark"?(ge=ct.r0,Le=1-rt):(ge=ct.r0+(ct.r1-ct.r0)*(1-Math.pow(1-rt,3)),Le=1-rt),Kt.compose(F.set(ct.x,ct.y??.08,ct.z),be.identity(),Te.set(ge,1,ge)),Lt.setMatrixAt(It,Kt),Lt.setColorAt(It,ve.copy(ct.col).multiplyScalar(Math.max(0,Le))),It++}Lt.count=It,Lt.instanceMatrix.needsUpdate=!0,Lt.instanceColor&&(Lt.instanceColor.needsUpdate=!0);let pe=0;for(let ct=Ut.length-1;ct>=0;ct--)H>Ut[ct].t0+Ut[ct].d+.05&&Ut.splice(ct,1);for(let ct of Ut){let rt=Ln.clamp((H-ct.t0)/ct.d,0,1),ge=rt*rt,Le=ct.x+(1-ge)*7,$e=.4+(1-ge)*26,xn=ct.z-(1-ge)*7;Kt.compose(F.set(Le,$e,xn),be.setFromEuler(Fe.set(H*5,H*4,0)),Te.setScalar(1.2)),_e.setMatrixAt(pe++,Kt),re(Yt,2,Le,$e,xn,{colors:[16751164,16765802,16734751],speed:.8,life:.45,size:1.1,g:0,drag:2}),L.halos&&tt.push([Le,$e,xn,1,.55,.2,.9,5])}_e.count=pe,_e.instanceMatrix.needsUpdate=!0,Se(Yt,et,tt),Se($t,et,null),n.render(s,r)}function at(P,et){let H=et.fighters.find(bt=>bt.id===P);if(H)return H;let st=we.get(P);return st?{x:st.x,y:st.y,z:st.z,id:P}:null}function lt(P,et,H){St.push({x:P,z:et,y:H.y,t0:K,dur:H.dur||.5,r0:H.r0??.2,r1:H.r1??2,col:new Vt(H.color??16777215),kind:H.kind||"wave"}),St.length>Ct&&St.shift()}function Rt(P){J.shake=Math.min(1.2,J.shake+P)}function Qt(P,et){let H=K;switch(P.k){case"atk":{let st=we.get(P.a);st&&(st.punch=H);break}case"hit":{let st=we.get(P.b),bt=at(P.b,et);if(st&&(st.hit=H),!bt)break;$.x+=(bt.x-$.x)*.15,$.z+=(bt.z-$.z)*.15,$.w=Math.min(8,$.w+.4);let gt=P.c||P.m;re(Yt,gt?14:6,bt.x,(bt.y||0)+.7,bt.z,{colors:P.s?[11820287,14721279]:gt?[16777215,16769126,16751164]:[16777215,16773544],speed:gt?7:4.5,life:.35,size:gt?.5:.35,g:6,up:.3}),gt?(lt(bt.x,bt.z,{y:.7,r0:.2,r1:1.6,color:16773312,dur:.25}),Rt(P.m?.25:.12)):Math.hypot(bt.x-J.tx,bt.z-J.tz)<7&&Rt(.03);break}case"block":{let st=at(P.a,et);st&&re(Yt,6,st.x,.8,st.z,{color:8382463,speed:3,life:.3,size:.35,g:0});break}case"ko":{let st=at(P.b,et);if(!st)break;let bt=we.get(P.b),gt=null;re(Yt,22,st.x,.7,st.z,{colors:[16777215,16769126,16739029,6222079],speed:7,life:.7,size:.5,g:5,up:.6}),re($t,10,st.x,.5,st.z,{colors:[16052223,14274800],speed:2.2,life:.8,size:.9,size1:1.6,g:-.5,alpha:.75,up:.3}),re(Yt,1,st.x,1,st.z,{color:15400191,speed:.1,life:1.6,size:2.2,size1:1,g:-2.2,drag:.5,up:1,alpha:.9}),lt(st.x,st.z,{r0:.3,r1:3,color:16766719,dur:.45}),Rt(P.multi||P.streak?.35:.16),P.a&&(P.first||P.multi||P.streak||P.giant||P.left>0&&P.left<=3)&&(!J.kill||H>J.kill.until+3)&&(J.kill={id:P.a,t0:H,until:H+1.7}),we.delete(P.b);break}case"dash":{let st=at(P.a,et);st&&(lt(st.x,st.z,{r0:.3,r1:1.4,color:13625599,dur:.3}),re($t,6,st.x,.2,st.z,{color:14207976,speed:2,life:.5,size:.6,size1:1,g:0,alpha:.6}));break}case"shield":{let st=at(P.a,et);st&&lt(st.x,st.z,{r0:.4,r1:1.6,color:6220031,dur:.4});break}case"spin":{let st=we.get(P.a);st&&(st.spinT=H);let bt=at(P.a,et);bt&&(lt(bt.x,bt.z,{r0:.5,r1:3,color:16769898,dur:.4}),re(Yt,16,bt.x,.6,bt.z,{color:16769898,speed:6,life:.4,size:.4,g:0,up:0}),Rt(.15));break}case"heal":{let st=at(P.a,et);st&&re(Yt,4,st.x,.4,st.z,{color:7208860,speed:.6,life:.9,size:.35,g:-2.5,up:1,jitter:.6});break}case"drop":{let st=we.get(P.a);st&&(st.spawn=H);break}case"land":{let st=at(P.a,et);st&&(lt(st.x,st.z,{r0:.3,r1:1.8,color:14273791,dur:.35}),re($t,8,st.x,.15,st.z,{color:13616102,speed:2.5,life:.5,size:.5,size1:.9,g:1,up:.1,alpha:.7}));break}case"meteor":Ut.push({x:P.x,z:P.z,t0:H,d:Math.max(.3,P.d)}),Ut.length>qt&&Ut.shift(),lt(P.x,P.z,{kind:"warn",r0:2.4,dur:Math.max(.3,P.d),color:16726831});break;case"boom":re(Yt,34,P.x,.5,P.z,{colors:[16777215,16765802,16747069,16730911],speed:9,life:.7,size:.8,g:4,up:.5}),re($t,14,P.x,.6,P.z,{colors:[5917294,8219279,3813194],speed:3.5,life:1.2,size:1.2,size1:2.4,g:-.6,alpha:.8,up:.5}),lt(P.x,P.z,{r0:.5,r1:P.r*1.6,color:16756832,dur:.5}),lt(P.x,P.z,{r0:.2,r1:P.r,color:16777215,dur:.25}),Rt(.5);break;case"nuke":Rt(1.1),lt(0,0,{r0:1,r1:f,color:16747248,dur:1.2,y:.3}),re(Yt,60,0,1,0,{colors:[16777215,16747248,10182117],speed:22,life:1,size:1,g:0,up:.1});break;case"power":case"revive":{let st=at(P.a,et);if(!st)break;let bt={speed:16769126,meteor:16747069,giant:16757575,revive:16740277,nuke:16747248}[P.tier]??16740277;lt(st.x,st.z,{r0:.3,r1:3.2,color:bt,dur:.6});for(let gt=0;gt<6;gt++)re(Yt,4,st.x,.2+gt*.5,st.z,{color:bt,speed:1.2,life:.9,size:.6,g:-4,up:1,jitter:.5});Rt(.2);break}case"cmd":{if(P.c==="attack"||P.c==="revenge"){let bt=at(P.b,et);bt&&lt(bt.x,bt.z,{kind:"mark",r0:.8,dur:1.5,color:16724821})}let st=we.get(P.a);st&&(st.cmdT=H);break}case"hype":for(let st=0;st<40;st++)re(Yt,1,(Math.random()-.5)*30,9+Math.random()*4,(Math.random()-.5)*30,{color:16743096,speed:.5,life:2.2,size:.6,g:4,drag:2.5});break;case"win":ut=H+4.5,Rt(.3);break;case"phase":P.ph==="battle"&&(lt(0,0,{r0:2,r1:f,color:16777215,dur:.9,y:.2}),Rt(.2));break}}let ut=0;function Ft(P){P<ut&&re($t,4,(Math.random()-.5)*7,7+Math.random()*2,(Math.random()-.5)*4,{colors:[16731486,16765503,4114431,10216804,16740277,16777215],speed:1.2,life:3.2,size:.32,g:1.6,drag:1.4,confetti:!0,up:0})}let Ht=new k;return{kind:"webgl",renderer:n,resize(P,et,H){mt=P,yt=et,it=P/et,n.setPixelRatio(H),n.setSize(P,et,!1),r.aspect=it,r.fov=it<.7?58:44,r.setViewOffset(P,et,0,it<.8?-et*.03:0,P,et),r.updateProjectionMatrix();let st=et*H/(2*Math.tan(Ln.degToRad(r.fov/2)));Yt.mat.uniforms.px.value=st,$t.mat.uniforms.px.value=st,p.material.uniforms.px.value=H},setQuality(P){L={...L,...P},Ue=P.particles??1},frame(P,et,H){Ft(H),vt(P,et,H)},fx:Qt,project(P,et,H){return Ht.set(P,et,H).project(r),{x:(Ht.x*.5+.5)*mt,y:(-Ht.y*.5+.5)*yt,z:Ht.z,ok:Ht.z<1&&Ht.z>-1}},drawn(){return zt.length?zt:null},headY(P){let et=we.get(P.id);return 1.55*(et?et.gs:1)},stats(){let P=n.info;return{calls:P.render.calls,tris:P.render.triangles,tex:P.memory.textures,geo:P.memory.geometries,chars:dt.body.count,parts:Yt.list.length+$t.list.length}},dispose(){for(let P of a)try{P.dispose()}catch{}s.traverse(P=>{P.isInstancedMesh&&P.dispose()}),n.dispose()},loseContext(){try{n.forceContextLoss()}catch{}}}}var zr={alive:1,shield:2,speed:4,giant:8,rage:16,dash:32,dance:64,air:128,crown:256,cmd:512,low:1024,bot:2048},px=i=>"#"+(i>>>0).toString(16).padStart(6,"0").slice(-6);function Hu(i,t={}){let e=i.getContext("2d"),n=t.platform||20,s=390,r=844,a=1,o=8,l=195,c=380,u=0,g=0,d=[],h=[],m=[],_=new Map,p={maxChars:60,particles:1},f=(b,x,y)=>({x:l+b*o,y:c+y*o*.62-(x||0)*o*.9});function v(b,x,y){u=y,g=Math.max(0,g-x*2);let I=(Math.random()-.5)*g*14,C=(Math.random()-.5)*g*14;e.setTransform(a,0,0,a,I*a,C*a);let U=e.createLinearGradient(0,0,0,r);U.addColorStop(0,"#120a2a"),U.addColorStop(.45,"#4a1f6e"),U.addColorStop(.75,"#ff7a5c"),U.addColorStop(1,"#2a1240"),e.fillStyle=U,e.fillRect(-20,-20,s+40,r+40),e.save(),e.translate(l,c),e.scale(1,.62),e.fillStyle="#241a3a",e.beginPath(),e.arc(0,18,n*o,0,6.283),e.fill();let D=e.createRadialGradient(0,0,0,0,0,n*o);D.addColorStop(0,"#6a5a9a"),D.addColorStop(1,"#3a2f68"),e.fillStyle=D,e.beginPath(),e.arc(0,0,n*o,0,6.283),e.fill(),e.strokeStyle="rgba(255,214,120,0.6)",e.lineWidth=2;for(let R of[.18,.62])e.beginPath(),e.arc(0,0,n*o*R,0,6.283),e.stroke();e.strokeStyle="#d9a441",e.lineWidth=5,e.beginPath(),e.arc(0,0,n*o,0,6.283),e.stroke(),b.phase==="battle"&&(e.fillStyle="rgba(120,20,170,0.5)",e.beginPath(),e.arc(0,0,n*o+2,0,6.283),e.arc(0,0,b.r*o,0,6.283,!0),e.fill(),e.strokeStyle="rgba(255,140,255,0.95)",e.lineWidth=4,e.beginPath(),e.arc(0,0,b.r*o,0,6.283),e.stroke(),b.rt<b.r-.3&&(e.setLineDash([8,8]),e.strokeStyle="rgba(255,255,255,0.8)",e.lineWidth=2,e.beginPath(),e.arc(0,0,b.rt*o,0,6.283),e.stroke(),e.setLineDash([]))),e.restore();for(let R=h.length-1;R>=0;R--){let O=h[R],q=(y-O.t0)/O.dur;if(q>=1){h.splice(R,1);continue}let X=f(O.x,0,O.z);e.strokeStyle=O.col,e.globalAlpha=O.warn?.5+.5*Math.sin(y*14):1-q,e.lineWidth=3,e.beginPath(),e.ellipse(X.x,X.y,(O.warn?O.r1:O.r0+(O.r1-O.r0)*q)*o,(O.warn?O.r1:O.r0+(O.r1-O.r0)*q)*o*.62,0,0,6.283),e.stroke()}e.globalAlpha=1;let V=b.fighters.slice(0,p.maxChars).sort((R,O)=>R.z-O.z);for(let R of V){let O=_.get(R.id);O||(O={hit:-9,punch:-9},_.set(R.id,O));let q=R.flags&zr.giant?2:1,X=px(R.info?.color??16777215),ot=y-O.hit<.12,Z=f(R.x,0,R.z),Q=f(R.x,R.y,R.z),Y=o*.5*q;e.fillStyle="rgba(0,0,0,0.3)",e.beginPath(),e.ellipse(Z.x,Z.y,Y*1.1,Y*.45,0,0,6.283),e.fill();let dt=R.flags&zr.dance?Math.abs(Math.sin(y*9))*Y:0;e.fillStyle=ot?"#fff":X,e.beginPath(),e.ellipse(Q.x,Q.y-Y*1-dt,Y*.75,Y*.9,0,0,6.283),e.fill(),e.fillStyle=ot?"#fff":"#ffd9b8",e.beginPath(),e.arc(Q.x,Q.y-Y*2.3-dt,Y*.95,0,6.283),e.fill(),e.fillStyle=ot?"#fff":X,e.beginPath(),e.arc(Q.x,Q.y-Y*2.45-dt,Y*1,Math.PI,0),e.fill(),e.fillStyle="#1b1430";let Bt=Math.cos(R.face)*Y*.3;e.fillRect(Q.x-Y*.38+Bt,Q.y-Y*2.3-dt,Y*.18,Y*.3),e.fillRect(Q.x+Y*.2+Bt,Q.y-Y*2.3-dt,Y*.18,Y*.3),R.flags&zr.shield&&(e.strokeStyle="rgba(94,232,255,0.9)",e.lineWidth=2,e.beginPath(),e.arc(Q.x,Q.y-Y*1.6,Y*2.2,0,6.283),e.stroke()),R.flags&zr.crown&&(e.fillStyle="#ffd34d",e.fillRect(Q.x-Y*.6,Q.y-Y*3.8-dt,Y*1.2,Y*.45)),y-O.punch<.2&&(e.fillStyle=X,e.beginPath(),e.arc(Q.x+Math.cos(R.face)*Y*1.6,Q.y-Y*1.2+Math.sin(R.face)*Y,Y*.45,0,6.283),e.fill())}for(let R=m.length-1;R>=0;R--){let O=m[R],q=(y-O.t0)/O.d;if(q>=1){m.splice(R,1);continue}let X=f(O.x+(1-q*q)*6,(1-q*q)*24,O.z-(1-q*q)*6);e.fillStyle="#ffb060",e.beginPath(),e.arc(X.x,X.y,o*.6,0,6.283),e.fill()}for(let R=d.length-1;R>=0;R--){let O=d[R];if(O.t+=x,O.t>O.life){d.splice(R,1);continue}O.vy-=O.gr*x,O.x+=O.vx*x,O.y+=O.vy*x,O.z+=O.vz*x;let q=f(O.x,O.y,O.z);e.globalAlpha=1-O.t/O.life,e.fillStyle=O.col,e.fillRect(q.x-2,q.y-2,4,4)}e.globalAlpha=1}function w(b,x,y,I,C,U=4){I=Math.round(I*(p.particles||1));for(let D=0;D<I&&d.length<400;D++){let V=Math.random()*6.283;d.push({x:b,y:x,z:y,vx:Math.cos(V)*U*Math.random(),vy:Math.random()*U,vz:Math.sin(V)*U*Math.random(),gr:8,t:0,life:.6,col:Array.isArray(C)?C[D%C.length]:C})}}let T=(b,x)=>x.fighters.find(y=>y.id===b);function A(b,x){let y=u;if(b.k==="atk"){let I=_.get(b.a);I&&(I.punch=y)}else if(b.k==="hit"){let I=_.get(b.b);I&&(I.hit=y);let C=T(b.b,x);C&&w(C.x,.8,C.z,b.c?10:4,["#fff","#ffe066"]),(b.c||b.m)&&(g=Math.min(1,g+.15))}else if(b.k==="ko"){let I=T(b.b,x);I&&(w(I.x,.8,I.z,18,["#fff","#ffe066","#ff6ad5","#5ef0ff"],6),h.push({x:I.x,z:I.z,t0:y,dur:.4,r0:.3,r1:3,col:"#ffd6ff"})),g=Math.min(1,g+.2),_.delete(b.b)}else if(b.k==="meteor")m.push({x:b.x,z:b.z,t0:y,d:Math.max(.3,b.d)}),h.push({x:b.x,z:b.z,t0:y,dur:b.d,r1:2.4,warn:1,col:"#ff3b2f"});else if(b.k==="boom")w(b.x,.5,b.z,30,["#fff","#ffd36a","#ff8a3d"],9),h.push({x:b.x,z:b.z,t0:y,dur:.5,r0:.5,r1:b.r*1.6,col:"#ffb060"}),g=Math.min(1,g+.5);else if(b.k==="win")for(let I=0;I<6;I++)w((Math.random()-.5)*6,6,(Math.random()-.5)*3,12,["#ff4d5e","#ffd23f","#3ec7ff","#9be564","#ff6fb5"],3);else b.k==="nuke"&&(g=1)}return{kind:"2d",resize(b,x,y){s=b,r=x,a=y,i.width=Math.round(b*y),i.height=Math.round(x*y),o=Math.min(b/(n*2.3),13),l=b/2,c=x*.47},setQuality(b){p={...p,...b}},frame:v,fx:A,project(b,x,y){let I=f(b,x,y);return{x:I.x,y:I.y-o*.7,ok:!0}},drawn(){return null},headY(b){return(b.flags&zr.giant?2:1)*2.2},stats(){return{calls:0,tris:0,chars:0,parts:d.length}},dispose(){}}}function Wu({silenceUrl:i="/assets/silence.mp3",record:t=!1}={}){let e={ctx:null,master:null,sfxGain:null,voiceGain:null,unlocked:!1,played:0,fails:0,cues:[],record:t,last:{},speakingUntil:0,muted:!1};try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}let n=new Audio;n.setAttribute("playsinline",""),n.preload="auto";function s(){if(e.ctx||t)return e.ctx;let h=window.AudioContext||window.webkitAudioContext;if(!h)return null;try{e.ctx=new h}catch{return null}return r(e.ctx,e.ctx.destination,e),e.ctx}function r(h,m,_){let p=h.createDynamicsCompressor();p.threshold.value=-14,p.ratio.value=6,p.attack.value=.003,p.release.value=.2,_.master=h.createGain(),_.master.gain.value=.9,_.sfxGain=h.createGain(),_.sfxGain.gain.value=.55,_.voiceGain=h.createGain(),_.voiceGain.gain.value=1,_.sfxGain.connect(_.master),_.voiceGain.connect(_.master),_.master.connect(p),p.connect(m)}e.unlock=()=>{let h=s();if(h){try{h.resume();let m=h.createBuffer(1,1,22050),_=h.createBufferSource();_.buffer=m,_.connect(h.destination),_.start(0)}catch{}e.elUnlocked||(n.src=i,n.play().then(()=>{n.pause(),e.elUnlocked=!0}).catch(()=>{})),e.unlocked=h.state==="running",setTimeout(()=>{e.unlocked=h.state==="running",e.onstate&&e.onstate(e.unlocked)},120)}},e.resume=()=>{e.ctx&&e.ctx.state!=="running"&&e.ctx.resume().catch(()=>{})},e.state=()=>t?"record":e.ctx?e.ctx.state:"none";let a=h=>{if(h.__noise)return h.__noise;let m=h.sampleRate,_=h.createBuffer(1,m,m),p=_.getChannelData(0),f=1;for(let v=0;v<m;v++)f=f*16807%2147483647,p[v]=f/10737418235e-1-1;return h.__noise=_,_};function o(h,m,_,p,f,v){m.gain.setValueAtTime(1e-4,_),m.gain.exponentialRampToValueAtTime(f,_+p),m.gain.exponentialRampToValueAtTime(1e-4,_+p+v)}function l(h,m,_,{type:p="sine",f0:f=440,f1:v=f,a:w=.005,d:T=.2,peak:A=.3,det:b=0}){let x=h.createOscillator(),y=h.createGain();x.type=p,x.frequency.setValueAtTime(f,_),v!==f&&x.frequency.exponentialRampToValueAtTime(Math.max(20,v),_+w+T),x.detune.value=b,o(h,y,_,w,A,T),x.connect(y).connect(m),x.start(_),x.stop(_+w+T+.05)}function c(h,m,_,{type:p="lowpass",f0:f=1e3,f1:v=f,q:w=.7,a:T=.003,d:A=.15,peak:b=.4}){let x=h.createBufferSource(),y=h.createBiquadFilter(),I=h.createGain();x.buffer=a(h),y.type=p,y.Q.value=w,y.frequency.setValueAtTime(f,_),v!==f&&y.frequency.exponentialRampToValueAtTime(Math.max(30,v),_+T+A),o(h,I,_,T,b,A),x.connect(y).connect(I).connect(m),x.start(_,Math.random()*.5),x.stop(_+T+A+.05)}let u={punch:(h,m,_,p=1)=>{c(h,m,_,{f0:1400,f1:300,d:.08,peak:.5*p}),l(h,m,_,{f0:150,f1:55,d:.1,peak:.55*p})},crit:(h,m,_)=>{u.punch(h,m,_,1.2),l(h,m,_,{type:"square",f0:1800,f1:900,d:.06,peak:.12}),c(h,m,_+.01,{type:"highpass",f0:3e3,d:.12,peak:.25})},block:(h,m,_)=>{l(h,m,_,{type:"triangle",f0:1200,f1:1100,d:.18,peak:.18}),l(h,m,_,{type:"triangle",f0:1810,d:.14,peak:.1})},ko:(h,m,_)=>{l(h,m,_,{type:"sine",f0:260,f1:980,a:.005,d:.16,peak:.35}),c(h,m,_,{type:"bandpass",f0:2500,f1:600,q:1.2,d:.25,peak:.35}),l(h,m,_+.09,{type:"triangle",f0:1320,d:.2,peak:.12})},dash:(h,m,_)=>{c(h,m,_,{type:"bandpass",f0:500,f1:3500,q:2,a:.04,d:.22,peak:.45})},shield:(h,m,_)=>{[880,1320,1760].forEach((p,f)=>l(h,m,_+f*.03,{type:"sine",f0:p,d:.45,peak:.09}))},boom:(h,m,_,p=1)=>{c(h,m,_,{f0:900,f1:80,a:.004,d:.9,peak:.8*p}),l(h,m,_,{f0:90,f1:28,d:.8,peak:.8*p})},whistle:(h,m,_)=>{l(h,m,_,{type:"sine",f0:1900,f1:500,a:.05,d:.95,peak:.07})},coin:(h,m,_)=>{l(h,m,_,{type:"square",f0:988,d:.07,peak:.1}),l(h,m,_+.07,{type:"square",f0:1319,d:.28,peak:.1})},power:(h,m,_)=>{[523,659,784,1047].forEach((p,f)=>l(h,m,_+f*.05,{type:"triangle",f0:p,d:.3,peak:.14})),c(h,m,_,{type:"highpass",f0:2e3,f1:6e3,a:.1,d:.4,peak:.12})},heal:(h,m,_)=>{[660,880,1100].forEach((p,f)=>l(h,m,_+f*.06,{f0:p,d:.25,peak:.08}))},beep:(h,m,_)=>{l(h,m,_,{f0:880,d:.12,peak:.22})},go:(h,m,_)=>{l(h,m,_,{type:"sawtooth",f0:660,d:.5,peak:.12}),l(h,m,_,{type:"square",f0:1320,d:.5,peak:.08}),c(h,m,_,{f0:4e3,f1:500,d:.4,peak:.25})},land:(h,m,_)=>{l(h,m,_,{f0:120,f1:50,d:.12,peak:.3}),c(h,m,_,{f0:600,d:.1,peak:.15})},spin:(h,m,_)=>{c(h,m,_,{type:"bandpass",f0:300,f1:2400,q:3,a:.08,d:.35,peak:.5}),u.punch(h,m,_+.25,1.1)},cheer:(h,m,_)=>{c(h,m,_,{type:"bandpass",f0:1200,f1:1500,q:.6,a:.25,d:2.2,peak:.35}),c(h,m,_+.1,{type:"bandpass",f0:2600,f1:2200,q:.8,a:.3,d:2,peak:.18})},fanfare:(h,m,_)=>{[[523,0],[659,.12],[784,.24],[1047,.38],[784,.6],[1047,.72]].forEach(([p,f],v)=>{l(h,m,_+f,{type:"sawtooth",f0:p,d:v===5?.9:.16,peak:.07}),l(h,m,_+f,{type:"triangle",f0:p*2,d:v===5?.9:.16,peak:.05})}),u.cheer(h,m,_+.2)},nuke:(h,m,_)=>{u.boom(h,m,_,1.3),u.boom(h,m,_+.25,1),l(h,m,_,{type:"sawtooth",f0:220,f1:40,d:1.6,peak:.25})},pop:(h,m,_)=>{l(h,m,_,{f0:500,f1:1400,d:.07,peak:.15})}},g={punch:.045,crit:.06,block:.08,ko:.08,heal:.15,land:.06,pop:.05,coin:.05,boom:.06};e.sfx=(h,m=e.now(),_=1)=>{if(e.muted||!u[h])return;let p=g[h]||.03;if(e.last[h]&&m-e.last[h]<p)return;if(e.last[h]=m,t){e.cues.push({k:"sfx",kind:h,t:m,v:_});return}let f=e.ctx;if(!(!f||f.state!=="running"))try{u[h](f,e.sfxGain,f.currentTime+.01,_)}catch{}},e.now=()=>t?e.clock():e.ctx?e.ctx.currentTime:0,e.clock=()=>0;let d=null;return e.voice=async(h,m)=>{if(e.muted||!h)return!1;if(e.speakingUntil=e.now()+(m||2),t)return e.cues.push({k:"voice",url:h,t:e.now(),dur:m}),!0;let _=e.ctx;if(_&&_.state!=="running"&&e.resume(),_&&_.state==="running")try{let p=await fetch(h).then(T=>{if(!T.ok)throw new Error("HTTP "+T.status);return T.arrayBuffer()}),f=await new Promise((T,A)=>{let b=_.decodeAudioData(p,T,A);b&&b.catch&&b.catch(A)});if(d)try{d.stop()}catch{}let v=_.createBufferSource();v.buffer=f,v.connect(e.voiceGain);let w=_.currentTime+.02;return e.sfxGain.gain.setTargetAtTime(.28,w,.05),e.sfxGain.gain.setTargetAtTime(.55,w+f.duration,.2),v.start(w),d=v,e.played++,v.onended=()=>{d===v&&(d=null)},!0}catch{e.fails++}try{return n.src=h,await n.play(),e.played++,!0}catch{return e.fails++,!1}},e.mix=async(h,m=44100)=>{let _=window.OfflineAudioContext||window.webkitOfflineAudioContext,p=new _(2,Math.ceil(h*m),m),f={};r(p,p.destination,f);let v=e.cues.filter(D=>D.k==="voice"),w=await Promise.all(v.map(D=>fetch(D.url).then(V=>V.arrayBuffer()).then(V=>p.decodeAudioData(V)).catch(()=>null)));for(let D of e.cues)if(D.k==="sfx"&&D.t<h)try{u[D.kind](p,f.sfxGain,D.t+.01,D.v)}catch{}v.forEach((D,V)=>{let R=w[V];if(!R||D.t>=h)return;let O=p.createBufferSource();O.buffer=R,O.connect(f.voiceGain),O.start(D.t+.02),f.sfxGain.gain.setTargetAtTime(.28,D.t,.05),f.sfxGain.gain.setTargetAtTime(.55,D.t+R.duration,.2)});let T=await p.startRendering(),A=T.length,b=[T.getChannelData(0),T.getChannelData(1)],x=new DataView(new ArrayBuffer(44+A*4)),y=(D,V)=>{for(let R=0;R<V.length;R++)x.setUint8(D+R,V.charCodeAt(R))};y(0,"RIFF"),x.setUint32(4,36+A*4,!0),y(8,"WAVEfmt "),x.setUint32(16,16,!0),x.setUint16(20,1,!0),x.setUint16(22,2,!0),x.setUint32(24,m,!0),x.setUint32(28,m*4,!0),x.setUint16(32,4,!0),x.setUint16(34,16,!0),y(36,"data"),x.setUint32(40,A*4,!0);let I=44;for(let D=0;D<A;D++)for(let V=0;V<2;V++){let R=Math.max(-1,Math.min(1,b[V][D]));x.setInt16(I,R*32767,!0),I+=2}let C=new Uint8Array(x.buffer),U="";for(let D=0;D<C.length;D+=32768)U+=String.fromCharCode.apply(null,C.subarray(D,D+32768));return btoa(U)},e}function Xu(i,{off:t=!1}={}){let e=Math.random().toString(36).slice(2,8),n=performance.now(),s=[];addEventListener("error",o=>{s.push(String(o.message||"error").slice(0,110)),s.length>3&&s.shift()}),addEventListener("unhandledrejection",o=>{s.push(("rej "+(o.reason&&o.reason.message||o.reason)).slice(0,110)),s.length>3&&s.shift()});let r=o=>{let l=i();return{id:e,reason:o,up:(performance.now()-n)/1e3,ua:navigator.userAgent.slice(0,160),scr:{w:screen.width,h:screen.height,dpr:devicePixelRatio},vis:document.visibilityState,errs:s.slice(),...l,mem:{...l.mem||{},heap:performance.memory?performance.memory.usedJSHeapSize/1048576:void 0}}},a=o=>{if(t)return;let l=r(o),c=JSON.stringify(l);if(o==="start")try{let u=JSON.parse(localStorage.getItem("lg_diagLast")||"null");u&&u.reason!=="pagehide"&&(c=JSON.stringify({...l,prev:u}))}catch{}try{localStorage.setItem("lg_diagLast",JSON.stringify(l))}catch{}try{navigator.sendBeacon&&navigator.sendBeacon("/diag",new Blob([c],{type:"text/plain"}))||fetch("/diag",{method:"POST",body:c,keepalive:!0}).catch(()=>{})}catch{}};return setTimeout(()=>a("start"),4e3),setInterval(()=>a("tick"),3e4),document.addEventListener("visibilitychange",()=>{document.hidden&&a("hidden")}),addEventListener("pagehide",()=>a("pagehide")),{send:a,errs:s}}var qu=[["red",16731486],["orange",16752412],["gold",16765503],["lime",10216804],["green",3064446],["teal",2085313],["cyan",4114431],["blue",5078271],["purple",10182117],["pink",16740277],["white",15921906],["black",3816008],["brown",11037500],["silver",12109014],["rose",16748451]],ks=new Map(qu.map(([i,t])=>[i,t]));ks.set("yellow",16765503);ks.set("violet",10182117);ks.set("grey",12109014);ks.set("gray",12109014);function mx(i){let t=2166136261;for(let e of String(i))t^=e.codePointAt(0),t=Math.imul(t,16777619);return t>>>0}var Yu=i=>qu[mx(i)%10][1];function wc(i){let t=String(i||"").replace(/[\u0000-\u001f\u200b-\u200f\u202a-\u202e]/g,"").replace(/\s+/g," ").trim(),e=[...t];return(e.length>16?e.slice(0,15).join("")+"\u2026":t)||"Viewer"}var Bs=i=>String(i||"").toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}]/gu,""),Gr=[{id:"nuke",min:500,label:"STORM NUKE",icon:"\u2622\uFE0F",desc:"blows the storm back + meteor rain"},{id:"revive",min:100,label:"REVIVE",icon:"\u{1F496}",desc:"back from the dead / full heal + shield"},{id:"giant",min:30,label:"GIANT MODE",icon:"\u{1F996}",desc:"2x size, +HP, huge hits"},{id:"meteor",min:5,label:"METEOR STRIKE",icon:"\u2604\uFE0F",desc:"meteors smash your enemies"},{id:"speed",min:1,label:"SPEED BOOST",icon:"\u{1F339}",desc:"fast feet + small heal"}];function $u(i){let t=Number(i)||0;return Gr.find(e=>t>=e.min)||Gr[Gr.length-1]}var es={attack:/^(?:[⚔🗡🔪👊🥊]\uFE0F?\s*|(?:attack|atk|hit|kill|fight|punch|target|beat|smash)\s+)@?(.{1,40})$/iu,shield:/^(?:shield|block|defend|protect|🛡\uFE0F?)$/iu,dash:/^(?:dash|charge|rush|zoom|💨|⚡\uFE0F?)$/iu,dance:/^(?:dance|taunt|emote|gg|lol|💃|🕺|😂|🤣)$/iu,revenge:/^(?:revenge|payback|😡|🤬)$/iu,color:/^(?:colou?r|skin|paint)\s+([a-z]+)$/i,join:/^(?:join|play|me|in|i'?m in|let me in|go|🙋\u200d?[♀♂]?\uFE0F?|✋|🙋)$/iu};function Zu(i){let t=String(i||"").trim().replace(/\s+/g," ");if(!t)return{cmd:"none"};let e=t.toLowerCase().replace(/[!.?]+$/,"");if(es.shield.test(e))return{cmd:"shield"};if(es.dash.test(e))return{cmd:"dash"};if(es.dance.test(e))return{cmd:"dance"};if(es.revenge.test(e))return{cmd:"revenge"};if(es.join.test(e))return{cmd:"join"};let n=e.match(es.color);if(n&&ks.has(n[1]))return{cmd:"color",color:ks.get(n[1]),colorName:n[1]};if(n=t.match(es.attack),n){let s=n[1].replace(/^@/,"").trim();if(Bs(s))return{cmd:"attack",name:s}}return/^@[\w.]{2,}/.test(t)?{cmd:"attack",name:t.slice(1).split(" ")[0]}:{cmd:"chat"}}function Ju(i,t){let e=Bs(i);if(!e)return null;let n=null,s=0;for(let r of t){let a=Bs(r.name),o=Bs(r.uid||""),l=0;a===e||o===e?l=3:a.startsWith(e)||o.startsWith(e)?l=2:e.length>=3&&(a.includes(e)||o.includes(e))&&(l=1),l>s&&(s=l,n=r)}return n}var Yo=["Pixel","Mochi","Bolt","Nugget","Waffles","Ziggy","Pebble","Turbo","Biscuit","Gizmo","Noodle","Sprocket","Muffin","Rocket","Tofu","Dumpling","Jelly","Comet","Pickle","Bean","Sushi","Taco","Nacho","Boba"];var gx={lobbySeconds:20,ceremonySeconds:12,arenaCap:50,vipOverflow:10,minFighters:8,bots:!0,baseHp:150,platform:20,maxBattleSeconds:150,reinforceWindow:.4,botDamage:.85,damageMul:1,shrinkSeconds:0},Vr=(i,t,e)=>i<t?t:i>e?e:i,xx=(i,t,e)=>i+(t-i)*e,_x=i=>i*i*(3-2*i),Ku={2:"DOUBLE KILL",3:"TRIPLE KILL",4:"QUADRA KILL",5:"RAMPAGE"},Qu={3:"ON FIRE",5:"UNSTOPPABLE",8:"GODLIKE",12:"LEGENDARY"},Ve={alive:1,shield:2,speed:4,giant:8,rage:16,dash:32,dance:64,air:128,crown:256,cmd:512,low:1024,bot:2048},$o=class{constructor(t={},e=Math.random){this.o={...gx,...t},this.rng=e,this.t=0,this.people=new Map,this.fighters=new Map,this.byUid=new Map,this.queue=[],this.nextId=1,this.events=[],this.rosterAdd=[],this.rosterDel=[],this.meteors=[],this.likes=0,this.hype=0,this.round=0,this.results=[],this.botIdx=Math.floor(e()*Yo.length),this.enterLobby()}r(t=0,e=1){return t+(e-t)*this.rng()}emit(t){this.events.push(t),this.events.length>400&&this.events.splice(0,this.events.length-400)}drain(){let t=this.events;return this.events=[],t}drainRoster(){let t={add:this.rosterAdd,del:this.rosterDel};return this.rosterAdd=[],this.rosterDel=[],t}get alive(){let t=0;for(let e of this.fighters.values())e.alive&&t++;return t}get humans(){let t=0;for(let e of this.fighters.values())e.bot||t++;return t}aliveList(){return[...this.fighters.values()].filter(t=>t.alive)}person(t,e){let n=this.people.get(t);return n||(n={uid:t,name:wc(e||t),color:Yu(t),bot:t.startsWith("bot:"),wins:0,kills:0,games:0,best:0,bank:[],lastSeen:this.t,joinedAt:this.t},this.people.set(t,n)),e&&!n.bot&&(n.name=wc(e)),n.lastSeen=this.t,n}rosterEntry(t){return{id:t.id,name:t.name,color:t.color,bot:t.bot}}enterLobby(){for(let e of this.fighters.values())this.rosterDel.push(e.id);this.fighters.clear(),this.byUid.clear(),this.meteors=[],this.phase="lobby",this.phaseT=this.t,this.phaseEnd=this.t+this.o.lobbySeconds,this.round++,this.storm={r:this.o.platform*.9,target:this.o.platform*.9,R0:this.o.platform*.9,rf:3,push:0},this.firstBlood=!1,this.podium=null,this.winner=null,this.emit({k:"phase",ph:"lobby",round:this.round});let t=this.queue.filter(e=>{let n=this.people.get(e);return n&&this.t-n.lastSeen<600});this.queue=[];for(let e of t)this.seat(e,{quiet:!0})}startBattle(){if(this.fillBots(!0),this.alive<2){this.phaseEnd=this.t+5;return}let t=this.alive;this.phase="battle",this.phaseT=this.t;let e=Vr(8+Math.sqrt(t)*1.7,10,this.o.platform-1),n=this.o.shrinkSeconds||Vr(30+t*.9,38,95);this.storm={R0:e,r:e,target:e,rf:Vr(2.5+Math.sqrt(t)*.25,2.5,5),hold:6,shrink:n,push:0},this.phaseEnd=this.t+this.o.maxBattleSeconds,this.startN=t;let s=0;for(let r of this.fighters.values()){let a=s++/t*Math.PI*2+this.r(-.2,.2),o=e*this.r(.35,.85);r.x=Math.cos(a)*o,r.z=Math.sin(a)*o,r.vx=r.vz=0,r.hp=r.maxHp,r.danceUntil=0;let l=this.people.get(r.uid);l&&(l.games++,this.applyBank(r,l))}this.emit({k:"phase",ph:"battle",n:t})}endBattle(t){this.phase="ceremony",this.phaseT=this.t,this.phaseEnd=this.t+this.o.ceremonySeconds;let e=[...this.fighters.values()].sort((a,o)=>(a.place||999)-(o.place||999));t&&(t.place=1);let n=e.filter(a=>a.place).slice(0,3),s=[[0,1.5,0],[-2.1,1,.5],[2.1,.6,.5]];this.podium=n.map(a=>a.id);for(let a of this.fighters.values()){let o=this.podium.indexOf(a.id);o>=0?(a.alive=!0,a.x=s[o][0],a.y=s[o][1],a.z=s[o][2],a.face=Math.PI/2,a.vx=a.vz=0,a.hp=a.maxHp,a.danceUntil=this.t+99,a.shieldUntil=0,a.giantUntil=0,a.state="podium"):a.alive=!1}let r={round:this.round,at:this.t,players:[],winner:t?{uid:t.uid,name:t.name,bot:t.bot,kills:t.kills}:null};for(let a of this.fighters.values()){let o=this.people.get(a.uid);o&&(o.kills+=a.kills,o.best=Math.max(o.best,a.kills),a.place===1&&o.wins++,r.players.push({uid:a.uid,name:a.name,bot:a.bot,kills:a.kills,place:a.place||0}))}this.results.push(r),this.results.length>20&&this.results.shift(),this.lastResult=r,this.emit({k:"win",a:t?t.id:-1,top:this.podium,kills:t?t.kills:0,bot:t&&t.bot?1:0});for(let a of this.fighters.values())!a.bot&&!this.queue.includes(a.uid)&&this.queue.push(a.uid)}cap(){return this.o.arenaCap}seat(t,{vip:e=!1,quiet:n=!1,force:s=!1}={}){let r=this.people.get(t);if(!r)return"none";if(this.byUid.has(t)){let c=this.fighters.get(this.byUid.get(t));return c&&c.alive?"in":"dead"}let a=this.humans,o=a<this.cap()||e&&a<this.cap()+this.o.vipOverflow,l=this.phase==="lobby"||this.phase==="battle"&&(s||e||this.stormProgress()<this.o.reinforceWindow);return!o||!l?(this.queue.includes(t)||(e||r.follower||r.gifter?this.queue.unshift(t):this.queue.push(t)),n||this.emit({k:"queued",n:r.name,q:this.queue.length}),"queued"):(this.queue=this.queue.filter(c=>c!==t),r.bot||this.dropBot(),this.spawn(r,{drop:!0}),"in")}spawn(t,{drop:e=!1}={}){let n=this.nextId++,s=this.phase==="lobby"?this.lobbyRadius():this.storm.r*.8,r=this.r(0,Math.PI*2),a=Math.sqrt(this.rng())*s,o=this.o.baseHp+(t.follower?30:0),l={id:n,uid:t.uid,name:t.name,color:t.color,bot:t.bot,x:Math.cos(r)*a,y:e?14:0,z:Math.sin(r)*a,vx:0,vz:0,kx:0,kz:0,face:this.r(0,6.28),hp:o,maxHp:o,alive:!0,kills:0,streak:0,multi:0,lastKillT:-99,place:0,tgt:0,cmdTgt:0,cmdUntil:0,retargetAt:0,atkCd:this.r(.3,1),dashCd:0,dashUntil:0,shieldUntil:e?this.t+2:0,shieldCd:0,speedUntil:0,giantUntil:0,rageUntil:0,danceUntil:0,charge:0,lastHitBy:0,lastHitT:-99,dropUntil:e?this.t+1.1:0,cmdT:-99,botActT:this.t+this.r(4,10),wander:this.r(0,6.28)};return this.fighters.set(n,l),this.byUid.set(t.uid,n),this.rosterAdd.push(this.rosterEntry(l)),this.emit({k:"drop",a:n,bot:t.bot?1:0}),l}fillBots(t=!1){if(!this.o.bots||this.o.minFighters<=0)return;let e=this.o.minFighters,n=this.fighters.size;for(;n<e&&(t||this.phase==="lobby");){let s="Bot "+Yo[this.botIdx++%Yo.length],r="bot:"+Bs(s)+":"+this.round+":"+n,a=this.person(r,s);a.bot=!0,this.spawn(a,{drop:!0}),n++}}dropBot(){if(!(this.phase!=="lobby"||this.fighters.size<this.o.minFighters)){for(let t of this.fighters.values())if(t.bot){this.fighters.delete(t.id),this.byUid.delete(t.uid),this.people.delete(t.uid),this.rosterDel.push(t.id),this.emit({k:"poof",a:t.id});return}}}applyBank(t,e){for(let n of e.bank.splice(0))this.applyGift(t,e,n,!0)}lobbyRadius(){return Math.min(this.o.platform*.7,4+Math.sqrt(this.fighters.size+1)*.9)}input(t){if(!t||!t.uid)return{ok:!1,reason:"no-user"};let e=String(t.uid).slice(0,64);if(e.startsWith("bot:"))return{ok:!1,reason:"reserved"};let n=this.person(e,t.name);switch(t.type){case"chat":return this.onChat(n,String(t.text||""));case"gift":return this.onGift(n,t);case"like":return this.onLike(n,Number(t.count)||1);case"follow":return n.follower=!0,this.boostMaxHp(n,30),this.emit({k:"perk",n:n.name,perk:"follow"}),this.seat(e),{ok:!0};case"share":{n.sharer=!0;let s=this.fighterOf(n);return s&&s.alive?s.rageUntil=this.t+12:n.bank.push("rage"),this.emit({k:"perk",n:n.name,perk:"share",a:s?s.id:0}),this.seat(e),{ok:!0}}case"join":return{ok:!0,ignored:"join"};default:return{ok:!1,reason:"unknown-type"}}}fighterOf(t){let e=this.byUid.get(t.uid);return e?this.fighters.get(e):null}boostMaxHp(t,e){let n=this.fighterOf(t);n&&n.alive&&!n.followBoost&&(n.followBoost=!0,n.maxHp+=e,n.hp+=e)}onChat(t,e){let n=Zu(e),s=this.seat(t.uid);s==="in"&&this.fighterOf(t)?.y>1&&this.emit({k:"join",n:t.name,a:this.fighterOf(t).id});let a=this.fighterOf(t);if(!a||!a.alive)return{ok:!0,status:s,cmd:n.cmd};switch(a.cmdT=this.t,n.cmd){case"attack":{let o=this.aliveList().filter(c=>c.id!==a.id).map(c=>({name:c.name,uid:c.uid,o:c})),l=Ju(n.name,o);l?(a.cmdTgt=l.o.id,a.cmdUntil=this.t+12,a.tgt=l.o.id,this.emit({k:"cmd",c:"attack",a:a.id,b:l.o.id})):this.emit({k:"cmd",c:"miss",a:a.id});break}case"revenge":{let o=t.lastKiller?this.byUid.get(t.lastKiller):a.lastHitBy,l=o&&this.fighters.get(o);l&&l.alive&&l.id!==a.id&&(a.cmdTgt=l.id,a.cmdUntil=this.t+15,a.rageUntil=Math.max(a.rageUntil,this.t+4),this.emit({k:"cmd",c:"revenge",a:a.id,b:l.id}));break}case"shield":this.t>=a.shieldCd&&(a.shieldUntil=this.t+3.5,a.shieldCd=this.t+12,this.emit({k:"shield",a:a.id}));break;case"dash":this.dash(a);break;case"dance":a.danceUntil=this.t+2.2,this.emit({k:"dance",a:a.id});break;case"color":{t.color=n.color,a.color=n.color,this.rosterAdd.push(this.rosterEntry(a)),this.emit({k:"cmd",c:"color",a:a.id});break}}return{ok:!0,status:s,cmd:n.cmd}}dash(t){if(this.t<t.dashCd||t.dropUntil>this.t)return!1;let e=this.fighters.get(t.cmdTgt||t.tgt),n=e&&e.alive?Math.atan2(e.z-t.z,e.x-t.x):t.face;return t.face=n,t.dashUntil=this.t+.32,t.dashCd=this.t+6,t.dashHit=!1,t.kx=Math.cos(n)*17,t.kz=Math.sin(n)*17,this.emit({k:"dash",a:t.id}),!0}onLike(t,e){e=Vr(e,1,50),this.likes+=e,this.hype+=e;let n=this.fighterOf(t);if(n&&n.alive&&this.phase==="battle"){let s=Math.min(e,10);n.hp<n.maxHp&&(n.hp=Math.min(n.maxHp,n.hp+s),this.emit({k:"heal",a:n.id,v:s})),n.charge=Math.min(100,n.charge+e*4)}else n||this.seat(t.uid,{quiet:!0});if(this.hype>=300){this.hype-=300;let s=0;for(let r of this.fighters.values())r.alive&&!r.bot&&(r.hp=Math.min(r.maxHp,r.hp+20),s++);this.emit({k:"hype",likes:this.likes,healed:s})}return{ok:!0}}onGift(t,e){let n=(Number(e.coins)||1)*(Number(e.count)||1),s=$u(n);t.gifter=!0,t.coins=(t.coins||0)+n;let r=this.fighterOf(t);return r||(this.seat(t.uid,{vip:!0}),r=this.fighterOf(t),r&&this.emit({k:"join",n:t.name,a:r.id,vip:1})),this.emit({k:"gift",n:t.name,g:String(e.giftName||"Gift").slice(0,24),tier:s.id,coins:n,a:r?r.id:0}),this.phase!=="battle"?(r&&s.id==="speed"&&(r.speedUntil=this.t+8),r&&s.id==="giant"&&(r.giantUntil=this.t+6),t.bank.push(s.id),this.emit({k:"bank",n:t.name,tier:s.id}),{ok:!0,tier:s.id,banked:!0}):(this.applyGift(r,t,s.id,!1),{ok:!0,tier:s.id})}applyGift(t,e,n,s){let r=this.t;if(n==="rage"){t&&t.alive&&(t.rageUntil=r+12);return}if(n==="revive"&&t&&!t.alive&&this.phase==="battle"){t.alive=!0,t.hp=t.maxHp,t.place=0,t.y=14,t.dropUntil=r+1.1,t.shieldUntil=r+4;let a=this.r(0,6.28),o=this.storm.r*.5*Math.sqrt(this.rng());t.x=Math.cos(a)*o,t.z=Math.sin(a)*o,this.emit({k:"revive",a:t.id});return}if(!t||!t.alive){n==="meteor"||n==="nuke"?this.meteorShower(null,n==="nuke"?8:3,e.uid):e.bank.push(n);return}switch(n){case"speed":t.speedUntil=r+8,t.hp=Math.min(t.maxHp,t.hp+10);break;case"meteor":this.meteorShower(t,3);break;case"giant":t.giantUntil=r+15,t.maxHp+=50,t.hp=t.maxHp;break;case"revive":t.hp=t.maxHp,t.shieldUntil=r+6,t.giantUntil=Math.max(t.giantUntil,r+10);break;case"nuke":{let a=this.storm;a.push=Math.min(a.push+(a.R0-a.r)*.6+2,a.R0),t.giantUntil=r+15,t.shieldUntil=r+5,t.hp=t.maxHp,this.emit({k:"nuke",a:t.id}),this.meteorShower(t,8);break}}(!s||n!=="meteor")&&this.emit({k:"power",a:t.id,tier:n})}meteorShower(t,e,n){let s=this.aliveList().filter(r=>!t||r.id!==t.id);if(s.length){s.sort((r,a)=>t?Math.hypot(r.x-t.x,r.z-t.z)-Math.hypot(a.x-t.x,a.z-t.z):this.rng()-.5);for(let r=0;r<e;r++){let a=s[r%Math.min(s.length,Math.max(3,e))],o=a.x+this.r(-.8,.8),l=a.z+this.r(-.8,.8),c={x:o,z:l,at:this.t+1.1+r*.22,by:t?t.id:0,byUid:t?t.uid:n,dmg:34,r:2.4};this.meteors.push(c),this.emit({k:"meteor",x:+o.toFixed(2),z:+l.toFixed(2),d:+(c.at-this.t).toFixed(2),a:c.by})}}}stormProgress(){if(this.phase!=="battle")return 0;let t=this.storm,e=this.t-this.phaseT-t.hold;return Vr(e/t.shrink,0,1)}step(t){t=Math.min(t,.1),this.t+=t;let e=this.t;if(this.phase==="lobby"?(this.fillBots(),e>=this.phaseEnd&&this.startBattle()):this.phase==="ceremony"&&e>=this.phaseEnd&&this.enterLobby(),this.phase==="battle"&&this.updateStorm(t),this.updateFighters(t),this.phase==="battle"){this.updateMeteors(),this.reinforce();let n=this.aliveList();n.length<=1?this.endBattle(n[0]||null):e>=this.phaseEnd&&!this.suddenDeath&&(this.suddenDeath=!0,this.emit({k:"storm",msg:"sudden"}))}}updateStorm(t){let e=this.storm,n=this.t-this.phaseT,s=this.stormProgress();e.push=Math.max(0,e.push-t*.35);let r=xx(e.R0,e.rf,_x(s));n>e.hold+e.shrink&&(r=Math.max(.6,e.rf-(n-e.hold-e.shrink)*.12)),this.suddenDeath&&(r=Math.max(0,r-(this.t-this.phaseEnd)*.4)),e.target=r,e.r=Math.min(e.R0+.01,r+e.push),!e.warned&&n>e.hold-.1&&(e.warned=!0,this.emit({k:"storm",msg:"closing"})),!e.half&&s>.5&&(e.half=!0,this.emit({k:"storm",msg:"half"})),e.dps=5+11*s+(this.suddenDeath?15:0)}reinforce(){if(!this.queue.length||this.stormProgress()>=this.o.reinforceWindow||this.humans>=this.cap())return;let t=this.queue.shift();if(this.people.has(t)){this.seat(t,{quiet:!0,force:!0});let e=this.fighterOf(this.people.get(t));e&&this.emit({k:"join",n:e.name,a:e.id,late:1})}}pickTarget(t,e){if(t.cmdTgt&&this.t<t.cmdUntil){let a=this.fighters.get(t.cmdTgt);if(a&&a.alive)return a.id}t.cmdTgt=0;let n=0,s=1e9,r=this.storm.r;for(let a of e){if(a.id===t.id||!a.alive||a.dropUntil>this.t)continue;let o=(a.x-t.x)**2+(a.z-t.z)**2;a.x*a.x+a.z*a.z>r*r&&(o*=1.6),a.id===t.tgt&&(o*=.7),a.giantUntil>this.t&&(o*=1.3),o<s&&(s=o,n=a.id)}return n}updateFighters(t){let e=this.t,n=this.phase==="battle",r=[...this.fighters.values()].filter(l=>l.alive),a=this.storm.r,o=null;for(let l of r)l.kills>=2&&(!o||l.kills>o.kills)&&(o=l);this.crownId=o?o.id:0;for(let l of r){if(l.state==="podium")continue;l.y>0&&(l.y=Math.max(0,l.y-t*14*Math.max(.25,(l.dropUntil-e<.4,1))),l.y===0&&this.emit({k:"land",a:l.id}));let c=l.giantUntil>e,u=l.speedUntil>e,g=c?.75:.42,d=0,h=0,m=(u?5.6:3.4)*(c?.9:1);if(l.dropUntil>e){l.vx=l.vz=0;continue}let _=l.x*l.x+l.z*l.z;if(n){e>=l.retargetAt&&(l.tgt=this.pickTarget(l,r),l.retargetAt=e+.35+this.r(0,.25));let b=this.fighters.get(l.tgt);if(_>(a-.6)**2){let y=Math.sqrt(_)||1;d=-l.x/y,h=-l.z/y,m*=1.1}else if(b&&b.alive){let y=b.x-l.x,I=b.z-l.z,C=Math.hypot(y,I)||.001,U=(c?1.9:1.1)+(b.giantUntil>e?.5:0);l.face=Math.atan2(I,y),C>U*.9?(d=y/C,h=I/C):(d=-I/C*.25*Math.sin(e*2+l.id),h=y/C*.25*Math.sin(e*2+l.id),m*=.6),l.atkCd-=t,C<=U&&l.atkCd<=0&&l.danceUntil<e&&this.attack(l,b,C)}if(l.dashUntil>e&&!l.dashHit){for(let y of r)if(!(y.id===l.id||y.dropUntil>e)&&(y.x-l.x)**2+(y.z-l.z)**2<(g+.6)**2){l.dashHit=!0,this.damage(y,16,l,{kb:9,crit:!1,dash:!0});break}}if(l.charge>=100&&(l.charge=0,this.spin(l,r)),l.bot&&e>l.botActT&&(l.botActT=e+this.r(6,14),this.rng()<.5?this.dash(l):e>=l.shieldCd&&(l.shieldUntil=e+2.5,l.shieldCd=e+12,this.emit({k:"shield",a:l.id}))),_>a*a&&(l.stormAcc=(l.stormAcc||0)+this.storm.dps*t,l.stormAcc>=3)){let y=Math.floor(l.stormAcc);l.stormAcc-=y,this.damage(l,y,null,{storm:!0})}}else{l.wander+=this.r(-1,1)*t*2;let b=this.phase==="lobby"?this.lobbyRadius():4.5;_>b*b&&(l.wander=Math.atan2(-l.z,-l.x)),d=Math.cos(l.wander)*.45,h=Math.sin(l.wander)*.45,l.danceUntil>e&&(d=h=0),(d||h)&&(l.face=Math.atan2(h,d))}for(let b of r){if(b===l)continue;let x=l.x-b.x,y=l.z-b.z,I=x*x+y*y,C=g+(b.giantUntil>e?.75:.42);if(I<C*C&&I>1e-6){let U=Math.sqrt(I),D=(C-U)/C;d+=x/U*D*2.2,h+=y/U*D*2.2}}let p=d*m,f=h*m,v=Math.min(1,t*8);l.vx+=(p-l.vx)*v,l.vz+=(f-l.vz)*v,l.x+=(l.vx+l.kx)*t,l.z+=(l.vz+l.kz)*t;let w=Math.exp(-t*(l.dashUntil>e?1:7));l.kx*=w,l.kz*=w;let T=Math.hypot(l.x,l.z),A=this.o.platform-.5;T>A&&(l.x*=A/T,l.z*=A/T)}}attack(t,e,n){let s=this.t;t.atkCd=this.r(.95,1.35)*(t.speedUntil>s?.8:1);let r=this.r(5,8),a=this.rng()<.14;a&&(r*=1.9),t.giantUntil>s&&(r*=1.8),t.rageUntil>s&&(r*=1.6),t.bot&&(r*=this.o.botDamage),r*=this.o.damageMul,this.emit({k:"atk",a:t.id,b:e.id}),this.damage(e,Math.round(r),t,{crit:a,kb:(t.giantUntil>s?7:3.6)+(a?2:0)})}spin(t,e){this.emit({k:"spin",a:t.id});for(let n of e)n.id!==t.id&&(n.x-t.x)**2+(n.z-t.z)**2<2.8*2.8&&this.damage(n,22,t,{kb:8})}damage(t,e,n,{crit:s=!1,kb:r=0,storm:a=!1,meteor:o=!1,dash:l=!1,x:c,z:u}={}){let g=this.t;if(!(!t.alive||this.phase!=="battle"||t.dropUntil>g)){if(t.shieldUntil>g&&!a&&(e=Math.max(1,Math.round(e*.2)),this.emit({k:"block",a:t.id})),t.hp-=e,n&&(t.lastHitBy=n.id,t.lastHitT=g),r){let d=c??(n?n.x:0),h=u??(n?n.z:0),m=t.x-d,_=t.z-h,p=Math.hypot(m,_)||1,f=t.giantUntil>g?.35:1;t.kx+=m/p*r*f,t.kz+=_/p*r*f}(!a||e>=3)&&this.emit({k:"hit",a:n?n.id:0,b:t.id,d:e,c:s?1:0,s:a?1:0,m:o?1:0}),t.hp<=0&&this.ko(t,n,{storm:a,meteor:o})}}ko(t,e,{storm:n,meteor:s}){let r=this.t;t.alive=!1,t.hp=0,t.place=this.alive+1;let a=e;!a&&t.lastHitBy&&r-t.lastHitT<4&&(a=this.fighters.get(t.lastHitBy));let o=this.people.get(t.uid),l={k:"ko",a:a?a.id:0,b:t.id,s:n?1:0,m:s?1:0,left:this.alive};a&&a.id!==t.id&&(a.kills++,a.streak++,a.multi=r-a.lastKillT<4.5?a.multi+1:1,a.lastKillT=r,a.hp=Math.min(a.maxHp,a.hp+12),(o&&!a.bot||o)&&(o.lastKiller=a.uid),this.firstBlood||(this.firstBlood=!0,l.first=1),Ku[Math.min(5,a.multi)]&&a.multi>=2&&(l.multi=Ku[Math.min(5,a.multi)]),Qu[a.streak]&&(l.streak=Qu[a.streak]),t.giantUntil>r&&(l.giant=1),l.n=a.kills),this.emit(l)}updateMeteors(){let t=this.t;if(!this.meteors.length)return;let e=this.meteors.filter(n=>n.at<=t);if(e.length){this.meteors=this.meteors.filter(n=>n.at>t);for(let n of e){this.emit({k:"boom",x:+n.x.toFixed(2),z:+n.z.toFixed(2),r:n.r});let s=n.by?this.fighters.get(n.by):null;for(let r of this.aliveList()){if(s&&r.id===s.id||n.byUid&&r.uid===n.byUid)continue;let a=Math.hypot(r.x-n.x,r.z-n.z);a<n.r&&this.damage(r,Math.round(n.dmg*(1-a/n.r*.5)),s&&s.alive?s:null,{kb:9,meteor:!0,x:n.x,z:n.z})}}}}snapshot(){let t=this.t,e=[];for(let s of this.fighters.values()){if(!s.alive&&s.state!=="podium")continue;let r=Ve.alive;s.shieldUntil>t&&(r|=Ve.shield),s.speedUntil>t&&(r|=Ve.speed),s.giantUntil>t&&(r|=Ve.giant),s.rageUntil>t&&(r|=Ve.rage),s.dashUntil>t&&(r|=Ve.dash),s.danceUntil>t&&(r|=Ve.dance),s.y>.01&&(r|=Ve.air),s.id===this.crownId&&(r|=Ve.crown),t-s.cmdT<6&&(r|=Ve.cmd),s.hp<s.maxHp*.3&&(r|=Ve.low),s.bot&&(r|=Ve.bot),e.push(s.id,Math.round(s.x*100)/100,Math.round(s.y*100)/100,Math.round(s.z*100)/100,Math.round(s.face*100)/100,Math.round(100*s.hp/s.maxHp),r,Math.round(s.charge))}let n=this.phase==="battle"?Math.max(0,this.phaseT+this.storm.hold-t):Math.max(0,this.phaseEnd-t);return{tm:Math.round(t*1e3)/1e3,ph:this.phase,tl:Math.round(n*10)/10,r:Math.round(this.storm.r*100)/100,rt:Math.round(this.storm.target*100)/100,n:this.alive,q:this.queue.length,h:this.humans,likes:this.likes,hype:this.hype,round:this.round,podium:this.podium,f:e}}board(t=10){return[...this.people.values()].filter(e=>!e.bot&&(e.wins||e.kills)).sort((e,n)=>n.wins-e.wins||n.kills-e.kills).slice(0,t).map(e=>({name:e.name,wins:e.wins,kills:e.kills,games:e.games,color:e.color}))}prune(t=3600,e=2e3){if(this.people.size<=e)return 0;let n=0;for(let[s,r]of this.people)!this.byUid.has(s)&&this.t-r.lastSeen>t&&!r.wins&&(this.people.delete(s),n++);return n}};var zs=(i,t=Math.random)=>i[Math.floor(t()*i.length)%i.length];function ju({nameOf:i,rng:t=Math.random}){let e=[],n=0,s=99,r=(a,o,l,c={})=>({text:a,pri:o,banner:l||null,...c});return{lines(a,o){let l=[];for(let c of a){let u=c.a?i(c.a):null,g=c.b?i(c.b):null;switch(c.k){case"phase":c.ph==="lobby"&&(s=99,l.push(r(zs(["New round! Comment anything to drop into the arena!","Lobby is open! Type join to jump in!","Next battle starting soon. Comment to join the fight!"],t),5))),c.ph==="battle"&&l.push(r(zs([`Fight! ${c.n} fighters, only one survives!`,`Let the battle begin! ${c.n} fighters enter, one walks out!`,`Go go go! ${c.n} fighters in the arena!`],t),7,"FIGHT!"));break;case"storm":c.msg==="closing"&&l.push(r(zs(["The storm is closing in!","Watch out, the storm is moving!"],t),4,"STORM CLOSING")),c.msg==="half"&&l.push(r("Half the arena is gone!",3)),c.msg==="sudden"&&l.push(r("Sudden death! The storm swallows everything!",7,"SUDDEN DEATH"));break;case"ko":{if(c.left===1)break;c.first&&u?l.push(r(`First blood! ${u} takes out ${g}!`,6,"FIRST BLOOD")):c.multi&&u?l.push(r(`${u}, ${c.multi.toLowerCase()}!`,6,c.multi)):c.streak&&u?l.push(r(`${u} is ${c.streak.toLowerCase()}!`,6,c.streak)):c.giant&&u?l.push(r(`${u} took down a giant!`,6,"GIANT SLAYER")):c.s&&!u&&g&&c.left<=6&&l.push(r(`${g} got swallowed by the storm!`,3)),c.left===2?l.push(r("Final two! Who takes the crown?",7,"FINAL 2")):(c.left===3||c.left===5||c.left===10)&&c.left<s&&(s=c.left,l.push(r(c.left===3?"Final three!":`Only ${c.left} left!`,5,c.left===3?"FINAL 3":`${c.left} LEFT`)));break}case"gift":{let d=c.n,h={speed:[`${d} sent a ${c.g}! Speed boost!`,`Speed boost for ${d}! Thank you for the ${c.g}!`],meteor:[`Meteor strike from ${d}! Take cover!`,`${d} calls down the meteors!`],giant:[`${d} goes giant!`,`Uh oh, ${d} just went giant mode!`],revive:[`${d} with the revive! Thank you!`,`${d} rises again! Huge thanks!`],nuke:[`Storm nuke by ${d}! The storm gets blown away!`,`${d} nuked the storm! Everyone run!`]}[c.tier];h&&l.push(r(zs(h,t),{speed:4,meteor:7,giant:7,revive:8,nuke:9}[c.tier],{speed:null,meteor:"METEOR STRIKE",giant:"GIANT MODE",revive:"REVIVE",nuke:"STORM NUKE"}[c.tier],{gift:c.tier}));break}case"bank":break;case"perk":c.perk==="follow"&&l.push(r(`Thanks for the follow, ${c.n}! Extra armor for you!`,5)),c.perk==="share"&&l.push(r(`${c.n} shared the live! Rage mode, double damage!`,5));break;case"hype":l.push(r("Like rain! Every viewer fighter heals up!",4,"LIKE RAIN"));break;case"revive":break;case"join":c.vip||e.push(c.n);break;case"win":if(c.a>0){let d=u,h=!!c.bot;l.push(r(h?`${d} wins this time! Comment now and take the crown back!`:zs([`Winner winner! ${d} wins with ${c.kills} kills! Huge shoutout to ${d}!`,`${d} is the last one standing! What a champion!`,`Victory for ${d}! Everybody show ${d} some love!`],t),10,"WINNER",{win:1}))}else l.push(r("Nobody survived the storm! Next round!",10));break}}if(e.length&&o-n>5){n=o;let c=e.splice(0,50),u=c.slice(0,3),g=c.length-u.length,d=u.length===1?u[0]:u.slice(0,-1).join(", ")+" and "+u[u.length-1];l.push(r(g>0?`Welcome ${u.join(", ")} and ${g} more! Get ready to fight!`:zs([`Welcome ${d}! You are in the arena!`,`${d} just dropped in!`],t),3))}return l}}}var td=["Sara","Ali","Hina","Omar","Zara","Bilal","Noor","Ayan","Esha","Faraz","Iman","Junaid","Kinza","Laiba","Moiz","Nimra","Rida","Saad","Tania","Umer","Maya","Leo","Aisha","Yusuf","Lina","Kai","Mia","Zain","Sofia","Adam","Hamza","Amna","Riya","Dev","Luna","Max"],ed=["","_x","22",".official","_99","\u{1F338}","xo","_07",".live","\u2728","_pk","786"],nd=["hi","join","lets go","me!","hello from dubai","gg","this is fire","shield","dash","\u{1F4A8}","\u{1F6E1}\uFE0F","dance","color pink","color gold","revenge","wow","\u{1F525}\u{1F525}","i will win","play"],id=[["Rose",1],["TikTok",1],["Finger Heart",5],["GG",1],["Doughnut",30],["Hand Hearts",100],["Corgi",299],["Money Gun",500],["Lion",29999]];function sd(i="busy",t=Math.random){let e=c=>Math.floor(t()*c),n=[],s=()=>{let c=td[e(td.length)]+ed[e(ed.length)],u={uid:c.toLowerCase().replace(/[^\w.]/g,"")+n.length,name:c};return n.push(u),u},r=()=>n.length?n[e(n.length)]:s(),a=0,o=0,l=i==="quiet"?3:i==="gifts"?30:i==="demo"?40:220;return{people:n,tick(c){a+=c,o+=c;let u=[],g=i==="quiet"?.6:i==="busy"?Math.min(14,2+a/6):i==="demo"?5:4;for(;o>1/g;){o-=1/g;let h=n.length<Math.min(l,i==="busy"?10+a*2.5:l)&&t()<.6?s():r(),m=t();if(m<.5){let _=nd[e(nd.length)];if(t()<.25&&n.length>2){let p=r();p!==h&&(_=(t()<.5?"attack ":"\u2694\uFE0F ")+p.name.replace(/[^\w]/g,"").slice(0,6))}u.push({type:"chat",uid:h.uid,name:h.name,text:_})}else if(m<.8)u.push({type:"like",uid:h.uid,name:h.name,count:1+e(15)});else if(m<(i==="gifts"?.98:.9)){let _=t()<.75?id[e(4)]:id[4+e(i==="gifts"?4:3)];u.push({type:"gift",uid:h.uid,name:h.name,giftName:_[0],coins:_[1],count:t()<.2?1+e(5):1})}else m<.95?u.push({type:"follow",uid:h.uid,name:h.name}):u.push({type:"share",uid:h.uid,name:h.name})}return u}}}var Ye=new URLSearchParams(location.search),ue=i=>document.getElementById(i),il=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Gs=Ye.get("mode")==="phone"||Ye.get("mode")!=="pc"&&(il||/Android|Mobile/.test(navigator.userAgent)),An=Ye.get("render")==="1",Vs=An||Ye.get("local")==="1",Nc=Ye.get("key")||"",$r=Number(Ye.get("fps"))||(Gs?30:60),gd=Ye.get("mute")==="1";Ye.get("clean")==="1"&&document.body.classList.add("clean");var Hc=Gs?[{pr:1.5,maxW:780,maxChars:56,labels:24,particles:1,halos:!0,stars:!0},{pr:1.25,maxW:700,maxChars:44,labels:18,particles:.75,halos:!0,stars:!0},{pr:1,maxW:600,maxChars:34,labels:14,particles:.5,halos:!0,stars:!1},{pr:.8,maxW:480,maxChars:26,labels:10,particles:.35,halos:!1,stars:!1}]:[{pr:2,maxW:Number(Ye.get("maxw"))||1080,maxChars:64,labels:30,particles:1,halos:!0,stars:!0},{pr:1.5,maxW:900,maxChars:56,labels:24,particles:1,halos:!0,stars:!0},{pr:1,maxW:700,maxChars:40,labels:16,particles:.6,halos:!0,stars:!1},{pr:.8,maxW:540,maxChars:28,labels:12,particles:.4,halos:!1,stars:!1}],mn=Ye.has("q")?Math.max(0,Math.min(3,Number(Ye.get("q")))):0,vx=Ye.has("q"),ti=ue("gl"),fe=null,xd=0,_d=0,jo=[],Bi=!1,ns=ue("hud"),se=ns.getContext("2d");function vd(){if(!(Ye.get("view")==="2d"||localStorage.getItem("lg_force2d")==="1"))try{fe=Vu(ti,{maxChars:Hc[0].maxChars,particles:Gs?800:1200,aa:!Gs||il,preserve:An,floorSize:Gs?512:1024,platform:20}),ti.addEventListener("webglcontextlost",Zr,!1),ti.addEventListener("webglcontextrestored",yd,!1);return}catch{ei("gl-fail")}sl()}function sl(){if(fe&&fe.kind==="2d")return;try{fe&&fe.dispose(),fe&&fe.loseContext&&fe.loseContext()}catch{}let i=document.createElement("canvas");i.id="gl",ti.replaceWith(i),ti=i,fe=Hu(ti,{platform:20}),ei("view-2d"),ki()}function Zr(i){i.preventDefault(),xd++,Bi=!0,ei("ctx-lost"),jo.push(performance.now()),jo=jo.filter(t=>performance.now()-t<12e4),Cd("Graphics reset\u2026 recovering"),clearTimeout(Zr.t),Zr.t=setTimeout(()=>{Bi&&(localStorage.setItem("lg_force2d","1"),sl(),Bi=!1,nl())},4e3),Vc&&Vc.send("ctxlost")}function yd(){if(clearTimeout(Zr.t),_d++,ei("ctx-restored"),jo.length>=3){localStorage.setItem("lg_force2d","1"),sl(),Bi=!1,nl();return}try{fe.dispose()}catch{}ti.removeEventListener("webglcontextlost",Zr),ti.removeEventListener("webglcontextrestored",yd),fe=null,vd(),mn=Math.min(3,mn+1),ki(),Bi=!1,nl()}var Dc=390,Md=844;function ki(){let i=window.innerWidth,t=window.innerHeight,e=ue("stage"),n=i,s=t;i/t>.7&&(n=Math.round(Math.min(i,t*9/16)),s=Math.round(Math.min(t,n*16/9))),e.style.width=n+"px",e.style.height=s+"px",Dc=n,Md=s,document.documentElement.style.setProperty("--u",(n/100).toFixed(3)+"px");let r=Hc[mn],a=window.devicePixelRatio||1,o=Math.min(a,r.pr,r.maxW/n);fe&&(fe.resize(n,s,o),fe.setQuality(r));let l=Math.min(a,2,900/n);ns.width=Math.round(n*l),ns.height=Math.round(s*l),ns.__pr=l}addEventListener("resize",()=>{clearTimeout(ki.t),ki.t=setTimeout(ki,120)});var nn=Wu({record:An});nn.muted=gd;var Sd=ue("soundChip");function yx(){nn.unlock(),setTimeout(()=>{nn.state()==="running"&&(Sd.hidden=!0)},200)}["pointerdown","touchstart","click","keydown"].forEach(i=>addEventListener(i,yx,{passive:!0}));document.addEventListener("visibilitychange",()=>{document.hidden||nn.resume()});!An&&!gd&&(nn.unlock(),setTimeout(()=>{nn.state()!=="running"&&(Sd.hidden=!1)},700));var zi=new Map,tl=[],ei=i=>{tl.push(i),tl.length>8&&tl.shift()},ni={ws:0,snaps:0,ev:0,err:0,say:0},gn=[],yi=null,rd=0,ad="",Mx=null,Jr=Gr,Mi=null,Zo="",hn={phase:"lobby",fighters:[],r:18,rt:18,tl:0,n:0,q:0,round:0};function Uc(i=[],t=[]){for(let e of t)zi.delete(e);for(let e of i)zi.set(e.id,e)}var Gn=null,Hr=1e3;function Fc(){let i=(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws?game=br"+(Nc?"&key="+encodeURIComponent(Nc):"");try{Gn=new WebSocket(i)}catch{return setTimeout(Fc,Hr)}Gn.onopen=()=>{ni.ws++,Hr=1e3,ei("ws-open"),nl();try{let t=JSON.parse(localStorage.getItem("lg_brBoard")||"null");t&&t.json&&t.sig&&Gn.send(JSON.stringify({t:"restore",json:t.json,sig:t.sig}))}catch{}},Gn.onmessage=t=>{let e;try{e=JSON.parse(t.data)}catch{return}Sx(e)},Gn.onclose=()=>{Gn=null,ei("ws-close"),setTimeout(Fc,Hr),Hr=Math.min(1e4,Hr*1.7),ni.ws&&Cd("Reconnecting\u2026")},Gn.onerror=()=>{}}function Sx(i){switch(i.t){case"hello":zi.clear(),Uc(i.roster),gn=[],yi=null,Jr=i.tiers||Jr,Ed(),dd(i),od(i.snap);break;case"roster":Uc(i.add,i.del);break;case"s":od(i);break;case"say":Ad(i.text,i.url,i.dur);break;case"banner":wd(i.text);break;case"board":dd(i);break;case"status":Zo=i.tiktok?.state||"",ue("conn").className=Zo==="connected"?"connected":/wait|connecting|reconnect/.test(Zo)?"waiting":Zo==="error"?"error":"",kx(i.tiktok);break}}function od(i){if(!i)return;ni.snaps++;let e=performance.now()/1e3-i.tm;yi===null||e<yi||Math.abs(e-yi)>2?yi=e:yi+=(e-yi)*.02,gn.length&&i.tm<gn[gn.length-1].tm-1&&(gn=[],yi=e),gn.push({tm:i.tm,s:i,done:!1}),gn.length>40&&gn.shift()}var bx=.16;function Tx(i){if(!gn.length)return hn;let t=i-yi-bx;for(let r of gn)if(!r.done&&r.tm<=t){r.done=!0;let a=t-r.tm>1.2;for(let o of r.s.ev||[])Td(o,a)}let e=gn[0],n=null;for(let r=0;r<gn.length;r++)if(gn[r].tm<=t)e=gn[r];else{n=gn[r];break}if(!n||n===e)return Oc(e.s,null,0);let s=Math.max(0,Math.min(1,(t-e.tm)/Math.max(.001,n.tm-e.tm)));return Oc(e.s,n.s,s)}var ld=[];function Oc(i,t,e){let n=[],s=new Map;if(t)for(let o=0;o<t.f.length;o+=8)s.set(t.f[o],o);let r=0;for(let o=0;o<i.f.length;o+=8){let l=i.f[o],c=ld[r]||(ld[r]={});r++,c.id=l,c.x=i.f[o+1],c.y=i.f[o+2],c.z=i.f[o+3],c.face=i.f[o+4],c.hp=i.f[o+5],c.flags=i.f[o+6],c.charge=i.f[o+7];let u=s.get(l);if(u!==void 0&&t){let g=t.f;c.x+=(g[u+1]-c.x)*e,c.y+=(g[u+2]-c.y)*e,c.z+=(g[u+3]-c.z)*e;let d=g[u+4]-c.face;d=Math.atan2(Math.sin(d),Math.cos(d)),c.face+=d*e}c.info=zi.get(l)||{name:"?",color:16777215},n.push(c)}let a=t&&e>.5?t:i;return a.ph!==ad&&(ad=a.ph,rd=performance.now()/1e3),hn={phase:a.ph,fighters:n,r:t?i.r+(t.r-i.r)*e:i.r,rt:a.rt,tl:a.tl,n:a.n,q:a.q,h:a.h,round:a.round,hype:a.hype,podium:a.podium,phaseStart:rd},Mx=a,hn}var Si=null,Bc=null,bd=null,Oi=[],cd=0,kc=0;function wx(){let i={};for(let n of["lobbySeconds","minFighters","arenaCap","ceremonySeconds","damageMul","shrinkSeconds"])Ye.has(n)&&(i[n]=Number(Ye.get(n)));let t=Number(Ye.get("seed")||7),e=()=>(t=t*16807%2147483647,(t-1)/2147483646);Si=new $o(i,An?e:Math.random),bd=ju({nameOf:n=>Si.fighters.get(n)?.name||null,rng:An?e:Math.random}),Ye.get("crowd")&&(Bc=sd(Ye.get("crowd"),An?e:Math.random)),window.__input=n=>Si.input(n)}var Ac=0;function Ax(i,t){if(Bc)for(let r of Bc.tick(i))Si.input(r);for(Ac+=i;Ac>=.05;)Ac-=.05,Si.step(.05);let e=Si.drainRoster();Uc(e.add,e.del);let n=Si.drain();for(let r of bd.lines(n,Si.t))Ex(r,t);let s=Si.snapshot();for(let r of n)Td(r,!1);return Oc(s,null,0)}function Ex(i,t){i.banner&&wd(i.banner);let e={...i,at:t,p:null};for(e.p=fetch("/api/say?text="+encodeURIComponent(i.text)).then(n=>n.json()).catch(()=>({url:null})),kc++,e.p.finally(()=>kc--),Oi.push(e),Oi.sort((n,s)=>s.pri-n.pri||n.at-s.at);Oi.length>3;)Oi.pop()}async function Xr(i){if(i<cd||!Oi.length||Xr.busy)return;let t=Oi.shift();if(!t.win&&i-t.at>(t.pri>=7?9:6))return;Xr.busy=!0;let e=await t.p;Xr.busy=!1;let n=An?is:performance.now()/1e3,s=e.dur||Math.min(4,.9+t.text.length/16);Ad(t.text,e.url,s),cd=n+s+.25}var zc=i=>zi.get(i)?.name||"?",Gc=i=>"#"+((zi.get(i)?.color??16777215)>>>0).toString(16).padStart(6,"0"),jn=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),qr=[];function Td(i,t){if(ni.ev++,!t&&fe&&!Bi)try{fe.fx(i,hn)}catch{ni.err++}let e=(n,s)=>{t||nn.sfx(n,nn.now(),s)};switch(i.k){case"hit":{if(e(i.c?"crit":"punch",i.s?.5:1),!t&&qr.length<32){let n=hn.fighters.find(s=>s.id===i.b);n&&qr.push({x:n.x,y:n.y,z:n.z,v:i.d,c:i.c,s:i.s,t0:Cx()})}break}case"block":e("block");break;case"ko":e("ko"),Px(i);break;case"dash":e("dash");break;case"shield":e("shield");break;case"spin":e("spin");break;case"heal":e("heal");break;case"land":e("land",.6);break;case"meteor":e("whistle");break;case"boom":e("boom");break;case"nuke":e("nuke"),Lx();break;case"power":case"revive":e("power");break;case"gift":e("coin"),Jo(i.tier,`${Rx(i.tier)} ${jn(i.n)} sent ${jn(i.g)}`,`\u2192 ${Ix(i.tier)}${hn.phase!=="battle"?" \u23F3":""}`);break;case"perk":e("power"),Jo("perk",i.perk==="follow"?`\u2795 ${jn(i.n)} followed`:`\u{1F501} ${jn(i.n)} shared`,i.perk==="follow"?"\u2192 +30 armor":"\u2192 RAGE MODE");break;case"hype":e("heal"),e("cheer"),Jo("perk","\u2764\uFE0F LIKE RAIN!","every viewer fighter heals");break;case"phase":i.ph==="battle"&&(e("go"),ue("feed").innerHTML=""),i.ph==="lobby"&&(ue("winner").hidden=!0);break;case"win":e("fanfare"),Nx(i);break;case"join":i.vip&&!t&&Jo("perk",`\u2B50 ${jn(i.n)} VIP drop-in!`,"gifts skip the queue");break}i.k!=="hit"&&i.k!=="atk"&&ei(i.k)}function Cx(){return An?is:performance.now()/1e3}var Rx=i=>(Jr.find(t=>t.id===i)||{}).icon||"\u{1F381}",Ix=i=>(Jr.find(t=>t.id===i)||{}).label||i;function Px(i){let t=document.createElement("div");t.className="k";let e=`<span style="color:${Gc(i.b)}">${jn(zc(i.b))}</span>`;t.innerHTML=i.a?`<span style="color:${Gc(i.a)}">${jn(zc(i.a))}</span> ${i.m?"\u2604\uFE0F":"\u{1F94A}"} ${e}${i.multi?" <b>\xD7"+i.multi.split(" ")[0]+"</b>":""}`:`\u{1F300} ${e}`;let n=ue("feed");for(n.prepend(t);n.children.length>3;)n.lastChild.remove()}function Jo(i,t,e){let n=document.createElement("div");n.className="t "+i,n.innerHTML=`${t}<small>${e}</small>`;let s=ue("toasts");for(s.prepend(n);s.children.length>2;)s.lastChild.remove();Wc(()=>n.remove(),3600)}var hd=0;function wd(i){let t=ue("banner");t.hidden=!1,t.classList.remove("show"),t.offsetWidth,t.textContent=i,t.classList.add("show"),clearTimeout(hd),hd=Wc(()=>{t.hidden=!0},1650)}function Lx(){let i=ue("flash");i.style.transition="none",i.style.opacity="0.85",i.offsetWidth,i.style.transition="opacity 0.8s ease-out",i.style.opacity="0"}var ud=0;function Ad(i,t,e){ni.say++;let n=ue("say");n.hidden=!1,n.innerHTML=`<span>${jn(i)}</span>`,clearTimeout(ud),ud=Wc(()=>{n.hidden=!0},Math.max(1800,(e||2)*1e3+600)),t&&nn.voice(t,e)}function Nx(i){let t=ue("winner");i.a>0?(ue("winName").textContent=zc(i.a),ue("winName").style.color=Gc(i.a),ue("winSub").textContent=`${i.kills} kill${i.kills===1?"":"s"} \xB7 ${zi.get(i.a)?.bot?"bots win this time \u2013 comment to take it back!":"GG! Shoutout! \u{1F389}"}`):(ue("winName").textContent="The storm",ue("winName").style.color="#d08cff",ue("winSub").textContent="nobody survived!"),t.hidden=!1,t.style.animation="none",t.offsetWidth,t.style.animation=""}function Ed(){ue("gifts").innerHTML=[...Jr].reverse().map(i=>`<div><span>${i.icon} ${jn(i.label.replace("STORM ","").replace(" STRIKE","").replace(" MODE","").replace(" BOOST",""))}</span><b>${i.min}\u{1FA99}</b></div>`).join("")}function dd(i){if(!(!i||!i.session&&!i.all)&&(Mi=i,i.signed))try{localStorage.setItem("lg_brBoard",JSON.stringify(i.signed))}catch{}}var Ec=0,fd=0;function Dx(i){let t=hn.phase!=="battle",e=ue("board");if(e.hidden=!t,!t||!Mi)return;i-fd>7&&(fd=i,Ec^=1);let n=(Ec&&Mi.all&&Mi.all.length?Mi.all:Mi.session)||[],s=Ec&&Mi.all&&Mi.all.length?"\u{1F451} ALL-TIME LEGENDS":"\u{1F3C6} TODAY'S CHAMPS",r=n.length?n.slice(0,5).map(o=>`<li><span class="nm">${jn(o.name)}</span><span class="sc">${o.wins}\u{1F3C6} ${o.kills}\u2694\uFE0F</span></li>`).join(""):"",a=s+r;e.__k!==a&&(e.__k=a,ue("boardTitle").textContent=s,ue("boardList").innerHTML=r||'<div class="empty">No winners yet \u2013 comment to be the first! \u{1F451}</div>')}function Ux(i){let t=ns.__pr||1,e=Dc/100;if(se.setTransform(1,0,0,1,0,0),se.clearRect(0,0,ns.width,ns.height),se.setTransform(t,0,0,t,0,0),!fe||Bi)return;let n=fe.drawn()||hn.fighters,s=Hc[mn],r=n.filter(c=>c.flags&Ve.alive).map(c=>({f:c,s:(c.flags&Ve.cmd?8:0)+(c.flags&Ve.crown?6:0)+(c.flags&Ve.giant?4:0)+(c.flags&Ve.bot?0:3)+(100-c.hp)*.01}));r.sort((c,u)=>u.s-c.s);let a=r.length>16,o=Math.round(e*(a?2.7:3.1));se.textAlign="center",se.textBaseline="middle",se.lineJoin="round";let l=[];for(let{f:c}of r.slice(0,s.labels)){let u=fe.project(c.x,c.y+fe.headY(c),c.z);if(!u.ok||u.x<-40||u.x>Dc+40||u.y<0||u.y>Md||l.some(T=>Math.abs(T.x-u.x)<e*9&&Math.abs(T.y-u.y)<e*4))continue;l.push(u);let g=c.info||{},d=c.flags&Ve.bot,h=(d?"\u{1F916} ":c.flags&Ve.crown?"\u{1F451} ":"")+g.name;se.font=`800 ${o}px -apple-system, "Segoe UI", Roboto, sans-serif`;let m=Math.min(se.measureText(h).width,e*30),_=o*1.35,p=u.y-_*.9;se.fillStyle=d?"rgba(40,40,60,0.72)":"rgba(14,6,34,0.78)",Ko(u.x-m/2-e*1.4,p-_/2,m+e*2.8,_,_/2),se.fill(),se.fillStyle="#"+((g.color??16777215)>>>0).toString(16).padStart(6,"0"),Ko(u.x-m/2-e*1.4,p-_/2,e*.9,_,e*.45),se.fill(),se.fillStyle=d?"#c8c8d8":"#fff",se.fillText(h,u.x+e*.2,p+1,e*30);let f=Math.max(e*9,m*.8),v=e*1,w=p+_/2+e*.5;se.fillStyle="rgba(0,0,0,0.6)",Ko(u.x-f/2-1,w-1,f+2,v+2,v),se.fill(),se.fillStyle=c.hp>55?"#3ee07a":c.hp>28?"#ffd23f":"#ff4d5e",Ko(u.x-f/2,w,f*Math.max(0,c.hp)/100,v,v/2),se.fill(),c.charge>0&&(se.fillStyle="#ffcf3a",se.fillRect(u.x-f/2,w+v+1.5,f*c.charge/100,e*.45))}for(let c=qr.length-1;c>=0;c--){let u=qr[c],g=(i-u.t0)/.85;if(g>=1||g<0){qr.splice(c,1);continue}let d=fe.project(u.x,u.y+1.2,u.z);if(!d.ok)continue;let h=1+.9*Math.pow(Math.max(0,1-g*4),2),m=e*(u.c?6.2:u.s?3:4.2)*h;se.font=`900 ${m}px -apple-system, "Segoe UI", Roboto, sans-serif`,se.globalAlpha=Math.min(1,(1-g)*2.2);let _=d.y-g*e*9,p=d.x+(u.c?0:(u.v*7%5-2)*e);se.lineWidth=m*.18,se.strokeStyle="rgba(40,0,40,0.85)",se.strokeText(u.c?u.v+"!":u.v,p,_),se.fillStyle=u.c?"#ffe03a":u.s?"#d59bff":"#ffffff",se.fillText(u.c?u.v+"!":u.v,p,_)}se.globalAlpha=1}function Ko(i,t,e,n,s){se.beginPath(),se.moveTo(i+s,t),se.arcTo(i+e,t,i+e,t+n,s),se.arcTo(i+e,t+n,i,t+n,s),se.arcTo(i,t+n,i,t,s),se.arcTo(i,t,i+e,t,s),se.closePath()}var Cc=-1;function Fx(i){let t=hn,e=ue("pill"),n="";t.phase==="lobby"?n=`ROUND ${t.round} \xB7 STARTS IN ${Math.ceil(t.tl)}s \xB7 ${t.fighters.length} IN`:t.phase==="battle"?n=`\u2694\uFE0F ${t.n} ALIVE \xB7 ${t.tl>0?"storm in "+Math.ceil(t.tl)+"s":"\u{1F300} STORM CLOSING"}`:n=`\u{1F3C6} ROUND ${t.round} WINNER`,e.__t!==n&&(ue("pillTxt").textContent=n,e.__t=n),e.className=t.phase;let s=ue("queue");s.hidden=!(t.q>0),t.q>0&&(s.textContent=`+${t.q} waiting for the next round`),ue("likeN").textContent=t.hype||0,ue("likeBar").style.width=Math.min(100,(t.hype||0)/300*100)+"%";let r=ue("count");if(t.phase==="lobby"&&t.tl<=5&&t.tl>0){let a=Math.ceil(t.tl);a!==Cc&&(Cc=a,r.hidden=!1,r.textContent=a,r.classList.remove("tick"),r.offsetWidth,r.classList.add("tick"),nn.sfx("beep"))}else r.hidden||(r.hidden=!0),Cc=-1;t.phase!=="ceremony"&&(ue("winner").hidden=!0),Dx(i)}var el=[];function Wc(i,t){if(!An)return setTimeout(i,t);let e={at:is+t/1e3,fn:i};return el.push(e),e}function Ox(){for(let i=el.length-1;i>=0;i--)el[i].at<=is&&el.splice(i,1)[0].fn()}function Cd(i){let t=ue("notice");t.textContent=i,t.hidden=!1}function nl(){ue("notice").hidden=!0}var Wr=0,Rc=0,Ic=0,Yr=0,Pc=0,Qo=0,pd=0,Lc=new Map;function Rd(i,t){if(Vs?hn=Ax(i,t):hn=Tx(t),Vs&&Xr(t),fe&&!Bi)try{fe.frame(hn,i,t)}catch{ni.err++,ei("frame-err"),ni.err>30&&sl()}Ux(t),t-pd>.25&&(pd=t,Fx(t))}function Bx(i){Rc++,!(i-Ic<2)&&(Yr=Rc/(i-Ic),Rc=0,Ic=i,!(vx||An||document.hidden)&&(i<6||(Yr<$r*.8&&mn<3?++Pc>=2&&(Lc.set(mn,(Lc.get(mn)||0)+1),mn++,Pc=0,Qo=0,ki(),ei("q"+mn)):(Pc=0,Yr>=$r*.95&&mn>0&&(Lc.get(mn-1)||0)<2?++Qo>=6&&(mn--,Qo=0,ki(),ei("q"+mn)):Qo=0))))}function Id(i){if(requestAnimationFrame(Id),document.hidden)return;let t=i/1e3;if(Wr&&t-Wr<1/$r-.004)return;let e=Math.min(.1,Wr?t-Wr:1/$r);Wr=t,Rd(e,t),Bx(t)}var is=0;An&&(nn.clock=()=>is,window.__render={async frame(i){is+=i,Ox();for(let t=0;t<100&&(Xr.busy||Oi.length&&Oi[0].p&&kc);t++)await new Promise(e=>setTimeout(e,30));return Rd(i,is),{phase:hn.phase,n:hn.n,fighters:hn.fighters.length}},mix:i=>nn.mix(i),stats:()=>fe.stats()});var md=!1;function kx(i){if(md||il||Vs||!Nc||!i||!/tikfinity|both/.test(i.source||""))return;md=!0;let t=document.createElement("script");t.src="/shared/tikfinity.js",t.onload=()=>{let e=window.TikFinity;e.setSink(n=>{!Gn||Gn.readyState!==1||(n.type==="status"?Gn.send(JSON.stringify({t:"tf-status",state:n.mode==="live"?"connected":"waiting",message:n.message})):Gn.send(JSON.stringify({t:"tf",ev:n})))}),e.connect()},document.head.appendChild(t)}var Vc=null;vd();ki();Ed();Vs?(wx(),Mi={session:[],all:[]}):Fc();An||(requestAnimationFrame(Id),setInterval(()=>{!document.hidden&&!Vs&&fetch("/healthz?overlay=1",{cache:"no-store"}).catch(()=>{})},4*6e4),Vc=Xu(()=>({mode:{phone:Gs,ios:il,kind:fe?fe.kind:"none",game:"br",q:mn,fps:Math.round(Yr*10)/10,cap:$r},cv:{w:ti.width,h:ti.height},gl:{...fe?fe.stats():{},lost:xd,restored:_d},n:{...ni},last:tl.slice(),audio:{unlocked:nn.state()==="running",ctx:nn.state(),played:nn.played,fails:nn.fails}}),{off:Ye.get("diag")==="0"||Vs}));window.__br={get world(){return hn},get level(){return mn},get fps(){return Yr},get view(){return fe},stats:()=>fe?fe.stats():null,N:ni,audio:nn,roster:zi};})();
