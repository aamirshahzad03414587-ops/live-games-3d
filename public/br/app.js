(()=>{var ff=0,Fl=1,df=2;var pa=1,pf=2,br=3,li=0,Qt=1,cn=2,Rs=0,Qi=1,Ni=2,Ul=3,Ol=4,mf=5;var Cs=100,gf=101,bf=102,xf=103,_f=104,vf=200,yf=201,Mf=202,Sf=203,kl=204,Bl=205,wf=206,Af=207,Tf=208,Ef=209,Rf=210,Cf=211,Pf=212,If=213,Lf=214,xo=0,_o=1,vo=2,Qs=3,yo=4,Mo=5,So=6,wo=7,qo=0,Df=1,Nf=2,hi=0,zl=1,Gl=2,Hl=3,ma=4,Vl=5,Wl=6,ql=7,Tl="attached",Ff="detached",Xl=300,Ps=301,xr=302,Xo=303,jo=304,Ki=1e3,Bn=1001,er=1002,Nt=1003,Ko=1004;var Is=1005;var Ht=1006,_r=1007;var Hn=1008;var Rn=1009,jl=1010,Kl=1011,vr=1012,Jo=1013,$n=1014,Un=1015,Qn=1016,Yo=1017,Zo=1018,Ls=1020,Jl=35902,Yl=35899,Zl=1021,$l=1022,Vn=1023,Ti=1026,Fi=1027,$o=1028,Qo=1029,es=1030,ec=1031;var tc=1033,ga=33776,ba=33777,xa=33778,_a=33779,nc=35840,ic=35841,sc=35842,rc=35843,ac=36196,oc=37492,cc=37496,lc=37488,hc=37489,va=37490,uc=37491,fc=37808,dc=37809,pc=37810,mc=37811,gc=37812,bc=37813,xc=37814,_c=37815,vc=37816,yc=37817,Mc=37818,Sc=37819,wc=37820,Ac=37821,Tc=36492,Ec=36494,Rc=36495,Cc=36283,Pc=36284,ya=36285,Ic=36286,Lc=2200,Dc=2201,Uf=2202,ps=2300,ms=2301,go=2302,El=2303,us=2400,fs=2401,Hr=2402,Nc=2500,Of=2501,Ql=0,Ma=1,yr=2,kf=3200;var Sa=0,Bf=1,Ui="",yt="srgb",pn="srgb-linear",Vr="linear",ut="srgb";var bo=7680;var zf=519,Gf=512,Hf=513,Vf=514,eh=515,Wf=516,qf=517,th=518,nh=519,ih=35044;var sh="300 es",zn=2e3,tr=2001;function Fp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Up(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function nr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xf(){let s=nr("canvas");return s.style.display="block",s}var Au={},ir=null;function Wr(...s){let e="THREE."+s.shift();ir?ir("log",e,...s):console.log(e,...s)}function jf(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Fe(...s){s=jf(s);let e="THREE."+s.shift();if(ir)ir("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function We(...s){s=jf(s);let e="THREE."+s.shift();if(ir)ir("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ds(...s){let e=s.join(" ");e in Au||(Au[e]=!0,Fe(...s))}function Kf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Jf={[xo]:xo,[vo]:So,[yo]:yo,[Qs]:Mo,[_o]:_o,[So]:vo,[wo]:wo,[Mo]:Qs},Yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tu=1234567,zr=Math.PI/180,gs=180/Math.PI;function ui(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[s&255]+rn[s>>8&255]+rn[s>>16&255]+rn[s>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function it(s,e,t){return Math.max(e,Math.min(t,s))}function rh(s,e){return(s%e+e)%e}function Op(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function kp(s,e,t){return s!==e?(t-s)/(e-s):0}function Gr(s,e,t){return(1-t)*s+t*e}function Bp(s,e,t,n){return Gr(s,e,1-Math.exp(-t*n))}function zp(s,e=1){return e-Math.abs(rh(s,e*2)-e)}function Gp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Hp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Vp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Wp(s,e){return s+Math.random()*(e-s)}function qp(s){return s*(.5-Math.random())}function Xp(s){s!==void 0&&(Tu=s);let e=Tu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jp(s){return s*zr}function Kp(s){return s*gs}function Jp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Yp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ah(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zp(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),d=a((e-n)/2),u=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*f,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*f,o*l);break;case"ZXZ":s.set(c*f,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*p,c*u,o*l);break;case"YXY":s.set(c*u,o*h,c*p,o*l);break;case"ZYZ":s.set(c*p,c*u,o*h,o*l);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function oh(s,e){if(e.constructor===Float32Array)return s;let t=Fc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function ch(s,e){if(e.constructor===Float32Array)return s;let t=Fc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var ln={DEG2RAD:zr,RAD2DEG:gs,generateUUID:ui,clamp:it,euclideanModulo:rh,mapLinear:Op,inverseLerp:kp,lerp:Gr,damp:Bp,pingpong:zp,smoothstep:Gp,smootherstep:Hp,randInt:Vp,randFloat:Wp,randFloatSpread:qp,seededRandom:Xp,degToRad:jp,radToDeg:Kp,isPowerOfTwo:Jp,ceilPowerOfTwo:Yp,floorPowerOfTwo:ah,setQuaternionFromProperEuler:Zp,normalize:ch,denormalize:oh},dh=class dh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dh.prototype.isVector2=!0;var Xe=dh,Jt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3],d=r[a+0],u=r[a+1],p=r[a+2],m=r[a+3];if(f!==m||c!==d||l!==u||h!==p){let b=c*d+l*u+h*p+f*m;b<0&&(d=-d,u=-u,p=-p,m=-m,b=-b);let g=1-o;if(b<.9995){let v=Math.acos(b),A=Math.sin(v);g=Math.sin(g*v)/A,o=Math.sin(o*v)/A,c=c*g+d*o,l=l*g+u*o,h=h*g+p*o,f=f*g+m*o}else{c=c*g+d*o,l=l*g+u*o,h=h*g+p*o,f=f*g+m*o;let v=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=v,l*=v,h*=v,f*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=r[a],d=r[a+1],u=r[a+2],p=r[a+3];return e[t]=o*p+h*f+c*u-l*d,e[t+1]=c*p+h*d+l*f-o*u,e[t+2]=l*p+h*u+o*d-c*f,e[t+3]=h*p-o*f-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),f=o(r/2),d=c(n/2),u=c(i/2),p=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*u*p,this._y=l*u*f-d*h*p,this._z=l*h*p+d*u*f,this._w=l*h*f-d*u*p;break;case"YXZ":this._x=d*h*f+l*u*p,this._y=l*u*f-d*h*p,this._z=l*h*p-d*u*f,this._w=l*h*f+d*u*p;break;case"ZXY":this._x=d*h*f-l*u*p,this._y=l*u*f+d*h*p,this._z=l*h*p+d*u*f,this._w=l*h*f-d*u*p;break;case"ZYX":this._x=d*h*f-l*u*p,this._y=l*u*f+d*h*p,this._z=l*h*p-d*u*f,this._w=l*h*f+d*u*p;break;case"YZX":this._x=d*h*f+l*u*p,this._y=l*u*f+d*h*p,this._z=l*h*p-d*u*f,this._w=l*h*f-d*u*p;break;case"XZY":this._x=d*h*f-l*u*p,this._y=l*u*f-d*h*p,this._z=l*h*p+d*u*f,this._w=l*h*f+d*u*p;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-i)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-c)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+l)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-l)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-i)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ph=class ph{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=i+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ph.prototype.isVector3=!0;var z=ph,nl=new z,Eu=new Jt,mh=class mh{constructor(e,t,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],u=n[5],p=n[8],m=i[0],b=i[3],g=i[6],v=i[1],A=i[4],_=i[7],w=i[2],M=i[5],x=i[8];return r[0]=a*m+o*v+c*w,r[3]=a*b+o*A+c*M,r[6]=a*g+o*_+c*x,r[1]=l*m+h*v+f*w,r[4]=l*b+h*A+f*M,r[7]=l*g+h*_+f*x,r[2]=d*m+u*v+p*w,r[5]=d*b+u*A+p*M,r[8]=d*g+u*_+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,d=o*c-h*r,u=l*r-a*c,p=t*f+n*d+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=f*m,e[1]=(i*l-h*n)*m,e[2]=(o*n-i*a)*m,e[3]=d*m,e[4]=(h*t-i*c)*m,e[5]=(i*r-o*t)*m,e[6]=u*m,e[7]=(n*c-l*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(il.makeScale(e,t)),this}rotate(e){return ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(il.makeRotation(-e)),this}translate(e,t){return ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mh.prototype.isMatrix3=!0;var je=mh,il=new je,Ru=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $p(){let s={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(i.r=$s(i.r),i.g=$s(i.g),i.b=$s(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ui?Vr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[pn]:{primaries:e,whitePoint:n,transfer:Vr,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),s}var et=$p();function Ai(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ks,Ao=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ks===void 0&&(ks=nr("canvas")),ks.width=e.width,ks.height=e.height;let i=ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ks}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=nr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ai(t[n]/255)*255):t[n]=Ai(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qp=0,sr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(sl(i[a].image)):r.push(sl(i[a]))}else r=sl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function sl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ao.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}var em=0,rl=new z,Vt=class s extends Yn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Bn,i=Bn,r=Ht,a=Hn,o=Vn,c=Rn,l=s.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=ui(),this.name="",this.source=new sr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(rl).x}get height(){return this.source.getSize(rl).y}get depth(){return this.source.getSize(rl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ki:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ki:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Xl;Vt.DEFAULT_ANISOTROPY=1;var gh=class gh{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],p=c[9],m=c[2],b=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-m)<.01&&Math.abs(p-b)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+m)<.1&&Math.abs(p+b)<.1&&Math.abs(l+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,_=(u+1)/2,w=(g+1)/2,M=(h+d)/4,x=(f+m)/4,y=(p+b)/4;return A>_&&A>w?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=M/n,r=x/n):_>w?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=M/i,r=y/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=x/r,i=y/r),this.set(n,i,r,t),this}let v=Math.sqrt((b-p)*(b-p)+(f-m)*(f-m)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(b-p)/v,this.y=(f-m)/v,this.z=(d-h)/v,this.w=Math.acos((l+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gh.prototype.isVector4=!0;var dt=gh,To=class extends Yn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Vt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new sr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends To{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qr=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Eo=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Wo=class Wo{constructor(e,t,n,i,r,a,o,c,l,h,f,d,u,p,m,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,f,d,u,p,m,b)}set(e,t,n,i,r,a,o,c,l,h,f,d,u,p,m,b){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=f,g[14]=d,g[3]=u,g[7]=p,g[11]=m,g[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),a=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,u=a*f,p=o*h,m=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=u+p*l,t[5]=d-m*l,t[9]=-o*c,t[2]=m-d*l,t[6]=p+u*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,u=c*f,p=l*h,m=l*f;t[0]=d+m*o,t[4]=p*o-u,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=u*o-p,t[6]=m+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,u=c*f,p=l*h,m=l*f;t[0]=d-m*o,t[4]=-a*f,t[8]=p+u*o,t[1]=u+p*o,t[5]=a*h,t[9]=m-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,u=a*f,p=o*h,m=o*f;t[0]=c*h,t[4]=p*l-u,t[8]=d*l+m,t[1]=c*f,t[5]=m*l+d,t[9]=u*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,u=a*l,p=o*c,m=o*l;t[0]=c*h,t[4]=m-d*f,t[8]=p*f+u,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*f+p,t[10]=d-m*f}else if(e.order==="XZY"){let d=a*c,u=a*l,p=o*c,m=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+m,t[5]=a*h,t[9]=u*f-p,t[2]=p*f-u,t[6]=o*h,t[10]=m*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tm,e,nm)}lookAt(e,t,n){let i=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Gi.crossVectors(n,Ln),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Gi.crossVectors(n,Ln)),Gi.normalize(),Wa.crossVectors(Ln,Gi),i[0]=Gi.x,i[4]=Wa.x,i[8]=Ln.x,i[1]=Gi.y,i[5]=Wa.y,i[9]=Ln.y,i[2]=Gi.z,i[6]=Wa.z,i[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],u=n[13],p=n[2],m=n[6],b=n[10],g=n[14],v=n[3],A=n[7],_=n[11],w=n[15],M=i[0],x=i[4],y=i[8],I=i[12],C=i[1],D=i[5],N=i[9],G=i[13],P=i[2],U=i[6],J=i[10],Y=i[14],W=i[3],B=i[7],X=i[11],$=i[15];return r[0]=a*M+o*C+c*P+l*W,r[4]=a*x+o*D+c*U+l*B,r[8]=a*y+o*N+c*J+l*X,r[12]=a*I+o*G+c*Y+l*$,r[1]=h*M+f*C+d*P+u*W,r[5]=h*x+f*D+d*U+u*B,r[9]=h*y+f*N+d*J+u*X,r[13]=h*I+f*G+d*Y+u*$,r[2]=p*M+m*C+b*P+g*W,r[6]=p*x+m*D+b*U+g*B,r[10]=p*y+m*N+b*J+g*X,r[14]=p*I+m*G+b*Y+g*$,r[3]=v*M+A*C+_*P+w*W,r[7]=v*x+A*D+_*U+w*B,r[11]=v*y+A*N+_*J+w*X,r[15]=v*I+A*G+_*Y+w*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],u=e[14],p=e[3],m=e[7],b=e[11],g=e[15],v=c*u-l*d,A=o*u-l*f,_=o*d-c*f,w=a*u-l*h,M=a*d-c*h,x=a*f-o*h;return t*(m*v-b*A+g*_)-n*(p*v-b*w+g*M)+i*(p*A-m*w+g*x)-r*(p*_-m*M+b*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],u=e[11],p=e[12],m=e[13],b=e[14],g=e[15],v=t*o-n*a,A=t*c-i*a,_=t*l-r*a,w=n*c-i*o,M=n*l-r*o,x=i*l-r*c,y=h*m-f*p,I=h*b-d*p,C=h*g-u*p,D=f*b-d*m,N=f*g-u*m,G=d*g-u*b,P=v*G-A*N+_*D+w*C-M*I+x*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/P;return e[0]=(o*G-c*N+l*D)*U,e[1]=(i*N-n*G-r*D)*U,e[2]=(m*x-b*M+g*w)*U,e[3]=(d*M-f*x-u*w)*U,e[4]=(c*C-a*G-l*I)*U,e[5]=(t*G-i*C+r*I)*U,e[6]=(b*_-p*x-g*A)*U,e[7]=(h*x-d*_+u*A)*U,e[8]=(a*N-o*C+l*y)*U,e[9]=(n*C-t*N-r*y)*U,e[10]=(p*M-m*_+g*v)*U,e[11]=(f*_-h*M-u*v)*U,e[12]=(o*I-a*D-c*y)*U,e[13]=(t*D-n*I+i*y)*U,e[14]=(m*A-p*w-b*v)*U,e[15]=(h*w-f*A+d*v)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,d=r*l,u=r*h,p=r*f,m=a*h,b=a*f,g=o*f,v=c*l,A=c*h,_=c*f,w=n.x,M=n.y,x=n.z;return i[0]=(1-(m+g))*w,i[1]=(u+_)*w,i[2]=(p-A)*w,i[3]=0,i[4]=(u-_)*M,i[5]=(1-(d+g))*M,i[6]=(b+v)*M,i[7]=0,i[8]=(p+A)*x,i[9]=(b-v)*x,i[10]=(1-(d+m))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Bs.set(i[0],i[1],i[2]).length(),o=Bs.set(i[4],i[5],i[6]).length(),c=Bs.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Xn.copy(this);let l=1/a,h=1/o,f=1/c;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,t.setFromRotationMatrix(Xn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=zn,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),p,m;if(c)p=r/(a-r),m=a*r/(a-r);else if(o===zn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===tr)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=zn,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),u=-(n+i)/(n-i),p,m;if(c)p=1/(a-r),m=a/(a-r);else if(o===zn)p=-2/(a-r),m=-(a+r)/(a-r);else if(o===tr)p=-1/(a-r),m=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Wo.prototype.isMatrix4=!0;var Ue=Wo,Bs=new z,Xn=new Ue,tm=new z(0,0,0),nm=new z(1,1,1),Gi=new z,Wa=new z,Ln=new z,Pu=new Ue,Iu=new Jt,Gn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var Xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},im=0,Lu=new z,zs=new Jt,_i=new Ue,qa=new z,Ir=new z,sm=new z,rm=new Jt,Du=new z(1,0,0),Nu=new z(0,1,0),Fu=new z(0,0,1),Uu={type:"added"},am={type:"removed"},Gs={type:"childadded",child:null},al={type:"childremoved",child:null},gt=class s extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new z,t=new Gn,n=new Jt,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new je}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Nu,e)}rotateZ(e){return this.rotateOnAxis(Fu,e)}translateOnAxis(e,t){return Lu.copy(e).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Nu,e)}translateZ(e){return this.translateOnAxis(Fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qa.copy(e):qa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Ir,qa,this.up):_i.lookAt(qa,Ir,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),zs.setFromRotationMatrix(_i),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uu),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(am),al.child=e,this.dispatchEvent(al),al.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uu),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,sm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,rm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),u=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gt.DEFAULT_UP=new z(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},om={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let m of e.hand.values()){let b=t.getJointPose(m,n),g=this._getHandJoint(l,m);b!==null&&(g.matrix.fromArray(b.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=b.radius),g.visible=b!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,p=.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(om)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function ol(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=rh(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ol(a,r,e+1/3),this.g=ol(a,r,e),this.b=ol(a,r,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=Yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return et.workingToColorSpace(an.copy(this),e),Math.round(it(an.r*255,0,255))*65536+Math.round(it(an.g*255,0,255))*256+Math.round(it(an.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(an.copy(this),t);let n=an.r,i=an.g,r=an.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=yt){et.workingToColorSpace(an.copy(this),e);let t=an.r,n=an.g,i=an.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(Xa);let n=Gr(Hi.h,Xa.h,t),i=Gr(Hi.s,Xa.s,t),r=Gr(Hi.l,Xa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Te;Te.NAMES=Yf;var jr=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Kr=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},jn=new z,vi=new z,cl=new z,yi=new z,Hs=new z,Vs=new z,Ou=new z,ll=new z,hl=new z,ul=new z,fl=new dt,dl=new dt,pl=new dt,ji=class s{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jn.subVectors(e,t),i.cross(jn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){jn.subVectors(i,t),vi.subVectors(n,t),cl.subVectors(e,t);let a=jn.dot(jn),o=jn.dot(vi),c=jn.dot(cl),l=vi.dot(vi),h=vi.dot(cl),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(l*c-o*h)*d,p=(a*h-o*c)*d;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yi.x),c.addScaledVector(a,yi.y),c.addScaledVector(o,yi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return fl.setScalar(0),dl.setScalar(0),pl.setScalar(0),fl.fromBufferAttribute(e,t),dl.fromBufferAttribute(e,n),pl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(fl,r.x),a.addScaledVector(dl,r.y),a.addScaledVector(pl,r.z),a}static isFrontFacing(e,t,n,i){return jn.subVectors(n,t),vi.subVectors(e,t),jn.cross(vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),jn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Hs.subVectors(i,n),Vs.subVectors(r,n),ll.subVectors(e,n);let c=Hs.dot(ll),l=Vs.dot(ll);if(c<=0&&l<=0)return t.copy(n);hl.subVectors(e,i);let h=Hs.dot(hl),f=Vs.dot(hl);if(h>=0&&f<=h)return t.copy(i);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Hs,a);ul.subVectors(e,r);let u=Hs.dot(ul),p=Vs.dot(ul);if(p>=0&&u<=p)return t.copy(r);let m=u*l-c*p;if(m<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(Vs,o);let b=h*p-u*f;if(b<=0&&f-h>=0&&u-p>=0)return Ou.subVectors(r,i),o=(f-h)/(f-h+(u-p)),t.copy(i).addScaledVector(Ou,o);let g=1/(b+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Hs,a).addScaledVector(Vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fn=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(r,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ja.copy(n.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),Ka.subVectors(this.max,Lr),Ws.subVectors(e.a,Lr),qs.subVectors(e.b,Lr),Xs.subVectors(e.c,Lr),Vi.subVectors(qs,Ws),Wi.subVectors(Xs,qs),os.subVectors(Ws,Xs);let t=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-os.z,os.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,os.z,0,-os.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-os.y,os.x,0];return!ml(t,Ws,qs,Xs,Ka)||(t=[1,0,0,0,1,0,0,0,1],!ml(t,Ws,qs,Xs,Ka))?!1:(Ja.crossVectors(Vi,Wi),t=[Ja.x,Ja.y,Ja.z],ml(t,Ws,qs,Xs,Ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mi=[new z,new z,new z,new z,new z,new z,new z,new z],Kn=new z,ja=new Fn,Ws=new z,qs=new z,Xs=new z,Vi=new z,Wi=new z,os=new z,Lr=new z,Ka=new z,Ja=new z,cs=new z;function ml(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){cs.fromArray(s,r);let o=i.x*Math.abs(cs.x)+i.y*Math.abs(cs.y)+i.z*Math.abs(cs.z),c=e.dot(cs),l=t.dot(cs),h=n.dot(cs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var zt=new z,Ya=new Xe,cm=0,$e=class extends Yn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ih,this.updateRanges=[],this.gpuType=Un,this.version=0,this._normalizationScale=e!==void 0?Fc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):oh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ch(e,this.array)}};var Jr=class extends $e{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Yr=class extends $e{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends $e{constructor(e,t,n){super(new Float32Array(e),t,n)}},lm=new Fn,Dr=new z,gl=new z,Yt=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):lm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);let t=Dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Dr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(gl)),this.expandByPoint(Dr.copy(e.center).sub(gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hm=0,kn=new Ue,bl=new gt,js=new z,Dn=new Fn,Nr=new Fn,Kt=new z,Ct=class s extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fp(e)?Yr:Jr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(Dn.min,Nr.min),Dn.expandByPoint(Kt),Kt.addVectors(Dn.max,Nr.max),Dn.expandByPoint(Kt)):(Dn.expandByPoint(Nr.min),Dn.expandByPoint(Nr.max))}Dn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Kt.fromBufferAttribute(o,l),c&&(js.fromBufferAttribute(e,l),Kt.add(js)),i=Math.max(i,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $e(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new z,c[I]=new z;let h=new z,f=new z,d=new z,u=new Xe,p=new Xe,m=new Xe,b=new z,g=new z;function v(I,C,D){l[I]=l[C]=l[D]=1,h.fromBufferAttribute(n,I),f.fromBufferAttribute(n,C),d.fromBufferAttribute(n,D),u.fromBufferAttribute(r,I),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,D),f.sub(h),d.sub(h),p.sub(u),m.sub(u);let N=1/(p.x*m.y-m.x*p.y);isFinite(N)&&(b.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(N),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(N),o[I].add(b),o[C].add(b),o[D].add(b),c[I].add(g),c[C].add(g),c[D].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,C=A.length;I<C;++I){let D=A[I],N=D.start,G=D.count;for(let P=N,U=N+G;P<U;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let _=new z,w=new z,M=new z,x=new z;function y(I){M.fromBufferAttribute(i,I),x.copy(M);let C=o[I];_.copy(C),_.sub(M.multiplyScalar(M.dot(C))).normalize(),w.crossVectors(x,C);let N=w.dot(c[I])<0?-1:1;a.setXYZW(I,_.x,_.y,_.z,N)}for(let I=0,C=n.count;I<C;++I)l[I]&&y(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new $e(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new z,r=new z,a=new z,o=new z,c=new z,l=new z,h=new z,f=new z;if(e)for(let d=0,u=e.count;d<u;d+=3){let p=e.getX(d+0),m=e.getX(d+1),b=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,b),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(b,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h),u=0,p=0;for(let m=0,b=c.length;m<b;m++){o.isInterleavedBufferAttribute?u=c[m]*o.data.stride+o.offset:u=c[m]*h;for(let g=0;g<h;g++)d[p++]=l[u++]}return new $e(d,h,f)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let d=l[h],u=e(d,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let u=l[f];h.push(u.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ar=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ih,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ku(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ku(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function ku(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=ui()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var fn=new z,or=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Fc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Wr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new $e(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Wr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):oh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ch(e,this.data.array)}},xl=new z,um=new z,fm=new je,Jn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=xl.subVectors(n,t).cross(um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(xl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fm.getNormalMatrix(e),i=this.coplanarPoint(xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},dm=0,mn=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Qi,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Bl,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Jn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Si=new z,_l=new z,Za=new z,$a=new z,bs=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_l.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),$a.copy(this.origin).sub(_l);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Za),o=$a.dot(this.direction),c=-$a.dot(Za),l=$a.lengthSq(),h=Math.abs(1-a*a),f,d,u,p;if(h>0)if(f=a*c-o,d=a*o-c,p=r*h,f>=0)if(d>=-p)if(d<=p){let m=1/h;f*=m,d*=m,u=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d<=-p?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=p?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(_l).addScaledVector(Za,d),u}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);let n=Si.dot(this.direction),i=Si.dot(Si)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,u=e.z-a.z,p=t.x-a.x,m=t.y-a.y,b=t.z-a.z,g=n.x-a.x,v=n.y-a.y,A=n.z-a.z,_=Math.abs(c),w=Math.abs(l),M=Math.abs(h),x,y,I,C,D,N,G,P,U,J,Y,W;if(_>=w&&_>=M?(I=c,N=f,U=p,W=g,c>=0?(x=l,y=h,C=d,D=u,G=m,P=b,J=v,Y=A):(x=h,y=l,C=u,D=d,G=b,P=m,J=A,Y=v)):w>=M?(I=l,N=d,U=m,W=v,l>=0?(x=h,y=c,C=u,D=f,G=b,P=p,J=A,Y=g):(x=c,y=h,C=f,D=u,G=p,P=b,J=g,Y=A)):(I=h,N=u,U=b,W=A,h>=0?(x=c,y=l,C=f,D=d,G=p,P=m,J=g,Y=v):(x=l,y=c,C=d,D=f,G=m,P=p,J=v,Y=g)),I===0)return null;let B=x/I,X=y/I,$=1/I,ye=C-B*N,Me=D-X*N,ee=G-B*U,_e=P-X*U,he=J-B*W,Le=Y-X*W,Se=he*_e-Le*ee,ze=ye*Le-Me*he,Je=ee*Me-_e*ye;if(i){if(Se<0||ze<0||Je<0)return null}else if((Se<0||ze<0||Je<0)&&(Se>0||ze>0||Je>0))return null;let Be=Se+ze+Je;if(Be===0)return null;let qe=$*(Se*N+ze*U+Je*W);return(Be>0?qe<0:qe>0)?null:this.at(qe/Be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},on=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bu=new Ue,ls=new bs,Qa=new Yt,zu=new z,eo=new z,to=new z,no=new z,vl=new z,io=new z,Gu=new z,so=new z,At=class extends gt{constructor(e=new Ct,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){io.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(vl.fromBufferAttribute(f,e),a?io.addScaledVector(vl,h):io.addScaledVector(vl.sub(t),h))}t.add(io)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(Qa.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Qa,zu)===null||ls.origin.distanceToSquared(zu)>(e.far-e.near)**2))&&(Bu.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Bu),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,m=d.length;p<m;p++){let b=d[p],g=a[b.materialIndex],v=Math.max(b.start,u.start),A=Math.min(o.count,Math.min(b.start+b.count,u.start+u.count));for(let _=v,w=A;_<w;_+=3){let M=o.getX(_),x=o.getX(_+1),y=o.getX(_+2);i=ro(this,g,e,n,l,h,f,M,x,y),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{let p=Math.max(0,u.start),m=Math.min(o.count,u.start+u.count);for(let b=p,g=m;b<g;b+=3){let v=o.getX(b),A=o.getX(b+1),_=o.getX(b+2);i=ro(this,a,e,n,l,h,f,v,A,_),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,m=d.length;p<m;p++){let b=d[p],g=a[b.materialIndex],v=Math.max(b.start,u.start),A=Math.min(c.count,Math.min(b.start+b.count,u.start+u.count));for(let _=v,w=A;_<w;_+=3){let M=_,x=_+1,y=_+2;i=ro(this,g,e,n,l,h,f,M,x,y),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{let p=Math.max(0,u.start),m=Math.min(c.count,u.start+u.count);for(let b=p,g=m;b<g;b+=3){let v=b,A=b+1,_=b+2;i=ro(this,a,e,n,l,h,f,v,A,_),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}}};function pm(s,e,t,n,i,r,a,o){let c;if(e.side===Qt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===li,o),c===null)return null;so.copy(o),so.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(so);return l<t.near||l>t.far?null:{distance:l,point:so.clone(),object:s}}function ro(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,eo),s.getVertexPosition(c,to),s.getVertexPosition(l,no);let h=pm(s,e,t,n,eo,to,no,Gu);if(h){let f=new z;ji.getBarycoord(Gu,eo,to,no,f),i&&(h.uv=ji.getInterpolatedAttribute(i,o,c,l,f,new Xe)),r&&(h.uv1=ji.getInterpolatedAttribute(r,o,c,l,f,new Xe)),a&&(h.normal=ji.getInterpolatedAttribute(a,o,c,l,f,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new z,materialIndex:0};ji.getNormal(eo,to,no,d.normal),h.face=d,h.barycoord=f}return h}var Fr=new dt,Hu=new dt,Vu=new dt,mm=new dt,Wu=new Ue,ao=new z,yl=new Yt,qu=new Ue,Ml=new bs,xs=class extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tl,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ao),this.boundingBox.expandByPoint(ao)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ao),this.boundingSphere.expandByPoint(ao)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yl.copy(this.boundingSphere),yl.applyMatrix4(i),e.ray.intersectsSphere(yl)!==!1&&(qu.copy(i).invert(),Ml.copy(e.ray).applyMatrix4(qu),!(this.boundingBox!==null&&Ml.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ml)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ff?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Hu.fromBufferAttribute(i.attributes.skinIndex,e),Vu.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Fr.copy(t),t.set(0,0,0,0)):(Fr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Fr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Vu.getComponent(r);if(a!==0){let o=Hu.getComponent(r);Wu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(mm.copy(Fr).applyMatrix4(Wu),a)}}return t.isVector4&&(t.w=Fr.w),t.applyMatrix4(this.bindMatrixInverse)}},cr=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},lr=class extends Vt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Nt,h=Nt,f,d){super(null,a,o,c,l,h,i,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xu=new Ue,gm=new Ue,_s=class s{constructor(e=[],t=[]){this.uuid=ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:gm;Xu.multiplyMatrices(o,t[r]),Xu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new lr(t,e,e,Vn,Un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Fe("Skeleton: No bone found with UUID:",r),a=new cr),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ei=class extends $e{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ks=new Ue,ju=new Ue,oo=[],Ku=new Fn,bm=new Ue,Ur=new At,Or=new Yt,Zn=class extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ei(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),Ku.copy(e.boundingBox).applyMatrix4(Ks),this.boundingBox.union(Ku)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),Or.copy(e.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(Or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),e.ray.intersectsSphere(Or)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ks),ju.multiplyMatrices(n,Ks),Ur.matrixWorld=ju,Ur.raycast(e,oo);for(let a=0,o=oo.length;a<o;a++){let c=oo[a];c.instanceId=r,c.object=this,t.push(c)}oo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ei(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new lr(new Float32Array(i*this.count),i,this.count,$o,Un));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hs=new Yt,xm=new Xe(.5,.5),co=new z,Ji=class{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,r=new Jn,a=new Jn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],u=r[7],p=r[8],m=r[9],b=r[10],g=r[11],v=r[12],A=r[13],_=r[14],w=r[15];if(i[0].setComponents(l-a,u-h,g-p,w-v).normalize(),i[1].setComponents(l+a,u+h,g+p,w+v).normalize(),i[2].setComponents(l+o,u+f,g+m,w+A).normalize(),i[3].setComponents(l-o,u-f,g-m,w-A).normalize(),n)i[4].setComponents(c,d,b,_).normalize(),i[5].setComponents(l-c,u-d,g-b,w-_).normalize();else if(i[4].setComponents(l-c,u-d,g-b,w-_).normalize(),t===zn)i[5].setComponents(l+c,u+d,g+b,w+_).normalize();else if(t===tr)i[5].setComponents(c,d,b,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);let t=xm.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(co.x=i.normal.x>0?e.max.x:e.min.x,co.y=i.normal.y>0?e.max.y:e.min.y,co.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ju=new Ue,Ro=class s{constructor(){this.coordinateSystem=zn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];Ju.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ji),n[i].setFromProjectionMatrix(Ju,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ji),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var hr=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Co=new z,Po=new z,Yu=new Ue,kr=new bs,lo=new Yt,Sl=new z,Zu=new z,vs=class extends gt{constructor(e=new Ct,t=new hr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Co.fromBufferAttribute(t,i-1),Po.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Co.distanceTo(Po);e.setAttribute("lineDistance",new ft(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(i),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;Yu.copy(i).invert(),kr.copy(e.ray).applyMatrix4(Yu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=u,b=p-1;m<b;m+=l){let g=h.getX(m),v=h.getX(m+1),A=ho(this,e,kr,c,g,v,m);A&&t.push(A)}if(this.isLineLoop){let m=h.getX(p-1),b=h.getX(u),g=ho(this,e,kr,c,m,b,p-1);g&&t.push(g)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let m=u,b=p-1;m<b;m+=l){let g=ho(this,e,kr,c,m,m+1,m);g&&t.push(g)}if(this.isLineLoop){let m=ho(this,e,kr,c,p-1,u,p-1);m&&t.push(m)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ho(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Co.fromBufferAttribute(o,i),Po.fromBufferAttribute(o,r),t.distanceSqToSegment(Co,Po,Sl,Zu)>n)return;Sl.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Sl);if(!(l<e.near||l>e.far))return{distance:l,point:Zu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var $u=new z,Qu=new z,Zr=class extends vs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)$u.fromBufferAttribute(t,i),Qu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$u.distanceTo(Qu);e.setAttribute("lineDistance",new ft(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},$r=class extends vs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ur=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ef=new Ue,Rl=new bs,uo=new Yt,fo=new z,ys=class extends gt{constructor(e=new Ct,t=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(i),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;ef.copy(i).invert(),Rl.copy(e.ray).applyMatrix4(ef);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let p=d,m=u;p<m;p++){let b=l.getX(p);fo.fromBufferAttribute(f,b),tf(fo,b,c,i,e,t,this)}}else{let d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let p=d,m=u;p<m;p++)fo.fromBufferAttribute(f,p),tf(fo,p,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function tf(s,e,t,n,i,r,a){let o=Rl.distanceSqToPoint(s);if(o<t){let c=new z;Rl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Qr=class extends Vt{constructor(e=[],t=Ps,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ea=class extends Vt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ri=class extends Vt{constructor(e,t,n=$n,i,r,a,o=Nt,c=Nt,l,h=Ti,f=1){if(h!==Ti&&h!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ta=class extends Ri{constructor(e,t=$n,n=Ps,i,r,a=Nt,o=Nt,c,l=Ti){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},na=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},fr=class s extends Ct{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],d=0,u=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(f,2));function p(m,b,g,v,A,_,w,M,x,y,I){let C=_/x,D=w/y,N=_/2,G=w/2,P=M/2,U=x+1,J=y+1,Y=0,W=0,B=new z;for(let X=0;X<J;X++){let $=X*D-G;for(let ye=0;ye<U;ye++){let Me=ye*C-N;B[m]=Me*v,B[b]=$*A,B[g]=P,l.push(B.x,B.y,B.z),B[m]=0,B[b]=0,B[g]=M>0?1:-1,h.push(B.x,B.y,B.z),f.push(ye/x),f.push(1-X/y),Y+=1}}for(let X=0;X<y;X++)for(let $=0;$<x;$++){let ye=d+$+U*X,Me=d+$+U*(X+1),ee=d+($+1)+U*(X+1),_e=d+($+1)+U*X;c.push(ye,Me,_e),c.push(Me,ee,_e),W+=6}o.addGroup(u,W,I),u+=W,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ms=class s extends Ct{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new z,h=new Xe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let u=n+f/t*i;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yi=class s extends Ct{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],d=[],u=[],p=0,m=[],b=n/2,g=0;v(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ft(f,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(u,2));function v(){let _=new z,w=new z,M=0,x=(t-e)/n;for(let y=0;y<=r;y++){let I=[],C=y/r,D=C*(t-e)+e;for(let N=0;N<=i;N++){let G=N/i,P=G*c+o,U=Math.sin(P),J=Math.cos(P);w.x=D*U,w.y=-C*n+b,w.z=D*J,f.push(w.x,w.y,w.z),_.set(U,x,J).normalize(),d.push(_.x,_.y,_.z),u.push(G,1-C),I.push(p++)}m.push(I)}for(let y=0;y<i;y++)for(let I=0;I<r;I++){let C=m[I][y],D=m[I+1][y],N=m[I+1][y+1],G=m[I][y+1];(e>0||I!==0)&&(h.push(C,D,G),M+=3),(t>0||I!==r-1)&&(h.push(D,N,G),M+=3)}l.addGroup(g,M,0),g+=M}function A(_){let w=p,M=new Xe,x=new z,y=0,I=_===!0?e:t,C=_===!0?1:-1;for(let N=1;N<=i;N++)f.push(0,b*C,0),d.push(0,C,0),u.push(.5,.5),p++;let D=p;for(let N=0;N<=i;N++){let P=N/i*c+o,U=Math.cos(P),J=Math.sin(P);x.x=I*J,x.y=b*C,x.z=I*U,f.push(x.x,x.y,x.z),d.push(0,C,0),M.x=U*.5+.5,M.y=J*.5*C+.5,u.push(M.x,M.y),p++}for(let N=0;N<i;N++){let G=w+N,P=D+N;_===!0?h.push(P,P+1,G):h.push(P+1,P,G),y+=3}l.addGroup(g,y,_===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Io=class s extends Ct{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let A=new z,_=new z,w=new z;for(let M=0;M<t.length;M+=3)u(t[M+0],A),u(t[M+1],_),u(t[M+2],w),c(A,_,w,v)}function c(v,A,_,w){let M=w+1,x=[];for(let y=0;y<=M;y++){x[y]=[];let I=v.clone().lerp(_,y/M),C=A.clone().lerp(_,y/M),D=M-y;for(let N=0;N<=D;N++)N===0&&y===M?x[y][N]=I:x[y][N]=I.clone().lerp(C,N/D)}for(let y=0;y<M;y++)for(let I=0;I<2*(M-y)-1;I++){let C=Math.floor(I/2);I%2===0?(d(x[y][C+1]),d(x[y+1][C]),d(x[y][C])):(d(x[y][C+1]),d(x[y+1][C+1]),d(x[y+1][C]))}}function l(v){let A=new z;for(let _=0;_<r.length;_+=3)A.x=r[_+0],A.y=r[_+1],A.z=r[_+2],A.normalize().multiplyScalar(v),r[_+0]=A.x,r[_+1]=A.y,r[_+2]=A.z}function h(){let v=new z;for(let A=0;A<r.length;A+=3){v.x=r[A+0],v.y=r[A+1],v.z=r[A+2];let _=b(v)/2/Math.PI+.5,w=g(v)/Math.PI+.5;a.push(_,1-w)}p(),f()}function f(){for(let v=0;v<a.length;v+=6){let A=a[v+0],_=a[v+2],w=a[v+4],M=Math.max(A,_,w),x=Math.min(A,_,w);M>.9&&x<.1&&(A<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function u(v,A){let _=v*3;A.x=e[_+0],A.y=e[_+1],A.z=e[_+2]}function p(){let v=new z,A=new z,_=new z,w=new z,M=new Xe,x=new Xe,y=new Xe;for(let I=0,C=0;I<r.length;I+=9,C+=6){v.set(r[I+0],r[I+1],r[I+2]),A.set(r[I+3],r[I+4],r[I+5]),_.set(r[I+6],r[I+7],r[I+8]),M.set(a[C+0],a[C+1]),x.set(a[C+2],a[C+3]),y.set(a[C+4],a[C+5]),w.copy(v).add(A).add(_).divideScalar(3);let D=b(w);m(M,C+0,v,D),m(x,C+2,A,D),m(y,C+4,_,D)}}function m(v,A,_,w){w<0&&v.x===1&&(a[A]=v.x-1),_.x===0&&_.z===0&&(a[A]=w/2/Math.PI+.5)}function b(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var dr=class s extends Io{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Zi=class s extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,f=e/o,d=t/c,u=[],p=[],m=[],b=[];for(let g=0;g<h;g++){let v=g*d-a;for(let A=0;A<l;A++){let _=A*f-r;p.push(_,-v,0),m.push(0,0,1),b.push(A/o),b.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){let A=v+l*g,_=v+l*(g+1),w=v+1+l*(g+1),M=v+1+l*g;u.push(A,_,M),u.push(_,w,M)}this.setIndex(u),this.setAttribute("position",new ft(p,3)),this.setAttribute("normal",new ft(m,3)),this.setAttribute("uv",new ft(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},ia=class s extends Ct{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],f=e,d=(t-e)/i,u=new z,p=new Xe;for(let m=0;m<=i;m++){for(let b=0;b<=n;b++){let g=r+b/n*a;u.x=f*Math.cos(g),u.y=f*Math.sin(g),c.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,h.push(p.x,p.y)}f+=d}for(let m=0;m<i;m++){let b=m*(n+1);for(let g=0;g<n;g++){let v=g+b,A=v,_=v+n+1,w=v+n+2,M=v+1;o.push(A,_,M),o.push(_,w,M)}}this.setIndex(o),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var sa=class s extends Ct{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new z,d=new z,u=[],p=[],m=[],b=[];for(let g=0;g<=n;g++){let v=[],A=g/n,_=a+A*o,w=e*Math.cos(_),M=Math.sqrt(e*e-w*w),x=0;g===0&&a===0?x=.5/t:g===n&&c===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){let I=y/t,C=i+I*r;f.x=-M*Math.cos(C),f.y=w,f.z=M*Math.sin(C),p.push(f.x,f.y,f.z),d.copy(f).normalize(),m.push(d.x,d.y,d.z),b.push(I+x,1-A),v.push(l++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let A=h[g][v+1],_=h[g][v],w=h[g+1][v],M=h[g+1][v+1];(g!==0||a>0)&&u.push(A,_,M),(g!==n-1||c<Math.PI)&&u.push(_,w,M)}this.setIndex(u),this.setAttribute("position",new ft(p,3)),this.setAttribute("normal",new ft(m,3)),this.setAttribute("uv",new ft(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ds(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(nf(i))i.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(nf(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function hn(s){let e={};for(let t=0;t<s.length;t++){let n=Ds(s[t]);for(let i in n)e[i]=n[i]}return e}function nf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function _m(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function lh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Zf={clone:Ds,merge:hn},vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$t=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=_m(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Te().setHex(i.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new je().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Lo=class extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ss=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gn=class extends Ss{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ds('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ds('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var bn=class extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=qo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Do=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},No=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Br(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Mm(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function sf(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Sm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var oi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fo=class extends oi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:us,endingEnd:us}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case fs:r=e,o=2*t-n;break;case Hr:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fs:a=e,c=2*n-t;break;case Hr:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(n-t)/(i-t),m=p*p,b=m*p,g=-d*b+2*d*m-d*p,v=(1+d)*b+(-1.5-2*d)*m+(-.5+d)*p+1,A=(-1-u)*b+(1.5+u)*m+.5*p,_=u*b-u*m;for(let w=0;w!==o;++w)r[w]=g*a[h+w]+v*a[l+w]+A*a[c+w]+_*a[f+w];return r}},ra=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*f+a[c+d]*h;return r}},Uo=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Oo=class extends oi{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-t)/(i-t),m=1-p;for(let b=0;b!==o;++b)r[b]=a[l+b]*m+a[c+b]*p;return r}let d=o*2,u=e-1;for(let p=0;p!==o;++p){let m=a[l+p],b=a[c+p],g=u*d+p*2,v=f[g],A=f[g+1],_=e*d+p*2,w=h[_],M=h[_+1],x=Am(n,t,v,w,i);r[p]=$f(x,m,A,M,b)}return r}};function $f(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function wm(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Am(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=$f(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let c=wm(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var En=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xi(t,this.TimeBufferType),this.values=Xi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xi(e.times,Array),values:Xi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Br(e.settings)&&(n.settings={inTangents:Xi(e.settings.inTangents,Array),outTangents:Xi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ps:t=this.InterpolantFactoryMethodDiscrete;break;case ms:t=this.InterpolantFactoryMethodLinear;break;case go:t=this.InterpolantFactoryMethodSmooth;break;case El:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return ms;case this.InterpolantFactoryMethodSmooth:return go;case this.InterpolantFactoryMethodBezier:return El}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Br(this.settings)&&(rf(this.settings.inTangents,e),rf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Br(this.settings)&&(af(this.settings.inTangents,e),af(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){We("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){We("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Up(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){We("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===go,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let f=o*n,d=f-n,u=f+n;for(let p=0;p!==n;++p){let m=t[f+p];if(m!==t[d+p]||m!==t[u+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[f+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Br(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function rf(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function af(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=ms;var Ci=class extends En{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=ps;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends En{constructor(e,t,n,i){super(e,t,n,i)}};aa.prototype.ValueTypeName="color";var Pi=class extends En{constructor(e,t,n,i){super(e,t,n,i)}};Pi.prototype.ValueTypeName="number";var ko=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Jt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ii=class extends En{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ko(this.times,this.values,this.getValueSize(),e)}};Ii.prototype.ValueTypeName="quaternion";Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends En{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=ps;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends En{constructor(e,t,n,i){super(e,t,n,i)}};$i.prototype.ValueTypeName="vector";var ws=class{constructor(e="",t=-1,n=[],i=Nc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ui(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Em(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(En.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Mm(c);c=sf(c,1,h),l=sf(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Pi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let f=h[1],d=i[f];d||(i[f]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Tm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pi;case"vector":case"vector2":case"vector3":case"vector4":return $i;case"color":return aa;case"quaternion":return Ii;case"bool":case"boolean":return Ci;case"string":return Li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Em(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Tm(s.type);if(s.times===void 0){let n=[],i=[];Sm(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Br(s.settings)&&(t.settings={inTangents:Xi(s.settings.inTangents,Float32Array),outTangents:Xi(s.settings.outTangents,Float32Array)}),t}var ai={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(of(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!of(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function of(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Bo=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let u=l[f],p=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qf=new Bo,ci=class{constructor(e){this.manager=e!==void 0?e:Qf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ci.DEFAULT_MATERIAL_NAME="__DEFAULT";var wi={},Cl=class extends Error{constructor(e,t){super(e),this.response=t}},pr=class extends ci{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ai.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:n,onError:i});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=wi[e],f=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=d?parseInt(d):0,p=u!==0,m=0,b=new ReadableStream({start(g){v();function v(){f.read().then(({done:A,value:_})=>{if(A)g.close();else{m+=_.byteLength;let w=new ProgressEvent("progress",{lengthComputable:p,loaded:m,total:u});for(let M=0,x=h.length;M<x;M++){let y=h[M];y.onProgress&&y.onProgress(w)}g.enqueue(_),v()}},A=>{g.error(A)})}}});return new Response(b)}else throw new Cl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,u=new TextDecoder(d);return l.arrayBuffer().then(p=>u.decode(p))}}}).then(l=>{ai.add(`file:${e}`,l);let h=wi[e];delete wi[e];for(let f=0,d=h.length;f<d;f++){let u=h[f];u.onLoad&&u.onLoad(l)}}).catch(l=>{let h=wi[e];if(h===void 0)throw this.manager.itemError(e),l;delete wi[e];for(let f=0,d=h.length;f<d;f++){let u=h[f];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Js=new WeakMap,zo=class extends ci{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ai.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Js.get(a);f===void 0&&(f=[],Js.set(a,f)),f.push({onLoad:t,onError:i})}return a}let o=nr("img");function c(){h(),t&&t(this);let f=Js.get(this)||[];for(let d=0;d<f.length;d++){let u=f[d];u.onLoad&&u.onLoad(this)}Js.delete(this),r.manager.itemEnd(e)}function l(f){h(),i&&i(f),ai.remove(`image:${e}`);let d=Js.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(f)}Js.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ai.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var oa=class extends ci{constructor(e){super(e)}load(e,t,n,i){let r=new Vt,a=new zo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},As=class extends gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ca=class extends As{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},wl=new Ue,cf=new z,lf=new z,mr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ji,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(cf),lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(wl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===tr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},po=new z,mo=new Jt,ri=new z,la=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(po,mo,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(po,mo,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new z,hf=new Xe,uf=new Xe,Gt=class extends la{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,hf,uf),t.subVectors(uf,hf)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(zr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pl=class extends mr{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=gs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ha=class extends As{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Pl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Il=class extends mr{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0}},ua=class extends As{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Il}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ts=class extends la{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ll=class extends mr{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Es=class extends As{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Ll}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Di=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Al=new WeakMap,fa=class extends ci{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ai.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Al.has(a)===!0?(i&&i(Al.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ai.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Al.set(c,l),ai.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ai.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ys=-90,Zs=1,gr=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Gt(Ys,Zs,e,t);i.layers=this.layers,this.add(i);let r=new Gt(Ys,Zs,e,t);r.layers=this.layers,this.add(r);let a=new Gt(Ys,Zs,e,t);a.layers=this.layers,this.add(a);let o=new Gt(Ys,Zs,e,t);o.layers=this.layers,this.add(o);let c=new Gt(Ys,Zs,e,t);c.layers=this.layers,this.add(c);let l=new Gt(Ys,Zs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Go=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ho=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Jt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;Jt.multiplyQuaternionsFlat(e,a,e,t,e,n),Jt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},hh="\\[\\]\\.:\\/",Rm=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",Cm="[^"+hh.replace("\\.","")+"]",Pm=/((?:WC+[\/:])*)/.source.replace("WC",uh),Im=/(WCOD+)?/.source.replace("WCOD",Cm),Lm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),Dm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),Nm=new RegExp("^"+Pm+Im+Lm+Dm+"$"),Fm=["material","materials","bones","map"],Dl=class{constructor(e,t,n){let i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rm,"")}static parseTrackName(e){let t=Nm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Fm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;We("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=Dl;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vo=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:us,endingEnd:us};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Dc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Of:for(let h=0,f=c.length;h!==f;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Nc:default:for(let h=0,f=c.length;h!==f;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===Uf;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Lc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=fs,i.endingEnd=fs):(e?i.endingStart=this.zeroSlopeAtStart?fs:us:i.endingStart=Hr,t?i.endingEnd=this.zeroSlopeAtEnd?fs:us:i.endingEnd=Hr)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},Um=new Float32Array(1),da=class extends Yn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let f=0;f!==r;++f){let d=i[f],u=d.name,p=h[u];if(p!==void 0)++p.referenceCount,a[f]=p;else{if(p=a[f],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,u));continue}let m=t&&t._propertyBindings[f].binding.parsedPath;p=new Ho(mt.create(n,u,m),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,u),a[f]=p}o[f].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let f=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete f[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ra(new Float32Array(2),new Float32Array(2),1,Um),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?ws.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Nc),c!==void 0){let f=c.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Vo(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?ws.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,f=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,f._cacheIndex=h,t[h]=f,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var bh=class bh{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};bh.prototype.isMatrix2=!0;var Nl=bh;function fh(s,e,t,n){let i=Om(n);switch(t){case Zl:return s*e;case $o:return s*e/i.components*i.byteLength;case Qo:return s*e/i.components*i.byteLength;case es:return s*e*2/i.components*i.byteLength;case ec:return s*e*2/i.components*i.byteLength;case $l:return s*e*3/i.components*i.byteLength;case Vn:return s*e*4/i.components*i.byteLength;case tc:return s*e*4/i.components*i.byteLength;case ga:case ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xa:case _a:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ic:case rc:return Math.max(s,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(s,8)*Math.max(e,8)/2;case ac:case oc:case lc:case hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cc:case va:case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case pc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case vc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Tc:case Ec:case Rc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Cc:case Pc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ya:case Ic:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Om(s){switch(s){case Rn:case jl:return{byteLength:1,components:1};case vr:case Kl:case Qn:return{byteLength:2,components:1};case Yo:case Zo:return{byteLength:2,components:4};case $n:case Jo:case Un:return{byteLength:4,components:1};case Jl:case Yl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function yd(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Bm(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,f=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=s.SHORT;else if(l instanceof Uint32Array)u=s.UNSIGNED_INT;else if(l instanceof Int32Array)u=s.INT;else if(l instanceof Int8Array)u=s.BYTE;else if(l instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(s.bindBuffer(l,o),f.length===0)s.bufferSubData(l,0,h);else{f.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<f.length;u++){let p=f[d],m=f[u];m.start<=p.start+p.count+1?p.count=Math.max(p.count,m.start+m.count-p.start):(++d,f[d]=m)}f.length=d+1;for(let u=0,p=f.length;u<p;u++){let m=f[u];s.bufferSubData(l,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gm=`#ifdef USE_ALPHAHASH
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
#endif`,Hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xm=`#ifdef USE_AOMAP
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
#endif`,jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
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
#endif`,Jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qm=`#ifdef USE_IRIDESCENCE
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
#endif`,eg=`#ifdef USE_BUMPMAP
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
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lg=`#define PI 3.141592653589793
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
} // validated`,hg=`vec3 transformedNormal = objectNormal;
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
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mg="gl_FragColor = linearToOutputTexel( gl_FragColor );",gg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bg=`#ifdef USE_ENVMAP
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
#endif`,xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
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
#endif`,Mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tg=`#ifdef USE_GRADIENTMAP
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
}`,Eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ug=`PhysicalMaterial material;
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
#endif`,Og=`uniform sampler2D dfgLUT;
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
}`,kg=`
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
#endif`,Bg=`#if defined( RE_IndirectDiffuse )
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
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jg=`#if defined( USE_POINTS_UV )
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
#endif`,Yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qg=`#if defined( USE_MORPHCOLORS )
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
#endif`,e0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
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
#endif`,n0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,c0=`#ifdef USE_NORMALMAP
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
#endif`,l0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w0=`float getShadowMask() {
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
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T0=`#ifdef USE_SKINNING
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
#endif`,E0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,C0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,N0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,B0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z0=`uniform sampler2D t2D;
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`uniform float backgroundBlurriness;
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
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
}`,X0=`#if DEPTH_PACKING == 3200
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
}`,j0=`#define DISTANCE
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
}`,K0=`#define DISTANCE
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`uniform float scale;
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
}`,$0=`uniform vec3 diffuse;
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
}`,Q0=`#include <common>
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
}`,eb=`uniform vec3 diffuse;
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
}`,tb=`#define LAMBERT
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
}`,nb=`#define LAMBERT
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
}`,ib=`#define MATCAP
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
}`,sb=`#define MATCAP
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
}`,rb=`#define NORMAL
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
}`,ab=`#define NORMAL
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
}`,ob=`#define PHONG
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
}`,cb=`#define PHONG
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
}`,lb=`#define STANDARD
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
}`,hb=`#define STANDARD
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
}`,ub=`#define TOON
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
}`,fb=`#define TOON
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
}`,db=`uniform float size;
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
}`,pb=`uniform vec3 diffuse;
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
}`,mb=`#include <common>
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
}`,gb=`uniform vec3 color;
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
}`,bb=`uniform float rotation;
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
}`,xb=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:zm,alphahash_pars_fragment:Gm,alphamap_fragment:Hm,alphamap_pars_fragment:Vm,alphatest_fragment:Wm,alphatest_pars_fragment:qm,aomap_fragment:Xm,aomap_pars_fragment:jm,batching_pars_vertex:Km,batching_vertex:Jm,begin_vertex:Ym,beginnormal_vertex:Zm,bsdfs:$m,iridescence_fragment:Qm,bumpmap_pars_fragment:eg,clipping_planes_fragment:tg,clipping_planes_pars_fragment:ng,clipping_planes_pars_vertex:ig,clipping_planes_vertex:sg,color_fragment:rg,color_pars_fragment:ag,color_pars_vertex:og,color_vertex:cg,common:lg,defaultnormal_vertex:hg,displacementmap_pars_vertex:ug,displacementmap_vertex:fg,emissivemap_fragment:dg,emissivemap_pars_fragment:pg,colorspace_fragment:mg,colorspace_pars_fragment:gg,envmap_fragment:bg,envmap_common_pars_fragment:xg,envmap_pars_fragment:_g,envmap_pars_vertex:vg,envmap_physical_pars_fragment:Ig,envmap_vertex:yg,fog_vertex:Mg,fog_pars_vertex:Sg,fog_fragment:wg,fog_pars_fragment:Ag,gradientmap_pars_fragment:Tg,lightmap_pars_fragment:Eg,lights_lambert_fragment:Rg,lights_lambert_pars_fragment:Cg,lights_pars_begin:Pg,lights_toon_fragment:Lg,lights_toon_pars_fragment:Dg,lights_phong_fragment:Ng,lights_phong_pars_fragment:Fg,lights_physical_fragment:Ug,lights_physical_pars_fragment:Og,lights_fragment_begin:kg,lights_fragment_maps:Bg,lights_fragment_end:zg,lightprobes_pars_fragment:Gg,logdepthbuf_fragment:Hg,logdepthbuf_pars_fragment:Vg,logdepthbuf_pars_vertex:Wg,logdepthbuf_vertex:qg,map_fragment:Xg,map_pars_fragment:jg,map_particle_fragment:Kg,map_particle_pars_fragment:Jg,metalnessmap_fragment:Yg,metalnessmap_pars_fragment:Zg,morphinstance_vertex:$g,morphcolor_vertex:Qg,morphnormal_vertex:e0,morphtarget_pars_vertex:t0,morphtarget_vertex:n0,normal_fragment_begin:i0,normal_fragment_maps:s0,normal_pars_fragment:r0,normal_pars_vertex:a0,normal_vertex:o0,normalmap_pars_fragment:c0,clearcoat_normal_fragment_begin:l0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:u0,iridescence_pars_fragment:f0,opaque_fragment:d0,packing:p0,premultiplied_alpha_fragment:m0,project_vertex:g0,dithering_fragment:b0,dithering_pars_fragment:x0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:y0,shadowmap_pars_vertex:M0,shadowmap_vertex:S0,shadowmask_pars_fragment:w0,skinbase_vertex:A0,skinning_pars_vertex:T0,skinning_vertex:E0,skinnormal_vertex:R0,specularmap_fragment:C0,specularmap_pars_fragment:P0,tonemapping_fragment:I0,tonemapping_pars_fragment:L0,transmission_fragment:D0,transmission_pars_fragment:N0,uv_pars_fragment:F0,uv_pars_vertex:U0,uv_vertex:O0,worldpos_vertex:k0,background_vert:B0,background_frag:z0,backgroundCube_vert:G0,backgroundCube_frag:H0,cube_vert:V0,cube_frag:W0,depth_vert:q0,depth_frag:X0,distance_vert:j0,distance_frag:K0,equirect_vert:J0,equirect_frag:Y0,linedashed_vert:Z0,linedashed_frag:$0,meshbasic_vert:Q0,meshbasic_frag:eb,meshlambert_vert:tb,meshlambert_frag:nb,meshmatcap_vert:ib,meshmatcap_frag:sb,meshnormal_vert:rb,meshnormal_frag:ab,meshphong_vert:ob,meshphong_frag:cb,meshphysical_vert:lb,meshphysical_frag:hb,meshtoon_vert:ub,meshtoon_frag:fb,points_vert:db,points_frag:pb,shadow_vert:mb,shadow_frag:gb,sprite_vert:bb,sprite_frag:xb},we={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},di={basic:{uniforms:hn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:hn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:hn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:hn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:hn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Te(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:hn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:hn([we.points,we.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:hn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:hn([we.common,we.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:hn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:hn([we.sprite,we.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:hn([we.common,we.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:hn([we.lights,we.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};di.physical={uniforms:hn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Uc={r:0,b:0,g:0},_b=new Ue,Md=new je;Md.set(-1,0,0,0,1,0,0,0,1);function vb(s,e,t,n,i,r){let a=new Te(0),o=i===!0?0:1,c,l,h=null,f=0,d=null;function u(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let _=v.backgroundBlurriness>0;A=e.get(A,_)}return A}function p(v){let A=!1,_=u(v);_===null?b(a,o):_&&_.isColor&&(b(_,1),A=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,A){let _=u(A);_&&_.isCubeTexture?(l===void 0&&(l=new At(new fr(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:Ds(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,M,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(_b.makeRotationFromEuler(A.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Md),l.material.toneMapped=et.getTransfer(_.colorSpace)!==ut,(h!==_||f!==_.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new At(new Zi(2,2),new $t({name:"BackgroundMaterial",uniforms:Ds(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=et.getTransfer(_.colorSpace)!==ut,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function b(v,A){v.getRGB(Uc,lh(s)),t.buffers.color.setClear(Uc.r,Uc.g,Uc.b,A,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,A=1){a.set(v),o=A,b(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,b(a,o)},render:p,addToRenderList:m,dispose:g}}function yb(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(D,N,G,P,U){let J=!1,Y=f(D,P,G,N);r!==Y&&(r=Y,l(r.object)),J=u(D,P,G,U),J&&p(D,P,G,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,_(D,N,G,P),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return s.createVertexArray()}function l(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function f(D,N,G,P){let U=P.wireframe===!0,J=n[N.id];J===void 0&&(J={},n[N.id]=J);let Y=D.isInstancedMesh===!0?D.id:0,W=J[Y];W===void 0&&(W={},J[Y]=W);let B=W[G.id];B===void 0&&(B={},W[G.id]=B);let X=B[U];return X===void 0&&(X=d(c()),B[U]=X),X}function d(D){let N=[],G=[],P=[];for(let U=0;U<t;U++)N[U]=0,G[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:P,object:D,attributes:{},index:null}}function u(D,N,G,P){let U=r.attributes,J=N.attributes,Y=0,W=G.getAttributes();for(let B in W)if(W[B].location>=0){let $=U[B],ye=J[B];if(ye===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor)),$===void 0||$.attribute!==ye||ye&&$.data!==ye.data)return!0;Y++}return r.attributesNum!==Y||r.index!==P}function p(D,N,G,P){let U={},J=N.attributes,Y=0,W=G.getAttributes();for(let B in W)if(W[B].location>=0){let $=J[B];$===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&($=D.instanceColor));let ye={};ye.attribute=$,$&&$.data&&(ye.data=$.data),U[B]=ye,Y++}r.attributes=U,r.attributesNum=Y,r.index=P}function m(){let D=r.newAttributes;for(let N=0,G=D.length;N<G;N++)D[N]=0}function b(D){g(D,0)}function g(D,N){let G=r.newAttributes,P=r.enabledAttributes,U=r.attributeDivisors;G[D]=1,P[D]===0&&(s.enableVertexAttribArray(D),P[D]=1),U[D]!==N&&(s.vertexAttribDivisor(D,N),U[D]=N)}function v(){let D=r.newAttributes,N=r.enabledAttributes;for(let G=0,P=N.length;G<P;G++)N[G]!==D[G]&&(s.disableVertexAttribArray(G),N[G]=0)}function A(D,N,G,P,U,J,Y){Y===!0?s.vertexAttribIPointer(D,N,G,U,J):s.vertexAttribPointer(D,N,G,P,U,J)}function _(D,N,G,P){m();let U=P.attributes,J=G.getAttributes(),Y=N.defaultAttributeValues;for(let W in J){let B=J[W];if(B.location>=0){let X=U[W];if(X===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){let $=X.normalized,ye=X.itemSize,Me=e.get(X);if(Me===void 0)continue;let ee=Me.buffer,_e=Me.type,he=Me.bytesPerElement,Le=_e===s.INT||_e===s.UNSIGNED_INT||X.gpuType===Jo;if(X.isInterleavedBufferAttribute){let Se=X.data,ze=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,Je=X.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Be=0;Be<B.locationSize;Be++)g(B.location+Be,Se.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Be=0;Be<B.locationSize;Be++)b(B.location+Be);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Be=0;Be<B.locationSize;Be++)A(B.location+Be,ye/B.locationSize,_e,$,ze*he,(Je+ye/B.locationSize*Be)*he,Le)}else{if(X.isInstancedBufferAttribute){for(let Se=0;Se<B.locationSize;Se++)g(B.location+Se,X.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Se=0;Se<B.locationSize;Se++)b(B.location+Se);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Se=0;Se<B.locationSize;Se++)A(B.location+Se,ye/B.locationSize,_e,$,ye*he,ye/B.locationSize*Se*he,Le)}}else if(Y!==void 0){let $=Y[W];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(B.location,$);break;case 3:s.vertexAttrib3fv(B.location,$);break;case 4:s.vertexAttrib4fv(B.location,$);break;default:s.vertexAttrib1fv(B.location,$)}}}}v()}function w(){I();for(let D in n){let N=n[D];for(let G in N){let P=N[G];for(let U in P){let J=P[U];for(let Y in J)h(J[Y].object),delete J[Y];delete P[U]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;let N=n[D.id];for(let G in N){let P=N[G];for(let U in P){let J=P[U];for(let Y in J)h(J[Y].object),delete J[Y];delete P[U]}}delete n[D.id]}function x(D){for(let N in n){let G=n[N];for(let P in G){let U=G[P];if(U[D.id]===void 0)continue;let J=U[D.id];for(let Y in J)h(J[Y].object),delete J[Y];delete U[D.id]}}}function y(D){for(let N in n){let G=n[N],P=D.isInstancedMesh===!0?D.id:0,U=G[P];if(U!==void 0){for(let J in U){let Y=U[J];for(let W in Y)h(Y[W].object),delete Y[W];delete U[J]}delete G[P],Object.keys(G).length===0&&delete n[N]}}}function I(){C(),a=!0,r!==i&&(r=i,l(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:x,initAttributes:m,enableAttribute:b,disableUnusedAttributes:v}}function Mb(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Sb(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==Vn&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let y=x===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Rn&&x!==Un&&!y&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Fe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:b,maxAttributes:g,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:_,maxSamples:w,samples:M}}function wb(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Jn,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let p=f.clippingPlanes,m=f.clipIntersection,b=f.clipShadows,g=s.get(f);if(!i||p===null||p.length===0||r&&!b)r?h(null):l();else{let v=r?0:n,A=v*4,_=g.clippingState||null;c.value=_,_=h(p,d,A,u);for(let w=0;w!==A;++w)_[w]=t[w];g.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,p){let m=f!==null?f.length:0,b=null;if(m!==0){if(b=c.value,p!==!0||b===null){let g=u+m*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(b===null||b.length<g)&&(b=new Float32Array(g));for(let A=0,_=u;A!==m;++A,_+=4)a.copy(f[A]).applyMatrix4(v,o),a.normal.toArray(b,_),b[_+3]=a.constant}c.value=b,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,b}}var Ta=class extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Qr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fr(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Rs});r.uniforms.tEquirect.value=t;let a=new At(i,r),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=Ht),new gr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},ed=256,Ab=3,Tb=20,Sd=256,wd=16,Eb=3,Rb=new z,Cb=new Te,kc=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new gr(1,10,null),this._boxMesh=new At(new fr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Rb}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,u=c.autoClearDepth,p=c.autoClearStencil,m=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,m===null&&(e.background=c.getClearColor(Cb));let b=new gr(n,i,h);return b.position.copy(o),b.update(c,e),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=u,c.autoClearStencil=p,e.background=m,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ed,ah(e))}_fromTexture(e,t){e.mapping===Ps||e.mapping===xr?this._setSize(e.image.length===0?ed:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=td(e,!1,!1),n=Math.log2(e)-Ab;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=td(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ps||e.mapping===xr?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=nd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Pb(),this._integrationMaterial=Ib());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/wd);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-Eb)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Sd*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Lb());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function td(s,e,t){return new Ta(s,{minFilter:Hn,generateMipmaps:e,type:Qn,colorSpace:pn,depthBuffer:t})}function Ea(s,e,t){return new $t({name:s,uniforms:e,vertexShader:Qe.cube_vert,fragmentShader:t,side:Qt,blending:Rs,depthTest:!1,depthWrite:!1})}function Pb(){return Ea("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Sd}u

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
	`)}function Ib(){return Ea("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wd}},`

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
	`)}function Lb(){return Ea("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Tb}
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
	`)}function nd(){return Ea("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function id(){return Ea("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Db(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Xo||u===jo)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let m=new Ta(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",l),o(m.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,p=u===Xo||u===jo,m=u===Ps||u===xr;if(p||m){let b=t.get(d),g=b!==void 0?b.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new kc(s)),b=p?n.fromEquirectangular(d,b):n.fromCubemap(d,b),b.texture.pmremVersion=d.pmremVersion,t.set(d,b),b.texture;if(b!==void 0)return b.texture;{let v=d.image;return p&&v&&v.height>0||m&&v&&c(v)?(n===null&&(n=new kc(s)),b=p?n.fromEquirectangular(d):n.fromCubemap(d),b.texture.pmremVersion=d.pmremVersion,t.set(d,b),d.addEventListener("dispose",h),b.texture):null}}}return d}function o(d,u){return u===Xo?d.mapping=Ps:u===jo&&(d.mapping=xr),d}function c(d){let u=0,p=6;for(let m=0;m<p;m++)d[m]!==void 0&&u++;return u===p}function l(d){let u=d.target;u.removeEventListener("dispose",l);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Nb(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ds("WebGLRenderer: "+n+" extension not supported."),i}}}function Fb(s,e,t,n){let i={},r=new WeakMap,a=new FinalizationRegistry(p=>delete i[p]);function o(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let b in p.attributes)e.remove(p.attributes[b]);p.removeEventListener("dispose",o),delete i[p.id],a.unregister(p);let m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,m){return i[m.id]!==void 0||(m.addEventListener("dispose",o),i[m.id]=new WeakRef(m),a.register(m,m.id,m),t.memory.geometries++),m}function h(p){let m=p.attributes;for(let b in m)e.update(m[b],s.ARRAY_BUFFER)}function f(p){let m=p.index,b=p.attributes.position,g=0;if(b===void 0)return;let v=m!==null?m.array.length:b.array.length/3-1,A=b.count>=65535?Yr:Jr,_=new A(Math.ceil(v/3)*6,1),w=_.array;if(m!==null){let x=m.array;g=m.version;for(let y=0,I=0;y<v;y+=3){let C=x[y+0],D=x[y+1],N=x[y+2];w[I++]=C,w[I++]=D,w[I++]=D,w[I++]=N,w[I++]=N,w[I++]=C}}else{g=b.version;for(let x=0,y=0;x<v;x+=3){let I=x+0,C=x+1,D=x+2;w[y++]=I,w[y++]=C,w[y++]=C,w[y++]=D,w[y++]=D,w[y++]=I}}_.version=g;let M=r.get(p);M&&e.remove(M),r.set(p,_)}function d(p){let m=r.get(p);if(m){let b=p.index;b!==null&&m.version<b.version&&f(p)}else f(p);return r.get(p)}function u(){for(let p in i){let m=i[p].deref();m!==void 0&&c(m)}}return{get:l,update:h,getWireframeAttribute:d,dispose:u}}function Ub(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,u){u!==0&&(s.drawElementsInstanced(n,d,r,f*a,u),t.update(d,n,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let m=0;for(let b=0;b<u;b++)m+=d[b];t.update(m,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Ob(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function kb(s,e,t){let n=new WeakMap,i=new dt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let I=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,b=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],A=0;u===!0&&(A=1),p===!0&&(A=2),m===!0&&(A=3);let _=o.attributes.position.count*A,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let M=new Float32Array(_*w*4*f),x=new qr(M,_,w,f);x.type=Un,x.needsUpdate=!0;let y=A*4;for(let C=0;C<f;C++){let D=b[C],N=g[C],G=v[C],P=_*w*4*C;for(let U=0;U<D.count;U++){let J=U*y;u===!0&&(i.fromBufferAttribute(D,U),M[P+J+0]=i.x,M[P+J+1]=i.y,M[P+J+2]=i.z,M[P+J+3]=0),p===!0&&(i.fromBufferAttribute(N,U),M[P+J+4]=i.x,M[P+J+5]=i.y,M[P+J+6]=i.z,M[P+J+7]=0),m===!0&&(i.fromBufferAttribute(G,U),M[P+J+8]=i.x,M[P+J+9]=i.y,M[P+J+10]=i.z,M[P+J+11]=G.itemSize===4?i.w:1)}}d={count:f,texture:x,size:new Xe(_,w)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let u=0;for(let m=0;m<l.length;m++)u+=l[m];let p=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Bb(s,e,t,n,i){let r=new WeakMap;function a(l){let h=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var zb={[zl]:"LINEAR_TONE_MAPPING",[Gl]:"REINHARD_TONE_MAPPING",[Hl]:"CINEON_TONE_MAPPING",[ma]:"ACES_FILMIC_TONE_MAPPING",[Wl]:"AGX_TONE_MAPPING",[ql]:"NEUTRAL_TONE_MAPPING",[Vl]:"CUSTOM_TONE_MAPPING"};function Gb(s,e,t,n,i,r){let a=new Nn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Ct;h.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ft([0,2,0,0,2,0],2));let f=new Lo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new At(h,f),u=new Ts(-1,1,1,-1,0,1),p=null,m=null,b=!1,g,v=null,A=[],_=!1;this.setSize=function(w,M){a.setSize(w,M),o!==null&&o.setSize(w,M),c!==null&&c.setSize(w,M);for(let x=0;x<A.length;x++){let y=A[x];y.setSize&&y.setSize(w,M)}},this.setEffects=function(w){A=w,_=A.length>0&&A[0].isRenderPass===!0;let M=a.width,x=a.height;A.length>0&&o===null&&(o=new Nn(M,x,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),c=new Nn(M,x,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));let y=i===!0&&A.some(I=>I.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&l===null&&(l=new Ri(M,x),r===!0&&(l.format=Fi,l.type=Ls)),a.dispose(),a.depthTexture=y?l:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let I=0;I<A.length;I++){let C=A[I];C.setSize&&C.setSize(M,x),y&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(w,M){if(b||w.toneMapping===hi&&A.length===0)return!1;if(v=M,M!==null){let x=M.width,y=M.height;(a.width!==x||a.height!==y)&&this.setSize(x,y)}return _===!1&&w.setRenderTarget(a),g=w.toneMapping,w.toneMapping=hi,!0},this.hasRenderPass=function(){return _},this.end=function(w,M){w.toneMapping=g,b=!0;let x=a,y=o;for(let I=0;I<A.length;I++){let C=A[I];C.enabled!==!1&&(C.render(w,y,x,M),C.needsSwap!==!1&&(x=y,y=y===o?c:o))}if(p!==w.outputColorSpace||m!==w.toneMapping){p=w.outputColorSpace,m=w.toneMapping,f.defines={},et.getTransfer(p)===ut&&(f.defines.SRGB_TRANSFER="");let I=zb[m];I&&(f.defines[I]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(v),w.render(d,u),v=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Ad=new Vt,Td=new Ri(1,1),Ed=new ta(1),Rd=new qr,Cd=new Eo,Pd=new Qr,sd=[],rd=[],ad=new Float32Array(16),od=new Float32Array(9),cd=new Float32Array(4);function Sr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=sd[i];if(r===void 0&&(r=new Float32Array(i),sd[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function qt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function zc(s,e){let t=rd[e];t===void 0&&(t=new Int32Array(e),rd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Hb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Vb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2fv(this.addr,e),qt(t,e)}}function Wb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;s.uniform3fv(this.addr,e),qt(t,e)}}function qb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4fv(this.addr,e),qt(t,e)}}function Xb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Wt(t,n))return;cd.set(n),s.uniformMatrix2fv(this.addr,!1,cd),qt(t,n)}}function jb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Wt(t,n))return;od.set(n),s.uniformMatrix3fv(this.addr,!1,od),qt(t,n)}}function Kb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Wt(t,n))return;ad.set(n),s.uniformMatrix4fv(this.addr,!1,ad),qt(t,n)}}function Jb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Yb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2iv(this.addr,e),qt(t,e)}}function Zb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;s.uniform3iv(this.addr,e),qt(t,e)}}function $b(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4iv(this.addr,e),qt(t,e)}}function Qb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ex(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2uiv(this.addr,e),qt(t,e)}}function tx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;s.uniform3uiv(this.addr,e),qt(t,e)}}function nx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4uiv(this.addr,e),qt(t,e)}}function Gc(s){return s.version===0&&(s.compareFunction=nh,s.needsUpdate=!0),s}function ix(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Gc(Td):r=Ad,t.setTexture2D(e||r,i)}function sx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cd,i)}function rx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Gc(Ed):r=Pd,t.setTextureCube(e||r,i)}function ax(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Rd,i)}function ox(s){switch(s){case 5126:return Hb;case 35664:return Vb;case 35665:return Wb;case 35666:return qb;case 35674:return Xb;case 35675:return jb;case 35676:return Kb;case 5124:case 35670:return Jb;case 35667:case 35671:return Yb;case 35668:case 35672:return Zb;case 35669:case 35673:return $b;case 5125:return Qb;case 36294:return ex;case 36295:return tx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ax}}function cx(s,e){s.uniform1fv(this.addr,e)}function lx(s,e){let t=Sr(e,this.size,2);s.uniform2fv(this.addr,t)}function hx(s,e){let t=Sr(e,this.size,3);s.uniform3fv(this.addr,t)}function ux(s,e){let t=Sr(e,this.size,4);s.uniform4fv(this.addr,t)}function fx(s,e){let t=Sr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function dx(s,e){let t=Sr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function px(s,e){let t=Sr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function mx(s,e){s.uniform1iv(this.addr,e)}function gx(s,e){s.uniform2iv(this.addr,e)}function bx(s,e){s.uniform3iv(this.addr,e)}function xx(s,e){s.uniform4iv(this.addr,e)}function _x(s,e){s.uniform1uiv(this.addr,e)}function vx(s,e){s.uniform2uiv(this.addr,e)}function yx(s,e){s.uniform3uiv(this.addr,e)}function Mx(s,e){s.uniform4uiv(this.addr,e)}function Sx(s,e,t){let n=this.cache,i=e.length,r=zc(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),qt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Gc(Td):a=Ad;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function wx(s,e,t){let n=this.cache,i=e.length,r=zc(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Cd,r[a])}function Ax(s,e,t){let n=this.cache,i=e.length,r=zc(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),qt(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Gc(Ed):a=Pd;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function Tx(s,e,t){let n=this.cache,i=e.length,r=zc(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Rd,r[a])}function Ex(s){switch(s){case 5126:return cx;case 35664:return lx;case 35665:return hx;case 35666:return ux;case 35674:return fx;case 35675:return dx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return bx;case 35669:case 35673:return xx;case 5125:return _x;case 36294:return vx;case 36295:return yx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Tx}}var vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ox(t.type)}},yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ex(t.type)}},Mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},xh=/(\w+)(\])?(\[|\.)?/g;function ld(s,e){s.seq.push(e),s.map[e.id]=e}function Rx(s,e,t){let n=s.name,i=n.length;for(xh.lastIndex=0;;){let r=xh.exec(n),a=xh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ld(t,l===void 0?new vh(o,s,e):new yh(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new Mh(o),ld(t,f)),t=f}}}var Mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Rx(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function hd(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Cx=37297,Px=0;function Ix(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var ud=new je;function Lx(s){et._getMatrix(ud,et.workingColorSpace,s);let e=`mat3( ${ud.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(s)){case Vr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function fd(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ix(s.getShaderSource(e),o)}else return r}function Dx(s,e){let t=Lx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Nx={[zl]:"Linear",[Gl]:"Reinhard",[Hl]:"Cineon",[ma]:"ACESFilmic",[Wl]:"AgX",[ql]:"Neutral",[Vl]:"Custom"};function Fx(s,e){let t=Nx[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oc=new z;function Ux(){et.getLuminanceCoefficients(Oc);let s=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ox(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function kx(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bx(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Aa(s){return s!==""}function dd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function pd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(s){return s.replace(zx,Gx)}function Gx(s,e){let t=Qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sh(t)}var Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(s){return s.replace(Hx,Vx)}function Vx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gd(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var Wx={[pa]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function qx(s){return Wx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xx={[xr]:"ENVMAP_MODE_REFRACTION"};function jx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Xx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kx={[qo]:"ENVMAP_BLENDING_MULTIPLY",[Df]:"ENVMAP_BLENDING_MIX",[Nf]:"ENVMAP_BLENDING_ADD"};function Jx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Kx[s.combine]||"ENVMAP_BLENDING_NONE"}function Yx(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=qx(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=jx(t),f=Jx(t),d=Ox(t),u=kx(r),p=i.createProgram(),m,b,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Aa).join(`
`),m.length>0&&(m+=`
`),b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Aa).join(`
`),b.length>0&&(b+=`
`)):(m=[gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),b=[gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==hi?Fx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Dx("linearToOutputTexel",t.outputColorSpace),Ux(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),a=Sh(a),a=dd(a,t),a=pd(a,t),o=Sh(o),o=dd(o,t),o=pd(o,t),a=md(a),o=md(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,b=["#define varying in",t.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let v=g+m+a,A=g+b+o,_=hd(i,i.VERTEX_SHADER,v),w=hd(i,i.FRAGMENT_SHADER,A);i.attachShader(p,_),i.attachShader(p,w),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function M(C){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(p)||"",N=i.getShaderInfoLog(_)||"",G=i.getShaderInfoLog(w)||"",P=D.trim(),U=N.trim(),J=G.trim(),Y=!0,W=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,_,w);else{let B=fd(i,_,"vertex"),X=fd(i,w,"fragment");We("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+B+`
`+X)}else P!==""?Fe("WebGLProgram: Program Info Log:",P):(U===""||J==="")&&(W=!1);W&&(C.diagnostics={runnable:Y,programLog:P,vertexShader:{log:U,prefix:m},fragmentShader:{log:J,prefix:b}})}i.deleteShader(_),i.deleteShader(w),x=new Mr(i,p),y=Bx(i,p)}let x;this.getUniforms=function(){return x===void 0&&M(this),x};let y;this.getAttributes=function(){return y===void 0&&M(this),y};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(p,Cx)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Px++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=w,this}var Zx=0,wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ah(e),t.set(e,n)),n}},Ah=class{constructor(e){this.id=Zx++,this.code=e,this.usedTimes=0}};function $x(s){return s===es||s===va||s===ya}function Qx(s,e,t,n,i,r){let a=new Xr,o=new wh,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,y,I,C,D,N){let G=C.fog,P=D.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||U,J),W=d[x.type],B=n.precision;x.precision!==null&&(B=n.getMaxPrecision(x.precision),B!==x.precision&&Fe("WebGLProgram.getParameters:",x.precision,"not supported, using",B,"instead."));let X=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,$=X!==void 0?X.length:0,ye=0;P.morphAttributes.position!==void 0&&(ye=1),P.morphAttributes.normal!==void 0&&(ye=2),P.morphAttributes.color!==void 0&&(ye=3);let Me,ee,_e,he;if(W){let O=di[W];Me=O.vertexShader,ee=O.fragmentShader}else{Me=x.vertexShader,ee=x.fragmentShader;let O=o.getVertexShaderStage(x),re=o.getFragmentShaderStage(x);o.update(x,O,re),_e=O.id,he=re.id}let Le=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),ze=D.isInstancedMesh===!0,Je=D.isBatchedMesh===!0,Be=!!x.map,qe=!!x.matcap,nt=!!Y,He=nt&&Y.isPMREMTexture===!0,St=!!x.aoMap,Pt=!!x.lightMap,It=!!x.bumpMap&&x.wireframe===!1,ht=!!x.normalMap,tn=!!x.displacementMap,Lt=!!x.emissiveMap,yn=!!x.metalnessMap,Mn=!!x.roughnessMap,Sn=x.anisotropy>0,k=x.clearcoat>0,Ut=x.diffuseRoughness>0,bt=x.dispersion>0,pt=x.retroreflectivity>0,ve=x.iridescence>0,Ce=x.sheen>0,Ne=x.transmission>0,Ve=Sn&&!!x.anisotropyMap,R=k&&!!x.clearcoatMap,S=k&&!!x.clearcoatNormalMap,H=k&&!!x.clearcoatRoughnessMap,oe=Ut&&!!x.diffuseRoughnessMap,ie=ve&&!!x.iridescenceMap,ue=ve&&!!x.iridescenceThicknessMap,de=Ce&&!!x.sheenColorMap,ne=Ce&&!!x.sheenRoughnessMap,se=!!x.specularMap,le=!!x.specularColorMap,L=!!x.specularIntensityMap,te=Ne&&!!x.transmissionMap,Q=Ne&&!!x.thicknessMap,me=!!x.gradientMap,fe=!!x.alphaMap,pe=x.alphaTest>0,Ee=!!x.alphaHash,Ye=!!x.extensions,E=hi;x.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(E=s.toneMapping);let j=He?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,V={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:Me,fragmentShader:ee,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:he,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:B,batching:Je,batchingColor:Je&&D._colorsTexture!==null,instancing:ze,instancingColor:ze&&D.instanceColor!==null,instancingMorph:ze&&D.morphTexture!==null,outputColorSpace:Le===null?s.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Be,matcap:qe,envMap:nt,envMapMode:nt&&Y.mapping,envMapPMREM:He,envMapMaxLod:He?j.length-1:null,envMapSize:He?j[0].width:null,aoMap:St,lightMap:Pt,bumpMap:It,normalMap:ht,displacementMap:tn,emissiveMap:Lt,normalMapObjectSpace:ht&&x.normalMapType===Bf,normalMapTangentSpace:ht&&x.normalMapType===Sa,packedNormalMap:ht&&x.normalMapType===Sa&&$x(x.normalMap.format),metalnessMap:yn,roughnessMap:Mn,anisotropy:Sn,anisotropyMap:Ve,clearcoat:k,clearcoatMap:R,clearcoatNormalMap:S,clearcoatRoughnessMap:H,diffuseRoughness:Ut,diffuseRoughnessMap:oe,dispersion:bt,retroreflection:pt,iridescence:ve,iridescenceMap:ie,iridescenceThicknessMap:ue,sheen:Ce,sheenColorMap:de,sheenRoughnessMap:ne,specularMap:se,specularColorMap:le,specularIntensityMap:L,transmission:Ne,transmissionMap:te,thicknessMap:Q,gradientMap:me,opaque:x.transparent===!1&&x.blending===Qi&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:pe,alphaHash:Ee,combine:x.combine,mapUv:Be&&u(x.map.channel),aoMapUv:St&&u(x.aoMap.channel),lightMapUv:Pt&&u(x.lightMap.channel),bumpMapUv:It&&u(x.bumpMap.channel),normalMapUv:ht&&u(x.normalMap.channel),displacementMapUv:tn&&u(x.displacementMap.channel),emissiveMapUv:Lt&&u(x.emissiveMap.channel),metalnessMapUv:yn&&u(x.metalnessMap.channel),roughnessMapUv:Mn&&u(x.roughnessMap.channel),anisotropyMapUv:Ve&&u(x.anisotropyMap.channel),clearcoatMapUv:R&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:ne&&u(x.sheenRoughnessMap.channel),specularMapUv:se&&u(x.specularMap.channel),specularColorMapUv:le&&u(x.specularColorMap.channel),specularIntensityMapUv:L&&u(x.specularIntensityMap.channel),transmissionMapUv:te&&u(x.transmissionMap.channel),thicknessMapUv:Q&&u(x.thicknessMap.channel),alphaMapUv:fe&&u(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ht||Sn),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Be||fe),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ye,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:N.filter(O=>O.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:E,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===ut,decodeVideoTextureEmissive:Lt&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===cn,flipSided:x.side===Qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ye&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&x.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return V.vertexUv1s=c.has(1),V.vertexUv2s=c.has(2),V.vertexUv3s=c.has(3),c.clear(),V}function m(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)y.push(I),y.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(b(y,x),g(y,x),y.push(s.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function b(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapPMREM),x.push(y.envMapMaxLod),x.push(y.envMapSize),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.diffuseRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.numLightProbeGrids),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function g(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let y=d[x.type],I;if(y){let C=di[y];I=Zf.clone(C.uniforms)}else I=x.uniforms;return I}function A(x,y){let I=h.get(y);return I!==void 0?++I.usedTimes:(I=new Yx(s,y,x,i),l.push(I),h.set(y,I)),I}function _(x){if(--x.usedTimes===0){let y=l.indexOf(x);l[y]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function M(){o.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:A,releaseProgram:_,releaseShaderCache:w,programs:l,dispose:M}}function e_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function t_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function bd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function xd(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,p,m,b,g){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:u,material:p,materialVariant:a(d),groupOrder:m,renderOrder:d.renderOrder,z:b,group:g},s[e]=v):(v.id=d.id,v.object=d,v.geometry=u,v.material=p,v.materialVariant=a(d),v.groupOrder=m,v.renderOrder=d.renderOrder,v.z=b,v.group=g),e++,v}function c(d,u,p,m,b,g,v){v.reversedDepth===!0&&(b=-b);let A=o(d,u,p,m,b,g);p.transmission>0?n.push(A):p.transparent===!0?i.push(A):t.push(A)}function l(d,u,p,m,b,g){let v=o(d,u,p,m,b,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function h(d,u){t.length>1&&t.sort(d||t_),n.length>1&&n.sort(u||bd),i.length>1&&i.sort(u||bd)}function f(){for(let d=e,u=s.length;d<u;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:f,sort:h}}function n_(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new xd,s.set(n,[a])):i>=r.length?(a=new xd,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function i_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Te};break;case"SpotLight":t={position:new z,direction:new z,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function s_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var r_=0;function a_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function o_(s){let e=new i_,t=s_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);let i=new z,r=new Ue,a=new Ue;function o(l){let h=0,f=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let u=0,p=0,m=0,b=0,g=0,v=0,A=0,_=0,w=0,M=0,x=0,y=0,I=0,C=0;l.sort(a_);for(let N=0,G=l.length;N<G;N++){let P=l[N],U=P.color,J=P.intensity,Y=P.distance,W=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===es?W=P.shadow.map.texture:W=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=U.r*J,f+=U.g*J,d+=U.b*J;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],J);C++}else if(P.isSunLight){let B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,$=t.get(P);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[p]=$,n.sunShadowMap[p]=W;let ye=X.getViewportCount();for(let Me=0;Me<ye;Me++)n.sunShadowMatrix[m+Me]=X.getMatrix(Me),n.sunShadowCascade[m+Me]=X._cascadeData[Me];m+=ye,p++}n.sun[u]=B,u++}else if(P.isDirectionalLight){let B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,$=t.get(P);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,n.directionalShadow[b]=$,n.directionalShadowMap[b]=W,n.directionalShadowMatrix[b]=P.shadow.matrix,w++}n.directional[b]=B,b++}else if(P.isSpotLight){let B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(U).multiplyScalar(J),B.distance=Y,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[v]=B;let X=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,X.updateMatrices(P),P.castShadow&&I++),n.spotLightMatrix[v]=X.matrix,P.castShadow){let $=t.get(P);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=W,x++}v++}else if(P.isRectAreaLight){let B=e.get(P);B.color.copy(U).multiplyScalar(J),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=B,A++}else if(P.isPointLight){let B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){let X=P.shadow,$=t.get(P);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,$.shadowCameraNear=X.camera.near,$.shadowCameraFar=X.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=B,g++}else if(P.isHemisphereLight){let B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(J),B.groundColor.copy(P.groundColor).multiplyScalar(J),n.hemi[_]=B,_++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let D=n.hash;(D.sunLength!==u||D.directionalLength!==b||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==A||D.hemiLength!==_||D.numSunShadows!==p||D.numDirectionalShadows!==w||D.numPointShadows!==M||D.numSpotShadows!==x||D.numSpotMaps!==y||D.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=b,n.spot.length=v,n.rectArea.length=A,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=m,n.sunShadowCascade.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+y-I,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,D.sunLength=u,D.directionalLength=b,D.pointLength=g,D.spotLength=v,D.rectAreaLength=A,D.hemiLength=_,D.numSunShadows=p,D.numDirectionalShadows=w,D.numPointShadows=M,D.numSpotShadows=x,D.numSpotMaps=y,D.numLightProbes=C,n.version=r_++)}function c(l,h){let f=0,d=0,u=0,p=0,m=0,b=0,g=h.matrixWorldInverse;for(let v=0,A=l.length;v<A;v++){let _=l[v];if(_.isSunLight){let w=n.sun[f];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),f++}else if(_.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),d++}else if(_.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let w=n.rectArea[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){let w=n.point[u];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){let w=n.hemi[b];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),b++}}}return{setup:o,setupView:c,state:n}}function _d(s){let e=new o_(s),t=[],n=[],i=[];function r(f){h.camera=f,t.length=0,n.length=0,i.length=0}function a(f){f.isLightProbeGrid?i.push(f):t.push(f)}function o(f){n.push(f)}function c(){e.setup(t),i.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function l(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function c_(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new _d(s),e.set(i,[o])):r>=a.length?(o=new _d(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var l_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h_=`uniform sampler2D shadow_pass;
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
}`,u_=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],f_=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],vd=new Ue,wa=new z,_h=new z;function d_(s,e,t){let n=new Ji,i=new Xe,r=new Xe,a=new dt,o=new Do,c=new No,l={},h=t.maxTextureSize,f={[li]:Qt,[Qt]:li,[cn]:cn},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:l_,fragmentShader:h_}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new Ct;p.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new At(p,d),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pa;let g=this.type;this.render=function(M,x,y){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||M.length===0)return;this.type===pf&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pa);let I=s.getRenderTarget(),C=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Rs),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let G=g!==this.type;G&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(U=>U.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,U=M.length;P<U;P++){let J=M[P],Y=J.shadow;if(Y===void 0){Fe("WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let W=Y.getFrameExtents();i.multiply(W),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,Y.mapSize.y=r.y));let B=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=B,Y.map===null||G===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===br){if(J.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Nn(i.x,i.y,{format:es,type:Qn,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),Y.map.texture.name=J.name+".shadowMap",Y.map.depthTexture=new Ri(i.x,i.y,Un),Y.map.depthTexture.name=J.name+".shadowMapDepth",Y.map.depthTexture.format=Ti,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Nt,Y.map.depthTexture.magFilter=Nt}else J.isPointLight?(Y.map=new Ta(i.x),Y.map.depthTexture=new ta(i.x,$n)):(Y.map=new Nn(i.x,i.y),Y.map.depthTexture=new Ri(i.x,i.y,$n)),Y.map.depthTexture.name=J.name+".shadowMap",Y.map.depthTexture.format=Ti,this.type===pa?(Y.map.depthTexture.compareFunction=B?th:eh,Y.map.depthTexture.minFilter=Ht,Y.map.depthTexture.magFilter=Ht):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Nt,Y.map.depthTexture.magFilter=Nt);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==i.x||Y.map.height!==i.y)&&Y.map.setSize(i.x,i.y);let X=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();J.isPointLight!==!0&&Y.updateMatrices(J,y);let $=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:y.layers;for(let ye=0;ye<X;ye++){let Me=Y.getCamera(ye);if(J.isPointLight){let ee=Y.camera,_e=Y.matrix,he=J.distance||ee.far;he!==ee.far&&(ee.far=he,ee.updateProjectionMatrix()),wa.setFromMatrixPosition(J.matrixWorld),ee.position.copy(wa),_h.copy(ee.position),_h.add(u_[ye]),ee.up.copy(f_[ye]),ee.lookAt(_h),ee.updateMatrixWorld(),_e.makeTranslation(-wa.x,-wa.y,-wa.z),vd.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(vd,ee.coordinateSystem,ee.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,ye),s.clear();else{ye===0&&(s.setRenderTarget(Y.map),s.clear());let ee=Y.getViewport(ye);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),N.viewport(a)}n=Y.getFrustum(ye),_(x,y,Me,J,$,this.type)}Y.isPointLightShadow!==!0&&this.type===br&&v(Y,y),Y.needsUpdate=!1}g=this.type,b.needsUpdate=!1,s.setRenderTarget(I,C,D)};function v(M,x){let y=e.update(m);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,u.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),M.mapPass===null?M.mapPass=new Nn(i.x,i.y,{format:es,type:Qn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(x,null,y,d,m,null),u.uniforms.shadow_pass.value=M.mapPass.texture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(x,null,y,u,m,null)}function A(M,x,y,I){let C=null,D=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)C=D;else if(C=y.isPointLight===!0?c:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let N=C.uuid,G=x.uuid,P=l[N];P===void 0&&(P={},l[N]=P);let U=P[G];U===void 0&&(U=C.clone(),P[G]=U,x.addEventListener("dispose",w)),C=U}if(C.visible=x.visible,C.wireframe=x.wireframe,I===br?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:f[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let N=s.properties.get(C);N.light=y}return C}function _(M,x,y,I,C,D){if(M.visible===!1)return;if(M.layers.test(C)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&D===br)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let P=e.update(M),U=M.material;if(Array.isArray(U)){let J=P.groups;for(let Y=0,W=J.length;Y<W;Y++){let B=J[Y],X=U[B.materialIndex];if(X&&X.visible){let $=A(M,X,I,D);M.onBeforeShadow(s,M,x,y,P,$,B),s.renderBufferDirect(y,null,P,$,M,B),M.onAfterShadow(s,M,x,y,P,$,B)}}}else if(U.visible){let J=A(M,U,I,D);M.onBeforeShadow(s,M,x,y,P,J,null),s.renderBufferDirect(y,null,P,J,M,null),M.onAfterShadow(s,M,x,y,P,J,null)}}let G=M.children;for(let P=0,U=G.length;P<U;P++)_(G[P],x,y,I,C,D)}function w(M){M.target.removeEventListener("dispose",w);for(let y in l){let I=l[y],C=M.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function p_(s,e){function t(){let L=!1,te=new dt,Q=null,me=new dt(0,0,0,0);return{setMask:function(fe){Q!==fe&&!L&&(s.colorMask(fe,fe,fe,fe),Q=fe)},setLocked:function(fe){L=fe},setClear:function(fe,pe,Ee,Ye,E){E===!0&&(fe*=Ye,pe*=Ye,Ee*=Ye),te.set(fe,pe,Ee,Ye),me.equals(te)===!1&&(s.clearColor(fe,pe,Ee,Ye),me.copy(te))},reset:function(){L=!1,Q=null,me.set(-1,0,0,0)}}}function n(){let L=!1,te=!1,Q=null,me=null,fe=null;return{setReversed:function(pe){if(te!==pe){let Ee=e.get("EXT_clip_control");pe?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),te=pe;let Ye=fe;fe=null,this.setClear(Ye)}},getReversed:function(){return te},setTest:function(pe){pe?Se(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(pe){Q!==pe&&!L&&(s.depthMask(pe),Q=pe)},setFunc:function(pe){if(te&&(pe=Jf[pe]),me!==pe){switch(pe){case xo:s.depthFunc(s.NEVER);break;case _o:s.depthFunc(s.ALWAYS);break;case vo:s.depthFunc(s.LESS);break;case Qs:s.depthFunc(s.LEQUAL);break;case yo:s.depthFunc(s.EQUAL);break;case Mo:s.depthFunc(s.GEQUAL);break;case So:s.depthFunc(s.GREATER);break;case wo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=pe}},setLocked:function(pe){L=pe},setClear:function(pe){fe!==pe&&(fe=pe,te&&(pe=1-pe),s.clearDepth(pe))},reset:function(){L=!1,Q=null,me=null,fe=null,te=!1}}}function i(){let L=!1,te=null,Q=null,me=null,fe=null,pe=null,Ee=null,Ye=null,E=null;return{setTest:function(j){L||(j?Se(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(j){te!==j&&!L&&(s.stencilMask(j),te=j)},setFunc:function(j,V,O){(Q!==j||me!==V||fe!==O)&&(s.stencilFunc(j,V,O),Q=j,me=V,fe=O)},setOp:function(j,V,O){(pe!==j||Ee!==V||Ye!==O)&&(s.stencilOp(j,V,O),pe=j,Ee=V,Ye=O)},setLocked:function(j){L=j},setClear:function(j){E!==j&&(s.clearStencil(j),E=j)},reset:function(){L=!1,te=null,Q=null,me=null,fe=null,pe=null,Ee=null,Ye=null,E=null}}}let r=new t,a=new n,o=new i,c={},l=new WeakMap,h={},f={},d={},u=new WeakMap,p=[],m=null,b=!1,g=null,v=null,A=null,_=null,w=null,M=null,x=null,y=new Te(0,0,0),I=0,C=!1,D=null,N=null,G=null,P=null,U=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,W=0,B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),Y=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Y=W>=2);let X=null,$={},ye=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),ee=new dt().fromArray(ye),_e=new dt().fromArray(Me);function he(L,te,Q,me){let fe=new Uint8Array(4),pe=s.createTexture();s.bindTexture(L,pe),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ee=0;Ee<Q;Ee++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,fe):s.texImage2D(te+Ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,fe);return pe}let Le={};Le[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),Le[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Le[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Se(s.DEPTH_TEST),a.setFunc(Qs),It(!1),ht(Fl),Se(s.CULL_FACE),St(Rs);function Se(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function ze(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Je(L,te){return d[L]!==te?(s.bindFramebuffer(L,te),d[L]=te,L===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=te),L===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=te),!0):!1}function Be(L,te){let Q=p,me=!1;if(L){Q=u.get(te),Q===void 0&&(Q=[],u.set(te,Q));let fe=L.textures;if(Q.length!==fe.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Ee=fe.length;pe<Ee;pe++)Q[pe]=s.COLOR_ATTACHMENT0+pe;Q.length=fe.length,me=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,me=!0);me&&s.drawBuffers(Q)}function qe(L){return m!==L?(s.useProgram(L),m=L,!0):!1}let nt={[Cs]:s.FUNC_ADD,[gf]:s.FUNC_SUBTRACT,[bf]:s.FUNC_REVERSE_SUBTRACT};nt[xf]=s.MIN,nt[_f]=s.MAX;let He={[vf]:s.ZERO,[yf]:s.ONE,[Mf]:s.SRC_COLOR,[kl]:s.SRC_ALPHA,[Rf]:s.SRC_ALPHA_SATURATE,[Tf]:s.DST_COLOR,[wf]:s.DST_ALPHA,[Sf]:s.ONE_MINUS_SRC_COLOR,[Bl]:s.ONE_MINUS_SRC_ALPHA,[Ef]:s.ONE_MINUS_DST_COLOR,[Af]:s.ONE_MINUS_DST_ALPHA,[Cf]:s.CONSTANT_COLOR,[Pf]:s.ONE_MINUS_CONSTANT_COLOR,[If]:s.CONSTANT_ALPHA,[Lf]:s.ONE_MINUS_CONSTANT_ALPHA};function St(L,te,Q,me,fe,pe,Ee,Ye,E,j){if(L===Rs){b===!0&&(ze(s.BLEND),b=!1);return}if(b===!1&&(Se(s.BLEND),b=!0),L!==mf){if(L!==g||j!==C){if((v!==Cs||w!==Cs)&&(s.blendEquation(s.FUNC_ADD),v=Cs,w=Cs),j)switch(L){case Qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ni:s.blendFunc(s.ONE,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ol:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:We("WebGLState: Invalid blending: ",L);break}else switch(L){case Qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ni:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ul:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ol:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",L);break}A=null,_=null,M=null,x=null,y.set(0,0,0),I=0,g=L,C=j}return}fe=fe||te,pe=pe||Q,Ee=Ee||me,(te!==v||fe!==w)&&(s.blendEquationSeparate(nt[te],nt[fe]),v=te,w=fe),(Q!==A||me!==_||pe!==M||Ee!==x)&&(s.blendFuncSeparate(He[Q],He[me],He[pe],He[Ee]),A=Q,_=me,M=pe,x=Ee),(Ye.equals(y)===!1||E!==I)&&(s.blendColor(Ye.r,Ye.g,Ye.b,E),y.copy(Ye),I=E),g=L,C=!1}function Pt(L,te){L.side===cn?ze(s.CULL_FACE):Se(s.CULL_FACE);let Q=L.side===Qt;te&&(Q=!Q),It(Q),L.blending===Qi&&L.transparent===!1?St(Rs):St(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Lt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function It(L){D!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),D=L)}function ht(L){L!==ff?(Se(s.CULL_FACE),L!==N&&(L===Fl?s.cullFace(s.BACK):L===df?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),N=L}function tn(L){L!==G&&(Y&&s.lineWidth(L),G=L)}function Lt(L,te,Q){L?(Se(s.POLYGON_OFFSET_FILL),(P!==te||U!==Q)&&(P=te,U=Q,a.getReversed()&&(te=-te,Q=-Q),s.polygonOffset(te,Q))):ze(s.POLYGON_OFFSET_FILL)}function yn(L){L?Se(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function Mn(L){L===void 0&&(L=s.TEXTURE0+J-1),X!==L&&(s.activeTexture(L),X=L)}function Sn(L,te,Q){Q===void 0&&(X===null?Q=s.TEXTURE0+J-1:Q=X);let me=$[Q];me===void 0&&(me={type:void 0,texture:void 0},$[Q]=me),(me.type!==L||me.texture!==te)&&(X!==Q&&(s.activeTexture(Q),X=Q),s.bindTexture(L,te||Le[L]),me.type=L,me.texture=te)}function k(){let L=$[X];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Ut(){try{s.compressedTexImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function bt(){try{s.compressedTexImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function pt(){try{s.texSubImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function ve(){try{s.texSubImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function Ce(){try{s.compressedTexSubImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function Ne(){try{s.compressedTexSubImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function Ve(){try{s.texStorage2D(...arguments)}catch(L){We("WebGLState:",L)}}function R(){try{s.texStorage3D(...arguments)}catch(L){We("WebGLState:",L)}}function S(){try{s.texImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function H(){try{s.texImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function oe(L){return f[L]!==void 0?f[L]:s.getParameter(L)}function ie(L,te){f[L]!==te&&(s.pixelStorei(L,te),f[L]=te)}function ue(L){ee.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function de(L){_e.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function ne(L,te){let Q=l.get(te);Q===void 0&&(Q=new WeakMap,l.set(te,Q));let me=Q.get(L);me===void 0&&(me=s.getUniformBlockIndex(te,L.name),s.uniformBlockBinding(te,me,me),Q.set(L,me))}function se(L,te,Q){let fe=l.get(te).get(L);c[fe]!==Q&&(s.bindBufferBase(s.UNIFORM_BUFFER,fe,Q),c[fe]=Q)}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},X=null,$={},d={},c={},u=new WeakMap,p=[],m=null,b=!1,g=null,v=null,A=null,_=null,w=null,M=null,x=null,y=new Te(0,0,0),I=0,C=!1,D=null,N=null,G=null,P=null,U=null,ee.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Se,disable:ze,bindFramebuffer:Je,drawBuffers:Be,useProgram:qe,setBlending:St,setMaterial:Pt,setFlipSided:It,setCullFace:ht,setLineWidth:tn,setPolygonOffset:Lt,setScissorTest:yn,activeTexture:Mn,bindTexture:Sn,unbindTexture:k,compressedTexImage2D:Ut,compressedTexImage3D:bt,texImage2D:S,texImage3D:H,pixelStorei:ie,getParameter:oe,updateUBOMapping:ne,uniformBlockBinding:se,texStorage2D:Ve,texStorage3D:R,texSubImage2D:pt,texSubImage3D:ve,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ne,scissor:ue,viewport:de,reset:le}}function m_(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,h=new WeakMap,f=new Set,d,u=new WeakMap,p=new Set,m=new FinalizationRegistry(R=>p.delete(R)),b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return b?new OffscreenCanvas(R,S):nr("canvas")}function v(R,S,H){let oe=1,ie=Ve(R);if((ie.width>H||ie.height>H)&&(oe=H/Math.max(ie.width,ie.height)),oe<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ue=Math.floor(oe*ie.width),de=Math.floor(oe*ie.height);d===void 0&&(d=g(ue,de));let ne=S?g(ue,de):d;return ne.width=ue,ne.height=de,ne.getContext("2d").drawImage(R,0,0,ue,de),Fe("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ue+"x"+de+")."),ne}else return"data"in R&&Fe("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function A(R){return R.generateMipmaps}function _(R){s.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(R,S,H,oe,ie,ue=!1){if(R!==null){if(s[R]!==void 0)return s[R];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let de;oe&&(de=e.get("EXT_texture_norm16"),de||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=S;if(S===s.RED&&(H===s.FLOAT&&(ne=s.R32F),H===s.HALF_FLOAT&&(ne=s.R16F),H===s.UNSIGNED_BYTE&&(ne=s.R8),H===s.UNSIGNED_SHORT&&de&&(ne=de.R16_EXT),H===s.SHORT&&de&&(ne=de.R16_SNORM_EXT)),S===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(ne=s.R8UI),H===s.UNSIGNED_SHORT&&(ne=s.R16UI),H===s.UNSIGNED_INT&&(ne=s.R32UI),H===s.BYTE&&(ne=s.R8I),H===s.SHORT&&(ne=s.R16I),H===s.INT&&(ne=s.R32I)),S===s.RG&&(H===s.FLOAT&&(ne=s.RG32F),H===s.HALF_FLOAT&&(ne=s.RG16F),H===s.UNSIGNED_BYTE&&(ne=s.RG8),H===s.UNSIGNED_SHORT&&de&&(ne=de.RG16_EXT),H===s.SHORT&&de&&(ne=de.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(ne=s.RG8UI),H===s.UNSIGNED_SHORT&&(ne=s.RG16UI),H===s.UNSIGNED_INT&&(ne=s.RG32UI),H===s.BYTE&&(ne=s.RG8I),H===s.SHORT&&(ne=s.RG16I),H===s.INT&&(ne=s.RG32I)),S===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(ne=s.RGB8UI),H===s.UNSIGNED_SHORT&&(ne=s.RGB16UI),H===s.UNSIGNED_INT&&(ne=s.RGB32UI),H===s.BYTE&&(ne=s.RGB8I),H===s.SHORT&&(ne=s.RGB16I),H===s.INT&&(ne=s.RGB32I)),S===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(ne=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(ne=s.RGBA16UI),H===s.UNSIGNED_INT&&(ne=s.RGBA32UI),H===s.BYTE&&(ne=s.RGBA8I),H===s.SHORT&&(ne=s.RGBA16I),H===s.INT&&(ne=s.RGBA32I)),S===s.RGB&&(H===s.UNSIGNED_SHORT&&de&&(ne=de.RGB16_EXT),H===s.SHORT&&de&&(ne=de.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(ne=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(ne=s.R11F_G11F_B10F)),S===s.RGBA){let se=ue?Vr:et.getTransfer(ie);H===s.FLOAT&&(ne=s.RGBA32F),H===s.HALF_FLOAT&&(ne=s.RGBA16F),H===s.UNSIGNED_BYTE&&(ne=se===ut?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&de&&(ne=de.RGBA16_EXT),H===s.SHORT&&de&&(ne=de.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(R,S){let H;return R?S===null||S===$n||S===Ls?H=s.DEPTH24_STENCIL8:S===Un?H=s.DEPTH32F_STENCIL8:S===vr&&(H=s.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$n||S===Ls?H=s.DEPTH_COMPONENT24:S===Un?H=s.DEPTH_COMPONENT32F:S===vr&&(H=s.DEPTH_COMPONENT16),H}function y(R,S){return A(R)===!0||R.isFramebufferTexture&&R.minFilter!==Nt&&R.minFilter!==Ht?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function I(R){let S=new WeakRef(R);n.get(R).__ref=S,p.add(S),m.register(R,S,S)}function C(R){let S=n.get(R).__ref;S!==void 0&&(p.delete(S),m.unregister(S))}function D(R){G(R.target)}function N(R){P(R.target)}function G(R){R.removeEventListener("dispose",D),C(R),J(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&f.delete(R)}function P(R){R.removeEventListener("dispose",N),C(R),W(R)}function U(){for(let R of p){let S=R.deref();S!==void 0&&(S.isRenderTarget===!0?P(S):G(S))}p.clear(),f.clear()}function J(R){let S=n.get(R);if(S.__webglInit===void 0)return;let H=R.source,oe=u.get(H);if(oe){let ie=oe[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&Y(R),Object.keys(oe).length===0&&u.delete(H)}n.remove(R)}function Y(R){let S=n.get(R);s.deleteTexture(S.__webglTexture);let H=R.source,oe=u.get(H);delete oe[S.__cacheKey],a.memory.textures--}function W(R){let S=n.get(R);S.__depthDisposeCallback&&S.__depthDisposeCallback();let H=R.depthTexture;if(H&&H.renderTarget===R&&G(H),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(S.__webglFramebuffer[ie]))for(let ue=0;ue<S.__webglFramebuffer[ie].length;ue++)s.deleteFramebuffer(S.__webglFramebuffer[ie][ue]);else s.deleteFramebuffer(S.__webglFramebuffer[ie]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[ie])}else{if(Array.isArray(S.__webglFramebuffer))for(let ie=0;ie<S.__webglFramebuffer.length;ie++)s.deleteFramebuffer(S.__webglFramebuffer[ie]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ie=0;ie<S.__webglColorRenderbuffer.length;ie++)S.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[ie]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let oe=R.textures;for(let ie=0,ue=oe.length;ie<ue;ie++){let de=n.get(oe[ie]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(oe[ie])}n.remove(R)}let B=0;function X(){B=0}function $(){return B}function ye(R){B=R}function Me(){let R=B;return R>=i.maxTextures&&Fe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),B+=1,R}function ee(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.mipmapsAutoUpdate),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function _e(R,S){let H=n.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let oe=R.image;if(oe===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(H,R,S);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+S)}function he(R,S){let H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){Pt(H,R,S);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+S)}function Le(R,S){let H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){Pt(H,R,S);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+S)}function Se(R,S){let H=n.get(R);if(R.version>0&&H.__version!==R.version){It(H,R,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+S)}let ze={[Ki]:s.REPEAT,[Bn]:s.CLAMP_TO_EDGE,[er]:s.MIRRORED_REPEAT},Je={[Nt]:s.NEAREST,[Ko]:s.NEAREST_MIPMAP_NEAREST,[Is]:s.NEAREST_MIPMAP_LINEAR,[Ht]:s.LINEAR,[_r]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},Be={[Gf]:s.NEVER,[nh]:s.ALWAYS,[Hf]:s.LESS,[eh]:s.LEQUAL,[Vf]:s.EQUAL,[th]:s.GEQUAL,[Wf]:s.GREATER,[qf]:s.NOTEQUAL};function qe(R,S){if(S.type===Un&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ht||S.magFilter===_r||S.magFilter===Is||S.magFilter===Hn||S.minFilter===Ht||S.minFilter===_r||S.minFilter===Is||S.minFilter===Hn)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ze[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ze[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ze[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Je[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Je[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Nt||S.minFilter!==Is&&S.minFilter!==Hn||S.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function nt(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",D),I(S));let oe=S.source,ie=u.get(oe);ie===void 0&&(ie={},u.set(oe,ie));let ue=ee(S);if(ue!==R.__cacheKey){ie[ue]===void 0&&(ie[ue]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ie[ue].usedTimes++;let de=ie[R.__cacheKey];de!==void 0&&(ie[R.__cacheKey].usedTimes--,de.usedTimes===0&&Y(S)),R.__cacheKey=ue,R.__webglTexture=ie[ue].texture}return H}function He(R,S,H){return Math.floor(Math.floor(R/H)/S)}function St(R,S,H,oe){let ue=R.updateRanges;if(ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,H,oe,S.data);else{ue.sort((L,te)=>L.start-te.start);let de=0;for(let L=1;L<ue.length;L++){let te=ue[de],Q=ue[L],me=te.start+te.count,fe=He(Q.start,S.width,4),pe=He(te.start,S.width,4);Q.start<=me+1&&fe===pe&&He(Q.start+Q.count-1,S.width,4)===fe?te.count=Math.max(te.count,Q.start+Q.count-te.start):(++de,ue[de]=Q)}ue.length=de+1;let ne=t.getParameter(s.UNPACK_ROW_LENGTH),se=t.getParameter(s.UNPACK_SKIP_PIXELS),le=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let L=0,te=ue.length;L<te;L++){let Q=ue[L],me=Math.floor(Q.start/4),fe=Math.ceil(Q.count/4),pe=me%S.width,Ee=Math.floor(me/S.width),Ye=fe,E=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ee),t.texSubImage2D(s.TEXTURE_2D,0,pe,Ee,Ye,E,H,oe,S.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ne),t.pixelStorei(s.UNPACK_SKIP_PIXELS,se),t.pixelStorei(s.UNPACK_SKIP_ROWS,le)}}function Pt(R,S,H){let oe=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(oe=s.TEXTURE_3D);let ie=nt(R,S),ue=S.source;t.bindTexture(oe,R.__webglTexture,s.TEXTURE0+H);let de=n.get(ue);if(ue.version!==de.__version||ie===!0){if(t.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let E=et.getPrimaries(et.workingColorSpace),j=S.colorSpace===Ui?null:et.getPrimaries(S.colorSpace),V=S.colorSpace===Ui||E===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,V)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let se=v(S.image,!1,i.maxTextureSize);se=Ne(S,se);let le=r.convert(S.format,S.colorSpace),L=r.convert(S.type),te=M(S.internalFormat,le,L,S.normalized,S.colorSpace,S.isVideoTexture);qe(oe,S);let Q,me=S.mipmaps,fe=S.isVideoTexture!==!0,pe=de.__version===void 0||ie===!0,Ee=ue.dataReady,Ye=y(S,se);if(S.isDepthTexture)te=x(S.format===Fi,S.type),pe&&(fe?t.texStorage2D(s.TEXTURE_2D,1,te,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,te,se.width,se.height,0,le,L,null));else if(S.isDataTexture)if(me.length>0){fe&&pe&&t.texStorage2D(s.TEXTURE_2D,Ye,te,me[0].width,me[0].height);for(let E=0,j=me.length;E<j;E++)Q=me[E],fe?Ee&&t.texSubImage2D(s.TEXTURE_2D,E,0,0,Q.width,Q.height,le,L,Q.data):t.texImage2D(s.TEXTURE_2D,E,te,Q.width,Q.height,0,le,L,Q.data);S.generateMipmaps=!1}else fe?(pe&&t.texStorage2D(s.TEXTURE_2D,Ye,te,se.width,se.height),Ee&&St(S,se,le,L)):t.texImage2D(s.TEXTURE_2D,0,te,se.width,se.height,0,le,L,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){fe&&pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ye,te,me[0].width,me[0].height,se.depth);for(let E=0,j=me.length;E<j;E++)if(Q=me[E],S.format!==Vn)if(le!==null)if(fe){if(Ee)if(S.layerUpdates.size>0){let V=fh(Q.width,Q.height,S.format,S.type);for(let O of S.layerUpdates){let re=Q.data.subarray(O*V/Q.data.BYTES_PER_ELEMENT,(O+1)*V/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,E,0,0,O,Q.width,Q.height,1,le,re)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,E,0,0,0,Q.width,Q.height,se.depth,le,Q.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,E,te,Q.width,Q.height,se.depth,0,Q.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?Ee&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,E,0,0,0,Q.width,Q.height,se.depth,le,L,Q.data):t.texImage3D(s.TEXTURE_2D_ARRAY,E,te,Q.width,Q.height,se.depth,0,le,L,Q.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{fe&&pe&&t.texStorage2D(s.TEXTURE_2D,Ye,te,me[0].width,me[0].height);for(let E=0,j=me.length;E<j;E++)Q=me[E],S.format!==Vn?le!==null?fe?Ee&&t.compressedTexSubImage2D(s.TEXTURE_2D,E,0,0,Q.width,Q.height,le,Q.data):t.compressedTexImage2D(s.TEXTURE_2D,E,te,Q.width,Q.height,0,Q.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?Ee&&t.texSubImage2D(s.TEXTURE_2D,E,0,0,Q.width,Q.height,le,L,Q.data):t.texImage2D(s.TEXTURE_2D,E,te,Q.width,Q.height,0,le,L,Q.data)}else if(S.isDataArrayTexture)if(fe){if(pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ye,te,se.width,se.height,se.depth),Ee)if(S.layerUpdates.size>0){let E=fh(se.width,se.height,S.format,S.type);for(let j of S.layerUpdates){let V=se.data.subarray(j*E/se.data.BYTES_PER_ELEMENT,(j+1)*E/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,se.width,se.height,1,le,L,V)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,le,L,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,te,se.width,se.height,se.depth,0,le,L,se.data);else if(S.isData3DTexture)fe?(pe&&t.texStorage3D(s.TEXTURE_3D,Ye,te,se.width,se.height,se.depth),Ee&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,le,L,se.data)):t.texImage3D(s.TEXTURE_3D,0,te,se.width,se.height,se.depth,0,le,L,se.data);else if(S.isFramebufferTexture){if(pe)if(fe)t.texStorage2D(s.TEXTURE_2D,Ye,te,se.width,se.height);else{let E=se.width,j=se.height;for(let V=0;V<Ye;V++)t.texImage2D(s.TEXTURE_2D,V,te,E,j,0,le,L,null),E>>=1,j>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let E=s.canvas;if(E.hasAttribute("layoutsubtree")||E.setAttribute("layoutsubtree","true"),se.parentNode!==E){E.appendChild(se),f.add(S),E.onpaint=j=>{let V=j.changedElements;for(let O of f)V.includes(O.image)&&(O.needsUpdate=!0)},E.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,se);else{let V=s.RGBA,O=s.RGBA,re=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,V,O,re,se)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(me.length>0){if(fe&&pe){let E=Ve(me[0]);t.texStorage2D(s.TEXTURE_2D,Ye,te,E.width,E.height)}for(let E=0,j=me.length;E<j;E++)Q=me[E],fe?Ee&&t.texSubImage2D(s.TEXTURE_2D,E,0,0,le,L,Q):t.texImage2D(s.TEXTURE_2D,E,te,le,L,Q);S.generateMipmaps=!1}else if(fe){if(pe){let E=Ve(se);t.texStorage2D(s.TEXTURE_2D,Ye,te,E.width,E.height)}Ee&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,L,se)}else t.texImage2D(s.TEXTURE_2D,0,te,le,L,se);A(S)&&S.mipmapsAutoUpdate===!0&&_(oe),de.__version=ue.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function It(R,S,H){if(S.image.length!==6)return;let oe=nt(R,S),ie=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);let ue=n.get(ie);if(ie.version!==ue.__version||oe===!0){t.activeTexture(s.TEXTURE0+H);let de=et.getPrimaries(et.workingColorSpace),ne=S.colorSpace===Ui?null:et.getPrimaries(S.colorSpace),se=S.colorSpace===Ui||de===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let le=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,te=[];for(let O=0;O<6;O++)!le&&!L?te[O]=v(S.image[O],!0,i.maxCubemapSize):te[O]=L?S.image[O].image:S.image[O],te[O]=Ne(S,te[O]);let Q=te[0],me=r.convert(S.format,S.colorSpace),fe=r.convert(S.type),pe=M(S.internalFormat,me,fe,S.normalized,S.colorSpace),Ee=S.isVideoTexture!==!0,Ye=ue.__version===void 0||oe===!0,E=ie.dataReady,j=y(S,Q);qe(s.TEXTURE_CUBE_MAP,S);let V;if(S.isDepthTexture){if(pe=x(S.format===Fi,S.type),Ye)if(Ee)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,pe,Q.width,Q.height);else for(let O=0;O<6;O++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,pe,Q.width,Q.height,0,me,fe,null)}else if(le){Ee&&Ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,j,pe,Q.width,Q.height);for(let O=0;O<6;O++){V=te[O].mipmaps;for(let re=0;re<V.length;re++){let ce=V[re];S.format!==Vn?me!==null?Ee?E&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,0,0,ce.width,ce.height,me,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,pe,ce.width,ce.height,0,ce.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?E&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,0,0,ce.width,ce.height,me,fe,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,pe,ce.width,ce.height,0,me,fe,ce.data)}}}else{if(V=S.mipmaps,Ee&&Ye){V.length>0&&j++;let O=Ve(te[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,j,pe,O.width,O.height)}for(let O=0;O<6;O++)if(L){Ee?E&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,te[O].width,te[O].height,me,fe,te[O].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,pe,te[O].width,te[O].height,0,me,fe,te[O].data);for(let re=0;re<V.length;re++){let Ze=V[re].image[O].image;Ee?E&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,0,0,Ze.width,Ze.height,me,fe,Ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,pe,Ze.width,Ze.height,0,me,fe,Ze.data)}}else{Ee?E&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,me,fe,te[O]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,pe,me,fe,te[O]);for(let re=0;re<V.length;re++){let ce=V[re];Ee?E&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,0,0,me,fe,ce.image[O]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,pe,me,fe,ce.image[O])}}}A(S)&&S.mipmapsAutoUpdate===!0&&_(s.TEXTURE_CUBE_MAP),ue.__version=ie.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ht(R,S,H,oe,ie,ue){let de=r.convert(H.format,H.colorSpace),ne=r.convert(H.type),se=M(H.internalFormat,de,ne,H.normalized,H.colorSpace),le=n.get(S),L=n.get(H);if(L.__renderTarget=S,!le.__hasExternalTextures){let te=Math.max(1,S.width>>ue),Q=Math.max(1,S.height>>ue);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,ue,se,te,Q,S.depth,0,de,ne,null):t.texImage2D(ie,ue,se,te,Q,0,de,ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ve(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,ie,L.__webglTexture,0,pt(S)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,ie,L.__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function tn(R,S,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){let oe=S.depthTexture,ie=oe&&oe.isDepthTexture?oe.type:null,ue=x(S.stencilBuffer,ie),de=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ve(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt(S),ue,S.width,S.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt(S),ue,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ue,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,R)}else{let oe=S.textures;for(let ie=0;ie<oe.length;ie++){let ue=oe[ie],de=r.convert(ue.format,ue.colorSpace),ne=r.convert(ue.type),se=M(ue.internalFormat,de,ne,ue.normalized,ue.colorSpace);ve(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt(S),se,S.width,S.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt(S),se,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,se,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(R,S,H){let oe=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(S.depthTexture);ie.__renderTarget=S;let ue=oe?S.depthTexture.image[0]:S.depthTexture.image;(!ie.__webglTexture||ue.width!==S.width||ue.height!==S.height)&&(ue.width=S.width,ue.height=S.height,S.depthTexture.needsUpdate=!0),oe?Se(S.depthTexture,0):_e(S.depthTexture,0);let de=ie.__webglTexture,ne=pt(S),se=oe?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,le=S.depthTexture.format===Fi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ti)ve(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,se,de,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,le,se,de,0);else if(S.depthTexture.format===Fi)ve(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,se,de,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,le,se,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function yn(R){let S=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let oe=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),oe){let ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,oe.removeEventListener("dispose",ie)};oe.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=oe}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let oe=0;oe<6;oe++)Lt(S.__webglFramebuffer[oe],R,oe);else R.texture.mipmaps.length>0?Lt(S.__webglFramebuffer[0],R,0):Lt(S.__webglFramebuffer,R,0);else if(H){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]===void 0)S.__webglDepthbuffer[oe]=s.createRenderbuffer(),tn(S.__webglDepthbuffer[oe],R,!1);else{let ie=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,ue)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),tn(S.__webglDepthbuffer,R,!1);else{let ie=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,ue)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Mn(R,S,H){let oe=n.get(R);S!==void 0&&ht(oe.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&yn(R)}function Sn(R){let S=R.texture,H=n.get(R),oe=n.get(S);R.addEventListener("dispose",N),I(R);let ie=R.textures,ue=R.isWebGLCubeRenderTarget===!0,de=ie.length>1;if(de||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=S.version,a.memory.textures++),ue){H.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(S.mipmaps.length>0){H.__webglFramebuffer[ne]=[];for(let se=0;se<S.mipmaps.length;se++)H.__webglFramebuffer[ne][se]=s.createFramebuffer()}else H.__webglFramebuffer[ne]=s.createFramebuffer()}else{if(S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)H.__webglFramebuffer[ne]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(de)for(let ne=0,se=ie.length;ne<se;ne++){let le=n.get(ie[ne]);le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&ve(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ne=0;ne<ie.length;ne++){let se=ie[ne];H.__webglColorRenderbuffer[ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[ne]);let le=r.convert(se.format,se.colorSpace),L=r.convert(se.type),te=M(se.internalFormat,le,L,se.normalized,se.colorSpace,R.isXRRenderTarget===!0),Q=pt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,te,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,H.__webglColorRenderbuffer[ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),tn(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),qe(s.TEXTURE_CUBE_MAP,S);for(let ne=0;ne<6;ne++)if(S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)ht(H.__webglFramebuffer[ne][se],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se);else ht(H.__webglFramebuffer[ne],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);A(S)?_(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(de){for(let ne=0,se=ie.length;ne<se;ne++){let le=ie[ne],L=n.get(le),te=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(te,L.__webglTexture),qe(te,le),ht(H.__webglFramebuffer,R,le,s.COLOR_ATTACHMENT0+ne,te,0),A(le)&&_(te)}t.unbindTexture()}else{let ne=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,oe.__webglTexture),qe(ne,S),S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)ht(H.__webglFramebuffer[se],R,S,s.COLOR_ATTACHMENT0,ne,se);else ht(H.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,ne,0);A(S)?_(ne):S.mipmaps.length>0&&s.texParameteri(ne,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&yn(R)}function k(R){let S=R.textures;for(let H=0,oe=S.length;H<oe;H++){let ie=S[H];if(A(ie)&&ie.mipmapsAutoUpdate===!0){let ue=w(R),de=n.get(ie).__webglTexture;t.bindTexture(ue,de),_(ue),t.unbindTexture()}}}let Ut=[];function bt(R){if(R.samples>0){if(ve(R)===!1){let S=R.textures,H=R.width,oe=R.height,ie=s.COLOR_BUFFER_BIT,ue=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=n.get(R),ne=S.length>1;if(ne)for(let le=0;le<S.length;le++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let le=0;le<S.length;le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[le]);let L=n.get(S[le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,H,oe,0,0,H,oe,ie,s.NEAREST),c===!0&&(Ut.length=0,Ut.push(s.COLOR_ATTACHMENT0+le),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Ut.push(ue),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ne)for(let le=0;le<S.length;le++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,de.__webglColorRenderbuffer[le]);let L=n.get(S[le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,L,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function pt(R){return Math.min(i.maxSamples,R.samples)}function ve(R){let S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ce(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Ne(R,S){let H=R.colorSpace,oe=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==pn&&H!==Ui&&(et.getTransfer(H)===ut?(oe!==Vn||ie!==Rn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",H)),S}function Ve(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=Me,this.resetTextureUnits=X,this.getTextureUnits=$,this.setTextureUnits=ye,this.setTexture2D=_e,this.setTexture2DArray=he,this.setTexture3D=Le,this.setTextureCube=Se,this.rebindTextures=Mn,this.setupRenderTarget=Sn,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=yn,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=ve,this.dispose=U}function g_(s,e){function t(n,i=Ui){let r,a=et.getTransfer(i);if(n===Rn)return s.UNSIGNED_BYTE;if(n===Yo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Zo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Jl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Yl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===jl)return s.BYTE;if(n===Kl)return s.SHORT;if(n===vr)return s.UNSIGNED_SHORT;if(n===Jo)return s.INT;if(n===$n)return s.UNSIGNED_INT;if(n===Un)return s.FLOAT;if(n===Qn)return s.HALF_FLOAT;if(n===Zl)return s.ALPHA;if(n===$l)return s.RGB;if(n===Vn)return s.RGBA;if(n===Ti)return s.DEPTH_COMPONENT;if(n===Fi)return s.DEPTH_STENCIL;if(n===$o)return s.RED;if(n===Qo)return s.RED_INTEGER;if(n===es)return s.RG;if(n===ec)return s.RG_INTEGER;if(n===tc)return s.RGBA_INTEGER;if(n===ga||n===ba||n===xa||n===_a)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ac||n===oc||n===cc||n===lc||n===hc||n===va||n===uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ac||n===oc)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===lc)return r.COMPRESSED_R11_EAC;if(n===hc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===va)return r.COMPRESSED_RG11_EAC;if(n===uc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fc||n===dc||n===pc||n===mc||n===gc||n===bc||n===xc||n===_c||n===vc||n===yc||n===Mc||n===Sc||n===wc||n===Ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tc||n===Ec||n===Rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Tc)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cc||n===Pc||n===ya||n===Ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x_=`
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

}`,Th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new na(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $t({vertexShader:b_,fragmentShader:x_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eh=class extends Yn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,p=null,m=typeof XRWebGLBinding<"u",b=new Th,g={},v=t.getContextAttributes(),A=null,_=null,w=[],M=[],x=new Xe,y=null,I=null,C=new Gt;C.viewport=new dt;let D=new Gt;D.viewport=new dt;let N=[C,D],G=new Go,P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let _e=w[ee];return _e===void 0&&(_e=new rr,w[ee]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ee){let _e=w[ee];return _e===void 0&&(_e=new rr,w[ee]=_e),_e.getGripSpace()},this.getHand=function(ee){let _e=w[ee];return _e===void 0&&(_e=new rr,w[ee]=_e),_e.getHandSpace()};function J(ee){let _e=M.indexOf(ee.inputSource);if(_e===-1)return;let he=w[_e];he!==void 0&&(he.update(ee.inputSource,ee.frame,l||a),he.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Y(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",W);for(let ee=0;ee<w.length;ee++){let _e=M[ee];_e!==null&&(M[ee]=null,w[ee].disconnect(_e))}P=null,U=null,b.reset();for(let ee in g)delete g[ee];if(e.setRenderTarget(A),u=null,d=null,f=null,i=null,_=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(x.width,x.height,!1),I!==null){let ee=I.camera;ee.fov=I.fov,ee.zoom=I.zoom,ee.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&m&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(x),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Le=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=v.stencil?Fi:Ti,Le=v.stencil?Ls:$n);let ze={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(ze),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Nn(d.textureWidth,d.textureHeight,{format:Vn,type:Rn,depthTexture:new Ri(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let he={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),_=new Nn(u.framebufferWidth,u.framebufferHeight,{format:Vn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Me.setContext(i),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function W(ee){for(let _e=0;_e<ee.removed.length;_e++){let he=ee.removed[_e],Le=M.indexOf(he);Le>=0&&(M[Le]=null,w[Le].disconnect(he))}for(let _e=0;_e<ee.added.length;_e++){let he=ee.added[_e],Le=M.indexOf(he);if(Le===-1){for(let ze=0;ze<w.length;ze++)if(ze>=M.length){M.push(he),Le=ze;break}else if(M[ze]===null){M[ze]=he,Le=ze;break}if(Le===-1)break}let Se=w[Le];Se&&Se.connect(he)}}function B(ee,_e){_e===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(_e.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;let _e=ee.near,he=ee.far;b.texture!==null&&(b.depthNear>0&&(_e=b.depthNear),b.depthFar>0&&(he=b.depthFar)),G.near=D.near=C.near=_e,G.far=D.far=C.far=he,(P!==G.near||U!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),P=G.near,U=G.far),G.layers.mask=ee.layers.mask|6,C.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let Le=ee.parent,Se=G.cameras;B(G,Le);for(let ze=0;ze<Se.length;ze++)B(Se[ze],Le);G.projectionMatrix.copy(C.projectionMatrix),G.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&ee.isPerspectiveCamera&&(I={camera:ee,fov:ee.fov,zoom:ee.zoom}),X(ee,G,Le)};function X(ee,_e,he){he===null?ee.matrix.copy(_e.matrixWorld):(ee.matrix.copy(he.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(_e.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(_e.projectionMatrix),ee.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=gs*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(ee){c=ee,d!==null&&(d.fixedFoveation=ee),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ee)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(G)},this.getCameraTexture=function(ee){return g[ee]};let $=null;function ye(ee,_e){if(h=_e.getViewerPose(l||a),p=_e,h!==null){let he=h.views;u!==null&&(e.setRenderTargetFramebuffer(_,u.framebuffer),e.setRenderTarget(_));let Le=!1;he.length!==G.cameras.length&&(G.cameras.length=0,Le=!0);for(let Be=0;Be<he.length;Be++){let qe=he[Be],nt=null;if(u!==null)nt=u.getViewport(qe);else{let St=f.getViewSubImage(d,qe);nt=St.viewport,Be===0&&(e.setRenderTargetTextures(_,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(_))}let He=N[Be];He===void 0&&(He=new Gt,He.layers.enable(Be),He.viewport=new dt,N[Be]=He),He.matrix.fromArray(qe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(qe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(nt.x,nt.y,nt.width,nt.height),Be===0&&(G.matrix.copy(He.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Le===!0&&G.cameras.push(He)}let Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&m){f=n.getBinding();let Be=f.getDepthInformation(he[0]);Be&&Be.isValid&&Be.texture&&b.init(Be,i.renderState)}if(Se&&Se.includes("camera-access")&&m){e.state.unbindTexture(),f=n.getBinding();for(let Be=0;Be<he.length;Be++){let qe=he[Be].camera;if(qe){let nt=g[qe];nt||(nt=new na,g[qe]=nt);let He=f.getCameraImage(qe);nt.sourceTexture=He}}}}for(let he=0;he<w.length;he++){let Le=M[he],Se=w[he];Le!==null&&Se!==void 0&&Se.update(Le,_e,l||a)}$&&$(ee,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),p=null}let Me=new yd;Me.setAnimationLoop(ye),this.setAnimationLoop=function(ee){$=ee},this.dispose=function(){}}},__=new Ue,Id=new je;Id.set(-1,0,0,0,1,0,0,0,1);function v_(s,e){function t(b,g){b.matrixAutoUpdate===!0&&b.updateMatrix(),g.value.copy(b.matrix)}function n(b,g){g.color.getRGB(b.fogColor.value,lh(s)),g.isFog?(b.fogNear.value=g.near,b.fogFar.value=g.far):g.isFogExp2&&(b.fogDensity.value=g.density)}function i(b,g,v,A,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(b,g):g.isMeshLambertMaterial?(r(b,g),g.envMap&&(b.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(b,g),f(b,g)):g.isMeshPhongMaterial?(r(b,g),h(b,g),g.envMap&&(b.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(b,g),d(b,g),g.isMeshPhysicalMaterial&&u(b,g,_)):g.isMeshMatcapMaterial?(r(b,g),p(b,g)):g.isMeshDepthMaterial?r(b,g):g.isMeshDistanceMaterial?(r(b,g),m(b,g)):g.isMeshNormalMaterial?r(b,g):g.isLineBasicMaterial?(a(b,g),g.isLineDashedMaterial&&o(b,g)):g.isPointsMaterial?c(b,g,v,A):g.isSpriteMaterial?l(b,g):g.isShadowMaterial?(b.color.value.copy(g.color),b.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(b,g){b.opacity.value=g.opacity,g.color&&b.diffuse.value.copy(g.color),g.emissive&&b.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(b.map.value=g.map,t(g.map,b.mapTransform)),g.alphaMap&&(b.alphaMap.value=g.alphaMap,t(g.alphaMap,b.alphaMapTransform)),g.bumpMap&&(b.bumpMap.value=g.bumpMap,t(g.bumpMap,b.bumpMapTransform),b.bumpScale.value=g.bumpScale,g.side===Qt&&(b.bumpScale.value*=-1)),g.normalMap&&(b.normalMap.value=g.normalMap,t(g.normalMap,b.normalMapTransform),b.normalScale.value.copy(g.normalScale),g.side===Qt&&b.normalScale.value.negate()),g.displacementMap&&(b.displacementMap.value=g.displacementMap,t(g.displacementMap,b.displacementMapTransform),b.displacementScale.value=g.displacementScale,b.displacementBias.value=g.displacementBias),g.emissiveMap&&(b.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,b.emissiveMapTransform)),g.specularMap&&(b.specularMap.value=g.specularMap,t(g.specularMap,b.specularMapTransform)),g.alphaTest>0&&(b.alphaTest.value=g.alphaTest);let v=e.get(g),A=v.envMap,_=v.envMapRotation;A&&(b.envMap.value=A,b.envMapRotation.value.setFromMatrix4(__.makeRotationFromEuler(_)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(Id),b.reflectivity.value=g.reflectivity,b.ior.value=g.ior,b.refractionRatio.value=g.refractionRatio),g.lightMap&&(b.lightMap.value=g.lightMap,b.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,b.lightMapTransform)),g.aoMap&&(b.aoMap.value=g.aoMap,b.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,b.aoMapTransform))}function a(b,g){b.diffuse.value.copy(g.color),b.opacity.value=g.opacity,g.map&&(b.map.value=g.map,t(g.map,b.mapTransform))}function o(b,g){b.dashSize.value=g.dashSize,b.totalSize.value=g.dashSize+g.gapSize,b.scale.value=g.scale}function c(b,g,v,A){b.diffuse.value.copy(g.color),b.opacity.value=g.opacity,b.size.value=g.size*v,b.scale.value=A*.5,g.map&&(b.map.value=g.map,t(g.map,b.uvTransform)),g.alphaMap&&(b.alphaMap.value=g.alphaMap,t(g.alphaMap,b.alphaMapTransform)),g.alphaTest>0&&(b.alphaTest.value=g.alphaTest)}function l(b,g){b.diffuse.value.copy(g.color),b.opacity.value=g.opacity,b.rotation.value=g.rotation,g.map&&(b.map.value=g.map,t(g.map,b.mapTransform)),g.alphaMap&&(b.alphaMap.value=g.alphaMap,t(g.alphaMap,b.alphaMapTransform)),g.alphaTest>0&&(b.alphaTest.value=g.alphaTest)}function h(b,g){b.specular.value.copy(g.specular),b.shininess.value=Math.max(g.shininess,1e-4)}function f(b,g){g.gradientMap&&(b.gradientMap.value=g.gradientMap)}function d(b,g){b.metalness.value=g.metalness,g.metalnessMap&&(b.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,b.metalnessMapTransform)),b.roughness.value=g.roughness,g.roughnessMap&&(b.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,b.roughnessMapTransform)),g.envMap&&(b.envMapIntensity.value=g.envMapIntensity)}function u(b,g,v){b.ior.value=g.ior,g.diffuseRoughness>0&&(b.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(b.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,b.diffuseRoughnessMapTransform))),g.sheen>0&&(b.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),b.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(b.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,b.sheenColorMapTransform)),g.sheenRoughnessMap&&(b.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,b.sheenRoughnessMapTransform))),g.clearcoat>0&&(b.clearcoat.value=g.clearcoat,b.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(b.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,b.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(b.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qt&&b.clearcoatNormalScale.value.negate())),g.dispersion>0&&(b.dispersion.value=g.dispersion),g.retroreflectivity>0&&(b.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(b.iridescence.value=g.iridescence,b.iridescenceIOR.value=g.iridescenceIOR,b.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,b.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(b.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,b.iridescenceMapTransform)),g.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),g.transmission>0&&(b.transmission.value=g.transmission,b.transmissionSamplerMap.value=v.texture,b.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(b.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,b.transmissionMapTransform)),b.thickness.value=g.thickness,g.thicknessMap&&(b.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=g.attenuationDistance,b.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(b.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(b.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=g.specularIntensity,b.specularColor.value.copy(g.specularColor),g.specularColorMap&&(b.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,b.specularColorMapTransform)),g.specularIntensityMap&&(b.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,b.specularIntensityMapTransform))}function p(b,g){g.matcap&&(b.matcap.value=g.matcap)}function m(b,g){let v=e.get(g).light;b.referencePosition.value.setFromMatrixPosition(v.matrixWorld),b.nearDistance.value=v.shadow.camera.near,b.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function y_(s,e,t,n){let i={},r={};function a(v,A){let _=A.program;n.uniformBlockBinding(v,_,i[v.id])}function o(v,A){let _=i[v.id];_===void 0&&(p(v),_=c(v),i[v.id]=_,v.addEventListener("dispose",b));let w=A.program;n.updateUBOMapping(v,w);let M=e.render.frame;r[v.id]!==M&&(l(v),r[v.id]=M)}function c(v){let A=s.createBuffer(),_=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,_,w),s.bindBuffer(s.UNIFORM_BUFFER,null),A}function l(v){let A=i[v.id],_=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let M=0,x=_.length;M<x;M++){let y=_[M];if(Array.isArray(y))for(let I=0,C=y.length;I<C;I++)h(y[I],M,I,w);else h(y,M,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,A,_,w){if(d(v,A,_,w)===!0){let M=v.__offset,x=v.value;if(Array.isArray(x)){let y=0;for(let I=0;I<x.length;I++){let C=x[I],D=m(C,!0);f(C,v.__data,y),y+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,v.__data)}}function f(v,A,_){typeof v=="number"||typeof v=="boolean"?A[_]=v:v.isMatrix3?(A[_]=v.elements[0],A[_+1]=v.elements[1],A[_+2]=v.elements[2],A[_+3]=0,A[_+4]=v.elements[3],A[_+5]=v.elements[4],A[_+6]=v.elements[5],A[_+7]=0,A[_+8]=v.elements[6],A[_+9]=v.elements[7],A[_+10]=v.elements[8],A[_+11]=0):ArrayBuffer.isView(v)?A.set(v.subarray(0,A.length-_),_):v.toArray(A,_)}function d(v,A,_,w){let M=v.value,x=A+"_"+_;if(Array.isArray(M)){w[x]===void 0&&(w[x]=[]);let y=w[x],I=!1;for(let C=0;C<M.length;C++)u(M[C],y,C)===!0&&(I=!0);return I}return u(M,w,x)}function u(v,A,_){if(A[_]===void 0)return typeof v=="number"||typeof v=="boolean"?A[_]=v:ArrayBuffer.isView(v)?A[_]=v.slice():A[_]=v.clone(),!0;{let w=A[_];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return A[_]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function p(v){let A=v.uniforms,_=0,w=16;for(let x=0,y=A.length;x<y;x++){let I=Array.isArray(A[x])?A[x]:[A[x]];for(let C=0,D=I.length;C<D;C++){let N=I[C],G=Array.isArray(N.value)?N.value:[N.value],P=Array.isArray(A[x])||Array.isArray(N.value),U=_;for(let Y=0,W=G.length;Y<W;Y++){let B=G[Y],X=m(B,P),$=_%w,ye=$%X.boundary,Me=$+ye;_+=ye,Me!==0&&w-Me<X.storage&&(_+=w-Me),Y===0&&(U=_),_+=X.storage}let J=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new J((_-U)/Float32Array.BYTES_PER_ELEMENT),N.__offset=U}}let M=_%w;return M>0&&(_+=w-M),v.__size=_,v.__cache={},this}function m(v,A){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=16,_.storage=48):v.isMatrix4?(_.boundary=16,_.storage=64):v.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(_.boundary=16,_.storage=v.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",v),A===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function b(v){let A=v.target;A.removeEventListener("dispose",b),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:a,update:o,dispose:g}}var M_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function S_(){return fi===null&&(fi=new lr(M_,16,16,es,Qn),fi.name="DFG_LUT",fi.minFilter=Ht,fi.magFilter=Ht,fi.wrapS=Bn,fi.wrapT=Bn,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var Bc=class{constructor(e={}){let{canvas:t=Xf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Rn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=u,b=new Set([tc,ec,Qo]),g=new Set([Rn,$n,vr,Ls,Yo,Zo]),v=new Uint32Array(4),A=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},w=null,M=null,x=[],y=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,N=null,G=null,P=null,U=null;this._outputColorSpace=yt;let J=0,Y=0,W=null,B=-1,X=null,$=new dt,ye=new dt,Me=null,ee=new Te(0),_e=0,he=t.width,Le=t.height,Se=1,ze=null,Je=null,Be=new dt(0,0,he,Le),qe=new dt(0,0,he,Le),nt=!1,He=new Ji,St=new Ro,Pt=!1,It=!1,ht=new Ue,tn=new z,Lt=new dt,yn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mn=!1;function Sn(){return W===null?Se:1}let k=n;function Ut(T,F){return t.getContext(T,F)}let bt,pt,ve,Ce,Ne,Ve,R,S,H,oe,ie,ue,de,ne,se,le,L,te,Q,me,fe,pe,Ee;try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",O,!1),k===null){let F="webgl2";if(k=Ut(F,T),k===null)throw Ut(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(T){throw t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",O,!1),We("WebGLRenderer: "+T.message),T}function Ye(){bt=new Nb(k),bt.init(),fe=new g_(k,bt),pt=new Sb(k,bt,e,fe),ve=new p_(k,bt),pt.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),G=k.createFramebuffer(),P=k.createFramebuffer(),U=k.createFramebuffer(),Ce=new Ob(k),Ne=new e_,Ve=new m_(k,bt,ve,Ne,pt,fe,Ce),R=new Db(C),S=new Bm(k),pe=new yb(k,S),H=new Fb(k,S,Ce,pe),oe=new Bb(k,H,S,pe,Ce),te=new kb(k,pt,Ve),se=new wb(Ne),ie=new Qx(C,R,bt,pt,pe,se),ue=new v_(C,Ne),de=new n_,ne=new c_(bt),L=new vb(C,R,ve,oe,p,c),le=new d_(C,oe,pt),Ee=new y_(k,Ce,pt,ve),Q=new Mb(k,bt,Ce),me=new Ub(k,bt,Ce),Ce.programs=ie.programs,C.capabilities=pt,C.extensions=bt,C.properties=Ne,C.renderLists=de,C.shadowMap=le,C.state=ve,C.info=Ce}m!==Rn&&(I=new Gb(m,t.width,t.height,o,i,r));let E=new Eh(C,k);this.xr=E,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=bt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=bt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(T){T!==void 0&&(Se=T,this.setSize(he,Le,!1))},this.getSize=function(T){return T.set(he,Le)},this.setSize=function(T,F,Z=!0){if(E.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}he=T,Le=F,t.width=Math.floor(T*Se),t.height=Math.floor(F*Se),Z===!0&&(t.style.width=T+"px",t.style.height=F+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(he*Se,Le*Se).floor()},this.setDrawingBufferSize=function(T,F,Z){he=T,Le=F,Se=Z,t.width=Math.floor(T*Z),t.height=Math.floor(F*Z),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(m===Rn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy($)},this.getViewport=function(T){return T.copy(Be)},this.setViewport=function(T,F,Z,q){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,F,Z,q),ve.viewport($.copy(Be).multiplyScalar(Sn()).round())},this.getScissor=function(T){return T.copy(qe)},this.setScissor=function(T,F,Z,q){T.isVector4?qe.set(T.x,T.y,T.z,T.w):qe.set(T,F,Z,q),ve.scissor(ye.copy(qe).multiplyScalar(Sn()).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(T){ve.setScissorTest(nt=T)},this.setOpaqueSort=function(T){ze=T},this.setTransparentSort=function(T){Je=T},this.getClearColor=function(T){return T.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,Z=!0){let q=0;if(T){let K=!1;if(W!==null){let xe=W.texture.format;K=b.has(xe)}if(K){let xe=W.texture.type,Re=g.has(xe),be=L.getClearColor(),Ae=L.getClearAlpha(),De=be.r,Ke=be.g,st=be.b;Re?(v[0]=De,v[1]=Ke,v[2]=st,v[3]=Ae,k.clearBufferuiv(k.COLOR,0,v)):(A[0]=De,A[1]=Ke,A[2]=st,A[3]=Ae,k.clearBufferiv(k.COLOR,0,A))}else q|=k.COLOR_BUFFER_BIT}F&&(q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",O,!1),L.dispose(),de.dispose(),ne.dispose(),Ve.dispose(),Ne.dispose(),R.dispose(),oe.dispose(),H.dispose(),pe.dispose(),Ee.dispose(),ie.dispose(),E.dispose(),E.removeEventListener("sessionstart",Pn),E.removeEventListener("sessionend",ge),ae.stop()};function j(T){T.preventDefault(),Wr("WebGLRenderer: Context Lost."),D=!0}function V(){Wr("WebGLRenderer: Context Restored."),D=!1;let T=Ce.autoReset,F=le.enabled,Z=le.autoUpdate,q=le.needsUpdate,K=le.type;Ye(),Ce.autoReset=T,le.enabled=F,le.autoUpdate=Z,le.needsUpdate=q,le.type=K}function O(T){We("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function re(T){let F=T.target;F.removeEventListener("dispose",re),ce(F)}function ce(T){Ze(T),Ne.remove(T)}function Ze(T){let F=Ne.get(T).programs;F!==void 0&&(F.forEach(function(Z){ie.releaseProgram(Z)}),T.isShaderMaterial&&ie.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,Z,q,K,xe){F===null&&(F=yn);let Re=K.isMesh&&K.matrixWorld.determinantAffine()<0,be=ii(T,F,Z,q,K);ve.setMaterial(q,Re);let Ae=Z.index,De=1;if(q.wireframe===!0){if(Ae=H.getWireframeAttribute(Z),Ae===void 0)return;De=2}let Ke=Z.drawRange,st=Z.attributes.position,Pe=Ke.start*De,rt=(Ke.start+Ke.count)*De;xe!==null&&(Pe=Math.max(Pe,xe.start*De),rt=Math.min(rt,(xe.start+xe.count)*De)),Ae!==null?(Pe=Math.max(Pe,0),rt=Math.min(rt,Ae.count)):st!=null&&(Pe=Math.max(Pe,0),rt=Math.min(rt,st.count));let Bt=rt-Pe;if(Bt<0||Bt===1/0)return;pe.setup(K,q,be,Z,Ae);let vt,_t=Q;if(Ae!==null&&(vt=S.get(Ae),_t=me,_t.setIndex(vt)),K.isMesh)q.wireframe===!0?(ve.setLineWidth(q.wireframeLinewidth*Sn()),_t.setMode(k.LINES)):_t.setMode(k.TRIANGLES);else if(K.isLine){let nn=q.linewidth;nn===void 0&&(nn=1),ve.setLineWidth(nn*Sn()),K.isLineSegments?_t.setMode(k.LINES):K.isLineLoop?_t.setMode(k.LINE_LOOP):_t.setMode(k.LINE_STRIP)}else K.isPoints?_t.setMode(k.POINTS):K.isSprite&&_t.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))_t.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let nn=K._multiDrawStarts,Ie=K._multiDrawCounts,un=K._multiDrawCount,lt=Ae?S.get(Ae).bytesPerElement:1,rs=Ne.get(q).currentProgram.getUniforms();for(let sn=0;sn<un;sn++)rs.setValue(k,"_gl_DrawID",sn),_t.render(nn[sn]/lt,Ie[sn])}else if(K.isInstancedMesh)_t.renderInstances(Pe,Bt,K.count);else if(Z.isInstancedBufferGeometry){let nn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ie=Math.min(Z.instanceCount,nn);_t.renderInstances(Pe,Bt,Ie)}else _t.render(Pe,Bt)};function Oe(T,F,Z,q){N!==null&&T.isNodeMaterial&&N.setObject(q,T),Pt===!0&&se.setState(T,Z,!1),T.transparent===!0&&T.side===cn&&T.forceSinglePass===!1?(T.side=Qt,T.needsUpdate=!0,Rt(T,F,q),T.side=li,T.needsUpdate=!0,Rt(T,F,q),T.side=cn):Rt(T,F,q)}this.compile=function(T,F,Z=null){Z===null&&(Z=T),N!==null&&N.renderStart(T,F,Z),M=ne.get(Z),M.init(F),y.push(M),Z.traverseVisible(function(K){K.isLight&&K.layers.test(F.layers)&&(M.pushLight(K),K.castShadow&&M.pushShadow(K))}),T!==Z&&T.traverseVisible(function(K){K.isLight&&K.layers.test(F.layers)&&(M.pushLight(K),K.castShadow&&M.pushShadow(K))}),M.setupLights(),N!==null&&N.updateLights(M.state.lightsArray),It=this.localClippingEnabled,Pt=se.init(this.clippingPlanes,It),Pt===!0&&se.setGlobalState(this.clippingPlanes,F),N!==null&&le.render(M.state.shadowsArray,Z,F);let q=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let xe=K.material;if(xe)if(Array.isArray(xe))for(let Re=0;Re<xe.length;Re++){let be=xe[Re];Oe(be,Z,F,K),q.add(be)}else Oe(xe,Z,F,K),q.add(xe)}),M=y.pop(),N!==null&&N.renderEnd(),q},this.compileAsync=function(T,F,Z=null){let q=this.compile(T,F,Z);return new Promise(K=>{function xe(){if(q.forEach(function(Re){let Ae=Ne.get(Re).currentProgram;(Ae===void 0||Ae.isReady())&&q.delete(Re)}),q.size===0){K(T);return}setTimeout(xe,10)}bt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ke=null;function xt(T){ke&&ke(T)}function Pn(){ae.stop()}function ge(){ae.start()}let ae=new yd;ae.setAnimationLoop(xt),typeof self<"u"&&ae.setContext(self),this.setAnimationLoop=function(T){ke=T,E.setAnimationLoop(T),T===null?ae.stop():ae.start()},E.addEventListener("sessionstart",Pn),E.addEventListener("sessionend",ge),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(T,F);let Z=E.enabled===!0&&E.isPresenting===!0,q=I!==null&&(W===null||Z)&&I.begin(C,W);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),E.enabled===!0&&E.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(E.cameraAutoUpdate===!0&&E.updateCamera(F),F=E.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,F,W),M=ne.get(T,y.length),M.init(F),M.state.textureUnits=Ve.getTextureUnits(),y.push(M),ht.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?St.setFromArrayCamera(F):He.setFromProjectionMatrix(ht,zn,F.reversedDepth),It=this.localClippingEnabled,Pt=se.init(this.clippingPlanes,It),w=de.get(T,x.length),w.init(),x.push(w),this.info.render.frame++,E.enabled===!0&&E.isPresenting===!0){let Re=C.xr.getDepthSensingMesh();Re!==null&&ct(Re,F,-1/0,C.sortObjects)}ct(T,F,0,C.sortObjects),w.finish(),N!==null&&N.updateLights(M.state.lightsArray),C.sortObjects===!0&&w.sort(ze,Je),Mn=E.enabled===!1||E.isPresenting===!1||E.hasDepthSensing()===!1,Mn&&L.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),Pt===!0&&se.beginShadows();let K=M.state.shadowsArray;if(le.render(K,T,F),Pt===!0&&se.endShadows(),(q&&I.hasRenderPass())===!1){let Re=w.opaque,be=w.transmissive;if(M.setupLights(),F.isArrayCamera){let Ae=F.cameras;if(be.length>0)for(let De=0,Ke=Ae.length;De<Ke;De++){let st=Ae[De];In(Re,be,T,st)}Mn&&L.render(T);for(let De=0,Ke=Ae.length;De<Ke;De++){let st=Ae[De];Ot(w,T,st,st.viewport)}}else be.length>0&&In(Re,be,T,F),Mn&&L.render(T),Ot(w,T,F)}W!==null&&Y===0&&(Ve.updateMultisampleRenderTarget(W),Ve.updateRenderTargetMipmap(W)),q&&I.end(C),T.isScene===!0&&T.onAfterRender(C,T,F),pe.resetDefaultState(),B=-1,X=null,y.pop(),y.length>0?(M=y[y.length-1],Ve.setTextureUnits(M.state.textureUnits),Pt===!0&&se.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,N!==null&&N.renderEnd()};function ct(T,F,Z,q){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){let Re=F.isArrayCamera?St:He;if(!T.frustumCulled||T.intersectsFrustum(Re)){q&&Lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ht);let be=oe.update(T),Ae=T.material;Ae.visible&&w.push(T,be,Ae,Z,Lt.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){let Re=F.isArrayCamera?St:He;if(!T.frustumCulled||T.intersectsFrustum(Re)){let be=oe.update(T),Ae=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Lt.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Lt.copy(be.boundingSphere.center)),Lt.applyMatrix4(T.matrixWorld).applyMatrix4(ht)),Array.isArray(Ae)){let De=be.groups;for(let Ke=0,st=De.length;Ke<st;Ke++){let Pe=De[Ke],rt=Ae[Pe.materialIndex];rt&&rt.visible&&w.push(T,be,rt,Z,Lt.z,Pe,F)}}else Ae.visible&&w.push(T,be,Ae,Z,Lt.z,null,F)}}}let xe=T.children;for(let Re=0,be=xe.length;Re<be;Re++)ct(xe[Re],F,Z,q)}function Ot(T,F,Z,q){let{opaque:K,transmissive:xe,transparent:Re}=T;M.setupLightsView(Z),Pt===!0&&se.setGlobalState(C.clippingPlanes,Z),q&&ve.viewport($.copy(q)),K.length>0&&wn(K,F,Z),xe.length>0&&wn(xe,F,Z),Re.length>0&&wn(Re,F,Z),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function In(T,F,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[q.id]===void 0){let Pe=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[q.id]=new Nn(1,1,{generateMipmaps:!0,type:Pe?Qn:Rn,minFilter:Hn,samples:Math.max(4,pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let xe=M.state.transmissionRenderTarget[q.id],Re=q.viewport||$;xe.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);let be=C.getRenderTarget(),Ae=C.getActiveCubeFace(),De=C.getActiveMipmapLevel();C.setRenderTarget(xe),C.getClearColor(ee),_e=C.getClearAlpha(),_e<1&&C.setClearColor(16777215,.5),C.clear(),Mn&&L.render(Z);let Ke=C.toneMapping;C.toneMapping=hi;let st=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),M.setupLightsView(q),Pt===!0&&se.setGlobalState(C.clippingPlanes,q),wn(T,Z,q),Ve.updateMultisampleRenderTarget(xe),Ve.updateRenderTargetMipmap(xe),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let rt=0,Bt=F.length;rt<Bt;rt++){let vt=F[rt],{object:_t,geometry:nn,material:Ie,group:un}=vt;if(Ie.side===cn&&_t.layers.test(q.layers)){let lt=Ie.side;Ie.side=Qt,Ie.needsUpdate=!0,Dt(_t,Z,q,nn,Ie,un),Ie.side=lt,Ie.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ve.updateMultisampleRenderTarget(xe),Ve.updateRenderTargetMipmap(xe))}C.setRenderTarget(be,Ae,De),C.setClearColor(ee,_e),st!==void 0&&(q.viewport=st),C.toneMapping=Ke}function wn(T,F,Z){let q=F.isScene===!0?F.overrideMaterial:null;for(let K=0,xe=T.length;K<xe;K++){let Re=T[K],{object:be,geometry:Ae,group:De}=Re,Ke=Re.material;Ke.allowOverride===!0&&q!==null&&(Ke=q),be.layers.test(Z.layers)&&Dt(be,F,Z,Ae,Ke,De)}}function Dt(T,F,Z,q,K,xe){N!==null&&K.isNodeMaterial&&N.setObject(T,K),T.onBeforeRender(C,F,Z,q,K,xe),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(C,F,Z,q,T,xe),K.transparent===!0&&K.side===cn&&K.forceSinglePass===!1?(K.side=Qt,K.needsUpdate=!0,C.renderBufferDirect(Z,F,q,K,T,xe),K.side=li,K.needsUpdate=!0,C.renderBufferDirect(Z,F,q,K,T,xe),K.side=cn):C.renderBufferDirect(Z,F,q,K,T,xe),T.onAfterRender(C,F,Z,q,K,xe)}function kt(T){let F=0;for(let Z of T)Z.texture!==null&&F++;return F}function Rt(T,F,Z){F.isScene!==!0&&(F=yn);let q=Ne.get(T),K=M.state.lights,xe=M.state.shadowsArray,Re=K.state.version,be=ie.getParameters(T,K.state,xe,F,Z,M.state.lightProbeGridArray),Ae=ie.getProgramCacheKey(be),De=q.programs;q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,q.fog=F.fog;let Ke=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;q.envMap=R.get(T.envMap||q.environment,Ke),q.envMapRotation=q.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",re),De=new Map,q.programs=De,q.programVariants=new Map);let st=De.get(Ae);if(st!==void 0){if(q.currentProgram===st&&q.lightsStateVersion===Re)return bi(T,be),st}else be.uniforms=ie.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,Z,be),T.onBeforeCompile(be,C),st=ie.acquireProgram(be,Ae),De.set(Ae,st),q.uniforms=be.uniforms;let Pe=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=se.uniform),bi(T,be),q.needsLights=Tn(T),q.lightsStateVersion=Re,q.needsLights&&(Pe.ambientLightColor.value=K.state.ambient,Pe.lightProbe.value=K.state.probe,Pe.sunLights.value=K.state.sun,Pe.sunLightShadows.value=K.state.sunShadow,Pe.directionalLights.value=K.state.directional,Pe.directionalLightShadows.value=K.state.directionalShadow,Pe.spotLights.value=K.state.spot,Pe.spotLightShadows.value=K.state.spotShadow,Pe.rectAreaLights.value=K.state.rectArea,Pe.ltc_1.value=K.state.rectAreaLTC1,Pe.ltc_2.value=K.state.rectAreaLTC2,Pe.pointLights.value=K.state.point,Pe.pointLightShadows.value=K.state.pointShadow,Pe.hemisphereLights.value=K.state.hemi,Pe.sunShadowMatrix.value=K.state.sunShadowMatrix,Pe.sunShadowCascade.value=K.state.sunShadowCascade,Pe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Pe.spotLightMatrix.value=K.state.spotLightMatrix,Pe.spotLightMap.value=K.state.spotLightMap,Pe.pointShadowMatrix.value=K.state.pointShadowMatrix),q.numLightProbeGrids=kt(M.state.lightProbeGridArray),q.currentProgram=st,q.uniformsList=null,st}function An(T,F,Z,q,K){let xe=Ne.get(T),Re=xe.currentProgram.id+","+q+","+K,be=xe.programVariants.get(Re);return be===void 0?(be=Rt(T,F,Z),xe.programVariants.set(Re,be)):(xe.currentProgram=be,xe.uniformsList=null,xe.outputColorSpace=q,xe.toneMapping=K),be}function wt(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=Mr.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function bi(T,F){let Z=Ne.get(T);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function ii(T,F,Z,q,K){F.isScene!==!0&&(F=yn),Ve.resetTextureUnits();let xe=F.fog,Re=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?F.environment:null,be=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:et.workingColorSpace,Ae=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,De=R.get(q.envMap||Re,Ae),Ke=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,st=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Pe=!!Z.morphAttributes.position,rt=!!Z.morphAttributes.normal,Bt=!!Z.morphAttributes.color,vt=hi;q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(vt=C.toneMapping);let _t=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,nn=_t!==void 0?_t.length:0,Ie=Ne.get(q),un=M.state.lights;if(Pt===!0&&(It===!0||T!==X)){let Tt=T===X&&q.id===B;se.setState(q,T,Tt)}let lt=!1,rs=!1;q.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==un.state.version||K.isBatchedMesh&&Ie.batching===!1||!K.isBatchedMesh&&Ie.batching===!0||K.isBatchedMesh&&Ie.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ie.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ie.instancing===!1||!K.isInstancedMesh&&Ie.instancing===!0||K.isSkinnedMesh&&Ie.skinning===!1||!K.isSkinnedMesh&&Ie.skinning===!0||K.isInstancedMesh&&Ie.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ie.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ie.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ie.instancingMorph===!1&&K.morphTexture!==null||Ie.envMap!==De||q.fog===!0&&Ie.fog!==xe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==se.numPlanes||Ie.numIntersection!==se.numIntersection)||Ie.vertexAlphas!==Ke||Ie.vertexTangents!==st||Ie.morphTargets!==Pe||Ie.morphNormals!==rt||Ie.morphColors!==Bt||Ie.morphTargetsCount!==nn||Ie.numLightProbeGrids!==kt(M.state.lightProbeGridArray)?lt=!0:(Ie.outputColorSpace!==be||Ie.toneMapping!==vt)&&(rs=!0):(lt=!0,Ie.__version=q.version);let sn=Ie.currentProgram;(lt===!0||rs===!0)&&(sn=rs===!0?An(q,F,K,be,vt):Rt(q,F,K),N&&q.isNodeMaterial&&N.onUpdateProgram(q,sn,Ie));let Va=!1,zi=!1,as=!1,ot=sn.getUniforms(),Zt=Ie.uniforms;if(ve.useProgram(sn.program)&&(Va=!0,zi=!0,as=!0),q.id!==B&&(B=q.id,zi=!0),Va||X!==T){ve.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ot.setValue(k,"projectionMatrix",T.projectionMatrix),ot.setValue(k,"viewMatrix",T.matrixWorldInverse);let jt=ot.map.cameraPosition;jt!==void 0&&jt.setValue(k,tn.setFromMatrixPosition(T.matrixWorld)),pt.logarithmicDepthBuffer&&ot.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ot.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,zi=!0,as=!0)}if(Ie.needsLights&&(un.state.sunShadowMap.length>0&&ot.setValue(k,"sunShadowMap",un.state.sunShadowMap,Ve),un.state.directionalShadowMap.length>0&&ot.setValue(k,"directionalShadowMap",un.state.directionalShadowMap,Ve),un.state.spotShadowMap.length>0&&ot.setValue(k,"spotShadowMap",un.state.spotShadowMap,Ve),un.state.pointShadowMap.length>0&&ot.setValue(k,"pointShadowMap",un.state.pointShadowMap,Ve)),K.isSkinnedMesh){ot.setOptional(k,K,"bindMatrix"),ot.setOptional(k,K,"bindMatrixInverse");let Tt=K.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),ot.setValue(k,"boneTexture",Tt.boneTexture,Ve))}K.isBatchedMesh&&(ot.setOptional(k,K,"batchingTexture"),ot.setValue(k,"batchingTexture",K._matricesTexture,Ve),ot.setOptional(k,K,"batchingIdTexture"),ot.setValue(k,"batchingIdTexture",K._indirectTexture,Ve),ot.setOptional(k,K,"batchingColorTexture"),K._colorsTexture!==null&&ot.setValue(k,"batchingColorTexture",K._colorsTexture,Ve));let qn=Z.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&te.update(K,Z,sn),(zi||Ie.receiveShadow!==K.receiveShadow)&&(Ie.receiveShadow=K.receiveShadow,ot.setValue(k,"receiveShadow",K.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&F.environment!==null&&(Zt.envMapIntensity.value=F.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=S_()),zi){if(ot.setValue(k,"toneMappingExposure",C.toneMappingExposure),Ie.needsLights&&si(Zt,as),xe&&q.fog===!0&&ue.refreshFogUniforms(Zt,xe),ue.refreshMaterialUniforms(Zt,q,Se,Le,M.state.transmissionRenderTarget[T.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){let Tt=_,jt=0;for(let xi of M.state.lightProbeGridArray)xi.texture!==null&&(Tt.textures[jt]=xi.texture,Tt.min[jt]=xi.boundingBox.min,Tt.max[jt]=xi.boundingBox.max,Tt.resolution[jt]=xi.resolution,jt++);for(let xi in Tt)Tt[xi].length=jt;Zt.probesSH.value=Tt.textures,Zt.probesMin.value=Tt.min,Zt.probesMax.value=Tt.max,Zt.probesResolution.value=Tt.resolution}Mr.upload(k,wt(Ie),Zt,Ve)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Mr.upload(k,wt(Ie),Zt,Ve),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ot.setValue(k,"center",K.center),ot.setValue(k,"modelViewMatrix",K.modelViewMatrix),ot.setValue(k,"normalMatrix",K.normalMatrix),ot.setValue(k,"modelMatrix",K.matrixWorld),q.uniformsGroups!==void 0){let Tt=q.uniformsGroups;for(let jt=0,xi=Tt.length;jt<xi;jt++){let wu=Tt[jt];Ee.update(wu,sn),Ee.bind(wu,sn)}}return sn}function si(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Tn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(T,F,Z){let q=Ne.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ne.get(T.texture).__webglTexture=F,Ne.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let Z=Ne.get(T);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,Z=0){W=T,J=F,Y=Z;let q=null,K=!1,xe=!1;if(T){let be=Ne.get(T);if(be.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(k.FRAMEBUFFER,be.__webglFramebuffer),$.copy(T.viewport),ye.copy(T.scissor),Me=T.scissorTest,ve.viewport($),ve.scissor(ye),ve.setScissorTest(Me),B=-1;return}else if(be.__webglFramebuffer===void 0)Ve.setupRenderTarget(T);else if(be.__hasExternalTextures)Ve.rebindTextures(T,Ne.get(T.texture).__webglTexture,Ne.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ke=T.depthTexture;if(be.__boundDepthTexture!==Ke){if(Ke!==null&&Ne.has(Ke)&&(T.width!==Ke.image.width||T.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(T)}}let Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(xe=!0);let De=Ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[F])?q=De[F][Z]:q=De[F],K=!0):T.samples>0&&Ve.useMultisampledRTT(T)===!1?q=Ne.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?q=De[Z]:q=De,$.copy(T.viewport),ye.copy(T.scissor),Me=T.scissorTest}else $.copy(Be).multiplyScalar(Se).floor(),ye.copy(qe).multiplyScalar(Se).floor(),Me=nt;if(Z!==0&&(q=G),ve.bindFramebuffer(k.FRAMEBUFFER,q)&&ve.drawBuffers(T,q),ve.viewport($),ve.scissor(ye),ve.setScissorTest(Me),K){let be=Ne.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,Z)}else if(xe){let be=F;for(let Ae=0;Ae<T.textures.length;Ae++){let De=Ne.get(T.textures[Ae]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ae,De.__webglTexture,Z,be)}}else if(T!==null&&Z!==0){let be=Ne.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,be.__webglTexture,Z)}B=-1};function On(T){let F=Ne.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=pt.textureFormatReadable(T.format),F.__typeReadable=pt.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,Z,q,K,xe,Re,be=0){if(!(T&&T.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ae=Ae[Re],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){ve.bindFramebuffer(k.FRAMEBUFFER,Ae);try{let De=T.textures[be],Ke=De.format,st=De.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+be);let Pe=On(De);if(Pe.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-q&&Z>=0&&Z<=T.height-K&&k.readPixels(F,Z,q,K,fe.convert(Ke),fe.convert(st),xe)}finally{let De=W!==null?Ne.get(W).__webglFramebuffer:null;ve.bindFramebuffer(k.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,F,Z,q,K,xe,Re,be=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ae=Ae[Re],Array.isArray(Ae)&&(Ae=Ae[0])),Ae)if(F>=0&&F<=T.width-q&&Z>=0&&Z<=T.height-K){ve.bindFramebuffer(k.FRAMEBUFFER,Ae);let De=T.textures[be],Ke=De.format,st=De.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+be);let Pe=On(De);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,rt),k.bufferData(k.PIXEL_PACK_BUFFER,xe.byteLength,k.STREAM_READ),k.readPixels(F,Z,q,K,fe.convert(Ke),fe.convert(st),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Bt=W!==null?Ne.get(W).__webglFramebuffer:null;ve.bindFramebuffer(k.FRAMEBUFFER,Bt);let vt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Kf(k,vt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,rt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,xe),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(rt),k.deleteSync(vt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,Z=0){let q=Math.pow(2,-Z),K=Math.floor(T.image.width*q),xe=Math.floor(T.image.height*q),Re=F!==null?F.x:0,be=F!==null?F.y:0;Ve.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,Z,0,0,Re,be,K,xe),ve.unbindTexture()},this.copyTextureToTexture=function(T,F,Z=null,q=null,K=0,xe=0){let Re,be,Ae,De,Ke,st,Pe,rt,Bt,vt=T.isCompressedTexture?T.mipmaps[xe]:T.image;if(Z!==null)Re=Z.max.x-Z.min.x,be=Z.max.y-Z.min.y,Ae=Z.isBox3?Z.max.z-Z.min.z:1,De=Z.min.x,Ke=Z.min.y,st=Z.isBox3?Z.min.z:0;else{let ot=Math.pow(2,-K);Re=Math.floor(vt.width*ot),be=Math.floor(vt.height*ot),T.isDataArrayTexture?Ae=vt.depth:T.isData3DTexture?Ae=Math.floor(vt.depth*ot):Ae=1,De=0,Ke=0,st=0}q!==null?(Pe=q.x,rt=q.y,Bt=q.z):(Pe=0,rt=0,Bt=0);let _t=fe.convert(F.format),nn=fe.convert(F.type),Ie;F.isData3DTexture?(Ve.setTexture3D(F,0),Ie=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ve.setTexture2DArray(F,0),Ie=k.TEXTURE_2D_ARRAY):(Ve.setTexture2D(F,0),Ie=k.TEXTURE_2D),ve.activeTexture(k.TEXTURE0),ve.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),ve.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ve.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);let un=ve.getParameter(k.UNPACK_ROW_LENGTH),lt=ve.getParameter(k.UNPACK_IMAGE_HEIGHT),rs=ve.getParameter(k.UNPACK_SKIP_PIXELS),sn=ve.getParameter(k.UNPACK_SKIP_ROWS),Va=ve.getParameter(k.UNPACK_SKIP_IMAGES);ve.pixelStorei(k.UNPACK_ROW_LENGTH,vt.width),ve.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt.height),ve.pixelStorei(k.UNPACK_SKIP_PIXELS,De),ve.pixelStorei(k.UNPACK_SKIP_ROWS,Ke),ve.pixelStorei(k.UNPACK_SKIP_IMAGES,st);let zi=T.isDataArrayTexture||T.isData3DTexture,as=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let ot=Ne.get(T),Zt=Ne.get(F),qn=Ne.get(ot.__renderTarget),Tt=Ne.get(Zt.__renderTarget);ve.bindFramebuffer(k.READ_FRAMEBUFFER,qn.__webglFramebuffer),ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let jt=0;jt<Ae;jt++)zi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ne.get(T).__webglTexture,K,st+jt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ne.get(F).__webglTexture,xe,Bt+jt)),k.blitFramebuffer(De,Ke,De+Re,Ke+be,Pe,rt,Pe+Re,rt+be,k.DEPTH_BUFFER_BIT,k.NEAREST);ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(K!==0||T.isRenderTargetTexture||Ne.has(T)){let ot=Ne.get(T),Zt=Ne.get(F);ve.bindFramebuffer(k.READ_FRAMEBUFFER,P),ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,U);for(let qn=0;qn<Ae;qn++)zi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ot.__webglTexture,K,st+qn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ot.__webglTexture,K),as?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Zt.__webglTexture,xe,Bt+qn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Zt.__webglTexture,xe),K!==0?k.blitFramebuffer(De,Ke,De+Re,Ke+be,Pe,rt,Pe+Re,rt+be,k.COLOR_BUFFER_BIT,k.NEAREST):as?k.copyTexSubImage3D(Ie,xe,Pe,rt,Bt+qn,De,Ke,Re,be):k.copyTexSubImage2D(Ie,xe,Pe,rt,De,Ke,Re,be);ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else as?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Ie,xe,Pe,rt,Bt,Re,be,Ae,_t,nn,vt.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(Ie,xe,Pe,rt,Bt,Re,be,Ae,_t,vt.data):k.texSubImage3D(Ie,xe,Pe,rt,Bt,Re,be,Ae,_t,nn,vt):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,xe,Pe,rt,Re,be,_t,nn,vt.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,xe,Pe,rt,vt.width,vt.height,_t,vt.data):k.texSubImage2D(k.TEXTURE_2D,xe,Pe,rt,Re,be,_t,nn,vt);ve.pixelStorei(k.UNPACK_ROW_LENGTH,un),ve.pixelStorei(k.UNPACK_IMAGE_HEIGHT,lt),ve.pixelStorei(k.UNPACK_SKIP_PIXELS,rs),ve.pixelStorei(k.UNPACK_SKIP_ROWS,sn),ve.pixelStorei(k.UNPACK_SKIP_IMAGES,Va),xe===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&k.generateMipmap(Ie),ve.unbindTexture()},this.initRenderTarget=function(T){Ne.get(T).__webglFramebuffer===void 0&&Ve.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ve.setTextureCube(T,0):T.isData3DTexture?Ve.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ve.setTexture2DArray(T,0):Ve.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){J=0,Y=0,W=null,ve.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};function Hc(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Ct;c.morphTargetsRelative=o;let l=0;for(let h=0;h<s.length;++h){let f=s[h],d=0,u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,f=[];for(let d=0;d<s.length;++d){let u=s[d].index;for(let p=0;p<u.count;++p)f.push(u.getX(p)+h);h+=s[d].attributes.position.count}c.setIndex(f)}for(let h in r){let f=Ld(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let u=[];for(let m=0;m<a[h].length;++m)u.push(a[h][m][d]);let p=Ld(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Ld(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new $e(a,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let f=c/t;for(let d=0,u=h.count;d<u;d++)for(let p=0;p<t;p++){let m=h.getComponent(d,p);o.setComponent(d+f,p,m)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Rh(s,e){if(e===Ql)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===yr||e===Ma){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===yr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Vc(s){let e=new Map,t=new Map,n=s.clone();return Dd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Dd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Dd(s.children[n],e.children[n],t)}var Ar=class extends ci{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Wc(t,tt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wc(t,tt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Jh(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Di.extractUrlBase(e);a=Di.resolveURL(l,this.path)}else a=Di.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new pr(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===kd){try{a[tt.KHR_BINARY_GLTF]=new Yh(e)}catch(f){i&&i(f);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new iu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let f=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(f){case tt.KHR_MATERIALS_UNLIT:a[f]=new Dh;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[f]=new Zh(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[f]=new $h;break;case tt.KHR_MESH_QUANTIZATION:a[f]=new Qh;break;default:d.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function w_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Et(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Lh=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Te(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],pn);let f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Es(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ua(h),l.distance=f;break;case"spot":l=new ha(h),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),pi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Dh=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,n){let i=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],pn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(i)}},Nh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Fh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Et(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(r,r)}return Promise.all(i)}},Uh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Et(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},Oh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},kh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Et(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Bh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Et(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,yt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},zh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Gh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Et(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(r[0],r[1],r[2],pn),Promise.all(i)}},Hh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Vh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(r[0],r[1],r[2],pn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,yt)),Promise.all(i)}},Wh=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){return Et(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},qh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Et(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Xh=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},jh=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Kh=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Wc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,f=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,d,i.mode,i.filter).then(function(u){return u.buffer}):a.ready.then(function(){let u=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(u),h,f,d,i.mode,i.filter),u})})}else return null}},Jh=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Wn.TRIANGLES&&l.mode!==Wn.TRIANGLE_STRIP&&l.mode!==Wn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),f=h.isGroup?h.children:[h],d=l[0].count,u=[];for(let p of f){let m=new Ue,b=new z,g=new Jt,v=new z(1,1,1),A=new Zn(p.geometry,p.material,d);for(let w=0;w<d;w++)c.TRANSLATION&&b.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,w),c.SCALE&&v.fromBufferAttribute(c.SCALE,w),A.setMatrixAt(w,m.compose(b,g,v));let _=null;for(let w in c)if(w==="_COLOR_0"){let M=c[w];A.instanceColor=new Ei(M.array,M.itemSize,M.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(_===null){let x=A.geometry;_=new Ct,_.name=x.name;for(let y in x.attributes)_.setAttribute(y,x.attributes[y]);for(let y in x.morphAttributes)_.morphAttributes[y]=x.morphAttributes[y];x.index!==null&&_.setIndex(x.index),_.morphTargetsRelative=x.morphTargetsRelative;for(let y of x.groups)_.addGroup(y.start,y.count,y.materialIndex);x.boundingBox!==null&&(_.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(_.boundingSphere=x.boundingSphere.clone()),_.drawRange.start=x.drawRange.start,_.drawRange.count=x.drawRange.count,_.userData=Object.assign({},x.userData),A.geometry=_}let M=c[w];_.setAttribute(w,new Ei(M.array,M.itemSize,M.normalized))}gt.prototype.copy.call(A,p),this.parser.assignFinalMaterial(A),u.push(A)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}},kd="glTF",Ra=12,Nd={JSON:1313821514,BIN:5130562},Yh=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ra),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ra,r=new DataView(e,Ra),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Nd.JSON){let l=new Uint8Array(e,Ra+a,o);this.content=n.decode(l)}else if(c===Nd.BIN){let l=Ra+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Zh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let f=tu[h]||h.toLowerCase();o[f]=a[h]}for(let h in e.attributes){let f=tu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],u=wr[d.componentType];l[f]=u.name,c[f]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(f,d){i.decodeDracoFile(h,function(u){for(let p in u.attributes){let m=u.attributes[p],b=c[p];b!==void 0&&(m.normalized=b)}f(u)},o,l,pn,d)})})}},$h=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Qh=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},qc=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,f=(n-t)/h,d=f*f,u=d*f,p=e*l,m=p-l,b=-2*u+3*d,g=u-d,v=1-b,A=g-d+f;for(let _=0;_!==o;_++){let w=a[m+_+o],M=a[m+_+c]*h,x=a[p+_+o],y=a[p+_]*h;r[_]=v*w+A*M+b*x+g*y}return r}},A_=new Jt,eu=class extends qc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return A_.fromArray(r).normalize().toArray(r),r}},Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fd={9728:Nt,9729:Ht,9984:Ko,9985:_r,9986:Is,9987:Hn},Ud={33071:Bn,33648:er,10497:Ki},Ch={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},T_={CUBICSPLINE:void 0,LINEAR:ms,STEP:ps},Ph={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function E_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ss({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),s.DefaultMaterial}function Ns(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function pi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function R_(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let f=e[l];if(n){let d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;a.push(d)}if(i){let d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],f=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function C_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function P_(s){let e,t=s.extensions&&s.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ih(t.attributes):e=s.indices+":"+Ih(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ih(s.targets[n]);return e}function Ih(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function nu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function I_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var L_=new Ue,iu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new w_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?(this.textureLoader=new oa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new fa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ns(r,o,i),pi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Di.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Ch[i.type],o=wr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new $e(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Ch[i.type],l=wr[i.componentType],h=l.BYTES_PER_ELEMENT,f=h*c,d=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,m,b;if(u&&u!==f){let g=Math.floor(d/u),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,A=t.cache.get(v);A||(m=new l(o,g*u,i.count*u/h),A=new ar(m,u/h),t.cache.add(v,A)),b=new or(A,c,d%u/h,p)}else o===null?m=new l(i.count*c):m=new l(o,d,i.count*c),b=new $e(m,c,p);if(i.sparse!==void 0){let g=Ch.SCALAR,v=wr[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,w=new v(a[1],A,i.sparse.count*g),M=new l(a[2],_,i.sparse.count*c);o!==null&&(b=new $e(b.array.slice(),b.itemSize,b.normalized)),b.normalized=!1;for(let x=0,y=w.length;x<y;x++){let I=w[x];if(b.setX(I,M[x*c]),c>=2&&b.setY(I,M[x*c+1]),c>=3&&b.setZ(I,M[x*c+2]),c>=4&&b.setW(I,M[x*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}b.normalized=p}return b})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Fd[d.magFilter]||Ht,h.minFilter=Fd[d.minFilter]||Hn,h.wrapS=Ud[d.wrapS]||Ki,h.wrapT=Ud[d.wrapT]||Ki,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==Ht,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(u,p){t.parse(d,u,p)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let u=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(u,p){let m=u;t.isImageBitmapLoader===!0&&(m=function(b){let g=new Vt(b);g.needsUpdate=!0,u(g)}),t.load(Di.resolveURL(d,r.path),m,void 0,p)})})}let f=h.then(function(d){return l===!0&&o.revokeObjectURL(c),pi(d,a),d.userData.mimeType=a.mimeType||I_(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ur,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new hr,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ss}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[tt.KHR_MATERIALS_UNLIT]){let f=i[tt.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),l.push(f.extendParams(o,r,t))}else{let f=r.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){let d=f.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],pn),o.opacity=d[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",f.baseColorTexture,yt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=cn);let h=r.alphaMode||Ph.OPAQUE;if(h===Ph.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ph.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==on&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Xe(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;o.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&a!==on&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==on){let f=r.emissiveFactor;o.emissive=new Te().setRGB(f[0],f[1],f[2],pn)}return r.emissiveTexture!==void 0&&a!==on&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,yt)),Promise.all(l).then(function(){let f=new a(o);return r.name&&(f.name=r.name),pi(f,r),t.associations.set(f,{materials:e}),r.extensions&&Ns(i,f,r),f})}createUniqueName(e){let t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Od(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=P_(l),f=i[h];if(f)a.push(f.promise);else{let d;l.extensions&&l.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Od(new Ct,l,t),l.mode===Wn.TRIANGLE_STRIP?d=d.then(u=>Rh(u,Ma)):l.mode===Wn.TRIANGLE_FAN&&(d=d.then(u=>Rh(u,yr))),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?E_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let u=0,p=h.length;u<p;u++){let m=h[u],b=a[u],g,v=l[u];if(b.mode===Wn.TRIANGLES||b.mode===Wn.TRIANGLE_STRIP||b.mode===Wn.TRIANGLE_FAN||b.mode===void 0){let A=r.isSkinnedMesh===!0,_=m.hasAttribute("skinIndex")&&m.hasAttribute("skinWeight");A&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=A&&_?new xs(m,v):new At(m,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(b.mode===Wn.LINES)g=new Zr(m,v);else if(b.mode===Wn.LINE_STRIP)g=new vs(m,v);else if(b.mode===Wn.LINE_LOOP)g=new $r(m,v);else if(b.mode===Wn.POINTS)g=new ys(m,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(g.geometry.morphAttributes).length>0&&C_(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),pi(g,r),b.extensions&&Ns(i,g,b),t.assignFinalMaterial(g),f.push(g)}for(let u=0,p=f.length;u<p;u++)t.associations.set(f[u],{meshes:e,primitives:u});if(f.length===1)return r.extensions&&Ns(i,f[0],r),f[0];let d=new dn;r.extensions&&Ns(i,d,r),t.associations.set(d,{meshes:e});for(let u=0,p=f.length;u<p;u++)d.add(f[u]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(ln.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ts(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),pi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let f=a[l];if(f){o.push(f);let d=new Ue;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new _s(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let f=0,d=i.channels.length;f<d;f++){let u=i.channels[f],p=i.samplers[u.sampler],m=u.target,b=m.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;m.node!==void 0&&(a.push(this.getDependency("node",b)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",v)),l.push(p),h.push(m))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(f){let d=f[0],u=f[1],p=f[2],m=f[3],b=f[4],g=[];for(let A=0,_=d.length;A<_;A++){let w=d[A],M=u[A],x=p[A],y=m[A],I=b[A];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let C=n._createAnimationTracks(w,M,x,y,I);if(C)for(let D=0;D<C.length;D++)g.push(C[D])}let v=new ws(r,void 0,g);return pi(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],f=l[1],d=l[2];d!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(d,L_)});for(let u=0,p=f.length;u<p;u++)h.add(f[u]);if(h.userData.pivot!==void 0&&f.length>0){let u=h.userData.pivot,p=f[0];h.pivot=new z().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new cr:l.length>1?h=new dn:l.length===1?h=l[0]:h=new gt,h!==l[0])for(let f=0,d=l.length;f<d;f++)h.add(l[f]);if(r.name&&(h.userData.name=r.name,h.name=a),pi(h,r),r.extensions&&Ns(n,h,r),r.matrix!==void 0){let f=new Ue;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let f=i.associations.get(h);i.associations.set(h,{...f})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new dn;n.name&&(r.name=i.createUniqueName(n.name)),pi(r,n),n.extensions&&Ns(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,f=c.length;h<f;h++){let d=c[h];d.parent!==null?r.add(Vc(d)):r.add(d)}let l=h=>{let f=new Map;for(let[d,u]of i.associations)(d instanceof mn||d instanceof Vt)&&f.set(d,u);return h.traverse(d=>{let u=i.associations.get(d);u!=null&&f.set(d,u)}),f};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}ts[r.path]===ts.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(ts[r.path]){case ts.weights:h=Pi;break;case ts.rotation:h=Ii;break;case ts.translation:case ts.scale:h=$i;break;default:n.itemSize===1?h=Pi:h=$i;break}let f=i.interpolation!==void 0?T_[i.interpolation]:ms,d=this._getArrayFromAccessor(n);for(let u=0,p=c.length;u<p;u++){let m=new h(c[u]+"."+ts[r.path],t.array,d,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=nu(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ii?eu:qc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function D_(s,e,t){let n=e.attributes,i=new Fn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new z(c[0],c[1],c[2]),new z(l[0],l[1],l[2])),o.normalized){let h=nu(wr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new z,c=new z;for(let l=0,h=r.length;l<h;l++){let f=r[l];if(f.POSITION!==void 0){let d=t.json.accessors[f.POSITION],u=d.min,p=d.max;if(u!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),d.normalized){let m=nu(wr[d.componentType]);c.multiplyScalar(m)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Yt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Od(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=tu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return et.workingColorSpace!==pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),pi(s,e),D_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?R_(s,e.targets,t):s})}var Xc=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(g){r=g.instance,r.exports.__wasm_call_ctors()});function o(g){for(var v=new Uint8Array(g.length),A=0;A<g.length;++A){var _=g.charCodeAt(A);v[A]=_>96?_-97:_>64?_-39:_+4}for(var w=0,A=0;A<g.length;++A)v[w++]=v[A]<60?n[v[A]]:(v[A]-60)*64+v[++A];return v.buffer.slice(0,w)}function c(g,v,A,_,w,M,x){var y=g.exports.sbrk,I=_+3&-4,C=y(I*w),D=y(M.length),N=new Uint8Array(g.exports.memory.buffer);N.set(M,D);var G=v(C,_,w,D,M.length);if(G==0&&x&&x(C,I,w),A.set(N.subarray(C,C+_*w)),y(C-y(0)),G!=0)throw new Error("Malformed buffer data: "+G)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},f=[],d=0;function u(g){var v={object:new Worker(g),pending:0,requests:{}};return v.object.onmessage=function(A){var _=A.data;v.pending-=_.count,v.requests[_.id][_.action](_.value),delete v.requests[_.id]},v}function p(g){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+b.name+";"+c.toString()+b.toString(),A=new Blob([v],{type:"text/javascript"}),_=URL.createObjectURL(A),w=f.length;w<g;++w)f[w]=u(_);for(var w=g;w<f.length;++w)f[w].object.postMessage({});f.length=g,URL.revokeObjectURL(_)}function m(g,v,A,_,w){for(var M=f[0],x=1;x<f.length;++x)f[x].pending<M.pending&&(M=f[x]);return new Promise(function(y,I){var C=new Uint8Array(A),D=++d;M.pending+=g,M.requests[D]={resolve:y,reject:I},M.object.postMessage({id:D,count:g,size:v,source:C,mode:_,filter:w},[C.buffer])})}function b(g){var v=g.data;self.ready.then(function(A){if(!v.id)return self.close();try{var _=new Uint8Array(v.count*v.size);c(A,A.exports[v.mode],_,v.count,v.size,v.source,A.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:_},[_.buffer])}catch(w){self.postMessage({id:v.id,count:v.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(g){p(g)},decodeVertexBuffer:function(g,v,A,_,w){c(r,r.exports.meshopt_decodeVertexBuffer,g,v,A,_,r.exports[l[w]])},decodeIndexBuffer:function(g,v,A,_){c(r,r.exports.meshopt_decodeIndexBuffer,g,v,A,_)},decodeIndexSequence:function(g,v,A,_){c(r,r.exports.meshopt_decodeIndexSequence,g,v,A,_)},decodeGltfBuffer:function(g,v,A,_,w,M){c(r,r.exports[h[w]],g,v,A,_,r.exports[l[M]])},decodeGltfBufferAsync:function(g,v,A,_,w){return f.length>0?m(g,v,A,h[_],l[w]):a.then(function(){var M=new Uint8Array(g*v);return c(r,r.exports[h[_]],M,g,v,A,r.exports[l[w]]),M})}}})();var N_=[$e.prototype.getX,$e.prototype.getY,$e.prototype.getZ,$e.prototype.getW],Bd={idle:["Idle",1,!0],combat:["Idle_Combat",1,!0],run:["Running_A",1,!0],walk:["Walking_A",1,!0],attack:["1H_Melee_Attack_Chop",1.25,!1],slash:["1H_Melee_Attack_Slice_Horizontal",1.25,!1],spin:["2H_Melee_Attack_Spin",1.3,!1],shoot:["1H_Ranged_Shoot",1.2,!1],cast:["Spellcast_Shoot",1.2,!1],summon:["Spellcast_Summon",1,!1],block:["Block",1.2,!1],hit:["Hit_A",1.3,!1],die:["Death_A",1,!1],dead:["Death_A_Pose",1,!0],cheer:["Cheer",1,!0],dash:["Dodge_Forward",1.3,!1],jump:["Jump_Full_Short",1,!1],rise:["Lie_StandUp",1.4,!1],taunt:["Taunt",1,!1],spawn:["Spawn_Ground_Skeletons",1.2,!1],use:["Interact",1.2,!1]},F_={Knight:["1H_Sword","Badge_Shield","Knight_Helmet","Knight_Cape"],Barbarian:["1H_Axe","Barbarian_Round_Shield","Barbarian_Hat","Barbarian_Cape"],Mage:["2H_Staff","Mage_Hat","Mage_Cape"],Rogue:["1H_Crossbow","Knife_Offhand","Rogue_Cape"],Rogue_Hooded:["Knife","Knife_Offhand","Rogue_Cape"],Skeleton_Minion:[],Skeleton_Warrior:["Skeleton_Warrior_Helmet"],Skeleton_Rogue:["Skeleton_Rogue_Hood","Skeleton_Rogue_Cape"],Skeleton_Mage:["Skeleton_Mage_Hat"]},U_=new Ar().setMeshoptDecoder(Xc),zd=s=>new Promise((e,t)=>U_.load(s,e,void 0,t));function O_(s,e){if(s&&/glow/i.test(s.name||""))return new on({color:8057087,fog:!0});let t=e||s.map;return t&&(t.colorSpace=yt,t.anisotropy=2),new bn({map:t||null,color:16777215})}function k_(s,e){let t=s.scene;t.updateMatrixWorld(!0);let n=new Set(F_[e]||[]),i=[],r=[];if(t.traverse(_=>{_.isSkinnedMesh?i.push(_):_.isMesh&&r.push(_)}),!i.length)throw new Error("no skinned mesh in "+e);let a=i[0],o=a.skeleton,c=o.bones,l=new Map(c.map((_,w)=>[_,w])),h=a.bindMatrixInverse.clone(),f=[],d=_=>{let w=f.findIndex(M=>M.src===_);return w<0&&(f.push({src:_,mat:O_(_)}),w=f.length-1),w},u=[],p=_=>{_=_.index?_.toNonIndexed():_.clone();for(let w of Object.keys(_.attributes))["position","normal","uv","skinIndex","skinWeight"].includes(w)||_.deleteAttribute(w);for(let w of Object.keys(_.attributes)){let M=_.attributes[w],x=M.itemSize,y=w==="skinIndex"?new Uint16Array(M.count*x):new Float32Array(M.count*x);for(let I=0;I<M.count;I++)for(let C=0;C<x;C++)y[I*x+C]=w==="skinIndex"?M.getComponent(I,C):N_[C].call(M,I);_.setAttribute(w,new $e(y,x))}return _.attributes.normal||_.computeVertexNormals(),_.attributes.uv||_.setAttribute("uv",new $e(new Float32Array(_.attributes.position.count*2),2)),_};for(let _ of i){let w=p(_.geometry);if(_!==a){let M=_.skeleton.bones,x=M.findIndex(C=>l.has(C)),y=l.get(M[x]),I=new Ue().copy(h).multiply(new Ue().copy(o.boneInverses[y]).invert()).multiply(_.skeleton.boneInverses[x]).multiply(_.bindMatrix);w.applyMatrix4(I)}if(_.skeleton!==o){let M=_.skeleton.bones.map(y=>l.get(y)??0),x=w.attributes.skinIndex;for(let y=0;y<x.count;y++)for(let I=0;I<4;I++)x.setComponent(y,I,M[x.getComponent(y,I)])}u.push({g:w,m:d(_.material)})}for(let _ of r){if(!n.has(_.name)&&!n.has(_.parent?.name))continue;let w=_.parent;for(;w&&!w.isBone;)w=w.parent;if(!w)continue;let M=l.get(w);if(M===void 0)continue;let x=new Ue;{let G=_;for(x.copy(_.matrix),G=_.parent;G&&G!==w;)x.premultiply(G.matrix),G=G.parent}let y=new Ue().copy(h).multiply(new Ue().copy(o.boneInverses[M]).invert()).multiply(x),I=p(_.geometry);I.applyMatrix4(y);let C=I.attributes.position.count,D=new Uint16Array(C*4),N=new Float32Array(C*4);for(let G=0;G<C;G++)D[G*4]=M,N[G*4]=1;I.setAttribute("skinIndex",new $e(D,4)),I.setAttribute("skinWeight",new $e(N,4)),u.push({g:I,m:d(_.material)})}u.sort((_,w)=>_.m-w.m);let m=Hc(u.map(_=>_.g),f.length>1);if(f.length>1){let _=0;m.clearGroups();for(let w=0;w<f.length;w++){let M=0;for(let x of u)x.m===w&&(M+=x.g.attributes.position.count);M&&m.addGroup(_,M,w),_+=M}}for(let _ of u)_.g.dispose();m.computeBoundingBox(),m.boundingSphere=new Yt(new z(0,1.1,0),1.9);let b=new dn;b.name=e;let g=(()=>{let _=c[0];for(;_.parent&&_.parent.isBone;)_=_.parent;return _})(),v=[];g.traverse(_=>{_.isMesh&&v.push(_)});for(let _ of v)_.parent.remove(_),_.geometry.dispose();b.add(g);let A=new xs(m,f.length>1?f.map(_=>_.mat):f[0].mat);return A.frustumCulled=!0,b.add(A),b.updateMatrixWorld(!0),A.bind(new _s(c,o.boneInverses.map(_=>_.clone())),a.bindMatrix.clone()),{tpl:b,geo:m,mats:f.map(_=>_.mat),height:2.1}}async function Gd({base:s="/models",names:e=[],onProgress:t}={}){let n={templates:new Map,clips:new Map,variants:new Map,pools:new Map,disposables:[]},[i,...r]=await Promise.all([zd(`${s}/anims.glb`),...e.map(a=>zd(`${s}/chars/${a}.glb`))]);for(let a of i.animations)n.clips.set(a.name,a);return e.forEach((a,o)=>{let c=k_(r[o],a);n.templates.set(a,c),n.disposables.push(c.geo,...c.mats);for(let l of c.mats)l.map&&n.disposables.push(l.map);t?.(a)}),n.material=(a,o=null,c=.32)=>{let l=n.templates.get(a);if(o===null)return l.mats.length>1?l.mats:l.mats[0];let h=a+":"+o+":"+c,f=n.variants.get(h);if(!f){let d=new Te(o),u=new Te(1,1,1).lerp(d,c);if(f=l.mats.map(p=>{if(p.isMeshBasicMaterial)return p;let m=p.clone();return m.color.copy(u),n.disposables.push(m),m}),f=f.length>1?f:f[0],n.variants.set(h,f),n.variants.size>160){let p=n.variants.keys().next().value;n.variants.delete(p)}}return f},n.actor=(a,o=null)=>{let c=n.pools.get(a)||[];n.pools.set(a,c);let l=c.pop();if(!l){let h=n.templates.get(a),f=Vc(h.tpl),d=null;f.traverse(p=>{p.isSkinnedMesh&&(d=p)});let u=new da(f);l={name:a,obj:f,mesh:d,mixer:u,actions:new Map,state:"",base:"idle",until:0,tint:void 0,acc:0,flashT:-9},l.play=(p,m,{fade:b=.15,speed:g=1}={})=>B_(n,l,p,m,b,g)}return l.tint!==o&&(l.mesh.material=n.material(a,o),l.tint=o),l.obj.visible=!0,l.state="",l.base="idle",l.until=0,l.mixer.stopAllAction(),l.play("idle",0,{fade:0}),l},n.release=a=>{a.obj.visible=!1,a.obj.parent?.remove(a.obj),a.mixer.stopAllAction(),(n.pools.get(a.name)||[]).push(a)},n.dispose=()=>{for(let a of n.disposables)try{a.dispose()}catch{}n.pools.clear(),n.variants.clear()},n}function Hd(s,e,t){let n=e.actions.get(t);if(!n){let[i,r,a]=Bd[t]||Bd.idle,o=s.clips.get(i)||s.clips.get("Idle");n=e.mixer.clipAction(o),n.timeScaleBase=r,n.loopMode=a,a?n.setLoop(Dc,1/0):(n.setLoop(Lc,1),n.clampWhenFinished=!0),e.actions.set(t,n)}return n}function B_(s,e,t,n,i,r){let a=Hd(s,e,t);if(a.loopMode){if(e.base=t,n<e.until||e.state===t)return}else e.until=n+a.getClip().duration/(a.timeScaleBase*r)*.92;let o=e.actions.get(e.state);a.reset(),a.timeScale=a.timeScaleBase*r,a.enabled=!0,a.setEffectiveWeight(1),o&&o!==a&&i>0?a.crossFadeFrom(o,i,!1):o&&o!==a&&o.stop(),a.play(),e.state=t}function su(s,e,t,n){if(e.state!==e.base&&n>=e.until&&e.base){let i=Hd(s,e,e.base),r=e.actions.get(e.state);i.reset(),i.timeScale=i.timeScaleBase,i.enabled=!0,i.setEffectiveWeight(1),r&&i.crossFadeFrom(r,.18,!1),i.play(),e.state=e.base}e.mixer.update(t)}var z_=[$e.prototype.getX,$e.prototype.getY,$e.prototype.getZ,$e.prototype.getW],G_=new Ar().setMeshoptDecoder(Xc);async function Vd(s){let e=await new Promise((c,l)=>G_.load(s,c,void 0,l)),t=e.scene;t.updateMatrixWorld(!0);let n=new Map,i=[],r=null;for(let c of t.children){let l=[],h=new Ue().copy(c.parent.matrixWorld).invert();if(c.traverse(d=>{if(!d.isMesh)return;!r&&d.material.map&&(r=d.material.map);let u=d.geometry.index?d.geometry.toNonIndexed():d.geometry.clone();for(let p of Object.keys(u.attributes))["position","normal","uv"].includes(p)||u.deleteAttribute(p);for(let p of["position","normal","uv"]){let m=u.attributes[p];if(!m||m.array instanceof Float32Array&&!m.normalized)continue;let b=new Float32Array(m.count*m.itemSize);for(let g=0;g<m.count;g++)for(let v=0;v<m.itemSize;v++)b[g*m.itemSize+v]=z_[v].call(m,g);u.setAttribute(p,new $e(b,m.itemSize))}u.attributes.normal||u.computeVertexNormals(),u.attributes.uv||u.setAttribute("uv",new $e(new Float32Array(u.attributes.position.count*2),2)),u.applyMatrix4(new Ue().multiplyMatrices(h,d.matrixWorld)),l.push(u)}),!l.length)continue;let f=l.length>1?Hc(l):l[0];l.length>1&&l.forEach(d=>d.dispose()),f.computeBoundingSphere(),n.set(c.name,f),i.push(f)}r&&(r.colorSpace=yt,r.anisotropy=4,i.push(r)),e.scene.traverse(c=>{c.isMesh&&c.geometry.dispose()});let a=new bn({map:r});return i.push(a),{geos:n,mat:a,has:c=>n.has(c),instanced(c,l,{material:h=a}={}){let f=n.get(c);if(!f||!l.length)return null;let d=new Zn(f,h,l.length),u=new gt,p=0;return l.forEach((m,b)=>{u.position.set(m.x,m.y||0,m.z),u.rotation.set(0,m.ry||0,0),u.scale.setScalar(m.s||1),u.updateMatrix(),d.setMatrixAt(b,u.matrix),p=Math.max(p,Math.hypot(m.x,m.z)+(m.s||1)*3)}),d.instanceMatrix.needsUpdate=!0,d.geometry.boundingSphere,d.boundingSphere=new Yt(new z,p),d.frustumCulled=!1,d},dispose(){for(let c of i)try{c.dispose()}catch{}}}}var Oi=Math.PI*2,H_=2,Wd=1.7320508;function V_(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function qd(s,{R:e=20,tile:t=1.15,sky:n={}}={}){let i=new dn,r=[],a=V_(7),o=(W,B)=>{let X=s.instanced(W,B);return X&&(X.name=W,i.add(X)),X},c=[],l=[],h=[],f=[],d=Math.ceil((e+34)/(t*Wd));for(let W=-d;W<=d;W++)for(let B=-d;B<=d;B++){let X=(B+(W&1?.5:0))*H_*t,$=W*Wd*t,ye=Math.hypot(X,$);f.push({x:X,z:$,d:ye})}let u=[];for(let W=0;W<7;W++){let B=W/7*Oi+.35+a()*.3,X=e+14+a()*9;u.push({x:Math.cos(B)*X,z:Math.sin(B)*X,r:5+a()*4,i:W})}let p=W=>{for(let B of u)if(Math.hypot(W.x-B.x,W.z-B.z)<B.r)return B;return null},m=new Map;for(let W of f){if(W.d<e+t*1.2){c.push({x:W.x,y:0,z:W.z,s:t});continue}if(W.d<e+t*2.6){l.push({x:W.x,y:-.25*t,z:W.z,s:t});continue}let B=p(W);if(B){let X=(Math.hypot(W.x-B.x,W.z-B.z)<B.r*.55?.25:-.1)*t;c.push({x:W.x,y:X,z:W.z,s:t}),(m.get(B)||m.set(B,[]).get(B)).push({...W,y:X});continue}}let b=s.mat.clone();b.color.setRGB(.62,.92,.6),r.push(b);{let W=c.concat(l),B=s.instanced("hex_grass",W,{material:b});if(B){let X=new Te;W.forEach(($,ye)=>{let Me=.9+a()*.16;B.setColorAt(ye,X.setRGB(Me,Me*(.97+a()*.06),Me*.95))}),B.instanceColor.needsUpdate=!0,i.add(B)}}let g=new bn({color:3117008});r.push(g);let v=new Ms(400,48);v.rotateX(-Math.PI/2),r.push(v);let A=new At(v,g);A.position.y=-.38,i.add(A);let _=3,w={},M=(W,B)=>(w[W]||(w[W]=[])).push(B),x=[{mark:["building_castle_red"],extra:["building_home_A_red","flag_red"],fill:["trees_A_medium","trees_A_medium"]},{mark:["mountain_A_grass_trees"],extra:[],fill:["mountain_B_grass","trees_A_medium","hills_A_trees"]},{mark:["building_windmill_yellow","building_windmill_top_yellow","building_windmill_top_fan_yellow"],extra:["building_home_A_red","tent"],fill:["trees_A_medium","trees_B_small"]},{mark:["mountain_B_grass"],extra:[],fill:["hills_A_trees","trees_A_medium","mountain_A_grass_trees"]},{mark:["building_church_blue"],extra:["building_tavern_green","building_home_A_red"],fill:["trees_B_small","trees_A_medium"]},{mark:["mountain_A_grass_trees"],extra:[],fill:["trees_A_medium","trees_A_medium","mountain_B_grass"]},{mark:["building_tower_A_blue","building_tower_A_top_blue"],extra:["tent","tent","flag_blue"],fill:["trees_A_medium","hills_A_trees"]}];for(let W of u){let B=x[W.i%x.length],X=(m.get(W)||[]).sort((Me,ee)=>Math.hypot(Me.x-W.x,Me.z-W.z)-Math.hypot(ee.x-W.x,ee.z-W.z)),$=Me=>Me.startsWith("mountain")||Me.startsWith("hills"),ye=0;X.forEach((Me,ee)=>{let _e=Math.atan2(-Me.x,-Me.z);if(ee===0){for(let he of B.mark)M(he,{x:Me.x,y:Me.y,z:Me.z,ry:_e,s:_*($(he)?1.2:1)});return}if(ee%2===1&&ye<B.extra.length){let he=B.extra[ye++];M(he,{x:Me.x,y:Me.y,z:Me.z,ry:_e+(a()-.5)*.6,s:_*(he.startsWith("flag")?1.6:.9)});return}if(a()<.7){let he=B.fill[ee%B.fill.length];M(he,{x:Me.x+(a()-.5)*t,y:Me.y,z:Me.z+(a()-.5)*t,ry:a()*Oi,s:_*($(he)?1.1:.85+a()*.3)})}})}let y=["flag_red","flag_blue","flag_yellow","flag_green"];for(let W=0;W<16;W++){let B=W/16*Oi;M(y[W%4],{x:Math.cos(B)*(e+.9),y:0,z:Math.sin(B)*(e+.9),ry:-B,s:5.1})}for(let W=0;W<26;W++){let B=a()*Oi,X=e+t*(1.6+a()*.8);M(a()<.6?"tree_single_A":"tree_single_B",{x:Math.cos(B)*X,y:-.25*t,z:Math.sin(B)*X,ry:a()*Oi,s:_*(.9+a()*.5)})}for(let W=0;W<10;W++){let B=W/10*Oi+.2,X=e+.4;M(["barrel","crate_A_big","weaponrack","rock_single_C","rock_single_E"][W%5],{x:Math.cos(B)*X,y:0,z:Math.sin(B)*X,ry:a()*Oi,s:3.5})}for(let[W,B]of Object.entries(w))o(W,B);let I=[];for(let W=0;W<9;W++){let B=a()*Oi,X=e+20+a()*40;I.push({x:Math.cos(B)*X,y:16+a()*14,z:Math.sin(B)*X,ry:a()*Oi,s:3+a()*3})}let C=new bn({color:16777215,emissive:7176096,transparent:!0,opacity:.92});r.push(C);let D=s.instanced("cloud_big",I,{material:C});D&&i.add(D);let N=new Te(n.top??3112920),G=new Te(n.horizon??16640207),P=new Te(n.mid??9226480),U=new $t({side:Qt,depthWrite:!1,fog:!1,uniforms:{top:{value:N},hor:{value:G},bot:{value:P},sunDir:{value:n.sunDir||[-.5,.25,-.83]}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 top, hor, bot; uniform vec3 sunDir;
      void main(){ float h = max(vP.y, 0.0);
        vec3 c = mix(hor, mix(bot, top, smoothstep(0.12, 0.6, h)), smoothstep(0.0, 0.12, h));
        float s = max(dot(vP, normalize(sunDir)), 0.0); c += vec3(1.0,0.82,0.55) * (pow(s, 12.0) * 0.45 + pow(s, 400.0) * 1.2);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}),J=new sa(450,24,12);r.push(U,J);let Y=new At(J,U);return Y.renderOrder=-1,i.add(Y),{group:i,horizon:G,skyMesh:Y,update(W){D&&(D.rotation.y=W*.004)},dispose(){for(let W of r)W.dispose()}}}var Mt={alive:1,shield:2,speed:4,giant:8,rage:16,dash:32,dance:64,air:128,crown:256,cmd:512,low:1024,bot:2048},Xd=Math.PI*2,ru=["Knight","Barbarian","Mage","Rogue","Rogue_Hooded"],au=["Skeleton_Minion","Skeleton_Warrior","Skeleton_Rogue","Skeleton_Mage"],ou=.72,jd=2.1*ou,W_={Knight:["attack","slash"],Barbarian:["attack","slash","attack"],Mage:["cast"],Rogue:["shoot","slash"],Rogue_Hooded:["slash","attack"],Skeleton_Minion:["attack"],Skeleton_Warrior:["attack","slash"],Skeleton_Rogue:["slash"],Skeleton_Mage:["cast"]};function Kd(s,e={}){let t={antialias:!!e.aa,alpha:!1,depth:!0,stencil:!1,powerPreference:"default",preserveDrawingBuffer:!!e.preserve,failIfMajorPerformanceCaveat:!1},n=new Bc({canvas:s,...t});if(!n.getContext())throw new Error("no webgl");n.outputColorSpace=yt,n.toneMapping=ma,n.toneMappingExposure=1,n.shadowMap.enabled=!1,n.info.autoReset=!0;let i=new Kr;i.background=new Te(16640207),i.fog=new jr(15981760,45,170);let r=new Gt(46,9/16,.3,600),a=[],o=E=>(a.push(E),E),c=new ca(14216447,5204538,1.15);i.add(c);let l=new Es(16770756,2);l.position.set(-12,20,18),i.add(l);function h(E,j,{mip:V=!0}={}){let O=document.createElement("canvas");O.width=O.height=E,j(O.getContext("2d"),E);let re=o(new ea(O));return re.colorSpace=yt,re.generateMipmaps=V,V||(re.minFilter=1006),re.anisotropy=4,re}let f=h(64,(E,j)=>{let V=E.createRadialGradient(j/2,j/2,0,j/2,j/2,j/2);V.addColorStop(0,"rgba(0,0,0,0.5)"),V.addColorStop(.6,"rgba(0,0,0,0.22)"),V.addColorStop(1,"rgba(0,0,0,0)"),E.fillStyle=V,E.fillRect(0,0,j,j)},{mip:!1}),d=h(64,(E,j)=>{let V=E.createRadialGradient(j/2,j/2,j*.3,j/2,j/2,j/2);V.addColorStop(0,"rgba(255,255,255,0)"),V.addColorStop(.55,"rgba(255,255,255,0.9)"),V.addColorStop(.8,"rgba(255,255,255,0.35)"),V.addColorStop(1,"rgba(255,255,255,0)"),E.fillStyle=V,E.fillRect(0,0,j,j)},{mip:!1}),u=e.platform||20,p=null,m=null,b=null,g=null,v=Promise.all([Vd(e.envUrl||"/models/env-br.glb"),Gd({names:ru.concat(au)})]).then(([E,j])=>{if(A){E.dispose(),j.dispose();return}m=E,b=j,p=qd(m,{R:u,sky:{sunDir:[-.45,.3,.84]}}),i.add(p.group)}).catch(E=>{throw g=E,E});v.catch(()=>{});let A=!1,_=o(new Yi(1,1,1,72,1,!0));_.translate(0,.5,0);let w={time:{value:0},r:{value:18},rt:{value:18},showT:{value:0}},M=new At(_,o(new $t({transparent:!0,depthWrite:!1,blending:Ni,side:cn,uniforms:w,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform float time;
      void main(){ float s = sin(vUv.x*150.0 + vUv.y*9.0 - time*2.5)*0.5+0.5; float s2 = sin(vUv.x*61.0 - vUv.y*5.0 + time*1.7)*0.5+0.5;
        float a = pow(1.0 - vUv.y, 1.6) * (0.35 + 0.45*s*s2) + exp(-vUv.y*18.0)*0.8;
        vec3 c = mix(vec3(0.55,0.15,0.95), vec3(1.0,0.45,0.95), s*s2);
        gl_FragColor = vec4(c * a, 1.0); }`})));M.renderOrder=3,i.add(M);let x=new At(o(new Ms(u+.4,72)),o(new $t({transparent:!0,depthWrite:!1,uniforms:w,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`varying vec3 vW; uniform float r, rt, time, showT;
      void main(){ float d = length(vW.xz);
        float outside = smoothstep(r - 0.1, r + 0.5, d);
        float edge = exp(-abs(d - r) * 2.5);
        float ang = atan(vW.z, vW.x);
        float dash = step(0.45, fract(ang * 16.0 / 6.2832 + time * 0.25));
        float tgt = (1.0 - smoothstep(0.03, 0.12, abs(d - rt))) * dash * showT;
        vec3 c = mix(vec3(0.32,0.08,0.5), vec3(1.0,0.6,1.0), edge);
        c = mix(c, vec3(1.0), tgt);
        float a = clamp(outside * 0.6 + edge * 0.55 + tgt * 0.9, 0.0, 0.92);
        gl_FragColor = vec4(c, a); }`})));x.rotation.x=-Math.PI/2,x.position.y=.03,x.renderOrder=1,i.add(x);let y=new gt;i.add(y);let I=[[0,1.5,0,16765773],[-2.3,1,.6,14148336],[2.3,.6,.6,14256458]],C=o(new bn({color:10129286})),D=I.map(([E,j,V,O])=>{let re=o(new Yi(1,1.15,j,6));re.translate(0,j/2,0);let ce=new At(re,C);ce.position.set(E,0,V),y.add(ce);let Ze=o(new Yi(1.02,1.02,.12,6));return Ze.translate(0,j+.06,0),ce.add(new At(Ze,o(new bn({color:O,emissive:new Te(O).multiplyScalar(.25)})))),ce});y.visible=!1;let N=e.maxChars||64,G=(E,j,V)=>{let O=new Zn(o(E),j,V);O.frustumCulled=!1,O.count=0;let re=new Te(1,1,1);for(let ce=0;ce<V;ce++)O.setColorAt(ce,re);return i.add(O),O},P=G(new Zi(1,1).rotateX(-Math.PI/2),o(new on({map:f,transparent:!0,depthWrite:!1})),N+8);P.renderOrder=2;let U=G(new Zi(1,1).rotateX(-Math.PI/2),o(new on({map:d,transparent:!0,depthWrite:!1,blending:Ni})),N);U.renderOrder=2;let J=G(new dr(1,2),o(new $t({transparent:!0,depthWrite:!1,blending:Ni,uniforms:{time:{value:0}},vertexShader:`varying float vF; varying vec3 vC;
      void main(){ vec4 mv = modelViewMatrix * instanceMatrix * vec4(position,1.0); vec3 n = normalize(normalMatrix * mat3(instanceMatrix) * normal);
        vF = 1.0 - abs(dot(n, normalize(-mv.xyz)));
        #ifdef USE_INSTANCING_COLOR
          vC = instanceColor;
        #else
          vC = vec3(0.4,0.9,1.0);
        #endif
        gl_Position = projectionMatrix * mv; }`,fragmentShader:"varying float vF; varying vec3 vC; uniform float time; void main(){ float a = pow(vF, 2.2) * 0.9 + 0.06; gl_FragColor = vec4(vC * a, 1.0); }"})),N),Y=o(new Yi(.22,.17,.2,5,1,!0)),W=new At(Y,o(new bn({color:16765773,emissive:8016384,side:cn})));W.visible=!1,i.add(W);let B=64,X=new Zn(o(new ia(.86,1,40).rotateX(-Math.PI/2)),o(new on({color:16777215,transparent:!0,depthWrite:!1,blending:Ni,side:cn})),B);X.frustumCulled=!1,X.renderOrder=4;{let E=new Te(0,0,0);for(let j=0;j<B;j++)X.setColorAt(j,E)}i.add(X);let $=[],ye=12,Me=new Zn(o(new dr(.55,0)),o(new bn({color:16747069,emissive:16734736})),ye);Me.frustumCulled=!1,Me.count=0,i.add(Me);let ee=[];function _e(E,j){let V=o(new Ct),O=new Float32Array(E*3),re=new Float32Array(E*4),ce=new Float32Array(E);V.setAttribute("position",new $e(O,3)),V.setAttribute("col",new $e(re,4)),V.setAttribute("size",new $e(ce,1));let Ze=o(new $t({transparent:!0,depthWrite:!1,blending:j?Ni:Qi,uniforms:{px:{value:400}},vertexShader:"attribute vec4 col; attribute float size; uniform float px; varying vec4 vC; void main(){ vC = col; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = min(size * px / max(0.5, -mv.z), 160.0); gl_Position = projectionMatrix * mv; }",fragmentShader:j?"varying vec4 vC; void main(){ float d = length(gl_PointCoord-0.5)*2.0; float a = pow(max(0.0, 1.0 - d), 2.0); gl_FragColor = vec4(vC.rgb * a * vC.a, 1.0); }":"varying vec4 vC; void main(){ vec2 p = gl_PointCoord-0.5; if (vC.a < 0.0) { if (abs(p.x) > 0.5 || abs(p.y) > 0.28) discard; gl_FragColor = vec4(vC.rgb, 1.0); } else { float d = length(p)*2.0; if (d > 1.0) discard; gl_FragColor = vec4(vC.rgb, vC.a * (1.0 - d*d)); } }"})),Oe=new ys(V,Ze);return Oe.frustumCulled=!1,i.add(Oe),{geo:V,pos:O,col:re,size:ce,mat:Ze,pts:Oe,list:[],cap:E}}let he=_e(e.particles||900,!0),Le=_e(Math.round((e.particles||900)*.5),!1);he.pts.renderOrder=6,Le.pts.renderOrder=5;let Se=1,ze=new Te;function Je(E,j,V,O,re,ce){j=Math.max(1,Math.round(j*Se));for(let Ze=0;Ze<j&&E.list.length<E.cap-64;Ze++){let Oe=Math.random()*Xd,ke=(ce.up??.5)+Math.random()*(ce.spreadUp??.5),xt=(ce.speed||4)*(.4+Math.random()*.8),Pn=ce.colors?ce.colors[Math.random()*ce.colors.length|0]:ce.color;ze.set(Pn),E.list.push({x:V+(Math.random()-.5)*(ce.jitter||0),y:O,z:re+(Math.random()-.5)*(ce.jitter||0),vx:Math.cos(Oe)*xt*(1-ke*.6),vy:xt*ke*(ce.vyMul??1),vz:Math.sin(Oe)*xt*(1-ke*.6),g:ce.g??9,drag:ce.drag??1.5,life:(ce.life||.6)*(.7+Math.random()*.6),t:0,s0:ce.size||.3,s1:ce.size1??(ce.size||.3)*.3,r:ze.r,gg:ze.g,b:ze.b,a:ce.alpha??1,conf:!!ce.confetti,spin:Math.random()*Xd})}}function Be(E,j,V){let O=E.list,re=0;for(let Oe=0;Oe<O.length;Oe++){let ke=O[Oe];if(ke.t+=j,ke.t>=ke.life)continue;ke.vy-=ke.g*j;let xt=Math.exp(-ke.drag*j);ke.vx*=xt,ke.vy*=xt,ke.vz*=xt,ke.conf&&(ke.spin+=j*6,ke.vx+=Math.sin(ke.spin)*j*2),ke.x+=ke.vx*j,ke.y+=ke.vy*j,ke.z+=ke.vz*j,ke.y<.05&&ke.g>0&&(ke.y=.05,ke.vy*=-.3,ke.vx*=.7,ke.vz*=.7),O[re++]=ke}O.length=re;let ce=0,Ze=(Oe,ke,xt,Pn,ge,ae,ct,Ot)=>{E.pos[ce*3]=Oe,E.pos[ce*3+1]=ke,E.pos[ce*3+2]=xt,E.col[ce*4]=Pn,E.col[ce*4+1]=ge,E.col[ce*4+2]=ae,E.col[ce*4+3]=ct,E.size[ce]=Ot,ce++};if(V)for(let Oe of V)Ze(Oe[0],Oe[1],Oe[2],Oe[3],Oe[4],Oe[5],Oe[6],Oe[7]);for(let Oe of O){let ke=Oe.t/Oe.life,xt=Oe.conf?1:1-ke*ke;Ze(Oe.x,Oe.y,Oe.z,Oe.r,Oe.gg,Oe.b,Oe.conf?-1:Oe.a*xt,Oe.s0+(Oe.s1-Oe.s0)*ke)}E.geo.setDrawRange(0,ce),E.geo.attributes.position.needsUpdate=!0,E.geo.attributes.col.needsUpdate=!0,E.geo.attributes.size.needsUpdate=!0;for(let Oe of["position","col","size"]){let ke=E.geo.attributes[Oe];ke.clearUpdateRanges?.(),ke.addUpdateRange?.(0,ce*ke.itemSize)}}let qe=new Map,nt=[],He=new Ue,St=new Jt,Pt=new Gn,It=new z,ht=new z,tn=new Te,Lt=E=>(E=E^61^E>>>16,E=E+(E<<3)|0,E^=E>>>4,E=Math.imul(E,668265261),(E^E>>>15)>>>0),yn=E=>E.flags&Mt.bot?au[Lt(E.id)%au.length]:ru[Lt(E.id)%ru.length];function Mn(E,j){let V=qe.get(E.id);return V||(V={a:null,model:yn(E),x:E.x,y:E.y,z:E.z,face:E.face,gs:1,seen:j,spawn:j,hit:-9,atkN:0,spinT:-9,frame:0,acc:0,speed:0},qe.set(E.id,V)),V}function Sn(E,j){if(E.a||!b)return;let V=j.flags&Mt.bot?null:j.info?.color??null;E.a=b.actor(E.model,V),E.a.obj.scale.setScalar(ou),i.add(E.a.obj)}function k(E){E.a&&(b.release(E.a),E.a=null)}let Ut=[],bt=0,pt=new z;function ve(E,j,V){if(E.length<=V)return Ut=E,E;if(j<bt&&Ut.length){let re=new Set(Ut.map(Ze=>Ze.id)),ce=E.filter(Ze=>re.has(Ze.id));if(ce.length>=Math.min(V,E.length)*.8)return ce.concat(E.filter(Ze=>!re.has(Ze.id)&&Ze.flags&(Mt.cmd|Mt.crown|Mt.giant)).slice(0,4)).slice(0,V)}bt=j+.6;let O=E.map(re=>({f:re,s:(re.flags&Mt.cmd?6:0)+(re.flags&Mt.crown?5:0)+(re.flags&Mt.giant?4:0)+(re.flags&Mt.bot?0:2)-Math.hypot(re.x-pt.x,re.z-pt.z)*.25}));return O.sort((re,ce)=>ce.s-re.s),Ut=O.slice(0,V).map(re=>re.f),Ut}let Ce={tx:0,ty:0,tz:0,dist:30,yaw:.9,pitch:.6,kill:null,shake:0,orbit:0},Ne=9/16,Ve=390,R=844,S={x:0,z:0,w:0},H={x:0,z:0,at:0};function oe(E,j,V){let O=0,re=0,ce=.9,Ze=26,Oe=.62,ke=E.phase,xt=E.fighters;if(Ce.orbit+=j*(ke==="lobby"?.07:ke==="ceremony"?.14:.025),S.w*=Math.exp(-j*.8),ke==="battle"&&xt.length){if(V>H.at){H.at=V+.5;let An=(ii,si)=>{let Tn=0,On=0,T=0;for(let F of xt){if(F.flags&Mt.air)continue;let Z=Math.hypot(F.x-ii,F.z-si);if(Z<7){let q=(1+(F.flags&Mt.cmd?1.5:0)+(F.flags&(Mt.giant|Mt.crown)?1:0))*(1-Z/9);Tn+=q,On+=F.x*q,T+=F.z*q}}return{w:Tn,x:Tn?On/Tn:ii,z:Tn?T/Tn:si}},wt=An(H.x,H.z),bi=wt;for(let ii of xt){if(Math.random()>24/xt.length)continue;let si=An(ii.x,ii.z);si.w>wt.w&&(wt=si)}wt!==bi&&wt.w<bi.w*1.35&&(wt=bi),H.x=wt.x,H.z=wt.z}let Dt=Math.min(.4,S.w*.06);O=H.x*(1-Dt)+S.x*Dt,re=H.z*(1-Dt)+S.z*Dt;let kt=[];for(let An of xt)An.flags&Mt.air||kt.push(Math.hypot(An.x-O,An.z-re));kt.sort((An,wt)=>An-wt);let Rt=Math.max(kt.length?kt[Math.min(kt.length-1,Math.max(2,Math.floor(kt.length*.45)))]:3,2.5);Ze=ln.clamp(6.5+Rt*(Ne<.7?1.25:.9),9.5,21),Oe=.36+Math.min(.1,Ze*.004),ce=1}else if(ke==="ceremony")O=0,re=.3,ce=2.2,Ze=8.5,Oe=.2;else{let Dt=xt.map(Rt=>Math.hypot(Rt.x,Rt.z)).sort((Rt,An)=>Rt-An),kt=Dt.length?Dt[Math.floor(Dt.length*.75)]:4;Ze=ln.clamp(10+kt*(Ne<.7?1.25:1),12,26),Oe=.36+Math.sin(V*.11)*.05,ce=1.2}if(Ce.kill&&V<Ce.kill.until){let Dt=Ce.kill,kt=xt.find(Rt=>Rt.id===Dt.id)||Dt.last;if(kt){Dt.last=kt;let Rt=Math.min(1,(V-Dt.t0)/.3,(Dt.until-V)/.4);O=ln.lerp(O,kt.x,Rt),re=ln.lerp(re,kt.z,Rt),ce=ln.lerp(ce,1,Rt),Ze=ln.lerp(Ze,6.5,Rt),Oe=ln.lerp(Oe,.28,Rt)}}let Pn=1-Math.exp(-j*2.2),ge=1-Math.exp(-j*1.4);Ce.tx+=(O-Ce.tx)*Pn,Ce.ty+=(ce-Ce.ty)*Pn,Ce.tz+=(re-Ce.tz)*Pn,Ce.dist+=(Ze-Ce.dist)*ge,Ce.pitch+=(Oe-Ce.pitch)*ge,pt.set(Ce.tx,0,Ce.tz);let ae=Ce.yaw+Ce.orbit,ct=Ce.tx+Math.cos(ae)*Math.cos(Ce.pitch)*Ce.dist,Ot=Ce.ty+Math.sin(Ce.pitch)*Ce.dist,In=Ce.tz+Math.sin(ae)*Math.cos(Ce.pitch)*Ce.dist;Ce.shake=Math.max(0,Ce.shake-j*1.8);let wn=Ce.shake*Ce.shake*.7;r.position.set(ct+(Math.sin(V*47)+Math.sin(V*29))*wn,Math.max(.6,Ot+Math.sin(V*53)*wn),In+Math.cos(V*41)*wn),r.lookAt(Ce.tx,Ce.ty,Ce.tz)}let ie={maxChars:N,halos:!0,particles:1,animLod:1},ue=[],de=0,ne=0;function se(E,j,V){de=V,ne++,w.time.value=V,J.material.uniforms.time.value=V,p&&p.update(V);let O=E.phase==="battle"?E.r:u+2;if(w.r.value=O,w.rt.value=E.rt,w.showT.value=E.phase==="battle"&&E.rt<E.r-.3?1:0,M.visible=E.phase==="battle"&&O<u+.5,M.scale.set(O,7+Math.sin(V*2)*.3,O),ue.length=0,y.visible=E.phase==="ceremony",y.visible){let ge=ln.clamp((V-(E.phaseStart||V))/.8,.01,1);D.forEach(ae=>ae.scale.y=1-Math.pow(1-ge,3))}let re=ve(E.fighters,V,ie.maxChars);oe(E,j,V);let ce=0,Ze=0,Oe=null,ke=ie.animLod||1;for(let ge of re){if(ce>=N)break;let ae=Mn(ge,V),ct=ae.x,Ot=ae.z;ae.x=ge.x,ae.y=ge.y,ae.z=ge.z,ae.seen=V;let In=ge.face-ae.face;In=Math.atan2(Math.sin(In),Math.cos(In)),ae.face+=In*Math.min(1,j*10);let wn=Math.hypot(ae.x-ct,ae.z-Ot)/Math.max(j,.001);ae.speed+=(Math.min(wn,12)-ae.speed)*Math.min(1,j*8);let Dt=ge.flags&Mt.giant;ae.gs+=((Dt?2:1)-ae.gs)*Math.min(1,j*5);let kt=ge.flags&Mt.air,Rt=ge.flags&Mt.dance,An=ge.flags&Mt.dash;Sn(ae,ge);let wt=ae.a,bi=Math.min(1,(V-ae.spawn)/.3);if(wt){let Tn=Math.PI/2-ae.face;V-ae.spinT<.45&&(Tn+=(V-ae.spinT)*30),wt.obj.position.set(ae.x,ae.y,ae.z),wt.obj.rotation.set(0,Tn,0),wt.obj.scale.setScalar(ou*ae.gs*(.4+.6*bi));let On=E.phase==="ceremony"&&ge.flags&Mt.crown||Rt?"cheer":kt?"jump":ae.speed>2.2?"run":ae.speed>.5?"walk":E.phase==="battle"?"combat":"idle";On==="jump"?wt.state!=="jump"&&V>=wt.until&&wt.play("jump",V):wt.play(On,V);let T=wt.actions.get("run");T&&(T.timeScale=ln.clamp(ae.speed/4.5,.75,1.6)*(ae.gs>1.5?.7:1)),ae.acc+=j;let Z=Math.hypot(ae.x-Ce.tx,ae.z-Ce.tz)>12||ce>30?2*ke:ke;(ne+ge.id)%Z===0&&(su(b,wt,ae.acc,V),ae.acc=0)}let ii=(1.1+(Dt?1.1:0))*(kt?Math.max(.3,1-ae.y/14):1)*bi;He.compose(It.set(ae.x,.04,ae.z),St.identity(),ht.set(ii,1,ii)),P.setMatrixAt(ce,He);let si=ge.info||{};if(ge.flags&(Mt.shield|Mt.rage)&&E.phase==="battle"){let Tn=ge.flags&Mt.shield,On=(Tn?1:.9)*ae.gs*(1+Math.sin(V*8)*.03);He.compose(It.set(ae.x,ae.y+.75*ae.gs,ae.z),St.identity(),ht.set(On,On*1.15,On)),J.setMatrixAt(Ze,He),J.setColorAt(Ze,Tn?ze.setRGB(.35,.85,1):ze.setRGB(1,.25,.2)),Ze++}ge.flags&Mt.crown&&(Oe={s:ae}),ge.flags&Mt.speed&&ae.speed>1.5&&Math.random()<.5&&Je(he,1,ae.x,ae.y+.2,ae.z,{color:16769126,speed:.4,life:.4,size:.35,g:-.5}),An&&Je(he,2,ae.x,ae.y+.6,ae.z,{color:si.color??16777215,speed:.3,life:.35,size:.6,g:0}),kt&&Je(he,1,ae.x,ae.y+.9,ae.z,{color:12577279,speed:.2,life:.5,size:.4,g:-2,up:1}),ge.flags&Mt.cmd&&ie.halos&&(tn.set(si.color??16777215),ue.push([ae.x,.15,ae.z,tn.r*.6,tn.g*.6,tn.b*.6,.6,2.4*ae.gs])),Dt&&ie.halos&&ue.push([ae.x,ae.y+1.4,ae.z,1,.75,.3,.3,7]),ce++}{let ge=0;for(let ae of re.slice(0,ce)){if(ae.flags&Mt.bot)continue;let ct=qe.get(ae.id),Ot=1.25*ct.gs*Math.min(1,(V-ct.spawn)/.3);He.compose(It.set(ct.x,.05,ct.z),St.identity(),ht.set(Ot,1,Ot)),U.setMatrixAt(ge,He),U.setColorAt(ge,tn.set(ae.info?.color??16777215).multiplyScalar(.85)),ge++}U.count=ge,U.instanceMatrix.needsUpdate=!0,U.instanceColor&&(U.instanceColor.needsUpdate=!0)}if(P.count=ce+nt.length,nt.forEach((ge,ae)=>{let ct=Math.max(0,1-(V-ge.t0-1.2)/.8);He.compose(It.set(ge.x,.04,ge.z),St.identity(),ht.set(1.1*ct,1,1.1*ct)),P.setMatrixAt(ce+ae,He)}),P.instanceMatrix.needsUpdate=!0,J.count=Ze,J.instanceMatrix.needsUpdate=!0,J.instanceColor&&(J.instanceColor.needsUpdate=!0),W.visible=!!Oe,Oe){let{s:ge}=Oe,ae=ge.y+(jd+.3)*ge.gs+Math.sin(V*3)*.05;W.position.set(ge.x,ae,ge.z),W.rotation.set(-.15,V,0),W.scale.setScalar(ge.gs*1.2),ie.halos&&ue.push([ge.x,ae,ge.z,1,.8,.3,.7,2.4])}for(let[ge,ae]of qe)V-ae.seen>.6&&ae.a&&k(ae),V-ae.seen>5&&qe.delete(ge);for(let ge=nt.length-1;ge>=0;ge--){let ae=nt[ge],ct=V-ae.t0;if(ct>2){b.release(ae.a),nt.splice(ge,1);continue}ct>1.2&&(ae.a.obj.position.y=-(ct-1.2)*1.2),su(b,ae.a,j,V)}let xt=0;for(let ge=$.length-1;ge>=0;ge--){let ae=$[ge];V-ae.t0>ae.dur&&$.splice(ge,1)}for(let ge of $){if(xt>=B)break;let ae=(V-ge.t0)/ge.dur,ct,Ot;ge.kind==="warn"?(ct=ge.r0*(.9+.1*Math.sin(V*18)),Ot=.5+.5*Math.sin(V*14)):ge.kind==="mark"?(ct=ge.r0,Ot=1-ae):(ct=ge.r0+(ge.r1-ge.r0)*(1-Math.pow(1-ae,3)),Ot=1-ae),He.compose(It.set(ge.x,ge.y??.08,ge.z),St.identity(),ht.set(ct,1,ct)),X.setMatrixAt(xt,He),X.setColorAt(xt,ze.copy(ge.col).multiplyScalar(Math.max(0,Ot))),xt++}X.count=xt,X.instanceMatrix.needsUpdate=!0,X.instanceColor&&(X.instanceColor.needsUpdate=!0);let Pn=0;for(let ge=ee.length-1;ge>=0;ge--)V>ee[ge].t0+ee[ge].d+.05&&ee.splice(ge,1);for(let ge of ee){let ae=ln.clamp((V-ge.t0)/ge.d,0,1),ct=ae*ae,Ot=ge.x+(1-ct)*7,In=.4+(1-ct)*26,wn=ge.z-(1-ct)*7;He.compose(It.set(Ot,In,wn),St.setFromEuler(Pt.set(V*5,V*4,0)),ht.setScalar(1.2)),Me.setMatrixAt(Pn++,He),Je(he,2,Ot,In,wn,{colors:[16751164,16765802,16734751],speed:.8,life:.45,size:1.1,g:0,drag:2}),ie.halos&&ue.push([Ot,In,wn,1,.55,.2,.9,5])}Me.count=Pn,Me.instanceMatrix.needsUpdate=!0,Be(he,j,ue),Be(Le,j,null),n.render(i,r)}function le(E,j){let V=j.fighters.find(re=>re.id===E);if(V)return V;let O=qe.get(E);return O?{x:O.x,y:O.y,z:O.z,id:E}:null}function L(E,j,V){$.push({x:E,z:j,y:V.y,t0:de,dur:V.dur||.5,r0:V.r0??.2,r1:V.r1??2,col:new Te(V.color??16777215),kind:V.kind||"wave"}),$.length>B&&$.shift()}function te(E){Ce.shake=Math.min(1.2,Ce.shake+E)}let Q=(E,j)=>{let V=qe.get(E);return V&&V.a&&V.a.play(j,de),V};function me(E,j){let V=de;switch(E.k){case"atk":{let O=qe.get(E.a);if(O&&O.a){let re=W_[O.model]||["attack"];O.a.play(re[O.atkN++%re.length],V)}break}case"hit":{let O=qe.get(E.b),re=le(E.b,j);if(O&&(O.hit=V,O.a&&(V>=O.a.until||E.c||E.m)&&O.a.play("hit",V)),!re)break;S.x+=(re.x-S.x)*.15,S.z+=(re.z-S.z)*.15,S.w=Math.min(8,S.w+.4);let ce=E.c||E.m;Je(he,ce?14:6,re.x,(re.y||0)+.8,re.z,{colors:E.s?[11820287,14721279]:ce?[16777215,16769126,16751164]:[16777215,16773544],speed:ce?7:4.5,life:.35,size:ce?.5:.35,g:6,up:.3}),ce?(L(re.x,re.z,{y:.8,r0:.2,r1:1.6,color:16773312,dur:.25}),te(E.m?.25:.12)):Math.hypot(re.x-Ce.tx,re.z-Ce.tz)<7&&te(.03);break}case"block":{Q(E.a,"block");let O=le(E.a,j);O&&Je(he,6,O.x,.9,O.z,{color:8382463,speed:3,life:.3,size:.35,g:0});break}case"ko":{let O=le(E.b,j);if(!O)break;let re=qe.get(E.b);if(re&&re.a&&nt.length<8){let ce=re.a;re.a=null,ce.play("die",V,{fade:.08}),ce.base="dead",nt.push({a:ce,t0:V,x:O.x,z:O.z})}else re&&k(re);Je(he,22,O.x,.8,O.z,{colors:[16777215,16769126,16739029,6222079],speed:7,life:.7,size:.5,g:5,up:.6}),Je(Le,10,O.x,.5,O.z,{colors:[16052223,14274800],speed:2.2,life:.8,size:.9,size1:1.6,g:-.5,alpha:.75,up:.3}),Je(he,1,O.x,1.2,O.z,{color:15400191,speed:.1,life:1.6,size:2.2,size1:1,g:-2.2,drag:.5,up:1,alpha:.9}),L(O.x,O.z,{r0:.3,r1:3,color:16766719,dur:.45}),te(E.multi||E.streak?.35:.16),E.a&&(E.first||E.multi||E.streak||E.giant||E.left>0&&E.left<=3)&&(!Ce.kill||V>Ce.kill.until+3)&&(Ce.kill={id:E.a,t0:V,until:V+1.9},Q(E.a,"cheer")),qe.delete(E.b);break}case"dash":{Q(E.a,"dash");let O=le(E.a,j);O&&(L(O.x,O.z,{r0:.3,r1:1.4,color:13625599,dur:.3}),Je(Le,6,O.x,.2,O.z,{color:14207976,speed:2,life:.5,size:.6,size1:1,g:0,alpha:.6}));break}case"shield":{Q(E.a,"block");let O=le(E.a,j);O&&L(O.x,O.z,{r0:.4,r1:1.6,color:6220031,dur:.4});break}case"spin":{let O=Q(E.a,"spin");O&&(O.spinT=V);let re=le(E.a,j);re&&(L(re.x,re.z,{r0:.5,r1:3,color:16769898,dur:.4}),Je(he,16,re.x,.7,re.z,{color:16769898,speed:6,life:.4,size:.4,g:0,up:0}),te(.15));break}case"heal":{let O=le(E.a,j);O&&Je(he,4,O.x,.4,O.z,{color:7208860,speed:.6,life:.9,size:.35,g:-2.5,up:1,jitter:.6});break}case"drop":{let O=qe.get(E.a);O&&(O.spawn=V);break}case"land":{let O=le(E.a,j);O&&(L(O.x,O.z,{r0:.3,r1:1.8,color:16773584,dur:.35}),Je(Le,8,O.x,.15,O.z,{color:13219994,speed:2.5,life:.5,size:.5,size1:.9,g:1,up:.1,alpha:.7}));break}case"meteor":ee.push({x:E.x,z:E.z,t0:V,d:Math.max(.3,E.d)}),ee.length>ye&&ee.shift(),L(E.x,E.z,{kind:"warn",r0:2.4,dur:Math.max(.3,E.d),color:16726831});break;case"boom":Je(he,34,E.x,.5,E.z,{colors:[16777215,16765802,16747069,16730911],speed:9,life:.7,size:.8,g:4,up:.5}),Je(Le,14,E.x,.6,E.z,{colors:[5917294,8219279,3813194],speed:3.5,life:1.2,size:1.2,size1:2.4,g:-.6,alpha:.8,up:.5}),L(E.x,E.z,{r0:.5,r1:E.r*1.6,color:16756832,dur:.5}),L(E.x,E.z,{r0:.2,r1:E.r,color:16777215,dur:.25}),te(.5);break;case"nuke":te(1.1),L(0,0,{r0:1,r1:u,color:16747248,dur:1.2,y:.3}),Je(he,60,0,1,0,{colors:[16777215,16747248,10182117],speed:22,life:1,size:1,g:0,up:.1});break;case"power":case"revive":{Q(E.a,E.k==="revive"?"rise":"summon");let O=le(E.a,j);if(!O)break;let re={speed:16769126,meteor:16747069,giant:16757575,revive:16740277,nuke:16747248}[E.tier]??16740277;L(O.x,O.z,{r0:.3,r1:3.2,color:re,dur:.6});for(let ce=0;ce<7;ce++)Je(he,4,O.x,.2+ce*.55,O.z,{color:re,speed:1.2,life:.9,size:.6,g:-4,up:1,jitter:.5});ie.halos&&Je(he,1,O.x,1.4,O.z,{color:re,speed:0,life:.8,size:5,size1:2,g:0,alpha:.6}),te(.2);break}case"cmd":{if(E.c==="attack"||E.c==="revenge"){let O=le(E.b,j);O&&L(O.x,O.z,{kind:"mark",r0:.9,dur:1.5,color:16724821})}E.c==="dance"&&Q(E.a,"taunt");break}case"hype":for(let O=0;O<40;O++)Je(he,1,(Math.random()-.5)*30,9+Math.random()*4,(Math.random()-.5)*30,{color:16743096,speed:.5,life:2.2,size:.6,g:4,drag:2.5});break;case"win":fe=V+4.5,te(.3);break;case"phase":E.ph==="battle"&&(L(0,0,{r0:2,r1:u,color:16777215,dur:.9,y:.2}),te(.2));break}}let fe=0;function pe(E){E<fe&&Je(Le,4,(Math.random()-.5)*7,7+Math.random()*2,(Math.random()-.5)*4,{colors:[16731486,16765503,4114431,10216804,16740277,16777215],speed:1.2,life:3.2,size:.32,g:1.6,drag:1.4,confetti:!0,up:0})}let Ee=new z;return{kind:"webgl",renderer:n,ready:v,scene:i,get loaded(){return!!b},get error(){return g},resize(E,j,V){Ve=E,R=j,Ne=E/j,n.setPixelRatio(V),n.setSize(E,j,!1),r.aspect=Ne,r.fov=Ne<.7?52:42,Ne<.8?r.setViewOffset(E,j,0,j*.1,E,j):r.clearViewOffset(),r.updateProjectionMatrix();let O=j*V/(2*Math.tan(ln.degToRad(r.fov/2)));he.mat.uniforms.px.value=O,Le.mat.uniforms.px.value=O},setQuality(E){ie={...ie,...E},Se=E.particles??1},frame(E,j,V){pe(V),se(E,j,V)},fx:me,project(E,j,V){return Ee.set(E,j,V).project(r),{x:(Ee.x*.5+.5)*Ve,y:(-Ee.y*.5+.5)*R,z:Ee.z,ok:Ee.z<1&&Ee.z>-1}},drawn(){return Ut.length?Ut:null},headY(E){let j=qe.get(E.id);return jd*(j?j.gs:1)},stats(){let E=n.info,j=0;for(let V of qe.values())V.a&&j++;return{calls:E.render.calls,tris:E.render.triangles,tex:E.memory.textures,geo:E.memory.geometries,chars:j,corpses:nt.length,parts:he.list.length+Le.list.length,loaded:!!b}},dispose(){A=!0;for(let E of qe.values())k(E);qe.clear();for(let E of nt)b&&b.release(E.a);nt.length=0,p&&(i.remove(p.group),p.dispose()),i.traverse(E=>{E.isInstancedMesh&&E.dispose()}),m&&m.dispose(),b&&b.dispose();for(let E of a)try{E.dispose()}catch{}n.dispose()},loseContext(){try{n.forceContextLoss()}catch{}}}}var Ca={alive:1,shield:2,speed:4,giant:8,rage:16,dash:32,dance:64,air:128,crown:256,cmd:512,low:1024,bot:2048},q_=s=>"#"+(s>>>0).toString(16).padStart(6,"0").slice(-6);function Jd(s,e={}){let t=s.getContext("2d"),n=e.platform||20,i=390,r=844,a=1,o=8,c=195,l=380,h=0,f=0,d=[],u=[],p=[],m=new Map,b={maxChars:60,particles:1},g=(M,x,y)=>({x:c+M*o,y:l+y*o*.62-(x||0)*o*.9});function v(M,x,y){h=y,f=Math.max(0,f-x*2);let I=(Math.random()-.5)*f*14,C=(Math.random()-.5)*f*14;t.setTransform(a,0,0,a,I*a,C*a);let D=t.createLinearGradient(0,0,0,r);D.addColorStop(0,"#120a2a"),D.addColorStop(.45,"#4a1f6e"),D.addColorStop(.75,"#ff7a5c"),D.addColorStop(1,"#2a1240"),t.fillStyle=D,t.fillRect(-20,-20,i+40,r+40),t.save(),t.translate(c,l),t.scale(1,.62),t.fillStyle="#241a3a",t.beginPath(),t.arc(0,18,n*o,0,6.283),t.fill();let N=t.createRadialGradient(0,0,0,0,0,n*o);N.addColorStop(0,"#6a5a9a"),N.addColorStop(1,"#3a2f68"),t.fillStyle=N,t.beginPath(),t.arc(0,0,n*o,0,6.283),t.fill(),t.strokeStyle="rgba(255,214,120,0.6)",t.lineWidth=2;for(let P of[.18,.62])t.beginPath(),t.arc(0,0,n*o*P,0,6.283),t.stroke();t.strokeStyle="#d9a441",t.lineWidth=5,t.beginPath(),t.arc(0,0,n*o,0,6.283),t.stroke(),M.phase==="battle"&&(t.fillStyle="rgba(120,20,170,0.5)",t.beginPath(),t.arc(0,0,n*o+2,0,6.283),t.arc(0,0,M.r*o,0,6.283,!0),t.fill(),t.strokeStyle="rgba(255,140,255,0.95)",t.lineWidth=4,t.beginPath(),t.arc(0,0,M.r*o,0,6.283),t.stroke(),M.rt<M.r-.3&&(t.setLineDash([8,8]),t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=2,t.beginPath(),t.arc(0,0,M.rt*o,0,6.283),t.stroke(),t.setLineDash([]))),t.restore();for(let P=u.length-1;P>=0;P--){let U=u[P],J=(y-U.t0)/U.dur;if(J>=1){u.splice(P,1);continue}let Y=g(U.x,0,U.z);t.strokeStyle=U.col,t.globalAlpha=U.warn?.5+.5*Math.sin(y*14):1-J,t.lineWidth=3,t.beginPath(),t.ellipse(Y.x,Y.y,(U.warn?U.r1:U.r0+(U.r1-U.r0)*J)*o,(U.warn?U.r1:U.r0+(U.r1-U.r0)*J)*o*.62,0,0,6.283),t.stroke()}t.globalAlpha=1;let G=M.fighters.slice(0,b.maxChars).sort((P,U)=>P.z-U.z);for(let P of G){let U=m.get(P.id);U||(U={hit:-9,punch:-9},m.set(P.id,U));let J=P.flags&Ca.giant?2:1,Y=q_(P.info?.color??16777215),W=y-U.hit<.12,B=g(P.x,0,P.z),X=g(P.x,P.y,P.z),$=o*.5*J;t.fillStyle="rgba(0,0,0,0.3)",t.beginPath(),t.ellipse(B.x,B.y,$*1.1,$*.45,0,0,6.283),t.fill();let ye=P.flags&Ca.dance?Math.abs(Math.sin(y*9))*$:0;t.fillStyle=W?"#fff":Y,t.beginPath(),t.ellipse(X.x,X.y-$*1-ye,$*.75,$*.9,0,0,6.283),t.fill(),t.fillStyle=W?"#fff":"#ffd9b8",t.beginPath(),t.arc(X.x,X.y-$*2.3-ye,$*.95,0,6.283),t.fill(),t.fillStyle=W?"#fff":Y,t.beginPath(),t.arc(X.x,X.y-$*2.45-ye,$*1,Math.PI,0),t.fill(),t.fillStyle="#1b1430";let Me=Math.cos(P.face)*$*.3;t.fillRect(X.x-$*.38+Me,X.y-$*2.3-ye,$*.18,$*.3),t.fillRect(X.x+$*.2+Me,X.y-$*2.3-ye,$*.18,$*.3),P.flags&Ca.shield&&(t.strokeStyle="rgba(94,232,255,0.9)",t.lineWidth=2,t.beginPath(),t.arc(X.x,X.y-$*1.6,$*2.2,0,6.283),t.stroke()),P.flags&Ca.crown&&(t.fillStyle="#ffd34d",t.fillRect(X.x-$*.6,X.y-$*3.8-ye,$*1.2,$*.45)),y-U.punch<.2&&(t.fillStyle=Y,t.beginPath(),t.arc(X.x+Math.cos(P.face)*$*1.6,X.y-$*1.2+Math.sin(P.face)*$,$*.45,0,6.283),t.fill())}for(let P=p.length-1;P>=0;P--){let U=p[P],J=(y-U.t0)/U.d;if(J>=1){p.splice(P,1);continue}let Y=g(U.x+(1-J*J)*6,(1-J*J)*24,U.z-(1-J*J)*6);t.fillStyle="#ffb060",t.beginPath(),t.arc(Y.x,Y.y,o*.6,0,6.283),t.fill()}for(let P=d.length-1;P>=0;P--){let U=d[P];if(U.t+=x,U.t>U.life){d.splice(P,1);continue}U.vy-=U.gr*x,U.x+=U.vx*x,U.y+=U.vy*x,U.z+=U.vz*x;let J=g(U.x,U.y,U.z);t.globalAlpha=1-U.t/U.life,t.fillStyle=U.col,t.fillRect(J.x-2,J.y-2,4,4)}t.globalAlpha=1}function A(M,x,y,I,C,D=4){I=Math.round(I*(b.particles||1));for(let N=0;N<I&&d.length<400;N++){let G=Math.random()*6.283;d.push({x:M,y:x,z:y,vx:Math.cos(G)*D*Math.random(),vy:Math.random()*D,vz:Math.sin(G)*D*Math.random(),gr:8,t:0,life:.6,col:Array.isArray(C)?C[N%C.length]:C})}}let _=(M,x)=>x.fighters.find(y=>y.id===M);function w(M,x){let y=h;if(M.k==="atk"){let I=m.get(M.a);I&&(I.punch=y)}else if(M.k==="hit"){let I=m.get(M.b);I&&(I.hit=y);let C=_(M.b,x);C&&A(C.x,.8,C.z,M.c?10:4,["#fff","#ffe066"]),(M.c||M.m)&&(f=Math.min(1,f+.15))}else if(M.k==="ko"){let I=_(M.b,x);I&&(A(I.x,.8,I.z,18,["#fff","#ffe066","#ff6ad5","#5ef0ff"],6),u.push({x:I.x,z:I.z,t0:y,dur:.4,r0:.3,r1:3,col:"#ffd6ff"})),f=Math.min(1,f+.2),m.delete(M.b)}else if(M.k==="meteor")p.push({x:M.x,z:M.z,t0:y,d:Math.max(.3,M.d)}),u.push({x:M.x,z:M.z,t0:y,dur:M.d,r1:2.4,warn:1,col:"#ff3b2f"});else if(M.k==="boom")A(M.x,.5,M.z,30,["#fff","#ffd36a","#ff8a3d"],9),u.push({x:M.x,z:M.z,t0:y,dur:.5,r0:.5,r1:M.r*1.6,col:"#ffb060"}),f=Math.min(1,f+.5);else if(M.k==="win")for(let I=0;I<6;I++)A((Math.random()-.5)*6,6,(Math.random()-.5)*3,12,["#ff4d5e","#ffd23f","#3ec7ff","#9be564","#ff6fb5"],3);else M.k==="nuke"&&(f=1)}return{kind:"2d",resize(M,x,y){i=M,r=x,a=y,s.width=Math.round(M*y),s.height=Math.round(x*y),o=Math.min(M/(n*2.3),13),c=M/2,l=x*.47},setQuality(M){b={...b,...M}},frame:v,fx:w,project(M,x,y){let I=g(M,x,y);return{x:I.x,y:I.y-o*.7,ok:!0}},drawn(){return null},headY(M){return(M.flags&Ca.giant?2:1)*2.2},stats(){return{calls:0,tris:0,chars:0,parts:d.length}},dispose(){}}}function Yd({silenceUrl:s="/assets/silence.mp3",record:e=!1}={}){let t={ctx:null,master:null,sfxGain:null,voiceGain:null,unlocked:!1,played:0,fails:0,cues:[],record:e,last:{},speakingUntil:0,muted:!1};try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}let n=new Audio;n.setAttribute("playsinline",""),n.preload="auto";function i(){if(t.ctx||e)return t.ctx;let u=window.AudioContext||window.webkitAudioContext;if(!u)return null;try{t.ctx=new u}catch{return null}return r(t.ctx,t.ctx.destination,t),t.ctx}function r(u,p,m){let b=u.createDynamicsCompressor();b.threshold.value=-14,b.ratio.value=6,b.attack.value=.003,b.release.value=.2,m.master=u.createGain(),m.master.gain.value=.9,m.sfxGain=u.createGain(),m.sfxGain.gain.value=.55,m.voiceGain=u.createGain(),m.voiceGain.gain.value=1,m.sfxGain.connect(m.master),m.voiceGain.connect(m.master),m.master.connect(b),b.connect(p)}t.unlock=()=>{let u=i();if(u){try{u.resume();let p=u.createBuffer(1,1,22050),m=u.createBufferSource();m.buffer=p,m.connect(u.destination),m.start(0)}catch{}t.elUnlocked||(n.src=s,n.play().then(()=>{n.pause(),t.elUnlocked=!0}).catch(()=>{})),t.unlocked=u.state==="running",setTimeout(()=>{t.unlocked=u.state==="running",t.onstate&&t.onstate(t.unlocked)},120)}},t.resume=()=>{t.ctx&&t.ctx.state!=="running"&&t.ctx.resume().catch(()=>{})},t.state=()=>e?"record":t.ctx?t.ctx.state:"none";let a=u=>{if(u.__noise)return u.__noise;let p=u.sampleRate,m=u.createBuffer(1,p,p),b=m.getChannelData(0),g=1;for(let v=0;v<p;v++)g=g*16807%2147483647,b[v]=g/10737418235e-1-1;return u.__noise=m,m};function o(u,p,m,b,g,v){p.gain.setValueAtTime(1e-4,m),p.gain.exponentialRampToValueAtTime(g,m+b),p.gain.exponentialRampToValueAtTime(1e-4,m+b+v)}function c(u,p,m,{type:b="sine",f0:g=440,f1:v=g,a:A=.005,d:_=.2,peak:w=.3,det:M=0}){let x=u.createOscillator(),y=u.createGain();x.type=b,x.frequency.setValueAtTime(g,m),v!==g&&x.frequency.exponentialRampToValueAtTime(Math.max(20,v),m+A+_),x.detune.value=M,o(u,y,m,A,w,_),x.connect(y).connect(p),x.start(m),x.stop(m+A+_+.05)}function l(u,p,m,{type:b="lowpass",f0:g=1e3,f1:v=g,q:A=.7,a:_=.003,d:w=.15,peak:M=.4}){let x=u.createBufferSource(),y=u.createBiquadFilter(),I=u.createGain();x.buffer=a(u),y.type=b,y.Q.value=A,y.frequency.setValueAtTime(g,m),v!==g&&y.frequency.exponentialRampToValueAtTime(Math.max(30,v),m+_+w),o(u,I,m,_,M,w),x.connect(y).connect(I).connect(p),x.start(m,Math.random()*.5),x.stop(m+_+w+.05)}let h={punch:(u,p,m,b=1)=>{l(u,p,m,{f0:1400,f1:300,d:.08,peak:.5*b}),c(u,p,m,{f0:150,f1:55,d:.1,peak:.55*b})},crit:(u,p,m)=>{h.punch(u,p,m,1.2),c(u,p,m,{type:"square",f0:1800,f1:900,d:.06,peak:.12}),l(u,p,m+.01,{type:"highpass",f0:3e3,d:.12,peak:.25})},block:(u,p,m)=>{c(u,p,m,{type:"triangle",f0:1200,f1:1100,d:.18,peak:.18}),c(u,p,m,{type:"triangle",f0:1810,d:.14,peak:.1})},ko:(u,p,m)=>{c(u,p,m,{type:"sine",f0:260,f1:980,a:.005,d:.16,peak:.35}),l(u,p,m,{type:"bandpass",f0:2500,f1:600,q:1.2,d:.25,peak:.35}),c(u,p,m+.09,{type:"triangle",f0:1320,d:.2,peak:.12})},dash:(u,p,m)=>{l(u,p,m,{type:"bandpass",f0:500,f1:3500,q:2,a:.04,d:.22,peak:.45})},shield:(u,p,m)=>{[880,1320,1760].forEach((b,g)=>c(u,p,m+g*.03,{type:"sine",f0:b,d:.45,peak:.09}))},boom:(u,p,m,b=1)=>{l(u,p,m,{f0:900,f1:80,a:.004,d:.9,peak:.8*b}),c(u,p,m,{f0:90,f1:28,d:.8,peak:.8*b})},whistle:(u,p,m)=>{c(u,p,m,{type:"sine",f0:1900,f1:500,a:.05,d:.95,peak:.07})},coin:(u,p,m)=>{c(u,p,m,{type:"square",f0:988,d:.07,peak:.1}),c(u,p,m+.07,{type:"square",f0:1319,d:.28,peak:.1})},power:(u,p,m)=>{[523,659,784,1047].forEach((b,g)=>c(u,p,m+g*.05,{type:"triangle",f0:b,d:.3,peak:.14})),l(u,p,m,{type:"highpass",f0:2e3,f1:6e3,a:.1,d:.4,peak:.12})},heal:(u,p,m)=>{[660,880,1100].forEach((b,g)=>c(u,p,m+g*.06,{f0:b,d:.25,peak:.08}))},beep:(u,p,m)=>{c(u,p,m,{f0:880,d:.12,peak:.22})},go:(u,p,m)=>{c(u,p,m,{type:"sawtooth",f0:660,d:.5,peak:.12}),c(u,p,m,{type:"square",f0:1320,d:.5,peak:.08}),l(u,p,m,{f0:4e3,f1:500,d:.4,peak:.25})},land:(u,p,m)=>{c(u,p,m,{f0:120,f1:50,d:.12,peak:.3}),l(u,p,m,{f0:600,d:.1,peak:.15})},spin:(u,p,m)=>{l(u,p,m,{type:"bandpass",f0:300,f1:2400,q:3,a:.08,d:.35,peak:.5}),h.punch(u,p,m+.25,1.1)},cheer:(u,p,m)=>{l(u,p,m,{type:"bandpass",f0:1200,f1:1500,q:.6,a:.25,d:2.2,peak:.35}),l(u,p,m+.1,{type:"bandpass",f0:2600,f1:2200,q:.8,a:.3,d:2,peak:.18})},fanfare:(u,p,m)=>{[[523,0],[659,.12],[784,.24],[1047,.38],[784,.6],[1047,.72]].forEach(([b,g],v)=>{c(u,p,m+g,{type:"sawtooth",f0:b,d:v===5?.9:.16,peak:.07}),c(u,p,m+g,{type:"triangle",f0:b*2,d:v===5?.9:.16,peak:.05})}),h.cheer(u,p,m+.2)},nuke:(u,p,m)=>{h.boom(u,p,m,1.3),h.boom(u,p,m+.25,1),c(u,p,m,{type:"sawtooth",f0:220,f1:40,d:1.6,peak:.25})},pop:(u,p,m)=>{c(u,p,m,{f0:500,f1:1400,d:.07,peak:.15})},creak:(u,p,m)=>{c(u,p,m,{type:"sawtooth",f0:95,f1:140,a:.08,d:.7,peak:.07,det:8}),c(u,p,m+.05,{type:"square",f0:190,f1:120,a:.1,d:.6,peak:.03}),l(u,p,m,{type:"bandpass",f0:900,f1:500,q:6,a:.1,d:.6,peak:.12})},ghost:(u,p,m)=>{c(u,p,m,{type:"sine",f0:520,f1:760,a:.25,d:.9,peak:.08,det:15}),c(u,p,m+.1,{type:"sine",f0:780,f1:500,a:.3,d:.9,peak:.05})},thunder:(u,p,m)=>{l(u,p,m,{f0:500,f1:60,a:.02,d:1.8,peak:.6}),l(u,p,m+.15,{f0:250,f1:50,a:.1,d:1.6,peak:.45})},bell:(u,p,m)=>{[[110,.25],[220,.12],[277,.07],[330,.06],[440,.04]].forEach(([b,g])=>c(u,p,m,{type:"sine",f0:b,a:.004,d:2.6,peak:g}))},organ:(u,p,m)=>{[[147,0],[175,0],[220,0],[294,.02],[131,.6],[165,.6],[196,.6],[262,.62]].forEach(([b,g])=>{c(u,p,m+g,{type:"sawtooth",f0:b,a:.04,d:g?.9:.55,peak:.035}),c(u,p,m+g,{type:"triangle",f0:b*2,a:.04,d:g?.9:.55,peak:.03})})},heart:(u,p,m)=>{c(u,p,m,{f0:70,f1:45,d:.12,peak:.45}),c(u,p,m+.17,{f0:62,f1:40,d:.14,peak:.35})},chime:(u,p,m)=>{[1319,1568,1976,2637].forEach((b,g)=>c(u,p,m+g*.07,{type:"sine",f0:b,d:.6,peak:.07}))},trap:(u,p,m)=>{l(u,p,m,{type:"bandpass",f0:3e3,f1:300,q:1.5,a:.01,d:.35,peak:.4}),h.boom(u,p,m+.22,.7)},shatter:(u,p,m)=>{for(let b=0;b<6;b++)c(u,p,m+b*.035,{type:"triangle",f0:2200+b*430,f1:1800,d:.12,peak:.06});l(u,p,m,{type:"highpass",f0:4e3,d:.4,peak:.3})},wind:(u,p,m)=>{l(u,p,m,{type:"bandpass",f0:380,f1:700,q:4,a:.9,d:2.2,peak:.12})},squeak:(u,p,m)=>{c(u,p,m,{type:"triangle",f0:900,f1:1300,d:.08,peak:.07})},roar:(u,p,m)=>{c(u,p,m,{type:"sawtooth",f0:120,f1:60,a:.05,d:.9,peak:.16,det:20}),l(u,p,m,{type:"lowpass",f0:1200,f1:300,a:.05,d:.9,peak:.35})}},f={squeak:.06,ghost:.25,heart:.3,punch:.045,crit:.06,block:.08,ko:.08,heal:.15,land:.06,pop:.05,coin:.05,boom:.06};t.sfx=(u,p=t.now(),m=1)=>{if(t.muted||!h[u])return;let b=f[u]||.03;if(t.last[u]&&p-t.last[u]<b)return;if(t.last[u]=p,e){t.cues.push({k:"sfx",kind:u,t:p,v:m});return}let g=t.ctx;if(!(!g||g.state!=="running"))try{h[u](g,t.sfxGain,g.currentTime+.01,m)}catch{}},t.now=()=>e?t.clock():t.ctx?t.ctx.currentTime:0,t.clock=()=>0;let d=null;return t.voice=async(u,p)=>{if(t.muted||!u)return!1;if(t.speakingUntil=t.now()+(p||2),e)return t.cues.push({k:"voice",url:u,t:t.now(),dur:p}),!0;let m=t.ctx;if(m&&m.state!=="running"&&t.resume(),m&&m.state==="running")try{let b=await fetch(u).then(_=>{if(!_.ok)throw new Error("HTTP "+_.status);return _.arrayBuffer()}),g=await new Promise((_,w)=>{let M=m.decodeAudioData(b,_,w);M&&M.catch&&M.catch(w)});if(d)try{d.stop()}catch{}let v=m.createBufferSource();v.buffer=g,v.connect(t.voiceGain);let A=m.currentTime+.02;return t.sfxGain.gain.setTargetAtTime(.28,A,.05),t.sfxGain.gain.setTargetAtTime(.55,A+g.duration,.2),v.start(A),d=v,t.played++,v.onended=()=>{d===v&&(d=null)},!0}catch{t.fails++}try{return n.src=u,await n.play(),t.played++,!0}catch{return t.fails++,!1}},t.mix=async(u,p=44100)=>{let m=window.OfflineAudioContext||window.webkitOfflineAudioContext,b=new m(2,Math.ceil(u*p),p),g={};r(b,b.destination,g);let v=t.cues.filter(N=>N.k==="voice"),A=await Promise.all(v.map(N=>fetch(N.url).then(G=>G.arrayBuffer()).then(G=>b.decodeAudioData(G)).catch(()=>null)));for(let N of t.cues)if(N.k==="sfx"&&N.t<u)try{h[N.kind](b,g.sfxGain,N.t+.01,N.v)}catch{}v.forEach((N,G)=>{let P=A[G];if(!P||N.t>=u)return;let U=b.createBufferSource();U.buffer=P,U.connect(g.voiceGain),U.start(N.t+.02),g.sfxGain.gain.setTargetAtTime(.28,N.t,.05),g.sfxGain.gain.setTargetAtTime(.55,N.t+P.duration,.2)});let _=await b.startRendering(),w=_.length,M=[_.getChannelData(0),_.getChannelData(1)],x=new DataView(new ArrayBuffer(44+w*4)),y=(N,G)=>{for(let P=0;P<G.length;P++)x.setUint8(N+P,G.charCodeAt(P))};y(0,"RIFF"),x.setUint32(4,36+w*4,!0),y(8,"WAVEfmt "),x.setUint32(16,16,!0),x.setUint16(20,1,!0),x.setUint16(22,2,!0),x.setUint32(24,p,!0),x.setUint32(28,p*4,!0),x.setUint16(32,4,!0),x.setUint16(34,16,!0),y(36,"data"),x.setUint32(40,w*4,!0);let I=44;for(let N=0;N<w;N++)for(let G=0;G<2;G++){let P=Math.max(-1,Math.min(1,M[G][N]));x.setInt16(I,P*32767,!0),I+=2}let C=new Uint8Array(x.buffer),D="";for(let N=0;N<C.length;N+=32768)D+=String.fromCharCode.apply(null,C.subarray(N,N+32768));return btoa(D)},t}function Zd(s,{off:e=!1}={}){let t=Math.random().toString(36).slice(2,8),n=performance.now(),i=[];addEventListener("error",o=>{i.push(String(o.message||"error").slice(0,110)),i.length>3&&i.shift()}),addEventListener("unhandledrejection",o=>{i.push(("rej "+(o.reason&&o.reason.message||o.reason)).slice(0,110)),i.length>3&&i.shift()});let r=o=>{let c=s();return{id:t,reason:o,up:(performance.now()-n)/1e3,ua:navigator.userAgent.slice(0,160),scr:{w:screen.width,h:screen.height,dpr:devicePixelRatio},vis:document.visibilityState,errs:i.slice(),...c,mem:{...c.mem||{},heap:performance.memory?performance.memory.usedJSHeapSize/1048576:void 0}}},a=o=>{if(e)return;let c=r(o),l=JSON.stringify(c);if(o==="start")try{let h=JSON.parse(localStorage.getItem("lg_diagLast")||"null");h&&h.reason!=="pagehide"&&(l=JSON.stringify({...c,prev:h}))}catch{}try{localStorage.setItem("lg_diagLast",JSON.stringify(c))}catch{}try{navigator.sendBeacon&&navigator.sendBeacon("/diag",new Blob([l],{type:"text/plain"}))||fetch("/diag",{method:"POST",body:l,keepalive:!0}).catch(()=>{})}catch{}};return setTimeout(()=>a("start"),4e3),setInterval(()=>a("tick"),3e4),document.addEventListener("visibilitychange",()=>{document.hidden&&a("hidden")}),addEventListener("pagehide",()=>a("pagehide")),{send:a,errs:i}}var $d=[["red",16731486],["orange",16752412],["gold",16765503],["lime",10216804],["green",3064446],["teal",2085313],["cyan",4114431],["blue",5078271],["purple",10182117],["pink",16740277],["white",15921906],["black",3816008],["brown",11037500],["silver",12109014],["rose",16748451]],Er=new Map($d.map(([s,e])=>[s,e]));Er.set("yellow",16765503);Er.set("violet",10182117);Er.set("grey",12109014);Er.set("gray",12109014);function X_(s){let e=2166136261;for(let t of String(s))e^=t.codePointAt(0),e=Math.imul(e,16777619);return e>>>0}var Qd=s=>$d[X_(s)%10][1];function cu(s){let e=String(s||"").replace(/[\u0000-\u001f\u200b-\u200f\u202a-\u202e]/g,"").replace(/\s+/g," ").trim(),t=[...e];return(t.length>16?t.slice(0,15).join("")+"\u2026":e)||"Viewer"}var Tr=s=>String(s||"").toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}]/gu,""),Pa=[{id:"nuke",min:500,label:"STORM NUKE",icon:"\u2622\uFE0F",desc:"blows the storm back + meteor rain"},{id:"revive",min:100,label:"REVIVE",icon:"\u{1F496}",desc:"back from the dead / full heal + shield"},{id:"giant",min:30,label:"GIANT MODE",icon:"\u{1F996}",desc:"2x size, +HP, huge hits"},{id:"meteor",min:5,label:"METEOR STRIKE",icon:"\u2604\uFE0F",desc:"meteors smash your enemies"},{id:"speed",min:1,label:"SPEED BOOST",icon:"\u{1F339}",desc:"fast feet + small heal"}];function ep(s){let e=Number(s)||0;return Pa.find(t=>e>=t.min)||Pa[Pa.length-1]}var Fs={attack:/^(?:[⚔🗡🔪👊🥊]\uFE0F?\s*|(?:attack|atk|hit|kill|fight|punch|target|beat|smash)\s+)@?(.{1,40})$/iu,shield:/^(?:shield|block|defend|protect|🛡\uFE0F?)$/iu,dash:/^(?:dash|charge|rush|zoom|💨|⚡\uFE0F?)$/iu,dance:/^(?:dance|taunt|emote|gg|lol|💃|🕺|😂|🤣)$/iu,revenge:/^(?:revenge|payback|😡|🤬)$/iu,color:/^(?:colou?r|skin|paint)\s+([a-z]+)$/i,join:/^(?:join|play|me|in|i'?m in|let me in|go|🙋\u200d?[♀♂]?\uFE0F?|✋|🙋)$/iu};function tp(s){let e=String(s||"").trim().replace(/\s+/g," ");if(!e)return{cmd:"none"};let t=e.toLowerCase().replace(/[!.?]+$/,"");if(Fs.shield.test(t))return{cmd:"shield"};if(Fs.dash.test(t))return{cmd:"dash"};if(Fs.dance.test(t))return{cmd:"dance"};if(Fs.revenge.test(t))return{cmd:"revenge"};if(Fs.join.test(t))return{cmd:"join"};let n=t.match(Fs.color);if(n&&Er.has(n[1]))return{cmd:"color",color:Er.get(n[1]),colorName:n[1]};if(n=e.match(Fs.attack),n){let i=n[1].replace(/^@/,"").trim();if(Tr(i))return{cmd:"attack",name:i}}return/^@[\w.]{2,}/.test(e)?{cmd:"attack",name:e.slice(1).split(" ")[0]}:{cmd:"chat"}}function np(s,e){let t=Tr(s);if(!t)return null;let n=null,i=0;for(let r of e){let a=Tr(r.name),o=Tr(r.uid||""),c=0;a===t||o===t?c=3:a.startsWith(t)||o.startsWith(t)?c=2:t.length>=3&&(a.includes(t)||o.includes(t))&&(c=1),c>i&&(i=c,n=r)}return n}var jc=["Pixel","Mochi","Bolt","Nugget","Waffles","Ziggy","Pebble","Turbo","Biscuit","Gizmo","Noodle","Sprocket","Muffin","Rocket","Tofu","Dumpling","Jelly","Comet","Pickle","Bean","Sushi","Taco","Nacho","Boba"];var j_={lobbySeconds:20,ceremonySeconds:12,arenaCap:50,vipOverflow:10,minFighters:8,bots:!0,baseHp:150,platform:20,maxBattleSeconds:150,reinforceWindow:.4,botDamage:.85,damageMul:1,shrinkSeconds:0},Ia=(s,e,t)=>s<e?e:s>t?t:s,K_=(s,e,t)=>s+(e-s)*t,J_=s=>s*s*(3-2*s),ip={2:"DOUBLE KILL",3:"TRIPLE KILL",4:"QUADRA KILL",5:"RAMPAGE"},sp={3:"ON FIRE",5:"UNSTOPPABLE",8:"GODLIKE",12:"LEGENDARY"},Ft={alive:1,shield:2,speed:4,giant:8,rage:16,dash:32,dance:64,air:128,crown:256,cmd:512,low:1024,bot:2048},Kc=class{constructor(e={},t=Math.random){this.o={...j_,...e},this.rng=t,this.t=0,this.people=new Map,this.fighters=new Map,this.byUid=new Map,this.queue=[],this.nextId=1,this.events=[],this.rosterAdd=[],this.rosterDel=[],this.meteors=[],this.likes=0,this.hype=0,this.round=0,this.results=[],this.botIdx=Math.floor(t()*jc.length),this.enterLobby()}r(e=0,t=1){return e+(t-e)*this.rng()}emit(e){this.events.push(e),this.events.length>400&&this.events.splice(0,this.events.length-400)}drain(){let e=this.events;return this.events=[],e}drainRoster(){let e={add:this.rosterAdd,del:this.rosterDel};return this.rosterAdd=[],this.rosterDel=[],e}get alive(){let e=0;for(let t of this.fighters.values())t.alive&&e++;return e}get humans(){let e=0;for(let t of this.fighters.values())t.bot||e++;return e}aliveList(){return[...this.fighters.values()].filter(e=>e.alive)}person(e,t){let n=this.people.get(e);return n||(n={uid:e,name:cu(t||e),color:Qd(e),bot:e.startsWith("bot:"),wins:0,kills:0,games:0,best:0,bank:[],lastSeen:this.t,joinedAt:this.t},this.people.set(e,n)),t&&!n.bot&&(n.name=cu(t)),n.lastSeen=this.t,n}rosterEntry(e){return{id:e.id,name:e.name,color:e.color,bot:e.bot}}enterLobby(){for(let t of this.fighters.values())this.rosterDel.push(t.id);this.fighters.clear(),this.byUid.clear(),this.meteors=[],this.phase="lobby",this.phaseT=this.t,this.phaseEnd=this.t+this.o.lobbySeconds,this.round++,this.storm={r:this.o.platform*.9,target:this.o.platform*.9,R0:this.o.platform*.9,rf:3,push:0},this.firstBlood=!1,this.podium=null,this.winner=null,this.emit({k:"phase",ph:"lobby",round:this.round});let e=this.queue.filter(t=>{let n=this.people.get(t);return n&&this.t-n.lastSeen<600});this.queue=[];for(let t of e)this.seat(t,{quiet:!0})}startBattle(){if(this.fillBots(!0),this.alive<2){this.phaseEnd=this.t+5;return}let e=this.alive;this.phase="battle",this.phaseT=this.t;let t=Ia(8+Math.sqrt(e)*1.7,10,this.o.platform-1),n=this.o.shrinkSeconds||Ia(30+e*.9,38,95);this.storm={R0:t,r:t,target:t,rf:Ia(2.5+Math.sqrt(e)*.25,2.5,5),hold:6,shrink:n,push:0},this.phaseEnd=this.t+this.o.maxBattleSeconds,this.startN=e;let i=0;for(let r of this.fighters.values()){let a=i++/e*Math.PI*2+this.r(-.2,.2),o=t*this.r(.35,.85);r.x=Math.cos(a)*o,r.z=Math.sin(a)*o,r.vx=r.vz=0,r.hp=r.maxHp,r.danceUntil=0;let c=this.people.get(r.uid);c&&(c.games++,this.applyBank(r,c))}this.emit({k:"phase",ph:"battle",n:e})}endBattle(e){this.phase="ceremony",this.phaseT=this.t,this.phaseEnd=this.t+this.o.ceremonySeconds;let t=[...this.fighters.values()].sort((a,o)=>(a.place||999)-(o.place||999));e&&(e.place=1);let n=t.filter(a=>a.place).slice(0,3),i=[[0,1.5,0],[-2.1,1,.5],[2.1,.6,.5]];this.podium=n.map(a=>a.id);for(let a of this.fighters.values()){let o=this.podium.indexOf(a.id);o>=0?(a.alive=!0,a.x=i[o][0],a.y=i[o][1],a.z=i[o][2],a.face=Math.PI/2,a.vx=a.vz=0,a.hp=a.maxHp,a.danceUntil=this.t+99,a.shieldUntil=0,a.giantUntil=0,a.state="podium"):a.alive=!1}let r={round:this.round,at:this.t,players:[],winner:e?{uid:e.uid,name:e.name,bot:e.bot,kills:e.kills}:null};for(let a of this.fighters.values()){let o=this.people.get(a.uid);o&&(o.kills+=a.kills,o.best=Math.max(o.best,a.kills),a.place===1&&o.wins++,r.players.push({uid:a.uid,name:a.name,bot:a.bot,kills:a.kills,place:a.place||0}))}this.results.push(r),this.results.length>20&&this.results.shift(),this.lastResult=r,this.emit({k:"win",a:e?e.id:-1,top:this.podium,kills:e?e.kills:0,bot:e&&e.bot?1:0});for(let a of this.fighters.values())!a.bot&&!this.queue.includes(a.uid)&&this.queue.push(a.uid)}cap(){return this.o.arenaCap}seat(e,{vip:t=!1,quiet:n=!1,force:i=!1}={}){let r=this.people.get(e);if(!r)return"none";if(this.byUid.has(e)){let l=this.fighters.get(this.byUid.get(e));return l&&l.alive?"in":"dead"}let a=this.humans,o=a<this.cap()||t&&a<this.cap()+this.o.vipOverflow,c=this.phase==="lobby"||this.phase==="battle"&&(i||t||this.stormProgress()<this.o.reinforceWindow);return!o||!c?(this.queue.includes(e)||(t||r.follower||r.gifter?this.queue.unshift(e):this.queue.push(e)),n||this.emit({k:"queued",n:r.name,q:this.queue.length}),"queued"):(this.queue=this.queue.filter(l=>l!==e),r.bot||this.dropBot(),this.spawn(r,{drop:!0}),"in")}spawn(e,{drop:t=!1}={}){let n=this.nextId++,i=this.phase==="lobby"?this.lobbyRadius():this.storm.r*.8,r=this.r(0,Math.PI*2),a=Math.sqrt(this.rng())*i,o=this.o.baseHp+(e.follower?30:0),c={id:n,uid:e.uid,name:e.name,color:e.color,bot:e.bot,x:Math.cos(r)*a,y:t?14:0,z:Math.sin(r)*a,vx:0,vz:0,kx:0,kz:0,face:this.r(0,6.28),hp:o,maxHp:o,alive:!0,kills:0,streak:0,multi:0,lastKillT:-99,place:0,tgt:0,cmdTgt:0,cmdUntil:0,retargetAt:0,atkCd:this.r(.3,1),dashCd:0,dashUntil:0,shieldUntil:t?this.t+2:0,shieldCd:0,speedUntil:0,giantUntil:0,rageUntil:0,danceUntil:0,charge:0,lastHitBy:0,lastHitT:-99,dropUntil:t?this.t+1.1:0,cmdT:-99,botActT:this.t+this.r(4,10),wander:this.r(0,6.28)};return this.fighters.set(n,c),this.byUid.set(e.uid,n),this.rosterAdd.push(this.rosterEntry(c)),this.emit({k:"drop",a:n,bot:e.bot?1:0}),c}fillBots(e=!1){if(!this.o.bots||this.o.minFighters<=0)return;let t=this.o.minFighters,n=this.fighters.size;for(;n<t&&(e||this.phase==="lobby");){let i="Bot "+jc[this.botIdx++%jc.length],r="bot:"+Tr(i)+":"+this.round+":"+n,a=this.person(r,i);a.bot=!0,this.spawn(a,{drop:!0}),n++}}dropBot(){if(!(this.phase!=="lobby"||this.fighters.size<this.o.minFighters)){for(let e of this.fighters.values())if(e.bot){this.fighters.delete(e.id),this.byUid.delete(e.uid),this.people.delete(e.uid),this.rosterDel.push(e.id),this.emit({k:"poof",a:e.id});return}}}applyBank(e,t){for(let n of t.bank.splice(0))this.applyGift(e,t,n,!0)}lobbyRadius(){return Math.min(this.o.platform*.7,4+Math.sqrt(this.fighters.size+1)*.9)}input(e){if(!e||!e.uid)return{ok:!1,reason:"no-user"};let t=String(e.uid).slice(0,64);if(t.startsWith("bot:"))return{ok:!1,reason:"reserved"};let n=this.person(t,e.name);switch(e.type){case"chat":return this.onChat(n,String(e.text||""));case"gift":return this.onGift(n,e);case"like":return this.onLike(n,Number(e.count)||1);case"follow":return n.follower=!0,this.boostMaxHp(n,30),this.emit({k:"perk",n:n.name,perk:"follow"}),this.seat(t),{ok:!0};case"share":{n.sharer=!0;let i=this.fighterOf(n);return i&&i.alive?i.rageUntil=this.t+12:n.bank.push("rage"),this.emit({k:"perk",n:n.name,perk:"share",a:i?i.id:0}),this.seat(t),{ok:!0}}case"join":return{ok:!0,ignored:"join"};default:return{ok:!1,reason:"unknown-type"}}}fighterOf(e){let t=this.byUid.get(e.uid);return t?this.fighters.get(t):null}boostMaxHp(e,t){let n=this.fighterOf(e);n&&n.alive&&!n.followBoost&&(n.followBoost=!0,n.maxHp+=t,n.hp+=t)}onChat(e,t){let n=tp(t),i=this.seat(e.uid);i==="in"&&this.fighterOf(e)?.y>1&&this.emit({k:"join",n:e.name,a:this.fighterOf(e).id});let a=this.fighterOf(e);if(!a||!a.alive)return{ok:!0,status:i,cmd:n.cmd};switch(a.cmdT=this.t,n.cmd){case"attack":{let o=this.aliveList().filter(l=>l.id!==a.id).map(l=>({name:l.name,uid:l.uid,o:l})),c=np(n.name,o);c?(a.cmdTgt=c.o.id,a.cmdUntil=this.t+12,a.tgt=c.o.id,this.emit({k:"cmd",c:"attack",a:a.id,b:c.o.id})):this.emit({k:"cmd",c:"miss",a:a.id});break}case"revenge":{let o=e.lastKiller?this.byUid.get(e.lastKiller):a.lastHitBy,c=o&&this.fighters.get(o);c&&c.alive&&c.id!==a.id&&(a.cmdTgt=c.id,a.cmdUntil=this.t+15,a.rageUntil=Math.max(a.rageUntil,this.t+4),this.emit({k:"cmd",c:"revenge",a:a.id,b:c.id}));break}case"shield":this.t>=a.shieldCd&&(a.shieldUntil=this.t+3.5,a.shieldCd=this.t+12,this.emit({k:"shield",a:a.id}));break;case"dash":this.dash(a);break;case"dance":a.danceUntil=this.t+2.2,this.emit({k:"dance",a:a.id});break;case"color":{e.color=n.color,a.color=n.color,this.rosterAdd.push(this.rosterEntry(a)),this.emit({k:"cmd",c:"color",a:a.id});break}}return{ok:!0,status:i,cmd:n.cmd}}dash(e){if(this.t<e.dashCd||e.dropUntil>this.t)return!1;let t=this.fighters.get(e.cmdTgt||e.tgt),n=t&&t.alive?Math.atan2(t.z-e.z,t.x-e.x):e.face;return e.face=n,e.dashUntil=this.t+.32,e.dashCd=this.t+6,e.dashHit=!1,e.kx=Math.cos(n)*17,e.kz=Math.sin(n)*17,this.emit({k:"dash",a:e.id}),!0}onLike(e,t){t=Ia(t,1,50),this.likes+=t,this.hype+=t;let n=this.fighterOf(e);if(n&&n.alive&&this.phase==="battle"){let i=Math.min(t,10);n.hp<n.maxHp&&(n.hp=Math.min(n.maxHp,n.hp+i),this.emit({k:"heal",a:n.id,v:i})),n.charge=Math.min(100,n.charge+t*4)}else n||this.seat(e.uid,{quiet:!0});if(this.hype>=300){this.hype-=300;let i=0;for(let r of this.fighters.values())r.alive&&!r.bot&&(r.hp=Math.min(r.maxHp,r.hp+20),i++);this.emit({k:"hype",likes:this.likes,healed:i})}return{ok:!0}}onGift(e,t){let n=(Number(t.coins)||1)*(Number(t.count)||1),i=ep(n);e.gifter=!0,e.coins=(e.coins||0)+n;let r=this.fighterOf(e);return r||(this.seat(e.uid,{vip:!0}),r=this.fighterOf(e),r&&this.emit({k:"join",n:e.name,a:r.id,vip:1})),this.emit({k:"gift",n:e.name,g:String(t.giftName||"Gift").slice(0,24),tier:i.id,coins:n,a:r?r.id:0}),this.phase!=="battle"?(r&&i.id==="speed"&&(r.speedUntil=this.t+8),r&&i.id==="giant"&&(r.giantUntil=this.t+6),e.bank.push(i.id),this.emit({k:"bank",n:e.name,tier:i.id}),{ok:!0,tier:i.id,banked:!0}):(this.applyGift(r,e,i.id,!1),{ok:!0,tier:i.id})}applyGift(e,t,n,i){let r=this.t;if(n==="rage"){e&&e.alive&&(e.rageUntil=r+12);return}if(n==="revive"&&e&&!e.alive&&this.phase==="battle"){e.alive=!0,e.hp=e.maxHp,e.place=0,e.y=14,e.dropUntil=r+1.1,e.shieldUntil=r+4;let a=this.r(0,6.28),o=this.storm.r*.5*Math.sqrt(this.rng());e.x=Math.cos(a)*o,e.z=Math.sin(a)*o,this.emit({k:"revive",a:e.id});return}if(!e||!e.alive){n==="meteor"||n==="nuke"?this.meteorShower(null,n==="nuke"?8:3,t.uid):t.bank.push(n);return}switch(n){case"speed":e.speedUntil=r+8,e.hp=Math.min(e.maxHp,e.hp+10);break;case"meteor":this.meteorShower(e,3);break;case"giant":e.giantUntil=r+15,e.maxHp+=50,e.hp=e.maxHp;break;case"revive":e.hp=e.maxHp,e.shieldUntil=r+6,e.giantUntil=Math.max(e.giantUntil,r+10);break;case"nuke":{let a=this.storm;a.push=Math.min(a.push+(a.R0-a.r)*.6+2,a.R0),e.giantUntil=r+15,e.shieldUntil=r+5,e.hp=e.maxHp,this.emit({k:"nuke",a:e.id}),this.meteorShower(e,8);break}}(!i||n!=="meteor")&&this.emit({k:"power",a:e.id,tier:n})}meteorShower(e,t,n){let i=this.aliveList().filter(r=>!e||r.id!==e.id);if(i.length){i.sort((r,a)=>e?Math.hypot(r.x-e.x,r.z-e.z)-Math.hypot(a.x-e.x,a.z-e.z):this.rng()-.5);for(let r=0;r<t;r++){let a=i[r%Math.min(i.length,Math.max(3,t))],o=a.x+this.r(-.8,.8),c=a.z+this.r(-.8,.8),l={x:o,z:c,at:this.t+1.1+r*.22,by:e?e.id:0,byUid:e?e.uid:n,dmg:34,r:2.4};this.meteors.push(l),this.emit({k:"meteor",x:+o.toFixed(2),z:+c.toFixed(2),d:+(l.at-this.t).toFixed(2),a:l.by})}}}stormProgress(){if(this.phase!=="battle")return 0;let e=this.storm,t=this.t-this.phaseT-e.hold;return Ia(t/e.shrink,0,1)}step(e){e=Math.min(e,.1),this.t+=e;let t=this.t;if(this.phase==="lobby"?(this.fillBots(),t>=this.phaseEnd&&this.startBattle()):this.phase==="ceremony"&&t>=this.phaseEnd&&this.enterLobby(),this.phase==="battle"&&this.updateStorm(e),this.updateFighters(e),this.phase==="battle"){this.updateMeteors(),this.reinforce();let n=this.aliveList();n.length<=1?this.endBattle(n[0]||null):t>=this.phaseEnd&&!this.suddenDeath&&(this.suddenDeath=!0,this.emit({k:"storm",msg:"sudden"}))}}updateStorm(e){let t=this.storm,n=this.t-this.phaseT,i=this.stormProgress();t.push=Math.max(0,t.push-e*.35);let r=K_(t.R0,t.rf,J_(i));n>t.hold+t.shrink&&(r=Math.max(.6,t.rf-(n-t.hold-t.shrink)*.12)),this.suddenDeath&&(r=Math.max(0,r-(this.t-this.phaseEnd)*.4)),t.target=r,t.r=Math.min(t.R0+.01,r+t.push),!t.warned&&n>t.hold-.1&&(t.warned=!0,this.emit({k:"storm",msg:"closing"})),!t.half&&i>.5&&(t.half=!0,this.emit({k:"storm",msg:"half"})),t.dps=5+11*i+(this.suddenDeath?15:0)}reinforce(){if(!this.queue.length||this.stormProgress()>=this.o.reinforceWindow||this.humans>=this.cap())return;let e=this.queue.shift();if(this.people.has(e)){this.seat(e,{quiet:!0,force:!0});let t=this.fighterOf(this.people.get(e));t&&this.emit({k:"join",n:t.name,a:t.id,late:1})}}pickTarget(e,t){if(e.cmdTgt&&this.t<e.cmdUntil){let a=this.fighters.get(e.cmdTgt);if(a&&a.alive)return a.id}e.cmdTgt=0;let n=0,i=1e9,r=this.storm.r;for(let a of t){if(a.id===e.id||!a.alive||a.dropUntil>this.t)continue;let o=(a.x-e.x)**2+(a.z-e.z)**2;a.x*a.x+a.z*a.z>r*r&&(o*=1.6),a.id===e.tgt&&(o*=.7),a.giantUntil>this.t&&(o*=1.3),o<i&&(i=o,n=a.id)}return n}updateFighters(e){let t=this.t,n=this.phase==="battle",r=[...this.fighters.values()].filter(c=>c.alive),a=this.storm.r,o=null;for(let c of r)c.kills>=2&&(!o||c.kills>o.kills)&&(o=c);this.crownId=o?o.id:0;for(let c of r){if(c.state==="podium")continue;c.y>0&&(c.y=Math.max(0,c.y-e*14*Math.max(.25,(c.dropUntil-t<.4,1))),c.y===0&&this.emit({k:"land",a:c.id}));let l=c.giantUntil>t,h=c.speedUntil>t,f=l?.75:.42,d=0,u=0,p=(h?5.6:3.4)*(l?.9:1);if(c.dropUntil>t){c.vx=c.vz=0;continue}let m=c.x*c.x+c.z*c.z;if(n){t>=c.retargetAt&&(c.tgt=this.pickTarget(c,r),c.retargetAt=t+.35+this.r(0,.25));let M=this.fighters.get(c.tgt);if(m>(a-.6)**2){let y=Math.sqrt(m)||1;d=-c.x/y,u=-c.z/y,p*=1.1}else if(M&&M.alive){let y=M.x-c.x,I=M.z-c.z,C=Math.hypot(y,I)||.001,D=(l?1.9:1.1)+(M.giantUntil>t?.5:0);c.face=Math.atan2(I,y),C>D*.9?(d=y/C,u=I/C):(d=-I/C*.25*Math.sin(t*2+c.id),u=y/C*.25*Math.sin(t*2+c.id),p*=.6),c.atkCd-=e,C<=D&&c.atkCd<=0&&c.danceUntil<t&&this.attack(c,M,C)}if(c.dashUntil>t&&!c.dashHit){for(let y of r)if(!(y.id===c.id||y.dropUntil>t)&&(y.x-c.x)**2+(y.z-c.z)**2<(f+.6)**2){c.dashHit=!0,this.damage(y,16,c,{kb:9,crit:!1,dash:!0});break}}if(c.charge>=100&&(c.charge=0,this.spin(c,r)),c.bot&&t>c.botActT&&(c.botActT=t+this.r(6,14),this.rng()<.5?this.dash(c):t>=c.shieldCd&&(c.shieldUntil=t+2.5,c.shieldCd=t+12,this.emit({k:"shield",a:c.id}))),m>a*a&&(c.stormAcc=(c.stormAcc||0)+this.storm.dps*e,c.stormAcc>=3)){let y=Math.floor(c.stormAcc);c.stormAcc-=y,this.damage(c,y,null,{storm:!0})}}else{c.wander+=this.r(-1,1)*e*2;let M=this.phase==="lobby"?this.lobbyRadius():4.5;m>M*M&&(c.wander=Math.atan2(-c.z,-c.x)),d=Math.cos(c.wander)*.45,u=Math.sin(c.wander)*.45,c.danceUntil>t&&(d=u=0),(d||u)&&(c.face=Math.atan2(u,d))}for(let M of r){if(M===c)continue;let x=c.x-M.x,y=c.z-M.z,I=x*x+y*y,C=f+(M.giantUntil>t?.75:.42);if(I<C*C&&I>1e-6){let D=Math.sqrt(I),N=(C-D)/C;d+=x/D*N*2.2,u+=y/D*N*2.2}}let b=d*p,g=u*p,v=Math.min(1,e*8);c.vx+=(b-c.vx)*v,c.vz+=(g-c.vz)*v,c.x+=(c.vx+c.kx)*e,c.z+=(c.vz+c.kz)*e;let A=Math.exp(-e*(c.dashUntil>t?1:7));c.kx*=A,c.kz*=A;let _=Math.hypot(c.x,c.z),w=this.o.platform-.5;_>w&&(c.x*=w/_,c.z*=w/_)}}attack(e,t,n){let i=this.t;e.atkCd=this.r(.95,1.35)*(e.speedUntil>i?.8:1);let r=this.r(5,8),a=this.rng()<.14;a&&(r*=1.9),e.giantUntil>i&&(r*=1.8),e.rageUntil>i&&(r*=1.6),e.bot&&(r*=this.o.botDamage),r*=this.o.damageMul,this.emit({k:"atk",a:e.id,b:t.id}),this.damage(t,Math.round(r),e,{crit:a,kb:(e.giantUntil>i?7:3.6)+(a?2:0)})}spin(e,t){this.emit({k:"spin",a:e.id});for(let n of t)n.id!==e.id&&(n.x-e.x)**2+(n.z-e.z)**2<2.8*2.8&&this.damage(n,22,e,{kb:8})}damage(e,t,n,{crit:i=!1,kb:r=0,storm:a=!1,meteor:o=!1,dash:c=!1,x:l,z:h}={}){let f=this.t;if(!(!e.alive||this.phase!=="battle"||e.dropUntil>f)){if(e.shieldUntil>f&&!a&&(t=Math.max(1,Math.round(t*.2)),this.emit({k:"block",a:e.id})),e.hp-=t,n&&(e.lastHitBy=n.id,e.lastHitT=f),r){let d=l??(n?n.x:0),u=h??(n?n.z:0),p=e.x-d,m=e.z-u,b=Math.hypot(p,m)||1,g=e.giantUntil>f?.35:1;e.kx+=p/b*r*g,e.kz+=m/b*r*g}(!a||t>=3)&&this.emit({k:"hit",a:n?n.id:0,b:e.id,d:t,c:i?1:0,s:a?1:0,m:o?1:0}),e.hp<=0&&this.ko(e,n,{storm:a,meteor:o})}}ko(e,t,{storm:n,meteor:i}){let r=this.t;e.alive=!1,e.hp=0,e.place=this.alive+1;let a=t;!a&&e.lastHitBy&&r-e.lastHitT<4&&(a=this.fighters.get(e.lastHitBy));let o=this.people.get(e.uid),c={k:"ko",a:a?a.id:0,b:e.id,s:n?1:0,m:i?1:0,left:this.alive};a&&a.id!==e.id&&(a.kills++,a.streak++,a.multi=r-a.lastKillT<4.5?a.multi+1:1,a.lastKillT=r,a.hp=Math.min(a.maxHp,a.hp+12),(o&&!a.bot||o)&&(o.lastKiller=a.uid),this.firstBlood||(this.firstBlood=!0,c.first=1),ip[Math.min(5,a.multi)]&&a.multi>=2&&(c.multi=ip[Math.min(5,a.multi)]),sp[a.streak]&&(c.streak=sp[a.streak]),e.giantUntil>r&&(c.giant=1),c.n=a.kills),this.emit(c)}updateMeteors(){let e=this.t;if(!this.meteors.length)return;let t=this.meteors.filter(n=>n.at<=e);if(t.length){this.meteors=this.meteors.filter(n=>n.at>e);for(let n of t){this.emit({k:"boom",x:+n.x.toFixed(2),z:+n.z.toFixed(2),r:n.r});let i=n.by?this.fighters.get(n.by):null;for(let r of this.aliveList()){if(i&&r.id===i.id||n.byUid&&r.uid===n.byUid)continue;let a=Math.hypot(r.x-n.x,r.z-n.z);a<n.r&&this.damage(r,Math.round(n.dmg*(1-a/n.r*.5)),i&&i.alive?i:null,{kb:9,meteor:!0,x:n.x,z:n.z})}}}}snapshot(){let e=this.t,t=[];for(let i of this.fighters.values()){if(!i.alive&&i.state!=="podium")continue;let r=Ft.alive;i.shieldUntil>e&&(r|=Ft.shield),i.speedUntil>e&&(r|=Ft.speed),i.giantUntil>e&&(r|=Ft.giant),i.rageUntil>e&&(r|=Ft.rage),i.dashUntil>e&&(r|=Ft.dash),i.danceUntil>e&&(r|=Ft.dance),i.y>.01&&(r|=Ft.air),i.id===this.crownId&&(r|=Ft.crown),e-i.cmdT<6&&(r|=Ft.cmd),i.hp<i.maxHp*.3&&(r|=Ft.low),i.bot&&(r|=Ft.bot),t.push(i.id,Math.round(i.x*100)/100,Math.round(i.y*100)/100,Math.round(i.z*100)/100,Math.round(i.face*100)/100,Math.round(100*i.hp/i.maxHp),r,Math.round(i.charge))}let n=this.phase==="battle"?Math.max(0,this.phaseT+this.storm.hold-e):Math.max(0,this.phaseEnd-e);return{tm:Math.round(e*1e3)/1e3,ph:this.phase,tl:Math.round(n*10)/10,r:Math.round(this.storm.r*100)/100,rt:Math.round(this.storm.target*100)/100,n:this.alive,q:this.queue.length,h:this.humans,likes:this.likes,hype:this.hype,round:this.round,podium:this.podium,f:t}}board(e=10){return[...this.people.values()].filter(t=>!t.bot&&(t.wins||t.kills)).sort((t,n)=>n.wins-t.wins||n.kills-t.kills).slice(0,e).map(t=>({name:t.name,wins:t.wins,kills:t.kills,games:t.games,color:t.color}))}prune(e=3600,t=2e3){if(this.people.size<=t)return 0;let n=0;for(let[i,r]of this.people)!this.byUid.has(i)&&this.t-r.lastSeen>e&&!r.wins&&(this.people.delete(i),n++);return n}};var Rr=(s,e=Math.random)=>s[Math.floor(e()*s.length)%s.length];function rp({nameOf:s,rng:e=Math.random}){let t=[],n=0,i=99,r={lobby:["To play, just comment anything. You drop into the arena with your own fighter.","Gifts give powers! A rose is a speed boost. Five coins calls meteors. Thirty coins makes you a giant.","A one hundred coin gift revives you. Five hundred coins nukes the storm!","Follow for extra armor. Share the live for rage mode, double damage!"],battle:["Comment attack and a name to hunt someone down!","Type shield to block, or dash to charge!","Likes heal everybody! Keep tapping that screen!","Comment revenge to go after whoever knocked you out last time!","Send a gift for a power up right now!"]},a="lobby",o=-99,c=0,l={lobby:0,battle:0},h=(f,d,u,p={})=>({text:f,pri:d,banner:u||null,...p});return{lines(f,d){let u=[];for(let m of f){let b=m.a?s(m.a):null,g=m.b?s(m.b):null;switch(m.k){case"phase":a=m.ph,m.ph==="lobby"&&(i=99,l.lobby=0,u.push(h(Rr(["New round! Comment anything to drop into the arena!","Lobby is open! Comment anything to jump in!","Next battle starting soon. Comment to join the fight!"],e),5))),m.ph==="battle"&&u.push(h(Rr([`Fight! ${m.n} fighters, only one survives!`,`Let the battle begin! ${m.n} fighters enter, one walks out!`,`Go go go! ${m.n} fighters in the arena!`],e),7,"FIGHT!"));break;case"storm":m.msg==="closing"&&u.push(h(Rr(["The storm is closing in!","Watch out, the storm is moving!"],e),4,"STORM CLOSING")),m.msg==="half"&&u.push(h("Half the arena is gone!",3)),m.msg==="sudden"&&u.push(h("Sudden death! The storm swallows everything!",7,"SUDDEN DEATH"));break;case"ko":{if(m.left===1)break;m.first&&b?u.push(h(`First blood! ${b} takes out ${g}!`,6,"FIRST BLOOD")):m.multi&&b?u.push(h(`${b}, ${m.multi.toLowerCase()}!`,6,m.multi)):m.streak&&b?u.push(h(`${b} is ${m.streak.toLowerCase()}!`,6,m.streak)):m.giant&&b?u.push(h(`${b} took down a giant!`,6,"GIANT SLAYER")):m.s&&!b&&g&&m.left<=6&&u.push(h(`${g} got swallowed by the storm!`,3)),m.left===2?u.push(h("Final two! Who takes the crown?",7,"FINAL 2")):(m.left===3||m.left===5||m.left===10)&&m.left<i&&(i=m.left,u.push(h(m.left===3?"Final three!":`Only ${m.left} left!`,5,m.left===3?"FINAL 3":`${m.left} LEFT`)));break}case"gift":{let v=m.n,A={speed:[`${v} sent a ${m.g}! Speed boost!`,`Speed boost for ${v}! Thank you for the ${m.g}!`],meteor:[`Meteor strike from ${v}! Take cover!`,`${v} calls down the meteors!`],giant:[`${v} goes giant!`,`Uh oh, ${v} just went giant mode!`],revive:[`${v} with the revive! Thank you!`,`${v} rises again! Huge thanks!`],nuke:[`Storm nuke by ${v}! The storm gets blown away!`,`${v} nuked the storm! Everyone run!`]}[m.tier];A&&u.push(h(Rr(A,e),{speed:4,meteor:7,giant:7,revive:8,nuke:9}[m.tier],{speed:null,meteor:"METEOR STRIKE",giant:"GIANT MODE",revive:"REVIVE",nuke:"STORM NUKE"}[m.tier],{gift:m.tier}));break}case"bank":break;case"perk":m.perk==="follow"&&u.push(h(`Thanks for the follow, ${m.n}! Extra armor for you!`,5)),m.perk==="share"&&u.push(h(`${m.n} shared the live! Rage mode, double damage!`,5));break;case"hype":u.push(h("Like rain! Every viewer fighter heals up!",4,"LIKE RAIN"));break;case"revive":break;case"join":m.vip||t.push(m.n);break;case"win":if(m.a>0){let v=b,A=!!m.bot;u.push(h(A?`${v} wins this time! Comment now and take the crown back!`:Rr([`Winner winner! ${v} wins with ${m.kills} kills! Huge shoutout to ${v}!`,`${v} is the last one standing! What a champion!`,`Victory for ${v}! Everybody show ${v} some love!`],e),10,"WINNER",{win:1}))}else u.push(h("Nobody survived the storm! Next round!",10));break}}if(t.length&&d-n>5){n=d;let m=t.splice(0,50),b=m.slice(0,3),g=m.length-b.length,v=b.length===1?b[0]:b.slice(0,-1).join(", ")+" and "+b[b.length-1];u.push(h(g>0?`Welcome ${b.join(", ")} and ${g} more! Get ready to fight!`:Rr([`Welcome ${v}! You are in the arena!`,`${v} just dropped in!`],e),3))}u.length&&(o=d);let p=r[a];return p&&!u.length&&d-o>(a==="lobby"?5:11)&&d-c>(a==="lobby"?6:16)&&(c=d,o=d,u.push(h(p[l[a]++%p.length],2,null,{tip:1}))),u}}}var ap=["Sara","Ali","Hina","Omar","Zara","Bilal","Noor","Ayan","Esha","Faraz","Iman","Junaid","Kinza","Laiba","Moiz","Nimra","Rida","Saad","Tania","Umer","Maya","Leo","Aisha","Yusuf","Lina","Kai","Mia","Zain","Sofia","Adam","Hamza","Amna","Riya","Dev","Luna","Max"],op=["","_x","22",".official","_99","\u{1F338}","xo","_07",".live","\u2728","_pk","786"],cp=["hi","join","lets go","me!","hello from dubai","gg","this is fire","shield","dash","\u{1F4A8}","\u{1F6E1}\uFE0F","dance","color pink","color gold","revenge","wow","\u{1F525}\u{1F525}","i will win","play","1","2","3","2","left","right","3\uFE0F\u20E3","candle","clock","echo","map","attack","mage","warrior","archer","healer","\u{1F52E}","\u{1F3F9}","seal","hunt","city","army"],lp=[["Rose",1],["TikTok",1],["Finger Heart",5],["GG",1],["Doughnut",30],["Hand Hearts",100],["Corgi",299],["Money Gun",500],["Lion",29999]];function hp(s="busy",e=Math.random){let t=l=>Math.floor(e()*l),n=[],i=()=>{let l=ap[t(ap.length)]+op[t(op.length)],h={uid:l.toLowerCase().replace(/[^\w.]/g,"")+n.length,name:l};return n.push(h),h},r=()=>n.length?n[t(n.length)]:i(),a=0,o=0,c=s==="quiet"?3:s==="gifts"?30:s==="demo"?40:220;return{people:n,tick(l){a+=l,o+=l;let h=[],f=s==="quiet"?.6:s==="busy"?Math.min(14,2+a/6):s==="demo"?5:4;for(;o>1/f;){o-=1/f;let u=n.length<Math.min(c,s==="busy"?10+a*2.5:c)&&e()<.6?i():r(),p=e();if(p<.5){let m=cp[t(cp.length)];if(e()<.25&&n.length>2){let b=r();b!==u&&(m=(e()<.5?"attack ":"\u2694\uFE0F ")+b.name.replace(/[^\w]/g,"").slice(0,6))}h.push({type:"chat",uid:u.uid,name:u.name,text:m})}else if(p<.8)h.push({type:"like",uid:u.uid,name:u.name,count:1+t(15)});else if(p<(s==="gifts"?.98:.9)){let m=e()<.75?lp[t(4)]:lp[4+t(s==="gifts"?4:3)];h.push({type:"gift",uid:u.uid,name:u.name,giftName:m[0],coins:m[1],count:e()<.2?1+t(5):1})}else p<.95?h.push({type:"follow",uid:u.uid,name:u.name}):h.push({type:"share",uid:u.uid,name:u.name})}return h}}}var Xt=new URLSearchParams(location.search),vn=s=>document.getElementById(s),tl=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,ka=Xt.get("mode")==="phone"||Xt.get("mode")!=="pc"&&(tl||/Android|Mobile/.test(navigator.userAgent)),ti=Xt.get("render")==="1",Pr=ti||Xt.get("local")==="1",gu=Xt.get("key")||"",Ba=Number(Xt.get("fps"))||(ka?30:60),yp=Xt.get("mute")==="1";Xt.get("clean")==="1"&&document.body.classList.add("clean");var Su=ka?[{pr:1.5,maxW:780,maxChars:40,labels:14,particles:1,halos:!0,animLod:1},{pr:1.25,maxW:700,maxChars:32,labels:12,particles:.75,halos:!0,animLod:1},{pr:1,maxW:600,maxChars:24,labels:10,particles:.5,halos:!0,animLod:2},{pr:.8,maxW:480,maxChars:16,labels:8,particles:.35,halos:!1,animLod:2}]:[{pr:2,maxW:Number(Xt.get("maxw"))||1080,maxChars:60,labels:18,particles:1,halos:!0,animLod:1},{pr:1.5,maxW:900,maxChars:48,labels:16,particles:1,halos:!0,animLod:1},{pr:1,maxW:700,maxChars:36,labels:12,particles:.6,halos:!0,animLod:2},{pr:.8,maxW:540,maxChars:24,labels:10,particles:.4,halos:!1,animLod:2}],xn=Xt.has("q")?Math.max(0,Math.min(3,Number(Xt.get("q")))):0,Y_=Xt.has("q"),mi=vn("gl"),at=null,Mp=0,Sp=0,$c=[],is=!1,Us=vn("hud"),Ge=Us.getContext("2d");function wp(){if(!(Xt.get("view")==="2d"||localStorage.getItem("lg_force2d")==="1"))try{at=Kd(mi,{maxChars:Su[0].maxChars,particles:ka?800:1200,aa:!ka||tl,preserve:ti,platform:20}),at.ready.catch(()=>{ni("assets-fail"),za()}),mi.addEventListener("webglcontextlost",Ga,!1),mi.addEventListener("webglcontextrestored",Ap,!1);return}catch{ni("gl-fail")}za()}function za(){if(at&&at.kind==="2d")return;try{at&&at.dispose(),at&&at.loseContext&&at.loseContext()}catch{}let s=document.createElement("canvas");s.id="gl",mi.replaceWith(s),mi=s,at=Jd(mi,{platform:20}),ni("view-2d"),ss()}function Ga(s){s.preventDefault(),Mp++,is=!0,ni("ctx-lost"),$c.push(performance.now()),$c=$c.filter(e=>performance.now()-e<12e4),Lp("Graphics reset\u2026 recovering"),clearTimeout(Ga.t),Ga.t=setTimeout(()=>{is&&(localStorage.setItem("lg_force2d","1"),za(),is=!1,el())},4e3),Mu&&Mu.send("ctxlost")}function Ap(){if(clearTimeout(Ga.t),Sp++,ni("ctx-restored"),$c.length>=3){localStorage.setItem("lg_force2d","1"),za(),is=!1,el();return}try{at.dispose()}catch{}mi.removeEventListener("webglcontextlost",Ga),mi.removeEventListener("webglcontextrestored",Ap),at=null,wp(),xn=Math.min(3,xn+1),ss(),is=!1,el()}var Ha=390,Na=844;function ss(){let s=window.innerWidth,e=window.innerHeight,t=vn("stage"),n=s,i=e;s/e>.7&&(n=Math.round(Math.min(s,e*9/16)),i=Math.round(Math.min(e,n*16/9))),t.style.width=n+"px",t.style.height=i+"px",Ha=n,Na=i,document.documentElement.style.setProperty("--u",(n/100).toFixed(3)+"px");let r=Su[xn],a=window.devicePixelRatio||1,o=Math.min(a,r.pr,r.maxW/n);at&&(at.resize(n,i,o),at.setQuality(r));let c=Math.min(a,2,900/n);Us.width=Math.round(n*c),Us.height=Math.round(i*c),Us.__pr=c}addEventListener("resize",()=>{clearTimeout(ss.t),ss.t=setTimeout(ss,120)});var en=Yd({record:ti});en.muted=yp;var Tp=vn("soundChip");function Z_(){en.unlock(),setTimeout(()=>{en.state()==="running"&&(Tp.hidden=!0)},200)}["pointerdown","touchstart","click","keydown"].forEach(s=>addEventListener(s,Z_,{passive:!0}));document.addEventListener("visibilitychange",()=>{document.hidden||en.resume()});!ti&&!yp&&(en.unlock(),setTimeout(()=>{en.state()!=="running"&&(Tp.hidden=!1)},700));var Os=new Map,Qc=[],ni=s=>{Qc.push(s),Qc.length>8&&Qc.shift()},gi={ws:0,snaps:0,ev:0,err:0,say:0},_n=[],ki=null,up=0,fp="",$_=null,dp=Pa,Ep=null,Jc="",Cn={phase:"lobby",fighters:[],r:18,rt:18,tl:0,n:0,q:0,round:0};function bu(s=[],e=[]){for(let t of e)Os.delete(t);for(let t of s)Os.set(t.id,t)}var ei=null,La=1e3;function xu(){let s=(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws?game=br"+(gu?"&key="+encodeURIComponent(gu):"");try{ei=new WebSocket(s)}catch{return setTimeout(xu,La)}ei.onopen=()=>{gi.ws++,La=1e3,ni("ws-open"),el();try{let e=JSON.parse(localStorage.getItem("lg_brBoard")||"null");e&&e.json&&e.sig&&ei.send(JSON.stringify({t:"restore",json:e.json,sig:e.sig}))}catch{}},ei.onmessage=e=>{let t;try{t=JSON.parse(e.data)}catch{return}Q_(t)},ei.onclose=()=>{ei=null,ni("ws-close"),setTimeout(xu,La),La=Math.min(1e4,La*1.7),gi.ws&&Lp("Reconnecting\u2026")},ei.onerror=()=>{}}function Q_(s){switch(s.t){case"hello":Os.clear(),bu(s.roster),_n=[],ki=null,dp=s.tiers||dp,bp(s),pp(s.snap);break;case"roster":bu(s.add,s.del);break;case"s":pp(s);break;case"say":Pp(s.text,s.url,s.dur);break;case"banner":break;case"board":bp(s);break;case"status":Jc=s.tiktok?.state||"",vn("conn").className=Jc==="connected"?"connected":/wait|connecting|reconnect/.test(Jc)?"waiting":Jc==="error"?"error":"",gv(s.tiktok);break}}function pp(s){if(!s)return;gi.snaps++;let t=performance.now()/1e3-s.tm;ki===null||t<ki||Math.abs(t-ki)>2?ki=t:ki+=(t-ki)*.02,_n.length&&s.tm<_n[_n.length-1].tm-1&&(_n=[],ki=t),_n.push({tm:s.tm,s,done:!1}),_n.length>40&&_n.shift()}var ev=.16;function tv(s){if(!_n.length)return Cn;let e=s-ki-ev;for(let r of _n)if(!r.done&&r.tm<=e){r.done=!0;let a=e-r.tm>1.2;for(let o of r.s.ev||[])Cp(o,a)}let t=_n[0],n=null;for(let r=0;r<_n.length;r++)if(_n[r].tm<=e)t=_n[r];else{n=_n[r];break}if(!n||n===t)return _u(t.s,null,0);let i=Math.max(0,Math.min(1,(e-t.tm)/Math.max(.001,n.tm-t.tm)));return _u(t.s,n.s,i)}var mp=[];function _u(s,e,t){let n=[],i=new Map;if(e)for(let o=0;o<e.f.length;o+=8)i.set(e.f[o],o);let r=0;for(let o=0;o<s.f.length;o+=8){let c=s.f[o],l=mp[r]||(mp[r]={});r++,l.id=c,l.x=s.f[o+1],l.y=s.f[o+2],l.z=s.f[o+3],l.face=s.f[o+4],l.hp=s.f[o+5],l.flags=s.f[o+6],l.charge=s.f[o+7];let h=i.get(c);if(h!==void 0&&e){let f=e.f;l.x+=(f[h+1]-l.x)*t,l.y+=(f[h+2]-l.y)*t,l.z+=(f[h+3]-l.z)*t;let d=f[h+4]-l.face;d=Math.atan2(Math.sin(d),Math.cos(d)),l.face+=d*t}l.info=Os.get(c)||{name:"?",color:16777215},n.push(l)}let a=e&&t>.5?e:s;return a.ph!==fp&&(fp=a.ph,up=performance.now()/1e3),Cn={phase:a.ph,fighters:n,r:e?s.r+(e.r-s.r)*t:s.r,rt:a.rt,tl:a.tl,n:a.n,q:a.q,h:a.h,round:a.round,hype:a.hype,podium:a.podium,phaseStart:up},$_=a,Cn}var Bi=null,vu=null,Rp=null,ns=[],gp=0,yu=0;function nv(){let s={};for(let n of["lobbySeconds","minFighters","arenaCap","ceremonySeconds","damageMul","shrinkSeconds"])Xt.has(n)&&(s[n]=Number(Xt.get(n)));let e=Number(Xt.get("seed")||7),t=()=>(e=e*16807%2147483647,(e-1)/2147483646);Bi=new Kc(s,ti?t:Math.random),Rp=rp({nameOf:n=>Bi.fighters.get(n)?.name||null,rng:ti?t:Math.random}),Xt.get("crowd")&&(vu=hp(Xt.get("crowd"),ti?t:Math.random)),window.__input=n=>Bi.input(n)}var lu=0;function iv(s,e){if(vu)for(let r of vu.tick(s))Bi.input(r);for(lu+=s;lu>=.05;)lu-=.05,Bi.step(.05);let t=Bi.drainRoster();bu(t.add,t.del);let n=Bi.drain();for(let r of Rp.lines(n,Bi.t))sv(r,e);let i=Bi.snapshot();for(let r of n)Cp(r,!1);return _u(i,null,0)}function sv(s,e){let t={...s,at:e,p:null};for(t.p=fetch("/api/say?text="+encodeURIComponent(s.text)).then(n=>n.json()).catch(()=>({url:null})),yu++,t.p.finally(()=>yu--),ns.push(t),ns.sort((n,i)=>i.pri-n.pri||n.at-i.at);ns.length>3;)ns.pop()}async function Fa(s){if(s<gp||!ns.length||Fa.busy)return;let e=ns.shift();if(!e.win&&s-e.at>(e.pri>=7?9:6))return;Fa.busy=!0;let t=await e.p;Fa.busy=!1;let n=ti?Oa:performance.now()/1e3,i=t.dur||Math.min(4,.9+e.text.length/16);Pp(e.text,t.url,i),gp=n+i+.25}var rv=s=>Os.get(s)?.name||"?",av=s=>"#"+((Os.get(s)?.color??16777215)>>>0).toString(16).padStart(6,"0");function Cp(s,e){if(gi.ev++,!e&&at&&!is)try{at.fx(s,Cn)}catch{gi.err++}let t=(n,i)=>{e||en.sfx(n,en.now(),i)};switch(s.k){case"hit":{t(s.c?"crit":"punch",s.s?.5:1);break}case"block":t("block");break;case"ko":t("ko");break;case"dash":t("dash");break;case"shield":t("shield");break;case"spin":t("spin");break;case"heal":t("heal");break;case"land":t("land",.6);break;case"meteor":t("whistle");break;case"boom":t("boom");break;case"nuke":t("nuke"),ov();break;case"power":case"revive":t("power");break;case"gift":t("coin");break;case"perk":t("power");break;case"hype":t("heal"),t("cheer");break;case"phase":s.ph==="battle"&&t("go"),s.ph==="lobby"&&(vn("winner").hidden=!0);break;case"win":t("fanfare"),cv(s);break;case"join":break}s.k!=="hit"&&s.k!=="atk"&&ni(s.k)}function ov(){let s=vn("flash");s.style.transition="none",s.style.opacity="0.85",s.offsetWidth,s.style.transition="opacity 0.8s ease-out",s.style.opacity="0"}function Pp(s,e,t){gi.say++,e&&en.voice(e,t)}function cv(s){let e=vn("winner");s.a>0?(vn("winName").textContent=Ip(rv(s.a),18),vn("winName").style.color=av(s.a)):(vn("winName").textContent="\u{1F300}",vn("winName").style.color="#d08cff"),e.hidden=!1,e.style.animation="none",e.offsetWidth,e.style.animation=""}var Ip=(s,e=10)=>(s=String(s||"?").replace(/\s+/g," ").trim(),[...s].length>e?[...s].slice(0,e-1).join("")+"\u2026":s);function bp(s){if(!(!s||!s.session&&!s.all)&&(Ep=s,s.signed))try{localStorage.setItem("lg_brBoard",JSON.stringify(s.signed))}catch{}}function lv(s){let e=Us.__pr||1,t=Ha/100;Ge.setTransform(1,0,0,1,0,0),Ge.clearRect(0,0,Us.width,Us.height),Ge.setTransform(e,0,0,e,0,0),!(!at||is)&&(hv(s,t),uv(s,t))}var Cr=new Map;function hv(s,e){let t=at.drawn()||Cn.fighters,n=Su[xn],i=t.filter(l=>l.flags&Ft.alive).map(l=>({f:l,s:(l.flags&Ft.cmd?8:0)+(l.flags&Ft.crown?6:0)+(l.flags&Ft.giant?4:0)+(l.flags&Ft.bot?-4:3)}));i.sort((l,h)=>h.s-l.s);let r=i.length>14,a=Math.round(e*(r?2.3:2.7));Ge.textAlign="center",Ge.textBaseline="middle",Ge.lineJoin="round",Ge.font=`800 ${a}px -apple-system, "Segoe UI", Roboto, sans-serif`;let o=[],c=new Set;for(let{f:l}of i.slice(0,n.labels)){let h=at.project(l.x,l.y+at.headY(l),l.z);if(!h.ok||h.x<-40||h.x>Ha+40||h.y<Na*.1||h.y>Na*.8||h.y<Na*.2&&Math.abs(h.x-Ha/2)<e*12)continue;let f=o.some(_=>Math.abs(_.x-h.x)<e*11&&Math.abs(_.y-h.y)<e*3.6),d=l.id;c.add(d);let u=f?0:r&&l.flags&Ft.bot?.45:.92,p=(Cr.get(d)??0)+(u-(Cr.get(d)??0))*.25;if(Cr.set(d,p),p<.04)continue;f||o.push(h);let m=l.info||{},b=(l.flags&Ft.crown?"\u{1F451}":"")+Ip(l.flags&Ft.bot?String(m.name||"").replace(/^Bot\s+/i,""):m.name,r?8:10),g=Ge.measureText(b).width,v=a*1.3,A=h.y-v*.6;if(Ge.globalAlpha=p,Ge.fillStyle="rgba(10,6,24,0.55)",fv(h.x-g/2-e,A-v/2,g+e*2,v,v/2),Ge.fill(),Ge.fillStyle="#"+((m.color??16777215)>>>0).toString(16).padStart(6,"0"),Ge.fillText(b,h.x,A+1),l.hp<99){let _=Math.max(e*6,g*.7),w=A+v/2+e*.35;Ge.fillStyle="rgba(0,0,0,0.5)",Ge.fillRect(h.x-_/2,w,_,e*.55),Ge.fillStyle=l.hp>55?"#3ee07a":l.hp>28?"#ffd23f":"#ff4d5e",Ge.fillRect(h.x-_/2,w,_*Math.max(0,l.hp)/100,e*.55)}}if(Ge.globalAlpha=1,Cr.size>200)for(let l of Cr.keys())c.has(l)||Cr.delete(l)}var Yc={lobby:20,battle:30},xp="";function uv(s,e){let t=Cn,n=t.phase;n!==xp&&(xp=n,Yc[n]=Math.max(1,t.tl||1)),t.tl>Yc[n]&&(Yc[n]=t.tl);let i=Ha/2,r=Na*.135,a=e*4.6,o=n==="ceremony"?1:Math.max(0,Math.min(1,(t.tl||0)/(Yc[n]||1))),c=n==="battle"?t.tl>0?"#ff6b8b":"#c77dff":n==="ceremony"?"#ffd34d":"#7ee0ff",l=n==="lobby"&&t.tl>0&&t.tl<=5,h=l?1+.12*Math.max(0,Math.sin(t.tl%1*Math.PI)):1;Ge.save(),Ge.translate(i,r),Ge.scale(h,h),Ge.fillStyle="rgba(10,6,24,0.55)",Ge.beginPath(),Ge.arc(0,0,a+e*.9,0,Math.PI*2),Ge.fill(),Ge.lineWidth=e*1.1,Ge.lineCap="round",Ge.strokeStyle="rgba(255,255,255,0.18)",Ge.beginPath(),Ge.arc(0,0,a,0,Math.PI*2),Ge.stroke(),Ge.strokeStyle=l?"#ffd34d":c,Ge.beginPath(),Ge.arc(0,0,a,-Math.PI/2,-Math.PI/2+Math.PI*2*o),Ge.stroke(),Ge.textAlign="center",Ge.textBaseline="middle",Ge.fillStyle="#fff",n==="ceremony"?(Ge.font=`${Math.round(e*4.2)}px sans-serif`,Ge.fillText("\u{1F451}",0,e*.2)):(Ge.font=`900 ${Math.round(e*(l?4.4:3.6))}px -apple-system, "Segoe UI", Roboto, sans-serif`,Ge.fillText(String(l?Math.ceil(t.tl):n==="battle"?t.n:t.fighters.length),0,e*.3)),Ge.restore()}function fv(s,e,t,n,i){Ge.beginPath(),Ge.moveTo(s+i,e),Ge.arcTo(s+t,e,s+t,e+n,i),Ge.arcTo(s+t,e+n,s,e+n,i),Ge.arcTo(s,e+n,s,e,i),Ge.arcTo(s,e,s+t,e,i),Ge.closePath()}var hu=-1;function dv(){let s=Cn;if(s.phase==="lobby"&&s.tl<=5&&s.tl>0){let e=Math.ceil(s.tl);e!==hu&&(hu=e,en.sfx("beep"))}else hu=-1;s.phase!=="ceremony"&&(vn("winner").hidden=!0)}var uu=[];function pv(){for(let s=uu.length-1;s>=0;s--)uu[s].at<=Oa&&uu.splice(s,1)[0].fn()}function Lp(){vn("notice").hidden=!1}function el(){vn("notice").hidden=!0}var Da=0,fu=0,du=0,Ua=0,pu=0,Zc=0,_p=0,mu=new Map;function Dp(s,e){if(Pr?Cn=iv(s,e):Cn=tv(e),Pr&&Fa(e),at&&!is)try{at.frame(Cn,s,e)}catch{gi.err++,ni("frame-err"),gi.err>30&&za()}lv(e),e-_p>.25&&(_p=e,dv())}function mv(s){fu++,!(s-du<2)&&(Ua=fu/(s-du),fu=0,du=s,!(Y_||ti||document.hidden)&&(s<6||(Ua<Ba*.8&&xn<3?++pu>=2&&(mu.set(xn,(mu.get(xn)||0)+1),xn++,pu=0,Zc=0,ss(),ni("q"+xn)):(pu=0,Ua>=Ba*.95&&xn>0&&(mu.get(xn-1)||0)<2?++Zc>=6&&(xn--,Zc=0,ss(),ni("q"+xn)):Zc=0))))}function Np(s){if(requestAnimationFrame(Np),document.hidden)return;let e=s/1e3;if(Da&&e-Da<1/Ba-.004)return;let t=Math.min(.1,Da?e-Da:1/Ba);Da=e,Dp(t,e),mv(e)}var Oa=0;ti&&(en.clock=()=>Oa,window.__render={async frame(s){at&&at.ready&&!at.loaded&&!at.error&&await at.ready.catch(()=>{}),Oa+=s,pv();for(let e=0;e<100&&(Fa.busy||ns.length&&ns[0].p&&yu);e++)await new Promise(t=>setTimeout(t,30));return Dp(s,Oa),{phase:Cn.phase,n:Cn.n,fighters:Cn.fighters.length}},mix:s=>en.mix(s),stats:()=>at.stats()});var vp=!1;function gv(s){if(vp||tl||Pr||!gu||!s||!/tikfinity|both/.test(s.source||""))return;vp=!0;let e=document.createElement("script");e.src="/shared/tikfinity.js",e.onload=()=>{let t=window.TikFinity;t.setSink(n=>{!ei||ei.readyState!==1||(n.type==="status"?ei.send(JSON.stringify({t:"tf-status",state:n.mode==="live"?"connected":"waiting",message:n.message})):ei.send(JSON.stringify({t:"tf",ev:n})))}),t.connect()},document.head.appendChild(e)}var Mu=null;wp();ss();Pr?(nv(),Ep={session:[],all:[]}):xu();ti||(requestAnimationFrame(Np),setInterval(()=>{!document.hidden&&!Pr&&fetch("/healthz?overlay=1",{cache:"no-store"}).catch(()=>{})},4*6e4),Mu=Zd(()=>({mode:{phone:ka,ios:tl,kind:at?at.kind:"none",game:"br",q:xn,fps:Math.round(Ua*10)/10,cap:Ba},cv:{w:mi.width,h:mi.height},gl:{...at?at.stats():{},lost:Mp,restored:Sp},n:{...gi},last:Qc.slice(),audio:{unlocked:en.state()==="running",ctx:en.state(),played:en.played,fails:en.fails}}),{off:Xt.get("diag")==="0"||Pr}));window.__br={get world(){return Cn},get level(){return xn},get fps(){return Ua},get view(){return at},stats:()=>at?at.stats():null,N:gi,audio:en,roster:Os};})();
