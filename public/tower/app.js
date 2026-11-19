(()=>{var nf=0,Ah=1,sf=2;var ro=1,rf=2,ia=3,Oi=0,In=1,Mn=2,dr=0,Fs=1,wi=2,Eh=3,Rh=4,af=5;var fr=100,of=101,lf=102,cf=103,hf=104,uf=200,df=201,ff=202,pf=203,Ch=204,Ph=205,mf=206,gf=207,bf=208,xf=209,_f=210,vf=211,yf=212,Mf=213,Sf=214,sl=0,rl=1,al=2,zr=3,ol=4,ll=5,cl=6,hl=7,Pl=0,wf=1,Tf=2,Bi=0,Ih=1,Lh=2,Dh=3,ao=4,Fh=5,Nh=6,kh=7,bh="attached",Af="detached",Uh=300,pr=301,sa=302,Il=303,Ll=304,Es=1e3,ri=1001,Gr=1002,nn=1003,Dl=1004;var mr=1005;var _n=1006,ra=1007;var ci=1008;var Kn=1009,Oh=1010,Bh=1011,aa=1012,Fl=1013,Ti=1014,ti=1015,Ai=1016,Nl=1017,kl=1018,gr=1020,zh=35902,Gh=35899,Hh=1021,Vh=1022,hi=1023,ss=1026,fs=1027,oa=1028,Ul=1029,Ns=1030,Ol=1031;var Bl=1033,oo=33776,lo=33777,co=33778,ho=33779,zl=35840,Gl=35841,Hl=35842,Vl=35843,Wl=36196,ql=37492,Xl=37496,jl=37488,Kl=37489,uo=37490,Jl=37491,Yl=37808,Zl=37809,$l=37810,Ql=37811,ec=37812,tc=37813,nc=37814,ic=37815,sc=37816,rc=37817,ac=37818,oc=37819,lc=37820,cc=37821,hc=36492,uc=36494,dc=36495,fc=36283,pc=36284,fo=36285,mc=36286,la=2200,br=2201,Ef=2202,Zs=2300,$s=2301,nl=2302,xh=2303,Ks=2400,Js=2401,Da=2402,gc=2500,Rf=2501,Wh=0,po=1,ca=2,Cf=3200;var ha=0,Pf=1,ps="",Wt="srgb",Bn="srgb-linear",Fa="linear",Pt="srgb";var il=7680;var If=519,Lf=512,Df=513,Ff=514,qh=515,Nf=516,kf=517,Xh=518,jh=519,Kh=35044;var Jh="300 es",ai=2e3,Hr=2001;function Im(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Lm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Vr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Uf(){let s=Vr("canvas");return s.style.display="block",s}var gd={},Wr=null;function Na(...s){let e="THREE."+s.shift();Wr?Wr("log",e,...s):console.log(e,...s)}function Of(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function je(...s){s=Of(s);let e="THREE."+s.shift();if(Wr)Wr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function rt(...s){s=Of(s);let e="THREE."+s.shift();if(Wr)Wr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ys(...s){let e=s.join(" ");e in gd||(gd[e]=!0,je(...s))}function Bf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var zf={[sl]:sl,[al]:cl,[ol]:ol,[zr]:ll,[rl]:rl,[cl]:al,[hl]:hl,[ll]:zr},Mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bd=1234567,Ia=Math.PI/180,Qs=180/Math.PI;function zi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function Yh(s,e){return(s%e+e)%e}function Dm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Fm(s,e,t){return s!==e?(t-s)/(e-s):0}function La(s,e,t){return(1-t)*s+t*e}function Nm(s,e,t,n){return La(s,e,1-Math.exp(-t*n))}function km(s,e=1){return e-Math.abs(Yh(s,e*2)-e)}function Um(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Om(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Bm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function zm(s,e){return s+Math.random()*(e-s)}function Gm(s){return s*(.5-Math.random())}function Hm(s){s!==void 0&&(bd=s);let e=bd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vm(s){return s*Ia}function Wm(s){return s*Qs}function qm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Xm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Zh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function jm(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),p=r((e-n)/2),d=a((e-n)/2),h=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*p,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*p,o*c);break;case"ZXZ":s.set(l*p,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*m,l*h,o*c);break;case"YXY":s.set(l*h,o*u,l*m,o*c);break;case"ZYZ":s.set(l*m,l*h,o*u,o*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function $h(s,e){if(e.constructor===Float32Array)return s;let t=bc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Qh(s,e){if(e.constructor===Float32Array)return s;let t=bc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var xc={DEG2RAD:Ia,RAD2DEG:Qs,generateUUID:zi,clamp:Mt,euclideanModulo:Yh,mapLinear:Dm,inverseLerp:Fm,lerp:La,damp:Nm,pingpong:km,smoothstep:Um,smootherstep:Om,randInt:Bm,randFloat:zm,randFloatSpread:Gm,seededRandom:Hm,degToRad:Vm,radToDeg:Wm,isPowerOfTwo:qm,ceilPowerOfTwo:Xm,floorPowerOfTwo:Zh,setQuaternionFromProperEuler:jm,normalize:Qh,denormalize:$h},su=class su{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};su.prototype.isVector2=!0;var nt=su,En=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],p=n[i+3],d=r[a+0],h=r[a+1],m=r[a+2],b=r[a+3];if(p!==b||l!==d||c!==h||u!==m){let g=l*d+c*h+u*m+p*b;g<0&&(d=-d,h=-h,m=-m,b=-b,g=-g);let f=1-o;if(g<.9995){let _=Math.acos(g),M=Math.sin(_);f=Math.sin(f*_)/M,o=Math.sin(o*_)/M,l=l*f+d*o,c=c*f+h*o,u=u*f+m*o,p=p*f+b*o}else{l=l*f+d*o,c=c*f+h*o,u=u*f+m*o,p=p*f+b*o;let _=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=_,c*=_,u*=_,p*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],p=r[a],d=r[a+1],h=r[a+2],m=r[a+3];return e[t]=o*m+u*p+l*h-c*d,e[t+1]=l*m+u*d+c*p-o*h,e[t+2]=c*m+u*h+o*d-l*p,e[t+3]=u*m-o*p-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),p=o(r/2),d=l(n/2),h=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*u*p+c*h*m,this._y=c*h*p-d*u*m,this._z=c*u*m+d*h*p,this._w=c*u*p-d*h*m;break;case"YXZ":this._x=d*u*p+c*h*m,this._y=c*h*p-d*u*m,this._z=c*u*m-d*h*p,this._w=c*u*p+d*h*m;break;case"ZXY":this._x=d*u*p-c*h*m,this._y=c*h*p+d*u*m,this._z=c*u*m+d*h*p,this._w=c*u*p-d*h*m;break;case"ZYX":this._x=d*u*p-c*h*m,this._y=c*h*p+d*u*m,this._z=c*u*m-d*h*p,this._w=c*u*p+d*h*m;break;case"YZX":this._x=d*u*p+c*h*m,this._y=c*h*p+d*u*m,this._z=c*u*m-d*h*p,this._w=c*u*p-d*h*m;break;case"XZY":this._x=d*u*p-c*h*m,this._y=c*h*p-d*u*m,this._z=c*u*m+d*h*p,this._w=c*u*p+d*h*m;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],p=t[10],d=n+o+p;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-i)*h}else if(n>o&&n>p){let h=2*Math.sqrt(1+n-o-p);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(r+c)/h}else if(o>p){let h=2*Math.sqrt(1+o-n-p);this._w=(r-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+p-n-o);this._w=(a-i)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ru=class ru{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),p=2*(r*n-a*t);return this.x=t+l*c+a*p-o*u,this.y=n+l*u+o*c-r*p,this.z=i+l*p+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ru.prototype.isVector3=!0;var B=ru,jc=new B,xd=new En,au=class au{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],d=n[2],h=n[5],m=n[8],b=i[0],g=i[3],f=i[6],_=i[1],M=i[4],v=i[7],w=i[2],y=i[5],x=i[8];return r[0]=a*b+o*_+l*w,r[3]=a*g+o*M+l*y,r[6]=a*f+o*v+l*x,r[1]=c*b+u*_+p*w,r[4]=c*g+u*M+p*y,r[7]=c*f+u*v+p*x,r[2]=d*b+h*_+m*w,r[5]=d*g+h*M+m*y,r[8]=d*f+h*v+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=u*a-o*c,d=o*l-u*r,h=c*r-a*l,m=t*p+n*d+i*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=p*b,e[1]=(i*c-u*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(u*t-i*l)*b,e[5]=(i*r-o*t)*b,e[6]=h*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kc.makeScale(e,t)),this}rotate(e){return Ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kc.makeRotation(-e)),this}translate(e,t){return Ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};au.prototype.isMatrix3=!0;var lt=au,Kc=new lt,_d=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vd=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Km(){let s={enabled:!0,workingColorSpace:Bn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Pt&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Pt&&(i.r=Br(i.r),i.g=Br(i.g),i.b=Br(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ps?Fa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Bn]:{primaries:e,whitePoint:n,transfer:Fa,toXYZ:_d,fromXYZ:vd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:Pt,toXYZ:_d,fromXYZ:vd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),s}var _t=Km();function is(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Br(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Tr,ul=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tr===void 0&&(Tr=Vr("canvas")),Tr.width=e.width,Tr.height=e.height;let i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Tr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=is(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(is(t[n]/255)*255):t[n]=is(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jm=0,qr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Jc(i[a].image)):r.push(Jc(i[a]))}else r=Jc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Jc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ul.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}var Ym=0,Yc=new B,vn=class s extends Mi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ri,i=ri,r=_n,a=ci,o=hi,l=Kn,c=s.DEFAULT_ANISOTROPY,u=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=zi(),this.name="",this.source=new qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yc).x}get height(){return this.source.getSize(Yc).y}get depth(){return this.source.getSize(Yc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Uh;vn.DEFAULT_ANISOTROPY=1;var ou=class ou{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],p=l[8],d=l[1],h=l[5],m=l[9],b=l[2],g=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(h+1)/2,w=(f+1)/2,y=(u+d)/4,x=(p+b)/4,A=(m+g)/4;return M>v&&M>w?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=y/n,r=x/n):v>w?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=y/i,r=A/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=x/r,i=A/r),this.set(n,i,r,t),this}let _=Math.sqrt((g-m)*(g-m)+(p-b)*(p-b)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(p-b)/_,this.z=(d-u)/_,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ou.prototype.isVector4=!0;var Ft=ou,dl=class extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new vn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new qr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends dl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ka=class extends vn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends vn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Cl=class Cl{constructor(e,t,n,i,r,a,o,l,c,u,p,d,h,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,p,d,h,m,b,g)}set(e,t,n,i,r,a,o,l,c,u,p,d,h,m,b,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=p,f[14]=d,f[3]=h,f[7]=m,f[11]=b,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ar.setFromMatrixColumn(e,0).length(),r=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let d=a*u,h=a*p,m=o*u,b=o*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=h+m*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=m+h*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,h=l*p,m=c*u,b=c*p;t[0]=d+b*o,t[4]=m*o-h,t[8]=a*c,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=h*o-m,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,h=l*p,m=c*u,b=c*p;t[0]=d-b*o,t[4]=-a*p,t[8]=m+h*o,t[1]=h+m*o,t[5]=a*u,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,h=a*p,m=o*u,b=o*p;t[0]=l*u,t[4]=m*c-h,t[8]=d*c+b,t[1]=l*p,t[5]=b*c+d,t[9]=h*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,h=a*c,m=o*l,b=o*c;t[0]=l*u,t[4]=b-d*p,t[8]=m*p+h,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*p+m,t[10]=d-b*p}else if(e.order==="XZY"){let d=a*l,h=a*c,m=o*l,b=o*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=d*p+b,t[5]=a*u,t[9]=h*p-m,t[2]=m*p-h,t[6]=o*u,t[10]=b*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zm,e,$m)}lookAt(e,t,n){let i=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),vs.crossVectors(n,$n),vs.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),vs.crossVectors(n,$n)),vs.normalize(),Io.crossVectors($n,vs),i[0]=vs.x,i[4]=Io.x,i[8]=$n.x,i[1]=vs.y,i[5]=Io.y,i[9]=$n.y,i[2]=vs.z,i[6]=Io.z,i[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],d=n[9],h=n[13],m=n[2],b=n[6],g=n[10],f=n[14],_=n[3],M=n[7],v=n[11],w=n[15],y=i[0],x=i[4],A=i[8],F=i[12],I=i[1],D=i[5],k=i[9],V=i[13],L=i[2],U=i[6],Q=i[10],Y=i[14],fe=i[3],$=i[7],oe=i[11],le=i[15];return r[0]=a*y+o*I+l*L+c*fe,r[4]=a*x+o*D+l*U+c*$,r[8]=a*A+o*k+l*Q+c*oe,r[12]=a*F+o*V+l*Y+c*le,r[1]=u*y+p*I+d*L+h*fe,r[5]=u*x+p*D+d*U+h*$,r[9]=u*A+p*k+d*Q+h*oe,r[13]=u*F+p*V+d*Y+h*le,r[2]=m*y+b*I+g*L+f*fe,r[6]=m*x+b*D+g*U+f*$,r[10]=m*A+b*k+g*Q+f*oe,r[14]=m*F+b*V+g*Y+f*le,r[3]=_*y+M*I+v*L+w*fe,r[7]=_*x+M*D+v*U+w*$,r[11]=_*A+M*k+v*Q+w*oe,r[15]=_*F+M*V+v*Y+w*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],p=e[6],d=e[10],h=e[14],m=e[3],b=e[7],g=e[11],f=e[15],_=l*h-c*d,M=o*h-c*p,v=o*d-l*p,w=a*h-c*u,y=a*d-l*u,x=a*p-o*u;return t*(b*_-g*M+f*v)-n*(m*_-g*w+f*y)+i*(m*M-b*w+f*x)-r*(m*v-b*y+g*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=e[9],d=e[10],h=e[11],m=e[12],b=e[13],g=e[14],f=e[15],_=t*o-n*a,M=t*l-i*a,v=t*c-r*a,w=n*l-i*o,y=n*c-r*o,x=i*c-r*l,A=u*b-p*m,F=u*g-d*m,I=u*f-h*m,D=p*g-d*b,k=p*f-h*b,V=d*f-h*g,L=_*V-M*k+v*D+w*I-y*F+x*A;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/L;return e[0]=(o*V-l*k+c*D)*U,e[1]=(i*k-n*V-r*D)*U,e[2]=(b*x-g*y+f*w)*U,e[3]=(d*y-p*x-h*w)*U,e[4]=(l*I-a*V-c*F)*U,e[5]=(t*V-i*I+r*F)*U,e[6]=(g*v-m*x-f*M)*U,e[7]=(u*x-d*v+h*M)*U,e[8]=(a*k-o*I+c*A)*U,e[9]=(n*I-t*k-r*A)*U,e[10]=(m*y-b*v+f*_)*U,e[11]=(p*v-u*y-h*_)*U,e[12]=(o*F-a*D-l*A)*U,e[13]=(t*D-n*F+i*A)*U,e[14]=(b*M-m*w-g*_)*U,e[15]=(u*w-p*M+d*_)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,p=o+o,d=r*c,h=r*u,m=r*p,b=a*u,g=a*p,f=o*p,_=l*c,M=l*u,v=l*p,w=n.x,y=n.y,x=n.z;return i[0]=(1-(b+f))*w,i[1]=(h+v)*w,i[2]=(m-M)*w,i[3]=0,i[4]=(h-v)*y,i[5]=(1-(d+f))*y,i[6]=(g+_)*y,i[7]=0,i[8]=(m+M)*x,i[9]=(g-_)*x,i[10]=(1-(d+b))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ar.set(i[0],i[1],i[2]).length(),o=Ar.set(i[4],i[5],i[6]).length(),l=Ar.set(i[8],i[9],i[10]).length();r<0&&(a=-a),xi.copy(this);let c=1/a,u=1/o,p=1/l;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=u,xi.elements[5]*=u,xi.elements[6]*=u,xi.elements[8]*=p,xi.elements[9]*=p,xi.elements[10]*=p,t.setFromRotationMatrix(xi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=ai,l=!1){let c=this.elements,u=2*r/(t-e),p=2*r/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i),m,b;if(l)m=r/(a-r),b=a*r/(a-r);else if(o===ai)m=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Hr)m=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ai,l=!1){let c=this.elements,u=2/(t-e),p=2/(n-i),d=-(t+e)/(t-e),h=-(n+i)/(n-i),m,b;if(l)m=1/(a-r),b=a/(a-r);else if(o===ai)m=-2/(a-r),b=-(a+r)/(a-r);else if(o===Hr)m=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Cl.prototype.isMatrix4=!0;var Ye=Cl,Ar=new B,xi=new Ye,Zm=new B(0,0,0),$m=new B(1,1,1),vs=new B,Io=new B,$n=new B,yd=new Ye,Md=new En,oi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],p=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Md.setFromEuler(this),this.setFromQuaternion(Md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var Ua=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qm=0,Sd=new B,Er=new En,Zi=new Ye,Lo=new B,Ma=new B,eg=new B,tg=new En,wd=new B(1,0,0),Td=new B(0,1,0),Ad=new B(0,0,1),Ed={type:"added"},ng={type:"removed"},Rr={type:"childadded",child:null},Zc={type:"childremoved",child:null},It=class s extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new B,t=new oi,n=new En,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new lt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(wd,e)}rotateY(e){return this.rotateOnAxis(Td,e)}rotateZ(e){return this.rotateOnAxis(Ad,e)}translateOnAxis(e,t){return Sd.copy(e).applyQuaternion(this.quaternion),this.position.add(Sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wd,e)}translateY(e){return this.translateOnAxis(Td,e)}translateZ(e){return this.translateOnAxis(Ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lo.copy(e):Lo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Ma,Lo,this.up):Zi.lookAt(Lo,Ma,this.up),this.quaternion.setFromRotationMatrix(Zi),i&&(Zi.extractRotation(i.matrixWorld),Er.setFromRotationMatrix(Zi),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ed),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ng),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ed),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),p=a(e.shapes),d=a(e.skeletons),h=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new B(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},ig={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),f=this._getHandJoint(c,b);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),h=.02,m=.005;c.inputState.pinching&&d>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new on;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Do={h:0,s:0,l:0};function $c(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=_t.workingColorSpace){if(e=Yh(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=$c(a,r,e+1/3),this.g=$c(a,r,e),this.b=$c(a,r,e-1/3)}return _t.colorSpaceToWorking(this,i),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let n=Gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return _t.workingToColorSpace(Dn.copy(this),e),Math.round(Mt(Dn.r*255,0,255))*65536+Math.round(Mt(Dn.g*255,0,255))*256+Math.round(Mt(Dn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(Dn.copy(this),t);let n=Dn.r,i=Dn.g,r=Dn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(i-r)/p+(i<r?6:0);break;case i:l=(r-n)/p+2;break;case r:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Wt){_t.workingToColorSpace(Dn.copy(this),e);let t=Dn.r,n=Dn.g,i=Dn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(Do);let n=La(ys.h,Do.h,t),i=La(ys.s,Do.s,t),r=La(ys.l,Do.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new Ie;Ie.NAMES=Gf;var Oa=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ba=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},_i=new B,$i=new B,Qc=new B,Qi=new B,Cr=new B,Pr=new B,Rd=new B,eh=new B,th=new B,nh=new B,ih=new Ft,sh=new Ft,rh=new Ft,As=class s{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_i.subVectors(e,t),i.cross(_i);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){_i.subVectors(i,t),$i.subVectors(n,t),Qc.subVectors(e,t);let a=_i.dot(_i),o=_i.dot($i),l=_i.dot(Qc),c=$i.dot($i),u=$i.dot(Qc),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,h=(c*l-o*u)*d,m=(a*u-o*l)*d;return r.set(1-h-m,m,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qi.x),l.addScaledVector(a,Qi.y),l.addScaledVector(o,Qi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return ih.setScalar(0),sh.setScalar(0),rh.setScalar(0),ih.fromBufferAttribute(e,t),sh.fromBufferAttribute(e,n),rh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ih,r.x),a.addScaledVector(sh,r.y),a.addScaledVector(rh,r.z),a}static isFrontFacing(e,t,n,i){return _i.subVectors(n,t),$i.subVectors(e,t),_i.cross($i).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),_i.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Cr.subVectors(i,n),Pr.subVectors(r,n),eh.subVectors(e,n);let l=Cr.dot(eh),c=Pr.dot(eh);if(l<=0&&c<=0)return t.copy(n);th.subVectors(e,i);let u=Cr.dot(th),p=Pr.dot(th);if(u>=0&&p<=u)return t.copy(i);let d=l*p-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(Cr,a);nh.subVectors(e,r);let h=Cr.dot(nh),m=Pr.dot(nh);if(m>=0&&h<=m)return t.copy(r);let b=h*c-l*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Pr,o);let g=u*m-h*p;if(g<=0&&p-u>=0&&h-m>=0)return Rd.subVectors(r,i),o=(p-u)/(p-u+(h-m)),t.copy(i).addScaledVector(Rd,o);let f=1/(g+b+d);return a=b*f,o=d*f,t.copy(n).addScaledVector(Cr,a).addScaledVector(Pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Rn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vi):vi.fromBufferAttribute(r,a),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fo.copy(n.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),No.subVectors(this.max,Sa),Ir.subVectors(e.a,Sa),Lr.subVectors(e.b,Sa),Dr.subVectors(e.c,Sa),Ms.subVectors(Lr,Ir),Ss.subVectors(Dr,Lr),Ws.subVectors(Ir,Dr);let t=[0,-Ms.z,Ms.y,0,-Ss.z,Ss.y,0,-Ws.z,Ws.y,Ms.z,0,-Ms.x,Ss.z,0,-Ss.x,Ws.z,0,-Ws.x,-Ms.y,Ms.x,0,-Ss.y,Ss.x,0,-Ws.y,Ws.x,0];return!ah(t,Ir,Lr,Dr,No)||(t=[1,0,0,0,1,0,0,0,1],!ah(t,Ir,Lr,Dr,No))?!1:(ko.crossVectors(Ms,Ss),t=[ko.x,ko.y,ko.z],ah(t,Ir,Lr,Dr,No))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},es=[new B,new B,new B,new B,new B,new B,new B,new B],vi=new B,Fo=new Rn,Ir=new B,Lr=new B,Dr=new B,Ms=new B,Ss=new B,Ws=new B,Sa=new B,No=new B,ko=new B,qs=new B;function ah(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){qs.fromArray(s,r);let o=i.x*Math.abs(qs.x)+i.y*Math.abs(qs.y)+i.z*Math.abs(qs.z),l=e.dot(qs),c=t.dot(qs),u=n.dot(qs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var pn=new B,Uo=new nt,sg=0,pt=class extends Mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kh,this.updateRanges=[],this.gpuType=ti,this.version=0,this._normalizationScale=e!==void 0?bc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Uo.fromBufferAttribute(this,t),Uo.applyMatrix3(e),this.setXY(t,Uo.x,Uo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):$h(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Qh(e,this.array)}};var za=class extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ga=class extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var wt=class extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},rg=new Rn,wa=new B,oh=new B,yn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):rg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);let t=wa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(wa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(oh)),this.expandByPoint(wa.copy(e.center).sub(oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ag=0,si=new Ye,lh=new It,Fr=new B,Qn=new Rn,Ta=new Rn,An=new B,qt=class s extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Im(e)?Ga:za)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(An.addVectors(Qn.min,Ta.min),Qn.expandByPoint(An),An.addVectors(Qn.max,Ta.max),Qn.expandByPoint(An)):(Qn.expandByPoint(Ta.min),Qn.expandByPoint(Ta.max))}Qn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)An.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(An));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)An.fromBufferAttribute(o,c),l&&(Fr.fromBufferAttribute(e,c),An.add(Fr)),i=Math.max(i,n.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new B,l[F]=new B;let u=new B,p=new B,d=new B,h=new nt,m=new nt,b=new nt,g=new B,f=new B;function _(F,I,D){c[F]=c[I]=c[D]=1,u.fromBufferAttribute(n,F),p.fromBufferAttribute(n,I),d.fromBufferAttribute(n,D),h.fromBufferAttribute(r,F),m.fromBufferAttribute(r,I),b.fromBufferAttribute(r,D),p.sub(u),d.sub(u),m.sub(h),b.sub(h);let k=1/(m.x*b.y-b.x*m.y);isFinite(k)&&(g.copy(p).multiplyScalar(b.y).addScaledVector(d,-m.y).multiplyScalar(k),f.copy(d).multiplyScalar(m.x).addScaledVector(p,-b.x).multiplyScalar(k),o[F].add(g),o[I].add(g),o[D].add(g),l[F].add(f),l[I].add(f),l[D].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let F=0,I=M.length;F<I;++F){let D=M[F],k=D.start,V=D.count;for(let L=k,U=k+V;L<U;L+=3)_(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let v=new B,w=new B,y=new B,x=new B;function A(F){y.fromBufferAttribute(i,F),x.copy(y);let I=o[F];v.copy(I),v.sub(y.multiplyScalar(y.dot(I))).normalize(),w.crossVectors(x,I);let k=w.dot(l[F])<0?-1:1;a.setXYZW(F,v.x,v.y,v.z,k)}for(let F=0,I=n.count;F<I;++F)c[F]&&A(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let i=new B,r=new B,a=new B,o=new B,l=new B,c=new B,u=new B,p=new B;if(e)for(let d=0,h=e.count;d<h;d+=3){let m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),u.subVectors(a,r),p.subVectors(i,r),u.cross(p),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),p.subVectors(i,r),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,p=o.normalized,d=new c.constructor(l.length*u),h=0,m=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?h=l[b]*o.data.stride+o.offset:h=l[b]*u;for(let f=0;f<u;f++)d[m++]=c[h++]}return new pt(d,u,p)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,p=c.length;u<p;u++){let d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){let h=c[p];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],p=r[c];for(let d=0,h=p.length;d<h;d++)u.push(p[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},jr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kh,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Cd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Cd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Cd(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=zi()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var On=new B,Kr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?bc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):$h(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Qh(e,this.data.array)}},ch=new B,og=new B,lg=new lt,yi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ch.subVectors(n,t).cross(og.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(ch),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||lg.getNormalMatrix(e),i=this.coplanarPoint(ch).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},cg=0,Fn=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Fs,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Ph,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=If,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=il,this.stencilZFail=il,this.stencilZPass=il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new yi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new nt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ts=new B,hh=new B,Oo=new B,Bo=new B,er=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ts.copy(this.origin).addScaledVector(this.direction,t),ts.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hh.copy(e).add(t).multiplyScalar(.5),Oo.copy(t).sub(e).normalize(),Bo.copy(this.origin).sub(hh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Oo),o=Bo.dot(this.direction),l=-Bo.dot(Oo),c=Bo.lengthSq(),u=Math.abs(1-a*a),p,d,h,m;if(u>0)if(p=a*l-o,d=a*o-l,m=r*u,p>=0)if(d>=-m)if(d<=m){let b=1/u;p*=b,d*=b,h=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=r,p=Math.max(0,-(a*d+o)),h=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(a*d+o)),h=-p*p+d*(d+2*l)+c;else d<=-m?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),h=-p*p+d*(d+2*l)+c):d<=m?(p=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),h=-p*p+d*(d+2*l)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),h=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(hh).addScaledVector(Oo,d),h}intersectSphere(e,t){if(e.radius<0)return null;ts.subVectors(e.center,this.origin);let n=ts.dot(this.direction),i=ts.dot(ts)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ts)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,p=e.x-a.x,d=e.y-a.y,h=e.z-a.z,m=t.x-a.x,b=t.y-a.y,g=t.z-a.z,f=n.x-a.x,_=n.y-a.y,M=n.z-a.z,v=Math.abs(l),w=Math.abs(c),y=Math.abs(u),x,A,F,I,D,k,V,L,U,Q,Y,fe;if(v>=w&&v>=y?(F=l,k=p,U=m,fe=f,l>=0?(x=c,A=u,I=d,D=h,V=b,L=g,Q=_,Y=M):(x=u,A=c,I=h,D=d,V=g,L=b,Q=M,Y=_)):w>=y?(F=c,k=d,U=b,fe=_,c>=0?(x=u,A=l,I=h,D=p,V=g,L=m,Q=M,Y=f):(x=l,A=u,I=p,D=h,V=m,L=g,Q=f,Y=M)):(F=u,k=h,U=g,fe=M,u>=0?(x=l,A=c,I=p,D=d,V=m,L=b,Q=f,Y=_):(x=c,A=l,I=d,D=p,V=b,L=m,Q=_,Y=f)),F===0)return null;let $=x/F,oe=A/F,le=1/F,Fe=I-$*k,tt=D-oe*k,re=V-$*U,Me=L-oe*U,Ge=Q-$*fe,Qe=Y-oe*fe,Ce=Ge*Me-Qe*re,at=Fe*Qe-tt*Ge,Kt=re*tt-Me*Fe;if(i){if(Ce<0||at<0||Kt<0)return null}else if((Ce<0||at<0||Kt<0)&&(Ce>0||at>0||Kt>0))return null;let We=Ce+at+Kt;if(We===0)return null;let At=le*(Ce*k+at*U+Kt*fe);return(We>0?At<0:At>0)?null:this.at(At/We,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pd=new Ye,Xs=new er,zo=new yn,Id=new B,Go=new B,Ho=new B,Vo=new B,uh=new B,Wo=new B,Ld=new B,qo=new B,Ke=class extends It{constructor(e=new qt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],p=r[l];u!==0&&(uh.fromBufferAttribute(p,e),a?Wo.addScaledVector(uh,u):Wo.addScaledVector(uh.sub(t),u))}t.add(Wo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(r),Xs.copy(e.ray).recast(e.near),!(zo.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(zo,Id)===null||Xs.origin.distanceToSquared(Id)>(e.far-e.near)**2))&&(Pd.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(Pd),!(n.boundingBox!==null&&Xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xs)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],f=a[g.materialIndex],_=Math.max(g.start,h.start),M=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let v=_,w=M;v<w;v+=3){let y=o.getX(v),x=o.getX(v+1),A=o.getX(v+2);i=Xo(this,f,e,n,c,u,p,y,x,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,h.start),b=Math.min(o.count,h.start+h.count);for(let g=m,f=b;g<f;g+=3){let _=o.getX(g),M=o.getX(g+1),v=o.getX(g+2);i=Xo(this,a,e,n,c,u,p,_,M,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],f=a[g.materialIndex],_=Math.max(g.start,h.start),M=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let v=_,w=M;v<w;v+=3){let y=v,x=v+1,A=v+2;i=Xo(this,f,e,n,c,u,p,y,x,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,h.start),b=Math.min(l.count,h.start+h.count);for(let g=m,f=b;g<f;g+=3){let _=g,M=g+1,v=g+2;i=Xo(this,a,e,n,c,u,p,_,M,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function hg(s,e,t,n,i,r,a,o){let l;if(e.side===In?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Oi,o),l===null)return null;qo.copy(o),qo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(qo);return c<t.near||c>t.far?null:{distance:c,point:qo.clone(),object:s}}function Xo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Go),s.getVertexPosition(l,Ho),s.getVertexPosition(c,Vo);let u=hg(s,e,t,n,Go,Ho,Vo,Ld);if(u){let p=new B;As.getBarycoord(Ld,Go,Ho,Vo,p),i&&(u.uv=As.getInterpolatedAttribute(i,o,l,c,p,new nt)),r&&(u.uv1=As.getInterpolatedAttribute(r,o,l,c,p,new nt)),a&&(u.normal=As.getInterpolatedAttribute(a,o,l,c,p,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new B,materialIndex:0};As.getNormal(Go,Ho,Vo,d.normal),u.face=d,u.barycoord=p}return u}var Aa=new Ft,Dd=new Ft,Fd=new Ft,ug=new Ft,Nd=new Ye,jo=new B,dh=new yn,kd=new Ye,fh=new er,tr=class extends Ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bh,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jo),this.boundingBox.expandByPoint(jo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jo),this.boundingSphere.expandByPoint(jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dh.copy(this.boundingSphere),dh.applyMatrix4(i),e.ray.intersectsSphere(dh)!==!1&&(kd.copy(i).invert(),fh.copy(e.ray).applyMatrix4(kd),!(this.boundingBox!==null&&fh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Af?this.bindMatrixInverse.copy(this.bindMatrix).invert():je("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Dd.fromBufferAttribute(i.attributes.skinIndex,e),Fd.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Aa.copy(t),t.set(0,0,0,0)):(Aa.set(t.x,t.y,t.z,1),t.set(0,0,0)),Aa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Fd.getComponent(r);if(a!==0){let o=Dd.getComponent(r);Nd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ug.copy(Aa).applyMatrix4(Nd),a)}}return t.isVector4&&(t.w=Aa.w),t.applyMatrix4(this.bindMatrixInverse)}},Jr=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},Rs=class extends vn{constructor(e=null,t=1,n=1,i,r,a,o,l,c=nn,u=nn,p,d){super(null,a,o,l,c,u,i,r,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ud=new Ye,dg=new Ye,nr=class s{constructor(e=[],t=[]){this.uuid=zi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){je("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:dg;Ud.multiplyMatrices(o,t[r]),Ud.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Rs(t,e,e,hi,ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(je("Skeleton: No bone found with UUID:",r),a=new Jr),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},rs=class extends pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Nr=new Ye,Od=new Ye,Ko=[],Bd=new Rn,fg=new Ye,Ea=new Ke,Ra=new yn,Nn=class extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,fg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Nr),Bd.copy(e.boundingBox).applyMatrix4(Nr),this.boundingBox.union(Bd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Nr),Ra.copy(e.boundingSphere).applyMatrix4(Nr),this.boundingSphere.union(Ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ea.geometry=this.geometry,Ea.material=this.material,Ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(n),e.ray.intersectsSphere(Ra)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Nr),Od.multiplyMatrices(n,Nr),Ea.matrixWorld=Od,Ea.raycast(e,Ko);for(let a=0,o=Ko.length;a<o;a++){let l=Ko[a];l.instanceId=r,l.object=this,t.push(l)}Ko.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new rs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rs(new Float32Array(i*this.count),i,this.count,oa,ti));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},js=new yn,pg=new nt(.5,.5),Jo=new B,Cs=class{constructor(e=new yi,t=new yi,n=new yi,i=new yi,r=new yi,a=new yi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],p=r[5],d=r[6],h=r[7],m=r[8],b=r[9],g=r[10],f=r[11],_=r[12],M=r[13],v=r[14],w=r[15];if(i[0].setComponents(c-a,h-u,f-m,w-_).normalize(),i[1].setComponents(c+a,h+u,f+m,w+_).normalize(),i[2].setComponents(c+o,h+p,f+b,w+M).normalize(),i[3].setComponents(c-o,h-p,f-b,w-M).normalize(),n)i[4].setComponents(l,d,g,v).normalize(),i[5].setComponents(c-l,h-d,f-g,w-v).normalize();else if(i[4].setComponents(c-l,h-d,f-g,w-v).normalize(),t===ai)i[5].setComponents(c+l,h+d,f+g,w+v).normalize();else if(t===Hr)i[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(e){js.center.set(0,0,0);let t=pg.distanceTo(e.center);return js.radius=.7071067811865476+t,js.applyMatrix4(e.matrixWorld),this.intersectsSphere(js)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Jo.x=i.normal.x>0?e.max.x:e.min.x,Jo.y=i.normal.y>0?e.max.y:e.min.y,Jo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zd=new Ye,pl=class s{constructor(){this.coordinateSystem=ai,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];zd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Cs),n[i].setFromProjectionMatrix(zd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Cs),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var Yr=class extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ml=new B,gl=new B,Gd=new Ye,Ca=new er,Yo=new yn,ph=new B,Hd=new B,ir=class extends It{constructor(e=new qt,t=new Yr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ml.fromBufferAttribute(t,i-1),gl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ml.distanceTo(gl);e.setAttribute("lineDistance",new wt(n,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(i),Yo.radius+=r,e.ray.intersectsSphere(Yo)===!1)return;Gd.copy(i).invert(),Ca.copy(e.ray).applyMatrix4(Gd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let h=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let b=h,g=m-1;b<g;b+=c){let f=u.getX(b),_=u.getX(b+1),M=Zo(this,e,Ca,l,f,_,b);M&&t.push(M)}if(this.isLineLoop){let b=u.getX(m-1),g=u.getX(h),f=Zo(this,e,Ca,l,b,g,m-1);f&&t.push(f)}}else{let h=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let b=h,g=m-1;b<g;b+=c){let f=Zo(this,e,Ca,l,b,b+1,b);f&&t.push(f)}if(this.isLineLoop){let b=Zo(this,e,Ca,l,m-1,h,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zo(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(ml.fromBufferAttribute(o,i),gl.fromBufferAttribute(o,r),t.distanceSqToSegment(ml,gl,ph,Hd)>n)return;ph.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ph);if(!(c<e.near||c>e.far))return{distance:c,point:Hd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Vd=new B,Wd=new B,Ha=class extends ir{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Vd.fromBufferAttribute(t,i),Wd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vd.distanceTo(Wd);e.setAttribute("lineDistance",new wt(n,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Va=class extends ir{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Zr=class extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qd=new Ye,_h=new er,$o=new yn,Qo=new B,Ps=class extends It{constructor(e=new qt,t=new Zr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(i),$o.radius+=r,e.ray.intersectsSphere($o)===!1)return;qd.copy(i).invert(),_h.copy(e.ray).applyMatrix4(qd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let m=d,b=h;m<b;m++){let g=c.getX(m);Qo.fromBufferAttribute(p,g),Xd(Qo,g,l,i,e,t,this)}}else{let d=Math.max(0,a.start),h=Math.min(p.count,a.start+a.count);for(let m=d,b=h;m<b;m++)Qo.fromBufferAttribute(p,m),Xd(Qo,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Xd(s,e,t,n,i,r,a){let o=_h.distanceSqToPoint(s);if(o<t){let l=new B;_h.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Wa=class extends vn{constructor(e=[],t=pr,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qa=class extends vn{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var as=class extends vn{constructor(e,t,n=Ti,i,r,a,o=nn,l=nn,c,u=ss,p=1){if(u!==ss&&u!==fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:p};super(d,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xa=class extends as{constructor(e,t=Ti,n=pr,i,r,a=nn,o=nn,l,c=ss){let u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,n,i,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ja=class extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},os=class s extends qt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],p=[],d=0,h=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(p,2));function m(b,g,f,_,M,v,w,y,x,A,F){let I=v/x,D=w/A,k=v/2,V=w/2,L=y/2,U=x+1,Q=A+1,Y=0,fe=0,$=new B;for(let oe=0;oe<Q;oe++){let le=oe*D-V;for(let Fe=0;Fe<U;Fe++){let tt=Fe*I-k;$[b]=tt*_,$[g]=le*M,$[f]=L,c.push($.x,$.y,$.z),$[b]=0,$[g]=0,$[f]=y>0?1:-1,u.push($.x,$.y,$.z),p.push(Fe/x),p.push(1-oe/A),Y+=1}}for(let oe=0;oe<A;oe++)for(let le=0;le<x;le++){let Fe=d+le+U*oe,tt=d+le+U*(oe+1),re=d+(le+1)+U*(oe+1),Me=d+(le+1)+U*oe;l.push(Fe,tt,Me),l.push(tt,re,Me),fe+=6}o.addGroup(h,fe,F),h+=fe,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ka=class s extends qt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=t/2,p=Math.PI/2*e,d=t,h=2*p+d,m=n*2+r,b=i+1,g=new B,f=new B;for(let _=0;_<=m;_++){let M=0,v=0,w=0,y=0;if(_<=n){let F=_/n,I=F*Math.PI/2;v=-u-e*Math.cos(I),w=e*Math.sin(I),y=-e*Math.cos(I),M=F*p}else if(_<=n+r){let F=(_-n)/r;v=-u+F*t,w=e,y=0,M=p+F*d}else{let F=(_-n-r)/n,I=F*Math.PI/2;v=u+e*Math.sin(I),w=e*Math.cos(I),y=e*Math.sin(I),M=p+d+F*p}let x=Math.max(0,Math.min(1,M/h)),A=0;_===0?A=.5/i:_===m&&(A=-.5/i);for(let F=0;F<=i;F++){let I=F/i,D=I*Math.PI*2,k=Math.sin(D),V=Math.cos(D);f.x=-w*V,f.y=v,f.z=w*k,o.push(f.x,f.y,f.z),g.set(-w*V,y,w*k),g.normalize(),l.push(g.x,g.y,g.z),c.push(I+A,x)}if(_>0){let F=(_-1)*b;for(let I=0;I<i;I++){let D=F+I,k=F+I+1,V=_*b+I,L=_*b+I+1;a.push(D,k,V),a.push(k,L,V)}}}this.setIndex(a),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ja=class s extends qt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new B,u=new nt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=t;p++,d+=3){let h=n+p/t*i;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(o,3)),this.setAttribute("uv",new wt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},li=class s extends qt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],p=[],d=[],h=[],m=0,b=[],g=n/2,f=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new wt(p,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(h,2));function _(){let v=new B,w=new B,y=0,x=(t-e)/n;for(let A=0;A<=r;A++){let F=[],I=A/r,D=I*(t-e)+e;for(let k=0;k<=i;k++){let V=k/i,L=V*l+o,U=Math.sin(L),Q=Math.cos(L);w.x=D*U,w.y=-I*n+g,w.z=D*Q,p.push(w.x,w.y,w.z),v.set(U,x,Q).normalize(),d.push(v.x,v.y,v.z),h.push(V,1-I),F.push(m++)}b.push(F)}for(let A=0;A<i;A++)for(let F=0;F<r;F++){let I=b[F][A],D=b[F+1][A],k=b[F+1][A+1],V=b[F][A+1];(e>0||F!==0)&&(u.push(I,D,V),y+=3),(t>0||F!==r-1)&&(u.push(D,k,V),y+=3)}c.addGroup(f,y,0),f+=y}function M(v){let w=m,y=new nt,x=new B,A=0,F=v===!0?e:t,I=v===!0?1:-1;for(let k=1;k<=i;k++)p.push(0,g*I,0),d.push(0,I,0),h.push(.5,.5),m++;let D=m;for(let k=0;k<=i;k++){let L=k/i*l+o,U=Math.cos(L),Q=Math.sin(L);x.x=F*Q,x.y=g*I,x.z=F*U,p.push(x.x,x.y,x.z),d.push(0,I,0),y.x=U*.5+.5,y.y=Q*.5*I+.5,h.push(y.x,y.y),m++}for(let k=0;k<i;k++){let V=w+k,L=D+k;v===!0?u.push(L,L+1,V):u.push(L+1,L,V),A+=3}c.addGroup(f,A,v===!0?1:2),f+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$r=class s extends li{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Qr=class s extends qt{constructor(e=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Mt(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,p=new B,d=new nt,h=new B,m=new B,b=new B,g=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,h.x=f*1,h.y=-g,h.z=f*0,b.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:b.normalize(),l.push(b.x,b.y,b.z);break;default:g=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,h.x=f*1,h.y=-g,h.z=f*0,m.copy(h),h.x+=b.x,h.y+=b.y,h.z+=b.z,h.normalize(),l.push(h.x,h.y,h.z),b.copy(m)}for(let _=0;_<=t;_++){let M=n+_*u*i,v=Math.sin(M),w=Math.cos(M);for(let y=0;y<=e.length-1;y++){p.x=e[y].x*v,p.y=e[y].y,p.z=e[y].x*w,a.push(p.x,p.y,p.z),d.x=_/t,d.y=y/(e.length-1),o.push(d.x,d.y);let x=l[3*y+0]*v,A=l[3*y+1],F=l[3*y+0]*w;c.push(x,A,F)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){let v=M+_*e.length,w=v,y=v+e.length,x=v+e.length+1,A=v+1;r.push(w,y,A),r.push(x,A,y)}this.setIndex(r),this.setAttribute("position",new wt(a,3)),this.setAttribute("uv",new wt(o,2)),this.setAttribute("normal",new wt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Is=class s extends qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,p=e/o,d=t/l,h=[],m=[],b=[],g=[];for(let f=0;f<u;f++){let _=f*d-a;for(let M=0;M<c;M++){let v=M*p-r;m.push(v,-_,0),b.push(0,0,1),g.push(M/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){let M=_+c*f,v=_+c*(f+1),w=_+1+c*(f+1),y=_+1+c*f;h.push(M,v,y),h.push(v,w,y)}this.setIndex(h),this.setAttribute("position",new wt(m,3)),this.setAttribute("normal",new wt(b,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Ya=class s extends qt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],u=[],p=e,d=(t-e)/i,h=new B,m=new nt;for(let b=0;b<=i;b++){for(let g=0;g<=n;g++){let f=r+g/n*a;h.x=p*Math.cos(f),h.y=p*Math.sin(f),l.push(h.x,h.y,h.z),c.push(0,0,1),m.x=(h.x/t+1)/2,m.y=(h.y/t+1)/2,u.push(m.x,m.y)}p+=d}for(let b=0;b<i;b++){let g=b*(n+1);for(let f=0;f<n;f++){let _=f+g,M=_,v=_+n+1,w=_+n+2,y=_+1;o.push(M,v,y),o.push(v,w,y)}}this.setIndex(o),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Xn=class s extends qt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],p=new B,d=new B,h=[],m=[],b=[],g=[];for(let f=0;f<=n;f++){let _=[],M=f/n,v=a+M*o,w=e*Math.cos(v),y=Math.sqrt(e*e-w*w),x=0;f===0&&a===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){let F=A/t,I=i+F*r;p.x=-y*Math.cos(I),p.y=w,p.z=y*Math.sin(I),m.push(p.x,p.y,p.z),d.copy(p).normalize(),b.push(d.x,d.y,d.z),g.push(F+x,1-M),_.push(c++)}u.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){let M=u[f][_+1],v=u[f][_],w=u[f+1][_],y=u[f+1][_+1];(f!==0||a>0)&&h.push(M,v,y),(f!==n-1||l<Math.PI)&&h.push(v,w,y)}this.setIndex(h),this.setAttribute("position",new wt(m,3)),this.setAttribute("normal",new wt(b,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Za=class s extends qt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],u=[],p=[],d=new B,h=new B,m=new B;for(let b=0;b<=n;b++){let g=a+b/n*o;for(let f=0;f<=i;f++){let _=f/i*r;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),c.push(h.x,h.y,h.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),m.subVectors(h,d).normalize(),u.push(m.x,m.y,m.z),p.push(f/i),p.push(b/n)}}for(let b=1;b<=n;b++)for(let g=1;g<=i;g++){let f=(i+1)*b+g-1,_=(i+1)*(b-1)+g-1,M=(i+1)*(b-1)+g,v=(i+1)*b+g;l.push(f,_,v),l.push(_,M,v)}this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function xr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(jd(i))i.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(jd(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function kn(s){let e={};for(let t=0;t<s.length;t++){let n=xr(s[t]);for(let i in n)e[i]=n[i]}return e}function jd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function mg(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function eu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var Hf={clone:xr,merge:kn},gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zn=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gg,this.fragmentShader=bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(i.value);break;case"v2":this.uniforms[n].value=new nt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ft().fromArray(i.value);break;case"m3":this.uniforms[n].value=new lt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ye().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},bl=class extends zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},sr=class extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gn=class extends sr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ys('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ys('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var rr=class extends Fn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ie(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Si=class extends Fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Pl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xl=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_l=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ts(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Pa(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function xg(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Kd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function _g(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var ki=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vl=class extends ki{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ks,endingEnd:Ks}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Js:r=e,o=2*t-n;break;case Da:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Js:a=e,l=2*n-t;break;case Da:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,h=this._weightNext,m=(n-t)/(i-t),b=m*m,g=b*m,f=-d*g+2*d*b-d*m,_=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,M=(-1-h)*g+(1.5+h)*b+.5*m,v=h*g-h*b;for(let w=0;w!==o;++w)r[w]=f*a[u+w]+_*a[c+w]+M*a[l+w]+v*a[p+w];return r}},$a=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),p=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*p+a[l+d]*u;return r}},yl=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Ml=class extends ki{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let m=(n-t)/(i-t),b=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*b+a[l+g]*m;return r}let d=o*2,h=e-1;for(let m=0;m!==o;++m){let b=a[c+m],g=a[l+m],f=h*d+m*2,_=p[f],M=p[f+1],v=e*d+m*2,w=u[v],y=u[v+1],x=yg(n,t,_,w,i);r[m]=Vf(x,b,M,y,g)}return r}};function Vf(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function vg(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function yg(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=Vf(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=vg(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var jn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ts(t,this.TimeBufferType),this.values=Ts(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ts(e.times,Array),values:Ts(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Pa(e.settings)&&(n.settings={inTangents:Ts(e.settings.inTangents,Array),outTangents:Ts(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ml(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Zs:t=this.InterpolantFactoryMethodDiscrete;break;case $s:t=this.InterpolantFactoryMethodLinear;break;case nl:t=this.InterpolantFactoryMethodSmooth;break;case xh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return nl;case this.InterpolantFactoryMethodBezier:return xh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Pa(this.settings)&&(Jd(this.settings.inTangents,e),Jd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Pa(this.settings)&&(Yd(this.settings.inTangents,e),Yd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){rt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){rt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Lm(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===nl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let p=o*n,d=p-n,h=p+n;for(let m=0;m!==n;++m){let b=t[p+m];if(b!==t[d+m]||b!==t[h+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let p=o*n,d=a*n;for(let h=0;h!==n;++h)t[d+h]=t[p+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Pa(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Jd(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Yd(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=$s;var ls=class extends jn{constructor(e,t,n){super(e,t,n)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Zs;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends jn{constructor(e,t,n,i){super(e,t,n,i)}};Qa.prototype.ValueTypeName="color";var cs=class extends jn{constructor(e,t,n,i){super(e,t,n,i)}};cs.prototype.ValueTypeName="number";var Sl=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)En.slerpFlat(r,0,a,c-o,a,c,l);return r}},hs=class extends jn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Sl(this.times,this.values,this.getValueSize(),e)}};hs.prototype.ValueTypeName="quaternion";hs.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends jn{constructor(e,t,n){super(e,t,n)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Zs;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Ls=class extends jn{constructor(e,t,n,i){super(e,t,n,i)}};Ls.prototype.ValueTypeName="vector";var ar=class{constructor(e="",t=-1,n=[],i=gc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=zi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Sg(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(jn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=xg(l);l=Kd(l,1,u),c=Kd(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new cs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let p=u[1],d=i[p];d||(i[p]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Mg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return cs;case"vector":case"vector2":case"vector3":case"vector4":return Ls;case"color":return Qa;case"quaternion":return hs;case"bool":case"boolean":return ls;case"string":return us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Sg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Mg(s.type);if(s.times===void 0){let n=[],i=[];_g(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Pa(s.settings)&&(t.settings={inTangents:Ts(s.settings.inTangents,Float32Array),outTangents:Ts(s.settings.outTangents,Float32Array)}),t}var Ni={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Zd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Zd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Zd(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var wl=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=c.length;p<d;p+=2){let h=c[p],m=c[p+1];if(h.global&&(h.lastIndex=0),h.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wf=new wl,Ui=class{constructor(e){this.manager=e!==void 0?e:Wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ui.DEFAULT_MATERIAL_NAME="__DEFAULT";var ns={},vh=class extends Error{constructor(e,t){super(e),this.response=t}},ea=class extends Ui{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ni.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ns[e]!==void 0){ns[e].push({onLoad:t,onProgress:n,onError:i});return}ns[e]=[],ns[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&je("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ns[e],p=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=d?parseInt(d):0,m=h!==0,b=0,g=new ReadableStream({start(f){_();function _(){p.read().then(({done:M,value:v})=>{if(M)f.close();else{b+=v.byteLength;let w=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:h});for(let y=0,x=u.length;y<x;y++){let A=u[y];A.onProgress&&A.onProgress(w)}f.enqueue(v),_()}},M=>{f.error(M)})}}});return new Response(g)}else throw new vh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let p=/charset="?([^;"\s]*)"?/i.exec(o),d=p&&p[1]?p[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(m=>h.decode(m))}}}).then(c=>{Ni.add(`file:${e}`,c);let u=ns[e];delete ns[e];for(let p=0,d=u.length;p<d;p++){let h=u[p];h.onLoad&&h.onLoad(c)}}).catch(c=>{let u=ns[e];if(u===void 0)throw this.manager.itemError(e),c;delete ns[e];for(let p=0,d=u.length;p<d;p++){let h=u[p];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var kr=new WeakMap,Tl=class extends Ui{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ni.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let p=kr.get(a);p===void 0&&(p=[],kr.set(a,p)),p.push({onLoad:t,onError:i})}return a}let o=Vr("img");function l(){u(),t&&t(this);let p=kr.get(this)||[];for(let d=0;d<p.length;d++){let h=p[d];h.onLoad&&h.onLoad(this)}kr.delete(this),r.manager.itemEnd(e)}function c(p){u(),i&&i(p),Ni.remove(`image:${e}`);let d=kr.get(this)||[];for(let h=0;h<d.length;h++){let m=d[h];m.onError&&m.onError(p)}kr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ni.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var or=class extends Ui{constructor(e){super(e)}load(e,t,n,i){let r=new vn,a=new Tl(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ds=class extends It{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},eo=class extends Ds{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},mh=new Ye,$d=new B,Qd=new B,ta=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;$d.setFromMatrixPosition(e.matrixWorld),t.position.copy($d),Qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){mh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(mh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Hr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(mh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},el=new B,tl=new En,Fi=new B,to=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(el,tl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(el,tl,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(el,tl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(el,tl,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ws=new B,ef=new nt,tf=new nt,xn=class extends to{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ws.x,ws.y).multiplyScalar(-e/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ws.x,ws.y).multiplyScalar(-e/ws.z)}getViewSize(e,t){return this.getViewBounds(e,ef,tf),t.subVectors(tf,ef)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ia*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yh=class extends ta{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Qs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},no=class extends Ds{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new yh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Mh=class extends ta{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}},lr=class extends Ds{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Mh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},cr=class extends to{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sh=class extends ta{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends Ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Sh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},io=class extends Ds{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ds=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var gh=new WeakMap,so=class extends Ui{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&je("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&je("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ni.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{gh.has(a)===!0?(i&&i(gh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ni.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),gh.set(l,c),Ni.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ni.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ur=-90,Or=1,na=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new xn(Ur,Or,e,t);i.layers=this.layers,this.add(i);let r=new xn(Ur,Or,e,t);r.layers=this.layers,this.add(r);let a=new xn(Ur,Or,e,t);a.layers=this.layers,this.add(a);let o=new xn(Ur,Or,e,t);o.layers=this.layers,this.add(o);let l=new xn(Ur,Or,e,t);l.layers=this.layers,this.add(l);let c=new xn(Ur,Or,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,d,h),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Al=class extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var El=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){En.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;En.multiplyQuaternionsFlat(e,a,e,t,e,n),En.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},tu="\\[\\]\\.:\\/",wg=new RegExp("["+tu+"]","g"),nu="[^"+tu+"]",Tg="[^"+tu.replace("\\.","")+"]",Ag=/((?:WC+[\/:])*)/.source.replace("WC",nu),Eg=/(WCOD+)?/.source.replace("WCOD",Tg),Rg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),Cg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),Pg=new RegExp("^"+Ag+Eg+Rg+Cg+"$"),Ig=["material","materials","bones","map"],wh=class{constructor(e,t,n){let i=n||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},zt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wg,"")}static parseTrackName(e){let t=Pg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ig.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=wh;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Ks,endingEnd:Ks};for(let c=0;c!==a;++c){let u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=br,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Rf:for(let u=0,p=l.length;u!==p;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case gc:default:for(let u=0,p=l.length;u!==p;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===Ef;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===la){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Js,i.endingEnd=Js):(e?i.endingStart=this.zeroSlopeAtStart?Js:Ks:i.endingStart=Da,t?i.endingEnd=this.zeroSlopeAtEnd?Js:Ks:i.endingEnd=Da)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},Lg=new Float32Array(1),ur=class extends Mi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let p=0;p!==r;++p){let d=i[p],h=d.name,m=u[h];if(m!==void 0)++m.referenceCount,a[p]=m;else{if(m=a[p],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,h));continue}let b=t&&t._propertyBindings[p].binding.parsedPath;m=new El(zt.create(n,h,b),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,h),a[p]=m}o[p].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let p=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete p[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new $a(new Float32Array(2),new Float32Array(2),1,Lg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?ar.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=gc),l!==void 0){let p=l.actionByRoot[r];if(p!==void 0&&p.blendMode===n)return p;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let u=new Rl(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?ar.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let u=c._cacheIndex,p=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,p._cacheIndex=u,t[u]=p,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var lu=class lu{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};lu.prototype.isMatrix2=!0;var Th=lu;function iu(s,e,t,n){let i=Dg(n);switch(t){case Hh:return s*e;case oa:return s*e/i.components*i.byteLength;case Ul:return s*e/i.components*i.byteLength;case Ns:return s*e*2/i.components*i.byteLength;case Ol:return s*e*2/i.components*i.byteLength;case Vh:return s*e*3/i.components*i.byteLength;case hi:return s*e*4/i.components*i.byteLength;case Bl:return s*e*4/i.components*i.byteLength;case oo:case lo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case co:case ho:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Vl:return Math.max(s,16)*Math.max(e,8)/4;case zl:case Hl:return Math.max(s,8)*Math.max(e,8)/2;case Wl:case ql:case jl:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xl:case uo:case Jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case $l:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ec:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case tc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case nc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ic:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ac:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case oc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case hc:case uc:case dc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case fc:case pc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case fo:case mc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dg(s){switch(s){case Kn:case Oh:return{byteLength:1,components:1};case aa:case Bh:case Ai:return{byteLength:2,components:1};case Nl:case kl:return{byteLength:2,components:4};case Ti:case Fl:case ti:return{byteLength:4,components:1};case zh:case Gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function dp(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ng(s){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,p=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=s.HALF_FLOAT:h=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=s.SHORT;else if(c instanceof Uint32Array)h=s.UNSIGNED_INT;else if(c instanceof Int32Array)h=s.INT;else if(c instanceof Int8Array)h=s.BYTE;else if(c instanceof Uint8Array)h=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let u=l.array,p=l.updateRanges;if(s.bindBuffer(c,o),p.length===0)s.bufferSubData(c,0,u);else{p.sort((h,m)=>h.start-m.start);let d=0;for(let h=1;h<p.length;h++){let m=p[d],b=p[h];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,p[d]=b)}p.length=d+1;for(let h=0,m=p.length;h<m;h++){let b=p[h];s.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ug=`#ifdef USE_ALPHAHASH
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
#endif`,Og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hg=`#ifdef USE_AOMAP
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
#endif`,Vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wg=`#ifdef USE_BATCHING
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
#endif`,qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jg=`#ifdef USE_IRIDESCENCE
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
#endif`,Yg=`#ifdef USE_BUMPMAP
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
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,r0=`#define PI 3.141592653589793
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
} // validated`,a0=`vec3 transformedNormal = objectNormal;
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
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u0="gl_FragColor = linearToOutputTexel( gl_FragColor );",d0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M0=`#ifdef USE_GRADIENTMAP
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
}`,S0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,E0=`#ifdef USE_ENVMAP
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
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L0=`PhysicalMaterial material;
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
#endif`,D0=`uniform sampler2D dfgLUT;
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
}`,F0=`
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q0=`#if defined( USE_POINTS_UV )
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
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
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
#endif`,Y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`#ifdef USE_MORPHTARGETS
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
#endif`,$0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ib=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sb=`#ifdef USE_NORMALMAP
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
#endif`,rb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ab=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ob=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_b=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vb=`float getShadowMask() {
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
}`,yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mb=`#ifdef USE_SKINNING
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
#endif`,Sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wb=`#ifdef USE_SKINNING
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
#endif`,Tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ab=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cb=`#ifdef USE_TRANSMISSION
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
#endif`,Pb=`#ifdef USE_TRANSMISSION
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
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kb=`uniform sampler2D t2D;
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
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ob=`uniform float backgroundBlurriness;
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
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`#include <common>
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
}`,Hb=`#if DEPTH_PACKING == 3200
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
}`,Vb=`#define DISTANCE
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
}`,Wb=`#define DISTANCE
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
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`uniform float scale;
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
}`,Kb=`uniform vec3 diffuse;
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
}`,Jb=`#include <common>
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
}`,Yb=`uniform vec3 diffuse;
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
}`,Zb=`#define LAMBERT
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
}`,$b=`#define LAMBERT
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
}`,Qb=`#define MATCAP
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
}`,ex=`#define MATCAP
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
}`,tx=`#define NORMAL
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
}`,nx=`#define NORMAL
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
}`,ix=`#define PHONG
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
}`,sx=`#define PHONG
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
}`,rx=`#define STANDARD
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
}`,ax=`#define STANDARD
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
}`,ox=`#define TOON
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
}`,lx=`#define TOON
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
}`,cx=`uniform float size;
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
}`,hx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,dx=`uniform vec3 color;
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
}`,fx=`uniform float rotation;
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
}`,px=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:kg,alphahash_pars_fragment:Ug,alphamap_fragment:Og,alphamap_pars_fragment:Bg,alphatest_fragment:zg,alphatest_pars_fragment:Gg,aomap_fragment:Hg,aomap_pars_fragment:Vg,batching_pars_vertex:Wg,batching_vertex:qg,begin_vertex:Xg,beginnormal_vertex:jg,bsdfs:Kg,iridescence_fragment:Jg,bumpmap_pars_fragment:Yg,clipping_planes_fragment:Zg,clipping_planes_pars_fragment:$g,clipping_planes_pars_vertex:Qg,clipping_planes_vertex:e0,color_fragment:t0,color_pars_fragment:n0,color_pars_vertex:i0,color_vertex:s0,common:r0,defaultnormal_vertex:a0,displacementmap_pars_vertex:o0,displacementmap_vertex:l0,emissivemap_fragment:c0,emissivemap_pars_fragment:h0,colorspace_fragment:u0,colorspace_pars_fragment:d0,envmap_fragment:f0,envmap_common_pars_fragment:p0,envmap_pars_fragment:m0,envmap_pars_vertex:g0,envmap_physical_pars_fragment:E0,envmap_vertex:b0,fog_vertex:x0,fog_pars_vertex:_0,fog_fragment:v0,fog_pars_fragment:y0,gradientmap_pars_fragment:M0,lightmap_pars_fragment:S0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:T0,lights_pars_begin:A0,lights_toon_fragment:R0,lights_toon_pars_fragment:C0,lights_phong_fragment:P0,lights_phong_pars_fragment:I0,lights_physical_fragment:L0,lights_physical_pars_fragment:D0,lights_fragment_begin:F0,lights_fragment_maps:N0,lights_fragment_end:k0,lightprobes_pars_fragment:U0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:G0,map_fragment:H0,map_pars_fragment:V0,map_particle_fragment:W0,map_particle_pars_fragment:q0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:j0,morphinstance_vertex:K0,morphcolor_vertex:J0,morphnormal_vertex:Y0,morphtarget_pars_vertex:Z0,morphtarget_vertex:$0,normal_fragment_begin:Q0,normal_fragment_maps:eb,normal_pars_fragment:tb,normal_pars_vertex:nb,normal_vertex:ib,normalmap_pars_fragment:sb,clearcoat_normal_fragment_begin:rb,clearcoat_normal_fragment_maps:ab,clearcoat_pars_fragment:ob,iridescence_pars_fragment:lb,opaque_fragment:cb,packing:hb,premultiplied_alpha_fragment:ub,project_vertex:db,dithering_fragment:fb,dithering_pars_fragment:pb,roughnessmap_fragment:mb,roughnessmap_pars_fragment:gb,shadowmap_pars_fragment:bb,shadowmap_pars_vertex:xb,shadowmap_vertex:_b,shadowmask_pars_fragment:vb,skinbase_vertex:yb,skinning_pars_vertex:Mb,skinning_vertex:Sb,skinnormal_vertex:wb,specularmap_fragment:Tb,specularmap_pars_fragment:Ab,tonemapping_fragment:Eb,tonemapping_pars_fragment:Rb,transmission_fragment:Cb,transmission_pars_fragment:Pb,uv_pars_fragment:Ib,uv_pars_vertex:Lb,uv_vertex:Db,worldpos_vertex:Fb,background_vert:Nb,background_frag:kb,backgroundCube_vert:Ub,backgroundCube_frag:Ob,cube_vert:Bb,cube_frag:zb,depth_vert:Gb,depth_frag:Hb,distance_vert:Vb,distance_frag:Wb,equirect_vert:qb,equirect_frag:Xb,linedashed_vert:jb,linedashed_frag:Kb,meshbasic_vert:Jb,meshbasic_frag:Yb,meshlambert_vert:Zb,meshlambert_frag:$b,meshmatcap_vert:Qb,meshmatcap_frag:ex,meshnormal_vert:tx,meshnormal_frag:nx,meshphong_vert:ix,meshphong_frag:sx,meshphysical_vert:rx,meshphysical_frag:ax,meshtoon_vert:ox,meshtoon_frag:lx,points_vert:cx,points_frag:hx,shadow_vert:ux,shadow_frag:dx,sprite_vert:fx,sprite_frag:px},De={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Hi={basic:{uniforms:kn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:kn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:kn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:kn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:kn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ie(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:kn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:kn([De.points,De.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:kn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:kn([De.common,De.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:kn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:kn([De.sprite,De.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:kn([De.common,De.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:kn([De.lights,De.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Hi.physical={uniforms:kn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};var _c={r:0,b:0,g:0},mx=new Ye,fp=new lt;fp.set(-1,0,0,0,1,0,0,0,1);function gx(s,e,t,n,i,r){let a=new Ie(0),o=i===!0?0:1,l,c,u=null,p=0,d=null;function h(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=e.get(M,v)}return M}function m(_){let M=!1,v=h(_);v===null?g(a,o):v&&v.isColor&&(g(v,1),M=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(_,M){let v=h(M);v&&v.isCubeTexture?(c===void 0&&(c=new Ke(new os(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:xr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,y,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mx.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fp),c.material.toneMapped=_t.getTransfer(v.colorSpace)!==Pt,(u!==v||p!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,p=v.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ke(new Is(2,2),new zn({name:"BackgroundMaterial",uniforms:xr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=_t.getTransfer(v.colorSpace)!==Pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||p!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,p=v.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,M){_.getRGB(_c,eu(s)),t.buffers.color.setClear(_c.r,_c.g,_c.b,M,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:m,addToRenderList:b,dispose:f}}function bx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(D,k,V,L,U){let Q=!1,Y=p(D,L,V,k);r!==Y&&(r=Y,c(r.object)),Q=h(D,L,V,U),Q&&m(D,L,V,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,v(D,k,V,L),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function u(D){return s.deleteVertexArray(D)}function p(D,k,V,L){let U=L.wireframe===!0,Q=n[k.id];Q===void 0&&(Q={},n[k.id]=Q);let Y=D.isInstancedMesh===!0?D.id:0,fe=Q[Y];fe===void 0&&(fe={},Q[Y]=fe);let $=fe[V.id];$===void 0&&($={},fe[V.id]=$);let oe=$[U];return oe===void 0&&(oe=d(l()),$[U]=oe),oe}function d(D){let k=[],V=[],L=[];for(let U=0;U<t;U++)k[U]=0,V[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:L,object:D,attributes:{},index:null}}function h(D,k,V,L){let U=r.attributes,Q=k.attributes,Y=0,fe=V.getAttributes();for(let $ in fe)if(fe[$].location>=0){let le=U[$],Fe=Q[$];if(Fe===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(Fe=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(Fe=D.instanceColor)),le===void 0||le.attribute!==Fe||Fe&&le.data!==Fe.data)return!0;Y++}return r.attributesNum!==Y||r.index!==L}function m(D,k,V,L){let U={},Q=k.attributes,Y=0,fe=V.getAttributes();for(let $ in fe)if(fe[$].location>=0){let le=Q[$];le===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(le=D.instanceColor));let Fe={};Fe.attribute=le,le&&le.data&&(Fe.data=le.data),U[$]=Fe,Y++}r.attributes=U,r.attributesNum=Y,r.index=L}function b(){let D=r.newAttributes;for(let k=0,V=D.length;k<V;k++)D[k]=0}function g(D){f(D,0)}function f(D,k){let V=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;V[D]=1,L[D]===0&&(s.enableVertexAttribArray(D),L[D]=1),U[D]!==k&&(s.vertexAttribDivisor(D,k),U[D]=k)}function _(){let D=r.newAttributes,k=r.enabledAttributes;for(let V=0,L=k.length;V<L;V++)k[V]!==D[V]&&(s.disableVertexAttribArray(V),k[V]=0)}function M(D,k,V,L,U,Q,Y){Y===!0?s.vertexAttribIPointer(D,k,V,U,Q):s.vertexAttribPointer(D,k,V,L,U,Q)}function v(D,k,V,L){b();let U=L.attributes,Q=V.getAttributes(),Y=k.defaultAttributeValues;for(let fe in Q){let $=Q[fe];if($.location>=0){let oe=U[fe];if(oe===void 0&&(fe==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),fe==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),oe!==void 0){let le=oe.normalized,Fe=oe.itemSize,tt=e.get(oe);if(tt===void 0)continue;let re=tt.buffer,Me=tt.type,Ge=tt.bytesPerElement,Qe=Me===s.INT||Me===s.UNSIGNED_INT||oe.gpuType===Fl;if(oe.isInterleavedBufferAttribute){let Ce=oe.data,at=Ce.isInterleavedBuffer===!0?Ce.stride:Ce.itemSize,Kt=oe.offset;if(Ce.isInstancedInterleavedBuffer||Ce.isInstancedBufferAttribute){for(let We=0;We<$.locationSize;We++)f($.location+We,Ce.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let We=0;We<$.locationSize;We++)g($.location+We);s.bindBuffer(s.ARRAY_BUFFER,re);for(let We=0;We<$.locationSize;We++)M($.location+We,Fe/$.locationSize,Me,le,at*Ge,(Kt+Fe/$.locationSize*We)*Ge,Qe)}else{if(oe.isInstancedBufferAttribute){for(let Ce=0;Ce<$.locationSize;Ce++)f($.location+Ce,oe.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ce=0;Ce<$.locationSize;Ce++)g($.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,re);for(let Ce=0;Ce<$.locationSize;Ce++)M($.location+Ce,Fe/$.locationSize,Me,le,Fe*Ge,Fe/$.locationSize*Ce*Ge,Qe)}}else if(Y!==void 0){let le=Y[fe];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv($.location,le);break;case 3:s.vertexAttrib3fv($.location,le);break;case 4:s.vertexAttrib4fv($.location,le);break;default:s.vertexAttrib1fv($.location,le)}}}}_()}function w(){F();for(let D in n){let k=n[D];for(let V in k){let L=k[V];for(let U in L){let Q=L[U];for(let Y in Q)u(Q[Y].object),delete Q[Y];delete L[U]}}delete n[D]}}function y(D){if(n[D.id]===void 0)return;let k=n[D.id];for(let V in k){let L=k[V];for(let U in L){let Q=L[U];for(let Y in Q)u(Q[Y].object),delete Q[Y];delete L[U]}}delete n[D.id]}function x(D){for(let k in n){let V=n[k];for(let L in V){let U=V[L];if(U[D.id]===void 0)continue;let Q=U[D.id];for(let Y in Q)u(Q[Y].object),delete Q[Y];delete U[D.id]}}}function A(D){for(let k in n){let V=n[k],L=D.isInstancedMesh===!0?D.id:0,U=V[L];if(U!==void 0){for(let Q in U){let Y=U[Q];for(let fe in Y)u(Y[fe].object),delete Y[fe];delete U[Q]}delete V[L],Object.keys(V).length===0&&delete n[k]}}}function F(){I(),a=!0,r!==i&&(r=i,c(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:F,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:y,releaseStatesOfObject:A,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:g,disableUnusedAttributes:_}}function xx(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function _x(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==hi&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let A=x===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Kn&&x!==ti&&!A&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&je("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),y=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:w,samples:y}}function vx(s){let e=this,t=null,n=0,i=!1,r=!1,a=new yi,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let h=p.length!==0||d||n!==0||i;return i=d,n=p.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){t=u(p,d,0)},this.setState=function(p,d,h){let m=p.clippingPlanes,b=p.clipIntersection,g=p.clipShadows,f=s.get(p);if(!i||m===null||m.length===0||r&&!g)r?u(null):c();else{let _=r?0:n,M=_*4,v=f.clippingState||null;l.value=v,v=u(m,d,M,h);for(let w=0;w!==M;++w)v[w]=t[w];f.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,d,h,m){let b=p!==null?p.length:0,g=null;if(b!==0){if(g=l.value,m!==!0||g===null){let f=h+b*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<f)&&(g=new Float32Array(f));for(let M=0,v=h;M!==b;++M,v+=4)a.copy(p[M]).applyMatrix4(_,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var bo=class extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new os(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:dr});r.uniforms.tEquirect.value=t;let a=new Ke(i,r),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=_n),new na(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},qf=256,yx=3,Mx=20,pp=256,mp=16,Sx=3,wx=new B,Tx=new Ie,yc=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new na(1,10,null),this._boxMesh=new Ke(new os(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=wx}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,h=l.autoClearDepth,m=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(Tx));let g=new na(n,i,u);return g.position.copy(o),g.update(l,e),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=h,l.autoClearStencil=m,e.background=b,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(qf,Zh(e))}_fromTexture(e,t){e.mapping===pr||e.mapping===sa?this._setSize(e.image.length===0?qf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Xf(e,!1,!1),n=Math.log2(e)-yx;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Xf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===pr||e.mapping===sa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=jf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ax(),this._integrationMaterial=Ex());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/mp);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-Sx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(pp*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Rx());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function Xf(s,e,t){return new bo(s,{minFilter:ci,generateMipmaps:e,type:Ai,colorSpace:Bn,depthBuffer:t})}function xo(s,e,t){return new zn({name:s,uniforms:e,vertexShader:xt.cube_vert,fragmentShader:t,side:In,blending:dr,depthTest:!1,depthWrite:!1})}function Ax(){return xo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${pp}u

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
	`)}function Ex(){return xo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:mp}},`

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
	`)}function Rx(){return xo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Mx}
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
	`)}function jf(){return xo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Kf(){return xo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cx(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,h=!1){return d==null?null:h?a(d):r(d)}function r(d){if(d&&d.isTexture){let h=d.mapping;if(h===Il||h===Ll)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let b=new bo(m.height);return b.fromEquirectangularTexture(s,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let h=d.mapping,m=h===Il||h===Ll,b=h===pr||h===sa;if(m||b){let g=t.get(d),f=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new yc(s)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let _=d.image;return m&&_&&_.height>0||b&&_&&l(_)?(n===null&&(n=new yc(s)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,h){return h===Il?d.mapping=pr:h===Ll&&(d.mapping=sa),d}function l(d){let h=0,m=6;for(let b=0;b<m;b++)d[b]!==void 0&&h++;return h===m}function c(d){let h=d.target;h.removeEventListener("dispose",c);let m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(d){let h=d.target;h.removeEventListener("dispose",u);let m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function Px(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ys("WebGLRenderer: "+n+" extension not supported."),i}}}function Ix(s,e,t,n){let i={},r=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);let b=r.get(m);b&&(e.remove(b),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,b){return i[b.id]!==void 0||(b.addEventListener("dispose",o),i[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}function u(m){let b=m.attributes;for(let g in b)e.update(b[g],s.ARRAY_BUFFER)}function p(m){let b=m.index,g=m.attributes.position,f=0;if(g===void 0)return;let _=b!==null?b.array.length:g.array.length/3-1,M=g.count>=65535?Ga:za,v=new M(Math.ceil(_/3)*6,1),w=v.array;if(b!==null){let x=b.array;f=b.version;for(let A=0,F=0;A<_;A+=3){let I=x[A+0],D=x[A+1],k=x[A+2];w[F++]=I,w[F++]=D,w[F++]=D,w[F++]=k,w[F++]=k,w[F++]=I}}else{f=g.version;for(let x=0,A=0;x<_;x+=3){let F=x+0,I=x+1,D=x+2;w[A++]=F,w[A++]=I,w[A++]=I,w[A++]=D,w[A++]=D,w[A++]=F}}v.version=f;let y=r.get(m);y&&e.remove(y),r.set(m,v)}function d(m){let b=r.get(m);if(b){let g=m.index;g!==null&&b.version<g.version&&p(m)}else p(m);return r.get(m)}function h(){for(let m in i){let b=i[m].deref();b!==void 0&&l(b)}}return{get:c,update:u,getWireframeAttribute:d,dispose:h}}function Lx(s,e,t){let n;function i(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){s.drawElements(n,d,r,p*a),t.update(d,n,1)}function c(p,d,h){h!==0&&(s.drawElementsInstanced(n,d,r,p*a,h),t.update(d,n,h))}function u(p,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,h);let b=0;for(let g=0;g<h;g++)b+=d[g];t.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Dx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Fx(s,e,t){let n=new WeakMap,i=new Ft;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==p){let F=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let h=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;h===!0&&(M=1),m===!0&&(M=2),b===!0&&(M=3);let v=o.attributes.position.count*M,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let y=new Float32Array(v*w*4*p),x=new ka(y,v,w,p);x.type=ti,x.needsUpdate=!0;let A=M*4;for(let I=0;I<p;I++){let D=g[I],k=f[I],V=_[I],L=v*w*4*I;for(let U=0;U<D.count;U++){let Q=U*A;h===!0&&(i.fromBufferAttribute(D,U),y[L+Q+0]=i.x,y[L+Q+1]=i.y,y[L+Q+2]=i.z,y[L+Q+3]=0),m===!0&&(i.fromBufferAttribute(k,U),y[L+Q+4]=i.x,y[L+Q+5]=i.y,y[L+Q+6]=i.z,y[L+Q+7]=0),b===!0&&(i.fromBufferAttribute(V,U),y[L+Q+8]=i.x,y[L+Q+9]=i.y,y[L+Q+10]=i.z,y[L+Q+11]=V.itemSize===4?i.w:1)}}d={count:p,texture:x,size:new nt(v,w)},n.set(o,d),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let h=0;for(let b=0;b<c.length;b++)h+=c[b];let m=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Nx(s,e,t,n,i){let r=new WeakMap;function a(c){let u=i.render.frame,p=c.geometry,d=e.get(c,p);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var kx={[Ih]:"LINEAR_TONE_MAPPING",[Lh]:"REINHARD_TONE_MAPPING",[Dh]:"CINEON_TONE_MAPPING",[ao]:"ACES_FILMIC_TONE_MAPPING",[Nh]:"AGX_TONE_MAPPING",[kh]:"NEUTRAL_TONE_MAPPING",[Fh]:"CUSTOM_TONE_MAPPING"};function Ux(s,e,t,n,i,r){let a=new ei(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new qt;u.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new wt([0,2,0,0,2,0],2));let p=new bl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ke(u,p),h=new cr(-1,1,1,-1,0,1),m=null,b=null,g=!1,f,_=null,M=[],v=!1;this.setSize=function(w,y){a.setSize(w,y),o!==null&&o.setSize(w,y),l!==null&&l.setSize(w,y);for(let x=0;x<M.length;x++){let A=M[x];A.setSize&&A.setSize(w,y)}},this.setEffects=function(w){M=w,v=M.length>0&&M[0].isRenderPass===!0;let y=a.width,x=a.height;M.length>0&&o===null&&(o=new ei(y,x,{type:Ai,depthBuffer:!1,stencilBuffer:!1}),l=new ei(y,x,{type:Ai,depthBuffer:!1,stencilBuffer:!1}));let A=i===!0&&M.some(F=>F.needsDepthTexture===!0);A!==(a.depthTexture!==null)&&(A===!0&&c===null&&(c=new as(y,x),r===!0&&(c.format=fs,c.type=gr)),a.dispose(),a.depthTexture=A?c:null,a.resolveDepthBuffer=A,a.storeMultisampledDepthBuffer=A);for(let F=0;F<M.length;F++){let I=M[F];I.setSize&&I.setSize(y,x),A&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(w,y){if(g||w.toneMapping===Bi&&M.length===0)return!1;if(_=y,y!==null){let x=y.width,A=y.height;(a.width!==x||a.height!==A)&&this.setSize(x,A)}return v===!1&&w.setRenderTarget(a),f=w.toneMapping,w.toneMapping=Bi,!0},this.hasRenderPass=function(){return v},this.end=function(w,y){w.toneMapping=f,g=!0;let x=a,A=o;for(let F=0;F<M.length;F++){let I=M[F];I.enabled!==!1&&(I.render(w,A,x,y),I.needsSwap!==!1&&(x=A,A=A===o?l:o))}if(m!==w.outputColorSpace||b!==w.toneMapping){m=w.outputColorSpace,b=w.toneMapping,p.defines={},_t.getTransfer(m)===Pt&&(p.defines.SRGB_TRANSFER="");let F=kx[b];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(_),w.render(d,h),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),p.dispose()}}var gp=new vn,bp=new as(1,1),xp=new Xa(1),_p=new ka,vp=new fl,yp=new Wa,Jf=[],Yf=[],Zf=new Float32Array(16),$f=new Float32Array(9),Qf=new Float32Array(4);function da(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Jf[i];if(r===void 0&&(r=new Float32Array(i),Jf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Sn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function wn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Sc(s,e){let t=Yf[e];t===void 0&&(t=new Int32Array(e),Yf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ox(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Bx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2fv(this.addr,e),wn(t,e)}}function zx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;s.uniform3fv(this.addr,e),wn(t,e)}}function Gx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4fv(this.addr,e),wn(t,e)}}function Hx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Sn(t,n))return;Qf.set(n),s.uniformMatrix2fv(this.addr,!1,Qf),wn(t,n)}}function Vx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Sn(t,n))return;$f.set(n),s.uniformMatrix3fv(this.addr,!1,$f),wn(t,n)}}function Wx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Sn(t,n))return;Zf.set(n),s.uniformMatrix4fv(this.addr,!1,Zf),wn(t,n)}}function qx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Xx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2iv(this.addr,e),wn(t,e)}}function jx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3iv(this.addr,e),wn(t,e)}}function Kx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4iv(this.addr,e),wn(t,e)}}function Jx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Yx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2uiv(this.addr,e),wn(t,e)}}function Zx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3uiv(this.addr,e),wn(t,e)}}function $x(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4uiv(this.addr,e),wn(t,e)}}function wc(s){return s.version===0&&(s.compareFunction=jh,s.needsUpdate=!0),s}function Qx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=wc(bp):r=gp,t.setTexture2D(e||r,i)}function e_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vp,i)}function t_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=wc(xp):r=yp,t.setTextureCube(e||r,i)}function n_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_p,i)}function i_(s){switch(s){case 5126:return Ox;case 35664:return Bx;case 35665:return zx;case 35666:return Gx;case 35674:return Hx;case 35675:return Vx;case 35676:return Wx;case 5124:case 35670:return qx;case 35667:case 35671:return Xx;case 35668:case 35672:return jx;case 35669:case 35673:return Kx;case 5125:return Jx;case 36294:return Yx;case 36295:return Zx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}function s_(s,e){s.uniform1fv(this.addr,e)}function r_(s,e){let t=da(e,this.size,2);s.uniform2fv(this.addr,t)}function a_(s,e){let t=da(e,this.size,3);s.uniform3fv(this.addr,t)}function o_(s,e){let t=da(e,this.size,4);s.uniform4fv(this.addr,t)}function l_(s,e){let t=da(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function c_(s,e){let t=da(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function h_(s,e){let t=da(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function u_(s,e){s.uniform1iv(this.addr,e)}function d_(s,e){s.uniform2iv(this.addr,e)}function f_(s,e){s.uniform3iv(this.addr,e)}function p_(s,e){s.uniform4iv(this.addr,e)}function m_(s,e){s.uniform1uiv(this.addr,e)}function g_(s,e){s.uniform2uiv(this.addr,e)}function b_(s,e){s.uniform3uiv(this.addr,e)}function x_(s,e){s.uniform4uiv(this.addr,e)}function __(s,e,t){let n=this.cache,i=e.length,r=Sc(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=wc(bp):a=gp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function v_(s,e,t){let n=this.cache,i=e.length,r=Sc(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||vp,r[a])}function y_(s,e,t){let n=this.cache,i=e.length,r=Sc(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=wc(xp):a=yp;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function M_(s,e,t){let n=this.cache,i=e.length,r=Sc(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||_p,r[a])}function S_(s){switch(s){case 5126:return s_;case 35664:return r_;case 35665:return a_;case 35666:return o_;case 35674:return l_;case 35675:return c_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return d_;case 35668:case 35672:return f_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return b_;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return M_}}var uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=i_(t.type)}},du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S_(t.type)}},fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},cu=/(\w+)(\])?(\[|\.)?/g;function ep(s,e){s.seq.push(e),s.map[e.id]=e}function w_(s,e,t){let n=s.name,i=n.length;for(cu.lastIndex=0;;){let r=cu.exec(n),a=cu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ep(t,c===void 0?new uu(o,s,e):new du(o,s,e));break}else{let p=t.map[o];p===void 0&&(p=new fu(o),ep(t,p)),t=p}}}var ua=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);w_(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function tp(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var T_=37297,A_=0;function E_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var np=new lt;function R_(s){_t._getMatrix(np,_t.workingColorSpace,s);let e=`mat3( ${np.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(s)){case Fa:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ip(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+E_(s.getShaderSource(e),o)}else return r}function C_(s,e){let t=R_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var P_={[Ih]:"Linear",[Lh]:"Reinhard",[Dh]:"Cineon",[ao]:"ACESFilmic",[Nh]:"AgX",[kh]:"Neutral",[Fh]:"Custom"};function I_(s,e){let t=P_[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vc=new B;function L_(){_t.getLuminanceCoefficients(vc);let s=vc.x.toFixed(4),e=vc.y.toFixed(4),t=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function F_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function go(s){return s!==""}function sp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function rp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var k_=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(s){return s.replace(k_,U_)}function U_(s,e){let t=xt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return pu(t)}var O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ap(s){return s.replace(O_,B_)}function B_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function op(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var z_={[ro]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function G_(s){return z_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H_={[sa]:"ENVMAP_MODE_REFRACTION"};function V_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":H_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var W_={[Pl]:"ENVMAP_BLENDING_MULTIPLY",[wf]:"ENVMAP_BLENDING_MIX",[Tf]:"ENVMAP_BLENDING_ADD"};function q_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":W_[s.combine]||"ENVMAP_BLENDING_NONE"}function X_(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=G_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=V_(t),p=q_(t),d=D_(t),h=F_(r),m=i.createProgram(),b,g,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(go).join(`
`),b.length>0&&(b+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(go).join(`
`),g.length>0&&(g+=`
`)):(b=[op(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),g=[op(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?xt.tonemapping_pars_fragment:"",t.toneMapping!==Bi?I_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,C_("linearToOutputTexel",t.outputColorSpace),L_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(go).join(`
`)),a=pu(a),a=sp(a,t),a=rp(a,t),o=pu(o),o=sp(o,t),o=rp(o,t),a=ap(a),o=ap(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,g=["#define varying in",t.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=f+b+a,M=f+g+o,v=tp(i,i.VERTEX_SHADER,_),w=tp(i,i.FRAGMENT_SHADER,M);i.attachShader(m,v),i.attachShader(m,w),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function y(I){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(m)||"",k=i.getShaderInfoLog(v)||"",V=i.getShaderInfoLog(w)||"",L=D.trim(),U=k.trim(),Q=V.trim(),Y=!0,fe=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,v,w);else{let $=ip(i,v,"vertex"),oe=ip(i,w,"fragment");rt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+$+`
`+oe)}else L!==""?je("WebGLProgram: Program Info Log:",L):(U===""||Q==="")&&(fe=!1);fe&&(I.diagnostics={runnable:Y,programLog:L,vertexShader:{log:U,prefix:b},fragmentShader:{log:Q,prefix:g}})}i.deleteShader(v),i.deleteShader(w),x=new ua(i,m),A=N_(i,m)}let x;this.getUniforms=function(){return x===void 0&&y(this),x};let A;this.getAttributes=function(){return A===void 0&&y(this),A};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(m,T_)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=w,this}var j_=0,mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gu(e),t.set(e,n)),n}},gu=class{constructor(e){this.id=j_++,this.code=e,this.usedTimes=0}};function K_(s){return s===Ns||s===uo||s===fo}function J_(s,e,t,n,i,r){let a=new Ua,o=new mu,l=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,A,F,I,D,k){let V=I.fog,L=D.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||U,Q),fe=d[x.type],$=n.precision;x.precision!==null&&($=n.getMaxPrecision(x.precision),$!==x.precision&&je("WebGLProgram.getParameters:",x.precision,"not supported, using",$,"instead."));let oe=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,le=oe!==void 0?oe.length:0,Fe=0;L.morphAttributes.position!==void 0&&(Fe=1),L.morphAttributes.normal!==void 0&&(Fe=2),L.morphAttributes.color!==void 0&&(Fe=3);let tt,re,Me,Ge;if(fe){let Pe=Hi[fe];tt=Pe.vertexShader,re=Pe.fragmentShader}else{tt=x.vertexShader,re=x.fragmentShader;let Pe=o.getVertexShaderStage(x),yt=o.getFragmentShaderStage(x);o.update(x,Pe,yt),Me=Pe.id,Ge=yt.id}let Qe=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),at=D.isInstancedMesh===!0,Kt=D.isBatchedMesh===!0,We=!!x.map,At=!!x.matcap,Ct=!!Y,mt=Ct&&Y.isPMREMTexture===!0,Qt=!!x.aoMap,Gt=!!x.lightMap,en=!!x.bumpMap&&x.wireframe===!1,gt=!!x.normalMap,Wn=!!x.displacementMap,Jt=!!x.emissiveMap,gn=!!x.metalnessMap,un=!!x.roughnessMap,kt=x.anisotropy>0,z=x.clearcoat>0,Un=x.diffuseRoughness>0,Ht=x.dispersion>0,Ut=x.retroreflectivity>0,Se=x.iridescence>0,an=x.sheen>0,Ze=x.transmission>0,Je=kt&&!!x.anisotropyMap,R=z&&!!x.clearcoatMap,S=z&&!!x.clearcoatNormalMap,X=z&&!!x.clearcoatRoughnessMap,ce=Un&&!!x.diffuseRoughnessMap,ae=Se&&!!x.iridescenceMap,ge=Se&&!!x.iridescenceThicknessMap,Te=an&&!!x.sheenColorMap,te=an&&!!x.sheenRoughnessMap,ie=!!x.specularMap,xe=!!x.specularColorMap,N=!!x.specularIntensityMap,se=Ze&&!!x.transmissionMap,ee=Ze&&!!x.thicknessMap,ve=!!x.gradientMap,be=!!x.alphaMap,ue=x.alphaTest>0,Oe=!!x.alphaHash,ut=!!x.extensions,pe=Bi;x.toneMapped&&(Qe===null||Qe.isXRRenderTarget===!0)&&(pe=s.toneMapping);let Ee=mt?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,ct={shaderID:fe,shaderType:x.type,shaderName:x.name,vertexShader:tt,fragmentShader:re,defines:x.defines,customVertexShaderID:Me,customFragmentShaderID:Ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:$,batching:Kt,batchingColor:Kt&&D._colorsTexture!==null,instancing:at,instancingColor:at&&D.instanceColor!==null,instancingMorph:at&&D.morphTexture!==null,outputColorSpace:Qe===null?s.outputColorSpace:Qe.isXRRenderTarget===!0?Qe.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:We,matcap:At,envMap:Ct,envMapMode:Ct&&Y.mapping,envMapPMREM:mt,envMapMaxLod:mt?Ee.length-1:null,envMapSize:mt?Ee[0].width:null,aoMap:Qt,lightMap:Gt,bumpMap:en,normalMap:gt,displacementMap:Wn,emissiveMap:Jt,normalMapObjectSpace:gt&&x.normalMapType===Pf,normalMapTangentSpace:gt&&x.normalMapType===ha,packedNormalMap:gt&&x.normalMapType===ha&&K_(x.normalMap.format),metalnessMap:gn,roughnessMap:un,anisotropy:kt,anisotropyMap:Je,clearcoat:z,clearcoatMap:R,clearcoatNormalMap:S,clearcoatRoughnessMap:X,diffuseRoughness:Un,diffuseRoughnessMap:ce,dispersion:Ht,retroreflection:Ut,iridescence:Se,iridescenceMap:ae,iridescenceThicknessMap:ge,sheen:an,sheenColorMap:Te,sheenRoughnessMap:te,specularMap:ie,specularColorMap:xe,specularIntensityMap:N,transmission:Ze,transmissionMap:se,thicknessMap:ee,gradientMap:ve,opaque:x.transparent===!1&&x.blending===Fs&&x.alphaToCoverage===!1,alphaMap:be,alphaTest:ue,alphaHash:Oe,combine:x.combine,mapUv:We&&h(x.map.channel),aoMapUv:Qt&&h(x.aoMap.channel),lightMapUv:Gt&&h(x.lightMap.channel),bumpMapUv:en&&h(x.bumpMap.channel),normalMapUv:gt&&h(x.normalMap.channel),displacementMapUv:Wn&&h(x.displacementMap.channel),emissiveMapUv:Jt&&h(x.emissiveMap.channel),metalnessMapUv:gn&&h(x.metalnessMap.channel),roughnessMapUv:un&&h(x.roughnessMap.channel),anisotropyMapUv:Je&&h(x.anisotropyMap.channel),clearcoatMapUv:R&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ce&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:te&&h(x.sheenRoughnessMap.channel),specularMapUv:ie&&h(x.specularMap.channel),specularColorMapUv:xe&&h(x.specularColorMap.channel),specularIntensityMapUv:N&&h(x.specularIntensityMap.channel),transmissionMapUv:se&&h(x.transmissionMap.channel),thicknessMapUv:ee&&h(x.thicknessMap.channel),alphaMapUv:be&&h(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(gt||kt),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(We||be),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&gt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ce,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Fe,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:k.filter(Pe=>Pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:pe,decodeVideoTexture:We&&x.map.isVideoTexture===!0&&_t.getTransfer(x.map.colorSpace)===Pt,decodeVideoTextureEmissive:Jt&&x.emissiveMap.isVideoTexture===!0&&_t.getTransfer(x.emissiveMap.colorSpace)===Pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===In,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ut&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&x.extensions.multiDraw===!0||Kt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function b(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let F in x.defines)A.push(F),A.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(g(A,x),f(A,x),A.push(s.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function g(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapPMREM),x.push(A.envMapMaxLod),x.push(A.envMapSize),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.diffuseRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.numLightProbeGrids),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function f(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.diffuseRoughness&&a.enable(25),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let A=d[x.type],F;if(A){let I=Hi[A];F=Hf.clone(I.uniforms)}else F=x.uniforms;return F}function M(x,A){let F=u.get(A);return F!==void 0?++F.usedTimes:(F=new X_(s,A,x,i),c.push(F),u.set(A,F)),F}function v(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function y(){o.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:_,acquireProgram:M,releaseProgram:v,releaseShaderCache:w,programs:c,dispose:y}}function Y_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Z_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function lp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function cp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,m,b,g,f){let _=s[e];return _===void 0?(_={id:d.id,object:d,geometry:h,material:m,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:g,group:f},s[e]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=m,_.materialVariant=a(d),_.groupOrder=b,_.renderOrder=d.renderOrder,_.z=g,_.group=f),e++,_}function l(d,h,m,b,g,f,_){_.reversedDepth===!0&&(g=-g);let M=o(d,h,m,b,g,f);m.transmission>0?n.push(M):m.transparent===!0?i.push(M):t.push(M)}function c(d,h,m,b,g,f){let _=o(d,h,m,b,g,f);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function u(d,h){t.length>1&&t.sort(d||Z_),n.length>1&&n.sort(h||lp),i.length>1&&i.sort(h||lp)}function p(){for(let d=e,h=s.length;d<h;d++){let m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:p,sort:u}}function $_(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new cp,s.set(n,[a])):i>=r.length?(a=new cp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Q_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Ie};break;case"SpotLight":t={position:new B,direction:new B,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function ev(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var tv=0;function nv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function iv(s){let e=new Q_,t=ev(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let i=new B,r=new Ye,a=new Ye;function o(c){let u=0,p=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let h=0,m=0,b=0,g=0,f=0,_=0,M=0,v=0,w=0,y=0,x=0,A=0,F=0,I=0;c.sort(nv);for(let k=0,V=c.length;k<V;k++){let L=c[k],U=L.color,Q=L.intensity,Y=L.distance,fe=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ns?fe=L.shadow.map.texture:fe=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=U.r*Q,p+=U.g*Q,d+=U.b*Q;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],Q);I++}else if(L.isSunLight){let $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let oe=L.shadow,le=t.get(L);le.shadowIntensity=oe.intensity,le.shadowBias=oe.bias,le.shadowNormalBias=oe.normalBias,le.shadowRadius=oe.radius,le.shadowMapSize.copy(oe.mapSize).multiply(oe.getFrameExtents()),n.sunShadow[m]=le,n.sunShadowMap[m]=fe;let Fe=oe.getViewportCount();for(let tt=0;tt<Fe;tt++)n.sunShadowMatrix[b+tt]=oe.getMatrix(tt),n.sunShadowCascade[b+tt]=oe._cascadeData[tt];b+=Fe,m++}n.sun[h]=$,h++}else if(L.isDirectionalLight){let $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let oe=L.shadow,le=t.get(L);le.shadowIntensity=oe.intensity,le.shadowBias=oe.bias,le.shadowNormalBias=oe.normalBias,le.shadowRadius=oe.radius,le.shadowMapSize=oe.mapSize,n.directionalShadow[g]=le,n.directionalShadowMap[g]=fe,n.directionalShadowMatrix[g]=L.shadow.matrix,w++}n.directional[g]=$,g++}else if(L.isSpotLight){let $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(U).multiplyScalar(Q),$.distance=Y,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[_]=$;let oe=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,oe.updateMatrices(L),L.castShadow&&F++),n.spotLightMatrix[_]=oe.matrix,L.castShadow){let le=t.get(L);le.shadowIntensity=oe.intensity,le.shadowBias=oe.bias,le.shadowNormalBias=oe.normalBias,le.shadowRadius=oe.radius,le.shadowMapSize=oe.mapSize,n.spotShadow[_]=le,n.spotShadowMap[_]=fe,x++}_++}else if(L.isRectAreaLight){let $=e.get(L);$.color.copy(U).multiplyScalar(Q),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=$,M++}else if(L.isPointLight){let $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){let oe=L.shadow,le=t.get(L);le.shadowIntensity=oe.intensity,le.shadowBias=oe.bias,le.shadowNormalBias=oe.normalBias,le.shadowRadius=oe.radius,le.shadowMapSize=oe.mapSize,le.shadowCameraNear=oe.camera.near,le.shadowCameraFar=oe.camera.far,n.pointShadow[f]=le,n.pointShadowMap[f]=fe,n.pointShadowMatrix[f]=L.shadow.matrix,y++}n.point[f]=$,f++}else if(L.isHemisphereLight){let $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(Q),$.groundColor.copy(L.groundColor).multiplyScalar(Q),n.hemi[v]=$,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;let D=n.hash;(D.sunLength!==h||D.directionalLength!==g||D.pointLength!==f||D.spotLength!==_||D.rectAreaLength!==M||D.hemiLength!==v||D.numSunShadows!==m||D.numDirectionalShadows!==w||D.numPointShadows!==y||D.numSpotShadows!==x||D.numSpotMaps!==A||D.numLightProbes!==I)&&(n.sun.length=h,n.directional.length=g,n.spot.length=_,n.rectArea.length=M,n.point.length=f,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+A-F,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=I,D.sunLength=h,D.directionalLength=g,D.pointLength=f,D.spotLength=_,D.rectAreaLength=M,D.hemiLength=v,D.numSunShadows=m,D.numDirectionalShadows=w,D.numPointShadows=y,D.numSpotShadows=x,D.numSpotMaps=A,D.numLightProbes=I,n.version=tv++)}function l(c,u){let p=0,d=0,h=0,m=0,b=0,g=0,f=u.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let v=c[_];if(v.isSunLight){let w=n.sun[p];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(f),p++}else if(v.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(f),d++}else if(v.isSpotLight){let w=n.spot[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(f),m++}else if(v.isRectAreaLight){let w=n.rectArea[b];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(f),a.identity(),r.copy(v.matrixWorld),r.premultiply(f),a.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),b++}else if(v.isPointLight){let w=n.point[h];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(f),h++}else if(v.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:n}}function hp(s){let e=new iv(s),t=[],n=[],i=[];function r(p){u.camera=p,t.length=0,n.length=0,i.length=0}function a(p){p.isLightProbeGrid?i.push(p):t.push(p)}function o(p){n.push(p)}function l(){e.setup(t),i.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){e.setupView(t,p)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function sv(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new hp(s),e.set(i,[o])):r>=a.length?(o=new hp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
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
}`,ov=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],lv=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],up=new Ye,mo=new B,hu=new B;function cv(s,e,t){let n=new Cs,i=new nt,r=new nt,a=new Ft,o=new xl,l=new _l,c={},u=t.maxTextureSize,p={[Oi]:In,[In]:Oi,[Mn]:Mn},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:rv,fragmentShader:av}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let m=new qt;m.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ke(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro;let f=this.type;this.render=function(y,x,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;this.type===rf&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ro);let F=s.getRenderTarget(),I=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),k=s.state;k.setBlending(dr),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let V=f!==this.type;V&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(U=>U.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,U=y.length;L<U;L++){let Q=y[L],Y=Q.shadow;if(Y===void 0){je("WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let fe=Y.getFrameExtents();i.multiply(fe),r.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/fe.x),i.x=r.x*fe.x,Y.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/fe.y),i.y=r.y*fe.y,Y.mapSize.y=r.y));let $=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=$,Y.map===null||V===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===ia){if(Q.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new ei(i.x,i.y,{format:Ns,type:Ai,minFilter:_n,magFilter:_n,generateMipmaps:!1}),Y.map.texture.name=Q.name+".shadowMap",Y.map.depthTexture=new as(i.x,i.y,ti),Y.map.depthTexture.name=Q.name+".shadowMapDepth",Y.map.depthTexture.format=ss,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=nn,Y.map.depthTexture.magFilter=nn}else Q.isPointLight?(Y.map=new bo(i.x),Y.map.depthTexture=new Xa(i.x,Ti)):(Y.map=new ei(i.x,i.y),Y.map.depthTexture=new as(i.x,i.y,Ti)),Y.map.depthTexture.name=Q.name+".shadowMap",Y.map.depthTexture.format=ss,this.type===ro?(Y.map.depthTexture.compareFunction=$?Xh:qh,Y.map.depthTexture.minFilter=_n,Y.map.depthTexture.magFilter=_n):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=nn,Y.map.depthTexture.magFilter=nn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==i.x||Y.map.height!==i.y)&&Y.map.setSize(i.x,i.y);let oe=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Q.isPointLight!==!0&&Y.updateMatrices(Q,A);let le=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:A.layers;for(let Fe=0;Fe<oe;Fe++){let tt=Y.getCamera(Fe);if(Q.isPointLight){let re=Y.camera,Me=Y.matrix,Ge=Q.distance||re.far;Ge!==re.far&&(re.far=Ge,re.updateProjectionMatrix()),mo.setFromMatrixPosition(Q.matrixWorld),re.position.copy(mo),hu.copy(re.position),hu.add(ov[Fe]),re.up.copy(lv[Fe]),re.lookAt(hu),re.updateMatrixWorld(),Me.makeTranslation(-mo.x,-mo.y,-mo.z),up.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(up,re.coordinateSystem,re.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,Fe),s.clear();else{Fe===0&&(s.setRenderTarget(Y.map),s.clear());let re=Y.getViewport(Fe);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),k.viewport(a)}n=Y.getFrustum(Fe),v(x,A,tt,Q,le,this.type)}Y.isPointLightShadow!==!0&&this.type===ia&&_(Y,A),Y.needsUpdate=!1}f=this.type,g.needsUpdate=!1,s.setRenderTarget(F,I,D)};function _(y,x){let A=e.update(b);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,h.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),y.mapPass===null?y.mapPass=new ei(i.x,i.y,{format:Ns,type:Ai}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(x,null,A,d,b,null),h.uniforms.shadow_pass.value=y.mapPass.texture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(x,null,A,h,b,null)}function M(y,x,A,F){let I=null,D=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)I=D;else if(I=A.isPointLight===!0?l:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let k=I.uuid,V=x.uuid,L=c[k];L===void 0&&(L={},c[k]=L);let U=L[V];U===void 0&&(U=I.clone(),L[V]=U,x.addEventListener("dispose",w)),I=U}if(I.visible=x.visible,I.wireframe=x.wireframe,F===ia?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:p[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,I.map=x.map,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,A.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let k=s.properties.get(I);k.light=A}return I}function v(y,x,A,F,I,D){if(y.visible===!1)return;if(y.layers.test(I)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&D===ia)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);let L=e.update(y),U=y.material;if(Array.isArray(U)){let Q=L.groups;for(let Y=0,fe=Q.length;Y<fe;Y++){let $=Q[Y],oe=U[$.materialIndex];if(oe&&oe.visible){let le=M(y,oe,F,D);y.onBeforeShadow(s,y,x,A,L,le,$),s.renderBufferDirect(A,null,L,le,y,$),y.onAfterShadow(s,y,x,A,L,le,$)}}}else if(U.visible){let Q=M(y,U,F,D);y.onBeforeShadow(s,y,x,A,L,Q,null),s.renderBufferDirect(A,null,L,Q,y,null),y.onAfterShadow(s,y,x,A,L,Q,null)}}let V=y.children;for(let L=0,U=V.length;L<U;L++)v(V[L],x,A,F,I,D)}function w(y){y.target.removeEventListener("dispose",w);for(let A in c){let F=c[A],I=y.target.uuid;I in F&&(F[I].dispose(),delete F[I])}}}function hv(s,e){function t(){let N=!1,se=new Ft,ee=null,ve=new Ft(0,0,0,0);return{setMask:function(be){ee!==be&&!N&&(s.colorMask(be,be,be,be),ee=be)},setLocked:function(be){N=be},setClear:function(be,ue,Oe,ut,pe){pe===!0&&(be*=ut,ue*=ut,Oe*=ut),se.set(be,ue,Oe,ut),ve.equals(se)===!1&&(s.clearColor(be,ue,Oe,ut),ve.copy(se))},reset:function(){N=!1,ee=null,ve.set(-1,0,0,0)}}}function n(){let N=!1,se=!1,ee=null,ve=null,be=null;return{setReversed:function(ue){if(se!==ue){let Oe=e.get("EXT_clip_control");ue?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),se=ue;let ut=be;be=null,this.setClear(ut)}},getReversed:function(){return se},setTest:function(ue){ue?Ce(s.DEPTH_TEST):at(s.DEPTH_TEST)},setMask:function(ue){ee!==ue&&!N&&(s.depthMask(ue),ee=ue)},setFunc:function(ue){if(se&&(ue=zf[ue]),ve!==ue){switch(ue){case sl:s.depthFunc(s.NEVER);break;case rl:s.depthFunc(s.ALWAYS);break;case al:s.depthFunc(s.LESS);break;case zr:s.depthFunc(s.LEQUAL);break;case ol:s.depthFunc(s.EQUAL);break;case ll:s.depthFunc(s.GEQUAL);break;case cl:s.depthFunc(s.GREATER);break;case hl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=ue}},setLocked:function(ue){N=ue},setClear:function(ue){be!==ue&&(be=ue,se&&(ue=1-ue),s.clearDepth(ue))},reset:function(){N=!1,ee=null,ve=null,be=null,se=!1}}}function i(){let N=!1,se=null,ee=null,ve=null,be=null,ue=null,Oe=null,ut=null,pe=null;return{setTest:function(Ee){N||(Ee?Ce(s.STENCIL_TEST):at(s.STENCIL_TEST))},setMask:function(Ee){se!==Ee&&!N&&(s.stencilMask(Ee),se=Ee)},setFunc:function(Ee,ct,Pe){(ee!==Ee||ve!==ct||be!==Pe)&&(s.stencilFunc(Ee,ct,Pe),ee=Ee,ve=ct,be=Pe)},setOp:function(Ee,ct,Pe){(ue!==Ee||Oe!==ct||ut!==Pe)&&(s.stencilOp(Ee,ct,Pe),ue=Ee,Oe=ct,ut=Pe)},setLocked:function(Ee){N=Ee},setClear:function(Ee){pe!==Ee&&(s.clearStencil(Ee),pe=Ee)},reset:function(){N=!1,se=null,ee=null,ve=null,be=null,ue=null,Oe=null,ut=null,pe=null}}}let r=new t,a=new n,o=new i,l={},c=new WeakMap,u={},p={},d={},h=new WeakMap,m=[],b=null,g=!1,f=null,_=null,M=null,v=null,w=null,y=null,x=null,A=new Ie(0,0,0),F=0,I=!1,D=null,k=null,V=null,L=null,U=null,Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,fe=0,$=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=fe>=1):$.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=fe>=2);let oe=null,le={},Fe=s.getParameter(s.SCISSOR_BOX),tt=s.getParameter(s.VIEWPORT),re=new Ft().fromArray(Fe),Me=new Ft().fromArray(tt);function Ge(N,se,ee,ve){let be=new Uint8Array(4),ue=s.createTexture();s.bindTexture(N,ue),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<ee;Oe++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(se,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(se+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return ue}let Qe={};Qe[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),Qe[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Qe[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Qe[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Ce(s.DEPTH_TEST),a.setFunc(zr),en(!1),gt(Ah),Ce(s.CULL_FACE),Qt(dr);function Ce(N){u[N]!==!0&&(s.enable(N),u[N]=!0)}function at(N){u[N]!==!1&&(s.disable(N),u[N]=!1)}function Kt(N,se){return d[N]!==se?(s.bindFramebuffer(N,se),d[N]=se,N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=se),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=se),!0):!1}function We(N,se){let ee=m,ve=!1;if(N){ee=h.get(se),ee===void 0&&(ee=[],h.set(se,ee));let be=N.textures;if(ee.length!==be.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,Oe=be.length;ue<Oe;ue++)ee[ue]=s.COLOR_ATTACHMENT0+ue;ee.length=be.length,ve=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,ve=!0);ve&&s.drawBuffers(ee)}function At(N){return b!==N?(s.useProgram(N),b=N,!0):!1}let Ct={[fr]:s.FUNC_ADD,[of]:s.FUNC_SUBTRACT,[lf]:s.FUNC_REVERSE_SUBTRACT};Ct[cf]=s.MIN,Ct[hf]=s.MAX;let mt={[uf]:s.ZERO,[df]:s.ONE,[ff]:s.SRC_COLOR,[Ch]:s.SRC_ALPHA,[_f]:s.SRC_ALPHA_SATURATE,[bf]:s.DST_COLOR,[mf]:s.DST_ALPHA,[pf]:s.ONE_MINUS_SRC_COLOR,[Ph]:s.ONE_MINUS_SRC_ALPHA,[xf]:s.ONE_MINUS_DST_COLOR,[gf]:s.ONE_MINUS_DST_ALPHA,[vf]:s.CONSTANT_COLOR,[yf]:s.ONE_MINUS_CONSTANT_COLOR,[Mf]:s.CONSTANT_ALPHA,[Sf]:s.ONE_MINUS_CONSTANT_ALPHA};function Qt(N,se,ee,ve,be,ue,Oe,ut,pe,Ee){if(N===dr){g===!0&&(at(s.BLEND),g=!1);return}if(g===!1&&(Ce(s.BLEND),g=!0),N!==af){if(N!==f||Ee!==I){if((_!==fr||w!==fr)&&(s.blendEquation(s.FUNC_ADD),_=fr,w=fr),Ee)switch(N){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wi:s.blendFunc(s.ONE,s.ONE);break;case Eh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:rt("WebGLState: Invalid blending: ",N);break}else switch(N){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Eh:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",N);break}M=null,v=null,y=null,x=null,A.set(0,0,0),F=0,f=N,I=Ee}return}be=be||se,ue=ue||ee,Oe=Oe||ve,(se!==_||be!==w)&&(s.blendEquationSeparate(Ct[se],Ct[be]),_=se,w=be),(ee!==M||ve!==v||ue!==y||Oe!==x)&&(s.blendFuncSeparate(mt[ee],mt[ve],mt[ue],mt[Oe]),M=ee,v=ve,y=ue,x=Oe),(ut.equals(A)===!1||pe!==F)&&(s.blendColor(ut.r,ut.g,ut.b,pe),A.copy(ut),F=pe),f=N,I=!1}function Gt(N,se){N.side===Mn?at(s.CULL_FACE):Ce(s.CULL_FACE);let ee=N.side===In;se&&(ee=!ee),en(ee),N.blending===Fs&&N.transparent===!1?Qt(dr):Qt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ve=N.stencilWrite;o.setTest(ve),ve&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Jt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ce(s.SAMPLE_ALPHA_TO_COVERAGE):at(s.SAMPLE_ALPHA_TO_COVERAGE)}function en(N){D!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),D=N)}function gt(N){N!==nf?(Ce(s.CULL_FACE),N!==k&&(N===Ah?s.cullFace(s.BACK):N===sf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):at(s.CULL_FACE),k=N}function Wn(N){N!==V&&(Y&&s.lineWidth(N),V=N)}function Jt(N,se,ee){N?(Ce(s.POLYGON_OFFSET_FILL),(L!==se||U!==ee)&&(L=se,U=ee,a.getReversed()&&(se=-se,ee=-ee),s.polygonOffset(se,ee))):at(s.POLYGON_OFFSET_FILL)}function gn(N){N?Ce(s.SCISSOR_TEST):at(s.SCISSOR_TEST)}function un(N){N===void 0&&(N=s.TEXTURE0+Q-1),oe!==N&&(s.activeTexture(N),oe=N)}function kt(N,se,ee){ee===void 0&&(oe===null?ee=s.TEXTURE0+Q-1:ee=oe);let ve=le[ee];ve===void 0&&(ve={type:void 0,texture:void 0},le[ee]=ve),(ve.type!==N||ve.texture!==se)&&(oe!==ee&&(s.activeTexture(ee),oe=ee),s.bindTexture(N,se||Qe[N]),ve.type=N,ve.texture=se)}function z(){let N=le[oe];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Un(){try{s.compressedTexImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function Ht(){try{s.compressedTexImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function Ut(){try{s.texSubImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function Se(){try{s.texSubImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function an(){try{s.compressedTexSubImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function Ze(){try{s.compressedTexSubImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function Je(){try{s.texStorage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function R(){try{s.texStorage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function S(){try{s.texImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function X(){try{s.texImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function ce(N){return p[N]!==void 0?p[N]:s.getParameter(N)}function ae(N,se){p[N]!==se&&(s.pixelStorei(N,se),p[N]=se)}function ge(N){re.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),re.copy(N))}function Te(N){Me.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Me.copy(N))}function te(N,se){let ee=c.get(se);ee===void 0&&(ee=new WeakMap,c.set(se,ee));let ve=ee.get(N);ve===void 0&&(ve=s.getUniformBlockIndex(se,N.name),s.uniformBlockBinding(se,ve,ve),ee.set(N,ve))}function ie(N,se,ee){let be=c.get(se).get(N);l[be]!==ee&&(s.bindBufferBase(s.UNIFORM_BUFFER,be,ee),l[be]=ee)}function xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},p={},oe=null,le={},d={},l={},h=new WeakMap,m=[],b=null,g=!1,f=null,_=null,M=null,v=null,w=null,y=null,x=null,A=new Ie(0,0,0),F=0,I=!1,D=null,k=null,V=null,L=null,U=null,re.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Ce,disable:at,bindFramebuffer:Kt,drawBuffers:We,useProgram:At,setBlending:Qt,setMaterial:Gt,setFlipSided:en,setCullFace:gt,setLineWidth:Wn,setPolygonOffset:Jt,setScissorTest:gn,activeTexture:un,bindTexture:kt,unbindTexture:z,compressedTexImage2D:Un,compressedTexImage3D:Ht,texImage2D:S,texImage3D:X,pixelStorei:ae,getParameter:ce,updateUBOMapping:te,uniformBlockBinding:ie,texStorage2D:Je,texStorage3D:R,texSubImage2D:Ut,texSubImage3D:Se,compressedTexSubImage2D:an,compressedTexSubImage3D:Ze,scissor:ge,viewport:Te,reset:xe}}function uv(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap,p=new Set,d,h=new WeakMap,m=new Set,b=new FinalizationRegistry(R=>m.delete(R)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(R,S){return g?new OffscreenCanvas(R,S):Vr("canvas")}function _(R,S,X){let ce=1,ae=Je(R);if((ae.width>X||ae.height>X)&&(ce=X/Math.max(ae.width,ae.height)),ce<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ge=Math.floor(ce*ae.width),Te=Math.floor(ce*ae.height);d===void 0&&(d=f(ge,Te));let te=S?f(ge,Te):d;return te.width=ge,te.height=Te,te.getContext("2d").drawImage(R,0,0,ge,Te),je("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ge+"x"+Te+")."),te}else return"data"in R&&je("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function M(R){return R.generateMipmaps}function v(R){s.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(R,S,X,ce,ae,ge=!1){if(R!==null){if(s[R]!==void 0)return s[R];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Te;ce&&(Te=e.get("EXT_texture_norm16"),Te||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=S;if(S===s.RED&&(X===s.FLOAT&&(te=s.R32F),X===s.HALF_FLOAT&&(te=s.R16F),X===s.UNSIGNED_BYTE&&(te=s.R8),X===s.UNSIGNED_SHORT&&Te&&(te=Te.R16_EXT),X===s.SHORT&&Te&&(te=Te.R16_SNORM_EXT)),S===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(te=s.R8UI),X===s.UNSIGNED_SHORT&&(te=s.R16UI),X===s.UNSIGNED_INT&&(te=s.R32UI),X===s.BYTE&&(te=s.R8I),X===s.SHORT&&(te=s.R16I),X===s.INT&&(te=s.R32I)),S===s.RG&&(X===s.FLOAT&&(te=s.RG32F),X===s.HALF_FLOAT&&(te=s.RG16F),X===s.UNSIGNED_BYTE&&(te=s.RG8),X===s.UNSIGNED_SHORT&&Te&&(te=Te.RG16_EXT),X===s.SHORT&&Te&&(te=Te.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(te=s.RG8UI),X===s.UNSIGNED_SHORT&&(te=s.RG16UI),X===s.UNSIGNED_INT&&(te=s.RG32UI),X===s.BYTE&&(te=s.RG8I),X===s.SHORT&&(te=s.RG16I),X===s.INT&&(te=s.RG32I)),S===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(te=s.RGB8UI),X===s.UNSIGNED_SHORT&&(te=s.RGB16UI),X===s.UNSIGNED_INT&&(te=s.RGB32UI),X===s.BYTE&&(te=s.RGB8I),X===s.SHORT&&(te=s.RGB16I),X===s.INT&&(te=s.RGB32I)),S===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(te=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(te=s.RGBA16UI),X===s.UNSIGNED_INT&&(te=s.RGBA32UI),X===s.BYTE&&(te=s.RGBA8I),X===s.SHORT&&(te=s.RGBA16I),X===s.INT&&(te=s.RGBA32I)),S===s.RGB&&(X===s.UNSIGNED_SHORT&&Te&&(te=Te.RGB16_EXT),X===s.SHORT&&Te&&(te=Te.RGB16_SNORM_EXT),X===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(te=s.R11F_G11F_B10F)),S===s.RGBA){let ie=ge?Fa:_t.getTransfer(ae);X===s.FLOAT&&(te=s.RGBA32F),X===s.HALF_FLOAT&&(te=s.RGBA16F),X===s.UNSIGNED_BYTE&&(te=ie===Pt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT&&Te&&(te=Te.RGBA16_EXT),X===s.SHORT&&Te&&(te=Te.RGBA16_SNORM_EXT),X===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(R,S){let X;return R?S===null||S===Ti||S===gr?X=s.DEPTH24_STENCIL8:S===ti?X=s.DEPTH32F_STENCIL8:S===aa&&(X=s.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ti||S===gr?X=s.DEPTH_COMPONENT24:S===ti?X=s.DEPTH_COMPONENT32F:S===aa&&(X=s.DEPTH_COMPONENT16),X}function A(R,S){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==nn&&R.minFilter!==_n?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function F(R){let S=new WeakRef(R);n.get(R).__ref=S,m.add(S),b.register(R,S,S)}function I(R){let S=n.get(R).__ref;S!==void 0&&(m.delete(S),b.unregister(S))}function D(R){V(R.target)}function k(R){L(R.target)}function V(R){R.removeEventListener("dispose",D),I(R),Q(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&p.delete(R)}function L(R){R.removeEventListener("dispose",k),I(R),fe(R)}function U(){for(let R of m){let S=R.deref();S!==void 0&&(S.isRenderTarget===!0?L(S):V(S))}m.clear(),p.clear()}function Q(R){let S=n.get(R);if(S.__webglInit===void 0)return;let X=R.source,ce=h.get(X);if(ce){let ae=ce[S.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&Y(R),Object.keys(ce).length===0&&h.delete(X)}n.remove(R)}function Y(R){let S=n.get(R);s.deleteTexture(S.__webglTexture);let X=R.source,ce=h.get(X);delete ce[S.__cacheKey],a.memory.textures--}function fe(R){let S=n.get(R);S.__depthDisposeCallback&&S.__depthDisposeCallback();let X=R.depthTexture;if(X&&X.renderTarget===R&&V(X),R.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(S.__webglFramebuffer[ae]))for(let ge=0;ge<S.__webglFramebuffer[ae].length;ge++)s.deleteFramebuffer(S.__webglFramebuffer[ae][ge]);else s.deleteFramebuffer(S.__webglFramebuffer[ae]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[ae])}else{if(Array.isArray(S.__webglFramebuffer))for(let ae=0;ae<S.__webglFramebuffer.length;ae++)s.deleteFramebuffer(S.__webglFramebuffer[ae]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ae=0;ae<S.__webglColorRenderbuffer.length;ae++)S.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[ae]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ce=R.textures;for(let ae=0,ge=ce.length;ae<ge;ae++){let Te=n.get(ce[ae]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(ce[ae])}n.remove(R)}let $=0;function oe(){$=0}function le(){return $}function Fe(R){$=R}function tt(){let R=$;return R>=i.maxTextures&&je("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),$+=1,R}function re(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.mipmapsAutoUpdate),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Me(R,S){let X=n.get(R);if(R.isVideoTexture&&an(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){let ce=R.image;if(ce===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(X,R,S);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+S)}function Ge(R,S){let X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){Gt(X,R,S);return}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+S)}function Qe(R,S){let X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){Gt(X,R,S);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+S)}function Ce(R,S){let X=n.get(R);if(R.version>0&&X.__version!==R.version){en(X,R,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+S)}let at={[Es]:s.REPEAT,[ri]:s.CLAMP_TO_EDGE,[Gr]:s.MIRRORED_REPEAT},Kt={[nn]:s.NEAREST,[Dl]:s.NEAREST_MIPMAP_NEAREST,[mr]:s.NEAREST_MIPMAP_LINEAR,[_n]:s.LINEAR,[ra]:s.LINEAR_MIPMAP_NEAREST,[ci]:s.LINEAR_MIPMAP_LINEAR},We={[Lf]:s.NEVER,[jh]:s.ALWAYS,[Df]:s.LESS,[qh]:s.LEQUAL,[Ff]:s.EQUAL,[Xh]:s.GEQUAL,[Nf]:s.GREATER,[kf]:s.NOTEQUAL};function At(R,S){if(S.type===ti&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===_n||S.magFilter===ra||S.magFilter===mr||S.magFilter===ci||S.minFilter===_n||S.minFilter===ra||S.minFilter===mr||S.minFilter===ci)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,at[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,at[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,at[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Kt[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Kt[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,We[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==mr&&S.minFilter!==ci||S.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ct(R,S){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",D),F(S));let ce=S.source,ae=h.get(ce);ae===void 0&&(ae={},h.set(ce,ae));let ge=re(S);if(ge!==R.__cacheKey){ae[ge]===void 0&&(ae[ge]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ae[ge].usedTimes++;let Te=ae[R.__cacheKey];Te!==void 0&&(ae[R.__cacheKey].usedTimes--,Te.usedTimes===0&&Y(S)),R.__cacheKey=ge,R.__webglTexture=ae[ge].texture}return X}function mt(R,S,X){return Math.floor(Math.floor(R/X)/S)}function Qt(R,S,X,ce){let ge=R.updateRanges;if(ge.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,X,ce,S.data);else{ge.sort((N,se)=>N.start-se.start);let Te=0;for(let N=1;N<ge.length;N++){let se=ge[Te],ee=ge[N],ve=se.start+se.count,be=mt(ee.start,S.width,4),ue=mt(se.start,S.width,4);ee.start<=ve+1&&be===ue&&mt(ee.start+ee.count-1,S.width,4)===be?se.count=Math.max(se.count,ee.start+ee.count-se.start):(++Te,ge[Te]=ee)}ge.length=Te+1;let te=t.getParameter(s.UNPACK_ROW_LENGTH),ie=t.getParameter(s.UNPACK_SKIP_PIXELS),xe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let N=0,se=ge.length;N<se;N++){let ee=ge[N],ve=Math.floor(ee.start/4),be=Math.ceil(ee.count/4),ue=ve%S.width,Oe=Math.floor(ve/S.width),ut=be,pe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(s.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(s.TEXTURE_2D,0,ue,Oe,ut,pe,X,ce,S.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,te),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(s.UNPACK_SKIP_ROWS,xe)}}function Gt(R,S,X){let ce=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ce=s.TEXTURE_3D);let ae=Ct(R,S),ge=S.source;t.bindTexture(ce,R.__webglTexture,s.TEXTURE0+X);let Te=n.get(ge);if(ge.version!==Te.__version||ae===!0){if(t.activeTexture(s.TEXTURE0+X),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let pe=_t.getPrimaries(_t.workingColorSpace),Ee=S.colorSpace===ps?null:_t.getPrimaries(S.colorSpace),ct=S.colorSpace===ps||pe===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let ie=_(S.image,!1,i.maxTextureSize);ie=Ze(S,ie);let xe=r.convert(S.format,S.colorSpace),N=r.convert(S.type),se=y(S.internalFormat,xe,N,S.normalized,S.colorSpace,S.isVideoTexture);At(ce,S);let ee,ve=S.mipmaps,be=S.isVideoTexture!==!0,ue=Te.__version===void 0||ae===!0,Oe=ge.dataReady,ut=A(S,ie);if(S.isDepthTexture)se=x(S.format===fs,S.type),ue&&(be?t.texStorage2D(s.TEXTURE_2D,1,se,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,se,ie.width,ie.height,0,xe,N,null));else if(S.isDataTexture)if(ve.length>0){be&&ue&&t.texStorage2D(s.TEXTURE_2D,ut,se,ve[0].width,ve[0].height);for(let pe=0,Ee=ve.length;pe<Ee;pe++)ee=ve[pe],be?Oe&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,ee.width,ee.height,xe,N,ee.data):t.texImage2D(s.TEXTURE_2D,pe,se,ee.width,ee.height,0,xe,N,ee.data);S.generateMipmaps=!1}else be?(ue&&t.texStorage2D(s.TEXTURE_2D,ut,se,ie.width,ie.height),Oe&&Qt(S,ie,xe,N)):t.texImage2D(s.TEXTURE_2D,0,se,ie.width,ie.height,0,xe,N,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){be&&ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ut,se,ve[0].width,ve[0].height,ie.depth);for(let pe=0,Ee=ve.length;pe<Ee;pe++)if(ee=ve[pe],S.format!==hi)if(xe!==null)if(be){if(Oe)if(S.layerUpdates.size>0){let ct=iu(ee.width,ee.height,S.format,S.type);for(let Pe of S.layerUpdates){let yt=ee.data.subarray(Pe*ct/ee.data.BYTES_PER_ELEMENT,(Pe+1)*ct/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,Pe,ee.width,ee.height,1,xe,yt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,ee.width,ee.height,ie.depth,xe,ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pe,se,ee.width,ee.height,ie.depth,0,ee.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?Oe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,ee.width,ee.height,ie.depth,xe,N,ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,pe,se,ee.width,ee.height,ie.depth,0,xe,N,ee.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{be&&ue&&t.texStorage2D(s.TEXTURE_2D,ut,se,ve[0].width,ve[0].height);for(let pe=0,Ee=ve.length;pe<Ee;pe++)ee=ve[pe],S.format!==hi?xe!==null?be?Oe&&t.compressedTexSubImage2D(s.TEXTURE_2D,pe,0,0,ee.width,ee.height,xe,ee.data):t.compressedTexImage2D(s.TEXTURE_2D,pe,se,ee.width,ee.height,0,ee.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?Oe&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,ee.width,ee.height,xe,N,ee.data):t.texImage2D(s.TEXTURE_2D,pe,se,ee.width,ee.height,0,xe,N,ee.data)}else if(S.isDataArrayTexture)if(be){if(ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ut,se,ie.width,ie.height,ie.depth),Oe)if(S.layerUpdates.size>0){let pe=iu(ie.width,ie.height,S.format,S.type);for(let Ee of S.layerUpdates){let ct=ie.data.subarray(Ee*pe/ie.data.BYTES_PER_ELEMENT,(Ee+1)*pe/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ee,ie.width,ie.height,1,xe,N,ct)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,xe,N,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,se,ie.width,ie.height,ie.depth,0,xe,N,ie.data);else if(S.isData3DTexture)be?(ue&&t.texStorage3D(s.TEXTURE_3D,ut,se,ie.width,ie.height,ie.depth),Oe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,xe,N,ie.data)):t.texImage3D(s.TEXTURE_3D,0,se,ie.width,ie.height,ie.depth,0,xe,N,ie.data);else if(S.isFramebufferTexture){if(ue)if(be)t.texStorage2D(s.TEXTURE_2D,ut,se,ie.width,ie.height);else{let pe=ie.width,Ee=ie.height;for(let ct=0;ct<ut;ct++)t.texImage2D(s.TEXTURE_2D,ct,se,pe,Ee,0,xe,N,null),pe>>=1,Ee>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let pe=s.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ie.parentNode!==pe){pe.appendChild(ie),p.add(S),pe.onpaint=Ee=>{let ct=Ee.changedElements;for(let Pe of p)ct.includes(Pe.image)&&(Pe.needsUpdate=!0)},pe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ie);else{let ct=s.RGBA,Pe=s.RGBA,yt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ct,Pe,yt,ie)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ve.length>0){if(be&&ue){let pe=Je(ve[0]);t.texStorage2D(s.TEXTURE_2D,ut,se,pe.width,pe.height)}for(let pe=0,Ee=ve.length;pe<Ee;pe++)ee=ve[pe],be?Oe&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,xe,N,ee):t.texImage2D(s.TEXTURE_2D,pe,se,xe,N,ee);S.generateMipmaps=!1}else if(be){if(ue){let pe=Je(ie);t.texStorage2D(s.TEXTURE_2D,ut,se,pe.width,pe.height)}Oe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,N,ie)}else t.texImage2D(s.TEXTURE_2D,0,se,xe,N,ie);M(S)&&S.mipmapsAutoUpdate===!0&&v(ce),Te.__version=ge.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function en(R,S,X){if(S.image.length!==6)return;let ce=Ct(R,S),ae=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+X);let ge=n.get(ae);if(ae.version!==ge.__version||ce===!0){t.activeTexture(s.TEXTURE0+X);let Te=_t.getPrimaries(_t.workingColorSpace),te=S.colorSpace===ps?null:_t.getPrimaries(S.colorSpace),ie=S.colorSpace===ps||Te===te?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let xe=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,se=[];for(let Pe=0;Pe<6;Pe++)!xe&&!N?se[Pe]=_(S.image[Pe],!0,i.maxCubemapSize):se[Pe]=N?S.image[Pe].image:S.image[Pe],se[Pe]=Ze(S,se[Pe]);let ee=se[0],ve=r.convert(S.format,S.colorSpace),be=r.convert(S.type),ue=y(S.internalFormat,ve,be,S.normalized,S.colorSpace),Oe=S.isVideoTexture!==!0,ut=ge.__version===void 0||ce===!0,pe=ae.dataReady,Ee=A(S,ee);At(s.TEXTURE_CUBE_MAP,S);let ct;if(S.isDepthTexture){if(ue=x(S.format===fs,S.type),ut)if(Oe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ue,ee.width,ee.height);else for(let Pe=0;Pe<6;Pe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ue,ee.width,ee.height,0,ve,be,null)}else if(xe){Oe&&ut&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ee,ue,ee.width,ee.height);for(let Pe=0;Pe<6;Pe++){ct=se[Pe].mipmaps;for(let yt=0;yt<ct.length;yt++){let Et=ct[yt];S.format!==hi?ve!==null?Oe?pe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,yt,0,0,Et.width,Et.height,ve,Et.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,yt,ue,Et.width,Et.height,0,Et.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,yt,0,0,Et.width,Et.height,ve,be,Et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,yt,ue,Et.width,Et.height,0,ve,be,Et.data)}}}else{if(ct=S.mipmaps,Oe&&ut){ct.length>0&&Ee++;let Pe=Je(se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ee,ue,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(N){Oe?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,se[Pe].width,se[Pe].height,ve,be,se[Pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ue,se[Pe].width,se[Pe].height,0,ve,be,se[Pe].data);for(let yt=0;yt<ct.length;yt++){let Tn=ct[yt].image[Pe].image;Oe?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,yt+1,0,0,Tn.width,Tn.height,ve,be,Tn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,yt+1,ue,Tn.width,Tn.height,0,ve,be,Tn.data)}}else{Oe?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ve,be,se[Pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ue,ve,be,se[Pe]);for(let yt=0;yt<ct.length;yt++){let Et=ct[yt];Oe?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,yt+1,0,0,ve,be,Et.image[Pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,yt+1,ue,ve,be,Et.image[Pe])}}}M(S)&&S.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),ge.__version=ae.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function gt(R,S,X,ce,ae,ge){let Te=r.convert(X.format,X.colorSpace),te=r.convert(X.type),ie=y(X.internalFormat,Te,te,X.normalized,X.colorSpace),xe=n.get(S),N=n.get(X);if(N.__renderTarget=S,!xe.__hasExternalTextures){let se=Math.max(1,S.width>>ge),ee=Math.max(1,S.height>>ge);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,ge,ie,se,ee,S.depth,0,Te,te,null):t.texImage2D(ae,ge,ie,se,ee,0,Te,te,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Se(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,ae,N.__webglTexture,0,Ut(S)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,ae,N.__webglTexture,ge),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Wn(R,S,X){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){let ce=S.depthTexture,ae=ce&&ce.isDepthTexture?ce.type:null,ge=x(S.stencilBuffer,ae),Te=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Se(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut(S),ge,S.width,S.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut(S),ge,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ge,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,R)}else{let ce=S.textures;for(let ae=0;ae<ce.length;ae++){let ge=ce[ae],Te=r.convert(ge.format,ge.colorSpace),te=r.convert(ge.type),ie=y(ge.internalFormat,Te,te,ge.normalized,ge.colorSpace);Se(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut(S),ie,S.width,S.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut(S),ie,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ie,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Jt(R,S,X){let ce=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(S.depthTexture);ae.__renderTarget=S;let ge=ce?S.depthTexture.image[0]:S.depthTexture.image;(!ae.__webglTexture||ge.width!==S.width||ge.height!==S.height)&&(ge.width=S.width,ge.height=S.height,S.depthTexture.needsUpdate=!0),ce?Ce(S.depthTexture,0):Me(S.depthTexture,0);let Te=ae.__webglTexture,te=Ut(S),ie=ce?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,xe=S.depthTexture.format===fs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===ss)Se(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,ie,Te,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,xe,ie,Te,0);else if(S.depthTexture.format===fs)Se(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,ie,Te,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,xe,ie,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gn(R){let S=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let ce=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ce){let ae=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ce.removeEventListener("dispose",ae)};ce.addEventListener("dispose",ae),S.__depthDisposeCallback=ae}S.__boundDepthTexture=ce}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(X)for(let ce=0;ce<6;ce++)Jt(S.__webglFramebuffer[ce],R,ce);else R.texture.mipmaps.length>0?Jt(S.__webglFramebuffer[0],R,0):Jt(S.__webglFramebuffer,R,0);else if(X){S.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ce]),S.__webglDepthbuffer[ce]===void 0)S.__webglDepthbuffer[ce]=s.createRenderbuffer(),Wn(S.__webglDepthbuffer[ce],R,!1);else{let ae=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=S.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,ge)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Wn(S.__webglDepthbuffer,R,!1);else{let ae=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,ge)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function un(R,S,X){let ce=n.get(R);S!==void 0&&gt(ce.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&gn(R)}function kt(R){let S=R.texture,X=n.get(R),ce=n.get(S);R.addEventListener("dispose",k),F(R);let ae=R.textures,ge=R.isWebGLCubeRenderTarget===!0,Te=ae.length>1;if(Te||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=S.version,a.memory.textures++),ge){X.__webglFramebuffer=[];for(let te=0;te<6;te++)if(S.mipmaps.length>0){X.__webglFramebuffer[te]=[];for(let ie=0;ie<S.mipmaps.length;ie++)X.__webglFramebuffer[te][ie]=s.createFramebuffer()}else X.__webglFramebuffer[te]=s.createFramebuffer()}else{if(S.mipmaps.length>0){X.__webglFramebuffer=[];for(let te=0;te<S.mipmaps.length;te++)X.__webglFramebuffer[te]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Te)for(let te=0,ie=ae.length;te<ie;te++){let xe=n.get(ae[te]);xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&Se(R)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let te=0;te<ae.length;te++){let ie=ae[te];X.__webglColorRenderbuffer[te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[te]);let xe=r.convert(ie.format,ie.colorSpace),N=r.convert(ie.type),se=y(ie.internalFormat,xe,N,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),ee=Ut(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,se,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.RENDERBUFFER,X.__webglColorRenderbuffer[te])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Wn(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ge){t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),At(s.TEXTURE_CUBE_MAP,S);for(let te=0;te<6;te++)if(S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)gt(X.__webglFramebuffer[te][ie],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie);else gt(X.__webglFramebuffer[te],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);M(S)?v(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let te=0,ie=ae.length;te<ie;te++){let xe=ae[te],N=n.get(xe),se=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,N.__webglTexture),At(se,xe),gt(X.__webglFramebuffer,R,xe,s.COLOR_ATTACHMENT0+te,se,0),M(xe)&&v(se)}t.unbindTexture()}else{let te=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(te,ce.__webglTexture),At(te,S),S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)gt(X.__webglFramebuffer[ie],R,S,s.COLOR_ATTACHMENT0,te,ie);else gt(X.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,te,0);M(S)?v(te):S.mipmaps.length>0&&s.texParameteri(te,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&gn(R)}function z(R){let S=R.textures;for(let X=0,ce=S.length;X<ce;X++){let ae=S[X];if(M(ae)&&ae.mipmapsAutoUpdate===!0){let ge=w(R),Te=n.get(ae).__webglTexture;t.bindTexture(ge,Te),v(ge),t.unbindTexture()}}}let Un=[];function Ht(R){if(R.samples>0){if(Se(R)===!1){let S=R.textures,X=R.width,ce=R.height,ae=s.COLOR_BUFFER_BIT,ge=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(R),te=S.length>1;if(te)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);let N=n.get(S[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,X,ce,0,0,X,ce,ae,s.NEAREST),l===!0&&(Un.length=0,Un.push(s.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Un.push(ge),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Un))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),te)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);let N=n.get(S[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,N,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ut(R){return Math.min(i.maxSamples,R.samples)}function Se(R){let S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function an(R){let S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function Ze(R,S){let X=R.colorSpace,ce=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==Bn&&X!==ps&&(_t.getTransfer(X)===Pt?(ce!==hi||ae!==Kn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",X)),S}function Je(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=tt,this.resetTextureUnits=oe,this.getTextureUnits=le,this.setTextureUnits=Fe,this.setTexture2D=Me,this.setTexture2DArray=Ge,this.setTexture3D=Qe,this.setTextureCube=Ce,this.rebindTextures=un,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=gn,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Se,this.dispose=U}function dv(s,e){function t(n,i=ps){let r,a=_t.getTransfer(i);if(n===Kn)return s.UNSIGNED_BYTE;if(n===Nl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===kl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===zh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oh)return s.BYTE;if(n===Bh)return s.SHORT;if(n===aa)return s.UNSIGNED_SHORT;if(n===Fl)return s.INT;if(n===Ti)return s.UNSIGNED_INT;if(n===ti)return s.FLOAT;if(n===Ai)return s.HALF_FLOAT;if(n===Hh)return s.ALPHA;if(n===Vh)return s.RGB;if(n===hi)return s.RGBA;if(n===ss)return s.DEPTH_COMPONENT;if(n===fs)return s.DEPTH_STENCIL;if(n===oa)return s.RED;if(n===Ul)return s.RED_INTEGER;if(n===Ns)return s.RG;if(n===Ol)return s.RG_INTEGER;if(n===Bl)return s.RGBA_INTEGER;if(n===oo||n===lo||n===co||n===ho)if(a===Pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zl||n===Gl||n===Hl||n===Vl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===ql||n===Xl||n===jl||n===Kl||n===uo||n===Jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wl||n===ql)return a===Pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jl)return r.COMPRESSED_R11_EAC;if(n===Kl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===uo)return r.COMPRESSED_RG11_EAC;if(n===Jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yl||n===Zl||n===$l||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$l)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ql)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ec)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ic)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ac)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hc||n===uc||n===dc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===hc)return a===Pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fc||n===pc||n===fo||n===mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pv=`
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

}`,bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ja(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new zn({vertexShader:fv,fragmentShader:pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new Is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xu=class extends Mi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,d=null,h=null,m=null,b=typeof XRWebGLBinding<"u",g=new bu,f={},_=t.getContextAttributes(),M=null,v=null,w=[],y=[],x=new nt,A=null,F=null,I=new xn;I.viewport=new Ft;let D=new xn;D.viewport=new Ft;let k=[I,D],V=new Al,L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Me=w[re];return Me===void 0&&(Me=new Xr,w[re]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(re){let Me=w[re];return Me===void 0&&(Me=new Xr,w[re]=Me),Me.getGripSpace()},this.getHand=function(re){let Me=w[re];return Me===void 0&&(Me=new Xr,w[re]=Me),Me.getHandSpace()};function Q(re){let Me=y.indexOf(re.inputSource);if(Me===-1)return;let Ge=w[Me];Ge!==void 0&&(Ge.update(re.inputSource,re.frame,c||a),Ge.dispatchEvent({type:re.type,data:re.inputSource}))}function Y(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",fe);for(let re=0;re<w.length;re++){let Me=y[re];Me!==null&&(y[re]=null,w[re].disconnect(Me))}L=null,U=null,g.reset();for(let re in f)delete f[re];if(e.setRenderTarget(M),h=null,d=null,p=null,i=null,v=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(x.width,x.height,!1),F!==null){let re=F.camera;re.fov=F.fov,re.zoom=F.zoom,re.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(i,t)),p},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(re){if(i=re,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",fe),_.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ge=null,Qe=null,Ce=null;_.depth&&(Ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ge=_.stencil?fs:ss,Qe=_.stencil?gr:Ti);let at={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(at),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ei(d.textureWidth,d.textureHeight,{format:hi,type:Kn,depthTexture:new as(d.textureWidth,d.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,Ge),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ge={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,Ge),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new ei(h.framebufferWidth,h.framebufferHeight,{format:hi,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function fe(re){for(let Me=0;Me<re.removed.length;Me++){let Ge=re.removed[Me],Qe=y.indexOf(Ge);Qe>=0&&(y[Qe]=null,w[Qe].disconnect(Ge))}for(let Me=0;Me<re.added.length;Me++){let Ge=re.added[Me],Qe=y.indexOf(Ge);if(Qe===-1){for(let at=0;at<w.length;at++)if(at>=y.length){y.push(Ge),Qe=at;break}else if(y[at]===null){y[at]=Ge,Qe=at;break}if(Qe===-1)break}let Ce=w[Qe];Ce&&Ce.connect(Ge)}}function $(re,Me){Me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(i===null)return;let Me=re.near,Ge=re.far;g.texture!==null&&(g.depthNear>0&&(Me=g.depthNear),g.depthFar>0&&(Ge=g.depthFar)),V.near=D.near=I.near=Me,V.far=D.far=I.far=Ge,(L!==V.near||U!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),L=V.near,U=V.far),V.layers.mask=re.layers.mask|6,I.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;let Qe=re.parent,Ce=V.cameras;$(V,Qe);for(let at=0;at<Ce.length;at++)$(Ce[at],Qe);V.projectionMatrix.copy(I.projectionMatrix),V.projectionMatrixInverse.copy(I.projectionMatrixInverse),F===null&&re.isPerspectiveCamera&&(F={camera:re,fov:re.fov,zoom:re.zoom}),oe(re,V,Qe)};function oe(re,Me,Ge){Ge===null?re.matrix.copy(Me.matrixWorld):(re.matrix.copy(Ge.matrixWorld),re.matrix.invert(),re.matrix.multiply(Me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Me.projectionMatrix),re.projectionMatrixInverse.copy(Me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Qs*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=re)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(re){return f[re]};let le=null;function Fe(re,Me){if(u=Me.getViewerPose(c||a),m=Me,u!==null){let Ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let Qe=!1;Ge.length!==V.cameras.length&&(V.cameras.length=0,Qe=!0);for(let We=0;We<Ge.length;We++){let At=Ge[We],Ct=null;if(h!==null)Ct=h.getViewport(At);else{let Qt=p.getViewSubImage(d,At);Ct=Qt.viewport,We===0&&(e.setRenderTargetTextures(v,Qt.colorTexture,Qt.depthStencilTexture),e.setRenderTarget(v))}let mt=k[We];mt===void 0&&(mt=new xn,mt.layers.enable(We),mt.viewport=new Ft,k[We]=mt),mt.matrix.fromArray(At.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(At.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),We===0&&(V.matrix.copy(mt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Qe===!0&&V.cameras.push(mt)}let Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let We=p.getDepthInformation(Ge[0]);We&&We.isValid&&We.texture&&g.init(We,i.renderState)}if(Ce&&Ce.includes("camera-access")&&b){e.state.unbindTexture(),p=n.getBinding();for(let We=0;We<Ge.length;We++){let At=Ge[We].camera;if(At){let Ct=f[At];Ct||(Ct=new ja,f[At]=Ct);let mt=p.getCameraImage(At);Ct.sourceTexture=mt}}}}for(let Ge=0;Ge<w.length;Ge++){let Qe=y[Ge],Ce=w[Ge];Qe!==null&&Ce!==void 0&&Ce.update(Qe,Me,c||a)}le&&le(re,Me),Me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Me}),m=null}let tt=new dp;tt.setAnimationLoop(Fe),this.setAnimationLoop=function(re){le=re},this.dispose=function(){}}},mv=new Ye,Mp=new lt;Mp.set(-1,0,0,0,1,0,0,0,1);function gv(s,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,eu(s)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function i(g,f,_,M,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),p(g,f)):f.isMeshPhongMaterial?(r(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&h(g,f,v)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),b(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,_,M):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===In&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===In&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let _=e.get(f),M=_.envMap,v=_.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Mp),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,_,M){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*_,g.scale.value=M*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function h(g,f,_){g.ior.value=f.ior,f.diffuseRoughness>0&&(g.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===In&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function b(g,f){let _=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bv(s,e,t,n){let i={},r={};function a(_,M){let v=M.program;n.uniformBlockBinding(_,v,i[_.id])}function o(_,M){let v=i[_.id];v===void 0&&(m(_),v=l(_),i[_.id]=v,_.addEventListener("dispose",g));let w=M.program;n.updateUBOMapping(_,w);let y=e.render.frame;r[_.id]!==y&&(c(_),r[_.id]=y)}function l(_){let M=s.createBuffer(),v=_.__size,w=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,v,w),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function c(_){let M=i[_.id],v=_.uniforms,w=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let y=0,x=v.length;y<x;y++){let A=v[y];if(Array.isArray(A))for(let F=0,I=A.length;F<I;F++)u(A[F],y,F,w);else u(A,y,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(_,M,v,w){if(d(_,M,v,w)===!0){let y=_.__offset,x=_.value;if(Array.isArray(x)){let A=0;for(let F=0;F<x.length;F++){let I=x[F],D=b(I,!0);p(I,_.__data,A),A+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,_.__data)}}function p(_,M,v){typeof _=="number"||typeof _=="boolean"?M[v]=_:_.isMatrix3?(M[v]=_.elements[0],M[v+1]=_.elements[1],M[v+2]=_.elements[2],M[v+3]=0,M[v+4]=_.elements[3],M[v+5]=_.elements[4],M[v+6]=_.elements[5],M[v+7]=0,M[v+8]=_.elements[6],M[v+9]=_.elements[7],M[v+10]=_.elements[8],M[v+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-v),v):_.toArray(M,v)}function d(_,M,v,w){let y=_.value,x=M+"_"+v;if(Array.isArray(y)){w[x]===void 0&&(w[x]=[]);let A=w[x],F=!1;for(let I=0;I<y.length;I++)h(y[I],A,I)===!0&&(F=!0);return F}return h(y,w,x)}function h(_,M,v){if(M[v]===void 0)return typeof _=="number"||typeof _=="boolean"?M[v]=_:ArrayBuffer.isView(_)?M[v]=_.slice():M[v]=_.clone(),!0;{let w=M[v];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return M[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function m(_){let M=_.uniforms,v=0,w=16;for(let x=0,A=M.length;x<A;x++){let F=Array.isArray(M[x])?M[x]:[M[x]];for(let I=0,D=F.length;I<D;I++){let k=F[I],V=Array.isArray(k.value)?k.value:[k.value],L=Array.isArray(M[x])||Array.isArray(k.value),U=v;for(let Y=0,fe=V.length;Y<fe;Y++){let $=V[Y],oe=b($,L),le=v%w,Fe=le%oe.boundary,tt=le+Fe;v+=Fe,tt!==0&&w-tt<oe.storage&&(v+=w-tt),Y===0&&(U=v),v+=oe.storage}let Q=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new Q((v-U)/Float32Array.BYTES_PER_ELEMENT),k.__offset=U}}let y=v%w;return y>0&&(v+=w-y),_.__size=v,_.__cache={},this}function b(_,M){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):je("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(_){let M=_.target;M.removeEventListener("dispose",g),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function f(){for(let _ in i)s.deleteBuffer(i[_]);i={},r={}}return{bind:a,update:o,dispose:f}}var xv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gi=null;function _v(){return Gi===null&&(Gi=new Rs(xv,16,16,Ns,Ai),Gi.name="DFG_LUT",Gi.minFilter=_n,Gi.magFilter=_n,Gi.wrapS=ri,Gi.wrapT=ri,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}var Mc=class{constructor(e={}){let{canvas:t=Uf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Kn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let b=h,g=new Set([Bl,Ol,Ul]),f=new Set([Kn,Ti,aa,gr,Nl,kl]),_=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},w=null,y=null,x=[],A=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,k=null,V=null,L=null,U=null;this._outputColorSpace=Wt;let Q=0,Y=0,fe=null,$=-1,oe=null,le=new Ft,Fe=new Ft,tt=null,re=new Ie(0),Me=0,Ge=t.width,Qe=t.height,Ce=1,at=null,Kt=null,We=new Ft(0,0,Ge,Qe),At=new Ft(0,0,Ge,Qe),Ct=!1,mt=new Cs,Qt=new pl,Gt=!1,en=!1,gt=new Ye,Wn=new B,Jt=new Ft,gn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},un=!1;function kt(){return fe===null?Ce:1}let z=n;function Un(E,P){return t.getContext(E,P)}let Ht,Ut,Se,an,Ze,Je,R,S,X,ce,ae,ge,Te,te,ie,xe,N,se,ee,ve,be,ue,Oe;try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),z===null){let P="webgl2";if(z=Un(P,E),z===null)throw Un(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ut()}catch(E){throw t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),rt("WebGLRenderer: "+E.message),E}function ut(){Ht=new Px(z),Ht.init(),be=new dv(z,Ht),Ut=new _x(z,Ht,e,be),Se=new hv(z,Ht),Ut.reversedDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),V=z.createFramebuffer(),L=z.createFramebuffer(),U=z.createFramebuffer(),an=new Dx(z),Ze=new Y_,Je=new uv(z,Ht,Se,Ze,Ut,be,an),R=new Cx(I),S=new Ng(z),ue=new bx(z,S),X=new Ix(z,S,an,ue),ce=new Nx(z,X,S,ue,an),se=new Fx(z,Ut,Je),ie=new vx(Ze),ae=new J_(I,R,Ht,Ut,ue,ie),ge=new gv(I,Ze),Te=new $_,te=new sv(Ht),N=new gx(I,R,Se,ce,m,l),xe=new cv(I,ce,Ut),Oe=new bv(z,an,Ut,Se),ee=new xx(z,Ht,an),ve=new Lx(z,Ht,an),an.programs=ae.programs,I.capabilities=Ut,I.extensions=Ht,I.properties=Ze,I.renderLists=Te,I.shadowMap=xe,I.state=Se,I.info=an}b!==Kn&&(F=new Ux(b,t.width,t.height,o,i,r));let pe=new xu(I,z);this.xr=pe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=Ht.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ht.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(E){E!==void 0&&(Ce=E,this.setSize(Ge,Qe,!1))},this.getSize=function(E){return E.set(Ge,Qe)},this.setSize=function(E,P,Z=!0){if(pe.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=E,Qe=P,t.width=Math.floor(E*Ce),t.height=Math.floor(P*Ce),Z===!0&&(t.style.width=E+"px",t.style.height=P+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,E,P)},this.getDrawingBufferSize=function(E){return E.set(Ge*Ce,Qe*Ce).floor()},this.setDrawingBufferSize=function(E,P,Z){Ge=E,Qe=P,Ce=Z,t.width=Math.floor(E*Z),t.height=Math.floor(P*Z),this.setViewport(0,0,E,P)},this.setEffects=function(E){if(b===Kn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let P=0;P<E.length;P++)if(E[P].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(le)},this.getViewport=function(E){return E.copy(We)},this.setViewport=function(E,P,Z,q){E.isVector4?We.set(E.x,E.y,E.z,E.w):We.set(E,P,Z,q),Se.viewport(le.copy(We).multiplyScalar(kt()).round())},this.getScissor=function(E){return E.copy(At)},this.setScissor=function(E,P,Z,q){E.isVector4?At.set(E.x,E.y,E.z,E.w):At.set(E,P,Z,q),Se.scissor(Fe.copy(At).multiplyScalar(kt()).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(E){Se.setScissorTest(Ct=E)},this.setOpaqueSort=function(E){at=E},this.setTransparentSort=function(E){Kt=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,P=!0,Z=!0){let q=0;if(E){let j=!1;if(fe!==null){let we=fe.texture.format;j=g.has(we)}if(j){let we=fe.texture.type,ze=f.has(we),_e=N.getClearColor(),Ae=N.getClearAlpha(),qe=_e.r,st=_e.g,ft=_e.b;ze?(_[0]=qe,_[1]=st,_[2]=ft,_[3]=Ae,z.clearBufferuiv(z.COLOR,0,_)):(M[0]=qe,M[1]=st,M[2]=ft,M[3]=Ae,z.clearBufferiv(z.COLOR,0,M))}else q|=z.COLOR_BUFFER_BIT}P&&(q|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),k=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),N.dispose(),Te.dispose(),te.dispose(),Je.dispose(),Ze.dispose(),R.dispose(),ce.dispose(),X.dispose(),ue.dispose(),Oe.dispose(),ae.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",gi),pe.removeEventListener("sessionend",_s),ln.stop()};function Ee(E){E.preventDefault(),Na("WebGLRenderer: Context Lost."),D=!0}function ct(){Na("WebGLRenderer: Context Restored."),D=!1;let E=an.autoReset,P=xe.enabled,Z=xe.autoUpdate,q=xe.needsUpdate,j=xe.type;ut(),an.autoReset=E,xe.enabled=P,xe.autoUpdate=Z,xe.needsUpdate=q,xe.type=j}function Pe(E){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function yt(E){let P=E.target;P.removeEventListener("dispose",yt),Et(P)}function Et(E){Tn(E),Ze.remove(E)}function Tn(E){let P=Ze.get(E).programs;P!==void 0&&(P.forEach(function(Z){ae.releaseProgram(Z)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,P,Z,q,j,we){P===null&&(P=gn);let ze=j.isMesh&&j.matrixWorld.determinantAffine()<0,_e=Xc(E,P,Z,q,j);Se.setMaterial(q,ze);let Ae=Z.index,qe=1;if(q.wireframe===!0){if(Ae=X.getWireframeAttribute(Z),Ae===void 0)return;qe=2}let st=Z.drawRange,ft=Z.attributes.position,Ve=st.start*qe,bt=(st.start+st.count)*qe;we!==null&&(Ve=Math.max(Ve,we.start*qe),bt=Math.min(bt,(we.start+we.count)*qe)),Ae!==null?(Ve=Math.max(Ve,0),bt=Math.min(bt,Ae.count)):ft!=null&&(Ve=Math.max(Ve,0),bt=Math.min(bt,ft.count));let Ot=bt-Ve;if(Ot<0||Ot===1/0)return;ue.setup(j,q,_e,Z,Ae);let Lt,Dt=ee;if(Ae!==null&&(Lt=S.get(Ae),Dt=ve,Dt.setIndex(Lt)),j.isMesh)q.wireframe===!0?(Se.setLineWidth(q.wireframeLinewidth*kt()),Dt.setMode(z.LINES)):Dt.setMode(z.TRIANGLES);else if(j.isLine){let bn=q.linewidth;bn===void 0&&(bn=1),Se.setLineWidth(bn*kt()),j.isLineSegments?Dt.setMode(z.LINES):j.isLineLoop?Dt.setMode(z.LINE_LOOP):Dt.setMode(z.LINE_STRIP)}else j.isPoints?Dt.setMode(z.POINTS):j.isSprite&&Dt.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(Ht.get("WEBGL_multi_draw"))Dt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let bn=j._multiDrawStarts,He=j._multiDrawCounts,cn=j._multiDrawCount,St=Ae?S.get(Ae).bytesPerElement:1,T=Ze.get(q).currentProgram.getUniforms();for(let O=0;O<cn;O++)T.setValue(z,"_gl_DrawID",O),Dt.render(bn[O]/St,He[O])}else if(j.isInstancedMesh)Dt.renderInstances(Ve,Ot,j.count);else if(Z.isInstancedBufferGeometry){let bn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,He=Math.min(Z.instanceCount,bn);Dt.renderInstances(Ve,Ot,He)}else Dt.render(Ve,Ot)};function Po(E,P,Z,q){k!==null&&E.isNodeMaterial&&k.setObject(q,E),Gt===!0&&ie.setState(E,Z,!1),E.transparent===!0&&E.side===Mn&&E.forceSinglePass===!1?(E.side=In,E.needsUpdate=!0,ni(E,P,q),E.side=Oi,E.needsUpdate=!0,ni(E,P,q),E.side=Mn):ni(E,P,q)}this.compile=function(E,P,Z=null){Z===null&&(Z=E),k!==null&&k.renderStart(E,P,Z),y=te.get(Z),y.init(P),A.push(y),Z.traverseVisible(function(j){j.isLight&&j.layers.test(P.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),E!==Z&&E.traverseVisible(function(j){j.isLight&&j.layers.test(P.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),y.setupLights(),k!==null&&k.updateLights(y.state.lightsArray),en=this.localClippingEnabled,Gt=ie.init(this.clippingPlanes,en),Gt===!0&&ie.setGlobalState(this.clippingPlanes,P),k!==null&&xe.render(y.state.shadowsArray,Z,P);let q=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let we=j.material;if(we)if(Array.isArray(we))for(let ze=0;ze<we.length;ze++){let _e=we[ze];Po(_e,Z,P,j),q.add(_e)}else Po(we,Z,P,j),q.add(we)}),y=A.pop(),k!==null&&k.renderEnd(),q},this.compileAsync=function(E,P,Z=null){let q=this.compile(E,P,Z);return new Promise(j=>{function we(){if(q.forEach(function(ze){let Ae=Ze.get(ze).currentProgram;(Ae===void 0||Ae.isReady())&&q.delete(ze)}),q.size===0){j(E);return}setTimeout(we,10)}Ht.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ci=null;function Xi(E){Ci&&Ci(E)}function gi(){ln.stop()}function _s(){ln.start()}let ln=new dp;ln.setAnimationLoop(Xi),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(E){Ci=E,pe.setAnimationLoop(E),E===null?ln.stop():ln.start()},pe.addEventListener("sessionstart",gi),pe.addEventListener("sessionend",_s),this.render=function(E,P){if(P!==void 0&&P.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(E,P);let Z=pe.enabled===!0&&pe.isPresenting===!0,q=F!==null&&(fe===null||Z)&&F.begin(I,fe);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(P),P=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,P,fe),y=te.get(E,A.length),y.init(P),y.state.textureUnits=Je.getTextureUnits(),A.push(y),gt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?Qt.setFromArrayCamera(P):mt.setFromProjectionMatrix(gt,ai,P.reversedDepth),en=this.localClippingEnabled,Gt=ie.init(this.clippingPlanes,en),w=Te.get(E,x.length),w.init(),x.push(w),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let ze=I.xr.getDepthSensingMesh();ze!==null&&bi(ze,P,-1/0,I.sortObjects)}bi(E,P,0,I.sortObjects),w.finish(),k!==null&&k.updateLights(y.state.lightsArray),I.sortObjects===!0&&w.sort(at,Kt),un=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,un&&N.addToRenderList(w,E),this.info.autoReset===!0&&this.info.reset(),Gt===!0&&ie.beginShadows();let j=y.state.shadowsArray;if(xe.render(j,E,P),Gt===!0&&ie.endShadows(),(q&&F.hasRenderPass())===!1){let ze=w.opaque,_e=w.transmissive;if(y.setupLights(),P.isArrayCamera){let Ae=P.cameras;if(_e.length>0)for(let qe=0,st=Ae.length;qe<st;qe++){let ft=Ae[qe];Vs(ze,_e,E,ft)}un&&N.render(E);for(let qe=0,st=Ae.length;qe<st;qe++){let ft=Ae[qe];Hs(w,E,ft,ft.viewport)}}else _e.length>0&&Vs(ze,_e,E,P),un&&N.render(E),Hs(w,E,P)}fe!==null&&Y===0&&(Je.updateMultisampleRenderTarget(fe),Je.updateRenderTargetMipmap(fe)),q&&F.end(I),E.isScene===!0&&E.onAfterRender(I,E,P),ue.resetDefaultState(),$=-1,oe=null,A.pop(),A.length>0?(y=A[A.length-1],Je.setTextureUnits(y.state.textureUnits),Gt===!0&&ie.setGlobalState(I.clippingPlanes,y.state.camera)):y=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,k!==null&&k.renderEnd()};function bi(E,P,Z,q){if(E.visible===!1)return;if(E.layers.test(P.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(P);else if(E.isLight)y.pushLight(E),E.castShadow&&y.pushShadow(E);else if(E.isSprite){let ze=P.isArrayCamera?Qt:mt;if(!E.frustumCulled||E.intersectsFrustum(ze)){q&&Jt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(gt);let _e=ce.update(E),Ae=E.material;Ae.visible&&w.push(E,_e,Ae,Z,Jt.z,null,P)}}else if(E.isMesh||E.isLine||E.isPoints){let ze=P.isArrayCamera?Qt:mt;if(!E.frustumCulled||E.intersectsFrustum(ze)){let _e=ce.update(E),Ae=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Jt.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Jt.copy(_e.boundingSphere.center)),Jt.applyMatrix4(E.matrixWorld).applyMatrix4(gt)),Array.isArray(Ae)){let qe=_e.groups;for(let st=0,ft=qe.length;st<ft;st++){let Ve=qe[st],bt=Ae[Ve.materialIndex];bt&&bt.visible&&w.push(E,_e,bt,Z,Jt.z,Ve,P)}}else Ae.visible&&w.push(E,_e,Ae,Z,Jt.z,null,P)}}}let we=E.children;for(let ze=0,_e=we.length;ze<_e;ze++)bi(we[ze],P,Z,q)}function Hs(E,P,Z,q){let{opaque:j,transmissive:we,transparent:ze}=E;y.setupLightsView(Z),Gt===!0&&ie.setGlobalState(I.clippingPlanes,Z),q&&Se.viewport(le.copy(q)),j.length>0&&Jn(j,P,Z),we.length>0&&Jn(we,P,Z),ze.length>0&&Jn(ze,P,Z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Vs(E,P,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[q.id]===void 0){let Ve=Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[q.id]=new ei(1,1,{generateMipmaps:!0,type:Ve?Ai:Kn,minFilter:ci,samples:Math.max(4,Ut.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let we=y.state.transmissionRenderTarget[q.id],ze=q.viewport||le;we.setSize(ze.z*I.transmissionResolutionScale,ze.w*I.transmissionResolutionScale);let _e=I.getRenderTarget(),Ae=I.getActiveCubeFace(),qe=I.getActiveMipmapLevel();I.setRenderTarget(we),I.getClearColor(re),Me=I.getClearAlpha(),Me<1&&I.setClearColor(16777215,.5),I.clear(),un&&N.render(Z);let st=I.toneMapping;I.toneMapping=Bi;let ft=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),y.setupLightsView(q),Gt===!0&&ie.setGlobalState(I.clippingPlanes,q),Jn(E,Z,q),Je.updateMultisampleRenderTarget(we),Je.updateRenderTargetMipmap(we),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let bt=0,Ot=P.length;bt<Ot;bt++){let Lt=P[bt],{object:Dt,geometry:bn,material:He,group:cn}=Lt;if(He.side===Mn&&Dt.layers.test(q.layers)){let St=He.side;He.side=In,He.needsUpdate=!0,Le(Dt,Z,q,bn,He,cn),He.side=St,He.needsUpdate=!0,Ve=!0}}Ve===!0&&(Je.updateMultisampleRenderTarget(we),Je.updateRenderTargetMipmap(we))}I.setRenderTarget(_e,Ae,qe),I.setClearColor(re,Me),ft!==void 0&&(q.viewport=ft),I.toneMapping=st}function Jn(E,P,Z){let q=P.isScene===!0?P.overrideMaterial:null;for(let j=0,we=E.length;j<we;j++){let ze=E[j],{object:_e,geometry:Ae,group:qe}=ze,st=ze.material;st.allowOverride===!0&&q!==null&&(st=q),_e.layers.test(Z.layers)&&Le(_e,P,Z,Ae,st,qe)}}function Le(E,P,Z,q,j,we){k!==null&&j.isNodeMaterial&&k.setObject(E,j),E.onBeforeRender(I,P,Z,q,j,we),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(I,P,Z,q,E,we),j.transparent===!0&&j.side===Mn&&j.forceSinglePass===!1?(j.side=In,j.needsUpdate=!0,I.renderBufferDirect(Z,P,q,j,E,we),j.side=Oi,j.needsUpdate=!0,I.renderBufferDirect(Z,P,q,j,E,we),j.side=Mn):I.renderBufferDirect(Z,P,q,j,E,we),E.onAfterRender(I,P,Z,q,j,we)}function Pi(E){let P=0;for(let Z of E)Z.texture!==null&&P++;return P}function ni(E,P,Z){P.isScene!==!0&&(P=gn);let q=Ze.get(E),j=y.state.lights,we=y.state.shadowsArray,ze=j.state.version,_e=ae.getParameters(E,j.state,we,P,Z,y.state.lightProbeGridArray),Ae=ae.getProgramCacheKey(_e),qe=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?P.environment:null,q.fog=P.fog;let st=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=R.get(E.envMap||q.environment,st),q.envMapRotation=q.environment!==null&&E.envMap===null?P.environmentRotation:E.envMapRotation,qe===void 0&&(E.addEventListener("dispose",yt),qe=new Map,q.programs=qe,q.programVariants=new Map);let ft=qe.get(Ae);if(ft!==void 0){if(q.currentProgram===ft&&q.lightsStateVersion===ze)return ii(E,_e),ft}else _e.uniforms=ae.getUniforms(E),k!==null&&E.isNodeMaterial&&k.build(E,Z,_e),E.onBeforeCompile(_e,I),ft=ae.acquireProgram(_e,Ae),qe.set(Ae,ft),q.uniforms=_e.uniforms;let Ve=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=ie.uniform),ii(E,_e),q.needsLights=va(E),q.lightsStateVersion=ze,q.needsLights&&(Ve.ambientLightColor.value=j.state.ambient,Ve.lightProbe.value=j.state.probe,Ve.sunLights.value=j.state.sun,Ve.sunLightShadows.value=j.state.sunShadow,Ve.directionalLights.value=j.state.directional,Ve.directionalLightShadows.value=j.state.directionalShadow,Ve.spotLights.value=j.state.spot,Ve.spotLightShadows.value=j.state.spotShadow,Ve.rectAreaLights.value=j.state.rectArea,Ve.ltc_1.value=j.state.rectAreaLTC1,Ve.ltc_2.value=j.state.rectAreaLTC2,Ve.pointLights.value=j.state.point,Ve.pointLightShadows.value=j.state.pointShadow,Ve.hemisphereLights.value=j.state.hemi,Ve.sunShadowMatrix.value=j.state.sunShadowMatrix,Ve.sunShadowCascade.value=j.state.sunShadowCascade,Ve.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ve.spotLightMatrix.value=j.state.spotLightMatrix,Ve.spotLightMap.value=j.state.spotLightMap,Ve.pointShadowMatrix.value=j.state.pointShadowMatrix),q.numLightProbeGrids=Pi(y.state.lightProbeGridArray),q.currentProgram=ft,q.uniformsList=null,ft}function ji(E,P,Z,q,j){let we=Ze.get(E),ze=we.currentProgram.id+","+q+","+j,_e=we.programVariants.get(ze);return _e===void 0?(_e=ni(E,P,Z),we.programVariants.set(ze,_e)):(we.currentProgram=_e,we.uniformsList=null,we.outputColorSpace=q,we.toneMapping=j),_e}function Yn(E){if(E.uniformsList===null){let P=E.currentProgram.getUniforms();E.uniformsList=ua.seqWithValue(P.seq,E.uniforms)}return E.uniformsList}function ii(E,P){let Z=Ze.get(E);Z.outputColorSpace=P.outputColorSpace,Z.batching=P.batching,Z.batchingColor=P.batchingColor,Z.instancing=P.instancing,Z.instancingColor=P.instancingColor,Z.instancingMorph=P.instancingMorph,Z.skinning=P.skinning,Z.morphTargets=P.morphTargets,Z.morphNormals=P.morphNormals,Z.morphColors=P.morphColors,Z.morphTargetsCount=P.morphTargetsCount,Z.numClippingPlanes=P.numClippingPlanes,Z.numIntersection=P.numClipIntersection,Z.vertexAlphas=P.vertexAlphas,Z.vertexTangents=P.vertexTangents,Z.toneMapping=P.toneMapping}function Xc(E,P,Z,q,j){P.isScene!==!0&&(P=gn),Je.resetTextureUnits();let we=P.fog,ze=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?P.environment:null,_e=fe===null?I.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:_t.workingColorSpace,Ae=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,qe=R.get(q.envMap||ze,Ae),st=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ft=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ve=!!Z.morphAttributes.position,bt=!!Z.morphAttributes.normal,Ot=!!Z.morphAttributes.color,Lt=Bi;q.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Lt=I.toneMapping);let Dt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,bn=Dt!==void 0?Dt.length:0,He=Ze.get(q),cn=y.state.lights;if(Gt===!0&&(en===!0||E!==oe)){let he=E===oe&&q.id===$;ie.setState(q,E,he)}let St=!1,T=!1;q.version===He.__version?He.needsLights&&He.lightsStateVersion!==cn.state.version||j.isBatchedMesh&&He.batching===!1||!j.isBatchedMesh&&He.batching===!0||j.isBatchedMesh&&He.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&He.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&He.instancing===!1||!j.isInstancedMesh&&He.instancing===!0||j.isSkinnedMesh&&He.skinning===!1||!j.isSkinnedMesh&&He.skinning===!0||j.isInstancedMesh&&He.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&He.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&He.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&He.instancingMorph===!1&&j.morphTexture!==null||He.envMap!==qe||q.fog===!0&&He.fog!==we||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ie.numPlanes||He.numIntersection!==ie.numIntersection)||He.vertexAlphas!==st||He.vertexTangents!==ft||He.morphTargets!==Ve||He.morphNormals!==bt||He.morphColors!==Ot||He.morphTargetsCount!==bn||He.numLightProbeGrids!==Pi(y.state.lightProbeGridArray)?St=!0:(He.outputColorSpace!==_e||He.toneMapping!==Lt)&&(T=!0):(St=!0,He.__version=q.version);let O=He.currentProgram;(St===!0||T===!0)&&(O=T===!0?ji(q,P,j,_e,Lt):ni(q,P,j),k&&q.isNodeMaterial&&k.onUpdateProgram(q,O,He));let C=!1,ne=!1,G=!1,J=O.getUniforms(),me=He.uniforms;if(Se.useProgram(O.program)&&(C=!0,ne=!0,G=!0),q.id!==$&&($=q.id,ne=!0),C||oe!==E){Se.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),J.setValue(z,"projectionMatrix",E.projectionMatrix),J.setValue(z,"viewMatrix",E.matrixWorldInverse);let de=J.map.cameraPosition;de!==void 0&&de.setValue(z,Wn.setFromMatrixPosition(E.matrixWorld)),Ut.logarithmicDepthBuffer&&J.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&J.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),oe!==E&&(oe=E,ne=!0,G=!0)}if(He.needsLights&&(cn.state.sunShadowMap.length>0&&J.setValue(z,"sunShadowMap",cn.state.sunShadowMap,Je),cn.state.directionalShadowMap.length>0&&J.setValue(z,"directionalShadowMap",cn.state.directionalShadowMap,Je),cn.state.spotShadowMap.length>0&&J.setValue(z,"spotShadowMap",cn.state.spotShadowMap,Je),cn.state.pointShadowMap.length>0&&J.setValue(z,"pointShadowMap",cn.state.pointShadowMap,Je)),j.isSkinnedMesh){J.setOptional(z,j,"bindMatrix"),J.setOptional(z,j,"bindMatrixInverse");let he=j.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),J.setValue(z,"boneTexture",he.boneTexture,Je))}j.isBatchedMesh&&(J.setOptional(z,j,"batchingTexture"),J.setValue(z,"batchingTexture",j._matricesTexture,Je),J.setOptional(z,j,"batchingIdTexture"),J.setValue(z,"batchingIdTexture",j._indirectTexture,Je),J.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&J.setValue(z,"batchingColorTexture",j._colorsTexture,Je));let K=Z.morphAttributes;if((K.position!==void 0||K.normal!==void 0||K.color!==void 0)&&se.update(j,Z,O),(ne||He.receiveShadow!==j.receiveShadow)&&(He.receiveShadow=j.receiveShadow,J.setValue(z,"receiveShadow",j.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&P.environment!==null&&(me.envMapIntensity.value=P.environmentIntensity),me.dfgLUT!==void 0&&(me.dfgLUT.value=_v()),ne){if(J.setValue(z,"toneMappingExposure",I.toneMappingExposure),He.needsLights&&_a(me,G),we&&q.fog===!0&&ge.refreshFogUniforms(me,we),ge.refreshMaterialUniforms(me,q,Ce,Qe,y.state.transmissionRenderTarget[E.id]),He.needsLights&&He.numLightProbeGrids>0){let he=v,de=0;for(let ye of y.state.lightProbeGridArray)ye.texture!==null&&(he.textures[de]=ye.texture,he.min[de]=ye.boundingBox.min,he.max[de]=ye.boundingBox.max,he.resolution[de]=ye.resolution,de++);for(let ye in he)he[ye].length=de;me.probesSH.value=he.textures,me.probesMin.value=he.min,me.probesMax.value=he.max,me.probesResolution.value=he.resolution}ua.upload(z,Yn(He),me,Je)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ua.upload(z,Yn(He),me,Je),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&J.setValue(z,"center",j.center),J.setValue(z,"modelViewMatrix",j.modelViewMatrix),J.setValue(z,"normalMatrix",j.normalMatrix),J.setValue(z,"modelMatrix",j.matrixWorld),q.uniformsGroups!==void 0){let he=q.uniformsGroups;for(let de=0,ye=he.length;de<ye;de++){let Xe=he[de];Oe.update(Xe,O),Oe.bind(Xe,O)}}return O}function _a(E,P){E.ambientLightColor.needsUpdate=P,E.lightProbe.needsUpdate=P,E.sunLights.needsUpdate=P,E.sunLightShadows.needsUpdate=P,E.directionalLights.needsUpdate=P,E.directionalLightShadows.needsUpdate=P,E.pointLights.needsUpdate=P,E.pointLightShadows.needsUpdate=P,E.spotLights.needsUpdate=P,E.spotLightShadows.needsUpdate=P,E.rectAreaLights.needsUpdate=P,E.hemisphereLights.needsUpdate=P}function va(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return fe},this.setRenderTargetTextures=function(E,P,Z){let q=Ze.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ze.get(E.texture).__webglTexture=P,Ze.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,P){let Z=Ze.get(E);Z.__webglFramebuffer=P,Z.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(E,P=0,Z=0){fe=E,Q=P,Y=Z;let q=null,j=!1,we=!1;if(E){let _e=Ze.get(E);if(_e.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(z.FRAMEBUFFER,_e.__webglFramebuffer),le.copy(E.viewport),Fe.copy(E.scissor),tt=E.scissorTest,Se.viewport(le),Se.scissor(Fe),Se.setScissorTest(tt),$=-1;return}else if(_e.__webglFramebuffer===void 0)Je.setupRenderTarget(E);else if(_e.__hasExternalTextures)Je.rebindTextures(E,Ze.get(E.texture).__webglTexture,Ze.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let st=E.depthTexture;if(_e.__boundDepthTexture!==st){if(st!==null&&Ze.has(st)&&(E.width!==st.image.width||E.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(E)}}let Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(we=!0);let qe=Ze.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[P])?q=qe[P][Z]:q=qe[P],j=!0):E.samples>0&&Je.useMultisampledRTT(E)===!1?q=Ze.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?q=qe[Z]:q=qe,le.copy(E.viewport),Fe.copy(E.scissor),tt=E.scissorTest}else le.copy(We).multiplyScalar(Ce).floor(),Fe.copy(At).multiplyScalar(Ce).floor(),tt=Ct;if(Z!==0&&(q=V),Se.bindFramebuffer(z.FRAMEBUFFER,q)&&Se.drawBuffers(E,q),Se.viewport(le),Se.scissor(Fe),Se.setScissorTest(tt),j){let _e=Ze.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+P,_e.__webglTexture,Z)}else if(we){let _e=P;for(let Ae=0;Ae<E.textures.length;Ae++){let qe=Ze.get(E.textures[Ae]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ae,qe.__webglTexture,Z,_e)}}else if(E!==null&&Z!==0){let _e=Ze.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,_e.__webglTexture,Z)}$=-1};function ya(E){let P=Ze.get(E);return(P.__readFormat!==E.format||P.__readType!==E.type)&&(P.__readFormat=E.format,P.__readType=E.type,P.__formatReadable=Ut.textureFormatReadable(E.format),P.__typeReadable=Ut.textureTypeReadable(E.type)),P}this.readRenderTargetPixels=function(E,P,Z,q,j,we,ze,_e=0){if(!(E&&E.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ze!==void 0&&(Ae=Ae[ze],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){Se.bindFramebuffer(z.FRAMEBUFFER,Ae);try{let qe=E.textures[_e],st=qe.format,ft=qe.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+_e);let Ve=ya(qe);if(Ve.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=E.width-q&&Z>=0&&Z<=E.height-j&&z.readPixels(P,Z,q,j,be.convert(st),be.convert(ft),we)}finally{let qe=fe!==null?Ze.get(fe).__webglFramebuffer:null;Se.bindFramebuffer(z.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(E,P,Z,q,j,we,ze,_e=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ze!==void 0&&(Ae=Ae[ze],Array.isArray(Ae)&&(Ae=Ae[0])),Ae)if(P>=0&&P<=E.width-q&&Z>=0&&Z<=E.height-j){Se.bindFramebuffer(z.FRAMEBUFFER,Ae);let qe=E.textures[_e],st=qe.format,ft=qe.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+_e);let Ve=ya(qe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,bt),z.bufferData(z.PIXEL_PACK_BUFFER,we.byteLength,z.STREAM_READ),z.readPixels(P,Z,q,j,be.convert(st),be.convert(ft),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Ot=fe!==null?Ze.get(fe).__webglFramebuffer:null;Se.bindFramebuffer(z.FRAMEBUFFER,Ot);let Lt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Bf(z,Lt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,bt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,we),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(bt),z.deleteSync(Lt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,P=null,Z=0){let q=Math.pow(2,-Z),j=Math.floor(E.image.width*q),we=Math.floor(E.image.height*q),ze=P!==null?P.x:0,_e=P!==null?P.y:0;Je.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,ze,_e,j,we),Se.unbindTexture()},this.copyTextureToTexture=function(E,P,Z=null,q=null,j=0,we=0){let ze,_e,Ae,qe,st,ft,Ve,bt,Ot,Lt=E.isCompressedTexture?E.mipmaps[we]:E.image;if(Z!==null)ze=Z.max.x-Z.min.x,_e=Z.max.y-Z.min.y,Ae=Z.isBox3?Z.max.z-Z.min.z:1,qe=Z.min.x,st=Z.min.y,ft=Z.isBox3?Z.min.z:0;else{let J=Math.pow(2,-j);ze=Math.floor(Lt.width*J),_e=Math.floor(Lt.height*J),E.isDataArrayTexture?Ae=Lt.depth:E.isData3DTexture?Ae=Math.floor(Lt.depth*J):Ae=1,qe=0,st=0,ft=0}q!==null?(Ve=q.x,bt=q.y,Ot=q.z):(Ve=0,bt=0,Ot=0);let Dt=be.convert(P.format),bn=be.convert(P.type),He;P.isData3DTexture?(Je.setTexture3D(P,0),He=z.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Je.setTexture2DArray(P,0),He=z.TEXTURE_2D_ARRAY):(Je.setTexture2D(P,0),He=z.TEXTURE_2D),Se.activeTexture(z.TEXTURE0),Se.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,P.flipY),Se.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),Se.pixelStorei(z.UNPACK_ALIGNMENT,P.unpackAlignment);let cn=Se.getParameter(z.UNPACK_ROW_LENGTH),St=Se.getParameter(z.UNPACK_IMAGE_HEIGHT),T=Se.getParameter(z.UNPACK_SKIP_PIXELS),O=Se.getParameter(z.UNPACK_SKIP_ROWS),C=Se.getParameter(z.UNPACK_SKIP_IMAGES);Se.pixelStorei(z.UNPACK_ROW_LENGTH,Lt.width),Se.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Lt.height),Se.pixelStorei(z.UNPACK_SKIP_PIXELS,qe),Se.pixelStorei(z.UNPACK_SKIP_ROWS,st),Se.pixelStorei(z.UNPACK_SKIP_IMAGES,ft);let ne=E.isDataArrayTexture||E.isData3DTexture,G=P.isDataArrayTexture||P.isData3DTexture;if(E.isDepthTexture){let J=Ze.get(E),me=Ze.get(P),K=Ze.get(J.__renderTarget),he=Ze.get(me.__renderTarget);Se.bindFramebuffer(z.READ_FRAMEBUFFER,K.__webglFramebuffer),Se.bindFramebuffer(z.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let de=0;de<Ae;de++)ne&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ze.get(E).__webglTexture,j,ft+de),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ze.get(P).__webglTexture,we,Ot+de)),z.blitFramebuffer(qe,st,qe+ze,st+_e,Ve,bt,Ve+ze,bt+_e,z.DEPTH_BUFFER_BIT,z.NEAREST);Se.bindFramebuffer(z.READ_FRAMEBUFFER,null),Se.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||Ze.has(E)){let J=Ze.get(E),me=Ze.get(P);Se.bindFramebuffer(z.READ_FRAMEBUFFER,L),Se.bindFramebuffer(z.DRAW_FRAMEBUFFER,U);for(let K=0;K<Ae;K++)ne?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,J.__webglTexture,j,ft+K):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,J.__webglTexture,j),G?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,me.__webglTexture,we,Ot+K):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,me.__webglTexture,we),j!==0?z.blitFramebuffer(qe,st,qe+ze,st+_e,Ve,bt,Ve+ze,bt+_e,z.COLOR_BUFFER_BIT,z.NEAREST):G?z.copyTexSubImage3D(He,we,Ve,bt,Ot+K,qe,st,ze,_e):z.copyTexSubImage2D(He,we,Ve,bt,qe,st,ze,_e);Se.bindFramebuffer(z.READ_FRAMEBUFFER,null),Se.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else G?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(He,we,Ve,bt,Ot,ze,_e,Ae,Dt,bn,Lt.data):P.isCompressedArrayTexture?z.compressedTexSubImage3D(He,we,Ve,bt,Ot,ze,_e,Ae,Dt,Lt.data):z.texSubImage3D(He,we,Ve,bt,Ot,ze,_e,Ae,Dt,bn,Lt):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,we,Ve,bt,ze,_e,Dt,bn,Lt.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,we,Ve,bt,Lt.width,Lt.height,Dt,Lt.data):z.texSubImage2D(z.TEXTURE_2D,we,Ve,bt,ze,_e,Dt,bn,Lt);Se.pixelStorei(z.UNPACK_ROW_LENGTH,cn),Se.pixelStorei(z.UNPACK_IMAGE_HEIGHT,St),Se.pixelStorei(z.UNPACK_SKIP_PIXELS,T),Se.pixelStorei(z.UNPACK_SKIP_ROWS,O),Se.pixelStorei(z.UNPACK_SKIP_IMAGES,C),we===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&z.generateMipmap(He),Se.unbindTexture()},this.initRenderTarget=function(E){Ze.get(E).__webglFramebuffer===void 0&&Je.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Je.setTextureCube(E,0):E.isData3DTexture?Je.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Je.setTexture2DArray(E,0):Je.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){Q=0,Y=0,fe=null,Se.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var Sp=[["red",16731486],["orange",16752412],["gold",16765503],["lime",10216804],["green",3064446],["teal",2085313],["cyan",4114431],["blue",5078271],["purple",10182117],["pink",16740277],["white",15921906],["black",3816008],["brown",11037500],["silver",12109014],["rose",16748451]],Tc=new Map(Sp.map(([s,e])=>[s,e]));Tc.set("yellow",16765503);Tc.set("violet",10182117);Tc.set("grey",12109014);Tc.set("gray",12109014);function vv(s){let e=2166136261;for(let t of String(s))e^=t.codePointAt(0),e=Math.imul(e,16777619);return e>>>0}var wp=s=>Sp[vv(s)%10][1];function _u(s){let e=String(s||"").replace(/[\u0000-\u001f\u200b-\u200f\u202a-\u202e]/g,"").replace(/\s+/g," ").trim(),t=[...e];return(t.length>16?t.slice(0,15).join("")+"\u2026":e)||"Viewer"}var Tp=s=>String(s||"").toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}]/gu,"");var Ac=["Pixel","Mochi","Bolt","Nugget","Waffles","Ziggy","Pebble","Turbo","Biscuit","Gizmo","Noodle","Sprocket","Muffin","Rocket","Tofu","Dumpling","Jelly","Comet","Pickle","Bean","Sushi","Taco","Nacho","Boba"];var ui=[{id:"library",name:"The Whispering Library",trap:"books",monster:"mimic",mname:"the Hungry Tome",fog:2759226,floor:7031347,wall:5917290,light:16757611},{id:"crypt",name:"The Bone Crypt",trap:"hands",monster:"ghost",mname:"the Restless Ghoul",fog:1450026,floor:5922662,wall:4870232,light:10477823},{id:"mirror",name:"The Hall of Mirrors",trap:"shards",monster:"ghost",mname:"the Mirror Wraith",fog:2038330,floor:9077936,wall:6971536,light:13809919},{id:"clock",name:"The Clockwork Room",trap:"pendulum",monster:"spider",mname:"the Clockwork Spider",fog:2760724,floor:8018474,wall:6967344,light:16761963},{id:"attic",name:"The Spider Attic",trap:"web",monster:"spider",mname:"the Giant Spider",fog:2234900,floor:5916210,wall:4864556,light:16754266},{id:"lab",name:"The Alchemist's Lab",trap:"gas",monster:"mimic",mname:"the Greedy Mimic",fog:1058332,floor:4086346,wall:3493951,light:9174938},{id:"ballroom",name:"The Ghostly Ballroom",trap:"chandelier",monster:"ghost",mname:"the Dancing Banshee",fog:1969688,floor:4860982,wall:4597818,light:14196916}],ms={id:"belfry",name:"The Bell Tower",trap:"hands",monster:"boss",fog:1313830,floor:4866144,wall:3813456,light:11570431},ks={id:"gate",name:"The Tower Gate",trap:"hands",monster:"ghost",fog:1708080,floor:5917296,wall:4536410,light:16757611},vu=["The Hollow Bride","Count Cobweb","The Clockwork Wraith","The King of Crows","The Pale Organist","The Lantern Eater"],Ec={treasure:"\u{1F4B0}",trap:"\u{1F480}",monster:"\u{1F479}",riddle:"\u2753"},_r=[["I'm tall when I'm young and short when I'm old. What am I?",["candle"]],["What has hands but cannot clap?",["clock","watch"]],["The more you take, the more you leave behind. What are they?",["footsteps","steps","footprints"]],["I speak without a mouth and hear without ears. What am I?",["echo"]],["What has keys but cannot open locks?",["piano","keyboard"]],["What gets wetter the more it dries?",["towel"]],["What has a neck but no head?",["bottle","shirt"]],["I have cities but no houses, forests but no trees. What am I?",["map"]],["What has one eye but cannot see?",["needle","hurricane","storm"]],["What can fill a room but takes up no space?",["light","air","sound","darkness"]],["What must be broken before you can use it?",["egg"]],["The more of me there is, the less you see. What am I?",["darkness","dark","fog"]],["What has a head and a tail but no body?",["coin"]],["What has teeth but cannot bite?",["comb","saw","zipper","gear"]],["What is full of holes but still holds water?",["sponge"]],["What flies without wings and cries without eyes?",["cloud","clouds","wind"]],["What has many rings but no fingers?",["tree","phone","telephone","saturn"]],["What runs but never walks, has a bed but never sleeps?",["river","water","stream"]],["What has legs but cannot walk?",["table","chair","bed","desk"]],["What is black when clean and white when dirty?",["chalkboard","blackboard"]],["What goes up but never comes down?",["age","your age"]],["What belongs to you, but others use it more than you?",["name","your name"]],["What can you catch but not throw?",["cold","a cold","breath","feelings"]],["I follow you all day but vanish in the dark. What am I?",["shadow"]],["What has a face and two hands, but no arms or legs?",["clock","watch"]],["What kind of room has no doors or windows?",["mushroom"]],["What can travel around the world while staying in a corner?",["stamp"]],["What comes down but never goes up?",["rain","snow"]],["I have a spine but no bones. What am I?",["book"]],["What has a ring but no finger, and a bell but no church?",["phone","telephone","doorbell"]]];function Ap(s,e){let t=String(s||"").toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}\s]/gu," ").split(/\s+/).filter(Boolean),n=" "+t.join(" ")+" ";for(let i of e){let r=" "+i.toLowerCase()+" ";if(n.includes(r)||!i.includes(" ")&&t.some(a=>a===i+"s"||a.length>3&&a+"s"===i))return i}return null}var _o=[{id:"boss",min:500,label:"GHOST BOSS",icon:"\u{1F47B}",desc:"summon a boss fight: huge loot"},{id:"skip",min:100,label:"SKIP FLOOR",icon:"\u{1FA84}",desc:"Mira's lift: rise safely"},{id:"rescue",min:30,label:"RESCUE",icon:"\u{1F496}",desc:"the fallen rise + lantern oil"},{id:"shield",min:5,label:"SHIELD",icon:"\u{1F6E1}\uFE0F",desc:"blocks the next trap"},{id:"prophecy",min:1,label:"PROPHECY",icon:"\u{1F52E}",desc:"Mira reveals the safe door"}],Ep=s=>{let e=Number(s)||0;return _o.find(t=>e>=t.min)||_o[_o.length-1]},yv={"1\uFE0F\u20E3":1,"2\uFE0F\u20E3":2,"3\uFE0F\u20E3":3,"\u2460":1,"\u2461":2,"\u2462":3};function Rp(s){let e=String(s||"").trim().toLowerCase().replace(/[!.?]+$/,"").replace(/\s+/g," ");if(!e)return{cmd:"none"};for(let[n,i]of Object.entries(yv))if(e.replace(/\uFE0F/g,"")===n.replace(/\uFE0F/g,""))return{cmd:"vote",door:i};let t=e.match(/^(?:door|d|#|no\.?|number)?\s*([123])(?:\1)*$/);return t?{cmd:"vote",door:Number(t[1])}:(t=e.match(/^(?:door\s+)?(one|two|three)$/),t?{cmd:"vote",door:{one:1,two:2,three:3}[t[1]]}:/^(?:go\s+)?(?:left|l|⬅️?|👈|lft)$/u.test(e)?{cmd:"vote",door:"L"}:/^(?:go\s+)?(?:right|r|➡️?|👉|rite)$/u.test(e)?{cmd:"vote",door:"R"}:/^(?:go\s+)?(?:middle|mid|center|centre|straight|m|⬆️?)$/u.test(e)?{cmd:"vote",door:"M"}:/^(?:attack|atk|hit|fight|punch|smash|kill|⚔️?|🗡️?|👊|🥊|💥|🔥)+/u.test(e)?{cmd:"attack",strong:!0}:{cmd:"chat",key:Tp(e)})}function Cp(s,e){if(s==="L")return 0;if(s==="R")return e-1;if(s==="M")return e===3?1:-1;let t=Number(s)-1;return t>=0&&t<e?t:-1}var Rt=9,Tt=-7.2,vr=s=>s===2?[-2.9,2.9]:[-4.3,0,4.3],Nt={x:6.3,z:-2.2,r:1.55};var jt={alive:1,ghost:2,bot:4,cmd:8,shield:16,crown:32,life:64,hit:128,gift:256},Mv=9;var Sv={gatherSeconds:9,enterSeconds:2.5,voteSeconds:12,revealSeconds:2.6,treasureSeconds:4.5,trapSeconds:4.5,monsterSeconds:14,riddleSeconds:22,bossSeconds:32,victorySeconds:4.5,climbSeconds:4.2,endSeconds:13,minParty:6,bots:!0,fuelDrain:.3,likeFuel:.12,likeRain:300,bossEvery:5,startFloor:1,sendCap:70,ghostCap:16,botHitRate:.55,dmgMul:1,monsterHpMul:1,topFloor:30},wv=3.6,Rc=class{constructor(e={},t=Math.random){this.o={...Sv,...e},this.rng=t,this.t=0,this.run=0,this.floor=0,this.theme=null,this.themeIdx=-1,this.people=new Map,this.byId=new Map,this.nextId=1,this.ev=[],this.rAdd=[],this.rDel=[],this.fuel=100,this.hype=0,this.likes=0,this.shields=0,this.bankProphecy=0,this.doors=3,this.kinds=[],this.voteCounts=[0,0,0],this.prophecy=-1,this.chosen=-1,this.outcome="",this.monster=null,this.riddle=null,this.predict=null,this.pendingSummon=null,this.lowWarned=!1,this.sessionBest=0,this.lastResult=null,this.liftFloor=-9,this.summonFloor=-9,this.recentRiddles=[],this.humanAt=-999,this.bossCount=0,this.startRun()}r(e){return Math.floor(this.rng()*e)}emit(e){this.ev.push(e)}drain(){let e=this.ev;return this.ev=[],e}drainRoster(){let e={add:this.rAdd,del:this.rDel};return this.rAdd=[],this.rDel=[],e}rosterEntry(e){return{id:e.id,name:e.name,color:e.color,bot:e.bot}}get alive(){let e=0;for(let t of this.people.values())t.alive&&e++;return e}get humans(){let e=0;for(let t of this.people.values())t.alive&&!t.bot&&e++;return e}aliveList(){return[...this.people.values()].filter(e=>e.alive)}ghosts(){return[...this.people.values()].filter(e=>e.inRun&&!e.alive)}member(e,t,n=!1){let i=this.people.get(e);if(!i)i={id:this.nextId++,uid:e,name:_u(t),color:wp(e),bot:n,alive:!1,inRun:!1,lives:0,pts:0,runPts:0,floors:0,riddles:0,hits:0,lastAct:this.t,cmdT:-9,hitT:-9,door:-1,x:0,y:0,z:6,face:Math.PI,climb:null,giftT:-9,attackT:-9,fell:0},this.people.set(e,i),this.byId.set(i.id,i),this.rAdd.push(this.rosterEntry(i));else if(t&&!n){let r=_u(t);r!==i.name&&(i.name=r,this.rAdd.push(this.rosterEntry(i)))}return i}join(e){return e.lastAct=this.t,e.bot||(this.humanAt=this.t),e.alive||e.inRun&&this.phase!=="gather"?!1:(e.alive=!0,e.inRun=!0,e.door=-1,e.climb=null,this.phase==="gather"?(e.x=(this.rng()-.5)*6,e.z=8.5):(e.x=Nt.x-Nt.r,e.z=Nt.z),e.y=0,this.emit({k:"join",id:e.id,bot:e.bot}),e.bot||this.trimBots(),!0)}trimBots(){if(this.humans+this.botsAlive()<=this.o.minParty)return;let e=[...this.people.values()].find(t=>t.bot&&t.alive);e&&this.phase==="gather"&&(e.alive=!1,e.inRun=!1,this.emit({k:"leave",id:e.id}))}botsAlive(){let e=0;for(let t of this.people.values())t.bot&&t.alive&&e++;return e}fillBots(){if(!this.o.bots)return;let e=this.o.minParty-this.alive;for(let t=0;t<Ac.length&&e>0;t++){let n=Ac[(t+this.run*5)%Ac.length],i=this.member("bot:"+n,"Bot "+n,!0);i.alive||(i.inRun=!1,this.join(i),e--)}}input(e){if(!e||!e.uid)return{ok:!1};let t=this.member(String(e.uid),e.name||e.uid);switch(e.type){case"chat":case"comment":return this.chat(t,String(e.text||""));case"like":return this.like(t,Math.max(1,Math.min(100,Number(e.count)||1)));case"gift":return this.gift(t,(Number(e.coins)||1)*Math.max(1,Number(e.count)||1),e.giftName||"gift");case"follow":return this.join(t),t.lives=Math.min(2,t.lives+1),this.emit({k:"follow",id:t.id}),{ok:!0};case"share":return this.join(t),t.lives=Math.min(2,t.lives+1),this.addFuel(5),this.emit({k:"share",id:t.id}),{ok:!0};case"join":return this.join(t),{ok:!0}}return{ok:!0}}chat(e,t){let n=Rp(t),i=this.join(e);if(e.cmdT=this.t,this.phase==="vote"&&n.cmd==="vote"){let r=Cp(n.door,this.doors);if(r>=0)return e.door!==r&&(e.door=r,this.countVotes(),this.emit({k:"vote",id:e.id,d:r})),{ok:!0,cmd:"vote",door:r+1}}if(this.phase==="riddle"&&this.riddle&&!this.riddle.solved){let r=Ap(t,this.riddle.a);if(r)return this.solveRiddle(e,r),{ok:!0,cmd:"riddle"}}return(this.phase==="monster"||this.phase==="boss")&&this.monster&&e.alive?(this.hit(e,n.cmd==="attack"?1.5:1),{ok:!0,cmd:"hit"}):{ok:!0,cmd:i?"join":n.cmd}}like(e,t){if(this.join(e),this.likes+=t,this.hype+=t,this.addFuel(t*this.o.likeFuel),(this.phase==="monster"||this.phase==="boss")&&this.monster&&this.damage(e,t*.25,!1,!0),this.hype>=this.o.likeRain){this.hype-=this.o.likeRain,this.addFuel(15);let n=this.ghosts().sort((i,r)=>r.fell-i.fell)[0];n&&this.rise(n,"likes");for(let i of this.aliveList())i.runPts+=2;this.emit({k:"blaze",rescued:n?n.id:0})}return{ok:!0}}gift(e,t,n){this.join(e);let i=Ep(t);e.giftT=this.t,e.runPts+=Math.min(50,3+t),e.pts+=0;let r={k:"gift",id:e.id,tier:i.id,coins:t,giftName:n};switch(i.id){case"prophecy":{this.addFuel(Math.min(12,3*t)),this.phase==="vote"&&this.prophecy<0?(this.prophecy=this.safeDoor(),r.door=this.prophecy):this.prophecy<0&&(this.bankProphecy=1,r.banked=!0);break}case"shield":this.shields=Math.min(3,this.shields+1),this.addFuel(6),e.inRun&&!e.alive&&this.rise(e,"gift"),r.shields=this.shields;break;case"rescue":{this.addFuel(25);let a=this.ghosts().sort((o,l)=>(l===e)-(o===e)||l.fell-o.fell).slice(0,5);for(let o of a)this.rise(o,"gift");r.n=a.length;break}case"skip":{if(this.addFuel(10),this.monster)this.damage(e,this.monster.max*(this.monster.boss?.3:1),!0),r.hitBoss=!0;else if(this.liftFloor>=this.floor-1||this.skipBanked){this.addFuel(15);for(let a of this.ghosts().slice(0,2))this.rise(a,"gift");r.blessing=!0}else{if(["enter","vote","reveal","riddle","trap","treasure"].includes(this.phase))return this.emit(r),this.startClimb(!0),{ok:!0,tier:i.id};this.skipBanked=!0}break}case"boss":{if(this.addFuel(20),this.monster&&this.monster.boss)this.damage(e,this.monster.max*.35,!0),r.hitBoss=!0;else if(this.pendingSummon||this.floor-this.summonFloor<3){this.addFuel(30);for(let a of this.ghosts())this.rise(a,"gift");r.blessing=!0}else this.pendingSummon={by:e.id},this.summonFloor=this.floor;break}}return this.emit(r),{ok:!0,tier:i.id}}addFuel(e){this.fuel=Math.max(0,Math.min(100,this.fuel+e)),this.fuel>35&&(this.lowWarned=!1)}setPhase(e,t){this.phase=e,this.phaseStart=this.t,this.phaseEnd=this.t+t}startRun(){this.run++,this.floor=this.o.startFloor-1,this.fuel=100,this.shields=0,this.bankProphecy=0,this.pendingSummon=null,this.skipBanked=!1,this.liftFloor=-9,this.summonFloor=-9,this.monster=null,this.riddle=null,this.predict=null,this.kinds=[],this.chosen=-1,this.outcome="",this.lowWarned=!1,this.themeIdx=-1,this.theme={id:"gate",name:"The Tower Gate"},this.liftPending=!1,this.upcoming=null;for(let[e,t]of this.people)!t.bot&&this.t-t.lastAct>1200&&(this.people.delete(e),this.byId.delete(t.id),this.rDel.push(t.id));for(let e of this.people.values())e.alive=!1,e.inRun=!1,e.runPts=0,e.door=-1,e.climb=null,e.lives=Math.min(e.lives,1),e.z=8,e.y=0;this.setPhase("gather",this.o.gatherSeconds);for(let e of this.people.values())!e.bot&&this.t-e.lastAct<180&&this.join(e);this.fillBots(),this.emit({k:"gather",run:this.run})}nextFloor(){this.floor++;for(let n of this.people.values())n.door=-1,n.climb&&(n.climb=null,n.y=0);this.kinds=[],this.chosen=-1,this.outcome="",this.prophecy=-1,this.voteCounts=[0,0,0],this.riddle=null,this.monster=null,this.liftPending&&(this.liftPending=!1,this.floor<this.o.topFloor&&this.floor++);let e=this.floor%this.o.bossEvery===0,t=this.nextTheme(this.floor);if(this.themeIdx=t,this.theme=e?ms:ui[t],this.upcoming=null,this.doors=e?0:this.floor%3===2?2:3,this.setPhase("enter",this.o.enterSeconds),this.predict=null,!e){let n=this.aliveList(),i=n.filter(a=>!a.bot),r=i.length?i:n;if(r.length){let a=r[this.r(r.length)];this.predict={id:a.id,kind:this.rng()<.62?"fall":"gold"}}}this.emit({k:"floor",n:this.floor,th:this.themeIdx,boss:e,doors:this.doors,predict:this.predict})}nextTheme(e){if(e%this.o.bossEvery===0)return-2;if(this.upcoming&&this.upcoming.n===e)return this.upcoming.th;let t;do t=this.r(ui.length);while(t===this.themeIdx&&ui.length>1);if(this.o.forceTheme){let n=ui.findIndex(i=>i.id===this.o.forceTheme);n>=0&&(t=n)}return this.upcoming={n:e,th:t},t}startVote(){let e=this.doors,t=[],n=Math.min(.5,.15+this.floor*.02),i=["treasure"];for(i.push(this.rng()<.55?"trap":"monster"),e===3&&i.push(this.rng()<.55?"riddle":this.rng()<n?"trap":this.rng()<.5?"monster":"riddle");i.length;)t.push(i.splice(this.r(i.length),1)[0]);this.kinds=t,this.o.forceKind&&(this.kinds=this.kinds.map(()=>this.o.forceKind));for(let r of this.people.values())r.door=-1;this.voteCounts=[0,0,0],this.setPhase("vote",this.o.voteSeconds),this.bankProphecy&&(this.bankProphecy=0,this.prophecy=this.safeDoor(),this.emit({k:"prophecy",door:this.prophecy,banked:!0})),this.emit({k:"vote",start:!0,doors:e})}safeDoor(){let e=this.kinds.indexOf("treasure");return e>=0?e:Math.max(0,this.kinds.indexOf("riddle"))}countVotes(){let e=[0,0,0];for(let t of this.people.values())t.door>=0&&e[t.door]++;this.voteCounts=e}closeVote(){this.countVotes();let e=this.voteCounts.slice(0,this.doors),t=Math.max(...e),n=e.map((i,r)=>i===t?r:-1).filter(i=>i>=0);this.chosen=n[this.r(n.length)],this.outcome=this.kinds[this.chosen],this.setPhase("reveal",this.o.revealSeconds),this.emit({k:"reveal",door:this.chosen,kinds:this.kinds.slice(),votes:e,none:t===0})}resolve(){let e=this.outcome,t=new Set([...this.people.values()].filter(n=>n.door===this.chosen).map(n=>n.id));if(e==="treasure"){this.addFuel(Math.max(8,20-this.floor*.6));for(let i of this.aliveList())i.runPts+=t.has(i.id)?15:10;let n=null;if(this.predict&&this.predict.kind==="gold"){let i=this.byId.get(this.predict.id);i&&i.alive&&(i.runPts+=25,n=i.id)}this.setPhase("treasure",this.o.treasureSeconds),this.emit({k:"treasure",door:this.chosen,lucky:n})}else if(e==="trap"){this.setPhase("trap",this.o.trapSeconds);let n=this.casualties(Math.min(.4,.14+this.floor*.015),t);this.emit({k:"trap",trap:this.theme.trap,...n})}else if(e==="monster")this.spawnMonster(!1);else{let n;do n=this.r(_r.length);while(this.recentRiddles.includes(n)&&this.recentRiddles.length<_r.length-1);this.recentRiddles.push(n),this.recentRiddles.length>12&&this.recentRiddles.shift(),this.riddle={i:n,q:_r[n][0],a:_r[n][1],solved:null,botAt:this.t+8+this.rng()*9},this.setPhase("riddle",this.o.riddleSeconds),this.emit({k:"riddle",i:n})}}casualties(e,t=new Set,n=1){if(this.shields>0)return this.shields--,{blocked:!0,fell:[],saved:[]};let i=this.aliveList(),r=Math.max(n,Math.round(i.length*e));i.length<=1?r=this.rng()<.5?1:0:r=Math.min(r,i.length-1);let a=[],o=[],l=[];if(this.predict&&this.predict.kind==="fall"&&!this.predict.done){let u=this.byId.get(this.predict.id);u&&u.alive&&this.rng()<.75&&r>0&&(l.push(u),this.predict.done=!0)}let c=i.filter(u=>!l.includes(u)).map(u=>({m:u,w:(t.has(u.id)?2:1)*(u.bot?1.4:1)*(this.t-u.giftT<60?.5:1)}));for(;l.length<r&&c.length;){let u=0;for(let h of c)u+=h.w;let p=this.rng()*u,d=0;for(;d<c.length-1&&(p-=c[d].w,!(p<=0));d++);l.push(c.splice(d,1)[0].m)}for(let u of l){if(u.lives>0){u.lives--,o.push(u.id);continue}this.fall(u),a.push(u.id)}return{blocked:!1,fell:a,saved:o,foretold:this.predict&&this.predict.done&&l[0]&&l[0].id===this.predict.id&&a.includes(this.predict.id)?this.predict.id:0}}fall(e){e.alive=!1,e.fell=this.t,e.climb=null,e.door=-1,this.emit({k:"fall",id:e.id})}rise(e,t){e.alive||(e.alive=!0,e.inRun=!0,e.climb=null,e.y=0,this.emit({k:"rise",id:e.id,why:t}))}spawnMonster(e,t=!1){let n=this.alive,i=e?(70+9*n)*(1+this.floor*.1)*(t?1.25:1):(18+3*n)*(1+this.floor*.07),r=Math.round(i*this.o.monsterHpMul),a=e?vu[this.bossCount++%vu.length]:this.theme.mname||"a monster";this.monster={kind:e?"boss":this.theme.monster,name:a,hp:r,max:r,boss:e,summoned:t,nextAtk:this.t+(e?4.5:3.5),atkN:0,hitters:new Map},this.setPhase(e?"boss":"monster",e?this.o.bossSeconds:this.o.monsterSeconds),this.emit({k:"monster",kind:this.monster.kind,name:a,hp:r,boss:e,summoned:t})}hit(e,t){if(this.t-e.attackT<.35)return;e.attackT=this.t;let n=this.rng()<.15;this.damage(e,(2+this.rng()*2)*t*(n?2:1)*this.o.dmgMul,n)}damage(e,t,n,i=!1){let r=this.monster;!r||r.hp<=0||(t=Math.max(.1,t),r.hp=Math.max(0,r.hp-t),r.hitters.set(e.id,(r.hitters.get(e.id)||0)+t),e.hits++,e.hitT=this.t,(!i||t>=1)&&this.emit({k:"hit",id:e.id,d:Math.round(t),c:n?1:0}),r.hp<=0&&this.monsterDown())}monsterDown(){let e=this.monster,t=[...e.hitters.entries()].sort((i,r)=>r[1]-i[1]);for(let[i,r]of t){let a=this.byId.get(i);a&&(a.runPts+=Math.min(40,5+Math.round(r/3)))}let n=t.length?t[0][0]:0;if(n&&(this.byId.get(n).runPts+=e.boss?40:15),e.boss){let i=this.ghosts();for(let r of i)this.rise(r,"boss");this.addFuel(e.summoned?100:35),this.emit({k:"mwin",boss:!0,name:e.name,top:n,rescued:i.length,summoned:e.summoned}),this.monster=null,this.setPhase("victory",this.o.victorySeconds),e.summoned&&(this.skipBanked=!0)}else this.addFuel(10),this.emit({k:"mwin",boss:!1,name:e.name,top:n}),this.monster=null,this.setPhase("victory",this.o.victorySeconds*.8)}monsterWins(){let e=this.monster,t=this.casualties(e.boss?.3:.2);this.addFuel(e.boss?-28:-12),this.emit({k:"mlose",boss:e.boss,name:e.name,...t}),this.monster=null,this.setPhase("trap",this.o.trapSeconds*.8)}solveRiddle(e,t){this.riddle.solved=e.id,e.runPts+=40,e.riddles++,this.addFuel(12),this.emit({k:"rwin",id:e.id,a:t,bot:e.bot}),this.phaseEnd=Math.min(this.phaseEnd,this.t+4.5)}startClimb(e=!1){if(this.pendingSummon&&!this.monster){let r=this.pendingSummon.by;this.pendingSummon=null,this.emit({k:"summon",id:r}),this.spawnMonster(!0,!0);return}this.monster=null,this.riddle=null;for(let r of this.aliveList())r.runPts+=10,r.floors++;let t=this.aliveList().sort((r,a)=>Math.hypot(r.x-Nt.x,r.z-Nt.z)-Math.hypot(a.x-Nt.x,a.z-Nt.z)),n=this.o.climbSeconds,i=Math.min(.14,n*.5/Math.max(1,t.length));t.forEach((r,a)=>{r.climb={delay:this.t+a*i,s:0,on:!1},r.door=-1}),this.lift=e||this.skipBanked,this.skipBanked=!1,this.setPhase("climb",n),this.emit({k:"climb",lift:this.lift,floor:this.floor}),this.lift&&(this.liftPending=!0,this.addFuel(10),this.liftFloor=this.floor+2),this.nextTheme(this.floor+(this.lift?2:1))}endRun(e){let t=[...this.people.values()].filter(a=>a.inRun&&!a.bot),n=[...this.people.values()].filter(a=>a.inRun&&!a.bot&&a.runPts>0).sort((a,o)=>o.runPts-a.runPts).slice(0,3),i=[...this.people.values()].filter(a=>a.inRun).sort((a,o)=>o.runPts-a.runPts);for(let a of t)a.pts+=a.runPts;let r=this.floor;this.sessionBest=Math.max(this.sessionBest,r),this.lastResult={run:this.run,floor:r,reason:e,players:t.map(a=>({uid:a.uid,name:a.name,pts:a.runPts,floors:a.floors,riddles:a.riddles})),top:n.map(a=>a.id)},this.monster=null,this.riddle=null,this.kinds=[];for(let a of this.people.values())a.climb=null;this.setPhase("end",this.o.endSeconds),this.emit({k:"end",floor:r,reason:e,top:(n.length?n:i.slice(0,3)).map(a=>a.id),best:this.sessionBest})}step(e){this.t+=e;let t=this.phase;if(t!=="gather"&&t!=="end"&&(this.fuel=Math.max(0,this.fuel-this.o.fuelDrain*(1+this.floor*.07)*e*(t==="climb"||t==="enter"?.5:1)),this.fuel<25&&!this.lowWarned&&(this.lowWarned=!0,this.emit({k:"lowfuel"}))),this.bots(e),this.monster&&this.t>=this.monster.nextAtk&&this.monsterAttack(),this.riddle&&!this.riddle.solved&&this.o.bots&&this.t>this.riddle.botAt&&this.t-this.humanAt>45&&(this.riddle.botAt=1e9,this.rng()<.7)){let n=this.aliveList().filter(i=>i.bot);n.length&&this.solveRiddle(n[this.r(n.length)],this.riddle.a[0])}if(this.move(e),t!=="gather"&&t!=="end"){if(this.alive===0)return this.endRun("fallen");if(this.fuel<=0)return this.endRun("dark")}if(!(this.t<this.phaseEnd))switch(t){case"gather":if(this.alive===0&&(this.fillBots(),!this.alive)){this.phaseEnd=this.t+2;return}this.nextFloor();break;case"enter":this.doors===0?this.spawnMonster(!0):this.startVote();break;case"vote":this.closeVote();break;case"reveal":this.resolve();break;case"monster":case"boss":this.monsterWins();break;case"riddle":if(!this.riddle.solved){this.addFuel(-10),this.emit({k:"rfail",a:this.riddle.a[0]}),this.riddle.solved=-1,this.phaseEnd=this.t+3.5;return}this.startClimb();break;case"treasure":case"trap":case"victory":this.startClimb();break;case"climb":this.floor>=this.o.topFloor?(this.floor=this.o.topFloor,this.endRun("top")):this.nextFloor();break;case"end":this.startRun();break}}monsterAttack(){let e=this.monster;e.atkN++,e.nextAtk=this.t+(e.boss?4:3.2),this.addFuel(e.boss?-4:-3);let t=null;e.boss&&e.atkN%3===0&&(t=this.casualties(.08,new Set,1)),this.emit({k:"matk",boss:e.boss,slam:!!t,...t||{}})}bots(e){if(this.o.bots){for(let t of this.people.values())if(!(!t.bot||!t.alive)){if(this.phase==="vote"&&t.door<0&&this.rng()<e*.25&&this.t-this.phaseStart<this.o.voteSeconds*.8){let n=this.prophecy>=0&&this.rng()<.5?this.prophecy:this.r(this.doors);t.door=n,this.countVotes(),this.emit({k:"vote",id:t.id,d:n})}this.monster&&this.rng()<e*this.o.botHitRate&&this.damage(t,(1.2+this.rng()*1.6)*this.o.dmgMul,!1)}}}move(e){let t=[];for(let d of this.people.values())d.alive&&t.push(d);t.sort((d,h)=>d.id-h.id);let n=this.doors?vr(this.doors):[],i=[[],[],[]],r=[];for(let d of t)(this.phase==="vote"||this.phase==="reveal")&&d.door>=0?i[d.door].push(d):r.push(d);let a=(d,h,m,b,g)=>d.forEach((f,_)=>{let M=b*Math.sqrt(_+.5),v=_*2.39996;f.tx=h+Math.cos(v)*M,f.tz=m+Math.sin(v)*M*g}),o=this.phase==="monster"||this.phase==="boss",l=r.length>40?.52:r.length>20?.6:.7;a(r,0,o?-.6:-1.9,l,.55),i.forEach((d,h)=>{d.length&&a(d,n[h],Tt+3,.5,.7)});let c=this.phase==="climb",u=Nt.x-Nt.r,p=Nt.z;for(let d of t){if(c&&d.climb){let g=d.climb;if(this.t<g.delay?(d.tx=u-.6,d.tz=p+1.2):g.on||(d.tx=u,d.tz=p,(Math.hypot(d.x-u,d.z-p)<.5||this.t-g.delay>1.6)&&(g.on=!0,g.s=0)),g.on){g.s=Math.min(1,g.s+e/1.7);let f=Math.PI-g.s*Math.PI*2,_=Nt.x+Math.cos(f)*Nt.r,M=Nt.z+Math.sin(f)*Nt.r;d.face=Math.atan2(_-d.x,M-d.z)||d.face,d.x=_,d.z=M,d.y=g.s*Rt;continue}}let h=d.tx-d.x,m=d.tz-d.z,b=Math.hypot(h,m);if(b>.05){let g=Math.min(b,wv*e*(b>3?1.4:1));d.x+=h/b*g,d.z+=m/b*g,b>.3&&(d.face=Math.atan2(h,m))}else(o||this.phase==="vote"||this.phase==="enter")&&(d.face=Math.PI)}}snapshot(){let e=[],t=[],n=[];for(let l of this.people.values())l.alive?t.push(l):l.inRun&&n.push(l);let i=t;t.length>this.o.sendCap&&(i=t.slice().sort((l,c)=>(c.bot?0:1)-(l.bot?0:1)||c.lastAct-l.lastAct).slice(0,this.o.sendCap));let r=0,a=0;for(let l of t)!l.bot&&l.runPts>a&&(a=l.runPts,r=l.id);for(let l of i){let c=jt.alive|(l.bot?jt.bot:0)|(this.t-l.cmdT<1.2?jt.cmd:0)|(l.lives?jt.life:0)|(l.id===r?jt.crown:0)|(this.t-l.hitT<.3?jt.hit:0)|(this.t-l.giftT<3?jt.gift:0);(this.phase==="vote"||this.phase==="reveal")&&l.door>=0&&(c|=l.door+1<<Mv),l.climb&&l.climb.on&&(c|=2048),e.push(l.id,Math.round(l.x*100)/100,Math.round(l.y*100)/100,Math.round(l.z*100)/100,Math.round(l.face*100)/100,c)}n.sort((l,c)=>c.fell-l.fell);for(let l of n.slice(0,this.o.ghostCap))e.push(l.id,0,0,0,0,jt.ghost|(l.bot?jt.bot:0));let o=this.monster;return{tm:Math.round(this.t*1e3)/1e3,ph:this.phase,tl:Math.max(0,Math.round((this.phaseEnd-this.t)*10)/10),pd:Math.round((this.phaseEnd-this.phaseStart)*10)/10,fl:this.floor,th:this.themeIdx,nd:this.doors,vc:this.voteCounts.slice(0,this.doors),pr:this.prophecy,ch:this.chosen,kinds:this.phase==="vote"||this.phase==="enter"?null:this.kinds,fuel:Math.round(this.fuel*10)/10,sh:this.shields,n:t.length,gh:n.length,hype:this.hype,run:this.run,best:this.sessionBest,mo:o?{k:o.kind,n:o.name,hp:Math.ceil(o.hp),max:o.max,b:o.boss?1:0}:null,ri:this.riddle?this.riddle.i:-1,rs:this.riddle&&this.riddle.solved||0,pdc:this.predict?this.predict.id:0,pk:this.predict?this.predict.kind:"",lift:this.phase==="climb"&&this.lift?1:0,nth:this.phase==="climb"&&this.upcoming?this.upcoming.th:-9,f:e}}board(e=8){let t=new Map;for(let n of this.people.values())!n.bot&&(n.pts||n.runPts)&&t.set(n.uid,{name:n.name,pts:n.pts+(n.inRun&&this.phase!=="end"?n.runPts:0),riddles:n.riddles,floors:n.floors});return[...t.values()].sort((n,i)=>i.pts-n.pts).slice(0,e)}};function Cc(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new qt;l.morphTargetsRelative=o;let c=0;for(let u=0;u<s.length;++u){let p=s[u],d=0,h=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in p.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(p.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in p.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[m].length!==s[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(p.morphAttributes[m]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=p.index.count;else if(p.attributes.position!==void 0)m=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0,p=[];for(let d=0;d<s.length;++d){let h=s[d].index;for(let m=0;m<h.count;++m)p.push(h.getX(m)+u);u+=s[d].attributes.position.count}l.setIndex(p)}for(let u in r){let p=Pp(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(let u in a){let p=a[u][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<p;++d){let h=[];for(let b=0;b<a[u].length;++b)h.push(a[u][b][d]);let m=Pp(h);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function Pp(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new pt(a,t,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let p=l/t;for(let d=0,h=u.count;d<h;d++)for(let m=0;m<t;m++){let b=u.getComponent(d,m);o.setComponent(d+p,m,b)}}else a.set(u.array,l);l+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function yu(s,e){if(e===Wh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ca||e===po){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ca)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function yr(s){let e=new Map,t=new Map,n=s.clone();return Ip(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Ip(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Ip(s.children[n],e.children[n],t)}var Os=class extends Ui{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Pc(t,vt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Pc(t,vt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hu(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ds.extractUrlBase(e);a=ds.resolveURL(c,this.path)}else a=ds.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ea(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===kp){try{a[vt.KHR_BINARY_GLTF]=new Vu(e)}catch(p){i&&i(p);return}r=JSON.parse(a[vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Yu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let p=this.pluginCallbacks[u](c);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[p.name]=p,a[p.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let p=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(p){case vt.KHR_MATERIALS_UNLIT:a[p]=new Au;break;case vt.KHR_DRACO_MESH_COMPRESSION:a[p]=new Wu(r,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:a[p]=new qu;break;case vt.KHR_MESH_QUANTIZATION:a[p]=new Xu;break;default:d.indexOf(p)>=0&&o[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Tv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function sn(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Tu=class{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ie(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Bn);let p=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new hr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new lr(u),c.distance=p;break;case"spot":c=new no(u),c.distance=p,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Vi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Au=class{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Xt}extendParams(e,t,n){let i=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Bn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Wt))}return Promise.all(i)}},Eu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ru=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new nt(r,r)}return Promise.all(i)}},Cu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},Pu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Iu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Lu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Bn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Wt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Du=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Fu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(r[0],r[1],r[2],Bn),Promise.all(i)}},Nu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},ku=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(r[0],r[1],r[2],Bn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Wt)),Promise.all(i)}},Uu=class{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Ou=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Bu=class{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},zu=class{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Gu=class{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Pc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,p=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,p,d,i.mode,i.filter).then(function(h){return h.buffer}):a.ready.then(function(){let h=new ArrayBuffer(u*p);return a.decodeGltfBuffer(new Uint8Array(h),u,p,d,i.mode,i.filter),h})})}else return null}},Hu=class{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==di.TRIANGLES&&c.mode!==di.TRIANGLE_STRIP&&c.mode!==di.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),p=u.isGroup?u.children:[u],d=c[0].count,h=[];for(let m of p){let b=new Ye,g=new B,f=new En,_=new B(1,1,1),M=new Nn(m.geometry,m.material,d);for(let w=0;w<d;w++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,w),l.SCALE&&_.fromBufferAttribute(l.SCALE,w),M.setMatrixAt(w,b.compose(g,f,_));let v=null;for(let w in l)if(w==="_COLOR_0"){let y=l[w];M.instanceColor=new rs(y.array,y.itemSize,y.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(v===null){let x=M.geometry;v=new qt,v.name=x.name;for(let A in x.attributes)v.setAttribute(A,x.attributes[A]);for(let A in x.morphAttributes)v.morphAttributes[A]=x.morphAttributes[A];x.index!==null&&v.setIndex(x.index),v.morphTargetsRelative=x.morphTargetsRelative;for(let A of x.groups)v.addGroup(A.start,A.count,A.materialIndex);x.boundingBox!==null&&(v.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(v.boundingSphere=x.boundingSphere.clone()),v.drawRange.start=x.drawRange.start,v.drawRange.count=x.drawRange.count,v.userData=Object.assign({},x.userData),M.geometry=v}let y=l[w];v.setAttribute(w,new rs(y.array,y.itemSize,y.normalized))}It.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),h.push(M)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}},kp="glTF",vo=12,Lp={JSON:1313821514,BIN:5130562},Vu=class{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,vo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-vo,r=new DataView(e,vo),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Lp.JSON){let c=new Uint8Array(e,vo+a,o);this.content=n.decode(c)}else if(l===Lp.BIN){let c=vo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Wu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let p=Ku[u]||u.toLowerCase();o[p]=a[u]}for(let u in e.attributes){let p=Ku[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],h=fa[d.componentType];c[p]=h.name,l[p]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(p,d){i.decodeDracoFile(u,function(h){for(let m in h.attributes){let b=h.attributes[m],g=l[m];g!==void 0&&(b.normalized=g)}p(h)},o,c,Bn,d)})})}},qu=class{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Xu=class{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}},Ic=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,p=(n-t)/u,d=p*p,h=d*p,m=e*c,b=m-c,g=-2*h+3*d,f=h-d,_=1-g,M=f-d+p;for(let v=0;v!==o;v++){let w=a[b+v+o],y=a[b+v+l]*u,x=a[m+v+o],A=a[m+v]*u;r[v]=_*w+M*y+g*x+f*A}return r}},Av=new En,ju=class extends Ic{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Av.fromArray(r).normalize().toArray(r),r}},di={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dp={9728:nn,9729:_n,9984:Dl,9985:ra,9986:mr,9987:ci},Fp={33071:ri,33648:Gr,10497:Es},Mu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ku={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Us={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ev={CUBICSPLINE:void 0,LINEAR:$s,STEP:Zs},Su={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Rv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new sr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Oi})),s.DefaultMaterial}function Mr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Cv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let p=e[c];if(p.POSITION!==void 0&&(n=!0),p.NORMAL!==void 0&&(i=!0),p.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let p=e[c];if(n){let d=p.POSITION!==void 0?t.getDependency("accessor",p.POSITION):s.attributes.position;a.push(d)}if(i){let d=p.NORMAL!==void 0?t.getDependency("accessor",p.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=p.COLOR_0!==void 0?t.getDependency("accessor",p.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],p=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=p),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Pv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Iv(s){let e,t=s.extensions&&s.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wu(t.attributes):e=s.indices+":"+wu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+wu(s.targets[n]);return e}function wu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ju(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Lv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Dv=new Ye,Yu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Tv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?(this.textureLoader=new or(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new so(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ea(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Mr(r,o,i),Vi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(ds.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Mu[i.type],o=fa[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new pt(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Mu[i.type],c=fa[i.componentType],u=c.BYTES_PER_ELEMENT,p=u*l,d=i.byteOffset||0,h=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,b,g;if(h&&h!==p){let f=Math.floor(d/h),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count,M=t.cache.get(_);M||(b=new c(o,f*h,i.count*h/u),M=new jr(b,h/u),t.cache.add(_,M)),g=new Kr(M,l,d%h/u,m)}else o===null?b=new c(i.count*l):b=new c(o,d,i.count*l),g=new pt(b,l,m);if(i.sparse!==void 0){let f=Mu.SCALAR,_=fa[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,w=new _(a[1],M,i.sparse.count*f),y=new c(a[2],v,i.sparse.count*l);o!==null&&(g=new pt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let x=0,A=w.length;x<A;x++){let F=w[x];if(g.setX(F,y[x*l]),l>=2&&g.setY(F,y[x*l+1]),l>=3&&g.setZ(F,y[x*l+2]),l>=4&&g.setW(F,y[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Dp[d.magFilter]||_n,u.minFilter=Dp[d.minFilter]||ci,u.wrapS=Fp[d.wrapS]||Es,u.wrapT=Fp[d.wrapT]||Es,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==nn&&u.minFilter!==_n,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)u=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(h,m){t.parse(d,h,m)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let h=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(d){return new Promise(function(h,m){let b=h;t.isImageBitmapLoader===!0&&(b=function(g){let f=new vn(g);f.needsUpdate=!0,h(f)}),t.load(ds.resolveURL(d,r.path),b,void 0,m)})})}let p=u.then(function(d){return c===!0&&o.revokeObjectURL(l),Vi(d,a),d.userData.mimeType=a.mimeType||Lv(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=p,p}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[vt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Zr,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Yr,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return sr}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[vt.KHR_MATERIALS_UNLIT]){let p=i[vt.KHR_MATERIALS_UNLIT];a=p.getMaterialType(),c.push(p.extendParams(o,r,t))}else{let p=r.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(p.baseColorFactor)){let d=p.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Bn),o.opacity=d[3]}p.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",p.baseColorTexture,Wt)),o.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,o.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",p.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",p.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Mn);let u=r.alphaMode||Su.OPAQUE;if(u===Su.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Su.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Xt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new nt(1,1),r.normalTexture.scale!==void 0)){let p=r.normalTexture.scale;o.normalScale.set(p,p)}if(r.occlusionTexture!==void 0&&a!==Xt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Xt){let p=r.emissiveFactor;o.emissive=new Ie().setRGB(p[0],p[1],p[2],Bn)}return r.emissiveTexture!==void 0&&a!==Xt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Wt)),Promise.all(c).then(function(){let p=new a(o);return r.name&&(p.name=r.name),Vi(p,r),t.associations.set(p,{materials:e}),r.extensions&&Mr(i,p,r),p})}createUniqueName(e){let t=zt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Np(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=Iv(c),p=i[u];if(p)a.push(p.promise);else{let d;c.extensions&&c.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Np(new qt,c,t),c.mode===di.TRIANGLE_STRIP?d=d.then(h=>yu(h,po)):c.mode===di.TRIANGLE_FAN&&(d=d.then(h=>yu(h,ca))),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?Rv(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],p=[];for(let h=0,m=u.length;h<m;h++){let b=u[h],g=a[h],f,_=c[h];if(g.mode===di.TRIANGLES||g.mode===di.TRIANGLE_STRIP||g.mode===di.TRIANGLE_FAN||g.mode===void 0){let M=r.isSkinnedMesh===!0,v=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");M&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=M&&v?new tr(b,_):new Ke(b,_),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(g.mode===di.LINES)f=new Ha(b,_);else if(g.mode===di.LINE_STRIP)f=new ir(b,_);else if(g.mode===di.LINE_LOOP)f=new Va(b,_);else if(g.mode===di.POINTS)f=new Ps(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&Pv(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Vi(f,r),g.extensions&&Mr(i,f,g),t.assignFinalMaterial(f),p.push(f)}for(let h=0,m=p.length;h<m;h++)t.associations.set(p[h],{meshes:e,primitives:h});if(p.length===1)return r.extensions&&Mr(i,p[0],r),p[0];let d=new on;r.extensions&&Mr(i,d,r),t.associations.set(d,{meshes:e});for(let h=0,m=p.length;h<m;h++)d.add(p[h]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new xn(xc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new cr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let p=a[c];if(p){o.push(p);let d=new Ye;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new nr(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let p=0,d=i.channels.length;p<d;p++){let h=i.channels[p],m=i.samplers[h.sampler],b=h.target,g=b.node,f=i.parameters!==void 0?i.parameters[m.input]:m.input,_=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",_)),c.push(m),u.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(p){let d=p[0],h=p[1],m=p[2],b=p[3],g=p[4],f=[];for(let M=0,v=d.length;M<v;M++){let w=d[M],y=h[M],x=m[M],A=b[M],F=g[M];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let I=n._createAnimationTracks(w,y,x,A,F);if(I)for(let D=0;D<I.length;D++)f.push(I[D])}let _=new ar(r,void 0,f);return Vi(_,i),_})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],p=c[1],d=c[2];d!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(d,Dv)});for(let h=0,m=p.length;h<m;h++)u.add(p[h]);if(u.userData.pivot!==void 0&&p.length>0){let h=u.userData.pivot,m=p[0];u.pivot=new B().fromArray(h),u.position.x-=h[0],u.position.y-=h[1],u.position.z-=h[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Jr:c.length>1?u=new on:c.length===1?u=c[0]:u=new It,u!==c[0])for(let p=0,d=c.length;p<d;p++)u.add(c[p]);if(r.name&&(u.userData.name=r.name,u.name=a),Vi(u,r),r.extensions&&Mr(n,u,r),r.matrix!==void 0){let p=new Ye;p.fromArray(r.matrix),u.applyMatrix4(p)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let p=i.associations.get(u);i.associations.set(u,{...p})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new on;n.name&&(r.name=i.createUniqueName(n.name)),Vi(r,n),n.extensions&&Mr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,p=l.length;u<p;u++){let d=l[u];d.parent!==null?r.add(yr(d)):r.add(d)}let c=u=>{let p=new Map;for(let[d,h]of i.associations)(d instanceof Fn||d instanceof vn)&&p.set(d,h);return u.traverse(d=>{let h=i.associations.get(d);h!=null&&p.set(d,h)}),p};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}Us[r.path]===Us.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(Us[r.path]){case Us.weights:u=cs;break;case Us.rotation:u=hs;break;case Us.translation:case Us.scale:u=Ls;break;default:n.itemSize===1?u=cs:u=Ls;break}let p=i.interpolation!==void 0?Ev[i.interpolation]:$s,d=this._getArrayFromAccessor(n);for(let h=0,m=l.length;h<m;h++){let b=new u(l[h]+"."+Us[r.path],t.array,d,p);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ju(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof hs?ju:Ic;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Fv(s,e,t){let n=e.attributes,i=new Rn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),o.normalized){let u=Ju(fa[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new B,l=new B;for(let c=0,u=r.length;c<u;c++){let p=r[c];if(p.POSITION!==void 0){let d=t.json.accessors[p.POSITION],h=d.min,m=d.max;if(h!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(m[2]))),d.normalized){let b=Ju(fa[d.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new yn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Np(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=Ku[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return _t.workingColorSpace!==Bn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${_t.workingColorSpace}" not supported.`),Vi(s,e),Fv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Cv(s,e.targets,t):s})}var pa=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var _=new Uint8Array(f.length),M=0;M<f.length;++M){var v=f.charCodeAt(M);_[M]=v>96?v-97:v>64?v-39:v+4}for(var w=0,M=0;M<f.length;++M)_[w++]=_[M]<60?n[_[M]]:(_[M]-60)*64+_[++M];return _.buffer.slice(0,w)}function l(f,_,M,v,w,y,x){var A=f.exports.sbrk,F=v+3&-4,I=A(F*w),D=A(y.length),k=new Uint8Array(f.exports.memory.buffer);k.set(y,D);var V=_(I,v,w,D,y.length);if(V==0&&x&&x(I,F,w),M.set(k.subarray(I,I+v*w)),A(I-A(0)),V!=0)throw new Error("Malformed buffer data: "+V)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},p=[],d=0;function h(f){var _={object:new Worker(f),pending:0,requests:{}};return _.object.onmessage=function(M){var v=M.data;_.pending-=v.count,_.requests[v.id][v.action](v.value),delete _.requests[v.id]},_}function m(f){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),M=new Blob([_],{type:"text/javascript"}),v=URL.createObjectURL(M),w=p.length;w<f;++w)p[w]=h(v);for(var w=f;w<p.length;++w)p[w].object.postMessage({});p.length=f,URL.revokeObjectURL(v)}function b(f,_,M,v,w){for(var y=p[0],x=1;x<p.length;++x)p[x].pending<y.pending&&(y=p[x]);return new Promise(function(A,F){var I=new Uint8Array(M),D=++d;y.pending+=f,y.requests[D]={resolve:A,reject:F},y.object.postMessage({id:D,count:f,size:_,source:I,mode:v,filter:w},[I.buffer])})}function g(f){var _=f.data;self.ready.then(function(M){if(!_.id)return self.close();try{var v=new Uint8Array(_.count*_.size);l(M,M.exports[_.mode],v,_.count,_.size,_.source,M.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:v},[v.buffer])}catch(w){self.postMessage({id:_.id,count:_.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(f){m(f)},decodeVertexBuffer:function(f,_,M,v,w){l(r,r.exports.meshopt_decodeVertexBuffer,f,_,M,v,r.exports[c[w]])},decodeIndexBuffer:function(f,_,M,v){l(r,r.exports.meshopt_decodeIndexBuffer,f,_,M,v)},decodeIndexSequence:function(f,_,M,v){l(r,r.exports.meshopt_decodeIndexSequence,f,_,M,v)},decodeGltfBuffer:function(f,_,M,v,w,y){l(r,r.exports[u[w]],f,_,M,v,r.exports[c[y]])},decodeGltfBufferAsync:function(f,_,M,v,w){return p.length>0?b(f,_,M,u[v],c[w]):a.then(function(){var y=new Uint8Array(f*_);return l(r,r.exports[u[v]],y,f,_,M,r.exports[c[w]]),y})}}})();var Nv=[pt.prototype.getX,pt.prototype.getY,pt.prototype.getZ,pt.prototype.getW],Up={idle:["Idle",1,!0],combat:["Idle_Combat",1,!0],run:["Running_A",1,!0],walk:["Walking_A",1,!0],attack:["1H_Melee_Attack_Chop",1.25,!1],slash:["1H_Melee_Attack_Slice_Horizontal",1.25,!1],spin:["2H_Melee_Attack_Spin",1.3,!1],shoot:["1H_Ranged_Shoot",1.2,!1],cast:["Spellcast_Shoot",1.2,!1],summon:["Spellcast_Summon",1,!1],block:["Block",1.2,!1],hit:["Hit_A",1.3,!1],die:["Death_A",1,!1],dead:["Death_A_Pose",1,!0],cheer:["Cheer",1,!0],dash:["Dodge_Forward",1.3,!1],jump:["Jump_Full_Short",1,!1],rise:["Lie_StandUp",1.4,!1],taunt:["Taunt",1,!1],spawn:["Spawn_Ground_Skeletons",1.2,!1],use:["Interact",1.2,!1]},kv={Knight:["1H_Sword","Badge_Shield","Knight_Helmet","Knight_Cape"],Barbarian:["1H_Axe","Barbarian_Round_Shield","Barbarian_Hat","Barbarian_Cape"],Mage:["2H_Staff","Mage_Hat","Mage_Cape"],Rogue:["1H_Crossbow","Knife_Offhand","Rogue_Cape"],Rogue_Hooded:["Knife","Knife_Offhand","Rogue_Cape"],Skeleton_Minion:[],Skeleton_Warrior:["Skeleton_Warrior_Helmet"],Skeleton_Rogue:["Skeleton_Rogue_Hood","Skeleton_Rogue_Cape"],Skeleton_Mage:["Skeleton_Mage_Hat"]},Uv=new Os().setMeshoptDecoder(pa),Op=s=>new Promise((e,t)=>Uv.load(s,e,void 0,t));function Ov(s,e){if(s&&/glow/i.test(s.name||""))return new Xt({color:8057087,fog:!0});let t=e||s.map;return t&&(t.colorSpace=Wt,t.anisotropy=2),new Si({map:t||null,color:16777215})}function Bp(s,e,t=kv[e],n=!0){let i=s.scene;i.updateMatrixWorld(!0);let r=new Set(t||[]),a=[],o=[];if(i.traverse(y=>{y.isSkinnedMesh?a.push(y):y.isMesh&&o.push(y)}),!a.length)throw new Error("no skinned mesh in "+e);let l=a[0],c=l.skeleton,u=c.bones,p=new Map(u.map((y,x)=>[y,x])),d=l.bindMatrixInverse.clone(),h=[],m=y=>{let x=h.findIndex(A=>A.src===y);return x<0&&(h.push({src:y,mat:Ov(y)}),x=h.length-1),x},b=[],g=y=>{y=y.index?y.toNonIndexed():y.clone();for(let x of Object.keys(y.attributes))["position","normal","uv","skinIndex","skinWeight"].includes(x)||y.deleteAttribute(x);for(let x of Object.keys(y.attributes)){let A=y.attributes[x],F=A.itemSize,I=x==="skinIndex"?new Uint16Array(A.count*F):new Float32Array(A.count*F);for(let D=0;D<A.count;D++)for(let k=0;k<F;k++)I[D*F+k]=x==="skinIndex"?A.getComponent(D,k):Nv[k].call(A,D);y.setAttribute(x,new pt(I,F))}return y.attributes.normal||y.computeVertexNormals(),y.attributes.uv||y.setAttribute("uv",new pt(new Float32Array(y.attributes.position.count*2),2)),y};for(let y of a){let x=g(y.geometry);if(y!==l){let A=y.skeleton.bones,F=A.findIndex(k=>p.has(k)),I=p.get(A[F]),D=new Ye().copy(d).multiply(new Ye().copy(c.boneInverses[I]).invert()).multiply(y.skeleton.boneInverses[F]).multiply(y.bindMatrix);x.applyMatrix4(D)}if(y.skeleton!==c){let A=y.skeleton.bones.map(I=>p.get(I)??0),F=x.attributes.skinIndex;for(let I=0;I<F.count;I++)for(let D=0;D<4;D++)F.setComponent(I,D,A[F.getComponent(I,D)])}b.push({g:x,m:m(y.material)})}for(let y of o){if(!r.has(y.name)&&!r.has(y.parent?.name))continue;let x=y.parent;for(;x&&!x.isBone;)x=x.parent;if(!x)continue;let A=p.get(x);if(A===void 0)continue;let F=new Ye;{let U=y;for(F.copy(y.matrix),U=y.parent;U&&U!==x;)F.premultiply(U.matrix),U=U.parent}let I=new Ye().copy(d).multiply(new Ye().copy(c.boneInverses[A]).invert()).multiply(F),D=g(y.geometry);D.applyMatrix4(I);let k=D.attributes.position.count,V=new Uint16Array(k*4),L=new Float32Array(k*4);for(let U=0;U<k;U++)V[U*4]=A,L[U*4]=1;D.setAttribute("skinIndex",new pt(V,4)),D.setAttribute("skinWeight",new pt(L,4)),b.push({g:D,m:m(y.material)})}b.sort((y,x)=>y.m-x.m);let f=Cc(b.map(y=>y.g),h.length>1);if(h.length>1){let y=0;f.clearGroups();for(let x=0;x<h.length;x++){let A=0;for(let F of b)F.m===x&&(A+=F.g.attributes.position.count);A&&f.addGroup(y,A,x),y+=A}}for(let y of b)y.g.dispose();f.computeBoundingBox(),f.boundingSphere=new yn(new B(0,1.1,0),1.9);let _=new on;_.name=e;let M=(()=>{let y=u[0];for(;y.parent&&y.parent.isBone;)y=y.parent;return y})(),v=[];M.traverse(y=>{y.isMesh&&v.push(y)});for(let y of v)y.parent.remove(y),n&&y.geometry.dispose();_.add(M);let w=new tr(f,h.length>1?h.map(y=>y.mat):h[0].mat);return w.frustumCulled=!0,_.add(w),_.updateMatrixWorld(!0),w.bind(new nr(u,c.boneInverses.map(y=>y.clone())),l.bindMatrix.clone()),{tpl:_,geo:f,mats:h.map(y=>y.mat),height:2.1}}async function zp({base:s="/models",names:e=[],loot:t=null,onProgress:n}={}){let i={templates:new Map,clips:new Map,variants:new Map,pools:new Map,disposables:[]},[r,...a]=await Promise.all([Op(`${s}/anims.glb`),...e.map(o=>Op(`${s}/chars/${o}.glb`))]);for(let o of r.animations)i.clips.set(o.name,o);return e.forEach((o,l)=>{if(t&&t[o]){let u=Bp({scene:yr(a[l].scene)},o+"@loot",t[o],!1);i.templates.set(o+"@loot",u),i.disposables.push(u.geo,...u.mats)}let c=Bp(a[l],o);i.templates.set(o,c),i.disposables.push(c.geo,...c.mats);for(let u of c.mats)u.map&&i.disposables.push(u.map);n?.(o)}),i.material=(o,l=null,c=.32)=>{let u=i.templates.get(o);if(l===null)return u.mats.length>1?u.mats:u.mats[0];let p=o+":"+l+":"+c,d=i.variants.get(p);if(!d){if(typeof l=="string"&&l.startsWith("ghost")){let h=l==="ghost-boss"?13215999:12113151;d=u.mats.map(m=>{let b=new Xt({map:m.map||null,color:h,transparent:!0,opacity:.55,depthWrite:!1,blending:wi,fog:!0});return i.disposables.push(b),b})}else{let h=new Ie(l),m=new Ie(1,1,1).lerp(h,c);d=u.mats.map(b=>{if(b.isMeshBasicMaterial)return b;let g=b.clone();return g.color.copy(m),i.disposables.push(g),g})}if(d=d.length>1?d:d[0],i.variants.set(p,d),i.variants.size>160){let h=i.variants.keys().next().value;i.variants.delete(h)}}return d},i.actor=(o,l=null)=>{let c=i.pools.get(o)||[];i.pools.set(o,c);let u=c.pop();if(!u){let p=i.templates.get(o),d=yr(p.tpl),h=null;d.traverse(b=>{b.isSkinnedMesh&&(h=b)});let m=new ur(d);u={name:o,obj:d,mesh:h,mixer:m,actions:new Map,state:"",base:"idle",until:0,tint:void 0,acc:0,flashT:-9,hand:null},d.traverse(b=>{b.isBone&&/handslot.?l/i.test(b.name)&&(u.hand=b)}),u.play=(b,g,{fade:f=.15,speed:_=1}={})=>Bv(i,u,b,g,f,_)}return u.tint!==l&&(u.mesh.material=i.material(o,l),u.tint=l),u.obj.visible=!0,u.state="",u.base="idle",u.until=0,u.mixer.stopAllAction(),u.play("idle",0,{fade:0}),u},i.bake=(o,l,c=4,{from:u=0,to:p=1}={})=>{let d=`${o}|${l}|${c}|${u}|${p}`;if(i.baked=i.baked||new Map,i.baked.has(d))return i.baked.get(d);let h=i.actor(o),m=Zu(i,h,l);h.mixer.stopAllAction(),m.reset(),m.setLoop(br,1/0),m.play();let b=m.getClip().duration,g=h.mesh.geometry,f=g.attributes.position.count,_=new B,M=[];for(let v=0;v<c;v++){h.mixer.setTime(b*(u+(p-u)*(v/c))),h.obj.updateMatrixWorld(!0),h.mesh.skeleton.update();let w=new Float32Array(f*3);for(let x=0;x<f;x++)h.mesh.getVertexPosition(x,_),_.applyMatrix4(h.mesh.matrix),w[x*3]=_.x,w[x*3+1]=_.y,w[x*3+2]=_.z;let y=new qt;y.setAttribute("position",new pt(w,3)),y.setAttribute("uv",g.attributes.uv),g.index&&y.setIndex(g.index);for(let x of g.groups)y.addGroup(x.start,x.count,x.materialIndex);y.computeVertexNormals(),y.boundingSphere=new yn(new B(0,1,0),2.2),i.disposables.push(y),M.push(y)}return m.stop(),i.release(h),i.baked.set(d,M),M},i.release=o=>{o.obj.visible=!1,o.obj.parent?.remove(o.obj),o.mixer.stopAllAction(),(i.pools.get(o.name)||[]).push(o)},i.dispose=()=>{for(let o of i.disposables)try{o.dispose()}catch{}i.pools.clear(),i.variants.clear()},i}function Zu(s,e,t){let n=e.actions.get(t);if(!n){let[i,r,a]=Up[t]||Up.idle,o=s.clips.get(i)||s.clips.get("Idle");n=e.mixer.clipAction(o),n.timeScaleBase=r,n.loopMode=a,a?n.setLoop(br,1/0):(n.setLoop(la,1),n.clampWhenFinished=!0),e.actions.set(t,n)}return n}function Bv(s,e,t,n,i,r){let a=Zu(s,e,t);if(a.loopMode){if(e.base=t,n<e.until||e.state===t)return}else e.until=n+a.getClip().duration/(a.timeScaleBase*r)*.92;let o=e.actions.get(e.state);a.reset(),a.timeScale=a.timeScaleBase*r,a.enabled=!0,a.setEffectiveWeight(1),o&&o!==a&&i>0?a.crossFadeFrom(o,i,!1):o&&o!==a&&o.stop(),a.play(),e.state=t}function $u(s,e,t,n){if(e.state!==e.base&&n>=e.until&&e.base){let i=Zu(s,e,e.base),r=e.actions.get(e.state);i.reset(),i.timeScale=i.timeScaleBase,i.enabled=!0,i.setEffectiveWeight(1),r&&i.crossFadeFrom(r,.18,!1),i.play(),e.state=e.base}e.mixer.update(t)}var zv=new Os().setMeshoptDecoder(pa),Gv={Dragon_Main:[3873308,1704706],Dragon_Secondary:[1839124,0],Dragon_Horn:[14273712,0],Demon_Main:[6032918,2228226],Black:[1379088,0],Ghost_Main:[2367024,787476],Ghost_Secondary:[11839118,1312260],Eye_White:"eye",Eye_Black:"pupil"},Hv={idle:["Flying_Idle","Idle"],move:["Fast_Flying","Run","Walk"],attack:["Punch","Weapon","Headbutt"],bite:["Headbutt","Punch"],hit:["HitReact"],die:["Death"],roar:["Yes","Jump","Punch"],taunt:["No","Wave"],combat:["Flying_Idle","Idle"],run:["Fast_Flying","Run"],walk:["Fast_Flying","Walk"],cast:["Punch","Weapon","Headbutt"],slash:["Weapon","Punch","Headbutt"],spin:["Headbutt","Weapon","Punch"],summon:["Yes","Punch"],spawn:["Yes","Punch"]},Lc=typeof location<"u"?new URLSearchParams(location.search):new Map,Dc={x:+(Lc.get("ex")||.2),y:+(Lc.get("ey")||.5),d:+(Lc.get("ed")||.12),r:+(Lc.get("er")||.09)},Qu=new Set(["attack","bite","hit","die","roar","taunt","cast","slash","spin","summon","spawn"]);async function Gp({base:s="/models/monsters",names:e=[],eye:t=16722452}={}){let n={templates:new Map,pools:new Map,disposables:[]},i=new Map,r=o=>{let l=o.name;if(i.has(l))return i.get(l);let c=Gv[l],u;return c==="eye"?u=new Xt({color:t,fog:!1,toneMapped:!1}):c==="pupil"?u=new Xt({color:16765024,fog:!1,toneMapped:!1}):c?u=new Si({color:c[0],emissive:c[1],vertexColors:!1}):u=new Si({color:o.color&&o.color.getHex()||3355443}),i.set(l,u),n.disposables.push(u),u},a=await Promise.all(e.map(o=>new Promise((l,c)=>zv.load(`${s}/${o}.glb`,l,void 0,c))));return e.forEach((o,l)=>{let c=a[l];if(c.scene.traverse(h=>{h.isMesh&&(h.material=Array.isArray(h.material)?h.material.map(r):r(h.material),h.frustumCulled=!1,n.disposables.push(h.geometry))}),o==="Demon2"){c.scene.updateMatrixWorld(!0);let h=new Rn().setFromObject(c.scene),m=h.max.y-h.min.y,b=h.max.x-h.min.x;c.scene.traverse(g=>{if(!g.isMesh||g.material.isMeshBasicMaterial)return;let f=new Rn().setFromObject(g);(f.min.y-h.min.y)/m>.6&&(f.max.x-f.min.x)/b<.45&&(g.visible=!1)})}if(o==="Ghost_Skull"){c.scene.updateMatrixWorld(!0);let h=null,m=null;if(c.scene.traverse(b=>{b.isBone&&b.name==="Head"&&(h=b),b.isMesh&&b.material===i.get("Ghost_Secondary")&&(m=b)}),h&&m){let b=new Rn().setFromObject(m),g=b.max.x-b.min.x,f=b.max.y-b.min.y,_=(b.min.x+b.max.x)/2,M=new Xn(1,10,8);n.disposables.push(M);let v=i.get("Eye_White")||r({name:"Eye_White"});for(let w of[-1,1]){let y=new Ke(M,v);y.name="burning_eye",y.frustumCulled=!1;let x=new B(_+w*g*Dc.x,b.min.y+f*Dc.y,b.max.z-g*Dc.d);h.add(y),y.position.copy(h.worldToLocal(x.clone()));let A=new B;h.getWorldScale(A),y.scale.setScalar(g*Dc.r/A.x)}}}c.scene.updateMatrixWorld(!0);let u=new Rn().setFromObject(c.scene),p=u.getSize(new B),d=new Map(c.animations.map(h=>[h.name,h]));n.templates.set(o,{scene:c.scene,clips:d,height:p.y||1,minY:u.min.y})}),n.actor=o=>{let l=n.pools.get(o)||[];n.pools.set(o,l);let c=l.pop();if(!c){let u=n.templates.get(o),p=yr(u.scene),d=new ur(p);c={name:o,obj:p,mixer:d,state:"",until:0,cur:null,unit:1/u.height,minY:u.minY},c.play=(h,m=0,{fade:b=.15,speed:g=1}={})=>{if(h==="dead")return;let f=Hv[h]||[h],_=null;for(let v of f)if(u.clips.has(v)){_=u.clips.get(v);break}if(!_||c.state===h&&!Qu.has(h))return;let M=d.clipAction(_);M.reset(),M.setLoop(Qu.has(h)?la:br,1/0),M.clampWhenFinished=h==="die",M.timeScale=g,c.cur&&c.cur!==M&&c.cur.crossFadeTo(M,b,!1),M.play(),c.cur=M,c.state=h,c.until=Qu.has(h)?m+_.duration/g*.92:0},c.tick=(h,m)=>{c.until&&m>=c.until&&c.state!=="die"&&(c.until=0,c.play(c.base||"idle",m,{fade:.2})),d.update(h)}}return c.obj.visible=!0,c.state="",c.base="idle",c.until=0,c.mixer.stopAllAction(),c.cur=null,c.play("idle",0,{fade:0}),c},n.release=o=>{o.obj.visible=!1,o.obj.parent?.remove(o.obj),o.mixer.stopAllAction(),o.cur=null,(n.pools.get(o.name)||[]).push(o)},n.dispose=()=>{for(let o of n.disposables)try{o.dispose()}catch{}},n}var Vv=[pt.prototype.getX,pt.prototype.getY,pt.prototype.getZ,pt.prototype.getW],Wv=new Os().setMeshoptDecoder(pa);async function Hp(s){let e=await new Promise((d,h)=>Wv.load(s,d,void 0,h)),t=e.scene;t.updateMatrixWorld(!0);let n=new Map,i=new Map,r=new Set,a=[],o=null;for(let d of t.children){let h=[],m=new Ye().copy(d.parent.matrixWorld).invert();if(d.traverse(g=>{if(!g.isMesh)return;g.material.map&&(o||(o=g.material.map),i.set(d.name,g.material.map),r.add(g.material.map));let f=g.geometry.index?g.geometry.toNonIndexed():g.geometry.clone();for(let _ of Object.keys(f.attributes))["position","normal","uv"].includes(_)||f.deleteAttribute(_);for(let _ of["position","normal","uv"]){let M=f.attributes[_];if(!M||M.array instanceof Float32Array&&!M.normalized)continue;let v=new Float32Array(M.count*M.itemSize);for(let w=0;w<M.count;w++)for(let y=0;y<M.itemSize;y++)v[w*M.itemSize+y]=Vv[y].call(M,w);f.setAttribute(_,new pt(v,M.itemSize))}f.attributes.normal||f.computeVertexNormals(),f.attributes.uv||f.setAttribute("uv",new pt(new Float32Array(f.attributes.position.count*2),2)),f.applyMatrix4(new Ye().multiplyMatrices(m,g.matrixWorld)),h.push(f)}),!h.length)continue;let b=h.length>1?Cc(h):h[0];h.length>1&&h.forEach(g=>g.dispose()),b.computeBoundingSphere(),n.set(d.name,b),a.push(b)}let l=new Map;for(let d of r){d.colorSpace=Wt,d.anisotropy=4,a.push(d);let h=new Si({map:d});l.set(d,h),a.push(h)}e.scene.traverse(d=>{d.isMesh&&d.geometry.dispose()});let c=l.get(o)||new Si;o||a.push(c);let u=d=>l.get(i.get(d))||c;return{geos:n,mat:c,matOf:u,has:d=>n.has(d),instanced(d,h,{material:m=u(d)}={}){let b=n.get(d);if(!b||!h.length)return null;let g=new Nn(b,m,h.length),f=new It,_=0;return h.forEach((M,v)=>{f.position.set(M.x,M.y||0,M.z),f.rotation.set(M.rx||0,M.ry||0,M.rz||0),f.scale.set((M.s||1)*(M.sx||1),(M.s||1)*(M.sy||1),(M.s||1)*(M.sz||1)),f.updateMatrix(),g.setMatrixAt(v,f.matrix),_=Math.max(_,Math.hypot(M.x,M.z)+(M.s||1)*3)}),g.instanceMatrix.needsUpdate=!0,g.geometry.boundingSphere,g.boundingSphere=new yn(new B,_),g.frustumCulled=!1,g},dispose(){for(let d of a)try{d.dispose()}catch{}}}}var yo=["Knight","Barbarian","Mage","Rogue","Rogue_Hooded"],ed=.86,rn=Math.PI*2,Vp=[16767416,15843471,14262374,11037509,8014380,16769999],Wp={treasure:16761402,trap:16724804,monster:6160250,riddle:11566335},qp=s=>s===-2?ms:s===-1||s===void 0||s<-2?ks:ui[s]||ks,gs=10.2;function Xp(s,e={}){let t=new Mc({canvas:s,antialias:!!e.aa,alpha:!1,depth:!0,stencil:!1,powerPreference:"default",preserveDrawingBuffer:!!e.preserve,failIfMajorPerformanceCaveat:!1});if(!t.getContext())throw new Error("no webgl");t.outputColorSpace=Wt,t.toneMapping=ao,t.toneMappingExposure=1.2,t.shadowMap.enabled=!1;let n=new Ba;n.background=new Ie(1182240),n.fog=new Oa(1708080,14,42);let i=new xn(62,9/16,.4,120),r=[],a=T=>(r.push(T),T),o=new eo(12166911,3809328,1.15);n.add(o);let l=new io(6969994,.35);n.add(l);let c=new lr(16757611,30,26,1.6);n.add(c);let u=new hr(16767408,1.1);u.position.set(3,12,14),n.add(u),n.add(u.target);let p=a(new Rs(new Uint8Array([80,165,255]),3,1,oa));p.minFilter=p.magFilter=nn,p.needsUpdate=!0;let d=(T,O={})=>a(new rr({color:T,gradientMap:p,...O})),h=null,m=null,b=null,g=!1,f=null,_=Promise.all([Hp(e.envUrl||"/models/env-tower.glb"),zp({names:yo.concat(["Skeleton_Mage","Skeleton_Warrior"])}),Gp({names:["Ghost_Skull","Demon","Demon2"]})]).then(([T,O,C])=>{if(g){T.dispose(),O.dispose(),C.dispose();return}m=T,h=O,b=C;for(let ne of Q.values())Ce(ne);Q.clear(),X()}).catch(T=>{throw f=T,T});_.catch(()=>{});function M(T,O,C,ne=r,{mip:G=!0,repeat:J=null}={}){let me=document.createElement("canvas");me.width=T,me.height=O,C(me.getContext("2d"),T,O);let K=new qa(me);return K.colorSpace=Wt,K.generateMipmaps=G,G||(K.minFilter=1006),K.anisotropy=2,J&&(K.wrapS=K.wrapT=1e3,K.repeat.set(J[0],J[1])),ne.push(K),K}let v=7,w=()=>(v=v*16807%2147483647,(v-1)/2147483646),y=M(256,256,(T,O,C)=>{T.fillStyle="#5a5262",T.fillRect(0,0,O,C);let ne=8;for(let G=0;G<ne;G++){let J=C/ne,me=G%2*.5;for(let K=-1;K<5;K++){let he=O/4,de=(K+me)*he,ye=G*J;T.fillStyle=`hsl(${250+w()*30}, ${8+w()*8}%, ${52+w()*22}%)`,T.fillRect(de+3,ye+3,he-6,J-6),T.fillStyle="rgba(0,0,0,0.12)",T.fillRect(de+3,ye+J-9,he-6,6);for(let Xe=0;Xe<6;Xe++)T.fillStyle=`rgba(0,0,0,${w()*.12})`,T.fillRect(de+w()*he,ye+w()*J,6+w()*10,3+w()*5)}}},r,{repeat:[5,1.6]}),x=M(64,64,(T,O)=>{let C=T.createRadialGradient(O/2,O/2,0,O/2,O/2,O/2);C.addColorStop(0,"rgba(0,0,0,0.6)"),C.addColorStop(.6,"rgba(0,0,0,0.28)"),C.addColorStop(1,"rgba(0,0,0,0)"),T.fillStyle=C,T.fillRect(0,0,O,O)},r,{mip:!1}),A=M(128,256,(T,O,C)=>{T.fillStyle="#4a2a1a",T.fillRect(0,0,O,C);for(let ne=0;ne<4;ne++){T.fillStyle=`hsl(22, 45%, ${22+w()*10}%)`,T.fillRect(ne*32+2,0,28,C),T.fillStyle="rgba(0,0,0,0.25)";for(let G=0;G<8;G++)T.fillRect(ne*32+4+w()*22,w()*C,2,20+w()*40)}for(let ne of[40,210]){T.fillStyle="#2a2a30",T.fillRect(0,ne,O,14),T.fillStyle="#6a6a78";for(let G=8;G<O;G+=24)T.beginPath(),T.arc(G,ne+7,3,0,rn),T.fill()}T.strokeStyle="#c9a24a",T.lineWidth=5,T.beginPath(),T.arc(O*.78,C*.55,10,0,rn),T.stroke()}),F=[1,2,3].map(T=>M(128,128,O=>{let C=O.createRadialGradient(64,64,10,64,64,62);C.addColorStop(0,"#fff3c4"),C.addColorStop(.75,"#f0b43c"),C.addColorStop(1,"#8a4a10"),O.fillStyle=C,O.beginPath(),O.arc(64,64,60,0,rn),O.fill(),O.lineWidth=6,O.strokeStyle="#5a2a00",O.stroke(),O.font="900 86px -apple-system, Arial Black, sans-serif",O.textAlign="center",O.textBaseline="middle",O.fillStyle="#3a1300",O.fillText(String(T),64,70)})),I=M(128,128,(T,O)=>{T.strokeStyle="rgba(255,255,255,0.75)",T.lineWidth=1.5;for(let C=0;C<7;C++){let ne=C/6*(Math.PI/2);T.beginPath(),T.moveTo(0,0),T.lineTo(Math.cos(ne)*O*1.4,Math.sin(ne)*O*1.4),T.stroke()}for(let C=14;C<O*1.3;C+=16){T.beginPath();for(let ne=0;ne<=6;ne++){let G=ne/6*(Math.PI/2),J=C*(.92+ne%2*.08);ne?T.lineTo(Math.cos(G)*J,Math.sin(G)*J):T.moveTo(Math.cos(G)*J,Math.sin(G)*J)}T.stroke()}}),D=M(128,128,(T,O,C)=>{T.fillStyle="#3a2214",T.fillRect(0,0,O,C);for(let ne=0;ne<4;ne++){let G=4,J=ne*32;for(T.fillStyle="#24140a",T.fillRect(0,J+28,O,4);G<O-6;){let me=5+w()*8,K=18+w()*8;T.fillStyle=`hsl(${w()*360}, 45%, ${28+w()*22}%)`,T.fillRect(G,J+28-K,me,K),T.fillStyle="rgba(255,220,140,0.35)",T.fillRect(G,J+28-K+3,me,2),G+=me+1}}}),k=M(256,256,(T,O)=>{let C=O/2;T.fillStyle="#f3e3bc",T.beginPath(),T.arc(C,C,C-6,0,rn),T.fill(),T.lineWidth=12,T.strokeStyle="#8a5a1a",T.stroke(),T.fillStyle="#3a2410",T.font="bold 30px Georgia, serif",T.textAlign="center",T.textBaseline="middle",["XII","I","II","III","IV","V","VI","VII","VIII","IX","X","XI"].forEach((ne,G)=>{let J=G/12*rn-Math.PI/2;T.fillText(ne,C+Math.cos(J)*(C-34),C+Math.sin(J)*(C-34))})}),V=M(64,128,(T,O,C)=>{let ne=T.createLinearGradient(0,0,O,C);ne.addColorStop(0,"#b9c8ff"),ne.addColorStop(.45,"#3a3870"),ne.addColorStop(.55,"#d8e0ff"),ne.addColorStop(1,"#2a2450"),T.fillStyle=ne,T.fillRect(0,0,O,C)});V.wrapT=1e3;let L=(T,O)=>M(256,256,(C,ne,G)=>{let J=T==="belfry"?ms:T==="gate"?ks:ui.find(de=>de.id===T)||ks,me=new Ie(J.floor),K=(de,ye)=>"#"+de.clone().multiplyScalar(ye).getHexString();if(C.fillStyle=K(me,1),C.fillRect(0,0,ne,G),T==="library"||T==="attic"||T==="gate"){for(let de=0;de<8;de++){C.fillStyle=K(me,.85+w()*.3),C.fillRect(de*32+1,0,30,G);for(let ye=0;ye<2;ye++)C.fillStyle="rgba(0,0,0,0.35)",C.fillRect(de*32+1,w()*G,30,2);for(let ye=0;ye<10;ye++)C.fillStyle="rgba(0,0,0,0.12)",C.fillRect(de*32+3+w()*24,w()*G,1.5,14+w()*30)}T!=="attic"&&(C.fillStyle="rgba(120,20,40,0.55)",C.fillRect(ne*.32,0,ne*.36,G),C.fillStyle="rgba(255,200,90,0.5)",C.fillRect(ne*.32,0,4,G),C.fillRect(ne*.68-4,0,4,G))}else if(T==="mirror"||T==="ballroom")for(let de=0;de<8;de++)for(let ye=0;ye<8;ye++)C.fillStyle=(ye+de)%2?K(me,1.25):K(me,.45),C.fillRect(ye*32,de*32,32,32);else if(T==="clock"){for(let de=0;de<4;de++)for(let ye=0;ye<4;ye++)C.fillStyle=K(me,.8+w()*.4),C.fillRect(ye*64+2,de*64+2,60,60);C.strokeStyle="rgba(255,210,120,0.6)",C.lineWidth=3;for(let de of[40,80,118])C.beginPath(),C.arc(ne/2,G/2,de,0,rn),C.stroke()}else{for(let de=0;de<6;de++)for(let ye=0;ye<6;ye++)C.fillStyle=K(me,.7+w()*.45),C.fillRect(ye*43+2+de%2*20,de*43+2,39,39);if(T==="lab"){C.strokeStyle="rgba(140,255,170,0.5)",C.lineWidth=3,C.beginPath(),C.arc(ne/2,G/2,70,0,rn),C.stroke();for(let de=0;de<6;de++){let ye=de/6*rn;C.beginPath(),C.moveTo(ne/2,G/2),C.lineTo(ne/2+Math.cos(ye)*70,G/2+Math.sin(ye)*70),C.stroke()}}if(T==="belfry"||T==="crypt"){C.strokeStyle="rgba(190,150,255,0.55)",C.lineWidth=4,C.beginPath();for(let de=0;de<=5;de++){let ye=de*2/5*rn-Math.PI/2;C.lineTo(ne/2+Math.cos(ye)*90,G/2+Math.sin(ye)*90)}C.stroke(),C.beginPath(),C.arc(ne/2,G/2,98,0,rn),C.stroke()}}let he=C.createRadialGradient(ne/2,G/2,ne*.2,ne/2,G/2,ne*.7);he.addColorStop(0,"rgba(0,0,0,0)"),he.addColorStop(1,"rgba(0,0,0,0.45)"),C.fillStyle=he,C.fillRect(0,0,ne,G)},O),U={box:a(new os(1,1,1)),cyl:a(new li(.5,.5,1,10)),cyl6:a(new li(.5,.5,1,6)),sph:a(new Xn(.5,12,8)),plane:a(new Is(1,1)),cone:a(new $r(.5,1,6)),torus:a(new Za(1,.08,6,24)),floor:a(new Ja(gs,8).rotateX(-Math.PI/2).rotateY(Math.PI/8)),wall:a(new li(gs,gs,Rt,8,1,!0).rotateY(Math.PI/8).translate(0,Rt/2,0)),step:a(new os(1.5,.22,.7)),gear:a(new li(1,1,.25,12)),ghost:a(new Qr([[0,0],[.44,.02],[.47,.3],[.43,.62],[.35,.86],[.2,1.02],[0,1.08]].map(([T,O])=>new nt(T,O)),12)),bell:a(new Qr([[.05,1.6],[.45,1.55],[.6,1.2],[.7,.6],[.95,.15],[1.05,0],[0,0]].map(([T,O])=>new nt(T,O)),14))};{let T=U.ghost.attributes.position;for(let O=0;O<T.count;O++){let C=T.getY(O);if(C<.05){let ne=Math.atan2(T.getZ(O),T.getX(O));T.setY(O,C-.08-.08*Math.sin(ne*6))}}U.ghost.computeVertexNormals()}let Q=new Map,Y=new Ye,fe=new Ye,$=new En,oe=new oi,le=new B,Fe=new B,tt=new Ye;function re(T,O,C){let ne=qp(O),G=ne.id,J=[],me=new on,K=Re=>{let Ne=new rr({gradientMap:p,...Re});return J.push(Ne),Ne},he=Re=>{let Ne=new Xt(Re);return J.push(Ne),Ne},de=Re=>(me.add(Re),Re),ye=(Re,Ne,et)=>de(new Nn(Re,Ne,et)),Xe=(Re,Ne,et,Ue,Be,$e,Bt,dn,W=0,H=0,ht=0)=>{$.setFromEuler(oe.set(H,W,ht)),Re.setMatrixAt(Ne,Y.compose(le.set(et,Ue,Be),$,Fe.set($e,Bt,dn)))};me.position.y=T*Rt,de(new Ke(U.floor,K({map:L(G,J),side:Mn}))),de(new Ke(U.wall,K({map:y,color:ne.wall,side:In})));let Ki=ye(U.box,K({color:new Ie(ne.wall).multiplyScalar(.7)}),8);for(let Re=0;Re<8;Re++){let Ne=Re/8*rn;if(Math.sin(Ne)>.3){Xe(Ki,Re,0,-50,0,.01,.01,.01,0);continue}Xe(Ki,Re,Math.cos(Ne)*(gs-.3),Rt/2,Math.sin(Ne)*(gs-.3),.9,Rt,.9,-Ne)}let Ii=de(new Ke(U.torus,K({color:9071162,emissive:2759176})));Ii.rotation.x=Math.PI/2,Ii.scale.set(gs-.4,gs-.4,2),Ii.position.y=.05;let it=ye(U.step,K({color:6971504}),16);for(let Re=0;Re<16;Re++){let Ne=(Re+.5)/16,et=Math.PI-Ne*rn;Xe(it,Re,Nt.x+Math.cos(et)*Nt.r,Ne*Rt-.1,Nt.z+Math.sin(et)*Nt.r,1,1,1,-et)}let ot=de(new Ke(U.cyl,K({color:4866128})));ot.position.set(Nt.x,Rt/2,Nt.z),ot.scale.set(.5,Rt,.5);let Ji=[],Zt=[];for(let Re=0;Re<10;Re++){let Ne=-Math.PI*.95+Re/9*Math.PI*1.9+Math.PI/2,et=gs-1.2,Ue=Math.cos(Ne)*et,Be=Math.sin(Ne)*et;Math.hypot(Ue-Nt.x,Be-Nt.z)<2.6||Be>3||Zt.push([Ue,Be,.5+Re%3*.35])}if(m){let Re=[],Ne=[];Zt.forEach(([et,Ue,Be],$e)=>{$e%3===1?(Ne.push({x:et,z:Ue,ry:w()*rn,s:1.1}),Ji.push([et,.95,Ue])):(Re.push({x:et,z:Ue,ry:w()*rn,s:.9+Be*.4}),Ji.push([et,(.9+Be*.4)*1,Ue]))});for(let[et,Ue]of[["candle_lit",Re],["candle_triple",Ne]]){let Be=m.instanced(et,Ue);Be&&de(Be)}}else{let Re=ye(U.cyl,K({color:15985362,emissive:3811856}),Zt.length),Ne=ye(U.cyl6,K({color:6965802}),Zt.length);Zt.forEach(([et,Ue,Be],$e)=>{Xe(Re,$e,et,Be/2+.6,Ue,.22,Be,.22),Xe(Ne,$e,et,.3,Ue,.5,.6,.5),Ji.push([et,Be+.75,Ue])})}let hn=[],qn={fi:T,th:O,id:G,grp:me,list:J,doors:[],flames:Ji,anim:hn,nd:C,extra:{}};if(C){let Re=vr(C),Ne=m?2.8:4,et=2;if(m){let Ue=m.instanced("wall_doorway",Re.map(Be=>({x:Be,y:0,z:Tt-.1,s:1})));Ue&&de(Ue)}else{let Ue=ye(U.box,K({color:3813440}),C*3);Re.forEach((Be,$e)=>{Xe(Ue,$e*3,Be-1.2,2,Tt,.45,4.2,.7),Xe(Ue,$e*3+1,Be+1.2,2,Tt,.45,4.2,.7),Xe(Ue,$e*3+2,Be,4.2,Tt,2.9,.55,.75)})}Re.forEach((Ue,Be)=>{let $e=de(new Ke(U.plane,he({color:328200})));$e.position.set(Ue,Ne/2,Tt-.12),$e.scale.set(et,Ne,1);let Bt=de(new Ke(U.plane,he({color:0,transparent:!0,blending:wi,depthWrite:!1})));Bt.position.set(Ue,Ne/2,Tt-.08),Bt.scale.set(et,Ne,1);let dn=de(new It);if(dn.position.set(Ue-.98,0,Tt+.08),m&&m.has("wall_doorway_door")){let H=new Ke(m.geos.get("wall_doorway_door"),m.matOf("wall_doorway_door"));H.position.set(1,0,-.1),dn.add(H)}else{let H=new Ke(U.box,K({map:A}));H.scale.set(1.95,3.95,.16),H.position.set(.975,1.98,0),dn.add(H)}let W=de(new Ke(U.plane,he({map:F[Be],transparent:!0})));W.position.set(Ue,Ne+1.35,Tt+.42),W.scale.set(1.25,1.25,1),qn.doors.push({x:Ue,pivot:dn,glow:Bt,plaque:W,open:0,top:Ne+2.2})})}let Li=[[-8.2,-1.5,Math.PI/2],[-7.2,3.6,Math.PI/2+.5],[8.4,3.2,-Math.PI/2-.4],[-6.6,-5.6,Math.PI/4]];if(G==="library"||G==="gate"){let Re=ye(U.box,K({map:D}),4);if(Li.forEach(([Ne,et,Ue],Be)=>Xe(Re,Be,Ne,2.2,et,2.6,4.4,.9,Ue)),G==="library"){let Ne=ye(U.box,K({color:16777215}),10),et=new Ie;for(let Ue=0;Ue<10;Ue++)Ne.setColorAt(Ue,et.setHSL(w(),.6,.45));hn.push(Ue=>{for(let Be=0;Be<10;Be++){let $e=Ue*.3+Be*.63;Xe(Ne,Be,Math.cos($e)*(3+Be%3),4.6+Math.sin(Ue*1.3+Be)*.5,-1.5+Math.sin($e)*2.5,.5,.12,.38,Ue*.8+Be,Math.sin(Ue+Be)*.4)}Ne.instanceMatrix.needsUpdate=!0})}else{let Ne=de(new Ke(U.plane,he({color:6953546,side:Mn})));Ne.position.set(0,5.6,Tt+.5),Ne.scale.set(3,1.6,1)}}else if(G==="crypt"){let Re=ye(U.cyl6,K({color:4864560}),3);[[-7.6,-1,.3],[-6.8,3.2,-.4],[8.1,3.8,.5]].forEach(([Ue,Be,$e],Bt)=>Xe(Re,Bt,Ue,.45,Be,1.3,2.5,.8,$e,Math.PI/2));let Ne=ye(U.sph,K({color:15524556}),9);for(let Ue=0;Ue<9;Ue++){let Be=w()*rn,$e=7+w()*1.6;Xe(Ne,Ue,Math.cos(Be)*$e,.25,Math.abs(Math.sin(Be))*$e*.8-2,.5,.45,.5)}let et=ye(U.box,K({color:5921382}),3);[[-5.6,-5.8],[3.2,-5.4],[-8.2,1.6]].forEach(([Ue,Be],$e)=>Xe(et,$e,Ue,.7,Be,1,1.4,.3,w()*.3))}else if(G==="mirror"){let Re=ye(U.box,K({color:13214282,emissive:3811840}),4),Ne=ye(U.plane,he({map:V}),4);[[-8.6,-2.5,Math.PI/2],[-8,2.4,Math.PI/2+.3],[8.8,2.6,-Math.PI/2-.3],[-6.4,-6.2,Math.PI/4]].forEach(([et,Ue,Be],$e)=>{Xe(Re,$e,et,2.6,Ue,1.7,4,.2,Be),Xe(Ne,$e,et+Math.sin(Be)*.13,2.6,Ue+Math.cos(Be)*.13,1.4,3.6,1,Be)}),hn.push(et=>{V.offset.y=et*.05%1})}else if(G==="clock"){let Re=de(new Ke(U.plane,he({map:k,transparent:!0})));Re.position.set(-8.5,4.4,-1.2),Re.rotation.y=Math.PI/2,Re.scale.set(4.2,4.2,1);let Ne=ye(U.box,K({color:2759178}),2),et=ye(U.gear,K({color:12618298,emissive:2759168}),5),Ue=[[-7.6,1.2,3.6,1.2],[-6.6,6.2,-5.5,1.6],[8.3,5.4,2.4,1.4],[8.6,1.5,4.8,.9],[-8.4,7,2.4,1]];hn.push(Be=>{let $e=Be*.08,Bt=Be*1;Xe(Ne,0,-8.42,4.4+Math.cos($e)*.6,-1.2-Math.sin($e)*.6,.05,1.2,.14,0,$e),Xe(Ne,1,-8.4,4.4+Math.cos(Bt)*.85,-1.2-Math.sin(Bt)*.85,.05,1.7,.09,0,Bt),Ne.instanceMatrix.needsUpdate=!0,Ue.forEach(([dn,W,H,ht],Yt)=>Xe(et,Yt,dn,W,H,ht,1,ht,Math.atan2(-dn,-H),Math.PI/2,(Yt%2?-1:1)*Be*.7/ht)),et.instanceMatrix.needsUpdate=!0})}else if(G==="attic"){let Re=ye(U.box,K({color:4861984}),5);for(let $e=0;$e<5;$e++)Xe(Re,$e,0,Rt-1.2,-6+$e*3,gs*2,.5,.5);let Ne=ye(U.box,K({color:8018480}),6);[[-7.8,.6,-2.6,1.2],[-7.4,.5,2.2,1],[-7.6,1.6,-2.4,.8],[8.2,.6,3.2,1.2],[-5.5,.5,-6,1],[8.4,1.6,3.4,.8]].forEach(([$e,Bt,dn,W],H)=>Xe(Ne,H,$e,Bt,dn,W,W,W,w()));let et=ye(U.plane,he({map:I,transparent:!0,depthWrite:!1,side:Mn,opacity:.8}),4);Xe(et,0,-6.8,Rt-2.2,-6.8,4,4,1,Math.PI/4),Xe(et,1,7.2,Rt-2.2,-6.4,4,4,1,-Math.PI/4,0,Math.PI/2),Xe(et,2,-9.2,3.5,2.5,3,3,1,Math.PI/2),Xe(et,3,4.6,6.4,-7.4,3,3,1,0,0,Math.PI);let Ue=ye(U.sph,K({color:1708056}),3),Be=ye(U.cyl6,he({color:14540253}),3);hn.push($e=>{for(let Bt=0;Bt<3;Bt++){let dn=[-3.5,2.4,5.4][Bt],W=[-3.2,-4.5,.5][Bt],H=5.5+Math.sin($e*.9+Bt*2)*1.2;Xe(Ue,Bt,dn,H,W,.45,.4,.5),Xe(Be,Bt,dn,(H+Rt)/2,W,.02,Rt-H,.02)}Ue.instanceMatrix.needsUpdate=!0,Be.instanceMatrix.needsUpdate=!0})}else if(G==="lab"){let Re=ye(U.box,K({color:4863012}),2);Xe(Re,0,-7.6,.9,0,1.6,.25,4.5),Xe(Re,1,7.9,.9,3.6,1.4,.25,3,.3);let Ne=ye(U.cyl,K({color:16777215,emissive:1118481}),12),et=new Ie;for(let $e=0;$e<12;$e++){let Bt=$e<7;Xe(Ne,$e,Bt?-7.6+(w()-.5):7.9+(w()-.5)*.8,1.35,Bt?-2+$e*.6:2.6+($e-7)*.55,.3,.5+w()*.5,.3),Ne.setColorAt($e,et.setHSL([.33,.8,.55,.15][$e%4],.9,.55))}let Ue=de(new Ke(U.sph,K({color:2236968})));Ue.position.set(-4.6,.8,-4.4),Ue.scale.set(2,1.6,2);let Be=de(new Ke(U.floor,he({color:8257386})));Be.position.set(-4.6,1.45,-4.4),Be.scale.setScalar(.09),qn.extra.brew=[-4.6,1.6,-4.4]}else if(G==="ballroom"){let Re=ye(U.torus,K({color:14266442,emissive:4861952}),2);Xe(Re,0,-3,Rt-2,0,1.4,1.4,1.4,0,Math.PI/2),Xe(Re,1,3.5,Rt-2.4,-2.5,1.1,1.1,1.1,0,Math.PI/2),qn.extra.chand=[[-3,Rt-2,0],[3.5,Rt-2.4,-2.5]];let Ne=ye(U.ghost,he({color:13219583,transparent:!0,opacity:.32,depthWrite:!1}),4);hn.push(et=>{for(let Ue=0;Ue<4;Ue++){let Be=et*.35+Ue*rn/4;Xe(Ne,Ue,Math.cos(Be)*6.8,1+Math.sin(et*2+Ue)*.25,Math.sin(Be)*6.8-.5,1.1,1.6,1.1,-Be+Math.sin(et*3+Ue)*.4)}Ne.instanceMatrix.needsUpdate=!0})}else if(G==="belfry"){let Re=de(new Ke(U.bell,K({color:13210938,emissive:3810304,side:Mn})));Re.position.set(0,Rt-2.4,-8.5),Re.scale.setScalar(1.1),Re.visible=!1,hn.push(et=>{Re.rotation.z=Math.sin(et*1.6)*.25});let Ne=ye(U.plane,he({color:10466559}),2);Xe(Ne,0,-9.3,5,-1.5,2,3.2,1,Math.PI/2),Xe(Ne,1,9.3,5,1.5,2,3.2,1,-Math.PI/2),qn.extra.win=Ne}if(G==="attic"||G==="mirror"||G==="crypt"){let Re=ye(U.plane,he({color:6978228}),1);Xe(Re,0,-9.3,5.2,-3,1.8,2.8,1,Math.PI/2),qn.extra.win=Re}return m&&Qe(G,de,qn),me.traverse(Re=>{Re.isInstancedMesh&&(Re.instanceMatrix.needsUpdate=!0,Re.instanceColor&&(Re.instanceColor.needsUpdate=!0),Re.frustumCulled=!1)}),n.add(me),qn}let Me=Math.PI/2,Ge={all:[["torch_mounted",-9.55,-3.2,Me,1,3.2],["torch_mounted",-9.55,2.4,Me,1,3.2],["torch_mounted",9.6,1,-Me,1,3.2]],gate:[["banner_patternA_red",-6.7,Tt+.05,0,1,2.6],["banner_patternA_red",6.7,Tt+.05,0,1,2.6],["lantern_standing",-7.4,3.8,0,1.3],["barrel_large",-8,-1,.3,.75],["crates_stacked",8.1,4.4,.4,.8],["pumpkin_orange_jackolantern",-6.6,5.6,.6,.9]],library:[["table_medium_decorated_A",-7.2,2.2,.2,.9],["chair",-6.1,3.4,2.4,.9],["lantern_standing",7.9,4.6,0,1.3],["banner_thin_green",-3.4,Tt+.05,0,1,2.8],["banner_thin_green",3.4,Tt+.05,0,1,2.8],["shelf_small_candles",-9.4,-.5,Me,1,2.4]],crypt:[["coffin_decorated",-7.6,-.6,Me,.95],["coffin",-7,3.6,Me-.4,.95],["coffin_lid",-7,3.6,Me-.4,.95],["skull_candle",-5.8,-5.7,.4,1],["gravestone",3,-5.8,0,1],["gravestone",-3.1,-6,.15,.9],["ribcage",7.6,5.2,.8,1.2],["bone_A",-3.8,5.6,1.1,1.2],["bone_A",4.6,6,2.2,1.2],["shrine_candles",8.3,3.6,-Me,1]],mirror:[["candle_triple",-7.8,.4,0,1.2],["candle_triple",8.2,4.4,0,1.2],["banner_thin_green",-3.4,Tt+.05,0,1,2.8],["banner_thin_green",3.4,Tt+.05,0,1,2.8]],clock:[["crates_stacked",-7.9,3.4,.3,.85],["barrel_small_stack",8.2,4.4,-.6,.85],["keg_decorated",-7.2,-4.6,.8,.8],["sword_shield",9.6,4.2,-Me,1,3]],attic:[["box_stacked",-7.4,-4.4,.4,.75],["barrel_large",8.2,4.6,0,.8],["pumpkin_orange_jackolantern",-6.2,5.4,.6,.9],["pumpkin_yellow_small",-5.4,6,.2,1.2],["crates_stacked",7,-5.8,-.4,.8]],lab:[["keg_decorated",8,4.6,-.5,.8],["bottle_A_green",-7.6,-1.2,0,.9,1],["bottle_B_brown",-7.4,.8,0,.9,1],["shelf_small_candles",9.6,2.6,-Me,1,2.4],["skull",7.2,6,-.8,.8]],ballroom:[["banner_triple_yellow",0,Tt-.1,0,1,4.4],["bench_decorated",-7.8,1.4,Me,1],["bench_decorated",8.2,4.4,-Me,1],["candle_triple",-7.6,-4.6,0,1.3]],belfry:[["banner_patternB_blue",-6.6,Tt+.05,0,1,2.6],["banner_patternB_blue",6.6,Tt+.05,0,1,2.6],["skull_candle",-7.6,2.6,.8,1.1],["lantern_standing",7.8,4.8,0,1.3],["post_skull",-6.6,5.4,.6,1],["post_skull_skull",-6.6,5.4,.6,1]]};function Qe(T,O,C){let ne={};for(let[G,J,me,K,he=1,de=0]of Ge.all.concat(Ge[T]||[]))(ne[G]||(ne[G]=[])).push({x:J,y:de,z:me,ry:K,s:he});for(let[G,J]of Object.entries(ne)){let me=m.instanced(G,J);if(me&&(O(me),G==="torch_mounted"))for(let K of J)C.flames.push([K.x+Math.sin(K.ry)*.45,K.y+.75,K.z+Math.cos(K.ry)*.45])}}function Ce(T){n.remove(T.grp);for(let O of T.list)O.dispose();T.grp.traverse(O=>{O.isInstancedMesh&&O.dispose()})}function at(T,O,C){let ne=Q.get(T);return ne&&(ne.th!==O||ne.nd!==C)&&(Ce(ne),Q.delete(T),ne=null),ne||(ne=re(T,O,C),Q.set(T,ne)),ne}let Kt=a(new zn({transparent:!0,depthWrite:!1,fog:!1,uniforms:{map:{value:null},time:{value:0},talk:{value:0},op:{value:0}},vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vU; uniform sampler2D map; uniform float time; uniform float talk; uniform float op;
      void main(){ vec4 c = texture2D(map, vU); if (c.a < 0.05) discard;
        float scan = 0.94 + 0.06 * sin(vU.y * 140.0 + time * 6.0);
        vec3 col = c.rgb * scan * (1.0 + talk * 0.22) + vec3(0.55,0.3,0.9) * (0.1 + talk * 0.14);
        gl_FragColor = vec4(col, c.a * op * (0.9 + 0.1 * sin(time * 2.0))); }`})),We=new Ke(U.plane,Kt);We.scale.set(2.55,4.08,1),We.renderOrder=7,We.visible=!1,n.add(We),new or().load(e.miraUrl||"/assets/mira-tower.png",T=>{T.colorSpace=Wt,a(T),Kt.uniforms.map.value=T,We.visible=!0});let At=0,Ct=!1,mt=1,Qt=new B(-6.1,1.1,-4.9),Gt=e.maxChars||60,en=(T,O,C=1)=>{let ne=new Nn(T,O,Gt*C);ne.frustumCulled=!1,ne.count=0;let G=new Ie(1,1,1);for(let J=0;J<Gt*C;J++)ne.setColorAt(J,G);return n.add(ne),ne},gt={body:en(a(new Ka(.27,.24,3,10)),d(16777215)),head:en(a(new Xn(.36,14,10)),d(16777215)),hair:en(a(new Xn(.385,14,8,0,rn,0,Math.PI*.52)),d(16777215)),eyes:en(a(new Xn(.058,8,6)),a(new Xt({color:1774640})),2),hands:en(a(new Xn(.13,10,8)),d(16777215),2),feet:en(a(new Xn(.12,8,6)),d(2761272),2),lantern:en(a(new li(.11,.13,.26,6)),d(16770976,{emissive:16752672})),shadow:en(a(new Is(1,1).rotateX(-Math.PI/2)),a(new Xt({map:x,transparent:!0,depthWrite:!1})))};gt.shadow.renderOrder=2;let Wn=16,Jt=new Nn(U.ghost,a(new Xt({color:14214399,transparent:!0,opacity:.5,depthWrite:!1})),Wn);Jt.frustumCulled=!1,Jt.count=0,Jt.renderOrder=6,n.add(Jt);let gn=new Nn(a(new Xn(.07,6,5)),a(new Xt({color:1708080})),Wn*2);gn.frustumCulled=!1,gn.count=0,n.add(gn);let un=new Ke(a(new Xn(1,20,12,0,rn,0,Math.PI/2)),a(new zn({transparent:!0,depthWrite:!1,blending:wi,uniforms:{time:{value:0},a:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; varying float vY; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); vY = position.y; gl_Position = projectionMatrix * mv; }",fragmentShader:"varying vec3 vN; varying vec3 vV; varying float vY; uniform float time; uniform float a; void main(){ float f = 1.0 - abs(dot(vN, vV)); float band = 0.5 + 0.5*sin(vY*30.0 - time*3.0); gl_FragColor = vec4(vec3(0.35,0.75,1.0) * (pow(f,2.0)*0.9 + band*0.08) * a, 1.0); }"})));un.visible=!1,un.renderOrder=8,n.add(un);let kt=new on;kt.visible=!1,n.add(kt);let z=a(new rr({color:15265023,gradientMap:p,emissive:2763360,transparent:!0,opacity:.9})),Un=a(new Xt({color:1181720})),Ht=a(new Xt({color:16726586})),Ut=[],Se={};{let T=new on,O=new Ke(U.ghost,z);O.scale.set(2.6,2.8,2.6),T.add(O);for(let G of[-1,1]){let J=new Ke(U.sph,Un);J.position.set(G*.42,2.15,1),J.scale.set(.42,.62,.3),T.add(J);let me=new Ke(U.sph,Ht);me.position.set(G*.42,2.12,1.15),me.scale.set(.14,.18,.1),T.add(me)}let C=new Ke(U.sph,Un);C.position.set(0,1.55,1.12),C.scale.set(.5,.42,.2),T.add(C);for(let G of[-1,1]){let J=new Ke(U.ghost,z);J.scale.set(.5,1.2,.5),J.position.set(G*1.25,1.1,.3),J.rotation.z=G*2.2,T.add(J)}let ne=new Ke(a(new li(.62,.5,.5,6,1,!0)),d(16765773,{emissive:6965760,side:Mn}));ne.position.set(0,3.15,0),T.add(ne),T.userData={mouth:C,crown:ne},Se.ghost=T,kt.add(T)}let an=Number(new URLSearchParams(location.search).get("eyeY"))||2.55,Ze=Number(new URLSearchParams(location.search).get("eyeZ"))||2.2,Je=null,R=null,S=null;function X(){let T=Se.ghost;for(let C of[...T.children])C!==T.userData.crown&&(C.visible=!1);Je=b.actor("Ghost_Skull"),Je.obj.scale.setScalar(Je.unit*3.4),T.add(Je.obj),R=b.actor("Demon"),R.obj.scale.setScalar(R.unit*3.6),T.add(R.obj),T.userData.crown.scale.setScalar(.3);let O=Se.spider;for(let C of[...O.children])C.visible=!1;O.userData.legs=[],S=b.actor("Demon2"),S.obj.scale.setScalar(S.unit*3.3),S.obj.position.y=.9,O.add(S.obj)}{let T=new on,O=d(2759210,{emissive:1048584});Ut.push(O);let C=new Ke(U.sph,O);C.scale.set(2.2,1.7,2.6),C.position.set(0,1.5,-.9),T.add(C);let ne=new Ke(U.sph,O);ne.scale.set(1.2,1,1.1),ne.position.set(0,1.3,.8),T.add(ne);for(let me=0;me<6;me++){let K=new Ke(U.sph,Ht);K.position.set((me%3-1)*.28,1.55+Math.floor(me/3)*.2,1.3),K.scale.setScalar(.14),T.add(K)}let G=new Ke(U.sph,d(16726586,{emissive:6946816}));G.scale.set(.6,.6,.2),G.position.set(0,2.25,-1.4),G.rotation.x=-.9,T.add(G);let J=[];for(let me=0;me<8;me++){let K=me<4?-1:1,he=me%4,de=new on;de.position.set(K*.6,1.4,.6-he*.5);let ye=new Ke(U.cyl6,O);ye.scale.set(.16,1.6,.16),ye.position.set(K*.6,.45,0),ye.rotation.z=-K*1,de.add(ye);let Xe=new Ke(U.cyl6,O);Xe.scale.set(.12,1.8,.12),Xe.position.set(K*1.55,-.35,0),Xe.rotation.z=K*.5,de.add(Xe),de.rotation.y=K*(he-1.5)*.35,T.add(de),J.push(de)}T.userData={legs:J},Se.spider=T,kt.add(T)}{let T=new on,O=d(8011292),C=d(14725184,{emissive:3810304});Ut.push(O);let ne=new Ke(U.box,O);ne.scale.set(2.6,1.3,1.7),ne.position.y=.65,T.add(ne);let G=new Ke(U.box,C);G.scale.set(2.7,.2,1.8),G.position.y=1.2,T.add(G);let J=new It;J.position.set(0,1.3,-.85),T.add(J);let me=new Ke(U.box,O);me.scale.set(2.6,.6,1.7),me.position.set(0,.3,.85),J.add(me);let K=new Nn(U.cone,d(16774880),12);K.frustumCulled=!1;for(let ye=0;ye<12;ye++){let Xe=ye>=6;$.setFromEuler(oe.set(Xe?Math.PI:0,0,0)),K.setMatrixAt(ye,Y.compose(le.set(-1.05+ye%6*.42,Xe?1.15:1.45,.75),$,Fe.set(.22,.4,.22)))}T.add(K);let he=new Ke(U.sph,d(16730746));he.scale.set(.7,.25,1.4),he.position.set(0,1.35,.6),T.add(he);let de=a(new Xt({color:16769354}));for(let ye of[-1,1]){let Xe=new Ke(U.sph,de);Xe.position.set(ye*.6,.65,.75),Xe.scale.setScalar(.3),J.add(Xe)}T.userData={lidP:J},Se.mimic=T,kt.add(T)}let ce=new on;ce.visible=!1,n.add(ce);{let T=d(9062944),O=d(16761402,{emissive:6963200}),C=new Ke(U.box,T);C.scale.set(1.6,.9,1),C.position.y=.45,ce.add(C);let ne=new Ke(U.box,O);ne.scale.set(1.68,.16,1.08),ne.position.y=.8,ce.add(ne);let G=new It;G.position.set(0,.9,-.5),ce.add(G);let J=new Ke(U.box,T);J.scale.set(1.6,.36,1),J.position.set(0,.18,.5),G.add(J);let me=new Ke(U.box,O);me.scale.set(.3,.4,1.06),me.position.set(0,.18,.5),G.add(me);let K=new Ke(U.box,a(new Xt({color:16771488})));K.scale.set(1.4,.1,.8),K.position.y=.86,ce.add(K),ce.userData={lp:G}}let ae=24,ge=new Nn(U.box,d(16777215),ae);ge.frustumCulled=!1,ge.count=0;{let T=new Ie(1,1,1);for(let O=0;O<ae;O++)ge.setColorAt(O,T)}n.add(ge);let Te=[],te=new on;te.visible=!1,n.add(te);{let T=new Ke(U.cyl6,d(9075306));T.scale.set(.12,7,.12),T.position.y=-3.5,te.add(T);let O=new Ke(a(new li(1.6,1.6,.12,16,1,!1,0,Math.PI)),d(14212584,{emissive:2236979}));O.rotation.set(0,Math.PI/2,Math.PI/2),O.position.y=-7,te.add(O)}let ie=12,xe=new Nn(a(new $r(.22,1.3,5)),d(14217424,{emissive:2113568}),ie);xe.frustumCulled=!1,xe.count=0,n.add(xe);let N=[],se=40,ee=new Nn(a(new Ya(.86,1,36).rotateX(-Math.PI/2)),a(new Xt({color:16777215,transparent:!0,depthWrite:!1,blending:wi,side:Mn})),se);ee.frustumCulled=!1,ee.renderOrder=4;{let T=new Ie(0,0,0);for(let O=0;O<se;O++)ee.setColorAt(O,T)}n.add(ee);let ve=[];function be(T,O){let C=a(new qt),ne=new Float32Array(T*3),G=new Float32Array(T*4),J=new Float32Array(T);C.setAttribute("position",new pt(ne,3)),C.setAttribute("col",new pt(G,4)),C.setAttribute("size",new pt(J,1));let me=a(new zn({transparent:!0,depthWrite:!1,blending:O?wi:Fs,uniforms:{px:{value:400}},vertexShader:"attribute vec4 col; attribute float size; uniform float px; varying vec4 vC; void main(){ vC = col; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = min(size * px / max(0.5, -mv.z), 180.0); gl_Position = projectionMatrix * mv; }",fragmentShader:O?"varying vec4 vC; void main(){ float d = length(gl_PointCoord-0.5)*2.0; float a = pow(max(0.0, 1.0 - d), 2.0); gl_FragColor = vec4(vC.rgb * a * vC.a, 1.0); }":"varying vec4 vC; void main(){ vec2 p = gl_PointCoord-0.5; if (vC.a < 0.0) { if (abs(p.x) > 0.5 || abs(p.y) > 0.28) discard; gl_FragColor = vec4(vC.rgb, 1.0); } else { float d = length(p)*2.0; if (d > 1.0) discard; gl_FragColor = vec4(vC.rgb, vC.a * (1.0 - d*d)); } }"})),K=new Ps(C,me);return K.frustumCulled=!1,n.add(K),{geo:C,pos:ne,col:G,size:J,mat:me,pts:K,list:[],cap:T}}let ue=be(e.particles||900,!0),Oe=be(Math.round((e.particles||900)*.45),!1);ue.pts.renderOrder=9,Oe.pts.renderOrder=5;let ut=1,pe=new Ie;function Ee(T,O,C,ne,G,J){O=Math.max(1,Math.round(O*ut));for(let me=0;me<O&&T.list.length<T.cap-80;me++){let K=Math.random()*rn,he=(J.up??.5)+Math.random()*(J.spreadUp??.5),de=(J.speed||4)*(.4+Math.random()*.8);pe.set(J.colors?J.colors[Math.random()*J.colors.length|0]:J.color),T.list.push({x:C+(Math.random()-.5)*(J.jitter||0),y:ne+(Math.random()-.5)*(J.jy||0),z:G+(Math.random()-.5)*(J.jitter||0),vx:Math.cos(K)*de*(1-he*.6),vy:de*he*(J.vyMul??1),vz:Math.sin(K)*de*(1-he*.6),g:J.g??9,drag:J.drag??1.5,life:(J.life||.6)*(.7+Math.random()*.6),t:0,s0:J.size||.3,s1:J.size1??(J.size||.3)*.3,r:pe.r,gg:pe.g,b:pe.b,a:J.alpha??1,conf:!!J.confetti,spin:Math.random()*rn,floor:J.floorY??-1e9})}}function ct(T,O,C){let ne=T.list,G=0;for(let K=0;K<ne.length;K++){let he=ne[K];if(he.t+=O,he.t>=he.life)continue;he.vy-=he.g*O;let de=Math.exp(-he.drag*O);he.vx*=de,he.vy*=de,he.vz*=de,he.conf&&(he.spin+=O*6,he.vx+=Math.sin(he.spin)*O*2),he.x+=he.vx*O,he.y+=he.vy*O,he.z+=he.vz*O,he.y<he.floor+.05&&he.g>0&&(he.y=he.floor+.05,he.vy*=-.3,he.vx*=.7,he.vz*=.7),ne[G++]=he}ne.length=G;let J=0,me=(K,he,de,ye,Xe,Ki,Ii,it)=>{T.pos[J*3]=K,T.pos[J*3+1]=he,T.pos[J*3+2]=de,T.col[J*4]=ye,T.col[J*4+1]=Xe,T.col[J*4+2]=Ki,T.col[J*4+3]=Ii,T.size[J]=it,J++};if(C)for(let K of C)J<T.cap-1&&me(K[0],K[1],K[2],K[3],K[4],K[5],K[6],K[7]);for(let K of ne){if(J>=T.cap)break;let he=K.t/K.life,de=K.conf?1:1-he*he;me(K.x,K.y,K.z,K.r,K.gg,K.b,K.conf?-1:K.a*de,K.s0+(K.s1-K.s0)*he)}T.geo.setDrawRange(0,J);for(let K of["position","col","size"]){let he=T.geo.attributes[K];he.needsUpdate=!0,he.clearUpdateRanges?.(),he.addUpdateRange?.(0,J*he.itemSize)}}let Pe=a(new qt);{let O=new Float32Array(450);for(let C=0;C<150;C++)O.set([Math.random(),Math.random(),Math.random()],C*3);Pe.setAttribute("position",new pt(O,3))}let yt=new Ps(Pe,a(new zn({transparent:!0,depthWrite:!1,blending:wi,uniforms:{time:{value:0},base:{value:0},px:{value:300},tint:{value:new Ie(16767136)}},vertexShader:`uniform float time; uniform float base; uniform float px; varying float vA;
      void main(){ vec3 s = position; float t = time * (0.02 + s.x * 0.03); float fy = fract(s.y + t * 0.4);
        vec3 p = vec3((fract(s.x + sin(t + s.z * 6.0) * 0.05) - 0.5) * 18.0, base + fy * 8.5, (fract(s.z + cos(t * 0.7 + s.x * 5.0) * 0.05) - 0.5) * 16.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vA = (0.4 + 0.6 * (0.5 + 0.5 * sin(time * 1.5 + s.x * 40.0))) * smoothstep(0.0, 0.15, fy) * smoothstep(1.0, 0.8, fy);
        vA *= smoothstep(2.5, 7.0, -mv.z); gl_PointSize = min((0.07 + s.z * 0.1) * px / max(1.0, -mv.z), 14.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 tint; varying float vA; void main(){ float d = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(tint * vA * max(0.0, 1.0-d) * 0.55, 1.0); }"})));yt.frustumCulled=!1,yt.renderOrder=3,n.add(yt);let Et=new Map,Tn=new Map,Po=new Ie(1,1,1),Ci=new Ie,Xi=new Ie,gi={particles:1,halos:!0,maxChars:Gt},_s=0,ln=0,bi=-9,Hs=-9,Vs=0,Jn=0,Le=0,Pi=null,ni=new B(0,10,20),ji=new B(0,2.6,-2.4),Yn=new B,ii=new B,Xc=new Ie(2754054),_a=new Ie(1708080),va=new Ie,ya=new Ie(16757611),E=new Ie,P={kind:"",t0:0,hitT:-9,atkT:-9,dieT:-9,x:0,z:-4},Z=-9,q=0,j=-9,we=[],ze=T=>(T=T^61^T>>>16,T=T+(T<<3)|0,T^=T>>>4,T=Math.imul(T,668265261),(T^T>>>15)>>>0),_e=0,Ae=new B;function qe(T,O,C,ne,G,J){let me=0,K=0,he=0,de=0,ye=gi.animLod||1,Xe=T.length>24,Ki=J.phase==="monster"||J.phase==="boss",Ii=J.phase==="treasure"||J.phase==="victory";for(let it of T){let ot=st(it,O);ot.seen=O,ot.frame=_e;let Ji=Math.hypot(it.x-ot.x,it.z-ot.z)/Math.max(C,.001);ot.speed=(ot.speed||0)+(Math.min(Ji,10)-(ot.speed||0))*Math.min(1,C*8),ot.x=it.x,ot.y=it.y,ot.z=it.z;let Zt=it.info||{};ot.a||(ot.model=ot.model||yo[ze(it.id)%yo.length],ot.a=h.actor(ot.model,it.flags&jt.bot?null:Zt.color??null),n.add(ot.a.obj),ot.acc=0);let hn=ot.a,qn=Math.min(1,(O-ot.spawn)/.35),Li=it.flags&2048;hn.obj.position.set(it.x,Le+it.y,it.z),hn.obj.rotation.set(0,it.face,0),hn.obj.scale.setScalar(ed*(.4+.6*qn));let Re=Li||ot.speed>2.4?"run":ot.speed>.4?"walk":it.flags&jt.cmd||Ii?"cheer":Ki?"combat":"idle";hn.play(Re,O),O-ot.hit<.05&&O>=hn.until&&hn.play(ot.model==="Mage"?"cast":ot.model.startsWith("Rogue")?"shoot":"slash",O,{speed:1.4}),ot.acc+=C;let Ne=(Xe||Math.hypot(it.x,it.z-2)>7?2:1)*ye;(_e+it.id)%Ne===0&&($u(h,hn,ot.acc,O),ot.acc=0),hn.hand?hn.hand.getWorldPosition(Ae):Ae.set(it.x+.3,Le+it.y+.5,it.z+.3),fe.compose(le.set(Ae.x,Ae.y-.28,Ae.z),$.setFromEuler(oe.set(Math.sin(O*2+it.id)*.15,it.face,0)),Fe.set(.75,.75,.75)),gt.lantern.setMatrixAt(me,fe),fe.compose(le.set(it.x,Le+it.y+.02,it.z),$.identity(),Fe.set(1.1,1,1.1)),gt.shadow.setMatrixAt(me,fe),(gi.halos||me<16)&&ne.push([Ae.x,Ae.y-.3,Ae.z,1,.7,.3,(.35+.65*G)*(it.flags&jt.gift?1.7:1),1.5+1.5*G]),we.push({id:it.id,x:it.x,y:Le+it.y+1.75*ed*qn+.2,z:it.z,info:Zt,flags:it.flags}),it.y<.5&&(K+=it.x,he+=it.z,de++),me++}for(let it of Et.values())it.a&&it.frame!==_e&&(h.release(it.a),it.a=null);return{n:me,cx:K,cz:he,cn:de}}function st(T,O){let C=Et.get(T.id);return C||(C={walk:Math.random()*10,hit:-9,spawn:O,skin:Vp[T.id%Vp.length],x:T.x,y:T.y,z:T.z,seen:O},Et.set(T.id,C)),C}let ft=(T,O)=>T&&T.doors[O]?T.doors[O].x:0;function Ve(T,O,C){Pi=T,_s=C,_e++;let ne=qp(T.th);Jn=T.floor,Le=Jn*Rt;let G=at(Jn,T.th,T.nd||0);G.born||(G.born=C);let J=null;T.phase==="climb"&&T.nth>-9&&(J=at(Jn+(T.lift?2:1),T.nth,0));for(let[W,H]of Q)H!==G&&H!==J&&!(W<Jn&&W>=Jn-2&&C-G.born<2.5)&&(Ce(H),Q.delete(W));let me=T.phase==="vote"||T.phase==="enter";for(let W=0;W<G.doors.length;W++){let H=G.doors[W];H.open+=((!me&&T.ch===W?1.75:0)-H.open)*Math.min(1,O*5),H.pivot.rotation.y=-H.open;let ht=T.kinds?T.kinds[W]:"",Yt=0,fn=0;if(ht&&!me&&(T.ch===W||T.phase!=="reveal"))Yt=Wp[ht],fn=T.ch===W?.95:.3;else if(T.pr===W&&T.phase==="vote")Yt=11566335,fn=.6+.35*Math.sin(C*6);else if(T.phase==="vote"&&T.vc){let tn=T.vc.reduce((Pn,Vt)=>Pn+Vt,0)||1;Yt=16757611,fn=.1+.5*(T.vc[W]||0)/tn}H.glow.material.color.setHex(Yt).multiplyScalar(fn);let Zn=T.phase==="vote"?1+.07*Math.sin(C*5+W*2):1;H.plaque.scale.set(1.25*Zn,1.25*Zn,1)}for(let W of Q.values())for(let H of W.anim)H(C);let K=Math.max(0,Math.min(100,T.fuel??100))/100;va.setHex(ne.fog).multiplyScalar(.55+.45*K),(T.phase==="monster"||T.phase==="boss")&&va.lerp(Xc,T.phase==="boss"?.55:.4),_a.lerp(va,Math.min(1,O*1.5)),n.fog.color.copy(_a),n.background.copy(_a).multiplyScalar(.6),n.fog.far=26+20*K,n.fog.near=7+7*K,E.setHex(ne.light),ya.lerp(E,Math.min(1,O*2));let he=.82+.1*Math.sin(C*13.1)+.06*Math.sin(C*7.3+1.7)+.05*Math.sin(C*23.7);c.color.copy(ya),c.intensity=(18+26*K)*he*(C-bi<.15?2.5:1),c.position.set(0,Le+4.2,1.5),u.position.set(3,Le+12,14),u.target.position.set(0,Le,0),u.intensity=.55+.6*K;let de=C-Hs<.12||C-Hs>.22&&C-Hs<.3;o.intensity=.6+.7*K+(de?2.2:0),G.extra.win&&Math.random()<O/9&&(Hs=C,Vs=C+.45);for(let W of Q.values())W.extra.win&&W.extra.win.material.color.setHex(de?16777215:5925540);let ye=T.pd>0?1-Math.max(0,Math.min(1,T.tl/T.pd)):1;if(T.phase==="climb"){let W=T.lift?2:1,H=Math.max(0,Math.min(1,(ye-.15)/.8)),ht=H*H*(3-2*H)*Rt*W;Yn.set(Nt.x-9+Math.sin(H*Math.PI)*2.6,Le+6.2+ht,12.5-Math.sin(H*Math.PI)*3),ii.set(Nt.x-1.2,Le+2.6+ht,Nt.z)}else if(T.phase==="reveal"&&T.ch>=0){let W=ft(G,T.ch),H=ye*ye*(3-2*ye);Yn.set(W*.5,Le+5.6,12.5-H*3.2),ii.set(W*.85,Le+1.8,Tt)}else if((T.phase==="treasure"||T.phase==="trap")&&T.ch>=0){let W=ft(G,T.ch);Yn.set(W*.35,Le+6.4,13.8),ii.set(W*.6,Le+1.8,-4.2)}else if(T.phase==="monster"||T.phase==="boss"){let W=T.phase==="boss";Yn.set(Math.sin(C*.25)*1.4,Le+(W?8.8:7.4),W?18.2:17),ii.set(0,Le+(W?3.9:2.7),-3)}else if(T.phase==="end"){let W=C*.18;Yn.set(Math.sin(W)*7,Le+4.4,3+Math.cos(W)*7),ii.set(0,Le+1.5,2.4)}else if(T.phase==="vote"){let W=0,H=0;(T.vc||[]).forEach((Yt,fn)=>{Yt>H&&(H=Yt,W=fn)});let ht=H?ft(G,W)*.25:0;Yn.set(ht*.4,Le+7.6,17.4),ii.set(ht*.6,Le+2.4,-3.4)}else{let W=C*.12;Yn.set(Math.sin(W)*1.6,Le+6.9+Math.sin(W*.7)*.6,17),ii.set(0,Le+1.9,-2.2)}let Xe=Math.min(1,O*(T.phase==="climb"?3.2:2.2));ni.distanceTo(Yn)>30&&(ni.copy(Yn),ji.copy(ii)),ni.lerp(Yn,Xe),ji.lerp(ii,Xe),ln=Math.max(0,ln-O*2.2);let Ki=(Math.random()-.5)*ln*.5,Ii=(Math.random()-.5)*ln*.5;i.position.set(ni.x+Ki+Math.sin(C*.4)*.15,ni.y+Ii+Math.sin(C*.55)*.08,ni.z),i.lookAt(ji.x+Ki,ji.y+Ii,ji.z);let it=Le+1+Math.sin(C*1.3)*.18;T.phase==="climb"?Qt.set(-4.6,ji.y-1.6,-3.6):T.phase==="monster"||T.phase==="boss"?Qt.set(-5,it+1.2,.2):["reveal","treasure","trap"].includes(T.phase)?Qt.set(-6.4,it+2.4,-5.2):Qt.set(-4.7,it+.9,-1.4),We.position.lerp(Qt,Math.min(1,O*3)),We.quaternion.copy(i.quaternion),At+=((Ct?1:0)-At)*Math.min(1,O*6),mt=Math.min(1,mt+O*1.5),Kt.uniforms.time.value=C,Kt.uniforms.talk.value=At,Kt.uniforms.op.value=mt;let ot=[];for(let W of[G,J])if(W)for(let H of W.flames){let ht=.7+.3*Math.sin(C*(9+H[0])+H[2]);ot.push([H[0],W.fi*Rt+H[1],H[2],1,.62*ht,.25*ht,(.5+.5*K)*ht,1.5]),ot.push([H[0],W.fi*Rt+H[1]-.05,H[2],1,.9,.6,1,.35])}if(G.extra.brew){let W=G.extra.brew;ot.push([W[0],Le+W[1],W[2],.3,1,.35,.7+.2*Math.sin(C*4),5]),Math.random()<O*6&&Ee(ue,1,W[0]+(Math.random()-.5),Le+1.5,W[2]+(Math.random()-.5),{color:8257386,up:1,speed:1.2,g:-1,life:1.2,size:.4})}if(G.extra.chand)for(let W of G.extra.chand)ot.push([W[0],Le+W[1]-.2,W[2],1,.8,.45,.8,4]);ot.push([We.position.x,We.position.y+.2,We.position.z-.3,.6,.35,1,.4+At*.45,7]),we.length=0;let Ji=T.members.length>Math.min(Gt,gi.maxChars||Gt)?T.members.slice(0,Math.min(Gt,gi.maxChars||Gt)):T.members,Zt=0,hn=0,qn=0,Li=0,Re=(W,H,ht,Yt,fn,Zn,tn,Pn,Vt=0,Yi=0,Di=null)=>{fe.compose(le.set(ht,Yt,fn),$.setFromEuler(oe.set(Vt,0,Yi)),Fe.set(Zn,tn,Pn)),Y.multiplyMatrices(tt,fe),W.setMatrixAt(H,Y),Di&&W.setColorAt(H,Di)};if(h){let W=qe(Ji,C,O,ot,K,T);Zt=W.n,hn=W.cx,qn=W.cz,Li=W.cn}else for(let W of Ji){let H=st(W,C);H.seen=C;let ht=Math.hypot(W.x-H.x,W.z-H.z)/Math.max(O,.001);H.x=W.x,H.y=W.y,H.z=W.z;let Yt=ht>.4||W.flags&2048;H.walk+=O*(Yt?11:0);let fn=Math.max(0,1-(C-H.hit)/.35),Zn=Math.min(1,(C-H.spawn)/.35),tn=(.3+.7*Zn)*(1+.15*Math.sin(Zn*Math.PI)),Pn=Le+W.y+(Yt?Math.abs(Math.sin(H.walk))*.12:0)+(W.flags&jt.cmd?Math.abs(Math.sin(C*12))*.18:0);tt.compose(le.set(W.x,Pn,W.z),$.setFromEuler(oe.set(0,W.face,0)),Fe.set(tn,tn,tn));let Vt=W.info||{};Ci.setHex(Vt.color??16777215);let Yi=fn>0?Xi.copy(Ci).lerp(Po,fn):Ci,Di=Yt?Math.sin(H.walk):0;Re(gt.body,Zt,0,.52,0,1,1,1,0,0,Yi),Xi.setHex(H.skin),Re(gt.head,Zt,0,1.06,0,1,1,1,0,0,Xi),Xi.copy(Ci).multiplyScalar(.55),Re(gt.hair,Zt,0,1.1,-.02,1,1,1,-.15,0,Xi);let md=(C+W.id*.37)%4.2<.12?.15:1;Re(gt.eyes,Zt*2,-.13,1.08,.31,1,md,1),Re(gt.eyes,Zt*2+1,.13,1.08,.31,1,md,1),Re(gt.hands,Zt*2,-.36,.5+Di*.05,Di*.12,1,1,1,0,0,Ci),Re(gt.hands,Zt*2+1,.34,.66,.26,1,1,1,0,0,Ci),Re(gt.lantern,Zt,.36,.42+Math.sin(C*3+W.id)*.02,.32,1,1,1,Math.sin(C*2+W.id)*.15,0),Re(gt.feet,Zt*2,-.13,.08,Di*.18,1,1,1),Re(gt.feet,Zt*2+1,.13,.08,-Di*.18,1,1,1),fe.compose(le.set(W.x,Le+W.y+.02,W.z),$.identity(),Fe.set(1.1,1,1.1)),gt.shadow.setMatrixAt(Zt,fe),le.set(.36,.45,.32).applyMatrix4(tt),(gi.halos||Zt<16)&&ot.push([le.x,le.y,le.z,1,.7,.3,(.35+.65*K)*(W.flags&jt.gift?1.7:1),1.5+1.5*K]),we.push({id:W.id,x:W.x,y:Pn+1.55*tn,z:W.z,info:Vt,flags:W.flags}),W.y<.5&&(hn+=W.x,qn+=W.z,Li++),Zt++}for(let W of Object.keys(gt)){let H=gt[W];if(h&&W!=="lantern"&&W!=="shadow"){H.count=0;continue}H.count=W==="eyes"||W==="hands"||W==="feet"?Zt*2:Zt,H.instanceMatrix.needsUpdate=!0,H.instanceColor&&(H.instanceColor.needsUpdate=!0)}let Ne=0;for(let W of T.ghosts||[]){if(Ne>=Wn)break;let H=Tn.get(W.id);if(!H){let tn=Et.get(W.id);H={x:tn?tn.x:(Math.random()-.5)*6,z:tn?tn.z:5,born:C-2,ph:Math.random()*rn},Tn.set(W.id,H)}H.seen=C;let ht=-6+Ne%8*1.7,Yt=6.6+Math.floor(Ne/8)*1.3;H.x+=(ht-H.x)*Math.min(1,O*.8),H.z+=(Yt-H.z)*Math.min(1,O*.8);let fn=Math.min(1,(C-H.born)/1.5),Zn=Le+.6+fn*1.6+Math.sin(C*1.7+H.ph)*.25;if(h){if(!H.a){let tn=Et.get(W.id);H.a=h.actor(tn?.model||yo[ze(W.id)%yo.length],"ghost"),H.a.play("idle",C),n.add(H.a.obj)}H.a.obj.position.set(H.x,Zn-.8,H.z),H.a.obj.rotation.set(0,Math.sin(C+H.ph)*.4,Math.sin(C*1.3+H.ph)*.1),H.a.obj.scale.setScalar(ed*.9*(.4+.6*fn)),H.acc=(H.acc||0)+O,(_e+W.id)%3===0&&($u(h,H.a,H.acc,C),H.acc=0),H.drawnAt=_e}else{tt.compose(le.set(H.x,Zn,H.z),$.setFromEuler(oe.set(0,Math.sin(C+H.ph)*.4,Math.sin(C*1.3+H.ph)*.12)),Fe.set(.7,.7,.7)),Jt.setMatrixAt(Ne,tt);for(let tn of[0,1])fe.compose(le.set(tn?.13:-.13,.72,.4),$.identity(),Fe.set(1,1.3,1)),Y.multiplyMatrices(tt,fe),gn.setMatrixAt(Ne*2+tn,Y)}we.push({id:W.id,x:H.x,y:Zn+.9,z:H.z,info:W.info||{},flags:W.flags,ghost:!0}),Ne++}if(h){Ne=0;for(let[W,H]of Tn)H.a&&H.drawnAt!==_e&&(h.release(H.a),H.a=null)}if(Jt.count=Ne,gn.count=Ne*2,Jt.instanceMatrix.needsUpdate=!0,gn.instanceMatrix.needsUpdate=!0,Math.random()<.02){for(let[W,H]of Tn)C-H.seen>3&&(H.a&&h.release(H.a),Tn.delete(W));for(let[W,H]of Et)C-H.seen>5&&(H.a&&h.release(H.a),Et.delete(W))}let et=(T.sh||0)>0,Ue=un.material.uniforms;if(Ue.a.value+=((et?["trap","monster","boss"].includes(T.phase)?.75:.4:0)-Ue.a.value)*Math.min(1,O*3),Ue.time.value=C,un.visible=Ue.a.value>.02,Li){un.position.set(hn/Li,Le,qn/Li);let W=1.7+Math.sqrt(Li)*.62;un.scale.set(W,W*.62,W*.75)}let Be=T.mo;if(Be&&(T.phase==="monster"||T.phase==="boss")){(P.kind!==Be.k||!kt.visible||P.dieT>0)&&(P={kind:Be.k,t0:C,hitT:-9,atkT:-9,dieT:-9,x:T.ch>=0?ft(G,T.ch):0,z:Tt+.5});let W=Be.k==="boss"?"ghost":Be.k,H=Be.k==="boss";for(let Vt of Object.keys(Se))Se[Vt].visible=Vt===W;kt.visible=!0;let ht=Se[W],Yt=Math.min(1,(C-P.t0)/1.2);P.x+=(0-P.x)*Math.min(1,O*2),P.z+=((H?-3.8:-3.4)-P.z)*Math.min(1,O*2);let fn=Math.max(0,1-(C-P.atkT)/.6),Zn=Math.sin(Math.min(1,(C-P.atkT)/.6)*Math.PI)*1.6,tn=Math.max(0,1-(C-P.hitT)/.18),Pn=(H?1.75:1.15)*(.2+.8*Yt)*(1+tn*.06+fn*.08);if(kt.position.set(P.x+(tn>0?(Math.random()-.5)*.15:0),Le+(W==="ghost"?(Je?.25:.4)+Math.sin(C*1.8)*(Je?.15:.3):0),P.z+Zn*(Je&&W==="ghost"?.4:1)),kt.scale.setScalar(Pn),kt.rotation.set(0,Math.sin(C*.8)*.15,W==="ghost"?Math.sin(C*1.3)*.06:0),W==="ghost"&&Je){let Vt=H?R:Je;Je.obj.visible=!H,R.obj.visible=H,ht.userData.crown.position.set(.05,3.32,.15),ht.userData.crown.visible=H,Yt<1&&Vt.state!=="roar"?Vt.play("roar",C):Vt.until||Vt.play("combat",C),C-P.atkT<.05?Vt.play(H?Be.slam?"spin":"slash":"attack",C,{speed:1.25}):C-P.hitT<.03&&C>=Vt.until?Vt.play("hit",C,{speed:1.6}):!Vt.until&&Math.random()<O*.25&&Vt.play("taunt",C),Vt.tick(O,C);let Yi=.75+.25*Math.sin(C*6);if(H)ot.push([P.x,Le+3*Pn,P.z+.9,1,.1,.03,Yi*.75,2.6]);else for(let Di of[-.36,.36])ot.push([P.x+Di*Pn,Le+an*Pn,P.z+Ze*Pn,1,.08,.02,Yi,.9]),ot.push([P.x+Di*Pn,Le+an*Pn,P.z+(Ze+.05)*Pn,1,.6,.3,Yi,.28])}else if(W==="ghost"){let Vt=ht.userData;Vt.crown.visible=H,z.color.setHex(H?13285631:15265023),z.emissive.setHex(tn>0?16777215:H?3807850:2763360),Vt.mouth.scale.set(.5,.42+fn*.5+Math.sin(C*5)*.06,.2)}W==="spider"&&ht.userData.legs.forEach((Vt,Yi)=>{Vt.rotation.x=Math.sin(C*10+Yi*1.3)*.25*(1+fn)}),W==="spider"&&S&&(C-P.atkT<.05?S.play("bite",C,{speed:1.3}):C-P.hitT<.03&&C>=S.until?S.play("hit",C):S.until||S.play(fn>0?"move":"combat",C),S.tick(O,C),ot.push([P.x,Le+2.9*Pn,P.z+.8,1,.1,.03,.6,1.6])),Math.random()<O*(H?22:12)&&Ee(ue,1,P.x+(Math.random()-.5)*9,Le+.2,P.z+Math.random()*6,{colors:[16738848,16723984,16752704],up:1.2,speed:.7,g:-.8,life:2.4,size:.14}),W==="mimic"&&(ht.userData.lidP.rotation.x=-.35-Math.abs(Math.sin(C*4))*.5-fn*.6);for(let Vt of Ut)Vt.emissive.setHex(tn>0?8947848:1048584);ot.push([P.x,Le+2.2*Pn,P.z+.5,H?.6:.3,H?.3:1,H?1:.4,.35,H?14:8])}else kt.visible&&(P.dieT<0&&(P.dieT=C),kt.scale.multiplyScalar(Math.max(.01,1-O*4)),kt.rotation.y+=O*8,C-P.dieT>.5&&(kt.visible=!1));if(T.phase==="treasure"||T.phase==="climb"&&C-Z<3){ce.visible||(ce.visible=!0,Z=C,q=ft(G,T.ch));let W=C-Z,H=Math.min(1,W/1);ce.position.set(q*(1-H),Le+Math.sin(H*Math.PI)*1.2,Tt+2.4+H*3.2),ce.scale.setScalar(1.3),ce.userData.lp.rotation.x=W>1.1?-Math.min(1.9,(W-1.1)*5):0,W>1.1&&W<3.4&&Math.random()<.7&&Ee(ue,2,ce.position.x,ce.position.y+1.2,ce.position.z,{colors:[16765773,16773792,16752672],up:1.2,speed:6,g:9,life:1.1,size:.35,floorY:Le}),ot.push([ce.position.x,ce.position.y+1.3,ce.position.z,1,.8,.3,W>1.1?.9:.2,7])}else ce.visible=!1;if(C-j<2.2){te.visible=!0;let W=(C-j)/2.2;te.position.set(0,Le+Rt-.5,2.6),te.rotation.z=Math.cos(W*Math.PI*2.5)*1.15*(1-W*.3)}else te.visible=!1;let $e=0;for(let W=Te.length-1;W>=0;W--){let H=Te[W],ht=C-H.t0;if(ht>H.life){Te.splice(W,1);continue}ht<0||(H.vy-=22*O,H.y+=H.vy*O,H.rx+=O*H.spin,H.y<Le+H.s*.18&&(H.landed||(H.landed=!0,Ee(Oe,4,H.x,Le+.3,H.z,{color:9075306,up:.4,speed:3,life:.6,size:.4,alpha:.8,floorY:Le})),H.y=Le+H.s*.18,H.vy=0,H.spin=0),$e<ae&&($.setFromEuler(oe.set(H.rx,H.ry,0)),ge.setMatrixAt($e,Y.compose(le.set(H.x,H.y,H.z),$,Fe.set(H.s*H.sx,H.s*.35,H.s))),ge.setColorAt($e,Xi.setHex(H.col)),$e++))}ge.count=$e,ge.instanceMatrix.needsUpdate=!0,ge.instanceColor&&(ge.instanceColor.needsUpdate=!0);let Bt=0;for(let W=N.length-1;W>=0;W--){let H=N[W],ht=C-H.t0;if(ht>1.6){N.splice(W,1);continue}let Yt=Math.sin(Math.max(0,Math.min(1,ht/1.6))*Math.PI);Bt<ie&&($.setFromEuler(oe.set(Math.sin(ht*8+W)*.2,0,Math.sin(ht*6+W)*.25)),xe.setMatrixAt(Bt++,Y.compose(le.set(H.x,Le-.6+Yt*1.2,H.z),$,Fe.set(1,1,1))))}xe.count=Bt,xe.instanceMatrix.needsUpdate=!0;let dn=0;for(let W=ve.length-1;W>=0;W--){let H=ve[W],ht=(C-H.t0)/H.dur;if(ht>=1){ve.splice(W,1);continue}if(ht<0)continue;let Yt=H.r0+(H.r1-H.r0)*(1-(1-ht)*(1-ht));dn<se&&(ee.setMatrixAt(dn,Y.compose(le.set(H.x,H.y,H.z),$.identity(),Fe.set(Yt,1,Yt))),ee.setColorAt(dn,Xi.copy(H.col).multiplyScalar(1-ht)),dn++)}ee.count=dn,ee.instanceMatrix.needsUpdate=!0,ee.instanceColor&&(ee.instanceColor.needsUpdate=!0),yt.material.uniforms.time.value=C,yt.material.uniforms.base.value=ji.y-2.5,yt.material.uniforms.tint.value.setHex(ne.light),yt.visible=gi.particles>.4,ct(ue,O,gi.halos?ot:ot.slice(0,24)),ct(Oe,O,null),t.render(n,i)}let bt=T=>{let O=Et.get(T);return O?{x:O.x,y:Le+O.y,z:O.z}:null},Ot=(T,O,C,ne,G,J,me=.1)=>ve.push({x:T,y:Le+me,z:O,t0:_s,dur:C,r0:ne,r1:G,col:new Ie(J)}),Lt=[16739029,16769354,6222079,10182117,8257402];function Dt(T,O){let C=_s,ne=Q.get(Jn);switch(T.k){case"hit":{P.hitT=C;let G=Et.get(T.id);G&&(G.hit=C);let J=Pi&&Pi.mo&&Pi.mo.b;Ee(ue,T.c?10:4,P.x+(Math.random()-.5)*1.5,Le+(J?3.4:2)+(Math.random()-.5),P.z+1,{colors:T.c?[16769354,16777215]:[16757611,16777215,16739029],up:.6,speed:T.c?7:4,life:.4,size:T.c?.5:.35}),T.c&&(ln=Math.max(ln,.4));break}case"matk":P.atkT=C,ln=Math.max(ln,T.boss?1:.6),Ot(P.x,P.z+2,.7,1,T.boss?9:6,T.boss?11566335:6160250),T.slam&&(bi=C,Ee(Oe,20,P.x,Le+.3,P.z+2,{color:6969978,up:.4,speed:7,life:.8,size:.5,alpha:.7,floorY:Le}));break;case"fall":{let G=bt(T.id);if(!G)break;Ee(Oe,14,G.x,G.y+.6,G.z,{colors:[5913210,3811930,9071272],up:.6,speed:3,g:-1,life:1.1,size:.7,alpha:.85}),Ee(ue,10,G.x,G.y+.8,G.z,{colors:[11566335,16777215],up:1,speed:3,g:-2,life:.9,size:.35}),Tn.set(T.id,{x:G.x,z:G.z,born:C,ph:Math.random()*rn});break}case"rise":{let G=Tn.get(T.id),J=G?G.x:0,me=G?G.z:4;Tn.delete(T.id),Ee(ue,18,J,Le+1,me,{colors:[16771488,16777215,10477823],up:1.2,speed:4,g:1,life:1,size:.4}),Ot(J,me,.8,.3,2.6,16771488);let K=Et.get(T.id);K&&(K.spawn=C);break}case"join":{let G=Et.get(T.id);G&&(G.spawn=C);break}case"reveal":ne&&ne.doors[T.door]&&Ee(ue,26,ne.doors[T.door].x,Le+2,Tt+.6,{color:Wp[T.kinds[T.door]]||16777215,up:.3,speed:6,g:0,drag:2.5,life:.9,size:.6,jy:3});break;case"prophecy":case"gift":{let G=T.id?bt(T.id):null;G&&Ee(ue,T.tier==="boss"||T.tier==="skip"?40:16,G.x,G.y+1,G.z,{colors:[16769354,16739029,10477823,16777215],up:1.2,speed:5,g:2,life:1.1,size:.4});let J=T.door??-1;J>=0&&ne&&ne.doors[J]&&Ee(ue,30,ne.doors[J].x,Le+2.4,Tt+.8,{colors:[11566335,16771488],up:.2,speed:3,g:-.5,life:1.4,size:.5,jy:3,jitter:1.6}),T.tier==="shield"&&Ot(0,2.5,.9,1,8,5949695,.15),(T.tier==="boss"||T.tier==="rescue")&&(bi=C);break}case"treasure":Z=C,ce.visible=!1;break;case"trap":case"mlose":{let G=T.k==="mlose"?"hands":T.trap;ln=Math.max(ln,.8),bi=C;let J=(T.fell||[]).concat(T.saved||[]).map(bt).filter(Boolean);if(T.blocked){Ot(0,2.6,.9,2,9,5949695,.2),Ee(ue,40,0,Le+3,2.6,{colors:[5949695,16777215],up:.6,speed:7,g:1,life:.8,size:.4});break}let me=J.length?J:[{x:0,z:2.5}];if(G==="books"||G==="chandelier"||G==="web"){let K=G==="books"?[9054778,2775690,3832378,9071146,6961802]:G==="web"?[15658734]:[14266442];for(let he of me)for(let de=0;de<(G==="books"?3:1);de++)Te.push({x:he.x+(Math.random()-.5)*.6,z:he.z+(Math.random()-.5)*.6,y:Le+Rt-1,vy:0,t0:C+de*.12+Math.random()*.2,life:2.6,s:G==="books"?.7:G==="web"?1.6:1.4,sx:G==="web"?1:1.4,rx:0,ry:Math.random()*rn,spin:6,col:K[Math.random()*K.length|0]});if(G==="chandelier")for(let he of me)Ee(ue,16,he.x,Le+.5,he.z,{colors:[16765773,16777215],up:.6,speed:6,life:.6,size:.3,floorY:Le})}else if(G==="hands")for(let K of me){for(let he=0;he<3;he++)N.push({x:K.x+Math.cos(he*2.1)*.45,z:K.z+Math.sin(he*2.1)*.45,t0:C+he*.05});Ot(K.x,K.z,1.2,.4,1.4,6160250,.08)}else if(G==="shards"){for(let K of me)Ee(ue,18,K.x,Le+2,K.z,{colors:[14213375,10477823,16777215],up:.2,speed:8,g:12,life:.9,size:.3,floorY:Le});Ee(ue,30,0,Le+3,Tt+1,{colors:[14213375,16777215],up:.3,speed:10,g:10,life:.9,size:.35,floorY:Le})}else if(G==="pendulum")j=C;else if(G==="gas")for(let K=0;K<6;K++)Ee(Oe,6,(Math.random()-.5)*8,Le+.5,2+(Math.random()-.5)*5,{colors:[5963642,2793546,9109402],up:.5,speed:1.6,g:-.6,life:2.2,size:2.2,alpha:.45});break}case"monster":P.t0=C,P.dieT=-9,T.boss&&(bi=C,ln=1.2),ne&&O&&O.ch>=0&&ne.doors[O.ch]&&Ee(Oe,20,ne.doors[O.ch].x,Le+1,Tt+1,{colors:[2759226,4864602],up:.5,speed:4,life:1,size:1,alpha:.8});break;case"mwin":if(bi=C,ln=Math.max(ln,T.boss?1.4:.8),Ee(ue,T.boss?90:50,P.x,Le+2,P.z+.5,{colors:[16777215,11566335,16769354,6160250],up:.8,speed:T.boss?11:8,g:3,life:1.3,size:.5}),Ot(P.x,P.z,1,1,12,16771488,.2),T.boss)for(let G=0;G<5;G++)Ee(Oe,26,(Math.random()-.5)*6,Le+5,1+Math.random()*3,{colors:Lt,up:.6,speed:5,g:4,drag:1.2,life:3,size:.3,confetti:!0,floorY:Le});break;case"rwin":{let G=bt(T.id);G&&(Ee(ue,30,G.x,G.y+1.2,G.z,{colors:[16769354,16777215,11566335],up:1,speed:6,g:3,life:1.2,size:.45}),Ot(G.x,G.z,.8,.3,3.5,16769354));break}case"blaze":bi=C;for(let G of Et.values())_s-G.seen<1&&Ee(ue,2,G.x,Le+G.y+.6,G.z,{colors:[16757611,16771488],up:1.4,speed:3,g:-1,life:.9,size:.5});break;case"climb":if(T.lift)for(let G=0;G<4;G++)Ee(ue,20,Nt.x,Le+.5+G,Nt.z,{colors:[11566335,16771488,6222079],up:1,speed:3,g:-3,life:2,size:.45,jitter:3});break;case"floor":mt=0,Ee(ue,30,-6.1,T.n*Rt+2,-4.9,{colors:[11566335,16777215],up:.4,speed:4,g:0,drag:2,life:1.1,size:.5,jy:3});break;case"end":if(T.reason==="top")for(let G=0;G<6;G++)Ee(Oe,30,(Math.random()-.5)*8,Le+6,2+Math.random()*3,{colors:Lt,up:.5,speed:5,g:4,drag:1.2,life:3.5,size:.3,confetti:!0,floorY:Le});break}}let bn=390,He=844,cn=new B,St=(T,O,C)=>(cn.set(T,O,C).project(i),{x:(cn.x*.5+.5)*bn,y:(-cn.y*.5+.5)*He,vis:cn.z<1&&cn.z>-1});return{kind:"webgl",renderer:t,ready:_,scene:n,get loaded(){return!!h},get error(){return f},resize(T,O,C){bn=T,He=O,t.setPixelRatio(C),t.setSize(T,O,!1),i.aspect=T/O,i.fov=T/O<.7?50:42,i.updateProjectionMatrix(),ue.mat.uniforms.px.value=Oe.mat.uniforms.px.value=O*C*.9,yt.material.uniforms.px.value=O*C*.5},setQuality(T){gi=T,ut=T.particles},frame:Ve,fx:Dt,project:St,speaking(T){Ct=T},doorTop(T){let O=Q.get(Jn);return!O||!O.doors[T]?null:St(O.doors[T].x,Le+(O.doors[T].top||5.95),Tt+.4)},monsterTop(){return!kt.visible||P.dieT>0?null:St(P.x,Le+(Pi&&Pi.mo&&Pi.mo.b?6.6:3.9),P.z)},miraTop(){return St(We.position.x,We.position.y+2.2,We.position.z)},drawn:()=>we,thunder(){return Vs&&_s>=Vs?(Vs=0,!0):!1},stats(){let T=t.info;return{calls:T.render.calls,tris:T.render.triangles,tex:T.memory.textures,geo:T.memory.geometries,chars:h?[...Et.values()].filter(O=>O.a).length:gt.body.count,ghosts:[...Tn.values()].filter(O=>O.a).length,loaded:!!h,parts:ue.list.length+Oe.list.length,rooms:Q.size}},dispose(){g=!0;for(let T of Q.values())Ce(T);Q.clear(),n.traverse(T=>{T.isInstancedMesh&&T.dispose()});for(let T of r)T.dispose?.();m&&m.dispose(),h&&h.dispose(),b&&b.dispose(),t.dispose()},loseContext(){try{t.forceContextLoss()}catch{}}}}var Fc=s=>"#"+(s>>>0).toString(16).padStart(6,"0");function jp(s,e={}){let t=s.getContext("2d"),n=390,i=844,r=1,a=0,o=0,l=null,c=-9,u=[],p=f=>n/2+f*n/17,d=(f,_)=>i*.5+(_-1)*i*.022-f*i*.03,h=(f,_,M)=>({x:p(f),y:d(_-(l?l.floor*Rt:0),M),vis:!0}),m=new Image;m.src=e.miraUrl||"/assets/mira-tower.png";let b=f=>f.th===-2?ms:f.th===-1?ks:ui[f.th]||ks;function g(f,_,M){l=f,a=M,u.length=0;let v=b(f),w=Math.max(.15,(f.fuel??100)/100);t.setTransform(r,0,0,r,0,0);let y=o>0?(o-=_,(Math.random()-.5)*8*o):0;t.translate(y,0),t.fillStyle=Fc(v.fog),t.fillRect(-10,0,n+20,i),t.fillStyle=Fc(v.wall),t.fillRect(-10,i*.14,n+20,d(0,Tt)-i*.14);let x=t.createLinearGradient(0,d(0,Tt),0,i*.8);x.addColorStop(0,Fc(v.floor)),x.addColorStop(1,"#0a0612"),t.fillStyle=x,t.fillRect(-10,d(0,Tt),n+20,i),(f.nd?vr(f.nd):[]).forEach((D,k)=>{let V=p(D),L=n*.17,U=d(5.6,Tt),Q=d(0,Tt),Y=f.ch===k&&!["vote","enter","gather"].includes(f.phase);t.fillStyle=Y?"#ffe9a0":"#3a2416",t.beginPath(),t.moveTo(V-L/2,Q),t.lineTo(V-L/2,U+L/2),t.arc(V,U+L/2,L/2,Math.PI,0),t.lineTo(V+L/2,Q),t.fill(),t.strokeStyle=f.pr===k?"#c07cff":"#8a6a40",t.lineWidth=4,t.stroke(),t.fillStyle="#ffd36a",t.font=`900 ${n*.07}px sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(f.kinds&&f.kinds[k]?Ec[f.kinds[k]]||"":String(k+1),V,(U+Q)/2)});let F=t.createRadialGradient(n/2,i*.55,10,n/2,i*.55,n*.8*w);if(F.addColorStop(0,"rgba(255,180,100,0.25)"),F.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=F,t.fillRect(0,0,n,i),m.complete&&m.naturalWidth){let D=i*.2,k=D*m.naturalWidth/m.naturalHeight;t.globalAlpha=.9,t.drawImage(m,n*.02,i*.3+Math.sin(M*1.6)*4,k,D),t.globalAlpha=1}if(f.mo){let D=f.mo.b?1.6:1,k=p(0),V=d(1.8,-3.5);t.fillStyle=f.mo.k==="spider"?"#2a1a2a":f.mo.k==="mimic"?"#7a4a20":"rgba(220,210,255,0.85)",t.beginPath(),t.ellipse(k,V,n*.12*D,i*.07*D,0,0,Math.PI*2),t.fill(),t.fillStyle="#ff3050",t.fillRect(k-14*D,V-8,8,8),t.fillRect(k+6*D,V-8,8,8)}let I=f.floor*Rt;for(let D of f.members){let k=p(D.x),V=d(D.y,D.z),L=n*.022;t.fillStyle=Fc(D.info?.color??16777215),t.beginPath(),t.arc(k,V-L,L,0,Math.PI*2),t.fill(),t.fillStyle="#ffd36a",t.beginPath(),t.arc(k+L,V-L*.4,L*.4,0,Math.PI*2),t.fill(),D.flags&jt.shield&&(t.strokeStyle="#5ef0ff",t.lineWidth=2,t.beginPath(),t.arc(k,V-L,L*1.6,0,Math.PI*2),t.stroke()),u.push({id:D.id,x:D.x,y:I+D.y+1.6,z:D.z,info:D.info,flags:D.flags})}f.ghosts.forEach((D,k)=>{let V=p(-5+k%8*1.4),L=d(3+Math.sin(M*2+k)*.3+Math.floor(k/8),-5);t.fillStyle="rgba(200,220,255,0.45)",t.beginPath(),t.arc(V,L,n*.02,0,Math.PI*2),t.fill()}),t.fillStyle=`rgba(0,0,0,${(1-w)*.55})`,t.fillRect(0,0,n,i),M-c<.4&&(t.fillStyle=`rgba(255,255,255,${.6*(1-(M-c)/.4)})`,t.fillRect(0,0,n,i)),t.setTransform(1,0,0,1,0,0)}return{kind:"2d",resize(f,_,M){n=f,i=_,r=M,s.width=Math.round(f*M),s.height=Math.round(_*M)},setQuality(){},frame:g,project:h,fx(f){(f.k==="trap"||f.k==="matk"||f.k==="mlose")&&(o=.5),(f.k==="reveal"||f.k==="floor")&&(c=a)},speaking(){},doorTop(f){if(!l)return null;let _=l.nd?vr(l.nd):[];return _[f]===void 0?null:{x:p(_[f]),y:d(5.9,Tt),vis:!0}},monsterTop(){return l&&l.mo?{x:p(0),y:d(l.mo.b?4.5:3.4,-3.5),vis:!0}:null},miraTop(){return{x:n*.12,y:i*.3,vis:!0}},drawn:()=>u,thunder:()=>!1,stats:()=>({kind:"2d"}),dispose(){},loseContext(){}}}function Kp({silenceUrl:s="/assets/silence.mp3",record:e=!1}={}){let t={ctx:null,master:null,sfxGain:null,voiceGain:null,unlocked:!1,played:0,fails:0,cues:[],record:e,last:{},speakingUntil:0,muted:!1};try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}let n=new Audio;n.setAttribute("playsinline",""),n.preload="auto";function i(){if(t.ctx||e)return t.ctx;let h=window.AudioContext||window.webkitAudioContext;if(!h)return null;try{t.ctx=new h}catch{return null}return r(t.ctx,t.ctx.destination,t),t.ctx}function r(h,m,b){let g=h.createDynamicsCompressor();g.threshold.value=-14,g.ratio.value=6,g.attack.value=.003,g.release.value=.2,b.master=h.createGain(),b.master.gain.value=.9,b.sfxGain=h.createGain(),b.sfxGain.gain.value=.55,b.voiceGain=h.createGain(),b.voiceGain.gain.value=1,b.sfxGain.connect(b.master),b.voiceGain.connect(b.master),b.master.connect(g),g.connect(m)}t.unlock=()=>{let h=i();if(h){try{h.resume();let m=h.createBuffer(1,1,22050),b=h.createBufferSource();b.buffer=m,b.connect(h.destination),b.start(0)}catch{}t.elUnlocked||(n.src=s,n.play().then(()=>{n.pause(),t.elUnlocked=!0}).catch(()=>{})),t.unlocked=h.state==="running",setTimeout(()=>{t.unlocked=h.state==="running",t.onstate&&t.onstate(t.unlocked)},120)}},t.resume=()=>{t.ctx&&t.ctx.state!=="running"&&t.ctx.resume().catch(()=>{})},t.state=()=>e?"record":t.ctx?t.ctx.state:"none";let a=h=>{if(h.__noise)return h.__noise;let m=h.sampleRate,b=h.createBuffer(1,m,m),g=b.getChannelData(0),f=1;for(let _=0;_<m;_++)f=f*16807%2147483647,g[_]=f/10737418235e-1-1;return h.__noise=b,b};function o(h,m,b,g,f,_){m.gain.setValueAtTime(1e-4,b),m.gain.exponentialRampToValueAtTime(f,b+g),m.gain.exponentialRampToValueAtTime(1e-4,b+g+_)}function l(h,m,b,{type:g="sine",f0:f=440,f1:_=f,a:M=.005,d:v=.2,peak:w=.3,det:y=0}){let x=h.createOscillator(),A=h.createGain();x.type=g,x.frequency.setValueAtTime(f,b),_!==f&&x.frequency.exponentialRampToValueAtTime(Math.max(20,_),b+M+v),x.detune.value=y,o(h,A,b,M,w,v),x.connect(A).connect(m),x.start(b),x.stop(b+M+v+.05)}function c(h,m,b,{type:g="lowpass",f0:f=1e3,f1:_=f,q:M=.7,a:v=.003,d:w=.15,peak:y=.4}){let x=h.createBufferSource(),A=h.createBiquadFilter(),F=h.createGain();x.buffer=a(h),A.type=g,A.Q.value=M,A.frequency.setValueAtTime(f,b),_!==f&&A.frequency.exponentialRampToValueAtTime(Math.max(30,_),b+v+w),o(h,F,b,v,y,w),x.connect(A).connect(F).connect(m),x.start(b,Math.random()*.5),x.stop(b+v+w+.05)}let u={punch:(h,m,b,g=1)=>{c(h,m,b,{f0:1400,f1:300,d:.08,peak:.5*g}),l(h,m,b,{f0:150,f1:55,d:.1,peak:.55*g})},crit:(h,m,b)=>{u.punch(h,m,b,1.2),l(h,m,b,{type:"square",f0:1800,f1:900,d:.06,peak:.12}),c(h,m,b+.01,{type:"highpass",f0:3e3,d:.12,peak:.25})},block:(h,m,b)=>{l(h,m,b,{type:"triangle",f0:1200,f1:1100,d:.18,peak:.18}),l(h,m,b,{type:"triangle",f0:1810,d:.14,peak:.1})},ko:(h,m,b)=>{l(h,m,b,{type:"sine",f0:260,f1:980,a:.005,d:.16,peak:.35}),c(h,m,b,{type:"bandpass",f0:2500,f1:600,q:1.2,d:.25,peak:.35}),l(h,m,b+.09,{type:"triangle",f0:1320,d:.2,peak:.12})},dash:(h,m,b)=>{c(h,m,b,{type:"bandpass",f0:500,f1:3500,q:2,a:.04,d:.22,peak:.45})},shield:(h,m,b)=>{[880,1320,1760].forEach((g,f)=>l(h,m,b+f*.03,{type:"sine",f0:g,d:.45,peak:.09}))},boom:(h,m,b,g=1)=>{c(h,m,b,{f0:900,f1:80,a:.004,d:.9,peak:.8*g}),l(h,m,b,{f0:90,f1:28,d:.8,peak:.8*g})},whistle:(h,m,b)=>{l(h,m,b,{type:"sine",f0:1900,f1:500,a:.05,d:.95,peak:.07})},coin:(h,m,b)=>{l(h,m,b,{type:"square",f0:988,d:.07,peak:.1}),l(h,m,b+.07,{type:"square",f0:1319,d:.28,peak:.1})},power:(h,m,b)=>{[523,659,784,1047].forEach((g,f)=>l(h,m,b+f*.05,{type:"triangle",f0:g,d:.3,peak:.14})),c(h,m,b,{type:"highpass",f0:2e3,f1:6e3,a:.1,d:.4,peak:.12})},heal:(h,m,b)=>{[660,880,1100].forEach((g,f)=>l(h,m,b+f*.06,{f0:g,d:.25,peak:.08}))},beep:(h,m,b)=>{l(h,m,b,{f0:880,d:.12,peak:.22})},go:(h,m,b)=>{l(h,m,b,{type:"sawtooth",f0:660,d:.5,peak:.12}),l(h,m,b,{type:"square",f0:1320,d:.5,peak:.08}),c(h,m,b,{f0:4e3,f1:500,d:.4,peak:.25})},land:(h,m,b)=>{l(h,m,b,{f0:120,f1:50,d:.12,peak:.3}),c(h,m,b,{f0:600,d:.1,peak:.15})},spin:(h,m,b)=>{c(h,m,b,{type:"bandpass",f0:300,f1:2400,q:3,a:.08,d:.35,peak:.5}),u.punch(h,m,b+.25,1.1)},cheer:(h,m,b)=>{c(h,m,b,{type:"bandpass",f0:1200,f1:1500,q:.6,a:.25,d:2.2,peak:.35}),c(h,m,b+.1,{type:"bandpass",f0:2600,f1:2200,q:.8,a:.3,d:2,peak:.18})},fanfare:(h,m,b)=>{[[523,0],[659,.12],[784,.24],[1047,.38],[784,.6],[1047,.72]].forEach(([g,f],_)=>{l(h,m,b+f,{type:"sawtooth",f0:g,d:_===5?.9:.16,peak:.07}),l(h,m,b+f,{type:"triangle",f0:g*2,d:_===5?.9:.16,peak:.05})}),u.cheer(h,m,b+.2)},nuke:(h,m,b)=>{u.boom(h,m,b,1.3),u.boom(h,m,b+.25,1),l(h,m,b,{type:"sawtooth",f0:220,f1:40,d:1.6,peak:.25})},pop:(h,m,b)=>{l(h,m,b,{f0:500,f1:1400,d:.07,peak:.15})},creak:(h,m,b)=>{l(h,m,b,{type:"sawtooth",f0:95,f1:140,a:.08,d:.7,peak:.07,det:8}),l(h,m,b+.05,{type:"square",f0:190,f1:120,a:.1,d:.6,peak:.03}),c(h,m,b,{type:"bandpass",f0:900,f1:500,q:6,a:.1,d:.6,peak:.12})},ghost:(h,m,b)=>{l(h,m,b,{type:"sine",f0:520,f1:760,a:.25,d:.9,peak:.08,det:15}),l(h,m,b+.1,{type:"sine",f0:780,f1:500,a:.3,d:.9,peak:.05})},thunder:(h,m,b)=>{c(h,m,b,{f0:500,f1:60,a:.02,d:1.8,peak:.6}),c(h,m,b+.15,{f0:250,f1:50,a:.1,d:1.6,peak:.45})},bell:(h,m,b)=>{[[110,.25],[220,.12],[277,.07],[330,.06],[440,.04]].forEach(([g,f])=>l(h,m,b,{type:"sine",f0:g,a:.004,d:2.6,peak:f}))},organ:(h,m,b)=>{[[147,0],[175,0],[220,0],[294,.02],[131,.6],[165,.6],[196,.6],[262,.62]].forEach(([g,f])=>{l(h,m,b+f,{type:"sawtooth",f0:g,a:.04,d:f?.9:.55,peak:.035}),l(h,m,b+f,{type:"triangle",f0:g*2,a:.04,d:f?.9:.55,peak:.03})})},heart:(h,m,b)=>{l(h,m,b,{f0:70,f1:45,d:.12,peak:.45}),l(h,m,b+.17,{f0:62,f1:40,d:.14,peak:.35})},chime:(h,m,b)=>{[1319,1568,1976,2637].forEach((g,f)=>l(h,m,b+f*.07,{type:"sine",f0:g,d:.6,peak:.07}))},trap:(h,m,b)=>{c(h,m,b,{type:"bandpass",f0:3e3,f1:300,q:1.5,a:.01,d:.35,peak:.4}),u.boom(h,m,b+.22,.7)},shatter:(h,m,b)=>{for(let g=0;g<6;g++)l(h,m,b+g*.035,{type:"triangle",f0:2200+g*430,f1:1800,d:.12,peak:.06});c(h,m,b,{type:"highpass",f0:4e3,d:.4,peak:.3})},wind:(h,m,b)=>{c(h,m,b,{type:"bandpass",f0:380,f1:700,q:4,a:.9,d:2.2,peak:.12})},squeak:(h,m,b)=>{l(h,m,b,{type:"triangle",f0:900,f1:1300,d:.08,peak:.07})},roar:(h,m,b)=>{l(h,m,b,{type:"sawtooth",f0:120,f1:60,a:.05,d:.9,peak:.16,det:20}),c(h,m,b,{type:"lowpass",f0:1200,f1:300,a:.05,d:.9,peak:.35})}},p={squeak:.06,ghost:.25,heart:.3,punch:.045,crit:.06,block:.08,ko:.08,heal:.15,land:.06,pop:.05,coin:.05,boom:.06};t.sfx=(h,m=t.now(),b=1)=>{if(t.muted||!u[h])return;let g=p[h]||.03;if(t.last[h]&&m-t.last[h]<g)return;if(t.last[h]=m,e){t.cues.push({k:"sfx",kind:h,t:m,v:b});return}let f=t.ctx;if(!(!f||f.state!=="running"))try{u[h](f,t.sfxGain,f.currentTime+.01,b)}catch{}},t.now=()=>e?t.clock():t.ctx?t.ctx.currentTime:0,t.clock=()=>0;let d=null;return t.voice=async(h,m)=>{if(t.muted||!h)return!1;if(t.speakingUntil=t.now()+(m||2),e)return t.cues.push({k:"voice",url:h,t:t.now(),dur:m}),!0;let b=t.ctx;if(b&&b.state!=="running"&&t.resume(),b&&b.state==="running")try{let g=await fetch(h).then(v=>{if(!v.ok)throw new Error("HTTP "+v.status);return v.arrayBuffer()}),f=await new Promise((v,w)=>{let y=b.decodeAudioData(g,v,w);y&&y.catch&&y.catch(w)});if(d)try{d.stop()}catch{}let _=b.createBufferSource();_.buffer=f,_.connect(t.voiceGain);let M=b.currentTime+.02;return t.sfxGain.gain.setTargetAtTime(.28,M,.05),t.sfxGain.gain.setTargetAtTime(.55,M+f.duration,.2),_.start(M),d=_,t.played++,_.onended=()=>{d===_&&(d=null)},!0}catch{t.fails++}try{return n.src=h,await n.play(),t.played++,!0}catch{return t.fails++,!1}},t.mix=async(h,m=44100)=>{let b=window.OfflineAudioContext||window.webkitOfflineAudioContext,g=new b(2,Math.ceil(h*m),m),f={};r(g,g.destination,f);let _=t.cues.filter(k=>k.k==="voice"),M=await Promise.all(_.map(k=>fetch(k.url).then(V=>V.arrayBuffer()).then(V=>g.decodeAudioData(V)).catch(()=>null)));for(let k of t.cues)if(k.k==="sfx"&&k.t<h)try{u[k.kind](g,f.sfxGain,k.t+.01,k.v)}catch{}_.forEach((k,V)=>{let L=M[V];if(!L||k.t>=h)return;let U=g.createBufferSource();U.buffer=L,U.connect(f.voiceGain),U.start(k.t+.02),f.sfxGain.gain.setTargetAtTime(.28,k.t,.05),f.sfxGain.gain.setTargetAtTime(.55,k.t+L.duration,.2)});let v=await g.startRendering(),w=v.length,y=[v.getChannelData(0),v.getChannelData(1)],x=new DataView(new ArrayBuffer(44+w*4)),A=(k,V)=>{for(let L=0;L<V.length;L++)x.setUint8(k+L,V.charCodeAt(L))};A(0,"RIFF"),x.setUint32(4,36+w*4,!0),A(8,"WAVEfmt "),x.setUint32(16,16,!0),x.setUint16(20,1,!0),x.setUint16(22,2,!0),x.setUint32(24,m,!0),x.setUint32(28,m*4,!0),x.setUint16(32,4,!0),x.setUint16(34,16,!0),A(36,"data"),x.setUint32(40,w*4,!0);let F=44;for(let k=0;k<w;k++)for(let V=0;V<2;V++){let L=Math.max(-1,Math.min(1,y[V][k]));x.setInt16(F,L*32767,!0),F+=2}let I=new Uint8Array(x.buffer),D="";for(let k=0;k<I.length;k+=32768)D+=String.fromCharCode.apply(null,I.subarray(k,k+32768));return btoa(D)},t}function Jp(s,{off:e=!1}={}){let t=Math.random().toString(36).slice(2,8),n=performance.now(),i=[];addEventListener("error",o=>{i.push(String(o.message||"error").slice(0,110)),i.length>3&&i.shift()}),addEventListener("unhandledrejection",o=>{i.push(("rej "+(o.reason&&o.reason.message||o.reason)).slice(0,110)),i.length>3&&i.shift()});let r=o=>{let l=s();return{id:t,reason:o,up:(performance.now()-n)/1e3,ua:navigator.userAgent.slice(0,160),scr:{w:screen.width,h:screen.height,dpr:devicePixelRatio},vis:document.visibilityState,errs:i.slice(),...l,mem:{...l.mem||{},heap:performance.memory?performance.memory.usedJSHeapSize/1048576:void 0}}},a=o=>{if(e)return;let l=r(o),c=JSON.stringify(l);if(o==="start")try{let u=JSON.parse(localStorage.getItem("lg_diagLast")||"null");u&&u.reason!=="pagehide"&&(c=JSON.stringify({...l,prev:u}))}catch{}try{localStorage.setItem("lg_diagLast",JSON.stringify(l))}catch{}try{navigator.sendBeacon&&navigator.sendBeacon("/diag",new Blob([c],{type:"text/plain"}))||fetch("/diag",{method:"POST",body:c,keepalive:!0}).catch(()=>{})}catch{}};return setTimeout(()=>a("start"),4e3),setInterval(()=>a("tick"),3e4),document.addEventListener("visibilitychange",()=>{document.hidden&&a("hidden")}),addEventListener("pagehide",()=>a("pagehide")),{send:a,errs:i}}var Sr=(s,e)=>s[Math.floor(e()*s.length)%s.length],qv=["one","two","three"],Xv={library:["The books are whispering your names...","Shh. The books are listening."],crypt:["Mind the bones, darlings. Some of them still move.","Cold, is it not? The dead like it that way."],mirror:["Do not trust your reflection in here.","So many of you... and so many mirrors."],clock:["Tick, tock. Time is not on your side.","Every gear in here wants a finger."],attic:["Something with too many legs lives up here.","Watch the webs, little lanterns."],lab:["Do not drink anything green.","Bubbling potions, and bubbling trouble."],ballroom:["The ghosts are still dancing. Do not cut in.","One last waltz for the dead."]};function Yp({nameOf:s,rng:e=Math.random}){let t=[],n=0,i=(d,h,m,b={})=>({text:d,pri:h,banner:m||null,...b}),r={gather:["To play, just comment anything. You get a lantern and climb with the party.","On every floor, comment a door number to vote. One, two or three. Choose wisely!","Gifts are magic! Any small gift, like a rose, shows the safe door. Five coins casts a shield.","Thirty coins rescues the fallen. One hundred coins calls my lift. Five hundred coins summons a ghost boss!","Tap the screen! Likes are lantern oil. If the oil runs out, the climb is over.","Follow for a spare life. Share the live for a spare life and more oil."],vote:["Comment the number of a door to vote!","Send any gift and I will show you the safe door.","Shields block traps. Five coins!"],fight:["Every comment is a hit! Spam the chat!","Likes hurt it too! Tap, tap, tap!","Gifts hit hardest of all!"]},a="gather",o=-99,l=0,c={gather:0,vote:0,fight:0},u={gather:[5,7],vote:[3.5,7],fight:[5,9]},p=d=>{let h=d.map(s).filter(Boolean);if(!h.length)return"";let m=h.slice(0,3),b=h.length-m.length;return(m.length===1?m[0]:m.slice(0,-1).join(", ")+" and "+m[m.length-1])+(b>0?` and ${b} more`:"")};return{lines(d,h){let m=[];for(let f of d){let _=f.id?s(f.id):null,M={gather:"gather",end:"gather",vote:f.start?"vote":null,reveal:"other",monster:"fight",mwin:"other",mlose:"other",riddle:"other",climb:"other"}[f.k];switch(M&&(a=M),f.k){case"gather":m.push(i(Sr(["Gather, climbers! Comment anything to take a lantern. The tower is waiting.","A new climb begins. Comment to join the party, my darlings."],e),6,"NEW CLIMB"));break;case"floor":{let v=f.boss?ms:ui[f.th];if(f.boss){m.push(i(`Floor ${f.n}. The bell tower. Can you hear it? Something is coming.`,8,`FLOOR ${f.n} \xB7 BOSS`));break}let w=`Floor ${f.n}. ${v.name}. ${Sr(Xv[v.id]||[""],e)}`,y=f.predict?s(f.predict.id):null;y&&(w+=f.predict.kind==="fall"?` I foresee... ${y} will fall.`:` I foresee gold in ${y}'s future.`),m.push(i(w,7,`FLOOR ${f.n}`));break}case"vote":f.start&&m.push(i(f.doors===2?"Left or right? Comment one or two!":"Choose a door. Comment one, two, or three!",6,"VOTE!"));break;case"prophecy":m.push(i(`The cards have spoken. Door ${qv[f.door]} is safe.`,8));break;case"reveal":{let v=f.kinds[f.door],w=f.none?"Nobody chose? Then I choose for you. ":"";m.push(i(w+{treasure:Sr(["Treasure! The spirits smile on you.","Gold! Lovely, lovely gold."],e),trap:Sr(["A trap! Run, little lanterns!","Oh dear. A trap."],e),monster:Sr(["Something hungry wakes up...","A monster! Fight it! Spam the chat!"],e),riddle:"A riddle blocks the way."}[v],7,{treasure:"TREASURE!",trap:"TRAP!",monster:"MONSTER!",riddle:"RIDDLE!"}[v]));break}case"treasure":f.lucky&&m.push(i(`Just as I foresaw. ${s(f.lucky)} grabs the biggest jewel.`,6));break;case"trap":case"mlose":{if(f.k==="mlose"&&m.push(i(f.boss?`${f.name} wins this time... the lanterns flicker.`:"The beast was too strong.",7)),f.blocked){m.push(i("The shield holds! Nobody falls.",7,"BLOCKED!"));break}f.foretold&&m.push(i(`Just as I foresaw. Poor ${s(f.foretold)}.`,8,"FORETOLD"));let v=f.fell.filter(w=>w!==f.foretold);v.length&&m.push(i(`${p(v)} ${v.length>1?"fall":"falls"} into the dark.`,6)),f.saved&&f.saved.length&&m.push(i(`${p(f.saved)} ${f.saved.length>1?"were":"was"} saved by a spare life!`,5));break}case"monster":f.boss?m.push(i(f.summoned?`${f.name} has been summoned! Fight, all of you! Spam the chat!`:`${f.name} rises! Spam the chat to fight! Likes hurt it too!`,9,f.summoned?"GHOST BOSS!":"BOSS FIGHT!")):m.push(i(`It is ${f.name}! Comment anything to hit it!`,7));break;case"mwin":{let v=f.top?s(f.top):null;f.boss?m.push(i(`${f.name} is banished!${v?` ${v} struck hardest!`:""}${f.rescued?" The fallen rise again!":""}`,9,"BOSS DOWN!")):m.push(i(`Banished!${v?` ${v} struck hardest.`:""}`,6,"VICTORY!"));break}case"matk":f.slam&&m.push(i(f.blocked?"The boss slams down! The shield holds!":"The boss slams the floor!",5));break;case"riddle":m.push(i(`Answer me this. ${_r[f.i][0]} First to comment the answer wins!`,9,"RIDDLE!",{riddle:1}));break;case"rwin":m.push(i(f.bot?`${_} solved it. The answer was ${f.a}. Come on chat, beat the bots!`:`${_} has it! The answer was ${f.a}. Clever soul!`,9,f.bot?null:"SOLVED!",{win:1}));break;case"rfail":m.push(i(`Nobody? The answer was ${f.a}. The tower takes some of your light.`,7));break;case"climb":m.push(i(f.lift?"Into my lift, darlings! We rise past a floor!":Sr(["Up the stairs we go.","Onward. Upward.","Keep climbing. Keep your lanterns lit."],e),f.lift?7:3,f.lift?"MIRA'S LIFT":null));break;case"gift":{let v={prophecy:f.banked?`${_} lights a candle. I will reveal the next safe door.`:`${_} asks the cards. Look, the safe door glows!`,shield:`${_} casts a shield over the party!`,rescue:f.n?`${_} rescues the fallen! Rise, little ghosts!`:`${_} fills the lanterns! Thank you!`,skip:f.blessing?`${_} blesses the party! Thank you!`:f.hitBoss?`${_} strikes with magic!`:`${_} calls my lift!`,boss:f.blessing?`${_} blesses the whole tower! The fallen rise!`:f.hitBoss?`${_} hurls a ghost bomb at the boss!`:`${_} summons a ghost boss! Brave... or foolish.`}[f.tier];v&&m.push(i(v,{prophecy:6,shield:7,rescue:8,skip:8,boss:9}[f.tier],{prophecy:f.banked?null:"PROPHECY",shield:"SHIELD!",rescue:"RESCUE!",skip:f.blessing?"BLESSING":"MIRA'S LIFT",boss:f.blessing?"BLESSING":"GHOST BOSS!"}[f.tier],{gift:f.tier}));break}case"follow":m.push(i(`Thank you for the follow, ${_}. A spare life for you.`,4));break;case"share":m.push(i(`${_} shared the tower! A spare life, and more oil.`,4));break;case"blaze":m.push(i(f.rescued?`The lanterns blaze! Thank you for the likes! ${s(f.rescued)} rises again!`:"The lanterns blaze! Thank you for the likes!",5,"LANTERNS BLAZE"));break;case"lowfuel":m.push(i("Your lanterns are fading! Tap the screen, send likes, keep them lit!",7,"LOW OIL!"));break;case"join":f.bot||t.push(f.id);break;case"end":{let v=f.top&&f.top.length?s(f.top[0]):null,w=f.reason==="top"?`You reached the top of my tower! Floor ${f.floor}!`:f.reason==="dark"?`The lanterns go dark on floor ${f.floor}.`:`Everyone has fallen on floor ${f.floor}.`;m.push(i(`${w}${v?` Top climber: ${v}! Shoutout to ${v}!`:""} A new climb begins soon.`,10,f.reason==="top"?"THE TOP!":`FLOOR ${f.floor}`,{win:1}));break}}}if(t.length&&h-n>6){n=h;let f=t.splice(0,60);m.push(i(Sr([`Welcome ${p(f)}. Take a lantern.`,`${p(f)} joined the climb.`],e),2))}m.length&&(o=h);let b=r[a],g=u[a];return b&&!m.length&&h-o>g[0]&&h-l>g[1]&&(l=h,o=h,m.push(i(b[c[a]++%b.length],2,null,{tip:1}))),m}}}var Zp=["Sara","Ali","Hina","Omar","Zara","Bilal","Noor","Ayan","Esha","Faraz","Iman","Junaid","Kinza","Laiba","Moiz","Nimra","Rida","Saad","Tania","Umer","Maya","Leo","Aisha","Yusuf","Lina","Kai","Mia","Zain","Sofia","Adam","Hamza","Amna","Riya","Dev","Luna","Max"],$p=["","_x","22",".official","_99","\u{1F338}","xo","_07",".live","\u2728","_pk","786"],Qp=["hi","join","lets go","me!","hello from dubai","gg","this is fire","shield","dash","\u{1F4A8}","\u{1F6E1}\uFE0F","dance","color pink","color gold","revenge","wow","\u{1F525}\u{1F525}","i will win","play","1","2","3","2","left","right","3\uFE0F\u20E3","candle","clock","echo","map","attack","mage","warrior","archer","healer","\u{1F52E}","\u{1F3F9}","seal","hunt","city","army"],em=[["Rose",1],["TikTok",1],["Finger Heart",5],["GG",1],["Doughnut",30],["Hand Hearts",100],["Corgi",299],["Money Gun",500],["Lion",29999]];function tm(s="busy",e=Math.random){let t=c=>Math.floor(e()*c),n=[],i=()=>{let c=Zp[t(Zp.length)]+$p[t($p.length)],u={uid:c.toLowerCase().replace(/[^\w.]/g,"")+n.length,name:c};return n.push(u),u},r=()=>n.length?n[t(n.length)]:i(),a=0,o=0,l=s==="quiet"?3:s==="gifts"?30:s==="demo"?40:220;return{people:n,tick(c){a+=c,o+=c;let u=[],p=s==="quiet"?.6:s==="busy"?Math.min(14,2+a/6):s==="demo"?5:4;for(;o>1/p;){o-=1/p;let h=n.length<Math.min(l,s==="busy"?10+a*2.5:l)&&e()<.6?i():r(),m=e();if(m<.5){let b=Qp[t(Qp.length)];if(e()<.25&&n.length>2){let g=r();g!==h&&(b=(e()<.5?"attack ":"\u2694\uFE0F ")+g.name.replace(/[^\w]/g,"").slice(0,6))}u.push({type:"chat",uid:h.uid,name:h.name,text:b})}else if(m<.8)u.push({type:"like",uid:h.uid,name:h.name,count:1+t(15)});else if(m<(s==="gifts"?.98:.9)){let b=e()<.75?em[t(4)]:em[4+t(s==="gifts"?4:3)];u.push({type:"gift",uid:h.uid,name:h.name,giftName:b[0],coins:b[1],count:e()<.2?1+t(5):1})}else m<.95?u.push({type:"follow",uid:h.uid,name:h.name}):u.push({type:"share",uid:h.uid,name:h.name})}return u}}}var $t=new URLSearchParams(location.search),pi=s=>document.getElementById(s),Vc=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Ao=$t.get("mode")==="phone"||$t.get("mode")!=="pc"&&(Vc||/Android|Mobile/.test(navigator.userAgent)),mi=$t.get("render")==="1",ba=mi||$t.get("local")==="1",od=$t.get("key")||"",Eo=Number($t.get("fps"))||(Ao?30:60),bm=$t.get("mute")==="1";$t.get("clean")==="1"&&document.body.classList.add("clean");var xm=Ao?[{pr:1.5,maxW:780,labels:12,particles:1,dust:!0,props:!0,maxChars:36,animLod:1},{pr:1.25,maxW:700,labels:10,particles:.75,dust:!0,props:!0,maxChars:30,animLod:1},{pr:1,maxW:600,labels:8,particles:.5,dust:!1,props:!0,maxChars:24,animLod:2},{pr:.8,maxW:480,labels:6,particles:.35,dust:!1,props:!1,maxChars:16,animLod:2}]:[{pr:2,maxW:Number($t.get("maxw"))||1080,labels:14,particles:1,dust:!0,props:!0,maxChars:60,animLod:1},{pr:1.5,maxW:900,labels:12,particles:1,dust:!0,props:!0,maxChars:48,animLod:1},{pr:1,maxW:700,labels:10,particles:.6,dust:!1,props:!0,maxChars:36,animLod:2},{pr:.8,maxW:540,labels:8,particles:.4,dust:!1,props:!1,maxChars:24,animLod:2}],Hn=$t.has("q")?Math.max(0,Math.min(3,Number($t.get("q")))):0,jv=$t.has("q"),Wi=pi("gl"),dt=null,_m=0,vm=0,Bc=[],zs=!1,wr=pi("hud"),ke=wr.getContext("2d");function ym(){if(!($t.get("view")==="2d"||localStorage.getItem("lg_force2d")==="1"))try{dt=Xp(Wi,{maxChars:60,particles:Ao?700:1100,aa:!Ao||Vc,preserve:mi}),dt.ready&&dt.ready.catch(()=>Ri("models-fail")),Wi.addEventListener("webglcontextlost",Ro,!1),Wi.addEventListener("webglcontextrestored",Mm,!1);return}catch{Ri("gl-fail")}Wc()}function Wc(){if(dt&&dt.kind==="2d")return;try{dt&&dt.dispose(),dt&&dt.loseContext&&dt.loseContext()}catch{}let s=document.createElement("canvas");s.id="gl",Wi.replaceWith(s),Wi=s,dt=jp(Wi,{}),Ri("view-2d"),Gs()}function Ro(s){s.preventDefault(),_m++,zs=!0,Ri("ctx-lost"),Bc.push(performance.now()),Bc=Bc.filter(e=>performance.now()-e<12e4),Rm(),clearTimeout(Ro.t),Ro.t=setTimeout(()=>{zs&&(localStorage.setItem("lg_force2d","1"),Wc(),zs=!1,Hc())},4e3),fd&&fd.send("ctxlost")}function Mm(){if(clearTimeout(Ro.t),vm++,Ri("ctx-restored"),Bc.length>=3){localStorage.setItem("lg_force2d","1"),Wc(),zs=!1,Hc();return}try{dt.dispose()}catch{}Wi.removeEventListener("webglcontextlost",Ro),Wi.removeEventListener("webglcontextrestored",Mm),dt=null,ym(),Hn=Math.min(3,Hn+1),Gs(),zs=!1,Hc()}var qc=390,xa=844;function Gs(){let s=window.innerWidth,e=window.innerHeight,t=pi("stage"),n=s,i=e;s/e>.7&&(n=Math.round(Math.min(s,e*9/16)),i=Math.round(Math.min(e,n*16/9))),t.style.width=n+"px",t.style.height=i+"px",qc=n,xa=i,document.documentElement.style.setProperty("--u",(n/100).toFixed(3)+"px");let r=xm[Hn],a=window.devicePixelRatio||1,o=Math.min(a,r.pr,r.maxW/n);dt&&(dt.resize(n,i,o),dt.setQuality(r));let l=Math.min(a,2,900/n);wr.width=Math.round(n*l),wr.height=Math.round(i*l),wr.__pr=l}addEventListener("resize",()=>{clearTimeout(Gs.t),Gs.t=setTimeout(Gs,120)});var mn=Kp({record:mi});mn.muted=bm;var Sm=pi("soundChip");function Kv(){mn.unlock(),setTimeout(()=>{mn.state()==="running"&&(Sm.hidden=!0)},200)}["pointerdown","touchstart","click","keydown"].forEach(s=>addEventListener(s,Kv,{passive:!0}));document.addEventListener("visibilitychange",()=>{document.hidden||mn.resume()});!mi&&!bm&&(mn.unlock(),setTimeout(()=>{mn.state()!=="running"&&(Sm.hidden=!1)},700));var xs=new Map,zc=[],Ri=s=>{zc.push(s),zc.length>8&&zc.shift()},qi={ws:0,snaps:0,ev:0,err:0,say:0},Vn=[],bs=null,nm=0,im="",sm=_o,pd=null,Nc="",Cn={phase:"gather",members:[],ghosts:[],tl:0,pd:1,floor:0,th:-1,nd:3,vc:[0,0,0],pr:-1,ch:-1,kinds:null,fuel:100,sh:0,mo:null,lift:0,nth:-9,n:0,gh:0,hype:0,run:0,best:0,ri:-1,rs:0};function ld(s=[],e=[]){for(let t of e)xs.delete(t);for(let t of s)xs.set(t.id,t)}var Ei=null,Mo=1e3;function cd(){let s=(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws?game=tower"+(od?"&key="+encodeURIComponent(od):"");try{Ei=new WebSocket(s)}catch{return setTimeout(cd,Mo)}Ei.onopen=()=>{qi.ws++,Mo=1e3,Ri("ws-open"),Hc();try{let e=JSON.parse(localStorage.getItem("lg_towerBoard")||"null");e&&e.json&&e.sig&&Ei.send(JSON.stringify({t:"restore",json:e.json,sig:e.sig}))}catch{}},Ei.onmessage=e=>{let t;try{t=JSON.parse(e.data)}catch{return}Jv(t)},Ei.onclose=()=>{Ei=null,Ri("ws-close"),setTimeout(cd,Mo),Mo=Math.min(1e4,Mo*1.7),qi.ws&&Rm()},Ei.onerror=()=>{}}function Jv(s){switch(s.t){case"hello":xs.clear(),ld(s.roster),Vn=[],bs=null,sm=s.tiers||sm,dm(s),rm(s.snap);break;case"roster":ld(s.add,s.del);break;case"s":rm(s);break;case"say":Am(s.text,s.url,s.dur);break;case"banner":break;case"board":dm(s);break;case"status":Nc=s.tiktok?.state||"",pi("conn").className=Nc==="connected"?"connected":/wait|connecting|reconnect/.test(Nc)?"waiting":Nc==="error"?"error":"",dy(s.tiktok);break}}function rm(s){if(!s)return;qi.snaps++;let t=performance.now()/1e3-s.tm;bs===null||t<bs||Math.abs(t-bs)>2?bs=t:bs+=(t-bs)*.02,Vn.length&&s.tm<Vn[Vn.length-1].tm-1&&(Vn=[],bs=t),Vn.push({tm:s.tm,s,done:!1}),Vn.length>40&&Vn.shift()}var Yv=.16;function Zv(s){if(!Vn.length)return Cn;let e=s-bs-Yv;for(let r of Vn)if(!r.done&&r.tm<=e){r.done=!0;let a=e-r.tm>1.2;for(let o of r.s.ev||[])Tm(o,a)}let t=Vn[0],n=null;for(let r=0;r<Vn.length;r++)if(Vn[r].tm<=e)t=Vn[r];else{n=Vn[r];break}if(!n||n===t)return hd(t.s,null,0);let i=Math.max(0,Math.min(1,(e-t.tm)/Math.max(.001,n.tm-t.tm)));return hd(t.s,n.s,i)}var am=[],om=[];function hd(s,e,t){e&&e.fl!==s.fl&&(e=null);let n=[],i=[],r=new Map;if(e)for(let u=0;u<e.f.length;u+=6)r.set(e.f[u],u);let a=0,o=0;for(let u=0;u<s.f.length;u+=6){let p=s.f[u],d=s.f[u+5];if(d&jt.ghost){let b=om[o]||(om[o]={});o++,b.id=p,b.flags=d,b.info=xs.get(p)||{name:"?",color:16777215},i.push(b);continue}let h=am[a]||(am[a]={});a++,h.id=p,h.x=s.f[u+1],h.y=s.f[u+2],h.z=s.f[u+3],h.face=s.f[u+4],h.flags=d;let m=r.get(p);if(m!==void 0&&e&&!(e.f[m+5]&jt.ghost)){let b=e.f;h.x+=(b[m+1]-h.x)*t,h.y+=(b[m+2]-h.y)*t,h.z+=(b[m+3]-h.z)*t;let g=b[m+4]-h.face;g=Math.atan2(Math.sin(g),Math.cos(g)),h.face+=g*t}h.info=xs.get(p)||{name:"?",color:16777215},n.push(h)}let l=e&&t>.5?e:s;l.ph!==im&&(im=l.ph,nm=ma());let c=l.mo;return c&&e&&s.mo&&e.mo&&(c={...l.mo,hp:s.mo.hp+(e.mo.hp-s.mo.hp)*t}),Cn={phase:l.ph,members:n,ghosts:i,tl:l.tl,pd:l.pd,floor:l.fl,th:l.th,nd:l.nd,vc:l.vc,pr:l.pr,ch:l.ch,kinds:l.kinds,fuel:e?s.fuel+(e.fuel-s.fuel)*t:s.fuel,sh:l.sh,mo:c,lift:l.lift,nth:l.nth,n:l.n,gh:l.gh,hype:l.hype,run:l.run,best:l.best,ri:l.ri,rs:l.rs,pdc:l.pdc,pk:l.pk,phaseStart:nm},Cn}var fi=null,ud=null,wm=null,Bs=[],lm=0,dd=0;function $v(){let s={};for(let n of["gatherSeconds","enterSeconds","voteSeconds","revealSeconds","treasureSeconds","trapSeconds","monsterSeconds","riddleSeconds","bossSeconds","victorySeconds","climbSeconds","endSeconds","minParty","startFloor","bossEvery","fuelDrain","monsterHpMul","dmgMul","topFloor"])$t.has(n)&&(s[n]=Number($t.get(n)));$t.get("forceKind")&&(s.forceKind=String($t.get("forceKind")).slice(0,12)),$t.get("forceTheme")&&(s.forceTheme=String($t.get("forceTheme")).slice(0,12)),$t.get("bots")==="0"&&(s.bots=!1);let e=Number($t.get("seed")||7),t=()=>(e=e*16807%2147483647,(e-1)/2147483646);fi=new Rc(s,mi?t:Math.random),wm=Yp({nameOf:n=>fi.byId.get(n)?.name||null,rng:mi?t:Math.random}),$t.get("crowd")&&(ud=tm($t.get("crowd"),mi?t:Math.random)),window.__input=n=>fi.input(n),window.__tower=fi}var td=0;function Qv(s,e){if(ud)for(let r of ud.tick(s))fi.input(r);for(td+=s;td>=.05;)td-=.05,fi.step(.05);let t=fi.drainRoster();ld(t.add,t.del);let n=fi.drain();for(let r of wm.lines(n,fi.t))ey(r,e);let i=fi.snapshot();for(let r of n)Tm(r,!1);return n.some(r=>r.k==="end"||r.k==="rwin"||r.k==="mwin")&&(pd={session:fi.board(8),all:[],sessionBest:fi.sessionBest}),hd(i,null,0)}function ey(s,e){let t={...s,at:e,p:null};for(t.p=fetch("/api/say?voice=mira&text="+encodeURIComponent(s.text)).then(n=>n.json()).catch(()=>({url:null})),dd++,t.p.finally(()=>dd--),Bs.push(t),Bs.sort((n,i)=>i.pri-n.pri||n.at-i.at);Bs.length>3;)Bs.pop()}async function wo(s){if(s<lm||!Bs.length||wo.busy)return;let e=Bs.shift();if(!e.win&&!e.riddle&&s-e.at>(e.pri>=7?9:6))return;wo.busy=!0;let t=await e.p;wo.busy=!1;let n=ma(),i=t.dur||Math.min(6,.9+e.text.length/15);Am(e.text,t.url,i),lm=n+i+.25}var ty=s=>xs.get(s)?.name||"?",ny=s=>"#"+((xs.get(s)?.color??16777215)>>>0).toString(16).padStart(6,"0"),cm=0,hm=0,kc=null;function Tm(s,e){if(qi.ev++,!e&&dt&&!zs)try{dt.fx(s,Cn)}catch{qi.err++}let t=(n,i)=>{e||mn.sfx(n,mn.now(),i)};switch(s.k){case"gather":t("wind"),kc=null;break;case"floor":t(s.boss?"bell":"creak"),s.boss&&t("organ"),kc=null;break;case"vote":s.start?t("chime"):ma()-cm>.12&&(cm=ma(),t("squeak",.35));break;case"prophecy":t("chime");break;case"reveal":t("creak"),t({treasure:"coin",trap:"trap",monster:"roar",riddle:"organ"}[s.kinds[s.door]]||"creak");break;case"treasure":t("coin"),t("fanfare",.5);break;case"trap":t("trap"),(s.trap==="shards"||s.trap==="chandelier")&&t("shatter"),s.blocked&&t("shield");break;case"fall":t("ghost",.6);break;case"rise":t("heal",.6);break;case"monster":t("roar"),t(s.boss?"organ":"heart");break;case"hit":{ma()-hm>.06&&(hm=ma(),t(s.c?"crit":"punch",.55));break}case"matk":t(s.slam?"boom":"roar",s.slam?1:.5);break;case"mwin":t("fanfare"),t("cheer");break;case"mlose":t("trap"),t("ghost");break;case"riddle":t("organ"),t("chime");break;case"rwin":t("fanfare"),t("coin"),kc={id:s.id,a:s.a};break;case"rfail":t("ghost"),kc={id:0,a:s.a};break;case"climb":t(s.lift?"power":"creak",.6);break;case"gift":t("coin");break;case"summon":t("bell"),t("organ");break;case"follow":t("power");break;case"share":t("power");break;case"blaze":t("heal"),t("cheer");break;case"lowfuel":t("heart");break;case"end":t(s.reason==="top"?"fanfare":"bell"),s.reason==="top"&&t("cheer"),sy(s);break}s.k!=="hit"&&s.k!=="vote"&&Ri(s.k)}function ma(){return mi?ga:performance.now()/1e3}function iy(s=.7){let e=pi("flash");e.style.transition="none",e.style.opacity=String(s),e.offsetWidth,e.style.transition="opacity 0.9s ease-out",e.style.opacity="0"}var um=0;function Am(s,e,t){qi.say++;let n=Math.max(1800,(t||2)*1e3+600);dt&&dt.speaking(!0),clearTimeout(um),um=cy(()=>{dt&&dt.speaking(!1)},n),e&&mn.voice(e,t)}var Em=(s,e=10)=>(s=String(s||"?").replace(/\s+/g," ").trim(),[...s].length>e?[...s].slice(0,e-1).join("")+"\u2026":s);function sy(s){let e=(s.top||[]).filter(n=>xs.has(n));if(!e.length)return;pi("winName").textContent=Em(ty(e[0]),18),pi("winName").style.color=ny(e[0]);let t=pi("winner");t.hidden=!1,t.style.animation="none",t.offsetWidth,t.style.animation=""}function dm(s){if(!(!s||!s.session&&!s.all)&&(pd=s,s.signed))try{localStorage.setItem("lg_towerBoard",JSON.stringify(s.signed))}catch{}}var fm="",Uc={};function ry(s){let e=wr.__pr||1,t=qc/100;if(ke.setTransform(1,0,0,1,0,0),ke.clearRect(0,0,wr.width,wr.height),ke.setTransform(e,0,0,e,0,0),!dt||zs)return;let n=Cn,i=xm[Hn];ke.textAlign="center",ke.textBaseline="middle",ke.lineJoin="round";let r=(a,o)=>`${a} ${o}px -apple-system, "Segoe UI", Roboto, sans-serif`;if(n.nd&&["vote","reveal","treasure","trap","monster","riddle","victory","enter"].includes(n.phase)){let a=(n.vc||[]).reduce((l,c)=>l+c,0)||1,o=Math.max(0,...n.vc||[0]);for(let l=0;l<n.nd;l++){let c=dt.doorTop(l);if(!c||!c.vis)continue;let u=Math.max(xa*.3,Math.min(xa*.55,c.y-t*3));if(n.phase==="vote"||n.phase==="enter"){let p=n.vc&&n.vc[l]||0,d=p>0&&p===o,h=t*13;if(ke.fillStyle="rgba(10,4,24,0.55)",Co(c.x-h/2,u,h,t*1.3,t*.65),ke.fill(),ke.fillStyle=d?"#ffd36a":"rgba(255,230,170,0.75)",Co(c.x-h/2,u,Math.max(t*1.3,h*(p/a)),t*1.3,t*.65),p&&ke.fill(),n.pr===l){let m=1+Math.sin(s*6)*.08;ke.font=r(900,t*7*m),ke.fillText("\u{1F52E}",c.x,u-t*5)}}else if(n.kinds&&n.kinds[l]){let p=n.ch===l;ke.globalAlpha=p?1:.5,ke.font=r(900,t*(p?8:5)),ke.fillText(Ec[n.kinds[l]]||"",c.x,u-t*2),ke.globalAlpha=1}}}ay(s,t,i,r),oy(s,t),ke.globalAlpha=1}function ay(s,e,t,n){let i=Cn,a=(dt.drawn()||[]).filter(p=>!p.ghost).map(p=>({f:p,s:(p.flags&jt.cmd?8:0)+(p.flags&jt.crown?6:0)+(p.flags&jt.gift?5:0)+(p.flags&jt.bot?0:3)+(i.pdc===p.id?9:0)}));a.sort((p,d)=>d.s-p.s);let o=a.length>10,l=Math.round(e*(o?2.3:2.6)),c=[],u=0;for(let{f:p}of a){if(u>=t.labels)break;let d=dt.project(p.x,p.y,p.z);if(!d.vis||d.x<e*4||d.x>qc-e*4||d.y<xa*.24||d.y>xa*.8||c.some(v=>Math.abs(v.x-d.x)<e*10&&Math.abs(v.y-d.y)<e*3.4))continue;c.push(d),u++;let h=p.info||{},m=p.flags&jt.bot,b=(p.flags&jt.crown?"\u{1F451}":"")+Em(m?String(h.name||"").replace(/^Bot\s+/i,""):h.name,o?8:10)+(p.flags&jt.life?"\u2665":""),g=(m?.55:.92)*(1-Math.min(.5,u/(t.labels*2)));ke.globalAlpha=g,ke.font=n(700,l);let f=Math.min(ke.measureText(b).width,e*22),_=l*1.3,M=d.y-_*.4;ke.fillStyle="rgba(8,4,20,0.5)",Co(d.x-f/2-e,M-_/2,f+e*2,_,_/2),ke.fill(),ke.fillStyle="#"+((h.color??16777215)>>>0).toString(16).padStart(6,"0"),ke.fillText(b,d.x,M+1,e*22)}ke.globalAlpha=1}function oy(s,e){let t=Cn,n=t.phase;n!==fm&&(fm=n,Uc[n]=Math.max(1,t.tl||1)),t.tl>Uc[n]&&(Uc[n]=t.tl);let i=qc/2,r=xa*.135,a=e*4.6,o=["gather","vote","monster","boss","riddle"].includes(n)&&t.tl>0,l=o?Math.max(0,Math.min(1,t.tl/(Uc[n]||1))):1,c=Math.max(0,Math.min(100,t.fuel||0))/100,u=o&&(n==="vote"||n==="gather")&&t.tl<=5&&!(n==="gather"&&t.n<1),p=(n==="monster"||n==="boss")&&t.mo,d=p?"#ff6b8b":n==="riddle"?"#c77dff":n==="vote"?"#ffd36a":"#7ee0ff",h=u?1+.12*Math.max(0,Math.sin(t.tl%1*Math.PI)):1;ke.save(),ke.translate(i,r),ke.scale(h,h),ke.fillStyle="rgba(10,6,24,0.55)",ke.beginPath(),ke.arc(0,0,a+e*2.1,0,Math.PI*2),ke.fill(),ke.lineCap="round",ke.lineWidth=e*1.1,ke.strokeStyle="rgba(255,255,255,0.16)",ke.beginPath(),ke.arc(0,0,a,0,Math.PI*2),ke.stroke(),ke.strokeStyle=d,ke.beginPath(),ke.arc(0,0,a,-Math.PI/2,-Math.PI/2+Math.PI*2*l),ke.stroke();let m=c<.25&&n!=="gather"&&n!=="end";if(ke.lineWidth=e*.7,ke.strokeStyle="rgba(255,180,90,0.18)",ke.beginPath(),ke.arc(0,0,a+e*1.35,0,Math.PI*2),ke.stroke(),ke.strokeStyle=m&&Math.sin(s*10)>0?"#ff4a4a":"#ffb36b",c>0&&(ke.beginPath(),ke.arc(0,0,a+e*1.35,-Math.PI/2,-Math.PI/2+Math.PI*2*c),ke.stroke()),ke.textAlign="center",ke.textBaseline="middle",ke.fillStyle="#fff",u?(ke.font=`900 ${Math.round(e*4.4)}px -apple-system, "Segoe UI", Roboto, sans-serif`,ke.fillText(String(Math.ceil(t.tl)),0,e*.3)):(ke.font=`${Math.round(e*4)}px sans-serif`,ke.fillText(n==="riddle"?"\u2753":p?t.mo.b?"\u{1F47B}":t.mo.k==="spider"?"\u{1F577}\uFE0F":t.mo.k==="mimic"?"\u{1F4E6}":"\u{1F47B}":n==="end"?"\u{1F451}":"\u{1F3EE}",0,e*.3)),ke.restore(),t.sh){ke.font=`${Math.round(e*3.2)}px sans-serif`;for(let b=0;b<Math.min(3,t.sh);b++)ke.fillText("\u{1F6E1}\uFE0F",i+a+e*(5+b*3.6),r)}if(p){let b=e*26,g=Math.max(0,Math.min(1,t.mo.hp/t.mo.max)),f=r+a+e*4;ke.fillStyle="rgba(10,6,24,0.6)",Co(i-b/2,f,b,e*1.4,e*.7),ke.fill(),ke.fillStyle=t.mo.b?"#c77dff":"#ff4a6a",g>0&&(Co(i-b/2,f,b*g,e*1.4,e*.7),ke.fill())}}function Co(s,e,t,n,i){ke.beginPath(),ke.moveTo(s+i,e),ke.arcTo(s+t,e,s+t,e+n,i),ke.arcTo(s+t,e+n,s,e+n,i),ke.arcTo(s,e+n,s,e,i),ke.arcTo(s,e,s+t,e,i),ke.closePath()}var nd=-1;function ly(s){let e=Cn,t=document.body,n=e.phase==="monster"||e.phase==="boss",i=e.phase==="riddle"&&e.ri>=0,r=Math.max(0,Math.min(100,e.fuel));if(t.classList.toggle("dark",r<20&&e.phase!=="gather"),t.classList.toggle("voting",["enter","vote","reveal"].includes(e.phase)),t.classList.toggle("fighting",n&&!!e.mo),t.classList.toggle("riddling",i),(e.phase==="vote"||e.phase==="gather")&&e.tl<=5&&e.tl>0&&!(e.phase==="gather"&&e.n<1)){let a=Math.ceil(e.tl);a!==nd&&(nd=a,mn.sfx(e.phase==="vote"&&a<=3?"heart":"beep"))}else nd=-1;e.phase!=="end"&&(pi("winner").hidden=!0)}var Gc=[];function cy(s,e){if(!mi)return setTimeout(s,e);let t={at:ga+e/1e3,fn:s};return Gc.push(t),t}function hy(){for(let s=Gc.length-1;s>=0;s--)Gc[s].at<=ga&&Gc.splice(s,1)[0].fn()}function Rm(){pi("notice").hidden=!1}function Hc(){pi("notice").hidden=!0}var So=0,id=0,sd=0,To=0,rd=0,Oc=0,pm=0,mm=6,ad=new Map;function Cm(s,e){if(ba?Cn=Qv(s,e):Cn=Zv(e),ba&&wo(e),dt&&!zs)try{dt.frame(Cn,s,e)}catch{qi.err++,Ri("frame-err"),qi.err>30&&Wc()}dt&&dt.thunder()&&(mn.sfx("thunder"),iy(.35)),e>mm&&(mm=e+11+Math.random()*9,Cn.phase!=="monster"&&Cn.phase!=="boss"&&mn.sfx("wind",mn.now(),.5)),ry(e),e-pm>.25&&(pm=e,ly(e))}function uy(s){id++,!(s-sd<2)&&(To=id/(s-sd),id=0,sd=s,!(jv||mi||document.hidden)&&(s<6||(To<Eo*.8&&Hn<3?++rd>=2&&(ad.set(Hn,(ad.get(Hn)||0)+1),Hn++,rd=0,Oc=0,Gs(),Ri("q"+Hn)):(rd=0,To>=Eo*.95&&Hn>0&&(ad.get(Hn-1)||0)<2?++Oc>=6&&(Hn--,Oc=0,Gs(),Ri("q"+Hn)):Oc=0))))}function Pm(s){if(requestAnimationFrame(Pm),document.hidden)return;let e=s/1e3;if(So&&e-So<1/Eo-.004)return;let t=Math.min(.1,So?e-So:1/Eo);So=e,Cm(t,e),uy(e)}var ga=0;mi&&(mn.clock=()=>ga,window.__render={async frame(s){ga+=s,hy(),dt&&dt.ready&&!dt.loaded&&!dt.error&&await dt.ready.catch(()=>{});for(let e=0;e<100&&(wo.busy||Bs.length&&Bs[0].p&&dd);e++)await new Promise(t=>setTimeout(t,30));return Cm(s,ga),{phase:Cn.phase,n:Cn.n,floor:Cn.floor,fuel:Cn.fuel}},mix:s=>mn.mix(s),stats:()=>dt.stats()});var gm=!1;function dy(s){if(gm||Vc||ba||!od||!s||!/tikfinity|both/.test(s.source||""))return;gm=!0;let e=document.createElement("script");e.src="/shared/tikfinity.js",e.onload=()=>{let t=window.TikFinity;t.setSink(n=>{!Ei||Ei.readyState!==1||(n.type==="status"?Ei.send(JSON.stringify({t:"tf-status",state:n.mode==="live"?"connected":"waiting",message:n.message})):Ei.send(JSON.stringify({t:"tf",ev:n})))}),t.connect()},document.head.appendChild(e)}var fd=null;ym();Gs();ba?($v(),pd={session:[],all:[]}):cd();mi||(requestAnimationFrame(Pm),setInterval(()=>{!document.hidden&&!ba&&fetch("/healthz?overlay=1",{cache:"no-store"}).catch(()=>{})},4*6e4),fd=Jp(()=>({mode:{phone:Ao,ios:Vc,kind:dt?dt.kind:"none",game:"tower",q:Hn,fps:Math.round(To*10)/10,cap:Eo},cv:{w:Wi.width,h:Wi.height},gl:{...dt?dt.stats():{},lost:_m,restored:vm},n:{...qi},last:zc.slice(),audio:{unlocked:mn.state()==="running",ctx:mn.state(),played:mn.played,fails:mn.fails}}),{off:$t.get("diag")==="0"||ba}));window.__towerUI={get world(){return Cn},get level(){return Hn},get fps(){return To},get view(){return dt},stats:()=>dt?dt.stats():null,N:qi,audio:mn,roster:xs};})();
