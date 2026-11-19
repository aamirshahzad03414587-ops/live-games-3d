(()=>{var Kd=0,vh=1,Jd=2;var Ya=1,Yd=2,Kr=3,Pi=0,Rn=1,bn=2,ir=0,As=1,xi=2,yh=3,Mh=4,Zd=5;var sr=100,$d=101,Qd=102,ef=103,tf=104,nf=200,sf=201,rf=202,af=203,Sh=204,wh=205,of=206,lf=207,cf=208,hf=209,uf=210,df=211,ff=212,pf=213,mf=214,$o=0,Qo=1,el=2,Ir=3,tl=4,nl=5,il=6,sl=7,wl=0,gf=1,bf=2,Ii=0,Th=1,Ah=2,Eh=3,Za=4,Rh=5,Ch=6,Ph=7,uh="attached",xf="detached",Ih=300,rr=301,Jr=302,Tl=303,Al=304,xs=1e3,ni=1001,Lr=1002,en=1003,El=1004;var ar=1005;var pn=1006,Yr=1007;var oi=1008;var Wn=1009,Lh=1010,Dh=1011,Zr=1012,Rl=1013,_i=1014,Zn=1015,vi=1016,Cl=1017,Pl=1018,or=1020,Fh=35902,Nh=35899,kh=1021,Uh=1022,li=1023,Ji=1026,ss=1027,$r=1028,Il=1029,Es=1030,Ll=1031;var Dl=1033,$a=33776,Qa=33777,eo=33778,to=33779,Fl=35840,Nl=35841,kl=35842,Ul=35843,Ol=36196,Bl=37492,zl=37496,Gl=37488,Hl=37489,no=37490,Vl=37491,Wl=37808,ql=37809,Xl=37810,jl=37811,Kl=37812,Jl=37813,Yl=37814,Zl=37815,$l=37816,Ql=37817,ec=37818,tc=37819,nc=37820,ic=37821,sc=36492,rc=36494,ac=36495,oc=36283,lc=36284,io=36285,cc=36286,hc=2200,so=2201,_f=2202,Vs=2300,Ws=2301,Yo=2302,dh=2303,zs=2400,Gs=2401,Sa=2402,uc=2500,vf=2501,Oh=0,ro=1,Qr=2,yf=3200;var ea=0,Mf=1,rs="",Ht="srgb",Un="srgb-linear",wa="linear",Lt="srgb";var Zo=7680;var Sf=519,wf=512,Tf=513,Af=514,Bh=515,Ef=516,Rf=517,zh=518,Gh=519,Hh=35044;var Vh="300 es",ii=2e3,Dr=2001;function Mm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Fr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cf(){let s=Fr("canvas");return s.style.display="block",s}var ld={},Nr=null;function Ta(...s){let e="THREE."+s.shift();Nr?Nr("log",e,...s):console.log(e,...s)}function Pf(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function je(...s){s=Pf(s);let e="THREE."+s.shift();if(Nr)Nr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function at(...s){s=Pf(s);let e="THREE."+s.shift();if(Nr)Nr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Hs(...s){let e=s.join(" ");e in ld||(ld[e]=!0,je(...s))}function If(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Lf={[$o]:$o,[el]:il,[tl]:tl,[Ir]:nl,[Qo]:Qo,[il]:el,[sl]:sl,[nl]:Ir},bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=1234567,ya=Math.PI/180,qs=180/Math.PI;function Li(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function vt(s,e,t){return Math.max(e,Math.min(t,s))}function Wh(s,e){return(s%e+e)%e}function wm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Tm(s,e,t){return s!==e?(t-s)/(e-s):0}function Ma(s,e,t){return(1-t)*s+t*e}function Am(s,e,t,n){return Ma(s,e,1-Math.exp(-t*n))}function Em(s,e=1){return e-Math.abs(Wh(s,e*2)-e)}function Rm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Cm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Pm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Im(s,e){return s+Math.random()*(e-s)}function Lm(s){return s*(.5-Math.random())}function Dm(s){s!==void 0&&(cd=s);let e=cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fm(s){return s*ya}function Nm(s){return s*qs}function km(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Um(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function qh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Om(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),p=r((e-n)/2),d=a((e-n)/2),h=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*p,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*p,o*c);break;case"ZXZ":s.set(l*p,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*m,l*h,o*c);break;case"YXY":s.set(l*h,o*u,l*m,o*c);break;case"ZYZ":s.set(l*m,l*h,o*u,o*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function dc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Xh(s,e){if(e.constructor===Float32Array)return s;let t=dc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function jh(s,e){if(e.constructor===Float32Array)return s;let t=dc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var fc={DEG2RAD:ya,RAD2DEG:qs,generateUUID:Li,clamp:vt,euclideanModulo:Wh,mapLinear:wm,inverseLerp:Tm,lerp:Ma,damp:Am,pingpong:Em,smoothstep:Rm,smootherstep:Cm,randInt:Pm,randFloat:Im,randFloatSpread:Lm,seededRandom:Dm,degToRad:Fm,radToDeg:Nm,isPowerOfTwo:km,ceilPowerOfTwo:Um,floorPowerOfTwo:qh,setQuaternionFromProperEuler:Om,normalize:jh,denormalize:Xh},$h=class $h{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$h.prototype.isVector2=!0;var it=$h,Sn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],p=n[i+3],d=r[a+0],h=r[a+1],m=r[a+2],b=r[a+3];if(p!==b||l!==d||c!==h||u!==m){let g=l*d+c*h+u*m+p*b;g<0&&(d=-d,h=-h,m=-m,b=-b,g=-g);let f=1-o;if(g<.9995){let _=Math.acos(g),w=Math.sin(_);f=Math.sin(f*_)/w,o=Math.sin(o*_)/w,l=l*f+d*o,c=c*f+h*o,u=u*f+m*o,p=p*f+b*o}else{l=l*f+d*o,c=c*f+h*o,u=u*f+m*o,p=p*f+b*o;let _=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=_,c*=_,u*=_,p*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],p=r[a],d=r[a+1],h=r[a+2],m=r[a+3];return e[t]=o*m+u*p+l*h-c*d,e[t+1]=l*m+u*d+c*p-o*h,e[t+2]=c*m+u*h+o*d-l*p,e[t+3]=u*m-o*p-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),p=o(r/2),d=l(n/2),h=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*u*p+c*h*m,this._y=c*h*p-d*u*m,this._z=c*u*m+d*h*p,this._w=c*u*p-d*h*m;break;case"YXZ":this._x=d*u*p+c*h*m,this._y=c*h*p-d*u*m,this._z=c*u*m-d*h*p,this._w=c*u*p+d*h*m;break;case"ZXY":this._x=d*u*p-c*h*m,this._y=c*h*p+d*u*m,this._z=c*u*m+d*h*p,this._w=c*u*p-d*h*m;break;case"ZYX":this._x=d*u*p-c*h*m,this._y=c*h*p+d*u*m,this._z=c*u*m-d*h*p,this._w=c*u*p+d*h*m;break;case"YZX":this._x=d*u*p+c*h*m,this._y=c*h*p+d*u*m,this._z=c*u*m-d*h*p,this._w=c*u*p-d*h*m;break;case"XZY":this._x=d*u*p-c*h*m,this._y=c*h*p-d*u*m,this._z=c*u*m+d*h*p,this._w=c*u*p+d*h*m;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],p=t[10],d=n+o+p;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-i)*h}else if(n>o&&n>p){let h=2*Math.sqrt(1+n-o-p);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(r+c)/h}else if(o>p){let h=2*Math.sqrt(1+o-n-p);this._w=(r-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+p-n-o);this._w=(a-i)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Qh=class Qh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),p=2*(r*n-a*t);return this.x=t+l*c+a*p-o*u,this.y=n+l*u+o*c-r*p,this.z=i+l*p+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gc.copy(this).projectOnVector(e),this.sub(Gc)}reflect(e){return this.sub(Gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qh.prototype.isVector3=!0;var B=Qh,Gc=new B,hd=new Sn,eu=class eu{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],d=n[2],h=n[5],m=n[8],b=i[0],g=i[3],f=i[6],_=i[1],w=i[4],v=i[7],E=i[2],y=i[5],x=i[8];return r[0]=a*b+o*_+l*E,r[3]=a*g+o*w+l*y,r[6]=a*f+o*v+l*x,r[1]=c*b+u*_+p*E,r[4]=c*g+u*w+p*y,r[7]=c*f+u*v+p*x,r[2]=d*b+h*_+m*E,r[5]=d*g+h*w+m*y,r[8]=d*f+h*v+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=u*a-o*c,d=o*l-u*r,h=c*r-a*l,m=t*p+n*d+i*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=p*b,e[1]=(i*c-u*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(u*t-i*l)*b,e[5]=(i*r-o*t)*b,e[6]=h*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hc.makeScale(e,t)),this}rotate(e){return Hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hc.makeRotation(-e)),this}translate(e,t){return Hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};eu.prototype.isMatrix3=!0;var lt=eu,Hc=new lt,ud=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dd=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bm(){let s={enabled:!0,workingColorSpace:Un,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Lt&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Lt&&(i.r=Pr(i.r),i.g=Pr(i.g),i.b=Pr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===rs?wa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Un]:{primaries:e,whitePoint:n,transfer:wa,toXYZ:ud,fromXYZ:dd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:Lt,toXYZ:ud,fromXYZ:dd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),s}var bt=Bm();function Ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Pr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var gr,rl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gr===void 0&&(gr=Fr("canvas")),gr.width=e.width,gr.height=e.height;let i=gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ki(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zm=0,kr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Vc(i[a].image)):r.push(Vc(i[a]))}else r=Vc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Vc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}var Gm=0,Wc=new B,mn=class s extends bi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ni,i=ni,r=pn,a=oi,o=li,l=Wn,c=s.DEFAULT_ANISOTROPY,u=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Li(),this.name="",this.source=new kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wc).x}get height(){return this.source.getSize(Wc).y}get depth(){return this.source.getSize(Wc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Ih;mn.DEFAULT_ANISOTROPY=1;var tu=class tu{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],p=l[8],d=l[1],h=l[5],m=l[9],b=l[2],g=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(h+1)/2,E=(f+1)/2,y=(u+d)/4,x=(p+b)/4,T=(m+g)/4;return w>v&&w>E?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=y/n,r=x/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=y/i,r=T/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=x/r,i=T/r),this.set(n,i,r,t),this}let _=Math.sqrt((g-m)*(g-m)+(p-b)*(p-b)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(p-b)/_,this.z=(d-u)/_,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tu.prototype.isVector4=!0;var Ft=tu,al=class extends bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new mn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new kr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Aa=class extends mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ol=class extends mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Sl=class Sl{constructor(e,t,n,i,r,a,o,l,c,u,p,d,h,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,p,d,h,m,b,g)}set(e,t,n,i,r,a,o,l,c,u,p,d,h,m,b,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=p,f[14]=d,f[3]=h,f[7]=m,f[11]=b,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/br.setFromMatrixColumn(e,0).length(),r=1/br.setFromMatrixColumn(e,1).length(),a=1/br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let d=a*u,h=a*p,m=o*u,b=o*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=h+m*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=m+h*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,h=l*p,m=c*u,b=c*p;t[0]=d+b*o,t[4]=m*o-h,t[8]=a*c,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=h*o-m,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,h=l*p,m=c*u,b=c*p;t[0]=d-b*o,t[4]=-a*p,t[8]=m+h*o,t[1]=h+m*o,t[5]=a*u,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,h=a*p,m=o*u,b=o*p;t[0]=l*u,t[4]=m*c-h,t[8]=d*c+b,t[1]=l*p,t[5]=b*c+d,t[9]=h*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,h=a*c,m=o*l,b=o*c;t[0]=l*u,t[4]=b-d*p,t[8]=m*p+h,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*p+m,t[10]=d-b*p}else if(e.order==="XZY"){let d=a*l,h=a*c,m=o*l,b=o*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=d*p+b,t[5]=a*u,t[9]=h*p-m,t[2]=m*p-h,t[6]=o*u,t[10]=b*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hm,e,Vm)}lookAt(e,t,n){let i=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),us.crossVectors(n,jn),us.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),us.crossVectors(n,jn)),us.normalize(),To.crossVectors(jn,us),i[0]=us.x,i[4]=To.x,i[8]=jn.x,i[1]=us.y,i[5]=To.y,i[9]=jn.y,i[2]=us.z,i[6]=To.z,i[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],d=n[9],h=n[13],m=n[2],b=n[6],g=n[10],f=n[14],_=n[3],w=n[7],v=n[11],E=n[15],y=i[0],x=i[4],T=i[8],D=i[12],I=i[1],L=i[5],F=i[9],H=i[13],R=i[2],V=i[6],Q=i[10],Y=i[14],he=i[3],ee=i[7],re=i[11],le=i[15];return r[0]=a*y+o*I+l*R+c*he,r[4]=a*x+o*L+l*V+c*ee,r[8]=a*T+o*F+l*Q+c*re,r[12]=a*D+o*H+l*Y+c*le,r[1]=u*y+p*I+d*R+h*he,r[5]=u*x+p*L+d*V+h*ee,r[9]=u*T+p*F+d*Q+h*re,r[13]=u*D+p*H+d*Y+h*le,r[2]=m*y+b*I+g*R+f*he,r[6]=m*x+b*L+g*V+f*ee,r[10]=m*T+b*F+g*Q+f*re,r[14]=m*D+b*H+g*Y+f*le,r[3]=_*y+w*I+v*R+E*he,r[7]=_*x+w*L+v*V+E*ee,r[11]=_*T+w*F+v*Q+E*re,r[15]=_*D+w*H+v*Y+E*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],p=e[6],d=e[10],h=e[14],m=e[3],b=e[7],g=e[11],f=e[15],_=l*h-c*d,w=o*h-c*p,v=o*d-l*p,E=a*h-c*u,y=a*d-l*u,x=a*p-o*u;return t*(b*_-g*w+f*v)-n*(m*_-g*E+f*y)+i*(m*w-b*E+f*x)-r*(m*v-b*y+g*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=e[9],d=e[10],h=e[11],m=e[12],b=e[13],g=e[14],f=e[15],_=t*o-n*a,w=t*l-i*a,v=t*c-r*a,E=n*l-i*o,y=n*c-r*o,x=i*c-r*l,T=u*b-p*m,D=u*g-d*m,I=u*f-h*m,L=p*g-d*b,F=p*f-h*b,H=d*f-h*g,R=_*H-w*F+v*L+E*I-y*D+x*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/R;return e[0]=(o*H-l*F+c*L)*V,e[1]=(i*F-n*H-r*L)*V,e[2]=(b*x-g*y+f*E)*V,e[3]=(d*y-p*x-h*E)*V,e[4]=(l*I-a*H-c*D)*V,e[5]=(t*H-i*I+r*D)*V,e[6]=(g*v-m*x-f*w)*V,e[7]=(u*x-d*v+h*w)*V,e[8]=(a*F-o*I+c*T)*V,e[9]=(n*I-t*F-r*T)*V,e[10]=(m*y-b*v+f*_)*V,e[11]=(p*v-u*y-h*_)*V,e[12]=(o*D-a*L-l*T)*V,e[13]=(t*L-n*D+i*T)*V,e[14]=(b*w-m*E-g*_)*V,e[15]=(u*E-p*w+d*_)*V,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,p=o+o,d=r*c,h=r*u,m=r*p,b=a*u,g=a*p,f=o*p,_=l*c,w=l*u,v=l*p,E=n.x,y=n.y,x=n.z;return i[0]=(1-(b+f))*E,i[1]=(h+v)*E,i[2]=(m-w)*E,i[3]=0,i[4]=(h-v)*y,i[5]=(1-(d+f))*y,i[6]=(g+_)*y,i[7]=0,i[8]=(m+w)*x,i[9]=(g-_)*x,i[10]=(1-(d+b))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=br.set(i[0],i[1],i[2]).length(),o=br.set(i[4],i[5],i[6]).length(),l=br.set(i[8],i[9],i[10]).length();r<0&&(a=-a),fi.copy(this);let c=1/a,u=1/o,p=1/l;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=p,fi.elements[9]*=p,fi.elements[10]*=p,t.setFromRotationMatrix(fi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=ii,l=!1){let c=this.elements,u=2*r/(t-e),p=2*r/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i),m,b;if(l)m=r/(a-r),b=a*r/(a-r);else if(o===ii)m=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Dr)m=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ii,l=!1){let c=this.elements,u=2/(t-e),p=2/(n-i),d=-(t+e)/(t-e),h=-(n+i)/(n-i),m,b;if(l)m=1/(a-r),b=a/(a-r);else if(o===ii)m=-2/(a-r),b=-(a+r)/(a-r);else if(o===Dr)m=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Sl.prototype.isMatrix4=!0;var Je=Sl,br=new B,fi=new Je,Hm=new B(0,0,0),Vm=new B(1,1,1),us=new B,To=new B,jn=new B,fd=new Je,pd=new Sn,si=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],p=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pd.setFromEuler(this),this.setFromQuaternion(pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var Ea=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wm=0,md=new B,xr=new Sn,Hi=new Je,Ao=new B,da=new B,qm=new B,Xm=new Sn,gd=new B(1,0,0),bd=new B(0,1,0),xd=new B(0,0,1),_d={type:"added"},jm={type:"removed"},_r={type:"childadded",child:null},qc={type:"childremoved",child:null},Dt=class s extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new B,t=new si,n=new Sn,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new lt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(gd,e)}rotateY(e){return this.rotateOnAxis(bd,e)}rotateZ(e){return this.rotateOnAxis(xd,e)}translateOnAxis(e,t){return md.copy(e).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gd,e)}translateY(e){return this.translateOnAxis(bd,e)}translateZ(e){return this.translateOnAxis(xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ao.copy(e):Ao.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(da,Ao,this.up):Hi.lookAt(Ao,da,this.up),this.quaternion.setFromRotationMatrix(Hi),i&&(Hi.extractRotation(i.matrixWorld),xr.setFromRotationMatrix(Hi),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_d),_r.child=e,this.dispatchEvent(_r),_r.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jm),qc.child=e,this.dispatchEvent(qc),qc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_d),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,Xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),p=a(e.shapes),d=a(e.skeletons),h=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Dt.DEFAULT_UP=new B(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Km={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),f=this._getHandJoint(c,b);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),h=.02,m=.005;c.inputState.pinching&&d>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function Xc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=bt.workingColorSpace){if(e=Wh(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Xc(a,r,e+1/3),this.g=Xc(a,r,e),this.b=Xc(a,r,e-1/3)}return bt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=Df[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return bt.workingToColorSpace(In.copy(this),e),Math.round(vt(In.r*255,0,255))*65536+Math.round(vt(In.g*255,0,255))*256+Math.round(vt(In.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(In.copy(this),t);let n=In.r,i=In.g,r=In.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(i-r)/p+(i<r?6:0);break;case i:l=(r-n)/p+2;break;case r:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Ht){bt.workingToColorSpace(In.copy(this),e);let t=In.r,n=In.g,i=In.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(Eo);let n=Ma(ds.h,Eo.h,t),i=Ma(ds.s,Eo.s,t),r=Ma(ds.l,Eo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new Ce;Ce.NAMES=Df;var Ra=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ca=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pi=new B,Vi=new B,jc=new B,Wi=new B,vr=new B,yr=new B,vd=new B,Kc=new B,Jc=new B,Yc=new B,Zc=new Ft,$c=new Ft,Qc=new Ft,bs=class s{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pi.subVectors(e,t),i.cross(pi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){pi.subVectors(i,t),Vi.subVectors(n,t),jc.subVectors(e,t);let a=pi.dot(pi),o=pi.dot(Vi),l=pi.dot(jc),c=Vi.dot(Vi),u=Vi.dot(jc),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,h=(c*l-o*u)*d,m=(a*u-o*l)*d;return r.set(1-h-m,m,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(a,Wi.y),l.addScaledVector(o,Wi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Zc.setScalar(0),$c.setScalar(0),Qc.setScalar(0),Zc.fromBufferAttribute(e,t),$c.fromBufferAttribute(e,n),Qc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Zc,r.x),a.addScaledVector($c,r.y),a.addScaledVector(Qc,r.z),a}static isFrontFacing(e,t,n,i){return pi.subVectors(n,t),Vi.subVectors(e,t),pi.cross(Vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),pi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;vr.subVectors(i,n),yr.subVectors(r,n),Kc.subVectors(e,n);let l=vr.dot(Kc),c=yr.dot(Kc);if(l<=0&&c<=0)return t.copy(n);Jc.subVectors(e,i);let u=vr.dot(Jc),p=yr.dot(Jc);if(u>=0&&p<=u)return t.copy(i);let d=l*p-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(vr,a);Yc.subVectors(e,r);let h=vr.dot(Yc),m=yr.dot(Yc);if(m>=0&&h<=m)return t.copy(r);let b=h*c-l*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(yr,o);let g=u*m-h*p;if(g<=0&&p-u>=0&&h-m>=0)return vd.subVectors(r,i),o=(p-u)/(p-u+(h-m)),t.copy(i).addScaledVector(vd,o);let f=1/(g+b+d);return a=b*f,o=d*f,t.copy(n).addScaledVector(vr,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mi):mi.fromBufferAttribute(r,a),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Co.subVectors(this.max,fa),Mr.subVectors(e.a,fa),Sr.subVectors(e.b,fa),wr.subVectors(e.c,fa),fs.subVectors(Sr,Mr),ps.subVectors(wr,Sr),ks.subVectors(Mr,wr);let t=[0,-fs.z,fs.y,0,-ps.z,ps.y,0,-ks.z,ks.y,fs.z,0,-fs.x,ps.z,0,-ps.x,ks.z,0,-ks.x,-fs.y,fs.x,0,-ps.y,ps.x,0,-ks.y,ks.x,0];return!eh(t,Mr,Sr,wr,Co)||(t=[1,0,0,0,1,0,0,0,1],!eh(t,Mr,Sr,wr,Co))?!1:(Po.crossVectors(fs,ps),t=[Po.x,Po.y,Po.z],eh(t,Mr,Sr,wr,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qi=[new B,new B,new B,new B,new B,new B,new B,new B],mi=new B,Ro=new Yn,Mr=new B,Sr=new B,wr=new B,fs=new B,ps=new B,ks=new B,fa=new B,Co=new B,Po=new B,Us=new B;function eh(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Us.fromArray(s,r);let o=i.x*Math.abs(Us.x)+i.y*Math.abs(Us.y)+i.z*Math.abs(Us.z),l=e.dot(Us),c=t.dot(Us),u=n.dot(Us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var hn=new B,Io=new it,Jm=0,ft=class extends bi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hh,this.updateRanges=[],this.gpuType=Zn,this.version=0,this._normalizationScale=e!==void 0?dc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Io.fromBufferAttribute(this,t),Io.applyMatrix3(e),this.setXY(t,Io.x,Io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Xh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):jh(e,this.array)}};var Pa=class extends ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ia=class extends ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ym=new Yn,pa=new B,th=new B,gn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ym.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);let t=pa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(pa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(th)),this.expandByPoint(pa.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zm=0,ti=new Je,nh=new Dt,Tr=new B,Kn=new Yn,ma=new Yn,Mn=new B,Vt=class s extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mm(e)?Ia:Pa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ma.setFromBufferAttribute(o),this.morphTargetsRelative?(Mn.addVectors(Kn.min,ma.min),Kn.expandByPoint(Mn),Mn.addVectors(Kn.max,ma.max),Kn.expandByPoint(Mn)):(Kn.expandByPoint(ma.min),Kn.expandByPoint(ma.max))}Kn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Mn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Mn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Mn.fromBufferAttribute(o,c),l&&(Tr.fromBufferAttribute(e,c),Mn.add(Tr)),i=Math.max(i,n.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new B,l[D]=new B;let u=new B,p=new B,d=new B,h=new it,m=new it,b=new it,g=new B,f=new B;function _(D,I,L){c[D]=c[I]=c[L]=1,u.fromBufferAttribute(n,D),p.fromBufferAttribute(n,I),d.fromBufferAttribute(n,L),h.fromBufferAttribute(r,D),m.fromBufferAttribute(r,I),b.fromBufferAttribute(r,L),p.sub(u),d.sub(u),m.sub(h),b.sub(h);let F=1/(m.x*b.y-b.x*m.y);isFinite(F)&&(g.copy(p).multiplyScalar(b.y).addScaledVector(d,-m.y).multiplyScalar(F),f.copy(d).multiplyScalar(m.x).addScaledVector(p,-b.x).multiplyScalar(F),o[D].add(g),o[I].add(g),o[L].add(g),l[D].add(f),l[I].add(f),l[L].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,I=w.length;D<I;++D){let L=w[D],F=L.start,H=L.count;for(let R=F,V=F+H;R<V;R+=3)_(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let v=new B,E=new B,y=new B,x=new B;function T(D){y.fromBufferAttribute(i,D),x.copy(y);let I=o[D];v.copy(I),v.sub(y.multiplyScalar(y.dot(I))).normalize(),E.crossVectors(x,I);let F=E.dot(l[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,F)}for(let D=0,I=n.count;D<I;++D)c[D]&&T(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let i=new B,r=new B,a=new B,o=new B,l=new B,c=new B,u=new B,p=new B;if(e)for(let d=0,h=e.count;d<h;d+=3){let m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),u.subVectors(a,r),p.subVectors(i,r),u.cross(p),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),p.subVectors(i,r),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,p=o.normalized,d=new c.constructor(l.length*u),h=0,m=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?h=l[b]*o.data.stride+o.offset:h=l[b]*u;for(let f=0;f<u;f++)d[m++]=c[h++]}return new ft(d,u,p)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,p=c.length;u<p;u++){let d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){let h=c[p];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],p=r[c];for(let d=0,h=p.length;d<h;d++)u.push(p[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hh,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=yd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=yd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function yd(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Li()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var kn=new B,Br=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?dc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Xh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):jh(e,this.data.array)}},ih=new B,$m=new B,Qm=new lt,gi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ih.subVectors(n,t).cross($m.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(ih),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qm.getNormalMatrix(e),i=this.coplanarPoint(ih).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},eg=0,Ln=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=As,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=wh,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new gi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new it().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Xi=new B,sh=new B,Lo=new B,Do=new B,Xs=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){sh.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),Do.copy(this.origin).sub(sh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Lo),o=Do.dot(this.direction),l=-Do.dot(Lo),c=Do.lengthSq(),u=Math.abs(1-a*a),p,d,h,m;if(u>0)if(p=a*l-o,d=a*o-l,m=r*u,p>=0)if(d>=-m)if(d<=m){let b=1/u;p*=b,d*=b,h=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=r,p=Math.max(0,-(a*d+o)),h=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(a*d+o)),h=-p*p+d*(d+2*l)+c;else d<=-m?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),h=-p*p+d*(d+2*l)+c):d<=m?(p=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),h=-p*p+d*(d+2*l)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),h=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(sh).addScaledVector(Lo,d),h}intersectSphere(e,t){if(e.radius<0)return null;Xi.subVectors(e.center,this.origin);let n=Xi.dot(this.direction),i=Xi.dot(Xi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,p=e.x-a.x,d=e.y-a.y,h=e.z-a.z,m=t.x-a.x,b=t.y-a.y,g=t.z-a.z,f=n.x-a.x,_=n.y-a.y,w=n.z-a.z,v=Math.abs(l),E=Math.abs(c),y=Math.abs(u),x,T,D,I,L,F,H,R,V,Q,Y,he;if(v>=E&&v>=y?(D=l,F=p,V=m,he=f,l>=0?(x=c,T=u,I=d,L=h,H=b,R=g,Q=_,Y=w):(x=u,T=c,I=h,L=d,H=g,R=b,Q=w,Y=_)):E>=y?(D=c,F=d,V=b,he=_,c>=0?(x=u,T=l,I=h,L=p,H=g,R=m,Q=w,Y=f):(x=l,T=u,I=p,L=h,H=m,R=g,Q=f,Y=w)):(D=u,F=h,V=g,he=w,u>=0?(x=l,T=c,I=p,L=d,H=m,R=b,Q=f,Y=_):(x=c,T=l,I=d,L=p,H=b,R=m,Q=_,Y=f)),D===0)return null;let ee=x/D,re=T/D,le=1/D,Ge=I-ee*F,ot=L-re*F,ne=H-ee*V,Ee=R-re*V,qe=Q-ee*he,Ke=Y-re*he,Pe=qe*Ee-Ke*ne,st=Ge*Ke-ot*qe,wt=ne*ot-Ee*Ge;if(i){if(Pe<0||st<0||wt<0)return null}else if((Pe<0||st<0||wt<0)&&(Pe>0||st>0||wt>0))return null;let Ze=Pe+st+wt;if(Ze===0)return null;let At=le*(Pe*F+st*V+wt*he);return(Ze>0?At<0:At>0)?null:this.at(At/Ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Md=new Je,Os=new Xs,Fo=new gn,Sd=new B,No=new B,ko=new B,Uo=new B,rh=new B,Oo=new B,wd=new B,Bo=new B,Ye=class extends Dt{constructor(e=new Vt,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],p=r[l];u!==0&&(rh.fromBufferAttribute(p,e),a?Oo.addScaledVector(rh,u):Oo.addScaledVector(rh.sub(t),u))}t.add(Oo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(Fo.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Fo,Sd)===null||Os.origin.distanceToSquared(Sd)>(e.far-e.near)**2))&&(Md.copy(r).invert(),Os.copy(e.ray).applyMatrix4(Md),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],f=a[g.materialIndex],_=Math.max(g.start,h.start),w=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let v=_,E=w;v<E;v+=3){let y=o.getX(v),x=o.getX(v+1),T=o.getX(v+2);i=zo(this,f,e,n,c,u,p,y,x,T),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,h.start),b=Math.min(o.count,h.start+h.count);for(let g=m,f=b;g<f;g+=3){let _=o.getX(g),w=o.getX(g+1),v=o.getX(g+2);i=zo(this,a,e,n,c,u,p,_,w,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],f=a[g.materialIndex],_=Math.max(g.start,h.start),w=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let v=_,E=w;v<E;v+=3){let y=v,x=v+1,T=v+2;i=zo(this,f,e,n,c,u,p,y,x,T),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,h.start),b=Math.min(l.count,h.start+h.count);for(let g=m,f=b;g<f;g+=3){let _=g,w=g+1,v=g+2;i=zo(this,a,e,n,c,u,p,_,w,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function tg(s,e,t,n,i,r,a,o){let l;if(e.side===Rn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Pi,o),l===null)return null;Bo.copy(o),Bo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Bo);return c<t.near||c>t.far?null:{distance:c,point:Bo.clone(),object:s}}function zo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,No),s.getVertexPosition(l,ko),s.getVertexPosition(c,Uo);let u=tg(s,e,t,n,No,ko,Uo,wd);if(u){let p=new B;bs.getBarycoord(wd,No,ko,Uo,p),i&&(u.uv=bs.getInterpolatedAttribute(i,o,l,c,p,new it)),r&&(u.uv1=bs.getInterpolatedAttribute(r,o,l,c,p,new it)),a&&(u.normal=bs.getInterpolatedAttribute(a,o,l,c,p,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new B,materialIndex:0};bs.getNormal(No,ko,Uo,d.normal),u.face=d,u.barycoord=p}return u}var ga=new Ft,Td=new Ft,Ad=new Ft,ng=new Ft,Ed=new Je,Go=new B,ah=new gn,Rd=new Je,oh=new Xs,js=class extends Ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uh,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Go),this.boundingBox.expandByPoint(Go)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Go),this.boundingSphere.expandByPoint(Go)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ah.copy(this.boundingSphere),ah.applyMatrix4(i),e.ray.intersectsSphere(ah)!==!1&&(Rd.copy(i).invert(),oh.copy(e.ray).applyMatrix4(Rd),!(this.boundingBox!==null&&oh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,oh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xf?this.bindMatrixInverse.copy(this.bindMatrix).invert():je("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Td.fromBufferAttribute(i.attributes.skinIndex,e),Ad.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(ga.copy(t),t.set(0,0,0,0)):(ga.set(t.x,t.y,t.z,1),t.set(0,0,0)),ga.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Ad.getComponent(r);if(a!==0){let o=Td.getComponent(r);Ed.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ng.copy(ga).applyMatrix4(Ed),a)}}return t.isVector4&&(t.w=ga.w),t.applyMatrix4(this.bindMatrixInverse)}},zr=class extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},_s=class extends mn{constructor(e=null,t=1,n=1,i,r,a,o,l,c=en,u=en,p,d){super(null,a,o,l,c,u,i,r,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Cd=new Je,ig=new Je,Ks=class s{constructor(e=[],t=[]){this.uuid=Li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){je("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:ig;Cd.multiplyMatrices(o,t[r]),Cd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _s(t,e,e,li,Zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(je("Skeleton: No bone found with UUID:",r),a=new zr),this.bones.push(a),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Yi=class extends ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ar=new Je,Pd=new Je,Ho=[],Id=new Yn,sg=new Je,ba=new Ye,xa=new gn,Dn=class extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,sg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ar),Id.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(Id)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ar),xa.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(n),e.ray.intersectsSphere(xa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ar),Pd.multiplyMatrices(n,Ar),ba.matrixWorld=Pd,ba.raycast(e,Ho);for(let a=0,o=Ho.length;a<o;a++){let l=Ho[a];l.instanceId=r,l.object=this,t.push(l)}Ho.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _s(new Float32Array(i*this.count),i,this.count,$r,Zn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bs=new gn,rg=new it(.5,.5),Vo=new B,vs=class{constructor(e=new gi,t=new gi,n=new gi,i=new gi,r=new gi,a=new gi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],p=r[5],d=r[6],h=r[7],m=r[8],b=r[9],g=r[10],f=r[11],_=r[12],w=r[13],v=r[14],E=r[15];if(i[0].setComponents(c-a,h-u,f-m,E-_).normalize(),i[1].setComponents(c+a,h+u,f+m,E+_).normalize(),i[2].setComponents(c+o,h+p,f+b,E+w).normalize(),i[3].setComponents(c-o,h-p,f-b,E-w).normalize(),n)i[4].setComponents(l,d,g,v).normalize(),i[5].setComponents(c-l,h-d,f-g,E-v).normalize();else if(i[4].setComponents(c-l,h-d,f-g,E-v).normalize(),t===ii)i[5].setComponents(c+l,h+d,f+g,E+v).normalize();else if(t===Dr)i[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);let t=rg.distanceTo(e.center);return Bs.radius=.7071067811865476+t,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Vo.x=i.normal.x>0?e.max.x:e.min.x,Vo.y=i.normal.y>0?e.max.y:e.min.y,Vo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ld=new Je,ll=class s{constructor(){this.coordinateSystem=ii,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];Ld.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new vs),n[i].setFromProjectionMatrix(Ld,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new vs),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var Gr=class extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},cl=new B,hl=new B,Dd=new Je,_a=new Xs,Wo=new gn,lh=new B,Fd=new B,Js=class extends Dt{constructor(e=new Vt,t=new Gr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)cl.fromBufferAttribute(t,i-1),hl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=cl.distanceTo(hl);e.setAttribute("lineDistance",new Mt(n,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(i),Wo.radius+=r,e.ray.intersectsSphere(Wo)===!1)return;Dd.copy(i).invert(),_a.copy(e.ray).applyMatrix4(Dd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let h=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let b=h,g=m-1;b<g;b+=c){let f=u.getX(b),_=u.getX(b+1),w=qo(this,e,_a,l,f,_,b);w&&t.push(w)}if(this.isLineLoop){let b=u.getX(m-1),g=u.getX(h),f=qo(this,e,_a,l,b,g,m-1);f&&t.push(f)}}else{let h=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let b=h,g=m-1;b<g;b+=c){let f=qo(this,e,_a,l,b,b+1,b);f&&t.push(f)}if(this.isLineLoop){let b=qo(this,e,_a,l,m-1,h,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qo(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(cl.fromBufferAttribute(o,i),hl.fromBufferAttribute(o,r),t.distanceSqToSegment(cl,hl,lh,Fd)>n)return;lh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(lh);if(!(c<e.near||c>e.far))return{distance:c,point:Fd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Nd=new B,kd=new B,La=class extends Js{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Nd.fromBufferAttribute(t,i),kd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Nd.distanceTo(kd);e.setAttribute("lineDistance",new Mt(n,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Da=class extends Js{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Hr=class extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ud=new Je,fh=new Xs,Xo=new gn,jo=new B,ys=class extends Dt{constructor(e=new Vt,t=new Hr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(i),Xo.radius+=r,e.ray.intersectsSphere(Xo)===!1)return;Ud.copy(i).invert(),fh.copy(e.ray).applyMatrix4(Ud);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let m=d,b=h;m<b;m++){let g=c.getX(m);jo.fromBufferAttribute(p,g),Od(jo,g,l,i,e,t,this)}}else{let d=Math.max(0,a.start),h=Math.min(p.count,a.start+a.count);for(let m=d,b=h;m<b;m++)jo.fromBufferAttribute(p,m),Od(jo,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Od(s,e,t,n,i,r,a){let o=fh.distanceSqToPoint(s);if(o<t){let l=new B;fh.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Fa=class extends mn{constructor(e=[],t=rr,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Na=class extends mn{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zi=class extends mn{constructor(e,t,n=_i,i,r,a,o=en,l=en,c,u=Ji,p=1){if(u!==Ji&&u!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:p};super(d,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ka=class extends Zi{constructor(e,t=_i,n=rr,i,r,a=en,o=en,l,c=Ji){let u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,n,i,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ua=class extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$i=class s extends Vt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],p=[],d=0,h=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(p,2));function m(b,g,f,_,w,v,E,y,x,T,D){let I=v/x,L=E/T,F=v/2,H=E/2,R=y/2,V=x+1,Q=T+1,Y=0,he=0,ee=new B;for(let re=0;re<Q;re++){let le=re*L-H;for(let Ge=0;Ge<V;Ge++){let ot=Ge*I-F;ee[b]=ot*_,ee[g]=le*w,ee[f]=R,c.push(ee.x,ee.y,ee.z),ee[b]=0,ee[g]=0,ee[f]=y>0?1:-1,u.push(ee.x,ee.y,ee.z),p.push(Ge/x),p.push(1-re/T),Y+=1}}for(let re=0;re<T;re++)for(let le=0;le<x;le++){let Ge=d+le+V*re,ot=d+le+V*(re+1),ne=d+(le+1)+V*(re+1),Ee=d+(le+1)+V*re;l.push(Ge,ot,Ee),l.push(ot,ne,Ee),he+=6}o.addGroup(h,he,D),h+=he,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Oa=class s extends Vt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=t/2,p=Math.PI/2*e,d=t,h=2*p+d,m=n*2+r,b=i+1,g=new B,f=new B;for(let _=0;_<=m;_++){let w=0,v=0,E=0,y=0;if(_<=n){let D=_/n,I=D*Math.PI/2;v=-u-e*Math.cos(I),E=e*Math.sin(I),y=-e*Math.cos(I),w=D*p}else if(_<=n+r){let D=(_-n)/r;v=-u+D*t,E=e,y=0,w=p+D*d}else{let D=(_-n-r)/n,I=D*Math.PI/2;v=u+e*Math.sin(I),E=e*Math.cos(I),y=e*Math.sin(I),w=p+d+D*p}let x=Math.max(0,Math.min(1,w/h)),T=0;_===0?T=.5/i:_===m&&(T=-.5/i);for(let D=0;D<=i;D++){let I=D/i,L=I*Math.PI*2,F=Math.sin(L),H=Math.cos(L);f.x=-E*H,f.y=v,f.z=E*F,o.push(f.x,f.y,f.z),g.set(-E*H,y,E*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(I+T,x)}if(_>0){let D=(_-1)*b;for(let I=0;I<i;I++){let L=D+I,F=D+I+1,H=_*b+I,R=_*b+I+1;a.push(L,F,H),a.push(F,R,H)}}}this.setIndex(a),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ba=class s extends Vt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new B,u=new it;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=t;p++,d+=3){let h=n+p/t*i;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(o,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ri=class s extends Vt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],p=[],d=[],h=[],m=0,b=[],g=n/2,f=0;_(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Mt(p,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(h,2));function _(){let v=new B,E=new B,y=0,x=(t-e)/n;for(let T=0;T<=r;T++){let D=[],I=T/r,L=I*(t-e)+e;for(let F=0;F<=i;F++){let H=F/i,R=H*l+o,V=Math.sin(R),Q=Math.cos(R);E.x=L*V,E.y=-I*n+g,E.z=L*Q,p.push(E.x,E.y,E.z),v.set(V,x,Q).normalize(),d.push(v.x,v.y,v.z),h.push(H,1-I),D.push(m++)}b.push(D)}for(let T=0;T<i;T++)for(let D=0;D<r;D++){let I=b[D][T],L=b[D+1][T],F=b[D+1][T+1],H=b[D][T+1];(e>0||D!==0)&&(u.push(I,L,H),y+=3),(t>0||D!==r-1)&&(u.push(L,F,H),y+=3)}c.addGroup(f,y,0),f+=y}function w(v){let E=m,y=new it,x=new B,T=0,D=v===!0?e:t,I=v===!0?1:-1;for(let F=1;F<=i;F++)p.push(0,g*I,0),d.push(0,I,0),h.push(.5,.5),m++;let L=m;for(let F=0;F<=i;F++){let R=F/i*l+o,V=Math.cos(R),Q=Math.sin(R);x.x=D*Q,x.y=g*I,x.z=D*V,p.push(x.x,x.y,x.z),d.push(0,I,0),y.x=V*.5+.5,y.y=Q*.5*I+.5,h.push(y.x,y.y),m++}for(let F=0;F<i;F++){let H=E+F,R=L+F;v===!0?u.push(R,R+1,H):u.push(R+1,R,H),T+=3}c.addGroup(f,T,v===!0?1:2),f+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vr=class s extends ri{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Wr=class s extends Vt{constructor(e=[new it(0,-.5),new it(.5,0),new it(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=vt(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,p=new B,d=new it,h=new B,m=new B,b=new B,g=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,h.x=f*1,h.y=-g,h.z=f*0,b.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:b.normalize(),l.push(b.x,b.y,b.z);break;default:g=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,h.x=f*1,h.y=-g,h.z=f*0,m.copy(h),h.x+=b.x,h.y+=b.y,h.z+=b.z,h.normalize(),l.push(h.x,h.y,h.z),b.copy(m)}for(let _=0;_<=t;_++){let w=n+_*u*i,v=Math.sin(w),E=Math.cos(w);for(let y=0;y<=e.length-1;y++){p.x=e[y].x*v,p.y=e[y].y,p.z=e[y].x*E,a.push(p.x,p.y,p.z),d.x=_/t,d.y=y/(e.length-1),o.push(d.x,d.y);let x=l[3*y+0]*v,T=l[3*y+1],D=l[3*y+0]*E;c.push(x,T,D)}}for(let _=0;_<t;_++)for(let w=0;w<e.length-1;w++){let v=w+_*e.length,E=v,y=v+e.length,x=v+e.length+1,T=v+1;r.push(E,y,T),r.push(x,T,y)}this.setIndex(r),this.setAttribute("position",new Mt(a,3)),this.setAttribute("uv",new Mt(o,2)),this.setAttribute("normal",new Mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Ms=class s extends Vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,p=e/o,d=t/l,h=[],m=[],b=[],g=[];for(let f=0;f<u;f++){let _=f*d-a;for(let w=0;w<c;w++){let v=w*p-r;m.push(v,-_,0),b.push(0,0,1),g.push(w/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){let w=_+c*f,v=_+c*(f+1),E=_+1+c*(f+1),y=_+1+c*f;h.push(w,v,y),h.push(v,E,y)}this.setIndex(h),this.setAttribute("position",new Mt(m,3)),this.setAttribute("normal",new Mt(b,3)),this.setAttribute("uv",new Mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},za=class s extends Vt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],u=[],p=e,d=(t-e)/i,h=new B,m=new it;for(let b=0;b<=i;b++){for(let g=0;g<=n;g++){let f=r+g/n*a;h.x=p*Math.cos(f),h.y=p*Math.sin(f),l.push(h.x,h.y,h.z),c.push(0,0,1),m.x=(h.x/t+1)/2,m.y=(h.y/t+1)/2,u.push(m.x,m.y)}p+=d}for(let b=0;b<i;b++){let g=b*(n+1);for(let f=0;f<n;f++){let _=f+g,w=_,v=_+n+1,E=_+n+2,y=_+1;o.push(w,v,y),o.push(v,E,y)}}this.setIndex(o),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ai=class s extends Vt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],p=new B,d=new B,h=[],m=[],b=[],g=[];for(let f=0;f<=n;f++){let _=[],w=f/n,v=a+w*o,E=e*Math.cos(v),y=Math.sqrt(e*e-E*E),x=0;f===0&&a===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){let D=T/t,I=i+D*r;p.x=-y*Math.cos(I),p.y=E,p.z=y*Math.sin(I),m.push(p.x,p.y,p.z),d.copy(p).normalize(),b.push(d.x,d.y,d.z),g.push(D+x,1-w),_.push(c++)}u.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){let w=u[f][_+1],v=u[f][_],E=u[f+1][_],y=u[f+1][_+1];(f!==0||a>0)&&h.push(w,v,y),(f!==n-1||l<Math.PI)&&h.push(v,E,y)}this.setIndex(h),this.setAttribute("position",new Mt(m,3)),this.setAttribute("normal",new Mt(b,3)),this.setAttribute("uv",new Mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ga=class s extends Vt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],u=[],p=[],d=new B,h=new B,m=new B;for(let b=0;b<=n;b++){let g=a+b/n*o;for(let f=0;f<=i;f++){let _=f/i*r;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),c.push(h.x,h.y,h.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),m.subVectors(h,d).normalize(),u.push(m.x,m.y,m.z),p.push(f/i),p.push(b/n)}}for(let b=1;b<=n;b++)for(let g=1;g<=i;g++){let f=(i+1)*b+g-1,_=(i+1)*(b-1)+g-1,w=(i+1)*(b-1)+g,v=(i+1)*b+g;l.push(f,_,v),l.push(_,w,v)}this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function lr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Bd(i))i.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Bd(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Fn(s){let e={};for(let t=0;t<s.length;t++){let n=lr(s[t]);for(let i in n)e[i]=n[i]}return e}function Bd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function ag(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Kh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var Ff={clone:lr,merge:Fn},og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=og,this.fragmentShader=lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=ag(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ce().setHex(i.value);break;case"v2":this.uniforms[n].value=new it().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ft().fromArray(i.value);break;case"m3":this.uniforms[n].value=new lt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ul=class extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ys=class extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bn=class extends Ys{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Hs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Hs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Zs=class extends Ln{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ss=class extends Ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=wl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dl=class extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fl=class extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function va(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function cg(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function zd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function hg(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var Ri=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pl=class extends Ri{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zs,endingEnd:zs}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gs:r=e,o=2*t-n;break;case Sa:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gs:a=e,l=2*n-t;break;case Sa:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,h=this._weightNext,m=(n-t)/(i-t),b=m*m,g=b*m,f=-d*g+2*d*b-d*m,_=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,w=(-1-h)*g+(1.5+h)*b+.5*m,v=h*g-h*b;for(let E=0;E!==o;++E)r[E]=f*a[u+E]+_*a[c+E]+w*a[l+E]+v*a[p+E];return r}},Ha=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),p=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*p+a[l+d]*u;return r}},ml=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},gl=class extends Ri{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let m=(n-t)/(i-t),b=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*b+a[l+g]*m;return r}let d=o*2,h=e-1;for(let m=0;m!==o;++m){let b=a[c+m],g=a[l+m],f=h*d+m*2,_=p[f],w=p[f+1],v=e*d+m*2,E=u[v],y=u[v+1],x=dg(n,t,_,E,i);r[m]=Nf(x,b,w,y,g)}return r}};function Nf(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function ug(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function dg(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=Nf(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=ug(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Vn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),va(e.settings)&&(n.settings={inTangents:gs(e.settings.inTangents,Array),outTangents:gs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new gl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case Yo:t=this.InterpolantFactoryMethodSmooth;break;case dh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return Yo;case this.InterpolantFactoryMethodBezier:return dh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;va(this.settings)&&(Gd(this.settings.inTangents,e),Gd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;va(this.settings)&&(Hd(this.settings.inTangents,e),Hd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(at("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(at("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){at("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){at("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Sm(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){at("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Yo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let p=o*n,d=p-n,h=p+n;for(let m=0;m!==n;++m){let b=t[p+m];if(b!==t[d+m]||b!==t[h+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let p=o*n,d=a*n;for(let h=0;h!==n;++h)t[d+h]=t[p+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,va(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Gd(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Hd(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Ws;var Qi=class extends Vn{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Vs;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends Vn{constructor(e,t,n,i){super(e,t,n,i)}};Va.prototype.ValueTypeName="color";var es=class extends Vn{constructor(e,t,n,i){super(e,t,n,i)}};es.prototype.ValueTypeName="number";var bl=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)Sn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ts=class extends Vn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new bl(this.times,this.values,this.getValueSize(),e)}};ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Vn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Vs;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends Vn{constructor(e,t,n,i){super(e,t,n,i)}};ws.prototype.ValueTypeName="vector";var $s=class{constructor(e="",t=-1,n=[],i=uc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Li(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(pg(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Vn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=cg(l);l=zd(l,1,u),c=zd(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new es(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let p=u[1],d=i[p];d||(i[p]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function fg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return es;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return Va;case"quaternion":return ts;case"bool":case"boolean":return Qi;case"string":return ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function pg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=fg(s.type);if(s.times===void 0){let n=[],i=[];hg(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),va(s.settings)&&(t.settings={inTangents:gs(s.settings.inTangents,Float32Array),outTangents:gs(s.settings.outTangents,Float32Array)}),t}var Ei={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Vd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Vd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Vd(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var xl=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=c.length;p<d;p+=2){let h=c[p],m=c[p+1];if(h.global&&(h.lastIndex=0),h.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kf=new xl,Ci=class{constructor(e){this.manager=e!==void 0?e:kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ci.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji={},ph=class extends Error{constructor(e,t){super(e),this.response=t}},qr=class extends Ci{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ei.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:n,onError:i});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&je("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ji[e],p=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=d?parseInt(d):0,m=h!==0,b=0,g=new ReadableStream({start(f){_();function _(){p.read().then(({done:w,value:v})=>{if(w)f.close();else{b+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:h});for(let y=0,x=u.length;y<x;y++){let T=u[y];T.onProgress&&T.onProgress(E)}f.enqueue(v),_()}},w=>{f.error(w)})}}});return new Response(g)}else throw new ph(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let p=/charset="?([^;"\s]*)"?/i.exec(o),d=p&&p[1]?p[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(m=>h.decode(m))}}}).then(c=>{Ei.add(`file:${e}`,c);let u=ji[e];delete ji[e];for(let p=0,d=u.length;p<d;p++){let h=u[p];h.onLoad&&h.onLoad(c)}}).catch(c=>{let u=ji[e];if(u===void 0)throw this.manager.itemError(e),c;delete ji[e];for(let p=0,d=u.length;p<d;p++){let h=u[p];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Er=new WeakMap,_l=class extends Ci{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ei.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let p=Er.get(a);p===void 0&&(p=[],Er.set(a,p)),p.push({onLoad:t,onError:i})}return a}let o=Fr("img");function l(){u(),t&&t(this);let p=Er.get(this)||[];for(let d=0;d<p.length;d++){let h=p[d];h.onLoad&&h.onLoad(this)}Er.delete(this),r.manager.itemEnd(e)}function c(p){u(),i&&i(p),Ei.remove(`image:${e}`);let d=Er.get(this)||[];for(let h=0;h<d.length;h++){let m=d[h];m.onError&&m.onError(p)}Er.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ei.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Qs=class extends Ci{constructor(e){super(e)}load(e,t,n,i){let r=new mn,a=new _l(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ts=class extends Dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wa=class extends Ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ch=new Je,Wd=new B,qd=new B,Xr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Wd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wd),qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){ch.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ch,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Dr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ko=new B,Jo=new Sn,Ai=new B,qa=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ko,Jo,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Jo,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ko,Jo,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Jo,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ms=new B,Xd=new it,jd=new it,fn=class extends qa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,Xd,jd),t.subVectors(jd,Xd)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ya*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mh=class extends Xr{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=qs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Xa=class extends Ts{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new mh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},gh=class extends Xr{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}},er=class extends Ts{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},tr=class extends qa{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bh=class extends Xr{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nr=class extends Ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new bh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ja=class extends Ts{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var is=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var hh=new WeakMap,Ka=class extends Ci{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&je("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&je("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ei.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{hh.has(a)===!0?(i&&i(hh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ei.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),hh.set(l,c),Ei.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ei.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Rr=-90,Cr=1,jr=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new fn(Rr,Cr,e,t);i.layers=this.layers,this.add(i);let r=new fn(Rr,Cr,e,t);r.layers=this.layers,this.add(r);let a=new fn(Rr,Cr,e,t);a.layers=this.layers,this.add(a);let o=new fn(Rr,Cr,e,t);o.layers=this.layers,this.add(o);let l=new fn(Rr,Cr,e,t);l.layers=this.layers,this.add(l);let c=new fn(Rr,Cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,d,h),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},vl=class extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var yl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Sn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;Sn.multiplyQuaternionsFlat(e,a,e,t,e,n),Sn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Jh="\\[\\]\\.:\\/",mg=new RegExp("["+Jh+"]","g"),Yh="[^"+Jh+"]",gg="[^"+Jh.replace("\\.","")+"]",bg=/((?:WC+[\/:])*)/.source.replace("WC",Yh),xg=/(WCOD+)?/.source.replace("WCOD",gg),_g=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yh),vg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yh),yg=new RegExp("^"+bg+xg+_g+vg+"$"),Mg=["material","materials","bones","map"],xh=class{constructor(e,t,n){let i=n||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},zt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mg,"")}static parseTrackName(e){let t=yg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Mg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){at("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){at("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){at("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){at("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){at("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;at("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=xh;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ml=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:zs,endingEnd:zs};for(let c=0;c!==a;++c){let u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=so,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case vf:for(let u=0,p=l.length;u!==p;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case uc:default:for(let u=0,p=l.length;u!==p;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===_f;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===hc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Gs,i.endingEnd=Gs):(e?i.endingStart=this.zeroSlopeAtStart?Gs:zs:i.endingStart=Sa,t?i.endingEnd=this.zeroSlopeAtEnd?Gs:zs:i.endingEnd=Sa)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},Sg=new Float32Array(1),Ja=class extends bi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let p=0;p!==r;++p){let d=i[p],h=d.name,m=u[h];if(m!==void 0)++m.referenceCount,a[p]=m;else{if(m=a[p],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,h));continue}let b=t&&t._propertyBindings[p].binding.parsedPath;m=new yl(zt.create(n,h,b),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,h),a[p]=m}o[p].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let p=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete p[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ha(new Float32Array(2),new Float32Array(2),1,Sg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?$s.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=uc),l!==void 0){let p=l.actionByRoot[r];if(p!==void 0&&p.blendMode===n)return p;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let u=new Ml(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?$s.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let u=c._cacheIndex,p=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,p._cacheIndex=u,t[u]=p,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var nu=class nu{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};nu.prototype.isMatrix2=!0;var _h=nu;function Zh(s,e,t,n){let i=wg(n);switch(t){case kh:return s*e;case $r:return s*e/i.components*i.byteLength;case Il:return s*e/i.components*i.byteLength;case Es:return s*e*2/i.components*i.byteLength;case Ll:return s*e*2/i.components*i.byteLength;case Uh:return s*e*3/i.components*i.byteLength;case li:return s*e*4/i.components*i.byteLength;case Dl:return s*e*4/i.components*i.byteLength;case $a:case Qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nl:case Ul:return Math.max(s,16)*Math.max(e,8)/4;case Fl:case kl:return Math.max(s,8)*Math.max(e,8)/2;case Ol:case Bl:case Gl:case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zl:case no:case Vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case jl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ec:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case tc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case nc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case sc:case rc:case ac:return Math.ceil(s/4)*Math.ceil(e/4)*16;case oc:case lc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case io:case cc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wg(s){switch(s){case Wn:case Lh:return{byteLength:1,components:1};case Zr:case Dh:case vi:return{byteLength:2,components:1};case Cl:case Pl:return{byteLength:2,components:4};case _i:case Rl:case Zn:return{byteLength:4,components:1};case Fh:case Nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function sp(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ag(s){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,p=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=s.HALF_FLOAT:h=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=s.SHORT;else if(c instanceof Uint32Array)h=s.UNSIGNED_INT;else if(c instanceof Int32Array)h=s.INT;else if(c instanceof Int8Array)h=s.BYTE;else if(c instanceof Uint8Array)h=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let u=l.array,p=l.updateRanges;if(s.bindBuffer(c,o),p.length===0)s.bufferSubData(c,0,u);else{p.sort((h,m)=>h.start-m.start);let d=0;for(let h=1;h<p.length;h++){let m=p[d],b=p[h];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,p[d]=b)}p.length=d+1;for(let h=0,m=p.length;h<m;h++){let b=p[h];s.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Eg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rg=`#ifdef USE_ALPHAHASH
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
#endif`,Cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ig=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dg=`#ifdef USE_AOMAP
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
#endif`,Fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ng=`#ifdef USE_BATCHING
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
#endif`,kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ug=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zg=`#ifdef USE_IRIDESCENCE
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
#endif`,Gg=`#ifdef USE_BUMPMAP
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
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yg=`#define PI 3.141592653589793
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
} // validated`,Zg=`vec3 transformedNormal = objectNormal;
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
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n0="gl_FragColor = linearToOutputTexel( gl_FragColor );",i0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f0=`#ifdef USE_GRADIENTMAP
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
}`,p0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,x0=`#ifdef USE_ENVMAP
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
#endif`,_0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S0=`PhysicalMaterial material;
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
#endif`,w0=`uniform sampler2D dfgLUT;
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
}`,T0=`
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
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
#endif`,E0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,C0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k0=`#if defined( USE_POINTS_UV )
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
#endif`,U0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z0=`#if defined( USE_MORPHCOLORS )
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
#endif`,G0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`#ifdef USE_MORPHTARGETS
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
#endif`,V0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,J0=`#ifdef USE_NORMALMAP
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
#endif`,Y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ab=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ub=`float getShadowMask() {
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
}`,db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fb=`#ifdef USE_SKINNING
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
#endif`,pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mb=`#ifdef USE_SKINNING
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
#endif`,gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_b=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vb=`#ifdef USE_TRANSMISSION
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
#endif`,yb=`#ifdef USE_TRANSMISSION
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eb=`uniform sampler2D t2D;
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
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`uniform float backgroundBlurriness;
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
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lb=`#include <common>
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
}`,Db=`#if DEPTH_PACKING == 3200
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
}`,Fb=`#define DISTANCE
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
}`,Nb=`#define DISTANCE
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
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`uniform float scale;
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
}`,Bb=`uniform vec3 diffuse;
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
}`,zb=`#include <common>
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Hb=`#define LAMBERT
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
}`,Vb=`#define LAMBERT
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
}`,Wb=`#define MATCAP
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
}`,qb=`#define MATCAP
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
}`,Xb=`#define NORMAL
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
}`,jb=`#define NORMAL
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
}`,Kb=`#define PHONG
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
}`,Jb=`#define PHONG
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
}`,Yb=`#define STANDARD
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
}`,Zb=`#define STANDARD
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
}`,$b=`#define TOON
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
}`,Qb=`#define TOON
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
}`,ex=`uniform float size;
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
}`,tx=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 color;
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
}`,sx=`uniform float rotation;
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
}`,rx=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:Eg,alphahash_pars_fragment:Rg,alphamap_fragment:Cg,alphamap_pars_fragment:Pg,alphatest_fragment:Ig,alphatest_pars_fragment:Lg,aomap_fragment:Dg,aomap_pars_fragment:Fg,batching_pars_vertex:Ng,batching_vertex:kg,begin_vertex:Ug,beginnormal_vertex:Og,bsdfs:Bg,iridescence_fragment:zg,bumpmap_pars_fragment:Gg,clipping_planes_fragment:Hg,clipping_planes_pars_fragment:Vg,clipping_planes_pars_vertex:Wg,clipping_planes_vertex:qg,color_fragment:Xg,color_pars_fragment:jg,color_pars_vertex:Kg,color_vertex:Jg,common:Yg,defaultnormal_vertex:Zg,displacementmap_pars_vertex:$g,displacementmap_vertex:Qg,emissivemap_fragment:e0,emissivemap_pars_fragment:t0,colorspace_fragment:n0,colorspace_pars_fragment:i0,envmap_fragment:s0,envmap_common_pars_fragment:r0,envmap_pars_fragment:a0,envmap_pars_vertex:o0,envmap_physical_pars_fragment:x0,envmap_vertex:l0,fog_vertex:c0,fog_pars_vertex:h0,fog_fragment:u0,fog_pars_fragment:d0,gradientmap_pars_fragment:f0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:g0,lights_pars_begin:b0,lights_toon_fragment:_0,lights_toon_pars_fragment:v0,lights_phong_fragment:y0,lights_phong_pars_fragment:M0,lights_physical_fragment:S0,lights_physical_pars_fragment:w0,lights_fragment_begin:T0,lights_fragment_maps:A0,lights_fragment_end:E0,lightprobes_pars_fragment:R0,logdepthbuf_fragment:C0,logdepthbuf_pars_fragment:P0,logdepthbuf_pars_vertex:I0,logdepthbuf_vertex:L0,map_fragment:D0,map_pars_fragment:F0,map_particle_fragment:N0,map_particle_pars_fragment:k0,metalnessmap_fragment:U0,metalnessmap_pars_fragment:O0,morphinstance_vertex:B0,morphcolor_vertex:z0,morphnormal_vertex:G0,morphtarget_pars_vertex:H0,morphtarget_vertex:V0,normal_fragment_begin:W0,normal_fragment_maps:q0,normal_pars_fragment:X0,normal_pars_vertex:j0,normal_vertex:K0,normalmap_pars_fragment:J0,clearcoat_normal_fragment_begin:Y0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:$0,iridescence_pars_fragment:Q0,opaque_fragment:eb,packing:tb,premultiplied_alpha_fragment:nb,project_vertex:ib,dithering_fragment:sb,dithering_pars_fragment:rb,roughnessmap_fragment:ab,roughnessmap_pars_fragment:ob,shadowmap_pars_fragment:lb,shadowmap_pars_vertex:cb,shadowmap_vertex:hb,shadowmask_pars_fragment:ub,skinbase_vertex:db,skinning_pars_vertex:fb,skinning_vertex:pb,skinnormal_vertex:mb,specularmap_fragment:gb,specularmap_pars_fragment:bb,tonemapping_fragment:xb,tonemapping_pars_fragment:_b,transmission_fragment:vb,transmission_pars_fragment:yb,uv_pars_fragment:Mb,uv_pars_vertex:Sb,uv_vertex:wb,worldpos_vertex:Tb,background_vert:Ab,background_frag:Eb,backgroundCube_vert:Rb,backgroundCube_frag:Cb,cube_vert:Pb,cube_frag:Ib,depth_vert:Lb,depth_frag:Db,distance_vert:Fb,distance_frag:Nb,equirect_vert:kb,equirect_frag:Ub,linedashed_vert:Ob,linedashed_frag:Bb,meshbasic_vert:zb,meshbasic_frag:Gb,meshlambert_vert:Hb,meshlambert_frag:Vb,meshmatcap_vert:Wb,meshmatcap_frag:qb,meshnormal_vert:Xb,meshnormal_frag:jb,meshphong_vert:Kb,meshphong_frag:Jb,meshphysical_vert:Yb,meshphysical_frag:Zb,meshtoon_vert:$b,meshtoon_frag:Qb,points_vert:ex,points_frag:tx,shadow_vert:nx,shadow_frag:ix,sprite_vert:sx,sprite_frag:rx},Le={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Fi={basic:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Fn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Fn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ce(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Fn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Fn([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Fn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Fn([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Fn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Fn([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Fn([Le.common,Le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Fn([Le.lights,Le.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Fi.physical={uniforms:Fn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var pc={r:0,b:0,g:0},ax=new Je,rp=new lt;rp.set(-1,0,0,0,1,0,0,0,1);function ox(s,e,t,n,i,r){let a=new Ce(0),o=i===!0?0:1,l,c,u=null,p=0,d=null;function h(_){let w=_.isScene===!0?_.background:null;if(w&&w.isTexture){let v=_.backgroundBlurriness>0;w=e.get(w,v)}return w}function m(_){let w=!1,v=h(_);v===null?g(a,o):v&&v.isColor&&(g(v,1),w=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(_,w){let v=h(w);v&&v.isCubeTexture?(c===void 0&&(c=new Ye(new $i(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:lr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,y,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ax.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(rp),c.material.toneMapped=bt.getTransfer(v.colorSpace)!==Lt,(u!==v||p!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,p=v.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ye(new Ms(2,2),new On({name:"BackgroundMaterial",uniforms:lr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=bt.getTransfer(v.colorSpace)!==Lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||p!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,p=v.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,w){_.getRGB(pc,Kh(s)),t.buffers.color.setClear(pc.r,pc.g,pc.b,w,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,w=1){a.set(_),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:m,addToRenderList:b,dispose:f}}function lx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(L,F,H,R,V){let Q=!1,Y=p(L,R,H,F);r!==Y&&(r=Y,c(r.object)),Q=h(L,R,H,V),Q&&m(L,R,H,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,v(L,F,H,R),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function u(L){return s.deleteVertexArray(L)}function p(L,F,H,R){let V=R.wireframe===!0,Q=n[F.id];Q===void 0&&(Q={},n[F.id]=Q);let Y=L.isInstancedMesh===!0?L.id:0,he=Q[Y];he===void 0&&(he={},Q[Y]=he);let ee=he[H.id];ee===void 0&&(ee={},he[H.id]=ee);let re=ee[V];return re===void 0&&(re=d(l()),ee[V]=re),re}function d(L){let F=[],H=[],R=[];for(let V=0;V<t;V++)F[V]=0,H[V]=0,R[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:R,object:L,attributes:{},index:null}}function h(L,F,H,R){let V=r.attributes,Q=F.attributes,Y=0,he=H.getAttributes();for(let ee in he)if(he[ee].location>=0){let le=V[ee],Ge=Q[ee];if(Ge===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(Ge=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(Ge=L.instanceColor)),le===void 0||le.attribute!==Ge||Ge&&le.data!==Ge.data)return!0;Y++}return r.attributesNum!==Y||r.index!==R}function m(L,F,H,R){let V={},Q=F.attributes,Y=0,he=H.getAttributes();for(let ee in he)if(he[ee].location>=0){let le=Q[ee];le===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(le=L.instanceColor));let Ge={};Ge.attribute=le,le&&le.data&&(Ge.data=le.data),V[ee]=Ge,Y++}r.attributes=V,r.attributesNum=Y,r.index=R}function b(){let L=r.newAttributes;for(let F=0,H=L.length;F<H;F++)L[F]=0}function g(L){f(L,0)}function f(L,F){let H=r.newAttributes,R=r.enabledAttributes,V=r.attributeDivisors;H[L]=1,R[L]===0&&(s.enableVertexAttribArray(L),R[L]=1),V[L]!==F&&(s.vertexAttribDivisor(L,F),V[L]=F)}function _(){let L=r.newAttributes,F=r.enabledAttributes;for(let H=0,R=F.length;H<R;H++)F[H]!==L[H]&&(s.disableVertexAttribArray(H),F[H]=0)}function w(L,F,H,R,V,Q,Y){Y===!0?s.vertexAttribIPointer(L,F,H,V,Q):s.vertexAttribPointer(L,F,H,R,V,Q)}function v(L,F,H,R){b();let V=R.attributes,Q=H.getAttributes(),Y=F.defaultAttributeValues;for(let he in Q){let ee=Q[he];if(ee.location>=0){let re=V[he];if(re===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),re!==void 0){let le=re.normalized,Ge=re.itemSize,ot=e.get(re);if(ot===void 0)continue;let ne=ot.buffer,Ee=ot.type,qe=ot.bytesPerElement,Ke=Ee===s.INT||Ee===s.UNSIGNED_INT||re.gpuType===Rl;if(re.isInterleavedBufferAttribute){let Pe=re.data,st=Pe.isInterleavedBuffer===!0?Pe.stride:Pe.itemSize,wt=re.offset;if(Pe.isInstancedInterleavedBuffer||Pe.isInstancedBufferAttribute){for(let Ze=0;Ze<ee.locationSize;Ze++)f(ee.location+Ze,Pe.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Ze=0;Ze<ee.locationSize;Ze++)g(ee.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let Ze=0;Ze<ee.locationSize;Ze++)w(ee.location+Ze,Ge/ee.locationSize,Ee,le,st*qe,(wt+Ge/ee.locationSize*Ze)*qe,Ke)}else{if(re.isInstancedBufferAttribute){for(let Pe=0;Pe<ee.locationSize;Pe++)f(ee.location+Pe,re.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Pe=0;Pe<ee.locationSize;Pe++)g(ee.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let Pe=0;Pe<ee.locationSize;Pe++)w(ee.location+Pe,Ge/ee.locationSize,Ee,le,Ge*qe,Ge/ee.locationSize*Pe*qe,Ke)}}else if(Y!==void 0){let le=Y[he];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(ee.location,le);break;case 3:s.vertexAttrib3fv(ee.location,le);break;case 4:s.vertexAttrib4fv(ee.location,le);break;default:s.vertexAttrib1fv(ee.location,le)}}}}_()}function E(){D();for(let L in n){let F=n[L];for(let H in F){let R=F[H];for(let V in R){let Q=R[V];for(let Y in Q)u(Q[Y].object),delete Q[Y];delete R[V]}}delete n[L]}}function y(L){if(n[L.id]===void 0)return;let F=n[L.id];for(let H in F){let R=F[H];for(let V in R){let Q=R[V];for(let Y in Q)u(Q[Y].object),delete Q[Y];delete R[V]}}delete n[L.id]}function x(L){for(let F in n){let H=n[F];for(let R in H){let V=H[R];if(V[L.id]===void 0)continue;let Q=V[L.id];for(let Y in Q)u(Q[Y].object),delete Q[Y];delete V[L.id]}}}function T(L){for(let F in n){let H=n[F],R=L.isInstancedMesh===!0?L.id:0,V=H[R];if(V!==void 0){for(let Q in V){let Y=V[Q];for(let he in Y)u(Y[he].object),delete Y[he];delete V[Q]}delete H[R],Object.keys(H).length===0&&delete n[F]}}}function D(){I(),a=!0,r!==i&&(r=i,c(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:y,releaseStatesOfObject:T,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:g,disableUnusedAttributes:_}}function cx(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function hx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==li&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let T=x===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Wn&&x!==Zn&&!T&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&je("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),y=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:v,maxSamples:E,samples:y}}function ux(s){let e=this,t=null,n=0,i=!1,r=!1,a=new gi,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let h=p.length!==0||d||n!==0||i;return i=d,n=p.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){t=u(p,d,0)},this.setState=function(p,d,h){let m=p.clippingPlanes,b=p.clipIntersection,g=p.clipShadows,f=s.get(p);if(!i||m===null||m.length===0||r&&!g)r?u(null):c();else{let _=r?0:n,w=_*4,v=f.clippingState||null;l.value=v,v=u(m,d,w,h);for(let E=0;E!==w;++E)v[E]=t[E];f.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,d,h,m){let b=p!==null?p.length:0,g=null;if(b!==0){if(g=l.value,m!==!0||g===null){let f=h+b*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<f)&&(g=new Float32Array(f));for(let w=0,v=h;w!==b;++w,v+=4)a.copy(p[w]).applyMatrix4(_,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var lo=class extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $i(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:ir});r.uniforms.tEquirect.value=t;let a=new Ye(i,r),o=t.minFilter;return t.minFilter===oi&&(t.minFilter=pn),new jr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Uf=256,dx=3,fx=20,ap=256,op=16,px=3,mx=new B,gx=new Ce,gc=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new jr(1,10,null),this._boxMesh=new Ye(new $i(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=mx}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,h=l.autoClearDepth,m=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(gx));let g=new jr(n,i,u);return g.position.copy(o),g.update(l,e),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=h,l.autoClearStencil=m,e.background=b,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Uf,qh(e))}_fromTexture(e,t){e.mapping===rr||e.mapping===Jr?this._setSize(e.image.length===0?Uf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Of(e,!1,!1),n=Math.log2(e)-dx;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Of(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===rr||e.mapping===Jr?(this._cubemapMaterial===null&&(this._cubemapMaterial=zf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=bx(),this._integrationMaterial=xx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/op);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-px)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(ap*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=_x());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function Of(s,e,t){return new lo(s,{minFilter:oi,generateMipmaps:e,type:vi,colorSpace:Un,depthBuffer:t})}function co(s,e,t){return new On({name:s,uniforms:e,vertexShader:pt.cube_vert,fragmentShader:t,side:Rn,blending:ir,depthTest:!1,depthWrite:!1})}function bx(){return co("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ap}u

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
	`)}function xx(){return co("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:op}},`

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
	`)}function _x(){return co("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fx}
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
	`)}function Bf(){return co("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function zf(){return co("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vx(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,h=!1){return d==null?null:h?a(d):r(d)}function r(d){if(d&&d.isTexture){let h=d.mapping;if(h===Tl||h===Al)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let b=new lo(m.height);return b.fromEquirectangularTexture(s,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let h=d.mapping,m=h===Tl||h===Al,b=h===rr||h===Jr;if(m||b){let g=t.get(d),f=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new gc(s)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let _=d.image;return m&&_&&_.height>0||b&&_&&l(_)?(n===null&&(n=new gc(s)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,h){return h===Tl?d.mapping=rr:h===Al&&(d.mapping=Jr),d}function l(d){let h=0,m=6;for(let b=0;b<m;b++)d[b]!==void 0&&h++;return h===m}function c(d){let h=d.target;h.removeEventListener("dispose",c);let m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(d){let h=d.target;h.removeEventListener("dispose",u);let m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function yx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Hs("WebGLRenderer: "+n+" extension not supported."),i}}}function Mx(s,e,t,n){let i={},r=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);let b=r.get(m);b&&(e.remove(b),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,b){return i[b.id]!==void 0||(b.addEventListener("dispose",o),i[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}function u(m){let b=m.attributes;for(let g in b)e.update(b[g],s.ARRAY_BUFFER)}function p(m){let b=m.index,g=m.attributes.position,f=0;if(g===void 0)return;let _=b!==null?b.array.length:g.array.length/3-1,w=g.count>=65535?Ia:Pa,v=new w(Math.ceil(_/3)*6,1),E=v.array;if(b!==null){let x=b.array;f=b.version;for(let T=0,D=0;T<_;T+=3){let I=x[T+0],L=x[T+1],F=x[T+2];E[D++]=I,E[D++]=L,E[D++]=L,E[D++]=F,E[D++]=F,E[D++]=I}}else{f=g.version;for(let x=0,T=0;x<_;x+=3){let D=x+0,I=x+1,L=x+2;E[T++]=D,E[T++]=I,E[T++]=I,E[T++]=L,E[T++]=L,E[T++]=D}}v.version=f;let y=r.get(m);y&&e.remove(y),r.set(m,v)}function d(m){let b=r.get(m);if(b){let g=m.index;g!==null&&b.version<g.version&&p(m)}else p(m);return r.get(m)}function h(){for(let m in i){let b=i[m].deref();b!==void 0&&l(b)}}return{get:c,update:u,getWireframeAttribute:d,dispose:h}}function Sx(s,e,t){let n;function i(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){s.drawElements(n,d,r,p*a),t.update(d,n,1)}function c(p,d,h){h!==0&&(s.drawElementsInstanced(n,d,r,p*a,h),t.update(d,n,h))}function u(p,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,h);let b=0;for(let g=0;g<h;g++)b+=d[g];t.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function wx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Tx(s,e,t){let n=new WeakMap,i=new Ft;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==p){let D=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let h=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],w=0;h===!0&&(w=1),m===!0&&(w=2),b===!0&&(w=3);let v=o.attributes.position.count*w,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let y=new Float32Array(v*E*4*p),x=new Aa(y,v,E,p);x.type=Zn,x.needsUpdate=!0;let T=w*4;for(let I=0;I<p;I++){let L=g[I],F=f[I],H=_[I],R=v*E*4*I;for(let V=0;V<L.count;V++){let Q=V*T;h===!0&&(i.fromBufferAttribute(L,V),y[R+Q+0]=i.x,y[R+Q+1]=i.y,y[R+Q+2]=i.z,y[R+Q+3]=0),m===!0&&(i.fromBufferAttribute(F,V),y[R+Q+4]=i.x,y[R+Q+5]=i.y,y[R+Q+6]=i.z,y[R+Q+7]=0),b===!0&&(i.fromBufferAttribute(H,V),y[R+Q+8]=i.x,y[R+Q+9]=i.y,y[R+Q+10]=i.z,y[R+Q+11]=H.itemSize===4?i.w:1)}}d={count:p,texture:x,size:new it(v,E)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let h=0;for(let b=0;b<c.length;b++)h+=c[b];let m=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ax(s,e,t,n,i){let r=new WeakMap;function a(c){let u=i.render.frame,p=c.geometry,d=e.get(c,p);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Ex={[Th]:"LINEAR_TONE_MAPPING",[Ah]:"REINHARD_TONE_MAPPING",[Eh]:"CINEON_TONE_MAPPING",[Za]:"ACES_FILMIC_TONE_MAPPING",[Ch]:"AGX_TONE_MAPPING",[Ph]:"NEUTRAL_TONE_MAPPING",[Rh]:"CUSTOM_TONE_MAPPING"};function Rx(s,e,t,n,i,r){let a=new Jn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Vt;u.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Mt([0,2,0,0,2,0],2));let p=new ul({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ye(u,p),h=new tr(-1,1,1,-1,0,1),m=null,b=null,g=!1,f,_=null,w=[],v=!1;this.setSize=function(E,y){a.setSize(E,y),o!==null&&o.setSize(E,y),l!==null&&l.setSize(E,y);for(let x=0;x<w.length;x++){let T=w[x];T.setSize&&T.setSize(E,y)}},this.setEffects=function(E){w=E,v=w.length>0&&w[0].isRenderPass===!0;let y=a.width,x=a.height;w.length>0&&o===null&&(o=new Jn(y,x,{type:vi,depthBuffer:!1,stencilBuffer:!1}),l=new Jn(y,x,{type:vi,depthBuffer:!1,stencilBuffer:!1}));let T=i===!0&&w.some(D=>D.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&c===null&&(c=new Zi(y,x),r===!0&&(c.format=ss,c.type=or)),a.dispose(),a.depthTexture=T?c:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let D=0;D<w.length;D++){let I=w[D];I.setSize&&I.setSize(y,x),T&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(E,y){if(g||E.toneMapping===Ii&&w.length===0)return!1;if(_=y,y!==null){let x=y.width,T=y.height;(a.width!==x||a.height!==T)&&this.setSize(x,T)}return v===!1&&E.setRenderTarget(a),f=E.toneMapping,E.toneMapping=Ii,!0},this.hasRenderPass=function(){return v},this.end=function(E,y){E.toneMapping=f,g=!0;let x=a,T=o;for(let D=0;D<w.length;D++){let I=w[D];I.enabled!==!1&&(I.render(E,T,x,y),I.needsSwap!==!1&&(x=T,T=T===o?l:o))}if(m!==E.outputColorSpace||b!==E.toneMapping){m=E.outputColorSpace,b=E.toneMapping,p.defines={},bt.getTransfer(m)===Lt&&(p.defines.SRGB_TRANSFER="");let D=Ex[b];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(_),E.render(d,h),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),p.dispose()}}var lp=new mn,cp=new Zi(1,1),hp=new ka(1),up=new Aa,dp=new ol,fp=new Fa,Gf=[],Hf=[],Vf=new Float32Array(16),Wf=new Float32Array(9),qf=new Float32Array(4);function na(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Gf[i];if(r===void 0&&(r=new Float32Array(i),Gf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function xn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function _n(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function xc(s,e){let t=Hf[e];t===void 0&&(t=new Int32Array(e),Hf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Cx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Px(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2fv(this.addr,e),_n(t,e)}}function Ix(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;s.uniform3fv(this.addr,e),_n(t,e)}}function Lx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4fv(this.addr,e),_n(t,e)}}function Dx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,n))return;qf.set(n),s.uniformMatrix2fv(this.addr,!1,qf),_n(t,n)}}function Fx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,n))return;Wf.set(n),s.uniformMatrix3fv(this.addr,!1,Wf),_n(t,n)}}function Nx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,n))return;Vf.set(n),s.uniformMatrix4fv(this.addr,!1,Vf),_n(t,n)}}function kx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ux(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2iv(this.addr,e),_n(t,e)}}function Ox(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3iv(this.addr,e),_n(t,e)}}function Bx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4iv(this.addr,e),_n(t,e)}}function zx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Gx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2uiv(this.addr,e),_n(t,e)}}function Hx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3uiv(this.addr,e),_n(t,e)}}function Vx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4uiv(this.addr,e),_n(t,e)}}function _c(s){return s.version===0&&(s.compareFunction=Gh,s.needsUpdate=!0),s}function Wx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=_c(cp):r=lp,t.setTexture2D(e||r,i)}function qx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||dp,i)}function Xx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=_c(hp):r=fp,t.setTextureCube(e||r,i)}function jx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||up,i)}function Kx(s){switch(s){case 5126:return Cx;case 35664:return Px;case 35665:return Ix;case 35666:return Lx;case 35674:return Dx;case 35675:return Fx;case 35676:return Nx;case 5124:case 35670:return kx;case 35667:case 35671:return Ux;case 35668:case 35672:return Ox;case 35669:case 35673:return Bx;case 5125:return zx;case 36294:return Gx;case 36295:return Hx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return jx}}function Jx(s,e){s.uniform1fv(this.addr,e)}function Yx(s,e){let t=na(e,this.size,2);s.uniform2fv(this.addr,t)}function Zx(s,e){let t=na(e,this.size,3);s.uniform3fv(this.addr,t)}function $x(s,e){let t=na(e,this.size,4);s.uniform4fv(this.addr,t)}function Qx(s,e){let t=na(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function e_(s,e){let t=na(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function t_(s,e){let t=na(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function n_(s,e){s.uniform1iv(this.addr,e)}function i_(s,e){s.uniform2iv(this.addr,e)}function s_(s,e){s.uniform3iv(this.addr,e)}function r_(s,e){s.uniform4iv(this.addr,e)}function a_(s,e){s.uniform1uiv(this.addr,e)}function o_(s,e){s.uniform2uiv(this.addr,e)}function l_(s,e){s.uniform3uiv(this.addr,e)}function c_(s,e){s.uniform4uiv(this.addr,e)}function h_(s,e,t){let n=this.cache,i=e.length,r=xc(t,i);xn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=_c(cp):a=lp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function u_(s,e,t){let n=this.cache,i=e.length,r=xc(t,i);xn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||dp,r[a])}function d_(s,e,t){let n=this.cache,i=e.length,r=xc(t,i);xn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=_c(hp):a=fp;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function f_(s,e,t){let n=this.cache,i=e.length,r=xc(t,i);xn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||up,r[a])}function p_(s){switch(s){case 5126:return Jx;case 35664:return Yx;case 35665:return Zx;case 35666:return $x;case 35674:return Qx;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return a_;case 36294:return o_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}var ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kx(t.type)}},au=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p_(t.type)}},ou=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},iu=/(\w+)(\])?(\[|\.)?/g;function Xf(s,e){s.seq.push(e),s.map[e.id]=e}function m_(s,e,t){let n=s.name,i=n.length;for(iu.lastIndex=0;;){let r=iu.exec(n),a=iu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Xf(t,c===void 0?new ru(o,s,e):new au(o,s,e));break}else{let p=t.map[o];p===void 0&&(p=new ou(o),Xf(t,p)),t=p}}}var ta=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);m_(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function jf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var g_=37297,b_=0;function x_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Kf=new lt;function __(s){bt._getMatrix(Kf,bt.workingColorSpace,s);let e=`mat3( ${Kf.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(s)){case wa:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Jf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+x_(s.getShaderSource(e),o)}else return r}function v_(s,e){let t=__(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var y_={[Th]:"Linear",[Ah]:"Reinhard",[Eh]:"Cineon",[Za]:"ACESFilmic",[Ch]:"AgX",[Ph]:"Neutral",[Rh]:"Custom"};function M_(s,e){let t=y_[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mc=new B;function S_(){bt.getLuminanceCoefficients(mc);let s=mc.x.toFixed(4),e=mc.y.toFixed(4),t=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function T_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function oo(s){return s!==""}function Yf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Zf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(s){return s.replace(E_,R_)}function R_(s,e){let t=pt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return lu(t)}var C_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $f(s){return s.replace(C_,P_)}function P_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qf(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var I_={[Ya]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function L_(s){return I_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var D_={[Jr]:"ENVMAP_MODE_REFRACTION"};function F_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":D_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var N_={[wl]:"ENVMAP_BLENDING_MULTIPLY",[gf]:"ENVMAP_BLENDING_MIX",[bf]:"ENVMAP_BLENDING_ADD"};function k_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":N_[s.combine]||"ENVMAP_BLENDING_NONE"}function U_(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=L_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=F_(t),p=k_(t),d=w_(t),h=T_(r),m=i.createProgram(),b,g,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(oo).join(`
`),b.length>0&&(b+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(oo).join(`
`),g.length>0&&(g+=`
`)):(b=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),g=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?pt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?M_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,v_("linearToOutputTexel",t.outputColorSpace),S_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),a=lu(a),a=Yf(a,t),a=Zf(a,t),o=lu(o),o=Yf(o,t),o=Zf(o,t),a=$f(a),o=$f(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,g=["#define varying in",t.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=f+b+a,w=f+g+o,v=jf(i,i.VERTEX_SHADER,_),E=jf(i,i.FRAGMENT_SHADER,w);i.attachShader(m,v),i.attachShader(m,E),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function y(I){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(m)||"",F=i.getShaderInfoLog(v)||"",H=i.getShaderInfoLog(E)||"",R=L.trim(),V=F.trim(),Q=H.trim(),Y=!0,he=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,v,E);else{let ee=Jf(i,v,"vertex"),re=Jf(i,E,"fragment");at("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+R+`
`+ee+`
`+re)}else R!==""?je("WebGLProgram: Program Info Log:",R):(V===""||Q==="")&&(he=!1);he&&(I.diagnostics={runnable:Y,programLog:R,vertexShader:{log:V,prefix:b},fragmentShader:{log:Q,prefix:g}})}i.deleteShader(v),i.deleteShader(E),x=new ta(i,m),T=A_(i,m)}let x;this.getUniforms=function(){return x===void 0&&y(this),x};let T;this.getAttributes=function(){return T===void 0&&y(this),T};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(m,g_)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=E,this}var O_=0,cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hu(e),t.set(e,n)),n}},hu=class{constructor(e){this.id=O_++,this.code=e,this.usedTimes=0}};function B_(s){return s===Es||s===no||s===io}function z_(s,e,t,n,i,r){let a=new Ea,o=new cu,l=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,T,D,I,L,F){let H=I.fog,R=L.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||V,Q),he=d[x.type],ee=n.precision;x.precision!==null&&(ee=n.getMaxPrecision(x.precision),ee!==x.precision&&je("WebGLProgram.getParameters:",x.precision,"not supported, using",ee,"instead."));let re=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,le=re!==void 0?re.length:0,Ge=0;R.morphAttributes.position!==void 0&&(Ge=1),R.morphAttributes.normal!==void 0&&(Ge=2),R.morphAttributes.color!==void 0&&(Ge=3);let ot,ne,Ee,qe;if(he){let Re=Fi[he];ot=Re.vertexShader,ne=Re.fragmentShader}else{ot=x.vertexShader,ne=x.fragmentShader;let Re=o.getVertexShaderStage(x),yt=o.getFragmentShaderStage(x);o.update(x,Re,yt),Ee=Re.id,qe=yt.id}let Ke=s.getRenderTarget(),Pe=s.state.buffers.depth.getReversed(),st=L.isInstancedMesh===!0,wt=L.isBatchedMesh===!0,Ze=!!x.map,At=!!x.matcap,Et=!!Y,dt=Et&&Y.isPMREMTexture===!0,Kt=!!x.aoMap,kt=!!x.lightMap,Rt=!!x.bumpMap&&x.wireframe===!1,Gt=!!x.normalMap,vn=!!x.displacementMap,Jt=!!x.emissiveMap,ln=!!x.metalnessMap,Ut=!!x.roughnessMap,Tn=x.anisotropy>0,z=x.clearcoat>0,Nn=x.diffuseRoughness>0,Ot=x.dispersion>0,Ct=x.retroreflectivity>0,_e=x.iridescence>0,Yt=x.sheen>0,Qe=x.transmission>0,Ve=Tn&&!!x.anisotropyMap,P=z&&!!x.clearcoatMap,S=z&&!!x.clearcoatNormalMap,X=z&&!!x.clearcoatRoughnessMap,de=Nn&&!!x.diffuseRoughnessMap,oe=_e&&!!x.iridescenceMap,xe=_e&&!!x.iridescenceThicknessMap,ye=Yt&&!!x.sheenColorMap,se=Yt&&!!x.sheenRoughnessMap,ie=!!x.specularMap,ve=!!x.specularColorMap,N=!!x.specularIntensityMap,$=Qe&&!!x.transmissionMap,Z=Qe&&!!x.thicknessMap,Me=!!x.gradientMap,be=!!x.alphaMap,ue=x.alphaTest>0,Xe=!!x.alphaHash,ht=!!x.extensions,fe=Ii;x.toneMapped&&(Ke===null||Ke.isXRRenderTarget===!0)&&(fe=s.toneMapping);let Oe=dt?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,nt={shaderID:he,shaderType:x.type,shaderName:x.name,vertexShader:ot,fragmentShader:ne,defines:x.defines,customVertexShaderID:Ee,customFragmentShaderID:qe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:ee,batching:wt,batchingColor:wt&&L._colorsTexture!==null,instancing:st,instancingColor:st&&L.instanceColor!==null,instancingMorph:st&&L.morphTexture!==null,outputColorSpace:Ke===null?s.outputColorSpace:Ke.isXRRenderTarget===!0?Ke.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ze,matcap:At,envMap:Et,envMapMode:Et&&Y.mapping,envMapPMREM:dt,envMapMaxLod:dt?Oe.length-1:null,envMapSize:dt?Oe[0].width:null,aoMap:Kt,lightMap:kt,bumpMap:Rt,normalMap:Gt,displacementMap:vn,emissiveMap:Jt,normalMapObjectSpace:Gt&&x.normalMapType===Mf,normalMapTangentSpace:Gt&&x.normalMapType===ea,packedNormalMap:Gt&&x.normalMapType===ea&&B_(x.normalMap.format),metalnessMap:ln,roughnessMap:Ut,anisotropy:Tn,anisotropyMap:Ve,clearcoat:z,clearcoatMap:P,clearcoatNormalMap:S,clearcoatRoughnessMap:X,diffuseRoughness:Nn,diffuseRoughnessMap:de,dispersion:Ot,retroreflection:Ct,iridescence:_e,iridescenceMap:oe,iridescenceThicknessMap:xe,sheen:Yt,sheenColorMap:ye,sheenRoughnessMap:se,specularMap:ie,specularColorMap:ve,specularIntensityMap:N,transmission:Qe,transmissionMap:$,thicknessMap:Z,gradientMap:Me,opaque:x.transparent===!1&&x.blending===As&&x.alphaToCoverage===!1,alphaMap:be,alphaTest:ue,alphaHash:Xe,combine:x.combine,mapUv:Ze&&h(x.map.channel),aoMapUv:Kt&&h(x.aoMap.channel),lightMapUv:kt&&h(x.lightMap.channel),bumpMapUv:Rt&&h(x.bumpMap.channel),normalMapUv:Gt&&h(x.normalMap.channel),displacementMapUv:vn&&h(x.displacementMap.channel),emissiveMapUv:Jt&&h(x.emissiveMap.channel),metalnessMapUv:ln&&h(x.metalnessMap.channel),roughnessMapUv:Ut&&h(x.roughnessMap.channel),anisotropyMapUv:Ve&&h(x.anisotropyMap.channel),clearcoatMapUv:P&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:oe&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:se&&h(x.sheenRoughnessMap.channel),specularMapUv:ie&&h(x.specularMap.channel),specularColorMapUv:ve&&h(x.specularColorMap.channel),specularIntensityMapUv:N&&h(x.specularIntensityMap.channel),transmissionMapUv:$&&h(x.transmissionMap.channel),thicknessMapUv:Z&&h(x.thicknessMap.channel),alphaMapUv:be&&h(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Gt||Tn),vertexNormals:!!R.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(Ze||be),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||R.attributes.normal===void 0&&Gt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Pe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ge,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.filter(Re=>Re.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:fe,decodeVideoTexture:Ze&&x.map.isVideoTexture===!0&&bt.getTransfer(x.map.colorSpace)===Lt,decodeVideoTextureEmissive:Jt&&x.emissiveMap.isVideoTexture===!0&&bt.getTransfer(x.emissiveMap.colorSpace)===Lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bn,flipSided:x.side===Rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ht&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&x.extensions.multiDraw===!0||wt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function b(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)T.push(D),T.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(g(T,x),f(T,x),T.push(s.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapPMREM),x.push(T.envMapMaxLod),x.push(T.envMapSize),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.diffuseRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.numLightProbeGrids),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function f(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let T=d[x.type],D;if(T){let I=Fi[T];D=Ff.clone(I.uniforms)}else D=x.uniforms;return D}function w(x,T){let D=u.get(T);return D!==void 0?++D.usedTimes:(D=new U_(s,T,x,i),c.push(D),u.set(T,D)),D}function v(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function y(){o.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:_,acquireProgram:w,releaseProgram:v,releaseShaderCache:E,programs:c,dispose:y}}function G_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function H_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function ep(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function tp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,m,b,g,f){let _=s[e];return _===void 0?(_={id:d.id,object:d,geometry:h,material:m,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:g,group:f},s[e]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=m,_.materialVariant=a(d),_.groupOrder=b,_.renderOrder=d.renderOrder,_.z=g,_.group=f),e++,_}function l(d,h,m,b,g,f,_){_.reversedDepth===!0&&(g=-g);let w=o(d,h,m,b,g,f);m.transmission>0?n.push(w):m.transparent===!0?i.push(w):t.push(w)}function c(d,h,m,b,g,f){let _=o(d,h,m,b,g,f);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function u(d,h){t.length>1&&t.sort(d||H_),n.length>1&&n.sort(h||ep),i.length>1&&i.sort(h||ep)}function p(){for(let d=e,h=s.length;d<h;d++){let m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:p,sort:u}}function V_(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new tp,s.set(n,[a])):i>=r.length?(a=new tp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function W_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Ce};break;case"SpotLight":t={position:new B,direction:new B,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function q_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var X_=0;function j_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function K_(s){let e=new W_,t=q_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let i=new B,r=new Je,a=new Je;function o(c){let u=0,p=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let h=0,m=0,b=0,g=0,f=0,_=0,w=0,v=0,E=0,y=0,x=0,T=0,D=0,I=0;c.sort(j_);for(let F=0,H=c.length;F<H;F++){let R=c[F],V=R.color,Q=R.intensity,Y=R.distance,he=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Es?he=R.shadow.map.texture:he=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=V.r*Q,p+=V.g*Q,d+=V.b*Q;else if(R.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(R.sh.coefficients[ee],Q);I++}else if(R.isSunLight){let ee=e.get(R);if(ee.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let re=R.shadow,le=t.get(R);le.shadowIntensity=re.intensity,le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize.copy(re.mapSize).multiply(re.getFrameExtents()),n.sunShadow[m]=le,n.sunShadowMap[m]=he;let Ge=re.getViewportCount();for(let ot=0;ot<Ge;ot++)n.sunShadowMatrix[b+ot]=re.getMatrix(ot),n.sunShadowCascade[b+ot]=re._cascadeData[ot];b+=Ge,m++}n.sun[h]=ee,h++}else if(R.isDirectionalLight){let ee=e.get(R);if(ee.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let re=R.shadow,le=t.get(R);le.shadowIntensity=re.intensity,le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,n.directionalShadow[g]=le,n.directionalShadowMap[g]=he,n.directionalShadowMatrix[g]=R.shadow.matrix,E++}n.directional[g]=ee,g++}else if(R.isSpotLight){let ee=e.get(R);ee.position.setFromMatrixPosition(R.matrixWorld),ee.color.copy(V).multiplyScalar(Q),ee.distance=Y,ee.coneCos=Math.cos(R.angle),ee.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),ee.decay=R.decay,n.spot[_]=ee;let re=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,re.updateMatrices(R),R.castShadow&&D++),n.spotLightMatrix[_]=re.matrix,R.castShadow){let le=t.get(R);le.shadowIntensity=re.intensity,le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,n.spotShadow[_]=le,n.spotShadowMap[_]=he,x++}_++}else if(R.isRectAreaLight){let ee=e.get(R);ee.color.copy(V).multiplyScalar(Q),ee.halfWidth.set(R.width*.5,0,0),ee.halfHeight.set(0,R.height*.5,0),n.rectArea[w]=ee,w++}else if(R.isPointLight){let ee=e.get(R);if(ee.color.copy(R.color).multiplyScalar(R.intensity),ee.distance=R.distance,ee.decay=R.decay,R.castShadow){let re=R.shadow,le=t.get(R);le.shadowIntensity=re.intensity,le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,le.shadowCameraNear=re.camera.near,le.shadowCameraFar=re.camera.far,n.pointShadow[f]=le,n.pointShadowMap[f]=he,n.pointShadowMatrix[f]=R.shadow.matrix,y++}n.point[f]=ee,f++}else if(R.isHemisphereLight){let ee=e.get(R);ee.skyColor.copy(R.color).multiplyScalar(Q),ee.groundColor.copy(R.groundColor).multiplyScalar(Q),n.hemi[v]=ee,v++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;let L=n.hash;(L.sunLength!==h||L.directionalLength!==g||L.pointLength!==f||L.spotLength!==_||L.rectAreaLength!==w||L.hemiLength!==v||L.numSunShadows!==m||L.numDirectionalShadows!==E||L.numPointShadows!==y||L.numSpotShadows!==x||L.numSpotMaps!==T||L.numLightProbes!==I)&&(n.sun.length=h,n.directional.length=g,n.spot.length=_,n.rectArea.length=w,n.point.length=f,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+T-D,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=I,L.sunLength=h,L.directionalLength=g,L.pointLength=f,L.spotLength=_,L.rectAreaLength=w,L.hemiLength=v,L.numSunShadows=m,L.numDirectionalShadows=E,L.numPointShadows=y,L.numSpotShadows=x,L.numSpotMaps=T,L.numLightProbes=I,n.version=X_++)}function l(c,u){let p=0,d=0,h=0,m=0,b=0,g=0,f=u.matrixWorldInverse;for(let _=0,w=c.length;_<w;_++){let v=c[_];if(v.isSunLight){let E=n.sun[p];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(f),p++}else if(v.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(f),d++}else if(v.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(f),m++}else if(v.isRectAreaLight){let E=n.rectArea[b];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),a.identity(),r.copy(v.matrixWorld),r.premultiply(f),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),b++}else if(v.isPointLight){let E=n.point[h];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),h++}else if(v.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:n}}function np(s){let e=new K_(s),t=[],n=[],i=[];function r(p){u.camera=p,t.length=0,n.length=0,i.length=0}function a(p){p.isLightProbeGrid?i.push(p):t.push(p)}function o(p){n.push(p)}function l(){e.setup(t),i.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){e.setupView(t,p)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function J_(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new np(s),e.set(i,[o])):r>=a.length?(o=new np(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z_=`uniform sampler2D shadow_pass;
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
}`,$_=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Q_=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],ip=new Je,ao=new B,su=new B;function ev(s,e,t){let n=new vs,i=new it,r=new it,a=new Ft,o=new dl,l=new fl,c={},u=t.maxTextureSize,p={[Pi]:Rn,[Rn]:Pi,[bn]:bn},d=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Y_,fragmentShader:Z_}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let m=new Vt;m.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ye(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let f=this.type;this.render=function(y,x,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;this.type===Yd&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ya);let D=s.getRenderTarget(),I=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),F=s.state;F.setBlending(ir),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=f!==this.type;H&&x.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(V=>V.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,V=y.length;R<V;R++){let Q=y[R],Y=Q.shadow;if(Y===void 0){je("WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let he=Y.getFrameExtents();i.multiply(he),r.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/he.x),i.x=r.x*he.x,Y.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/he.y),i.y=r.y*he.y,Y.mapSize.y=r.y));let ee=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=ee,Y.map===null||H===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Kr){if(Q.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Jn(i.x,i.y,{format:Es,type:vi,minFilter:pn,magFilter:pn,generateMipmaps:!1}),Y.map.texture.name=Q.name+".shadowMap",Y.map.depthTexture=new Zi(i.x,i.y,Zn),Y.map.depthTexture.name=Q.name+".shadowMapDepth",Y.map.depthTexture.format=Ji,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=en,Y.map.depthTexture.magFilter=en}else Q.isPointLight?(Y.map=new lo(i.x),Y.map.depthTexture=new ka(i.x,_i)):(Y.map=new Jn(i.x,i.y),Y.map.depthTexture=new Zi(i.x,i.y,_i)),Y.map.depthTexture.name=Q.name+".shadowMap",Y.map.depthTexture.format=Ji,this.type===Ya?(Y.map.depthTexture.compareFunction=ee?zh:Bh,Y.map.depthTexture.minFilter=pn,Y.map.depthTexture.magFilter=pn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=en,Y.map.depthTexture.magFilter=en);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==i.x||Y.map.height!==i.y)&&Y.map.setSize(i.x,i.y);let re=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Q.isPointLight!==!0&&Y.updateMatrices(Q,T);let le=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:T.layers;for(let Ge=0;Ge<re;Ge++){let ot=Y.getCamera(Ge);if(Q.isPointLight){let ne=Y.camera,Ee=Y.matrix,qe=Q.distance||ne.far;qe!==ne.far&&(ne.far=qe,ne.updateProjectionMatrix()),ao.setFromMatrixPosition(Q.matrixWorld),ne.position.copy(ao),su.copy(ne.position),su.add($_[Ge]),ne.up.copy(Q_[Ge]),ne.lookAt(su),ne.updateMatrixWorld(),Ee.makeTranslation(-ao.x,-ao.y,-ao.z),ip.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(ip,ne.coordinateSystem,ne.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,Ge),s.clear();else{Ge===0&&(s.setRenderTarget(Y.map),s.clear());let ne=Y.getViewport(Ge);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),F.viewport(a)}n=Y.getFrustum(Ge),v(x,T,ot,Q,le,this.type)}Y.isPointLightShadow!==!0&&this.type===Kr&&_(Y,T),Y.needsUpdate=!1}f=this.type,g.needsUpdate=!1,s.setRenderTarget(D,I,L)};function _(y,x){let T=e.update(b);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,h.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),y.mapPass===null?y.mapPass=new Jn(i.x,i.y,{format:Es,type:vi}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(x,null,T,d,b,null),h.uniforms.shadow_pass.value=y.mapPass.texture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(x,null,T,h,b,null)}function w(y,x,T,D){let I=null,L=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(L!==void 0)I=L;else if(I=T.isPointLight===!0?l:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let F=I.uuid,H=x.uuid,R=c[F];R===void 0&&(R={},c[F]=R);let V=R[H];V===void 0&&(V=I.clone(),R[H]=V,x.addEventListener("dispose",E)),I=V}if(I.visible=x.visible,I.wireframe=x.wireframe,D===Kr?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:p[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,I.map=x.map,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=s.properties.get(I);F.light=T}return I}function v(y,x,T,D,I,L){if(y.visible===!1)return;if(y.layers.test(I)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&L===Kr)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);let R=e.update(y),V=y.material;if(Array.isArray(V)){let Q=R.groups;for(let Y=0,he=Q.length;Y<he;Y++){let ee=Q[Y],re=V[ee.materialIndex];if(re&&re.visible){let le=w(y,re,D,L);y.onBeforeShadow(s,y,x,T,R,le,ee),s.renderBufferDirect(T,null,R,le,y,ee),y.onAfterShadow(s,y,x,T,R,le,ee)}}}else if(V.visible){let Q=w(y,V,D,L);y.onBeforeShadow(s,y,x,T,R,Q,null),s.renderBufferDirect(T,null,R,Q,y,null),y.onAfterShadow(s,y,x,T,R,Q,null)}}let H=y.children;for(let R=0,V=H.length;R<V;R++)v(H[R],x,T,D,I,L)}function E(y){y.target.removeEventListener("dispose",E);for(let T in c){let D=c[T],I=y.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}}function tv(s,e){function t(){let N=!1,$=new Ft,Z=null,Me=new Ft(0,0,0,0);return{setMask:function(be){Z!==be&&!N&&(s.colorMask(be,be,be,be),Z=be)},setLocked:function(be){N=be},setClear:function(be,ue,Xe,ht,fe){fe===!0&&(be*=ht,ue*=ht,Xe*=ht),$.set(be,ue,Xe,ht),Me.equals($)===!1&&(s.clearColor(be,ue,Xe,ht),Me.copy($))},reset:function(){N=!1,Z=null,Me.set(-1,0,0,0)}}}function n(){let N=!1,$=!1,Z=null,Me=null,be=null;return{setReversed:function(ue){if($!==ue){let Xe=e.get("EXT_clip_control");ue?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),$=ue;let ht=be;be=null,this.setClear(ht)}},getReversed:function(){return $},setTest:function(ue){ue?Pe(s.DEPTH_TEST):st(s.DEPTH_TEST)},setMask:function(ue){Z!==ue&&!N&&(s.depthMask(ue),Z=ue)},setFunc:function(ue){if($&&(ue=Lf[ue]),Me!==ue){switch(ue){case $o:s.depthFunc(s.NEVER);break;case Qo:s.depthFunc(s.ALWAYS);break;case el:s.depthFunc(s.LESS);break;case Ir:s.depthFunc(s.LEQUAL);break;case tl:s.depthFunc(s.EQUAL);break;case nl:s.depthFunc(s.GEQUAL);break;case il:s.depthFunc(s.GREATER);break;case sl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Me=ue}},setLocked:function(ue){N=ue},setClear:function(ue){be!==ue&&(be=ue,$&&(ue=1-ue),s.clearDepth(ue))},reset:function(){N=!1,Z=null,Me=null,be=null,$=!1}}}function i(){let N=!1,$=null,Z=null,Me=null,be=null,ue=null,Xe=null,ht=null,fe=null;return{setTest:function(Oe){N||(Oe?Pe(s.STENCIL_TEST):st(s.STENCIL_TEST))},setMask:function(Oe){$!==Oe&&!N&&(s.stencilMask(Oe),$=Oe)},setFunc:function(Oe,nt,Re){(Z!==Oe||Me!==nt||be!==Re)&&(s.stencilFunc(Oe,nt,Re),Z=Oe,Me=nt,be=Re)},setOp:function(Oe,nt,Re){(ue!==Oe||Xe!==nt||ht!==Re)&&(s.stencilOp(Oe,nt,Re),ue=Oe,Xe=nt,ht=Re)},setLocked:function(Oe){N=Oe},setClear:function(Oe){fe!==Oe&&(s.clearStencil(Oe),fe=Oe)},reset:function(){N=!1,$=null,Z=null,Me=null,be=null,ue=null,Xe=null,ht=null,fe=null}}}let r=new t,a=new n,o=new i,l={},c=new WeakMap,u={},p={},d={},h=new WeakMap,m=[],b=null,g=!1,f=null,_=null,w=null,v=null,E=null,y=null,x=null,T=new Ce(0,0,0),D=0,I=!1,L=null,F=null,H=null,R=null,V=null,Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,he=0,ee=s.getParameter(s.VERSION);ee.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Y=he>=1):ee.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Y=he>=2);let re=null,le={},Ge=s.getParameter(s.SCISSOR_BOX),ot=s.getParameter(s.VIEWPORT),ne=new Ft().fromArray(Ge),Ee=new Ft().fromArray(ot);function qe(N,$,Z,Me){let be=new Uint8Array(4),ue=s.createTexture();s.bindTexture(N,ue),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<Z;Xe++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D($,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D($+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return ue}let Ke={};Ke[s.TEXTURE_2D]=qe(s.TEXTURE_2D,s.TEXTURE_2D,1),Ke[s.TEXTURE_CUBE_MAP]=qe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ke[s.TEXTURE_2D_ARRAY]=qe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ke[s.TEXTURE_3D]=qe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Pe(s.DEPTH_TEST),a.setFunc(Ir),Rt(!1),Gt(vh),Pe(s.CULL_FACE),Kt(ir);function Pe(N){u[N]!==!0&&(s.enable(N),u[N]=!0)}function st(N){u[N]!==!1&&(s.disable(N),u[N]=!1)}function wt(N,$){return d[N]!==$?(s.bindFramebuffer(N,$),d[N]=$,N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=$),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=$),!0):!1}function Ze(N,$){let Z=m,Me=!1;if(N){Z=h.get($),Z===void 0&&(Z=[],h.set($,Z));let be=N.textures;if(Z.length!==be.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,Xe=be.length;ue<Xe;ue++)Z[ue]=s.COLOR_ATTACHMENT0+ue;Z.length=be.length,Me=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,Me=!0);Me&&s.drawBuffers(Z)}function At(N){return b!==N?(s.useProgram(N),b=N,!0):!1}let Et={[sr]:s.FUNC_ADD,[$d]:s.FUNC_SUBTRACT,[Qd]:s.FUNC_REVERSE_SUBTRACT};Et[ef]=s.MIN,Et[tf]=s.MAX;let dt={[nf]:s.ZERO,[sf]:s.ONE,[rf]:s.SRC_COLOR,[Sh]:s.SRC_ALPHA,[uf]:s.SRC_ALPHA_SATURATE,[cf]:s.DST_COLOR,[of]:s.DST_ALPHA,[af]:s.ONE_MINUS_SRC_COLOR,[wh]:s.ONE_MINUS_SRC_ALPHA,[hf]:s.ONE_MINUS_DST_COLOR,[lf]:s.ONE_MINUS_DST_ALPHA,[df]:s.CONSTANT_COLOR,[ff]:s.ONE_MINUS_CONSTANT_COLOR,[pf]:s.CONSTANT_ALPHA,[mf]:s.ONE_MINUS_CONSTANT_ALPHA};function Kt(N,$,Z,Me,be,ue,Xe,ht,fe,Oe){if(N===ir){g===!0&&(st(s.BLEND),g=!1);return}if(g===!1&&(Pe(s.BLEND),g=!0),N!==Zd){if(N!==f||Oe!==I){if((_!==sr||E!==sr)&&(s.blendEquation(s.FUNC_ADD),_=sr,E=sr),Oe)switch(N){case As:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xi:s.blendFunc(s.ONE,s.ONE);break;case yh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:at("WebGLState: Invalid blending: ",N);break}else switch(N){case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case yh:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mh:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",N);break}w=null,v=null,y=null,x=null,T.set(0,0,0),D=0,f=N,I=Oe}return}be=be||$,ue=ue||Z,Xe=Xe||Me,($!==_||be!==E)&&(s.blendEquationSeparate(Et[$],Et[be]),_=$,E=be),(Z!==w||Me!==v||ue!==y||Xe!==x)&&(s.blendFuncSeparate(dt[Z],dt[Me],dt[ue],dt[Xe]),w=Z,v=Me,y=ue,x=Xe),(ht.equals(T)===!1||fe!==D)&&(s.blendColor(ht.r,ht.g,ht.b,fe),T.copy(ht),D=fe),f=N,I=!1}function kt(N,$){N.side===bn?st(s.CULL_FACE):Pe(s.CULL_FACE);let Z=N.side===Rn;$&&(Z=!Z),Rt(Z),N.blending===As&&N.transparent===!1?Kt(ir):Kt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let Me=N.stencilWrite;o.setTest(Me),Me&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Jt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Pe(s.SAMPLE_ALPHA_TO_COVERAGE):st(s.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(N){L!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),L=N)}function Gt(N){N!==Kd?(Pe(s.CULL_FACE),N!==F&&(N===vh?s.cullFace(s.BACK):N===Jd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):st(s.CULL_FACE),F=N}function vn(N){N!==H&&(Y&&s.lineWidth(N),H=N)}function Jt(N,$,Z){N?(Pe(s.POLYGON_OFFSET_FILL),(R!==$||V!==Z)&&(R=$,V=Z,a.getReversed()&&($=-$,Z=-Z),s.polygonOffset($,Z))):st(s.POLYGON_OFFSET_FILL)}function ln(N){N?Pe(s.SCISSOR_TEST):st(s.SCISSOR_TEST)}function Ut(N){N===void 0&&(N=s.TEXTURE0+Q-1),re!==N&&(s.activeTexture(N),re=N)}function Tn(N,$,Z){Z===void 0&&(re===null?Z=s.TEXTURE0+Q-1:Z=re);let Me=le[Z];Me===void 0&&(Me={type:void 0,texture:void 0},le[Z]=Me),(Me.type!==N||Me.texture!==$)&&(re!==Z&&(s.activeTexture(Z),re=Z),s.bindTexture(N,$||Ke[N]),Me.type=N,Me.texture=$)}function z(){let N=le[re];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Nn(){try{s.compressedTexImage2D(...arguments)}catch(N){at("WebGLState:",N)}}function Ot(){try{s.compressedTexImage3D(...arguments)}catch(N){at("WebGLState:",N)}}function Ct(){try{s.texSubImage2D(...arguments)}catch(N){at("WebGLState:",N)}}function _e(){try{s.texSubImage3D(...arguments)}catch(N){at("WebGLState:",N)}}function Yt(){try{s.compressedTexSubImage2D(...arguments)}catch(N){at("WebGLState:",N)}}function Qe(){try{s.compressedTexSubImage3D(...arguments)}catch(N){at("WebGLState:",N)}}function Ve(){try{s.texStorage2D(...arguments)}catch(N){at("WebGLState:",N)}}function P(){try{s.texStorage3D(...arguments)}catch(N){at("WebGLState:",N)}}function S(){try{s.texImage2D(...arguments)}catch(N){at("WebGLState:",N)}}function X(){try{s.texImage3D(...arguments)}catch(N){at("WebGLState:",N)}}function de(N){return p[N]!==void 0?p[N]:s.getParameter(N)}function oe(N,$){p[N]!==$&&(s.pixelStorei(N,$),p[N]=$)}function xe(N){ne.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),ne.copy(N))}function ye(N){Ee.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Ee.copy(N))}function se(N,$){let Z=c.get($);Z===void 0&&(Z=new WeakMap,c.set($,Z));let Me=Z.get(N);Me===void 0&&(Me=s.getUniformBlockIndex($,N.name),s.uniformBlockBinding($,Me,Me),Z.set(N,Me))}function ie(N,$,Z){let be=c.get($).get(N);l[be]!==Z&&(s.bindBufferBase(s.UNIFORM_BUFFER,be,Z),l[be]=Z)}function ve(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},p={},re=null,le={},d={},l={},h=new WeakMap,m=[],b=null,g=!1,f=null,_=null,w=null,v=null,E=null,y=null,x=null,T=new Ce(0,0,0),D=0,I=!1,L=null,F=null,H=null,R=null,V=null,ne.set(0,0,s.canvas.width,s.canvas.height),Ee.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Pe,disable:st,bindFramebuffer:wt,drawBuffers:Ze,useProgram:At,setBlending:Kt,setMaterial:kt,setFlipSided:Rt,setCullFace:Gt,setLineWidth:vn,setPolygonOffset:Jt,setScissorTest:ln,activeTexture:Ut,bindTexture:Tn,unbindTexture:z,compressedTexImage2D:Nn,compressedTexImage3D:Ot,texImage2D:S,texImage3D:X,pixelStorei:oe,getParameter:de,updateUBOMapping:se,uniformBlockBinding:ie,texStorage2D:Ve,texStorage3D:P,texSubImage2D:Ct,texSubImage3D:_e,compressedTexSubImage2D:Yt,compressedTexSubImage3D:Qe,scissor:xe,viewport:ye,reset:ve}}function nv(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap,p=new Set,d,h=new WeakMap,m=new Set,b=new FinalizationRegistry(P=>m.delete(P)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(P,S){return g?new OffscreenCanvas(P,S):Fr("canvas")}function _(P,S,X){let de=1,oe=Ve(P);if((oe.width>X||oe.height>X)&&(de=X/Math.max(oe.width,oe.height)),de<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let xe=Math.floor(de*oe.width),ye=Math.floor(de*oe.height);d===void 0&&(d=f(xe,ye));let se=S?f(xe,ye):d;return se.width=xe,se.height=ye,se.getContext("2d").drawImage(P,0,0,xe,ye),je("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+xe+"x"+ye+")."),se}else return"data"in P&&je("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}function w(P){return P.generateMipmaps}function v(P){s.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(P,S,X,de,oe,xe=!1){if(P!==null){if(s[P]!==void 0)return s[P];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ye;de&&(ye=e.get("EXT_texture_norm16"),ye||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=S;if(S===s.RED&&(X===s.FLOAT&&(se=s.R32F),X===s.HALF_FLOAT&&(se=s.R16F),X===s.UNSIGNED_BYTE&&(se=s.R8),X===s.UNSIGNED_SHORT&&ye&&(se=ye.R16_EXT),X===s.SHORT&&ye&&(se=ye.R16_SNORM_EXT)),S===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(se=s.R8UI),X===s.UNSIGNED_SHORT&&(se=s.R16UI),X===s.UNSIGNED_INT&&(se=s.R32UI),X===s.BYTE&&(se=s.R8I),X===s.SHORT&&(se=s.R16I),X===s.INT&&(se=s.R32I)),S===s.RG&&(X===s.FLOAT&&(se=s.RG32F),X===s.HALF_FLOAT&&(se=s.RG16F),X===s.UNSIGNED_BYTE&&(se=s.RG8),X===s.UNSIGNED_SHORT&&ye&&(se=ye.RG16_EXT),X===s.SHORT&&ye&&(se=ye.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(se=s.RG8UI),X===s.UNSIGNED_SHORT&&(se=s.RG16UI),X===s.UNSIGNED_INT&&(se=s.RG32UI),X===s.BYTE&&(se=s.RG8I),X===s.SHORT&&(se=s.RG16I),X===s.INT&&(se=s.RG32I)),S===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(se=s.RGB8UI),X===s.UNSIGNED_SHORT&&(se=s.RGB16UI),X===s.UNSIGNED_INT&&(se=s.RGB32UI),X===s.BYTE&&(se=s.RGB8I),X===s.SHORT&&(se=s.RGB16I),X===s.INT&&(se=s.RGB32I)),S===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(se=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(se=s.RGBA16UI),X===s.UNSIGNED_INT&&(se=s.RGBA32UI),X===s.BYTE&&(se=s.RGBA8I),X===s.SHORT&&(se=s.RGBA16I),X===s.INT&&(se=s.RGBA32I)),S===s.RGB&&(X===s.UNSIGNED_SHORT&&ye&&(se=ye.RGB16_EXT),X===s.SHORT&&ye&&(se=ye.RGB16_SNORM_EXT),X===s.UNSIGNED_INT_5_9_9_9_REV&&(se=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(se=s.R11F_G11F_B10F)),S===s.RGBA){let ie=xe?wa:bt.getTransfer(oe);X===s.FLOAT&&(se=s.RGBA32F),X===s.HALF_FLOAT&&(se=s.RGBA16F),X===s.UNSIGNED_BYTE&&(se=ie===Lt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT&&ye&&(se=ye.RGBA16_EXT),X===s.SHORT&&ye&&(se=ye.RGBA16_SNORM_EXT),X===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(P,S){let X;return P?S===null||S===_i||S===or?X=s.DEPTH24_STENCIL8:S===Zn?X=s.DEPTH32F_STENCIL8:S===Zr&&(X=s.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===_i||S===or?X=s.DEPTH_COMPONENT24:S===Zn?X=s.DEPTH_COMPONENT32F:S===Zr&&(X=s.DEPTH_COMPONENT16),X}function T(P,S){return w(P)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==pn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function D(P){let S=new WeakRef(P);n.get(P).__ref=S,m.add(S),b.register(P,S,S)}function I(P){let S=n.get(P).__ref;S!==void 0&&(m.delete(S),b.unregister(S))}function L(P){H(P.target)}function F(P){R(P.target)}function H(P){P.removeEventListener("dispose",L),I(P),Q(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&p.delete(P)}function R(P){P.removeEventListener("dispose",F),I(P),he(P)}function V(){for(let P of m){let S=P.deref();S!==void 0&&(S.isRenderTarget===!0?R(S):H(S))}m.clear(),p.clear()}function Q(P){let S=n.get(P);if(S.__webglInit===void 0)return;let X=P.source,de=h.get(X);if(de){let oe=de[S.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&Y(P),Object.keys(de).length===0&&h.delete(X)}n.remove(P)}function Y(P){let S=n.get(P);s.deleteTexture(S.__webglTexture);let X=P.source,de=h.get(X);delete de[S.__cacheKey],a.memory.textures--}function he(P){let S=n.get(P);S.__depthDisposeCallback&&S.__depthDisposeCallback();let X=P.depthTexture;if(X&&X.renderTarget===P&&H(X),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(S.__webglFramebuffer[oe]))for(let xe=0;xe<S.__webglFramebuffer[oe].length;xe++)s.deleteFramebuffer(S.__webglFramebuffer[oe][xe]);else s.deleteFramebuffer(S.__webglFramebuffer[oe]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[oe])}else{if(Array.isArray(S.__webglFramebuffer))for(let oe=0;oe<S.__webglFramebuffer.length;oe++)s.deleteFramebuffer(S.__webglFramebuffer[oe]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let oe=0;oe<S.__webglColorRenderbuffer.length;oe++)S.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[oe]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let de=P.textures;for(let oe=0,xe=de.length;oe<xe;oe++){let ye=n.get(de[oe]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),a.memory.textures--),n.remove(de[oe])}n.remove(P)}let ee=0;function re(){ee=0}function le(){return ee}function Ge(P){ee=P}function ot(){let P=ee;return P>=i.maxTextures&&je("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),ee+=1,P}function ne(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.mipmapsAutoUpdate),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function Ee(P,S){let X=n.get(P);if(P.isVideoTexture&&Yt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){let de=P.image;if(de===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{kt(X,P,S);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+S)}function qe(P,S){let X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){kt(X,P,S);return}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+S)}function Ke(P,S){let X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){kt(X,P,S);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+S)}function Pe(P,S){let X=n.get(P);if(P.version>0&&X.__version!==P.version){Rt(X,P,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+S)}let st={[xs]:s.REPEAT,[ni]:s.CLAMP_TO_EDGE,[Lr]:s.MIRRORED_REPEAT},wt={[en]:s.NEAREST,[El]:s.NEAREST_MIPMAP_NEAREST,[ar]:s.NEAREST_MIPMAP_LINEAR,[pn]:s.LINEAR,[Yr]:s.LINEAR_MIPMAP_NEAREST,[oi]:s.LINEAR_MIPMAP_LINEAR},Ze={[wf]:s.NEVER,[Gh]:s.ALWAYS,[Tf]:s.LESS,[Bh]:s.LEQUAL,[Af]:s.EQUAL,[zh]:s.GEQUAL,[Ef]:s.GREATER,[Rf]:s.NOTEQUAL};function At(P,S){if(S.type===Zn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===pn||S.magFilter===Yr||S.magFilter===ar||S.magFilter===oi||S.minFilter===pn||S.minFilter===Yr||S.minFilter===ar||S.minFilter===oi)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,st[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,st[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,st[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,wt[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,wt[S.minFilter]),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Ze[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===en||S.minFilter!==ar&&S.minFilter!==oi||S.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Et(P,S){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",L),D(S));let de=S.source,oe=h.get(de);oe===void 0&&(oe={},h.set(de,oe));let xe=ne(S);if(xe!==P.__cacheKey){oe[xe]===void 0&&(oe[xe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),oe[xe].usedTimes++;let ye=oe[P.__cacheKey];ye!==void 0&&(oe[P.__cacheKey].usedTimes--,ye.usedTimes===0&&Y(S)),P.__cacheKey=xe,P.__webglTexture=oe[xe].texture}return X}function dt(P,S,X){return Math.floor(Math.floor(P/X)/S)}function Kt(P,S,X,de){let xe=P.updateRanges;if(xe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,X,de,S.data);else{xe.sort((N,$)=>N.start-$.start);let ye=0;for(let N=1;N<xe.length;N++){let $=xe[ye],Z=xe[N],Me=$.start+$.count,be=dt(Z.start,S.width,4),ue=dt($.start,S.width,4);Z.start<=Me+1&&be===ue&&dt(Z.start+Z.count-1,S.width,4)===be?$.count=Math.max($.count,Z.start+Z.count-$.start):(++ye,xe[ye]=Z)}xe.length=ye+1;let se=t.getParameter(s.UNPACK_ROW_LENGTH),ie=t.getParameter(s.UNPACK_SKIP_PIXELS),ve=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let N=0,$=xe.length;N<$;N++){let Z=xe[N],Me=Math.floor(Z.start/4),be=Math.ceil(Z.count/4),ue=Me%S.width,Xe=Math.floor(Me/S.width),ht=be,fe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(s.UNPACK_SKIP_ROWS,Xe),t.texSubImage2D(s.TEXTURE_2D,0,ue,Xe,ht,fe,X,de,S.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,se),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(s.UNPACK_SKIP_ROWS,ve)}}function kt(P,S,X){let de=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(de=s.TEXTURE_3D);let oe=Et(P,S),xe=S.source;t.bindTexture(de,P.__webglTexture,s.TEXTURE0+X);let ye=n.get(xe);if(xe.version!==ye.__version||oe===!0){if(t.activeTexture(s.TEXTURE0+X),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let fe=bt.getPrimaries(bt.workingColorSpace),Oe=S.colorSpace===rs?null:bt.getPrimaries(S.colorSpace),nt=S.colorSpace===rs||fe===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let ie=_(S.image,!1,i.maxTextureSize);ie=Qe(S,ie);let ve=r.convert(S.format,S.colorSpace),N=r.convert(S.type),$=y(S.internalFormat,ve,N,S.normalized,S.colorSpace,S.isVideoTexture);At(de,S);let Z,Me=S.mipmaps,be=S.isVideoTexture!==!0,ue=ye.__version===void 0||oe===!0,Xe=xe.dataReady,ht=T(S,ie);if(S.isDepthTexture)$=x(S.format===ss,S.type),ue&&(be?t.texStorage2D(s.TEXTURE_2D,1,$,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,$,ie.width,ie.height,0,ve,N,null));else if(S.isDataTexture)if(Me.length>0){be&&ue&&t.texStorage2D(s.TEXTURE_2D,ht,$,Me[0].width,Me[0].height);for(let fe=0,Oe=Me.length;fe<Oe;fe++)Z=Me[fe],be?Xe&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Z.width,Z.height,ve,N,Z.data):t.texImage2D(s.TEXTURE_2D,fe,$,Z.width,Z.height,0,ve,N,Z.data);S.generateMipmaps=!1}else be?(ue&&t.texStorage2D(s.TEXTURE_2D,ht,$,ie.width,ie.height),Xe&&Kt(S,ie,ve,N)):t.texImage2D(s.TEXTURE_2D,0,$,ie.width,ie.height,0,ve,N,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){be&&ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ht,$,Me[0].width,Me[0].height,ie.depth);for(let fe=0,Oe=Me.length;fe<Oe;fe++)if(Z=Me[fe],S.format!==li)if(ve!==null)if(be){if(Xe)if(S.layerUpdates.size>0){let nt=Zh(Z.width,Z.height,S.format,S.type);for(let Re of S.layerUpdates){let yt=Z.data.subarray(Re*nt/Z.data.BYTES_PER_ELEMENT,(Re+1)*nt/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,Re,Z.width,Z.height,1,ve,yt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Z.width,Z.height,ie.depth,ve,Z.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,$,Z.width,Z.height,ie.depth,0,Z.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?Xe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Z.width,Z.height,ie.depth,ve,N,Z.data):t.texImage3D(s.TEXTURE_2D_ARRAY,fe,$,Z.width,Z.height,ie.depth,0,ve,N,Z.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{be&&ue&&t.texStorage2D(s.TEXTURE_2D,ht,$,Me[0].width,Me[0].height);for(let fe=0,Oe=Me.length;fe<Oe;fe++)Z=Me[fe],S.format!==li?ve!==null?be?Xe&&t.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,Z.width,Z.height,ve,Z.data):t.compressedTexImage2D(s.TEXTURE_2D,fe,$,Z.width,Z.height,0,Z.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?Xe&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Z.width,Z.height,ve,N,Z.data):t.texImage2D(s.TEXTURE_2D,fe,$,Z.width,Z.height,0,ve,N,Z.data)}else if(S.isDataArrayTexture)if(be){if(ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ht,$,ie.width,ie.height,ie.depth),Xe)if(S.layerUpdates.size>0){let fe=Zh(ie.width,ie.height,S.format,S.type);for(let Oe of S.layerUpdates){let nt=ie.data.subarray(Oe*fe/ie.data.BYTES_PER_ELEMENT,(Oe+1)*fe/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Oe,ie.width,ie.height,1,ve,N,nt)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,N,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,$,ie.width,ie.height,ie.depth,0,ve,N,ie.data);else if(S.isData3DTexture)be?(ue&&t.texStorage3D(s.TEXTURE_3D,ht,$,ie.width,ie.height,ie.depth),Xe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,N,ie.data)):t.texImage3D(s.TEXTURE_3D,0,$,ie.width,ie.height,ie.depth,0,ve,N,ie.data);else if(S.isFramebufferTexture){if(ue)if(be)t.texStorage2D(s.TEXTURE_2D,ht,$,ie.width,ie.height);else{let fe=ie.width,Oe=ie.height;for(let nt=0;nt<ht;nt++)t.texImage2D(s.TEXTURE_2D,nt,$,fe,Oe,0,ve,N,null),fe>>=1,Oe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let fe=s.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),ie.parentNode!==fe){fe.appendChild(ie),p.add(S),fe.onpaint=Oe=>{let nt=Oe.changedElements;for(let Re of p)nt.includes(Re.image)&&(Re.needsUpdate=!0)},fe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ie);else{let nt=s.RGBA,Re=s.RGBA,yt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,nt,Re,yt,ie)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Me.length>0){if(be&&ue){let fe=Ve(Me[0]);t.texStorage2D(s.TEXTURE_2D,ht,$,fe.width,fe.height)}for(let fe=0,Oe=Me.length;fe<Oe;fe++)Z=Me[fe],be?Xe&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,ve,N,Z):t.texImage2D(s.TEXTURE_2D,fe,$,ve,N,Z);S.generateMipmaps=!1}else if(be){if(ue){let fe=Ve(ie);t.texStorage2D(s.TEXTURE_2D,ht,$,fe.width,fe.height)}Xe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,N,ie)}else t.texImage2D(s.TEXTURE_2D,0,$,ve,N,ie);w(S)&&S.mipmapsAutoUpdate===!0&&v(de),ye.__version=xe.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Rt(P,S,X){if(S.image.length!==6)return;let de=Et(P,S),oe=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+X);let xe=n.get(oe);if(oe.version!==xe.__version||de===!0){t.activeTexture(s.TEXTURE0+X);let ye=bt.getPrimaries(bt.workingColorSpace),se=S.colorSpace===rs?null:bt.getPrimaries(S.colorSpace),ie=S.colorSpace===rs||ye===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ve=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,$=[];for(let Re=0;Re<6;Re++)!ve&&!N?$[Re]=_(S.image[Re],!0,i.maxCubemapSize):$[Re]=N?S.image[Re].image:S.image[Re],$[Re]=Qe(S,$[Re]);let Z=$[0],Me=r.convert(S.format,S.colorSpace),be=r.convert(S.type),ue=y(S.internalFormat,Me,be,S.normalized,S.colorSpace),Xe=S.isVideoTexture!==!0,ht=xe.__version===void 0||de===!0,fe=oe.dataReady,Oe=T(S,Z);At(s.TEXTURE_CUBE_MAP,S);let nt;if(S.isDepthTexture){if(ue=x(S.format===ss,S.type),ht)if(Xe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ue,Z.width,Z.height);else for(let Re=0;Re<6;Re++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ue,Z.width,Z.height,0,Me,be,null)}else if(ve){Xe&&ht&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,ue,Z.width,Z.height);for(let Re=0;Re<6;Re++){nt=$[Re].mipmaps;for(let yt=0;yt<nt.length;yt++){let qt=nt[yt];S.format!==li?Me!==null?Xe?fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,yt,0,0,qt.width,qt.height,Me,qt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,yt,ue,qt.width,qt.height,0,qt.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,yt,0,0,qt.width,qt.height,Me,be,qt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,yt,ue,qt.width,qt.height,0,Me,be,qt.data)}}}else{if(nt=S.mipmaps,Xe&&ht){nt.length>0&&Oe++;let Re=Ve($[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,ue,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(N){Xe?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,$[Re].width,$[Re].height,Me,be,$[Re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ue,$[Re].width,$[Re].height,0,Me,be,$[Re].data);for(let yt=0;yt<nt.length;yt++){let An=nt[yt].image[Re].image;Xe?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,yt+1,0,0,An.width,An.height,Me,be,An.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,yt+1,ue,An.width,An.height,0,Me,be,An.data)}}else{Xe?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Me,be,$[Re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ue,Me,be,$[Re]);for(let yt=0;yt<nt.length;yt++){let qt=nt[yt];Xe?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,yt+1,0,0,Me,be,qt.image[Re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,yt+1,ue,Me,be,qt.image[Re])}}}w(S)&&S.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),xe.__version=oe.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Gt(P,S,X,de,oe,xe){let ye=r.convert(X.format,X.colorSpace),se=r.convert(X.type),ie=y(X.internalFormat,ye,se,X.normalized,X.colorSpace),ve=n.get(S),N=n.get(X);if(N.__renderTarget=S,!ve.__hasExternalTextures){let $=Math.max(1,S.width>>xe),Z=Math.max(1,S.height>>xe);oe===s.TEXTURE_3D||oe===s.TEXTURE_2D_ARRAY?t.texImage3D(oe,xe,ie,$,Z,S.depth,0,ye,se,null):t.texImage2D(oe,xe,ie,$,Z,0,ye,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),_e(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,oe,N.__webglTexture,0,Ct(S)):(oe===s.TEXTURE_2D||oe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,oe,N.__webglTexture,xe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function vn(P,S,X){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer){let de=S.depthTexture,oe=de&&de.isDepthTexture?de.type:null,xe=x(S.stencilBuffer,oe),ye=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_e(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(S),xe,S.width,S.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(S),xe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,xe,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,P)}else{let de=S.textures;for(let oe=0;oe<de.length;oe++){let xe=de[oe],ye=r.convert(xe.format,xe.colorSpace),se=r.convert(xe.type),ie=y(xe.internalFormat,ye,se,xe.normalized,xe.colorSpace);_e(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(S),ie,S.width,S.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(S),ie,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ie,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Jt(P,S,X){let de=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(S.depthTexture);oe.__renderTarget=S;let xe=de?S.depthTexture.image[0]:S.depthTexture.image;(!oe.__webglTexture||xe.width!==S.width||xe.height!==S.height)&&(xe.width=S.width,xe.height=S.height,S.depthTexture.needsUpdate=!0),de?Pe(S.depthTexture,0):Ee(S.depthTexture,0);let ye=oe.__webglTexture,se=Ct(S),ie=de?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,ve=S.depthTexture.format===ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ji)_e(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,ie,ye,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,ve,ie,ye,0);else if(S.depthTexture.format===ss)_e(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,ie,ye,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,ve,ie,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ln(P){let S=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let de=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),de){let oe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,de.removeEventListener("dispose",oe)};de.addEventListener("dispose",oe),S.__depthDisposeCallback=oe}S.__boundDepthTexture=de}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(X)for(let de=0;de<6;de++)Jt(S.__webglFramebuffer[de],P,de);else P.texture.mipmaps.length>0?Jt(S.__webglFramebuffer[0],P,0):Jt(S.__webglFramebuffer,P,0);else if(X){S.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[de]),S.__webglDepthbuffer[de]===void 0)S.__webglDepthbuffer[de]=s.createRenderbuffer(),vn(S.__webglDepthbuffer[de],P,!1);else{let oe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=S.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,xe)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),vn(S.__webglDepthbuffer,P,!1);else{let oe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,xe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(P,S,X){let de=n.get(P);S!==void 0&&Gt(de.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&ln(P)}function Tn(P){let S=P.texture,X=n.get(P),de=n.get(S);P.addEventListener("dispose",F),D(P);let oe=P.textures,xe=P.isWebGLCubeRenderTarget===!0,ye=oe.length>1;if(ye||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=S.version,a.memory.textures++),xe){X.__webglFramebuffer=[];for(let se=0;se<6;se++)if(S.mipmaps.length>0){X.__webglFramebuffer[se]=[];for(let ie=0;ie<S.mipmaps.length;ie++)X.__webglFramebuffer[se][ie]=s.createFramebuffer()}else X.__webglFramebuffer[se]=s.createFramebuffer()}else{if(S.mipmaps.length>0){X.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)X.__webglFramebuffer[se]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(ye)for(let se=0,ie=oe.length;se<ie;se++){let ve=n.get(oe[se]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&_e(P)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let se=0;se<oe.length;se++){let ie=oe[se];X.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[se]);let ve=r.convert(ie.format,ie.colorSpace),N=r.convert(ie.type),$=y(ie.internalFormat,ve,N,ie.normalized,ie.colorSpace,P.isXRRenderTarget===!0),Z=Ct(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,$,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,X.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),vn(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xe){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),At(s.TEXTURE_CUBE_MAP,S);for(let se=0;se<6;se++)if(S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)Gt(X.__webglFramebuffer[se][ie],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ie);else Gt(X.__webglFramebuffer[se],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);w(S)?v(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(ye){for(let se=0,ie=oe.length;se<ie;se++){let ve=oe[se],N=n.get(ve),$=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&($=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,N.__webglTexture),At($,ve),Gt(X.__webglFramebuffer,P,ve,s.COLOR_ATTACHMENT0+se,$,0),w(ve)&&v($)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(se=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,de.__webglTexture),At(se,S),S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)Gt(X.__webglFramebuffer[ie],P,S,s.COLOR_ATTACHMENT0,se,ie);else Gt(X.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,se,0);w(S)?v(se):S.mipmaps.length>0&&s.texParameteri(se,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&ln(P)}function z(P){let S=P.textures;for(let X=0,de=S.length;X<de;X++){let oe=S[X];if(w(oe)&&oe.mipmapsAutoUpdate===!0){let xe=E(P),ye=n.get(oe).__webglTexture;t.bindTexture(xe,ye),v(xe),t.unbindTexture()}}}let Nn=[];function Ot(P){if(P.samples>0){if(_e(P)===!1){let S=P.textures,X=P.width,de=P.height,oe=s.COLOR_BUFFER_BIT,xe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(P),se=S.length>1;if(se)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[ve]);let N=n.get(S[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,X,de,0,0,X,de,oe,s.NEAREST),l===!0&&(Nn.length=0,Nn.push(s.COLOR_ATTACHMENT0+ve),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Nn.push(xe),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,ye.__webglColorRenderbuffer[ve]);let N=n.get(S[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,N,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let S=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ct(P){return Math.min(i.maxSamples,P.samples)}function _e(P){let S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Yt(P){let S=a.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function Qe(P,S){let X=P.colorSpace,de=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Un&&X!==rs&&(bt.getTransfer(X)===Lt?(de!==li||oe!==Wn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",X)),S}function Ve(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=ot,this.resetTextureUnits=re,this.getTextureUnits=le,this.setTextureUnits=Ge,this.setTexture2D=Ee,this.setTexture2DArray=qe,this.setTexture3D=Ke,this.setTextureCube=Pe,this.rebindTextures=Ut,this.setupRenderTarget=Tn,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=ln,this.setupFrameBufferTexture=Gt,this.useMultisampledRTT=_e,this.dispose=V}function iv(s,e){function t(n,i=rs){let r,a=bt.getTransfer(i);if(n===Wn)return s.UNSIGNED_BYTE;if(n===Cl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Pl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Nh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lh)return s.BYTE;if(n===Dh)return s.SHORT;if(n===Zr)return s.UNSIGNED_SHORT;if(n===Rl)return s.INT;if(n===_i)return s.UNSIGNED_INT;if(n===Zn)return s.FLOAT;if(n===vi)return s.HALF_FLOAT;if(n===kh)return s.ALPHA;if(n===Uh)return s.RGB;if(n===li)return s.RGBA;if(n===Ji)return s.DEPTH_COMPONENT;if(n===ss)return s.DEPTH_STENCIL;if(n===$r)return s.RED;if(n===Il)return s.RED_INTEGER;if(n===Es)return s.RG;if(n===Ll)return s.RG_INTEGER;if(n===Dl)return s.RGBA_INTEGER;if(n===$a||n===Qa||n===eo||n===to)if(a===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===Nl||n===kl||n===Ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ol||n===Bl||n===zl||n===Gl||n===Hl||n===no||n===Vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ol||n===Bl)return a===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gl)return r.COMPRESSED_R11_EAC;if(n===Hl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===no)return r.COMPRESSED_RG11_EAC;if(n===Vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wl||n===ql||n===Xl||n===jl||n===Kl||n===Jl||n===Yl||n===Zl||n===$l||n===Ql||n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ql)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===rc||n===ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sc)return a===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oc||n===lc||n===io||n===cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===oc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
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

}`,uu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ua(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new On({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new Ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},du=class extends bi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,d=null,h=null,m=null,b=typeof XRWebGLBinding<"u",g=new uu,f={},_=t.getContextAttributes(),w=null,v=null,E=[],y=[],x=new it,T=null,D=null,I=new fn;I.viewport=new Ft;let L=new fn;L.viewport=new Ft;let F=[I,L],H=new vl,R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let Ee=E[ne];return Ee===void 0&&(Ee=new Ur,E[ne]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(ne){let Ee=E[ne];return Ee===void 0&&(Ee=new Ur,E[ne]=Ee),Ee.getGripSpace()},this.getHand=function(ne){let Ee=E[ne];return Ee===void 0&&(Ee=new Ur,E[ne]=Ee),Ee.getHandSpace()};function Q(ne){let Ee=y.indexOf(ne.inputSource);if(Ee===-1)return;let qe=E[Ee];qe!==void 0&&(qe.update(ne.inputSource,ne.frame,c||a),qe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Y(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",he);for(let ne=0;ne<E.length;ne++){let Ee=y[ne];Ee!==null&&(y[ne]=null,E[ne].disconnect(Ee))}R=null,V=null,g.reset();for(let ne in f)delete f[ne];if(e.setRenderTarget(w),h=null,d=null,p=null,i=null,v=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(x.width,x.height,!1),D!==null){let ne=D.camera;ne.fov=D.fov,ne.zoom=D.zoom,ne.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(i,t)),p},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",he),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let qe=null,Ke=null,Pe=null;_.depth&&(Pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,qe=_.stencil?ss:Ji,Ke=_.stencil?or:_i);let st={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(st),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Jn(d.textureWidth,d.textureHeight,{format:li,type:Wn,depthTexture:new Zi(d.textureWidth,d.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,qe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let qe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,qe),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Jn(h.framebufferWidth,h.framebufferHeight,{format:li,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function he(ne){for(let Ee=0;Ee<ne.removed.length;Ee++){let qe=ne.removed[Ee],Ke=y.indexOf(qe);Ke>=0&&(y[Ke]=null,E[Ke].disconnect(qe))}for(let Ee=0;Ee<ne.added.length;Ee++){let qe=ne.added[Ee],Ke=y.indexOf(qe);if(Ke===-1){for(let st=0;st<E.length;st++)if(st>=y.length){y.push(qe),Ke=st;break}else if(y[st]===null){y[st]=qe,Ke=st;break}if(Ke===-1)break}let Pe=E[Ke];Pe&&Pe.connect(qe)}}function ee(ne,Ee){Ee===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(Ee.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let Ee=ne.near,qe=ne.far;g.texture!==null&&(g.depthNear>0&&(Ee=g.depthNear),g.depthFar>0&&(qe=g.depthFar)),H.near=L.near=I.near=Ee,H.far=L.far=I.far=qe,(R!==H.near||V!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),R=H.near,V=H.far),H.layers.mask=ne.layers.mask|6,I.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;let Ke=ne.parent,Pe=H.cameras;ee(H,Ke);for(let st=0;st<Pe.length;st++)ee(Pe[st],Ke);H.projectionMatrix.copy(I.projectionMatrix),H.projectionMatrixInverse.copy(I.projectionMatrixInverse),D===null&&ne.isPerspectiveCamera&&(D={camera:ne,fov:ne.fov,zoom:ne.zoom}),re(ne,H,Ke)};function re(ne,Ee,qe){qe===null?ne.matrix.copy(Ee.matrixWorld):(ne.matrix.copy(qe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(Ee.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(Ee.projectionMatrix),ne.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=qs*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(ne){return f[ne]};let le=null;function Ge(ne,Ee){if(u=Ee.getViewerPose(c||a),m=Ee,u!==null){let qe=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let Ke=!1;qe.length!==H.cameras.length&&(H.cameras.length=0,Ke=!0);for(let Ze=0;Ze<qe.length;Ze++){let At=qe[Ze],Et=null;if(h!==null)Et=h.getViewport(At);else{let Kt=p.getViewSubImage(d,At);Et=Kt.viewport,Ze===0&&(e.setRenderTargetTextures(v,Kt.colorTexture,Kt.depthStencilTexture),e.setRenderTarget(v))}let dt=F[Ze];dt===void 0&&(dt=new fn,dt.layers.enable(Ze),dt.viewport=new Ft,F[Ze]=dt),dt.matrix.fromArray(At.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(At.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Et.x,Et.y,Et.width,Et.height),Ze===0&&(H.matrix.copy(dt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ke===!0&&H.cameras.push(dt)}let Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let Ze=p.getDepthInformation(qe[0]);Ze&&Ze.isValid&&Ze.texture&&g.init(Ze,i.renderState)}if(Pe&&Pe.includes("camera-access")&&b){e.state.unbindTexture(),p=n.getBinding();for(let Ze=0;Ze<qe.length;Ze++){let At=qe[Ze].camera;if(At){let Et=f[At];Et||(Et=new Ua,f[At]=Et);let dt=p.getCameraImage(At);Et.sourceTexture=dt}}}}for(let qe=0;qe<E.length;qe++){let Ke=y[qe],Pe=E[qe];Ke!==null&&Pe!==void 0&&Pe.update(Ke,Ee,c||a)}le&&le(ne,Ee),Ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ee}),m=null}let ot=new sp;ot.setAnimationLoop(Ge),this.setAnimationLoop=function(ne){le=ne},this.dispose=function(){}}},av=new Je,pp=new lt;pp.set(-1,0,0,0,1,0,0,0,1);function ov(s,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Kh(s)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function i(g,f,_,w,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),p(g,f)):f.isMeshPhongMaterial?(r(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&h(g,f,v)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),b(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,_,w):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Rn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Rn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let _=e.get(f),w=_.envMap,v=_.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(av.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(pp),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,_,w){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*_,g.scale.value=w*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function h(g,f,_){g.ior.value=f.ior,f.diffuseRoughness>0&&(g.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Rn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function b(g,f){let _=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lv(s,e,t,n){let i={},r={};function a(_,w){let v=w.program;n.uniformBlockBinding(_,v,i[_.id])}function o(_,w){let v=i[_.id];v===void 0&&(m(_),v=l(_),i[_.id]=v,_.addEventListener("dispose",g));let E=w.program;n.updateUBOMapping(_,E);let y=e.render.frame;r[_.id]!==y&&(c(_),r[_.id]=y)}function l(_){let w=s.createBuffer(),v=_.__size,E=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,v,E),s.bindBuffer(s.UNIFORM_BUFFER,null),w}function c(_){let w=i[_.id],v=_.uniforms,E=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let y=0,x=v.length;y<x;y++){let T=v[y];if(Array.isArray(T))for(let D=0,I=T.length;D<I;D++)u(T[D],y,D,E);else u(T,y,0,E)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(_,w,v,E){if(d(_,w,v,E)===!0){let y=_.__offset,x=_.value;if(Array.isArray(x)){let T=0;for(let D=0;D<x.length;D++){let I=x[D],L=b(I,!0);p(I,_.__data,T),T+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,_.__data)}}function p(_,w,v){typeof _=="number"||typeof _=="boolean"?w[v]=_:_.isMatrix3?(w[v]=_.elements[0],w[v+1]=_.elements[1],w[v+2]=_.elements[2],w[v+3]=0,w[v+4]=_.elements[3],w[v+5]=_.elements[4],w[v+6]=_.elements[5],w[v+7]=0,w[v+8]=_.elements[6],w[v+9]=_.elements[7],w[v+10]=_.elements[8],w[v+11]=0):ArrayBuffer.isView(_)?w.set(_.subarray(0,w.length-v),v):_.toArray(w,v)}function d(_,w,v,E){let y=_.value,x=w+"_"+v;if(Array.isArray(y)){E[x]===void 0&&(E[x]=[]);let T=E[x],D=!1;for(let I=0;I<y.length;I++)h(y[I],T,I)===!0&&(D=!0);return D}return h(y,E,x)}function h(_,w,v){if(w[v]===void 0)return typeof _=="number"||typeof _=="boolean"?w[v]=_:ArrayBuffer.isView(_)?w[v]=_.slice():w[v]=_.clone(),!0;{let E=w[v];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return w[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function m(_){let w=_.uniforms,v=0,E=16;for(let x=0,T=w.length;x<T;x++){let D=Array.isArray(w[x])?w[x]:[w[x]];for(let I=0,L=D.length;I<L;I++){let F=D[I],H=Array.isArray(F.value)?F.value:[F.value],R=Array.isArray(w[x])||Array.isArray(F.value),V=v;for(let Y=0,he=H.length;Y<he;Y++){let ee=H[Y],re=b(ee,R),le=v%E,Ge=le%re.boundary,ot=le+Ge;v+=Ge,ot!==0&&E-ot<re.storage&&(v+=E-ot),Y===0&&(V=v),v+=re.storage}let Q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Q((v-V)/Float32Array.BYTES_PER_ELEMENT),F.__offset=V}}let y=v%E;return y>0&&(v+=E-y),_.__size=v,_.__cache={},this}function b(_,w){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):je("WebGLRenderer: Unsupported uniform value type.",_),w===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(_){let w=_.target;w.removeEventListener("dispose",g),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function f(){for(let _ in i)s.deleteBuffer(i[_]);i={},r={}}return{bind:a,update:o,dispose:f}}var cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Di=null;function hv(){return Di===null&&(Di=new _s(cv,16,16,Es,vi),Di.name="DFG_LUT",Di.minFilter=pn,Di.magFilter=pn,Di.wrapS=ni,Di.wrapT=ni,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}var bc=class{constructor(e={}){let{canvas:t=Cf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Wn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let b=h,g=new Set([Dl,Ll,Il]),f=new Set([Wn,_i,Zr,or,Cl,Pl]),_=new Uint32Array(4),w=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},E=null,y=null,x=[],T=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,F=null,H=null,R=null,V=null;this._outputColorSpace=Ht;let Q=0,Y=0,he=null,ee=-1,re=null,le=new Ft,Ge=new Ft,ot=null,ne=new Ce(0),Ee=0,qe=t.width,Ke=t.height,Pe=1,st=null,wt=null,Ze=new Ft(0,0,qe,Ke),At=new Ft(0,0,qe,Ke),Et=!1,dt=new vs,Kt=new ll,kt=!1,Rt=!1,Gt=new Je,vn=new B,Jt=new Ft,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function Tn(){return he===null?Pe:1}let z=n;function Nn(A,O){return t.getContext(A,O)}let Ot,Ct,_e,Yt,Qe,Ve,P,S,X,de,oe,xe,ye,se,ie,ve,N,$,Z,Me,be,ue,Xe;try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Re,!1),z===null){let O="webgl2";if(z=Nn(O,A),z===null)throw Nn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ht()}catch(A){throw t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),at("WebGLRenderer: "+A.message),A}function ht(){Ot=new yx(z),Ot.init(),be=new iv(z,Ot),Ct=new hx(z,Ot,e,be),_e=new tv(z,Ot),Ct.reversedDepthBuffer&&d&&_e.buffers.depth.setReversed(!0),H=z.createFramebuffer(),R=z.createFramebuffer(),V=z.createFramebuffer(),Yt=new wx(z),Qe=new G_,Ve=new nv(z,Ot,_e,Qe,Ct,be,Yt),P=new vx(I),S=new Ag(z),ue=new lx(z,S),X=new Mx(z,S,Yt,ue),de=new Ax(z,X,S,ue,Yt),$=new Tx(z,Ct,Ve),ie=new ux(Qe),oe=new z_(I,P,Ot,Ct,ue,ie),xe=new ov(I,Qe),ye=new V_,se=new J_(Ot),N=new ox(I,P,_e,de,m,l),ve=new ev(I,de,Ct),Xe=new lv(z,Yt,Ct,_e),Z=new cx(z,Ot,Yt),Me=new Sx(z,Ot,Yt),Yt.programs=oe.programs,I.capabilities=Ct,I.extensions=Ot,I.properties=Qe,I.renderLists=ye,I.shadowMap=ve,I.state=_e,I.info=Yt}b!==Wn&&(D=new Rx(b,t.width,t.height,o,i,r));let fe=new du(I,z);this.xr=fe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let A=Ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(A){A!==void 0&&(Pe=A,this.setSize(qe,Ke,!1))},this.getSize=function(A){return A.set(qe,Ke)},this.setSize=function(A,O,K=!0){if(fe.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=A,Ke=O,t.width=Math.floor(A*Pe),t.height=Math.floor(O*Pe),K===!0&&(t.style.width=A+"px",t.style.height=O+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(qe*Pe,Ke*Pe).floor()},this.setDrawingBufferSize=function(A,O,K){qe=A,Ke=O,Pe=K,t.width=Math.floor(A*K),t.height=Math.floor(O*K),this.setViewport(0,0,A,O)},this.setEffects=function(A){if(b===Wn){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let O=0;O<A.length;O++)if(A[O].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(le)},this.getViewport=function(A){return A.copy(Ze)},this.setViewport=function(A,O,K,W){A.isVector4?Ze.set(A.x,A.y,A.z,A.w):Ze.set(A,O,K,W),_e.viewport(le.copy(Ze).multiplyScalar(Tn()).round())},this.getScissor=function(A){return A.copy(At)},this.setScissor=function(A,O,K,W){A.isVector4?At.set(A.x,A.y,A.z,A.w):At.set(A,O,K,W),_e.scissor(Ge.copy(At).multiplyScalar(Tn()).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(A){_e.setScissorTest(Et=A)},this.setOpaqueSort=function(A){st=A},this.setTransparentSort=function(A){wt=A},this.getClearColor=function(A){return A.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,K=!0){let W=0;if(A){let j=!1;if(he!==null){let Se=he.texture.format;j=g.has(Se)}if(j){let Se=he.texture.type,ke=f.has(Se),we=N.getClearColor(),Ae=N.getClearAlpha(),Be=we.r,rt=we.g,_t=we.b;ke?(_[0]=Be,_[1]=rt,_[2]=_t,_[3]=Ae,z.clearBufferuiv(z.COLOR,0,_)):(w[0]=Be,w[1]=rt,w[2]=_t,w[3]=Ae,z.clearBufferiv(z.COLOR,0,w))}else W|=z.COLOR_BUFFER_BIT}O&&(W|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),N.dispose(),ye.dispose(),se.dispose(),Ve.dispose(),Qe.dispose(),P.dispose(),de.dispose(),X.dispose(),ue.dispose(),Xe.dispose(),oe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Ds),fe.removeEventListener("sessionend",Fs),Cn.stop()};function Oe(A){A.preventDefault(),Ta("WebGLRenderer: Context Lost."),L=!0}function nt(){Ta("WebGLRenderer: Context Restored."),L=!1;let A=Yt.autoReset,O=ve.enabled,K=ve.autoUpdate,W=ve.needsUpdate,j=ve.type;ht(),Yt.autoReset=A,ve.enabled=O,ve.autoUpdate=K,ve.needsUpdate=W,ve.type=j}function Re(A){at("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function yt(A){let O=A.target;O.removeEventListener("dispose",yt),qt(O)}function qt(A){An(A),Qe.remove(A)}function An(A){let O=Qe.get(A).programs;O!==void 0&&(O.forEach(function(K){oe.releaseProgram(K)}),A.isShaderMaterial&&oe.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,K,W,j,Se){O===null&&(O=ln);let ke=j.isMesh&&j.matrixWorld.determinantAffine()<0,we=mt(A,O,K,W,j);_e.setMaterial(W,ke);let Ae=K.index,Be=1;if(W.wireframe===!0){if(Ae=X.getWireframeAttribute(K),Ae===void 0)return;Be=2}let rt=K.drawRange,_t=K.attributes.position,We=rt.start*Be,gt=(rt.start+rt.count)*Be;Se!==null&&(We=Math.max(We,Se.start*Be),gt=Math.min(gt,(Se.start+Se.count)*Be)),Ae!==null?(We=Math.max(We,0),gt=Math.min(gt,Ae.count)):_t!=null&&(We=Math.max(We,0),gt=Math.min(gt,_t.count));let Xt=gt-We;if(Xt<0||Xt===1/0)return;ue.setup(j,W,we,K,Ae);let Pt,M=Z;if(Ae!==null&&(Pt=S.get(Ae),M=Me,M.setIndex(Pt)),j.isMesh)W.wireframe===!0?(_e.setLineWidth(W.wireframeLinewidth*Tn()),M.setMode(z.LINES)):M.setMode(z.TRIANGLES);else if(j.isLine){let k=W.linewidth;k===void 0&&(k=1),_e.setLineWidth(k*Tn()),j.isLineSegments?M.setMode(z.LINES):j.isLineLoop?M.setMode(z.LINE_LOOP):M.setMode(z.LINE_STRIP)}else j.isPoints?M.setMode(z.POINTS):j.isSprite&&M.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(Ot.get("WEBGL_multi_draw"))M.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let k=j._multiDrawStarts,C=j._multiDrawCounts,te=j._multiDrawCount,U=Ae?S.get(Ae).bytesPerElement:1,ae=Qe.get(W).currentProgram.getUniforms();for(let ge=0;ge<te;ge++)ae.setValue(z,"_gl_DrawID",ge),M.render(k[ge]/U,C[ge])}else if(j.isInstancedMesh)M.renderInstances(We,Xt,j.count);else if(K.isInstancedBufferGeometry){let k=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,C=Math.min(K.instanceCount,k);M.renderInstances(We,Xt,C)}else M.render(We,Xt)};function hs(A,O,K,W){F!==null&&A.isNodeMaterial&&F.setObject(W,A),kt===!0&&ie.setState(A,K,!1),A.transparent===!0&&A.side===bn&&A.forceSinglePass===!1?(A.side=Rn,A.needsUpdate=!0,zi(A,O,W),A.side=Pi,A.needsUpdate=!0,zi(A,O,W),A.side=bn):zi(A,O,W)}this.compile=function(A,O,K=null){K===null&&(K=A),F!==null&&F.renderStart(A,O,K),y=se.get(K),y.init(O),T.push(y),K.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),A!==K&&A.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),y.setupLights(),F!==null&&F.updateLights(y.state.lightsArray),Rt=this.localClippingEnabled,kt=ie.init(this.clippingPlanes,Rt),kt===!0&&ie.setGlobalState(this.clippingPlanes,O),F!==null&&ve.render(y.state.shadowsArray,K,O);let W=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Se=j.material;if(Se)if(Array.isArray(Se))for(let ke=0;ke<Se.length;ke++){let we=Se[ke];hs(we,K,O,j),W.add(we)}else hs(Se,K,O,j),W.add(Se)}),y=T.pop(),F!==null&&F.renderEnd(),W},this.compileAsync=function(A,O,K=null){let W=this.compile(A,O,K);return new Promise(j=>{function Se(){if(W.forEach(function(ke){let Ae=Qe.get(ke).currentProgram;(Ae===void 0||Ae.isReady())&&W.delete(ke)}),W.size===0){j(A);return}setTimeout(Se,10)}Ot.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let En=null;function Oi(A){En&&En(A)}function Ds(){Cn.stop()}function Fs(){Cn.start()}let Cn=new sp;Cn.setAnimationLoop(Oi),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(A){En=A,fe.setAnimationLoop(A),A===null?Cn.stop():Cn.start()},fe.addEventListener("sessionstart",Ds),fe.addEventListener("sessionend",Fs),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(A,O);let K=fe.enabled===!0&&fe.isPresenting===!0,W=D!==null&&(he===null||K)&&D.begin(I,he);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(O),O=fe.getCamera()),A.isScene===!0&&A.onBeforeRender(I,A,O,he),y=se.get(A,T.length),y.init(O),y.state.textureUnits=Ve.getTextureUnits(),T.push(y),Gt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Kt.setFromArrayCamera(O):dt.setFromProjectionMatrix(Gt,ii,O.reversedDepth),Rt=this.localClippingEnabled,kt=ie.init(this.clippingPlanes,Rt),E=ye.get(A,x.length),E.init(),x.push(E),this.info.render.frame++,fe.enabled===!0&&fe.isPresenting===!0){let ke=I.xr.getDepthSensingMesh();ke!==null&&Ne(ke,O,-1/0,I.sortObjects)}Ne(A,O,0,I.sortObjects),E.finish(),F!==null&&F.updateLights(y.state.lightsArray),I.sortObjects===!0&&E.sort(st,wt),Ut=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Ut&&N.addToRenderList(E,A),this.info.autoReset===!0&&this.info.reset(),kt===!0&&ie.beginShadows();let j=y.state.shadowsArray;if(ve.render(j,A,O),kt===!0&&ie.endShadows(),(W&&D.hasRenderPass())===!1){let ke=E.opaque,we=E.transmissive;if(y.setupLights(),O.isArrayCamera){let Ae=O.cameras;if(we.length>0)for(let Be=0,rt=Ae.length;Be<rt;Be++){let _t=Ae[Be];Bi(ke,we,A,_t)}Ut&&N.render(A);for(let Be=0,rt=Ae.length;Be<rt;Be++){let _t=Ae[Be];wi(E,A,_t,_t.viewport)}}else we.length>0&&Bi(ke,we,A,O),Ut&&N.render(A),wi(E,A,O)}he!==null&&Y===0&&(Ve.updateMultisampleRenderTarget(he),Ve.updateRenderTargetMipmap(he)),W&&D.end(I),A.isScene===!0&&A.onAfterRender(I,A,O),ue.resetDefaultState(),ee=-1,re=null,T.pop(),T.length>0?(y=T[T.length-1],Ve.setTextureUnits(y.state.textureUnits),kt===!0&&ie.setGlobalState(I.clippingPlanes,y.state.camera)):y=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,F!==null&&F.renderEnd()};function Ne(A,O,K,W){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){let ke=O.isArrayCamera?Kt:dt;if(!A.frustumCulled||A.intersectsFrustum(ke)){W&&Jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Gt);let we=de.update(A),Ae=A.material;Ae.visible&&E.push(A,we,Ae,K,Jt.z,null,O)}}else if(A.isMesh||A.isLine||A.isPoints){let ke=O.isArrayCamera?Kt:dt;if(!A.frustumCulled||A.intersectsFrustum(ke)){let we=de.update(A),Ae=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Jt.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Jt.copy(we.boundingSphere.center)),Jt.applyMatrix4(A.matrixWorld).applyMatrix4(Gt)),Array.isArray(Ae)){let Be=we.groups;for(let rt=0,_t=Be.length;rt<_t;rt++){let We=Be[rt],gt=Ae[We.materialIndex];gt&&gt.visible&&E.push(A,we,gt,K,Jt.z,We,O)}}else Ae.visible&&E.push(A,we,Ae,K,Jt.z,null,O)}}}let Se=A.children;for(let ke=0,we=Se.length;ke<we;ke++)Ne(Se[ke],O,K,W)}function wi(A,O,K,W){let{opaque:j,transmissive:Se,transparent:ke}=A;y.setupLightsView(K),kt===!0&&ie.setGlobalState(I.clippingPlanes,K),W&&_e.viewport(le.copy(W)),j.length>0&&$n(j,O,K),Se.length>0&&$n(Se,O,K),ke.length>0&&$n(ke,O,K),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Bi(A,O,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[W.id]===void 0){let We=Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[W.id]=new Jn(1,1,{generateMipmaps:!0,type:We?vi:Wn,minFilter:oi,samples:Math.max(4,Ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bt.workingColorSpace})}let Se=y.state.transmissionRenderTarget[W.id],ke=W.viewport||le;Se.setSize(ke.z*I.transmissionResolutionScale,ke.w*I.transmissionResolutionScale);let we=I.getRenderTarget(),Ae=I.getActiveCubeFace(),Be=I.getActiveMipmapLevel();I.setRenderTarget(Se),I.getClearColor(ne),Ee=I.getClearAlpha(),Ee<1&&I.setClearColor(16777215,.5),I.clear(),Ut&&N.render(K);let rt=I.toneMapping;I.toneMapping=Ii;let _t=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),y.setupLightsView(W),kt===!0&&ie.setGlobalState(I.clippingPlanes,W),$n(A,K,W),Ve.updateMultisampleRenderTarget(Se),Ve.updateRenderTargetMipmap(Se),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let gt=0,Xt=O.length;gt<Xt;gt++){let Pt=O[gt],{object:M,geometry:k,material:C,group:te}=Pt;if(C.side===bn&&M.layers.test(W.layers)){let U=C.side;C.side=Rn,C.needsUpdate=!0,qn(M,K,W,k,C,te),C.side=U,C.needsUpdate=!0,We=!0}}We===!0&&(Ve.updateMultisampleRenderTarget(Se),Ve.updateRenderTargetMipmap(Se))}I.setRenderTarget(we,Ae,Be),I.setClearColor(ne,Ee),_t!==void 0&&(W.viewport=_t),I.toneMapping=rt}function $n(A,O,K){let W=O.isScene===!0?O.overrideMaterial:null;for(let j=0,Se=A.length;j<Se;j++){let ke=A[j],{object:we,geometry:Ae,group:Be}=ke,rt=ke.material;rt.allowOverride===!0&&W!==null&&(rt=W),we.layers.test(K.layers)&&qn(we,O,K,Ae,rt,Be)}}function qn(A,O,K,W,j,Se){F!==null&&j.isNodeMaterial&&F.setObject(A,j),A.onBeforeRender(I,O,K,W,j,Se),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(I,O,K,W,A,Se),j.transparent===!0&&j.side===bn&&j.forceSinglePass===!1?(j.side=Rn,j.needsUpdate=!0,I.renderBufferDirect(K,O,W,j,A,Se),j.side=Pi,j.needsUpdate=!0,I.renderBufferDirect(K,O,W,j,A,Se),j.side=bn):I.renderBufferDirect(K,O,W,j,A,Se),A.onAfterRender(I,O,K,W,j,Se)}function Qn(A){let O=0;for(let K of A)K.texture!==null&&O++;return O}function zi(A,O,K){O.isScene!==!0&&(O=ln);let W=Qe.get(A),j=y.state.lights,Se=y.state.shadowsArray,ke=j.state.version,we=oe.getParameters(A,j.state,Se,O,K,y.state.lightProbeGridArray),Ae=oe.getProgramCacheKey(we),Be=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;let rt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=P.get(A.envMap||W.environment,rt),W.envMapRotation=W.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",yt),Be=new Map,W.programs=Be,W.programVariants=new Map);let _t=Be.get(Ae);if(_t!==void 0){if(W.currentProgram===_t&&W.lightsStateVersion===ke)return ha(A,we),_t}else we.uniforms=oe.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,K,we),A.onBeforeCompile(we,I),_t=oe.acquireProgram(we,Ae),Be.set(Ae,_t),W.uniforms=we.uniforms;let We=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=ie.uniform),ha(A,we),W.needsLights=wo(A),W.lightsStateVersion=ke,W.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.sunLights.value=j.state.sun,We.sunLightShadows.value=j.state.sunShadow,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.sunShadowMatrix.value=j.state.sunShadowMatrix,We.sunShadowCascade.value=j.state.sunShadowCascade,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),W.numLightProbeGrids=Qn(y.state.lightProbeGridArray),W.currentProgram=_t,W.uniformsList=null,_t}function So(A,O,K,W,j){let Se=Qe.get(A),ke=Se.currentProgram.id+","+W+","+j,we=Se.programVariants.get(ke);return we===void 0?(we=zi(A,O,K),Se.programVariants.set(ke,we)):(Se.currentProgram=we,Se.uniformsList=null,Se.outputColorSpace=W,Se.toneMapping=j),we}function ca(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=ta.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function ha(A,O){let K=Qe.get(A);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function mt(A,O,K,W,j){O.isScene!==!0&&(O=ln),Ve.resetTextureUnits();let Se=O.fog,ke=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,we=he===null?I.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:bt.workingColorSpace,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Be=P.get(W.envMap||ke,Ae),rt=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,_t=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),We=!!K.morphAttributes.position,gt=!!K.morphAttributes.normal,Xt=!!K.morphAttributes.color,Pt=Ii;W.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Pt=I.toneMapping);let M=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,k=M!==void 0?M.length:0,C=Qe.get(W),te=y.state.lights;if(kt===!0&&(Rt===!0||A!==re)){let Tt=A===re&&W.id===ee;ie.setState(W,A,Tt)}let U=!1,ae=!1;W.version===C.__version?C.needsLights&&C.lightsStateVersion!==te.state.version||j.isBatchedMesh&&C.batching===!1||!j.isBatchedMesh&&C.batching===!0||j.isBatchedMesh&&C.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&C.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&C.instancing===!1||!j.isInstancedMesh&&C.instancing===!0||j.isSkinnedMesh&&C.skinning===!1||!j.isSkinnedMesh&&C.skinning===!0||j.isInstancedMesh&&C.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&C.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&C.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&C.instancingMorph===!1&&j.morphTexture!==null||C.envMap!==Be||W.fog===!0&&C.fog!==Se||C.numClippingPlanes!==void 0&&(C.numClippingPlanes!==ie.numPlanes||C.numIntersection!==ie.numIntersection)||C.vertexAlphas!==rt||C.vertexTangents!==_t||C.morphTargets!==We||C.morphNormals!==gt||C.morphColors!==Xt||C.morphTargetsCount!==k||C.numLightProbeGrids!==Qn(y.state.lightProbeGridArray)?U=!0:(C.outputColorSpace!==we||C.toneMapping!==Pt)&&(ae=!0):(U=!0,C.__version=W.version);let ge=C.currentProgram;(U===!0||ae===!0)&&(ge=ae===!0?So(W,O,j,we,Pt):zi(W,O,j),F&&W.isNodeMaterial&&F.onUpdateProgram(W,ge,C));let J=!1,pe=!1,me=!1,ce=ge.getUniforms(),Ie=C.uniforms;if(_e.useProgram(ge.program)&&(J=!0,pe=!0,me=!0),W.id!==ee&&(ee=W.id,pe=!0),J||re!==A){_e.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ce.setValue(z,"projectionMatrix",A.projectionMatrix),ce.setValue(z,"viewMatrix",A.matrixWorldInverse);let He=ce.map.cameraPosition;He!==void 0&&He.setValue(z,vn.setFromMatrixPosition(A.matrixWorld)),Ct.logarithmicDepthBuffer&&ce.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ce.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),re!==A&&(re=A,pe=!0,me=!0)}if(C.needsLights&&(te.state.sunShadowMap.length>0&&ce.setValue(z,"sunShadowMap",te.state.sunShadowMap,Ve),te.state.directionalShadowMap.length>0&&ce.setValue(z,"directionalShadowMap",te.state.directionalShadowMap,Ve),te.state.spotShadowMap.length>0&&ce.setValue(z,"spotShadowMap",te.state.spotShadowMap,Ve),te.state.pointShadowMap.length>0&&ce.setValue(z,"pointShadowMap",te.state.pointShadowMap,Ve)),j.isSkinnedMesh){ce.setOptional(z,j,"bindMatrix"),ce.setOptional(z,j,"bindMatrixInverse");let Tt=j.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),ce.setValue(z,"boneTexture",Tt.boneTexture,Ve))}j.isBatchedMesh&&(ce.setOptional(z,j,"batchingTexture"),ce.setValue(z,"batchingTexture",j._matricesTexture,Ve),ce.setOptional(z,j,"batchingIdTexture"),ce.setValue(z,"batchingIdTexture",j._indirectTexture,Ve),ce.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&ce.setValue(z,"batchingColorTexture",j._colorsTexture,Ve));let an=K.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&$.update(j,K,ge),(pe||C.receiveShadow!==j.receiveShadow)&&(C.receiveShadow=j.receiveShadow,ce.setValue(z,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(Ie.envMapIntensity.value=O.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=hv()),pe){if(ce.setValue(z,"toneMappingExposure",I.toneMappingExposure),C.needsLights&&pr(Ie,me),Se&&W.fog===!0&&xe.refreshFogUniforms(Ie,Se),xe.refreshMaterialUniforms(Ie,W,Pe,Ke,y.state.transmissionRenderTarget[A.id]),C.needsLights&&C.numLightProbeGrids>0){let Tt=v,He=0;for(let tt of y.state.lightProbeGridArray)tt.texture!==null&&(Tt.textures[He]=tt.texture,Tt.min[He]=tt.boundingBox.min,Tt.max[He]=tt.boundingBox.max,Tt.resolution[He]=tt.resolution,He++);for(let tt in Tt)Tt[tt].length=He;Ie.probesSH.value=Tt.textures,Ie.probesMin.value=Tt.min,Ie.probesMax.value=Tt.max,Ie.probesResolution.value=Tt.resolution}ta.upload(z,ca(C),Ie,Ve)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ta.upload(z,ca(C),Ie,Ve),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ce.setValue(z,"center",j.center),ce.setValue(z,"modelViewMatrix",j.modelViewMatrix),ce.setValue(z,"normalMatrix",j.normalMatrix),ce.setValue(z,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){let Tt=W.uniformsGroups;for(let He=0,tt=Tt.length;He<tt;He++){let ei=Tt[He];Xe.update(ei,ge),Xe.bind(ei,ge)}}return ge}function pr(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.sunLights.needsUpdate=O,A.sunLightShadows.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function wo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(A,O,K){let W=Qe.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Qe.get(A.texture).__webglTexture=O,Qe.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){let K=Qe.get(A);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,K=0){he=A,Q=O,Y=K;let W=null,j=!1,Se=!1;if(A){let we=Qe.get(A);if(we.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(z.FRAMEBUFFER,we.__webglFramebuffer),le.copy(A.viewport),Ge.copy(A.scissor),ot=A.scissorTest,_e.viewport(le),_e.scissor(Ge),_e.setScissorTest(ot),ee=-1;return}else if(we.__webglFramebuffer===void 0)Ve.setupRenderTarget(A);else if(we.__hasExternalTextures)Ve.rebindTextures(A,Qe.get(A.texture).__webglTexture,Qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let rt=A.depthTexture;if(we.__boundDepthTexture!==rt){if(rt!==null&&Qe.has(rt)&&(A.width!==rt.image.width||A.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(A)}}let Ae=A.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Se=!0);let Be=Qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?W=Be[O][K]:W=Be[O],j=!0):A.samples>0&&Ve.useMultisampledRTT(A)===!1?W=Qe.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?W=Be[K]:W=Be,le.copy(A.viewport),Ge.copy(A.scissor),ot=A.scissorTest}else le.copy(Ze).multiplyScalar(Pe).floor(),Ge.copy(At).multiplyScalar(Pe).floor(),ot=Et;if(K!==0&&(W=H),_e.bindFramebuffer(z.FRAMEBUFFER,W)&&_e.drawBuffers(A,W),_e.viewport(le),_e.scissor(Ge),_e.setScissorTest(ot),j){let we=Qe.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,K)}else if(Se){let we=O;for(let Ae=0;Ae<A.textures.length;Ae++){let Be=Qe.get(A.textures[Ae]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ae,Be.__webglTexture,K,we)}}else if(A!==null&&K!==0){let we=Qe.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,we.__webglTexture,K)}ee=-1};function mr(A){let O=Qe.get(A);return(O.__readFormat!==A.format||O.__readType!==A.type)&&(O.__readFormat=A.format,O.__readType=A.type,O.__formatReadable=Ct.textureFormatReadable(A.format),O.__typeReadable=Ct.textureTypeReadable(A.type)),O}this.readRenderTargetPixels=function(A,O,K,W,j,Se,ke,we=0){if(!(A&&A.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Ae=Ae[ke],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){_e.bindFramebuffer(z.FRAMEBUFFER,Ae);try{let Be=A.textures[we],rt=Be.format,_t=Be.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+we);let We=mr(Be);if(We.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-W&&K>=0&&K<=A.height-j&&z.readPixels(O,K,W,j,be.convert(rt),be.convert(_t),Se)}finally{let Be=he!==null?Qe.get(he).__webglFramebuffer:null;_e.bindFramebuffer(z.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,O,K,W,j,Se,ke,we=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Ae=Ae[ke],Array.isArray(Ae)&&(Ae=Ae[0])),Ae)if(O>=0&&O<=A.width-W&&K>=0&&K<=A.height-j){_e.bindFramebuffer(z.FRAMEBUFFER,Ae);let Be=A.textures[we],rt=Be.format,_t=Be.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+we);let We=mr(Be);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,gt),z.bufferData(z.PIXEL_PACK_BUFFER,Se.byteLength,z.STREAM_READ),z.readPixels(O,K,W,j,be.convert(rt),be.convert(_t),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Xt=he!==null?Qe.get(he).__webglFramebuffer:null;_e.bindFramebuffer(z.FRAMEBUFFER,Xt);let Pt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await If(z,Pt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,gt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Se),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(gt),z.deleteSync(Pt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,K=0){let W=Math.pow(2,-K),j=Math.floor(A.image.width*W),Se=Math.floor(A.image.height*W),ke=O!==null?O.x:0,we=O!==null?O.y:0;Ve.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,ke,we,j,Se),_e.unbindTexture()},this.copyTextureToTexture=function(A,O,K=null,W=null,j=0,Se=0){let ke,we,Ae,Be,rt,_t,We,gt,Xt,Pt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(K!==null)ke=K.max.x-K.min.x,we=K.max.y-K.min.y,Ae=K.isBox3?K.max.z-K.min.z:1,Be=K.min.x,rt=K.min.y,_t=K.isBox3?K.min.z:0;else{let ce=Math.pow(2,-j);ke=Math.floor(Pt.width*ce),we=Math.floor(Pt.height*ce),A.isDataArrayTexture?Ae=Pt.depth:A.isData3DTexture?Ae=Math.floor(Pt.depth*ce):Ae=1,Be=0,rt=0,_t=0}W!==null?(We=W.x,gt=W.y,Xt=W.z):(We=0,gt=0,Xt=0);let M=be.convert(O.format),k=be.convert(O.type),C;O.isData3DTexture?(Ve.setTexture3D(O,0),C=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ve.setTexture2DArray(O,0),C=z.TEXTURE_2D_ARRAY):(Ve.setTexture2D(O,0),C=z.TEXTURE_2D),_e.activeTexture(z.TEXTURE0),_e.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),_e.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_e.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);let te=_e.getParameter(z.UNPACK_ROW_LENGTH),U=_e.getParameter(z.UNPACK_IMAGE_HEIGHT),ae=_e.getParameter(z.UNPACK_SKIP_PIXELS),ge=_e.getParameter(z.UNPACK_SKIP_ROWS),J=_e.getParameter(z.UNPACK_SKIP_IMAGES);_e.pixelStorei(z.UNPACK_ROW_LENGTH,Pt.width),_e.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pt.height),_e.pixelStorei(z.UNPACK_SKIP_PIXELS,Be),_e.pixelStorei(z.UNPACK_SKIP_ROWS,rt),_e.pixelStorei(z.UNPACK_SKIP_IMAGES,_t);let pe=A.isDataArrayTexture||A.isData3DTexture,me=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){let ce=Qe.get(A),Ie=Qe.get(O),an=Qe.get(ce.__renderTarget),Tt=Qe.get(Ie.__renderTarget);_e.bindFramebuffer(z.READ_FRAMEBUFFER,an.__webglFramebuffer),_e.bindFramebuffer(z.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let He=0;He<Ae;He++)pe&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Qe.get(A).__webglTexture,j,_t+He),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Qe.get(O).__webglTexture,Se,Xt+He)),z.blitFramebuffer(Be,rt,Be+ke,rt+we,We,gt,We+ke,gt+we,z.DEPTH_BUFFER_BIT,z.NEAREST);_e.bindFramebuffer(z.READ_FRAMEBUFFER,null),_e.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Qe.has(A)){let ce=Qe.get(A),Ie=Qe.get(O);_e.bindFramebuffer(z.READ_FRAMEBUFFER,R),_e.bindFramebuffer(z.DRAW_FRAMEBUFFER,V);for(let an=0;an<Ae;an++)pe?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ce.__webglTexture,j,_t+an):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ce.__webglTexture,j),me?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.__webglTexture,Se,Xt+an):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ie.__webglTexture,Se),j!==0?z.blitFramebuffer(Be,rt,Be+ke,rt+we,We,gt,We+ke,gt+we,z.COLOR_BUFFER_BIT,z.NEAREST):me?z.copyTexSubImage3D(C,Se,We,gt,Xt+an,Be,rt,ke,we):z.copyTexSubImage2D(C,Se,We,gt,Be,rt,ke,we);_e.bindFramebuffer(z.READ_FRAMEBUFFER,null),_e.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else me?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(C,Se,We,gt,Xt,ke,we,Ae,M,k,Pt.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(C,Se,We,gt,Xt,ke,we,Ae,M,Pt.data):z.texSubImage3D(C,Se,We,gt,Xt,ke,we,Ae,M,k,Pt):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Se,We,gt,ke,we,M,k,Pt.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Se,We,gt,Pt.width,Pt.height,M,Pt.data):z.texSubImage2D(z.TEXTURE_2D,Se,We,gt,ke,we,M,k,Pt);_e.pixelStorei(z.UNPACK_ROW_LENGTH,te),_e.pixelStorei(z.UNPACK_IMAGE_HEIGHT,U),_e.pixelStorei(z.UNPACK_SKIP_PIXELS,ae),_e.pixelStorei(z.UNPACK_SKIP_ROWS,ge),_e.pixelStorei(z.UNPACK_SKIP_IMAGES,J),Se===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&z.generateMipmap(C),_e.unbindTexture()},this.initRenderTarget=function(A){Qe.get(A).__webglFramebuffer===void 0&&Ve.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ve.setTextureCube(A,0):A.isData3DTexture?Ve.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ve.setTexture2DArray(A,0):Ve.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){Q=0,Y=0,he=null,_e.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};var mp=[["red",16731486],["orange",16752412],["gold",16765503],["lime",10216804],["green",3064446],["teal",2085313],["cyan",4114431],["blue",5078271],["purple",10182117],["pink",16740277],["white",15921906],["black",3816008],["brown",11037500],["silver",12109014],["rose",16748451]],vc=new Map(mp.map(([s,e])=>[s,e]));vc.set("yellow",16765503);vc.set("violet",10182117);vc.set("grey",12109014);vc.set("gray",12109014);function uv(s){let e=2166136261;for(let t of String(s))e^=t.codePointAt(0),e=Math.imul(e,16777619);return e>>>0}var gp=s=>mp[uv(s)%10][1];function fu(s){let e=String(s||"").replace(/[\u0000-\u001f\u200b-\u200f\u202a-\u202e]/g,"").replace(/\s+/g," ").trim(),t=[...e];return(t.length>16?t.slice(0,15).join("")+"\u2026":e)||"Viewer"}var bp=s=>String(s||"").toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}]/gu,"");var yc=["Pixel","Mochi","Bolt","Nugget","Waffles","Ziggy","Pebble","Turbo","Biscuit","Gizmo","Noodle","Sprocket","Muffin","Rocket","Tofu","Dumpling","Jelly","Comet","Pickle","Bean","Sushi","Taco","Nacho","Boba"];var yi=[{id:"library",name:"The Whispering Library",trap:"books",monster:"mimic",mname:"the Hungry Tome",fog:2759226,floor:7031347,wall:5917290,light:16757611},{id:"crypt",name:"The Bone Crypt",trap:"hands",monster:"ghost",mname:"the Restless Ghoul",fog:1450026,floor:5922662,wall:4870232,light:10477823},{id:"mirror",name:"The Hall of Mirrors",trap:"shards",monster:"ghost",mname:"the Mirror Wraith",fog:2038330,floor:9077936,wall:6971536,light:13809919},{id:"clock",name:"The Clockwork Room",trap:"pendulum",monster:"spider",mname:"the Clockwork Spider",fog:2760724,floor:8018474,wall:6967344,light:16761963},{id:"attic",name:"The Spider Attic",trap:"web",monster:"spider",mname:"the Giant Spider",fog:2234900,floor:5916210,wall:4864556,light:16754266},{id:"lab",name:"The Alchemist's Lab",trap:"gas",monster:"mimic",mname:"the Greedy Mimic",fog:1058332,floor:4086346,wall:3493951,light:9174938},{id:"ballroom",name:"The Ghostly Ballroom",trap:"chandelier",monster:"ghost",mname:"the Dancing Banshee",fog:2757680,floor:8010330,wall:5909066,light:16751317}],as={id:"belfry",name:"The Bell Tower",trap:"hands",monster:"boss",fog:1313830,floor:4866144,wall:3813456,light:11570431},Rs={id:"gate",name:"The Tower Gate",trap:"hands",monster:"ghost",fog:1708080,floor:5917296,wall:4536410,light:16757611},pu=["The Hollow Bride","Count Cobweb","The Clockwork Wraith","The King of Crows","The Pale Organist","The Lantern Eater"],Mc={treasure:"\u{1F4B0}",trap:"\u{1F480}",monster:"\u{1F479}",riddle:"\u2753"},cr=[["I'm tall when I'm young and short when I'm old. What am I?",["candle"]],["What has hands but cannot clap?",["clock","watch"]],["The more you take, the more you leave behind. What are they?",["footsteps","steps","footprints"]],["I speak without a mouth and hear without ears. What am I?",["echo"]],["What has keys but cannot open locks?",["piano","keyboard"]],["What gets wetter the more it dries?",["towel"]],["What has a neck but no head?",["bottle","shirt"]],["I have cities but no houses, forests but no trees. What am I?",["map"]],["What has one eye but cannot see?",["needle","hurricane","storm"]],["What can fill a room but takes up no space?",["light","air","sound","darkness"]],["What must be broken before you can use it?",["egg"]],["The more of me there is, the less you see. What am I?",["darkness","dark","fog"]],["What has a head and a tail but no body?",["coin"]],["What has teeth but cannot bite?",["comb","saw","zipper","gear"]],["What is full of holes but still holds water?",["sponge"]],["What flies without wings and cries without eyes?",["cloud","clouds","wind"]],["What has many rings but no fingers?",["tree","phone","telephone","saturn"]],["What runs but never walks, has a bed but never sleeps?",["river","water","stream"]],["What has legs but cannot walk?",["table","chair","bed","desk"]],["What is black when clean and white when dirty?",["chalkboard","blackboard"]],["What goes up but never comes down?",["age","your age"]],["What belongs to you, but others use it more than you?",["name","your name"]],["What can you catch but not throw?",["cold","a cold","breath","feelings"]],["I follow you all day but vanish in the dark. What am I?",["shadow"]],["What has a face and two hands, but no arms or legs?",["clock","watch"]],["What kind of room has no doors or windows?",["mushroom"]],["What can travel around the world while staying in a corner?",["stamp"]],["What comes down but never goes up?",["rain","snow"]],["I have a spine but no bones. What am I?",["book"]],["What has a ring but no finger, and a bell but no church?",["phone","telephone","doorbell"]]];function xp(s,e){let t=String(s||"").toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}\s]/gu," ").split(/\s+/).filter(Boolean),n=" "+t.join(" ")+" ";for(let i of e){let r=" "+i.toLowerCase()+" ";if(n.includes(r)||!i.includes(" ")&&t.some(a=>a===i+"s"||a.length>3&&a+"s"===i))return i}return null}var ho=[{id:"boss",min:500,label:"GHOST BOSS",icon:"\u{1F47B}",desc:"summon a boss fight: huge loot"},{id:"skip",min:100,label:"SKIP FLOOR",icon:"\u{1FA84}",desc:"Mira's lift: rise safely"},{id:"rescue",min:30,label:"RESCUE",icon:"\u{1F496}",desc:"the fallen rise + lantern oil"},{id:"shield",min:5,label:"SHIELD",icon:"\u{1F6E1}\uFE0F",desc:"blocks the next trap"},{id:"prophecy",min:1,label:"PROPHECY",icon:"\u{1F52E}",desc:"Mira reveals the safe door"}],_p=s=>{let e=Number(s)||0;return ho.find(t=>e>=t.min)||ho[ho.length-1]},dv={"1\uFE0F\u20E3":1,"2\uFE0F\u20E3":2,"3\uFE0F\u20E3":3,"\u2460":1,"\u2461":2,"\u2462":3};function vp(s){let e=String(s||"").trim().toLowerCase().replace(/[!.?]+$/,"").replace(/\s+/g," ");if(!e)return{cmd:"none"};for(let[n,i]of Object.entries(dv))if(e.replace(/\uFE0F/g,"")===n.replace(/\uFE0F/g,""))return{cmd:"vote",door:i};let t=e.match(/^(?:door|d|#|no\.?|number)?\s*([123])(?:\1)*$/);return t?{cmd:"vote",door:Number(t[1])}:(t=e.match(/^(?:door\s+)?(one|two|three)$/),t?{cmd:"vote",door:{one:1,two:2,three:3}[t[1]]}:/^(?:go\s+)?(?:left|l|⬅️?|👈|lft)$/u.test(e)?{cmd:"vote",door:"L"}:/^(?:go\s+)?(?:right|r|➡️?|👉|rite)$/u.test(e)?{cmd:"vote",door:"R"}:/^(?:go\s+)?(?:middle|mid|center|centre|straight|m|⬆️?)$/u.test(e)?{cmd:"vote",door:"M"}:/^(?:attack|atk|hit|fight|punch|smash|kill|⚔️?|🗡️?|👊|🥊|💥|🔥)+/u.test(e)?{cmd:"attack",strong:!0}:{cmd:"chat",key:bp(e)})}function yp(s,e){if(s==="L")return 0;if(s==="R")return e-1;if(s==="M")return e===3?1:-1;let t=Number(s)-1;return t>=0&&t<e?t:-1}var It=9,St=-7.2,hr=s=>s===2?[-2.9,2.9]:[-4.3,0,4.3],Nt={x:6.3,z:-2.2,r:1.55};var Wt={alive:1,ghost:2,bot:4,cmd:8,shield:16,crown:32,life:64,hit:128,gift:256},fv=9;var pv={gatherSeconds:16,enterSeconds:4.5,voteSeconds:12,revealSeconds:2.6,treasureSeconds:4.5,trapSeconds:4.5,monsterSeconds:14,riddleSeconds:22,bossSeconds:32,victorySeconds:4.5,climbSeconds:4.2,endSeconds:13,minParty:6,bots:!0,fuelDrain:.3,likeFuel:.12,likeRain:300,bossEvery:5,startFloor:1,sendCap:70,ghostCap:16,botHitRate:.55,dmgMul:1,monsterHpMul:1,topFloor:30},mv=3.6,Sc=class{constructor(e={},t=Math.random){this.o={...pv,...e},this.rng=t,this.t=0,this.run=0,this.floor=0,this.theme=null,this.themeIdx=-1,this.people=new Map,this.byId=new Map,this.nextId=1,this.ev=[],this.rAdd=[],this.rDel=[],this.fuel=100,this.hype=0,this.likes=0,this.shields=0,this.bankProphecy=0,this.doors=3,this.kinds=[],this.voteCounts=[0,0,0],this.prophecy=-1,this.chosen=-1,this.outcome="",this.monster=null,this.riddle=null,this.predict=null,this.pendingSummon=null,this.lowWarned=!1,this.sessionBest=0,this.lastResult=null,this.liftFloor=-9,this.summonFloor=-9,this.recentRiddles=[],this.humanAt=-999,this.bossCount=0,this.startRun()}r(e){return Math.floor(this.rng()*e)}emit(e){this.ev.push(e)}drain(){let e=this.ev;return this.ev=[],e}drainRoster(){let e={add:this.rAdd,del:this.rDel};return this.rAdd=[],this.rDel=[],e}rosterEntry(e){return{id:e.id,name:e.name,color:e.color,bot:e.bot}}get alive(){let e=0;for(let t of this.people.values())t.alive&&e++;return e}get humans(){let e=0;for(let t of this.people.values())t.alive&&!t.bot&&e++;return e}aliveList(){return[...this.people.values()].filter(e=>e.alive)}ghosts(){return[...this.people.values()].filter(e=>e.inRun&&!e.alive)}member(e,t,n=!1){let i=this.people.get(e);if(!i)i={id:this.nextId++,uid:e,name:fu(t),color:gp(e),bot:n,alive:!1,inRun:!1,lives:0,pts:0,runPts:0,floors:0,riddles:0,hits:0,lastAct:this.t,cmdT:-9,hitT:-9,door:-1,x:0,y:0,z:6,face:Math.PI,climb:null,giftT:-9,attackT:-9,fell:0},this.people.set(e,i),this.byId.set(i.id,i),this.rAdd.push(this.rosterEntry(i));else if(t&&!n){let r=fu(t);r!==i.name&&(i.name=r,this.rAdd.push(this.rosterEntry(i)))}return i}join(e){return e.lastAct=this.t,e.bot||(this.humanAt=this.t),e.alive||e.inRun&&this.phase!=="gather"?!1:(e.alive=!0,e.inRun=!0,e.door=-1,e.climb=null,this.phase==="gather"?(e.x=(this.rng()-.5)*6,e.z=8.5):(e.x=Nt.x-Nt.r,e.z=Nt.z),e.y=0,this.emit({k:"join",id:e.id,bot:e.bot}),e.bot||this.trimBots(),!0)}trimBots(){if(this.humans+this.botsAlive()<=this.o.minParty)return;let e=[...this.people.values()].find(t=>t.bot&&t.alive);e&&this.phase==="gather"&&(e.alive=!1,e.inRun=!1,this.emit({k:"leave",id:e.id}))}botsAlive(){let e=0;for(let t of this.people.values())t.bot&&t.alive&&e++;return e}fillBots(){if(!this.o.bots)return;let e=this.o.minParty-this.alive;for(let t=0;t<yc.length&&e>0;t++){let n=yc[(t+this.run*5)%yc.length],i=this.member("bot:"+n,"Bot "+n,!0);i.alive||(i.inRun=!1,this.join(i),e--)}}input(e){if(!e||!e.uid)return{ok:!1};let t=this.member(String(e.uid),e.name||e.uid);switch(e.type){case"chat":case"comment":return this.chat(t,String(e.text||""));case"like":return this.like(t,Math.max(1,Math.min(100,Number(e.count)||1)));case"gift":return this.gift(t,(Number(e.coins)||1)*Math.max(1,Number(e.count)||1),e.giftName||"gift");case"follow":return this.join(t),t.lives=Math.min(2,t.lives+1),this.emit({k:"follow",id:t.id}),{ok:!0};case"share":return this.join(t),t.lives=Math.min(2,t.lives+1),this.addFuel(5),this.emit({k:"share",id:t.id}),{ok:!0};case"join":return this.join(t),{ok:!0}}return{ok:!0}}chat(e,t){let n=vp(t),i=this.join(e);if(e.cmdT=this.t,this.phase==="vote"&&n.cmd==="vote"){let r=yp(n.door,this.doors);if(r>=0)return e.door!==r&&(e.door=r,this.countVotes(),this.emit({k:"vote",id:e.id,d:r})),{ok:!0,cmd:"vote",door:r+1}}if(this.phase==="riddle"&&this.riddle&&!this.riddle.solved){let r=xp(t,this.riddle.a);if(r)return this.solveRiddle(e,r),{ok:!0,cmd:"riddle"}}return(this.phase==="monster"||this.phase==="boss")&&this.monster&&e.alive?(this.hit(e,n.cmd==="attack"?1.5:1),{ok:!0,cmd:"hit"}):{ok:!0,cmd:i?"join":n.cmd}}like(e,t){if(this.join(e),this.likes+=t,this.hype+=t,this.addFuel(t*this.o.likeFuel),(this.phase==="monster"||this.phase==="boss")&&this.monster&&this.damage(e,t*.25,!1,!0),this.hype>=this.o.likeRain){this.hype-=this.o.likeRain,this.addFuel(15);let n=this.ghosts().sort((i,r)=>r.fell-i.fell)[0];n&&this.rise(n,"likes");for(let i of this.aliveList())i.runPts+=2;this.emit({k:"blaze",rescued:n?n.id:0})}return{ok:!0}}gift(e,t,n){this.join(e);let i=_p(t);e.giftT=this.t,e.runPts+=Math.min(50,3+t),e.pts+=0;let r={k:"gift",id:e.id,tier:i.id,coins:t,giftName:n};switch(i.id){case"prophecy":{this.addFuel(Math.min(12,3*t)),this.phase==="vote"&&this.prophecy<0?(this.prophecy=this.safeDoor(),r.door=this.prophecy):this.prophecy<0&&(this.bankProphecy=1,r.banked=!0);break}case"shield":this.shields=Math.min(3,this.shields+1),this.addFuel(6),e.inRun&&!e.alive&&this.rise(e,"gift"),r.shields=this.shields;break;case"rescue":{this.addFuel(25);let a=this.ghosts().sort((o,l)=>(l===e)-(o===e)||l.fell-o.fell).slice(0,5);for(let o of a)this.rise(o,"gift");r.n=a.length;break}case"skip":{if(this.addFuel(10),this.monster)this.damage(e,this.monster.max*(this.monster.boss?.3:1),!0),r.hitBoss=!0;else if(this.liftFloor>=this.floor-1||this.skipBanked){this.addFuel(15);for(let a of this.ghosts().slice(0,2))this.rise(a,"gift");r.blessing=!0}else{if(["enter","vote","reveal","riddle","trap","treasure"].includes(this.phase))return this.emit(r),this.startClimb(!0),{ok:!0,tier:i.id};this.skipBanked=!0}break}case"boss":{if(this.addFuel(20),this.monster&&this.monster.boss)this.damage(e,this.monster.max*.35,!0),r.hitBoss=!0;else if(this.pendingSummon||this.floor-this.summonFloor<3){this.addFuel(30);for(let a of this.ghosts())this.rise(a,"gift");r.blessing=!0}else this.pendingSummon={by:e.id},this.summonFloor=this.floor;break}}return this.emit(r),{ok:!0,tier:i.id}}addFuel(e){this.fuel=Math.max(0,Math.min(100,this.fuel+e)),this.fuel>35&&(this.lowWarned=!1)}setPhase(e,t){this.phase=e,this.phaseStart=this.t,this.phaseEnd=this.t+t}startRun(){this.run++,this.floor=this.o.startFloor-1,this.fuel=100,this.shields=0,this.bankProphecy=0,this.pendingSummon=null,this.skipBanked=!1,this.liftFloor=-9,this.summonFloor=-9,this.monster=null,this.riddle=null,this.predict=null,this.kinds=[],this.chosen=-1,this.outcome="",this.lowWarned=!1,this.themeIdx=-1,this.theme={id:"gate",name:"The Tower Gate"},this.liftPending=!1,this.upcoming=null;for(let[e,t]of this.people)!t.bot&&this.t-t.lastAct>1200&&(this.people.delete(e),this.byId.delete(t.id),this.rDel.push(t.id));for(let e of this.people.values())e.alive=!1,e.inRun=!1,e.runPts=0,e.door=-1,e.climb=null,e.lives=Math.min(e.lives,1),e.z=8,e.y=0;this.setPhase("gather",this.o.gatherSeconds);for(let e of this.people.values())!e.bot&&this.t-e.lastAct<180&&this.join(e);this.fillBots(),this.emit({k:"gather",run:this.run})}nextFloor(){this.floor++;for(let n of this.people.values())n.door=-1,n.climb&&(n.climb=null,n.y=0);this.kinds=[],this.chosen=-1,this.outcome="",this.prophecy=-1,this.voteCounts=[0,0,0],this.riddle=null,this.monster=null,this.liftPending&&(this.liftPending=!1,this.floor<this.o.topFloor&&this.floor++);let e=this.floor%this.o.bossEvery===0,t=this.nextTheme(this.floor);if(this.themeIdx=t,this.theme=e?as:yi[t],this.upcoming=null,this.doors=e?0:this.floor%3===2?2:3,this.setPhase("enter",this.o.enterSeconds),this.predict=null,!e){let n=this.aliveList(),i=n.filter(a=>!a.bot),r=i.length?i:n;if(r.length){let a=r[this.r(r.length)];this.predict={id:a.id,kind:this.rng()<.62?"fall":"gold"}}}this.emit({k:"floor",n:this.floor,th:this.themeIdx,boss:e,doors:this.doors,predict:this.predict})}nextTheme(e){if(e%this.o.bossEvery===0)return-2;if(this.upcoming&&this.upcoming.n===e)return this.upcoming.th;let t;do t=this.r(yi.length);while(t===this.themeIdx&&yi.length>1);return this.upcoming={n:e,th:t},t}startVote(){let e=this.doors,t=[],n=Math.min(.5,.15+this.floor*.02),i=["treasure"];for(i.push(this.rng()<.55?"trap":"monster"),e===3&&i.push(this.rng()<.55?"riddle":this.rng()<n?"trap":this.rng()<.5?"monster":"riddle");i.length;)t.push(i.splice(this.r(i.length),1)[0]);this.kinds=t;for(let r of this.people.values())r.door=-1;this.voteCounts=[0,0,0],this.setPhase("vote",this.o.voteSeconds),this.bankProphecy&&(this.bankProphecy=0,this.prophecy=this.safeDoor(),this.emit({k:"prophecy",door:this.prophecy,banked:!0})),this.emit({k:"vote",start:!0,doors:e})}safeDoor(){let e=this.kinds.indexOf("treasure");return e>=0?e:Math.max(0,this.kinds.indexOf("riddle"))}countVotes(){let e=[0,0,0];for(let t of this.people.values())t.door>=0&&e[t.door]++;this.voteCounts=e}closeVote(){this.countVotes();let e=this.voteCounts.slice(0,this.doors),t=Math.max(...e),n=e.map((i,r)=>i===t?r:-1).filter(i=>i>=0);this.chosen=n[this.r(n.length)],this.outcome=this.kinds[this.chosen],this.setPhase("reveal",this.o.revealSeconds),this.emit({k:"reveal",door:this.chosen,kinds:this.kinds.slice(),votes:e,none:t===0})}resolve(){let e=this.outcome,t=new Set([...this.people.values()].filter(n=>n.door===this.chosen).map(n=>n.id));if(e==="treasure"){this.addFuel(Math.max(8,20-this.floor*.6));for(let i of this.aliveList())i.runPts+=t.has(i.id)?15:10;let n=null;if(this.predict&&this.predict.kind==="gold"){let i=this.byId.get(this.predict.id);i&&i.alive&&(i.runPts+=25,n=i.id)}this.setPhase("treasure",this.o.treasureSeconds),this.emit({k:"treasure",door:this.chosen,lucky:n})}else if(e==="trap"){this.setPhase("trap",this.o.trapSeconds);let n=this.casualties(Math.min(.4,.14+this.floor*.015),t);this.emit({k:"trap",trap:this.theme.trap,...n})}else if(e==="monster")this.spawnMonster(!1);else{let n;do n=this.r(cr.length);while(this.recentRiddles.includes(n)&&this.recentRiddles.length<cr.length-1);this.recentRiddles.push(n),this.recentRiddles.length>12&&this.recentRiddles.shift(),this.riddle={i:n,q:cr[n][0],a:cr[n][1],solved:null,botAt:this.t+8+this.rng()*9},this.setPhase("riddle",this.o.riddleSeconds),this.emit({k:"riddle",i:n})}}casualties(e,t=new Set,n=1){if(this.shields>0)return this.shields--,{blocked:!0,fell:[],saved:[]};let i=this.aliveList(),r=Math.max(n,Math.round(i.length*e));i.length<=1?r=this.rng()<.5?1:0:r=Math.min(r,i.length-1);let a=[],o=[],l=[];if(this.predict&&this.predict.kind==="fall"&&!this.predict.done){let u=this.byId.get(this.predict.id);u&&u.alive&&this.rng()<.75&&r>0&&(l.push(u),this.predict.done=!0)}let c=i.filter(u=>!l.includes(u)).map(u=>({m:u,w:(t.has(u.id)?2:1)*(u.bot?1.4:1)*(this.t-u.giftT<60?.5:1)}));for(;l.length<r&&c.length;){let u=0;for(let h of c)u+=h.w;let p=this.rng()*u,d=0;for(;d<c.length-1&&(p-=c[d].w,!(p<=0));d++);l.push(c.splice(d,1)[0].m)}for(let u of l){if(u.lives>0){u.lives--,o.push(u.id);continue}this.fall(u),a.push(u.id)}return{blocked:!1,fell:a,saved:o,foretold:this.predict&&this.predict.done&&l[0]&&l[0].id===this.predict.id&&a.includes(this.predict.id)?this.predict.id:0}}fall(e){e.alive=!1,e.fell=this.t,e.climb=null,e.door=-1,this.emit({k:"fall",id:e.id})}rise(e,t){e.alive||(e.alive=!0,e.inRun=!0,e.climb=null,e.y=0,this.emit({k:"rise",id:e.id,why:t}))}spawnMonster(e,t=!1){let n=this.alive,i=e?(70+9*n)*(1+this.floor*.1)*(t?1.25:1):(18+3*n)*(1+this.floor*.07),r=Math.round(i*this.o.monsterHpMul),a=e?pu[this.bossCount++%pu.length]:this.theme.mname||"a monster";this.monster={kind:e?"boss":this.theme.monster,name:a,hp:r,max:r,boss:e,summoned:t,nextAtk:this.t+(e?4.5:3.5),atkN:0,hitters:new Map},this.setPhase(e?"boss":"monster",e?this.o.bossSeconds:this.o.monsterSeconds),this.emit({k:"monster",kind:this.monster.kind,name:a,hp:r,boss:e,summoned:t})}hit(e,t){if(this.t-e.attackT<.35)return;e.attackT=this.t;let n=this.rng()<.15;this.damage(e,(2+this.rng()*2)*t*(n?2:1)*this.o.dmgMul,n)}damage(e,t,n,i=!1){let r=this.monster;!r||r.hp<=0||(t=Math.max(.1,t),r.hp=Math.max(0,r.hp-t),r.hitters.set(e.id,(r.hitters.get(e.id)||0)+t),e.hits++,e.hitT=this.t,(!i||t>=1)&&this.emit({k:"hit",id:e.id,d:Math.round(t),c:n?1:0}),r.hp<=0&&this.monsterDown())}monsterDown(){let e=this.monster,t=[...e.hitters.entries()].sort((i,r)=>r[1]-i[1]);for(let[i,r]of t){let a=this.byId.get(i);a&&(a.runPts+=Math.min(40,5+Math.round(r/3)))}let n=t.length?t[0][0]:0;if(n&&(this.byId.get(n).runPts+=e.boss?40:15),e.boss){let i=this.ghosts();for(let r of i)this.rise(r,"boss");this.addFuel(e.summoned?100:35),this.emit({k:"mwin",boss:!0,name:e.name,top:n,rescued:i.length,summoned:e.summoned}),this.monster=null,this.setPhase("victory",this.o.victorySeconds),e.summoned&&(this.skipBanked=!0)}else this.addFuel(10),this.emit({k:"mwin",boss:!1,name:e.name,top:n}),this.monster=null,this.setPhase("victory",this.o.victorySeconds*.8)}monsterWins(){let e=this.monster,t=this.casualties(e.boss?.3:.2);this.addFuel(e.boss?-28:-12),this.emit({k:"mlose",boss:e.boss,name:e.name,...t}),this.monster=null,this.setPhase("trap",this.o.trapSeconds*.8)}solveRiddle(e,t){this.riddle.solved=e.id,e.runPts+=40,e.riddles++,this.addFuel(12),this.emit({k:"rwin",id:e.id,a:t,bot:e.bot}),this.phaseEnd=Math.min(this.phaseEnd,this.t+4.5)}startClimb(e=!1){if(this.pendingSummon&&!this.monster){let r=this.pendingSummon.by;this.pendingSummon=null,this.emit({k:"summon",id:r}),this.spawnMonster(!0,!0);return}this.monster=null,this.riddle=null;for(let r of this.aliveList())r.runPts+=10,r.floors++;let t=this.aliveList().sort((r,a)=>Math.hypot(r.x-Nt.x,r.z-Nt.z)-Math.hypot(a.x-Nt.x,a.z-Nt.z)),n=this.o.climbSeconds,i=Math.min(.14,n*.5/Math.max(1,t.length));t.forEach((r,a)=>{r.climb={delay:this.t+a*i,s:0,on:!1},r.door=-1}),this.lift=e||this.skipBanked,this.skipBanked=!1,this.setPhase("climb",n),this.emit({k:"climb",lift:this.lift,floor:this.floor}),this.lift&&(this.liftPending=!0,this.addFuel(10),this.liftFloor=this.floor+2),this.nextTheme(this.floor+(this.lift?2:1))}endRun(e){let t=[...this.people.values()].filter(a=>a.inRun&&!a.bot),n=[...this.people.values()].filter(a=>a.inRun&&!a.bot&&a.runPts>0).sort((a,o)=>o.runPts-a.runPts).slice(0,3),i=[...this.people.values()].filter(a=>a.inRun).sort((a,o)=>o.runPts-a.runPts);for(let a of t)a.pts+=a.runPts;let r=this.floor;this.sessionBest=Math.max(this.sessionBest,r),this.lastResult={run:this.run,floor:r,reason:e,players:t.map(a=>({uid:a.uid,name:a.name,pts:a.runPts,floors:a.floors,riddles:a.riddles})),top:n.map(a=>a.id)},this.monster=null,this.riddle=null,this.kinds=[];for(let a of this.people.values())a.climb=null;this.setPhase("end",this.o.endSeconds),this.emit({k:"end",floor:r,reason:e,top:(n.length?n:i.slice(0,3)).map(a=>a.id),best:this.sessionBest})}step(e){this.t+=e;let t=this.phase;if(t!=="gather"&&t!=="end"&&(this.fuel=Math.max(0,this.fuel-this.o.fuelDrain*(1+this.floor*.07)*e*(t==="climb"||t==="enter"?.5:1)),this.fuel<25&&!this.lowWarned&&(this.lowWarned=!0,this.emit({k:"lowfuel"}))),this.bots(e),this.monster&&this.t>=this.monster.nextAtk&&this.monsterAttack(),this.riddle&&!this.riddle.solved&&this.o.bots&&this.t>this.riddle.botAt&&this.t-this.humanAt>45&&(this.riddle.botAt=1e9,this.rng()<.7)){let n=this.aliveList().filter(i=>i.bot);n.length&&this.solveRiddle(n[this.r(n.length)],this.riddle.a[0])}if(this.move(e),t!=="gather"&&t!=="end"){if(this.alive===0)return this.endRun("fallen");if(this.fuel<=0)return this.endRun("dark")}if(!(this.t<this.phaseEnd))switch(t){case"gather":if(this.alive===0&&(this.fillBots(),!this.alive)){this.phaseEnd=this.t+2;return}this.nextFloor();break;case"enter":this.doors===0?this.spawnMonster(!0):this.startVote();break;case"vote":this.closeVote();break;case"reveal":this.resolve();break;case"monster":case"boss":this.monsterWins();break;case"riddle":if(!this.riddle.solved){this.addFuel(-10),this.emit({k:"rfail",a:this.riddle.a[0]}),this.riddle.solved=-1,this.phaseEnd=this.t+3.5;return}this.startClimb();break;case"treasure":case"trap":case"victory":this.startClimb();break;case"climb":this.floor>=this.o.topFloor?(this.floor=this.o.topFloor,this.endRun("top")):this.nextFloor();break;case"end":this.startRun();break}}monsterAttack(){let e=this.monster;e.atkN++,e.nextAtk=this.t+(e.boss?4:3.2),this.addFuel(e.boss?-4:-3);let t=null;e.boss&&e.atkN%3===0&&(t=this.casualties(.08,new Set,1)),this.emit({k:"matk",boss:e.boss,slam:!!t,...t||{}})}bots(e){if(this.o.bots){for(let t of this.people.values())if(!(!t.bot||!t.alive)){if(this.phase==="vote"&&t.door<0&&this.rng()<e*.25&&this.t-this.phaseStart<this.o.voteSeconds*.8){let n=this.prophecy>=0&&this.rng()<.5?this.prophecy:this.r(this.doors);t.door=n,this.countVotes(),this.emit({k:"vote",id:t.id,d:n})}this.monster&&this.rng()<e*this.o.botHitRate&&this.damage(t,(1.2+this.rng()*1.6)*this.o.dmgMul,!1)}}}move(e){let t=[];for(let d of this.people.values())d.alive&&t.push(d);t.sort((d,h)=>d.id-h.id);let n=this.doors?hr(this.doors):[],i=[[],[],[]],r=[];for(let d of t)(this.phase==="vote"||this.phase==="reveal")&&d.door>=0?i[d.door].push(d):r.push(d);let a=(d,h,m,b,g)=>d.forEach((f,_)=>{let w=b*Math.sqrt(_+.5),v=_*2.39996;f.tx=h+Math.cos(v)*w,f.tz=m+Math.sin(v)*w*g}),o=this.phase==="monster"||this.phase==="boss",l=r.length>40?.52:r.length>20?.6:.7;a(r,0,o?-.6:-1.9,l,.55),i.forEach((d,h)=>{d.length&&a(d,n[h],St+3,.5,.7)});let c=this.phase==="climb",u=Nt.x-Nt.r,p=Nt.z;for(let d of t){if(c&&d.climb){let g=d.climb;if(this.t<g.delay?(d.tx=u-.6,d.tz=p+1.2):g.on||(d.tx=u,d.tz=p,(Math.hypot(d.x-u,d.z-p)<.5||this.t-g.delay>1.6)&&(g.on=!0,g.s=0)),g.on){g.s=Math.min(1,g.s+e/1.7);let f=Math.PI-g.s*Math.PI*2,_=Nt.x+Math.cos(f)*Nt.r,w=Nt.z+Math.sin(f)*Nt.r;d.face=Math.atan2(_-d.x,w-d.z)||d.face,d.x=_,d.z=w,d.y=g.s*It;continue}}let h=d.tx-d.x,m=d.tz-d.z,b=Math.hypot(h,m);if(b>.05){let g=Math.min(b,mv*e*(b>3?1.4:1));d.x+=h/b*g,d.z+=m/b*g,b>.3&&(d.face=Math.atan2(h,m))}else(o||this.phase==="vote"||this.phase==="enter")&&(d.face=Math.PI)}}snapshot(){let e=[],t=[],n=[];for(let l of this.people.values())l.alive?t.push(l):l.inRun&&n.push(l);let i=t;t.length>this.o.sendCap&&(i=t.slice().sort((l,c)=>(c.bot?0:1)-(l.bot?0:1)||c.lastAct-l.lastAct).slice(0,this.o.sendCap));let r=0,a=0;for(let l of t)!l.bot&&l.runPts>a&&(a=l.runPts,r=l.id);for(let l of i){let c=Wt.alive|(l.bot?Wt.bot:0)|(this.t-l.cmdT<1.2?Wt.cmd:0)|(l.lives?Wt.life:0)|(l.id===r?Wt.crown:0)|(this.t-l.hitT<.3?Wt.hit:0)|(this.t-l.giftT<3?Wt.gift:0);(this.phase==="vote"||this.phase==="reveal")&&l.door>=0&&(c|=l.door+1<<fv),l.climb&&l.climb.on&&(c|=2048),e.push(l.id,Math.round(l.x*100)/100,Math.round(l.y*100)/100,Math.round(l.z*100)/100,Math.round(l.face*100)/100,c)}n.sort((l,c)=>c.fell-l.fell);for(let l of n.slice(0,this.o.ghostCap))e.push(l.id,0,0,0,0,Wt.ghost|(l.bot?Wt.bot:0));let o=this.monster;return{tm:Math.round(this.t*1e3)/1e3,ph:this.phase,tl:Math.max(0,Math.round((this.phaseEnd-this.t)*10)/10),pd:Math.round((this.phaseEnd-this.phaseStart)*10)/10,fl:this.floor,th:this.themeIdx,nd:this.doors,vc:this.voteCounts.slice(0,this.doors),pr:this.prophecy,ch:this.chosen,kinds:this.phase==="vote"||this.phase==="enter"?null:this.kinds,fuel:Math.round(this.fuel*10)/10,sh:this.shields,n:t.length,gh:n.length,hype:this.hype,run:this.run,best:this.sessionBest,mo:o?{k:o.kind,n:o.name,hp:Math.ceil(o.hp),max:o.max,b:o.boss?1:0}:null,ri:this.riddle?this.riddle.i:-1,rs:this.riddle&&this.riddle.solved||0,pdc:this.predict?this.predict.id:0,pk:this.predict?this.predict.kind:"",lift:this.phase==="climb"&&this.lift?1:0,nth:this.phase==="climb"&&this.upcoming?this.upcoming.th:-9,f:e}}board(e=8){let t=new Map;for(let n of this.people.values())!n.bot&&(n.pts||n.runPts)&&t.set(n.uid,{name:n.name,pts:n.pts+(n.inRun&&this.phase!=="end"?n.runPts:0),riddles:n.riddles,floors:n.floors});return[...t.values()].sort((n,i)=>i.pts-n.pts).slice(0,e)}};function wc(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Vt;l.morphTargetsRelative=o;let c=0;for(let u=0;u<s.length;++u){let p=s[u],d=0,h=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in p.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(p.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in p.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[m].length!==s[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(p.morphAttributes[m]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=p.index.count;else if(p.attributes.position!==void 0)m=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0,p=[];for(let d=0;d<s.length;++d){let h=s[d].index;for(let m=0;m<h.count;++m)p.push(h.getX(m)+u);u+=s[d].attributes.position.count}l.setIndex(p)}for(let u in r){let p=Mp(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(let u in a){let p=a[u][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<p;++d){let h=[];for(let b=0;b<a[u].length;++b)h.push(a[u][b][d]);let m=Mp(h);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function Mp(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new ft(a,t,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let p=l/t;for(let d=0,h=u.count;d<h;d++)for(let m=0;m<t;m++){let b=u.getComponent(d,m);o.setComponent(d+p,m,b)}}else a.set(u.array,l);l+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function mu(s,e){if(e===Oh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Qr||e===ro){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Qr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function uo(s){let e=new Map,t=new Map,n=s.clone();return Sp(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Sp(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Sp(s.children[n],e.children[n],t)}var sa=class extends Ci{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Mu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new Tc(t,xt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Tc(t,xt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ku(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=is.extractUrlBase(e);a=is.resolveURL(c,this.path)}else a=is.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new qr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Rp){try{a[xt.KHR_BINARY_GLTF]=new Uu(e)}catch(p){i&&i(p);return}r=JSON.parse(a[xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Wu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let p=this.pluginCallbacks[u](c);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[p.name]=p,a[p.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let p=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(p){case xt.KHR_MATERIALS_UNLIT:a[p]=new vu;break;case xt.KHR_DRACO_MESH_COMPRESSION:a[p]=new Ou(r,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:a[p]=new Bu;break;case xt.KHR_MESH_QUANTIZATION:a[p]=new zu;break;default:d.indexOf(p)>=0&&o[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function gv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function tn(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},_u=class{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ce(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Un);let p=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new nr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new er(u),c.distance=p;break;case"spot":c=new Xa(u),c.distance=p,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ni(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},vu=class{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return $t}extendParams(e,t,n){let i=[];e.color=new Ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Un),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(i)}},yu=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Mu=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new it(r,r)}return Promise.all(i)}},Su=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},wu=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Tu=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Au=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Un)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ht)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Eu=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Ru=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(r[0],r[1],r[2],Un),Promise.all(i)}},Cu=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Pu=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(r[0],r[1],r[2],Un),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ht)),Promise.all(i)}},Iu=class{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Lu=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Du=class{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Fu=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Nu=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Tc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,p=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,p,d,i.mode,i.filter).then(function(h){return h.buffer}):a.ready.then(function(){let h=new ArrayBuffer(u*p);return a.decodeGltfBuffer(new Uint8Array(h),u,p,d,i.mode,i.filter),h})})}else return null}},ku=class{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==ci.TRIANGLES&&c.mode!==ci.TRIANGLE_STRIP&&c.mode!==ci.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),p=u.isGroup?u.children:[u],d=c[0].count,h=[];for(let m of p){let b=new Je,g=new B,f=new Sn,_=new B(1,1,1),w=new Dn(m.geometry,m.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,E),l.SCALE&&_.fromBufferAttribute(l.SCALE,E),w.setMatrixAt(E,b.compose(g,f,_));let v=null;for(let E in l)if(E==="_COLOR_0"){let y=l[E];w.instanceColor=new Yi(y.array,y.itemSize,y.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(v===null){let x=w.geometry;v=new Vt,v.name=x.name;for(let T in x.attributes)v.setAttribute(T,x.attributes[T]);for(let T in x.morphAttributes)v.morphAttributes[T]=x.morphAttributes[T];x.index!==null&&v.setIndex(x.index),v.morphTargetsRelative=x.morphTargetsRelative;for(let T of x.groups)v.addGroup(T.start,T.count,T.materialIndex);x.boundingBox!==null&&(v.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(v.boundingSphere=x.boundingSphere.clone()),v.drawRange.start=x.drawRange.start,v.drawRange.count=x.drawRange.count,v.userData=Object.assign({},x.userData),w.geometry=v}let y=l[E];v.setAttribute(E,new Yi(y.array,y.itemSize,y.normalized))}Dt.prototype.copy.call(w,m),this.parser.assignFinalMaterial(w),h.push(w)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}},Rp="glTF",fo=12,wp={JSON:1313821514,BIN:5130562},Uu=class{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,fo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-fo,r=new DataView(e,fo),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===wp.JSON){let c=new Uint8Array(e,fo+a,o);this.content=n.decode(c)}else if(l===wp.BIN){let c=fo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ou=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let p=Hu[u]||u.toLowerCase();o[p]=a[u]}for(let u in e.attributes){let p=Hu[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],h=ia[d.componentType];c[p]=h.name,l[p]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(p,d){i.decodeDracoFile(u,function(h){for(let m in h.attributes){let b=h.attributes[m],g=l[m];g!==void 0&&(b.normalized=g)}p(h)},o,c,Un,d)})})}},Bu=class{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},zu=class{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}},Ac=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,p=(n-t)/u,d=p*p,h=d*p,m=e*c,b=m-c,g=-2*h+3*d,f=h-d,_=1-g,w=f-d+p;for(let v=0;v!==o;v++){let E=a[b+v+o],y=a[b+v+l]*u,x=a[m+v+o],T=a[m+v]*u;r[v]=_*E+w*y+g*x+f*T}return r}},bv=new Sn,Gu=class extends Ac{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return bv.fromArray(r).normalize().toArray(r),r}},ci={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ia={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tp={9728:en,9729:pn,9984:El,9985:Yr,9986:ar,9987:oi},Ap={33071:ni,33648:Lr,10497:xs},gu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Cs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xv={CUBICSPLINE:void 0,LINEAR:Ws,STEP:Vs},bu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _v(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ys({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pi})),s.DefaultMaterial}function ur(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ni(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let p=e[c];if(p.POSITION!==void 0&&(n=!0),p.NORMAL!==void 0&&(i=!0),p.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let p=e[c];if(n){let d=p.POSITION!==void 0?t.getDependency("accessor",p.POSITION):s.attributes.position;a.push(d)}if(i){let d=p.NORMAL!==void 0?t.getDependency("accessor",p.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=p.COLOR_0!==void 0?t.getDependency("accessor",p.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],p=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=p),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function yv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Mv(s){let e,t=s.extensions&&s.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xu(t.attributes):e=s.indices+":"+xu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+xu(s.targets[n]);return e}function xu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Vu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Sv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var wv=new Je,Wu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?(this.textureLoader=new Qs(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ka(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ur(r,o,i),Ni(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(is.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=gu[i.type],o=ia[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new ft(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=gu[i.type],c=ia[i.componentType],u=c.BYTES_PER_ELEMENT,p=u*l,d=i.byteOffset||0,h=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,b,g;if(h&&h!==p){let f=Math.floor(d/h),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count,w=t.cache.get(_);w||(b=new c(o,f*h,i.count*h/u),w=new Or(b,h/u),t.cache.add(_,w)),g=new Br(w,l,d%h/u,m)}else o===null?b=new c(i.count*l):b=new c(o,d,i.count*l),g=new ft(b,l,m);if(i.sparse!==void 0){let f=gu.SCALAR,_=ia[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,E=new _(a[1],w,i.sparse.count*f),y=new c(a[2],v,i.sparse.count*l);o!==null&&(g=new ft(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let x=0,T=E.length;x<T;x++){let D=E[x];if(g.setX(D,y[x*l]),l>=2&&g.setY(D,y[x*l+1]),l>=3&&g.setZ(D,y[x*l+2]),l>=4&&g.setW(D,y[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Tp[d.magFilter]||pn,u.minFilter=Tp[d.minFilter]||oi,u.wrapS=Ap[d.wrapS]||xs,u.wrapT=Ap[d.wrapT]||xs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==en&&u.minFilter!==pn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)u=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(h,m){t.parse(d,h,m)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let h=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(d){return new Promise(function(h,m){let b=h;t.isImageBitmapLoader===!0&&(b=function(g){let f=new mn(g);f.needsUpdate=!0,h(f)}),t.load(is.resolveURL(d,r.path),b,void 0,m)})})}let p=u.then(function(d){return c===!0&&o.revokeObjectURL(l),Ni(d,a),d.userData.mimeType=a.mimeType||Sv(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=p,p}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[xt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Hr,Ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Gr,Ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ys}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[xt.KHR_MATERIALS_UNLIT]){let p=i[xt.KHR_MATERIALS_UNLIT];a=p.getMaterialType(),c.push(p.extendParams(o,r,t))}else{let p=r.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(p.baseColorFactor)){let d=p.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Un),o.opacity=d[3]}p.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",p.baseColorTexture,Ht)),o.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,o.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",p.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",p.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=bn);let u=r.alphaMode||bu.OPAQUE;if(u===bu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===bu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==$t&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new it(1,1),r.normalTexture.scale!==void 0)){let p=r.normalTexture.scale;o.normalScale.set(p,p)}if(r.occlusionTexture!==void 0&&a!==$t&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==$t){let p=r.emissiveFactor;o.emissive=new Ce().setRGB(p[0],p[1],p[2],Un)}return r.emissiveTexture!==void 0&&a!==$t&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(c).then(function(){let p=new a(o);return r.name&&(p.name=r.name),Ni(p,r),t.associations.set(p,{materials:e}),r.extensions&&ur(i,p,r),p})}createUniqueName(e){let t=zt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ep(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=Mv(c),p=i[u];if(p)a.push(p.promise);else{let d;c.extensions&&c.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Ep(new Vt,c,t),c.mode===ci.TRIANGLE_STRIP?d=d.then(h=>mu(h,ro)):c.mode===ci.TRIANGLE_FAN&&(d=d.then(h=>mu(h,Qr))),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?_v(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],p=[];for(let h=0,m=u.length;h<m;h++){let b=u[h],g=a[h],f,_=c[h];if(g.mode===ci.TRIANGLES||g.mode===ci.TRIANGLE_STRIP||g.mode===ci.TRIANGLE_FAN||g.mode===void 0){let w=r.isSkinnedMesh===!0,v=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");w&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=w&&v?new js(b,_):new Ye(b,_),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(g.mode===ci.LINES)f=new La(b,_);else if(g.mode===ci.LINE_STRIP)f=new Js(b,_);else if(g.mode===ci.LINE_LOOP)f=new Da(b,_);else if(g.mode===ci.POINTS)f=new ys(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&yv(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Ni(f,r),g.extensions&&ur(i,f,g),t.assignFinalMaterial(f),p.push(f)}for(let h=0,m=p.length;h<m;h++)t.associations.set(p[h],{meshes:e,primitives:h});if(p.length===1)return r.extensions&&ur(i,p[0],r),p[0];let d=new rn;r.extensions&&ur(i,d,r),t.associations.set(d,{meshes:e});for(let h=0,m=p.length;h<m;h++)d.add(p[h]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new fn(fc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new tr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ni(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let p=a[c];if(p){o.push(p);let d=new Je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ks(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let p=0,d=i.channels.length;p<d;p++){let h=i.channels[p],m=i.samplers[h.sampler],b=h.target,g=b.node,f=i.parameters!==void 0?i.parameters[m.input]:m.input,_=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",_)),c.push(m),u.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(p){let d=p[0],h=p[1],m=p[2],b=p[3],g=p[4],f=[];for(let w=0,v=d.length;w<v;w++){let E=d[w],y=h[w],x=m[w],T=b[w],D=g[w];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let I=n._createAnimationTracks(E,y,x,T,D);if(I)for(let L=0;L<I.length;L++)f.push(I[L])}let _=new $s(r,void 0,f);return Ni(_,i),_})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],p=c[1],d=c[2];d!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(d,wv)});for(let h=0,m=p.length;h<m;h++)u.add(p[h]);if(u.userData.pivot!==void 0&&p.length>0){let h=u.userData.pivot,m=p[0];u.pivot=new B().fromArray(h),u.position.x-=h[0],u.position.y-=h[1],u.position.z-=h[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new zr:c.length>1?u=new rn:c.length===1?u=c[0]:u=new Dt,u!==c[0])for(let p=0,d=c.length;p<d;p++)u.add(c[p]);if(r.name&&(u.userData.name=r.name,u.name=a),Ni(u,r),r.extensions&&ur(n,u,r),r.matrix!==void 0){let p=new Je;p.fromArray(r.matrix),u.applyMatrix4(p)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let p=i.associations.get(u);i.associations.set(u,{...p})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new rn;n.name&&(r.name=i.createUniqueName(n.name)),Ni(r,n),n.extensions&&ur(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,p=l.length;u<p;u++){let d=l[u];d.parent!==null?r.add(uo(d)):r.add(d)}let c=u=>{let p=new Map;for(let[d,h]of i.associations)(d instanceof Ln||d instanceof mn)&&p.set(d,h);return u.traverse(d=>{let h=i.associations.get(d);h!=null&&p.set(d,h)}),p};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}Cs[r.path]===Cs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(Cs[r.path]){case Cs.weights:u=es;break;case Cs.rotation:u=ts;break;case Cs.translation:case Cs.scale:u=ws;break;default:n.itemSize===1?u=es:u=ws;break}let p=i.interpolation!==void 0?xv[i.interpolation]:Ws,d=this._getArrayFromAccessor(n);for(let h=0,m=l.length;h<m;h++){let b=new u(l[h]+"."+Cs[r.path],t.array,d,p);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Vu(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ts?Gu:Ac;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Tv(s,e,t){let n=e.attributes,i=new Yn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),o.normalized){let u=Vu(ia[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new B,l=new B;for(let c=0,u=r.length;c<u;c++){let p=r[c];if(p.POSITION!==void 0){let d=t.json.accessors[p.POSITION],h=d.min,m=d.max;if(h!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(m[2]))),d.normalized){let b=Vu(ia[d.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new gn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Ep(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=Hu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return bt.workingColorSpace!==Un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),Ni(s,e),Tv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?vv(s,e.targets,t):s})}var Ec=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var _=new Uint8Array(f.length),w=0;w<f.length;++w){var v=f.charCodeAt(w);_[w]=v>96?v-97:v>64?v-39:v+4}for(var E=0,w=0;w<f.length;++w)_[E++]=_[w]<60?n[_[w]]:(_[w]-60)*64+_[++w];return _.buffer.slice(0,E)}function l(f,_,w,v,E,y,x){var T=f.exports.sbrk,D=v+3&-4,I=T(D*E),L=T(y.length),F=new Uint8Array(f.exports.memory.buffer);F.set(y,L);var H=_(I,v,E,L,y.length);if(H==0&&x&&x(I,D,E),w.set(F.subarray(I,I+v*E)),T(I-T(0)),H!=0)throw new Error("Malformed buffer data: "+H)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},p=[],d=0;function h(f){var _={object:new Worker(f),pending:0,requests:{}};return _.object.onmessage=function(w){var v=w.data;_.pending-=v.count,_.requests[v.id][v.action](v.value),delete _.requests[v.id]},_}function m(f){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),w=new Blob([_],{type:"text/javascript"}),v=URL.createObjectURL(w),E=p.length;E<f;++E)p[E]=h(v);for(var E=f;E<p.length;++E)p[E].object.postMessage({});p.length=f,URL.revokeObjectURL(v)}function b(f,_,w,v,E){for(var y=p[0],x=1;x<p.length;++x)p[x].pending<y.pending&&(y=p[x]);return new Promise(function(T,D){var I=new Uint8Array(w),L=++d;y.pending+=f,y.requests[L]={resolve:T,reject:D},y.object.postMessage({id:L,count:f,size:_,source:I,mode:v,filter:E},[I.buffer])})}function g(f){var _=f.data;self.ready.then(function(w){if(!_.id)return self.close();try{var v=new Uint8Array(_.count*_.size);l(w,w.exports[_.mode],v,_.count,_.size,_.source,w.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:v},[v.buffer])}catch(E){self.postMessage({id:_.id,count:_.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(f){m(f)},decodeVertexBuffer:function(f,_,w,v,E){l(r,r.exports.meshopt_decodeVertexBuffer,f,_,w,v,r.exports[c[E]])},decodeIndexBuffer:function(f,_,w,v){l(r,r.exports.meshopt_decodeIndexBuffer,f,_,w,v)},decodeIndexSequence:function(f,_,w,v){l(r,r.exports.meshopt_decodeIndexSequence,f,_,w,v)},decodeGltfBuffer:function(f,_,w,v,E,y){l(r,r.exports[u[E]],f,_,w,v,r.exports[c[y]])},decodeGltfBufferAsync:function(f,_,w,v,E){return p.length>0?b(f,_,w,u[v],c[E]):a.then(function(){var y=new Uint8Array(f*_);return l(r,r.exports[u[v]],y,f,_,w,r.exports[c[E]]),y})}}})();var Av=[ft.prototype.getX,ft.prototype.getY,ft.prototype.getZ,ft.prototype.getW],Cp={idle:["Idle",1,!0],combat:["Idle_Combat",1,!0],run:["Running_A",1,!0],walk:["Walking_A",1,!0],attack:["1H_Melee_Attack_Chop",1.25,!1],slash:["1H_Melee_Attack_Slice_Horizontal",1.25,!1],spin:["2H_Melee_Attack_Spin",1.3,!1],shoot:["1H_Ranged_Shoot",1.2,!1],cast:["Spellcast_Shoot",1.2,!1],summon:["Spellcast_Summon",1,!1],block:["Block",1.2,!1],hit:["Hit_A",1.3,!1],die:["Death_A",1,!1],dead:["Death_A_Pose",1,!0],cheer:["Cheer",1,!0],dash:["Dodge_Forward",1.3,!1],jump:["Jump_Full_Short",1,!1],rise:["Lie_StandUp",1.4,!1],taunt:["Taunt",1,!1],spawn:["Spawn_Ground_Skeletons",1.2,!1],use:["Interact",1.2,!1]},Ev={Knight:["1H_Sword","Badge_Shield","Knight_Helmet","Knight_Cape"],Barbarian:["1H_Axe","Barbarian_Round_Shield","Barbarian_Hat","Barbarian_Cape"],Mage:["2H_Staff","Mage_Hat","Mage_Cape"],Rogue:["1H_Crossbow","Knife_Offhand","Rogue_Cape"],Rogue_Hooded:["Knife","Knife_Offhand","Rogue_Cape"],Skeleton_Minion:[],Skeleton_Warrior:["Skeleton_Warrior_Helmet"],Skeleton_Rogue:["Skeleton_Rogue_Hood","Skeleton_Rogue_Cape"],Skeleton_Mage:["Skeleton_Mage_Hat"]},Rv=new sa().setMeshoptDecoder(Ec),Pp=s=>new Promise((e,t)=>Rv.load(s,e,void 0,t));function Cv(s,e){if(s&&/glow/i.test(s.name||""))return new $t({color:8057087,fog:!0});let t=e||s.map;return t&&(t.colorSpace=Ht,t.anisotropy=2),new Ss({map:t||null,color:16777215})}function Ip(s,e,t=Ev[e],n=!0){let i=s.scene;i.updateMatrixWorld(!0);let r=new Set(t||[]),a=[],o=[];if(i.traverse(y=>{y.isSkinnedMesh?a.push(y):y.isMesh&&o.push(y)}),!a.length)throw new Error("no skinned mesh in "+e);let l=a[0],c=l.skeleton,u=c.bones,p=new Map(u.map((y,x)=>[y,x])),d=l.bindMatrixInverse.clone(),h=[],m=y=>{let x=h.findIndex(T=>T.src===y);return x<0&&(h.push({src:y,mat:Cv(y)}),x=h.length-1),x},b=[],g=y=>{y=y.index?y.toNonIndexed():y.clone();for(let x of Object.keys(y.attributes))["position","normal","uv","skinIndex","skinWeight"].includes(x)||y.deleteAttribute(x);for(let x of Object.keys(y.attributes)){let T=y.attributes[x],D=T.itemSize,I=x==="skinIndex"?new Uint16Array(T.count*D):new Float32Array(T.count*D);for(let L=0;L<T.count;L++)for(let F=0;F<D;F++)I[L*D+F]=x==="skinIndex"?T.getComponent(L,F):Av[F].call(T,L);y.setAttribute(x,new ft(I,D))}return y.attributes.normal||y.computeVertexNormals(),y.attributes.uv||y.setAttribute("uv",new ft(new Float32Array(y.attributes.position.count*2),2)),y};for(let y of a){let x=g(y.geometry);if(y!==l){let T=y.skeleton.bones,D=T.findIndex(F=>p.has(F)),I=p.get(T[D]),L=new Je().copy(d).multiply(new Je().copy(c.boneInverses[I]).invert()).multiply(y.skeleton.boneInverses[D]).multiply(y.bindMatrix);x.applyMatrix4(L)}if(y.skeleton!==c){let T=y.skeleton.bones.map(I=>p.get(I)??0),D=x.attributes.skinIndex;for(let I=0;I<D.count;I++)for(let L=0;L<4;L++)D.setComponent(I,L,T[D.getComponent(I,L)])}b.push({g:x,m:m(y.material)})}for(let y of o){if(!r.has(y.name)&&!r.has(y.parent?.name))continue;let x=y.parent;for(;x&&!x.isBone;)x=x.parent;if(!x)continue;let T=p.get(x);if(T===void 0)continue;let D=new Je;{let V=y;for(D.copy(y.matrix),V=y.parent;V&&V!==x;)D.premultiply(V.matrix),V=V.parent}let I=new Je().copy(d).multiply(new Je().copy(c.boneInverses[T]).invert()).multiply(D),L=g(y.geometry);L.applyMatrix4(I);let F=L.attributes.position.count,H=new Uint16Array(F*4),R=new Float32Array(F*4);for(let V=0;V<F;V++)H[V*4]=T,R[V*4]=1;L.setAttribute("skinIndex",new ft(H,4)),L.setAttribute("skinWeight",new ft(R,4)),b.push({g:L,m:m(y.material)})}b.sort((y,x)=>y.m-x.m);let f=wc(b.map(y=>y.g),h.length>1);if(h.length>1){let y=0;f.clearGroups();for(let x=0;x<h.length;x++){let T=0;for(let D of b)D.m===x&&(T+=D.g.attributes.position.count);T&&f.addGroup(y,T,x),y+=T}}for(let y of b)y.g.dispose();f.computeBoundingBox(),f.boundingSphere=new gn(new B(0,1.1,0),1.9);let _=new rn;_.name=e;let w=(()=>{let y=u[0];for(;y.parent&&y.parent.isBone;)y=y.parent;return y})(),v=[];w.traverse(y=>{y.isMesh&&v.push(y)});for(let y of v)y.parent.remove(y),n&&y.geometry.dispose();_.add(w);let E=new js(f,h.length>1?h.map(y=>y.mat):h[0].mat);return E.frustumCulled=!0,_.add(E),_.updateMatrixWorld(!0),E.bind(new Ks(u,c.boneInverses.map(y=>y.clone())),l.bindMatrix.clone()),{tpl:_,geo:f,mats:h.map(y=>y.mat),height:2.1}}async function Lp({base:s="/models",names:e=[],loot:t=null,onProgress:n}={}){let i={templates:new Map,clips:new Map,variants:new Map,pools:new Map,disposables:[]},[r,...a]=await Promise.all([Pp(`${s}/anims.glb`),...e.map(o=>Pp(`${s}/chars/${o}.glb`))]);for(let o of r.animations)i.clips.set(o.name,o);return e.forEach((o,l)=>{if(t&&t[o]){let u=Ip({scene:uo(a[l].scene)},o+"@loot",t[o],!1);i.templates.set(o+"@loot",u),i.disposables.push(u.geo,...u.mats)}let c=Ip(a[l],o);i.templates.set(o,c),i.disposables.push(c.geo,...c.mats);for(let u of c.mats)u.map&&i.disposables.push(u.map);n?.(o)}),i.material=(o,l=null,c=.32)=>{let u=i.templates.get(o);if(l===null)return u.mats.length>1?u.mats:u.mats[0];let p=o+":"+l+":"+c,d=i.variants.get(p);if(!d){if(typeof l=="string"&&l.startsWith("ghost")){let h=l==="ghost-boss"?13215999:12113151;d=u.mats.map(m=>{let b=new $t({map:m.map||null,color:h,transparent:!0,opacity:.55,depthWrite:!1,blending:xi,fog:!0});return i.disposables.push(b),b})}else{let h=new Ce(l),m=new Ce(1,1,1).lerp(h,c);d=u.mats.map(b=>{if(b.isMeshBasicMaterial)return b;let g=b.clone();return g.color.copy(m),i.disposables.push(g),g})}if(d=d.length>1?d:d[0],i.variants.set(p,d),i.variants.size>160){let h=i.variants.keys().next().value;i.variants.delete(h)}}return d},i.actor=(o,l=null)=>{let c=i.pools.get(o)||[];i.pools.set(o,c);let u=c.pop();if(!u){let p=i.templates.get(o),d=uo(p.tpl),h=null;d.traverse(b=>{b.isSkinnedMesh&&(h=b)});let m=new Ja(d);u={name:o,obj:d,mesh:h,mixer:m,actions:new Map,state:"",base:"idle",until:0,tint:void 0,acc:0,flashT:-9,hand:null},d.traverse(b=>{b.isBone&&/handslot.?l/i.test(b.name)&&(u.hand=b)}),u.play=(b,g,{fade:f=.15,speed:_=1}={})=>Pv(i,u,b,g,f,_)}return u.tint!==l&&(u.mesh.material=i.material(o,l),u.tint=l),u.obj.visible=!0,u.state="",u.base="idle",u.until=0,u.mixer.stopAllAction(),u.play("idle",0,{fade:0}),u},i.bake=(o,l,c=4,{from:u=0,to:p=1}={})=>{let d=`${o}|${l}|${c}|${u}|${p}`;if(i.baked=i.baked||new Map,i.baked.has(d))return i.baked.get(d);let h=i.actor(o),m=qu(i,h,l);h.mixer.stopAllAction(),m.reset(),m.setLoop(so,1/0),m.play();let b=m.getClip().duration,g=h.mesh.geometry,f=g.attributes.position.count,_=new B,w=[];for(let v=0;v<c;v++){h.mixer.setTime(b*(u+(p-u)*(v/c))),h.obj.updateMatrixWorld(!0),h.mesh.skeleton.update();let E=new Float32Array(f*3);for(let x=0;x<f;x++)h.mesh.getVertexPosition(x,_),_.applyMatrix4(h.mesh.matrix),E[x*3]=_.x,E[x*3+1]=_.y,E[x*3+2]=_.z;let y=new Vt;y.setAttribute("position",new ft(E,3)),y.setAttribute("uv",g.attributes.uv),g.index&&y.setIndex(g.index);for(let x of g.groups)y.addGroup(x.start,x.count,x.materialIndex);y.computeVertexNormals(),y.boundingSphere=new gn(new B(0,1,0),2.2),i.disposables.push(y),w.push(y)}return m.stop(),i.release(h),i.baked.set(d,w),w},i.release=o=>{o.obj.visible=!1,o.obj.parent?.remove(o.obj),o.mixer.stopAllAction(),(i.pools.get(o.name)||[]).push(o)},i.dispose=()=>{for(let o of i.disposables)try{o.dispose()}catch{}i.pools.clear(),i.variants.clear()},i}function qu(s,e,t){let n=e.actions.get(t);if(!n){let[i,r,a]=Cp[t]||Cp.idle,o=s.clips.get(i)||s.clips.get("Idle");n=e.mixer.clipAction(o),n.timeScaleBase=r,n.loopMode=a,a?n.setLoop(so,1/0):(n.setLoop(hc,1),n.clampWhenFinished=!0),e.actions.set(t,n)}return n}function Pv(s,e,t,n,i,r){let a=qu(s,e,t);if(a.loopMode){if(e.base=t,n<e.until||e.state===t)return}else e.until=n+a.getClip().duration/(a.timeScaleBase*r)*.92;let o=e.actions.get(e.state);a.reset(),a.timeScale=a.timeScaleBase*r,a.enabled=!0,a.setEffectiveWeight(1),o&&o!==a&&i>0?a.crossFadeFrom(o,i,!1):o&&o!==a&&o.stop(),a.play(),e.state=t}function Rc(s,e,t,n){if(e.state!==e.base&&n>=e.until&&e.base){let i=qu(s,e,e.base),r=e.actions.get(e.state);i.reset(),i.timeScale=i.timeScaleBase,i.enabled=!0,i.setEffectiveWeight(1),r&&i.crossFadeFrom(r,.18,!1),i.play(),e.state=e.base}e.mixer.update(t)}var Iv=[ft.prototype.getX,ft.prototype.getY,ft.prototype.getZ,ft.prototype.getW],Lv=new sa().setMeshoptDecoder(Ec);async function Dp(s){let e=await new Promise((d,h)=>Lv.load(s,d,void 0,h)),t=e.scene;t.updateMatrixWorld(!0);let n=new Map,i=new Map,r=new Set,a=[],o=null;for(let d of t.children){let h=[],m=new Je().copy(d.parent.matrixWorld).invert();if(d.traverse(g=>{if(!g.isMesh)return;g.material.map&&(o||(o=g.material.map),i.set(d.name,g.material.map),r.add(g.material.map));let f=g.geometry.index?g.geometry.toNonIndexed():g.geometry.clone();for(let _ of Object.keys(f.attributes))["position","normal","uv"].includes(_)||f.deleteAttribute(_);for(let _ of["position","normal","uv"]){let w=f.attributes[_];if(!w||w.array instanceof Float32Array&&!w.normalized)continue;let v=new Float32Array(w.count*w.itemSize);for(let E=0;E<w.count;E++)for(let y=0;y<w.itemSize;y++)v[E*w.itemSize+y]=Iv[y].call(w,E);f.setAttribute(_,new ft(v,w.itemSize))}f.attributes.normal||f.computeVertexNormals(),f.attributes.uv||f.setAttribute("uv",new ft(new Float32Array(f.attributes.position.count*2),2)),f.applyMatrix4(new Je().multiplyMatrices(m,g.matrixWorld)),h.push(f)}),!h.length)continue;let b=h.length>1?wc(h):h[0];h.length>1&&h.forEach(g=>g.dispose()),b.computeBoundingSphere(),n.set(d.name,b),a.push(b)}let l=new Map;for(let d of r){d.colorSpace=Ht,d.anisotropy=4,a.push(d);let h=new Ss({map:d});l.set(d,h),a.push(h)}e.scene.traverse(d=>{d.isMesh&&d.geometry.dispose()});let c=l.get(o)||new Ss;o||a.push(c);let u=d=>l.get(i.get(d))||c;return{geos:n,mat:c,matOf:u,has:d=>n.has(d),instanced(d,h,{material:m=u(d)}={}){let b=n.get(d);if(!b||!h.length)return null;let g=new Dn(b,m,h.length),f=new Dt,_=0;return h.forEach((w,v)=>{f.position.set(w.x,w.y||0,w.z),f.rotation.set(w.rx||0,w.ry||0,w.rz||0),f.scale.set((w.s||1)*(w.sx||1),(w.s||1)*(w.sy||1),(w.s||1)*(w.sz||1)),f.updateMatrix(),g.setMatrixAt(v,f.matrix),_=Math.max(_,Math.hypot(w.x,w.z)+(w.s||1)*3)}),g.instanceMatrix.needsUpdate=!0,g.geometry.boundingSphere,g.boundingSphere=new gn(new B,_),g.frustumCulled=!1,g},dispose(){for(let d of a)try{d.dispose()}catch{}}}}var po=["Knight","Barbarian","Mage","Rogue","Rogue_Hooded"],Xu=.86,nn=Math.PI*2,Fp=[16767416,15843471,14262374,11037509,8014380,16769999],Np={treasure:16761402,trap:16724804,monster:6160250,riddle:11566335},kp=s=>s===-2?as:s===-1||s===void 0||s<-2?Rs:yi[s]||Rs,os=10.2;function Up(s,e={}){let t=new bc({canvas:s,antialias:!!e.aa,alpha:!1,depth:!0,stencil:!1,powerPreference:"default",preserveDrawingBuffer:!!e.preserve,failIfMajorPerformanceCaveat:!1});if(!t.getContext())throw new Error("no webgl");t.outputColorSpace=Ht,t.toneMapping=Za,t.toneMappingExposure=1.2,t.shadowMap.enabled=!1;let n=new Ca;n.background=new Ce(1182240),n.fog=new Ra(1708080,14,42);let i=new fn(62,9/16,.4,120),r=[],a=M=>(r.push(M),M),o=new Wa(12166911,3809328,1.15);n.add(o);let l=new ja(6969994,.35);n.add(l);let c=new er(16757611,30,26,1.6);n.add(c);let u=new nr(16767408,1.1);u.position.set(3,12,14),n.add(u),n.add(u.target);let p=a(new _s(new Uint8Array([80,165,255]),3,1,$r));p.minFilter=p.magFilter=en,p.needsUpdate=!0;let d=(M,k={})=>a(new Zs({color:M,gradientMap:p,...k})),h=null,m=null,b=!1,g=null,f=Promise.all([Dp(e.envUrl||"/models/env-tower.glb"),Lp({names:po.concat(["Skeleton_Mage","Skeleton_Warrior"])})]).then(([M,k])=>{if(b){M.dispose(),k.dispose();return}m=M,h=k;for(let C of V.values())Ke(C);V.clear(),Qe()}).catch(M=>{throw g=M,M});f.catch(()=>{});function _(M,k,C,te=r,{mip:U=!0,repeat:ae=null}={}){let ge=document.createElement("canvas");ge.width=M,ge.height=k,C(ge.getContext("2d"),M,k);let J=new Na(ge);return J.colorSpace=Ht,J.generateMipmaps=U,U||(J.minFilter=1006),J.anisotropy=2,ae&&(J.wrapS=J.wrapT=1e3,J.repeat.set(ae[0],ae[1])),te.push(J),J}let w=7,v=()=>(w=w*16807%2147483647,(w-1)/2147483646),E=_(256,256,(M,k,C)=>{M.fillStyle="#5a5262",M.fillRect(0,0,k,C);let te=8;for(let U=0;U<te;U++){let ae=C/te,ge=U%2*.5;for(let J=-1;J<5;J++){let pe=k/4,me=(J+ge)*pe,ce=U*ae;M.fillStyle=`hsl(${250+v()*30}, ${8+v()*8}%, ${52+v()*22}%)`,M.fillRect(me+3,ce+3,pe-6,ae-6),M.fillStyle="rgba(0,0,0,0.12)",M.fillRect(me+3,ce+ae-9,pe-6,6);for(let Ie=0;Ie<6;Ie++)M.fillStyle=`rgba(0,0,0,${v()*.12})`,M.fillRect(me+v()*pe,ce+v()*ae,6+v()*10,3+v()*5)}}},r,{repeat:[5,1.6]}),y=_(64,64,(M,k)=>{let C=M.createRadialGradient(k/2,k/2,0,k/2,k/2,k/2);C.addColorStop(0,"rgba(0,0,0,0.6)"),C.addColorStop(.6,"rgba(0,0,0,0.28)"),C.addColorStop(1,"rgba(0,0,0,0)"),M.fillStyle=C,M.fillRect(0,0,k,k)},r,{mip:!1}),x=_(128,256,(M,k,C)=>{M.fillStyle="#4a2a1a",M.fillRect(0,0,k,C);for(let te=0;te<4;te++){M.fillStyle=`hsl(22, 45%, ${22+v()*10}%)`,M.fillRect(te*32+2,0,28,C),M.fillStyle="rgba(0,0,0,0.25)";for(let U=0;U<8;U++)M.fillRect(te*32+4+v()*22,v()*C,2,20+v()*40)}for(let te of[40,210]){M.fillStyle="#2a2a30",M.fillRect(0,te,k,14),M.fillStyle="#6a6a78";for(let U=8;U<k;U+=24)M.beginPath(),M.arc(U,te+7,3,0,nn),M.fill()}M.strokeStyle="#c9a24a",M.lineWidth=5,M.beginPath(),M.arc(k*.78,C*.55,10,0,nn),M.stroke()}),T=[1,2,3].map(M=>_(128,128,k=>{let C=k.createRadialGradient(64,64,10,64,64,62);C.addColorStop(0,"#fff3c4"),C.addColorStop(.75,"#f0b43c"),C.addColorStop(1,"#8a4a10"),k.fillStyle=C,k.beginPath(),k.arc(64,64,60,0,nn),k.fill(),k.lineWidth=6,k.strokeStyle="#5a2a00",k.stroke(),k.font="900 86px -apple-system, Arial Black, sans-serif",k.textAlign="center",k.textBaseline="middle",k.fillStyle="#3a1300",k.fillText(String(M),64,70)})),D=_(128,128,(M,k)=>{M.strokeStyle="rgba(255,255,255,0.75)",M.lineWidth=1.5;for(let C=0;C<7;C++){let te=C/6*(Math.PI/2);M.beginPath(),M.moveTo(0,0),M.lineTo(Math.cos(te)*k*1.4,Math.sin(te)*k*1.4),M.stroke()}for(let C=14;C<k*1.3;C+=16){M.beginPath();for(let te=0;te<=6;te++){let U=te/6*(Math.PI/2),ae=C*(.92+te%2*.08);te?M.lineTo(Math.cos(U)*ae,Math.sin(U)*ae):M.moveTo(Math.cos(U)*ae,Math.sin(U)*ae)}M.stroke()}}),I=_(128,128,(M,k,C)=>{M.fillStyle="#3a2214",M.fillRect(0,0,k,C);for(let te=0;te<4;te++){let U=4,ae=te*32;for(M.fillStyle="#24140a",M.fillRect(0,ae+28,k,4);U<k-6;){let ge=5+v()*8,J=18+v()*8;M.fillStyle=`hsl(${v()*360}, 45%, ${28+v()*22}%)`,M.fillRect(U,ae+28-J,ge,J),M.fillStyle="rgba(255,220,140,0.35)",M.fillRect(U,ae+28-J+3,ge,2),U+=ge+1}}}),L=_(256,256,(M,k)=>{let C=k/2;M.fillStyle="#f3e3bc",M.beginPath(),M.arc(C,C,C-6,0,nn),M.fill(),M.lineWidth=12,M.strokeStyle="#8a5a1a",M.stroke(),M.fillStyle="#3a2410",M.font="bold 30px Georgia, serif",M.textAlign="center",M.textBaseline="middle",["XII","I","II","III","IV","V","VI","VII","VIII","IX","X","XI"].forEach((te,U)=>{let ae=U/12*nn-Math.PI/2;M.fillText(te,C+Math.cos(ae)*(C-34),C+Math.sin(ae)*(C-34))})}),F=_(64,128,(M,k,C)=>{let te=M.createLinearGradient(0,0,k,C);te.addColorStop(0,"#b9c8ff"),te.addColorStop(.45,"#3a3870"),te.addColorStop(.55,"#d8e0ff"),te.addColorStop(1,"#2a2450"),M.fillStyle=te,M.fillRect(0,0,k,C)});F.wrapT=1e3;let H=(M,k)=>_(256,256,(C,te,U)=>{let ae=M==="belfry"?as:M==="gate"?Rs:yi.find(me=>me.id===M)||Rs,ge=new Ce(ae.floor),J=(me,ce)=>"#"+me.clone().multiplyScalar(ce).getHexString();if(C.fillStyle=J(ge,1),C.fillRect(0,0,te,U),M==="library"||M==="attic"||M==="gate"){for(let me=0;me<8;me++){C.fillStyle=J(ge,.85+v()*.3),C.fillRect(me*32+1,0,30,U);for(let ce=0;ce<2;ce++)C.fillStyle="rgba(0,0,0,0.35)",C.fillRect(me*32+1,v()*U,30,2);for(let ce=0;ce<10;ce++)C.fillStyle="rgba(0,0,0,0.12)",C.fillRect(me*32+3+v()*24,v()*U,1.5,14+v()*30)}M!=="attic"&&(C.fillStyle="rgba(120,20,40,0.55)",C.fillRect(te*.32,0,te*.36,U),C.fillStyle="rgba(255,200,90,0.5)",C.fillRect(te*.32,0,4,U),C.fillRect(te*.68-4,0,4,U))}else if(M==="mirror"||M==="ballroom")for(let me=0;me<8;me++)for(let ce=0;ce<8;ce++)C.fillStyle=(ce+me)%2?J(ge,1.25):J(ge,.45),C.fillRect(ce*32,me*32,32,32);else if(M==="clock"){for(let me=0;me<4;me++)for(let ce=0;ce<4;ce++)C.fillStyle=J(ge,.8+v()*.4),C.fillRect(ce*64+2,me*64+2,60,60);C.strokeStyle="rgba(255,210,120,0.6)",C.lineWidth=3;for(let me of[40,80,118])C.beginPath(),C.arc(te/2,U/2,me,0,nn),C.stroke()}else{for(let me=0;me<6;me++)for(let ce=0;ce<6;ce++)C.fillStyle=J(ge,.7+v()*.45),C.fillRect(ce*43+2+me%2*20,me*43+2,39,39);if(M==="lab"){C.strokeStyle="rgba(140,255,170,0.5)",C.lineWidth=3,C.beginPath(),C.arc(te/2,U/2,70,0,nn),C.stroke();for(let me=0;me<6;me++){let ce=me/6*nn;C.beginPath(),C.moveTo(te/2,U/2),C.lineTo(te/2+Math.cos(ce)*70,U/2+Math.sin(ce)*70),C.stroke()}}if(M==="belfry"||M==="crypt"){C.strokeStyle="rgba(190,150,255,0.55)",C.lineWidth=4,C.beginPath();for(let me=0;me<=5;me++){let ce=me*2/5*nn-Math.PI/2;C.lineTo(te/2+Math.cos(ce)*90,U/2+Math.sin(ce)*90)}C.stroke(),C.beginPath(),C.arc(te/2,U/2,98,0,nn),C.stroke()}}let pe=C.createRadialGradient(te/2,U/2,te*.2,te/2,U/2,te*.7);pe.addColorStop(0,"rgba(0,0,0,0)"),pe.addColorStop(1,"rgba(0,0,0,0.45)"),C.fillStyle=pe,C.fillRect(0,0,te,U)},k),R={box:a(new $i(1,1,1)),cyl:a(new ri(.5,.5,1,10)),cyl6:a(new ri(.5,.5,1,6)),sph:a(new ai(.5,12,8)),plane:a(new Ms(1,1)),cone:a(new Vr(.5,1,6)),torus:a(new Ga(1,.08,6,24)),floor:a(new Ba(os,8).rotateX(-Math.PI/2).rotateY(Math.PI/8)),wall:a(new ri(os,os,It,8,1,!0).rotateY(Math.PI/8).translate(0,It/2,0)),step:a(new $i(1.5,.22,.7)),gear:a(new ri(1,1,.25,12)),ghost:a(new Wr([[0,0],[.44,.02],[.47,.3],[.43,.62],[.35,.86],[.2,1.02],[0,1.08]].map(([M,k])=>new it(M,k)),12)),bell:a(new Wr([[.05,1.6],[.45,1.55],[.6,1.2],[.7,.6],[.95,.15],[1.05,0],[0,0]].map(([M,k])=>new it(M,k)),14))};{let M=R.ghost.attributes.position;for(let k=0;k<M.count;k++){let C=M.getY(k);if(C<.05){let te=Math.atan2(M.getZ(k),M.getX(k));M.setY(k,C-.08-.08*Math.sin(te*6))}}R.ghost.computeVertexNormals()}let V=new Map,Q=new Je,Y=new Je,he=new Sn,ee=new si,re=new B,le=new B,Ge=new Je;function ot(M,k,C){let te=kp(k),U=te.id,ae=[],ge=new rn,J=Te=>{let De=new Zs({gradientMap:p,...Te});return ae.push(De),De},pe=Te=>{let De=new $t(Te);return ae.push(De),De},me=Te=>(ge.add(Te),Te),ce=(Te,De,et)=>me(new Dn(Te,De,et)),Ie=(Te,De,et,Ue,ze,$e,Bt,cn,q=0,G=0,ct=0)=>{he.setFromEuler(ee.set(G,q,ct)),Te.setMatrixAt(De,Q.compose(re.set(et,Ue,ze),he,le.set($e,Bt,cn)))};ge.position.y=M*It,me(new Ye(R.floor,J({map:H(U,ae),side:bn}))),me(new Ye(R.wall,J({map:E,color:te.wall,side:Rn})));let an=ce(R.box,J({color:new Ce(te.wall).multiplyScalar(.7)}),8);for(let Te=0;Te<8;Te++){let De=Te/8*nn;if(Math.sin(De)>.3){Ie(an,Te,0,-50,0,.01,.01,.01,0);continue}Ie(an,Te,Math.cos(De)*(os-.3),It/2,Math.sin(De)*(os-.3),.9,It,.9,-De)}let Tt=me(new Ye(R.torus,J({color:9071162,emissive:2759176})));Tt.rotation.x=Math.PI/2,Tt.scale.set(os-.4,os-.4,2),Tt.position.y=.05;let He=ce(R.step,J({color:6971504}),16);for(let Te=0;Te<16;Te++){let De=(Te+.5)/16,et=Math.PI-De*nn;Ie(He,Te,Nt.x+Math.cos(et)*Nt.r,De*It-.1,Nt.z+Math.sin(et)*Nt.r,1,1,1,-et)}let tt=me(new Ye(R.cyl,J({color:4866128})));tt.position.set(Nt.x,It/2,Nt.z),tt.scale.set(.5,It,.5);let ei=[],Zt=[];for(let Te=0;Te<10;Te++){let De=-Math.PI*.95+Te/9*Math.PI*1.9+Math.PI/2,et=os-1.2,Ue=Math.cos(De)*et,ze=Math.sin(De)*et;Math.hypot(Ue-Nt.x,ze-Nt.z)<2.6||ze>3||Zt.push([Ue,ze,.5+Te%3*.35])}if(m){let Te=[],De=[];Zt.forEach(([et,Ue,ze],$e)=>{$e%3===1?(De.push({x:et,z:Ue,ry:v()*nn,s:1.1}),ei.push([et,.95,Ue])):(Te.push({x:et,z:Ue,ry:v()*nn,s:.9+ze*.4}),ei.push([et,(.9+ze*.4)*1,Ue]))});for(let[et,Ue]of[["candle_lit",Te],["candle_triple",De]]){let ze=m.instanced(et,Ue);ze&&me(ze)}}else{let Te=ce(R.cyl,J({color:15985362,emissive:3811856}),Zt.length),De=ce(R.cyl6,J({color:6965802}),Zt.length);Zt.forEach(([et,Ue,ze],$e)=>{Ie(Te,$e,et,ze/2+.6,Ue,.22,ze,.22),Ie(De,$e,et,.3,Ue,.5,.6,.5),ei.push([et,ze+.75,Ue])})}let on=[],Hn={fi:M,th:k,id:U,grp:ge,list:ae,doors:[],flames:ei,anim:on,nd:C,extra:{}};if(C){let Te=hr(C),De=m?2.8:4,et=2;if(m){let Ue=m.instanced("wall_doorway",Te.map(ze=>({x:ze,y:0,z:St-.1,s:1})));Ue&&me(Ue)}else{let Ue=ce(R.box,J({color:3813440}),C*3);Te.forEach((ze,$e)=>{Ie(Ue,$e*3,ze-1.2,2,St,.45,4.2,.7),Ie(Ue,$e*3+1,ze+1.2,2,St,.45,4.2,.7),Ie(Ue,$e*3+2,ze,4.2,St,2.9,.55,.75)})}Te.forEach((Ue,ze)=>{let $e=me(new Ye(R.plane,pe({color:328200})));$e.position.set(Ue,De/2,St-.12),$e.scale.set(et,De,1);let Bt=me(new Ye(R.plane,pe({color:0,transparent:!0,blending:xi,depthWrite:!1})));Bt.position.set(Ue,De/2,St-.08),Bt.scale.set(et,De,1);let cn=me(new Dt);if(cn.position.set(Ue-.98,0,St+.08),m&&m.has("wall_doorway_door")){let G=new Ye(m.geos.get("wall_doorway_door"),m.matOf("wall_doorway_door"));G.position.set(1,0,-.1),cn.add(G)}else{let G=new Ye(R.box,J({map:x}));G.scale.set(1.95,3.95,.16),G.position.set(.975,1.98,0),cn.add(G)}let q=me(new Ye(R.plane,pe({map:T[ze],transparent:!0})));q.position.set(Ue,De+1.35,St+.42),q.scale.set(1.25,1.25,1),Hn.doors.push({x:Ue,pivot:cn,glow:Bt,plaque:q,open:0,top:De+2.2})})}let Ti=[[-8.2,-1.5,Math.PI/2],[-7.2,3.6,Math.PI/2+.5],[8.4,3.2,-Math.PI/2-.4],[-6.6,-5.6,Math.PI/4]];if(U==="library"||U==="gate"){let Te=ce(R.box,J({map:I}),4);if(Ti.forEach(([De,et,Ue],ze)=>Ie(Te,ze,De,2.2,et,2.6,4.4,.9,Ue)),U==="library"){let De=ce(R.box,J({color:16777215}),10),et=new Ce;for(let Ue=0;Ue<10;Ue++)De.setColorAt(Ue,et.setHSL(v(),.6,.45));on.push(Ue=>{for(let ze=0;ze<10;ze++){let $e=Ue*.3+ze*.63;Ie(De,ze,Math.cos($e)*(3+ze%3),4.6+Math.sin(Ue*1.3+ze)*.5,-1.5+Math.sin($e)*2.5,.5,.12,.38,Ue*.8+ze,Math.sin(Ue+ze)*.4)}De.instanceMatrix.needsUpdate=!0})}else{let De=me(new Ye(R.plane,pe({color:6953546,side:bn})));De.position.set(0,5.6,St+.5),De.scale.set(3,1.6,1)}}else if(U==="crypt"){let Te=ce(R.cyl6,J({color:4864560}),3);[[-7.6,-1,.3],[-6.8,3.2,-.4],[8.1,3.8,.5]].forEach(([Ue,ze,$e],Bt)=>Ie(Te,Bt,Ue,.45,ze,1.3,2.5,.8,$e,Math.PI/2));let De=ce(R.sph,J({color:15524556}),9);for(let Ue=0;Ue<9;Ue++){let ze=v()*nn,$e=7+v()*1.6;Ie(De,Ue,Math.cos(ze)*$e,.25,Math.abs(Math.sin(ze))*$e*.8-2,.5,.45,.5)}let et=ce(R.box,J({color:5921382}),3);[[-5.6,-5.8],[3.2,-5.4],[-8.2,1.6]].forEach(([Ue,ze],$e)=>Ie(et,$e,Ue,.7,ze,1,1.4,.3,v()*.3))}else if(U==="mirror"){let Te=ce(R.box,J({color:13214282,emissive:3811840}),4),De=ce(R.plane,pe({map:F}),4);[[-8.6,-2.5,Math.PI/2],[-8,2.4,Math.PI/2+.3],[8.8,2.6,-Math.PI/2-.3],[-6.4,-6.2,Math.PI/4]].forEach(([et,Ue,ze],$e)=>{Ie(Te,$e,et,2.6,Ue,1.7,4,.2,ze),Ie(De,$e,et+Math.sin(ze)*.13,2.6,Ue+Math.cos(ze)*.13,1.4,3.6,1,ze)}),on.push(et=>{F.offset.y=et*.05%1})}else if(U==="clock"){let Te=me(new Ye(R.plane,pe({map:L,transparent:!0})));Te.position.set(-8.5,4.4,-1.2),Te.rotation.y=Math.PI/2,Te.scale.set(4.2,4.2,1);let De=ce(R.box,J({color:2759178}),2),et=ce(R.gear,J({color:12618298,emissive:2759168}),5),Ue=[[-7.6,1.2,3.6,1.2],[-6.6,6.2,-5.5,1.6],[8.3,5.4,2.4,1.4],[8.6,1.5,4.8,.9],[-8.4,7,2.4,1]];on.push(ze=>{let $e=ze*.08,Bt=ze*1;Ie(De,0,-8.42,4.4+Math.cos($e)*.6,-1.2-Math.sin($e)*.6,.05,1.2,.14,0,$e),Ie(De,1,-8.4,4.4+Math.cos(Bt)*.85,-1.2-Math.sin(Bt)*.85,.05,1.7,.09,0,Bt),De.instanceMatrix.needsUpdate=!0,Ue.forEach(([cn,q,G,ct],jt)=>Ie(et,jt,cn,q,G,ct,1,ct,Math.atan2(-cn,-G),Math.PI/2,(jt%2?-1:1)*ze*.7/ct)),et.instanceMatrix.needsUpdate=!0})}else if(U==="attic"){let Te=ce(R.box,J({color:4861984}),5);for(let $e=0;$e<5;$e++)Ie(Te,$e,0,It-1.2,-6+$e*3,os*2,.5,.5);let De=ce(R.box,J({color:8018480}),6);[[-7.8,.6,-2.6,1.2],[-7.4,.5,2.2,1],[-7.6,1.6,-2.4,.8],[8.2,.6,3.2,1.2],[-5.5,.5,-6,1],[8.4,1.6,3.4,.8]].forEach(([$e,Bt,cn,q],G)=>Ie(De,G,$e,Bt,cn,q,q,q,v()));let et=ce(R.plane,pe({map:D,transparent:!0,depthWrite:!1,side:bn,opacity:.8}),4);Ie(et,0,-6.8,It-2.2,-6.8,4,4,1,Math.PI/4),Ie(et,1,7.2,It-2.2,-6.4,4,4,1,-Math.PI/4,0,Math.PI/2),Ie(et,2,-9.2,3.5,2.5,3,3,1,Math.PI/2),Ie(et,3,4.6,6.4,-7.4,3,3,1,0,0,Math.PI);let Ue=ce(R.sph,J({color:1708056}),3),ze=ce(R.cyl6,pe({color:14540253}),3);on.push($e=>{for(let Bt=0;Bt<3;Bt++){let cn=[-3.5,2.4,5.4][Bt],q=[-3.2,-4.5,.5][Bt],G=5.5+Math.sin($e*.9+Bt*2)*1.2;Ie(Ue,Bt,cn,G,q,.45,.4,.5),Ie(ze,Bt,cn,(G+It)/2,q,.02,It-G,.02)}Ue.instanceMatrix.needsUpdate=!0,ze.instanceMatrix.needsUpdate=!0})}else if(U==="lab"){let Te=ce(R.box,J({color:4863012}),2);Ie(Te,0,-7.6,.9,0,1.6,.25,4.5),Ie(Te,1,7.9,.9,3.6,1.4,.25,3,.3);let De=ce(R.cyl,J({color:16777215,emissive:1118481}),12),et=new Ce;for(let $e=0;$e<12;$e++){let Bt=$e<7;Ie(De,$e,Bt?-7.6+(v()-.5):7.9+(v()-.5)*.8,1.35,Bt?-2+$e*.6:2.6+($e-7)*.55,.3,.5+v()*.5,.3),De.setColorAt($e,et.setHSL([.33,.8,.55,.15][$e%4],.9,.55))}let Ue=me(new Ye(R.sph,J({color:2236968})));Ue.position.set(-4.6,.8,-4.4),Ue.scale.set(2,1.6,2);let ze=me(new Ye(R.floor,pe({color:8257386})));ze.position.set(-4.6,1.45,-4.4),ze.scale.setScalar(.09),Hn.extra.brew=[-4.6,1.6,-4.4]}else if(U==="ballroom"){let Te=ce(R.torus,J({color:14266442,emissive:4861952}),2);Ie(Te,0,-3,It-2,0,1.4,1.4,1.4,0,Math.PI/2),Ie(Te,1,3.5,It-2.4,-2.5,1.1,1.1,1.1,0,Math.PI/2),Hn.extra.chand=[[-3,It-2,0],[3.5,It-2.4,-2.5]];let De=ce(R.ghost,pe({color:13219583,transparent:!0,opacity:.32,depthWrite:!1}),4);on.push(et=>{for(let Ue=0;Ue<4;Ue++){let ze=et*.35+Ue*nn/4;Ie(De,Ue,Math.cos(ze)*6.8,1+Math.sin(et*2+Ue)*.25,Math.sin(ze)*6.8-.5,1.1,1.6,1.1,-ze+Math.sin(et*3+Ue)*.4)}De.instanceMatrix.needsUpdate=!0})}else if(U==="belfry"){let Te=me(new Ye(R.bell,J({color:13210938,emissive:3810304,side:bn})));Te.position.set(0,It-3.6,-4.5),Te.scale.setScalar(1.5),on.push(et=>{Te.rotation.z=Math.sin(et*1.6)*.25});let De=ce(R.plane,pe({color:10466559}),2);Ie(De,0,-9.3,5,-1.5,2,3.2,1,Math.PI/2),Ie(De,1,9.3,5,1.5,2,3.2,1,-Math.PI/2),Hn.extra.win=De}if(U==="attic"||U==="mirror"||U==="crypt"){let Te=ce(R.plane,pe({color:6978228}),1);Ie(Te,0,-9.3,5.2,-3,1.8,2.8,1,Math.PI/2),Hn.extra.win=Te}return m&&qe(U,me,Hn),ge.traverse(Te=>{Te.isInstancedMesh&&(Te.instanceMatrix.needsUpdate=!0,Te.instanceColor&&(Te.instanceColor.needsUpdate=!0),Te.frustumCulled=!1)}),n.add(ge),Hn}let ne=Math.PI/2,Ee={all:[["torch_mounted",-9.55,-3.2,ne,1,3.2],["torch_mounted",-9.55,2.4,ne,1,3.2],["torch_mounted",9.6,1,-ne,1,3.2]],gate:[["banner_patternA_red",-6.7,St+.05,0,1,2.6],["banner_patternA_red",6.7,St+.05,0,1,2.6],["lantern_standing",-7.4,3.8,0,1.3],["barrel_large",-8,-1,.3,.75],["crates_stacked",8.1,4.4,.4,.8],["pumpkin_orange_jackolantern",-6.6,5.6,.6,.9]],library:[["table_medium_decorated_A",-7.2,2.2,.2,.9],["chair",-6.1,3.4,2.4,.9],["lantern_standing",7.9,4.6,0,1.3],["banner_thin_green",-3.4,St+.05,0,1,2.8],["banner_thin_green",3.4,St+.05,0,1,2.8],["shelf_small_candles",-9.4,-.5,ne,1,2.4]],crypt:[["coffin_decorated",-7.6,-.6,ne,.95],["coffin",-7,3.6,ne-.4,.95],["coffin_lid",-7,3.6,ne-.4,.95],["skull_candle",-5.8,-5.7,.4,1],["gravestone",3,-5.8,0,1],["gravestone",-3.1,-6,.15,.9],["ribcage",7.6,5.2,.8,1.2],["bone_A",-3.8,5.6,1.1,1.2],["bone_A",4.6,6,2.2,1.2],["shrine_candles",8.3,3.6,-ne,1]],mirror:[["candle_triple",-7.8,.4,0,1.2],["candle_triple",8.2,4.4,0,1.2],["banner_thin_green",-3.4,St+.05,0,1,2.8],["banner_thin_green",3.4,St+.05,0,1,2.8]],clock:[["crates_stacked",-7.9,3.4,.3,.85],["barrel_small_stack",8.2,4.4,-.6,.85],["keg_decorated",-7.2,-4.6,.8,.8],["sword_shield",9.6,4.2,-ne,1,3]],attic:[["box_stacked",-7.4,-4.4,.4,.75],["barrel_large",8.2,4.6,0,.8],["pumpkin_orange_jackolantern",-6.2,5.4,.6,.9],["pumpkin_yellow_small",-5.4,6,.2,1.2],["crates_stacked",7,-5.8,-.4,.8]],lab:[["keg_decorated",8,4.6,-.5,.8],["bottle_A_green",-7.6,-1.2,0,.9,1],["bottle_B_brown",-7.4,.8,0,.9,1],["shelf_small_candles",9.6,2.6,-ne,1,2.4],["skull",7.2,6,-.8,.8]],ballroom:[["banner_triple_yellow",0,St-.1,0,1,4.4],["bench_decorated",-7.8,1.4,ne,1],["bench_decorated",8.2,4.4,-ne,1],["candle_triple",-7.6,-4.6,0,1.3]],belfry:[["banner_patternB_blue",-6.6,St+.05,0,1,2.6],["banner_patternB_blue",6.6,St+.05,0,1,2.6],["skull_candle",-7.6,2.6,.8,1.1],["lantern_standing",7.8,4.8,0,1.3],["post_skull",-6.6,5.4,.6,1],["post_skull_skull",-6.6,5.4,.6,1]]};function qe(M,k,C){let te={};for(let[U,ae,ge,J,pe=1,me=0]of Ee.all.concat(Ee[M]||[]))(te[U]||(te[U]=[])).push({x:ae,y:me,z:ge,ry:J,s:pe});for(let[U,ae]of Object.entries(te)){let ge=m.instanced(U,ae);if(ge&&(k(ge),U==="torch_mounted"))for(let J of ae)C.flames.push([J.x+Math.sin(J.ry)*.45,J.y+.75,J.z+Math.cos(J.ry)*.45])}}function Ke(M){n.remove(M.grp);for(let k of M.list)k.dispose();M.grp.traverse(k=>{k.isInstancedMesh&&k.dispose()})}function Pe(M,k,C){let te=V.get(M);return te&&(te.th!==k||te.nd!==C)&&(Ke(te),V.delete(M),te=null),te||(te=ot(M,k,C),V.set(M,te)),te}let st=a(new On({transparent:!0,depthWrite:!1,fog:!1,uniforms:{map:{value:null},time:{value:0},talk:{value:0},op:{value:0}},vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vU; uniform sampler2D map; uniform float time; uniform float talk; uniform float op;
      void main(){ vec4 c = texture2D(map, vU); if (c.a < 0.05) discard;
        float scan = 0.94 + 0.06 * sin(vU.y * 140.0 + time * 6.0);
        vec3 col = c.rgb * scan * (1.0 + talk * 0.22) + vec3(0.55,0.3,0.9) * (0.1 + talk * 0.14);
        gl_FragColor = vec4(col, c.a * op * (0.9 + 0.1 * sin(time * 2.0))); }`})),wt=new Ye(R.plane,st);wt.scale.set(2.55,4.08,1),wt.renderOrder=7,wt.visible=!1,n.add(wt),new Qs().load(e.miraUrl||"/assets/mira-tower.png",M=>{M.colorSpace=Ht,a(M),st.uniforms.map.value=M,wt.visible=!0});let Ze=0,At=!1,Et=1,dt=new B(-6.1,1.1,-4.9),Kt=e.maxChars||60,kt=(M,k,C=1)=>{let te=new Dn(M,k,Kt*C);te.frustumCulled=!1,te.count=0;let U=new Ce(1,1,1);for(let ae=0;ae<Kt*C;ae++)te.setColorAt(ae,U);return n.add(te),te},Rt={body:kt(a(new Oa(.27,.24,3,10)),d(16777215)),head:kt(a(new ai(.36,14,10)),d(16777215)),hair:kt(a(new ai(.385,14,8,0,nn,0,Math.PI*.52)),d(16777215)),eyes:kt(a(new ai(.058,8,6)),a(new $t({color:1774640})),2),hands:kt(a(new ai(.13,10,8)),d(16777215),2),feet:kt(a(new ai(.12,8,6)),d(2761272),2),lantern:kt(a(new ri(.11,.13,.26,6)),d(16770976,{emissive:16752672})),shadow:kt(a(new Ms(1,1).rotateX(-Math.PI/2)),a(new $t({map:y,transparent:!0,depthWrite:!1})))};Rt.shadow.renderOrder=2;let Gt=16,vn=new Dn(R.ghost,a(new $t({color:14214399,transparent:!0,opacity:.5,depthWrite:!1})),Gt);vn.frustumCulled=!1,vn.count=0,vn.renderOrder=6,n.add(vn);let Jt=new Dn(a(new ai(.07,6,5)),a(new $t({color:1708080})),Gt*2);Jt.frustumCulled=!1,Jt.count=0,n.add(Jt);let ln=new Ye(a(new ai(1,20,12,0,nn,0,Math.PI/2)),a(new On({transparent:!0,depthWrite:!1,blending:xi,uniforms:{time:{value:0},a:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; varying float vY; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); vY = position.y; gl_Position = projectionMatrix * mv; }",fragmentShader:"varying vec3 vN; varying vec3 vV; varying float vY; uniform float time; uniform float a; void main(){ float f = 1.0 - abs(dot(vN, vV)); float band = 0.5 + 0.5*sin(vY*30.0 - time*3.0); gl_FragColor = vec4(vec3(0.35,0.75,1.0) * (pow(f,2.0)*0.9 + band*0.08) * a, 1.0); }"})));ln.visible=!1,ln.renderOrder=8,n.add(ln);let Ut=new rn;Ut.visible=!1,n.add(Ut);let Tn=a(new Zs({color:15265023,gradientMap:p,emissive:2763360,transparent:!0,opacity:.9})),z=a(new $t({color:1181720})),Nn=a(new $t({color:16726586})),Ot=[],Ct={};{let M=new rn,k=new Ye(R.ghost,Tn);k.scale.set(2.6,2.8,2.6),M.add(k);for(let U of[-1,1]){let ae=new Ye(R.sph,z);ae.position.set(U*.42,2.15,1),ae.scale.set(.42,.62,.3),M.add(ae);let ge=new Ye(R.sph,Nn);ge.position.set(U*.42,2.12,1.15),ge.scale.set(.14,.18,.1),M.add(ge)}let C=new Ye(R.sph,z);C.position.set(0,1.55,1.12),C.scale.set(.5,.42,.2),M.add(C);for(let U of[-1,1]){let ae=new Ye(R.ghost,Tn);ae.scale.set(.5,1.2,.5),ae.position.set(U*1.25,1.1,.3),ae.rotation.z=U*2.2,M.add(ae)}let te=new Ye(a(new ri(.62,.5,.5,6,1,!0)),d(16765773,{emissive:6965760,side:bn}));te.position.set(0,3.15,0),M.add(te),M.userData={mouth:C,crown:te},Ct.ghost=M,Ut.add(M)}let _e=null,Yt=null;function Qe(){let M=Ct.ghost;for(let k of[...M.children])k!==M.userData.crown&&(k.visible=!1);_e=h.actor("Skeleton_Mage","ghost"),_e.obj.scale.setScalar(1.35),M.add(_e.obj),Yt=h.actor("Skeleton_Warrior","ghost-boss"),Yt.obj.scale.setScalar(1.45),M.add(Yt.obj),M.userData.crown.scale.setScalar(.75)}{let M=new rn,k=d(2759210,{emissive:1048584});Ot.push(k);let C=new Ye(R.sph,k);C.scale.set(2.2,1.7,2.6),C.position.set(0,1.5,-.9),M.add(C);let te=new Ye(R.sph,k);te.scale.set(1.2,1,1.1),te.position.set(0,1.3,.8),M.add(te);for(let ge=0;ge<6;ge++){let J=new Ye(R.sph,Nn);J.position.set((ge%3-1)*.28,1.55+Math.floor(ge/3)*.2,1.3),J.scale.setScalar(.14),M.add(J)}let U=new Ye(R.sph,d(16726586,{emissive:6946816}));U.scale.set(.6,.6,.2),U.position.set(0,2.25,-1.4),U.rotation.x=-.9,M.add(U);let ae=[];for(let ge=0;ge<8;ge++){let J=ge<4?-1:1,pe=ge%4,me=new rn;me.position.set(J*.6,1.4,.6-pe*.5);let ce=new Ye(R.cyl6,k);ce.scale.set(.16,1.6,.16),ce.position.set(J*.6,.45,0),ce.rotation.z=-J*1,me.add(ce);let Ie=new Ye(R.cyl6,k);Ie.scale.set(.12,1.8,.12),Ie.position.set(J*1.55,-.35,0),Ie.rotation.z=J*.5,me.add(Ie),me.rotation.y=J*(pe-1.5)*.35,M.add(me),ae.push(me)}M.userData={legs:ae},Ct.spider=M,Ut.add(M)}{let M=new rn,k=d(8011292),C=d(14725184,{emissive:3810304});Ot.push(k);let te=new Ye(R.box,k);te.scale.set(2.6,1.3,1.7),te.position.y=.65,M.add(te);let U=new Ye(R.box,C);U.scale.set(2.7,.2,1.8),U.position.y=1.2,M.add(U);let ae=new Dt;ae.position.set(0,1.3,-.85),M.add(ae);let ge=new Ye(R.box,k);ge.scale.set(2.6,.6,1.7),ge.position.set(0,.3,.85),ae.add(ge);let J=new Dn(R.cone,d(16774880),12);J.frustumCulled=!1;for(let ce=0;ce<12;ce++){let Ie=ce>=6;he.setFromEuler(ee.set(Ie?Math.PI:0,0,0)),J.setMatrixAt(ce,Q.compose(re.set(-1.05+ce%6*.42,Ie?1.15:1.45,.75),he,le.set(.22,.4,.22)))}M.add(J);let pe=new Ye(R.sph,d(16730746));pe.scale.set(.7,.25,1.4),pe.position.set(0,1.35,.6),M.add(pe);let me=a(new $t({color:16769354}));for(let ce of[-1,1]){let Ie=new Ye(R.sph,me);Ie.position.set(ce*.6,.65,.75),Ie.scale.setScalar(.3),ae.add(Ie)}M.userData={lidP:ae},Ct.mimic=M,Ut.add(M)}let Ve=new rn;Ve.visible=!1,n.add(Ve);{let M=d(9062944),k=d(16761402,{emissive:6963200}),C=new Ye(R.box,M);C.scale.set(1.6,.9,1),C.position.y=.45,Ve.add(C);let te=new Ye(R.box,k);te.scale.set(1.68,.16,1.08),te.position.y=.8,Ve.add(te);let U=new Dt;U.position.set(0,.9,-.5),Ve.add(U);let ae=new Ye(R.box,M);ae.scale.set(1.6,.36,1),ae.position.set(0,.18,.5),U.add(ae);let ge=new Ye(R.box,k);ge.scale.set(.3,.4,1.06),ge.position.set(0,.18,.5),U.add(ge);let J=new Ye(R.box,a(new $t({color:16771488})));J.scale.set(1.4,.1,.8),J.position.y=.86,Ve.add(J),Ve.userData={lp:U}}let P=24,S=new Dn(R.box,d(16777215),P);S.frustumCulled=!1,S.count=0;{let M=new Ce(1,1,1);for(let k=0;k<P;k++)S.setColorAt(k,M)}n.add(S);let X=[],de=new rn;de.visible=!1,n.add(de);{let M=new Ye(R.cyl6,d(9075306));M.scale.set(.12,7,.12),M.position.y=-3.5,de.add(M);let k=new Ye(a(new ri(1.6,1.6,.12,16,1,!1,0,Math.PI)),d(14212584,{emissive:2236979}));k.rotation.set(0,Math.PI/2,Math.PI/2),k.position.y=-7,de.add(k)}let oe=12,xe=new Dn(a(new Vr(.22,1.3,5)),d(14217424,{emissive:2113568}),oe);xe.frustumCulled=!1,xe.count=0,n.add(xe);let ye=[],se=40,ie=new Dn(a(new za(.86,1,36).rotateX(-Math.PI/2)),a(new $t({color:16777215,transparent:!0,depthWrite:!1,blending:xi,side:bn})),se);ie.frustumCulled=!1,ie.renderOrder=4;{let M=new Ce(0,0,0);for(let k=0;k<se;k++)ie.setColorAt(k,M)}n.add(ie);let ve=[];function N(M,k){let C=a(new Vt),te=new Float32Array(M*3),U=new Float32Array(M*4),ae=new Float32Array(M);C.setAttribute("position",new ft(te,3)),C.setAttribute("col",new ft(U,4)),C.setAttribute("size",new ft(ae,1));let ge=a(new On({transparent:!0,depthWrite:!1,blending:k?xi:As,uniforms:{px:{value:400}},vertexShader:"attribute vec4 col; attribute float size; uniform float px; varying vec4 vC; void main(){ vC = col; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = min(size * px / max(0.5, -mv.z), 180.0); gl_Position = projectionMatrix * mv; }",fragmentShader:k?"varying vec4 vC; void main(){ float d = length(gl_PointCoord-0.5)*2.0; float a = pow(max(0.0, 1.0 - d), 2.0); gl_FragColor = vec4(vC.rgb * a * vC.a, 1.0); }":"varying vec4 vC; void main(){ vec2 p = gl_PointCoord-0.5; if (vC.a < 0.0) { if (abs(p.x) > 0.5 || abs(p.y) > 0.28) discard; gl_FragColor = vec4(vC.rgb, 1.0); } else { float d = length(p)*2.0; if (d > 1.0) discard; gl_FragColor = vec4(vC.rgb, vC.a * (1.0 - d*d)); } }"})),J=new ys(C,ge);return J.frustumCulled=!1,n.add(J),{geo:C,pos:te,col:U,size:ae,mat:ge,pts:J,list:[],cap:M}}let $=N(e.particles||900,!0),Z=N(Math.round((e.particles||900)*.45),!1);$.pts.renderOrder=9,Z.pts.renderOrder=5;let Me=1,be=new Ce;function ue(M,k,C,te,U,ae){k=Math.max(1,Math.round(k*Me));for(let ge=0;ge<k&&M.list.length<M.cap-80;ge++){let J=Math.random()*nn,pe=(ae.up??.5)+Math.random()*(ae.spreadUp??.5),me=(ae.speed||4)*(.4+Math.random()*.8);be.set(ae.colors?ae.colors[Math.random()*ae.colors.length|0]:ae.color),M.list.push({x:C+(Math.random()-.5)*(ae.jitter||0),y:te+(Math.random()-.5)*(ae.jy||0),z:U+(Math.random()-.5)*(ae.jitter||0),vx:Math.cos(J)*me*(1-pe*.6),vy:me*pe*(ae.vyMul??1),vz:Math.sin(J)*me*(1-pe*.6),g:ae.g??9,drag:ae.drag??1.5,life:(ae.life||.6)*(.7+Math.random()*.6),t:0,s0:ae.size||.3,s1:ae.size1??(ae.size||.3)*.3,r:be.r,gg:be.g,b:be.b,a:ae.alpha??1,conf:!!ae.confetti,spin:Math.random()*nn,floor:ae.floorY??-1e9})}}function Xe(M,k,C){let te=M.list,U=0;for(let J=0;J<te.length;J++){let pe=te[J];if(pe.t+=k,pe.t>=pe.life)continue;pe.vy-=pe.g*k;let me=Math.exp(-pe.drag*k);pe.vx*=me,pe.vy*=me,pe.vz*=me,pe.conf&&(pe.spin+=k*6,pe.vx+=Math.sin(pe.spin)*k*2),pe.x+=pe.vx*k,pe.y+=pe.vy*k,pe.z+=pe.vz*k,pe.y<pe.floor+.05&&pe.g>0&&(pe.y=pe.floor+.05,pe.vy*=-.3,pe.vx*=.7,pe.vz*=.7),te[U++]=pe}te.length=U;let ae=0,ge=(J,pe,me,ce,Ie,an,Tt,He)=>{M.pos[ae*3]=J,M.pos[ae*3+1]=pe,M.pos[ae*3+2]=me,M.col[ae*4]=ce,M.col[ae*4+1]=Ie,M.col[ae*4+2]=an,M.col[ae*4+3]=Tt,M.size[ae]=He,ae++};if(C)for(let J of C)ae<M.cap-1&&ge(J[0],J[1],J[2],J[3],J[4],J[5],J[6],J[7]);for(let J of te){if(ae>=M.cap)break;let pe=J.t/J.life,me=J.conf?1:1-pe*pe;ge(J.x,J.y,J.z,J.r,J.gg,J.b,J.conf?-1:J.a*me,J.s0+(J.s1-J.s0)*pe)}M.geo.setDrawRange(0,ae);for(let J of["position","col","size"]){let pe=M.geo.attributes[J];pe.needsUpdate=!0,pe.clearUpdateRanges?.(),pe.addUpdateRange?.(0,ae*pe.itemSize)}}let ht=a(new Vt);{let k=new Float32Array(450);for(let C=0;C<150;C++)k.set([Math.random(),Math.random(),Math.random()],C*3);ht.setAttribute("position",new ft(k,3))}let fe=new ys(ht,a(new On({transparent:!0,depthWrite:!1,blending:xi,uniforms:{time:{value:0},base:{value:0},px:{value:300},tint:{value:new Ce(16767136)}},vertexShader:`uniform float time; uniform float base; uniform float px; varying float vA;
      void main(){ vec3 s = position; float t = time * (0.02 + s.x * 0.03); float fy = fract(s.y + t * 0.4);
        vec3 p = vec3((fract(s.x + sin(t + s.z * 6.0) * 0.05) - 0.5) * 18.0, base + fy * 8.5, (fract(s.z + cos(t * 0.7 + s.x * 5.0) * 0.05) - 0.5) * 16.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vA = (0.4 + 0.6 * (0.5 + 0.5 * sin(time * 1.5 + s.x * 40.0))) * smoothstep(0.0, 0.15, fy) * smoothstep(1.0, 0.8, fy);
        vA *= smoothstep(2.5, 7.0, -mv.z); gl_PointSize = min((0.07 + s.z * 0.1) * px / max(1.0, -mv.z), 14.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 tint; varying float vA; void main(){ float d = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(tint * vA * max(0.0, 1.0-d) * 0.55, 1.0); }"})));fe.frustumCulled=!1,fe.renderOrder=3,n.add(fe);let Oe=new Map,nt=new Map,Re=new Ce(1,1,1),yt=new Ce,qt=new Ce,An={particles:1,halos:!0,maxChars:Kt},hs=0,En=0,Oi=-9,Ds=-9,Fs=0,Cn=0,Ne=0,wi=null,Bi=new B(0,10,20),$n=new B(0,2.6,-2.4),qn=new B,Qn=new B,zi=new Ce(1708080),So=new Ce,ca=new Ce(16757611),ha=new Ce,mt={kind:"",t0:0,hitT:-9,atkT:-9,dieT:-9,x:0,z:-4},pr=-9,wo=0,mr=-9,A=[],O=M=>(M=M^61^M>>>16,M=M+(M<<3)|0,M^=M>>>4,M=Math.imul(M,668265261),(M^M>>>15)>>>0),K=0,W=new B;function j(M,k,C,te,U,ae){let ge=0,J=0,pe=0,me=0,ce=An.animLod||1,Ie=M.length>24,an=ae.phase==="monster"||ae.phase==="boss",Tt=ae.phase==="treasure"||ae.phase==="victory";for(let He of M){let tt=Se(He,k);tt.seen=k,tt.frame=K;let ei=Math.hypot(He.x-tt.x,He.z-tt.z)/Math.max(C,.001);tt.speed=(tt.speed||0)+(Math.min(ei,10)-(tt.speed||0))*Math.min(1,C*8),tt.x=He.x,tt.y=He.y,tt.z=He.z;let Zt=He.info||{};tt.a||(tt.model=tt.model||po[O(He.id)%po.length],tt.a=h.actor(tt.model,He.flags&Wt.bot?null:Zt.color??null),n.add(tt.a.obj),tt.acc=0);let on=tt.a,Hn=Math.min(1,(k-tt.spawn)/.35),Ti=He.flags&2048;on.obj.position.set(He.x,Ne+He.y,He.z),on.obj.rotation.set(0,He.face,0),on.obj.scale.setScalar(Xu*(.4+.6*Hn));let Te=Ti||tt.speed>2.4?"run":tt.speed>.4?"walk":He.flags&Wt.cmd||Tt?"cheer":an?"combat":"idle";on.play(Te,k),k-tt.hit<.05&&k>=on.until&&on.play(tt.model==="Mage"?"cast":tt.model.startsWith("Rogue")?"shoot":"slash",k,{speed:1.4}),tt.acc+=C;let De=(Ie||Math.hypot(He.x,He.z-2)>7?2:1)*ce;(K+He.id)%De===0&&(Rc(h,on,tt.acc,k),tt.acc=0),on.hand?on.hand.getWorldPosition(W):W.set(He.x+.3,Ne+He.y+.5,He.z+.3),Y.compose(re.set(W.x,W.y-.28,W.z),he.setFromEuler(ee.set(Math.sin(k*2+He.id)*.15,He.face,0)),le.set(.75,.75,.75)),Rt.lantern.setMatrixAt(ge,Y),Y.compose(re.set(He.x,Ne+He.y+.02,He.z),he.identity(),le.set(1.1,1,1.1)),Rt.shadow.setMatrixAt(ge,Y),(An.halos||ge<16)&&te.push([W.x,W.y-.3,W.z,1,.7,.3,(.35+.65*U)*(He.flags&Wt.gift?1.7:1),1.5+1.5*U]),A.push({id:He.id,x:He.x,y:Ne+He.y+1.75*Xu*Hn+.2,z:He.z,info:Zt,flags:He.flags}),He.y<.5&&(J+=He.x,pe+=He.z,me++),ge++}for(let He of Oe.values())He.a&&He.frame!==K&&(h.release(He.a),He.a=null);return{n:ge,cx:J,cz:pe,cn:me}}function Se(M,k){let C=Oe.get(M.id);return C||(C={walk:Math.random()*10,hit:-9,spawn:k,skin:Fp[M.id%Fp.length],x:M.x,y:M.y,z:M.z,seen:k},Oe.set(M.id,C)),C}let ke=(M,k)=>M&&M.doors[k]?M.doors[k].x:0;function we(M,k,C){wi=M,hs=C,K++;let te=kp(M.th);Cn=M.floor,Ne=Cn*It;let U=Pe(Cn,M.th,M.nd||0);U.born||(U.born=C);let ae=null;M.phase==="climb"&&M.nth>-9&&(ae=Pe(Cn+(M.lift?2:1),M.nth,0));for(let[q,G]of V)G!==U&&G!==ae&&!(q<Cn&&q>=Cn-2&&C-U.born<2.5)&&(Ke(G),V.delete(q));let ge=M.phase==="vote"||M.phase==="enter";for(let q=0;q<U.doors.length;q++){let G=U.doors[q];G.open+=((!ge&&M.ch===q?1.75:0)-G.open)*Math.min(1,k*5),G.pivot.rotation.y=-G.open;let ct=M.kinds?M.kinds[q]:"",jt=0,yn=0;if(ct&&!ge&&(M.ch===q||M.phase!=="reveal"))jt=Np[ct],yn=M.ch===q?.95:.3;else if(M.pr===q&&M.phase==="vote")jt=11566335,yn=.6+.35*Math.sin(C*6);else if(M.phase==="vote"&&M.vc){let Qt=M.vc.reduce((Gi,sn)=>Gi+sn,0)||1;jt=16757611,yn=.1+.5*(M.vc[q]||0)/Qt}G.glow.material.color.setHex(jt).multiplyScalar(yn);let Xn=M.phase==="vote"?1+.07*Math.sin(C*5+q*2):1;G.plaque.scale.set(1.25*Xn,1.25*Xn,1)}for(let q of V.values())for(let G of q.anim)G(C);let J=Math.max(0,Math.min(100,M.fuel??100))/100;So.setHex(te.fog).multiplyScalar(.55+.45*J),zi.lerp(So,Math.min(1,k*1.5)),n.fog.color.copy(zi),n.background.copy(zi).multiplyScalar(.6),n.fog.far=26+20*J,n.fog.near=7+7*J,ha.setHex(te.light),ca.lerp(ha,Math.min(1,k*2));let pe=.82+.1*Math.sin(C*13.1)+.06*Math.sin(C*7.3+1.7)+.05*Math.sin(C*23.7);c.color.copy(ca),c.intensity=(18+26*J)*pe*(C-Oi<.15?2.5:1),c.position.set(0,Ne+4.2,1.5),u.position.set(3,Ne+12,14),u.target.position.set(0,Ne,0),u.intensity=.55+.6*J;let me=C-Ds<.12||C-Ds>.22&&C-Ds<.3;o.intensity=.6+.7*J+(me?2.2:0),U.extra.win&&Math.random()<k/9&&(Ds=C,Fs=C+.45);for(let q of V.values())q.extra.win&&q.extra.win.material.color.setHex(me?16777215:5925540);let ce=M.pd>0?1-Math.max(0,Math.min(1,M.tl/M.pd)):1;if(M.phase==="climb"){let q=M.lift?2:1,G=Math.max(0,Math.min(1,(ce-.15)/.8)),ct=G*G*(3-2*G)*It*q;qn.set(Nt.x-9+Math.sin(G*Math.PI)*2.6,Ne+6.2+ct,12.5-Math.sin(G*Math.PI)*3),Qn.set(Nt.x-1.2,Ne+2.6+ct,Nt.z)}else if(M.phase==="reveal"&&M.ch>=0){let q=ke(U,M.ch),G=ce*ce*(3-2*ce);qn.set(q*.5,Ne+5.6,12.5-G*3.2),Qn.set(q*.85,Ne+1.8,St)}else if((M.phase==="treasure"||M.phase==="trap")&&M.ch>=0){let q=ke(U,M.ch);qn.set(q*.35,Ne+6.4,13.8),Qn.set(q*.6,Ne+1.8,-4.2)}else if(M.phase==="monster"||M.phase==="boss"){let q=M.phase==="boss";qn.set(Math.sin(C*.25)*1.8,Ne+(q?8.6:7),q?17.5:15.2),Qn.set(0,Ne+(q?3.9:2.7),-3)}else if(M.phase==="end"){let q=C*.18;qn.set(Math.sin(q)*7,Ne+4.4,3+Math.cos(q)*7),Qn.set(0,Ne+1.5,2.4)}else if(M.phase==="vote"){let q=0,G=0;(M.vc||[]).forEach((jt,yn)=>{jt>G&&(G=jt,q=yn)});let ct=G?ke(U,q)*.25:0;qn.set(ct*.6,Ne+7.2,15.8),Qn.set(ct,Ne+2.4,-3.4)}else{let q=C*.12;qn.set(Math.sin(q)*2.2,Ne+6.6+Math.sin(q*.7)*.6,15.2),Qn.set(0,Ne+1.9,-2.2)}let Ie=Math.min(1,k*(M.phase==="climb"?3.2:2.2));Bi.distanceTo(qn)>30&&(Bi.copy(qn),$n.copy(Qn)),Bi.lerp(qn,Ie),$n.lerp(Qn,Ie),En=Math.max(0,En-k*2.2);let an=(Math.random()-.5)*En*.5,Tt=(Math.random()-.5)*En*.5;i.position.set(Bi.x+an+Math.sin(C*.4)*.15,Bi.y+Tt+Math.sin(C*.55)*.08,Bi.z),i.lookAt($n.x+an,$n.y+Tt,$n.z);let He=Ne+1+Math.sin(C*1.3)*.18;M.phase==="climb"?dt.set(-4.6,$n.y-1.6,-3.6):M.phase==="monster"||M.phase==="boss"?dt.set(-5,He+1.2,.2):["reveal","treasure","trap"].includes(M.phase)?dt.set(-6.4,He+2.4,-5.2):dt.set(-4.7,He+.9,-1.4),wt.position.lerp(dt,Math.min(1,k*3)),wt.quaternion.copy(i.quaternion),Ze+=((At?1:0)-Ze)*Math.min(1,k*6),Et=Math.min(1,Et+k*1.5),st.uniforms.time.value=C,st.uniforms.talk.value=Ze,st.uniforms.op.value=Et;let tt=[];for(let q of[U,ae])if(q)for(let G of q.flames){let ct=.7+.3*Math.sin(C*(9+G[0])+G[2]);tt.push([G[0],q.fi*It+G[1],G[2],1,.62*ct,.25*ct,(.5+.5*J)*ct,1.5]),tt.push([G[0],q.fi*It+G[1]-.05,G[2],1,.9,.6,1,.35])}if(U.extra.brew){let q=U.extra.brew;tt.push([q[0],Ne+q[1],q[2],.3,1,.35,.7+.2*Math.sin(C*4),5]),Math.random()<k*6&&ue($,1,q[0]+(Math.random()-.5),Ne+1.5,q[2]+(Math.random()-.5),{color:8257386,up:1,speed:1.2,g:-1,life:1.2,size:.4})}if(U.extra.chand)for(let q of U.extra.chand)tt.push([q[0],Ne+q[1]-.2,q[2],1,.8,.45,.8,4]);tt.push([wt.position.x,wt.position.y+.2,wt.position.z-.3,.6,.35,1,.4+Ze*.45,7]),A.length=0;let ei=M.members.length>Math.min(Kt,An.maxChars||Kt)?M.members.slice(0,Math.min(Kt,An.maxChars||Kt)):M.members,Zt=0,on=0,Hn=0,Ti=0,Te=(q,G,ct,jt,yn,Xn,Qt,Gi,sn=0,ua=0,Ns=null)=>{Y.compose(re.set(ct,jt,yn),he.setFromEuler(ee.set(sn,0,ua)),le.set(Xn,Qt,Gi)),Q.multiplyMatrices(Ge,Y),q.setMatrixAt(G,Q),Ns&&q.setColorAt(G,Ns)};if(h){let q=j(ei,C,k,tt,J,M);Zt=q.n,on=q.cx,Hn=q.cz,Ti=q.cn}else for(let q of ei){let G=Se(q,C);G.seen=C;let ct=Math.hypot(q.x-G.x,q.z-G.z)/Math.max(k,.001);G.x=q.x,G.y=q.y,G.z=q.z;let jt=ct>.4||q.flags&2048;G.walk+=k*(jt?11:0);let yn=Math.max(0,1-(C-G.hit)/.35),Xn=Math.min(1,(C-G.spawn)/.35),Qt=(.3+.7*Xn)*(1+.15*Math.sin(Xn*Math.PI)),Gi=Ne+q.y+(jt?Math.abs(Math.sin(G.walk))*.12:0)+(q.flags&Wt.cmd?Math.abs(Math.sin(C*12))*.18:0);Ge.compose(re.set(q.x,Gi,q.z),he.setFromEuler(ee.set(0,q.face,0)),le.set(Qt,Qt,Qt));let sn=q.info||{};yt.setHex(sn.color??16777215);let ua=yn>0?qt.copy(yt).lerp(Re,yn):yt,Ns=jt?Math.sin(G.walk):0;Te(Rt.body,Zt,0,.52,0,1,1,1,0,0,ua),qt.setHex(G.skin),Te(Rt.head,Zt,0,1.06,0,1,1,1,0,0,qt),qt.copy(yt).multiplyScalar(.55),Te(Rt.hair,Zt,0,1.1,-.02,1,1,1,-.15,0,qt);let od=(C+q.id*.37)%4.2<.12?.15:1;Te(Rt.eyes,Zt*2,-.13,1.08,.31,1,od,1),Te(Rt.eyes,Zt*2+1,.13,1.08,.31,1,od,1),Te(Rt.hands,Zt*2,-.36,.5+Ns*.05,Ns*.12,1,1,1,0,0,yt),Te(Rt.hands,Zt*2+1,.34,.66,.26,1,1,1,0,0,yt),Te(Rt.lantern,Zt,.36,.42+Math.sin(C*3+q.id)*.02,.32,1,1,1,Math.sin(C*2+q.id)*.15,0),Te(Rt.feet,Zt*2,-.13,.08,Ns*.18,1,1,1),Te(Rt.feet,Zt*2+1,.13,.08,-Ns*.18,1,1,1),Y.compose(re.set(q.x,Ne+q.y+.02,q.z),he.identity(),le.set(1.1,1,1.1)),Rt.shadow.setMatrixAt(Zt,Y),re.set(.36,.45,.32).applyMatrix4(Ge),(An.halos||Zt<16)&&tt.push([re.x,re.y,re.z,1,.7,.3,(.35+.65*J)*(q.flags&Wt.gift?1.7:1),1.5+1.5*J]),A.push({id:q.id,x:q.x,y:Gi+1.55*Qt,z:q.z,info:sn,flags:q.flags}),q.y<.5&&(on+=q.x,Hn+=q.z,Ti++),Zt++}for(let q of Object.keys(Rt)){let G=Rt[q];if(h&&q!=="lantern"&&q!=="shadow"){G.count=0;continue}G.count=q==="eyes"||q==="hands"||q==="feet"?Zt*2:Zt,G.instanceMatrix.needsUpdate=!0,G.instanceColor&&(G.instanceColor.needsUpdate=!0)}let De=0;for(let q of M.ghosts||[]){if(De>=Gt)break;let G=nt.get(q.id);if(!G){let Qt=Oe.get(q.id);G={x:Qt?Qt.x:(Math.random()-.5)*6,z:Qt?Qt.z:5,born:C-2,ph:Math.random()*nn},nt.set(q.id,G)}G.seen=C;let ct=-6+De%8*1.7,jt=6.6+Math.floor(De/8)*1.3;G.x+=(ct-G.x)*Math.min(1,k*.8),G.z+=(jt-G.z)*Math.min(1,k*.8);let yn=Math.min(1,(C-G.born)/1.5),Xn=Ne+.6+yn*1.6+Math.sin(C*1.7+G.ph)*.25;if(h){if(!G.a){let Qt=Oe.get(q.id);G.a=h.actor(Qt?.model||po[O(q.id)%po.length],"ghost"),G.a.play("idle",C),n.add(G.a.obj)}G.a.obj.position.set(G.x,Xn-.8,G.z),G.a.obj.rotation.set(0,Math.sin(C+G.ph)*.4,Math.sin(C*1.3+G.ph)*.1),G.a.obj.scale.setScalar(Xu*.9*(.4+.6*yn)),G.acc=(G.acc||0)+k,(K+q.id)%3===0&&(Rc(h,G.a,G.acc,C),G.acc=0),G.drawnAt=K}else{Ge.compose(re.set(G.x,Xn,G.z),he.setFromEuler(ee.set(0,Math.sin(C+G.ph)*.4,Math.sin(C*1.3+G.ph)*.12)),le.set(.7,.7,.7)),vn.setMatrixAt(De,Ge);for(let Qt of[0,1])Y.compose(re.set(Qt?.13:-.13,.72,.4),he.identity(),le.set(1,1.3,1)),Q.multiplyMatrices(Ge,Y),Jt.setMatrixAt(De*2+Qt,Q)}A.push({id:q.id,x:G.x,y:Xn+.9,z:G.z,info:q.info||{},flags:q.flags,ghost:!0}),De++}if(h){De=0;for(let[q,G]of nt)G.a&&G.drawnAt!==K&&(h.release(G.a),G.a=null)}if(vn.count=De,Jt.count=De*2,vn.instanceMatrix.needsUpdate=!0,Jt.instanceMatrix.needsUpdate=!0,Math.random()<.02){for(let[q,G]of nt)C-G.seen>3&&(G.a&&h.release(G.a),nt.delete(q));for(let[q,G]of Oe)C-G.seen>5&&(G.a&&h.release(G.a),Oe.delete(q))}let et=(M.sh||0)>0,Ue=ln.material.uniforms;if(Ue.a.value+=((et?["trap","monster","boss"].includes(M.phase)?.75:.4:0)-Ue.a.value)*Math.min(1,k*3),Ue.time.value=C,ln.visible=Ue.a.value>.02,Ti){ln.position.set(on/Ti,Ne,Hn/Ti);let q=1.7+Math.sqrt(Ti)*.62;ln.scale.set(q,q*.62,q*.75)}let ze=M.mo;if(ze&&(M.phase==="monster"||M.phase==="boss")){(mt.kind!==ze.k||!Ut.visible||mt.dieT>0)&&(mt={kind:ze.k,t0:C,hitT:-9,atkT:-9,dieT:-9,x:M.ch>=0?ke(U,M.ch):0,z:St+.5});let q=ze.k==="boss"?"ghost":ze.k,G=ze.k==="boss";for(let sn of Object.keys(Ct))Ct[sn].visible=sn===q;Ut.visible=!0;let ct=Ct[q],jt=Math.min(1,(C-mt.t0)/1.2);mt.x+=(0-mt.x)*Math.min(1,k*2),mt.z+=((G?-3.8:-3.4)-mt.z)*Math.min(1,k*2);let yn=Math.max(0,1-(C-mt.atkT)/.6),Xn=Math.sin(Math.min(1,(C-mt.atkT)/.6)*Math.PI)*1.6,Qt=Math.max(0,1-(C-mt.hitT)/.18),Gi=(G?1.7:1.05)*(.2+.8*jt)*(1+Qt*.06);if(Ut.position.set(mt.x+(Qt>0?(Math.random()-.5)*.15:0),Ne+(q==="ghost"?(_e?.25:.4)+Math.sin(C*1.8)*(_e?.15:.3):0),mt.z+Xn*(_e&&q==="ghost"?.4:1)),Ut.scale.setScalar(Gi),Ut.rotation.set(0,Math.sin(C*.8)*.15,q==="ghost"?Math.sin(C*1.3)*.06:0),q==="ghost"&&_e){let sn=G?Yt:_e;_e.obj.visible=!G,Yt.obj.visible=G,ct.userData.crown.position.set(0,2.95*1.45*.98,0),ct.userData.crown.visible=G,sn.play(jt<1?"spawn":"combat",C),C-mt.atkT<.05&&sn.play(G?ze.slam?"spin":"slash":"cast",C),C-mt.hitT<.03&&C>=sn.until&&sn.play("hit",C,{speed:1.6}),Rc(h,sn,k,C)}else if(q==="ghost"){let sn=ct.userData;sn.crown.visible=G,Tn.color.setHex(G?13285631:15265023),Tn.emissive.setHex(Qt>0?16777215:G?3807850:2763360),sn.mouth.scale.set(.5,.42+yn*.5+Math.sin(C*5)*.06,.2)}q==="spider"&&ct.userData.legs.forEach((sn,ua)=>{sn.rotation.x=Math.sin(C*10+ua*1.3)*.25*(1+yn)}),q==="mimic"&&(ct.userData.lidP.rotation.x=-.35-Math.abs(Math.sin(C*4))*.5-yn*.6);for(let sn of Ot)sn.emissive.setHex(Qt>0?8947848:1048584);tt.push([mt.x,Ne+2.2*Gi,mt.z+.5,G?.6:.3,G?.3:1,G?1:.4,.35,G?14:8])}else Ut.visible&&(mt.dieT<0&&(mt.dieT=C),Ut.scale.multiplyScalar(Math.max(.01,1-k*4)),Ut.rotation.y+=k*8,C-mt.dieT>.5&&(Ut.visible=!1));if(M.phase==="treasure"||M.phase==="climb"&&C-pr<3){Ve.visible||(Ve.visible=!0,pr=C,wo=ke(U,M.ch));let q=C-pr,G=Math.min(1,q/1);Ve.position.set(wo*(1-G),Ne+Math.sin(G*Math.PI)*1.2,St+2.4+G*3.2),Ve.scale.setScalar(1.3),Ve.userData.lp.rotation.x=q>1.1?-Math.min(1.9,(q-1.1)*5):0,q>1.1&&q<3.4&&Math.random()<.7&&ue($,2,Ve.position.x,Ve.position.y+1.2,Ve.position.z,{colors:[16765773,16773792,16752672],up:1.2,speed:6,g:9,life:1.1,size:.35,floorY:Ne}),tt.push([Ve.position.x,Ve.position.y+1.3,Ve.position.z,1,.8,.3,q>1.1?.9:.2,7])}else Ve.visible=!1;if(C-mr<2.2){de.visible=!0;let q=(C-mr)/2.2;de.position.set(0,Ne+It-.5,2.6),de.rotation.z=Math.cos(q*Math.PI*2.5)*1.15*(1-q*.3)}else de.visible=!1;let $e=0;for(let q=X.length-1;q>=0;q--){let G=X[q],ct=C-G.t0;if(ct>G.life){X.splice(q,1);continue}ct<0||(G.vy-=22*k,G.y+=G.vy*k,G.rx+=k*G.spin,G.y<Ne+G.s*.18&&(G.landed||(G.landed=!0,ue(Z,4,G.x,Ne+.3,G.z,{color:9075306,up:.4,speed:3,life:.6,size:.4,alpha:.8,floorY:Ne})),G.y=Ne+G.s*.18,G.vy=0,G.spin=0),$e<P&&(he.setFromEuler(ee.set(G.rx,G.ry,0)),S.setMatrixAt($e,Q.compose(re.set(G.x,G.y,G.z),he,le.set(G.s*G.sx,G.s*.35,G.s))),S.setColorAt($e,qt.setHex(G.col)),$e++))}S.count=$e,S.instanceMatrix.needsUpdate=!0,S.instanceColor&&(S.instanceColor.needsUpdate=!0);let Bt=0;for(let q=ye.length-1;q>=0;q--){let G=ye[q],ct=C-G.t0;if(ct>1.6){ye.splice(q,1);continue}let jt=Math.sin(Math.max(0,Math.min(1,ct/1.6))*Math.PI);Bt<oe&&(he.setFromEuler(ee.set(Math.sin(ct*8+q)*.2,0,Math.sin(ct*6+q)*.25)),xe.setMatrixAt(Bt++,Q.compose(re.set(G.x,Ne-.6+jt*1.2,G.z),he,le.set(1,1,1))))}xe.count=Bt,xe.instanceMatrix.needsUpdate=!0;let cn=0;for(let q=ve.length-1;q>=0;q--){let G=ve[q],ct=(C-G.t0)/G.dur;if(ct>=1){ve.splice(q,1);continue}if(ct<0)continue;let jt=G.r0+(G.r1-G.r0)*(1-(1-ct)*(1-ct));cn<se&&(ie.setMatrixAt(cn,Q.compose(re.set(G.x,G.y,G.z),he.identity(),le.set(jt,1,jt))),ie.setColorAt(cn,qt.copy(G.col).multiplyScalar(1-ct)),cn++)}ie.count=cn,ie.instanceMatrix.needsUpdate=!0,ie.instanceColor&&(ie.instanceColor.needsUpdate=!0),fe.material.uniforms.time.value=C,fe.material.uniforms.base.value=$n.y-2.5,fe.material.uniforms.tint.value.setHex(te.light),fe.visible=An.particles>.4,Xe($,k,An.halos?tt:tt.slice(0,24)),Xe(Z,k,null),t.render(n,i)}let Ae=M=>{let k=Oe.get(M);return k?{x:k.x,y:Ne+k.y,z:k.z}:null},Be=(M,k,C,te,U,ae,ge=.1)=>ve.push({x:M,y:Ne+ge,z:k,t0:hs,dur:C,r0:te,r1:U,col:new Ce(ae)}),rt=[16739029,16769354,6222079,10182117,8257402];function _t(M,k){let C=hs,te=V.get(Cn);switch(M.k){case"hit":{mt.hitT=C;let U=Oe.get(M.id);U&&(U.hit=C);let ae=wi&&wi.mo&&wi.mo.b;ue($,M.c?10:4,mt.x+(Math.random()-.5)*1.5,Ne+(ae?3.4:2)+(Math.random()-.5),mt.z+1,{colors:M.c?[16769354,16777215]:[16757611,16777215,16739029],up:.6,speed:M.c?7:4,life:.4,size:M.c?.5:.35}),M.c&&(En=Math.max(En,.4));break}case"matk":mt.atkT=C,En=Math.max(En,M.boss?1:.6),Be(mt.x,mt.z+2,.7,1,M.boss?9:6,M.boss?11566335:6160250),M.slam&&(Oi=C,ue(Z,20,mt.x,Ne+.3,mt.z+2,{color:6969978,up:.4,speed:7,life:.8,size:.5,alpha:.7,floorY:Ne}));break;case"fall":{let U=Ae(M.id);if(!U)break;ue(Z,14,U.x,U.y+.6,U.z,{colors:[5913210,3811930,9071272],up:.6,speed:3,g:-1,life:1.1,size:.7,alpha:.85}),ue($,10,U.x,U.y+.8,U.z,{colors:[11566335,16777215],up:1,speed:3,g:-2,life:.9,size:.35}),nt.set(M.id,{x:U.x,z:U.z,born:C,ph:Math.random()*nn});break}case"rise":{let U=nt.get(M.id),ae=U?U.x:0,ge=U?U.z:4;nt.delete(M.id),ue($,18,ae,Ne+1,ge,{colors:[16771488,16777215,10477823],up:1.2,speed:4,g:1,life:1,size:.4}),Be(ae,ge,.8,.3,2.6,16771488);let J=Oe.get(M.id);J&&(J.spawn=C);break}case"join":{let U=Oe.get(M.id);U&&(U.spawn=C);break}case"reveal":te&&te.doors[M.door]&&ue($,26,te.doors[M.door].x,Ne+2,St+.6,{color:Np[M.kinds[M.door]]||16777215,up:.3,speed:6,g:0,drag:2.5,life:.9,size:.6,jy:3});break;case"prophecy":case"gift":{let U=M.id?Ae(M.id):null;U&&ue($,M.tier==="boss"||M.tier==="skip"?40:16,U.x,U.y+1,U.z,{colors:[16769354,16739029,10477823,16777215],up:1.2,speed:5,g:2,life:1.1,size:.4});let ae=M.door??-1;ae>=0&&te&&te.doors[ae]&&ue($,30,te.doors[ae].x,Ne+2.4,St+.8,{colors:[11566335,16771488],up:.2,speed:3,g:-.5,life:1.4,size:.5,jy:3,jitter:1.6}),M.tier==="shield"&&Be(0,2.5,.9,1,8,5949695,.15),(M.tier==="boss"||M.tier==="rescue")&&(Oi=C);break}case"treasure":pr=C,Ve.visible=!1;break;case"trap":case"mlose":{let U=M.k==="mlose"?"hands":M.trap;En=Math.max(En,.8),Oi=C;let ae=(M.fell||[]).concat(M.saved||[]).map(Ae).filter(Boolean);if(M.blocked){Be(0,2.6,.9,2,9,5949695,.2),ue($,40,0,Ne+3,2.6,{colors:[5949695,16777215],up:.6,speed:7,g:1,life:.8,size:.4});break}let ge=ae.length?ae:[{x:0,z:2.5}];if(U==="books"||U==="chandelier"||U==="web"){let J=U==="books"?[9054778,2775690,3832378,9071146,6961802]:U==="web"?[15658734]:[14266442];for(let pe of ge)for(let me=0;me<(U==="books"?3:1);me++)X.push({x:pe.x+(Math.random()-.5)*.6,z:pe.z+(Math.random()-.5)*.6,y:Ne+It-1,vy:0,t0:C+me*.12+Math.random()*.2,life:2.6,s:U==="books"?.7:U==="web"?1.6:1.4,sx:U==="web"?1:1.4,rx:0,ry:Math.random()*nn,spin:6,col:J[Math.random()*J.length|0]});if(U==="chandelier")for(let pe of ge)ue($,16,pe.x,Ne+.5,pe.z,{colors:[16765773,16777215],up:.6,speed:6,life:.6,size:.3,floorY:Ne})}else if(U==="hands")for(let J of ge){for(let pe=0;pe<3;pe++)ye.push({x:J.x+Math.cos(pe*2.1)*.45,z:J.z+Math.sin(pe*2.1)*.45,t0:C+pe*.05});Be(J.x,J.z,1.2,.4,1.4,6160250,.08)}else if(U==="shards"){for(let J of ge)ue($,18,J.x,Ne+2,J.z,{colors:[14213375,10477823,16777215],up:.2,speed:8,g:12,life:.9,size:.3,floorY:Ne});ue($,30,0,Ne+3,St+1,{colors:[14213375,16777215],up:.3,speed:10,g:10,life:.9,size:.35,floorY:Ne})}else if(U==="pendulum")mr=C;else if(U==="gas")for(let J=0;J<6;J++)ue(Z,6,(Math.random()-.5)*8,Ne+.5,2+(Math.random()-.5)*5,{colors:[5963642,2793546,9109402],up:.5,speed:1.6,g:-.6,life:2.2,size:2.2,alpha:.45});break}case"monster":mt.t0=C,mt.dieT=-9,M.boss&&(Oi=C,En=1.2),te&&k&&k.ch>=0&&te.doors[k.ch]&&ue(Z,20,te.doors[k.ch].x,Ne+1,St+1,{colors:[2759226,4864602],up:.5,speed:4,life:1,size:1,alpha:.8});break;case"mwin":if(Oi=C,En=Math.max(En,M.boss?1.4:.8),ue($,M.boss?90:50,mt.x,Ne+2,mt.z+.5,{colors:[16777215,11566335,16769354,6160250],up:.8,speed:M.boss?11:8,g:3,life:1.3,size:.5}),Be(mt.x,mt.z,1,1,12,16771488,.2),M.boss)for(let U=0;U<5;U++)ue(Z,26,(Math.random()-.5)*6,Ne+5,1+Math.random()*3,{colors:rt,up:.6,speed:5,g:4,drag:1.2,life:3,size:.3,confetti:!0,floorY:Ne});break;case"rwin":{let U=Ae(M.id);U&&(ue($,30,U.x,U.y+1.2,U.z,{colors:[16769354,16777215,11566335],up:1,speed:6,g:3,life:1.2,size:.45}),Be(U.x,U.z,.8,.3,3.5,16769354));break}case"blaze":Oi=C;for(let U of Oe.values())hs-U.seen<1&&ue($,2,U.x,Ne+U.y+.6,U.z,{colors:[16757611,16771488],up:1.4,speed:3,g:-1,life:.9,size:.5});break;case"climb":if(M.lift)for(let U=0;U<4;U++)ue($,20,Nt.x,Ne+.5+U,Nt.z,{colors:[11566335,16771488,6222079],up:1,speed:3,g:-3,life:2,size:.45,jitter:3});break;case"floor":Et=0,ue($,30,-6.1,M.n*It+2,-4.9,{colors:[11566335,16777215],up:.4,speed:4,g:0,drag:2,life:1.1,size:.5,jy:3});break;case"end":if(M.reason==="top")for(let U=0;U<6;U++)ue(Z,30,(Math.random()-.5)*8,Ne+6,2+Math.random()*3,{colors:rt,up:.5,speed:5,g:4,drag:1.2,life:3.5,size:.3,confetti:!0,floorY:Ne});break}}let We=390,gt=844,Xt=new B,Pt=(M,k,C)=>(Xt.set(M,k,C).project(i),{x:(Xt.x*.5+.5)*We,y:(-Xt.y*.5+.5)*gt,vis:Xt.z<1&&Xt.z>-1});return{kind:"webgl",renderer:t,ready:f,scene:n,get loaded(){return!!h},get error(){return g},resize(M,k,C){We=M,gt=k,t.setPixelRatio(C),t.setSize(M,k,!1),i.aspect=M/k,i.fov=M/k<.7?50:42,i.updateProjectionMatrix(),$.mat.uniforms.px.value=Z.mat.uniforms.px.value=k*C*.9,fe.material.uniforms.px.value=k*C*.5},setQuality(M){An=M,Me=M.particles},frame:we,fx:_t,project:Pt,speaking(M){At=M},doorTop(M){let k=V.get(Cn);return!k||!k.doors[M]?null:Pt(k.doors[M].x,Ne+(k.doors[M].top||5.95),St+.4)},monsterTop(){return!Ut.visible||mt.dieT>0?null:Pt(mt.x,Ne+(wi&&wi.mo&&wi.mo.b?6.6:3.9),mt.z)},miraTop(){return Pt(wt.position.x,wt.position.y+2.2,wt.position.z)},drawn:()=>A,thunder(){return Fs&&hs>=Fs?(Fs=0,!0):!1},stats(){let M=t.info;return{calls:M.render.calls,tris:M.render.triangles,tex:M.memory.textures,geo:M.memory.geometries,chars:h?[...Oe.values()].filter(k=>k.a).length:Rt.body.count,ghosts:[...nt.values()].filter(k=>k.a).length,loaded:!!h,parts:$.list.length+Z.list.length,rooms:V.size}},dispose(){b=!0;for(let M of V.values())Ke(M);V.clear(),n.traverse(M=>{M.isInstancedMesh&&M.dispose()});for(let M of r)M.dispose?.();m&&m.dispose(),h&&h.dispose(),t.dispose()},loseContext(){try{t.forceContextLoss()}catch{}}}}var Cc=s=>"#"+(s>>>0).toString(16).padStart(6,"0");function Op(s,e={}){let t=s.getContext("2d"),n=390,i=844,r=1,a=0,o=0,l=null,c=-9,u=[],p=f=>n/2+f*n/17,d=(f,_)=>i*.5+(_-1)*i*.022-f*i*.03,h=(f,_,w)=>({x:p(f),y:d(_-(l?l.floor*It:0),w),vis:!0}),m=new Image;m.src=e.miraUrl||"/assets/mira-tower.png";let b=f=>f.th===-2?as:f.th===-1?Rs:yi[f.th]||Rs;function g(f,_,w){l=f,a=w,u.length=0;let v=b(f),E=Math.max(.15,(f.fuel??100)/100);t.setTransform(r,0,0,r,0,0);let y=o>0?(o-=_,(Math.random()-.5)*8*o):0;t.translate(y,0),t.fillStyle=Cc(v.fog),t.fillRect(-10,0,n+20,i),t.fillStyle=Cc(v.wall),t.fillRect(-10,i*.14,n+20,d(0,St)-i*.14);let x=t.createLinearGradient(0,d(0,St),0,i*.8);x.addColorStop(0,Cc(v.floor)),x.addColorStop(1,"#0a0612"),t.fillStyle=x,t.fillRect(-10,d(0,St),n+20,i),(f.nd?hr(f.nd):[]).forEach((L,F)=>{let H=p(L),R=n*.17,V=d(5.6,St),Q=d(0,St),Y=f.ch===F&&!["vote","enter","gather"].includes(f.phase);t.fillStyle=Y?"#ffe9a0":"#3a2416",t.beginPath(),t.moveTo(H-R/2,Q),t.lineTo(H-R/2,V+R/2),t.arc(H,V+R/2,R/2,Math.PI,0),t.lineTo(H+R/2,Q),t.fill(),t.strokeStyle=f.pr===F?"#c07cff":"#8a6a40",t.lineWidth=4,t.stroke(),t.fillStyle="#ffd36a",t.font=`900 ${n*.07}px sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(f.kinds&&f.kinds[F]?Mc[f.kinds[F]]||"":String(F+1),H,(V+Q)/2)});let D=t.createRadialGradient(n/2,i*.55,10,n/2,i*.55,n*.8*E);if(D.addColorStop(0,"rgba(255,180,100,0.25)"),D.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=D,t.fillRect(0,0,n,i),m.complete&&m.naturalWidth){let L=i*.2,F=L*m.naturalWidth/m.naturalHeight;t.globalAlpha=.9,t.drawImage(m,n*.02,i*.3+Math.sin(w*1.6)*4,F,L),t.globalAlpha=1}if(f.mo){let L=f.mo.b?1.6:1,F=p(0),H=d(1.8,-3.5);t.fillStyle=f.mo.k==="spider"?"#2a1a2a":f.mo.k==="mimic"?"#7a4a20":"rgba(220,210,255,0.85)",t.beginPath(),t.ellipse(F,H,n*.12*L,i*.07*L,0,0,Math.PI*2),t.fill(),t.fillStyle="#ff3050",t.fillRect(F-14*L,H-8,8,8),t.fillRect(F+6*L,H-8,8,8)}let I=f.floor*It;for(let L of f.members){let F=p(L.x),H=d(L.y,L.z),R=n*.022;t.fillStyle=Cc(L.info?.color??16777215),t.beginPath(),t.arc(F,H-R,R,0,Math.PI*2),t.fill(),t.fillStyle="#ffd36a",t.beginPath(),t.arc(F+R,H-R*.4,R*.4,0,Math.PI*2),t.fill(),L.flags&Wt.shield&&(t.strokeStyle="#5ef0ff",t.lineWidth=2,t.beginPath(),t.arc(F,H-R,R*1.6,0,Math.PI*2),t.stroke()),u.push({id:L.id,x:L.x,y:I+L.y+1.6,z:L.z,info:L.info,flags:L.flags})}f.ghosts.forEach((L,F)=>{let H=p(-5+F%8*1.4),R=d(3+Math.sin(w*2+F)*.3+Math.floor(F/8),-5);t.fillStyle="rgba(200,220,255,0.45)",t.beginPath(),t.arc(H,R,n*.02,0,Math.PI*2),t.fill()}),t.fillStyle=`rgba(0,0,0,${(1-E)*.55})`,t.fillRect(0,0,n,i),w-c<.4&&(t.fillStyle=`rgba(255,255,255,${.6*(1-(w-c)/.4)})`,t.fillRect(0,0,n,i)),t.setTransform(1,0,0,1,0,0)}return{kind:"2d",resize(f,_,w){n=f,i=_,r=w,s.width=Math.round(f*w),s.height=Math.round(_*w)},setQuality(){},frame:g,project:h,fx(f){(f.k==="trap"||f.k==="matk"||f.k==="mlose")&&(o=.5),(f.k==="reveal"||f.k==="floor")&&(c=a)},speaking(){},doorTop(f){if(!l)return null;let _=l.nd?hr(l.nd):[];return _[f]===void 0?null:{x:p(_[f]),y:d(5.9,St),vis:!0}},monsterTop(){return l&&l.mo?{x:p(0),y:d(l.mo.b?4.5:3.4,-3.5),vis:!0}:null},miraTop(){return{x:n*.12,y:i*.3,vis:!0}},drawn:()=>u,thunder:()=>!1,stats:()=>({kind:"2d"}),dispose(){},loseContext(){}}}function Bp({silenceUrl:s="/assets/silence.mp3",record:e=!1}={}){let t={ctx:null,master:null,sfxGain:null,voiceGain:null,unlocked:!1,played:0,fails:0,cues:[],record:e,last:{},speakingUntil:0,muted:!1};try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}let n=new Audio;n.setAttribute("playsinline",""),n.preload="auto";function i(){if(t.ctx||e)return t.ctx;let h=window.AudioContext||window.webkitAudioContext;if(!h)return null;try{t.ctx=new h}catch{return null}return r(t.ctx,t.ctx.destination,t),t.ctx}function r(h,m,b){let g=h.createDynamicsCompressor();g.threshold.value=-14,g.ratio.value=6,g.attack.value=.003,g.release.value=.2,b.master=h.createGain(),b.master.gain.value=.9,b.sfxGain=h.createGain(),b.sfxGain.gain.value=.55,b.voiceGain=h.createGain(),b.voiceGain.gain.value=1,b.sfxGain.connect(b.master),b.voiceGain.connect(b.master),b.master.connect(g),g.connect(m)}t.unlock=()=>{let h=i();if(h){try{h.resume();let m=h.createBuffer(1,1,22050),b=h.createBufferSource();b.buffer=m,b.connect(h.destination),b.start(0)}catch{}t.elUnlocked||(n.src=s,n.play().then(()=>{n.pause(),t.elUnlocked=!0}).catch(()=>{})),t.unlocked=h.state==="running",setTimeout(()=>{t.unlocked=h.state==="running",t.onstate&&t.onstate(t.unlocked)},120)}},t.resume=()=>{t.ctx&&t.ctx.state!=="running"&&t.ctx.resume().catch(()=>{})},t.state=()=>e?"record":t.ctx?t.ctx.state:"none";let a=h=>{if(h.__noise)return h.__noise;let m=h.sampleRate,b=h.createBuffer(1,m,m),g=b.getChannelData(0),f=1;for(let _=0;_<m;_++)f=f*16807%2147483647,g[_]=f/10737418235e-1-1;return h.__noise=b,b};function o(h,m,b,g,f,_){m.gain.setValueAtTime(1e-4,b),m.gain.exponentialRampToValueAtTime(f,b+g),m.gain.exponentialRampToValueAtTime(1e-4,b+g+_)}function l(h,m,b,{type:g="sine",f0:f=440,f1:_=f,a:w=.005,d:v=.2,peak:E=.3,det:y=0}){let x=h.createOscillator(),T=h.createGain();x.type=g,x.frequency.setValueAtTime(f,b),_!==f&&x.frequency.exponentialRampToValueAtTime(Math.max(20,_),b+w+v),x.detune.value=y,o(h,T,b,w,E,v),x.connect(T).connect(m),x.start(b),x.stop(b+w+v+.05)}function c(h,m,b,{type:g="lowpass",f0:f=1e3,f1:_=f,q:w=.7,a:v=.003,d:E=.15,peak:y=.4}){let x=h.createBufferSource(),T=h.createBiquadFilter(),D=h.createGain();x.buffer=a(h),T.type=g,T.Q.value=w,T.frequency.setValueAtTime(f,b),_!==f&&T.frequency.exponentialRampToValueAtTime(Math.max(30,_),b+v+E),o(h,D,b,v,y,E),x.connect(T).connect(D).connect(m),x.start(b,Math.random()*.5),x.stop(b+v+E+.05)}let u={punch:(h,m,b,g=1)=>{c(h,m,b,{f0:1400,f1:300,d:.08,peak:.5*g}),l(h,m,b,{f0:150,f1:55,d:.1,peak:.55*g})},crit:(h,m,b)=>{u.punch(h,m,b,1.2),l(h,m,b,{type:"square",f0:1800,f1:900,d:.06,peak:.12}),c(h,m,b+.01,{type:"highpass",f0:3e3,d:.12,peak:.25})},block:(h,m,b)=>{l(h,m,b,{type:"triangle",f0:1200,f1:1100,d:.18,peak:.18}),l(h,m,b,{type:"triangle",f0:1810,d:.14,peak:.1})},ko:(h,m,b)=>{l(h,m,b,{type:"sine",f0:260,f1:980,a:.005,d:.16,peak:.35}),c(h,m,b,{type:"bandpass",f0:2500,f1:600,q:1.2,d:.25,peak:.35}),l(h,m,b+.09,{type:"triangle",f0:1320,d:.2,peak:.12})},dash:(h,m,b)=>{c(h,m,b,{type:"bandpass",f0:500,f1:3500,q:2,a:.04,d:.22,peak:.45})},shield:(h,m,b)=>{[880,1320,1760].forEach((g,f)=>l(h,m,b+f*.03,{type:"sine",f0:g,d:.45,peak:.09}))},boom:(h,m,b,g=1)=>{c(h,m,b,{f0:900,f1:80,a:.004,d:.9,peak:.8*g}),l(h,m,b,{f0:90,f1:28,d:.8,peak:.8*g})},whistle:(h,m,b)=>{l(h,m,b,{type:"sine",f0:1900,f1:500,a:.05,d:.95,peak:.07})},coin:(h,m,b)=>{l(h,m,b,{type:"square",f0:988,d:.07,peak:.1}),l(h,m,b+.07,{type:"square",f0:1319,d:.28,peak:.1})},power:(h,m,b)=>{[523,659,784,1047].forEach((g,f)=>l(h,m,b+f*.05,{type:"triangle",f0:g,d:.3,peak:.14})),c(h,m,b,{type:"highpass",f0:2e3,f1:6e3,a:.1,d:.4,peak:.12})},heal:(h,m,b)=>{[660,880,1100].forEach((g,f)=>l(h,m,b+f*.06,{f0:g,d:.25,peak:.08}))},beep:(h,m,b)=>{l(h,m,b,{f0:880,d:.12,peak:.22})},go:(h,m,b)=>{l(h,m,b,{type:"sawtooth",f0:660,d:.5,peak:.12}),l(h,m,b,{type:"square",f0:1320,d:.5,peak:.08}),c(h,m,b,{f0:4e3,f1:500,d:.4,peak:.25})},land:(h,m,b)=>{l(h,m,b,{f0:120,f1:50,d:.12,peak:.3}),c(h,m,b,{f0:600,d:.1,peak:.15})},spin:(h,m,b)=>{c(h,m,b,{type:"bandpass",f0:300,f1:2400,q:3,a:.08,d:.35,peak:.5}),u.punch(h,m,b+.25,1.1)},cheer:(h,m,b)=>{c(h,m,b,{type:"bandpass",f0:1200,f1:1500,q:.6,a:.25,d:2.2,peak:.35}),c(h,m,b+.1,{type:"bandpass",f0:2600,f1:2200,q:.8,a:.3,d:2,peak:.18})},fanfare:(h,m,b)=>{[[523,0],[659,.12],[784,.24],[1047,.38],[784,.6],[1047,.72]].forEach(([g,f],_)=>{l(h,m,b+f,{type:"sawtooth",f0:g,d:_===5?.9:.16,peak:.07}),l(h,m,b+f,{type:"triangle",f0:g*2,d:_===5?.9:.16,peak:.05})}),u.cheer(h,m,b+.2)},nuke:(h,m,b)=>{u.boom(h,m,b,1.3),u.boom(h,m,b+.25,1),l(h,m,b,{type:"sawtooth",f0:220,f1:40,d:1.6,peak:.25})},pop:(h,m,b)=>{l(h,m,b,{f0:500,f1:1400,d:.07,peak:.15})},creak:(h,m,b)=>{l(h,m,b,{type:"sawtooth",f0:95,f1:140,a:.08,d:.7,peak:.07,det:8}),l(h,m,b+.05,{type:"square",f0:190,f1:120,a:.1,d:.6,peak:.03}),c(h,m,b,{type:"bandpass",f0:900,f1:500,q:6,a:.1,d:.6,peak:.12})},ghost:(h,m,b)=>{l(h,m,b,{type:"sine",f0:520,f1:760,a:.25,d:.9,peak:.08,det:15}),l(h,m,b+.1,{type:"sine",f0:780,f1:500,a:.3,d:.9,peak:.05})},thunder:(h,m,b)=>{c(h,m,b,{f0:500,f1:60,a:.02,d:1.8,peak:.6}),c(h,m,b+.15,{f0:250,f1:50,a:.1,d:1.6,peak:.45})},bell:(h,m,b)=>{[[110,.25],[220,.12],[277,.07],[330,.06],[440,.04]].forEach(([g,f])=>l(h,m,b,{type:"sine",f0:g,a:.004,d:2.6,peak:f}))},organ:(h,m,b)=>{[[147,0],[175,0],[220,0],[294,.02],[131,.6],[165,.6],[196,.6],[262,.62]].forEach(([g,f])=>{l(h,m,b+f,{type:"sawtooth",f0:g,a:.04,d:f?.9:.55,peak:.035}),l(h,m,b+f,{type:"triangle",f0:g*2,a:.04,d:f?.9:.55,peak:.03})})},heart:(h,m,b)=>{l(h,m,b,{f0:70,f1:45,d:.12,peak:.45}),l(h,m,b+.17,{f0:62,f1:40,d:.14,peak:.35})},chime:(h,m,b)=>{[1319,1568,1976,2637].forEach((g,f)=>l(h,m,b+f*.07,{type:"sine",f0:g,d:.6,peak:.07}))},trap:(h,m,b)=>{c(h,m,b,{type:"bandpass",f0:3e3,f1:300,q:1.5,a:.01,d:.35,peak:.4}),u.boom(h,m,b+.22,.7)},shatter:(h,m,b)=>{for(let g=0;g<6;g++)l(h,m,b+g*.035,{type:"triangle",f0:2200+g*430,f1:1800,d:.12,peak:.06});c(h,m,b,{type:"highpass",f0:4e3,d:.4,peak:.3})},wind:(h,m,b)=>{c(h,m,b,{type:"bandpass",f0:380,f1:700,q:4,a:.9,d:2.2,peak:.12})},squeak:(h,m,b)=>{l(h,m,b,{type:"triangle",f0:900,f1:1300,d:.08,peak:.07})},roar:(h,m,b)=>{l(h,m,b,{type:"sawtooth",f0:120,f1:60,a:.05,d:.9,peak:.16,det:20}),c(h,m,b,{type:"lowpass",f0:1200,f1:300,a:.05,d:.9,peak:.35})}},p={squeak:.06,ghost:.25,heart:.3,punch:.045,crit:.06,block:.08,ko:.08,heal:.15,land:.06,pop:.05,coin:.05,boom:.06};t.sfx=(h,m=t.now(),b=1)=>{if(t.muted||!u[h])return;let g=p[h]||.03;if(t.last[h]&&m-t.last[h]<g)return;if(t.last[h]=m,e){t.cues.push({k:"sfx",kind:h,t:m,v:b});return}let f=t.ctx;if(!(!f||f.state!=="running"))try{u[h](f,t.sfxGain,f.currentTime+.01,b)}catch{}},t.now=()=>e?t.clock():t.ctx?t.ctx.currentTime:0,t.clock=()=>0;let d=null;return t.voice=async(h,m)=>{if(t.muted||!h)return!1;if(t.speakingUntil=t.now()+(m||2),e)return t.cues.push({k:"voice",url:h,t:t.now(),dur:m}),!0;let b=t.ctx;if(b&&b.state!=="running"&&t.resume(),b&&b.state==="running")try{let g=await fetch(h).then(v=>{if(!v.ok)throw new Error("HTTP "+v.status);return v.arrayBuffer()}),f=await new Promise((v,E)=>{let y=b.decodeAudioData(g,v,E);y&&y.catch&&y.catch(E)});if(d)try{d.stop()}catch{}let _=b.createBufferSource();_.buffer=f,_.connect(t.voiceGain);let w=b.currentTime+.02;return t.sfxGain.gain.setTargetAtTime(.28,w,.05),t.sfxGain.gain.setTargetAtTime(.55,w+f.duration,.2),_.start(w),d=_,t.played++,_.onended=()=>{d===_&&(d=null)},!0}catch{t.fails++}try{return n.src=h,await n.play(),t.played++,!0}catch{return t.fails++,!1}},t.mix=async(h,m=44100)=>{let b=window.OfflineAudioContext||window.webkitOfflineAudioContext,g=new b(2,Math.ceil(h*m),m),f={};r(g,g.destination,f);let _=t.cues.filter(F=>F.k==="voice"),w=await Promise.all(_.map(F=>fetch(F.url).then(H=>H.arrayBuffer()).then(H=>g.decodeAudioData(H)).catch(()=>null)));for(let F of t.cues)if(F.k==="sfx"&&F.t<h)try{u[F.kind](g,f.sfxGain,F.t+.01,F.v)}catch{}_.forEach((F,H)=>{let R=w[H];if(!R||F.t>=h)return;let V=g.createBufferSource();V.buffer=R,V.connect(f.voiceGain),V.start(F.t+.02),f.sfxGain.gain.setTargetAtTime(.28,F.t,.05),f.sfxGain.gain.setTargetAtTime(.55,F.t+R.duration,.2)});let v=await g.startRendering(),E=v.length,y=[v.getChannelData(0),v.getChannelData(1)],x=new DataView(new ArrayBuffer(44+E*4)),T=(F,H)=>{for(let R=0;R<H.length;R++)x.setUint8(F+R,H.charCodeAt(R))};T(0,"RIFF"),x.setUint32(4,36+E*4,!0),T(8,"WAVEfmt "),x.setUint32(16,16,!0),x.setUint16(20,1,!0),x.setUint16(22,2,!0),x.setUint32(24,m,!0),x.setUint32(28,m*4,!0),x.setUint16(32,4,!0),x.setUint16(34,16,!0),T(36,"data"),x.setUint32(40,E*4,!0);let D=44;for(let F=0;F<E;F++)for(let H=0;H<2;H++){let R=Math.max(-1,Math.min(1,y[H][F]));x.setInt16(D,R*32767,!0),D+=2}let I=new Uint8Array(x.buffer),L="";for(let F=0;F<I.length;F+=32768)L+=String.fromCharCode.apply(null,I.subarray(F,F+32768));return btoa(L)},t}function zp(s,{off:e=!1}={}){let t=Math.random().toString(36).slice(2,8),n=performance.now(),i=[];addEventListener("error",o=>{i.push(String(o.message||"error").slice(0,110)),i.length>3&&i.shift()}),addEventListener("unhandledrejection",o=>{i.push(("rej "+(o.reason&&o.reason.message||o.reason)).slice(0,110)),i.length>3&&i.shift()});let r=o=>{let l=s();return{id:t,reason:o,up:(performance.now()-n)/1e3,ua:navigator.userAgent.slice(0,160),scr:{w:screen.width,h:screen.height,dpr:devicePixelRatio},vis:document.visibilityState,errs:i.slice(),...l,mem:{...l.mem||{},heap:performance.memory?performance.memory.usedJSHeapSize/1048576:void 0}}},a=o=>{if(e)return;let l=r(o),c=JSON.stringify(l);if(o==="start")try{let u=JSON.parse(localStorage.getItem("lg_diagLast")||"null");u&&u.reason!=="pagehide"&&(c=JSON.stringify({...l,prev:u}))}catch{}try{localStorage.setItem("lg_diagLast",JSON.stringify(l))}catch{}try{navigator.sendBeacon&&navigator.sendBeacon("/diag",new Blob([c],{type:"text/plain"}))||fetch("/diag",{method:"POST",body:c,keepalive:!0}).catch(()=>{})}catch{}};return setTimeout(()=>a("start"),4e3),setInterval(()=>a("tick"),3e4),document.addEventListener("visibilitychange",()=>{document.hidden&&a("hidden")}),addEventListener("pagehide",()=>a("pagehide")),{send:a,errs:i}}var dr=(s,e)=>s[Math.floor(e()*s.length)%s.length],Dv=["one","two","three"],Fv={library:["The books are whispering your names...","Shh. The books are listening."],crypt:["Mind the bones, darlings. Some of them still move.","Cold, is it not? The dead like it that way."],mirror:["Do not trust your reflection in here.","So many of you... and so many mirrors."],clock:["Tick, tock. Time is not on your side.","Every gear in here wants a finger."],attic:["Something with too many legs lives up here.","Watch the webs, little lanterns."],lab:["Do not drink anything green.","Bubbling potions, and bubbling trouble."],ballroom:["The ghosts are still dancing. Do not cut in.","One last waltz for the dead."]};function Gp({nameOf:s,rng:e=Math.random}){let t=[],n=0,i=(d,h,m,b={})=>({text:d,pri:h,banner:m||null,...b}),r={gather:["To play, just comment anything. You get a lantern and climb with the party.","On every floor, comment a door number to vote. One, two or three. Choose wisely!","Gifts are magic! Any small gift, like a rose, shows the safe door. Five coins casts a shield.","Thirty coins rescues the fallen. One hundred coins calls my lift. Five hundred coins summons a ghost boss!","Tap the screen! Likes are lantern oil. If the oil runs out, the climb is over.","Follow for a spare life. Share the live for a spare life and more oil."],vote:["Comment the number of a door to vote!","Send any gift and I will show you the safe door.","Shields block traps. Five coins!"],fight:["Every comment is a hit! Spam the chat!","Likes hurt it too! Tap, tap, tap!","Gifts hit hardest of all!"]},a="gather",o=-99,l=0,c={gather:0,vote:0,fight:0},u={gather:[5,7],vote:[3.5,7],fight:[5,9]},p=d=>{let h=d.map(s).filter(Boolean);if(!h.length)return"";let m=h.slice(0,3),b=h.length-m.length;return(m.length===1?m[0]:m.slice(0,-1).join(", ")+" and "+m[m.length-1])+(b>0?` and ${b} more`:"")};return{lines(d,h){let m=[];for(let f of d){let _=f.id?s(f.id):null,w={gather:"gather",end:"gather",vote:f.start?"vote":null,reveal:"other",monster:"fight",mwin:"other",mlose:"other",riddle:"other",climb:"other"}[f.k];switch(w&&(a=w),f.k){case"gather":m.push(i(dr(["Gather, climbers! Comment anything to take a lantern. The tower is waiting.","A new climb begins. Comment to join the party, my darlings."],e),6,"NEW CLIMB"));break;case"floor":{let v=f.boss?as:yi[f.th];if(f.boss){m.push(i(`Floor ${f.n}. The bell tower. Can you hear it? Something is coming.`,8,`FLOOR ${f.n} \xB7 BOSS`));break}let E=`Floor ${f.n}. ${v.name}. ${dr(Fv[v.id]||[""],e)}`,y=f.predict?s(f.predict.id):null;y&&(E+=f.predict.kind==="fall"?` I foresee... ${y} will fall.`:` I foresee gold in ${y}'s future.`),m.push(i(E,7,`FLOOR ${f.n}`));break}case"vote":f.start&&m.push(i(f.doors===2?"Left or right? Comment one or two!":"Choose a door. Comment one, two, or three!",6,"VOTE!"));break;case"prophecy":m.push(i(`The cards have spoken. Door ${Dv[f.door]} is safe.`,8));break;case"reveal":{let v=f.kinds[f.door],E=f.none?"Nobody chose? Then I choose for you. ":"";m.push(i(E+{treasure:dr(["Treasure! The spirits smile on you.","Gold! Lovely, lovely gold."],e),trap:dr(["A trap! Run, little lanterns!","Oh dear. A trap."],e),monster:dr(["Something hungry wakes up...","A monster! Fight it! Spam the chat!"],e),riddle:"A riddle blocks the way."}[v],7,{treasure:"TREASURE!",trap:"TRAP!",monster:"MONSTER!",riddle:"RIDDLE!"}[v]));break}case"treasure":f.lucky&&m.push(i(`Just as I foresaw. ${s(f.lucky)} grabs the biggest jewel.`,6));break;case"trap":case"mlose":{if(f.k==="mlose"&&m.push(i(f.boss?`${f.name} wins this time... the lanterns flicker.`:"The beast was too strong.",7)),f.blocked){m.push(i("The shield holds! Nobody falls.",7,"BLOCKED!"));break}f.foretold&&m.push(i(`Just as I foresaw. Poor ${s(f.foretold)}.`,8,"FORETOLD"));let v=f.fell.filter(E=>E!==f.foretold);v.length&&m.push(i(`${p(v)} ${v.length>1?"fall":"falls"} into the dark.`,6)),f.saved&&f.saved.length&&m.push(i(`${p(f.saved)} ${f.saved.length>1?"were":"was"} saved by a spare life!`,5));break}case"monster":f.boss?m.push(i(f.summoned?`${f.name} has been summoned! Fight, all of you! Spam the chat!`:`${f.name} rises! Spam the chat to fight! Likes hurt it too!`,9,f.summoned?"GHOST BOSS!":"BOSS FIGHT!")):m.push(i(`It is ${f.name}! Comment anything to hit it!`,7));break;case"mwin":{let v=f.top?s(f.top):null;f.boss?m.push(i(`${f.name} is banished!${v?` ${v} struck hardest!`:""}${f.rescued?" The fallen rise again!":""}`,9,"BOSS DOWN!")):m.push(i(`Banished!${v?` ${v} struck hardest.`:""}`,6,"VICTORY!"));break}case"matk":f.slam&&m.push(i(f.blocked?"The boss slams down! The shield holds!":"The boss slams the floor!",5));break;case"riddle":m.push(i(`Answer me this. ${cr[f.i][0]} First to comment the answer wins!`,9,"RIDDLE!",{riddle:1}));break;case"rwin":m.push(i(f.bot?`${_} solved it. The answer was ${f.a}. Come on chat, beat the bots!`:`${_} has it! The answer was ${f.a}. Clever soul!`,9,f.bot?null:"SOLVED!",{win:1}));break;case"rfail":m.push(i(`Nobody? The answer was ${f.a}. The tower takes some of your light.`,7));break;case"climb":m.push(i(f.lift?"Into my lift, darlings! We rise past a floor!":dr(["Up the stairs we go.","Onward. Upward.","Keep climbing. Keep your lanterns lit."],e),f.lift?7:3,f.lift?"MIRA'S LIFT":null));break;case"gift":{let v={prophecy:f.banked?`${_} lights a candle. I will reveal the next safe door.`:`${_} asks the cards. Look, the safe door glows!`,shield:`${_} casts a shield over the party!`,rescue:f.n?`${_} rescues the fallen! Rise, little ghosts!`:`${_} fills the lanterns! Thank you!`,skip:f.blessing?`${_} blesses the party! Thank you!`:f.hitBoss?`${_} strikes with magic!`:`${_} calls my lift!`,boss:f.blessing?`${_} blesses the whole tower! The fallen rise!`:f.hitBoss?`${_} hurls a ghost bomb at the boss!`:`${_} summons a ghost boss! Brave... or foolish.`}[f.tier];v&&m.push(i(v,{prophecy:6,shield:7,rescue:8,skip:8,boss:9}[f.tier],{prophecy:f.banked?null:"PROPHECY",shield:"SHIELD!",rescue:"RESCUE!",skip:f.blessing?"BLESSING":"MIRA'S LIFT",boss:f.blessing?"BLESSING":"GHOST BOSS!"}[f.tier],{gift:f.tier}));break}case"follow":m.push(i(`Thank you for the follow, ${_}. A spare life for you.`,4));break;case"share":m.push(i(`${_} shared the tower! A spare life, and more oil.`,4));break;case"blaze":m.push(i(f.rescued?`The lanterns blaze! Thank you for the likes! ${s(f.rescued)} rises again!`:"The lanterns blaze! Thank you for the likes!",5,"LANTERNS BLAZE"));break;case"lowfuel":m.push(i("Your lanterns are fading! Tap the screen, send likes, keep them lit!",7,"LOW OIL!"));break;case"join":f.bot||t.push(f.id);break;case"end":{let v=f.top&&f.top.length?s(f.top[0]):null,E=f.reason==="top"?`You reached the top of my tower! Floor ${f.floor}!`:f.reason==="dark"?`The lanterns go dark on floor ${f.floor}.`:`Everyone has fallen on floor ${f.floor}.`;m.push(i(`${E}${v?` Top climber: ${v}! Shoutout to ${v}!`:""} A new climb begins soon.`,10,f.reason==="top"?"THE TOP!":`FLOOR ${f.floor}`,{win:1}));break}}}if(t.length&&h-n>6){n=h;let f=t.splice(0,60);m.push(i(dr([`Welcome ${p(f)}. Take a lantern.`,`${p(f)} joined the climb.`],e),2))}m.length&&(o=h);let b=r[a],g=u[a];return b&&!m.length&&h-o>g[0]&&h-l>g[1]&&(l=h,o=h,m.push(i(b[c[a]++%b.length],2,null,{tip:1}))),m}}}var Hp=["Sara","Ali","Hina","Omar","Zara","Bilal","Noor","Ayan","Esha","Faraz","Iman","Junaid","Kinza","Laiba","Moiz","Nimra","Rida","Saad","Tania","Umer","Maya","Leo","Aisha","Yusuf","Lina","Kai","Mia","Zain","Sofia","Adam","Hamza","Amna","Riya","Dev","Luna","Max"],Vp=["","_x","22",".official","_99","\u{1F338}","xo","_07",".live","\u2728","_pk","786"],Wp=["hi","join","lets go","me!","hello from dubai","gg","this is fire","shield","dash","\u{1F4A8}","\u{1F6E1}\uFE0F","dance","color pink","color gold","revenge","wow","\u{1F525}\u{1F525}","i will win","play","1","2","3","2","left","right","3\uFE0F\u20E3","candle","clock","echo","map","attack","mage","warrior","archer","healer","\u{1F52E}","\u{1F3F9}","seal","hunt","city","army"],qp=[["Rose",1],["TikTok",1],["Finger Heart",5],["GG",1],["Doughnut",30],["Hand Hearts",100],["Corgi",299],["Money Gun",500],["Lion",29999]];function Xp(s="busy",e=Math.random){let t=c=>Math.floor(e()*c),n=[],i=()=>{let c=Hp[t(Hp.length)]+Vp[t(Vp.length)],u={uid:c.toLowerCase().replace(/[^\w.]/g,"")+n.length,name:c};return n.push(u),u},r=()=>n.length?n[t(n.length)]:i(),a=0,o=0,l=s==="quiet"?3:s==="gifts"?30:s==="demo"?40:220;return{people:n,tick(c){a+=c,o+=c;let u=[],p=s==="quiet"?.6:s==="busy"?Math.min(14,2+a/6):s==="demo"?5:4;for(;o>1/p;){o-=1/p;let h=n.length<Math.min(l,s==="busy"?10+a*2.5:l)&&e()<.6?i():r(),m=e();if(m<.5){let b=Wp[t(Wp.length)];if(e()<.25&&n.length>2){let g=r();g!==h&&(b=(e()<.5?"attack ":"\u2694\uFE0F ")+g.name.replace(/[^\w]/g,"").slice(0,6))}u.push({type:"chat",uid:h.uid,name:h.name,text:b})}else if(m<.8)u.push({type:"like",uid:h.uid,name:h.name,count:1+t(15)});else if(m<(s==="gifts"?.98:.9)){let b=e()<.75?qp[t(4)]:qp[4+t(s==="gifts"?4:3)];u.push({type:"gift",uid:h.uid,name:h.name,giftName:b[0],coins:b[1],count:e()<.2?1+t(5):1})}else m<.95?u.push({type:"follow",uid:h.uid,name:h.name}):u.push({type:"share",uid:h.uid,name:h.name})}return u}}}var un=new URLSearchParams(location.search),ui=s=>document.getElementById(s),Oc=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,_o=un.get("mode")==="phone"||un.get("mode")!=="pc"&&(Oc||/Android|Mobile/.test(navigator.userAgent)),di=un.get("render")==="1",oa=di||un.get("local")==="1",Qu=un.get("key")||"",vo=Number(un.get("fps"))||(_o?30:60),lm=un.get("mute")==="1";un.get("clean")==="1"&&document.body.classList.add("clean");var cm=_o?[{pr:1.5,maxW:780,labels:12,particles:1,dust:!0,props:!0,maxChars:36,animLod:1},{pr:1.25,maxW:700,labels:10,particles:.75,dust:!0,props:!0,maxChars:30,animLod:1},{pr:1,maxW:600,labels:8,particles:.5,dust:!1,props:!0,maxChars:24,animLod:2},{pr:.8,maxW:480,labels:6,particles:.35,dust:!1,props:!1,maxChars:16,animLod:2}]:[{pr:2,maxW:Number(un.get("maxw"))||1080,labels:14,particles:1,dust:!0,props:!0,maxChars:60,animLod:1},{pr:1.5,maxW:900,labels:12,particles:1,dust:!0,props:!0,maxChars:48,animLod:1},{pr:1,maxW:700,labels:10,particles:.6,dust:!1,props:!0,maxChars:36,animLod:2},{pr:.8,maxW:540,labels:8,particles:.4,dust:!1,props:!1,maxChars:24,animLod:2}],zn=un.has("q")?Math.max(0,Math.min(3,Number(un.get("q")))):0,Nv=un.has("q"),ki=ui("gl"),ut=null,hm=0,um=0,Fc=[],Is=!1,fr=ui("hud"),Fe=fr.getContext("2d");function dm(){if(!(un.get("view")==="2d"||localStorage.getItem("lg_force2d")==="1"))try{ut=Up(ki,{maxChars:60,particles:_o?700:1100,aa:!_o||Oc,preserve:di}),ut.ready&&ut.ready.catch(()=>Si("models-fail")),ki.addEventListener("webglcontextlost",yo,!1),ki.addEventListener("webglcontextrestored",fm,!1);return}catch{Si("gl-fail")}Bc()}function Bc(){if(ut&&ut.kind==="2d")return;try{ut&&ut.dispose(),ut&&ut.loseContext&&ut.loseContext()}catch{}let s=document.createElement("canvas");s.id="gl",ki.replaceWith(s),ki=s,ut=Op(ki,{}),Si("view-2d"),Ls()}function yo(s){s.preventDefault(),hm++,Is=!0,Si("ctx-lost"),Fc.push(performance.now()),Fc=Fc.filter(e=>performance.now()-e<12e4),_m(),clearTimeout(yo.t),yo.t=setTimeout(()=>{Is&&(localStorage.setItem("lg_force2d","1"),Bc(),Is=!1,Uc())},4e3),rd&&rd.send("ctxlost")}function fm(){if(clearTimeout(yo.t),um++,Si("ctx-restored"),Fc.length>=3){localStorage.setItem("lg_force2d","1"),Bc(),Is=!1,Uc();return}try{ut.dispose()}catch{}ki.removeEventListener("webglcontextlost",yo),ki.removeEventListener("webglcontextrestored",fm),ut=null,dm(),zn=Math.min(3,zn+1),Ls(),Is=!1,Uc()}var zc=390,la=844;function Ls(){let s=window.innerWidth,e=window.innerHeight,t=ui("stage"),n=s,i=e;s/e>.7&&(n=Math.round(Math.min(s,e*9/16)),i=Math.round(Math.min(e,n*16/9))),t.style.width=n+"px",t.style.height=i+"px",zc=n,la=i,document.documentElement.style.setProperty("--u",(n/100).toFixed(3)+"px");let r=cm[zn],a=window.devicePixelRatio||1,o=Math.min(a,r.pr,r.maxW/n);ut&&(ut.resize(n,i,o),ut.setQuality(r));let l=Math.min(a,2,900/n);fr.width=Math.round(n*l),fr.height=Math.round(i*l),fr.__pr=l}addEventListener("resize",()=>{clearTimeout(Ls.t),Ls.t=setTimeout(Ls,120)});var dn=Bp({record:di});dn.muted=lm;var pm=ui("soundChip");function kv(){dn.unlock(),setTimeout(()=>{dn.state()==="running"&&(pm.hidden=!0)},200)}["pointerdown","touchstart","click","keydown"].forEach(s=>addEventListener(s,kv,{passive:!0}));document.addEventListener("visibilitychange",()=>{document.hidden||dn.resume()});!di&&!lm&&(dn.unlock(),setTimeout(()=>{dn.state()!=="running"&&(pm.hidden=!1)},700));var cs=new Map,Nc=[],Si=s=>{Nc.push(s),Nc.length>8&&Nc.shift()},Ui={ws:0,snaps:0,ev:0,err:0,say:0},Gn=[],ls=null,jp=0,Kp="",Jp=ho,ad=null,Pc="",wn={phase:"gather",members:[],ghosts:[],tl:0,pd:1,floor:0,th:-1,nd:3,vc:[0,0,0],pr:-1,ch:-1,kinds:null,fuel:100,sh:0,mo:null,lift:0,nth:-9,n:0,gh:0,hype:0,run:0,best:0,ri:-1,rs:0};function ed(s=[],e=[]){for(let t of e)cs.delete(t);for(let t of s)cs.set(t.id,t)}var Mi=null,mo=1e3;function td(){let s=(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws?game=tower"+(Qu?"&key="+encodeURIComponent(Qu):"");try{Mi=new WebSocket(s)}catch{return setTimeout(td,mo)}Mi.onopen=()=>{Ui.ws++,mo=1e3,Si("ws-open"),Uc();try{let e=JSON.parse(localStorage.getItem("lg_towerBoard")||"null");e&&e.json&&e.sig&&Mi.send(JSON.stringify({t:"restore",json:e.json,sig:e.sig}))}catch{}},Mi.onmessage=e=>{let t;try{t=JSON.parse(e.data)}catch{return}Uv(t)},Mi.onclose=()=>{Mi=null,Si("ws-close"),setTimeout(td,mo),mo=Math.min(1e4,mo*1.7),Ui.ws&&_m()},Mi.onerror=()=>{}}function Uv(s){switch(s.t){case"hello":cs.clear(),ed(s.roster),Gn=[],ls=null,Jp=s.tiers||Jp,im(s),Yp(s.snap);break;case"roster":ed(s.add,s.del);break;case"s":Yp(s);break;case"say":bm(s.text,s.url,s.dur);break;case"banner":break;case"board":im(s);break;case"status":Pc=s.tiktok?.state||"",ui("conn").className=Pc==="connected"?"connected":/wait|connecting|reconnect/.test(Pc)?"waiting":Pc==="error"?"error":"",ey(s.tiktok);break}}function Yp(s){if(!s)return;Ui.snaps++;let t=performance.now()/1e3-s.tm;ls===null||t<ls||Math.abs(t-ls)>2?ls=t:ls+=(t-ls)*.02,Gn.length&&s.tm<Gn[Gn.length-1].tm-1&&(Gn=[],ls=t),Gn.push({tm:s.tm,s,done:!1}),Gn.length>40&&Gn.shift()}var Ov=.16;function Bv(s){if(!Gn.length)return wn;let e=s-ls-Ov;for(let r of Gn)if(!r.done&&r.tm<=e){r.done=!0;let a=e-r.tm>1.2;for(let o of r.s.ev||[])gm(o,a)}let t=Gn[0],n=null;for(let r=0;r<Gn.length;r++)if(Gn[r].tm<=e)t=Gn[r];else{n=Gn[r];break}if(!n||n===t)return nd(t.s,null,0);let i=Math.max(0,Math.min(1,(e-t.tm)/Math.max(.001,n.tm-t.tm)));return nd(t.s,n.s,i)}var Zp=[],$p=[];function nd(s,e,t){e&&e.fl!==s.fl&&(e=null);let n=[],i=[],r=new Map;if(e)for(let u=0;u<e.f.length;u+=6)r.set(e.f[u],u);let a=0,o=0;for(let u=0;u<s.f.length;u+=6){let p=s.f[u],d=s.f[u+5];if(d&Wt.ghost){let b=$p[o]||($p[o]={});o++,b.id=p,b.flags=d,b.info=cs.get(p)||{name:"?",color:16777215},i.push(b);continue}let h=Zp[a]||(Zp[a]={});a++,h.id=p,h.x=s.f[u+1],h.y=s.f[u+2],h.z=s.f[u+3],h.face=s.f[u+4],h.flags=d;let m=r.get(p);if(m!==void 0&&e&&!(e.f[m+5]&Wt.ghost)){let b=e.f;h.x+=(b[m+1]-h.x)*t,h.y+=(b[m+2]-h.y)*t,h.z+=(b[m+3]-h.z)*t;let g=b[m+4]-h.face;g=Math.atan2(Math.sin(g),Math.cos(g)),h.face+=g*t}h.info=cs.get(p)||{name:"?",color:16777215},n.push(h)}let l=e&&t>.5?e:s;l.ph!==Kp&&(Kp=l.ph,jp=ra());let c=l.mo;return c&&e&&s.mo&&e.mo&&(c={...l.mo,hp:s.mo.hp+(e.mo.hp-s.mo.hp)*t}),wn={phase:l.ph,members:n,ghosts:i,tl:l.tl,pd:l.pd,floor:l.fl,th:l.th,nd:l.nd,vc:l.vc,pr:l.pr,ch:l.ch,kinds:l.kinds,fuel:e?s.fuel+(e.fuel-s.fuel)*t:s.fuel,sh:l.sh,mo:c,lift:l.lift,nth:l.nth,n:l.n,gh:l.gh,hype:l.hype,run:l.run,best:l.best,ri:l.ri,rs:l.rs,pdc:l.pdc,pk:l.pk,phaseStart:jp},wn}var hi=null,id=null,mm=null,Ps=[],Qp=0,sd=0;function zv(){let s={};for(let n of["gatherSeconds","enterSeconds","voteSeconds","revealSeconds","treasureSeconds","trapSeconds","monsterSeconds","riddleSeconds","bossSeconds","victorySeconds","climbSeconds","endSeconds","minParty","startFloor","bossEvery","fuelDrain","monsterHpMul","dmgMul","topFloor"])un.has(n)&&(s[n]=Number(un.get(n)));un.get("bots")==="0"&&(s.bots=!1);let e=Number(un.get("seed")||7),t=()=>(e=e*16807%2147483647,(e-1)/2147483646);hi=new Sc(s,di?t:Math.random),mm=Gp({nameOf:n=>hi.byId.get(n)?.name||null,rng:di?t:Math.random}),un.get("crowd")&&(id=Xp(un.get("crowd"),di?t:Math.random)),window.__input=n=>hi.input(n),window.__tower=hi}var ju=0;function Gv(s,e){if(id)for(let r of id.tick(s))hi.input(r);for(ju+=s;ju>=.05;)ju-=.05,hi.step(.05);let t=hi.drainRoster();ed(t.add,t.del);let n=hi.drain();for(let r of mm.lines(n,hi.t))Hv(r,e);let i=hi.snapshot();for(let r of n)gm(r,!1);return n.some(r=>r.k==="end"||r.k==="rwin"||r.k==="mwin")&&(ad={session:hi.board(8),all:[],sessionBest:hi.sessionBest}),nd(i,null,0)}function Hv(s,e){let t={...s,at:e,p:null};for(t.p=fetch("/api/say?voice=mira&text="+encodeURIComponent(s.text)).then(n=>n.json()).catch(()=>({url:null})),sd++,t.p.finally(()=>sd--),Ps.push(t),Ps.sort((n,i)=>i.pri-n.pri||n.at-i.at);Ps.length>3;)Ps.pop()}async function bo(s){if(s<Qp||!Ps.length||bo.busy)return;let e=Ps.shift();if(!e.win&&!e.riddle&&s-e.at>(e.pri>=7?9:6))return;bo.busy=!0;let t=await e.p;bo.busy=!1;let n=ra(),i=t.dur||Math.min(6,.9+e.text.length/15);bm(e.text,t.url,i),Qp=n+i+.25}var Vv=s=>cs.get(s)?.name||"?",Wv=s=>"#"+((cs.get(s)?.color??16777215)>>>0).toString(16).padStart(6,"0"),em=0,tm=0,Ic=null;function gm(s,e){if(Ui.ev++,!e&&ut&&!Is)try{ut.fx(s,wn)}catch{Ui.err++}let t=(n,i)=>{e||dn.sfx(n,dn.now(),i)};switch(s.k){case"gather":t("wind"),Ic=null;break;case"floor":t(s.boss?"bell":"creak"),s.boss&&t("organ"),Ic=null;break;case"vote":s.start?t("chime"):ra()-em>.12&&(em=ra(),t("squeak",.35));break;case"prophecy":t("chime");break;case"reveal":t("creak"),t({treasure:"coin",trap:"trap",monster:"roar",riddle:"organ"}[s.kinds[s.door]]||"creak");break;case"treasure":t("coin"),t("fanfare",.5);break;case"trap":t("trap"),(s.trap==="shards"||s.trap==="chandelier")&&t("shatter"),s.blocked&&t("shield");break;case"fall":t("ghost",.6);break;case"rise":t("heal",.6);break;case"monster":t("roar"),t(s.boss?"organ":"heart");break;case"hit":{ra()-tm>.06&&(tm=ra(),t(s.c?"crit":"punch",.55));break}case"matk":t(s.slam?"boom":"roar",s.slam?1:.5);break;case"mwin":t("fanfare"),t("cheer");break;case"mlose":t("trap"),t("ghost");break;case"riddle":t("organ"),t("chime");break;case"rwin":t("fanfare"),t("coin"),Ic={id:s.id,a:s.a};break;case"rfail":t("ghost"),Ic={id:0,a:s.a};break;case"climb":t(s.lift?"power":"creak",.6);break;case"gift":t("coin");break;case"summon":t("bell"),t("organ");break;case"follow":t("power");break;case"share":t("power");break;case"blaze":t("heal"),t("cheer");break;case"lowfuel":t("heart");break;case"end":t(s.reason==="top"?"fanfare":"bell"),s.reason==="top"&&t("cheer"),Xv(s);break}s.k!=="hit"&&s.k!=="vote"&&Si(s.k)}function ra(){return di?aa:performance.now()/1e3}function qv(s=.7){let e=ui("flash");e.style.transition="none",e.style.opacity=String(s),e.offsetWidth,e.style.transition="opacity 0.9s ease-out",e.style.opacity="0"}var nm=0;function bm(s,e,t){Ui.say++;let n=Math.max(1800,(t||2)*1e3+600);ut&&ut.speaking(!0),clearTimeout(nm),nm=Zv(()=>{ut&&ut.speaking(!1)},n),e&&dn.voice(e,t)}var xm=(s,e=10)=>(s=String(s||"?").replace(/\s+/g," ").trim(),[...s].length>e?[...s].slice(0,e-1).join("")+"\u2026":s);function Xv(s){let e=(s.top||[]).filter(n=>cs.has(n));if(!e.length)return;ui("winName").textContent=xm(Vv(e[0]),18),ui("winName").style.color=Wv(e[0]);let t=ui("winner");t.hidden=!1,t.style.animation="none",t.offsetWidth,t.style.animation=""}function im(s){if(!(!s||!s.session&&!s.all)&&(ad=s,s.signed))try{localStorage.setItem("lg_towerBoard",JSON.stringify(s.signed))}catch{}}var sm="",Lc={};function jv(s){let e=fr.__pr||1,t=zc/100;if(Fe.setTransform(1,0,0,1,0,0),Fe.clearRect(0,0,fr.width,fr.height),Fe.setTransform(e,0,0,e,0,0),!ut||Is)return;let n=wn,i=cm[zn];Fe.textAlign="center",Fe.textBaseline="middle",Fe.lineJoin="round";let r=(a,o)=>`${a} ${o}px -apple-system, "Segoe UI", Roboto, sans-serif`;if(n.nd&&["vote","reveal","treasure","trap","monster","riddle","victory","enter"].includes(n.phase)){let a=(n.vc||[]).reduce((l,c)=>l+c,0)||1,o=Math.max(0,...n.vc||[0]);for(let l=0;l<n.nd;l++){let c=ut.doorTop(l);if(!c||!c.vis)continue;let u=Math.max(la*.3,Math.min(la*.55,c.y-t*3));if(n.phase==="vote"||n.phase==="enter"){let p=n.vc&&n.vc[l]||0,d=p>0&&p===o,h=t*13;if(Fe.fillStyle="rgba(10,4,24,0.55)",Mo(c.x-h/2,u,h,t*1.3,t*.65),Fe.fill(),Fe.fillStyle=d?"#ffd36a":"rgba(255,230,170,0.75)",Mo(c.x-h/2,u,Math.max(t*1.3,h*(p/a)),t*1.3,t*.65),p&&Fe.fill(),n.pr===l){let m=1+Math.sin(s*6)*.08;Fe.font=r(900,t*7*m),Fe.fillText("\u{1F52E}",c.x,u-t*5)}}else if(n.kinds&&n.kinds[l]){let p=n.ch===l;Fe.globalAlpha=p?1:.5,Fe.font=r(900,t*(p?8:5)),Fe.fillText(Mc[n.kinds[l]]||"",c.x,u-t*2),Fe.globalAlpha=1}}}Kv(s,t,i,r),Jv(s,t),Fe.globalAlpha=1}function Kv(s,e,t,n){let i=wn,a=(ut.drawn()||[]).filter(p=>!p.ghost).map(p=>({f:p,s:(p.flags&Wt.cmd?8:0)+(p.flags&Wt.crown?6:0)+(p.flags&Wt.gift?5:0)+(p.flags&Wt.bot?0:3)+(i.pdc===p.id?9:0)}));a.sort((p,d)=>d.s-p.s);let o=a.length>10,l=Math.round(e*(o?2.3:2.6)),c=[],u=0;for(let{f:p}of a){if(u>=t.labels)break;let d=ut.project(p.x,p.y,p.z);if(!d.vis||d.x<e*4||d.x>zc-e*4||d.y<la*.24||d.y>la*.8||c.some(v=>Math.abs(v.x-d.x)<e*10&&Math.abs(v.y-d.y)<e*3.4))continue;c.push(d),u++;let h=p.info||{},m=p.flags&Wt.bot,b=(p.flags&Wt.crown?"\u{1F451}":"")+xm(m?String(h.name||"").replace(/^Bot\s+/i,""):h.name,o?8:10)+(p.flags&Wt.life?"\u2665":""),g=(m?.55:.92)*(1-Math.min(.5,u/(t.labels*2)));Fe.globalAlpha=g,Fe.font=n(700,l);let f=Math.min(Fe.measureText(b).width,e*22),_=l*1.3,w=d.y-_*.4;Fe.fillStyle="rgba(8,4,20,0.5)",Mo(d.x-f/2-e,w-_/2,f+e*2,_,_/2),Fe.fill(),Fe.fillStyle="#"+((h.color??16777215)>>>0).toString(16).padStart(6,"0"),Fe.fillText(b,d.x,w+1,e*22)}Fe.globalAlpha=1}function Jv(s,e){let t=wn,n=t.phase;n!==sm&&(sm=n,Lc[n]=Math.max(1,t.tl||1)),t.tl>Lc[n]&&(Lc[n]=t.tl);let i=zc/2,r=la*.135,a=e*4.6,o=["gather","vote","monster","boss","riddle"].includes(n)&&t.tl>0,l=o?Math.max(0,Math.min(1,t.tl/(Lc[n]||1))):1,c=Math.max(0,Math.min(100,t.fuel||0))/100,u=o&&(n==="vote"||n==="gather")&&t.tl<=5&&!(n==="gather"&&t.n<1),p=(n==="monster"||n==="boss")&&t.mo,d=p?"#ff6b8b":n==="riddle"?"#c77dff":n==="vote"?"#ffd36a":"#7ee0ff",h=u?1+.12*Math.max(0,Math.sin(t.tl%1*Math.PI)):1;Fe.save(),Fe.translate(i,r),Fe.scale(h,h),Fe.fillStyle="rgba(10,6,24,0.55)",Fe.beginPath(),Fe.arc(0,0,a+e*2.1,0,Math.PI*2),Fe.fill(),Fe.lineCap="round",Fe.lineWidth=e*1.1,Fe.strokeStyle="rgba(255,255,255,0.16)",Fe.beginPath(),Fe.arc(0,0,a,0,Math.PI*2),Fe.stroke(),Fe.strokeStyle=d,Fe.beginPath(),Fe.arc(0,0,a,-Math.PI/2,-Math.PI/2+Math.PI*2*l),Fe.stroke();let m=c<.25&&n!=="gather"&&n!=="end";if(Fe.lineWidth=e*.7,Fe.strokeStyle="rgba(255,180,90,0.18)",Fe.beginPath(),Fe.arc(0,0,a+e*1.35,0,Math.PI*2),Fe.stroke(),Fe.strokeStyle=m&&Math.sin(s*10)>0?"#ff4a4a":"#ffb36b",c>0&&(Fe.beginPath(),Fe.arc(0,0,a+e*1.35,-Math.PI/2,-Math.PI/2+Math.PI*2*c),Fe.stroke()),Fe.textAlign="center",Fe.textBaseline="middle",Fe.fillStyle="#fff",u?(Fe.font=`900 ${Math.round(e*4.4)}px -apple-system, "Segoe UI", Roboto, sans-serif`,Fe.fillText(String(Math.ceil(t.tl)),0,e*.3)):(Fe.font=`${Math.round(e*4)}px sans-serif`,Fe.fillText(n==="riddle"?"\u2753":p?t.mo.b?"\u{1F47B}":t.mo.k==="spider"?"\u{1F577}\uFE0F":t.mo.k==="mimic"?"\u{1F4E6}":"\u{1F47B}":n==="end"?"\u{1F451}":"\u{1F3EE}",0,e*.3)),Fe.restore(),t.sh){Fe.font=`${Math.round(e*3.2)}px sans-serif`;for(let b=0;b<Math.min(3,t.sh);b++)Fe.fillText("\u{1F6E1}\uFE0F",i+a+e*(5+b*3.6),r)}if(p){let b=e*26,g=Math.max(0,Math.min(1,t.mo.hp/t.mo.max)),f=r+a+e*4;Fe.fillStyle="rgba(10,6,24,0.6)",Mo(i-b/2,f,b,e*1.4,e*.7),Fe.fill(),Fe.fillStyle=t.mo.b?"#c77dff":"#ff4a6a",g>0&&(Mo(i-b/2,f,b*g,e*1.4,e*.7),Fe.fill())}}function Mo(s,e,t,n,i){Fe.beginPath(),Fe.moveTo(s+i,e),Fe.arcTo(s+t,e,s+t,e+n,i),Fe.arcTo(s+t,e+n,s,e+n,i),Fe.arcTo(s,e+n,s,e,i),Fe.arcTo(s,e,s+t,e,i),Fe.closePath()}var Ku=-1;function Yv(s){let e=wn,t=document.body,n=e.phase==="monster"||e.phase==="boss",i=e.phase==="riddle"&&e.ri>=0,r=Math.max(0,Math.min(100,e.fuel));if(t.classList.toggle("dark",r<20&&e.phase!=="gather"),t.classList.toggle("voting",["enter","vote","reveal"].includes(e.phase)),t.classList.toggle("fighting",n&&!!e.mo),t.classList.toggle("riddling",i),(e.phase==="vote"||e.phase==="gather")&&e.tl<=5&&e.tl>0&&!(e.phase==="gather"&&e.n<1)){let a=Math.ceil(e.tl);a!==Ku&&(Ku=a,dn.sfx(e.phase==="vote"&&a<=3?"heart":"beep"))}else Ku=-1;e.phase!=="end"&&(ui("winner").hidden=!0)}var kc=[];function Zv(s,e){if(!di)return setTimeout(s,e);let t={at:aa+e/1e3,fn:s};return kc.push(t),t}function $v(){for(let s=kc.length-1;s>=0;s--)kc[s].at<=aa&&kc.splice(s,1)[0].fn()}function _m(){ui("notice").hidden=!1}function Uc(){ui("notice").hidden=!0}var go=0,Ju=0,Yu=0,xo=0,Zu=0,Dc=0,rm=0,am=6,$u=new Map;function vm(s,e){if(oa?wn=Gv(s,e):wn=Bv(e),oa&&bo(e),ut&&!Is)try{ut.frame(wn,s,e)}catch{Ui.err++,Si("frame-err"),Ui.err>30&&Bc()}ut&&ut.thunder()&&(dn.sfx("thunder"),qv(.35)),e>am&&(am=e+11+Math.random()*9,wn.phase!=="monster"&&wn.phase!=="boss"&&dn.sfx("wind",dn.now(),.5)),jv(e),e-rm>.25&&(rm=e,Yv(e))}function Qv(s){Ju++,!(s-Yu<2)&&(xo=Ju/(s-Yu),Ju=0,Yu=s,!(Nv||di||document.hidden)&&(s<6||(xo<vo*.8&&zn<3?++Zu>=2&&($u.set(zn,($u.get(zn)||0)+1),zn++,Zu=0,Dc=0,Ls(),Si("q"+zn)):(Zu=0,xo>=vo*.95&&zn>0&&($u.get(zn-1)||0)<2?++Dc>=6&&(zn--,Dc=0,Ls(),Si("q"+zn)):Dc=0))))}function ym(s){if(requestAnimationFrame(ym),document.hidden)return;let e=s/1e3;if(go&&e-go<1/vo-.004)return;let t=Math.min(.1,go?e-go:1/vo);go=e,vm(t,e),Qv(e)}var aa=0;di&&(dn.clock=()=>aa,window.__render={async frame(s){aa+=s,$v(),ut&&ut.ready&&!ut.loaded&&!ut.error&&await ut.ready.catch(()=>{});for(let e=0;e<100&&(bo.busy||Ps.length&&Ps[0].p&&sd);e++)await new Promise(t=>setTimeout(t,30));return vm(s,aa),{phase:wn.phase,n:wn.n,floor:wn.floor,fuel:wn.fuel}},mix:s=>dn.mix(s),stats:()=>ut.stats()});var om=!1;function ey(s){if(om||Oc||oa||!Qu||!s||!/tikfinity|both/.test(s.source||""))return;om=!0;let e=document.createElement("script");e.src="/shared/tikfinity.js",e.onload=()=>{let t=window.TikFinity;t.setSink(n=>{!Mi||Mi.readyState!==1||(n.type==="status"?Mi.send(JSON.stringify({t:"tf-status",state:n.mode==="live"?"connected":"waiting",message:n.message})):Mi.send(JSON.stringify({t:"tf",ev:n})))}),t.connect()},document.head.appendChild(e)}var rd=null;dm();Ls();oa?(zv(),ad={session:[],all:[]}):td();di||(requestAnimationFrame(ym),setInterval(()=>{!document.hidden&&!oa&&fetch("/healthz?overlay=1",{cache:"no-store"}).catch(()=>{})},4*6e4),rd=zp(()=>({mode:{phone:_o,ios:Oc,kind:ut?ut.kind:"none",game:"tower",q:zn,fps:Math.round(xo*10)/10,cap:vo},cv:{w:ki.width,h:ki.height},gl:{...ut?ut.stats():{},lost:hm,restored:um},n:{...Ui},last:Nc.slice(),audio:{unlocked:dn.state()==="running",ctx:dn.state(),played:dn.played,fails:dn.fails}}),{off:un.get("diag")==="0"||oa}));window.__towerUI={get world(){return wn},get level(){return zn},get fps(){return xo},get view(){return ut},stats:()=>ut?ut.stats():null,N:Ui,audio:dn,roster:cs};})();
