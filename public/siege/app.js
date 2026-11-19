(()=>{var Cd=0,Jh=1,Pd=2;var vo=1,Id=2,pa=3,ji=0,Fn=1,hn=2,Mr=0,Ws=1,jn=2,Yh=3,Zh=4,Ld=5;var Sr=100,Dd=101,Nd=102,Fd=103,kd=104,Ud=200,Od=201,Bd=202,zd=203,$h=204,Qh=205,Gd=206,Hd=207,Vd=208,Wd=209,qd=210,Xd=211,jd=212,Kd=213,Jd=214,Mc=0,Sc=1,wc=2,Qr=3,Tc=4,Ac=5,Ec=6,Rc=7,Kc=0,Yd=1,Zd=2,Ki=0,eu=1,tu=2,nu=3,yo=4,iu=5,su=6,ru=7,zh="attached",$d="detached",au=300,wr=301,ma=302,Jc=303,Yc=304,Us=1e3,mi=1001,ea=1002,Yt=1003,Zc=1004;var Tr=1005;var mn=1006,ga=1007;var _i=1008;var ei=1009,ou=1010,cu=1011,ba=1012,$c=1013,Li=1014,ci=1015,Di=1016,Qc=1017,el=1018,Ar=1020,lu=35902,hu=35899,uu=1021,fu=1022,vi=1023,ps=1026,ws=1027,xa=1028,tl=1029,qs=1030,nl=1031;var il=1033,Mo=33776,So=33777,wo=33778,To=33779,sl=35840,rl=35841,al=35842,ol=35843,cl=36196,ll=37492,hl=37496,ul=37488,fl=37489,Ao=37490,dl=37491,pl=37808,ml=37809,gl=37810,bl=37811,xl=37812,_l=37813,vl=37814,yl=37815,Ml=37816,Sl=37817,wl=37818,Tl=37819,Al=37820,El=37821,Rl=36492,Cl=36494,Pl=36495,Il=36283,Ll=36284,Eo=36285,Dl=36286,Nl=2200,Ro=2201,Qd=2202,hr=2300,ur=2301,vc=2302,Gh=2303,or=2400,cr=2401,Va=2402,Fl=2500,ep=2501,du=0,Co=1,_a=2,tp=3200;var va=0,np=1,Ts="",Bt="srgb",qn="srgb-linear",Wa="linear",Et="srgb";var yc=7680;var ip=519,sp=512,rp=513,ap=514,pu=515,op=516,cp=517,mu=518,gu=519,bu=35044;var xu="300 es",gi=2e3,ta=2001;function s0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function r0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function na(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lp(){let s=na("canvas");return s.style.display="block",s}var Vf={},ia=null;function qa(...s){let e="THREE."+s.shift();ia?ia("log",e,...s):console.log(e,...s)}function hp(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function We(...s){s=hp(s);let e="THREE."+s.shift();if(ia)ia("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function $e(...s){s=hp(s);let e="THREE."+s.shift();if(ia)ia("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function lr(...s){let e=s.join(" ");e in Vf||(Vf[e]=!0,We(...s))}function up(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var fp={[Mc]:Mc,[wc]:Ec,[Tc]:Tc,[Qr]:Ac,[Sc]:Sc,[Ec]:wc,[Rc]:Rc,[Ac]:Qr},Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wf=1234567,Ga=Math.PI/180,fr=180/Math.PI;function Ji(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]).toLowerCase()}function pt(s,e,t){return Math.max(e,Math.min(t,s))}function _u(s,e){return(s%e+e)%e}function a0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function o0(s,e,t){return s!==e?(t-s)/(e-s):0}function Ha(s,e,t){return(1-t)*s+t*e}function c0(s,e,t,n){return Ha(s,e,1-Math.exp(-t*n))}function l0(s,e=1){return e-Math.abs(_u(s,e*2)-e)}function h0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function u0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function f0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function d0(s,e){return s+Math.random()*(e-s)}function p0(s){return s*(.5-Math.random())}function m0(s){s!==void 0&&(Wf=s);let e=Wf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function g0(s){return s*Ga}function b0(s){return s*fr}function x0(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function _0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function v0(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),u=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*d,c*f,o*l);break;case"YZY":s.set(c*f,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*f,o*h,o*l);break;case"XZX":s.set(o*h,c*p,c*u,o*l);break;case"YXY":s.set(c*u,o*h,c*p,o*l);break;case"ZYZ":s.set(c*p,c*u,o*h,o*l);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function kl(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function yu(s,e){if(e.constructor===Float32Array)return s;let t=kl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Mu(s,e){if(e.constructor===Float32Array)return s;let t=kl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Ul={DEG2RAD:Ga,RAD2DEG:fr,generateUUID:Ji,clamp:pt,euclideanModulo:_u,mapLinear:a0,inverseLerp:o0,lerp:Ha,damp:c0,pingpong:l0,smoothstep:h0,smootherstep:u0,randInt:f0,randFloat:d0,randFloatSpread:p0,seededRandom:m0,degToRad:g0,radToDeg:b0,isPowerOfTwo:x0,ceilPowerOfTwo:_0,floorPowerOfTwo:vu,setQuaternionFromProperEuler:v0,normalize:Mu,denormalize:yu},Eu=class Eu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Eu.prototype.isVector2=!0;var Qe=Eu,In=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],f=r[a+0],u=r[a+1],p=r[a+2],b=r[a+3];if(d!==b||c!==f||l!==u||h!==p){let m=c*f+l*u+h*p+d*b;m<0&&(f=-f,u=-u,p=-p,b=-b,m=-m);let g=1-o;if(m<.9995){let v=Math.acos(m),M=Math.sin(v);g=Math.sin(g*v)/M,o=Math.sin(o*v)/M,c=c*g+f*o,l=l*g+u*o,h=h*g+p*o,d=d*g+b*o}else{c=c*g+f*o,l=l*g+u*o,h=h*g+p*o,d=d*g+b*o;let v=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=v,l*=v,h*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],f=r[a+1],u=r[a+2],p=r[a+3];return e[t]=o*p+h*d+c*u-l*f,e[t+1]=c*p+h*f+l*d-o*u,e[t+2]=l*p+h*u+o*f-c*d,e[t+3]=h*p-o*d-c*f-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),f=c(n/2),u=c(i/2),p=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d+f*u*p;break;case"YZX":this._x=f*h*d+l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d-f*u*p;break;case"XZY":this._x=f*h*d-l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d+f*u*p;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-i)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+l)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(r-l)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ru=class Ru{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ru.prototype.isVector3=!0;var B=Ru,gh=new B,qf=new In,Cu=class Cu{constructor(e,t,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],b=i[0],m=i[3],g=i[6],v=i[1],M=i[4],_=i[7],T=i[2],y=i[5],x=i[8];return r[0]=a*b+o*v+c*T,r[3]=a*m+o*M+c*y,r[6]=a*g+o*_+c*x,r[1]=l*b+h*v+d*T,r[4]=l*m+h*M+d*y,r[7]=l*g+h*_+d*x,r[2]=f*b+u*v+p*T,r[5]=f*m+u*M+p*y,r[8]=f*g+u*_+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*r,u=l*r-a*c,p=t*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return e[0]=d*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=f*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=u*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bh.makeScale(e,t)),this}rotate(e){return lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bh.makeRotation(-e)),this}translate(e,t){return lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Cu.prototype.isMatrix3=!0;var et=Cu,bh=new et,Xf=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jf=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y0(){let s={enabled:!0,workingColorSpace:qn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Et&&(i.r=ds(i.r),i.g=ds(i.g),i.b=ds(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(i.r=$r(i.r),i.g=$r(i.g),i.b=$r(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ts?Wa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[qn]:{primaries:e,whitePoint:n,transfer:Wa,toXYZ:Xf,fromXYZ:jf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:Xf,fromXYZ:jf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),s}var ct=y0();function ds(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $r(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Or,Cc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Or===void 0&&(Or=na("canvas")),Or.width=e.width,Or.height=e.height;let i=Or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Or}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=na("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ds(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ds(t[n]/255)*255):t[n]=ds(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},M0=0,sa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(xh(i[a].image)):r.push(xh(i[a]))}else r=xh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function xh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Cc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var S0=0,_h=new B,gn=class s extends Pi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=mi,i=mi,r=mn,a=_i,o=vi,c=ei,l=s.DEFAULT_ANISOTROPY,h=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Ji(),this.name="",this.source=new sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_h).x}get height(){return this.source.getSize(_h).y}get depth(){return this.source.getSize(_h).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=au;gn.DEFAULT_ANISOTROPY=1;var Pu=class Pu{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],p=c[9],b=c[2],m=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-b)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+b)<.1&&Math.abs(p+m)<.1&&Math.abs(l+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,_=(u+1)/2,T=(g+1)/2,y=(h+f)/4,x=(d+b)/4,S=(p+m)/4;return M>_&&M>T?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=y/n,r=x/n):_>T?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=y/i,r=S/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=x/r,i=S/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(d-b)*(d-b)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-b)/v,this.z=(f-h)/v,this.w=Math.acos((l+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pu.prototype.isVector4=!0;var Lt=Pu,Pc=class extends Pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new gn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new sa(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends Pc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xa=class extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ic=class extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var jc=class jc{constructor(e,t,n,i,r,a,o,c,l,h,d,f,u,p,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,d,f,u,p,b,m)}set(e,t,n,i,r,a,o,c,l,h,d,f,u,p,b,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=b,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Br.setFromMatrixColumn(e,0).length(),r=1/Br.setFromMatrixColumn(e,1).length(),a=1/Br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*h,u=a*d,p=o*h,b=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=u+p*l,t[5]=f-b*l,t[9]=-o*c,t[2]=b-f*l,t[6]=p+u*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,u=c*d,p=l*h,b=l*d;t[0]=f+b*o,t[4]=p*o-u,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-p,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,u=c*d,p=l*h,b=l*d;t[0]=f-b*o,t[4]=-a*d,t[8]=p+u*o,t[1]=u+p*o,t[5]=a*h,t[9]=b-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,u=a*d,p=o*h,b=o*d;t[0]=c*h,t[4]=p*l-u,t[8]=f*l+b,t[1]=c*d,t[5]=b*l+f,t[9]=u*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,u=a*l,p=o*c,b=o*l;t[0]=c*h,t[4]=b-f*d,t[8]=p*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*d+p,t[10]=f-b*d}else if(e.order==="XZY"){let f=a*c,u=a*l,p=o*c,b=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+b,t[5]=a*h,t[9]=u*d-p,t[2]=p*d-u,t[6]=o*h,t[10]=b*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w0,e,T0)}lookAt(e,t,n){let i=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ps.crossVectors(n,ni),Ps.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ps.crossVectors(n,ni)),Ps.normalize(),Jo.crossVectors(ni,Ps),i[0]=Ps.x,i[4]=Jo.x,i[8]=ni.x,i[1]=Ps.y,i[5]=Jo.y,i[9]=ni.y,i[2]=Ps.z,i[6]=Jo.z,i[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],b=n[6],m=n[10],g=n[14],v=n[3],M=n[7],_=n[11],T=n[15],y=i[0],x=i[4],S=i[8],D=i[12],L=i[1],F=i[5],C=i[9],V=i[13],N=i[2],J=i[6],te=i[10],z=i[14],le=i[3],Y=i[7],Q=i[11],he=i[15];return r[0]=a*y+o*L+c*N+l*le,r[4]=a*x+o*F+c*J+l*Y,r[8]=a*S+o*C+c*te+l*Q,r[12]=a*D+o*V+c*z+l*he,r[1]=h*y+d*L+f*N+u*le,r[5]=h*x+d*F+f*J+u*Y,r[9]=h*S+d*C+f*te+u*Q,r[13]=h*D+d*V+f*z+u*he,r[2]=p*y+b*L+m*N+g*le,r[6]=p*x+b*F+m*J+g*Y,r[10]=p*S+b*C+m*te+g*Q,r[14]=p*D+b*V+m*z+g*he,r[3]=v*y+M*L+_*N+T*le,r[7]=v*x+M*F+_*J+T*Y,r[11]=v*S+M*C+_*te+T*Q,r[15]=v*D+M*V+_*z+T*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],u=e[14],p=e[3],b=e[7],m=e[11],g=e[15],v=c*u-l*f,M=o*u-l*d,_=o*f-c*d,T=a*u-l*h,y=a*f-c*h,x=a*d-o*h;return t*(b*v-m*M+g*_)-n*(p*v-m*T+g*y)+i*(p*M-b*T+g*x)-r*(p*_-b*y+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],u=e[11],p=e[12],b=e[13],m=e[14],g=e[15],v=t*o-n*a,M=t*c-i*a,_=t*l-r*a,T=n*c-i*o,y=n*l-r*o,x=i*l-r*c,S=h*b-d*p,D=h*m-f*p,L=h*g-u*p,F=d*m-f*b,C=d*g-u*b,V=f*g-u*m,N=v*V-M*C+_*F+T*L-y*D+x*S;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/N;return e[0]=(o*V-c*C+l*F)*J,e[1]=(i*C-n*V-r*F)*J,e[2]=(b*x-m*y+g*T)*J,e[3]=(f*y-d*x-u*T)*J,e[4]=(c*L-a*V-l*D)*J,e[5]=(t*V-i*L+r*D)*J,e[6]=(m*_-p*x-g*M)*J,e[7]=(h*x-f*_+u*M)*J,e[8]=(a*C-o*L+l*S)*J,e[9]=(n*L-t*C-r*S)*J,e[10]=(p*y-b*_+g*v)*J,e[11]=(d*_-h*y-u*v)*J,e[12]=(o*D-a*F-c*S)*J,e[13]=(t*F-n*D+i*S)*J,e[14]=(b*M-p*T-m*v)*J,e[15]=(h*T-d*M+f*v)*J,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,f=r*l,u=r*h,p=r*d,b=a*h,m=a*d,g=o*d,v=c*l,M=c*h,_=c*d,T=n.x,y=n.y,x=n.z;return i[0]=(1-(b+g))*T,i[1]=(u+_)*T,i[2]=(p-M)*T,i[3]=0,i[4]=(u-_)*y,i[5]=(1-(f+g))*y,i[6]=(m+v)*y,i[7]=0,i[8]=(p+M)*x,i[9]=(m-v)*x,i[10]=(1-(f+b))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Br.set(i[0],i[1],i[2]).length(),o=Br.set(i[4],i[5],i[6]).length(),c=Br.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Ai.copy(this);let l=1/a,h=1/o,d=1/c;return Ai.elements[0]*=l,Ai.elements[1]*=l,Ai.elements[2]*=l,Ai.elements[4]*=h,Ai.elements[5]*=h,Ai.elements[6]*=h,Ai.elements[8]*=d,Ai.elements[9]*=d,Ai.elements[10]*=d,t.setFromRotationMatrix(Ai),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=gi,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i),p,b;if(c)p=r/(a-r),b=a*r/(a-r);else if(o===gi)p=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===ta)p=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=gi,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),u=-(n+i)/(n-i),p,b;if(c)p=1/(a-r),b=a/(a-r);else if(o===gi)p=-2/(a-r),b=-(a+r)/(a-r);else if(o===ta)p=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};jc.prototype.isMatrix4=!0;var qe=jc,Br=new B,Ai=new qe,w0=new B(0,0,0),T0=new B(1,1,1),Ps=new B,Jo=new B,ni=new B,Kf=new qe,Jf=new In,bi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jf.setFromEuler(this),this.setFromQuaternion(Jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var ja=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},A0=0,Yf=new B,zr=new In,os=new qe,Yo=new B,La=new B,E0=new B,R0=new In,Zf=new B(1,0,0),$f=new B(0,1,0),Qf=new B(0,0,1),ed={type:"added"},C0={type:"removed"},Gr={type:"childadded",child:null},vh={type:"childremoved",child:null},Gt=class s extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new B,t=new bi,n=new In,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new et}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Zf,e)}rotateY(e){return this.rotateOnAxis($f,e)}rotateZ(e){return this.rotateOnAxis(Qf,e)}translateOnAxis(e,t){return Yf.copy(e).applyQuaternion(this.quaternion),this.position.add(Yf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zf,e)}translateY(e){return this.translateOnAxis($f,e)}translateZ(e){return this.translateOnAxis(Qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yo.copy(e):Yo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(La,Yo,this.up):os.lookAt(Yo,La,this.up),this.quaternion.setFromRotationMatrix(os),i&&(os.extractRotation(i.matrixWorld),zr.setFromRotationMatrix(os),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ed),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(C0),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ed),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,E0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,R0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),u=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Gt.DEFAULT_UP=new B(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zt=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},P0={type:"move"},ra=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),g=this._getHandJoint(l,b);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;l.inputState.pinching&&f>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(P0)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function yh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ct.workingColorSpace){if(e=_u(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=yh(a,r,e+1/3),this.g=yh(a,r,e),this.b=yh(a,r,e-1/3)}return ct.colorSpaceToWorking(this,i),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=dp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return ct.workingToColorSpace(Bn.copy(this),e),Math.round(pt(Bn.r*255,0,255))*65536+Math.round(pt(Bn.g*255,0,255))*256+Math.round(pt(Bn.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Bn.copy(this),t);let n=Bn.r,i=Bn.g,r=Bn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Bt){ct.workingToColorSpace(Bn.copy(this),e);let t=Bn.r,n=Bn.g,i=Bn.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Is),this.setHSL(Is.h+e,Is.s+t,Is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Is),e.getHSL(Zo);let n=Ha(Is.h,Zo.h,t),i=Ha(Is.s,Zo.s,t),r=Ha(Is.l,Zo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new Ce;Ce.NAMES=dp;var Ka=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ja=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ei=new B,cs=new B,Mh=new B,ls=new B,Hr=new B,Vr=new B,td=new B,Sh=new B,wh=new B,Th=new B,Ah=new Lt,Eh=new Lt,Rh=new Lt,ks=class s{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ei.subVectors(e,t),i.cross(Ei);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ei.subVectors(i,t),cs.subVectors(n,t),Mh.subVectors(e,t);let a=Ei.dot(Ei),o=Ei.dot(cs),c=Ei.dot(Mh),l=cs.dot(cs),h=cs.dot(Mh),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(l*c-o*h)*f,p=(a*h-o*c)*f;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ls)===null?!1:ls.x>=0&&ls.y>=0&&ls.x+ls.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,ls)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ls.x),c.addScaledVector(a,ls.y),c.addScaledVector(o,ls.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ah.setScalar(0),Eh.setScalar(0),Rh.setScalar(0),Ah.fromBufferAttribute(e,t),Eh.fromBufferAttribute(e,n),Rh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ah,r.x),a.addScaledVector(Eh,r.y),a.addScaledVector(Rh,r.z),a}static isFrontFacing(e,t,n,i){return Ei.subVectors(n,t),cs.subVectors(e,t),Ei.cross(cs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),cs.subVectors(this.a,this.b),Ei.cross(cs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Hr.subVectors(i,n),Vr.subVectors(r,n),Sh.subVectors(e,n);let c=Hr.dot(Sh),l=Vr.dot(Sh);if(c<=0&&l<=0)return t.copy(n);wh.subVectors(e,i);let h=Hr.dot(wh),d=Vr.dot(wh);if(h>=0&&d<=h)return t.copy(i);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Hr,a);Th.subVectors(e,r);let u=Hr.dot(Th),p=Vr.dot(Th);if(p>=0&&u<=p)return t.copy(r);let b=u*l-c*p;if(b<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(Vr,o);let m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return td.subVectors(r,i),o=(d-h)/(d-h+(u-p)),t.copy(i).addScaledVector(td,o);let g=1/(m+b+f);return a=b*g,o=f*g,t.copy(n).addScaledVector(Hr,a).addScaledVector(Vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ri=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ri):Ri.fromBufferAttribute(r,a),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$o.copy(n.boundingBox)),$o.applyMatrix4(e.matrixWorld),this.union($o)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),Qo.subVectors(this.max,Da),Wr.subVectors(e.a,Da),qr.subVectors(e.b,Da),Xr.subVectors(e.c,Da),Ls.subVectors(qr,Wr),Ds.subVectors(Xr,qr),ir.subVectors(Wr,Xr);let t=[0,-Ls.z,Ls.y,0,-Ds.z,Ds.y,0,-ir.z,ir.y,Ls.z,0,-Ls.x,Ds.z,0,-Ds.x,ir.z,0,-ir.x,-Ls.y,Ls.x,0,-Ds.y,Ds.x,0,-ir.y,ir.x,0];return!Ch(t,Wr,qr,Xr,Qo)||(t=[1,0,0,0,1,0,0,0,1],!Ch(t,Wr,qr,Xr,Qo))?!1:(ec.crossVectors(Ls,Ds),t=[ec.x,ec.y,ec.z],Ch(t,Wr,qr,Xr,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hs=[new B,new B,new B,new B,new B,new B,new B,new B],Ri=new B,$o=new ri,Wr=new B,qr=new B,Xr=new B,Ls=new B,Ds=new B,ir=new B,Da=new B,Qo=new B,ec=new B,sr=new B;function Ch(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){sr.fromArray(s,r);let o=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),c=e.dot(sr),l=t.dot(sr),h=n.dot(sr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var ln=new B,tc=new Qe,I0=0,it=class extends Pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:I0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bu,this.updateRanges=[],this.gpuType=ci,this.version=0,this._normalizationScale=e!==void 0?kl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tc.fromBufferAttribute(this,t),tc.applyMatrix3(e),this.setXY(t,tc.x,tc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):yu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Mu(e,this.array)}};var Ya=class extends it{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Za=class extends it{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mt=class extends it{constructor(e,t,n){super(new Float32Array(e),t,n)}},L0=new ri,Na=new B,Ph=new B,bn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):L0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);let t=Na.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Na,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(Ph)),this.expandByPoint(Na.copy(e.center).sub(Ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},D0=0,pi=new qe,Ih=new Gt,jr=new B,ii=new ri,Fa=new ri,Pn=new B,Ut=class s extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s0(e)?Za:Ya)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Fa.setFromBufferAttribute(o),this.morphTargetsRelative?(Pn.addVectors(ii.min,Fa.min),ii.expandByPoint(Pn),Pn.addVectors(ii.max,Fa.max),ii.expandByPoint(Pn)):(ii.expandByPoint(Fa.min),ii.expandByPoint(Fa.max))}ii.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Pn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Pn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pn.fromBufferAttribute(o,l),c&&(jr.fromBufferAttribute(e,l),Pn.add(jr)),i=Math.max(i,n.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new it(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new B,c[D]=new B;let h=new B,d=new B,f=new B,u=new Qe,p=new Qe,b=new Qe,m=new B,g=new B;function v(D,L,F){l[D]=l[L]=l[F]=1,h.fromBufferAttribute(n,D),d.fromBufferAttribute(n,L),f.fromBufferAttribute(n,F),u.fromBufferAttribute(r,D),p.fromBufferAttribute(r,L),b.fromBufferAttribute(r,F),d.sub(h),f.sub(h),p.sub(u),b.sub(u);let C=1/(p.x*b.y-b.x*p.y);isFinite(C)&&(m.copy(d).multiplyScalar(b.y).addScaledVector(f,-p.y).multiplyScalar(C),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-b.x).multiplyScalar(C),o[D].add(m),o[L].add(m),o[F].add(m),c[D].add(g),c[L].add(g),c[F].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,L=M.length;D<L;++D){let F=M[D],C=F.start,V=F.count;for(let N=C,J=C+V;N<J;N+=3)v(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let _=new B,T=new B,y=new B,x=new B;function S(D){y.fromBufferAttribute(i,D),x.copy(y);let L=o[D];_.copy(L),_.sub(y.multiplyScalar(y.dot(L))).normalize(),T.crossVectors(x,L);let C=T.dot(c[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,C)}for(let D=0,L=n.count;D<L;++D)l[D]&&S(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new it(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new B,r=new B,a=new B,o=new B,c=new B,l=new B,h=new B,d=new B;if(e)for(let f=0,u=e.count;f<u;f+=3){let p=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h),u=0,p=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?u=c[b]*o.data.stride+o.offset:u=c[b]*h;for(let g=0;g<h;g++)f[p++]=l[u++]}return new it(f,h,d)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let f=l[h],u=e(f,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let u=l[d];h.push(u.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},aa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bu,this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=nd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=nd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function nd(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Ji()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Wn=new B,oa=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?kl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){qa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new it(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){qa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):yu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Mu(e,this.data.array)}},Lh=new B,N0=new B,F0=new et,Ci=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Lh.subVectors(n,t).cross(N0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Lh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||F0.getNormalMatrix(e),i=this.coplanarPoint(Lh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},k0=0,zn=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Ws,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=Qh,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yc,this.stencilZFail=yc,this.stencilZPass=yc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ci().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var us=new B,Dh=new B,nc=new B,ic=new B,dr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,us)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=us.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(us.copy(this.origin).addScaledVector(this.direction,t),us.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Dh.copy(e).add(t).multiplyScalar(.5),nc.copy(t).sub(e).normalize(),ic.copy(this.origin).sub(Dh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(nc),o=ic.dot(this.direction),c=-ic.dot(nc),l=ic.lengthSq(),h=Math.abs(1-a*a),d,f,u,p;if(h>0)if(d=a*c-o,f=a*o-c,p=r*h,d>=0)if(f>=-p)if(f<=p){let b=1/h;d*=b,f*=b,u=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f<=-p?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l):f<=p?(d=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Dh).addScaledVector(nc,f),u}intersectSphere(e,t){if(e.radius<0)return null;us.subVectors(e.center,this.origin);let n=us.dot(this.direction),i=us.dot(us)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,us)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,f=e.y-a.y,u=e.z-a.z,p=t.x-a.x,b=t.y-a.y,m=t.z-a.z,g=n.x-a.x,v=n.y-a.y,M=n.z-a.z,_=Math.abs(c),T=Math.abs(l),y=Math.abs(h),x,S,D,L,F,C,V,N,J,te,z,le;if(_>=T&&_>=y?(D=c,C=d,J=p,le=g,c>=0?(x=l,S=h,L=f,F=u,V=b,N=m,te=v,z=M):(x=h,S=l,L=u,F=f,V=m,N=b,te=M,z=v)):T>=y?(D=l,C=f,J=b,le=v,l>=0?(x=h,S=c,L=u,F=d,V=m,N=p,te=M,z=g):(x=c,S=h,L=d,F=u,V=p,N=m,te=g,z=M)):(D=h,C=u,J=m,le=M,h>=0?(x=c,S=l,L=d,F=f,V=p,N=b,te=g,z=v):(x=l,S=c,L=f,F=d,V=b,N=p,te=v,z=g)),D===0)return null;let Y=x/D,Q=S/D,he=1/D,Ue=L-Y*C,Ye=F-Q*C,$=V-Y*J,Me=N-Q*J,De=te-Y*le,Be=z-Q*le,Re=De*Me-Be*$,je=Ue*Be-Ye*De,Dt=$*Ye-Me*Ue;if(i){if(Re<0||je<0||Dt<0)return null}else if((Re<0||je<0||Dt<0)&&(Re>0||je>0||Dt>0))return null;let Xe=Re+je+Dt;if(Xe===0)return null;let xt=he*(Re*C+je*J+Dt*le);return(Xe>0?xt<0:xt>0)?null:this.at(xt/Xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},id=new qe,rr=new dr,sc=new bn,sd=new B,rc=new B,ac=new B,oc=new B,Nh=new B,cc=new B,rd=new B,lc=new B,ut=class extends Gt{constructor(e=new Ut,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){cc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Nh.fromBufferAttribute(d,e),a?cc.addScaledVector(Nh,h):cc.addScaledVector(Nh.sub(t),h))}t.add(cc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(r),rr.copy(e.ray).recast(e.near),!(sc.containsPoint(rr.origin)===!1&&(rr.intersectSphere(sc,sd)===null||rr.origin.distanceToSquared(sd)>(e.far-e.near)**2))&&(id.copy(r).invert(),rr.copy(e.ray).applyMatrix4(id),!(n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rr)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,b=f.length;p<b;p++){let m=f[p],g=a[m.materialIndex],v=Math.max(m.start,u.start),M=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let _=v,T=M;_<T;_+=3){let y=o.getX(_),x=o.getX(_+1),S=o.getX(_+2);i=hc(this,g,e,n,l,h,d,y,x,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,u.start),b=Math.min(o.count,u.start+u.count);for(let m=p,g=b;m<g;m+=3){let v=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);i=hc(this,a,e,n,l,h,d,v,M,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,b=f.length;p<b;p++){let m=f[p],g=a[m.materialIndex],v=Math.max(m.start,u.start),M=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let _=v,T=M;_<T;_+=3){let y=_,x=_+1,S=_+2;i=hc(this,g,e,n,l,h,d,y,x,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,u.start),b=Math.min(c.count,u.start+u.count);for(let m=p,g=b;m<g;m+=3){let v=m,M=m+1,_=m+2;i=hc(this,a,e,n,l,h,d,v,M,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function U0(s,e,t,n,i,r,a,o){let c;if(e.side===Fn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===ji,o),c===null)return null;lc.copy(o),lc.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(lc);return l<t.near||l>t.far?null:{distance:l,point:lc.clone(),object:s}}function hc(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,rc),s.getVertexPosition(c,ac),s.getVertexPosition(l,oc);let h=U0(s,e,t,n,rc,ac,oc,rd);if(h){let d=new B;ks.getBarycoord(rd,rc,ac,oc,d),i&&(h.uv=ks.getInterpolatedAttribute(i,o,c,l,d,new Qe)),r&&(h.uv1=ks.getInterpolatedAttribute(r,o,c,l,d,new Qe)),a&&(h.normal=ks.getInterpolatedAttribute(a,o,c,l,d,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new B,materialIndex:0};ks.getNormal(rc,ac,oc,f.normal),h.face=f,h.barycoord=d}return h}var ka=new Lt,ad=new Lt,od=new Lt,O0=new Lt,cd=new qe,uc=new B,Fh=new bn,ld=new qe,kh=new dr,pr=class extends ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zh,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ri),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uc),this.boundingBox.expandByPoint(uc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uc),this.boundingSphere.expandByPoint(uc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fh.copy(this.boundingSphere),Fh.applyMatrix4(i),e.ray.intersectsSphere(Fh)!==!1&&(ld.copy(i).invert(),kh.copy(e.ray).applyMatrix4(ld),!(this.boundingBox!==null&&kh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$d?this.bindMatrixInverse.copy(this.bindMatrix).invert():We("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;ad.fromBufferAttribute(i.attributes.skinIndex,e),od.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(ka.copy(t),t.set(0,0,0,0)):(ka.set(t.x,t.y,t.z,1),t.set(0,0,0)),ka.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=od.getComponent(r);if(a!==0){let o=ad.getComponent(r);cd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(O0.copy(ka).applyMatrix4(cd),a)}}return t.isVector4&&(t.w=ka.w),t.applyMatrix4(this.bindMatrixInverse)}},ca=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Os=class extends gn{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Yt,h=Yt,d,f){super(null,a,o,c,l,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hd=new qe,B0=new qe,mr=class s{constructor(e=[],t=[]){this.uuid=Ji(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){We("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:B0;hd.multiplyMatrices(o,t[r]),hd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Os(t,e,e,vi,ci);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(We("Skeleton: No bone found with UUID:",r),a=new ca),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},ms=class extends it{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Kr=new qe,ud=new qe,fc=[],fd=new ri,z0=new qe,Ua=new ut,Oa=new bn,_n=class extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,z0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Kr),fd.copy(e.boundingBox).applyMatrix4(Kr),this.boundingBox.union(fd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Kr),Oa.copy(e.boundingSphere).applyMatrix4(Kr),this.boundingSphere.union(Oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ua.geometry=this.geometry,Ua.material=this.material,Ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oa.copy(this.boundingSphere),Oa.applyMatrix4(n),e.ray.intersectsSphere(Oa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Kr),ud.multiplyMatrices(n,Kr),Ua.matrixWorld=ud,Ua.raycast(e,fc);for(let a=0,o=fc.length;a<o;a++){let c=fc[a];c.instanceId=r,c.object=this,t.push(c)}fc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Os(new Float32Array(i*this.count),i,this.count,xa,ci));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ar=new bn,G0=new Qe(.5,.5),dc=new B,Bs=class{constructor(e=new Ci,t=new Ci,n=new Ci,i=new Ci,r=new Ci,a=new Ci){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],b=r[9],m=r[10],g=r[11],v=r[12],M=r[13],_=r[14],T=r[15];if(i[0].setComponents(l-a,u-h,g-p,T-v).normalize(),i[1].setComponents(l+a,u+h,g+p,T+v).normalize(),i[2].setComponents(l+o,u+d,g+b,T+M).normalize(),i[3].setComponents(l-o,u-d,g-b,T-M).normalize(),n)i[4].setComponents(c,f,m,_).normalize(),i[5].setComponents(l-c,u-f,g-m,T-_).normalize();else if(i[4].setComponents(l-c,u-f,g-m,T-_).normalize(),t===gi)i[5].setComponents(l+c,u+f,g+m,T+_).normalize();else if(t===ta)i[5].setComponents(c,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);let t=G0.distanceTo(e.center);return ar.radius=.7071067811865476+t,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(dc.x=i.normal.x>0?e.max.x:e.min.x,dc.y=i.normal.y>0?e.max.y:e.min.y,dc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},dd=new qe,Lc=class s{constructor(){this.coordinateSystem=gi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];dd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Bs),n[i].setFromProjectionMatrix(dd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Bs),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var la=class extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Dc=new B,Nc=new B,pd=new qe,Ba=new dr,pc=new bn,Uh=new B,md=new B,gr=class extends Gt{constructor(e=new Ut,t=new la){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Dc.fromBufferAttribute(t,i-1),Nc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Dc.distanceTo(Nc);e.setAttribute("lineDistance",new mt(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(i),pc.radius+=r,e.ray.intersectsSphere(pc)===!1)return;pd.copy(i).invert(),Ba.copy(e.ray).applyMatrix4(pd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let b=u,m=p-1;b<m;b+=l){let g=h.getX(b),v=h.getX(b+1),M=mc(this,e,Ba,c,g,v,b);M&&t.push(M)}if(this.isLineLoop){let b=h.getX(p-1),m=h.getX(u),g=mc(this,e,Ba,c,b,m,p-1);g&&t.push(g)}}else{let u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let b=u,m=p-1;b<m;b+=l){let g=mc(this,e,Ba,c,b,b+1,b);g&&t.push(g)}if(this.isLineLoop){let b=mc(this,e,Ba,c,p-1,u,p-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function mc(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Dc.fromBufferAttribute(o,i),Nc.fromBufferAttribute(o,r),t.distanceSqToSegment(Dc,Nc,Uh,md)>n)return;Uh.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Uh);if(!(l<e.near||l>e.far))return{distance:l,point:md.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var gd=new B,bd=new B,$a=class extends gr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)gd.fromBufferAttribute(t,i),bd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gd.distanceTo(bd);e.setAttribute("lineDistance",new mt(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Qa=class extends gr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ha=class extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xd=new qe,Hh=new dr,gc=new bn,bc=new B,gs=class extends Gt{constructor(e=new Ut,t=new ha){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(i),gc.radius+=r,e.ray.intersectsSphere(gc)===!1)return;xd.copy(i).invert(),Hh.copy(e.ray).applyMatrix4(xd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let p=f,b=u;p<b;p++){let m=l.getX(p);bc.fromBufferAttribute(d,m),_d(bc,m,c,i,e,t,this)}}else{let f=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let p=f,b=u;p<b;p++)bc.fromBufferAttribute(d,p),_d(bc,p,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _d(s,e,t,n,i,r,a){let o=Hh.distanceSqToPoint(s);if(o<t){let c=new B;Hh.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var eo=class extends gn{constructor(e=[],t=wr,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},to=class extends gn{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bs=class extends gn{constructor(e,t,n=Li,i,r,a,o=Yt,c=Yt,l,h=ps,d=1){if(h!==ps&&h!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},no=class extends bs{constructor(e,t=Li,n=wr,i,r,a=Yt,o=Yt,c,l=ps){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},io=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xs=class s extends Ut{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],f=0,u=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(d,2));function p(b,m,g,v,M,_,T,y,x,S,D){let L=_/x,F=T/S,C=_/2,V=T/2,N=y/2,J=x+1,te=S+1,z=0,le=0,Y=new B;for(let Q=0;Q<te;Q++){let he=Q*F-V;for(let Ue=0;Ue<J;Ue++){let Ye=Ue*L-C;Y[b]=Ye*v,Y[m]=he*M,Y[g]=N,l.push(Y.x,Y.y,Y.z),Y[b]=0,Y[m]=0,Y[g]=y>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Ue/x),d.push(1-Q/S),z+=1}}for(let Q=0;Q<S;Q++)for(let he=0;he<x;he++){let Ue=f+he+J*Q,Ye=f+he+J*(Q+1),$=f+(he+1)+J*(Q+1),Me=f+(he+1)+J*Q;c.push(Ue,Ye,Me),c.push(Ye,$,Me),le+=6}o.addGroup(u,le,D),u+=le,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Wi=class s extends Ut{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,d=Math.PI/2*e,f=t,u=2*d+f,p=n*2+r,b=i+1,m=new B,g=new B;for(let v=0;v<=p;v++){let M=0,_=0,T=0,y=0;if(v<=n){let D=v/n,L=D*Math.PI/2;_=-h-e*Math.cos(L),T=e*Math.sin(L),y=-e*Math.cos(L),M=D*d}else if(v<=n+r){let D=(v-n)/r;_=-h+D*t,T=e,y=0,M=d+D*f}else{let D=(v-n-r)/n,L=D*Math.PI/2;_=h+e*Math.sin(L),T=e*Math.cos(L),y=e*Math.sin(L),M=d+f+D*d}let x=Math.max(0,Math.min(1,M/u)),S=0;v===0?S=.5/i:v===p&&(S=-.5/i);for(let D=0;D<=i;D++){let L=D/i,F=L*Math.PI*2,C=Math.sin(F),V=Math.cos(F);g.x=-T*V,g.y=_,g.z=T*C,o.push(g.x,g.y,g.z),m.set(-T*V,y,T*C),m.normalize(),c.push(m.x,m.y,m.z),l.push(L+S,x)}if(v>0){let D=(v-1)*b;for(let L=0;L<i;L++){let F=D+L,C=D+L+1,V=v*b+L,N=v*b+L+1;a.push(F,C,V),a.push(C,N,V)}}}this.setIndex(a),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},so=class s extends Ut{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new B,h=new Qe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let u=n+d/t*i;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xi=class s extends Ut{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],f=[],u=[],p=0,b=[],m=n/2,g=0;v(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new mt(d,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(u,2));function v(){let _=new B,T=new B,y=0,x=(t-e)/n;for(let S=0;S<=r;S++){let D=[],L=S/r,F=L*(t-e)+e;for(let C=0;C<=i;C++){let V=C/i,N=V*c+o,J=Math.sin(N),te=Math.cos(N);T.x=F*J,T.y=-L*n+m,T.z=F*te,d.push(T.x,T.y,T.z),_.set(J,x,te).normalize(),f.push(_.x,_.y,_.z),u.push(V,1-L),D.push(p++)}b.push(D)}for(let S=0;S<i;S++)for(let D=0;D<r;D++){let L=b[D][S],F=b[D+1][S],C=b[D+1][S+1],V=b[D][S+1];(e>0||D!==0)&&(h.push(L,F,V),y+=3),(t>0||D!==r-1)&&(h.push(F,C,V),y+=3)}l.addGroup(g,y,0),g+=y}function M(_){let T=p,y=new Qe,x=new B,S=0,D=_===!0?e:t,L=_===!0?1:-1;for(let C=1;C<=i;C++)d.push(0,m*L,0),f.push(0,L,0),u.push(.5,.5),p++;let F=p;for(let C=0;C<=i;C++){let N=C/i*c+o,J=Math.cos(N),te=Math.sin(N);x.x=D*te,x.y=m*L,x.z=D*J,d.push(x.x,x.y,x.z),f.push(0,L,0),y.x=J*.5+.5,y.y=te*.5*L+.5,u.push(y.x,y.y),p++}for(let C=0;C<i;C++){let V=T+C,N=F+C;_===!0?h.push(N,N+1,V):h.push(N+1,N,V),S+=3}l.addGroup(g,S,_===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ii=class s extends xi{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ro=class s extends Ut{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let M=new B,_=new B,T=new B;for(let y=0;y<t.length;y+=3)u(t[y+0],M),u(t[y+1],_),u(t[y+2],T),c(M,_,T,v)}function c(v,M,_,T){let y=T+1,x=[];for(let S=0;S<=y;S++){x[S]=[];let D=v.clone().lerp(_,S/y),L=M.clone().lerp(_,S/y),F=y-S;for(let C=0;C<=F;C++)C===0&&S===y?x[S][C]=D:x[S][C]=D.clone().lerp(L,C/F)}for(let S=0;S<y;S++)for(let D=0;D<2*(y-S)-1;D++){let L=Math.floor(D/2);D%2===0?(f(x[S][L+1]),f(x[S+1][L]),f(x[S][L])):(f(x[S][L+1]),f(x[S+1][L+1]),f(x[S+1][L]))}}function l(v){let M=new B;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(v),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){let v=new B;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let _=m(v)/2/Math.PI+.5,T=g(v)/Math.PI+.5;a.push(_,1-T)}p(),d()}function d(){for(let v=0;v<a.length;v+=6){let M=a[v+0],_=a[v+2],T=a[v+4],y=Math.max(M,_,T),x=Math.min(M,_,T);y>.9&&x<.1&&(M<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function u(v,M){let _=v*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function p(){let v=new B,M=new B,_=new B,T=new B,y=new Qe,x=new Qe,S=new Qe;for(let D=0,L=0;D<r.length;D+=9,L+=6){v.set(r[D+0],r[D+1],r[D+2]),M.set(r[D+3],r[D+4],r[D+5]),_.set(r[D+6],r[D+7],r[D+8]),y.set(a[L+0],a[L+1]),x.set(a[L+2],a[L+3]),S.set(a[L+4],a[L+5]),T.copy(v).add(M).add(_).divideScalar(3);let F=m(T);b(y,L+0,v,F),b(x,L+2,M,F),b(S,L+4,_,F)}}function b(v,M,_,T){T<0&&v.x===1&&(a[M]=v.x-1),_.x===0&&_.z===0&&(a[M]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var ao=class s extends ro{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var oo=class s extends ro{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ai=class s extends Ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,f=t/c,u=[],p=[],b=[],m=[];for(let g=0;g<h;g++){let v=g*f-a;for(let M=0;M<l;M++){let _=M*d-r;p.push(_,-v,0),b.push(0,0,1),m.push(M/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){let M=v+l*g,_=v+l*(g+1),T=v+1+l*(g+1),y=v+1+l*g;u.push(M,_,y),u.push(_,T,y)}this.setIndex(u),this.setAttribute("position",new mt(p,3)),this.setAttribute("normal",new mt(b,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},co=class s extends Ut{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],d=e,f=(t-e)/i,u=new B,p=new Qe;for(let b=0;b<=i;b++){for(let m=0;m<=n;m++){let g=r+m/n*a;u.x=d*Math.cos(g),u.y=d*Math.sin(g),c.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,h.push(p.x,p.y)}d+=f}for(let b=0;b<i;b++){let m=b*(n+1);for(let g=0;g<n;g++){let v=g+m,M=v,_=v+n+1,T=v+n+2,y=v+1;o.push(M,_,y),o.push(_,T,y)}}this.setIndex(o),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var oi=class s extends Ut{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new B,f=new B,u=[],p=[],b=[],m=[];for(let g=0;g<=n;g++){let v=[],M=g/n,_=a+M*o,T=e*Math.cos(_),y=Math.sqrt(e*e-T*T),x=0;g===0&&a===0?x=.5/t:g===n&&c===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let D=S/t,L=i+D*r;d.x=-y*Math.cos(L),d.y=T,d.z=y*Math.sin(L),p.push(d.x,d.y,d.z),f.copy(d).normalize(),b.push(f.x,f.y,f.z),m.push(D+x,1-M),v.push(l++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let M=h[g][v+1],_=h[g][v],T=h[g+1][v],y=h[g+1][v+1];(g!==0||a>0)&&u.push(M,_,y),(g!==n-1||c<Math.PI)&&u.push(_,T,y)}this.setIndex(u),this.setAttribute("position",new mt(p,3)),this.setAttribute("normal",new mt(b,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var br=class s extends Ut{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],d=[],f=new B,u=new B,p=new B;for(let b=0;b<=n;b++){let m=a+b/n*o;for(let g=0;g<=i;g++){let v=g/i*r;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),l.push(u.x,u.y,u.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(b/n)}}for(let b=1;b<=n;b++)for(let m=1;m<=i;m++){let g=(i+1)*b+m-1,v=(i+1)*(b-1)+m-1,M=(i+1)*(b-1)+m,_=(i+1)*b+m;c.push(g,v,_),c.push(v,M,_)}this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Er(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(vd(i))i.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(vd(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Gn(s){let e={};for(let t=0;t<s.length;t++){let n=Er(s[t]);for(let i in n)e[i]=n[i]}return e}function vd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function H0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Su(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var pp={clone:Er,merge:Gn},V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=H0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ce().setHex(i.value);break;case"v2":this.uniforms[n].value=new Qe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Lt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new et().fromArray(i.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fc=class extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xr=class extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xn=class extends xr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return lr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){lr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var lo=class extends zn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zs=class extends zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Kc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kc=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uc=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function za(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function q0(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function yd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function X0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var qi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oc=class extends qi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:or,endingEnd:or}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case cr:r=e,o=2*t-n;break;case Va:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cr:a=e,c=2*n-t;break;case Va:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-t)/(i-t),b=p*p,m=b*p,g=-f*m+2*f*b-f*p,v=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*p+1,M=(-1-u)*m+(1.5+u)*b+.5*p,_=u*m-u*b;for(let T=0;T!==o;++T)r[T]=g*a[h+T]+v*a[l+T]+M*a[c+T]+_*a[d+T];return r}},ho=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*h;return r}},Bc=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},zc=class extends qi{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(i-t),b=1-p;for(let m=0;m!==o;++m)r[m]=a[l+m]*b+a[c+m]*p;return r}let f=o*2,u=e-1;for(let p=0;p!==o;++p){let b=a[l+p],m=a[c+p],g=u*f+p*2,v=d[g],M=d[g+1],_=e*f+p*2,T=h[_],y=h[_+1],x=K0(n,t,v,T,i);r[p]=mp(x,b,M,y,m)}return r}};function mp(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function j0(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function K0(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=mp(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let c=j0(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Qn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fs(t,this.TimeBufferType),this.values=Fs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fs(e.times,Array),values:Fs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),za(e.settings)&&(n.settings={inTangents:Fs(e.settings.inTangents,Array),outTangents:Fs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new zc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case hr:t=this.InterpolantFactoryMethodDiscrete;break;case ur:t=this.InterpolantFactoryMethodLinear;break;case vc:t=this.InterpolantFactoryMethodSmooth;break;case Gh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return ur;case this.InterpolantFactoryMethodSmooth:return vc;case this.InterpolantFactoryMethodBezier:return Gh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;za(this.settings)&&(Md(this.settings.inTangents,e),Md(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;za(this.settings)&&(Sd(this.settings.inTangents,e),Sd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){$e("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){$e("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&r0(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){$e("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===vc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let d=o*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){let b=t[d+p];if(b!==t[f+p]||b!==t[u+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,za(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Md(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Sd(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=ur;var _s=class extends Qn{constructor(e,t,n){super(e,t,n)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=hr;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends Qn{constructor(e,t,n,i){super(e,t,n,i)}};uo.prototype.ValueTypeName="color";var vs=class extends Qn{constructor(e,t,n,i){super(e,t,n,i)}};vs.prototype.ValueTypeName="number";var Gc=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)In.slerpFlat(r,0,a,l-o,a,l,c);return r}},ys=class extends Qn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Gc(this.times,this.values,this.getValueSize(),e)}};ys.prototype.ValueTypeName="quaternion";ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends Qn{constructor(e,t,n){super(e,t,n)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=hr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends Qn{constructor(e,t,n,i){super(e,t,n,i)}};Gs.prototype.ValueTypeName="vector";var _r=class{constructor(e="",t=-1,n=[],i=Fl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ji(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Y0(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=q0(c);c=yd(c,1,h),l=yd(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new vs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let d=h[1],f=i[d];f||(i[d]=f=[]),f.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function J0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vs;case"vector":case"vector2":case"vector3":case"vector4":return Gs;case"color":return uo;case"quaternion":return ys;case"bool":case"boolean":return _s;case"string":return Ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Y0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=J0(s.type);if(s.times===void 0){let n=[],i=[];X0(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),za(s.settings)&&(t.settings={inTangents:Fs(s.settings.inTangents,Float32Array),outTangents:Fs(s.settings.outTangents,Float32Array)}),t}var Vi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(wd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!wd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function wd(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Hc=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let u=l[d],p=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gp=new Hc,Xi=class{constructor(e){this.manager=e!==void 0?e:gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Xi.DEFAULT_MATERIAL_NAME="__DEFAULT";var fs={},Vh=class extends Error{constructor(e,t){super(e),this.response=t}},ua=class extends Xi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Vi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(fs[e]!==void 0){fs[e].push({onLoad:t,onProgress:n,onError:i});return}fs[e]=[],fs[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&We("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=fs[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=f?parseInt(f):0,p=u!==0,b=0,m=new ReadableStream({start(g){v();function v(){d.read().then(({done:M,value:_})=>{if(M)g.close();else{b+=_.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:b,total:u});for(let y=0,x=h.length;y<x;y++){let S=h[y];S.onProgress&&S.onProgress(T)}g.enqueue(_),v()}},M=>{g.error(M)})}}});return new Response(m)}else throw new Vh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return l.arrayBuffer().then(p=>u.decode(p))}}}).then(l=>{Vi.add(`file:${e}`,l);let h=fs[e];delete fs[e];for(let d=0,f=h.length;d<f;d++){let u=h[d];u.onLoad&&u.onLoad(l)}}).catch(l=>{let h=fs[e];if(h===void 0)throw this.manager.itemError(e),l;delete fs[e];for(let d=0,f=h.length;d<f;d++){let u=h[d];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Jr=new WeakMap,Vc=class extends Xi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Jr.get(a);d===void 0&&(d=[],Jr.set(a,d)),d.push({onLoad:t,onError:i})}return a}let o=na("img");function c(){h(),t&&t(this);let d=Jr.get(this)||[];for(let f=0;f<d.length;f++){let u=d[f];u.onLoad&&u.onLoad(this)}Jr.delete(this),r.manager.itemEnd(e)}function l(d){h(),i&&i(d),Vi.remove(`image:${e}`);let f=Jr.get(this)||[];for(let u=0;u<f.length;u++){let p=f[u];p.onError&&p.onError(d)}Jr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Vi.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var fo=class extends Xi{constructor(e){super(e)}load(e,t,n,i){let r=new gn,a=new Vc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Hs=class extends Gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},po=class extends Hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Oh=new qe,Td=new B,Ad=new B,fa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Td.setFromMatrixPosition(e.matrixWorld),t.position.copy(Td),Ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ad),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Oh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Oh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===ta||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Oh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xc=new B,_c=new In,Hi=new B,mo=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xc,_c,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xc,_c,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xc,_c,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xc,_c,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ns=new B,Ed=new Qe,Rd=new Qe,pn=class extends mo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,t){return this.getViewBounds(e,Ed,Rd),t.subVectors(Rd,Ed)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ga*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wh=class extends fa{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=fr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},go=class extends Hs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},qh=class extends fa{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}},Vs=class extends Hs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},vr=class extends mo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xh=class extends fa{constructor(){super(new vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yr=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Xh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},bo=class extends Hs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ss=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Bh=new WeakMap,xo=class extends Xi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&We("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&We("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Bh.has(a)===!0?(i&&i(Bh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Vi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Bh.set(c,l),Vi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Vi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Yr=-90,Zr=1,da=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new pn(Yr,Zr,e,t);i.layers=this.layers,this.add(i);let r=new pn(Yr,Zr,e,t);r.layers=this.layers,this.add(r);let a=new pn(Yr,Zr,e,t);a.layers=this.layers,this.add(a);let o=new pn(Yr,Zr,e,t);o.layers=this.layers,this.add(o);let c=new pn(Yr,Zr,e,t);c.layers=this.layers,this.add(c);let l=new pn(Yr,Zr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Wc=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var qc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){In.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;In.multiplyQuaternionsFlat(e,a,e,t,e,n),In.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},wu="\\[\\]\\.:\\/",Z0=new RegExp("["+wu+"]","g"),Tu="[^"+wu+"]",$0="[^"+wu.replace("\\.","")+"]",Q0=/((?:WC+[\/:])*)/.source.replace("WC",Tu),eg=/(WCOD+)?/.source.replace("WCOD",$0),tg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tu),ng=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tu),ig=new RegExp("^"+Q0+eg+tg+ng+"$"),sg=["material","materials","bones","map"],jh=class{constructor(e,t,n){let i=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Z0,"")}static parseTrackName(e){let t=ig.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);sg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=jh;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xc=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:or,endingEnd:or};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Ro,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case ep:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Fl:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===Qd;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Nl){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=cr,i.endingEnd=cr):(e?i.endingStart=this.zeroSlopeAtStart?cr:or:i.endingStart=Va,t?i.endingEnd=this.zeroSlopeAtEnd?cr:or:i.endingEnd=Va)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},rg=new Float32Array(1),_o=class extends Pi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==r;++d){let f=i[d],u=f.name,p=h[u];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,u));continue}let b=t&&t._propertyBindings[d].binding.parsedPath;p=new qc(kt.create(n,u,b),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,u),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ho(new Float32Array(2),new Float32Array(2),1,rg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?_r.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Fl),c!==void 0){let d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Xc(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?_r.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Iu=class Iu{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Iu.prototype.isMatrix2=!0;var Kh=Iu;function Au(s,e,t,n){let i=ag(n);switch(t){case uu:return s*e;case xa:return s*e/i.components*i.byteLength;case tl:return s*e/i.components*i.byteLength;case qs:return s*e*2/i.components*i.byteLength;case nl:return s*e*2/i.components*i.byteLength;case fu:return s*e*3/i.components*i.byteLength;case vi:return s*e*4/i.components*i.byteLength;case il:return s*e*4/i.components*i.byteLength;case Mo:case So:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wo:case To:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rl:case ol:return Math.max(s,16)*Math.max(e,8)/4;case sl:case al:return Math.max(s,8)*Math.max(e,8)/2;case cl:case ll:case ul:case fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hl:case Ao:case dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case bl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _l:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Al:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case El:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Cl:case Pl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Il:case Ll:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Eo:case Dl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ag(s){switch(s){case ei:case ou:return{byteLength:1,components:1};case ba:case cu:case Di:return{byteLength:2,components:1};case Qc:case el:return{byteLength:2,components:4};case Li:case $c:case ci:return{byteLength:4,components:1};case lu:case hu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Op(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function cg(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=s.SHORT;else if(l instanceof Uint32Array)u=s.UNSIGNED_INT;else if(l instanceof Int32Array)u=s.INT;else if(l instanceof Int8Array)u=s.BYTE;else if(l instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){let p=d[f],b=d[u];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++f,d[f]=b)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){let b=d[u];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hg=`#ifdef USE_ALPHAHASH
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
#endif`,ug=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mg=`#ifdef USE_AOMAP
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
#endif`,gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bg=`#ifdef USE_BATCHING
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
#endif`,xg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mg=`#ifdef USE_IRIDESCENCE
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
#endif`,Sg=`#ifdef USE_BUMPMAP
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
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lg=`#define PI 3.141592653589793
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
} // validated`,Dg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jg=`#ifdef USE_GRADIENTMAP
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
}`,Yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,eb=`#ifdef USE_ENVMAP
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
#endif`,tb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ib=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rb=`PhysicalMaterial material;
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
#endif`,ab=`uniform sampler2D dfgLUT;
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
}`,ob=`
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
#endif`,cb=`#if defined( RE_IndirectDiffuse )
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
#endif`,lb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hb=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xb=`#if defined( USE_POINTS_UV )
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
#endif`,_b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mb=`#if defined( USE_MORPHCOLORS )
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
#endif`,Sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`#ifdef USE_MORPHTARGETS
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
#endif`,Tb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ab=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Eb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ib=`#ifdef USE_NORMALMAP
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
#endif`,Lb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Db=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ub=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jb=`float getShadowMask() {
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
}`,Kb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jb=`#ifdef USE_SKINNING
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
#endif`,Yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zb=`#ifdef USE_SKINNING
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
#endif`,$b=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#ifdef USE_TRANSMISSION
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`uniform float backgroundBlurriness;
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`#include <common>
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
}`,mx=`#if DEPTH_PACKING == 3200
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
}`,gx=`#define DISTANCE
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
}`,bx=`#define DISTANCE
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`uniform float scale;
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
}`,yx=`uniform vec3 diffuse;
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
}`,Mx=`#include <common>
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
}`,Sx=`uniform vec3 diffuse;
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
}`,wx=`#define LAMBERT
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
}`,Tx=`#define LAMBERT
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
}`,Ax=`#define MATCAP
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
}`,Ex=`#define MATCAP
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define NORMAL
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
}`,Px=`#define PHONG
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
}`,Ix=`#define PHONG
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
}`,Lx=`#define STANDARD
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
}`,Dx=`#define STANDARD
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
}`,Nx=`#define TOON
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
}`,Fx=`#define TOON
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
}`,kx=`uniform float size;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Ox=`#include <common>
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
}`,Bx=`uniform vec3 color;
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
}`,zx=`uniform float rotation;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:lg,alphahash_pars_fragment:hg,alphamap_fragment:ug,alphamap_pars_fragment:fg,alphatest_fragment:dg,alphatest_pars_fragment:pg,aomap_fragment:mg,aomap_pars_fragment:gg,batching_pars_vertex:bg,batching_vertex:xg,begin_vertex:_g,beginnormal_vertex:vg,bsdfs:yg,iridescence_fragment:Mg,bumpmap_pars_fragment:Sg,clipping_planes_fragment:wg,clipping_planes_pars_fragment:Tg,clipping_planes_pars_vertex:Ag,clipping_planes_vertex:Eg,color_fragment:Rg,color_pars_fragment:Cg,color_pars_vertex:Pg,color_vertex:Ig,common:Lg,defaultnormal_vertex:Dg,displacementmap_pars_vertex:Ng,displacementmap_vertex:Fg,emissivemap_fragment:kg,emissivemap_pars_fragment:Ug,colorspace_fragment:Og,colorspace_pars_fragment:Bg,envmap_fragment:zg,envmap_common_pars_fragment:Gg,envmap_pars_fragment:Hg,envmap_pars_vertex:Vg,envmap_physical_pars_fragment:eb,envmap_vertex:Wg,fog_vertex:qg,fog_pars_vertex:Xg,fog_fragment:jg,fog_pars_fragment:Kg,gradientmap_pars_fragment:Jg,lightmap_pars_fragment:Yg,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:$g,lights_pars_begin:Qg,lights_toon_fragment:tb,lights_toon_pars_fragment:nb,lights_phong_fragment:ib,lights_phong_pars_fragment:sb,lights_physical_fragment:rb,lights_physical_pars_fragment:ab,lights_fragment_begin:ob,lights_fragment_maps:cb,lights_fragment_end:lb,lightprobes_pars_fragment:hb,logdepthbuf_fragment:ub,logdepthbuf_pars_fragment:fb,logdepthbuf_pars_vertex:db,logdepthbuf_vertex:pb,map_fragment:mb,map_pars_fragment:gb,map_particle_fragment:bb,map_particle_pars_fragment:xb,metalnessmap_fragment:_b,metalnessmap_pars_fragment:vb,morphinstance_vertex:yb,morphcolor_vertex:Mb,morphnormal_vertex:Sb,morphtarget_pars_vertex:wb,morphtarget_vertex:Tb,normal_fragment_begin:Ab,normal_fragment_maps:Eb,normal_pars_fragment:Rb,normal_pars_vertex:Cb,normal_vertex:Pb,normalmap_pars_fragment:Ib,clearcoat_normal_fragment_begin:Lb,clearcoat_normal_fragment_maps:Db,clearcoat_pars_fragment:Nb,iridescence_pars_fragment:Fb,opaque_fragment:kb,packing:Ub,premultiplied_alpha_fragment:Ob,project_vertex:Bb,dithering_fragment:zb,dithering_pars_fragment:Gb,roughnessmap_fragment:Hb,roughnessmap_pars_fragment:Vb,shadowmap_pars_fragment:Wb,shadowmap_pars_vertex:qb,shadowmap_vertex:Xb,shadowmask_pars_fragment:jb,skinbase_vertex:Kb,skinning_pars_vertex:Jb,skinning_vertex:Yb,skinnormal_vertex:Zb,specularmap_fragment:$b,specularmap_pars_fragment:Qb,tonemapping_fragment:ex,tonemapping_pars_fragment:tx,transmission_fragment:nx,transmission_pars_fragment:ix,uv_pars_fragment:sx,uv_pars_vertex:rx,uv_vertex:ax,worldpos_vertex:ox,background_vert:cx,background_frag:lx,backgroundCube_vert:hx,backgroundCube_frag:ux,cube_vert:fx,cube_frag:dx,depth_vert:px,depth_frag:mx,distance_vert:gx,distance_frag:bx,equirect_vert:xx,equirect_frag:_x,linedashed_vert:vx,linedashed_frag:yx,meshbasic_vert:Mx,meshbasic_frag:Sx,meshlambert_vert:wx,meshlambert_frag:Tx,meshmatcap_vert:Ax,meshmatcap_frag:Ex,meshnormal_vert:Rx,meshnormal_frag:Cx,meshphong_vert:Px,meshphong_frag:Ix,meshphysical_vert:Lx,meshphysical_frag:Dx,meshtoon_vert:Nx,meshtoon_frag:Fx,points_vert:kx,points_frag:Ux,shadow_vert:Ox,shadow_frag:Bx,sprite_vert:zx,sprite_frag:Gx},Pe={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Zi={basic:{uniforms:Gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Gn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Gn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Gn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Gn([Pe.points,Pe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Gn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Gn([Pe.common,Pe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Gn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Gn([Pe.sprite,Pe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Gn([Pe.common,Pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Gn([Pe.lights,Pe.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Zi.physical={uniforms:Gn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Ol={r:0,b:0,g:0},Hx=new qe,Bp=new et;Bp.set(-1,0,0,0,1,0,0,0,1);function Vx(s,e,t,n,i,r){let a=new Ce(0),o=i===!0?0:1,c,l,h=null,d=0,f=null;function u(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let _=v.backgroundBlurriness>0;M=e.get(M,_)}return M}function p(v){let M=!1,_=u(v);_===null?m(a,o):_&&_.isColor&&(m(_,1),M=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(v,M){let _=u(M);_&&_.isCubeTexture?(l===void 0&&(l=new ut(new xs(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Er(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,y,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Bp),l.material.toneMapped=ct.getTransfer(_.colorSpace)!==Et,(h!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ut(new ai(2,2),new Nn({name:"BackgroundMaterial",uniforms:Er(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ct.getTransfer(_.colorSpace)!==Et,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,M){v.getRGB(Ol,Su(s)),t.buffers.color.setClear(Ol.r,Ol.g,Ol.b,M,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:p,addToRenderList:b,dispose:g}}function Wx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(F,C,V,N,J){let te=!1,z=d(F,N,V,C);r!==z&&(r=z,l(r.object)),te=u(F,N,V,J),te&&p(F,N,V,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,_(F,C,V,N),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return s.createVertexArray()}function l(F){return s.bindVertexArray(F)}function h(F){return s.deleteVertexArray(F)}function d(F,C,V,N){let J=N.wireframe===!0,te=n[C.id];te===void 0&&(te={},n[C.id]=te);let z=F.isInstancedMesh===!0?F.id:0,le=te[z];le===void 0&&(le={},te[z]=le);let Y=le[V.id];Y===void 0&&(Y={},le[V.id]=Y);let Q=Y[J];return Q===void 0&&(Q=f(c()),Y[J]=Q),Q}function f(F){let C=[],V=[],N=[];for(let J=0;J<t;J++)C[J]=0,V[J]=0,N[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:N,object:F,attributes:{},index:null}}function u(F,C,V,N){let J=r.attributes,te=C.attributes,z=0,le=V.getAttributes();for(let Y in le)if(le[Y].location>=0){let he=J[Y],Ue=te[Y];if(Ue===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(Ue=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(Ue=F.instanceColor)),he===void 0||he.attribute!==Ue||Ue&&he.data!==Ue.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function p(F,C,V,N){let J={},te=C.attributes,z=0,le=V.getAttributes();for(let Y in le)if(le[Y].location>=0){let he=te[Y];he===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(he=F.instanceColor));let Ue={};Ue.attribute=he,he&&he.data&&(Ue.data=he.data),J[Y]=Ue,z++}r.attributes=J,r.attributesNum=z,r.index=N}function b(){let F=r.newAttributes;for(let C=0,V=F.length;C<V;C++)F[C]=0}function m(F){g(F,0)}function g(F,C){let V=r.newAttributes,N=r.enabledAttributes,J=r.attributeDivisors;V[F]=1,N[F]===0&&(s.enableVertexAttribArray(F),N[F]=1),J[F]!==C&&(s.vertexAttribDivisor(F,C),J[F]=C)}function v(){let F=r.newAttributes,C=r.enabledAttributes;for(let V=0,N=C.length;V<N;V++)C[V]!==F[V]&&(s.disableVertexAttribArray(V),C[V]=0)}function M(F,C,V,N,J,te,z){z===!0?s.vertexAttribIPointer(F,C,V,J,te):s.vertexAttribPointer(F,C,V,N,J,te)}function _(F,C,V,N){b();let J=N.attributes,te=V.getAttributes(),z=C.defaultAttributeValues;for(let le in te){let Y=te[le];if(Y.location>=0){let Q=J[le];if(Q===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),Q!==void 0){let he=Q.normalized,Ue=Q.itemSize,Ye=e.get(Q);if(Ye===void 0)continue;let $=Ye.buffer,Me=Ye.type,De=Ye.bytesPerElement,Be=Me===s.INT||Me===s.UNSIGNED_INT||Q.gpuType===$c;if(Q.isInterleavedBufferAttribute){let Re=Q.data,je=Re.isInterleavedBuffer===!0?Re.stride:Re.itemSize,Dt=Q.offset;if(Re.isInstancedInterleavedBuffer||Re.isInstancedBufferAttribute){for(let Xe=0;Xe<Y.locationSize;Xe++)g(Y.location+Xe,Re.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Xe=0;Xe<Y.locationSize;Xe++)m(Y.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,$);for(let Xe=0;Xe<Y.locationSize;Xe++)M(Y.location+Xe,Ue/Y.locationSize,Me,he,je*De,(Dt+Ue/Y.locationSize*Xe)*De,Be)}else{if(Q.isInstancedBufferAttribute){for(let Re=0;Re<Y.locationSize;Re++)g(Y.location+Re,Q.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Re=0;Re<Y.locationSize;Re++)m(Y.location+Re);s.bindBuffer(s.ARRAY_BUFFER,$);for(let Re=0;Re<Y.locationSize;Re++)M(Y.location+Re,Ue/Y.locationSize,Me,he,Ue*De,Ue/Y.locationSize*Re*De,Be)}}else if(z!==void 0){let he=z[le];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(Y.location,he);break;case 3:s.vertexAttrib3fv(Y.location,he);break;case 4:s.vertexAttrib4fv(Y.location,he);break;default:s.vertexAttrib1fv(Y.location,he)}}}}v()}function T(){D();for(let F in n){let C=n[F];for(let V in C){let N=C[V];for(let J in N){let te=N[J];for(let z in te)h(te[z].object),delete te[z];delete N[J]}}delete n[F]}}function y(F){if(n[F.id]===void 0)return;let C=n[F.id];for(let V in C){let N=C[V];for(let J in N){let te=N[J];for(let z in te)h(te[z].object),delete te[z];delete N[J]}}delete n[F.id]}function x(F){for(let C in n){let V=n[C];for(let N in V){let J=V[N];if(J[F.id]===void 0)continue;let te=J[F.id];for(let z in te)h(te[z].object),delete te[z];delete J[F.id]}}}function S(F){for(let C in n){let V=n[C],N=F.isInstancedMesh===!0?F.id:0,J=V[N];if(J!==void 0){for(let te in J){let z=J[te];for(let le in z)h(z[le].object),delete z[le];delete J[te]}delete V[N],Object.keys(V).length===0&&delete n[C]}}}function D(){L(),a=!0,r!==i&&(r=i,l(r.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:y,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function qx(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let u=0;u<h;u++)f+=l[u];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Xx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==vi&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let S=x===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==ei&&x!==ci&&!S&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(We("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),y=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,maxSamples:T,samples:y}}function jx(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Ci,o=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){let p=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,M=v*4,_=g.clippingState||null;c.value=_,_=h(p,f,M,u);for(let T=0;T!==M;++T)_[T]=t[T];g.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,p){let b=d!==null?d.length:0,m=null;if(b!==0){if(m=c.value,p!==!0||m===null){let g=u+b*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,_=u;M!==b;++M,_+=4)a.copy(d[M]).applyMatrix4(v,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}var Lo=class extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new eo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xs(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:Mr});r.uniforms.tEquirect.value=t;let a=new ut(i,r),o=t.minFilter;return t.minFilter===_i&&(t.minFilter=mn),new da(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},bp=256,Kx=3,Jx=20,zp=256,Gp=16,Yx=3,Zx=new B,$x=new Ce,zl=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new da(1,10,null),this._boxMesh=new ut(new xs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Zx}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,f=c.autoClearColor,u=c.autoClearDepth,p=c.autoClearStencil,b=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,b===null&&(e.background=c.getClearColor($x));let m=new da(n,i,h);return m.position.copy(o),m.update(c,e),c.autoClear=d,c.autoClearColor=f,c.autoClearDepth=u,c.autoClearStencil=p,e.background=b,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(bp,vu(e))}_fromTexture(e,t){e.mapping===wr||e.mapping===ma?this._setSize(e.image.length===0?bp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=xp(e,!1,!1),n=Math.log2(e)-Kx;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===wr||e.mapping===ma?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_p()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Qx(),this._integrationMaterial=e_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Gp);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-Yx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(zp*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=t_());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function xp(s,e,t){return new Lo(s,{minFilter:_i,generateMipmaps:e,type:Di,colorSpace:qn,depthBuffer:t})}function Do(s,e,t){return new Nn({name:s,uniforms:e,vertexShader:rt.cube_vert,fragmentShader:t,side:Fn,blending:Mr,depthTest:!1,depthWrite:!1})}function Qx(){return Do("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${zp}u

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
	`)}function e_(){return Do("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gp}},`

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
	`)}function t_(){return Do("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Jx}
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
	`)}function _p(){return Do("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function vp(){return Do("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function n_(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?a(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Jc||u===Yc)if(e.has(f)){let p=e.get(f).texture;return o(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let b=new Lo(p.height);return b.fromEquirectangularTexture(s,f),e.set(f,b),f.addEventListener("dispose",l),o(b.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,p=u===Jc||u===Yc,b=u===wr||u===ma;if(p||b){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new zl(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return p&&v&&v.height>0||b&&v&&c(v)?(n===null&&(n=new zl(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,u){return u===Jc?f.mapping=wr:u===Yc&&(f.mapping=ma),f}function c(f){let u=0,p=6;for(let b=0;b<p;b++)f[b]!==void 0&&u++;return u===p}function l(f){let u=f.target;u.removeEventListener("dispose",l);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function i_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&lr("WebGLRenderer: "+n+" extension not supported."),i}}}function s_(s,e,t,n){let i={},r=new WeakMap,a=new FinalizationRegistry(p=>delete i[p]);function o(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete i[p.id],a.unregister(p);let b=r.get(p);b&&(e.remove(b),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,b){return i[b.id]!==void 0||(b.addEventListener("dispose",o),i[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}function h(p){let b=p.attributes;for(let m in b)e.update(b[m],s.ARRAY_BUFFER)}function d(p){let b=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=b!==null?b.array.length:m.array.length/3-1,M=m.count>=65535?Za:Ya,_=new M(Math.ceil(v/3)*6,1),T=_.array;if(b!==null){let x=b.array;g=b.version;for(let S=0,D=0;S<v;S+=3){let L=x[S+0],F=x[S+1],C=x[S+2];T[D++]=L,T[D++]=F,T[D++]=F,T[D++]=C,T[D++]=C,T[D++]=L}}else{g=m.version;for(let x=0,S=0;x<v;x+=3){let D=x+0,L=x+1,F=x+2;T[S++]=D,T[S++]=L,T[S++]=L,T[S++]=F,T[S++]=F,T[S++]=D}}_.version=g;let y=r.get(p);y&&e.remove(y),r.set(p,_)}function f(p){let b=r.get(p);if(b){let m=p.index;m!==null&&b.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(let p in i){let b=i[p].deref();b!==void 0&&c(b)}}return{get:l,update:h,getWireframeAttribute:f,dispose:u}}function r_(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*a,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let b=0;for(let m=0;m<u;m++)b+=f[m];t.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function a_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function o_(s,e,t){let n=new WeakMap,i=new Lt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let D=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],M=0;u===!0&&(M=1),p===!0&&(M=2),b===!0&&(M=3);let _=o.attributes.position.count*M,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let y=new Float32Array(_*T*4*d),x=new Xa(y,_,T,d);x.type=ci,x.needsUpdate=!0;let S=M*4;for(let L=0;L<d;L++){let F=m[L],C=g[L],V=v[L],N=_*T*4*L;for(let J=0;J<F.count;J++){let te=J*S;u===!0&&(i.fromBufferAttribute(F,J),y[N+te+0]=i.x,y[N+te+1]=i.y,y[N+te+2]=i.z,y[N+te+3]=0),p===!0&&(i.fromBufferAttribute(C,J),y[N+te+4]=i.x,y[N+te+5]=i.y,y[N+te+6]=i.z,y[N+te+7]=0),b===!0&&(i.fromBufferAttribute(V,J),y[N+te+8]=i.x,y[N+te+9]=i.y,y[N+te+10]=i.z,y[N+te+11]=V.itemSize===4?i.w:1)}}f={count:d,texture:x,size:new Qe(_,T)},n.set(o,f),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let u=0;for(let b=0;b<l.length;b++)u+=l[b];let p=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function c_(s,e,t,n,i){let r=new WeakMap;function a(l){let h=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var l_={[eu]:"LINEAR_TONE_MAPPING",[tu]:"REINHARD_TONE_MAPPING",[nu]:"CINEON_TONE_MAPPING",[yo]:"ACES_FILMIC_TONE_MAPPING",[su]:"AGX_TONE_MAPPING",[ru]:"NEUTRAL_TONE_MAPPING",[iu]:"CUSTOM_TONE_MAPPING"};function h_(s,e,t,n,i,r){let a=new si(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Ut;h.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new mt([0,2,0,0,2,0],2));let d=new Fc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ut(h,d),u=new vr(-1,1,1,-1,0,1),p=null,b=null,m=!1,g,v=null,M=[],_=!1;this.setSize=function(T,y){a.setSize(T,y),o!==null&&o.setSize(T,y),c!==null&&c.setSize(T,y);for(let x=0;x<M.length;x++){let S=M[x];S.setSize&&S.setSize(T,y)}},this.setEffects=function(T){M=T,_=M.length>0&&M[0].isRenderPass===!0;let y=a.width,x=a.height;M.length>0&&o===null&&(o=new si(y,x,{type:Di,depthBuffer:!1,stencilBuffer:!1}),c=new si(y,x,{type:Di,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&M.some(D=>D.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new bs(y,x),r===!0&&(l.format=ws,l.type=Ar)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let D=0;D<M.length;D++){let L=M[D];L.setSize&&L.setSize(y,x),S&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(l)}},this.begin=function(T,y){if(m||T.toneMapping===Ki&&M.length===0)return!1;if(v=y,y!==null){let x=y.width,S=y.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return _===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=Ki,!0},this.hasRenderPass=function(){return _},this.end=function(T,y){T.toneMapping=g,m=!0;let x=a,S=o;for(let D=0;D<M.length;D++){let L=M[D];L.enabled!==!1&&(L.render(T,S,x,y),L.needsSwap!==!1&&(x=S,S=S===o?c:o))}if(p!==T.outputColorSpace||b!==T.toneMapping){p=T.outputColorSpace,b=T.toneMapping,d.defines={},ct.getTransfer(p)===Et&&(d.defines.SRGB_TRANSFER="");let D=l_[b];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(f,u),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var Hp=new gn,Vp=new bs(1,1),Wp=new no(1),qp=new Xa,Xp=new Ic,jp=new eo,yp=[],Mp=[],Sp=new Float32Array(16),wp=new Float32Array(9),Tp=new Float32Array(4);function Ma(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=yp[i];if(r===void 0&&(r=new Float32Array(i),yp[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function vn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function yn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Hl(s,e){let t=Mp[e];t===void 0&&(t=new Int32Array(e),Mp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function u_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function f_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2fv(this.addr,e),yn(t,e)}}function d_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;s.uniform3fv(this.addr,e),yn(t,e)}}function p_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4fv(this.addr,e),yn(t,e)}}function m_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(vn(t,n))return;Tp.set(n),s.uniformMatrix2fv(this.addr,!1,Tp),yn(t,n)}}function g_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(vn(t,n))return;wp.set(n),s.uniformMatrix3fv(this.addr,!1,wp),yn(t,n)}}function b_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(vn(t,n))return;Sp.set(n),s.uniformMatrix4fv(this.addr,!1,Sp),yn(t,n)}}function x_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function __(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2iv(this.addr,e),yn(t,e)}}function v_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3iv(this.addr,e),yn(t,e)}}function y_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4iv(this.addr,e),yn(t,e)}}function M_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function S_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2uiv(this.addr,e),yn(t,e)}}function w_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3uiv(this.addr,e),yn(t,e)}}function T_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4uiv(this.addr,e),yn(t,e)}}function Vl(s){return s.version===0&&(s.compareFunction=gu,s.needsUpdate=!0),s}function A_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Vl(Vp):r=Hp,t.setTexture2D(e||r,i)}function E_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xp,i)}function R_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Vl(Wp):r=jp,t.setTextureCube(e||r,i)}function C_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qp,i)}function P_(s){switch(s){case 5126:return u_;case 35664:return f_;case 35665:return d_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return b_;case 5124:case 35670:return x_;case 35667:case 35671:return __;case 35668:case 35672:return v_;case 35669:case 35673:return y_;case 5125:return M_;case 36294:return S_;case 36295:return w_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}function I_(s,e){s.uniform1fv(this.addr,e)}function L_(s,e){let t=Ma(e,this.size,2);s.uniform2fv(this.addr,t)}function D_(s,e){let t=Ma(e,this.size,3);s.uniform3fv(this.addr,t)}function N_(s,e){let t=Ma(e,this.size,4);s.uniform4fv(this.addr,t)}function F_(s,e){let t=Ma(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function k_(s,e){let t=Ma(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function U_(s,e){let t=Ma(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function O_(s,e){s.uniform1iv(this.addr,e)}function B_(s,e){s.uniform2iv(this.addr,e)}function z_(s,e){s.uniform3iv(this.addr,e)}function G_(s,e){s.uniform4iv(this.addr,e)}function H_(s,e){s.uniform1uiv(this.addr,e)}function V_(s,e){s.uniform2uiv(this.addr,e)}function W_(s,e){s.uniform3uiv(this.addr,e)}function q_(s,e){s.uniform4uiv(this.addr,e)}function X_(s,e,t){let n=this.cache,i=e.length,r=Hl(t,i);vn(n,r)||(s.uniform1iv(this.addr,r),yn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Vl(Vp):a=Hp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function j_(s,e,t){let n=this.cache,i=e.length,r=Hl(t,i);vn(n,r)||(s.uniform1iv(this.addr,r),yn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Xp,r[a])}function K_(s,e,t){let n=this.cache,i=e.length,r=Hl(t,i);vn(n,r)||(s.uniform1iv(this.addr,r),yn(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Vl(Wp):a=jp;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function J_(s,e,t){let n=this.cache,i=e.length,r=Hl(t,i);vn(n,r)||(s.uniform1iv(this.addr,r),yn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||qp,r[a])}function Y_(s){switch(s){case 5126:return I_;case 35664:return L_;case 35665:return D_;case 35666:return N_;case 35674:return F_;case 35675:return k_;case 35676:return U_;case 5124:case 35670:return O_;case 35667:case 35671:return B_;case 35668:case 35672:return z_;case 35669:case 35673:return G_;case 5125:return H_;case 36294:return V_;case 36295:return W_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return J_}}var Nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=P_(t.type)}},Fu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y_(t.type)}},ku=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Lu=/(\w+)(\])?(\[|\.)?/g;function Ap(s,e){s.seq.push(e),s.map[e.id]=e}function Z_(s,e,t){let n=s.name,i=n.length;for(Lu.lastIndex=0;;){let r=Lu.exec(n),a=Lu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Ap(t,l===void 0?new Nu(o,s,e):new Fu(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new ku(o),Ap(t,d)),t=d}}}var ya=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Z_(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Ep(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var $_=37297,Q_=0;function ev(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Rp=new et;function tv(s){ct._getMatrix(Rp,ct.workingColorSpace,s);let e=`mat3( ${Rp.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(s)){case Wa:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Cp(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ev(s.getShaderSource(e),o)}else return r}function nv(s,e){let t=tv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var iv={[eu]:"Linear",[tu]:"Reinhard",[nu]:"Cineon",[yo]:"ACESFilmic",[su]:"AgX",[ru]:"Neutral",[iu]:"Custom"};function sv(s,e){let t=iv[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bl=new B;function rv(){ct.getLuminanceCoefficients(Bl);let s=Bl.x.toFixed(4),e=Bl.y.toFixed(4),t=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function av(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function ov(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Io(s){return s!==""}function Pp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ip(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(s){return s.replace(lv,hv)}function hv(s,e){let t=rt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Uu(t)}var uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lp(s){return s.replace(uv,fv)}function fv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Dp(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var dv={[vo]:"SHADOWMAP_TYPE_PCF",[pa]:"SHADOWMAP_TYPE_VSM"};function pv(s){return dv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mv={[ma]:"ENVMAP_MODE_REFRACTION"};function gv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":mv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var bv={[Kc]:"ENVMAP_BLENDING_MULTIPLY",[Yd]:"ENVMAP_BLENDING_MIX",[Zd]:"ENVMAP_BLENDING_ADD"};function xv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":bv[s.combine]||"ENVMAP_BLENDING_NONE"}function _v(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=pv(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=gv(t),d=xv(t),f=av(t),u=ov(r),p=i.createProgram(),b,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Io).join(`
`),b.length>0&&(b+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Io).join(`
`),m.length>0&&(m+=`
`)):(b=[Dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),m=[Dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?rt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,nv("linearToOutputTexel",t.outputColorSpace),rv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Io).join(`
`)),a=Uu(a),a=Pp(a,t),a=Ip(a,t),o=Uu(o),o=Pp(o,t),o=Ip(o,t),a=Lp(a),o=Lp(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,b=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,m=["#define varying in",t.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+b+a,M=g+m+o,_=Ep(i,i.VERTEX_SHADER,v),T=Ep(i,i.FRAGMENT_SHADER,M);i.attachShader(p,_),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function y(L){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(p)||"",C=i.getShaderInfoLog(_)||"",V=i.getShaderInfoLog(T)||"",N=F.trim(),J=C.trim(),te=V.trim(),z=!0,le=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,_,T);else{let Y=Cp(i,_,"vertex"),Q=Cp(i,T,"fragment");$e("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+Y+`
`+Q)}else N!==""?We("WebGLProgram: Program Info Log:",N):(J===""||te==="")&&(le=!1);le&&(L.diagnostics={runnable:z,programLog:N,vertexShader:{log:J,prefix:b},fragmentShader:{log:te,prefix:m}})}i.deleteShader(_),i.deleteShader(T),x=new ya(i,p),S=cv(i,p)}let x;this.getUniforms=function(){return x===void 0&&y(this),x};let S;this.getAttributes=function(){return S===void 0&&y(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(p,$_)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=T,this}var vv=0,Ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bu(e),t.set(e,n)),n}},Bu=class{constructor(e){this.id=vv++,this.code=e,this.usedTimes=0}};function yv(s){return s===qs||s===Ao||s===Eo}function Mv(s,e,t,n,i,r){let a=new ja,o=new Ou,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,S,D,L,F,C){let V=L.fog,N=F.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,te=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||J,te),le=f[x.type],Y=n.precision;x.precision!==null&&(Y=n.getMaxPrecision(x.precision),Y!==x.precision&&We("WebGLProgram.getParameters:",x.precision,"not supported, using",Y,"instead."));let Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,he=Q!==void 0?Q.length:0,Ue=0;N.morphAttributes.position!==void 0&&(Ue=1),N.morphAttributes.normal!==void 0&&(Ue=2),N.morphAttributes.color!==void 0&&(Ue=3);let Ye,$,Me,De;if(le){let pe=Zi[le];Ye=pe.vertexShader,$=pe.fragmentShader}else{Ye=x.vertexShader,$=x.fragmentShader;let pe=o.getVertexShaderStage(x),ht=o.getFragmentShaderStage(x);o.update(x,pe,ht),Me=pe.id,De=ht.id}let Be=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),je=F.isInstancedMesh===!0,Dt=F.isBatchedMesh===!0,Xe=!!x.map,xt=!!x.matcap,yt=!!z,st=yt&&z.isPMREMTexture===!0,$t=!!x.aoMap,Wt=!!x.lightMap,Tn=!!x.bumpMap&&x.wireframe===!1,Mt=!!x.normalMap,Vn=!!x.displacementMap,jt=!!x.emissiveMap,Ln=!!x.metalnessMap,Dn=!!x.roughnessMap,an=x.anisotropy>0,G=x.clearcoat>0,Un=x.diffuseRoughness>0,Ct=x.dispersion>0,Tt=x.retroreflectivity>0,we=x.iridescence>0,qt=x.sheen>0,Oe=x.transmission>0,Fe=an&&!!x.anisotropyMap,I=G&&!!x.clearcoatMap,w=G&&!!x.clearcoatNormalMap,K=G&&!!x.clearcoatRoughnessMap,ue=Un&&!!x.diffuseRoughnessMap,fe=we&&!!x.iridescenceMap,ie=we&&!!x.iridescenceThicknessMap,ye=qt&&!!x.sheenColorMap,ne=qt&&!!x.sheenRoughnessMap,oe=!!x.specularMap,ae=!!x.specularColorMap,k=!!x.specularIntensityMap,se=Oe&&!!x.transmissionMap,ee=Oe&&!!x.thicknessMap,_e=!!x.gradientMap,xe=!!x.alphaMap,ge=x.alphaTest>0,Ve=!!x.alphaHash,Ke=!!x.extensions,be=Ki;x.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(be=s.toneMapping);let He=st?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,tt={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:Ye,fragmentShader:$,defines:x.defines,customVertexShaderID:Me,customFragmentShaderID:De,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Y,batching:Dt,batchingColor:Dt&&F._colorsTexture!==null,instancing:je,instancingColor:je&&F.instanceColor!==null,instancingMorph:je&&F.morphTexture!==null,outputColorSpace:Be===null?s.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Xe,matcap:xt,envMap:yt,envMapMode:yt&&z.mapping,envMapPMREM:st,envMapMaxLod:st?He.length-1:null,envMapSize:st?He[0].width:null,aoMap:$t,lightMap:Wt,bumpMap:Tn,normalMap:Mt,displacementMap:Vn,emissiveMap:jt,normalMapObjectSpace:Mt&&x.normalMapType===np,normalMapTangentSpace:Mt&&x.normalMapType===va,packedNormalMap:Mt&&x.normalMapType===va&&yv(x.normalMap.format),metalnessMap:Ln,roughnessMap:Dn,anisotropy:an,anisotropyMap:Fe,clearcoat:G,clearcoatMap:I,clearcoatNormalMap:w,clearcoatRoughnessMap:K,diffuseRoughness:Un,diffuseRoughnessMap:ue,dispersion:Ct,retroreflection:Tt,iridescence:we,iridescenceMap:fe,iridescenceThicknessMap:ie,sheen:qt,sheenColorMap:ye,sheenRoughnessMap:ne,specularMap:oe,specularColorMap:ae,specularIntensityMap:k,transmission:Oe,transmissionMap:se,thicknessMap:ee,gradientMap:_e,opaque:x.transparent===!1&&x.blending===Ws&&x.alphaToCoverage===!1,alphaMap:xe,alphaTest:ge,alphaHash:Ve,combine:x.combine,mapUv:Xe&&u(x.map.channel),aoMapUv:$t&&u(x.aoMap.channel),lightMapUv:Wt&&u(x.lightMap.channel),bumpMapUv:Tn&&u(x.bumpMap.channel),normalMapUv:Mt&&u(x.normalMap.channel),displacementMapUv:Vn&&u(x.displacementMap.channel),emissiveMapUv:jt&&u(x.emissiveMap.channel),metalnessMapUv:Ln&&u(x.metalnessMap.channel),roughnessMapUv:Dn&&u(x.roughnessMap.channel),anisotropyMapUv:Fe&&u(x.anisotropyMap.channel),clearcoatMapUv:I&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:fe&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:ne&&u(x.sheenRoughnessMap.channel),specularMapUv:oe&&u(x.specularMap.channel),specularColorMapUv:ae&&u(x.specularColorMap.channel),specularIntensityMapUv:k&&u(x.specularIntensityMap.channel),transmissionMapUv:se&&u(x.transmissionMap.channel),thicknessMapUv:ee&&u(x.thicknessMap.channel),alphaMapUv:xe&&u(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Mt||an),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(Xe||xe),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&Mt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Re,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ue,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:C.filter(pe=>pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:Xe&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===Et,decodeVideoTextureEmissive:jt&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hn,flipSided:x.side===Fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ke&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&x.extensions.multiDraw===!0||Dt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function b(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)S.push(D),S.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(m(S,x),g(S,x),S.push(s.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let S=f[x.type],D;if(S){let L=Zi[S];D=pp.clone(L.uniforms)}else D=x.uniforms;return D}function M(x,S){let D=h.get(S);return D!==void 0?++D.usedTimes:(D=new _v(s,S,x,i),l.push(D),h.set(S,D)),D}function _(x){if(--x.usedTimes===0){let S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function y(){o.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:v,acquireProgram:M,releaseProgram:_,releaseShaderCache:T,programs:l,dispose:y}}function Sv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function wv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Np(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Fp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,p,b,m,g){let v=s[e];return v===void 0?(v={id:f.id,object:f,geometry:u,material:p,materialVariant:a(f),groupOrder:b,renderOrder:f.renderOrder,z:m,group:g},s[e]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=p,v.materialVariant=a(f),v.groupOrder=b,v.renderOrder=f.renderOrder,v.z=m,v.group=g),e++,v}function c(f,u,p,b,m,g,v){v.reversedDepth===!0&&(m=-m);let M=o(f,u,p,b,m,g);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):t.push(M)}function l(f,u,p,b,m,g){let v=o(f,u,p,b,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function h(f,u){t.length>1&&t.sort(f||wv),n.length>1&&n.sort(u||Np),i.length>1&&i.sort(u||Np)}function d(){for(let f=e,u=s.length;f<u;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:h}}function Tv(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Fp,s.set(n,[a])):i>=r.length?(a=new Fp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Av(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Ce};break;case"SpotLight":t={position:new B,direction:new B,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function Ev(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Rv=0;function Cv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Pv(s){let e=new Av,t=Ev(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);let i=new B,r=new qe,a=new qe;function o(l){let h=0,d=0,f=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let u=0,p=0,b=0,m=0,g=0,v=0,M=0,_=0,T=0,y=0,x=0,S=0,D=0,L=0;l.sort(Cv);for(let C=0,V=l.length;C<V;C++){let N=l[C],J=N.color,te=N.intensity,z=N.distance,le=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===qs?le=N.shadow.map.texture:le=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=J.r*te,d+=J.g*te,f+=J.b*te;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(N.sh.coefficients[Y],te);L++}else if(N.isSunLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,he=t.get(N);he.shadowIntensity=Q.intensity,he.shadowBias=Q.bias,he.shadowNormalBias=Q.normalBias,he.shadowRadius=Q.radius,he.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=he,n.sunShadowMap[p]=le;let Ue=Q.getViewportCount();for(let Ye=0;Ye<Ue;Ye++)n.sunShadowMatrix[b+Ye]=Q.getMatrix(Ye),n.sunShadowCascade[b+Ye]=Q._cascadeData[Ye];b+=Ue,p++}n.sun[u]=Y,u++}else if(N.isDirectionalLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,he=t.get(N);he.shadowIntensity=Q.intensity,he.shadowBias=Q.bias,he.shadowNormalBias=Q.normalBias,he.shadowRadius=Q.radius,he.shadowMapSize=Q.mapSize,n.directionalShadow[m]=he,n.directionalShadowMap[m]=le,n.directionalShadowMatrix[m]=N.shadow.matrix,T++}n.directional[m]=Y,m++}else if(N.isSpotLight){let Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(J).multiplyScalar(te),Y.distance=z,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,n.spot[v]=Y;let Q=N.shadow;if(N.map&&(n.spotLightMap[S]=N.map,S++,Q.updateMatrices(N),N.castShadow&&D++),n.spotLightMatrix[v]=Q.matrix,N.castShadow){let he=t.get(N);he.shadowIntensity=Q.intensity,he.shadowBias=Q.bias,he.shadowNormalBias=Q.normalBias,he.shadowRadius=Q.radius,he.shadowMapSize=Q.mapSize,n.spotShadow[v]=he,n.spotShadowMap[v]=le,x++}v++}else if(N.isRectAreaLight){let Y=e.get(N);Y.color.copy(J).multiplyScalar(te),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),n.rectArea[M]=Y,M++}else if(N.isPointLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){let Q=N.shadow,he=t.get(N);he.shadowIntensity=Q.intensity,he.shadowBias=Q.bias,he.shadowNormalBias=Q.normalBias,he.shadowRadius=Q.radius,he.shadowMapSize=Q.mapSize,he.shadowCameraNear=Q.camera.near,he.shadowCameraFar=Q.camera.far,n.pointShadow[g]=he,n.pointShadowMap[g]=le,n.pointShadowMatrix[g]=N.shadow.matrix,y++}n.point[g]=Y,g++}else if(N.isHemisphereLight){let Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar(te),Y.groundColor.copy(N.groundColor).multiplyScalar(te),n.hemi[_]=Y,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let F=n.hash;(F.sunLength!==u||F.directionalLength!==m||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==M||F.hemiLength!==_||F.numSunShadows!==p||F.numDirectionalShadows!==T||F.numPointShadows!==y||F.numSpotShadows!==x||F.numSpotMaps!==S||F.numLightProbes!==L)&&(n.sun.length=u,n.directional.length=m,n.spot.length=v,n.rectArea.length=M,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-D,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=L,F.sunLength=u,F.directionalLength=m,F.pointLength=g,F.spotLength=v,F.rectAreaLength=M,F.hemiLength=_,F.numSunShadows=p,F.numDirectionalShadows=T,F.numPointShadows=y,F.numSpotShadows=x,F.numSpotMaps=S,F.numLightProbes=L,n.version=Rv++)}function c(l,h){let d=0,f=0,u=0,p=0,b=0,m=0,g=h.matrixWorldInverse;for(let v=0,M=l.length;v<M;v++){let _=l[v];if(_.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(g),d++}else if(_.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),f++}else if(_.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let T=n.rectArea[b];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),b++}else if(_.isPointLight){let T=n.point[u];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:o,setupView:c,state:n}}function kp(s){let e=new Pv(s),t=[],n=[],i=[];function r(d){h.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function c(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Iv(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new kp(s),e.set(i,[o])):r>=a.length?(o=new kp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dv=`uniform sampler2D shadow_pass;
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
}`,Nv=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Fv=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Up=new qe,Po=new B,Du=new B;function kv(s,e,t){let n=new Bs,i=new Qe,r=new Qe,a=new Lt,o=new kc,c=new Uc,l={},h=t.maxTextureSize,d={[ji]:Fn,[Fn]:ji,[hn]:hn},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Lv,fragmentShader:Dv}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new Ut;p.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ut(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vo;let g=this.type;this.render=function(y,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===Id&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vo);let D=s.getRenderTarget(),L=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),C=s.state;C.setBlending(Mr),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let V=g!==this.type;V&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(J=>J.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,J=y.length;N<J;N++){let te=y[N],z=te.shadow;if(z===void 0){We("WebGLShadowMap:",te,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let le=z.getFrameExtents();i.multiply(le),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/le.x),i.x=r.x*le.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/le.y),i.y=r.y*le.y,z.mapSize.y=r.y));let Y=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Y,z.map===null||V===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===pa){if(te.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new si(i.x,i.y,{format:qs,type:Di,minFilter:mn,magFilter:mn,generateMipmaps:!1}),z.map.texture.name=te.name+".shadowMap",z.map.depthTexture=new bs(i.x,i.y,ci),z.map.depthTexture.name=te.name+".shadowMapDepth",z.map.depthTexture.format=ps,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Yt,z.map.depthTexture.magFilter=Yt}else te.isPointLight?(z.map=new Lo(i.x),z.map.depthTexture=new no(i.x,Li)):(z.map=new si(i.x,i.y),z.map.depthTexture=new bs(i.x,i.y,Li)),z.map.depthTexture.name=te.name+".shadowMap",z.map.depthTexture.format=ps,this.type===vo?(z.map.depthTexture.compareFunction=Y?mu:pu,z.map.depthTexture.minFilter=mn,z.map.depthTexture.magFilter=mn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Yt,z.map.depthTexture.magFilter=Yt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();te.isPointLight!==!0&&z.updateMatrices(te,S);let he=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:S.layers;for(let Ue=0;Ue<Q;Ue++){let Ye=z.getCamera(Ue);if(te.isPointLight){let $=z.camera,Me=z.matrix,De=te.distance||$.far;De!==$.far&&($.far=De,$.updateProjectionMatrix()),Po.setFromMatrixPosition(te.matrixWorld),$.position.copy(Po),Du.copy($.position),Du.add(Nv[Ue]),$.up.copy(Fv[Ue]),$.lookAt(Du),$.updateMatrixWorld(),Me.makeTranslation(-Po.x,-Po.y,-Po.z),Up.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Up,$.coordinateSystem,$.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,Ue),s.clear();else{Ue===0&&(s.setRenderTarget(z.map),s.clear());let $=z.getViewport(Ue);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),C.viewport(a)}n=z.getFrustum(Ue),_(x,S,Ye,te,he,this.type)}z.isPointLightShadow!==!0&&this.type===pa&&v(z,S),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(D,L,F)};function v(y,x){let S=e.update(b);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,u.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),y.mapPass===null?y.mapPass=new si(i.x,i.y,{format:qs,type:Di}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),f.uniforms.shadow_pass.value=y.map.depthTexture,f.uniforms.resolution.value.set(y.map.width,y.map.height),f.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(x,null,S,f,b,null),u.uniforms.shadow_pass.value=y.mapPass.texture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(x,null,S,u,b,null)}function M(y,x,S,D){let L=null,F=S.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(F!==void 0)L=F;else if(L=S.isPointLight===!0?c:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let C=L.uuid,V=x.uuid,N=l[C];N===void 0&&(N={},l[C]=N);let J=N[V];J===void 0&&(J=L.clone(),N[V]=J,x.addEventListener("dispose",T)),L=J}if(L.visible=x.visible,L.wireframe=x.wireframe,D===pa?L.side=x.shadowSide!==null?x.shadowSide:x.side:L.side=x.shadowSide!==null?x.shadowSide:d[x.side],L.alphaMap=x.alphaMap,L.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,L.map=x.map,L.clipShadows=x.clipShadows,L.clippingPlanes=x.clippingPlanes,L.clipIntersection=x.clipIntersection,L.displacementMap=x.displacementMap,L.displacementScale=x.displacementScale,L.displacementBias=x.displacementBias,L.wireframeLinewidth=x.wireframeLinewidth,L.linewidth=x.linewidth,S.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let C=s.properties.get(L);C.light=S}return L}function _(y,x,S,D,L,F){if(y.visible===!1)return;if(y.layers.test(L)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&F===pa)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,y.matrixWorld);let N=e.update(y),J=y.material;if(Array.isArray(J)){let te=N.groups;for(let z=0,le=te.length;z<le;z++){let Y=te[z],Q=J[Y.materialIndex];if(Q&&Q.visible){let he=M(y,Q,D,F);y.onBeforeShadow(s,y,x,S,N,he,Y),s.renderBufferDirect(S,null,N,he,y,Y),y.onAfterShadow(s,y,x,S,N,he,Y)}}}else if(J.visible){let te=M(y,J,D,F);y.onBeforeShadow(s,y,x,S,N,te,null),s.renderBufferDirect(S,null,N,te,y,null),y.onAfterShadow(s,y,x,S,N,te,null)}}let V=y.children;for(let N=0,J=V.length;N<J;N++)_(V[N],x,S,D,L,F)}function T(y){y.target.removeEventListener("dispose",T);for(let S in l){let D=l[S],L=y.target.uuid;L in D&&(D[L].dispose(),delete D[L])}}}function Uv(s,e){function t(){let k=!1,se=new Lt,ee=null,_e=new Lt(0,0,0,0);return{setMask:function(xe){ee!==xe&&!k&&(s.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){k=xe},setClear:function(xe,ge,Ve,Ke,be){be===!0&&(xe*=Ke,ge*=Ke,Ve*=Ke),se.set(xe,ge,Ve,Ke),_e.equals(se)===!1&&(s.clearColor(xe,ge,Ve,Ke),_e.copy(se))},reset:function(){k=!1,ee=null,_e.set(-1,0,0,0)}}}function n(){let k=!1,se=!1,ee=null,_e=null,xe=null;return{setReversed:function(ge){if(se!==ge){let Ve=e.get("EXT_clip_control");ge?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),se=ge;let Ke=xe;xe=null,this.setClear(Ke)}},getReversed:function(){return se},setTest:function(ge){ge?Re(s.DEPTH_TEST):je(s.DEPTH_TEST)},setMask:function(ge){ee!==ge&&!k&&(s.depthMask(ge),ee=ge)},setFunc:function(ge){if(se&&(ge=fp[ge]),_e!==ge){switch(ge){case Mc:s.depthFunc(s.NEVER);break;case Sc:s.depthFunc(s.ALWAYS);break;case wc:s.depthFunc(s.LESS);break;case Qr:s.depthFunc(s.LEQUAL);break;case Tc:s.depthFunc(s.EQUAL);break;case Ac:s.depthFunc(s.GEQUAL);break;case Ec:s.depthFunc(s.GREATER);break;case Rc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=ge}},setLocked:function(ge){k=ge},setClear:function(ge){xe!==ge&&(xe=ge,se&&(ge=1-ge),s.clearDepth(ge))},reset:function(){k=!1,ee=null,_e=null,xe=null,se=!1}}}function i(){let k=!1,se=null,ee=null,_e=null,xe=null,ge=null,Ve=null,Ke=null,be=null;return{setTest:function(He){k||(He?Re(s.STENCIL_TEST):je(s.STENCIL_TEST))},setMask:function(He){se!==He&&!k&&(s.stencilMask(He),se=He)},setFunc:function(He,tt,pe){(ee!==He||_e!==tt||xe!==pe)&&(s.stencilFunc(He,tt,pe),ee=He,_e=tt,xe=pe)},setOp:function(He,tt,pe){(ge!==He||Ve!==tt||Ke!==pe)&&(s.stencilOp(He,tt,pe),ge=He,Ve=tt,Ke=pe)},setLocked:function(He){k=He},setClear:function(He){be!==He&&(s.clearStencil(He),be=He)},reset:function(){k=!1,se=null,ee=null,_e=null,xe=null,ge=null,Ve=null,Ke=null,be=null}}}let r=new t,a=new n,o=new i,c={},l=new WeakMap,h={},d={},f={},u=new WeakMap,p=[],b=null,m=!1,g=null,v=null,M=null,_=null,T=null,y=null,x=null,S=new Ce(0,0,0),D=0,L=!1,F=null,C=null,V=null,N=null,J=null,te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,le=0,Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=le>=1):Y.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=le>=2);let Q=null,he={},Ue=s.getParameter(s.SCISSOR_BOX),Ye=s.getParameter(s.VIEWPORT),$=new Lt().fromArray(Ue),Me=new Lt().fromArray(Ye);function De(k,se,ee,_e){let xe=new Uint8Array(4),ge=s.createTexture();s.bindTexture(k,ge),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<ee;Ve++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(se,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(se+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return ge}let Be={};Be[s.TEXTURE_2D]=De(s.TEXTURE_2D,s.TEXTURE_2D,1),Be[s.TEXTURE_CUBE_MAP]=De(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[s.TEXTURE_2D_ARRAY]=De(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Be[s.TEXTURE_3D]=De(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Re(s.DEPTH_TEST),a.setFunc(Qr),Tn(!1),Mt(Jh),Re(s.CULL_FACE),$t(Mr);function Re(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function je(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function Dt(k,se){return f[k]!==se?(s.bindFramebuffer(k,se),f[k]=se,k===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=se),k===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=se),!0):!1}function Xe(k,se){let ee=p,_e=!1;if(k){ee=u.get(se),ee===void 0&&(ee=[],u.set(se,ee));let xe=k.textures;if(ee.length!==xe.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,Ve=xe.length;ge<Ve;ge++)ee[ge]=s.COLOR_ATTACHMENT0+ge;ee.length=xe.length,_e=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,_e=!0);_e&&s.drawBuffers(ee)}function xt(k){return b!==k?(s.useProgram(k),b=k,!0):!1}let yt={[Sr]:s.FUNC_ADD,[Dd]:s.FUNC_SUBTRACT,[Nd]:s.FUNC_REVERSE_SUBTRACT};yt[Fd]=s.MIN,yt[kd]=s.MAX;let st={[Ud]:s.ZERO,[Od]:s.ONE,[Bd]:s.SRC_COLOR,[$h]:s.SRC_ALPHA,[qd]:s.SRC_ALPHA_SATURATE,[Vd]:s.DST_COLOR,[Gd]:s.DST_ALPHA,[zd]:s.ONE_MINUS_SRC_COLOR,[Qh]:s.ONE_MINUS_SRC_ALPHA,[Wd]:s.ONE_MINUS_DST_COLOR,[Hd]:s.ONE_MINUS_DST_ALPHA,[Xd]:s.CONSTANT_COLOR,[jd]:s.ONE_MINUS_CONSTANT_COLOR,[Kd]:s.CONSTANT_ALPHA,[Jd]:s.ONE_MINUS_CONSTANT_ALPHA};function $t(k,se,ee,_e,xe,ge,Ve,Ke,be,He){if(k===Mr){m===!0&&(je(s.BLEND),m=!1);return}if(m===!1&&(Re(s.BLEND),m=!0),k!==Ld){if(k!==g||He!==L){if((v!==Sr||T!==Sr)&&(s.blendEquation(s.FUNC_ADD),v=Sr,T=Sr),He)switch(k){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jn:s.blendFunc(s.ONE,s.ONE);break;case Yh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:$e("WebGLState: Invalid blending: ",k);break}else switch(k){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Yh:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zh:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",k);break}M=null,_=null,y=null,x=null,S.set(0,0,0),D=0,g=k,L=He}return}xe=xe||se,ge=ge||ee,Ve=Ve||_e,(se!==v||xe!==T)&&(s.blendEquationSeparate(yt[se],yt[xe]),v=se,T=xe),(ee!==M||_e!==_||ge!==y||Ve!==x)&&(s.blendFuncSeparate(st[ee],st[_e],st[ge],st[Ve]),M=ee,_=_e,y=ge,x=Ve),(Ke.equals(S)===!1||be!==D)&&(s.blendColor(Ke.r,Ke.g,Ke.b,be),S.copy(Ke),D=be),g=k,L=!1}function Wt(k,se){k.side===hn?je(s.CULL_FACE):Re(s.CULL_FACE);let ee=k.side===Fn;se&&(ee=!ee),Tn(ee),k.blending===Ws&&k.transparent===!1?$t(Mr):$t(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let _e=k.stencilWrite;o.setTest(_e),_e&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),jt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):je(s.SAMPLE_ALPHA_TO_COVERAGE)}function Tn(k){F!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),F=k)}function Mt(k){k!==Cd?(Re(s.CULL_FACE),k!==C&&(k===Jh?s.cullFace(s.BACK):k===Pd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):je(s.CULL_FACE),C=k}function Vn(k){k!==V&&(z&&s.lineWidth(k),V=k)}function jt(k,se,ee){k?(Re(s.POLYGON_OFFSET_FILL),(N!==se||J!==ee)&&(N=se,J=ee,a.getReversed()&&(se=-se,ee=-ee),s.polygonOffset(se,ee))):je(s.POLYGON_OFFSET_FILL)}function Ln(k){k?Re(s.SCISSOR_TEST):je(s.SCISSOR_TEST)}function Dn(k){k===void 0&&(k=s.TEXTURE0+te-1),Q!==k&&(s.activeTexture(k),Q=k)}function an(k,se,ee){ee===void 0&&(Q===null?ee=s.TEXTURE0+te-1:ee=Q);let _e=he[ee];_e===void 0&&(_e={type:void 0,texture:void 0},he[ee]=_e),(_e.type!==k||_e.texture!==se)&&(Q!==ee&&(s.activeTexture(ee),Q=ee),s.bindTexture(k,se||Be[k]),_e.type=k,_e.texture=se)}function G(){let k=he[Q];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Un(){try{s.compressedTexImage2D(...arguments)}catch(k){$e("WebGLState:",k)}}function Ct(){try{s.compressedTexImage3D(...arguments)}catch(k){$e("WebGLState:",k)}}function Tt(){try{s.texSubImage2D(...arguments)}catch(k){$e("WebGLState:",k)}}function we(){try{s.texSubImage3D(...arguments)}catch(k){$e("WebGLState:",k)}}function qt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){$e("WebGLState:",k)}}function Oe(){try{s.compressedTexSubImage3D(...arguments)}catch(k){$e("WebGLState:",k)}}function Fe(){try{s.texStorage2D(...arguments)}catch(k){$e("WebGLState:",k)}}function I(){try{s.texStorage3D(...arguments)}catch(k){$e("WebGLState:",k)}}function w(){try{s.texImage2D(...arguments)}catch(k){$e("WebGLState:",k)}}function K(){try{s.texImage3D(...arguments)}catch(k){$e("WebGLState:",k)}}function ue(k){return d[k]!==void 0?d[k]:s.getParameter(k)}function fe(k,se){d[k]!==se&&(s.pixelStorei(k,se),d[k]=se)}function ie(k){$.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),$.copy(k))}function ye(k){Me.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Me.copy(k))}function ne(k,se){let ee=l.get(se);ee===void 0&&(ee=new WeakMap,l.set(se,ee));let _e=ee.get(k);_e===void 0&&(_e=s.getUniformBlockIndex(se,k.name),s.uniformBlockBinding(se,_e,_e),ee.set(k,_e))}function oe(k,se,ee){let xe=l.get(se).get(k);c[xe]!==ee&&(s.bindBufferBase(s.UNIFORM_BUFFER,xe,ee),c[xe]=ee)}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,he={},f={},c={},u=new WeakMap,p=[],b=null,m=!1,g=null,v=null,M=null,_=null,T=null,y=null,x=null,S=new Ce(0,0,0),D=0,L=!1,F=null,C=null,V=null,N=null,J=null,$.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Re,disable:je,bindFramebuffer:Dt,drawBuffers:Xe,useProgram:xt,setBlending:$t,setMaterial:Wt,setFlipSided:Tn,setCullFace:Mt,setLineWidth:Vn,setPolygonOffset:jt,setScissorTest:Ln,activeTexture:Dn,bindTexture:an,unbindTexture:G,compressedTexImage2D:Un,compressedTexImage3D:Ct,texImage2D:w,texImage3D:K,pixelStorei:fe,getParameter:ue,updateUBOMapping:ne,uniformBlockBinding:oe,texStorage2D:Fe,texStorage3D:I,texSubImage2D:Tt,texSubImage3D:we,compressedTexSubImage2D:qt,compressedTexSubImage3D:Oe,scissor:ie,viewport:ye,reset:ae}}function Ov(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qe,h=new WeakMap,d=new Set,f,u=new WeakMap,p=new Set,b=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return m?new OffscreenCanvas(I,w):na("canvas")}function v(I,w,K){let ue=1,fe=Fe(I);if((fe.width>K||fe.height>K)&&(ue=K/Math.max(fe.width,fe.height)),ue<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ie=Math.floor(ue*fe.width),ye=Math.floor(ue*fe.height);f===void 0&&(f=g(ie,ye));let ne=w?g(ie,ye):f;return ne.width=ie,ne.height=ye,ne.getContext("2d").drawImage(I,0,0,ie,ye),We("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+ie+"x"+ye+")."),ne}else return"data"in I&&We("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),I;return I}function M(I){return I.generateMipmaps}function _(I){s.generateMipmap(I)}function T(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(I,w,K,ue,fe,ie=!1){if(I!==null){if(s[I]!==void 0)return s[I];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ye;ue&&(ye=e.get("EXT_texture_norm16"),ye||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=w;if(w===s.RED&&(K===s.FLOAT&&(ne=s.R32F),K===s.HALF_FLOAT&&(ne=s.R16F),K===s.UNSIGNED_BYTE&&(ne=s.R8),K===s.UNSIGNED_SHORT&&ye&&(ne=ye.R16_EXT),K===s.SHORT&&ye&&(ne=ye.R16_SNORM_EXT)),w===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ne=s.R8UI),K===s.UNSIGNED_SHORT&&(ne=s.R16UI),K===s.UNSIGNED_INT&&(ne=s.R32UI),K===s.BYTE&&(ne=s.R8I),K===s.SHORT&&(ne=s.R16I),K===s.INT&&(ne=s.R32I)),w===s.RG&&(K===s.FLOAT&&(ne=s.RG32F),K===s.HALF_FLOAT&&(ne=s.RG16F),K===s.UNSIGNED_BYTE&&(ne=s.RG8),K===s.UNSIGNED_SHORT&&ye&&(ne=ye.RG16_EXT),K===s.SHORT&&ye&&(ne=ye.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ne=s.RG8UI),K===s.UNSIGNED_SHORT&&(ne=s.RG16UI),K===s.UNSIGNED_INT&&(ne=s.RG32UI),K===s.BYTE&&(ne=s.RG8I),K===s.SHORT&&(ne=s.RG16I),K===s.INT&&(ne=s.RG32I)),w===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ne=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ne=s.RGB16UI),K===s.UNSIGNED_INT&&(ne=s.RGB32UI),K===s.BYTE&&(ne=s.RGB8I),K===s.SHORT&&(ne=s.RGB16I),K===s.INT&&(ne=s.RGB32I)),w===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ne=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ne=s.RGBA16UI),K===s.UNSIGNED_INT&&(ne=s.RGBA32UI),K===s.BYTE&&(ne=s.RGBA8I),K===s.SHORT&&(ne=s.RGBA16I),K===s.INT&&(ne=s.RGBA32I)),w===s.RGB&&(K===s.UNSIGNED_SHORT&&ye&&(ne=ye.RGB16_EXT),K===s.SHORT&&ye&&(ne=ye.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(ne=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(ne=s.R11F_G11F_B10F)),w===s.RGBA){let oe=ie?Wa:ct.getTransfer(fe);K===s.FLOAT&&(ne=s.RGBA32F),K===s.HALF_FLOAT&&(ne=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ne=oe===Et?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&ye&&(ne=ye.RGBA16_EXT),K===s.SHORT&&ye&&(ne=ye.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(I,w){let K;return I?w===null||w===Li||w===Ar?K=s.DEPTH24_STENCIL8:w===ci?K=s.DEPTH32F_STENCIL8:w===ba&&(K=s.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Li||w===Ar?K=s.DEPTH_COMPONENT24:w===ci?K=s.DEPTH_COMPONENT32F:w===ba&&(K=s.DEPTH_COMPONENT16),K}function S(I,w){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==Yt&&I.minFilter!==mn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function D(I){let w=new WeakRef(I);n.get(I).__ref=w,p.add(w),b.register(I,w,w)}function L(I){let w=n.get(I).__ref;w!==void 0&&(p.delete(w),b.unregister(w))}function F(I){V(I.target)}function C(I){N(I.target)}function V(I){I.removeEventListener("dispose",F),L(I),te(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&d.delete(I)}function N(I){I.removeEventListener("dispose",C),L(I),le(I)}function J(){for(let I of p){let w=I.deref();w!==void 0&&(w.isRenderTarget===!0?N(w):V(w))}p.clear(),d.clear()}function te(I){let w=n.get(I);if(w.__webglInit===void 0)return;let K=I.source,ue=u.get(K);if(ue){let fe=ue[w.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&z(I),Object.keys(ue).length===0&&u.delete(K)}n.remove(I)}function z(I){let w=n.get(I);s.deleteTexture(w.__webglTexture);let K=I.source,ue=u.get(K);delete ue[w.__cacheKey],a.memory.textures--}function le(I){let w=n.get(I);w.__depthDisposeCallback&&w.__depthDisposeCallback();let K=I.depthTexture;if(K&&K.renderTarget===I&&V(K),I.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(w.__webglFramebuffer[fe]))for(let ie=0;ie<w.__webglFramebuffer[fe].length;ie++)s.deleteFramebuffer(w.__webglFramebuffer[fe][ie]);else s.deleteFramebuffer(w.__webglFramebuffer[fe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[fe])}else{if(Array.isArray(w.__webglFramebuffer))for(let fe=0;fe<w.__webglFramebuffer.length;fe++)s.deleteFramebuffer(w.__webglFramebuffer[fe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let fe=0;fe<w.__webglColorRenderbuffer.length;fe++)w.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[fe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ue=I.textures;for(let fe=0,ie=ue.length;fe<ie;fe++){let ye=n.get(ue[fe]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),a.memory.textures--),n.remove(ue[fe])}n.remove(I)}let Y=0;function Q(){Y=0}function he(){return Y}function Ue(I){Y=I}function Ye(){let I=Y;return I>=i.maxTextures&&We("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),Y+=1,I}function $(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.mipmapsAutoUpdate),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function Me(I,w){let K=n.get(I);if(I.isVideoTexture&&qt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&K.__version!==I.version){let ue=I.image;if(ue===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(K,I,w);return}}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+w)}function De(I,w){let K=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){Wt(K,I,w);return}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+w)}function Be(I,w){let K=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){Wt(K,I,w);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+w)}function Re(I,w){let K=n.get(I);if(I.version>0&&K.__version!==I.version){Tn(K,I,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+w)}let je={[Us]:s.REPEAT,[mi]:s.CLAMP_TO_EDGE,[ea]:s.MIRRORED_REPEAT},Dt={[Yt]:s.NEAREST,[Zc]:s.NEAREST_MIPMAP_NEAREST,[Tr]:s.NEAREST_MIPMAP_LINEAR,[mn]:s.LINEAR,[ga]:s.LINEAR_MIPMAP_NEAREST,[_i]:s.LINEAR_MIPMAP_LINEAR},Xe={[sp]:s.NEVER,[gu]:s.ALWAYS,[rp]:s.LESS,[pu]:s.LEQUAL,[ap]:s.EQUAL,[mu]:s.GEQUAL,[op]:s.GREATER,[cp]:s.NOTEQUAL};function xt(I,w){if(w.type===ci&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===mn||w.magFilter===ga||w.magFilter===Tr||w.magFilter===_i||w.minFilter===mn||w.minFilter===ga||w.minFilter===Tr||w.minFilter===_i)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,je[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,je[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,je[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Dt[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Dt[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Xe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Yt||w.minFilter!==Tr&&w.minFilter!==_i||w.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function yt(I,w){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",F),D(w));let ue=w.source,fe=u.get(ue);fe===void 0&&(fe={},u.set(ue,fe));let ie=$(w);if(ie!==I.__cacheKey){fe[ie]===void 0&&(fe[ie]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,K=!0),fe[ie].usedTimes++;let ye=fe[I.__cacheKey];ye!==void 0&&(fe[I.__cacheKey].usedTimes--,ye.usedTimes===0&&z(w)),I.__cacheKey=ie,I.__webglTexture=fe[ie].texture}return K}function st(I,w,K){return Math.floor(Math.floor(I/K)/w)}function $t(I,w,K,ue){let ie=I.updateRanges;if(ie.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,K,ue,w.data);else{ie.sort((k,se)=>k.start-se.start);let ye=0;for(let k=1;k<ie.length;k++){let se=ie[ye],ee=ie[k],_e=se.start+se.count,xe=st(ee.start,w.width,4),ge=st(se.start,w.width,4);ee.start<=_e+1&&xe===ge&&st(ee.start+ee.count-1,w.width,4)===xe?se.count=Math.max(se.count,ee.start+ee.count-se.start):(++ye,ie[ye]=ee)}ie.length=ye+1;let ne=t.getParameter(s.UNPACK_ROW_LENGTH),oe=t.getParameter(s.UNPACK_SKIP_PIXELS),ae=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let k=0,se=ie.length;k<se;k++){let ee=ie[k],_e=Math.floor(ee.start/4),xe=Math.ceil(ee.count/4),ge=_e%w.width,Ve=Math.floor(_e/w.width),Ke=xe,be=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ve),t.texSubImage2D(s.TEXTURE_2D,0,ge,Ve,Ke,be,K,ue,w.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ne),t.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(s.UNPACK_SKIP_ROWS,ae)}}function Wt(I,w,K){let ue=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=s.TEXTURE_3D);let fe=yt(I,w),ie=w.source;t.bindTexture(ue,I.__webglTexture,s.TEXTURE0+K);let ye=n.get(ie);if(ie.version!==ye.__version||fe===!0){if(t.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let be=ct.getPrimaries(ct.workingColorSpace),He=w.colorSpace===Ts?null:ct.getPrimaries(w.colorSpace),tt=w.colorSpace===Ts||be===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let oe=v(w.image,!1,i.maxTextureSize);oe=Oe(w,oe);let ae=r.convert(w.format,w.colorSpace),k=r.convert(w.type),se=y(w.internalFormat,ae,k,w.normalized,w.colorSpace,w.isVideoTexture);xt(ue,w);let ee,_e=w.mipmaps,xe=w.isVideoTexture!==!0,ge=ye.__version===void 0||fe===!0,Ve=ie.dataReady,Ke=S(w,oe);if(w.isDepthTexture)se=x(w.format===ws,w.type),ge&&(xe?t.texStorage2D(s.TEXTURE_2D,1,se,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,se,oe.width,oe.height,0,ae,k,null));else if(w.isDataTexture)if(_e.length>0){xe&&ge&&t.texStorage2D(s.TEXTURE_2D,Ke,se,_e[0].width,_e[0].height);for(let be=0,He=_e.length;be<He;be++)ee=_e[be],xe?Ve&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,ee.width,ee.height,ae,k,ee.data):t.texImage2D(s.TEXTURE_2D,be,se,ee.width,ee.height,0,ae,k,ee.data);w.generateMipmaps=!1}else xe?(ge&&t.texStorage2D(s.TEXTURE_2D,Ke,se,oe.width,oe.height),Ve&&$t(w,oe,ae,k)):t.texImage2D(s.TEXTURE_2D,0,se,oe.width,oe.height,0,ae,k,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){xe&&ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ke,se,_e[0].width,_e[0].height,oe.depth);for(let be=0,He=_e.length;be<He;be++)if(ee=_e[be],w.format!==vi)if(ae!==null)if(xe){if(Ve)if(w.layerUpdates.size>0){let tt=Au(ee.width,ee.height,w.format,w.type);for(let pe of w.layerUpdates){let ht=ee.data.subarray(pe*tt/ee.data.BYTES_PER_ELEMENT,(pe+1)*tt/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,pe,ee.width,ee.height,1,ae,ht)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,ee.width,ee.height,oe.depth,ae,ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,be,se,ee.width,ee.height,oe.depth,0,ee.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?Ve&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,ee.width,ee.height,oe.depth,ae,k,ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,be,se,ee.width,ee.height,oe.depth,0,ae,k,ee.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{xe&&ge&&t.texStorage2D(s.TEXTURE_2D,Ke,se,_e[0].width,_e[0].height);for(let be=0,He=_e.length;be<He;be++)ee=_e[be],w.format!==vi?ae!==null?xe?Ve&&t.compressedTexSubImage2D(s.TEXTURE_2D,be,0,0,ee.width,ee.height,ae,ee.data):t.compressedTexImage2D(s.TEXTURE_2D,be,se,ee.width,ee.height,0,ee.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?Ve&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,ee.width,ee.height,ae,k,ee.data):t.texImage2D(s.TEXTURE_2D,be,se,ee.width,ee.height,0,ae,k,ee.data)}else if(w.isDataArrayTexture)if(xe){if(ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ke,se,oe.width,oe.height,oe.depth),Ve)if(w.layerUpdates.size>0){let be=Au(oe.width,oe.height,w.format,w.type);for(let He of w.layerUpdates){let tt=oe.data.subarray(He*be/oe.data.BYTES_PER_ELEMENT,(He+1)*be/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,He,oe.width,oe.height,1,ae,k,tt)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ae,k,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,se,oe.width,oe.height,oe.depth,0,ae,k,oe.data);else if(w.isData3DTexture)xe?(ge&&t.texStorage3D(s.TEXTURE_3D,Ke,se,oe.width,oe.height,oe.depth),Ve&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ae,k,oe.data)):t.texImage3D(s.TEXTURE_3D,0,se,oe.width,oe.height,oe.depth,0,ae,k,oe.data);else if(w.isFramebufferTexture){if(ge)if(xe)t.texStorage2D(s.TEXTURE_2D,Ke,se,oe.width,oe.height);else{let be=oe.width,He=oe.height;for(let tt=0;tt<Ke;tt++)t.texImage2D(s.TEXTURE_2D,tt,se,be,He,0,ae,k,null),be>>=1,He>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){let be=s.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),oe.parentNode!==be){be.appendChild(oe),d.add(w),be.onpaint=He=>{let tt=He.changedElements;for(let pe of d)tt.includes(pe.image)&&(pe.needsUpdate=!0)},be.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,oe);else{let tt=s.RGBA,pe=s.RGBA,ht=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,tt,pe,ht,oe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(_e.length>0){if(xe&&ge){let be=Fe(_e[0]);t.texStorage2D(s.TEXTURE_2D,Ke,se,be.width,be.height)}for(let be=0,He=_e.length;be<He;be++)ee=_e[be],xe?Ve&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,ae,k,ee):t.texImage2D(s.TEXTURE_2D,be,se,ae,k,ee);w.generateMipmaps=!1}else if(xe){if(ge){let be=Fe(oe);t.texStorage2D(s.TEXTURE_2D,Ke,se,be.width,be.height)}Ve&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae,k,oe)}else t.texImage2D(s.TEXTURE_2D,0,se,ae,k,oe);M(w)&&w.mipmapsAutoUpdate===!0&&_(ue),ye.__version=ie.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Tn(I,w,K){if(w.image.length!==6)return;let ue=yt(I,w),fe=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+K);let ie=n.get(fe);if(fe.version!==ie.__version||ue===!0){t.activeTexture(s.TEXTURE0+K);let ye=ct.getPrimaries(ct.workingColorSpace),ne=w.colorSpace===Ts?null:ct.getPrimaries(w.colorSpace),oe=w.colorSpace===Ts||ye===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let ae=w.isCompressedTexture||w.image[0].isCompressedTexture,k=w.image[0]&&w.image[0].isDataTexture,se=[];for(let pe=0;pe<6;pe++)!ae&&!k?se[pe]=v(w.image[pe],!0,i.maxCubemapSize):se[pe]=k?w.image[pe].image:w.image[pe],se[pe]=Oe(w,se[pe]);let ee=se[0],_e=r.convert(w.format,w.colorSpace),xe=r.convert(w.type),ge=y(w.internalFormat,_e,xe,w.normalized,w.colorSpace),Ve=w.isVideoTexture!==!0,Ke=ie.__version===void 0||ue===!0,be=fe.dataReady,He=S(w,ee);xt(s.TEXTURE_CUBE_MAP,w);let tt;if(w.isDepthTexture){if(ge=x(w.format===ws,w.type),Ke)if(Ve)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ge,ee.width,ee.height);else for(let pe=0;pe<6;pe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ge,ee.width,ee.height,0,_e,xe,null)}else if(ae){Ve&&Ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,He,ge,ee.width,ee.height);for(let pe=0;pe<6;pe++){tt=se[pe].mipmaps;for(let ht=0;ht<tt.length;ht++){let At=tt[ht];w.format!==vi?_e!==null?Ve?be&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ht,0,0,At.width,At.height,_e,At.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ht,ge,At.width,At.height,0,At.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ht,0,0,At.width,At.height,_e,xe,At.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ht,ge,At.width,At.height,0,_e,xe,At.data)}}}else{if(tt=w.mipmaps,Ve&&Ke){tt.length>0&&He++;let pe=Fe(se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,He,ge,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(k){Ve?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,se[pe].width,se[pe].height,_e,xe,se[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ge,se[pe].width,se[pe].height,0,_e,xe,se[pe].data);for(let ht=0;ht<tt.length;ht++){let ti=tt[ht].image[pe].image;Ve?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ht+1,0,0,ti.width,ti.height,_e,xe,ti.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ht+1,ge,ti.width,ti.height,0,_e,xe,ti.data)}}else{Ve?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,_e,xe,se[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ge,_e,xe,se[pe]);for(let ht=0;ht<tt.length;ht++){let At=tt[ht];Ve?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ht+1,0,0,_e,xe,At.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ht+1,ge,_e,xe,At.image[pe])}}}M(w)&&w.mipmapsAutoUpdate===!0&&_(s.TEXTURE_CUBE_MAP),ie.__version=fe.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Mt(I,w,K,ue,fe,ie){let ye=r.convert(K.format,K.colorSpace),ne=r.convert(K.type),oe=y(K.internalFormat,ye,ne,K.normalized,K.colorSpace),ae=n.get(w),k=n.get(K);if(k.__renderTarget=w,!ae.__hasExternalTextures){let se=Math.max(1,w.width>>ie),ee=Math.max(1,w.height>>ie);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?t.texImage3D(fe,ie,oe,se,ee,w.depth,0,ye,ne,null):t.texImage2D(fe,ie,oe,se,ee,0,ye,ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),we(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,fe,k.__webglTexture,0,Tt(w)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,fe,k.__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Vn(I,w,K){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){let ue=w.depthTexture,fe=ue&&ue.isDepthTexture?ue.type:null,ie=x(w.stencilBuffer,fe),ye=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;we(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt(w),ie,w.width,w.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt(w),ie,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ie,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,I)}else{let ue=w.textures;for(let fe=0;fe<ue.length;fe++){let ie=ue[fe],ye=r.convert(ie.format,ie.colorSpace),ne=r.convert(ie.type),oe=y(ie.internalFormat,ye,ne,ie.normalized,ie.colorSpace);we(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt(w),oe,w.width,w.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt(w),oe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,oe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function jt(I,w,K){let ue=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let fe=n.get(w.depthTexture);fe.__renderTarget=w;let ie=ue?w.depthTexture.image[0]:w.depthTexture.image;(!fe.__webglTexture||ie.width!==w.width||ie.height!==w.height)&&(ie.width=w.width,ie.height=w.height,w.depthTexture.needsUpdate=!0),ue?Re(w.depthTexture,0):Me(w.depthTexture,0);let ye=fe.__webglTexture,ne=Tt(w),oe=ue?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,ae=w.depthTexture.format===ws?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===ps)we(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,oe,ye,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,ae,oe,ye,0);else if(w.depthTexture.format===ws)we(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,oe,ye,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,ae,oe,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ln(I){let w=n.get(I),K=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let ue=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ue){let fe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ue.removeEventListener("dispose",fe)};ue.addEventListener("dispose",fe),w.__depthDisposeCallback=fe}w.__boundDepthTexture=ue}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(K)for(let ue=0;ue<6;ue++)jt(w.__webglFramebuffer[ue],I,ue);else I.texture.mipmaps.length>0?jt(w.__webglFramebuffer[0],I,0):jt(w.__webglFramebuffer,I,0);else if(K){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]===void 0)w.__webglDepthbuffer[ue]=s.createRenderbuffer(),Vn(w.__webglDepthbuffer[ue],I,!1);else{let fe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,ie)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Vn(w.__webglDepthbuffer,I,!1);else{let fe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,ie)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Dn(I,w,K){let ue=n.get(I);w!==void 0&&Mt(ue.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Ln(I)}function an(I){let w=I.texture,K=n.get(I),ue=n.get(w);I.addEventListener("dispose",C),D(I);let fe=I.textures,ie=I.isWebGLCubeRenderTarget===!0,ye=fe.length>1;if(ye||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=w.version,a.memory.textures++),ie){K.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(w.mipmaps.length>0){K.__webglFramebuffer[ne]=[];for(let oe=0;oe<w.mipmaps.length;oe++)K.__webglFramebuffer[ne][oe]=s.createFramebuffer()}else K.__webglFramebuffer[ne]=s.createFramebuffer()}else{if(w.mipmaps.length>0){K.__webglFramebuffer=[];for(let ne=0;ne<w.mipmaps.length;ne++)K.__webglFramebuffer[ne]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(ye)for(let ne=0,oe=fe.length;ne<oe;ne++){let ae=n.get(fe[ne]);ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture(),a.memory.textures++)}if(I.samples>0&&we(I)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ne=0;ne<fe.length;ne++){let oe=fe[ne];K.__webglColorRenderbuffer[ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[ne]);let ae=r.convert(oe.format,oe.colorSpace),k=r.convert(oe.type),se=y(oe.internalFormat,ae,k,oe.normalized,oe.colorSpace,I.isXRRenderTarget===!0),ee=Tt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,se,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,K.__webglColorRenderbuffer[ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Vn(K.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),xt(s.TEXTURE_CUBE_MAP,w);for(let ne=0;ne<6;ne++)if(w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)Mt(K.__webglFramebuffer[ne][oe],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe);else Mt(K.__webglFramebuffer[ne],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);M(w)?_(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(ye){for(let ne=0,oe=fe.length;ne<oe;ne++){let ae=fe[ne],k=n.get(ae),se=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(se=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,k.__webglTexture),xt(se,ae),Mt(K.__webglFramebuffer,I,ae,s.COLOR_ATTACHMENT0+ne,se,0),M(ae)&&_(se)}t.unbindTexture()}else{let ne=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ne=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,ue.__webglTexture),xt(ne,w),w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)Mt(K.__webglFramebuffer[oe],I,w,s.COLOR_ATTACHMENT0,ne,oe);else Mt(K.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,ne,0);M(w)?_(ne):w.mipmaps.length>0&&s.texParameteri(ne,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&Ln(I)}function G(I){let w=I.textures;for(let K=0,ue=w.length;K<ue;K++){let fe=w[K];if(M(fe)&&fe.mipmapsAutoUpdate===!0){let ie=T(I),ye=n.get(fe).__webglTexture;t.bindTexture(ie,ye),_(ie),t.unbindTexture()}}}let Un=[];function Ct(I){if(I.samples>0){if(we(I)===!1){let w=I.textures,K=I.width,ue=I.height,fe=s.COLOR_BUFFER_BIT,ie=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(I),ne=w.length>1;if(ne)for(let ae=0;ae<w.length;ae++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ae=0;ae<w.length;ae++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[ae]);let k=n.get(w[ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,k,0)}s.blitFramebuffer(0,0,K,ue,0,0,K,ue,fe,s.NEAREST),c===!0&&(Un.length=0,Un.push(s.COLOR_ATTACHMENT0+ae),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Un.push(ie),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Un))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ne)for(let ae=0;ae<w.length;ae++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,ye.__webglColorRenderbuffer[ae]);let k=n.get(w[ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,k,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Tt(I){return Math.min(i.maxSamples,I.samples)}function we(I){let w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qt(I){let w=a.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function Oe(I,w){let K=I.colorSpace,ue=I.format,fe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==qn&&K!==Ts&&(ct.getTransfer(K)===Et?(ue!==vi||fe!==ei)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",K)),w}function Fe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=Ye,this.resetTextureUnits=Q,this.getTextureUnits=he,this.setTextureUnits=Ue,this.setTexture2D=Me,this.setTexture2DArray=De,this.setTexture3D=Be,this.setTextureCube=Re,this.rebindTextures=Dn,this.setupRenderTarget=an,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ln,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=we,this.dispose=J}function Bv(s,e){function t(n,i=Ts){let r,a=ct.getTransfer(i);if(n===ei)return s.UNSIGNED_BYTE;if(n===Qc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===el)return s.UNSIGNED_SHORT_5_5_5_1;if(n===lu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ou)return s.BYTE;if(n===cu)return s.SHORT;if(n===ba)return s.UNSIGNED_SHORT;if(n===$c)return s.INT;if(n===Li)return s.UNSIGNED_INT;if(n===ci)return s.FLOAT;if(n===Di)return s.HALF_FLOAT;if(n===uu)return s.ALPHA;if(n===fu)return s.RGB;if(n===vi)return s.RGBA;if(n===ps)return s.DEPTH_COMPONENT;if(n===ws)return s.DEPTH_STENCIL;if(n===xa)return s.RED;if(n===tl)return s.RED_INTEGER;if(n===qs)return s.RG;if(n===nl)return s.RG_INTEGER;if(n===il)return s.RGBA_INTEGER;if(n===Mo||n===So||n===wo||n===To)if(a===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sl||n===rl||n===al||n===ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cl||n===ll||n===hl||n===ul||n===fl||n===Ao||n===dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cl||n===ll)return a===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ul)return r.COMPRESSED_R11_EAC;if(n===fl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ao)return r.COMPRESSED_RG11_EAC;if(n===dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pl||n===ml||n===gl||n===bl||n===xl||n===_l||n===vl||n===yl||n===Ml||n===Sl||n===wl||n===Tl||n===Al||n===El)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ml)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_l)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===Cl||n===Pl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Rl)return a===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===Ll||n===Eo||n===Dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gv=`
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

}`,zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new io(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nn({vertexShader:zv,fragmentShader:Gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gu=class extends Pi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,u=null,p=null,b=typeof XRWebGLBinding<"u",m=new zu,g={},v=t.getContextAttributes(),M=null,_=null,T=[],y=[],x=new Qe,S=null,D=null,L=new pn;L.viewport=new Lt;let F=new pn;F.viewport=new Lt;let C=[L,F],V=new Wc,N=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Me=T[$];return Me===void 0&&(Me=new ra,T[$]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function($){let Me=T[$];return Me===void 0&&(Me=new ra,T[$]=Me),Me.getGripSpace()},this.getHand=function($){let Me=T[$];return Me===void 0&&(Me=new ra,T[$]=Me),Me.getHandSpace()};function te($){let Me=y.indexOf($.inputSource);if(Me===-1)return;let De=T[Me];De!==void 0&&(De.update($.inputSource,$.frame,l||a),De.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){i.removeEventListener("select",te),i.removeEventListener("selectstart",te),i.removeEventListener("selectend",te),i.removeEventListener("squeeze",te),i.removeEventListener("squeezestart",te),i.removeEventListener("squeezeend",te),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",le);for(let $=0;$<T.length;$++){let Me=y[$];Me!==null&&(y[$]=null,T[$].disconnect(Me))}N=null,J=null,m.reset();for(let $ in g)delete g[$];if(e.setRenderTarget(M),u=null,f=null,d=null,i=null,_=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),D!==null){let $=D.camera;$.fov=D.fov,$.zoom=D.zoom,$.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",te),i.addEventListener("selectstart",te),i.addEventListener("selectend",te),i.addEventListener("squeeze",te),i.addEventListener("squeezestart",te),i.addEventListener("squeezeend",te),i.addEventListener("end",z),i.addEventListener("inputsourceschange",le),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Be=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=v.stencil?ws:ps,Be=v.stencil?Ar:Li);let je={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(je),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new si(f.textureWidth,f.textureHeight,{format:vi,type:ei,depthTexture:new bs(f.textureWidth,f.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let De={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,De),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),_=new si(u.framebufferWidth,u.framebufferHeight,{format:vi,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function le($){for(let Me=0;Me<$.removed.length;Me++){let De=$.removed[Me],Be=y.indexOf(De);Be>=0&&(y[Be]=null,T[Be].disconnect(De))}for(let Me=0;Me<$.added.length;Me++){let De=$.added[Me],Be=y.indexOf(De);if(Be===-1){for(let je=0;je<T.length;je++)if(je>=y.length){y.push(De),Be=je;break}else if(y[je]===null){y[je]=De,Be=je;break}if(Be===-1)break}let Re=T[Be];Re&&Re.connect(De)}}function Y($,Me){Me===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Me.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let Me=$.near,De=$.far;m.texture!==null&&(m.depthNear>0&&(Me=m.depthNear),m.depthFar>0&&(De=m.depthFar)),V.near=F.near=L.near=Me,V.far=F.far=L.far=De,(N!==V.near||J!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,J=V.far),V.layers.mask=$.layers.mask|6,L.layers.mask=V.layers.mask&-5,F.layers.mask=V.layers.mask&-3;let Be=$.parent,Re=V.cameras;Y(V,Be);for(let je=0;je<Re.length;je++)Y(Re[je],Be);V.projectionMatrix.copy(L.projectionMatrix),V.projectionMatrixInverse.copy(L.projectionMatrixInverse),D===null&&$.isPerspectiveCamera&&(D={camera:$,fov:$.fov,zoom:$.zoom}),Q($,V,Be)};function Q($,Me,De){De===null?$.matrix.copy(Me.matrixWorld):($.matrix.copy(De.matrixWorld),$.matrix.invert(),$.matrix.multiply(Me.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Me.projectionMatrix),$.projectionMatrixInverse.copy(Me.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=fr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function($){return g[$]};let he=null;function Ue($,Me){if(h=Me.getViewerPose(l||a),p=Me,h!==null){let De=h.views;u!==null&&(e.setRenderTargetFramebuffer(_,u.framebuffer),e.setRenderTarget(_));let Be=!1;De.length!==V.cameras.length&&(V.cameras.length=0,Be=!0);for(let Xe=0;Xe<De.length;Xe++){let xt=De[Xe],yt=null;if(u!==null)yt=u.getViewport(xt);else{let $t=d.getViewSubImage(f,xt);yt=$t.viewport,Xe===0&&(e.setRenderTargetTextures(_,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(_))}let st=C[Xe];st===void 0&&(st=new pn,st.layers.enable(Xe),st.viewport=new Lt,C[Xe]=st),st.matrix.fromArray(xt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(xt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(yt.x,yt.y,yt.width,yt.height),Xe===0&&(V.matrix.copy(st.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Be===!0&&V.cameras.push(st)}let Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){d=n.getBinding();let Xe=d.getDepthInformation(De[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,i.renderState)}if(Re&&Re.includes("camera-access")&&b){e.state.unbindTexture(),d=n.getBinding();for(let Xe=0;Xe<De.length;Xe++){let xt=De[Xe].camera;if(xt){let yt=g[xt];yt||(yt=new io,g[xt]=yt);let st=d.getCameraImage(xt);yt.sourceTexture=st}}}}for(let De=0;De<T.length;De++){let Be=y[De],Re=T[De];Be!==null&&Re!==void 0&&Re.update(Be,Me,l||a)}he&&he($,Me),Me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Me}),p=null}let Ye=new Op;Ye.setAnimationLoop(Ue),this.setAnimationLoop=function($){he=$},this.dispose=function(){}}},Hv=new qe,Kp=new et;Kp.set(-1,0,0,0,1,0,0,0,1);function Vv(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Su(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,M,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),b(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?c(m,g,v,M):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Fn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Fn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),M=v.envMap,_=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Kp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,v,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function b(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wv(s,e,t,n){let i={},r={};function a(v,M){let _=M.program;n.uniformBlockBinding(v,_,i[v.id])}function o(v,M){let _=i[v.id];_===void 0&&(p(v),_=c(v),i[v.id]=_,v.addEventListener("dispose",m));let T=M.program;n.updateUBOMapping(v,T);let y=e.render.frame;r[v.id]!==y&&(l(v),r[v.id]=y)}function c(v){let M=s.createBuffer(),_=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,_,T),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function l(v){let M=i[v.id],_=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let y=0,x=_.length;y<x;y++){let S=_[y];if(Array.isArray(S))for(let D=0,L=S.length;D<L;D++)h(S[D],y,D,T);else h(S,y,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,M,_,T){if(f(v,M,_,T)===!0){let y=v.__offset,x=v.value;if(Array.isArray(x)){let S=0;for(let D=0;D<x.length;D++){let L=x[D],F=b(L,!0);d(L,v.__data,S),S+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,v.__data)}}function d(v,M,_){typeof v=="number"||typeof v=="boolean"?M[_]=v:v.isMatrix3?(M[_]=v.elements[0],M[_+1]=v.elements[1],M[_+2]=v.elements[2],M[_+3]=0,M[_+4]=v.elements[3],M[_+5]=v.elements[4],M[_+6]=v.elements[5],M[_+7]=0,M[_+8]=v.elements[6],M[_+9]=v.elements[7],M[_+10]=v.elements[8],M[_+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-_),_):v.toArray(M,_)}function f(v,M,_,T){let y=v.value,x=M+"_"+_;if(Array.isArray(y)){T[x]===void 0&&(T[x]=[]);let S=T[x],D=!1;for(let L=0;L<y.length;L++)u(y[L],S,L)===!0&&(D=!0);return D}return u(y,T,x)}function u(v,M,_){if(M[_]===void 0)return typeof v=="number"||typeof v=="boolean"?M[_]=v:ArrayBuffer.isView(v)?M[_]=v.slice():M[_]=v.clone(),!0;{let T=M[_];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return M[_]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function p(v){let M=v.uniforms,_=0,T=16;for(let x=0,S=M.length;x<S;x++){let D=Array.isArray(M[x])?M[x]:[M[x]];for(let L=0,F=D.length;L<F;L++){let C=D[L],V=Array.isArray(C.value)?C.value:[C.value],N=Array.isArray(M[x])||Array.isArray(C.value),J=_;for(let z=0,le=V.length;z<le;z++){let Y=V[z],Q=b(Y,N),he=_%T,Ue=he%Q.boundary,Ye=he+Ue;_+=Ue,Ye!==0&&T-Ye<Q.storage&&(_+=T-Ye),z===0&&(J=_),_+=Q.storage}let te=C.type==="int"?Int32Array:C.type==="uint"?Uint32Array:Float32Array;C.__data=new te((_-J)/Float32Array.BYTES_PER_ELEMENT),C.__offset=J}}let y=_%T;return y>0&&(_+=T-y),v.__size=_,v.__cache={},this}function b(v,M){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=16,_.storage=48):v.isMatrix4?(_.boundary=16,_.storage=64):v.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(_.boundary=16,_.storage=v.byteLength):We("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function m(v){let M=v.target;M.removeEventListener("dispose",m),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:a,update:o,dispose:g}}var qv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yi=null;function Xv(){return Yi===null&&(Yi=new Os(qv,16,16,qs,Di),Yi.name="DFG_LUT",Yi.minFilter=mn,Yi.magFilter=mn,Yi.wrapS=mi,Yi.wrapT=mi,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}var Gl=class{constructor(e={}){let{canvas:t=lp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=ei}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let b=u,m=new Set([il,nl,tl]),g=new Set([ei,Li,ba,Ar,Qc,el]),v=new Uint32Array(4),M=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},T=null,y=null,x=[],S=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,F=!1,C=null,V=null,N=null,J=null;this._outputColorSpace=Bt;let te=0,z=0,le=null,Y=-1,Q=null,he=new Lt,Ue=new Lt,Ye=null,$=new Ce(0),Me=0,De=t.width,Be=t.height,Re=1,je=null,Dt=null,Xe=new Lt(0,0,De,Be),xt=new Lt(0,0,De,Be),yt=!1,st=new Bs,$t=new Lc,Wt=!1,Tn=!1,Mt=new qe,Vn=new B,jt=new Lt,Ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dn=!1;function an(){return le===null?Re:1}let G=n;function Un(A,O){return t.getContext(A,O)}let Ct,Tt,we,qt,Oe,Fe,I,w,K,ue,fe,ie,ye,ne,oe,ae,k,se,ee,_e,xe,ge,Ve;try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",pe,!1),G===null){let O="webgl2";if(G=Un(O,A),G===null)throw Un(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(A){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),$e("WebGLRenderer: "+A.message),A}function Ke(){Ct=new i_(G),Ct.init(),xe=new Bv(G,Ct),Tt=new Xx(G,Ct,e,xe),we=new Uv(G,Ct),Tt.reversedDepthBuffer&&f&&we.buffers.depth.setReversed(!0),V=G.createFramebuffer(),N=G.createFramebuffer(),J=G.createFramebuffer(),qt=new a_(G),Oe=new Sv,Fe=new Ov(G,Ct,we,Oe,Tt,xe,qt),I=new n_(L),w=new cg(G),ge=new Wx(G,w),K=new s_(G,w,qt,ge),ue=new c_(G,K,w,ge,qt),se=new o_(G,Tt,Fe),oe=new jx(Oe),fe=new Mv(L,I,Ct,Tt,ge,oe),ie=new Vv(L,Oe),ye=new Tv,ne=new Iv(Ct),k=new Vx(L,I,we,ue,p,c),ae=new kv(L,ue,Tt),Ve=new Wv(G,qt,Tt,we),ee=new qx(G,Ct,qt),_e=new r_(G,Ct,qt),qt.programs=fe.programs,L.capabilities=Tt,L.extensions=Ct,L.properties=Oe,L.renderLists=ye,L.shadowMap=ae,L.state=we,L.info=qt}b!==ei&&(D=new h_(b,t.width,t.height,o,i,r));let be=new Gu(L,G);this.xr=be,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let A=Ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(A){A!==void 0&&(Re=A,this.setSize(De,Be,!1))},this.getSize=function(A){return A.set(De,Be)},this.setSize=function(A,O,Z=!0){if(be.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}De=A,Be=O,t.width=Math.floor(A*Re),t.height=Math.floor(O*Re),Z===!0&&(t.style.width=A+"px",t.style.height=O+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(De*Re,Be*Re).floor()},this.setDrawingBufferSize=function(A,O,Z){De=A,Be=O,Re=Z,t.width=Math.floor(A*Z),t.height=Math.floor(O*Z),this.setViewport(0,0,A,O)},this.setEffects=function(A){if(b===ei){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let O=0;O<A.length;O++)if(A[O].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(he)},this.getViewport=function(A){return A.copy(Xe)},this.setViewport=function(A,O,Z,W){A.isVector4?Xe.set(A.x,A.y,A.z,A.w):Xe.set(A,O,Z,W),we.viewport(he.copy(Xe).multiplyScalar(an()).round())},this.getScissor=function(A){return A.copy(xt)},this.setScissor=function(A,O,Z,W){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,O,Z,W),we.scissor(Ue.copy(xt).multiplyScalar(an()).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(A){we.setScissorTest(yt=A)},this.setOpaqueSort=function(A){je=A},this.setTransparentSort=function(A){Dt=A},this.getClearColor=function(A){return A.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,Z=!0){let W=0;if(A){let X=!1;if(le!==null){let ve=le.texture.format;X=m.has(ve)}if(X){let ve=le.texture.type,Ie=g.has(ve),Te=k.getClearColor(),Ae=k.getClearAlpha(),Le=Te.r,Ze=Te.g,Ne=Te.b;Ie?(v[0]=Le,v[1]=Ze,v[2]=Ne,v[3]=Ae,G.clearBufferuiv(G.COLOR,0,v)):(M[0]=Le,M[1]=Ze,M[2]=Ne,M[3]=Ae,G.clearBufferiv(G.COLOR,0,M))}else W|=G.COLOR_BUFFER_BIT}O&&(W|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&G.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),C=A},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),k.dispose(),ye.dispose(),ne.dispose(),Fe.dispose(),Oe.dispose(),I.dispose(),ue.dispose(),K.dispose(),ge.dispose(),Ve.dispose(),fe.dispose(),be.dispose(),be.removeEventListener("sessionstart",is),be.removeEventListener("sessionend",Kt),An.stop()};function He(A){A.preventDefault(),qa("WebGLRenderer: Context Lost."),F=!0}function tt(){qa("WebGLRenderer: Context Restored."),F=!1;let A=qt.autoReset,O=ae.enabled,Z=ae.autoUpdate,W=ae.needsUpdate,X=ae.type;Ke(),qt.autoReset=A,ae.enabled=O,ae.autoUpdate=Z,ae.needsUpdate=W,ae.type=X}function pe(A){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ht(A){let O=A.target;O.removeEventListener("dispose",ht),At(O)}function At(A){ti(A),Oe.remove(A)}function ti(A){let O=Oe.get(A).programs;O!==void 0&&(O.forEach(function(Z){fe.releaseProgram(Z)}),A.isShaderMaterial&&fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,Z,W,X,ve){O===null&&(O=Ln);let Ie=X.isMesh&&X.matrixWorld.determinantAffine()<0,Te=rs(A,O,Z,W,X);we.setMaterial(W,Ie);let Ae=Z.index,Le=1;if(W.wireframe===!0){if(Ae=K.getWireframeAttribute(Z),Ae===void 0)return;Le=2}let Ze=Z.drawRange,Ne=Z.attributes.position,ke=Ze.start*Le,nt=(Ze.start+Ze.count)*Le;ve!==null&&(ke=Math.max(ke,ve.start*Le),nt=Math.min(nt,(ve.start+ve.count)*Le)),Ae!==null?(ke=Math.max(ke,0),nt=Math.min(nt,Ae.count)):Ne!=null&&(ke=Math.max(ke,0),nt=Math.min(nt,Ne.count));let Qt=nt-ke;if(Qt<0||Qt===1/0)return;ge.setup(X,W,Te,Z,Ae);let Pt,vt=ee;if(Ae!==null&&(Pt=w.get(Ae),vt=_e,vt.setIndex(Pt)),X.isMesh)W.wireframe===!0?(we.setLineWidth(W.wireframeLinewidth*an()),vt.setMode(G.LINES)):vt.setMode(G.TRIANGLES);else if(X.isLine){let En=W.linewidth;En===void 0&&(En=1),we.setLineWidth(En*an()),X.isLineSegments?vt.setMode(G.LINES):X.isLineLoop?vt.setMode(G.LINE_LOOP):vt.setMode(G.LINE_STRIP)}else X.isPoints?vt.setMode(G.POINTS):X.isSprite&&vt.setMode(G.TRIANGLES);if(X.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))vt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let En=X._multiDrawStarts,ze=X._multiDrawCounts,on=X._multiDrawCount,_t=Ae?w.get(Ae).bytesPerElement:1,as=Oe.get(W).currentProgram.getUniforms();for(let Rn=0;Rn<on;Rn++)as.setValue(G,"_gl_DrawID",Rn),vt.render(En[Rn]/_t,ze[Rn])}else if(X.isInstancedMesh)vt.renderInstances(ke,Qt,X.count);else if(Z.isInstancedBufferGeometry){let En=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ze=Math.min(Z.instanceCount,En);vt.renderInstances(ke,Qt,ze)}else vt.render(ke,Qt)};function ft(A,O,Z,W){C!==null&&A.isNodeMaterial&&C.setObject(W,A),Wt===!0&&oe.setState(A,Z,!1),A.transparent===!0&&A.side===hn&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,ui(A,O,W),A.side=ji,A.needsUpdate=!0,ui(A,O,W),A.side=hn):ui(A,O,W)}this.compile=function(A,O,Z=null){Z===null&&(Z=A),C!==null&&C.renderStart(A,O,Z),y=ne.get(Z),y.init(O),S.push(y),Z.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),A!==Z&&A.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights(),C!==null&&C.updateLights(y.state.lightsArray),Tn=this.localClippingEnabled,Wt=oe.init(this.clippingPlanes,Tn),Wt===!0&&oe.setGlobalState(this.clippingPlanes,O),C!==null&&ae.render(y.state.shadowsArray,Z,O);let W=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ve=X.material;if(ve)if(Array.isArray(ve))for(let Ie=0;Ie<ve.length;Ie++){let Te=ve[Ie];ft(Te,Z,O,X),W.add(Te)}else ft(ve,Z,O,X),W.add(ve)}),y=S.pop(),C!==null&&C.renderEnd(),W},this.compileAsync=function(A,O,Z=null){let W=this.compile(A,O,Z);return new Promise(X=>{function ve(){if(W.forEach(function(Ie){let Ae=Oe.get(Ie).currentProgram;(Ae===void 0||Ae.isReady())&&W.delete(Ie)}),W.size===0){X(A);return}setTimeout(ve,10)}Ct.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Fr=null;function Xo(A){Fr&&Fr(A)}function is(){An.stop()}function Kt(){An.start()}let An=new Op;An.setAnimationLoop(Xo),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(A){Fr=A,be.setAnimationLoop(A),A===null?An.stop():An.start()},be.addEventListener("sessionstart",is),be.addEventListener("sessionend",Kt),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;C!==null&&C.renderStart(A,O);let Z=be.enabled===!0&&be.isPresenting===!0,W=D!==null&&(le===null||Z)&&D.begin(L,le);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(O),O=be.getCamera()),A.isScene===!0&&A.onBeforeRender(L,A,O,le),y=ne.get(A,S.length),y.init(O),y.state.textureUnits=Fe.getTextureUnits(),S.push(y),Mt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?$t.setFromArrayCamera(O):st.setFromProjectionMatrix(Mt,gi,O.reversedDepth),Tn=this.localClippingEnabled,Wt=oe.init(this.clippingPlanes,Tn),T=ye.get(A,x.length),T.init(),x.push(T),this.info.render.frame++,be.enabled===!0&&be.isPresenting===!0){let Ie=L.xr.getDepthSensingMesh();Ie!==null&&ss(Ie,O,-1/0,L.sortObjects)}ss(A,O,0,L.sortObjects),T.finish(),C!==null&&C.updateLights(y.state.lightsArray),L.sortObjects===!0&&T.sort(je,Dt),Dn=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Dn&&k.addToRenderList(T,A),this.info.autoReset===!0&&this.info.reset(),Wt===!0&&oe.beginShadows();let X=y.state.shadowsArray;if(ae.render(X,A,O),Wt===!0&&oe.endShadows(),(W&&D.hasRenderPass())===!1){let Ie=T.opaque,Te=T.transmissive;if(y.setupLights(),O.isArrayCamera){let Ae=O.cameras;if(Te.length>0)for(let Le=0,Ze=Ae.length;Le<Ze;Le++){let Ne=Ae[Le];hi(Ie,Te,A,Ne)}Dn&&k.render(A);for(let Le=0,Ze=Ae.length;Le<Ze;Le++){let Ne=Ae[Le];un(T,A,Ne,Ne.viewport)}}else Te.length>0&&hi(Ie,Te,A,O),Dn&&k.render(A),un(T,A,O)}le!==null&&z===0&&(Fe.updateMultisampleRenderTarget(le),Fe.updateRenderTargetMipmap(le)),W&&D.end(L),A.isScene===!0&&A.onAfterRender(L,A,O),ge.resetDefaultState(),Y=-1,Q=null,S.pop(),S.length>0?(y=S[S.length-1],Fe.setTextureUnits(y.state.textureUnits),Wt===!0&&oe.setGlobalState(L.clippingPlanes,y.state.camera)):y=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,C!==null&&C.renderEnd()};function ss(A,O,Z,W){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){let Ie=O.isArrayCamera?$t:st;if(!A.frustumCulled||A.intersectsFrustum(Ie)){W&&jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);let Te=ue.update(A),Ae=A.material;Ae.visible&&T.push(A,Te,Ae,Z,jt.z,null,O)}}else if(A.isMesh||A.isLine||A.isPoints){let Ie=O.isArrayCamera?$t:st;if(!A.frustumCulled||A.intersectsFrustum(Ie)){let Te=ue.update(A),Ae=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),jt.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),jt.copy(Te.boundingSphere.center)),jt.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(Ae)){let Le=Te.groups;for(let Ze=0,Ne=Le.length;Ze<Ne;Ze++){let ke=Le[Ze],nt=Ae[ke.materialIndex];nt&&nt.visible&&T.push(A,Te,nt,Z,jt.z,ke,O)}}else Ae.visible&&T.push(A,Te,Ae,Z,jt.z,null,O)}}}let ve=A.children;for(let Ie=0,Te=ve.length;Ie<Te;Ie++)ss(ve[Ie],O,Z,W)}function un(A,O,Z,W){let{opaque:X,transmissive:ve,transparent:Ie}=A;y.setupLightsView(Z),Wt===!0&&oe.setGlobalState(L.clippingPlanes,Z),W&&we.viewport(he.copy(W)),X.length>0&&Qs(X,O,Z),ve.length>0&&Qs(ve,O,Z),Ie.length>0&&Qs(Ie,O,Z),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function hi(A,O,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[W.id]===void 0){let ke=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[W.id]=new si(1,1,{generateMipmaps:!0,type:ke?Di:ei,minFilter:_i,samples:Math.max(4,Tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let ve=y.state.transmissionRenderTarget[W.id],Ie=W.viewport||he;ve.setSize(Ie.z*L.transmissionResolutionScale,Ie.w*L.transmissionResolutionScale);let Te=L.getRenderTarget(),Ae=L.getActiveCubeFace(),Le=L.getActiveMipmapLevel();L.setRenderTarget(ve),L.getClearColor($),Me=L.getClearAlpha(),Me<1&&L.setClearColor(16777215,.5),L.clear(),Dn&&k.render(Z);let Ze=L.toneMapping;L.toneMapping=Ki;let Ne=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),y.setupLightsView(W),Wt===!0&&oe.setGlobalState(L.clippingPlanes,W),Qs(A,Z,W),Fe.updateMultisampleRenderTarget(ve),Fe.updateRenderTargetMipmap(ve),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let nt=0,Qt=O.length;nt<Qt;nt++){let Pt=O[nt],{object:vt,geometry:En,material:ze,group:on}=Pt;if(ze.side===hn&&vt.layers.test(W.layers)){let _t=ze.side;ze.side=Fn,ze.needsUpdate=!0,jo(vt,Z,W,En,ze,on),ze.side=_t,ze.needsUpdate=!0,ke=!0}}ke===!0&&(Fe.updateMultisampleRenderTarget(ve),Fe.updateRenderTargetMipmap(ve))}L.setRenderTarget(Te,Ae,Le),L.setClearColor($,Me),Ne!==void 0&&(W.viewport=Ne),L.toneMapping=Ze}function Qs(A,O,Z){let W=O.isScene===!0?O.overrideMaterial:null;for(let X=0,ve=A.length;X<ve;X++){let Ie=A[X],{object:Te,geometry:Ae,group:Le}=Ie,Ze=Ie.material;Ze.allowOverride===!0&&W!==null&&(Ze=W),Te.layers.test(Z.layers)&&jo(Te,O,Z,Ae,Ze,Le)}}function jo(A,O,Z,W,X,ve){C!==null&&X.isNodeMaterial&&C.setObject(A,X),A.onBeforeRender(L,O,Z,W,X,ve),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(L,O,Z,W,A,ve),X.transparent===!0&&X.side===hn&&X.forceSinglePass===!1?(X.side=Fn,X.needsUpdate=!0,L.renderBufferDirect(Z,O,W,X,A,ve),X.side=ji,X.needsUpdate=!0,L.renderBufferDirect(Z,O,W,X,A,ve),X.side=hn):L.renderBufferDirect(Z,O,W,X,A,ve),A.onAfterRender(L,O,Z,W,X,ve)}function Ko(A){let O=0;for(let Z of A)Z.texture!==null&&O++;return O}function ui(A,O,Z){O.isScene!==!0&&(O=Ln);let W=Oe.get(A),X=y.state.lights,ve=y.state.shadowsArray,Ie=X.state.version,Te=fe.getParameters(A,X.state,ve,O,Z,y.state.lightProbeGridArray),Ae=fe.getProgramCacheKey(Te),Le=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;let Ze=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=I.get(A.envMap||W.environment,Ze),W.envMapRotation=W.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Le===void 0&&(A.addEventListener("dispose",ht),Le=new Map,W.programs=Le,W.programVariants=new Map);let Ne=Le.get(Ae);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===Ie)return St(A,Te),Ne}else Te.uniforms=fe.getUniforms(A),C!==null&&A.isNodeMaterial&&C.build(A,Z,Te),A.onBeforeCompile(Te,L),Ne=fe.acquireProgram(Te,Ae),Le.set(Ae,Ne),W.uniforms=Te.uniforms;let ke=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=oe.uniform),St(A,Te),W.needsLights=Ia(A),W.lightsStateVersion=Ie,W.needsLights&&(ke.ambientLightColor.value=X.state.ambient,ke.lightProbe.value=X.state.probe,ke.sunLights.value=X.state.sun,ke.sunLightShadows.value=X.state.sunShadow,ke.directionalLights.value=X.state.directional,ke.directionalLightShadows.value=X.state.directionalShadow,ke.spotLights.value=X.state.spot,ke.spotLightShadows.value=X.state.spotShadow,ke.rectAreaLights.value=X.state.rectArea,ke.ltc_1.value=X.state.rectAreaLTC1,ke.ltc_2.value=X.state.rectAreaLTC2,ke.pointLights.value=X.state.point,ke.pointLightShadows.value=X.state.pointShadow,ke.hemisphereLights.value=X.state.hemi,ke.sunShadowMatrix.value=X.state.sunShadowMatrix,ke.sunShadowCascade.value=X.state.sunShadowCascade,ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ke.spotLightMatrix.value=X.state.spotLightMatrix,ke.spotLightMap.value=X.state.spotLightMap,ke.pointShadowMatrix.value=X.state.pointShadowMatrix),W.numLightProbeGrids=Ko(y.state.lightProbeGridArray),W.currentProgram=Ne,W.uniformsList=null,Ne}function ph(A,O,Z,W,X){let ve=Oe.get(A),Ie=ve.currentProgram.id+","+W+","+X,Te=ve.programVariants.get(Ie);return Te===void 0?(Te=ui(A,O,Z),ve.programVariants.set(Ie,Te)):(ve.currentProgram=Te,ve.uniformsList=null,ve.outputColorSpace=W,ve.toneMapping=X),Te}function Pa(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=ya.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function St(A,O){let Z=Oe.get(A);Z.outputColorSpace=O.outputColorSpace,Z.batching=O.batching,Z.batchingColor=O.batchingColor,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.instancingMorph=O.instancingMorph,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function rs(A,O,Z,W,X){O.isScene!==!0&&(O=Ln),Fe.resetTextureUnits();let ve=O.fog,Ie=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,Te=le===null?L.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ct.workingColorSpace,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Le=I.get(W.envMap||Ie,Ae),Ze=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ne=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ke=!!Z.morphAttributes.position,nt=!!Z.morphAttributes.normal,Qt=!!Z.morphAttributes.color,Pt=Ki;W.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Pt=L.toneMapping);let vt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,En=vt!==void 0?vt.length:0,ze=Oe.get(W),on=y.state.lights;if(Wt===!0&&(Tn===!0||A!==Q)){let P=A===Q&&W.id===Y;oe.setState(W,A,P)}let _t=!1,as=!1;W.version===ze.__version?ze.needsLights&&ze.lightsStateVersion!==on.state.version||X.isBatchedMesh&&ze.batching===!1||!X.isBatchedMesh&&ze.batching===!0||X.isBatchedMesh&&ze.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&ze.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&ze.instancing===!1||!X.isInstancedMesh&&ze.instancing===!0||X.isSkinnedMesh&&ze.skinning===!1||!X.isSkinnedMesh&&ze.skinning===!0||X.isInstancedMesh&&ze.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ze.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&ze.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&ze.instancingMorph===!1&&X.morphTexture!==null||ze.envMap!==Le||W.fog===!0&&ze.fog!==ve||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==oe.numPlanes||ze.numIntersection!==oe.numIntersection)||ze.vertexAlphas!==Ze||ze.vertexTangents!==Ne||ze.morphTargets!==ke||ze.morphNormals!==nt||ze.morphColors!==Qt||ze.morphTargetsCount!==En||ze.numLightProbeGrids!==Ko(y.state.lightProbeGridArray)?_t=!0:(ze.outputColorSpace!==Te||ze.toneMapping!==Pt)&&(as=!0):(_t=!0,ze.__version=W.version);let Rn=ze.currentProgram;(_t===!0||as===!0)&&(Rn=as===!0?ph(W,O,X,Te,Pt):ui(W,O,X),C&&W.isNodeMaterial&&C.onUpdateProgram(W,Rn,ze));let kr=!1,Ti=!1,zi=!1,at=Rn.getUniforms(),en=ze.uniforms;if(we.useProgram(Rn.program)&&(kr=!0,Ti=!0,zi=!0),W.id!==Y&&(Y=W.id,Ti=!0),kr||Q!==A){we.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),at.setValue(G,"projectionMatrix",A.projectionMatrix),at.setValue(G,"viewMatrix",A.matrixWorldInverse);let R=at.map.cameraPosition;R!==void 0&&R.setValue(G,Vn.setFromMatrixPosition(A.matrixWorld)),Tt.logarithmicDepthBuffer&&at.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&at.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,Ti=!0,zi=!0)}if(ze.needsLights&&(on.state.sunShadowMap.length>0&&at.setValue(G,"sunShadowMap",on.state.sunShadowMap,Fe),on.state.directionalShadowMap.length>0&&at.setValue(G,"directionalShadowMap",on.state.directionalShadowMap,Fe),on.state.spotShadowMap.length>0&&at.setValue(G,"spotShadowMap",on.state.spotShadowMap,Fe),on.state.pointShadowMap.length>0&&at.setValue(G,"pointShadowMap",on.state.pointShadowMap,Fe)),X.isSkinnedMesh){at.setOptional(G,X,"bindMatrix"),at.setOptional(G,X,"bindMatrixInverse");let P=X.skeleton;P&&(P.boneTexture===null&&P.computeBoneTexture(),at.setValue(G,"boneTexture",P.boneTexture,Fe))}X.isBatchedMesh&&(at.setOptional(G,X,"batchingTexture"),at.setValue(G,"batchingTexture",X._matricesTexture,Fe),at.setOptional(G,X,"batchingIdTexture"),at.setValue(G,"batchingIdTexture",X._indirectTexture,Fe),at.setOptional(G,X,"batchingColorTexture"),X._colorsTexture!==null&&at.setValue(G,"batchingColorTexture",X._colorsTexture,Fe));let E=Z.morphAttributes;if((E.position!==void 0||E.normal!==void 0||E.color!==void 0)&&se.update(X,Z,Rn),(Ti||ze.receiveShadow!==X.receiveShadow)&&(ze.receiveShadow=X.receiveShadow,at.setValue(G,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(en.envMapIntensity.value=O.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=Xv()),Ti){if(at.setValue(G,"toneMappingExposure",L.toneMappingExposure),ze.needsLights&&Bi(en,zi),ve&&W.fog===!0&&ie.refreshFogUniforms(en,ve),ie.refreshMaterialUniforms(en,W,Re,Be,y.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.numLightProbeGrids>0){let P=_,R=0;for(let H of y.state.lightProbeGridArray)H.texture!==null&&(P.textures[R]=H.texture,P.min[R]=H.boundingBox.min,P.max[R]=H.boundingBox.max,P.resolution[R]=H.resolution,R++);for(let H in P)P[H].length=R;en.probesSH.value=P.textures,en.probesMin.value=P.min,en.probesMax.value=P.max,en.probesResolution.value=P.resolution}ya.upload(G,Pa(ze),en,Fe)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ya.upload(G,Pa(ze),en,Fe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&at.setValue(G,"center",X.center),at.setValue(G,"modelViewMatrix",X.modelViewMatrix),at.setValue(G,"normalMatrix",X.normalMatrix),at.setValue(G,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let P=W.uniformsGroups;for(let R=0,H=P.length;R<H;R++){let me=P[R];Ve.update(me,Rn),Ve.bind(me,Rn)}}return Rn}function Bi(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.sunLights.needsUpdate=O,A.sunLightShadows.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Ia(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(A,O,Z){let W=Oe.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Oe.get(A.texture).__webglTexture=O,Oe.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){let Z=Oe.get(A);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,Z=0){le=A,te=O,z=Z;let W=null,X=!1,ve=!1;if(A){let Te=Oe.get(A);if(Te.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(G.FRAMEBUFFER,Te.__webglFramebuffer),he.copy(A.viewport),Ue.copy(A.scissor),Ye=A.scissorTest,we.viewport(he),we.scissor(Ue),we.setScissorTest(Ye),Y=-1;return}else if(Te.__webglFramebuffer===void 0)Fe.setupRenderTarget(A);else if(Te.__hasExternalTextures)Fe.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ze=A.depthTexture;if(Te.__boundDepthTexture!==Ze){if(Ze!==null&&Oe.has(Ze)&&(A.width!==Ze.image.width||A.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(A)}}let Ae=A.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ve=!0);let Le=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?W=Le[O][Z]:W=Le[O],X=!0):A.samples>0&&Fe.useMultisampledRTT(A)===!1?W=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Le)?W=Le[Z]:W=Le,he.copy(A.viewport),Ue.copy(A.scissor),Ye=A.scissorTest}else he.copy(Xe).multiplyScalar(Re).floor(),Ue.copy(xt).multiplyScalar(Re).floor(),Ye=yt;if(Z!==0&&(W=V),we.bindFramebuffer(G.FRAMEBUFFER,W)&&we.drawBuffers(A,W),we.viewport(he),we.scissor(Ue),we.setScissorTest(Ye),X){let Te=Oe.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+O,Te.__webglTexture,Z)}else if(ve){let Te=O;for(let Ae=0;Ae<A.textures.length;Ae++){let Le=Oe.get(A.textures[Ae]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ae,Le.__webglTexture,Z,Te)}}else if(A!==null&&Z!==0){let Te=Oe.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Te.__webglTexture,Z)}Y=-1};function Yn(A){let O=Oe.get(A);return(O.__readFormat!==A.format||O.__readType!==A.type)&&(O.__readFormat=A.format,O.__readType=A.type,O.__formatReadable=Tt.textureFormatReadable(A.format),O.__typeReadable=Tt.textureTypeReadable(A.type)),O}this.readRenderTargetPixels=function(A,O,Z,W,X,ve,Ie,Te=0){if(!(A&&A.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ae=Ae[Ie],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){we.bindFramebuffer(G.FRAMEBUFFER,Ae);try{let Le=A.textures[Te],Ze=Le.format,Ne=Le.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te);let ke=Yn(Le);if(ke.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-W&&Z>=0&&Z<=A.height-X&&G.readPixels(O,Z,W,X,xe.convert(Ze),xe.convert(Ne),ve)}finally{let Le=le!==null?Oe.get(le).__webglFramebuffer:null;we.bindFramebuffer(G.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(A,O,Z,W,X,ve,Ie,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ae=Ae[Ie],Array.isArray(Ae)&&(Ae=Ae[0])),Ae)if(O>=0&&O<=A.width-W&&Z>=0&&Z<=A.height-X){we.bindFramebuffer(G.FRAMEBUFFER,Ae);let Le=A.textures[Te],Ze=Le.format,Ne=Le.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te);let ke=Yn(Le);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,nt),G.bufferData(G.PIXEL_PACK_BUFFER,ve.byteLength,G.STREAM_READ),G.readPixels(O,Z,W,X,xe.convert(Ze),xe.convert(Ne),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Qt=le!==null?Oe.get(le).__webglFramebuffer:null;we.bindFramebuffer(G.FRAMEBUFFER,Qt);let Pt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await up(G,Pt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,nt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ve),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(nt),G.deleteSync(Pt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,Z=0){let W=Math.pow(2,-Z),X=Math.floor(A.image.width*W),ve=Math.floor(A.image.height*W),Ie=O!==null?O.x:0,Te=O!==null?O.y:0;Fe.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,Z,0,0,Ie,Te,X,ve),we.unbindTexture()},this.copyTextureToTexture=function(A,O,Z=null,W=null,X=0,ve=0){let Ie,Te,Ae,Le,Ze,Ne,ke,nt,Qt,Pt=A.isCompressedTexture?A.mipmaps[ve]:A.image;if(Z!==null)Ie=Z.max.x-Z.min.x,Te=Z.max.y-Z.min.y,Ae=Z.isBox3?Z.max.z-Z.min.z:1,Le=Z.min.x,Ze=Z.min.y,Ne=Z.isBox3?Z.min.z:0;else{let at=Math.pow(2,-X);Ie=Math.floor(Pt.width*at),Te=Math.floor(Pt.height*at),A.isDataArrayTexture?Ae=Pt.depth:A.isData3DTexture?Ae=Math.floor(Pt.depth*at):Ae=1,Le=0,Ze=0,Ne=0}W!==null?(ke=W.x,nt=W.y,Qt=W.z):(ke=0,nt=0,Qt=0);let vt=xe.convert(O.format),En=xe.convert(O.type),ze;O.isData3DTexture?(Fe.setTexture3D(O,0),ze=G.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Fe.setTexture2DArray(O,0),ze=G.TEXTURE_2D_ARRAY):(Fe.setTexture2D(O,0),ze=G.TEXTURE_2D),we.activeTexture(G.TEXTURE0),we.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,O.flipY),we.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),we.pixelStorei(G.UNPACK_ALIGNMENT,O.unpackAlignment);let on=we.getParameter(G.UNPACK_ROW_LENGTH),_t=we.getParameter(G.UNPACK_IMAGE_HEIGHT),as=we.getParameter(G.UNPACK_SKIP_PIXELS),Rn=we.getParameter(G.UNPACK_SKIP_ROWS),kr=we.getParameter(G.UNPACK_SKIP_IMAGES);we.pixelStorei(G.UNPACK_ROW_LENGTH,Pt.width),we.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pt.height),we.pixelStorei(G.UNPACK_SKIP_PIXELS,Le),we.pixelStorei(G.UNPACK_SKIP_ROWS,Ze),we.pixelStorei(G.UNPACK_SKIP_IMAGES,Ne);let Ti=A.isDataArrayTexture||A.isData3DTexture,zi=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){let at=Oe.get(A),en=Oe.get(O),E=Oe.get(at.__renderTarget),P=Oe.get(en.__renderTarget);we.bindFramebuffer(G.READ_FRAMEBUFFER,E.__webglFramebuffer),we.bindFramebuffer(G.DRAW_FRAMEBUFFER,P.__webglFramebuffer);for(let R=0;R<Ae;R++)Ti&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Oe.get(A).__webglTexture,X,Ne+R),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Oe.get(O).__webglTexture,ve,Qt+R)),G.blitFramebuffer(Le,Ze,Le+Ie,Ze+Te,ke,nt,ke+Ie,nt+Te,G.DEPTH_BUFFER_BIT,G.NEAREST);we.bindFramebuffer(G.READ_FRAMEBUFFER,null),we.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||Oe.has(A)){let at=Oe.get(A),en=Oe.get(O);we.bindFramebuffer(G.READ_FRAMEBUFFER,N),we.bindFramebuffer(G.DRAW_FRAMEBUFFER,J);for(let E=0;E<Ae;E++)Ti?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,at.__webglTexture,X,Ne+E):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,at.__webglTexture,X),zi?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,en.__webglTexture,ve,Qt+E):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,en.__webglTexture,ve),X!==0?G.blitFramebuffer(Le,Ze,Le+Ie,Ze+Te,ke,nt,ke+Ie,nt+Te,G.COLOR_BUFFER_BIT,G.NEAREST):zi?G.copyTexSubImage3D(ze,ve,ke,nt,Qt+E,Le,Ze,Ie,Te):G.copyTexSubImage2D(ze,ve,ke,nt,Le,Ze,Ie,Te);we.bindFramebuffer(G.READ_FRAMEBUFFER,null),we.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else zi?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(ze,ve,ke,nt,Qt,Ie,Te,Ae,vt,En,Pt.data):O.isCompressedArrayTexture?G.compressedTexSubImage3D(ze,ve,ke,nt,Qt,Ie,Te,Ae,vt,Pt.data):G.texSubImage3D(ze,ve,ke,nt,Qt,Ie,Te,Ae,vt,En,Pt):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ve,ke,nt,Ie,Te,vt,En,Pt.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ve,ke,nt,Pt.width,Pt.height,vt,Pt.data):G.texSubImage2D(G.TEXTURE_2D,ve,ke,nt,Ie,Te,vt,En,Pt);we.pixelStorei(G.UNPACK_ROW_LENGTH,on),we.pixelStorei(G.UNPACK_IMAGE_HEIGHT,_t),we.pixelStorei(G.UNPACK_SKIP_PIXELS,as),we.pixelStorei(G.UNPACK_SKIP_ROWS,Rn),we.pixelStorei(G.UNPACK_SKIP_IMAGES,kr),ve===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&G.generateMipmap(ze),we.unbindTexture()},this.initRenderTarget=function(A){Oe.get(A).__webglFramebuffer===void 0&&Fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Fe.setTextureCube(A,0):A.isData3DTexture?Fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Fe.setTexture2DArray(A,0):Fe.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){te=0,z=0,le=null,we.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var $i=[{id:"mage",icon:"\u{1F52E}",label:"MAGE",color:11824127,range:22,every:1.55,dmg:8,aoe:1.9,desc:"fireballs (area)"},{id:"warrior",icon:"\u2694\uFE0F",label:"WARRIOR",color:16734794,range:2.6,every:.8,dmg:9,aoe:1.2,desc:"holds the gate"},{id:"archer",icon:"\u{1F3F9}",label:"ARCHER",color:5234943,range:25,every:.65,dmg:5,aoe:0,desc:"fast arrows, hits fliers"},{id:"healer",icon:"\u{1F49A}",label:"HEALER",color:6160282,range:18,every:1.3,dmg:3,aoe:0,desc:"heals + barrier"}],Ht=Object.fromEntries($i.map((s,e)=>[s.id,e])),yi=[{id:"imp",hp:14,speed:3.4,dmg:1,r:.45,fly:!1,pts:2},{id:"brute",hp:60,speed:1.6,dmg:3,r:.9,fly:!1,pts:6},{id:"wraith",hp:22,speed:2.6,dmg:2,r:.55,fly:!0,pts:4},{id:"boss",hp:560,speed:.9,dmg:8,r:2,fly:!1,pts:80}],Mn=Object.fromEntries(yi.map((s,e)=>[s.id,e])),Ni=[{title:"THE DARK DIMENSION",text:"A magic underworld has clashed with Earth.",say:"The Dark Dimension... a magic underworld... has clashed with Earth.",sec:5.5,art:"rift"},{title:"A FATHER",text:"A scientist, denied the cure for his daughter by a greedy boss. His wife and his brother \u2014 gone.",say:"It began with a scientist. Denied the AIDS cure for his daughter by a greedy boss. His wife... and his brother... gone.",sec:9,art:"scientist"},{title:"THE BOOK & THE STONE",text:"An ancient book. A dark teleport stone. His grief tore the Dark Dimension open at Earth\u2019s core.",say:"An ancient book. A dark teleport stone. His grief tore the Dark Dimension open, at the core of the Earth.",sec:8,art:"book"},{title:"5,000,000,000 STOLEN",text:"Five billion souls were stolen by a hidden Mastermind.",say:"Five billion souls were stolen... by a hidden Mastermind.",sec:5.5,art:"souls"},{title:"THE SACRIFICE",text:"The Lord of Earth gave 1.5 billion more to awaken the Ascension System.",say:"The Lord of Earth sacrificed one and a half billion more... to awaken the Ascension System.",sec:7,art:"lord"},{title:"THE LAST CITADEL",text:"1.5 billion survivors remain. Beat the Dark Dimension \u2014 or they vanish forever.",say:"One and a half billion survivors remain. Beat the Dark Dimension... or they vanish. Forever.",sec:7,art:"citadel"}],jv=[0,5],Jp=s=>s%3===1?Ni.map((e,t)=>t):jv;var Hu=[{n:1,title:"THE RIFT OPENS",boss:{id:"scientist",name:"The Corrupted Scientist",hp:1}},{n:2,title:"ASCENSION",boss:{id:"scientist2",name:"The Scientist, Unbound",hp:1.5}},{n:3,title:"THE MASTERMIND",boss:{id:"mastermind",name:"The Mastermind",hp:2.4}}],Qi=[{id:"rift",q:"THE RIFT IS UNSTABLE",a:{key:"seal",label:"SEAL THE RIFT",icon:"\u{1F300}",words:["seal","rift"]},b:{key:"hunt",label:"HUNT THE MASTERMIND",icon:"\u{1F5E1}\uFE0F",words:["hunt","mastermind","attack"]}},{id:"save",q:"THE CITY BURNS",a:{key:"city",label:"SAVE THE CITY",icon:"\u{1F3D9}\uFE0F",words:["city"]},b:{key:"army",label:"SAVE THE ARMY",icon:"\u{1F6E1}\uFE0F",words:["army"]}}],Wl={seal:{spawnMul:.75,finalHp:1.3,text:"Fewer creatures pour out\u2026 but the Mastermind grows stronger."},hunt:{spawnMul:1.3,finalHp:.7,text:"The rift rages wider\u2026 but the Mastermind is wounded."},city:{survivors:12e7,guardians:0,text:"120 million survivors pulled from the ruins."},army:{survivors:0,guardians:2,text:"Two guardian heroes join the wall for good."}},Yp={"seal-city":"The rift is sealed. The city stands. Dawn rises over {n} survivors.","seal-army":"The rift is sealed and the army marches home. {n} survivors live on.","hunt-city":"The Mastermind is gone. The city wakes to {n} survivors and a quiet sky.","hunt-army":"The army stormed the dark. The Mastermind is gone. {n} survivors live on."},No=[{id:"dragon",min:500,label:"DRAGON ALLY",icon:"\u{1F409}",desc:"a dragon burns the field; on a boss: 25% of its life"},{id:"awaken",min:100,label:"ASCENSION",icon:"\u26A1",desc:"screen-wide ultimate + you ascend (\xD73 power)"},{id:"guardian",min:30,label:"GUARDIAN HERO",icon:"\u{1F6E1}\uFE0F",desc:"summons a golden guardian to the gate"},{id:"rune",min:5,label:"SHIELD RUNE",icon:"\u{1F537}",desc:"+12 barrier + a spell volley"},{id:"volley",min:1,label:"SPELL VOLLEY",icon:"\u2728",desc:"homing bolts from you (more coins, more bolts)"}],Zp=s=>{let e=Number(s)||0;return No.find(t=>e>=t.min)||No[No.length-1]},Kv={mage:["mage","wizard","magic","\u{1F52E}","\u{1FA84}"],warrior:["warrior","knight","sword","tank","\u2694\uFE0F","\u{1F5E1}\uFE0F"],archer:["archer","bow","arrow","hunter","\u{1F3F9}"],healer:["healer","heal","priest","medic","\u{1F49A}","\u2764\uFE0F\u200D\u{1FA79}"]};function $p(s){let e=String(s||"").toLowerCase().trim();if(!e)return{cmd:"chat"};let t=e.split(/[^\p{L}\p{N}\p{Extended_Pictographic}\u200d\ufe0f]+/u).filter(Boolean),n=r=>new RegExp("\\p{Extended_Pictographic}","u").test(r)?e.includes(r):t.includes(r);for(let[r,a]of Object.entries(Kv))if(a.some(n))return{cmd:"class",cls:r};let i=e.match(/^(?:vote\s*)?([12])(?:\ufe0f?\u20e3)?\b/u)||e.match(/^([12])\ufe0f?\u20e3/u);if(i)return{cmd:"vote",vote:Number(i[1])};if(/^(one|first)\b/.test(e))return{cmd:"vote",vote:1};if(/^(two|second)\b/.test(e))return{cmd:"vote",vote:2};for(let r of Qi){if(r.a.words.some(n))return{cmd:"vote",vote:1,choice:r.id};if(r.b.words.some(n))return{cmd:"vote",vote:2,choice:r.id}}return{cmd:"chat"}}var Rr=4,kn=2.6;var Mi=2.2,nn=-34,Qp=15;var em=[["red",16731486],["orange",16752412],["gold",16765503],["lime",10216804],["green",3064446],["teal",2085313],["cyan",4114431],["blue",5078271],["purple",10182117],["pink",16740277],["white",15921906],["black",3816008],["brown",11037500],["silver",12109014],["rose",16748451]],ql=new Map(em.map(([s,e])=>[s,e]));ql.set("yellow",16765503);ql.set("violet",10182117);ql.set("grey",12109014);ql.set("gray",12109014);function Jv(s){let e=2166136261;for(let t of String(s))e^=t.codePointAt(0),e=Math.imul(e,16777619);return e>>>0}var tm=s=>em[Jv(s)%10][1];function Vu(s){let e=String(s||"").replace(/[\u0000-\u001f\u200b-\u200f\u202a-\u202e]/g,"").replace(/\s+/g," ").trim(),t=[...e];return(t.length>16?t.slice(0,15).join("")+"\u2026":e)||"Viewer"}var Xl=["Pixel","Mochi","Bolt","Nugget","Waffles","Ziggy","Pebble","Turbo","Biscuit","Gizmo","Noodle","Sprocket","Muffin","Rocket","Tofu","Dumpling","Jelly","Comet","Pickle","Bean","Sushi","Taco","Nacho","Boba"];var Rt={bot:1,cmd:2,asc:4,bless:8,down:16,crown:32,gift:64},Wu=2;var Yv={introSeconds:1,gatherSeconds:14,chapterSeconds:4,breakSeconds:5,victorySeconds:4.5,voteSeconds:16,choiceSeconds:5.5,endingSeconds:16,minDefenders:6,bots:!0,waveCap:70,bossCap:100,sendCap:70,enemySend:90,enemyCap:110,spawnMul:1,enemyHpMul:1,dmgMul:1,lossPer:95e4,likeBarrier:.06,likePulse:500,startChapter:1},As=4,jl=class{constructor(e={},t=Math.random){this.o={...Yv,...e},this.rng=t,this.t=0,this.run=0,this.people=new Map,this.byId=new Map,this.nextId=1,this.enemies=[],this.eNext=1,this.allies=[],this.aNext=1,this.hits=[],this.ev=[],this.rAdd=[],this.rDel=[],this.hype=0,this.likes=0,this.humanAt=-999,this.sessionBest=0,this.saves=0,this.lastResult=null,this.shotBudget=0,this.popBudget=0,this.killBudget=0,this.startSession(!0)}r(e){return Math.floor(this.rng()*e)}emit(e){this.ev.push(e)}drain(){let e=this.ev;return this.ev=[],e}drainRoster(){let e={add:this.rAdd,del:this.rDel};return this.rAdd=[],this.rDel=[],e}rosterEntry(e){return{id:e.id,name:e.name,color:e.color,bot:e.bot}}get alive(){let e=0;for(let t of this.people.values())t.on&&e++;return e}get humans(){let e=0;for(let t of this.people.values())t.on&&!t.bot&&e++;return e}defenders(){return[...this.people.values()].filter(e=>e.on)}get chapter(){return Math.max(1,Math.min(3,Math.floor(this.wave/As)+(this.phase==="chapter"||this.wave%As?1:0)))}get boss(){return this.enemies.find(e=>e.k===Mn.boss&&e.hp>0)||null}member(e,t,n=!1){let i=this.people.get(e);if(!i)i={id:this.nextId++,uid:e,name:Vu(t),color:tm(e),bot:n,on:!1,cls:-1,slot:-1,x:0,z:Rr,hp:100,downT:0,cd:this.rng(),lastAct:this.t,cmdT:-9,hasteT:-9,ascT:-9,blessed:!1,giftT:-9,pts:0,kills:0,vote:0,post:0},this.people.set(e,i),this.byId.set(i.id,i),this.rAdd.push(this.rosterEntry(i));else if(t&&!n){let r=Vu(t);r!==i.name&&(i.name=r,this.rAdd.push(this.rosterEntry(i)))}return i}join(e,t){if(e.lastAct=this.t,e.bot||(this.humanAt=this.t),t!==void 0&&t!==e.cls){let n=e.cls;e.cls=t,e.on&&(this.place(e),this.emit({k:"class",id:e.id,c:t,was:n}))}return e.on?!1:(e.cls<0&&(e.cls=this.autoClass()),e.on=!0,e.hp=100,e.downT=0,this.place(e),this.emit({k:"join",id:e.id,bot:e.bot,c:e.cls}),e.bot||this.trimBots(),!0)}autoClass(){let e=[0,0,0,0];for(let r of this.people.values())r.on&&r.cls>=0&&e[r.cls]++;let t=e.reduce((r,a)=>r+a,0),n=0,i=1e9;for(let r=0;r<4;r++){let a=e[r]+this.rng()*.8;r===Ht.warrior&&e[r]>t*.25&&(a+=99),r===Ht.healer&&(a+=.6),a<i&&(i=a,n=r)}return n}place(e){if(e.cls===Ht.warrior){let r=this.post=(this.post||0)+1,a=r*7%13;e.post={x:-6+a,z:Mi-1.6-r%3*.9},e.x=e.post.x,e.z=Rr-.2;return}let n=(this.slotN=(this.slotN||0)+1)*11%34,i=n%2;e.post=null,e.x=-8.4+(n>>1)*1.05+i*.5,e.z=Rr+i*1.1+(this.rng()-.5)*.15}trimBots(){if(this.humans+this.botsOn()<=this.o.minDefenders)return;let e=[...this.people.values()].find(t=>t.bot&&t.on);e&&(e.on=!1,this.emit({k:"leave",id:e.id}))}botsOn(){let e=0;for(let t of this.people.values())t.bot&&t.on&&e++;return e}fillBots(){if(!this.o.bots)return;let e=this.o.minDefenders-this.alive,t=[Ht.warrior,Ht.mage,Ht.archer,Ht.healer,Ht.archer,Ht.mage,Ht.warrior,Ht.mage];for(let n=0;n<Xl.length&&e>0;n++){let i=Xl[(n+this.run*3)%Xl.length],r=this.member("bot:"+i,"Bot "+i,!0);r.on||(r.cls=t[n%t.length],this.join(r),e--)}}input(e){if(!e||!e.uid)return{ok:!1};let t=this.member(String(e.uid),e.name||e.uid);switch(e.type){case"chat":case"comment":return this.chat(t,String(e.text||""));case"like":return this.like(t,Math.max(1,Math.min(100,Number(e.count)||1)));case"gift":return this.gift(t,(Number(e.coins)||1)*Math.max(1,Number(e.count)||1),e.giftName||"gift");case"follow":return this.join(t),this.bless(t,"follow"),{ok:!0};case"share":return this.join(t),this.bless(t,"share"),{ok:!0};case"join":return this.join(t),{ok:!0}}return{ok:!0}}chat(e,t){let n=$p(t),i=this.join(e,n.cmd==="class"?Ht[n.cls]:void 0);return e.cmdT=this.t,this.phase==="vote"&&n.cmd==="vote"&&(!n.choice||n.choice===Qi[this.voteIdx].id)?(e.vote!==n.vote&&(e.vote=n.vote,this.countVotes(),this.emit({k:"vote",id:e.id,v:n.vote})),{ok:!0,cmd:"vote",vote:n.vote}):(this.fighting()&&(e.hasteT=this.t+3),{ok:!0,cmd:i?"join":n.cmd,cls:n.cls})}fighting(){return this.phase==="wave"||this.phase==="boss"||this.phase==="break"}like(e,t){return this.join(e),this.likes+=t,this.hype+=t,this.barrier=Math.min(100,this.barrier+t*this.o.likeBarrier),this.hype>=this.o.likePulse&&(this.hype-=this.o.likePulse,this.pulse(e)),{ok:!0}}bless(e,t){if(t==="follow")e.blessed=!0,this.revive(e),this.barrier=Math.min(100,this.barrier+10);else{this.barrier=Math.min(100,this.barrier+15);for(let n of this.people.values())n.on&&n.downT>0&&this.revive(n)}this.emit({k:"bless",id:e.id,why:t})}revive(e){e.downT>0&&(e.downT=0,e.hp=100,this.emit({k:"rise",id:e.id})),e.hp=100}gift(e,t,n){this.join(e);let i=Zp(t);e.giftT=this.t,e.pts+=Math.min(60,4+t);let r={k:"gift",id:e.id,tier:i.id,coins:t,giftName:n};switch(i.id){case"volley":this.volley(e,Math.min(12,5+t),11);break;case"rune":this.barrier=Math.min(100,this.barrier+12),this.volley(e,6,12);break;case"guardian":{let a=this.allies.filter(o=>o.k===0);if(a.length>=4){let o=a.sort((c,l)=>c.until-l.until)[0];o.until=this.t+35,o.hp=100,r.extended=!0}else this.addAlly(0,e.id,35);break}case"awaken":e.ascT=this.t+20,this.t-(this.ultT||-99)>8?(this.ultT=this.t,this.ultimate(e,1)):(this.volley(e,10,16),r.cool=!0);break;case"dragon":{let a=this.boss;if(a&&(this.damage(a,a.max*.25,e,!0),r.judgment=!0),this.allies.some(o=>o.k===1)){let o=this.allies.find(c=>c.k===1);o.until=Math.max(o.until,this.t+25),a||this.ultimate(e,.6),r.extended=!0}else this.addAlly(1,e.id,25);break}}return this.emit(r),{ok:!0,tier:i.id}}addAlly(e,t,n){let i={id:this.aNext++,k:e,by:t,until:this.t+n,x:e?0:-5+this.r(11),z:e?-10:Mi-2.6,hp:100,cd:0,a0:this.t};this.allies.push(i),this.emit({k:"ally",a:i.id,kind:e,by:t})}volley(e,t,n){let i=this.enemies.filter(r=>r.hp>0);if(!i.length){this.barrier=Math.min(100,this.barrier+4);return}for(let r=0;r<t;r++){let a=i[this.r(i.length)];this.queueHit(e,a,n*this.o.dmgMul,0,.5+r*.07,"v")}this.emit({k:"volley",id:e.id,n:t})}ultimate(e,t){let n=0;for(let i of this.enemies){if(i.hp<=0)continue;let r=i.k===Mn.boss?i.max*.08*t:(60+this.wave*6)*t;this.damage(i,r,e,!1),i.k!==Mn.boss&&(i.z-=3*t),n++}this.emit({k:"ult",id:e?e.id:0,hit:n,p:t})}pulse(e){this.barrier=Math.min(100,this.barrier+20);for(let t of this.people.values())t.on&&t.downT>0&&this.revive(t);this.ultimate(null,.5),this.emit({k:"pulse",id:e.id})}setPhase(e,t){this.phase=e,this.phaseStart=this.t,this.phaseEnd=this.t+t}startSession(e=!1){this.run++,this.wave=(this.o.startChapter-1)*As+(this.o.startWave||0),this.survivors=15e8,this.barrier=40,this.hype=0,this.choices=[],this.fx={spawnMul:1,finalHp:1,guardians:0},this.voteIdx=-1,this.voteCounts=[0,0],this.enemies=[],this.allies=[],this.hits=[],this.spawnLeft=0,this.waveStart=0,this.slotN=0,this.post=0,this.lost=0;for(let[t,n]of this.people)!n.bot&&this.t-n.lastAct>1200&&(this.people.delete(t),this.byId.delete(n.id),this.rDel.push(n.id));for(let t of this.people.values())t.on=!1,t.runPts=0,t.vote=0,t.ascT=-9,t.blessed=!1,t.downT=0,t.hp=100;for(let t of this.people.values())!t.bot&&this.t-t.lastAct<180&&this.join(t);this.lore=this.o.introSeconds>0?(this.o.loreCards||Jp(this.run)).slice():[],this.loreAt=this.t,this.setPhase("intro",this.lore.length?this.lore.reduce((t,n)=>t+Ni[n].sec,0)+1:.5),this.emit({k:"intro",run:this.run,lore:this.lore.slice()})}startChapter(){this.setPhase("chapter",this.o.chapterSeconds),this.emit({k:"chapter",n:this.chapter,title:Hu[this.chapter-1].title})}nextWave(){this.wave++;let e=this.chapter,t=(this.wave-1)%As,n=Math.max(1,this.alive),i=Math.sqrt(Math.min(n,220)/6),r=.45+.65*i;this.hpCrowd=.6+.4*i;let a=Math.round((6+1.6*this.wave)*r*this.fx.spawnMul*this.o.spawnMul);if(this.waveStart=this.t,t===As-1){let o=Hu[e-1].boss,c=yi[Mn.boss].hp*o.hp*(.6+.4*i)*(e===3?this.fx.finalHp:1)*this.o.enemyHpMul;this.spawnLeft=Math.round(a*.5),this.spawnEvery=22/Math.max(1,this.spawnLeft);let l=this.spawn(Mn.boss,c);l.bossId=o.id,l.name=o.name,l.z=nn+4,l.x=0,this.setPhase("boss",this.o.bossCap),this.emit({k:"boss",n:e,id:o.id,name:o.name,hp:Math.round(c)})}else this.spawnLeft=a,this.spawnEvery=(16+t*3)/a,this.setPhase("wave",this.o.waveCap),this.emit({k:"wave",n:this.wave,ch:e,i:t+1,count:a});this.nextSpawn=this.t+.8,this.fillBots()}spawn(e,t){let n=yi[e],i=this.chapter,r=t||n.hp*(1+.08*(this.wave-1))*(1+(i-1)*.1)*(this.hpCrowd||1)*this.o.enemyHpMul,a={id:this.eNext++,k:e,x:(this.rng()-.5)*5,z:nn+3+this.rng()*2,tx:(this.rng()-.5)*(Qp-3),hp:r,max:r,speed:n.speed*(.85+this.rng()*.3),atkT:0,slowT:0,eng:0,born:this.t};return this.enemies.push(a),a}spawnTick(){if(this.spawnLeft<=0||this.t<this.nextSpawn)return;if(this.enemies.length>=this.o.enemyCap){this.nextSpawn=this.t+.3;return}let e=this.chapter,t=this.rng(),n=e===1?[.7,.85]:e===2?[.5,.75]:[.42,.72],i=t<n[0]?Mn.imp:t<n[1]?Mn.brute:Mn.wraith;this.spawn(i),this.spawnLeft--,this.nextSpawn=this.t+this.spawnEvery*(.6+this.rng()*.8)}waveCleared(){return this.spawnLeft<=0&&!this.enemies.some(e=>e.hp>0)}startVote(){this.voteIdx=this.chapter-1,this.voteCounts=[0,0];for(let e of this.people.values())e.vote=0;this.setPhase("vote",this.o.voteSeconds),this.emit({k:"vote",start:!0,i:this.voteIdx})}countVotes(){let e=[0,0];for(let t of this.people.values())t.on&&t.vote&&e[t.vote-1]++;this.voteCounts=e}closeVote(){this.countVotes();let e=Qi[this.voteIdx],t=this.voteCounts,n=t[0]===t[1]?this.r(2)?"b":"a":t[0]>t[1]?"a":"b",i=e[n].key,r=Wl[i];if(this.choices.push(i),r.spawnMul&&(this.fx.spawnMul=r.spawnMul),r.finalHp&&(this.fx.finalHp=r.finalHp),r.survivors&&(this.survivors=Math.min(15e8,this.survivors+r.survivors)),r.guardians){this.fx.guardians=r.guardians;for(let a=0;a<r.guardians;a++)this.addAlly(0,0,1e6)}this.setPhase("choice",this.o.choiceSeconds),this.emit({k:"choice",i:this.voteIdx,key:i,votes:t.slice(),none:t[0]+t[1]===0})}endSession(e){let t=[...this.people.values()].filter(r=>r.on||r.runPts>0).filter(r=>!r.bot&&r.runPts>0),n=[...this.people.values()].filter(r=>r.runPts>0||r.on).sort((r,a)=>a.runPts-r.runPts),i=n.filter(r=>!r.bot).slice(0,3);for(let r of t)r.pts+=0;this.sessionBest=Math.max(this.sessionBest,this.wave),e&&this.saves++,this.lastResult={run:this.run,saved:e,wave:this.wave,survivors:Math.round(this.survivors),choices:this.choices.slice(),players:t.map(r=>({uid:r.uid,name:r.name,pts:Math.round(r.runPts),kills:r.runKills||0}))},this.enemies=[],this.hits=[],this.allies=this.allies.filter(r=>r.k===1&&!1),this.setPhase("ending",this.o.endingSeconds),this.emit({k:"end",saved:e,wave:this.wave,survivors:Math.round(this.survivors),choices:this.choices.slice(),top:(i.length?i:n.slice(0,3)).map(r=>r.id)});for(let r of this.people.values())r.runKills=0}step(e){this.t+=e;let t=this.phase;if(this.shotBudget=Math.min(6,this.shotBudget+e*34),this.popBudget=Math.min(4,this.popBudget+e*12),this.killBudget=Math.min(6,this.killBudget+e*24),(t==="wave"||t==="boss"||t==="break"||t==="victory")&&(this.spawnTick(),this.combat(e),this.survivors<=0))return this.survivors=0,this.endSession(!1);if(t==="vote"&&this.botsVote(e),t==="intro"&&this.lore.length&&this.t>=this.loreAt){let n=this.lore.shift();this.loreAt=this.t+Ni[n].sec,this.emit({k:"lore",i:n,sec:Ni[n].sec})}if(this.fighting()&&(this.barrier=Math.max(0,this.barrier-e*.6)),t==="wave"&&this.waveCleared()&&this.t-this.waveStart>4){this.setPhase("break",this.o.breakSeconds),this.emit({k:"clear",n:this.wave});return}if(t==="boss"&&!this.boss){this.setPhase("victory",this.o.victorySeconds);for(let n of this.enemies)n.hp>0&&(n.hp=0,this.emit({k:"kill",e:n.id,by:0,x:+n.x.toFixed(1),z:+n.z.toFixed(1),q:1}));return}if(!(this.t<this.phaseEnd))switch(t){case"intro":this.setPhase("gather",this.o.gatherSeconds),this.fillBots(),this.emit({k:"gather"});break;case"gather":if(!this.alive&&(this.fillBots(),!this.alive)){this.phaseEnd=this.t+2;return}this.startChapter();break;case"chapter":this.nextWave();break;case"wave":this.nextWave();break;case"break":this.wave%As===As-1?this.nextWave():this.nextWave();break;case"boss":{let n=this.boss;n&&(this.loseSurvivors(150/1.15,!0),n.hp=0,this.emit({k:"retreat",name:n.name})),this.setPhase("victory",2.5);break}case"victory":if(this.chapter>=3)return this.endSession(!0);this.startVote();break;case"vote":this.closeVote();break;case"choice":this.wave=this.chapter*As,this.startChapter();break;case"ending":this.startSession();break}}loseSurvivors(e,t=!1){let n=e*this.o.lossPer*(1+.12*(this.chapter-1));this.survivors=Math.max(0,this.survivors-n),this.lost+=n,t&&this.emit({k:"toll",n:Math.round(n)})}queueHit(e,t,n,i,r,a){this.hits.push({at:this.t+r,by:e?e.id:0,e:t,dmg:n,aoe:i}),this.shotBudget>=1&&(this.shotBudget--,this.emit({k:"shot",s:e?e.id:0,e:t.id,c:a,d:+r.toFixed(2)}))}damage(e,t,n,i){if(e.hp<=0)return;let r=e.hp;if(e.hp-=t,e.hitT=this.t,n){let a=Math.min(r,t);n.runPts=(n.runPts||0)+a*.25,n.pts+=a*.25}if((i||this.popBudget>=1&&(e.k===Mn.boss||t>=14))&&(this.popBudget=Math.max(0,this.popBudget-1),this.emit({k:"dmg",e:e.id,d:Math.round(t),c:i?2:t>=20?1:0})),e.hp<=0){let a=yi[e.k];n&&(n.runPts+=a.pts,n.pts+=a.pts,n.kills++,n.runKills=(n.runKills||0)+1),e.k===Mn.boss?this.emit({k:"bossdown",id:e.bossId,name:e.name,by:n&&!n.bot?n.id:0}):this.killBudget>=1&&(this.killBudget--,this.emit({k:"kill",e:e.id,by:n?n.id:0,x:+e.x.toFixed(1),z:+e.z.toFixed(1),q:e.k}))}}combat(e){let t=this.t;if(this.hits.length){let c=[];for(let l of this.hits){if(l.at>t){c.push(l);continue}let h=l.by?this.byId.get(l.by):null;if(l.e.hp>0&&this.damage(l.e,l.dmg,h,!1),l.aoe)for(let d of this.enemies)d!==l.e&&d.hp>0&&d.k!==Mn.boss&&Math.abs(d.x-l.e.x)<l.aoe&&Math.abs(d.z-l.e.z)<l.aoe&&this.damage(d,l.dmg*.55,h,!1)}this.hits=c}let n=this.enemies.filter(c=>c.hp>0).sort((c,l)=>l.z-c.z),i=n.filter(c=>!yi[c.k].fly),r=0,a=this.alive,o=a>24?Math.sqrt(24/a):1;for(let c of this.people.values())c.on&&c.cls===Ht.healer&&c.downT<=0&&r++;for(let c of this.people.values()){if(!c.on)continue;if(c.downT>0){c.downT-=e*(1+Math.min(2,r*.25)),c.downT<=0&&(c.downT=0,c.hp=100,this.emit({k:"rise",id:c.id}));continue}let l=$i[c.cls];if(c.cls===Ht.warrior&&this.warriorMove(c,i,e),c.cd-=e*(t<c.hasteT?1.6:1)*(t<c.ascT?1.5:1),c.cd>0)continue;c.cd=l.every*(.9+this.rng()*.2);let h=this.rng()<.12,d=o*(c.bot?.7:1)*(c.blessed?1.2:1)*(t<c.ascT?3:1)*(h?2:1)*this.o.dmgMul;if(c.cls===Ht.warrior){let m=i.find(g=>Math.abs(g.x-c.x)<l.range+yi[g.k].r&&Math.abs(g.z-c.z)<l.range+yi[g.k].r);m?(this.damage(m,l.dmg*d,c,h&&d>2.5),m.slowT=t+.6,this.shotBudget>=1&&(this.shotBudget--,this.emit({k:"shot",s:c.id,e:m.id,c:"w",d:.1}))):c.cd=.25;continue}if(c.cls===Ht.healer){this.barrier=Math.min(100,this.barrier+.25);let m=null;for(let g of this.people.values())g.on&&g.downT<=0&&g.cls===Ht.warrior&&g.hp<80&&(!m||g.hp<m.hp)&&(m=g);if(m){m.hp=Math.min(100,m.hp+16),this.shotBudget>=1&&(this.shotBudget--,this.emit({k:"heal",s:c.id,t:m.id}));continue}for(let g of this.allies)if(g.k===0&&g.hp<90){g.hp=Math.min(100,g.hp+10);break}}let f=[];for(let m of n)if(Math.hypot(m.x-c.x,m.z-c.z)<=l.range&&(f.push(m),f.length>=6))break;if(!f.length){c.cd=.3;continue}let u=f[this.r(Math.min(f.length,c.cls===Ht.mage?6:3))];if(c.cls===Ht.archer){let m=f.find(g=>yi[g.k].fly);m&&this.rng()<.6&&(u=m)}let p=Math.hypot(u.x-c.x,u.z-c.z),b=c.cls===Ht.mage?19:c.cls===Ht.archer?36:26;this.queueHit(c,u,l.dmg*d,l.aoe,p/b,c.cls===Ht.mage?"m":c.cls===Ht.archer?"a":"h")}n.length&&this.loseSurvivors(n.length*(.004+.008*Math.min(1,this.alive/60))*e),this.alliesStep(i,n,e),this.enemiesStep(e),this.enemies=this.enemies.filter(c=>c.hp>0)}warriorMove(e,t,n){let i=e.post||{x:e.x,z:Mi-1.6},r=i.x,a=i.z,o=null,c=6.5;for(let f of t){if(f.z<i.z-7)break;let u=Math.hypot(f.x-i.x,f.z-i.z);u<c&&(c=u,o=f)}o&&(r=o.x,a=Math.min(i.z+.5,o.z+yi[o.k].r+.6));let l=r-e.x,h=a-e.z,d=Math.hypot(l,h);if(d>.08){let f=Math.min(d,4.2*n);e.x+=l/d*f,e.z+=h/d*f}}alliesStep(e,t,n){let i=this.t;for(let r of this.allies){if(r.until<i){r.gone=!0,this.emit({k:"allyout",a:r.id});continue}if(r.cd-=n,r.k===0){let a=null,o=9;for(let u of e){let p=Math.hypot(u.x-r.x,u.z-r.z);p<o&&(o=p,a=u)}let c=a?a.x:r.home??(r.home=r.x),l=a?a.z+yi[a.k].r+.9:Mi-2.6,h=c-r.x,d=l-r.z,f=Math.hypot(h,d);if(f>.1){let u=Math.min(f,3.6*n);r.x+=h/f*u,r.z+=d/f*u}if(r.cd<=0&&a&&o<2.8){r.cd=.85;let u=this.byId.get(r.by);for(let p of e)Math.abs(p.x-r.x)<2.4&&Math.abs(p.z-r.z)<2.6&&this.damage(p,(p.k===Mn.boss?30:24)*this.o.dmgMul,u,!1);this.shotBudget>=1&&(this.shotBudget--,this.emit({k:"shot",s:-r.id,e:a.id,c:"g",d:.1}))}}else{let a=i-r.a0;if(r.x=Math.sin(a*.7)*7,r.z=-15+Math.cos(a*.5)*9,r.cd<=0){r.cd=.45;let o=this.byId.get(r.by),c=r.x+Math.sin(a*.7+.6)*1.5,l=r.z+3;for(let h of t)Math.abs(h.x-c)<3.2&&Math.abs(h.z-l)<3.2&&this.damage(h,(h.k===Mn.boss?22:20)*this.o.dmgMul,o,!1)}}}this.allies.some(r=>r.gone)&&(this.allies=this.allies.filter(r=>!r.gone))}enemiesStep(e){let t=this.t,n=[];for(let i of this.people.values())i.on&&i.cls===Ht.warrior&&i.downT<=0&&n.push(i);for(let i of this.allies)i.k===0&&n.push(i);for(let i of this.enemies){if(i.hp<=0)continue;let r=yi[i.k];if(i.k===Mn.boss){this.bossStep(i,e);continue}let a=r.fly?Rr-1.6:Mi-.4-r.r,o=null;if(!r.fly){for(let c of n)if(Math.abs(c.x-i.x)<r.r+.75&&Math.abs(c.z-i.z)<r.r+.85){o=c;break}}if(o){t>i.atkT&&(i.atkT=t+1.1,o.uid?(o.hp-=r.dmg*5.5,o.hp<=0&&(o.hp=0,o.downT=9,this.emit({k:"down",id:o.id}))):o.hp=Math.max(0,o.hp-r.dmg*1.5));continue}if(i.z<a-.05){let c=i.speed*(t<i.slowT?.35:1),l=i.tx-i.x,h=Math.min(1,e*.6);i.x+=l*h*.5+Math.sin(t*2+i.id)*e*.4,i.z=Math.min(a,i.z+c*e);continue}t>i.atkT&&(i.atkT=t+1.3,this.wallHit(r.dmg,i))}}wallHit(e,t){if(this.barrier>=e*4){this.barrier-=e*4,this.popBudget>=1&&this.rng()<.3&&(this.popBudget--,this.emit({k:"block",x:+t.x.toFixed(1)}));return}this.barrier=0,this.loseSurvivors(e),this.popBudget>=1&&this.rng()<.5&&(this.popBudget--,this.emit({k:"wallhit",x:+t.x.toFixed(1),d:e}))}bossStep(e,t){let n=this.t;if(e.z<-9){e.z+=e.speed*t,e.x+=(0-e.x)*t;return}if(e.nextAtk||(e.nextAtk=n+3,e.atkN=0),n<e.nextAtk)return;if(e.atkN++,e.nextAtk=n+(e.bossId==="mastermind"?3.6:4.4),e.atkN%3===0){for(let c=0;c<5;c++){let l=this.spawn(c%2?Mn.wraith:Mn.imp);l.x=e.x+(this.rng()-.5)*6,l.z=e.z+1}this.emit({k:"bossatk",kind:"summon"});return}let i=this.barrier>=30;this.barrier=Math.max(0,this.barrier-30),this.loseSurvivors(i?3:7,!1);let r=[],a=this.defenders().filter(c=>c.downT<=0),o=i?0:Math.min(a.length-1,1+this.r(3));for(let c=0;c<o;c++){let l=a.splice(this.r(a.length),1)[0];l.downT=7,l.hp=0,r.push(l.id)}this.emit({k:"bossatk",kind:e.atkN%2?"beam":"slam",blocked:i,downed:r,x:+(e.x+(this.rng()-.5)*8).toFixed(1)})}botsVote(e){for(let t of this.people.values())!t.bot||!t.on||t.vote||this.rng()<e*.3&&this.t-this.phaseStart<this.o.voteSeconds*.8&&(t.vote=1+this.r(2),this.countVotes(),this.emit({k:"vote",id:t.id,v:t.vote}))}snapshot(){let e=[],t=this.defenders(),n=t;t.length>this.o.sendCap&&(n=t.slice().sort((d,f)=>(f.bot?0:1)-(d.bot?0:1)||f.lastAct-d.lastAct).slice(0,this.o.sendCap));let i=0,r=0;for(let d of t)!d.bot&&(d.runPts||0)>r&&(r=d.runPts,i=d.id);for(let d of n){let f=(d.bot?Rt.bot:0)|(this.t<d.hasteT?Rt.cmd:0)|(this.t<d.ascT?Rt.asc:0)|(d.blessed?Rt.bless:0)|(d.downT>0?Rt.down:0)|(d.id===i?Rt.crown:0)|(this.t-d.giftT<3?Rt.gift:0);e.push(d.id,Math.round(d.x*100)/100,Math.round(d.z*100)/100,d.cls|f<<Wu,Math.round(d.hp))}let a=[],o=this.enemies.filter(d=>d.hp>0),c=o.length>this.o.enemySend?o.slice().sort((d,f)=>(f.k===Mn.boss)-(d.k===Mn.boss)||f.z-d.z).slice(0,this.o.enemySend):o;for(let d of c)a.push(d.id,d.k,Math.round(d.x*100)/100,Math.round(d.z*100)/100,Math.max(1,Math.round(d.hp/d.max*100)));let l=[];for(let d of this.allies)l.push(d.id,d.k,Math.round(d.x*100)/100,Math.round(d.z*100)/100);let h=this.boss;return{tm:Math.round(this.t*1e3)/1e3,ph:this.phase,tl:Math.max(0,Math.round((this.phaseEnd-this.t)*10)/10),pd:Math.round((this.phaseEnd-this.phaseStart)*10)/10,ch:this.chapter,wv:this.wave,wi:(this.wave-1)%As+1,sv:Math.round(this.survivors),bar:Math.round(this.barrier*10)/10,hype:this.hype,vi:this.voteIdx,vc:this.voteCounts.slice(),cho:this.choices.slice(),left:this.spawnLeft+o.length,n:t.length,run:this.run,bo:h?{id:h.bossId,n:h.name,hp:Math.ceil(h.hp),max:Math.round(h.max)}:null,best:this.sessionBest,saves:this.saves,f:e,e:a,al:l}}board(e=8){let t=[];for(let n of this.people.values())!n.bot&&n.pts>0&&t.push({name:n.name,pts:Math.round(n.pts),kills:n.kills,cls:n.cls});return t.sort((n,i)=>i.pts-n.pts).slice(0,e)}};function Kl(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Ut;c.morphTargetsRelative=o;let l=0;for(let h=0;h<s.length;++h){let d=s[h],f=0,u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,d=[];for(let f=0;f<s.length;++f){let u=s[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=s[f].attributes.position.count}c.setIndex(d)}for(let h in r){let d=nm(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<d;++f){let u=[];for(let b=0;b<a[h].length;++b)u.push(a[h][b][f]);let p=nm(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function nm(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new it(a,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<t;p++){let b=h.getComponent(f,p);o.setComponent(f+d,p,b)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function qu(s,e){if(e===du)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===_a||e===Co){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===_a)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Fo(s){let e=new Map,t=new Map,n=s.clone();return im(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function im(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)im(s.children[n],e.children[n],t)}var wa=class extends Xi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $u(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new Jl(t,lt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Jl(t,lt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new df(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ss.extractUrlBase(e);a=Ss.resolveURL(l,this.path)}else a=Ss.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ua(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===cm){try{a[lt.KHR_BINARY_GLTF]=new pf(e)}catch(d){i&&i(d);return}r=JSON.parse(a[lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new yf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case lt.KHR_MATERIALS_UNLIT:a[d]=new Yu;break;case lt.KHR_DRACO_MESH_COMPRESSION:a[d]=new mf(r,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:a[d]=new gf;break;case lt.KHR_MESH_QUANTIZATION:a[d]=new bf;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Zv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Zt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ju=class{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ce(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],qn);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new yr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Vs(h),l.distance=d;break;case"spot":l=new go(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),es(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Yu=class{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return xn}extendParams(e,t,n){let i=[];e.color=new Ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],qn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(i)}},Zu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},$u=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Qe(r,r)}return Promise.all(i)}},Qu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},ef=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},tf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},nf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],qn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Bt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},sf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},rf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(r[0],r[1],r[2],qn),Promise.all(i)}},af=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},of=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(r[0],r[1],r[2],qn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Bt)),Promise.all(i)}},cf=class{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},lf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},hf=class{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},uf=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},ff=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Jl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):a.ready.then(function(){let u=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}},df=class{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Si.TRIANGLES&&l.mode!==Si.TRIANGLE_STRIP&&l.mode!==Si.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],f=l[0].count,u=[];for(let p of d){let b=new qe,m=new B,g=new In,v=new B(1,1,1),M=new _n(p.geometry,p.material,f);for(let T=0;T<f;T++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,T),c.SCALE&&v.fromBufferAttribute(c.SCALE,T),M.setMatrixAt(T,b.compose(m,g,v));let _=null;for(let T in c)if(T==="_COLOR_0"){let y=c[T];M.instanceColor=new ms(y.array,y.itemSize,y.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(_===null){let x=M.geometry;_=new Ut,_.name=x.name;for(let S in x.attributes)_.setAttribute(S,x.attributes[S]);for(let S in x.morphAttributes)_.morphAttributes[S]=x.morphAttributes[S];x.index!==null&&_.setIndex(x.index),_.morphTargetsRelative=x.morphTargetsRelative;for(let S of x.groups)_.addGroup(S.start,S.count,S.materialIndex);x.boundingBox!==null&&(_.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(_.boundingSphere=x.boundingSphere.clone()),_.drawRange.start=x.drawRange.start,_.drawRange.count=x.drawRange.count,_.userData=Object.assign({},x.userData),M.geometry=_}let y=c[T];_.setAttribute(T,new ms(y.array,y.itemSize,y.normalized))}Gt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),u.push(M)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}},cm="glTF",ko=12,sm={JSON:1313821514,BIN:5130562},pf=class{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ko),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ko,r=new DataView(e,ko),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===sm.JSON){let l=new Uint8Array(e,ko+a,o);this.content=n.decode(l)}else if(c===sm.BIN){let l=ko+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},mf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let d=_f[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=_f[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],u=Sa[f.componentType];l[d]=u.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(let p in u.attributes){let b=u.attributes[p],m=c[p];m!==void 0&&(b.normalized=m)}d(u)},o,l,qn,f)})})}},gf=class{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},bf=class{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}},Yl=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,d=(n-t)/h,f=d*d,u=f*d,p=e*l,b=p-l,m=-2*u+3*f,g=u-f,v=1-m,M=g-f+d;for(let _=0;_!==o;_++){let T=a[b+_+o],y=a[b+_+c]*h,x=a[p+_+o],S=a[p+_]*h;r[_]=v*T+M*y+m*x+g*S}return r}},$v=new In,xf=class extends Yl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return $v.fromArray(r).normalize().toArray(r),r}},Si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Sa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rm={9728:Yt,9729:mn,9984:Zc,9985:ga,9986:Tr,9987:_i},am={33071:mi,33648:ea,10497:Us},Xu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_f={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Qv={CUBICSPLINE:void 0,LINEAR:ur,STEP:hr},ju={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ey(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new xr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ji})),s.DefaultMaterial}function Cr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function es(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ty(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(f)}if(i){let f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function ny(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iy(s){let e,t=s.extensions&&s.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ku(t.attributes):e=s.indices+":"+Ku(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ku(s.targets[n]);return e}function Ku(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function vf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ry=new qe,yf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Zv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?(this.textureLoader=new fo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new xo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ua(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Cr(r,o,i),es(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Ss.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Xu[i.type],o=Sa[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new it(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Xu[i.type],l=Sa[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,b,m;if(u&&u!==d){let g=Math.floor(f/u),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,M=t.cache.get(v);M||(b=new l(o,g*u,i.count*u/h),M=new aa(b,u/h),t.cache.add(v,M)),m=new oa(M,c,f%u/h,p)}else o===null?b=new l(i.count*c):b=new l(o,f,i.count*c),m=new it(b,c,p);if(i.sparse!==void 0){let g=Xu.SCALAR,v=Sa[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,T=new v(a[1],M,i.sparse.count*g),y=new l(a[2],_,i.sparse.count*c);o!==null&&(m=new it(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,S=T.length;x<S;x++){let D=T[x];if(m.setX(D,y[x*c]),c>=2&&m.setY(D,y[x*c+1]),c>=3&&m.setZ(D,y[x*c+2]),c>=4&&m.setW(D,y[x*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=rm[f.magFilter]||mn,h.minFilter=rm[f.minFilter]||_i,h.wrapS=am[f.wrapS]||Us,h.wrapT=am[f.wrapT]||Us,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Yt&&h.minFilter!==mn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(f){return new Promise(function(u,p){t.parse(f,u,p)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){l=!0;let u=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(f){return new Promise(function(u,p){let b=u;t.isImageBitmapLoader===!0&&(b=function(m){let g=new gn(m);g.needsUpdate=!0,u(g)}),t.load(Ss.resolveURL(f,r.path),b,void 0,p)})})}let d=h.then(function(f){return l===!0&&o.revokeObjectURL(c),es(f,a),f.userData.mimeType=a.mimeType||sy(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[lt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ha,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new la,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return xr}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[lt.KHR_MATERIALS_UNLIT]){let d=i[lt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],qn),o.opacity=f[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,Bt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=hn);let h=r.alphaMode||ju.OPAQUE;if(h===ju.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ju.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==xn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Qe(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==xn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==xn){let d=r.emissiveFactor;o.emissive=new Ce().setRGB(d[0],d[1],d[2],qn)}return r.emissiveTexture!==void 0&&a!==xn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(l).then(function(){let d=new a(o);return r.name&&(d.name=r.name),es(d,r),t.associations.set(d,{materials:e}),r.extensions&&Cr(i,d,r),d})}createUniqueName(e){let t=kt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return om(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=iy(l),d=i[h];if(d)a.push(d.promise);else{let f;l.extensions&&l.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=om(new Ut,l,t),l.mode===Si.TRIANGLE_STRIP?f=f.then(u=>qu(u,Co)):l.mode===Si.TRIANGLE_FAN&&(f=f.then(u=>qu(u,_a))),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?ey(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let u=0,p=h.length;u<p;u++){let b=h[u],m=a[u],g,v=l[u];if(m.mode===Si.TRIANGLES||m.mode===Si.TRIANGLE_STRIP||m.mode===Si.TRIANGLE_FAN||m.mode===void 0){let M=r.isSkinnedMesh===!0,_=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");M&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=M&&_?new pr(b,v):new ut(b,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Si.LINES)g=new $a(b,v);else if(m.mode===Si.LINE_STRIP)g=new gr(b,v);else if(m.mode===Si.LINE_LOOP)g=new Qa(b,v);else if(m.mode===Si.POINTS)g=new gs(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&ny(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),es(g,r),m.extensions&&Cr(i,g,m),t.assignFinalMaterial(g),d.push(g)}for(let u=0,p=d.length;u<p;u++)t.associations.set(d[u],{meshes:e,primitives:u});if(d.length===1)return r.extensions&&Cr(i,d[0],r),d[0];let f=new zt;r.extensions&&Cr(i,f,r),t.associations.set(f,{meshes:e});for(let u=0,p=d.length;u<p;u++)f.add(d[u]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new pn(Ul.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new vr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),es(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let d=a[l];if(d){o.push(d);let f=new qe;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new mr(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){let u=i.channels[d],p=i.samplers[u.sampler],b=u.target,m=b.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",v)),l.push(p),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let f=d[0],u=d[1],p=d[2],b=d[3],m=d[4],g=[];for(let M=0,_=f.length;M<_;M++){let T=f[M],y=u[M],x=p[M],S=b[M],D=m[M];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let L=n._createAnimationTracks(T,y,x,S,D);if(L)for(let F=0;F<L.length;F++)g.push(L[F])}let v=new _r(r,void 0,g);return es(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],d=l[1],f=l[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,ry)});for(let u=0,p=d.length;u<p;u++)h.add(d[u]);if(h.userData.pivot!==void 0&&d.length>0){let u=h.userData.pivot,p=d[0];h.pivot=new B().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new ca:l.length>1?h=new zt:l.length===1?h=l[0]:h=new Gt,h!==l[0])for(let d=0,f=l.length;d<f;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),es(h,r),r.extensions&&Cr(n,h,r),r.matrix!==void 0){let d=new qe;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new zt;n.name&&(r.name=i.createUniqueName(n.name)),es(r,n),n.extensions&&Cr(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++){let f=c[h];f.parent!==null?r.add(Fo(f)):r.add(f)}let l=h=>{let d=new Map;for(let[f,u]of i.associations)(f instanceof zn||f instanceof gn)&&d.set(f,u);return h.traverse(f=>{let u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}Xs[r.path]===Xs.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Xs[r.path]){case Xs.weights:h=vs;break;case Xs.rotation:h=ys;break;case Xs.translation:case Xs.scale:h=Gs;break;default:n.itemSize===1?h=vs:h=Gs;break}let d=i.interpolation!==void 0?Qv[i.interpolation]:ur,f=this._getArrayFromAccessor(n);for(let u=0,p=c.length;u<p;u++){let b=new h(c[u]+"."+Xs[r.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=vf(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ys?xf:Yl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ay(s,e,t){let n=e.attributes,i=new ri;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new B(c[0],c[1],c[2]),new B(l[0],l[1],l[2])),o.normalized){let h=vf(Sa[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new B,c=new B;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let f=t.json.accessors[d.POSITION],u=f.min,p=f.max;if(u!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),f.normalized){let b=vf(Sa[f.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new bn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function om(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=_f[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return ct.workingColorSpace!==qn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),es(s,e),ay(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ty(s,e.targets,t):s})}var Zl=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(g){r=g.instance,r.exports.__wasm_call_ctors()});function o(g){for(var v=new Uint8Array(g.length),M=0;M<g.length;++M){var _=g.charCodeAt(M);v[M]=_>96?_-97:_>64?_-39:_+4}for(var T=0,M=0;M<g.length;++M)v[T++]=v[M]<60?n[v[M]]:(v[M]-60)*64+v[++M];return v.buffer.slice(0,T)}function c(g,v,M,_,T,y,x){var S=g.exports.sbrk,D=_+3&-4,L=S(D*T),F=S(y.length),C=new Uint8Array(g.exports.memory.buffer);C.set(y,F);var V=v(L,_,T,F,y.length);if(V==0&&x&&x(L,D,T),M.set(C.subarray(L,L+_*T)),S(L-S(0)),V!=0)throw new Error("Malformed buffer data: "+V)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],f=0;function u(g){var v={object:new Worker(g),pending:0,requests:{}};return v.object.onmessage=function(M){var _=M.data;v.pending-=_.count,v.requests[_.id][_.action](_.value),delete v.requests[_.id]},v}function p(g){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),M=new Blob([v],{type:"text/javascript"}),_=URL.createObjectURL(M),T=d.length;T<g;++T)d[T]=u(_);for(var T=g;T<d.length;++T)d[T].object.postMessage({});d.length=g,URL.revokeObjectURL(_)}function b(g,v,M,_,T){for(var y=d[0],x=1;x<d.length;++x)d[x].pending<y.pending&&(y=d[x]);return new Promise(function(S,D){var L=new Uint8Array(M),F=++f;y.pending+=g,y.requests[F]={resolve:S,reject:D},y.object.postMessage({id:F,count:g,size:v,source:L,mode:_,filter:T},[L.buffer])})}function m(g){var v=g.data;self.ready.then(function(M){if(!v.id)return self.close();try{var _=new Uint8Array(v.count*v.size);c(M,M.exports[v.mode],_,v.count,v.size,v.source,M.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:_},[_.buffer])}catch(T){self.postMessage({id:v.id,count:v.count,action:"reject",value:T})}})}return{ready:a,supported:!0,useWorkers:function(g){p(g)},decodeVertexBuffer:function(g,v,M,_,T){c(r,r.exports.meshopt_decodeVertexBuffer,g,v,M,_,r.exports[l[T]])},decodeIndexBuffer:function(g,v,M,_){c(r,r.exports.meshopt_decodeIndexBuffer,g,v,M,_)},decodeIndexSequence:function(g,v,M,_){c(r,r.exports.meshopt_decodeIndexSequence,g,v,M,_)},decodeGltfBuffer:function(g,v,M,_,T,y){c(r,r.exports[h[T]],g,v,M,_,r.exports[l[y]])},decodeGltfBufferAsync:function(g,v,M,_,T){return d.length>0?b(g,v,M,h[_],l[T]):a.then(function(){var y=new Uint8Array(g*v);return c(r,r.exports[h[_]],y,g,v,M,r.exports[l[T]]),y})}}})();var oy=[it.prototype.getX,it.prototype.getY,it.prototype.getZ,it.prototype.getW],lm={idle:["Idle",1,!0],combat:["Idle_Combat",1,!0],run:["Running_A",1,!0],walk:["Walking_A",1,!0],attack:["1H_Melee_Attack_Chop",1.25,!1],slash:["1H_Melee_Attack_Slice_Horizontal",1.25,!1],spin:["2H_Melee_Attack_Spin",1.3,!1],shoot:["1H_Ranged_Shoot",1.2,!1],cast:["Spellcast_Shoot",1.2,!1],summon:["Spellcast_Summon",1,!1],block:["Block",1.2,!1],hit:["Hit_A",1.3,!1],die:["Death_A",1,!1],dead:["Death_A_Pose",1,!0],cheer:["Cheer",1,!0],dash:["Dodge_Forward",1.3,!1],jump:["Jump_Full_Short",1,!1],rise:["Lie_StandUp",1.4,!1],taunt:["Taunt",1,!1],spawn:["Spawn_Ground_Skeletons",1.2,!1],use:["Interact",1.2,!1]},cy={Knight:["1H_Sword","Badge_Shield","Knight_Helmet","Knight_Cape"],Barbarian:["1H_Axe","Barbarian_Round_Shield","Barbarian_Hat","Barbarian_Cape"],Mage:["2H_Staff","Mage_Hat","Mage_Cape"],Rogue:["1H_Crossbow","Knife_Offhand","Rogue_Cape"],Rogue_Hooded:["Knife","Knife_Offhand","Rogue_Cape"],Skeleton_Minion:[],Skeleton_Warrior:["Skeleton_Warrior_Helmet"],Skeleton_Rogue:["Skeleton_Rogue_Hood","Skeleton_Rogue_Cape"],Skeleton_Mage:["Skeleton_Mage_Hat"]},ly=new wa().setMeshoptDecoder(Zl),hm=s=>new Promise((e,t)=>ly.load(s,e,void 0,t));function hy(s,e){if(s&&/glow/i.test(s.name||""))return new xn({color:8057087,fog:!0});let t=e||s.map;return t&&(t.colorSpace=Bt,t.anisotropy=2),new zs({map:t||null,color:16777215})}function um(s,e,t=cy[e],n=!0){let i=s.scene;i.updateMatrixWorld(!0);let r=new Set(t||[]),a=[],o=[];if(i.traverse(y=>{y.isSkinnedMesh?a.push(y):y.isMesh&&o.push(y)}),!a.length)throw new Error("no skinned mesh in "+e);let c=a[0],l=c.skeleton,h=l.bones,d=new Map(h.map((y,x)=>[y,x])),f=c.bindMatrixInverse.clone(),u=[],p=y=>{let x=u.findIndex(S=>S.src===y);return x<0&&(u.push({src:y,mat:hy(y)}),x=u.length-1),x},b=[],m=y=>{y=y.index?y.toNonIndexed():y.clone();for(let x of Object.keys(y.attributes))["position","normal","uv","skinIndex","skinWeight"].includes(x)||y.deleteAttribute(x);for(let x of Object.keys(y.attributes)){let S=y.attributes[x],D=S.itemSize,L=x==="skinIndex"?new Uint16Array(S.count*D):new Float32Array(S.count*D);for(let F=0;F<S.count;F++)for(let C=0;C<D;C++)L[F*D+C]=x==="skinIndex"?S.getComponent(F,C):oy[C].call(S,F);y.setAttribute(x,new it(L,D))}return y.attributes.normal||y.computeVertexNormals(),y.attributes.uv||y.setAttribute("uv",new it(new Float32Array(y.attributes.position.count*2),2)),y};for(let y of a){let x=m(y.geometry);if(y!==c){let S=y.skeleton.bones,D=S.findIndex(C=>d.has(C)),L=d.get(S[D]),F=new qe().copy(f).multiply(new qe().copy(l.boneInverses[L]).invert()).multiply(y.skeleton.boneInverses[D]).multiply(y.bindMatrix);x.applyMatrix4(F)}if(y.skeleton!==l){let S=y.skeleton.bones.map(L=>d.get(L)??0),D=x.attributes.skinIndex;for(let L=0;L<D.count;L++)for(let F=0;F<4;F++)D.setComponent(L,F,S[D.getComponent(L,F)])}b.push({g:x,m:p(y.material)})}for(let y of o){if(!r.has(y.name)&&!r.has(y.parent?.name))continue;let x=y.parent;for(;x&&!x.isBone;)x=x.parent;if(!x)continue;let S=d.get(x);if(S===void 0)continue;let D=new qe;{let J=y;for(D.copy(y.matrix),J=y.parent;J&&J!==x;)D.premultiply(J.matrix),J=J.parent}let L=new qe().copy(f).multiply(new qe().copy(l.boneInverses[S]).invert()).multiply(D),F=m(y.geometry);F.applyMatrix4(L);let C=F.attributes.position.count,V=new Uint16Array(C*4),N=new Float32Array(C*4);for(let J=0;J<C;J++)V[J*4]=S,N[J*4]=1;F.setAttribute("skinIndex",new it(V,4)),F.setAttribute("skinWeight",new it(N,4)),b.push({g:F,m:p(y.material)})}b.sort((y,x)=>y.m-x.m);let g=Kl(b.map(y=>y.g),u.length>1);if(u.length>1){let y=0;g.clearGroups();for(let x=0;x<u.length;x++){let S=0;for(let D of b)D.m===x&&(S+=D.g.attributes.position.count);S&&g.addGroup(y,S,x),y+=S}}for(let y of b)y.g.dispose();g.computeBoundingBox(),g.boundingSphere=new bn(new B(0,1.1,0),1.9);let v=new zt;v.name=e;let M=(()=>{let y=h[0];for(;y.parent&&y.parent.isBone;)y=y.parent;return y})(),_=[];M.traverse(y=>{y.isMesh&&_.push(y)});for(let y of _)y.parent.remove(y),n&&y.geometry.dispose();v.add(M);let T=new pr(g,u.length>1?u.map(y=>y.mat):u[0].mat);return T.frustumCulled=!0,v.add(T),v.updateMatrixWorld(!0),T.bind(new mr(h,l.boneInverses.map(y=>y.clone())),c.bindMatrix.clone()),{tpl:v,geo:g,mats:u.map(y=>y.mat),height:2.1}}async function fm({base:s="/models",names:e=[],loot:t=null,onProgress:n}={}){let i={templates:new Map,clips:new Map,variants:new Map,pools:new Map,disposables:[]},[r,...a]=await Promise.all([hm(`${s}/anims.glb`),...e.map(o=>hm(`${s}/chars/${o}.glb`))]);for(let o of r.animations)i.clips.set(o.name,o);return e.forEach((o,c)=>{if(t&&t[o]){let h=um({scene:Fo(a[c].scene)},o+"@loot",t[o],!1);i.templates.set(o+"@loot",h),i.disposables.push(h.geo,...h.mats)}let l=um(a[c],o);i.templates.set(o,l),i.disposables.push(l.geo,...l.mats);for(let h of l.mats)h.map&&i.disposables.push(h.map);n?.(o)}),i.material=(o,c=null,l=.32)=>{let h=i.templates.get(o);if(c===null)return h.mats.length>1?h.mats:h.mats[0];let d=o+":"+c+":"+l,f=i.variants.get(d);if(!f){if(typeof c=="string"&&c.startsWith("ghost")){let u=c==="ghost-boss"?13215999:12113151;f=h.mats.map(p=>{let b=new xn({map:p.map||null,color:u,transparent:!0,opacity:.55,depthWrite:!1,blending:jn,fog:!0});return i.disposables.push(b),b})}else{let u=new Ce(c),p=new Ce(1,1,1).lerp(u,l);f=h.mats.map(b=>{if(b.isMeshBasicMaterial)return b;let m=b.clone();return m.color.copy(p),i.disposables.push(m),m})}if(f=f.length>1?f:f[0],i.variants.set(d,f),i.variants.size>160){let u=i.variants.keys().next().value;i.variants.delete(u)}}return f},i.actor=(o,c=null)=>{let l=i.pools.get(o)||[];i.pools.set(o,l);let h=l.pop();if(!h){let d=i.templates.get(o),f=Fo(d.tpl),u=null;f.traverse(b=>{b.isSkinnedMesh&&(u=b)});let p=new _o(f);h={name:o,obj:f,mesh:u,mixer:p,actions:new Map,state:"",base:"idle",until:0,tint:void 0,acc:0,flashT:-9,hand:null},f.traverse(b=>{b.isBone&&/handslot.?l/i.test(b.name)&&(h.hand=b)}),h.play=(b,m,{fade:g=.15,speed:v=1}={})=>uy(i,h,b,m,g,v)}return h.tint!==c&&(h.mesh.material=i.material(o,c),h.tint=c),h.obj.visible=!0,h.state="",h.base="idle",h.until=0,h.mixer.stopAllAction(),h.play("idle",0,{fade:0}),h},i.bake=(o,c,l=4,{from:h=0,to:d=1}={})=>{let f=`${o}|${c}|${l}|${h}|${d}`;if(i.baked=i.baked||new Map,i.baked.has(f))return i.baked.get(f);let u=i.actor(o),p=Mf(i,u,c);u.mixer.stopAllAction(),p.reset(),p.setLoop(Ro,1/0),p.play();let b=p.getClip().duration,m=u.mesh.geometry,g=m.attributes.position.count,v=new B,M=[];for(let _=0;_<l;_++){u.mixer.setTime(b*(h+(d-h)*(_/l))),u.obj.updateMatrixWorld(!0),u.mesh.skeleton.update();let T=new Float32Array(g*3);for(let x=0;x<g;x++)u.mesh.getVertexPosition(x,v),v.applyMatrix4(u.mesh.matrix),T[x*3]=v.x,T[x*3+1]=v.y,T[x*3+2]=v.z;let y=new Ut;y.setAttribute("position",new it(T,3)),y.setAttribute("uv",m.attributes.uv),m.index&&y.setIndex(m.index);for(let x of m.groups)y.addGroup(x.start,x.count,x.materialIndex);y.computeVertexNormals(),y.boundingSphere=new bn(new B(0,1,0),2.2),i.disposables.push(y),M.push(y)}return p.stop(),i.release(u),i.baked.set(f,M),M},i.release=o=>{o.obj.visible=!1,o.obj.parent?.remove(o.obj),o.mixer.stopAllAction(),(i.pools.get(o.name)||[]).push(o)},i.dispose=()=>{for(let o of i.disposables)try{o.dispose()}catch{}i.pools.clear(),i.variants.clear()},i}function Mf(s,e,t){let n=e.actions.get(t);if(!n){let[i,r,a]=lm[t]||lm.idle,o=s.clips.get(i)||s.clips.get("Idle");n=e.mixer.clipAction(o),n.timeScaleBase=r,n.loopMode=a,a?n.setLoop(Ro,1/0):(n.setLoop(Nl,1),n.clampWhenFinished=!0),e.actions.set(t,n)}return n}function uy(s,e,t,n,i,r){let a=Mf(s,e,t);if(a.loopMode){if(e.base=t,n<e.until||e.state===t)return}else e.until=n+a.getClip().duration/(a.timeScaleBase*r)*.92;let o=e.actions.get(e.state);a.reset(),a.timeScale=a.timeScaleBase*r,a.enabled=!0,a.setEffectiveWeight(1),o&&o!==a&&i>0?a.crossFadeFrom(o,i,!1):o&&o!==a&&o.stop(),a.play(),e.state=t}function $l(s,e,t,n){if(e.state!==e.base&&n>=e.until&&e.base){let i=Mf(s,e,e.base),r=e.actions.get(e.state);i.reset(),i.timeScale=i.timeScaleBase,i.enabled=!0,i.setEffectiveWeight(1),r&&i.crossFadeFrom(r,.18,!1),i.play(),e.state=e.base}e.mixer.update(t)}var fy=[it.prototype.getX,it.prototype.getY,it.prototype.getZ,it.prototype.getW],dy=new wa().setMeshoptDecoder(Zl);async function dm(s){let e=await new Promise((f,u)=>dy.load(s,f,void 0,u)),t=e.scene;t.updateMatrixWorld(!0);let n=new Map,i=new Map,r=new Set,a=[],o=null;for(let f of t.children){let u=[],p=new qe().copy(f.parent.matrixWorld).invert();if(f.traverse(m=>{if(!m.isMesh)return;m.material.map&&(o||(o=m.material.map),i.set(f.name,m.material.map),r.add(m.material.map));let g=m.geometry.index?m.geometry.toNonIndexed():m.geometry.clone();for(let v of Object.keys(g.attributes))["position","normal","uv"].includes(v)||g.deleteAttribute(v);for(let v of["position","normal","uv"]){let M=g.attributes[v];if(!M||M.array instanceof Float32Array&&!M.normalized)continue;let _=new Float32Array(M.count*M.itemSize);for(let T=0;T<M.count;T++)for(let y=0;y<M.itemSize;y++)_[T*M.itemSize+y]=fy[y].call(M,T);g.setAttribute(v,new it(_,M.itemSize))}g.attributes.normal||g.computeVertexNormals(),g.attributes.uv||g.setAttribute("uv",new it(new Float32Array(g.attributes.position.count*2),2)),g.applyMatrix4(new qe().multiplyMatrices(p,m.matrixWorld)),u.push(g)}),!u.length)continue;let b=u.length>1?Kl(u):u[0];u.length>1&&u.forEach(m=>m.dispose()),b.computeBoundingSphere(),n.set(f.name,b),a.push(b)}let c=new Map;for(let f of r){f.colorSpace=Bt,f.anisotropy=4,a.push(f);let u=new zs({map:f});c.set(f,u),a.push(u)}e.scene.traverse(f=>{f.isMesh&&f.geometry.dispose()});let l=c.get(o)||new zs;o||a.push(l);let h=f=>c.get(i.get(f))||l;return{geos:n,mat:l,matOf:h,has:f=>n.has(f),instanced(f,u,{material:p=h(f)}={}){let b=n.get(f);if(!b||!u.length)return null;let m=new _n(b,p,u.length),g=new Gt,v=0;return u.forEach((M,_)=>{g.position.set(M.x,M.y||0,M.z),g.rotation.set(M.rx||0,M.ry||0,M.rz||0),g.scale.set((M.s||1)*(M.sx||1),(M.s||1)*(M.sy||1),(M.s||1)*(M.sz||1)),g.updateMatrix(),m.setMatrixAt(_,g.matrix),v=Math.max(v,Math.hypot(M.x,M.z)+(M.s||1)*3)}),m.instanceMatrix.needsUpdate=!0,m.geometry.boundingSphere,m.boundingSphere=new bn(new B,v),m.frustumCulled=!1,m},dispose(){for(let f of a)try{f.dispose()}catch{}}}}var py=["Mage","Barbarian","Rogue","Knight"],my=["cast","slash","shoot","summon"],pm=.74,ki=Math.PI*2,mm=[16767416,15843471,14262374,11037509,8014380,16769999],Ql=$i.map(s=>s.color),Ta={m:[12611839,16742970],a:[8384767,16777215],h:[8257448,16777215],v:[16765773,16739029],g:[16769152,16777215],w:[16777215,16747114]},Vt=Mi,js=6.2,Aa=7.5;function gm(s,e={}){let t=new Gl({canvas:s,antialias:!!e.aa,alpha:!1,depth:!0,stencil:!1,powerPreference:"default",preserveDrawingBuffer:!!e.preserve,failIfMajorPerformanceCaveat:!1});if(!t.getContext())throw new Error("no webgl");t.outputColorSpace=Bt,t.toneMapping=yo,t.toneMappingExposure=1.15,t.shadowMap.enabled=!1;let n=new Ja,i=new Ce(1838896);n.background=i.clone(),n.fog=new Ka(1838896,34,95);let r=new pn(50,9/16,.5,260),a=[],o=E=>(a.push(E),E),c=new po(9412863,2757670,1.05);n.add(c);let l=new bo(6965898,.35);n.add(l);let h=new yr(12109055,.9);h.position.set(-20,30,10),n.add(h);let d=new Vs(11550975,60,60,1.4);d.position.set(0,6,nn+4),n.add(d);let f=null,u=null,p=!1,b=null,m=Promise.all([dm(e.envUrl||"/models/env-siege.glb"),fm({names:["Mage","Barbarian","Rogue","Knight","Rogue_Hooded","Skeleton_Minion","Skeleton_Warrior","Skeleton_Mage"]})]).then(([E,P])=>{if(p){E.dispose(),P.dispose();return}u=E,f=P,En()}).catch(E=>{throw b=E,E});m.catch(()=>{});let g=new Vs(16752720,14,22,1.6);g.position.set(0,5,2),n.add(g);let v=o(new Os(new Uint8Array([70,160,255]),3,1,xa));v.minFilter=v.magFilter=Yt,v.needsUpdate=!0;let M=(E,P={})=>o(new lo({color:E,gradientMap:v,...P})),_=(E,P={})=>o(new xn({color:E,...P})),T=11,y=()=>(T=T*16807%2147483647,(T-1)/2147483646);function x(E,P,R,{repeat:H=null}={}){let me=document.createElement("canvas");me.width=E,me.height=P,R(me.getContext("2d"),E,P);let ce=o(new to(me));return ce.colorSpace=Bt,ce.anisotropy=2,H&&(ce.wrapS=ce.wrapT=1e3,ce.repeat.set(H[0],H[1])),ce}let S=x(256,256,(E,P,R)=>{E.fillStyle="#4c4658",E.fillRect(0,0,P,R);for(let H=0;H<6;H++)for(let me=-1;me<4;me++){let ce=R/6,de=P/3,re=(me+H%2*.5)*de,j=H*ce;E.fillStyle=`hsl(${255+y()*25}, ${7+y()*8}%, ${30+y()*16}%)`,E.fillRect(re+3,j+3,de-6,ce-6),E.fillStyle="rgba(255,255,255,0.06)",E.fillRect(re+3,j+3,de-6,5)}E.strokeStyle="rgba(10,0,20,0.5)",E.lineWidth=2;for(let H=0;H<5;H++){E.beginPath();let me=y()*P,ce=y()*R;E.moveTo(me,ce);for(let de=0;de<4;de++)me+=(y()-.5)*50,ce+=y()*40,E.lineTo(me,ce);E.stroke()}},{repeat:[6,1]}),D=x(256,256,(E,P,R)=>{E.fillStyle="#2a2232",E.fillRect(0,0,P,R);for(let H=0;H<900;H++)E.fillStyle=`rgba(${y()<.5?"255,255,255":"0,0,0"},${.03+y()*.06})`,E.fillRect(y()*P,y()*R,2+y()*6,2+y()*6);E.strokeStyle="rgba(180,60,255,0.28)",E.lineWidth=2.2;for(let H=0;H<7;H++){E.beginPath();let me=y()*P,ce=y()*R;E.moveTo(me,ce);for(let de=0;de<6;de++)me+=(y()-.5)*60,ce+=(y()-.5)*60,E.lineTo(me,ce);E.stroke()}},{repeat:[7,9]}),L=x(128,256,(E,P,R)=>{E.fillStyle="#3a3448",E.fillRect(0,0,P,R);for(let H=10;H<R-10;H+=26)for(let me=10;me<P-10;me+=28){let ce=y();E.fillStyle=ce<.12?"#ffb04a":ce<.2?"#b060ff":"#14101c",E.fillRect(me,H,14,16)}E.fillStyle="rgba(0,0,0,0.25)",E.fillRect(0,0,P,6)}),F=x(64,64,(E,P)=>{let R=E.createRadialGradient(P/2,P/2,0,P/2,P/2,P/2);R.addColorStop(0,"rgba(0,0,0,0.55)"),R.addColorStop(1,"rgba(0,0,0,0)"),E.fillStyle=R,E.fillRect(0,0,P,P)}),C={box:o(new xs(1,1,1)),sph:o(new oi(1,14,10)),sphLo:o(new oi(1,8,6)),cone:o(new Ii(1,1,7)),cyl:o(new xi(1,1,1,10)),plane:o(new ai(1,1)),oct:o(new oo(1,0)),ico:o(new ao(1,0))},V=new ut(o(new oi(200,24,14)),o(new Nn({side:Fn,depthWrite:!1,fog:!1,uniforms:{end:{value:0},dawn:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform float end; uniform float dawn;
      void main(){ float h = clamp(vP.y, -0.2, 1.0); float rift = pow(max(0.0, dot(normalize(vec3(vP.x, vP.y*1.6, vP.z)), vec3(0.0, 0.12, -1.0))), 6.0);
        vec3 top = vec3(0.03, 0.02, 0.09), hor = vec3(0.22, 0.07, 0.24);
        vec3 c = mix(hor, top, smoothstep(-0.05, 0.55, h)) + vec3(0.45, 0.1, 0.5) * rift * 0.4;
        vec3 dc = mix(vec3(1.0, 0.62, 0.38), vec3(0.35, 0.55, 0.95), smoothstep(-0.05, 0.6, h));
        c = mix(c, dc, dawn); c = mix(c, vec3(0.35, 0.02, 0.04) * (0.6 + rift), end);
        gl_FragColor = vec4(c, 1.0); }`})));V.renderOrder=-10,n.add(V);let N=new ut(C.plane,_(16051455,{fog:!1,transparent:!0,map:x(128,128,(E,P)=>{let R=E.createRadialGradient(P/2,P/2,P*.2,P/2,P/2,P/2);R.addColorStop(0,"#fff8f0"),R.addColorStop(.42,"#efe2ff"),R.addColorStop(.47,"rgba(200,170,255,0.5)"),R.addColorStop(1,"rgba(120,80,200,0)"),E.fillStyle=R,E.fillRect(0,0,P,P),E.fillStyle="rgba(160,140,200,0.35)";for(let[H,me,ce]of[[52,50,9],[74,70,6],[60,78,5]])E.beginPath(),E.arc(H,me,ce,0,ki),E.fill()})}));N.position.set(-34,46,-120),N.scale.set(30,30,1),N.lookAt(0,8,20),n.add(N);let J=o(new Ut);{let P=new Float32Array(780);for(let R=0;R<260;R++){let H=y()*ki,me=.12+y()*1.3;P.set([Math.cos(H)*Math.cos(me)*180,Math.sin(me)*180,Math.sin(H)*Math.cos(me)*180-20],R*3)}J.setAttribute("position",new it(P,3))}let te=new gs(J,o(new Nn({transparent:!0,depthWrite:!1,fog:!1,uniforms:{time:{value:0},op:{value:1}},vertexShader:"uniform float time; varying float vA; void main(){ vA = 0.45 + 0.55 * sin(time * 2.0 + position.x * 0.7 + position.z); gl_PointSize = 2.2; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform float op; varying float vA; void main(){ gl_FragColor = vec4(vec3(1.0, 0.95, 1.0) * vA * op, 1.0); }"})));te.renderOrder=-9,n.add(te);let z=new ut(o(new ai(140,160).rotateX(-Math.PI/2)),M(9075864,{map:D}));z.position.set(0,0,-30),n.add(z);let le=new ut(o(new ai(9,44).rotateX(-Math.PI/2)),M(5917798,{transparent:!0,opacity:.5}));le.position.set(0,.02,-18),n.add(le);let Y=46,Q=new _n(C.box,M(16777215,{map:L}),Y);Q.frustumCulled=!1;let he=new _n(C.cone,M(2761268),Y);he.frustumCulled=!1;let Ue=new _n(C.ico,M(5918820),70);Ue.frustumCulled=!1;let Ye=new qe,$=new B,Me=new In,De=new bi,Be=new B,Re=new Ce,je=(E,P,R,H,me,ce,de,re,j=0,Ge=0,bt=0,Jt=null)=>{E.setMatrixAt(P,Ye.compose($.set(R,H,me),Me.setFromEuler(De.set(j,Ge,bt)),Be.set(ce,de,re))),Jt!==null&&E.setColorAt(P,Re.setHex(Jt))};{let E=0,P=0;for(let R of[-1,1])for(let H=0;H<Y/2;H++){let me=H%3,ce=-48+Math.floor(H/3)*6.6+y()*2,de=R*(10.5+me*5.5+y()*2.5),re=3+y()*2.6,j=3+y()*2.6,Ge=3.5+y()*(me===0?7:13),bt=y()<.35,Jt=bt?(y()-.5)*.18:0;if(je(Q,E,de,Ge/2,ce,re,Ge,j,Jt*.5,y()*.3,Jt,y()<.5?10128560:8287380),!bt&&y()<.45?je(he,E,de,Ge+1,ce,re*.75,2,j*.75,0,Math.PI/4,0):je(he,E,0,-50,0,.01,.01,.01),E++,P<70&&bt)for(let rn=0;rn<3&&P<70;rn++)je(Ue,P++,de-R*(re*.6+y()*2),.3,ce+(y()-.5)*4,.5+y()*.9,.4+y()*.7,.5+y()*.9,y(),y()*3,y())}for(;P<70;){let R=y()<.5?-1:1;je(Ue,P++,R*(6.5+y()*3),.25,-40+y()*38,.3+y()*.7,.3+y()*.5,.3+y()*.7,y(),y()*3,y())}Q.count=E,he.count=E}n.add(Q,he,Ue);let Dt=new zt;n.add(Dt);let Xe=M(13155544,{map:S}),xt=new ut(C.box,Xe);xt.scale.set(22,kn,js-Vt),xt.position.set(0,kn/2,(Vt+js)/2),Dt.add(xt);let yt=new ut(C.box,M(6971e3));yt.scale.set(22,.12,js-Vt-.3),yt.position.set(0,kn+.02,(Vt+js)/2+.1),Dt.add(yt);let st=new _n(C.box,M(8682134,{map:S}),24);st.frustumCulled=!1;for(let E=0;E<24;E++)je(st,E,-10.6+E*.92,kn+.42,Vt+.22,.56,.84,.44);Dt.add(st);let $t=new ut(C.box,M(3812424));$t.scale.set(3.2,2.1,.3),$t.position.set(0,1.05,Vt-.05),Dt.add($t);let Wt=new ut(C.plane,_(11555071,{transparent:!0,opacity:.7,blending:jn,depthWrite:!1,map:x(128,96,(E,P,R)=>{E.strokeStyle="#fff",E.lineWidth=5,E.beginPath(),E.arc(P/2,R*.62,R*.32,0,ki),E.stroke(),E.beginPath();for(let H=0;H<6;H++){let me=H/6*ki;E.moveTo(P/2,R*.62),E.lineTo(P/2+Math.cos(me)*R*.3,R*.62+Math.sin(me)*R*.3)}E.stroke()})}));Wt.scale.set(2.8,2,1),Wt.position.set(0,1.05,Vt-.22),Dt.add(Wt);let Tn=[];for(let E of[-1,1]){let P=new zt;P.position.set(E*11.6,0,(Vt+js)/2);let R=new ut(C.cyl,Xe);R.scale.set(1.9,5.6,1.9),R.position.y=2.8,P.add(R);let H=new ut(C.cyl,M(11839688));H.scale.set(2.2,.6,2.2),H.position.y=5.9,P.add(H);let me=new ut(C.cone,M(5909098));me.scale.set(2.5,3.2,2.5),me.position.y=7.8,P.add(me);let ce=new ut(C.plane,_(16761402,{side:hn}));ce.scale.set(1.3,.8,1),ce.position.set(.7,10.1,0),P.add(ce);let de=new ut(C.cyl,M(3812424));de.scale.set(.06,1.8,.06),de.position.y=10,P.add(de),Dt.add(P),Tn.push({t:P,flag:ce})}let Mt=new zt;Mt.position.set(0,0,30);{let E=new ut(C.box,Xe);E.scale.set(9,7,5),E.position.y=3.5,Mt.add(E);let P=new ut(C.cone,M(5909098));P.scale.set(5,4,5),P.rotation.y=Math.PI/4,P.position.y=9,Mt.add(P);for(let R of[-1,1]){let H=new ut(C.cyl,Xe);H.scale.set(1.4,10,1.4),H.position.set(R*4.6,5,0),Mt.add(H);let me=new ut(C.cone,M(5909098));me.scale.set(1.8,3,1.8),me.position.set(R*4.6,11.5,0),Mt.add(me)}}n.add(Mt);let Vn=[-9.6,-6.2,-2.4,2.4,6.2,9.6],jt=new _n(C.cyl,M(3810328),Vn.length);jt.frustumCulled=!1,Vn.forEach((E,P)=>je(jt,P,E,kn+.6,Vt+.15,.07,1.2,.07)),n.add(jt);let Ln=o(new Nn({transparent:!0,depthWrite:!1,blending:jn,side:hn,fog:!1,uniforms:{time:{value:0},power:{value:1},hue:{value:0}},vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vU; uniform float time; uniform float power; uniform float hue;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
      void main(){ vec2 p = (vU - 0.5) * vec2(1.0, 1.25); float r = length(p) * 2.0; float a = atan(p.y, p.x);
        float sw = n(vec2(a * 2.0 + r * 4.0 - time * 1.4, r * 3.0 - time * 0.6)) * 0.7 + n(vec2(a * 5.0 - time * 2.0, r * 8.0)) * 0.3;
        float edge = smoothstep(1.0, 0.82, r) * smoothstep(0.0, 0.5, r + sw * 0.4);
        float core = smoothstep(0.55, 0.0, r);
        vec3 purple = vec3(0.62, 0.18, 1.0), red = vec3(1.0, 0.12, 0.28), white = vec3(1.0, 0.85, 1.0);
        vec3 c = mix(purple, red, clamp(sw * 1.3 - 0.2 + hue, 0.0, 1.0)) * (0.55 + sw * 0.9) * edge;
        c += white * pow(smoothstep(0.96, 0.84, r) * smoothstep(0.7, 0.86, r), 2.0) * 0.6;
        c = mix(c, vec3(0.05, 0.0, 0.08), core * 0.75) + purple * core * sw * 0.35;
        gl_FragColor = vec4(c * power, 1.0); }`})),Dn=new ut(o(new ai(13,16)),Ln);Dn.position.set(0,Aa,nn-1),n.add(Dn);let an=new ut(o(new br(1,.05,6,48)),_(13664511,{transparent:!0,opacity:.8,blending:jn,depthWrite:!1,fog:!1}));an.scale.set(6.2,7.8,6),an.position.copy(Dn.position),an.position.z+=.2,n.add(an);let G=new ut(o(new so(1,40).rotateX(-Math.PI/2)),_(10105087,{transparent:!0,opacity:.5,blending:jn,depthWrite:!1}));G.scale.set(9,1,4),G.position.set(0,.04,nn+1.5),n.add(G);let Un=16,Ct=new _n(C.oct,M(3807824,{emissive:8003776}),Un);Ct.frustumCulled=!1,n.add(Ct);let Tt=o(new Nn({transparent:!0,depthWrite:!1,blending:jn,side:hn,uniforms:{time:{value:0},a:{value:0},hit:{value:0},col:{value:new Ce(5949695)}},vertexShader:"varying vec3 vN; varying vec3 vV; varying vec3 vP; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); vP = position; gl_Position = projectionMatrix * mv; }",fragmentShader:`varying vec3 vN; varying vec3 vV; varying vec3 vP; uniform float time; uniform float a; uniform float hit; uniform vec3 col;
      void main(){ float f = 1.0 - abs(dot(vN, vV)); vec2 g = abs(fract(vec2(atan(vP.x, vP.z) * 5.0, vP.y * 6.0)) - 0.5);
        float hex = smoothstep(0.42, 0.5, max(g.x, g.y)); float band = 0.5 + 0.5 * sin(vP.y * 18.0 - time * 3.0);
        float k = pow(f, 2.4) * 0.6 + hex * 0.2 + band * 0.05; gl_FragColor = vec4(mix(col, vec3(1.0), hit * 0.6) * k * a, 1.0); }`})),we=new ut(o(new xi(1,1,1,36,1,!0,Math.PI-.95,1.9).translate(0,.5,0)),Tt);we.scale.set(14,7,14),we.position.set(0,0,Vt+13.2),we.renderOrder=8,n.add(we);let qt=e.maxChars||70,Oe=(E,P,R=1)=>{let H=new _n(E,P,qt*R);H.frustumCulled=!1,H.count=0;let me=new Ce(1,1,1);for(let ce=0;ce<qt*R;ce++)H.setColorAt(ce,me);return n.add(H),H},Fe={body:Oe(o(new Wi(.27,.24,3,10)),M(16777215)),head:Oe(o(new oi(.36,14,10)),M(16777215)),hair:Oe(o(new oi(.385,14,8,0,ki,0,Math.PI*.52)),M(16777215)),eyes:Oe(o(new oi(.058,8,6)),_(1774640),2),hands:Oe(o(new oi(.13,10,8)),M(16777215),2),feet:Oe(o(new oi(.12,8,6)),M(2761272),2),staff:Oe(o(new xi(.04,.05,1.3,6)),M(6965802)),orb:Oe(o(new oi(.15,10,8)),M(16777215,{emissive:6308e3})),hat:Oe(o(new Ii(.4,.62,8)),M(16777215)),sword:Oe(o(new xs(.09,.85,.05)),M(15265528,{emissive:3160136})),shield:Oe(o(new xi(.28,.28,.07,10).rotateX(Math.PI/2)),M(16777215)),bow:Oe(o(new br(.4,.03,5,14,Math.PI)),M(9067050)),halo:Oe(o(new br(.22,.035,5,16).rotateX(Math.PI/2)),_(16773792)),shadow:Oe(o(new ai(1,1).rotateX(-Math.PI/2)),o(new xn({map:F,transparent:!0,depthWrite:!1})))};Fe.shadow.renderOrder=2;let I=130,w=(E,P,R=1)=>{let H=new _n(E,P,I*R);H.frustumCulled=!1,H.count=0;let me=new Ce(1,1,1);for(let ce=0;ce<I*R;ce++)H.setColorAt(ce,me);return n.add(H),H},K=_(16769354),ue={impBody:w(C.sph,M(16777215)),impHorn:w(C.cone,M(1706512),2),impEye:w(C.sphLo,K,2),impWing:w(o(new Ii(.5,.9,3)),M(4198428),2),bruBody:w(C.sph,M(16777215)),bruArm:w(o(new Wi(.28,.9,3,8)),M(16777215),2),bruHorn:w(C.cone,M(15260872),2),bruEye:w(C.sphLo,_(16730666),2),wrBody:w(C.cone,M(16777215,{emissive:3149898,transparent:!0,opacity:.88})),wrHood:w(C.sph,M(2627640)),wrEye:w(C.sphLo,_(9105663),2),eShadow:w(o(new ai(1,1).rotateX(-Math.PI/2)),o(new xn({map:F,transparent:!0,depthWrite:!1})))};ue.eShadow.renderOrder=2;let fe=[13642298,6965898,10115839];function ie(E,P,R,H,me,ce,de,re,j){let Ge=new ut(E,P);return Ge.position.set(R,H,me),Ge.scale.set(ce,de,re),j.add(Ge),Ge}let ye={};function ne(E){let P=new zt,R={},H=M(E?3811904:15262958,{emissive:E?3145754:0}),me=M(E?12099784:14731448),ce=M(2103336),de=_(12607743),re=_(16722506);ie(C.cyl,ce,-.35,.8,0,.22,1.6,.22,P),ie(C.cyl,ce,.35,.8,0,.22,1.6,.22,P),R.coat=ie(o(new xi(.62,1.05,2.2,9)),H,0,2.5,0,1,1,1,P),ie(C.sph,H,0,3.55,0,.75,.45,.6,P),R.head=ie(C.sph,me,0,4.25,.05,.5,.56,.5,P);let j=M(E?15790335:12235972);ie(C.sph,j,0,4.55,-.05,.56,.4,.52,P);for(let Ge=0;Ge<5;Ge++)ie(C.cone,j,-.4+Ge*.2,4.85,-.1,.13,.4,.13,P).rotation.z=(Ge-2)*.35;for(let Ge of[-1,1])ie(C.sph,E?re:de,Ge*.19,4.3,.46,.13,.11,.06,P);if(ie(C.box,ce,0,4.3,.47,.6,.06,.04,P),R.armL=new zt,R.armL.position.set(-.85,3.4,0),P.add(R.armL),ie(C.cyl,H,0,-.6,0,.17,1.2,.17,R.armL),R.armR=new zt,R.armR.position.set(.85,3.4,0),P.add(R.armR),ie(C.cyl,H,0,-.6,0,.17,1.2,.17,R.armR),R.book=ie(C.box,M(3805232,{emissive:5902416}),-1.3,2.6,.6,.55,.7,.18,P),R.stone=ie(C.oct,M(2099216,{emissive:12587050}),1.3,3,.6,.32,.45,.32,P),E){R.core=ie(C.oct,_(16722506),0,3,.62,.28,.36,.1,P),R.wings=[];for(let Ge of[-1,1]){let bt=ie(o(new Ii(1.4,3.6,3)),M(1706016,{emissive:4852282,transparent:!0,opacity:.85}),Ge*1.5,3.8,-.4,1,1,.12,P);bt.rotation.z=Ge*1,R.wings.push(bt)}}return P.scale.setScalar(E?1.75:1.5),{g:P,P:R,top:E?9.4:7.8,aura:E?[1,.2,.35]:[.7,.3,1]}}function oe(){let E=new zt,P={},R=M(1708068,{emissive:1179658}),H=M(14198832,{emissive:4204544}),me=M(16052472),ce=_(16719920);P.robe=ie(o(new Ii(1.5,4.4,10)),R,0,2.2,0,1,1,1,E),ie(C.sph,R,0,4.3,0,1,.55,.75,E);for(let de of[-1,1])ie(C.cone,H,de*.95,4.75,0,.22,.8,.22,E).rotation.z=-de*.5;P.cape=ie(o(new ai(2.6,4.2)),M(5900312,{side:hn}),0,2.5,-.7,1,1,1,E),P.cape.rotation.x=.12,P.head=ie(C.sph,R,0,5.1,0,.62,.7,.62,E),ie(C.sph,me,0,5.05,.33,.42,.5,.32,E);for(let de of[-1,1])ie(C.sph,ce,de*.16,5.12,.62,.09,.05,.04,E);for(let de=0;de<5;de++){let re=ie(C.cone,H,-.5+de*.25,5.75+(de===2?.2:0),0,.09,de===2?.8:.55,.09,E);re.rotation.z=(2-de)*.22}P.handL=ie(C.sph,M(2759220),-1.45,3.2,.4,.3,.3,.3,E),P.handR=ie(C.sph,M(2759220),1.45,3.2,.4,.3,.3,.3,E),P.orb=ie(C.sph,_(16722512,{transparent:!0,opacity:.9}),1.45,3.9,.5,.42,.42,.42,E),P.souls=[];for(let de=0;de<6;de++)P.souls.push(ie(C.sphLo,_(10152191,{transparent:!0,opacity:.85}),0,3,0,.16,.22,.16,E));return E.scale.setScalar(1.85),{g:E,P,top:12,aura:[1,.1,.25]}}ye.scientist=ne(!1),ye.scientist2=ne(!0),ye.mastermind=oe();for(let E of Object.values(ye))E.g.visible=!1,n.add(E.g),E.mats=[],E.g.traverse(P=>{P.material&&P.material.isMeshToonMaterial&&E.mats.push([P.material,P.material.emissive.clone()])});let ae={id:"",x:0,z:-30,hitT:-9,atkT:-9,born:0,dieT:-9},k=[];for(let E=0;E<6;E++){let P=new zt,R=M(16765530,{emissive:4861952}),H=M(15265528,{emissive:2107448});ie(C.cyl,H,-.25,.45,0,.16,.9,.16,P),ie(C.cyl,H,.25,.45,0,.16,.9,.16,P),ie(o(new Wi(.5,.6,3,10)),R,0,1.45,0,1,1,1,P),ie(C.sph,H,0,2.35,0,.42,.45,.42,P),ie(C.box,_(8384767),0,2.36,.38,.4,.07,.05,P),ie(C.cone,_(16730714),0,2.85,-.05,.1,.5,.25,P),ie(o(new xi(.55,.55,.1,6).rotateX(Math.PI/2)),R,-.65,1.4,.45,1,1.2,1,P);let me=new zt;me.position.set(.62,1.8,.1),P.add(me),ie(C.box,M(16054527,{emissive:4214896}),0,.7,.2,.12,1.6,.06,me),P.scale.setScalar(1.25),P.visible=!1,n.add(P),k.push({g:P,arm:me,id:0,x:0,z:0,born:0,seen:0,atk:-9})}let se=(()=>{let E=new zt,P=M(14172202,{emissive:4198400}),R=M(16762976,{emissive:4202496}),H=M(16773328);ie(o(new Wi(.9,2.4,4,10).rotateX(Math.PI/2)),P,0,0,0,1,1,1,E),ie(o(new Wi(.7,2,4,10).rotateX(Math.PI/2)),R,0,-.25,.1,1,1,1,E);let me=ie(o(new Wi(.42,1.4,3,8)),P,0,.9,1.9,1,1,1,E);me.rotation.x=.9;let ce=new zt;ce.position.set(0,1.6,2.9),E.add(ce),ie(C.box,P,0,0,.3,.8,.6,1.2,ce);let de=ie(C.box,R,0,-.35,.35,.7,.2,1,ce);for(let j of[-1,1])ie(C.cone,H,j*.3,.5,-.1,.12,.7,.12,ce).rotation.x=-.7,ie(C.sphLo,_(16777056),j*.3,.15,.75,.1,.1,.1,ce);let re=[];for(let j of[-1,1]){let Ge=new zt;Ge.position.set(j*.7,.5,.2),E.add(Ge);let bt=ie(o(new Ii(1.6,4.4,3).rotateZ(-j*Math.PI/2)),M(10496024,{emissive:3147776,side:hn}),j*2.2,0,0,1,1,.08,Ge);bt.rotation.x=Math.PI/2,re.push(Ge)}return ie(o(new Ii(.6,3.4,8).rotateX(-Math.PI/2)),P,0,-.1,-3,1,1,1,E),E.scale.setScalar(1.25),E.visible=!1,n.add(E),{g:E,head:ce,jaw:de,wings:re,id:0,born:0,px:0,pz:0}})(),ee=16,_e=new _n(o(new co(.86,1,40).rotateX(-Math.PI/2)),o(new xn({color:16777215,transparent:!0,depthWrite:!1,blending:jn,side:hn})),ee);_e.frustumCulled=!1,_e.renderOrder=4;{let E=new Ce(0,0,0);for(let P=0;P<ee;P++)_e.setColorAt(P,E)}n.add(_e);let xe=[],ge=(E,P,R,H,me,ce=.6)=>{xe.length<ee&&xe.push({x:E,y:P,z:R,col:H,r1:me,life:ce,t:0})},Ve=14,Ke=new _n(o(new xi(1,1,1,10,1,!0)),o(new xn({color:16777215,transparent:!0,depthWrite:!1,blending:jn,side:hn})),Ve);Ke.frustumCulled=!1,Ke.renderOrder=7;{let E=new Ce(0,0,0);for(let P=0;P<Ve;P++)Ke.setColorAt(P,E)}n.add(Ke);let be=[],He=(E,P,R,H,me,ce,de,re,j)=>{be.length<Ve&&be.push({a:new B(E,P,R),b:new B(H,me,ce),col:de,w:re,life:j,t:0})};function tt(E,P){let R=o(new Ut),H=new Float32Array(E*3),me=new Float32Array(E*4),ce=new Float32Array(E);R.setAttribute("position",new it(H,3)),R.setAttribute("col",new it(me,4)),R.setAttribute("size",new it(ce,1));let de=o(new Nn({transparent:!0,depthWrite:!1,blending:P?jn:Ws,uniforms:{px:{value:400}},vertexShader:"attribute vec4 col; attribute float size; uniform float px; varying vec4 vC; void main(){ vC = col; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = min(size * px / max(0.5, -mv.z), 160.0); gl_Position = projectionMatrix * mv; }",fragmentShader:P?"varying vec4 vC; void main(){ float d = length(gl_PointCoord-0.5)*2.0; float a = pow(max(0.0, 1.0 - d), 2.0); gl_FragColor = vec4(vC.rgb * a * vC.a, 1.0); }":"varying vec4 vC; void main(){ vec2 p = gl_PointCoord-0.5; if (vC.a < 0.0) { if (abs(p.x) > 0.5 || abs(p.y) > 0.28) discard; gl_FragColor = vec4(vC.rgb, 1.0); } else { float d = length(p)*2.0; if (d > 1.0) discard; gl_FragColor = vec4(vC.rgb, vC.a * (1.0 - d*d)); } }"})),re=new gs(R,de);return re.frustumCulled=!1,n.add(re),{geo:R,pos:H,col:me,size:ce,mat:de,pts:re,list:[],cap:E}}let pe=tt(e.particles||900,!0),ht=tt(Math.round((e.particles||900)*.4),!1);pe.pts.renderOrder=9,ht.pts.renderOrder=5;let At=1,ti=new Ce;function ft(E,P,R,H,me,ce){P=Math.max(1,Math.round(P*At));for(let de=0;de<P&&E.list.length<E.cap-60;de++){let re=Math.random()*ki,j=(ce.up??.5)+Math.random()*(ce.spreadUp??.5),Ge=(ce.speed||4)*(.4+Math.random()*.8);ti.set(ce.colors?ce.colors[Math.random()*ce.colors.length|0]:ce.color),E.list.push({x:R+(Math.random()-.5)*(ce.jitter||0),y:H+(Math.random()-.5)*(ce.jy||0),z:me+(Math.random()-.5)*(ce.jitter||0),vx:Math.cos(re)*Ge*(1-j*.6)+(ce.vx||0),vy:Ge*j*(ce.vyMul??1),vz:Math.sin(re)*Ge*(1-j*.6)+(ce.vz||0),g:ce.g??9,drag:ce.drag??1.5,life:(ce.life||.6)*(.7+Math.random()*.6),t:0,s0:ce.size||.3,s1:ce.size1??(ce.size||.3)*.3,r:ti.r,gg:ti.g,b:ti.b,a:ce.alpha??1,conf:!!ce.confetti,spin:Math.random()*ki})}}function Fr(E,P,R){let H=E.list,me=0;for(let re=0;re<H.length;re++){let j=H[re];if(j.t+=P,j.t>=j.life)continue;j.vy-=j.g*P;let Ge=Math.exp(-j.drag*P);j.vx*=Ge,j.vy*=Ge,j.vz*=Ge,j.conf&&(j.spin+=P*6,j.vx+=Math.sin(j.spin)*P*2),j.x+=j.vx*P,j.y+=j.vy*P,j.z+=j.vz*P,j.y<.05&&j.g>0&&(j.y=.05,j.vy*=-.3,j.vx*=.7,j.vz*=.7),H[me++]=j}H.length=me;let ce=0,de=(re,j,Ge,bt,Jt,rn,Zn,Ot)=>{E.pos[ce*3]=re,E.pos[ce*3+1]=j,E.pos[ce*3+2]=Ge,E.col[ce*4]=bt,E.col[ce*4+1]=Jt,E.col[ce*4+2]=rn,E.col[ce*4+3]=Zn,E.size[ce]=Ot,ce++};if(R)for(let re of R)ce<E.cap-1&&de(re[0],re[1],re[2],re[3],re[4],re[5],re[6],re[7]);for(let re of H){if(ce>=E.cap)break;let j=re.t/re.life,Ge=re.conf?1:1-j*j;de(re.x,re.y,re.z,re.r,re.gg,re.b,re.conf?-1:re.a*Ge,re.s0+(re.s1-re.s0)*j)}E.geo.setDrawRange(0,ce);for(let re of["position","col","size"]){let j=E.geo.attributes[re];j.needsUpdate=!0,j.clearUpdateRanges?.(),j.addUpdateRange?.(0,ce*j.itemSize)}}let Xo=o(new Ut);{let P=new Float32Array(510);for(let R=0;R<170;R++)P.set([Math.random(),Math.random(),Math.random()],R*3);Xo.setAttribute("position",new it(P,3))}let is=new gs(Xo,o(new Nn({transparent:!0,depthWrite:!1,blending:jn,uniforms:{time:{value:0},px:{value:300},tint:{value:new Ce(13660415)},tint2:{value:new Ce(16734778)}},vertexShader:`uniform float time; uniform float px; varying float vA; varying float vK;
      void main(){ vec3 s = position; float t = time * (0.05 + s.x * 0.05); float fy = fract(s.y + t);
        vec3 p = vec3((s.x - 0.5) * 34.0 + sin(t * 6.0 + s.z * 9.0) * 1.5, fy * 18.0, -40.0 + s.z * 46.0 + fy * 4.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vK = s.z;
        vA = smoothstep(0.0, 0.1, fy) * smoothstep(1.0, 0.7, fy) * (0.5 + 0.5 * sin(time * 3.0 + s.x * 50.0));
        gl_PointSize = min((0.1 + s.y * 0.12) * px / max(1.0, -mv.z), 10.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 tint; uniform vec3 tint2; varying float vA; varying float vK; void main(){ float d = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(mix(tint, tint2, step(0.6, vK)) * vA * max(0.0, 1.0-d), 1.0); }"})));is.frustumCulled=!1,is.renderOrder=3,n.add(is);let Kt=new Map,An=new Map,ss=new Ce(1,1,1),un=new Ce,hi=new Ce,Qs=new Ce(7368832),jo=new B,Ko=new B(0,1,0),ui={particles:1,labels:22,dust:!0,props:!0,chars:70},ph=[],Pa=0,St=0,rs=-9,Bi=-9,Ia=-9,Yn=null,A=new B(0,13,18),O=new B(0,1.5,-9),Z=new B,W=new B,X=[],ve=new Map,Ie=[],Te=90,Ae=new qe,Le=new qe,Ze=new qe,Ne=(E,P,R,H,me,ce,de,re,j=0,Ge=0,bt=null,Jt=0)=>{Le.compose($.set(R,H,me),Me.setFromEuler(De.set(j,Jt,Ge)),Be.set(ce,de,re)),Ze.multiplyMatrices(Ae,Le),E.setMatrixAt(P,Ze),bt&&E.setColorAt(P,bt)},ke=E=>E.z<Vt-.1?0:kn+.08,nt=[],Qt=[],Pt=[],vt=0;function En(){let E=(R,H,me,ce,de)=>f.bake(R,me,ce,de).map(re=>{let j=new _n(re,f.material(R,H),I);j.frustumCulled=!1,j.count=0;for(let Ge=0;Ge<I;Ge++)j.setColorAt(Ge,ss);return n.add(j),j});nt[0]={run:E("Skeleton_Minion",null,"run",4),atk:E("Skeleton_Minion",null,"attack",3,{to:.8}),s:.78},nt[1]={run:E("Skeleton_Warrior",null,"run",4),atk:E("Skeleton_Warrior",null,"slash",3,{to:.8}),s:1.35},nt[2]={run:E("Skeleton_Mage","ghost","idle",2),atk:E("Skeleton_Mage","ghost","cast",2,{to:.6}),s:1.05};let P={scientist:["Mage",10121408,2.25],scientist2:["Mage",6950960,2.15],mastermind:["Rogue_Hooded",4198432,2.9]};for(let[R,H]of Object.entries(ye)){let[me,ce,de]=P[R],re=new Set([H.P.book,H.P.stone,H.P.core,H.P.orb,H.P.cape,...H.P.wings||[],...H.P.souls||[]].filter(Boolean));for(let Ge of H.g.children)re.has(Ge)||(Ge.visible=!1);let j=f.actor(me,null);j.mesh.material=(Array.isArray(j.mesh.material)?j.mesh.material:[j.mesh.material]).map(Ge=>{let bt=Ge.clone();return bt.color&&bt.color.lerp(new Ce(ce),.5),o(bt),bt}),j.mesh.material.length===1&&(j.mesh.material=j.mesh.material[0]),H.amat=Array.isArray(j.mesh.material)?j.mesh.material[0]:j.mesh.material,j.obj.scale.setScalar(de),H.g.add(j.obj),H.actor=j,j.play("combat",0)}for(let R of k){for(let H of R.g.children)H.visible=!1;R.actor=f.actor("Knight",16765530),R.actor.obj.scale.setScalar(1.05),R.g.add(R.actor.obj)}ze()}function ze(){for(let Se of new Set([...u.geos.keys()].map(Je=>u.matOf(Je))))Se&&Se.color&&Se.color.setHex(9406136);let E=(Se,Je)=>{let Nt=u.instanced(Se,Je);Nt&&(n.add(Nt),Qt.push(Nt))},P=(Se,Je,Nt)=>{E(Se,Nt);for(let $n of Je)E($n,Nt)},R=23,H=()=>(R=R*16807%2147483647,(R-1)/2147483646);Q.visible=he.visible=Ue.visible=!1;let me="ABCDEFGH".split("").map(Se=>"building_"+Se),ce={};for(let Se of[-1,1])for(let Je=0;Je<24;Je++){let Nt=Je%3,$n=-50+Math.floor(Je/3)*6.4+H()*2,Rs=Se*(11.5+Nt*5.6+H()*2),er=me[H()*me.length|0],Gi=H()<.3;(ce[er]||(ce[er]=[])).push({x:Rs,z:$n,ry:Math.floor(H()*4)*Math.PI/2,s:2.4+H()*.5,sy:Nt?1.1+H()*1.2:1+H()*.5,rx:Gi?(H()-.5)*.16:0,rz:Gi?(H()-.5)*.2:0})}for(let[Se,Je]of Object.entries(ce))E(Se,Je);let de=["wheel_front_left","wheel_front_right","wheel_rear_left","wheel_rear_right"],re={car_sedan:[{x:-8.8,z:-14,ry:.5,s:4.2,rz:.12},{x:9.2,z:-25,ry:2.6,s:4.2}],car_police:[{x:9,z:-8,ry:-.4,s:4.2}],car_taxi:[{x:-9.4,z:-27,ry:2.2,s:4.2,rz:-.2}]};for(let[Se,Je]of Object.entries(re))P(Se,de.map(Nt=>`${Se}_${Nt}`),Je);let j=[],Ge=[],bt=[],Jt=[],rn=[],Zn=[],Ot=[];for(let Se=0;Se<10;Se++){let Je=Se%2?1:-1;j.push({x:Je*(9.2+H()*4),z:-44+Se*4.4+H()*2,ry:H()*6,s:1.1+H()*.5})}for(let Se=0;Se<8;Se++){let Je=Se%2?1:-1;(Se%3?bt:Ge).push({x:Je*(8.3+H()*1.6),z:-30+Se*3.4,ry:(H()-.5)*.6,s:.8+H()*.3,rz:(H()-.5)*.2})}for(let Se=0;Se<6;Se++){let Je=Se%2?1:-1;Jt.push({x:Je*8,z:-36+Math.floor(Se/2)*11+H()*3,ry:Math.PI/2,s:.9})}for(let Se=0;Se<4;Se++){let Je=Se%2?1:-1,Nt=-22+Math.floor(Se/2)*12;rn.push({x:Je*7.9,z:Nt,ry:Je>0?-Math.PI/2:Math.PI/2,s:1}),Pt.push([Je*7.9-Je*1,2.5,Nt])}for(let Se=0;Se<4;Se++){let Je=Se%2?1:-1;Zn.push({x:Je*8.6,z:-40+Se*10,ry:Je>0?0:Math.PI,s:4.5})}for(let Se=0;Se<6;Se++){let Je=Se%2?1:-1;Ot.push({x:Je*(13+H()*6),z:-46+Se*7,ry:H()*6,s:.6+H()*.4})}E("tree_dead_large",j.filter((Se,Je)=>Je%3===0)),E("tree_dead_medium",j.filter((Se,Je)=>Je%3===1)),E("tree_dead_small",j.filter((Se,Je)=>Je%3===2)),E("grave_A",Ge),E("gravestone",bt.filter((Se,Je)=>Je%2)),E("gravemarker_A",bt.filter((Se,Je)=>!(Je%2))),E("fence_broken",Jt),P("post_lantern",["post_lantern_lantern"],rn),E("streetlight",Zn),E("rubble_large",Ot),E("crypt",[{x:-15,z:-31,ry:.5,s:1.1}]),E("pumpkin_orange_jackolantern",[{x:8.6,z:-4,ry:-.6,s:.8},{x:-8.4,z:-18,ry:.4,s:.7}]),E("skull",[{x:-7.6,z:-9,ry:.7,s:.6}]),E("ribcage",[{x:7.2,z:-16,ry:1.2,s:1.4}]);let Xt=Vt+.45,tn=kn/4;E("wall",[-8,-4,4,8].map(Se=>({x:Se,z:Xt,sy:tn})).concat([{x:-12,z:Xt,sy:tn},{x:12,z:Xt,sy:tn}])),E("wall_doorway",[{x:0,z:Xt,sy:tn}]),$t.visible=!1;for(let Se of Tn){for(let Je of Se.t.children)Je!==Se.flag&&(Je.visible=!1);Se.flag.position.y=8.4}P("building_tower_catapult_red",["catapult_turret_red","catapult_arm_red"],[-1,1].map(Se=>({x:Se*11.6,z:(Vt+js)/2,ry:Se>0?-.4:.4,s:3.6}))),jt.visible=!1,E("torch_lit",Vn.map(Se=>({x:Se,y:kn+.6,z:Vt+.15,s:1.3}))),E("barrel_large",[{x:-5.2,z:js+1.4,s:.5}]),E("crates_stacked",[{x:5.6,z:js+1.5,ry:.4,s:.6}]),Mt.visible=!1,E("building_castle_red",[{x:0,z:31,s:4.4}]),P("building_tower_A_red",["building_tower_A_top_red"],[{x:-8.5,z:30,s:4},{x:8.5,z:30,s:4}])}let on=new B;function _t(E,P,R,H){let me=0;vt++;let ce=ui.animLod||1,de=E.length>28;for(let re of E){let j=Kt.get(re.id);j||(j={spawn:P,x:re.x,z:re.z,y:ke(re),atk:-9,speed:0,acc:0},Kt.set(re.id,j)),j.seen=P,j.frame=vt;let Ge=Math.hypot(re.x-j.x,re.z-j.z)/Math.max(R,.001);j.speed+=(Math.min(Ge,10)-j.speed)*Math.min(1,R*8),j.x=re.x,j.z=re.z;let bt=re.flags&Rt.down,Jt=re.flags&Rt.asc,rn=ke(re);j.y=rn;let Zn=py[re.cls]||"Knight",Ot=re.info||{};(!j.a||j.model!==Zn)&&(j.a&&f.release(j.a),j.model=Zn,j.a=f.actor(Zn,re.flags&1?null:Ot.color??null),n.add(j.a.obj));let Xt=j.a,tn=Math.min(1,(P-j.spawn)/.35);Xt.obj.position.set(re.x,rn+(Jt?.25+Math.sin(P*3)*.08:0),re.z),Xt.obj.rotation.set(0,Math.PI+(re.cls===1?0:Math.sin(P*.7+re.id)*.15),0),Xt.obj.scale.setScalar(pm*(.4+.6*tn)*(Jt?1.18:1));let Se=bt?"dead":j.speed>2.4?"run":j.speed>.4?"walk":re.flags&Rt.cmd||Jt?"cheer":"combat";bt&&Xt.base!=="dead"&&Xt.play("die",P),Xt.play(Se,P),!bt&&P-j.atk<.05&&P>=Xt.until&&Xt.play(my[re.cls]||"slash",P,{speed:1.5}),j.acc+=R;let Je=(de?2:1)*ce;(vt+re.id)%Je===0&&($l(f,Xt,j.acc,P),j.acc=0),Le.compose($.set(re.x,rn+.03,re.z),Me.identity(),Be.set(1.1,1,1.1)),Fe.shadow.setMatrixAt(me,Le);let Nt=hi.setHex(Ql[re.cls]??16777215);Jt?(H.push([re.x,rn+.8,re.z,1,.85,.3,.9+.3*Math.sin(P*8),3.2]),Math.random()<R*8*At&&ft(pe,1,re.x,rn+.4,re.z,{color:16765773,up:1,speed:1.4,g:-3,life:.6,size:.25,jitter:.6})):(re.cls===0||re.cls===3)&&(me<24||P-j.atk<.3)&&Xt.hand&&(Xt.hand.getWorldPosition(on),H.push([on.x,on.y+.5,on.z,Nt.r,Nt.g,Nt.b,.5+(P-j.atk<.3?.8:0),.9])),re.flags&Rt.gift&&H.push([re.x,rn+.9,re.z,1,.5,.9,.9,2.6]),X.push({id:re.id,x:re.x,y:rn+2*pm*tn+.15,z:re.z,info:Ot,flags:re.flags,cls:re.cls,hp:re.hp}),me++}for(let re of Kt.values())re.a&&re.frame!==vt&&(f.release(re.a),re.a=null);return me}function as(E,P,R,H,me){let ce=null;for(let de of nt)for(let re of[de.run,de.atk])for(let j of re)j.count=0;for(let de of E.enemies){if(de.k===3){ce=de;continue}let re=nt[de.k];if(!re)continue;let j=An.get(de.id);j||(j={born:P,hit:-9,ph:Math.random()*8,px:de.x,pz:de.z,mv:1,yaw:0},An.set(de.id,j)),j.seen=P;let Ge=de.x-j.px,bt=de.z-j.pz,Jt=Math.hypot(Ge,bt)/Math.max(R,.001);if(j.px=de.x,j.pz=de.z,j.mv+=((Jt>.3?1:0)-j.mv)*Math.min(1,R*6),Jt>.3){let Gi=Math.atan2(Ge,bt)-j.yaw;Gi=Math.atan2(Math.sin(Gi),Math.cos(Gi)),j.yaw+=Gi*Math.min(1,R*8)}let rn=j.mv<.5,Zn=rn?re.atk:re.run,Ot=rn?4:de.k===0?9:de.k===1?5.5:2,Xt=Zn[Math.floor(P*Ot+j.ph)%Zn.length],tn=Xt.count++,Se=Math.max(0,1-(P-j.hit)/.18),Je=Math.min(1,(P-j.born)/.5),Nt=re.s*(.2+.8*Je),$n=de.k===2?2.4+Math.sin(P*2+j.ph)*.4:0;Ae.compose($.set(de.x,$n,de.z),Me.setFromEuler(De.set(de.k===2?.2:0,j.yaw,de.k===2?Math.sin(P*1.7+j.ph)*.12:0)),Be.set(Nt,Nt,Nt)),Xt.setMatrixAt(tn,Ae),Xt.setColorAt(tn,Se>0?un.setRGB(1+Se*1.6,1+Se*.5,1+Se*.5):ss),de.k!==2?(Le.compose($.set(de.x,.03,de.z),Me.identity(),Be.set(de.k===1?2:1.1,1,de.k===1?2:1.1)),ue.eShadow.setMatrixAt(me.sh++,Le)):Math.random()<R*4*At&&ft(pe,1,de.x,$n+.3,de.z,{color:10115839,up:-.2,speed:.6,g:1,life:.6,size:.35});let Rs=de.k===1?2.6:de.k===2?$n+2:1.5;ve.set(de.id,{x:de.x,y:de.k===2?$n+1.2:Rs*.6,z:de.z,k:de.k}),(de.k===1||tn<30)&&H.push([de.x,Rs*.82,de.z+.3,de.k===2?.5:.4,de.k===2?.8:.9,1,.35,de.k===1?.9:.5])}for(let de of nt)for(let re of[de.run,de.atk])for(let j of re)j.instanceMatrix.needsUpdate=!0,j.instanceColor&&(j.instanceColor.needsUpdate=!0);return ce}function Rn(E,P,R){Pa=R;let H=E.phase==="ending"&&Yn,me=H&&Yn.saved?Math.min(1,(R-Yn.t0)/4):0,ce=H&&!Yn.saved?Math.min(1,(R-Yn.t0)/3):0;V.material.uniforms.dawn.value=me*.85,V.material.uniforms.end.value=ce*.9,te.material.uniforms.time.value=R,te.material.uniforms.op.value=1-me;let de=!!E.bo,re=(H?Yn.saved?Math.max(0,1-me*1.2):1.5:1)*(de?1.25:1)*(1+.12*Math.sin(R*3));Ln.uniforms.time.value=R,Ln.uniforms.power.value=re*.6,Ln.uniforms.hue.value=(E.ch||1)*.12+(de?.2:0)+ce*.4;let j=.72*(H?Yn.saved?Math.max(.01,1-me):1+ce*.8:1+((E.ch||1)-1)*.12);Dn.scale.set(j,j,1),an.scale.set(6.2*j,7.8*j,6),an.rotation.z=R*.2,an.visible=j>.05,d.intensity=32*re*(1+.15*Math.sin(R*2.3)),d.color.setHex(ce>0?16719936:de?13643968:10502399),G.material.opacity=.22*re;for(let U=0;U<Un;U++){let q=U/Un*ki+R*.15*(U%2?1:-1),ot=7.5+U%3*1.6;je(Ct,U,Math.cos(q)*ot*j,Aa+Math.sin(q)*ot*.9*j+Math.sin(R+U)*.4,nn-.5+U%4*.4,.3+U%3*.2,.5+U%2*.3,.3,R*(.5+U*.05),U,0)}Ct.instanceMatrix.needsUpdate=!0,c.intensity=.95+me*1.2-ce*.4+(R-rs<.12?1.6:0)+(R-Ia<.5?(.5-(R-Ia))*4:0),c.color.setHex(me>.3?16769216:9412863),h.intensity=.9+me,n.fog.color.copy(i).lerp(hi.setHex(15245440),me*.7).lerp(un.setHex(3802640),ce*.8);let Ge=Math.max(0,Math.min(100,E.bar||0))/100;we.visible=Ge>.02||R-Bi<.4,Tt.uniforms.time.value=R,Tt.uniforms.a.value=.12+Ge*.4+(R-Bi<.3?.5:0),Tt.uniforms.hit.value=Math.max(0,1-(R-Bi)/.3),Tt.uniforms.col.value.setHex(Ge>.66?8050943:Ge>.33?5943551:8024319),we.scale.y=6+Ge*1.5;for(let U of Tn)U.flag.rotation.y=Math.sin(R*2.2+U.t.position.x)*.35;g.intensity=12+Math.sin(R*11)*2;let bt=E.pd>0?1-Math.max(0,Math.min(1,E.tl/E.pd)):1;if(E.phase==="intro"){let U=bt*bt*(3-2*bt);Z.set(Math.sin(U*1.4-.7)*10,6+U*6,-6+U*24),W.set(0,Aa-U*5,nn+U*22)}else if(E.phase==="gather"||E.phase==="chapter")Z.set(Math.sin(R*.12)*3,10.5,16),W.set(0,1.8,-8);else if(E.phase==="boss"&&E.bo)Z.set(Math.sin(R*.2)*2,12,18),W.set(ae.x*.3,2.2,Math.max(-14,ae.z*.45-4));else if(E.phase==="vote"||E.phase==="choice")Z.set(Math.sin(R*.25)*3,9.5,15),W.set(0,4.5,-16);else if(E.phase==="ending"){let U=R*.12;Z.set(Math.sin(U)*14,9+me*3,10+Math.cos(U)*8),W.set(0,3+me*2,-6)}else Z.set(Math.sin(R*.15)*1.8,12.5,17.5),W.set(0,.8,-9);let Jt=Math.min(1,P*(E.phase==="intro"?1.6:1.8));A.distanceTo(Z)>45&&(A.copy(Z),O.copy(W)),A.lerp(Z,Jt),O.lerp(W,Jt),St=Math.max(0,St-P*2.4);let rn=(Math.random()-.5)*St*.6,Zn=(Math.random()-.5)*St*.6;r.position.set(A.x+rn,A.y+Zn+Math.sin(R*.5)*.08,A.z),r.lookAt(O.x+rn*.6,O.y+Zn*.6,O.z);let Ot=[];Vn.forEach((U,q)=>{let ot=.75+.25*Math.sin(R*(9+q)+q*2);Ot.push([U,kn+1.35,Vt+.15,1,.55*ot,.18*ot,.9*ot,2.2]),Ot.push([U,kn+1.3,Vt+.15,1,.9,.6,1,.5]),Math.random()<P*3*At&&ft(pe,1,U,kn+1.4,Vt+.15,{color:16752704,up:1,speed:.8,g:-2,life:.7,size:.18})});for(let U of Pt)Ot.push([U[0],U[1],U[2],1,.7,.35,.8+.15*Math.sin(R*7+U[2]),2.4]);if(Wt.material.opacity=.45+.3*Math.sin(R*2)+Ge*.3,Ot.push([0,Aa,nn,.7,.25,1,.2*re,13]),Math.random()<P*8*At&&j>.1){let U=Math.random()*ki;ft(pe,1,Math.cos(U)*5.6*j,Aa+Math.sin(U)*7*j,nn,{colors:[12607743,16726634],up:.2,speed:1.5,g:-.5,life:1.4,size:.5})}X.length=0;let Xt=Math.min(qt,ui.chars||qt),tn=E.members;if(tn.length>Xt){tn=ph,tn.length=0;for(let U of E.members)!(U.flags&1)&&tn.length<Xt&&tn.push(U);for(let U of E.members)U.flags&1&&tn.length<Xt&&tn.push(U)}let Se=0,Je=0,Nt=0,$n=0,Rs=0,er=0;if(f)Se=_t(tn,R,P,Ot);else for(let U of tn){let q=Kt.get(U.id);q||(q={walk:Math.random()*10,spawn:R,skin:mm[U.id%mm.length],x:U.x,z:U.z,y:ke(U),atk:-9},Kt.set(U.id,q)),q.seen=R;let ot=Math.hypot(U.x-q.x,U.z-q.z)/Math.max(P,.001);q.x=U.x,q.z=U.z;let It=U.flags&Rt.down,Ft=U.flags&Rt.asc,Cn=ot>.4&&!It;q.walk+=P*(Cn?11:0);let dt=ke(U);q.y=dt;let cn=Math.min(1,(R-q.spawn)/.35),di=(.3+.7*cn)*(1+.15*Math.sin(cn*Math.PI))*(Ft?1.18:1),wt=Math.max(0,1-(R-q.atk)/.25),tr=(Cn?Math.abs(Math.sin(q.walk))*.12:0)+(U.flags&Rt.cmd?Math.abs(Math.sin(R*12+U.id))*.16:0)+(Ft?.25+Math.sin(R*3)*.08:0);Ae.compose($.set(U.x,dt+tr,U.z),Me.setFromEuler(De.set(It?-1.45:0,Math.PI+(U.cls===1?0:Math.sin(R*.7+U.id)*.15),0)),Be.set(di,di,di)),It&&Ae.multiply(Le.makeTranslation(0,.3,0));let dn=U.info||{};un.setHex(dn.color??16777215),It&&un.lerp(Qs,.7);let Cs=wt>0?hi.copy(un).lerp(ss,wt*.5):un,nr=Cn?Math.sin(q.walk):0;Ne(Fe.body,Se,0,.52,0,1,1,1,0,0,Cs),hi.setHex(q.skin),It&&hi.lerp(Qs,.5),Ne(Fe.head,Se,0,1.06,0,1,1,1,0,0,hi),hi.copy(un).multiplyScalar(.55),Ne(Fe.hair,Se,0,1.1,-.02,1,1,1,-.15,0,hi);let Gf=It||(R+U.id*.37)%4.2<.12?.15:1;Ne(Fe.eyes,Se*2,-.13,1.08,.31,1,Gf,1),Ne(Fe.eyes,Se*2+1,.13,1.08,.31,1,Gf,1);let Hf=U.cls===1?-wt*1.6:-wt*.8;Ne(Fe.hands,Se*2,-.36,.5+nr*.05,nr*.12,1,1,1,0,0,un),Ne(Fe.hands,Se*2+1,.36,.62+wt*.2,.22,1,1,1,0,0,un),Ne(Fe.feet,Se*2,-.13,.08,nr*.18,1,1,1),Ne(Fe.feet,Se*2+1,.13,.08,-nr*.18,1,1,1);let Ur=hi.setHex(Ql[U.cls]??16777215);ui.props&&((U.cls===0||U.cls===3)&&(Ne(Fe.staff,Nt,.4,.75+wt*.15,.2,1,1,1,Hf*.4,0),Ne(Fe.orb,Nt,.4,1.45+wt*.2,.2,1+wt*.5,1+wt*.5,1+wt*.5,0,0,Ur),Nt++),U.cls===0&&(Ne(Fe.hat,Je,0,1.55,-.03,1,1,1,-.2,.1,Ur),Je++),U.cls===1&&(Ne(Fe.sword,$n,.42,.95,.3,1,1,1,-.6+Hf,-.2),Ne(Fe.shield,$n,-.42,.6,.32,1,1,1,0,0,Ur),$n++),U.cls===2&&(Ne(Fe.bow,Rs,-.35,.72,.36,1,1,1,0,Math.PI/2+.1,null,Math.PI/2),Rs++),(U.cls===3||U.flags&Rt.bless)&&(Ne(Fe.halo,er,0,1.62,0,1,1,1,0,0,null),er++)),Le.compose($.set(U.x,dt+.03,U.z),Me.identity(),Be.set(1.1,1,1.1)),Fe.shadow.setMatrixAt(Se,Le),Ft?(Ot.push([U.x,dt+.8,U.z,1,.85,.3,.9+.3*Math.sin(R*8),3.2]),Math.random()<P*8*At&&ft(pe,1,U.x,dt+.4,U.z,{color:16765773,up:1,speed:1.4,g:-3,life:.6,size:.25,jitter:.6})):(U.cls===0||U.cls===3)&&ui.props&&(Se<30||wt>0)&&($.set(.4,1.45,.2).applyMatrix4(Ae),Ot.push([$.x,$.y,$.z,Ur.r,Ur.g,Ur.b,.6+wt,.9+wt*1.4])),U.flags&Rt.gift&&Ot.push([U.x,dt+.9,U.z,1,.5,.9,.9,2.6]),X.push({id:U.id,x:U.x,y:dt+tr+1.62*di+(U.cls===0?.35:0),z:U.z,info:dn,flags:U.flags,cls:U.cls,hp:U.hp}),Se++}let Gi={eyes:Se*2,hands:Se*2,feet:Se*2,staff:Nt,orb:Nt,hat:Je,sword:$n,shield:$n,bow:Rs,halo:er};if(f)for(let U of Object.keys(Fe))Gi[U]=U==="shadow"?Se:0;for(let U of Object.keys(Fe)){let q=Fe[U];q.count=Gi[U]??Se,q.instanceMatrix.needsUpdate=!0,q.instanceColor&&(q.instanceColor.needsUpdate=!0)}if(Kt.size>tn.length+40)for(let[U,q]of Kt)R-q.seen>5&&(q.a&&f.release(q.a),Kt.delete(U));ve.clear();let fn={imp:0,bru:0,wr:0,sh:0},fi=null;if(f)fi=as(E,R,P,Ot,fn);else for(let U of E.enemies){if(U.k===3){fi=U;continue}let q=An.get(U.id);q||(q={born:R,hit:-9,ph:Math.random()*ki},An.set(U.id,q)),q.seen=R;let ot=Math.max(0,1-(R-q.hit)/.18),It=Math.min(1,(R-q.born)/.5),Ft=.2+.8*It,Cn=Math.abs(Math.sin(R*9+q.ph))*.12;if(un.setHex(fe[U.k]),ot>0&&un.lerp(ss,ot*.85),U.k===0){let dt=fn.imp++;Ae.compose($.set(U.x,Cn,U.z),Me.setFromEuler(De.set(0,Math.sin(R*4+q.ph)*.2,Math.sin(R*9+q.ph)*.12)),Be.set(Ft,Ft,Ft)),Ne(ue.impBody,dt,0,.55,0,.45,.52,.42,0,0,un),Ne(ue.impHorn,dt*2,-.18,.98,0,.08,.3,.08,0,.35),Ne(ue.impHorn,dt*2+1,.18,.98,0,.08,.3,.08,0,-.35),Ne(ue.impEye,dt*2,-.13,.66,.36,.07,.06,.05),Ne(ue.impEye,dt*2+1,.13,.66,.36,.07,.06,.05);let cn=Math.sin(R*22+q.ph)*.5;Ne(ue.impWing,dt*2,-.42,.7,-.15,1,1,.2,0,1.2+cn),Ne(ue.impWing,dt*2+1,.42,.7,-.15,1,1,.2,0,-1.2-cn),ve.set(U.id,{x:U.x,y:.7,z:U.z,k:0})}else if(U.k===1){let dt=fn.bru++,cn=Math.sin(R*5+q.ph);Ae.compose($.set(U.x,Math.abs(cn)*.1,U.z),Me.setFromEuler(De.set(.12,0,cn*.06)),Be.set(Ft,Ft,Ft)),Ne(ue.bruBody,dt,0,1.15,0,.95,1.1,.8,0,0,un),Ne(ue.bruArm,dt*2,-.95,.95,.1,1,1,1,cn*.4,.25,un),Ne(ue.bruArm,dt*2+1,.95,.95,.1,1,1,1,-cn*.4,-.25,un),Ne(ue.bruHorn,dt*2,-.45,2.05,.1,.13,.5,.13,-.3,.6),Ne(ue.bruHorn,dt*2+1,.45,2.05,.1,.13,.5,.13,-.3,-.6),Ne(ue.bruEye,dt*2,-.25,1.55,.72,.1,.08,.06),Ne(ue.bruEye,dt*2+1,.25,1.55,.72,.1,.08,.06),ve.set(U.id,{x:U.x,y:1.3,z:U.z,k:1})}else{let dt=fn.wr++,cn=3.2+Math.sin(R*2+q.ph)*.4;Ae.compose($.set(U.x,cn,U.z),Me.setFromEuler(De.set(.25,Math.sin(R+q.ph)*.3,Math.sin(R*1.7+q.ph)*.15)),Be.set(Ft,Ft,Ft)),Ne(ue.wrBody,dt,0,-.2,0,.55,-1.5,.55,0,0,un),Ne(ue.wrHood,dt,0,.62,0,.42,.45,.42),Ne(ue.wrEye,dt*2,-.13,.62,.34,.07,.05,.05),Ne(ue.wrEye,dt*2+1,.13,.62,.34,.07,.05,.05),Math.random()<P*4*At&&ft(pe,1,U.x,cn-.8,U.z,{color:10115839,up:-.2,speed:.6,g:1,life:.6,size:.35}),ve.set(U.id,{x:U.x,y:cn+.3,z:U.z,k:2})}U.k!==2&&(Le.compose($.set(U.x,.03,U.z),Me.identity(),Be.set(U.k===1?2.2:1.2,1,U.k===1?2.2:1.2)),ue.eShadow.setMatrixAt(fn.sh++,Le)),(U.k===1||fn.imp<40)&&Ot.push([U.x,U.k===1?1.55:U.k===2?3.8:.66,U.z+(U.k===1?.75:.38),U.k===2?.5:1,U.k===1?.3:U.k===2?.9:.85,U.k===2?1:.2,.5,U.k===1?.9:.5])}let mh={impBody:fn.imp,impHorn:fn.imp*2,impEye:fn.imp*2,impWing:fn.imp*2,bruBody:fn.bru,bruArm:fn.bru*2,bruHorn:fn.bru*2,bruEye:fn.bru*2,wrBody:fn.wr,wrHood:fn.wr,wrEye:fn.wr*2,eShadow:fn.sh};if(f)for(let U of Object.keys(mh))mh[U]=U==="eShadow"?fn.sh:0;for(let U of Object.keys(ue)){let q=ue[U];q.count=mh[U],q.instanceMatrix.needsUpdate=!0,q.instanceColor&&(q.instanceColor.needsUpdate=!0)}if(An.size>200)for(let[U,q]of An)R-q.seen>3&&An.delete(U);for(let[U,q]of Object.entries(ye)){let ot=fi&&E.bo&&E.bo.id===U||ae.id===U&&R-ae.dieT<1.6;if(q.g.visible=!!ot,!ot)continue;ae.id!==U&&(ae.id=U,ae.born=R,ae.dieT=-9,ae.x=fi?fi.x:0,ae.z=fi?fi.z:-30);let It=R-ae.dieT<1.6;fi&&!It&&(ae.x+=(fi.x-ae.x)*Math.min(1,P*6),ae.z+=(fi.z-ae.z)*Math.min(1,P*6));let Ft=Math.min(1,(R-ae.born)/1.6),Cn=Math.max(0,1-(R-ae.atkT)/.8),dt=It?Math.min(1,(R-ae.dieT)/1.5):0;q.g.position.set(ae.x+(It?(Math.random()-.5)*.3:0),(Ft-1)*6-dt*3+(U==="mastermind"?.6+Math.sin(R*1.4)*.3:0),ae.z),q.g.rotation.set(dt*.4,Math.sin(R*.6)*.2,0);let cn=U==="mastermind"?1.85:U==="scientist2"?1.75:1.5;q.g.scale.setScalar(cn*(1+Cn*.08)*(1-dt*.5));let di=Math.max(0,1-(R-ae.hitT)/.15);for(let[dn,Cs]of q.mats)dn.emissive.copy(Cs).lerp(ss,di*.6);if(q.actor){let dn=q.actor;It?(dn.state!=="die"&&dn.state!=="dead"&&dn.play("die",R),R>=dn.until&&dn.play("dead",R)):(dn.play("combat",R),R-ae.atkT<.05?dn.play(U==="mastermind"?"summon":"cast",R):di>.9&&R>=dn.until&&dn.play("hit",R,{speed:1.5})),q.amat&&q.amat.emissive&&q.amat.emissive.setRGB(di*.5,di*.4,di*.5),$l(f,dn,P,R)}let wt=q.P;wt.armL&&(wt.armL.rotation.z=-.3-Cn*1.2+Math.sin(R*2)*.1,wt.armR.rotation.z=.3+Cn*1.4-Math.sin(R*2)*.1,wt.armR.rotation.x=-Cn*1.2),wt.book&&(wt.book.position.y=2.6+Math.sin(R*2)*.15,wt.book.rotation.y=R*.8,wt.stone.position.set(Math.cos(R*1.5)*1.3,3.2+Math.sin(R*3)*.3,Math.sin(R*1.5)*.9+.3),wt.stone.rotation.y=R*3),wt.wings&&wt.wings.forEach((dn,Cs)=>{dn.rotation.z=(Cs?1:-1)*(1+Math.sin(R*3)*.15)}),wt.souls&&wt.souls.forEach((dn,Cs)=>{let nr=R*1.2+Cs/6*ki;dn.position.set(Math.cos(nr)*1.9,3.4+Math.sin(R*2+Cs)*.5,Math.sin(nr)*1.2)}),wt.orb&&wt.orb.scale.setScalar(.42*(1+Cn*.8+Math.sin(R*6)*.05)),wt.cape&&(wt.cape.rotation.x=.12+Math.sin(R*1.8)*.08);let tr=q.top;Ot.push([q.g.position.x,q.g.position.y+tr*.5,ae.z-.5,q.aura[0],q.aura[1],q.aura[2],.3+Cn*.4,7+Cn*4]),Math.random()<P*14*At&&ft(pe,1,ae.x+(Math.random()-.5)*3,Math.random()*tr*.7,ae.z,{color:U==="scientist"?11559167:16724064,up:1,speed:1.2,g:-2.5,life:1,size:.5}),It&&Math.random()<P*30&&ft(pe,3,ae.x+(Math.random()-.5)*4,Math.random()*tr,ae.z,{colors:[16777215,16765773,12607743],speed:6,g:2,life:.8,size:.7}),fi&&ve.set(fi.id,{x:ae.x,y:tr*.55,z:ae.z,k:3})}let zf=new Set;for(let U of E.allies)if(U.k===0){let q=k.find(Ft=>Ft.id===U.id)||k.find(Ft=>!Ft.id);if(!q)continue;q.id!==U.id&&(q.id=U.id,q.born=R,q.x=U.x,q.z=U.z,ft(pe,30,U.x,1.5,U.z,{colors:[16769152,16777215],speed:6,up:.6,g:3,life:.7,size:.5}),ge(U.x,.1,U.z,16765773,4,.7),He(U.x,0,U.z,U.x,30,U.z,16769152,1.2,.6)),zf.add(q);let ot=Math.hypot(U.x-q.x,U.z-q.z)/Math.max(P,.001);q.x=U.x,q.z=U.z;let It=Math.min(1,(R-q.born)/.4);q.g.visible=!0,q.g.position.set(U.x,ot>.3?Math.abs(Math.sin(R*10))*.15:0,U.z),q.g.rotation.y=Math.PI,q.g.scale.setScalar(1.25*It),q.arm.rotation.x=-Math.max(0,1-(R-q.atk)/.3)*2.2+.3,q.actor&&(q.actor.play(ot>.3?"run":"combat",R),R-q.atk<.05&&q.actor.play("slash",R),$l(f,q.actor,P,R)),Ot.push([U.x,1.6,U.z,1,.82,.35,.55,4.5])}else{let q=se;q.id!==U.id&&(q.id=U.id,q.born=R,q.px=U.x,q.pz=U.z,ge(0,.2,0,16738858,10,1),St=Math.max(St,.8));let ot=(U.x-q.px)/Math.max(P,.001),It=(U.z-q.pz)/Math.max(P,.001);q.px=U.x,q.pz=U.z;let Ft=Math.min(1,(R-q.born)/1.2);q.g.visible=!0,q.g.position.set(U.x,9.5+(1-Ft)*12+Math.sin(R*2)*.5,U.z),Math.hypot(ot,It)>.1&&(q.g.rotation.y=Math.atan2(ot,It)),q.g.rotation.z=Math.sin(R*1.3)*.15,q.wings[0].rotation.z=Math.sin(R*6)*.6,q.wings[1].rotation.z=-Math.sin(R*6)*.6,q.jaw.rotation.x=.25+Math.sin(R*8)*.15,q.g.updateMatrixWorld(),$.set(0,0,1.2).applyMatrix4(q.head.matrixWorld);let Cn=U.x+Math.sin(q.g.rotation.y)*2,dt=U.z+Math.cos(q.g.rotation.y)*2+3;Ft>=1&&ft(pe,3,$.x,$.y,$.z,{colors:[16764992,16738848,16722448],speed:1,vx:(Cn-$.x)*1.4,vz:(dt-$.z)*1.4,up:-.9,vyMul:1,g:6,life:.7,size:.9,size1:1.6,drag:.5}),Ot.push([U.x,q.g.position.y,U.z,1,.5,.2,.6,9])}for(let U of k)zf.has(U)||(U.g.visible&&ft(pe,16,U.x,1.4,U.z,{color:16769152,speed:4,g:-1,life:.6,size:.4}),U.g.visible=!1,U.id=0);se.g.visible&&!E.allies.some(U=>U.k===1)&&(se.g.visible=!1,se.id=0,ft(pe,30,se.px,9,se.pz,{colors:[16764992,16738848],speed:7,g:0,life:.8,size:.6}));for(let U=Ie.length-1;U>=0;U--){let q=Ie[U],ot=(R-q.t0)/q.dur,It=ve.get(q.to);if(It&&(q.last=It),ot>=1){let di=Ta[q.c]||Ta.v;ft(pe,q.c==="m"?9:4,q.last.x,q.last.y,q.last.z,{colors:di,speed:q.c==="m"?5:3,g:2,life:.35,size:q.c==="m"?.55:.35}),q.c==="m"&&ge(q.last.x,.15,q.last.z,12611839,1.9,.35),Ie.splice(U,1);continue}let Ft=q.sx+(q.last.x-q.sx)*ot,Cn=q.sz+(q.last.z-q.sz)*ot,dt=q.sy+(q.last.y-q.sy)*ot+Math.sin(ot*Math.PI)*q.arc,cn=q.col;Ot.push([Ft,dt,Cn,cn.r,cn.g,cn.b,1,q.c==="m"?1.3:q.c==="v"?1:.7]),(q.c!=="a"||Math.random()<.5)&&ft(pe,1,Ft,dt,Cn,{color:q.c==="m"?16747066:(Ta[q.c]||Ta.v)[0],speed:.3,g:0,life:.25,size:q.c==="m"?.6:.35})}for(let U=0;U<xe.length;U++){let q=xe[U];q.t+=P;let ot=q.t/q.life;if(ot>=1){xe.splice(U--,1);continue}let It=.3+q.r1*(1-Math.pow(1-ot,3));_e.setMatrixAt(U,Ye.compose($.set(q.x,q.y,q.z),Me.identity(),Be.set(It,1,It))),_e.setColorAt(U,Re.setHex(q.col).multiplyScalar(1-ot))}_e.count=xe.length,_e.instanceMatrix.needsUpdate=!0,_e.instanceColor&&(_e.instanceColor.needsUpdate=!0);for(let U=0;U<be.length;U++){let q=be[U];q.t+=P;let ot=q.t/q.life;if(ot>=1){be.splice(U--,1);continue}let It=q.a.distanceTo(q.b);$.copy(q.a).add(q.b).multiplyScalar(.5),Me.setFromUnitVectors(Ko,jo.copy(q.b).sub(q.a).normalize());let Ft=q.w*(ot<.2?ot/.2:1-(ot-.2)/.8);Ke.setMatrixAt(U,Ye.compose($,Me,Be.set(Ft,It,Ft))),Ke.setColorAt(U,Re.setHex(q.col).multiplyScalar(.8*(1-ot)*(1-ot*.3)))}if(Ke.count=be.length,Ke.instanceMatrix.needsUpdate=!0,Ke.instanceColor&&(Ke.instanceColor.needsUpdate=!0),H){let U=R-Yn.t0;if(Yn.saved){if(Math.random()<P*3&&U<14){let q=(Math.random()-.5)*24,ot=10+Math.random()*8,It=-8-Math.random()*14;ft(pe,40,q,ot,It,{colors:[[16765773,16739029,8384767,8257418][Math.random()*4|0],16777215],speed:7,up:0,spreadUp:1,vyMul:1,g:3,drag:1.2,life:1.3,size:.45})}Math.random()<P*30*At&&ft(ht,1,(Math.random()-.5)*16,12,-2+Math.random()*8,{colors:[16731530,16765773,5097215,8257418,13073919],up:0,speed:1,g:2.5,drag:1.4,life:4,size:.35,confetti:!0}),Ot.push([0,20,-60,1,.75,.45,me*.8,70])}else Math.random()<P*20*At&&ft(pe,1,(Math.random()-.5)*24,Math.random()*3,-20+Math.random()*24,{colors:[16722490,10100991],up:1,speed:2,g:-3,life:1.6,size:.8}),Math.random()<P*2&&(St=Math.max(St,.5))}is.material.uniforms.time.value=R,is.visible=ui.dust,Fr(pe,P,Ot),Fr(ht,P,null),t.render(n,r)}function kr(E){let P=Pa;switch(E.k){case"shot":{let R=ve.get(E.e);if(!R)break;if(E.c==="w"||E.c==="g"){if(ft(pe,4,R.x,R.y+.3,R.z+.4,{colors:[16777215,E.c==="g"?16765773:16747114],speed:4,g:2,life:.25,size:.35}),E.c==="w"){let j=Kt.get(E.s);j&&(j.atk=P)}else{let j=k.find(Ge=>Ge.id===-E.s);j&&(j.atk=P),ge(R.x,.1,R.z,16765773,2.4,.3)}let re=An.get(E.e);re&&(re.hit=P);break}if(Ie.length>=Te)break;let H,me,ce,de=E.s?Kt.get(E.s):null;de?(H=de.x,me=de.y+1.4,ce=de.z,de.atk=P):(H=(Math.random()-.5)*14,me=kn+3,ce=Rr),Ie.push({sx:H,sy:me,sz:ce,to:E.e,last:R,t0:P,dur:Math.max(.12,E.d||.3),c:E.c,col:new Ce((Ta[E.c]||Ta.v)[0]),arc:E.c==="m"?1.6:E.c==="v"?2.4:.4});break}case"dmg":{let R=An.get(E.e);R?R.hit=P:ve.get(E.e)?.k===3&&(ae.hitT=P),E.c===2&&(St=Math.max(St,.35));break}case"kill":{let R=E.q===2?3.2:.8;ft(pe,E.q===1?14:8,E.x,R,E.z,{colors:[12607743,16726634,16777215],speed:4.5,g:3,life:.5,size:.45}),ft(ht,E.q===1?8:4,E.x,R,E.z,{color:1706528,speed:2.5,up:.8,g:-1,life:.9,size:.6,alpha:.7}),An.delete(E.e);break}case"heal":{let R=Kt.get(E.s),H=Kt.get(E.t);R&&H&&(He(R.x,R.y+1.4,R.z,H.x,H.y+1,H.z,6160282,.08,.4),ft(pe,6,H.x,H.y+1,H.z,{color:8257448,up:1,speed:1.5,g:-2,life:.6,size:.3}));break}case"down":{let R=Kt.get(E.id);R&&ft(pe,8,R.x,R.y+.6,R.z,{color:16728160,speed:3,life:.4,size:.35});break}case"rise":{let R=Kt.get(E.id);R&&(ft(pe,10,R.x,R.y+.5,R.z,{color:8257448,up:1,speed:2,g:-2,life:.6,size:.35}),He(R.x,R.y,R.z,R.x,R.y+6,R.z,8257448,.25,.5));break}case"wallhit":ft(pe,10,E.x,1.2,Vt-.2,{colors:[16726586,16752704],speed:4,g:4,life:.4,size:.4}),ft(ht,5,E.x,1,Vt-.2,{color:6971e3,speed:3,up:.5,g:9,life:.8,size:.3}),St=Math.max(St,.25+Math.min(.4,(E.d||1)*.1)),rs=P;break;case"block":Bi=P,ft(pe,6,E.x,2.5,Vt-1.2,{color:8050943,speed:3,life:.35,size:.4});break;case"toll":St=Math.max(St,1.2),rs=P;break;case"boss":St=Math.max(St,1),ge(0,.2,nn+4,16726634,14,1.2);break;case"bossatk":{ae.atkT=P;let R=ae.x,H=ae.z,me=ye[ae.id]?.top||8;if(E.kind==="summon"){ge(R,.2,H,11550975,7,.9),ft(pe,30,R,1,H,{colors:[11550975,16726634],speed:6,up:.4,g:2,life:.8,size:.6});break}E.kind==="beam"?He(R,me*.6,H+1,E.x,E.blocked?3.2:1.5,E.blocked?Vt-1.4:Vt,E.blocked?8050943:16722522,.55,.7):(ge(R,.15,H,16726634,16,.9),ft(ht,20,R,.3,H,{color:4864600,speed:6,up:.6,g:12,life:.9,size:.5})),E.blocked?Bi=P:rs=P,St=Math.max(St,E.blocked?.5:1),ft(pe,18,E.x,2,Vt-.5,{colors:E.blocked?[8050943,16777215]:[16722522,16752704],speed:6,g:3,life:.5,size:.6});break}case"bossdown":case"retreat":ae.dieT=P,St=Math.max(St,1.4),rs=P,ge(ae.x,.2,ae.z,16765773,16,1.2),He(ae.x,0,ae.z,ae.x,40,ae.z,E.k==="bossdown"?16769152:11550975,2.4,1.2);break;case"ult":{Ia=P,St=Math.max(St,1.1),rs=P;let R=0;for(let[,H]of ve){if(R++>9)break;He(H.x,0,H.z,H.x,30,H.z,E.p<1?8050943:16769152,.9,.7),ft(pe,6,H.x,.5,H.z,{colors:[16777215,16769152],speed:5,g:2,life:.5,size:.6})}ge(0,.2,-10,16769152,20,1);break}case"pulse":Bi=P,ge(0,kn,Vt,8050943,14,.9);break;case"volley":{let R=Kt.get(E.id);R&&(ge(R.x,R.y+.1,R.z,16765773,1.6,.5),ft(pe,12,R.x,R.y+1.2,R.z,{colors:[16765773,16739029],up:1,speed:3,g:1,life:.6,size:.4}));break}case"gift":{let R=Kt.get(E.id);R&&ft(pe,14,R.x,R.y+1,R.z,{colors:[16739029,16765773,8384767],up:1,speed:3.5,g:2,life:.7,size:.4}),E.tier==="rune"&&(Bi=P,ge(0,kn,Vt+.5,8050943,12,.8)),E.tier==="awaken"&&R&&He(R.x,R.y,R.z,R.x,30,R.z,16769152,.7,1);break}case"bless":{let R=Kt.get(E.id);R&&He(R.x,R.y,R.z,R.x,25,R.z,E.why==="share"?8050943:16773280,.35,.8),E.why==="share"&&(Bi=P);break}case"class":{let R=Kt.get(E.id);R&&(ge(R.x,R.y+.1,R.z,Ql[E.c]||16777215,1.2,.4),ft(pe,8,R.x,R.y+.8,R.z,{color:Ql[E.c]||16777215,up:1,speed:2,g:-1,life:.5,size:.3}));break}case"join":{let R=Kt.get(E.id);R&&ft(pe,6,R.x,R.y+.6,R.z,{color:16777215,speed:2,life:.4,size:.3});break}case"wave":ge(0,.2,nn+3,11550975,10,1);break;case"chapter":St=Math.max(St,.6),ge(0,.2,nn+3,16726634,18,1.4);break;case"end":Yn={saved:!!E.saved,t0:P},St=Math.max(St,1.2),rs=P;break;case"intro":case"gather":Yn=null,Ie.length=0;break}}let Ti=390,zi=844,at=new B,en=(E,P,R)=>(at.set(E,P,R).project(r),{x:(at.x*.5+.5)*Ti,y:(-at.y*.5+.5)*zi,vis:at.z<1&&at.z>-1});return{kind:"webgl",renderer:t,ready:m,scene:n,get loaded(){return!!f},get error(){return b},resize(E,P,R){Ti=E,zi=P,t.setPixelRatio(R),t.setSize(E,P,!1),r.aspect=E/P,r.fov=E/P<.7?52:42,r.updateProjectionMatrix(),pe.mat.uniforms.px.value=ht.mat.uniforms.px.value=P*R*.9,is.material.uniforms.px.value=P*R*.5},setQuality(E){ui=E,At=E.particles},frame:Rn,fx:kr,project:en,enemyTop(E){let P=ve.get(E);return P?en(P.x,P.y+(P.k===1?1.4:P.k===3?0:.8),P.z):null},bossTop(){let E=ye[ae.id];return!E||!E.g.visible?null:en(ae.x,E.top+.5,ae.z)},riftAt(){return en(0,Aa,nn)},drawn:()=>X,shake(E){St=Math.max(St,E)},stats(){let E=t.info;return{calls:E.render.calls,tris:E.render.triangles,tex:E.memory.textures,geo:E.memory.geometries,chars:f?[...Kt.values()].filter(P=>P.a).length:Fe.body.count,loaded:!!f,enemies:f?nt.reduce((P,R)=>P+[...R.run,...R.atk].reduce((H,me)=>H+me.count,0),0):ue.impBody.count+ue.bruBody.count+ue.wrBody.count,parts:pe.list.length+ht.list.length,bolts:Ie.length}},dispose(){p=!0,n.traverse(E=>{E.isInstancedMesh&&E.dispose()});for(let E of a)E.dispose?.();u&&u.dispose(),f&&f.dispose(),t.dispose()},loseContext(){try{t.forceContextLoss()}catch{}}}}var bm=s=>"#"+(s>>>0).toString(16).padStart(6,"0"),gy=["#d02a3a","#6a4a8a","#9a5aff"];function xm(s){let e=s.getContext("2d"),t=390,n=844,i=1,r=0,a=0,o=-9,c=null,l=null,h=[],d=new Map,f=[],u=_=>Math.max(0,Math.min(1,(_-nn+2)/(6-nn+2))),p=_=>.35+.65*u(_),b=(_,T)=>t/2+_*(t/24)*p(T),m=(_,T)=>n*.2+u(T)*n*.42-_*n*.018*p(T),g=(_,T,y)=>({x:b(_,y),y:m(T,y),vis:!0});function v(_,T,y){r=y,h.length=0,d.clear(),l=null,e.setTransform(i,0,0,i,0,0);let x=a>0?(a-=T,(Math.random()-.5)*10*a):0;e.translate(x,0);let S=_.phase==="ending"&&c===!0,D=_.phase==="ending"&&c===!1,L=e.createLinearGradient(0,0,0,n*.6);if(L.addColorStop(0,S?"#5a7ad8":"#08051a"),L.addColorStop(1,S?"#ffb070":D?"#5a0a14":"#3a1240"),e.fillStyle=L,e.fillRect(-10,0,t+20,n),!S){let z=b(0,nn),le=m(7.5,nn),Y=t*.16*(1+.05*Math.sin(y*3)),Q=e.createRadialGradient(z,le,Y*.2,z,le,Y*1.6);Q.addColorStop(0,"#1a0020"),Q.addColorStop(.45,"#b040ff"),Q.addColorStop(.7,"rgba(255,40,90,0.5)"),Q.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=Q,e.beginPath(),e.ellipse(z,le,Y*1.6,Y*2,0,0,Math.PI*2),e.fill()}let F=m(0,nn),C=e.createLinearGradient(0,F,0,n);C.addColorStop(0,"#2a1a34"),C.addColorStop(1,"#120a18"),e.fillStyle=C,e.fillRect(-10,F,t+20,n),e.fillStyle="#1a1424";for(let z=0;z<10;z++){let le=-40+z*4.2;for(let Y of[-1,1]){let Q=Y*(11+z%3*4),he=5+z*7%9;e.fillRect(b(Q,le)-14*p(le),m(he,le),28*p(le),m(0,le)-m(he,le))}}let V=[..._.enemies].sort((z,le)=>z.z-le.z);for(let z of V){let le=p(z.z),Y=b(z.x,z.z),Q=m(z.k===2?3.2:0,z.z),he=(z.k===1?16:z.k===3?44:9)*le;e.fillStyle=z.k===3?_.bo&&_.bo.id==="mastermind"?"#2a1030":"#e8e4ee":gy[z.k],e.beginPath(),e.ellipse(Y,Q-he,he,he*1.2,0,0,Math.PI*2),e.fill(),e.fillStyle=z.k===3?"#ff2a4a":"#ffe14a",e.fillRect(Y-he*.4,Q-he*1.3,he*.22,he*.15),e.fillRect(Y+he*.2,Q-he*1.3,he*.22,he*.15),d.set(z.id,{x:Y,y:Q-he*2.2}),z.k===3&&(l={x:Y,y:Q-he*2.6,vis:!0})}let N=m(kn,Mi),J=m(0,Mi);e.fillStyle="#5a5068",e.fillRect(-10,N,t+20,J-N+n*.08),e.fillStyle="#7a6e8a";for(let z=0;z<14;z++)e.fillRect(z*t/13-6,N-10,16,10);let te=Math.max(0,Math.min(100,_.bar||0))/100;te>.02&&(e.strokeStyle=`rgba(110,200,255,${.25+te*.6})`,e.lineWidth=4,e.beginPath(),e.ellipse(t/2,J,t*.52,n*.16,0,Math.PI,0),e.stroke());for(let z of _.members){let le=b(z.x,z.z),Y=z.z<Mi-.1?m(0,z.z):N+4,Q=9*p(z.z);e.fillStyle=z.flags&Rt.down?"#555":bm(z.info?.color??16777215),e.beginPath(),e.arc(le,Y-Q,Q,0,Math.PI*2),e.fill(),e.fillStyle=bm($i[z.cls]?.color??16777215),e.fillRect(le-Q*.5,Y-Q*2.6,Q,Q*.6),z.flags&Rt.asc&&(e.strokeStyle="#ffd34d",e.lineWidth=2,e.beginPath(),e.arc(le,Y-Q,Q*1.6,0,Math.PI*2),e.stroke()),h.push({id:z.id,x:z.x,y:0,z:z.z,sx:le,sy:Y-Q*3,info:z.info,flags:z.flags,cls:z.cls,hp:z.hp})}for(let z of _.allies){let le=b(z.x,z.z),Y=z.k?n*.22+Math.sin(y*2)*6:m(0,z.z);e.font=`${z.k?46:28}px sans-serif`,e.textAlign="center",e.fillText(z.k?"\u{1F409}":"\u{1F6E1}\uFE0F",le,Y)}for(let z=f.length-1;z>=0;z--){let le=f[z],Y=(y-le.t)/.4;if(Y>1){f.splice(z,1);continue}e.fillStyle=`rgba(${le.c},${1-Y})`,e.beginPath(),e.arc(le.x,le.y,6+Y*18,0,Math.PI*2),e.fill()}y-o<.2&&(e.fillStyle=`rgba(255,255,255,${.35*(1-(y-o)/.2)})`,e.fillRect(0,0,t,n))}function M(_){if(_.k==="kill"){let T=g(_.x,.6,_.z);f.push({x:T.x,y:T.y,t:r,c:"200,90,255"})}(_.k==="wallhit"||_.k==="toll"||_.k==="bossatk")&&(a=Math.max(a,.5)),(_.k==="ult"||_.k==="bossdown"||_.k==="end")&&(o=r,a=Math.max(a,.6)),_.k==="end"&&(c=!!_.saved),(_.k==="intro"||_.k==="gather")&&(c=null)}return{kind:"2d",resize(_,T,y){t=_,n=T,i=Math.min(y,1.5),s.width=Math.round(_*i),s.height=Math.round(T*i),s.style.width=_+"px",s.style.height=T+"px"},setQuality(){},frame:v,fx:M,project:(_,T,y)=>{let x=h.find(S=>S.x===_&&S.z===y);return x?{x:x.sx,y:x.sy,vis:!0}:g(_,T,y)},enemyTop(_){let T=d.get(_);return T?{...T,vis:!0}:null},bossTop:()=>l,riftAt:()=>g(0,7.5,nn),drawn:()=>h,shake(_){a=Math.max(a,_)},stats:()=>({kind:"2d",chars:h.length,enemies:d.size}),dispose(){}}}function _m({silenceUrl:s="/assets/silence.mp3",record:e=!1}={}){let t={ctx:null,master:null,sfxGain:null,voiceGain:null,unlocked:!1,played:0,fails:0,cues:[],record:e,last:{},speakingUntil:0,muted:!1};try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}let n=new Audio;n.setAttribute("playsinline",""),n.preload="auto";function i(){if(t.ctx||e)return t.ctx;let u=window.AudioContext||window.webkitAudioContext;if(!u)return null;try{t.ctx=new u}catch{return null}return r(t.ctx,t.ctx.destination,t),t.ctx}function r(u,p,b){let m=u.createDynamicsCompressor();m.threshold.value=-14,m.ratio.value=6,m.attack.value=.003,m.release.value=.2,b.master=u.createGain(),b.master.gain.value=.9,b.sfxGain=u.createGain(),b.sfxGain.gain.value=.55,b.voiceGain=u.createGain(),b.voiceGain.gain.value=1,b.sfxGain.connect(b.master),b.voiceGain.connect(b.master),b.master.connect(m),m.connect(p)}t.unlock=()=>{let u=i();if(u){try{u.resume();let p=u.createBuffer(1,1,22050),b=u.createBufferSource();b.buffer=p,b.connect(u.destination),b.start(0)}catch{}t.elUnlocked||(n.src=s,n.play().then(()=>{n.pause(),t.elUnlocked=!0}).catch(()=>{})),t.unlocked=u.state==="running",setTimeout(()=>{t.unlocked=u.state==="running",t.onstate&&t.onstate(t.unlocked)},120)}},t.resume=()=>{t.ctx&&t.ctx.state!=="running"&&t.ctx.resume().catch(()=>{})},t.state=()=>e?"record":t.ctx?t.ctx.state:"none";let a=u=>{if(u.__noise)return u.__noise;let p=u.sampleRate,b=u.createBuffer(1,p,p),m=b.getChannelData(0),g=1;for(let v=0;v<p;v++)g=g*16807%2147483647,m[v]=g/10737418235e-1-1;return u.__noise=b,b};function o(u,p,b,m,g,v){p.gain.setValueAtTime(1e-4,b),p.gain.exponentialRampToValueAtTime(g,b+m),p.gain.exponentialRampToValueAtTime(1e-4,b+m+v)}function c(u,p,b,{type:m="sine",f0:g=440,f1:v=g,a:M=.005,d:_=.2,peak:T=.3,det:y=0}){let x=u.createOscillator(),S=u.createGain();x.type=m,x.frequency.setValueAtTime(g,b),v!==g&&x.frequency.exponentialRampToValueAtTime(Math.max(20,v),b+M+_),x.detune.value=y,o(u,S,b,M,T,_),x.connect(S).connect(p),x.start(b),x.stop(b+M+_+.05)}function l(u,p,b,{type:m="lowpass",f0:g=1e3,f1:v=g,q:M=.7,a:_=.003,d:T=.15,peak:y=.4}){let x=u.createBufferSource(),S=u.createBiquadFilter(),D=u.createGain();x.buffer=a(u),S.type=m,S.Q.value=M,S.frequency.setValueAtTime(g,b),v!==g&&S.frequency.exponentialRampToValueAtTime(Math.max(30,v),b+_+T),o(u,D,b,_,y,T),x.connect(S).connect(D).connect(p),x.start(b,Math.random()*.5),x.stop(b+_+T+.05)}let h={punch:(u,p,b,m=1)=>{l(u,p,b,{f0:1400,f1:300,d:.08,peak:.5*m}),c(u,p,b,{f0:150,f1:55,d:.1,peak:.55*m})},crit:(u,p,b)=>{h.punch(u,p,b,1.2),c(u,p,b,{type:"square",f0:1800,f1:900,d:.06,peak:.12}),l(u,p,b+.01,{type:"highpass",f0:3e3,d:.12,peak:.25})},block:(u,p,b)=>{c(u,p,b,{type:"triangle",f0:1200,f1:1100,d:.18,peak:.18}),c(u,p,b,{type:"triangle",f0:1810,d:.14,peak:.1})},ko:(u,p,b)=>{c(u,p,b,{type:"sine",f0:260,f1:980,a:.005,d:.16,peak:.35}),l(u,p,b,{type:"bandpass",f0:2500,f1:600,q:1.2,d:.25,peak:.35}),c(u,p,b+.09,{type:"triangle",f0:1320,d:.2,peak:.12})},dash:(u,p,b)=>{l(u,p,b,{type:"bandpass",f0:500,f1:3500,q:2,a:.04,d:.22,peak:.45})},shield:(u,p,b)=>{[880,1320,1760].forEach((m,g)=>c(u,p,b+g*.03,{type:"sine",f0:m,d:.45,peak:.09}))},boom:(u,p,b,m=1)=>{l(u,p,b,{f0:900,f1:80,a:.004,d:.9,peak:.8*m}),c(u,p,b,{f0:90,f1:28,d:.8,peak:.8*m})},whistle:(u,p,b)=>{c(u,p,b,{type:"sine",f0:1900,f1:500,a:.05,d:.95,peak:.07})},coin:(u,p,b)=>{c(u,p,b,{type:"square",f0:988,d:.07,peak:.1}),c(u,p,b+.07,{type:"square",f0:1319,d:.28,peak:.1})},power:(u,p,b)=>{[523,659,784,1047].forEach((m,g)=>c(u,p,b+g*.05,{type:"triangle",f0:m,d:.3,peak:.14})),l(u,p,b,{type:"highpass",f0:2e3,f1:6e3,a:.1,d:.4,peak:.12})},heal:(u,p,b)=>{[660,880,1100].forEach((m,g)=>c(u,p,b+g*.06,{f0:m,d:.25,peak:.08}))},beep:(u,p,b)=>{c(u,p,b,{f0:880,d:.12,peak:.22})},go:(u,p,b)=>{c(u,p,b,{type:"sawtooth",f0:660,d:.5,peak:.12}),c(u,p,b,{type:"square",f0:1320,d:.5,peak:.08}),l(u,p,b,{f0:4e3,f1:500,d:.4,peak:.25})},land:(u,p,b)=>{c(u,p,b,{f0:120,f1:50,d:.12,peak:.3}),l(u,p,b,{f0:600,d:.1,peak:.15})},spin:(u,p,b)=>{l(u,p,b,{type:"bandpass",f0:300,f1:2400,q:3,a:.08,d:.35,peak:.5}),h.punch(u,p,b+.25,1.1)},cheer:(u,p,b)=>{l(u,p,b,{type:"bandpass",f0:1200,f1:1500,q:.6,a:.25,d:2.2,peak:.35}),l(u,p,b+.1,{type:"bandpass",f0:2600,f1:2200,q:.8,a:.3,d:2,peak:.18})},fanfare:(u,p,b)=>{[[523,0],[659,.12],[784,.24],[1047,.38],[784,.6],[1047,.72]].forEach(([m,g],v)=>{c(u,p,b+g,{type:"sawtooth",f0:m,d:v===5?.9:.16,peak:.07}),c(u,p,b+g,{type:"triangle",f0:m*2,d:v===5?.9:.16,peak:.05})}),h.cheer(u,p,b+.2)},nuke:(u,p,b)=>{h.boom(u,p,b,1.3),h.boom(u,p,b+.25,1),c(u,p,b,{type:"sawtooth",f0:220,f1:40,d:1.6,peak:.25})},pop:(u,p,b)=>{c(u,p,b,{f0:500,f1:1400,d:.07,peak:.15})},creak:(u,p,b)=>{c(u,p,b,{type:"sawtooth",f0:95,f1:140,a:.08,d:.7,peak:.07,det:8}),c(u,p,b+.05,{type:"square",f0:190,f1:120,a:.1,d:.6,peak:.03}),l(u,p,b,{type:"bandpass",f0:900,f1:500,q:6,a:.1,d:.6,peak:.12})},ghost:(u,p,b)=>{c(u,p,b,{type:"sine",f0:520,f1:760,a:.25,d:.9,peak:.08,det:15}),c(u,p,b+.1,{type:"sine",f0:780,f1:500,a:.3,d:.9,peak:.05})},thunder:(u,p,b)=>{l(u,p,b,{f0:500,f1:60,a:.02,d:1.8,peak:.6}),l(u,p,b+.15,{f0:250,f1:50,a:.1,d:1.6,peak:.45})},bell:(u,p,b)=>{[[110,.25],[220,.12],[277,.07],[330,.06],[440,.04]].forEach(([m,g])=>c(u,p,b,{type:"sine",f0:m,a:.004,d:2.6,peak:g}))},organ:(u,p,b)=>{[[147,0],[175,0],[220,0],[294,.02],[131,.6],[165,.6],[196,.6],[262,.62]].forEach(([m,g])=>{c(u,p,b+g,{type:"sawtooth",f0:m,a:.04,d:g?.9:.55,peak:.035}),c(u,p,b+g,{type:"triangle",f0:m*2,a:.04,d:g?.9:.55,peak:.03})})},heart:(u,p,b)=>{c(u,p,b,{f0:70,f1:45,d:.12,peak:.45}),c(u,p,b+.17,{f0:62,f1:40,d:.14,peak:.35})},chime:(u,p,b)=>{[1319,1568,1976,2637].forEach((m,g)=>c(u,p,b+g*.07,{type:"sine",f0:m,d:.6,peak:.07}))},trap:(u,p,b)=>{l(u,p,b,{type:"bandpass",f0:3e3,f1:300,q:1.5,a:.01,d:.35,peak:.4}),h.boom(u,p,b+.22,.7)},shatter:(u,p,b)=>{for(let m=0;m<6;m++)c(u,p,b+m*.035,{type:"triangle",f0:2200+m*430,f1:1800,d:.12,peak:.06});l(u,p,b,{type:"highpass",f0:4e3,d:.4,peak:.3})},wind:(u,p,b)=>{l(u,p,b,{type:"bandpass",f0:380,f1:700,q:4,a:.9,d:2.2,peak:.12})},squeak:(u,p,b)=>{c(u,p,b,{type:"triangle",f0:900,f1:1300,d:.08,peak:.07})},roar:(u,p,b)=>{c(u,p,b,{type:"sawtooth",f0:120,f1:60,a:.05,d:.9,peak:.16,det:20}),l(u,p,b,{type:"lowpass",f0:1200,f1:300,a:.05,d:.9,peak:.35})}},d={squeak:.06,ghost:.25,heart:.3,punch:.045,crit:.06,block:.08,ko:.08,heal:.15,land:.06,pop:.05,coin:.05,boom:.06};t.sfx=(u,p=t.now(),b=1)=>{if(t.muted||!h[u])return;let m=d[u]||.03;if(t.last[u]&&p-t.last[u]<m)return;if(t.last[u]=p,e){t.cues.push({k:"sfx",kind:u,t:p,v:b});return}let g=t.ctx;if(!(!g||g.state!=="running"))try{h[u](g,t.sfxGain,g.currentTime+.01,b)}catch{}},t.now=()=>e?t.clock():t.ctx?t.ctx.currentTime:0,t.clock=()=>0;let f=null;return t.voice=async(u,p)=>{if(t.muted||!u)return!1;if(t.speakingUntil=t.now()+(p||2),e)return t.cues.push({k:"voice",url:u,t:t.now(),dur:p}),!0;let b=t.ctx;if(b&&b.state!=="running"&&t.resume(),b&&b.state==="running")try{let m=await fetch(u).then(_=>{if(!_.ok)throw new Error("HTTP "+_.status);return _.arrayBuffer()}),g=await new Promise((_,T)=>{let y=b.decodeAudioData(m,_,T);y&&y.catch&&y.catch(T)});if(f)try{f.stop()}catch{}let v=b.createBufferSource();v.buffer=g,v.connect(t.voiceGain);let M=b.currentTime+.02;return t.sfxGain.gain.setTargetAtTime(.28,M,.05),t.sfxGain.gain.setTargetAtTime(.55,M+g.duration,.2),v.start(M),f=v,t.played++,v.onended=()=>{f===v&&(f=null)},!0}catch{t.fails++}try{return n.src=u,await n.play(),t.played++,!0}catch{return t.fails++,!1}},t.mix=async(u,p=44100)=>{let b=window.OfflineAudioContext||window.webkitOfflineAudioContext,m=new b(2,Math.ceil(u*p),p),g={};r(m,m.destination,g);let v=t.cues.filter(C=>C.k==="voice"),M=await Promise.all(v.map(C=>fetch(C.url).then(V=>V.arrayBuffer()).then(V=>m.decodeAudioData(V)).catch(()=>null)));for(let C of t.cues)if(C.k==="sfx"&&C.t<u)try{h[C.kind](m,g.sfxGain,C.t+.01,C.v)}catch{}v.forEach((C,V)=>{let N=M[V];if(!N||C.t>=u)return;let J=m.createBufferSource();J.buffer=N,J.connect(g.voiceGain),J.start(C.t+.02),g.sfxGain.gain.setTargetAtTime(.28,C.t,.05),g.sfxGain.gain.setTargetAtTime(.55,C.t+N.duration,.2)});let _=await m.startRendering(),T=_.length,y=[_.getChannelData(0),_.getChannelData(1)],x=new DataView(new ArrayBuffer(44+T*4)),S=(C,V)=>{for(let N=0;N<V.length;N++)x.setUint8(C+N,V.charCodeAt(N))};S(0,"RIFF"),x.setUint32(4,36+T*4,!0),S(8,"WAVEfmt "),x.setUint32(16,16,!0),x.setUint16(20,1,!0),x.setUint16(22,2,!0),x.setUint32(24,p,!0),x.setUint32(28,p*4,!0),x.setUint16(32,4,!0),x.setUint16(34,16,!0),S(36,"data"),x.setUint32(40,T*4,!0);let D=44;for(let C=0;C<T;C++)for(let V=0;V<2;V++){let N=Math.max(-1,Math.min(1,y[V][C]));x.setInt16(D,N*32767,!0),D+=2}let L=new Uint8Array(x.buffer),F="";for(let C=0;C<L.length;C+=32768)F+=String.fromCharCode.apply(null,L.subarray(C,C+32768));return btoa(F)},t}function vm(s,{off:e=!1}={}){let t=Math.random().toString(36).slice(2,8),n=performance.now(),i=[];addEventListener("error",o=>{i.push(String(o.message||"error").slice(0,110)),i.length>3&&i.shift()}),addEventListener("unhandledrejection",o=>{i.push(("rej "+(o.reason&&o.reason.message||o.reason)).slice(0,110)),i.length>3&&i.shift()});let r=o=>{let c=s();return{id:t,reason:o,up:(performance.now()-n)/1e3,ua:navigator.userAgent.slice(0,160),scr:{w:screen.width,h:screen.height,dpr:devicePixelRatio},vis:document.visibilityState,errs:i.slice(),...c,mem:{...c.mem||{},heap:performance.memory?performance.memory.usedJSHeapSize/1048576:void 0}}},a=o=>{if(e)return;let c=r(o),l=JSON.stringify(c);if(o==="start")try{let h=JSON.parse(localStorage.getItem("lg_diagLast")||"null");h&&h.reason!=="pagehide"&&(l=JSON.stringify({...c,prev:h}))}catch{}try{localStorage.setItem("lg_diagLast",JSON.stringify(c))}catch{}try{navigator.sendBeacon&&navigator.sendBeacon("/diag",new Blob([l],{type:"text/plain"}))||fetch("/diag",{method:"POST",body:l,keepalive:!0}).catch(()=>{})}catch{}};return setTimeout(()=>a("start"),4e3),setInterval(()=>a("tick"),3e4),document.addEventListener("visibilitychange",()=>{document.hidden&&a("hidden")}),addEventListener("pagehide",()=>a("pagehide")),{send:a,errs:i}}var Ea=(s,e)=>s[Math.floor(e()*s.length)%s.length],Uo=s=>s>=1e9?`${(Math.floor(s/1e7)/100).toString()} billion`:s>=1e6?`${Math.round(s/1e6)} million`:`${Math.max(0,Math.round(s)).toLocaleString("en-US")}`,Sf=s=>(s.charAt(0)+s.slice(1).toLowerCase()).replace("mastermind","Mastermind"),Pr=[125e7,1e9,75e7,5e8,25e7,1e8],by={scientist:"He was a father once. Now the book speaks through him. The Corrupted Scientist... walks out of the rift!",scientist2:"The stone has fused with his heart. The Scientist... unbound! Hit him with everything!",mastermind:"At last. The one who stole five billion souls. The Mastermind... steps into the light!"},xy={scientist:"The Corrupted Scientist falls back into the dark. For a moment... he remembers his daughter.",scientist2:"The Scientist is broken! The stone cracks... and the rift screams.",mastermind:"The Mastermind is destroyed!"};function ym({nameOf:s,rng:e=Math.random,survivors:t=()=>15e8}){let n=[],i=0,r=0,a=(p,b,m,g={})=>({text:p,pri:b,banner:m||null,...g}),o={gather:["To defend the wall, comment mage, warrior, archer or healer. Or just comment anything to join.","Mages throw fire. Warriors hold the gate. Archers shoot the flying wraiths. Healers keep everyone alive.","Likes charge the Ascension barrier. Keep tapping the screen!","Gifts are power. Any small gift fires a spell volley. Five coins carves a shield rune. Thirty coins summons a golden guardian.","One hundred coins awakens the Ascension ultimate. Five hundred coins calls the dragon!","Follow for a blessing. Share the live and the fallen rise again."],fight:["Likes charge the barrier! Tap, tap, tap!","Comment a class to switch: mage, warrior, archer or healer.","Send a gift for a spell volley right now!","Every survivor counts. Do not let them reach the wall!"]},c="gather",l=-99,h=0,d={gather:0,fight:0},f={gather:[5,7],fight:[10,15]},u=p=>{let b=p.map(s).filter(Boolean);if(!b.length)return"";let m=b.slice(0,3),g=b.length-m.length;return(m.length===1?m[0]:m.slice(0,-1).join(", ")+" and "+m[m.length-1])+(g>0?` and ${g} more`:"")};return{lines(p,b){let m=[];for(let _ of p){let T=_.id?s(_.id):null,y={intro:"other",gather:"gather",wave:"fight",boss:"other",vote:"other",end:"other",clear:"fight"}[_.k];switch(y&&(c=y),_.k){case"intro":r=0;break;case"lore":m.push(a(Ni[_.i].say,10,null,{win:1,lore:_.i}));break;case"gather":m.push(a(Ea(["Survivors, to the wall! Comment mage, warrior, archer or healer to take your post.","The citadel needs you. Comment to join the defense. Pick a class: mage, warrior, archer, healer."],e),8,"TO THE WALL!",{win:1}));break;case"chapter":m.push(a(`Chapter ${_.n}. ${_.title.toLowerCase().replace(/(^|\s)\S/g,x=>x.toUpperCase())}.`,9,`CHAPTER ${_.n}`,{win:1}));break;case"wave":m.push(a(_.i===1?Ea(["They are coming. Hold the wall!","The rift opens wide. Here they come!"],e):Ea([`Wave ${_.n}. Stronger. Hungrier.`,`Wave ${_.n}! Keep firing!`,"Another wave pours out of the rift."],e),5,`WAVE ${_.n}`));break;case"clear":m.push(a(Ea(["The field is clear. Breathe.","Wave broken. Well fought, survivors.","They fall back. Ready yourselves."],e),4,"WAVE CLEARED"));break;case"boss":m.push(a(by[_.id]||`${_.name} has come!`,10,"BOSS!",{win:1}));break;case"bossatk":_.kind==="summon"?m.push(a("He calls more creatures from the rift!",5)):_.downed&&_.downed.length>2&&m.push(a(_.blocked?"The barrier holds against the blast!":"A dark blast hits the wall! Healers, raise them!",6));break;case"bossdown":{let x=_.by?s(_.by):null;m.push(a(`${xy[_.id]||`${_.name} is defeated!`}${x?` Final blow: ${x}!`:""}`,10,"BOSS DEFEATED!",{win:1}));break}case"retreat":m.push(a(`${_.name} retreats into the rift... and drags souls with him.`,9,"SOULS TAKEN"));break;case"toll":m.push(a(`${Uo(_.n)} souls taken.`,6));break;case"vote":if(_.start){let x=Qi[_.i];m.push(a(`${Sf(x.q)}. ${Sf(x.a.label)}? Comment one. Or ${x.b.label.toLowerCase()}? Comment two. Choose!`,10,"VOTE!",{win:1}))}break;case"choice":{let x=Qi[_.i],S=x[_.key===x.a.key?"a":"b"];m.push(a(`${_.none?"Nobody chose. Fate decides. ":"The survivors have chosen. "}${Sf(S.label)}. ${Wl[_.key].text}`,10,S.label,{win:1}));break}case"end":{let x=(_.top||[]).map(s).filter(Boolean),S=_.saved?(Yp[(_.choices||[]).join("-")]||"Earth is saved. {n} survivors live on.").replace("{n}",Uo(_.survivors)):`The last light goes out. Earth has fallen... on wave ${_.wave}.`;m.push(a(`${_.saved?"Earth is saved! ":""}${S}${x.length?` Top defender: ${x[0]}! Shoutout to ${x[0]}!`:""} ${_.saved?"The Ascension System remembers you.":"But the Ascension System will rise again."}`,10,_.saved?"EARTH SAVED":"EARTH FELL",{win:1}));break}case"gift":{let x={volley:_.coins>=2?`${T} unleashes a spell volley!`:null,rune:`${T} carves a shield rune into the wall!`,guardian:_.extended?`${T} renews a guardian's oath!`:`${T} summons a guardian hero to the gate!`,awaken:_.cool?`${T} ascends! Power times three!`:`${T} awakens the Ascension System! Ultimate!`,dragon:_.judgment?`${T} calls the dragon! Judgment on the boss!`:`${T} summons a dragon! Burn them all!`}[_.tier];x&&m.push(a(x,{volley:4,rune:6,guardian:8,awaken:9,dragon:10}[_.tier],{volley:null,rune:"SHIELD RUNE",guardian:"GUARDIAN!",awaken:"ASCENSION!",dragon:_.judgment?"JUDGMENT!":"DRAGON!"}[_.tier],{gift:_.tier}));break}case"bless":m.push(a(_.why==="follow"?`${T} follows. A blessing of light upon you.`:`${T} shares the signal! The fallen rise and the barrier glows!`,4));break;case"pulse":m.push(a("The likes charge the barrier! Ascension pulse!",7,"ASCENSION PULSE"));break;case"class":!_.bot&&T&&e()<.35&&m.push(a(`${T} becomes ${/^[aeiou]/i.test($i[_.c].label)?"an":"a"} ${$i[_.c].label.toLowerCase()}.`,2));break;case"join":_.bot||n.push(_.id);break}}let g=t();for(;r<Pr.length&&g<Pr[r];)g>0&&(r+1>=Pr.length||g>=Pr[r+1])&&m.push(a(Ea([`Only ${Uo(Pr[r])} survivors left. Hold on!`,`We are down to ${Uo(Pr[r])}. Do not let them through!`],e),7,`${Uo(Pr[r]).toUpperCase()} LEFT`)),r++;if(n.length&&b-i>6){i=b;let _=n.splice(0,60);m.push(a(Ea([`${u(_)} join the defense.`,`Welcome to the wall, ${u(_)}.`],e),2))}m.length&&(l=b);let v=o[c],M=f[c];return v&&!m.length&&b-l>M[0]&&b-h>M[1]&&(h=b,l=b,m.push(a(v[d[c]++%v.length],2,null,{tip:1}))),m}}}var Mm=["Sara","Ali","Hina","Omar","Zara","Bilal","Noor","Ayan","Esha","Faraz","Iman","Junaid","Kinza","Laiba","Moiz","Nimra","Rida","Saad","Tania","Umer","Maya","Leo","Aisha","Yusuf","Lina","Kai","Mia","Zain","Sofia","Adam","Hamza","Amna","Riya","Dev","Luna","Max"],Sm=["","_x","22",".official","_99","\u{1F338}","xo","_07",".live","\u2728","_pk","786"],wm=["hi","join","lets go","me!","hello from dubai","gg","this is fire","shield","dash","\u{1F4A8}","\u{1F6E1}\uFE0F","dance","color pink","color gold","revenge","wow","\u{1F525}\u{1F525}","i will win","play","1","2","3","2","left","right","3\uFE0F\u20E3","candle","clock","echo","map","attack","mage","warrior","archer","healer","\u{1F52E}","\u{1F3F9}","seal","hunt","city","army"],Tm=[["Rose",1],["TikTok",1],["Finger Heart",5],["GG",1],["Doughnut",30],["Hand Hearts",100],["Corgi",299],["Money Gun",500],["Lion",29999]];function Am(s="busy",e=Math.random){let t=l=>Math.floor(e()*l),n=[],i=()=>{let l=Mm[t(Mm.length)]+Sm[t(Sm.length)],h={uid:l.toLowerCase().replace(/[^\w.]/g,"")+n.length,name:l};return n.push(h),h},r=()=>n.length?n[t(n.length)]:i(),a=0,o=0,c=s==="quiet"?3:s==="gifts"?30:s==="demo"?40:220;return{people:n,tick(l){a+=l,o+=l;let h=[],d=s==="quiet"?.6:s==="busy"?Math.min(14,2+a/6):s==="demo"?5:4;for(;o>1/d;){o-=1/d;let u=n.length<Math.min(c,s==="busy"?10+a*2.5:c)&&e()<.6?i():r(),p=e();if(p<.5){let b=wm[t(wm.length)];if(e()<.25&&n.length>2){let m=r();m!==u&&(b=(e()<.5?"attack ":"\u2694\uFE0F ")+m.name.replace(/[^\w]/g,"").slice(0,6))}h.push({type:"chat",uid:u.uid,name:u.name,text:b})}else if(p<.8)h.push({type:"like",uid:u.uid,name:u.name,count:1+t(15)});else if(p<(s==="gifts"?.98:.9)){let b=e()<.75?Tm[t(4)]:Tm[4+t(s==="gifts"?4:3)];h.push({type:"gift",uid:u.uid,name:u.name,giftName:b[0],coins:b[1],count:e()<.2?1+t(5):1})}else p<.95?h.push({type:"follow",uid:u.uid,name:u.name}):h.push({type:"share",uid:u.uid,name:u.name})}return h}}}var sn=new URLSearchParams(location.search),Hn=s=>document.getElementById(s),uh=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Ho=sn.get("mode")==="phone"||sn.get("mode")!=="pc"&&(uh||/Android|Mobile/.test(navigator.userAgent)),wi=sn.get("render")==="1",Ca=wi||sn.get("local")==="1",Lf=sn.get("key")||"",Vo=Number(sn.get("fps"))||(Ho?30:60),Vm=sn.get("mute")==="1";sn.get("clean")==="1"&&document.body.classList.add("clean");var Wm=Ho?[{pr:1.5,maxW:780,labels:12,particles:1,dust:!0,props:!0,chars:36,animLod:1},{pr:1.25,maxW:700,labels:10,particles:.75,dust:!0,props:!0,chars:30,animLod:1},{pr:1,maxW:600,labels:8,particles:.5,dust:!1,props:!0,chars:24,animLod:2},{pr:.8,maxW:480,labels:6,particles:.35,dust:!1,props:!1,chars:16,animLod:2}]:[{pr:2,maxW:Number(sn.get("maxw"))||1080,labels:14,particles:1,dust:!0,props:!0,chars:60,animLod:1},{pr:1.5,maxW:900,labels:12,particles:1,dust:!0,props:!0,chars:48,animLod:1},{pr:1,maxW:700,labels:10,particles:.6,dust:!1,props:!0,chars:36,animLod:2},{pr:.8,maxW:540,labels:8,particles:.4,dust:!1,props:!1,chars:24,animLod:2}],Kn=sn.has("q")?Math.max(0,Math.min(3,Number(sn.get("q")))):0,_y=sn.has("q"),ts=Hn("gl"),gt=null,qm=0,Xm=0,ih=[],Ys=!1,Nr=Hn("hud"),Ee=Nr.getContext("2d");function jm(){if(!(sn.get("view")==="2d"||localStorage.getItem("lg_force2d")==="1"))try{gt=gm(ts,{maxChars:70,particles:Ho?800:1200,aa:!Ho||uh,preserve:wi}),gt.ready&&gt.ready.catch(()=>Oi("models-fail")),ts.addEventListener("webglcontextlost",Wo,!1),ts.addEventListener("webglcontextrestored",Km,!1);return}catch{Oi("gl-fail")}fh()}function fh(){if(gt&&gt.kind==="2d")return;try{gt&&gt.dispose(),gt&&gt.loseContext&&gt.loseContext()}catch{}let s=document.createElement("canvas");s.id="gl",ts.replaceWith(s),ts=s,gt=xm(ts,{}),Oi("view-2d"),Zs()}function Wo(s){s.preventDefault(),qm++,Ys=!0,Oi("ctx-lost"),ih.push(performance.now()),ih=ih.filter(e=>performance.now()-e<12e4),t0(),clearTimeout(Wo.t),Wo.t=setTimeout(()=>{Ys&&(localStorage.setItem("lg_force2d","1"),fh(),Ys=!1,hh())},4e3),Of&&Of.send("ctxlost")}function Km(){if(clearTimeout(Wo.t),Xm++,Oi("ctx-restored"),ih.length>=3){localStorage.setItem("lg_force2d","1"),fh(),Ys=!1,hh();return}try{gt.dispose()}catch{}ts.removeEventListener("webglcontextlost",Wo),ts.removeEventListener("webglcontextrestored",Km),gt=null,jm(),Kn=Math.min(3,Kn+1),Zs(),Ys=!1,hh()}var oh=390,qo=844;function Zs(){let s=window.innerWidth,e=window.innerHeight,t=Hn("stage"),n=s,i=e;s/e>.7&&(n=Math.round(Math.min(s,e*9/16)),i=Math.round(Math.min(e,n*16/9))),t.style.width=n+"px",t.style.height=i+"px",oh=n,qo=i,document.documentElement.style.setProperty("--u",(n/100).toFixed(3)+"px");let r=Wm[Kn],a=window.devicePixelRatio||1,o=Math.min(a,r.pr,r.maxW/n);gt&&(gt.resize(n,i,o),gt.setQuality(r));let c=Math.min(a,2,900/n);Nr.width=Math.round(n*c),Nr.height=Math.round(i*c),Nr.__pr=c}addEventListener("resize",()=>{clearTimeout(Zs.t),Zs.t=setTimeout(Zs,120)});var wn=_m({record:wi});wn.muted=Vm;var Jm=Hn("soundChip");function vy(){wn.unlock(),setTimeout(()=>{wn.state()==="running"&&(Jm.hidden=!0)},200)}["pointerdown","touchstart","click","keydown"].forEach(s=>addEventListener(s,vy,{passive:!0}));document.addEventListener("visibilitychange",()=>{document.hidden||wn.resume()});!wi&&!Vm&&(wn.unlock(),setTimeout(()=>{wn.state()!=="running"&&(Jm.hidden=!1)},700));var $s=new Map,sh=[],Oi=s=>{sh.push(s),sh.length>8&&sh.shift()},ns={ws:0,snaps:0,ev:0,err:0,say:0},Jn=[],Es=null,Em=0,Rm="",Cm=No,Bf=null,eh="",Sn={phase:"intro",members:[],enemies:[],allies:[],tl:0,pd:1,ch:1,wv:0,wi:0,sv:15e8,bar:0,hype:0,vi:-1,vc:[0,0],cho:[],left:0,n:0,run:0,bo:null,best:0,saves:0},Pm=-1,yy=0,ch=null,lh=null;function Df(s=[],e=[]){for(let t of e)$s.delete(t);for(let t of s)$s.set(t.id,t)}var Ui=null,Oo=1e3;function Nf(){let s=(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws?game=siege"+(Lf?"&key="+encodeURIComponent(Lf):"");try{Ui=new WebSocket(s)}catch{return setTimeout(Nf,Oo)}Ui.onopen=()=>{ns.ws++,Oo=1e3,Oi("ws-open"),hh();try{let e=JSON.parse(localStorage.getItem("lg_siegeBoard")||"null");e&&e.json&&e.sig&&Ui.send(JSON.stringify({t:"restore",json:e.json,sig:e.sig}))}catch{}},Ui.onmessage=e=>{let t;try{t=JSON.parse(e.data)}catch{return}My(t)},Ui.onclose=()=>{Ui=null,Oi("ws-close"),setTimeout(Nf,Oo),Oo=Math.min(1e4,Oo*1.7),ns.ws&&t0()},Ui.onerror=()=>{}}function My(s){switch(s.t){case"hello":$s.clear(),Df(s.roster),Jn=[],Es=null,Cm=s.tiers||Cm,Om(s),Im(s.snap);break;case"roster":Df(s.add,s.del);break;case"s":Im(s);break;case"say":$m(s.text,s.url,s.dur);break;case"banner":break;case"board":Om(s);break;case"status":eh=s.tiktok?.state||"",Hn("conn").className=eh==="connected"?"connected":/wait|connecting|reconnect/.test(eh)?"waiting":eh==="error"?"error":"",Vy(s.tiktok);break}}function Im(s){if(!s)return;ns.snaps++;let t=performance.now()/1e3-s.tm;Es===null||t<Es||Math.abs(t-Es)>2?Es=t:Es+=(t-Es)*.02,Jn.length&&s.tm<Jn[Jn.length-1].tm-1&&(Jn=[],Es=t),Jn.push({tm:s.tm,s,done:!1}),Jn.length>40&&Jn.shift()}var Sy=.16;function wy(s){if(!Jn.length)return Sn;let e=s-Es-Sy;for(let r of Jn)if(!r.done&&r.tm<=e){r.done=!0;let a=e-r.tm>1.2;for(let o of r.s.ev||[])Zm(o,a)}let t=Jn[0],n=null;for(let r=0;r<Jn.length;r++)if(Jn[r].tm<=e)t=Jn[r];else{n=Jn[r];break}if(!n||n===t)return Ff(t.s,null,0);let i=Math.max(0,Math.min(1,(e-t.tm)/Math.max(.001,n.tm-t.tm)));return Ff(t.s,n.s,i)}var Ty=[],Ay=[],Ey=[],Ry={name:"?",color:16777215};function wf(s,e,t,n,i,r){let a=[],o=new Map;if(e)for(let l=0;l<e.length;l+=n)o.set(e[l],l);let c=0;for(let l=0;l<s.length;l+=n){let h=i[c]||(i[c]={});c++;let d=e?o.get(s[l]):void 0;r(h,s,l,d!==void 0?e:null,d,t),a.push(h)}return a}function Ff(s,e,t){let n=wf(s.f,e&&e.f,t,5,Ty,(c,l,h,d,f,u)=>{if(c.id=l[h],c.x=l[h+1],c.z=l[h+2],c.cls=l[h+3]&3,c.flags=l[h+3]>>Wu,c.hp=l[h+4],d){let p=d[f+1]-c.x,b=d[f+2]-c.z;Math.abs(p)+Math.abs(b)<4&&(c.x+=p*u,c.z+=b*u)}c.info=$s.get(c.id)||Ry}),i=wf(s.e,e&&e.e,t,5,Ay,(c,l,h,d,f,u)=>{c.id=l[h],c.k=l[h+1],c.x=l[h+2],c.z=l[h+3],c.hp=l[h+4],d&&(c.x+=(d[f+2]-c.x)*u,c.z+=(d[f+3]-c.z)*u)}),r=wf(s.al,e&&e.al,t,4,Ey,(c,l,h,d,f,u)=>{c.id=l[h],c.k=l[h+1],c.x=l[h+2],c.z=l[h+3],d&&(c.x+=(d[f+2]-c.x)*u,c.z+=(d[f+3]-c.z)*u)}),a=e&&t>.5?e:s;a.ph!==Rm&&(Rm=a.ph,Em=dh());let o=a.bo;return o&&e&&s.bo&&e.bo&&(o={...a.bo,hp:s.bo.hp+(e.bo.hp-s.bo.hp)*t}),Sn={phase:a.ph,members:n,enemies:i,allies:r,tl:a.tl,pd:a.pd,ch:a.ch,wv:a.wv,wi:a.wi,sv:a.sv,bar:e?s.bar+(e.bar-s.bar)*t:s.bar,hype:a.hype,vi:a.vi,vc:a.vc,cho:a.cho,left:a.left,n:a.n,run:a.run,bo:o,best:a.best,saves:a.saves,phaseStart:Em},Sn}var li=null,kf=null,Ym=null,Js=[],Lm=0,Uf=0;function Cy(){let s={};for(let n of["introSeconds","gatherSeconds","chapterSeconds","breakSeconds","victorySeconds","voteSeconds","choiceSeconds","endingSeconds","minDefenders","spawnMul","enemyHpMul","dmgMul","startChapter","startWave","waveCap","bossCap","likePulse"])sn.has(n)&&(s[n]=Number(sn.get(n)));sn.get("lore")&&(s.loreCards=sn.get("lore").split(",").map(Number).filter(n=>n>=0&&n<Ni.length)),sn.get("bots")==="0"&&(s.bots=!1);let e=Number(sn.get("seed")||7),t=()=>(e=e*16807%2147483647,(e-1)/2147483646);li=new jl(s,wi?t:Math.random),Ym=ym({nameOf:n=>li.byId.get(n)?.name||null,rng:wi?t:Math.random,survivors:()=>li.survivors}),sn.get("crowd")&&(kf=Am(sn.get("crowd"),wi?t:Math.random)),window.__input=n=>li.input(n),window.__siege=li}var Tf=0;function Py(s,e){if(kf)for(let r of kf.tick(s))li.input(r);for(Tf+=s;Tf>=.05;)Tf-=.05,li.step(.05);let t=li.drainRoster();Df(t.add,t.del);let n=li.drain();for(let r of Ym.lines(n,li.t))Iy(r,e);let i=li.snapshot();for(let r of n)Zm(r,!1);return n.some(r=>r.k==="end"||r.k==="bossdown")&&(Bf={session:li.board(8),all:[],saves:li.saves}),Ff(i,null,0)}function Iy(s,e){let t={...s,at:e,p:null};for(t.p=fetch("/api/say?voice=narrator&text="+encodeURIComponent(s.text)).then(n=>n.json()).catch(()=>({url:null})),Uf++,t.p.finally(()=>Uf--),Js.push(t),Js.sort((n,i)=>i.pri-n.pri||n.at-i.at);Js.length>4;)Js.pop()}async function zo(s){if(s<Lm||!Js.length||zo.busy)return;let e=Js.shift();if(!e.win&&s-e.at>(e.pri>=7?9:6))return;zo.busy=!0;let t=await e.p;zo.busy=!1;let n=dh(),i=t.dur||Math.min(7,.9+e.text.length/14);$m(e.text,t.url,i),Lm=n+i+.25}var Ly=s=>$s.get(s)?.name||"?",Dy=s=>"#"+(($s.get(s)?.color??16777215)>>>0).toString(16).padStart(6,"0");var Dm=0,Nm=0,Fm=0,km=0;function Zm(s,e){if(ns.ev++,!e&&gt&&!Ys)try{gt.fx(s,Sn)}catch{ns.err++}let t=(i,r)=>{e||wn.sfx(i,wn.now(),r)},n=dh();switch(s.k){case"intro":t("wind"),t("organ",.6),ch=null,lh=null,rh(-1),document.body.classList.add("cine");break;case"lore":t("bell",.5),t("whistle",.3),rh(s.i,s.sec);break;case"gather":t("go"),rh(-1),document.body.classList.remove("cine");break;case"chapter":t("bell"),t("organ");break;case"wave":t("roar",.6),t("heart",.6);break;case"clear":t("chime"),t("cheer",.5);break;case"boss":t("roar"),t("organ"),t("thunder");break;case"bossatk":t(s.kind==="summon"?"roar":"boom",s.blocked?.6:1),s.blocked&&t("shield"),!s.blocked&&s.kind!=="summon"&&Ir(.35);break;case"bossdown":t("nuke"),t("fanfare"),t("cheer"),Ir(.8);break;case"retreat":t("ghost"),t("thunder"),Ir(.4);break;case"victory":break;case"vote":s.start?(t("chime"),t("organ",.5)):n-Fm>.12&&(Fm=n,t("squeak",.35));break;case"choice":t("fanfare",.7),t("bell"),lh=s;break;case"shot":n-Dm>.07&&(Dm=n,t(s.c==="a"?"dash":s.c==="w"||s.c==="g"?"punch":s.c==="h"?"heal":"pop",s.c==="a"?.25:.35));break;case"dmg":{s.c&&n-Nm>.06&&(Nm=n,t(s.c===2?"crit":"punch",s.c===2?.8:.4));break}case"kill":n-km>.09&&(km=n,t(s.q===1?"boom":"pop",s.q===1?.7:.4));break;case"wallhit":t("boom",.5),t("shatter",.3);break;case"block":t("shield",.4);break;case"toll":t("trap"),t("ghost"),Ir(.5);break;case"down":t("ko",.4);break;case"rise":t("heal",.4);break;case"heal":break;case"gift":t("coin"),t(s.tier==="dragon"?"roar":s.tier==="awaken"?"nuke":s.tier==="guardian"?"land":"power",s.tier==="volley"?.5:1),(s.tier==="awaken"||s.tier==="dragon")&&Ir(.6);break;case"ult":t("nuke"),Ir(.5);break;case"pulse":t("shield"),t("cheer",.5);break;case"bless":t("power",.7);break;case"class":break;case"ally":break;case"end":t(s.saved?"fanfare":"thunder"),t(s.saved?"cheer":"ghost"),s.saved&&t("bell"),Ir(.9),ch=s,Ny(s);break}["shot","dmg","kill","vote","heal"].includes(s.k)||Oi(s.k)}function dh(){return wi?Ra:performance.now()/1e3}function Ir(s=.7){let e=Hn("flash");e.style.transition="none",e.style.opacity=String(s),e.offsetWidth,e.style.transition="opacity 0.9s ease-out",e.style.opacity="0"}var Um=0;function $m(s,e,t){ns.say++;let n=Math.max(1800,(t||2)*1e3+600);clearTimeout(Um),Um=zy(()=>{},n),e&&wn.voice(e,t)}function rh(s,e=5){let t=Hn("lore");if(s<0){t.hidden=!0,Pm=-1;return}let n=Ni[s];Pm=s,yy=dh(),t.hidden=!1,t.className="art-"+n.art,t.style.setProperty("--sec",e+"s"),Hn("loreArt").style.backgroundImage=`url(/siege/lore-${n.art}.jpg), radial-gradient(circle at 50% 45%, #6a20b0, #1a0630 70%)`,t.classList.remove("play"),t.offsetWidth,t.classList.add("play")}var Qm=(s,e=10)=>(s=String(s||"?").replace(/\s+/g," ").trim(),[...s].length>e?[...s].slice(0,e-1).join("")+"\u2026":s);function Ny(s){let e=Hn("winner");e.className=s.saved?"saved":"fell",Hn("winIcon").textContent=s.saved?"\u{1F305}":"\u{1F311}";let t=(s.top||[]).filter(n=>$s.has(n));Hn("winName").textContent=t.length?Qm(Ly(t[0]),18):"",t.length&&(Hn("winName").style.color=Dy(t[0])),e.hidden=!1,e.style.animation="none",e.offsetWidth,e.style.animation=""}function Om(s){if(!(!s||!s.session&&!s.all)&&(Bf=s,s.signed))try{localStorage.setItem("lg_siegeBoard",JSON.stringify(s.signed))}catch{}}var Bm="",th={};function Fy(s){let e=Nr.__pr||1,t=oh/100;if(Ee.setTransform(1,0,0,1,0,0),Ee.clearRect(0,0,Nr.width,Nr.height),Ee.setTransform(e,0,0,e,0,0),!gt||Ys)return;let n=Sn,i=Wm[Kn];Ee.textAlign="center",Ee.textBaseline="middle",Ee.lineJoin="round";let r=(f,u)=>`${f} ${u}px -apple-system, "Segoe UI", Roboto, sans-serif`;if(n.phase==="intro")return;let o=(gt.drawn()||[]).map(f=>({f,s:(f.flags&Rt.cmd?8:0)+(f.flags&Rt.crown?7:0)+(f.flags&Rt.gift?6:0)+(f.flags&Rt.asc?5:0)+(f.flags&Rt.bot?0:3)}));o.sort((f,u)=>u.s-f.s);let c=o.length>12,l=Math.round(t*(c?2.3:2.6)),h=[],d=0;for(let{f}of o){if(d>=Math.min(i.labels,12))break;let u=gt.project(f.x,f.y,f.z);if(!u.vis||u.x<t*4||u.x>oh-t*4||u.y<qo*.26||u.y>qo*.8||h.some(T=>Math.abs(T.x-u.x)<t*10&&Math.abs(T.y-u.y)<t*3.4))continue;h.push(u),d++;let p=f.info||{},b=f.flags&Rt.bot,m=f.flags&Rt.down,g=(f.flags&Rt.crown?"\u{1F451}":"")+Qm(b?String(p.name||"").replace(/^Bot\s+/i,""):p.name,c?8:10);Ee.globalAlpha=(m?.4:b?.55:.92)*(1-Math.min(.5,d/24)),Ee.font=r(700,l);let v=Math.min(Ee.measureText(g).width,t*22),M=l*1.3,_=u.y-M*.4;Ee.fillStyle=f.flags&Rt.asc?"rgba(120,80,0,0.6)":"rgba(8,4,20,0.5)",Lr(u.x-v/2-t,_-M/2,v+t*2,M,M/2),Ee.fill(),Ee.fillStyle="#"+((p.color??16777215)>>>0).toString(16).padStart(6,"0"),Ee.fillText(g,u.x,_+1,t*22),f.cls===1&&f.hp<100&&!m&&(Ee.fillStyle="rgba(0,0,0,0.55)",Ee.fillRect(u.x-t*3.5,_+M*.6,t*7,t*.5),Ee.fillStyle=f.hp>40?"#5dff9a":"#ff5a5a",Ee.fillRect(u.x-t*3.5,_+M*.6,t*7*Math.max(0,f.hp)/100,t*.5))}Ee.globalAlpha=1,Uy(s,t,r)}var ky=s=>s>=1e9?(s/1e9).toFixed(2)+"B":s>=1e6?Math.round(s/1e6)+"M":s>=1e3?Math.round(s/1e3)+"K":String(Math.max(0,Math.round(s)));function Uy(s,e,t){let n=Sn,i=n.phase;i!==Bm&&(Bm=i,th[i]=Math.max(1,n.tl||1)),n.tl>th[i]&&(th[i]=n.tl);let r=oh/2,a=qo*.135,o=e*4.6,l=["gather","vote","boss","break","wave"].includes(i)&&n.tl>0?Math.max(0,Math.min(1,n.tl/(th[i]||1))):1,h=Math.max(0,Math.min(100,n.bar||0))/100,d=(i==="vote"||i==="gather")&&n.tl>0&&n.tl<=5&&!(i==="gather"&&n.n<1),f=!!(n.bo&&["wave","boss","break","victory"].includes(i)),u=f?"#ff6b8b":i==="vote"||i==="choice"?"#ffd36a":"#c77dff",p=d?1+.12*Math.max(0,Math.sin(n.tl%1*Math.PI)):1;Ee.save(),Ee.translate(r,a),Ee.scale(p,p),Ee.fillStyle="rgba(10,6,24,0.55)",Ee.beginPath(),Ee.arc(0,0,o+e*2.1,0,Math.PI*2),Ee.fill(),Ee.lineCap="round",Ee.lineWidth=e*1.1,Ee.strokeStyle="rgba(255,255,255,0.16)",Ee.beginPath(),Ee.arc(0,0,o,0,Math.PI*2),Ee.stroke(),Ee.strokeStyle=u,Ee.beginPath(),Ee.arc(0,0,o,-Math.PI/2,-Math.PI/2+Math.PI*2*l),Ee.stroke(),Ee.lineWidth=e*.7,Ee.strokeStyle="rgba(122,216,255,0.18)",Ee.beginPath(),Ee.arc(0,0,o+e*1.35,0,Math.PI*2),Ee.stroke(),Ee.strokeStyle="#7ad8ff",h>0&&(Ee.beginPath(),Ee.arc(0,0,o+e*1.35,-Math.PI/2,-Math.PI/2+Math.PI*2*h),Ee.stroke()),Ee.fillStyle="#fff",d?(Ee.font=t(900,Math.round(e*4.4)),Ee.fillText(String(Math.ceil(n.tl)),0,e*.3)):(Ee.font=`${Math.round(e*4)}px sans-serif`,Ee.fillText(i==="vote"||i==="choice"?"\u{1F5F3}\uFE0F":f?"\u{1F480}":i==="ending"?ch&&ch.saved?"\u{1F305}":"\u{1F311}":"\u{1F6E1}\uFE0F",0,e*.3)),Ee.restore();let b=Math.max(0,Dr),m=b/15e8,g=Math.max(0,1-(s-e0)/.6);Ee.font=t(900,Math.round(e*3.2));let v="\u{1F30D} "+ky(b),M=Ee.measureText(v).width,_=a+o+e*5,T=r+(g>0?(Math.random()-.5)*e*g:0);Ee.fillStyle="rgba(10,6,24,0.55)",Lr(T-M/2-e*1.4,_-e*2.3,M+e*2.8,e*4.6,e*2.3),Ee.fill(),Ee.fillStyle=g>0?"#ff6a6a":m<.35?"#ff9a7a":m<.7?"#ffd36a":"#e8f4ff",Ee.fillText(v,T,_+e*.2);let y=_+e*4;if(f){let x=e*26,S=Math.max(0,Math.min(1,n.bo.hp/n.bo.max));Ee.fillStyle="rgba(10,6,24,0.6)",Lr(r-x/2,y,x,e*1.4,e*.7),Ee.fill(),Ee.fillStyle="#ff3a6a",S>0&&(Lr(r-x/2,y,x*S,e*1.4,e*.7),Ee.fill()),y+=e*3}if((i==="vote"||i==="choice")&&n.vi>=0&&Qi[n.vi]){let x=Qi[n.vi],S=(n.vc[0]||0)+(n.vc[1]||0)||1,D=i==="choice"&&lh?lh.key:null;[x.a,x.b].forEach((L,F)=>{let C=r+(F?1:-1)*e*16,V=qo*.3,N=e*26,J=(n.vc[F]||0)/S;Ee.globalAlpha=D&&D!==L.key?.35:1,Ee.fillStyle="rgba(10,6,24,0.6)",Lr(C-N/2,V-e*4,N,e*8,e*4),Ee.fill(),Ee.fillStyle=F?"rgba(255,90,120,0.55)":"rgba(122,216,255,0.55)",J>0&&(Lr(C-N/2,V-e*4,Math.max(e*8,N*J),e*8,e*4),Ee.fill()),Ee.fillStyle="#ffd36a",Ee.font=t(900,Math.round(e*5)),Ee.fillText(String(F+1),C-N*.26,V+e*.3),Ee.font=`${Math.round(e*5)}px sans-serif`,Ee.fillText(L.icon,C+N*.18,V+e*.3),D===L.key&&(Ee.strokeStyle="#ffd36a",Ee.lineWidth=e*.6,Lr(C-N/2,V-e*4,N,e*8,e*4),Ee.stroke()),Ee.globalAlpha=1})}}function Lr(s,e,t,n,i){Ee.beginPath(),Ee.moveTo(s+i,e),Ee.arcTo(s+t,e,s+t,e+n,i),Ee.arcTo(s+t,e+n,s,e+n,i),Ee.arcTo(s,e+n,s,e,i),Ee.arcTo(s,e,s+t,e,i),Ee.closePath()}var Af=-1,Dr=15e8,Ks=15e8,Ef=15e8,e0=-9;function Oy(s,e){Ks=Math.max(0,Sn.sv??15e8),Ks<Ef-2e5&&(e0=e),(Ks>Ef+1e6||Ks>=1499999999)&&(Dr=Math.min(Dr,15e8)),Ef=Ks,Dr+=(Ks-Dr)*Math.min(1,s*6),Math.abs(Ks-Dr)<1e3&&(Dr=Ks)}function By(s){let e=Sn,t=document.body,n=e.phase==="intro";if(t.classList.toggle("cine",n),t.classList.toggle("voting",e.phase==="vote"||e.phase==="choice"),(e.phase==="vote"||e.phase==="gather")&&e.tl<=5&&e.tl>0&&!(e.phase==="gather"&&e.n<1)){let i=Math.ceil(e.tl);i!==Af&&(Af=i,wn.sfx(e.phase==="vote"&&i<=3?"heart":"beep"))}else Af=-1;e.phase!=="ending"&&(Hn("winner").hidden=!0),e.phase!=="intro"&&!Hn("lore").hidden&&rh(-1)}var ah=[];function zy(s,e){if(!wi)return setTimeout(s,e);let t={at:Ra+e/1e3,fn:s};return ah.push(t),t}function Gy(){for(let s=ah.length-1;s>=0;s--)ah[s].at<=Ra&&ah.splice(s,1)[0].fn()}function t0(){Hn("notice").hidden=!1}function hh(){Hn("notice").hidden=!0}var Bo=0,Rf=0,Cf=0,Go=0,Pf=0,nh=0,zm=0,Gm=8,If=new Map;function n0(s,e){if(Ca?Sn=Py(s,e):Sn=wy(e),Ca&&zo(e),gt&&!Ys)try{gt.frame(Sn,s,e)}catch{ns.err++,Oi("frame-err"),ns.err>30&&fh()}e>Gm&&(Gm=e+12+Math.random()*10,["boss","wave"].includes(Sn.phase)||wn.sfx("wind",wn.now(),.45)),Fy(e),Oy(s,e),e-zm>.25&&(zm=e,By(e))}function Hy(s){Rf++,!(s-Cf<2)&&(Go=Rf/(s-Cf),Rf=0,Cf=s,!(_y||wi||document.hidden)&&(s<6||(Go<Vo*.8&&Kn<3?++Pf>=2&&(If.set(Kn,(If.get(Kn)||0)+1),Kn++,Pf=0,nh=0,Zs(),Oi("q"+Kn)):(Pf=0,Go>=Vo*.95&&Kn>0&&(If.get(Kn-1)||0)<2?++nh>=6&&(Kn--,nh=0,Zs(),Oi("q"+Kn)):nh=0))))}function i0(s){if(requestAnimationFrame(i0),document.hidden)return;let e=s/1e3;if(Bo&&e-Bo<1/Vo-.004)return;let t=Math.min(.1,Bo?e-Bo:1/Vo);Bo=e,n0(t,e),Hy(e)}var Ra=0;wi&&(wn.clock=()=>Ra,window.__render={async frame(s){Ra+=s,Gy(),gt&&gt.ready&&!gt.loaded&&!gt.error&&await gt.ready.catch(()=>{});for(let e=0;e<100&&(zo.busy||Js.length&&Js[0].p&&Uf);e++)await new Promise(t=>setTimeout(t,30));return n0(s,Ra),{phase:Sn.phase,n:Sn.n,ch:Sn.ch,wave:Sn.wv,sv:Sn.sv}},mix:s=>wn.mix(s),stats:()=>gt.stats()});var Hm=!1;function Vy(s){if(Hm||uh||Ca||!Lf||!s||!/tikfinity|both/.test(s.source||""))return;Hm=!0;let e=document.createElement("script");e.src="/shared/tikfinity.js",e.onload=()=>{let t=window.TikFinity;t.setSink(n=>{!Ui||Ui.readyState!==1||(n.type==="status"?Ui.send(JSON.stringify({t:"tf-status",state:n.mode==="live"?"connected":"waiting",message:n.message})):Ui.send(JSON.stringify({t:"tf",ev:n})))}),t.connect()},document.head.appendChild(e)}var Of=null;jm();Zs();Ca?(Cy(),Bf={session:[],all:[]}):Nf();wi||(requestAnimationFrame(i0),setInterval(()=>{!document.hidden&&!Ca&&fetch("/healthz?overlay=1",{cache:"no-store"}).catch(()=>{})},4*6e4),Of=vm(()=>({mode:{phone:Ho,ios:uh,kind:gt?gt.kind:"none",game:"siege",q:Kn,fps:Math.round(Go*10)/10,cap:Vo},cv:{w:ts.width,h:ts.height},gl:{...gt?gt.stats():{},lost:qm,restored:Xm},n:{...ns},last:sh.slice(),audio:{unlocked:wn.state()==="running",ctx:wn.state(),played:wn.played,fails:wn.fails}}),{off:sn.get("diag")==="0"||Ca}));window.__siegeUI={get world(){return Sn},get members(){return Sn.members},get level(){return Kn},get fps(){return Go},get view(){return gt},stats:()=>gt?gt.stats():null,N:ns,audio:wn,roster:$s};try{for(let s of Ni){let e=new Image;e.decoding="async",e.src=`/siege/lore-${s.art}.jpg`}}catch{}})();
