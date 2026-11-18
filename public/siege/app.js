(()=>{var Cd=0,Jh=1,Pd=2;var vo=1,Id=2,pa=3,ji=0,Fn=1,hn=2,Mr=0,Ws=1,jn=2,Yh=3,Zh=4,Ld=5;var Sr=100,Dd=101,Nd=102,Fd=103,kd=104,Ud=200,Od=201,Bd=202,zd=203,$h=204,Qh=205,Gd=206,Hd=207,Vd=208,Wd=209,qd=210,Xd=211,jd=212,Kd=213,Jd=214,yc=0,Mc=1,Sc=2,Qr=3,wc=4,Tc=5,Ac=6,Ec=7,jc=0,Yd=1,Zd=2,Ki=0,eu=1,tu=2,nu=3,yo=4,iu=5,su=6,ru=7,zh="attached",$d="detached",au=300,wr=301,ma=302,Kc=303,Jc=304,Us=1e3,mi=1001,ea=1002,Yt=1003,Yc=1004;var Tr=1005;var mn=1006,ga=1007;var _i=1008;var ei=1009,ou=1010,cu=1011,ba=1012,Zc=1013,Li=1014,ci=1015,Di=1016,$c=1017,Qc=1018,Ar=1020,lu=35902,hu=35899,uu=1021,fu=1022,vi=1023,ps=1026,ws=1027,xa=1028,el=1029,qs=1030,tl=1031;var nl=1033,Mo=33776,So=33777,wo=33778,To=33779,il=35840,sl=35841,rl=35842,al=35843,ol=36196,cl=37492,ll=37496,hl=37488,ul=37489,Ao=37490,fl=37491,dl=37808,pl=37809,ml=37810,gl=37811,bl=37812,xl=37813,_l=37814,vl=37815,yl=37816,Ml=37817,Sl=37818,wl=37819,Tl=37820,Al=37821,El=36492,Rl=36494,Cl=36495,Pl=36283,Il=36284,Eo=36285,Ll=36286,Dl=2200,Ro=2201,Qd=2202,hr=2300,ur=2301,_c=2302,Gh=2303,or=2400,cr=2401,Va=2402,Nl=2500,ep=2501,du=0,Co=1,_a=2,tp=3200;var va=0,np=1,Ts="",Bt="srgb",qn="srgb-linear",Wa="linear",Et="srgb";var vc=7680;var ip=519,sp=512,rp=513,ap=514,pu=515,op=516,cp=517,mu=518,gu=519,bu=35044;var xu="300 es",gi=2e3,ta=2001;function i0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function s0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function na(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lp(){let s=na("canvas");return s.style.display="block",s}var Vf={},ia=null;function qa(...s){let e="THREE."+s.shift();ia?ia("log",e,...s):console.log(e,...s)}function hp(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function We(...s){s=hp(s);let e="THREE."+s.shift();if(ia)ia("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function $e(...s){s=hp(s);let e="THREE."+s.shift();if(ia)ia("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function lr(...s){let e=s.join(" ");e in Vf||(Vf[e]=!0,We(...s))}function up(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var fp={[yc]:yc,[Sc]:Ac,[wc]:wc,[Qr]:Tc,[Mc]:Mc,[Ac]:Sc,[Ec]:Ec,[Tc]:Qr},Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wf=1234567,Ga=Math.PI/180,fr=180/Math.PI;function Ji(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]).toLowerCase()}function pt(s,e,t){return Math.max(e,Math.min(t,s))}function _u(s,e){return(s%e+e)%e}function r0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function a0(s,e,t){return s!==e?(t-s)/(e-s):0}function Ha(s,e,t){return(1-t)*s+t*e}function o0(s,e,t,n){return Ha(s,e,1-Math.exp(-t*n))}function c0(s,e=1){return e-Math.abs(_u(s,e*2)-e)}function l0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function h0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function u0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function f0(s,e){return s+Math.random()*(e-s)}function d0(s){return s*(.5-Math.random())}function p0(s){s!==void 0&&(Wf=s);let e=Wf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function m0(s){return s*Ga}function g0(s){return s*fr}function b0(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function x0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _0(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),d=a((e-n)/2),u=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*f,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*f,o*l);break;case"ZXZ":s.set(c*f,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*p,c*u,o*l);break;case"YXY":s.set(c*u,o*h,c*p,o*l);break;case"ZYZ":s.set(c*p,c*u,o*h,o*l);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fl(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function yu(s,e){if(e.constructor===Float32Array)return s;let t=Fl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Mu(s,e){if(e.constructor===Float32Array)return s;let t=Fl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var kl={DEG2RAD:Ga,RAD2DEG:fr,generateUUID:Ji,clamp:pt,euclideanModulo:_u,mapLinear:r0,inverseLerp:a0,lerp:Ha,damp:o0,pingpong:c0,smoothstep:l0,smootherstep:h0,randInt:u0,randFloat:f0,randFloatSpread:d0,seededRandom:p0,degToRad:m0,radToDeg:g0,isPowerOfTwo:b0,ceilPowerOfTwo:x0,floorPowerOfTwo:vu,setQuaternionFromProperEuler:_0,normalize:Mu,denormalize:yu},Eu=class Eu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Eu.prototype.isVector2=!0;var Qe=Eu,In=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3],d=r[a+0],u=r[a+1],p=r[a+2],x=r[a+3];if(f!==x||c!==d||l!==u||h!==p){let m=c*d+l*u+h*p+f*x;m<0&&(d=-d,u=-u,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){let v=Math.acos(m),y=Math.sin(v);g=Math.sin(g*v)/y,o=Math.sin(o*v)/y,c=c*g+d*o,l=l*g+u*o,h=h*g+p*o,f=f*g+x*o}else{c=c*g+d*o,l=l*g+u*o,h=h*g+p*o,f=f*g+x*o;let v=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=v,l*=v,h*=v,f*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=r[a],d=r[a+1],u=r[a+2],p=r[a+3];return e[t]=o*p+h*f+c*u-l*d,e[t+1]=c*p+h*d+l*f-o*u,e[t+2]=l*p+h*u+o*d-c*f,e[t+3]=h*p-o*f-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),f=o(r/2),d=c(n/2),u=c(i/2),p=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*u*p,this._y=l*u*f-d*h*p,this._z=l*h*p+d*u*f,this._w=l*h*f-d*u*p;break;case"YXZ":this._x=d*h*f+l*u*p,this._y=l*u*f-d*h*p,this._z=l*h*p-d*u*f,this._w=l*h*f+d*u*p;break;case"ZXY":this._x=d*h*f-l*u*p,this._y=l*u*f+d*h*p,this._z=l*h*p+d*u*f,this._w=l*h*f-d*u*p;break;case"ZYX":this._x=d*h*f-l*u*p,this._y=l*u*f+d*h*p,this._z=l*h*p-d*u*f,this._w=l*h*f+d*u*p;break;case"YZX":this._x=d*h*f+l*u*p,this._y=l*u*f+d*h*p,this._z=l*h*p-d*u*f,this._w=l*h*f-d*u*p;break;case"XZY":this._x=d*h*f-l*u*p,this._y=l*u*f-d*h*p,this._z=l*h*p+d*u*f,this._w=l*h*f+d*u*p;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-i)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-c)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+l)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-l)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-i)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ru=class Ru{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=i+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ru.prototype.isVector3=!0;var B=Ru,gh=new B,qf=new In,Cu=class Cu{constructor(e,t,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],u=n[5],p=n[8],x=i[0],m=i[3],g=i[6],v=i[1],y=i[4],b=i[7],S=i[2],M=i[5],_=i[8];return r[0]=a*x+o*v+c*S,r[3]=a*m+o*y+c*M,r[6]=a*g+o*b+c*_,r[1]=l*x+h*v+f*S,r[4]=l*m+h*y+f*M,r[7]=l*g+h*b+f*_,r[2]=d*x+u*v+p*S,r[5]=d*m+u*y+p*M,r[8]=d*g+u*b+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,d=o*c-h*r,u=l*r-a*c,p=t*f+n*d+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(i*l-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-o*t)*x,e[6]=u*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bh.makeScale(e,t)),this}rotate(e){return lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bh.makeRotation(-e)),this}translate(e,t){return lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Cu.prototype.isMatrix3=!0;var et=Cu,bh=new et,Xf=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jf=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function v0(){let s={enabled:!0,workingColorSpace:qn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Et&&(i.r=ds(i.r),i.g=ds(i.g),i.b=ds(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(i.r=$r(i.r),i.g=$r(i.g),i.b=$r(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ts?Wa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[qn]:{primaries:e,whitePoint:n,transfer:Wa,toXYZ:Xf,fromXYZ:jf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:Xf,fromXYZ:jf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),s}var ct=v0();function ds(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $r(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Or,Rc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Or===void 0&&(Or=na("canvas")),Or.width=e.width,Or.height=e.height;let i=Or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Or}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=na("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ds(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ds(t[n]/255)*255):t[n]=ds(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},y0=0,sa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(xh(i[a].image)):r.push(xh(i[a]))}else r=xh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function xh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var M0=0,_h=new B,gn=class s extends Pi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=mi,i=mi,r=mn,a=_i,o=vi,c=ei,l=s.DEFAULT_ANISOTROPY,h=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Ji(),this.name="",this.source=new sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_h).x}get height(){return this.source.getSize(_h).y}get depth(){return this.source.getSize(_h).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=au;gn.DEFAULT_ANISOTROPY=1;var Pu=class Pu{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],p=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(p+m)<.1&&Math.abs(l+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,b=(u+1)/2,S=(g+1)/2,M=(h+d)/4,_=(f+x)/4,w=(p+m)/4;return y>b&&y>S?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=M/n,r=_/n):b>S?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=M/i,r=w/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=_/r,i=w/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(f-x)/v,this.z=(d-h)/v,this.w=Math.acos((l+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pu.prototype.isVector4=!0;var Lt=Pu,Cc=class extends Pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new gn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new sa(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends Cc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xa=class extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pc=class extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Xc=class Xc{constructor(e,t,n,i,r,a,o,c,l,h,f,d,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,f,d,u,p,x,m)}set(e,t,n,i,r,a,o,c,l,h,f,d,u,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=f,g[14]=d,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Br.setFromMatrixColumn(e,0).length(),r=1/Br.setFromMatrixColumn(e,1).length(),a=1/Br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,u=a*f,p=o*h,x=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=u+p*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=p+u*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,u=c*f,p=l*h,x=l*f;t[0]=d+x*o,t[4]=p*o-u,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=u*o-p,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,u=c*f,p=l*h,x=l*f;t[0]=d-x*o,t[4]=-a*f,t[8]=p+u*o,t[1]=u+p*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,u=a*f,p=o*h,x=o*f;t[0]=c*h,t[4]=p*l-u,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=u*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,u=a*l,p=o*c,x=o*l;t[0]=c*h,t[4]=x-d*f,t[8]=p*f+u,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*f+p,t[10]=d-x*f}else if(e.order==="XZY"){let d=a*c,u=a*l,p=o*c,x=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+x,t[5]=a*h,t[9]=u*f-p,t[2]=p*f-u,t[6]=o*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S0,e,w0)}lookAt(e,t,n){let i=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ps.crossVectors(n,ni),Ps.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ps.crossVectors(n,ni)),Ps.normalize(),Ko.crossVectors(ni,Ps),i[0]=Ps.x,i[4]=Ko.x,i[8]=ni.x,i[1]=Ps.y,i[5]=Ko.y,i[9]=ni.y,i[2]=Ps.z,i[6]=Ko.z,i[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],u=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],y=n[7],b=n[11],S=n[15],M=i[0],_=i[4],w=i[8],D=i[12],I=i[1],U=i[5],L=i[9],H=i[13],N=i[2],Z=i[6],te=i[10],z=i[14],le=i[3],J=i[7],Q=i[11],he=i[15];return r[0]=a*M+o*I+c*N+l*le,r[4]=a*_+o*U+c*Z+l*J,r[8]=a*w+o*L+c*te+l*Q,r[12]=a*D+o*H+c*z+l*he,r[1]=h*M+f*I+d*N+u*le,r[5]=h*_+f*U+d*Z+u*J,r[9]=h*w+f*L+d*te+u*Q,r[13]=h*D+f*H+d*z+u*he,r[2]=p*M+x*I+m*N+g*le,r[6]=p*_+x*U+m*Z+g*J,r[10]=p*w+x*L+m*te+g*Q,r[14]=p*D+x*H+m*z+g*he,r[3]=v*M+y*I+b*N+S*le,r[7]=v*_+y*U+b*Z+S*J,r[11]=v*w+y*L+b*te+S*Q,r[15]=v*D+y*H+b*z+S*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],u=e[14],p=e[3],x=e[7],m=e[11],g=e[15],v=c*u-l*d,y=o*u-l*f,b=o*d-c*f,S=a*u-l*h,M=a*d-c*h,_=a*f-o*h;return t*(x*v-m*y+g*b)-n*(p*v-m*S+g*M)+i*(p*y-x*S+g*_)-r*(p*b-x*M+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],u=e[11],p=e[12],x=e[13],m=e[14],g=e[15],v=t*o-n*a,y=t*c-i*a,b=t*l-r*a,S=n*c-i*o,M=n*l-r*o,_=i*l-r*c,w=h*x-f*p,D=h*m-d*p,I=h*g-u*p,U=f*m-d*x,L=f*g-u*x,H=d*g-u*m,N=v*H-y*L+b*U+S*I-M*D+_*w;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/N;return e[0]=(o*H-c*L+l*U)*Z,e[1]=(i*L-n*H-r*U)*Z,e[2]=(x*_-m*M+g*S)*Z,e[3]=(d*M-f*_-u*S)*Z,e[4]=(c*I-a*H-l*D)*Z,e[5]=(t*H-i*I+r*D)*Z,e[6]=(m*b-p*_-g*y)*Z,e[7]=(h*_-d*b+u*y)*Z,e[8]=(a*L-o*I+l*w)*Z,e[9]=(n*I-t*L-r*w)*Z,e[10]=(p*M-x*b+g*v)*Z,e[11]=(f*b-h*M-u*v)*Z,e[12]=(o*D-a*U-c*w)*Z,e[13]=(t*U-n*D+i*w)*Z,e[14]=(x*y-p*S-m*v)*Z,e[15]=(h*S-f*y+d*v)*Z,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,d=r*l,u=r*h,p=r*f,x=a*h,m=a*f,g=o*f,v=c*l,y=c*h,b=c*f,S=n.x,M=n.y,_=n.z;return i[0]=(1-(x+g))*S,i[1]=(u+b)*S,i[2]=(p-y)*S,i[3]=0,i[4]=(u-b)*M,i[5]=(1-(d+g))*M,i[6]=(m+v)*M,i[7]=0,i[8]=(p+y)*_,i[9]=(m-v)*_,i[10]=(1-(d+x))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Br.set(i[0],i[1],i[2]).length(),o=Br.set(i[4],i[5],i[6]).length(),c=Br.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Ai.copy(this);let l=1/a,h=1/o,f=1/c;return Ai.elements[0]*=l,Ai.elements[1]*=l,Ai.elements[2]*=l,Ai.elements[4]*=h,Ai.elements[5]*=h,Ai.elements[6]*=h,Ai.elements[8]*=f,Ai.elements[9]*=f,Ai.elements[10]*=f,t.setFromRotationMatrix(Ai),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=gi,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),p,x;if(c)p=r/(a-r),x=a*r/(a-r);else if(o===gi)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ta)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=gi,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),u=-(n+i)/(n-i),p,x;if(c)p=1/(a-r),x=a/(a-r);else if(o===gi)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===ta)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Xc.prototype.isMatrix4=!0;var qe=Xc,Br=new B,Ai=new qe,S0=new B(0,0,0),w0=new B(1,1,1),Ps=new B,Ko=new B,ni=new B,Kf=new qe,Jf=new In,bi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jf.setFromEuler(this),this.setFromQuaternion(Jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var ja=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},T0=0,Yf=new B,zr=new In,os=new qe,Jo=new B,La=new B,A0=new B,E0=new In,Zf=new B(1,0,0),$f=new B(0,1,0),Qf=new B(0,0,1),ed={type:"added"},R0={type:"removed"},Gr={type:"childadded",child:null},vh={type:"childremoved",child:null},Gt=class s extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new B,t=new bi,n=new In,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new et}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Zf,e)}rotateY(e){return this.rotateOnAxis($f,e)}rotateZ(e){return this.rotateOnAxis(Qf,e)}translateOnAxis(e,t){return Yf.copy(e).applyQuaternion(this.quaternion),this.position.add(Yf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zf,e)}translateY(e){return this.translateOnAxis($f,e)}translateZ(e){return this.translateOnAxis(Qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jo.copy(e):Jo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(La,Jo,this.up):os.lookAt(Jo,La,this.up),this.quaternion.setFromRotationMatrix(os),i&&(os.extractRotation(i.matrixWorld),zr.setFromRotationMatrix(os),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ed),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R0),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ed),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,A0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,E0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),u=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Gt.DEFAULT_UP=new B(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zt=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},C0={type:"move"},ra=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,p=.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(C0)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function yh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ct.workingColorSpace){if(e=_u(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=yh(a,r,e+1/3),this.g=yh(a,r,e),this.b=yh(a,r,e-1/3)}return ct.colorSpaceToWorking(this,i),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=dp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return ct.workingToColorSpace(Bn.copy(this),e),Math.round(pt(Bn.r*255,0,255))*65536+Math.round(pt(Bn.g*255,0,255))*256+Math.round(pt(Bn.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Bn.copy(this),t);let n=Bn.r,i=Bn.g,r=Bn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Bt){ct.workingToColorSpace(Bn.copy(this),e);let t=Bn.r,n=Bn.g,i=Bn.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Is),this.setHSL(Is.h+e,Is.s+t,Is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Is),e.getHSL(Yo);let n=Ha(Is.h,Yo.h,t),i=Ha(Is.s,Yo.s,t),r=Ha(Is.l,Yo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new Ce;Ce.NAMES=dp;var Ka=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ja=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ei=new B,cs=new B,Mh=new B,ls=new B,Hr=new B,Vr=new B,td=new B,Sh=new B,wh=new B,Th=new B,Ah=new Lt,Eh=new Lt,Rh=new Lt,ks=class s{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ei.subVectors(e,t),i.cross(Ei);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ei.subVectors(i,t),cs.subVectors(n,t),Mh.subVectors(e,t);let a=Ei.dot(Ei),o=Ei.dot(cs),c=Ei.dot(Mh),l=cs.dot(cs),h=cs.dot(Mh),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(l*c-o*h)*d,p=(a*h-o*c)*d;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ls)===null?!1:ls.x>=0&&ls.y>=0&&ls.x+ls.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,ls)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ls.x),c.addScaledVector(a,ls.y),c.addScaledVector(o,ls.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ah.setScalar(0),Eh.setScalar(0),Rh.setScalar(0),Ah.fromBufferAttribute(e,t),Eh.fromBufferAttribute(e,n),Rh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ah,r.x),a.addScaledVector(Eh,r.y),a.addScaledVector(Rh,r.z),a}static isFrontFacing(e,t,n,i){return Ei.subVectors(n,t),cs.subVectors(e,t),Ei.cross(cs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),cs.subVectors(this.a,this.b),Ei.cross(cs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Hr.subVectors(i,n),Vr.subVectors(r,n),Sh.subVectors(e,n);let c=Hr.dot(Sh),l=Vr.dot(Sh);if(c<=0&&l<=0)return t.copy(n);wh.subVectors(e,i);let h=Hr.dot(wh),f=Vr.dot(wh);if(h>=0&&f<=h)return t.copy(i);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Hr,a);Th.subVectors(e,r);let u=Hr.dot(Th),p=Vr.dot(Th);if(p>=0&&u<=p)return t.copy(r);let x=u*l-c*p;if(x<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(Vr,o);let m=h*p-u*f;if(m<=0&&f-h>=0&&u-p>=0)return td.subVectors(r,i),o=(f-h)/(f-h+(u-p)),t.copy(i).addScaledVector(td,o);let g=1/(m+x+d);return a=x*g,o=d*g,t.copy(n).addScaledVector(Hr,a).addScaledVector(Vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ri=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ri):Ri.fromBufferAttribute(r,a),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zo.copy(n.boundingBox)),Zo.applyMatrix4(e.matrixWorld),this.union(Zo)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),$o.subVectors(this.max,Da),Wr.subVectors(e.a,Da),qr.subVectors(e.b,Da),Xr.subVectors(e.c,Da),Ls.subVectors(qr,Wr),Ds.subVectors(Xr,qr),ir.subVectors(Wr,Xr);let t=[0,-Ls.z,Ls.y,0,-Ds.z,Ds.y,0,-ir.z,ir.y,Ls.z,0,-Ls.x,Ds.z,0,-Ds.x,ir.z,0,-ir.x,-Ls.y,Ls.x,0,-Ds.y,Ds.x,0,-ir.y,ir.x,0];return!Ch(t,Wr,qr,Xr,$o)||(t=[1,0,0,0,1,0,0,0,1],!Ch(t,Wr,qr,Xr,$o))?!1:(Qo.crossVectors(Ls,Ds),t=[Qo.x,Qo.y,Qo.z],Ch(t,Wr,qr,Xr,$o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hs=[new B,new B,new B,new B,new B,new B,new B,new B],Ri=new B,Zo=new ri,Wr=new B,qr=new B,Xr=new B,Ls=new B,Ds=new B,ir=new B,Da=new B,$o=new B,Qo=new B,sr=new B;function Ch(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){sr.fromArray(s,r);let o=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),c=e.dot(sr),l=t.dot(sr),h=n.dot(sr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var ln=new B,ec=new Qe,P0=0,it=class extends Pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:P0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bu,this.updateRanges=[],this.gpuType=ci,this.version=0,this._normalizationScale=e!==void 0?Fl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ec.fromBufferAttribute(this,t),ec.applyMatrix3(e),this.setXY(t,ec.x,ec.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):yu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Mu(e,this.array)}};var Ya=class extends it{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Za=class extends it{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mt=class extends it{constructor(e,t,n){super(new Float32Array(e),t,n)}},I0=new ri,Na=new B,Ph=new B,bn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):I0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);let t=Na.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Na,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(Ph)),this.expandByPoint(Na.copy(e.center).sub(Ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},L0=0,pi=new qe,Ih=new Gt,jr=new B,ii=new ri,Fa=new ri,Pn=new B,Ut=class s extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i0(e)?Za:Ya)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Fa.setFromBufferAttribute(o),this.morphTargetsRelative?(Pn.addVectors(ii.min,Fa.min),ii.expandByPoint(Pn),Pn.addVectors(ii.max,Fa.max),ii.expandByPoint(Pn)):(ii.expandByPoint(Fa.min),ii.expandByPoint(Fa.max))}ii.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Pn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Pn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pn.fromBufferAttribute(o,l),c&&(jr.fromBufferAttribute(e,l),Pn.add(jr)),i=Math.max(i,n.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new it(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new B,c[D]=new B;let h=new B,f=new B,d=new B,u=new Qe,p=new Qe,x=new Qe,m=new B,g=new B;function v(D,I,U){l[D]=l[I]=l[U]=1,h.fromBufferAttribute(n,D),f.fromBufferAttribute(n,I),d.fromBufferAttribute(n,U),u.fromBufferAttribute(r,D),p.fromBufferAttribute(r,I),x.fromBufferAttribute(r,U),f.sub(h),d.sub(h),p.sub(u),x.sub(u);let L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(m.copy(f).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(L),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(L),o[D].add(m),o[I].add(m),o[U].add(m),c[D].add(g),c[I].add(g),c[U].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,I=y.length;D<I;++D){let U=y[D],L=U.start,H=U.count;for(let N=L,Z=L+H;N<Z;N+=3)v(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let b=new B,S=new B,M=new B,_=new B;function w(D){M.fromBufferAttribute(i,D),_.copy(M);let I=o[D];b.copy(I),b.sub(M.multiplyScalar(M.dot(I))).normalize(),S.crossVectors(_,I);let L=S.dot(c[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,L)}for(let D=0,I=n.count;D<I;++D)l[D]&&w(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new it(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new B,r=new B,a=new B,o=new B,c=new B,l=new B,h=new B,f=new B;if(e)for(let d=0,u=e.count;d<u;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h),u=0,p=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?u=c[x]*o.data.stride+o.offset:u=c[x]*h;for(let g=0;g<h;g++)d[p++]=l[u++]}return new it(d,h,f)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let d=l[h],u=e(d,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let u=l[f];h.push(u.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},aa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bu,this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=nd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=nd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function nd(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Ji()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Wn=new B,oa=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Fl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){qa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new it(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){qa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):yu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Mu(e,this.data.array)}},Lh=new B,D0=new B,N0=new et,Ci=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Lh.subVectors(n,t).cross(D0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Lh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||N0.getNormalMatrix(e),i=this.coplanarPoint(Lh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},F0=0,zn=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Ws,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=Qh,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vc,this.stencilZFail=vc,this.stencilZPass=vc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ci().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var us=new B,Dh=new B,tc=new B,nc=new B,dr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,us)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=us.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(us.copy(this.origin).addScaledVector(this.direction,t),us.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Dh.copy(e).add(t).multiplyScalar(.5),tc.copy(t).sub(e).normalize(),nc.copy(this.origin).sub(Dh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(tc),o=nc.dot(this.direction),c=-nc.dot(tc),l=nc.lengthSq(),h=Math.abs(1-a*a),f,d,u,p;if(h>0)if(f=a*c-o,d=a*o-c,p=r*h,f>=0)if(d>=-p)if(d<=p){let x=1/h;f*=x,d*=x,u=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d<=-p?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=p?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Dh).addScaledVector(tc,d),u}intersectSphere(e,t){if(e.radius<0)return null;us.subVectors(e.center,this.origin);let n=us.dot(this.direction),i=us.dot(us)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,us)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,u=e.z-a.z,p=t.x-a.x,x=t.y-a.y,m=t.z-a.z,g=n.x-a.x,v=n.y-a.y,y=n.z-a.z,b=Math.abs(c),S=Math.abs(l),M=Math.abs(h),_,w,D,I,U,L,H,N,Z,te,z,le;if(b>=S&&b>=M?(D=c,L=f,Z=p,le=g,c>=0?(_=l,w=h,I=d,U=u,H=x,N=m,te=v,z=y):(_=h,w=l,I=u,U=d,H=m,N=x,te=y,z=v)):S>=M?(D=l,L=d,Z=x,le=v,l>=0?(_=h,w=c,I=u,U=f,H=m,N=p,te=y,z=g):(_=c,w=h,I=f,U=u,H=p,N=m,te=g,z=y)):(D=h,L=u,Z=m,le=y,h>=0?(_=c,w=l,I=f,U=d,H=p,N=x,te=g,z=v):(_=l,w=c,I=d,U=f,H=x,N=p,te=v,z=g)),D===0)return null;let J=_/D,Q=w/D,he=1/D,Ue=I-J*L,Ye=U-Q*L,$=H-J*Z,Me=N-Q*Z,De=te-J*le,Be=z-Q*le,Re=De*Me-Be*$,je=Ue*Be-Ye*De,Dt=$*Ye-Me*Ue;if(i){if(Re<0||je<0||Dt<0)return null}else if((Re<0||je<0||Dt<0)&&(Re>0||je>0||Dt>0))return null;let Xe=Re+je+Dt;if(Xe===0)return null;let xt=he*(Re*L+je*Z+Dt*le);return(Xe>0?xt<0:xt>0)?null:this.at(xt/Xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},id=new qe,rr=new dr,ic=new bn,sd=new B,sc=new B,rc=new B,ac=new B,Nh=new B,oc=new B,rd=new B,cc=new B,ut=class extends Gt{constructor(e=new Ut,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){oc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(Nh.fromBufferAttribute(f,e),a?oc.addScaledVector(Nh,h):oc.addScaledVector(Nh.sub(t),h))}t.add(oc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ic.copy(n.boundingSphere),ic.applyMatrix4(r),rr.copy(e.ray).recast(e.near),!(ic.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ic,sd)===null||rr.origin.distanceToSquared(sd)>(e.far-e.near)**2))&&(id.copy(r).invert(),rr.copy(e.ray).applyMatrix4(id),!(n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rr)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=a[m.materialIndex],v=Math.max(m.start,u.start),y=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let b=v,S=y;b<S;b+=3){let M=o.getX(b),_=o.getX(b+1),w=o.getX(b+2);i=lc(this,g,e,n,l,h,f,M,_,w),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let v=o.getX(m),y=o.getX(m+1),b=o.getX(m+2);i=lc(this,a,e,n,l,h,f,v,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=a[m.materialIndex],v=Math.max(m.start,u.start),y=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let b=v,S=y;b<S;b+=3){let M=b,_=b+1,w=b+2;i=lc(this,g,e,n,l,h,f,M,_,w),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let v=m,y=m+1,b=m+2;i=lc(this,a,e,n,l,h,f,v,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function k0(s,e,t,n,i,r,a,o){let c;if(e.side===Fn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===ji,o),c===null)return null;cc.copy(o),cc.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(cc);return l<t.near||l>t.far?null:{distance:l,point:cc.clone(),object:s}}function lc(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,sc),s.getVertexPosition(c,rc),s.getVertexPosition(l,ac);let h=k0(s,e,t,n,sc,rc,ac,rd);if(h){let f=new B;ks.getBarycoord(rd,sc,rc,ac,f),i&&(h.uv=ks.getInterpolatedAttribute(i,o,c,l,f,new Qe)),r&&(h.uv1=ks.getInterpolatedAttribute(r,o,c,l,f,new Qe)),a&&(h.normal=ks.getInterpolatedAttribute(a,o,c,l,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new B,materialIndex:0};ks.getNormal(sc,rc,ac,d.normal),h.face=d,h.barycoord=f}return h}var ka=new Lt,ad=new Lt,od=new Lt,U0=new Lt,cd=new qe,hc=new B,Fh=new bn,ld=new qe,kh=new dr,pr=class extends ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zh,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ri),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hc),this.boundingBox.expandByPoint(hc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hc),this.boundingSphere.expandByPoint(hc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fh.copy(this.boundingSphere),Fh.applyMatrix4(i),e.ray.intersectsSphere(Fh)!==!1&&(ld.copy(i).invert(),kh.copy(e.ray).applyMatrix4(ld),!(this.boundingBox!==null&&kh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$d?this.bindMatrixInverse.copy(this.bindMatrix).invert():We("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;ad.fromBufferAttribute(i.attributes.skinIndex,e),od.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(ka.copy(t),t.set(0,0,0,0)):(ka.set(t.x,t.y,t.z,1),t.set(0,0,0)),ka.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=od.getComponent(r);if(a!==0){let o=ad.getComponent(r);cd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(U0.copy(ka).applyMatrix4(cd),a)}}return t.isVector4&&(t.w=ka.w),t.applyMatrix4(this.bindMatrixInverse)}},ca=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Os=class extends gn{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Yt,h=Yt,f,d){super(null,a,o,c,l,h,i,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hd=new qe,O0=new qe,mr=class s{constructor(e=[],t=[]){this.uuid=Ji(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){We("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:O0;hd.multiplyMatrices(o,t[r]),hd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Os(t,e,e,vi,ci);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(We("Skeleton: No bone found with UUID:",r),a=new ca),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},ms=class extends it{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Kr=new qe,ud=new qe,uc=[],fd=new ri,B0=new qe,Ua=new ut,Oa=new bn,_n=class extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,B0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Kr),fd.copy(e.boundingBox).applyMatrix4(Kr),this.boundingBox.union(fd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Kr),Oa.copy(e.boundingSphere).applyMatrix4(Kr),this.boundingSphere.union(Oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ua.geometry=this.geometry,Ua.material=this.material,Ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oa.copy(this.boundingSphere),Oa.applyMatrix4(n),e.ray.intersectsSphere(Oa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Kr),ud.multiplyMatrices(n,Kr),Ua.matrixWorld=ud,Ua.raycast(e,uc);for(let a=0,o=uc.length;a<o;a++){let c=uc[a];c.instanceId=r,c.object=this,t.push(c)}uc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Os(new Float32Array(i*this.count),i,this.count,xa,ci));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ar=new bn,z0=new Qe(.5,.5),fc=new B,Bs=class{constructor(e=new Ci,t=new Ci,n=new Ci,i=new Ci,r=new Ci,a=new Ci){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],y=r[13],b=r[14],S=r[15];if(i[0].setComponents(l-a,u-h,g-p,S-v).normalize(),i[1].setComponents(l+a,u+h,g+p,S+v).normalize(),i[2].setComponents(l+o,u+f,g+x,S+y).normalize(),i[3].setComponents(l-o,u-f,g-x,S-y).normalize(),n)i[4].setComponents(c,d,m,b).normalize(),i[5].setComponents(l-c,u-d,g-m,S-b).normalize();else if(i[4].setComponents(l-c,u-d,g-m,S-b).normalize(),t===gi)i[5].setComponents(l+c,u+d,g+m,S+b).normalize();else if(t===ta)i[5].setComponents(c,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);let t=z0.distanceTo(e.center);return ar.radius=.7071067811865476+t,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(fc.x=i.normal.x>0?e.max.x:e.min.x,fc.y=i.normal.y>0?e.max.y:e.min.y,fc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},dd=new qe,Ic=class s{constructor(){this.coordinateSystem=gi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];dd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Bs),n[i].setFromProjectionMatrix(dd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Bs),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var la=class extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Lc=new B,Dc=new B,pd=new qe,Ba=new dr,dc=new bn,Uh=new B,md=new B,gr=class extends Gt{constructor(e=new Ut,t=new la){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Lc.fromBufferAttribute(t,i-1),Dc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Lc.distanceTo(Dc);e.setAttribute("lineDistance",new mt(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(i),dc.radius+=r,e.ray.intersectsSphere(dc)===!1)return;pd.copy(i).invert(),Ba.copy(e.ray).applyMatrix4(pd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=u,m=p-1;x<m;x+=l){let g=h.getX(x),v=h.getX(x+1),y=pc(this,e,Ba,c,g,v,x);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(u),g=pc(this,e,Ba,c,x,m,p-1);g&&t.push(g)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=u,m=p-1;x<m;x+=l){let g=pc(this,e,Ba,c,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=pc(this,e,Ba,c,p-1,u,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function pc(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Lc.fromBufferAttribute(o,i),Dc.fromBufferAttribute(o,r),t.distanceSqToSegment(Lc,Dc,Uh,md)>n)return;Uh.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Uh);if(!(l<e.near||l>e.far))return{distance:l,point:md.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var gd=new B,bd=new B,$a=class extends gr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)gd.fromBufferAttribute(t,i),bd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gd.distanceTo(bd);e.setAttribute("lineDistance",new mt(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Qa=class extends gr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ha=class extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xd=new qe,Hh=new dr,mc=new bn,gc=new B,gs=class extends Gt{constructor(e=new Ut,t=new ha){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(i),mc.radius+=r,e.ray.intersectsSphere(mc)===!1)return;xd.copy(i).invert(),Hh.copy(e.ray).applyMatrix4(xd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let p=d,x=u;p<x;p++){let m=l.getX(p);gc.fromBufferAttribute(f,m),_d(gc,m,c,i,e,t,this)}}else{let d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let p=d,x=u;p<x;p++)gc.fromBufferAttribute(f,p),_d(gc,p,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _d(s,e,t,n,i,r,a){let o=Hh.distanceSqToPoint(s);if(o<t){let c=new B;Hh.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var eo=class extends gn{constructor(e=[],t=wr,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},to=class extends gn{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bs=class extends gn{constructor(e,t,n=Li,i,r,a,o=Yt,c=Yt,l,h=ps,f=1){if(h!==ps&&h!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},no=class extends bs{constructor(e,t=Li,n=wr,i,r,a=Yt,o=Yt,c,l=ps){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},io=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xs=class s extends Ut{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],d=0,u=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(f,2));function p(x,m,g,v,y,b,S,M,_,w,D){let I=b/_,U=S/w,L=b/2,H=S/2,N=M/2,Z=_+1,te=w+1,z=0,le=0,J=new B;for(let Q=0;Q<te;Q++){let he=Q*U-H;for(let Ue=0;Ue<Z;Ue++){let Ye=Ue*I-L;J[x]=Ye*v,J[m]=he*y,J[g]=N,l.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[g]=M>0?1:-1,h.push(J.x,J.y,J.z),f.push(Ue/_),f.push(1-Q/w),z+=1}}for(let Q=0;Q<w;Q++)for(let he=0;he<_;he++){let Ue=d+he+Z*Q,Ye=d+he+Z*(Q+1),$=d+(he+1)+Z*(Q+1),Me=d+(he+1)+Z*Q;c.push(Ue,Ye,Me),c.push(Ye,$,Me),le+=6}o.addGroup(u,le,D),u+=le,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Wi=class s extends Ut{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,f=Math.PI/2*e,d=t,u=2*f+d,p=n*2+r,x=i+1,m=new B,g=new B;for(let v=0;v<=p;v++){let y=0,b=0,S=0,M=0;if(v<=n){let D=v/n,I=D*Math.PI/2;b=-h-e*Math.cos(I),S=e*Math.sin(I),M=-e*Math.cos(I),y=D*f}else if(v<=n+r){let D=(v-n)/r;b=-h+D*t,S=e,M=0,y=f+D*d}else{let D=(v-n-r)/n,I=D*Math.PI/2;b=h+e*Math.sin(I),S=e*Math.cos(I),M=e*Math.sin(I),y=f+d+D*f}let _=Math.max(0,Math.min(1,y/u)),w=0;v===0?w=.5/i:v===p&&(w=-.5/i);for(let D=0;D<=i;D++){let I=D/i,U=I*Math.PI*2,L=Math.sin(U),H=Math.cos(U);g.x=-S*H,g.y=b,g.z=S*L,o.push(g.x,g.y,g.z),m.set(-S*H,M,S*L),m.normalize(),c.push(m.x,m.y,m.z),l.push(I+w,_)}if(v>0){let D=(v-1)*x;for(let I=0;I<i;I++){let U=D+I,L=D+I+1,H=v*x+I,N=v*x+I+1;a.push(U,L,H),a.push(L,N,H)}}}this.setIndex(a),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},so=class s extends Ut{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new B,h=new Qe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let u=n+f/t*i;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xi=class s extends Ut{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],d=[],u=[],p=0,x=[],m=n/2,g=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(u,2));function v(){let b=new B,S=new B,M=0,_=(t-e)/n;for(let w=0;w<=r;w++){let D=[],I=w/r,U=I*(t-e)+e;for(let L=0;L<=i;L++){let H=L/i,N=H*c+o,Z=Math.sin(N),te=Math.cos(N);S.x=U*Z,S.y=-I*n+m,S.z=U*te,f.push(S.x,S.y,S.z),b.set(Z,_,te).normalize(),d.push(b.x,b.y,b.z),u.push(H,1-I),D.push(p++)}x.push(D)}for(let w=0;w<i;w++)for(let D=0;D<r;D++){let I=x[D][w],U=x[D+1][w],L=x[D+1][w+1],H=x[D][w+1];(e>0||D!==0)&&(h.push(I,U,H),M+=3),(t>0||D!==r-1)&&(h.push(U,L,H),M+=3)}l.addGroup(g,M,0),g+=M}function y(b){let S=p,M=new Qe,_=new B,w=0,D=b===!0?e:t,I=b===!0?1:-1;for(let L=1;L<=i;L++)f.push(0,m*I,0),d.push(0,I,0),u.push(.5,.5),p++;let U=p;for(let L=0;L<=i;L++){let N=L/i*c+o,Z=Math.cos(N),te=Math.sin(N);_.x=D*te,_.y=m*I,_.z=D*Z,f.push(_.x,_.y,_.z),d.push(0,I,0),M.x=Z*.5+.5,M.y=te*.5*I+.5,u.push(M.x,M.y),p++}for(let L=0;L<i;L++){let H=S+L,N=U+L;b===!0?h.push(N,N+1,H):h.push(N+1,N,H),w+=3}l.addGroup(g,w,b===!0?1:2),g+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ii=class s extends xi{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ro=class s extends Ut{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let y=new B,b=new B,S=new B;for(let M=0;M<t.length;M+=3)u(t[M+0],y),u(t[M+1],b),u(t[M+2],S),c(y,b,S,v)}function c(v,y,b,S){let M=S+1,_=[];for(let w=0;w<=M;w++){_[w]=[];let D=v.clone().lerp(b,w/M),I=y.clone().lerp(b,w/M),U=M-w;for(let L=0;L<=U;L++)L===0&&w===M?_[w][L]=D:_[w][L]=D.clone().lerp(I,L/U)}for(let w=0;w<M;w++)for(let D=0;D<2*(M-w)-1;D++){let I=Math.floor(D/2);D%2===0?(d(_[w][I+1]),d(_[w+1][I]),d(_[w][I])):(d(_[w][I+1]),d(_[w+1][I+1]),d(_[w+1][I]))}}function l(v){let y=new B;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(v),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function h(){let v=new B;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let b=m(v)/2/Math.PI+.5,S=g(v)/Math.PI+.5;a.push(b,1-S)}p(),f()}function f(){for(let v=0;v<a.length;v+=6){let y=a[v+0],b=a[v+2],S=a[v+4],M=Math.max(y,b,S),_=Math.min(y,b,S);M>.9&&_<.1&&(y<.2&&(a[v+0]+=1),b<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function u(v,y){let b=v*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function p(){let v=new B,y=new B,b=new B,S=new B,M=new Qe,_=new Qe,w=new Qe;for(let D=0,I=0;D<r.length;D+=9,I+=6){v.set(r[D+0],r[D+1],r[D+2]),y.set(r[D+3],r[D+4],r[D+5]),b.set(r[D+6],r[D+7],r[D+8]),M.set(a[I+0],a[I+1]),_.set(a[I+2],a[I+3]),w.set(a[I+4],a[I+5]),S.copy(v).add(y).add(b).divideScalar(3);let U=m(S);x(M,I+0,v,U),x(_,I+2,y,U),x(w,I+4,b,U)}}function x(v,y,b,S){S<0&&v.x===1&&(a[y]=v.x-1),b.x===0&&b.z===0&&(a[y]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var ao=class s extends ro{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var oo=class s extends ro{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ai=class s extends Ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,f=e/o,d=t/c,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*d-a;for(let y=0;y<l;y++){let b=y*f-r;p.push(b,-v,0),x.push(0,0,1),m.push(y/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){let y=v+l*g,b=v+l*(g+1),S=v+1+l*(g+1),M=v+1+l*g;u.push(y,b,M),u.push(b,S,M)}this.setIndex(u),this.setAttribute("position",new mt(p,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},co=class s extends Ut{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],f=e,d=(t-e)/i,u=new B,p=new Qe;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let g=r+m/n*a;u.x=f*Math.cos(g),u.y=f*Math.sin(g),c.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,h.push(p.x,p.y)}f+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let g=0;g<n;g++){let v=g+m,y=v,b=v+n+1,S=v+n+2,M=v+1;o.push(y,b,M),o.push(b,S,M)}}this.setIndex(o),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var oi=class s extends Ut{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new B,d=new B,u=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let v=[],y=g/n,b=a+y*o,S=e*Math.cos(b),M=Math.sqrt(e*e-S*S),_=0;g===0&&a===0?_=.5/t:g===n&&c===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){let D=w/t,I=i+D*r;f.x=-M*Math.cos(I),f.y=S,f.z=M*Math.sin(I),p.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(D+_,1-y),v.push(l++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let y=h[g][v+1],b=h[g][v],S=h[g+1][v],M=h[g+1][v+1];(g!==0||a>0)&&u.push(y,b,M),(g!==n-1||c<Math.PI)&&u.push(b,S,M)}this.setIndex(u),this.setAttribute("position",new mt(p,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var br=class s extends Ut{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],f=[],d=new B,u=new B,p=new B;for(let x=0;x<=n;x++){let m=a+x/n*o;for(let g=0;g<=i;g++){let v=g/i*r;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),l.push(u.x,u.y,u.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),p.subVectors(u,d).normalize(),h.push(p.x,p.y,p.z),f.push(g/i),f.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){let g=(i+1)*x+m-1,v=(i+1)*(x-1)+m-1,y=(i+1)*(x-1)+m,b=(i+1)*x+m;c.push(g,v,b),c.push(v,y,b)}this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Er(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(vd(i))i.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(vd(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Gn(s){let e={};for(let t=0;t<s.length;t++){let n=Er(s[t]);for(let i in n)e[i]=n[i]}return e}function vd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function G0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Su(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var pp={clone:Er,merge:Gn},H0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H0,this.fragmentShader=V0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=G0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ce().setHex(i.value);break;case"v2":this.uniforms[n].value=new Qe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Lt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new et().fromArray(i.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Nc=class extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xr=class extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xn=class extends xr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return lr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){lr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var lo=class extends zn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zs=class extends zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=jc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fc=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kc=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function za(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function W0(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function yd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function q0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var qi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Uc=class extends qi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:or,endingEnd:or}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case cr:r=e,o=2*t-n;break;case Va:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cr:a=e,c=2*n-t;break;case Va:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(n-t)/(i-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,y=(-1-u)*m+(1.5+u)*x+.5*p,b=u*m-u*x;for(let S=0;S!==o;++S)r[S]=g*a[h+S]+v*a[l+S]+y*a[c+S]+b*a[f+S];return r}},ho=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*f+a[c+d]*h;return r}},Oc=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Bc=class extends qi{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-t)/(i-t),x=1-p;for(let m=0;m!==o;++m)r[m]=a[l+m]*x+a[c+m]*p;return r}let d=o*2,u=e-1;for(let p=0;p!==o;++p){let x=a[l+p],m=a[c+p],g=u*d+p*2,v=f[g],y=f[g+1],b=e*d+p*2,S=h[b],M=h[b+1],_=j0(n,t,v,S,i);r[p]=mp(_,x,y,M,m)}return r}};function mp(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function X0(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function j0(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=mp(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let c=X0(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Qn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fs(t,this.TimeBufferType),this.values=Fs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fs(e.times,Array),values:Fs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),za(e.settings)&&(n.settings={inTangents:Fs(e.settings.inTangents,Array),outTangents:Fs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case hr:t=this.InterpolantFactoryMethodDiscrete;break;case ur:t=this.InterpolantFactoryMethodLinear;break;case _c:t=this.InterpolantFactoryMethodSmooth;break;case Gh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return ur;case this.InterpolantFactoryMethodSmooth:return _c;case this.InterpolantFactoryMethodBezier:return Gh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;za(this.settings)&&(Md(this.settings.inTangents,e),Md(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;za(this.settings)&&(Sd(this.settings.inTangents,e),Sd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){$e("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){$e("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&s0(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){$e("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_c,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let f=o*n,d=f-n,u=f+n;for(let p=0;p!==n;++p){let x=t[f+p];if(x!==t[d+p]||x!==t[u+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[f+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,za(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Md(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Sd(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=ur;var _s=class extends Qn{constructor(e,t,n){super(e,t,n)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=hr;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends Qn{constructor(e,t,n,i){super(e,t,n,i)}};uo.prototype.ValueTypeName="color";var vs=class extends Qn{constructor(e,t,n,i){super(e,t,n,i)}};vs.prototype.ValueTypeName="number";var zc=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)In.slerpFlat(r,0,a,l-o,a,l,c);return r}},ys=class extends Qn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}};ys.prototype.ValueTypeName="quaternion";ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends Qn{constructor(e,t,n){super(e,t,n)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=hr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends Qn{constructor(e,t,n,i){super(e,t,n,i)}};Gs.prototype.ValueTypeName="vector";var _r=class{constructor(e="",t=-1,n=[],i=Nl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ji(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(J0(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=W0(c);c=yd(c,1,h),l=yd(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new vs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let f=h[1],d=i[f];d||(i[f]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function K0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vs;case"vector":case"vector2":case"vector3":case"vector4":return Gs;case"color":return uo;case"quaternion":return ys;case"bool":case"boolean":return _s;case"string":return Ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function J0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=K0(s.type);if(s.times===void 0){let n=[],i=[];q0(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),za(s.settings)&&(t.settings={inTangents:Fs(s.settings.inTangents,Float32Array),outTangents:Fs(s.settings.outTangents,Float32Array)}),t}var Vi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(wd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!wd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function wd(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Gc=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let u=l[f],p=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gp=new Gc,Xi=class{constructor(e){this.manager=e!==void 0?e:gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Xi.DEFAULT_MATERIAL_NAME="__DEFAULT";var fs={},Vh=class extends Error{constructor(e,t){super(e),this.response=t}},ua=class extends Xi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Vi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(fs[e]!==void 0){fs[e].push({onLoad:t,onProgress:n,onError:i});return}fs[e]=[],fs[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&We("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=fs[e],f=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=d?parseInt(d):0,p=u!==0,x=0,m=new ReadableStream({start(g){v();function v(){f.read().then(({done:y,value:b})=>{if(y)g.close();else{x+=b.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:u});for(let M=0,_=h.length;M<_;M++){let w=h[M];w.onProgress&&w.onProgress(S)}g.enqueue(b),v()}},y=>{g.error(y)})}}});return new Response(m)}else throw new Vh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,u=new TextDecoder(d);return l.arrayBuffer().then(p=>u.decode(p))}}}).then(l=>{Vi.add(`file:${e}`,l);let h=fs[e];delete fs[e];for(let f=0,d=h.length;f<d;f++){let u=h[f];u.onLoad&&u.onLoad(l)}}).catch(l=>{let h=fs[e];if(h===void 0)throw this.manager.itemError(e),l;delete fs[e];for(let f=0,d=h.length;f<d;f++){let u=h[f];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Jr=new WeakMap,Hc=class extends Xi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Jr.get(a);f===void 0&&(f=[],Jr.set(a,f)),f.push({onLoad:t,onError:i})}return a}let o=na("img");function c(){h(),t&&t(this);let f=Jr.get(this)||[];for(let d=0;d<f.length;d++){let u=f[d];u.onLoad&&u.onLoad(this)}Jr.delete(this),r.manager.itemEnd(e)}function l(f){h(),i&&i(f),Vi.remove(`image:${e}`);let d=Jr.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(f)}Jr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Vi.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var fo=class extends Xi{constructor(e){super(e)}load(e,t,n,i){let r=new gn,a=new Hc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Hs=class extends Gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},po=class extends Hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Oh=new qe,Td=new B,Ad=new B,fa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Td.setFromMatrixPosition(e.matrixWorld),t.position.copy(Td),Ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ad),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Oh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Oh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===ta||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Oh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bc=new B,xc=new In,Hi=new B,mo=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bc,xc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bc,xc,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(bc,xc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bc,xc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ns=new B,Ed=new Qe,Rd=new Qe,pn=class extends mo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,t){return this.getViewBounds(e,Ed,Rd),t.subVectors(Rd,Ed)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ga*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wh=class extends fa{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=fr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},go=class extends Hs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},qh=class extends fa{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}},Vs=class extends Hs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},vr=class extends mo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xh=class extends fa{constructor(){super(new vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yr=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Xh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},bo=class extends Hs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ss=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Bh=new WeakMap,xo=class extends Xi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&We("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&We("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Bh.has(a)===!0?(i&&i(Bh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Vi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Bh.set(c,l),Vi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Vi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Yr=-90,Zr=1,da=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new pn(Yr,Zr,e,t);i.layers=this.layers,this.add(i);let r=new pn(Yr,Zr,e,t);r.layers=this.layers,this.add(r);let a=new pn(Yr,Zr,e,t);a.layers=this.layers,this.add(a);let o=new pn(Yr,Zr,e,t);o.layers=this.layers,this.add(o);let c=new pn(Yr,Zr,e,t);c.layers=this.layers,this.add(c);let l=new pn(Yr,Zr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Vc=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Wc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){In.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;In.multiplyQuaternionsFlat(e,a,e,t,e,n),In.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},wu="\\[\\]\\.:\\/",Y0=new RegExp("["+wu+"]","g"),Tu="[^"+wu+"]",Z0="[^"+wu.replace("\\.","")+"]",$0=/((?:WC+[\/:])*)/.source.replace("WC",Tu),Q0=/(WCOD+)?/.source.replace("WCOD",Z0),eg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tu),tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tu),ng=new RegExp("^"+$0+Q0+eg+tg+"$"),ig=["material","materials","bones","map"],jh=class{constructor(e,t,n){let i=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Y0,"")}static parseTrackName(e){let t=ng.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);ig.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=jh;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qc=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:or,endingEnd:or};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Ro,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case ep:for(let h=0,f=c.length;h!==f;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Nl:default:for(let h=0,f=c.length;h!==f;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===Qd;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Dl){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=cr,i.endingEnd=cr):(e?i.endingStart=this.zeroSlopeAtStart?cr:or:i.endingStart=Va,t?i.endingEnd=this.zeroSlopeAtEnd?cr:or:i.endingEnd=Va)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},sg=new Float32Array(1),_o=class extends Pi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let f=0;f!==r;++f){let d=i[f],u=d.name,p=h[u];if(p!==void 0)++p.referenceCount,a[f]=p;else{if(p=a[f],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,u));continue}let x=t&&t._propertyBindings[f].binding.parsedPath;p=new Wc(kt.create(n,u,x),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,u),a[f]=p}o[f].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let f=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete f[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ho(new Float32Array(2),new Float32Array(2),1,sg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?_r.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Nl),c!==void 0){let f=c.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new qc(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?_r.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,f=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,f._cacheIndex=h,t[h]=f,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Iu=class Iu{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Iu.prototype.isMatrix2=!0;var Kh=Iu;function Au(s,e,t,n){let i=rg(n);switch(t){case uu:return s*e;case xa:return s*e/i.components*i.byteLength;case el:return s*e/i.components*i.byteLength;case qs:return s*e*2/i.components*i.byteLength;case tl:return s*e*2/i.components*i.byteLength;case fu:return s*e*3/i.components*i.byteLength;case vi:return s*e*4/i.components*i.byteLength;case nl:return s*e*4/i.components*i.byteLength;case Mo:case So:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wo:case To:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sl:case al:return Math.max(s,16)*Math.max(e,8)/4;case il:case rl:return Math.max(s,8)*Math.max(e,8)/2;case ol:case cl:case hl:case ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ll:case Ao:case fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case bl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Al:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case El:case Rl:case Cl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pl:case Il:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Eo:case Ll:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rg(s){switch(s){case ei:case ou:return{byteLength:1,components:1};case ba:case cu:case Di:return{byteLength:2,components:1};case $c:case Qc:return{byteLength:2,components:4};case Li:case Zc:case ci:return{byteLength:4,components:1};case lu:case hu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Op(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function og(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,f=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=s.SHORT;else if(l instanceof Uint32Array)u=s.UNSIGNED_INT;else if(l instanceof Int32Array)u=s.INT;else if(l instanceof Int8Array)u=s.BYTE;else if(l instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(s.bindBuffer(l,o),f.length===0)s.bufferSubData(l,0,h);else{f.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<f.length;u++){let p=f[d],x=f[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,p=f.length;u<p;u++){let x=f[u];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lg=`#ifdef USE_ALPHAHASH
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
#endif`,hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pg=`#ifdef USE_AOMAP
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
#endif`,mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gg=`#ifdef USE_BATCHING
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
#endif`,bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yg=`#ifdef USE_IRIDESCENCE
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
#endif`,Mg=`#ifdef USE_BUMPMAP
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ig=`#define PI 3.141592653589793
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
} // validated`,Lg=`vec3 transformedNormal = objectNormal;
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
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ug="gl_FragColor = linearToOutputTexel( gl_FragColor );",Og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kg=`#ifdef USE_GRADIENTMAP
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
}`,Jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$g=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qg=`#ifdef USE_ENVMAP
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
#endif`,eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sb=`PhysicalMaterial material;
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
#endif`,rb=`uniform sampler2D dfgLUT;
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
}`,ab=`
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
#endif`,ob=`#if defined( RE_IndirectDiffuse )
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
#endif`,cb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lb=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bb=`#if defined( USE_POINTS_UV )
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
#endif`,xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yb=`#if defined( USE_MORPHCOLORS )
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
#endif`,Mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sb=`#ifdef USE_MORPHTARGETS
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
#endif`,wb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pb=`#ifdef USE_NORMALMAP
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
#endif`,Ib=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ob=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xb=`float getShadowMask() {
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
}`,jb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kb=`#ifdef USE_SKINNING
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
#endif`,Jb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yb=`#ifdef USE_SKINNING
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
#endif`,Zb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tx=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform float backgroundBlurriness;
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`#include <common>
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
}`,px=`#if DEPTH_PACKING == 3200
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
}`,mx=`#define DISTANCE
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
}`,gx=`#define DISTANCE
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`uniform float scale;
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
}`,vx=`uniform vec3 diffuse;
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
}`,yx=`#include <common>
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
}`,Mx=`uniform vec3 diffuse;
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
}`,Sx=`#define LAMBERT
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
}`,wx=`#define LAMBERT
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
}`,Tx=`#define MATCAP
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
}`,Ax=`#define MATCAP
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
}`,Ex=`#define NORMAL
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define PHONG
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
}`,Px=`#define PHONG
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
}`,Ix=`#define STANDARD
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
}`,Lx=`#define STANDARD
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
}`,Dx=`#define TOON
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
}`,Nx=`#define TOON
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
}`,Fx=`uniform float size;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Ux=`#include <common>
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
}`,Ox=`uniform vec3 color;
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
}`,Bx=`uniform float rotation;
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
}`,zx=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:cg,alphahash_pars_fragment:lg,alphamap_fragment:hg,alphamap_pars_fragment:ug,alphatest_fragment:fg,alphatest_pars_fragment:dg,aomap_fragment:pg,aomap_pars_fragment:mg,batching_pars_vertex:gg,batching_vertex:bg,begin_vertex:xg,beginnormal_vertex:_g,bsdfs:vg,iridescence_fragment:yg,bumpmap_pars_fragment:Mg,clipping_planes_fragment:Sg,clipping_planes_pars_fragment:wg,clipping_planes_pars_vertex:Tg,clipping_planes_vertex:Ag,color_fragment:Eg,color_pars_fragment:Rg,color_pars_vertex:Cg,color_vertex:Pg,common:Ig,defaultnormal_vertex:Lg,displacementmap_pars_vertex:Dg,displacementmap_vertex:Ng,emissivemap_fragment:Fg,emissivemap_pars_fragment:kg,colorspace_fragment:Ug,colorspace_pars_fragment:Og,envmap_fragment:Bg,envmap_common_pars_fragment:zg,envmap_pars_fragment:Gg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:Qg,envmap_vertex:Vg,fog_vertex:Wg,fog_pars_vertex:qg,fog_fragment:Xg,fog_pars_fragment:jg,gradientmap_pars_fragment:Kg,lightmap_pars_fragment:Jg,lights_lambert_fragment:Yg,lights_lambert_pars_fragment:Zg,lights_pars_begin:$g,lights_toon_fragment:eb,lights_toon_pars_fragment:tb,lights_phong_fragment:nb,lights_phong_pars_fragment:ib,lights_physical_fragment:sb,lights_physical_pars_fragment:rb,lights_fragment_begin:ab,lights_fragment_maps:ob,lights_fragment_end:cb,lightprobes_pars_fragment:lb,logdepthbuf_fragment:hb,logdepthbuf_pars_fragment:ub,logdepthbuf_pars_vertex:fb,logdepthbuf_vertex:db,map_fragment:pb,map_pars_fragment:mb,map_particle_fragment:gb,map_particle_pars_fragment:bb,metalnessmap_fragment:xb,metalnessmap_pars_fragment:_b,morphinstance_vertex:vb,morphcolor_vertex:yb,morphnormal_vertex:Mb,morphtarget_pars_vertex:Sb,morphtarget_vertex:wb,normal_fragment_begin:Tb,normal_fragment_maps:Ab,normal_pars_fragment:Eb,normal_pars_vertex:Rb,normal_vertex:Cb,normalmap_pars_fragment:Pb,clearcoat_normal_fragment_begin:Ib,clearcoat_normal_fragment_maps:Lb,clearcoat_pars_fragment:Db,iridescence_pars_fragment:Nb,opaque_fragment:Fb,packing:kb,premultiplied_alpha_fragment:Ub,project_vertex:Ob,dithering_fragment:Bb,dithering_pars_fragment:zb,roughnessmap_fragment:Gb,roughnessmap_pars_fragment:Hb,shadowmap_pars_fragment:Vb,shadowmap_pars_vertex:Wb,shadowmap_vertex:qb,shadowmask_pars_fragment:Xb,skinbase_vertex:jb,skinning_pars_vertex:Kb,skinning_vertex:Jb,skinnormal_vertex:Yb,specularmap_fragment:Zb,specularmap_pars_fragment:$b,tonemapping_fragment:Qb,tonemapping_pars_fragment:ex,transmission_fragment:tx,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:sx,uv_vertex:rx,worldpos_vertex:ax,background_vert:ox,background_frag:cx,backgroundCube_vert:lx,backgroundCube_frag:hx,cube_vert:ux,cube_frag:fx,depth_vert:dx,depth_frag:px,distance_vert:mx,distance_frag:gx,equirect_vert:bx,equirect_frag:xx,linedashed_vert:_x,linedashed_frag:vx,meshbasic_vert:yx,meshbasic_frag:Mx,meshlambert_vert:Sx,meshlambert_frag:wx,meshmatcap_vert:Tx,meshmatcap_frag:Ax,meshnormal_vert:Ex,meshnormal_frag:Rx,meshphong_vert:Cx,meshphong_frag:Px,meshphysical_vert:Ix,meshphysical_frag:Lx,meshtoon_vert:Dx,meshtoon_frag:Nx,points_vert:Fx,points_frag:kx,shadow_vert:Ux,shadow_frag:Ox,sprite_vert:Bx,sprite_frag:zx},Pe={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Zi={basic:{uniforms:Gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Gn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Gn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Gn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Gn([Pe.points,Pe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Gn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Gn([Pe.common,Pe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Gn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Gn([Pe.sprite,Pe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Gn([Pe.common,Pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Gn([Pe.lights,Pe.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Zi.physical={uniforms:Gn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Ul={r:0,b:0,g:0},Gx=new qe,Bp=new et;Bp.set(-1,0,0,0,1,0,0,0,1);function Hx(s,e,t,n,i,r){let a=new Ce(0),o=i===!0?0:1,c,l,h=null,f=0,d=null;function u(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){let b=v.backgroundBlurriness>0;y=e.get(y,b)}return y}function p(v){let y=!1,b=u(v);b===null?m(a,o):b&&b.isColor&&(m(b,1),y=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,y){let b=u(y);b&&b.isCubeTexture?(l===void 0&&(l=new ut(new xs(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Er(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,M,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(y.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Bp),l.material.toneMapped=ct.getTransfer(b.colorSpace)!==Et,(h!==b||f!==b.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ut(new ai(2,2),new Nn({name:"BackgroundMaterial",uniforms:Er(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ct.getTransfer(b.colorSpace)!==Et,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,y){v.getRGB(Ul,Su(s)),t.buffers.color.setClear(Ul.r,Ul.g,Ul.b,y,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:p,addToRenderList:x,dispose:g}}function Vx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(U,L,H,N,Z){let te=!1,z=f(U,N,H,L);r!==z&&(r=z,l(r.object)),te=u(U,N,H,Z),te&&p(U,N,H,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,b(U,L,H,N),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function c(){return s.createVertexArray()}function l(U){return s.bindVertexArray(U)}function h(U){return s.deleteVertexArray(U)}function f(U,L,H,N){let Z=N.wireframe===!0,te=n[L.id];te===void 0&&(te={},n[L.id]=te);let z=U.isInstancedMesh===!0?U.id:0,le=te[z];le===void 0&&(le={},te[z]=le);let J=le[H.id];J===void 0&&(J={},le[H.id]=J);let Q=J[Z];return Q===void 0&&(Q=d(c()),J[Z]=Q),Q}function d(U){let L=[],H=[],N=[];for(let Z=0;Z<t;Z++)L[Z]=0,H[Z]=0,N[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:N,object:U,attributes:{},index:null}}function u(U,L,H,N){let Z=r.attributes,te=L.attributes,z=0,le=H.getAttributes();for(let J in le)if(le[J].location>=0){let he=Z[J],Ue=te[J];if(Ue===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(Ue=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(Ue=U.instanceColor)),he===void 0||he.attribute!==Ue||Ue&&he.data!==Ue.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function p(U,L,H,N){let Z={},te=L.attributes,z=0,le=H.getAttributes();for(let J in le)if(le[J].location>=0){let he=te[J];he===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(he=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(he=U.instanceColor));let Ue={};Ue.attribute=he,he&&he.data&&(Ue.data=he.data),Z[J]=Ue,z++}r.attributes=Z,r.attributesNum=z,r.index=N}function x(){let U=r.newAttributes;for(let L=0,H=U.length;L<H;L++)U[L]=0}function m(U){g(U,0)}function g(U,L){let H=r.newAttributes,N=r.enabledAttributes,Z=r.attributeDivisors;H[U]=1,N[U]===0&&(s.enableVertexAttribArray(U),N[U]=1),Z[U]!==L&&(s.vertexAttribDivisor(U,L),Z[U]=L)}function v(){let U=r.newAttributes,L=r.enabledAttributes;for(let H=0,N=L.length;H<N;H++)L[H]!==U[H]&&(s.disableVertexAttribArray(H),L[H]=0)}function y(U,L,H,N,Z,te,z){z===!0?s.vertexAttribIPointer(U,L,H,Z,te):s.vertexAttribPointer(U,L,H,N,Z,te)}function b(U,L,H,N){x();let Z=N.attributes,te=H.getAttributes(),z=L.defaultAttributeValues;for(let le in te){let J=te[le];if(J.location>=0){let Q=Z[le];if(Q===void 0&&(le==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),le==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let he=Q.normalized,Ue=Q.itemSize,Ye=e.get(Q);if(Ye===void 0)continue;let $=Ye.buffer,Me=Ye.type,De=Ye.bytesPerElement,Be=Me===s.INT||Me===s.UNSIGNED_INT||Q.gpuType===Zc;if(Q.isInterleavedBufferAttribute){let Re=Q.data,je=Re.isInterleavedBuffer===!0?Re.stride:Re.itemSize,Dt=Q.offset;if(Re.isInstancedInterleavedBuffer||Re.isInstancedBufferAttribute){for(let Xe=0;Xe<J.locationSize;Xe++)g(J.location+Xe,Re.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Xe=0;Xe<J.locationSize;Xe++)m(J.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,$);for(let Xe=0;Xe<J.locationSize;Xe++)y(J.location+Xe,Ue/J.locationSize,Me,he,je*De,(Dt+Ue/J.locationSize*Xe)*De,Be)}else{if(Q.isInstancedBufferAttribute){for(let Re=0;Re<J.locationSize;Re++)g(J.location+Re,Q.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Re=0;Re<J.locationSize;Re++)m(J.location+Re);s.bindBuffer(s.ARRAY_BUFFER,$);for(let Re=0;Re<J.locationSize;Re++)y(J.location+Re,Ue/J.locationSize,Me,he,Ue*De,Ue/J.locationSize*Re*De,Be)}}else if(z!==void 0){let he=z[le];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(J.location,he);break;case 3:s.vertexAttrib3fv(J.location,he);break;case 4:s.vertexAttrib4fv(J.location,he);break;default:s.vertexAttrib1fv(J.location,he)}}}}v()}function S(){D();for(let U in n){let L=n[U];for(let H in L){let N=L[H];for(let Z in N){let te=N[Z];for(let z in te)h(te[z].object),delete te[z];delete N[Z]}}delete n[U]}}function M(U){if(n[U.id]===void 0)return;let L=n[U.id];for(let H in L){let N=L[H];for(let Z in N){let te=N[Z];for(let z in te)h(te[z].object),delete te[z];delete N[Z]}}delete n[U.id]}function _(U){for(let L in n){let H=n[L];for(let N in H){let Z=H[N];if(Z[U.id]===void 0)continue;let te=Z[U.id];for(let z in te)h(te[z].object),delete te[z];delete Z[U.id]}}}function w(U){for(let L in n){let H=n[L],N=U.isInstancedMesh===!0?U.id:0,Z=H[N];if(Z!==void 0){for(let te in Z){let z=Z[te];for(let le in z)h(z[le].object),delete z[le];delete Z[te]}delete H[N],Object.keys(H).length===0&&delete n[L]}}}function D(){I(),a=!0,r!==i&&(r=i,l(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Wx(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function qx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==vi&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let w=_===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==ei&&_!==ci&&!w&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(We("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:S,samples:M}}function Xx(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Ci,o=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let p=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,g=s.get(f);if(!i||p===null||p.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,y=v*4,b=g.clippingState||null;c.value=b,b=h(p,d,y,u);for(let S=0;S!==y;++S)b[S]=t[S];g.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,p){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,p!==!0||m===null){let g=u+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,b=u;y!==x;++y,b+=4)a.copy(f[y]).applyMatrix4(v,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Lo=class extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new eo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xs(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:Mr});r.uniforms.tEquirect.value=t;let a=new ut(i,r),o=t.minFilter;return t.minFilter===_i&&(t.minFilter=mn),new da(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},bp=256,jx=3,Kx=20,zp=256,Gp=16,Jx=3,Yx=new B,Zx=new Ce,Bl=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new da(1,10,null),this._boxMesh=new ut(new xs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Yx}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,u=c.autoClearDepth,p=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(Zx));let m=new da(n,i,h);return m.position.copy(o),m.update(c,e),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=u,c.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(bp,vu(e))}_fromTexture(e,t){e.mapping===wr||e.mapping===ma?this._setSize(e.image.length===0?bp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=xp(e,!1,!1),n=Math.log2(e)-jx;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===wr||e.mapping===ma?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_p()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=$x(),this._integrationMaterial=Qx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Gp);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-Jx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(zp*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=e_());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function xp(s,e,t){return new Lo(s,{minFilter:_i,generateMipmaps:e,type:Di,colorSpace:qn,depthBuffer:t})}function Do(s,e,t){return new Nn({name:s,uniforms:e,vertexShader:rt.cube_vert,fragmentShader:t,side:Fn,blending:Mr,depthTest:!1,depthWrite:!1})}function $x(){return Do("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function Qx(){return Do("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gp}},`

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
	`)}function e_(){return Do("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Kx}
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
	`)}function t_(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Kc||u===Jc)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new Lo(p.height);return x.fromEquirectangularTexture(s,d),e.set(d,x),d.addEventListener("dispose",l),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,p=u===Kc||u===Jc,x=u===wr||u===ma;if(p||x){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Bl(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return p&&v&&v.height>0||x&&v&&c(v)?(n===null&&(n=new Bl(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,u){return u===Kc?d.mapping=wr:u===Jc&&(d.mapping=ma),d}function c(d){let u=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&u++;return u===p}function l(d){let u=d.target;u.removeEventListener("dispose",l);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function n_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&lr("WebGLRenderer: "+n+" extension not supported."),i}}}function i_(s,e,t,n){let i={},r=new WeakMap,a=new FinalizationRegistry(p=>delete i[p]);function o(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete i[p.id],a.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)e.update(x[m],s.ARRAY_BUFFER)}function f(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,y=m.count>=65535?Za:Ya,b=new y(Math.ceil(v/3)*6,1),S=b.array;if(x!==null){let _=x.array;g=x.version;for(let w=0,D=0;w<v;w+=3){let I=_[w+0],U=_[w+1],L=_[w+2];S[D++]=I,S[D++]=U,S[D++]=U,S[D++]=L,S[D++]=L,S[D++]=I}}else{g=m.version;for(let _=0,w=0;_<v;_+=3){let D=_+0,I=_+1,U=_+2;S[w++]=D,S[w++]=I,S[w++]=I,S[w++]=U,S[w++]=U,S[w++]=D}}b.version=g;let M=r.get(p);M&&e.remove(M),r.set(p,b)}function d(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&f(p)}else f(p);return r.get(p)}function u(){for(let p in i){let x=i[p].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:d,dispose:u}}function s_(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,u){u!==0&&(s.drawElementsInstanced(n,d,r,f*a,u),t.update(d,n,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let x=0;for(let m=0;m<u;m++)x+=d[m];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function r_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function a_(s,e,t){let n=new WeakMap,i=new Lt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let D=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],y=0;u===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let b=o.attributes.position.count*y,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let M=new Float32Array(b*S*4*f),_=new Xa(M,b,S,f);_.type=ci,_.needsUpdate=!0;let w=y*4;for(let I=0;I<f;I++){let U=m[I],L=g[I],H=v[I],N=b*S*4*I;for(let Z=0;Z<U.count;Z++){let te=Z*w;u===!0&&(i.fromBufferAttribute(U,Z),M[N+te+0]=i.x,M[N+te+1]=i.y,M[N+te+2]=i.z,M[N+te+3]=0),p===!0&&(i.fromBufferAttribute(L,Z),M[N+te+4]=i.x,M[N+te+5]=i.y,M[N+te+6]=i.z,M[N+te+7]=0),x===!0&&(i.fromBufferAttribute(H,Z),M[N+te+8]=i.x,M[N+te+9]=i.y,M[N+te+10]=i.z,M[N+te+11]=H.itemSize===4?i.w:1)}}d={count:f,texture:_,size:new Qe(b,S)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let u=0;for(let x=0;x<l.length;x++)u+=l[x];let p=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function o_(s,e,t,n,i){let r=new WeakMap;function a(l){let h=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var c_={[eu]:"LINEAR_TONE_MAPPING",[tu]:"REINHARD_TONE_MAPPING",[nu]:"CINEON_TONE_MAPPING",[yo]:"ACES_FILMIC_TONE_MAPPING",[su]:"AGX_TONE_MAPPING",[ru]:"NEUTRAL_TONE_MAPPING",[iu]:"CUSTOM_TONE_MAPPING"};function l_(s,e,t,n,i,r){let a=new si(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Ut;h.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new mt([0,2,0,0,2,0],2));let f=new Nc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ut(h,f),u=new vr(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,v=null,y=[],b=!1;this.setSize=function(S,M){a.setSize(S,M),o!==null&&o.setSize(S,M),c!==null&&c.setSize(S,M);for(let _=0;_<y.length;_++){let w=y[_];w.setSize&&w.setSize(S,M)}},this.setEffects=function(S){y=S,b=y.length>0&&y[0].isRenderPass===!0;let M=a.width,_=a.height;y.length>0&&o===null&&(o=new si(M,_,{type:Di,depthBuffer:!1,stencilBuffer:!1}),c=new si(M,_,{type:Di,depthBuffer:!1,stencilBuffer:!1}));let w=i===!0&&y.some(D=>D.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&l===null&&(l=new bs(M,_),r===!0&&(l.format=ws,l.type=Ar)),a.dispose(),a.depthTexture=w?l:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let D=0;D<y.length;D++){let I=y[D];I.setSize&&I.setSize(M,_),w&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(l)}},this.begin=function(S,M){if(m||S.toneMapping===Ki&&y.length===0)return!1;if(v=M,M!==null){let _=M.width,w=M.height;(a.width!==_||a.height!==w)&&this.setSize(_,w)}return b===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=Ki,!0},this.hasRenderPass=function(){return b},this.end=function(S,M){S.toneMapping=g,m=!0;let _=a,w=o;for(let D=0;D<y.length;D++){let I=y[D];I.enabled!==!1&&(I.render(S,w,_,M),I.needsSwap!==!1&&(_=w,w=w===o?c:o))}if(p!==S.outputColorSpace||x!==S.toneMapping){p=S.outputColorSpace,x=S.toneMapping,f.defines={},ct.getTransfer(p)===Et&&(f.defines.SRGB_TRANSFER="");let D=c_[x];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,S.setRenderTarget(v),S.render(d,u),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Hp=new gn,Vp=new bs(1,1),Wp=new no(1),qp=new Xa,Xp=new Pc,jp=new eo,yp=[],Mp=[],Sp=new Float32Array(16),wp=new Float32Array(9),Tp=new Float32Array(4);function Ma(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=yp[i];if(r===void 0&&(r=new Float32Array(i),yp[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function vn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function yn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Gl(s,e){let t=Mp[e];t===void 0&&(t=new Int32Array(e),Mp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function h_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function u_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2fv(this.addr,e),yn(t,e)}}function f_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;s.uniform3fv(this.addr,e),yn(t,e)}}function d_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4fv(this.addr,e),yn(t,e)}}function p_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(vn(t,n))return;Tp.set(n),s.uniformMatrix2fv(this.addr,!1,Tp),yn(t,n)}}function m_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(vn(t,n))return;wp.set(n),s.uniformMatrix3fv(this.addr,!1,wp),yn(t,n)}}function g_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(vn(t,n))return;Sp.set(n),s.uniformMatrix4fv(this.addr,!1,Sp),yn(t,n)}}function b_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function x_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2iv(this.addr,e),yn(t,e)}}function __(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3iv(this.addr,e),yn(t,e)}}function v_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4iv(this.addr,e),yn(t,e)}}function y_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function M_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2uiv(this.addr,e),yn(t,e)}}function S_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3uiv(this.addr,e),yn(t,e)}}function w_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4uiv(this.addr,e),yn(t,e)}}function Hl(s){return s.version===0&&(s.compareFunction=gu,s.needsUpdate=!0),s}function T_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Hl(Vp):r=Hp,t.setTexture2D(e||r,i)}function A_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xp,i)}function E_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Hl(Wp):r=jp,t.setTextureCube(e||r,i)}function R_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qp,i)}function C_(s){switch(s){case 5126:return h_;case 35664:return u_;case 35665:return f_;case 35666:return d_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return b_;case 35667:case 35671:return x_;case 35668:case 35672:return __;case 35669:case 35673:return v_;case 5125:return y_;case 36294:return M_;case 36295:return S_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return R_}}function P_(s,e){s.uniform1fv(this.addr,e)}function I_(s,e){let t=Ma(e,this.size,2);s.uniform2fv(this.addr,t)}function L_(s,e){let t=Ma(e,this.size,3);s.uniform3fv(this.addr,t)}function D_(s,e){let t=Ma(e,this.size,4);s.uniform4fv(this.addr,t)}function N_(s,e){let t=Ma(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function F_(s,e){let t=Ma(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function k_(s,e){let t=Ma(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function U_(s,e){s.uniform1iv(this.addr,e)}function O_(s,e){s.uniform2iv(this.addr,e)}function B_(s,e){s.uniform3iv(this.addr,e)}function z_(s,e){s.uniform4iv(this.addr,e)}function G_(s,e){s.uniform1uiv(this.addr,e)}function H_(s,e){s.uniform2uiv(this.addr,e)}function V_(s,e){s.uniform3uiv(this.addr,e)}function W_(s,e){s.uniform4uiv(this.addr,e)}function q_(s,e,t){let n=this.cache,i=e.length,r=Gl(t,i);vn(n,r)||(s.uniform1iv(this.addr,r),yn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Hl(Vp):a=Hp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function X_(s,e,t){let n=this.cache,i=e.length,r=Gl(t,i);vn(n,r)||(s.uniform1iv(this.addr,r),yn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Xp,r[a])}function j_(s,e,t){let n=this.cache,i=e.length,r=Gl(t,i);vn(n,r)||(s.uniform1iv(this.addr,r),yn(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Hl(Wp):a=jp;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function K_(s,e,t){let n=this.cache,i=e.length,r=Gl(t,i);vn(n,r)||(s.uniform1iv(this.addr,r),yn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||qp,r[a])}function J_(s){switch(s){case 5126:return P_;case 35664:return I_;case 35665:return L_;case 35666:return D_;case 35674:return N_;case 35675:return F_;case 35676:return k_;case 5124:case 35670:return U_;case 35667:case 35671:return O_;case 35668:case 35672:return B_;case 35669:case 35673:return z_;case 5125:return G_;case 36294:return H_;case 36295:return V_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return K_}}var Nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C_(t.type)}},Fu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J_(t.type)}},ku=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Lu=/(\w+)(\])?(\[|\.)?/g;function Ap(s,e){s.seq.push(e),s.map[e.id]=e}function Y_(s,e,t){let n=s.name,i=n.length;for(Lu.lastIndex=0;;){let r=Lu.exec(n),a=Lu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Ap(t,l===void 0?new Nu(o,s,e):new Fu(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new ku(o),Ap(t,f)),t=f}}}var ya=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Y_(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Ep(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Z_=37297,$_=0;function Q_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Rp=new et;function ev(s){ct._getMatrix(Rp,ct.workingColorSpace,s);let e=`mat3( ${Rp.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(s)){case Wa:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Cp(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Q_(s.getShaderSource(e),o)}else return r}function tv(s,e){let t=ev(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var nv={[eu]:"Linear",[tu]:"Reinhard",[nu]:"Cineon",[yo]:"ACESFilmic",[su]:"AgX",[ru]:"Neutral",[iu]:"Custom"};function iv(s,e){let t=nv[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ol=new B;function sv(){ct.getLuminanceCoefficients(Ol);let s=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function av(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ov(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Io(s){return s!==""}function Pp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ip(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(s){return s.replace(cv,lv)}function lv(s,e){let t=rt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Uu(t)}var hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lp(s){return s.replace(hv,uv)}function uv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Dp(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var fv={[vo]:"SHADOWMAP_TYPE_PCF",[pa]:"SHADOWMAP_TYPE_VSM"};function dv(s){return fv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var pv={[ma]:"ENVMAP_MODE_REFRACTION"};function mv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":pv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var gv={[jc]:"ENVMAP_BLENDING_MULTIPLY",[Yd]:"ENVMAP_BLENDING_MIX",[Zd]:"ENVMAP_BLENDING_ADD"};function bv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":gv[s.combine]||"ENVMAP_BLENDING_NONE"}function xv(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=dv(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=mv(t),f=bv(t),d=rv(t),u=av(r),p=i.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Io).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Io).join(`
`),m.length>0&&(m+=`
`)):(x=[Dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),m=[Dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?rt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?iv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,tv("linearToOutputTexel",t.outputColorSpace),sv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Io).join(`
`)),a=Uu(a),a=Pp(a,t),a=Ip(a,t),o=Uu(o),o=Pp(o,t),o=Ip(o,t),a=Lp(a),o=Lp(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+x+a,y=g+m+o,b=Ep(i,i.VERTEX_SHADER,v),S=Ep(i,i.FRAGMENT_SHADER,y);i.attachShader(p,b),i.attachShader(p,S),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function M(I){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(p)||"",L=i.getShaderInfoLog(b)||"",H=i.getShaderInfoLog(S)||"",N=U.trim(),Z=L.trim(),te=H.trim(),z=!0,le=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,b,S);else{let J=Cp(i,b,"vertex"),Q=Cp(i,S,"fragment");$e("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+J+`
`+Q)}else N!==""?We("WebGLProgram: Program Info Log:",N):(Z===""||te==="")&&(le=!1);le&&(I.diagnostics={runnable:z,programLog:N,vertexShader:{log:Z,prefix:x},fragmentShader:{log:te,prefix:m}})}i.deleteShader(b),i.deleteShader(S),_=new ya(i,p),w=ov(i,p)}let _;this.getUniforms=function(){return _===void 0&&M(this),_};let w;this.getAttributes=function(){return w===void 0&&M(this),w};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(p,Z_)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=S,this}var _v=0,Ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bu(e),t.set(e,n)),n}},Bu=class{constructor(e){this.id=_v++,this.code=e,this.usedTimes=0}};function vv(s){return s===qs||s===Ao||s===Eo}function yv(s,e,t,n,i,r){let a=new ja,o=new Ou,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,w,D,I,U,L){let H=I.fog,N=U.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,te=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=e.get(_.envMap||Z,te),le=d[_.type],J=n.precision;_.precision!==null&&(J=n.getMaxPrecision(_.precision),J!==_.precision&&We("WebGLProgram.getParameters:",_.precision,"not supported, using",J,"instead."));let Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,he=Q!==void 0?Q.length:0,Ue=0;N.morphAttributes.position!==void 0&&(Ue=1),N.morphAttributes.normal!==void 0&&(Ue=2),N.morphAttributes.color!==void 0&&(Ue=3);let Ye,$,Me,De;if(le){let pe=Zi[le];Ye=pe.vertexShader,$=pe.fragmentShader}else{Ye=_.vertexShader,$=_.fragmentShader;let pe=o.getVertexShaderStage(_),ht=o.getFragmentShaderStage(_);o.update(_,pe,ht),Me=pe.id,De=ht.id}let Be=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),je=U.isInstancedMesh===!0,Dt=U.isBatchedMesh===!0,Xe=!!_.map,xt=!!_.matcap,yt=!!z,st=yt&&z.isPMREMTexture===!0,$t=!!_.aoMap,Wt=!!_.lightMap,Tn=!!_.bumpMap&&_.wireframe===!1,Mt=!!_.normalMap,Vn=!!_.displacementMap,jt=!!_.emissiveMap,Ln=!!_.metalnessMap,Dn=!!_.roughnessMap,an=_.anisotropy>0,G=_.clearcoat>0,Un=_.diffuseRoughness>0,Ct=_.dispersion>0,Tt=_.retroreflectivity>0,we=_.iridescence>0,qt=_.sheen>0,Oe=_.transmission>0,Fe=an&&!!_.anisotropyMap,P=G&&!!_.clearcoatMap,T=G&&!!_.clearcoatNormalMap,K=G&&!!_.clearcoatRoughnessMap,ue=Un&&!!_.diffuseRoughnessMap,fe=we&&!!_.iridescenceMap,ie=we&&!!_.iridescenceThicknessMap,ye=qt&&!!_.sheenColorMap,ne=qt&&!!_.sheenRoughnessMap,oe=!!_.specularMap,ae=!!_.specularColorMap,F=!!_.specularIntensityMap,se=Oe&&!!_.transmissionMap,ee=Oe&&!!_.thicknessMap,_e=!!_.gradientMap,xe=!!_.alphaMap,ge=_.alphaTest>0,Ve=!!_.alphaHash,Ke=!!_.extensions,be=Ki;_.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(be=s.toneMapping);let He=st?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,tt={shaderID:le,shaderType:_.type,shaderName:_.name,vertexShader:Ye,fragmentShader:$,defines:_.defines,customVertexShaderID:Me,customFragmentShaderID:De,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:J,batching:Dt,batchingColor:Dt&&U._colorsTexture!==null,instancing:je,instancingColor:je&&U.instanceColor!==null,instancingMorph:je&&U.morphTexture!==null,outputColorSpace:Be===null?s.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Xe,matcap:xt,envMap:yt,envMapMode:yt&&z.mapping,envMapPMREM:st,envMapMaxLod:st?He.length-1:null,envMapSize:st?He[0].width:null,aoMap:$t,lightMap:Wt,bumpMap:Tn,normalMap:Mt,displacementMap:Vn,emissiveMap:jt,normalMapObjectSpace:Mt&&_.normalMapType===np,normalMapTangentSpace:Mt&&_.normalMapType===va,packedNormalMap:Mt&&_.normalMapType===va&&vv(_.normalMap.format),metalnessMap:Ln,roughnessMap:Dn,anisotropy:an,anisotropyMap:Fe,clearcoat:G,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:K,diffuseRoughness:Un,diffuseRoughnessMap:ue,dispersion:Ct,retroreflection:Tt,iridescence:we,iridescenceMap:fe,iridescenceThicknessMap:ie,sheen:qt,sheenColorMap:ye,sheenRoughnessMap:ne,specularMap:oe,specularColorMap:ae,specularIntensityMap:F,transmission:Oe,transmissionMap:se,thicknessMap:ee,gradientMap:_e,opaque:_.transparent===!1&&_.blending===Ws&&_.alphaToCoverage===!1,alphaMap:xe,alphaTest:ge,alphaHash:Ve,combine:_.combine,mapUv:Xe&&u(_.map.channel),aoMapUv:$t&&u(_.aoMap.channel),lightMapUv:Wt&&u(_.lightMap.channel),bumpMapUv:Tn&&u(_.bumpMap.channel),normalMapUv:Mt&&u(_.normalMap.channel),displacementMapUv:Vn&&u(_.displacementMap.channel),emissiveMapUv:jt&&u(_.emissiveMap.channel),metalnessMapUv:Ln&&u(_.metalnessMap.channel),roughnessMapUv:Dn&&u(_.roughnessMap.channel),anisotropyMapUv:Fe&&u(_.anisotropyMap.channel),clearcoatMapUv:P&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:T&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:fe&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:ne&&u(_.sheenRoughnessMap.channel),specularMapUv:oe&&u(_.specularMap.channel),specularColorMapUv:ae&&u(_.specularColorMap.channel),specularIntensityMapUv:F&&u(_.specularIntensityMap.channel),transmissionMapUv:se&&u(_.transmissionMap.channel),thicknessMapUv:ee&&u(_.thicknessMap.channel),alphaMapUv:xe&&u(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Mt||an),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(Xe||xe),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&Mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Re,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ue,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:L.filter(pe=>pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:Xe&&_.map.isVideoTexture===!0&&ct.getTransfer(_.map.colorSpace)===Et,decodeVideoTextureEmissive:jt&&_.emissiveMap.isVideoTexture===!0&&ct.getTransfer(_.emissiveMap.colorSpace)===Et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===hn,flipSided:_.side===Fn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ke&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&_.extensions.multiDraw===!0||Dt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function x(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)w.push(D),w.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(m(w,_),g(w,_),w.push(s.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function m(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function g(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let w=d[_.type],D;if(w){let I=Zi[w];D=pp.clone(I.uniforms)}else D=_.uniforms;return D}function y(_,w){let D=h.get(w);return D!==void 0?++D.usedTimes:(D=new xv(s,w,_,i),l.push(D),h.set(w,D)),D}function b(_){if(--_.usedTimes===0){let w=l.indexOf(_);l[w]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function M(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:S,programs:l,dispose:M}}function Mv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Sv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Np(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Fp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,p,x,m,g){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:u,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},s[e]=v):(v.id=d.id,v.object=d,v.geometry=u,v.material=p,v.materialVariant=a(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=m,v.group=g),e++,v}function c(d,u,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let y=o(d,u,p,x,m,g);p.transmission>0?n.push(y):p.transparent===!0?i.push(y):t.push(y)}function l(d,u,p,x,m,g){let v=o(d,u,p,x,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function h(d,u){t.length>1&&t.sort(d||Sv),n.length>1&&n.sort(u||Np),i.length>1&&i.sort(u||Np)}function f(){for(let d=e,u=s.length;d<u;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:f,sort:h}}function wv(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Fp,s.set(n,[a])):i>=r.length?(a=new Fp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Tv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Ce};break;case"SpotLight":t={position:new B,direction:new B,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function Av(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Ev=0;function Rv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Cv(s){let e=new Tv,t=Av(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);let i=new B,r=new qe,a=new qe;function o(l){let h=0,f=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,v=0,y=0,b=0,S=0,M=0,_=0,w=0,D=0,I=0;l.sort(Rv);for(let L=0,H=l.length;L<H;L++){let N=l[L],Z=N.color,te=N.intensity,z=N.distance,le=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===qs?le=N.shadow.map.texture:le=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=Z.r*te,f+=Z.g*te,d+=Z.b*te;else if(N.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(N.sh.coefficients[J],te);I++}else if(N.isSunLight){let J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,he=t.get(N);he.shadowIntensity=Q.intensity,he.shadowBias=Q.bias,he.shadowNormalBias=Q.normalBias,he.shadowRadius=Q.radius,he.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=he,n.sunShadowMap[p]=le;let Ue=Q.getViewportCount();for(let Ye=0;Ye<Ue;Ye++)n.sunShadowMatrix[x+Ye]=Q.getMatrix(Ye),n.sunShadowCascade[x+Ye]=Q._cascadeData[Ye];x+=Ue,p++}n.sun[u]=J,u++}else if(N.isDirectionalLight){let J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,he=t.get(N);he.shadowIntensity=Q.intensity,he.shadowBias=Q.bias,he.shadowNormalBias=Q.normalBias,he.shadowRadius=Q.radius,he.shadowMapSize=Q.mapSize,n.directionalShadow[m]=he,n.directionalShadowMap[m]=le,n.directionalShadowMatrix[m]=N.shadow.matrix,S++}n.directional[m]=J,m++}else if(N.isSpotLight){let J=e.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(Z).multiplyScalar(te),J.distance=z,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,n.spot[v]=J;let Q=N.shadow;if(N.map&&(n.spotLightMap[w]=N.map,w++,Q.updateMatrices(N),N.castShadow&&D++),n.spotLightMatrix[v]=Q.matrix,N.castShadow){let he=t.get(N);he.shadowIntensity=Q.intensity,he.shadowBias=Q.bias,he.shadowNormalBias=Q.normalBias,he.shadowRadius=Q.radius,he.shadowMapSize=Q.mapSize,n.spotShadow[v]=he,n.spotShadowMap[v]=le,_++}v++}else if(N.isRectAreaLight){let J=e.get(N);J.color.copy(Z).multiplyScalar(te),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),n.rectArea[y]=J,y++}else if(N.isPointLight){let J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){let Q=N.shadow,he=t.get(N);he.shadowIntensity=Q.intensity,he.shadowBias=Q.bias,he.shadowNormalBias=Q.normalBias,he.shadowRadius=Q.radius,he.shadowMapSize=Q.mapSize,he.shadowCameraNear=Q.camera.near,he.shadowCameraFar=Q.camera.far,n.pointShadow[g]=he,n.pointShadowMap[g]=le,n.pointShadowMatrix[g]=N.shadow.matrix,M++}n.point[g]=J,g++}else if(N.isHemisphereLight){let J=e.get(N);J.skyColor.copy(N.color).multiplyScalar(te),J.groundColor.copy(N.groundColor).multiplyScalar(te),n.hemi[b]=J,b++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let U=n.hash;(U.sunLength!==u||U.directionalLength!==m||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==y||U.hemiLength!==b||U.numSunShadows!==p||U.numDirectionalShadows!==S||U.numPointShadows!==M||U.numSpotShadows!==_||U.numSpotMaps!==w||U.numLightProbes!==I)&&(n.sun.length=u,n.directional.length=m,n.spot.length=v,n.rectArea.length=y,n.point.length=g,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+w-D,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=I,U.sunLength=u,U.directionalLength=m,U.pointLength=g,U.spotLength=v,U.rectAreaLength=y,U.hemiLength=b,U.numSunShadows=p,U.numDirectionalShadows=S,U.numPointShadows=M,U.numSpotShadows=_,U.numSpotMaps=w,U.numLightProbes=I,n.version=Ev++)}function c(l,h){let f=0,d=0,u=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let v=0,y=l.length;v<y;v++){let b=l[v];if(b.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),f++}else if(b.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),d++}else if(b.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let S=n.point[u];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),u++}else if(b.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:o,setupView:c,state:n}}function kp(s){let e=new Cv(s),t=[],n=[],i=[];function r(f){h.camera=f,t.length=0,n.length=0,i.length=0}function a(f){f.isLightProbeGrid?i.push(f):t.push(f)}function o(f){n.push(f)}function c(){e.setup(t),i.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function l(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Pv(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new kp(s),e.set(i,[o])):r>=a.length?(o=new kp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lv=`uniform sampler2D shadow_pass;
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
}`,Dv=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Nv=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Up=new qe,Po=new B,Du=new B;function Fv(s,e,t){let n=new Bs,i=new Qe,r=new Qe,a=new Lt,o=new Fc,c=new kc,l={},h=t.maxTextureSize,f={[ji]:Fn,[Fn]:ji,[hn]:hn},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Iv,fragmentShader:Lv}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new Ut;p.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ut(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vo;let g=this.type;this.render=function(M,_,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Id&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vo);let D=s.getRenderTarget(),I=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Mr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let H=g!==this.type;H&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(Z=>Z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,Z=M.length;N<Z;N++){let te=M[N],z=te.shadow;if(z===void 0){We("WebGLShadowMap:",te,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let le=z.getFrameExtents();i.multiply(le),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/le.x),i.x=r.x*le.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/le.y),i.y=r.y*le.y,z.mapSize.y=r.y));let J=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=J,z.map===null||H===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===pa){if(te.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new si(i.x,i.y,{format:qs,type:Di,minFilter:mn,magFilter:mn,generateMipmaps:!1}),z.map.texture.name=te.name+".shadowMap",z.map.depthTexture=new bs(i.x,i.y,ci),z.map.depthTexture.name=te.name+".shadowMapDepth",z.map.depthTexture.format=ps,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Yt,z.map.depthTexture.magFilter=Yt}else te.isPointLight?(z.map=new Lo(i.x),z.map.depthTexture=new no(i.x,Li)):(z.map=new si(i.x,i.y),z.map.depthTexture=new bs(i.x,i.y,Li)),z.map.depthTexture.name=te.name+".shadowMap",z.map.depthTexture.format=ps,this.type===vo?(z.map.depthTexture.compareFunction=J?mu:pu,z.map.depthTexture.minFilter=mn,z.map.depthTexture.magFilter=mn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Yt,z.map.depthTexture.magFilter=Yt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();te.isPointLight!==!0&&z.updateMatrices(te,w);let he=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:w.layers;for(let Ue=0;Ue<Q;Ue++){let Ye=z.getCamera(Ue);if(te.isPointLight){let $=z.camera,Me=z.matrix,De=te.distance||$.far;De!==$.far&&($.far=De,$.updateProjectionMatrix()),Po.setFromMatrixPosition(te.matrixWorld),$.position.copy(Po),Du.copy($.position),Du.add(Dv[Ue]),$.up.copy(Nv[Ue]),$.lookAt(Du),$.updateMatrixWorld(),Me.makeTranslation(-Po.x,-Po.y,-Po.z),Up.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Up,$.coordinateSystem,$.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,Ue),s.clear();else{Ue===0&&(s.setRenderTarget(z.map),s.clear());let $=z.getViewport(Ue);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),L.viewport(a)}n=z.getFrustum(Ue),b(_,w,Ye,te,he,this.type)}z.isPointLightShadow!==!0&&this.type===pa&&v(z,w),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(D,I,U)};function v(M,_){let w=e.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,u.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),M.mapPass===null?M.mapPass=new si(i.x,i.y,{format:qs,type:Di}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(_,null,w,d,x,null),u.uniforms.shadow_pass.value=M.mapPass.texture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(_,null,w,u,x,null)}function y(M,_,w,D){let I=null,U=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(U!==void 0)I=U;else if(I=w.isPointLight===!0?c:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let L=I.uuid,H=_.uuid,N=l[L];N===void 0&&(N={},l[L]=N);let Z=N[H];Z===void 0&&(Z=I.clone(),N[H]=Z,_.addEventListener("dispose",S)),I=Z}if(I.visible=_.visible,I.wireframe=_.wireframe,D===pa?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:f[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let L=s.properties.get(I);L.light=w}return I}function b(M,_,w,D,I,U){if(M.visible===!1)return;if(M.layers.test(I)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&U===pa)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);let N=e.update(M),Z=M.material;if(Array.isArray(Z)){let te=N.groups;for(let z=0,le=te.length;z<le;z++){let J=te[z],Q=Z[J.materialIndex];if(Q&&Q.visible){let he=y(M,Q,D,U);M.onBeforeShadow(s,M,_,w,N,he,J),s.renderBufferDirect(w,null,N,he,M,J),M.onAfterShadow(s,M,_,w,N,he,J)}}}else if(Z.visible){let te=y(M,Z,D,U);M.onBeforeShadow(s,M,_,w,N,te,null),s.renderBufferDirect(w,null,N,te,M,null),M.onAfterShadow(s,M,_,w,N,te,null)}}let H=M.children;for(let N=0,Z=H.length;N<Z;N++)b(H[N],_,w,D,I,U)}function S(M){M.target.removeEventListener("dispose",S);for(let w in l){let D=l[w],I=M.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}}function kv(s,e){function t(){let F=!1,se=new Lt,ee=null,_e=new Lt(0,0,0,0);return{setMask:function(xe){ee!==xe&&!F&&(s.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){F=xe},setClear:function(xe,ge,Ve,Ke,be){be===!0&&(xe*=Ke,ge*=Ke,Ve*=Ke),se.set(xe,ge,Ve,Ke),_e.equals(se)===!1&&(s.clearColor(xe,ge,Ve,Ke),_e.copy(se))},reset:function(){F=!1,ee=null,_e.set(-1,0,0,0)}}}function n(){let F=!1,se=!1,ee=null,_e=null,xe=null;return{setReversed:function(ge){if(se!==ge){let Ve=e.get("EXT_clip_control");ge?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),se=ge;let Ke=xe;xe=null,this.setClear(Ke)}},getReversed:function(){return se},setTest:function(ge){ge?Re(s.DEPTH_TEST):je(s.DEPTH_TEST)},setMask:function(ge){ee!==ge&&!F&&(s.depthMask(ge),ee=ge)},setFunc:function(ge){if(se&&(ge=fp[ge]),_e!==ge){switch(ge){case yc:s.depthFunc(s.NEVER);break;case Mc:s.depthFunc(s.ALWAYS);break;case Sc:s.depthFunc(s.LESS);break;case Qr:s.depthFunc(s.LEQUAL);break;case wc:s.depthFunc(s.EQUAL);break;case Tc:s.depthFunc(s.GEQUAL);break;case Ac:s.depthFunc(s.GREATER);break;case Ec:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=ge}},setLocked:function(ge){F=ge},setClear:function(ge){xe!==ge&&(xe=ge,se&&(ge=1-ge),s.clearDepth(ge))},reset:function(){F=!1,ee=null,_e=null,xe=null,se=!1}}}function i(){let F=!1,se=null,ee=null,_e=null,xe=null,ge=null,Ve=null,Ke=null,be=null;return{setTest:function(He){F||(He?Re(s.STENCIL_TEST):je(s.STENCIL_TEST))},setMask:function(He){se!==He&&!F&&(s.stencilMask(He),se=He)},setFunc:function(He,tt,pe){(ee!==He||_e!==tt||xe!==pe)&&(s.stencilFunc(He,tt,pe),ee=He,_e=tt,xe=pe)},setOp:function(He,tt,pe){(ge!==He||Ve!==tt||Ke!==pe)&&(s.stencilOp(He,tt,pe),ge=He,Ve=tt,Ke=pe)},setLocked:function(He){F=He},setClear:function(He){be!==He&&(s.clearStencil(He),be=He)},reset:function(){F=!1,se=null,ee=null,_e=null,xe=null,ge=null,Ve=null,Ke=null,be=null}}}let r=new t,a=new n,o=new i,c={},l=new WeakMap,h={},f={},d={},u=new WeakMap,p=[],x=null,m=!1,g=null,v=null,y=null,b=null,S=null,M=null,_=null,w=new Ce(0,0,0),D=0,I=!1,U=null,L=null,H=null,N=null,Z=null,te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,le=0,J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(J)[1]),z=le>=1):J.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),z=le>=2);let Q=null,he={},Ue=s.getParameter(s.SCISSOR_BOX),Ye=s.getParameter(s.VIEWPORT),$=new Lt().fromArray(Ue),Me=new Lt().fromArray(Ye);function De(F,se,ee,_e){let xe=new Uint8Array(4),ge=s.createTexture();s.bindTexture(F,ge),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<ee;Ve++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(se,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(se+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return ge}let Be={};Be[s.TEXTURE_2D]=De(s.TEXTURE_2D,s.TEXTURE_2D,1),Be[s.TEXTURE_CUBE_MAP]=De(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[s.TEXTURE_2D_ARRAY]=De(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Be[s.TEXTURE_3D]=De(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Re(s.DEPTH_TEST),a.setFunc(Qr),Tn(!1),Mt(Jh),Re(s.CULL_FACE),$t(Mr);function Re(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function je(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Dt(F,se){return d[F]!==se?(s.bindFramebuffer(F,se),d[F]=se,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=se),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=se),!0):!1}function Xe(F,se){let ee=p,_e=!1;if(F){ee=u.get(se),ee===void 0&&(ee=[],u.set(se,ee));let xe=F.textures;if(ee.length!==xe.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,Ve=xe.length;ge<Ve;ge++)ee[ge]=s.COLOR_ATTACHMENT0+ge;ee.length=xe.length,_e=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,_e=!0);_e&&s.drawBuffers(ee)}function xt(F){return x!==F?(s.useProgram(F),x=F,!0):!1}let yt={[Sr]:s.FUNC_ADD,[Dd]:s.FUNC_SUBTRACT,[Nd]:s.FUNC_REVERSE_SUBTRACT};yt[Fd]=s.MIN,yt[kd]=s.MAX;let st={[Ud]:s.ZERO,[Od]:s.ONE,[Bd]:s.SRC_COLOR,[$h]:s.SRC_ALPHA,[qd]:s.SRC_ALPHA_SATURATE,[Vd]:s.DST_COLOR,[Gd]:s.DST_ALPHA,[zd]:s.ONE_MINUS_SRC_COLOR,[Qh]:s.ONE_MINUS_SRC_ALPHA,[Wd]:s.ONE_MINUS_DST_COLOR,[Hd]:s.ONE_MINUS_DST_ALPHA,[Xd]:s.CONSTANT_COLOR,[jd]:s.ONE_MINUS_CONSTANT_COLOR,[Kd]:s.CONSTANT_ALPHA,[Jd]:s.ONE_MINUS_CONSTANT_ALPHA};function $t(F,se,ee,_e,xe,ge,Ve,Ke,be,He){if(F===Mr){m===!0&&(je(s.BLEND),m=!1);return}if(m===!1&&(Re(s.BLEND),m=!0),F!==Ld){if(F!==g||He!==I){if((v!==Sr||S!==Sr)&&(s.blendEquation(s.FUNC_ADD),v=Sr,S=Sr),He)switch(F){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jn:s.blendFunc(s.ONE,s.ONE);break;case Yh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:$e("WebGLState: Invalid blending: ",F);break}else switch(F){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Yh:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zh:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",F);break}y=null,b=null,M=null,_=null,w.set(0,0,0),D=0,g=F,I=He}return}xe=xe||se,ge=ge||ee,Ve=Ve||_e,(se!==v||xe!==S)&&(s.blendEquationSeparate(yt[se],yt[xe]),v=se,S=xe),(ee!==y||_e!==b||ge!==M||Ve!==_)&&(s.blendFuncSeparate(st[ee],st[_e],st[ge],st[Ve]),y=ee,b=_e,M=ge,_=Ve),(Ke.equals(w)===!1||be!==D)&&(s.blendColor(Ke.r,Ke.g,Ke.b,be),w.copy(Ke),D=be),g=F,I=!1}function Wt(F,se){F.side===hn?je(s.CULL_FACE):Re(s.CULL_FACE);let ee=F.side===Fn;se&&(ee=!ee),Tn(ee),F.blending===Ws&&F.transparent===!1?$t(Mr):$t(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let _e=F.stencilWrite;o.setTest(_e),_e&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),jt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):je(s.SAMPLE_ALPHA_TO_COVERAGE)}function Tn(F){U!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),U=F)}function Mt(F){F!==Cd?(Re(s.CULL_FACE),F!==L&&(F===Jh?s.cullFace(s.BACK):F===Pd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):je(s.CULL_FACE),L=F}function Vn(F){F!==H&&(z&&s.lineWidth(F),H=F)}function jt(F,se,ee){F?(Re(s.POLYGON_OFFSET_FILL),(N!==se||Z!==ee)&&(N=se,Z=ee,a.getReversed()&&(se=-se,ee=-ee),s.polygonOffset(se,ee))):je(s.POLYGON_OFFSET_FILL)}function Ln(F){F?Re(s.SCISSOR_TEST):je(s.SCISSOR_TEST)}function Dn(F){F===void 0&&(F=s.TEXTURE0+te-1),Q!==F&&(s.activeTexture(F),Q=F)}function an(F,se,ee){ee===void 0&&(Q===null?ee=s.TEXTURE0+te-1:ee=Q);let _e=he[ee];_e===void 0&&(_e={type:void 0,texture:void 0},he[ee]=_e),(_e.type!==F||_e.texture!==se)&&(Q!==ee&&(s.activeTexture(ee),Q=ee),s.bindTexture(F,se||Be[F]),_e.type=F,_e.texture=se)}function G(){let F=he[Q];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Un(){try{s.compressedTexImage2D(...arguments)}catch(F){$e("WebGLState:",F)}}function Ct(){try{s.compressedTexImage3D(...arguments)}catch(F){$e("WebGLState:",F)}}function Tt(){try{s.texSubImage2D(...arguments)}catch(F){$e("WebGLState:",F)}}function we(){try{s.texSubImage3D(...arguments)}catch(F){$e("WebGLState:",F)}}function qt(){try{s.compressedTexSubImage2D(...arguments)}catch(F){$e("WebGLState:",F)}}function Oe(){try{s.compressedTexSubImage3D(...arguments)}catch(F){$e("WebGLState:",F)}}function Fe(){try{s.texStorage2D(...arguments)}catch(F){$e("WebGLState:",F)}}function P(){try{s.texStorage3D(...arguments)}catch(F){$e("WebGLState:",F)}}function T(){try{s.texImage2D(...arguments)}catch(F){$e("WebGLState:",F)}}function K(){try{s.texImage3D(...arguments)}catch(F){$e("WebGLState:",F)}}function ue(F){return f[F]!==void 0?f[F]:s.getParameter(F)}function fe(F,se){f[F]!==se&&(s.pixelStorei(F,se),f[F]=se)}function ie(F){$.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),$.copy(F))}function ye(F){Me.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Me.copy(F))}function ne(F,se){let ee=l.get(se);ee===void 0&&(ee=new WeakMap,l.set(se,ee));let _e=ee.get(F);_e===void 0&&(_e=s.getUniformBlockIndex(se,F.name),s.uniformBlockBinding(se,_e,_e),ee.set(F,_e))}function oe(F,se,ee){let xe=l.get(se).get(F);c[xe]!==ee&&(s.bindBufferBase(s.UNIFORM_BUFFER,xe,ee),c[xe]=ee)}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,he={},d={},c={},u=new WeakMap,p=[],x=null,m=!1,g=null,v=null,y=null,b=null,S=null,M=null,_=null,w=new Ce(0,0,0),D=0,I=!1,U=null,L=null,H=null,N=null,Z=null,$.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Re,disable:je,bindFramebuffer:Dt,drawBuffers:Xe,useProgram:xt,setBlending:$t,setMaterial:Wt,setFlipSided:Tn,setCullFace:Mt,setLineWidth:Vn,setPolygonOffset:jt,setScissorTest:Ln,activeTexture:Dn,bindTexture:an,unbindTexture:G,compressedTexImage2D:Un,compressedTexImage3D:Ct,texImage2D:T,texImage3D:K,pixelStorei:fe,getParameter:ue,updateUBOMapping:ne,uniformBlockBinding:oe,texStorage2D:Fe,texStorage3D:P,texSubImage2D:Tt,texSubImage3D:we,compressedTexSubImage2D:qt,compressedTexSubImage3D:Oe,scissor:ie,viewport:ye,reset:ae}}function Uv(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qe,h=new WeakMap,f=new Set,d,u=new WeakMap,p=new Set,x=new FinalizationRegistry(P=>p.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return m?new OffscreenCanvas(P,T):na("canvas")}function v(P,T,K){let ue=1,fe=Fe(P);if((fe.width>K||fe.height>K)&&(ue=K/Math.max(fe.width,fe.height)),ue<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ie=Math.floor(ue*fe.width),ye=Math.floor(ue*fe.height);d===void 0&&(d=g(ie,ye));let ne=T?g(ie,ye):d;return ne.width=ie,ne.height=ye,ne.getContext("2d").drawImage(P,0,0,ie,ye),We("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+ie+"x"+ye+")."),ne}else return"data"in P&&We("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),P;return P}function y(P){return P.generateMipmaps}function b(P){s.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(P,T,K,ue,fe,ie=!1){if(P!==null){if(s[P]!==void 0)return s[P];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ye;ue&&(ye=e.get("EXT_texture_norm16"),ye||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=T;if(T===s.RED&&(K===s.FLOAT&&(ne=s.R32F),K===s.HALF_FLOAT&&(ne=s.R16F),K===s.UNSIGNED_BYTE&&(ne=s.R8),K===s.UNSIGNED_SHORT&&ye&&(ne=ye.R16_EXT),K===s.SHORT&&ye&&(ne=ye.R16_SNORM_EXT)),T===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ne=s.R8UI),K===s.UNSIGNED_SHORT&&(ne=s.R16UI),K===s.UNSIGNED_INT&&(ne=s.R32UI),K===s.BYTE&&(ne=s.R8I),K===s.SHORT&&(ne=s.R16I),K===s.INT&&(ne=s.R32I)),T===s.RG&&(K===s.FLOAT&&(ne=s.RG32F),K===s.HALF_FLOAT&&(ne=s.RG16F),K===s.UNSIGNED_BYTE&&(ne=s.RG8),K===s.UNSIGNED_SHORT&&ye&&(ne=ye.RG16_EXT),K===s.SHORT&&ye&&(ne=ye.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ne=s.RG8UI),K===s.UNSIGNED_SHORT&&(ne=s.RG16UI),K===s.UNSIGNED_INT&&(ne=s.RG32UI),K===s.BYTE&&(ne=s.RG8I),K===s.SHORT&&(ne=s.RG16I),K===s.INT&&(ne=s.RG32I)),T===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ne=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ne=s.RGB16UI),K===s.UNSIGNED_INT&&(ne=s.RGB32UI),K===s.BYTE&&(ne=s.RGB8I),K===s.SHORT&&(ne=s.RGB16I),K===s.INT&&(ne=s.RGB32I)),T===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ne=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ne=s.RGBA16UI),K===s.UNSIGNED_INT&&(ne=s.RGBA32UI),K===s.BYTE&&(ne=s.RGBA8I),K===s.SHORT&&(ne=s.RGBA16I),K===s.INT&&(ne=s.RGBA32I)),T===s.RGB&&(K===s.UNSIGNED_SHORT&&ye&&(ne=ye.RGB16_EXT),K===s.SHORT&&ye&&(ne=ye.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(ne=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(ne=s.R11F_G11F_B10F)),T===s.RGBA){let oe=ie?Wa:ct.getTransfer(fe);K===s.FLOAT&&(ne=s.RGBA32F),K===s.HALF_FLOAT&&(ne=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ne=oe===Et?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&ye&&(ne=ye.RGBA16_EXT),K===s.SHORT&&ye&&(ne=ye.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function _(P,T){let K;return P?T===null||T===Li||T===Ar?K=s.DEPTH24_STENCIL8:T===ci?K=s.DEPTH32F_STENCIL8:T===ba&&(K=s.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Li||T===Ar?K=s.DEPTH_COMPONENT24:T===ci?K=s.DEPTH_COMPONENT32F:T===ba&&(K=s.DEPTH_COMPONENT16),K}function w(P,T){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Yt&&P.minFilter!==mn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function D(P){let T=new WeakRef(P);n.get(P).__ref=T,p.add(T),x.register(P,T,T)}function I(P){let T=n.get(P).__ref;T!==void 0&&(p.delete(T),x.unregister(T))}function U(P){H(P.target)}function L(P){N(P.target)}function H(P){P.removeEventListener("dispose",U),I(P),te(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&f.delete(P)}function N(P){P.removeEventListener("dispose",L),I(P),le(P)}function Z(){for(let P of p){let T=P.deref();T!==void 0&&(T.isRenderTarget===!0?N(T):H(T))}p.clear(),f.clear()}function te(P){let T=n.get(P);if(T.__webglInit===void 0)return;let K=P.source,ue=u.get(K);if(ue){let fe=ue[T.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&z(P),Object.keys(ue).length===0&&u.delete(K)}n.remove(P)}function z(P){let T=n.get(P);s.deleteTexture(T.__webglTexture);let K=P.source,ue=u.get(K);delete ue[T.__cacheKey],a.memory.textures--}function le(P){let T=n.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();let K=P.depthTexture;if(K&&K.renderTarget===P&&H(K),P.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(T.__webglFramebuffer[fe]))for(let ie=0;ie<T.__webglFramebuffer[fe].length;ie++)s.deleteFramebuffer(T.__webglFramebuffer[fe][ie]);else s.deleteFramebuffer(T.__webglFramebuffer[fe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[fe])}else{if(Array.isArray(T.__webglFramebuffer))for(let fe=0;fe<T.__webglFramebuffer.length;fe++)s.deleteFramebuffer(T.__webglFramebuffer[fe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let fe=0;fe<T.__webglColorRenderbuffer.length;fe++)T.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[fe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ue=P.textures;for(let fe=0,ie=ue.length;fe<ie;fe++){let ye=n.get(ue[fe]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),a.memory.textures--),n.remove(ue[fe])}n.remove(P)}let J=0;function Q(){J=0}function he(){return J}function Ue(P){J=P}function Ye(){let P=J;return P>=i.maxTextures&&We("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),J+=1,P}function $(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function Me(P,T){let K=n.get(P);if(P.isVideoTexture&&qt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&K.__version!==P.version){let ue=P.image;if(ue===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(K,P,T);return}}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+T)}function De(P,T){let K=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){Wt(K,P,T);return}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+T)}function Be(P,T){let K=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){Wt(K,P,T);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+T)}function Re(P,T){let K=n.get(P);if(P.version>0&&K.__version!==P.version){Tn(K,P,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+T)}let je={[Us]:s.REPEAT,[mi]:s.CLAMP_TO_EDGE,[ea]:s.MIRRORED_REPEAT},Dt={[Yt]:s.NEAREST,[Yc]:s.NEAREST_MIPMAP_NEAREST,[Tr]:s.NEAREST_MIPMAP_LINEAR,[mn]:s.LINEAR,[ga]:s.LINEAR_MIPMAP_NEAREST,[_i]:s.LINEAR_MIPMAP_LINEAR},Xe={[sp]:s.NEVER,[gu]:s.ALWAYS,[rp]:s.LESS,[pu]:s.LEQUAL,[ap]:s.EQUAL,[mu]:s.GEQUAL,[op]:s.GREATER,[cp]:s.NOTEQUAL};function xt(P,T){if(T.type===ci&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===mn||T.magFilter===ga||T.magFilter===Tr||T.magFilter===_i||T.minFilter===mn||T.minFilter===ga||T.minFilter===Tr||T.minFilter===_i)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,je[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,je[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,je[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Dt[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Dt[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Xe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Yt||T.minFilter!==Tr&&T.minFilter!==_i||T.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function yt(P,T){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",U),D(T));let ue=T.source,fe=u.get(ue);fe===void 0&&(fe={},u.set(ue,fe));let ie=$(T);if(ie!==P.__cacheKey){fe[ie]===void 0&&(fe[ie]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,K=!0),fe[ie].usedTimes++;let ye=fe[P.__cacheKey];ye!==void 0&&(fe[P.__cacheKey].usedTimes--,ye.usedTimes===0&&z(T)),P.__cacheKey=ie,P.__webglTexture=fe[ie].texture}return K}function st(P,T,K){return Math.floor(Math.floor(P/K)/T)}function $t(P,T,K,ue){let ie=P.updateRanges;if(ie.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,K,ue,T.data);else{ie.sort((F,se)=>F.start-se.start);let ye=0;for(let F=1;F<ie.length;F++){let se=ie[ye],ee=ie[F],_e=se.start+se.count,xe=st(ee.start,T.width,4),ge=st(se.start,T.width,4);ee.start<=_e+1&&xe===ge&&st(ee.start+ee.count-1,T.width,4)===xe?se.count=Math.max(se.count,ee.start+ee.count-se.start):(++ye,ie[ye]=ee)}ie.length=ye+1;let ne=t.getParameter(s.UNPACK_ROW_LENGTH),oe=t.getParameter(s.UNPACK_SKIP_PIXELS),ae=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let F=0,se=ie.length;F<se;F++){let ee=ie[F],_e=Math.floor(ee.start/4),xe=Math.ceil(ee.count/4),ge=_e%T.width,Ve=Math.floor(_e/T.width),Ke=xe,be=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ve),t.texSubImage2D(s.TEXTURE_2D,0,ge,Ve,Ke,be,K,ue,T.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ne),t.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(s.UNPACK_SKIP_ROWS,ae)}}function Wt(P,T,K){let ue=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ue=s.TEXTURE_3D);let fe=yt(P,T),ie=T.source;t.bindTexture(ue,P.__webglTexture,s.TEXTURE0+K);let ye=n.get(ie);if(ie.version!==ye.__version||fe===!0){if(t.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let be=ct.getPrimaries(ct.workingColorSpace),He=T.colorSpace===Ts?null:ct.getPrimaries(T.colorSpace),tt=T.colorSpace===Ts||be===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let oe=v(T.image,!1,i.maxTextureSize);oe=Oe(T,oe);let ae=r.convert(T.format,T.colorSpace),F=r.convert(T.type),se=M(T.internalFormat,ae,F,T.normalized,T.colorSpace,T.isVideoTexture);xt(ue,T);let ee,_e=T.mipmaps,xe=T.isVideoTexture!==!0,ge=ye.__version===void 0||fe===!0,Ve=ie.dataReady,Ke=w(T,oe);if(T.isDepthTexture)se=_(T.format===ws,T.type),ge&&(xe?t.texStorage2D(s.TEXTURE_2D,1,se,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,se,oe.width,oe.height,0,ae,F,null));else if(T.isDataTexture)if(_e.length>0){xe&&ge&&t.texStorage2D(s.TEXTURE_2D,Ke,se,_e[0].width,_e[0].height);for(let be=0,He=_e.length;be<He;be++)ee=_e[be],xe?Ve&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,ee.width,ee.height,ae,F,ee.data):t.texImage2D(s.TEXTURE_2D,be,se,ee.width,ee.height,0,ae,F,ee.data);T.generateMipmaps=!1}else xe?(ge&&t.texStorage2D(s.TEXTURE_2D,Ke,se,oe.width,oe.height),Ve&&$t(T,oe,ae,F)):t.texImage2D(s.TEXTURE_2D,0,se,oe.width,oe.height,0,ae,F,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){xe&&ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ke,se,_e[0].width,_e[0].height,oe.depth);for(let be=0,He=_e.length;be<He;be++)if(ee=_e[be],T.format!==vi)if(ae!==null)if(xe){if(Ve)if(T.layerUpdates.size>0){let tt=Au(ee.width,ee.height,T.format,T.type);for(let pe of T.layerUpdates){let ht=ee.data.subarray(pe*tt/ee.data.BYTES_PER_ELEMENT,(pe+1)*tt/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,pe,ee.width,ee.height,1,ae,ht)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,ee.width,ee.height,oe.depth,ae,ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,be,se,ee.width,ee.height,oe.depth,0,ee.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?Ve&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,ee.width,ee.height,oe.depth,ae,F,ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,be,se,ee.width,ee.height,oe.depth,0,ae,F,ee.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{xe&&ge&&t.texStorage2D(s.TEXTURE_2D,Ke,se,_e[0].width,_e[0].height);for(let be=0,He=_e.length;be<He;be++)ee=_e[be],T.format!==vi?ae!==null?xe?Ve&&t.compressedTexSubImage2D(s.TEXTURE_2D,be,0,0,ee.width,ee.height,ae,ee.data):t.compressedTexImage2D(s.TEXTURE_2D,be,se,ee.width,ee.height,0,ee.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?Ve&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,ee.width,ee.height,ae,F,ee.data):t.texImage2D(s.TEXTURE_2D,be,se,ee.width,ee.height,0,ae,F,ee.data)}else if(T.isDataArrayTexture)if(xe){if(ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ke,se,oe.width,oe.height,oe.depth),Ve)if(T.layerUpdates.size>0){let be=Au(oe.width,oe.height,T.format,T.type);for(let He of T.layerUpdates){let tt=oe.data.subarray(He*be/oe.data.BYTES_PER_ELEMENT,(He+1)*be/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,He,oe.width,oe.height,1,ae,F,tt)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ae,F,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,se,oe.width,oe.height,oe.depth,0,ae,F,oe.data);else if(T.isData3DTexture)xe?(ge&&t.texStorage3D(s.TEXTURE_3D,Ke,se,oe.width,oe.height,oe.depth),Ve&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ae,F,oe.data)):t.texImage3D(s.TEXTURE_3D,0,se,oe.width,oe.height,oe.depth,0,ae,F,oe.data);else if(T.isFramebufferTexture){if(ge)if(xe)t.texStorage2D(s.TEXTURE_2D,Ke,se,oe.width,oe.height);else{let be=oe.width,He=oe.height;for(let tt=0;tt<Ke;tt++)t.texImage2D(s.TEXTURE_2D,tt,se,be,He,0,ae,F,null),be>>=1,He>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let be=s.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),oe.parentNode!==be){be.appendChild(oe),f.add(T),be.onpaint=He=>{let tt=He.changedElements;for(let pe of f)tt.includes(pe.image)&&(pe.needsUpdate=!0)},be.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,oe);else{let tt=s.RGBA,pe=s.RGBA,ht=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,tt,pe,ht,oe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(_e.length>0){if(xe&&ge){let be=Fe(_e[0]);t.texStorage2D(s.TEXTURE_2D,Ke,se,be.width,be.height)}for(let be=0,He=_e.length;be<He;be++)ee=_e[be],xe?Ve&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,ae,F,ee):t.texImage2D(s.TEXTURE_2D,be,se,ae,F,ee);T.generateMipmaps=!1}else if(xe){if(ge){let be=Fe(oe);t.texStorage2D(s.TEXTURE_2D,Ke,se,be.width,be.height)}Ve&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae,F,oe)}else t.texImage2D(s.TEXTURE_2D,0,se,ae,F,oe);y(T)&&T.mipmapsAutoUpdate===!0&&b(ue),ye.__version=ie.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Tn(P,T,K){if(T.image.length!==6)return;let ue=yt(P,T),fe=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+K);let ie=n.get(fe);if(fe.version!==ie.__version||ue===!0){t.activeTexture(s.TEXTURE0+K);let ye=ct.getPrimaries(ct.workingColorSpace),ne=T.colorSpace===Ts?null:ct.getPrimaries(T.colorSpace),oe=T.colorSpace===Ts||ye===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let ae=T.isCompressedTexture||T.image[0].isCompressedTexture,F=T.image[0]&&T.image[0].isDataTexture,se=[];for(let pe=0;pe<6;pe++)!ae&&!F?se[pe]=v(T.image[pe],!0,i.maxCubemapSize):se[pe]=F?T.image[pe].image:T.image[pe],se[pe]=Oe(T,se[pe]);let ee=se[0],_e=r.convert(T.format,T.colorSpace),xe=r.convert(T.type),ge=M(T.internalFormat,_e,xe,T.normalized,T.colorSpace),Ve=T.isVideoTexture!==!0,Ke=ie.__version===void 0||ue===!0,be=fe.dataReady,He=w(T,ee);xt(s.TEXTURE_CUBE_MAP,T);let tt;if(T.isDepthTexture){if(ge=_(T.format===ws,T.type),Ke)if(Ve)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ge,ee.width,ee.height);else for(let pe=0;pe<6;pe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ge,ee.width,ee.height,0,_e,xe,null)}else if(ae){Ve&&Ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,He,ge,ee.width,ee.height);for(let pe=0;pe<6;pe++){tt=se[pe].mipmaps;for(let ht=0;ht<tt.length;ht++){let At=tt[ht];T.format!==vi?_e!==null?Ve?be&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ht,0,0,At.width,At.height,_e,At.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ht,ge,At.width,At.height,0,At.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ht,0,0,At.width,At.height,_e,xe,At.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ht,ge,At.width,At.height,0,_e,xe,At.data)}}}else{if(tt=T.mipmaps,Ve&&Ke){tt.length>0&&He++;let pe=Fe(se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,He,ge,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(F){Ve?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,se[pe].width,se[pe].height,_e,xe,se[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ge,se[pe].width,se[pe].height,0,_e,xe,se[pe].data);for(let ht=0;ht<tt.length;ht++){let ti=tt[ht].image[pe].image;Ve?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ht+1,0,0,ti.width,ti.height,_e,xe,ti.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ht+1,ge,ti.width,ti.height,0,_e,xe,ti.data)}}else{Ve?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,_e,xe,se[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ge,_e,xe,se[pe]);for(let ht=0;ht<tt.length;ht++){let At=tt[ht];Ve?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ht+1,0,0,_e,xe,At.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ht+1,ge,_e,xe,At.image[pe])}}}y(T)&&T.mipmapsAutoUpdate===!0&&b(s.TEXTURE_CUBE_MAP),ie.__version=fe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Mt(P,T,K,ue,fe,ie){let ye=r.convert(K.format,K.colorSpace),ne=r.convert(K.type),oe=M(K.internalFormat,ye,ne,K.normalized,K.colorSpace),ae=n.get(T),F=n.get(K);if(F.__renderTarget=T,!ae.__hasExternalTextures){let se=Math.max(1,T.width>>ie),ee=Math.max(1,T.height>>ie);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?t.texImage3D(fe,ie,oe,se,ee,T.depth,0,ye,ne,null):t.texImage2D(fe,ie,oe,se,ee,0,ye,ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),we(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,fe,F.__webglTexture,0,Tt(T)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,fe,F.__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Vn(P,T,K){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){let ue=T.depthTexture,fe=ue&&ue.isDepthTexture?ue.type:null,ie=_(T.stencilBuffer,fe),ye=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;we(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt(T),ie,T.width,T.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt(T),ie,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ie,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,P)}else{let ue=T.textures;for(let fe=0;fe<ue.length;fe++){let ie=ue[fe],ye=r.convert(ie.format,ie.colorSpace),ne=r.convert(ie.type),oe=M(ie.internalFormat,ye,ne,ie.normalized,ie.colorSpace);we(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt(T),oe,T.width,T.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt(T),oe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,oe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function jt(P,T,K){let ue=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let fe=n.get(T.depthTexture);fe.__renderTarget=T;let ie=ue?T.depthTexture.image[0]:T.depthTexture.image;(!fe.__webglTexture||ie.width!==T.width||ie.height!==T.height)&&(ie.width=T.width,ie.height=T.height,T.depthTexture.needsUpdate=!0),ue?Re(T.depthTexture,0):Me(T.depthTexture,0);let ye=fe.__webglTexture,ne=Tt(T),oe=ue?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,ae=T.depthTexture.format===ws?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===ps)we(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,oe,ye,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,ae,oe,ye,0);else if(T.depthTexture.format===ws)we(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,oe,ye,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,ae,oe,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ln(P){let T=n.get(P),K=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let ue=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ue){let fe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ue.removeEventListener("dispose",fe)};ue.addEventListener("dispose",fe),T.__depthDisposeCallback=fe}T.__boundDepthTexture=ue}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let ue=0;ue<6;ue++)jt(T.__webglFramebuffer[ue],P,ue);else P.texture.mipmaps.length>0?jt(T.__webglFramebuffer[0],P,0):jt(T.__webglFramebuffer,P,0);else if(K){T.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ue]),T.__webglDepthbuffer[ue]===void 0)T.__webglDepthbuffer[ue]=s.createRenderbuffer(),Vn(T.__webglDepthbuffer[ue],P,!1);else{let fe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,ie)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Vn(T.__webglDepthbuffer,P,!1);else{let fe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,ie)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Dn(P,T,K){let ue=n.get(P);T!==void 0&&Mt(ue.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Ln(P)}function an(P){let T=P.texture,K=n.get(P),ue=n.get(T);P.addEventListener("dispose",L),D(P);let fe=P.textures,ie=P.isWebGLCubeRenderTarget===!0,ye=fe.length>1;if(ye||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=T.version,a.memory.textures++),ie){K.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(T.mipmaps.length>0){K.__webglFramebuffer[ne]=[];for(let oe=0;oe<T.mipmaps.length;oe++)K.__webglFramebuffer[ne][oe]=s.createFramebuffer()}else K.__webglFramebuffer[ne]=s.createFramebuffer()}else{if(T.mipmaps.length>0){K.__webglFramebuffer=[];for(let ne=0;ne<T.mipmaps.length;ne++)K.__webglFramebuffer[ne]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(ye)for(let ne=0,oe=fe.length;ne<oe;ne++){let ae=n.get(fe[ne]);ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&we(P)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ne=0;ne<fe.length;ne++){let oe=fe[ne];K.__webglColorRenderbuffer[ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[ne]);let ae=r.convert(oe.format,oe.colorSpace),F=r.convert(oe.type),se=M(oe.internalFormat,ae,F,oe.normalized,oe.colorSpace,P.isXRRenderTarget===!0),ee=Tt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,se,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,K.__webglColorRenderbuffer[ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Vn(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),xt(s.TEXTURE_CUBE_MAP,T);for(let ne=0;ne<6;ne++)if(T.mipmaps.length>0)for(let oe=0;oe<T.mipmaps.length;oe++)Mt(K.__webglFramebuffer[ne][oe],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe);else Mt(K.__webglFramebuffer[ne],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);y(T)?b(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(ye){for(let ne=0,oe=fe.length;ne<oe;ne++){let ae=fe[ne],F=n.get(ae),se=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(se=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,F.__webglTexture),xt(se,ae),Mt(K.__webglFramebuffer,P,ae,s.COLOR_ATTACHMENT0+ne,se,0),y(ae)&&b(se)}t.unbindTexture()}else{let ne=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ne=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,ue.__webglTexture),xt(ne,T),T.mipmaps.length>0)for(let oe=0;oe<T.mipmaps.length;oe++)Mt(K.__webglFramebuffer[oe],P,T,s.COLOR_ATTACHMENT0,ne,oe);else Mt(K.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,ne,0);y(T)?b(ne):T.mipmaps.length>0&&s.texParameteri(ne,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&Ln(P)}function G(P){let T=P.textures;for(let K=0,ue=T.length;K<ue;K++){let fe=T[K];if(y(fe)&&fe.mipmapsAutoUpdate===!0){let ie=S(P),ye=n.get(fe).__webglTexture;t.bindTexture(ie,ye),b(ie),t.unbindTexture()}}}let Un=[];function Ct(P){if(P.samples>0){if(we(P)===!1){let T=P.textures,K=P.width,ue=P.height,fe=s.COLOR_BUFFER_BIT,ie=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(P),ne=T.length>1;if(ne)for(let ae=0;ae<T.length;ae++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ae=0;ae<T.length;ae++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[ae]);let F=n.get(T[ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,F,0)}s.blitFramebuffer(0,0,K,ue,0,0,K,ue,fe,s.NEAREST),c===!0&&(Un.length=0,Un.push(s.COLOR_ATTACHMENT0+ae),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Un.push(ie),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Un))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ne)for(let ae=0;ae<T.length;ae++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,ye.__webglColorRenderbuffer[ae]);let F=n.get(T[ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,F,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Tt(P){return Math.min(i.maxSamples,P.samples)}function we(P){let T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qt(P){let T=a.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function Oe(P,T){let K=P.colorSpace,ue=P.format,fe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==qn&&K!==Ts&&(ct.getTransfer(K)===Et?(ue!==vi||fe!==ei)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",K)),T}function Fe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=Ye,this.resetTextureUnits=Q,this.getTextureUnits=he,this.setTextureUnits=Ue,this.setTexture2D=Me,this.setTexture2DArray=De,this.setTexture3D=Be,this.setTextureCube=Re,this.rebindTextures=Dn,this.setupRenderTarget=an,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ln,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=we,this.dispose=Z}function Ov(s,e){function t(n,i=Ts){let r,a=ct.getTransfer(i);if(n===ei)return s.UNSIGNED_BYTE;if(n===$c)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Qc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===lu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ou)return s.BYTE;if(n===cu)return s.SHORT;if(n===ba)return s.UNSIGNED_SHORT;if(n===Zc)return s.INT;if(n===Li)return s.UNSIGNED_INT;if(n===ci)return s.FLOAT;if(n===Di)return s.HALF_FLOAT;if(n===uu)return s.ALPHA;if(n===fu)return s.RGB;if(n===vi)return s.RGBA;if(n===ps)return s.DEPTH_COMPONENT;if(n===ws)return s.DEPTH_STENCIL;if(n===xa)return s.RED;if(n===el)return s.RED_INTEGER;if(n===qs)return s.RG;if(n===tl)return s.RG_INTEGER;if(n===nl)return s.RGBA_INTEGER;if(n===Mo||n===So||n===wo||n===To)if(a===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===il||n===sl||n===rl||n===al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ol||n===cl||n===ll||n===hl||n===ul||n===Ao||n===fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ol||n===cl)return a===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ll)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===hl)return r.COMPRESSED_R11_EAC;if(n===ul)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ao)return r.COMPRESSED_RG11_EAC;if(n===fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dl||n===pl||n===ml||n===gl||n===bl||n===xl||n===_l||n===vl||n===yl||n===Ml||n===Sl||n===wl||n===Tl||n===Al)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Al)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===El||n===Rl||n===Cl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===El)return a===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===Il||n===Eo||n===Ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zv=`
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

}`,zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new io(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nn({vertexShader:Bv,fragmentShader:zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gu=class extends Pi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,p=null,x=typeof XRWebGLBinding<"u",m=new zu,g={},v=t.getContextAttributes(),y=null,b=null,S=[],M=[],_=new Qe,w=null,D=null,I=new pn;I.viewport=new Lt;let U=new pn;U.viewport=new Lt;let L=[I,U],H=new Vc,N=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Me=S[$];return Me===void 0&&(Me=new ra,S[$]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function($){let Me=S[$];return Me===void 0&&(Me=new ra,S[$]=Me),Me.getGripSpace()},this.getHand=function($){let Me=S[$];return Me===void 0&&(Me=new ra,S[$]=Me),Me.getHandSpace()};function te($){let Me=M.indexOf($.inputSource);if(Me===-1)return;let De=S[Me];De!==void 0&&(De.update($.inputSource,$.frame,l||a),De.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){i.removeEventListener("select",te),i.removeEventListener("selectstart",te),i.removeEventListener("selectend",te),i.removeEventListener("squeeze",te),i.removeEventListener("squeezestart",te),i.removeEventListener("squeezeend",te),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",le);for(let $=0;$<S.length;$++){let Me=M[$];Me!==null&&(M[$]=null,S[$].disconnect(Me))}N=null,Z=null,m.reset();for(let $ in g)delete g[$];if(e.setRenderTarget(y),u=null,d=null,f=null,i=null,b=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(_.width,_.height,!1),D!==null){let $=D.camera;$.fov=D.fov,$.zoom=D.zoom,$.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",te),i.addEventListener("selectstart",te),i.addEventListener("selectend",te),i.addEventListener("squeeze",te),i.addEventListener("squeezestart",te),i.addEventListener("squeezeend",te),i.addEventListener("end",z),i.addEventListener("inputsourceschange",le),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Be=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=v.stencil?ws:ps,Be=v.stencil?Ar:Li);let je={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(je),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new si(d.textureWidth,d.textureHeight,{format:vi,type:ei,depthTexture:new bs(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let De={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,De),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new si(u.framebufferWidth,u.framebufferHeight,{format:vi,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function le($){for(let Me=0;Me<$.removed.length;Me++){let De=$.removed[Me],Be=M.indexOf(De);Be>=0&&(M[Be]=null,S[Be].disconnect(De))}for(let Me=0;Me<$.added.length;Me++){let De=$.added[Me],Be=M.indexOf(De);if(Be===-1){for(let je=0;je<S.length;je++)if(je>=M.length){M.push(De),Be=je;break}else if(M[je]===null){M[je]=De,Be=je;break}if(Be===-1)break}let Re=S[Be];Re&&Re.connect(De)}}function J($,Me){Me===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Me.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let Me=$.near,De=$.far;m.texture!==null&&(m.depthNear>0&&(Me=m.depthNear),m.depthFar>0&&(De=m.depthFar)),H.near=U.near=I.near=Me,H.far=U.far=I.far=De,(N!==H.near||Z!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,Z=H.far),H.layers.mask=$.layers.mask|6,I.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;let Be=$.parent,Re=H.cameras;J(H,Be);for(let je=0;je<Re.length;je++)J(Re[je],Be);H.projectionMatrix.copy(I.projectionMatrix),H.projectionMatrixInverse.copy(I.projectionMatrixInverse),D===null&&$.isPerspectiveCamera&&(D={camera:$,fov:$.fov,zoom:$.zoom}),Q($,H,Be)};function Q($,Me,De){De===null?$.matrix.copy(Me.matrixWorld):($.matrix.copy(De.matrixWorld),$.matrix.invert(),$.matrix.multiply(Me.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Me.projectionMatrix),$.projectionMatrixInverse.copy(Me.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=fr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function($){return g[$]};let he=null;function Ue($,Me){if(h=Me.getViewerPose(l||a),p=Me,h!==null){let De=h.views;u!==null&&(e.setRenderTargetFramebuffer(b,u.framebuffer),e.setRenderTarget(b));let Be=!1;De.length!==H.cameras.length&&(H.cameras.length=0,Be=!0);for(let Xe=0;Xe<De.length;Xe++){let xt=De[Xe],yt=null;if(u!==null)yt=u.getViewport(xt);else{let $t=f.getViewSubImage(d,xt);yt=$t.viewport,Xe===0&&(e.setRenderTargetTextures(b,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(b))}let st=L[Xe];st===void 0&&(st=new pn,st.layers.enable(Xe),st.viewport=new Lt,L[Xe]=st),st.matrix.fromArray(xt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(xt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(yt.x,yt.y,yt.width,yt.height),Xe===0&&(H.matrix.copy(st.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Be===!0&&H.cameras.push(st)}let Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Xe=f.getDepthInformation(De[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,i.renderState)}if(Re&&Re.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let Xe=0;Xe<De.length;Xe++){let xt=De[Xe].camera;if(xt){let yt=g[xt];yt||(yt=new io,g[xt]=yt);let st=f.getCameraImage(xt);yt.sourceTexture=st}}}}for(let De=0;De<S.length;De++){let Be=M[De],Re=S[De];Be!==null&&Re!==void 0&&Re.update(Be,Me,l||a)}he&&he($,Me),Me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Me}),p=null}let Ye=new Op;Ye.setAnimationLoop(Ue),this.setAnimationLoop=function($){he=$},this.dispose=function(){}}},Gv=new qe,Kp=new et;Kp.set(-1,0,0,0,1,0,0,0,1);function Hv(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Su(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,y,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&u(m,g,b)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?c(m,g,v,y):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Fn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Fn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),y=v.envMap,b=v.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(b)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Kp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,v,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=y*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Vv(s,e,t,n){let i={},r={};function a(v,y){let b=y.program;n.uniformBlockBinding(v,b,i[v.id])}function o(v,y){let b=i[v.id];b===void 0&&(p(v),b=c(v),i[v.id]=b,v.addEventListener("dispose",m));let S=y.program;n.updateUBOMapping(v,S);let M=e.render.frame;r[v.id]!==M&&(l(v),r[v.id]=M)}function c(v){let y=s.createBuffer(),b=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,b,S),s.bindBuffer(s.UNIFORM_BUFFER,null),y}function l(v){let y=i[v.id],b=v.uniforms,S=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let M=0,_=b.length;M<_;M++){let w=b[M];if(Array.isArray(w))for(let D=0,I=w.length;D<I;D++)h(w[D],M,D,S);else h(w,M,0,S)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,y,b,S){if(d(v,y,b,S)===!0){let M=v.__offset,_=v.value;if(Array.isArray(_)){let w=0;for(let D=0;D<_.length;D++){let I=_[D],U=x(I,!0);f(I,v.__data,w),w+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,v.__data)}}function f(v,y,b){typeof v=="number"||typeof v=="boolean"?y[b]=v:v.isMatrix3?(y[b]=v.elements[0],y[b+1]=v.elements[1],y[b+2]=v.elements[2],y[b+3]=0,y[b+4]=v.elements[3],y[b+5]=v.elements[4],y[b+6]=v.elements[5],y[b+7]=0,y[b+8]=v.elements[6],y[b+9]=v.elements[7],y[b+10]=v.elements[8],y[b+11]=0):ArrayBuffer.isView(v)?y.set(v.subarray(0,y.length-b),b):v.toArray(y,b)}function d(v,y,b,S){let M=v.value,_=y+"_"+b;if(Array.isArray(M)){S[_]===void 0&&(S[_]=[]);let w=S[_],D=!1;for(let I=0;I<M.length;I++)u(M[I],w,I)===!0&&(D=!0);return D}return u(M,S,_)}function u(v,y,b){if(y[b]===void 0)return typeof v=="number"||typeof v=="boolean"?y[b]=v:ArrayBuffer.isView(v)?y[b]=v.slice():y[b]=v.clone(),!0;{let S=y[b];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return y[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function p(v){let y=v.uniforms,b=0,S=16;for(let _=0,w=y.length;_<w;_++){let D=Array.isArray(y[_])?y[_]:[y[_]];for(let I=0,U=D.length;I<U;I++){let L=D[I],H=Array.isArray(L.value)?L.value:[L.value],N=Array.isArray(y[_])||Array.isArray(L.value),Z=b;for(let z=0,le=H.length;z<le;z++){let J=H[z],Q=x(J,N),he=b%S,Ue=he%Q.boundary,Ye=he+Ue;b+=Ue,Ye!==0&&S-Ye<Q.storage&&(b+=S-Ye),z===0&&(Z=b),b+=Q.storage}let te=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new te((b-Z)/Float32Array.BYTES_PER_ELEMENT),L.__offset=Z}}let M=b%S;return M>0&&(b+=S-M),v.__size=b,v.__cache={},this}function x(v,y){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=16,b.storage=48):v.isMatrix4?(b.boundary=16,b.storage=64):v.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):We("WebGLRenderer: Unsupported uniform value type.",v),y===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(v){let y=v.target;y.removeEventListener("dispose",m),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:a,update:o,dispose:g}}var Wv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yi=null;function qv(){return Yi===null&&(Yi=new Os(Wv,16,16,qs,Di),Yi.name="DFG_LUT",Yi.minFilter=mn,Yi.magFilter=mn,Yi.wrapS=mi,Yi.wrapT=mi,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}var zl=class{constructor(e={}){let{canvas:t=lp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=ei}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=u,m=new Set([nl,tl,el]),g=new Set([ei,Li,ba,Ar,$c,Qc]),v=new Uint32Array(4),y=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},S=null,M=null,_=[],w=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,L=null,H=null,N=null,Z=null;this._outputColorSpace=Bt;let te=0,z=0,le=null,J=-1,Q=null,he=new Lt,Ue=new Lt,Ye=null,$=new Ce(0),Me=0,De=t.width,Be=t.height,Re=1,je=null,Dt=null,Xe=new Lt(0,0,De,Be),xt=new Lt(0,0,De,Be),yt=!1,st=new Bs,$t=new Ic,Wt=!1,Tn=!1,Mt=new qe,Vn=new B,jt=new Lt,Ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dn=!1;function an(){return le===null?Re:1}let G=n;function Un(A,O){return t.getContext(A,O)}let Ct,Tt,we,qt,Oe,Fe,P,T,K,ue,fe,ie,ye,ne,oe,ae,F,se,ee,_e,xe,ge,Ve;try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",pe,!1),G===null){let O="webgl2";if(G=Un(O,A),G===null)throw Un(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(A){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),$e("WebGLRenderer: "+A.message),A}function Ke(){Ct=new n_(G),Ct.init(),xe=new Ov(G,Ct),Tt=new qx(G,Ct,e,xe),we=new kv(G,Ct),Tt.reversedDepthBuffer&&d&&we.buffers.depth.setReversed(!0),H=G.createFramebuffer(),N=G.createFramebuffer(),Z=G.createFramebuffer(),qt=new r_(G),Oe=new Mv,Fe=new Uv(G,Ct,we,Oe,Tt,xe,qt),P=new t_(I),T=new og(G),ge=new Vx(G,T),K=new i_(G,T,qt,ge),ue=new o_(G,K,T,ge,qt),se=new a_(G,Tt,Fe),oe=new Xx(Oe),fe=new yv(I,P,Ct,Tt,ge,oe),ie=new Hv(I,Oe),ye=new wv,ne=new Pv(Ct),F=new Hx(I,P,we,ue,p,c),ae=new Fv(I,ue,Tt),Ve=new Vv(G,qt,Tt,we),ee=new Wx(G,Ct,qt),_e=new s_(G,Ct,qt),qt.programs=fe.programs,I.capabilities=Tt,I.extensions=Ct,I.properties=Oe,I.renderLists=ye,I.shadowMap=ae,I.state=we,I.info=qt}x!==ei&&(D=new l_(x,t.width,t.height,o,i,r));let be=new Gu(I,G);this.xr=be,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let A=Ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(A){A!==void 0&&(Re=A,this.setSize(De,Be,!1))},this.getSize=function(A){return A.set(De,Be)},this.setSize=function(A,O,Y=!0){if(be.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}De=A,Be=O,t.width=Math.floor(A*Re),t.height=Math.floor(O*Re),Y===!0&&(t.style.width=A+"px",t.style.height=O+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(De*Re,Be*Re).floor()},this.setDrawingBufferSize=function(A,O,Y){De=A,Be=O,Re=Y,t.width=Math.floor(A*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,A,O)},this.setEffects=function(A){if(x===ei){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let O=0;O<A.length;O++)if(A[O].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(he)},this.getViewport=function(A){return A.copy(Xe)},this.setViewport=function(A,O,Y,W){A.isVector4?Xe.set(A.x,A.y,A.z,A.w):Xe.set(A,O,Y,W),we.viewport(he.copy(Xe).multiplyScalar(an()).round())},this.getScissor=function(A){return A.copy(xt)},this.setScissor=function(A,O,Y,W){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,O,Y,W),we.scissor(Ue.copy(xt).multiplyScalar(an()).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(A){we.setScissorTest(yt=A)},this.setOpaqueSort=function(A){je=A},this.setTransparentSort=function(A){Dt=A},this.getClearColor=function(A){return A.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,Y=!0){let W=0;if(A){let X=!1;if(le!==null){let ve=le.texture.format;X=m.has(ve)}if(X){let ve=le.texture.type,Ie=g.has(ve),Te=F.getClearColor(),Ae=F.getClearAlpha(),Le=Te.r,Ze=Te.g,Ne=Te.b;Ie?(v[0]=Le,v[1]=Ze,v[2]=Ne,v[3]=Ae,G.clearBufferuiv(G.COLOR,0,v)):(y[0]=Le,y[1]=Ze,y[2]=Ne,y[3]=Ae,G.clearBufferiv(G.COLOR,0,y))}else W|=G.COLOR_BUFFER_BIT}O&&(W|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&G.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),F.dispose(),ye.dispose(),ne.dispose(),Fe.dispose(),Oe.dispose(),P.dispose(),ue.dispose(),K.dispose(),ge.dispose(),Ve.dispose(),fe.dispose(),be.dispose(),be.removeEventListener("sessionstart",is),be.removeEventListener("sessionend",Kt),An.stop()};function He(A){A.preventDefault(),qa("WebGLRenderer: Context Lost."),U=!0}function tt(){qa("WebGLRenderer: Context Restored."),U=!1;let A=qt.autoReset,O=ae.enabled,Y=ae.autoUpdate,W=ae.needsUpdate,X=ae.type;Ke(),qt.autoReset=A,ae.enabled=O,ae.autoUpdate=Y,ae.needsUpdate=W,ae.type=X}function pe(A){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ht(A){let O=A.target;O.removeEventListener("dispose",ht),At(O)}function At(A){ti(A),Oe.remove(A)}function ti(A){let O=Oe.get(A).programs;O!==void 0&&(O.forEach(function(Y){fe.releaseProgram(Y)}),A.isShaderMaterial&&fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,Y,W,X,ve){O===null&&(O=Ln);let Ie=X.isMesh&&X.matrixWorld.determinantAffine()<0,Te=rs(A,O,Y,W,X);we.setMaterial(W,Ie);let Ae=Y.index,Le=1;if(W.wireframe===!0){if(Ae=K.getWireframeAttribute(Y),Ae===void 0)return;Le=2}let Ze=Y.drawRange,Ne=Y.attributes.position,ke=Ze.start*Le,nt=(Ze.start+Ze.count)*Le;ve!==null&&(ke=Math.max(ke,ve.start*Le),nt=Math.min(nt,(ve.start+ve.count)*Le)),Ae!==null?(ke=Math.max(ke,0),nt=Math.min(nt,Ae.count)):Ne!=null&&(ke=Math.max(ke,0),nt=Math.min(nt,Ne.count));let Qt=nt-ke;if(Qt<0||Qt===1/0)return;ge.setup(X,W,Te,Y,Ae);let Pt,vt=ee;if(Ae!==null&&(Pt=T.get(Ae),vt=_e,vt.setIndex(Pt)),X.isMesh)W.wireframe===!0?(we.setLineWidth(W.wireframeLinewidth*an()),vt.setMode(G.LINES)):vt.setMode(G.TRIANGLES);else if(X.isLine){let En=W.linewidth;En===void 0&&(En=1),we.setLineWidth(En*an()),X.isLineSegments?vt.setMode(G.LINES):X.isLineLoop?vt.setMode(G.LINE_LOOP):vt.setMode(G.LINE_STRIP)}else X.isPoints?vt.setMode(G.POINTS):X.isSprite&&vt.setMode(G.TRIANGLES);if(X.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))vt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let En=X._multiDrawStarts,ze=X._multiDrawCounts,on=X._multiDrawCount,_t=Ae?T.get(Ae).bytesPerElement:1,as=Oe.get(W).currentProgram.getUniforms();for(let Rn=0;Rn<on;Rn++)as.setValue(G,"_gl_DrawID",Rn),vt.render(En[Rn]/_t,ze[Rn])}else if(X.isInstancedMesh)vt.renderInstances(ke,Qt,X.count);else if(Y.isInstancedBufferGeometry){let En=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ze=Math.min(Y.instanceCount,En);vt.renderInstances(ke,Qt,ze)}else vt.render(ke,Qt)};function ft(A,O,Y,W){L!==null&&A.isNodeMaterial&&L.setObject(W,A),Wt===!0&&oe.setState(A,Y,!1),A.transparent===!0&&A.side===hn&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,ui(A,O,W),A.side=ji,A.needsUpdate=!0,ui(A,O,W),A.side=hn):ui(A,O,W)}this.compile=function(A,O,Y=null){Y===null&&(Y=A),L!==null&&L.renderStart(A,O,Y),M=ne.get(Y),M.init(O),w.push(M),Y.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),A!==Y&&A.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),Tn=this.localClippingEnabled,Wt=oe.init(this.clippingPlanes,Tn),Wt===!0&&oe.setGlobalState(this.clippingPlanes,O),L!==null&&ae.render(M.state.shadowsArray,Y,O);let W=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ve=X.material;if(ve)if(Array.isArray(ve))for(let Ie=0;Ie<ve.length;Ie++){let Te=ve[Ie];ft(Te,Y,O,X),W.add(Te)}else ft(ve,Y,O,X),W.add(ve)}),M=w.pop(),L!==null&&L.renderEnd(),W},this.compileAsync=function(A,O,Y=null){let W=this.compile(A,O,Y);return new Promise(X=>{function ve(){if(W.forEach(function(Ie){let Ae=Oe.get(Ie).currentProgram;(Ae===void 0||Ae.isReady())&&W.delete(Ie)}),W.size===0){X(A);return}setTimeout(ve,10)}Ct.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Fr=null;function qo(A){Fr&&Fr(A)}function is(){An.stop()}function Kt(){An.start()}let An=new Op;An.setAnimationLoop(qo),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(A){Fr=A,be.setAnimationLoop(A),A===null?An.stop():An.start()},be.addEventListener("sessionstart",is),be.addEventListener("sessionend",Kt),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;L!==null&&L.renderStart(A,O);let Y=be.enabled===!0&&be.isPresenting===!0,W=D!==null&&(le===null||Y)&&D.begin(I,le);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(O),O=be.getCamera()),A.isScene===!0&&A.onBeforeRender(I,A,O,le),M=ne.get(A,w.length),M.init(O),M.state.textureUnits=Fe.getTextureUnits(),w.push(M),Mt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?$t.setFromArrayCamera(O):st.setFromProjectionMatrix(Mt,gi,O.reversedDepth),Tn=this.localClippingEnabled,Wt=oe.init(this.clippingPlanes,Tn),S=ye.get(A,_.length),S.init(),_.push(S),this.info.render.frame++,be.enabled===!0&&be.isPresenting===!0){let Ie=I.xr.getDepthSensingMesh();Ie!==null&&ss(Ie,O,-1/0,I.sortObjects)}ss(A,O,0,I.sortObjects),S.finish(),L!==null&&L.updateLights(M.state.lightsArray),I.sortObjects===!0&&S.sort(je,Dt),Dn=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Dn&&F.addToRenderList(S,A),this.info.autoReset===!0&&this.info.reset(),Wt===!0&&oe.beginShadows();let X=M.state.shadowsArray;if(ae.render(X,A,O),Wt===!0&&oe.endShadows(),(W&&D.hasRenderPass())===!1){let Ie=S.opaque,Te=S.transmissive;if(M.setupLights(),O.isArrayCamera){let Ae=O.cameras;if(Te.length>0)for(let Le=0,Ze=Ae.length;Le<Ze;Le++){let Ne=Ae[Le];hi(Ie,Te,A,Ne)}Dn&&F.render(A);for(let Le=0,Ze=Ae.length;Le<Ze;Le++){let Ne=Ae[Le];un(S,A,Ne,Ne.viewport)}}else Te.length>0&&hi(Ie,Te,A,O),Dn&&F.render(A),un(S,A,O)}le!==null&&z===0&&(Fe.updateMultisampleRenderTarget(le),Fe.updateRenderTargetMipmap(le)),W&&D.end(I),A.isScene===!0&&A.onAfterRender(I,A,O),ge.resetDefaultState(),J=-1,Q=null,w.pop(),w.length>0?(M=w[w.length-1],Fe.setTextureUnits(M.state.textureUnits),Wt===!0&&oe.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,_.pop(),_.length>0?S=_[_.length-1]:S=null,L!==null&&L.renderEnd()};function ss(A,O,Y,W){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){let Ie=O.isArrayCamera?$t:st;if(!A.frustumCulled||A.intersectsFrustum(Ie)){W&&jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);let Te=ue.update(A),Ae=A.material;Ae.visible&&S.push(A,Te,Ae,Y,jt.z,null,O)}}else if(A.isMesh||A.isLine||A.isPoints){let Ie=O.isArrayCamera?$t:st;if(!A.frustumCulled||A.intersectsFrustum(Ie)){let Te=ue.update(A),Ae=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),jt.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),jt.copy(Te.boundingSphere.center)),jt.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(Ae)){let Le=Te.groups;for(let Ze=0,Ne=Le.length;Ze<Ne;Ze++){let ke=Le[Ze],nt=Ae[ke.materialIndex];nt&&nt.visible&&S.push(A,Te,nt,Y,jt.z,ke,O)}}else Ae.visible&&S.push(A,Te,Ae,Y,jt.z,null,O)}}}let ve=A.children;for(let Ie=0,Te=ve.length;Ie<Te;Ie++)ss(ve[Ie],O,Y,W)}function un(A,O,Y,W){let{opaque:X,transmissive:ve,transparent:Ie}=A;M.setupLightsView(Y),Wt===!0&&oe.setGlobalState(I.clippingPlanes,Y),W&&we.viewport(he.copy(W)),X.length>0&&Qs(X,O,Y),ve.length>0&&Qs(ve,O,Y),Ie.length>0&&Qs(Ie,O,Y),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function hi(A,O,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[W.id]===void 0){let ke=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[W.id]=new si(1,1,{generateMipmaps:!0,type:ke?Di:ei,minFilter:_i,samples:Math.max(4,Tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let ve=M.state.transmissionRenderTarget[W.id],Ie=W.viewport||he;ve.setSize(Ie.z*I.transmissionResolutionScale,Ie.w*I.transmissionResolutionScale);let Te=I.getRenderTarget(),Ae=I.getActiveCubeFace(),Le=I.getActiveMipmapLevel();I.setRenderTarget(ve),I.getClearColor($),Me=I.getClearAlpha(),Me<1&&I.setClearColor(16777215,.5),I.clear(),Dn&&F.render(Y);let Ze=I.toneMapping;I.toneMapping=Ki;let Ne=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),M.setupLightsView(W),Wt===!0&&oe.setGlobalState(I.clippingPlanes,W),Qs(A,Y,W),Fe.updateMultisampleRenderTarget(ve),Fe.updateRenderTargetMipmap(ve),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let nt=0,Qt=O.length;nt<Qt;nt++){let Pt=O[nt],{object:vt,geometry:En,material:ze,group:on}=Pt;if(ze.side===hn&&vt.layers.test(W.layers)){let _t=ze.side;ze.side=Fn,ze.needsUpdate=!0,Xo(vt,Y,W,En,ze,on),ze.side=_t,ze.needsUpdate=!0,ke=!0}}ke===!0&&(Fe.updateMultisampleRenderTarget(ve),Fe.updateRenderTargetMipmap(ve))}I.setRenderTarget(Te,Ae,Le),I.setClearColor($,Me),Ne!==void 0&&(W.viewport=Ne),I.toneMapping=Ze}function Qs(A,O,Y){let W=O.isScene===!0?O.overrideMaterial:null;for(let X=0,ve=A.length;X<ve;X++){let Ie=A[X],{object:Te,geometry:Ae,group:Le}=Ie,Ze=Ie.material;Ze.allowOverride===!0&&W!==null&&(Ze=W),Te.layers.test(Y.layers)&&Xo(Te,O,Y,Ae,Ze,Le)}}function Xo(A,O,Y,W,X,ve){L!==null&&X.isNodeMaterial&&L.setObject(A,X),A.onBeforeRender(I,O,Y,W,X,ve),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(I,O,Y,W,A,ve),X.transparent===!0&&X.side===hn&&X.forceSinglePass===!1?(X.side=Fn,X.needsUpdate=!0,I.renderBufferDirect(Y,O,W,X,A,ve),X.side=ji,X.needsUpdate=!0,I.renderBufferDirect(Y,O,W,X,A,ve),X.side=hn):I.renderBufferDirect(Y,O,W,X,A,ve),A.onAfterRender(I,O,Y,W,X,ve)}function jo(A){let O=0;for(let Y of A)Y.texture!==null&&O++;return O}function ui(A,O,Y){O.isScene!==!0&&(O=Ln);let W=Oe.get(A),X=M.state.lights,ve=M.state.shadowsArray,Ie=X.state.version,Te=fe.getParameters(A,X.state,ve,O,Y,M.state.lightProbeGridArray),Ae=fe.getProgramCacheKey(Te),Le=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;let Ze=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=P.get(A.envMap||W.environment,Ze),W.envMapRotation=W.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Le===void 0&&(A.addEventListener("dispose",ht),Le=new Map,W.programs=Le,W.programVariants=new Map);let Ne=Le.get(Ae);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===Ie)return St(A,Te),Ne}else Te.uniforms=fe.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,Y,Te),A.onBeforeCompile(Te,I),Ne=fe.acquireProgram(Te,Ae),Le.set(Ae,Ne),W.uniforms=Te.uniforms;let ke=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=oe.uniform),St(A,Te),W.needsLights=Ia(A),W.lightsStateVersion=Ie,W.needsLights&&(ke.ambientLightColor.value=X.state.ambient,ke.lightProbe.value=X.state.probe,ke.sunLights.value=X.state.sun,ke.sunLightShadows.value=X.state.sunShadow,ke.directionalLights.value=X.state.directional,ke.directionalLightShadows.value=X.state.directionalShadow,ke.spotLights.value=X.state.spot,ke.spotLightShadows.value=X.state.spotShadow,ke.rectAreaLights.value=X.state.rectArea,ke.ltc_1.value=X.state.rectAreaLTC1,ke.ltc_2.value=X.state.rectAreaLTC2,ke.pointLights.value=X.state.point,ke.pointLightShadows.value=X.state.pointShadow,ke.hemisphereLights.value=X.state.hemi,ke.sunShadowMatrix.value=X.state.sunShadowMatrix,ke.sunShadowCascade.value=X.state.sunShadowCascade,ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ke.spotLightMatrix.value=X.state.spotLightMatrix,ke.spotLightMap.value=X.state.spotLightMap,ke.pointShadowMatrix.value=X.state.pointShadowMatrix),W.numLightProbeGrids=jo(M.state.lightProbeGridArray),W.currentProgram=Ne,W.uniformsList=null,Ne}function ph(A,O,Y,W,X){let ve=Oe.get(A),Ie=ve.currentProgram.id+","+W+","+X,Te=ve.programVariants.get(Ie);return Te===void 0?(Te=ui(A,O,Y),ve.programVariants.set(Ie,Te)):(ve.currentProgram=Te,ve.uniformsList=null,ve.outputColorSpace=W,ve.toneMapping=X),Te}function Pa(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=ya.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function St(A,O){let Y=Oe.get(A);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function rs(A,O,Y,W,X){O.isScene!==!0&&(O=Ln),Fe.resetTextureUnits();let ve=O.fog,Ie=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,Te=le===null?I.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ct.workingColorSpace,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Le=P.get(W.envMap||Ie,Ae),Ze=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ne=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ke=!!Y.morphAttributes.position,nt=!!Y.morphAttributes.normal,Qt=!!Y.morphAttributes.color,Pt=Ki;W.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Pt=I.toneMapping);let vt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,En=vt!==void 0?vt.length:0,ze=Oe.get(W),on=M.state.lights;if(Wt===!0&&(Tn===!0||A!==Q)){let C=A===Q&&W.id===J;oe.setState(W,A,C)}let _t=!1,as=!1;W.version===ze.__version?ze.needsLights&&ze.lightsStateVersion!==on.state.version||X.isBatchedMesh&&ze.batching===!1||!X.isBatchedMesh&&ze.batching===!0||X.isBatchedMesh&&ze.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&ze.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&ze.instancing===!1||!X.isInstancedMesh&&ze.instancing===!0||X.isSkinnedMesh&&ze.skinning===!1||!X.isSkinnedMesh&&ze.skinning===!0||X.isInstancedMesh&&ze.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ze.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&ze.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&ze.instancingMorph===!1&&X.morphTexture!==null||ze.envMap!==Le||W.fog===!0&&ze.fog!==ve||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==oe.numPlanes||ze.numIntersection!==oe.numIntersection)||ze.vertexAlphas!==Ze||ze.vertexTangents!==Ne||ze.morphTargets!==ke||ze.morphNormals!==nt||ze.morphColors!==Qt||ze.morphTargetsCount!==En||ze.numLightProbeGrids!==jo(M.state.lightProbeGridArray)?_t=!0:(ze.outputColorSpace!==Te||ze.toneMapping!==Pt)&&(as=!0):(_t=!0,ze.__version=W.version);let Rn=ze.currentProgram;(_t===!0||as===!0)&&(Rn=as===!0?ph(W,O,X,Te,Pt):ui(W,O,X),L&&W.isNodeMaterial&&L.onUpdateProgram(W,Rn,ze));let kr=!1,Ti=!1,zi=!1,at=Rn.getUniforms(),en=ze.uniforms;if(we.useProgram(Rn.program)&&(kr=!0,Ti=!0,zi=!0),W.id!==J&&(J=W.id,Ti=!0),kr||Q!==A){we.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),at.setValue(G,"projectionMatrix",A.projectionMatrix),at.setValue(G,"viewMatrix",A.matrixWorldInverse);let R=at.map.cameraPosition;R!==void 0&&R.setValue(G,Vn.setFromMatrixPosition(A.matrixWorld)),Tt.logarithmicDepthBuffer&&at.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&at.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,Ti=!0,zi=!0)}if(ze.needsLights&&(on.state.sunShadowMap.length>0&&at.setValue(G,"sunShadowMap",on.state.sunShadowMap,Fe),on.state.directionalShadowMap.length>0&&at.setValue(G,"directionalShadowMap",on.state.directionalShadowMap,Fe),on.state.spotShadowMap.length>0&&at.setValue(G,"spotShadowMap",on.state.spotShadowMap,Fe),on.state.pointShadowMap.length>0&&at.setValue(G,"pointShadowMap",on.state.pointShadowMap,Fe)),X.isSkinnedMesh){at.setOptional(G,X,"bindMatrix"),at.setOptional(G,X,"bindMatrixInverse");let C=X.skeleton;C&&(C.boneTexture===null&&C.computeBoneTexture(),at.setValue(G,"boneTexture",C.boneTexture,Fe))}X.isBatchedMesh&&(at.setOptional(G,X,"batchingTexture"),at.setValue(G,"batchingTexture",X._matricesTexture,Fe),at.setOptional(G,X,"batchingIdTexture"),at.setValue(G,"batchingIdTexture",X._indirectTexture,Fe),at.setOptional(G,X,"batchingColorTexture"),X._colorsTexture!==null&&at.setValue(G,"batchingColorTexture",X._colorsTexture,Fe));let E=Y.morphAttributes;if((E.position!==void 0||E.normal!==void 0||E.color!==void 0)&&se.update(X,Y,Rn),(Ti||ze.receiveShadow!==X.receiveShadow)&&(ze.receiveShadow=X.receiveShadow,at.setValue(G,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(en.envMapIntensity.value=O.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=qv()),Ti){if(at.setValue(G,"toneMappingExposure",I.toneMappingExposure),ze.needsLights&&Bi(en,zi),ve&&W.fog===!0&&ie.refreshFogUniforms(en,ve),ie.refreshMaterialUniforms(en,W,Re,Be,M.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.numLightProbeGrids>0){let C=b,R=0;for(let V of M.state.lightProbeGridArray)V.texture!==null&&(C.textures[R]=V.texture,C.min[R]=V.boundingBox.min,C.max[R]=V.boundingBox.max,C.resolution[R]=V.resolution,R++);for(let V in C)C[V].length=R;en.probesSH.value=C.textures,en.probesMin.value=C.min,en.probesMax.value=C.max,en.probesResolution.value=C.resolution}ya.upload(G,Pa(ze),en,Fe)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ya.upload(G,Pa(ze),en,Fe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&at.setValue(G,"center",X.center),at.setValue(G,"modelViewMatrix",X.modelViewMatrix),at.setValue(G,"normalMatrix",X.normalMatrix),at.setValue(G,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let C=W.uniformsGroups;for(let R=0,V=C.length;R<V;R++){let me=C[R];Ve.update(me,Rn),Ve.bind(me,Rn)}}return Rn}function Bi(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.sunLights.needsUpdate=O,A.sunLightShadows.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Ia(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(A,O,Y){let W=Oe.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Oe.get(A.texture).__webglTexture=O,Oe.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){let Y=Oe.get(A);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,Y=0){le=A,te=O,z=Y;let W=null,X=!1,ve=!1;if(A){let Te=Oe.get(A);if(Te.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(G.FRAMEBUFFER,Te.__webglFramebuffer),he.copy(A.viewport),Ue.copy(A.scissor),Ye=A.scissorTest,we.viewport(he),we.scissor(Ue),we.setScissorTest(Ye),J=-1;return}else if(Te.__webglFramebuffer===void 0)Fe.setupRenderTarget(A);else if(Te.__hasExternalTextures)Fe.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ze=A.depthTexture;if(Te.__boundDepthTexture!==Ze){if(Ze!==null&&Oe.has(Ze)&&(A.width!==Ze.image.width||A.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(A)}}let Ae=A.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ve=!0);let Le=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?W=Le[O][Y]:W=Le[O],X=!0):A.samples>0&&Fe.useMultisampledRTT(A)===!1?W=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Le)?W=Le[Y]:W=Le,he.copy(A.viewport),Ue.copy(A.scissor),Ye=A.scissorTest}else he.copy(Xe).multiplyScalar(Re).floor(),Ue.copy(xt).multiplyScalar(Re).floor(),Ye=yt;if(Y!==0&&(W=H),we.bindFramebuffer(G.FRAMEBUFFER,W)&&we.drawBuffers(A,W),we.viewport(he),we.scissor(Ue),we.setScissorTest(Ye),X){let Te=Oe.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+O,Te.__webglTexture,Y)}else if(ve){let Te=O;for(let Ae=0;Ae<A.textures.length;Ae++){let Le=Oe.get(A.textures[Ae]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ae,Le.__webglTexture,Y,Te)}}else if(A!==null&&Y!==0){let Te=Oe.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Te.__webglTexture,Y)}J=-1};function Yn(A){let O=Oe.get(A);return(O.__readFormat!==A.format||O.__readType!==A.type)&&(O.__readFormat=A.format,O.__readType=A.type,O.__formatReadable=Tt.textureFormatReadable(A.format),O.__typeReadable=Tt.textureTypeReadable(A.type)),O}this.readRenderTargetPixels=function(A,O,Y,W,X,ve,Ie,Te=0){if(!(A&&A.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ae=Ae[Ie],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){we.bindFramebuffer(G.FRAMEBUFFER,Ae);try{let Le=A.textures[Te],Ze=Le.format,Ne=Le.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te);let ke=Yn(Le);if(ke.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-W&&Y>=0&&Y<=A.height-X&&G.readPixels(O,Y,W,X,xe.convert(Ze),xe.convert(Ne),ve)}finally{let Le=le!==null?Oe.get(le).__webglFramebuffer:null;we.bindFramebuffer(G.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(A,O,Y,W,X,ve,Ie,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ae=Ae[Ie],Array.isArray(Ae)&&(Ae=Ae[0])),Ae)if(O>=0&&O<=A.width-W&&Y>=0&&Y<=A.height-X){we.bindFramebuffer(G.FRAMEBUFFER,Ae);let Le=A.textures[Te],Ze=Le.format,Ne=Le.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te);let ke=Yn(Le);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,nt),G.bufferData(G.PIXEL_PACK_BUFFER,ve.byteLength,G.STREAM_READ),G.readPixels(O,Y,W,X,xe.convert(Ze),xe.convert(Ne),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Qt=le!==null?Oe.get(le).__webglFramebuffer:null;we.bindFramebuffer(G.FRAMEBUFFER,Qt);let Pt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await up(G,Pt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,nt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ve),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(nt),G.deleteSync(Pt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,Y=0){let W=Math.pow(2,-Y),X=Math.floor(A.image.width*W),ve=Math.floor(A.image.height*W),Ie=O!==null?O.x:0,Te=O!==null?O.y:0;Fe.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,Y,0,0,Ie,Te,X,ve),we.unbindTexture()},this.copyTextureToTexture=function(A,O,Y=null,W=null,X=0,ve=0){let Ie,Te,Ae,Le,Ze,Ne,ke,nt,Qt,Pt=A.isCompressedTexture?A.mipmaps[ve]:A.image;if(Y!==null)Ie=Y.max.x-Y.min.x,Te=Y.max.y-Y.min.y,Ae=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,Ze=Y.min.y,Ne=Y.isBox3?Y.min.z:0;else{let at=Math.pow(2,-X);Ie=Math.floor(Pt.width*at),Te=Math.floor(Pt.height*at),A.isDataArrayTexture?Ae=Pt.depth:A.isData3DTexture?Ae=Math.floor(Pt.depth*at):Ae=1,Le=0,Ze=0,Ne=0}W!==null?(ke=W.x,nt=W.y,Qt=W.z):(ke=0,nt=0,Qt=0);let vt=xe.convert(O.format),En=xe.convert(O.type),ze;O.isData3DTexture?(Fe.setTexture3D(O,0),ze=G.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Fe.setTexture2DArray(O,0),ze=G.TEXTURE_2D_ARRAY):(Fe.setTexture2D(O,0),ze=G.TEXTURE_2D),we.activeTexture(G.TEXTURE0),we.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,O.flipY),we.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),we.pixelStorei(G.UNPACK_ALIGNMENT,O.unpackAlignment);let on=we.getParameter(G.UNPACK_ROW_LENGTH),_t=we.getParameter(G.UNPACK_IMAGE_HEIGHT),as=we.getParameter(G.UNPACK_SKIP_PIXELS),Rn=we.getParameter(G.UNPACK_SKIP_ROWS),kr=we.getParameter(G.UNPACK_SKIP_IMAGES);we.pixelStorei(G.UNPACK_ROW_LENGTH,Pt.width),we.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pt.height),we.pixelStorei(G.UNPACK_SKIP_PIXELS,Le),we.pixelStorei(G.UNPACK_SKIP_ROWS,Ze),we.pixelStorei(G.UNPACK_SKIP_IMAGES,Ne);let Ti=A.isDataArrayTexture||A.isData3DTexture,zi=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){let at=Oe.get(A),en=Oe.get(O),E=Oe.get(at.__renderTarget),C=Oe.get(en.__renderTarget);we.bindFramebuffer(G.READ_FRAMEBUFFER,E.__webglFramebuffer),we.bindFramebuffer(G.DRAW_FRAMEBUFFER,C.__webglFramebuffer);for(let R=0;R<Ae;R++)Ti&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Oe.get(A).__webglTexture,X,Ne+R),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Oe.get(O).__webglTexture,ve,Qt+R)),G.blitFramebuffer(Le,Ze,Le+Ie,Ze+Te,ke,nt,ke+Ie,nt+Te,G.DEPTH_BUFFER_BIT,G.NEAREST);we.bindFramebuffer(G.READ_FRAMEBUFFER,null),we.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||Oe.has(A)){let at=Oe.get(A),en=Oe.get(O);we.bindFramebuffer(G.READ_FRAMEBUFFER,N),we.bindFramebuffer(G.DRAW_FRAMEBUFFER,Z);for(let E=0;E<Ae;E++)Ti?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,at.__webglTexture,X,Ne+E):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,at.__webglTexture,X),zi?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,en.__webglTexture,ve,Qt+E):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,en.__webglTexture,ve),X!==0?G.blitFramebuffer(Le,Ze,Le+Ie,Ze+Te,ke,nt,ke+Ie,nt+Te,G.COLOR_BUFFER_BIT,G.NEAREST):zi?G.copyTexSubImage3D(ze,ve,ke,nt,Qt+E,Le,Ze,Ie,Te):G.copyTexSubImage2D(ze,ve,ke,nt,Le,Ze,Ie,Te);we.bindFramebuffer(G.READ_FRAMEBUFFER,null),we.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else zi?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(ze,ve,ke,nt,Qt,Ie,Te,Ae,vt,En,Pt.data):O.isCompressedArrayTexture?G.compressedTexSubImage3D(ze,ve,ke,nt,Qt,Ie,Te,Ae,vt,Pt.data):G.texSubImage3D(ze,ve,ke,nt,Qt,Ie,Te,Ae,vt,En,Pt):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ve,ke,nt,Ie,Te,vt,En,Pt.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ve,ke,nt,Pt.width,Pt.height,vt,Pt.data):G.texSubImage2D(G.TEXTURE_2D,ve,ke,nt,Ie,Te,vt,En,Pt);we.pixelStorei(G.UNPACK_ROW_LENGTH,on),we.pixelStorei(G.UNPACK_IMAGE_HEIGHT,_t),we.pixelStorei(G.UNPACK_SKIP_PIXELS,as),we.pixelStorei(G.UNPACK_SKIP_ROWS,Rn),we.pixelStorei(G.UNPACK_SKIP_IMAGES,kr),ve===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&G.generateMipmap(ze),we.unbindTexture()},this.initRenderTarget=function(A){Oe.get(A).__webglFramebuffer===void 0&&Fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Fe.setTextureCube(A,0):A.isData3DTexture?Fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Fe.setTexture2DArray(A,0):Fe.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){te=0,z=0,le=null,we.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var $i=[{id:"mage",icon:"\u{1F52E}",label:"MAGE",color:11824127,range:22,every:1.55,dmg:8,aoe:1.9,desc:"fireballs (area)"},{id:"warrior",icon:"\u2694\uFE0F",label:"WARRIOR",color:16734794,range:2.6,every:.8,dmg:9,aoe:1.2,desc:"holds the gate"},{id:"archer",icon:"\u{1F3F9}",label:"ARCHER",color:5234943,range:25,every:.65,dmg:5,aoe:0,desc:"fast arrows, hits fliers"},{id:"healer",icon:"\u{1F49A}",label:"HEALER",color:6160282,range:18,every:1.3,dmg:3,aoe:0,desc:"heals + barrier"}],Ht=Object.fromEntries($i.map((s,e)=>[s.id,e])),yi=[{id:"imp",hp:14,speed:3.4,dmg:1,r:.45,fly:!1,pts:2},{id:"brute",hp:60,speed:1.6,dmg:3,r:.9,fly:!1,pts:6},{id:"wraith",hp:22,speed:2.6,dmg:2,r:.55,fly:!0,pts:4},{id:"boss",hp:560,speed:.9,dmg:8,r:2,fly:!1,pts:80}],Mn=Object.fromEntries(yi.map((s,e)=>[s.id,e])),Ni=[{title:"THE DARK DIMENSION",text:"A magic underworld has clashed with Earth.",say:"The Dark Dimension... a magic underworld... has clashed with Earth.",sec:5.5,art:"rift"},{title:"A FATHER",text:"A scientist, denied the cure for his daughter by a greedy boss. His wife and his brother \u2014 gone.",say:"It began with a scientist. Denied the AIDS cure for his daughter by a greedy boss. His wife... and his brother... gone.",sec:9,art:"scientist"},{title:"THE BOOK & THE STONE",text:"An ancient book. A dark teleport stone. His grief tore the Dark Dimension open at Earth\u2019s core.",say:"An ancient book. A dark teleport stone. His grief tore the Dark Dimension open, at the core of the Earth.",sec:8,art:"book"},{title:"5,000,000,000 STOLEN",text:"Five billion souls were stolen by a hidden Mastermind.",say:"Five billion souls were stolen... by a hidden Mastermind.",sec:5.5,art:"souls"},{title:"THE SACRIFICE",text:"The Lord of Earth gave 1.5 billion more to awaken the Ascension System.",say:"The Lord of Earth sacrificed one and a half billion more... to awaken the Ascension System.",sec:7,art:"lord"},{title:"THE LAST CITADEL",text:"1.5 billion survivors remain. Beat the Dark Dimension \u2014 or they vanish forever.",say:"One and a half billion survivors remain. Beat the Dark Dimension... or they vanish. Forever.",sec:7,art:"citadel"}],Xv=[0,5],Jp=s=>s%3===1?Ni.map((e,t)=>t):Xv;var Hu=[{n:1,title:"THE RIFT OPENS",boss:{id:"scientist",name:"The Corrupted Scientist",hp:1}},{n:2,title:"ASCENSION",boss:{id:"scientist2",name:"The Scientist, Unbound",hp:1.5}},{n:3,title:"THE MASTERMIND",boss:{id:"mastermind",name:"The Mastermind",hp:2.4}}],Qi=[{id:"rift",q:"THE RIFT IS UNSTABLE",a:{key:"seal",label:"SEAL THE RIFT",icon:"\u{1F300}",words:["seal","rift"]},b:{key:"hunt",label:"HUNT THE MASTERMIND",icon:"\u{1F5E1}\uFE0F",words:["hunt","mastermind","attack"]}},{id:"save",q:"THE CITY BURNS",a:{key:"city",label:"SAVE THE CITY",icon:"\u{1F3D9}\uFE0F",words:["city"]},b:{key:"army",label:"SAVE THE ARMY",icon:"\u{1F6E1}\uFE0F",words:["army"]}}],Vl={seal:{spawnMul:.75,finalHp:1.3,text:"Fewer creatures pour out\u2026 but the Mastermind grows stronger."},hunt:{spawnMul:1.3,finalHp:.7,text:"The rift rages wider\u2026 but the Mastermind is wounded."},city:{survivors:12e7,guardians:0,text:"120 million survivors pulled from the ruins."},army:{survivors:0,guardians:2,text:"Two guardian heroes join the wall for good."}},Yp={"seal-city":"The rift is sealed. The city stands. Dawn rises over {n} survivors.","seal-army":"The rift is sealed and the army marches home. {n} survivors live on.","hunt-city":"The Mastermind is gone. The city wakes to {n} survivors and a quiet sky.","hunt-army":"The army stormed the dark. The Mastermind is gone. {n} survivors live on."},No=[{id:"dragon",min:500,label:"DRAGON ALLY",icon:"\u{1F409}",desc:"a dragon burns the field; on a boss: 25% of its life"},{id:"awaken",min:100,label:"ASCENSION",icon:"\u26A1",desc:"screen-wide ultimate + you ascend (\xD73 power)"},{id:"guardian",min:30,label:"GUARDIAN HERO",icon:"\u{1F6E1}\uFE0F",desc:"summons a golden guardian to the gate"},{id:"rune",min:5,label:"SHIELD RUNE",icon:"\u{1F537}",desc:"+12 barrier + a spell volley"},{id:"volley",min:1,label:"SPELL VOLLEY",icon:"\u2728",desc:"homing bolts from you (more coins, more bolts)"}],Zp=s=>{let e=Number(s)||0;return No.find(t=>e>=t.min)||No[No.length-1]},jv={mage:["mage","wizard","magic","\u{1F52E}","\u{1FA84}"],warrior:["warrior","knight","sword","tank","\u2694\uFE0F","\u{1F5E1}\uFE0F"],archer:["archer","bow","arrow","hunter","\u{1F3F9}"],healer:["healer","heal","priest","medic","\u{1F49A}","\u2764\uFE0F\u200D\u{1FA79}"]};function $p(s){let e=String(s||"").toLowerCase().trim();if(!e)return{cmd:"chat"};let t=e.split(/[^\p{L}\p{N}\p{Extended_Pictographic}\u200d\ufe0f]+/u).filter(Boolean),n=r=>new RegExp("\\p{Extended_Pictographic}","u").test(r)?e.includes(r):t.includes(r);for(let[r,a]of Object.entries(jv))if(a.some(n))return{cmd:"class",cls:r};let i=e.match(/^(?:vote\s*)?([12])(?:\ufe0f?\u20e3)?\b/u)||e.match(/^([12])\ufe0f?\u20e3/u);if(i)return{cmd:"vote",vote:Number(i[1])};if(/^(one|first)\b/.test(e))return{cmd:"vote",vote:1};if(/^(two|second)\b/.test(e))return{cmd:"vote",vote:2};for(let r of Qi){if(r.a.words.some(n))return{cmd:"vote",vote:1,choice:r.id};if(r.b.words.some(n))return{cmd:"vote",vote:2,choice:r.id}}return{cmd:"chat"}}var Rr=4,kn=2.6;var Mi=2.2,nn=-34,Qp=15;var em=[["red",16731486],["orange",16752412],["gold",16765503],["lime",10216804],["green",3064446],["teal",2085313],["cyan",4114431],["blue",5078271],["purple",10182117],["pink",16740277],["white",15921906],["black",3816008],["brown",11037500],["silver",12109014],["rose",16748451]],Wl=new Map(em.map(([s,e])=>[s,e]));Wl.set("yellow",16765503);Wl.set("violet",10182117);Wl.set("grey",12109014);Wl.set("gray",12109014);function Kv(s){let e=2166136261;for(let t of String(s))e^=t.codePointAt(0),e=Math.imul(e,16777619);return e>>>0}var tm=s=>em[Kv(s)%10][1];function Vu(s){let e=String(s||"").replace(/[\u0000-\u001f\u200b-\u200f\u202a-\u202e]/g,"").replace(/\s+/g," ").trim(),t=[...e];return(t.length>16?t.slice(0,15).join("")+"\u2026":e)||"Viewer"}var ql=["Pixel","Mochi","Bolt","Nugget","Waffles","Ziggy","Pebble","Turbo","Biscuit","Gizmo","Noodle","Sprocket","Muffin","Rocket","Tofu","Dumpling","Jelly","Comet","Pickle","Bean","Sushi","Taco","Nacho","Boba"];var Rt={bot:1,cmd:2,asc:4,bless:8,down:16,crown:32,gift:64},Wu=2;var Jv={introSeconds:1,gatherSeconds:14,chapterSeconds:4,breakSeconds:5,victorySeconds:4.5,voteSeconds:16,choiceSeconds:5.5,endingSeconds:16,minDefenders:6,bots:!0,waveCap:70,bossCap:100,sendCap:70,enemySend:90,enemyCap:110,spawnMul:1,enemyHpMul:1,dmgMul:1,lossPer:95e4,likeBarrier:.06,likePulse:500,startChapter:1},As=4,Xl=class{constructor(e={},t=Math.random){this.o={...Jv,...e},this.rng=t,this.t=0,this.run=0,this.people=new Map,this.byId=new Map,this.nextId=1,this.enemies=[],this.eNext=1,this.allies=[],this.aNext=1,this.hits=[],this.ev=[],this.rAdd=[],this.rDel=[],this.hype=0,this.likes=0,this.humanAt=-999,this.sessionBest=0,this.saves=0,this.lastResult=null,this.shotBudget=0,this.popBudget=0,this.killBudget=0,this.startSession(!0)}r(e){return Math.floor(this.rng()*e)}emit(e){this.ev.push(e)}drain(){let e=this.ev;return this.ev=[],e}drainRoster(){let e={add:this.rAdd,del:this.rDel};return this.rAdd=[],this.rDel=[],e}rosterEntry(e){return{id:e.id,name:e.name,color:e.color,bot:e.bot}}get alive(){let e=0;for(let t of this.people.values())t.on&&e++;return e}get humans(){let e=0;for(let t of this.people.values())t.on&&!t.bot&&e++;return e}defenders(){return[...this.people.values()].filter(e=>e.on)}get chapter(){return Math.max(1,Math.min(3,Math.floor(this.wave/As)+(this.phase==="chapter"||this.wave%As?1:0)))}get boss(){return this.enemies.find(e=>e.k===Mn.boss&&e.hp>0)||null}member(e,t,n=!1){let i=this.people.get(e);if(!i)i={id:this.nextId++,uid:e,name:Vu(t),color:tm(e),bot:n,on:!1,cls:-1,slot:-1,x:0,z:Rr,hp:100,downT:0,cd:this.rng(),lastAct:this.t,cmdT:-9,hasteT:-9,ascT:-9,blessed:!1,giftT:-9,pts:0,kills:0,vote:0,post:0},this.people.set(e,i),this.byId.set(i.id,i),this.rAdd.push(this.rosterEntry(i));else if(t&&!n){let r=Vu(t);r!==i.name&&(i.name=r,this.rAdd.push(this.rosterEntry(i)))}return i}join(e,t){if(e.lastAct=this.t,e.bot||(this.humanAt=this.t),t!==void 0&&t!==e.cls){let n=e.cls;e.cls=t,e.on&&(this.place(e),this.emit({k:"class",id:e.id,c:t,was:n}))}return e.on?!1:(e.cls<0&&(e.cls=this.autoClass()),e.on=!0,e.hp=100,e.downT=0,this.place(e),this.emit({k:"join",id:e.id,bot:e.bot,c:e.cls}),e.bot||this.trimBots(),!0)}autoClass(){let e=[0,0,0,0];for(let r of this.people.values())r.on&&r.cls>=0&&e[r.cls]++;let t=e.reduce((r,a)=>r+a,0),n=0,i=1e9;for(let r=0;r<4;r++){let a=e[r]+this.rng()*.8;r===Ht.warrior&&e[r]>t*.25&&(a+=99),r===Ht.healer&&(a+=.6),a<i&&(i=a,n=r)}return n}place(e){if(e.cls===Ht.warrior){let r=this.post=(this.post||0)+1,a=r*7%13;e.post={x:-6+a,z:Mi-1.6-r%3*.9},e.x=e.post.x,e.z=Rr-.2;return}let n=(this.slotN=(this.slotN||0)+1)*11%34,i=n%2;e.post=null,e.x=-8.4+(n>>1)*1.05+i*.5,e.z=Rr+i*1.1+(this.rng()-.5)*.15}trimBots(){if(this.humans+this.botsOn()<=this.o.minDefenders)return;let e=[...this.people.values()].find(t=>t.bot&&t.on);e&&(e.on=!1,this.emit({k:"leave",id:e.id}))}botsOn(){let e=0;for(let t of this.people.values())t.bot&&t.on&&e++;return e}fillBots(){if(!this.o.bots)return;let e=this.o.minDefenders-this.alive,t=[Ht.warrior,Ht.mage,Ht.archer,Ht.healer,Ht.archer,Ht.mage,Ht.warrior,Ht.mage];for(let n=0;n<ql.length&&e>0;n++){let i=ql[(n+this.run*3)%ql.length],r=this.member("bot:"+i,"Bot "+i,!0);r.on||(r.cls=t[n%t.length],this.join(r),e--)}}input(e){if(!e||!e.uid)return{ok:!1};let t=this.member(String(e.uid),e.name||e.uid);switch(e.type){case"chat":case"comment":return this.chat(t,String(e.text||""));case"like":return this.like(t,Math.max(1,Math.min(100,Number(e.count)||1)));case"gift":return this.gift(t,(Number(e.coins)||1)*Math.max(1,Number(e.count)||1),e.giftName||"gift");case"follow":return this.join(t),this.bless(t,"follow"),{ok:!0};case"share":return this.join(t),this.bless(t,"share"),{ok:!0};case"join":return this.join(t),{ok:!0}}return{ok:!0}}chat(e,t){let n=$p(t),i=this.join(e,n.cmd==="class"?Ht[n.cls]:void 0);return e.cmdT=this.t,this.phase==="vote"&&n.cmd==="vote"&&(!n.choice||n.choice===Qi[this.voteIdx].id)?(e.vote!==n.vote&&(e.vote=n.vote,this.countVotes(),this.emit({k:"vote",id:e.id,v:n.vote})),{ok:!0,cmd:"vote",vote:n.vote}):(this.fighting()&&(e.hasteT=this.t+3),{ok:!0,cmd:i?"join":n.cmd,cls:n.cls})}fighting(){return this.phase==="wave"||this.phase==="boss"||this.phase==="break"}like(e,t){return this.join(e),this.likes+=t,this.hype+=t,this.barrier=Math.min(100,this.barrier+t*this.o.likeBarrier),this.hype>=this.o.likePulse&&(this.hype-=this.o.likePulse,this.pulse(e)),{ok:!0}}bless(e,t){if(t==="follow")e.blessed=!0,this.revive(e),this.barrier=Math.min(100,this.barrier+10);else{this.barrier=Math.min(100,this.barrier+15);for(let n of this.people.values())n.on&&n.downT>0&&this.revive(n)}this.emit({k:"bless",id:e.id,why:t})}revive(e){e.downT>0&&(e.downT=0,e.hp=100,this.emit({k:"rise",id:e.id})),e.hp=100}gift(e,t,n){this.join(e);let i=Zp(t);e.giftT=this.t,e.pts+=Math.min(60,4+t);let r={k:"gift",id:e.id,tier:i.id,coins:t,giftName:n};switch(i.id){case"volley":this.volley(e,Math.min(12,5+t),11);break;case"rune":this.barrier=Math.min(100,this.barrier+12),this.volley(e,6,12);break;case"guardian":{let a=this.allies.filter(o=>o.k===0);if(a.length>=4){let o=a.sort((c,l)=>c.until-l.until)[0];o.until=this.t+35,o.hp=100,r.extended=!0}else this.addAlly(0,e.id,35);break}case"awaken":e.ascT=this.t+20,this.t-(this.ultT||-99)>8?(this.ultT=this.t,this.ultimate(e,1)):(this.volley(e,10,16),r.cool=!0);break;case"dragon":{let a=this.boss;if(a&&(this.damage(a,a.max*.25,e,!0),r.judgment=!0),this.allies.some(o=>o.k===1)){let o=this.allies.find(c=>c.k===1);o.until=Math.max(o.until,this.t+25),a||this.ultimate(e,.6),r.extended=!0}else this.addAlly(1,e.id,25);break}}return this.emit(r),{ok:!0,tier:i.id}}addAlly(e,t,n){let i={id:this.aNext++,k:e,by:t,until:this.t+n,x:e?0:-5+this.r(11),z:e?-10:Mi-2.6,hp:100,cd:0,a0:this.t};this.allies.push(i),this.emit({k:"ally",a:i.id,kind:e,by:t})}volley(e,t,n){let i=this.enemies.filter(r=>r.hp>0);if(!i.length){this.barrier=Math.min(100,this.barrier+4);return}for(let r=0;r<t;r++){let a=i[this.r(i.length)];this.queueHit(e,a,n*this.o.dmgMul,0,.5+r*.07,"v")}this.emit({k:"volley",id:e.id,n:t})}ultimate(e,t){let n=0;for(let i of this.enemies){if(i.hp<=0)continue;let r=i.k===Mn.boss?i.max*.08*t:(60+this.wave*6)*t;this.damage(i,r,e,!1),i.k!==Mn.boss&&(i.z-=3*t),n++}this.emit({k:"ult",id:e?e.id:0,hit:n,p:t})}pulse(e){this.barrier=Math.min(100,this.barrier+20);for(let t of this.people.values())t.on&&t.downT>0&&this.revive(t);this.ultimate(null,.5),this.emit({k:"pulse",id:e.id})}setPhase(e,t){this.phase=e,this.phaseStart=this.t,this.phaseEnd=this.t+t}startSession(e=!1){this.run++,this.wave=(this.o.startChapter-1)*As+(this.o.startWave||0),this.survivors=15e8,this.barrier=40,this.hype=0,this.choices=[],this.fx={spawnMul:1,finalHp:1,guardians:0},this.voteIdx=-1,this.voteCounts=[0,0],this.enemies=[],this.allies=[],this.hits=[],this.spawnLeft=0,this.waveStart=0,this.slotN=0,this.post=0,this.lost=0;for(let[t,n]of this.people)!n.bot&&this.t-n.lastAct>1200&&(this.people.delete(t),this.byId.delete(n.id),this.rDel.push(n.id));for(let t of this.people.values())t.on=!1,t.runPts=0,t.vote=0,t.ascT=-9,t.blessed=!1,t.downT=0,t.hp=100;for(let t of this.people.values())!t.bot&&this.t-t.lastAct<180&&this.join(t);this.lore=this.o.introSeconds>0?(this.o.loreCards||Jp(this.run)).slice():[],this.loreAt=this.t,this.setPhase("intro",this.lore.length?this.lore.reduce((t,n)=>t+Ni[n].sec,0)+1:.5),this.emit({k:"intro",run:this.run,lore:this.lore.slice()})}startChapter(){this.setPhase("chapter",this.o.chapterSeconds),this.emit({k:"chapter",n:this.chapter,title:Hu[this.chapter-1].title})}nextWave(){this.wave++;let e=this.chapter,t=(this.wave-1)%As,n=Math.max(1,this.alive),i=Math.sqrt(Math.min(n,220)/6),r=.45+.65*i;this.hpCrowd=.6+.4*i;let a=Math.round((6+1.6*this.wave)*r*this.fx.spawnMul*this.o.spawnMul);if(this.waveStart=this.t,t===As-1){let o=Hu[e-1].boss,c=yi[Mn.boss].hp*o.hp*(.6+.4*i)*(e===3?this.fx.finalHp:1)*this.o.enemyHpMul;this.spawnLeft=Math.round(a*.5),this.spawnEvery=22/Math.max(1,this.spawnLeft);let l=this.spawn(Mn.boss,c);l.bossId=o.id,l.name=o.name,l.z=nn+4,l.x=0,this.setPhase("boss",this.o.bossCap),this.emit({k:"boss",n:e,id:o.id,name:o.name,hp:Math.round(c)})}else this.spawnLeft=a,this.spawnEvery=(16+t*3)/a,this.setPhase("wave",this.o.waveCap),this.emit({k:"wave",n:this.wave,ch:e,i:t+1,count:a});this.nextSpawn=this.t+.8,this.fillBots()}spawn(e,t){let n=yi[e],i=this.chapter,r=t||n.hp*(1+.08*(this.wave-1))*(1+(i-1)*.1)*(this.hpCrowd||1)*this.o.enemyHpMul,a={id:this.eNext++,k:e,x:(this.rng()-.5)*5,z:nn+3+this.rng()*2,tx:(this.rng()-.5)*(Qp-3),hp:r,max:r,speed:n.speed*(.85+this.rng()*.3),atkT:0,slowT:0,eng:0,born:this.t};return this.enemies.push(a),a}spawnTick(){if(this.spawnLeft<=0||this.t<this.nextSpawn)return;if(this.enemies.length>=this.o.enemyCap){this.nextSpawn=this.t+.3;return}let e=this.chapter,t=this.rng(),n=e===1?[.7,.85]:e===2?[.5,.75]:[.42,.72],i=t<n[0]?Mn.imp:t<n[1]?Mn.brute:Mn.wraith;this.spawn(i),this.spawnLeft--,this.nextSpawn=this.t+this.spawnEvery*(.6+this.rng()*.8)}waveCleared(){return this.spawnLeft<=0&&!this.enemies.some(e=>e.hp>0)}startVote(){this.voteIdx=this.chapter-1,this.voteCounts=[0,0];for(let e of this.people.values())e.vote=0;this.setPhase("vote",this.o.voteSeconds),this.emit({k:"vote",start:!0,i:this.voteIdx})}countVotes(){let e=[0,0];for(let t of this.people.values())t.on&&t.vote&&e[t.vote-1]++;this.voteCounts=e}closeVote(){this.countVotes();let e=Qi[this.voteIdx],t=this.voteCounts,n=t[0]===t[1]?this.r(2)?"b":"a":t[0]>t[1]?"a":"b",i=e[n].key,r=Vl[i];if(this.choices.push(i),r.spawnMul&&(this.fx.spawnMul=r.spawnMul),r.finalHp&&(this.fx.finalHp=r.finalHp),r.survivors&&(this.survivors=Math.min(15e8,this.survivors+r.survivors)),r.guardians){this.fx.guardians=r.guardians;for(let a=0;a<r.guardians;a++)this.addAlly(0,0,1e6)}this.setPhase("choice",this.o.choiceSeconds),this.emit({k:"choice",i:this.voteIdx,key:i,votes:t.slice(),none:t[0]+t[1]===0})}endSession(e){let t=[...this.people.values()].filter(r=>r.on||r.runPts>0).filter(r=>!r.bot&&r.runPts>0),n=[...this.people.values()].filter(r=>r.runPts>0||r.on).sort((r,a)=>a.runPts-r.runPts),i=n.filter(r=>!r.bot).slice(0,3);for(let r of t)r.pts+=0;this.sessionBest=Math.max(this.sessionBest,this.wave),e&&this.saves++,this.lastResult={run:this.run,saved:e,wave:this.wave,survivors:Math.round(this.survivors),choices:this.choices.slice(),players:t.map(r=>({uid:r.uid,name:r.name,pts:Math.round(r.runPts),kills:r.runKills||0}))},this.enemies=[],this.hits=[],this.allies=this.allies.filter(r=>r.k===1&&!1),this.setPhase("ending",this.o.endingSeconds),this.emit({k:"end",saved:e,wave:this.wave,survivors:Math.round(this.survivors),choices:this.choices.slice(),top:(i.length?i:n.slice(0,3)).map(r=>r.id)});for(let r of this.people.values())r.runKills=0}step(e){this.t+=e;let t=this.phase;if(this.shotBudget=Math.min(6,this.shotBudget+e*34),this.popBudget=Math.min(4,this.popBudget+e*12),this.killBudget=Math.min(6,this.killBudget+e*24),(t==="wave"||t==="boss"||t==="break"||t==="victory")&&(this.spawnTick(),this.combat(e),this.survivors<=0))return this.survivors=0,this.endSession(!1);if(t==="vote"&&this.botsVote(e),t==="intro"&&this.lore.length&&this.t>=this.loreAt){let n=this.lore.shift();this.loreAt=this.t+Ni[n].sec,this.emit({k:"lore",i:n,sec:Ni[n].sec})}if(this.fighting()&&(this.barrier=Math.max(0,this.barrier-e*.6)),t==="wave"&&this.waveCleared()&&this.t-this.waveStart>4){this.setPhase("break",this.o.breakSeconds),this.emit({k:"clear",n:this.wave});return}if(t==="boss"&&!this.boss){this.setPhase("victory",this.o.victorySeconds);for(let n of this.enemies)n.hp>0&&(n.hp=0,this.emit({k:"kill",e:n.id,by:0,x:+n.x.toFixed(1),z:+n.z.toFixed(1),q:1}));return}if(!(this.t<this.phaseEnd))switch(t){case"intro":this.setPhase("gather",this.o.gatherSeconds),this.fillBots(),this.emit({k:"gather"});break;case"gather":if(!this.alive&&(this.fillBots(),!this.alive)){this.phaseEnd=this.t+2;return}this.startChapter();break;case"chapter":this.nextWave();break;case"wave":this.nextWave();break;case"break":this.wave%As===As-1?this.nextWave():this.nextWave();break;case"boss":{let n=this.boss;n&&(this.loseSurvivors(150/1.15,!0),n.hp=0,this.emit({k:"retreat",name:n.name})),this.setPhase("victory",2.5);break}case"victory":if(this.chapter>=3)return this.endSession(!0);this.startVote();break;case"vote":this.closeVote();break;case"choice":this.wave=this.chapter*As,this.startChapter();break;case"ending":this.startSession();break}}loseSurvivors(e,t=!1){let n=e*this.o.lossPer*(1+.12*(this.chapter-1));this.survivors=Math.max(0,this.survivors-n),this.lost+=n,t&&this.emit({k:"toll",n:Math.round(n)})}queueHit(e,t,n,i,r,a){this.hits.push({at:this.t+r,by:e?e.id:0,e:t,dmg:n,aoe:i}),this.shotBudget>=1&&(this.shotBudget--,this.emit({k:"shot",s:e?e.id:0,e:t.id,c:a,d:+r.toFixed(2)}))}damage(e,t,n,i){if(e.hp<=0)return;let r=e.hp;if(e.hp-=t,e.hitT=this.t,n){let a=Math.min(r,t);n.runPts=(n.runPts||0)+a*.25,n.pts+=a*.25}if((i||this.popBudget>=1&&(e.k===Mn.boss||t>=14))&&(this.popBudget=Math.max(0,this.popBudget-1),this.emit({k:"dmg",e:e.id,d:Math.round(t),c:i?2:t>=20?1:0})),e.hp<=0){let a=yi[e.k];n&&(n.runPts+=a.pts,n.pts+=a.pts,n.kills++,n.runKills=(n.runKills||0)+1),e.k===Mn.boss?this.emit({k:"bossdown",id:e.bossId,name:e.name,by:n&&!n.bot?n.id:0}):this.killBudget>=1&&(this.killBudget--,this.emit({k:"kill",e:e.id,by:n?n.id:0,x:+e.x.toFixed(1),z:+e.z.toFixed(1),q:e.k}))}}combat(e){let t=this.t;if(this.hits.length){let c=[];for(let l of this.hits){if(l.at>t){c.push(l);continue}let h=l.by?this.byId.get(l.by):null;if(l.e.hp>0&&this.damage(l.e,l.dmg,h,!1),l.aoe)for(let f of this.enemies)f!==l.e&&f.hp>0&&f.k!==Mn.boss&&Math.abs(f.x-l.e.x)<l.aoe&&Math.abs(f.z-l.e.z)<l.aoe&&this.damage(f,l.dmg*.55,h,!1)}this.hits=c}let n=this.enemies.filter(c=>c.hp>0).sort((c,l)=>l.z-c.z),i=n.filter(c=>!yi[c.k].fly),r=0,a=this.alive,o=a>24?Math.sqrt(24/a):1;for(let c of this.people.values())c.on&&c.cls===Ht.healer&&c.downT<=0&&r++;for(let c of this.people.values()){if(!c.on)continue;if(c.downT>0){c.downT-=e*(1+Math.min(2,r*.25)),c.downT<=0&&(c.downT=0,c.hp=100,this.emit({k:"rise",id:c.id}));continue}let l=$i[c.cls];if(c.cls===Ht.warrior&&this.warriorMove(c,i,e),c.cd-=e*(t<c.hasteT?1.6:1)*(t<c.ascT?1.5:1),c.cd>0)continue;c.cd=l.every*(.9+this.rng()*.2);let h=this.rng()<.12,f=o*(c.bot?.7:1)*(c.blessed?1.2:1)*(t<c.ascT?3:1)*(h?2:1)*this.o.dmgMul;if(c.cls===Ht.warrior){let m=i.find(g=>Math.abs(g.x-c.x)<l.range+yi[g.k].r&&Math.abs(g.z-c.z)<l.range+yi[g.k].r);m?(this.damage(m,l.dmg*f,c,h&&f>2.5),m.slowT=t+.6,this.shotBudget>=1&&(this.shotBudget--,this.emit({k:"shot",s:c.id,e:m.id,c:"w",d:.1}))):c.cd=.25;continue}if(c.cls===Ht.healer){this.barrier=Math.min(100,this.barrier+.25);let m=null;for(let g of this.people.values())g.on&&g.downT<=0&&g.cls===Ht.warrior&&g.hp<80&&(!m||g.hp<m.hp)&&(m=g);if(m){m.hp=Math.min(100,m.hp+16),this.shotBudget>=1&&(this.shotBudget--,this.emit({k:"heal",s:c.id,t:m.id}));continue}for(let g of this.allies)if(g.k===0&&g.hp<90){g.hp=Math.min(100,g.hp+10);break}}let d=[];for(let m of n)if(Math.hypot(m.x-c.x,m.z-c.z)<=l.range&&(d.push(m),d.length>=6))break;if(!d.length){c.cd=.3;continue}let u=d[this.r(Math.min(d.length,c.cls===Ht.mage?6:3))];if(c.cls===Ht.archer){let m=d.find(g=>yi[g.k].fly);m&&this.rng()<.6&&(u=m)}let p=Math.hypot(u.x-c.x,u.z-c.z),x=c.cls===Ht.mage?19:c.cls===Ht.archer?36:26;this.queueHit(c,u,l.dmg*f,l.aoe,p/x,c.cls===Ht.mage?"m":c.cls===Ht.archer?"a":"h")}n.length&&this.loseSurvivors(n.length*(.004+.008*Math.min(1,this.alive/60))*e),this.alliesStep(i,n,e),this.enemiesStep(e),this.enemies=this.enemies.filter(c=>c.hp>0)}warriorMove(e,t,n){let i=e.post||{x:e.x,z:Mi-1.6},r=i.x,a=i.z,o=null,c=6.5;for(let d of t){if(d.z<i.z-7)break;let u=Math.hypot(d.x-i.x,d.z-i.z);u<c&&(c=u,o=d)}o&&(r=o.x,a=Math.min(i.z+.5,o.z+yi[o.k].r+.6));let l=r-e.x,h=a-e.z,f=Math.hypot(l,h);if(f>.08){let d=Math.min(f,4.2*n);e.x+=l/f*d,e.z+=h/f*d}}alliesStep(e,t,n){let i=this.t;for(let r of this.allies){if(r.until<i){r.gone=!0,this.emit({k:"allyout",a:r.id});continue}if(r.cd-=n,r.k===0){let a=null,o=9;for(let u of e){let p=Math.hypot(u.x-r.x,u.z-r.z);p<o&&(o=p,a=u)}let c=a?a.x:r.home??(r.home=r.x),l=a?a.z+yi[a.k].r+.9:Mi-2.6,h=c-r.x,f=l-r.z,d=Math.hypot(h,f);if(d>.1){let u=Math.min(d,3.6*n);r.x+=h/d*u,r.z+=f/d*u}if(r.cd<=0&&a&&o<2.8){r.cd=.85;let u=this.byId.get(r.by);for(let p of e)Math.abs(p.x-r.x)<2.4&&Math.abs(p.z-r.z)<2.6&&this.damage(p,(p.k===Mn.boss?30:24)*this.o.dmgMul,u,!1);this.shotBudget>=1&&(this.shotBudget--,this.emit({k:"shot",s:-r.id,e:a.id,c:"g",d:.1}))}}else{let a=i-r.a0;if(r.x=Math.sin(a*.7)*7,r.z=-15+Math.cos(a*.5)*9,r.cd<=0){r.cd=.45;let o=this.byId.get(r.by),c=r.x+Math.sin(a*.7+.6)*1.5,l=r.z+3;for(let h of t)Math.abs(h.x-c)<3.2&&Math.abs(h.z-l)<3.2&&this.damage(h,(h.k===Mn.boss?22:20)*this.o.dmgMul,o,!1)}}}this.allies.some(r=>r.gone)&&(this.allies=this.allies.filter(r=>!r.gone))}enemiesStep(e){let t=this.t,n=[];for(let i of this.people.values())i.on&&i.cls===Ht.warrior&&i.downT<=0&&n.push(i);for(let i of this.allies)i.k===0&&n.push(i);for(let i of this.enemies){if(i.hp<=0)continue;let r=yi[i.k];if(i.k===Mn.boss){this.bossStep(i,e);continue}let a=r.fly?Rr-1.6:Mi-.4-r.r,o=null;if(!r.fly){for(let c of n)if(Math.abs(c.x-i.x)<r.r+.75&&Math.abs(c.z-i.z)<r.r+.85){o=c;break}}if(o){t>i.atkT&&(i.atkT=t+1.1,o.uid?(o.hp-=r.dmg*5.5,o.hp<=0&&(o.hp=0,o.downT=9,this.emit({k:"down",id:o.id}))):o.hp=Math.max(0,o.hp-r.dmg*1.5));continue}if(i.z<a-.05){let c=i.speed*(t<i.slowT?.35:1),l=i.tx-i.x,h=Math.min(1,e*.6);i.x+=l*h*.5+Math.sin(t*2+i.id)*e*.4,i.z=Math.min(a,i.z+c*e);continue}t>i.atkT&&(i.atkT=t+1.3,this.wallHit(r.dmg,i))}}wallHit(e,t){if(this.barrier>=e*4){this.barrier-=e*4,this.popBudget>=1&&this.rng()<.3&&(this.popBudget--,this.emit({k:"block",x:+t.x.toFixed(1)}));return}this.barrier=0,this.loseSurvivors(e),this.popBudget>=1&&this.rng()<.5&&(this.popBudget--,this.emit({k:"wallhit",x:+t.x.toFixed(1),d:e}))}bossStep(e,t){let n=this.t;if(e.z<-9){e.z+=e.speed*t,e.x+=(0-e.x)*t;return}if(e.nextAtk||(e.nextAtk=n+3,e.atkN=0),n<e.nextAtk)return;if(e.atkN++,e.nextAtk=n+(e.bossId==="mastermind"?3.6:4.4),e.atkN%3===0){for(let c=0;c<5;c++){let l=this.spawn(c%2?Mn.wraith:Mn.imp);l.x=e.x+(this.rng()-.5)*6,l.z=e.z+1}this.emit({k:"bossatk",kind:"summon"});return}let i=this.barrier>=30;this.barrier=Math.max(0,this.barrier-30),this.loseSurvivors(i?3:7,!1);let r=[],a=this.defenders().filter(c=>c.downT<=0),o=i?0:Math.min(a.length-1,1+this.r(3));for(let c=0;c<o;c++){let l=a.splice(this.r(a.length),1)[0];l.downT=7,l.hp=0,r.push(l.id)}this.emit({k:"bossatk",kind:e.atkN%2?"beam":"slam",blocked:i,downed:r,x:+(e.x+(this.rng()-.5)*8).toFixed(1)})}botsVote(e){for(let t of this.people.values())!t.bot||!t.on||t.vote||this.rng()<e*.3&&this.t-this.phaseStart<this.o.voteSeconds*.8&&(t.vote=1+this.r(2),this.countVotes(),this.emit({k:"vote",id:t.id,v:t.vote}))}snapshot(){let e=[],t=this.defenders(),n=t;t.length>this.o.sendCap&&(n=t.slice().sort((f,d)=>(d.bot?0:1)-(f.bot?0:1)||d.lastAct-f.lastAct).slice(0,this.o.sendCap));let i=0,r=0;for(let f of t)!f.bot&&(f.runPts||0)>r&&(r=f.runPts,i=f.id);for(let f of n){let d=(f.bot?Rt.bot:0)|(this.t<f.hasteT?Rt.cmd:0)|(this.t<f.ascT?Rt.asc:0)|(f.blessed?Rt.bless:0)|(f.downT>0?Rt.down:0)|(f.id===i?Rt.crown:0)|(this.t-f.giftT<3?Rt.gift:0);e.push(f.id,Math.round(f.x*100)/100,Math.round(f.z*100)/100,f.cls|d<<Wu,Math.round(f.hp))}let a=[],o=this.enemies.filter(f=>f.hp>0),c=o.length>this.o.enemySend?o.slice().sort((f,d)=>(d.k===Mn.boss)-(f.k===Mn.boss)||d.z-f.z).slice(0,this.o.enemySend):o;for(let f of c)a.push(f.id,f.k,Math.round(f.x*100)/100,Math.round(f.z*100)/100,Math.max(1,Math.round(f.hp/f.max*100)));let l=[];for(let f of this.allies)l.push(f.id,f.k,Math.round(f.x*100)/100,Math.round(f.z*100)/100);let h=this.boss;return{tm:Math.round(this.t*1e3)/1e3,ph:this.phase,tl:Math.max(0,Math.round((this.phaseEnd-this.t)*10)/10),pd:Math.round((this.phaseEnd-this.phaseStart)*10)/10,ch:this.chapter,wv:this.wave,wi:(this.wave-1)%As+1,sv:Math.round(this.survivors),bar:Math.round(this.barrier*10)/10,hype:this.hype,vi:this.voteIdx,vc:this.voteCounts.slice(),cho:this.choices.slice(),left:this.spawnLeft+o.length,n:t.length,run:this.run,bo:h?{id:h.bossId,n:h.name,hp:Math.ceil(h.hp),max:Math.round(h.max)}:null,best:this.sessionBest,saves:this.saves,f:e,e:a,al:l}}board(e=8){let t=[];for(let n of this.people.values())!n.bot&&n.pts>0&&t.push({name:n.name,pts:Math.round(n.pts),kills:n.kills,cls:n.cls});return t.sort((n,i)=>i.pts-n.pts).slice(0,e)}};function jl(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Ut;c.morphTargetsRelative=o;let l=0;for(let h=0;h<s.length;++h){let f=s[h],d=0,u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,f=[];for(let d=0;d<s.length;++d){let u=s[d].index;for(let p=0;p<u.count;++p)f.push(u.getX(p)+h);h+=s[d].attributes.position.count}c.setIndex(f)}for(let h in r){let f=nm(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let u=[];for(let x=0;x<a[h].length;++x)u.push(a[h][x][d]);let p=nm(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function nm(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new it(a,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let f=c/t;for(let d=0,u=h.count;d<u;d++)for(let p=0;p<t;p++){let x=h.getComponent(d,p);o.setComponent(d+f,p,x)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function qu(s,e){if(e===du)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===_a||e===Co){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===_a)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Kl(s){let e=new Map,t=new Map,n=s.clone();return im(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function im(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)im(s.children[n],e.children[n],t)}var wa=class extends Xi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $u(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new Jl(t,lt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Jl(t,lt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new df(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ss.extractUrlBase(e);a=Ss.resolveURL(l,this.path)}else a=Ss.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ua(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===cm){try{a[lt.KHR_BINARY_GLTF]=new pf(e)}catch(f){i&&i(f);return}r=JSON.parse(a[lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new yf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let f=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(f){case lt.KHR_MATERIALS_UNLIT:a[f]=new Yu;break;case lt.KHR_DRACO_MESH_COMPRESSION:a[f]=new mf(r,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:a[f]=new gf;break;case lt.KHR_MESH_QUANTIZATION:a[f]=new bf;break;default:d.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Yv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Zt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ju=class{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ce(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],qn);let f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new yr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Vs(h),l.distance=f;break;case"spot":l=new go(h),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),es(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Yu=class{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return xn}extendParams(e,t,n){let i=[];e.color=new Ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],qn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(i)}},Zu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},$u=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Qe(r,r)}return Promise.all(i)}},Qu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},ef=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},tf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},nf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],qn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Bt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},sf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},rf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(r[0],r[1],r[2],qn),Promise.all(i)}},af=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},of=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(r[0],r[1],r[2],qn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Bt)),Promise.all(i)}},cf=class{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},lf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},hf=class{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},uf=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},ff=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Jl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,f=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,d,i.mode,i.filter).then(function(u){return u.buffer}):a.ready.then(function(){let u=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(u),h,f,d,i.mode,i.filter),u})})}else return null}},df=class{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Si.TRIANGLES&&l.mode!==Si.TRIANGLE_STRIP&&l.mode!==Si.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),f=h.isGroup?h.children:[h],d=l[0].count,u=[];for(let p of f){let x=new qe,m=new B,g=new In,v=new B(1,1,1),y=new _n(p.geometry,p.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,S),c.SCALE&&v.fromBufferAttribute(c.SCALE,S),y.setMatrixAt(S,x.compose(m,g,v));let b=null;for(let S in c)if(S==="_COLOR_0"){let M=c[S];y.instanceColor=new ms(M.array,M.itemSize,M.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(b===null){let _=y.geometry;b=new Ut,b.name=_.name;for(let w in _.attributes)b.setAttribute(w,_.attributes[w]);for(let w in _.morphAttributes)b.morphAttributes[w]=_.morphAttributes[w];_.index!==null&&b.setIndex(_.index),b.morphTargetsRelative=_.morphTargetsRelative;for(let w of _.groups)b.addGroup(w.start,w.count,w.materialIndex);_.boundingBox!==null&&(b.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(b.boundingSphere=_.boundingSphere.clone()),b.drawRange.start=_.drawRange.start,b.drawRange.count=_.drawRange.count,b.userData=Object.assign({},_.userData),y.geometry=b}let M=c[S];b.setAttribute(S,new ms(M.array,M.itemSize,M.normalized))}Gt.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),u.push(y)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}},cm="glTF",Fo=12,sm={JSON:1313821514,BIN:5130562},pf=class{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Fo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Fo,r=new DataView(e,Fo),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===sm.JSON){let l=new Uint8Array(e,Fo+a,o);this.content=n.decode(l)}else if(c===sm.BIN){let l=Fo+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},mf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let f=_f[h]||h.toLowerCase();o[f]=a[h]}for(let h in e.attributes){let f=_f[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],u=Sa[d.componentType];l[f]=u.name,c[f]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(f,d){i.decodeDracoFile(h,function(u){for(let p in u.attributes){let x=u.attributes[p],m=c[p];m!==void 0&&(x.normalized=m)}f(u)},o,l,qn,d)})})}},gf=class{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},bf=class{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}},Yl=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,f=(n-t)/h,d=f*f,u=d*f,p=e*l,x=p-l,m=-2*u+3*d,g=u-d,v=1-m,y=g-d+f;for(let b=0;b!==o;b++){let S=a[x+b+o],M=a[x+b+c]*h,_=a[p+b+o],w=a[p+b]*h;r[b]=v*S+y*M+m*_+g*w}return r}},Zv=new In,xf=class extends Yl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Zv.fromArray(r).normalize().toArray(r),r}},Si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Sa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rm={9728:Yt,9729:mn,9984:Yc,9985:ga,9986:Tr,9987:_i},am={33071:mi,33648:ea,10497:Us},Xu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_f={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$v={CUBICSPLINE:void 0,LINEAR:ur,STEP:hr},ju={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Qv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new xr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ji})),s.DefaultMaterial}function Cr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function es(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ey(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let f=e[l];if(n){let d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;a.push(d)}if(i){let d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],f=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function ty(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ny(s){let e,t=s.extensions&&s.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ku(t.attributes):e=s.indices+":"+Ku(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ku(s.targets[n]);return e}function Ku(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function vf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function iy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var sy=new qe,yf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Yv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?(this.textureLoader=new fo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new xo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ua(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Cr(r,o,i),es(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Ss.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Xu[i.type],o=Sa[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new it(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Xu[i.type],l=Sa[i.componentType],h=l.BYTES_PER_ELEMENT,f=h*c,d=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,x,m;if(u&&u!==f){let g=Math.floor(d/u),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,y=t.cache.get(v);y||(x=new l(o,g*u,i.count*u/h),y=new aa(x,u/h),t.cache.add(v,y)),m=new oa(y,c,d%u/h,p)}else o===null?x=new l(i.count*c):x=new l(o,d,i.count*c),m=new it(x,c,p);if(i.sparse!==void 0){let g=Xu.SCALAR,v=Sa[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,S=new v(a[1],y,i.sparse.count*g),M=new l(a[2],b,i.sparse.count*c);o!==null&&(m=new it(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,w=S.length;_<w;_++){let D=S[_];if(m.setX(D,M[_*c]),c>=2&&m.setY(D,M[_*c+1]),c>=3&&m.setZ(D,M[_*c+2]),c>=4&&m.setW(D,M[_*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=rm[d.magFilter]||mn,h.minFilter=rm[d.minFilter]||_i,h.wrapS=am[d.wrapS]||Us,h.wrapT=am[d.wrapT]||Us,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Yt&&h.minFilter!==mn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(u,p){t.parse(d,u,p)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let u=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(u,p){let x=u;t.isImageBitmapLoader===!0&&(x=function(m){let g=new gn(m);g.needsUpdate=!0,u(g)}),t.load(Ss.resolveURL(d,r.path),x,void 0,p)})})}let f=h.then(function(d){return l===!0&&o.revokeObjectURL(c),es(d,a),d.userData.mimeType=a.mimeType||iy(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[lt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ha,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new la,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return xr}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[lt.KHR_MATERIALS_UNLIT]){let f=i[lt.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),l.push(f.extendParams(o,r,t))}else{let f=r.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){let d=f.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],qn),o.opacity=d[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",f.baseColorTexture,Bt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=hn);let h=r.alphaMode||ju.OPAQUE;if(h===ju.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ju.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==xn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Qe(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;o.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&a!==xn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==xn){let f=r.emissiveFactor;o.emissive=new Ce().setRGB(f[0],f[1],f[2],qn)}return r.emissiveTexture!==void 0&&a!==xn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(l).then(function(){let f=new a(o);return r.name&&(f.name=r.name),es(f,r),t.associations.set(f,{materials:e}),r.extensions&&Cr(i,f,r),f})}createUniqueName(e){let t=kt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return om(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=ny(l),f=i[h];if(f)a.push(f.promise);else{let d;l.extensions&&l.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=om(new Ut,l,t),l.mode===Si.TRIANGLE_STRIP?d=d.then(u=>qu(u,Co)):l.mode===Si.TRIANGLE_FAN&&(d=d.then(u=>qu(u,_a))),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Qv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let u=0,p=h.length;u<p;u++){let x=h[u],m=a[u],g,v=l[u];if(m.mode===Si.TRIANGLES||m.mode===Si.TRIANGLE_STRIP||m.mode===Si.TRIANGLE_FAN||m.mode===void 0){let y=r.isSkinnedMesh===!0,b=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");y&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=y&&b?new pr(x,v):new ut(x,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Si.LINES)g=new $a(x,v);else if(m.mode===Si.LINE_STRIP)g=new gr(x,v);else if(m.mode===Si.LINE_LOOP)g=new Qa(x,v);else if(m.mode===Si.POINTS)g=new gs(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&ty(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),es(g,r),m.extensions&&Cr(i,g,m),t.assignFinalMaterial(g),f.push(g)}for(let u=0,p=f.length;u<p;u++)t.associations.set(f[u],{meshes:e,primitives:u});if(f.length===1)return r.extensions&&Cr(i,f[0],r),f[0];let d=new zt;r.extensions&&Cr(i,d,r),t.associations.set(d,{meshes:e});for(let u=0,p=f.length;u<p;u++)d.add(f[u]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new pn(kl.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new vr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),es(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let f=a[l];if(f){o.push(f);let d=new qe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new mr(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let f=0,d=i.channels.length;f<d;f++){let u=i.channels[f],p=i.samplers[u.sampler],x=u.target,m=x.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",v)),l.push(p),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(f){let d=f[0],u=f[1],p=f[2],x=f[3],m=f[4],g=[];for(let y=0,b=d.length;y<b;y++){let S=d[y],M=u[y],_=p[y],w=x[y],D=m[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let I=n._createAnimationTracks(S,M,_,w,D);if(I)for(let U=0;U<I.length;U++)g.push(I[U])}let v=new _r(r,void 0,g);return es(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],f=l[1],d=l[2];d!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(d,sy)});for(let u=0,p=f.length;u<p;u++)h.add(f[u]);if(h.userData.pivot!==void 0&&f.length>0){let u=h.userData.pivot,p=f[0];h.pivot=new B().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new ca:l.length>1?h=new zt:l.length===1?h=l[0]:h=new Gt,h!==l[0])for(let f=0,d=l.length;f<d;f++)h.add(l[f]);if(r.name&&(h.userData.name=r.name,h.name=a),es(h,r),r.extensions&&Cr(n,h,r),r.matrix!==void 0){let f=new qe;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let f=i.associations.get(h);i.associations.set(h,{...f})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new zt;n.name&&(r.name=i.createUniqueName(n.name)),es(r,n),n.extensions&&Cr(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,f=c.length;h<f;h++){let d=c[h];d.parent!==null?r.add(Kl(d)):r.add(d)}let l=h=>{let f=new Map;for(let[d,u]of i.associations)(d instanceof zn||d instanceof gn)&&f.set(d,u);return h.traverse(d=>{let u=i.associations.get(d);u!=null&&f.set(d,u)}),f};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}Xs[r.path]===Xs.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Xs[r.path]){case Xs.weights:h=vs;break;case Xs.rotation:h=ys;break;case Xs.translation:case Xs.scale:h=Gs;break;default:n.itemSize===1?h=vs:h=Gs;break}let f=i.interpolation!==void 0?$v[i.interpolation]:ur,d=this._getArrayFromAccessor(n);for(let u=0,p=c.length;u<p;u++){let x=new h(c[u]+"."+Xs[r.path],t.array,d,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=vf(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ys?xf:Yl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ry(s,e,t){let n=e.attributes,i=new ri;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new B(c[0],c[1],c[2]),new B(l[0],l[1],l[2])),o.normalized){let h=vf(Sa[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new B,c=new B;for(let l=0,h=r.length;l<h;l++){let f=r[l];if(f.POSITION!==void 0){let d=t.json.accessors[f.POSITION],u=d.min,p=d.max;if(u!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),d.normalized){let x=vf(Sa[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new bn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function om(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=_f[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return ct.workingColorSpace!==qn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),es(s,e),ry(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ey(s,e.targets,t):s})}var Zl=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(g){r=g.instance,r.exports.__wasm_call_ctors()});function o(g){for(var v=new Uint8Array(g.length),y=0;y<g.length;++y){var b=g.charCodeAt(y);v[y]=b>96?b-97:b>64?b-39:b+4}for(var S=0,y=0;y<g.length;++y)v[S++]=v[y]<60?n[v[y]]:(v[y]-60)*64+v[++y];return v.buffer.slice(0,S)}function c(g,v,y,b,S,M,_){var w=g.exports.sbrk,D=b+3&-4,I=w(D*S),U=w(M.length),L=new Uint8Array(g.exports.memory.buffer);L.set(M,U);var H=v(I,b,S,U,M.length);if(H==0&&_&&_(I,D,S),y.set(L.subarray(I,I+b*S)),w(I-w(0)),H!=0)throw new Error("Malformed buffer data: "+H)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},f=[],d=0;function u(g){var v={object:new Worker(g),pending:0,requests:{}};return v.object.onmessage=function(y){var b=y.data;v.pending-=b.count,v.requests[b.id][b.action](b.value),delete v.requests[b.id]},v}function p(g){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),y=new Blob([v],{type:"text/javascript"}),b=URL.createObjectURL(y),S=f.length;S<g;++S)f[S]=u(b);for(var S=g;S<f.length;++S)f[S].object.postMessage({});f.length=g,URL.revokeObjectURL(b)}function x(g,v,y,b,S){for(var M=f[0],_=1;_<f.length;++_)f[_].pending<M.pending&&(M=f[_]);return new Promise(function(w,D){var I=new Uint8Array(y),U=++d;M.pending+=g,M.requests[U]={resolve:w,reject:D},M.object.postMessage({id:U,count:g,size:v,source:I,mode:b,filter:S},[I.buffer])})}function m(g){var v=g.data;self.ready.then(function(y){if(!v.id)return self.close();try{var b=new Uint8Array(v.count*v.size);c(y,y.exports[v.mode],b,v.count,v.size,v.source,y.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:b},[b.buffer])}catch(S){self.postMessage({id:v.id,count:v.count,action:"reject",value:S})}})}return{ready:a,supported:!0,useWorkers:function(g){p(g)},decodeVertexBuffer:function(g,v,y,b,S){c(r,r.exports.meshopt_decodeVertexBuffer,g,v,y,b,r.exports[l[S]])},decodeIndexBuffer:function(g,v,y,b){c(r,r.exports.meshopt_decodeIndexBuffer,g,v,y,b)},decodeIndexSequence:function(g,v,y,b){c(r,r.exports.meshopt_decodeIndexSequence,g,v,y,b)},decodeGltfBuffer:function(g,v,y,b,S,M){c(r,r.exports[h[S]],g,v,y,b,r.exports[l[M]])},decodeGltfBufferAsync:function(g,v,y,b,S){return f.length>0?x(g,v,y,h[b],l[S]):a.then(function(){var M=new Uint8Array(g*v);return c(r,r.exports[h[b]],M,g,v,y,r.exports[l[S]]),M})}}})();var ay=[it.prototype.getX,it.prototype.getY,it.prototype.getZ,it.prototype.getW],lm={idle:["Idle",1,!0],combat:["Idle_Combat",1,!0],run:["Running_A",1,!0],walk:["Walking_A",1,!0],attack:["1H_Melee_Attack_Chop",1.25,!1],slash:["1H_Melee_Attack_Slice_Horizontal",1.25,!1],spin:["2H_Melee_Attack_Spin",1.3,!1],shoot:["1H_Ranged_Shoot",1.2,!1],cast:["Spellcast_Shoot",1.2,!1],summon:["Spellcast_Summon",1,!1],block:["Block",1.2,!1],hit:["Hit_A",1.3,!1],die:["Death_A",1,!1],dead:["Death_A_Pose",1,!0],cheer:["Cheer",1,!0],dash:["Dodge_Forward",1.3,!1],jump:["Jump_Full_Short",1,!1],rise:["Lie_StandUp",1.4,!1],taunt:["Taunt",1,!1],spawn:["Spawn_Ground_Skeletons",1.2,!1],use:["Interact",1.2,!1]},oy={Knight:["1H_Sword","Badge_Shield","Knight_Helmet","Knight_Cape"],Barbarian:["1H_Axe","Barbarian_Round_Shield","Barbarian_Hat","Barbarian_Cape"],Mage:["2H_Staff","Mage_Hat","Mage_Cape"],Rogue:["1H_Crossbow","Knife_Offhand","Rogue_Cape"],Rogue_Hooded:["Knife","Knife_Offhand","Rogue_Cape"],Skeleton_Minion:[],Skeleton_Warrior:["Skeleton_Warrior_Helmet"],Skeleton_Rogue:["Skeleton_Rogue_Hood","Skeleton_Rogue_Cape"],Skeleton_Mage:["Skeleton_Mage_Hat"]},cy=new wa().setMeshoptDecoder(Zl),hm=s=>new Promise((e,t)=>cy.load(s,e,void 0,t));function ly(s,e){if(s&&/glow/i.test(s.name||""))return new xn({color:8057087,fog:!0});let t=e||s.map;return t&&(t.colorSpace=Bt,t.anisotropy=2),new zs({map:t||null,color:16777215})}function hy(s,e){let t=s.scene;t.updateMatrixWorld(!0);let n=new Set(oy[e]||[]),i=[],r=[];if(t.traverse(b=>{b.isSkinnedMesh?i.push(b):b.isMesh&&r.push(b)}),!i.length)throw new Error("no skinned mesh in "+e);let a=i[0],o=a.skeleton,c=o.bones,l=new Map(c.map((b,S)=>[b,S])),h=a.bindMatrixInverse.clone(),f=[],d=b=>{let S=f.findIndex(M=>M.src===b);return S<0&&(f.push({src:b,mat:ly(b)}),S=f.length-1),S},u=[],p=b=>{b=b.index?b.toNonIndexed():b.clone();for(let S of Object.keys(b.attributes))["position","normal","uv","skinIndex","skinWeight"].includes(S)||b.deleteAttribute(S);for(let S of Object.keys(b.attributes)){let M=b.attributes[S],_=M.itemSize,w=S==="skinIndex"?new Uint16Array(M.count*_):new Float32Array(M.count*_);for(let D=0;D<M.count;D++)for(let I=0;I<_;I++)w[D*_+I]=S==="skinIndex"?M.getComponent(D,I):ay[I].call(M,D);b.setAttribute(S,new it(w,_))}return b.attributes.normal||b.computeVertexNormals(),b.attributes.uv||b.setAttribute("uv",new it(new Float32Array(b.attributes.position.count*2),2)),b};for(let b of i){let S=p(b.geometry);if(b!==a){let M=b.skeleton.bones,_=M.findIndex(I=>l.has(I)),w=l.get(M[_]),D=new qe().copy(h).multiply(new qe().copy(o.boneInverses[w]).invert()).multiply(b.skeleton.boneInverses[_]).multiply(b.bindMatrix);S.applyMatrix4(D)}if(b.skeleton!==o){let M=b.skeleton.bones.map(w=>l.get(w)??0),_=S.attributes.skinIndex;for(let w=0;w<_.count;w++)for(let D=0;D<4;D++)_.setComponent(w,D,M[_.getComponent(w,D)])}u.push({g:S,m:d(b.material)})}for(let b of r){if(!n.has(b.name)&&!n.has(b.parent?.name))continue;let S=b.parent;for(;S&&!S.isBone;)S=S.parent;if(!S)continue;let M=l.get(S);if(M===void 0)continue;let _=new qe;{let H=b;for(_.copy(b.matrix),H=b.parent;H&&H!==S;)_.premultiply(H.matrix),H=H.parent}let w=new qe().copy(h).multiply(new qe().copy(o.boneInverses[M]).invert()).multiply(_),D=p(b.geometry);D.applyMatrix4(w);let I=D.attributes.position.count,U=new Uint16Array(I*4),L=new Float32Array(I*4);for(let H=0;H<I;H++)U[H*4]=M,L[H*4]=1;D.setAttribute("skinIndex",new it(U,4)),D.setAttribute("skinWeight",new it(L,4)),u.push({g:D,m:d(b.material)})}u.sort((b,S)=>b.m-S.m);let x=jl(u.map(b=>b.g),f.length>1);if(f.length>1){let b=0;x.clearGroups();for(let S=0;S<f.length;S++){let M=0;for(let _ of u)_.m===S&&(M+=_.g.attributes.position.count);M&&x.addGroup(b,M,S),b+=M}}for(let b of u)b.g.dispose();x.computeBoundingBox(),x.boundingSphere=new bn(new B(0,1.1,0),1.9);let m=new zt;m.name=e;let g=(()=>{let b=c[0];for(;b.parent&&b.parent.isBone;)b=b.parent;return b})(),v=[];g.traverse(b=>{b.isMesh&&v.push(b)});for(let b of v)b.parent.remove(b),b.geometry.dispose();m.add(g);let y=new pr(x,f.length>1?f.map(b=>b.mat):f[0].mat);return y.frustumCulled=!0,m.add(y),m.updateMatrixWorld(!0),y.bind(new mr(c,o.boneInverses.map(b=>b.clone())),a.bindMatrix.clone()),{tpl:m,geo:x,mats:f.map(b=>b.mat),height:2.1}}async function um({base:s="/models",names:e=[],onProgress:t}={}){let n={templates:new Map,clips:new Map,variants:new Map,pools:new Map,disposables:[]},[i,...r]=await Promise.all([hm(`${s}/anims.glb`),...e.map(a=>hm(`${s}/chars/${a}.glb`))]);for(let a of i.animations)n.clips.set(a.name,a);return e.forEach((a,o)=>{let c=hy(r[o],a);n.templates.set(a,c),n.disposables.push(c.geo,...c.mats);for(let l of c.mats)l.map&&n.disposables.push(l.map);t?.(a)}),n.material=(a,o=null,c=.32)=>{let l=n.templates.get(a);if(o===null)return l.mats.length>1?l.mats:l.mats[0];let h=a+":"+o+":"+c,f=n.variants.get(h);if(!f){if(typeof o=="string"&&o.startsWith("ghost")){let d=o==="ghost-boss"?13215999:12113151;f=l.mats.map(u=>{let p=new xn({map:u.map||null,color:d,transparent:!0,opacity:.55,depthWrite:!1,blending:jn,fog:!0});return n.disposables.push(p),p})}else{let d=new Ce(o),u=new Ce(1,1,1).lerp(d,c);f=l.mats.map(p=>{if(p.isMeshBasicMaterial)return p;let x=p.clone();return x.color.copy(u),n.disposables.push(x),x})}if(f=f.length>1?f:f[0],n.variants.set(h,f),n.variants.size>160){let d=n.variants.keys().next().value;n.variants.delete(d)}}return f},n.actor=(a,o=null)=>{let c=n.pools.get(a)||[];n.pools.set(a,c);let l=c.pop();if(!l){let h=n.templates.get(a),f=Kl(h.tpl),d=null;f.traverse(p=>{p.isSkinnedMesh&&(d=p)});let u=new _o(f);l={name:a,obj:f,mesh:d,mixer:u,actions:new Map,state:"",base:"idle",until:0,tint:void 0,acc:0,flashT:-9,hand:null},f.traverse(p=>{p.isBone&&/handslot.?l/i.test(p.name)&&(l.hand=p)}),l.play=(p,x,{fade:m=.15,speed:g=1}={})=>uy(n,l,p,x,m,g)}return l.tint!==o&&(l.mesh.material=n.material(a,o),l.tint=o),l.obj.visible=!0,l.state="",l.base="idle",l.until=0,l.mixer.stopAllAction(),l.play("idle",0,{fade:0}),l},n.bake=(a,o,c=4,{from:l=0,to:h=1}={})=>{let f=`${a}|${o}|${c}|${l}|${h}`;if(n.baked=n.baked||new Map,n.baked.has(f))return n.baked.get(f);let d=n.actor(a),u=Mf(n,d,o);d.mixer.stopAllAction(),u.reset(),u.setLoop(Ro,1/0),u.play();let p=u.getClip().duration,x=d.mesh.geometry,m=x.attributes.position.count,g=new B,v=[];for(let y=0;y<c;y++){d.mixer.setTime(p*(l+(h-l)*(y/c))),d.obj.updateMatrixWorld(!0),d.mesh.skeleton.update();let b=new Float32Array(m*3);for(let M=0;M<m;M++)d.mesh.getVertexPosition(M,g),g.applyMatrix4(d.mesh.matrix),b[M*3]=g.x,b[M*3+1]=g.y,b[M*3+2]=g.z;let S=new Ut;S.setAttribute("position",new it(b,3)),S.setAttribute("uv",x.attributes.uv),x.index&&S.setIndex(x.index);for(let M of x.groups)S.addGroup(M.start,M.count,M.materialIndex);S.computeVertexNormals(),S.boundingSphere=new bn(new B(0,1,0),2.2),n.disposables.push(S),v.push(S)}return u.stop(),n.release(d),n.baked.set(f,v),v},n.release=a=>{a.obj.visible=!1,a.obj.parent?.remove(a.obj),a.mixer.stopAllAction(),(n.pools.get(a.name)||[]).push(a)},n.dispose=()=>{for(let a of n.disposables)try{a.dispose()}catch{}n.pools.clear(),n.variants.clear()},n}function Mf(s,e,t){let n=e.actions.get(t);if(!n){let[i,r,a]=lm[t]||lm.idle,o=s.clips.get(i)||s.clips.get("Idle");n=e.mixer.clipAction(o),n.timeScaleBase=r,n.loopMode=a,a?n.setLoop(Ro,1/0):(n.setLoop(Dl,1),n.clampWhenFinished=!0),e.actions.set(t,n)}return n}function uy(s,e,t,n,i,r){let a=Mf(s,e,t);if(a.loopMode){if(e.base=t,n<e.until||e.state===t)return}else e.until=n+a.getClip().duration/(a.timeScaleBase*r)*.92;let o=e.actions.get(e.state);a.reset(),a.timeScale=a.timeScaleBase*r,a.enabled=!0,a.setEffectiveWeight(1),o&&o!==a&&i>0?a.crossFadeFrom(o,i,!1):o&&o!==a&&o.stop(),a.play(),e.state=t}function $l(s,e,t,n){if(e.state!==e.base&&n>=e.until&&e.base){let i=Mf(s,e,e.base),r=e.actions.get(e.state);i.reset(),i.timeScale=i.timeScaleBase,i.enabled=!0,i.setEffectiveWeight(1),r&&i.crossFadeFrom(r,.18,!1),i.play(),e.state=e.base}e.mixer.update(t)}var fy=[it.prototype.getX,it.prototype.getY,it.prototype.getZ,it.prototype.getW],dy=new wa().setMeshoptDecoder(Zl);async function fm(s){let e=await new Promise((d,u)=>dy.load(s,d,void 0,u)),t=e.scene;t.updateMatrixWorld(!0);let n=new Map,i=new Map,r=new Set,a=[],o=null;for(let d of t.children){let u=[],p=new qe().copy(d.parent.matrixWorld).invert();if(d.traverse(m=>{if(!m.isMesh)return;m.material.map&&(o||(o=m.material.map),i.set(d.name,m.material.map),r.add(m.material.map));let g=m.geometry.index?m.geometry.toNonIndexed():m.geometry.clone();for(let v of Object.keys(g.attributes))["position","normal","uv"].includes(v)||g.deleteAttribute(v);for(let v of["position","normal","uv"]){let y=g.attributes[v];if(!y||y.array instanceof Float32Array&&!y.normalized)continue;let b=new Float32Array(y.count*y.itemSize);for(let S=0;S<y.count;S++)for(let M=0;M<y.itemSize;M++)b[S*y.itemSize+M]=fy[M].call(y,S);g.setAttribute(v,new it(b,y.itemSize))}g.attributes.normal||g.computeVertexNormals(),g.attributes.uv||g.setAttribute("uv",new it(new Float32Array(g.attributes.position.count*2),2)),g.applyMatrix4(new qe().multiplyMatrices(p,m.matrixWorld)),u.push(g)}),!u.length)continue;let x=u.length>1?jl(u):u[0];u.length>1&&u.forEach(m=>m.dispose()),x.computeBoundingSphere(),n.set(d.name,x),a.push(x)}let c=new Map;for(let d of r){d.colorSpace=Bt,d.anisotropy=4,a.push(d);let u=new zs({map:d});c.set(d,u),a.push(u)}e.scene.traverse(d=>{d.isMesh&&d.geometry.dispose()});let l=c.get(o)||new zs;o||a.push(l);let h=d=>c.get(i.get(d))||l;return{geos:n,mat:l,matOf:h,has:d=>n.has(d),instanced(d,u,{material:p=h(d)}={}){let x=n.get(d);if(!x||!u.length)return null;let m=new _n(x,p,u.length),g=new Gt,v=0;return u.forEach((y,b)=>{g.position.set(y.x,y.y||0,y.z),g.rotation.set(y.rx||0,y.ry||0,y.rz||0),g.scale.set((y.s||1)*(y.sx||1),(y.s||1)*(y.sy||1),(y.s||1)*(y.sz||1)),g.updateMatrix(),m.setMatrixAt(b,g.matrix),v=Math.max(v,Math.hypot(y.x,y.z)+(y.s||1)*3)}),m.instanceMatrix.needsUpdate=!0,m.geometry.boundingSphere,m.boundingSphere=new bn(new B,v),m.frustumCulled=!1,m},dispose(){for(let d of a)try{d.dispose()}catch{}}}}var py=["Mage","Barbarian","Rogue","Knight"],my=["cast","slash","shoot","summon"],dm=.74,ki=Math.PI*2,pm=[16767416,15843471,14262374,11037509,8014380,16769999],Ql=$i.map(s=>s.color),Ta={m:[12611839,16742970],a:[8384767,16777215],h:[8257448,16777215],v:[16765773,16739029],g:[16769152,16777215],w:[16777215,16747114]},Vt=Mi,js=6.2,Aa=7.5;function mm(s,e={}){let t=new zl({canvas:s,antialias:!!e.aa,alpha:!1,depth:!0,stencil:!1,powerPreference:"default",preserveDrawingBuffer:!!e.preserve,failIfMajorPerformanceCaveat:!1});if(!t.getContext())throw new Error("no webgl");t.outputColorSpace=Bt,t.toneMapping=yo,t.toneMappingExposure=1.15,t.shadowMap.enabled=!1;let n=new Ja,i=new Ce(1838896);n.background=i.clone(),n.fog=new Ka(1838896,34,95);let r=new pn(50,9/16,.5,260),a=[],o=E=>(a.push(E),E),c=new po(9412863,2757670,1.05);n.add(c);let l=new bo(6965898,.35);n.add(l);let h=new yr(12109055,.9);h.position.set(-20,30,10),n.add(h);let f=new Vs(11550975,60,60,1.4);f.position.set(0,6,nn+4),n.add(f);let d=null,u=null,p=!1,x=null,m=Promise.all([fm(e.envUrl||"/models/env-siege.glb"),um({names:["Mage","Barbarian","Rogue","Knight","Rogue_Hooded","Skeleton_Minion","Skeleton_Warrior","Skeleton_Mage"]})]).then(([E,C])=>{if(p){E.dispose(),C.dispose();return}u=E,d=C,En()}).catch(E=>{throw x=E,E});m.catch(()=>{});let g=new Vs(16752720,14,22,1.6);g.position.set(0,5,2),n.add(g);let v=o(new Os(new Uint8Array([70,160,255]),3,1,xa));v.minFilter=v.magFilter=Yt,v.needsUpdate=!0;let y=(E,C={})=>o(new lo({color:E,gradientMap:v,...C})),b=(E,C={})=>o(new xn({color:E,...C})),S=11,M=()=>(S=S*16807%2147483647,(S-1)/2147483646);function _(E,C,R,{repeat:V=null}={}){let me=document.createElement("canvas");me.width=E,me.height=C,R(me.getContext("2d"),E,C);let ce=o(new to(me));return ce.colorSpace=Bt,ce.anisotropy=2,V&&(ce.wrapS=ce.wrapT=1e3,ce.repeat.set(V[0],V[1])),ce}let w=_(256,256,(E,C,R)=>{E.fillStyle="#4c4658",E.fillRect(0,0,C,R);for(let V=0;V<6;V++)for(let me=-1;me<4;me++){let ce=R/6,de=C/3,re=(me+V%2*.5)*de,j=V*ce;E.fillStyle=`hsl(${255+M()*25}, ${7+M()*8}%, ${30+M()*16}%)`,E.fillRect(re+3,j+3,de-6,ce-6),E.fillStyle="rgba(255,255,255,0.06)",E.fillRect(re+3,j+3,de-6,5)}E.strokeStyle="rgba(10,0,20,0.5)",E.lineWidth=2;for(let V=0;V<5;V++){E.beginPath();let me=M()*C,ce=M()*R;E.moveTo(me,ce);for(let de=0;de<4;de++)me+=(M()-.5)*50,ce+=M()*40,E.lineTo(me,ce);E.stroke()}},{repeat:[6,1]}),D=_(256,256,(E,C,R)=>{E.fillStyle="#2a2232",E.fillRect(0,0,C,R);for(let V=0;V<900;V++)E.fillStyle=`rgba(${M()<.5?"255,255,255":"0,0,0"},${.03+M()*.06})`,E.fillRect(M()*C,M()*R,2+M()*6,2+M()*6);E.strokeStyle="rgba(180,60,255,0.28)",E.lineWidth=2.2;for(let V=0;V<7;V++){E.beginPath();let me=M()*C,ce=M()*R;E.moveTo(me,ce);for(let de=0;de<6;de++)me+=(M()-.5)*60,ce+=(M()-.5)*60,E.lineTo(me,ce);E.stroke()}},{repeat:[7,9]}),I=_(128,256,(E,C,R)=>{E.fillStyle="#3a3448",E.fillRect(0,0,C,R);for(let V=10;V<R-10;V+=26)for(let me=10;me<C-10;me+=28){let ce=M();E.fillStyle=ce<.12?"#ffb04a":ce<.2?"#b060ff":"#14101c",E.fillRect(me,V,14,16)}E.fillStyle="rgba(0,0,0,0.25)",E.fillRect(0,0,C,6)}),U=_(64,64,(E,C)=>{let R=E.createRadialGradient(C/2,C/2,0,C/2,C/2,C/2);R.addColorStop(0,"rgba(0,0,0,0.55)"),R.addColorStop(1,"rgba(0,0,0,0)"),E.fillStyle=R,E.fillRect(0,0,C,C)}),L={box:o(new xs(1,1,1)),sph:o(new oi(1,14,10)),sphLo:o(new oi(1,8,6)),cone:o(new Ii(1,1,7)),cyl:o(new xi(1,1,1,10)),plane:o(new ai(1,1)),oct:o(new oo(1,0)),ico:o(new ao(1,0))},H=new ut(o(new oi(200,24,14)),o(new Nn({side:Fn,depthWrite:!1,fog:!1,uniforms:{end:{value:0},dawn:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform float end; uniform float dawn;
      void main(){ float h = clamp(vP.y, -0.2, 1.0); float rift = pow(max(0.0, dot(normalize(vec3(vP.x, vP.y*1.6, vP.z)), vec3(0.0, 0.12, -1.0))), 6.0);
        vec3 top = vec3(0.03, 0.02, 0.09), hor = vec3(0.22, 0.07, 0.24);
        vec3 c = mix(hor, top, smoothstep(-0.05, 0.55, h)) + vec3(0.45, 0.1, 0.5) * rift * 0.4;
        vec3 dc = mix(vec3(1.0, 0.62, 0.38), vec3(0.35, 0.55, 0.95), smoothstep(-0.05, 0.6, h));
        c = mix(c, dc, dawn); c = mix(c, vec3(0.35, 0.02, 0.04) * (0.6 + rift), end);
        gl_FragColor = vec4(c, 1.0); }`})));H.renderOrder=-10,n.add(H);let N=new ut(L.plane,b(16051455,{fog:!1,transparent:!0,map:_(128,128,(E,C)=>{let R=E.createRadialGradient(C/2,C/2,C*.2,C/2,C/2,C/2);R.addColorStop(0,"#fff8f0"),R.addColorStop(.42,"#efe2ff"),R.addColorStop(.47,"rgba(200,170,255,0.5)"),R.addColorStop(1,"rgba(120,80,200,0)"),E.fillStyle=R,E.fillRect(0,0,C,C),E.fillStyle="rgba(160,140,200,0.35)";for(let[V,me,ce]of[[52,50,9],[74,70,6],[60,78,5]])E.beginPath(),E.arc(V,me,ce,0,ki),E.fill()})}));N.position.set(-34,46,-120),N.scale.set(30,30,1),N.lookAt(0,8,20),n.add(N);let Z=o(new Ut);{let C=new Float32Array(780);for(let R=0;R<260;R++){let V=M()*ki,me=.12+M()*1.3;C.set([Math.cos(V)*Math.cos(me)*180,Math.sin(me)*180,Math.sin(V)*Math.cos(me)*180-20],R*3)}Z.setAttribute("position",new it(C,3))}let te=new gs(Z,o(new Nn({transparent:!0,depthWrite:!1,fog:!1,uniforms:{time:{value:0},op:{value:1}},vertexShader:"uniform float time; varying float vA; void main(){ vA = 0.45 + 0.55 * sin(time * 2.0 + position.x * 0.7 + position.z); gl_PointSize = 2.2; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform float op; varying float vA; void main(){ gl_FragColor = vec4(vec3(1.0, 0.95, 1.0) * vA * op, 1.0); }"})));te.renderOrder=-9,n.add(te);let z=new ut(o(new ai(140,160).rotateX(-Math.PI/2)),y(9075864,{map:D}));z.position.set(0,0,-30),n.add(z);let le=new ut(o(new ai(9,44).rotateX(-Math.PI/2)),y(5917798,{transparent:!0,opacity:.5}));le.position.set(0,.02,-18),n.add(le);let J=46,Q=new _n(L.box,y(16777215,{map:I}),J);Q.frustumCulled=!1;let he=new _n(L.cone,y(2761268),J);he.frustumCulled=!1;let Ue=new _n(L.ico,y(5918820),70);Ue.frustumCulled=!1;let Ye=new qe,$=new B,Me=new In,De=new bi,Be=new B,Re=new Ce,je=(E,C,R,V,me,ce,de,re,j=0,Ge=0,bt=0,Jt=null)=>{E.setMatrixAt(C,Ye.compose($.set(R,V,me),Me.setFromEuler(De.set(j,Ge,bt)),Be.set(ce,de,re))),Jt!==null&&E.setColorAt(C,Re.setHex(Jt))};{let E=0,C=0;for(let R of[-1,1])for(let V=0;V<J/2;V++){let me=V%3,ce=-48+Math.floor(V/3)*6.6+M()*2,de=R*(10.5+me*5.5+M()*2.5),re=3+M()*2.6,j=3+M()*2.6,Ge=3.5+M()*(me===0?7:13),bt=M()<.35,Jt=bt?(M()-.5)*.18:0;if(je(Q,E,de,Ge/2,ce,re,Ge,j,Jt*.5,M()*.3,Jt,M()<.5?10128560:8287380),!bt&&M()<.45?je(he,E,de,Ge+1,ce,re*.75,2,j*.75,0,Math.PI/4,0):je(he,E,0,-50,0,.01,.01,.01),E++,C<70&&bt)for(let rn=0;rn<3&&C<70;rn++)je(Ue,C++,de-R*(re*.6+M()*2),.3,ce+(M()-.5)*4,.5+M()*.9,.4+M()*.7,.5+M()*.9,M(),M()*3,M())}for(;C<70;){let R=M()<.5?-1:1;je(Ue,C++,R*(6.5+M()*3),.25,-40+M()*38,.3+M()*.7,.3+M()*.5,.3+M()*.7,M(),M()*3,M())}Q.count=E,he.count=E}n.add(Q,he,Ue);let Dt=new zt;n.add(Dt);let Xe=y(13155544,{map:w}),xt=new ut(L.box,Xe);xt.scale.set(22,kn,js-Vt),xt.position.set(0,kn/2,(Vt+js)/2),Dt.add(xt);let yt=new ut(L.box,y(6971e3));yt.scale.set(22,.12,js-Vt-.3),yt.position.set(0,kn+.02,(Vt+js)/2+.1),Dt.add(yt);let st=new _n(L.box,y(8682134,{map:w}),24);st.frustumCulled=!1;for(let E=0;E<24;E++)je(st,E,-10.6+E*.92,kn+.42,Vt+.22,.56,.84,.44);Dt.add(st);let $t=new ut(L.box,y(3812424));$t.scale.set(3.2,2.1,.3),$t.position.set(0,1.05,Vt-.05),Dt.add($t);let Wt=new ut(L.plane,b(11555071,{transparent:!0,opacity:.7,blending:jn,depthWrite:!1,map:_(128,96,(E,C,R)=>{E.strokeStyle="#fff",E.lineWidth=5,E.beginPath(),E.arc(C/2,R*.62,R*.32,0,ki),E.stroke(),E.beginPath();for(let V=0;V<6;V++){let me=V/6*ki;E.moveTo(C/2,R*.62),E.lineTo(C/2+Math.cos(me)*R*.3,R*.62+Math.sin(me)*R*.3)}E.stroke()})}));Wt.scale.set(2.8,2,1),Wt.position.set(0,1.05,Vt-.22),Dt.add(Wt);let Tn=[];for(let E of[-1,1]){let C=new zt;C.position.set(E*11.6,0,(Vt+js)/2);let R=new ut(L.cyl,Xe);R.scale.set(1.9,5.6,1.9),R.position.y=2.8,C.add(R);let V=new ut(L.cyl,y(11839688));V.scale.set(2.2,.6,2.2),V.position.y=5.9,C.add(V);let me=new ut(L.cone,y(5909098));me.scale.set(2.5,3.2,2.5),me.position.y=7.8,C.add(me);let ce=new ut(L.plane,b(16761402,{side:hn}));ce.scale.set(1.3,.8,1),ce.position.set(.7,10.1,0),C.add(ce);let de=new ut(L.cyl,y(3812424));de.scale.set(.06,1.8,.06),de.position.y=10,C.add(de),Dt.add(C),Tn.push({t:C,flag:ce})}let Mt=new zt;Mt.position.set(0,0,30);{let E=new ut(L.box,Xe);E.scale.set(9,7,5),E.position.y=3.5,Mt.add(E);let C=new ut(L.cone,y(5909098));C.scale.set(5,4,5),C.rotation.y=Math.PI/4,C.position.y=9,Mt.add(C);for(let R of[-1,1]){let V=new ut(L.cyl,Xe);V.scale.set(1.4,10,1.4),V.position.set(R*4.6,5,0),Mt.add(V);let me=new ut(L.cone,y(5909098));me.scale.set(1.8,3,1.8),me.position.set(R*4.6,11.5,0),Mt.add(me)}}n.add(Mt);let Vn=[-9.6,-6.2,-2.4,2.4,6.2,9.6],jt=new _n(L.cyl,y(3810328),Vn.length);jt.frustumCulled=!1,Vn.forEach((E,C)=>je(jt,C,E,kn+.6,Vt+.15,.07,1.2,.07)),n.add(jt);let Ln=o(new Nn({transparent:!0,depthWrite:!1,blending:jn,side:hn,fog:!1,uniforms:{time:{value:0},power:{value:1},hue:{value:0}},vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vU; uniform float time; uniform float power; uniform float hue;
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
        gl_FragColor = vec4(c * power, 1.0); }`})),Dn=new ut(o(new ai(13,16)),Ln);Dn.position.set(0,Aa,nn-1),n.add(Dn);let an=new ut(o(new br(1,.05,6,48)),b(13664511,{transparent:!0,opacity:.8,blending:jn,depthWrite:!1,fog:!1}));an.scale.set(6.2,7.8,6),an.position.copy(Dn.position),an.position.z+=.2,n.add(an);let G=new ut(o(new so(1,40).rotateX(-Math.PI/2)),b(10105087,{transparent:!0,opacity:.5,blending:jn,depthWrite:!1}));G.scale.set(9,1,4),G.position.set(0,.04,nn+1.5),n.add(G);let Un=16,Ct=new _n(L.oct,y(3807824,{emissive:8003776}),Un);Ct.frustumCulled=!1,n.add(Ct);let Tt=o(new Nn({transparent:!0,depthWrite:!1,blending:jn,side:hn,uniforms:{time:{value:0},a:{value:0},hit:{value:0},col:{value:new Ce(5949695)}},vertexShader:"varying vec3 vN; varying vec3 vV; varying vec3 vP; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); vP = position; gl_Position = projectionMatrix * mv; }",fragmentShader:`varying vec3 vN; varying vec3 vV; varying vec3 vP; uniform float time; uniform float a; uniform float hit; uniform vec3 col;
      void main(){ float f = 1.0 - abs(dot(vN, vV)); vec2 g = abs(fract(vec2(atan(vP.x, vP.z) * 5.0, vP.y * 6.0)) - 0.5);
        float hex = smoothstep(0.42, 0.5, max(g.x, g.y)); float band = 0.5 + 0.5 * sin(vP.y * 18.0 - time * 3.0);
        float k = pow(f, 2.4) * 0.6 + hex * 0.2 + band * 0.05; gl_FragColor = vec4(mix(col, vec3(1.0), hit * 0.6) * k * a, 1.0); }`})),we=new ut(o(new xi(1,1,1,36,1,!0,Math.PI-.95,1.9).translate(0,.5,0)),Tt);we.scale.set(14,7,14),we.position.set(0,0,Vt+13.2),we.renderOrder=8,n.add(we);let qt=e.maxChars||70,Oe=(E,C,R=1)=>{let V=new _n(E,C,qt*R);V.frustumCulled=!1,V.count=0;let me=new Ce(1,1,1);for(let ce=0;ce<qt*R;ce++)V.setColorAt(ce,me);return n.add(V),V},Fe={body:Oe(o(new Wi(.27,.24,3,10)),y(16777215)),head:Oe(o(new oi(.36,14,10)),y(16777215)),hair:Oe(o(new oi(.385,14,8,0,ki,0,Math.PI*.52)),y(16777215)),eyes:Oe(o(new oi(.058,8,6)),b(1774640),2),hands:Oe(o(new oi(.13,10,8)),y(16777215),2),feet:Oe(o(new oi(.12,8,6)),y(2761272),2),staff:Oe(o(new xi(.04,.05,1.3,6)),y(6965802)),orb:Oe(o(new oi(.15,10,8)),y(16777215,{emissive:6308e3})),hat:Oe(o(new Ii(.4,.62,8)),y(16777215)),sword:Oe(o(new xs(.09,.85,.05)),y(15265528,{emissive:3160136})),shield:Oe(o(new xi(.28,.28,.07,10).rotateX(Math.PI/2)),y(16777215)),bow:Oe(o(new br(.4,.03,5,14,Math.PI)),y(9067050)),halo:Oe(o(new br(.22,.035,5,16).rotateX(Math.PI/2)),b(16773792)),shadow:Oe(o(new ai(1,1).rotateX(-Math.PI/2)),o(new xn({map:U,transparent:!0,depthWrite:!1})))};Fe.shadow.renderOrder=2;let P=130,T=(E,C,R=1)=>{let V=new _n(E,C,P*R);V.frustumCulled=!1,V.count=0;let me=new Ce(1,1,1);for(let ce=0;ce<P*R;ce++)V.setColorAt(ce,me);return n.add(V),V},K=b(16769354),ue={impBody:T(L.sph,y(16777215)),impHorn:T(L.cone,y(1706512),2),impEye:T(L.sphLo,K,2),impWing:T(o(new Ii(.5,.9,3)),y(4198428),2),bruBody:T(L.sph,y(16777215)),bruArm:T(o(new Wi(.28,.9,3,8)),y(16777215),2),bruHorn:T(L.cone,y(15260872),2),bruEye:T(L.sphLo,b(16730666),2),wrBody:T(L.cone,y(16777215,{emissive:3149898,transparent:!0,opacity:.88})),wrHood:T(L.sph,y(2627640)),wrEye:T(L.sphLo,b(9105663),2),eShadow:T(o(new ai(1,1).rotateX(-Math.PI/2)),o(new xn({map:U,transparent:!0,depthWrite:!1})))};ue.eShadow.renderOrder=2;let fe=[13642298,6965898,10115839];function ie(E,C,R,V,me,ce,de,re,j){let Ge=new ut(E,C);return Ge.position.set(R,V,me),Ge.scale.set(ce,de,re),j.add(Ge),Ge}let ye={};function ne(E){let C=new zt,R={},V=y(E?3811904:15262958,{emissive:E?3145754:0}),me=y(E?12099784:14731448),ce=y(2103336),de=b(12607743),re=b(16722506);ie(L.cyl,ce,-.35,.8,0,.22,1.6,.22,C),ie(L.cyl,ce,.35,.8,0,.22,1.6,.22,C),R.coat=ie(o(new xi(.62,1.05,2.2,9)),V,0,2.5,0,1,1,1,C),ie(L.sph,V,0,3.55,0,.75,.45,.6,C),R.head=ie(L.sph,me,0,4.25,.05,.5,.56,.5,C);let j=y(E?15790335:12235972);ie(L.sph,j,0,4.55,-.05,.56,.4,.52,C);for(let Ge=0;Ge<5;Ge++)ie(L.cone,j,-.4+Ge*.2,4.85,-.1,.13,.4,.13,C).rotation.z=(Ge-2)*.35;for(let Ge of[-1,1])ie(L.sph,E?re:de,Ge*.19,4.3,.46,.13,.11,.06,C);if(ie(L.box,ce,0,4.3,.47,.6,.06,.04,C),R.armL=new zt,R.armL.position.set(-.85,3.4,0),C.add(R.armL),ie(L.cyl,V,0,-.6,0,.17,1.2,.17,R.armL),R.armR=new zt,R.armR.position.set(.85,3.4,0),C.add(R.armR),ie(L.cyl,V,0,-.6,0,.17,1.2,.17,R.armR),R.book=ie(L.box,y(3805232,{emissive:5902416}),-1.3,2.6,.6,.55,.7,.18,C),R.stone=ie(L.oct,y(2099216,{emissive:12587050}),1.3,3,.6,.32,.45,.32,C),E){R.core=ie(L.oct,b(16722506),0,3,.62,.28,.36,.1,C),R.wings=[];for(let Ge of[-1,1]){let bt=ie(o(new Ii(1.4,3.6,3)),y(1706016,{emissive:4852282,transparent:!0,opacity:.85}),Ge*1.5,3.8,-.4,1,1,.12,C);bt.rotation.z=Ge*1,R.wings.push(bt)}}return C.scale.setScalar(E?1.75:1.5),{g:C,P:R,top:E?9.4:7.8,aura:E?[1,.2,.35]:[.7,.3,1]}}function oe(){let E=new zt,C={},R=y(1708068,{emissive:1179658}),V=y(14198832,{emissive:4204544}),me=y(16052472),ce=b(16719920);C.robe=ie(o(new Ii(1.5,4.4,10)),R,0,2.2,0,1,1,1,E),ie(L.sph,R,0,4.3,0,1,.55,.75,E);for(let de of[-1,1])ie(L.cone,V,de*.95,4.75,0,.22,.8,.22,E).rotation.z=-de*.5;C.cape=ie(o(new ai(2.6,4.2)),y(5900312,{side:hn}),0,2.5,-.7,1,1,1,E),C.cape.rotation.x=.12,C.head=ie(L.sph,R,0,5.1,0,.62,.7,.62,E),ie(L.sph,me,0,5.05,.33,.42,.5,.32,E);for(let de of[-1,1])ie(L.sph,ce,de*.16,5.12,.62,.09,.05,.04,E);for(let de=0;de<5;de++){let re=ie(L.cone,V,-.5+de*.25,5.75+(de===2?.2:0),0,.09,de===2?.8:.55,.09,E);re.rotation.z=(2-de)*.22}C.handL=ie(L.sph,y(2759220),-1.45,3.2,.4,.3,.3,.3,E),C.handR=ie(L.sph,y(2759220),1.45,3.2,.4,.3,.3,.3,E),C.orb=ie(L.sph,b(16722512,{transparent:!0,opacity:.9}),1.45,3.9,.5,.42,.42,.42,E),C.souls=[];for(let de=0;de<6;de++)C.souls.push(ie(L.sphLo,b(10152191,{transparent:!0,opacity:.85}),0,3,0,.16,.22,.16,E));return E.scale.setScalar(1.85),{g:E,P:C,top:12,aura:[1,.1,.25]}}ye.scientist=ne(!1),ye.scientist2=ne(!0),ye.mastermind=oe();for(let E of Object.values(ye))E.g.visible=!1,n.add(E.g),E.mats=[],E.g.traverse(C=>{C.material&&C.material.isMeshToonMaterial&&E.mats.push([C.material,C.material.emissive.clone()])});let ae={id:"",x:0,z:-30,hitT:-9,atkT:-9,born:0,dieT:-9},F=[];for(let E=0;E<6;E++){let C=new zt,R=y(16765530,{emissive:4861952}),V=y(15265528,{emissive:2107448});ie(L.cyl,V,-.25,.45,0,.16,.9,.16,C),ie(L.cyl,V,.25,.45,0,.16,.9,.16,C),ie(o(new Wi(.5,.6,3,10)),R,0,1.45,0,1,1,1,C),ie(L.sph,V,0,2.35,0,.42,.45,.42,C),ie(L.box,b(8384767),0,2.36,.38,.4,.07,.05,C),ie(L.cone,b(16730714),0,2.85,-.05,.1,.5,.25,C),ie(o(new xi(.55,.55,.1,6).rotateX(Math.PI/2)),R,-.65,1.4,.45,1,1.2,1,C);let me=new zt;me.position.set(.62,1.8,.1),C.add(me),ie(L.box,y(16054527,{emissive:4214896}),0,.7,.2,.12,1.6,.06,me),C.scale.setScalar(1.25),C.visible=!1,n.add(C),F.push({g:C,arm:me,id:0,x:0,z:0,born:0,seen:0,atk:-9})}let se=(()=>{let E=new zt,C=y(14172202,{emissive:4198400}),R=y(16762976,{emissive:4202496}),V=y(16773328);ie(o(new Wi(.9,2.4,4,10).rotateX(Math.PI/2)),C,0,0,0,1,1,1,E),ie(o(new Wi(.7,2,4,10).rotateX(Math.PI/2)),R,0,-.25,.1,1,1,1,E);let me=ie(o(new Wi(.42,1.4,3,8)),C,0,.9,1.9,1,1,1,E);me.rotation.x=.9;let ce=new zt;ce.position.set(0,1.6,2.9),E.add(ce),ie(L.box,C,0,0,.3,.8,.6,1.2,ce);let de=ie(L.box,R,0,-.35,.35,.7,.2,1,ce);for(let j of[-1,1])ie(L.cone,V,j*.3,.5,-.1,.12,.7,.12,ce).rotation.x=-.7,ie(L.sphLo,b(16777056),j*.3,.15,.75,.1,.1,.1,ce);let re=[];for(let j of[-1,1]){let Ge=new zt;Ge.position.set(j*.7,.5,.2),E.add(Ge);let bt=ie(o(new Ii(1.6,4.4,3).rotateZ(-j*Math.PI/2)),y(10496024,{emissive:3147776,side:hn}),j*2.2,0,0,1,1,.08,Ge);bt.rotation.x=Math.PI/2,re.push(Ge)}return ie(o(new Ii(.6,3.4,8).rotateX(-Math.PI/2)),C,0,-.1,-3,1,1,1,E),E.scale.setScalar(1.25),E.visible=!1,n.add(E),{g:E,head:ce,jaw:de,wings:re,id:0,born:0,px:0,pz:0}})(),ee=16,_e=new _n(o(new co(.86,1,40).rotateX(-Math.PI/2)),o(new xn({color:16777215,transparent:!0,depthWrite:!1,blending:jn,side:hn})),ee);_e.frustumCulled=!1,_e.renderOrder=4;{let E=new Ce(0,0,0);for(let C=0;C<ee;C++)_e.setColorAt(C,E)}n.add(_e);let xe=[],ge=(E,C,R,V,me,ce=.6)=>{xe.length<ee&&xe.push({x:E,y:C,z:R,col:V,r1:me,life:ce,t:0})},Ve=14,Ke=new _n(o(new xi(1,1,1,10,1,!0)),o(new xn({color:16777215,transparent:!0,depthWrite:!1,blending:jn,side:hn})),Ve);Ke.frustumCulled=!1,Ke.renderOrder=7;{let E=new Ce(0,0,0);for(let C=0;C<Ve;C++)Ke.setColorAt(C,E)}n.add(Ke);let be=[],He=(E,C,R,V,me,ce,de,re,j)=>{be.length<Ve&&be.push({a:new B(E,C,R),b:new B(V,me,ce),col:de,w:re,life:j,t:0})};function tt(E,C){let R=o(new Ut),V=new Float32Array(E*3),me=new Float32Array(E*4),ce=new Float32Array(E);R.setAttribute("position",new it(V,3)),R.setAttribute("col",new it(me,4)),R.setAttribute("size",new it(ce,1));let de=o(new Nn({transparent:!0,depthWrite:!1,blending:C?jn:Ws,uniforms:{px:{value:400}},vertexShader:"attribute vec4 col; attribute float size; uniform float px; varying vec4 vC; void main(){ vC = col; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = min(size * px / max(0.5, -mv.z), 160.0); gl_Position = projectionMatrix * mv; }",fragmentShader:C?"varying vec4 vC; void main(){ float d = length(gl_PointCoord-0.5)*2.0; float a = pow(max(0.0, 1.0 - d), 2.0); gl_FragColor = vec4(vC.rgb * a * vC.a, 1.0); }":"varying vec4 vC; void main(){ vec2 p = gl_PointCoord-0.5; if (vC.a < 0.0) { if (abs(p.x) > 0.5 || abs(p.y) > 0.28) discard; gl_FragColor = vec4(vC.rgb, 1.0); } else { float d = length(p)*2.0; if (d > 1.0) discard; gl_FragColor = vec4(vC.rgb, vC.a * (1.0 - d*d)); } }"})),re=new gs(R,de);return re.frustumCulled=!1,n.add(re),{geo:R,pos:V,col:me,size:ce,mat:de,pts:re,list:[],cap:E}}let pe=tt(e.particles||900,!0),ht=tt(Math.round((e.particles||900)*.4),!1);pe.pts.renderOrder=9,ht.pts.renderOrder=5;let At=1,ti=new Ce;function ft(E,C,R,V,me,ce){C=Math.max(1,Math.round(C*At));for(let de=0;de<C&&E.list.length<E.cap-60;de++){let re=Math.random()*ki,j=(ce.up??.5)+Math.random()*(ce.spreadUp??.5),Ge=(ce.speed||4)*(.4+Math.random()*.8);ti.set(ce.colors?ce.colors[Math.random()*ce.colors.length|0]:ce.color),E.list.push({x:R+(Math.random()-.5)*(ce.jitter||0),y:V+(Math.random()-.5)*(ce.jy||0),z:me+(Math.random()-.5)*(ce.jitter||0),vx:Math.cos(re)*Ge*(1-j*.6)+(ce.vx||0),vy:Ge*j*(ce.vyMul??1),vz:Math.sin(re)*Ge*(1-j*.6)+(ce.vz||0),g:ce.g??9,drag:ce.drag??1.5,life:(ce.life||.6)*(.7+Math.random()*.6),t:0,s0:ce.size||.3,s1:ce.size1??(ce.size||.3)*.3,r:ti.r,gg:ti.g,b:ti.b,a:ce.alpha??1,conf:!!ce.confetti,spin:Math.random()*ki})}}function Fr(E,C,R){let V=E.list,me=0;for(let re=0;re<V.length;re++){let j=V[re];if(j.t+=C,j.t>=j.life)continue;j.vy-=j.g*C;let Ge=Math.exp(-j.drag*C);j.vx*=Ge,j.vy*=Ge,j.vz*=Ge,j.conf&&(j.spin+=C*6,j.vx+=Math.sin(j.spin)*C*2),j.x+=j.vx*C,j.y+=j.vy*C,j.z+=j.vz*C,j.y<.05&&j.g>0&&(j.y=.05,j.vy*=-.3,j.vx*=.7,j.vz*=.7),V[me++]=j}V.length=me;let ce=0,de=(re,j,Ge,bt,Jt,rn,Zn,Ot)=>{E.pos[ce*3]=re,E.pos[ce*3+1]=j,E.pos[ce*3+2]=Ge,E.col[ce*4]=bt,E.col[ce*4+1]=Jt,E.col[ce*4+2]=rn,E.col[ce*4+3]=Zn,E.size[ce]=Ot,ce++};if(R)for(let re of R)ce<E.cap-1&&de(re[0],re[1],re[2],re[3],re[4],re[5],re[6],re[7]);for(let re of V){if(ce>=E.cap)break;let j=re.t/re.life,Ge=re.conf?1:1-j*j;de(re.x,re.y,re.z,re.r,re.gg,re.b,re.conf?-1:re.a*Ge,re.s0+(re.s1-re.s0)*j)}E.geo.setDrawRange(0,ce);for(let re of["position","col","size"]){let j=E.geo.attributes[re];j.needsUpdate=!0,j.clearUpdateRanges?.(),j.addUpdateRange?.(0,ce*j.itemSize)}}let qo=o(new Ut);{let C=new Float32Array(510);for(let R=0;R<170;R++)C.set([Math.random(),Math.random(),Math.random()],R*3);qo.setAttribute("position",new it(C,3))}let is=new gs(qo,o(new Nn({transparent:!0,depthWrite:!1,blending:jn,uniforms:{time:{value:0},px:{value:300},tint:{value:new Ce(13660415)},tint2:{value:new Ce(16734778)}},vertexShader:`uniform float time; uniform float px; varying float vA; varying float vK;
      void main(){ vec3 s = position; float t = time * (0.05 + s.x * 0.05); float fy = fract(s.y + t);
        vec3 p = vec3((s.x - 0.5) * 34.0 + sin(t * 6.0 + s.z * 9.0) * 1.5, fy * 18.0, -40.0 + s.z * 46.0 + fy * 4.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vK = s.z;
        vA = smoothstep(0.0, 0.1, fy) * smoothstep(1.0, 0.7, fy) * (0.5 + 0.5 * sin(time * 3.0 + s.x * 50.0));
        gl_PointSize = min((0.1 + s.y * 0.12) * px / max(1.0, -mv.z), 10.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 tint; uniform vec3 tint2; varying float vA; varying float vK; void main(){ float d = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(mix(tint, tint2, step(0.6, vK)) * vA * max(0.0, 1.0-d), 1.0); }"})));is.frustumCulled=!1,is.renderOrder=3,n.add(is);let Kt=new Map,An=new Map,ss=new Ce(1,1,1),un=new Ce,hi=new Ce,Qs=new Ce(7368832),Xo=new B,jo=new B(0,1,0),ui={particles:1,labels:22,dust:!0,props:!0,chars:70},ph=[],Pa=0,St=0,rs=-9,Bi=-9,Ia=-9,Yn=null,A=new B(0,13,18),O=new B(0,1.5,-9),Y=new B,W=new B,X=[],ve=new Map,Ie=[],Te=90,Ae=new qe,Le=new qe,Ze=new qe,Ne=(E,C,R,V,me,ce,de,re,j=0,Ge=0,bt=null,Jt=0)=>{Le.compose($.set(R,V,me),Me.setFromEuler(De.set(j,Jt,Ge)),Be.set(ce,de,re)),Ze.multiplyMatrices(Ae,Le),E.setMatrixAt(C,Ze),bt&&E.setColorAt(C,bt)},ke=E=>E.z<Vt-.1?0:kn+.08,nt=[],Qt=[],Pt=[],vt=0;function En(){let E=(R,V,me,ce,de)=>d.bake(R,me,ce,de).map(re=>{let j=new _n(re,d.material(R,V),P);j.frustumCulled=!1,j.count=0;for(let Ge=0;Ge<P;Ge++)j.setColorAt(Ge,ss);return n.add(j),j});nt[0]={run:E("Skeleton_Minion",null,"run",4),atk:E("Skeleton_Minion",null,"attack",3,{to:.8}),s:.78},nt[1]={run:E("Skeleton_Warrior",null,"run",4),atk:E("Skeleton_Warrior",null,"slash",3,{to:.8}),s:1.35},nt[2]={run:E("Skeleton_Mage","ghost","idle",2),atk:E("Skeleton_Mage","ghost","cast",2,{to:.6}),s:1.05};let C={scientist:["Mage",10121408,2.25],scientist2:["Mage",6950960,2.15],mastermind:["Rogue_Hooded",4198432,2.9]};for(let[R,V]of Object.entries(ye)){let[me,ce,de]=C[R],re=new Set([V.P.book,V.P.stone,V.P.core,V.P.orb,V.P.cape,...V.P.wings||[],...V.P.souls||[]].filter(Boolean));for(let Ge of V.g.children)re.has(Ge)||(Ge.visible=!1);let j=d.actor(me,null);j.mesh.material=(Array.isArray(j.mesh.material)?j.mesh.material:[j.mesh.material]).map(Ge=>{let bt=Ge.clone();return bt.color&&bt.color.lerp(new Ce(ce),.5),o(bt),bt}),j.mesh.material.length===1&&(j.mesh.material=j.mesh.material[0]),V.amat=Array.isArray(j.mesh.material)?j.mesh.material[0]:j.mesh.material,j.obj.scale.setScalar(de),V.g.add(j.obj),V.actor=j,j.play("combat",0)}for(let R of F){for(let V of R.g.children)V.visible=!1;R.actor=d.actor("Knight",16765530),R.actor.obj.scale.setScalar(1.05),R.g.add(R.actor.obj)}ze()}function ze(){for(let Se of new Set([...u.geos.keys()].map(Je=>u.matOf(Je))))Se&&Se.color&&Se.color.setHex(9406136);let E=(Se,Je)=>{let Nt=u.instanced(Se,Je);Nt&&(n.add(Nt),Qt.push(Nt))},C=(Se,Je,Nt)=>{E(Se,Nt);for(let $n of Je)E($n,Nt)},R=23,V=()=>(R=R*16807%2147483647,(R-1)/2147483646);Q.visible=he.visible=Ue.visible=!1;let me="ABCDEFGH".split("").map(Se=>"building_"+Se),ce={};for(let Se of[-1,1])for(let Je=0;Je<24;Je++){let Nt=Je%3,$n=-50+Math.floor(Je/3)*6.4+V()*2,Rs=Se*(11.5+Nt*5.6+V()*2),er=me[V()*me.length|0],Gi=V()<.3;(ce[er]||(ce[er]=[])).push({x:Rs,z:$n,ry:Math.floor(V()*4)*Math.PI/2,s:2.4+V()*.5,sy:Nt?1.1+V()*1.2:1+V()*.5,rx:Gi?(V()-.5)*.16:0,rz:Gi?(V()-.5)*.2:0})}for(let[Se,Je]of Object.entries(ce))E(Se,Je);let de=["wheel_front_left","wheel_front_right","wheel_rear_left","wheel_rear_right"],re={car_sedan:[{x:-8.8,z:-14,ry:.5,s:4.2,rz:.12},{x:9.2,z:-25,ry:2.6,s:4.2}],car_police:[{x:9,z:-8,ry:-.4,s:4.2}],car_taxi:[{x:-9.4,z:-27,ry:2.2,s:4.2,rz:-.2}]};for(let[Se,Je]of Object.entries(re))C(Se,de.map(Nt=>`${Se}_${Nt}`),Je);let j=[],Ge=[],bt=[],Jt=[],rn=[],Zn=[],Ot=[];for(let Se=0;Se<10;Se++){let Je=Se%2?1:-1;j.push({x:Je*(9.2+V()*4),z:-44+Se*4.4+V()*2,ry:V()*6,s:1.1+V()*.5})}for(let Se=0;Se<8;Se++){let Je=Se%2?1:-1;(Se%3?bt:Ge).push({x:Je*(8.3+V()*1.6),z:-30+Se*3.4,ry:(V()-.5)*.6,s:.8+V()*.3,rz:(V()-.5)*.2})}for(let Se=0;Se<6;Se++){let Je=Se%2?1:-1;Jt.push({x:Je*8,z:-36+Math.floor(Se/2)*11+V()*3,ry:Math.PI/2,s:.9})}for(let Se=0;Se<4;Se++){let Je=Se%2?1:-1,Nt=-22+Math.floor(Se/2)*12;rn.push({x:Je*7.9,z:Nt,ry:Je>0?-Math.PI/2:Math.PI/2,s:1}),Pt.push([Je*7.9-Je*1,2.5,Nt])}for(let Se=0;Se<4;Se++){let Je=Se%2?1:-1;Zn.push({x:Je*8.6,z:-40+Se*10,ry:Je>0?0:Math.PI,s:4.5})}for(let Se=0;Se<6;Se++){let Je=Se%2?1:-1;Ot.push({x:Je*(13+V()*6),z:-46+Se*7,ry:V()*6,s:.6+V()*.4})}E("tree_dead_large",j.filter((Se,Je)=>Je%3===0)),E("tree_dead_medium",j.filter((Se,Je)=>Je%3===1)),E("tree_dead_small",j.filter((Se,Je)=>Je%3===2)),E("grave_A",Ge),E("gravestone",bt.filter((Se,Je)=>Je%2)),E("gravemarker_A",bt.filter((Se,Je)=>!(Je%2))),E("fence_broken",Jt),C("post_lantern",["post_lantern_lantern"],rn),E("streetlight",Zn),E("rubble_large",Ot),E("crypt",[{x:-15,z:-31,ry:.5,s:1.1}]),E("pumpkin_orange_jackolantern",[{x:8.6,z:-4,ry:-.6,s:.8},{x:-8.4,z:-18,ry:.4,s:.7}]),E("skull",[{x:-7.6,z:-9,ry:.7,s:.6}]),E("ribcage",[{x:7.2,z:-16,ry:1.2,s:1.4}]);let Xt=Vt+.45,tn=kn/4;E("wall",[-8,-4,4,8].map(Se=>({x:Se,z:Xt,sy:tn})).concat([{x:-12,z:Xt,sy:tn},{x:12,z:Xt,sy:tn}])),E("wall_doorway",[{x:0,z:Xt,sy:tn}]),$t.visible=!1;for(let Se of Tn){for(let Je of Se.t.children)Je!==Se.flag&&(Je.visible=!1);Se.flag.position.y=8.4}C("building_tower_catapult_red",["catapult_turret_red","catapult_arm_red"],[-1,1].map(Se=>({x:Se*11.6,z:(Vt+js)/2,ry:Se>0?-.4:.4,s:3.6}))),jt.visible=!1,E("torch_lit",Vn.map(Se=>({x:Se,y:kn+.6,z:Vt+.15,s:1.3}))),E("barrel_large",[{x:-5.2,z:js+1.4,s:.5}]),E("crates_stacked",[{x:5.6,z:js+1.5,ry:.4,s:.6}]),Mt.visible=!1,E("building_castle_red",[{x:0,z:31,s:4.4}]),C("building_tower_A_red",["building_tower_A_top_red"],[{x:-8.5,z:30,s:4},{x:8.5,z:30,s:4}])}let on=new B;function _t(E,C,R,V){let me=0;vt++;let ce=ui.animLod||1,de=E.length>28;for(let re of E){let j=Kt.get(re.id);j||(j={spawn:C,x:re.x,z:re.z,y:ke(re),atk:-9,speed:0,acc:0},Kt.set(re.id,j)),j.seen=C,j.frame=vt;let Ge=Math.hypot(re.x-j.x,re.z-j.z)/Math.max(R,.001);j.speed+=(Math.min(Ge,10)-j.speed)*Math.min(1,R*8),j.x=re.x,j.z=re.z;let bt=re.flags&Rt.down,Jt=re.flags&Rt.asc,rn=ke(re);j.y=rn;let Zn=py[re.cls]||"Knight",Ot=re.info||{};(!j.a||j.model!==Zn)&&(j.a&&d.release(j.a),j.model=Zn,j.a=d.actor(Zn,re.flags&1?null:Ot.color??null),n.add(j.a.obj));let Xt=j.a,tn=Math.min(1,(C-j.spawn)/.35);Xt.obj.position.set(re.x,rn+(Jt?.25+Math.sin(C*3)*.08:0),re.z),Xt.obj.rotation.set(0,Math.PI+(re.cls===1?0:Math.sin(C*.7+re.id)*.15),0),Xt.obj.scale.setScalar(dm*(.4+.6*tn)*(Jt?1.18:1));let Se=bt?"dead":j.speed>2.4?"run":j.speed>.4?"walk":re.flags&Rt.cmd||Jt?"cheer":"combat";bt&&Xt.base!=="dead"&&Xt.play("die",C),Xt.play(Se,C),!bt&&C-j.atk<.05&&C>=Xt.until&&Xt.play(my[re.cls]||"slash",C,{speed:1.5}),j.acc+=R;let Je=(de?2:1)*ce;(vt+re.id)%Je===0&&($l(d,Xt,j.acc,C),j.acc=0),Le.compose($.set(re.x,rn+.03,re.z),Me.identity(),Be.set(1.1,1,1.1)),Fe.shadow.setMatrixAt(me,Le);let Nt=hi.setHex(Ql[re.cls]??16777215);Jt?(V.push([re.x,rn+.8,re.z,1,.85,.3,.9+.3*Math.sin(C*8),3.2]),Math.random()<R*8*At&&ft(pe,1,re.x,rn+.4,re.z,{color:16765773,up:1,speed:1.4,g:-3,life:.6,size:.25,jitter:.6})):(re.cls===0||re.cls===3)&&(me<24||C-j.atk<.3)&&Xt.hand&&(Xt.hand.getWorldPosition(on),V.push([on.x,on.y+.5,on.z,Nt.r,Nt.g,Nt.b,.5+(C-j.atk<.3?.8:0),.9])),re.flags&Rt.gift&&V.push([re.x,rn+.9,re.z,1,.5,.9,.9,2.6]),X.push({id:re.id,x:re.x,y:rn+2*dm*tn+.15,z:re.z,info:Ot,flags:re.flags,cls:re.cls,hp:re.hp}),me++}for(let re of Kt.values())re.a&&re.frame!==vt&&(d.release(re.a),re.a=null);return me}function as(E,C,R,V,me){let ce=null;for(let de of nt)for(let re of[de.run,de.atk])for(let j of re)j.count=0;for(let de of E.enemies){if(de.k===3){ce=de;continue}let re=nt[de.k];if(!re)continue;let j=An.get(de.id);j||(j={born:C,hit:-9,ph:Math.random()*8,px:de.x,pz:de.z,mv:1,yaw:0},An.set(de.id,j)),j.seen=C;let Ge=de.x-j.px,bt=de.z-j.pz,Jt=Math.hypot(Ge,bt)/Math.max(R,.001);if(j.px=de.x,j.pz=de.z,j.mv+=((Jt>.3?1:0)-j.mv)*Math.min(1,R*6),Jt>.3){let Gi=Math.atan2(Ge,bt)-j.yaw;Gi=Math.atan2(Math.sin(Gi),Math.cos(Gi)),j.yaw+=Gi*Math.min(1,R*8)}let rn=j.mv<.5,Zn=rn?re.atk:re.run,Ot=rn?4:de.k===0?9:de.k===1?5.5:2,Xt=Zn[Math.floor(C*Ot+j.ph)%Zn.length],tn=Xt.count++,Se=Math.max(0,1-(C-j.hit)/.18),Je=Math.min(1,(C-j.born)/.5),Nt=re.s*(.2+.8*Je),$n=de.k===2?2.4+Math.sin(C*2+j.ph)*.4:0;Ae.compose($.set(de.x,$n,de.z),Me.setFromEuler(De.set(de.k===2?.2:0,j.yaw,de.k===2?Math.sin(C*1.7+j.ph)*.12:0)),Be.set(Nt,Nt,Nt)),Xt.setMatrixAt(tn,Ae),Xt.setColorAt(tn,Se>0?un.setRGB(1+Se*1.6,1+Se*.5,1+Se*.5):ss),de.k!==2?(Le.compose($.set(de.x,.03,de.z),Me.identity(),Be.set(de.k===1?2:1.1,1,de.k===1?2:1.1)),ue.eShadow.setMatrixAt(me.sh++,Le)):Math.random()<R*4*At&&ft(pe,1,de.x,$n+.3,de.z,{color:10115839,up:-.2,speed:.6,g:1,life:.6,size:.35});let Rs=de.k===1?2.6:de.k===2?$n+2:1.5;ve.set(de.id,{x:de.x,y:de.k===2?$n+1.2:Rs*.6,z:de.z,k:de.k}),(de.k===1||tn<30)&&V.push([de.x,Rs*.82,de.z+.3,de.k===2?.5:.4,de.k===2?.8:.9,1,.35,de.k===1?.9:.5])}for(let de of nt)for(let re of[de.run,de.atk])for(let j of re)j.instanceMatrix.needsUpdate=!0,j.instanceColor&&(j.instanceColor.needsUpdate=!0);return ce}function Rn(E,C,R){Pa=R;let V=E.phase==="ending"&&Yn,me=V&&Yn.saved?Math.min(1,(R-Yn.t0)/4):0,ce=V&&!Yn.saved?Math.min(1,(R-Yn.t0)/3):0;H.material.uniforms.dawn.value=me*.85,H.material.uniforms.end.value=ce*.9,te.material.uniforms.time.value=R,te.material.uniforms.op.value=1-me;let de=!!E.bo,re=(V?Yn.saved?Math.max(0,1-me*1.2):1.5:1)*(de?1.25:1)*(1+.12*Math.sin(R*3));Ln.uniforms.time.value=R,Ln.uniforms.power.value=re*.6,Ln.uniforms.hue.value=(E.ch||1)*.12+(de?.2:0)+ce*.4;let j=.72*(V?Yn.saved?Math.max(.01,1-me):1+ce*.8:1+((E.ch||1)-1)*.12);Dn.scale.set(j,j,1),an.scale.set(6.2*j,7.8*j,6),an.rotation.z=R*.2,an.visible=j>.05,f.intensity=32*re*(1+.15*Math.sin(R*2.3)),f.color.setHex(ce>0?16719936:de?13643968:10502399),G.material.opacity=.22*re;for(let k=0;k<Un;k++){let q=k/Un*ki+R*.15*(k%2?1:-1),ot=7.5+k%3*1.6;je(Ct,k,Math.cos(q)*ot*j,Aa+Math.sin(q)*ot*.9*j+Math.sin(R+k)*.4,nn-.5+k%4*.4,.3+k%3*.2,.5+k%2*.3,.3,R*(.5+k*.05),k,0)}Ct.instanceMatrix.needsUpdate=!0,c.intensity=.95+me*1.2-ce*.4+(R-rs<.12?1.6:0)+(R-Ia<.5?(.5-(R-Ia))*4:0),c.color.setHex(me>.3?16769216:9412863),h.intensity=.9+me,n.fog.color.copy(i).lerp(hi.setHex(15245440),me*.7).lerp(un.setHex(3802640),ce*.8);let Ge=Math.max(0,Math.min(100,E.bar||0))/100;we.visible=Ge>.02||R-Bi<.4,Tt.uniforms.time.value=R,Tt.uniforms.a.value=.12+Ge*.4+(R-Bi<.3?.5:0),Tt.uniforms.hit.value=Math.max(0,1-(R-Bi)/.3),Tt.uniforms.col.value.setHex(Ge>.66?8050943:Ge>.33?5943551:8024319),we.scale.y=6+Ge*1.5;for(let k of Tn)k.flag.rotation.y=Math.sin(R*2.2+k.t.position.x)*.35;g.intensity=12+Math.sin(R*11)*2;let bt=E.pd>0?1-Math.max(0,Math.min(1,E.tl/E.pd)):1;if(E.phase==="intro"){let k=bt*bt*(3-2*bt);Y.set(Math.sin(k*1.4-.7)*10,6+k*6,-6+k*24),W.set(0,Aa-k*5,nn+k*22)}else if(E.phase==="gather"||E.phase==="chapter")Y.set(Math.sin(R*.12)*3,10.5,16),W.set(0,1.8,-8);else if(E.phase==="boss"&&E.bo)Y.set(Math.sin(R*.2)*2,12,18),W.set(ae.x*.3,2.2,Math.max(-14,ae.z*.45-4));else if(E.phase==="vote"||E.phase==="choice")Y.set(Math.sin(R*.25)*3,9.5,15),W.set(0,4.5,-16);else if(E.phase==="ending"){let k=R*.12;Y.set(Math.sin(k)*14,9+me*3,10+Math.cos(k)*8),W.set(0,3+me*2,-6)}else Y.set(Math.sin(R*.15)*1.8,12.5,17.5),W.set(0,.8,-9);let Jt=Math.min(1,C*(E.phase==="intro"?1.6:1.8));A.distanceTo(Y)>45&&(A.copy(Y),O.copy(W)),A.lerp(Y,Jt),O.lerp(W,Jt),St=Math.max(0,St-C*2.4);let rn=(Math.random()-.5)*St*.6,Zn=(Math.random()-.5)*St*.6;r.position.set(A.x+rn,A.y+Zn+Math.sin(R*.5)*.08,A.z),r.lookAt(O.x+rn*.6,O.y+Zn*.6,O.z);let Ot=[];Vn.forEach((k,q)=>{let ot=.75+.25*Math.sin(R*(9+q)+q*2);Ot.push([k,kn+1.35,Vt+.15,1,.55*ot,.18*ot,.9*ot,2.2]),Ot.push([k,kn+1.3,Vt+.15,1,.9,.6,1,.5]),Math.random()<C*3*At&&ft(pe,1,k,kn+1.4,Vt+.15,{color:16752704,up:1,speed:.8,g:-2,life:.7,size:.18})});for(let k of Pt)Ot.push([k[0],k[1],k[2],1,.7,.35,.8+.15*Math.sin(R*7+k[2]),2.4]);if(Wt.material.opacity=.45+.3*Math.sin(R*2)+Ge*.3,Ot.push([0,Aa,nn,.7,.25,1,.2*re,13]),Math.random()<C*8*At&&j>.1){let k=Math.random()*ki;ft(pe,1,Math.cos(k)*5.6*j,Aa+Math.sin(k)*7*j,nn,{colors:[12607743,16726634],up:.2,speed:1.5,g:-.5,life:1.4,size:.5})}X.length=0;let Xt=Math.min(qt,ui.chars||qt),tn=E.members;if(tn.length>Xt){tn=ph,tn.length=0;for(let k of E.members)!(k.flags&1)&&tn.length<Xt&&tn.push(k);for(let k of E.members)k.flags&1&&tn.length<Xt&&tn.push(k)}let Se=0,Je=0,Nt=0,$n=0,Rs=0,er=0;if(d)Se=_t(tn,R,C,Ot);else for(let k of tn){let q=Kt.get(k.id);q||(q={walk:Math.random()*10,spawn:R,skin:pm[k.id%pm.length],x:k.x,z:k.z,y:ke(k),atk:-9},Kt.set(k.id,q)),q.seen=R;let ot=Math.hypot(k.x-q.x,k.z-q.z)/Math.max(C,.001);q.x=k.x,q.z=k.z;let It=k.flags&Rt.down,Ft=k.flags&Rt.asc,Cn=ot>.4&&!It;q.walk+=C*(Cn?11:0);let dt=ke(k);q.y=dt;let cn=Math.min(1,(R-q.spawn)/.35),di=(.3+.7*cn)*(1+.15*Math.sin(cn*Math.PI))*(Ft?1.18:1),wt=Math.max(0,1-(R-q.atk)/.25),tr=(Cn?Math.abs(Math.sin(q.walk))*.12:0)+(k.flags&Rt.cmd?Math.abs(Math.sin(R*12+k.id))*.16:0)+(Ft?.25+Math.sin(R*3)*.08:0);Ae.compose($.set(k.x,dt+tr,k.z),Me.setFromEuler(De.set(It?-1.45:0,Math.PI+(k.cls===1?0:Math.sin(R*.7+k.id)*.15),0)),Be.set(di,di,di)),It&&Ae.multiply(Le.makeTranslation(0,.3,0));let dn=k.info||{};un.setHex(dn.color??16777215),It&&un.lerp(Qs,.7);let Cs=wt>0?hi.copy(un).lerp(ss,wt*.5):un,nr=Cn?Math.sin(q.walk):0;Ne(Fe.body,Se,0,.52,0,1,1,1,0,0,Cs),hi.setHex(q.skin),It&&hi.lerp(Qs,.5),Ne(Fe.head,Se,0,1.06,0,1,1,1,0,0,hi),hi.copy(un).multiplyScalar(.55),Ne(Fe.hair,Se,0,1.1,-.02,1,1,1,-.15,0,hi);let Gf=It||(R+k.id*.37)%4.2<.12?.15:1;Ne(Fe.eyes,Se*2,-.13,1.08,.31,1,Gf,1),Ne(Fe.eyes,Se*2+1,.13,1.08,.31,1,Gf,1);let Hf=k.cls===1?-wt*1.6:-wt*.8;Ne(Fe.hands,Se*2,-.36,.5+nr*.05,nr*.12,1,1,1,0,0,un),Ne(Fe.hands,Se*2+1,.36,.62+wt*.2,.22,1,1,1,0,0,un),Ne(Fe.feet,Se*2,-.13,.08,nr*.18,1,1,1),Ne(Fe.feet,Se*2+1,.13,.08,-nr*.18,1,1,1);let Ur=hi.setHex(Ql[k.cls]??16777215);ui.props&&((k.cls===0||k.cls===3)&&(Ne(Fe.staff,Nt,.4,.75+wt*.15,.2,1,1,1,Hf*.4,0),Ne(Fe.orb,Nt,.4,1.45+wt*.2,.2,1+wt*.5,1+wt*.5,1+wt*.5,0,0,Ur),Nt++),k.cls===0&&(Ne(Fe.hat,Je,0,1.55,-.03,1,1,1,-.2,.1,Ur),Je++),k.cls===1&&(Ne(Fe.sword,$n,.42,.95,.3,1,1,1,-.6+Hf,-.2),Ne(Fe.shield,$n,-.42,.6,.32,1,1,1,0,0,Ur),$n++),k.cls===2&&(Ne(Fe.bow,Rs,-.35,.72,.36,1,1,1,0,Math.PI/2+.1,null,Math.PI/2),Rs++),(k.cls===3||k.flags&Rt.bless)&&(Ne(Fe.halo,er,0,1.62,0,1,1,1,0,0,null),er++)),Le.compose($.set(k.x,dt+.03,k.z),Me.identity(),Be.set(1.1,1,1.1)),Fe.shadow.setMatrixAt(Se,Le),Ft?(Ot.push([k.x,dt+.8,k.z,1,.85,.3,.9+.3*Math.sin(R*8),3.2]),Math.random()<C*8*At&&ft(pe,1,k.x,dt+.4,k.z,{color:16765773,up:1,speed:1.4,g:-3,life:.6,size:.25,jitter:.6})):(k.cls===0||k.cls===3)&&ui.props&&(Se<30||wt>0)&&($.set(.4,1.45,.2).applyMatrix4(Ae),Ot.push([$.x,$.y,$.z,Ur.r,Ur.g,Ur.b,.6+wt,.9+wt*1.4])),k.flags&Rt.gift&&Ot.push([k.x,dt+.9,k.z,1,.5,.9,.9,2.6]),X.push({id:k.id,x:k.x,y:dt+tr+1.62*di+(k.cls===0?.35:0),z:k.z,info:dn,flags:k.flags,cls:k.cls,hp:k.hp}),Se++}let Gi={eyes:Se*2,hands:Se*2,feet:Se*2,staff:Nt,orb:Nt,hat:Je,sword:$n,shield:$n,bow:Rs,halo:er};if(d)for(let k of Object.keys(Fe))Gi[k]=k==="shadow"?Se:0;for(let k of Object.keys(Fe)){let q=Fe[k];q.count=Gi[k]??Se,q.instanceMatrix.needsUpdate=!0,q.instanceColor&&(q.instanceColor.needsUpdate=!0)}if(Kt.size>tn.length+40)for(let[k,q]of Kt)R-q.seen>5&&(q.a&&d.release(q.a),Kt.delete(k));ve.clear();let fn={imp:0,bru:0,wr:0,sh:0},fi=null;if(d)fi=as(E,R,C,Ot,fn);else for(let k of E.enemies){if(k.k===3){fi=k;continue}let q=An.get(k.id);q||(q={born:R,hit:-9,ph:Math.random()*ki},An.set(k.id,q)),q.seen=R;let ot=Math.max(0,1-(R-q.hit)/.18),It=Math.min(1,(R-q.born)/.5),Ft=.2+.8*It,Cn=Math.abs(Math.sin(R*9+q.ph))*.12;if(un.setHex(fe[k.k]),ot>0&&un.lerp(ss,ot*.85),k.k===0){let dt=fn.imp++;Ae.compose($.set(k.x,Cn,k.z),Me.setFromEuler(De.set(0,Math.sin(R*4+q.ph)*.2,Math.sin(R*9+q.ph)*.12)),Be.set(Ft,Ft,Ft)),Ne(ue.impBody,dt,0,.55,0,.45,.52,.42,0,0,un),Ne(ue.impHorn,dt*2,-.18,.98,0,.08,.3,.08,0,.35),Ne(ue.impHorn,dt*2+1,.18,.98,0,.08,.3,.08,0,-.35),Ne(ue.impEye,dt*2,-.13,.66,.36,.07,.06,.05),Ne(ue.impEye,dt*2+1,.13,.66,.36,.07,.06,.05);let cn=Math.sin(R*22+q.ph)*.5;Ne(ue.impWing,dt*2,-.42,.7,-.15,1,1,.2,0,1.2+cn),Ne(ue.impWing,dt*2+1,.42,.7,-.15,1,1,.2,0,-1.2-cn),ve.set(k.id,{x:k.x,y:.7,z:k.z,k:0})}else if(k.k===1){let dt=fn.bru++,cn=Math.sin(R*5+q.ph);Ae.compose($.set(k.x,Math.abs(cn)*.1,k.z),Me.setFromEuler(De.set(.12,0,cn*.06)),Be.set(Ft,Ft,Ft)),Ne(ue.bruBody,dt,0,1.15,0,.95,1.1,.8,0,0,un),Ne(ue.bruArm,dt*2,-.95,.95,.1,1,1,1,cn*.4,.25,un),Ne(ue.bruArm,dt*2+1,.95,.95,.1,1,1,1,-cn*.4,-.25,un),Ne(ue.bruHorn,dt*2,-.45,2.05,.1,.13,.5,.13,-.3,.6),Ne(ue.bruHorn,dt*2+1,.45,2.05,.1,.13,.5,.13,-.3,-.6),Ne(ue.bruEye,dt*2,-.25,1.55,.72,.1,.08,.06),Ne(ue.bruEye,dt*2+1,.25,1.55,.72,.1,.08,.06),ve.set(k.id,{x:k.x,y:1.3,z:k.z,k:1})}else{let dt=fn.wr++,cn=3.2+Math.sin(R*2+q.ph)*.4;Ae.compose($.set(k.x,cn,k.z),Me.setFromEuler(De.set(.25,Math.sin(R+q.ph)*.3,Math.sin(R*1.7+q.ph)*.15)),Be.set(Ft,Ft,Ft)),Ne(ue.wrBody,dt,0,-.2,0,.55,-1.5,.55,0,0,un),Ne(ue.wrHood,dt,0,.62,0,.42,.45,.42),Ne(ue.wrEye,dt*2,-.13,.62,.34,.07,.05,.05),Ne(ue.wrEye,dt*2+1,.13,.62,.34,.07,.05,.05),Math.random()<C*4*At&&ft(pe,1,k.x,cn-.8,k.z,{color:10115839,up:-.2,speed:.6,g:1,life:.6,size:.35}),ve.set(k.id,{x:k.x,y:cn+.3,z:k.z,k:2})}k.k!==2&&(Le.compose($.set(k.x,.03,k.z),Me.identity(),Be.set(k.k===1?2.2:1.2,1,k.k===1?2.2:1.2)),ue.eShadow.setMatrixAt(fn.sh++,Le)),(k.k===1||fn.imp<40)&&Ot.push([k.x,k.k===1?1.55:k.k===2?3.8:.66,k.z+(k.k===1?.75:.38),k.k===2?.5:1,k.k===1?.3:k.k===2?.9:.85,k.k===2?1:.2,.5,k.k===1?.9:.5])}let mh={impBody:fn.imp,impHorn:fn.imp*2,impEye:fn.imp*2,impWing:fn.imp*2,bruBody:fn.bru,bruArm:fn.bru*2,bruHorn:fn.bru*2,bruEye:fn.bru*2,wrBody:fn.wr,wrHood:fn.wr,wrEye:fn.wr*2,eShadow:fn.sh};if(d)for(let k of Object.keys(mh))mh[k]=k==="eShadow"?fn.sh:0;for(let k of Object.keys(ue)){let q=ue[k];q.count=mh[k],q.instanceMatrix.needsUpdate=!0,q.instanceColor&&(q.instanceColor.needsUpdate=!0)}if(An.size>200)for(let[k,q]of An)R-q.seen>3&&An.delete(k);for(let[k,q]of Object.entries(ye)){let ot=fi&&E.bo&&E.bo.id===k||ae.id===k&&R-ae.dieT<1.6;if(q.g.visible=!!ot,!ot)continue;ae.id!==k&&(ae.id=k,ae.born=R,ae.dieT=-9,ae.x=fi?fi.x:0,ae.z=fi?fi.z:-30);let It=R-ae.dieT<1.6;fi&&!It&&(ae.x+=(fi.x-ae.x)*Math.min(1,C*6),ae.z+=(fi.z-ae.z)*Math.min(1,C*6));let Ft=Math.min(1,(R-ae.born)/1.6),Cn=Math.max(0,1-(R-ae.atkT)/.8),dt=It?Math.min(1,(R-ae.dieT)/1.5):0;q.g.position.set(ae.x+(It?(Math.random()-.5)*.3:0),(Ft-1)*6-dt*3+(k==="mastermind"?.6+Math.sin(R*1.4)*.3:0),ae.z),q.g.rotation.set(dt*.4,Math.sin(R*.6)*.2,0);let cn=k==="mastermind"?1.85:k==="scientist2"?1.75:1.5;q.g.scale.setScalar(cn*(1+Cn*.08)*(1-dt*.5));let di=Math.max(0,1-(R-ae.hitT)/.15);for(let[dn,Cs]of q.mats)dn.emissive.copy(Cs).lerp(ss,di*.6);if(q.actor){let dn=q.actor;It?(dn.state!=="die"&&dn.state!=="dead"&&dn.play("die",R),R>=dn.until&&dn.play("dead",R)):(dn.play("combat",R),R-ae.atkT<.05?dn.play(k==="mastermind"?"summon":"cast",R):di>.9&&R>=dn.until&&dn.play("hit",R,{speed:1.5})),q.amat&&q.amat.emissive&&q.amat.emissive.setRGB(di*.5,di*.4,di*.5),$l(d,dn,C,R)}let wt=q.P;wt.armL&&(wt.armL.rotation.z=-.3-Cn*1.2+Math.sin(R*2)*.1,wt.armR.rotation.z=.3+Cn*1.4-Math.sin(R*2)*.1,wt.armR.rotation.x=-Cn*1.2),wt.book&&(wt.book.position.y=2.6+Math.sin(R*2)*.15,wt.book.rotation.y=R*.8,wt.stone.position.set(Math.cos(R*1.5)*1.3,3.2+Math.sin(R*3)*.3,Math.sin(R*1.5)*.9+.3),wt.stone.rotation.y=R*3),wt.wings&&wt.wings.forEach((dn,Cs)=>{dn.rotation.z=(Cs?1:-1)*(1+Math.sin(R*3)*.15)}),wt.souls&&wt.souls.forEach((dn,Cs)=>{let nr=R*1.2+Cs/6*ki;dn.position.set(Math.cos(nr)*1.9,3.4+Math.sin(R*2+Cs)*.5,Math.sin(nr)*1.2)}),wt.orb&&wt.orb.scale.setScalar(.42*(1+Cn*.8+Math.sin(R*6)*.05)),wt.cape&&(wt.cape.rotation.x=.12+Math.sin(R*1.8)*.08);let tr=q.top;Ot.push([q.g.position.x,q.g.position.y+tr*.5,ae.z-.5,q.aura[0],q.aura[1],q.aura[2],.3+Cn*.4,7+Cn*4]),Math.random()<C*14*At&&ft(pe,1,ae.x+(Math.random()-.5)*3,Math.random()*tr*.7,ae.z,{color:k==="scientist"?11559167:16724064,up:1,speed:1.2,g:-2.5,life:1,size:.5}),It&&Math.random()<C*30&&ft(pe,3,ae.x+(Math.random()-.5)*4,Math.random()*tr,ae.z,{colors:[16777215,16765773,12607743],speed:6,g:2,life:.8,size:.7}),fi&&ve.set(fi.id,{x:ae.x,y:tr*.55,z:ae.z,k:3})}let zf=new Set;for(let k of E.allies)if(k.k===0){let q=F.find(Ft=>Ft.id===k.id)||F.find(Ft=>!Ft.id);if(!q)continue;q.id!==k.id&&(q.id=k.id,q.born=R,q.x=k.x,q.z=k.z,ft(pe,30,k.x,1.5,k.z,{colors:[16769152,16777215],speed:6,up:.6,g:3,life:.7,size:.5}),ge(k.x,.1,k.z,16765773,4,.7),He(k.x,0,k.z,k.x,30,k.z,16769152,1.2,.6)),zf.add(q);let ot=Math.hypot(k.x-q.x,k.z-q.z)/Math.max(C,.001);q.x=k.x,q.z=k.z;let It=Math.min(1,(R-q.born)/.4);q.g.visible=!0,q.g.position.set(k.x,ot>.3?Math.abs(Math.sin(R*10))*.15:0,k.z),q.g.rotation.y=Math.PI,q.g.scale.setScalar(1.25*It),q.arm.rotation.x=-Math.max(0,1-(R-q.atk)/.3)*2.2+.3,q.actor&&(q.actor.play(ot>.3?"run":"combat",R),R-q.atk<.05&&q.actor.play("slash",R),$l(d,q.actor,C,R)),Ot.push([k.x,1.6,k.z,1,.82,.35,.55,4.5])}else{let q=se;q.id!==k.id&&(q.id=k.id,q.born=R,q.px=k.x,q.pz=k.z,ge(0,.2,0,16738858,10,1),St=Math.max(St,.8));let ot=(k.x-q.px)/Math.max(C,.001),It=(k.z-q.pz)/Math.max(C,.001);q.px=k.x,q.pz=k.z;let Ft=Math.min(1,(R-q.born)/1.2);q.g.visible=!0,q.g.position.set(k.x,9.5+(1-Ft)*12+Math.sin(R*2)*.5,k.z),Math.hypot(ot,It)>.1&&(q.g.rotation.y=Math.atan2(ot,It)),q.g.rotation.z=Math.sin(R*1.3)*.15,q.wings[0].rotation.z=Math.sin(R*6)*.6,q.wings[1].rotation.z=-Math.sin(R*6)*.6,q.jaw.rotation.x=.25+Math.sin(R*8)*.15,q.g.updateMatrixWorld(),$.set(0,0,1.2).applyMatrix4(q.head.matrixWorld);let Cn=k.x+Math.sin(q.g.rotation.y)*2,dt=k.z+Math.cos(q.g.rotation.y)*2+3;Ft>=1&&ft(pe,3,$.x,$.y,$.z,{colors:[16764992,16738848,16722448],speed:1,vx:(Cn-$.x)*1.4,vz:(dt-$.z)*1.4,up:-.9,vyMul:1,g:6,life:.7,size:.9,size1:1.6,drag:.5}),Ot.push([k.x,q.g.position.y,k.z,1,.5,.2,.6,9])}for(let k of F)zf.has(k)||(k.g.visible&&ft(pe,16,k.x,1.4,k.z,{color:16769152,speed:4,g:-1,life:.6,size:.4}),k.g.visible=!1,k.id=0);se.g.visible&&!E.allies.some(k=>k.k===1)&&(se.g.visible=!1,se.id=0,ft(pe,30,se.px,9,se.pz,{colors:[16764992,16738848],speed:7,g:0,life:.8,size:.6}));for(let k=Ie.length-1;k>=0;k--){let q=Ie[k],ot=(R-q.t0)/q.dur,It=ve.get(q.to);if(It&&(q.last=It),ot>=1){let di=Ta[q.c]||Ta.v;ft(pe,q.c==="m"?9:4,q.last.x,q.last.y,q.last.z,{colors:di,speed:q.c==="m"?5:3,g:2,life:.35,size:q.c==="m"?.55:.35}),q.c==="m"&&ge(q.last.x,.15,q.last.z,12611839,1.9,.35),Ie.splice(k,1);continue}let Ft=q.sx+(q.last.x-q.sx)*ot,Cn=q.sz+(q.last.z-q.sz)*ot,dt=q.sy+(q.last.y-q.sy)*ot+Math.sin(ot*Math.PI)*q.arc,cn=q.col;Ot.push([Ft,dt,Cn,cn.r,cn.g,cn.b,1,q.c==="m"?1.3:q.c==="v"?1:.7]),(q.c!=="a"||Math.random()<.5)&&ft(pe,1,Ft,dt,Cn,{color:q.c==="m"?16747066:(Ta[q.c]||Ta.v)[0],speed:.3,g:0,life:.25,size:q.c==="m"?.6:.35})}for(let k=0;k<xe.length;k++){let q=xe[k];q.t+=C;let ot=q.t/q.life;if(ot>=1){xe.splice(k--,1);continue}let It=.3+q.r1*(1-Math.pow(1-ot,3));_e.setMatrixAt(k,Ye.compose($.set(q.x,q.y,q.z),Me.identity(),Be.set(It,1,It))),_e.setColorAt(k,Re.setHex(q.col).multiplyScalar(1-ot))}_e.count=xe.length,_e.instanceMatrix.needsUpdate=!0,_e.instanceColor&&(_e.instanceColor.needsUpdate=!0);for(let k=0;k<be.length;k++){let q=be[k];q.t+=C;let ot=q.t/q.life;if(ot>=1){be.splice(k--,1);continue}let It=q.a.distanceTo(q.b);$.copy(q.a).add(q.b).multiplyScalar(.5),Me.setFromUnitVectors(jo,Xo.copy(q.b).sub(q.a).normalize());let Ft=q.w*(ot<.2?ot/.2:1-(ot-.2)/.8);Ke.setMatrixAt(k,Ye.compose($,Me,Be.set(Ft,It,Ft))),Ke.setColorAt(k,Re.setHex(q.col).multiplyScalar(.8*(1-ot)*(1-ot*.3)))}if(Ke.count=be.length,Ke.instanceMatrix.needsUpdate=!0,Ke.instanceColor&&(Ke.instanceColor.needsUpdate=!0),V){let k=R-Yn.t0;if(Yn.saved){if(Math.random()<C*3&&k<14){let q=(Math.random()-.5)*24,ot=10+Math.random()*8,It=-8-Math.random()*14;ft(pe,40,q,ot,It,{colors:[[16765773,16739029,8384767,8257418][Math.random()*4|0],16777215],speed:7,up:0,spreadUp:1,vyMul:1,g:3,drag:1.2,life:1.3,size:.45})}Math.random()<C*30*At&&ft(ht,1,(Math.random()-.5)*16,12,-2+Math.random()*8,{colors:[16731530,16765773,5097215,8257418,13073919],up:0,speed:1,g:2.5,drag:1.4,life:4,size:.35,confetti:!0}),Ot.push([0,20,-60,1,.75,.45,me*.8,70])}else Math.random()<C*20*At&&ft(pe,1,(Math.random()-.5)*24,Math.random()*3,-20+Math.random()*24,{colors:[16722490,10100991],up:1,speed:2,g:-3,life:1.6,size:.8}),Math.random()<C*2&&(St=Math.max(St,.5))}is.material.uniforms.time.value=R,is.visible=ui.dust,Fr(pe,C,Ot),Fr(ht,C,null),t.render(n,r)}function kr(E){let C=Pa;switch(E.k){case"shot":{let R=ve.get(E.e);if(!R)break;if(E.c==="w"||E.c==="g"){if(ft(pe,4,R.x,R.y+.3,R.z+.4,{colors:[16777215,E.c==="g"?16765773:16747114],speed:4,g:2,life:.25,size:.35}),E.c==="w"){let j=Kt.get(E.s);j&&(j.atk=C)}else{let j=F.find(Ge=>Ge.id===-E.s);j&&(j.atk=C),ge(R.x,.1,R.z,16765773,2.4,.3)}let re=An.get(E.e);re&&(re.hit=C);break}if(Ie.length>=Te)break;let V,me,ce,de=E.s?Kt.get(E.s):null;de?(V=de.x,me=de.y+1.4,ce=de.z,de.atk=C):(V=(Math.random()-.5)*14,me=kn+3,ce=Rr),Ie.push({sx:V,sy:me,sz:ce,to:E.e,last:R,t0:C,dur:Math.max(.12,E.d||.3),c:E.c,col:new Ce((Ta[E.c]||Ta.v)[0]),arc:E.c==="m"?1.6:E.c==="v"?2.4:.4});break}case"dmg":{let R=An.get(E.e);R?R.hit=C:ve.get(E.e)?.k===3&&(ae.hitT=C),E.c===2&&(St=Math.max(St,.35));break}case"kill":{let R=E.q===2?3.2:.8;ft(pe,E.q===1?14:8,E.x,R,E.z,{colors:[12607743,16726634,16777215],speed:4.5,g:3,life:.5,size:.45}),ft(ht,E.q===1?8:4,E.x,R,E.z,{color:1706528,speed:2.5,up:.8,g:-1,life:.9,size:.6,alpha:.7}),An.delete(E.e);break}case"heal":{let R=Kt.get(E.s),V=Kt.get(E.t);R&&V&&(He(R.x,R.y+1.4,R.z,V.x,V.y+1,V.z,6160282,.08,.4),ft(pe,6,V.x,V.y+1,V.z,{color:8257448,up:1,speed:1.5,g:-2,life:.6,size:.3}));break}case"down":{let R=Kt.get(E.id);R&&ft(pe,8,R.x,R.y+.6,R.z,{color:16728160,speed:3,life:.4,size:.35});break}case"rise":{let R=Kt.get(E.id);R&&(ft(pe,10,R.x,R.y+.5,R.z,{color:8257448,up:1,speed:2,g:-2,life:.6,size:.35}),He(R.x,R.y,R.z,R.x,R.y+6,R.z,8257448,.25,.5));break}case"wallhit":ft(pe,10,E.x,1.2,Vt-.2,{colors:[16726586,16752704],speed:4,g:4,life:.4,size:.4}),ft(ht,5,E.x,1,Vt-.2,{color:6971e3,speed:3,up:.5,g:9,life:.8,size:.3}),St=Math.max(St,.25+Math.min(.4,(E.d||1)*.1)),rs=C;break;case"block":Bi=C,ft(pe,6,E.x,2.5,Vt-1.2,{color:8050943,speed:3,life:.35,size:.4});break;case"toll":St=Math.max(St,1.2),rs=C;break;case"boss":St=Math.max(St,1),ge(0,.2,nn+4,16726634,14,1.2);break;case"bossatk":{ae.atkT=C;let R=ae.x,V=ae.z,me=ye[ae.id]?.top||8;if(E.kind==="summon"){ge(R,.2,V,11550975,7,.9),ft(pe,30,R,1,V,{colors:[11550975,16726634],speed:6,up:.4,g:2,life:.8,size:.6});break}E.kind==="beam"?He(R,me*.6,V+1,E.x,E.blocked?3.2:1.5,E.blocked?Vt-1.4:Vt,E.blocked?8050943:16722522,.55,.7):(ge(R,.15,V,16726634,16,.9),ft(ht,20,R,.3,V,{color:4864600,speed:6,up:.6,g:12,life:.9,size:.5})),E.blocked?Bi=C:rs=C,St=Math.max(St,E.blocked?.5:1),ft(pe,18,E.x,2,Vt-.5,{colors:E.blocked?[8050943,16777215]:[16722522,16752704],speed:6,g:3,life:.5,size:.6});break}case"bossdown":case"retreat":ae.dieT=C,St=Math.max(St,1.4),rs=C,ge(ae.x,.2,ae.z,16765773,16,1.2),He(ae.x,0,ae.z,ae.x,40,ae.z,E.k==="bossdown"?16769152:11550975,2.4,1.2);break;case"ult":{Ia=C,St=Math.max(St,1.1),rs=C;let R=0;for(let[,V]of ve){if(R++>9)break;He(V.x,0,V.z,V.x,30,V.z,E.p<1?8050943:16769152,.9,.7),ft(pe,6,V.x,.5,V.z,{colors:[16777215,16769152],speed:5,g:2,life:.5,size:.6})}ge(0,.2,-10,16769152,20,1);break}case"pulse":Bi=C,ge(0,kn,Vt,8050943,14,.9);break;case"volley":{let R=Kt.get(E.id);R&&(ge(R.x,R.y+.1,R.z,16765773,1.6,.5),ft(pe,12,R.x,R.y+1.2,R.z,{colors:[16765773,16739029],up:1,speed:3,g:1,life:.6,size:.4}));break}case"gift":{let R=Kt.get(E.id);R&&ft(pe,14,R.x,R.y+1,R.z,{colors:[16739029,16765773,8384767],up:1,speed:3.5,g:2,life:.7,size:.4}),E.tier==="rune"&&(Bi=C,ge(0,kn,Vt+.5,8050943,12,.8)),E.tier==="awaken"&&R&&He(R.x,R.y,R.z,R.x,30,R.z,16769152,.7,1);break}case"bless":{let R=Kt.get(E.id);R&&He(R.x,R.y,R.z,R.x,25,R.z,E.why==="share"?8050943:16773280,.35,.8),E.why==="share"&&(Bi=C);break}case"class":{let R=Kt.get(E.id);R&&(ge(R.x,R.y+.1,R.z,Ql[E.c]||16777215,1.2,.4),ft(pe,8,R.x,R.y+.8,R.z,{color:Ql[E.c]||16777215,up:1,speed:2,g:-1,life:.5,size:.3}));break}case"join":{let R=Kt.get(E.id);R&&ft(pe,6,R.x,R.y+.6,R.z,{color:16777215,speed:2,life:.4,size:.3});break}case"wave":ge(0,.2,nn+3,11550975,10,1);break;case"chapter":St=Math.max(St,.6),ge(0,.2,nn+3,16726634,18,1.4);break;case"end":Yn={saved:!!E.saved,t0:C},St=Math.max(St,1.2),rs=C;break;case"intro":case"gather":Yn=null,Ie.length=0;break}}let Ti=390,zi=844,at=new B,en=(E,C,R)=>(at.set(E,C,R).project(r),{x:(at.x*.5+.5)*Ti,y:(-at.y*.5+.5)*zi,vis:at.z<1&&at.z>-1});return{kind:"webgl",renderer:t,ready:m,scene:n,get loaded(){return!!d},get error(){return x},resize(E,C,R){Ti=E,zi=C,t.setPixelRatio(R),t.setSize(E,C,!1),r.aspect=E/C,r.fov=E/C<.7?52:42,r.updateProjectionMatrix(),pe.mat.uniforms.px.value=ht.mat.uniforms.px.value=C*R*.9,is.material.uniforms.px.value=C*R*.5},setQuality(E){ui=E,At=E.particles},frame:Rn,fx:kr,project:en,enemyTop(E){let C=ve.get(E);return C?en(C.x,C.y+(C.k===1?1.4:C.k===3?0:.8),C.z):null},bossTop(){let E=ye[ae.id];return!E||!E.g.visible?null:en(ae.x,E.top+.5,ae.z)},riftAt(){return en(0,Aa,nn)},drawn:()=>X,shake(E){St=Math.max(St,E)},stats(){let E=t.info;return{calls:E.render.calls,tris:E.render.triangles,tex:E.memory.textures,geo:E.memory.geometries,chars:d?[...Kt.values()].filter(C=>C.a).length:Fe.body.count,loaded:!!d,enemies:d?nt.reduce((C,R)=>C+[...R.run,...R.atk].reduce((V,me)=>V+me.count,0),0):ue.impBody.count+ue.bruBody.count+ue.wrBody.count,parts:pe.list.length+ht.list.length,bolts:Ie.length}},dispose(){p=!0,n.traverse(E=>{E.isInstancedMesh&&E.dispose()});for(let E of a)E.dispose?.();u&&u.dispose(),d&&d.dispose(),t.dispose()},loseContext(){try{t.forceContextLoss()}catch{}}}}var gm=s=>"#"+(s>>>0).toString(16).padStart(6,"0"),gy=["#d02a3a","#6a4a8a","#9a5aff"];function bm(s){let e=s.getContext("2d"),t=390,n=844,i=1,r=0,a=0,o=-9,c=null,l=null,h=[],f=new Map,d=[],u=b=>Math.max(0,Math.min(1,(b-nn+2)/(6-nn+2))),p=b=>.35+.65*u(b),x=(b,S)=>t/2+b*(t/24)*p(S),m=(b,S)=>n*.2+u(S)*n*.42-b*n*.018*p(S),g=(b,S,M)=>({x:x(b,M),y:m(S,M),vis:!0});function v(b,S,M){r=M,h.length=0,f.clear(),l=null,e.setTransform(i,0,0,i,0,0);let _=a>0?(a-=S,(Math.random()-.5)*10*a):0;e.translate(_,0);let w=b.phase==="ending"&&c===!0,D=b.phase==="ending"&&c===!1,I=e.createLinearGradient(0,0,0,n*.6);if(I.addColorStop(0,w?"#5a7ad8":"#08051a"),I.addColorStop(1,w?"#ffb070":D?"#5a0a14":"#3a1240"),e.fillStyle=I,e.fillRect(-10,0,t+20,n),!w){let z=x(0,nn),le=m(7.5,nn),J=t*.16*(1+.05*Math.sin(M*3)),Q=e.createRadialGradient(z,le,J*.2,z,le,J*1.6);Q.addColorStop(0,"#1a0020"),Q.addColorStop(.45,"#b040ff"),Q.addColorStop(.7,"rgba(255,40,90,0.5)"),Q.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=Q,e.beginPath(),e.ellipse(z,le,J*1.6,J*2,0,0,Math.PI*2),e.fill()}let U=m(0,nn),L=e.createLinearGradient(0,U,0,n);L.addColorStop(0,"#2a1a34"),L.addColorStop(1,"#120a18"),e.fillStyle=L,e.fillRect(-10,U,t+20,n),e.fillStyle="#1a1424";for(let z=0;z<10;z++){let le=-40+z*4.2;for(let J of[-1,1]){let Q=J*(11+z%3*4),he=5+z*7%9;e.fillRect(x(Q,le)-14*p(le),m(he,le),28*p(le),m(0,le)-m(he,le))}}let H=[...b.enemies].sort((z,le)=>z.z-le.z);for(let z of H){let le=p(z.z),J=x(z.x,z.z),Q=m(z.k===2?3.2:0,z.z),he=(z.k===1?16:z.k===3?44:9)*le;e.fillStyle=z.k===3?b.bo&&b.bo.id==="mastermind"?"#2a1030":"#e8e4ee":gy[z.k],e.beginPath(),e.ellipse(J,Q-he,he,he*1.2,0,0,Math.PI*2),e.fill(),e.fillStyle=z.k===3?"#ff2a4a":"#ffe14a",e.fillRect(J-he*.4,Q-he*1.3,he*.22,he*.15),e.fillRect(J+he*.2,Q-he*1.3,he*.22,he*.15),f.set(z.id,{x:J,y:Q-he*2.2}),z.k===3&&(l={x:J,y:Q-he*2.6,vis:!0})}let N=m(kn,Mi),Z=m(0,Mi);e.fillStyle="#5a5068",e.fillRect(-10,N,t+20,Z-N+n*.08),e.fillStyle="#7a6e8a";for(let z=0;z<14;z++)e.fillRect(z*t/13-6,N-10,16,10);let te=Math.max(0,Math.min(100,b.bar||0))/100;te>.02&&(e.strokeStyle=`rgba(110,200,255,${.25+te*.6})`,e.lineWidth=4,e.beginPath(),e.ellipse(t/2,Z,t*.52,n*.16,0,Math.PI,0),e.stroke());for(let z of b.members){let le=x(z.x,z.z),J=z.z<Mi-.1?m(0,z.z):N+4,Q=9*p(z.z);e.fillStyle=z.flags&Rt.down?"#555":gm(z.info?.color??16777215),e.beginPath(),e.arc(le,J-Q,Q,0,Math.PI*2),e.fill(),e.fillStyle=gm($i[z.cls]?.color??16777215),e.fillRect(le-Q*.5,J-Q*2.6,Q,Q*.6),z.flags&Rt.asc&&(e.strokeStyle="#ffd34d",e.lineWidth=2,e.beginPath(),e.arc(le,J-Q,Q*1.6,0,Math.PI*2),e.stroke()),h.push({id:z.id,x:z.x,y:0,z:z.z,sx:le,sy:J-Q*3,info:z.info,flags:z.flags,cls:z.cls,hp:z.hp})}for(let z of b.allies){let le=x(z.x,z.z),J=z.k?n*.22+Math.sin(M*2)*6:m(0,z.z);e.font=`${z.k?46:28}px sans-serif`,e.textAlign="center",e.fillText(z.k?"\u{1F409}":"\u{1F6E1}\uFE0F",le,J)}for(let z=d.length-1;z>=0;z--){let le=d[z],J=(M-le.t)/.4;if(J>1){d.splice(z,1);continue}e.fillStyle=`rgba(${le.c},${1-J})`,e.beginPath(),e.arc(le.x,le.y,6+J*18,0,Math.PI*2),e.fill()}M-o<.2&&(e.fillStyle=`rgba(255,255,255,${.35*(1-(M-o)/.2)})`,e.fillRect(0,0,t,n))}function y(b){if(b.k==="kill"){let S=g(b.x,.6,b.z);d.push({x:S.x,y:S.y,t:r,c:"200,90,255"})}(b.k==="wallhit"||b.k==="toll"||b.k==="bossatk")&&(a=Math.max(a,.5)),(b.k==="ult"||b.k==="bossdown"||b.k==="end")&&(o=r,a=Math.max(a,.6)),b.k==="end"&&(c=!!b.saved),(b.k==="intro"||b.k==="gather")&&(c=null)}return{kind:"2d",resize(b,S,M){t=b,n=S,i=Math.min(M,1.5),s.width=Math.round(b*i),s.height=Math.round(S*i),s.style.width=b+"px",s.style.height=S+"px"},setQuality(){},frame:v,fx:y,project:(b,S,M)=>{let _=h.find(w=>w.x===b&&w.z===M);return _?{x:_.sx,y:_.sy,vis:!0}:g(b,S,M)},enemyTop(b){let S=f.get(b);return S?{...S,vis:!0}:null},bossTop:()=>l,riftAt:()=>g(0,7.5,nn),drawn:()=>h,shake(b){a=Math.max(a,b)},stats:()=>({kind:"2d",chars:h.length,enemies:f.size}),dispose(){}}}function xm({silenceUrl:s="/assets/silence.mp3",record:e=!1}={}){let t={ctx:null,master:null,sfxGain:null,voiceGain:null,unlocked:!1,played:0,fails:0,cues:[],record:e,last:{},speakingUntil:0,muted:!1};try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}let n=new Audio;n.setAttribute("playsinline",""),n.preload="auto";function i(){if(t.ctx||e)return t.ctx;let u=window.AudioContext||window.webkitAudioContext;if(!u)return null;try{t.ctx=new u}catch{return null}return r(t.ctx,t.ctx.destination,t),t.ctx}function r(u,p,x){let m=u.createDynamicsCompressor();m.threshold.value=-14,m.ratio.value=6,m.attack.value=.003,m.release.value=.2,x.master=u.createGain(),x.master.gain.value=.9,x.sfxGain=u.createGain(),x.sfxGain.gain.value=.55,x.voiceGain=u.createGain(),x.voiceGain.gain.value=1,x.sfxGain.connect(x.master),x.voiceGain.connect(x.master),x.master.connect(m),m.connect(p)}t.unlock=()=>{let u=i();if(u){try{u.resume();let p=u.createBuffer(1,1,22050),x=u.createBufferSource();x.buffer=p,x.connect(u.destination),x.start(0)}catch{}t.elUnlocked||(n.src=s,n.play().then(()=>{n.pause(),t.elUnlocked=!0}).catch(()=>{})),t.unlocked=u.state==="running",setTimeout(()=>{t.unlocked=u.state==="running",t.onstate&&t.onstate(t.unlocked)},120)}},t.resume=()=>{t.ctx&&t.ctx.state!=="running"&&t.ctx.resume().catch(()=>{})},t.state=()=>e?"record":t.ctx?t.ctx.state:"none";let a=u=>{if(u.__noise)return u.__noise;let p=u.sampleRate,x=u.createBuffer(1,p,p),m=x.getChannelData(0),g=1;for(let v=0;v<p;v++)g=g*16807%2147483647,m[v]=g/10737418235e-1-1;return u.__noise=x,x};function o(u,p,x,m,g,v){p.gain.setValueAtTime(1e-4,x),p.gain.exponentialRampToValueAtTime(g,x+m),p.gain.exponentialRampToValueAtTime(1e-4,x+m+v)}function c(u,p,x,{type:m="sine",f0:g=440,f1:v=g,a:y=.005,d:b=.2,peak:S=.3,det:M=0}){let _=u.createOscillator(),w=u.createGain();_.type=m,_.frequency.setValueAtTime(g,x),v!==g&&_.frequency.exponentialRampToValueAtTime(Math.max(20,v),x+y+b),_.detune.value=M,o(u,w,x,y,S,b),_.connect(w).connect(p),_.start(x),_.stop(x+y+b+.05)}function l(u,p,x,{type:m="lowpass",f0:g=1e3,f1:v=g,q:y=.7,a:b=.003,d:S=.15,peak:M=.4}){let _=u.createBufferSource(),w=u.createBiquadFilter(),D=u.createGain();_.buffer=a(u),w.type=m,w.Q.value=y,w.frequency.setValueAtTime(g,x),v!==g&&w.frequency.exponentialRampToValueAtTime(Math.max(30,v),x+b+S),o(u,D,x,b,M,S),_.connect(w).connect(D).connect(p),_.start(x,Math.random()*.5),_.stop(x+b+S+.05)}let h={punch:(u,p,x,m=1)=>{l(u,p,x,{f0:1400,f1:300,d:.08,peak:.5*m}),c(u,p,x,{f0:150,f1:55,d:.1,peak:.55*m})},crit:(u,p,x)=>{h.punch(u,p,x,1.2),c(u,p,x,{type:"square",f0:1800,f1:900,d:.06,peak:.12}),l(u,p,x+.01,{type:"highpass",f0:3e3,d:.12,peak:.25})},block:(u,p,x)=>{c(u,p,x,{type:"triangle",f0:1200,f1:1100,d:.18,peak:.18}),c(u,p,x,{type:"triangle",f0:1810,d:.14,peak:.1})},ko:(u,p,x)=>{c(u,p,x,{type:"sine",f0:260,f1:980,a:.005,d:.16,peak:.35}),l(u,p,x,{type:"bandpass",f0:2500,f1:600,q:1.2,d:.25,peak:.35}),c(u,p,x+.09,{type:"triangle",f0:1320,d:.2,peak:.12})},dash:(u,p,x)=>{l(u,p,x,{type:"bandpass",f0:500,f1:3500,q:2,a:.04,d:.22,peak:.45})},shield:(u,p,x)=>{[880,1320,1760].forEach((m,g)=>c(u,p,x+g*.03,{type:"sine",f0:m,d:.45,peak:.09}))},boom:(u,p,x,m=1)=>{l(u,p,x,{f0:900,f1:80,a:.004,d:.9,peak:.8*m}),c(u,p,x,{f0:90,f1:28,d:.8,peak:.8*m})},whistle:(u,p,x)=>{c(u,p,x,{type:"sine",f0:1900,f1:500,a:.05,d:.95,peak:.07})},coin:(u,p,x)=>{c(u,p,x,{type:"square",f0:988,d:.07,peak:.1}),c(u,p,x+.07,{type:"square",f0:1319,d:.28,peak:.1})},power:(u,p,x)=>{[523,659,784,1047].forEach((m,g)=>c(u,p,x+g*.05,{type:"triangle",f0:m,d:.3,peak:.14})),l(u,p,x,{type:"highpass",f0:2e3,f1:6e3,a:.1,d:.4,peak:.12})},heal:(u,p,x)=>{[660,880,1100].forEach((m,g)=>c(u,p,x+g*.06,{f0:m,d:.25,peak:.08}))},beep:(u,p,x)=>{c(u,p,x,{f0:880,d:.12,peak:.22})},go:(u,p,x)=>{c(u,p,x,{type:"sawtooth",f0:660,d:.5,peak:.12}),c(u,p,x,{type:"square",f0:1320,d:.5,peak:.08}),l(u,p,x,{f0:4e3,f1:500,d:.4,peak:.25})},land:(u,p,x)=>{c(u,p,x,{f0:120,f1:50,d:.12,peak:.3}),l(u,p,x,{f0:600,d:.1,peak:.15})},spin:(u,p,x)=>{l(u,p,x,{type:"bandpass",f0:300,f1:2400,q:3,a:.08,d:.35,peak:.5}),h.punch(u,p,x+.25,1.1)},cheer:(u,p,x)=>{l(u,p,x,{type:"bandpass",f0:1200,f1:1500,q:.6,a:.25,d:2.2,peak:.35}),l(u,p,x+.1,{type:"bandpass",f0:2600,f1:2200,q:.8,a:.3,d:2,peak:.18})},fanfare:(u,p,x)=>{[[523,0],[659,.12],[784,.24],[1047,.38],[784,.6],[1047,.72]].forEach(([m,g],v)=>{c(u,p,x+g,{type:"sawtooth",f0:m,d:v===5?.9:.16,peak:.07}),c(u,p,x+g,{type:"triangle",f0:m*2,d:v===5?.9:.16,peak:.05})}),h.cheer(u,p,x+.2)},nuke:(u,p,x)=>{h.boom(u,p,x,1.3),h.boom(u,p,x+.25,1),c(u,p,x,{type:"sawtooth",f0:220,f1:40,d:1.6,peak:.25})},pop:(u,p,x)=>{c(u,p,x,{f0:500,f1:1400,d:.07,peak:.15})},creak:(u,p,x)=>{c(u,p,x,{type:"sawtooth",f0:95,f1:140,a:.08,d:.7,peak:.07,det:8}),c(u,p,x+.05,{type:"square",f0:190,f1:120,a:.1,d:.6,peak:.03}),l(u,p,x,{type:"bandpass",f0:900,f1:500,q:6,a:.1,d:.6,peak:.12})},ghost:(u,p,x)=>{c(u,p,x,{type:"sine",f0:520,f1:760,a:.25,d:.9,peak:.08,det:15}),c(u,p,x+.1,{type:"sine",f0:780,f1:500,a:.3,d:.9,peak:.05})},thunder:(u,p,x)=>{l(u,p,x,{f0:500,f1:60,a:.02,d:1.8,peak:.6}),l(u,p,x+.15,{f0:250,f1:50,a:.1,d:1.6,peak:.45})},bell:(u,p,x)=>{[[110,.25],[220,.12],[277,.07],[330,.06],[440,.04]].forEach(([m,g])=>c(u,p,x,{type:"sine",f0:m,a:.004,d:2.6,peak:g}))},organ:(u,p,x)=>{[[147,0],[175,0],[220,0],[294,.02],[131,.6],[165,.6],[196,.6],[262,.62]].forEach(([m,g])=>{c(u,p,x+g,{type:"sawtooth",f0:m,a:.04,d:g?.9:.55,peak:.035}),c(u,p,x+g,{type:"triangle",f0:m*2,a:.04,d:g?.9:.55,peak:.03})})},heart:(u,p,x)=>{c(u,p,x,{f0:70,f1:45,d:.12,peak:.45}),c(u,p,x+.17,{f0:62,f1:40,d:.14,peak:.35})},chime:(u,p,x)=>{[1319,1568,1976,2637].forEach((m,g)=>c(u,p,x+g*.07,{type:"sine",f0:m,d:.6,peak:.07}))},trap:(u,p,x)=>{l(u,p,x,{type:"bandpass",f0:3e3,f1:300,q:1.5,a:.01,d:.35,peak:.4}),h.boom(u,p,x+.22,.7)},shatter:(u,p,x)=>{for(let m=0;m<6;m++)c(u,p,x+m*.035,{type:"triangle",f0:2200+m*430,f1:1800,d:.12,peak:.06});l(u,p,x,{type:"highpass",f0:4e3,d:.4,peak:.3})},wind:(u,p,x)=>{l(u,p,x,{type:"bandpass",f0:380,f1:700,q:4,a:.9,d:2.2,peak:.12})},squeak:(u,p,x)=>{c(u,p,x,{type:"triangle",f0:900,f1:1300,d:.08,peak:.07})},roar:(u,p,x)=>{c(u,p,x,{type:"sawtooth",f0:120,f1:60,a:.05,d:.9,peak:.16,det:20}),l(u,p,x,{type:"lowpass",f0:1200,f1:300,a:.05,d:.9,peak:.35})}},f={squeak:.06,ghost:.25,heart:.3,punch:.045,crit:.06,block:.08,ko:.08,heal:.15,land:.06,pop:.05,coin:.05,boom:.06};t.sfx=(u,p=t.now(),x=1)=>{if(t.muted||!h[u])return;let m=f[u]||.03;if(t.last[u]&&p-t.last[u]<m)return;if(t.last[u]=p,e){t.cues.push({k:"sfx",kind:u,t:p,v:x});return}let g=t.ctx;if(!(!g||g.state!=="running"))try{h[u](g,t.sfxGain,g.currentTime+.01,x)}catch{}},t.now=()=>e?t.clock():t.ctx?t.ctx.currentTime:0,t.clock=()=>0;let d=null;return t.voice=async(u,p)=>{if(t.muted||!u)return!1;if(t.speakingUntil=t.now()+(p||2),e)return t.cues.push({k:"voice",url:u,t:t.now(),dur:p}),!0;let x=t.ctx;if(x&&x.state!=="running"&&t.resume(),x&&x.state==="running")try{let m=await fetch(u).then(b=>{if(!b.ok)throw new Error("HTTP "+b.status);return b.arrayBuffer()}),g=await new Promise((b,S)=>{let M=x.decodeAudioData(m,b,S);M&&M.catch&&M.catch(S)});if(d)try{d.stop()}catch{}let v=x.createBufferSource();v.buffer=g,v.connect(t.voiceGain);let y=x.currentTime+.02;return t.sfxGain.gain.setTargetAtTime(.28,y,.05),t.sfxGain.gain.setTargetAtTime(.55,y+g.duration,.2),v.start(y),d=v,t.played++,v.onended=()=>{d===v&&(d=null)},!0}catch{t.fails++}try{return n.src=u,await n.play(),t.played++,!0}catch{return t.fails++,!1}},t.mix=async(u,p=44100)=>{let x=window.OfflineAudioContext||window.webkitOfflineAudioContext,m=new x(2,Math.ceil(u*p),p),g={};r(m,m.destination,g);let v=t.cues.filter(L=>L.k==="voice"),y=await Promise.all(v.map(L=>fetch(L.url).then(H=>H.arrayBuffer()).then(H=>m.decodeAudioData(H)).catch(()=>null)));for(let L of t.cues)if(L.k==="sfx"&&L.t<u)try{h[L.kind](m,g.sfxGain,L.t+.01,L.v)}catch{}v.forEach((L,H)=>{let N=y[H];if(!N||L.t>=u)return;let Z=m.createBufferSource();Z.buffer=N,Z.connect(g.voiceGain),Z.start(L.t+.02),g.sfxGain.gain.setTargetAtTime(.28,L.t,.05),g.sfxGain.gain.setTargetAtTime(.55,L.t+N.duration,.2)});let b=await m.startRendering(),S=b.length,M=[b.getChannelData(0),b.getChannelData(1)],_=new DataView(new ArrayBuffer(44+S*4)),w=(L,H)=>{for(let N=0;N<H.length;N++)_.setUint8(L+N,H.charCodeAt(N))};w(0,"RIFF"),_.setUint32(4,36+S*4,!0),w(8,"WAVEfmt "),_.setUint32(16,16,!0),_.setUint16(20,1,!0),_.setUint16(22,2,!0),_.setUint32(24,p,!0),_.setUint32(28,p*4,!0),_.setUint16(32,4,!0),_.setUint16(34,16,!0),w(36,"data"),_.setUint32(40,S*4,!0);let D=44;for(let L=0;L<S;L++)for(let H=0;H<2;H++){let N=Math.max(-1,Math.min(1,M[H][L]));_.setInt16(D,N*32767,!0),D+=2}let I=new Uint8Array(_.buffer),U="";for(let L=0;L<I.length;L+=32768)U+=String.fromCharCode.apply(null,I.subarray(L,L+32768));return btoa(U)},t}function _m(s,{off:e=!1}={}){let t=Math.random().toString(36).slice(2,8),n=performance.now(),i=[];addEventListener("error",o=>{i.push(String(o.message||"error").slice(0,110)),i.length>3&&i.shift()}),addEventListener("unhandledrejection",o=>{i.push(("rej "+(o.reason&&o.reason.message||o.reason)).slice(0,110)),i.length>3&&i.shift()});let r=o=>{let c=s();return{id:t,reason:o,up:(performance.now()-n)/1e3,ua:navigator.userAgent.slice(0,160),scr:{w:screen.width,h:screen.height,dpr:devicePixelRatio},vis:document.visibilityState,errs:i.slice(),...c,mem:{...c.mem||{},heap:performance.memory?performance.memory.usedJSHeapSize/1048576:void 0}}},a=o=>{if(e)return;let c=r(o),l=JSON.stringify(c);if(o==="start")try{let h=JSON.parse(localStorage.getItem("lg_diagLast")||"null");h&&h.reason!=="pagehide"&&(l=JSON.stringify({...c,prev:h}))}catch{}try{localStorage.setItem("lg_diagLast",JSON.stringify(c))}catch{}try{navigator.sendBeacon&&navigator.sendBeacon("/diag",new Blob([l],{type:"text/plain"}))||fetch("/diag",{method:"POST",body:l,keepalive:!0}).catch(()=>{})}catch{}};return setTimeout(()=>a("start"),4e3),setInterval(()=>a("tick"),3e4),document.addEventListener("visibilitychange",()=>{document.hidden&&a("hidden")}),addEventListener("pagehide",()=>a("pagehide")),{send:a,errs:i}}var Ea=(s,e)=>s[Math.floor(e()*s.length)%s.length],ko=s=>s>=1e9?`${(Math.floor(s/1e7)/100).toString()} billion`:s>=1e6?`${Math.round(s/1e6)} million`:`${Math.max(0,Math.round(s)).toLocaleString("en-US")}`,Sf=s=>(s.charAt(0)+s.slice(1).toLowerCase()).replace("mastermind","Mastermind"),Pr=[125e7,1e9,75e7,5e8,25e7,1e8],by={scientist:"He was a father once. Now the book speaks through him. The Corrupted Scientist... walks out of the rift!",scientist2:"The stone has fused with his heart. The Scientist... unbound! Hit him with everything!",mastermind:"At last. The one who stole five billion souls. The Mastermind... steps into the light!"},xy={scientist:"The Corrupted Scientist falls back into the dark. For a moment... he remembers his daughter.",scientist2:"The Scientist is broken! The stone cracks... and the rift screams.",mastermind:"The Mastermind is destroyed!"};function vm({nameOf:s,rng:e=Math.random,survivors:t=()=>15e8}){let n=[],i=0,r=0,a=(p,x,m,g={})=>({text:p,pri:x,banner:m||null,...g}),o={gather:["To defend the wall, comment mage, warrior, archer or healer. Or just comment anything to join.","Mages throw fire. Warriors hold the gate. Archers shoot the flying wraiths. Healers keep everyone alive.","Likes charge the Ascension barrier. Keep tapping the screen!","Gifts are power. Any small gift fires a spell volley. Five coins carves a shield rune. Thirty coins summons a golden guardian.","One hundred coins awakens the Ascension ultimate. Five hundred coins calls the dragon!","Follow for a blessing. Share the live and the fallen rise again."],fight:["Likes charge the barrier! Tap, tap, tap!","Comment a class to switch: mage, warrior, archer or healer.","Send a gift for a spell volley right now!","Every survivor counts. Do not let them reach the wall!"]},c="gather",l=-99,h=0,f={gather:0,fight:0},d={gather:[5,7],fight:[10,15]},u=p=>{let x=p.map(s).filter(Boolean);if(!x.length)return"";let m=x.slice(0,3),g=x.length-m.length;return(m.length===1?m[0]:m.slice(0,-1).join(", ")+" and "+m[m.length-1])+(g>0?` and ${g} more`:"")};return{lines(p,x){let m=[];for(let b of p){let S=b.id?s(b.id):null,M={intro:"other",gather:"gather",wave:"fight",boss:"other",vote:"other",end:"other",clear:"fight"}[b.k];switch(M&&(c=M),b.k){case"intro":r=0;break;case"lore":m.push(a(Ni[b.i].say,10,null,{win:1,lore:b.i}));break;case"gather":m.push(a(Ea(["Survivors, to the wall! Comment mage, warrior, archer or healer to take your post.","The citadel needs you. Comment to join the defense. Pick a class: mage, warrior, archer, healer."],e),8,"TO THE WALL!",{win:1}));break;case"chapter":m.push(a(`Chapter ${b.n}. ${b.title.toLowerCase().replace(/(^|\s)\S/g,_=>_.toUpperCase())}.`,9,`CHAPTER ${b.n}`,{win:1}));break;case"wave":m.push(a(b.i===1?Ea(["They are coming. Hold the wall!","The rift opens wide. Here they come!"],e):Ea([`Wave ${b.n}. Stronger. Hungrier.`,`Wave ${b.n}! Keep firing!`,"Another wave pours out of the rift."],e),5,`WAVE ${b.n}`));break;case"clear":m.push(a(Ea(["The field is clear. Breathe.","Wave broken. Well fought, survivors.","They fall back. Ready yourselves."],e),4,"WAVE CLEARED"));break;case"boss":m.push(a(by[b.id]||`${b.name} has come!`,10,"BOSS!",{win:1}));break;case"bossatk":b.kind==="summon"?m.push(a("He calls more creatures from the rift!",5)):b.downed&&b.downed.length>2&&m.push(a(b.blocked?"The barrier holds against the blast!":"A dark blast hits the wall! Healers, raise them!",6));break;case"bossdown":{let _=b.by?s(b.by):null;m.push(a(`${xy[b.id]||`${b.name} is defeated!`}${_?` Final blow: ${_}!`:""}`,10,"BOSS DEFEATED!",{win:1}));break}case"retreat":m.push(a(`${b.name} retreats into the rift... and drags souls with him.`,9,"SOULS TAKEN"));break;case"toll":m.push(a(`${ko(b.n)} souls taken.`,6));break;case"vote":if(b.start){let _=Qi[b.i];m.push(a(`${Sf(_.q)}. ${Sf(_.a.label)}? Comment one. Or ${_.b.label.toLowerCase()}? Comment two. Choose!`,10,"VOTE!",{win:1}))}break;case"choice":{let _=Qi[b.i],w=_[b.key===_.a.key?"a":"b"];m.push(a(`${b.none?"Nobody chose. Fate decides. ":"The survivors have chosen. "}${Sf(w.label)}. ${Vl[b.key].text}`,10,w.label,{win:1}));break}case"end":{let _=(b.top||[]).map(s).filter(Boolean),w=b.saved?(Yp[(b.choices||[]).join("-")]||"Earth is saved. {n} survivors live on.").replace("{n}",ko(b.survivors)):`The last light goes out. Earth has fallen... on wave ${b.wave}.`;m.push(a(`${b.saved?"Earth is saved! ":""}${w}${_.length?` Top defender: ${_[0]}! Shoutout to ${_[0]}!`:""} ${b.saved?"The Ascension System remembers you.":"But the Ascension System will rise again."}`,10,b.saved?"EARTH SAVED":"EARTH FELL",{win:1}));break}case"gift":{let _={volley:b.coins>=2?`${S} unleashes a spell volley!`:null,rune:`${S} carves a shield rune into the wall!`,guardian:b.extended?`${S} renews a guardian's oath!`:`${S} summons a guardian hero to the gate!`,awaken:b.cool?`${S} ascends! Power times three!`:`${S} awakens the Ascension System! Ultimate!`,dragon:b.judgment?`${S} calls the dragon! Judgment on the boss!`:`${S} summons a dragon! Burn them all!`}[b.tier];_&&m.push(a(_,{volley:4,rune:6,guardian:8,awaken:9,dragon:10}[b.tier],{volley:null,rune:"SHIELD RUNE",guardian:"GUARDIAN!",awaken:"ASCENSION!",dragon:b.judgment?"JUDGMENT!":"DRAGON!"}[b.tier],{gift:b.tier}));break}case"bless":m.push(a(b.why==="follow"?`${S} follows. A blessing of light upon you.`:`${S} shares the signal! The fallen rise and the barrier glows!`,4));break;case"pulse":m.push(a("The likes charge the barrier! Ascension pulse!",7,"ASCENSION PULSE"));break;case"class":!b.bot&&S&&e()<.35&&m.push(a(`${S} becomes ${/^[aeiou]/i.test($i[b.c].label)?"an":"a"} ${$i[b.c].label.toLowerCase()}.`,2));break;case"join":b.bot||n.push(b.id);break}}let g=t();for(;r<Pr.length&&g<Pr[r];)g>0&&(r+1>=Pr.length||g>=Pr[r+1])&&m.push(a(Ea([`Only ${ko(Pr[r])} survivors left. Hold on!`,`We are down to ${ko(Pr[r])}. Do not let them through!`],e),7,`${ko(Pr[r]).toUpperCase()} LEFT`)),r++;if(n.length&&x-i>6){i=x;let b=n.splice(0,60);m.push(a(Ea([`${u(b)} join the defense.`,`Welcome to the wall, ${u(b)}.`],e),2))}m.length&&(l=x);let v=o[c],y=d[c];return v&&!m.length&&x-l>y[0]&&x-h>y[1]&&(h=x,l=x,m.push(a(v[f[c]++%v.length],2,null,{tip:1}))),m}}}var ym=["Sara","Ali","Hina","Omar","Zara","Bilal","Noor","Ayan","Esha","Faraz","Iman","Junaid","Kinza","Laiba","Moiz","Nimra","Rida","Saad","Tania","Umer","Maya","Leo","Aisha","Yusuf","Lina","Kai","Mia","Zain","Sofia","Adam","Hamza","Amna","Riya","Dev","Luna","Max"],Mm=["","_x","22",".official","_99","\u{1F338}","xo","_07",".live","\u2728","_pk","786"],Sm=["hi","join","lets go","me!","hello from dubai","gg","this is fire","shield","dash","\u{1F4A8}","\u{1F6E1}\uFE0F","dance","color pink","color gold","revenge","wow","\u{1F525}\u{1F525}","i will win","play","1","2","3","2","left","right","3\uFE0F\u20E3","candle","clock","echo","map","attack","mage","warrior","archer","healer","\u{1F52E}","\u{1F3F9}","seal","hunt","city","army"],wm=[["Rose",1],["TikTok",1],["Finger Heart",5],["GG",1],["Doughnut",30],["Hand Hearts",100],["Corgi",299],["Money Gun",500],["Lion",29999]];function Tm(s="busy",e=Math.random){let t=l=>Math.floor(e()*l),n=[],i=()=>{let l=ym[t(ym.length)]+Mm[t(Mm.length)],h={uid:l.toLowerCase().replace(/[^\w.]/g,"")+n.length,name:l};return n.push(h),h},r=()=>n.length?n[t(n.length)]:i(),a=0,o=0,c=s==="quiet"?3:s==="gifts"?30:s==="demo"?40:220;return{people:n,tick(l){a+=l,o+=l;let h=[],f=s==="quiet"?.6:s==="busy"?Math.min(14,2+a/6):s==="demo"?5:4;for(;o>1/f;){o-=1/f;let u=n.length<Math.min(c,s==="busy"?10+a*2.5:c)&&e()<.6?i():r(),p=e();if(p<.5){let x=Sm[t(Sm.length)];if(e()<.25&&n.length>2){let m=r();m!==u&&(x=(e()<.5?"attack ":"\u2694\uFE0F ")+m.name.replace(/[^\w]/g,"").slice(0,6))}h.push({type:"chat",uid:u.uid,name:u.name,text:x})}else if(p<.8)h.push({type:"like",uid:u.uid,name:u.name,count:1+t(15)});else if(p<(s==="gifts"?.98:.9)){let x=e()<.75?wm[t(4)]:wm[4+t(s==="gifts"?4:3)];h.push({type:"gift",uid:u.uid,name:u.name,giftName:x[0],coins:x[1],count:e()<.2?1+t(5):1})}else p<.95?h.push({type:"follow",uid:u.uid,name:u.name}):h.push({type:"share",uid:u.uid,name:u.name})}return h}}}var sn=new URLSearchParams(location.search),Hn=s=>document.getElementById(s),uh=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Go=sn.get("mode")==="phone"||sn.get("mode")!=="pc"&&(uh||/Android|Mobile/.test(navigator.userAgent)),wi=sn.get("render")==="1",Ca=wi||sn.get("local")==="1",Lf=sn.get("key")||"",Ho=Number(sn.get("fps"))||(Go?30:60),Hm=sn.get("mute")==="1";sn.get("clean")==="1"&&document.body.classList.add("clean");var Vm=Go?[{pr:1.5,maxW:780,labels:12,particles:1,dust:!0,props:!0,chars:36,animLod:1},{pr:1.25,maxW:700,labels:10,particles:.75,dust:!0,props:!0,chars:30,animLod:1},{pr:1,maxW:600,labels:8,particles:.5,dust:!1,props:!0,chars:24,animLod:2},{pr:.8,maxW:480,labels:6,particles:.35,dust:!1,props:!1,chars:16,animLod:2}]:[{pr:2,maxW:Number(sn.get("maxw"))||1080,labels:14,particles:1,dust:!0,props:!0,chars:60,animLod:1},{pr:1.5,maxW:900,labels:12,particles:1,dust:!0,props:!0,chars:48,animLod:1},{pr:1,maxW:700,labels:10,particles:.6,dust:!1,props:!0,chars:36,animLod:2},{pr:.8,maxW:540,labels:8,particles:.4,dust:!1,props:!1,chars:24,animLod:2}],Kn=sn.has("q")?Math.max(0,Math.min(3,Number(sn.get("q")))):0,_y=sn.has("q"),ts=Hn("gl"),gt=null,Wm=0,qm=0,ih=[],Ys=!1,Nr=Hn("hud"),Ee=Nr.getContext("2d");function Xm(){if(!(sn.get("view")==="2d"||localStorage.getItem("lg_force2d")==="1"))try{gt=mm(ts,{maxChars:70,particles:Go?800:1200,aa:!Go||uh,preserve:wi}),gt.ready&&gt.ready.catch(()=>Oi("models-fail")),ts.addEventListener("webglcontextlost",Vo,!1),ts.addEventListener("webglcontextrestored",jm,!1);return}catch{Oi("gl-fail")}fh()}function fh(){if(gt&&gt.kind==="2d")return;try{gt&&gt.dispose(),gt&&gt.loseContext&&gt.loseContext()}catch{}let s=document.createElement("canvas");s.id="gl",ts.replaceWith(s),ts=s,gt=bm(ts,{}),Oi("view-2d"),Zs()}function Vo(s){s.preventDefault(),Wm++,Ys=!0,Oi("ctx-lost"),ih.push(performance.now()),ih=ih.filter(e=>performance.now()-e<12e4),e0(),clearTimeout(Vo.t),Vo.t=setTimeout(()=>{Ys&&(localStorage.setItem("lg_force2d","1"),fh(),Ys=!1,hh())},4e3),Of&&Of.send("ctxlost")}function jm(){if(clearTimeout(Vo.t),qm++,Oi("ctx-restored"),ih.length>=3){localStorage.setItem("lg_force2d","1"),fh(),Ys=!1,hh();return}try{gt.dispose()}catch{}ts.removeEventListener("webglcontextlost",Vo),ts.removeEventListener("webglcontextrestored",jm),gt=null,Xm(),Kn=Math.min(3,Kn+1),Zs(),Ys=!1,hh()}var oh=390,Wo=844;function Zs(){let s=window.innerWidth,e=window.innerHeight,t=Hn("stage"),n=s,i=e;s/e>.7&&(n=Math.round(Math.min(s,e*9/16)),i=Math.round(Math.min(e,n*16/9))),t.style.width=n+"px",t.style.height=i+"px",oh=n,Wo=i,document.documentElement.style.setProperty("--u",(n/100).toFixed(3)+"px");let r=Vm[Kn],a=window.devicePixelRatio||1,o=Math.min(a,r.pr,r.maxW/n);gt&&(gt.resize(n,i,o),gt.setQuality(r));let c=Math.min(a,2,900/n);Nr.width=Math.round(n*c),Nr.height=Math.round(i*c),Nr.__pr=c}addEventListener("resize",()=>{clearTimeout(Zs.t),Zs.t=setTimeout(Zs,120)});var wn=xm({record:wi});wn.muted=Hm;var Km=Hn("soundChip");function vy(){wn.unlock(),setTimeout(()=>{wn.state()==="running"&&(Km.hidden=!0)},200)}["pointerdown","touchstart","click","keydown"].forEach(s=>addEventListener(s,vy,{passive:!0}));document.addEventListener("visibilitychange",()=>{document.hidden||wn.resume()});!wi&&!Hm&&(wn.unlock(),setTimeout(()=>{wn.state()!=="running"&&(Km.hidden=!1)},700));var $s=new Map,sh=[],Oi=s=>{sh.push(s),sh.length>8&&sh.shift()},ns={ws:0,snaps:0,ev:0,err:0,say:0},Jn=[],Es=null,Am=0,Em="",Rm=No,Bf=null,eh="",Sn={phase:"intro",members:[],enemies:[],allies:[],tl:0,pd:1,ch:1,wv:0,wi:0,sv:15e8,bar:0,hype:0,vi:-1,vc:[0,0],cho:[],left:0,n:0,run:0,bo:null,best:0,saves:0},Cm=-1,yy=0,ch=null,lh=null;function Df(s=[],e=[]){for(let t of e)$s.delete(t);for(let t of s)$s.set(t.id,t)}var Ui=null,Uo=1e3;function Nf(){let s=(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws?game=siege"+(Lf?"&key="+encodeURIComponent(Lf):"");try{Ui=new WebSocket(s)}catch{return setTimeout(Nf,Uo)}Ui.onopen=()=>{ns.ws++,Uo=1e3,Oi("ws-open"),hh();try{let e=JSON.parse(localStorage.getItem("lg_siegeBoard")||"null");e&&e.json&&e.sig&&Ui.send(JSON.stringify({t:"restore",json:e.json,sig:e.sig}))}catch{}},Ui.onmessage=e=>{let t;try{t=JSON.parse(e.data)}catch{return}My(t)},Ui.onclose=()=>{Ui=null,Oi("ws-close"),setTimeout(Nf,Uo),Uo=Math.min(1e4,Uo*1.7),ns.ws&&e0()},Ui.onerror=()=>{}}function My(s){switch(s.t){case"hello":$s.clear(),Df(s.roster),Jn=[],Es=null,Rm=s.tiers||Rm,Um(s),Pm(s.snap);break;case"roster":Df(s.add,s.del);break;case"s":Pm(s);break;case"say":Zm(s.text,s.url,s.dur);break;case"banner":break;case"board":Um(s);break;case"status":eh=s.tiktok?.state||"",Hn("conn").className=eh==="connected"?"connected":/wait|connecting|reconnect/.test(eh)?"waiting":eh==="error"?"error":"",Vy(s.tiktok);break}}function Pm(s){if(!s)return;ns.snaps++;let t=performance.now()/1e3-s.tm;Es===null||t<Es||Math.abs(t-Es)>2?Es=t:Es+=(t-Es)*.02,Jn.length&&s.tm<Jn[Jn.length-1].tm-1&&(Jn=[],Es=t),Jn.push({tm:s.tm,s,done:!1}),Jn.length>40&&Jn.shift()}var Sy=.16;function wy(s){if(!Jn.length)return Sn;let e=s-Es-Sy;for(let r of Jn)if(!r.done&&r.tm<=e){r.done=!0;let a=e-r.tm>1.2;for(let o of r.s.ev||[])Ym(o,a)}let t=Jn[0],n=null;for(let r=0;r<Jn.length;r++)if(Jn[r].tm<=e)t=Jn[r];else{n=Jn[r];break}if(!n||n===t)return Ff(t.s,null,0);let i=Math.max(0,Math.min(1,(e-t.tm)/Math.max(.001,n.tm-t.tm)));return Ff(t.s,n.s,i)}var Ty=[],Ay=[],Ey=[],Ry={name:"?",color:16777215};function wf(s,e,t,n,i,r){let a=[],o=new Map;if(e)for(let l=0;l<e.length;l+=n)o.set(e[l],l);let c=0;for(let l=0;l<s.length;l+=n){let h=i[c]||(i[c]={});c++;let f=e?o.get(s[l]):void 0;r(h,s,l,f!==void 0?e:null,f,t),a.push(h)}return a}function Ff(s,e,t){let n=wf(s.f,e&&e.f,t,5,Ty,(c,l,h,f,d,u)=>{if(c.id=l[h],c.x=l[h+1],c.z=l[h+2],c.cls=l[h+3]&3,c.flags=l[h+3]>>Wu,c.hp=l[h+4],f){let p=f[d+1]-c.x,x=f[d+2]-c.z;Math.abs(p)+Math.abs(x)<4&&(c.x+=p*u,c.z+=x*u)}c.info=$s.get(c.id)||Ry}),i=wf(s.e,e&&e.e,t,5,Ay,(c,l,h,f,d,u)=>{c.id=l[h],c.k=l[h+1],c.x=l[h+2],c.z=l[h+3],c.hp=l[h+4],f&&(c.x+=(f[d+2]-c.x)*u,c.z+=(f[d+3]-c.z)*u)}),r=wf(s.al,e&&e.al,t,4,Ey,(c,l,h,f,d,u)=>{c.id=l[h],c.k=l[h+1],c.x=l[h+2],c.z=l[h+3],f&&(c.x+=(f[d+2]-c.x)*u,c.z+=(f[d+3]-c.z)*u)}),a=e&&t>.5?e:s;a.ph!==Em&&(Em=a.ph,Am=dh());let o=a.bo;return o&&e&&s.bo&&e.bo&&(o={...a.bo,hp:s.bo.hp+(e.bo.hp-s.bo.hp)*t}),Sn={phase:a.ph,members:n,enemies:i,allies:r,tl:a.tl,pd:a.pd,ch:a.ch,wv:a.wv,wi:a.wi,sv:a.sv,bar:e?s.bar+(e.bar-s.bar)*t:s.bar,hype:a.hype,vi:a.vi,vc:a.vc,cho:a.cho,left:a.left,n:a.n,run:a.run,bo:o,best:a.best,saves:a.saves,phaseStart:Am},Sn}var li=null,kf=null,Jm=null,Js=[],Im=0,Uf=0;function Cy(){let s={};for(let n of["introSeconds","gatherSeconds","chapterSeconds","breakSeconds","victorySeconds","voteSeconds","choiceSeconds","endingSeconds","minDefenders","spawnMul","enemyHpMul","dmgMul","startChapter","startWave","waveCap","bossCap","likePulse"])sn.has(n)&&(s[n]=Number(sn.get(n)));sn.get("lore")&&(s.loreCards=sn.get("lore").split(",").map(Number).filter(n=>n>=0&&n<Ni.length)),sn.get("bots")==="0"&&(s.bots=!1);let e=Number(sn.get("seed")||7),t=()=>(e=e*16807%2147483647,(e-1)/2147483646);li=new Xl(s,wi?t:Math.random),Jm=vm({nameOf:n=>li.byId.get(n)?.name||null,rng:wi?t:Math.random,survivors:()=>li.survivors}),sn.get("crowd")&&(kf=Tm(sn.get("crowd"),wi?t:Math.random)),window.__input=n=>li.input(n),window.__siege=li}var Tf=0;function Py(s,e){if(kf)for(let r of kf.tick(s))li.input(r);for(Tf+=s;Tf>=.05;)Tf-=.05,li.step(.05);let t=li.drainRoster();Df(t.add,t.del);let n=li.drain();for(let r of Jm.lines(n,li.t))Iy(r,e);let i=li.snapshot();for(let r of n)Ym(r,!1);return n.some(r=>r.k==="end"||r.k==="bossdown")&&(Bf={session:li.board(8),all:[],saves:li.saves}),Ff(i,null,0)}function Iy(s,e){let t={...s,at:e,p:null};for(t.p=fetch("/api/say?voice=narrator&text="+encodeURIComponent(s.text)).then(n=>n.json()).catch(()=>({url:null})),Uf++,t.p.finally(()=>Uf--),Js.push(t),Js.sort((n,i)=>i.pri-n.pri||n.at-i.at);Js.length>4;)Js.pop()}async function Bo(s){if(s<Im||!Js.length||Bo.busy)return;let e=Js.shift();if(!e.win&&s-e.at>(e.pri>=7?9:6))return;Bo.busy=!0;let t=await e.p;Bo.busy=!1;let n=dh(),i=t.dur||Math.min(7,.9+e.text.length/14);Zm(e.text,t.url,i),Im=n+i+.25}var Ly=s=>$s.get(s)?.name||"?",Dy=s=>"#"+(($s.get(s)?.color??16777215)>>>0).toString(16).padStart(6,"0");var Lm=0,Dm=0,Nm=0,Fm=0;function Ym(s,e){if(ns.ev++,!e&&gt&&!Ys)try{gt.fx(s,Sn)}catch{ns.err++}let t=(i,r)=>{e||wn.sfx(i,wn.now(),r)},n=dh();switch(s.k){case"intro":t("wind"),t("organ",.6),ch=null,lh=null,rh(-1),document.body.classList.add("cine");break;case"lore":t("bell",.5),t("whistle",.3),rh(s.i,s.sec);break;case"gather":t("go"),rh(-1),document.body.classList.remove("cine");break;case"chapter":t("bell"),t("organ");break;case"wave":t("roar",.6),t("heart",.6);break;case"clear":t("chime"),t("cheer",.5);break;case"boss":t("roar"),t("organ"),t("thunder");break;case"bossatk":t(s.kind==="summon"?"roar":"boom",s.blocked?.6:1),s.blocked&&t("shield"),!s.blocked&&s.kind!=="summon"&&Ir(.35);break;case"bossdown":t("nuke"),t("fanfare"),t("cheer"),Ir(.8);break;case"retreat":t("ghost"),t("thunder"),Ir(.4);break;case"victory":break;case"vote":s.start?(t("chime"),t("organ",.5)):n-Nm>.12&&(Nm=n,t("squeak",.35));break;case"choice":t("fanfare",.7),t("bell"),lh=s;break;case"shot":n-Lm>.07&&(Lm=n,t(s.c==="a"?"dash":s.c==="w"||s.c==="g"?"punch":s.c==="h"?"heal":"pop",s.c==="a"?.25:.35));break;case"dmg":{s.c&&n-Dm>.06&&(Dm=n,t(s.c===2?"crit":"punch",s.c===2?.8:.4));break}case"kill":n-Fm>.09&&(Fm=n,t(s.q===1?"boom":"pop",s.q===1?.7:.4));break;case"wallhit":t("boom",.5),t("shatter",.3);break;case"block":t("shield",.4);break;case"toll":t("trap"),t("ghost"),Ir(.5);break;case"down":t("ko",.4);break;case"rise":t("heal",.4);break;case"heal":break;case"gift":t("coin"),t(s.tier==="dragon"?"roar":s.tier==="awaken"?"nuke":s.tier==="guardian"?"land":"power",s.tier==="volley"?.5:1),(s.tier==="awaken"||s.tier==="dragon")&&Ir(.6);break;case"ult":t("nuke"),Ir(.5);break;case"pulse":t("shield"),t("cheer",.5);break;case"bless":t("power",.7);break;case"class":break;case"ally":break;case"end":t(s.saved?"fanfare":"thunder"),t(s.saved?"cheer":"ghost"),s.saved&&t("bell"),Ir(.9),ch=s,Ny(s);break}["shot","dmg","kill","vote","heal"].includes(s.k)||Oi(s.k)}function dh(){return wi?Ra:performance.now()/1e3}function Ir(s=.7){let e=Hn("flash");e.style.transition="none",e.style.opacity=String(s),e.offsetWidth,e.style.transition="opacity 0.9s ease-out",e.style.opacity="0"}var km=0;function Zm(s,e,t){ns.say++;let n=Math.max(1800,(t||2)*1e3+600);clearTimeout(km),km=zy(()=>{},n),e&&wn.voice(e,t)}function rh(s,e=5){let t=Hn("lore");if(s<0){t.hidden=!0,Cm=-1;return}let n=Ni[s];Cm=s,yy=dh(),t.hidden=!1,t.className="art-"+n.art,t.style.setProperty("--sec",e+"s"),Hn("loreArt").style.backgroundImage=`url(/siege/lore-${n.art}.jpg), radial-gradient(circle at 50% 45%, #6a20b0, #1a0630 70%)`,t.classList.remove("play"),t.offsetWidth,t.classList.add("play")}var $m=(s,e=10)=>(s=String(s||"?").replace(/\s+/g," ").trim(),[...s].length>e?[...s].slice(0,e-1).join("")+"\u2026":s);function Ny(s){let e=Hn("winner");e.className=s.saved?"saved":"fell",Hn("winIcon").textContent=s.saved?"\u{1F305}":"\u{1F311}";let t=(s.top||[]).filter(n=>$s.has(n));Hn("winName").textContent=t.length?$m(Ly(t[0]),18):"",t.length&&(Hn("winName").style.color=Dy(t[0])),e.hidden=!1,e.style.animation="none",e.offsetWidth,e.style.animation=""}function Um(s){if(!(!s||!s.session&&!s.all)&&(Bf=s,s.signed))try{localStorage.setItem("lg_siegeBoard",JSON.stringify(s.signed))}catch{}}var Om="",th={};function Fy(s){let e=Nr.__pr||1,t=oh/100;if(Ee.setTransform(1,0,0,1,0,0),Ee.clearRect(0,0,Nr.width,Nr.height),Ee.setTransform(e,0,0,e,0,0),!gt||Ys)return;let n=Sn,i=Vm[Kn];Ee.textAlign="center",Ee.textBaseline="middle",Ee.lineJoin="round";let r=(d,u)=>`${d} ${u}px -apple-system, "Segoe UI", Roboto, sans-serif`;if(n.phase==="intro")return;let o=(gt.drawn()||[]).map(d=>({f:d,s:(d.flags&Rt.cmd?8:0)+(d.flags&Rt.crown?7:0)+(d.flags&Rt.gift?6:0)+(d.flags&Rt.asc?5:0)+(d.flags&Rt.bot?0:3)}));o.sort((d,u)=>u.s-d.s);let c=o.length>12,l=Math.round(t*(c?2.3:2.6)),h=[],f=0;for(let{f:d}of o){if(f>=Math.min(i.labels,12))break;let u=gt.project(d.x,d.y,d.z);if(!u.vis||u.x<t*4||u.x>oh-t*4||u.y<Wo*.26||u.y>Wo*.8||h.some(S=>Math.abs(S.x-u.x)<t*10&&Math.abs(S.y-u.y)<t*3.4))continue;h.push(u),f++;let p=d.info||{},x=d.flags&Rt.bot,m=d.flags&Rt.down,g=(d.flags&Rt.crown?"\u{1F451}":"")+$m(x?String(p.name||"").replace(/^Bot\s+/i,""):p.name,c?8:10);Ee.globalAlpha=(m?.4:x?.55:.92)*(1-Math.min(.5,f/24)),Ee.font=r(700,l);let v=Math.min(Ee.measureText(g).width,t*22),y=l*1.3,b=u.y-y*.4;Ee.fillStyle=d.flags&Rt.asc?"rgba(120,80,0,0.6)":"rgba(8,4,20,0.5)",Lr(u.x-v/2-t,b-y/2,v+t*2,y,y/2),Ee.fill(),Ee.fillStyle="#"+((p.color??16777215)>>>0).toString(16).padStart(6,"0"),Ee.fillText(g,u.x,b+1,t*22),d.cls===1&&d.hp<100&&!m&&(Ee.fillStyle="rgba(0,0,0,0.55)",Ee.fillRect(u.x-t*3.5,b+y*.6,t*7,t*.5),Ee.fillStyle=d.hp>40?"#5dff9a":"#ff5a5a",Ee.fillRect(u.x-t*3.5,b+y*.6,t*7*Math.max(0,d.hp)/100,t*.5))}Ee.globalAlpha=1,Uy(s,t,r)}var ky=s=>s>=1e9?(s/1e9).toFixed(2)+"B":s>=1e6?Math.round(s/1e6)+"M":s>=1e3?Math.round(s/1e3)+"K":String(Math.max(0,Math.round(s)));function Uy(s,e,t){let n=Sn,i=n.phase;i!==Om&&(Om=i,th[i]=Math.max(1,n.tl||1)),n.tl>th[i]&&(th[i]=n.tl);let r=oh/2,a=Wo*.135,o=e*4.6,l=["gather","vote","boss","break","wave"].includes(i)&&n.tl>0?Math.max(0,Math.min(1,n.tl/(th[i]||1))):1,h=Math.max(0,Math.min(100,n.bar||0))/100,f=(i==="vote"||i==="gather")&&n.tl>0&&n.tl<=5&&!(i==="gather"&&n.n<1),d=!!(n.bo&&["wave","boss","break","victory"].includes(i)),u=d?"#ff6b8b":i==="vote"||i==="choice"?"#ffd36a":"#c77dff",p=f?1+.12*Math.max(0,Math.sin(n.tl%1*Math.PI)):1;Ee.save(),Ee.translate(r,a),Ee.scale(p,p),Ee.fillStyle="rgba(10,6,24,0.55)",Ee.beginPath(),Ee.arc(0,0,o+e*2.1,0,Math.PI*2),Ee.fill(),Ee.lineCap="round",Ee.lineWidth=e*1.1,Ee.strokeStyle="rgba(255,255,255,0.16)",Ee.beginPath(),Ee.arc(0,0,o,0,Math.PI*2),Ee.stroke(),Ee.strokeStyle=u,Ee.beginPath(),Ee.arc(0,0,o,-Math.PI/2,-Math.PI/2+Math.PI*2*l),Ee.stroke(),Ee.lineWidth=e*.7,Ee.strokeStyle="rgba(122,216,255,0.18)",Ee.beginPath(),Ee.arc(0,0,o+e*1.35,0,Math.PI*2),Ee.stroke(),Ee.strokeStyle="#7ad8ff",h>0&&(Ee.beginPath(),Ee.arc(0,0,o+e*1.35,-Math.PI/2,-Math.PI/2+Math.PI*2*h),Ee.stroke()),Ee.fillStyle="#fff",f?(Ee.font=t(900,Math.round(e*4.4)),Ee.fillText(String(Math.ceil(n.tl)),0,e*.3)):(Ee.font=`${Math.round(e*4)}px sans-serif`,Ee.fillText(i==="vote"||i==="choice"?"\u{1F5F3}\uFE0F":d?"\u{1F480}":i==="ending"?ch&&ch.saved?"\u{1F305}":"\u{1F311}":"\u{1F6E1}\uFE0F",0,e*.3)),Ee.restore();let x=Math.max(0,Dr),m=x/15e8,g=Math.max(0,1-(s-Qm)/.6);Ee.font=t(900,Math.round(e*3.2));let v="\u{1F30D} "+ky(x),y=Ee.measureText(v).width,b=a+o+e*5,S=r+(g>0?(Math.random()-.5)*e*g:0);Ee.fillStyle="rgba(10,6,24,0.55)",Lr(S-y/2-e*1.4,b-e*2.3,y+e*2.8,e*4.6,e*2.3),Ee.fill(),Ee.fillStyle=g>0?"#ff6a6a":m<.35?"#ff9a7a":m<.7?"#ffd36a":"#e8f4ff",Ee.fillText(v,S,b+e*.2);let M=b+e*4;if(d){let _=e*26,w=Math.max(0,Math.min(1,n.bo.hp/n.bo.max));Ee.fillStyle="rgba(10,6,24,0.6)",Lr(r-_/2,M,_,e*1.4,e*.7),Ee.fill(),Ee.fillStyle="#ff3a6a",w>0&&(Lr(r-_/2,M,_*w,e*1.4,e*.7),Ee.fill()),M+=e*3}if((i==="vote"||i==="choice")&&n.vi>=0&&Qi[n.vi]){let _=Qi[n.vi],w=(n.vc[0]||0)+(n.vc[1]||0)||1,D=i==="choice"&&lh?lh.key:null;[_.a,_.b].forEach((I,U)=>{let L=r+(U?1:-1)*e*16,H=Wo*.3,N=e*26,Z=(n.vc[U]||0)/w;Ee.globalAlpha=D&&D!==I.key?.35:1,Ee.fillStyle="rgba(10,6,24,0.6)",Lr(L-N/2,H-e*4,N,e*8,e*4),Ee.fill(),Ee.fillStyle=U?"rgba(255,90,120,0.55)":"rgba(122,216,255,0.55)",Z>0&&(Lr(L-N/2,H-e*4,Math.max(e*8,N*Z),e*8,e*4),Ee.fill()),Ee.fillStyle="#ffd36a",Ee.font=t(900,Math.round(e*5)),Ee.fillText(String(U+1),L-N*.26,H+e*.3),Ee.font=`${Math.round(e*5)}px sans-serif`,Ee.fillText(I.icon,L+N*.18,H+e*.3),D===I.key&&(Ee.strokeStyle="#ffd36a",Ee.lineWidth=e*.6,Lr(L-N/2,H-e*4,N,e*8,e*4),Ee.stroke()),Ee.globalAlpha=1})}}function Lr(s,e,t,n,i){Ee.beginPath(),Ee.moveTo(s+i,e),Ee.arcTo(s+t,e,s+t,e+n,i),Ee.arcTo(s+t,e+n,s,e+n,i),Ee.arcTo(s,e+n,s,e,i),Ee.arcTo(s,e,s+t,e,i),Ee.closePath()}var Af=-1,Dr=15e8,Ks=15e8,Ef=15e8,Qm=-9;function Oy(s,e){Ks=Math.max(0,Sn.sv??15e8),Ks<Ef-2e5&&(Qm=e),(Ks>Ef+1e6||Ks>=1499999999)&&(Dr=Math.min(Dr,15e8)),Ef=Ks,Dr+=(Ks-Dr)*Math.min(1,s*6),Math.abs(Ks-Dr)<1e3&&(Dr=Ks)}function By(s){let e=Sn,t=document.body,n=e.phase==="intro";if(t.classList.toggle("cine",n),t.classList.toggle("voting",e.phase==="vote"||e.phase==="choice"),(e.phase==="vote"||e.phase==="gather")&&e.tl<=5&&e.tl>0&&!(e.phase==="gather"&&e.n<1)){let i=Math.ceil(e.tl);i!==Af&&(Af=i,wn.sfx(e.phase==="vote"&&i<=3?"heart":"beep"))}else Af=-1;e.phase!=="ending"&&(Hn("winner").hidden=!0),e.phase!=="intro"&&!Hn("lore").hidden&&rh(-1)}var ah=[];function zy(s,e){if(!wi)return setTimeout(s,e);let t={at:Ra+e/1e3,fn:s};return ah.push(t),t}function Gy(){for(let s=ah.length-1;s>=0;s--)ah[s].at<=Ra&&ah.splice(s,1)[0].fn()}function e0(){Hn("notice").hidden=!1}function hh(){Hn("notice").hidden=!0}var Oo=0,Rf=0,Cf=0,zo=0,Pf=0,nh=0,Bm=0,zm=8,If=new Map;function t0(s,e){if(Ca?Sn=Py(s,e):Sn=wy(e),Ca&&Bo(e),gt&&!Ys)try{gt.frame(Sn,s,e)}catch{ns.err++,Oi("frame-err"),ns.err>30&&fh()}e>zm&&(zm=e+12+Math.random()*10,["boss","wave"].includes(Sn.phase)||wn.sfx("wind",wn.now(),.45)),Fy(e),Oy(s,e),e-Bm>.25&&(Bm=e,By(e))}function Hy(s){Rf++,!(s-Cf<2)&&(zo=Rf/(s-Cf),Rf=0,Cf=s,!(_y||wi||document.hidden)&&(s<6||(zo<Ho*.8&&Kn<3?++Pf>=2&&(If.set(Kn,(If.get(Kn)||0)+1),Kn++,Pf=0,nh=0,Zs(),Oi("q"+Kn)):(Pf=0,zo>=Ho*.95&&Kn>0&&(If.get(Kn-1)||0)<2?++nh>=6&&(Kn--,nh=0,Zs(),Oi("q"+Kn)):nh=0))))}function n0(s){if(requestAnimationFrame(n0),document.hidden)return;let e=s/1e3;if(Oo&&e-Oo<1/Ho-.004)return;let t=Math.min(.1,Oo?e-Oo:1/Ho);Oo=e,t0(t,e),Hy(e)}var Ra=0;wi&&(wn.clock=()=>Ra,window.__render={async frame(s){Ra+=s,Gy(),gt&&gt.ready&&!gt.loaded&&!gt.error&&await gt.ready.catch(()=>{});for(let e=0;e<100&&(Bo.busy||Js.length&&Js[0].p&&Uf);e++)await new Promise(t=>setTimeout(t,30));return t0(s,Ra),{phase:Sn.phase,n:Sn.n,ch:Sn.ch,wave:Sn.wv,sv:Sn.sv}},mix:s=>wn.mix(s),stats:()=>gt.stats()});var Gm=!1;function Vy(s){if(Gm||uh||Ca||!Lf||!s||!/tikfinity|both/.test(s.source||""))return;Gm=!0;let e=document.createElement("script");e.src="/shared/tikfinity.js",e.onload=()=>{let t=window.TikFinity;t.setSink(n=>{!Ui||Ui.readyState!==1||(n.type==="status"?Ui.send(JSON.stringify({t:"tf-status",state:n.mode==="live"?"connected":"waiting",message:n.message})):Ui.send(JSON.stringify({t:"tf",ev:n})))}),t.connect()},document.head.appendChild(e)}var Of=null;Xm();Zs();Ca?(Cy(),Bf={session:[],all:[]}):Nf();wi||(requestAnimationFrame(n0),setInterval(()=>{!document.hidden&&!Ca&&fetch("/healthz?overlay=1",{cache:"no-store"}).catch(()=>{})},4*6e4),Of=_m(()=>({mode:{phone:Go,ios:uh,kind:gt?gt.kind:"none",game:"siege",q:Kn,fps:Math.round(zo*10)/10,cap:Ho},cv:{w:ts.width,h:ts.height},gl:{...gt?gt.stats():{},lost:Wm,restored:qm},n:{...ns},last:sh.slice(),audio:{unlocked:wn.state()==="running",ctx:wn.state(),played:wn.played,fails:wn.fails}}),{off:sn.get("diag")==="0"||Ca}));window.__siegeUI={get world(){return Sn},get members(){return Sn.members},get level(){return Kn},get fps(){return zo},get view(){return gt},stats:()=>gt?gt.stats():null,N:ns,audio:wn,roster:$s};try{for(let s of Ni){let e=new Image;e.decoding="async",e.src=`/siege/lore-${s.art}.jpg`}}catch{}})();
