(()=>{var Dd=0,Zh=1,Nd=2;var Ao=1,Fd=2,_a=3,Xi=0,On=1,un=2,Tr=0,Ws=1,Yn=2,$h=3,Qh=4,kd=5;var Ar=100,Ud=101,Od=102,Bd=103,zd=104,Gd=200,Hd=201,Vd=202,Wd=203,eu=204,tu=205,qd=206,Xd=207,jd=208,Kd=209,Jd=210,Yd=211,Zd=212,$d=213,Qd=214,Ac=0,Ec=1,Rc=2,sa=3,Cc=4,Pc=5,Ic=6,Lc=7,$c=0,ep=1,tp=2,ji=0,nu=1,iu=2,su=3,Eo=4,ru=5,au=6,ou=7,Hh="attached",np="detached",cu=300,Er=301,va=302,Qc=303,el=304,Os=1e3,pi=1001,ra=1002,$t=1003,tl=1004;var Rr=1005;var bn=1006,ya=1007;var xi=1008;var si=1009,lu=1010,hu=1011,Ma=1012,nl=1013,Ii=1014,li=1015,Li=1016,il=1017,sl=1018,Cr=1020,uu=35902,fu=35899,du=1021,pu=1022,_i=1023,ds=1026,Ss=1027,Sa=1028,rl=1029,qs=1030,al=1031;var ol=1033,Ro=33776,Co=33777,Po=33778,Io=33779,cl=35840,ll=35841,hl=35842,ul=35843,fl=36196,dl=37492,pl=37496,ml=37488,gl=37489,Lo=37490,bl=37491,xl=37808,_l=37809,vl=37810,yl=37811,Ml=37812,Sl=37813,wl=37814,Tl=37815,Al=37816,El=37817,Rl=37818,Cl=37819,Pl=37820,Il=37821,Ll=36492,Dl=36494,Nl=36495,Fl=36283,kl=36284,Do=36285,Ul=36286,wa=2200,Pr=2201,ip=2202,fr=2300,dr=2301,wc=2302,Vh=2303,lr=2400,hr=2401,Ya=2402,Ol=2500,sp=2501,mu=0,No=1,Ta=2,rp=3200;var Aa=0,ap=1,ws="",Ht="srgb",jn="srgb-linear",Za="linear",wt="srgb";var Tc=7680;var op=519,cp=512,lp=513,hp=514,gu=515,up=516,fp=517,bu=518,xu=519,_u=35044;var vu="300 es",mi=2e3,aa=2001;function l0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function h0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function oa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dp(){let s=oa("canvas");return s.style.display="block",s}var jf={},ca=null;function $a(...s){let e="THREE."+s.shift();ca?ca("log",e,...s):console.log(e,...s)}function pp(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ve(...s){s=pp(s);let e="THREE."+s.shift();if(ca)ca("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function $e(...s){s=pp(s);let e="THREE."+s.shift();if(ca)ca("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ur(...s){let e=s.join(" ");e in jf||(jf[e]=!0,Ve(...s))}function mp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var gp={[Ac]:Ac,[Rc]:Ic,[Cc]:Cc,[sa]:Pc,[Ec]:Ec,[Ic]:Rc,[Lc]:Lc,[Pc]:sa},Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kf=1234567,Ka=Math.PI/180,pr=180/Math.PI;function Ki(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toLowerCase()}function dt(s,e,t){return Math.max(e,Math.min(t,s))}function yu(s,e){return(s%e+e)%e}function u0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function f0(s,e,t){return s!==e?(t-s)/(e-s):0}function Ja(s,e,t){return(1-t)*s+t*e}function d0(s,e,t,n){return Ja(s,e,1-Math.exp(-t*n))}function p0(s,e=1){return e-Math.abs(yu(s,e*2)-e)}function m0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function g0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function b0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function x0(s,e){return s+Math.random()*(e-s)}function _0(s){return s*(.5-Math.random())}function v0(s){s!==void 0&&(Kf=s);let e=Kf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function y0(s){return s*Ka}function M0(s){return s*pr}function S0(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function w0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Mu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function T0(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),u=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*d,c*f,o*l);break;case"YZY":s.set(c*f,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*f,o*h,o*l);break;case"XZX":s.set(o*h,c*p,c*u,o*l);break;case"YXY":s.set(c*u,o*h,c*p,o*l);break;case"ZYZ":s.set(c*p,c*u,o*h,o*l);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bl(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Su(s,e){if(e.constructor===Float32Array)return s;let t=Bl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function wu(s,e){if(e.constructor===Float32Array)return s;let t=Bl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var zl={DEG2RAD:Ka,RAD2DEG:pr,generateUUID:Ki,clamp:dt,euclideanModulo:yu,mapLinear:u0,inverseLerp:f0,lerp:Ja,damp:d0,pingpong:p0,smoothstep:m0,smootherstep:g0,randInt:b0,randFloat:x0,randFloatSpread:_0,seededRandom:v0,degToRad:y0,radToDeg:M0,isPowerOfTwo:S0,ceilPowerOfTwo:w0,floorPowerOfTwo:Mu,setQuaternionFromProperEuler:T0,normalize:wu,denormalize:Su},Cu=class Cu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cu.prototype.isVector2=!0;var Qe=Cu,Pn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],f=r[a+0],u=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||c!==f||l!==u||h!==p){let m=c*f+l*u+h*p+d*x;m<0&&(f=-f,u=-u,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){let v=Math.acos(m),M=Math.sin(v);g=Math.sin(g*v)/M,o=Math.sin(o*v)/M,c=c*g+f*o,l=l*g+u*o,h=h*g+p*o,d=d*g+x*o}else{c=c*g+f*o,l=l*g+u*o,h=h*g+p*o,d=d*g+x*o;let v=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=v,l*=v,h*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],f=r[a+1],u=r[a+2],p=r[a+3];return e[t]=o*p+h*d+c*u-l*f,e[t+1]=c*p+h*f+l*d-o*u,e[t+2]=l*p+h*u+o*f-c*d,e[t+3]=h*p-o*d-c*f-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),f=c(n/2),u=c(i/2),p=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d+f*u*p;break;case"YZX":this._x=f*h*d+l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d-f*u*p;break;case"XZY":this._x=f*h*d-l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d+f*u*p;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-i)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+l)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(r-l)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Pu=class Pu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xh.copy(this).projectOnVector(e),this.sub(xh)}reflect(e){return this.sub(xh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pu.prototype.isVector3=!0;var z=Pu,xh=new z,Jf=new Pn,Iu=class Iu{constructor(e,t,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],x=i[0],m=i[3],g=i[6],v=i[1],M=i[4],_=i[7],w=i[2],y=i[5],b=i[8];return r[0]=a*x+o*v+c*w,r[3]=a*m+o*M+c*y,r[6]=a*g+o*_+c*b,r[1]=l*x+h*v+d*w,r[4]=l*m+h*M+d*y,r[7]=l*g+h*_+d*b,r[2]=f*x+u*v+p*w,r[5]=f*m+u*M+p*y,r[8]=f*g+u*_+p*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*r,u=l*r-a*c,p=t*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(i*l-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-o*t)*x,e[6]=u*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_h.makeScale(e,t)),this}rotate(e){return ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_h.makeRotation(-e)),this}translate(e,t){return ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_h.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Iu.prototype.isMatrix3=!0;var et=Iu,_h=new et,Yf=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zf=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A0(){let s={enabled:!0,workingColorSpace:jn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===wt&&(i.r=fs(i.r),i.g=fs(i.g),i.b=fs(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===wt&&(i.r=ia(i.r),i.g=ia(i.g),i.b=ia(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ws?Za:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[jn]:{primaries:e,whitePoint:n,transfer:Za,toXYZ:Yf,fromXYZ:Zf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:Yf,fromXYZ:Zf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),s}var ht=A0();function fs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ia(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Vr,Dc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vr===void 0&&(Vr=oa("canvas")),Vr.width=e.width,Vr.height=e.height;let i=Vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=oa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=fs(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fs(t[n]/255)*255):t[n]=fs(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},E0=0,la=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(vh(i[a].image)):r.push(vh(i[a]))}else r=vh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function vh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Dc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var R0=0,yh=new z,xn=class s extends Ri{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=pi,i=pi,r=bn,a=xi,o=_i,c=si,l=s.DEFAULT_ANISOTROPY,h=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Ki(),this.name="",this.source=new la(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(yh).x}get height(){return this.source.getSize(yh).y}get depth(){return this.source.getSize(yh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=cu;xn.DEFAULT_ANISOTROPY=1;var Lu=class Lu{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],p=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(l+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,_=(u+1)/2,w=(g+1)/2,y=(h+f)/4,b=(d+x)/4,S=(p+m)/4;return M>_&&M>w?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=y/n,r=b/n):_>w?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=y/i,r=S/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=b/r,i=S/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-x)/v,this.z=(f-h)/v,this.w=Math.acos((l+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lu.prototype.isVector4=!0;var Ct=Lu,Nc=class extends Ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new xn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new la(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends Nc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qa=class extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fc=class extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Zc=class Zc{constructor(e,t,n,i,r,a,o,c,l,h,d,f,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,d,f,u,p,x,m)}set(e,t,n,i,r,a,o,c,l,h,d,f,u,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Wr.setFromMatrixColumn(e,0).length(),r=1/Wr.setFromMatrixColumn(e,1).length(),a=1/Wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*h,u=a*d,p=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=u+p*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=p+u*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,u=c*d,p=l*h,x=l*d;t[0]=f+x*o,t[4]=p*o-u,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-p,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,u=c*d,p=l*h,x=l*d;t[0]=f-x*o,t[4]=-a*d,t[8]=p+u*o,t[1]=u+p*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,u=a*d,p=o*h,x=o*d;t[0]=c*h,t[4]=p*l-u,t[8]=f*l+x,t[1]=c*d,t[5]=x*l+f,t[9]=u*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,u=a*l,p=o*c,x=o*l;t[0]=c*h,t[4]=x-f*d,t[8]=p*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*d+p,t[10]=f-x*d}else if(e.order==="XZY"){let f=a*c,u=a*l,p=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+x,t[5]=a*h,t[9]=u*d-p,t[2]=p*d-u,t[6]=o*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C0,e,P0)}lookAt(e,t,n){let i=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Is.crossVectors(n,ri),Is.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Is.crossVectors(n,ri)),Is.normalize(),Qo.crossVectors(ri,Is),i[0]=Is.x,i[4]=Qo.x,i[8]=ri.x,i[1]=Is.y,i[5]=Qo.y,i[9]=ri.y,i[2]=Is.z,i[6]=Qo.z,i[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],M=n[7],_=n[11],w=n[15],y=i[0],b=i[4],S=i[8],D=i[12],I=i[1],F=i[5],U=i[9],k=i[13],N=i[2],K=i[6],ie=i[10],G=i[14],le=i[3],J=i[7],ee=i[11],he=i[15];return r[0]=a*y+o*I+c*N+l*le,r[4]=a*b+o*F+c*K+l*J,r[8]=a*S+o*U+c*ie+l*ee,r[12]=a*D+o*k+c*G+l*he,r[1]=h*y+d*I+f*N+u*le,r[5]=h*b+d*F+f*K+u*J,r[9]=h*S+d*U+f*ie+u*ee,r[13]=h*D+d*k+f*G+u*he,r[2]=p*y+x*I+m*N+g*le,r[6]=p*b+x*F+m*K+g*J,r[10]=p*S+x*U+m*ie+g*ee,r[14]=p*D+x*k+m*G+g*he,r[3]=v*y+M*I+_*N+w*le,r[7]=v*b+M*F+_*K+w*J,r[11]=v*S+M*U+_*ie+w*ee,r[15]=v*D+M*k+_*G+w*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],u=e[14],p=e[3],x=e[7],m=e[11],g=e[15],v=c*u-l*f,M=o*u-l*d,_=o*f-c*d,w=a*u-l*h,y=a*f-c*h,b=a*d-o*h;return t*(x*v-m*M+g*_)-n*(p*v-m*w+g*y)+i*(p*M-x*w+g*b)-r*(p*_-x*y+m*b)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],u=e[11],p=e[12],x=e[13],m=e[14],g=e[15],v=t*o-n*a,M=t*c-i*a,_=t*l-r*a,w=n*c-i*o,y=n*l-r*o,b=i*l-r*c,S=h*x-d*p,D=h*m-f*p,I=h*g-u*p,F=d*m-f*x,U=d*g-u*x,k=f*g-u*m,N=v*k-M*U+_*F+w*I-y*D+b*S;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/N;return e[0]=(o*k-c*U+l*F)*K,e[1]=(i*U-n*k-r*F)*K,e[2]=(x*b-m*y+g*w)*K,e[3]=(f*y-d*b-u*w)*K,e[4]=(c*I-a*k-l*D)*K,e[5]=(t*k-i*I+r*D)*K,e[6]=(m*_-p*b-g*M)*K,e[7]=(h*b-f*_+u*M)*K,e[8]=(a*U-o*I+l*S)*K,e[9]=(n*I-t*U-r*S)*K,e[10]=(p*y-x*_+g*v)*K,e[11]=(d*_-h*y-u*v)*K,e[12]=(o*D-a*F-c*S)*K,e[13]=(t*F-n*D+i*S)*K,e[14]=(x*M-p*w-m*v)*K,e[15]=(h*w-d*M+f*v)*K,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,f=r*l,u=r*h,p=r*d,x=a*h,m=a*d,g=o*d,v=c*l,M=c*h,_=c*d,w=n.x,y=n.y,b=n.z;return i[0]=(1-(x+g))*w,i[1]=(u+_)*w,i[2]=(p-M)*w,i[3]=0,i[4]=(u-_)*y,i[5]=(1-(f+g))*y,i[6]=(m+v)*y,i[7]=0,i[8]=(p+M)*b,i[9]=(m-v)*b,i[10]=(1-(f+x))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Wr.set(i[0],i[1],i[2]).length(),o=Wr.set(i[4],i[5],i[6]).length(),c=Wr.set(i[8],i[9],i[10]).length();r<0&&(a=-a),wi.copy(this);let l=1/a,h=1/o,d=1/c;return wi.elements[0]*=l,wi.elements[1]*=l,wi.elements[2]*=l,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=d,wi.elements[9]*=d,wi.elements[10]*=d,t.setFromRotationMatrix(wi),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=mi,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i),p,x;if(c)p=r/(a-r),x=a*r/(a-r);else if(o===mi)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===aa)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=mi,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),u=-(n+i)/(n-i),p,x;if(c)p=1/(a-r),x=a/(a-r);else if(o===mi)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===aa)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Zc.prototype.isMatrix4=!0;var qe=Zc,Wr=new z,wi=new qe,C0=new z(0,0,0),P0=new z(1,1,1),Is=new z,Qo=new z,ri=new z,$f=new qe,Qf=new Pn,gi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $f.makeRotationFromQuaternion(e),this.setFromRotationMatrix($f,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qf.setFromEuler(this),this.setFromQuaternion(Qf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var eo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},I0=0,ed=new z,qr=new Pn,as=new qe,ec=new z,Ba=new z,L0=new z,D0=new Pn,td=new z(1,0,0),nd=new z(0,1,0),id=new z(0,0,1),sd={type:"added"},N0={type:"removed"},Xr={type:"childadded",child:null},Mh={type:"childremoved",child:null},Wt=class s extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new z,t=new gi,n=new Pn,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new et}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(td,e)}rotateY(e){return this.rotateOnAxis(nd,e)}rotateZ(e){return this.rotateOnAxis(id,e)}translateOnAxis(e,t){return ed.copy(e).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(td,e)}translateY(e){return this.translateOnAxis(nd,e)}translateZ(e){return this.translateOnAxis(id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(as.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ec.copy(e):ec.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?as.lookAt(Ba,ec,this.up):as.lookAt(ec,Ba,this.up),this.quaternion.setFromRotationMatrix(as),i&&(as.extractRotation(i.matrixWorld),qr.setFromRotationMatrix(as),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sd),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(N0),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),as.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),as.multiply(e.parent.matrixWorld)),e.applyMatrix4(as),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sd),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,L0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,D0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),u=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Wt.DEFAULT_UP=new z(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vt=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},F0={type:"move"},ha=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;l.inputState.pinching&&f>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},tc={h:0,s:0,l:0};function Sh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=yu(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Sh(a,r,e+1/3),this.g=Sh(a,r,e),this.b=Sh(a,r,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=bp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return ht.workingToColorSpace(Hn.copy(this),e),Math.round(dt(Hn.r*255,0,255))*65536+Math.round(dt(Hn.g*255,0,255))*256+Math.round(dt(Hn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(Hn.copy(this),t);let n=Hn.r,i=Hn.g,r=Hn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Ht){ht.workingToColorSpace(Hn.copy(this),e);let t=Hn.r,n=Hn.g,i=Hn.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+t,Ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ls),e.getHSL(tc);let n=Ja(Ls.h,tc.h,t),i=Ja(Ls.s,tc.s,t),r=Ja(Ls.l,tc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new De;De.NAMES=bp;var to=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},no=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ti=new z,os=new z,wh=new z,cs=new z,jr=new z,Kr=new z,rd=new z,Th=new z,Ah=new z,Eh=new z,Rh=new Ct,Ch=new Ct,Ph=new Ct,Us=class s{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ti.subVectors(e,t),i.cross(Ti);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ti.subVectors(i,t),os.subVectors(n,t),wh.subVectors(e,t);let a=Ti.dot(Ti),o=Ti.dot(os),c=Ti.dot(wh),l=os.dot(os),h=os.dot(wh),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(l*c-o*h)*f,p=(a*h-o*c)*f;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,cs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,cs.x),c.addScaledVector(a,cs.y),c.addScaledVector(o,cs.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Rh.setScalar(0),Ch.setScalar(0),Ph.setScalar(0),Rh.fromBufferAttribute(e,t),Ch.fromBufferAttribute(e,n),Ph.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Rh,r.x),a.addScaledVector(Ch,r.y),a.addScaledVector(Ph,r.z),a}static isFrontFacing(e,t,n,i){return Ti.subVectors(n,t),os.subVectors(e,t),Ti.cross(os).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),os.subVectors(this.a,this.b),Ti.cross(os).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;jr.subVectors(i,n),Kr.subVectors(r,n),Th.subVectors(e,n);let c=jr.dot(Th),l=Kr.dot(Th);if(c<=0&&l<=0)return t.copy(n);Ah.subVectors(e,i);let h=jr.dot(Ah),d=Kr.dot(Ah);if(h>=0&&d<=h)return t.copy(i);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(jr,a);Eh.subVectors(e,r);let u=jr.dot(Eh),p=Kr.dot(Eh);if(p>=0&&u<=p)return t.copy(r);let x=u*l-c*p;if(x<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(Kr,o);let m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return rd.subVectors(r,i),o=(d-h)/(d-h+(u-p)),t.copy(i).addScaledVector(rd,o);let g=1/(m+x+f);return a=x*g,o=f*g,t.copy(n).addScaledVector(jr,a).addScaledVector(Kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},In=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ai):Ai.fromBufferAttribute(r,a),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nc.copy(n.boundingBox)),nc.applyMatrix4(e.matrixWorld),this.union(nc)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),ic.subVectors(this.max,za),Jr.subVectors(e.a,za),Yr.subVectors(e.b,za),Zr.subVectors(e.c,za),Ds.subVectors(Yr,Jr),Ns.subVectors(Zr,Yr),rr.subVectors(Jr,Zr);let t=[0,-Ds.z,Ds.y,0,-Ns.z,Ns.y,0,-rr.z,rr.y,Ds.z,0,-Ds.x,Ns.z,0,-Ns.x,rr.z,0,-rr.x,-Ds.y,Ds.x,0,-Ns.y,Ns.x,0,-rr.y,rr.x,0];return!Ih(t,Jr,Yr,Zr,ic)||(t=[1,0,0,0,1,0,0,0,1],!Ih(t,Jr,Yr,Zr,ic))?!1:(sc.crossVectors(Ds,Ns),t=[sc.x,sc.y,sc.z],Ih(t,Jr,Yr,Zr,ic))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ls),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ls=[new z,new z,new z,new z,new z,new z,new z,new z],Ai=new z,nc=new In,Jr=new z,Yr=new z,Zr=new z,Ds=new z,Ns=new z,rr=new z,za=new z,ic=new z,sc=new z,ar=new z;function Ih(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ar.fromArray(s,r);let o=i.x*Math.abs(ar.x)+i.y*Math.abs(ar.y)+i.z*Math.abs(ar.z),c=e.dot(ar),l=t.dot(ar),h=n.dot(ar);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var hn=new z,rc=new Qe,k0=0,nt=class extends Ri{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_u,this.updateRanges=[],this.gpuType=li,this.version=0,this._normalizationScale=e!==void 0?Bl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rc.fromBufferAttribute(this,t),rc.applyMatrix3(e),this.setXY(t,rc.x,rc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Su(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):wu(e,this.array)}};var io=class extends nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var so=class extends nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},U0=new In,Ga=new z,Lh=new z,_n=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):U0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ga.subVectors(e,this.center);let t=Ga.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ga,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ga.copy(e.center).add(Lh)),this.expandByPoint(Ga.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},O0=0,di=new qe,Dh=new Wt,$r=new z,ai=new In,Ha=new In,Cn=new z,Ut=class s extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(l0(e)?so:io)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,n){return di.makeTranslation(e,t,n),this.applyMatrix4(di),this}scale(e,t,n){return di.makeScale(e,t,n),this.applyMatrix4(di),this}lookAt(e){return Dh.lookAt(e),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ai.setFromBufferAttribute(r),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ha.setFromBufferAttribute(o),this.morphTargetsRelative?(Cn.addVectors(ai.min,Ha.min),ai.expandByPoint(Cn),Cn.addVectors(ai.max,Ha.max),ai.expandByPoint(Cn)):(ai.expandByPoint(Ha.min),ai.expandByPoint(Ha.max))}ai.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Cn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Cn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Cn.fromBufferAttribute(o,l),c&&($r.fromBufferAttribute(e,l),Cn.add($r)),i=Math.max(i,n.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new nt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new z,c[D]=new z;let h=new z,d=new z,f=new z,u=new Qe,p=new Qe,x=new Qe,m=new z,g=new z;function v(D,I,F){l[D]=l[I]=l[F]=1,h.fromBufferAttribute(n,D),d.fromBufferAttribute(n,I),f.fromBufferAttribute(n,F),u.fromBufferAttribute(r,D),p.fromBufferAttribute(r,I),x.fromBufferAttribute(r,F),d.sub(h),f.sub(h),p.sub(u),x.sub(u);let U=1/(p.x*x.y-x.x*p.y);isFinite(U)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(U),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(U),o[D].add(m),o[I].add(m),o[F].add(m),c[D].add(g),c[I].add(g),c[F].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,I=M.length;D<I;++D){let F=M[D],U=F.start,k=F.count;for(let N=U,K=U+k;N<K;N+=3)v(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let _=new z,w=new z,y=new z,b=new z;function S(D){y.fromBufferAttribute(i,D),b.copy(y);let I=o[D];_.copy(I),_.sub(y.multiplyScalar(y.dot(I))).normalize(),w.crossVectors(b,I);let U=w.dot(c[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,U)}for(let D=0,I=n.count;D<I;++D)l[D]&&S(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new z,r=new z,a=new z,o=new z,c=new z,l=new z,h=new z,d=new z;if(e)for(let f=0,u=e.count;f<u;f+=3){let p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h),u=0,p=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?u=c[x]*o.data.stride+o.offset:u=c[x]*h;for(let g=0;g<h;g++)f[p++]=l[u++]}return new nt(f,h,d)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let f=l[h],u=e(f,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let u=l[d];h.push(u.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ua=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_u,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ad(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ad(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function ad(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Ki()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Xn=new z,fa=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Bl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){$a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Su(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):wu(e,this.data.array)}},Nh=new z,B0=new z,z0=new et,Ei=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Nh.subVectors(n,t).cross(B0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Nh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||z0.getNormalMatrix(e),i=this.coplanarPoint(Nh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},G0=0,Vn=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Ws,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=tu,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tc,this.stencilZFail=Tc,this.stencilZPass=Tc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ei().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var hs=new z,Fh=new z,ac=new z,oc=new z,mr=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hs.copy(this.origin).addScaledVector(this.direction,t),hs.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fh.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),oc.copy(this.origin).sub(Fh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ac),o=oc.dot(this.direction),c=-oc.dot(ac),l=oc.lengthSq(),h=Math.abs(1-a*a),d,f,u,p;if(h>0)if(d=a*c-o,f=a*o-c,p=r*h,d>=0)if(f>=-p)if(f<=p){let x=1/h;d*=x,f*=x,u=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f<=-p?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l):f<=p?(d=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Fh).addScaledVector(ac,f),u}intersectSphere(e,t){if(e.radius<0)return null;hs.subVectors(e.center,this.origin);let n=hs.dot(this.direction),i=hs.dot(hs)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,hs)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,f=e.y-a.y,u=e.z-a.z,p=t.x-a.x,x=t.y-a.y,m=t.z-a.z,g=n.x-a.x,v=n.y-a.y,M=n.z-a.z,_=Math.abs(c),w=Math.abs(l),y=Math.abs(h),b,S,D,I,F,U,k,N,K,ie,G,le;if(_>=w&&_>=y?(D=c,U=d,K=p,le=g,c>=0?(b=l,S=h,I=f,F=u,k=x,N=m,ie=v,G=M):(b=h,S=l,I=u,F=f,k=m,N=x,ie=M,G=v)):w>=y?(D=l,U=f,K=x,le=v,l>=0?(b=h,S=c,I=u,F=d,k=m,N=p,ie=M,G=g):(b=c,S=h,I=d,F=u,k=p,N=m,ie=g,G=M)):(D=h,U=u,K=m,le=M,h>=0?(b=c,S=l,I=d,F=f,k=p,N=x,ie=g,G=v):(b=l,S=c,I=f,F=d,k=x,N=p,ie=v,G=g)),D===0)return null;let J=b/D,ee=S/D,he=1/D,ke=I-J*U,Je=F-ee*U,ae=k-J*K,pe=N-ee*K,Re=ie-J*le,He=G-ee*le,ye=Re*pe-He*ae,Ze=ke*He-Je*Re,At=ae*Je-pe*ke;if(i){if(ye<0||Ze<0||At<0)return null}else if((ye<0||Ze<0||At<0)&&(ye>0||Ze>0||At>0))return null;let We=ye+Ze+At;if(We===0)return null;let xt=he*(ye*U+Ze*K+At*le);return(We>0?xt<0:xt>0)?null:this.at(xt/We,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},od=new qe,or=new mr,cc=new _n,cd=new z,lc=new z,hc=new z,uc=new z,kh=new z,fc=new z,ld=new z,dc=new z,rt=class extends Wt{constructor(e=new Ut,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){fc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(kh.fromBufferAttribute(d,e),a?fc.addScaledVector(kh,h):fc.addScaledVector(kh.sub(t),h))}t.add(fc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(r),or.copy(e.ray).recast(e.near),!(cc.containsPoint(or.origin)===!1&&(or.intersectSphere(cc,cd)===null||or.origin.distanceToSquared(cd)>(e.far-e.near)**2))&&(od.copy(r).invert(),or.copy(e.ray).applyMatrix4(od),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=a[m.materialIndex],v=Math.max(m.start,u.start),M=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let _=v,w=M;_<w;_+=3){let y=o.getX(_),b=o.getX(_+1),S=o.getX(_+2);i=pc(this,g,e,n,l,h,d,y,b,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let v=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);i=pc(this,a,e,n,l,h,d,v,M,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=a[m.materialIndex],v=Math.max(m.start,u.start),M=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let _=v,w=M;_<w;_+=3){let y=_,b=_+1,S=_+2;i=pc(this,g,e,n,l,h,d,y,b,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let v=m,M=m+1,_=m+2;i=pc(this,a,e,n,l,h,d,v,M,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function H0(s,e,t,n,i,r,a,o){let c;if(e.side===On?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Xi,o),c===null)return null;dc.copy(o),dc.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(dc);return l<t.near||l>t.far?null:{distance:l,point:dc.clone(),object:s}}function pc(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,lc),s.getVertexPosition(c,hc),s.getVertexPosition(l,uc);let h=H0(s,e,t,n,lc,hc,uc,ld);if(h){let d=new z;Us.getBarycoord(ld,lc,hc,uc,d),i&&(h.uv=Us.getInterpolatedAttribute(i,o,c,l,d,new Qe)),r&&(h.uv1=Us.getInterpolatedAttribute(r,o,c,l,d,new Qe)),a&&(h.normal=Us.getInterpolatedAttribute(a,o,c,l,d,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new z,materialIndex:0};Us.getNormal(lc,hc,uc,f.normal),h.face=f,h.barycoord=d}return h}var Va=new Ct,hd=new Ct,ud=new Ct,V0=new Ct,fd=new qe,mc=new z,Uh=new _n,dd=new qe,Oh=new mr,gr=class extends rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hh,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new In),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mc),this.boundingBox.expandByPoint(mc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mc),this.boundingSphere.expandByPoint(mc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uh.copy(this.boundingSphere),Uh.applyMatrix4(i),e.ray.intersectsSphere(Uh)!==!1&&(dd.copy(i).invert(),Oh.copy(e.ray).applyMatrix4(dd),!(this.boundingBox!==null&&Oh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Oh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===np?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ve("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;hd.fromBufferAttribute(i.attributes.skinIndex,e),ud.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Va.copy(t),t.set(0,0,0,0)):(Va.set(t.x,t.y,t.z,1),t.set(0,0,0)),Va.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=ud.getComponent(r);if(a!==0){let o=hd.getComponent(r);fd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(V0.copy(Va).applyMatrix4(fd),a)}}return t.isVector4&&(t.w=Va.w),t.applyMatrix4(this.bindMatrixInverse)}},da=class extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Bs=class extends xn{constructor(e=null,t=1,n=1,i,r,a,o,c,l=$t,h=$t,d,f){super(null,a,o,c,l,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pd=new qe,W0=new qe,br=class s{constructor(e=[],t=[]){this.uuid=Ki(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ve("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:W0;pd.multiplyMatrices(o,t[r]),pd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Bs(t,e,e,_i,li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ve("Skeleton: No bone found with UUID:",r),a=new da),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},ps=class extends nt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qr=new qe,md=new qe,gc=[],gd=new In,q0=new qe,Wa=new rt,qa=new _n,vn=class extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ps(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,q0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qr),gd.copy(e.boundingBox).applyMatrix4(Qr),this.boundingBox.union(gd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qr),qa.copy(e.boundingSphere).applyMatrix4(Qr),this.boundingSphere.union(qa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Wa.geometry=this.geometry,Wa.material=this.material,Wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qa.copy(this.boundingSphere),qa.applyMatrix4(n),e.ray.intersectsSphere(qa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Qr),md.multiplyMatrices(n,Qr),Wa.matrixWorld=md,Wa.raycast(e,gc);for(let a=0,o=gc.length;a<o;a++){let c=gc[a];c.instanceId=r,c.object=this,t.push(c)}gc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ps(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bs(new Float32Array(i*this.count),i,this.count,Sa,li));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cr=new _n,X0=new Qe(.5,.5),bc=new z,zs=class{constructor(e=new Ei,t=new Ei,n=new Ei,i=new Ei,r=new Ei,a=new Ei){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],M=r[13],_=r[14],w=r[15];if(i[0].setComponents(l-a,u-h,g-p,w-v).normalize(),i[1].setComponents(l+a,u+h,g+p,w+v).normalize(),i[2].setComponents(l+o,u+d,g+x,w+M).normalize(),i[3].setComponents(l-o,u-d,g-x,w-M).normalize(),n)i[4].setComponents(c,f,m,_).normalize(),i[5].setComponents(l-c,u-f,g-m,w-_).normalize();else if(i[4].setComponents(l-c,u-f,g-m,w-_).normalize(),t===mi)i[5].setComponents(l+c,u+f,g+m,w+_).normalize();else if(t===aa)i[5].setComponents(c,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){cr.center.set(0,0,0);let t=X0.distanceTo(e.center);return cr.radius=.7071067811865476+t,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(bc.x=i.normal.x>0?e.max.x:e.min.x,bc.y=i.normal.y>0?e.max.y:e.min.y,bc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},bd=new qe,kc=class s{constructor(){this.coordinateSystem=mi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];bd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new zs),n[i].setFromProjectionMatrix(bd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new zs),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var pa=class extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Uc=new z,Oc=new z,xd=new qe,Xa=new mr,xc=new _n,Bh=new z,_d=new z,xr=class extends Wt{constructor(e=new Ut,t=new pa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Uc.fromBufferAttribute(t,i-1),Oc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Uc.distanceTo(Oc);e.setAttribute("lineDistance",new gt(n,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xc.copy(n.boundingSphere),xc.applyMatrix4(i),xc.radius+=r,e.ray.intersectsSphere(xc)===!1)return;xd.copy(i).invert(),Xa.copy(e.ray).applyMatrix4(xd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=u,m=p-1;x<m;x+=l){let g=h.getX(x),v=h.getX(x+1),M=_c(this,e,Xa,c,g,v,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(u),g=_c(this,e,Xa,c,x,m,p-1);g&&t.push(g)}}else{let u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=u,m=p-1;x<m;x+=l){let g=_c(this,e,Xa,c,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=_c(this,e,Xa,c,p-1,u,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _c(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Uc.fromBufferAttribute(o,i),Oc.fromBufferAttribute(o,r),t.distanceSqToSegment(Uc,Oc,Bh,_d)>n)return;Bh.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Bh);if(!(l<e.near||l>e.far))return{distance:l,point:_d.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var vd=new z,yd=new z,ro=class extends xr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)vd.fromBufferAttribute(t,i),yd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+vd.distanceTo(yd);e.setAttribute("lineDistance",new gt(n,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ao=class extends xr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ma=class extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Md=new qe,Wh=new mr,vc=new _n,yc=new z,ms=class extends Wt{constructor(e=new Ut,t=new ma){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(i),vc.radius+=r,e.ray.intersectsSphere(vc)===!1)return;Md.copy(i).invert(),Wh.copy(e.ray).applyMatrix4(Md);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let p=f,x=u;p<x;p++){let m=l.getX(p);yc.fromBufferAttribute(d,m),Sd(yc,m,c,i,e,t,this)}}else{let f=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let p=f,x=u;p<x;p++)yc.fromBufferAttribute(d,p),Sd(yc,p,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Sd(s,e,t,n,i,r,a){let o=Wh.distanceSqToPoint(s);if(o<t){let c=new z;Wh.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var oo=class extends xn{constructor(e=[],t=Er,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},co=class extends xn{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gs=class extends xn{constructor(e,t,n=Ii,i,r,a,o=$t,c=$t,l,h=ds,d=1){if(h!==ds&&h!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new la(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},lo=class extends gs{constructor(e,t=Ii,n=Er,i,r,a=$t,o=$t,c,l=ds){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ho=class extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},bs=class s extends Ut{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],f=0,u=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function p(x,m,g,v,M,_,w,y,b,S,D){let I=_/b,F=w/S,U=_/2,k=w/2,N=y/2,K=b+1,ie=S+1,G=0,le=0,J=new z;for(let ee=0;ee<ie;ee++){let he=ee*F-k;for(let ke=0;ke<K;ke++){let Je=ke*I-U;J[x]=Je*v,J[m]=he*M,J[g]=N,l.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[g]=y>0?1:-1,h.push(J.x,J.y,J.z),d.push(ke/b),d.push(1-ee/S),G+=1}}for(let ee=0;ee<S;ee++)for(let he=0;he<b;he++){let ke=f+he+K*ee,Je=f+he+K*(ee+1),ae=f+(he+1)+K*(ee+1),pe=f+(he+1)+K*ee;c.push(ke,Je,pe),c.push(Je,ae,pe),le+=6}o.addGroup(u,le,D),u+=le,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Vi=class s extends Ut{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,d=Math.PI/2*e,f=t,u=2*d+f,p=n*2+r,x=i+1,m=new z,g=new z;for(let v=0;v<=p;v++){let M=0,_=0,w=0,y=0;if(v<=n){let D=v/n,I=D*Math.PI/2;_=-h-e*Math.cos(I),w=e*Math.sin(I),y=-e*Math.cos(I),M=D*d}else if(v<=n+r){let D=(v-n)/r;_=-h+D*t,w=e,y=0,M=d+D*f}else{let D=(v-n-r)/n,I=D*Math.PI/2;_=h+e*Math.sin(I),w=e*Math.cos(I),y=e*Math.sin(I),M=d+f+D*d}let b=Math.max(0,Math.min(1,M/u)),S=0;v===0?S=.5/i:v===p&&(S=-.5/i);for(let D=0;D<=i;D++){let I=D/i,F=I*Math.PI*2,U=Math.sin(F),k=Math.cos(F);g.x=-w*k,g.y=_,g.z=w*U,o.push(g.x,g.y,g.z),m.set(-w*k,y,w*U),m.normalize(),c.push(m.x,m.y,m.z),l.push(I+S,b)}if(v>0){let D=(v-1)*x;for(let I=0;I<i;I++){let F=D+I,U=D+I+1,k=v*x+I,N=v*x+I+1;a.push(F,U,k),a.push(U,N,k)}}}this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},uo=class s extends Ut{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new z,h=new Qe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let u=n+d/t*i;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},bi=class s extends Ut{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],f=[],u=[],p=0,x=[],m=n/2,g=0;v(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(u,2));function v(){let _=new z,w=new z,y=0,b=(t-e)/n;for(let S=0;S<=r;S++){let D=[],I=S/r,F=I*(t-e)+e;for(let U=0;U<=i;U++){let k=U/i,N=k*c+o,K=Math.sin(N),ie=Math.cos(N);w.x=F*K,w.y=-I*n+m,w.z=F*ie,d.push(w.x,w.y,w.z),_.set(K,b,ie).normalize(),f.push(_.x,_.y,_.z),u.push(k,1-I),D.push(p++)}x.push(D)}for(let S=0;S<i;S++)for(let D=0;D<r;D++){let I=x[D][S],F=x[D+1][S],U=x[D+1][S+1],k=x[D][S+1];(e>0||D!==0)&&(h.push(I,F,k),y+=3),(t>0||D!==r-1)&&(h.push(F,U,k),y+=3)}l.addGroup(g,y,0),g+=y}function M(_){let w=p,y=new Qe,b=new z,S=0,D=_===!0?e:t,I=_===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,m*I,0),f.push(0,I,0),u.push(.5,.5),p++;let F=p;for(let U=0;U<=i;U++){let N=U/i*c+o,K=Math.cos(N),ie=Math.sin(N);b.x=D*ie,b.y=m*I,b.z=D*K,d.push(b.x,b.y,b.z),f.push(0,I,0),y.x=K*.5+.5,y.y=ie*.5*I+.5,u.push(y.x,y.y),p++}for(let U=0;U<i;U++){let k=w+U,N=F+U;_===!0?h.push(N,N+1,k):h.push(N+1,N,k),S+=3}l.addGroup(g,S,_===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ci=class s extends bi{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fo=class s extends Ut{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let M=new z,_=new z,w=new z;for(let y=0;y<t.length;y+=3)u(t[y+0],M),u(t[y+1],_),u(t[y+2],w),c(M,_,w,v)}function c(v,M,_,w){let y=w+1,b=[];for(let S=0;S<=y;S++){b[S]=[];let D=v.clone().lerp(_,S/y),I=M.clone().lerp(_,S/y),F=y-S;for(let U=0;U<=F;U++)U===0&&S===y?b[S][U]=D:b[S][U]=D.clone().lerp(I,U/F)}for(let S=0;S<y;S++)for(let D=0;D<2*(y-S)-1;D++){let I=Math.floor(D/2);D%2===0?(f(b[S][I+1]),f(b[S+1][I]),f(b[S][I])):(f(b[S][I+1]),f(b[S+1][I+1]),f(b[S+1][I]))}}function l(v){let M=new z;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(v),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){let v=new z;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let _=m(v)/2/Math.PI+.5,w=g(v)/Math.PI+.5;a.push(_,1-w)}p(),d()}function d(){for(let v=0;v<a.length;v+=6){let M=a[v+0],_=a[v+2],w=a[v+4],y=Math.max(M,_,w),b=Math.min(M,_,w);y>.9&&b<.1&&(M<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function u(v,M){let _=v*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function p(){let v=new z,M=new z,_=new z,w=new z,y=new Qe,b=new Qe,S=new Qe;for(let D=0,I=0;D<r.length;D+=9,I+=6){v.set(r[D+0],r[D+1],r[D+2]),M.set(r[D+3],r[D+4],r[D+5]),_.set(r[D+6],r[D+7],r[D+8]),y.set(a[I+0],a[I+1]),b.set(a[I+2],a[I+3]),S.set(a[I+4],a[I+5]),w.copy(v).add(M).add(_).divideScalar(3);let F=m(w);x(y,I+0,v,F),x(b,I+2,M,F),x(S,I+4,_,F)}}function x(v,M,_,w){w<0&&v.x===1&&(a[M]=v.x-1),_.x===0&&_.z===0&&(a[M]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var po=class s extends fo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var mo=class s extends fo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ci=class s extends Ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,f=t/c,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*f-a;for(let M=0;M<l;M++){let _=M*d-r;p.push(_,-v,0),x.push(0,0,1),m.push(M/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){let M=v+l*g,_=v+l*(g+1),w=v+1+l*(g+1),y=v+1+l*g;u.push(M,_,y),u.push(_,w,y)}this.setIndex(u),this.setAttribute("position",new gt(p,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},go=class s extends Ut{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],d=e,f=(t-e)/i,u=new z,p=new Qe;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let g=r+m/n*a;u.x=d*Math.cos(g),u.y=d*Math.sin(g),c.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,h.push(p.x,p.y)}d+=f}for(let x=0;x<i;x++){let m=x*(n+1);for(let g=0;g<n;g++){let v=g+m,M=v,_=v+n+1,w=v+n+2,y=v+1;o.push(M,_,y),o.push(_,w,y)}}this.setIndex(o),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Kn=class s extends Ut{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new z,f=new z,u=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let v=[],M=g/n,_=a+M*o,w=e*Math.cos(_),y=Math.sqrt(e*e-w*w),b=0;g===0&&a===0?b=.5/t:g===n&&c===Math.PI&&(b=-.5/t);for(let S=0;S<=t;S++){let D=S/t,I=i+D*r;d.x=-y*Math.cos(I),d.y=w,d.z=y*Math.sin(I),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(D+b,1-M),v.push(l++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let M=h[g][v+1],_=h[g][v],w=h[g+1][v],y=h[g+1][v+1];(g!==0||a>0)&&u.push(M,_,y),(g!==n-1||c<Math.PI)&&u.push(_,w,y)}this.setIndex(u),this.setAttribute("position",new gt(p,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _r=class s extends Ut{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],d=[],f=new z,u=new z,p=new z;for(let x=0;x<=n;x++){let m=a+x/n*o;for(let g=0;g<=i;g++){let v=g/i*r;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),l.push(u.x,u.y,u.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){let g=(i+1)*x+m-1,v=(i+1)*(x-1)+m-1,M=(i+1)*(x-1)+m,_=(i+1)*x+m;c.push(g,v,_),c.push(v,M,_)}this.setIndex(c),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ir(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(wd(i))i.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(wd(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Wn(s){let e={};for(let t=0;t<s.length;t++){let n=Ir(s[t]);for(let i in n)e[i]=n[i]}return e}function wd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function j0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Tu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var xp={clone:Ir,merge:Wn},K0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K0,this.fragmentShader=J0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=j0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(i.value);break;case"v2":this.uniforms[n].value=new Qe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ct().fromArray(i.value);break;case"m3":this.uniforms[n].value=new et().fromArray(i.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Bc=class extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},vr=class extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jn=class extends vr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ur('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ur('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var bo=class extends Vn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new De(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Pi=class extends Vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=$c,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zc=class extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gc=class extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ks(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ja(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Y0(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Td(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Z0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var Wi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Hc=class extends Wi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lr,endingEnd:lr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case hr:r=e,o=2*t-n;break;case Ya:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hr:a=e,c=2*n-t;break;case Ya:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-t)/(i-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,M=(-1-u)*m+(1.5+u)*x+.5*p,_=u*m-u*x;for(let w=0;w!==o;++w)r[w]=g*a[h+w]+v*a[l+w]+M*a[c+w]+_*a[d+w];return r}},xo=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*h;return r}},Vc=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Wc=class extends Wi{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(i-t),x=1-p;for(let m=0;m!==o;++m)r[m]=a[l+m]*x+a[c+m]*p;return r}let f=o*2,u=e-1;for(let p=0;p!==o;++p){let x=a[l+p],m=a[c+p],g=u*f+p*2,v=d[g],M=d[g+1],_=e*f+p*2,w=h[_],y=h[_+1],b=Q0(n,t,v,w,i);r[p]=_p(b,x,M,y,m)}return r}};function _p(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function $0(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Q0(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=_p(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let c=$0(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var ii=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ks(t,this.TimeBufferType),this.values=ks(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ks(e.times,Array),values:ks(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),ja(e.settings)&&(n.settings={inTangents:ks(e.settings.inTangents,Array),outTangents:ks(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case fr:t=this.InterpolantFactoryMethodDiscrete;break;case dr:t=this.InterpolantFactoryMethodLinear;break;case wc:t=this.InterpolantFactoryMethodSmooth;break;case Vh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return dr;case this.InterpolantFactoryMethodSmooth:return wc;case this.InterpolantFactoryMethodBezier:return Vh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;ja(this.settings)&&(Ad(this.settings.inTangents,e),Ad(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;ja(this.settings)&&(Ed(this.settings.inTangents,e),Ed(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){$e("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){$e("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&h0(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){$e("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let d=o*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){let x=t[d+p];if(x!==t[f+p]||x!==t[u+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,ja(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Ad(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Ed(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=dr;var xs=class extends ii{constructor(e,t,n){super(e,t,n)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=fr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}};_o.prototype.ValueTypeName="color";var _s=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}};_s.prototype.ValueTypeName="number";var qc=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Pn.slerpFlat(r,0,a,l-o,a,l,c);return r}},vs=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new qc(this.times,this.values,this.getValueSize(),e)}};vs.prototype.ValueTypeName="quaternion";vs.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends ii{constructor(e,t,n){super(e,t,n)}};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=fr;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}};Gs.prototype.ValueTypeName="vector";var yr=class{constructor(e="",t=-1,n=[],i=Ol){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ki(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(tg(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(ii.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Y0(c);c=Td(c,1,h),l=Td(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new _s(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let d=h[1],f=i[d];f||(i[d]=f=[]),f.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function eg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return Gs;case"color":return _o;case"quaternion":return vs;case"bool":case"boolean":return xs;case"string":return ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function tg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=eg(s.type);if(s.times===void 0){let n=[],i=[];Z0(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),ja(s.settings)&&(t.settings={inTangents:ks(s.settings.inTangents,Float32Array),outTangents:ks(s.settings.outTangents,Float32Array)}),t}var Hi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Rd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Rd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Rd(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Xc=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let u=l[d],p=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vp=new Xc,qi=class{constructor(e){this.manager=e!==void 0?e:vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};qi.DEFAULT_MATERIAL_NAME="__DEFAULT";var us={},qh=class extends Error{constructor(e,t){super(e),this.response=t}},ga=class extends qi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Hi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(us[e]!==void 0){us[e].push({onLoad:t,onProgress:n,onError:i});return}us[e]=[],us[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ve("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=us[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=f?parseInt(f):0,p=u!==0,x=0,m=new ReadableStream({start(g){v();function v(){d.read().then(({done:M,value:_})=>{if(M)g.close();else{x+=_.byteLength;let w=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:u});for(let y=0,b=h.length;y<b;y++){let S=h[y];S.onProgress&&S.onProgress(w)}g.enqueue(_),v()}},M=>{g.error(M)})}}});return new Response(m)}else throw new qh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return l.arrayBuffer().then(p=>u.decode(p))}}}).then(l=>{Hi.add(`file:${e}`,l);let h=us[e];delete us[e];for(let d=0,f=h.length;d<f;d++){let u=h[d];u.onLoad&&u.onLoad(l)}}).catch(l=>{let h=us[e];if(h===void 0)throw this.manager.itemError(e),l;delete us[e];for(let d=0,f=h.length;d<f;d++){let u=h[d];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ea=new WeakMap,jc=class extends qi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Hi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=ea.get(a);d===void 0&&(d=[],ea.set(a,d)),d.push({onLoad:t,onError:i})}return a}let o=oa("img");function c(){h(),t&&t(this);let d=ea.get(this)||[];for(let f=0;f<d.length;f++){let u=d[f];u.onLoad&&u.onLoad(this)}ea.delete(this),r.manager.itemEnd(e)}function l(d){h(),i&&i(d),Hi.remove(`image:${e}`);let f=ea.get(this)||[];for(let u=0;u<f.length;u++){let p=f[u];p.onError&&p.onError(d)}ea.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Hi.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var vo=class extends qi{constructor(e){super(e)}load(e,t,n,i){let r=new xn,a=new jc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Hs=class extends Wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},yo=class extends Hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},zh=new qe,Cd=new z,Pd=new z,ba=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cd),Pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){zh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(zh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===aa||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Mc=new z,Sc=new Pn,Gi=new z,Mo=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Mc,Sc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mc,Sc,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Mc,Sc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mc,Sc,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fs=new z,Id=new Qe,Ld=new Qe,gn=class extends Mo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,t){return this.getViewBounds(e,Id,Ld),t.subVectors(Ld,Id)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ka*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xh=class extends ba{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=pr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},So=class extends Hs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Xh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},jh=class extends ba{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},Vs=class extends Hs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Mr=class extends Mo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kh=class extends ba{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sr=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Kh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},wo=class extends Hs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ms=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Gh=new WeakMap,To=class extends qi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ve("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ve("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Hi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Gh.has(a)===!0?(i&&i(Gh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Hi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Gh.set(c,l),Hi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Hi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ta=-90,na=1,xa=class extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new gn(ta,na,e,t);i.layers=this.layers,this.add(i);let r=new gn(ta,na,e,t);r.layers=this.layers,this.add(r);let a=new gn(ta,na,e,t);a.layers=this.layers,this.add(a);let o=new gn(ta,na,e,t);o.layers=this.layers,this.add(o);let c=new gn(ta,na,e,t);c.layers=this.layers,this.add(c);let l=new gn(ta,na,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Kc=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Jc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Pn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;Pn.multiplyQuaternionsFlat(e,a,e,t,e,n),Pn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Au="\\[\\]\\.:\\/",ng=new RegExp("["+Au+"]","g"),Eu="[^"+Au+"]",ig="[^"+Au.replace("\\.","")+"]",sg=/((?:WC+[\/:])*)/.source.replace("WC",Eu),rg=/(WCOD+)?/.source.replace("WCOD",ig),ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eu),og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eu),cg=new RegExp("^"+sg+rg+ag+og+"$"),lg=["material","materials","bones","map"],Jh=class{constructor(e,t,n){let i=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ng,"")}static parseTrackName(e){let t=cg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);lg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=Jh;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yc=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:lr,endingEnd:lr};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Pr,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case sp:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Ol:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===ip;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===wa){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=hr,i.endingEnd=hr):(e?i.endingStart=this.zeroSlopeAtStart?hr:lr:i.endingStart=Ya,t?i.endingEnd=this.zeroSlopeAtEnd?hr:lr:i.endingEnd=Ya)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},hg=new Float32Array(1),wr=class extends Ri{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==r;++d){let f=i[d],u=f.name,p=h[u];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,u));continue}let x=t&&t._propertyBindings[d].binding.parsedPath;p=new Jc(kt.create(n,u,x),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,u),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new xo(new Float32Array(2),new Float32Array(2),1,hg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?yr.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Ol),c!==void 0){let d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Yc(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?yr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Du=class Du{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Du.prototype.isMatrix2=!0;var Yh=Du;function Ru(s,e,t,n){let i=ug(n);switch(t){case du:return s*e;case Sa:return s*e/i.components*i.byteLength;case rl:return s*e/i.components*i.byteLength;case qs:return s*e*2/i.components*i.byteLength;case al:return s*e*2/i.components*i.byteLength;case pu:return s*e*3/i.components*i.byteLength;case _i:return s*e*4/i.components*i.byteLength;case ol:return s*e*4/i.components*i.byteLength;case Ro:case Co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Po:case Io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ll:case ul:return Math.max(s,16)*Math.max(e,8)/4;case cl:case hl:return Math.max(s,8)*Math.max(e,8)/2;case fl:case dl:case ml:case gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pl:case Lo:case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case vl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case yl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case wl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Al:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case El:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Il:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ll:case Dl:case Nl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Fl:case kl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Do:case Ul:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ug(s){switch(s){case si:case lu:return{byteLength:1,components:1};case Ma:case hu:case Li:return{byteLength:2,components:1};case il:case sl:return{byteLength:2,components:4};case Ii:case nl:case li:return{byteLength:4,components:1};case uu:case fu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Hp(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function dg(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=s.SHORT;else if(l instanceof Uint32Array)u=s.UNSIGNED_INT;else if(l instanceof Int32Array)u=s.INT;else if(l instanceof Int8Array)u=s.BYTE;else if(l instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){let p=d[f],x=d[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){let x=d[u];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mg=`#ifdef USE_ALPHAHASH
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
#endif`,gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vg=`#ifdef USE_AOMAP
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
#endif`,yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mg=`#ifdef USE_BATCHING
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
#endif`,Sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ag=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Eg=`#ifdef USE_IRIDESCENCE
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
#endif`,Rg=`#ifdef USE_BUMPMAP
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
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ug=`#define PI 3.141592653589793
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
} // validated`,Og=`vec3 transformedNormal = objectNormal;
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
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eb=`#ifdef USE_GRADIENTMAP
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
}`,tb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rb=`#ifdef USE_ENVMAP
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
#endif`,ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hb=`PhysicalMaterial material;
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
#endif`,ub=`uniform sampler2D dfgLUT;
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
}`,fb=`
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
#endif`,db=`#if defined( RE_IndirectDiffuse )
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
#endif`,pb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mb=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sb=`#if defined( USE_POINTS_UV )
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
#endif`,wb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ab=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eb=`#if defined( USE_MORPHCOLORS )
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
#endif`,Rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cb=`#ifdef USE_MORPHTARGETS
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
#endif`,Pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ib=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kb=`#ifdef USE_NORMALMAP
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
#endif`,Ub=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ob=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$b=`float getShadowMask() {
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
}`,Qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nx=`#ifdef USE_SKINNING
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
#endif`,ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ox=`#ifdef USE_TRANSMISSION
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
#endif`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,px=`uniform sampler2D t2D;
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`uniform float backgroundBlurriness;
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`#include <common>
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
}`,vx=`#if DEPTH_PACKING == 3200
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
}`,yx=`#define DISTANCE
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
}`,Mx=`#define DISTANCE
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
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`uniform float scale;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Cx=`#define LAMBERT
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
}`,Px=`#define LAMBERT
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
}`,Ix=`#define MATCAP
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
}`,Lx=`#define MATCAP
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
}`,Dx=`#define NORMAL
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
}`,Nx=`#define NORMAL
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
}`,Fx=`#define PHONG
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
}`,kx=`#define PHONG
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
}`,Ux=`#define STANDARD
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
}`,Ox=`#define STANDARD
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
}`,Bx=`#define TOON
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
}`,zx=`#define TOON
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
}`,Gx=`uniform float size;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Vx=`#include <common>
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
}`,Wx=`uniform vec3 color;
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
}`,qx=`uniform float rotation;
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
}`,Xx=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:pg,alphahash_pars_fragment:mg,alphamap_fragment:gg,alphamap_pars_fragment:bg,alphatest_fragment:xg,alphatest_pars_fragment:_g,aomap_fragment:vg,aomap_pars_fragment:yg,batching_pars_vertex:Mg,batching_vertex:Sg,begin_vertex:wg,beginnormal_vertex:Tg,bsdfs:Ag,iridescence_fragment:Eg,bumpmap_pars_fragment:Rg,clipping_planes_fragment:Cg,clipping_planes_pars_fragment:Pg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:Lg,color_fragment:Dg,color_pars_fragment:Ng,color_pars_vertex:Fg,color_vertex:kg,common:Ug,defaultnormal_vertex:Og,displacementmap_pars_vertex:Bg,displacementmap_vertex:zg,emissivemap_fragment:Gg,emissivemap_pars_fragment:Hg,colorspace_fragment:Vg,colorspace_pars_fragment:Wg,envmap_fragment:qg,envmap_common_pars_fragment:Xg,envmap_pars_fragment:jg,envmap_pars_vertex:Kg,envmap_physical_pars_fragment:rb,envmap_vertex:Jg,fog_vertex:Yg,fog_pars_vertex:Zg,fog_fragment:$g,fog_pars_fragment:Qg,gradientmap_pars_fragment:eb,lightmap_pars_fragment:tb,lights_lambert_fragment:nb,lights_lambert_pars_fragment:ib,lights_pars_begin:sb,lights_toon_fragment:ab,lights_toon_pars_fragment:ob,lights_phong_fragment:cb,lights_phong_pars_fragment:lb,lights_physical_fragment:hb,lights_physical_pars_fragment:ub,lights_fragment_begin:fb,lights_fragment_maps:db,lights_fragment_end:pb,lightprobes_pars_fragment:mb,logdepthbuf_fragment:gb,logdepthbuf_pars_fragment:bb,logdepthbuf_pars_vertex:xb,logdepthbuf_vertex:_b,map_fragment:vb,map_pars_fragment:yb,map_particle_fragment:Mb,map_particle_pars_fragment:Sb,metalnessmap_fragment:wb,metalnessmap_pars_fragment:Tb,morphinstance_vertex:Ab,morphcolor_vertex:Eb,morphnormal_vertex:Rb,morphtarget_pars_vertex:Cb,morphtarget_vertex:Pb,normal_fragment_begin:Ib,normal_fragment_maps:Lb,normal_pars_fragment:Db,normal_pars_vertex:Nb,normal_vertex:Fb,normalmap_pars_fragment:kb,clearcoat_normal_fragment_begin:Ub,clearcoat_normal_fragment_maps:Ob,clearcoat_pars_fragment:Bb,iridescence_pars_fragment:zb,opaque_fragment:Gb,packing:Hb,premultiplied_alpha_fragment:Vb,project_vertex:Wb,dithering_fragment:qb,dithering_pars_fragment:Xb,roughnessmap_fragment:jb,roughnessmap_pars_fragment:Kb,shadowmap_pars_fragment:Jb,shadowmap_pars_vertex:Yb,shadowmap_vertex:Zb,shadowmask_pars_fragment:$b,skinbase_vertex:Qb,skinning_pars_vertex:ex,skinning_vertex:tx,skinnormal_vertex:nx,specularmap_fragment:ix,specularmap_pars_fragment:sx,tonemapping_fragment:rx,tonemapping_pars_fragment:ax,transmission_fragment:ox,transmission_pars_fragment:cx,uv_pars_fragment:lx,uv_pars_vertex:hx,uv_vertex:ux,worldpos_vertex:fx,background_vert:dx,background_frag:px,backgroundCube_vert:mx,backgroundCube_frag:gx,cube_vert:bx,cube_frag:xx,depth_vert:_x,depth_frag:vx,distance_vert:yx,distance_frag:Mx,equirect_vert:Sx,equirect_frag:wx,linedashed_vert:Tx,linedashed_frag:Ax,meshbasic_vert:Ex,meshbasic_frag:Rx,meshlambert_vert:Cx,meshlambert_frag:Px,meshmatcap_vert:Ix,meshmatcap_frag:Lx,meshnormal_vert:Dx,meshnormal_frag:Nx,meshphong_vert:Fx,meshphong_frag:kx,meshphysical_vert:Ux,meshphysical_frag:Ox,meshtoon_vert:Bx,meshtoon_frag:zx,points_vert:Gx,points_frag:Hx,shadow_vert:Vx,shadow_frag:Wx,sprite_vert:qx,sprite_frag:Xx},Le={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Yi={basic:{uniforms:Wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Wn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Wn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new De(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Wn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Wn([Le.points,Le.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Wn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Wn([Le.common,Le.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Wn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Wn([Le.sprite,Le.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Wn([Le.common,Le.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Wn([Le.lights,Le.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Yi.physical={uniforms:Wn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Gl={r:0,b:0,g:0},jx=new qe,Vp=new et;Vp.set(-1,0,0,0,1,0,0,0,1);function Kx(s,e,t,n,i,r){let a=new De(0),o=i===!0?0:1,c,l,h=null,d=0,f=null;function u(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let _=v.backgroundBlurriness>0;M=e.get(M,_)}return M}function p(v){let M=!1,_=u(v);_===null?m(a,o):_&&_.isColor&&(m(_,1),M=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,M){let _=u(M);_&&_.isCubeTexture?(l===void 0&&(l=new rt(new bs(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ir(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,y,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(jx.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Vp),l.material.toneMapped=ht.getTransfer(_.colorSpace)!==wt,(h!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new rt(new ci(2,2),new Un({name:"BackgroundMaterial",uniforms:Ir(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ht.getTransfer(_.colorSpace)!==wt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,M){v.getRGB(Gl,Tu(s)),t.buffers.color.setClear(Gl.r,Gl.g,Gl.b,M,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:p,addToRenderList:x,dispose:g}}function Jx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(F,U,k,N,K){let ie=!1,G=d(F,N,k,U);r!==G&&(r=G,l(r.object)),ie=u(F,N,k,K),ie&&p(F,N,k,K),K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,_(F,U,k,N),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return s.createVertexArray()}function l(F){return s.bindVertexArray(F)}function h(F){return s.deleteVertexArray(F)}function d(F,U,k,N){let K=N.wireframe===!0,ie=n[U.id];ie===void 0&&(ie={},n[U.id]=ie);let G=F.isInstancedMesh===!0?F.id:0,le=ie[G];le===void 0&&(le={},ie[G]=le);let J=le[k.id];J===void 0&&(J={},le[k.id]=J);let ee=J[K];return ee===void 0&&(ee=f(c()),J[K]=ee),ee}function f(F){let U=[],k=[],N=[];for(let K=0;K<t;K++)U[K]=0,k[K]=0,N[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:N,object:F,attributes:{},index:null}}function u(F,U,k,N){let K=r.attributes,ie=U.attributes,G=0,le=k.getAttributes();for(let J in le)if(le[J].location>=0){let he=K[J],ke=ie[J];if(ke===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(ke=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(ke=F.instanceColor)),he===void 0||he.attribute!==ke||ke&&he.data!==ke.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function p(F,U,k,N){let K={},ie=U.attributes,G=0,le=k.getAttributes();for(let J in le)if(le[J].location>=0){let he=ie[J];he===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(he=F.instanceColor));let ke={};ke.attribute=he,he&&he.data&&(ke.data=he.data),K[J]=ke,G++}r.attributes=K,r.attributesNum=G,r.index=N}function x(){let F=r.newAttributes;for(let U=0,k=F.length;U<k;U++)F[U]=0}function m(F){g(F,0)}function g(F,U){let k=r.newAttributes,N=r.enabledAttributes,K=r.attributeDivisors;k[F]=1,N[F]===0&&(s.enableVertexAttribArray(F),N[F]=1),K[F]!==U&&(s.vertexAttribDivisor(F,U),K[F]=U)}function v(){let F=r.newAttributes,U=r.enabledAttributes;for(let k=0,N=U.length;k<N;k++)U[k]!==F[k]&&(s.disableVertexAttribArray(k),U[k]=0)}function M(F,U,k,N,K,ie,G){G===!0?s.vertexAttribIPointer(F,U,k,K,ie):s.vertexAttribPointer(F,U,k,N,K,ie)}function _(F,U,k,N){x();let K=N.attributes,ie=k.getAttributes(),G=U.defaultAttributeValues;for(let le in ie){let J=ie[le];if(J.location>=0){let ee=K[le];if(ee===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(ee=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(ee=F.instanceColor)),ee!==void 0){let he=ee.normalized,ke=ee.itemSize,Je=e.get(ee);if(Je===void 0)continue;let ae=Je.buffer,pe=Je.type,Re=Je.bytesPerElement,He=pe===s.INT||pe===s.UNSIGNED_INT||ee.gpuType===nl;if(ee.isInterleavedBufferAttribute){let ye=ee.data,Ze=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,At=ee.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let We=0;We<J.locationSize;We++)g(J.location+We,ye.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let We=0;We<J.locationSize;We++)m(J.location+We);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let We=0;We<J.locationSize;We++)M(J.location+We,ke/J.locationSize,pe,he,Ze*Re,(At+ke/J.locationSize*We)*Re,He)}else{if(ee.isInstancedBufferAttribute){for(let ye=0;ye<J.locationSize;ye++)g(J.location+ye,ee.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ye=0;ye<J.locationSize;ye++)m(J.location+ye);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let ye=0;ye<J.locationSize;ye++)M(J.location+ye,ke/J.locationSize,pe,he,ke*Re,ke/J.locationSize*ye*Re,He)}}else if(G!==void 0){let he=G[le];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(J.location,he);break;case 3:s.vertexAttrib3fv(J.location,he);break;case 4:s.vertexAttrib4fv(J.location,he);break;default:s.vertexAttrib1fv(J.location,he)}}}}v()}function w(){D();for(let F in n){let U=n[F];for(let k in U){let N=U[k];for(let K in N){let ie=N[K];for(let G in ie)h(ie[G].object),delete ie[G];delete N[K]}}delete n[F]}}function y(F){if(n[F.id]===void 0)return;let U=n[F.id];for(let k in U){let N=U[k];for(let K in N){let ie=N[K];for(let G in ie)h(ie[G].object),delete ie[G];delete N[K]}}delete n[F.id]}function b(F){for(let U in n){let k=n[U];for(let N in k){let K=k[N];if(K[F.id]===void 0)continue;let ie=K[F.id];for(let G in ie)h(ie[G].object),delete ie[G];delete K[F.id]}}}function S(F){for(let U in n){let k=n[U],N=F.isInstancedMesh===!0?F.id:0,K=k[N];if(K!==void 0){for(let ie in K){let G=K[ie];for(let le in G)h(G[le].object),delete G[le];delete K[ie]}delete k[N],Object.keys(k).length===0&&delete n[U]}}}function D(){I(),a=!0,r!==i&&(r=i,l(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:y,releaseStatesOfObject:S,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Yx(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let u=0;u<h;u++)f+=l[u];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Zx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==_i&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let S=b===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==si&&b!==li&&!S&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ve("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),y=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,maxSamples:w,samples:y}}function $x(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Ei,o=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,M=v*4,_=g.clippingState||null;c.value=_,_=h(p,f,M,u);for(let w=0;w!==M;++w)_[w]=t[w];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,p!==!0||m===null){let g=u+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,_=u;M!==x;++M,_+=4)a.copy(d[M]).applyMatrix4(v,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Uo=class extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new oo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new bs(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Tr});r.uniforms.tEquirect.value=t;let a=new rt(i,r),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=bn),new xa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},yp=256,Qx=3,e_=20,Wp=256,qp=16,t_=3,n_=new z,i_=new De,Vl=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new xa(1,10,null),this._boxMesh=new rt(new bs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=n_}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,f=c.autoClearColor,u=c.autoClearDepth,p=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(i_));let m=new xa(n,i,h);return m.position.copy(o),m.update(c,e),c.autoClear=d,c.autoClearColor=f,c.autoClearDepth=u,c.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(yp,Mu(e))}_fromTexture(e,t){e.mapping===Er||e.mapping===va?this._setSize(e.image.length===0?yp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Mp(e,!1,!1),n=Math.log2(e)-Qx;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Mp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Er||e.mapping===va?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Sp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=s_(),this._integrationMaterial=r_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/qp);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-t_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Wp*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=a_());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function Mp(s,e,t){return new Uo(s,{minFilter:xi,generateMipmaps:e,type:Li,colorSpace:jn,depthBuffer:t})}function Oo(s,e,t){return new Un({name:s,uniforms:e,vertexShader:at.cube_vert,fragmentShader:t,side:On,blending:Tr,depthTest:!1,depthWrite:!1})}function s_(){return Oo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Wp}u

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
	`)}function r_(){return Oo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:qp}},`

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
	`)}function a_(){return Oo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${e_}
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
	`)}function Sp(){return Oo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function wp(){return Oo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function o_(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?a(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Qc||u===el)if(e.has(f)){let p=e.get(f).texture;return o(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new Uo(p.height);return x.fromEquirectangularTexture(s,f),e.set(f,x),f.addEventListener("dispose",l),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,p=u===Qc||u===el,x=u===Er||u===va;if(p||x){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Vl(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return p&&v&&v.height>0||x&&v&&c(v)?(n===null&&(n=new Vl(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,u){return u===Qc?f.mapping=Er:u===el&&(f.mapping=va),f}function c(f){let u=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&u++;return u===p}function l(f){let u=f.target;u.removeEventListener("dispose",l);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function c_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ur("WebGLRenderer: "+n+" extension not supported."),i}}}function l_(s,e,t,n){let i={},r=new WeakMap,a=new FinalizationRegistry(p=>delete i[p]);function o(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete i[p.id],a.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)e.update(x[m],s.ARRAY_BUFFER)}function d(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?so:io,_=new M(Math.ceil(v/3)*6,1),w=_.array;if(x!==null){let b=x.array;g=x.version;for(let S=0,D=0;S<v;S+=3){let I=b[S+0],F=b[S+1],U=b[S+2];w[D++]=I,w[D++]=F,w[D++]=F,w[D++]=U,w[D++]=U,w[D++]=I}}else{g=m.version;for(let b=0,S=0;b<v;b+=3){let D=b+0,I=b+1,F=b+2;w[S++]=D,w[S++]=I,w[S++]=I,w[S++]=F,w[S++]=F,w[S++]=D}}_.version=g;let y=r.get(p);y&&e.remove(y),r.set(p,_)}function f(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(let p in i){let x=i[p].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:f,dispose:u}}function h_(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*a,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let x=0;for(let m=0;m<u;m++)x+=f[m];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function u_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function f_(s,e,t){let n=new WeakMap,i=new Ct;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let D=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],M=0;u===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let _=o.attributes.position.count*M,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let y=new Float32Array(_*w*4*d),b=new Qa(y,_,w,d);b.type=li,b.needsUpdate=!0;let S=M*4;for(let I=0;I<d;I++){let F=m[I],U=g[I],k=v[I],N=_*w*4*I;for(let K=0;K<F.count;K++){let ie=K*S;u===!0&&(i.fromBufferAttribute(F,K),y[N+ie+0]=i.x,y[N+ie+1]=i.y,y[N+ie+2]=i.z,y[N+ie+3]=0),p===!0&&(i.fromBufferAttribute(U,K),y[N+ie+4]=i.x,y[N+ie+5]=i.y,y[N+ie+6]=i.z,y[N+ie+7]=0),x===!0&&(i.fromBufferAttribute(k,K),y[N+ie+8]=i.x,y[N+ie+9]=i.y,y[N+ie+10]=i.z,y[N+ie+11]=k.itemSize===4?i.w:1)}}f={count:d,texture:b,size:new Qe(_,w)},n.set(o,f),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let u=0;for(let x=0;x<l.length;x++)u+=l[x];let p=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function d_(s,e,t,n,i){let r=new WeakMap;function a(l){let h=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var p_={[nu]:"LINEAR_TONE_MAPPING",[iu]:"REINHARD_TONE_MAPPING",[su]:"CINEON_TONE_MAPPING",[Eo]:"ACES_FILMIC_TONE_MAPPING",[au]:"AGX_TONE_MAPPING",[ou]:"NEUTRAL_TONE_MAPPING",[ru]:"CUSTOM_TONE_MAPPING"};function m_(s,e,t,n,i,r){let a=new oi(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Ut;h.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new gt([0,2,0,0,2,0],2));let d=new Bc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new rt(h,d),u=new Mr(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,v=null,M=[],_=!1;this.setSize=function(w,y){a.setSize(w,y),o!==null&&o.setSize(w,y),c!==null&&c.setSize(w,y);for(let b=0;b<M.length;b++){let S=M[b];S.setSize&&S.setSize(w,y)}},this.setEffects=function(w){M=w,_=M.length>0&&M[0].isRenderPass===!0;let y=a.width,b=a.height;M.length>0&&o===null&&(o=new oi(y,b,{type:Li,depthBuffer:!1,stencilBuffer:!1}),c=new oi(y,b,{type:Li,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&M.some(D=>D.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new gs(y,b),r===!0&&(l.format=Ss,l.type=Cr)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let D=0;D<M.length;D++){let I=M[D];I.setSize&&I.setSize(y,b),S&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(l)}},this.begin=function(w,y){if(m||w.toneMapping===ji&&M.length===0)return!1;if(v=y,y!==null){let b=y.width,S=y.height;(a.width!==b||a.height!==S)&&this.setSize(b,S)}return _===!1&&w.setRenderTarget(a),g=w.toneMapping,w.toneMapping=ji,!0},this.hasRenderPass=function(){return _},this.end=function(w,y){w.toneMapping=g,m=!0;let b=a,S=o;for(let D=0;D<M.length;D++){let I=M[D];I.enabled!==!1&&(I.render(w,S,b,y),I.needsSwap!==!1&&(b=S,S=S===o?c:o))}if(p!==w.outputColorSpace||x!==w.toneMapping){p=w.outputColorSpace,x=w.toneMapping,d.defines={},ht.getTransfer(p)===wt&&(d.defines.SRGB_TRANSFER="");let D=p_[x];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=b.texture,w.setRenderTarget(v),w.render(f,u),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var Xp=new xn,jp=new gs(1,1),Kp=new lo(1),Jp=new Qa,Yp=new Fc,Zp=new oo,Tp=[],Ap=[],Ep=new Float32Array(16),Rp=new Float32Array(9),Cp=new Float32Array(4);function Ra(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Tp[i];if(r===void 0&&(r=new Float32Array(i),Tp[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function yn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Mn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ql(s,e){let t=Ap[e];t===void 0&&(t=new Int32Array(e),Ap[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function g_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function b_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2fv(this.addr,e),Mn(t,e)}}function x_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;s.uniform3fv(this.addr,e),Mn(t,e)}}function __(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4fv(this.addr,e),Mn(t,e)}}function v_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(yn(t,n))return;Cp.set(n),s.uniformMatrix2fv(this.addr,!1,Cp),Mn(t,n)}}function y_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(yn(t,n))return;Rp.set(n),s.uniformMatrix3fv(this.addr,!1,Rp),Mn(t,n)}}function M_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(yn(t,n))return;Ep.set(n),s.uniformMatrix4fv(this.addr,!1,Ep),Mn(t,n)}}function S_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function w_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2iv(this.addr,e),Mn(t,e)}}function T_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;s.uniform3iv(this.addr,e),Mn(t,e)}}function A_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4iv(this.addr,e),Mn(t,e)}}function E_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function R_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2uiv(this.addr,e),Mn(t,e)}}function C_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;s.uniform3uiv(this.addr,e),Mn(t,e)}}function P_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4uiv(this.addr,e),Mn(t,e)}}function Xl(s){return s.version===0&&(s.compareFunction=xu,s.needsUpdate=!0),s}function I_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Xl(jp):r=Xp,t.setTexture2D(e||r,i)}function L_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yp,i)}function D_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Xl(Kp):r=Zp,t.setTextureCube(e||r,i)}function N_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jp,i)}function F_(s){switch(s){case 5126:return g_;case 35664:return b_;case 35665:return x_;case 35666:return __;case 35674:return v_;case 35675:return y_;case 35676:return M_;case 5124:case 35670:return S_;case 35667:case 35671:return w_;case 35668:case 35672:return T_;case 35669:case 35673:return A_;case 5125:return E_;case 36294:return R_;case 36295:return C_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return N_}}function k_(s,e){s.uniform1fv(this.addr,e)}function U_(s,e){let t=Ra(e,this.size,2);s.uniform2fv(this.addr,t)}function O_(s,e){let t=Ra(e,this.size,3);s.uniform3fv(this.addr,t)}function B_(s,e){let t=Ra(e,this.size,4);s.uniform4fv(this.addr,t)}function z_(s,e){let t=Ra(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function G_(s,e){let t=Ra(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function H_(s,e){let t=Ra(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function V_(s,e){s.uniform1iv(this.addr,e)}function W_(s,e){s.uniform2iv(this.addr,e)}function q_(s,e){s.uniform3iv(this.addr,e)}function X_(s,e){s.uniform4iv(this.addr,e)}function j_(s,e){s.uniform1uiv(this.addr,e)}function K_(s,e){s.uniform2uiv(this.addr,e)}function J_(s,e){s.uniform3uiv(this.addr,e)}function Y_(s,e){s.uniform4uiv(this.addr,e)}function Z_(s,e,t){let n=this.cache,i=e.length,r=ql(t,i);yn(n,r)||(s.uniform1iv(this.addr,r),Mn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Xl(jp):a=Xp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function $_(s,e,t){let n=this.cache,i=e.length,r=ql(t,i);yn(n,r)||(s.uniform1iv(this.addr,r),Mn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Yp,r[a])}function Q_(s,e,t){let n=this.cache,i=e.length,r=ql(t,i);yn(n,r)||(s.uniform1iv(this.addr,r),Mn(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Xl(Kp):a=Zp;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function ev(s,e,t){let n=this.cache,i=e.length,r=ql(t,i);yn(n,r)||(s.uniform1iv(this.addr,r),Mn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Jp,r[a])}function tv(s){switch(s){case 5126:return k_;case 35664:return U_;case 35665:return O_;case 35666:return B_;case 35674:return z_;case 35675:return G_;case 35676:return H_;case 5124:case 35670:return V_;case 35667:case 35671:return W_;case 35668:case 35672:return q_;case 35669:case 35673:return X_;case 5125:return j_;case 36294:return K_;case 36295:return J_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return ev}}var ku=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=F_(t.type)}},Uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tv(t.type)}},Ou=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Nu=/(\w+)(\])?(\[|\.)?/g;function Pp(s,e){s.seq.push(e),s.map[e.id]=e}function nv(s,e,t){let n=s.name,i=n.length;for(Nu.lastIndex=0;;){let r=Nu.exec(n),a=Nu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Pp(t,l===void 0?new ku(o,s,e):new Uu(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Ou(o),Pp(t,d)),t=d}}}var Ea=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);nv(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Ip(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var iv=37297,sv=0;function rv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Lp=new et;function av(s){ht._getMatrix(Lp,ht.workingColorSpace,s);let e=`mat3( ${Lp.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(s)){case Za:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Dp(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+rv(s.getShaderSource(e),o)}else return r}function ov(s,e){let t=av(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var cv={[nu]:"Linear",[iu]:"Reinhard",[su]:"Cineon",[Eo]:"ACESFilmic",[au]:"AgX",[ou]:"Neutral",[ru]:"Custom"};function lv(s,e){let t=cv[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Hl=new z;function hv(){ht.getLuminanceCoefficients(Hl);let s=Hl.x.toFixed(4),e=Hl.y.toFixed(4),t=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function fv(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ko(s){return s!==""}function Np(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Fp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bu(s){return s.replace(pv,mv)}function mv(s,e){let t=at[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Bu(t)}var gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kp(s){return s.replace(gv,bv)}function bv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Up(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var xv={[Ao]:"SHADOWMAP_TYPE_PCF",[_a]:"SHADOWMAP_TYPE_VSM"};function _v(s){return xv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vv={[va]:"ENVMAP_MODE_REFRACTION"};function yv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":vv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Mv={[$c]:"ENVMAP_BLENDING_MULTIPLY",[ep]:"ENVMAP_BLENDING_MIX",[tp]:"ENVMAP_BLENDING_ADD"};function Sv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Mv[s.combine]||"ENVMAP_BLENDING_NONE"}function wv(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=_v(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=yv(t),d=Sv(t),f=uv(t),u=fv(r),p=i.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(ko).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(ko).join(`
`),m.length>0&&(m+=`
`)):(x=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),m=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?at.tonemapping_pars_fragment:"",t.toneMapping!==ji?lv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,ov("linearToOutputTexel",t.outputColorSpace),hv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),a=Bu(a),a=Np(a,t),a=Fp(a,t),o=Bu(o),o=Np(o,t),o=Fp(o,t),a=kp(a),o=kp(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+x+a,M=g+m+o,_=Ip(i,i.VERTEX_SHADER,v),w=Ip(i,i.FRAGMENT_SHADER,M);i.attachShader(p,_),i.attachShader(p,w),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function y(I){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(p)||"",U=i.getShaderInfoLog(_)||"",k=i.getShaderInfoLog(w)||"",N=F.trim(),K=U.trim(),ie=k.trim(),G=!0,le=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,_,w);else{let J=Dp(i,_,"vertex"),ee=Dp(i,w,"fragment");$e("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+J+`
`+ee)}else N!==""?Ve("WebGLProgram: Program Info Log:",N):(K===""||ie==="")&&(le=!1);le&&(I.diagnostics={runnable:G,programLog:N,vertexShader:{log:K,prefix:x},fragmentShader:{log:ie,prefix:m}})}i.deleteShader(_),i.deleteShader(w),b=new Ea(i,p),S=dv(i,p)}let b;this.getUniforms=function(){return b===void 0&&y(this),b};let S;this.getAttributes=function(){return S===void 0&&y(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(p,iv)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=w,this}var Tv=0,zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Gu(e),t.set(e,n)),n}},Gu=class{constructor(e){this.id=Tv++,this.code=e,this.usedTimes=0}};function Av(s){return s===qs||s===Lo||s===Do}function Ev(s,e,t,n,i,r){let a=new eo,o=new zu,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,S,D,I,F,U){let k=I.fog,N=F.geometry,K=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,ie=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,G=e.get(b.envMap||K,ie),le=f[b.type],J=n.precision;b.precision!==null&&(J=n.getMaxPrecision(b.precision),J!==b.precision&&Ve("WebGLProgram.getParameters:",b.precision,"not supported, using",J,"instead."));let ee=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,he=ee!==void 0?ee.length:0,ke=0;N.morphAttributes.position!==void 0&&(ke=1),N.morphAttributes.normal!==void 0&&(ke=2),N.morphAttributes.color!==void 0&&(ke=3);let Je,ae,pe,Re;if(le){let Ce=Yi[le];Je=Ce.vertexShader,ae=Ce.fragmentShader}else{Je=b.vertexShader,ae=b.fragmentShader;let Ce=o.getVertexShaderStage(b),Ue=o.getFragmentShaderStage(b);o.update(b,Ce,Ue),pe=Ce.id,Re=Ue.id}let He=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Ze=F.isInstancedMesh===!0,At=F.isBatchedMesh===!0,We=!!b.map,xt=!!b.matcap,_t=!!G,st=_t&&G.isPMREMTexture===!0,rn=!!b.aoMap,jt=!!b.lightMap,fn=!!b.bumpMap&&b.wireframe===!1,Ot=!!b.normalMap,An=!!b.displacementMap,Jt=!!b.emissiveMap,Ln=!!b.metalnessMap,Dn=!!b.roughnessMap,Nn=b.anisotropy>0,H=b.clearcoat>0,Fn=b.diffuseRoughness>0,Pt=b.dispersion>0,Et=b.retroreflectivity>0,Ae=b.iridescence>0,zt=b.sheen>0,Xe=b.transmission>0,ze=Nn&&!!b.anisotropyMap,C=H&&!!b.clearcoatMap,T=H&&!!b.clearcoatNormalMap,W=H&&!!b.clearcoatRoughnessMap,be=Fn&&!!b.diffuseRoughnessMap,$=Ae&&!!b.iridescenceMap,Se=Ae&&!!b.iridescenceThicknessMap,oe=zt&&!!b.sheenColorMap,te=zt&&!!b.sheenRoughnessMap,re=!!b.specularMap,Te=!!b.specularColorMap,L=!!b.specularIntensityMap,se=Xe&&!!b.transmissionMap,Q=Xe&&!!b.thicknessMap,Me=!!b.gradientMap,me=!!b.alphaMap,xe=b.alphaTest>0,Ne=!!b.alphaHash,tt=!!b.extensions,de=ji;b.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(de=s.toneMapping);let Be=st?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Ye={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Je,fragmentShader:ae,defines:b.defines,customVertexShaderID:pe,customFragmentShaderID:Re,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:J,batching:At,batchingColor:At&&F._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&F.instanceColor!==null,instancingMorph:Ze&&F.morphTexture!==null,outputColorSpace:He===null?s.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:We,matcap:xt,envMap:_t,envMapMode:_t&&G.mapping,envMapPMREM:st,envMapMaxLod:st?Be.length-1:null,envMapSize:st?Be[0].width:null,aoMap:rn,lightMap:jt,bumpMap:fn,normalMap:Ot,displacementMap:An,emissiveMap:Jt,normalMapObjectSpace:Ot&&b.normalMapType===ap,normalMapTangentSpace:Ot&&b.normalMapType===Aa,packedNormalMap:Ot&&b.normalMapType===Aa&&Av(b.normalMap.format),metalnessMap:Ln,roughnessMap:Dn,anisotropy:Nn,anisotropyMap:ze,clearcoat:H,clearcoatMap:C,clearcoatNormalMap:T,clearcoatRoughnessMap:W,diffuseRoughness:Fn,diffuseRoughnessMap:be,dispersion:Pt,retroreflection:Et,iridescence:Ae,iridescenceMap:$,iridescenceThicknessMap:Se,sheen:zt,sheenColorMap:oe,sheenRoughnessMap:te,specularMap:re,specularColorMap:Te,specularIntensityMap:L,transmission:Xe,transmissionMap:se,thicknessMap:Q,gradientMap:Me,opaque:b.transparent===!1&&b.blending===Ws&&b.alphaToCoverage===!1,alphaMap:me,alphaTest:xe,alphaHash:Ne,combine:b.combine,mapUv:We&&u(b.map.channel),aoMapUv:rn&&u(b.aoMap.channel),lightMapUv:jt&&u(b.lightMap.channel),bumpMapUv:fn&&u(b.bumpMap.channel),normalMapUv:Ot&&u(b.normalMap.channel),displacementMapUv:An&&u(b.displacementMap.channel),emissiveMapUv:Jt&&u(b.emissiveMap.channel),metalnessMapUv:Ln&&u(b.metalnessMap.channel),roughnessMapUv:Dn&&u(b.roughnessMap.channel),anisotropyMapUv:ze&&u(b.anisotropyMap.channel),clearcoatMapUv:C&&u(b.clearcoatMap.channel),clearcoatNormalMapUv:T&&u(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&u(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&u(b.diffuseRoughnessMap.channel),iridescenceMapUv:$&&u(b.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&u(b.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&u(b.sheenColorMap.channel),sheenRoughnessMapUv:te&&u(b.sheenRoughnessMap.channel),specularMapUv:re&&u(b.specularMap.channel),specularColorMapUv:Te&&u(b.specularColorMap.channel),specularIntensityMapUv:L&&u(b.specularIntensityMap.channel),transmissionMapUv:se&&u(b.transmissionMap.channel),thicknessMapUv:Q&&u(b.thicknessMap.channel),alphaMapUv:me&&u(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ot||Nn),vertexNormals:!!N.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(We||me),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||N.attributes.normal===void 0&&Ot===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:ke,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(Ce=>Ce.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,decodeVideoTexture:We&&b.map.isVideoTexture===!0&&ht.getTransfer(b.map.colorSpace)===wt,decodeVideoTextureEmissive:Jt&&b.emissiveMap.isVideoTexture===!0&&ht.getTransfer(b.emissiveMap.colorSpace)===wt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===un,flipSided:b.side===On,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:tt&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&b.extensions.multiDraw===!0||At)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function x(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(m(S,b),g(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function m(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapPMREM),b.push(S.envMapMaxLod),b.push(S.envMapSize),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.diffuseRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.numSunLights),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numSunLightShadows),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.numLightProbeGrids),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function g(b,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function v(b){let S=f[b.type],D;if(S){let I=Yi[S];D=xp.clone(I.uniforms)}else D=b.uniforms;return D}function M(b,S){let D=h.get(S);return D!==void 0?++D.usedTimes:(D=new wv(s,S,b,i),l.push(D),h.set(S,D)),D}function _(b){if(--b.usedTimes===0){let S=l.indexOf(b);l[S]=l[l.length-1],l.pop(),h.delete(b.cacheKey),b.destroy()}}function w(b){o.remove(b)}function y(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:M,releaseProgram:_,releaseShaderCache:w,programs:l,dispose:y}}function Rv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Cv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Op(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Bp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,p,x,m,g){let v=s[e];return v===void 0?(v={id:f.id,object:f,geometry:u,material:p,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},s[e]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=p,v.materialVariant=a(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=g),e++,v}function c(f,u,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let M=o(f,u,p,x,m,g);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):t.push(M)}function l(f,u,p,x,m,g){let v=o(f,u,p,x,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function h(f,u){t.length>1&&t.sort(f||Cv),n.length>1&&n.sort(u||Op),i.length>1&&i.sort(u||Op)}function d(){for(let f=e,u=s.length;f<u;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:h}}function Pv(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Bp,s.set(n,[a])):i>=r.length?(a=new Bp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Iv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new De};break;case"SpotLight":t={position:new z,direction:new z,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function Lv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Dv=0;function Nv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Fv(s){let e=new Iv,t=Lv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);let i=new z,r=new qe,a=new qe;function o(l){let h=0,d=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,v=0,M=0,_=0,w=0,y=0,b=0,S=0,D=0,I=0;l.sort(Nv);for(let U=0,k=l.length;U<k;U++){let N=l[U],K=N.color,ie=N.intensity,G=N.distance,le=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===qs?le=N.shadow.map.texture:le=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=K.r*ie,d+=K.g*ie,f+=K.b*ie;else if(N.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(N.sh.coefficients[J],ie);I++}else if(N.isSunLight){let J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ee=N.shadow,he=t.get(N);he.shadowIntensity=ee.intensity,he.shadowBias=ee.bias,he.shadowNormalBias=ee.normalBias,he.shadowRadius=ee.radius,he.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[p]=he,n.sunShadowMap[p]=le;let ke=ee.getViewportCount();for(let Je=0;Je<ke;Je++)n.sunShadowMatrix[x+Je]=ee.getMatrix(Je),n.sunShadowCascade[x+Je]=ee._cascadeData[Je];x+=ke,p++}n.sun[u]=J,u++}else if(N.isDirectionalLight){let J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ee=N.shadow,he=t.get(N);he.shadowIntensity=ee.intensity,he.shadowBias=ee.bias,he.shadowNormalBias=ee.normalBias,he.shadowRadius=ee.radius,he.shadowMapSize=ee.mapSize,n.directionalShadow[m]=he,n.directionalShadowMap[m]=le,n.directionalShadowMatrix[m]=N.shadow.matrix,w++}n.directional[m]=J,m++}else if(N.isSpotLight){let J=e.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(K).multiplyScalar(ie),J.distance=G,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,n.spot[v]=J;let ee=N.shadow;if(N.map&&(n.spotLightMap[S]=N.map,S++,ee.updateMatrices(N),N.castShadow&&D++),n.spotLightMatrix[v]=ee.matrix,N.castShadow){let he=t.get(N);he.shadowIntensity=ee.intensity,he.shadowBias=ee.bias,he.shadowNormalBias=ee.normalBias,he.shadowRadius=ee.radius,he.shadowMapSize=ee.mapSize,n.spotShadow[v]=he,n.spotShadowMap[v]=le,b++}v++}else if(N.isRectAreaLight){let J=e.get(N);J.color.copy(K).multiplyScalar(ie),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),n.rectArea[M]=J,M++}else if(N.isPointLight){let J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){let ee=N.shadow,he=t.get(N);he.shadowIntensity=ee.intensity,he.shadowBias=ee.bias,he.shadowNormalBias=ee.normalBias,he.shadowRadius=ee.radius,he.shadowMapSize=ee.mapSize,he.shadowCameraNear=ee.camera.near,he.shadowCameraFar=ee.camera.far,n.pointShadow[g]=he,n.pointShadowMap[g]=le,n.pointShadowMatrix[g]=N.shadow.matrix,y++}n.point[g]=J,g++}else if(N.isHemisphereLight){let J=e.get(N);J.skyColor.copy(N.color).multiplyScalar(ie),J.groundColor.copy(N.groundColor).multiplyScalar(ie),n.hemi[_]=J,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let F=n.hash;(F.sunLength!==u||F.directionalLength!==m||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==M||F.hemiLength!==_||F.numSunShadows!==p||F.numDirectionalShadows!==w||F.numPointShadows!==y||F.numSpotShadows!==b||F.numSpotMaps!==S||F.numLightProbes!==I)&&(n.sun.length=u,n.directional.length=m,n.spot.length=v,n.rectArea.length=M,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+S-D,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=I,F.sunLength=u,F.directionalLength=m,F.pointLength=g,F.spotLength=v,F.rectAreaLength=M,F.hemiLength=_,F.numSunShadows=p,F.numDirectionalShadows=w,F.numPointShadows=y,F.numSpotShadows=b,F.numSpotMaps=S,F.numLightProbes=I,n.version=Dv++)}function c(l,h){let d=0,f=0,u=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let v=0,M=l.length;v<M;v++){let _=l[v];if(_.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),d++}else if(_.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),f++}else if(_.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let w=n.point[u];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:o,setupView:c,state:n}}function zp(s){let e=new Fv(s),t=[],n=[],i=[];function r(d){h.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function c(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function kv(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new zp(s),e.set(i,[o])):r>=a.length?(o=new zp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ov=`uniform sampler2D shadow_pass;
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
}`,Bv=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],zv=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Gp=new qe,Fo=new z,Fu=new z;function Gv(s,e,t){let n=new zs,i=new Qe,r=new Qe,a=new Ct,o=new zc,c=new Gc,l={},h=t.maxTextureSize,d={[Xi]:On,[On]:Xi,[un]:un},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Uv,fragmentShader:Ov}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new Ut;p.setAttribute("position",new nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new rt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let g=this.type;this.render=function(y,b,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===Fd&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ao);let D=s.getRenderTarget(),I=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Tr),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=g!==this.type;k&&b.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(K=>K.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,K=y.length;N<K;N++){let ie=y[N],G=ie.shadow;if(G===void 0){Ve("WebGLShadowMap:",ie,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let le=G.getFrameExtents();i.multiply(le),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/le.x),i.x=r.x*le.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/le.y),i.y=r.y*le.y,G.mapSize.y=r.y));let J=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=J,G.map===null||k===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===_a){if(ie.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new oi(i.x,i.y,{format:qs,type:Li,minFilter:bn,magFilter:bn,generateMipmaps:!1}),G.map.texture.name=ie.name+".shadowMap",G.map.depthTexture=new gs(i.x,i.y,li),G.map.depthTexture.name=ie.name+".shadowMapDepth",G.map.depthTexture.format=ds,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=$t,G.map.depthTexture.magFilter=$t}else ie.isPointLight?(G.map=new Uo(i.x),G.map.depthTexture=new lo(i.x,Ii)):(G.map=new oi(i.x,i.y),G.map.depthTexture=new gs(i.x,i.y,Ii)),G.map.depthTexture.name=ie.name+".shadowMap",G.map.depthTexture.format=ds,this.type===Ao?(G.map.depthTexture.compareFunction=J?bu:gu,G.map.depthTexture.minFilter=bn,G.map.depthTexture.magFilter=bn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=$t,G.map.depthTexture.magFilter=$t);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);let ee=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();ie.isPointLight!==!0&&G.updateMatrices(ie,S);let he=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let ke=0;ke<ee;ke++){let Je=G.getCamera(ke);if(ie.isPointLight){let ae=G.camera,pe=G.matrix,Re=ie.distance||ae.far;Re!==ae.far&&(ae.far=Re,ae.updateProjectionMatrix()),Fo.setFromMatrixPosition(ie.matrixWorld),ae.position.copy(Fo),Fu.copy(ae.position),Fu.add(Bv[ke]),ae.up.copy(zv[ke]),ae.lookAt(Fu),ae.updateMatrixWorld(),pe.makeTranslation(-Fo.x,-Fo.y,-Fo.z),Gp.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Gp,ae.coordinateSystem,ae.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,ke),s.clear();else{ke===0&&(s.setRenderTarget(G.map),s.clear());let ae=G.getViewport(ke);a.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),U.viewport(a)}n=G.getFrustum(ke),_(b,S,Je,ie,he,this.type)}G.isPointLightShadow!==!0&&this.type===_a&&v(G,S),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(D,I,F)};function v(y,b){let S=e.update(x);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,u.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),y.mapPass===null?y.mapPass=new oi(i.x,i.y,{format:qs,type:Li}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),f.uniforms.shadow_pass.value=y.map.depthTexture,f.uniforms.resolution.value.set(y.map.width,y.map.height),f.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(b,null,S,f,x,null),u.uniforms.shadow_pass.value=y.mapPass.texture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(b,null,S,u,x,null)}function M(y,b,S,D){let I=null,F=S.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(F!==void 0)I=F;else if(I=S.isPointLight===!0?c:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let U=I.uuid,k=b.uuid,N=l[U];N===void 0&&(N={},l[U]=N);let K=N[k];K===void 0&&(K=I.clone(),N[k]=K,b.addEventListener("dispose",w)),I=K}if(I.visible=b.visible,I.wireframe=b.wireframe,D===_a?I.side=b.shadowSide!==null?b.shadowSide:b.side:I.side=b.shadowSide!==null?b.shadowSide:d[b.side],I.alphaMap=b.alphaMap,I.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,I.map=b.map,I.clipShadows=b.clipShadows,I.clippingPlanes=b.clippingPlanes,I.clipIntersection=b.clipIntersection,I.displacementMap=b.displacementMap,I.displacementScale=b.displacementScale,I.displacementBias=b.displacementBias,I.wireframeLinewidth=b.wireframeLinewidth,I.linewidth=b.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let U=s.properties.get(I);U.light=S}return I}function _(y,b,S,D,I,F){if(y.visible===!1)return;if(y.layers.test(I)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&F===_a)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,y.matrixWorld);let N=e.update(y),K=y.material;if(Array.isArray(K)){let ie=N.groups;for(let G=0,le=ie.length;G<le;G++){let J=ie[G],ee=K[J.materialIndex];if(ee&&ee.visible){let he=M(y,ee,D,F);y.onBeforeShadow(s,y,b,S,N,he,J),s.renderBufferDirect(S,null,N,he,y,J),y.onAfterShadow(s,y,b,S,N,he,J)}}}else if(K.visible){let ie=M(y,K,D,F);y.onBeforeShadow(s,y,b,S,N,ie,null),s.renderBufferDirect(S,null,N,ie,y,null),y.onAfterShadow(s,y,b,S,N,ie,null)}}let k=y.children;for(let N=0,K=k.length;N<K;N++)_(k[N],b,S,D,I,F)}function w(y){y.target.removeEventListener("dispose",w);for(let S in l){let D=l[S],I=y.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}}function Hv(s,e){function t(){let L=!1,se=new Ct,Q=null,Me=new Ct(0,0,0,0);return{setMask:function(me){Q!==me&&!L&&(s.colorMask(me,me,me,me),Q=me)},setLocked:function(me){L=me},setClear:function(me,xe,Ne,tt,de){de===!0&&(me*=tt,xe*=tt,Ne*=tt),se.set(me,xe,Ne,tt),Me.equals(se)===!1&&(s.clearColor(me,xe,Ne,tt),Me.copy(se))},reset:function(){L=!1,Q=null,Me.set(-1,0,0,0)}}}function n(){let L=!1,se=!1,Q=null,Me=null,me=null;return{setReversed:function(xe){if(se!==xe){let Ne=e.get("EXT_clip_control");xe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),se=xe;let tt=me;me=null,this.setClear(tt)}},getReversed:function(){return se},setTest:function(xe){xe?ye(s.DEPTH_TEST):Ze(s.DEPTH_TEST)},setMask:function(xe){Q!==xe&&!L&&(s.depthMask(xe),Q=xe)},setFunc:function(xe){if(se&&(xe=gp[xe]),Me!==xe){switch(xe){case Ac:s.depthFunc(s.NEVER);break;case Ec:s.depthFunc(s.ALWAYS);break;case Rc:s.depthFunc(s.LESS);break;case sa:s.depthFunc(s.LEQUAL);break;case Cc:s.depthFunc(s.EQUAL);break;case Pc:s.depthFunc(s.GEQUAL);break;case Ic:s.depthFunc(s.GREATER);break;case Lc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Me=xe}},setLocked:function(xe){L=xe},setClear:function(xe){me!==xe&&(me=xe,se&&(xe=1-xe),s.clearDepth(xe))},reset:function(){L=!1,Q=null,Me=null,me=null,se=!1}}}function i(){let L=!1,se=null,Q=null,Me=null,me=null,xe=null,Ne=null,tt=null,de=null;return{setTest:function(Be){L||(Be?ye(s.STENCIL_TEST):Ze(s.STENCIL_TEST))},setMask:function(Be){se!==Be&&!L&&(s.stencilMask(Be),se=Be)},setFunc:function(Be,Ye,Ce){(Q!==Be||Me!==Ye||me!==Ce)&&(s.stencilFunc(Be,Ye,Ce),Q=Be,Me=Ye,me=Ce)},setOp:function(Be,Ye,Ce){(xe!==Be||Ne!==Ye||tt!==Ce)&&(s.stencilOp(Be,Ye,Ce),xe=Be,Ne=Ye,tt=Ce)},setLocked:function(Be){L=Be},setClear:function(Be){de!==Be&&(s.clearStencil(Be),de=Be)},reset:function(){L=!1,se=null,Q=null,Me=null,me=null,xe=null,Ne=null,tt=null,de=null}}}let r=new t,a=new n,o=new i,c={},l=new WeakMap,h={},d={},f={},u=new WeakMap,p=[],x=null,m=!1,g=null,v=null,M=null,_=null,w=null,y=null,b=null,S=new De(0,0,0),D=0,I=!1,F=null,U=null,k=null,N=null,K=null,ie=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,le=0,J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(J)[1]),G=le>=1):J.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),G=le>=2);let ee=null,he={},ke=s.getParameter(s.SCISSOR_BOX),Je=s.getParameter(s.VIEWPORT),ae=new Ct().fromArray(ke),pe=new Ct().fromArray(Je);function Re(L,se,Q,Me){let me=new Uint8Array(4),xe=s.createTexture();s.bindTexture(L,xe),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<Q;Ne++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(se,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(se+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return xe}let He={};He[s.TEXTURE_2D]=Re(s.TEXTURE_2D,s.TEXTURE_2D,1),He[s.TEXTURE_CUBE_MAP]=Re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),He[s.TEXTURE_2D_ARRAY]=Re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),He[s.TEXTURE_3D]=Re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ye(s.DEPTH_TEST),a.setFunc(sa),fn(!1),Ot(Zh),ye(s.CULL_FACE),rn(Tr);function ye(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Ze(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function At(L,se){return f[L]!==se?(s.bindFramebuffer(L,se),f[L]=se,L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=se),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=se),!0):!1}function We(L,se){let Q=p,Me=!1;if(L){Q=u.get(se),Q===void 0&&(Q=[],u.set(se,Q));let me=L.textures;if(Q.length!==me.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,Ne=me.length;xe<Ne;xe++)Q[xe]=s.COLOR_ATTACHMENT0+xe;Q.length=me.length,Me=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,Me=!0);Me&&s.drawBuffers(Q)}function xt(L){return x!==L?(s.useProgram(L),x=L,!0):!1}let _t={[Ar]:s.FUNC_ADD,[Ud]:s.FUNC_SUBTRACT,[Od]:s.FUNC_REVERSE_SUBTRACT};_t[Bd]=s.MIN,_t[zd]=s.MAX;let st={[Gd]:s.ZERO,[Hd]:s.ONE,[Vd]:s.SRC_COLOR,[eu]:s.SRC_ALPHA,[Jd]:s.SRC_ALPHA_SATURATE,[jd]:s.DST_COLOR,[qd]:s.DST_ALPHA,[Wd]:s.ONE_MINUS_SRC_COLOR,[tu]:s.ONE_MINUS_SRC_ALPHA,[Kd]:s.ONE_MINUS_DST_COLOR,[Xd]:s.ONE_MINUS_DST_ALPHA,[Yd]:s.CONSTANT_COLOR,[Zd]:s.ONE_MINUS_CONSTANT_COLOR,[$d]:s.CONSTANT_ALPHA,[Qd]:s.ONE_MINUS_CONSTANT_ALPHA};function rn(L,se,Q,Me,me,xe,Ne,tt,de,Be){if(L===Tr){m===!0&&(Ze(s.BLEND),m=!1);return}if(m===!1&&(ye(s.BLEND),m=!0),L!==kd){if(L!==g||Be!==I){if((v!==Ar||w!==Ar)&&(s.blendEquation(s.FUNC_ADD),v=Ar,w=Ar),Be)switch(L){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yn:s.blendFunc(s.ONE,s.ONE);break;case $h:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:$e("WebGLState: Invalid blending: ",L);break}else switch(L){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case $h:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qh:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",L);break}M=null,_=null,y=null,b=null,S.set(0,0,0),D=0,g=L,I=Be}return}me=me||se,xe=xe||Q,Ne=Ne||Me,(se!==v||me!==w)&&(s.blendEquationSeparate(_t[se],_t[me]),v=se,w=me),(Q!==M||Me!==_||xe!==y||Ne!==b)&&(s.blendFuncSeparate(st[Q],st[Me],st[xe],st[Ne]),M=Q,_=Me,y=xe,b=Ne),(tt.equals(S)===!1||de!==D)&&(s.blendColor(tt.r,tt.g,tt.b,de),S.copy(tt),D=de),g=L,I=!1}function jt(L,se){L.side===un?Ze(s.CULL_FACE):ye(s.CULL_FACE);let Q=L.side===On;se&&(Q=!Q),fn(Q),L.blending===Ws&&L.transparent===!1?rn(Tr):rn(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let Me=L.stencilWrite;o.setTest(Me),Me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Jt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function fn(L){F!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),F=L)}function Ot(L){L!==Dd?(ye(s.CULL_FACE),L!==U&&(L===Zh?s.cullFace(s.BACK):L===Nd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ze(s.CULL_FACE),U=L}function An(L){L!==k&&(G&&s.lineWidth(L),k=L)}function Jt(L,se,Q){L?(ye(s.POLYGON_OFFSET_FILL),(N!==se||K!==Q)&&(N=se,K=Q,a.getReversed()&&(se=-se,Q=-Q),s.polygonOffset(se,Q))):Ze(s.POLYGON_OFFSET_FILL)}function Ln(L){L?ye(s.SCISSOR_TEST):Ze(s.SCISSOR_TEST)}function Dn(L){L===void 0&&(L=s.TEXTURE0+ie-1),ee!==L&&(s.activeTexture(L),ee=L)}function Nn(L,se,Q){Q===void 0&&(ee===null?Q=s.TEXTURE0+ie-1:Q=ee);let Me=he[Q];Me===void 0&&(Me={type:void 0,texture:void 0},he[Q]=Me),(Me.type!==L||Me.texture!==se)&&(ee!==Q&&(s.activeTexture(Q),ee=Q),s.bindTexture(L,se||He[L]),Me.type=L,Me.texture=se)}function H(){let L=he[ee];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Fn(){try{s.compressedTexImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function Pt(){try{s.compressedTexImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function Et(){try{s.texSubImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function Ae(){try{s.texSubImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function zt(){try{s.compressedTexSubImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function Xe(){try{s.compressedTexSubImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function ze(){try{s.texStorage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function C(){try{s.texStorage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function T(){try{s.texImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function W(){try{s.texImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function be(L){return d[L]!==void 0?d[L]:s.getParameter(L)}function $(L,se){d[L]!==se&&(s.pixelStorei(L,se),d[L]=se)}function Se(L){ae.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function oe(L){pe.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),pe.copy(L))}function te(L,se){let Q=l.get(se);Q===void 0&&(Q=new WeakMap,l.set(se,Q));let Me=Q.get(L);Me===void 0&&(Me=s.getUniformBlockIndex(se,L.name),s.uniformBlockBinding(se,Me,Me),Q.set(L,Me))}function re(L,se,Q){let me=l.get(se).get(L);c[me]!==Q&&(s.bindBufferBase(s.UNIFORM_BUFFER,me,Q),c[me]=Q)}function Te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},ee=null,he={},f={},c={},u=new WeakMap,p=[],x=null,m=!1,g=null,v=null,M=null,_=null,w=null,y=null,b=null,S=new De(0,0,0),D=0,I=!1,F=null,U=null,k=null,N=null,K=null,ae.set(0,0,s.canvas.width,s.canvas.height),pe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ye,disable:Ze,bindFramebuffer:At,drawBuffers:We,useProgram:xt,setBlending:rn,setMaterial:jt,setFlipSided:fn,setCullFace:Ot,setLineWidth:An,setPolygonOffset:Jt,setScissorTest:Ln,activeTexture:Dn,bindTexture:Nn,unbindTexture:H,compressedTexImage2D:Fn,compressedTexImage3D:Pt,texImage2D:T,texImage3D:W,pixelStorei:$,getParameter:be,updateUBOMapping:te,uniformBlockBinding:re,texStorage2D:ze,texStorage3D:C,texSubImage2D:Et,texSubImage3D:Ae,compressedTexSubImage2D:zt,compressedTexSubImage3D:Xe,scissor:Se,viewport:oe,reset:Te}}function Vv(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qe,h=new WeakMap,d=new Set,f,u=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return m?new OffscreenCanvas(C,T):oa("canvas")}function v(C,T,W){let be=1,$=ze(C);if(($.width>W||$.height>W)&&(be=W/Math.max($.width,$.height)),be<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Se=Math.floor(be*$.width),oe=Math.floor(be*$.height);f===void 0&&(f=g(Se,oe));let te=T?g(Se,oe):f;return te.width=Se,te.height=oe,te.getContext("2d").drawImage(C,0,0,Se,oe),Ve("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Se+"x"+oe+")."),te}else return"data"in C&&Ve("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function M(C){return C.generateMipmaps}function _(C){s.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(C,T,W,be,$,Se=!1){if(C!==null){if(s[C]!==void 0)return s[C];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe;be&&(oe=e.get("EXT_texture_norm16"),oe||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=T;if(T===s.RED&&(W===s.FLOAT&&(te=s.R32F),W===s.HALF_FLOAT&&(te=s.R16F),W===s.UNSIGNED_BYTE&&(te=s.R8),W===s.UNSIGNED_SHORT&&oe&&(te=oe.R16_EXT),W===s.SHORT&&oe&&(te=oe.R16_SNORM_EXT)),T===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(te=s.R8UI),W===s.UNSIGNED_SHORT&&(te=s.R16UI),W===s.UNSIGNED_INT&&(te=s.R32UI),W===s.BYTE&&(te=s.R8I),W===s.SHORT&&(te=s.R16I),W===s.INT&&(te=s.R32I)),T===s.RG&&(W===s.FLOAT&&(te=s.RG32F),W===s.HALF_FLOAT&&(te=s.RG16F),W===s.UNSIGNED_BYTE&&(te=s.RG8),W===s.UNSIGNED_SHORT&&oe&&(te=oe.RG16_EXT),W===s.SHORT&&oe&&(te=oe.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(te=s.RG8UI),W===s.UNSIGNED_SHORT&&(te=s.RG16UI),W===s.UNSIGNED_INT&&(te=s.RG32UI),W===s.BYTE&&(te=s.RG8I),W===s.SHORT&&(te=s.RG16I),W===s.INT&&(te=s.RG32I)),T===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(te=s.RGB8UI),W===s.UNSIGNED_SHORT&&(te=s.RGB16UI),W===s.UNSIGNED_INT&&(te=s.RGB32UI),W===s.BYTE&&(te=s.RGB8I),W===s.SHORT&&(te=s.RGB16I),W===s.INT&&(te=s.RGB32I)),T===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(te=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(te=s.RGBA16UI),W===s.UNSIGNED_INT&&(te=s.RGBA32UI),W===s.BYTE&&(te=s.RGBA8I),W===s.SHORT&&(te=s.RGBA16I),W===s.INT&&(te=s.RGBA32I)),T===s.RGB&&(W===s.UNSIGNED_SHORT&&oe&&(te=oe.RGB16_EXT),W===s.SHORT&&oe&&(te=oe.RGB16_SNORM_EXT),W===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(te=s.R11F_G11F_B10F)),T===s.RGBA){let re=Se?Za:ht.getTransfer($);W===s.FLOAT&&(te=s.RGBA32F),W===s.HALF_FLOAT&&(te=s.RGBA16F),W===s.UNSIGNED_BYTE&&(te=re===wt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT&&oe&&(te=oe.RGBA16_EXT),W===s.SHORT&&oe&&(te=oe.RGBA16_SNORM_EXT),W===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function b(C,T){let W;return C?T===null||T===Ii||T===Cr?W=s.DEPTH24_STENCIL8:T===li?W=s.DEPTH32F_STENCIL8:T===Ma&&(W=s.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ii||T===Cr?W=s.DEPTH_COMPONENT24:T===li?W=s.DEPTH_COMPONENT32F:T===Ma&&(W=s.DEPTH_COMPONENT16),W}function S(C,T){return M(C)===!0||C.isFramebufferTexture&&C.minFilter!==$t&&C.minFilter!==bn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function D(C){let T=new WeakRef(C);n.get(C).__ref=T,p.add(T),x.register(C,T,T)}function I(C){let T=n.get(C).__ref;T!==void 0&&(p.delete(T),x.unregister(T))}function F(C){k(C.target)}function U(C){N(C.target)}function k(C){C.removeEventListener("dispose",F),I(C),ie(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function N(C){C.removeEventListener("dispose",U),I(C),le(C)}function K(){for(let C of p){let T=C.deref();T!==void 0&&(T.isRenderTarget===!0?N(T):k(T))}p.clear(),d.clear()}function ie(C){let T=n.get(C);if(T.__webglInit===void 0)return;let W=C.source,be=u.get(W);if(be){let $=be[T.__cacheKey];$.usedTimes--,$.usedTimes===0&&G(C),Object.keys(be).length===0&&u.delete(W)}n.remove(C)}function G(C){let T=n.get(C);s.deleteTexture(T.__webglTexture);let W=C.source,be=u.get(W);delete be[T.__cacheKey],a.memory.textures--}function le(C){let T=n.get(C);T.__depthDisposeCallback&&T.__depthDisposeCallback();let W=C.depthTexture;if(W&&W.renderTarget===C&&k(W),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(T.__webglFramebuffer[$]))for(let Se=0;Se<T.__webglFramebuffer[$].length;Se++)s.deleteFramebuffer(T.__webglFramebuffer[$][Se]);else s.deleteFramebuffer(T.__webglFramebuffer[$]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[$])}else{if(Array.isArray(T.__webglFramebuffer))for(let $=0;$<T.__webglFramebuffer.length;$++)s.deleteFramebuffer(T.__webglFramebuffer[$]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let $=0;$<T.__webglColorRenderbuffer.length;$++)T.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[$]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let be=C.textures;for(let $=0,Se=be.length;$<Se;$++){let oe=n.get(be[$]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(be[$])}n.remove(C)}let J=0;function ee(){J=0}function he(){return J}function ke(C){J=C}function Je(){let C=J;return C>=i.maxTextures&&Ve("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),J+=1,C}function ae(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.mipmapsAutoUpdate),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function pe(C,T){let W=n.get(C);if(C.isVideoTexture&&zt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){let be=C.image;if(be===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{jt(W,C,T);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+T)}function Re(C,T){let W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){jt(W,C,T);return}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+T)}function He(C,T){let W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){jt(W,C,T);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+T)}function ye(C,T){let W=n.get(C);if(C.version>0&&W.__version!==C.version){fn(W,C,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+T)}let Ze={[Os]:s.REPEAT,[pi]:s.CLAMP_TO_EDGE,[ra]:s.MIRRORED_REPEAT},At={[$t]:s.NEAREST,[tl]:s.NEAREST_MIPMAP_NEAREST,[Rr]:s.NEAREST_MIPMAP_LINEAR,[bn]:s.LINEAR,[ya]:s.LINEAR_MIPMAP_NEAREST,[xi]:s.LINEAR_MIPMAP_LINEAR},We={[cp]:s.NEVER,[xu]:s.ALWAYS,[lp]:s.LESS,[gu]:s.LEQUAL,[hp]:s.EQUAL,[bu]:s.GEQUAL,[up]:s.GREATER,[fp]:s.NOTEQUAL};function xt(C,T){if(T.type===li&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===bn||T.magFilter===ya||T.magFilter===Rr||T.magFilter===xi||T.minFilter===bn||T.minFilter===ya||T.minFilter===Rr||T.minFilter===xi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Ze[T.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Ze[T.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Ze[T.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,At[T.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,At[T.minFilter]),T.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,We[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===$t||T.minFilter!==Rr&&T.minFilter!==xi||T.type===li&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function _t(C,T){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",F),D(T));let be=T.source,$=u.get(be);$===void 0&&($={},u.set(be,$));let Se=ae(T);if(Se!==C.__cacheKey){$[Se]===void 0&&($[Se]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),$[Se].usedTimes++;let oe=$[C.__cacheKey];oe!==void 0&&($[C.__cacheKey].usedTimes--,oe.usedTimes===0&&G(T)),C.__cacheKey=Se,C.__webglTexture=$[Se].texture}return W}function st(C,T,W){return Math.floor(Math.floor(C/W)/T)}function rn(C,T,W,be){let Se=C.updateRanges;if(Se.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,W,be,T.data);else{Se.sort((L,se)=>L.start-se.start);let oe=0;for(let L=1;L<Se.length;L++){let se=Se[oe],Q=Se[L],Me=se.start+se.count,me=st(Q.start,T.width,4),xe=st(se.start,T.width,4);Q.start<=Me+1&&me===xe&&st(Q.start+Q.count-1,T.width,4)===me?se.count=Math.max(se.count,Q.start+Q.count-se.start):(++oe,Se[oe]=Q)}Se.length=oe+1;let te=t.getParameter(s.UNPACK_ROW_LENGTH),re=t.getParameter(s.UNPACK_SKIP_PIXELS),Te=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let L=0,se=Se.length;L<se;L++){let Q=Se[L],Me=Math.floor(Q.start/4),me=Math.ceil(Q.count/4),xe=Me%T.width,Ne=Math.floor(Me/T.width),tt=me,de=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ne),t.texSubImage2D(s.TEXTURE_2D,0,xe,Ne,tt,de,W,be,T.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,te),t.pixelStorei(s.UNPACK_SKIP_PIXELS,re),t.pixelStorei(s.UNPACK_SKIP_ROWS,Te)}}function jt(C,T,W){let be=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(be=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(be=s.TEXTURE_3D);let $=_t(C,T),Se=T.source;t.bindTexture(be,C.__webglTexture,s.TEXTURE0+W);let oe=n.get(Se);if(Se.version!==oe.__version||$===!0){if(t.activeTexture(s.TEXTURE0+W),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let de=ht.getPrimaries(ht.workingColorSpace),Be=T.colorSpace===ws?null:ht.getPrimaries(T.colorSpace),Ye=T.colorSpace===ws||de===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let re=v(T.image,!1,i.maxTextureSize);re=Xe(T,re);let Te=r.convert(T.format,T.colorSpace),L=r.convert(T.type),se=y(T.internalFormat,Te,L,T.normalized,T.colorSpace,T.isVideoTexture);xt(be,T);let Q,Me=T.mipmaps,me=T.isVideoTexture!==!0,xe=oe.__version===void 0||$===!0,Ne=Se.dataReady,tt=S(T,re);if(T.isDepthTexture)se=b(T.format===Ss,T.type),xe&&(me?t.texStorage2D(s.TEXTURE_2D,1,se,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,se,re.width,re.height,0,Te,L,null));else if(T.isDataTexture)if(Me.length>0){me&&xe&&t.texStorage2D(s.TEXTURE_2D,tt,se,Me[0].width,Me[0].height);for(let de=0,Be=Me.length;de<Be;de++)Q=Me[de],me?Ne&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Q.width,Q.height,Te,L,Q.data):t.texImage2D(s.TEXTURE_2D,de,se,Q.width,Q.height,0,Te,L,Q.data);T.generateMipmaps=!1}else me?(xe&&t.texStorage2D(s.TEXTURE_2D,tt,se,re.width,re.height),Ne&&rn(T,re,Te,L)):t.texImage2D(s.TEXTURE_2D,0,se,re.width,re.height,0,Te,L,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){me&&xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,tt,se,Me[0].width,Me[0].height,re.depth);for(let de=0,Be=Me.length;de<Be;de++)if(Q=Me[de],T.format!==_i)if(Te!==null)if(me){if(Ne)if(T.layerUpdates.size>0){let Ye=Ru(Q.width,Q.height,T.format,T.type);for(let Ce of T.layerUpdates){let Ue=Q.data.subarray(Ce*Ye/Q.data.BYTES_PER_ELEMENT,(Ce+1)*Ye/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,Ce,Q.width,Q.height,1,Te,Ue)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,Q.width,Q.height,re.depth,Te,Q.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,se,Q.width,Q.height,re.depth,0,Q.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?Ne&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,Q.width,Q.height,re.depth,Te,L,Q.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,se,Q.width,Q.height,re.depth,0,Te,L,Q.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{me&&xe&&t.texStorage2D(s.TEXTURE_2D,tt,se,Me[0].width,Me[0].height);for(let de=0,Be=Me.length;de<Be;de++)Q=Me[de],T.format!==_i?Te!==null?me?Ne&&t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,Q.width,Q.height,Te,Q.data):t.compressedTexImage2D(s.TEXTURE_2D,de,se,Q.width,Q.height,0,Q.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?Ne&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Q.width,Q.height,Te,L,Q.data):t.texImage2D(s.TEXTURE_2D,de,se,Q.width,Q.height,0,Te,L,Q.data)}else if(T.isDataArrayTexture)if(me){if(xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,tt,se,re.width,re.height,re.depth),Ne)if(T.layerUpdates.size>0){let de=Ru(re.width,re.height,T.format,T.type);for(let Be of T.layerUpdates){let Ye=re.data.subarray(Be*de/re.data.BYTES_PER_ELEMENT,(Be+1)*de/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Be,re.width,re.height,1,Te,L,Ye)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Te,L,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,se,re.width,re.height,re.depth,0,Te,L,re.data);else if(T.isData3DTexture)me?(xe&&t.texStorage3D(s.TEXTURE_3D,tt,se,re.width,re.height,re.depth),Ne&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Te,L,re.data)):t.texImage3D(s.TEXTURE_3D,0,se,re.width,re.height,re.depth,0,Te,L,re.data);else if(T.isFramebufferTexture){if(xe)if(me)t.texStorage2D(s.TEXTURE_2D,tt,se,re.width,re.height);else{let de=re.width,Be=re.height;for(let Ye=0;Ye<tt;Ye++)t.texImage2D(s.TEXTURE_2D,Ye,se,de,Be,0,Te,L,null),de>>=1,Be>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let de=s.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),re.parentNode!==de){de.appendChild(re),d.add(T),de.onpaint=Be=>{let Ye=Be.changedElements;for(let Ce of d)Ye.includes(Ce.image)&&(Ce.needsUpdate=!0)},de.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,re);else{let Ye=s.RGBA,Ce=s.RGBA,Ue=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ye,Ce,Ue,re)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Me.length>0){if(me&&xe){let de=ze(Me[0]);t.texStorage2D(s.TEXTURE_2D,tt,se,de.width,de.height)}for(let de=0,Be=Me.length;de<Be;de++)Q=Me[de],me?Ne&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Te,L,Q):t.texImage2D(s.TEXTURE_2D,de,se,Te,L,Q);T.generateMipmaps=!1}else if(me){if(xe){let de=ze(re);t.texStorage2D(s.TEXTURE_2D,tt,se,de.width,de.height)}Ne&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,L,re)}else t.texImage2D(s.TEXTURE_2D,0,se,Te,L,re);M(T)&&T.mipmapsAutoUpdate===!0&&_(be),oe.__version=Se.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function fn(C,T,W){if(T.image.length!==6)return;let be=_t(C,T),$=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+W);let Se=n.get($);if($.version!==Se.__version||be===!0){t.activeTexture(s.TEXTURE0+W);let oe=ht.getPrimaries(ht.workingColorSpace),te=T.colorSpace===ws?null:ht.getPrimaries(T.colorSpace),re=T.colorSpace===ws||oe===te?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Te=T.isCompressedTexture||T.image[0].isCompressedTexture,L=T.image[0]&&T.image[0].isDataTexture,se=[];for(let Ce=0;Ce<6;Ce++)!Te&&!L?se[Ce]=v(T.image[Ce],!0,i.maxCubemapSize):se[Ce]=L?T.image[Ce].image:T.image[Ce],se[Ce]=Xe(T,se[Ce]);let Q=se[0],Me=r.convert(T.format,T.colorSpace),me=r.convert(T.type),xe=y(T.internalFormat,Me,me,T.normalized,T.colorSpace),Ne=T.isVideoTexture!==!0,tt=Se.__version===void 0||be===!0,de=$.dataReady,Be=S(T,Q);xt(s.TEXTURE_CUBE_MAP,T);let Ye;if(T.isDepthTexture){if(xe=b(T.format===Ss,T.type),tt)if(Ne)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,xe,Q.width,Q.height);else for(let Ce=0;Ce<6;Ce++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,xe,Q.width,Q.height,0,Me,me,null)}else if(Te){Ne&&tt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,xe,Q.width,Q.height);for(let Ce=0;Ce<6;Ce++){Ye=se[Ce].mipmaps;for(let Ue=0;Ue<Ye.length;Ue++){let Bt=Ye[Ue];T.format!==_i?Me!==null?Ne?de&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue,0,0,Bt.width,Bt.height,Me,Bt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue,xe,Bt.width,Bt.height,0,Bt.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue,0,0,Bt.width,Bt.height,Me,me,Bt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue,xe,Bt.width,Bt.height,0,Me,me,Bt.data)}}}else{if(Ye=T.mipmaps,Ne&&tt){Ye.length>0&&Be++;let Ce=ze(se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,xe,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(L){Ne?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,se[Ce].width,se[Ce].height,Me,me,se[Ce].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,xe,se[Ce].width,se[Ce].height,0,Me,me,se[Ce].data);for(let Ue=0;Ue<Ye.length;Ue++){let an=Ye[Ue].image[Ce].image;Ne?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue+1,0,0,an.width,an.height,Me,me,an.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue+1,xe,an.width,an.height,0,Me,me,an.data)}}else{Ne?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Me,me,se[Ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,xe,Me,me,se[Ce]);for(let Ue=0;Ue<Ye.length;Ue++){let Bt=Ye[Ue];Ne?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue+1,0,0,Me,me,Bt.image[Ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue+1,xe,Me,me,Bt.image[Ce])}}}M(T)&&T.mipmapsAutoUpdate===!0&&_(s.TEXTURE_CUBE_MAP),Se.__version=$.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Ot(C,T,W,be,$,Se){let oe=r.convert(W.format,W.colorSpace),te=r.convert(W.type),re=y(W.internalFormat,oe,te,W.normalized,W.colorSpace),Te=n.get(T),L=n.get(W);if(L.__renderTarget=T,!Te.__hasExternalTextures){let se=Math.max(1,T.width>>Se),Q=Math.max(1,T.height>>Se);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,Se,re,se,Q,T.depth,0,oe,te,null):t.texImage2D($,Se,re,se,Q,0,oe,te,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Ae(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,be,$,L.__webglTexture,0,Et(T)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,be,$,L.__webglTexture,Se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function An(C,T,W){if(s.bindRenderbuffer(s.RENDERBUFFER,C),T.depthBuffer){let be=T.depthTexture,$=be&&be.isDepthTexture?be.type:null,Se=b(T.stencilBuffer,$),oe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ae(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Et(T),Se,T.width,T.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,Et(T),Se,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Se,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,C)}else{let be=T.textures;for(let $=0;$<be.length;$++){let Se=be[$],oe=r.convert(Se.format,Se.colorSpace),te=r.convert(Se.type),re=y(Se.internalFormat,oe,te,Se.normalized,Se.colorSpace);Ae(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Et(T),re,T.width,T.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,Et(T),re,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,re,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Jt(C,T,W){let be=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(T.depthTexture);$.__renderTarget=T;let Se=be?T.depthTexture.image[0]:T.depthTexture.image;(!$.__webglTexture||Se.width!==T.width||Se.height!==T.height)&&(Se.width=T.width,Se.height=T.height,T.depthTexture.needsUpdate=!0),be?ye(T.depthTexture,0):pe(T.depthTexture,0);let oe=$.__webglTexture,te=Et(T),re=be?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,Te=T.depthTexture.format===Ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===ds)Ae(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Te,re,oe,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,Te,re,oe,0);else if(T.depthTexture.format===Ss)Ae(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Te,re,oe,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,Te,re,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ln(C){let T=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){let be=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),be){let $=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,be.removeEventListener("dispose",$)};be.addEventListener("dispose",$),T.__depthDisposeCallback=$}T.__boundDepthTexture=be}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let be=0;be<6;be++)Jt(T.__webglFramebuffer[be],C,be);else C.texture.mipmaps.length>0?Jt(T.__webglFramebuffer[0],C,0):Jt(T.__webglFramebuffer,C,0);else if(W){T.__webglDepthbuffer=[];for(let be=0;be<6;be++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[be]),T.__webglDepthbuffer[be]===void 0)T.__webglDepthbuffer[be]=s.createRenderbuffer(),An(T.__webglDepthbuffer[be],C,!1);else{let $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=T.__webglDepthbuffer[be];s.bindRenderbuffer(s.RENDERBUFFER,Se),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Se)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),An(T.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Se),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Se)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Dn(C,T,W){let be=n.get(C);T!==void 0&&Ot(be.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Ln(C)}function Nn(C){let T=C.texture,W=n.get(C),be=n.get(T);C.addEventListener("dispose",U),D(C);let $=C.textures,Se=C.isWebGLCubeRenderTarget===!0,oe=$.length>1;if(oe||(be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture()),be.__version=T.version,a.memory.textures++),Se){W.__webglFramebuffer=[];for(let te=0;te<6;te++)if(T.mipmaps.length>0){W.__webglFramebuffer[te]=[];for(let re=0;re<T.mipmaps.length;re++)W.__webglFramebuffer[te][re]=s.createFramebuffer()}else W.__webglFramebuffer[te]=s.createFramebuffer()}else{if(T.mipmaps.length>0){W.__webglFramebuffer=[];for(let te=0;te<T.mipmaps.length;te++)W.__webglFramebuffer[te]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(oe)for(let te=0,re=$.length;te<re;te++){let Te=n.get($[te]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Ae(C)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let te=0;te<$.length;te++){let re=$[te];W.__webglColorRenderbuffer[te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[te]);let Te=r.convert(re.format,re.colorSpace),L=r.convert(re.type),se=y(re.internalFormat,Te,L,re.normalized,re.colorSpace,C.isXRRenderTarget===!0),Q=Et(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,se,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.RENDERBUFFER,W.__webglColorRenderbuffer[te])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),An(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Se){t.bindTexture(s.TEXTURE_CUBE_MAP,be.__webglTexture),xt(s.TEXTURE_CUBE_MAP,T);for(let te=0;te<6;te++)if(T.mipmaps.length>0)for(let re=0;re<T.mipmaps.length;re++)Ot(W.__webglFramebuffer[te][re],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+te,re);else Ot(W.__webglFramebuffer[te],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);M(T)?_(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(oe){for(let te=0,re=$.length;te<re;te++){let Te=$[te],L=n.get(Te),se=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,L.__webglTexture),xt(se,Te),Ot(W.__webglFramebuffer,C,Te,s.COLOR_ATTACHMENT0+te,se,0),M(Te)&&_(se)}t.unbindTexture()}else{let te=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(te=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(te,be.__webglTexture),xt(te,T),T.mipmaps.length>0)for(let re=0;re<T.mipmaps.length;re++)Ot(W.__webglFramebuffer[re],C,T,s.COLOR_ATTACHMENT0,te,re);else Ot(W.__webglFramebuffer,C,T,s.COLOR_ATTACHMENT0,te,0);M(T)?_(te):T.mipmaps.length>0&&s.texParameteri(te,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Ln(C)}function H(C){let T=C.textures;for(let W=0,be=T.length;W<be;W++){let $=T[W];if(M($)&&$.mipmapsAutoUpdate===!0){let Se=w(C),oe=n.get($).__webglTexture;t.bindTexture(Se,oe),_(Se),t.unbindTexture()}}}let Fn=[];function Pt(C){if(C.samples>0){if(Ae(C)===!1){let T=C.textures,W=C.width,be=C.height,$=s.COLOR_BUFFER_BIT,Se=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=n.get(C),te=T.length>1;if(te)for(let Te=0;Te<T.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Te=0;Te<T.length;Te++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,oe.__webglColorRenderbuffer[Te]);let L=n.get(T[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,W,be,0,0,W,be,$,s.NEAREST),c===!0&&(Fn.length=0,Fn.push(s.COLOR_ATTACHMENT0+Te),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Fn.push(Se),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Fn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),te)for(let Te=0;Te<T.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,oe.__webglColorRenderbuffer[Te]);let L=n.get(T[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,L,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let T=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Et(C){return Math.min(i.maxSamples,C.samples)}function Ae(C){let T=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function zt(C){let T=a.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function Xe(C,T){let W=C.colorSpace,be=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==jn&&W!==ws&&(ht.getTransfer(W)===wt?(be!==_i||$!==si)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",W)),T}function ze(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=Je,this.resetTextureUnits=ee,this.getTextureUnits=he,this.setTextureUnits=ke,this.setTexture2D=pe,this.setTexture2DArray=Re,this.setTexture3D=He,this.setTextureCube=ye,this.rebindTextures=Dn,this.setupRenderTarget=Nn,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Ln,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=Ae,this.dispose=K}function Wv(s,e){function t(n,i=ws){let r,a=ht.getTransfer(i);if(n===si)return s.UNSIGNED_BYTE;if(n===il)return s.UNSIGNED_SHORT_4_4_4_4;if(n===sl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===fu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===lu)return s.BYTE;if(n===hu)return s.SHORT;if(n===Ma)return s.UNSIGNED_SHORT;if(n===nl)return s.INT;if(n===Ii)return s.UNSIGNED_INT;if(n===li)return s.FLOAT;if(n===Li)return s.HALF_FLOAT;if(n===du)return s.ALPHA;if(n===pu)return s.RGB;if(n===_i)return s.RGBA;if(n===ds)return s.DEPTH_COMPONENT;if(n===Ss)return s.DEPTH_STENCIL;if(n===Sa)return s.RED;if(n===rl)return s.RED_INTEGER;if(n===qs)return s.RG;if(n===al)return s.RG_INTEGER;if(n===ol)return s.RGBA_INTEGER;if(n===Ro||n===Co||n===Po||n===Io)if(a===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===ll||n===hl||n===ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fl||n===dl||n===pl||n===ml||n===gl||n===Lo||n===bl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fl||n===dl)return a===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ml)return r.COMPRESSED_R11_EAC;if(n===gl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Lo)return r.COMPRESSED_RG11_EAC;if(n===bl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xl||n===_l||n===vl||n===yl||n===Ml||n===Sl||n===wl||n===Tl||n===Al||n===El||n===Rl||n===Cl||n===Pl||n===Il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ml)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Al)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===El)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ll||n===Dl||n===Nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ll)return a===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fl||n===kl||n===Do||n===Ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xv=`
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

}`,Hu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ho(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Un({vertexShader:qv,fragmentShader:Xv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vu=class extends Ri{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,u=null,p=null,x=typeof XRWebGLBinding<"u",m=new Hu,g={},v=t.getContextAttributes(),M=null,_=null,w=[],y=[],b=new Qe,S=null,D=null,I=new gn;I.viewport=new Ct;let F=new gn;F.viewport=new Ct;let U=[I,F],k=new Kc,N=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let pe=w[ae];return pe===void 0&&(pe=new ha,w[ae]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ae){let pe=w[ae];return pe===void 0&&(pe=new ha,w[ae]=pe),pe.getGripSpace()},this.getHand=function(ae){let pe=w[ae];return pe===void 0&&(pe=new ha,w[ae]=pe),pe.getHandSpace()};function ie(ae){let pe=y.indexOf(ae.inputSource);if(pe===-1)return;let Re=w[pe];Re!==void 0&&(Re.update(ae.inputSource,ae.frame,l||a),Re.dispatchEvent({type:ae.type,data:ae.inputSource}))}function G(){i.removeEventListener("select",ie),i.removeEventListener("selectstart",ie),i.removeEventListener("selectend",ie),i.removeEventListener("squeeze",ie),i.removeEventListener("squeezestart",ie),i.removeEventListener("squeezeend",ie),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",le);for(let ae=0;ae<w.length;ae++){let pe=y[ae];pe!==null&&(y[ae]=null,w[ae].disconnect(pe))}N=null,K=null,m.reset();for(let ae in g)delete g[ae];if(e.setRenderTarget(M),u=null,f=null,d=null,i=null,_=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(b.width,b.height,!1),D!==null){let ae=D.camera;ae.fov=D.fov,ae.zoom=D.zoom,ae.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){r=ae,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ae){l=ae},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(ae){if(i=ae,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",ie),i.addEventListener("selectstart",ie),i.addEventListener("selectend",ie),i.addEventListener("squeeze",ie),i.addEventListener("squeezestart",ie),i.addEventListener("squeezeend",ie),i.addEventListener("end",G),i.addEventListener("inputsourceschange",le),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(b),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,He=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=v.stencil?Ss:ds,He=v.stencil?Cr:Ii);let Ze={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ze),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new oi(f.textureWidth,f.textureHeight,{format:_i,type:si,depthTexture:new gs(f.textureWidth,f.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,Re),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),_=new oi(u.framebufferWidth,u.framebufferHeight,{format:_i,type:si,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Je.setContext(i),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function le(ae){for(let pe=0;pe<ae.removed.length;pe++){let Re=ae.removed[pe],He=y.indexOf(Re);He>=0&&(y[He]=null,w[He].disconnect(Re))}for(let pe=0;pe<ae.added.length;pe++){let Re=ae.added[pe],He=y.indexOf(Re);if(He===-1){for(let Ze=0;Ze<w.length;Ze++)if(Ze>=y.length){y.push(Re),He=Ze;break}else if(y[Ze]===null){y[Ze]=Re,He=Ze;break}if(He===-1)break}let ye=w[He];ye&&ye.connect(Re)}}function J(ae,pe){pe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(pe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(i===null)return;let pe=ae.near,Re=ae.far;m.texture!==null&&(m.depthNear>0&&(pe=m.depthNear),m.depthFar>0&&(Re=m.depthFar)),k.near=F.near=I.near=pe,k.far=F.far=I.far=Re,(N!==k.near||K!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,K=k.far),k.layers.mask=ae.layers.mask|6,I.layers.mask=k.layers.mask&-5,F.layers.mask=k.layers.mask&-3;let He=ae.parent,ye=k.cameras;J(k,He);for(let Ze=0;Ze<ye.length;Ze++)J(ye[Ze],He);k.projectionMatrix.copy(I.projectionMatrix),k.projectionMatrixInverse.copy(I.projectionMatrixInverse),D===null&&ae.isPerspectiveCamera&&(D={camera:ae,fov:ae.fov,zoom:ae.zoom}),ee(ae,k,He)};function ee(ae,pe,Re){Re===null?ae.matrix.copy(pe.matrixWorld):(ae.matrix.copy(Re.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(pe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(pe.projectionMatrix),ae.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=pr*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(ae){c=ae,f!==null&&(f.fixedFoveation=ae),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ae)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(ae){return g[ae]};let he=null;function ke(ae,pe){if(h=pe.getViewerPose(l||a),p=pe,h!==null){let Re=h.views;u!==null&&(e.setRenderTargetFramebuffer(_,u.framebuffer),e.setRenderTarget(_));let He=!1;Re.length!==k.cameras.length&&(k.cameras.length=0,He=!0);for(let We=0;We<Re.length;We++){let xt=Re[We],_t=null;if(u!==null)_t=u.getViewport(xt);else{let rn=d.getViewSubImage(f,xt);_t=rn.viewport,We===0&&(e.setRenderTargetTextures(_,rn.colorTexture,rn.depthStencilTexture),e.setRenderTarget(_))}let st=U[We];st===void 0&&(st=new gn,st.layers.enable(We),st.viewport=new Ct,U[We]=st),st.matrix.fromArray(xt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(xt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(_t.x,_t.y,_t.width,_t.height),We===0&&(k.matrix.copy(st.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),He===!0&&k.cameras.push(st)}let ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let We=d.getDepthInformation(Re[0]);We&&We.isValid&&We.texture&&m.init(We,i.renderState)}if(ye&&ye.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let We=0;We<Re.length;We++){let xt=Re[We].camera;if(xt){let _t=g[xt];_t||(_t=new ho,g[xt]=_t);let st=d.getCameraImage(xt);_t.sourceTexture=st}}}}for(let Re=0;Re<w.length;Re++){let He=y[Re],ye=w[Re];He!==null&&ye!==void 0&&ye.update(He,pe,l||a)}he&&he(ae,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),p=null}let Je=new Hp;Je.setAnimationLoop(ke),this.setAnimationLoop=function(ae){he=ae},this.dispose=function(){}}},jv=new qe,$p=new et;$p.set(-1,0,0,0,1,0,0,0,1);function Kv(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Tu(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,M,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?c(m,g,v,M):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===On&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===On&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),M=v.envMap,_=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($p),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,v,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===On&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jv(s,e,t,n){let i={},r={};function a(v,M){let _=M.program;n.uniformBlockBinding(v,_,i[v.id])}function o(v,M){let _=i[v.id];_===void 0&&(p(v),_=c(v),i[v.id]=_,v.addEventListener("dispose",m));let w=M.program;n.updateUBOMapping(v,w);let y=e.render.frame;r[v.id]!==y&&(l(v),r[v.id]=y)}function c(v){let M=s.createBuffer(),_=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,_,w),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function l(v){let M=i[v.id],_=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let y=0,b=_.length;y<b;y++){let S=_[y];if(Array.isArray(S))for(let D=0,I=S.length;D<I;D++)h(S[D],y,D,w);else h(S,y,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,M,_,w){if(f(v,M,_,w)===!0){let y=v.__offset,b=v.value;if(Array.isArray(b)){let S=0;for(let D=0;D<b.length;D++){let I=b[D],F=x(I,!0);d(I,v.__data,S),S+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else d(b,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,v.__data)}}function d(v,M,_){typeof v=="number"||typeof v=="boolean"?M[_]=v:v.isMatrix3?(M[_]=v.elements[0],M[_+1]=v.elements[1],M[_+2]=v.elements[2],M[_+3]=0,M[_+4]=v.elements[3],M[_+5]=v.elements[4],M[_+6]=v.elements[5],M[_+7]=0,M[_+8]=v.elements[6],M[_+9]=v.elements[7],M[_+10]=v.elements[8],M[_+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-_),_):v.toArray(M,_)}function f(v,M,_,w){let y=v.value,b=M+"_"+_;if(Array.isArray(y)){w[b]===void 0&&(w[b]=[]);let S=w[b],D=!1;for(let I=0;I<y.length;I++)u(y[I],S,I)===!0&&(D=!0);return D}return u(y,w,b)}function u(v,M,_){if(M[_]===void 0)return typeof v=="number"||typeof v=="boolean"?M[_]=v:ArrayBuffer.isView(v)?M[_]=v.slice():M[_]=v.clone(),!0;{let w=M[_];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return M[_]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function p(v){let M=v.uniforms,_=0,w=16;for(let b=0,S=M.length;b<S;b++){let D=Array.isArray(M[b])?M[b]:[M[b]];for(let I=0,F=D.length;I<F;I++){let U=D[I],k=Array.isArray(U.value)?U.value:[U.value],N=Array.isArray(M[b])||Array.isArray(U.value),K=_;for(let G=0,le=k.length;G<le;G++){let J=k[G],ee=x(J,N),he=_%w,ke=he%ee.boundary,Je=he+ke;_+=ke,Je!==0&&w-Je<ee.storage&&(_+=w-Je),G===0&&(K=_),_+=ee.storage}let ie=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new ie((_-K)/Float32Array.BYTES_PER_ELEMENT),U.__offset=K}}let y=_%w;return y>0&&(_+=w-y),v.__size=_,v.__cache={},this}function x(v,M){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=16,_.storage=48):v.isMatrix4?(_.boundary=16,_.storage=64):v.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(_.boundary=16,_.storage=v.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function m(v){let M=v.target;M.removeEventListener("dispose",m),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:a,update:o,dispose:g}}var Yv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function Zv(){return Ji===null&&(Ji=new Bs(Yv,16,16,qs,Li),Ji.name="DFG_LUT",Ji.minFilter=bn,Ji.magFilter=bn,Ji.wrapS=pi,Ji.wrapT=pi,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var Wl=class{constructor(e={}){let{canvas:t=dp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=si}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=u,m=new Set([ol,al,rl]),g=new Set([si,Ii,Ma,Cr,il,sl]),v=new Uint32Array(4),M=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},w=null,y=null,b=[],S=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,F=!1,U=null,k=null,N=null,K=null;this._outputColorSpace=Ht;let ie=0,G=0,le=null,J=-1,ee=null,he=new Ct,ke=new Ct,Je=null,ae=new De(0),pe=0,Re=t.width,He=t.height,ye=1,Ze=null,At=null,We=new Ct(0,0,Re,He),xt=new Ct(0,0,Re,He),_t=!1,st=new zs,rn=new kc,jt=!1,fn=!1,Ot=new qe,An=new z,Jt=new Ct,Ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dn=!1;function Nn(){return le===null?ye:1}let H=n;function Fn(A,B){return t.getContext(A,B)}let Pt,Et,Ae,zt,Xe,ze,C,T,W,be,$,Se,oe,te,re,Te,L,se,Q,Me,me,xe,Ne;try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),H===null){let B="webgl2";if(H=Fn(B,A),H===null)throw Fn(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(A){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),$e("WebGLRenderer: "+A.message),A}function tt(){Pt=new c_(H),Pt.init(),me=new Wv(H,Pt),Et=new Zx(H,Pt,e,me),Ae=new Hv(H,Pt),Et.reversedDepthBuffer&&f&&Ae.buffers.depth.setReversed(!0),k=H.createFramebuffer(),N=H.createFramebuffer(),K=H.createFramebuffer(),zt=new u_(H),Xe=new Rv,ze=new Vv(H,Pt,Ae,Xe,Et,me,zt),C=new o_(I),T=new dg(H),xe=new Jx(H,T),W=new l_(H,T,zt,xe),be=new d_(H,W,T,xe,zt),se=new f_(H,Et,ze),re=new $x(Xe),$=new Ev(I,C,Pt,Et,xe,re),Se=new Kv(I,Xe),oe=new Pv,te=new kv(Pt),L=new Kx(I,C,Ae,be,p,c),Te=new Gv(I,be,Et),Ne=new Jv(H,zt,Et,Ae),Q=new Yx(H,Pt,zt),Me=new h_(H,Pt,zt),zt.programs=$.programs,I.capabilities=Et,I.extensions=Pt,I.properties=Xe,I.renderLists=oe,I.shadowMap=Te,I.state=Ae,I.info=zt}x!==si&&(D=new m_(x,t.width,t.height,o,i,r));let de=new Vu(I,H);this.xr=de,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=Pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(A){A!==void 0&&(ye=A,this.setSize(Re,He,!1))},this.getSize=function(A){return A.set(Re,He)},this.setSize=function(A,B,Z=!0){if(de.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=A,He=B,t.width=Math.floor(A*ye),t.height=Math.floor(B*ye),Z===!0&&(t.style.width=A+"px",t.style.height=B+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(Re*ye,He*ye).floor()},this.setDrawingBufferSize=function(A,B,Z){Re=A,He=B,ye=Z,t.width=Math.floor(A*Z),t.height=Math.floor(B*Z),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(x===si){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(he)},this.getViewport=function(A){return A.copy(We)},this.setViewport=function(A,B,Z,q){A.isVector4?We.set(A.x,A.y,A.z,A.w):We.set(A,B,Z,q),Ae.viewport(he.copy(We).multiplyScalar(Nn()).round())},this.getScissor=function(A){return A.copy(xt)},this.setScissor=function(A,B,Z,q){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,B,Z,q),Ae.scissor(ke.copy(xt).multiplyScalar(Nn()).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(A){Ae.setScissorTest(_t=A)},this.setOpaqueSort=function(A){Ze=A},this.setTransparentSort=function(A){At=A},this.getClearColor=function(A){return A.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,Z=!0){let q=0;if(A){let j=!1;if(le!==null){let we=le.texture.format;j=m.has(we)}if(j){let we=le.texture.type,Pe=g.has(we),_e=L.getClearColor(),Ie=L.getClearAlpha(),Fe=_e.r,je=_e.g,ct=_e.b;Pe?(v[0]=Fe,v[1]=je,v[2]=ct,v[3]=Ie,H.clearBufferuiv(H.COLOR,0,v)):(M[0]=Fe,M[1]=je,M[2]=ct,M[3]=Ie,H.clearBufferiv(H.COLOR,0,M))}else q|=H.COLOR_BUFFER_BIT}B&&(q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),U=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),L.dispose(),oe.dispose(),te.dispose(),ze.dispose(),Xe.dispose(),C.dispose(),be.dispose(),W.dispose(),xe.dispose(),Ne.dispose(),$.dispose(),de.dispose(),de.removeEventListener("sessionstart",ka),de.removeEventListener("sessionend",is),It.stop()};function Be(A){A.preventDefault(),$a("WebGLRenderer: Context Lost."),F=!0}function Ye(){$a("WebGLRenderer: Context Restored."),F=!1;let A=zt.autoReset,B=Te.enabled,Z=Te.autoUpdate,q=Te.needsUpdate,j=Te.type;tt(),zt.autoReset=A,Te.enabled=B,Te.autoUpdate=Z,Te.needsUpdate=q,Te.type=j}function Ce(A){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ue(A){let B=A.target;B.removeEventListener("dispose",Ue),Bt(B)}function Bt(A){an(A),Xe.remove(A)}function an(A){let B=Xe.get(A).programs;B!==void 0&&(B.forEach(function(Z){$.releaseProgram(Z)}),A.isShaderMaterial&&$.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,Z,q,j,we){B===null&&(B=Ln);let Pe=j.isMesh&&j.matrixWorld.determinantAffine()<0,_e=yt(A,B,Z,q,j);Ae.setMaterial(q,Pe);let Ie=Z.index,Fe=1;if(q.wireframe===!0){if(Ie=W.getWireframeAttribute(Z),Ie===void 0)return;Fe=2}let je=Z.drawRange,ct=Z.attributes.position,ge=je.start*Fe,it=(je.start+je.count)*Fe;we!==null&&(ge=Math.max(ge,we.start*Fe),it=Math.min(it,(we.start+we.count)*Fe)),Ie!==null?(ge=Math.max(ge,0),it=Math.min(it,Ie.count)):ct!=null&&(ge=Math.max(ge,0),it=Math.min(it,ct.count));let Lt=it-ge;if(Lt<0||Lt===1/0)return;xe.setup(j,q,_e,Z,Ie);let Dt,Mt=Q;if(Ie!==null&&(Dt=T.get(Ie),Mt=Me,Mt.setIndex(Dt)),j.isMesh)q.wireframe===!0?(Ae.setLineWidth(q.wireframeLinewidth*Nn()),Mt.setMode(H.LINES)):Mt.setMode(H.TRIANGLES);else if(j.isLine){let on=q.linewidth;on===void 0&&(on=1),Ae.setLineWidth(on*Nn()),j.isLineSegments?Mt.setMode(H.LINES):j.isLineLoop?Mt.setMode(H.LINE_LOOP):Mt.setMode(H.LINE_STRIP)}else j.isPoints?Mt.setMode(H.POINTS):j.isSprite&&Mt.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let on=j._multiDrawStarts,Oe=j._multiDrawCounts,kn=j._multiDrawCount,pt=Ie?T.get(Ie).bytesPerElement:1,rs=Xe.get(q).currentProgram.getUniforms();for(let En=0;En<kn;En++)rs.setValue(H,"_gl_DrawID",En),Mt.render(on[En]/pt,Oe[En])}else if(j.isInstancedMesh)Mt.renderInstances(ge,Lt,j.count);else if(Z.isInstancedBufferGeometry){let on=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Oe=Math.min(Z.instanceCount,on);Mt.renderInstances(ge,Lt,Oe)}else Mt.render(ge,Lt)};function er(A,B,Z,q){U!==null&&A.isNodeMaterial&&U.setObject(q,A),jt===!0&&re.setState(A,Z,!1),A.transparent===!0&&A.side===un&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,tr(A,B,q),A.side=Xi,A.needsUpdate=!0,tr(A,B,q),A.side=un):tr(A,B,q)}this.compile=function(A,B,Z=null){Z===null&&(Z=A),U!==null&&U.renderStart(A,B,Z),y=te.get(Z),y.init(B),S.push(y),Z.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),A!==Z&&A.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),y.setupLights(),U!==null&&U.updateLights(y.state.lightsArray),fn=this.localClippingEnabled,jt=re.init(this.clippingPlanes,fn),jt===!0&&re.setGlobalState(this.clippingPlanes,B),U!==null&&Te.render(y.state.shadowsArray,Z,B);let q=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let we=j.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){let _e=we[Pe];er(_e,Z,B,j),q.add(_e)}else er(we,Z,B,j),q.add(we)}),y=S.pop(),U!==null&&U.renderEnd(),q},this.compileAsync=function(A,B,Z=null){let q=this.compile(A,B,Z);return new Promise(j=>{function we(){if(q.forEach(function(Pe){let Ie=Xe.get(Pe).currentProgram;(Ie===void 0||Ie.isReady())&&q.delete(Pe)}),q.size===0){j(A);return}setTimeout(we,10)}Pt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ot=null;function Yo(A){ot&&ot(A)}function ka(){It.stop()}function is(){It.start()}let It=new Hp;It.setAnimationLoop(Yo),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(A){ot=A,de.setAnimationLoop(A),A===null?It.stop():It.start()},de.addEventListener("sessionstart",ka),de.addEventListener("sessionend",is),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;U!==null&&U.renderStart(A,B);let Z=de.enabled===!0&&de.isPresenting===!0,q=D!==null&&(le===null||Z)&&D.begin(I,le);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(B),B=de.getCamera()),A.isScene===!0&&A.onBeforeRender(I,A,B,le),y=te.get(A,S.length),y.init(B),y.state.textureUnits=ze.getTextureUnits(),S.push(y),Ot.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?rn.setFromArrayCamera(B):st.setFromProjectionMatrix(Ot,mi,B.reversedDepth),fn=this.localClippingEnabled,jt=re.init(this.clippingPlanes,fn),w=oe.get(A,b.length),w.init(),b.push(w),this.info.render.frame++,de.enabled===!0&&de.isPresenting===!0){let Pe=I.xr.getDepthSensingMesh();Pe!==null&&Qn(Pe,B,-1/0,I.sortObjects)}Qn(A,B,0,I.sortObjects),w.finish(),U!==null&&U.updateLights(y.state.lightsArray),I.sortObjects===!0&&w.sort(Ze,At),Dn=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Dn&&L.addToRenderList(w,A),this.info.autoReset===!0&&this.info.reset(),jt===!0&&re.beginShadows();let j=y.state.shadowsArray;if(Te.render(j,A,B),jt===!0&&re.endShadows(),(q&&D.hasRenderPass())===!1){let Pe=w.opaque,_e=w.transmissive;if(y.setupLights(),B.isArrayCamera){let Ie=B.cameras;if(_e.length>0)for(let Fe=0,je=Ie.length;Fe<je;Fe++){let ct=Ie[Fe];dn(Pe,_e,A,ct)}Dn&&L.render(A);for(let Fe=0,je=Ie.length;Fe<je;Fe++){let ct=Ie[Fe];Es(w,A,ct,ct.viewport)}}else _e.length>0&&dn(Pe,_e,A,B),Dn&&L.render(A),Es(w,A,B)}le!==null&&G===0&&(ze.updateMultisampleRenderTarget(le),ze.updateRenderTargetMipmap(le)),q&&D.end(I),A.isScene===!0&&A.onAfterRender(I,A,B),xe.resetDefaultState(),J=-1,ee=null,S.pop(),S.length>0?(y=S[S.length-1],ze.setTextureUnits(y.state.textureUnits),jt===!0&&re.setGlobalState(I.clippingPlanes,y.state.camera)):y=null,b.pop(),b.length>0?w=b[b.length-1]:w=null,U!==null&&U.renderEnd()};function Qn(A,B,Z,q){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){let Pe=B.isArrayCamera?rn:st;if(!A.frustumCulled||A.intersectsFrustum(Pe)){q&&Jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ot);let _e=be.update(A),Ie=A.material;Ie.visible&&w.push(A,_e,Ie,Z,Jt.z,null,B)}}else if(A.isMesh||A.isLine||A.isPoints){let Pe=B.isArrayCamera?rn:st;if(!A.frustumCulled||A.intersectsFrustum(Pe)){let _e=be.update(A),Ie=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Jt.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Jt.copy(_e.boundingSphere.center)),Jt.applyMatrix4(A.matrixWorld).applyMatrix4(Ot)),Array.isArray(Ie)){let Fe=_e.groups;for(let je=0,ct=Fe.length;je<ct;je++){let ge=Fe[je],it=Ie[ge.materialIndex];it&&it.visible&&w.push(A,_e,it,Z,Jt.z,ge,B)}}else Ie.visible&&w.push(A,_e,Ie,Z,Jt.z,null,B)}}}let we=A.children;for(let Pe=0,_e=we.length;Pe<_e;Pe++)Qn(we[Pe],B,Z,q)}function Es(A,B,Z,q){let{opaque:j,transmissive:we,transparent:Pe}=A;y.setupLightsView(Z),jt===!0&&re.setGlobalState(I.clippingPlanes,Z),q&&Ae.viewport(he.copy(q)),j.length>0&&ei(j,B,Z),we.length>0&&ei(we,B,Z),Pe.length>0&&ei(Pe,B,Z),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function dn(A,B,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[q.id]===void 0){let ge=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[q.id]=new oi(1,1,{generateMipmaps:!0,type:ge?Li:si,minFilter:xi,samples:Math.max(4,Et.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let we=y.state.transmissionRenderTarget[q.id],Pe=q.viewport||he;we.setSize(Pe.z*I.transmissionResolutionScale,Pe.w*I.transmissionResolutionScale);let _e=I.getRenderTarget(),Ie=I.getActiveCubeFace(),Fe=I.getActiveMipmapLevel();I.setRenderTarget(we),I.getClearColor(ae),pe=I.getClearAlpha(),pe<1&&I.setClearColor(16777215,.5),I.clear(),Dn&&L.render(Z);let je=I.toneMapping;I.toneMapping=ji;let ct=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),y.setupLightsView(q),jt===!0&&re.setGlobalState(I.clippingPlanes,q),ei(A,Z,q),ze.updateMultisampleRenderTarget(we),ze.updateRenderTargetMipmap(we),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let it=0,Lt=B.length;it<Lt;it++){let Dt=B[it],{object:Mt,geometry:on,material:Oe,group:kn}=Dt;if(Oe.side===un&&Mt.layers.test(q.layers)){let pt=Oe.side;Oe.side=On,Oe.needsUpdate=!0,Ua(Mt,Z,q,on,Oe,kn),Oe.side=pt,Oe.needsUpdate=!0,ge=!0}}ge===!0&&(ze.updateMultisampleRenderTarget(we),ze.updateRenderTargetMipmap(we))}I.setRenderTarget(_e,Ie,Fe),I.setClearColor(ae,pe),ct!==void 0&&(q.viewport=ct),I.toneMapping=je}function ei(A,B,Z){let q=B.isScene===!0?B.overrideMaterial:null;for(let j=0,we=A.length;j<we;j++){let Pe=A[j],{object:_e,geometry:Ie,group:Fe}=Pe,je=Pe.material;je.allowOverride===!0&&q!==null&&(je=q),_e.layers.test(Z.layers)&&Ua(_e,B,Z,Ie,je,Fe)}}function Ua(A,B,Z,q,j,we){U!==null&&j.isNodeMaterial&&U.setObject(A,j),A.onBeforeRender(I,B,Z,q,j,we),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(I,B,Z,q,A,we),j.transparent===!0&&j.side===un&&j.forceSinglePass===!1?(j.side=On,j.needsUpdate=!0,I.renderBufferDirect(Z,B,q,j,A,we),j.side=Xi,j.needsUpdate=!0,I.renderBufferDirect(Z,B,q,j,A,we),j.side=un):I.renderBufferDirect(Z,B,q,j,A,we),A.onAfterRender(I,B,Z,q,j,we)}function Zo(A){let B=0;for(let Z of A)Z.texture!==null&&B++;return B}function tr(A,B,Z){B.isScene!==!0&&(B=Ln);let q=Xe.get(A),j=y.state.lights,we=y.state.shadowsArray,Pe=j.state.version,_e=$.getParameters(A,j.state,we,B,Z,y.state.lightProbeGridArray),Ie=$.getProgramCacheKey(_e),Fe=q.programs;q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,q.fog=B.fog;let je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;q.envMap=C.get(A.envMap||q.environment,je),q.envMapRotation=q.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Fe===void 0&&(A.addEventListener("dispose",Ue),Fe=new Map,q.programs=Fe,q.programVariants=new Map);let ct=Fe.get(Ie);if(ct!==void 0){if(q.currentProgram===ct&&q.lightsStateVersion===Pe)return Oa(A,_e),ct}else _e.uniforms=$.getUniforms(A),U!==null&&A.isNodeMaterial&&U.build(A,Z,_e),A.onBeforeCompile(_e,I),ct=$.acquireProgram(_e,Ie),Fe.set(Ie,ct),q.uniforms=_e.uniforms;let ge=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ge.clippingPlanes=re.uniform),Oa(A,_e),q.needsLights=Ui(A),q.lightsStateVersion=Pe,q.needsLights&&(ge.ambientLightColor.value=j.state.ambient,ge.lightProbe.value=j.state.probe,ge.sunLights.value=j.state.sun,ge.sunLightShadows.value=j.state.sunShadow,ge.directionalLights.value=j.state.directional,ge.directionalLightShadows.value=j.state.directionalShadow,ge.spotLights.value=j.state.spot,ge.spotLightShadows.value=j.state.spotShadow,ge.rectAreaLights.value=j.state.rectArea,ge.ltc_1.value=j.state.rectAreaLTC1,ge.ltc_2.value=j.state.rectAreaLTC2,ge.pointLights.value=j.state.point,ge.pointLightShadows.value=j.state.pointShadow,ge.hemisphereLights.value=j.state.hemi,ge.sunShadowMatrix.value=j.state.sunShadowMatrix,ge.sunShadowCascade.value=j.state.sunShadowCascade,ge.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ge.spotLightMatrix.value=j.state.spotLightMatrix,ge.spotLightMap.value=j.state.spotLightMap,ge.pointShadowMatrix.value=j.state.pointShadowMatrix),q.numLightProbeGrids=Zo(y.state.lightProbeGridArray),q.currentProgram=ct,q.uniformsList=null,ct}function Rs(A,B,Z,q,j){let we=Xe.get(A),Pe=we.currentProgram.id+","+q+","+j,_e=we.programVariants.get(Pe);return _e===void 0?(_e=tr(A,B,Z),we.programVariants.set(Pe,_e)):(we.currentProgram=_e,we.uniformsList=null,we.outputColorSpace=q,we.toneMapping=j),_e}function $o(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=Ea.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Oa(A,B){let Z=Xe.get(A);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function yt(A,B,Z,q,j){B.isScene!==!0&&(B=Ln),ze.resetTextureUnits();let we=B.fog,Pe=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?B.environment:null,_e=le===null?I.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ht.workingColorSpace,Ie=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Fe=C.get(q.envMap||Pe,Ie),je=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ct=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ge=!!Z.morphAttributes.position,it=!!Z.morphAttributes.normal,Lt=!!Z.morphAttributes.color,Dt=ji;q.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Dt=I.toneMapping);let Mt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,on=Mt!==void 0?Mt.length:0,Oe=Xe.get(q),kn=y.state.lights;if(jt===!0&&(fn===!0||A!==ee)){let E=A===ee&&q.id===J;re.setState(q,A,E)}let pt=!1,rs=!1;q.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==kn.state.version||j.isBatchedMesh&&Oe.batching===!1||!j.isBatchedMesh&&Oe.batching===!0||j.isBatchedMesh&&Oe.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Oe.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Oe.instancing===!1||!j.isInstancedMesh&&Oe.instancing===!0||j.isSkinnedMesh&&Oe.skinning===!1||!j.isSkinnedMesh&&Oe.skinning===!0||j.isInstancedMesh&&Oe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Oe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Oe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Oe.instancingMorph===!1&&j.morphTexture!==null||Oe.envMap!==Fe||q.fog===!0&&Oe.fog!==we||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==re.numPlanes||Oe.numIntersection!==re.numIntersection)||Oe.vertexAlphas!==je||Oe.vertexTangents!==ct||Oe.morphTargets!==ge||Oe.morphNormals!==it||Oe.morphColors!==Lt||Oe.morphTargetsCount!==on||Oe.numLightProbeGrids!==Zo(y.state.lightProbeGridArray)?pt=!0:(Oe.outputColorSpace!==_e||Oe.toneMapping!==Dt)&&(rs=!0):(pt=!0,Oe.__version=q.version);let En=Oe.currentProgram;(pt===!0||rs===!0)&&(En=rs===!0?Rs(q,B,j,_e,Dt):tr(q,B,j),U&&q.isNodeMaterial&&U.onUpdateProgram(q,En,Oe));let Gr=!1,Oi=!1,Bi=!1,mt=En.getUniforms(),Yt=Oe.uniforms;if(Ae.useProgram(En.program)&&(Gr=!0,Oi=!0,Bi=!0),q.id!==J&&(J=q.id,Oi=!0),Gr||ee!==A){Ae.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),mt.setValue(H,"projectionMatrix",A.projectionMatrix),mt.setValue(H,"viewMatrix",A.matrixWorldInverse);let P=mt.map.cameraPosition;P!==void 0&&P.setValue(H,An.setFromMatrixPosition(A.matrixWorld)),Et.logarithmicDepthBuffer&&mt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),ee!==A&&(ee=A,Oi=!0,Bi=!0)}if(Oe.needsLights&&(kn.state.sunShadowMap.length>0&&mt.setValue(H,"sunShadowMap",kn.state.sunShadowMap,ze),kn.state.directionalShadowMap.length>0&&mt.setValue(H,"directionalShadowMap",kn.state.directionalShadowMap,ze),kn.state.spotShadowMap.length>0&&mt.setValue(H,"spotShadowMap",kn.state.spotShadowMap,ze),kn.state.pointShadowMap.length>0&&mt.setValue(H,"pointShadowMap",kn.state.pointShadowMap,ze)),j.isSkinnedMesh){mt.setOptional(H,j,"bindMatrix"),mt.setOptional(H,j,"bindMatrixInverse");let E=j.skeleton;E&&(E.boneTexture===null&&E.computeBoneTexture(),mt.setValue(H,"boneTexture",E.boneTexture,ze))}j.isBatchedMesh&&(mt.setOptional(H,j,"batchingTexture"),mt.setValue(H,"batchingTexture",j._matricesTexture,ze),mt.setOptional(H,j,"batchingIdTexture"),mt.setValue(H,"batchingIdTexture",j._indirectTexture,ze),mt.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&mt.setValue(H,"batchingColorTexture",j._colorsTexture,ze));let zn=Z.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&se.update(j,Z,En),(Oi||Oe.receiveShadow!==j.receiveShadow)&&(Oe.receiveShadow=j.receiveShadow,mt.setValue(H,"receiveShadow",j.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&B.environment!==null&&(Yt.envMapIntensity.value=B.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=Zv()),Oi){if(mt.setValue(H,"toneMappingExposure",I.toneMappingExposure),Oe.needsLights&&ss(Yt,Bi),we&&q.fog===!0&&Se.refreshFogUniforms(Yt,we),Se.refreshMaterialUniforms(Yt,q,ye,He,y.state.transmissionRenderTarget[A.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let E=_,P=0;for(let R of y.state.lightProbeGridArray)R.texture!==null&&(E.textures[P]=R.texture,E.min[P]=R.boundingBox.min,E.max[P]=R.boundingBox.max,E.resolution[P]=R.resolution,P++);for(let R in E)E[R].length=P;Yt.probesSH.value=E.textures,Yt.probesMin.value=E.min,Yt.probesMax.value=E.max,Yt.probesResolution.value=E.resolution}Ea.upload(H,$o(Oe),Yt,ze)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ea.upload(H,$o(Oe),Yt,ze),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(H,"center",j.center),mt.setValue(H,"modelViewMatrix",j.modelViewMatrix),mt.setValue(H,"normalMatrix",j.normalMatrix),mt.setValue(H,"modelMatrix",j.matrixWorld),q.uniformsGroups!==void 0){let E=q.uniformsGroups;for(let P=0,R=E.length;P<R;P++){let X=E[P];Ne.update(X,En),Ne.bind(X,En)}}return En}function ss(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.sunLights.needsUpdate=B,A.sunLightShadows.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function Ui(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(A,B,Z){let q=Xe.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Xe.get(A.texture).__webglTexture=B,Xe.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){let Z=Xe.get(A);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,Z=0){le=A,ie=B,G=Z;let q=null,j=!1,we=!1;if(A){let _e=Xe.get(A);if(_e.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(H.FRAMEBUFFER,_e.__webglFramebuffer),he.copy(A.viewport),ke.copy(A.scissor),Je=A.scissorTest,Ae.viewport(he),Ae.scissor(ke),Ae.setScissorTest(Je),J=-1;return}else if(_e.__webglFramebuffer===void 0)ze.setupRenderTarget(A);else if(_e.__hasExternalTextures)ze.rebindTextures(A,Xe.get(A.texture).__webglTexture,Xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let je=A.depthTexture;if(_e.__boundDepthTexture!==je){if(je!==null&&Xe.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(A)}}let Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(we=!0);let Fe=Xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?q=Fe[B][Z]:q=Fe[B],j=!0):A.samples>0&&ze.useMultisampledRTT(A)===!1?q=Xe.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?q=Fe[Z]:q=Fe,he.copy(A.viewport),ke.copy(A.scissor),Je=A.scissorTest}else he.copy(We).multiplyScalar(ye).floor(),ke.copy(xt).multiplyScalar(ye).floor(),Je=_t;if(Z!==0&&(q=k),Ae.bindFramebuffer(H.FRAMEBUFFER,q)&&Ae.drawBuffers(A,q),Ae.viewport(he),Ae.scissor(ke),Ae.setScissorTest(Je),j){let _e=Xe.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,_e.__webglTexture,Z)}else if(we){let _e=B;for(let Ie=0;Ie<A.textures.length;Ie++){let Fe=Xe.get(A.textures[Ie]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ie,Fe.__webglTexture,Z,_e)}}else if(A!==null&&Z!==0){let _e=Xe.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,_e.__webglTexture,Z)}J=-1};function zr(A){let B=Xe.get(A);return(B.__readFormat!==A.format||B.__readType!==A.type)&&(B.__readFormat=A.format,B.__readType=A.type,B.__formatReadable=Et.textureFormatReadable(A.format),B.__typeReadable=Et.textureTypeReadable(A.type)),B}this.readRenderTargetPixels=function(A,B,Z,q,j,we,Pe,_e=0){if(!(A&&A.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe],Array.isArray(Ie)&&(Ie=Ie[0])),Ie){Ae.bindFramebuffer(H.FRAMEBUFFER,Ie);try{let Fe=A.textures[_e],je=Fe.format,ct=Fe.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+_e);let ge=zr(Fe);if(ge.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ge.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-q&&Z>=0&&Z<=A.height-j&&H.readPixels(B,Z,q,j,me.convert(je),me.convert(ct),we)}finally{let Fe=le!==null?Xe.get(le).__webglFramebuffer:null;Ae.bindFramebuffer(H.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,B,Z,q,j,we,Pe,_e=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe],Array.isArray(Ie)&&(Ie=Ie[0])),Ie)if(B>=0&&B<=A.width-q&&Z>=0&&Z<=A.height-j){Ae.bindFramebuffer(H.FRAMEBUFFER,Ie);let Fe=A.textures[_e],je=Fe.format,ct=Fe.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+_e);let ge=zr(Fe);if(ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,it),H.bufferData(H.PIXEL_PACK_BUFFER,we.byteLength,H.STREAM_READ),H.readPixels(B,Z,q,j,me.convert(je),me.convert(ct),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Lt=le!==null?Xe.get(le).__webglFramebuffer:null;Ae.bindFramebuffer(H.FRAMEBUFFER,Lt);let Dt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await mp(H,Dt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,it),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,we),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(it),H.deleteSync(Dt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,Z=0){let q=Math.pow(2,-Z),j=Math.floor(A.image.width*q),we=Math.floor(A.image.height*q),Pe=B!==null?B.x:0,_e=B!==null?B.y:0;ze.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,Z,0,0,Pe,_e,j,we),Ae.unbindTexture()},this.copyTextureToTexture=function(A,B,Z=null,q=null,j=0,we=0){let Pe,_e,Ie,Fe,je,ct,ge,it,Lt,Dt=A.isCompressedTexture?A.mipmaps[we]:A.image;if(Z!==null)Pe=Z.max.x-Z.min.x,_e=Z.max.y-Z.min.y,Ie=Z.isBox3?Z.max.z-Z.min.z:1,Fe=Z.min.x,je=Z.min.y,ct=Z.isBox3?Z.min.z:0;else{let mt=Math.pow(2,-j);Pe=Math.floor(Dt.width*mt),_e=Math.floor(Dt.height*mt),A.isDataArrayTexture?Ie=Dt.depth:A.isData3DTexture?Ie=Math.floor(Dt.depth*mt):Ie=1,Fe=0,je=0,ct=0}q!==null?(ge=q.x,it=q.y,Lt=q.z):(ge=0,it=0,Lt=0);let Mt=me.convert(B.format),on=me.convert(B.type),Oe;B.isData3DTexture?(ze.setTexture3D(B,0),Oe=H.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ze.setTexture2DArray(B,0),Oe=H.TEXTURE_2D_ARRAY):(ze.setTexture2D(B,0),Oe=H.TEXTURE_2D),Ae.activeTexture(H.TEXTURE0),Ae.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),Ae.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),Ae.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);let kn=Ae.getParameter(H.UNPACK_ROW_LENGTH),pt=Ae.getParameter(H.UNPACK_IMAGE_HEIGHT),rs=Ae.getParameter(H.UNPACK_SKIP_PIXELS),En=Ae.getParameter(H.UNPACK_SKIP_ROWS),Gr=Ae.getParameter(H.UNPACK_SKIP_IMAGES);Ae.pixelStorei(H.UNPACK_ROW_LENGTH,Dt.width),Ae.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Dt.height),Ae.pixelStorei(H.UNPACK_SKIP_PIXELS,Fe),Ae.pixelStorei(H.UNPACK_SKIP_ROWS,je),Ae.pixelStorei(H.UNPACK_SKIP_IMAGES,ct);let Oi=A.isDataArrayTexture||A.isData3DTexture,Bi=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){let mt=Xe.get(A),Yt=Xe.get(B),zn=Xe.get(mt.__renderTarget),E=Xe.get(Yt.__renderTarget);Ae.bindFramebuffer(H.READ_FRAMEBUFFER,zn.__webglFramebuffer),Ae.bindFramebuffer(H.DRAW_FRAMEBUFFER,E.__webglFramebuffer);for(let P=0;P<Ie;P++)Oi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.get(A).__webglTexture,j,ct+P),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.get(B).__webglTexture,we,Lt+P)),H.blitFramebuffer(Fe,je,Fe+Pe,je+_e,ge,it,ge+Pe,it+_e,H.DEPTH_BUFFER_BIT,H.NEAREST);Ae.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Xe.has(A)){let mt=Xe.get(A),Yt=Xe.get(B);Ae.bindFramebuffer(H.READ_FRAMEBUFFER,N),Ae.bindFramebuffer(H.DRAW_FRAMEBUFFER,K);for(let zn=0;zn<Ie;zn++)Oi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mt.__webglTexture,j,ct+zn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,mt.__webglTexture,j),Bi?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.__webglTexture,we,Lt+zn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Yt.__webglTexture,we),j!==0?H.blitFramebuffer(Fe,je,Fe+Pe,je+_e,ge,it,ge+Pe,it+_e,H.COLOR_BUFFER_BIT,H.NEAREST):Bi?H.copyTexSubImage3D(Oe,we,ge,it,Lt+zn,Fe,je,Pe,_e):H.copyTexSubImage2D(Oe,we,ge,it,Fe,je,Pe,_e);Ae.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Bi?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Oe,we,ge,it,Lt,Pe,_e,Ie,Mt,on,Dt.data):B.isCompressedArrayTexture?H.compressedTexSubImage3D(Oe,we,ge,it,Lt,Pe,_e,Ie,Mt,Dt.data):H.texSubImage3D(Oe,we,ge,it,Lt,Pe,_e,Ie,Mt,on,Dt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,we,ge,it,Pe,_e,Mt,on,Dt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,we,ge,it,Dt.width,Dt.height,Mt,Dt.data):H.texSubImage2D(H.TEXTURE_2D,we,ge,it,Pe,_e,Mt,on,Dt);Ae.pixelStorei(H.UNPACK_ROW_LENGTH,kn),Ae.pixelStorei(H.UNPACK_IMAGE_HEIGHT,pt),Ae.pixelStorei(H.UNPACK_SKIP_PIXELS,rs),Ae.pixelStorei(H.UNPACK_SKIP_ROWS,En),Ae.pixelStorei(H.UNPACK_SKIP_IMAGES,Gr),we===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&H.generateMipmap(Oe),Ae.unbindTexture()},this.initRenderTarget=function(A){Xe.get(A).__webglFramebuffer===void 0&&ze.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ze.setTextureCube(A,0):A.isData3DTexture?ze.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ze.setTexture2DArray(A,0):ze.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){ie=0,G=0,le=null,Ae.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var Zi=[{id:"mage",icon:"\u{1F52E}",label:"MAGE",color:11824127,range:22,every:1.55,dmg:8,aoe:1.9,desc:"fireballs (area)"},{id:"warrior",icon:"\u2694\uFE0F",label:"WARRIOR",color:16734794,range:2.6,every:.8,dmg:9,aoe:1.2,desc:"holds the gate"},{id:"archer",icon:"\u{1F3F9}",label:"ARCHER",color:5234943,range:25,every:.65,dmg:5,aoe:0,desc:"fast arrows, hits fliers"},{id:"healer",icon:"\u{1F49A}",label:"HEALER",color:6160282,range:18,every:1.3,dmg:3,aoe:0,desc:"heals + barrier"}],qt=Object.fromEntries(Zi.map((s,e)=>[s.id,e])),vi=[{id:"imp",hp:14,speed:3.4,dmg:1,r:.45,fly:!1,pts:2},{id:"brute",hp:60,speed:1.6,dmg:3,r:.9,fly:!1,pts:6},{id:"wraith",hp:22,speed:2.6,dmg:2,r:.55,fly:!0,pts:4},{id:"boss",hp:560,speed:.9,dmg:8,r:2,fly:!1,pts:80}],Sn=Object.fromEntries(vi.map((s,e)=>[s.id,e])),$i=[{title:"THE DARK DIMENSION",text:"A magic underworld has clashed with Earth.",say:"The Dark Dimension... a magic underworld... has clashed with Earth.",sec:5.5,art:"rift"},{title:"A FATHER",text:"A scientist, denied the cure for his daughter by a greedy boss. His wife and his brother \u2014 gone.",say:"It began with a scientist. Denied the AIDS cure for his daughter by a greedy boss. His wife... and his brother... gone.",sec:9,art:"scientist"},{title:"THE BOOK & THE STONE",text:"An ancient book. A dark teleport stone. His grief tore the Dark Dimension open at Earth\u2019s core.",say:"An ancient book. A dark teleport stone. His grief tore the Dark Dimension open, at the core of the Earth.",sec:8,art:"book"},{title:"5,000,000,000 STOLEN",text:"Five billion souls were stolen by a hidden Mastermind.",say:"Five billion souls were stolen... by a hidden Mastermind.",sec:5.5,art:"souls"},{title:"THE SACRIFICE",text:"The Lord of Earth gave 1.5 billion more to awaken the Ascension System.",say:"The Lord of Earth sacrificed one and a half billion more... to awaken the Ascension System.",sec:7,art:"lord"},{title:"THE LAST CITADEL",text:"1.5 billion survivors remain. Beat the Dark Dimension \u2014 or they vanish forever.",say:"One and a half billion survivors remain. Beat the Dark Dimension... or they vanish. Forever.",sec:7,art:"citadel"}],$v=[0,5],Qp=s=>s%3===1?$i.map((e,t)=>t):$v;var Wu=[{n:1,title:"THE RIFT OPENS",boss:{id:"scientist",name:"The Corrupted Scientist",hp:1}},{n:2,title:"ASCENSION",boss:{id:"scientist2",name:"The Scientist, Unbound",hp:1.5}},{n:3,title:"THE MASTERMIND",boss:{id:"mastermind",name:"The Mastermind",hp:2.4}}],Qi=[{id:"rift",q:"THE RIFT IS UNSTABLE",a:{key:"seal",label:"SEAL THE RIFT",icon:"\u{1F300}",words:["seal","rift"]},b:{key:"hunt",label:"HUNT THE MASTERMIND",icon:"\u{1F5E1}\uFE0F",words:["hunt","mastermind","attack"]}},{id:"save",q:"THE CITY BURNS",a:{key:"city",label:"SAVE THE CITY",icon:"\u{1F3D9}\uFE0F",words:["city"]},b:{key:"army",label:"SAVE THE ARMY",icon:"\u{1F6E1}\uFE0F",words:["army"]}}],jl={seal:{spawnMul:.75,finalHp:1.3,text:"Fewer creatures pour out\u2026 but the Mastermind grows stronger."},hunt:{spawnMul:1.3,finalHp:.7,text:"The rift rages wider\u2026 but the Mastermind is wounded."},city:{survivors:12e7,guardians:0,text:"120 million survivors pulled from the ruins."},army:{survivors:0,guardians:2,text:"Two guardian heroes join the wall for good."}},em={"seal-city":"The rift is sealed. The city stands. Dawn rises over {n} survivors.","seal-army":"The rift is sealed and the army marches home. {n} survivors live on.","hunt-city":"The Mastermind is gone. The city wakes to {n} survivors and a quiet sky.","hunt-army":"The army stormed the dark. The Mastermind is gone. {n} survivors live on."},Bo=[{id:"dragon",min:500,label:"DRAGON ALLY",icon:"\u{1F409}",desc:"a dragon burns the field; on a boss: 25% of its life"},{id:"awaken",min:100,label:"ASCENSION",icon:"\u26A1",desc:"screen-wide ultimate + you ascend (\xD73 power)"},{id:"guardian",min:30,label:"GUARDIAN HERO",icon:"\u{1F6E1}\uFE0F",desc:"summons a golden guardian to the gate"},{id:"rune",min:5,label:"SHIELD RUNE",icon:"\u{1F537}",desc:"+12 barrier + a spell volley"},{id:"volley",min:1,label:"SPELL VOLLEY",icon:"\u2728",desc:"homing bolts from you (more coins, more bolts)"}],tm=s=>{let e=Number(s)||0;return Bo.find(t=>e>=t.min)||Bo[Bo.length-1]},Qv={mage:["mage","wizard","magic","\u{1F52E}","\u{1FA84}"],warrior:["warrior","knight","sword","tank","\u2694\uFE0F","\u{1F5E1}\uFE0F"],archer:["archer","bow","arrow","hunter","\u{1F3F9}"],healer:["healer","heal","priest","medic","\u{1F49A}","\u2764\uFE0F\u200D\u{1FA79}"]};function nm(s){let e=String(s||"").toLowerCase().trim();if(!e)return{cmd:"chat"};let t=e.split(/[^\p{L}\p{N}\p{Extended_Pictographic}\u200d\ufe0f]+/u).filter(Boolean),n=r=>new RegExp("\\p{Extended_Pictographic}","u").test(r)?e.includes(r):t.includes(r);for(let[r,a]of Object.entries(Qv))if(a.some(n))return{cmd:"class",cls:r};let i=e.match(/^(?:vote\s*)?([12])(?:\ufe0f?\u20e3)?\b/u)||e.match(/^([12])\ufe0f?\u20e3/u);if(i)return{cmd:"vote",vote:Number(i[1])};if(/^(one|first)\b/.test(e))return{cmd:"vote",vote:1};if(/^(two|second)\b/.test(e))return{cmd:"vote",vote:2};for(let r of Qi){if(r.a.words.some(n))return{cmd:"vote",vote:1,choice:r.id};if(r.b.words.some(n))return{cmd:"vote",vote:2,choice:r.id}}return{cmd:"chat"}}var Lr=4,Bn=2.6;var yi=2.2,nn=-34,im=15;var sm=[["red",16731486],["orange",16752412],["gold",16765503],["lime",10216804],["green",3064446],["teal",2085313],["cyan",4114431],["blue",5078271],["purple",10182117],["pink",16740277],["white",15921906],["black",3816008],["brown",11037500],["silver",12109014],["rose",16748451]],Kl=new Map(sm.map(([s,e])=>[s,e]));Kl.set("yellow",16765503);Kl.set("violet",10182117);Kl.set("grey",12109014);Kl.set("gray",12109014);function ey(s){let e=2166136261;for(let t of String(s))e^=t.codePointAt(0),e=Math.imul(e,16777619);return e>>>0}var rm=s=>sm[ey(s)%10][1];function qu(s){let e=String(s||"").replace(/[\u0000-\u001f\u200b-\u200f\u202a-\u202e]/g,"").replace(/\s+/g," ").trim(),t=[...e];return(t.length>16?t.slice(0,15).join("")+"\u2026":e)||"Viewer"}var Jl=["Pixel","Mochi","Bolt","Nugget","Waffles","Ziggy","Pebble","Turbo","Biscuit","Gizmo","Noodle","Sprocket","Muffin","Rocket","Tofu","Dumpling","Jelly","Comet","Pickle","Bean","Sushi","Taco","Nacho","Boba"];var Tt={bot:1,cmd:2,asc:4,bless:8,down:16,crown:32,gift:64},Xu=2;var ty={introSeconds:0,gatherSeconds:8,chapterSeconds:2,breakSeconds:5,victorySeconds:4.5,voteSeconds:16,choiceSeconds:5.5,endingSeconds:16,minDefenders:6,bots:!0,waveCap:70,bossCap:100,sendCap:70,enemySend:90,enemyCap:110,spawnMul:1,enemyHpMul:1,dmgMul:1,lossPer:95e4,likeBarrier:.06,likePulse:500,startChapter:1},Ts=4,Yl=class{constructor(e={},t=Math.random){this.o={...ty,...e},this.rng=t,this.t=0,this.run=0,this.people=new Map,this.byId=new Map,this.nextId=1,this.enemies=[],this.eNext=1,this.allies=[],this.aNext=1,this.hits=[],this.ev=[],this.rAdd=[],this.rDel=[],this.hype=0,this.likes=0,this.humanAt=-999,this.sessionBest=0,this.saves=0,this.lastResult=null,this.shotBudget=0,this.popBudget=0,this.killBudget=0,this.startSession(!0)}r(e){return Math.floor(this.rng()*e)}emit(e){this.ev.push(e)}drain(){let e=this.ev;return this.ev=[],e}drainRoster(){let e={add:this.rAdd,del:this.rDel};return this.rAdd=[],this.rDel=[],e}rosterEntry(e){return{id:e.id,name:e.name,color:e.color,bot:e.bot}}get alive(){let e=0;for(let t of this.people.values())t.on&&e++;return e}get humans(){let e=0;for(let t of this.people.values())t.on&&!t.bot&&e++;return e}defenders(){return[...this.people.values()].filter(e=>e.on)}get chapter(){return Math.max(1,Math.min(3,Math.floor(this.wave/Ts)+(this.phase==="chapter"||this.wave%Ts?1:0)))}get boss(){return this.enemies.find(e=>e.k===Sn.boss&&e.hp>0)||null}member(e,t,n=!1){let i=this.people.get(e);if(!i)i={id:this.nextId++,uid:e,name:qu(t),color:rm(e),bot:n,on:!1,cls:-1,slot:-1,x:0,z:Lr,hp:100,downT:0,cd:this.rng(),lastAct:this.t,cmdT:-9,hasteT:-9,ascT:-9,blessed:!1,giftT:-9,pts:0,kills:0,vote:0,post:0},this.people.set(e,i),this.byId.set(i.id,i),this.rAdd.push(this.rosterEntry(i));else if(t&&!n){let r=qu(t);r!==i.name&&(i.name=r,this.rAdd.push(this.rosterEntry(i)))}return i}join(e,t){if(e.lastAct=this.t,e.bot||(this.humanAt=this.t),t!==void 0&&t!==e.cls){let n=e.cls;e.cls=t,e.on&&(this.place(e),this.emit({k:"class",id:e.id,c:t,was:n}))}return e.on?!1:(e.cls<0&&(e.cls=this.autoClass()),e.on=!0,e.hp=100,e.downT=0,this.place(e),this.emit({k:"join",id:e.id,bot:e.bot,c:e.cls}),e.bot||this.trimBots(),!0)}autoClass(){let e=[0,0,0,0];for(let r of this.people.values())r.on&&r.cls>=0&&e[r.cls]++;let t=e.reduce((r,a)=>r+a,0),n=0,i=1e9;for(let r=0;r<4;r++){let a=e[r]+this.rng()*.8;r===qt.warrior&&e[r]>t*.25&&(a+=99),r===qt.healer&&(a+=.6),a<i&&(i=a,n=r)}return n}place(e){if(e.cls===qt.warrior){let r=this.post=(this.post||0)+1,a=r*7%13;e.post={x:-6+a,z:yi-1.6-r%3*.9},e.x=e.post.x,e.z=Lr-.2;return}let n=(this.slotN=(this.slotN||0)+1)*11%34,i=n%2;e.post=null,e.x=-8.4+(n>>1)*1.05+i*.5,e.z=Lr+i*1.1+(this.rng()-.5)*.15}trimBots(){if(this.humans+this.botsOn()<=this.o.minDefenders)return;let e=[...this.people.values()].find(t=>t.bot&&t.on);e&&(e.on=!1,this.emit({k:"leave",id:e.id}))}botsOn(){let e=0;for(let t of this.people.values())t.bot&&t.on&&e++;return e}fillBots(){if(!this.o.bots)return;let e=this.o.minDefenders-this.alive,t=[qt.warrior,qt.mage,qt.archer,qt.healer,qt.archer,qt.mage,qt.warrior,qt.mage];for(let n=0;n<Jl.length&&e>0;n++){let i=Jl[(n+this.run*3)%Jl.length],r=this.member("bot:"+i,"Bot "+i,!0);r.on||(r.cls=t[n%t.length],this.join(r),e--)}}input(e){if(!e||!e.uid)return{ok:!1};let t=this.member(String(e.uid),e.name||e.uid);switch(e.type){case"chat":case"comment":return this.chat(t,String(e.text||""));case"like":return this.like(t,Math.max(1,Math.min(100,Number(e.count)||1)));case"gift":return this.gift(t,(Number(e.coins)||1)*Math.max(1,Number(e.count)||1),e.giftName||"gift");case"follow":return this.join(t),this.bless(t,"follow"),{ok:!0};case"share":return this.join(t),this.bless(t,"share"),{ok:!0};case"join":return this.join(t),{ok:!0}}return{ok:!0}}chat(e,t){let n=nm(t),i=this.join(e,n.cmd==="class"?qt[n.cls]:void 0);return e.cmdT=this.t,this.phase==="vote"&&n.cmd==="vote"&&(!n.choice||n.choice===Qi[this.voteIdx].id)?(e.vote!==n.vote&&(e.vote=n.vote,this.countVotes(),this.emit({k:"vote",id:e.id,v:n.vote})),{ok:!0,cmd:"vote",vote:n.vote}):(this.fighting()&&(e.hasteT=this.t+3),{ok:!0,cmd:i?"join":n.cmd,cls:n.cls})}fighting(){return this.phase==="wave"||this.phase==="boss"||this.phase==="break"}like(e,t){return this.join(e),this.likes+=t,this.hype+=t,this.barrier=Math.min(100,this.barrier+t*this.o.likeBarrier),this.hype>=this.o.likePulse&&(this.hype-=this.o.likePulse,this.pulse(e)),{ok:!0}}bless(e,t){if(t==="follow")e.blessed=!0,this.revive(e),this.barrier=Math.min(100,this.barrier+10);else{this.barrier=Math.min(100,this.barrier+15);for(let n of this.people.values())n.on&&n.downT>0&&this.revive(n)}this.emit({k:"bless",id:e.id,why:t})}revive(e){e.downT>0&&(e.downT=0,e.hp=100,this.emit({k:"rise",id:e.id})),e.hp=100}gift(e,t,n){this.join(e);let i=tm(t);e.giftT=this.t,e.pts+=Math.min(60,4+t);let r={k:"gift",id:e.id,tier:i.id,coins:t,giftName:n};switch(i.id){case"volley":this.volley(e,Math.min(12,5+t),11);break;case"rune":this.barrier=Math.min(100,this.barrier+12),this.volley(e,6,12);break;case"guardian":{let a=this.allies.filter(o=>o.k===0);if(a.length>=4){let o=a.sort((c,l)=>c.until-l.until)[0];o.until=this.t+35,o.hp=100,r.extended=!0}else this.addAlly(0,e.id,35);break}case"awaken":e.ascT=this.t+20,this.t-(this.ultT||-99)>8?(this.ultT=this.t,this.ultimate(e,1)):(this.volley(e,10,16),r.cool=!0);break;case"dragon":{let a=this.boss;if(a&&(this.damage(a,a.max*.25,e,!0),r.judgment=!0),this.allies.some(o=>o.k===1)){let o=this.allies.find(c=>c.k===1);o.until=Math.max(o.until,this.t+25),a||this.ultimate(e,.6),r.extended=!0}else this.addAlly(1,e.id,25);break}}return this.emit(r),{ok:!0,tier:i.id}}addAlly(e,t,n){let i={id:this.aNext++,k:e,by:t,until:this.t+n,x:e?0:-5+this.r(11),z:e?-10:yi-2.6,hp:100,cd:0,a0:this.t};this.allies.push(i),this.emit({k:"ally",a:i.id,kind:e,by:t})}volley(e,t,n){let i=this.enemies.filter(r=>r.hp>0);if(!i.length){this.barrier=Math.min(100,this.barrier+4);return}for(let r=0;r<t;r++){let a=i[this.r(i.length)];this.queueHit(e,a,n*this.o.dmgMul,0,.5+r*.07,"v")}this.emit({k:"volley",id:e.id,n:t})}ultimate(e,t){let n=0;for(let i of this.enemies){if(i.hp<=0)continue;let r=i.k===Sn.boss?i.max*.08*t:(60+this.wave*6)*t;this.damage(i,r,e,!1),i.k!==Sn.boss&&(i.z-=3*t),n++}this.emit({k:"ult",id:e?e.id:0,hit:n,p:t})}pulse(e){this.barrier=Math.min(100,this.barrier+20);for(let t of this.people.values())t.on&&t.downT>0&&this.revive(t);this.ultimate(null,.5),this.emit({k:"pulse",id:e.id})}setPhase(e,t){this.phase=e,this.phaseStart=this.t,this.phaseEnd=this.t+t}startSession(e=!1){this.run++,this.wave=(this.o.startChapter-1)*Ts+(this.o.startWave||0),this.survivors=15e8,this.barrier=40,this.hype=0,this.choices=[],this.fx={spawnMul:1,finalHp:1,guardians:0},this.voteIdx=-1,this.voteCounts=[0,0],this.enemies=[],this.allies=[],this.hits=[],this.spawnLeft=0,this.waveStart=0,this.slotN=0,this.post=0,this.lost=0;for(let[t,n]of this.people)!n.bot&&this.t-n.lastAct>1200&&(this.people.delete(t),this.byId.delete(n.id),this.rDel.push(n.id));for(let t of this.people.values())t.on=!1,t.runPts=0,t.vote=0,t.ascT=-9,t.blessed=!1,t.downT=0,t.hp=100;for(let t of this.people.values())!t.bot&&this.t-t.lastAct<180&&this.join(t);this.lore=this.o.introSeconds>0?(this.o.loreCards||Qp(this.run)).slice():[],this.loreAt=this.t,this.setPhase("intro",this.lore.length?this.lore.reduce((t,n)=>t+$i[n].sec,0)+1:.5),this.emit({k:"intro",run:this.run,lore:this.lore.slice()})}startChapter(){this.setPhase("chapter",this.o.chapterSeconds),this.emit({k:"chapter",n:this.chapter,title:Wu[this.chapter-1].title})}nextWave(){this.wave++;let e=this.chapter,t=(this.wave-1)%Ts,n=Math.max(1,this.alive),i=Math.sqrt(Math.min(n,220)/6),r=.45+.65*i;this.hpCrowd=.6+.4*i;let a=Math.round((6+1.6*this.wave)*r*this.fx.spawnMul*this.o.spawnMul);if(this.waveStart=this.t,t===Ts-1){let o=Wu[e-1].boss,c=vi[Sn.boss].hp*o.hp*(.6+.4*i)*(e===3?this.fx.finalHp:1)*this.o.enemyHpMul;this.spawnLeft=Math.round(a*.5),this.spawnEvery=22/Math.max(1,this.spawnLeft);let l=this.spawn(Sn.boss,c);l.bossId=o.id,l.name=o.name,l.z=nn+4,l.x=0,this.setPhase("boss",this.o.bossCap),this.emit({k:"boss",n:e,id:o.id,name:o.name,hp:Math.round(c)})}else this.spawnLeft=a,this.spawnEvery=(16+t*3)/a,this.setPhase("wave",this.o.waveCap),this.emit({k:"wave",n:this.wave,ch:e,i:t+1,count:a});this.nextSpawn=this.t+.8,this.fillBots()}spawn(e,t){let n=vi[e],i=this.chapter,r=t||n.hp*(1+.08*(this.wave-1))*(1+(i-1)*.1)*(this.hpCrowd||1)*this.o.enemyHpMul,a={id:this.eNext++,k:e,x:(this.rng()-.5)*5,z:nn+3+this.rng()*2,tx:(this.rng()-.5)*(im-3),hp:r,max:r,speed:n.speed*(.85+this.rng()*.3),atkT:0,slowT:0,eng:0,born:this.t};return this.enemies.push(a),a}spawnTick(){if(this.spawnLeft<=0||this.t<this.nextSpawn)return;if(this.enemies.length>=this.o.enemyCap){this.nextSpawn=this.t+.3;return}let e=this.chapter,t=this.rng(),n=e===1?[.7,.85]:e===2?[.5,.75]:[.42,.72],i=t<n[0]?Sn.imp:t<n[1]?Sn.brute:Sn.wraith;this.spawn(i),this.spawnLeft--,this.nextSpawn=this.t+this.spawnEvery*(.6+this.rng()*.8)}waveCleared(){return this.spawnLeft<=0&&!this.enemies.some(e=>e.hp>0)}startVote(){this.voteIdx=this.chapter-1,this.voteCounts=[0,0];for(let e of this.people.values())e.vote=0;this.setPhase("vote",this.o.voteSeconds),this.emit({k:"vote",start:!0,i:this.voteIdx})}countVotes(){let e=[0,0];for(let t of this.people.values())t.on&&t.vote&&e[t.vote-1]++;this.voteCounts=e}closeVote(){this.countVotes();let e=Qi[this.voteIdx],t=this.voteCounts,n=t[0]===t[1]?this.r(2)?"b":"a":t[0]>t[1]?"a":"b",i=e[n].key,r=jl[i];if(this.choices.push(i),r.spawnMul&&(this.fx.spawnMul=r.spawnMul),r.finalHp&&(this.fx.finalHp=r.finalHp),r.survivors&&(this.survivors=Math.min(15e8,this.survivors+r.survivors)),r.guardians){this.fx.guardians=r.guardians;for(let a=0;a<r.guardians;a++)this.addAlly(0,0,1e6)}this.setPhase("choice",this.o.choiceSeconds),this.emit({k:"choice",i:this.voteIdx,key:i,votes:t.slice(),none:t[0]+t[1]===0})}endSession(e){let t=[...this.people.values()].filter(r=>r.on||r.runPts>0).filter(r=>!r.bot&&r.runPts>0),n=[...this.people.values()].filter(r=>r.runPts>0||r.on).sort((r,a)=>a.runPts-r.runPts),i=n.filter(r=>!r.bot).slice(0,3);for(let r of t)r.pts+=0;this.sessionBest=Math.max(this.sessionBest,this.wave),e&&this.saves++,this.lastResult={run:this.run,saved:e,wave:this.wave,survivors:Math.round(this.survivors),choices:this.choices.slice(),players:t.map(r=>({uid:r.uid,name:r.name,pts:Math.round(r.runPts),kills:r.runKills||0}))},this.enemies=[],this.hits=[],this.allies=this.allies.filter(r=>r.k===1&&!1),this.setPhase("ending",this.o.endingSeconds),this.emit({k:"end",saved:e,wave:this.wave,survivors:Math.round(this.survivors),choices:this.choices.slice(),top:(i.length?i:n.slice(0,3)).map(r=>r.id)});for(let r of this.people.values())r.runKills=0}step(e){this.t+=e;let t=this.phase;if(this.shotBudget=Math.min(6,this.shotBudget+e*34),this.popBudget=Math.min(4,this.popBudget+e*12),this.killBudget=Math.min(6,this.killBudget+e*24),(t==="wave"||t==="boss"||t==="break"||t==="victory")&&(this.spawnTick(),this.combat(e),this.survivors<=0))return this.survivors=0,this.endSession(!1);if(t==="vote"&&this.botsVote(e),t==="intro"&&this.lore.length&&this.t>=this.loreAt){let n=this.lore.shift();this.loreAt=this.t+$i[n].sec,this.emit({k:"lore",i:n,sec:$i[n].sec})}if(this.fighting()&&(this.barrier=Math.max(0,this.barrier-e*.6)),t==="wave"&&this.waveCleared()&&this.t-this.waveStart>4){this.setPhase("break",this.o.breakSeconds),this.emit({k:"clear",n:this.wave});return}if(t==="boss"&&!this.boss){this.setPhase("victory",this.o.victorySeconds);for(let n of this.enemies)n.hp>0&&(n.hp=0,this.emit({k:"kill",e:n.id,by:0,x:+n.x.toFixed(1),z:+n.z.toFixed(1),q:1}));return}if(!(this.t<this.phaseEnd))switch(t){case"intro":this.setPhase("gather",this.o.gatherSeconds),this.fillBots(),this.emit({k:"gather"});break;case"gather":if(!this.alive&&(this.fillBots(),!this.alive)){this.phaseEnd=this.t+2;return}this.startChapter();break;case"chapter":this.nextWave();break;case"wave":this.nextWave();break;case"break":this.wave%Ts===Ts-1?this.nextWave():this.nextWave();break;case"boss":{let n=this.boss;n&&(this.loseSurvivors(150/1.15,!0),n.hp=0,this.emit({k:"retreat",name:n.name})),this.setPhase("victory",2.5);break}case"victory":if(this.chapter>=3)return this.endSession(!0);this.startVote();break;case"vote":this.closeVote();break;case"choice":this.wave=this.chapter*Ts,this.startChapter();break;case"ending":this.startSession();break}}loseSurvivors(e,t=!1){let n=e*this.o.lossPer*(1+.12*(this.chapter-1));this.survivors=Math.max(0,this.survivors-n),this.lost+=n,t&&this.emit({k:"toll",n:Math.round(n)})}queueHit(e,t,n,i,r,a){this.hits.push({at:this.t+r,by:e?e.id:0,e:t,dmg:n,aoe:i}),this.shotBudget>=1&&(this.shotBudget--,this.emit({k:"shot",s:e?e.id:0,e:t.id,c:a,d:+r.toFixed(2)}))}damage(e,t,n,i){if(e.hp<=0)return;let r=e.hp;if(e.hp-=t,e.hitT=this.t,n){let a=Math.min(r,t);n.runPts=(n.runPts||0)+a*.25,n.pts+=a*.25}if((i||this.popBudget>=1&&(e.k===Sn.boss||t>=14))&&(this.popBudget=Math.max(0,this.popBudget-1),this.emit({k:"dmg",e:e.id,d:Math.round(t),c:i?2:t>=20?1:0})),e.hp<=0){let a=vi[e.k];n&&(n.runPts+=a.pts,n.pts+=a.pts,n.kills++,n.runKills=(n.runKills||0)+1),e.k===Sn.boss?this.emit({k:"bossdown",id:e.bossId,name:e.name,by:n&&!n.bot?n.id:0}):this.killBudget>=1&&(this.killBudget--,this.emit({k:"kill",e:e.id,by:n?n.id:0,x:+e.x.toFixed(1),z:+e.z.toFixed(1),q:e.k}))}}combat(e){let t=this.t;if(this.hits.length){let c=[];for(let l of this.hits){if(l.at>t){c.push(l);continue}let h=l.by?this.byId.get(l.by):null;if(l.e.hp>0&&this.damage(l.e,l.dmg,h,!1),l.aoe)for(let d of this.enemies)d!==l.e&&d.hp>0&&d.k!==Sn.boss&&Math.abs(d.x-l.e.x)<l.aoe&&Math.abs(d.z-l.e.z)<l.aoe&&this.damage(d,l.dmg*.55,h,!1)}this.hits=c}let n=this.enemies.filter(c=>c.hp>0).sort((c,l)=>l.z-c.z),i=n.filter(c=>!vi[c.k].fly),r=0,a=this.alive,o=a>24?Math.sqrt(24/a):1;for(let c of this.people.values())c.on&&c.cls===qt.healer&&c.downT<=0&&r++;for(let c of this.people.values()){if(!c.on)continue;if(c.downT>0){c.downT-=e*(1+Math.min(2,r*.25)),c.downT<=0&&(c.downT=0,c.hp=100,this.emit({k:"rise",id:c.id}));continue}let l=Zi[c.cls];if(c.cls===qt.warrior&&this.warriorMove(c,i,e),c.cd-=e*(t<c.hasteT?1.6:1)*(t<c.ascT?1.5:1),c.cd>0)continue;c.cd=l.every*(.9+this.rng()*.2);let h=this.rng()<.12,d=o*(c.bot?.7:1)*(c.blessed?1.2:1)*(t<c.ascT?3:1)*(h?2:1)*this.o.dmgMul;if(c.cls===qt.warrior){let m=i.find(g=>Math.abs(g.x-c.x)<l.range+vi[g.k].r&&Math.abs(g.z-c.z)<l.range+vi[g.k].r);m?(this.damage(m,l.dmg*d,c,h&&d>2.5),m.slowT=t+.6,this.shotBudget>=1&&(this.shotBudget--,this.emit({k:"shot",s:c.id,e:m.id,c:"w",d:.1}))):c.cd=.25;continue}if(c.cls===qt.healer){this.barrier=Math.min(100,this.barrier+.25);let m=null;for(let g of this.people.values())g.on&&g.downT<=0&&g.cls===qt.warrior&&g.hp<80&&(!m||g.hp<m.hp)&&(m=g);if(m){m.hp=Math.min(100,m.hp+16),this.shotBudget>=1&&(this.shotBudget--,this.emit({k:"heal",s:c.id,t:m.id}));continue}for(let g of this.allies)if(g.k===0&&g.hp<90){g.hp=Math.min(100,g.hp+10);break}}let f=[];for(let m of n)if(Math.hypot(m.x-c.x,m.z-c.z)<=l.range&&(f.push(m),f.length>=6))break;if(!f.length){c.cd=.3;continue}let u=f[this.r(Math.min(f.length,c.cls===qt.mage?6:3))];if(c.cls===qt.archer){let m=f.find(g=>vi[g.k].fly);m&&this.rng()<.6&&(u=m)}let p=Math.hypot(u.x-c.x,u.z-c.z),x=c.cls===qt.mage?19:c.cls===qt.archer?36:26;this.queueHit(c,u,l.dmg*d,l.aoe,p/x,c.cls===qt.mage?"m":c.cls===qt.archer?"a":"h")}n.length&&this.loseSurvivors(n.length*(.004+.008*Math.min(1,this.alive/60))*e),this.alliesStep(i,n,e),this.enemiesStep(e),this.enemies=this.enemies.filter(c=>c.hp>0)}warriorMove(e,t,n){let i=e.post||{x:e.x,z:yi-1.6},r=i.x,a=i.z,o=null,c=6.5;for(let f of t){if(f.z<i.z-7)break;let u=Math.hypot(f.x-i.x,f.z-i.z);u<c&&(c=u,o=f)}o&&(r=o.x,a=Math.min(i.z+.5,o.z+vi[o.k].r+.6));let l=r-e.x,h=a-e.z,d=Math.hypot(l,h);if(d>.08){let f=Math.min(d,4.2*n);e.x+=l/d*f,e.z+=h/d*f}}alliesStep(e,t,n){let i=this.t;for(let r of this.allies){if(r.until<i){r.gone=!0,this.emit({k:"allyout",a:r.id});continue}if(r.cd-=n,r.k===0){let a=null,o=9;for(let u of e){let p=Math.hypot(u.x-r.x,u.z-r.z);p<o&&(o=p,a=u)}let c=a?a.x:r.home??(r.home=r.x),l=a?a.z+vi[a.k].r+.9:yi-2.6,h=c-r.x,d=l-r.z,f=Math.hypot(h,d);if(f>.1){let u=Math.min(f,3.6*n);r.x+=h/f*u,r.z+=d/f*u}if(r.cd<=0&&a&&o<2.8){r.cd=.85;let u=this.byId.get(r.by);for(let p of e)Math.abs(p.x-r.x)<2.4&&Math.abs(p.z-r.z)<2.6&&this.damage(p,(p.k===Sn.boss?30:24)*this.o.dmgMul,u,!1);this.shotBudget>=1&&(this.shotBudget--,this.emit({k:"shot",s:-r.id,e:a.id,c:"g",d:.1}))}}else{let a=i-r.a0;if(r.x=Math.sin(a*.7)*7,r.z=-15+Math.cos(a*.5)*9,r.cd<=0){r.cd=.45;let o=this.byId.get(r.by),c=r.x+Math.sin(a*.7+.6)*1.5,l=r.z+3;for(let h of t)Math.abs(h.x-c)<3.2&&Math.abs(h.z-l)<3.2&&this.damage(h,(h.k===Sn.boss?22:20)*this.o.dmgMul,o,!1)}}}this.allies.some(r=>r.gone)&&(this.allies=this.allies.filter(r=>!r.gone))}enemiesStep(e){let t=this.t,n=[];for(let i of this.people.values())i.on&&i.cls===qt.warrior&&i.downT<=0&&n.push(i);for(let i of this.allies)i.k===0&&n.push(i);for(let i of this.enemies){if(i.hp<=0)continue;let r=vi[i.k];if(i.k===Sn.boss){this.bossStep(i,e);continue}let a=r.fly?Lr-1.6:yi-.4-r.r,o=null;if(!r.fly){for(let c of n)if(Math.abs(c.x-i.x)<r.r+.75&&Math.abs(c.z-i.z)<r.r+.85){o=c;break}}if(o){t>i.atkT&&(i.atkT=t+1.1,o.uid?(o.hp-=r.dmg*5.5,o.hp<=0&&(o.hp=0,o.downT=9,this.emit({k:"down",id:o.id}))):o.hp=Math.max(0,o.hp-r.dmg*1.5));continue}if(i.z<a-.05){let c=i.speed*(t<i.slowT?.35:1),l=i.tx-i.x,h=Math.min(1,e*.6);i.x+=l*h*.5+Math.sin(t*2+i.id)*e*.4,i.z=Math.min(a,i.z+c*e);continue}t>i.atkT&&(i.atkT=t+1.3,this.wallHit(r.dmg,i))}}wallHit(e,t){if(this.barrier>=e*4){this.barrier-=e*4,this.popBudget>=1&&this.rng()<.3&&(this.popBudget--,this.emit({k:"block",x:+t.x.toFixed(1)}));return}this.barrier=0,this.loseSurvivors(e),this.popBudget>=1&&this.rng()<.5&&(this.popBudget--,this.emit({k:"wallhit",x:+t.x.toFixed(1),d:e}))}bossStep(e,t){let n=this.t;if(e.z<-9){e.z+=e.speed*t,e.x+=(0-e.x)*t;return}if(e.nextAtk||(e.nextAtk=n+3,e.atkN=0),n<e.nextAtk)return;if(e.atkN++,e.nextAtk=n+(e.bossId==="mastermind"?3.6:4.4),e.atkN%3===0){for(let c=0;c<5;c++){let l=this.spawn(c%2?Sn.wraith:Sn.imp);l.x=e.x+(this.rng()-.5)*6,l.z=e.z+1}this.emit({k:"bossatk",kind:"summon"});return}let i=this.barrier>=30;this.barrier=Math.max(0,this.barrier-30),this.loseSurvivors(i?3:7,!1);let r=[],a=this.defenders().filter(c=>c.downT<=0),o=i?0:Math.min(a.length-1,1+this.r(3));for(let c=0;c<o;c++){let l=a.splice(this.r(a.length),1)[0];l.downT=7,l.hp=0,r.push(l.id)}this.emit({k:"bossatk",kind:e.atkN%2?"beam":"slam",blocked:i,downed:r,x:+(e.x+(this.rng()-.5)*8).toFixed(1)})}botsVote(e){for(let t of this.people.values())!t.bot||!t.on||t.vote||this.rng()<e*.3&&this.t-this.phaseStart<this.o.voteSeconds*.8&&(t.vote=1+this.r(2),this.countVotes(),this.emit({k:"vote",id:t.id,v:t.vote}))}snapshot(){let e=[],t=this.defenders(),n=t;t.length>this.o.sendCap&&(n=t.slice().sort((d,f)=>(f.bot?0:1)-(d.bot?0:1)||f.lastAct-d.lastAct).slice(0,this.o.sendCap));let i=0,r=0;for(let d of t)!d.bot&&(d.runPts||0)>r&&(r=d.runPts,i=d.id);for(let d of n){let f=(d.bot?Tt.bot:0)|(this.t<d.hasteT?Tt.cmd:0)|(this.t<d.ascT?Tt.asc:0)|(d.blessed?Tt.bless:0)|(d.downT>0?Tt.down:0)|(d.id===i?Tt.crown:0)|(this.t-d.giftT<3?Tt.gift:0);e.push(d.id,Math.round(d.x*100)/100,Math.round(d.z*100)/100,d.cls|f<<Xu,Math.round(d.hp))}let a=[],o=this.enemies.filter(d=>d.hp>0),c=o.length>this.o.enemySend?o.slice().sort((d,f)=>(f.k===Sn.boss)-(d.k===Sn.boss)||f.z-d.z).slice(0,this.o.enemySend):o;for(let d of c)a.push(d.id,d.k,Math.round(d.x*100)/100,Math.round(d.z*100)/100,Math.max(1,Math.round(d.hp/d.max*100)));let l=[];for(let d of this.allies)l.push(d.id,d.k,Math.round(d.x*100)/100,Math.round(d.z*100)/100);let h=this.boss;return{tm:Math.round(this.t*1e3)/1e3,ph:this.phase,tl:Math.max(0,Math.round((this.phaseEnd-this.t)*10)/10),pd:Math.round((this.phaseEnd-this.phaseStart)*10)/10,ch:this.chapter,wv:this.wave,wi:(this.wave-1)%Ts+1,sv:Math.round(this.survivors),bar:Math.round(this.barrier*10)/10,hype:this.hype,vi:this.voteIdx,vc:this.voteCounts.slice(),cho:this.choices.slice(),left:this.spawnLeft+o.length,n:t.length,run:this.run,bo:h?{id:h.bossId,n:h.name,hp:Math.ceil(h.hp),max:Math.round(h.max)}:null,best:this.sessionBest,saves:this.saves,f:e,e:a,al:l}}board(e=8){let t=[];for(let n of this.people.values())!n.bot&&n.pts>0&&t.push({name:n.name,pts:Math.round(n.pts),kills:n.kills,cls:n.cls});return t.sort((n,i)=>i.pts-n.pts).slice(0,e)}};function Zl(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Ut;c.morphTargetsRelative=o;let l=0;for(let h=0;h<s.length;++h){let d=s[h],f=0,u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,d=[];for(let f=0;f<s.length;++f){let u=s[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=s[f].attributes.position.count}c.setIndex(d)}for(let h in r){let d=am(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<d;++f){let u=[];for(let x=0;x<a[h].length;++x)u.push(a[h][x][f]);let p=am(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function am(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new nt(a,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<t;p++){let x=h.getComponent(f,p);o.setComponent(f+d,p,x)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function ju(s,e){if(e===mu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ta||e===No){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Ta)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Dr(s){let e=new Map,t=new Map,n=s.clone();return om(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function om(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)om(s.children[n],e.children[n],t)}var js=class extends qi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ef(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new $l(t,ut.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new $l(t,ut.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new mf(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ms.extractUrlBase(e);a=Ms.resolveURL(l,this.path)}else a=Ms.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ga(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===fm){try{a[ut.KHR_BINARY_GLTF]=new gf(e)}catch(d){i&&i(d);return}r=JSON.parse(a[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Sf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case ut.KHR_MATERIALS_UNLIT:a[d]=new $u;break;case ut.KHR_DRACO_MESH_COMPRESSION:a[d]=new bf(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:a[d]=new xf;break;case ut.KHR_MESH_QUANTIZATION:a[d]=new _f;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function ny(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Qt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Zu=class{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new De(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],jn);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Sr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Vs(h),l.distance=d;break;case"spot":l=new So(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),es(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},$u=class{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,n){let i=[];e.color=new De(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],jn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(i)}},Qu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ef=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Qe(r,r)}return Promise.all(i)}},tf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},nf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},sf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},rf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],jn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ht)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},af=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},of=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(r[0],r[1],r[2],jn),Promise.all(i)}},cf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},lf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(r[0],r[1],r[2],jn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ht)),Promise.all(i)}},hf=class{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},uf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},ff=class{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},df=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},pf=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},$l=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):a.ready.then(function(){let u=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}},mf=class{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Mi.TRIANGLES&&l.mode!==Mi.TRIANGLE_STRIP&&l.mode!==Mi.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],f=l[0].count,u=[];for(let p of d){let x=new qe,m=new z,g=new Pn,v=new z(1,1,1),M=new vn(p.geometry,p.material,f);for(let w=0;w<f;w++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,w),c.SCALE&&v.fromBufferAttribute(c.SCALE,w),M.setMatrixAt(w,x.compose(m,g,v));let _=null;for(let w in c)if(w==="_COLOR_0"){let y=c[w];M.instanceColor=new ps(y.array,y.itemSize,y.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(_===null){let b=M.geometry;_=new Ut,_.name=b.name;for(let S in b.attributes)_.setAttribute(S,b.attributes[S]);for(let S in b.morphAttributes)_.morphAttributes[S]=b.morphAttributes[S];b.index!==null&&_.setIndex(b.index),_.morphTargetsRelative=b.morphTargetsRelative;for(let S of b.groups)_.addGroup(S.start,S.count,S.materialIndex);b.boundingBox!==null&&(_.boundingBox=b.boundingBox.clone()),b.boundingSphere!==null&&(_.boundingSphere=b.boundingSphere.clone()),_.drawRange.start=b.drawRange.start,_.drawRange.count=b.drawRange.count,_.userData=Object.assign({},b.userData),M.geometry=_}let y=c[w];_.setAttribute(w,new ps(y.array,y.itemSize,y.normalized))}Wt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),u.push(M)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}},fm="glTF",zo=12,cm={JSON:1313821514,BIN:5130562},gf=class{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,zo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-zo,r=new DataView(e,zo),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===cm.JSON){let l=new Uint8Array(e,zo+a,o);this.content=n.decode(l)}else if(c===cm.BIN){let l=zo+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},bf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let d=yf[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=yf[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],u=Ca[f.componentType];l[d]=u.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(let p in u.attributes){let x=u.attributes[p],m=c[p];m!==void 0&&(x.normalized=m)}d(u)},o,l,jn,f)})})}},xf=class{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},_f=class{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}},Ql=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,d=(n-t)/h,f=d*d,u=f*d,p=e*l,x=p-l,m=-2*u+3*f,g=u-f,v=1-m,M=g-f+d;for(let _=0;_!==o;_++){let w=a[x+_+o],y=a[x+_+c]*h,b=a[p+_+o],S=a[p+_]*h;r[_]=v*w+M*y+m*b+g*S}return r}},iy=new Pn,vf=class extends Ql{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return iy.fromArray(r).normalize().toArray(r),r}},Mi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ca={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lm={9728:$t,9729:bn,9984:tl,9985:ya,9986:Rr,9987:xi},hm={33071:pi,33648:ra,10497:Os},Ku={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sy={CUBICSPLINE:void 0,LINEAR:dr,STEP:fr},Ju={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ry(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new vr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xi})),s.DefaultMaterial}function Nr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function es(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ay(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(f)}if(i){let f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function oy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cy(s){let e,t=s.extensions&&s.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yu(t.attributes):e=s.indices+":"+Yu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Yu(s.targets[n]);return e}function Yu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Mf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ly(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var hy=new qe,Sf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ny,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?(this.textureLoader=new vo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new To(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ga(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Nr(r,o,i),es(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Ms.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Ku[i.type],o=Ca[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new nt(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Ku[i.type],l=Ca[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,x,m;if(u&&u!==d){let g=Math.floor(f/u),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,M=t.cache.get(v);M||(x=new l(o,g*u,i.count*u/h),M=new ua(x,u/h),t.cache.add(v,M)),m=new fa(M,c,f%u/h,p)}else o===null?x=new l(i.count*c):x=new l(o,f,i.count*c),m=new nt(x,c,p);if(i.sparse!==void 0){let g=Ku.SCALAR,v=Ca[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,w=new v(a[1],M,i.sparse.count*g),y=new l(a[2],_,i.sparse.count*c);o!==null&&(m=new nt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,S=w.length;b<S;b++){let D=w[b];if(m.setX(D,y[b*c]),c>=2&&m.setY(D,y[b*c+1]),c>=3&&m.setZ(D,y[b*c+2]),c>=4&&m.setW(D,y[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=lm[f.magFilter]||bn,h.minFilter=lm[f.minFilter]||xi,h.wrapS=hm[f.wrapS]||Os,h.wrapT=hm[f.wrapT]||Os,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==$t&&h.minFilter!==bn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(f){return new Promise(function(u,p){t.parse(f,u,p)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){l=!0;let u=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(f){return new Promise(function(u,p){let x=u;t.isImageBitmapLoader===!0&&(x=function(m){let g=new xn(m);g.needsUpdate=!0,u(g)}),t.load(Ms.resolveURL(f,r.path),x,void 0,p)})})}let d=h.then(function(f){return l===!0&&o.revokeObjectURL(c),es(f,a),f.userData.mimeType=a.mimeType||ly(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ma,Vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new pa,Vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return vr}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[ut.KHR_MATERIALS_UNLIT]){let d=i[ut.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],jn),o.opacity=f[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,Ht)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=un);let h=r.alphaMode||Ju.OPAQUE;if(h===Ju.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ju.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==tn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Qe(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==tn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==tn){let d=r.emissiveFactor;o.emissive=new De().setRGB(d[0],d[1],d[2],jn)}return r.emissiveTexture!==void 0&&a!==tn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(l).then(function(){let d=new a(o);return r.name&&(d.name=r.name),es(d,r),t.associations.set(d,{materials:e}),r.extensions&&Nr(i,d,r),d})}createUniqueName(e){let t=kt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return um(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=cy(l),d=i[h];if(d)a.push(d.promise);else{let f;l.extensions&&l.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=um(new Ut,l,t),l.mode===Mi.TRIANGLE_STRIP?f=f.then(u=>ju(u,No)):l.mode===Mi.TRIANGLE_FAN&&(f=f.then(u=>ju(u,Ta))),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?ry(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let u=0,p=h.length;u<p;u++){let x=h[u],m=a[u],g,v=l[u];if(m.mode===Mi.TRIANGLES||m.mode===Mi.TRIANGLE_STRIP||m.mode===Mi.TRIANGLE_FAN||m.mode===void 0){let M=r.isSkinnedMesh===!0,_=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=M&&_?new gr(x,v):new rt(x,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Mi.LINES)g=new ro(x,v);else if(m.mode===Mi.LINE_STRIP)g=new xr(x,v);else if(m.mode===Mi.LINE_LOOP)g=new ao(x,v);else if(m.mode===Mi.POINTS)g=new ms(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&oy(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),es(g,r),m.extensions&&Nr(i,g,m),t.assignFinalMaterial(g),d.push(g)}for(let u=0,p=d.length;u<p;u++)t.associations.set(d[u],{meshes:e,primitives:u});if(d.length===1)return r.extensions&&Nr(i,d[0],r),d[0];let f=new Vt;r.extensions&&Nr(i,f,r),t.associations.set(f,{meshes:e});for(let u=0,p=d.length;u<p;u++)f.add(d[u]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new gn(zl.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Mr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),es(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let d=a[l];if(d){o.push(d);let f=new qe;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new br(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){let u=i.channels[d],p=i.samplers[u.sampler],x=u.target,m=x.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",v)),l.push(p),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let f=d[0],u=d[1],p=d[2],x=d[3],m=d[4],g=[];for(let M=0,_=f.length;M<_;M++){let w=f[M],y=u[M],b=p[M],S=x[M],D=m[M];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let I=n._createAnimationTracks(w,y,b,S,D);if(I)for(let F=0;F<I.length;F++)g.push(I[F])}let v=new yr(r,void 0,g);return es(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],d=l[1],f=l[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,hy)});for(let u=0,p=d.length;u<p;u++)h.add(d[u]);if(h.userData.pivot!==void 0&&d.length>0){let u=h.userData.pivot,p=d[0];h.pivot=new z().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new da:l.length>1?h=new Vt:l.length===1?h=l[0]:h=new Wt,h!==l[0])for(let d=0,f=l.length;d<f;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),es(h,r),r.extensions&&Nr(n,h,r),r.matrix!==void 0){let d=new qe;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Vt;n.name&&(r.name=i.createUniqueName(n.name)),es(r,n),n.extensions&&Nr(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++){let f=c[h];f.parent!==null?r.add(Dr(f)):r.add(f)}let l=h=>{let d=new Map;for(let[f,u]of i.associations)(f instanceof Vn||f instanceof xn)&&d.set(f,u);return h.traverse(f=>{let u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}Xs[r.path]===Xs.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Xs[r.path]){case Xs.weights:h=_s;break;case Xs.rotation:h=vs;break;case Xs.translation:case Xs.scale:h=Gs;break;default:n.itemSize===1?h=_s:h=Gs;break}let d=i.interpolation!==void 0?sy[i.interpolation]:dr,f=this._getArrayFromAccessor(n);for(let u=0,p=c.length;u<p;u++){let x=new h(c[u]+"."+Xs[r.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Mf(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof vs?vf:Ql;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function uy(s,e,t){let n=e.attributes,i=new In;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new z(c[0],c[1],c[2]),new z(l[0],l[1],l[2])),o.normalized){let h=Mf(Ca[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new z,c=new z;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let f=t.json.accessors[d.POSITION],u=f.min,p=f.max;if(u!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),f.normalized){let x=Mf(Ca[f.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new _n;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function um(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=yf[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return ht.workingColorSpace!==jn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),es(s,e),uy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ay(s,e.targets,t):s})}var Pa=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(g){r=g.instance,r.exports.__wasm_call_ctors()});function o(g){for(var v=new Uint8Array(g.length),M=0;M<g.length;++M){var _=g.charCodeAt(M);v[M]=_>96?_-97:_>64?_-39:_+4}for(var w=0,M=0;M<g.length;++M)v[w++]=v[M]<60?n[v[M]]:(v[M]-60)*64+v[++M];return v.buffer.slice(0,w)}function c(g,v,M,_,w,y,b){var S=g.exports.sbrk,D=_+3&-4,I=S(D*w),F=S(y.length),U=new Uint8Array(g.exports.memory.buffer);U.set(y,F);var k=v(I,_,w,F,y.length);if(k==0&&b&&b(I,D,w),M.set(U.subarray(I,I+_*w)),S(I-S(0)),k!=0)throw new Error("Malformed buffer data: "+k)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],f=0;function u(g){var v={object:new Worker(g),pending:0,requests:{}};return v.object.onmessage=function(M){var _=M.data;v.pending-=_.count,v.requests[_.id][_.action](_.value),delete v.requests[_.id]},v}function p(g){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),M=new Blob([v],{type:"text/javascript"}),_=URL.createObjectURL(M),w=d.length;w<g;++w)d[w]=u(_);for(var w=g;w<d.length;++w)d[w].object.postMessage({});d.length=g,URL.revokeObjectURL(_)}function x(g,v,M,_,w){for(var y=d[0],b=1;b<d.length;++b)d[b].pending<y.pending&&(y=d[b]);return new Promise(function(S,D){var I=new Uint8Array(M),F=++f;y.pending+=g,y.requests[F]={resolve:S,reject:D},y.object.postMessage({id:F,count:g,size:v,source:I,mode:_,filter:w},[I.buffer])})}function m(g){var v=g.data;self.ready.then(function(M){if(!v.id)return self.close();try{var _=new Uint8Array(v.count*v.size);c(M,M.exports[v.mode],_,v.count,v.size,v.source,M.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:_},[_.buffer])}catch(w){self.postMessage({id:v.id,count:v.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(g){p(g)},decodeVertexBuffer:function(g,v,M,_,w){c(r,r.exports.meshopt_decodeVertexBuffer,g,v,M,_,r.exports[l[w]])},decodeIndexBuffer:function(g,v,M,_){c(r,r.exports.meshopt_decodeIndexBuffer,g,v,M,_)},decodeIndexSequence:function(g,v,M,_){c(r,r.exports.meshopt_decodeIndexSequence,g,v,M,_)},decodeGltfBuffer:function(g,v,M,_,w,y){c(r,r.exports[h[w]],g,v,M,_,r.exports[l[y]])},decodeGltfBufferAsync:function(g,v,M,_,w){return d.length>0?x(g,v,M,h[_],l[w]):a.then(function(){var y=new Uint8Array(g*v);return c(r,r.exports[h[_]],y,g,v,M,r.exports[l[w]]),y})}}})();var fy=[nt.prototype.getX,nt.prototype.getY,nt.prototype.getZ,nt.prototype.getW],dm={idle:["Idle",1,!0],combat:["Idle_Combat",1,!0],run:["Running_A",1,!0],walk:["Walking_A",1,!0],attack:["1H_Melee_Attack_Chop",1.25,!1],slash:["1H_Melee_Attack_Slice_Horizontal",1.25,!1],spin:["2H_Melee_Attack_Spin",1.3,!1],shoot:["1H_Ranged_Shoot",1.2,!1],cast:["Spellcast_Shoot",1.2,!1],summon:["Spellcast_Summon",1,!1],block:["Block",1.2,!1],hit:["Hit_A",1.3,!1],die:["Death_A",1,!1],dead:["Death_A_Pose",1,!0],cheer:["Cheer",1,!0],dash:["Dodge_Forward",1.3,!1],jump:["Jump_Full_Short",1,!1],rise:["Lie_StandUp",1.4,!1],taunt:["Taunt",1,!1],spawn:["Spawn_Ground_Skeletons",1.2,!1],use:["Interact",1.2,!1]},dy={Knight:["1H_Sword","Badge_Shield","Knight_Helmet","Knight_Cape"],Barbarian:["1H_Axe","Barbarian_Round_Shield","Barbarian_Hat","Barbarian_Cape"],Mage:["2H_Staff","Mage_Hat","Mage_Cape"],Rogue:["1H_Crossbow","Knife_Offhand","Rogue_Cape"],Rogue_Hooded:["Knife","Knife_Offhand","Rogue_Cape"],Skeleton_Minion:[],Skeleton_Warrior:["Skeleton_Warrior_Helmet"],Skeleton_Rogue:["Skeleton_Rogue_Hood","Skeleton_Rogue_Cape"],Skeleton_Mage:["Skeleton_Mage_Hat"]},py=new js().setMeshoptDecoder(Pa),pm=s=>new Promise((e,t)=>py.load(s,e,void 0,t));function my(s,e){if(s&&/glow/i.test(s.name||""))return new tn({color:8057087,fog:!0});let t=e||s.map;return t&&(t.colorSpace=Ht,t.anisotropy=2),new Pi({map:t||null,color:16777215})}function mm(s,e,t=dy[e],n=!0){let i=s.scene;i.updateMatrixWorld(!0);let r=new Set(t||[]),a=[],o=[];if(i.traverse(y=>{y.isSkinnedMesh?a.push(y):y.isMesh&&o.push(y)}),!a.length)throw new Error("no skinned mesh in "+e);let c=a[0],l=c.skeleton,h=l.bones,d=new Map(h.map((y,b)=>[y,b])),f=c.bindMatrixInverse.clone(),u=[],p=y=>{let b=u.findIndex(S=>S.src===y);return b<0&&(u.push({src:y,mat:my(y)}),b=u.length-1),b},x=[],m=y=>{y=y.index?y.toNonIndexed():y.clone();for(let b of Object.keys(y.attributes))["position","normal","uv","skinIndex","skinWeight"].includes(b)||y.deleteAttribute(b);for(let b of Object.keys(y.attributes)){let S=y.attributes[b],D=S.itemSize,I=b==="skinIndex"?new Uint16Array(S.count*D):new Float32Array(S.count*D);for(let F=0;F<S.count;F++)for(let U=0;U<D;U++)I[F*D+U]=b==="skinIndex"?S.getComponent(F,U):fy[U].call(S,F);y.setAttribute(b,new nt(I,D))}return y.attributes.normal||y.computeVertexNormals(),y.attributes.uv||y.setAttribute("uv",new nt(new Float32Array(y.attributes.position.count*2),2)),y};for(let y of a){let b=m(y.geometry);if(y!==c){let S=y.skeleton.bones,D=S.findIndex(U=>d.has(U)),I=d.get(S[D]),F=new qe().copy(f).multiply(new qe().copy(l.boneInverses[I]).invert()).multiply(y.skeleton.boneInverses[D]).multiply(y.bindMatrix);b.applyMatrix4(F)}if(y.skeleton!==l){let S=y.skeleton.bones.map(I=>d.get(I)??0),D=b.attributes.skinIndex;for(let I=0;I<D.count;I++)for(let F=0;F<4;F++)D.setComponent(I,F,S[D.getComponent(I,F)])}x.push({g:b,m:p(y.material)})}for(let y of o){if(!r.has(y.name)&&!r.has(y.parent?.name))continue;let b=y.parent;for(;b&&!b.isBone;)b=b.parent;if(!b)continue;let S=d.get(b);if(S===void 0)continue;let D=new qe;{let K=y;for(D.copy(y.matrix),K=y.parent;K&&K!==b;)D.premultiply(K.matrix),K=K.parent}let I=new qe().copy(f).multiply(new qe().copy(l.boneInverses[S]).invert()).multiply(D),F=m(y.geometry);F.applyMatrix4(I);let U=F.attributes.position.count,k=new Uint16Array(U*4),N=new Float32Array(U*4);for(let K=0;K<U;K++)k[K*4]=S,N[K*4]=1;F.setAttribute("skinIndex",new nt(k,4)),F.setAttribute("skinWeight",new nt(N,4)),x.push({g:F,m:p(y.material)})}x.sort((y,b)=>y.m-b.m);let g=Zl(x.map(y=>y.g),u.length>1);if(u.length>1){let y=0;g.clearGroups();for(let b=0;b<u.length;b++){let S=0;for(let D of x)D.m===b&&(S+=D.g.attributes.position.count);S&&g.addGroup(y,S,b),y+=S}}for(let y of x)y.g.dispose();g.computeBoundingBox(),g.boundingSphere=new _n(new z(0,1.1,0),1.9);let v=new Vt;v.name=e;let M=(()=>{let y=h[0];for(;y.parent&&y.parent.isBone;)y=y.parent;return y})(),_=[];M.traverse(y=>{y.isMesh&&_.push(y)});for(let y of _)y.parent.remove(y),n&&y.geometry.dispose();v.add(M);let w=new gr(g,u.length>1?u.map(y=>y.mat):u[0].mat);return w.frustumCulled=!0,v.add(w),v.updateMatrixWorld(!0),w.bind(new br(h,l.boneInverses.map(y=>y.clone())),c.bindMatrix.clone()),{tpl:v,geo:g,mats:u.map(y=>y.mat),height:2.1}}async function gm({base:s="/models",names:e=[],loot:t=null,onProgress:n}={}){let i={templates:new Map,clips:new Map,variants:new Map,pools:new Map,disposables:[]},[r,...a]=await Promise.all([pm(`${s}/anims.glb`),...e.map(o=>pm(`${s}/chars/${o}.glb`))]);for(let o of r.animations)i.clips.set(o.name,o);return e.forEach((o,c)=>{if(t&&t[o]){let h=mm({scene:Dr(a[c].scene)},o+"@loot",t[o],!1);i.templates.set(o+"@loot",h),i.disposables.push(h.geo,...h.mats)}let l=mm(a[c],o);i.templates.set(o,l),i.disposables.push(l.geo,...l.mats);for(let h of l.mats)h.map&&i.disposables.push(h.map);n?.(o)}),i.material=(o,c=null,l=.32)=>{let h=i.templates.get(o);if(c===null)return h.mats.length>1?h.mats:h.mats[0];let d=o+":"+c+":"+l,f=i.variants.get(d);if(!f){if(typeof c=="string"&&c.startsWith("ghost")){let u=c==="ghost-boss"?13215999:12113151;f=h.mats.map(p=>{let x=new tn({map:p.map||null,color:u,transparent:!0,opacity:.55,depthWrite:!1,blending:Yn,fog:!0});return i.disposables.push(x),x})}else{let u=new De(c),p=new De(1,1,1).lerp(u,l);f=h.mats.map(x=>{if(x.isMeshBasicMaterial)return x;let m=x.clone();return m.color.copy(p),i.disposables.push(m),m})}if(f=f.length>1?f:f[0],i.variants.set(d,f),i.variants.size>160){let u=i.variants.keys().next().value;i.variants.delete(u)}}return f},i.actor=(o,c=null)=>{let l=i.pools.get(o)||[];i.pools.set(o,l);let h=l.pop();if(!h){let d=i.templates.get(o),f=Dr(d.tpl),u=null;f.traverse(x=>{x.isSkinnedMesh&&(u=x)});let p=new wr(f);h={name:o,obj:f,mesh:u,mixer:p,actions:new Map,state:"",base:"idle",until:0,tint:void 0,acc:0,flashT:-9,hand:null},f.traverse(x=>{x.isBone&&/handslot.?l/i.test(x.name)&&(h.hand=x)}),h.play=(x,m,{fade:g=.15,speed:v=1}={})=>gy(i,h,x,m,g,v)}return h.tint!==c&&(h.mesh.material=i.material(o,c),h.tint=c),h.obj.visible=!0,h.state="",h.base="idle",h.until=0,h.mixer.stopAllAction(),h.play("idle",0,{fade:0}),h},i.bake=(o,c,l=4,{from:h=0,to:d=1}={})=>{let f=`${o}|${c}|${l}|${h}|${d}`;if(i.baked=i.baked||new Map,i.baked.has(f))return i.baked.get(f);let u=i.actor(o),p=wf(i,u,c);u.mixer.stopAllAction(),p.reset(),p.setLoop(Pr,1/0),p.play();let x=p.getClip().duration,m=u.mesh.geometry,g=m.attributes.position.count,v=new z,M=[];for(let _=0;_<l;_++){u.mixer.setTime(x*(h+(d-h)*(_/l))),u.obj.updateMatrixWorld(!0),u.mesh.skeleton.update();let w=new Float32Array(g*3);for(let b=0;b<g;b++)u.mesh.getVertexPosition(b,v),v.applyMatrix4(u.mesh.matrix),w[b*3]=v.x,w[b*3+1]=v.y,w[b*3+2]=v.z;let y=new Ut;y.setAttribute("position",new nt(w,3)),y.setAttribute("uv",m.attributes.uv),m.index&&y.setIndex(m.index);for(let b of m.groups)y.addGroup(b.start,b.count,b.materialIndex);y.computeVertexNormals(),y.boundingSphere=new _n(new z(0,1,0),2.2),i.disposables.push(y),M.push(y)}return p.stop(),i.release(u),i.baked.set(f,M),M},i.release=o=>{o.obj.visible=!1,o.obj.parent?.remove(o.obj),o.mixer.stopAllAction(),(i.pools.get(o.name)||[]).push(o)},i.dispose=()=>{for(let o of i.disposables)try{o.dispose()}catch{}i.pools.clear(),i.variants.clear()},i}function wf(s,e,t){let n=e.actions.get(t);if(!n){let[i,r,a]=dm[t]||dm.idle,o=s.clips.get(i)||s.clips.get("Idle");n=e.mixer.clipAction(o),n.timeScaleBase=r,n.loopMode=a,a?n.setLoop(Pr,1/0):(n.setLoop(wa,1),n.clampWhenFinished=!0),e.actions.set(t,n)}return n}function gy(s,e,t,n,i,r){let a=wf(s,e,t);if(a.loopMode){if(e.base=t,n<e.until||e.state===t)return}else e.until=n+a.getClip().duration/(a.timeScaleBase*r)*.92;let o=e.actions.get(e.state);a.reset(),a.timeScale=a.timeScaleBase*r,a.enabled=!0,a.setEffectiveWeight(1),o&&o!==a&&i>0?a.crossFadeFrom(o,i,!1):o&&o!==a&&o.stop(),a.play(),e.state=t}function Tf(s,e,t,n){if(e.state!==e.base&&n>=e.until&&e.base){let i=wf(s,e,e.base),r=e.actions.get(e.state);i.reset(),i.timeScale=i.timeScaleBase,i.enabled=!0,i.setEffectiveWeight(1),r&&i.crossFadeFrom(r,.18,!1),i.play(),e.state=e.base}e.mixer.update(t)}var by=[nt.prototype.getX,nt.prototype.getY,nt.prototype.getZ,nt.prototype.getW],xy=new js().setMeshoptDecoder(Pa);async function bm(s){let e=await new Promise((f,u)=>xy.load(s,f,void 0,u)),t=e.scene;t.updateMatrixWorld(!0);let n=new Map,i=new Map,r=new Set,a=[],o=null;for(let f of t.children){let u=[],p=new qe().copy(f.parent.matrixWorld).invert();if(f.traverse(m=>{if(!m.isMesh)return;m.material.map&&(o||(o=m.material.map),i.set(f.name,m.material.map),r.add(m.material.map));let g=m.geometry.index?m.geometry.toNonIndexed():m.geometry.clone();for(let v of Object.keys(g.attributes))["position","normal","uv"].includes(v)||g.deleteAttribute(v);for(let v of["position","normal","uv"]){let M=g.attributes[v];if(!M||M.array instanceof Float32Array&&!M.normalized)continue;let _=new Float32Array(M.count*M.itemSize);for(let w=0;w<M.count;w++)for(let y=0;y<M.itemSize;y++)_[w*M.itemSize+y]=by[y].call(M,w);g.setAttribute(v,new nt(_,M.itemSize))}g.attributes.normal||g.computeVertexNormals(),g.attributes.uv||g.setAttribute("uv",new nt(new Float32Array(g.attributes.position.count*2),2)),g.applyMatrix4(new qe().multiplyMatrices(p,m.matrixWorld)),u.push(g)}),!u.length)continue;let x=u.length>1?Zl(u):u[0];u.length>1&&u.forEach(m=>m.dispose()),x.computeBoundingSphere(),n.set(f.name,x),a.push(x)}let c=new Map;for(let f of r){f.colorSpace=Ht,f.anisotropy=4,a.push(f);let u=new Pi({map:f});c.set(f,u),a.push(u)}e.scene.traverse(f=>{f.isMesh&&f.geometry.dispose()});let l=c.get(o)||new Pi;o||a.push(l);let h=f=>c.get(i.get(f))||l;return{geos:n,mat:l,matOf:h,has:f=>n.has(f),instanced(f,u,{material:p=h(f)}={}){let x=n.get(f);if(!x||!u.length)return null;let m=new vn(x,p,u.length),g=new Wt,v=0;return u.forEach((M,_)=>{g.position.set(M.x,M.y||0,M.z),g.rotation.set(M.rx||0,M.ry||0,M.rz||0),g.scale.set((M.s||1)*(M.sx||1),(M.s||1)*(M.sy||1),(M.s||1)*(M.sz||1)),g.updateMatrix(),m.setMatrixAt(_,g.matrix),v=Math.max(v,Math.hypot(M.x,M.z)+(M.s||1)*3)}),m.instanceMatrix.needsUpdate=!0,m.geometry.boundingSphere,m.boundingSphere=new _n(new z,v),m.frustumCulled=!1,m},dispose(){for(let f of a)try{f.dispose()}catch{}}}}var _y=new js().setMeshoptDecoder(Pa),vy={Dragon_Main:[3873308,1704706],Dragon_Secondary:[1839124,0],Dragon_Horn:[14273712,0],Demon_Main:[6032918,2228226],Black:[1379088,0],Ghost_Main:[2367024,787476],Ghost_Secondary:[11839118,1312260],Eye_White:"eye",Eye_Black:"pupil"},yy={idle:["Flying_Idle","Idle"],move:["Fast_Flying","Run","Walk"],attack:["Punch","Weapon","Headbutt"],bite:["Headbutt","Punch"],hit:["HitReact"],die:["Death"],roar:["Yes","Jump","Punch"],taunt:["No","Wave"],combat:["Flying_Idle","Idle"],run:["Fast_Flying","Run"],walk:["Fast_Flying","Walk"],cast:["Punch","Weapon","Headbutt"],slash:["Weapon","Punch","Headbutt"],spin:["Headbutt","Weapon","Punch"],summon:["Yes","Punch"],spawn:["Yes","Punch"]},eh=typeof location<"u"?new URLSearchParams(location.search):new Map,th={x:+(eh.get("ex")||.2),y:+(eh.get("ey")||.5),d:+(eh.get("ed")||.12),r:+(eh.get("er")||.09)},Af=new Set(["attack","bite","hit","die","roar","taunt","cast","slash","spin","summon","spawn"]);async function xm({base:s="/models/monsters",names:e=[],eye:t=16722452}={}){let n={templates:new Map,pools:new Map,disposables:[]},i=new Map,r=o=>{let c=o.name;if(i.has(c))return i.get(c);let l=vy[c],h;return l==="eye"?h=new tn({color:t,fog:!1,toneMapped:!1}):l==="pupil"?h=new tn({color:16765024,fog:!1,toneMapped:!1}):l?h=new Pi({color:l[0],emissive:l[1],vertexColors:!1}):h=new Pi({color:o.color&&o.color.getHex()||3355443}),i.set(c,h),n.disposables.push(h),h},a=await Promise.all(e.map(o=>new Promise((c,l)=>_y.load(`${s}/${o}.glb`,c,void 0,l))));return e.forEach((o,c)=>{let l=a[c];if(l.scene.traverse(u=>{u.isMesh&&(u.material=Array.isArray(u.material)?u.material.map(r):r(u.material),u.frustumCulled=!1,n.disposables.push(u.geometry))}),o==="Demon2"){l.scene.updateMatrixWorld(!0);let u=new In().setFromObject(l.scene),p=u.max.y-u.min.y,x=u.max.x-u.min.x;l.scene.traverse(m=>{if(!m.isMesh||m.material.isMeshBasicMaterial)return;let g=new In().setFromObject(m);(g.min.y-u.min.y)/p>.6&&(g.max.x-g.min.x)/x<.45&&(m.visible=!1)})}if(o==="Ghost_Skull"){l.scene.updateMatrixWorld(!0);let u=null,p=null;if(l.scene.traverse(x=>{x.isBone&&x.name==="Head"&&(u=x),x.isMesh&&x.material===i.get("Ghost_Secondary")&&(p=x)}),u&&p){let x=new In().setFromObject(p),m=x.max.x-x.min.x,g=x.max.y-x.min.y,v=(x.min.x+x.max.x)/2,M=new Kn(1,10,8);n.disposables.push(M);let _=i.get("Eye_White")||r({name:"Eye_White"});for(let w of[-1,1]){let y=new rt(M,_);y.name="burning_eye",y.frustumCulled=!1;let b=new z(v+w*m*th.x,x.min.y+g*th.y,x.max.z-m*th.d);u.add(y),y.position.copy(u.worldToLocal(b.clone()));let S=new z;u.getWorldScale(S),y.scale.setScalar(m*th.r/S.x)}}}l.scene.updateMatrixWorld(!0);let h=new In().setFromObject(l.scene),d=h.getSize(new z),f=new Map(l.animations.map(u=>[u.name,u]));n.templates.set(o,{scene:l.scene,clips:f,height:d.y||1,minY:h.min.y})}),n.actor=o=>{let c=n.pools.get(o)||[];n.pools.set(o,c);let l=c.pop();if(!l){let h=n.templates.get(o),d=Dr(h.scene),f=new wr(d);l={name:o,obj:d,mixer:f,state:"",until:0,cur:null,unit:1/h.height,minY:h.minY},l.play=(u,p=0,{fade:x=.15,speed:m=1}={})=>{if(u==="dead")return;let g=yy[u]||[u],v=null;for(let _ of g)if(h.clips.has(_)){v=h.clips.get(_);break}if(!v||l.state===u&&!Af.has(u))return;let M=f.clipAction(v);M.reset(),M.setLoop(Af.has(u)?wa:Pr,1/0),M.clampWhenFinished=u==="die",M.timeScale=m,l.cur&&l.cur!==M&&l.cur.crossFadeTo(M,x,!1),M.play(),l.cur=M,l.state=u,l.until=Af.has(u)?p+v.duration/m*.92:0},l.tick=(u,p)=>{l.until&&p>=l.until&&l.state!=="die"&&(l.until=0,l.play(l.base||"idle",p,{fade:.2})),f.update(u)}}return l.obj.visible=!0,l.state="",l.base="idle",l.until=0,l.mixer.stopAllAction(),l.cur=null,l.play("idle",0,{fade:0}),l},n.release=o=>{o.obj.visible=!1,o.obj.parent?.remove(o.obj),o.mixer.stopAllAction(),o.cur=null,(n.pools.get(o.name)||[]).push(o)},n.dispose=()=>{for(let o of n.disposables)try{o.dispose()}catch{}},n}var My=["Mage","Barbarian","Rogue","Knight"],Sy=["cast","slash","shoot","summon"],_m=.74,Ni=Math.PI*2,vm=[16767416,15843471,14262374,11037509,8014380,16769999],nh=Zi.map(s=>s.color),Ia={m:[12611839,16742970],a:[8384767,16777215],h:[8257448,16777215],v:[16765773,16739029],g:[16769152,16777215],w:[16777215,16747114]},Xt=yi,Ks=6.2,La=7.5;function ym(s,e={}){let t=new Wl({canvas:s,antialias:!!e.aa,alpha:!1,depth:!0,stencil:!1,powerPreference:"default",preserveDrawingBuffer:!!e.preserve,failIfMajorPerformanceCaveat:!1});if(!t.getContext())throw new Error("no webgl");t.outputColorSpace=Ht,t.toneMapping=Eo,t.toneMappingExposure=1.15,t.shadowMap.enabled=!1;let n=new no,i=new De(1444882);n.background=i.clone(),n.fog=new to(1444882,30,90);let r=new gn(50,9/16,.5,260),a=[],o=E=>(a.push(E),E),c=new yo(9412863,2757670,1.05);n.add(c);let l=new wo(5917266,.35);n.add(l);let h=new Sr(12109055,.9);h.position.set(-20,30,10),n.add(h);let d=new Vs(13643840,60,60,1.4);d.position.set(0,6,nn+4),n.add(d);let f=null,u=null,p=null,x=!1,m=null,g=Promise.all([bm(e.envUrl||"/models/env-siege.glb"),gm({names:["Mage","Barbarian","Rogue","Knight","Rogue_Hooded","Skeleton_Minion","Skeleton_Warrior","Skeleton_Mage"]}),xm({names:["Dragon_Evolved","Demon","Demon2","Ghost_Skull"]})]).then(([E,P,R])=>{if(x){E.dispose(),P.dispose(),R.dispose();return}u=E,f=P,p=R,Oe()}).catch(E=>{throw m=E,E});g.catch(()=>{});let v=new Vs(16752720,14,22,1.6);v.position.set(0,5,2),n.add(v);let M=o(new Bs(new Uint8Array([70,160,255]),3,1,Sa));M.minFilter=M.magFilter=$t,M.needsUpdate=!0;let _=(E,P={})=>o(new bo({color:E,gradientMap:M,...P})),w=(E,P={})=>o(new tn({color:E,...P})),y=11,b=()=>(y=y*16807%2147483647,(y-1)/2147483646);function S(E,P,R,{repeat:X=null}={}){let fe=document.createElement("canvas");fe.width=E,fe.height=P,R(fe.getContext("2d"),E,P);let ce=o(new co(fe));return ce.colorSpace=Ht,ce.anisotropy=2,X&&(ce.wrapS=ce.wrapT=1e3,ce.repeat.set(X[0],X[1])),ce}let D=S(256,256,(E,P,R)=>{E.fillStyle="#4c4658",E.fillRect(0,0,P,R);for(let X=0;X<6;X++)for(let fe=-1;fe<4;fe++){let ce=R/6,ue=P/3,ne=(fe+X%2*.5)*ue,Y=X*ce;E.fillStyle=`hsl(${255+b()*25}, ${7+b()*8}%, ${30+b()*16}%)`,E.fillRect(ne+3,Y+3,ue-6,ce-6),E.fillStyle="rgba(255,255,255,0.06)",E.fillRect(ne+3,Y+3,ue-6,5)}E.strokeStyle="rgba(10,0,20,0.5)",E.lineWidth=2;for(let X=0;X<5;X++){E.beginPath();let fe=b()*P,ce=b()*R;E.moveTo(fe,ce);for(let ue=0;ue<4;ue++)fe+=(b()-.5)*50,ce+=b()*40,E.lineTo(fe,ce);E.stroke()}},{repeat:[6,1]}),I=S(256,256,(E,P,R)=>{E.fillStyle="#2a2232",E.fillRect(0,0,P,R);for(let X=0;X<900;X++)E.fillStyle=`rgba(${b()<.5?"255,255,255":"0,0,0"},${.03+b()*.06})`,E.fillRect(b()*P,b()*R,2+b()*6,2+b()*6);E.strokeStyle="rgba(180,60,255,0.28)",E.lineWidth=2.2;for(let X=0;X<7;X++){E.beginPath();let fe=b()*P,ce=b()*R;E.moveTo(fe,ce);for(let ue=0;ue<6;ue++)fe+=(b()-.5)*60,ce+=(b()-.5)*60,E.lineTo(fe,ce);E.stroke()}},{repeat:[7,9]}),F=S(128,256,(E,P,R)=>{E.fillStyle="#3a3448",E.fillRect(0,0,P,R);for(let X=10;X<R-10;X+=26)for(let fe=10;fe<P-10;fe+=28){let ce=b();E.fillStyle=ce<.12?"#ffb04a":ce<.2?"#b060ff":"#14101c",E.fillRect(fe,X,14,16)}E.fillStyle="rgba(0,0,0,0.25)",E.fillRect(0,0,P,6)}),U=S(64,64,(E,P)=>{let R=E.createRadialGradient(P/2,P/2,0,P/2,P/2,P/2);R.addColorStop(0,"rgba(0,0,0,0.55)"),R.addColorStop(1,"rgba(0,0,0,0)"),E.fillStyle=R,E.fillRect(0,0,P,P)}),k={box:o(new bs(1,1,1)),sph:o(new Kn(1,14,10)),sphLo:o(new Kn(1,8,6)),cone:o(new Ci(1,1,7)),cyl:o(new bi(1,1,1,10)),plane:o(new ci(1,1)),oct:o(new mo(1,0)),ico:o(new po(1,0))},N=new rt(o(new Kn(200,24,14)),o(new Un({side:On,depthWrite:!1,fog:!1,uniforms:{end:{value:0},dawn:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform float end; uniform float dawn;
      void main(){ float h = clamp(vP.y, -0.2, 1.0); float rift = pow(max(0.0, dot(normalize(vec3(vP.x, vP.y*1.6, vP.z)), vec3(0.0, 0.12, -1.0))), 6.0);
        vec3 top = vec3(0.02, 0.02, 0.05), hor = vec3(0.17, 0.06, 0.06);
        vec3 c = mix(hor, top, smoothstep(-0.05, 0.55, h)) + vec3(0.5, 0.08, 0.1) * rift * 0.4;
        vec3 dc = mix(vec3(1.0, 0.62, 0.38), vec3(0.35, 0.55, 0.95), smoothstep(-0.05, 0.6, h));
        c = mix(c, dc, dawn); c = mix(c, vec3(0.35, 0.02, 0.04) * (0.6 + rift), end);
        gl_FragColor = vec4(c, 1.0); }`})));N.renderOrder=-10,n.add(N);let K=new rt(k.plane,w(16051455,{fog:!1,transparent:!0,map:S(128,128,(E,P)=>{let R=E.createRadialGradient(P/2,P/2,P*.2,P/2,P/2,P/2);R.addColorStop(0,"#fff8f0"),R.addColorStop(.42,"#efe2ff"),R.addColorStop(.47,"rgba(200,170,255,0.5)"),R.addColorStop(1,"rgba(120,80,200,0)"),E.fillStyle=R,E.fillRect(0,0,P,P),E.fillStyle="rgba(160,140,200,0.35)";for(let[X,fe,ce]of[[52,50,9],[74,70,6],[60,78,5]])E.beginPath(),E.arc(X,fe,ce,0,Ni),E.fill()})}));K.position.set(-34,46,-120),K.scale.set(30,30,1),K.lookAt(0,8,20),n.add(K);let ie=o(new Ut);{let P=new Float32Array(780);for(let R=0;R<260;R++){let X=b()*Ni,fe=.12+b()*1.3;P.set([Math.cos(X)*Math.cos(fe)*180,Math.sin(fe)*180,Math.sin(X)*Math.cos(fe)*180-20],R*3)}ie.setAttribute("position",new nt(P,3))}let G=new ms(ie,o(new Un({transparent:!0,depthWrite:!1,fog:!1,uniforms:{time:{value:0},op:{value:1}},vertexShader:"uniform float time; varying float vA; void main(){ vA = 0.45 + 0.55 * sin(time * 2.0 + position.x * 0.7 + position.z); gl_PointSize = 2.2; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform float op; varying float vA; void main(){ gl_FragColor = vec4(vec3(1.0, 0.95, 1.0) * vA * op, 1.0); }"})));G.renderOrder=-9,n.add(G);let le=new rt(o(new ci(140,160).rotateX(-Math.PI/2)),_(9075864,{map:I}));le.position.set(0,0,-30),n.add(le);let J=new rt(o(new ci(9,44).rotateX(-Math.PI/2)),_(5917798,{transparent:!0,opacity:.5}));J.position.set(0,.02,-18),n.add(J);let ee=46,he=new vn(k.box,_(16777215,{map:F}),ee);he.frustumCulled=!1;let ke=new vn(k.cone,_(2761268),ee);ke.frustumCulled=!1;let Je=new vn(k.ico,_(5918820),70);Je.frustumCulled=!1;let ae=new qe,pe=new z,Re=new Pn,He=new gi,ye=new z,Ze=new De,At=(E,P,R,X,fe,ce,ue,ne,Y=0,Ge=0,St=0,Zt=null)=>{E.setMatrixAt(P,ae.compose(pe.set(R,X,fe),Re.setFromEuler(He.set(Y,Ge,St)),ye.set(ce,ue,ne))),Zt!==null&&E.setColorAt(P,Ze.setHex(Zt))};{let E=0,P=0;for(let R of[-1,1])for(let X=0;X<ee/2;X++){let fe=X%3,ce=-48+Math.floor(X/3)*6.6+b()*2,ue=R*(10.5+fe*5.5+b()*2.5),ne=3+b()*2.6,Y=3+b()*2.6,Ge=3.5+b()*(fe===0?7:13),St=b()<.35,Zt=St?(b()-.5)*.18:0;if(At(he,E,ue,Ge/2,ce,ne,Ge,Y,Zt*.5,b()*.3,Zt,b()<.5?10128560:8287380),!St&&b()<.45?At(ke,E,ue,Ge+1,ce,ne*.75,2,Y*.75,0,Math.PI/4,0):At(ke,E,0,-50,0,.01,.01,.01),E++,P<70&&St)for(let cn=0;cn<3&&P<70;cn++)At(Je,P++,ue-R*(ne*.6+b()*2),.3,ce+(b()-.5)*4,.5+b()*.9,.4+b()*.7,.5+b()*.9,b(),b()*3,b())}for(;P<70;){let R=b()<.5?-1:1;At(Je,P++,R*(6.5+b()*3),.25,-40+b()*38,.3+b()*.7,.3+b()*.5,.3+b()*.7,b(),b()*3,b())}he.count=E,ke.count=E}n.add(he,ke,Je);let We=new Vt;n.add(We);let xt=_(13155544,{map:D}),_t=new rt(k.box,xt);_t.scale.set(22,Bn,Ks-Xt),_t.position.set(0,Bn/2,(Xt+Ks)/2),We.add(_t);let st=new rt(k.box,_(6971e3));st.scale.set(22,.12,Ks-Xt-.3),st.position.set(0,Bn+.02,(Xt+Ks)/2+.1),We.add(st);let rn=new vn(k.box,_(8682134,{map:D}),24);rn.frustumCulled=!1;for(let E=0;E<24;E++)At(rn,E,-10.6+E*.92,Bn+.42,Xt+.22,.56,.84,.44);We.add(rn);let jt=new rt(k.box,_(3812424));jt.scale.set(3.2,2.1,.3),jt.position.set(0,1.05,Xt-.05),We.add(jt);let fn=new rt(k.plane,w(11555071,{transparent:!0,opacity:.7,blending:Yn,depthWrite:!1,map:S(128,96,(E,P,R)=>{E.strokeStyle="#fff",E.lineWidth=5,E.beginPath(),E.arc(P/2,R*.62,R*.32,0,Ni),E.stroke(),E.beginPath();for(let X=0;X<6;X++){let fe=X/6*Ni;E.moveTo(P/2,R*.62),E.lineTo(P/2+Math.cos(fe)*R*.3,R*.62+Math.sin(fe)*R*.3)}E.stroke()})}));fn.scale.set(2.8,2,1),fn.position.set(0,1.05,Xt-.22),We.add(fn);let Ot=[];for(let E of[-1,1]){let P=new Vt;P.position.set(E*11.6,0,(Xt+Ks)/2);let R=new rt(k.cyl,xt);R.scale.set(1.9,5.6,1.9),R.position.y=2.8,P.add(R);let X=new rt(k.cyl,_(11839688));X.scale.set(2.2,.6,2.2),X.position.y=5.9,P.add(X);let fe=new rt(k.cone,_(5909098));fe.scale.set(2.5,3.2,2.5),fe.position.y=7.8,P.add(fe);let ce=new rt(k.plane,w(16761402,{side:un}));ce.scale.set(1.3,.8,1),ce.position.set(.7,10.1,0),P.add(ce);let ue=new rt(k.cyl,_(3812424));ue.scale.set(.06,1.8,.06),ue.position.y=10,P.add(ue),We.add(P),Ot.push({t:P,flag:ce})}let An=new Vt;An.position.set(0,0,30);{let E=new rt(k.box,xt);E.scale.set(9,7,5),E.position.y=3.5,An.add(E);let P=new rt(k.cone,_(5909098));P.scale.set(5,4,5),P.rotation.y=Math.PI/4,P.position.y=9,An.add(P);for(let R of[-1,1]){let X=new rt(k.cyl,xt);X.scale.set(1.4,10,1.4),X.position.set(R*4.6,5,0),An.add(X);let fe=new rt(k.cone,_(5909098));fe.scale.set(1.8,3,1.8),fe.position.set(R*4.6,11.5,0),An.add(fe)}}n.add(An);let Jt=[-9.6,-6.2,-2.4,2.4,6.2,9.6],Ln=new vn(k.cyl,_(3810328),Jt.length);Ln.frustumCulled=!1,Jt.forEach((E,P)=>At(Ln,P,E,Bn+.6,Xt+.15,.07,1.2,.07)),n.add(Ln);let Dn=o(new Un({transparent:!0,depthWrite:!1,blending:Yn,side:un,fog:!1,uniforms:{time:{value:0},power:{value:1},hue:{value:0}},vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vU; uniform float time; uniform float power; uniform float hue;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
      void main(){ vec2 p = (vU - 0.5) * vec2(1.0, 1.25); float r = length(p) * 2.0; float a = atan(p.y, p.x);
        float sw = n(vec2(a * 2.0 + r * 4.0 - time * 1.4, r * 3.0 - time * 0.6)) * 0.7 + n(vec2(a * 5.0 - time * 2.0, r * 8.0)) * 0.3;
        float edge = smoothstep(1.0, 0.82, r) * smoothstep(0.0, 0.5, r + sw * 0.4);
        float core = smoothstep(0.55, 0.0, r);
        vec3 purple = vec3(0.55, 0.12, 0.42), red = vec3(1.0, 0.18, 0.12), white = vec3(1.0, 0.85, 1.0);
        vec3 c = mix(purple, red, clamp(sw * 1.3 - 0.2 + hue, 0.0, 1.0)) * (0.55 + sw * 0.9) * edge;
        c += white * pow(smoothstep(0.96, 0.84, r) * smoothstep(0.7, 0.86, r), 2.0) * 0.6;
        c = mix(c, vec3(0.05, 0.0, 0.08), core * 0.75) + purple * core * sw * 0.35;
        gl_FragColor = vec4(c * power, 1.0); }`})),Nn=new rt(o(new ci(13,16)),Dn);Nn.position.set(0,La,nn-1),n.add(Nn);let H=new rt(o(new _r(1,.05,6,48)),w(13664511,{transparent:!0,opacity:.8,blending:Yn,depthWrite:!1,fog:!1}));H.scale.set(6.2,7.8,6),H.position.copy(Nn.position),H.position.z+=.2,n.add(H);let Fn=new rt(o(new uo(1,40).rotateX(-Math.PI/2)),w(10105087,{transparent:!0,opacity:.5,blending:Yn,depthWrite:!1}));Fn.scale.set(9,1,4),Fn.position.set(0,.04,nn+1.5),n.add(Fn);let Pt=16,Et=new vn(k.oct,_(3807824,{emissive:8003776}),Pt);Et.frustumCulled=!1,n.add(Et);let Ae=o(new Un({transparent:!0,depthWrite:!1,blending:Yn,side:un,uniforms:{time:{value:0},a:{value:0},hit:{value:0},col:{value:new De(5949695)}},vertexShader:"varying vec3 vN; varying vec3 vV; varying vec3 vP; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); vP = position; gl_Position = projectionMatrix * mv; }",fragmentShader:`varying vec3 vN; varying vec3 vV; varying vec3 vP; uniform float time; uniform float a; uniform float hit; uniform vec3 col;
      void main(){ float f = 1.0 - abs(dot(vN, vV)); vec2 g = abs(fract(vec2(atan(vP.x, vP.z) * 5.0, vP.y * 6.0)) - 0.5);
        float hex = smoothstep(0.42, 0.5, max(g.x, g.y)); float band = 0.5 + 0.5 * sin(vP.y * 18.0 - time * 3.0);
        float k = pow(f, 2.4) * 0.6 + hex * 0.2 + band * 0.05; gl_FragColor = vec4(mix(col, vec3(1.0), hit * 0.6) * k * a, 1.0); }`})),zt=new rt(o(new bi(1,1,1,36,1,!0,Math.PI-.95,1.9).translate(0,.5,0)),Ae);zt.scale.set(14,7,14),zt.position.set(0,0,Xt+13.2),zt.renderOrder=8,n.add(zt);let Xe=e.maxChars||70,ze=(E,P,R=1)=>{let X=new vn(E,P,Xe*R);X.frustumCulled=!1,X.count=0;let fe=new De(1,1,1);for(let ce=0;ce<Xe*R;ce++)X.setColorAt(ce,fe);return n.add(X),X},C={body:ze(o(new Vi(.27,.24,3,10)),_(16777215)),head:ze(o(new Kn(.36,14,10)),_(16777215)),hair:ze(o(new Kn(.385,14,8,0,Ni,0,Math.PI*.52)),_(16777215)),eyes:ze(o(new Kn(.058,8,6)),w(1774640),2),hands:ze(o(new Kn(.13,10,8)),_(16777215),2),feet:ze(o(new Kn(.12,8,6)),_(2761272),2),staff:ze(o(new bi(.04,.05,1.3,6)),_(6965802)),orb:ze(o(new Kn(.15,10,8)),_(16777215,{emissive:6308e3})),hat:ze(o(new Ci(.4,.62,8)),_(16777215)),sword:ze(o(new bs(.09,.85,.05)),_(15265528,{emissive:3160136})),shield:ze(o(new bi(.28,.28,.07,10).rotateX(Math.PI/2)),_(16777215)),bow:ze(o(new _r(.4,.03,5,14,Math.PI)),_(9067050)),halo:ze(o(new _r(.22,.035,5,16).rotateX(Math.PI/2)),w(16773792)),shadow:ze(o(new ci(1,1).rotateX(-Math.PI/2)),o(new tn({map:U,transparent:!0,depthWrite:!1})))};C.shadow.renderOrder=2;let T=130,W=(E,P,R=1)=>{let X=new vn(E,P,T*R);X.frustumCulled=!1,X.count=0;let fe=new De(1,1,1);for(let ce=0;ce<T*R;ce++)X.setColorAt(ce,fe);return n.add(X),X},be=w(16769354),$={impBody:W(k.sph,_(16777215)),impHorn:W(k.cone,_(1706512),2),impEye:W(k.sphLo,be,2),impWing:W(o(new Ci(.5,.9,3)),_(4198428),2),bruBody:W(k.sph,_(16777215)),bruArm:W(o(new Vi(.28,.9,3,8)),_(16777215),2),bruHorn:W(k.cone,_(15260872),2),bruEye:W(k.sphLo,w(16730666),2),wrBody:W(k.cone,_(16777215,{emissive:3149898,transparent:!0,opacity:.88})),wrHood:W(k.sph,_(2627640)),wrEye:W(k.sphLo,w(9105663),2),eShadow:W(o(new ci(1,1).rotateX(-Math.PI/2)),o(new tn({map:U,transparent:!0,depthWrite:!1})))};$.eShadow.renderOrder=2;let Se=[13642298,6965898,10115839];function oe(E,P,R,X,fe,ce,ue,ne,Y){let Ge=new rt(E,P);return Ge.position.set(R,X,fe),Ge.scale.set(ce,ue,ne),Y.add(Ge),Ge}let te={};function re(E){let P=new Vt,R={},X=_(E?3811904:15262958,{emissive:E?3145754:0}),fe=_(E?12099784:14731448),ce=_(2103336),ue=w(12607743),ne=w(16722506);oe(k.cyl,ce,-.35,.8,0,.22,1.6,.22,P),oe(k.cyl,ce,.35,.8,0,.22,1.6,.22,P),R.coat=oe(o(new bi(.62,1.05,2.2,9)),X,0,2.5,0,1,1,1,P),oe(k.sph,X,0,3.55,0,.75,.45,.6,P),R.head=oe(k.sph,fe,0,4.25,.05,.5,.56,.5,P);let Y=_(E?15790335:12235972);oe(k.sph,Y,0,4.55,-.05,.56,.4,.52,P);for(let Ge=0;Ge<5;Ge++)oe(k.cone,Y,-.4+Ge*.2,4.85,-.1,.13,.4,.13,P).rotation.z=(Ge-2)*.35;for(let Ge of[-1,1])oe(k.sph,E?ne:ue,Ge*.19,4.3,.46,.13,.11,.06,P);if(oe(k.box,ce,0,4.3,.47,.6,.06,.04,P),R.armL=new Vt,R.armL.position.set(-.85,3.4,0),P.add(R.armL),oe(k.cyl,X,0,-.6,0,.17,1.2,.17,R.armL),R.armR=new Vt,R.armR.position.set(.85,3.4,0),P.add(R.armR),oe(k.cyl,X,0,-.6,0,.17,1.2,.17,R.armR),R.book=oe(k.box,_(3805232,{emissive:5902416}),-1.3,2.6,.6,.55,.7,.18,P),R.stone=oe(k.oct,_(2099216,{emissive:12587050}),1.3,3,.6,.32,.45,.32,P),E){R.core=oe(k.oct,w(16722506),0,3,.62,.28,.36,.1,P),R.wings=[];for(let Ge of[-1,1]){let St=oe(o(new Ci(1.4,3.6,3)),_(1706016,{emissive:4852282,transparent:!0,opacity:.85}),Ge*1.5,3.8,-.4,1,1,.12,P);St.rotation.z=Ge*1,R.wings.push(St)}}return P.scale.setScalar(E?1.75:1.5),{g:P,P:R,top:E?9.4:7.8,aura:E?[1,.2,.35]:[.7,.3,1]}}function Te(){let E=new Vt,P={},R=_(1708068,{emissive:1179658}),X=_(14198832,{emissive:4204544}),fe=_(16052472),ce=w(16719920);P.robe=oe(o(new Ci(1.5,4.4,10)),R,0,2.2,0,1,1,1,E),oe(k.sph,R,0,4.3,0,1,.55,.75,E);for(let ue of[-1,1])oe(k.cone,X,ue*.95,4.75,0,.22,.8,.22,E).rotation.z=-ue*.5;P.cape=oe(o(new ci(2.6,4.2)),_(5900312,{side:un}),0,2.5,-.7,1,1,1,E),P.cape.rotation.x=.12,P.head=oe(k.sph,R,0,5.1,0,.62,.7,.62,E),oe(k.sph,fe,0,5.05,.33,.42,.5,.32,E);for(let ue of[-1,1])oe(k.sph,ce,ue*.16,5.12,.62,.09,.05,.04,E);for(let ue=0;ue<5;ue++){let ne=oe(k.cone,X,-.5+ue*.25,5.75+(ue===2?.2:0),0,.09,ue===2?.8:.55,.09,E);ne.rotation.z=(2-ue)*.22}P.handL=oe(k.sph,_(2759220),-1.45,3.2,.4,.3,.3,.3,E),P.handR=oe(k.sph,_(2759220),1.45,3.2,.4,.3,.3,.3,E),P.orb=oe(k.sph,w(16722512,{transparent:!0,opacity:.9}),1.45,3.9,.5,.42,.42,.42,E),P.souls=[];for(let ue=0;ue<6;ue++)P.souls.push(oe(k.sphLo,w(10152191,{transparent:!0,opacity:.85}),0,3,0,.16,.22,.16,E));return E.scale.setScalar(1.85),{g:E,P,top:12,aura:[1,.1,.25]}}te.scientist=re(!1),te.scientist2=re(!0),te.mastermind=Te();for(let E of Object.values(te))E.g.visible=!1,n.add(E.g),E.mats=[],E.g.traverse(P=>{P.material&&P.material.isMeshToonMaterial&&E.mats.push([P.material,P.material.emissive.clone()])});let L={id:"",x:0,z:-30,hitT:-9,atkT:-9,born:0,dieT:-9},se=[];for(let E=0;E<6;E++){let P=new Vt,R=_(16765530,{emissive:4861952}),X=_(15265528,{emissive:2107448});oe(k.cyl,X,-.25,.45,0,.16,.9,.16,P),oe(k.cyl,X,.25,.45,0,.16,.9,.16,P),oe(o(new Vi(.5,.6,3,10)),R,0,1.45,0,1,1,1,P),oe(k.sph,X,0,2.35,0,.42,.45,.42,P),oe(k.box,w(8384767),0,2.36,.38,.4,.07,.05,P),oe(k.cone,w(16730714),0,2.85,-.05,.1,.5,.25,P),oe(o(new bi(.55,.55,.1,6).rotateX(Math.PI/2)),R,-.65,1.4,.45,1,1.2,1,P);let fe=new Vt;fe.position.set(.62,1.8,.1),P.add(fe),oe(k.box,_(16054527,{emissive:4214896}),0,.7,.2,.12,1.6,.06,fe),P.scale.setScalar(1.25),P.visible=!1,n.add(P),se.push({g:P,arm:fe,id:0,x:0,z:0,born:0,seen:0,atk:-9})}let Q=(()=>{let E=new Vt,P=_(14172202,{emissive:4198400}),R=_(16762976,{emissive:4202496}),X=_(16773328);oe(o(new Vi(.9,2.4,4,10).rotateX(Math.PI/2)),P,0,0,0,1,1,1,E),oe(o(new Vi(.7,2,4,10).rotateX(Math.PI/2)),R,0,-.25,.1,1,1,1,E);let fe=oe(o(new Vi(.42,1.4,3,8)),P,0,.9,1.9,1,1,1,E);fe.rotation.x=.9;let ce=new Vt;ce.position.set(0,1.6,2.9),E.add(ce),oe(k.box,P,0,0,.3,.8,.6,1.2,ce);let ue=oe(k.box,R,0,-.35,.35,.7,.2,1,ce);for(let Y of[-1,1])oe(k.cone,X,Y*.3,.5,-.1,.12,.7,.12,ce).rotation.x=-.7,oe(k.sphLo,w(16777056),Y*.3,.15,.75,.1,.1,.1,ce);let ne=[];for(let Y of[-1,1]){let Ge=new Vt;Ge.position.set(Y*.7,.5,.2),E.add(Ge);let St=oe(o(new Ci(1.6,4.4,3).rotateZ(-Y*Math.PI/2)),_(10496024,{emissive:3147776,side:un}),Y*2.2,0,0,1,1,.08,Ge);St.rotation.x=Math.PI/2,ne.push(Ge)}return oe(o(new Ci(.6,3.4,8).rotateX(-Math.PI/2)),P,0,-.1,-3,1,1,1,E),E.scale.setScalar(1.25),E.visible=!1,n.add(E),{g:E,head:ce,jaw:ue,wings:ne,id:0,born:0,px:0,pz:0}})(),Me=16,me=new vn(o(new go(.86,1,40).rotateX(-Math.PI/2)),o(new tn({color:16777215,transparent:!0,depthWrite:!1,blending:Yn,side:un})),Me);me.frustumCulled=!1,me.renderOrder=4;{let E=new De(0,0,0);for(let P=0;P<Me;P++)me.setColorAt(P,E)}n.add(me);let xe=[],Ne=(E,P,R,X,fe,ce=.6)=>{xe.length<Me&&xe.push({x:E,y:P,z:R,col:X,r1:fe,life:ce,t:0})},tt=14,de=new vn(o(new bi(1,1,1,10,1,!0)),o(new tn({color:16777215,transparent:!0,depthWrite:!1,blending:Yn,side:un})),tt);de.frustumCulled=!1,de.renderOrder=7;{let E=new De(0,0,0);for(let P=0;P<tt;P++)de.setColorAt(P,E)}n.add(de);let Be=[],Ye=(E,P,R,X,fe,ce,ue,ne,Y)=>{Be.length<tt&&Be.push({a:new z(E,P,R),b:new z(X,fe,ce),col:ue,w:ne,life:Y,t:0})};function Ce(E,P){let R=o(new Ut),X=new Float32Array(E*3),fe=new Float32Array(E*4),ce=new Float32Array(E);R.setAttribute("position",new nt(X,3)),R.setAttribute("col",new nt(fe,4)),R.setAttribute("size",new nt(ce,1));let ue=o(new Un({transparent:!0,depthWrite:!1,blending:P?Yn:Ws,uniforms:{px:{value:400}},vertexShader:"attribute vec4 col; attribute float size; uniform float px; varying vec4 vC; void main(){ vC = col; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = min(size * px / max(0.5, -mv.z), 160.0); gl_Position = projectionMatrix * mv; }",fragmentShader:P?"varying vec4 vC; void main(){ float d = length(gl_PointCoord-0.5)*2.0; float a = pow(max(0.0, 1.0 - d), 2.0); gl_FragColor = vec4(vC.rgb * a * vC.a, 1.0); }":"varying vec4 vC; void main(){ vec2 p = gl_PointCoord-0.5; if (vC.a < 0.0) { if (abs(p.x) > 0.5 || abs(p.y) > 0.28) discard; gl_FragColor = vec4(vC.rgb, 1.0); } else { float d = length(p)*2.0; if (d > 1.0) discard; gl_FragColor = vec4(vC.rgb, vC.a * (1.0 - d*d)); } }"})),ne=new ms(R,ue);return ne.frustumCulled=!1,n.add(ne),{geo:R,pos:X,col:fe,size:ce,mat:ue,pts:ne,list:[],cap:E}}let Ue=Ce(e.particles||900,!0),Bt=Ce(Math.round((e.particles||900)*.4),!1);Ue.pts.renderOrder=9,Bt.pts.renderOrder=5;let an=1,er=new De;function ot(E,P,R,X,fe,ce){P=Math.max(1,Math.round(P*an));for(let ue=0;ue<P&&E.list.length<E.cap-60;ue++){let ne=Math.random()*Ni,Y=(ce.up??.5)+Math.random()*(ce.spreadUp??.5),Ge=(ce.speed||4)*(.4+Math.random()*.8);er.set(ce.colors?ce.colors[Math.random()*ce.colors.length|0]:ce.color),E.list.push({x:R+(Math.random()-.5)*(ce.jitter||0),y:X+(Math.random()-.5)*(ce.jy||0),z:fe+(Math.random()-.5)*(ce.jitter||0),vx:Math.cos(ne)*Ge*(1-Y*.6)+(ce.vx||0),vy:Ge*Y*(ce.vyMul??1),vz:Math.sin(ne)*Ge*(1-Y*.6)+(ce.vz||0),g:ce.g??9,drag:ce.drag??1.5,life:(ce.life||.6)*(.7+Math.random()*.6),t:0,s0:ce.size||.3,s1:ce.size1??(ce.size||.3)*.3,r:er.r,gg:er.g,b:er.b,a:ce.alpha??1,conf:!!ce.confetti,spin:Math.random()*Ni})}}function Yo(E,P,R){let X=E.list,fe=0;for(let ne=0;ne<X.length;ne++){let Y=X[ne];if(Y.t+=P,Y.t>=Y.life)continue;Y.vy-=Y.g*P;let Ge=Math.exp(-Y.drag*P);Y.vx*=Ge,Y.vy*=Ge,Y.vz*=Ge,Y.conf&&(Y.spin+=P*6,Y.vx+=Math.sin(Y.spin)*P*2),Y.x+=Y.vx*P,Y.y+=Y.vy*P,Y.z+=Y.vz*P,Y.y<.05&&Y.g>0&&(Y.y=.05,Y.vy*=-.3,Y.vx*=.7,Y.vz*=.7),X[fe++]=Y}X.length=fe;let ce=0,ue=(ne,Y,Ge,St,Zt,cn,ti,Gt)=>{E.pos[ce*3]=ne,E.pos[ce*3+1]=Y,E.pos[ce*3+2]=Ge,E.col[ce*4]=St,E.col[ce*4+1]=Zt,E.col[ce*4+2]=cn,E.col[ce*4+3]=ti,E.size[ce]=Gt,ce++};if(R)for(let ne of R)ce<E.cap-1&&ue(ne[0],ne[1],ne[2],ne[3],ne[4],ne[5],ne[6],ne[7]);for(let ne of X){if(ce>=E.cap)break;let Y=ne.t/ne.life,Ge=ne.conf?1:1-Y*Y;ue(ne.x,ne.y,ne.z,ne.r,ne.gg,ne.b,ne.conf?-1:ne.a*Ge,ne.s0+(ne.s1-ne.s0)*Y)}E.geo.setDrawRange(0,ce);for(let ne of["position","col","size"]){let Y=E.geo.attributes[ne];Y.needsUpdate=!0,Y.clearUpdateRanges?.(),Y.addUpdateRange?.(0,ce*Y.itemSize)}}let ka=o(new Ut);{let P=new Float32Array(510);for(let R=0;R<170;R++)P.set([Math.random(),Math.random(),Math.random()],R*3);ka.setAttribute("position",new nt(P,3))}let is=new ms(ka,o(new Un({transparent:!0,depthWrite:!1,blending:Yn,uniforms:{time:{value:0},px:{value:300},tint:{value:new De(13660415)},tint2:{value:new De(16734778)}},vertexShader:`uniform float time; uniform float px; varying float vA; varying float vK;
      void main(){ vec3 s = position; float t = time * (0.05 + s.x * 0.05); float fy = fract(s.y + t);
        vec3 p = vec3((s.x - 0.5) * 34.0 + sin(t * 6.0 + s.z * 9.0) * 1.5, fy * 18.0, -40.0 + s.z * 46.0 + fy * 4.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vK = s.z;
        vA = smoothstep(0.0, 0.1, fy) * smoothstep(1.0, 0.7, fy) * (0.5 + 0.5 * sin(time * 3.0 + s.x * 50.0));
        gl_PointSize = min((0.1 + s.y * 0.12) * px / max(1.0, -mv.z), 10.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 tint; uniform vec3 tint2; varying float vA; varying float vK; void main(){ float d = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(mix(tint, tint2, step(0.6, vK)) * vA * max(0.0, 1.0-d), 1.0); }"})));is.frustumCulled=!1,is.renderOrder=3,n.add(is);let It=new Map,Qn=new Map,Es=new De(1,1,1),dn=new De,ei=new De,Ua=new De(7368832),Zo=new z,tr=new z(0,1,0),Rs={particles:1,labels:22,dust:!0,props:!0,chars:70},$o=[],Oa=0,yt=0,ss=-9,Ui=-9,zr=-9,A=null,B=new z(0,13,18),Z=new z(0,1.5,-9),q=new z,j=new z,we=[],Pe=new Map,_e=[],Ie=90,Fe=new qe,je=new qe,ct=new qe,ge=(E,P,R,X,fe,ce,ue,ne,Y=0,Ge=0,St=null,Zt=0)=>{je.compose(pe.set(R,X,fe),Re.setFromEuler(He.set(Y,Zt,Ge)),ye.set(ce,ue,ne)),ct.multiplyMatrices(Fe,je),E.setMatrixAt(P,ct),St&&E.setColorAt(P,St)},it=E=>E.z<Xt-.1?0:Bn+.08,Lt=[],Dt=[],Mt=[],on=0;function Oe(){let E=(R,X,fe,ce,ue)=>f.bake(R,fe,ce,ue).map(ne=>{let Y=new vn(ne,f.material(R,X,X==="ghost"?.32:.62),T);Y.frustumCulled=!1,Y.count=0;for(let Ge=0;Ge<T;Ge++)Y.setColorAt(Ge,Es);return n.add(Y),Y});Lt[0]={run:E("Skeleton_Minion",4852748,"run",4),atk:E("Skeleton_Minion",4852748,"attack",3,{to:.8}),s:.95},Lt[1]={run:E("Skeleton_Warrior",2754054,"run",4),atk:E("Skeleton_Warrior",2754054,"slash",3,{to:.8}),s:1.65},Lt[2]={run:E("Skeleton_Mage","ghost","idle",2),atk:E("Skeleton_Mage","ghost","cast",2,{to:.6}),s:1.05};let P={scientist:["Ghost_Skull",5.2],scientist2:["Demon2",5.4],mastermind:["Demon",6.4]};for(let[R,X]of Object.entries(te)){let[fe,ce]=P[R],ue=new Set([X.P.core,X.P.orb,...X.P.souls||[]].filter(Boolean));for(let Y of X.g.children)ue.has(Y)||(Y.visible=!1);let ne=p.actor(fe);ne.obj.scale.setScalar(ne.unit*ce),ne.obj.position.y=fe==="Demon"?0:.8,X.g.add(ne.obj),X.actor=ne,ne.play("combat",0)}{for(let X of Q.g.children)X.visible=!1;let R=p.actor("Dragon_Evolved");R.obj.scale.setScalar(R.unit*3.4),R.obj.position.set(0,-1.2,0),Q.g.add(R.obj),Q.actor=R}for(let R of se){for(let X of R.g.children)X.visible=!1;R.actor=f.actor("Knight",16765530),R.actor.obj.scale.setScalar(1.05),R.g.add(R.actor.obj)}kn()}function kn(){for(let ve of new Set([...u.geos.keys()].map(Ke=>u.matOf(Ke))))ve&&ve.color&&ve.color.setHex(9076872);let E=(ve,Ke)=>{let Nt=u.instanced(ve,Ke);Nt&&(n.add(Nt),Dt.push(Nt))},P=(ve,Ke,Nt)=>{E(ve,Nt);for(let ni of Ke)E(ni,Nt)},R=23,X=()=>(R=R*16807%2147483647,(R-1)/2147483646);he.visible=ke.visible=Je.visible=!1;let fe="ABCDEFGH".split("").map(ve=>"building_"+ve),ce={};for(let ve of[-1,1])for(let Ke=0;Ke<24;Ke++){let Nt=Ke%3,ni=-50+Math.floor(Ke/3)*6.4+X()*2,Cs=ve*(11.5+Nt*5.6+X()*2),nr=fe[X()*fe.length|0],zi=X()<.3;(ce[nr]||(ce[nr]=[])).push({x:Cs,z:ni,ry:Math.floor(X()*4)*Math.PI/2,s:2.4+X()*.5,sy:Nt?1.1+X()*1.2:1+X()*.5,rx:zi?(X()-.5)*.16:0,rz:zi?(X()-.5)*.2:0})}for(let[ve,Ke]of Object.entries(ce))E(ve,Ke);let ue=["wheel_front_left","wheel_front_right","wheel_rear_left","wheel_rear_right"],ne={car_sedan:[{x:-8.8,z:-14,ry:.5,s:4.2,rz:.12},{x:9.2,z:-25,ry:2.6,s:4.2}],car_police:[{x:9,z:-8,ry:-.4,s:4.2}],car_taxi:[{x:-9.4,z:-27,ry:2.2,s:4.2,rz:-.2}]};for(let[ve,Ke]of Object.entries(ne))P(ve,ue.map(Nt=>`${ve}_${Nt}`),Ke);let Y=[],Ge=[],St=[],Zt=[],cn=[],ti=[],Gt=[];for(let ve=0;ve<10;ve++){let Ke=ve%2?1:-1;Y.push({x:Ke*(9.2+X()*4),z:-44+ve*4.4+X()*2,ry:X()*6,s:1.1+X()*.5})}for(let ve=0;ve<8;ve++){let Ke=ve%2?1:-1;(ve%3?St:Ge).push({x:Ke*(8.3+X()*1.6),z:-30+ve*3.4,ry:(X()-.5)*.6,s:.8+X()*.3,rz:(X()-.5)*.2})}for(let ve=0;ve<6;ve++){let Ke=ve%2?1:-1;Zt.push({x:Ke*8,z:-36+Math.floor(ve/2)*11+X()*3,ry:Math.PI/2,s:.9})}for(let ve=0;ve<4;ve++){let Ke=ve%2?1:-1,Nt=-22+Math.floor(ve/2)*12;cn.push({x:Ke*7.9,z:Nt,ry:Ke>0?-Math.PI/2:Math.PI/2,s:1}),Mt.push([Ke*7.9-Ke*1,2.5,Nt])}for(let ve=0;ve<4;ve++){let Ke=ve%2?1:-1;ti.push({x:Ke*8.6,z:-40+ve*10,ry:Ke>0?0:Math.PI,s:4.5})}for(let ve=0;ve<6;ve++){let Ke=ve%2?1:-1;Gt.push({x:Ke*(13+X()*6),z:-46+ve*7,ry:X()*6,s:.6+X()*.4})}E("tree_dead_large",Y.filter((ve,Ke)=>Ke%3===0)),E("tree_dead_medium",Y.filter((ve,Ke)=>Ke%3===1)),E("tree_dead_small",Y.filter((ve,Ke)=>Ke%3===2)),E("grave_A",Ge),E("gravestone",St.filter((ve,Ke)=>Ke%2)),E("gravemarker_A",St.filter((ve,Ke)=>!(Ke%2))),E("fence_broken",Zt),P("post_lantern",["post_lantern_lantern"],cn),E("streetlight",ti),E("rubble_large",Gt),E("crypt",[{x:-15,z:-31,ry:.5,s:1.1}]),E("pumpkin_orange_jackolantern",[{x:8.6,z:-4,ry:-.6,s:.8},{x:-8.4,z:-18,ry:.4,s:.7}]),E("skull",[{x:-7.6,z:-9,ry:.7,s:.6}]),E("ribcage",[{x:7.2,z:-16,ry:1.2,s:1.4}]);let Kt=Xt+.45,en=Bn/4;E("wall",[-8,-4,4,8].map(ve=>({x:ve,z:Kt,sy:en})).concat([{x:-12,z:Kt,sy:en},{x:12,z:Kt,sy:en}])),E("wall_doorway",[{x:0,z:Kt,sy:en}]),jt.visible=!1;for(let ve of Ot){for(let Ke of ve.t.children)Ke!==ve.flag&&(Ke.visible=!1);ve.flag.position.y=8.4}P("building_tower_catapult_red",["catapult_turret_red","catapult_arm_red"],[-1,1].map(ve=>({x:ve*11.6,z:(Xt+Ks)/2,ry:ve>0?-.4:.4,s:3.6}))),Ln.visible=!1,E("torch_lit",Jt.map(ve=>({x:ve,y:Bn+.6,z:Xt+.15,s:1.3}))),E("barrel_large",[{x:-5.2,z:Ks+1.4,s:.5}]),E("crates_stacked",[{x:5.6,z:Ks+1.5,ry:.4,s:.6}]),An.visible=!1,E("building_castle_red",[{x:0,z:31,s:4.4}]),P("building_tower_A_red",["building_tower_A_top_red"],[{x:-8.5,z:30,s:4},{x:8.5,z:30,s:4}])}let pt=new z;function rs(E,P,R,X){let fe=0;on++;let ce=Rs.animLod||1,ue=E.length>28;for(let ne of E){let Y=It.get(ne.id);Y||(Y={spawn:P,x:ne.x,z:ne.z,y:it(ne),atk:-9,speed:0,acc:0},It.set(ne.id,Y)),Y.seen=P,Y.frame=on;let Ge=Math.hypot(ne.x-Y.x,ne.z-Y.z)/Math.max(R,.001);Y.speed+=(Math.min(Ge,10)-Y.speed)*Math.min(1,R*8),Y.x=ne.x,Y.z=ne.z;let St=ne.flags&Tt.down,Zt=ne.flags&Tt.asc,cn=it(ne);Y.y=cn;let ti=My[ne.cls]||"Knight",Gt=ne.info||{};(!Y.a||Y.model!==ti)&&(Y.a&&f.release(Y.a),Y.model=ti,Y.a=f.actor(ti,ne.flags&1?null:Gt.color??null),n.add(Y.a.obj));let Kt=Y.a,en=Math.min(1,(P-Y.spawn)/.35);Kt.obj.position.set(ne.x,cn+(Zt?.25+Math.sin(P*3)*.08:0),ne.z),Kt.obj.rotation.set(0,Math.PI+(ne.cls===1?0:Math.sin(P*.7+ne.id)*.15),0),Kt.obj.scale.setScalar(_m*(.4+.6*en)*(Zt?1.18:1));let ve=St?"dead":Y.speed>2.4?"run":Y.speed>.4?"walk":ne.flags&Tt.cmd||Zt?"cheer":"combat";St&&Kt.base!=="dead"&&Kt.play("die",P),Kt.play(ve,P),!St&&P-Y.atk<.05&&P>=Kt.until&&Kt.play(Sy[ne.cls]||"slash",P,{speed:1.5}),Y.acc+=R;let Ke=(ue?2:1)*ce;(on+ne.id)%Ke===0&&(Tf(f,Kt,Y.acc,P),Y.acc=0),je.compose(pe.set(ne.x,cn+.03,ne.z),Re.identity(),ye.set(1.1,1,1.1)),C.shadow.setMatrixAt(fe,je);let Nt=ei.setHex(nh[ne.cls]??16777215);Zt?(X.push([ne.x,cn+.8,ne.z,1,.85,.3,.9+.3*Math.sin(P*8),3.2]),Math.random()<R*8*an&&ot(Ue,1,ne.x,cn+.4,ne.z,{color:16765773,up:1,speed:1.4,g:-3,life:.6,size:.25,jitter:.6})):(ne.cls===0||ne.cls===3)&&(fe<24||P-Y.atk<.3)&&Kt.hand&&(Kt.hand.getWorldPosition(pt),X.push([pt.x,pt.y+.5,pt.z,Nt.r,Nt.g,Nt.b,.5+(P-Y.atk<.3?.8:0),.9])),ne.flags&Tt.gift&&X.push([ne.x,cn+.9,ne.z,1,.5,.9,.9,2.6]),we.push({id:ne.id,x:ne.x,y:cn+2*_m*en+.15,z:ne.z,info:Gt,flags:ne.flags,cls:ne.cls,hp:ne.hp}),fe++}for(let ne of It.values())ne.a&&ne.frame!==on&&(f.release(ne.a),ne.a=null);return fe}function En(E,P,R,X,fe){let ce=null;for(let ue of Lt)for(let ne of[ue.run,ue.atk])for(let Y of ne)Y.count=0;for(let ue of E.enemies){if(ue.k===3){ce=ue;continue}let ne=Lt[ue.k];if(!ne)continue;let Y=Qn.get(ue.id);Y||(Y={born:P,hit:-9,ph:Math.random()*8,px:ue.x,pz:ue.z,mv:1,yaw:0},Qn.set(ue.id,Y)),Y.seen=P;let Ge=ue.x-Y.px,St=ue.z-Y.pz,Zt=Math.hypot(Ge,St)/Math.max(R,.001);if(Y.px=ue.x,Y.pz=ue.z,Y.mv+=((Zt>.3?1:0)-Y.mv)*Math.min(1,R*6),Zt>.3){let zi=Math.atan2(Ge,St)-Y.yaw;zi=Math.atan2(Math.sin(zi),Math.cos(zi)),Y.yaw+=zi*Math.min(1,R*8)}let cn=Y.mv<.5,ti=cn?ne.atk:ne.run,Gt=cn?4:ue.k===0?9:ue.k===1?5.5:2,Kt=ti[Math.floor(P*Gt+Y.ph)%ti.length],en=Kt.count++,ve=Math.max(0,1-(P-Y.hit)/.18),Ke=Math.min(1,(P-Y.born)/.5),Nt=ne.s*(.2+.8*Ke),ni=ue.k===2?2.4+Math.sin(P*2+Y.ph)*.4:0;Fe.compose(pe.set(ue.x,ni,ue.z),Re.setFromEuler(He.set(ue.k===2?.2:0,Y.yaw,ue.k===2?Math.sin(P*1.7+Y.ph)*.12:0)),ye.set(Nt,Nt,Nt)),Kt.setMatrixAt(en,Fe),Kt.setColorAt(en,ve>0?dn.setRGB(1+ve*1.6,1+ve*.5,1+ve*.5):Es),ue.k!==2?(je.compose(pe.set(ue.x,.03,ue.z),Re.identity(),ye.set(ue.k===1?2:1.1,1,ue.k===1?2:1.1)),$.eShadow.setMatrixAt(fe.sh++,je)):Math.random()<R*4*an&&ot(Ue,1,ue.x,ni+.3,ue.z,{color:10115839,up:-.2,speed:.6,g:1,life:.6,size:.35});let Cs=ue.k===1?3.2:ue.k===2?ni+2:1.8;Pe.set(ue.id,{x:ue.x,y:ue.k===2?ni+1.2:Cs*.6,z:ue.z,k:ue.k}),(ue.k===1||en<40)&&X.push([ue.x,Cs*.8,ue.z+.35,1,.12,.04,.75,ue.k===1?.75:.5])}for(let ue of Lt)for(let ne of[ue.run,ue.atk])for(let Y of ne)Y.instanceMatrix.needsUpdate=!0,Y.instanceColor&&(Y.instanceColor.needsUpdate=!0);return ce}function Gr(E,P,R){Oa=R;let X=E.phase==="ending"&&A,fe=X&&A.saved?Math.min(1,(R-A.t0)/4):0,ce=X&&!A.saved?Math.min(1,(R-A.t0)/3):0;Math.random()<P*12*an&&ot(Ue,1,(Math.random()-.5)*34,.4,-24+Math.random()*26,{colors:[16738848,16752704,16723984],up:1,speed:.6,g:-.7,life:3.2,size:.16}),N.material.uniforms.dawn.value=fe*.85,N.material.uniforms.end.value=ce*.9,G.material.uniforms.time.value=R,G.material.uniforms.op.value=1-fe;let ue=!!E.bo,ne=(X?A.saved?Math.max(0,1-fe*1.2):1.5:1)*(ue?1.25:1)*(1+.12*Math.sin(R*3));Dn.uniforms.time.value=R,Dn.uniforms.power.value=ne*.6,Dn.uniforms.hue.value=(E.ch||1)*.12+(ue?.2:0)+ce*.4;let Y=.72*(X?A.saved?Math.max(.01,1-fe):1+ce*.8:1+((E.ch||1)-1)*.12);Nn.scale.set(Y,Y,1),H.scale.set(6.2*Y,7.8*Y,6),H.rotation.z=R*.2,H.visible=Y>.05,d.intensity=32*ne*(1+.15*Math.sin(R*2.3)),d.color.setHex(ce>0?16719936:ue?16724e3:12595272),Fn.material.opacity=.22*ne;for(let O=0;O<Pt;O++){let V=O/Pt*Ni+R*.15*(O%2?1:-1),lt=7.5+O%3*1.6;At(Et,O,Math.cos(V)*lt*Y,La+Math.sin(V)*lt*.9*Y+Math.sin(R+O)*.4,nn-.5+O%4*.4,.3+O%3*.2,.5+O%2*.3,.3,R*(.5+O*.05),O,0)}Et.instanceMatrix.needsUpdate=!0,c.intensity=.95+fe*1.2-ce*.4+(R-ss<.12?1.6:0)+(R-zr<.5?(.5-(R-zr))*4:0),c.color.setHex(fe>.3?16769216:9412863),h.intensity=.9+fe,n.fog.color.copy(i).lerp(ei.setHex(15245440),fe*.7).lerp(dn.setHex(3802640),ce*.8);let Ge=Math.max(0,Math.min(100,E.bar||0))/100;zt.visible=Ge>.02||R-Ui<.4,Ae.uniforms.time.value=R,Ae.uniforms.a.value=.12+Ge*.4+(R-Ui<.3?.5:0),Ae.uniforms.hit.value=Math.max(0,1-(R-Ui)/.3),Ae.uniforms.col.value.setHex(Ge>.66?8050943:Ge>.33?5943551:8024319),zt.scale.y=6+Ge*1.5;for(let O of Ot)O.flag.rotation.y=Math.sin(R*2.2+O.t.position.x)*.35;v.intensity=12+Math.sin(R*11)*2;let St=E.pd>0?1-Math.max(0,Math.min(1,E.tl/E.pd)):1;if(E.phase==="intro"){let O=St*St*(3-2*St);q.set(Math.sin(O*1.4-.7)*10,6+O*6,-6+O*24),j.set(0,La-O*5,nn+O*22)}else if(E.phase==="gather"||E.phase==="chapter")q.set(Math.sin(R*.12)*3,10.5,16),j.set(0,1.8,-8);else if(E.phase==="boss"&&E.bo)q.set(Math.sin(R*.2)*2,12,18),j.set(L.x*.3,2.2,Math.max(-14,L.z*.45-4));else if(E.phase==="vote"||E.phase==="choice")q.set(Math.sin(R*.25)*3,9.5,15),j.set(0,4.5,-16);else if(E.phase==="ending"){let O=R*.12;q.set(Math.sin(O)*14,9+fe*3,10+Math.cos(O)*8),j.set(0,3+fe*2,-6)}else q.set(Math.sin(R*.15)*1.8,12.5,17.5),j.set(0,.8,-9);let Zt=Math.min(1,P*(E.phase==="intro"?1.6:1.8));B.distanceTo(q)>45&&(B.copy(q),Z.copy(j)),B.lerp(q,Zt),Z.lerp(j,Zt),yt=Math.max(0,yt-P*2.4);let cn=(Math.random()-.5)*yt*.6,ti=(Math.random()-.5)*yt*.6;r.position.set(B.x+cn,B.y+ti+Math.sin(R*.5)*.08,B.z),r.lookAt(Z.x+cn*.6,Z.y+ti*.6,Z.z);let Gt=[];Jt.forEach((O,V)=>{let lt=.75+.25*Math.sin(R*(9+V)+V*2);Gt.push([O,Bn+1.35,Xt+.15,1,.55*lt,.18*lt,.9*lt,2.2]),Gt.push([O,Bn+1.3,Xt+.15,1,.9,.6,1,.5]),Math.random()<P*3*an&&ot(Ue,1,O,Bn+1.4,Xt+.15,{color:16752704,up:1,speed:.8,g:-2,life:.7,size:.18})});for(let O of Mt)Gt.push([O[0],O[1],O[2],1,.7,.35,.8+.15*Math.sin(R*7+O[2]),2.4]);if(fn.material.opacity=.45+.3*Math.sin(R*2)+Ge*.3,Gt.push([0,La,nn,.7,.25,1,.2*ne,13]),Math.random()<P*8*an&&Y>.1){let O=Math.random()*Ni;ot(Ue,1,Math.cos(O)*5.6*Y,La+Math.sin(O)*7*Y,nn,{colors:[12607743,16726634],up:.2,speed:1.5,g:-.5,life:1.4,size:.5})}we.length=0;let Kt=Math.min(Xe,Rs.chars||Xe),en=E.members;if(en.length>Kt){en=$o,en.length=0;for(let O of E.members)!(O.flags&1)&&en.length<Kt&&en.push(O);for(let O of E.members)O.flags&1&&en.length<Kt&&en.push(O)}let ve=0,Ke=0,Nt=0,ni=0,Cs=0,nr=0;if(f)ve=rs(en,R,P,Gt);else for(let O of en){let V=It.get(O.id);V||(V={walk:Math.random()*10,spawn:R,skin:vm[O.id%vm.length],x:O.x,z:O.z,y:it(O),atk:-9},It.set(O.id,V)),V.seen=R;let lt=Math.hypot(O.x-V.x,O.z-V.z)/Math.max(P,.001);V.x=O.x,V.z=O.z;let Rt=O.flags&Tt.down,Ft=O.flags&Tt.asc,Rn=lt>.4&&!Rt;V.walk+=P*(Rn?11:0);let ft=it(O);V.y=ft;let ln=Math.min(1,(R-V.spawn)/.35),fi=(.3+.7*ln)*(1+.15*Math.sin(ln*Math.PI))*(Ft?1.18:1),vt=Math.max(0,1-(R-V.atk)/.25),ir=(Rn?Math.abs(Math.sin(V.walk))*.12:0)+(O.flags&Tt.cmd?Math.abs(Math.sin(R*12+O.id))*.16:0)+(Ft?.25+Math.sin(R*3)*.08:0);Fe.compose(pe.set(O.x,ft+ir,O.z),Re.setFromEuler(He.set(Rt?-1.45:0,Math.PI+(O.cls===1?0:Math.sin(R*.7+O.id)*.15),0)),ye.set(fi,fi,fi)),Rt&&Fe.multiply(je.makeTranslation(0,.3,0));let mn=O.info||{};dn.setHex(mn.color??16777215),Rt&&dn.lerp(Ua,.7);let Ps=vt>0?ei.copy(dn).lerp(Es,vt*.5):dn,sr=Rn?Math.sin(V.walk):0;ge(C.body,ve,0,.52,0,1,1,1,0,0,Ps),ei.setHex(V.skin),Rt&&ei.lerp(Ua,.5),ge(C.head,ve,0,1.06,0,1,1,1,0,0,ei),ei.copy(dn).multiplyScalar(.55),ge(C.hair,ve,0,1.1,-.02,1,1,1,-.15,0,ei);let qf=Rt||(R+O.id*.37)%4.2<.12?.15:1;ge(C.eyes,ve*2,-.13,1.08,.31,1,qf,1),ge(C.eyes,ve*2+1,.13,1.08,.31,1,qf,1);let Xf=O.cls===1?-vt*1.6:-vt*.8;ge(C.hands,ve*2,-.36,.5+sr*.05,sr*.12,1,1,1,0,0,dn),ge(C.hands,ve*2+1,.36,.62+vt*.2,.22,1,1,1,0,0,dn),ge(C.feet,ve*2,-.13,.08,sr*.18,1,1,1),ge(C.feet,ve*2+1,.13,.08,-sr*.18,1,1,1);let Hr=ei.setHex(nh[O.cls]??16777215);Rs.props&&((O.cls===0||O.cls===3)&&(ge(C.staff,Nt,.4,.75+vt*.15,.2,1,1,1,Xf*.4,0),ge(C.orb,Nt,.4,1.45+vt*.2,.2,1+vt*.5,1+vt*.5,1+vt*.5,0,0,Hr),Nt++),O.cls===0&&(ge(C.hat,Ke,0,1.55,-.03,1,1,1,-.2,.1,Hr),Ke++),O.cls===1&&(ge(C.sword,ni,.42,.95,.3,1,1,1,-.6+Xf,-.2),ge(C.shield,ni,-.42,.6,.32,1,1,1,0,0,Hr),ni++),O.cls===2&&(ge(C.bow,Cs,-.35,.72,.36,1,1,1,0,Math.PI/2+.1,null,Math.PI/2),Cs++),(O.cls===3||O.flags&Tt.bless)&&(ge(C.halo,nr,0,1.62,0,1,1,1,0,0,null),nr++)),je.compose(pe.set(O.x,ft+.03,O.z),Re.identity(),ye.set(1.1,1,1.1)),C.shadow.setMatrixAt(ve,je),Ft?(Gt.push([O.x,ft+.8,O.z,1,.85,.3,.9+.3*Math.sin(R*8),3.2]),Math.random()<P*8*an&&ot(Ue,1,O.x,ft+.4,O.z,{color:16765773,up:1,speed:1.4,g:-3,life:.6,size:.25,jitter:.6})):(O.cls===0||O.cls===3)&&Rs.props&&(ve<30||vt>0)&&(pe.set(.4,1.45,.2).applyMatrix4(Fe),Gt.push([pe.x,pe.y,pe.z,Hr.r,Hr.g,Hr.b,.6+vt,.9+vt*1.4])),O.flags&Tt.gift&&Gt.push([O.x,ft+.9,O.z,1,.5,.9,.9,2.6]),we.push({id:O.id,x:O.x,y:ft+ir+1.62*fi+(O.cls===0?.35:0),z:O.z,info:mn,flags:O.flags,cls:O.cls,hp:O.hp}),ve++}let zi={eyes:ve*2,hands:ve*2,feet:ve*2,staff:Nt,orb:Nt,hat:Ke,sword:ni,shield:ni,bow:Cs,halo:nr};if(f)for(let O of Object.keys(C))zi[O]=O==="shadow"?ve:0;for(let O of Object.keys(C)){let V=C[O];V.count=zi[O]??ve,V.instanceMatrix.needsUpdate=!0,V.instanceColor&&(V.instanceColor.needsUpdate=!0)}if(It.size>en.length+40)for(let[O,V]of It)R-V.seen>5&&(V.a&&f.release(V.a),It.delete(O));Pe.clear();let pn={imp:0,bru:0,wr:0,sh:0},ui=null;if(f)ui=En(E,R,P,Gt,pn);else for(let O of E.enemies){if(O.k===3){ui=O;continue}let V=Qn.get(O.id);V||(V={born:R,hit:-9,ph:Math.random()*Ni},Qn.set(O.id,V)),V.seen=R;let lt=Math.max(0,1-(R-V.hit)/.18),Rt=Math.min(1,(R-V.born)/.5),Ft=.2+.8*Rt,Rn=Math.abs(Math.sin(R*9+V.ph))*.12;if(dn.setHex(Se[O.k]),lt>0&&dn.lerp(Es,lt*.85),O.k===0){let ft=pn.imp++;Fe.compose(pe.set(O.x,Rn,O.z),Re.setFromEuler(He.set(0,Math.sin(R*4+V.ph)*.2,Math.sin(R*9+V.ph)*.12)),ye.set(Ft,Ft,Ft)),ge($.impBody,ft,0,.55,0,.45,.52,.42,0,0,dn),ge($.impHorn,ft*2,-.18,.98,0,.08,.3,.08,0,.35),ge($.impHorn,ft*2+1,.18,.98,0,.08,.3,.08,0,-.35),ge($.impEye,ft*2,-.13,.66,.36,.07,.06,.05),ge($.impEye,ft*2+1,.13,.66,.36,.07,.06,.05);let ln=Math.sin(R*22+V.ph)*.5;ge($.impWing,ft*2,-.42,.7,-.15,1,1,.2,0,1.2+ln),ge($.impWing,ft*2+1,.42,.7,-.15,1,1,.2,0,-1.2-ln),Pe.set(O.id,{x:O.x,y:.7,z:O.z,k:0})}else if(O.k===1){let ft=pn.bru++,ln=Math.sin(R*5+V.ph);Fe.compose(pe.set(O.x,Math.abs(ln)*.1,O.z),Re.setFromEuler(He.set(.12,0,ln*.06)),ye.set(Ft,Ft,Ft)),ge($.bruBody,ft,0,1.15,0,.95,1.1,.8,0,0,dn),ge($.bruArm,ft*2,-.95,.95,.1,1,1,1,ln*.4,.25,dn),ge($.bruArm,ft*2+1,.95,.95,.1,1,1,1,-ln*.4,-.25,dn),ge($.bruHorn,ft*2,-.45,2.05,.1,.13,.5,.13,-.3,.6),ge($.bruHorn,ft*2+1,.45,2.05,.1,.13,.5,.13,-.3,-.6),ge($.bruEye,ft*2,-.25,1.55,.72,.1,.08,.06),ge($.bruEye,ft*2+1,.25,1.55,.72,.1,.08,.06),Pe.set(O.id,{x:O.x,y:1.3,z:O.z,k:1})}else{let ft=pn.wr++,ln=3.2+Math.sin(R*2+V.ph)*.4;Fe.compose(pe.set(O.x,ln,O.z),Re.setFromEuler(He.set(.25,Math.sin(R+V.ph)*.3,Math.sin(R*1.7+V.ph)*.15)),ye.set(Ft,Ft,Ft)),ge($.wrBody,ft,0,-.2,0,.55,-1.5,.55,0,0,dn),ge($.wrHood,ft,0,.62,0,.42,.45,.42),ge($.wrEye,ft*2,-.13,.62,.34,.07,.05,.05),ge($.wrEye,ft*2+1,.13,.62,.34,.07,.05,.05),Math.random()<P*4*an&&ot(Ue,1,O.x,ln-.8,O.z,{color:10115839,up:-.2,speed:.6,g:1,life:.6,size:.35}),Pe.set(O.id,{x:O.x,y:ln+.3,z:O.z,k:2})}O.k!==2&&(je.compose(pe.set(O.x,.03,O.z),Re.identity(),ye.set(O.k===1?2.2:1.2,1,O.k===1?2.2:1.2)),$.eShadow.setMatrixAt(pn.sh++,je)),(O.k===1||pn.imp<40)&&Gt.push([O.x,O.k===1?1.55:O.k===2?3.8:.66,O.z+(O.k===1?.75:.38),O.k===2?.5:1,O.k===1?.3:O.k===2?.9:.85,O.k===2?1:.2,.5,O.k===1?.9:.5])}let bh={impBody:pn.imp,impHorn:pn.imp*2,impEye:pn.imp*2,impWing:pn.imp*2,bruBody:pn.bru,bruArm:pn.bru*2,bruHorn:pn.bru*2,bruEye:pn.bru*2,wrBody:pn.wr,wrHood:pn.wr,wrEye:pn.wr*2,eShadow:pn.sh};if(f)for(let O of Object.keys(bh))bh[O]=O==="eShadow"?pn.sh:0;for(let O of Object.keys($)){let V=$[O];V.count=bh[O],V.instanceMatrix.needsUpdate=!0,V.instanceColor&&(V.instanceColor.needsUpdate=!0)}if(Qn.size>200)for(let[O,V]of Qn)R-V.seen>3&&Qn.delete(O);for(let[O,V]of Object.entries(te)){let lt=ui&&E.bo&&E.bo.id===O||L.id===O&&R-L.dieT<1.6;if(V.g.visible=!!lt,!lt)continue;L.id!==O&&(L.id=O,L.born=R,L.dieT=-9,L.x=ui?ui.x:0,L.z=ui?ui.z:-30);let Rt=R-L.dieT<1.6;ui&&!Rt&&(L.x+=(ui.x-L.x)*Math.min(1,P*6),L.z+=(ui.z-L.z)*Math.min(1,P*6));let Ft=Math.min(1,(R-L.born)/1.6),Rn=Math.max(0,1-(R-L.atkT)/.8),ft=Rt?Math.min(1,(R-L.dieT)/1.5):0;V.g.position.set(L.x+(Rt?(Math.random()-.5)*.3:0),(Ft-1)*6-ft*3+(O==="mastermind"?.6+Math.sin(R*1.4)*.3:0),L.z),V.g.rotation.set(ft*.4,Math.sin(R*.6)*.2,0);let ln=O==="mastermind"?1.85:O==="scientist2"?1.75:1.5;V.g.scale.setScalar(ln*(1+Rn*.08)*(1-ft*.5));let fi=Math.max(0,1-(R-L.hitT)/.15);for(let[mn,Ps]of V.mats)mn.emissive.copy(Ps).lerp(Es,fi*.6);if(V.actor){let mn=V.actor;Rt?(mn.state!=="die"&&mn.state!=="dead"&&mn.play("die",R),R>=mn.until&&mn.play("dead",R)):(mn.play("combat",R),R-L.atkT<.05?mn.play(O==="mastermind"?"summon":"cast",R):fi>.9&&R>=mn.until&&mn.play("hit",R,{speed:1.5})),V.amat&&V.amat.emissive&&V.amat.emissive.setRGB(fi*.5,fi*.4,fi*.5),mn.tick(P,R)}let vt=V.P;vt.armL&&(vt.armL.rotation.z=-.3-Rn*1.2+Math.sin(R*2)*.1,vt.armR.rotation.z=.3+Rn*1.4-Math.sin(R*2)*.1,vt.armR.rotation.x=-Rn*1.2),vt.book&&(vt.book.position.y=2.6+Math.sin(R*2)*.15,vt.book.rotation.y=R*.8,vt.stone.position.set(Math.cos(R*1.5)*1.3,3.2+Math.sin(R*3)*.3,Math.sin(R*1.5)*.9+.3),vt.stone.rotation.y=R*3),vt.wings&&vt.wings.forEach((mn,Ps)=>{mn.rotation.z=(Ps?1:-1)*(1+Math.sin(R*3)*.15)}),vt.souls&&vt.souls.forEach((mn,Ps)=>{let sr=R*1.2+Ps/6*Ni;mn.position.set(Math.cos(sr)*1.9,3.4+Math.sin(R*2+Ps)*.5,Math.sin(sr)*1.2)}),vt.orb&&vt.orb.scale.setScalar(.42*(1+Rn*.8+Math.sin(R*6)*.05)),vt.cape&&(vt.cape.rotation.x=.12+Math.sin(R*1.8)*.08);let ir=V.top;Gt.push([V.g.position.x,V.g.position.y+ir*.5,L.z-.5,V.aura[0],V.aura[1],V.aura[2],.3+Rn*.4,7+Rn*4]),Math.random()<P*14*an&&ot(Ue,1,L.x+(Math.random()-.5)*3,Math.random()*ir*.7,L.z,{color:O==="scientist"?11559167:16724064,up:1,speed:1.2,g:-2.5,life:1,size:.5}),Rt&&Math.random()<P*30&&ot(Ue,3,L.x+(Math.random()-.5)*4,Math.random()*ir,L.z,{colors:[16777215,16765773,12607743],speed:6,g:2,life:.8,size:.7}),ui&&Pe.set(ui.id,{x:L.x,y:ir*.55,z:L.z,k:3})}let Wf=new Set;for(let O of E.allies)if(O.k===0){let V=se.find(Ft=>Ft.id===O.id)||se.find(Ft=>!Ft.id);if(!V)continue;V.id!==O.id&&(V.id=O.id,V.born=R,V.x=O.x,V.z=O.z,ot(Ue,30,O.x,1.5,O.z,{colors:[16769152,16777215],speed:6,up:.6,g:3,life:.7,size:.5}),Ne(O.x,.1,O.z,16765773,4,.7),Ye(O.x,0,O.z,O.x,30,O.z,16769152,1.2,.6)),Wf.add(V);let lt=Math.hypot(O.x-V.x,O.z-V.z)/Math.max(P,.001);V.x=O.x,V.z=O.z;let Rt=Math.min(1,(R-V.born)/.4);V.g.visible=!0,V.g.position.set(O.x,lt>.3?Math.abs(Math.sin(R*10))*.15:0,O.z),V.g.rotation.y=Math.PI,V.g.scale.setScalar(1.25*Rt),V.arm.rotation.x=-Math.max(0,1-(R-V.atk)/.3)*2.2+.3,V.actor&&(V.actor.play(lt>.3?"run":"combat",R),R-V.atk<.05&&V.actor.play("slash",R),Tf(f,V.actor,P,R)),Gt.push([O.x,1.6,O.z,1,.82,.35,.55,4.5])}else{let V=Q;V.id!==O.id&&(V.id=O.id,V.born=R,V.px=O.x,V.pz=O.z,Ne(0,.2,0,16738858,10,1),yt=Math.max(yt,.8));let lt=(O.x-V.px)/Math.max(P,.001),Rt=(O.z-V.pz)/Math.max(P,.001);V.px=O.x,V.pz=O.z;let Ft=Math.min(1,(R-V.born)/1.2);V.g.visible=!0,V.g.position.set(O.x,9.5+(1-Ft)*12+Math.sin(R*2)*.5,O.z),Math.hypot(lt,Rt)>.1&&(V.g.rotation.y=Math.atan2(lt,Rt)),V.g.rotation.z=Math.sin(R*1.3)*.15,V.wings[0].rotation.z=Math.sin(R*6)*.6,V.wings[1].rotation.z=-Math.sin(R*6)*.6,V.jaw.rotation.x=.25+Math.sin(R*8)*.15,V.actor&&(V.actor.play("move",R),V.actor.tick(P,R)),V.g.updateMatrixWorld(),pe.set(0,0,1.2).applyMatrix4(V.head.matrixWorld);let Rn=O.x+Math.sin(V.g.rotation.y)*2,ft=O.z+Math.cos(V.g.rotation.y)*2+3;Ft>=1&&ot(Ue,3,pe.x,pe.y,pe.z,{colors:[16764992,16738848,16722448],speed:1,vx:(Rn-pe.x)*1.4,vz:(ft-pe.z)*1.4,up:-.9,vyMul:1,g:6,life:.7,size:.9,size1:1.6,drag:.5}),Gt.push([O.x,V.g.position.y,O.z,1,.5,.2,.6,9])}for(let O of se)Wf.has(O)||(O.g.visible&&ot(Ue,16,O.x,1.4,O.z,{color:16769152,speed:4,g:-1,life:.6,size:.4}),O.g.visible=!1,O.id=0);Q.g.visible&&!E.allies.some(O=>O.k===1)&&(Q.g.visible=!1,Q.id=0,ot(Ue,30,Q.px,9,Q.pz,{colors:[16764992,16738848],speed:7,g:0,life:.8,size:.6}));for(let O=_e.length-1;O>=0;O--){let V=_e[O],lt=(R-V.t0)/V.dur,Rt=Pe.get(V.to);if(Rt&&(V.last=Rt),lt>=1){let fi=Ia[V.c]||Ia.v;ot(Ue,V.c==="m"?9:4,V.last.x,V.last.y,V.last.z,{colors:fi,speed:V.c==="m"?5:3,g:2,life:.35,size:V.c==="m"?.55:.35}),V.c==="m"&&Ne(V.last.x,.15,V.last.z,12611839,1.9,.35),_e.splice(O,1);continue}let Ft=V.sx+(V.last.x-V.sx)*lt,Rn=V.sz+(V.last.z-V.sz)*lt,ft=V.sy+(V.last.y-V.sy)*lt+Math.sin(lt*Math.PI)*V.arc,ln=V.col;Gt.push([Ft,ft,Rn,ln.r,ln.g,ln.b,1,V.c==="m"?1.3:V.c==="v"?1:.7]),(V.c!=="a"||Math.random()<.5)&&ot(Ue,1,Ft,ft,Rn,{color:V.c==="m"?16747066:(Ia[V.c]||Ia.v)[0],speed:.3,g:0,life:.25,size:V.c==="m"?.6:.35})}for(let O=0;O<xe.length;O++){let V=xe[O];V.t+=P;let lt=V.t/V.life;if(lt>=1){xe.splice(O--,1);continue}let Rt=.3+V.r1*(1-Math.pow(1-lt,3));me.setMatrixAt(O,ae.compose(pe.set(V.x,V.y,V.z),Re.identity(),ye.set(Rt,1,Rt))),me.setColorAt(O,Ze.setHex(V.col).multiplyScalar(1-lt))}me.count=xe.length,me.instanceMatrix.needsUpdate=!0,me.instanceColor&&(me.instanceColor.needsUpdate=!0);for(let O=0;O<Be.length;O++){let V=Be[O];V.t+=P;let lt=V.t/V.life;if(lt>=1){Be.splice(O--,1);continue}let Rt=V.a.distanceTo(V.b);pe.copy(V.a).add(V.b).multiplyScalar(.5),Re.setFromUnitVectors(tr,Zo.copy(V.b).sub(V.a).normalize());let Ft=V.w*(lt<.2?lt/.2:1-(lt-.2)/.8);de.setMatrixAt(O,ae.compose(pe,Re,ye.set(Ft,Rt,Ft))),de.setColorAt(O,Ze.setHex(V.col).multiplyScalar(.8*(1-lt)*(1-lt*.3)))}if(de.count=Be.length,de.instanceMatrix.needsUpdate=!0,de.instanceColor&&(de.instanceColor.needsUpdate=!0),X){let O=R-A.t0;if(A.saved){if(Math.random()<P*3&&O<14){let V=(Math.random()-.5)*24,lt=10+Math.random()*8,Rt=-8-Math.random()*14;ot(Ue,40,V,lt,Rt,{colors:[[16765773,16739029,8384767,8257418][Math.random()*4|0],16777215],speed:7,up:0,spreadUp:1,vyMul:1,g:3,drag:1.2,life:1.3,size:.45})}Math.random()<P*30*an&&ot(Bt,1,(Math.random()-.5)*16,12,-2+Math.random()*8,{colors:[16731530,16765773,5097215,8257418,13073919],up:0,speed:1,g:2.5,drag:1.4,life:4,size:.35,confetti:!0}),Gt.push([0,20,-60,1,.75,.45,fe*.8,70])}else Math.random()<P*20*an&&ot(Ue,1,(Math.random()-.5)*24,Math.random()*3,-20+Math.random()*24,{colors:[16722490,10100991],up:1,speed:2,g:-3,life:1.6,size:.8}),Math.random()<P*2&&(yt=Math.max(yt,.5))}is.material.uniforms.time.value=R,is.visible=Rs.dust,Yo(Ue,P,Gt),Yo(Bt,P,null),t.render(n,r)}function Oi(E){let P=Oa;switch(E.k){case"shot":{let R=Pe.get(E.e);if(!R)break;if(E.c==="w"||E.c==="g"){if(ot(Ue,4,R.x,R.y+.3,R.z+.4,{colors:[16777215,E.c==="g"?16765773:16747114],speed:4,g:2,life:.25,size:.35}),E.c==="w"){let Y=It.get(E.s);Y&&(Y.atk=P)}else{let Y=se.find(Ge=>Ge.id===-E.s);Y&&(Y.atk=P),Ne(R.x,.1,R.z,16765773,2.4,.3)}let ne=Qn.get(E.e);ne&&(ne.hit=P);break}if(_e.length>=Ie)break;let X,fe,ce,ue=E.s?It.get(E.s):null;ue?(X=ue.x,fe=ue.y+1.4,ce=ue.z,ue.atk=P):(X=(Math.random()-.5)*14,fe=Bn+3,ce=Lr),_e.push({sx:X,sy:fe,sz:ce,to:E.e,last:R,t0:P,dur:Math.max(.12,E.d||.3),c:E.c,col:new De((Ia[E.c]||Ia.v)[0]),arc:E.c==="m"?1.6:E.c==="v"?2.4:.4});break}case"dmg":{let R=Qn.get(E.e);R?R.hit=P:Pe.get(E.e)?.k===3&&(L.hitT=P),E.c===2&&(yt=Math.max(yt,.35));break}case"kill":{let R=E.q===2?3.2:.8;ot(Ue,E.q===1?14:8,E.x,R,E.z,{colors:[12607743,16726634,16777215],speed:4.5,g:3,life:.5,size:.45}),ot(Bt,E.q===1?8:4,E.x,R,E.z,{color:1706528,speed:2.5,up:.8,g:-1,life:.9,size:.6,alpha:.7}),Qn.delete(E.e);break}case"heal":{let R=It.get(E.s),X=It.get(E.t);R&&X&&(Ye(R.x,R.y+1.4,R.z,X.x,X.y+1,X.z,6160282,.08,.4),ot(Ue,6,X.x,X.y+1,X.z,{color:8257448,up:1,speed:1.5,g:-2,life:.6,size:.3}));break}case"down":{let R=It.get(E.id);R&&ot(Ue,8,R.x,R.y+.6,R.z,{color:16728160,speed:3,life:.4,size:.35});break}case"rise":{let R=It.get(E.id);R&&(ot(Ue,10,R.x,R.y+.5,R.z,{color:8257448,up:1,speed:2,g:-2,life:.6,size:.35}),Ye(R.x,R.y,R.z,R.x,R.y+6,R.z,8257448,.25,.5));break}case"wallhit":ot(Ue,10,E.x,1.2,Xt-.2,{colors:[16726586,16752704],speed:4,g:4,life:.4,size:.4}),ot(Bt,5,E.x,1,Xt-.2,{color:6971e3,speed:3,up:.5,g:9,life:.8,size:.3}),yt=Math.max(yt,.25+Math.min(.4,(E.d||1)*.1)),ss=P;break;case"block":Ui=P,ot(Ue,6,E.x,2.5,Xt-1.2,{color:8050943,speed:3,life:.35,size:.4});break;case"toll":yt=Math.max(yt,1.2),ss=P;break;case"boss":yt=Math.max(yt,1),Ne(0,.2,nn+4,16726634,14,1.2);break;case"bossatk":{L.atkT=P;let R=L.x,X=L.z,fe=te[L.id]?.top||8;if(E.kind==="summon"){Ne(R,.2,X,11550975,7,.9),ot(Ue,30,R,1,X,{colors:[11550975,16726634],speed:6,up:.4,g:2,life:.8,size:.6});break}E.kind==="beam"?Ye(R,fe*.6,X+1,E.x,E.blocked?3.2:1.5,E.blocked?Xt-1.4:Xt,E.blocked?8050943:16722522,.55,.7):(Ne(R,.15,X,16726634,16,.9),ot(Bt,20,R,.3,X,{color:4864600,speed:6,up:.6,g:12,life:.9,size:.5})),E.blocked?Ui=P:ss=P,yt=Math.max(yt,E.blocked?.5:1),ot(Ue,18,E.x,2,Xt-.5,{colors:E.blocked?[8050943,16777215]:[16722522,16752704],speed:6,g:3,life:.5,size:.6});break}case"bossdown":case"retreat":L.dieT=P,yt=Math.max(yt,1.4),ss=P,Ne(L.x,.2,L.z,16765773,16,1.2),Ye(L.x,0,L.z,L.x,40,L.z,E.k==="bossdown"?16769152:11550975,2.4,1.2);break;case"ult":{zr=P,yt=Math.max(yt,1.1),ss=P;let R=0;for(let[,X]of Pe){if(R++>9)break;Ye(X.x,0,X.z,X.x,30,X.z,E.p<1?8050943:16769152,.9,.7),ot(Ue,6,X.x,.5,X.z,{colors:[16777215,16769152],speed:5,g:2,life:.5,size:.6})}Ne(0,.2,-10,16769152,20,1);break}case"pulse":Ui=P,Ne(0,Bn,Xt,8050943,14,.9);break;case"volley":{let R=It.get(E.id);R&&(Ne(R.x,R.y+.1,R.z,16765773,1.6,.5),ot(Ue,12,R.x,R.y+1.2,R.z,{colors:[16765773,16739029],up:1,speed:3,g:1,life:.6,size:.4}));break}case"gift":{let R=It.get(E.id);R&&ot(Ue,14,R.x,R.y+1,R.z,{colors:[16739029,16765773,8384767],up:1,speed:3.5,g:2,life:.7,size:.4}),E.tier==="rune"&&(Ui=P,Ne(0,Bn,Xt+.5,8050943,12,.8)),E.tier==="awaken"&&R&&Ye(R.x,R.y,R.z,R.x,30,R.z,16769152,.7,1);break}case"bless":{let R=It.get(E.id);R&&Ye(R.x,R.y,R.z,R.x,25,R.z,E.why==="share"?8050943:16773280,.35,.8),E.why==="share"&&(Ui=P);break}case"class":{let R=It.get(E.id);R&&(Ne(R.x,R.y+.1,R.z,nh[E.c]||16777215,1.2,.4),ot(Ue,8,R.x,R.y+.8,R.z,{color:nh[E.c]||16777215,up:1,speed:2,g:-1,life:.5,size:.3}));break}case"join":{let R=It.get(E.id);R&&ot(Ue,6,R.x,R.y+.6,R.z,{color:16777215,speed:2,life:.4,size:.3});break}case"wave":Ne(0,.2,nn+3,11550975,10,1);break;case"chapter":yt=Math.max(yt,.6),Ne(0,.2,nn+3,16726634,18,1.4);break;case"end":A={saved:!!E.saved,t0:P},yt=Math.max(yt,1.2),ss=P;break;case"intro":case"gather":A=null,_e.length=0;break}}let Bi=390,mt=844,Yt=new z,zn=(E,P,R)=>(Yt.set(E,P,R).project(r),{x:(Yt.x*.5+.5)*Bi,y:(-Yt.y*.5+.5)*mt,vis:Yt.z<1&&Yt.z>-1});return{kind:"webgl",renderer:t,ready:g,scene:n,get loaded(){return!!f},get error(){return m},resize(E,P,R){Bi=E,mt=P,t.setPixelRatio(R),t.setSize(E,P,!1),r.aspect=E/P,r.fov=E/P<.7?52:42,r.updateProjectionMatrix(),Ue.mat.uniforms.px.value=Bt.mat.uniforms.px.value=P*R*.9,is.material.uniforms.px.value=P*R*.5},setQuality(E){Rs=E,an=E.particles},frame:Gr,fx:Oi,project:zn,enemyTop(E){let P=Pe.get(E);return P?zn(P.x,P.y+(P.k===1?1.4:P.k===3?0:.8),P.z):null},bossTop(){let E=te[L.id];return!E||!E.g.visible?null:zn(L.x,E.top+.5,L.z)},riftAt(){return zn(0,La,nn)},drawn:()=>we,shake(E){yt=Math.max(yt,E)},stats(){let E=t.info;return{calls:E.render.calls,tris:E.render.triangles,tex:E.memory.textures,geo:E.memory.geometries,chars:f?[...It.values()].filter(P=>P.a).length:C.body.count,loaded:!!f,enemies:f?Lt.reduce((P,R)=>P+[...R.run,...R.atk].reduce((X,fe)=>X+fe.count,0),0):$.impBody.count+$.bruBody.count+$.wrBody.count,parts:Ue.list.length+Bt.list.length,bolts:_e.length}},dispose(){x=!0,n.traverse(E=>{E.isInstancedMesh&&E.dispose()});for(let E of a)E.dispose?.();u&&u.dispose(),f&&f.dispose(),p&&p.dispose(),t.dispose()},loseContext(){try{t.forceContextLoss()}catch{}}}}var Mm=s=>"#"+(s>>>0).toString(16).padStart(6,"0"),wy=["#d02a3a","#6a4a8a","#9a5aff"];function Sm(s){let e=s.getContext("2d"),t=390,n=844,i=1,r=0,a=0,o=-9,c=null,l=null,h=[],d=new Map,f=[],u=_=>Math.max(0,Math.min(1,(_-nn+2)/(6-nn+2))),p=_=>.35+.65*u(_),x=(_,w)=>t/2+_*(t/24)*p(w),m=(_,w)=>n*.2+u(w)*n*.42-_*n*.018*p(w),g=(_,w,y)=>({x:x(_,y),y:m(w,y),vis:!0});function v(_,w,y){r=y,h.length=0,d.clear(),l=null,e.setTransform(i,0,0,i,0,0);let b=a>0?(a-=w,(Math.random()-.5)*10*a):0;e.translate(b,0);let S=_.phase==="ending"&&c===!0,D=_.phase==="ending"&&c===!1,I=e.createLinearGradient(0,0,0,n*.6);if(I.addColorStop(0,S?"#5a7ad8":"#08051a"),I.addColorStop(1,S?"#ffb070":D?"#5a0a14":"#3a1240"),e.fillStyle=I,e.fillRect(-10,0,t+20,n),!S){let G=x(0,nn),le=m(7.5,nn),J=t*.16*(1+.05*Math.sin(y*3)),ee=e.createRadialGradient(G,le,J*.2,G,le,J*1.6);ee.addColorStop(0,"#1a0020"),ee.addColorStop(.45,"#b040ff"),ee.addColorStop(.7,"rgba(255,40,90,0.5)"),ee.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=ee,e.beginPath(),e.ellipse(G,le,J*1.6,J*2,0,0,Math.PI*2),e.fill()}let F=m(0,nn),U=e.createLinearGradient(0,F,0,n);U.addColorStop(0,"#2a1a34"),U.addColorStop(1,"#120a18"),e.fillStyle=U,e.fillRect(-10,F,t+20,n),e.fillStyle="#1a1424";for(let G=0;G<10;G++){let le=-40+G*4.2;for(let J of[-1,1]){let ee=J*(11+G%3*4),he=5+G*7%9;e.fillRect(x(ee,le)-14*p(le),m(he,le),28*p(le),m(0,le)-m(he,le))}}let k=[..._.enemies].sort((G,le)=>G.z-le.z);for(let G of k){let le=p(G.z),J=x(G.x,G.z),ee=m(G.k===2?3.2:0,G.z),he=(G.k===1?16:G.k===3?44:9)*le;e.fillStyle=G.k===3?_.bo&&_.bo.id==="mastermind"?"#2a1030":"#e8e4ee":wy[G.k],e.beginPath(),e.ellipse(J,ee-he,he,he*1.2,0,0,Math.PI*2),e.fill(),e.fillStyle=G.k===3?"#ff2a4a":"#ffe14a",e.fillRect(J-he*.4,ee-he*1.3,he*.22,he*.15),e.fillRect(J+he*.2,ee-he*1.3,he*.22,he*.15),d.set(G.id,{x:J,y:ee-he*2.2}),G.k===3&&(l={x:J,y:ee-he*2.6,vis:!0})}let N=m(Bn,yi),K=m(0,yi);e.fillStyle="#5a5068",e.fillRect(-10,N,t+20,K-N+n*.08),e.fillStyle="#7a6e8a";for(let G=0;G<14;G++)e.fillRect(G*t/13-6,N-10,16,10);let ie=Math.max(0,Math.min(100,_.bar||0))/100;ie>.02&&(e.strokeStyle=`rgba(110,200,255,${.25+ie*.6})`,e.lineWidth=4,e.beginPath(),e.ellipse(t/2,K,t*.52,n*.16,0,Math.PI,0),e.stroke());for(let G of _.members){let le=x(G.x,G.z),J=G.z<yi-.1?m(0,G.z):N+4,ee=9*p(G.z);e.fillStyle=G.flags&Tt.down?"#555":Mm(G.info?.color??16777215),e.beginPath(),e.arc(le,J-ee,ee,0,Math.PI*2),e.fill(),e.fillStyle=Mm(Zi[G.cls]?.color??16777215),e.fillRect(le-ee*.5,J-ee*2.6,ee,ee*.6),G.flags&Tt.asc&&(e.strokeStyle="#ffd34d",e.lineWidth=2,e.beginPath(),e.arc(le,J-ee,ee*1.6,0,Math.PI*2),e.stroke()),h.push({id:G.id,x:G.x,y:0,z:G.z,sx:le,sy:J-ee*3,info:G.info,flags:G.flags,cls:G.cls,hp:G.hp})}for(let G of _.allies){let le=x(G.x,G.z),J=G.k?n*.22+Math.sin(y*2)*6:m(0,G.z);e.font=`${G.k?46:28}px sans-serif`,e.textAlign="center",e.fillText(G.k?"\u{1F409}":"\u{1F6E1}\uFE0F",le,J)}for(let G=f.length-1;G>=0;G--){let le=f[G],J=(y-le.t)/.4;if(J>1){f.splice(G,1);continue}e.fillStyle=`rgba(${le.c},${1-J})`,e.beginPath(),e.arc(le.x,le.y,6+J*18,0,Math.PI*2),e.fill()}y-o<.2&&(e.fillStyle=`rgba(255,255,255,${.35*(1-(y-o)/.2)})`,e.fillRect(0,0,t,n))}function M(_){if(_.k==="kill"){let w=g(_.x,.6,_.z);f.push({x:w.x,y:w.y,t:r,c:"200,90,255"})}(_.k==="wallhit"||_.k==="toll"||_.k==="bossatk")&&(a=Math.max(a,.5)),(_.k==="ult"||_.k==="bossdown"||_.k==="end")&&(o=r,a=Math.max(a,.6)),_.k==="end"&&(c=!!_.saved),(_.k==="intro"||_.k==="gather")&&(c=null)}return{kind:"2d",resize(_,w,y){t=_,n=w,i=Math.min(y,1.5),s.width=Math.round(_*i),s.height=Math.round(w*i),s.style.width=_+"px",s.style.height=w+"px"},setQuality(){},frame:v,fx:M,project:(_,w,y)=>{let b=h.find(S=>S.x===_&&S.z===y);return b?{x:b.sx,y:b.sy,vis:!0}:g(_,w,y)},enemyTop(_){let w=d.get(_);return w?{...w,vis:!0}:null},bossTop:()=>l,riftAt:()=>g(0,7.5,nn),drawn:()=>h,shake(_){a=Math.max(a,_)},stats:()=>({kind:"2d",chars:h.length,enemies:d.size}),dispose(){}}}function wm({silenceUrl:s="/assets/silence.mp3",record:e=!1}={}){let t={ctx:null,master:null,sfxGain:null,voiceGain:null,unlocked:!1,played:0,fails:0,cues:[],record:e,last:{},speakingUntil:0,muted:!1};try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}let n=new Audio;n.setAttribute("playsinline",""),n.preload="auto";function i(){if(t.ctx||e)return t.ctx;let u=window.AudioContext||window.webkitAudioContext;if(!u)return null;try{t.ctx=new u}catch{return null}return r(t.ctx,t.ctx.destination,t),t.ctx}function r(u,p,x){let m=u.createDynamicsCompressor();m.threshold.value=-14,m.ratio.value=6,m.attack.value=.003,m.release.value=.2,x.master=u.createGain(),x.master.gain.value=.9,x.sfxGain=u.createGain(),x.sfxGain.gain.value=.55,x.voiceGain=u.createGain(),x.voiceGain.gain.value=1,x.sfxGain.connect(x.master),x.voiceGain.connect(x.master),x.master.connect(m),m.connect(p)}t.unlock=()=>{let u=i();if(u){try{u.resume();let p=u.createBuffer(1,1,22050),x=u.createBufferSource();x.buffer=p,x.connect(u.destination),x.start(0)}catch{}t.elUnlocked||(n.src=s,n.play().then(()=>{n.pause(),t.elUnlocked=!0}).catch(()=>{})),t.unlocked=u.state==="running",setTimeout(()=>{t.unlocked=u.state==="running",t.onstate&&t.onstate(t.unlocked)},120)}},t.resume=()=>{t.ctx&&t.ctx.state!=="running"&&t.ctx.resume().catch(()=>{})},t.state=()=>e?"record":t.ctx?t.ctx.state:"none";let a=u=>{if(u.__noise)return u.__noise;let p=u.sampleRate,x=u.createBuffer(1,p,p),m=x.getChannelData(0),g=1;for(let v=0;v<p;v++)g=g*16807%2147483647,m[v]=g/10737418235e-1-1;return u.__noise=x,x};function o(u,p,x,m,g,v){p.gain.setValueAtTime(1e-4,x),p.gain.exponentialRampToValueAtTime(g,x+m),p.gain.exponentialRampToValueAtTime(1e-4,x+m+v)}function c(u,p,x,{type:m="sine",f0:g=440,f1:v=g,a:M=.005,d:_=.2,peak:w=.3,det:y=0}){let b=u.createOscillator(),S=u.createGain();b.type=m,b.frequency.setValueAtTime(g,x),v!==g&&b.frequency.exponentialRampToValueAtTime(Math.max(20,v),x+M+_),b.detune.value=y,o(u,S,x,M,w,_),b.connect(S).connect(p),b.start(x),b.stop(x+M+_+.05)}function l(u,p,x,{type:m="lowpass",f0:g=1e3,f1:v=g,q:M=.7,a:_=.003,d:w=.15,peak:y=.4}){let b=u.createBufferSource(),S=u.createBiquadFilter(),D=u.createGain();b.buffer=a(u),S.type=m,S.Q.value=M,S.frequency.setValueAtTime(g,x),v!==g&&S.frequency.exponentialRampToValueAtTime(Math.max(30,v),x+_+w),o(u,D,x,_,y,w),b.connect(S).connect(D).connect(p),b.start(x,Math.random()*.5),b.stop(x+_+w+.05)}let h={punch:(u,p,x,m=1)=>{l(u,p,x,{f0:1400,f1:300,d:.08,peak:.5*m}),c(u,p,x,{f0:150,f1:55,d:.1,peak:.55*m})},crit:(u,p,x)=>{h.punch(u,p,x,1.2),c(u,p,x,{type:"square",f0:1800,f1:900,d:.06,peak:.12}),l(u,p,x+.01,{type:"highpass",f0:3e3,d:.12,peak:.25})},block:(u,p,x)=>{c(u,p,x,{type:"triangle",f0:1200,f1:1100,d:.18,peak:.18}),c(u,p,x,{type:"triangle",f0:1810,d:.14,peak:.1})},ko:(u,p,x)=>{c(u,p,x,{type:"sine",f0:260,f1:980,a:.005,d:.16,peak:.35}),l(u,p,x,{type:"bandpass",f0:2500,f1:600,q:1.2,d:.25,peak:.35}),c(u,p,x+.09,{type:"triangle",f0:1320,d:.2,peak:.12})},dash:(u,p,x)=>{l(u,p,x,{type:"bandpass",f0:500,f1:3500,q:2,a:.04,d:.22,peak:.45})},shield:(u,p,x)=>{[880,1320,1760].forEach((m,g)=>c(u,p,x+g*.03,{type:"sine",f0:m,d:.45,peak:.09}))},boom:(u,p,x,m=1)=>{l(u,p,x,{f0:900,f1:80,a:.004,d:.9,peak:.8*m}),c(u,p,x,{f0:90,f1:28,d:.8,peak:.8*m})},whistle:(u,p,x)=>{c(u,p,x,{type:"sine",f0:1900,f1:500,a:.05,d:.95,peak:.07})},coin:(u,p,x)=>{c(u,p,x,{type:"square",f0:988,d:.07,peak:.1}),c(u,p,x+.07,{type:"square",f0:1319,d:.28,peak:.1})},power:(u,p,x)=>{[523,659,784,1047].forEach((m,g)=>c(u,p,x+g*.05,{type:"triangle",f0:m,d:.3,peak:.14})),l(u,p,x,{type:"highpass",f0:2e3,f1:6e3,a:.1,d:.4,peak:.12})},heal:(u,p,x)=>{[660,880,1100].forEach((m,g)=>c(u,p,x+g*.06,{f0:m,d:.25,peak:.08}))},beep:(u,p,x)=>{c(u,p,x,{f0:880,d:.12,peak:.22})},go:(u,p,x)=>{c(u,p,x,{type:"sawtooth",f0:660,d:.5,peak:.12}),c(u,p,x,{type:"square",f0:1320,d:.5,peak:.08}),l(u,p,x,{f0:4e3,f1:500,d:.4,peak:.25})},land:(u,p,x)=>{c(u,p,x,{f0:120,f1:50,d:.12,peak:.3}),l(u,p,x,{f0:600,d:.1,peak:.15})},spin:(u,p,x)=>{l(u,p,x,{type:"bandpass",f0:300,f1:2400,q:3,a:.08,d:.35,peak:.5}),h.punch(u,p,x+.25,1.1)},cheer:(u,p,x)=>{l(u,p,x,{type:"bandpass",f0:1200,f1:1500,q:.6,a:.25,d:2.2,peak:.35}),l(u,p,x+.1,{type:"bandpass",f0:2600,f1:2200,q:.8,a:.3,d:2,peak:.18})},fanfare:(u,p,x)=>{[[523,0],[659,.12],[784,.24],[1047,.38],[784,.6],[1047,.72]].forEach(([m,g],v)=>{c(u,p,x+g,{type:"sawtooth",f0:m,d:v===5?.9:.16,peak:.07}),c(u,p,x+g,{type:"triangle",f0:m*2,d:v===5?.9:.16,peak:.05})}),h.cheer(u,p,x+.2)},nuke:(u,p,x)=>{h.boom(u,p,x,1.3),h.boom(u,p,x+.25,1),c(u,p,x,{type:"sawtooth",f0:220,f1:40,d:1.6,peak:.25})},pop:(u,p,x)=>{c(u,p,x,{f0:500,f1:1400,d:.07,peak:.15})},creak:(u,p,x)=>{c(u,p,x,{type:"sawtooth",f0:95,f1:140,a:.08,d:.7,peak:.07,det:8}),c(u,p,x+.05,{type:"square",f0:190,f1:120,a:.1,d:.6,peak:.03}),l(u,p,x,{type:"bandpass",f0:900,f1:500,q:6,a:.1,d:.6,peak:.12})},ghost:(u,p,x)=>{c(u,p,x,{type:"sine",f0:520,f1:760,a:.25,d:.9,peak:.08,det:15}),c(u,p,x+.1,{type:"sine",f0:780,f1:500,a:.3,d:.9,peak:.05})},thunder:(u,p,x)=>{l(u,p,x,{f0:500,f1:60,a:.02,d:1.8,peak:.6}),l(u,p,x+.15,{f0:250,f1:50,a:.1,d:1.6,peak:.45})},bell:(u,p,x)=>{[[110,.25],[220,.12],[277,.07],[330,.06],[440,.04]].forEach(([m,g])=>c(u,p,x,{type:"sine",f0:m,a:.004,d:2.6,peak:g}))},organ:(u,p,x)=>{[[147,0],[175,0],[220,0],[294,.02],[131,.6],[165,.6],[196,.6],[262,.62]].forEach(([m,g])=>{c(u,p,x+g,{type:"sawtooth",f0:m,a:.04,d:g?.9:.55,peak:.035}),c(u,p,x+g,{type:"triangle",f0:m*2,a:.04,d:g?.9:.55,peak:.03})})},heart:(u,p,x)=>{c(u,p,x,{f0:70,f1:45,d:.12,peak:.45}),c(u,p,x+.17,{f0:62,f1:40,d:.14,peak:.35})},chime:(u,p,x)=>{[1319,1568,1976,2637].forEach((m,g)=>c(u,p,x+g*.07,{type:"sine",f0:m,d:.6,peak:.07}))},trap:(u,p,x)=>{l(u,p,x,{type:"bandpass",f0:3e3,f1:300,q:1.5,a:.01,d:.35,peak:.4}),h.boom(u,p,x+.22,.7)},shatter:(u,p,x)=>{for(let m=0;m<6;m++)c(u,p,x+m*.035,{type:"triangle",f0:2200+m*430,f1:1800,d:.12,peak:.06});l(u,p,x,{type:"highpass",f0:4e3,d:.4,peak:.3})},wind:(u,p,x)=>{l(u,p,x,{type:"bandpass",f0:380,f1:700,q:4,a:.9,d:2.2,peak:.12})},squeak:(u,p,x)=>{c(u,p,x,{type:"triangle",f0:900,f1:1300,d:.08,peak:.07})},roar:(u,p,x)=>{c(u,p,x,{type:"sawtooth",f0:120,f1:60,a:.05,d:.9,peak:.16,det:20}),l(u,p,x,{type:"lowpass",f0:1200,f1:300,a:.05,d:.9,peak:.35})}},d={squeak:.06,ghost:.25,heart:.3,punch:.045,crit:.06,block:.08,ko:.08,heal:.15,land:.06,pop:.05,coin:.05,boom:.06};t.sfx=(u,p=t.now(),x=1)=>{if(t.muted||!h[u])return;let m=d[u]||.03;if(t.last[u]&&p-t.last[u]<m)return;if(t.last[u]=p,e){t.cues.push({k:"sfx",kind:u,t:p,v:x});return}let g=t.ctx;if(!(!g||g.state!=="running"))try{h[u](g,t.sfxGain,g.currentTime+.01,x)}catch{}},t.now=()=>e?t.clock():t.ctx?t.ctx.currentTime:0,t.clock=()=>0;let f=null;return t.voice=async(u,p)=>{if(t.muted||!u)return!1;if(t.speakingUntil=t.now()+(p||2),e)return t.cues.push({k:"voice",url:u,t:t.now(),dur:p}),!0;let x=t.ctx;if(x&&x.state!=="running"&&t.resume(),x&&x.state==="running")try{let m=await fetch(u).then(_=>{if(!_.ok)throw new Error("HTTP "+_.status);return _.arrayBuffer()}),g=await new Promise((_,w)=>{let y=x.decodeAudioData(m,_,w);y&&y.catch&&y.catch(w)});if(f)try{f.stop()}catch{}let v=x.createBufferSource();v.buffer=g,v.connect(t.voiceGain);let M=x.currentTime+.02;return t.sfxGain.gain.setTargetAtTime(.28,M,.05),t.sfxGain.gain.setTargetAtTime(.55,M+g.duration,.2),v.start(M),f=v,t.played++,v.onended=()=>{f===v&&(f=null)},!0}catch{t.fails++}try{return n.src=u,await n.play(),t.played++,!0}catch{return t.fails++,!1}},t.mix=async(u,p=44100)=>{let x=window.OfflineAudioContext||window.webkitOfflineAudioContext,m=new x(2,Math.ceil(u*p),p),g={};r(m,m.destination,g);let v=t.cues.filter(U=>U.k==="voice"),M=await Promise.all(v.map(U=>fetch(U.url).then(k=>k.arrayBuffer()).then(k=>m.decodeAudioData(k)).catch(()=>null)));for(let U of t.cues)if(U.k==="sfx"&&U.t<u)try{h[U.kind](m,g.sfxGain,U.t+.01,U.v)}catch{}v.forEach((U,k)=>{let N=M[k];if(!N||U.t>=u)return;let K=m.createBufferSource();K.buffer=N,K.connect(g.voiceGain),K.start(U.t+.02),g.sfxGain.gain.setTargetAtTime(.28,U.t,.05),g.sfxGain.gain.setTargetAtTime(.55,U.t+N.duration,.2)});let _=await m.startRendering(),w=_.length,y=[_.getChannelData(0),_.getChannelData(1)],b=new DataView(new ArrayBuffer(44+w*4)),S=(U,k)=>{for(let N=0;N<k.length;N++)b.setUint8(U+N,k.charCodeAt(N))};S(0,"RIFF"),b.setUint32(4,36+w*4,!0),S(8,"WAVEfmt "),b.setUint32(16,16,!0),b.setUint16(20,1,!0),b.setUint16(22,2,!0),b.setUint32(24,p,!0),b.setUint32(28,p*4,!0),b.setUint16(32,4,!0),b.setUint16(34,16,!0),S(36,"data"),b.setUint32(40,w*4,!0);let D=44;for(let U=0;U<w;U++)for(let k=0;k<2;k++){let N=Math.max(-1,Math.min(1,y[k][U]));b.setInt16(D,N*32767,!0),D+=2}let I=new Uint8Array(b.buffer),F="";for(let U=0;U<I.length;U+=32768)F+=String.fromCharCode.apply(null,I.subarray(U,U+32768));return btoa(F)},t}function Tm(s,{off:e=!1}={}){let t=Math.random().toString(36).slice(2,8),n=performance.now(),i=[];addEventListener("error",o=>{i.push(String(o.message||"error").slice(0,110)),i.length>3&&i.shift()}),addEventListener("unhandledrejection",o=>{i.push(("rej "+(o.reason&&o.reason.message||o.reason)).slice(0,110)),i.length>3&&i.shift()});let r=o=>{let c=s();return{id:t,reason:o,up:(performance.now()-n)/1e3,ua:navigator.userAgent.slice(0,160),scr:{w:screen.width,h:screen.height,dpr:devicePixelRatio},vis:document.visibilityState,errs:i.slice(),...c,mem:{...c.mem||{},heap:performance.memory?performance.memory.usedJSHeapSize/1048576:void 0}}},a=o=>{if(e)return;let c=r(o),l=JSON.stringify(c);if(o==="start")try{let h=JSON.parse(localStorage.getItem("lg_diagLast")||"null");h&&h.reason!=="pagehide"&&(l=JSON.stringify({...c,prev:h}))}catch{}try{localStorage.setItem("lg_diagLast",JSON.stringify(c))}catch{}try{navigator.sendBeacon&&navigator.sendBeacon("/diag",new Blob([l],{type:"text/plain"}))||fetch("/diag",{method:"POST",body:l,keepalive:!0}).catch(()=>{})}catch{}};return setTimeout(()=>a("start"),4e3),setInterval(()=>a("tick"),3e4),document.addEventListener("visibilitychange",()=>{document.hidden&&a("hidden")}),addEventListener("pagehide",()=>a("pagehide")),{send:a,errs:i}}var Da=(s,e)=>s[Math.floor(e()*s.length)%s.length],Go=s=>s>=1e9?`${(Math.floor(s/1e7)/100).toString()} billion`:s>=1e6?`${Math.round(s/1e6)} million`:`${Math.max(0,Math.round(s)).toLocaleString("en-US")}`,Ef=s=>(s.charAt(0)+s.slice(1).toLowerCase()).replace("mastermind","Mastermind"),Fr=[125e7,1e9,75e7,5e8,25e7,1e8],Ty={scientist:"He was a father once. Now the book speaks through him. The Corrupted Scientist... walks out of the rift!",scientist2:"The stone has fused with his heart. The Scientist... unbound! Hit him with everything!",mastermind:"At last. The one who stole five billion souls. The Mastermind... steps into the light!"},Ay={scientist:"The Corrupted Scientist falls back into the dark. For a moment... he remembers his daughter.",scientist2:"The Scientist is broken! The stone cracks... and the rift screams.",mastermind:"The Mastermind is destroyed!"};function Am({nameOf:s,rng:e=Math.random,survivors:t=()=>15e8}){let n=[],i=0,r=0,a=(p,x,m,g={})=>({text:p,pri:x,banner:m||null,...g}),o={gather:["To defend the wall, comment mage, warrior, archer or healer. Or just comment anything to join.","Mages throw fire. Warriors hold the gate. Archers shoot the flying wraiths. Healers keep everyone alive.","Likes charge the Ascension barrier. Keep tapping the screen!","Gifts are power. Any small gift fires a spell volley. Five coins carves a shield rune. Thirty coins summons a golden guardian.","One hundred coins awakens the Ascension ultimate. Five hundred coins calls the dragon!","Follow for a blessing. Share the live and the fallen rise again."],fight:["Likes charge the barrier! Tap, tap, tap!","Comment a class to switch: mage, warrior, archer or healer.","Send a gift for a spell volley right now!","Every survivor counts. Do not let them reach the wall!"]},c="gather",l=-99,h=0,d={gather:0,fight:0},f={gather:[5,7],fight:[10,15]},u=p=>{let x=p.map(s).filter(Boolean);if(!x.length)return"";let m=x.slice(0,3),g=x.length-m.length;return(m.length===1?m[0]:m.slice(0,-1).join(", ")+" and "+m[m.length-1])+(g>0?` and ${g} more`:"")};return{lines(p,x){let m=[];for(let _ of p){let w=_.id?s(_.id):null,y={intro:"other",gather:"gather",wave:"fight",boss:"other",vote:"other",end:"other",clear:"fight"}[_.k];switch(y&&(c=y),_.k){case"intro":r=0;break;case"lore":m.push(a($i[_.i].say,10,null,{win:1,lore:_.i}));break;case"gather":m.push(a(Da(["Survivors, to the wall! Comment mage, warrior, archer or healer to take your post.","The citadel needs you. Comment to join the defense. Pick a class: mage, warrior, archer, healer."],e),8,"TO THE WALL!",{win:1}));break;case"chapter":m.push(a(`Chapter ${_.n}. ${_.title.toLowerCase().replace(/(^|\s)\S/g,b=>b.toUpperCase())}.`,9,`CHAPTER ${_.n}`,{win:1}));break;case"wave":m.push(a(_.i===1?Da(["They are coming. Hold the wall!","The rift opens wide. Here they come!"],e):Da([`Wave ${_.n}. Stronger. Hungrier.`,`Wave ${_.n}! Keep firing!`,"Another wave pours out of the rift."],e),5,`WAVE ${_.n}`));break;case"clear":m.push(a(Da(["The field is clear. Breathe.","Wave broken. Well fought, survivors.","They fall back. Ready yourselves."],e),4,"WAVE CLEARED"));break;case"boss":m.push(a(Ty[_.id]||`${_.name} has come!`,10,"BOSS!",{win:1}));break;case"bossatk":_.kind==="summon"?m.push(a("He calls more creatures from the rift!",5)):_.downed&&_.downed.length>2&&m.push(a(_.blocked?"The barrier holds against the blast!":"A dark blast hits the wall! Healers, raise them!",6));break;case"bossdown":{let b=_.by?s(_.by):null;m.push(a(`${Ay[_.id]||`${_.name} is defeated!`}${b?` Final blow: ${b}!`:""}`,10,"BOSS DEFEATED!",{win:1}));break}case"retreat":m.push(a(`${_.name} retreats into the rift... and drags souls with him.`,9,"SOULS TAKEN"));break;case"toll":m.push(a(`${Go(_.n)} souls taken.`,6));break;case"vote":if(_.start){let b=Qi[_.i];m.push(a(`${Ef(b.q)}. ${Ef(b.a.label)}? Comment one. Or ${b.b.label.toLowerCase()}? Comment two. Choose!`,10,"VOTE!",{win:1}))}break;case"choice":{let b=Qi[_.i],S=b[_.key===b.a.key?"a":"b"];m.push(a(`${_.none?"Nobody chose. Fate decides. ":"The survivors have chosen. "}${Ef(S.label)}. ${jl[_.key].text}`,10,S.label,{win:1}));break}case"end":{let b=(_.top||[]).map(s).filter(Boolean),S=_.saved?(em[(_.choices||[]).join("-")]||"Earth is saved. {n} survivors live on.").replace("{n}",Go(_.survivors)):`The last light goes out. Earth has fallen... on wave ${_.wave}.`;m.push(a(`${_.saved?"Earth is saved! ":""}${S}${b.length?` Top defender: ${b[0]}! Shoutout to ${b[0]}!`:""} ${_.saved?"The Ascension System remembers you.":"But the Ascension System will rise again."}`,10,_.saved?"EARTH SAVED":"EARTH FELL",{win:1}));break}case"gift":{let b={volley:_.coins>=2?`${w} unleashes a spell volley!`:null,rune:`${w} carves a shield rune into the wall!`,guardian:_.extended?`${w} renews a guardian's oath!`:`${w} summons a guardian hero to the gate!`,awaken:_.cool?`${w} ascends! Power times three!`:`${w} awakens the Ascension System! Ultimate!`,dragon:_.judgment?`${w} calls the dragon! Judgment on the boss!`:`${w} summons a dragon! Burn them all!`}[_.tier];b&&m.push(a(b,{volley:4,rune:6,guardian:8,awaken:9,dragon:10}[_.tier],{volley:null,rune:"SHIELD RUNE",guardian:"GUARDIAN!",awaken:"ASCENSION!",dragon:_.judgment?"JUDGMENT!":"DRAGON!"}[_.tier],{gift:_.tier}));break}case"bless":m.push(a(_.why==="follow"?`${w} follows. A blessing of light upon you.`:`${w} shares the signal! The fallen rise and the barrier glows!`,4));break;case"pulse":m.push(a("The likes charge the barrier! Ascension pulse!",7,"ASCENSION PULSE"));break;case"class":!_.bot&&w&&e()<.35&&m.push(a(`${w} becomes ${/^[aeiou]/i.test(Zi[_.c].label)?"an":"a"} ${Zi[_.c].label.toLowerCase()}.`,2));break;case"join":_.bot||n.push(_.id);break}}let g=t();for(;r<Fr.length&&g<Fr[r];)g>0&&(r+1>=Fr.length||g>=Fr[r+1])&&m.push(a(Da([`Only ${Go(Fr[r])} survivors left. Hold on!`,`We are down to ${Go(Fr[r])}. Do not let them through!`],e),7,`${Go(Fr[r]).toUpperCase()} LEFT`)),r++;if(n.length&&x-i>6){i=x;let _=n.splice(0,60);m.push(a(Da([`${u(_)} join the defense.`,`Welcome to the wall, ${u(_)}.`],e),2))}m.length&&(l=x);let v=o[c],M=f[c];return v&&!m.length&&x-l>M[0]&&x-h>M[1]&&(h=x,l=x,m.push(a(v[d[c]++%v.length],2,null,{tip:1}))),m}}}var Em=["Sara","Ali","Hina","Omar","Zara","Bilal","Noor","Ayan","Esha","Faraz","Iman","Junaid","Kinza","Laiba","Moiz","Nimra","Rida","Saad","Tania","Umer","Maya","Leo","Aisha","Yusuf","Lina","Kai","Mia","Zain","Sofia","Adam","Hamza","Amna","Riya","Dev","Luna","Max"],Rm=["","_x","22",".official","_99","\u{1F338}","xo","_07",".live","\u2728","_pk","786"],Cm=["hi","join","lets go","me!","hello from dubai","gg","this is fire","shield","dash","\u{1F4A8}","\u{1F6E1}\uFE0F","dance","color pink","color gold","revenge","wow","\u{1F525}\u{1F525}","i will win","play","1","2","3","2","left","right","3\uFE0F\u20E3","candle","clock","echo","map","attack","mage","warrior","archer","healer","\u{1F52E}","\u{1F3F9}","seal","hunt","city","army"],Pm=[["Rose",1],["TikTok",1],["Finger Heart",5],["GG",1],["Doughnut",30],["Hand Hearts",100],["Corgi",299],["Money Gun",500],["Lion",29999]];function Im(s="busy",e=Math.random){let t=l=>Math.floor(e()*l),n=[],i=()=>{let l=Em[t(Em.length)]+Rm[t(Rm.length)],h={uid:l.toLowerCase().replace(/[^\w.]/g,"")+n.length,name:l};return n.push(h),h},r=()=>n.length?n[t(n.length)]:i(),a=0,o=0,c=s==="quiet"?3:s==="gifts"?30:s==="demo"?40:220;return{people:n,tick(l){a+=l,o+=l;let h=[],d=s==="quiet"?.6:s==="busy"?Math.min(14,2+a/6):s==="demo"?5:4;for(;o>1/d;){o-=1/d;let u=n.length<Math.min(c,s==="busy"?10+a*2.5:c)&&e()<.6?i():r(),p=e();if(p<.5){let x=Cm[t(Cm.length)];if(e()<.25&&n.length>2){let m=r();m!==u&&(x=(e()<.5?"attack ":"\u2694\uFE0F ")+m.name.replace(/[^\w]/g,"").slice(0,6))}h.push({type:"chat",uid:u.uid,name:u.name,text:x})}else if(p<.8)h.push({type:"like",uid:u.uid,name:u.name,count:1+t(15)});else if(p<(s==="gifts"?.98:.9)){let x=e()<.75?Pm[t(4)]:Pm[4+t(s==="gifts"?4:3)];h.push({type:"gift",uid:u.uid,name:u.name,giftName:x[0],coins:x[1],count:e()<.2?1+t(5):1})}else p<.95?h.push({type:"follow",uid:u.uid,name:u.name}):h.push({type:"share",uid:u.uid,name:u.name})}return h}}}var sn=new URLSearchParams(location.search),qn=s=>document.getElementById(s),ph=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Xo=sn.get("mode")==="phone"||sn.get("mode")!=="pc"&&(ph||/Android|Mobile/.test(navigator.userAgent)),Si=sn.get("render")==="1",Fa=Si||sn.get("local")==="1",kf=sn.get("key")||"",jo=Number(sn.get("fps"))||(Xo?30:60),Km=sn.get("mute")==="1";sn.get("clean")==="1"&&document.body.classList.add("clean");var Jm=Xo?[{pr:1.5,maxW:780,labels:12,particles:1,dust:!0,props:!0,chars:36,animLod:1},{pr:1.25,maxW:700,labels:10,particles:.75,dust:!0,props:!0,chars:30,animLod:1},{pr:1,maxW:600,labels:8,particles:.5,dust:!1,props:!0,chars:24,animLod:2},{pr:.8,maxW:480,labels:6,particles:.35,dust:!1,props:!1,chars:16,animLod:2}]:[{pr:2,maxW:Number(sn.get("maxw"))||1080,labels:14,particles:1,dust:!0,props:!0,chars:60,animLod:1},{pr:1.5,maxW:900,labels:12,particles:1,dust:!0,props:!0,chars:48,animLod:1},{pr:1,maxW:700,labels:10,particles:.6,dust:!1,props:!0,chars:36,animLod:2},{pr:.8,maxW:540,labels:8,particles:.4,dust:!1,props:!1,chars:24,animLod:2}],Zn=sn.has("q")?Math.max(0,Math.min(3,Number(sn.get("q")))):0,Ey=sn.has("q"),ts=qn("gl"),bt=null,Ym=0,Zm=0,ah=[],Zs=!1,Br=qn("hud"),Ee=Br.getContext("2d");function $m(){if(!(sn.get("view")==="2d"||localStorage.getItem("lg_force2d")==="1"))try{bt=ym(ts,{maxChars:70,particles:Xo?800:1200,aa:!Xo||ph,preserve:Si}),bt.ready&&bt.ready.catch(()=>ki("models-fail")),ts.addEventListener("webglcontextlost",Ko,!1),ts.addEventListener("webglcontextrestored",Qm,!1);return}catch{ki("gl-fail")}mh()}function mh(){if(bt&&bt.kind==="2d")return;try{bt&&bt.dispose(),bt&&bt.loseContext&&bt.loseContext()}catch{}let s=document.createElement("canvas");s.id="gl",ts.replaceWith(s),ts=s,bt=Sm(ts,{}),ki("view-2d"),$s()}function Ko(s){s.preventDefault(),Ym++,Zs=!0,ki("ctx-lost"),ah.push(performance.now()),ah=ah.filter(e=>performance.now()-e<12e4),a0(),clearTimeout(Ko.t),Ko.t=setTimeout(()=>{Zs&&(localStorage.setItem("lg_force2d","1"),mh(),Zs=!1,dh())},4e3),Hf&&Hf.send("ctxlost")}function Qm(){if(clearTimeout(Ko.t),Zm++,ki("ctx-restored"),ah.length>=3){localStorage.setItem("lg_force2d","1"),mh(),Zs=!1,dh();return}try{bt.dispose()}catch{}ts.removeEventListener("webglcontextlost",Ko),ts.removeEventListener("webglcontextrestored",Qm),bt=null,$m(),Zn=Math.min(3,Zn+1),$s(),Zs=!1,dh()}var hh=390,Jo=844;function $s(){let s=window.innerWidth,e=window.innerHeight,t=qn("stage"),n=s,i=e;s/e>.7&&(n=Math.round(Math.min(s,e*9/16)),i=Math.round(Math.min(e,n*16/9))),t.style.width=n+"px",t.style.height=i+"px",hh=n,Jo=i,document.documentElement.style.setProperty("--u",(n/100).toFixed(3)+"px");let r=Jm[Zn],a=window.devicePixelRatio||1,o=Math.min(a,r.pr,r.maxW/n);bt&&(bt.resize(n,i,o),bt.setQuality(r));let c=Math.min(a,2,900/n);Br.width=Math.round(n*c),Br.height=Math.round(i*c),Br.__pr=c}addEventListener("resize",()=>{clearTimeout($s.t),$s.t=setTimeout($s,120)});var Tn=wm({record:Si});Tn.muted=Km;var e0=qn("soundChip");function Ry(){Tn.unlock(),setTimeout(()=>{Tn.state()==="running"&&(e0.hidden=!0)},200)}["pointerdown","touchstart","click","keydown"].forEach(s=>addEventListener(s,Ry,{passive:!0}));document.addEventListener("visibilitychange",()=>{document.hidden||Tn.resume()});!Si&&!Km&&(Tn.unlock(),setTimeout(()=>{Tn.state()!=="running"&&(e0.hidden=!1)},700));var Qs=new Map,oh=[],ki=s=>{oh.push(s),oh.length>8&&oh.shift()},ns={ws:0,snaps:0,ev:0,err:0,say:0},$n=[],As=null,Lm=0,Dm="",Nm=Bo,Vf=null,ih="",wn={phase:"intro",members:[],enemies:[],allies:[],tl:0,pd:1,ch:1,wv:0,wi:0,sv:15e8,bar:0,hype:0,vi:-1,vc:[0,0],cho:[],left:0,n:0,run:0,bo:null,best:0,saves:0},Fm=-1,Cy=0,uh=null,fh=null;function Uf(s=[],e=[]){for(let t of e)Qs.delete(t);for(let t of s)Qs.set(t.id,t)}var Fi=null,Ho=1e3;function Of(){let s=(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws?game=siege"+(kf?"&key="+encodeURIComponent(kf):"");try{Fi=new WebSocket(s)}catch{return setTimeout(Of,Ho)}Fi.onopen=()=>{ns.ws++,Ho=1e3,ki("ws-open"),dh();try{let e=JSON.parse(localStorage.getItem("lg_siegeBoard")||"null");e&&e.json&&e.sig&&Fi.send(JSON.stringify({t:"restore",json:e.json,sig:e.sig}))}catch{}},Fi.onmessage=e=>{let t;try{t=JSON.parse(e.data)}catch{return}Py(t)},Fi.onclose=()=>{Fi=null,ki("ws-close"),setTimeout(Of,Ho),Ho=Math.min(1e4,Ho*1.7),ns.ws&&a0()},Fi.onerror=()=>{}}function Py(s){switch(s.t){case"hello":Qs.clear(),Uf(s.roster),$n=[],As=null,Nm=s.tiers||Nm,Vm(s),km(s.snap);break;case"roster":Uf(s.add,s.del);break;case"s":km(s);break;case"say":i0(s.text,s.url,s.dur);break;case"banner":break;case"board":Vm(s);break;case"status":ih=s.tiktok?.state||"",qn("conn").className=ih==="connected"?"connected":/wait|connecting|reconnect/.test(ih)?"waiting":ih==="error"?"error":"",Zy(s.tiktok);break}}function km(s){if(!s)return;ns.snaps++;let t=performance.now()/1e3-s.tm;As===null||t<As||Math.abs(t-As)>2?As=t:As+=(t-As)*.02,$n.length&&s.tm<$n[$n.length-1].tm-1&&($n=[],As=t),$n.push({tm:s.tm,s,done:!1}),$n.length>40&&$n.shift()}var Iy=.16;function Ly(s){if(!$n.length)return wn;let e=s-As-Iy;for(let r of $n)if(!r.done&&r.tm<=e){r.done=!0;let a=e-r.tm>1.2;for(let o of r.s.ev||[])n0(o,a)}let t=$n[0],n=null;for(let r=0;r<$n.length;r++)if($n[r].tm<=e)t=$n[r];else{n=$n[r];break}if(!n||n===t)return Bf(t.s,null,0);let i=Math.max(0,Math.min(1,(e-t.tm)/Math.max(.001,n.tm-t.tm)));return Bf(t.s,n.s,i)}var Dy=[],Ny=[],Fy=[],ky={name:"?",color:16777215};function Rf(s,e,t,n,i,r){let a=[],o=new Map;if(e)for(let l=0;l<e.length;l+=n)o.set(e[l],l);let c=0;for(let l=0;l<s.length;l+=n){let h=i[c]||(i[c]={});c++;let d=e?o.get(s[l]):void 0;r(h,s,l,d!==void 0?e:null,d,t),a.push(h)}return a}function Bf(s,e,t){let n=Rf(s.f,e&&e.f,t,5,Dy,(c,l,h,d,f,u)=>{if(c.id=l[h],c.x=l[h+1],c.z=l[h+2],c.cls=l[h+3]&3,c.flags=l[h+3]>>Xu,c.hp=l[h+4],d){let p=d[f+1]-c.x,x=d[f+2]-c.z;Math.abs(p)+Math.abs(x)<4&&(c.x+=p*u,c.z+=x*u)}c.info=Qs.get(c.id)||ky}),i=Rf(s.e,e&&e.e,t,5,Ny,(c,l,h,d,f,u)=>{c.id=l[h],c.k=l[h+1],c.x=l[h+2],c.z=l[h+3],c.hp=l[h+4],d&&(c.x+=(d[f+2]-c.x)*u,c.z+=(d[f+3]-c.z)*u)}),r=Rf(s.al,e&&e.al,t,4,Fy,(c,l,h,d,f,u)=>{c.id=l[h],c.k=l[h+1],c.x=l[h+2],c.z=l[h+3],d&&(c.x+=(d[f+2]-c.x)*u,c.z+=(d[f+3]-c.z)*u)}),a=e&&t>.5?e:s;a.ph!==Dm&&(Dm=a.ph,Lm=gh());let o=a.bo;return o&&e&&s.bo&&e.bo&&(o={...a.bo,hp:s.bo.hp+(e.bo.hp-s.bo.hp)*t}),wn={phase:a.ph,members:n,enemies:i,allies:r,tl:a.tl,pd:a.pd,ch:a.ch,wv:a.wv,wi:a.wi,sv:a.sv,bar:e?s.bar+(e.bar-s.bar)*t:s.bar,hype:a.hype,vi:a.vi,vc:a.vc,cho:a.cho,left:a.left,n:a.n,run:a.run,bo:o,best:a.best,saves:a.saves,phaseStart:Lm},wn}var hi=null,zf=null,t0=null,Ys=[],Um=0,Gf=0;function Uy(){let s={};for(let n of["introSeconds","gatherSeconds","chapterSeconds","breakSeconds","victorySeconds","voteSeconds","choiceSeconds","endingSeconds","minDefenders","spawnMul","enemyHpMul","dmgMul","startChapter","startWave","waveCap","bossCap","likePulse"])sn.has(n)&&(s[n]=Number(sn.get(n)));sn.get("lore")&&(s.loreCards=sn.get("lore").split(",").map(Number).filter(n=>n>=0&&n<$i.length)),sn.get("bots")==="0"&&(s.bots=!1);let e=Number(sn.get("seed")||7),t=()=>(e=e*16807%2147483647,(e-1)/2147483646);hi=new Yl(s,Si?t:Math.random),t0=Am({nameOf:n=>hi.byId.get(n)?.name||null,rng:Si?t:Math.random,survivors:()=>hi.survivors}),sn.get("crowd")&&(zf=Im(sn.get("crowd"),Si?t:Math.random)),window.__input=n=>hi.input(n),window.__siege=hi}var Cf=0;function Oy(s,e){if(zf)for(let r of zf.tick(s))hi.input(r);for(Cf+=s;Cf>=.05;)Cf-=.05,hi.step(.05);let t=hi.drainRoster();Uf(t.add,t.del);let n=hi.drain();for(let r of t0.lines(n,hi.t))By(r,e);let i=hi.snapshot();for(let r of n)n0(r,!1);return n.some(r=>r.k==="end"||r.k==="bossdown")&&(Vf={session:hi.board(8),all:[],saves:hi.saves}),Bf(i,null,0)}function By(s,e){let t={...s,at:e,p:null};for(t.p=fetch("/api/say?voice=narrator&text="+encodeURIComponent(s.text)).then(n=>n.json()).catch(()=>({url:null})),Gf++,t.p.finally(()=>Gf--),Ys.push(t),Ys.sort((n,i)=>i.pri-n.pri||n.at-i.at);Ys.length>4;)Ys.pop()}async function Wo(s){if(s<Um||!Ys.length||Wo.busy)return;let e=Ys.shift();if(!e.win&&s-e.at>(e.pri>=7?9:6))return;Wo.busy=!0;let t=await e.p;Wo.busy=!1;let n=gh(),i=t.dur||Math.min(7,.9+e.text.length/14);i0(e.text,t.url,i),Um=n+i+.25}var zy=s=>Qs.get(s)?.name||"?",Gy=s=>"#"+((Qs.get(s)?.color??16777215)>>>0).toString(16).padStart(6,"0");var Om=0,Bm=0,zm=0,Gm=0;function n0(s,e){if(ns.ev++,!e&&bt&&!Zs)try{bt.fx(s,wn)}catch{ns.err++}let t=(i,r)=>{e||Tn.sfx(i,Tn.now(),r)},n=gh();switch(s.k){case"intro":t("wind"),t("organ",.6),uh=null,fh=null,ch(-1),document.body.classList.add("cine");break;case"lore":t("bell",.5),t("whistle",.3),ch(s.i,s.sec);break;case"gather":t("go"),ch(-1),document.body.classList.remove("cine");break;case"chapter":t("bell"),t("organ");break;case"wave":t("roar",.6),t("heart",.6);break;case"clear":t("chime"),t("cheer",.5);break;case"boss":t("roar"),t("organ"),t("thunder");break;case"bossatk":t(s.kind==="summon"?"roar":"boom",s.blocked?.6:1),s.blocked&&t("shield"),!s.blocked&&s.kind!=="summon"&&kr(.35);break;case"bossdown":t("nuke"),t("fanfare"),t("cheer"),kr(.8);break;case"retreat":t("ghost"),t("thunder"),kr(.4);break;case"victory":break;case"vote":s.start?(t("chime"),t("organ",.5)):n-zm>.12&&(zm=n,t("squeak",.35));break;case"choice":t("fanfare",.7),t("bell"),fh=s;break;case"shot":n-Om>.07&&(Om=n,t(s.c==="a"?"dash":s.c==="w"||s.c==="g"?"punch":s.c==="h"?"heal":"pop",s.c==="a"?.25:.35));break;case"dmg":{s.c&&n-Bm>.06&&(Bm=n,t(s.c===2?"crit":"punch",s.c===2?.8:.4));break}case"kill":n-Gm>.09&&(Gm=n,t(s.q===1?"boom":"pop",s.q===1?.7:.4));break;case"wallhit":t("boom",.5),t("shatter",.3);break;case"block":t("shield",.4);break;case"toll":t("trap"),t("ghost"),kr(.5);break;case"down":t("ko",.4);break;case"rise":t("heal",.4);break;case"heal":break;case"gift":t("coin"),t(s.tier==="dragon"?"roar":s.tier==="awaken"?"nuke":s.tier==="guardian"?"land":"power",s.tier==="volley"?.5:1),(s.tier==="awaken"||s.tier==="dragon")&&kr(.6);break;case"ult":t("nuke"),kr(.5);break;case"pulse":t("shield"),t("cheer",.5);break;case"bless":t("power",.7);break;case"class":break;case"ally":break;case"end":t(s.saved?"fanfare":"thunder"),t(s.saved?"cheer":"ghost"),s.saved&&t("bell"),kr(.9),uh=s,Hy(s);break}["shot","dmg","kill","vote","heal"].includes(s.k)||ki(s.k)}function gh(){return Si?Na:performance.now()/1e3}function kr(s=.7){let e=qn("flash");e.style.transition="none",e.style.opacity=String(s),e.offsetWidth,e.style.transition="opacity 0.9s ease-out",e.style.opacity="0"}var Hm=0;function i0(s,e,t){ns.say++;let n=Math.max(1800,(t||2)*1e3+600);clearTimeout(Hm),Hm=Ky(()=>{},n),e&&Tn.voice(e,t)}function ch(s,e=5){let t=qn("lore");if(s<0){t.hidden=!0,Fm=-1;return}let n=$i[s];Fm=s,Cy=gh(),t.hidden=!1,t.className="art-"+n.art,t.style.setProperty("--sec",e+"s"),qn("loreArt").style.backgroundImage=`url(/siege/lore-${n.art}.jpg), radial-gradient(circle at 50% 45%, #6a20b0, #1a0630 70%)`,t.classList.remove("play"),t.offsetWidth,t.classList.add("play")}var s0=(s,e=10)=>(s=String(s||"?").replace(/\s+/g," ").trim(),[...s].length>e?[...s].slice(0,e-1).join("")+"\u2026":s);function Hy(s){let e=qn("winner");e.className=s.saved?"saved":"fell",qn("winIcon").textContent=s.saved?"\u{1F305}":"\u{1F311}";let t=(s.top||[]).filter(n=>Qs.has(n));qn("winName").textContent=t.length?s0(zy(t[0]),18):"",t.length&&(qn("winName").style.color=Gy(t[0])),e.hidden=!1,e.style.animation="none",e.offsetWidth,e.style.animation=""}function Vm(s){if(!(!s||!s.session&&!s.all)&&(Vf=s,s.signed))try{localStorage.setItem("lg_siegeBoard",JSON.stringify(s.signed))}catch{}}var Wm="",sh={};function Vy(s){let e=Br.__pr||1,t=hh/100;if(Ee.setTransform(1,0,0,1,0,0),Ee.clearRect(0,0,Br.width,Br.height),Ee.setTransform(e,0,0,e,0,0),!bt||Zs)return;let n=wn,i=Jm[Zn];Ee.textAlign="center",Ee.textBaseline="middle",Ee.lineJoin="round";let r=(f,u)=>`${f} ${u}px -apple-system, "Segoe UI", Roboto, sans-serif`;if(n.phase==="intro")return;let o=(bt.drawn()||[]).map(f=>({f,s:(f.flags&Tt.cmd?8:0)+(f.flags&Tt.crown?7:0)+(f.flags&Tt.gift?6:0)+(f.flags&Tt.asc?5:0)+(f.flags&Tt.bot?0:3)}));o.sort((f,u)=>u.s-f.s);let c=o.length>12,l=Math.round(t*(c?2.3:2.6)),h=[],d=0;for(let{f}of o){if(d>=Math.min(i.labels,12))break;let u=bt.project(f.x,f.y,f.z);if(!u.vis||u.x<t*4||u.x>hh-t*4||u.y<Jo*.26||u.y>Jo*.8||h.some(w=>Math.abs(w.x-u.x)<t*10&&Math.abs(w.y-u.y)<t*3.4))continue;h.push(u),d++;let p=f.info||{},x=f.flags&Tt.bot,m=f.flags&Tt.down,g=(f.flags&Tt.crown?"\u{1F451}":"")+s0(x?String(p.name||"").replace(/^Bot\s+/i,""):p.name,c?8:10);Ee.globalAlpha=(m?.4:x?.55:.92)*(1-Math.min(.5,d/24)),Ee.font=r(700,l);let v=Math.min(Ee.measureText(g).width,t*22),M=l*1.3,_=u.y-M*.4;Ee.fillStyle=f.flags&Tt.asc?"rgba(120,80,0,0.6)":"rgba(8,4,20,0.5)",Ur(u.x-v/2-t,_-M/2,v+t*2,M,M/2),Ee.fill(),Ee.fillStyle="#"+((p.color??16777215)>>>0).toString(16).padStart(6,"0"),Ee.fillText(g,u.x,_+1,t*22),f.cls===1&&f.hp<100&&!m&&(Ee.fillStyle="rgba(0,0,0,0.55)",Ee.fillRect(u.x-t*3.5,_+M*.6,t*7,t*.5),Ee.fillStyle=f.hp>40?"#5dff9a":"#ff5a5a",Ee.fillRect(u.x-t*3.5,_+M*.6,t*7*Math.max(0,f.hp)/100,t*.5))}Ee.globalAlpha=1,qy(s,t,r)}var Wy=s=>s>=1e9?(s/1e9).toFixed(2)+"B":s>=1e6?Math.round(s/1e6)+"M":s>=1e3?Math.round(s/1e3)+"K":String(Math.max(0,Math.round(s)));function qy(s,e,t){let n=wn,i=n.phase;i!==Wm&&(Wm=i,sh[i]=Math.max(1,n.tl||1)),n.tl>sh[i]&&(sh[i]=n.tl);let r=hh/2,a=Jo*.135,o=e*4.6,l=["gather","vote","boss","break","wave"].includes(i)&&n.tl>0?Math.max(0,Math.min(1,n.tl/(sh[i]||1))):1,h=Math.max(0,Math.min(100,n.bar||0))/100,d=(i==="vote"||i==="gather")&&n.tl>0&&n.tl<=5&&!(i==="gather"&&n.n<1),f=!!(n.bo&&["wave","boss","break","victory"].includes(i)),u=f?"#ff6b8b":i==="vote"||i==="choice"?"#ffd36a":"#c77dff",p=d?1+.12*Math.max(0,Math.sin(n.tl%1*Math.PI)):1;Ee.save(),Ee.translate(r,a),Ee.scale(p,p),Ee.fillStyle="rgba(10,6,24,0.55)",Ee.beginPath(),Ee.arc(0,0,o+e*2.1,0,Math.PI*2),Ee.fill(),Ee.lineCap="round",Ee.lineWidth=e*1.1,Ee.strokeStyle="rgba(255,255,255,0.16)",Ee.beginPath(),Ee.arc(0,0,o,0,Math.PI*2),Ee.stroke(),Ee.strokeStyle=u,Ee.beginPath(),Ee.arc(0,0,o,-Math.PI/2,-Math.PI/2+Math.PI*2*l),Ee.stroke(),Ee.lineWidth=e*.7,Ee.strokeStyle="rgba(122,216,255,0.18)",Ee.beginPath(),Ee.arc(0,0,o+e*1.35,0,Math.PI*2),Ee.stroke(),Ee.strokeStyle="#7ad8ff",h>0&&(Ee.beginPath(),Ee.arc(0,0,o+e*1.35,-Math.PI/2,-Math.PI/2+Math.PI*2*h),Ee.stroke()),Ee.fillStyle="#fff",d?(Ee.font=t(900,Math.round(e*4.4)),Ee.fillText(String(Math.ceil(n.tl)),0,e*.3)):(Ee.font=`${Math.round(e*4)}px sans-serif`,Ee.fillText(i==="vote"||i==="choice"?"\u{1F5F3}\uFE0F":f?"\u{1F480}":i==="ending"?uh&&uh.saved?"\u{1F305}":"\u{1F311}":"\u{1F6E1}\uFE0F",0,e*.3)),Ee.restore();let x=Math.max(0,Or),m=x/15e8,g=Math.max(0,1-(s-r0)/.6);Ee.font=t(900,Math.round(e*3.2));let v="\u{1F30D} "+Wy(x),M=Ee.measureText(v).width,_=a+o+e*5,w=r+(g>0?(Math.random()-.5)*e*g:0);Ee.fillStyle="rgba(10,6,24,0.55)",Ur(w-M/2-e*1.4,_-e*2.3,M+e*2.8,e*4.6,e*2.3),Ee.fill(),Ee.fillStyle=g>0?"#ff6a6a":m<.35?"#ff9a7a":m<.7?"#ffd36a":"#e8f4ff",Ee.fillText(v,w,_+e*.2);let y=_+e*4;if(f){let b=e*26,S=Math.max(0,Math.min(1,n.bo.hp/n.bo.max));Ee.fillStyle="rgba(10,6,24,0.6)",Ur(r-b/2,y,b,e*1.4,e*.7),Ee.fill(),Ee.fillStyle="#ff3a6a",S>0&&(Ur(r-b/2,y,b*S,e*1.4,e*.7),Ee.fill()),y+=e*3}if((i==="vote"||i==="choice")&&n.vi>=0&&Qi[n.vi]){let b=Qi[n.vi],S=(n.vc[0]||0)+(n.vc[1]||0)||1,D=i==="choice"&&fh?fh.key:null;[b.a,b.b].forEach((I,F)=>{let U=r+(F?1:-1)*e*16,k=Jo*.3,N=e*26,K=(n.vc[F]||0)/S;Ee.globalAlpha=D&&D!==I.key?.35:1,Ee.fillStyle="rgba(10,6,24,0.6)",Ur(U-N/2,k-e*4,N,e*8,e*4),Ee.fill(),Ee.fillStyle=F?"rgba(255,90,120,0.55)":"rgba(122,216,255,0.55)",K>0&&(Ur(U-N/2,k-e*4,Math.max(e*8,N*K),e*8,e*4),Ee.fill()),Ee.fillStyle="#ffd36a",Ee.font=t(900,Math.round(e*5)),Ee.fillText(String(F+1),U-N*.26,k+e*.3),Ee.font=`${Math.round(e*5)}px sans-serif`,Ee.fillText(I.icon,U+N*.18,k+e*.3),D===I.key&&(Ee.strokeStyle="#ffd36a",Ee.lineWidth=e*.6,Ur(U-N/2,k-e*4,N,e*8,e*4),Ee.stroke()),Ee.globalAlpha=1})}}function Ur(s,e,t,n,i){Ee.beginPath(),Ee.moveTo(s+i,e),Ee.arcTo(s+t,e,s+t,e+n,i),Ee.arcTo(s+t,e+n,s,e+n,i),Ee.arcTo(s,e+n,s,e,i),Ee.arcTo(s,e,s+t,e,i),Ee.closePath()}var Pf=-1,Or=15e8,Js=15e8,If=15e8,r0=-9;function Xy(s,e){Js=Math.max(0,wn.sv??15e8),Js<If-2e5&&(r0=e),(Js>If+1e6||Js>=1499999999)&&(Or=Math.min(Or,15e8)),If=Js,Or+=(Js-Or)*Math.min(1,s*6),Math.abs(Js-Or)<1e3&&(Or=Js)}function jy(s){let e=wn,t=document.body,n=e.phase==="intro";if(t.classList.toggle("cine",n),t.classList.toggle("voting",e.phase==="vote"||e.phase==="choice"),(e.phase==="vote"||e.phase==="gather")&&e.tl<=5&&e.tl>0&&!(e.phase==="gather"&&e.n<1)){let i=Math.ceil(e.tl);i!==Pf&&(Pf=i,Tn.sfx(e.phase==="vote"&&i<=3?"heart":"beep"))}else Pf=-1;e.phase!=="ending"&&(qn("winner").hidden=!0),e.phase!=="intro"&&!qn("lore").hidden&&ch(-1)}var lh=[];function Ky(s,e){if(!Si)return setTimeout(s,e);let t={at:Na+e/1e3,fn:s};return lh.push(t),t}function Jy(){for(let s=lh.length-1;s>=0;s--)lh[s].at<=Na&&lh.splice(s,1)[0].fn()}function a0(){qn("notice").hidden=!1}function dh(){qn("notice").hidden=!0}var Vo=0,Lf=0,Df=0,qo=0,Nf=0,rh=0,qm=0,Xm=8,Ff=new Map;function o0(s,e){if(Fa?wn=Oy(s,e):wn=Ly(e),Fa&&Wo(e),bt&&!Zs)try{bt.frame(wn,s,e)}catch{ns.err++,ki("frame-err"),ns.err>30&&mh()}e>Xm&&(Xm=e+12+Math.random()*10,["boss","wave"].includes(wn.phase)||Tn.sfx("wind",Tn.now(),.45)),Vy(e),Xy(s,e),e-qm>.25&&(qm=e,jy(e))}function Yy(s){Lf++,!(s-Df<2)&&(qo=Lf/(s-Df),Lf=0,Df=s,!(Ey||Si||document.hidden)&&(s<6||(qo<jo*.8&&Zn<3?++Nf>=2&&(Ff.set(Zn,(Ff.get(Zn)||0)+1),Zn++,Nf=0,rh=0,$s(),ki("q"+Zn)):(Nf=0,qo>=jo*.95&&Zn>0&&(Ff.get(Zn-1)||0)<2?++rh>=6&&(Zn--,rh=0,$s(),ki("q"+Zn)):rh=0))))}function c0(s){if(requestAnimationFrame(c0),document.hidden)return;let e=s/1e3;if(Vo&&e-Vo<1/jo-.004)return;let t=Math.min(.1,Vo?e-Vo:1/jo);Vo=e,o0(t,e),Yy(e)}var Na=0;Si&&(Tn.clock=()=>Na,window.__render={async frame(s){Na+=s,Jy(),bt&&bt.ready&&!bt.loaded&&!bt.error&&await bt.ready.catch(()=>{});for(let e=0;e<100&&(Wo.busy||Ys.length&&Ys[0].p&&Gf);e++)await new Promise(t=>setTimeout(t,30));return o0(s,Na),{phase:wn.phase,n:wn.n,ch:wn.ch,wave:wn.wv,sv:wn.sv}},mix:s=>Tn.mix(s),stats:()=>bt.stats()});var jm=!1;function Zy(s){if(jm||ph||Fa||!kf||!s||!/tikfinity|both/.test(s.source||""))return;jm=!0;let e=document.createElement("script");e.src="/shared/tikfinity.js",e.onload=()=>{let t=window.TikFinity;t.setSink(n=>{!Fi||Fi.readyState!==1||(n.type==="status"?Fi.send(JSON.stringify({t:"tf-status",state:n.mode==="live"?"connected":"waiting",message:n.message})):Fi.send(JSON.stringify({t:"tf",ev:n})))}),t.connect()},document.head.appendChild(e)}var Hf=null;$m();$s();Fa?(Uy(),Vf={session:[],all:[]}):Of();Si||(requestAnimationFrame(c0),setInterval(()=>{!document.hidden&&!Fa&&fetch("/healthz?overlay=1",{cache:"no-store"}).catch(()=>{})},4*6e4),Hf=Tm(()=>({mode:{phone:Xo,ios:ph,kind:bt?bt.kind:"none",game:"siege",q:Zn,fps:Math.round(qo*10)/10,cap:jo},cv:{w:ts.width,h:ts.height},gl:{...bt?bt.stats():{},lost:Ym,restored:Zm},n:{...ns},last:oh.slice(),audio:{unlocked:Tn.state()==="running",ctx:Tn.state(),played:Tn.played,fails:Tn.fails}}),{off:sn.get("diag")==="0"||Fa}));window.__siegeUI={get world(){return wn},get members(){return wn.members},get level(){return Zn},get fps(){return qo},get view(){return bt},stats:()=>bt?bt.stats():null,N:ns,audio:Tn,roster:Qs};})();
