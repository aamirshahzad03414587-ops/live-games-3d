(()=>{var yf=0,Hl=1,Mf=2;var fa=1,Sf=2,ur=3,ri=0,nn=1,sn=2,ys=0,Xi=1,kn=2,Vl=3,Wl=4,wf=5;var Ms=100,Af=101,Tf=102,Ef=103,Rf=104,Cf=200,Pf=201,If=202,Lf=203,ql=204,Xl=205,Df=206,Nf=207,Ff=208,Uf=209,kf=210,Of=211,Bf=212,zf=213,Gf=214,_o=0,vo=1,yo=2,js=3,Mo=4,So=5,wo=6,Ao=7,Xo=0,Hf=1,Vf=2,ai=0,jl=1,Kl=2,Jl=3,da=4,Yl=5,Zl=6,$l=7,Dl="attached",Wf="detached",Ql=300,Ss=301,fr=302,jo=303,Ko=304,Vi=1e3,Nn=1001,Ks=1002,kt=1003,Jo=1004;var ws=1005;var Vt=1006,dr=1007;var On=1008;var wn=1009,eh=1010,th=1011,pr=1012,Yo=1013,Jn=1014,Ln=1015,Yn=1016,Zo=1017,$o=1018,As=1020,nh=35902,ih=35899,sh=1021,rh=1022,Bn=1023,vi=1026,Pi=1027,Qo=1028,ec=1029,ji=1030,tc=1031;var nc=1033,pa=33776,ma=33777,ga=33778,ba=33779,ic=35840,sc=35841,rc=35842,ac=35843,oc=36196,cc=37492,lc=37496,hc=37488,uc=37489,xa=37490,fc=37491,dc=37808,pc=37809,mc=37810,gc=37811,bc=37812,xc=37813,_c=37814,vc=37815,yc=37816,Mc=37817,Sc=37818,wc=37819,Ac=37820,Tc=37821,Ec=36492,Rc=36494,Cc=36495,Pc=36283,Ic=36284,_a=36285,Lc=36286,Dc=2200,va=2201,qf=2202,os=2300,cs=2301,bo=2302,Nl=2303,ss=2400,rs=2401,zr=2402,Nc=2500,Xf=2501,ah=0,ya=1,mr=2,jf=3200;var Ma=0,Kf=1,Ii="",At="srgb",mn="srgb-linear",Gr="linear",mt="srgb";var xo=7680;var Jf=519,Yf=512,Zf=513,$f=514,oh=515,Qf=516,ed=517,ch=518,lh=519,hh=35044;var uh="300 es",Fn=2e3,Js=2001;function qp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ys(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function td(){let s=Ys("canvas");return s.style.display="block",s}var Nu={},Zs=null;function Hr(...s){let e="THREE."+s.shift();Zs?Zs("log",e,...s):console.log(e,...s)}function nd(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Fe(...s){s=nd(s);let e="THREE."+s.shift();if(Zs)Zs("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Je(...s){s=nd(s);let e="THREE."+s.shift();if(Zs)Zs("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function as(...s){let e=s.join(" ");e in Nu||(Nu[e]=!0,Fe(...s))}function id(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var sd={[_o]:_o,[yo]:wo,[Mo]:Mo,[js]:So,[vo]:vo,[wo]:yo,[Ao]:Ao,[So]:js},Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fu=1234567,Or=Math.PI/180,ls=180/Math.PI;function oi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[s&255]+on[s>>8&255]+on[s>>16&255]+on[s>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function lt(s,e,t){return Math.max(e,Math.min(t,s))}function fh(s,e){return(s%e+e)%e}function jp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Kp(s,e,t){return s!==e?(t-s)/(e-s):0}function Br(s,e,t){return(1-t)*s+t*e}function Jp(s,e,t,n){return Br(s,e,1-Math.exp(-t*n))}function Yp(s,e=1){return e-Math.abs(fh(s,e*2)-e)}function Zp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function $p(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Qp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function em(s,e){return s+Math.random()*(e-s)}function tm(s){return s*(.5-Math.random())}function nm(s){s!==void 0&&(Fu=s);let e=Fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function im(s){return s*Or}function sm(s){return s*ls}function rm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function am(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function dh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function om(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),u=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*d,c*f,o*l);break;case"YZY":s.set(c*f,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*f,o*h,o*l);break;case"XZX":s.set(o*h,c*p,c*u,o*l);break;case"YXY":s.set(c*u,o*h,c*p,o*l);break;case"ZYZ":s.set(c*p,c*u,o*h,o*l);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ph(s,e){if(e.constructor===Float32Array)return s;let t=Fc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function mh(s,e){if(e.constructor===Float32Array)return s;let t=Fc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var zt={DEG2RAD:Or,RAD2DEG:ls,generateUUID:oi,clamp:lt,euclideanModulo:fh,mapLinear:jp,inverseLerp:Kp,lerp:Br,damp:Jp,pingpong:Yp,smoothstep:Zp,smootherstep:$p,randInt:Qp,randFloat:em,randFloatSpread:tm,seededRandom:nm,degToRad:im,radToDeg:sm,isPowerOfTwo:rm,ceilPowerOfTwo:am,floorPowerOfTwo:dh,setQuaternionFromProperEuler:om,normalize:mh,denormalize:ph},vh=class vh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vh.prototype.isVector2=!0;var $e=vh,$t=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],f=r[a+0],u=r[a+1],p=r[a+2],b=r[a+3];if(d!==b||c!==f||l!==u||h!==p){let g=c*f+l*u+h*p+d*b;g<0&&(f=-f,u=-u,p=-p,b=-b,g=-g);let m=1-o;if(g<.9995){let _=Math.acos(g),w=Math.sin(_);m=Math.sin(m*_)/w,o=Math.sin(o*_)/w,c=c*m+f*o,l=l*m+u*o,h=h*m+p*o,d=d*m+b*o}else{c=c*m+f*o,l=l*m+u*o,h=h*m+p*o,d=d*m+b*o;let _=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=_,l*=_,h*=_,d*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],f=r[a+1],u=r[a+2],p=r[a+3];return e[t]=o*p+h*d+c*u-l*f,e[t+1]=c*p+h*f+l*d-o*u,e[t+2]=l*p+h*u+o*f-c*d,e[t+3]=h*p-o*d-c*f-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),f=c(n/2),u=c(i/2),p=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d+f*u*p;break;case"YZX":this._x=f*h*d+l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d-f*u*p;break;case"XZY":this._x=f*h*d-l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d+f*u*p;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-i)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+l)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(r-l)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},yh=class yh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yh.prototype.isVector3=!0;var W=yh,ll=new W,Uu=new $t,Mh=class Mh{constructor(e,t,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],b=i[0],g=i[3],m=i[6],_=i[1],w=i[4],S=i[7],T=i[2],v=i[5],x=i[8];return r[0]=a*b+o*_+c*T,r[3]=a*g+o*w+c*v,r[6]=a*m+o*S+c*x,r[1]=l*b+h*_+d*T,r[4]=l*g+h*w+d*v,r[7]=l*m+h*S+d*x,r[2]=f*b+u*_+p*T,r[5]=f*g+u*w+p*v,r[8]=f*m+u*S+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*r,u=l*r-a*c,p=t*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return e[0]=d*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=f*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=u*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hl.makeScale(e,t)),this}rotate(e){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hl.makeRotation(-e)),this}translate(e,t){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mh.prototype.isMatrix3=!0;var Qe=Mh,hl=new Qe,ku=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ou=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cm(){let s={enabled:!0,workingColorSpace:mn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(i.r=_i(i.r),i.g=_i(i.g),i.b=_i(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(i.r=Xs(i.r),i.g=Xs(i.g),i.b=Xs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ii?Gr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[mn]:{primaries:e,whitePoint:n,transfer:Gr,toXYZ:ku,fromXYZ:Ou,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:ku,fromXYZ:Ou,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),s}var at=cm();function _i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ls,To=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=Ys("canvas")),Ls.width=e.width,Ls.height=e.height;let i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=_i(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lm=0,$s=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ul(i[a].image)):r.push(ul(i[a]))}else r=ul(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ul(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?To.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}var hm=0,fl=new W,Wt=class s extends Kn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Nn,i=Nn,r=Vt,a=On,o=Bn,c=wn,l=s.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=oi(),this.name="",this.source=new $s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(fl).x}get height(){return this.source.getSize(fl).y}get depth(){return this.source.getSize(fl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case Ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case Ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Ql;Wt.DEFAULT_ANISOTROPY=1;var Sh=class Sh{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],p=c[9],b=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-b)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+b)<.1&&Math.abs(p+g)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,S=(u+1)/2,T=(m+1)/2,v=(h+f)/4,x=(d+b)/4,M=(p+g)/4;return w>S&&w>T?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=v/n,r=x/n):S>T?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=v/i,r=M/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=x/r,i=M/r),this.set(n,i,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(d-b)*(d-b)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(d-b)/_,this.z=(f-h)/_,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sh.prototype.isVector4=!0;var xt=Sh,Eo=class extends Kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Wt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new $s(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Eo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vr=class extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ro=class extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qo=class qo{constructor(e,t,n,i,r,a,o,c,l,h,d,f,u,p,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,d,f,u,p,b,g)}set(e,t,n,i,r,a,o,c,l,h,d,f,u,p,b,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=f,m[3]=u,m[7]=p,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*h,u=a*d,p=o*h,b=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=u+p*l,t[5]=f-b*l,t[9]=-o*c,t[2]=b-f*l,t[6]=p+u*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,u=c*d,p=l*h,b=l*d;t[0]=f+b*o,t[4]=p*o-u,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-p,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,u=c*d,p=l*h,b=l*d;t[0]=f-b*o,t[4]=-a*d,t[8]=p+u*o,t[1]=u+p*o,t[5]=a*h,t[9]=b-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,u=a*d,p=o*h,b=o*d;t[0]=c*h,t[4]=p*l-u,t[8]=f*l+b,t[1]=c*d,t[5]=b*l+f,t[9]=u*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,u=a*l,p=o*c,b=o*l;t[0]=c*h,t[4]=b-f*d,t[8]=p*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*d+p,t[10]=f-b*d}else if(e.order==="XZY"){let f=a*c,u=a*l,p=o*c,b=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+b,t[5]=a*h,t[9]=u*d-p,t[2]=p*d-u,t[6]=o*h,t[10]=b*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(um,e,fm)}lookAt(e,t,n){let i=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ui.crossVectors(n,Rn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ui.crossVectors(n,Rn)),Ui.normalize(),qa.crossVectors(Rn,Ui),i[0]=Ui.x,i[4]=qa.x,i[8]=Rn.x,i[1]=Ui.y,i[5]=qa.y,i[9]=Rn.y,i[2]=Ui.z,i[6]=qa.z,i[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],b=n[6],g=n[10],m=n[14],_=n[3],w=n[7],S=n[11],T=n[15],v=i[0],x=i[4],M=i[8],L=i[12],C=i[1],D=i[5],U=i[9],X=i[13],I=i[2],z=i[6],Z=i[10],$=i[14],j=i[3],H=i[7],J=i[11],ee=i[15];return r[0]=a*v+o*C+c*I+l*j,r[4]=a*x+o*D+c*z+l*H,r[8]=a*M+o*U+c*Z+l*J,r[12]=a*L+o*X+c*$+l*ee,r[1]=h*v+d*C+f*I+u*j,r[5]=h*x+d*D+f*z+u*H,r[9]=h*M+d*U+f*Z+u*J,r[13]=h*L+d*X+f*$+u*ee,r[2]=p*v+b*C+g*I+m*j,r[6]=p*x+b*D+g*z+m*H,r[10]=p*M+b*U+g*Z+m*J,r[14]=p*L+b*X+g*$+m*ee,r[3]=_*v+w*C+S*I+T*j,r[7]=_*x+w*D+S*z+T*H,r[11]=_*M+w*U+S*Z+T*J,r[15]=_*L+w*X+S*$+T*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],u=e[14],p=e[3],b=e[7],g=e[11],m=e[15],_=c*u-l*f,w=o*u-l*d,S=o*f-c*d,T=a*u-l*h,v=a*f-c*h,x=a*d-o*h;return t*(b*_-g*w+m*S)-n*(p*_-g*T+m*v)+i*(p*w-b*T+m*x)-r*(p*S-b*v+g*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],u=e[11],p=e[12],b=e[13],g=e[14],m=e[15],_=t*o-n*a,w=t*c-i*a,S=t*l-r*a,T=n*c-i*o,v=n*l-r*o,x=i*l-r*c,M=h*b-d*p,L=h*g-f*p,C=h*m-u*p,D=d*g-f*b,U=d*m-u*b,X=f*m-u*g,I=_*X-w*U+S*D+T*C-v*L+x*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return e[0]=(o*X-c*U+l*D)*z,e[1]=(i*U-n*X-r*D)*z,e[2]=(b*x-g*v+m*T)*z,e[3]=(f*v-d*x-u*T)*z,e[4]=(c*C-a*X-l*L)*z,e[5]=(t*X-i*C+r*L)*z,e[6]=(g*S-p*x-m*w)*z,e[7]=(h*x-f*S+u*w)*z,e[8]=(a*U-o*C+l*M)*z,e[9]=(n*C-t*U-r*M)*z,e[10]=(p*v-b*S+m*_)*z,e[11]=(d*S-h*v-u*_)*z,e[12]=(o*L-a*D-c*M)*z,e[13]=(t*D-n*L+i*M)*z,e[14]=(b*w-p*T-g*_)*z,e[15]=(h*T-d*w+f*_)*z,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,f=r*l,u=r*h,p=r*d,b=a*h,g=a*d,m=o*d,_=c*l,w=c*h,S=c*d,T=n.x,v=n.y,x=n.z;return i[0]=(1-(b+m))*T,i[1]=(u+S)*T,i[2]=(p-w)*T,i[3]=0,i[4]=(u-S)*v,i[5]=(1-(f+m))*v,i[6]=(g+_)*v,i[7]=0,i[8]=(p+w)*x,i[9]=(g-_)*x,i[10]=(1-(f+b))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ds.set(i[0],i[1],i[2]).length(),o=Ds.set(i[4],i[5],i[6]).length(),c=Ds.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Wn.copy(this);let l=1/a,h=1/o,d=1/c;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,t.setFromRotationMatrix(Wn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=Fn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i),p,b;if(c)p=r/(a-r),b=a*r/(a-r);else if(o===Fn)p=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Js)p=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Fn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),u=-(n+i)/(n-i),p,b;if(c)p=1/(a-r),b=a/(a-r);else if(o===Fn)p=-2/(a-r),b=-(a+r)/(a-r);else if(o===Js)p=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};qo.prototype.isMatrix4=!0;var He=qo,Ds=new W,Wn=new He,um=new W(0,0,0),fm=new W(1,1,1),Ui=new W,qa=new W,Rn=new W,Bu=new He,zu=new $t,Un=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zu.setFromEuler(this),this.setFromQuaternion(zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dm=0,Gu=new W,Ns=new $t,di=new He,Xa=new W,Cr=new W,pm=new W,mm=new $t,Hu=new W(1,0,0),Vu=new W(0,1,0),Wu=new W(0,0,1),qu={type:"added"},gm={type:"removed"},Fs={type:"childadded",child:null},dl={type:"childremoved",child:null},vt=class s extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new W,t=new Un,n=new $t,i=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new Qe}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Hu,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis(Wu,e)}translateOnAxis(e,t){return Gu.copy(e).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hu,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis(Wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xa.copy(e):Xa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Cr,Xa,this.up):di.lookAt(Xa,Cr,this.up),this.quaternion.setFromRotationMatrix(di),i&&(di.extractRotation(i.matrixWorld),Ns.setFromRotationMatrix(di),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qu),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gm),dl.child=e,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qu),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),u=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vt.DEFAULT_UP=new W(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},bm={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),m=this._getHandJoint(l,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;l.inputState.pinching&&f>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bm)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},ja={h:0,s:0,l:0};function pl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=fh(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=pl(a,r,e+1/3),this.g=pl(a,r,e),this.b=pl(a,r,e-1/3)}return at.colorSpaceToWorking(this,i),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=rd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return at.workingToColorSpace(cn.copy(this),e),Math.round(lt(cn.r*255,0,255))*65536+Math.round(lt(cn.g*255,0,255))*256+Math.round(lt(cn.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(cn.copy(this),t);let n=cn.r,i=cn.g,r=cn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=At){at.workingToColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,i=cn.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(ja);let n=Br(ki.h,ja.h,t),i=Br(ki.s,ja.s,t),r=Br(ki.l,ja.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Pe;Pe.NAMES=rd;var qr=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Xr=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},qn=new W,pi=new W,ml=new W,mi=new W,Us=new W,ks=new W,Xu=new W,gl=new W,bl=new W,xl=new W,_l=new xt,vl=new xt,yl=new xt,Hi=class s{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qn.subVectors(e,t),i.cross(qn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){qn.subVectors(i,t),pi.subVectors(n,t),ml.subVectors(e,t);let a=qn.dot(qn),o=qn.dot(pi),c=qn.dot(ml),l=pi.dot(pi),h=pi.dot(ml),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(l*c-o*h)*f,p=(a*h-o*c)*f;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mi.x),c.addScaledVector(a,mi.y),c.addScaledVector(o,mi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return _l.setScalar(0),vl.setScalar(0),yl.setScalar(0),_l.fromBufferAttribute(e,t),vl.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(_l,r.x),a.addScaledVector(vl,r.y),a.addScaledVector(yl,r.z),a}static isFrontFacing(e,t,n,i){return qn.subVectors(n,t),pi.subVectors(e,t),qn.cross(pi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),qn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Us.subVectors(i,n),ks.subVectors(r,n),gl.subVectors(e,n);let c=Us.dot(gl),l=ks.dot(gl);if(c<=0&&l<=0)return t.copy(n);bl.subVectors(e,i);let h=Us.dot(bl),d=ks.dot(bl);if(h>=0&&d<=h)return t.copy(i);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Us,a);xl.subVectors(e,r);let u=Us.dot(xl),p=ks.dot(xl);if(p>=0&&u<=p)return t.copy(r);let b=u*l-c*p;if(b<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(ks,o);let g=h*p-u*d;if(g<=0&&d-h>=0&&u-p>=0)return Xu.subVectors(r,i),o=(d-h)/(d-h+(u-p)),t.copy(i).addScaledVector(Xu,o);let m=1/(g+b+f);return a=b*m,o=f*m,t.copy(n).addScaledVector(Us,a).addScaledVector(ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},In=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(r,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ka.copy(n.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),Ja.subVectors(this.max,Pr),Os.subVectors(e.a,Pr),Bs.subVectors(e.b,Pr),zs.subVectors(e.c,Pr),Oi.subVectors(Bs,Os),Bi.subVectors(zs,Bs),es.subVectors(Os,zs);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-es.z,es.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,es.z,0,-es.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-es.y,es.x,0];return!Ml(t,Os,Bs,zs,Ja)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,Os,Bs,zs,Ja))?!1:(Ya.crossVectors(Oi,Bi),t=[Ya.x,Ya.y,Ya.z],Ml(t,Os,Bs,zs,Ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gi=[new W,new W,new W,new W,new W,new W,new W,new W],Xn=new W,Ka=new In,Os=new W,Bs=new W,zs=new W,Oi=new W,Bi=new W,es=new W,Pr=new W,Ja=new W,Ya=new W,ts=new W;function Ml(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ts.fromArray(s,r);let o=i.x*Math.abs(ts.x)+i.y*Math.abs(ts.y)+i.z*Math.abs(ts.z),c=e.dot(ts),l=t.dot(ts),h=n.dot(ts);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Bt=new W,Za=new $e,xm=0,nt=class extends Kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hh,this.updateRanges=[],this.gpuType=Ln,this.version=0,this._normalizationScale=e!==void 0?Fc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ph(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):mh(e,this.array)}};var jr=class extends nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Kr=class extends nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},_m=new In,Ir=new W,Sl=new W,qt=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_m.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);let t=Ir.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ir,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(Sl)),this.expandByPoint(Ir.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vm=0,Dn=new He,wl=new vt,Gs=new W,Cn=new In,Lr=new In,Zt=new W,Ct=class s extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qp(e)?Kr:jr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Cn.min,Lr.min),Cn.expandByPoint(Zt),Zt.addVectors(Cn.max,Lr.max),Cn.expandByPoint(Zt)):(Cn.expandByPoint(Lr.min),Cn.expandByPoint(Lr.max))}Cn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Zt.fromBufferAttribute(o,l),c&&(Gs.fromBufferAttribute(e,l),Zt.add(Gs)),i=Math.max(i,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new nt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new W,c[L]=new W;let h=new W,d=new W,f=new W,u=new $e,p=new $e,b=new $e,g=new W,m=new W;function _(L,C,D){l[L]=l[C]=l[D]=1,h.fromBufferAttribute(n,L),d.fromBufferAttribute(n,C),f.fromBufferAttribute(n,D),u.fromBufferAttribute(r,L),p.fromBufferAttribute(r,C),b.fromBufferAttribute(r,D),d.sub(h),f.sub(h),p.sub(u),b.sub(u);let U=1/(p.x*b.y-b.x*p.y);isFinite(U)&&(g.copy(d).multiplyScalar(b.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-b.x).multiplyScalar(U),o[L].add(g),o[C].add(g),o[D].add(g),c[L].add(m),c[C].add(m),c[D].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,C=w.length;L<C;++L){let D=w[L],U=D.start,X=D.count;for(let I=U,z=U+X;I<z;I+=3)_(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let S=new W,T=new W,v=new W,x=new W;function M(L){v.fromBufferAttribute(i,L),x.copy(v);let C=o[L];S.copy(C),S.sub(v.multiplyScalar(v.dot(C))).normalize(),T.crossVectors(x,C);let U=T.dot(c[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,U)}for(let L=0,C=n.count;L<C;++L)l[L]&&M(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new W,r=new W,a=new W,o=new W,c=new W,l=new W,h=new W,d=new W;if(e)for(let f=0,u=e.count;f<u;f+=3){let p=e.getX(f+0),b=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h),u=0,p=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?u=c[b]*o.data.stride+o.offset:u=c[b]*h;for(let m=0;m<h;m++)f[p++]=l[u++]}return new nt(f,h,d)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let f=l[h],u=e(f,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let u=l[d];h.push(u.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},er=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hh,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ju(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ju(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function ju(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=oi()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var dn=new W,tr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Fc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Hr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Hr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ph(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):mh(e,this.data.array)}},Al=new W,ym=new W,Mm=new Qe,jn=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Al.subVectors(n,t).cross(ym.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Al),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mm.getNormalMatrix(e),i=this.coplanarPoint(Al).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Sm=0,gn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Xi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=Xl,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new jn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var bi=new W,Tl=new W,$a=new W,Qa=new W,hs=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Tl.copy(e).add(t).multiplyScalar(.5),$a.copy(t).sub(e).normalize(),Qa.copy(this.origin).sub(Tl);let r=e.distanceTo(t)*.5,a=-this.direction.dot($a),o=Qa.dot(this.direction),c=-Qa.dot($a),l=Qa.lengthSq(),h=Math.abs(1-a*a),d,f,u,p;if(h>0)if(d=a*c-o,f=a*o-c,p=r*h,d>=0)if(f>=-p)if(f<=p){let b=1/h;d*=b,f*=b,u=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f<=-p?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l):f<=p?(d=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Tl).addScaledVector($a,f),u}intersectSphere(e,t){if(e.radius<0)return null;bi.subVectors(e.center,this.origin);let n=bi.dot(this.direction),i=bi.dot(bi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,f=e.y-a.y,u=e.z-a.z,p=t.x-a.x,b=t.y-a.y,g=t.z-a.z,m=n.x-a.x,_=n.y-a.y,w=n.z-a.z,S=Math.abs(c),T=Math.abs(l),v=Math.abs(h),x,M,L,C,D,U,X,I,z,Z,$,j;if(S>=T&&S>=v?(L=c,U=d,z=p,j=m,c>=0?(x=l,M=h,C=f,D=u,X=b,I=g,Z=_,$=w):(x=h,M=l,C=u,D=f,X=g,I=b,Z=w,$=_)):T>=v?(L=l,U=f,z=b,j=_,l>=0?(x=h,M=c,C=u,D=d,X=g,I=p,Z=w,$=m):(x=c,M=h,C=d,D=u,X=p,I=g,Z=m,$=w)):(L=h,U=u,z=g,j=w,h>=0?(x=c,M=l,C=d,D=f,X=p,I=b,Z=m,$=_):(x=l,M=c,C=f,D=d,X=b,I=p,Z=_,$=m)),L===0)return null;let H=x/L,J=M/L,ee=1/L,we=C-H*U,Ae=D-J*U,ne=X-H*z,Me=I-J*z,Te=Z-H*j,De=$-J*j,Ee=Te*Me-De*ne,Oe=we*De-Ae*Te,bt=ne*Ae-Me*we;if(i){if(Ee<0||Oe<0||bt<0)return null}else if((Ee<0||Oe<0||bt<0)&&(Ee>0||Oe>0||bt>0))return null;let Be=Ee+Oe+bt;if(Be===0)return null;let ht=ee*(Ee*U+Oe*z+bt*j);return(Be>0?ht<0:ht>0)?null:this.at(ht/Be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class extends gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ku=new He,ns=new hs,eo=new qt,Ju=new W,to=new W,no=new W,io=new W,El=new W,so=new W,Yu=new W,ro=new W,Pt=class extends vt{constructor(e=new Ct,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){so.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(El.fromBufferAttribute(d,e),a?so.addScaledVector(El,h):so.addScaledVector(El.sub(t),h))}t.add(so)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(eo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(eo,Ju)===null||ns.origin.distanceToSquared(Ju)>(e.far-e.near)**2))&&(Ku.copy(r).invert(),ns.copy(e.ray).applyMatrix4(Ku),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,b=f.length;p<b;p++){let g=f[p],m=a[g.materialIndex],_=Math.max(g.start,u.start),w=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let S=_,T=w;S<T;S+=3){let v=o.getX(S),x=o.getX(S+1),M=o.getX(S+2);i=ao(this,m,e,n,l,h,d,v,x,M),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,u.start),b=Math.min(o.count,u.start+u.count);for(let g=p,m=b;g<m;g+=3){let _=o.getX(g),w=o.getX(g+1),S=o.getX(g+2);i=ao(this,a,e,n,l,h,d,_,w,S),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,b=f.length;p<b;p++){let g=f[p],m=a[g.materialIndex],_=Math.max(g.start,u.start),w=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let S=_,T=w;S<T;S+=3){let v=S,x=S+1,M=S+2;i=ao(this,m,e,n,l,h,d,v,x,M),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,u.start),b=Math.min(c.count,u.start+u.count);for(let g=p,m=b;g<m;g+=3){let _=g,w=g+1,S=g+2;i=ao(this,a,e,n,l,h,d,_,w,S),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function wm(s,e,t,n,i,r,a,o){let c;if(e.side===nn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===ri,o),c===null)return null;ro.copy(o),ro.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(ro);return l<t.near||l>t.far?null:{distance:l,point:ro.clone(),object:s}}function ao(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,to),s.getVertexPosition(c,no),s.getVertexPosition(l,io);let h=wm(s,e,t,n,to,no,io,Yu);if(h){let d=new W;Hi.getBarycoord(Yu,to,no,io,d),i&&(h.uv=Hi.getInterpolatedAttribute(i,o,c,l,d,new $e)),r&&(h.uv1=Hi.getInterpolatedAttribute(r,o,c,l,d,new $e)),a&&(h.normal=Hi.getInterpolatedAttribute(a,o,c,l,d,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new W,materialIndex:0};Hi.getNormal(to,no,io,f.normal),h.face=f,h.barycoord=d}return h}var Dr=new xt,Zu=new xt,$u=new xt,Am=new xt,Qu=new He,oo=new W,Rl=new qt,ef=new He,Cl=new hs,us=class extends Pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dl,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new In),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oo),this.boundingBox.expandByPoint(oo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oo),this.boundingSphere.expandByPoint(oo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rl.copy(this.boundingSphere),Rl.applyMatrix4(i),e.ray.intersectsSphere(Rl)!==!1&&(ef.copy(i).invert(),Cl.copy(e.ray).applyMatrix4(ef),!(this.boundingBox!==null&&Cl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Zu.fromBufferAttribute(i.attributes.skinIndex,e),$u.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Dr.copy(t),t.set(0,0,0,0)):(Dr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Dr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=$u.getComponent(r);if(a!==0){let o=Zu.getComponent(r);Qu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Am.copy(Dr).applyMatrix4(Qu),a)}}return t.isVector4&&(t.w=Dr.w),t.applyMatrix4(this.bindMatrixInverse)}},nr=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ir=class extends Wt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=kt,h=kt,d,f){super(null,a,o,c,l,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tf=new He,Tm=new He,fs=class s{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Tm;tf.multiplyMatrices(o,t[r]),tf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ir(t,e,e,Bn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Fe("Skeleton: No bone found with UUID:",r),a=new nr),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},yi=class extends nt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hs=new He,nf=new He,co=[],sf=new In,Em=new He,Nr=new Pt,Fr=new qt,Mn=class extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Em)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),sf.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(sf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Fr.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Hs),nf.multiplyMatrices(n,Hs),Nr.matrixWorld=nf,Nr.raycast(e,co);for(let a=0,o=co.length;a<o;a++){let c=co[a];c.instanceId=r,c.object=this,t.push(c)}co.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ir(new Float32Array(i*this.count),i,this.count,Qo,Ln));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},is=new qt,Rm=new $e(.5,.5),lo=new W,Wi=class{constructor(e=new jn,t=new jn,n=new jn,i=new jn,r=new jn,a=new jn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],b=r[9],g=r[10],m=r[11],_=r[12],w=r[13],S=r[14],T=r[15];if(i[0].setComponents(l-a,u-h,m-p,T-_).normalize(),i[1].setComponents(l+a,u+h,m+p,T+_).normalize(),i[2].setComponents(l+o,u+d,m+b,T+w).normalize(),i[3].setComponents(l-o,u-d,m-b,T-w).normalize(),n)i[4].setComponents(c,f,g,S).normalize(),i[5].setComponents(l-c,u-f,m-g,T-S).normalize();else if(i[4].setComponents(l-c,u-f,m-g,T-S).normalize(),t===Fn)i[5].setComponents(l+c,u+f,m+g,T+S).normalize();else if(t===Js)i[5].setComponents(c,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);let t=Rm.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(lo.x=i.normal.x>0?e.max.x:e.min.x,lo.y=i.normal.y>0?e.max.y:e.min.y,lo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},rf=new He,Co=class s{constructor(){this.coordinateSystem=Fn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];rf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Wi),n[i].setFromProjectionMatrix(rf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Wi),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var sr=class extends gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Po=new W,Io=new W,af=new He,Ur=new hs,ho=new qt,Pl=new W,of=new W,ds=class extends vt{constructor(e=new Ct,t=new sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Po.fromBufferAttribute(t,i-1),Io.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Po.distanceTo(Io);e.setAttribute("lineDistance",new gt(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(i),ho.radius+=r,e.ray.intersectsSphere(ho)===!1)return;af.copy(i).invert(),Ur.copy(e.ray).applyMatrix4(af);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let b=u,g=p-1;b<g;b+=l){let m=h.getX(b),_=h.getX(b+1),w=uo(this,e,Ur,c,m,_,b);w&&t.push(w)}if(this.isLineLoop){let b=h.getX(p-1),g=h.getX(u),m=uo(this,e,Ur,c,b,g,p-1);m&&t.push(m)}}else{let u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let b=u,g=p-1;b<g;b+=l){let m=uo(this,e,Ur,c,b,b+1,b);m&&t.push(m)}if(this.isLineLoop){let b=uo(this,e,Ur,c,p-1,u,p-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function uo(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Po.fromBufferAttribute(o,i),Io.fromBufferAttribute(o,r),t.distanceSqToSegment(Po,Io,Pl,of)>n)return;Pl.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Pl);if(!(l<e.near||l>e.far))return{distance:l,point:of.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var cf=new W,lf=new W,Jr=class extends ds{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)cf.fromBufferAttribute(t,i),lf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+cf.distanceTo(lf);e.setAttribute("lineDistance",new gt(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Yr=class extends ds{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},rr=class extends gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hf=new He,Fl=new hs,fo=new qt,po=new W,ps=class extends vt{constructor(e=new Ct,t=new rr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(i),fo.radius+=r,e.ray.intersectsSphere(fo)===!1)return;hf.copy(i).invert(),Fl.copy(e.ray).applyMatrix4(hf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let p=f,b=u;p<b;p++){let g=l.getX(p);po.fromBufferAttribute(d,g),uf(po,g,c,i,e,t,this)}}else{let f=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let p=f,b=u;p<b;p++)po.fromBufferAttribute(d,p),uf(po,p,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function uf(s,e,t,n,i,r,a){let o=Fl.distanceSqToPoint(s);if(o<t){let c=new W;Fl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Zr=class extends Wt{constructor(e=[],t=Ss,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$r=class extends Wt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Mi=class extends Wt{constructor(e,t,n=Jn,i,r,a,o=kt,c=kt,l,h=vi,d=1){if(h!==vi&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Qr=class extends Mi{constructor(e,t=Jn,n=Ss,i,r,a=kt,o=kt,c,l=vi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ea=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ar=class s extends Ct{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],f=0,u=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function p(b,g,m,_,w,S,T,v,x,M,L){let C=S/x,D=T/M,U=S/2,X=T/2,I=v/2,z=x+1,Z=M+1,$=0,j=0,H=new W;for(let J=0;J<Z;J++){let ee=J*D-X;for(let we=0;we<z;we++){let Ae=we*C-U;H[b]=Ae*_,H[g]=ee*w,H[m]=I,l.push(H.x,H.y,H.z),H[b]=0,H[g]=0,H[m]=v>0?1:-1,h.push(H.x,H.y,H.z),d.push(we/x),d.push(1-J/M),$+=1}}for(let J=0;J<M;J++)for(let ee=0;ee<x;ee++){let we=f+ee+z*J,Ae=f+ee+z*(J+1),ne=f+(ee+1)+z*(J+1),Me=f+(ee+1)+z*J;c.push(we,Ae,Me),c.push(Ae,ne,Me),j+=6}o.addGroup(u,j,L),u+=j,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ms=class s extends Ct{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new W,h=new $e;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let u=n+d/t*i;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Si=class s extends Ct{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],f=[],u=[],p=0,b=[],g=n/2,m=0;_(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(u,2));function _(){let S=new W,T=new W,v=0,x=(t-e)/n;for(let M=0;M<=r;M++){let L=[],C=M/r,D=C*(t-e)+e;for(let U=0;U<=i;U++){let X=U/i,I=X*c+o,z=Math.sin(I),Z=Math.cos(I);T.x=D*z,T.y=-C*n+g,T.z=D*Z,d.push(T.x,T.y,T.z),S.set(z,x,Z).normalize(),f.push(S.x,S.y,S.z),u.push(X,1-C),L.push(p++)}b.push(L)}for(let M=0;M<i;M++)for(let L=0;L<r;L++){let C=b[L][M],D=b[L+1][M],U=b[L+1][M+1],X=b[L][M+1];(e>0||L!==0)&&(h.push(C,D,X),v+=3),(t>0||L!==r-1)&&(h.push(D,U,X),v+=3)}l.addGroup(m,v,0),m+=v}function w(S){let T=p,v=new $e,x=new W,M=0,L=S===!0?e:t,C=S===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,g*C,0),f.push(0,C,0),u.push(.5,.5),p++;let D=p;for(let U=0;U<=i;U++){let I=U/i*c+o,z=Math.cos(I),Z=Math.sin(I);x.x=L*Z,x.y=g*C,x.z=L*z,d.push(x.x,x.y,x.z),f.push(0,C,0),v.x=z*.5+.5,v.y=Z*.5*C+.5,u.push(v.x,v.y),p++}for(let U=0;U<i;U++){let X=T+U,I=D+U;S===!0?h.push(I,I+1,X):h.push(I+1,I,X),M+=3}l.addGroup(m,M,S===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Lo=class s extends Ct{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let w=new W,S=new W,T=new W;for(let v=0;v<t.length;v+=3)u(t[v+0],w),u(t[v+1],S),u(t[v+2],T),c(w,S,T,_)}function c(_,w,S,T){let v=T+1,x=[];for(let M=0;M<=v;M++){x[M]=[];let L=_.clone().lerp(S,M/v),C=w.clone().lerp(S,M/v),D=v-M;for(let U=0;U<=D;U++)U===0&&M===v?x[M][U]=L:x[M][U]=L.clone().lerp(C,U/D)}for(let M=0;M<v;M++)for(let L=0;L<2*(v-M)-1;L++){let C=Math.floor(L/2);L%2===0?(f(x[M][C+1]),f(x[M+1][C]),f(x[M][C])):(f(x[M][C+1]),f(x[M+1][C+1]),f(x[M+1][C]))}}function l(_){let w=new W;for(let S=0;S<r.length;S+=3)w.x=r[S+0],w.y=r[S+1],w.z=r[S+2],w.normalize().multiplyScalar(_),r[S+0]=w.x,r[S+1]=w.y,r[S+2]=w.z}function h(){let _=new W;for(let w=0;w<r.length;w+=3){_.x=r[w+0],_.y=r[w+1],_.z=r[w+2];let S=g(_)/2/Math.PI+.5,T=m(_)/Math.PI+.5;a.push(S,1-T)}p(),d()}function d(){for(let _=0;_<a.length;_+=6){let w=a[_+0],S=a[_+2],T=a[_+4],v=Math.max(w,S,T),x=Math.min(w,S,T);v>.9&&x<.1&&(w<.2&&(a[_+0]+=1),S<.2&&(a[_+2]+=1),T<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function u(_,w){let S=_*3;w.x=e[S+0],w.y=e[S+1],w.z=e[S+2]}function p(){let _=new W,w=new W,S=new W,T=new W,v=new $e,x=new $e,M=new $e;for(let L=0,C=0;L<r.length;L+=9,C+=6){_.set(r[L+0],r[L+1],r[L+2]),w.set(r[L+3],r[L+4],r[L+5]),S.set(r[L+6],r[L+7],r[L+8]),v.set(a[C+0],a[C+1]),x.set(a[C+2],a[C+3]),M.set(a[C+4],a[C+5]),T.copy(_).add(w).add(S).divideScalar(3);let D=g(T);b(v,C+0,_,D),b(x,C+2,w,D),b(M,C+4,S,D)}}function b(_,w,S,T){T<0&&_.x===1&&(a[w]=_.x-1),S.x===0&&S.z===0&&(a[w]=T/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var or=class s extends Lo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var wi=class s extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,f=t/c,u=[],p=[],b=[],g=[];for(let m=0;m<h;m++){let _=m*f-a;for(let w=0;w<l;w++){let S=w*d-r;p.push(S,-_,0),b.push(0,0,1),g.push(w/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<o;_++){let w=_+l*m,S=_+l*(m+1),T=_+1+l*(m+1),v=_+1+l*m;u.push(w,S,v),u.push(S,T,v)}this.setIndex(u),this.setAttribute("position",new gt(p,3)),this.setAttribute("normal",new gt(b,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},ta=class s extends Ct{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],d=e,f=(t-e)/i,u=new W,p=new $e;for(let b=0;b<=i;b++){for(let g=0;g<=n;g++){let m=r+g/n*a;u.x=d*Math.cos(m),u.y=d*Math.sin(m),c.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,h.push(p.x,p.y)}d+=f}for(let b=0;b<i;b++){let g=b*(n+1);for(let m=0;m<n;m++){let _=m+g,w=_,S=_+n+1,T=_+n+2,v=_+1;o.push(w,S,v),o.push(S,T,v)}}this.setIndex(o),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var na=class s extends Ct{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new W,f=new W,u=[],p=[],b=[],g=[];for(let m=0;m<=n;m++){let _=[],w=m/n,S=a+w*o,T=e*Math.cos(S),v=Math.sqrt(e*e-T*T),x=0;m===0&&a===0?x=.5/t:m===n&&c===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){let L=M/t,C=i+L*r;d.x=-v*Math.cos(C),d.y=T,d.z=v*Math.sin(C),p.push(d.x,d.y,d.z),f.copy(d).normalize(),b.push(f.x,f.y,f.z),g.push(L+x,1-w),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let w=h[m][_+1],S=h[m][_],T=h[m+1][_],v=h[m+1][_+1];(m!==0||a>0)&&u.push(w,S,v),(m!==n-1||c<Math.PI)&&u.push(S,T,v)}this.setIndex(u),this.setAttribute("position",new gt(p,3)),this.setAttribute("normal",new gt(b,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ts(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(ff(i))i.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(ff(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function hn(s){let e={};for(let t=0;t<s.length;t++){let n=Ts(s[t]);for(let i in n)e[i]=n[i]}return e}function ff(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Cm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var ad={clone:Ts,merge:hn},Pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pm,this.fragmentShader=Im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Cm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Pe().setHex(i.value);break;case"v2":this.uniforms[n].value=new $e().fromArray(i.value);break;case"v3":this.uniforms[n].value=new W().fromArray(i.value);break;case"v4":this.uniforms[n].value=new xt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new He().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Do=class extends en{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gs=class extends gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bn=class extends gs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return as('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){as('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ln=class extends gn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Xo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},No=class extends gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fo=class extends gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function kr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Lm(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function df(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Dm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var ii=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Uo=class extends ii{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ss,endingEnd:ss}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case rs:r=e,o=2*t-n;break;case zr:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rs:a=e,c=2*n-t;break;case zr:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-t)/(i-t),b=p*p,g=b*p,m=-f*g+2*f*b-f*p,_=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*p+1,w=(-1-u)*g+(1.5+u)*b+.5*p,S=u*g-u*b;for(let T=0;T!==o;++T)r[T]=m*a[h+T]+_*a[l+T]+w*a[c+T]+S*a[d+T];return r}},ia=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*h;return r}},ko=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Oo=class extends ii{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(i-t),b=1-p;for(let g=0;g!==o;++g)r[g]=a[l+g]*b+a[c+g]*p;return r}let f=o*2,u=e-1;for(let p=0;p!==o;++p){let b=a[l+p],g=a[c+p],m=u*f+p*2,_=d[m],w=d[m+1],S=e*f+p*2,T=h[S],v=h[S+1],x=Fm(n,t,_,T,i);r[p]=od(x,b,w,v,g)}return r}};function od(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Nm(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Fm(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=od(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let c=Nm(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Sn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gi(t,this.TimeBufferType),this.values=Gi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gi(e.times,Array),values:Gi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),kr(e.settings)&&(n.settings={inTangents:Gi(e.settings.inTangents,Array),outTangents:Gi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case os:t=this.InterpolantFactoryMethodDiscrete;break;case cs:t=this.InterpolantFactoryMethodLinear;break;case bo:t=this.InterpolantFactoryMethodSmooth;break;case Nl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return os;case this.InterpolantFactoryMethodLinear:return cs;case this.InterpolantFactoryMethodSmooth:return bo;case this.InterpolantFactoryMethodBezier:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;kr(this.settings)&&(pf(this.settings.inTangents,e),pf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;kr(this.settings)&&(mf(this.settings.inTangents,e),mf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Je("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Je("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Xp(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){Je("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let d=o*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){let b=t[d+p];if(b!==t[f+p]||b!==t[u+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,kr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function pf(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function mf(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=cs;var Ai=class extends Sn{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=os;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}};sa.prototype.ValueTypeName="color";var Ti=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}};Ti.prototype.ValueTypeName="number";var Bo=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)$t.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ei=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Bo(this.times,this.values,this.getValueSize(),e)}};Ei.prototype.ValueTypeName="quaternion";Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends Sn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=os;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}};qi.prototype.ValueTypeName="vector";var bs=class{constructor(e="",t=-1,n=[],i=Nc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=oi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(km(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Sn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Lm(c);c=df(c,1,h),l=df(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Ti(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let d=h[1],f=i[d];f||(i[d]=f=[]),f.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Um(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ti;case"vector":case"vector2":case"vector3":case"vector4":return qi;case"color":return sa;case"quaternion":return Ei;case"bool":case"boolean":return Ai;case"string":return Ri}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function km(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Um(s.type);if(s.times===void 0){let n=[],i=[];Dm(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),kr(s.settings)&&(t.settings={inTangents:Gi(s.settings.inTangents,Float32Array),outTangents:Gi(s.settings.outTangents,Float32Array)}),t}var ni={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(gf(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!gf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function gf(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var zo=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let u=l[d],p=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cd=new zo,si=class{constructor(e){this.manager=e!==void 0?e:cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};si.DEFAULT_MATERIAL_NAME="__DEFAULT";var xi={},Ul=class extends Error{constructor(e,t){super(e),this.response=t}},cr=class extends si{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ni.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(xi[e]!==void 0){xi[e].push({onLoad:t,onProgress:n,onError:i});return}xi[e]=[],xi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=xi[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=f?parseInt(f):0,p=u!==0,b=0,g=new ReadableStream({start(m){_();function _(){d.read().then(({done:w,value:S})=>{if(w)m.close();else{b+=S.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:b,total:u});for(let v=0,x=h.length;v<x;v++){let M=h[v];M.onProgress&&M.onProgress(T)}m.enqueue(S),_()}},w=>{m.error(w)})}}});return new Response(g)}else throw new Ul(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return l.arrayBuffer().then(p=>u.decode(p))}}}).then(l=>{ni.add(`file:${e}`,l);let h=xi[e];delete xi[e];for(let d=0,f=h.length;d<f;d++){let u=h[d];u.onLoad&&u.onLoad(l)}}).catch(l=>{let h=xi[e];if(h===void 0)throw this.manager.itemError(e),l;delete xi[e];for(let d=0,f=h.length;d<f;d++){let u=h[d];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Vs=new WeakMap,Go=class extends si{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ni.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Vs.get(a);d===void 0&&(d=[],Vs.set(a,d)),d.push({onLoad:t,onError:i})}return a}let o=Ys("img");function c(){h(),t&&t(this);let d=Vs.get(this)||[];for(let f=0;f<d.length;f++){let u=d[f];u.onLoad&&u.onLoad(this)}Vs.delete(this),r.manager.itemEnd(e)}function l(d){h(),i&&i(d),ni.remove(`image:${e}`);let f=Vs.get(this)||[];for(let u=0;u<f.length;u++){let p=f[u];p.onError&&p.onError(d)}Vs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ni.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var ra=class extends si{constructor(e){super(e)}load(e,t,n,i){let r=new Wt,a=new Go(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},xs=class extends vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},aa=class extends xs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Il=new He,bf=new W,xf=new W,lr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wi,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;bf.setFromMatrixPosition(e.matrixWorld),t.position.copy(bf),xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Il,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===Js||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mo=new W,go=new $t,ti=new W,oa=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mo,go,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,ti.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(mo,go,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new W,_f=new $e,vf=new $e,Ht=class extends oa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,_f,vf),t.subVectors(vf,_f)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},kl=class extends lr{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ls*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ca=class extends xs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new kl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ol=class extends lr{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}},la=class extends xs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ol}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},_s=class extends oa{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bl=class extends lr{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vs=class extends xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Bl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ci=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ll=new WeakMap,ha=class extends si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ni.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Ll.has(a)===!0?(i&&i(Ll.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ni.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Ll.set(c,l),ni.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ni.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ws=-90,qs=1,hr=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ht(Ws,qs,e,t);i.layers=this.layers,this.add(i);let r=new Ht(Ws,qs,e,t);r.layers=this.layers,this.add(r);let a=new Ht(Ws,qs,e,t);a.layers=this.layers,this.add(a);let o=new Ht(Ws,qs,e,t);o.layers=this.layers,this.add(o);let c=new Ht(Ws,qs,e,t);c.layers=this.layers,this.add(c);let l=new Ht(Ws,qs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ho=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Vo=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){$t.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;$t.multiplyQuaternionsFlat(e,a,e,t,e,n),$t.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},bh="\\[\\]\\.:\\/",Om=new RegExp("["+bh+"]","g"),xh="[^"+bh+"]",Bm="[^"+bh.replace("\\.","")+"]",zm=/((?:WC+[\/:])*)/.source.replace("WC",xh),Gm=/(WCOD+)?/.source.replace("WCOD",Bm),Hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),Vm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),Wm=new RegExp("^"+zm+Gm+Hm+Vm+"$"),qm=["material","materials","bones","map"],zl=class{constructor(e,t,n){let i=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Om,"")}static parseTrackName(e){let t=Wm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);qm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=zl;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wo=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:ss,endingEnd:ss};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=va,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Xf:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Nc:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===qf;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Dc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=rs,i.endingEnd=rs):(e?i.endingStart=this.zeroSlopeAtStart?rs:ss:i.endingStart=zr,t?i.endingEnd=this.zeroSlopeAtEnd?rs:ss:i.endingEnd=zr)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},Xm=new Float32Array(1),ua=class extends Kn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==r;++d){let f=i[d],u=f.name,p=h[u];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,u));continue}let b=t&&t._propertyBindings[d].binding.parsedPath;p=new Vo(_t.create(n,u,b),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,u),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ia(new Float32Array(2),new Float32Array(2),1,Xm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?bs.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Nc),c!==void 0){let d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Wo(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?bs.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var wh=class wh{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};wh.prototype.isMatrix2=!0;var Gl=wh;function _h(s,e,t,n){let i=jm(n);switch(t){case sh:return s*e;case Qo:return s*e/i.components*i.byteLength;case ec:return s*e/i.components*i.byteLength;case ji:return s*e*2/i.components*i.byteLength;case tc:return s*e*2/i.components*i.byteLength;case rh:return s*e*3/i.components*i.byteLength;case Bn:return s*e*4/i.components*i.byteLength;case nc:return s*e*4/i.components*i.byteLength;case pa:case ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ga:case ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sc:case ac:return Math.max(s,16)*Math.max(e,8)/4;case ic:case rc:return Math.max(s,8)*Math.max(e,8)/2;case oc:case cc:case hc:case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lc:case xa:case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case mc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case gc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case bc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _c:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ec:case Rc:case Cc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pc:case Ic:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _a:case Lc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jm(s){switch(s){case wn:case eh:return{byteLength:1,components:1};case pr:case th:case Yn:return{byteLength:2,components:1};case Zo:case $o:return{byteLength:2,components:4};case Jn:case Yo:case Ln:return{byteLength:4,components:1};case nh:case ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Pd(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Jm(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=s.SHORT;else if(l instanceof Uint32Array)u=s.UNSIGNED_INT;else if(l instanceof Int32Array)u=s.INT;else if(l instanceof Int8Array)u=s.BYTE;else if(l instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){let p=d[f],b=d[u];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++f,d[f]=b)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){let b=d[u];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Ym=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zm=`#ifdef USE_ALPHAHASH
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
#endif`,$m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ng=`#ifdef USE_AOMAP
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
#endif`,ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sg=`#ifdef USE_BATCHING
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
#endif`,rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lg=`#ifdef USE_IRIDESCENCE
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
#endif`,hg=`#ifdef USE_BUMPMAP
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
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_g=`#define PI 3.141592653589793
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
} // validated`,vg=`vec3 transformedNormal = objectNormal;
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
#endif`,yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ug=`#ifdef USE_GRADIENTMAP
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
}`,kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xg=`PhysicalMaterial material;
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
#endif`,jg=`uniform sampler2D dfgLUT;
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
}`,Kg=`
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,$g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r0=`#if defined( USE_POINTS_UV )
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
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l0=`#if defined( USE_MORPHCOLORS )
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
#endif`,h0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
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
#endif`,_0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,A0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N0=`float getShadowMask() {
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
}`,F0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,k0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,B0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,J0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y0=`uniform sampler2D t2D;
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`uniform float backgroundBlurriness;
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`#include <common>
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
}`,nb=`#if DEPTH_PACKING == 3200
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
}`,ib=`#define DISTANCE
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
}`,sb=`#define DISTANCE
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
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ab=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`uniform float scale;
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
}`,cb=`uniform vec3 diffuse;
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
}`,lb=`#include <common>
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
}`,hb=`uniform vec3 diffuse;
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
}`,ub=`#define LAMBERT
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
}`,fb=`#define LAMBERT
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
}`,db=`#define MATCAP
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
}`,pb=`#define MATCAP
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
}`,mb=`#define NORMAL
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
}`,gb=`#define NORMAL
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
}`,bb=`#define PHONG
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
}`,xb=`#define PHONG
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
}`,_b=`#define STANDARD
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
}`,vb=`#define STANDARD
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
}`,yb=`#define TOON
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
}`,Mb=`#define TOON
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
}`,Sb=`uniform float size;
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
}`,wb=`uniform vec3 diffuse;
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
}`,Ab=`#include <common>
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
}`,Tb=`uniform vec3 color;
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
}`,Eb=`uniform float rotation;
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
}`,Rb=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Ym,alphahash_pars_fragment:Zm,alphamap_fragment:$m,alphamap_pars_fragment:Qm,alphatest_fragment:eg,alphatest_pars_fragment:tg,aomap_fragment:ng,aomap_pars_fragment:ig,batching_pars_vertex:sg,batching_vertex:rg,begin_vertex:ag,beginnormal_vertex:og,bsdfs:cg,iridescence_fragment:lg,bumpmap_pars_fragment:hg,clipping_planes_fragment:ug,clipping_planes_pars_fragment:fg,clipping_planes_pars_vertex:dg,clipping_planes_vertex:pg,color_fragment:mg,color_pars_fragment:gg,color_pars_vertex:bg,color_vertex:xg,common:_g,defaultnormal_vertex:vg,displacementmap_pars_vertex:yg,displacementmap_vertex:Mg,emissivemap_fragment:Sg,emissivemap_pars_fragment:wg,colorspace_fragment:Ag,colorspace_pars_fragment:Tg,envmap_fragment:Eg,envmap_common_pars_fragment:Rg,envmap_pars_fragment:Cg,envmap_pars_vertex:Pg,envmap_physical_pars_fragment:Gg,envmap_vertex:Ig,fog_vertex:Lg,fog_pars_vertex:Dg,fog_fragment:Ng,fog_pars_fragment:Fg,gradientmap_pars_fragment:Ug,lightmap_pars_fragment:kg,lights_lambert_fragment:Og,lights_lambert_pars_fragment:Bg,lights_pars_begin:zg,lights_toon_fragment:Hg,lights_toon_pars_fragment:Vg,lights_phong_fragment:Wg,lights_phong_pars_fragment:qg,lights_physical_fragment:Xg,lights_physical_pars_fragment:jg,lights_fragment_begin:Kg,lights_fragment_maps:Jg,lights_fragment_end:Yg,lightprobes_pars_fragment:Zg,logdepthbuf_fragment:$g,logdepthbuf_pars_fragment:Qg,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:t0,map_fragment:n0,map_pars_fragment:i0,map_particle_fragment:s0,map_particle_pars_fragment:r0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:o0,morphinstance_vertex:c0,morphcolor_vertex:l0,morphnormal_vertex:h0,morphtarget_pars_vertex:u0,morphtarget_vertex:f0,normal_fragment_begin:d0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:g0,normal_vertex:b0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:_0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:y0,iridescence_pars_fragment:M0,opaque_fragment:S0,packing:w0,premultiplied_alpha_fragment:A0,project_vertex:T0,dithering_fragment:E0,dithering_pars_fragment:R0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:I0,shadowmap_pars_vertex:L0,shadowmap_vertex:D0,shadowmask_pars_fragment:N0,skinbase_vertex:F0,skinning_pars_vertex:U0,skinning_vertex:k0,skinnormal_vertex:O0,specularmap_fragment:B0,specularmap_pars_fragment:z0,tonemapping_fragment:G0,tonemapping_pars_fragment:H0,transmission_fragment:V0,transmission_pars_fragment:W0,uv_pars_fragment:q0,uv_pars_vertex:X0,uv_vertex:j0,worldpos_vertex:K0,background_vert:J0,background_frag:Y0,backgroundCube_vert:Z0,backgroundCube_frag:$0,cube_vert:Q0,cube_frag:eb,depth_vert:tb,depth_frag:nb,distance_vert:ib,distance_frag:sb,equirect_vert:rb,equirect_frag:ab,linedashed_vert:ob,linedashed_frag:cb,meshbasic_vert:lb,meshbasic_frag:hb,meshlambert_vert:ub,meshlambert_frag:fb,meshmatcap_vert:db,meshmatcap_frag:pb,meshnormal_vert:mb,meshnormal_frag:gb,meshphong_vert:bb,meshphong_frag:xb,meshphysical_vert:_b,meshphysical_frag:vb,meshtoon_vert:yb,meshtoon_frag:Mb,points_vert:Sb,points_frag:wb,shadow_vert:Ab,shadow_frag:Tb,sprite_vert:Eb,sprite_frag:Rb},Re={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},li={basic:{uniforms:hn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:hn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:hn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:hn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:hn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Pe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:hn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:hn([Re.points,Re.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:hn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:hn([Re.common,Re.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:hn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:hn([Re.sprite,Re.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:hn([Re.common,Re.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:hn([Re.lights,Re.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};li.physical={uniforms:hn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Uc={r:0,b:0,g:0},Cb=new He,Id=new Qe;Id.set(-1,0,0,0,1,0,0,0,1);function Pb(s,e,t,n,i,r){let a=new Pe(0),o=i===!0?0:1,c,l,h=null,d=0,f=null;function u(_){let w=_.isScene===!0?_.background:null;if(w&&w.isTexture){let S=_.backgroundBlurriness>0;w=e.get(w,S)}return w}function p(_){let w=!1,S=u(_);S===null?g(a,o):S&&S.isColor&&(g(S,1),w=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(_,w){let S=u(w);S&&S.isCubeTexture?(l===void 0&&(l=new Pt(new ar(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Ts(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,v,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Id),l.material.toneMapped=at.getTransfer(S.colorSpace)!==mt,(h!==S||d!==S.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Pt(new wi(2,2),new en({name:"BackgroundMaterial",uniforms:Ts(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=at.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,w){_.getRGB(Uc,gh(s)),t.buffers.color.setClear(Uc.r,Uc.g,Uc.b,w,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,w=1){a.set(_),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:p,addToRenderList:b,dispose:m}}function Ib(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(D,U,X,I,z){let Z=!1,$=d(D,I,X,U);r!==$&&(r=$,l(r.object)),Z=u(D,I,X,z),Z&&p(D,I,X,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(D,U,X,I),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return s.createVertexArray()}function l(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,U,X,I){let z=I.wireframe===!0,Z=n[U.id];Z===void 0&&(Z={},n[U.id]=Z);let $=D.isInstancedMesh===!0?D.id:0,j=Z[$];j===void 0&&(j={},Z[$]=j);let H=j[X.id];H===void 0&&(H={},j[X.id]=H);let J=H[z];return J===void 0&&(J=f(c()),H[z]=J),J}function f(D){let U=[],X=[],I=[];for(let z=0;z<t;z++)U[z]=0,X[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:I,object:D,attributes:{},index:null}}function u(D,U,X,I){let z=r.attributes,Z=U.attributes,$=0,j=X.getAttributes();for(let H in j)if(j[H].location>=0){let ee=z[H],we=Z[H];if(we===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(we=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(we=D.instanceColor)),ee===void 0||ee.attribute!==we||we&&ee.data!==we.data)return!0;$++}return r.attributesNum!==$||r.index!==I}function p(D,U,X,I){let z={},Z=U.attributes,$=0,j=X.getAttributes();for(let H in j)if(j[H].location>=0){let ee=Z[H];ee===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));let we={};we.attribute=ee,ee&&ee.data&&(we.data=ee.data),z[H]=we,$++}r.attributes=z,r.attributesNum=$,r.index=I}function b(){let D=r.newAttributes;for(let U=0,X=D.length;U<X;U++)D[U]=0}function g(D){m(D,0)}function m(D,U){let X=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;X[D]=1,I[D]===0&&(s.enableVertexAttribArray(D),I[D]=1),z[D]!==U&&(s.vertexAttribDivisor(D,U),z[D]=U)}function _(){let D=r.newAttributes,U=r.enabledAttributes;for(let X=0,I=U.length;X<I;X++)U[X]!==D[X]&&(s.disableVertexAttribArray(X),U[X]=0)}function w(D,U,X,I,z,Z,$){$===!0?s.vertexAttribIPointer(D,U,X,z,Z):s.vertexAttribPointer(D,U,X,I,z,Z)}function S(D,U,X,I){b();let z=I.attributes,Z=X.getAttributes(),$=U.defaultAttributeValues;for(let j in Z){let H=Z[j];if(H.location>=0){let J=z[j];if(J===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){let ee=J.normalized,we=J.itemSize,Ae=e.get(J);if(Ae===void 0)continue;let ne=Ae.buffer,Me=Ae.type,Te=Ae.bytesPerElement,De=Me===s.INT||Me===s.UNSIGNED_INT||J.gpuType===Yo;if(J.isInterleavedBufferAttribute){let Ee=J.data,Oe=Ee.isInterleavedBuffer===!0?Ee.stride:Ee.itemSize,bt=J.offset;if(Ee.isInstancedInterleavedBuffer||Ee.isInstancedBufferAttribute){for(let Be=0;Be<H.locationSize;Be++)m(H.location+Be,Ee.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Be=0;Be<H.locationSize;Be++)g(H.location+Be);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let Be=0;Be<H.locationSize;Be++)w(H.location+Be,we/H.locationSize,Me,ee,Oe*Te,(bt+we/H.locationSize*Be)*Te,De)}else{if(J.isInstancedBufferAttribute){for(let Ee=0;Ee<H.locationSize;Ee++)m(H.location+Ee,J.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)g(H.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let Ee=0;Ee<H.locationSize;Ee++)w(H.location+Ee,we/H.locationSize,Me,ee,we*Te,we/H.locationSize*Ee*Te,De)}}else if($!==void 0){let ee=$[j];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(H.location,ee);break;case 3:s.vertexAttrib3fv(H.location,ee);break;case 4:s.vertexAttrib4fv(H.location,ee);break;default:s.vertexAttrib1fv(H.location,ee)}}}}_()}function T(){L();for(let D in n){let U=n[D];for(let X in U){let I=U[X];for(let z in I){let Z=I[z];for(let $ in Z)h(Z[$].object),delete Z[$];delete I[z]}}delete n[D]}}function v(D){if(n[D.id]===void 0)return;let U=n[D.id];for(let X in U){let I=U[X];for(let z in I){let Z=I[z];for(let $ in Z)h(Z[$].object),delete Z[$];delete I[z]}}delete n[D.id]}function x(D){for(let U in n){let X=n[U];for(let I in X){let z=X[I];if(z[D.id]===void 0)continue;let Z=z[D.id];for(let $ in Z)h(Z[$].object),delete Z[$];delete z[D.id]}}}function M(D){for(let U in n){let X=n[U],I=D.isInstancedMesh===!0?D.id:0,z=X[I];if(z!==void 0){for(let Z in z){let $=z[Z];for(let j in $)h($[j].object),delete $[j];delete z[Z]}delete X[I],Object.keys(X).length===0&&delete n[U]}}}function L(){C(),a=!0,r!==i&&(r=i,l(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:v,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:g,disableUnusedAttributes:_}}function Lb(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let u=0;u<h;u++)f+=l[u];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Db(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==Bn&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let M=x===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==wn&&x!==Ln&&!M&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Fe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),v=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:S,maxSamples:T,samples:v}}function Nb(s){let e=this,t=null,n=0,i=!1,r=!1,a=new jn,o=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){let p=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?h(null):l();else{let _=r?0:n,w=_*4,S=m.clippingState||null;c.value=S,S=h(p,f,w,u);for(let T=0;T!==w;++T)S[T]=t[T];m.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,p){let b=d!==null?d.length:0,g=null;if(b!==0){if(g=c.value,p!==!0||g===null){let m=u+b*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,S=u;w!==b;++w,S+=4)a.copy(d[w]).applyMatrix4(_,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var Aa=class extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Zr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ar(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ys});r.uniforms.tEquirect.value=t;let a=new Pt(i,r),o=t.minFilter;return t.minFilter===On&&(t.minFilter=Vt),new hr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},ld=256,Fb=3,Ub=20,Ld=256,Dd=16,kb=3,Ob=new W,Bb=new Pe,Oc=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new hr(1,10,null),this._boxMesh=new Pt(new ar(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Ob}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,f=c.autoClearColor,u=c.autoClearDepth,p=c.autoClearStencil,b=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,b===null&&(e.background=c.getClearColor(Bb));let g=new hr(n,i,h);return g.position.copy(o),g.update(c,e),c.autoClear=d,c.autoClearColor=f,c.autoClearDepth=u,c.autoClearStencil=p,e.background=b,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ld,dh(e))}_fromTexture(e,t){e.mapping===Ss||e.mapping===fr?this._setSize(e.image.length===0?ld:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=hd(e,!1,!1),n=Math.log2(e)-Fb;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ss||e.mapping===fr?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ud()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=zb(),this._integrationMaterial=Gb());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Dd);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-kb)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Ld*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Hb());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function hd(s,e,t){return new Aa(s,{minFilter:On,generateMipmaps:e,type:Yn,colorSpace:mn,depthBuffer:t})}function Ta(s,e,t){return new en({name:s,uniforms:e,vertexShader:it.cube_vert,fragmentShader:t,side:nn,blending:ys,depthTest:!1,depthWrite:!1})}function zb(){return Ta("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ld}u

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
	`)}function Gb(){return Ta("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Dd}},`

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
	`)}function Hb(){return Ta("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ub}
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
	`)}function ud(){return Ta("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function fd(){return Ta("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Vb(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?a(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===jo||u===Ko)if(e.has(f)){let p=e.get(f).texture;return o(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let b=new Aa(p.height);return b.fromEquirectangularTexture(s,f),e.set(f,b),f.addEventListener("dispose",l),o(b.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,p=u===jo||u===Ko,b=u===Ss||u===fr;if(p||b){let g=t.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Oc(s)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let _=f.image;return p&&_&&_.height>0||b&&_&&c(_)?(n===null&&(n=new Oc(s)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,u){return u===jo?f.mapping=Ss:u===Ko&&(f.mapping=fr),f}function c(f){let u=0,p=6;for(let b=0;b<p;b++)f[b]!==void 0&&u++;return u===p}function l(f){let u=f.target;u.removeEventListener("dispose",l);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Wb(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&as("WebGLRenderer: "+n+" extension not supported."),i}}}function qb(s,e,t,n){let i={},r=new WeakMap,a=new FinalizationRegistry(p=>delete i[p]);function o(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete i[p.id],a.unregister(p);let b=r.get(p);b&&(e.remove(b),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,b){return i[b.id]!==void 0||(b.addEventListener("dispose",o),i[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}function h(p){let b=p.attributes;for(let g in b)e.update(b[g],s.ARRAY_BUFFER)}function d(p){let b=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let _=b!==null?b.array.length:g.array.length/3-1,w=g.count>=65535?Kr:jr,S=new w(Math.ceil(_/3)*6,1),T=S.array;if(b!==null){let x=b.array;m=b.version;for(let M=0,L=0;M<_;M+=3){let C=x[M+0],D=x[M+1],U=x[M+2];T[L++]=C,T[L++]=D,T[L++]=D,T[L++]=U,T[L++]=U,T[L++]=C}}else{m=g.version;for(let x=0,M=0;x<_;x+=3){let L=x+0,C=x+1,D=x+2;T[M++]=L,T[M++]=C,T[M++]=C,T[M++]=D,T[M++]=D,T[M++]=L}}S.version=m;let v=r.get(p);v&&e.remove(v),r.set(p,S)}function f(p){let b=r.get(p);if(b){let g=p.index;g!==null&&b.version<g.version&&d(p)}else d(p);return r.get(p)}function u(){for(let p in i){let b=i[p].deref();b!==void 0&&c(b)}}return{get:l,update:h,getWireframeAttribute:f,dispose:u}}function Xb(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*a,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let b=0;for(let g=0;g<u;g++)b+=f[g];t.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function jb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Kb(s,e,t){let n=new WeakMap,i=new xt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let L=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],w=0;u===!0&&(w=1),p===!0&&(w=2),b===!0&&(w=3);let S=o.attributes.position.count*w,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let v=new Float32Array(S*T*4*d),x=new Vr(v,S,T,d);x.type=Ln,x.needsUpdate=!0;let M=w*4;for(let C=0;C<d;C++){let D=g[C],U=m[C],X=_[C],I=S*T*4*C;for(let z=0;z<D.count;z++){let Z=z*M;u===!0&&(i.fromBufferAttribute(D,z),v[I+Z+0]=i.x,v[I+Z+1]=i.y,v[I+Z+2]=i.z,v[I+Z+3]=0),p===!0&&(i.fromBufferAttribute(U,z),v[I+Z+4]=i.x,v[I+Z+5]=i.y,v[I+Z+6]=i.z,v[I+Z+7]=0),b===!0&&(i.fromBufferAttribute(X,z),v[I+Z+8]=i.x,v[I+Z+9]=i.y,v[I+Z+10]=i.z,v[I+Z+11]=X.itemSize===4?i.w:1)}}f={count:d,texture:x,size:new $e(S,T)},n.set(o,f),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let u=0;for(let b=0;b<l.length;b++)u+=l[b];let p=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Jb(s,e,t,n,i){let r=new WeakMap;function a(l){let h=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Yb={[jl]:"LINEAR_TONE_MAPPING",[Kl]:"REINHARD_TONE_MAPPING",[Jl]:"CINEON_TONE_MAPPING",[da]:"ACES_FILMIC_TONE_MAPPING",[Zl]:"AGX_TONE_MAPPING",[$l]:"NEUTRAL_TONE_MAPPING",[Yl]:"CUSTOM_TONE_MAPPING"};function Zb(s,e,t,n,i,r){let a=new Pn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Ct;h.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new gt([0,2,0,0,2,0],2));let d=new Do({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Pt(h,d),u=new _s(-1,1,1,-1,0,1),p=null,b=null,g=!1,m,_=null,w=[],S=!1;this.setSize=function(T,v){a.setSize(T,v),o!==null&&o.setSize(T,v),c!==null&&c.setSize(T,v);for(let x=0;x<w.length;x++){let M=w[x];M.setSize&&M.setSize(T,v)}},this.setEffects=function(T){w=T,S=w.length>0&&w[0].isRenderPass===!0;let v=a.width,x=a.height;w.length>0&&o===null&&(o=new Pn(v,x,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),c=new Pn(v,x,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&w.some(L=>L.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new Mi(v,x),r===!0&&(l.format=Pi,l.type=As)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let L=0;L<w.length;L++){let C=w[L];C.setSize&&C.setSize(v,x),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(T,v){if(g||T.toneMapping===ai&&w.length===0)return!1;if(_=v,v!==null){let x=v.width,M=v.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return S===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=ai,!0},this.hasRenderPass=function(){return S},this.end=function(T,v){T.toneMapping=m,g=!0;let x=a,M=o;for(let L=0;L<w.length;L++){let C=w[L];C.enabled!==!1&&(C.render(T,M,x,v),C.needsSwap!==!1&&(x=M,M=M===o?c:o))}if(p!==T.outputColorSpace||b!==T.toneMapping){p=T.outputColorSpace,b=T.toneMapping,d.defines={},at.getTransfer(p)===mt&&(d.defines.SRGB_TRANSFER="");let L=Yb[b];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(_),T.render(f,u),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var Nd=new Wt,Fd=new Mi(1,1),Ud=new Qr(1),kd=new Vr,Od=new Ro,Bd=new Zr,dd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),bd=new Float32Array(4);function br(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=dd[i];if(r===void 0&&(r=new Float32Array(i),dd[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Xt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function jt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function zc(s,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function $b(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Qb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2fv(this.addr,e),jt(t,e)}}function ex(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;s.uniform3fv(this.addr,e),jt(t,e)}}function tx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4fv(this.addr,e),jt(t,e)}}function nx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;bd.set(n),s.uniformMatrix2fv(this.addr,!1,bd),jt(t,n)}}function ix(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;gd.set(n),s.uniformMatrix3fv(this.addr,!1,gd),jt(t,n)}}function sx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;md.set(n),s.uniformMatrix4fv(this.addr,!1,md),jt(t,n)}}function rx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ax(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2iv(this.addr,e),jt(t,e)}}function ox(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;s.uniform3iv(this.addr,e),jt(t,e)}}function cx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4iv(this.addr,e),jt(t,e)}}function lx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function hx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2uiv(this.addr,e),jt(t,e)}}function ux(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;s.uniform3uiv(this.addr,e),jt(t,e)}}function fx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4uiv(this.addr,e),jt(t,e)}}function Gc(s){return s.version===0&&(s.compareFunction=lh,s.needsUpdate=!0),s}function dx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Gc(Fd):r=Nd,t.setTexture2D(e||r,i)}function px(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Od,i)}function mx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Gc(Ud):r=Bd,t.setTextureCube(e||r,i)}function gx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||kd,i)}function bx(s){switch(s){case 5126:return $b;case 35664:return Qb;case 35665:return ex;case 35666:return tx;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ax;case 35668:case 35672:return ox;case 35669:case 35673:return cx;case 5125:return lx;case 36294:return hx;case 36295:return ux;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}function xx(s,e){s.uniform1fv(this.addr,e)}function _x(s,e){let t=br(e,this.size,2);s.uniform2fv(this.addr,t)}function vx(s,e){let t=br(e,this.size,3);s.uniform3fv(this.addr,t)}function yx(s,e){let t=br(e,this.size,4);s.uniform4fv(this.addr,t)}function Mx(s,e){let t=br(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Sx(s,e){let t=br(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function wx(s,e){let t=br(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ax(s,e){s.uniform1iv(this.addr,e)}function Tx(s,e){s.uniform2iv(this.addr,e)}function Ex(s,e){s.uniform3iv(this.addr,e)}function Rx(s,e){s.uniform4iv(this.addr,e)}function Cx(s,e){s.uniform1uiv(this.addr,e)}function Px(s,e){s.uniform2uiv(this.addr,e)}function Ix(s,e){s.uniform3uiv(this.addr,e)}function Lx(s,e){s.uniform4uiv(this.addr,e)}function Dx(s,e,t){let n=this.cache,i=e.length,r=zc(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),jt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Gc(Fd):a=Nd;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Nx(s,e,t){let n=this.cache,i=e.length,r=zc(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),jt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Od,r[a])}function Fx(s,e,t){let n=this.cache,i=e.length,r=zc(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),jt(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Gc(Ud):a=Bd;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function Ux(s,e,t){let n=this.cache,i=e.length,r=zc(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),jt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||kd,r[a])}function kx(s){switch(s){case 5126:return xx;case 35664:return _x;case 35665:return vx;case 35666:return yx;case 35674:return Mx;case 35675:return Sx;case 35676:return wx;case 5124:case 35670:return Ax;case 35667:case 35671:return Tx;case 35668:case 35672:return Ex;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Px;case 36295:return Ix;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return Ux}}var Eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bx(t.type)}},Rh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kx(t.type)}},Ch=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Ah=/(\w+)(\])?(\[|\.)?/g;function xd(s,e){s.seq.push(e),s.map[e.id]=e}function Ox(s,e,t){let n=s.name,i=n.length;for(Ah.lastIndex=0;;){let r=Ah.exec(n),a=Ah.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){xd(t,l===void 0?new Eh(o,s,e):new Rh(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Ch(o),xd(t,d)),t=d}}}var gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Ox(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function _d(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Bx=37297,zx=0;function Gx(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var vd=new Qe;function Hx(s){at._getMatrix(vd,at.workingColorSpace,s);let e=`mat3( ${vd.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(s)){case Gr:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function yd(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Gx(s.getShaderSource(e),o)}else return r}function Vx(s,e){let t=Hx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Wx={[jl]:"Linear",[Kl]:"Reinhard",[Jl]:"Cineon",[da]:"ACESFilmic",[Zl]:"AgX",[$l]:"Neutral",[Yl]:"Custom"};function qx(s,e){let t=Wx[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var kc=new W;function Xx(){at.getLuminanceCoefficients(kc);let s=kc.x.toFixed(4),e=kc.y.toFixed(4),t=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function Kx(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jx(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function wa(s){return s!==""}function Md(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Sd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(s){return s.replace(Yx,Zx)}function Zx(s,e){let t=it[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ph(t)}var $x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(s){return s.replace($x,Qx)}function Qx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ad(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var e_={[fa]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function t_(s){return e_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var n_={[fr]:"ENVMAP_MODE_REFRACTION"};function i_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":n_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var s_={[Xo]:"ENVMAP_BLENDING_MULTIPLY",[Hf]:"ENVMAP_BLENDING_MIX",[Vf]:"ENVMAP_BLENDING_ADD"};function r_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":s_[s.combine]||"ENVMAP_BLENDING_NONE"}function a_(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=t_(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=i_(t),d=r_(t),f=jx(t),u=Kx(r),p=i.createProgram(),b,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(wa).join(`
`),b.length>0&&(b+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(wa).join(`
`),g.length>0&&(g+=`
`)):(b=[Ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),g=[Ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?it.tonemapping_pars_fragment:"",t.toneMapping!==ai?qx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Vx("linearToOutputTexel",t.outputColorSpace),Xx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wa).join(`
`)),a=Ph(a),a=Md(a,t),a=Sd(a,t),o=Ph(o),o=Md(o,t),o=Sd(o,t),a=wd(a),o=wd(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,b=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,g=["#define varying in",t.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=m+b+a,w=m+g+o,S=_d(i,i.VERTEX_SHADER,_),T=_d(i,i.FRAGMENT_SHADER,w);i.attachShader(p,S),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function v(C){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(p)||"",U=i.getShaderInfoLog(S)||"",X=i.getShaderInfoLog(T)||"",I=D.trim(),z=U.trim(),Z=X.trim(),$=!0,j=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,S,T);else{let H=yd(i,S,"vertex"),J=yd(i,T,"fragment");Je("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+H+`
`+J)}else I!==""?Fe("WebGLProgram: Program Info Log:",I):(z===""||Z==="")&&(j=!1);j&&(C.diagnostics={runnable:$,programLog:I,vertexShader:{log:z,prefix:b},fragmentShader:{log:Z,prefix:g}})}i.deleteShader(S),i.deleteShader(T),x=new gr(i,p),M=Jx(i,p)}let x;this.getUniforms=function(){return x===void 0&&v(this),x};let M;this.getAttributes=function(){return M===void 0&&v(this),M};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(p,Bx)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=T,this}var o_=0,Ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Lh(e),t.set(e,n)),n}},Lh=class{constructor(e){this.id=o_++,this.code=e,this.usedTimes=0}};function c_(s){return s===ji||s===xa||s===_a}function l_(s,e,t,n,i,r){let a=new Wr,o=new Ih,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,M,L,C,D,U){let X=C.fog,I=D.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,$=e.get(x.envMap||z,Z),j=f[x.type],H=n.precision;x.precision!==null&&(H=n.getMaxPrecision(x.precision),H!==x.precision&&Fe("WebGLProgram.getParameters:",x.precision,"not supported, using",H,"instead."));let J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ee=J!==void 0?J.length:0,we=0;I.morphAttributes.position!==void 0&&(we=1),I.morphAttributes.normal!==void 0&&(we=2),I.morphAttributes.color!==void 0&&(we=3);let Ae,ne,Me,Te;if(j){let xe=li[j];Ae=xe.vertexShader,ne=xe.fragmentShader}else{Ae=x.vertexShader,ne=x.fragmentShader;let xe=o.getVertexShaderStage(x),ut=o.getFragmentShaderStage(x);o.update(x,xe,ut),Me=xe.id,Te=ut.id}let De=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,bt=D.isBatchedMesh===!0,Be=!!x.map,ht=!!x.matcap,ct=!!$,Ye=ct&&$.isPMREMTexture===!0,Et=!!x.aoMap,Mt=!!x.lightMap,Dt=!!x.bumpMap&&x.wireframe===!1,St=!!x.normalMap,Tn=!!x.displacementMap,je=!!x.emissiveMap,Rt=!!x.metalnessMap,un=!!x.roughnessMap,Nt=x.anisotropy>0,k=x.clearcoat>0,fn=x.diffuseRoughness>0,Xe=x.dispersion>0,dt=x.retroreflectivity>0,le=x.iridescence>0,pt=x.sheen>0,ze=x.transmission>0,Ue=Nt&&!!x.anisotropyMap,R=k&&!!x.clearcoatMap,A=k&&!!x.clearcoatNormalMap,Y=k&&!!x.clearcoatRoughnessMap,he=fn&&!!x.diffuseRoughnessMap,ae=le&&!!x.iridescenceMap,me=le&&!!x.iridescenceThicknessMap,ve=pt&&!!x.sheenColorMap,ie=pt&&!!x.sheenRoughnessMap,se=!!x.specularMap,ge=!!x.specularColorMap,F=!!x.specularIntensityMap,re=ze&&!!x.transmissionMap,G=ze&&!!x.thicknessMap,de=!!x.gradientMap,fe=!!x.alphaMap,pe=x.alphaTest>0,Ne=!!x.alphaHash,qe=!!x.extensions,ce=ai;x.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(ce=s.toneMapping);let ke=Ye?$.isCompressedCubeTexture?$.image[0].mipmaps:$.mipmaps:null,Ge={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:Ae,fragmentShader:ne,defines:x.defines,customVertexShaderID:Me,customFragmentShaderID:Te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:H,batching:bt,batchingColor:bt&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:De===null?s.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Be,matcap:ht,envMap:ct,envMapMode:ct&&$.mapping,envMapPMREM:Ye,envMapMaxLod:Ye?ke.length-1:null,envMapSize:Ye?ke[0].width:null,aoMap:Et,lightMap:Mt,bumpMap:Dt,normalMap:St,displacementMap:Tn,emissiveMap:je,normalMapObjectSpace:St&&x.normalMapType===Kf,normalMapTangentSpace:St&&x.normalMapType===Ma,packedNormalMap:St&&x.normalMapType===Ma&&c_(x.normalMap.format),metalnessMap:Rt,roughnessMap:un,anisotropy:Nt,anisotropyMap:Ue,clearcoat:k,clearcoatMap:R,clearcoatNormalMap:A,clearcoatRoughnessMap:Y,diffuseRoughness:fn,diffuseRoughnessMap:he,dispersion:Xe,retroreflection:dt,iridescence:le,iridescenceMap:ae,iridescenceThicknessMap:me,sheen:pt,sheenColorMap:ve,sheenRoughnessMap:ie,specularMap:se,specularColorMap:ge,specularIntensityMap:F,transmission:ze,transmissionMap:re,thicknessMap:G,gradientMap:de,opaque:x.transparent===!1&&x.blending===Xi&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:pe,alphaHash:Ne,combine:x.combine,mapUv:Be&&u(x.map.channel),aoMapUv:Et&&u(x.aoMap.channel),lightMapUv:Mt&&u(x.lightMap.channel),bumpMapUv:Dt&&u(x.bumpMap.channel),normalMapUv:St&&u(x.normalMap.channel),displacementMapUv:Tn&&u(x.displacementMap.channel),emissiveMapUv:je&&u(x.emissiveMap.channel),metalnessMapUv:Rt&&u(x.metalnessMap.channel),roughnessMapUv:un&&u(x.roughnessMap.channel),anisotropyMapUv:Ue&&u(x.anisotropyMap.channel),clearcoatMapUv:R&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:A&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:he&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:me&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:ie&&u(x.sheenRoughnessMap.channel),specularMapUv:se&&u(x.specularMap.channel),specularColorMapUv:ge&&u(x.specularColorMap.channel),specularIntensityMapUv:F&&u(x.specularIntensityMap.channel),transmissionMapUv:re&&u(x.transmissionMap.channel),thicknessMapUv:G&&u(x.thicknessMap.channel),alphaMapUv:fe&&u(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(St||Nt),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Be||fe),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&St===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ee,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:we,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(xe=>xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===mt,decodeVideoTextureEmissive:je&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===sn,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:qe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&x.extensions.multiDraw===!0||bt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function b(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)M.push(L),M.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(g(M,x),m(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function g(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function m(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let M=f[x.type],L;if(M){let C=li[M];L=ad.clone(C.uniforms)}else L=x.uniforms;return L}function w(x,M){let L=h.get(M);return L!==void 0?++L.usedTimes:(L=new a_(s,M,x,i),l.push(L),h.set(M,L)),L}function S(x){if(--x.usedTimes===0){let M=l.indexOf(x);l[M]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function v(){o.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:_,acquireProgram:w,releaseProgram:S,releaseShaderCache:T,programs:l,dispose:v}}function h_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function u_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Td(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ed(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,p,b,g,m){let _=s[e];return _===void 0?(_={id:f.id,object:f,geometry:u,material:p,materialVariant:a(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:m},s[e]=_):(_.id=f.id,_.object=f,_.geometry=u,_.material=p,_.materialVariant=a(f),_.groupOrder=b,_.renderOrder=f.renderOrder,_.z=g,_.group=m),e++,_}function c(f,u,p,b,g,m,_){_.reversedDepth===!0&&(g=-g);let w=o(f,u,p,b,g,m);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):t.push(w)}function l(f,u,p,b,g,m){let _=o(f,u,p,b,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function h(f,u){t.length>1&&t.sort(f||u_),n.length>1&&n.sort(u||Td),i.length>1&&i.sort(u||Td)}function d(){for(let f=e,u=s.length;f<u;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:h}}function f_(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Ed,s.set(n,[a])):i>=r.length?(a=new Ed,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function d_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new Pe};break;case"SpotLight":t={position:new W,direction:new W,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function p_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var m_=0;function g_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function b_(s){let e=new d_,t=p_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);let i=new W,r=new He,a=new He;function o(l){let h=0,d=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let u=0,p=0,b=0,g=0,m=0,_=0,w=0,S=0,T=0,v=0,x=0,M=0,L=0,C=0;l.sort(g_);for(let U=0,X=l.length;U<X;U++){let I=l[U],z=I.color,Z=I.intensity,$=I.distance,j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ji?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*Z,d+=z.g*Z,f+=z.b*Z;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],Z);C++}else if(I.isSunLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,ee=t.get(I);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[p]=ee,n.sunShadowMap[p]=j;let we=J.getViewportCount();for(let Ae=0;Ae<we;Ae++)n.sunShadowMatrix[b+Ae]=J.getMatrix(Ae),n.sunShadowCascade[b+Ae]=J._cascadeData[Ae];b+=we,p++}n.sun[u]=H,u++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,ee=t.get(I);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.directionalShadow[g]=ee,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=I.shadow.matrix,T++}n.directional[g]=H,g++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(z).multiplyScalar(Z),H.distance=$,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[_]=H;let J=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,J.updateMatrices(I),I.castShadow&&L++),n.spotLightMatrix[_]=J.matrix,I.castShadow){let ee=t.get(I);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.spotShadow[_]=ee,n.spotShadowMap[_]=j,x++}_++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(z).multiplyScalar(Z),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=H,w++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let J=I.shadow,ee=t.get(I);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,n.pointShadow[m]=ee,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=I.shadow.matrix,v++}n.point[m]=H,m++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(Z),H.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[S]=H,S++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let D=n.hash;(D.sunLength!==u||D.directionalLength!==g||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==w||D.hemiLength!==S||D.numSunShadows!==p||D.numDirectionalShadows!==T||D.numPointShadows!==v||D.numSpotShadows!==x||D.numSpotMaps!==M||D.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=g,n.spot.length=_,n.rectArea.length=w,n.point.length=m,n.hemi.length=S,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-L,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,D.sunLength=u,D.directionalLength=g,D.pointLength=m,D.spotLength=_,D.rectAreaLength=w,D.hemiLength=S,D.numSunShadows=p,D.numDirectionalShadows=T,D.numPointShadows=v,D.numSpotShadows=x,D.numSpotMaps=M,D.numLightProbes=C,n.version=m_++)}function c(l,h){let d=0,f=0,u=0,p=0,b=0,g=0,m=h.matrixWorldInverse;for(let _=0,w=l.length;_<w;_++){let S=l[_];if(S.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),d++}else if(S.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),f++}else if(S.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let T=n.rectArea[b];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),b++}else if(S.isPointLight){let T=n.point[u];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){let T=n.hemi[g];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Rd(s){let e=new b_(s),t=[],n=[],i=[];function r(d){h.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function c(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function x_(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Rd(s),e.set(i,[o])):r>=a.length?(o=new Rd(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v_=`uniform sampler2D shadow_pass;
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
}`,y_=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],M_=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Cd=new He,Sa=new W,Th=new W;function S_(s,e,t){let n=new Wi,i=new $e,r=new $e,a=new xt,o=new No,c=new Fo,l={},h=t.maxTextureSize,d={[ri]:nn,[nn]:ri,[sn]:sn},f=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:__,fragmentShader:v_}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new Ct;p.setAttribute("position",new nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Pt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fa;let m=this.type;this.render=function(v,x,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;this.type===Sf&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fa);let L=s.getRenderTarget(),C=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),U=s.state;U.setBlending(ys),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let X=m!==this.type;X&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=v.length;I<z;I++){let Z=v[I],$=Z.shadow;if($===void 0){Fe("WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);let j=$.getFrameExtents();i.multiply(j),r.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,$.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,$.mapSize.y=r.y));let H=s.state.buffers.depth.getReversed();if($.camera._reversedDepth=H,$.map===null||X===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===ur){if(Z.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Pn(i.x,i.y,{format:ji,type:Yn,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),$.map.texture.name=Z.name+".shadowMap",$.map.depthTexture=new Mi(i.x,i.y,Ln),$.map.depthTexture.name=Z.name+".shadowMapDepth",$.map.depthTexture.format=vi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=kt,$.map.depthTexture.magFilter=kt}else Z.isPointLight?($.map=new Aa(i.x),$.map.depthTexture=new Qr(i.x,Jn)):($.map=new Pn(i.x,i.y),$.map.depthTexture=new Mi(i.x,i.y,Jn)),$.map.depthTexture.name=Z.name+".shadowMap",$.map.depthTexture.format=vi,this.type===fa?($.map.depthTexture.compareFunction=H?ch:oh,$.map.depthTexture.minFilter=Vt,$.map.depthTexture.magFilter=Vt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=kt,$.map.depthTexture.magFilter=kt);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==i.x||$.map.height!==i.y)&&$.map.setSize(i.x,i.y);let J=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();Z.isPointLight!==!0&&$.updateMatrices(Z,M);let ee=($.camera.layers.mask&4294967294)!==0?$.camera.layers:M.layers;for(let we=0;we<J;we++){let Ae=$.getCamera(we);if(Z.isPointLight){let ne=$.camera,Me=$.matrix,Te=Z.distance||ne.far;Te!==ne.far&&(ne.far=Te,ne.updateProjectionMatrix()),Sa.setFromMatrixPosition(Z.matrixWorld),ne.position.copy(Sa),Th.copy(ne.position),Th.add(y_[we]),ne.up.copy(M_[we]),ne.lookAt(Th),ne.updateMatrixWorld(),Me.makeTranslation(-Sa.x,-Sa.y,-Sa.z),Cd.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Cd,ne.coordinateSystem,ne.reversedDepth)}if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,we),s.clear();else{we===0&&(s.setRenderTarget($.map),s.clear());let ne=$.getViewport(we);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),U.viewport(a)}n=$.getFrustum(we),S(x,M,Ae,Z,ee,this.type)}$.isPointLightShadow!==!0&&this.type===ur&&_($,M),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(L,C,D)};function _(v,x){let M=e.update(b);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,u.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),v.mapPass===null?v.mapPass=new Pn(i.x,i.y,{format:ji,type:Yn}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),f.uniforms.shadow_pass.value=v.map.depthTexture,f.uniforms.resolution.value.set(v.map.width,v.map.height),f.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(x,null,M,f,b,null),u.uniforms.shadow_pass.value=v.mapPass.texture,u.uniforms.resolution.value.set(v.map.width,v.map.height),u.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(x,null,M,u,b,null)}function w(v,x,M,L){let C=null,D=M.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(D!==void 0)C=D;else if(C=M.isPointLight===!0?c:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let U=C.uuid,X=x.uuid,I=l[U];I===void 0&&(I={},l[U]=I);let z=I[X];z===void 0&&(z=C.clone(),I[X]=z,x.addEventListener("dispose",T)),C=z}if(C.visible=x.visible,C.wireframe=x.wireframe,L===ur?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=s.properties.get(C);U.light=M}return C}function S(v,x,M,L,C,D){if(v.visible===!1)return;if(v.layers.test(C)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&D===ur)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,v.matrixWorld);let I=e.update(v),z=v.material;if(Array.isArray(z)){let Z=I.groups;for(let $=0,j=Z.length;$<j;$++){let H=Z[$],J=z[H.materialIndex];if(J&&J.visible){let ee=w(v,J,L,D);v.onBeforeShadow(s,v,x,M,I,ee,H),s.renderBufferDirect(M,null,I,ee,v,H),v.onAfterShadow(s,v,x,M,I,ee,H)}}}else if(z.visible){let Z=w(v,z,L,D);v.onBeforeShadow(s,v,x,M,I,Z,null),s.renderBufferDirect(M,null,I,Z,v,null),v.onAfterShadow(s,v,x,M,I,Z,null)}}let X=v.children;for(let I=0,z=X.length;I<z;I++)S(X[I],x,M,L,C,D)}function T(v){v.target.removeEventListener("dispose",T);for(let M in l){let L=l[M],C=v.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function w_(s,e){function t(){let F=!1,re=new xt,G=null,de=new xt(0,0,0,0);return{setMask:function(fe){G!==fe&&!F&&(s.colorMask(fe,fe,fe,fe),G=fe)},setLocked:function(fe){F=fe},setClear:function(fe,pe,Ne,qe,ce){ce===!0&&(fe*=qe,pe*=qe,Ne*=qe),re.set(fe,pe,Ne,qe),de.equals(re)===!1&&(s.clearColor(fe,pe,Ne,qe),de.copy(re))},reset:function(){F=!1,G=null,de.set(-1,0,0,0)}}}function n(){let F=!1,re=!1,G=null,de=null,fe=null;return{setReversed:function(pe){if(re!==pe){let Ne=e.get("EXT_clip_control");pe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),re=pe;let qe=fe;fe=null,this.setClear(qe)}},getReversed:function(){return re},setTest:function(pe){pe?Ee(s.DEPTH_TEST):Oe(s.DEPTH_TEST)},setMask:function(pe){G!==pe&&!F&&(s.depthMask(pe),G=pe)},setFunc:function(pe){if(re&&(pe=sd[pe]),de!==pe){switch(pe){case _o:s.depthFunc(s.NEVER);break;case vo:s.depthFunc(s.ALWAYS);break;case yo:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case Mo:s.depthFunc(s.EQUAL);break;case So:s.depthFunc(s.GEQUAL);break;case wo:s.depthFunc(s.GREATER);break;case Ao:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=pe}},setLocked:function(pe){F=pe},setClear:function(pe){fe!==pe&&(fe=pe,re&&(pe=1-pe),s.clearDepth(pe))},reset:function(){F=!1,G=null,de=null,fe=null,re=!1}}}function i(){let F=!1,re=null,G=null,de=null,fe=null,pe=null,Ne=null,qe=null,ce=null;return{setTest:function(ke){F||(ke?Ee(s.STENCIL_TEST):Oe(s.STENCIL_TEST))},setMask:function(ke){re!==ke&&!F&&(s.stencilMask(ke),re=ke)},setFunc:function(ke,Ge,xe){(G!==ke||de!==Ge||fe!==xe)&&(s.stencilFunc(ke,Ge,xe),G=ke,de=Ge,fe=xe)},setOp:function(ke,Ge,xe){(pe!==ke||Ne!==Ge||qe!==xe)&&(s.stencilOp(ke,Ge,xe),pe=ke,Ne=Ge,qe=xe)},setLocked:function(ke){F=ke},setClear:function(ke){ce!==ke&&(s.clearStencil(ke),ce=ke)},reset:function(){F=!1,re=null,G=null,de=null,fe=null,pe=null,Ne=null,qe=null,ce=null}}}let r=new t,a=new n,o=new i,c={},l=new WeakMap,h={},d={},f={},u=new WeakMap,p=[],b=null,g=!1,m=null,_=null,w=null,S=null,T=null,v=null,x=null,M=new Pe(0,0,0),L=0,C=!1,D=null,U=null,X=null,I=null,z=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,j=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=j>=2);let J=null,ee={},we=s.getParameter(s.SCISSOR_BOX),Ae=s.getParameter(s.VIEWPORT),ne=new xt().fromArray(we),Me=new xt().fromArray(Ae);function Te(F,re,G,de){let fe=new Uint8Array(4),pe=s.createTexture();s.bindTexture(F,pe),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<G;Ne++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(re,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,fe):s.texImage2D(re+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,fe);return pe}let De={};De[s.TEXTURE_2D]=Te(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=Te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[s.TEXTURE_2D_ARRAY]=Te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=Te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Ee(s.DEPTH_TEST),a.setFunc(js),Dt(!1),St(Hl),Ee(s.CULL_FACE),Et(ys);function Ee(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Oe(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function bt(F,re){return f[F]!==re?(s.bindFramebuffer(F,re),f[F]=re,F===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=re),F===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=re),!0):!1}function Be(F,re){let G=p,de=!1;if(F){G=u.get(re),G===void 0&&(G=[],u.set(re,G));let fe=F.textures;if(G.length!==fe.length||G[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Ne=fe.length;pe<Ne;pe++)G[pe]=s.COLOR_ATTACHMENT0+pe;G.length=fe.length,de=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,de=!0);de&&s.drawBuffers(G)}function ht(F){return b!==F?(s.useProgram(F),b=F,!0):!1}let ct={[Ms]:s.FUNC_ADD,[Af]:s.FUNC_SUBTRACT,[Tf]:s.FUNC_REVERSE_SUBTRACT};ct[Ef]=s.MIN,ct[Rf]=s.MAX;let Ye={[Cf]:s.ZERO,[Pf]:s.ONE,[If]:s.SRC_COLOR,[ql]:s.SRC_ALPHA,[kf]:s.SRC_ALPHA_SATURATE,[Ff]:s.DST_COLOR,[Df]:s.DST_ALPHA,[Lf]:s.ONE_MINUS_SRC_COLOR,[Xl]:s.ONE_MINUS_SRC_ALPHA,[Uf]:s.ONE_MINUS_DST_COLOR,[Nf]:s.ONE_MINUS_DST_ALPHA,[Of]:s.CONSTANT_COLOR,[Bf]:s.ONE_MINUS_CONSTANT_COLOR,[zf]:s.CONSTANT_ALPHA,[Gf]:s.ONE_MINUS_CONSTANT_ALPHA};function Et(F,re,G,de,fe,pe,Ne,qe,ce,ke){if(F===ys){g===!0&&(Oe(s.BLEND),g=!1);return}if(g===!1&&(Ee(s.BLEND),g=!0),F!==wf){if(F!==m||ke!==C){if((_!==Ms||T!==Ms)&&(s.blendEquation(s.FUNC_ADD),_=Ms,T=Ms),ke)switch(F){case Xi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kn:s.blendFunc(s.ONE,s.ONE);break;case Vl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Je("WebGLState: Invalid blending: ",F);break}else switch(F){case Xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vl:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wl:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",F);break}w=null,S=null,v=null,x=null,M.set(0,0,0),L=0,m=F,C=ke}return}fe=fe||re,pe=pe||G,Ne=Ne||de,(re!==_||fe!==T)&&(s.blendEquationSeparate(ct[re],ct[fe]),_=re,T=fe),(G!==w||de!==S||pe!==v||Ne!==x)&&(s.blendFuncSeparate(Ye[G],Ye[de],Ye[pe],Ye[Ne]),w=G,S=de,v=pe,x=Ne),(qe.equals(M)===!1||ce!==L)&&(s.blendColor(qe.r,qe.g,qe.b,ce),M.copy(qe),L=ce),m=F,C=!1}function Mt(F,re){F.side===sn?Oe(s.CULL_FACE):Ee(s.CULL_FACE);let G=F.side===nn;re&&(G=!G),Dt(G),F.blending===Xi&&F.transparent===!1?Et(ys):Et(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let de=F.stencilWrite;o.setTest(de),de&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),je(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):Oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(F){D!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),D=F)}function St(F){F!==yf?(Ee(s.CULL_FACE),F!==U&&(F===Hl?s.cullFace(s.BACK):F===Mf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Oe(s.CULL_FACE),U=F}function Tn(F){F!==X&&($&&s.lineWidth(F),X=F)}function je(F,re,G){F?(Ee(s.POLYGON_OFFSET_FILL),(I!==re||z!==G)&&(I=re,z=G,a.getReversed()&&(re=-re,G=-G),s.polygonOffset(re,G))):Oe(s.POLYGON_OFFSET_FILL)}function Rt(F){F?Ee(s.SCISSOR_TEST):Oe(s.SCISSOR_TEST)}function un(F){F===void 0&&(F=s.TEXTURE0+Z-1),J!==F&&(s.activeTexture(F),J=F)}function Nt(F,re,G){G===void 0&&(J===null?G=s.TEXTURE0+Z-1:G=J);let de=ee[G];de===void 0&&(de={type:void 0,texture:void 0},ee[G]=de),(de.type!==F||de.texture!==re)&&(J!==G&&(s.activeTexture(G),J=G),s.bindTexture(F,re||De[F]),de.type=F,de.texture=re)}function k(){let F=ee[J];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function fn(){try{s.compressedTexImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function Xe(){try{s.compressedTexImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function dt(){try{s.texSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function le(){try{s.texSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function pt(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function ze(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function Ue(){try{s.texStorage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function R(){try{s.texStorage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function A(){try{s.texImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function Y(){try{s.texImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function he(F){return d[F]!==void 0?d[F]:s.getParameter(F)}function ae(F,re){d[F]!==re&&(s.pixelStorei(F,re),d[F]=re)}function me(F){ne.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),ne.copy(F))}function ve(F){Me.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Me.copy(F))}function ie(F,re){let G=l.get(re);G===void 0&&(G=new WeakMap,l.set(re,G));let de=G.get(F);de===void 0&&(de=s.getUniformBlockIndex(re,F.name),s.uniformBlockBinding(re,de,de),G.set(F,de))}function se(F,re,G){let fe=l.get(re).get(F);c[fe]!==G&&(s.bindBufferBase(s.UNIFORM_BUFFER,fe,G),c[fe]=G)}function ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},J=null,ee={},f={},c={},u=new WeakMap,p=[],b=null,g=!1,m=null,_=null,w=null,S=null,T=null,v=null,x=null,M=new Pe(0,0,0),L=0,C=!1,D=null,U=null,X=null,I=null,z=null,ne.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Ee,disable:Oe,bindFramebuffer:bt,drawBuffers:Be,useProgram:ht,setBlending:Et,setMaterial:Mt,setFlipSided:Dt,setCullFace:St,setLineWidth:Tn,setPolygonOffset:je,setScissorTest:Rt,activeTexture:un,bindTexture:Nt,unbindTexture:k,compressedTexImage2D:fn,compressedTexImage3D:Xe,texImage2D:A,texImage3D:Y,pixelStorei:ae,getParameter:he,updateUBOMapping:ie,uniformBlockBinding:se,texStorage2D:Ue,texStorage3D:R,texSubImage2D:dt,texSubImage3D:le,compressedTexSubImage2D:pt,compressedTexSubImage3D:ze,scissor:me,viewport:ve,reset:ge}}function A_(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,h=new WeakMap,d=new Set,f,u=new WeakMap,p=new Set,b=new FinalizationRegistry(R=>p.delete(R)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,A){return g?new OffscreenCanvas(R,A):Ys("canvas")}function _(R,A,Y){let he=1,ae=Ue(R);if((ae.width>Y||ae.height>Y)&&(he=Y/Math.max(ae.width,ae.height)),he<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let me=Math.floor(he*ae.width),ve=Math.floor(he*ae.height);f===void 0&&(f=m(me,ve));let ie=A?m(me,ve):f;return ie.width=me,ie.height=ve,ie.getContext("2d").drawImage(R,0,0,me,ve),Fe("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+me+"x"+ve+")."),ie}else return"data"in R&&Fe("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function w(R){return R.generateMipmaps}function S(R){s.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(R,A,Y,he,ae,me=!1){if(R!==null){if(s[R]!==void 0)return s[R];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ve;he&&(ve=e.get("EXT_texture_norm16"),ve||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=A;if(A===s.RED&&(Y===s.FLOAT&&(ie=s.R32F),Y===s.HALF_FLOAT&&(ie=s.R16F),Y===s.UNSIGNED_BYTE&&(ie=s.R8),Y===s.UNSIGNED_SHORT&&ve&&(ie=ve.R16_EXT),Y===s.SHORT&&ve&&(ie=ve.R16_SNORM_EXT)),A===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ie=s.R8UI),Y===s.UNSIGNED_SHORT&&(ie=s.R16UI),Y===s.UNSIGNED_INT&&(ie=s.R32UI),Y===s.BYTE&&(ie=s.R8I),Y===s.SHORT&&(ie=s.R16I),Y===s.INT&&(ie=s.R32I)),A===s.RG&&(Y===s.FLOAT&&(ie=s.RG32F),Y===s.HALF_FLOAT&&(ie=s.RG16F),Y===s.UNSIGNED_BYTE&&(ie=s.RG8),Y===s.UNSIGNED_SHORT&&ve&&(ie=ve.RG16_EXT),Y===s.SHORT&&ve&&(ie=ve.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ie=s.RG8UI),Y===s.UNSIGNED_SHORT&&(ie=s.RG16UI),Y===s.UNSIGNED_INT&&(ie=s.RG32UI),Y===s.BYTE&&(ie=s.RG8I),Y===s.SHORT&&(ie=s.RG16I),Y===s.INT&&(ie=s.RG32I)),A===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ie=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(ie=s.RGB16UI),Y===s.UNSIGNED_INT&&(ie=s.RGB32UI),Y===s.BYTE&&(ie=s.RGB8I),Y===s.SHORT&&(ie=s.RGB16I),Y===s.INT&&(ie=s.RGB32I)),A===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ie=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(ie=s.RGBA16UI),Y===s.UNSIGNED_INT&&(ie=s.RGBA32UI),Y===s.BYTE&&(ie=s.RGBA8I),Y===s.SHORT&&(ie=s.RGBA16I),Y===s.INT&&(ie=s.RGBA32I)),A===s.RGB&&(Y===s.UNSIGNED_SHORT&&ve&&(ie=ve.RGB16_EXT),Y===s.SHORT&&ve&&(ie=ve.RGB16_SNORM_EXT),Y===s.UNSIGNED_INT_5_9_9_9_REV&&(ie=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(ie=s.R11F_G11F_B10F)),A===s.RGBA){let se=me?Gr:at.getTransfer(ae);Y===s.FLOAT&&(ie=s.RGBA32F),Y===s.HALF_FLOAT&&(ie=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(ie=se===mt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT&&ve&&(ie=ve.RGBA16_EXT),Y===s.SHORT&&ve&&(ie=ve.RGBA16_SNORM_EXT),Y===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(R,A){let Y;return R?A===null||A===Jn||A===As?Y=s.DEPTH24_STENCIL8:A===Ln?Y=s.DEPTH32F_STENCIL8:A===pr&&(Y=s.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Jn||A===As?Y=s.DEPTH_COMPONENT24:A===Ln?Y=s.DEPTH_COMPONENT32F:A===pr&&(Y=s.DEPTH_COMPONENT16),Y}function M(R,A){return w(R)===!0||R.isFramebufferTexture&&R.minFilter!==kt&&R.minFilter!==Vt?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function L(R){let A=new WeakRef(R);n.get(R).__ref=A,p.add(A),b.register(R,A,A)}function C(R){let A=n.get(R).__ref;A!==void 0&&(p.delete(A),b.unregister(A))}function D(R){X(R.target)}function U(R){I(R.target)}function X(R){R.removeEventListener("dispose",D),C(R),Z(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function I(R){R.removeEventListener("dispose",U),C(R),j(R)}function z(){for(let R of p){let A=R.deref();A!==void 0&&(A.isRenderTarget===!0?I(A):X(A))}p.clear(),d.clear()}function Z(R){let A=n.get(R);if(A.__webglInit===void 0)return;let Y=R.source,he=u.get(Y);if(he){let ae=he[A.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&$(R),Object.keys(he).length===0&&u.delete(Y)}n.remove(R)}function $(R){let A=n.get(R);s.deleteTexture(A.__webglTexture);let Y=R.source,he=u.get(Y);delete he[A.__cacheKey],a.memory.textures--}function j(R){let A=n.get(R);A.__depthDisposeCallback&&A.__depthDisposeCallback();let Y=R.depthTexture;if(Y&&Y.renderTarget===R&&X(Y),R.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(A.__webglFramebuffer[ae]))for(let me=0;me<A.__webglFramebuffer[ae].length;me++)s.deleteFramebuffer(A.__webglFramebuffer[ae][me]);else s.deleteFramebuffer(A.__webglFramebuffer[ae]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ae])}else{if(Array.isArray(A.__webglFramebuffer))for(let ae=0;ae<A.__webglFramebuffer.length;ae++)s.deleteFramebuffer(A.__webglFramebuffer[ae]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ae=0;ae<A.__webglColorRenderbuffer.length;ae++)A.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ae]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let he=R.textures;for(let ae=0,me=he.length;ae<me;ae++){let ve=n.get(he[ae]);ve.__webglTexture&&(s.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(he[ae])}n.remove(R)}let H=0;function J(){H=0}function ee(){return H}function we(R){H=R}function Ae(){let R=H;return R>=i.maxTextures&&Fe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,R}function ne(R){let A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.mipmapsAutoUpdate),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function Me(R,A){let Y=n.get(R);if(R.isVideoTexture&&pt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Y.__version!==R.version){let he=R.image;if(he===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(Y,R,A);return}}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+A)}function Te(R,A){let Y=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){Mt(Y,R,A);return}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+A)}function De(R,A){let Y=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){Mt(Y,R,A);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+A)}function Ee(R,A){let Y=n.get(R);if(R.version>0&&Y.__version!==R.version){Dt(Y,R,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+A)}let Oe={[Vi]:s.REPEAT,[Nn]:s.CLAMP_TO_EDGE,[Ks]:s.MIRRORED_REPEAT},bt={[kt]:s.NEAREST,[Jo]:s.NEAREST_MIPMAP_NEAREST,[ws]:s.NEAREST_MIPMAP_LINEAR,[Vt]:s.LINEAR,[dr]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},Be={[Yf]:s.NEVER,[lh]:s.ALWAYS,[Zf]:s.LESS,[oh]:s.LEQUAL,[$f]:s.EQUAL,[ch]:s.GEQUAL,[Qf]:s.GREATER,[ed]:s.NOTEQUAL};function ht(R,A){if(A.type===Ln&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Vt||A.magFilter===dr||A.magFilter===ws||A.magFilter===On||A.minFilter===Vt||A.minFilter===dr||A.minFilter===ws||A.minFilter===On)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Oe[A.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Oe[A.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Oe[A.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,bt[A.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,bt[A.minFilter]),A.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Be[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===kt||A.minFilter!==ws&&A.minFilter!==On||A.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ct(R,A){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",D),L(A));let he=A.source,ae=u.get(he);ae===void 0&&(ae={},u.set(he,ae));let me=ne(A);if(me!==R.__cacheKey){ae[me]===void 0&&(ae[me]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ae[me].usedTimes++;let ve=ae[R.__cacheKey];ve!==void 0&&(ae[R.__cacheKey].usedTimes--,ve.usedTimes===0&&$(A)),R.__cacheKey=me,R.__webglTexture=ae[me].texture}return Y}function Ye(R,A,Y){return Math.floor(Math.floor(R/Y)/A)}function Et(R,A,Y,he){let me=R.updateRanges;if(me.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,Y,he,A.data);else{me.sort((F,re)=>F.start-re.start);let ve=0;for(let F=1;F<me.length;F++){let re=me[ve],G=me[F],de=re.start+re.count,fe=Ye(G.start,A.width,4),pe=Ye(re.start,A.width,4);G.start<=de+1&&fe===pe&&Ye(G.start+G.count-1,A.width,4)===fe?re.count=Math.max(re.count,G.start+G.count-re.start):(++ve,me[ve]=G)}me.length=ve+1;let ie=t.getParameter(s.UNPACK_ROW_LENGTH),se=t.getParameter(s.UNPACK_SKIP_PIXELS),ge=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let F=0,re=me.length;F<re;F++){let G=me[F],de=Math.floor(G.start/4),fe=Math.ceil(G.count/4),pe=de%A.width,Ne=Math.floor(de/A.width),qe=fe,ce=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ne),t.texSubImage2D(s.TEXTURE_2D,0,pe,Ne,qe,ce,Y,he,A.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ie),t.pixelStorei(s.UNPACK_SKIP_PIXELS,se),t.pixelStorei(s.UNPACK_SKIP_ROWS,ge)}}function Mt(R,A,Y){let he=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(he=s.TEXTURE_3D);let ae=ct(R,A),me=A.source;t.bindTexture(he,R.__webglTexture,s.TEXTURE0+Y);let ve=n.get(me);if(me.version!==ve.__version||ae===!0){if(t.activeTexture(s.TEXTURE0+Y),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let ce=at.getPrimaries(at.workingColorSpace),ke=A.colorSpace===Ii?null:at.getPrimaries(A.colorSpace),Ge=A.colorSpace===Ii||ce===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let se=_(A.image,!1,i.maxTextureSize);se=ze(A,se);let ge=r.convert(A.format,A.colorSpace),F=r.convert(A.type),re=v(A.internalFormat,ge,F,A.normalized,A.colorSpace,A.isVideoTexture);ht(he,A);let G,de=A.mipmaps,fe=A.isVideoTexture!==!0,pe=ve.__version===void 0||ae===!0,Ne=me.dataReady,qe=M(A,se);if(A.isDepthTexture)re=x(A.format===Pi,A.type),pe&&(fe?t.texStorage2D(s.TEXTURE_2D,1,re,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,re,se.width,se.height,0,ge,F,null));else if(A.isDataTexture)if(de.length>0){fe&&pe&&t.texStorage2D(s.TEXTURE_2D,qe,re,de[0].width,de[0].height);for(let ce=0,ke=de.length;ce<ke;ce++)G=de[ce],fe?Ne&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,G.width,G.height,ge,F,G.data):t.texImage2D(s.TEXTURE_2D,ce,re,G.width,G.height,0,ge,F,G.data);A.generateMipmaps=!1}else fe?(pe&&t.texStorage2D(s.TEXTURE_2D,qe,re,se.width,se.height),Ne&&Et(A,se,ge,F)):t.texImage2D(s.TEXTURE_2D,0,re,se.width,se.height,0,ge,F,se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){fe&&pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,qe,re,de[0].width,de[0].height,se.depth);for(let ce=0,ke=de.length;ce<ke;ce++)if(G=de[ce],A.format!==Bn)if(ge!==null)if(fe){if(Ne)if(A.layerUpdates.size>0){let Ge=_h(G.width,G.height,A.format,A.type);for(let xe of A.layerUpdates){let ut=G.data.subarray(xe*Ge/G.data.BYTES_PER_ELEMENT,(xe+1)*Ge/G.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,xe,G.width,G.height,1,ge,ut)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,G.width,G.height,se.depth,ge,G.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,re,G.width,G.height,se.depth,0,G.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?Ne&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,G.width,G.height,se.depth,ge,F,G.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ce,re,G.width,G.height,se.depth,0,ge,F,G.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{fe&&pe&&t.texStorage2D(s.TEXTURE_2D,qe,re,de[0].width,de[0].height);for(let ce=0,ke=de.length;ce<ke;ce++)G=de[ce],A.format!==Bn?ge!==null?fe?Ne&&t.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,G.width,G.height,ge,G.data):t.compressedTexImage2D(s.TEXTURE_2D,ce,re,G.width,G.height,0,G.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?Ne&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,G.width,G.height,ge,F,G.data):t.texImage2D(s.TEXTURE_2D,ce,re,G.width,G.height,0,ge,F,G.data)}else if(A.isDataArrayTexture)if(fe){if(pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,qe,re,se.width,se.height,se.depth),Ne)if(A.layerUpdates.size>0){let ce=_h(se.width,se.height,A.format,A.type);for(let ke of A.layerUpdates){let Ge=se.data.subarray(ke*ce/se.data.BYTES_PER_ELEMENT,(ke+1)*ce/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ke,se.width,se.height,1,ge,F,Ge)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ge,F,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,re,se.width,se.height,se.depth,0,ge,F,se.data);else if(A.isData3DTexture)fe?(pe&&t.texStorage3D(s.TEXTURE_3D,qe,re,se.width,se.height,se.depth),Ne&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ge,F,se.data)):t.texImage3D(s.TEXTURE_3D,0,re,se.width,se.height,se.depth,0,ge,F,se.data);else if(A.isFramebufferTexture){if(pe)if(fe)t.texStorage2D(s.TEXTURE_2D,qe,re,se.width,se.height);else{let ce=se.width,ke=se.height;for(let Ge=0;Ge<qe;Ge++)t.texImage2D(s.TEXTURE_2D,Ge,re,ce,ke,0,ge,F,null),ce>>=1,ke>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){let ce=s.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),se.parentNode!==ce){ce.appendChild(se),d.add(A),ce.onpaint=ke=>{let Ge=ke.changedElements;for(let xe of d)Ge.includes(xe.image)&&(xe.needsUpdate=!0)},ce.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,se);else{let Ge=s.RGBA,xe=s.RGBA,ut=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ge,xe,ut,se)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(de.length>0){if(fe&&pe){let ce=Ue(de[0]);t.texStorage2D(s.TEXTURE_2D,qe,re,ce.width,ce.height)}for(let ce=0,ke=de.length;ce<ke;ce++)G=de[ce],fe?Ne&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,ge,F,G):t.texImage2D(s.TEXTURE_2D,ce,re,ge,F,G);A.generateMipmaps=!1}else if(fe){if(pe){let ce=Ue(se);t.texStorage2D(s.TEXTURE_2D,qe,re,ce.width,ce.height)}Ne&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge,F,se)}else t.texImage2D(s.TEXTURE_2D,0,re,ge,F,se);w(A)&&A.mipmapsAutoUpdate===!0&&S(he),ve.__version=me.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function Dt(R,A,Y){if(A.image.length!==6)return;let he=ct(R,A),ae=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+Y);let me=n.get(ae);if(ae.version!==me.__version||he===!0){t.activeTexture(s.TEXTURE0+Y);let ve=at.getPrimaries(at.workingColorSpace),ie=A.colorSpace===Ii?null:at.getPrimaries(A.colorSpace),se=A.colorSpace===Ii||ve===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ge=A.isCompressedTexture||A.image[0].isCompressedTexture,F=A.image[0]&&A.image[0].isDataTexture,re=[];for(let xe=0;xe<6;xe++)!ge&&!F?re[xe]=_(A.image[xe],!0,i.maxCubemapSize):re[xe]=F?A.image[xe].image:A.image[xe],re[xe]=ze(A,re[xe]);let G=re[0],de=r.convert(A.format,A.colorSpace),fe=r.convert(A.type),pe=v(A.internalFormat,de,fe,A.normalized,A.colorSpace),Ne=A.isVideoTexture!==!0,qe=me.__version===void 0||he===!0,ce=ae.dataReady,ke=M(A,G);ht(s.TEXTURE_CUBE_MAP,A);let Ge;if(A.isDepthTexture){if(pe=x(A.format===Pi,A.type),qe)if(Ne)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,pe,G.width,G.height);else for(let xe=0;xe<6;xe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,pe,G.width,G.height,0,de,fe,null)}else if(ge){Ne&&qe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,pe,G.width,G.height);for(let xe=0;xe<6;xe++){Ge=re[xe].mipmaps;for(let ut=0;ut<Ge.length;ut++){let Ft=Ge[ut];A.format!==Bn?de!==null?Ne?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut,0,0,Ft.width,Ft.height,de,Ft.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut,pe,Ft.width,Ft.height,0,Ft.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut,0,0,Ft.width,Ft.height,de,fe,Ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut,pe,Ft.width,Ft.height,0,de,fe,Ft.data)}}}else{if(Ge=A.mipmaps,Ne&&qe){Ge.length>0&&ke++;let xe=Ue(re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,pe,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(F){Ne?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,re[xe].width,re[xe].height,de,fe,re[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,pe,re[xe].width,re[xe].height,0,de,fe,re[xe].data);for(let ut=0;ut<Ge.length;ut++){let Vn=Ge[ut].image[xe].image;Ne?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut+1,0,0,Vn.width,Vn.height,de,fe,Vn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut+1,pe,Vn.width,Vn.height,0,de,fe,Vn.data)}}else{Ne?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,de,fe,re[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,pe,de,fe,re[xe]);for(let ut=0;ut<Ge.length;ut++){let Ft=Ge[ut];Ne?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut+1,0,0,de,fe,Ft.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut+1,pe,de,fe,Ft.image[xe])}}}w(A)&&A.mipmapsAutoUpdate===!0&&S(s.TEXTURE_CUBE_MAP),me.__version=ae.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function St(R,A,Y,he,ae,me){let ve=r.convert(Y.format,Y.colorSpace),ie=r.convert(Y.type),se=v(Y.internalFormat,ve,ie,Y.normalized,Y.colorSpace),ge=n.get(A),F=n.get(Y);if(F.__renderTarget=A,!ge.__hasExternalTextures){let re=Math.max(1,A.width>>me),G=Math.max(1,A.height>>me);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,me,se,re,G,A.depth,0,ve,ie,null):t.texImage2D(ae,me,se,re,G,0,ve,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),le(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ae,F.__webglTexture,0,dt(A)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ae,F.__webglTexture,me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Tn(R,A,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,R),A.depthBuffer){let he=A.depthTexture,ae=he&&he.isDepthTexture?he.type:null,me=x(A.stencilBuffer,ae),ve=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;le(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt(A),me,A.width,A.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt(A),me,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,me,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,R)}else{let he=A.textures;for(let ae=0;ae<he.length;ae++){let me=he[ae],ve=r.convert(me.format,me.colorSpace),ie=r.convert(me.type),se=v(me.internalFormat,ve,ie,me.normalized,me.colorSpace);le(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt(A),se,A.width,A.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt(A),se,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,se,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function je(R,A,Y){let he=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(A.depthTexture);ae.__renderTarget=A;let me=he?A.depthTexture.image[0]:A.depthTexture.image;(!ae.__webglTexture||me.width!==A.width||me.height!==A.height)&&(me.width=A.width,me.height=A.height,A.depthTexture.needsUpdate=!0),he?Ee(A.depthTexture,0):Me(A.depthTexture,0);let ve=ae.__webglTexture,ie=dt(A),se=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+Y:s.TEXTURE_2D,ge=A.depthTexture.format===Pi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===vi)le(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,se,ve,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,ge,se,ve,0);else if(A.depthTexture.format===Pi)le(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,se,ve,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,ge,se,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(R){let A=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==R.depthTexture){let he=R.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),he){let ae=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,he.removeEventListener("dispose",ae)};he.addEventListener("dispose",ae),A.__depthDisposeCallback=ae}A.__boundDepthTexture=he}if(R.depthTexture&&!A.__autoAllocateDepthBuffer)if(Y)for(let he=0;he<6;he++)je(A.__webglFramebuffer[he],R,he);else R.texture.mipmaps.length>0?je(A.__webglFramebuffer[0],R,0):je(A.__webglFramebuffer,R,0);else if(Y){A.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[he]),A.__webglDepthbuffer[he]===void 0)A.__webglDepthbuffer[he]=s.createRenderbuffer(),Tn(A.__webglDepthbuffer[he],R,!1);else{let ae=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=A.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,me)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Tn(A.__webglDepthbuffer,R,!1);else{let ae=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,me)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function un(R,A,Y){let he=n.get(R);A!==void 0&&St(he.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&Rt(R)}function Nt(R){let A=R.texture,Y=n.get(R),he=n.get(A);R.addEventListener("dispose",U),L(R);let ae=R.textures,me=R.isWebGLCubeRenderTarget===!0,ve=ae.length>1;if(ve||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=A.version,a.memory.textures++),me){Y.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(A.mipmaps.length>0){Y.__webglFramebuffer[ie]=[];for(let se=0;se<A.mipmaps.length;se++)Y.__webglFramebuffer[ie][se]=s.createFramebuffer()}else Y.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ie=0;ie<A.mipmaps.length;ie++)Y.__webglFramebuffer[ie]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(ve)for(let ie=0,se=ae.length;ie<se;ie++){let ge=n.get(ae[ie]);ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&le(R)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ie=0;ie<ae.length;ie++){let se=ae[ie];Y.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[ie]);let ge=r.convert(se.format,se.colorSpace),F=r.convert(se.type),re=v(se.internalFormat,ge,F,se.normalized,se.colorSpace,R.isXRRenderTarget===!0),G=dt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,G,re,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,Y.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Tn(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ht(s.TEXTURE_CUBE_MAP,A);for(let ie=0;ie<6;ie++)if(A.mipmaps.length>0)for(let se=0;se<A.mipmaps.length;se++)St(Y.__webglFramebuffer[ie][se],R,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se);else St(Y.__webglFramebuffer[ie],R,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);w(A)?S(s.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(ve){for(let ie=0,se=ae.length;ie<se;ie++){let ge=ae[ie],F=n.get(ge),re=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,F.__webglTexture),ht(re,ge),St(Y.__webglFramebuffer,R,ge,s.COLOR_ATTACHMENT0+ie,re,0),w(ge)&&S(re)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ie=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,he.__webglTexture),ht(ie,A),A.mipmaps.length>0)for(let se=0;se<A.mipmaps.length;se++)St(Y.__webglFramebuffer[se],R,A,s.COLOR_ATTACHMENT0,ie,se);else St(Y.__webglFramebuffer,R,A,s.COLOR_ATTACHMENT0,ie,0);w(A)?S(ie):A.mipmaps.length>0&&s.texParameteri(ie,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&Rt(R)}function k(R){let A=R.textures;for(let Y=0,he=A.length;Y<he;Y++){let ae=A[Y];if(w(ae)&&ae.mipmapsAutoUpdate===!0){let me=T(R),ve=n.get(ae).__webglTexture;t.bindTexture(me,ve),S(me),t.unbindTexture()}}}let fn=[];function Xe(R){if(R.samples>0){if(le(R)===!1){let A=R.textures,Y=R.width,he=R.height,ae=s.COLOR_BUFFER_BIT,me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(R),ie=A.length>1;if(ie)for(let ge=0;ge<A.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ge=0;ge<A.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[ge]);let F=n.get(A[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,F,0)}s.blitFramebuffer(0,0,Y,he,0,0,Y,he,ae,s.NEAREST),c===!0&&(fn.length=0,fn.push(s.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&fn.push(me),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let ge=0;ge<A.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,ve.__webglColorRenderbuffer[ge]);let F=n.get(A[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,F,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let A=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function dt(R){return Math.min(i.maxSamples,R.samples)}function le(R){let A=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function pt(R){let A=a.render.frame;h.get(R)!==A&&(h.set(R,A),R.update())}function ze(R,A){let Y=R.colorSpace,he=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==mn&&Y!==Ii&&(at.getTransfer(Y)===mt?(he!==Bn||ae!==wn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",Y)),A}function Ue(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=Ae,this.resetTextureUnits=J,this.getTextureUnits=ee,this.setTextureUnits=we,this.setTexture2D=Me,this.setTexture2DArray=Te,this.setTexture3D=De,this.setTextureCube=Ee,this.rebindTextures=un,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=le,this.dispose=z}function T_(s,e){function t(n,i=Ii){let r,a=at.getTransfer(i);if(n===wn)return s.UNSIGNED_BYTE;if(n===Zo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$o)return s.UNSIGNED_SHORT_5_5_5_1;if(n===nh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ih)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===eh)return s.BYTE;if(n===th)return s.SHORT;if(n===pr)return s.UNSIGNED_SHORT;if(n===Yo)return s.INT;if(n===Jn)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===Yn)return s.HALF_FLOAT;if(n===sh)return s.ALPHA;if(n===rh)return s.RGB;if(n===Bn)return s.RGBA;if(n===vi)return s.DEPTH_COMPONENT;if(n===Pi)return s.DEPTH_STENCIL;if(n===Qo)return s.RED;if(n===ec)return s.RED_INTEGER;if(n===ji)return s.RG;if(n===tc)return s.RG_INTEGER;if(n===nc)return s.RGBA_INTEGER;if(n===pa||n===ma||n===ga||n===ba)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ic||n===sc||n===rc||n===ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===cc||n===lc||n===hc||n===uc||n===xa||n===fc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oc||n===cc)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===hc)return r.COMPRESSED_R11_EAC;if(n===uc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xa)return r.COMPRESSED_RG11_EAC;if(n===fc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dc||n===pc||n===mc||n===gc||n===bc||n===xc||n===_c||n===vc||n===yc||n===Mc||n===Sc||n===wc||n===Ac||n===Tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_c)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ec||n===Rc||n===Cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ec)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pc||n===Ic||n===_a||n===Lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var E_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R_=`
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

}`,Dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ea(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new en({vertexShader:E_,fragmentShader:R_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nh=class extends Kn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,u=null,p=null,b=typeof XRWebGLBinding<"u",g=new Dh,m={},_=t.getContextAttributes(),w=null,S=null,T=[],v=[],x=new $e,M=null,L=null,C=new Ht;C.viewport=new xt;let D=new Ht;D.viewport=new xt;let U=[C,D],X=new Ho,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let Me=T[ne];return Me===void 0&&(Me=new Qs,T[ne]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ne){let Me=T[ne];return Me===void 0&&(Me=new Qs,T[ne]=Me),Me.getGripSpace()},this.getHand=function(ne){let Me=T[ne];return Me===void 0&&(Me=new Qs,T[ne]=Me),Me.getHandSpace()};function Z(ne){let Me=v.indexOf(ne.inputSource);if(Me===-1)return;let Te=T[Me];Te!==void 0&&(Te.update(ne.inputSource,ne.frame,l||a),Te.dispatchEvent({type:ne.type,data:ne.inputSource}))}function $(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",j);for(let ne=0;ne<T.length;ne++){let Me=v[ne];Me!==null&&(v[ne]=null,T[ne].disconnect(Me))}I=null,z=null,g.reset();for(let ne in m)delete m[ne];if(e.setRenderTarget(w),u=null,f=null,d=null,i=null,S=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),L!==null){let ne=L.camera;ne.fov=L.fov,ne.zoom=L.zoom,ne.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",$),i.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,De=null,Ee=null;_.depth&&(Ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=_.stencil?Pi:vi,De=_.stencil?As:Jn);let Oe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Oe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Pn(f.textureWidth,f.textureHeight,{format:Bn,type:wn,depthTexture:new Mi(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Te={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,Te),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new Pn(u.framebufferWidth,u.framebufferHeight,{format:Bn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ae.setContext(i),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(ne){for(let Me=0;Me<ne.removed.length;Me++){let Te=ne.removed[Me],De=v.indexOf(Te);De>=0&&(v[De]=null,T[De].disconnect(Te))}for(let Me=0;Me<ne.added.length;Me++){let Te=ne.added[Me],De=v.indexOf(Te);if(De===-1){for(let Oe=0;Oe<T.length;Oe++)if(Oe>=v.length){v.push(Te),De=Oe;break}else if(v[Oe]===null){v[Oe]=Te,De=Oe;break}if(De===-1)break}let Ee=T[De];Ee&&Ee.connect(Te)}}function H(ne,Me){Me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(Me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let Me=ne.near,Te=ne.far;g.texture!==null&&(g.depthNear>0&&(Me=g.depthNear),g.depthFar>0&&(Te=g.depthFar)),X.near=D.near=C.near=Me,X.far=D.far=C.far=Te,(I!==X.near||z!==X.far)&&(i.updateRenderState({depthNear:X.near,depthFar:X.far}),I=X.near,z=X.far),X.layers.mask=ne.layers.mask|6,C.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;let De=ne.parent,Ee=X.cameras;H(X,De);for(let Oe=0;Oe<Ee.length;Oe++)H(Ee[Oe],De);X.projectionMatrix.copy(C.projectionMatrix),X.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&ne.isPerspectiveCamera&&(L={camera:ne,fov:ne.fov,zoom:ne.zoom}),J(ne,X,De)};function J(ne,Me,Te){Te===null?ne.matrix.copy(Me.matrixWorld):(ne.matrix.copy(Te.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(Me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(Me.projectionMatrix),ne.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ls*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(ne){c=ne,f!==null&&(f.fixedFoveation=ne),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(X)},this.getCameraTexture=function(ne){return m[ne]};let ee=null;function we(ne,Me){if(h=Me.getViewerPose(l||a),p=Me,h!==null){let Te=h.views;u!==null&&(e.setRenderTargetFramebuffer(S,u.framebuffer),e.setRenderTarget(S));let De=!1;Te.length!==X.cameras.length&&(X.cameras.length=0,De=!0);for(let Be=0;Be<Te.length;Be++){let ht=Te[Be],ct=null;if(u!==null)ct=u.getViewport(ht);else{let Et=d.getViewSubImage(f,ht);ct=Et.viewport,Be===0&&(e.setRenderTargetTextures(S,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(S))}let Ye=U[Be];Ye===void 0&&(Ye=new Ht,Ye.layers.enable(Be),Ye.viewport=new xt,U[Be]=Ye),Ye.matrix.fromArray(ht.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ht.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ct.x,ct.y,ct.width,ct.height),Be===0&&(X.matrix.copy(Ye.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),De===!0&&X.cameras.push(Ye)}let Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){d=n.getBinding();let Be=d.getDepthInformation(Te[0]);Be&&Be.isValid&&Be.texture&&g.init(Be,i.renderState)}if(Ee&&Ee.includes("camera-access")&&b){e.state.unbindTexture(),d=n.getBinding();for(let Be=0;Be<Te.length;Be++){let ht=Te[Be].camera;if(ht){let ct=m[ht];ct||(ct=new ea,m[ht]=ct);let Ye=d.getCameraImage(ht);ct.sourceTexture=Ye}}}}for(let Te=0;Te<T.length;Te++){let De=v[Te],Ee=T[Te];De!==null&&Ee!==void 0&&Ee.update(De,Me,l||a)}ee&&ee(ne,Me),Me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Me}),p=null}let Ae=new Pd;Ae.setAnimationLoop(we),this.setAnimationLoop=function(ne){ee=ne},this.dispose=function(){}}},C_=new He,zd=new Qe;zd.set(-1,0,0,0,1,0,0,0,1);function P_(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,gh(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,w,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&u(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),b(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,_,w):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===nn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===nn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),w=_.envMap,S=_.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(C_.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(zd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,_){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function I_(s,e,t,n){let i={},r={};function a(_,w){let S=w.program;n.uniformBlockBinding(_,S,i[_.id])}function o(_,w){let S=i[_.id];S===void 0&&(p(_),S=c(_),i[_.id]=S,_.addEventListener("dispose",g));let T=w.program;n.updateUBOMapping(_,T);let v=e.render.frame;r[_.id]!==v&&(l(_),r[_.id]=v)}function c(_){let w=s.createBuffer(),S=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,S,T),s.bindBuffer(s.UNIFORM_BUFFER,null),w}function l(_){let w=i[_.id],S=_.uniforms,T=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let v=0,x=S.length;v<x;v++){let M=S[v];if(Array.isArray(M))for(let L=0,C=M.length;L<C;L++)h(M[L],v,L,T);else h(M,v,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(_,w,S,T){if(f(_,w,S,T)===!0){let v=_.__offset,x=_.value;if(Array.isArray(x)){let M=0;for(let L=0;L<x.length;L++){let C=x[L],D=b(C,!0);d(C,_.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,_.__data)}}function d(_,w,S){typeof _=="number"||typeof _=="boolean"?w[S]=_:_.isMatrix3?(w[S]=_.elements[0],w[S+1]=_.elements[1],w[S+2]=_.elements[2],w[S+3]=0,w[S+4]=_.elements[3],w[S+5]=_.elements[4],w[S+6]=_.elements[5],w[S+7]=0,w[S+8]=_.elements[6],w[S+9]=_.elements[7],w[S+10]=_.elements[8],w[S+11]=0):ArrayBuffer.isView(_)?w.set(_.subarray(0,w.length-S),S):_.toArray(w,S)}function f(_,w,S,T){let v=_.value,x=w+"_"+S;if(Array.isArray(v)){T[x]===void 0&&(T[x]=[]);let M=T[x],L=!1;for(let C=0;C<v.length;C++)u(v[C],M,C)===!0&&(L=!0);return L}return u(v,T,x)}function u(_,w,S){if(w[S]===void 0)return typeof _=="number"||typeof _=="boolean"?w[S]=_:ArrayBuffer.isView(_)?w[S]=_.slice():w[S]=_.clone(),!0;{let T=w[S];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return w[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function p(_){let w=_.uniforms,S=0,T=16;for(let x=0,M=w.length;x<M;x++){let L=Array.isArray(w[x])?w[x]:[w[x]];for(let C=0,D=L.length;C<D;C++){let U=L[C],X=Array.isArray(U.value)?U.value:[U.value],I=Array.isArray(w[x])||Array.isArray(U.value),z=S;for(let $=0,j=X.length;$<j;$++){let H=X[$],J=b(H,I),ee=S%T,we=ee%J.boundary,Ae=ee+we;S+=we,Ae!==0&&T-Ae<J.storage&&(S+=T-Ae),$===0&&(z=S),S+=J.storage}let Z=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new Z((S-z)/Float32Array.BYTES_PER_ELEMENT),U.__offset=z}}let v=S%T;return v>0&&(S+=T-v),_.__size=S,_.__cache={},this}function b(_,w){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=16,S.storage=48):_.isMatrix4?(S.boundary=16,S.storage=64):_.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",_),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function g(_){let w=_.target;w.removeEventListener("dispose",g),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function m(){for(let _ in i)s.deleteBuffer(i[_]);i={},r={}}return{bind:a,update:o,dispose:m}}var L_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;function D_(){return ci===null&&(ci=new ir(L_,16,16,ji,Yn),ci.name="DFG_LUT",ci.minFilter=Vt,ci.magFilter=Vt,ci.wrapS=Nn,ci.wrapT=Nn,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var Bc=class{constructor(e={}){let{canvas:t=td(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=wn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let b=u,g=new Set([nc,tc,ec]),m=new Set([wn,Jn,pr,As,Zo,$o]),_=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},T=null,v=null,x=[],M=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,U=null,X=null,I=null,z=null;this._outputColorSpace=At;let Z=0,$=0,j=null,H=-1,J=null,ee=new xt,we=new xt,Ae=null,ne=new Pe(0),Me=0,Te=t.width,De=t.height,Ee=1,Oe=null,bt=null,Be=new xt(0,0,Te,De),ht=new xt(0,0,Te,De),ct=!1,Ye=new Wi,Et=new Co,Mt=!1,Dt=!1,St=new He,Tn=new W,je=new xt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},un=!1;function Nt(){return j===null?Ee:1}let k=n;function fn(y,E){return t.getContext(y,E)}let Xe,dt,le,pt,ze,Ue,R,A,Y,he,ae,me,ve,ie,se,ge,F,re,G,de,fe,pe,Ne;try{let y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",xe,!1),k===null){let E="webgl2";if(k=fn(E,y),k===null)throw fn(E)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(y){throw t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Je("WebGLRenderer: "+y.message),y}function qe(){Xe=new Wb(k),Xe.init(),fe=new T_(k,Xe),dt=new Db(k,Xe,e,fe),le=new w_(k,Xe),dt.reversedDepthBuffer&&f&&le.buffers.depth.setReversed(!0),X=k.createFramebuffer(),I=k.createFramebuffer(),z=k.createFramebuffer(),pt=new jb(k),ze=new h_,Ue=new A_(k,Xe,le,ze,dt,fe,pt),R=new Vb(C),A=new Jm(k),pe=new Ib(k,A),Y=new qb(k,A,pt,pe),he=new Jb(k,Y,A,pe,pt),re=new Kb(k,dt,Ue),se=new Nb(ze),ae=new l_(C,R,Xe,dt,pe,se),me=new P_(C,ze),ve=new f_,ie=new x_(Xe),F=new Pb(C,R,le,he,p,c),ge=new S_(C,he,dt),Ne=new I_(k,pt,dt,le),G=new Lb(k,Xe,pt),de=new Xb(k,Xe,pt),pt.programs=ae.programs,C.capabilities=dt,C.extensions=Xe,C.properties=ze,C.renderLists=ve,C.shadowMap=ge,C.state=le,C.info=pt}b!==wn&&(L=new Zb(b,t.width,t.height,o,i,r));let ce=new Nh(C,k);this.xr=ce,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let y=Xe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Xe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(y){y!==void 0&&(Ee=y,this.setSize(Te,De,!1))},this.getSize=function(y){return y.set(Te,De)},this.setSize=function(y,E,V=!0){if(ce.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=y,De=E,t.width=Math.floor(y*Ee),t.height=Math.floor(E*Ee),V===!0&&(t.style.width=y+"px",t.style.height=E+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,y,E)},this.getDrawingBufferSize=function(y){return y.set(Te*Ee,De*Ee).floor()},this.setDrawingBufferSize=function(y,E,V){Te=y,De=E,Ee=V,t.width=Math.floor(y*V),t.height=Math.floor(E*V),this.setViewport(0,0,y,E)},this.setEffects=function(y){if(b===wn){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let E=0;E<y.length;E++)if(y[E].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ee)},this.getViewport=function(y){return y.copy(Be)},this.setViewport=function(y,E,V,N){y.isVector4?Be.set(y.x,y.y,y.z,y.w):Be.set(y,E,V,N),le.viewport(ee.copy(Be).multiplyScalar(Nt()).round())},this.getScissor=function(y){return y.copy(ht)},this.setScissor=function(y,E,V,N){y.isVector4?ht.set(y.x,y.y,y.z,y.w):ht.set(y,E,V,N),le.scissor(we.copy(ht).multiplyScalar(Nt()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(y){le.setScissorTest(ct=y)},this.setOpaqueSort=function(y){Oe=y},this.setTransparentSort=function(y){bt=y},this.getClearColor=function(y){return y.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(y=!0,E=!0,V=!0){let N=0;if(y){let B=!1;if(j!==null){let oe=j.texture.format;B=g.has(oe)}if(B){let oe=j.texture.type,Se=m.has(oe),ue=F.getClearColor(),_e=F.getClearAlpha(),Ce=ue.r,We=ue.g,et=ue.b;Se?(_[0]=Ce,_[1]=We,_[2]=et,_[3]=_e,k.clearBufferuiv(k.COLOR,0,_)):(w[0]=Ce,w[1]=We,w[2]=et,w[3]=_e,k.clearBufferiv(k.COLOR,0,w))}else N|=k.COLOR_BUFFER_BIT}E&&(N|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(N|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N!==0&&k.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),F.dispose(),ve.dispose(),ie.dispose(),Ue.dispose(),ze.dispose(),R.dispose(),he.dispose(),Y.dispose(),pe.dispose(),Ne.dispose(),ae.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Ha),ce.removeEventListener("sessionend",yn),It.stop()};function ke(y){y.preventDefault(),Hr("WebGLRenderer: Context Lost."),D=!0}function Ge(){Hr("WebGLRenderer: Context Restored."),D=!1;let y=pt.autoReset,E=ge.enabled,V=ge.autoUpdate,N=ge.needsUpdate,B=ge.type;qe(),pt.autoReset=y,ge.enabled=E,ge.autoUpdate=V,ge.needsUpdate=N,ge.type=B}function xe(y){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ut(y){let E=y.target;E.removeEventListener("dispose",ut),Ft(E)}function Ft(y){Vn(y),ze.remove(y)}function Vn(y){let E=ze.get(y).programs;E!==void 0&&(E.forEach(function(V){ae.releaseProgram(V)}),y.isShaderMaterial&&ae.releaseShaderCache(y))}this.renderBufferDirect=function(y,E,V,N,B,oe){E===null&&(E=Rt);let Se=B.isMesh&&B.matrixWorld.determinantAffine()<0,ue=P(y,E,V,N,B);le.setMaterial(N,Se);let _e=V.index,Ce=1;if(N.wireframe===!0){if(_e=Y.getWireframeAttribute(V),_e===void 0)return;Ce=2}let We=V.drawRange,et=V.attributes.position,O=We.start*Ce,K=(We.start+We.count)*Ce;oe!==null&&(O=Math.max(O,oe.start*Ce),K=Math.min(K,(oe.start+oe.count)*Ce)),_e!==null?(O=Math.max(O,0),K=Math.min(K,_e.count)):et!=null&&(O=Math.max(O,0),K=Math.min(K,et.count));let ye=K-O;if(ye<0||ye===1/0)return;pe.setup(B,N,ue,V,_e);let Ie,Le=G;if(_e!==null&&(Ie=A.get(_e),Le=de,Le.setIndex(Ie)),B.isMesh)N.wireframe===!0?(le.setLineWidth(N.wireframeLinewidth*Nt()),Le.setMode(k.LINES)):Le.setMode(k.TRIANGLES);else if(B.isLine){let Ze=N.linewidth;Ze===void 0&&(Ze=1),le.setLineWidth(Ze*Nt()),B.isLineSegments?Le.setMode(k.LINES):B.isLineLoop?Le.setMode(k.LINE_LOOP):Le.setMode(k.LINE_STRIP)}else B.isPoints?Le.setMode(k.POINTS):B.isSprite&&Le.setMode(k.TRIANGLES);if(B.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))Le.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ze=B._multiDrawStarts,be=B._multiDrawCounts,tt=B._multiDrawCount,st=_e?A.get(_e).bytesPerElement:1,tn=ze.get(N).currentProgram.getUniforms();for(let rt=0;rt<tt;rt++)tn.setValue(k,"_gl_DrawID",rt),Le.render(Ze[rt]/st,be[rt])}else if(B.isInstancedMesh)Le.renderInstances(O,ye,B.count);else if(V.isInstancedBufferGeometry){let Ze=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,be=Math.min(V.instanceCount,Ze);Le.renderInstances(O,ye,be)}else Le.render(O,ye)};function Is(y,E,V,N){U!==null&&y.isNodeMaterial&&U.setObject(N,y),Mt===!0&&se.setState(y,V,!1),y.transparent===!0&&y.side===sn&&y.forceSinglePass===!1?(y.side=nn,y.needsUpdate=!0,Fi(y,E,N),y.side=ri,y.needsUpdate=!0,Fi(y,E,N),y.side=sn):Fi(y,E,N)}this.compile=function(y,E,V=null){V===null&&(V=y),U!==null&&U.renderStart(y,E,V),v=ie.get(V),v.init(E),M.push(v),V.traverseVisible(function(B){B.isLight&&B.layers.test(E.layers)&&(v.pushLight(B),B.castShadow&&v.pushShadow(B))}),y!==V&&y.traverseVisible(function(B){B.isLight&&B.layers.test(E.layers)&&(v.pushLight(B),B.castShadow&&v.pushShadow(B))}),v.setupLights(),U!==null&&U.updateLights(v.state.lightsArray),Dt=this.localClippingEnabled,Mt=se.init(this.clippingPlanes,Dt),Mt===!0&&se.setGlobalState(this.clippingPlanes,E),U!==null&&ge.render(v.state.shadowsArray,V,E);let N=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let oe=B.material;if(oe)if(Array.isArray(oe))for(let Se=0;Se<oe.length;Se++){let ue=oe[Se];Is(ue,V,E,B),N.add(ue)}else Is(oe,V,E,B),N.add(oe)}),v=M.pop(),U!==null&&U.renderEnd(),N},this.compileAsync=function(y,E,V=null){let N=this.compile(y,E,V);return new Promise(B=>{function oe(){if(N.forEach(function(Se){let _e=ze.get(Se).currentProgram;(_e===void 0||_e.isReady())&&N.delete(Se)}),N.size===0){B(y);return}setTimeout(oe,10)}Xe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Tr=null;function rl(y){Tr&&Tr(y)}function Ha(){It.stop()}function yn(){It.start()}let It=new Pd;It.setAnimationLoop(rl),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(y){Tr=y,ce.setAnimationLoop(y),y===null?It.stop():It.start()},ce.addEventListener("sessionstart",Ha),ce.addEventListener("sessionend",yn),this.render=function(y,E){if(E!==void 0&&E.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(y,E);let V=ce.enabled===!0&&ce.isPresenting===!0,N=L!==null&&(j===null||V)&&L.begin(C,j);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),E.parent===null&&E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(E),E=ce.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,E,j),v=ie.get(y,M.length),v.init(E),v.state.textureUnits=Ue.getTextureUnits(),M.push(v),St.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),E.isArrayCamera?Et.setFromArrayCamera(E):Ye.setFromProjectionMatrix(St,Fn,E.reversedDepth),Dt=this.localClippingEnabled,Mt=se.init(this.clippingPlanes,Dt),T=ve.get(y,x.length),T.init(),x.push(T),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let Se=C.xr.getDepthSensingMesh();Se!==null&&an(Se,E,-1/0,C.sortObjects)}an(y,E,0,C.sortObjects),T.finish(),U!==null&&U.updateLights(v.state.lightsArray),C.sortObjects===!0&&T.sort(Oe,bt),un=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,un&&F.addToRenderList(T,y),this.info.autoReset===!0&&this.info.reset(),Mt===!0&&se.beginShadows();let B=v.state.shadowsArray;if(ge.render(B,y,E),Mt===!0&&se.endShadows(),(N&&L.hasRenderPass())===!1){let Se=T.opaque,ue=T.transmissive;if(v.setupLights(),E.isArrayCamera){let _e=E.cameras;if(ue.length>0)for(let Ce=0,We=_e.length;Ce<We;Ce++){let et=_e[Ce];Va(Se,ue,y,et)}un&&F.render(y);for(let Ce=0,We=_e.length;Ce<We;Ce++){let et=_e[Ce];Qn(T,y,et,et.viewport)}}else ue.length>0&&Va(Se,ue,y,E),un&&F.render(y),Qn(T,y,E)}j!==null&&$===0&&(Ue.updateMultisampleRenderTarget(j),Ue.updateRenderTargetMipmap(j)),N&&L.end(C),y.isScene===!0&&y.onAfterRender(C,y,E),pe.resetDefaultState(),H=-1,J=null,M.pop(),M.length>0?(v=M[M.length-1],Ue.setTextureUnits(v.state.textureUnits),Mt===!0&&se.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,U!==null&&U.renderEnd()};function an(y,E,V,N){if(y.visible===!1)return;if(y.layers.test(E.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(E);else if(y.isLight)v.pushLight(y),y.castShadow&&v.pushShadow(y);else if(y.isSprite){let Se=E.isArrayCamera?Et:Ye;if(!y.frustumCulled||y.intersectsFrustum(Se)){N&&je.setFromMatrixPosition(y.matrixWorld).applyMatrix4(St);let ue=he.update(y),_e=y.material;_e.visible&&T.push(y,ue,_e,V,je.z,null,E)}}else if(y.isMesh||y.isLine||y.isPoints){let Se=E.isArrayCamera?Et:Ye;if(!y.frustumCulled||y.intersectsFrustum(Se)){let ue=he.update(y),_e=y.material;if(N&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),je.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),je.copy(ue.boundingSphere.center)),je.applyMatrix4(y.matrixWorld).applyMatrix4(St)),Array.isArray(_e)){let Ce=ue.groups;for(let We=0,et=Ce.length;We<et;We++){let O=Ce[We],K=_e[O.materialIndex];K&&K.visible&&T.push(y,ue,K,V,je.z,O,E)}}else _e.visible&&T.push(y,ue,_e,V,je.z,null,E)}}}let oe=y.children;for(let Se=0,ue=oe.length;Se<ue;Se++)an(oe[Se],E,V,N)}function Qn(y,E,V,N){let{opaque:B,transmissive:oe,transparent:Se}=y;v.setupLightsView(V),Mt===!0&&se.setGlobalState(C.clippingPlanes,V),N&&le.viewport(ee.copy(N)),B.length>0&&Qi(B,E,V),oe.length>0&&Qi(oe,E,V),Se.length>0&&Qi(Se,E,V),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Va(y,E,V,N){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[N.id]===void 0){let O=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[N.id]=new Pn(1,1,{generateMipmaps:!0,type:O?Yn:wn,minFilter:On,samples:Math.max(4,dt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}let oe=v.state.transmissionRenderTarget[N.id],Se=N.viewport||ee;oe.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);let ue=C.getRenderTarget(),_e=C.getActiveCubeFace(),Ce=C.getActiveMipmapLevel();C.setRenderTarget(oe),C.getClearColor(ne),Me=C.getClearAlpha(),Me<1&&C.setClearColor(16777215,.5),C.clear(),un&&F.render(V);let We=C.toneMapping;C.toneMapping=ai;let et=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),v.setupLightsView(N),Mt===!0&&se.setGlobalState(C.clippingPlanes,N),Qi(y,V,N),Ue.updateMultisampleRenderTarget(oe),Ue.updateRenderTargetMipmap(oe),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let O=!1;for(let K=0,ye=E.length;K<ye;K++){let Ie=E[K],{object:Le,geometry:Ze,material:be,group:tt}=Ie;if(be.side===sn&&Le.layers.test(N.layers)){let st=be.side;be.side=nn,be.needsUpdate=!0,Er(Le,V,N,Ze,be,tt),be.side=st,be.needsUpdate=!0,O=!0}}O===!0&&(Ue.updateMultisampleRenderTarget(oe),Ue.updateRenderTargetMipmap(oe))}C.setRenderTarget(ue,_e,Ce),C.setClearColor(ne,Me),et!==void 0&&(N.viewport=et),C.toneMapping=We}function Qi(y,E,V){let N=E.isScene===!0?E.overrideMaterial:null;for(let B=0,oe=y.length;B<oe;B++){let Se=y[B],{object:ue,geometry:_e,group:Ce}=Se,We=Se.material;We.allowOverride===!0&&N!==null&&(We=N),ue.layers.test(V.layers)&&Er(ue,E,V,_e,We,Ce)}}function Er(y,E,V,N,B,oe){U!==null&&B.isNodeMaterial&&U.setObject(y,B),y.onBeforeRender(C,E,V,N,B,oe),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(C,E,V,N,y,oe),B.transparent===!0&&B.side===sn&&B.forceSinglePass===!1?(B.side=nn,B.needsUpdate=!0,C.renderBufferDirect(V,E,N,B,y,oe),B.side=ri,B.needsUpdate=!0,C.renderBufferDirect(V,E,N,B,y,oe),B.side=sn):C.renderBufferDirect(V,E,N,B,y,oe),y.onAfterRender(C,E,V,N,B,oe)}function Rr(y){let E=0;for(let V of y)V.texture!==null&&E++;return E}function Fi(y,E,V){E.isScene!==!0&&(E=Rt);let N=ze.get(y),B=v.state.lights,oe=v.state.shadowsArray,Se=B.state.version,ue=ae.getParameters(y,B.state,oe,E,V,v.state.lightProbeGridArray),_e=ae.getProgramCacheKey(ue),Ce=N.programs;N.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?E.environment:null,N.fog=E.fog;let We=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;N.envMap=R.get(y.envMap||N.environment,We),N.envMapRotation=N.environment!==null&&y.envMap===null?E.environmentRotation:y.envMapRotation,Ce===void 0&&(y.addEventListener("dispose",ut),Ce=new Map,N.programs=Ce,N.programVariants=new Map);let et=Ce.get(_e);if(et!==void 0){if(N.currentProgram===et&&N.lightsStateVersion===Se)return ol(y,ue),et}else ue.uniforms=ae.getUniforms(y),U!==null&&y.isNodeMaterial&&U.build(y,V,ue),y.onBeforeCompile(ue,C),et=ae.acquireProgram(ue,_e),Ce.set(_e,et),N.uniforms=ue.uniforms;let O=N.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(O.clippingPlanes=se.uniform),ol(y,ue),N.needsLights=q(y),N.lightsStateVersion=Se,N.needsLights&&(O.ambientLightColor.value=B.state.ambient,O.lightProbe.value=B.state.probe,O.sunLights.value=B.state.sun,O.sunLightShadows.value=B.state.sunShadow,O.directionalLights.value=B.state.directional,O.directionalLightShadows.value=B.state.directionalShadow,O.spotLights.value=B.state.spot,O.spotLightShadows.value=B.state.spotShadow,O.rectAreaLights.value=B.state.rectArea,O.ltc_1.value=B.state.rectAreaLTC1,O.ltc_2.value=B.state.rectAreaLTC2,O.pointLights.value=B.state.point,O.pointLightShadows.value=B.state.pointShadow,O.hemisphereLights.value=B.state.hemi,O.sunShadowMatrix.value=B.state.sunShadowMatrix,O.sunShadowCascade.value=B.state.sunShadowCascade,O.directionalShadowMatrix.value=B.state.directionalShadowMatrix,O.spotLightMatrix.value=B.state.spotLightMatrix,O.spotLightMap.value=B.state.spotLightMap,O.pointShadowMatrix.value=B.state.pointShadowMatrix),N.numLightProbeGrids=Rr(v.state.lightProbeGridArray),N.currentProgram=et,N.uniformsList=null,et}function al(y,E,V,N,B){let oe=ze.get(y),Se=oe.currentProgram.id+","+N+","+B,ue=oe.programVariants.get(Se);return ue===void 0?(ue=Fi(y,E,V),oe.programVariants.set(Se,ue)):(oe.currentProgram=ue,oe.uniformsList=null,oe.outputColorSpace=N,oe.toneMapping=B),ue}function fi(y){if(y.uniformsList===null){let E=y.currentProgram.getUniforms();y.uniformsList=gr.seqWithValue(E.seq,y.uniforms)}return y.uniformsList}function ol(y,E){let V=ze.get(y);V.outputColorSpace=E.outputColorSpace,V.batching=E.batching,V.batchingColor=E.batchingColor,V.instancing=E.instancing,V.instancingColor=E.instancingColor,V.instancingMorph=E.instancingMorph,V.skinning=E.skinning,V.morphTargets=E.morphTargets,V.morphNormals=E.morphNormals,V.morphColors=E.morphColors,V.morphTargetsCount=E.morphTargetsCount,V.numClippingPlanes=E.numClippingPlanes,V.numIntersection=E.numClipIntersection,V.vertexAlphas=E.vertexAlphas,V.vertexTangents=E.vertexTangents,V.toneMapping=E.toneMapping}function P(y,E,V,N,B){E.isScene!==!0&&(E=Rt),Ue.resetTextureUnits();let oe=E.fog,Se=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?E.environment:null,ue=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:at.workingColorSpace,_e=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,Ce=R.get(N.envMap||Se,_e),We=N.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,et=!!V.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),O=!!V.morphAttributes.position,K=!!V.morphAttributes.normal,ye=!!V.morphAttributes.color,Ie=ai;N.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ie=C.toneMapping);let Le=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ze=Le!==void 0?Le.length:0,be=ze.get(N),tt=v.state.lights;if(Mt===!0&&(Dt===!0||y!==J)){let wt=y===J&&N.id===H;se.setState(N,y,wt)}let st=!1,tn=!1;N.version===be.__version?be.needsLights&&be.lightsStateVersion!==tt.state.version||B.isBatchedMesh&&be.batching===!1||!B.isBatchedMesh&&be.batching===!0||B.isBatchedMesh&&be.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&be.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&be.instancing===!1||!B.isInstancedMesh&&be.instancing===!0||B.isSkinnedMesh&&be.skinning===!1||!B.isSkinnedMesh&&be.skinning===!0||B.isInstancedMesh&&be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&be.instancingMorph===!1&&B.morphTexture!==null||be.envMap!==Ce||N.fog===!0&&be.fog!==oe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==se.numPlanes||be.numIntersection!==se.numIntersection)||be.vertexAlphas!==We||be.vertexTangents!==et||be.morphTargets!==O||be.morphNormals!==K||be.morphColors!==ye||be.morphTargetsCount!==Ze||be.numLightProbeGrids!==Rr(v.state.lightProbeGridArray)?st=!0:(be.outputColorSpace!==ue||be.toneMapping!==Ie)&&(tn=!0):(st=!0,be.__version=N.version);let rt=be.currentProgram;(st===!0||tn===!0)&&(rt=tn===!0?al(N,E,B,ue,Ie):Fi(N,E,B),U&&N.isNodeMaterial&&U.onUpdateProgram(N,rt,be));let Gt=!1,Jt=!1,En=!1,Ke=rt.getUniforms(),yt=be.uniforms;if(le.useProgram(rt.program)&&(Gt=!0,Jt=!0,En=!0),N.id!==H&&(H=N.id,Jt=!0),Gt||J!==y){le.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ke.setValue(k,"projectionMatrix",y.projectionMatrix),Ke.setValue(k,"viewMatrix",y.matrixWorldInverse);let Ut=Ke.map.cameraPosition;Ut!==void 0&&Ut.setValue(k,Tn.setFromMatrixPosition(y.matrixWorld)),dt.logarithmicDepthBuffer&&Ke.setValue(k,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Ke.setValue(k,"isOrthographic",y.isOrthographicCamera===!0),J!==y&&(J=y,Jt=!0,En=!0)}if(be.needsLights&&(tt.state.sunShadowMap.length>0&&Ke.setValue(k,"sunShadowMap",tt.state.sunShadowMap,Ue),tt.state.directionalShadowMap.length>0&&Ke.setValue(k,"directionalShadowMap",tt.state.directionalShadowMap,Ue),tt.state.spotShadowMap.length>0&&Ke.setValue(k,"spotShadowMap",tt.state.spotShadowMap,Ue),tt.state.pointShadowMap.length>0&&Ke.setValue(k,"pointShadowMap",tt.state.pointShadowMap,Ue)),B.isSkinnedMesh){Ke.setOptional(k,B,"bindMatrix"),Ke.setOptional(k,B,"bindMatrixInverse");let wt=B.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),Ke.setValue(k,"boneTexture",wt.boneTexture,Ue))}B.isBatchedMesh&&(Ke.setOptional(k,B,"batchingTexture"),Ke.setValue(k,"batchingTexture",B._matricesTexture,Ue),Ke.setOptional(k,B,"batchingIdTexture"),Ke.setValue(k,"batchingIdTexture",B._indirectTexture,Ue),Ke.setOptional(k,B,"batchingColorTexture"),B._colorsTexture!==null&&Ke.setValue(k,"batchingColorTexture",B._colorsTexture,Ue));let Yt=V.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&re.update(B,V,rt),(Jt||be.receiveShadow!==B.receiveShadow)&&(be.receiveShadow=B.receiveShadow,Ke.setValue(k,"receiveShadow",B.receiveShadow)),(N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial)&&N.envMap===null&&E.environment!==null&&(yt.envMapIntensity.value=E.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=D_()),Jt){if(Ke.setValue(k,"toneMappingExposure",C.toneMappingExposure),be.needsLights&&te(yt,En),oe&&N.fog===!0&&me.refreshFogUniforms(yt,oe),me.refreshMaterialUniforms(yt,N,Ee,De,v.state.transmissionRenderTarget[y.id]),be.needsLights&&be.numLightProbeGrids>0){let wt=S,Ut=0;for(let ei of v.state.lightProbeGridArray)ei.texture!==null&&(wt.textures[Ut]=ei.texture,wt.min[Ut]=ei.boundingBox.min,wt.max[Ut]=ei.boundingBox.max,wt.resolution[Ut]=ei.resolution,Ut++);for(let ei in wt)wt[ei].length=Ut;yt.probesSH.value=wt.textures,yt.probesMin.value=wt.min,yt.probesMax.value=wt.max,yt.probesResolution.value=wt.resolution}gr.upload(k,fi(be),yt,Ue)}if(N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(gr.upload(k,fi(be),yt,Ue),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Ke.setValue(k,"center",B.center),Ke.setValue(k,"modelViewMatrix",B.modelViewMatrix),Ke.setValue(k,"normalMatrix",B.normalMatrix),Ke.setValue(k,"modelMatrix",B.matrixWorld),N.uniformsGroups!==void 0){let wt=N.uniformsGroups;for(let Ut=0,ei=wt.length;Ut<ei;Ut++){let Wa=wt[Ut];Ne.update(Wa,rt),Ne.bind(Wa,rt)}}return rt}function te(y,E){y.ambientLightColor.needsUpdate=E,y.lightProbe.needsUpdate=E,y.sunLights.needsUpdate=E,y.sunLightShadows.needsUpdate=E,y.directionalLights.needsUpdate=E,y.directionalLightShadows.needsUpdate=E,y.pointLights.needsUpdate=E,y.pointLightShadows.needsUpdate=E,y.spotLights.needsUpdate=E,y.spotLightShadows.needsUpdate=E,y.rectAreaLights.needsUpdate=E,y.hemisphereLights.needsUpdate=E}function q(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(y,E,V){let N=ze.get(y);N.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),ze.get(y.texture).__webglTexture=E,ze.get(y.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:V,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,E){let V=ze.get(y);V.__webglFramebuffer=E,V.__useDefaultFramebuffer=E===void 0},this.setRenderTarget=function(y,E=0,V=0){j=y,Z=E,$=V;let N=null,B=!1,oe=!1;if(y){let ue=ze.get(y);if(ue.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(k.FRAMEBUFFER,ue.__webglFramebuffer),ee.copy(y.viewport),we.copy(y.scissor),Ae=y.scissorTest,le.viewport(ee),le.scissor(we),le.setScissorTest(Ae),H=-1;return}else if(ue.__webglFramebuffer===void 0)Ue.setupRenderTarget(y);else if(ue.__hasExternalTextures)Ue.rebindTextures(y,ze.get(y.texture).__webglTexture,ze.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let We=y.depthTexture;if(ue.__boundDepthTexture!==We){if(We!==null&&ze.has(We)&&(y.width!==We.image.width||y.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(y)}}let _e=y.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(oe=!0);let Ce=ze.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ce[E])?N=Ce[E][V]:N=Ce[E],B=!0):y.samples>0&&Ue.useMultisampledRTT(y)===!1?N=ze.get(y).__webglMultisampledFramebuffer:Array.isArray(Ce)?N=Ce[V]:N=Ce,ee.copy(y.viewport),we.copy(y.scissor),Ae=y.scissorTest}else ee.copy(Be).multiplyScalar(Ee).floor(),we.copy(ht).multiplyScalar(Ee).floor(),Ae=ct;if(V!==0&&(N=X),le.bindFramebuffer(k.FRAMEBUFFER,N)&&le.drawBuffers(y,N),le.viewport(ee),le.scissor(we),le.setScissorTest(Ae),B){let ue=ze.get(y.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+E,ue.__webglTexture,V)}else if(oe){let ue=E;for(let _e=0;_e<y.textures.length;_e++){let Ce=ze.get(y.textures[_e]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+_e,Ce.__webglTexture,V,ue)}}else if(y!==null&&V!==0){let ue=ze.get(y.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ue.__webglTexture,V)}H=-1};function Q(y){let E=ze.get(y);return(E.__readFormat!==y.format||E.__readType!==y.type)&&(E.__readFormat=y.format,E.__readType=y.type,E.__formatReadable=dt.textureFormatReadable(y.format),E.__typeReadable=dt.textureTypeReadable(y.type)),E}this.readRenderTargetPixels=function(y,E,V,N,B,oe,Se,ue=0){if(!(y&&y.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=ze.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(_e=_e[Se],Array.isArray(_e)&&(_e=_e[0])),_e){le.bindFramebuffer(k.FRAMEBUFFER,_e);try{let Ce=y.textures[ue],We=Ce.format,et=Ce.type;y.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ue);let O=Q(Ce);if(O.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(O.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}E>=0&&E<=y.width-N&&V>=0&&V<=y.height-B&&k.readPixels(E,V,N,B,fe.convert(We),fe.convert(et),oe)}finally{let Ce=j!==null?ze.get(j).__webglFramebuffer:null;le.bindFramebuffer(k.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(y,E,V,N,B,oe,Se,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=ze.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(_e=_e[Se],Array.isArray(_e)&&(_e=_e[0])),_e)if(E>=0&&E<=y.width-N&&V>=0&&V<=y.height-B){le.bindFramebuffer(k.FRAMEBUFFER,_e);let Ce=y.textures[ue],We=Ce.format,et=Ce.type;y.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ue);let O=Q(Ce);if(O.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(O.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let K=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,K),k.bufferData(k.PIXEL_PACK_BUFFER,oe.byteLength,k.STREAM_READ),k.readPixels(E,V,N,B,fe.convert(We),fe.convert(et),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let ye=j!==null?ze.get(j).__webglFramebuffer:null;le.bindFramebuffer(k.FRAMEBUFFER,ye);let Ie=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await id(k,Ie,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,K),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,oe),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(K),k.deleteSync(Ie),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,E=null,V=0){let N=Math.pow(2,-V),B=Math.floor(y.image.width*N),oe=Math.floor(y.image.height*N),Se=E!==null?E.x:0,ue=E!==null?E.y:0;Ue.setTexture2D(y,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,Se,ue,B,oe),le.unbindTexture()},this.copyTextureToTexture=function(y,E,V=null,N=null,B=0,oe=0){let Se,ue,_e,Ce,We,et,O,K,ye,Ie=y.isCompressedTexture?y.mipmaps[oe]:y.image;if(V!==null)Se=V.max.x-V.min.x,ue=V.max.y-V.min.y,_e=V.isBox3?V.max.z-V.min.z:1,Ce=V.min.x,We=V.min.y,et=V.isBox3?V.min.z:0;else{let Ke=Math.pow(2,-B);Se=Math.floor(Ie.width*Ke),ue=Math.floor(Ie.height*Ke),y.isDataArrayTexture?_e=Ie.depth:y.isData3DTexture?_e=Math.floor(Ie.depth*Ke):_e=1,Ce=0,We=0,et=0}N!==null?(O=N.x,K=N.y,ye=N.z):(O=0,K=0,ye=0);let Le=fe.convert(E.format),Ze=fe.convert(E.type),be;E.isData3DTexture?(Ue.setTexture3D(E,0),be=k.TEXTURE_3D):E.isDataArrayTexture||E.isCompressedArrayTexture?(Ue.setTexture2DArray(E,0),be=k.TEXTURE_2D_ARRAY):(Ue.setTexture2D(E,0),be=k.TEXTURE_2D),le.activeTexture(k.TEXTURE0),le.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,E.flipY),le.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),le.pixelStorei(k.UNPACK_ALIGNMENT,E.unpackAlignment);let tt=le.getParameter(k.UNPACK_ROW_LENGTH),st=le.getParameter(k.UNPACK_IMAGE_HEIGHT),tn=le.getParameter(k.UNPACK_SKIP_PIXELS),rt=le.getParameter(k.UNPACK_SKIP_ROWS),Gt=le.getParameter(k.UNPACK_SKIP_IMAGES);le.pixelStorei(k.UNPACK_ROW_LENGTH,Ie.width),le.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ie.height),le.pixelStorei(k.UNPACK_SKIP_PIXELS,Ce),le.pixelStorei(k.UNPACK_SKIP_ROWS,We),le.pixelStorei(k.UNPACK_SKIP_IMAGES,et);let Jt=y.isDataArrayTexture||y.isData3DTexture,En=E.isDataArrayTexture||E.isData3DTexture;if(y.isDepthTexture){let Ke=ze.get(y),yt=ze.get(E),Yt=ze.get(Ke.__renderTarget),wt=ze.get(yt.__renderTarget);le.bindFramebuffer(k.READ_FRAMEBUFFER,Yt.__webglFramebuffer),le.bindFramebuffer(k.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Ut=0;Ut<_e;Ut++)Jt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.get(y).__webglTexture,B,et+Ut),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.get(E).__webglTexture,oe,ye+Ut)),k.blitFramebuffer(Ce,We,Ce+Se,We+ue,O,K,O+Se,K+ue,k.DEPTH_BUFFER_BIT,k.NEAREST);le.bindFramebuffer(k.READ_FRAMEBUFFER,null),le.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||ze.has(y)){let Ke=ze.get(y),yt=ze.get(E);le.bindFramebuffer(k.READ_FRAMEBUFFER,I),le.bindFramebuffer(k.DRAW_FRAMEBUFFER,z);for(let Yt=0;Yt<_e;Yt++)Jt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ke.__webglTexture,B,et+Yt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ke.__webglTexture,B),En?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,yt.__webglTexture,oe,ye+Yt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,yt.__webglTexture,oe),B!==0?k.blitFramebuffer(Ce,We,Ce+Se,We+ue,O,K,O+Se,K+ue,k.COLOR_BUFFER_BIT,k.NEAREST):En?k.copyTexSubImage3D(be,oe,O,K,ye+Yt,Ce,We,Se,ue):k.copyTexSubImage2D(be,oe,O,K,Ce,We,Se,ue);le.bindFramebuffer(k.READ_FRAMEBUFFER,null),le.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else En?y.isDataTexture||y.isData3DTexture?k.texSubImage3D(be,oe,O,K,ye,Se,ue,_e,Le,Ze,Ie.data):E.isCompressedArrayTexture?k.compressedTexSubImage3D(be,oe,O,K,ye,Se,ue,_e,Le,Ie.data):k.texSubImage3D(be,oe,O,K,ye,Se,ue,_e,Le,Ze,Ie):y.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,oe,O,K,Se,ue,Le,Ze,Ie.data):y.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,oe,O,K,Ie.width,Ie.height,Le,Ie.data):k.texSubImage2D(k.TEXTURE_2D,oe,O,K,Se,ue,Le,Ze,Ie);le.pixelStorei(k.UNPACK_ROW_LENGTH,tt),le.pixelStorei(k.UNPACK_IMAGE_HEIGHT,st),le.pixelStorei(k.UNPACK_SKIP_PIXELS,tn),le.pixelStorei(k.UNPACK_SKIP_ROWS,rt),le.pixelStorei(k.UNPACK_SKIP_IMAGES,Gt),oe===0&&E.generateMipmaps===!0&&E.mipmapsAutoUpdate===!0&&k.generateMipmap(be),le.unbindTexture()},this.initRenderTarget=function(y){ze.get(y).__webglFramebuffer===void 0&&Ue.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ue.setTextureCube(y,0):y.isData3DTexture?Ue.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ue.setTexture2DArray(y,0):Ue.setTexture2D(y,0),le.unbindTexture()},this.resetState=function(){Z=0,$=0,j=null,le.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};function Hc(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Ct;c.morphTargetsRelative=o;let l=0;for(let h=0;h<s.length;++h){let d=s[h],f=0,u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,d=[];for(let f=0;f<s.length;++f){let u=s[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=s[f].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Gd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<d;++f){let u=[];for(let b=0;b<a[h].length;++b)u.push(a[h][b][f]);let p=Gd(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Gd(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new nt(a,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<t;p++){let b=h.getComponent(f,p);o.setComponent(f+d,p,b)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Fh(s,e){if(e===ah)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===mr||e===ya){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===mr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Ea(s){let e=new Map,t=new Map,n=s.clone();return Hd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Hd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Hd(s.children[n],e.children[n],t)}var _r=class extends si{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Hh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Vc(t,ot.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Vc(t,ot.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new nu(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ci.extractUrlBase(e);a=Ci.resolveURL(l,this.path)}else a=Ci.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new cr(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===jd){try{a[ot.KHR_BINARY_GLTF]=new iu(e)}catch(d){i&&i(d);return}r=JSON.parse(a[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new hu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case ot.KHR_MATERIALS_UNLIT:a[d]=new zh;break;case ot.KHR_DRACO_MESH_COMPRESSION:a[d]=new su(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:a[d]=new ru;break;case ot.KHR_MESH_QUANTIZATION:a[d]=new au;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function N_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Lt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Bh=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Pe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],mn);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new vs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new la(h),l.distance=d;break;case"spot":l=new ca(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),hi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},zh=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){let i=[];e.color=new Pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],mn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(i)}},Gh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Hh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(r,r)}return Promise.all(i)}},Vh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},Wh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},qh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Xh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],mn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,At)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},jh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Kh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(r[0],r[1],r[2],mn),Promise.all(i)}},Jh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Yh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(r[0],r[1],r[2],mn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,At)),Promise.all(i)}},Zh=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},$h=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Qh=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},eu=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},tu=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Vc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):a.ready.then(function(){let u=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}},nu=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==zn.TRIANGLES&&l.mode!==zn.TRIANGLE_STRIP&&l.mode!==zn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],f=l[0].count,u=[];for(let p of d){let b=new He,g=new W,m=new $t,_=new W(1,1,1),w=new Mn(p.geometry,p.material,f);for(let T=0;T<f;T++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,T),c.SCALE&&_.fromBufferAttribute(c.SCALE,T),w.setMatrixAt(T,b.compose(g,m,_));let S=null;for(let T in c)if(T==="_COLOR_0"){let v=c[T];w.instanceColor=new yi(v.array,v.itemSize,v.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(S===null){let x=w.geometry;S=new Ct,S.name=x.name;for(let M in x.attributes)S.setAttribute(M,x.attributes[M]);for(let M in x.morphAttributes)S.morphAttributes[M]=x.morphAttributes[M];x.index!==null&&S.setIndex(x.index),S.morphTargetsRelative=x.morphTargetsRelative;for(let M of x.groups)S.addGroup(M.start,M.count,M.materialIndex);x.boundingBox!==null&&(S.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(S.boundingSphere=x.boundingSphere.clone()),S.drawRange.start=x.drawRange.start,S.drawRange.count=x.drawRange.count,S.userData=Object.assign({},x.userData),w.geometry=S}let v=c[T];S.setAttribute(T,new yi(v.array,v.itemSize,v.normalized))}vt.prototype.copy.call(w,p),this.parser.assignFinalMaterial(w),u.push(w)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}},jd="glTF",Ra=12,Vd={JSON:1313821514,BIN:5130562},iu=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ra),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ra,r=new DataView(e,Ra),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Vd.JSON){let l=new Uint8Array(e,Ra+a,o);this.content=n.decode(l)}else if(c===Vd.BIN){let l=Ra+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},su=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let d=cu[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=cu[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],u=xr[f.componentType];l[d]=u.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(let p in u.attributes){let b=u.attributes[p],g=c[p];g!==void 0&&(b.normalized=g)}d(u)},o,l,mn,f)})})}},ru=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},au=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},Wc=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,d=(n-t)/h,f=d*d,u=f*d,p=e*l,b=p-l,g=-2*u+3*f,m=u-f,_=1-g,w=m-f+d;for(let S=0;S!==o;S++){let T=a[b+S+o],v=a[b+S+c]*h,x=a[p+S+o],M=a[p+S]*h;r[S]=_*T+w*v+g*x+m*M}return r}},F_=new $t,ou=class extends Wc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return F_.fromArray(r).normalize().toArray(r),r}},zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wd={9728:kt,9729:Vt,9984:Jo,9985:dr,9986:ws,9987:On},qd={33071:Nn,33648:Ks,10497:Vi},Uh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},U_={CUBICSPLINE:void 0,LINEAR:cs,STEP:os},kh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function k_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new gs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),s.DefaultMaterial}function Es(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function O_(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(f)}if(i){let f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function B_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function z_(s){let e,t=s.extensions&&s.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Oh(t.attributes):e=s.indices+":"+Oh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Oh(s.targets[n]);return e}function Oh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function lu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function G_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var H_=new He,hu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new N_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?(this.textureLoader=new ra(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ha(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Es(r,o,i),hi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Ci.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Uh[i.type],o=xr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new nt(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Uh[i.type],l=xr[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,b,g;if(u&&u!==d){let m=Math.floor(f/u),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,w=t.cache.get(_);w||(b=new l(o,m*u,i.count*u/h),w=new er(b,u/h),t.cache.add(_,w)),g=new tr(w,c,f%u/h,p)}else o===null?b=new l(i.count*c):b=new l(o,f,i.count*c),g=new nt(b,c,p);if(i.sparse!==void 0){let m=Uh.SCALAR,_=xr[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,T=new _(a[1],w,i.sparse.count*m),v=new l(a[2],S,i.sparse.count*c);o!==null&&(g=new nt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let x=0,M=T.length;x<M;x++){let L=T[x];if(g.setX(L,v[x*c]),c>=2&&g.setY(L,v[x*c+1]),c>=3&&g.setZ(L,v[x*c+2]),c>=4&&g.setW(L,v[x*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=Wd[f.magFilter]||Vt,h.minFilter=Wd[f.minFilter]||On,h.wrapS=qd[f.wrapS]||Vi,h.wrapT=qd[f.wrapT]||Vi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==kt&&h.minFilter!==Vt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(f){return new Promise(function(u,p){t.parse(f,u,p)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){l=!0;let u=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(f){return new Promise(function(u,p){let b=u;t.isImageBitmapLoader===!0&&(b=function(g){let m=new Wt(g);m.needsUpdate=!0,u(m)}),t.load(Ci.resolveURL(f,r.path),b,void 0,p)})})}let d=h.then(function(f){return l===!0&&o.revokeObjectURL(c),hi(f,a),f.userData.mimeType=a.mimeType||G_(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new rr,gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new sr,gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return gs}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[ot.KHR_MATERIALS_UNLIT]){let d=i[ot.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],mn),o.opacity=f[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,At)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=sn);let h=r.alphaMode||kh.OPAQUE;if(h===kh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===kh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Qt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new $e(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Qt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Qt){let d=r.emissiveFactor;o.emissive=new Pe().setRGB(d[0],d[1],d[2],mn)}return r.emissiveTexture!==void 0&&a!==Qt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,At)),Promise.all(l).then(function(){let d=new a(o);return r.name&&(d.name=r.name),hi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Es(i,d,r),d})}createUniqueName(e){let t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Xd(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=z_(l),d=i[h];if(d)a.push(d.promise);else{let f;l.extensions&&l.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Xd(new Ct,l,t),l.mode===zn.TRIANGLE_STRIP?f=f.then(u=>Fh(u,ya)):l.mode===zn.TRIANGLE_FAN&&(f=f.then(u=>Fh(u,mr))),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?k_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let u=0,p=h.length;u<p;u++){let b=h[u],g=a[u],m,_=l[u];if(g.mode===zn.TRIANGLES||g.mode===zn.TRIANGLE_STRIP||g.mode===zn.TRIANGLE_FAN||g.mode===void 0){let w=r.isSkinnedMesh===!0,S=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");w&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=w&&S?new us(b,_):new Pt(b,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===zn.LINES)m=new Jr(b,_);else if(g.mode===zn.LINE_STRIP)m=new ds(b,_);else if(g.mode===zn.LINE_LOOP)m=new Yr(b,_);else if(g.mode===zn.POINTS)m=new ps(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&B_(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),hi(m,r),g.extensions&&Es(i,m,g),t.assignFinalMaterial(m),d.push(m)}for(let u=0,p=d.length;u<p;u++)t.associations.set(d[u],{meshes:e,primitives:u});if(d.length===1)return r.extensions&&Es(i,d[0],r),d[0];let f=new pn;r.extensions&&Es(i,f,r),t.associations.set(f,{meshes:e});for(let u=0,p=d.length;u<p;u++)f.add(d[u]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(zt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new _s(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let d=a[l];if(d){o.push(d);let f=new He;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new fs(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){let u=i.channels[d],p=i.samplers[u.sampler],b=u.target,g=b.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,_=i.parameters!==void 0?i.parameters[p.output]:p.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",_)),l.push(p),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let f=d[0],u=d[1],p=d[2],b=d[3],g=d[4],m=[];for(let w=0,S=f.length;w<S;w++){let T=f[w],v=u[w],x=p[w],M=b[w],L=g[w];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let C=n._createAnimationTracks(T,v,x,M,L);if(C)for(let D=0;D<C.length;D++)m.push(C[D])}let _=new bs(r,void 0,m);return hi(_,i),_})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],d=l[1],f=l[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,H_)});for(let u=0,p=d.length;u<p;u++)h.add(d[u]);if(h.userData.pivot!==void 0&&d.length>0){let u=h.userData.pivot,p=d[0];h.pivot=new W().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new nr:l.length>1?h=new pn:l.length===1?h=l[0]:h=new vt,h!==l[0])for(let d=0,f=l.length;d<f;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),hi(h,r),r.extensions&&Es(n,h,r),r.matrix!==void 0){let d=new He;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new pn;n.name&&(r.name=i.createUniqueName(n.name)),hi(r,n),n.extensions&&Es(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++){let f=c[h];f.parent!==null?r.add(Ea(f)):r.add(f)}let l=h=>{let d=new Map;for(let[f,u]of i.associations)(f instanceof gn||f instanceof Wt)&&d.set(f,u);return h.traverse(f=>{let u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}Ki[r.path]===Ki.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Ki[r.path]){case Ki.weights:h=Ti;break;case Ki.rotation:h=Ei;break;case Ki.translation:case Ki.scale:h=qi;break;default:n.itemSize===1?h=Ti:h=qi;break}let d=i.interpolation!==void 0?U_[i.interpolation]:cs,f=this._getArrayFromAccessor(n);for(let u=0,p=c.length;u<p;u++){let b=new h(c[u]+"."+Ki[r.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=lu(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ei?ou:Wc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function V_(s,e,t){let n=e.attributes,i=new In;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new W(c[0],c[1],c[2]),new W(l[0],l[1],l[2])),o.normalized){let h=lu(xr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new W,c=new W;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let f=t.json.accessors[d.POSITION],u=f.min,p=f.max;if(u!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),f.normalized){let b=lu(xr[f.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new qt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Xd(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=cu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return at.workingColorSpace!==mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),hi(s,e),V_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?O_(s,e.targets,t):s})}var qc=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var _=new Uint8Array(m.length),w=0;w<m.length;++w){var S=m.charCodeAt(w);_[w]=S>96?S-97:S>64?S-39:S+4}for(var T=0,w=0;w<m.length;++w)_[T++]=_[w]<60?n[_[w]]:(_[w]-60)*64+_[++w];return _.buffer.slice(0,T)}function c(m,_,w,S,T,v,x){var M=m.exports.sbrk,L=S+3&-4,C=M(L*T),D=M(v.length),U=new Uint8Array(m.exports.memory.buffer);U.set(v,D);var X=_(C,S,T,D,v.length);if(X==0&&x&&x(C,L,T),w.set(U.subarray(C,C+S*T)),M(C-M(0)),X!=0)throw new Error("Malformed buffer data: "+X)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],f=0;function u(m){var _={object:new Worker(m),pending:0,requests:{}};return _.object.onmessage=function(w){var S=w.data;_.pending-=S.count,_.requests[S.id][S.action](S.value),delete _.requests[S.id]},_}function p(m){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),w=new Blob([_],{type:"text/javascript"}),S=URL.createObjectURL(w),T=d.length;T<m;++T)d[T]=u(S);for(var T=m;T<d.length;++T)d[T].object.postMessage({});d.length=m,URL.revokeObjectURL(S)}function b(m,_,w,S,T){for(var v=d[0],x=1;x<d.length;++x)d[x].pending<v.pending&&(v=d[x]);return new Promise(function(M,L){var C=new Uint8Array(w),D=++f;v.pending+=m,v.requests[D]={resolve:M,reject:L},v.object.postMessage({id:D,count:m,size:_,source:C,mode:S,filter:T},[C.buffer])})}function g(m){var _=m.data;self.ready.then(function(w){if(!_.id)return self.close();try{var S=new Uint8Array(_.count*_.size);c(w,w.exports[_.mode],S,_.count,_.size,_.source,w.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:S},[S.buffer])}catch(T){self.postMessage({id:_.id,count:_.count,action:"reject",value:T})}})}return{ready:a,supported:!0,useWorkers:function(m){p(m)},decodeVertexBuffer:function(m,_,w,S,T){c(r,r.exports.meshopt_decodeVertexBuffer,m,_,w,S,r.exports[l[T]])},decodeIndexBuffer:function(m,_,w,S){c(r,r.exports.meshopt_decodeIndexBuffer,m,_,w,S)},decodeIndexSequence:function(m,_,w,S){c(r,r.exports.meshopt_decodeIndexSequence,m,_,w,S)},decodeGltfBuffer:function(m,_,w,S,T,v){c(r,r.exports[h[T]],m,_,w,S,r.exports[l[v]])},decodeGltfBufferAsync:function(m,_,w,S,T){return d.length>0?b(m,_,w,h[S],l[T]):a.then(function(){var v=new Uint8Array(m*_);return c(r,r.exports[h[S]],v,m,_,w,r.exports[l[T]]),v})}}})();var W_=[nt.prototype.getX,nt.prototype.getY,nt.prototype.getZ,nt.prototype.getW],Kd={idle:["Idle",1,!0],combat:["Idle_Combat",1,!0],run:["Running_A",1,!0],walk:["Walking_A",1,!0],attack:["1H_Melee_Attack_Chop",1.25,!1],slash:["1H_Melee_Attack_Slice_Horizontal",1.25,!1],spin:["2H_Melee_Attack_Spin",1.3,!1],shoot:["1H_Ranged_Shoot",1.2,!1],cast:["Spellcast_Shoot",1.2,!1],summon:["Spellcast_Summon",1,!1],block:["Block",1.2,!1],hit:["Hit_A",1.3,!1],die:["Death_A",1,!1],dead:["Death_A_Pose",1,!0],cheer:["Cheer",1,!0],dash:["Dodge_Forward",1.3,!1],jump:["Jump_Full_Short",1,!1],rise:["Lie_StandUp",1.4,!1],taunt:["Taunt",1,!1],spawn:["Spawn_Ground_Skeletons",1.2,!1],use:["Interact",1.2,!1]},q_={Knight:["1H_Sword","Badge_Shield","Knight_Helmet","Knight_Cape"],Barbarian:["1H_Axe","Barbarian_Round_Shield","Barbarian_Hat","Barbarian_Cape"],Mage:["2H_Staff","Mage_Hat","Mage_Cape"],Rogue:["1H_Crossbow","Knife_Offhand","Rogue_Cape"],Rogue_Hooded:["Knife","Knife_Offhand","Rogue_Cape"],Skeleton_Minion:[],Skeleton_Warrior:["Skeleton_Warrior_Helmet"],Skeleton_Rogue:["Skeleton_Rogue_Hood","Skeleton_Rogue_Cape"],Skeleton_Mage:["Skeleton_Mage_Hat"]},X_=new _r().setMeshoptDecoder(qc),Jd=s=>new Promise((e,t)=>X_.load(s,e,void 0,t));function j_(s,e){if(s&&/glow/i.test(s.name||""))return new Qt({color:8057087,fog:!0});let t=e||s.map;return t&&(t.colorSpace=At,t.anisotropy=2),new ln({map:t||null,color:16777215})}function Yd(s,e,t=q_[e],n=!0){let i=s.scene;i.updateMatrixWorld(!0);let r=new Set(t||[]),a=[],o=[];if(i.traverse(v=>{v.isSkinnedMesh?a.push(v):v.isMesh&&o.push(v)}),!a.length)throw new Error("no skinned mesh in "+e);let c=a[0],l=c.skeleton,h=l.bones,d=new Map(h.map((v,x)=>[v,x])),f=c.bindMatrixInverse.clone(),u=[],p=v=>{let x=u.findIndex(M=>M.src===v);return x<0&&(u.push({src:v,mat:j_(v)}),x=u.length-1),x},b=[],g=v=>{v=v.index?v.toNonIndexed():v.clone();for(let x of Object.keys(v.attributes))["position","normal","uv","skinIndex","skinWeight"].includes(x)||v.deleteAttribute(x);for(let x of Object.keys(v.attributes)){let M=v.attributes[x],L=M.itemSize,C=x==="skinIndex"?new Uint16Array(M.count*L):new Float32Array(M.count*L);for(let D=0;D<M.count;D++)for(let U=0;U<L;U++)C[D*L+U]=x==="skinIndex"?M.getComponent(D,U):W_[U].call(M,D);v.setAttribute(x,new nt(C,L))}return v.attributes.normal||v.computeVertexNormals(),v.attributes.uv||v.setAttribute("uv",new nt(new Float32Array(v.attributes.position.count*2),2)),v};for(let v of a){let x=g(v.geometry);if(v!==c){let M=v.skeleton.bones,L=M.findIndex(U=>d.has(U)),C=d.get(M[L]),D=new He().copy(f).multiply(new He().copy(l.boneInverses[C]).invert()).multiply(v.skeleton.boneInverses[L]).multiply(v.bindMatrix);x.applyMatrix4(D)}if(v.skeleton!==l){let M=v.skeleton.bones.map(C=>d.get(C)??0),L=x.attributes.skinIndex;for(let C=0;C<L.count;C++)for(let D=0;D<4;D++)L.setComponent(C,D,M[L.getComponent(C,D)])}b.push({g:x,m:p(v.material)})}for(let v of o){if(!r.has(v.name)&&!r.has(v.parent?.name))continue;let x=v.parent;for(;x&&!x.isBone;)x=x.parent;if(!x)continue;let M=d.get(x);if(M===void 0)continue;let L=new He;{let z=v;for(L.copy(v.matrix),z=v.parent;z&&z!==x;)L.premultiply(z.matrix),z=z.parent}let C=new He().copy(f).multiply(new He().copy(l.boneInverses[M]).invert()).multiply(L),D=g(v.geometry);D.applyMatrix4(C);let U=D.attributes.position.count,X=new Uint16Array(U*4),I=new Float32Array(U*4);for(let z=0;z<U;z++)X[z*4]=M,I[z*4]=1;D.setAttribute("skinIndex",new nt(X,4)),D.setAttribute("skinWeight",new nt(I,4)),b.push({g:D,m:p(v.material)})}b.sort((v,x)=>v.m-x.m);let m=Hc(b.map(v=>v.g),u.length>1);if(u.length>1){let v=0;m.clearGroups();for(let x=0;x<u.length;x++){let M=0;for(let L of b)L.m===x&&(M+=L.g.attributes.position.count);M&&m.addGroup(v,M,x),v+=M}}for(let v of b)v.g.dispose();m.computeBoundingBox(),m.boundingSphere=new qt(new W(0,1.1,0),1.9);let _=new pn;_.name=e;let w=(()=>{let v=h[0];for(;v.parent&&v.parent.isBone;)v=v.parent;return v})(),S=[];w.traverse(v=>{v.isMesh&&S.push(v)});for(let v of S)v.parent.remove(v),n&&v.geometry.dispose();_.add(w);let T=new us(m,u.length>1?u.map(v=>v.mat):u[0].mat);return T.frustumCulled=!0,_.add(T),_.updateMatrixWorld(!0),T.bind(new fs(h,l.boneInverses.map(v=>v.clone())),c.bindMatrix.clone()),{tpl:_,geo:m,mats:u.map(v=>v.mat),height:2.1}}async function Zd({base:s="/models",names:e=[],loot:t=null,onProgress:n}={}){let i={templates:new Map,clips:new Map,variants:new Map,pools:new Map,disposables:[]},[r,...a]=await Promise.all([Jd(`${s}/anims.glb`),...e.map(o=>Jd(`${s}/chars/${o}.glb`))]);for(let o of r.animations)i.clips.set(o.name,o);return e.forEach((o,c)=>{if(t&&t[o]){let h=Yd({scene:Ea(a[c].scene)},o+"@loot",t[o],!1);i.templates.set(o+"@loot",h),i.disposables.push(h.geo,...h.mats)}let l=Yd(a[c],o);i.templates.set(o,l),i.disposables.push(l.geo,...l.mats);for(let h of l.mats)h.map&&i.disposables.push(h.map);n?.(o)}),i.material=(o,c=null,l=.32)=>{let h=i.templates.get(o);if(c===null)return h.mats.length>1?h.mats:h.mats[0];let d=o+":"+c+":"+l,f=i.variants.get(d);if(!f){if(typeof c=="string"&&c.startsWith("ghost")){let u=c==="ghost-boss"?13215999:12113151;f=h.mats.map(p=>{let b=new Qt({map:p.map||null,color:u,transparent:!0,opacity:.55,depthWrite:!1,blending:kn,fog:!0});return i.disposables.push(b),b})}else{let u=new Pe(c),p=new Pe(1,1,1).lerp(u,l);f=h.mats.map(b=>{if(b.isMeshBasicMaterial)return b;let g=b.clone();return g.color.copy(p),i.disposables.push(g),g})}if(f=f.length>1?f:f[0],i.variants.set(d,f),i.variants.size>160){let u=i.variants.keys().next().value;i.variants.delete(u)}}return f},i.actor=(o,c=null)=>{let l=i.pools.get(o)||[];i.pools.set(o,l);let h=l.pop();if(!h){let d=i.templates.get(o),f=Ea(d.tpl),u=null;f.traverse(b=>{b.isSkinnedMesh&&(u=b)});let p=new ua(f);h={name:o,obj:f,mesh:u,mixer:p,actions:new Map,state:"",base:"idle",until:0,tint:void 0,acc:0,flashT:-9,hand:null},f.traverse(b=>{b.isBone&&/handslot.?l/i.test(b.name)&&(h.hand=b)}),h.play=(b,g,{fade:m=.15,speed:_=1}={})=>K_(i,h,b,g,m,_)}return h.tint!==c&&(h.mesh.material=i.material(o,c),h.tint=c),h.obj.visible=!0,h.state="",h.base="idle",h.until=0,h.mixer.stopAllAction(),h.play("idle",0,{fade:0}),h},i.bake=(o,c,l=4,{from:h=0,to:d=1}={})=>{let f=`${o}|${c}|${l}|${h}|${d}`;if(i.baked=i.baked||new Map,i.baked.has(f))return i.baked.get(f);let u=i.actor(o),p=uu(i,u,c);u.mixer.stopAllAction(),p.reset(),p.setLoop(va,1/0),p.play();let b=p.getClip().duration,g=u.mesh.geometry,m=g.attributes.position.count,_=new W,w=[];for(let S=0;S<l;S++){u.mixer.setTime(b*(h+(d-h)*(S/l))),u.obj.updateMatrixWorld(!0),u.mesh.skeleton.update();let T=new Float32Array(m*3);for(let x=0;x<m;x++)u.mesh.getVertexPosition(x,_),_.applyMatrix4(u.mesh.matrix),T[x*3]=_.x,T[x*3+1]=_.y,T[x*3+2]=_.z;let v=new Ct;v.setAttribute("position",new nt(T,3)),v.setAttribute("uv",g.attributes.uv),g.index&&v.setIndex(g.index);for(let x of g.groups)v.addGroup(x.start,x.count,x.materialIndex);v.computeVertexNormals(),v.boundingSphere=new qt(new W(0,1,0),2.2),i.disposables.push(v),w.push(v)}return p.stop(),i.release(u),i.baked.set(f,w),w},i.release=o=>{o.obj.visible=!1,o.obj.parent?.remove(o.obj),o.mixer.stopAllAction(),(i.pools.get(o.name)||[]).push(o)},i.dispose=()=>{for(let o of i.disposables)try{o.dispose()}catch{}i.pools.clear(),i.variants.clear()},i}function uu(s,e,t){let n=e.actions.get(t);if(!n){let[i,r,a]=Kd[t]||Kd.idle,o=s.clips.get(i)||s.clips.get("Idle");n=e.mixer.clipAction(o),n.timeScaleBase=r,n.loopMode=a,a?n.setLoop(va,1/0):(n.setLoop(Dc,1),n.clampWhenFinished=!0),e.actions.set(t,n)}return n}function K_(s,e,t,n,i,r){let a=uu(s,e,t);if(a.loopMode){if(e.base=t,n<e.until||e.state===t)return}else e.until=n+a.getClip().duration/(a.timeScaleBase*r)*.92;let o=e.actions.get(e.state);a.reset(),a.timeScale=a.timeScaleBase*r,a.enabled=!0,a.setEffectiveWeight(1),o&&o!==a&&i>0?a.crossFadeFrom(o,i,!1):o&&o!==a&&o.stop(),a.play(),e.state=t}function fu(s,e,t,n){if(e.state!==e.base&&n>=e.until&&e.base){let i=uu(s,e,e.base),r=e.actions.get(e.state);i.reset(),i.timeScale=i.timeScaleBase,i.enabled=!0,i.setEffectiveWeight(1),r&&i.crossFadeFrom(r,.18,!1),i.play(),e.state=e.base}e.mixer.update(t)}var J_=[nt.prototype.getX,nt.prototype.getY,nt.prototype.getZ,nt.prototype.getW],Y_=new _r().setMeshoptDecoder(qc);async function $d(s){let e=await new Promise((f,u)=>Y_.load(s,f,void 0,u)),t=e.scene;t.updateMatrixWorld(!0);let n=new Map,i=new Map,r=new Set,a=[],o=null;for(let f of t.children){let u=[],p=new He().copy(f.parent.matrixWorld).invert();if(f.traverse(g=>{if(!g.isMesh)return;g.material.map&&(o||(o=g.material.map),i.set(f.name,g.material.map),r.add(g.material.map));let m=g.geometry.index?g.geometry.toNonIndexed():g.geometry.clone();for(let _ of Object.keys(m.attributes))["position","normal","uv"].includes(_)||m.deleteAttribute(_);for(let _ of["position","normal","uv"]){let w=m.attributes[_];if(!w||w.array instanceof Float32Array&&!w.normalized)continue;let S=new Float32Array(w.count*w.itemSize);for(let T=0;T<w.count;T++)for(let v=0;v<w.itemSize;v++)S[T*w.itemSize+v]=J_[v].call(w,T);m.setAttribute(_,new nt(S,w.itemSize))}m.attributes.normal||m.computeVertexNormals(),m.attributes.uv||m.setAttribute("uv",new nt(new Float32Array(m.attributes.position.count*2),2)),m.applyMatrix4(new He().multiplyMatrices(p,g.matrixWorld)),u.push(m)}),!u.length)continue;let b=u.length>1?Hc(u):u[0];u.length>1&&u.forEach(g=>g.dispose()),b.computeBoundingSphere(),n.set(f.name,b),a.push(b)}let c=new Map;for(let f of r){f.colorSpace=At,f.anisotropy=4,a.push(f);let u=new ln({map:f});c.set(f,u),a.push(u)}e.scene.traverse(f=>{f.isMesh&&f.geometry.dispose()});let l=c.get(o)||new ln;o||a.push(l);let h=f=>c.get(i.get(f))||l;return{geos:n,mat:l,matOf:h,has:f=>n.has(f),instanced(f,u,{material:p=h(f)}={}){let b=n.get(f);if(!b||!u.length)return null;let g=new Mn(b,p,u.length),m=new vt,_=0;return u.forEach((w,S)=>{m.position.set(w.x,w.y||0,w.z),m.rotation.set(w.rx||0,w.ry||0,w.rz||0),m.scale.set((w.s||1)*(w.sx||1),(w.s||1)*(w.sy||1),(w.s||1)*(w.sz||1)),m.updateMatrix(),g.setMatrixAt(S,m.matrix),_=Math.max(_,Math.hypot(w.x,w.z)+(w.s||1)*3)}),g.instanceMatrix.needsUpdate=!0,g.geometry.boundingSphere,g.boundingSphere=new qt(new W,_),g.frustumCulled=!1,g},dispose(){for(let f of a)try{f.dispose()}catch{}}}}var Li=Math.PI*2,Z_=2,Qd=1.7320508;function $_(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function ep(s,{R:e=20,tile:t=1.15,sky:n={}}={}){let i=new pn,r=[],a=$_(7),o=(j,H)=>{let J=s.instanced(j,H);return J&&(J.name=j,i.add(J)),J},c=[],l=[],h=[],d=[],f=Math.ceil((e+34)/(t*Qd));for(let j=-f;j<=f;j++)for(let H=-f;H<=f;H++){let J=(H+(j&1?.5:0))*Z_*t,ee=j*Qd*t,we=Math.hypot(J,ee);d.push({x:J,z:ee,d:we})}let u=[];for(let j=0;j<7;j++){let H=j/7*Li+.35+a()*.3,J=e+14+a()*9;u.push({x:Math.cos(H)*J,z:Math.sin(H)*J,r:5+a()*4,i:j})}let p=j=>{for(let H of u)if(Math.hypot(j.x-H.x,j.z-H.z)<H.r)return H;return null},b=new Map;for(let j of d){if(j.d<e+t*1.2){c.push({x:j.x,y:0,z:j.z,s:t});continue}if(j.d<e+t*2.6){l.push({x:j.x,y:-.25*t,z:j.z,s:t});continue}let H=p(j);if(H){let J=(Math.hypot(j.x-H.x,j.z-H.z)<H.r*.55?.25:-.1)*t;c.push({x:j.x,y:J,z:j.z,s:t}),(b.get(H)||b.set(H,[]).get(H)).push({...j,y:J});continue}}let g=s.mat.clone();g.color.setRGB(.62,.92,.6),r.push(g);{let j=c.concat(l),H=s.instanced("hex_grass",j,{material:g});if(H){let J=new Pe;j.forEach((ee,we)=>{let Ae=.9+a()*.16;H.setColorAt(we,J.setRGB(Ae,Ae*(.97+a()*.06),Ae*.95))}),H.instanceColor.needsUpdate=!0,i.add(H)}}let m=new ln({color:3117008});r.push(m);let _=new ms(400,48);_.rotateX(-Math.PI/2),r.push(_);let w=new Pt(_,m);w.position.y=-.38,i.add(w);let S=3,T={},v=(j,H)=>(T[j]||(T[j]=[])).push(H),x=[{mark:["building_castle_red"],extra:["building_home_A_red","flag_red"],fill:["trees_A_medium","trees_A_medium"]},{mark:["mountain_A_grass_trees"],extra:[],fill:["mountain_B_grass","trees_A_medium","hills_A_trees"]},{mark:["building_windmill_yellow","building_windmill_top_yellow","building_windmill_top_fan_yellow"],extra:["building_home_A_red","tent"],fill:["trees_A_medium","trees_B_small"]},{mark:["mountain_B_grass"],extra:[],fill:["hills_A_trees","trees_A_medium","mountain_A_grass_trees"]},{mark:["building_church_blue"],extra:["building_tavern_green","building_home_A_red"],fill:["trees_B_small","trees_A_medium"]},{mark:["mountain_A_grass_trees"],extra:[],fill:["trees_A_medium","trees_A_medium","mountain_B_grass"]},{mark:["building_tower_A_blue","building_tower_A_top_blue"],extra:["tent","tent","flag_blue"],fill:["trees_A_medium","hills_A_trees"]}];for(let j of u){let H=x[j.i%x.length],J=(b.get(j)||[]).sort((Ae,ne)=>Math.hypot(Ae.x-j.x,Ae.z-j.z)-Math.hypot(ne.x-j.x,ne.z-j.z)),ee=Ae=>Ae.startsWith("mountain")||Ae.startsWith("hills"),we=0;J.forEach((Ae,ne)=>{let Me=Math.atan2(-Ae.x,-Ae.z);if(ne===0){for(let Te of H.mark)v(Te,{x:Ae.x,y:Ae.y,z:Ae.z,ry:Me,s:S*(ee(Te)?1.2:1)});return}if(ne%2===1&&we<H.extra.length){let Te=H.extra[we++];v(Te,{x:Ae.x,y:Ae.y,z:Ae.z,ry:Me+(a()-.5)*.6,s:S*(Te.startsWith("flag")?1.6:.9)});return}if(a()<.7){let Te=H.fill[ne%H.fill.length];v(Te,{x:Ae.x+(a()-.5)*t,y:Ae.y,z:Ae.z+(a()-.5)*t,ry:a()*Li,s:S*(ee(Te)?1.1:.85+a()*.3)})}})}let M=["flag_red","flag_blue","flag_yellow","flag_green"];for(let j=0;j<16;j++){let H=j/16*Li;v(M[j%4],{x:Math.cos(H)*(e+.9),y:0,z:Math.sin(H)*(e+.9),ry:-H,s:5.1})}for(let j=0;j<26;j++){let H=a()*Li,J=e+t*(1.6+a()*.8);v(a()<.6?"tree_single_A":"tree_single_B",{x:Math.cos(H)*J,y:-.25*t,z:Math.sin(H)*J,ry:a()*Li,s:S*(.9+a()*.5)})}for(let j=0;j<10;j++){let H=j/10*Li+.2,J=e+.4;v(["barrel","crate_A_big","weaponrack","rock_single_C","rock_single_E"][j%5],{x:Math.cos(H)*J,y:0,z:Math.sin(H)*J,ry:a()*Li,s:3.5})}for(let[j,H]of Object.entries(T))o(j,H);let L=[];for(let j=0;j<9;j++){let H=a()*Li,J=e+20+a()*40;L.push({x:Math.cos(H)*J,y:16+a()*14,z:Math.sin(H)*J,ry:a()*Li,s:3+a()*3})}let C=new ln({color:16777215,emissive:7176096,transparent:!0,opacity:.92});r.push(C);let D=s.instanced("cloud_big",L,{material:C});D&&i.add(D);let U=new Pe(n.top??3112920),X=new Pe(n.horizon??16640207),I=new Pe(n.mid??9226480),z=new en({side:nn,depthWrite:!1,fog:!1,uniforms:{top:{value:U},hor:{value:X},bot:{value:I},sunDir:{value:n.sunDir||[-.5,.25,-.83]}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 top, hor, bot; uniform vec3 sunDir;
      void main(){ float h = max(vP.y, 0.0);
        vec3 c = mix(hor, mix(bot, top, smoothstep(0.12, 0.6, h)), smoothstep(0.0, 0.12, h));
        float s = max(dot(vP, normalize(sunDir)), 0.0); c += vec3(1.0,0.82,0.55) * (pow(s, 12.0) * 0.45 + pow(s, 400.0) * 1.2);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}),Z=new na(450,24,12);r.push(z,Z);let $=new Pt(Z,z);return $.renderOrder=-1,i.add($),{group:i,horizon:X,skyMesh:$,update(j){D&&(D.rotation.y=j*.004)},dispose(){for(let j of r)j.dispose()}}}var Tt={alive:1,shield:2,speed:4,giant:8,rage:16,dash:32,dance:64,air:128,crown:256,cmd:512,low:1024,bot:2048},Xc=Math.PI*2,du=["Knight","Barbarian","Mage","Rogue","Rogue_Hooded"],pu=["Skeleton_Minion","Skeleton_Warrior","Skeleton_Rogue","Skeleton_Mage"],Q_={Knight:["2H_Sword","Knight_Helmet","Knight_Cape"],Barbarian:["2H_Axe","Barbarian_Hat","Barbarian_Cape"],Mage:["2H_Staff","Spellbook_open","Mage_Hat","Mage_Cape"],Rogue:["2H_Crossbow","Knife_Offhand","Rogue_Cape"],Rogue_Hooded:["2H_Crossbow","Knife_Offhand","Rogue_Cape"]},ev={Knight:["spin","slash","attack"],Barbarian:["spin","attack","slash"],Mage:["cast","summon"],Rogue:["shoot"],Rogue_Hooded:["shoot","slash"]},mu=.72,tp=2.1*mu,tv={Knight:["attack","slash"],Barbarian:["attack","slash","attack"],Mage:["cast"],Rogue:["shoot","slash"],Rogue_Hooded:["slash","attack"],Skeleton_Minion:["attack"],Skeleton_Warrior:["attack","slash"],Skeleton_Rogue:["slash"],Skeleton_Mage:["cast"]};function np(s,e={}){let t={antialias:!!e.aa,alpha:!1,depth:!0,stencil:!1,powerPreference:"default",preserveDrawingBuffer:!!e.preserve,failIfMajorPerformanceCaveat:!1},n=new Bc({canvas:s,...t});if(!n.getContext())throw new Error("no webgl");n.outputColorSpace=At,n.toneMapping=da,n.toneMappingExposure=1,n.shadowMap.enabled=!1,n.info.autoReset=!0;let i=new Xr;i.background=new Pe(16640207),i.fog=new qr(15981760,45,170);let r=new Ht(46,9/16,.3,600),a=[],o=P=>(a.push(P),P),c=new aa(14216447,5204538,1.15);i.add(c);let l=new vs(16770756,2);l.position.set(-12,20,18),i.add(l);function h(P,te,{mip:q=!0}={}){let Q=document.createElement("canvas");Q.width=Q.height=P,te(Q.getContext("2d"),P);let y=o(new $r(Q));return y.colorSpace=At,y.generateMipmaps=q,q||(y.minFilter=1006),y.anisotropy=4,y}let d=h(64,(P,te)=>{let q=P.createRadialGradient(te/2,te/2,0,te/2,te/2,te/2);q.addColorStop(0,"rgba(0,0,0,0.5)"),q.addColorStop(.6,"rgba(0,0,0,0.22)"),q.addColorStop(1,"rgba(0,0,0,0)"),P.fillStyle=q,P.fillRect(0,0,te,te)},{mip:!1}),f=h(64,(P,te)=>{let q=P.createRadialGradient(te/2,te/2,te*.3,te/2,te/2,te/2);q.addColorStop(0,"rgba(255,255,255,0)"),q.addColorStop(.55,"rgba(255,255,255,0.9)"),q.addColorStop(.8,"rgba(255,255,255,0.35)"),q.addColorStop(1,"rgba(255,255,255,0)"),P.fillStyle=q,P.fillRect(0,0,te,te)},{mip:!1}),u=e.platform||20,p=null,b=null,g=null,m=null,_=Promise.all([$d(e.envUrl||"/models/env-br.glb"),Zd({names:du.concat(pu),loot:Q_})]).then(([P,te])=>{if(w){P.dispose(),te.dispose();return}b=P,g=te,p=ep(b,{R:u,sky:{sunDir:[-.45,.3,.84]}}),i.add(p.group),b.has("chest_gold")&&(ct=new Mn(b.geos.get("chest_gold"),b.matOf("chest_gold"),ht),ct.frustumCulled=!1,ct.count=0,i.add(ct)),b.has("sword_shield")&&(Ye=new Mn(b.geos.get("sword_shield"),b.matOf("sword_shield"),ht),Ye.frustumCulled=!1,Ye.count=0,i.add(Ye)),b.has("rock_single_C")&&(Ae.geometry=b.geos.get("rock_single_C"))}).catch(P=>{throw m=P,P});_.catch(()=>{});let w=!1,S=o(new Si(1,1,1,72,1,!0));S.translate(0,.5,0);let T={time:{value:0},r:{value:18},rt:{value:18},showT:{value:0},heat:{value:0},flash:{value:0}},v=new Pt(S,o(new en({transparent:!0,depthWrite:!1,blending:kn,side:sn,uniforms:T,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform float time, heat, flash;
      void main(){ float s = sin(vUv.x*150.0 + vUv.y*9.0 - time*2.5)*0.5+0.5; float s2 = sin(vUv.x*61.0 - vUv.y*5.0 + time*1.7)*0.5+0.5;
        float a = pow(1.0 - vUv.y, 1.6) * (0.35 + 0.45*s*s2) + exp(-vUv.y*18.0)*0.8;
        vec3 c = mix(vec3(0.55,0.15,0.95), vec3(1.0,0.45,0.95), s*s2);
        c = mix(c, mix(vec3(1.0,0.25,0.08), vec3(1.0,0.75,0.2), s*s2), heat);
        a *= 1.0 + heat * 0.5 + flash * 1.6;
        gl_FragColor = vec4(c * a + vec3(0.6,0.7,1.0) * flash * 0.25 * (1.0 - vUv.y), 1.0); }`})));v.renderOrder=3,i.add(v);let x=new Pt(o(new ms(u+.4,72)),o(new en({transparent:!0,depthWrite:!1,uniforms:T,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`varying vec3 vW; uniform float r, rt, time, showT, heat;
      void main(){ float d = length(vW.xz);
        float outside = smoothstep(r - 0.1, r + 0.5, d);
        float edge = exp(-abs(d - r) * 2.5);
        float ang = atan(vW.z, vW.x);
        float dash = step(0.45, fract(ang * 16.0 / 6.2832 + time * 0.25));
        float tgt = (1.0 - smoothstep(0.03, 0.12, abs(d - rt))) * dash * showT;
        vec3 c = mix(vec3(0.32,0.08,0.5), vec3(1.0,0.6,1.0), edge);
        c = mix(c, mix(vec3(0.4,0.06,0.02), vec3(1.0,0.55,0.2), edge), heat);
        c = mix(c, vec3(1.0), tgt);
        float a = clamp(outside * 0.6 + edge * 0.55 + tgt * 0.9, 0.0, 0.92);
        gl_FragColor = vec4(c, a); }`})));x.rotation.x=-Math.PI/2,x.position.y=.03,x.renderOrder=1,i.add(x);let M=new vt;i.add(M);let L=[[0,1.5,0,16765773],[-2.3,1,.6,14148336],[2.3,.6,.6,14256458]],C=o(new ln({color:10129286})),D=L.map(([P,te,q,Q])=>{let y=o(new Si(1,1.15,te,6));y.translate(0,te/2,0);let E=new Pt(y,C);E.position.set(P,0,q),M.add(E);let V=o(new Si(1.02,1.02,.12,6));return V.translate(0,te+.06,0),E.add(new Pt(V,o(new ln({color:Q,emissive:new Pe(Q).multiplyScalar(.25)})))),E});M.visible=!1;let U=e.maxChars||64,X=(P,te,q)=>{let Q=new Mn(o(P),te,q);Q.frustumCulled=!1,Q.count=0;let y=new Pe(1,1,1);for(let E=0;E<q;E++)Q.setColorAt(E,y);return i.add(Q),Q},I=X(new wi(1,1).rotateX(-Math.PI/2),o(new Qt({map:d,transparent:!0,depthWrite:!1})),U+8);I.renderOrder=2;let z=X(new wi(1,1).rotateX(-Math.PI/2),o(new Qt({map:f,transparent:!0,depthWrite:!1,blending:kn})),U);z.renderOrder=2;let Z=X(new or(1,2),o(new en({transparent:!0,depthWrite:!1,blending:kn,uniforms:{time:{value:0}},vertexShader:`varying float vF; varying vec3 vC;
      void main(){ vec4 mv = modelViewMatrix * instanceMatrix * vec4(position,1.0); vec3 n = normalize(normalMatrix * mat3(instanceMatrix) * normal);
        vF = 1.0 - abs(dot(n, normalize(-mv.xyz)));
        #ifdef USE_INSTANCING_COLOR
          vC = instanceColor;
        #else
          vC = vec3(0.4,0.9,1.0);
        #endif
        gl_Position = projectionMatrix * mv; }`,fragmentShader:"varying float vF; varying vec3 vC; uniform float time; void main(){ float a = pow(vF, 2.2) * 0.9 + 0.06; gl_FragColor = vec4(vC * a, 1.0); }"})),U),$=o(new Si(.22,.17,.2,5,1,!0)),j=new Pt($,o(new ln({color:16765773,emissive:8016384,side:sn})));j.visible=!1,i.add(j);let H=64,J=new Mn(o(new ta(.86,1,40).rotateX(-Math.PI/2)),o(new Qt({color:16777215,transparent:!0,depthWrite:!1,blending:kn,side:sn})),H);J.frustumCulled=!1,J.renderOrder=4;{let P=new Pe(0,0,0);for(let te=0;te<H;te++)J.setColorAt(te,P)}i.add(J);let ee=[],we=12,Ae=new Mn(o(new or(.55,0)),o(new ln({color:16747069,emissive:16734736})),we);Ae.frustumCulled=!1,Ae.count=0,i.add(Ae);let ne=[],Me=12,Te=X(new wi(1,1).rotateX(-Math.PI/2),o(new Qt({map:d,color:1707014,transparent:!0,depthWrite:!1})),Me);Te.renderOrder=2;let De=[],Ee=10,Oe=new Mn(o(new Si(1,1,1,20,1,!0).translate(0,.5,0)),o(new en({transparent:!0,depthWrite:!1,blending:kn,side:sn,vertexShader:`varying vec2 vUv; varying vec3 vC; void main(){ vUv = uv;
      #ifdef USE_INSTANCING_COLOR
        vC = instanceColor;
      #else
        vC = vec3(1.0);
      #endif
      gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position,1.0); }`,fragmentShader:"varying vec2 vUv; varying vec3 vC; void main(){ float a = pow(1.0 - vUv.y, 1.4) * (0.55 + 0.45 * sin(vUv.x * 62.83 + vUv.y * 9.0)); gl_FragColor = vec4(vC * a, 1.0); }"})),Ee);Oe.frustumCulled=!1,Oe.renderOrder=7,Oe.count=0;{let P=new Pe(0,0,0);for(let te=0;te<Ee;te++)Oe.setColorAt(te,P)}i.add(Oe);let bt=[];function Be(P,te,q={}){bt.push({x:P,z:te,t0:ut,dur:q.dur||1.2,r:q.r||.9,h:q.h||22,col:new Pe(q.color??16777215),follow:q.follow||0,y:q.y||0}),bt.length>Ee&&bt.shift()}let ht=6,ct=null,Ye=null,Et=[],Mt=[],Dt=new Set;function St(P){if(Dt.has(P))return;Dt.add(P);let te=Xe.get(P);if(te&&(te.loot=!0,te.a)){let q=te.a.state;ie(te),te.relootAt=ut,te.prevState=q}}function Tn(P,te){let q=o(new Ct),Q=new Float32Array(P*3),y=new Float32Array(P*4),E=new Float32Array(P);q.setAttribute("position",new nt(Q,3)),q.setAttribute("col",new nt(y,4)),q.setAttribute("size",new nt(E,1));let V=o(new en({transparent:!0,depthWrite:!1,blending:te?kn:Xi,uniforms:{px:{value:400}},vertexShader:"attribute vec4 col; attribute float size; uniform float px; varying vec4 vC; void main(){ vC = col; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = min(size * px / max(0.5, -mv.z), 160.0); gl_Position = projectionMatrix * mv; }",fragmentShader:te?"varying vec4 vC; void main(){ float d = length(gl_PointCoord-0.5)*2.0; float a = pow(max(0.0, 1.0 - d), 2.0); gl_FragColor = vec4(vC.rgb * a * vC.a, 1.0); }":"varying vec4 vC; void main(){ vec2 p = gl_PointCoord-0.5; if (vC.a < 0.0) { if (abs(p.x) > 0.5 || abs(p.y) > 0.28) discard; gl_FragColor = vec4(vC.rgb, 1.0); } else { float d = length(p)*2.0; if (d > 1.0) discard; gl_FragColor = vec4(vC.rgb, vC.a * (1.0 - d*d)); } }"})),N=new ps(q,V);return N.frustumCulled=!1,i.add(N),{geo:q,pos:Q,col:y,size:E,mat:V,pts:N,list:[],cap:P}}let je=Tn(e.particles||900,!0),Rt=Tn(Math.round((e.particles||900)*.5),!1);je.pts.renderOrder=6,Rt.pts.renderOrder=5;let un=1,Nt=new Pe;function k(P,te,q,Q,y,E){te=Math.max(1,Math.round(te*un));for(let V=0;V<te&&P.list.length<P.cap-64;V++){let N=Math.random()*Xc,B=(E.up??.5)+Math.random()*(E.spreadUp??.5),oe=(E.speed||4)*(.4+Math.random()*.8),Se=E.colors?E.colors[Math.random()*E.colors.length|0]:E.color;Nt.set(Se),P.list.push({x:q+(Math.random()-.5)*(E.jitter||0),y:Q,z:y+(Math.random()-.5)*(E.jitter||0),vx:Math.cos(N)*oe*(1-B*.6),vy:oe*B*(E.vyMul??1),vz:Math.sin(N)*oe*(1-B*.6),g:E.g??9,drag:E.drag??1.5,life:(E.life||.6)*(.7+Math.random()*.6),t:0,s0:E.size||.3,s1:E.size1??(E.size||.3)*.3,r:Nt.r,gg:Nt.g,b:Nt.b,a:E.alpha??1,conf:!!E.confetti,spin:Math.random()*Xc})}}function fn(P,te,q){let Q=P.list,y=0;for(let N=0;N<Q.length;N++){let B=Q[N];if(B.t+=te,B.t>=B.life)continue;B.vy-=B.g*te;let oe=Math.exp(-B.drag*te);B.vx*=oe,B.vy*=oe,B.vz*=oe,B.conf&&(B.spin+=te*6,B.vx+=Math.sin(B.spin)*te*2),B.x+=B.vx*te,B.y+=B.vy*te,B.z+=B.vz*te,B.y<.05&&B.g>0&&(B.y=.05,B.vy*=-.3,B.vx*=.7,B.vz*=.7),Q[y++]=B}Q.length=y;let E=0,V=(N,B,oe,Se,ue,_e,Ce,We)=>{P.pos[E*3]=N,P.pos[E*3+1]=B,P.pos[E*3+2]=oe,P.col[E*4]=Se,P.col[E*4+1]=ue,P.col[E*4+2]=_e,P.col[E*4+3]=Ce,P.size[E]=We,E++};if(q)for(let N of q)V(N[0],N[1],N[2],N[3],N[4],N[5],N[6],N[7]);for(let N of Q){let B=N.t/N.life,oe=N.conf?1:1-B*B;V(N.x,N.y,N.z,N.r,N.gg,N.b,N.conf?-1:N.a*oe,N.s0+(N.s1-N.s0)*B)}P.geo.setDrawRange(0,E),P.geo.attributes.position.needsUpdate=!0,P.geo.attributes.col.needsUpdate=!0,P.geo.attributes.size.needsUpdate=!0;for(let N of["position","col","size"]){let B=P.geo.attributes[N];B.clearUpdateRanges?.(),B.addUpdateRange?.(0,E*B.itemSize)}}let Xe=new Map,dt=[],le=new He,pt=new $t,ze=new Un,Ue=new W,R=new W,A=new Pe,Y=P=>(P=P^61^P>>>16,P=P+(P<<3)|0,P^=P>>>4,P=Math.imul(P,668265261),(P^P>>>15)>>>0),he=P=>P.flags&Tt.bot?pu[Y(P.id)%pu.length]:du[Y(P.id)%du.length],ae=P=>P.loot&&g&&g.templates.has(P.model+"@loot")?P.model+"@loot":P.model;function me(P,te){let q=Xe.get(P.id);return q||(q={a:null,model:he(P),loot:Dt.has(P.id),kb:null,kbx:0,kbz:0,freeze:0,x:P.x,y:P.y,z:P.z,face:P.face,gs:1,seen:te,spawn:te,hit:-9,atkN:0,spinT:-9,frame:0,acc:0,speed:0},Xe.set(P.id,q)),q}function ve(P,te){if(P.a||!g)return;let q=te.flags&Tt.bot?null:te.info?.color??null;P.a=g.actor(ae(P),q),P.a.obj.scale.setScalar(mu),i.add(P.a.obj)}function ie(P){P.a&&(g.release(P.a),P.a=null)}let se=[],ge=0,F=new W;function re(P,te,q){if(P.length<=q)return se=P,P;if(te<ge&&se.length){let y=new Set(se.map(V=>V.id)),E=P.filter(V=>y.has(V.id));if(E.length>=Math.min(q,P.length)*.8)return E.concat(P.filter(V=>!y.has(V.id)&&V.flags&(Tt.cmd|Tt.crown|Tt.giant)).slice(0,4)).slice(0,q)}ge=te+.6;let Q=P.map(y=>({f:y,s:(y.flags&Tt.cmd?6:0)+(y.flags&Tt.crown?5:0)+(y.flags&Tt.giant?4:0)+(y.flags&Tt.bot?0:2)-Math.hypot(y.x-F.x,y.z-F.z)*.25}));return Q.sort((y,E)=>E.s-y.s),se=Q.slice(0,q).map(y=>y.f),se}let G={tx:0,ty:0,tz:0,dist:30,yaw:.9,pitch:.6,kill:null,shake:0,orbit:0,zoom:0,duel:0},de=(P,te)=>Math.atan2(Math.sin(te-P),Math.cos(te-P)),fe=9/16,pe=390,Ne=844,qe={x:0,z:0,w:0},ce={x:0,z:0,at:0};function ke(P,te,q){let Q=0,y=0,E=.9,V=26,N=.62,B=P.phase,oe=P.fighters;if(G.orbit+=te*(B==="lobby"?.07:B==="ceremony"?0:.025*(1-G.duel)),qe.w*=Math.exp(-te*.8),B==="battle"&&oe.length){if(q>ce.at){ce.at=q+.5;let be=(tn,rt)=>{let Gt=0,Jt=0,En=0;for(let Ke of oe){if(Ke.flags&Tt.air)continue;let yt=Math.hypot(Ke.x-tn,Ke.z-rt);if(yt<7){let Yt=(1+(Ke.flags&Tt.cmd?1.5:0)+(Ke.flags&(Tt.giant|Tt.crown)?1:0))*(1-yt/9);Gt+=Yt,Jt+=Ke.x*Yt,En+=Ke.z*Yt}}return{w:Gt,x:Gt?Jt/Gt:tn,z:Gt?En/Gt:rt}},tt=be(ce.x,ce.z),st=tt;for(let tn of oe){if(Math.random()>24/oe.length)continue;let rt=be(tn.x,tn.z);rt.w>tt.w&&(tt=rt)}tt!==st&&tt.w<st.w*1.35&&(tt=st),ce.x=tt.x,ce.z=tt.z}let ye=Math.min(.4,qe.w*.06);Q=ce.x*(1-ye)+qe.x*ye,y=ce.z*(1-ye)+qe.z*ye;let Ie=[];for(let be of oe)be.flags&Tt.air||Ie.push(Math.hypot(be.x-Q,be.z-y));Ie.sort((be,tt)=>be-tt);let Le=Math.max(Ie.length?Ie[Math.min(Ie.length-1,Math.max(2,Math.floor(Ie.length*.45)))]:3,2.5);V=zt.clamp(5.5+Le*(fe<.7?1.1:.85),8,18),N=.34+Math.min(.1,V*.004),E=1;let Ze=oe.length===2&&P.n===2?oe:null;if(G.duel+=((Ze?1:0)-G.duel)*Math.min(1,te*1.5),Ze){let[be,tt]=Ze,st=(be.x+tt.x)/2,tn=(be.z+tt.z)/2,rt=Math.hypot(be.x-tt.x,be.z-tt.z);Q=st,y=tn,E=1.1,V=zt.clamp(4.5+rt*.95,6.5,14),N=.2;let Gt=Math.atan2(be.x-tt.x,-(be.z-tt.z))+Math.sin(q*.25)*.35,Jt=G.yaw+G.orbit;Math.abs(de(Jt,Gt+Math.PI))<Math.abs(de(Jt,Gt))&&(Gt+=Math.PI),G.orbit+=de(Jt,Gt)*Math.min(1,te*1.2)}}else if(B==="ceremony"){Q=0,y=.3,E=2.4,V=7.6,N=.14;let ye=Math.PI/2+Math.sin(q*.35)*.32,Ie=G.yaw+G.orbit;G.orbit+=de(Ie,ye)*Math.min(1,te*2.5)}else{let ye=oe.map(Le=>Math.hypot(Le.x,Le.z)).sort((Le,Ze)=>Le-Ze),Ie=ye.length?ye[Math.floor(ye.length*.75)]:4;V=zt.clamp(10+Ie*(fe<.7?1.25:1),12,26),N=.36+Math.sin(q*.11)*.05,E=1.2}if(G.kill&&q<G.kill.until){let ye=G.kill,Ie=oe.find(Le=>Le.id===ye.id)||ye.last;if(Ie){ye.last=Ie;let Le=Math.min(1,(q-ye.t0)/.3,(ye.until-q)/.4);Q=zt.lerp(Q,Ie.x,Le),y=zt.lerp(y,Ie.z,Le),E=zt.lerp(E,1,Le);let Ze=Xe.get(ye.id);V=zt.lerp(V,(ye.d||7)*(Ze?Ze.gs:1),Le),N=zt.lerp(N,ye.p??.28,Le),E=zt.lerp(E,ye.y??1,Le)}}let Se=1-Math.exp(-te*2.2),ue=1-Math.exp(-te*1.4);G.tx+=(Q-G.tx)*Se,G.ty+=(E-G.ty)*Se,G.tz+=(y-G.tz)*Se,G.dist+=(V-G.dist)*ue,G.pitch+=(N-G.pitch)*ue,G.zoom=Math.max(0,G.zoom-te*1.6),F.set(G.tx,0,G.tz);let _e=G.yaw+G.orbit,Ce=G.dist*(1-Math.min(.2,G.zoom*.2)),We=G.tx+Math.cos(_e)*Math.cos(G.pitch)*Ce,et=G.ty+Math.sin(G.pitch)*Ce,O=G.tz+Math.sin(_e)*Math.cos(G.pitch)*Ce;G.shake=Math.max(0,G.shake-te*1.8);let K=G.shake*G.shake*.7;r.position.set(We+(Math.sin(q*47)+Math.sin(q*29))*K,Math.max(.6,et+Math.sin(q*53)*K),O+Math.cos(q*41)*K),r.lookAt(G.tx,G.ty,G.tz)}let Ge={maxChars:U,halos:!0,particles:1,animLod:1},xe=[],ut=0,Ft=0,Vn=0,Is=0;function Tr(P){let te=Math.random()*Xc,q=Math.cos(te)*P,Q=Math.sin(te)*P,y=q,E=Q;for(let V=0;V<12;V++){let N=9-V*.78;y+=(Math.random()-.5)*.7,E+=(Math.random()-.5)*.7,k(je,1,y,N,E,{color:V%3?14207231:16777215,speed:0,life:.22,size:1.1,size1:.6,g:0})}k(je,10,q,.3,Q,{colors:[16777215,13215999],speed:4,life:.35,size:.4,g:3,up:.6}),T.flash.value=1,Math.hypot(q-G.tx,Q-G.tz)<10&&an(.12)}function rl(P){if(P<Is)return;Is=P+.35+Math.random()*.35;let te=(Math.random()-.5)*16,q=8+Math.random()*5,Q=-4-Math.random()*6,y=[[16731486,16765503],[4114431,16777215],[10216804,16773544],[16740277,13667583]][Math.random()*4|0];k(je,46,te,q,Q,{colors:y,speed:7,life:1.3,size:.45,size1:.15,g:2.2,drag:1.6,up:-.5,spreadUp:1.4}),k(je,1,te,q,Q,{color:y[0],speed:0,life:.35,size:6,size1:2,g:0,alpha:.7})}function Ha(P,te,q){ut=q,Ft++,T.time.value=q,Z.material.uniforms.time.value=q,p&&p.update(q);let Q=P.phase==="battle"?P.r:u+2;T.r.value=Q,T.rt.value=P.rt,T.showT.value=P.phase==="battle"&&P.rt<P.r-.3?1:0,v.visible=P.phase==="battle"&&Q<u+.5,v.scale.set(Q,9+Math.sin(q*2)*.4,Q);let y=P.phase==="battle"?zt.clamp(1-Q/u,0,1):0,E=P.phase==="battle"&&P.n<=3?1:0;if(T.heat.value+=(E-T.heat.value)*Math.min(1,te*2),T.flash.value=Math.max(0,T.flash.value-te*4),v.visible&&q>Vn&&(Vn=q+.9+Math.random()*2.4,Tr(Q)),c.intensity=1.15-y*.4+T.flash.value*.3,l.intensity=2-y*.7,n.toneMappingExposure=1-y*.12+T.flash.value*.05,xe.length=0,M.visible=P.phase==="ceremony",P.phase!==Rr&&(Rr=P.phase,Fi=q),M.visible){let O=zt.clamp((q-Fi)/.8,.01,1);D.forEach(K=>K.scale.y=1-Math.pow(1-O,3))}let V=re(P.fighters,q,Ge.maxChars);ke(P,te,q);let N=0,B=0,oe=null,Se=Ge.animLod||1;for(let O of V){if(N>=U)break;let K=me(O,q),ye=K.x,Ie=K.z;K.x=O.x,K.y=O.y,K.z=O.z,K.seen=q;let Le=O.face-K.face;Le=Math.atan2(Math.sin(Le),Math.cos(Le)),K.face+=Le*Math.min(1,te*10);let Ze=Math.hypot(K.x-ye,K.z-Ie)/Math.max(te,.001);K.speed+=(Math.min(Ze,12)-K.speed)*Math.min(1,te*8);let be=O.flags&Tt.giant;K.gs+=((be?2:1)-K.gs)*Math.min(1,te*5);let tt=O.flags&Tt.air,st=O.flags&Tt.dance,tn=O.flags&Tt.dash;ve(K,O);let rt=K.a,Gt=Math.min(1,(q-K.spawn)/.3);if(rt){let Ke=Math.PI/2-K.face;q-K.spinT<.45&&(Ke+=(q-K.spinT)*30);let yt=0,Yt=0;if(K.kb){let cl=(q-K.kb.t0)/.28;if(cl>=1)K.kb=null;else{let Du=(1-cl)*(1-cl)*K.kb.m;yt=K.kb.x*Du,Yt=K.kb.z*Du}}rt.obj.position.set(K.x+yt,K.y,K.z+Yt),rt.obj.rotation.set(0,Ke,0),rt.obj.scale.setScalar(mu*K.gs*(.4+.6*Gt));let wt=P.phase==="ceremony"&&O.flags&Tt.crown||st?"cheer":tt?"jump":K.speed>2.2?"run":K.speed>.5?"walk":P.phase==="battle"?"combat":"idle";wt==="jump"?rt.state!=="jump"&&q>=rt.until&&rt.play("jump",q):rt.play(wt,q);let Ut=rt.actions.get("run");Ut&&(Ut.timeScale=zt.clamp(K.speed/4.5,.75,1.6)*(K.gs>1.5?.7:1)),K.acc+=te;let Wa=Math.hypot(K.x-G.tx,K.z-G.tz)>12||N>30?2*Se:Se;K.relootAt&&q-K.relootAt<1&&(rt.play("cheer",q),rt.until=q+.9,K.relootAt=0),q<K.freeze||(Ft+O.id)%Wa===0&&(fu(g,rt,K.acc,q),K.acc=0)}let Jt=(1.1+(be?1.1:0))*(tt?Math.max(.3,1-K.y/14):1)*Gt;le.compose(Ue.set(K.x,.04,K.z),pt.identity(),R.set(Jt,1,Jt)),I.setMatrixAt(N,le);let En=O.info||{};if(O.flags&(Tt.shield|Tt.rage)&&P.phase==="battle"){let Ke=O.flags&Tt.shield,yt=(Ke?1:.9)*K.gs*(1+Math.sin(q*8)*.03);le.compose(Ue.set(K.x,K.y+.75*K.gs,K.z),pt.identity(),R.set(yt,yt*1.15,yt)),Z.setMatrixAt(B,le),Z.setColorAt(B,Ke?Nt.setRGB(.35,.85,1):Nt.setRGB(1,.25,.2)),B++}O.flags&Tt.crown&&(oe={s:K}),O.flags&Tt.speed&&K.speed>1.5&&Math.random()<.5&&k(je,1,K.x,K.y+.2,K.z,{color:16769126,speed:.4,life:.4,size:.35,g:-.5}),tn&&k(je,2,K.x,K.y+.6,K.z,{color:En.color??16777215,speed:.3,life:.35,size:.6,g:0}),tt&&k(je,1,K.x,K.y+.9,K.z,{color:12577279,speed:.2,life:.5,size:.4,g:-2,up:1}),O.flags&Tt.cmd&&Ge.halos&&(A.set(En.color??16777215),xe.push([K.x,.15,K.z,A.r*.6,A.g*.6,A.b*.6,.6,2.4*K.gs])),be&&Ge.halos&&xe.push([K.x,K.y+1.4,K.z,1,.75,.3,.3,7]),K.loot&&Ge.halos&&rt&&rt.hand&&N<24&&xe.push([K.x,K.y+1*K.gs,K.z,1,.8,.35,.28+.1*Math.sin(q*5+O.id),1.6*K.gs]),N++}{let O=0;for(let K of V.slice(0,N)){if(K.flags&Tt.bot)continue;let ye=Xe.get(K.id),Ie=1.25*ye.gs*Math.min(1,(q-ye.spawn)/.3);le.compose(Ue.set(ye.x,.05,ye.z),pt.identity(),R.set(Ie,1,Ie)),z.setMatrixAt(O,le),z.setColorAt(O,A.set(K.info?.color??16777215).multiplyScalar(.85)),O++}z.count=O,z.instanceMatrix.needsUpdate=!0,z.instanceColor&&(z.instanceColor.needsUpdate=!0)}if(I.count=N+dt.length,dt.forEach((O,K)=>{let ye=Math.max(0,1-(q-O.t0-1.2)/.8);le.compose(Ue.set(O.x,.04,O.z),pt.identity(),R.set(1.1*ye,1,1.1*ye)),I.setMatrixAt(N+K,le)}),I.instanceMatrix.needsUpdate=!0,Z.count=B,Z.instanceMatrix.needsUpdate=!0,Z.instanceColor&&(Z.instanceColor.needsUpdate=!0),j.visible=!!oe,oe){let{s:O}=oe,K=O.y+(tp+.3)*O.gs+Math.sin(q*3)*.05;j.position.set(O.x,K,O.z),j.rotation.set(-.15,q,0),j.scale.setScalar(O.gs*1.2),Ge.halos&&xe.push([O.x,K,O.z,1,.8,.3,.7,2.4])}for(let[O,K]of Xe)q-K.seen>.6&&K.a&&ie(K),q-K.seen>5&&Xe.delete(O);for(let O=dt.length-1;O>=0;O--){let K=dt[O],ye=q-K.t0;if(ye>2){g.release(K.a),dt.splice(O,1);continue}ye>1.2&&(K.a.obj.position.y=-(ye-1.2)*1.2),fu(g,K.a,te,q)}let ue=0;for(let O=ee.length-1;O>=0;O--){let K=ee[O];q-K.t0>K.dur&&ee.splice(O,1)}for(let O of ee){if(ue>=H)break;let K=(q-O.t0)/O.dur,ye,Ie;O.kind==="warn"?(ye=O.r0*(.9+.1*Math.sin(q*18)),Ie=.5+.5*Math.sin(q*14)):O.kind==="mark"?(ye=O.r0,Ie=1-K):(ye=O.r0+(O.r1-O.r0)*(1-Math.pow(1-K,3)),Ie=1-K),le.compose(Ue.set(O.x,O.y??.08,O.z),pt.identity(),R.set(ye,1,ye)),J.setMatrixAt(ue,le),J.setColorAt(ue,Nt.copy(O.col).multiplyScalar(Math.max(0,Ie))),ue++}J.count=ue,J.instanceMatrix.needsUpdate=!0,J.instanceColor&&(J.instanceColor.needsUpdate=!0);let _e=0;for(let O=ne.length-1;O>=0;O--)q>ne[O].t0+ne[O].d+.05&&ne.splice(O,1);for(let O of ne){let K=zt.clamp((q-O.t0)/O.d,0,1),ye=K*K,Ie=O.x+(1-ye)*7,Le=.4+(1-ye)*26,Ze=O.z-(1-ye)*7;le.compose(Ue.set(Ie,Le,Ze),pt.setFromEuler(ze.set(q*5,q*4,0)),R.setScalar(1.2)),Ae.setMatrixAt(_e++,le),k(je,2,Ie,Le,Ze,{colors:[16751164,16765802,16734751],speed:.8,life:.45,size:1.1,g:0,drag:2}),Ge.halos&&xe.push([Ie,Le,Ze,1,.55,.2,.9,5])}Ae.count=_e,Ae.instanceMatrix.needsUpdate=!0;for(let O=De.length-1;O>=0;O--)q-De[O].t0>7&&De.splice(O,1);De.forEach((O,K)=>{let ye=Math.min(1,(q-O.t0)*8)*Math.min(1,(7-(q-O.t0))/2);le.compose(Ue.set(O.x,.035,O.z),pt.identity(),R.set(O.r*ye,1,O.r*ye)),Te.setMatrixAt(K,le)}),Te.count=De.length,Te.instanceMatrix.needsUpdate=!0;let Ce=0;for(let O=bt.length-1;O>=0;O--)q-bt[O].t0>bt[O].dur&&bt.splice(O,1);for(let O of bt){if(O.follow){let Le=Xe.get(O.follow);Le&&(O.x=Le.x,O.z=Le.z)}let K=(q-O.t0)/O.dur,ye=Math.min(1,K*6)*Math.min(1,(1-K)*3),Ie=O.r*(.6+.4*Math.min(1,K*5));le.compose(Ue.set(O.x,O.y,O.z),pt.identity(),R.set(Ie,O.h,Ie)),Oe.setMatrixAt(Ce,le),Oe.setColorAt(Ce,Nt.copy(O.col).multiplyScalar(ye*.45)),Ce++}Oe.count=Ce,Oe.instanceMatrix.needsUpdate=!0,Oe.instanceColor&&(Oe.instanceColor.needsUpdate=!0);let We=0;for(let O=Et.length-1;O>=0;O--)q-Et[O].t0>1.9&&Et.splice(O,1);for(let O of Et){let K=q-O.t0,ye,Ie=1.6,Le=O.t0*3;if(K<.7){let Ze=K/.7;ye=16*(1-Ze*Ze),Le+=K*6}else{let Ze=K-.7;ye=Math.max(0,Math.sin(Math.min(Math.PI,Ze*9))*.5*Math.exp(-Ze*4))}if(K>=.7&&!O.landed&&(O.landed=!0,It(O.x,O.z,{r0:.4,r1:2.6,color:16765802,dur:.4}),k(Rt,8,O.x,.2,O.z,{color:13219994,speed:2.5,life:.5,size:.5,size1:.9,g:1,up:.1,alpha:.7}),an(.12)),K>=1.15&&!O.done){O.done=!0,k(je,30,O.x,.8,O.z,{colors:[16769126,16765802,16777215,16757575],speed:6,life:.8,size:.35,g:7,up:.9}),k(je,1,O.x,.9,O.z,{color:16765802,speed:0,life:.4,size:5,size1:2,g:0,alpha:.8}),St(O.id);let Ze=Xe.get(O.id);Ze&&Be(Ze.x,Ze.z,{color:16765802,r:.7,h:6,dur:.8,follow:O.id})}K>1.15&&(Ie=1.6*Math.max(0,1-(K-1.15)/.5)),ct&&We<ht&&Ie>.01&&(le.compose(Ue.set(O.x,ye,O.z),pt.setFromEuler(ze.set(0,Le,0)),R.setScalar(Ie)),ct.setMatrixAt(We++,le)),K<.7&&Ge.halos&&xe.push([O.x,ye+.6,O.z,1,.8,.3,.7,2.6])}ct&&(ct.count=We,ct.instanceMatrix.needsUpdate=!0);let et=0;for(let O=Mt.length-1;O>=0;O--)q-Mt[O].t0>1.3&&Mt.splice(O,1);for(let O of Mt){let K=q-O.t0,ye=Xe.get(O.id),Ie=O.x,Le=O.z,Ze=.6+Math.min(1,K*3)*1.2;if(K>.7&&ye){let be=Math.min(1,(K-.7)/.45),tt=be*be;Ie+=(ye.x-O.x)*tt,Le+=(ye.z-O.z)*tt,Ze=zt.lerp(Ze,1.2,tt)}K>1.15&&!O.done&&(O.done=!0,St(O.id),ye&&k(je,18,ye.x,1,ye.z,{colors:[16777215,16769126],speed:4,life:.5,size:.35,g:3})),Ye&&et<ht&&!O.done&&(le.compose(Ue.set(Ie,Ze,Le),pt.setFromEuler(ze.set(.3,q*7,0)),R.setScalar(1.8)),Ye.setMatrixAt(et++,le)),!O.done&&Ge.halos&&xe.push([Ie,Ze,Le,1,.9,.5,.75,1.8])}if(Ye&&(Ye.count=et,Ye.instanceMatrix.needsUpdate=!0),P.phase==="lobby"&&Dt.size){Dt.clear();for(let O of Xe.values())O.loot&&(O.loot=!1,ie(O))}P.phase==="ceremony"&&(rl(q),q>(Er||0)&&(Er=q+2.2,Be(0,0,{color:16771496,r:1.3,h:26,dur:2.4,y:1.5}))),fn(je,te,xe),fn(Rt,te,null),n.render(i,r)}function yn(P,te){let q=te.fighters.find(y=>y.id===P);if(q)return q;let Q=Xe.get(P);return Q?{x:Q.x,y:Q.y,z:Q.z,id:P}:null}function It(P,te,q){ee.push({x:P,z:te,y:q.y,t0:ut,dur:q.dur||.5,r0:q.r0??.2,r1:q.r1??2,col:new Pe(q.color??16777215),kind:q.kind||"wave"}),ee.length>H&&ee.shift()}function an(P){G.shake=Math.min(1.2,G.shake+P)}let Qn=(P,te)=>{let q=Xe.get(P);return q&&q.a&&q.a.play(te,ut),q};function Va(P,te){let q=ut;switch(P.k){case"atk":{let Q=Xe.get(P.a);if(Q&&Q.a){let y=Q.loot&&ev[Q.model]||tv[Q.model]||["attack"];Q.a.play(y[Q.atkN++%y.length],q)}break}case"hit":{let Q=Xe.get(P.b),y=yn(P.b,te);if(Q&&(Q.hit=q,Q.a&&(q>=Q.a.until||P.c||P.m)&&Q.a.play("hit",q)),!y)break;let E=Xe.get(P.a),V=P.c||P.m||E&&E.loot;if(Q&&!P.s){let B=E?E.x:y.x-Math.cos(Q.face),oe=E?E.z:y.z-Math.sin(Q.face),Se=y.x-B,ue=y.z-oe,_e=Math.hypot(Se,ue)||1;Q.kb={x:Se/_e,z:ue/_e,m:V?.75:.35,t0:q},Q.freeze=q+(V?.09:.05)}E&&!P.s&&(E.freeze=q+(V?.08:.04)),V&&!P.s&&k(je,1,y.x,(y.y||0)+.9,y.z,{color:16777215,speed:0,life:.12,size:2.4,size1:1,g:0}),qe.x+=(y.x-qe.x)*.15,qe.z+=(y.z-qe.z)*.15,qe.w=Math.min(8,qe.w+.4);let N=P.c||P.m;k(je,N?14:6,y.x,(y.y||0)+.8,y.z,{colors:P.s?[11820287,14721279]:N?[16777215,16769126,16751164]:[16777215,16773544],speed:N?7:4.5,life:.35,size:N?.5:.35,g:6,up:.3}),N?(It(y.x,y.z,{y:.8,r0:.2,r1:1.6,color:16773312,dur:.25}),an(P.m?.25:.12)):Math.hypot(y.x-G.tx,y.z-G.tz)<7&&an(.03);break}case"block":{Qn(P.a,"block");let Q=yn(P.a,te);Q&&k(je,6,Q.x,.9,Q.z,{color:8382463,speed:3,life:.3,size:.35,g:0});break}case"ko":{let Q=yn(P.b,te);if(!Q)break;let y=Xe.get(P.b);if(y&&y.a&&dt.length<8){let N=y.a;y.a=null,N.play("die",q,{fade:.08}),N.base="dead",dt.push({a:N,t0:q,x:Q.x,z:Q.z})}else y&&ie(y);k(je,22,Q.x,.8,Q.z,{colors:[16777215,16769126,16739029,6222079],speed:7,life:.7,size:.5,g:5,up:.6}),k(Rt,10,Q.x,.5,Q.z,{colors:[16052223,14274800],speed:2.2,life:.8,size:.9,size1:1.6,g:-.5,alpha:.75,up:.3}),k(je,1,Q.x,1.2,Q.z,{color:15400191,speed:.1,life:1.6,size:2.2,size1:1,g:-2.2,drag:.5,up:1,alpha:.9}),It(Q.x,Q.z,{r0:.3,r1:3,color:16766719,dur:.45}),an(P.multi||P.streak?.35:.16);let E=P.left>0&&P.left<=1;P.a&&(E||P.first||P.multi||P.streak||P.giant||P.left>0&&P.left<=3)&&(E||!G.kill||q>G.kill.until+3)&&(G.kill={id:P.a,t0:q,until:q+(E?2.6:1.9),d:E?6.5:7.5,p:E?.2:.28},Qn(P.a,"cheer"),G.zoom=E?1:.6),P.a&&Xe.get(P.a)&&!Dt.has(P.a)&&!(P.s||P.m)&&((P.n||0)>=2||P.multi||P.streak)&&Mt.length<ht&&Mt.push({id:P.a,x:Q.x,z:Q.z,t0:q}),Xe.delete(P.b);break}case"dash":{Qn(P.a,"dash");let Q=yn(P.a,te);Q&&(It(Q.x,Q.z,{r0:.3,r1:1.4,color:13625599,dur:.3}),k(Rt,6,Q.x,.2,Q.z,{color:14207976,speed:2,life:.5,size:.6,size1:1,g:0,alpha:.6}));break}case"shield":{Qn(P.a,"block");let Q=yn(P.a,te);Q&&It(Q.x,Q.z,{r0:.4,r1:1.6,color:6220031,dur:.4});break}case"spin":{let Q=Qn(P.a,"spin");Q&&(Q.spinT=q);let y=yn(P.a,te);y&&(It(y.x,y.z,{r0:.5,r1:3,color:16769898,dur:.4}),k(je,16,y.x,.7,y.z,{color:16769898,speed:6,life:.4,size:.4,g:0,up:0}),an(.15));break}case"heal":{let Q=yn(P.a,te);Q&&k(je,4,Q.x,.4,Q.z,{color:7208860,speed:.6,life:.9,size:.35,g:-2.5,up:1,jitter:.6});break}case"drop":{let Q=Xe.get(P.a);Q&&(Q.spawn=q);break}case"land":{let Q=yn(P.a,te);Q&&(It(Q.x,Q.z,{r0:.3,r1:1.8,color:16773584,dur:.35}),k(Rt,8,Q.x,.15,Q.z,{color:13219994,speed:2.5,life:.5,size:.5,size1:.9,g:1,up:.1,alpha:.7}));break}case"meteor":ne.push({x:P.x,z:P.z,t0:q,d:Math.max(.3,P.d)}),ne.length>we&&ne.shift(),It(P.x,P.z,{kind:"warn",r0:2.4,dur:Math.max(.3,P.d),color:16726831});break;case"boom":k(je,34,P.x,.5,P.z,{colors:[16777215,16765802,16747069,16730911],speed:9,life:.7,size:.8,g:4,up:.5}),k(Rt,14,P.x,.6,P.z,{colors:[5917294,8219279,3813194],speed:3.5,life:1.2,size:1.2,size1:2.4,g:-.6,alpha:.8,up:.5}),It(P.x,P.z,{r0:.5,r1:P.r*1.6,color:16756832,dur:.5}),It(P.x,P.z,{r0:.2,r1:P.r,color:16777215,dur:.25}),k(je,1,P.x,1.2,P.z,{color:16756832,speed:0,life:.3,size:9,size1:3,g:0,alpha:.9}),k(Rt,10,P.x,.3,P.z,{colors:[7035460,4864812],speed:6,life:.9,size:.3,g:14,up:1.2}),De.push({x:P.x,z:P.z,t0:q,r:P.r*1.4+1}),De.length>Me&&De.shift(),an(.5),G.zoom=Math.max(G.zoom,.3);break;case"nuke":an(1.1),G.zoom=.8;for(let Q=0;Q<6;Q++)Be(Math.cos(Q)*8,Math.sin(Q)*8,{color:16747248,r:1.4,h:30,dur:1.4});It(0,0,{r0:1,r1:u,color:16747248,dur:1.2,y:.3}),k(je,60,0,1,0,{colors:[16777215,16747248,10182117],speed:22,life:1,size:1,g:0,up:.1});break;case"power":case"revive":{Qn(P.a,P.k==="revive"?"rise":"summon");let Q=yn(P.a,te);if(!Q)break;let y={speed:16769126,meteor:16747069,giant:16757575,revive:16740277,nuke:16747248}[P.tier]??16740277;It(Q.x,Q.z,{r0:.3,r1:3.2,color:y,dur:.6});for(let E=0;E<7;E++)k(je,4,Q.x,.2+E*.55,Q.z,{color:y,speed:1.2,life:.9,size:.6,g:-4,up:1,jitter:.5});if(Ge.halos&&k(je,1,Q.x,1.4,Q.z,{color:y,speed:0,life:.8,size:5,size1:2,g:0,alpha:.6}),Be(Q.x,Q.z,{color:y,r:P.tier==="giant"?1.6:1,h:24,dur:P.tier==="giant"||P.k==="revive"?1.8:1.1,follow:P.a}),P.k==="revive")for(let E=0;E<3;E++)k(je,6,Q.x,.3,Q.z,{colors:[7208860,16777215],speed:1.5,life:1.2,size:.4,g:-3,up:1,jitter:1.2});P.tier==="giant"&&(It(Q.x,Q.z,{r0:.5,r1:5,color:16757575,dur:.7}),k(Rt,12,Q.x,.2,Q.z,{colors:[9075298,7035460],speed:5,life:.8,size:.35,g:12,up:1}),an(.45)),(!G.kill||q>G.kill.until)&&(G.kill={id:P.a,t0:q,until:q+1.6,d:7.5,p:.3}),an(.2);break}case"gift":{if(!P.a||te.phase!=="battle"||Dt.has(P.a)||Et.some(N=>N.id===P.a)||Et.length>=ht)break;let Q=yn(P.a,te);if(!Q)break;let y=Math.random()*Xc,E=Q.x+Math.cos(y)*1.3,V=Q.z+Math.sin(y)*1.3;Et.push({id:P.a,x:E,z:V,t0:q}),Be(E,V,{color:16765802,r:.55,h:18,dur:1});break}case"cmd":{if(P.c==="attack"||P.c==="revenge"){let Q=yn(P.b,te);Q&&It(Q.x,Q.z,{kind:"mark",r0:.9,dur:1.5,color:16724821})}P.c==="dance"&&Qn(P.a,"taunt");break}case"hype":for(let Q=0;Q<40;Q++)k(je,1,(Math.random()-.5)*30,9+Math.random()*4,(Math.random()-.5)*30,{color:16743096,speed:.5,life:2.2,size:.6,g:4,drag:2.5});break;case"win":Qi=q+6,an(.3),Is=q+.8;break;case"phase":P.ph==="battle"&&(It(0,0,{r0:2,r1:u,color:16777215,dur:.9,y:.2}),an(.2));break}}let Qi=0,Er=0,Rr="",Fi=0;function al(P){P<Qi&&k(Rt,4,(Math.random()-.5)*7,7+Math.random()*2,(Math.random()-.5)*4,{colors:[16731486,16765503,4114431,10216804,16740277,16777215],speed:1.2,life:3.2,size:.32,g:1.6,drag:1.4,confetti:!0,up:0})}let fi=new W;return{kind:"webgl",renderer:n,ready:_,scene:i,get loaded(){return!!g},get error(){return m},resize(P,te,q){pe=P,Ne=te,fe=P/te,n.setPixelRatio(q),n.setSize(P,te,!1),r.aspect=fe,r.fov=fe<.7?52:42,fe<.8?r.setViewOffset(P,te,0,te*.1,P,te):r.clearViewOffset(),r.updateProjectionMatrix();let Q=te*q/(2*Math.tan(zt.degToRad(r.fov/2)));je.mat.uniforms.px.value=Q,Rt.mat.uniforms.px.value=Q},setQuality(P){Ge={...Ge,...P},un=P.particles??1},frame(P,te,q){al(q),Ha(P,te,q)},fx:Va,project(P,te,q){return fi.set(P,te,q).project(r),{x:(fi.x*.5+.5)*pe,y:(-fi.y*.5+.5)*Ne,z:fi.z,ok:fi.z<1&&fi.z>-1}},drawn(){return se.length?se:null},headY(P){let te=Xe.get(P.id);return tp*(te?te.gs:1)},stats(){let P=n.info,te=0;for(let q of Xe.values())q.a&&te++;return{calls:P.render.calls,tris:P.render.triangles,tex:P.memory.textures,geo:P.memory.geometries,chars:te,corpses:dt.length,parts:je.list.length+Rt.list.length,loaded:!!g}},dispose(){w=!0;for(let P of Xe.values())ie(P);Xe.clear();for(let P of dt)g&&g.release(P.a);dt.length=0,p&&(i.remove(p.group),p.dispose()),i.traverse(P=>{P.isInstancedMesh&&P.dispose()}),b&&b.dispose(),g&&g.dispose();for(let P of a)try{P.dispose()}catch{}n.dispose()},loseContext(){try{n.forceContextLoss()}catch{}}}}var Ca={alive:1,shield:2,speed:4,giant:8,rage:16,dash:32,dance:64,air:128,crown:256,cmd:512,low:1024,bot:2048},nv=s=>"#"+(s>>>0).toString(16).padStart(6,"0").slice(-6);function ip(s,e={}){let t=s.getContext("2d"),n=e.platform||20,i=390,r=844,a=1,o=8,c=195,l=380,h=0,d=0,f=[],u=[],p=[],b=new Map,g={maxChars:60,particles:1},m=(v,x,M)=>({x:c+v*o,y:l+M*o*.62-(x||0)*o*.9});function _(v,x,M){h=M,d=Math.max(0,d-x*2);let L=(Math.random()-.5)*d*14,C=(Math.random()-.5)*d*14;t.setTransform(a,0,0,a,L*a,C*a);let D=t.createLinearGradient(0,0,0,r);D.addColorStop(0,"#120a2a"),D.addColorStop(.45,"#4a1f6e"),D.addColorStop(.75,"#ff7a5c"),D.addColorStop(1,"#2a1240"),t.fillStyle=D,t.fillRect(-20,-20,i+40,r+40),t.save(),t.translate(c,l),t.scale(1,.62),t.fillStyle="#241a3a",t.beginPath(),t.arc(0,18,n*o,0,6.283),t.fill();let U=t.createRadialGradient(0,0,0,0,0,n*o);U.addColorStop(0,"#6a5a9a"),U.addColorStop(1,"#3a2f68"),t.fillStyle=U,t.beginPath(),t.arc(0,0,n*o,0,6.283),t.fill(),t.strokeStyle="rgba(255,214,120,0.6)",t.lineWidth=2;for(let I of[.18,.62])t.beginPath(),t.arc(0,0,n*o*I,0,6.283),t.stroke();t.strokeStyle="#d9a441",t.lineWidth=5,t.beginPath(),t.arc(0,0,n*o,0,6.283),t.stroke(),v.phase==="battle"&&(t.fillStyle="rgba(120,20,170,0.5)",t.beginPath(),t.arc(0,0,n*o+2,0,6.283),t.arc(0,0,v.r*o,0,6.283,!0),t.fill(),t.strokeStyle="rgba(255,140,255,0.95)",t.lineWidth=4,t.beginPath(),t.arc(0,0,v.r*o,0,6.283),t.stroke(),v.rt<v.r-.3&&(t.setLineDash([8,8]),t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=2,t.beginPath(),t.arc(0,0,v.rt*o,0,6.283),t.stroke(),t.setLineDash([]))),t.restore();for(let I=u.length-1;I>=0;I--){let z=u[I],Z=(M-z.t0)/z.dur;if(Z>=1){u.splice(I,1);continue}let $=m(z.x,0,z.z);t.strokeStyle=z.col,t.globalAlpha=z.warn?.5+.5*Math.sin(M*14):1-Z,t.lineWidth=3,t.beginPath(),t.ellipse($.x,$.y,(z.warn?z.r1:z.r0+(z.r1-z.r0)*Z)*o,(z.warn?z.r1:z.r0+(z.r1-z.r0)*Z)*o*.62,0,0,6.283),t.stroke()}t.globalAlpha=1;let X=v.fighters.slice(0,g.maxChars).sort((I,z)=>I.z-z.z);for(let I of X){let z=b.get(I.id);z||(z={hit:-9,punch:-9},b.set(I.id,z));let Z=I.flags&Ca.giant?2:1,$=nv(I.info?.color??16777215),j=M-z.hit<.12,H=m(I.x,0,I.z),J=m(I.x,I.y,I.z),ee=o*.5*Z;t.fillStyle="rgba(0,0,0,0.3)",t.beginPath(),t.ellipse(H.x,H.y,ee*1.1,ee*.45,0,0,6.283),t.fill();let we=I.flags&Ca.dance?Math.abs(Math.sin(M*9))*ee:0;t.fillStyle=j?"#fff":$,t.beginPath(),t.ellipse(J.x,J.y-ee*1-we,ee*.75,ee*.9,0,0,6.283),t.fill(),t.fillStyle=j?"#fff":"#ffd9b8",t.beginPath(),t.arc(J.x,J.y-ee*2.3-we,ee*.95,0,6.283),t.fill(),t.fillStyle=j?"#fff":$,t.beginPath(),t.arc(J.x,J.y-ee*2.45-we,ee*1,Math.PI,0),t.fill(),t.fillStyle="#1b1430";let Ae=Math.cos(I.face)*ee*.3;t.fillRect(J.x-ee*.38+Ae,J.y-ee*2.3-we,ee*.18,ee*.3),t.fillRect(J.x+ee*.2+Ae,J.y-ee*2.3-we,ee*.18,ee*.3),I.flags&Ca.shield&&(t.strokeStyle="rgba(94,232,255,0.9)",t.lineWidth=2,t.beginPath(),t.arc(J.x,J.y-ee*1.6,ee*2.2,0,6.283),t.stroke()),I.flags&Ca.crown&&(t.fillStyle="#ffd34d",t.fillRect(J.x-ee*.6,J.y-ee*3.8-we,ee*1.2,ee*.45)),M-z.punch<.2&&(t.fillStyle=$,t.beginPath(),t.arc(J.x+Math.cos(I.face)*ee*1.6,J.y-ee*1.2+Math.sin(I.face)*ee,ee*.45,0,6.283),t.fill())}for(let I=p.length-1;I>=0;I--){let z=p[I],Z=(M-z.t0)/z.d;if(Z>=1){p.splice(I,1);continue}let $=m(z.x+(1-Z*Z)*6,(1-Z*Z)*24,z.z-(1-Z*Z)*6);t.fillStyle="#ffb060",t.beginPath(),t.arc($.x,$.y,o*.6,0,6.283),t.fill()}for(let I=f.length-1;I>=0;I--){let z=f[I];if(z.t+=x,z.t>z.life){f.splice(I,1);continue}z.vy-=z.gr*x,z.x+=z.vx*x,z.y+=z.vy*x,z.z+=z.vz*x;let Z=m(z.x,z.y,z.z);t.globalAlpha=1-z.t/z.life,t.fillStyle=z.col,t.fillRect(Z.x-2,Z.y-2,4,4)}t.globalAlpha=1}function w(v,x,M,L,C,D=4){L=Math.round(L*(g.particles||1));for(let U=0;U<L&&f.length<400;U++){let X=Math.random()*6.283;f.push({x:v,y:x,z:M,vx:Math.cos(X)*D*Math.random(),vy:Math.random()*D,vz:Math.sin(X)*D*Math.random(),gr:8,t:0,life:.6,col:Array.isArray(C)?C[U%C.length]:C})}}let S=(v,x)=>x.fighters.find(M=>M.id===v);function T(v,x){let M=h;if(v.k==="atk"){let L=b.get(v.a);L&&(L.punch=M)}else if(v.k==="hit"){let L=b.get(v.b);L&&(L.hit=M);let C=S(v.b,x);C&&w(C.x,.8,C.z,v.c?10:4,["#fff","#ffe066"]),(v.c||v.m)&&(d=Math.min(1,d+.15))}else if(v.k==="ko"){let L=S(v.b,x);L&&(w(L.x,.8,L.z,18,["#fff","#ffe066","#ff6ad5","#5ef0ff"],6),u.push({x:L.x,z:L.z,t0:M,dur:.4,r0:.3,r1:3,col:"#ffd6ff"})),d=Math.min(1,d+.2),b.delete(v.b)}else if(v.k==="meteor")p.push({x:v.x,z:v.z,t0:M,d:Math.max(.3,v.d)}),u.push({x:v.x,z:v.z,t0:M,dur:v.d,r1:2.4,warn:1,col:"#ff3b2f"});else if(v.k==="boom")w(v.x,.5,v.z,30,["#fff","#ffd36a","#ff8a3d"],9),u.push({x:v.x,z:v.z,t0:M,dur:.5,r0:.5,r1:v.r*1.6,col:"#ffb060"}),d=Math.min(1,d+.5);else if(v.k==="win")for(let L=0;L<6;L++)w((Math.random()-.5)*6,6,(Math.random()-.5)*3,12,["#ff4d5e","#ffd23f","#3ec7ff","#9be564","#ff6fb5"],3);else v.k==="nuke"&&(d=1)}return{kind:"2d",resize(v,x,M){i=v,r=x,a=M,s.width=Math.round(v*M),s.height=Math.round(x*M),o=Math.min(v/(n*2.3),13),c=v/2,l=x*.47},setQuality(v){g={...g,...v}},frame:_,fx:T,project(v,x,M){let L=m(v,x,M);return{x:L.x,y:L.y-o*.7,ok:!0}},drawn(){return null},headY(v){return(v.flags&Ca.giant?2:1)*2.2},stats(){return{calls:0,tris:0,chars:0,parts:f.length}},dispose(){}}}function sp({silenceUrl:s="/assets/silence.mp3",record:e=!1}={}){let t={ctx:null,master:null,sfxGain:null,voiceGain:null,unlocked:!1,played:0,fails:0,cues:[],record:e,last:{},speakingUntil:0,muted:!1};try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}let n=new Audio;n.setAttribute("playsinline",""),n.preload="auto";function i(){if(t.ctx||e)return t.ctx;let u=window.AudioContext||window.webkitAudioContext;if(!u)return null;try{t.ctx=new u}catch{return null}return r(t.ctx,t.ctx.destination,t),t.ctx}function r(u,p,b){let g=u.createDynamicsCompressor();g.threshold.value=-14,g.ratio.value=6,g.attack.value=.003,g.release.value=.2,b.master=u.createGain(),b.master.gain.value=.9,b.sfxGain=u.createGain(),b.sfxGain.gain.value=.55,b.voiceGain=u.createGain(),b.voiceGain.gain.value=1,b.sfxGain.connect(b.master),b.voiceGain.connect(b.master),b.master.connect(g),g.connect(p)}t.unlock=()=>{let u=i();if(u){try{u.resume();let p=u.createBuffer(1,1,22050),b=u.createBufferSource();b.buffer=p,b.connect(u.destination),b.start(0)}catch{}t.elUnlocked||(n.src=s,n.play().then(()=>{n.pause(),t.elUnlocked=!0}).catch(()=>{})),t.unlocked=u.state==="running",setTimeout(()=>{t.unlocked=u.state==="running",t.onstate&&t.onstate(t.unlocked)},120)}},t.resume=()=>{t.ctx&&t.ctx.state!=="running"&&t.ctx.resume().catch(()=>{})},t.state=()=>e?"record":t.ctx?t.ctx.state:"none";let a=u=>{if(u.__noise)return u.__noise;let p=u.sampleRate,b=u.createBuffer(1,p,p),g=b.getChannelData(0),m=1;for(let _=0;_<p;_++)m=m*16807%2147483647,g[_]=m/10737418235e-1-1;return u.__noise=b,b};function o(u,p,b,g,m,_){p.gain.setValueAtTime(1e-4,b),p.gain.exponentialRampToValueAtTime(m,b+g),p.gain.exponentialRampToValueAtTime(1e-4,b+g+_)}function c(u,p,b,{type:g="sine",f0:m=440,f1:_=m,a:w=.005,d:S=.2,peak:T=.3,det:v=0}){let x=u.createOscillator(),M=u.createGain();x.type=g,x.frequency.setValueAtTime(m,b),_!==m&&x.frequency.exponentialRampToValueAtTime(Math.max(20,_),b+w+S),x.detune.value=v,o(u,M,b,w,T,S),x.connect(M).connect(p),x.start(b),x.stop(b+w+S+.05)}function l(u,p,b,{type:g="lowpass",f0:m=1e3,f1:_=m,q:w=.7,a:S=.003,d:T=.15,peak:v=.4}){let x=u.createBufferSource(),M=u.createBiquadFilter(),L=u.createGain();x.buffer=a(u),M.type=g,M.Q.value=w,M.frequency.setValueAtTime(m,b),_!==m&&M.frequency.exponentialRampToValueAtTime(Math.max(30,_),b+S+T),o(u,L,b,S,v,T),x.connect(M).connect(L).connect(p),x.start(b,Math.random()*.5),x.stop(b+S+T+.05)}let h={punch:(u,p,b,g=1)=>{l(u,p,b,{f0:1400,f1:300,d:.08,peak:.5*g}),c(u,p,b,{f0:150,f1:55,d:.1,peak:.55*g})},crit:(u,p,b)=>{h.punch(u,p,b,1.2),c(u,p,b,{type:"square",f0:1800,f1:900,d:.06,peak:.12}),l(u,p,b+.01,{type:"highpass",f0:3e3,d:.12,peak:.25})},block:(u,p,b)=>{c(u,p,b,{type:"triangle",f0:1200,f1:1100,d:.18,peak:.18}),c(u,p,b,{type:"triangle",f0:1810,d:.14,peak:.1})},ko:(u,p,b)=>{c(u,p,b,{type:"sine",f0:260,f1:980,a:.005,d:.16,peak:.35}),l(u,p,b,{type:"bandpass",f0:2500,f1:600,q:1.2,d:.25,peak:.35}),c(u,p,b+.09,{type:"triangle",f0:1320,d:.2,peak:.12})},dash:(u,p,b)=>{l(u,p,b,{type:"bandpass",f0:500,f1:3500,q:2,a:.04,d:.22,peak:.45})},shield:(u,p,b)=>{[880,1320,1760].forEach((g,m)=>c(u,p,b+m*.03,{type:"sine",f0:g,d:.45,peak:.09}))},boom:(u,p,b,g=1)=>{l(u,p,b,{f0:900,f1:80,a:.004,d:.9,peak:.8*g}),c(u,p,b,{f0:90,f1:28,d:.8,peak:.8*g})},whistle:(u,p,b)=>{c(u,p,b,{type:"sine",f0:1900,f1:500,a:.05,d:.95,peak:.07})},coin:(u,p,b)=>{c(u,p,b,{type:"square",f0:988,d:.07,peak:.1}),c(u,p,b+.07,{type:"square",f0:1319,d:.28,peak:.1})},power:(u,p,b)=>{[523,659,784,1047].forEach((g,m)=>c(u,p,b+m*.05,{type:"triangle",f0:g,d:.3,peak:.14})),l(u,p,b,{type:"highpass",f0:2e3,f1:6e3,a:.1,d:.4,peak:.12})},heal:(u,p,b)=>{[660,880,1100].forEach((g,m)=>c(u,p,b+m*.06,{f0:g,d:.25,peak:.08}))},beep:(u,p,b)=>{c(u,p,b,{f0:880,d:.12,peak:.22})},go:(u,p,b)=>{c(u,p,b,{type:"sawtooth",f0:660,d:.5,peak:.12}),c(u,p,b,{type:"square",f0:1320,d:.5,peak:.08}),l(u,p,b,{f0:4e3,f1:500,d:.4,peak:.25})},land:(u,p,b)=>{c(u,p,b,{f0:120,f1:50,d:.12,peak:.3}),l(u,p,b,{f0:600,d:.1,peak:.15})},spin:(u,p,b)=>{l(u,p,b,{type:"bandpass",f0:300,f1:2400,q:3,a:.08,d:.35,peak:.5}),h.punch(u,p,b+.25,1.1)},cheer:(u,p,b)=>{l(u,p,b,{type:"bandpass",f0:1200,f1:1500,q:.6,a:.25,d:2.2,peak:.35}),l(u,p,b+.1,{type:"bandpass",f0:2600,f1:2200,q:.8,a:.3,d:2,peak:.18})},fanfare:(u,p,b)=>{[[523,0],[659,.12],[784,.24],[1047,.38],[784,.6],[1047,.72]].forEach(([g,m],_)=>{c(u,p,b+m,{type:"sawtooth",f0:g,d:_===5?.9:.16,peak:.07}),c(u,p,b+m,{type:"triangle",f0:g*2,d:_===5?.9:.16,peak:.05})}),h.cheer(u,p,b+.2)},nuke:(u,p,b)=>{h.boom(u,p,b,1.3),h.boom(u,p,b+.25,1),c(u,p,b,{type:"sawtooth",f0:220,f1:40,d:1.6,peak:.25})},pop:(u,p,b)=>{c(u,p,b,{f0:500,f1:1400,d:.07,peak:.15})},creak:(u,p,b)=>{c(u,p,b,{type:"sawtooth",f0:95,f1:140,a:.08,d:.7,peak:.07,det:8}),c(u,p,b+.05,{type:"square",f0:190,f1:120,a:.1,d:.6,peak:.03}),l(u,p,b,{type:"bandpass",f0:900,f1:500,q:6,a:.1,d:.6,peak:.12})},ghost:(u,p,b)=>{c(u,p,b,{type:"sine",f0:520,f1:760,a:.25,d:.9,peak:.08,det:15}),c(u,p,b+.1,{type:"sine",f0:780,f1:500,a:.3,d:.9,peak:.05})},thunder:(u,p,b)=>{l(u,p,b,{f0:500,f1:60,a:.02,d:1.8,peak:.6}),l(u,p,b+.15,{f0:250,f1:50,a:.1,d:1.6,peak:.45})},bell:(u,p,b)=>{[[110,.25],[220,.12],[277,.07],[330,.06],[440,.04]].forEach(([g,m])=>c(u,p,b,{type:"sine",f0:g,a:.004,d:2.6,peak:m}))},organ:(u,p,b)=>{[[147,0],[175,0],[220,0],[294,.02],[131,.6],[165,.6],[196,.6],[262,.62]].forEach(([g,m])=>{c(u,p,b+m,{type:"sawtooth",f0:g,a:.04,d:m?.9:.55,peak:.035}),c(u,p,b+m,{type:"triangle",f0:g*2,a:.04,d:m?.9:.55,peak:.03})})},heart:(u,p,b)=>{c(u,p,b,{f0:70,f1:45,d:.12,peak:.45}),c(u,p,b+.17,{f0:62,f1:40,d:.14,peak:.35})},chime:(u,p,b)=>{[1319,1568,1976,2637].forEach((g,m)=>c(u,p,b+m*.07,{type:"sine",f0:g,d:.6,peak:.07}))},trap:(u,p,b)=>{l(u,p,b,{type:"bandpass",f0:3e3,f1:300,q:1.5,a:.01,d:.35,peak:.4}),h.boom(u,p,b+.22,.7)},shatter:(u,p,b)=>{for(let g=0;g<6;g++)c(u,p,b+g*.035,{type:"triangle",f0:2200+g*430,f1:1800,d:.12,peak:.06});l(u,p,b,{type:"highpass",f0:4e3,d:.4,peak:.3})},wind:(u,p,b)=>{l(u,p,b,{type:"bandpass",f0:380,f1:700,q:4,a:.9,d:2.2,peak:.12})},squeak:(u,p,b)=>{c(u,p,b,{type:"triangle",f0:900,f1:1300,d:.08,peak:.07})},roar:(u,p,b)=>{c(u,p,b,{type:"sawtooth",f0:120,f1:60,a:.05,d:.9,peak:.16,det:20}),l(u,p,b,{type:"lowpass",f0:1200,f1:300,a:.05,d:.9,peak:.35})}},d={squeak:.06,ghost:.25,heart:.3,punch:.045,crit:.06,block:.08,ko:.08,heal:.15,land:.06,pop:.05,coin:.05,boom:.06};t.sfx=(u,p=t.now(),b=1)=>{if(t.muted||!h[u])return;let g=d[u]||.03;if(t.last[u]&&p-t.last[u]<g)return;if(t.last[u]=p,e){t.cues.push({k:"sfx",kind:u,t:p,v:b});return}let m=t.ctx;if(!(!m||m.state!=="running"))try{h[u](m,t.sfxGain,m.currentTime+.01,b)}catch{}},t.now=()=>e?t.clock():t.ctx?t.ctx.currentTime:0,t.clock=()=>0;let f=null;return t.voice=async(u,p)=>{if(t.muted||!u)return!1;if(t.speakingUntil=t.now()+(p||2),e)return t.cues.push({k:"voice",url:u,t:t.now(),dur:p}),!0;let b=t.ctx;if(b&&b.state!=="running"&&t.resume(),b&&b.state==="running")try{let g=await fetch(u).then(S=>{if(!S.ok)throw new Error("HTTP "+S.status);return S.arrayBuffer()}),m=await new Promise((S,T)=>{let v=b.decodeAudioData(g,S,T);v&&v.catch&&v.catch(T)});if(f)try{f.stop()}catch{}let _=b.createBufferSource();_.buffer=m,_.connect(t.voiceGain);let w=b.currentTime+.02;return t.sfxGain.gain.setTargetAtTime(.28,w,.05),t.sfxGain.gain.setTargetAtTime(.55,w+m.duration,.2),_.start(w),f=_,t.played++,_.onended=()=>{f===_&&(f=null)},!0}catch{t.fails++}try{return n.src=u,await n.play(),t.played++,!0}catch{return t.fails++,!1}},t.mix=async(u,p=44100)=>{let b=window.OfflineAudioContext||window.webkitOfflineAudioContext,g=new b(2,Math.ceil(u*p),p),m={};r(g,g.destination,m);let _=t.cues.filter(U=>U.k==="voice"),w=await Promise.all(_.map(U=>fetch(U.url).then(X=>X.arrayBuffer()).then(X=>g.decodeAudioData(X)).catch(()=>null)));for(let U of t.cues)if(U.k==="sfx"&&U.t<u)try{h[U.kind](g,m.sfxGain,U.t+.01,U.v)}catch{}_.forEach((U,X)=>{let I=w[X];if(!I||U.t>=u)return;let z=g.createBufferSource();z.buffer=I,z.connect(m.voiceGain),z.start(U.t+.02),m.sfxGain.gain.setTargetAtTime(.28,U.t,.05),m.sfxGain.gain.setTargetAtTime(.55,U.t+I.duration,.2)});let S=await g.startRendering(),T=S.length,v=[S.getChannelData(0),S.getChannelData(1)],x=new DataView(new ArrayBuffer(44+T*4)),M=(U,X)=>{for(let I=0;I<X.length;I++)x.setUint8(U+I,X.charCodeAt(I))};M(0,"RIFF"),x.setUint32(4,36+T*4,!0),M(8,"WAVEfmt "),x.setUint32(16,16,!0),x.setUint16(20,1,!0),x.setUint16(22,2,!0),x.setUint32(24,p,!0),x.setUint32(28,p*4,!0),x.setUint16(32,4,!0),x.setUint16(34,16,!0),M(36,"data"),x.setUint32(40,T*4,!0);let L=44;for(let U=0;U<T;U++)for(let X=0;X<2;X++){let I=Math.max(-1,Math.min(1,v[X][U]));x.setInt16(L,I*32767,!0),L+=2}let C=new Uint8Array(x.buffer),D="";for(let U=0;U<C.length;U+=32768)D+=String.fromCharCode.apply(null,C.subarray(U,U+32768));return btoa(D)},t}function rp(s,{off:e=!1}={}){let t=Math.random().toString(36).slice(2,8),n=performance.now(),i=[];addEventListener("error",o=>{i.push(String(o.message||"error").slice(0,110)),i.length>3&&i.shift()}),addEventListener("unhandledrejection",o=>{i.push(("rej "+(o.reason&&o.reason.message||o.reason)).slice(0,110)),i.length>3&&i.shift()});let r=o=>{let c=s();return{id:t,reason:o,up:(performance.now()-n)/1e3,ua:navigator.userAgent.slice(0,160),scr:{w:screen.width,h:screen.height,dpr:devicePixelRatio},vis:document.visibilityState,errs:i.slice(),...c,mem:{...c.mem||{},heap:performance.memory?performance.memory.usedJSHeapSize/1048576:void 0}}},a=o=>{if(e)return;let c=r(o),l=JSON.stringify(c);if(o==="start")try{let h=JSON.parse(localStorage.getItem("lg_diagLast")||"null");h&&h.reason!=="pagehide"&&(l=JSON.stringify({...c,prev:h}))}catch{}try{localStorage.setItem("lg_diagLast",JSON.stringify(c))}catch{}try{navigator.sendBeacon&&navigator.sendBeacon("/diag",new Blob([l],{type:"text/plain"}))||fetch("/diag",{method:"POST",body:l,keepalive:!0}).catch(()=>{})}catch{}};return setTimeout(()=>a("start"),4e3),setInterval(()=>a("tick"),3e4),document.addEventListener("visibilitychange",()=>{document.hidden&&a("hidden")}),addEventListener("pagehide",()=>a("pagehide")),{send:a,errs:i}}var ap=[["red",16731486],["orange",16752412],["gold",16765503],["lime",10216804],["green",3064446],["teal",2085313],["cyan",4114431],["blue",5078271],["purple",10182117],["pink",16740277],["white",15921906],["black",3816008],["brown",11037500],["silver",12109014],["rose",16748451]],yr=new Map(ap.map(([s,e])=>[s,e]));yr.set("yellow",16765503);yr.set("violet",10182117);yr.set("grey",12109014);yr.set("gray",12109014);function iv(s){let e=2166136261;for(let t of String(s))e^=t.codePointAt(0),e=Math.imul(e,16777619);return e>>>0}var op=s=>ap[iv(s)%10][1];function gu(s){let e=String(s||"").replace(/[\u0000-\u001f\u200b-\u200f\u202a-\u202e]/g,"").replace(/\s+/g," ").trim(),t=[...e];return(t.length>16?t.slice(0,15).join("")+"\u2026":e)||"Viewer"}var vr=s=>String(s||"").toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}]/gu,""),Pa=[{id:"nuke",min:500,label:"STORM NUKE",icon:"\u2622\uFE0F",desc:"blows the storm back + meteor rain"},{id:"revive",min:100,label:"REVIVE",icon:"\u{1F496}",desc:"back from the dead / full heal + shield"},{id:"giant",min:30,label:"GIANT MODE",icon:"\u{1F996}",desc:"2x size, +HP, huge hits"},{id:"meteor",min:5,label:"METEOR STRIKE",icon:"\u2604\uFE0F",desc:"meteors smash your enemies"},{id:"speed",min:1,label:"SPEED BOOST",icon:"\u{1F339}",desc:"fast feet + small heal"}];function cp(s){let e=Number(s)||0;return Pa.find(t=>e>=t.min)||Pa[Pa.length-1]}var Rs={attack:/^(?:[⚔🗡🔪👊🥊]\uFE0F?\s*|(?:attack|atk|hit|kill|fight|punch|target|beat|smash)\s+)@?(.{1,40})$/iu,shield:/^(?:shield|block|defend|protect|🛡\uFE0F?)$/iu,dash:/^(?:dash|charge|rush|zoom|💨|⚡\uFE0F?)$/iu,dance:/^(?:dance|taunt|emote|gg|lol|💃|🕺|😂|🤣)$/iu,revenge:/^(?:revenge|payback|😡|🤬)$/iu,color:/^(?:colou?r|skin|paint)\s+([a-z]+)$/i,join:/^(?:join|play|me|in|i'?m in|let me in|go|🙋\u200d?[♀♂]?\uFE0F?|✋|🙋)$/iu};function lp(s){let e=String(s||"").trim().replace(/\s+/g," ");if(!e)return{cmd:"none"};let t=e.toLowerCase().replace(/[!.?]+$/,"");if(Rs.shield.test(t))return{cmd:"shield"};if(Rs.dash.test(t))return{cmd:"dash"};if(Rs.dance.test(t))return{cmd:"dance"};if(Rs.revenge.test(t))return{cmd:"revenge"};if(Rs.join.test(t))return{cmd:"join"};let n=t.match(Rs.color);if(n&&yr.has(n[1]))return{cmd:"color",color:yr.get(n[1]),colorName:n[1]};if(n=e.match(Rs.attack),n){let i=n[1].replace(/^@/,"").trim();if(vr(i))return{cmd:"attack",name:i}}return/^@[\w.]{2,}/.test(e)?{cmd:"attack",name:e.slice(1).split(" ")[0]}:{cmd:"chat"}}function hp(s,e){let t=vr(s);if(!t)return null;let n=null,i=0;for(let r of e){let a=vr(r.name),o=vr(r.uid||""),c=0;a===t||o===t?c=3:a.startsWith(t)||o.startsWith(t)?c=2:t.length>=3&&(a.includes(t)||o.includes(t))&&(c=1),c>i&&(i=c,n=r)}return n}var jc=["Pixel","Mochi","Bolt","Nugget","Waffles","Ziggy","Pebble","Turbo","Biscuit","Gizmo","Noodle","Sprocket","Muffin","Rocket","Tofu","Dumpling","Jelly","Comet","Pickle","Bean","Sushi","Taco","Nacho","Boba"];var sv={lobbySeconds:20,ceremonySeconds:12,arenaCap:50,vipOverflow:10,minFighters:8,bots:!0,baseHp:150,platform:20,maxBattleSeconds:150,reinforceWindow:.4,botDamage:.85,damageMul:1,shrinkSeconds:0},Ia=(s,e,t)=>s<e?e:s>t?t:s,rv=(s,e,t)=>s+(e-s)*t,av=s=>s*s*(3-2*s),up={2:"DOUBLE KILL",3:"TRIPLE KILL",4:"QUADRA KILL",5:"RAMPAGE"},fp={3:"ON FIRE",5:"UNSTOPPABLE",8:"GODLIKE",12:"LEGENDARY"},Ot={alive:1,shield:2,speed:4,giant:8,rage:16,dash:32,dance:64,air:128,crown:256,cmd:512,low:1024,bot:2048},Kc=class{constructor(e={},t=Math.random){this.o={...sv,...e},this.rng=t,this.t=0,this.people=new Map,this.fighters=new Map,this.byUid=new Map,this.queue=[],this.nextId=1,this.events=[],this.rosterAdd=[],this.rosterDel=[],this.meteors=[],this.likes=0,this.hype=0,this.round=0,this.results=[],this.botIdx=Math.floor(t()*jc.length),this.enterLobby()}r(e=0,t=1){return e+(t-e)*this.rng()}emit(e){this.events.push(e),this.events.length>400&&this.events.splice(0,this.events.length-400)}drain(){let e=this.events;return this.events=[],e}drainRoster(){let e={add:this.rosterAdd,del:this.rosterDel};return this.rosterAdd=[],this.rosterDel=[],e}get alive(){let e=0;for(let t of this.fighters.values())t.alive&&e++;return e}get humans(){let e=0;for(let t of this.fighters.values())t.bot||e++;return e}aliveList(){return[...this.fighters.values()].filter(e=>e.alive)}person(e,t){let n=this.people.get(e);return n||(n={uid:e,name:gu(t||e),color:op(e),bot:e.startsWith("bot:"),wins:0,kills:0,games:0,best:0,bank:[],lastSeen:this.t,joinedAt:this.t},this.people.set(e,n)),t&&!n.bot&&(n.name=gu(t)),n.lastSeen=this.t,n}rosterEntry(e){return{id:e.id,name:e.name,color:e.color,bot:e.bot}}enterLobby(){for(let t of this.fighters.values())this.rosterDel.push(t.id);this.fighters.clear(),this.byUid.clear(),this.meteors=[],this.phase="lobby",this.phaseT=this.t,this.phaseEnd=this.t+this.o.lobbySeconds,this.round++,this.storm={r:this.o.platform*.9,target:this.o.platform*.9,R0:this.o.platform*.9,rf:3,push:0},this.firstBlood=!1,this.podium=null,this.winner=null,this.emit({k:"phase",ph:"lobby",round:this.round});let e=this.queue.filter(t=>{let n=this.people.get(t);return n&&this.t-n.lastSeen<600});this.queue=[];for(let t of e)this.seat(t,{quiet:!0})}startBattle(){if(this.fillBots(!0),this.alive<2){this.phaseEnd=this.t+5;return}let e=this.alive;this.phase="battle",this.phaseT=this.t;let t=Ia(8+Math.sqrt(e)*1.7,10,this.o.platform-1),n=this.o.shrinkSeconds||Ia(30+e*.9,38,95);this.storm={R0:t,r:t,target:t,rf:Ia(2.5+Math.sqrt(e)*.25,2.5,5),hold:6,shrink:n,push:0},this.phaseEnd=this.t+this.o.maxBattleSeconds,this.startN=e;let i=0;for(let r of this.fighters.values()){let a=i++/e*Math.PI*2+this.r(-.2,.2),o=t*this.r(.35,.85);r.x=Math.cos(a)*o,r.z=Math.sin(a)*o,r.vx=r.vz=0,r.hp=r.maxHp,r.danceUntil=0;let c=this.people.get(r.uid);c&&(c.games++,this.applyBank(r,c))}this.emit({k:"phase",ph:"battle",n:e})}endBattle(e){this.phase="ceremony",this.phaseT=this.t,this.phaseEnd=this.t+this.o.ceremonySeconds;let t=[...this.fighters.values()].sort((a,o)=>(a.place||999)-(o.place||999));e&&(e.place=1);let n=t.filter(a=>a.place).slice(0,3),i=[[0,1.5,0],[-2.1,1,.5],[2.1,.6,.5]];this.podium=n.map(a=>a.id);for(let a of this.fighters.values()){let o=this.podium.indexOf(a.id);o>=0?(a.alive=!0,a.x=i[o][0],a.y=i[o][1],a.z=i[o][2],a.face=Math.PI/2,a.vx=a.vz=0,a.hp=a.maxHp,a.danceUntil=this.t+99,a.shieldUntil=0,a.giantUntil=0,a.state="podium"):a.alive=!1}let r={round:this.round,at:this.t,players:[],winner:e?{uid:e.uid,name:e.name,bot:e.bot,kills:e.kills}:null};for(let a of this.fighters.values()){let o=this.people.get(a.uid);o&&(o.kills+=a.kills,o.best=Math.max(o.best,a.kills),a.place===1&&o.wins++,r.players.push({uid:a.uid,name:a.name,bot:a.bot,kills:a.kills,place:a.place||0}))}this.results.push(r),this.results.length>20&&this.results.shift(),this.lastResult=r,this.emit({k:"win",a:e?e.id:-1,top:this.podium,kills:e?e.kills:0,bot:e&&e.bot?1:0});for(let a of this.fighters.values())!a.bot&&!this.queue.includes(a.uid)&&this.queue.push(a.uid)}cap(){return this.o.arenaCap}seat(e,{vip:t=!1,quiet:n=!1,force:i=!1}={}){let r=this.people.get(e);if(!r)return"none";if(this.byUid.has(e)){let l=this.fighters.get(this.byUid.get(e));return l&&l.alive?"in":"dead"}let a=this.humans,o=a<this.cap()||t&&a<this.cap()+this.o.vipOverflow,c=this.phase==="lobby"||this.phase==="battle"&&(i||t||this.stormProgress()<this.o.reinforceWindow);return!o||!c?(this.queue.includes(e)||(t||r.follower||r.gifter?this.queue.unshift(e):this.queue.push(e)),n||this.emit({k:"queued",n:r.name,q:this.queue.length}),"queued"):(this.queue=this.queue.filter(l=>l!==e),r.bot||this.dropBot(),this.spawn(r,{drop:!0}),"in")}spawn(e,{drop:t=!1}={}){let n=this.nextId++,i=this.phase==="lobby"?this.lobbyRadius():this.storm.r*.8,r=this.r(0,Math.PI*2),a=Math.sqrt(this.rng())*i,o=this.o.baseHp+(e.follower?30:0),c={id:n,uid:e.uid,name:e.name,color:e.color,bot:e.bot,x:Math.cos(r)*a,y:t?14:0,z:Math.sin(r)*a,vx:0,vz:0,kx:0,kz:0,face:this.r(0,6.28),hp:o,maxHp:o,alive:!0,kills:0,streak:0,multi:0,lastKillT:-99,place:0,tgt:0,cmdTgt:0,cmdUntil:0,retargetAt:0,atkCd:this.r(.3,1),dashCd:0,dashUntil:0,shieldUntil:t?this.t+2:0,shieldCd:0,speedUntil:0,giantUntil:0,rageUntil:0,danceUntil:0,charge:0,lastHitBy:0,lastHitT:-99,dropUntil:t?this.t+1.1:0,cmdT:-99,botActT:this.t+this.r(4,10),wander:this.r(0,6.28)};return this.fighters.set(n,c),this.byUid.set(e.uid,n),this.rosterAdd.push(this.rosterEntry(c)),this.emit({k:"drop",a:n,bot:e.bot?1:0}),c}fillBots(e=!1){if(!this.o.bots||this.o.minFighters<=0)return;let t=this.o.minFighters,n=this.fighters.size;for(;n<t&&(e||this.phase==="lobby");){let i="Bot "+jc[this.botIdx++%jc.length],r="bot:"+vr(i)+":"+this.round+":"+n,a=this.person(r,i);a.bot=!0,this.spawn(a,{drop:!0}),n++}}dropBot(){if(!(this.phase!=="lobby"||this.fighters.size<this.o.minFighters)){for(let e of this.fighters.values())if(e.bot){this.fighters.delete(e.id),this.byUid.delete(e.uid),this.people.delete(e.uid),this.rosterDel.push(e.id),this.emit({k:"poof",a:e.id});return}}}applyBank(e,t){for(let n of t.bank.splice(0))this.applyGift(e,t,n,!0)}lobbyRadius(){return Math.min(this.o.platform*.7,4+Math.sqrt(this.fighters.size+1)*.9)}input(e){if(!e||!e.uid)return{ok:!1,reason:"no-user"};let t=String(e.uid).slice(0,64);if(t.startsWith("bot:"))return{ok:!1,reason:"reserved"};let n=this.person(t,e.name);switch(e.type){case"chat":return this.onChat(n,String(e.text||""));case"gift":return this.onGift(n,e);case"like":return this.onLike(n,Number(e.count)||1);case"follow":return n.follower=!0,this.boostMaxHp(n,30),this.emit({k:"perk",n:n.name,perk:"follow"}),this.seat(t),{ok:!0};case"share":{n.sharer=!0;let i=this.fighterOf(n);return i&&i.alive?i.rageUntil=this.t+12:n.bank.push("rage"),this.emit({k:"perk",n:n.name,perk:"share",a:i?i.id:0}),this.seat(t),{ok:!0}}case"join":return{ok:!0,ignored:"join"};default:return{ok:!1,reason:"unknown-type"}}}fighterOf(e){let t=this.byUid.get(e.uid);return t?this.fighters.get(t):null}boostMaxHp(e,t){let n=this.fighterOf(e);n&&n.alive&&!n.followBoost&&(n.followBoost=!0,n.maxHp+=t,n.hp+=t)}onChat(e,t){let n=lp(t),i=this.seat(e.uid);i==="in"&&this.fighterOf(e)?.y>1&&this.emit({k:"join",n:e.name,a:this.fighterOf(e).id});let a=this.fighterOf(e);if(!a||!a.alive)return{ok:!0,status:i,cmd:n.cmd};switch(a.cmdT=this.t,n.cmd){case"attack":{let o=this.aliveList().filter(l=>l.id!==a.id).map(l=>({name:l.name,uid:l.uid,o:l})),c=hp(n.name,o);c?(a.cmdTgt=c.o.id,a.cmdUntil=this.t+12,a.tgt=c.o.id,this.emit({k:"cmd",c:"attack",a:a.id,b:c.o.id})):this.emit({k:"cmd",c:"miss",a:a.id});break}case"revenge":{let o=e.lastKiller?this.byUid.get(e.lastKiller):a.lastHitBy,c=o&&this.fighters.get(o);c&&c.alive&&c.id!==a.id&&(a.cmdTgt=c.id,a.cmdUntil=this.t+15,a.rageUntil=Math.max(a.rageUntil,this.t+4),this.emit({k:"cmd",c:"revenge",a:a.id,b:c.id}));break}case"shield":this.t>=a.shieldCd&&(a.shieldUntil=this.t+3.5,a.shieldCd=this.t+12,this.emit({k:"shield",a:a.id}));break;case"dash":this.dash(a);break;case"dance":a.danceUntil=this.t+2.2,this.emit({k:"dance",a:a.id});break;case"color":{e.color=n.color,a.color=n.color,this.rosterAdd.push(this.rosterEntry(a)),this.emit({k:"cmd",c:"color",a:a.id});break}}return{ok:!0,status:i,cmd:n.cmd}}dash(e){if(this.t<e.dashCd||e.dropUntil>this.t)return!1;let t=this.fighters.get(e.cmdTgt||e.tgt),n=t&&t.alive?Math.atan2(t.z-e.z,t.x-e.x):e.face;return e.face=n,e.dashUntil=this.t+.32,e.dashCd=this.t+6,e.dashHit=!1,e.kx=Math.cos(n)*17,e.kz=Math.sin(n)*17,this.emit({k:"dash",a:e.id}),!0}onLike(e,t){t=Ia(t,1,50),this.likes+=t,this.hype+=t;let n=this.fighterOf(e);if(n&&n.alive&&this.phase==="battle"){let i=Math.min(t,10);n.hp<n.maxHp&&(n.hp=Math.min(n.maxHp,n.hp+i),this.emit({k:"heal",a:n.id,v:i})),n.charge=Math.min(100,n.charge+t*4)}else n||this.seat(e.uid,{quiet:!0});if(this.hype>=300){this.hype-=300;let i=0;for(let r of this.fighters.values())r.alive&&!r.bot&&(r.hp=Math.min(r.maxHp,r.hp+20),i++);this.emit({k:"hype",likes:this.likes,healed:i})}return{ok:!0}}onGift(e,t){let n=(Number(t.coins)||1)*(Number(t.count)||1),i=cp(n);e.gifter=!0,e.coins=(e.coins||0)+n;let r=this.fighterOf(e);return r||(this.seat(e.uid,{vip:!0}),r=this.fighterOf(e),r&&this.emit({k:"join",n:e.name,a:r.id,vip:1})),this.emit({k:"gift",n:e.name,g:String(t.giftName||"Gift").slice(0,24),tier:i.id,coins:n,a:r?r.id:0}),this.phase!=="battle"?(r&&i.id==="speed"&&(r.speedUntil=this.t+8),r&&i.id==="giant"&&(r.giantUntil=this.t+6),e.bank.push(i.id),this.emit({k:"bank",n:e.name,tier:i.id}),{ok:!0,tier:i.id,banked:!0}):(this.applyGift(r,e,i.id,!1),{ok:!0,tier:i.id})}applyGift(e,t,n,i){let r=this.t;if(n==="rage"){e&&e.alive&&(e.rageUntil=r+12);return}if(n==="revive"&&e&&!e.alive&&this.phase==="battle"){e.alive=!0,e.hp=e.maxHp,e.place=0,e.y=14,e.dropUntil=r+1.1,e.shieldUntil=r+4;let a=this.r(0,6.28),o=this.storm.r*.5*Math.sqrt(this.rng());e.x=Math.cos(a)*o,e.z=Math.sin(a)*o,this.emit({k:"revive",a:e.id});return}if(!e||!e.alive){n==="meteor"||n==="nuke"?this.meteorShower(null,n==="nuke"?8:3,t.uid):t.bank.push(n);return}switch(n){case"speed":e.speedUntil=r+8,e.hp=Math.min(e.maxHp,e.hp+10);break;case"meteor":this.meteorShower(e,3);break;case"giant":e.giantUntil=r+15,e.maxHp+=50,e.hp=e.maxHp;break;case"revive":e.hp=e.maxHp,e.shieldUntil=r+6,e.giantUntil=Math.max(e.giantUntil,r+10);break;case"nuke":{let a=this.storm;a.push=Math.min(a.push+(a.R0-a.r)*.6+2,a.R0),e.giantUntil=r+15,e.shieldUntil=r+5,e.hp=e.maxHp,this.emit({k:"nuke",a:e.id}),this.meteorShower(e,8);break}}(!i||n!=="meteor")&&this.emit({k:"power",a:e.id,tier:n})}meteorShower(e,t,n){let i=this.aliveList().filter(r=>!e||r.id!==e.id);if(i.length){i.sort((r,a)=>e?Math.hypot(r.x-e.x,r.z-e.z)-Math.hypot(a.x-e.x,a.z-e.z):this.rng()-.5);for(let r=0;r<t;r++){let a=i[r%Math.min(i.length,Math.max(3,t))],o=a.x+this.r(-.8,.8),c=a.z+this.r(-.8,.8),l={x:o,z:c,at:this.t+1.1+r*.22,by:e?e.id:0,byUid:e?e.uid:n,dmg:34,r:2.4};this.meteors.push(l),this.emit({k:"meteor",x:+o.toFixed(2),z:+c.toFixed(2),d:+(l.at-this.t).toFixed(2),a:l.by})}}}stormProgress(){if(this.phase!=="battle")return 0;let e=this.storm,t=this.t-this.phaseT-e.hold;return Ia(t/e.shrink,0,1)}step(e){e=Math.min(e,.1),this.t+=e;let t=this.t;if(this.phase==="lobby"?(this.fillBots(),t>=this.phaseEnd&&this.startBattle()):this.phase==="ceremony"&&t>=this.phaseEnd&&this.enterLobby(),this.phase==="battle"&&this.updateStorm(e),this.updateFighters(e),this.phase==="battle"){this.updateMeteors(),this.reinforce();let n=this.aliveList();n.length<=1?this.endBattle(n[0]||null):t>=this.phaseEnd&&!this.suddenDeath&&(this.suddenDeath=!0,this.emit({k:"storm",msg:"sudden"}))}}updateStorm(e){let t=this.storm,n=this.t-this.phaseT,i=this.stormProgress();t.push=Math.max(0,t.push-e*.35);let r=rv(t.R0,t.rf,av(i));n>t.hold+t.shrink&&(r=Math.max(.6,t.rf-(n-t.hold-t.shrink)*.12)),this.suddenDeath&&(r=Math.max(0,r-(this.t-this.phaseEnd)*.4)),t.target=r,t.r=Math.min(t.R0+.01,r+t.push),!t.warned&&n>t.hold-.1&&(t.warned=!0,this.emit({k:"storm",msg:"closing"})),!t.half&&i>.5&&(t.half=!0,this.emit({k:"storm",msg:"half"})),t.dps=5+11*i+(this.suddenDeath?15:0)}reinforce(){if(!this.queue.length||this.stormProgress()>=this.o.reinforceWindow||this.humans>=this.cap())return;let e=this.queue.shift();if(this.people.has(e)){this.seat(e,{quiet:!0,force:!0});let t=this.fighterOf(this.people.get(e));t&&this.emit({k:"join",n:t.name,a:t.id,late:1})}}pickTarget(e,t){if(e.cmdTgt&&this.t<e.cmdUntil){let a=this.fighters.get(e.cmdTgt);if(a&&a.alive)return a.id}e.cmdTgt=0;let n=0,i=1e9,r=this.storm.r;for(let a of t){if(a.id===e.id||!a.alive||a.dropUntil>this.t)continue;let o=(a.x-e.x)**2+(a.z-e.z)**2;a.x*a.x+a.z*a.z>r*r&&(o*=1.6),a.id===e.tgt&&(o*=.7),a.giantUntil>this.t&&(o*=1.3),o<i&&(i=o,n=a.id)}return n}updateFighters(e){let t=this.t,n=this.phase==="battle",r=[...this.fighters.values()].filter(c=>c.alive),a=this.storm.r,o=null;for(let c of r)c.kills>=2&&(!o||c.kills>o.kills)&&(o=c);this.crownId=o?o.id:0;for(let c of r){if(c.state==="podium")continue;c.y>0&&(c.y=Math.max(0,c.y-e*14*Math.max(.25,(c.dropUntil-t<.4,1))),c.y===0&&this.emit({k:"land",a:c.id}));let l=c.giantUntil>t,h=c.speedUntil>t,d=l?.75:.42,f=0,u=0,p=(h?5.6:3.4)*(l?.9:1);if(c.dropUntil>t){c.vx=c.vz=0;continue}let b=c.x*c.x+c.z*c.z;if(n){t>=c.retargetAt&&(c.tgt=this.pickTarget(c,r),c.retargetAt=t+.35+this.r(0,.25));let v=this.fighters.get(c.tgt);if(b>(a-.6)**2){let M=Math.sqrt(b)||1;f=-c.x/M,u=-c.z/M,p*=1.1}else if(v&&v.alive){let M=v.x-c.x,L=v.z-c.z,C=Math.hypot(M,L)||.001,D=(l?1.9:1.1)+(v.giantUntil>t?.5:0);c.face=Math.atan2(L,M),C>D*.9?(f=M/C,u=L/C):(f=-L/C*.25*Math.sin(t*2+c.id),u=M/C*.25*Math.sin(t*2+c.id),p*=.6),c.atkCd-=e,C<=D&&c.atkCd<=0&&c.danceUntil<t&&this.attack(c,v,C)}if(c.dashUntil>t&&!c.dashHit){for(let M of r)if(!(M.id===c.id||M.dropUntil>t)&&(M.x-c.x)**2+(M.z-c.z)**2<(d+.6)**2){c.dashHit=!0,this.damage(M,16,c,{kb:9,crit:!1,dash:!0});break}}if(c.charge>=100&&(c.charge=0,this.spin(c,r)),c.bot&&t>c.botActT&&(c.botActT=t+this.r(6,14),this.rng()<.5?this.dash(c):t>=c.shieldCd&&(c.shieldUntil=t+2.5,c.shieldCd=t+12,this.emit({k:"shield",a:c.id}))),b>a*a&&(c.stormAcc=(c.stormAcc||0)+this.storm.dps*e,c.stormAcc>=3)){let M=Math.floor(c.stormAcc);c.stormAcc-=M,this.damage(c,M,null,{storm:!0})}}else{c.wander+=this.r(-1,1)*e*2;let v=this.phase==="lobby"?this.lobbyRadius():4.5;b>v*v&&(c.wander=Math.atan2(-c.z,-c.x)),f=Math.cos(c.wander)*.45,u=Math.sin(c.wander)*.45,c.danceUntil>t&&(f=u=0),(f||u)&&(c.face=Math.atan2(u,f))}for(let v of r){if(v===c)continue;let x=c.x-v.x,M=c.z-v.z,L=x*x+M*M,C=d+(v.giantUntil>t?.75:.42);if(L<C*C&&L>1e-6){let D=Math.sqrt(L),U=(C-D)/C;f+=x/D*U*2.2,u+=M/D*U*2.2}}let g=f*p,m=u*p,_=Math.min(1,e*8);c.vx+=(g-c.vx)*_,c.vz+=(m-c.vz)*_,c.x+=(c.vx+c.kx)*e,c.z+=(c.vz+c.kz)*e;let w=Math.exp(-e*(c.dashUntil>t?1:7));c.kx*=w,c.kz*=w;let S=Math.hypot(c.x,c.z),T=this.o.platform-.5;S>T&&(c.x*=T/S,c.z*=T/S)}}attack(e,t,n){let i=this.t;e.atkCd=this.r(.95,1.35)*(e.speedUntil>i?.8:1);let r=this.r(5,8),a=this.rng()<.14;a&&(r*=1.9),e.giantUntil>i&&(r*=1.8),e.rageUntil>i&&(r*=1.6),e.bot&&(r*=this.o.botDamage),r*=this.o.damageMul,this.emit({k:"atk",a:e.id,b:t.id}),this.damage(t,Math.round(r),e,{crit:a,kb:(e.giantUntil>i?7:3.6)+(a?2:0)})}spin(e,t){this.emit({k:"spin",a:e.id});for(let n of t)n.id!==e.id&&(n.x-e.x)**2+(n.z-e.z)**2<2.8*2.8&&this.damage(n,22,e,{kb:8})}damage(e,t,n,{crit:i=!1,kb:r=0,storm:a=!1,meteor:o=!1,dash:c=!1,x:l,z:h}={}){let d=this.t;if(!(!e.alive||this.phase!=="battle"||e.dropUntil>d)){if(e.shieldUntil>d&&!a&&(t=Math.max(1,Math.round(t*.2)),this.emit({k:"block",a:e.id})),e.hp-=t,n&&(e.lastHitBy=n.id,e.lastHitT=d),r){let f=l??(n?n.x:0),u=h??(n?n.z:0),p=e.x-f,b=e.z-u,g=Math.hypot(p,b)||1,m=e.giantUntil>d?.35:1;e.kx+=p/g*r*m,e.kz+=b/g*r*m}(!a||t>=3)&&this.emit({k:"hit",a:n?n.id:0,b:e.id,d:t,c:i?1:0,s:a?1:0,m:o?1:0}),e.hp<=0&&this.ko(e,n,{storm:a,meteor:o})}}ko(e,t,{storm:n,meteor:i}){let r=this.t;e.alive=!1,e.hp=0,e.place=this.alive+1;let a=t;!a&&e.lastHitBy&&r-e.lastHitT<4&&(a=this.fighters.get(e.lastHitBy));let o=this.people.get(e.uid),c={k:"ko",a:a?a.id:0,b:e.id,s:n?1:0,m:i?1:0,left:this.alive};a&&a.id!==e.id&&(a.kills++,a.streak++,a.multi=r-a.lastKillT<4.5?a.multi+1:1,a.lastKillT=r,a.hp=Math.min(a.maxHp,a.hp+12),(o&&!a.bot||o)&&(o.lastKiller=a.uid),this.firstBlood||(this.firstBlood=!0,c.first=1),up[Math.min(5,a.multi)]&&a.multi>=2&&(c.multi=up[Math.min(5,a.multi)]),fp[a.streak]&&(c.streak=fp[a.streak]),e.giantUntil>r&&(c.giant=1),c.n=a.kills),this.emit(c)}updateMeteors(){let e=this.t;if(!this.meteors.length)return;let t=this.meteors.filter(n=>n.at<=e);if(t.length){this.meteors=this.meteors.filter(n=>n.at>e);for(let n of t){this.emit({k:"boom",x:+n.x.toFixed(2),z:+n.z.toFixed(2),r:n.r});let i=n.by?this.fighters.get(n.by):null;for(let r of this.aliveList()){if(i&&r.id===i.id||n.byUid&&r.uid===n.byUid)continue;let a=Math.hypot(r.x-n.x,r.z-n.z);a<n.r&&this.damage(r,Math.round(n.dmg*(1-a/n.r*.5)),i&&i.alive?i:null,{kb:9,meteor:!0,x:n.x,z:n.z})}}}}snapshot(){let e=this.t,t=[];for(let i of this.fighters.values()){if(!i.alive&&i.state!=="podium")continue;let r=Ot.alive;i.shieldUntil>e&&(r|=Ot.shield),i.speedUntil>e&&(r|=Ot.speed),i.giantUntil>e&&(r|=Ot.giant),i.rageUntil>e&&(r|=Ot.rage),i.dashUntil>e&&(r|=Ot.dash),i.danceUntil>e&&(r|=Ot.dance),i.y>.01&&(r|=Ot.air),i.id===this.crownId&&(r|=Ot.crown),e-i.cmdT<6&&(r|=Ot.cmd),i.hp<i.maxHp*.3&&(r|=Ot.low),i.bot&&(r|=Ot.bot),t.push(i.id,Math.round(i.x*100)/100,Math.round(i.y*100)/100,Math.round(i.z*100)/100,Math.round(i.face*100)/100,Math.round(100*i.hp/i.maxHp),r,Math.round(i.charge))}let n=this.phase==="battle"?Math.max(0,this.phaseT+this.storm.hold-e):Math.max(0,this.phaseEnd-e);return{tm:Math.round(e*1e3)/1e3,ph:this.phase,tl:Math.round(n*10)/10,r:Math.round(this.storm.r*100)/100,rt:Math.round(this.storm.target*100)/100,n:this.alive,q:this.queue.length,h:this.humans,likes:this.likes,hype:this.hype,round:this.round,podium:this.podium,f:t}}board(e=10){return[...this.people.values()].filter(t=>!t.bot&&(t.wins||t.kills)).sort((t,n)=>n.wins-t.wins||n.kills-t.kills).slice(0,e).map(t=>({name:t.name,wins:t.wins,kills:t.kills,games:t.games,color:t.color}))}prune(e=3600,t=2e3){if(this.people.size<=t)return 0;let n=0;for(let[i,r]of this.people)!this.byUid.has(i)&&this.t-r.lastSeen>e&&!r.wins&&(this.people.delete(i),n++);return n}};var Mr=(s,e=Math.random)=>s[Math.floor(e()*s.length)%s.length];function dp({nameOf:s,rng:e=Math.random}){let t=[],n=0,i=99,r={lobby:["To play, just comment anything. You drop into the arena with your own fighter.","Gifts give powers! A rose is a speed boost. Five coins calls meteors. Thirty coins makes you a giant.","A one hundred coin gift revives you. Five hundred coins nukes the storm!","Follow for extra armor. Share the live for rage mode, double damage!"],battle:["Comment attack and a name to hunt someone down!","Type shield to block, or dash to charge!","Likes heal everybody! Keep tapping that screen!","Comment revenge to go after whoever knocked you out last time!","Send a gift for a power up right now!"]},a="lobby",o=-99,c=0,l={lobby:0,battle:0},h=(d,f,u,p={})=>({text:d,pri:f,banner:u||null,...p});return{lines(d,f){let u=[];for(let b of d){let g=b.a?s(b.a):null,m=b.b?s(b.b):null;switch(b.k){case"phase":a=b.ph,b.ph==="lobby"&&(i=99,l.lobby=0,u.push(h(Mr(["New round! Comment anything to drop into the arena!","Lobby is open! Comment anything to jump in!","Next battle starting soon. Comment to join the fight!"],e),5))),b.ph==="battle"&&u.push(h(Mr([`Fight! ${b.n} fighters, only one survives!`,`Let the battle begin! ${b.n} fighters enter, one walks out!`,`Go go go! ${b.n} fighters in the arena!`],e),7,"FIGHT!"));break;case"storm":b.msg==="closing"&&u.push(h(Mr(["The storm is closing in!","Watch out, the storm is moving!"],e),4,"STORM CLOSING")),b.msg==="half"&&u.push(h("Half the arena is gone!",3)),b.msg==="sudden"&&u.push(h("Sudden death! The storm swallows everything!",7,"SUDDEN DEATH"));break;case"ko":{if(b.left===1)break;b.first&&g?u.push(h(`First blood! ${g} takes out ${m}!`,6,"FIRST BLOOD")):b.multi&&g?u.push(h(`${g}, ${b.multi.toLowerCase()}!`,6,b.multi)):b.streak&&g?u.push(h(`${g} is ${b.streak.toLowerCase()}!`,6,b.streak)):b.giant&&g?u.push(h(`${g} took down a giant!`,6,"GIANT SLAYER")):b.s&&!g&&m&&b.left<=6&&u.push(h(`${m} got swallowed by the storm!`,3)),b.left===2?u.push(h("Final two! Who takes the crown?",7,"FINAL 2")):(b.left===3||b.left===5||b.left===10)&&b.left<i&&(i=b.left,u.push(h(b.left===3?"Final three!":`Only ${b.left} left!`,5,b.left===3?"FINAL 3":`${b.left} LEFT`)));break}case"gift":{let _=b.n,w={speed:[`${_} sent a ${b.g}! Speed boost!`,`Speed boost for ${_}! Thank you for the ${b.g}!`],meteor:[`Meteor strike from ${_}! Take cover!`,`${_} calls down the meteors!`],giant:[`${_} goes giant!`,`Uh oh, ${_} just went giant mode!`],revive:[`${_} with the revive! Thank you!`,`${_} rises again! Huge thanks!`],nuke:[`Storm nuke by ${_}! The storm gets blown away!`,`${_} nuked the storm! Everyone run!`]}[b.tier];w&&u.push(h(Mr(w,e),{speed:4,meteor:7,giant:7,revive:8,nuke:9}[b.tier],{speed:null,meteor:"METEOR STRIKE",giant:"GIANT MODE",revive:"REVIVE",nuke:"STORM NUKE"}[b.tier],{gift:b.tier}));break}case"bank":break;case"perk":b.perk==="follow"&&u.push(h(`Thanks for the follow, ${b.n}! Extra armor for you!`,5)),b.perk==="share"&&u.push(h(`${b.n} shared the live! Rage mode, double damage!`,5));break;case"hype":u.push(h("Like rain! Every viewer fighter heals up!",4,"LIKE RAIN"));break;case"revive":break;case"join":b.vip||t.push(b.n);break;case"win":if(b.a>0){let _=g,w=!!b.bot;u.push(h(w?`${_} wins this time! Comment now and take the crown back!`:Mr([`Winner winner! ${_} wins with ${b.kills} kills! Huge shoutout to ${_}!`,`${_} is the last one standing! What a champion!`,`Victory for ${_}! Everybody show ${_} some love!`],e),10,"WINNER",{win:1}))}else u.push(h("Nobody survived the storm! Next round!",10));break}}if(t.length&&f-n>5){n=f;let b=t.splice(0,50),g=b.slice(0,3),m=b.length-g.length,_=g.length===1?g[0]:g.slice(0,-1).join(", ")+" and "+g[g.length-1];u.push(h(m>0?`Welcome ${g.join(", ")} and ${m} more! Get ready to fight!`:Mr([`Welcome ${_}! You are in the arena!`,`${_} just dropped in!`],e),3))}u.length&&(o=f);let p=r[a];return p&&!u.length&&f-o>(a==="lobby"?5:11)&&f-c>(a==="lobby"?6:16)&&(c=f,o=f,u.push(h(p[l[a]++%p.length],2,null,{tip:1}))),u}}}var pp=["Sara","Ali","Hina","Omar","Zara","Bilal","Noor","Ayan","Esha","Faraz","Iman","Junaid","Kinza","Laiba","Moiz","Nimra","Rida","Saad","Tania","Umer","Maya","Leo","Aisha","Yusuf","Lina","Kai","Mia","Zain","Sofia","Adam","Hamza","Amna","Riya","Dev","Luna","Max"],mp=["","_x","22",".official","_99","\u{1F338}","xo","_07",".live","\u2728","_pk","786"],gp=["hi","join","lets go","me!","hello from dubai","gg","this is fire","shield","dash","\u{1F4A8}","\u{1F6E1}\uFE0F","dance","color pink","color gold","revenge","wow","\u{1F525}\u{1F525}","i will win","play","1","2","3","2","left","right","3\uFE0F\u20E3","candle","clock","echo","map","attack","mage","warrior","archer","healer","\u{1F52E}","\u{1F3F9}","seal","hunt","city","army"],bp=[["Rose",1],["TikTok",1],["Finger Heart",5],["GG",1],["Doughnut",30],["Hand Hearts",100],["Corgi",299],["Money Gun",500],["Lion",29999]];function xp(s="busy",e=Math.random){let t=l=>Math.floor(e()*l),n=[],i=()=>{let l=pp[t(pp.length)]+mp[t(mp.length)],h={uid:l.toLowerCase().replace(/[^\w.]/g,"")+n.length,name:l};return n.push(h),h},r=()=>n.length?n[t(n.length)]:i(),a=0,o=0,c=s==="quiet"?3:s==="gifts"?30:s==="demo"?40:220;return{people:n,tick(l){a+=l,o+=l;let h=[],d=s==="quiet"?.6:s==="busy"?Math.min(14,2+a/6):s==="demo"?5:4;for(;o>1/d;){o-=1/d;let u=n.length<Math.min(c,s==="busy"?10+a*2.5:c)&&e()<.6?i():r(),p=e();if(p<.5){let b=gp[t(gp.length)];if(e()<.25&&n.length>2){let g=r();g!==u&&(b=(e()<.5?"attack ":"\u2694\uFE0F ")+g.name.replace(/[^\w]/g,"").slice(0,6))}h.push({type:"chat",uid:u.uid,name:u.name,text:b})}else if(p<.8)h.push({type:"like",uid:u.uid,name:u.name,count:1+t(15)});else if(p<(s==="gifts"?.98:.9)){let b=e()<.75?bp[t(4)]:bp[4+t(s==="gifts"?4:3)];h.push({type:"gift",uid:u.uid,name:u.name,giftName:b[0],coins:b[1],count:e()<.2?1+t(5):1})}else p<.95?h.push({type:"follow",uid:u.uid,name:u.name}):h.push({type:"share",uid:u.uid,name:u.name})}return h}}}var Kt=new URLSearchParams(location.search),vn=s=>document.getElementById(s),sl=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,ka=Kt.get("mode")==="phone"||Kt.get("mode")!=="pc"&&(sl||/Android|Mobile/.test(navigator.userAgent)),Gn=Kt.get("render")==="1",Ar=Gn||Kt.get("local")==="1",wu=Kt.get("key")||"",Oa=Number(Kt.get("fps"))||(ka?30:60),Ip=Kt.get("mute")==="1";Kt.get("clean")==="1"&&document.body.classList.add("clean");var Iu=ka?[{pr:1.5,maxW:780,maxChars:40,labels:14,particles:1,halos:!0,animLod:1},{pr:1.25,maxW:700,maxChars:32,labels:12,particles:.75,halos:!0,animLod:1},{pr:1,maxW:600,maxChars:24,labels:10,particles:.5,halos:!0,animLod:2},{pr:.8,maxW:480,maxChars:16,labels:8,particles:.35,halos:!1,animLod:2}]:[{pr:2,maxW:Number(Kt.get("maxw"))||1080,maxChars:60,labels:18,particles:1,halos:!0,animLod:1},{pr:1.5,maxW:900,maxChars:48,labels:16,particles:1,halos:!0,animLod:1},{pr:1,maxW:700,maxChars:36,labels:12,particles:.6,halos:!0,animLod:2},{pr:.8,maxW:540,maxChars:24,labels:10,particles:.4,halos:!1,animLod:2}],xn=Kt.has("q")?Math.max(0,Math.min(3,Number(Kt.get("q")))):0,ov=Kt.has("q"),ui=vn("gl"),ft=null,Lp=0,Dp=0,$c=[],Zi=!1,Cs=vn("hud"),Ve=Cs.getContext("2d");function Np(){if(!(Kt.get("view")==="2d"||localStorage.getItem("lg_force2d")==="1"))try{ft=np(ui,{maxChars:Iu[0].maxChars,particles:ka?800:1200,aa:!ka||sl,preserve:Gn,platform:20}),ft.ready.catch(()=>{$n("assets-fail"),Ba()}),ui.addEventListener("webglcontextlost",za,!1),ui.addEventListener("webglcontextrestored",Fp,!1);return}catch{$n("gl-fail")}Ba()}function Ba(){if(ft&&ft.kind==="2d")return;try{ft&&ft.dispose(),ft&&ft.loseContext&&ft.loseContext()}catch{}let s=document.createElement("canvas");s.id="gl",ui.replaceWith(s),ui=s,ft=ip(ui,{platform:20}),$n("view-2d"),$i()}function za(s){s.preventDefault(),Lp++,Zi=!0,$n("ctx-lost"),$c.push(performance.now()),$c=$c.filter(e=>performance.now()-e<12e4),Hp("Graphics reset\u2026 recovering"),clearTimeout(za.t),za.t=setTimeout(()=>{Zi&&(localStorage.setItem("lg_force2d","1"),Ba(),Zi=!1,il())},4e3),Pu&&Pu.send("ctxlost")}function Fp(){if(clearTimeout(za.t),Dp++,$n("ctx-restored"),$c.length>=3){localStorage.setItem("lg_force2d","1"),Ba(),Zi=!1,il();return}try{ft.dispose()}catch{}ui.removeEventListener("webglcontextlost",za),ui.removeEventListener("webglcontextrestored",Fp),ft=null,Np(),xn=Math.min(3,xn+1),$i(),Zi=!1,il()}var Ga=390,Na=844;function $i(){let s=window.innerWidth,e=window.innerHeight,t=vn("stage"),n=s,i=e;s/e>.7&&(n=Math.round(Math.min(s,e*9/16)),i=Math.round(Math.min(e,n*16/9))),t.style.width=n+"px",t.style.height=i+"px",Ga=n,Na=i,document.documentElement.style.setProperty("--u",(n/100).toFixed(3)+"px");let r=Iu[xn],a=window.devicePixelRatio||1,o=Math.min(a,r.pr,r.maxW/n);ft&&(ft.resize(n,i,o),ft.setQuality(r));let c=Math.min(a,2,900/n);Cs.width=Math.round(n*c),Cs.height=Math.round(i*c),Cs.__pr=c}addEventListener("resize",()=>{clearTimeout($i.t),$i.t=setTimeout($i,120)});var rn=sp({record:Gn});rn.muted=Ip;var Up=vn("soundChip");function cv(){rn.unlock(),setTimeout(()=>{rn.state()==="running"&&(Up.hidden=!0)},200)}["pointerdown","touchstart","click","keydown"].forEach(s=>addEventListener(s,cv,{passive:!0}));document.addEventListener("visibilitychange",()=>{document.hidden||rn.resume()});!Gn&&!Ip&&(rn.unlock(),setTimeout(()=>{rn.state()!=="running"&&(Up.hidden=!1)},700));var Ps=new Map,Qc=[],$n=s=>{Qc.push(s),Qc.length>8&&Qc.shift()},Hn={ws:0,snaps:0,ev:0,err:0,say:0},_n=[],Di=null,_p=0,vp="",lv=null,yp=Pa,kp=null,Jc="",An={phase:"lobby",fighters:[],r:18,rt:18,tl:0,n:0,q:0,round:0};function Au(s=[],e=[]){for(let t of e)Ps.delete(t);for(let t of s)Ps.set(t.id,t)}var Zn=null,La=1e3;function Tu(){let s=(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws?game=br"+(wu?"&key="+encodeURIComponent(wu):"");try{Zn=new WebSocket(s)}catch{return setTimeout(Tu,La)}Zn.onopen=()=>{Hn.ws++,La=1e3,$n("ws-open"),il();try{let e=JSON.parse(localStorage.getItem("lg_brBoard")||"null");e&&e.json&&e.sig&&Zn.send(JSON.stringify({t:"restore",json:e.json,sig:e.sig}))}catch{}},Zn.onmessage=e=>{let t;try{t=JSON.parse(e.data)}catch{return}hv(t)},Zn.onclose=()=>{Zn=null,$n("ws-close"),setTimeout(Tu,La),La=Math.min(1e4,La*1.7),Hn.ws&&Hp("Reconnecting\u2026")},Zn.onerror=()=>{}}function hv(s){switch(s.t){case"hello":Ps.clear(),Au(s.roster),_n=[],Di=null,yp=s.tiers||yp,Ep(s),Mp(s.snap);break;case"roster":Au(s.add,s.del);break;case"s":Mp(s);break;case"say":zp(s.text,s.url,s.dur);break;case"banner":break;case"board":Ep(s);break;case"status":Jc=s.tiktok?.state||"",vn("conn").className=Jc==="connected"?"connected":/wait|connecting|reconnect/.test(Jc)?"waiting":Jc==="error"?"error":"",Rv(s.tiktok);break}}function Mp(s){if(!s)return;Hn.snaps++;let t=performance.now()/1e3-s.tm;Di===null||t<Di||Math.abs(t-Di)>2?Di=t:Di+=(t-Di)*.02,_n.length&&s.tm<_n[_n.length-1].tm-1&&(_n=[],Di=t),_n.push({tm:s.tm,s,done:!1}),_n.length>40&&_n.shift()}var uv=.16,el=0,nl=1,Ji=null,Sp=0;function wp(s,e){let t=xv();t+s>el&&(el=t+s,nl=Math.min(e,el>t?nl:1)),Hn.slow=(Hn.slow||0)+1}function Lu(s){return s<el?nl:(nl=1,1)}function fv(s){if(!_n.length)return An;let e=s-Di-uv,t=Math.max(0,Math.min(.2,s-(Sp||s)));if(Sp=s,Ji===null||Math.abs(e-Ji)>3)Ji=e;else{let o=Lu(s);Ji+=t*(o<1?o:Ji<e-.02?1.35:1),Ji>e&&(Ji=e)}let n=Ji;for(let o of _n)if(!o.done&&o.tm<=n){o.done=!0;let c=n-o.tm>1.2;for(let l of o.s.ev||[])Bp(l,c)}let i=_n[0],r=null;for(let o=0;o<_n.length;o++)if(_n[o].tm<=n)i=_n[o];else{r=_n[o];break}if(!r||r===i)return Eu(i.s,null,0);let a=Math.max(0,Math.min(1,(n-i.tm)/Math.max(.001,r.tm-i.tm)));return Eu(i.s,r.s,a)}var Ap=[];function Eu(s,e,t){let n=[],i=new Map;if(e)for(let o=0;o<e.f.length;o+=8)i.set(e.f[o],o);let r=0;for(let o=0;o<s.f.length;o+=8){let c=s.f[o],l=Ap[r]||(Ap[r]={});r++,l.id=c,l.x=s.f[o+1],l.y=s.f[o+2],l.z=s.f[o+3],l.face=s.f[o+4],l.hp=s.f[o+5],l.flags=s.f[o+6],l.charge=s.f[o+7];let h=i.get(c);if(h!==void 0&&e){let d=e.f;l.x+=(d[h+1]-l.x)*t,l.y+=(d[h+2]-l.y)*t,l.z+=(d[h+3]-l.z)*t;let f=d[h+4]-l.face;f=Math.atan2(Math.sin(f),Math.cos(f)),l.face+=f*t}l.info=Ps.get(c)||{name:"?",color:16777215},n.push(l)}let a=e&&t>.5?e:s;return a.ph!==vp&&(vp=a.ph,_p=performance.now()/1e3),An={phase:a.ph,fighters:n,r:e?s.r+(e.r-s.r)*t:s.r,rt:a.rt,tl:a.tl,n:a.n,q:a.q,h:a.h,round:a.round,hype:a.hype,podium:a.podium,phaseStart:_p},lv=a,An}var Ni=null,Ru=null,Op=null,Yi=[],Tp=0,Cu=0;function dv(){let s={};for(let n of["lobbySeconds","minFighters","arenaCap","ceremonySeconds","damageMul","shrinkSeconds"])Kt.has(n)&&(s[n]=Number(Kt.get(n)));let e=Number(Kt.get("seed")||7),t=()=>(e=e*16807%2147483647,(e-1)/2147483646);Ni=new Kc(s,Gn?t:Math.random),Op=dp({nameOf:n=>Ni.fighters.get(n)?.name||null,rng:Gn?t:Math.random}),Kt.get("crowd")&&(Ru=xp(Kt.get("crowd"),Gn?t:Math.random)),window.__input=n=>Ni.input(n)}var bu=0;function pv(s,e){if(s*=Lu(e),Ru)for(let r of Ru.tick(s))Ni.input(r);for(bu+=s;bu>=.05;)bu-=.05,Ni.step(.05);let t=Ni.drainRoster();Au(t.add,t.del);let n=Ni.drain();for(let r of Op.lines(n,Ni.t))mv(r,e);let i=Ni.snapshot();for(let r of n)Bp(r,!1);return Eu(i,null,0)}function mv(s,e){let t={...s,at:e,p:null};for(t.p=fetch("/api/say?text="+encodeURIComponent(s.text)).then(n=>n.json()).catch(()=>({url:null})),Cu++,t.p.finally(()=>Cu--),Yi.push(t),Yi.sort((n,i)=>i.pri-n.pri||n.at-i.at);Yi.length>3;)Yi.pop()}async function Fa(s){if(s<Tp||!Yi.length||Fa.busy)return;let e=Yi.shift();if(!e.win&&s-e.at>(e.pri>=7?9:6))return;Fa.busy=!0;let t=await e.p;Fa.busy=!1;let n=Gn?wr:performance.now()/1e3,i=t.dur||Math.min(4,.9+e.text.length/16);zp(e.text,t.url,i),Tp=n+i+.25}var gv=s=>Ps.get(s)?.name||"?",bv=s=>"#"+((Ps.get(s)?.color??16777215)>>>0).toString(16).padStart(6,"0");function Bp(s,e){if(Hn.ev++,!e&&ft&&!Zi)try{ft.fx(s,An)}catch{Hn.err++}let t=(n,i)=>{e||rn.sfx(n,rn.now(),i)};switch(s.k){case"hit":{t(s.c?"crit":"punch",s.s?.5:1);break}case"block":t("block");break;case"ko":{t("ko"),s.a&&tl.set(s.a,s.n||(tl.get(s.a)||0)+1),e||(s.left>0&&s.left<=1?wp(1.6,.25):(s.multi||s.streak||s.left>0&&s.left<=3)&&wp(.55,.4));break}case"dash":t("dash");break;case"shield":t("shield");break;case"spin":t("spin");break;case"heal":t("heal");break;case"land":t("land",.6);break;case"meteor":t("whistle");break;case"boom":t("boom");break;case"nuke":t("nuke"),_v();break;case"power":case"revive":t("power");break;case"gift":t("coin");break;case"perk":t("power");break;case"hype":t("heal"),t("cheer");break;case"phase":s.ph==="battle"&&t("go"),s.ph==="lobby"&&(vn("winner").hidden=!0,tl.clear());break;case"win":t("fanfare"),vv(s);break;case"join":break}s.k!=="hit"&&s.k!=="atk"&&$n(s.k)}function xv(){return Gn?wr:performance.now()/1e3}function _v(){let s=vn("flash");s.style.transition="none",s.style.opacity="0.85",s.offsetWidth,s.style.transition="opacity 0.8s ease-out",s.style.opacity="0"}function zp(s,e,t){Hn.say++,e&&rn.voice(e,t)}function vv(s){let e=vn("winner");s.a>0?(vn("winName").textContent=Gp(gv(s.a),18),vn("winName").style.color=bv(s.a)):(vn("winName").textContent="\u{1F300}",vn("winName").style.color="#d08cff"),e.hidden=!1,e.style.animation="none",e.offsetWidth,e.style.animation=""}var Gp=(s,e=10)=>(s=String(s||"?").replace(/\s+/g," ").trim(),[...s].length>e?[...s].slice(0,e-1).join("")+"\u2026":s);function Ep(s){if(!(!s||!s.session&&!s.all)&&(kp=s,s.signed))try{localStorage.setItem("lg_brBoard",JSON.stringify(s.signed))}catch{}}function yv(s){let e=Cs.__pr||1,t=Ga/100;Ve.setTransform(1,0,0,1,0,0),Ve.clearRect(0,0,Cs.width,Cs.height),Ve.setTransform(e,0,0,e,0,0),!(!ft||Zi)&&(Mv(s,t),Sv(s,t))}var Sr=new Map,tl=new Map;function Mv(s,e){let t=ft.drawn()||An.fighters,n=Iu[xn],i=t.filter(l=>l.flags&Ot.alive).map(l=>({f:l,s:(l.flags&Ot.cmd?8:0)+(l.flags&Ot.crown?6:0)+(l.flags&Ot.giant?4:0)+(l.flags&Ot.bot?-4:3)}));i.sort((l,h)=>h.s-l.s);let r=i.length>14,a=Math.round(e*(r?2.3:2.7));Ve.textAlign="center",Ve.textBaseline="middle",Ve.lineJoin="round",Ve.font=`800 ${a}px -apple-system, "Segoe UI", Roboto, sans-serif`;let o=[],c=new Set;for(let{f:l}of i.slice(0,n.labels)){let h=ft.project(l.x,l.y+ft.headY(l),l.z);if(!h.ok||h.x<-40||h.x>Ga+40||h.y<Na*.1||h.y>Na*.8||h.y<Na*.2&&Math.abs(h.x-Ga/2)<e*12)continue;let d=o.some(T=>Math.abs(T.x-h.x)<e*11&&Math.abs(T.y-h.y)<e*3.6),f=l.id;c.add(f);let u=d?0:r&&l.flags&Ot.bot?.45:.92,p=(Sr.get(f)??0)+(u-(Sr.get(f)??0))*.25;if(Sr.set(f,p),p<.04)continue;d||o.push(h);let b=l.info||{},g=(l.flags&Ot.crown?"\u{1F451}":"")+Gp(l.flags&Ot.bot?String(b.name||"").replace(/^Bot\s+/i,""):b.name,r?8:10),m=Ve.measureText(g).width,_=a*1.3,w=h.y-_*.6;Ve.globalAlpha=p,Ve.fillStyle="rgba(10,6,24,0.55)",wv(h.x-m/2-e,w-_/2,m+e*2,_,_/2),Ve.fill(),Ve.fillStyle="#"+((b.color??16777215)>>>0).toString(16).padStart(6,"0"),Ve.fillText(g,h.x,w+1);let S=tl.get(l.id)||0;if(S>0){let T=(S>=3?"\u{1F525}":"")+"\u{1F480}".repeat(Math.min(S,3)),v=Math.round(a*.8);Ve.font=`800 ${v}px -apple-system, "Segoe UI", Roboto, sans-serif`,Ve.fillText(T,h.x,w-_*.95),Ve.font=`800 ${a}px -apple-system, "Segoe UI", Roboto, sans-serif`}if(l.hp<99){let T=Math.max(e*6,m*.7),v=w+_/2+e*.35;Ve.fillStyle="rgba(0,0,0,0.5)",Ve.fillRect(h.x-T/2,v,T,e*.55),Ve.fillStyle=l.hp>55?"#3ee07a":l.hp>28?"#ffd23f":"#ff4d5e",Ve.fillRect(h.x-T/2,v,T*Math.max(0,l.hp)/100,e*.55)}}if(Ve.globalAlpha=1,Sr.size>200)for(let l of Sr.keys())c.has(l)||Sr.delete(l)}var Yc={lobby:20,battle:30},Rp="";function Sv(s,e){let t=An,n=t.phase;n!==Rp&&(Rp=n,Yc[n]=Math.max(1,t.tl||1)),t.tl>Yc[n]&&(Yc[n]=t.tl);let i=Ga/2,r=Na*.135,a=e*4.6,o=n==="ceremony"?1:Math.max(0,Math.min(1,(t.tl||0)/(Yc[n]||1))),c=n==="battle"?t.tl>0?"#ff6b8b":"#c77dff":n==="ceremony"?"#ffd34d":"#7ee0ff",l=n==="lobby"&&t.tl>0&&t.tl<=5,h=l?1+.12*Math.max(0,Math.sin(t.tl%1*Math.PI)):1;Ve.save(),Ve.translate(i,r),Ve.scale(h,h),Ve.fillStyle="rgba(10,6,24,0.55)",Ve.beginPath(),Ve.arc(0,0,a+e*.9,0,Math.PI*2),Ve.fill(),Ve.lineWidth=e*1.1,Ve.lineCap="round",Ve.strokeStyle="rgba(255,255,255,0.18)",Ve.beginPath(),Ve.arc(0,0,a,0,Math.PI*2),Ve.stroke(),Ve.strokeStyle=l?"#ffd34d":c,Ve.beginPath(),Ve.arc(0,0,a,-Math.PI/2,-Math.PI/2+Math.PI*2*o),Ve.stroke(),Ve.textAlign="center",Ve.textBaseline="middle",Ve.fillStyle="#fff",n==="ceremony"?(Ve.font=`${Math.round(e*4.2)}px sans-serif`,Ve.fillText("\u{1F451}",0,e*.2)):(Ve.font=`900 ${Math.round(e*(l?4.4:3.6))}px -apple-system, "Segoe UI", Roboto, sans-serif`,Ve.fillText(String(l?Math.ceil(t.tl):n==="battle"?t.n:t.fighters.length),0,e*.3)),Ve.restore()}function wv(s,e,t,n,i){Ve.beginPath(),Ve.moveTo(s+i,e),Ve.arcTo(s+t,e,s+t,e+n,i),Ve.arcTo(s+t,e+n,s,e+n,i),Ve.arcTo(s,e+n,s,e,i),Ve.arcTo(s,e,s+t,e,i),Ve.closePath()}var xu=-1;function Av(){let s=An;if(s.phase==="lobby"&&s.tl<=5&&s.tl>0){let e=Math.ceil(s.tl);e!==xu&&(xu=e,rn.sfx("beep"))}else xu=-1;s.phase!=="ceremony"&&(vn("winner").hidden=!0)}var _u=[];function Tv(){for(let s=_u.length-1;s>=0;s--)_u[s].at<=wr&&_u.splice(s,1)[0].fn()}function Hp(){vn("notice").hidden=!1}function il(){vn("notice").hidden=!0}var Da=0,vu=0,yu=0,Ua=0,Mu=0,Zc=0,Cp=0,Su=new Map;function Vp(s,e){if(Ar?An=pv(s,e):An=fv(e),Ar&&Fa(e),ft&&!Zi)try{ft.frame(An,s*Lu(e),e)}catch{Hn.err++,$n("frame-err"),Hn.err>30&&Ba()}yv(e),e-Cp>.25&&(Cp=e,Av())}function Ev(s){vu++,!(s-yu<2)&&(Ua=vu/(s-yu),vu=0,yu=s,!(ov||Gn||document.hidden)&&(s<6||(Ua<Oa*.8&&xn<3?++Mu>=2&&(Su.set(xn,(Su.get(xn)||0)+1),xn++,Mu=0,Zc=0,$i(),$n("q"+xn)):(Mu=0,Ua>=Oa*.95&&xn>0&&(Su.get(xn-1)||0)<2?++Zc>=6&&(xn--,Zc=0,$i(),$n("q"+xn)):Zc=0))))}function Wp(s){if(requestAnimationFrame(Wp),document.hidden)return;let e=s/1e3;if(Da&&e-Da<1/Oa-.004)return;let t=Math.min(.1,Da?e-Da:1/Oa);Da=e,Vp(t,e),Ev(e)}var wr=0;Gn&&(rn.clock=()=>wr,window.__render={async frame(s){ft&&ft.ready&&!ft.loaded&&!ft.error&&await ft.ready.catch(()=>{}),wr+=s,Tv();for(let e=0;e<100&&(Fa.busy||Yi.length&&Yi[0].p&&Cu);e++)await new Promise(t=>setTimeout(t,30));return Vp(s,wr),{phase:An.phase,n:An.n,fighters:An.fighters.length}},mix:s=>rn.mix(s),stats:()=>ft.stats()});var Pp=!1;function Rv(s){if(Pp||sl||Ar||!wu||!s||!/tikfinity|both/.test(s.source||""))return;Pp=!0;let e=document.createElement("script");e.src="/shared/tikfinity.js",e.onload=()=>{let t=window.TikFinity;t.setSink(n=>{!Zn||Zn.readyState!==1||(n.type==="status"?Zn.send(JSON.stringify({t:"tf-status",state:n.mode==="live"?"connected":"waiting",message:n.message})):Zn.send(JSON.stringify({t:"tf",ev:n})))}),t.connect()},document.head.appendChild(e)}var Pu=null;Np();$i();Ar?(dv(),kp={session:[],all:[]}):Tu();Gn||(requestAnimationFrame(Wp),setInterval(()=>{!document.hidden&&!Ar&&fetch("/healthz?overlay=1",{cache:"no-store"}).catch(()=>{})},4*6e4),Pu=rp(()=>({mode:{phone:ka,ios:sl,kind:ft?ft.kind:"none",game:"br",q:xn,fps:Math.round(Ua*10)/10,cap:Oa},cv:{w:ui.width,h:ui.height},gl:{...ft?ft.stats():{},lost:Lp,restored:Dp},n:{...Hn},last:Qc.slice(),audio:{unlocked:rn.state()==="running",ctx:rn.state(),played:rn.played,fails:rn.fails}}),{off:Kt.get("diag")==="0"||Ar}));window.__br={get world(){return An},get level(){return xn},get fps(){return Ua},get view(){return ft},stats:()=>ft?ft.stats():null,N:Hn,audio:rn,roster:Ps};})();
